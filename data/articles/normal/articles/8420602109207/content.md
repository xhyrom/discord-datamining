<p><strong><span class="wysiwyg-font-size-large">What does this article cover?</span></strong></p>
<ul>
    <li>
        <a href="#h_01GBAXE2M8V9C5V5A3QN80WBHZ" target="_self">What is happening?</a>
        <ul>
            <li><a href="#h_01GBAXETB4TVE2JPXG11AZ9W83" target="_self" rel="undefined">What are Privileged Intents?</a></li>
        </ul>
    </li>
    <li><a href="#h_01GBAXEERW0622BA0Q6CB70M6X" target="_self">But, I am not a developer… how does this new intent affect me?</a></li>
    <li>
        <a href="#h_01GBAXFSK2CNMHCRS168J5S8YM" target="_self">Using Application Commands</a>
        <ul>
            <li><a href="#h_01GBAXTKQA3EJN5AXSNREKSHZ0" target="_self">Command Picker</a></li>
            <li><a href="#h_01GBAXTSE93H2VVVZKHK15X5RW" target="_self">Message Context Menu</a></li>
            <li><a href="#h_01GBAXTZ1KR7ZPT7XAZMCDM3EQ" target="_self">User Context Menu</a></li>
        </ul>
    </li>
    <li><a href="#h_01GBAXG0TWA8DE3114Y862EN02" target="_self">Server Owners and Admins</a></li>
    <li><a href="#h_01GBAXGAPKXTZ7T4NAX4GVSAQV" target="_self">Resources</a></li>
</ul>
<h1 id="h_01GBAXE2M8V9C5V5A3QN80WBHZ">What is happening?</h1>
<p>On September 1, 2022, developers of Discord apps are going through a policy change that may impact certain app functionality while the migration completes.</p>
<p>This policy change involves adding Message Content as a Privileged Intent. Read on to learn more.</p>
<h2 id="h_01GBAXETB4TVE2JPXG11AZ9W83">WHAT ARE PRIVILEGED INTENTS?</h2>
<p>While developers are responsible for their apps and data use, Privileged Intents were created as a way to help us protect you, our users, from potentially harmful apps that may try to misuse your data. We put up a privacy barrier between this data and potential bad actors. This data currently includes Member information (e.g., Server member lists or server joins/leaves), Presence information (e.g., server members’ status, or activities), and now Message Content (e.g., Content of messages in a server besides DM’s/mentions). In the right hands, however, this information can be used to create some super awesome tools to make your Discord experience even better! So, we’ve created a process for apps to request access to privileged intents. Large apps (in 100 or more servers) cannot access this data unless the developer goes through a screening process to determine eligibility based on the information they provide.</p>
<p>To learn about privileged intents, <a href="#privileged_resources" target="_self" rel="undefined">here</a> are some excellent resources.</p>
<h1 id="h_01GBAXEERW0622BA0Q6CB70M6X">But, I am not a developer… how does this new intent affect me?</h1>
<p>If you are not a developer, you may be wondering how this affects you as a server owner or user. This should only affect you if you utilize verified apps. While unverified apps have a simple bot badge next to their name, a verified app will have a checkmark bot badge that looks like this one:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/8424964707991/62857316414c2430b5f312c8_4444_command-buttons.png" alt="62857316414c2430b5f312c8_4444_command-buttons.png"></p>
<p>If you currently use a verified app in your server(s), and they have not incorporated <a href="https://discord.com/developers/docs/interactions/application-commands" target="_blank" rel="noopener noreferrer">application commands</a>, they may not work properly and some apps may not be able to be added to new servers. This is because they need to go through our <a href="https://support-dev.discord.com/hc/en-us/articles/6205754771351" target="_blank" rel="noopener noreferrer">Privileged Intents verification</a> process or stop using the Message Content data in their app. Most verified apps have a support server where you can reach out to the developer with any questions.</p>
<h1 id="h_01GBAXFSK2CNMHCRS168J5S8YM">Using Application Commands</h1>
<p>There are three ways of accessing the Application Commands:</p>
<h2 id="h_01GBAXTKQA3EJN5AXSNREKSHZ0">1. COMMAND PICKER</h2>
<p>Switching to application commands from prefix commands simplifies your Discord experience. Rather than typing<code>!</code> or some other prefix and trying to remember the name of all of the commands, now when you type <code>/</code> every command for all of the apps in the server should appear in an organized list called the Command Picker.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/8424964707479/628572088b1d3cf52023fc2a_11111_command-picker.png" alt="628572088b1d3cf52023fc2a_11111_command-picker.png"></p>
<p>This is much cleaner, more user-friendly, and there is a lot less channel spam from application commands!</p>
<h2 id="h_01GBAXTSE93H2VVVZKHK15X5RW">2. MESSAGE CONTEXT MENU</h2>
<p><em><strong>Top-right menu or right-click on a message, go to Apps and choose a command directed at a specific message.</strong></em></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/8425006607639/d912a955d79aada8839222b2a12e4633.png" alt="d912a955d79aada8839222b2a12e4633.png"></p>
<h2 id="h_01GBAXTZ1KR7ZPT7XAZMCDM3EQ">3. USER CONTEXT MENU</h2>
<p><em><strong>Right-click on a user, go to Apps, and choose a command directed towards a specific user.</strong></em></p>
<p><img src="https://support.discord.com/hc/article_attachments/8425006586647/context_menu.png" alt="context_menu.png"></p>
<h3>💡Accidentally start typing a command with a prefix out of habit?<br>No worries! We will suggest commands based on the words you type in. Check it out!</h3>
<p><img src="https://support.discord.com/hc/article_attachments/8424964857367/slash_comm.png" alt="slash_comm.png"></p>
<p>This will show you all of the commands containing the word that you start typing after the prefix for every app in the server!</p>
<h1 id="h_01GBAXG0TWA8DE3114Y862EN02">Server Owners and Admins</h1>
<p>Make sure that you double-check your server’s app permissions. It’s likely that an app will no longer function if it was added to your server <em>before</em> they implemented the slash commands. These permissions are located in your server settings under <code>Integrations</code>. If you are still having issues, you can remove the bot and try adding it to your server with a new invite link. You can always reach out to the developers of the bot via their support server or website if they have one.</p>
<h1 id="h_01GBAXGAPKXTZ7T4NAX4GVSAQV">Resources</h1>
<h2>APPLICATION COMMAND RESOURCES:</h2>
<ul>
    <li><a href="https://discord.com/blog/slash-commands-permissions-discord-apps-bots" target="_blank" rel="noopener noreferrer">PERMISSION TO SLASH, GRANTED: INTRODUCING SLASH COMMAND PERMISSIONS</a></li>
    <li><a href="https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/" target="_blank" rel="noopener noreferrer">WELCOME TO THE NEW ERA OF DISCORD APPS</a></li>
</ul>
<h2 id="privileged_resources">PRIVILEGED INTENTS RESOURCES:</h2>
<ul>
    <li><a href="https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-FAQ" target="_blank" rel="noopener noreferrer">Message Content Privileged Intent FAQ</a></li>
    <li><a href="https://support-dev.discord.com/hc/en-us/articles/6207308062871-What-are-Privileged-Intents-" target="_blank" rel="noopener noreferrer">What are Privileged Intents?</a></li>
    <li><a href="https://support-dev.discord.com/hc/en-us/articles/6177533521047" target="_blank" rel="noopener noreferrer">What is considered an acceptable use case for Privileged Intents?</a></li>
</ul>