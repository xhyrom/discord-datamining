<h3>Slash Command Permissions are here! Check out our blog post: <a href="https://discord.com/blog/slash-commands-permissions-discord-apps-bots" target="_blank" rel="noopener noreferrer">https://discord.com/blog/slash-commands-permissions-discord-apps-bots</a>
</h3>
<h3>
    <span class="wysiwyg-color-red">Command Permissions are changing on February 28, 2023! Learn more in our</span> <a href="https://support.discord.com/hc/en-us/articles/10952896421783" target="_blank" rel="noopener noreferrer">updates to command permissions</a> <span class="wysiwyg-color-red">article.</span>
</h3>
<h1>Frequently asked questions:</h1>
<p><span class="wysiwyg-font-size-large"><strong><span class="notion-enable-hover" style="font-weight: 600;" data-token-index="0">How do I access Command Permissions?</span></strong></span></p>
<p>On desktop, go to <span class="notion-enable-hover" style="font-weight: 600;" data-token-index="1">Server Settings &gt; Integrations, </span>and select an app from the list. If the app has commands registered in your server, you’ll see a list of commands and ways to control access to them!</p>
<p><span class="wysiwyg-font-size-large"><strong>How do I restrict who can use commands?</strong></span></p>
<p>Under “Roles and Members” you’ll see a list of who currently has permissions to use commands. You can make changes by changing the toggle, just like other permissions, or adding additional roles and members.</p>
<p><span class="wysiwyg-font-size-large"><strong>How do I turn commands off within specific channels?</strong></span></p>
<p>We know that servers have different needs, and you may want to restrict commands to certain channels. By default, commands are available in all channels. This means <strong>when you add a new app to your server, all members will be able to use any commands</strong>, unless the developer has set up default member permissions.</p>
<p>To restrict access to certain spaces, click ‘Add Channels’ and select additional channels to customize. Toggle permissions off as desired.</p>
<p><span class="wysiwyg-font-size-large"><strong>How can I see what an app’s commands are?</strong></span></p>
<p>Knowing what commands are available - before making them visible and accessible to the broader members of a server - is a good way for moderators and admins to feel confident about keeping their server clean, safe, and botspam-free.</p>
<p>You can see a list of commands right on the Command Permissions page. Use the Search bar to see if the app has a command you’re looking for - and use the filters for more refined results.</p>
<p><span class="wysiwyg-font-size-large"><strong>Can I change permissions for a specific command?</strong></span></p>
<p>You can make changes to individual commands by creating overwrites. Clicking a command in the list will open a popup where you can make changes.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12792358198807" alt="change-updated-permissions-for-specific-command.png"></p>
<p>Here we have an app called StudyBot. By default, we only want the "Student Leads" role to be able to use its commands, and only in #study-zone.</p>
<p>However, we also want the "Study Buddies" role to be able to use a specific command, <span class="notion-enable-hover" style="font-weight: 600;" data-token-index="1">/notecards</span>. We also want that command to be usable in #flashcard-help.</p>
<p>With these overwrites, <strong>/notecards</strong> can be used</p>
<ul>
    <li>By Study Buddies <em>and</em> Student Leads</li>
    <li>In #flashcard-help <em>and</em> #study-zone</li>
</ul>
<p><span class="wysiwyg-font-size-large"><strong>How do default member permissions work?</strong></span></p>
<p>Some apps have default restrictions on their commands when they’re added to a server, called “default member permissions”. We don’t want everyone to be able to ban each other before we get our app set up properly!</p>
<p>These permissions are set by the app’s developer. This is what it looks like when a command has default member permissions.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12792394104599" alt="command-with-default-permissions.png"></p>
<p>In some cases, you may want to change access on top of these defaults. Let’s use the following example:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12792399288983" alt="change-access-plus-change-default-permissions-for-command.png"></p>
<p><strong>/study</strong> has a default restriction on it: only members with “Manage Channel” can use it. This impacts the “Student Leads” who can use the entire application as well; only Student Leads <em><strong>with Manage Channel</strong></em> can use <strong>/study</strong>.</p>
<p>We can add the above overwrites to also grant “Study Buddies” access. With the above configuration, <span class="notion-enable-hover" style="font-weight: 600;" data-token-index="1">/study</span> can be used.</p>
<ul>
    <li>By Student Leads <em>who also have Manage Channel</em>
    </li>
    <li>By Study Buddies, <em>regardless of whether they have Manage Channel</em>
    </li>
    <li>In #flashcard-help and in #study-zone</li>
</ul>
<p>If we wanted <em><strong>all</strong></em> Student Leads to have access to <strong>/study</strong>, we can add them as an additional overwrite:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12792438892951" alt="add-additional-overwrite-for-command-permission.png"></p>
<p><span class="notion-enable-hover wysiwyg-font-size-large" style="font-weight: 600;" data-token-index="0">I’m a developer. How do I set defaults on my commands?</span></p>
<p><span class="notion-enable-hover" data-token-index="0">Check out our <a class="notion-link-token notion-enable-hover" style="cursor: pointer; color: inherit; word-wrap: break-word; text-decoration: inherit;" href="https://discord.com/developers/docs/tutorials/upgrading-to-application-commands#default-permissions" target="_blank" rel="noopener noreferrer" data-token-index="1">documentation on default member permissions</a>!</span></p>
<p><span class="wysiwyg-font-size-large"><strong><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0">If someone in my server doesn’t have permission to use a command, will they still see it in the command picker when they type “/”?</span></span></strong></span></p>
<p><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0">No, commands will be hidden from members who don’t have permission to use them.</span></span></p>
<p><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" style="font-weight: 600;" data-token-index="0">How do I view the permissions for the app/bot itself, aside from just its commands?</span></span></span></p>
<p><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0">App/bot permissions are still viewable on this same page, at the bottom. You’ll see what roles have been assigned to the bot, along with a list of granted permissions and a list of denied permissions.</span></span></span></p>
<p class="wysiwyg-text-align-center"><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0"><img src="https://support.discord.com/hc/article_attachments/12792495056663" alt="view-all-permissions-for-app.png"></span></span></p>
<p><span class="wysiwyg-font-size-large"><strong><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0">Is this available on mobile?</span></span></span></strong></span></p>
<p><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0"><span class="notion-enable-hover" data-token-index="0">Command Permissions can only be changed on desktop, but are applied on all platforms.</span></span></span></p>
<p> </p>