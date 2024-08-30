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
          We recently found a classification of iOS crashes that eluded our
          existing telemetry. We identified, instrumented, and resolved these
          which yielded an 84% reduction in iOS crash rate. Let’s gooooo!
        </li>
        <li>
          Do you love stickers but find navigating UIs with your mouse
          <em>tiresome</em>? We added a /sticker command on Desktop to search
          just stickers from the chat input. Hope you like it!
        </li>
        <li>
          Images and emojis have used lossless WEBPs for a while now. However,
          stickers were not lossless, which meant you’d occasionally see
          compression artifacts. No more! Stickers are now also using lossless
          quality and should always look nice and <em>crisp</em>.
        </li>
        <li>
          We’ve added the Quest Home screen on Desktop. Users can navigate to
          this by going to Explore Discoverable Servers → Quests to see active
          and completed quests.
        </li>
        <li>
          We’ve added a toggle for sharing audio to the in-call screen share
          settings while actively streaming. Previously, users had to restart a
          stream to change this setting.
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
          Changing Client Themes on the mobile app no longer requires a restart!
          Whether you’re comparing themes or just like variety in your life,
          swapping themes on mobile will be nice and painless now.
        </li>
        <li>
          Links in channel descriptions on mobile should now be tappable to
          navigate to them.
        </li>
        <li>
          The microphone toggle button no longer vanishes after pressing the
          Overlay button.
        </li>
        <li>
          Navigating to a user’s profile via right-clicking on them in the
          Mutual Friend’s UI should now work properly.
        </li>
        <li>
          Fixed a bug that caused the Overlay add reaction buttons to be present
          while the Overlay was locked.
        </li>
        <li>
          Resolved a couple of inconsistencies in how Invite links are generated
          on mobile and Desktop. Links should consistently link to the correct
          channel and have the same URL forms now.
        </li>
        <li>
          Fixed a bug that caused the background image in the Quests UI to
          render incorrectly if the user had no active Quests.&nbsp;&nbsp;
        </li>
        <li>
          Fixed an alignment issue with the “Reveal” buttons associated with
          email and password in User Settings.
        </li>
        <li>
          Resolved a bug that sometimes caused the default avatar decoration to
          display instead of the server-specific one in server Member
          Lists.&nbsp;
        </li>
        <li>
          Filtering emojis by server in the emoji picker should now work
          properly again.
        </li>
        <li>
          Resolved a bug that caused the selection indicator to render
          incorrectly on other channels when reordering channels in the channel
          reordering UI on mobile.
        </li>
        <li>Friend requests in the inbox no longer have displaced icons.</li>
        <li>
          Fixed an alignment issue with the “Add it!” text in the Registered
          Games section of User Settings.
        </li>
        <li>
          Fixed an issue with certain elements always being light-themed during
          new server creation flows.
        </li>
        <li>
          Fixed a bug causing the container in the channel details sheet to be
          too short while searching on iOS.
        </li>
        <li>
          Pressing the back button after logging out on Android no longer puts
          the client in a bad state.
        </li>
        <li>
          Fixed a bug causing users on certain Android devices to crash when
          viewing the sticker page.
        </li>
        <li>
          Fixed an issue with Quests rendering improperly and not being
          interactable while in the Overlay.
        </li>
        <li>
          Resolved a theming issue with the “NEW” tag on the Browse Channels
          widget.
        </li>
        <li>
          Tapping members in the mobile member list should now properly open
          their profile.
        </li>
        <li>
          Fixed an issue on Desktop with channel statuses that caused the
          tooltip not to appear if a channel status edit was canceled.
        </li>
        <li>
          Resolved a bug where the Shop Anywhere sheet’s button was too low on
          the screen, overlapping with Android OS navigation buttons.
        </li>
        <li>
          Fixed a bug that caused server avatars to not render for a subset of
          users on Desktop.
        </li>
        <li>
          Resolved an issue that caused incorrect elements to scroll in the poll
          results UI on Desktop.
        </li>
        <li>
          Resolved an issue that caused the input cursor to be incorrectly
          placed when searching through the Emoji Picker.
        </li>
        <li>
          Server admins should now be able to see ban reasons in the Bans
          settings page on mobile platforms.&nbsp;
        </li>
        <li>
          Users should no longer be able to enter a state where favorited
          stickers from servers they left affect their ability to add new
          favorited stickers.
        </li>
        <li>
          Interacting with emoji in poll answers that have emojis in them should
          now properly select the associated answer.
        </li>
        <li>There should now be a scroll bar on audit log filters.</li>
        <li>
          Fixed an issue that caused the CMD button on Macs to improperly scroll
          the Collectibles Shop.
        </li>
        <li>
          Fixed an alignment issue with the Hang Status text on User Profiles.
        </li>
        <li>
          Fixed a bug that caused CMD+F to crash the Discord app in Safari.
        </li>
        <li>
          Resolved an issue that allowed users to navigate to a category as if
          it were a text channel via search.&nbsp;
        </li>
        <li>
          We fixed a longstanding issue where users without Read Message History
          were blocked from adding reactions or voting in polls on messages they
          could see.&nbsp;
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
          Fixed a bug in Voice Messages that caused the volume icon to not
          properly change colors when the background color changed.
        </li>
        <li>
          Fixed a race condition on iOS that could cause severe issues in the
          app when navigating to very old messages directly, like via a reply,
          when they weren’t already loaded into the client.&nbsp;
        </li>
        <li>
          Fixed spacing and coloring issues with the separator between thread
          previews and chat.&nbsp;
        </li>
        <li>The arrows for Sort By in Forums are now aligned properly.</li>
        <li>
          Resolved an issue on iOS where the OP tag in a thread would cover
          reply text.
        </li>
        <li>
          Resolved an issue that caused certain users to crash when long
          pressing an emoji on Android.
        </li>
        <li>
          When tapping on Super Reactions, the text field now stays focused.
        </li>
        <li>
          Resolved a bug that caused long user names to not truncate properly in
          the DM list.&nbsp;
        </li>
        <li>
          Resolved a couple of displacement issues with newlines in text input
          on iOS.
        </li>
        <li>
          Navigating message history with shift+tab no longer gets stuck on
          images.
        </li>
        <li>
          Fixed a bug that caused chat to frustratingly scroll after receiving
          new messages while browsing old messages in a channel.
        </li>
        <li>
          Resolved a bug that caused adding emojis to the subtext of a message
          in the composer would break chat input.
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
          Fixed a crash users could encounter while searching for commands in
          the Bots tab.
        </li>
        <li>
          Fixed an issue in the App Shop that could cause clients to freeze when
          interacting with an item.
        </li>
        <li>
          Fixed a bug that caused users to be unable to clear the unread dot on
          the Activities launcher.
        </li>
        <li>
          Fixed an issue that caused active activities to not show icons
          properly on the Mobile channel list.
        </li>
        <li>
          Fixed an issue with the “Try My Commands” section of a bot profile
          where subcommands would sometimes be selected, which couldn’t be
          clicked or interacted with.
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
          Fixed an issue that caused Entrance Sounds to occasionally be
          distorted.&nbsp;
        </li>
        <li>
          Resolved an issue that could cause avatars in voice calls to not
          properly have rounded corners.
        </li>
        <li>
          Fixed a bug that caused videos to not play properly in full screen
          when they were played from a small Discord window.
        </li>
        <li>
          Fixed a bug that caused Nitro users to still see a Nitro advertisement
          in Soundboard.
        </li>
        <li>
          Resolved an issue where after a fresh install on mobile, users could
          appear muted on their client while actually not muted.
        </li>
        <li>
          Resolved a bug that caused member lists of a voice call to be
          incorrect upon reconnection if the user’s computer went to sleep while
          in an active voice call.
        </li>
        <li>
          Fixed a bug that caused Discord calls to not pass properly to
          iOS.&nbsp;
        </li>
        <li>
          Resolved an issue that caused locked sounds in the soundboard to still
          be playable.
        </li>
        <li>
          Fixed an issue where 480p resolution wasn’t available for a screen
          share until after the user was already sharing.
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
          Fixed a bug that caused seeking in most videos in the player to fail
          on Android.&nbsp;
        </li>
        <li>
          When modifying an attachment on Desktop, the video and image icons no
          longer overlap with other text.
        </li>
        <li>
          Single small images no longer take up the full-screen width in iOS
          mosaics.
        </li>
        <li>
          Resolved an issue that caused certain Android users to be unable to
          upload files for profile pictures.
        </li>
        <li>
          Fixed a bug that caused GIFs with transparent elements to incorrectly
          duplicate when played.
        </li>
        <li>
          Downloading images from a gallery no longer repeatedly downloads the
          same image.
        </li>
        <li>
          Resolved an issue with video uploading that caused the resolution to
          not be respected in preview.
        </li>
        <li>
          Resolved an alignment issue with drag &amp; drop file uploads in the
          hover-over state before “dropping” the file into the client.&nbsp;
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
          Fixed an issue where the “Finish setting up your server!” text wasn’t
          marked up as a header for screen readers.
        </li>
        <li>
          Resolved a bug that caused the bottom sheet slider element to not
          announce properly when focused on while using a screen reader.
        </li>
        <li>
          Resolved several accessibility issues with Message Reminders.&nbsp;
        </li>
        <li>
          Improved contrast of the iOS age selection in new account flows in
          dark mode.
        </li>
        <li>
          Resolved an issue where emojis could still animate in the emoji picker
          with the Reduced Motion setting enabled.
        </li>
        <li>
          Resolved several issues with TalkBack associated with voice messages.
          This flow should feel much better for users utilizing TalkBack.
        </li>
        <li>
          Resolved multiple accessibility issues with error messages associated
          with usernames when attempting to add a friend.
        </li>
        <li>
          Resolved an issue with insufficient contrast between the username text
          field and the background in the “Add Friends” screen.
        </li>
        <li>
          Resolved an issue for screen readers where the plus button near chat
          input on Desktop would cite an invite option that didn’t exist.
        </li>
        <li>
          Fixed an issue with Voiceover where users could focus on a decorative
          speaker icon.
        </li>
        <li>
          Fixed an issue with TalkBack where users could incorrectly focus on
          the individual modal switches associated with options that didn’t have
          labels for their function.&nbsp;
        </li>
        <li>
          Fixed a bug with reaction buttons and Voiceover where users could only
          interact with them once.
        </li>
        <li>
          Fixed a bug with voice messages that caused TalkBack to not read out
          the sender’s name.&nbsp;
        </li>
        <li>
          Fixed several accessibility issues in the “Verification Required”
          screen.
        </li>
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
