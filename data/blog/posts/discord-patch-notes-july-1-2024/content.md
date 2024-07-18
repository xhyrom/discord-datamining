<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Welcome to Patch Notes! In this series, we comb through the newest changes in performance, reliability, responsiveness, usability, and general bug-squishing we’ve done to make Discord better.&nbsp;</p>
            <p>If you discover a bug of your own, check out our <a href="https://dis.gd/reddit-bug-megathread">Bimonthly Bug Megathread</a> on the community-ran r/DiscordApp subreddit. Tell us what’s been bothering you and our Engineering team will be more than happy to check it out.&nbsp;</p>
            <p>All fixes listed below have been committed and merged, but may still be rolling out to individual platforms at the time of this post.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Highlights<br></strong></h2>
            <ul role="list">
                <li>Discord now supports in-app playback of HEVC (H.265) video attachments uploaded from desktop and web platforms. HEVC is a compression standard that offers 25-50% better compression without quality loss vs. its predecessor, H.264.</li>
                <li>Have you ever had a video on mobile buffer (ugh!) and then not automatically resume playback once you downloaded enough of the video? Having to press play manually was like adding insult to injury. We’re sorry. We fixed that bug and videos should now automatically resume once buffering is complete.</li>
                <li>We’ve tweaked our approach to compression for image uploads on mobile platforms. We’ll spare you the exact details, but the result of that work is a roughly 14% reduction in the size of image uploads and a 9% improvement in upload latency.&nbsp;</li>
                <li>We’ve made a change to how we send passive updates to users in large servers. We now send only the deltas, rather than a full update. This reduced the gateway bandwidth usage by ~20%.</li>
                <li>We’ve implemented full Unicode support for attachment file names! Previously, we limited characters just due to interoperability reasons. We now preserve the original filenames of attachments, even when downloaded. Not only is this great for more effectively supporting many languages, but it also makes sure that clever emoji you have in the filename is retained properly.</li>
                <li>We’ve added some additional polish to client themes, implementing an extra hint of the primary color to previously un-themed portions of the app. The changes are subtle, but improve the look of the app overall when using a client theme.&nbsp;</li>
            </ul>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>General<br></strong></h2>
            <ul role="list">
                <li>Improved the way our rate-limiting service handles interrupted datastore connections, eliminating an entire second of added latency from affected API operations during a disruption.</li>
                <li>Clients' timers sometimes throttle, causing failed heartbeats and severed WebSocket connections. We implemented a mechanism that sends a preemptive heartbeat from the Gateway before potential timeouts. This prompts the client to respond, which reduces the Gateway bandwidth by approximately 3%.</li>
                <li>We’ve added usernameless/passwordless login support for all users. When logging into Discord, users should see an “or, sign in with passkey” option that allows for access to this new authentication method.</li>
                <li>We’ve added support for account linking with Roblox! Users should now be able to link their Roblox account to their Discord account from the Connections settings page.</li>
                <li>Resolved a bug that caused media preview messages to not properly untruncate on iOS.&nbsp;</li>
                <li>Fixed a bug that caused the UI widget on desktop for profiles to not close after opening server profile settings.</li>
                <li>Fixed a mobile issue that prevented a search result from being selected properly if the keyboard was being rendered when the tap occurred.&nbsp;</li>
                <li>Resolved a bug on web that caused large user profiles to displace the rest of the UI when opened.</li>
                <li>Resolved an issue that caused friend suggestion notifications to persist after the suggestion was dismissed.</li>
                <li>Resolved an issue that caused the profile effect modal to not respect maximum height limitations in the application.</li>
                <li>Editing a profile preview now properly shows the server “About Me” rather than the global “About Me”.</li>
                <li>Fixed an issue with the Server Invitation page that caused the accept button to not be accessible in landscape mode on mobile.</li>
                <li>Fixed a bug that caused certain action menu buttons to not properly perform the action that they were named, due to an off-by-one issue.</li>
                <li>Resolved an issue on mobile that caused sticker server filters in the expression picker to not load content when selected.</li>
                <li>Fixed a bug that caused avatar decorations to cut off in the you tab at the bottom of the mobile app.</li>
                <li>Resolved a bug that caused the search bar to be unlocalized on mobile.</li>
                <li>Resolved another issue where a button truncated “Skip” (instead of “Save” like last month) to “S…”. Someday we’ll learn that “S…” isn’t an intuitive button, we promise.&nbsp;</li>
                <li>Fixed an issue in server onboarding on desktop that prevented users from uploading an icon unless they assigned an emoji first.</li>
                <li>Fixed a bug that prevented users from unfavoriting emojis after favoriting a skin-tone variant.</li>
                <li>Resolved an issue that caused opening the mobile app in landscape mode to cause incorrectly sized UI components.</li>
                <li>Fixed a bug that caused a crash when using the “Prune Members” button in the members list on the desktop apps.</li>
                <li>Renaming forum channels now properly sanitizes input, correctly replacing whitespace with hyphens and similar naming limitations.</li>
                <li>Resolved an issue that caused users to be unable to remove Server Guide banners after they had been set in the onboarding settings.</li>
                <li>Avatars no longer overlap long usernames in particular portions of the soundboard settings.&nbsp;</li>
                <li>Creating a server through server template preview now properly closes the server settings.</li>
                <li>We’ve now added more customizability to data package requests on web. Users are now able to select which specific data they’d like to be in their data package requests.</li>
                <li>We recently deprecated our old Media Front Proxy and migrated to using GCP’s Global Application Load Balancers. The biggest benefit to users associated with this is better scalability/reliability of accessing media on Discord.&nbsp;</li>
                <li>Fixed a bug that caused the Nitro Gift modal to cover the share sheet.</li>
                <li>Fixed an issue on mobile that caused buttons to have the bottom of their text slightly cut off on Android. This was more prominent on larger OS-level font scales.</li>
                <li>Fixed a bug that caused the expression picker to sometimes not resize itself when toggling between portrait and landscape modes.&nbsp;</li>
                <li>Fixed an issue that caused the “Set Voice Activity” button in the call menu on mobile to have the wrong background color.</li>
                <li>Resolved an issue that caused client themes on mobile to have incorrectly colored themes after a user changed the theme on desktop.</li>
                <li>Fixed a bug that caused desktop notifications for events to lack the dismiss button if the event had a sufficiently long name.</li>
            </ul>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Chat<br></strong></h2>
            <ul role="list">
                <li>Resolved an issue that caused message timestamps shown on messages to not have proper padding on iOS.</li>
                <li>Fixed a bug that caused chat header badges, like @silent, to not properly render in the message.</li>
                <li>Corrected a spacing issue that caused the “Share Link” button to be partly in front of the “Invite More Friends” text in the DM list.</li>
                <li>On desktop, sending a long message no longer causes the Mod view profile to shrink.</li>
                <li>Resolved an iOS issue that caused spoiler tags to not function if the only text within the tag was emojis.&nbsp;</li>
                <li>Pinned messages that don’t include media or other content should now properly show up in the “Pins” tab of search in the mobile app.</li>
            </ul>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Activities and Apps<br></strong></h2>
            <ul role="list">
                <li>We’ve added a light mode theme to our developer portal. So, if you prefer to be less brooding while you’re developing or managing applications for Discord, we got you.</li>
                <li>Resolved an issue that caused Activities in Text to partially obscure the pop-up @ list when trying to mention users or roles.</li>
                <li>Fixed a couple of issues that would cause Spotify links to not properly render as embeds.</li>
                <li>Fixed an issue that caused application slash commands to not render properly in threads.</li>
                <li>In apps, context menu commands entered in messages that create a thread no longer causes the command to run in the parent channel.&nbsp;</li>
            </ul>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Audio/Video<br></strong></h2>
            <ul role="list">
                <li>Fixed a bug that caused users to be unable to transfer their voice calls to the PS5 app.</li>
                <li>Fixed an issue on Android causing other users to not render in the call UX until after users tapped within the call UX.</li>
                <li>The “who’s in the channel” UI for voice channels now properly respects server nicknames rather than always referencing global names.</li>
                <li>The “also share system audio” setting is now available in both window and screensharing modes. Previously, users could get stuck in a state where they wanted to share system audio while streaming a window and the option wasn’t available.</li>
                <li>Resolved an issue on iOS that caused connecting AirPods to automatically unmute the user in calls.</li>
            </ul>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Media<br></strong></h2>
            <ul role="list">
                <li>Fixed a bug on Android that caused spoiler-tagged images to only dim the image, not obfuscate it.</li>
                <li>Fixed an iOS image uploading issue that would cause images uploaded with no background to lose transparency.</li>
                <li>Fixed an issue that caused sending files via iOS’s share function to not properly attach files.</li>
                <li>Fixed a subtle animation issue that caused a jitter when expanding media in the media viewer.</li>
                <li>We’ve tuned the Android Exoplayer buffer settings to improve video startup time, responsiveness to buffering, and overall management of the player buffer. This has led to a 13.3% reduction in the average user startup time.</li>
                <li>We’ve enabled the Android Exoplayer decoder fallback setting, which allows media to play on devices without hardware decode acceleration. This increases the number of users who can play video attachments on Android.</li>
            </ul>
        </div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Accessibility<br></strong></h2>
            <ul role="list">
                <li>The invite link input field now has an accessible name.</li>
                <li>Users who utilize screen readers are now able to properly remove attachments using the “X” button.</li>
                <li>When using a screen reader, the “Create Your Server” text in the server creation flow is now properly marked up as a heading.</li>
                <li>Solved an issue for Voiceover users that prevented interacting with the “Share” and “Copy Link” buttons.</li>
                <li>Resolved a bug with Talkback that caused the focus order in the settings drawer to be backward, causing incorrect actions to occur.</li>
                <li>The view profile button for received friend requests is now descriptive, which should make them more accessible for users who use a screen reader.</li>
                <li>The role of the user’s name in the you tab on mobile is now announced for users that utilize screen readers.</li>
                <li>The “Selected” state is now properly announced by screen readers for the “Expire after” and “Max uses” options of server invites.&nbsp;</li>
                <li>Screen readers are now able to navigate to and interact with content in the “Recent” tab of the mobile app.</li>
            </ul>
            <figure style="max-width:1600px" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/653021edd85706dfb6ffeba8_TV2v_-uOGq_-9bLKTL6x2sar01-RmueVTdSDMoDffirOVPSmfDpE9ebtlky9V0Z8qgOHr3eBnhGKm_iojFbktORKndkTthHv5sVTpaksHlm-JWX5j6kAomU-ZaY7agmFfYHZddfUIHpuMNzJkUvKfmk.png" loading="lazy" alt=""></div>
            </figure>
            <p>All relative measurements cited were performed internally with our own instrumentation and tooling.</p>
            <p>…</p>
            <p>…</p>
            <p>… oh hey, you read everything! If you’re itching for the latest updates to Discord, you can find our previous Patch Notes articles <a href="https://discord.com/tags/patch-notes">here</a>, or check out our <a href="https://discord.com/tags/changelog">archive of past Changelogs</a> if you’re more into the fun stuff.</p>
        </div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>