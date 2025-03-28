<p>
  Having trouble with Discord? Here's a comprehensive guide to common audio and
  video error codes and how to resolve them.
</p>
<div class="book-box">
  To learn more about troubleshooting audio and video issues on Discord, make
  sure to check out our
  <a
    href="https://support.discord.com/hc/en-us/articles/360045138471"
    target="_blank"
    rel="noopener noreferrer"
    ><strong>Discord Voice and Video Troubleshooting Guide</strong></a
  >! 
</div>
<p>
  <span class="wysiwyg-font-size-x-large"
    ><strong>What this article covers:</strong></span
  >
</p>
<ul>
  <li><a href="#h_01JQCD37F2HQ44VKDR7M8PNHJH">Streaming Issues</a></li>
  <li><a href="#h_01JQCD37F24FA7EM4JAY523R71">Audio Issues</a></li>
  <li><a href="#h_01JQCD37F2M9Q5FXPCH8PMV9P7">Debug Logs</a></li>
  <li>
    <a href="#h_01JQCD37F373HCGZXRZ0P0WWY3">Quick Reference Error Table</a>
  </li>
  <li><a href="#h_01JQCD37F3JSWDX213VSR7W4VB">Still Need Support?</a></li>
</ul>
<h1 id="h_01JQCD37F2HQ44VKDR7M8PNHJH"><strong>Streaming Issues</strong></h1>
<h2 id="h_01JQCD37F28BJQTC37M7FWCQA3">
  <strong>Sound Sharing Issues (1001)</strong>
</h2>
<p>
  If your stream has no sound, this is likely because Discord couldn't capture
  audio from your application.
</p>
<p>To fix this, try:</p>
<ul>
  <li>
    Allow Discord's <strong>soundshare</strong> permission when prompted - this
    is essential for capturing audio from your application during streaming.
    <ul>
      <li>
        When you start a stream, Discord will display a system-level permission
        request that needs to be approved to enable sound sharing functionality.
        Select “<strong>Grant Access</strong>”
      </li>
      <li>
        Without this permission, your stream will continue but viewers won't be
        able to hear any audio from your streaming application
      </li>
    </ul>
  </li>
</ul>
<h2 id="h_01JQCD37F205C5BZET4KP4PP0T">
  <strong>Noise Canceller Error (1002)</strong>
</h2>
<p>
  If Discord encounters an internal error with its background noise canceller:
</p>
<ul>
  <li>
    Leave the voice channel or call and then rejoin to reset the connection
  </li>
  <li>
    If the issue persists, try completely restarting Discord
    <ul>
      <li>
        <strong>Note</strong>: This means fully closing the application (not
        just minimizing it) and relaunching it!
      </li>
    </ul>
  </li>
</ul>
<h2 id="h_01JQCD37F2Y80YWEQQVFJCEBZD">
  <strong>Audio Input Rate Mismatch (1003)</strong>
</h2>
<p>
  This error occurs when Discord detects a significant difference in microphone
  input rate, often resulting in distorted audio (like "robot voice" or slow
  speech).
</p>
<p>To resolve this issue, try:</p>
<ul>
  <li>
    Using separate devices for audio input and output (e.g., USB microphone +
    separate headphones)
  </li>
  <li>Switching to a different microphone if available</li>
  <li>Changing your audio output device</li>
  <li>Leaving and rejoining the voice channel</li>
</ul>
<div class="tip-box">
  This issue is most common with combined input/output devices like gaming
  headsets. Using separate devices for input and output typically resolves the
  problem.
</div>
<h2 id="h_01JQCD37F2J7F265ZMA37FAP7D">
  <strong>Stream Start Failure (2001)</strong>
</h2>
<p>If your stream fails to start, try:</p>
<ul>
  <li>
    Restarting the stream by clicking the "<strong>Go Live</strong>" button
    again.
  </li>
  <li>
    If the issue persists, try closing and reopening Discord before making
    another attempt to start your stream
  </li>
</ul>
<h2 id="h_01JQCD37F2GCHDF0P40J2CVZ3R">
  <strong>Stream Quality Issues (2002-2007)</strong>
</h2>
<p>You might encounter these errors if you're experiencing:</p>
<ul>
  <li>Low frame rates while viewing or streaming</li>
  <li>High packet loss while viewing or streaming</li>
  <li>Poor network quality while streaming</li>
</ul>
<p>Common solutions for viewing/streaming issues include:</p>
<ul>
  <li>Checking your network connection quality and speed</li>
  <li>Reducing stream resolution or frame rate settings</li>
  <li>
    Ensuring your hardware specifications (CPU, GPU, and RAM) meet the
    recommended requirements for your chosen stream quality settings and making
    adjustments accordingly
  </li>
</ul>
<h2 id="h_01JQCD37F2GQJ69WGMZ1P7YHW8">
  <strong>Video Decoder/Encoder Errors (2008-2009)</strong>
</h2>
<p>
  These errors typically occur when Discord encounters internal issues
  processing video streams.
</p>
<p>To resolve these issues:</p>
<ul>
  <li>
    Enable <strong>hardware acceleration</strong> in Discord's Video settings
  </li>
  <li>
    Make sure your graphics drivers are up to date by visiting your graphics
    card manufacturer's website and downloading the latest stable driver version
    for your specific graphics card model
  </li>
  <li>
    If issues persist, try restarting Discord completely
    <ul>
      <li>
        <strong>Note</strong>: This means fully closing the application (not
        just minimizing it) and relaunching it!
      </li>
    </ul>
  </li>
</ul>
<h2 id="h_01JQCD37F27P3KFH4ZH42CJ65W">
  <strong>Stream at Maximum Viewers (2010)</strong>
</h2>
<p>
  This error occurs when you try to join a stream that has already reached its
  maximum viewer capacity.
</p>
<p>When you encounter this error:</p>
<ul>
  <li>
    You'll need to wait until other viewers leave the stream before you can join
  </li>
  <li>Try joining again later when the viewer count has decreased</li>
</ul>
<h2 id="h_01JQCD37F2MWYDQVDSEZXM0MMF">
  <strong>Camera Frame Rate Issues (2011)</strong>
</h2>
<p>If you're experiencing low frame rates with your camera video:</p>
<ul>
  <li>
    Enable <strong>hardware acceleration</strong> in Discord's Video settings
  </li>
  <li>
    Check if your device meets the hardware requirements for video streaming
  </li>
</ul>
<p>This issue commonly occurs when:</p>
<ul>
  <li>
    Your device's hardware is struggling to process the video feed at the
    current settings
  </li>
  <li>Hardware acceleration is disabled in Discord's settings</li>
</ul>
<h1 id="h_01JQCD37F24FA7EM4JAY523R71"><strong>Audio Issues</strong></h1>
<h2 id="h_01JQCD37F21MP7SMR3KWHXY16F">
  <strong>No Audio Input Devices (3001)</strong>
</h2>
<p>If Discord can't detect your microphone, ensure that:</p>
<ul>
  <li>
    You have a microphone physically connected to your device, either through
    USB, audio jack, or wireless connection.
  </li>
  <li>
    Make sure the microphone is securely plugged in and recognized by your
    operating system
  </li>
</ul>
<p>Try the following steps for a <strong>Mic Test</strong> as well:</p>
<ul>
  <li>Head to the Voice &amp; Video tab (in your User Settings)</li>
  <li>
    Use the Mic Test feature to test your microphone by pressing the “Let’s
    Check” button
  </li>
  <li>
    Listen to the playback of your voice to see if Discord is detecting your
    microphone
  </li>
</ul>
<h2 id="h_01JQCD37F2V8QN86M99QSF9RGN">
  <strong>Silent Audio Input (3002)</strong>
</h2>
<p>If your microphone is connected but not picking up sound, try:</p>
<ul>
  <li>
    Checking your operating system's input volume settings in your system sound
    preferences or control panel to ensure the microphone input level is
    properly adjusted and not set too low
  </li>
  <li>
    Verifying your microphone or headset isn't muted by checking both the
    physical mute switch on your device and the software mute settings in your
    operating system's audio controls
  </li>
  <li>
    Use the <strong>Mic Test</strong> feature (in the Voice &amp; Video tab of
    your User Settings) to test your microphone by pressing the “Let’s Check”
    button and listen to the playback of your voice to see if Discord is
    detecting your microphone
  </li>
</ul>
<h2 id="h_01JQCD37F2Z7NEEBTYYKDBQEZS">
  <strong>Screen Share OS Not Supported (3003)</strong>
</h2>
<p>
  This error occurs when you attempt to use screen sharing on an unsupported
  Android version.
</p>
<p>If you encounter this error:</p>
<ul>
  <li>
    You'll need to upgrade your Android device to version 12 or later to use
    screen sharing functionality
  </li>
  <li>
    This error is specific to Android devices - other platforms are not affected
  </li>
</ul>
<div class="book-box">
  To learn more about Discord’s OS/system requirements, visit this Help Center
  article for more information.
</div>
<h1 id="h_01JQCD37F2M9Q5FXPCH8PMV9P7"><strong>Debug Logs</strong></h1>
<h2 id="h_01JQCD37F2F2TN2JJRARCC7RFS">
  <strong>Debug Log Upload Failure (4001)</strong>
</h2>
<p>If you're unable to upload debug logs, try:</p>
<ul>
  <li>
    Checking your network connection to ensure you have a stable internet
    connection with sufficient bandwidth
  </li>
  <li>Attempting the upload again after waiting a few moments</li>
</ul>
<h1 id="h_01JQCD37F373HCGZXRZ0P0WWY3">
  <strong>Quick Reference Error Table</strong>
</h1>
<p>Use this table to quickly identify and resolve common Discord errors:</p>
<div>
  <table style="width: 121.857%">
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <tbody>
      <tr>
        <th style="width: 3.28253%; text-align: center">
          <strong>Error Code</strong>
        </th>
        <th style="width: 13.3094%; text-align: center">
          <strong>What's Happening?</strong>
        </th>
        <th style="width: 21.1331%; text-align: center">
          <strong>How to Fix It</strong>
        </th>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">1001</td>
        <td style="width: 13.3094%; text-align: left">
          No sound in your stream
        </td>
        <td style="width: 21.1331%; text-align: left">
          Click "Allow" when Discord asks for sound sharing permission
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">1002</td>
        <td style="width: 13.3094%; text-align: left">Noise canceller error</td>
        <td style="width: 21.1331%; text-align: left">
          Leave the call/voice channel and rejoin
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">1003</td>
        <td style="width: 13.3094%; text-align: left">
          Audio input rate mismatch ("robot voice")
        </td>
        <td style="width: 21.1331%; text-align: left">
          Try switching to separate audio input/output devices
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2001</td>
        <td style="width: 13.3094%; text-align: left">Stream won't start</td>
        <td style="width: 21.1331%; text-align: left">
          Try starting your stream again
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2002</td>
        <td style="width: 13.3094%; text-align: left">
          Low frame rate while watching
        </td>
        <td style="width: 21.1331%; text-align: left">
          Check connection and enable hardware acceleration
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2003</td>
        <td style="width: 13.3094%; text-align: left">
          Packet loss while watching
        </td>
        <td style="width: 21.1331%; text-align: left">
          Check your network connection or try a different network
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2004</td>
        <td style="width: 13.3094%; text-align: left">
          Packet loss while streaming
        </td>
        <td style="width: 21.1331%; text-align: left">
          Lower your stream quality or check your network connection
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2005</td>
        <td style="width: 13.3094%; text-align: left">
          Low frame rate while streaming
        </td>
        <td style="width: 21.1331%; text-align: left">
          Reduce stream quality or check if your device meets requirements
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2006</td>
        <td style="width: 13.3094%; text-align: left">
          Poor streaming connection
        </td>
        <td style="width: 21.1331%; text-align: left">
          Test your internet speed and ensure stable connection
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2007</td>
        <td style="width: 13.3094%; text-align: left">
          Stream is reconnecting
        </td>
        <td style="width: 21.1331%; text-align: left">
          Check your network connection
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2008</td>
        <td style="width: 13.3094%; text-align: left">Video decoder error</td>
        <td style="width: 21.1331%; text-align: left">
          Try turning hardware acceleration on in video settings
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2009</td>
        <td style="width: 13.3094%; text-align: left">Video encoder error</td>
        <td style="width: 21.1331%; text-align: left">
          Try turning hardware acceleration on in video settings
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2010</td>
        <td style="width: 13.3094%; text-align: left">
          Stream is at maximum viewers
        </td>
        <td style="width: 21.1331%; text-align: left">
          Wait for viewers to leave before joining
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">2011</td>
        <td style="width: 13.3094%; text-align: left">Low camera frame rate</td>
        <td style="width: 21.1331%; text-align: left">
          Enable hardware acceleration in video settings
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">3001</td>
        <td style="width: 13.3094%; text-align: left">
          No microphone detected
        </td>
        <td style="width: 21.1331%; text-align: left">
          Connect a microphone to your device
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">3002</td>
        <td style="width: 13.3094%; text-align: left">
          Microphone not picking up sound
        </td>
        <td style="width: 21.1331%; text-align: left">
          Check volume settings and physical mute switches
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">3003</td>
        <td style="width: 13.3094%; text-align: left">
          Screen sharing not supported
        </td>
        <td style="width: 21.1331%; text-align: left">
          Upgrade to Android 12 or later (Android only)
        </td>
      </tr>
      <tr>
        <td style="width: 3.28253%; text-align: left">4001</td>
        <td style="width: 13.3094%; text-align: left">
          Can't upload debug logs
        </td>
        <td style="width: 21.1331%; text-align: left">
          Check your connection and try uploading again
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="tip-box">
  Most streaming issues (2001-2006) can be resolved by checking your network
  connection or lowering your stream quality settings.
</div>
<h1 id="h_01JQCD37F3JSWDX213VSR7W4VB"><strong>Still Need Support?</strong></h1>
<p>
  If you continue experiencing issues after trying these solutions, contact
  Discord Support for additional assistance with all the following information:
</p>
<ol>
  <li>A clear description of your issue and the error code you see</li>
  <li>
    The device and OS version you’re using? (ex. ipadOS 13, iOS 13, iOS 16)
  </li>
  <li>The Discord app version you’re using (ex: Version 26.1)</li>
  <li>
    Which clients is this issue occurring on (ex: browser, mobile and/or
    desktop)?
  </li>
  <li>Screenshots of all your Voice &amp; Video settings</li>
  <li>(If applicable) A list of input and output devices you’re using</li>
</ol>
<div class="form-box">
  To contact the Discord support team, send a request through:
  <strong
    ><a href="http://dis.gd/contact" target="_blank" rel="noopener noreferrer"
      >http://dis.gd/contact</a
    ></strong
  >
</div>
