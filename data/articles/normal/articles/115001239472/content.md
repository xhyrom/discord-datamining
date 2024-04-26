<p>Sometimes, Discord behaves badly, and the only way to troubleshoot is to start digging into the Console Log. </p>
<h1>Opening the Console</h1>
<p>In order to get the console tab in Developer Tools, you first need to install either <span style="font-weight: 400;">the <a href="https://discord.com/download" target="_blank" rel="noopener noreferrer">PTB client</a> or Canary client:</span></p>
<ul>
    <li style="list-style-type: none;">
        <ul>
            <li style="font-weight: 400;" aria-level="1"><a href="https://dis.gd/wincanary" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400;">Windows Canary</span></a></li>
            <li style="font-weight: 400;" aria-level="1"><a href="https://dis.gd/maccanary" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400;">MacOS Canary</span></a></li>
        </ul>
    </li>
</ul>
<p>Opening the console on Windows and Mac is slightly different for each platform:</p>
<p><strong>Windows</strong></p>
<ol>
    <li>Press Ctrl+Shift+I to open the Developer Tools</li>
    <li>Click the Console Tab</li>
</ol>
<p><strong>Mac</strong></p>
<ol>
    <li>Press ⌥+⌘+I</li>
    <li>Click the Console Tab</li>
</ol>
<p>Now that you have that open, look around for any red error messages!</p>
<h1>The errors and their meanings</h1>
<p>Next we'll go over what some of the different errors you could see, and what they mean!</p>
<h2>Proxy Errors</h2>
<p>These usually look like these:</p>
<ul>
    <li><strong>ERR_PROXY_CONNECTION_FAILED</strong></li>
</ul>
<p>Discord doesn't work with Proxies, so make sure to disable <strong>any</strong> Proxies. If you didn't enable proxies, definitely do a scan for viruses with Malwarebytes!</p>
<h2>Connection Errors</h2>
<p>There are a number of connection related errors that can be solved in similar ways:</p>
<ul>
    <li><strong>ERR_CONNECTION_RESET</strong></li>
    <li><strong>ERR_CONNECTION_TIMED_OUT</strong></li>
    <li><strong>ERR_CONNECTION_CLOSED</strong></li>
    <li><strong>ERR_NAME_NOT_RESOLVED</strong></li>
    <li><strong>ERR_EMPTY_RESPONSE</strong></li>
</ul>
<ol>
    <li>With these errors, the best place to start is to do a scan with Malwarebytes for any threats</li>
    <li>If that doesn't work, try to <a href="https://developers.google.com/speed/public-dns/docs/using" target="_blank" rel="noopener noreferrer">set your DNS to Google Public DNS</a>.</li>
    <li>If THAT doesn't work, try refreshing and renewing your IP Address. </li>
</ol>
<h3>Renewing IP Address </h3>
<p><strong>Windows</strong></p>
<ol>
    <li>Open your command prompt (cmd) in Administrator mode</li>
    <li>Type `ipconfig /release` then hit Enter</li>
    <li>Type `ipconfig /flushdns` and hit enter again!</li>
    <li>Type `ipconfig /renew` hit enter, and close the cmd window</li>
</ol>
<p><strong>Mac</strong></p>
<ol>
    <li>Open System Preferences</li>
    <li>Open Network and select your network connection</li>
    <li>Click "Advanced..."</li>
    <li>Select the "TCP/IP" tab</li>
    <li>Click "Renew DHCP Lease" and quit System Preferences</li>
</ol>
<h2>Asset Loading Errors </h2>
<p>When your icons, avatars, or pictures aren't uploading, you'll likely see an error like this:</p>
<ul>
    <li><strong>status of 404</strong></li>
</ul>
<p> This is usually caused by something blocking Discord in some way.</p>
<ol>
    <li>Temporarily disable or <span style="color: #2e3338;" data-darkreader-inline-color="">allowlist</span> Discord in your antivirus or firewall</li>
    <li>Try clearing your browser cache and cookies</li>
</ol>