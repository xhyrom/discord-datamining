<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        At Discord, we’re always thinking about ways to improve our services and
        increase performance. After all, the faster our app gets, the sooner you
        can return to your friends and conversations!&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        Over the last six months, we embarked on a quest to support this
        endeavor, working to reduce the amount of bandwidth our clients use,
        especially on iOS and Android, hoping that decreasing bandwidth usage
        would lead to a more responsive experience.
      </p>
      <h2>Background</h2>
      <p>
        When your client connects to Discord, it receives real-time updates
        about what’s happening through a service that we call the “gateway.”
        Since late 2017, the client’s gateway connection has been compressed
        using zlib, making messages anywhere from 2 to 10 times smaller.
      </p>
      <p>
        Since then,
        <a href="https://facebook.github.io/zstd/">zstandard</a> (originally
        released in 2015) has gained enough traction to become a viable
        replacement for zlib. Zstandard offers higher compression ratios and
        shorter compression times and supports
        <a href="https://github.com/facebook/zstd#dictionary-compression-how-to"
          >dictionaries</a
        >: a way to preemptively exchange information about compressed content,
        further increasing compression ratios and reducing the overall bandwidth
        usage.
      </p>
      <p>
        We attempted to use zstandard in the past, but, at the time, the
        benefits weren’t worth the costs. Our testing in 2019 was desktop-only
        and used too much RAM. However, a lot can happen in five years! We
        wanted to give it another try, and the support for dictionaries appealed
        to us, especially as most of our gateway payloads are small and in a
        well-defined shape.
      </p>
      <p>
        We believed the predictability of these payloads would be a perfect
        application of dictionaries to further reduce bandwidth usage.
      </p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Armed with this knowledge, we put on our lab coats, slapped on our
        goggles, and started experimenting. On paper, we thought zstandard would
        be better than zlib but we wanted to validate this theory against our
        current workload.
      </p>
      <p>
        We opted to do a “dark launch” of plain zstandard: the plan was to
        compress a small percentage of production traffic both with zlib and
        zstandard, collect a bunch of metrics, then discard the zstandard data.
        This allowed us to experiment with zstandard to quickly compare its
        results against zlib. Without this experiment, we would have to add
        zstandard support for our clients — desktop, iOS, and Android — which
        would require about a month’s lead time before we could fully determine
        the effects of zstandard. We didn’t know how well zstandard would
        perform and didn’t want to wait a whole month, but a dark launch allowed
        us to iterate over days as opposed to weeks.
      </p>
      <p>
        Once we got our experiment set up and deployed onto our gateway cluster,
        we set up a dashboard to see how zstandard performed. We flipped the
        switch to start sending a teeeeeny bit of traffic through the dark
        launch code, and the initial results appeared to be… underwhelming.
        Zstandard was performing <em>worse</em> than zlib was.
      </p>
      <figure
        style="max-width: 752pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5caa61ad96d1a395f51d_AD_4nXeCYg9XJmJM9EPtYhMpoXSrE89c5FHDpTPo-_g1CsEEAhiib-D8EUGRZlxPL9CDWw0hmSeRVdGLCJPqkwdIpt5oi80KsHQL5bxIJfOJ3dC76sFgSpj8Lh4f6lqEfsZXpdpywTPUdoEFsRo6WIPHiLyQMmt9.png"
            loading="lazy"
            alt="A compression ratio chart for Zstandard. The chart reads: “User Guild Settings Update: 12.26. Guild Emojis Update: 7.35. Ready Supplemental: 7.04. Thread Member List Update: 6.88.”"
          />
        </div>
        <figcaption>Zstandard compression ratio</figcaption>
      </figure>
      <figure
        style="max-width: 752pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5d5aa15a87d53673cd47_AD_4nXdmCN0zlF9hxaVHFEwrEkJO5kEqsRq92ig73v31W-8gg9_yRUAryJqJC3jWGCzy3vJ_F1OvvUj9AQXwaYORhAmLoij9PWsswGH9-zagbN2AxVeG7Xs6fC0LEnZpCWZ5VjiTudVionBiCAhSz21suEQaNn0.png"
            loading="lazy"
            alt="A compression ratio chart for Zlib. The chart reads: “User Guild Settings Update: 13.95. Guild Member List Update: 9.86. Auto Moderation Action: 9.56. Voice Channel Effect Send: 9.27.” "
          />
        </div>
        <figcaption>Zlib compression ratio</figcaption>
      </figure>
      <p>
        To compare the performance of these two compression algorithms, we used
        their “compression ratio.” The compression ratio is measured by taking
        the uncompressed size of the payload and dividing it by the compressed
        size — a larger number is better.
      </p>
      <p>
        Looking at the images above, which measure the compression ratio for the
        various dispatch types (<a
          href="https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes"
          >op 0</a
        >), with zlib, <strong>user_guild_settings_update</strong> has a
        compression ratio of 13.95 while with zstandard it has a compression
        ratio of 12.26.&nbsp;
      </p>
      <p>
        The graph below further illustrates that zstandard performed worse than
        zlib: the average size of a <strong>MESSAGE_CREATE</strong> payload
        compressed with zlib was around 250 bytes, while with zstandard, the
        same payload was over 750!
      </p>
      <figure
        style="max-width: 600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5d81a15a87d53673ff18_AD_4nXc_N1o4Qmj70b_Oh8Oh9xlMRZNw2hTyEkkFy8_hzYeDBJ-S99ejgt9MPkNp6kgVPoT_YX-NV-hMKMNFgSlOr1nerXGqpN_HCc3JvKoH86TMaM4II92Mw_NhbTVkCMy5g85ka153WCZ7-QHmsrEJ7j3mNqD8.png"
            loading="lazy"
            alt="A bar chart comparing compression methods to payload sizes. Zlib lands at just over 250 bytes, while zstandard reaches over 750 bytes."
          />
        </div>
      </figure>
      <p>
        The same trend was observed for most other dispatches: zstandard was not
        outperforming zlib like we thought it would. What’s going on here?
      </p>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Streaming Zstandard<br /></h2>
      <p>
        It turns out that one of the key differences between our zlib and
        zstandard implementations was that zlib was using streaming compression,
        while zstandard wasn’t.&nbsp;
      </p>
      <p>
        As mentioned previously, most of our payloads are comparatively very
        small, only a few hundred bytes at most, which doesn’t give zstandard
        much historical context to work with to further optimize how it
        compresses future payloads. With streaming compression, the zlib stream
        is spun up when the connection is opened and exists until the websocket
        is closed. Instead of having to start fresh for every websocket message,
        zlib can draw on its knowledge of previously compressed data to inform
        its decisions on how to process fresh data. This ultimately leads to
        smaller payload sizes.
      </p>
      <p>
        The question then became: “could we get zstandard to do this?” The
        answer to that was… “sorta.” Our gateway service is written in elixir,
        and while zstandard supports
        <a href="https://facebook.github.io/zstd/zstd_manual.html#Chapter7"
          >streaming compression</a
        >, the various zstandard bindings for elixir/erlang we looked at
        didn’t.&nbsp;
      </p>
      <p>
        We ultimately settled on using
        <a href="https://github.com/silviucpp/ezstd">ezstd</a> as it had
        dictionary support (more on that later).While it didn’t support
        streaming at the time,in the spirit of open source we forked ezstd to
        add support for streaming, which we later
        <a href="https://github.com/silviucpp/ezstd/pull/15"
          >contributed back upstream</a
        >.
      </p>
      <p>
        We then repeated the dark launch experiment, but with zstandard
        streaming and got the following results:
      </p>
      <figure
        style="max-width: 296pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb68683aeb8f2ee1063854_AD_4nXfRJh2JKRqLoQC5EiZuN5E8wmWEr5yAZGx07y5u_eTvqMYlzOVTTmdggzgp8-hJNWSlPklg7zjMyccyIaZkWF45AGSjvvmlhk-kzDIgaG004-6R_Ow_WnEuIbZHLvXes5AzunAPS9Jo0iA8MrZyD_vVHZ4.png"
            loading="lazy"
            alt=""
          />
        </div>
        <figcaption>
          <strong>Message Create Compression Ratios</strong>
        </figcaption>
      </figure>
      <p>‍</p>
      <figure
        style="max-width: 600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5dc8045b706867911f67_AD_4nXc5poqnDTStFq1yAQdxKYlNM76Ikyol_-1Erb2E7IQK-MozKtL7u3BFjtSlkP9-RTZNzQFZFoP1Uxpq7PB4oNDRoc3mv0cxVvk4roDqtroLtGDfstiAsyVy_i6W4TSLCHH6JMu8QvJWoYRc7Y5UrDOMQo0.png"
            loading="lazy"
            alt="A bar chart comparing payload sizes of  Zlib streaming, zstandard, and zstandard streaming. Zlib streaming payloads are over 250 bytes, while zstandard hits over 750 bytes. Zstandard streaming payloads land at under 250 bytes."
          />
        </div>
      </figure>
      <p>
        As the above data illustrates, zstandard streaming increased the
        compression ratio from 6 to almost 10 and dropped the payload size from
        270 bytes to 166.
      </p>
      <p>
        This trend held true for most of the other dispatches: zstandard
        streaming significantly outperforms zlib both in time to compress and
        compression ratio.
      </p>
      <figure class="w-richtext-align-center w-richtext-figure-type-image">
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5dfe1481af30f65a3830_AD_4nXdEg8Tp2r5wYGbJoYw-s0ezvLu8cc6JMntlFtBC1k8MmK4Nh1cQ29yItE62RM1VSVCa9N663_OGdmYBAwmJfVxMlEvX0Vjr0t8H6Kucg3LgSrjaUvyRo_Wyw3vebN1ui4-wIOSVRGte9IAKysiZxdiLFwrI.png"
            loading="lazy"
            alt="A chart comparing MESSAGE_CREATE times between zlib streaming and zstandard streaming. Zlib streaming takes just over 100 microseconds, while zstandard streaming lands at under 50 microseconds."
          />
        </div>
      </figure>
      <p>
        Looking once again at <strong>MESSAGE_CREATE</strong>, the compression
        time per byte of data is significantly lower for zstandard streaming
        than zlib, with zlib taking around 100 microseconds per byte and
        zstandard taking 45 microseconds.
      </p>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Pushing Further</h2>
      <p>
        While our initial experimentation proved that zstandard streaming
        outperformed zlib streaming, the remaining question we had was: “How far
        can we push this?” Our initial experiments used the default settings for
        zstandard and we wanted to know how high we could push our compression
        ratio by playing around with the compression settings.
      </p>
      <p>So how far did we get?</p>
      <h3>Tuning</h3>
      <p>
        Zstandard is highly configurable and enables us to tweak various
        compression parameters. We focused our efforts on three parameters that
        we thought would have the biggest impact on compression: chainlog,
        hashlog, and windowlog. These parameters offer trade-offs between
        compression speed, memory usage, and compression ratio. For example,
        increasing the value of the chainlog generally improves the compression
        ratio, but at the cost of increasing memory usage and compression time.
      </p>
      <p>
        We also wanted to ensure that with the settings we decided on, the
        compression contexts would still fit in memory on our hosts. While it’s
        simple to add more hosts to soak up the extra memory usage, extra hosts
        cost money and at some point, provide diminishing returns on the gains.
      </p>
      <p>
        We settled on an overall compression level of 6, a chainlog and hashlog
        of 16, and a windowlog of 18. These numbers are slightly above
        <a
          href="https://github.com/facebook/zstd/blob/a761013b0390892e8728fc45171f831cf23c3792/lib/compress/clevels.h#L25"
          >the default settings that you can see here</a
        >
        and would comfortably fit in the memory of a gateway node.
      </p>
      <h3>Zstandard Dictionaries</h3>
      <p>
        Additionally, we wanted to investigate if we could take advantage of
        zstandard’s dictionary support to compress data even further. By
        pre-seeding zstandard with some information, it can more efficiently
        compress the first few kilobytes of data.&nbsp;
      </p>
      <p>
        However, doing this adds additional complexity as both the compressor
        (in this case, a gateway node) and the decompressor (a Discord client)
        need to have the same copy of the dictionary to communicate with each
        other successfully.
      </p>
      <p>
        To generate a dictionary to use, we needed data…
        <em>and a lot of it</em>. Zstandard has a built-in way to generate
        dictionaries (<em>zstd --train</em>) from a sample of data, so we just
        had to collect a whooole buncha samples.&nbsp;
      </p>
      <p>
        Notably, the gateway supports two encoding methods for payloads: JSON
        and
        <a href="https://www.erlang.org/doc/apps/erts/erl_ext_dist.html">ETF</a
        >, and a JSON dictionary wouldn’t perform as well on ETF (and vice
        versa) so we had to generate two dictionaries: one for each encoding
        method.
      </p>
      <p>
        Since dictionaries contain portions of the training data and we’d have
        to ship the dictionaries to our clients, we needed to ensure that the
        samples we would generate the dictionaries from were free of any
        personally-identifiable user data. We collected data involving 120,000
        messages, split them by ETF and JSON encoding, anonymized them, and then
        generated our dictionaries.
      </p>
      <p>
        Once our dictionaries were built, we could use our gathered data to
        quickly evaluate and iterate on its efficacy without needing to deploy
        our gateway cluster.
      </p>
      <p>
        The first payload we tried compressing was “READY.” As one of the first
        (and largest) payloads sent to the user, READY contains most of the
        information about the connecting user, such as guild membership,
        settings, and read states (What channels should be marked as
        read/unread). We compressed a single READY payload of 2,517,725 bytes
        down to 306,745 using the default zstandard settings which established a
        baseline. Utilizing the dictionary we just trained, the same payload was
        compressed down to 306,098 bytes – a gain of around 600 bytes.
      </p>
      <p>
        Initially, these results seemed discouraging, but we next tried
        compressing a smaller payload, called TYPING_START, sent to the client
        so it can show the “XXX is typing…” notification. In this situation, a
        636 byte payload compresses down to 466 bytes without the dictionary and
        187 bytes with the dictionary. We saw much better results with our
        dictionaries against smaller payloads simply due to how zstandard
        operates.&nbsp;
      </p>
      <p>
        Most compression algorithms “learn” from data that has already been
        compressed, but with small payloads, there isn’t any data for it to
        learn from. By preemptively informing zstandard what the payload is
        going to look like, it can make a more informed decision on how to
        compress the first few kilobytes of data before its buffers have been
        fully populated.
      </p>
      <p>
        Satisfied with these findings, we deployed dictionary support to our
        gateway cluster and started experimenting with it. Utilizing the dark
        launch framework, we compared zstandard to zstandard with dictionaries.
      </p>
      <p>Our production testing yielded the following results:</p>
      <figure
        style="max-width: 217pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5f2170b2edf1b422de56_AD_4nXfFOonNWIBnci1c-cNsmJKSC5uTEVj23McFJu-0dXGzFsoaZIyLciEpiqwJC_KSr2QP5U0nEEsba_AcriUbIcATZqRqYz7GN3qjn_UcU9QiR2TDIH_FiaANBNDnWgu3HlwgX83yHxNf3eE-Dzz1DMfWA3sd.png"
            loading="lazy"
            alt="A small chart comparing payload compression ratios of zstandard, with and without dictionaries. With dictionaries, the payload compression ratio is 6.63. Without dictionaries, the compression ratio is 6.4."
          />
        </div>
        <figcaption><strong>Ready Payload Size</strong></figcaption>
      </figure>
      <p>
        We specifically looked at the READY payload size as it’s one of the
        first messages sent over the websocket and would be most likely to
        benefit from a dictionary. As shown in the table above, the compression
        gains were minimal for READY, so we looked at the results for more
        dispatch types hoping dictionaries would give more of an edge for
        smaller payloads.&nbsp;
      </p>
      <p>
        Unfortunately, the results were a bit mixed. For example, looking at the
        message create payload size that we’ve been comparing throughout this
        post, we can see that the dictionary actually made things worse.
      </p>
      <p>‍</p>
      <figure class="w-richtext-align-center w-richtext-figure-type-image">
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5f49c09e80a03e4614c5_AD_4nXeZGwfQPGKphBAcy3Wpc2HH20FpO3wZ2Os9w7VC6adtmZTDnLH0B8MEAUPO1UoQhj9RlEdQL9czlCKW15PVC1El6hkXy52Rcx8TNzNsPJAWKvN7o7wYjwyFxj5aMyob27AOTmBjN20ZdcusTgc7FNJxt96s.png"
            loading="lazy"
            alt="A chart comparing MESSAGE_CREATE payload sizes between Zlib streaming, Zstandard, Zstandard streaming, and Zstandard Streaming Plus Dictionary. Zlib streaming’s payload is just over 250 byes and zstandard is over 750 bytes. The newest entries, Zstandard Streaming and Zstandard Streaming Plus Dictionary are both under 250 byes, but Zstandard Streaming without Dictionary has a slightly smaller file size."
          />
        </div>
      </figure>
      <p>
        Ultimately, we decided not to continue with our dictionary experiments.
        The slightly improved compression dictionaries would provide was
        outweighed by the additional complexity they would add to our gateway
        service and clients. Data is a big driver of engineering at Discord, and
        the data speaks for itself: it wasn’t worth investing more effort into.
      </p>
      <h3>Buffer Upgrading</h3>
      <p>
        Finally, we explored increasing zstandard buffers during off-peak hours.
        Discord’s traffic follows a diurnal pattern, and the memory we need to
        handle peak demand is significantly more than what’s needed during the
        rest of the day.&nbsp;
      </p>
      <p>
        On the surface, autoscaling our gateway cluster would prevent us from
        wasting compute resources during off-peak hours. However, due to the
        nature of gateway connections being long-lived, traditional autoscaling
        methods don’t work well for our workload. As such, we have a lot of
        extra memory and compute during off-peak hours. Having all this extra
        compute laying around raised the question: Could we take advantage of
        these resources to offer greater compression?
      </p>
      <p>
        To figure this out, we built a feedback loop into the gateway cluster.
        This loop would run on each gateway node and monitor the memory usage by
        the clients connected to it. It would then determine a percentage of new
        connecting clients that should have their zstandard buffer upgraded. An
        upgraded buffer increases the windowlog, hashlog, and chainlog values by
        one, and since these parameters are expressed as a power of two,
        increasing these values by one will roughly double the amount of memory
        usage the buffer uses.
      </p>
      <p>
        After deploying and letting the feedback loop run for a bit, the results
        weren’t as good as we had initially hoped. As illustrated by the graph
        below, over a 24 hour period, our gateway nodes had a relatively low
        upgrade ratio (Up to 30%), and was significantly less than we
        anticipated: around 70%.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5f89a5aa109682aa20c0_AD_4nXdu2egSUa4dMnBCuvHFxPFrrxdROCyeqCAs8AP95O-jHEYcKx5jUXDsiuw7bCAmXiDM9g9ewrch5e4i7TQMQi7CpaYvBVsJr_bKMTbU9KiDMOjsMC9V1wDnEK6YH-Ksox9c8oZf5e-Jdh1AtumuemXMKtI.png"
            loading="lazy"
            alt="A graph showing the upgrade ratio for each gateway host over a 24 hour period. From 00:00 to 03:00, the lines are distributed between 0 and 0.2 peaking at 00:00 and tapering off. From 03:00 to 18:00 there are no lines. From 18:00 to 23:59 the lines are distributed between 0 and 0.2 peaking around 22:00"
          />
        </div>
      </figure>
      <p>
        After doing a bit of digging, we discovered that one of the primary
        issues that was causing the feedback loop to behave sub-optimally was
        memory fragmentation: the feedback loop looked at real system memory
        usage, but BEAM was allocating significantly more memory from the system
        than was needed to handle the connected clients. This caused the
        feedback loop to think that it had less memory to work with than was
        available.
      </p>
      <p>
        To try and mitigate this, we did a little experimentation to tweak the
        BEAM allocator settings — more specifically, the
        <em>driver_alloc</em> allocator, which is responsible for
        (<em>shockingly</em>) driver data allocations. The bulk of the memory
        used by a gateway process is the zstandard streaming context, which is
        implemented in C using a
        <a href="https://www.erlang.org/doc/system/nif.html">NIF</a>. NIF memory
        usage is allocated by <em>driver_alloc. </em>Our hypothesis was that if
        we could tweak the <em>driver_alloc</em> allocator to more effectively
        allocate or free memory for our zstandard contexts, we’d be able to
        decrease fragmentation and increase upgrade ratio overall.
      </p>
      <p>
        However, after messing around with the allocator settings for a little
        bit, we decided to revert the feedback loop. While we probably would
        have eventually found the right allocator settings to dial in, the
        amount of effort needed to tweak the allocators combined with the
        overall additional complexity that this introduced into the gateway
        cluster outweighed any gains that we would’ve seen if this was
        successful.
      </p>
      <h3>Implementation and Rollout</h3>
      <p>
        While the original plan was to only consider zstandard for mobile users,
        the bandwidth improvements were significant enough for us to ship to
        desktop users as well! Since zstandard ships as a C library, it was
        simply a matter of finding bindings in the target language —Java for
        Android, Objective C for iOS, and Rust for Desktop — and hooking them
        into each client. Implementation was straightforward for Java (<a
          href="https://github.com/luben/zstd-jni/"
          >zstd-jni</a
        >) and Desktop (<a href="https://crates.io/crates/zstd-safe"
          >zstd-safe</a
        >), as bindings already existed, however for iOS, we had to write our
        own bindings.
      </p>
      <p>
        This was a risky change with the potential to render Discord completely
        unusable if things were to go wrong, so the rollout was gated behind an
        experiment. This experiment served three purposes: allow the quick
        rollback of these changes if things were to go wrong, validate the
        results we saw in the “lab,” and enable us to gauge if this change was
        negatively affecting any baseline metrics.
      </p>
      <p>
        Over the course of a few months, we were able to successfully roll out
        zstandard to all of our users on all platforms.
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Another Win: Passive Sessions V2<br /></h2>
      <p>
        While this next part isn’t directly related to the zstandard work, the
        metrics that guided us during the dark launch phase of this project
        revealed a surprising behavior. Looking at the actual size of dispatches
        that were sent to the client, passive_update_v1 stood out. This dispatch
        consisted of over 30% of our gateway traffic while the actual number of
        dispatches sent were comparatively small–around 2%.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb5fe0f048cb0591c16080_AD_4nXf-UwN9XBhbGiKeqVukeCH4gYs4jn2JZM7jEY_vzWGncfyKL9QJiQJgnm4bXQvPpNXzD4cCObgJjyH3KoPFwDnYYfPQEQbvvZAqiSYa9qkH7ykVYJCw7IFYZHtKKDkABq07Px_J2gMmX6ejg6ucUS_IWxFU.png"
            loading="lazy"
            alt="A pie chart with multiple sections. Of over a dozen sections, the ones that are pointed out are: Passive Update V1: 35.61%, Message Create: 20.04%, Ready: 11.66%, Guild Member List Update: 8.5%, Presence Update: 2.67%."
          />
        </div>
      </figure>
      <p>
        We employ passive sessions to avoid sending most messages that a server
        generates to clients that may not even open the server. For example, a
        Discord server could be very active sending thousands of messages per
        minute, but if a user isn’t actually reading those messages, it doesn’t
        make sense to send them and waste their bandwidth. Once you tab into the
        server, a passive session will be “upgraded” into a normal session and
        receive the full firehose of dispatches from that guild.
      </p>
      <p>
        However, passive sessions still need to be periodically sent a limited
        amount of information, which is the purpose of PASSIVE_UPDATE_V1.
        Periodically, all passive sessions will receive an update with a list of
        channels, members, and members in voice so your client can still be kept
        in sync with the server.
      </p>
      <p>
        Diving into the actual contents of one of those PASSIVE_UPDATE_V1
        dispatches, we would send <em>all</em> of the channels, members, or
        members in voice, even if only a single element changed. Passive
        sessions were implemented as a means to scale Discord servers to
        hundreds of thousands of users and it worked well at the time.
      </p>
      <p>
        However as we’ve
        <a
          href="https://discord.com/blog/maxjourney-pushing-discords-limits-with-a-million-plus-online-users-in-a-single-server"
          >continued to scale</a
        >, sending these snapshots which consist of mostly redundant data was no
        longer sufficient. To fix this, we introduced a new dispatch that only
        sends the delta of what’s changed since the last update. This dispatch,
        aptly named PASSIVE_UPDATE_V2, significantly reduced the overall
        bandwidth from 35% of the gateway’s bandwidth to 5%, equating to a 20%
        reduction cluster-wide.
      </p>
      <figure
        style="max-width: 819pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb602c922d2dd61dbb8ad2_AD_4nXf8mgenY8u6qMaex3kvnEvd2xZty8fNW7sc139x4hEnnF8kQpJyKCzM3dpl5XULIRjgrBqljIb1ti3FBua6dxP3_4C2YKS8bEwYGsI6ofgRZ0xAALjFDgh-tXRxgL_JoVOzQ6StLLkCzYdtmW6UJHImxEwa.png"
            loading="lazy"
            alt="An additional pie chart with multiple sections. The sections that are pointed out are: Message Create: 28.31%, Reader: 21.86%, Guild Member List Update: 10.17%, Passive Update V2: 4.73%/4.7%. Voice State Update: 3.68%, and Guild Update: 1.01%. "
          />
        </div>
      </figure>
      <p>‍</p>
      <p>‍</p>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>B I G Savings</h2>
      <p>
        Through the combined effects of Passive Sessions v2 and zstandard, we
        were able to reduce the gateway bandwidth used by our clients by almost
        40%. That’s a LOT of data!&nbsp;
      </p>
      <p>‍</p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb605a048df7ca5e92d7cf_AD_4nXesiM1r_vEP3jlBiL4A0FryF6xUh8bKLxem8z-HObi-aFHRbQ2TlhJ-Rys4HScOw8_RsQhkx-w3uLE39WVR-_JXfHcoPVHFv4gmdFMwUWpT9Evhn2bPHqlQjh_r2bSRM1xez4cYHjMHw96IlH8MhDZ7VKzl.png"
            loading="lazy"
            alt="A graph of the outgoing bandwidth on the gateway cluster showing dates from January 2024, to April 2024. The line on the chart moves up and down diurnally up until April 18, which is demarcated with a red line labeled “zstandard”. The line then trends downwards until around May 30, 2024 also demarcated with a red line labeled “Passive Sessions v2.” The line levels oout after this, significantly lower than where it started."
          />
        </div>
      </figure>
      <p>
        The chart shows the relative outgoing bandwidth of the gateway cluster
        from January 1 2024 to August 12, 2024, with the two demarcations being
        the zstandard rollout in April, followed by passive sessions v2 in late
        May.
      </p>
      <p>
        While the passive sessions optimization was an unintended side-effect of
        the zstandard experimentation, it shows that with the right
        instrumentation and by looking at graphs with a critical eye, big
        savings can be achieved with a reasonable amount of effort.
      </p>
    </div>
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
