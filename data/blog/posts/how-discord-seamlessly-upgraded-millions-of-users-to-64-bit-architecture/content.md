<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>32-Bits Can Go a Long Way</h2>
      <p>
        If you’ve made it to this blog post, you likely know Discord as a
        desktop application where you talk, play, and hang out while gaming, but
        did you know that Discord was first launched in 2015 as only a web app?
      </p>
      <p>
        Starting as a web app allowed us to offer people a way to chat with
        their friends from the portability of their browsers, but to deliver the
        experience we wanted to offer, we needed to leap out of the browser and
        take to the desktop.&nbsp; By using a web wrapper called Electron, we
        can run Discord in a browser-like environment but with access to all the
        extra little bits that allow us to offer features such as our In-Game
        Overlay. When we built that first executable on Windows, we had to
        decide whether to target 32-bit or 64-bit processors.<em>&nbsp; </em
        >With 32-bit, you can write once and it will work pretty much everywhere
        thanks to
        <a
          href="https://learn.microsoft.com/en-us/windows/win32/winprog64/wow64-implementation-details"
          >Microsoft’s backwards compatibility layers</a
        >. That makes sense for a first version of an application — it will work
        on both 32-bit and 64-bit machines while only needing one version of the
        app.
      </p>
      <p>
        Performance-wise, 32-bit uses less memory than 64-bit, but sometimes to
        a fault: 32-bit applications have a hard restriction on memory usage,
        which using 64-bit architecture is meant to solve in the first place.
        Though running as a 32-bit application on a 64-bit machine gives us
        extra memory for Discord, we occasionally still hit the limit, causing
        errors or even crashes.
      </p>
      <p>
        Discord is built using an assortment of many libraries, such as
        <a href="https://www.electronjs.org/">Electron </a>and
        <a href="https://webrtc.org/">WebRTC</a>, which together help us deliver
        the ideal desktop Discord experience to you. These tools have supported
        64-bit builds for years now, and, in fact, default to 64-bit
        architecture.&nbsp; As 64-bit becomes standard across more and more
        machines, we expect that it will receive significantly more refinement
        and bug fixes than 32-bit. If Discord were to stay on 32-bit for the
        foreseeable future, we may potentially expose ourselves — and in turn,
        our users — to new bugs and inefficiencies that aren’t addressed simply
        because there aren’t enough people maintaining 32-bit libraries to find
        them.
      </p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>Why We’re Moving to 64-bit</h2>
      <p>
        Since Discord is intended for PC gamers to run alongside resource-heavy
        programs, like AAA game titles, we have to share GPU and CPU resources
        with those demanding programs without impacting their ability to talk
        with their friends while using Discord.&nbsp; With this in mind, we
        intentionally added guardrails to Discord, such as capping Chromium’s
        memory allocation — we would rather Discord run out of memory than bring
        down your machine or your game! However, some pieces of Discord aren’t
        as easily limited.&nbsp; Our native modules, such as voice, don’t have
        any limitations.
      </p>
      <p>
        We keep tabs on Discord’s memory usage across our clients to keep track
        of our average and peak memory consumption so that we can stay
        knowledgeable about our real-world memory footprint across a wide
        variety of machines. This data also helps us identify if we've pushed
        inefficient code and allows us to quickly address these scenarios.
      </p>
      <p>
        As we transitioned the app from 32-bit to 64-bit, we wanted to make sure
        the process was as seamless as possible.&nbsp; We tried to figure out
        what was the best way to deliver the goods, from asking users to
        manually download the 64-bit client from our website to an in-app pop-up
        with a download link, and even a dedicated delivery mechanism.&nbsp;
      </p>
      <p>
        We ultimately decided to use our existing updater: It already delivers
        millions of updates successfully, we just need to add some smarts to
        prevent some edge cases from occurring, and then let it loose.&nbsp;
        This is both painless and seamless — you just hit the update button when
        the client is 32-bit, it takes an update as per usual, and then when it
        relaunches, it’s magically 64-bit!
      </p>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        Implementing Automatic 64-bit Updates for Every Windows User&nbsp;
      </h2>
      <p>
        At the start of this project, we technically <em>did</em> have the
        ability to produce 64-bit Windows builds internally… but only on our
        local development machines.&nbsp; There were no automation or build
        machine implementations, which also meant there were no “official”
        builds nor updates.&nbsp; Our first order of business was to empower us
        to produce and store 64-bit builds alongside our 32-bit ones, allowing
        us to produce signed builds and updates to 64-bit clients.
      </p>
      <p>
        During this process, we updated various dependencies to their 64-bit
        versions. We also hit a small hiccup between our C++ and Rust ABIs, as
        one of the datatypes we used varied in size between 32-bit and 64-bit,
        while the corresponding type used a fixed-size structure.
      </p>
      <p>
        For the clients, we pushed logic to the 32-bit client’s updater to
        detect the architecture of the system it was running on. This helped us
        recognize which machines were capable of receiving a 64-bit build,
        letting us scope the transition to just those machines.&nbsp; A subset
        of those clients then attempted the transition and reported back their
        experience — any error during the transition process would have the app
        simply fall back to the 32-bit build.&nbsp; Those that succeeded were
        now running a 64-bit application!
      </p>
      <p>
        However, our updates have multiple features we had to disable to
        correctly deliver the update.&nbsp; First, even though the updater is
        capable of updating specific native modules, we have to send a full
        update in order to guarantee all of the affected files are correctly
        migrated. Second, we also utilize delta updates, which are a special
        update that sends smaller packages when you are updating from the most
        recent update. Delta updates don’t know your system’s architecture, just
        Discord’s app version, and so we had no way to produce a second delta
        package nor detect a delta update to a 64-bit machine from a 32-bit
        machine.&nbsp;&nbsp;
      </p>
      <p>
        One final gotcha: our updater only takes “new” updates, and the
        transition was itself being delivered as an update. When we forked our
        builds between 32-bit and 64-bit, they shared the same version number.
        While they could increment independently of each other, we only ever
        produced builds simultaneously, meaning they stay in lockstep.
      </p>
      <p>
        When we pushed any modification to the 32-bit updater, such as enabling
        clients to transition, those clients wouldn’t detect the 64-bit version
        that we had just pushed out because it would read its identical version
        as “not newer”. Those clients would wait until the next “released”
        update in order to transition, despite the fact they
        <em>were</em> capable of and theoretically <em>had</em> a target to
        transition to already. So we went with the simplest solution here: we
        bumped the 64-bit version by 100 version numbers, so it would always be
        “newer” than 32-bit updates.&nbsp;
      </p>
      <p>
        Being 100 versions newer wasn’t exactly <em>true</em>, but it gave us a
        leeway to push 100 updates to our 32-bit client before we would have to
        address the digital elephant-in-the-room again if we weren’t able to
        complete the 64-bit update before we used all 100 extra updates.
        (Spoiler: we completed the transition work with plenty of room to
        spare.)
      </p>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>More Bits Means Less Crashes&nbsp;</h2>
      <p>
        Today, we have now rolled out the 64-bit transition to all 64-bit
        Windows machines at 100%.&nbsp; We’re still seeing clients transitioning
        to this day, either from old 32-bit installers on someone’s primary
        machine or just someone dusting off that old gaming computer for a round
        of Quake 3.
      </p>
      <p>
        From our telemetry of the 64-bit client in the wild, memory usage has
        gone slightly up — this was completely expected due to the architectural
        changes. Crash rates have gone down, due to a reduction in out of memory
        crashes from the extra memory available to us.&nbsp; Happily, we’ve also
        seen CPU usage decrease, which leaves more for your games and other
        applications!
      </p>
      <figure
        style="max-width: 1009pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/675b64169c0095fdae1448d7_AD_4nXcfn0U2JWQaSX1Ppbc2SocK4r9uBZXyY818RbmISJ4166MUK4fMAT47wC-Ol6A3WU_phx5OQbMbikgnWgnxVAW1Y2m0hZOe7lk4kegkKsvFa_NKGTpJsxbYnE7RFZ-Aqj2i6pVHpQ.png"
            loading="lazy"
            alt="A line chart comparing memory usage between 32-bit and 64-bit clients over a one week time frame."
          />
        </div>
      </figure>
      <figure
        style="max-width: 1009pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/675b641611cca1e9f367dd2d_AD_4nXduK66a_LZL5-v2J1YOHuWPzqnPscoAakJ2T8uuHRzubSA0gIQplOYQuxpA3JsoD-7ItB33OHOqyCAqY8iNX7zauCOmoXsxi2X4fOX3ks3WEXxrz2JaryxRzE0yK-KbM0hKs-FzZw.png"
            loading="lazy"
            alt="A line chart comparing CPU usage between 32-bit and 64-bit clients over a one week time frame."
          />
        </div>
      </figure>
      <figure
        style="max-width: 1009pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/675b6416349a0094b551d37d_AD_4nXfbhhXDKOWqNIz6qoNAnxPL9lg5wHHPEpUPjh2AfdOznfMrW98Up1D7jiWTYg8Owpm2KOG-f-vHA9NVCk0DNgJVaqGx4Nsus0cobjFZoG0OZVIusluyLI1HWCXu8a4w5LqJs7NL.png"
            loading="lazy"
            alt="A line chart the crash rates between 32-bit and 64-bit clients over a one week time frame."
          />
        </div>
      </figure>
      <p>
        If you’re someone passionate about helping people find a place to
        belong, love a good ol’ technical challenge, and want to help us deliver
        for our players and customers around the world, consider applying for an
        open position at <a href="https://discord.com/careers">Discord</a>!
        Bring your unique skills to the table (or our work server) and help us
        build the best place for playing games and hanging out with friends.
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
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
