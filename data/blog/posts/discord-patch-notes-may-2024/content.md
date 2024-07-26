<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Welcome to Patch Notes! Each month, we comb through the newest changes
        in performance, reliability, responsiveness, usability, and general
        bug-squishing we’ve done to make Discord better.&nbsp;
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
        rolling out to individual platforms at the time of this post.
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
          Our media proxy now supports the preservation of ICC Color Profile
          data when resizing source images converted to WebP outputs. This
          should significantly improve color accuracy and quality of images
          displayed in Discord on all platforms.
        </li>
        <li>
          The majority of Windows 64-bit upgrades have been completed. We’ve
          observed about 15% reduced CPU usage and 15% reduction in crashes
          going from 32-bit to 64-bit clients (and Discord uses a little more
          memory). We hope you’re enjoying your extra bits of goodness.
        </li>
        <li>
          Discord calls on mobile now support both iOS and Android’s
          picture-in-picture (PIP) modes, letting you see what’s up while the
          app is running in the background.
        </li>
        <li>
          Updated our API to a newer version of Python (3.11), leading to a
          5-10% API latency reduction overall.
        </li>
        <li>
          We made optimizations to our gif picker on mobile to make it a much
          smoother experience. Scrolling and searching in the gif picker should
          render gifs and categories faster and the app shouldn’t flash the
          loading screen every time the user adds a new character to a search.
          Internal measurements show as much as 80% improvement in load time on
          lower-end devices.
        </li>
        <li>
          We recently migrated gateway traffic to use zstd compression for
          Android and Desktop, which is showing ~25% reduction in gateway
          bandwidth usage for users! We're also rolling out iOS support
          imminently.
        </li>
        <li>
          Hardware decoding for AV1 codec streams is rolling out for Windows
          now. We’re seeing ~20% improvement in CPU usage across the
          distribution of AV1 utilization from this change.
        </li>
        <li>
          We made a change that dramatically improved DM search performance in
          the mobile apps. This should feel immediately more performant for
          users who regularly use the mobile search experience.
        </li>
        <li>
          You can now double-tap the “Home” button in the mobile apps to switch
          between server channels and DMs. No more thumb gymnastics—just a quick
          double-tap and you're there!
        </li>
        <li>
          We’re rolling out an upgraded Call UX on tablets that is more
          consistent with the new mobile experience. If you’ve used the mobile
          app to place Discord calls, the new tablet interface should feel very
          familiar.
        </li>
        <li>
          You can now vibe with Wumpus anytime you want in the Desktop app. You
          can find how in Settings → Keybinds → Miscellaneous.
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
          Resolved an issue causing no number to be rendered in the Mutual
          Friends and Mutual Servers portion of a user’s profile.
        </li>
        <li>
          Resolved an issue that caused the profile options modal to sometimes
          render behind the profile (completely hidden) when opened on
          Android.&nbsp;
        </li>
        <li>
          Resolved a minor issue with the search icon rendering on top of the
          search string when searching for a GIF on Android.
        </li>
        <li>
          We made some slight improvements to Desktop user profiles: server
          badge tooltips now use the right color and there’s a small delay now
          so they do not pop up so quickly.
        </li>
        <li>
          Resolved an issue that caused events to show users’ global avatars
          instead of server avatars.
        </li>
        <li>
          Fixed a bug that caused us to unnecessarily truncate the “Save” button
          in a few areas of the iOS app. Turns out “S…” is not an intuitive
          button.
        </li>
        <li>
          Resolved an issue that caused server-specific avatar decorations to
          not properly be used in certain cases.
        </li>
        <li>
          Resolved a bug where skin tone variants of an emoji were not being
          respected properly in polls.&nbsp;
        </li>
        <li>
          Resolved an issue with the Quest badge not appearing properly on iOS.
        </li>
        <li>
          Fixed a spacing issue with mute and deafen icons not rendering
          properly in the Overlay. They now should render immediately next to
          the user’s name.
        </li>
        <li>
          Resolved an issue with the “…” button in the notifications tab of iOS
          not being themed appropriately in certain cases. Fun fact: this button
          is referred to as the “Meatball” button in some spaces.&nbsp;&nbsp;
        </li>
        <li>
          We updated the “Invite to Server” and “Invite to GDM” icons to be more
          communicative of them being multi-select options.
        </li>
        <li>
          Resolved an issue where clicking on a badge in a profile that opens
          user settings didn’t hide the profile, effectively blocking your view
          of the settings.
        </li>
        <li>
          Resolved an issue that would cause mutual servers in a user profile to
          render as empty if the user whose profile you’re inspecting sent you a
          DM while the profile was open.
        </li>
        <li>
          Fixed a scrolling bug that caused the final two rows of emojis in the
          emoji picker to be inaccessible on iOS.
        </li>
        <li>
          Resolved a bug that prevented being able to skip becoming “findable”
          during new user onboarding on Android.
        </li>
        <li>
          Fixed an issue that made it possible to have very tall user profiles
          in certain circumstances.&nbsp;
        </li>
        <li>
          Resolved a bug that caused Mod View to not display or close properly.
        </li>
        <li>
          Fixed a spacing issue in the badge panel UI on the “My Account” page.
        </li>
        <li>
          Search tags in text channel searches should now properly localize to
          the selected language.
        </li>
        <li>
          Fixed a bug that caused profiles opened from the member list to not
          respect server-specific profile settings for that user, like avatar
          decorations or themes.
        </li>
        <li>
          Resolved a bug that could cause navigation to get stuck in iOS when
          clicking the “Edit Channel” button in a text channel.
        </li>
        <li>
          Resolved an issue where clicking on an invite link as a member of that
          server would not navigate to the server properly on Android.
        </li>
        <li>
          Fixed an issue on iOS where clicking on a server invite link with the
          app open in the background would foreground the app, but not perform
          any operation on the server link.
        </li>
        <li>
          Resolved padding issues on the “Earn Money” modal for Server
          Subscriptions.
        </li>
        <li>
          Fixed an issue that could cause friend requests to get stuck
          off-screen on the notifications tab of mobile apps.
        </li>
        <li>
          Resolved a visual issue where the login and register buttons on the
          not logged-in page were not styled consistently.
        </li>
        <li>
          The “View More Stickers” button should now always navigate to the
          correct sticker pack.
        </li>
        <li>
          Closing an event modal from the notifications tab no longer causes the
          entire app to render black on iOS.
        </li>
        <li>
          Fixed a bug that caused pressing the “add more” button in a server
          guide under certain criteria to open a blank sidebar.
        </li>
        <li>
          Fixed a bug that caused the client to incorrectly show the “Set
          Channel Status” prompt for users who lacked permission to do so in
          very specific situations.
        </li>
        <li>
          The Overlay now should respect “disabled sound” Soundboard settings.
        </li>
        <li>
          Fixed a Desktop bug that allowed users to set voice channel statuses
          longer than the character limit.
        </li>
        <li>
          Users with the display name “Clyde” no longer have their name
          incorrectly highlighted green in mentions.
        </li>
        <li>
          Resolved a Desktop issue where the emoji selector overlapped with the
          “remaining characters” indicator in the voice channel status UI.
        </li>
        <li>
          Resolved inconsistent colors for the “Copy Button” next to the text
          field in the event creation confirmation UI.
        </li>
        <li>
          Fixed a styling issue for scrollbars on clients running in Chrome.
        </li>
        <li>
          Resolved several minor spacing issues for Samsung Android devices.
        </li>
        <li>
          Fixed an issue where in-app reporting for events was not functioning
          properly.
        </li>
        <li>
          Bringing up the emoji picker while editing/adding a status should now
          display the entire picker.
        </li>
        <li>
          Logging out of Discord will no longer render a back button on the
          login UX screen.
        </li>
        <li>
          Improved the Boost settings page to more clearly indicate whether a
          free boost is in cooldown.
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
          Resolved an issue where sending a DM from a mobile device could
          incorrectly push a notification to your desktop application for the
          message you sent.
        </li>
        <li>
          Fixed a bug that caused sticker category and server buttons to not
          filter stickers properly on iOS.
        </li>
        <li>
          Resolved a short-lived issue where canceling a message edit on iOS
          would crash the application.
        </li>
        <li>
          Fixed an issue where the voice messages UX was not properly respecting
          client themes.
        </li>
        <li>
          Resolved a bug that prevented users from setting a hang status while
          streaming.
        </li>
        <li>
          Resolved an issue on iOS where the indicator for chat being blocked in
          a channel was semi-transparent for certain themes, leading to text
          overlap.
        </li>
        <li>
          Fixed an iOS bug that could cause the channel list to be rendered as
          empty when navigating to channels with very specific permission
          circumstances.
        </li>
        <li>
          Resolved an issue with the text on the tabs in the Message Requests
          pane that caused them to be positioned incorrectly, making them
          unreadable on Android.
        </li>
        <li>
          Setting a custom icon for a DM in the mobile client no longer makes
          the app unresponsive.
        </li>
        <li>
          Stickers are now properly respected when publishing your message in an
          Announcement channel.
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
          Fixed a bug that caused issues with slash commands that required
          attachments to not properly execute in some cases.
        </li>
        <li>
          Fixed a bug that could cause Spotify to incorrectly pause every few
          seconds when connected to Discord.
        </li>
        <li>
          Resolved multiple padding/spacing issues on activity cards on iOS.
        </li>
        <li>
          Resolved an issue that could cause selecting an activity from the list
          before scrolling to fail to launch the activity.
        </li>
        <li>
          Resolved a crash that could happen when navigating to an app in the
          app directory that does not have any images in the image tab.
        </li>
        <li>
          Fixed an issue that caused Spotify action buttons in user profiles to
          not properly fill the UI container.&nbsp;
        </li>
        <li>
          Fixed a minor alignment issue for chat icons in the app launcher on
          iOS.
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
          Resolved an issue with our video hook capture method for streaming not
          correctly restoring OpenGL state. This manifested as
          flickering/corruption of not only the video but also the game
          itself.&nbsp;
        </li>
        <li>
          We upgraded our Krisp library (used for background noise suppression)
          to version 7.0. Particularly audio-inclined individuals may spot
          improvements in audio quality in calls while utilizing Krisp.
        </li>
        <li>
          Resolved a bug that would cause your video to be in focus when
          changing from a 1:1 audio call to a video call mid-session.
        </li>
        <li>
          Fixed a bug that caused user limits in voice channels to not display
          properly in clients.
        </li>
        <li>
          Resolved fairly severe spacing and positioning issues in the voice
          call UX for clients running in Firefox.
        </li>
        <li>
          Fixed a visual issue on iOS where activity information in the call UX
          would overlap awkwardly with the user card in the UI.
        </li>
        <li>
          Fixed an issue in calls where transitioning from the system
          picture-in-picture (PIP) while the app is backgrounded to the in-app
          PIP when you foreground the app failed, resulting in no PIP.
        </li>
        <li>
          Resolved issues where the stream issues indicator would persist after
          no longer watching the stream or could display on streams the user is
          not actively watching.
        </li>
        <li>
          Resolved an issue where webcam quality was artificially restricted
          below optimal levels when using AV1 codec.
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
          Upgraded the Android Exoplayer from 2.13.3 to 2.19.1. This should
          improve performance, media compatibility, and stability of video
          playback on Android.
        </li>
        <li>
          Added ability to play videos on Android when one or more video tracks
          are invalid, which would cause certain videos to fail to play only on
          Android.
        </li>
        <li>
          All videos uploaded from Android should now be web optimized (MP4
          “Fast Start”), reaching parity with our iOS experience. The result is
          that videos uploaded from Android devices should start playback sooner
          for users watching them.
        </li>
        <li>
          Fixed a bug on Android that prevented viewing multiple images in the
          media viewer with the same name. All the images in the viewer would
          look identical to the last image uploaded.
        </li>
        <li>
          Resolved an Android issue that caused YouTube videos to not be
          playable from embeds.
        </li>
        <li>
          Resolved an issue causing the iOS photo picker to not convert .heic to
          .jpeg for images edited by Markup.
        </li>
        <li>
          Resolved an issue where images were not being compressed properly on
          iOS when shared under specific circumstances.
        </li>
        <li>
          Fixed a bug with WAVE audio file uploads being misidentified during
          metadata inspection, which made the file unavailable for playback
          within Discord.
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
          Community links should now work properly with keyboard navigation,
          resolving known accessibility issues with those features.
        </li>
        <li>
          Resolved an issue where animations in the mobile app did not always
          respect reduced motion accessibility settings.&nbsp;
        </li>
        <li>
          Resolved an issue that caused animated stickers created from gifs to
          not respect accessibility settings.
        </li>
        <li>
          The “Copy Invite Link” button now has an accessible name for screen
          readers.
        </li>
        <li>
          All items in the channel sidebar should now interact properly with
          screen readers.
        </li>
        <li>
          Android reduced motion settings now properly respect system settings
          when “sync with device settings” is enabled.
        </li>
      </ul>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/653021edd85706dfb6ffeba8_TV2v_-uOGq_-9bLKTL6x2sar01-RmueVTdSDMoDffirOVPSmfDpE9ebtlky9V0Z8qgOHr3eBnhGKm_iojFbktORKndkTthHv5sVTpaksHlm-JWX5j6kAomU-ZaY7agmFfYHZddfUIHpuMNzJkUvKfmk.png"
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
