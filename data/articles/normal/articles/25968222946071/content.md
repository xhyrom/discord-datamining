<div class="toc-box">
  <strong
    ><span class="wysiwyg-font-size-x-large">What this article covers:</span
    ><br
  /></strong>
  <ul>
    <li>
      <a href="#h_01J7M034G4F57TT88E7MHVTS47"
        >How to Verify that a Call is End-to-End Encrypted</a
      >
    </li>
    <li>
      <a href="#h_01J7M034G4RGNV5D9YRX2G30VM"
        >How to Verify Participants on a Call</a
      >
    </li>
    <li>
      <a href="#h_01J7M034G47PAKXTQQTJ9QDZ40">Persistent Verification Keys</a>
    </li>
    <li>
      <a href="#h_01J7M034G4ED1HCVY5NX29CJ58">Managing Verified Devices</a>
    </li>
    <li>
      <a href="#h_01J7M034G4ZJCDD1Y31ZXN24HB">Frequently Asked Questions</a>
    </li>
  </ul>
</div>
<p>
  End-to-end encryption for audio and video (E2EE A/V) on Discord makes your
  calls even more private and secure by default. This added layer of security
  for audio and video calls gives visual confirmation that no one else can
  listen in on your calls or watch your stream besides the intended
  participants/viewers.
</p>
<div class="mega-box">
  <strong>Note:</strong> All audio and video conversations in direct messages
  (DMs), group messages (GDMs), voice channels, and Go Live streams on Discord
  will require end-to-end encryption starting on March 1st, 2026. You must
  ensure that your Discord app is on the latest version to support the
  end-to-end encryption requirement.
</div>
<p>
  Below explains how to verify that a call is end-to-end encrypted and how to
  confirm that the people who you are on a call with are verified too.
</p>
<div class="tip-box">
  <strong
    >Note: Desktop and mobile calls between users with updated clients are
    end-to-end encrypted without any user action.</strong
  >
  The features described in this article do not “turn on” end-to-end encryption.
  We developed these features to show our work and help you confirm that our
  end-to-end encryption is functioning as intended.
</div>
<h1 id="h_01J7M034G4F57TT88E7MHVTS47">
  How to Verify That a Call is End-to-End Encrypted
</h1>
<p>
  You can verify that your voice call on Discord is end-to-end encrypted by
  checking the <strong>Voice/Video Details</strong> of the call.
</p>
<p>
  On the desktop app, open the <strong>Voice/Video Details</strong> in the
  bottom left corner of the app to see a new <strong>Privacy</strong> tab, as
  well as a <strong>green lock icon</strong> stating that your call is
  <strong>End-to-end encrypted</strong>. 
</p>
<p>
  On the mobile app, you can find that <strong>green lock icon</strong> while in
  a voice call by pressing on the voice channel name in the top left corner of
  the focused voice call view.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/26336152838167"
    width="279"
    height="300"
  />
</p>
<p>
  The <strong>Privacy</strong> tab contains the
  <strong>Voice Privacy Code</strong> for the call. Privacy codes can be
  compared with other voice call participants to confirm that everyone in the
  call sees the same code. Comparing codes should occur out-of-band, for example
  on a different communication platform.
</p>
<div class="tip-box">
  <strong>Note: </strong>Privacy codes are long so we split them up into groups
  of five digits to make them easier to read.
</div>
<p>
  Privacy codes update when participants join or leave calls, so these codes
  must be compared at the same time with all current call participants in order
  to verify that the call is end-to-end encrypted.
</p>
<p>
  Each Go Live stream associated with a call also has a
  <strong>Stream Privacy Code </strong>that can be accessed via the context menu
  for the stream, which you can find by right-clicking directly on the Go Live
  stream and selecting it from the dropdown menu.
</p>
<p>
  By verifying the privacy code for the voice call or for any Go Live stream in
  the call, you can confirm that all participants have the same encrypted view
  of the call and that no unexpected participants have joined the call.
</p>
<h1 id="h_01J7M034G4RGNV5D9YRX2G30VM">How to Verify Participants on a Call</h1>
<p>
  Whether you’re on a call with your best friend, or a group of people in a
  voice channel on your favorite server, you can choose to verify the identity
  of the people you’re on a call with for an additional layer of privacy
  assurance. 
</p>
<p>1. Navigate to “View Verification Code”. </p>
<ol>
  <li>
    On Desktop, right click on the user in the voice call members list or right
    click on their tile in the call view and select
    <strong>View Verification Code</strong> from the dropdown menu.
  </li>
  <li>
    On Mobile, open the user's profile either from the call member list or by
    long pressing on their call tile and then select
    <strong>View Verification Code</strong>.
  </li>
</ol>
<p>
  2. You will then see a series of numbers that should match for both you and
  the person you’re on a call with. 
</p>
<div class="tip-box">
  <strong>Note: </strong>When you show the
  <strong>Verification Code</strong> for another participant, you may see a
  warning if you have previously verified that participant and the code has
  changed.
</div>
<p>
  3. Compare the codes out-of-band (via a different communication platform) with
  the person you’re speaking with.
</p>
<p>
  4. If the codes are a match, then you can select
  <strong>Mark as Verified</strong> to confirm that you have successfully
  verified who you are chatting with. 
</p>
<p>
  Once you’ve verified each person in the call, a small icon will appear next to
  their name in the call to confirm this action is complete. 
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/26336147078423"
    width="305"
    height="356"
  />
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/26336147080471"
    width="624"
    height="256"
  />
</p>
<p>
  These codes are device-specific and change every time you join a new call with
  that person by default. With each new call, you will have to repeat the
  verification process. 
</p>
<p>
  You can opt-in to persistent verification keys to make the verification others
  perform of your given device permanent. More information on how to do this in
  the next section.
</p>
<div class="tip-box">
  <strong>Note: </strong>Verification Codes are long so we split them up into
  groups of five digits to make them easier to read.
</div>
<h1 id="h_01J7M034G47PAKXTQQTJ9QDZ40">Persistent Verification Keys</h1>
<p>
  To avoid repetitive verification each time you are on a call with the same
  person, you can enable persistent verification keys. If you have this setting
  enabled, people you’re speaking with will be able to remember your device and
  mark it as verified. 
</p>
<p>To enable persistent verification keys: </p>
<p>
  1. Navigate to <strong>User Settings, </strong>then select
  <strong>Privacy &amp; Safety</strong>. 
</p>
<p>
  2. Select the <strong>Encryption </strong>tab, and toggle the
  <strong>Enable persistent verification codes</strong>
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/26336152844055"
    width="624"
    height="113"
  />
</p>
<p>Considerations for setup: </p>
<ul>
  <li>
    For you to save a persistent verification key for the person you’re speaking
    with, they’ll need to have the
    <strong>Enable persistent verification codes</strong> setting enabled as
    well.
  </li>
  <li>
    Persistent verification keys are tied to your device, not your user account.
    This means that if both you and a friend enable this setting, you’ll remain
    verified to each other every time you join a voice call from those devices.
  </li>
  <li>
    If you log out and back in again on your device, you will lose access to any
    previously used persistent verification key on that device and others who
    previously persistently verified your device will see that you are
    unverified. If you want to use persistent verification keys, you will need
    to enable the <strong>Enable persistent verification codes</strong> setting
    again.
  </li>
</ul>
<p>Someone you previously persistently verified may appear unverified when:</p>
<ul>
  <li>
    They’re using a different device than the one you persistently verified
  </li>
  <li>They had to log in again on the device you persistently verified</li>
  <li>
    Their persistent verification key was removed from local device storage
  </li>
  <li>They are being impersonated by someone else</li>
</ul>
<h1 id="h_01J7M034G4ED1HCVY5NX29CJ58">Managing Verified Devices</h1>
<p>
  If you have verified other users with persistent verification codes enabled,
  you can manage these verified devices in your <strong>User Settings</strong>.
</p>
<p>
  1. Navigate to <strong>User Settings, </strong>then select
  <strong>Privacy &amp; Safety</strong>. 
</p>
<p>
  2. Select the <strong>Encryption </strong>tab where you’ll see
  <strong>Verified Devices</strong>.
</p>
<p class="wysiwyg-indent4">
  a. On Desktop, select the <strong>Encryption</strong> tab.
</p>
<p class="wysiwyg-indent4">
  b. On Mobile, select<strong> End-to-end Encryption</strong> under the
  <strong>Privacy &amp; Safety</strong> tab.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/26336152847383"
    width="521"
    height="466"
  />
</p>
<p>
  Each user, along with their verified device(s), will be displayed. You can
  choose to remove the verification for a specific device, identified by the
  time it was verified, or remove all verifications for a specific user.
</p>
<h1 id="h_01J7M034G4ZJCDD1Y31ZXN24HB">Frequently Asked Questions</h1>
<p><strong>Q: How do I know if my call is end-to-end encrypted?</strong></p>
<p>
  A: You can verify that your call is end-to-end encrypted by checking for the
  green <strong>End-to-end encrypted lock icon</strong> in the
  <strong>Voice/Video Details</strong> on the desktop app or by pressing on the
  voice channel name details in the top left corner of the focused call view on
  mobile.
</p>
<p>
  <strong>Q: When will E2EE A/V roll out to Discord web and consoles?</strong>
</p>
<p>A: Web and consoles will get E2EE A/V support in the second half of 2025.</p>
<p>
  <strong
    >Q: Why is my call not end-to-end encrypted when I’m on an updated Discord
    app?</strong
  >
</p>
<p>
  A: Your call may not be end-to-end encrypted because you may be on a call with
  someone who is not on an updated Discord app. On March 1st 2026, all DMs,
  GDMs, voice channels, and Go Live streams will require updated clients that
  support end-to-end encryption.
</p>
<p><strong>Q: Can I opt out of E2EE A/V?</strong></p>
<p>
  A: E2EE A/V is enabled by default and cannot be turned off. E2EE A/V currently
  won’t apply to calls where an unsupported client (i.e., web and consoles) is
  being used by at least one user. Unsupported clients will no longer be able to
  connect to calls from March 1, 2026. Stage channels also will not be
  end-to-end encrypted.
</p>
<p>
  <strong
    >Q: Will the preview of my Go Live stream now be private for users not yet
    in the call?</strong
  >
</p>
<p>
  A: Stream previews – when you are able to see a snippet of an ongoing Go Live
  stream - are NOT end-to-end encrypted. This means that users not in a call
  with an ongoing stream may be able to see a preview of the stream. You can<a
    href="https://support.discord.com/hc/en-us/articles/360040816151-Go-Live-and-Screen-Share"
    target="_blank"
    rel="noopener noreferrer"
  >
    disable stream previews</a
  >
  forever, or on a per-stream basis.
</p>
<p>
  <strong
    >Q: Can I verify the end-to-end encryption status in Go Live
    streams?</strong
  >
</p>
<p>
  A: Yes, each Go Live stream has a <strong>Stream Privacy Code</strong> that
  can be accessed via the context menu for the stream. You can compare this code
  out of band with other participants to verify that the stream is end-to-end
  encrypted.
</p>
<p>
  <strong
    >Q: What happens if I change my device/log into my Discord account on a new
    device?</strong
  >
</p>
<p>
  <strong>A: </strong>If you change your device and have persistent verification
  codes enabled, you will need to go through the
  <a href="#h_01J7M034G47PAKXTQQTJ9QDZ40">verification process</a> again as
  verification is tied to the specific device. Persistent verification keys must
  be re-enabled on a new device.
</p>
