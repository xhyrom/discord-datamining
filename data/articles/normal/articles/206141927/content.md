<p>This helpdesk article details the Discord permission hierarchy.</p>
<p>For a general overview of the permission system and instructions on where to access these settings <a href="https://support.discord.com/hc/en-us/articles/206029707">click here</a>.</p>
<p>You can also check out step-by-step instructions for the following popular permission settings:</p>
<ul>
    <li><a href="https://support.discord.com/hc/en-us/articles/206143407">How do I set up a private server?</a></li>
    <li><a href="https://support.discord.com/hc/en-us/articles/206143877">How do I set up a leaders channel?</a></li>
    <li><a href="https://support.discord.com/hc/en-us/articles/205369668">How do I set up an announcements channel?</a></li>
</ul>
<p> </p>
<p><span class="wysiwyg-underline wysiwyg-font-size-large">Server Permissions</span></p>
<p>An individual's server-wide permissions are determined by adding up all the allows for roles assigned to that individual along with the allows for @everyone.</p>
<p> </p>
<p><span class="wysiwyg-underline wysiwyg-font-size-large">Channel Permissions</span></p>
<p>Channel permissions start with server permissions as a base. Then, the hierarchy is as follows:</p>
<ul>
    <li>Apply denies of @everyone on channel</li>
    <li>Apply allows of @everyone on channel</li>
    <li>Sum up all the denies of a member's roles and apply them at once</li>
    <li>Sum up all the allows of a member's roles and apply them at once</li>
    <li>Apply denies for a specific member if they exist</li>
    <li>Apply allows for a specific member if they exist</li>
</ul>
<p> </p>