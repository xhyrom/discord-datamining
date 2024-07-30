<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Welcome to the first edition of Patch Notes! In this new feature on the
        Discord Blog, we’re combing through the newest technical fixes and the
        nitty-gritty details we’ve implemented to make Discord better.&nbsp;
      </p>
      <p>
        This year, we’ve brought tons of talented engineers and developers
        together to focus on taking their metaphorical flyswatters and salt guns
        to those pesky bugs you might encounter while using Discord.&nbsp;
      </p>
      <p>
        <strong
          >Expect Patch Notes to contain the exact details regarding changes in
          performance, reliability, responsiveness, usability, and general
          bug-squishing</strong
        >. The in-app
        <a href="https://discord.com/tags/changelog">Changelog</a> you know and
        love will still be home to new feature announcements and the “fun”
        stuff.&nbsp;
      </p>
      <p>
        With intros out of the way, let’s take a peek at the latest fixes our
        expert engineers implemented to make Discord better! All fixes listed
        below have been committed and merged, but may still be rolling out to
        individual platforms at the time of this post.
      </p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Highlights<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Improved server switching speed on Android and iOS apps by 30+%,
          depending on device and network performance.
        </li>
        <li>
          Improved aggregate app start-up time on lower-end Android devices by
          ~10%.
        </li>
        <li>
          Fixed an issue causing Bluetooth headphones to not be set as the
          current audio devices properly when enabled during a call.
        </li>
        <li>
          We upgraded to Electron 28, which provided meaningful improvements to
          video decode latency and reduction in frozen frames while watching
          Go-Live streams.
        </li>
        <li>
          We made some infrastructure improvements, including moving to GCE C3
          instances and removing an nginx layer, which yielded a ~25% reduction
          in p90+ API latency.
        </li>
        <li>
          We recently shipped new fonts for gg sans italic and monospace. This
          should make text on Android and iOS render more consistently and at a
          higher quality than before.
        </li>
        <li>
          We’re currently in the process of rolling out our 64-bit Discord
          client to Desktop users. This client should improve memory-related
          stability and solve a couple of known issues in the 32-bit client.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>General<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Resolved a category of Android crashes that reduced the overall app
          crash rate by ~37% on Android devices.
        </li>
        <li>
          Implemented consistent hash routing for guilds data service resulting
          in ~20% reduction in p99 read latencies.
        </li>
        <li>
          Fixed a longstanding background crash on iOS, so you may notice the
          app staying open in the background slightly more often.
        </li>
        <li>
          In-app notifications for friend requests now should render on app
          load.&nbsp;
        </li>
        <li>
          Friend requests should now collapse into a single UI element when at
          least 3 are pending.
        </li>
        <li>
          Fixed a bug that prevented users from removing favorited gifs if they
          somehow ended up over the favorited gif cap.
        </li>
        <li>
          The scroll bar in the ”Family Center” should now be Discord-themed.
        </li>
        <li>
          Resolved an issue with the “Activate Overlay Chat” hotkey no longer
          functioning in the Overlay, which required users to unlock the Overlay
          to send messages.
        </li>
        <li>
          The profile page should now allow users to save profile edits after
          using the “reset” button to clear the bio.
        </li>
        <li>
          Fixed an issue where the <em>Midnight</em> theme was no longer able to
          be selected on mobile.&nbsp;
        </li>
        <li>
          Autocomplete should now function on mobile when trying to search for
          messages using the “has:” parameter.
        </li>
        <li>
          Resolved an issue causing friend requests to not automatically be
          rejected when blocking a user.
        </li>
        <li>
          The per-server avatar decoration dialog should now properly use the
          server avatar instead of the global avatar.
        </li>
        <li>
          Attempting to set a custom status from a user action sheet should no
          longer open a legacy modal.
        </li>
        <li>
          Users are now presented with an error message when trying to upload an
          image or gif that’s too large as a webhook image.
        </li>
        <li>
          Fixed a bug that occasionally caused the server banner in the channel
          list to not use the proper font color or correct gradients.
        </li>
        <li>
          Resolved an issue where info sections in the user profile modal were
          not rendering at the correct width.
        </li>
        <li>
          The shop tab should now properly load your user profile when
          navigating avatar decorations.
        </li>
        <li>
          Resolved an issue where poll answer input on mobile had duplicate UI
          elements.
        </li>
        <li>
          Attempting to open the support page from profile settings in the iOS
          app should now properly redirect to the browser.
        </li>
        <li>
          Resolved an issue where users could hit rate limits during normal
          scrolling of search pages.
        </li>
        <li>
          The search menu for channels should now properly reflect the time
          since last channel activity.
        </li>
        <li>
          Fixed a bug where the “Login” button on the mobile welcome screen had
          a gray, rectangular background.
        </li>
        <li>
          Resolved a bug where profile badges were misaligned on mobile while
          editing certain profile fields.
        </li>
        <li>
          Resolved an issue where the back arrow wouldn’t render when looking at
          a profile on mobile.&nbsp;
        </li>
        <li>
          Fixed an issue where the profile avatar would not be aligned properly
          when certain other elements existed in the profile.
        </li>
        <li>
          The escape key now should function for navigation when browsing the
          Collectibles Shop.
        </li>
        <li>
          Resolved an issue that caused a JavaScript error to render for some
          users on client launch on Mac.
        </li>
        <li>
          Resolved an issue where padding was missing on the “Potential
          Dangerous Download” modal on mobile.
        </li>
        <li>
          Resolved an infrequent issue where certain users couldn’t unequip
          avatar decorations and profile effects on mobile.
        </li>
        <li>
          Resolved a case where the action sheet on mobile would not render
          properly.
        </li>
        <li>
          Resolved an issue where the spoiler icon for spoiler-tagged images in
          search wasn’t aligned properly.
        </li>
        <li>
          The “save” button when editing roles should no longer be prevented
          from rendering by long role names.
        </li>
        <li>
          The keyboard should properly dismiss when opening the Nitro gifting
          tab on mobile now.
        </li>
        <li>
          When users upload multiple files at once, the layout on mobile should
          now be organized properly.
        </li>
        <li>
          Per user feedback, we created a permission for “Creating Polls”.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Chat<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Fixed a bug that caused tablets using external keyboards to not be
          able to use the emoji selector.
        </li>
        <li>
          Fixed an issue where tablet users couldn’t swap between
          emojis/stickers/gifs in the picker.
        </li>
        <li>
          The ellipsis that is used to indicate a truncated message during
          replies shouldn’t be missing anymore.
        </li>
        <li>
          Resolved an uncommon iOS unicode rendering issue that resulted in iOS
          users occasionally being unable to see any messages in a channel.
        </li>
        <li>
          Resolved a recent regression where the blue “new messages” banner on
          mobile would persist after the user had viewed the most recent
          message.
        </li>
        <li>
          Autocomplete for a single user or server match on mobile no longer
          appears to be scrollable.
        </li>
        <li>
          The server navigation of the expression picker should no longer render
          above the keyboard after the expression picker is dismissed on mobile.
        </li>
        <li>
          Resolved an issue where message notifications on iOS didn’t have a
          maximum height, which occasionally created very large notifications.
        </li>
        <li>
          Fixed a bug that caused message backgrounds to flash whenever a
          reaction was added, which was very visually noisy if reactions were
          rapidly added to a particular message.
        </li>
        <li>
          A message’s spoiler view state should no longer reset when adding a
          reaction.
        </li>
        <li>
          Mentions shouldn’t append extra text on iOS when there’s an inline
          text prediction anymore.
        </li>
        <li>
          Fixed a desktop and web app crash caused by resizing a call window
          while the text in video chat frame was maximized.
        </li>
        <li>
          Resolved a mobile bug that caused the channel list to render partially
          blank if a user navigated to a message via a notification while
          looking at server settings.
        </li>
        <li>
          Resolved an issue where users sometimes weren’t able to select an
          emoji from the bottom row of the emoji picker.
        </li>
        <li>
          Resolved a bug causing alt-text indicators to be broken on desktop.
        </li>
        <li>
          Fixed a bug where Discord sometimes wouldn’t autofocus to chat input
          when typing.
        </li>
        <li>
          Resolved an issue where channels wouldn’t be marked as read even when
          the user navigates to the most recent message.
        </li>
        <li>
          Resolved a rare case where the channel list and DM list could render
          overlapping each other on mobile.
        </li>
        <li>
          Resolved an issue where searching for stickers in the sticker picker
          was extremely slow.
        </li>
        <li>
          Long server names should now be truncated properly in the channel
          list.
        </li>
        <li>Fixed an issue with the “Bot” tag spacing on mobile devices.</li>
        <li>
          Selecting an emoji in the emoji picker following a search should only
          take one tap now on mobile.
        </li>
      </ul>
      <p>‍</p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Activities<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Fixed a bug that allowed activities to be started in text channels
          when permissions were disabled.
        </li>
        <li>
          When a user is watching a stream on mobile and has a video channel
          chat open, the back button should now close the chat pane instead of
          leaving the stream.
        </li>
        <li>
          Resolved an issue causing mobile clients to occasionally be unable to
          join Activity sessions through the video chat tile.
        </li>
        <li>
          Fixed a visual issue where the application header would render twice
          under specific circumstances while using certain Activities.
        </li>
        <li>
          Popping out an activity window should now reload the activity instead
          of closing the activity.
        </li>
        <li>
          Fixed an issue where the wrong text color was used when informing the
          user that no activity was found based on their search criteria.&nbsp;
        </li>
        <li>
          Copy-pasting a slash command in iOS should now properly translate
          parameters, rather than putting the entire string in the first
          parameter.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Audio/Video<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Ever wanted to mute yourself without having to pull your phone out of
          your pocket? Discord on iOS now supports muting using your AirPods
          which synchronizes to the app.
        </li>
        <li>
          Fixed a bug that could cause audio for notifications to stop working
          and sound effects to crackle.
        </li>
        <li>
          Camera orientation should now be correct when landscape orientation is
          used in an AV call on Android.
        </li>
        <li>
          The “Auto-Sensitivity” voice detection setting on iOS now should
          retain its state following app restart.
        </li>
        <li>
          Resolved an issue where Krisp stopped working on web clients.&nbsp;
        </li>
        <li>
          Activity icons in the voice user list should no longer have the wrong
          color on iOS.
        </li>
        <li>
          Resolved an issue where voice messages weren’t properly reducing
          background noise.
        </li>
        <li>
          Resolved an inconsistent issue where users couldn’t mute properly in
          DM calls
        </li>
        <li>
          Mute states for another user in a server channel voice call can now be
          changed in a DM call.&nbsp;
        </li>
        <li>
          Fixed a bug that caused the incorrect stream resolution to be selected
          when streaming in horizontal mode, from a mobile device, with the
          system pip active.&nbsp;
        </li>
        <li>
          Resolved an issue where the default hotkey to “Answer Call” no longer
          worked.
        </li>
        <li>
          Starting a screen share on Android shouldn’t prompt the user twice
          anymore.&nbsp;
        </li>
        <li>
          While in a voice call, navigating to a different server or DM chat and
          then returning to the voice call server now should place you in the
          correct channel.
        </li>
        <li>
          When moving members between voice channels, the “Move Members”
          permissions should now be respected for both the user’s current
          channel and the destination channel.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-7" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Media<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Via various incremental changes, we’ve improved video startup time on
          desktop and web by as much as 15%, depending on device and network
          performance.&nbsp;
        </li>
        <li>
          Optimized the backend attachment creation process, stabilizing and
          reducing time to begin message attachment uploads by roughly 15-20% on
          average.
        </li>
        <li>
          Ever been surprised by an embedded video pausing mid-play on mobile?
          Our mobile apps should now display a download progress indicator on
          the video timeline.&nbsp;
        </li>
        <li>
          Resolved an issue where the emoji picker in Remix would slow down app
          performance significantly.
        </li>
        <li>
          Resolved an issue where the text tool was not functioning in Remix.
        </li>
        <li>
          Resolved bugs where certain links to popular websites would open in
          the in-app browser instead of the relevant applications.&nbsp;
        </li>
        <li>
          Fixed an issue where .gifv files were not properly respecting
          auto-play settings.
        </li>
        <li>
          Fixed an issue where the emoji picker in Remix would not close
          properly.
        </li>
        <li>
          Resolved an issue where the icon that indicates a message is replying
          to an attachment wasn’t rendering.
        </li>
        <li>
          Image carousel controls should now have more contrast to make them
          easier to see on desktop.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-8" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Accessibility<br /></strong>
      </h2>
      <ul role="list">
        <li>
          The Display Name input field should now have an accessible name for
          screen readers.
        </li>
        <li>
          Users should now be able to change phone number country codes with
          Talkback.
        </li>
        <li>
          The “Add people to voice chat” prompt should no longer persist outside
          of call UX when “reduced motion” is enabled in accessibility settings.
        </li>
        <li>
          We added a dismiss button above the action sheet to make dismissing
          action sheets easier and more intuitive for screen-reader users.
        </li>
        <li>
          Fixed an issue where voiceover focus could get stuck during a “Link
          Copied” notification.
        </li>
        <li>
          Voice messages should now be labeled properly for screen readers.
        </li>
        <li>
          With enlarged font sizes, role names should no longer be truncated in
          the autocomplete UI.
        </li>
        <li>
          “Reduced Motion” settings should no longer prevent the chat bar from
          retracting in certain situations on iOS.
        </li>
        <li>
          Server header should now be flagged appropriately for screen readers.
        </li>
        <li>Improved the contrast ratio for focused menu items.</li>
      </ul>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/653021edd85706dfb6ffeba8_TV2v_-uOGq_-9bLKTL6x2sar01-RmueVTdSDMoDffirOVPSmfDpE9ebtlky9V0Z8qgOHr3eBnhGKm_iojFbktORKndkTthHv5sVTpaksHlm-JWX5j6kAomU-ZaY7agmFfYHZddfUIHpuMNzJkUvKfmk.png"
            loading="lazy"
            alt=""
          />
        </div>
      </figure>
      <p>
        If you think of a particular bug that bothers the heck outta ya, check
        out our
        <a
          href="https://old.reddit.com/r/discordapp/comments/1buyl5o/bug_megathread_vol_2_aprilmay_2024/"
          >Bimonthly Bug Megathread</a
        >
        on the community-ran r/DiscordApp subreddit. Tell us what bugs are
        bothering you and our Engineering team will be more than happy to check
        it out. They’re like Discord exterminators, minus the harmful
        pesticides.
      </p>
      <p>
        All relative measurements cited were performed internally with our own
        instrumentation and tooling.
      </p>
    </div>
  </div>
  <div id="heading-9" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
  <div id="heading-10" class="rich-wrapper">
    <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
  </div>
</div>
