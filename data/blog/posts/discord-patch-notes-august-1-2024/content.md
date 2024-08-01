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
          Starting several weeks ago, many users reported two distinct issues:
          one would cause Discord to turn blank/gray while not in focus and one
          would cause intermittent disconnects from voice channels. These were
          hard to narrow down, but we believe they’ve been resolved for the vast
          majority of users who were experiencing them over the past few weeks.
          Please contact us using the
          <a href="https://dis.gd/reddit-bug-megathread"
            >Bimonthly Bug Megathread</a
          >
          if you’re continuing to experience either issue in a recent client
          version.
        </li>
        <li>
          We added improved presence information for Group DMs! GDMs now show
          typing indicators and online status if at least one other user in the
          GDM is online. In addition, GDMs will now show the profile pictures of
          other users in the chat on Desktop if you haven’t added an icon to the
          group chat.&nbsp;
        </li>
        <li>
          Message send retries and message send failures are now more intuitive
          and reliable on mobile. We’ve tweaked how long Discord will attempt to
          send your message before failing, and we now send a push notification
          to inform you if a message fails to send. This should be a better
          experience for everyone when messages fail to be sent due to
          connectivity issues.
        </li>
        <li>
          Over the last few weeks, we’ve optimized each portion of the
          expression picker (Stickers, GIFs, and Emoji). These flows show up to
          50% reductions in the frequency of dropped render frames on Android
          and ~7.5% reduction in memory usage in our testing. You may also
          notice significantly less blanking during scrolling of large amounts
          of assets in these flows.&nbsp;
        </li>
        <li>
          We also spent time optimizing the list of friends in New Message flows
          for DMs/GDMs. Scrolling through your friends list when starting a new
          conversation should feel much faster. We measured 20-35% reductions in
          dropped render frames across several devices in our testing of this
          experience.
        </li>
        <li>
          We’ve started to integrate with Apple’s “Communication Notifications”
          on iOS to improve our notification functionality. There are a couple
          of benefits here, but one of the biggest things you’ll notice is that
          notifications now show the avatar of the user who messaged you.
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
          Fixed a bug that caused very long (honestly, ridiculously long) GDM
          names to not format properly in the tooltip and render
          off-screen.&nbsp;
        </li>
        <li>
          Profile edit previews now have a max width. Before, if you had a
          lengthy word in the profile, the profile edit preview would just
          expand rather than wrap the word.&nbsp;
        </li>
        <li>
          Resolved color issues with the Shop loader on Light theme.&nbsp;
        </li>
        <li>
          Resolved an incorrect padding issue on iOS after adding a friend on a
          new account.&nbsp;
        </li>
        <li>
          Unbanning users should now immediately remove them from the ban list
          in the UI.&nbsp;
        </li>
        <li>
          The “Registered Games” dropdown in settings now populates and renders
          properly on Linux.&nbsp;
        </li>
        <li>
          Fixed a spacing issue that caused pinned polls to be positioned too
          far to the right.&nbsp;
        </li>
        <li>
          The bottom border of forum channels now themes properly on
          mobile.&nbsp;
        </li>
        <li>
          Resolved an issue where server banners could be misaligned for mobile
          users.
        </li>
        <li>
          Fixed a bug that caused empty cutouts in profile images for friend
          request notifications on Desktop.
        </li>
        <li>
          We resolved an edge case with guilds that have lots of events which
          caused their members to become rate-limited unintentionally. This
          could cause all kinds of different actions to fail for users in
          affected guilds.&nbsp;
        </li>
        <li>
          If users have a sticker from a particular server favorited and then
          leave the server, the sticker is no longer shown in the picker.
          Previously, the sticker would show but be unusable.
        </li>
        <li>
          Updates to frequently used emojis now respect which account is logged
          in for users that use multiple accounts/account switching on
          Desktop.&nbsp;
        </li>
        <li>
          Resolved an issue that caused improper theming on the “Add App” icon
          in Light theme.
        </li>
        <li>
          Fixed a bug that could prevent users from swapping between tabs in the
          Privacy &amp; Safety settings.
        </li>
        <li>
          Fixed a coloring issue with the members list search entry area in the
          Members List of Server Settings.&nbsp;
        </li>
        <li>
          Cropping a server banner on mobile now properly crops the image at a
          16:9 aspect ratio instead of 1:1.
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
          Resolved an issue where touch input could be severely misaligned when
          trying to mark a server as read on Android.&nbsp;
        </li>
        <li>
          Resolved a tricky race condition on mobile clients that could cause
          User A to see messages they sent as being sent by User B. This only
          affected User A’s client and would clean up shortly after via normal
          usage.
        </li>
        <li>
          Fixed a bug that caused messaging and the channel list to break on
          mobile if you navigated to a channel via an in-app notification while
          looking at an image.
        </li>
        <li>
          Clicking on a server-specific role mention should no longer show an
          error saying “You don’t have access to this link”.&nbsp;
        </li>
        <li>
          Resending a failed message that replied to another message should now
          properly reply to the message. Before this fix, it would incorrectly
          send a non-reply message instead.&nbsp;
        </li>
        <li>
          Fixed a bug that caused the chat input in a new thread sidebar to get
          cropped by the edge of the app.&nbsp;
        </li>
        <li>
          When the app opens to a channel that has many unread messages, the
          channel should no longer be marked as read incorrectly.
        </li>
        <li>
          Resolved an issue on iOS that could cause the cursor in the message
          composer to jump between lines of multiline messages incorrectly while
          typing.&nbsp;&nbsp;
        </li>
        <li>
          Resolved an issue where adding a special character right after a link
          to a Discord message would incorrectly generate an embed instead of a
          Discord link.&nbsp;
        </li>
        <li>
          Resolved an issue with message reply preview icons that could cause
          them to render in the wrong place.
        </li>
        <li>
          Resolved an issue that could cause the wrong channel to open when
          opening the mobile app via a notification.&nbsp;
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
          Activity in text frames should now have consistently behaving rounded
          corners: they’ll have rounded corners when empty space exists, and no
          rounded corners if no empty space exists.&nbsp;
        </li>
        <li>
          Resolved a slight spacing issue in the interaction modal with
          Bots/Apps.&nbsp;
        </li>
        <li>
          When a thread is created via webhook, we now properly set the thread’s
          initial message with the webhook content.&nbsp;
        </li>
        <li>
          Resolved an API issue where we were returning an incorrect error
          message when sending user app commands without permissions.&nbsp;
        </li>
        <li>
          The close button on the “Launch Activity” frame in voice calls no
          longer migrates between UI frames when the chat sidebar is resized.
        </li>
        <li>
          Resolved an issue where the activity button in mobile voice calls lost
          its background.&nbsp;
        </li>
        <li>
          The app launcher now properly takes up the full chat input width on
          tablets.&nbsp;
        </li>
        <li>
          Resolved a potential issue where users could be incorrectly
          reconnected to an activity after they left.&nbsp;
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
          We added Go-Live capture card support for macOS. Previously, this was
          Windows only due to some known issues. These issues are resolved so we
          enabled support. Enjoy!
        </li>
        <li>
          Users can now resize the in-app PIP on Desktop for video calls and
          Go-Live streams that renders when navigating the app during an active
          call. This was a frequently requested feature, so we’re particularly
          excited to ship this improvement!&nbsp;
        </li>
        <li>
          Resolved a very short-lived issue where iOS users were unable to
          enable their camera in calls.&nbsp;
        </li>
        <li>
          The echo cancellation setting in voice and video settings should no
          longer disappear while Krisp is active.
        </li>
        <li>
          Resolved a couple of minor issues with call header text being
          misaligned on iOS.
        </li>
        <li>
          Resolved an issue that caused the voice chat UI to no longer update to
          the speaking user when your call is in PiP mode.&nbsp;
        </li>
        <li>
          Cleaned up the animation played during the transition to full-screen
          when watching another user’s stream.
        </li>
        <li>
          Users should now be able to share their screen while also watching a
          screen share in the web client.
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
          Fixed a regression where the “save” option in the media viewer for
          GIFs was no longer available.&nbsp;
        </li>
        <li>
          Resolved a bug that caused portrait images to embed improperly, which
          manifested as incorrectly cropped images.&nbsp;
        </li>
        <li>
          Fixed a bug that prevented users from opening GIFs properly on
          iOS.&nbsp;
        </li>
        <li>
          Resolved an issue that caused the progress indicator to get stuck when
          uploading an image.&nbsp;
        </li>
        <li>
          The buttons in the media player now respect Light theme
          appropriately.&nbsp;
        </li>
        <li>GIFs are now categorized as “media” in search on mobile.&nbsp;</li>
        <li>
          Embedded videos that are particularly tall or short should no longer
          have spacing issues around the video.
        </li>
        <li>
          Media viewer should now function properly when viewing content on the
          iPad app while it’s currently in Split View.&nbsp;
        </li>
        <li>
          Fixed an issue where .gif file attachments would not play properly if
          the extension was capitalized (”.GIF”).
        </li>
        <li>
          Fixed a bug in Forum channels where adding an image to an existing
          post would remove any other files attached to the post.&nbsp;
        </li>
        <li>
          Failed file uploads should no longer disappear when restarting the
          app.
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
          The “More Options” button when viewing a photo/video is no longer
          mislabeled as “Share” when using a screen reader.
        </li>
        <li>
          Resolved an issue affecting screen readers where the “Messages” text
          at the top of DMs wasn’t marked as a heading.&nbsp;
        </li>
        <li>
          The “Discord TOS and Privacy Policy” checkbox during registration now
          has an accessible name.&nbsp;
        </li>
        <li>
          Users with screen readers should now be able to navigate to “Back” and
          “All Albums” in the expanded media keyboard using swipe
          gestures.&nbsp;
        </li>
        <li>
          The “View User Profile” button in chat now has an accessible
          name.&nbsp;
        </li>
        <li>
          The “Enter a username” input field in the flow for adding friends by
          username now has an accessible name.&nbsp;
        </li>
        <li>
          Voiceover users can now properly interact with the “Date of Birth”
          button in the account creation flows.
        </li>
        <li>
          The phone number input field on the “Find your friends” screen now has
          an accessible name.&nbsp;
        </li>
        <li>
          The heading for the “Find your friends” flow is now correctly marked
          up as a heading for screen readers.
        </li>
        <li>
          Resolved a VoiceOver issue in which certain modal menus were announced
          as a slider incorrectly.&nbsp;
        </li>
        <li>
          The “Add by Username” text in the add friend flow on mobile is now
          properly marked up as a heading for screen readers.
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
