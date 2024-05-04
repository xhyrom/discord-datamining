<p><span style="font-weight: 400;">We’ve made it simpler to manage permissions for commands in your server. These changes will be enabled for all servers on <strong>February 28, 2023</strong>. You can try them out early in </span><strong>Server Settings &gt; Integrations</strong><span style="font-weight: 400;">.</span></p>
<h1><span style="font-weight: 400;">What changed?</span></h1>
<p><span style="font-weight: 400;">Command-level permissions changes now act as an “override” of app-level configurations. This makes them function more like server permissions and channel overwrites.</span></p>
<h2><span style="font-weight: 400;">Command Overwrites</span></h2>
<p><span style="font-weight: 400;">Previously, if you made changes to an individual command’s permissions, Discord would ignore </span><em><span style="font-weight: 400;">all</span></em><span style="font-weight: 400;"> application-level settings and defaults set by the developer. Now, individual command changes only overwrite conflicting settings. Other application-level changes are still in effect.</span></p>
<p><span class="wysiwyg-font-size-large"><strong>Example</strong></span></p>
<p class="wysiwyg-text-align-center"><strong><img src="https://support.discord.com/hc/article_attachments/10952799520663" alt="mceclip0.png" width="883" height="290"></strong></p>
<p><span style="font-weight: 400;">Here we have an app called StudyBot. By default, we only want the "Student Leads" role to be able to use its commands, and only in #study-zone. </span></p>
<p><span style="font-weight: 400;">However, we also want the "Study Buddies" role to be able to use a specific command, <strong>/notecards</strong>. We also want that command to be usable in #flashcard-help.</span></p>
<p><span style="font-weight: 400;">Previously, this setup would </span><em><span style="font-weight: 400;">remove access</span></em><span style="font-weight: 400;"> from Student Leads, and in #study zone. /notecards could be used</span></p>
<ul>
    <li style="font-weight: 400;" aria-level="1">
        <em><span style="font-weight: 400;">Only</span></em><span style="font-weight: 400;"> by Study Buddies</span>
    </li>
    <li style="font-weight: 400;" aria-level="1">
        <em><span style="font-weight: 400;">Only</span></em><span style="font-weight: 400;"> in #flashcard-help</span>
    </li>
</ul>
<p><span style="font-weight: 400;">Now, <strong>/notecards</strong> can be used</span></p>
<ul>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">By Study Buddies </span><em><span style="font-weight: 400;">and</span></em><span style="font-weight: 400;"> Student Leads</span>
    </li>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">In #flashcard-help </span><em><span style="font-weight: 400;">and</span></em><span style="font-weight: 400;"> #study-zone</span>
    </li>
</ul>
<h2><span style="font-weight: 400;">Default Member Permissions</span></h2>
<p><span style="font-weight: 400;">Some apps have default restrictions on their commands when they’re added to a server, called “default member permissions”. We don’t want everyone to be able to ban each other before we get our app set up properly!</span></p>
<p><span style="font-weight: 400;"><img src="https://support.discord.com/hc/article_attachments/10952810090135" alt="mceclip1.png"></span></p>
<p><span style="font-weight: 400;">Previously, if you made </span><em><span style="font-weight: 400;">any changes</span></em><span style="font-weight: 400;"> to command permissions–either for individual commands or for the application as a whole–Discord would ignore default member permissions. Giving an additional user or role access to a command could cause the rest of the server to gain access to a command they shouldn’t be able to use!</span></p>
<p><span style="font-weight: 400;">Now, default member permissions are still used when changes are made. You can safely override roles and users to additionally grant or remove access without affecting other server members.</span></p>
<p><span class="wysiwyg-font-size-large" style="font-weight: 400;"><strong>Example</strong></span></p>
<p><span style="font-weight: 400;"><strong><img src="https://support.discord.com/hc/article_attachments/10952863615511" alt="mceclip2.png"></strong></span></p>
<p><span style="font-weight: 400;"><strong>/study</strong> has a default restriction on it: only members with “Manage Channel” can use it. However, in the previous system, this would be </span><em><span style="font-weight: 400;">ignored</span></em><span style="font-weight: 400;"> because changes are made at the application level to deny everyone, and allow Student Leads.</span></p>
<p><span style="font-weight: 400;">Previously, <strong>/study</strong> could only be used</span></p>
<ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">By Study Buddies</span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">In #flashcard-help</span></li>
</ul>
<p><span style="font-weight: 400;">Now, <strong>/study</strong> can be used</span></p>
<ul>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">By Student Leads </span><em><span style="font-weight: 400;">who also have Manage Channel</span></em>
    </li>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">By Study Buddies, </span><em><span style="font-weight: 400;">regardless of whether they have Manage Channel</span></em>
    </li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">In #flashcard-help and in #study-zone</span></li>
</ul>
<p><span style="font-weight: 400;">If we wanted <em>all</em> Student Leads to have access to <strong>/study</strong>, we could add them as another override.</span></p>
<p><span style="font-weight: 400;"><img src="https://support.discord.com/hc/article_attachments/10989602973335" alt="mceclip0.png"></span></p>