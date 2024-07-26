<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Discord’s Go Live feature is designed to bring high-quality,
        high-framerate streams of games or applications at a low enough latency
        that lets viewers talk and interact with the streamer in real time.
        <a
          href="https://discord.com/blog/how-it-all-goes-live-an-overview-of-discords-streaming-technology"
          >Check out our first blog post all about Go Live here to catch up</a
        >.&nbsp;
      </p>
      <p>
        To achieve both the quality and speed needed for Go Live, Discord uses
        its own custom capture and encoding code that integrates with operating
        systems and video drivers, using WebRTC to transport the video from
        streamer to viewer.
      </p>
      <p>
        To keep latency low, WebRTC is constantly tuning target bitrates and
        frame rates based on what's going on in the transport in real
        time.&nbsp;
      </p>
      <p>
        Even with this parameter adaptation, we’ve seen cases where we weren’t
        happy with the visual quality or encoding performance of Go Live.
        Sessions using AMD graphics cards seemed particularly worse — we even
        had a Discord staff member tell us about the choppy and blocky streaming
        experience on their new PC with a recent AMD video card.
      </p>
      <p>
        So… how can we fix this? Let’s dive in together and make Go Live the
        best it can be:
      </p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Too Many Key Frames</h2>
      <p>
        In video compression, a “key frame” is a self-contained video frame that
        depends on no previous content. When either a new viewer joins a Go Live
        session or an existing viewer loses the previous picture, a new key
        frame must be sent. Following the new key frame, a much smaller “delta
        frame” is used instead which only encodes the changes from the previous
        frame.&nbsp;
      </p>
      <p>
        In a well-behaved Go Live stream, key frames are typically 6 to 10 times
        the data size of a delta frame. These key frames need to be large enough
        to provide enough context for the following frames, but small enough to
        not congest the user’s network or slow down delivery of the video. One
        way to avoid the tradeoffs presented by optimizing key frames is to send
        as few key frames as possible.
      </p>
      <p>
        When working to optimize Go Live, we found some of the adjustments we
        were making to key frames and delta frames ended up causing the encoder
        to completely reset and produce a new key frame every parameter update.
        Instead of getting a key frame every 60 seconds, we were spitting out
        keyframes *<em>every time*</em> webrtc signaled a frame rate change - up
        to once a second! Sending these large key frames at such a rapid rate
        was eating up all of the allocated bandwidth.&nbsp;
      </p>
      <figure class="w-richtext-align-center w-richtext-figure-type-image">
        <div>
          <img
            src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/66315325dd016047d62c9100_Blog_Chart.png"
            loading="lazy"
            alt="A graph of VMAF scores, frame counts from 0 to 3600 form the ticks on the horizontal axis, VMAF score from 0 to 100 is on the vertical axis, VMAF score dips regularly on 120 frame intervals and more sporadically throughout. The legend suggests this clip targets an 8000 kbps from a clip called “gta_updating_keyint”"
          />
        </div>
        <figcaption>
          These regular dips in per-frame VMAF were caused by key frames.
        </figcaption>
      </figure>
      <p>
        To meet our target of one key frame per minute, we had been asking our
        encoder to update an internal key frame interval about once per second
        as frame rate counts were updating. However, this API was
        <em>always</em> forcing a new key frame. We stopped calling that API all
        together and instead just started counting frames and time on the
        outside to figure out when a key frame should be inserted.
      </p>
      <p>
        Changing the API we used to ask the encoder for key frames solved this
        problem! Now, the system was only sending a key frame every 60 seconds,
        causing key frames to take up much less bandwidth. Less bandwidth, more
        streaming, more fun!
      </p>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Low Quality Key Frames</h2>
      <p>
        We’ve made progress! But the visual quality of both the key frames and
        the rest of the stream was still lacking. If key frames are low quality,
        the encoder is going to have a harder time making the rest of the frames
        look good — especially with high-complexity content like the new 4X
        strategy game you’ve been wanting to stream. In addition, the pixel
        content of key frames is re-used by delta frames, meaning if the key
        frames are bad, those delta frames can wind up looking worse, too!&nbsp;
      </p>
      <p>
        Despite the final stream not looking so hot, we noticed our encoder
        wasn’t using the full power of the bitrate allocated to the video
        stream. Why wasn’t our encoder spending all the bits available to it to
        improve its stream’s quality?
      </p>
      <p>
        When looking at each individual compressed frame coming out of the
        encoder (we have tools that act like microscopes for this!), we saw that
        the poor quality seemed to be caused by the encoder dutifully following
        a set of strict rate-targeting rules we gave it — whoops! We were asking
        the encoder to encode every frame by an equal fraction of the bit target
        —for example, at 60 fps we asked for each frame to be no more than
        one-sixtieth of the average bitrate.&nbsp;
      </p>
      <p>
        This might seem reasonable at first, but the encoder wasn’t provided
        with enough bits to start a fresh key frame since nothing was carrying
        over from previous pictures. The encoder treated the frame target as a
        hard limit, so it’s conservative about rate allocation within the frame,
        which caused each frame to undershoot its goal. And when the encoder
        undershoots on a frame, it couldn’t spend those leftover bits on the
        next frame.&nbsp;
      </p>
      <p>
        By relaxing the period of time in which the bitrate was expected to
        average out, we were able to get much higher quality key frames, better
        quality <em>after</em> the key frames, and achieved an average bitrate
        much closer to the target bitrate.
      </p>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Plagued by the Frame Dropper</h2>
      <p>
        At this point, both the key frames and the subsequent frames looked much
        better, and standalone encoding worked well outside of the app. However,
        when we plugged all this power into Discord, we saw some… odd results:
        when streaming with our new encoding configuration, sometimes the frame
        rate would quickly fall from 60 fps to 30 fps and stay there for
        good.&nbsp;
      </p>
      <p>
        Once we did some digging into these new low framerates, we saw something
        strange going on: WebRTC would occasionally drop some frames if it
        thought the encoder was overshooting the target bitrate. When that
        happened, we would reconfigure the encoder with the lower frame rate at
        which the pipeline was running. This effectively meant assigning more
        bits to each remaining frame, causing individual frame sizes to go up
        and frame drops to compound. This process would repeat over and over
        until the frame dropper was dropping half the frames, which turned 60fps
        to 30fps.&nbsp;
      </p>
      <p>
        Once identified, the issue was easy to mitigate! By leaving a little bit
        of headroom to take into consideration the difference between the actual
        frame rate and the target frame rate, the encoder would no longer
        overspend right after a frame drop. As a bonus, frame drops from other
        sources such as the capture pipeline lagging would also be protected
        from overspend as they recovered on their own.&nbsp;
      </p>
      <p>
        With this fix in place, achieved frame rates not only recovered but
        exceeded their previous levels!&nbsp;
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Conclusion</h2>
      <p>
        We were able to drive a <em>massive</em> increase in perceptual quality
        on AMD cards like our staff member was using thanks to fewer key frames
        and less strict rate control. While the less-strict rate control drove
        some immediate FPS regressions, we were able to repair the FPS decrease
        by working around the limits of the frame dropper, and even increase the
        average FPS! Average FPS for streams targeting 60 FPS improved by 2
        frames per second and the percentage of sessions seeing fewer than 50
        FPS fell from 39% to 18%.&nbsp;&nbsp;
      </p>
      <p>‍</p>
      <figure class="w-richtext-align-center w-richtext-figure-type-image">
        <div>
          <img
            src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/66315462badd8d0cf3129e65_VB_DmkslCx1fMpdk9LzS0PQ0VM1g2EUXWE6L-1MUPEzyMVJDGhBTbQB3kdFClGAaikmaF8bsC6r_hIZQ_4d6GosmJv01DhF1brKJPKUKwcNjHuCfiuBz4qEoXYUXIkE85HF4rbKRNlWBIBO6lq_Ywg0.png"
            loading="lazy"
            alt="Graph titled “Percent of session hitting less than 50 fps (when targeting 60, AMD GPU on Windows).” Horizontal axis is labeled with dates from July 1, 2023 to January 1, 2024. The vertical axis is labeled “percent of sessions” (ranging from 15 to 45). The line on the graph starts at 39% on July 1, wiggles up and down over time, and ends at 18% on January 1."
          />
        </div>
      </figure>
      <p>
        We hope you enjoyed our deep dive into this AMD mystery! If tackling
        problems such as this is something that you love, consider taking a peek
        at <a href="https://discord.com/careers">our Jobs page</a> from time to
        time — we’d love to have you aboard!
      </p>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
  <div id="heading-7" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
  <div id="heading-8" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
  <div id="heading-9" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
  <div id="heading-10" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
</div>
