<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Welcome to Patch Notes!&nbsp;In this series, we comb through the newest
        changes in performance, reliability, responsiveness, usability, and
        general bug-squishing we’ve done to make Discord better.&nbsp;
      </p>
      <p>
        If you discover a bug of your own, check out our
        <a href="https://dis.gd/reddit-bug-megathread"
          >Bimonthly Bug Megathread</a
        >
        on the community-ran r/DiscordApp subreddit. Tell us what’s been
        bothering you and our Engineering team will be more than happy to check
        it out.&nbsp;
      </p>
      <p>
        All fixes listed below have been committed and merged, but may still be
        rolling out to individual platforms at the time of this post.&nbsp;
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
          Foldable users, we heard you and we have good news: we’ve invested
          heavily in foldable device support recently! You should notice
          dramatic improvements in how Discord functions on your foldable
          device. We’ve also invested in future-proofing our code base so
          foldables should “just work” moving forward, rather than requiring
          bespoke support. Please report issues you find on these devices via
          the
          <a href="https://dis.gd/reddit-bug-megathread"
            >/r/discordapp subreddit Megathread</a
          >
          or a<a href="https://support.discord.com/hc/en-us/requests/new">
            Support ticket</a
          >.&nbsp;
        </li>
        <li>
          Discord now has better multitasking/Sidecar/side-by-side app view
          support. Changing the dimensions of the mobile application should
          intelligently swap between different ways of viewing our app, giving
          you far more flexibility in these scenarios. We hope you love the
          quality of life improvements here for multitasking.
        </li>
        <li>
          You’re now able to set a keybind to toggle screen sharing on macOS
          15+. Previously, this was only a Windows feature. You can set a
          keybind for “Toggle Screen Share” in User Settings &gt; Keybinds.
        </li>
        <li>
          We’re looking <em>everywhere</em> for performance improvements at
          Discord, so we recently took some time to improve the performance of<a
            href="https://discord.com/"
          >
            Discord.com</a
          >! We shipped a suite of changes that reduced page load time for users
          by up to 4 seconds on average, as well as improving other core vitals.
          The website should feel significantly more responsive now.
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
          We updated Electron from e30 to e32 on Windows, macOS, and
          Linux.&nbsp;
        </li>
        <li>
          Opening a friend link in the browser now properly interacts with the
          desktop client if it’s running.
        </li>
        <li>
          Fixed a short-lived bug where the send message and add friend buttons
          were no longer on the large profile screen.
        </li>
        <li>
          Fixed a bug that caused Avatar Decorations to overlap users’ status in
          unread messages on mobile apps.
        </li>
        <li>
          Resolved a bug that caused the notification bubble on normal to be
          oval instead of circular.
        </li>
        <li>
          Fixed a bug that could cause profile banners to have incorrect zoom
          levels after saving.
        </li>
        <li>
          The Emoji Picker should now properly jump to categories on your first
          attempt again.
        </li>
        <li>
          Resolved an issue on foldable devices that caused the banner for user
          profiles to not render correctly.
        </li>
        <li>
          Fixed an alignment issue where the Onboarding nudge feature overlapped
          with the App Launcher.&nbsp;
        </li>
        <li>
          Fixed an uncommon issue that could cause the navigation bar at the
          bottom of mobile apps to not render.
        </li>
        <li>
          Fixed a bug that caused us to repeatedly (and futilely) attempt a
          particular API call while offline.
        </li>
        <li>
          Fixed a brief issue that caused the video player on Android to not
          show controls in landscape mode.
        </li>
        <li>
          The “Show Members in Channel List” banner in the member list now has
          the correct font color in certain themes.&nbsp;
        </li>
        <li>
          Resolved a theming issue with the colors of Keybinding arrow icons.
        </li>
        <li>
          The mobile app Channel Settings Category Selector UI handles long
          category names properly now.
        </li>
        <li>
          X.com post embeds no longer try and use an embed’s content as
          Markdown.
        </li>
        <li>
          Resolved a Shop issue that could cause the wrong category banner to be
          rendered.
        </li>
        <li>
          Resolved a short-lived issue that caused the Profile to shift downward
          incorrectly when selecting text inputs on mobile.
        </li>
        <li>
          Opening Mod View from a server member’s Profile should now function
          properly.
        </li>
        <li>
          Fixed a significant rendering flash when updating permissions in
          Channel Settings on Desktop.
        </li>
        <li>
          The option for Non-Nitro users to change their Profile Effect
          disappeared briefly. Sneaky bugger. We put the button back where it
          belongs, so you can put your Profile Effect back where IT belongs.
        </li>
        <li>
          We corrected some confusing language on the Purchase button for
          Profile collectibles; not everything is referred to as a “Decoration”
          now.
        </li>
        <li>
          Resolved an issue with the Overlay where the Emoji Picker wouldn’t
          show custom emojis.
        </li>
        <li>
          Resolved a confusing issue where resetting options in Channel Settings
          would not visually reset the Slow Mode setting.
        </li>
        <li>Server Guide text on iOS should now wrap properly.</li>
        <li>
          Resolved an issue where roles a user already had were populating in
          the list when adding new roles via the Simplified Profile.
        </li>
        <li>
          Resolved an issue on iOS that caused Emojis in a Profile’s “About Me”
          section to be misaligned.
        </li>
        <li>Resolved some padding issues in the Nitro Gifting flows.</li>
        <li>
          Resolved a mobile issue that caused the Nitro icon in User Profiles to
          be subtly placed and sized improperly.&nbsp;
        </li>
        <li>
          Poll answers are now able to be selected and copied from the Poll UI.
        </li>
        <li>
          Resolved an issue that caused the React button on Forum posts to be
          too small.
        </li>
        <li>
          Fixed an alignment issue with the context interactions icon (the “/”
          icon shown when you use an app command) while in Compact Mode.
        </li>
        <li>
          Clicking the Mute button beneath the Channel/DM list no longer scrolls
          the Shop UI when it’s active.
        </li>
        <li>
          Adding Roles to a user with no Roles via the Simplified Profile UI no
          longer automatically collapses all Roles.
        </li>
        <li>
          Resolved an issue that caused Collection tiles to not have a
          perfectly-round UI element. Now it properly goes in the square
          hole.&nbsp;
        </li>
        <li>
          Resolved an issue in the Shop where clicking anywhere for the first
          time could incorrectly scroll to the bottom of the page.
        </li>
        <li>
          Resolved a bug that could cause the expression picker to incorrectly
          expand when adding Roles to a user on iOS.
        </li>
        <li>
          Resolved an issue with the color of the plus icon on the “Add App”
          button of a bot’s Profile.
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
          We had a brief issue where emojis in chat were rendering way too large
          on the client. If you saw this, we hope you got a chuckle out of it.
        </li>
        <li>
          Resolved an issue that caused the “Hold to record” tooltip for Voice
          Messages on mobile to not animate properly when the keyboard
          collapsed.
        </li>
        <li>
          Resolved a timing-based issue where deleted messages could sometimes
          still render in DM previews on mobile.
        </li>
        <li>
          Fixed a short-lived iOS issue that incorrectly caused drafts to
          persist between channels.
        </li>
        <li>
          You should now be able to open User Profiles through a message reply
          if you click their name in the message preview above a reply.
        </li>
        <li>
          Fixed an iOS issue that caused chat text scaling to incorrectly be
          altered in the message history as the keyboard collapsed after sending
          a message.&nbsp;
        </li>
        <li>
          Fixed a bug that caused renaming a thread too quickly after creation
          to create two threads.
        </li>
        <li>
          Fixed an issue that could cause theming issues in Thread creation
          flows.
        </li>
        <li>
          Resolved an issue that caused swipe actions to not function properly
          while chat was animating.
        </li>
        <li>
          Fixed a bug that caused Notification Settings to incorrectly appear on
          DMs on mobile.
        </li>
        <li>
          Fixed a bug where the Voice Message UI was not placed properly,
          clipping into text input.&nbsp;
        </li>
        <li>
          Resolved an issue that reached beta that caused emojis in messages to
          not be aligned properly on iOS.
        </li>
        <li>
          Fixed a theming issue with the Post Settings UI on mobile, which
          caused the background for the Post Title to be the incorrect color.
        </li>
        <li>
          Scrolling away from a Voice Message after it’s completed playback on
          iOS should no longer bring up the PiP.
        </li>
        <li>
          Scrolling through attachments while authoring a long message should
          now function properly, instead of snapping focus to the bottom of the
          message.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Activities and Apps<br /></strong>
      </h2>
      <ul role="list">
        <li>
          Resolved an issue with Primary Entry Points where removal could cause
          a crash in Discord.
        </li>
        <li>
          Apps installed both to an account and to a particular server should
          now properly appear in the “In This Server” section of the App
          Launcher.
        </li>
        <li>
          Audit logs are now properly updated when user roles are updated by an
          app.
        </li>
        <li>
          Fixed a bug that caused typing text commands into the App Launcher on
          Android to not fully expand the keyboard.
        </li>
        <li>
          App descriptions should now have consistent rendering of Markdown.
        </li>
        <li>
          Buttons to join an app activity, like Spotify, will no longer appear
          clickable if the user does not have the application installed.
        </li>
        <li>
          The mobile authorization UI for apps now properly utilizes the whole
          screen for rendering.
        </li>
        <li>
          Apps without a description will no longer show an empty description
          container when selecting an install type.
        </li>
        <li>
          There is no longer a (completely unnecessary) horizontal scroll bar in
          the App authorization modal on Desktop. Now you’ll never know what was
          there if you <em>did</em> scroll horizontally…
        </li>
        <li>
          Activities should now properly respect Application Test mode,
          regardless of where you open the activity from.
        </li>
        <li>
          Resolved an issue that caused joining certain Activities to sometimes
          incorrectly send a channel invite to the Activity host.
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
          You are now able to disconnect users from a voice channel via their
          Profile if you have the correct permissions to do so in the channel
          they are in.
        </li>
        <li>
          Resolved an iOS issue where the video PiP could go missing while
          backgrounded, and users wouldn’t have a way to conveniently re-access
          the call UX.
        </li>
        <li>
          Fixed an issue that caused the Soundboard to leave a permanent border
          if it was used while watching a stream with hidden non-video
          participants.
        </li>
        <li>
          Fixed an alignment issue with the Watch button on the stream preview
          in Voice Channels.
        </li>
        <li>
          Resolved a couple of issues with Video PiP on Desktop when a screen
          share was focused: the PiP size is now correct and there is no longer
          an empty overlay when hovered.
        </li>
        <li>
          Fixed a bug that caused the back button to be missing from the UI on
          certain mobile devices when focusing on a participant in a video call.
        </li>
        <li>
          Resolved a Call UX issue on certain mobile devices where the buttons
          would occasionally not render at all.
        </li>
        <li>
          Resolved an issue where the back button could become unresponsive when
          trying to return to a call from the streaming menu on iOS.
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
          Resolved an issue in Media Viewer that caused certain GIFs to resize
          when hovered on Desktop.
        </li>
        <li>
          The media preview on Android no longer uses the total screen width
          rather than app width when multitasking.
        </li>
        <li>
          Resolved an issue that caused images to duplicate in forwarded
          messages.
        </li>
        <li>
          Resolved a short-lived bug that caused the GIF picker to lose borders
          between the GIFs.
        </li>
        <li>
          Toggling the Media Picker open/closed no longer causes a significant
          flicker.
        </li>
        <li>
          Switching to landscape mode when viewing a full-screen image in a
          gallery with multiple images no longer renders a blank screen.
        </li>
        <li>
          Autocorrect is now enabled properly when Sharing/Forwarding Media.
        </li>
        <li>
          Video audio should now properly stop playing on iOS devices when the
          screen is locked during playback.
        </li>
        <li>
          Resolved an issue on mobile where incomplete or canceled attachment
          uploads could still result in a message being created.
        </li>
        <li>
          We now properly handle iPhone 16’s spatial audio when creating video
          and audio attachments from iOS.
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
          The “Private Thread” element is now properly announced as a button via
          screen readers.
        </li>
        <li>
          When entering an invalid confirmation code, users with screen readers
          enabled will now be informed that the verification code was invalid.
        </li>
        <li>
          Opening a server with unread messages should no longer move VoiceOver
          focus to the messages immediately.
        </li>
        <li>
          Resolved an issue where the app could become unresponsive when moving
          VoiceOver focus to a long message.
        </li>
      </ul>
      <figure
        style="max-width: 1600px"
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
        All relative measurements cited were performed internally with our own
        instrumentation and tooling.
      </p>
      <p>…</p>
      <p>…</p>
      <p>
        … oh hey, you read everything! If you’re itching for the latest updates
        to Discord, you can find our previous Patch Notes articles
        <a href="https://discord.com/tags/patch-notes">here</a>, or check out
        our
        <a href="https://discord.com/tags/changelog"
          >archive of past Changelogs</a
        >
        if you’re more into the fun stuff.&nbsp;&nbsp;
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
