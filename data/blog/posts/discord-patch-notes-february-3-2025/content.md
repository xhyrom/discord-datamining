<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Welcome to Patch Notes! In this series, we comb through the newest
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
          We recently made several improvements to how our Android app
          initializes during launch. The result of these improvements is a ~20%
          improvement in app launch times on our median Android device.&nbsp;
        </li>
        <li>
          We re-wrote our Media Proxy service in Rust (from Go). Media Proxy is
          the service that ingests media you upload to Discord. While doing
          this, we also modernized the infrastructure to our current standards.
          What does this nerdy stuff mean for you? We’re observing ~22% improved
          latency in the aggregate (over 40% faster at p90!), and improved
          reliability of the service.&nbsp;
        </li>
        <li>
          Over the course of several months, we’ve steadily improved the
          reliability of push notifications on Discord across all server sizes.
          Servers with less than 2500 users now have a 99.98% success rate of
          push notifications being delivered within 30 seconds. And now, on a
          server like Midjourney, we’re able to notify 20 million users in under
          15 minutes from an @everyone (previously, we couldn’t guarantee
          delivery).
        </li>
        <li>
          Ever just wanted to play Chess in the Park without notifying your
          entire friend server? We know, we get it. You can now launch Apps in
          DMs on desktop! This is a more flexible way to get into activities,
          and it shipped with a couple of nice features like a quick launch bar
          at the top of the DM list with your most recent apps. Hope you like
          it.
        </li>
        <li>
          Over many months, we have received many reports of strange layout
          breaking behaviors on Android from users and staff. These were
          generally hard to reproduce but devastating when they occurred. We
          identified and shipped a fix for a suite of issues on Android 13 and
          lower versions involving device rotation and screen size calculations.
          Users affected should see fewer instances of weird layout breaking
          issues on these devices.
        </li>
        <li>
          Our Privacy &amp; Safety settings in User Settings have been
          redesigned to enhance discoverability, usability, and scalability;
          paving the way for more user-friendly Trust settings. These
          improvements include a new tab structure, improved grouping, and
          clearer descriptions as well as some design improvements.&nbsp;
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
          MacOS desktop notifications now use the OS’s native APIs. This
          includes a couple of immediate improvements: message ping sounds now
          respect a user’s Focus/Do Not Disturb settings and multiple
          notifications can appear for the same channel as a group. It also
          gives us access to the framework to continue to develop
          these.&nbsp;&nbsp;
        </li>
        <li>
          Searching for messages that are “from:me” or “mentions:me” now
          autocompletes on desktop. Just a little shortcut to make your life
          slightly easier.
        </li>
        <li>
          I’m reasonably sure all ~12 Discord Linux users are employees, but we
          recently shipped support for soundshare and Wayland screen share on
          Linux (which is default in Ubuntu 22 and higher). So, for any affected
          Linux users that didn’t review the PRs, there shouldn’t be issues with
          screen share video or audio working any more. Just kidding. We love
          you, Linux users.
        </li>
        <li>Fixed the styling of the UI element to edit Forum channel tags.</li>
        <li>
          Clicking on a channel topic on desktop should no longer open two
          overlapping modals.
        </li>
        <li>
          Resolved an issue that caused specific Android devices to duplicate
          every letter of channel names during channel creation.&nbsp;
        </li>
        <li>
          Improved the handling of friend request buttons in narrow client
          widths on desktop, meaning you should see less “…” happening.
        </li>
        <li>
          Resolved a slight layout shift and incorrect border animation when
          hovering over note input on a user profile.
        </li>
        <li>
          Resolved a potentially confusing button tooltip that implied the user
          needed to validate their email in the data requests UI.&nbsp;
        </li>
        <li>
          Resolved a bug that caused user profiles opened from friend requests
          on desktop to be sized incorrectly, rendering only portions of the
          profile.
        </li>
        <li>
          Fixed a bug that caused the image in the channel follow UI on mobile
          to not crop properly.
        </li>
        <li>
          Resolved a slight image alignment issue in the Shop’s purchase
          successful modal.
        </li>
        <li>
          Resolved a couple slight padding issues in the Quests dismiss feedback
          modal.
        </li>
        <li>
          Resolved an issue on iOS that could cause the app to be zoomed out
          further than expected.
        </li>
        <li>
          Fixed an issue that could improperly block a user’s ability to edit
          channel details from channel settings.
        </li>
        <li>
          Reverted a change that caused mobile search results to no longer
          accurately reflect the total number of results.
        </li>
        <li>
          Resolved an issue that caused a client crash if trying to add emojis
          into the Forum channel creation UI.
        </li>
        <li>
          Resolved an Android issue where the “Remove Friend” confirmation modal
          would render behind other elements.
        </li>
        <li>
          Resolved issues where the tabs in the Privacy &amp; Safety settings
          weren’t functioning properly and were cropped incorrectly.
        </li>
        <li>
          Fixed a bug that caused swiping to go back when viewing Search results
          to no longer function.
        </li>
        <li>
          Improved the reliability of the Claimed Quests UI for users that had
          completed many Quests.
        </li>
        <li>
          Added the ability to edit a server invite link when inviting a user to
          a server on mobile.
        </li>
        <li>
          Profile customization should now work properly for Nitro Credit.&nbsp;
        </li>
        <li>
          Resolved a bug where the keyboard could render on top of various text
          inputs, blocking the ability to see what was typed.
        </li>
        <li>
          Viewing Mutual Friends/Servers for a user you do not share
          friends/servers with should no longer show a loading indicator
          forever.&nbsp;
        </li>
        <li>
          Resolved an issue where custom status durations weren’t applying
          properly.
        </li>
        <li>
          Fixed a mobile bug that prevented users from backing out of the popup
          to sync a channel’s permissions to the category.
        </li>
        <li>
          Fixed a bug that could cause Android toasts to incorrectly render
          behind various UI elements.
        </li>
        <li>
          The Shop tab on tablets should no longer have stretched out banner
          art.
        </li>
        <li>
          Resolved an issue where the Discover Servers icon could have a
          dismissible badge.
        </li>
        <li>
          The chat input for channel search on iOS now scrolls properly with
          text entry.
        </li>
        <li>
          Fixed an animation issue with the Space Evader profile effect on
          Android.
        </li>
        <li>Push notifications should now include user nicknames.</li>
        <li>
          Resolved an issue that could prevent the current server from being
          listed in the server filters of the Emoji picker.
        </li>
        <li>
          Fixed a bug with the Mobile DM options button that could cause it to
          overlap with usernames.
        </li>
        <li>Resolved some 1 pixel width padding issues in Shop.&nbsp;</li>
        <li>
          Resolved an issue where animated Emojis on iOS would stop animating
          after being tapped.
        </li>
        <li>Animated Emojis should now properly work in custom statuses.</li>
        <li>
          Resolved padding issues on Android between the app and the OS
          navigation buttons.
        </li>
        <li>
          Users should now be able to edit Emoji forum tags that are no longer
          valid due to the Emoji being deleted from the server.
        </li>
        <li>
          Resolved a padding issue on the desktop client in the reaction Emoji
          picker.
        </li>
        <li>
          Fixed a bug on Nitro Home that prevented users from using the navigate
          back swipe gesture.
        </li>
        <li>
          Resolved some date formatting issues that affected localization in Mod
          View.
        </li>
        <li>
          Resolved an issue that caused the “View Interaction Info” option in
          Mod View to sometimes not be available.
        </li>
        <li>
          Resolved an issue that caused the Shop’s purchase button to flicker
          when hovered over.
        </li>
        <li>
          Resolved issues with audit log entries for voice channel status
          changes not functioning properly.
        </li>
        <li>
          Resolved an issue that caused certain buttons/icon to not change color
          properly on mobile when previewing a theme.
        </li>
        <li>
          Resolved an issue where the “Favorite GIF” button was not visible on
          GIFs with white backgrounds.
        </li>
        <li>
          Resolved an issue with polls where holding ctrl while pressing enter
          would start the poll but also not dismiss the UI. Doing this
          repeatedly would create duplicate polls.
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
          We simplified our Mobile Chat Input codebase, which was an area that
          contained a lot of known issues. The goal was to simplify the code
          base, but we ended up with some significant performance wins anytime
          you’re typing in the app. To be honest though, I don’t know who will
          be happier: users or the engineers that no longer have to try to
          navigate that sea of tech debt.&nbsp;
        </li>
        <li>
          Fixed a bug on Android that could truncate messages if you typed the
          message and sent it fast enough. You had to be zoomin’, though. Props
          if you encountered this bug.
        </li>
        <li>
          Fixed a bug that caused the reaction modal to have incorrect spacing
          in the user list.
        </li>
        <li>
          Resolved an issue that caused pasting large amounts of text into
          Discord on desktop to improperly offset UI elements.
        </li>
        <li>
          Resolved an issue on iOS that caused pinned messages to render overtop
          of the message list without a background for the element.
        </li>
        <li>
          Resolved an issue where viewing certain messages could cause a crash
          in the desktop client.
        </li>
        <li>Fixed styling issues in the “Add Friends to DM” modal.</li>
        <li>
          Resolved a low reproducibility issue where text sizes could grow while
          scrolling through messages on iOS.
        </li>
        <li>
          Resolved an issue that could prevent users from forwarding messages
          with custom Emojis.
        </li>
        <li>
          User nicknames should now be properly reflected when adding users to a
          Group DM.
        </li>
        <li>
          Made it a bit easier to long press on a reaction on iOS by making the
          interact-able element slightly larger.
        </li>
        <li>
          Users should now be able to open a Stage channel’s text chat without
          joining the Stage.
        </li>
        <li>
          Resolved an issue where emoji reaction counts could be incorrect in
          thread starting messages.
        </li>
        <li>
          Resolved an issue that caused the voice message UI to not adjust when
          the keyboard was minimized.
        </li>
        <li>
          Added the paste action to the context menu in a popped-out voice
          channel’s text chat.
        </li>
        <li>
          Resolved an issue on Android where tapping the send button quickly
          could send a message multiple times.
        </li>
        <li>
          Resolved an Android issue where opening threads from the message list
          could cause a crash.
        </li>
        <li>
          Resolved an issue where usernames in replies and join messages were
          not resolving properly.
        </li>
        <li>
          Fixed a bug on mobile where the channel list would still be rendered
          while chat is fully open, wasting previous frame time.
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
          Mobile clients should no longer show invalid context items, like pin
          message, on ephemeral messages (aka, a message from an app that only
          you can see).
        </li>
        <li>
          Resolved a short lived issue that prevented apps from launching via
          the App Launcher text interface.
        </li>
        <li>
          Resolved an issue that could prevent the keyboard from functioning
          properly in Activities.
        </li>
        <li>
          Resolved a crash that could occur from message deletion while in an
          Activity.
        </li>
        <li>
          Resolved an issue in the App Directory where pressing either the “Add
          App” or “View App” button would make the other button disappear.
        </li>
        <li>
          Fixed an issue that caused the “Authorize Activity” modal to have an
          unnecessary scrollbar.
        </li>
        <li>
          Resolved a crash when attempting to view commands for an app which had
          no commands in a DM.
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
          Clicking “Watch Stream” from a user’s channel modal no longer opens
          the user’s profile.
        </li>
        <li>
          Fixed a bug that improperly cropped the “Join Voice” button in Group
          DMs on Android.&nbsp;
        </li>
        <li>
          Fixed an issue that caused the channel list background to render in
          full screen voice chats.
        </li>
        <li>
          Joining a call from within the app on Android should now properly stop
          the call sound/vibration. Previously, only accepting/dismissing the
          call Notification would end the call SFX and vibration.&nbsp;
        </li>
        <li>
          Resolved an issue that could incorrectly cause the channel list to
          show the users active in an offscreen voice channel as 0.
        </li>
        <li>
          Improved the mute state button in voice channel popouts to be more
          intuitive.&nbsp;
        </li>
        <li>
          Fixed a low repro issue that could cause a client crash when opening
          the profile of someone who is actively screen sharing.
        </li>
        <li>
          Opening a text chat during voice channel’s ongoing video call on a
          mobile device in landscape orientation should now work properly.
        </li>
        <li>
          Fixed a bug where the user limit in VCs would sometimes not render on
          the channel.
        </li>
        <li>
          The profile modal within a Voice Chat should now respect connect
          permissions of that channel.
        </li>
        <li>Resolved cosmetic issues with Stage channel streams on iOS.</li>
        <li>
          Resolved an issue that caused Android video to be mirrored for
          recipients.
        </li>
        <li>
          Resolved video flickers that occurred on iOS when swapping between PiP
          and full screen during a video call.
        </li>
        <li>
          Voice call controls should now stay on the screen for mobile clients
          unless dismissed by the user.
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
          Continuing our conquest to provide an S tier media sharing experience
          on Discord, we resolved some WebP playback performance issues on iOS
          and shipped AVIF support to all platforms. AVIF is a modern image
          format that has higher compression ratios than legacy formats, and
          supports features like HDR, ICC Color profiles, transparency, etc. If
          you’re someone who really cares about image quality, this is an
          exciting new feature.
        </li>
        <li>
          Significantly improved WebP decoding performance on iOS. This is
          especially noticeable for animated WebP files with high-resolution
          frames or large frame counts.
        </li>
        <li>
          Fixed a bug that caused the keyboard to render in front of the media
          picker when trying to share media when creating a new DM on
          mobile.&nbsp;
        </li>
        <li>
          Resolved an issue that caused video uploads on Android to not function
          properly for an evening.
        </li>
        <li>
          Resolved an issue where YouTube embeds would ignore the timestamp
          parameter.
        </li>
        <li>Fixed an issue that caused Remix to crash the client on iOS.</li>
        <li>
          Videos that are within a spoiler tag should no longer have the video
          player controls cut off.
        </li>
        <li>
          iOS users should now be able to search properly in media channels
          again.
        </li>
        <li>
          Videos from 3rd party websites that can’t be embedded now properly
          inform the user.
        </li>
        <li>
          Navigating away from an active embedded video with the navigate back
          gesture should now properly stop playback on iOS.
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
          Screen readers should no longer be able to focus on bullet points in
          messages.
        </li>
        <li>
          Screen reader users should now be able to navigate to the “Copy Invite
          Link” button in a server channel’s context menu.
        </li>
        <li>
          Improved the specificity of the name of the “Change Camera” button for
          screen readers.
        </li>
        <li>
          Added roles for screen readers to the “Emoji”, “GIFs” and “Stickers”
          buttons in the expression picker.
        </li>
        <li>
          Improved the contrast of the error text in account creation flows.
        </li>
        <li>
          Unread message counts are now available to access via screen readers.
        </li>
        <li>
          The “Join an existing server” element is now properly marked as a
          heading for screen readers.
        </li>
        <li>
          “Voice Settings” and “Discord Member Since” in a Voice Chat profile
          are now marked properly as headings for screen readers.
        </li>
        <li>
          The “Leave Call” button’s explanation for Screen Readers is no longer
          “Start Voice Call”. Whoops.
        </li>
        <li>
          Resolved an issue for Talkback users that prevented setting their date
          of birth.
        </li>
        <li>The volume slider in voice chat now has an accessible name.</li>
        <li>
          The “Edit Status” and “Status Duration” texts when configuring a
          custom status are now marked as headings for screen readers.
        </li>
        <li>
          Removed an invisible element on the Profile screen in the Server
          Profiles tab that could be selected by screen readers.
        </li>
        <li>
          The “Expire After” and “Max Uses” sections of the Server Invite UI now
          have roles assigned for screen readers.
        </li>
        <li>
          The “infinite” button when creating a server link now has an
          accessible name.
        </li>
        <li>
          Screen readers should no longer get their focus stuck on “Copy Link”
          in the DM list.
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
        instrumentation and tooling.……… oh hey, you read everything! If you’re
        itching for the latest updates to Discord, you can find our previous
        Patch Notes articles
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
