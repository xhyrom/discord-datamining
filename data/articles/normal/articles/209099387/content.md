<p>Are you having issues with the installer failing and/or shooting out various errors causing the app from installing? Though not intentional, there may be various issues that can cause the installation process to fail. Here are some general troubleshooting techniques that can help get you locked and loaded. </p>
<ul class="oldschool">
    <li>Close Discord in the system tray and make sure all Discord processes are terminated. (Sometimes stray processes can hide in your <strong>system tray </strong>or your <strong>task manager</strong>- double check those!)</li>
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
<p class="wysiwyg-text-align-left"><span class="wysiwyg-font-size-medium"><em>If your OS tells you that the file cannot be deleted because it's still in use. Open up the Task Manager and terminate all instances of Discord there and in the start up tab.</em></span></p>
<ul class="oldschool">
    <li>Restart your system.</li>
    <li>Reinstall via https://discordapp.com/api/download?platform=win</li>
</ul>
<p><em><strong>In some cases, these extra steps may be necessary.</strong></em></p>
<p><em>Set the Discord application (%LocalAppData%/Discord/most recent version) to run as Administrator and set Compatibility to Windows 7 or 8 (try both)</em></p>
<p><em>Make sure that all instances of Discord, including the browser version, are closed out before attempting the steps. </em></p>
<p><em>If you're seeing Kernel32.dll errors, please reference <a href="https://support.discord.com/hc/en-us/articles/115002834812" target="_blank" rel="noopener">this article</a>!<br><br>If you're on Windows 7 and these steps haven't worked for you, try the steps listed in <a href="https://support.discord.com/hc/en-us/articles/360016319392--Known-Issue-Update-Stuck-on-Windows-7" target="_self">this article</a> as well!</em></p>