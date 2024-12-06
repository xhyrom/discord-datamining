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
        After this entry, Patch Notes will be taking a short break while our
        team goes on a well-earned winter vacation to cap off the year. Keep an
        eye out for the next edition of Patch Notes in early February!&nbsp;
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
          We’ve shipped a refresh of user profiles (including editing) on
          mobile! Its design and layout more closely match the desktop
          experience and we’ve brought the profile up to speed with our modern
          design system. We think it looks great. Enjoy!&nbsp;
        </li>
        <li>
          We’ve improved the performance of the Media Picker on iOS pretty
          significantly. Taking photos from within Discord and then opening the
          Media Picker used to be slow, with images taking multiple seconds to
          load, even on newer devices. We’ve cut down load time by 90+% in most
          situations and, in many cases, removed blanking at all in the UI. It’s
          so fast now, y’all.&nbsp;&nbsp;
        </li>
        <li>
          We now support Unicode 15.1 Emoji. There are a handful of new emoji
          included here. Fair warning: this isn’t backwards compatible. If you
          see weird placeholders or inconsistent emoji with someone else, you
          probably need to update your client.
        </li>
        <li>
          We now support animated WebP content in embeds and favorites on the
          desktop and web apps, enabling richer visual content while maintaining
          small file sizes. Additionally, we now request all animated emojis in
          WebP format instead of GIF, improving app performance across
          platforms.
        </li>
        <li>
          We recently launched Webhook Events for apps. This allows for events
          to be captured without managing gateway connections if the app isn’t
          particularly latency-sensitive. You can read about them<a
            href="https://discord.com/developers/docs/events/webhook-events"
          >
            here</a
          >.
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
        <li>We’ve added proper embed support for Bluesky URLs.&nbsp;</li>
        <li>
          Resolved a bug that caused profile banner cropping to not crop the
          image properly.&nbsp;
        </li>
        <li>
          Fixed a bug where notification dots for the Shop and settings were
          inconsistently placed on the mobile profile page. Before you ask: yes.
          There was a thread about this, and yes, it was long.
        </li>
        <li>
          Resolved an issue on desktop where the bottom of the server list could
          render as a dark box incorrectly.
        </li>
        <li>
          If you block a user from their profile, you’ll now receive a
          confirmation first. We’re just out here trying to make sure you don’t
          accidentally block your bestie.
        </li>
        <li>
          Resolved an issue where certain pieces of content in Notifications
          could be null.
        </li>
        <li>
          Fixed a bug that caused the icons and text fields in the share screen
          to be severely overlapped.
        </li>
        <li>
          Resolved theming issues with certain buttons in the Nitro Gifting
          flows on light theme.&nbsp;
        </li>
        <li>
          Fixed a short-lived bug where poll result messages weren’t indicating
          a winner on iOS.
        </li>
        <li>
          Fixed a bug that caused the text at the top of the share screen to not
          be properly visible.
        </li>
        <li>
          Attempting to add a role to more than 30 users at once from “Add
          Members” tab of the Roles settings menu used to silently fail. To
          resolve this, we’ve placed a hard cap on the operation to 30 users.
        </li>
        <li>
          Fixed an issue that caused profiles of sufficient length to not
          properly render Send Message and Add Friend buttons.
        </li>
        <li>
          Fixed a bug that could cause shortened URLs to not unfurl properly,
          producing an invalid link.&nbsp;
        </li>
        <li>
          Fixed a bug where the game title in Streaming Activity on profiles
          would sometimes not render anything.
        </li>
        <li>
          Resolved a bug that caused roles to sometimes show incorrect names
          following adding/removing of roles. The issue was cosmetic only and
          cleaned up by refreshing the UI luckily, but confusing nonetheless.
        </li>
        <li>
          Resolved a mobile issue where navigating to “Edit Server Profile”
          while in a call would render the menu behind the VC window.
        </li>
        <li>
          Resolved a localization issue that caused the description of perks in
          Nitro Home on mobile to be cut off in some languages.&nbsp;
        </li>
        <li>
          Resolved an Android-specific bug where some icons or backgrounds were
          missing from buttons.
        </li>
        <li>
          Fixed an issue where the channel settings permissions prompted users
          to search for emojis.
        </li>
        <li>
          Fixed a bug where incoming call notifications on Android would show
          the caller's username instead of their display name.
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
          Fixed an issue that made it to stable where message drafts would
          travel between DM notifications, rather than persist in the DM it was
          authored in. (Sorry about this one.)
        </li>
        <li>
          Using text autocomplete to add an emoji should now work properly when
          Text in Voice chat is viewed in full screen.&nbsp;
        </li>
        <li>
          Fixed a bug that could cause mentioning a user to instead show their
          user ID.
        </li>
        <li>
          Fixed an iOS-specific bug that caused text after “@” in a message to
          be ignored if the “@” was not part of a mention.
        </li>
        <li>
          Resolved an issue on iOS that caused the thread creation screen to
          stop responding properly if the Emoji Picker was opened while creating
          a thread.
        </li>
        <li>
          Fixed an issue where the typing indicator for other users was
          overlapping with the message composer.&nbsp;
        </li>
        <li>
          Fixed an issue where the bottom margin on chat input was inadvertently
          removed.&nbsp;
        </li>
        <li>
          Resolved an issue where opening the attachments from the new DM
          message screen would cause obvious component stretching.&nbsp;
        </li>
        <li>
          Fixed an issue where the app onboarding bar in text channels wasn’t
          aligned with chat input.&nbsp;
        </li>
        <li>
          Fixed an issue where message forwarding optional message input was
          improperly themed.
        </li>
        <li>
          Fixed a bug that caused the unread mentions indicator in the channel
          list to affect the background color of the elements behind it
          improperly.
        </li>
        <li>
          Fixed an iOS-specific bug that caused some threads to open the profile
          of the thread creator instead of the message author.
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Activities and Apps<br /></strong>Table of Contents: Activities
        and Apps
      </h2>
      <ul role="list">
        <li>
          Resolved an issue where Activities in certain servers could fail to
          render usernames properly in the Activity.&nbsp;
        </li>
        <li>
          Fixed an issue that could cause the Authorize screen for apps to
          prompt users to scroll to accept in a widget with no scrollbar.
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
          Fixed a bug that could cause the circular backgrounds on voice control
          buttons to no longer render.
        </li>
        <li>
          Resolved a bug on desktop that caused swapping between Push to Talk
          and Voice Activity to not always re-activate Voice Activity properly.
        </li>
        <li>
          Fixed an issue that caused the microphone to stop working on Android
          when sharing a different application.&nbsp;
        </li>
        <li>
          Resolved a bug that could cause the Activity-related buttons in the
          Call UX to be incorrect sizes and overlap.
        </li>
        <li>
          Fixed a bug that only existed in version 253 of the iOS app that
          caused attempting to screen share from your iOS device to fail. If
          you’re experiencing this issue, be sure to update to the latest
          version.
        </li>
        <li>
          Slightly tweaked the border radius of icons in the call status
          indicator on the bottom-left to be less rounded.&nbsp;
        </li>
        <li>
          Fixed an issue where the modal that asks “How’d the call go?” on
          mobile was no longer able to be interacted with.&nbsp;
        </li>
        <li>
          While using speaker mode on iOS during a call, the proximity sensor
          should no longer turn off the screen if something gets close to
          it.&nbsp;
        </li>
        <li>
          Fixed a bug that caused users to get stuck in a muted state if they
          deafened themselves while a “Push to Mute” key was held down.
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
          We fixed a short-lived issue where GIFs referenced by URL that didn’t
          explicitly end in “.gif” didn’t render properly in Discord. More like
          .whiffed.&nbsp;
        </li>
        <li>
          Fixed a bug where attempting to copy an image that’s embedded into
          chat would copy HTML instead of the image itself.
        </li>
        <li>
          Fixed an edge case where video content behind spoiler tags would not
          play properly if someone had the option to “Always Display Spoiler
          Content” enabled in User Settings.
        </li>
        <li>
          Fixed a bug where users could not use the space bar when forwarding
          from the media viewer.
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
          Fixed an issue for Voiceover users that prevented them from voting in
          a poll.
        </li>
        <li>
          Talkback users should now be able to properly accept our T&amp;C and
          Privacy Policy during registration.
        </li>
        <li>Improved call button labeling from the user profile.&nbsp;</li>
        <li>Fixed header labeling within the user profile.</li>
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
