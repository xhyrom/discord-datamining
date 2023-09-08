<h3 id="h_01H9TTWYH7D56CWTNAS0ZECK3H">
    <strong>Note: <br></strong>- Make sure to fully restart your desktop client if you don't see the update yet! <br>- Currently, we only support sharing audio when streaming an application - and all audio from the application will be shared. <span id="docs-internal-guid-eb4fb32e-7fff-c238-c9e8-d61bfeca23c7">If you choose to stream a window on MacOS, audio will not be shared.</span>
</h3>
<p><span class="wysiwyg-font-size-large"><strong>What this article covers: <br></strong></span></p>
<ul>
    <li>
        <a href="#h_01F3R3YB9N8TPS3JRBAMQ63076" target="_self">How to Enable Screen Share with Audio on Mac</a>
        <ul>
            <li><a href="#h_01F33Q2B41D4196E5CRZKH8WFR" target="_self">macOS 10.15</a></li>
            <li><a href="#h_01F33Q2G00YAHM5TZJ5XH6NKTT" target="_self">macOS 11</a></li>
            <li><a href="https://support.discord.com/hc/en-us/articles/1500006741102#h_01F33Q2M9381YXGAD2YBVF43NG">Apple Silicon/M-Series</a></li>
        </ul>
    </li>
    <li><a href="#h_01F3R3YG2GSDBRFQA6BVM4K87X" target="_self">What is Rogue Amoeba?</a></li>
    <li>
        <a href="#h_01F546P8978P3H5KMA7YJ4W44D" target="_self">Troubleshooting FAQ</a>
        <ul>
            <li><a href="#h_01F5479KGPTDYZVYBCJKBSWV0N" target="_self">Q: Why does Discord think I already installed the Audio Capture Engine (ACE) when I never enabled it?</a></li>
            <li><a href="#h_01F5479WHGCXC528NWC4VEP509" target="_self">Q: I don't see a prompt in my Security &amp; Privacy preferences for authorizing ACE, what should I do?</a></li>
        </ul>
    </li>
</ul>
<h3 id="docs-internal-guid-2f83c24b-7fff-b6b9-5a4e-cf0d574f37f5"><span style="color: #434343;" data-darkreader-inline-color="">Note: The information within this article is subject to change. Not all eligible systems may be immediately listed at this time. </span></h3>
<h1 id="h_01F3R3YB9N8TPS3JRBAMQ63076">How to Enable Screen Share with Audio on Mac</h1>
<p>Sharing a screen on macOS 10.15+ now includes audio! </p>
<p>To get started, head over to your <strong>Voice &amp; Video</strong> settings (within the <strong>User Settings</strong>) and find the <strong>Screen Share</strong> section.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/16546513061399" alt="Screen Shot 2023-08-04 at 11.52.12 AM.png"></p>
<p>After pressing <strong>Install</strong>, you'll need to authorize ACE - the software written by Rogue Amoeba we use for capturing audio. This bit will look a little different depending on your macOS version:</p>
<ul>
    <li><a href="#h_01F33Q2B41D4196E5CRZKH8WFR" target="_self">macOS 10.15</a></li>
    <li><a href="#h_01F33Q2G00YAHM5TZJ5XH6NKTT" target="_self">macOS 11</a></li>
    <li><a href="https://support.discord.com/hc/en-us/articles/1500006741102#h_01F33Q2M9381YXGAD2YBVF43NG">Apple Silicon/M-Series</a></li>
</ul>
<h1 id="h_01F3R3YG2GSDBRFQA6BVM4K87X"><strong>What is Rogue Amoeba? </strong></h1>
<p>Rogue Amoeba's “Audio Capture Engine” (abbreviated as ACE) is a MacOS-based technology which makes it possible to capture audio from one or more individual applications, as well as all audio from the entire system at once. </p>
<p>You can learn more about the company and software specifically on their website <a href="https://rogueamoeba.com/licensing/ace/" target="_blank" rel="noopener noreferrer">here</a>.</p>
<h3 id="h_01H9TTWYH7Y0VYARVWYGXTYAH6">Note: We do not pass any information or data to Rogue Amoeba when you enable the tech on Discord. This means that no audio data is ever sent or shared outside of Discord.</h3>
<h2 id="h_01F33Q2B41D4196E5CRZKH8WFR"><strong>macOS 10.15</strong></h2>
<p>When you press the <strong>Install</strong> button in the Screen Share setting section, you should see a dialog like the one shown below. Once you see that dialog, enter your password and select <strong>Ok</strong> to install the extension.</p>
<p>After a few seconds, the installation should complete and you'll be ready to start sharing audio with your streams!</p>
<h2 id="h_01F33Q2G00YAHM5TZJ5XH6NKTT"><strong>macOS 11</strong></h2>
<p>Similar to macOS 10.15, you should see a dialog asking for your permission! At this step, enter your password and select <strong>Ok</strong> to install the extension.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500010287902" alt="image9.png" width="612" height="288"></p>
<p><span class="wysiwyg-color-orange110 wysiwyg-font-size-large"><strong>Next Steps for macOS11:</strong></span></p>
<p>1. You'll then get another dialog mentioning a System Extension being blocked—<em>don't fret, that's us! Apple tightened security on Big Sur so that some system extensions require explicit approval to run. </em></p>
<p>2. When you see this dialog, click <strong>Open Security Preferences</strong> and then <strong>Allow</strong> in the next window.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500010342722" alt="rogueamoeba_system_extension_permissions.png"></p>
<p>3. You'll then need to restart your machine in order for the installation to complete and for screen share with audio to work.</p>
<h2 id="h_01F33Q2M9381YXGAD2YBVF43NG"><strong>Apple Silicon/M-Series<br></strong></h2>
<p>If you have an Apple Silicon/M-Series chipped Mac, there's an additional step for you to do, involving rebooting into the machine's Recovery environment.</p>
<p>To start, you will need to grant the initial permissions <a href="#h_01F3R3YB9N8TPS3JRBAMQ63076" target="_self">mentioned above</a> - so make sure to enter your password and select <strong>Ok</strong> to install the extension! </p>
<p><span class="wysiwyg-color-orange110 wysiwyg-font-size-large"><strong>Next Steps for Apple Silicon/M-Series Chipped Machines:<br></strong></span></p>
<p><span style="font-weight: 400;">Now, we’ll need to enable system extensions for Apple-trusted developers.</span></p>
<p><span style="font-weight: 400;">1. Apple now requires explicit user approval to install system extensions - <br></span></p>
<p id="docs-internal-guid-9fca2128-7fff-be05-d85d-d4fc97d68e4e">so you'll need to head into your Mac<strong> System Preferences </strong>and select <strong>Security &amp; Privacy</strong>.</p>
<p class="wysiwyg-text-align-center"><span style="font-weight: 400;"><img src="https://support.discord.com/hc/article_attachments/1500010639261" alt="system_extension_blocked_warning_open_.png"><br></span></p>
<p id="docs-internal-guid-c4c427f6-7fff-2bab-2c52-65d32fc49b58">2. Then, press <strong>Enable system extensions </strong>and select <strong>Shutdown</strong>. </p>
<p class="wysiwyg-text-align-left">3. Once your device has shutdown, long-press and hold the Touch ID or power button for at least 10 seconds. This will allow you to <a href="https://support.apple.com/guide/mac-help/macos-recovery-a-mac-apple-silicon-mchl82829c17/mac" target="_blank" rel="noopener noreferrer">reboot into Recovery</a> and redirect you to the screen where you can view the startup options, <strong>Macintosh HD</strong> or <strong>Options</strong>.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500009757941" alt="image7.png" width="664" height="596"></p>
<p id="docs-internal-guid-309c149f-7fff-a3d0-bbf8-5609a9ea9fbb">4. While there, select <strong>Options</strong>. </p>
<p>5. Then, choose your user account and the hard drive on which macOS is installed and press <strong>Next</strong>. This will prompt you to enter your password. </p>
<p>6. Once you have completed those steps, it will initiate <strong>Recovery mode</strong>.</p>
<p>7. In Recovery mode, head to <strong>Utilities</strong> in the upper toolbar and select <strong>Startup Security Utility. </strong></p>
<p>8. In the Startup Security Utility window, press <strong>Security Policy </strong>to view the security features. </p>
<p>9. Then, select <strong>Reduced Security. </strong>Make sure you select the checkboxes as seen in the screenshot below!</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500008847162" alt="reduced-security.png"></p>
<p id="docs-internal-guid-f9a79fad-7fff-6db6-23b1-9db27a976a3a">10. Once confirmed, you will be prompted to enter your password to apply the security policy to your system. </p>
<p>11. Then, navigate to the Apple logo in the upper-left toolbar and select <strong>Restart</strong>. </p>
<p>12. After your system has restarted, you'll be prompted to allow the extension to run. Select <strong>Open Security Preferences</strong> and then <strong>Allow.</strong></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500010342722" alt="rogueamoeba_system_extension_permissions.png"></p>
<p id="docs-internal-guid-0bcd263b-7fff-35a7-738c-42f2dee98e83">13. You'll then be required to restart one more time in order for the update to be applied.</p>
<h1 id="h_01F546P8978P3H5KMA7YJ4W44D"><span style="font-weight: 400;">Troubleshooting FAQ</span></h1>
<h2 id="h_01F5479KGPTDYZVYBCJKBSWV0N"><span class="wysiwyg-font-size-large wysiwyg-color-blue80"><strong>Q: Why does Discord think I already installed the Audio Capture Engine (ACE) when I never enabled it?</strong></span></h2>
<p><span style="font-weight: 400;">ACE is also used by other apps, like Twitch Studio (you can check out </span><a href="https://rogueamoeba.com/licensing/ace/" target="_blank" rel="noopener noreferrer">Rogue Amoeba's website</a><span style="font-weight: 400;"> for a list of more apps). </span></p>
<p><span style="font-weight: 400;">Discord can use an existing installation if one is detected, meaning you don't have to go through set up twice!</span></p>
<h2 id="h_01F5479WHGCXC528NWC4VEP509"><span class="wysiwyg-font-size-large wysiwyg-color-blue80"><strong>Q: I don't see a prompt in my Security &amp; Privacy preferences for authorizing ACE, what should I do?</strong></span></h2>
<p><span style="font-weight: 400;">Sadly, there is currently a bug in macOS that can cause the prompt to fail to appear. </span><span style="font-weight: 400;">If this happens to you, here are some steps you can try to force the prompt to appear:</span></p>
<p><span class="wysiwyg-font-size-large wysiwyg-color-orange110"><strong>Manually delete the ACE component files</strong></span></p>
<p>If you’re unable to proceed with installing or authorizing ACE, start by manually deleting any copy of our component on your Mac. In most cases, this will allow MacOS to present the necessary authorization prompt again. Follow these steps:</p>
<p>1. Quit System Preferences and Discord</p>
<p>2. In the Finder, select the <span class="uielement">Go to Folder…</span> command from the <span class="uielement">Go</span> menu.</p>
<p>3. In the folder field, enter the following location:<br><code>/Library/Audio/Plug-Ins/HAL/</code></p>
<p>4. Press the <span class="uielement">Go</span> button. In the window which appears, you'll see a <code>ACE.driver</code> folder.</p>
<p>5. Select that folder, and move it to the Trash.</p>
<p>6. Confirm this action in the Finder when prompted.</p>
<p>7. Restart your Mac.</p>
<p>8. Run Discord and visit your Voice &amp; Video settings to install the sound capture extension.</p>
<p>If the above steps do not cause the authorization prompt to appear properly, you can follow the next set of steps to manually authorize ACE.</p>
<p><span class="wysiwyg-font-size-large wysiwyg-color-orange110"><strong>Authorizing ACE manually</strong></span></p>
<p>If MacOS still fails to show the correct prompt to authorize our ACE component for use, you’ll need to manually authorize it. This is done by entering the Mac's Recovery mode.</p>
<p>1. To enter the Mac's Recovery mode, follow Apple's instructions for <a href="https://support.apple.com/guide/mac-help/use-macos-recovery-on-an-intel-based-mac-mchl338cf9a8/11.0/mac/11.0" target="_blank" rel="noopener noreferrer">Intel</a> or for <a href="https://support.apple.com/guide/mac-help/macos-recovery-a-mac-apple-silicon-mchl82829c17/11.0/mac/11.0" target="_blank" rel="noopener noreferrer">Apple Silicon</a>.</p>
<p>2. Once booted into Recovery, open the Terminal utility there and enter the following commands:</p>
<pre>spctl kext-consent disable
spctl kext-consent add 7266XEXAPM
spctl kext-consent enable</pre>
<p>3. After entering those commands, restart your Mac. Launch Discord again, and you'll be able to proceed through the installation.</p>
<p>Once ACE is properly authorized and installed, you’ll be all set for the future: future updates to the component can be installed, or it can be uninstalled and even reinstalled, without requiring any further system-level authorization.</p>
<h1 id="h_01H9TTWYH7S9FBR0JF1B210SBW">Need More Support? </h1>
<p>If you've attempted the setup steps above and still have trouble sharing sound with your streams, please reach out to our team over at <a class="ql-link" href="https://dis.gd/contact" target="_blank" rel="noopener noreferrer" data-slab-linktype="text">https://dis.gd/contact</a>.</p>