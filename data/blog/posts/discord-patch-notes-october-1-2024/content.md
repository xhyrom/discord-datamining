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
          We’ve made significant improvements to the Android chat renderer
          recently. These changes reduced slow frames by as much as 60%
          depending on your device, and we’re measuring ~12% reduced memory used
          by the chat list. Actions such as scrolling through chat histories in
          Android should feel and look much smoother now.&nbsp;
        </li>
        <li>
          We recently shipped a change that virtualizes the server list on
          mobile platforms. This change primarily helps users in large numbers
          of servers by only allowing visible servers in the list to remain
          loaded in the app at any given time. For users in a large number of
          servers, we’ve measured improvements of 14% in memory usage and 25% in
          CPU usage. If you’re one of these users, you may notice a difference
          in general performance of the app following this change.&nbsp;
        </li>
        <li>
          Thanks to a recent fix of a long-standing issue, unread indicators
          should now consistently render above the correct message on mobile —
          even if you’re popular and have <em>many</em> unread messages.
        </li>
        <li>
          We’ve made changes to our data stores on iOS to reduce the amount of
          space used on devices. Following this work, disk usage for the 1% most
          affected iOS users went from 5.7 GB to 1.7 GB.&nbsp;
        </li>
        <li>
          We’ve updated the UX for initiating a screen share on MacOS to be more
          consistent with other experiences. It’s also a bit sleeker visually
          now.
        </li>
        <li>
          We shipped a new Soundboard UI on desktop, making it easier to
          navigate around and interact with individual sounds. We also dig the
          aesthetic more, and hope you like it, too!
        </li>
        <li>
          Discord now supports playing Animated WebP attachments on our web and
          desktop platforms. WebP files offer a lot of benefits, including
          smoother playback and reduced bandwidth usage over other formats.
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
          You can now overwrite a URL link properly in Discord. Previously, if
          you highlighted text and pasted a link, it would use Markdown to turn
          that text into a link, directing at the link pasted. This could be
          annoying if you were trying to replace a URL. Now, pasting a link on
          top of another link instead replaces the URL with the new one.
        </li>
        <li>
          We upgraded to Electron 32. We expect some minor, incremental
          performance gains and reductions in crashes from this work.&nbsp;
        </li>
        <li>
          The green check mark overlaid on the avatar of friend request
          acceptance notifications is now back. It was missing for a while, but
          we found it.&nbsp;
        </li>
        <li>
          Fixed a bug on iOS that prevented users from being able to interact
          with any results that weren’t on the first page of message search.
        </li>
        <li>
          Using certain NFC hardware keys on iOS will no longer cause the app to
          crash.
        </li>
        <li>
          Fixed a short-lived regression that caused tablets to sometimes fail
          orientation detection.
        </li>
        <li>Activity Status is now properly shown for PS5 games.</li>
        <li>
          Fixed a bug that caused a misalignment of elements in the Student Hub
          navigation pane.
        </li>
        <li>
          Fixed a bug that caused the emoji picker to lose rounded corners and
          the header to be slightly too large.
        </li>
        <li>
          Profile customizations now load in the Shop on the first
          attempt.&nbsp;
        </li>
        <li>Fixed an issue that caused GIF picker categories to freeze.</li>
        <li>
          Resolved an issue that caused GIF categories in the picker to
          sometimes become rate-limited.
        </li>
        <li>
          Resolved an issue that caused the user profile status bubble to render
          too low.&nbsp;
        </li>
        <li>
          Fixed an issue that caused search filters to not theme appropriately
          when using light theme.
        </li>
        <li>
          Header popouts in the Notification Center are now themed properly.
        </li>
        <li>The back button should now properly work from GIF categories.</li>
        <li>
          Resolved an issue that caused presence for certain game titles to
          present the name in Japanese.&nbsp;
        </li>
        <li>
          Permission descriptions in Role settings should now render properly on
          mobile.
        </li>
        <li>
          Resolved a bug that caused the list of friends in the Friends UI to
          not be scrollable. Don’t worry, your friends didn’t remove you!&nbsp;
        </li>
        <li>
          The timeout duration in mod view no longer renders blank if shown in
          seconds.
        </li>
        <li>
          Resolved an issue that caused quest cards to sometimes not be
          interactive.
        </li>
        <li>
          Resolved a bug that caused an outline border to occasionally be
          missing in the emoji picker.
        </li>
        <li>
          Resolved a bug that caused certain avatar decorations to have an
          unintended border.&nbsp;
        </li>
        <li>
          The escape key now properly backs users out of flows in the
          Shop.&nbsp;
        </li>
        <li>
          The Toggle Overlay hotkey should now function again following
          alt-tabbing out of an application.
        </li>
        <li>
          Clicking the Quests badge no longer takes users to the old Quests
          page.
        </li>
        <li>
          Resolved an issue that caused the incorrect font to be used for
          servers without a set icon.
        </li>
        <li>
          Collapsing expanded roles in a profile popout should now always leave
          the user in the same initial state as before the roles were expanded.
        </li>
        <li>
          Resolved an alignment issue with the “Clear All” button for message
          requests.
        </li>
        <li>
          The Members page in server settings should no longer render roles
          off-screen when hovering over role lists.
        </li>
        <li>
          Discord links to Server Guide now properly show the Guide’s unique
          channel icon.
        </li>
        <li>
          The tab navigation indicator is no longer cut off on the right side
          when navigating lists of mutual friends in user profiles.
        </li>
        <li>
          The tab navigation indicator is no longer cut off when navigating to
          user names on pop out profiles.
        </li>
        <li>
          Opening server settings from mutual servers on profiles now properly
          closes the profile.
        </li>
        <li>
          Resolved an issue with polls where the remaining duration would render
          an incorrect string as the poll was closing.
        </li>
        <li>
          The indicators for “Passed Verification Level” and “Agreed to Rules”
          in the Members page are now accurately reflecting state again.
        </li>
        <li>
          Resolved issues with elements overlapping each other in the channel
          settings UI while attempting to add members.&nbsp;
        </li>
        <li>
          Resolved an issue where the Android application would mark issues as
          read when foregrounding the app too quickly.
        </li>
        <li>
          Resolved a bug that caused the soundboard search box to render on top
          of the upload a sound modal.
        </li>
        <li>
          Attempting to view a deleted channel in Audit Log with ModView open no
          longer crashes the client.
        </li>
        <li>
          Fixed a bug that caused the “You can’t use this sticker right now”
          pop-up to render behind the sticker menu.
        </li>
        <li>
          Clearing the search input no longer changes the category selected for
          the search on mobile.
        </li>
        <li>
          Resolved a bug that caused the keyboard to occasionally get stuck open
          in the GIF picker on mobile.
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
          Resolved an issue that could cause the top of Avatar Decorations to
          get cut off in chat.
        </li>
        <li>
          Resolved a bug on Android that caused web embeds to not scale
          properly, which would cut off portions of the embed image.
        </li>
        <li>
          Fixed a bug that caused action sheet handles to improperly overlap
          with other elements.
        </li>
        <li>
          Fixed an issue that caused the “Jump to Bottom” button to not render
          on mobile.
        </li>
        <li>
          Resolved an overlapping element issue affecting text overflow numbers
          and the “Powered by Nitro” element in the message composer.
        </li>
        <li>
          Resolved an issue that caused chat messages to sometimes render with
          the wrong height.
        </li>
        <li>
          Inline emoji search during message composition should now play much
          nicer with iOS autocorrect.
        </li>
        <li>
          Resolved an edge case that could cause channels to not render properly
          if significant numbers of messages were deleted while the mobile app
          wasn’t running.
        </li>
        <li>
          Fixed an issue that caused the “React to Post” button on forum posts
          to be invisible until clicked.
        </li>
        <li>
          Resolved an issue that could cause a crash when clicking the emoji
          button in the post creator of a forum channel.
        </li>
        <li>
          Resolved a crash that could occur in very rare circumstances when
          backing out from thread settings (in a thread with pinned messages of
          attachments).
        </li>
        <li>
          Addressed an alignment regression with the Emoji icon on the chat
          input on Desktop.
        </li>
        <li>
          Resolved an issue that caused focusing on old messages on mobile
          platforms to sometimes not navigate to the correct message.&nbsp;
        </li>
        <li>
          Users should now be able to clear mention indicators in a voice
          channel’s text chat by marking the category of the channel as read.
        </li>
        <li>
          Resolved an issue that caused slash commands (like /msg) to crash the
          client, but only in specific servers. Spooky...
        </li>
        <li>
          Resolved a bug that caused the “Jump to Message” container to not be
          aligned properly.&nbsp;
        </li>
        <li>
          Resolved an issue with Markdown where multi-indent bulleted item lists
          would improperly nest.
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
          Fixed a bug in mobile OAuth flows for adding an application that
          prompted users to keep scrolling even when the user was already at the
          bottom of the screen.
        </li>
        <li>
          Fixed a bug that caused certain activities to not have text on the
          Launch buttons.
        </li>
        <li>
          Swiping up in the mobile app-launcher for Discord Apps should now
          properly expand the launcher.&nbsp;
        </li>
        <li>
          Invalid interactions with bots will no longer generate an incorrectly
          formatted message.
        </li>
        <li>
          Resolved frame scaling issues with activities when compressed due to
          text in voice chat expansion in small windows.
        </li>
        <li>
          We resolved an issue that caused activities to sometimes prompt users
          too often for authorization.
        </li>
        <li>
          Fixed a typo in the emojis tab of application pages in the App
          Directory.
        </li>
        <li>
          Resolved an issue that caused activity join and end sounds not to play
          properly on Android.
        </li>
        <li>
          When scrolling up in the activities launcher on mobile, continuing to
          scroll upwards at the top will now transition into hiding the sheet
          rather than failing to scroll upwards further.
        </li>
        <li>
          Fixed an issue that caused the Activity PiP to be hidden by Text in
          Voice.
        </li>
        <li>
          Resolved a bug that could cause Activities to unintentionally quit
          when popping out the VC.
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
          Fixed a bug that caused the mute icon in calls to be the incorrect
          color.
        </li>
        <li>
          Avatars in voice PiPs on Android should now be properly centered.
        </li>
        <li>
          Fixed a bug that could cause the PiP to disappear when having
          connectivity issues in a call, creating difficulty reconnecting.
        </li>
        <li>
          Being server deafened in a voice chat no longer prevents the user from
          being able to mute/unmute their microphone via the UI.
        </li>
        <li>
          Resolved an issue on certain devices where Android VC controls within
          the bottom sheet would become unresponsive after closing and
          re-opening the bottom sheet.&nbsp;
        </li>
        <li>
          Resolved an alignment issue with the button to close PiP during
          screenshare.
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
          Fixed a short lived bug that caused GIF searches to not function for
          queries longer than 2 characters.
        </li>
        <li>
          Fixed an issue that briefly caused media embeds to stop working in the
          web app on Safari.
        </li>
        <li>
          Resolved an issue that allowed clients to enter a state where they’d
          repeatedly send a previously-sent media file to a channel every time
          the channel was opened. PLEASE stop sending that picture of your cat,
          Kyle.
        </li>
        <li>
          Saving media in a gallery should now properly save the correct media
          file.
        </li>
        <li>
          Resolved an older mobile issue that could cause an additional “Sending
          message…” entry to show in the client after sending media that would
          not properly clear. This issue happened predominantly on cellular
          connections and when the app was backgrounded quickly after sending
          the initial message.
        </li>
        <li>
          Resolved an issue where certain videos on mobile would not show player
          controls in full screen.
        </li>
        <li>
          Image mosaics now properly display in Safari with an inline forward
          button.
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
        <li>User-facing developer settings are now localized.</li>
        <li>
          Users with screen readers will now be informed of the role of the
          “Call Ended” element.&nbsp;
        </li>
        <li>
          The “Download” button for attachments now has an accessible name.
        </li>
        <li>
          Accessibility Settings have become more searchable. You should see
          things filter properly when searching in these settings now.
        </li>
        <li>
          Users that utilize TalkBack should now be able to focus on Polls and
          Files buttons in text chat.
        </li>
        <li>
          Users that use Voiceover should now be able to navigate to and outside
          of the “Dismiss” part of the user profiles bottom sheet.
        </li>
        <li>
          Keyboard navigation can now properly access the “Copy Username”, “Edit
          Profile”, “Switch Account” buttons in user profiles.
        </li>
        <li>
          The description of guild tags in the Accessibility tab of settings is
          now translated properly.
        </li>
        <li>
          Fixed an issue with braille screen input where it failed to function
          properly when creating a description for an event.
        </li>
        <li>Buttons to open connected accounts now have an accessible name.</li>
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
        if you’re more into the fun stuff.
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
