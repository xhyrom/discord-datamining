<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Go Live is one of Discord’s most popular features, allowing users to stream applications, screens, and <em>especially</em> video games, to others on the call. <a href="https://www.youtube.com/watch?v=qTFkCOScDPg">Originally released for the desktop on August 15, 2019</a>, it’s grown to support web browsers and phones, and even gained support on Xbox Series X|S and Xbox One consoles this last year.&nbsp;</p>
            <p>Go Live’s screen sharing technology is a multi-process pipeline that requires coordination between streamers, viewers, and Discord’s backend. Each part of the process needs to support the large image resolutions and high framerates that are crucial for everything from showing off your favorite fast-paced games to crisp text legibility during document sharing. Any part of the flow can become a bottleneck and degrade the experience, so every component must work efficiently.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:941pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65e7a73341316477bbe762bd_mfTdsXeXxfgdiEXUtpk64hi-v2l7D5xAlsD_DUACvsAPC3UCj046mZLYITFUMnRyhBQPCsab_WsivmXciauQqgCDoIjn8g9DbsG8m74F6DR4cADyU_SWkV2kgSrcmzLooG1ero6UvhunsxQ0YBzXVPk.png" alt="The streamer captures and encodes the frames and transmits them to viewers, who decode and display them."></div>
            </figure>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Capture</strong></h2>
            <p>Go Live continually captures updates to your application and screen using the optimal method available on your operating system. It has a robust fallback system so if one method fails, it will quickly switch to the next method so the stream isn’t interrupted. All capture methods have the same goal but work in different ways — some are provided directly by your operating system, while others require Discord to reach into the application through dll-injection to grab what it’s rendering.</p>
            <p>Discord uses OS-specific audio APIs to capture audio from the shared screen or application. Fairly often, audio is generated from several processes of the application (ex. game music from one process, voice chat on another) so we capture audio from the shared process and all its children.&nbsp;</p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Encode</strong></h2>
            <p>A single unencoded 1080p frame for your stream can be upwards of six megabytes. Sending dozens of those frames a second would likely overwhelm most user’s bandwidth capabilities. Discord negotiates the optimal codec that the streamer can encode and all viewers can decode. Encoded frames are much smaller and more manageable to send over the network.&nbsp;</p>
            <p>Discord currently supports VP8 and H264 video codecs, with HEVC and AV1 encoders available on specific platforms. Modern GPUs often come with their own built-in encoder and decoder hardware, which Discord will utilize over software-based implementations to reduce both CPU and memory usage.&nbsp;</p>
            <p>The encoder’s final output quality (which includes framerate, resolution, and image quality) is determined by how much bandwidth is estimated to be available on the network. Network conditions are constantly changing, so the encoder needs to handle estimate changes in real-time. Go Live can’t buffer several seconds to preserve quality as streaming services do. When the network conditions drop drastically, the encoder will start dropping frames to reduce congestion, and the client will adjust image quality and latency so both are acceptable even in suboptimal network conditions.&nbsp;</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Transmission</strong></h2>
            <p>Go Live streams are transmitted to Discord’s backend and then routed to viewers. This hides the IP addresses between users on the call and allows the service to control where the stream data is routed. For example, the service will only relay video to a participant on the call if they are watching it.&nbsp;</p>
            <p>The Go Live stream is constrained by how much data can go through the network. Because the stream needs to be watchable for every viewer, the streamer will not transmit more data than what the slowest connection can support. In addition, a streamer will only transmit data if at least one viewer is watching.&nbsp;</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:855px">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65e7a78256d4f9f7466f8acc_B2Iz2yy7i8CFTwq2Wsv784npLylozP0vHhXFpbPOzbTd0J-3HWJDScPuO0dKfiG4XwasdzDjqDQptT-ayhbz0tFNEElpv_H66uXAJVHttX29U4ycfVPAmDHk2Z5Sj7NzafBjKHnbIvC8GfmGqUD9LX0.png" alt="The streamer transmits the stream to the Discord RTC Worker, which routes the data to each viewer watching it.&nbsp;"></div>
            </figure>
            <p>Estimating bandwidth is a complicated process, and getting it wrong can greatly harm a user’s Go Live experience. If the estimator underestimates any connection, the stream’s quality will be reduced as it won’t be utilizing all available bandwidth. Conversely, if the estimator overestimates the available bandwidth, the streamer can potentially send more than the network can reliably transport, causing numerous freezes and slowdowns for the viewers. Discord uses different WebRTC bandwidth estimators for different use cases.&nbsp;</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Decode</strong></h2>
            <p>The streamer will encode video and audio that all viewers can decode. Discord will renegotiate the codec every time someone joins or leaves a voice call, and Go Live will try to use a hardware decoder if it’s available to reduce resource usage.&nbsp;</p>
            <p>Audio and video are sent over separate <a href="https://en.wikipedia.org/wiki/Real-time_Transport_Protocol">RTP packets</a> and the receiver synchronizes them before playback. Although the Go-Live stream is not synced with the voice chat, we try to keep latency low enough that most people won’t notice it. It would <em>really</em> suck if you see an awesome play five seconds after you hear your friends cheering.</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How We Measure Performance</strong></h2>
            <p>Go Live users expect the feature to just work. For general video quality, there are many factors to optimize for including:</p>
            <ul role="list">
                <li>Frame rate</li>
                <li>Consistent frame delivery</li>
                <li>Low latency</li>
                <li>Image quality (see <a href="https://en.wikipedia.org/wiki/Video_Multimethod_Assessment_Fusion#:~:text=Video%20Multimethod%20Assessment%20Fusion%20(VMAF,University%20of%20Texas%20at%20Austin.">VMAF</a>)</li>
                <li>Network utilization</li>
            </ul>
            <p>We also monitor your system’s CPU and memory usage to make sure we’re not degrading your overall experience. Some of these metrics are at odds with each other, so we make tradeoffs that provide the best user experience. For example, trying to balance between adding a bit of latency to reduce dropped frames, but dropping frames when latency gets too high.&nbsp;</p>
            <p>We also monitor a user sentiment metric captured via a survey (“good”, “neutral”, and “bad”) that periodically pops up at the end of a stream (yes, we do read those!). While it can be noisy, it’s a comprehensive metric that fully captures user sentiment end to end. This has helped us identify problems even when the other KPIs look healthy. </p>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Closing Thoughts</strong></h2>
            <p>We’re happy that Go Live continues to be a popular feature on Discord, and we’re always looking for more ways to improve upon the technology. We’ve been working on making it even better over these last few months, so keep an eye out in the future for some in-depth follow-ups on how we’ve improved the experience.</p>
        </div>
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