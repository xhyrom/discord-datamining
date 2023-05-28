<p>We're constantly working on improving Discord's infrastructure to make your chat &amp; voice experience as seamless as possible, but sometimes we confuse this with that and as a result, your version of Discord might not be completely up to date. <strong>If you clicked the "Well, it looks like your Discord installation is corrupt." </strong><strong>banner, reinstall Discord using the following steps to get all caught up:</strong></p>
<p> </p>
<ul>
    <li>Close Discord in the system tray and make sure all Discord processes are terminated. (Sometimes stray processes can hide in your <strong>system tray </strong>or your <strong>task manager</strong>- double-check those!)</li>
    <li>Delete the 2 following folders:</li>
</ul>
<ol>
    <ol>
        <li>%AppData%/Discord</li>
        <li>%LocalAppData%/Discord</li>
    </ol>
</ol>
<p class="wysiwyg-text-align-left"><span class="wysiwyg-font-size-medium"><em>To find those folders, hit the<strong> </strong><strong>Start button + R</strong>, and enter:</em></span></p>
<p class="wysiwyg-text-align-left"><em>%appdata% in the run window and hit enter: </em></p>
<p class="wysiwyg-text-align-left"><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/209205268/RunDat.png" alt=""></p>
<p><br><br></p>
<p><em>Then %localappdata% in the run window and hit enter:</em></p>
<p><em><br><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/209275467/RunDatLocal.png" alt=""><br></em></p>
<p> </p>
<p> </p>
<p class="wysiwyg-text-align-left">Then find the "Discord" folder in both of those windows, and delete it. </p>
<p class="wysiwyg-text-align-left"><span class="wysiwyg-font-size-medium"><em>If your OS tells you that the file cannot be deleted because it's still in use, open up the Task Manager and terminate all instances of Discord there and in the startup tab.</em></span></p>
<ul>
    <li>Restart your system.</li>
    <li>Reinstall via <a href="https://discord.com/api/download?platform=win" target="_self">Windows Download</a>
    </li>
</ul>
<p><em><strong>In some cases, these extra steps may be necessary.</strong></em></p>
<p><em>Set the Discord application (%LocalAppData%/Discord/most recent version) to run as Administrator and set Compatibility to Windows 7 or 8 (try both)</em></p>
<p><em>Make sure that all instances of Discord, including the browser version, are closed out before attempting the steps. </em></p>