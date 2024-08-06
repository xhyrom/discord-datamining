<p>
  Are you having issues with the installer failing or showing various errors
  that prevent the Discord app from installing to your Windows device? Though
  not intentional, there may be various issues that can cause the installation
  process to fail. Here are some general troubleshooting techniques that can
  help get you back on track.
</p>
<div class="tip-box">
  <strong>Note: </strong>Sometimes stray processes can hide in your system tray
  or your Task Manager, so don’t forget to double-check those too!
</div>
<p>
  1. Close Discord in the system tray and make sure all Discord processes are
  terminated. Delete the 2 following folders:
</p>
<ul>
  <li>%AppData%/Discord</li>
  <li>%LocalAppData%/Discord</li>
</ul>
<p>To find those folders, tap the Start button + R, and enter:</p>
<p><em>%appdata%</em></p>
<p>in the run window and hit the enter <em>key:</em></p>
<p class="wysiwyg-text-align-center">
  <em
    ><img
      src="https://support.discord.com/hc/article_attachments/25445402235415"
      width="399"
      height="205"
  /></em>
</p>
<p>%appdata% in the run window</p>
<p>Then input <em>%localappdata%</em> in the run window and tap enter:</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/25445402242455"
    width="399"
    height="204"
  />
</p>
<p>Find the "Discord" folder in both of those windows, and delete it.</p>
<p>
  If your OS tells you that the file can’t be deleted because it's still in use,
  please open up the device's <strong>Task Manager</strong> and terminate all
  instances of Discord there and in the Start Up tab.
</p>
<p>2. Restart your Windows device.</p>
<p>
  3. Reinstall the Discord app via<a
    href="https://discordapp.com/api/download?platform=winIn"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://discordapp.com/api/download?platform=winIn</a
  >
  some cases, these extra steps may be necessary.
</p>
<ul>
  <li>
    Set the Discord application (%LocalAppData%/Discord/most recent version) to
    run as Administrator and set Compatibility to Windows 7 or 8 (try both)
  </li>
  <li>
    Make sure that all instances of Discord, including the browser version, are
    closed out before attempting the steps.
  </li>
</ul>
<div class="form-box">
  <strong>Note: </strong>If even after trying all of the above, you’re still
  running into an issue installing Discord. Please reach out to our Support team
  through here:
  <a href="https://dis.gd/contact" target="_blank" rel="noopener noreferrer"
    >https://dis.gd/contact</a
  >
</div>
