<p>Hey, listen! If you're having issues updating or installing Discord on your shiny Macintosh machine, we can help! Though not intentional, there are various issues that can cause the install or update process to fail. You'll see this as an endless update, or an unexplained install error! In cases like these, completely reinstalling Discord will often improve our updater's performance and clear out any issues. Follow these steps!</p>
<h3>
    <strong>Note: Remember that Discord only supports MacOS 10.11 and up (El Capitan)</strong> <strong>or above! Also, if you're running macOS on a machine that wasn't produced by Apple (IE, a Hackintosh), you may run into unique issues!</strong>
</h3>
<h1>Reinstalling Discord</h1>
<ul class="oldschool">
    <li>Close Discord by using ⌘+Q or selecting the Quit option from the menubar, then make sure all Discord processes are terminated from within your Mac's <strong>Activity Monitor</strong>. (You can quickly launch the Activity Monitor by using Spotlight or Siri on your Mac!) <br><br>
    </li>
    <li>Delete the 2 following folders:</li>
</ul>
<ol>
    <ol>
        <li>~/Library/Application Support/Discord</li>
        <li>/Library/Application Support/Discord</li>
    </ol>
</ol>
<p class="wysiwyg-text-align-left"><span class="wysiwyg-font-size-medium"><em>To find those folders, open <strong>Finder</strong>, press <strong>⇧⌘+G </strong>(or <strong>Go &gt; Go to Folder</strong> in the menubar), and enter:</em></span></p>
<p class="wysiwyg-text-align-left"><em>~/Library/Application Support in the window and hit enter: </em></p>
<p class="wysiwyg-text-align-left"><img src="https://support.discord.com/hc/article_attachments/360018976612/Screen_Shot_2019-01-16_at_7.40.53_PM.png" alt="Screen_Shot_2019-01-16_at_7.40.53_PM.png"></p>
<p> <em>Then /Library/Application Support in the run window and hit enter:</em></p>
<p><em><br><img src="https://support.discord.com/hc/article_attachments/360018976652/Screen_Shot_2019-01-16_at_7.41.20_PM.png" alt="Screen_Shot_2019-01-16_at_7.41.20_PM.png"></em></p>
<p>In both of these cases, find the Discord folders in these files and drag them to your Trash. <strong>Note:</strong> There may not be a Discord folder in the second file (/Library/Application Support). If there isn't, that's okay!<br><br>Next, open your <strong>Applications</strong> folder. Find Discord and drag it to your Trash. Finally, empty your Trash!</p>
<p class="wysiwyg-text-align-left"><span class="wysiwyg-font-size-medium"><em>If your OS tells you that the file cannot be deleted because it's still in use. Open up the Activity Monitor and terminate all instances of Discord.</em></span></p>
<ul class="oldschool">
    <li>Restart your system.</li>
    <li>Reinstall via https://discord.com/api/download?platform=osx</li>
</ul>
<h3><strong>Note: Make sure that all instances of Discord are closed out before attempting these steps!</strong></h3>
<h1>Diagnosing Network Issues</h1>
<p>If reinstalling Discord doesn't do the trick, it's possible your network configuration is preventing our updater from doing its job! To clear up any networking issues, there's some basic troubleshooting steps you should try!</p>
<p>First, try setting your DNS to Google Public DNS!</p>
<ul class="oldschool">
    <li>Open <strong>System Preferences </strong>from your Mac's Apple menu, then select <strong>Network</strong>. From there, choose the network you're currently using (for example, <strong>Wi-Fi</strong>)</li>
    <li>Select <strong>Advanced...</strong>, select the <strong>DNS</strong> tab in the top bar, then use the Plus button under <strong>DNS Servers</strong> to add the following DNS server options!
        <ul>
            <li>8.8.8.8</li>
            <li>8.8.4.4</li>
            <li>2001:4860:4860::8888</li>
            <li>2001:4860:4860::8844</li>
        </ul>
    </li>
    <li>Click <strong>OK</strong>, then close System Preferences and try relaunching Discord!</li>
</ul>
<p>If that doesn't do the trick, try renewing your Mac's IP address! </p>
<ul>
    <li>Open <strong>System Preferences </strong>from your Mac's Apple menu, then select <strong>Network</strong>. From there, choose the network you're currently using (for example, <strong>Wi-Fi</strong>)</li>
    <li>Select <strong>Advanced...</strong>, then select the <strong>TCP/IP </strong>tab</li>
    <li>Click <strong>Renew DHCP Lease</strong>
    </li>
    <li>Select <strong>OK</strong>, close System Preferences, then try relaunching Discord once more!</li>
</ul>
<h3><strong>Note: If none of these steps do the trick, reach out to our Support Team at https://dis.gd/contact</strong></h3>
<p> </p>