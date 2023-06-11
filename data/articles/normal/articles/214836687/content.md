<p>This article will serve as your go-to reference for how Discord's roles and associated permissions work. In here we'll cover:</p>
<ol>
    <li>Role Colors</li>
    <li>Role Hierarchies</li>
    <li>Channel Permissions</li>
</ol>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/206138678/discord_colors-3.jpg" alt=""></p>
<h1>Part One: Role Colors</h1>
<p>Something that may not be immediately noticeable, but super helpful, is how roles behave in the role tab. To put it simply:</p>
<p><strong>Members of a server inherit the permissions of the combined roles assigned to them.</strong></p>
<p>Not only does this apply to permissions but to the color too! You can see the difference pretty easily here:</p>
<p><img src="https://support.discord.com/hc/article_attachments/115001756731/Screen_Shot_2017-08-24_at_10.20.28_AM.png" alt="Screen_Shot_2017-08-24_at_10.20.28_AM.png" width="134" height="180"> <img src="https://support.discord.com/hc/article_attachments/115001756751/Role_Management_101__1.5_.jpg" alt="Role_Management_101__1.5_.jpg" width="545" height="180"></p>
<p>Even though Cats has all three roles, "PUBG" is the highest in the role list, therefore Cats inherit its delightful orange color. BB maker and Cats have the same roles with the exception of PUBG, so they inherit the next highest role and color, "Overwatch" and blue. </p>
<p>You can also drag to re-arrange roles and their position on the metaphorical totem pole: </p>
<p><img src="https://support.discord.com/hc/article_attachments/115001756771/Role_Management_101_Update.gif" alt="Role_Management_101_Update.gif" width="685" height="345"></p>
<p>Before:</p>
<p><img src="https://support.discord.com/hc/article_attachments/115001762851/rename.png" alt="rename.png"></p>
<p>After:</p>
<p class="wysiwyg-text-align-left"><img src="https://support.discord.com/hc/article_attachments/115001763372/rename2.png" alt="rename2.png"></p>
<p>In this instance, all I did was drag "PUBG" up to the top, above Overwatch. As a result, everyone has inherited its orange color, as well as PUBG being listed first under my role titles. I still have my old Overwatch role, but it's lower on the list, so I lose my shiny blue badge of honor.</p>
<p>You'll also see the color of your highest-sorted role in the user's list as well:</p>
<p><img src="https://support.discord.com/hc/article_attachments/115001763131/Screen_Shot_2017-08-17_at_2.07.37_PM.jpg" alt="Screen_Shot_2017-08-17_at_2.07.37_PM.jpg" width="685" height="413"></p>
<p><em>In this case, some roles have the "Display role members separately from online members" permission checked, but the others don't, such as the pink Rocket League role here. Each user in this list has a different highest role.</em></p>
<h1>Part Two: Role Hierarchies</h1>
<p>In addition to looking pretty, roles offer a very structured way to delegate permissions to users and establish anything from a multi-tiered public server admin system to a trusted buddy in your private server helping out here and there. </p>
<p>
    <font size="4"><u>Role Linear Hierarchy:</u></font>
</p>
<p><img src="https://support.discord.com/hc/article_attachments/115001756972/Role_Linear_Hierarchy__1.5.jpg" alt="Role_Linear_Hierarchy__1.5.jpg" width="685" height="466"></p>
<p><span class="wysiwyg-font-size-medium">The blurple arrow is your highest role; roles now follow a linear hierarchy. In simpler terms, the "metaphorical totem pole" is now a bit more literal in practice.</span></p>
<p><strong>All roles equal to and above your roles will appear with a lock next to their name</strong>. This enables server owners to establish multiple roles with separate administrative powers that can't interfere with each other. Here are some of the tools that enable hierarchies to work:</p>
<p><span class="wysiwyg-font-size-medium"><strong><span class="wysiwyg-underline">Administrator:</span></strong></span></p>
<p><img src="https://support.discord.com/hc/article_attachments/115001756911/Administrator__1_.jpg" alt="Administrator__1_.jpg" width="685" height="426"></p>
<p><span class="wysiwyg-font-size-medium">This is the omega role! Giving this role to a user grants them <strong>all of the permissions in the permissions list! They also cannot be locked out of any voice or text channel, regardless of permissions.</strong> That's a tall order. This permission also lets users with that role assign any permission to roles underneath them in the hierarchy, though they still can't affect their role and any above them in the hierarchy. Real talk: with great permissions power comes great permissions responsibility. Assign with caution.</span> </p>
<p><span class="wysiwyg-underline wysiwyg-font-size-medium"><strong>Manage</strong><strong> Roles:</strong></span></p>
<p><img src="https://support.discord.com/hc/article_attachments/115001756992/Manage_roles_1_.jpg" alt="Manage_roles_1_.jpg" width="686" height="341"></p>
<p><span class="wysiwyg-font-size-medium">This permission allows a role to create new roles beneath them, then edit them accordingly. Keep in mind that this role comes 2nd to the Administrator role, and although you can add, edit, and assign new roles to users, you <strong>still can't edit your role and roles above yours.</strong> <strong>Additionally, you can only assign permissions that you have to roles under you</strong>. If your role doesn't have banning members enabled, you can't let other users ban them either. Duh. </span></p>
<p>Another important point to remember about managing roles is <strong>if you have multiple roles, you can't remove a permission from a lower role that would remove it from yourself. </strong></p>
<h3>Important note on adding roles: the <strong>@everyone</strong> role now serves as the basic template for all added roles. Want anyone in your server to add channels as they want? Assigning "Manage Channels" to @everyone will automatically grant that permission to all other roles created. Any role assigned to @everyone will be universal, regardless of assignment in higher roles.</h3>
<p><img src="https://support.discord.com/hc/article_attachments/115001757012/Newrole_1_.jpg" alt="Newrole_1_.jpg" width="685" height="466"></p>
<p>Keep in mind that when you add a new role (if you're not the server owner), that the roles are added at the very bottom, right above the @everyone role, so that you can sort it as necessary, but not above your role.</p>
<p> </p>
<p><span class="wysiwyg-underline"><strong><span class="wysiwyg-font-size-medium">Ban/Kick/Nickname Hierarchy:</span></strong></span></p>
<p><img src="https://support.discord.com/hc/article_attachments/115001757032/Screen_Shot_2017-08-18_at_10.45.19_AM.png" alt="Screen_Shot_2017-08-18_at_10.45.19_AM.png" width="685" height="522"></p>
<p>Additional to the role sorting hierarchy, there's a special exception placed on banning, kicking, and nicknaming members: <strong>Even if users have ban/kick/nickname permissions, they <span class="wysiwyg-underline">cannot ban / kick / change nicknames of anyone with the same role or a role higher than theirs.</span></strong>  </p>
<h1>Part Three: Channel Permissions</h1>
<p><img src="https://support.discord.com/hc/article_attachments/115001756931/Channelpermission__1_.jpg" alt="Channelpermission__1_.jpg" width="685" height="473"></p>
<p>If you're one of the more orderly types that enjoy the thrill of sorting your clothes into oodles of boxes, then the right-click menu has some helpful tools for you as well. These shortcuts apply when setting up individual text channel permissions, instead of working in the server settings. </p>
<p><span class="wysiwyg-underline"><strong>Clone Channel:</strong></span></p>
<p><img src="https://support.discord.com/hc/article_attachments/115001756951/Clone_Channel__1_.jpg" alt="Clone_Channel__1_.jpg" width="685" height="473"></p>
<p>This option will create a new text channel with the exact same role-specific permissions as the previous one selected. You'll be given the choice to name the new channel, then poof, done. You can go in and edit specific permissions once the channel is created. </p>
<p><span class="wysiwyg-underline"><strong>Creating role-exclusive Text Channels:</strong></span></p>
<p><img src="https://support.discord.com/hc/article_attachments/115001757011/Screen_Shot_2017-08-24_at_10.28.18_AM.png" alt="Screen_Shot_2017-08-24_at_10.28.18_AM.png"></p>
<p>When you (or anyone with the "manage channels" permission) creates a new channel, you'll see the option to select specific roles that can access the new channel. Selecting a role does two things in the permissions menu:</p>
<p>1. First, denies the @everyone role the "read messages" permission to this new channel, making it inaccessible and invisible to them.</p>
<p><img src="https://support.discord.com/hc/article_attachments/115001757172/Textpermissions_1_.jpg" alt="Textpermissions_1_.jpg" width="685" height="491"></p>
<p> </p>
<p>2. Also, specifically adds an exception for the role(s) selected. You'll see both of these changes reflected in the Channel Permissions screen.</p>
<p><img src="https://support.discord.com/hc/article_attachments/115001757212/Textchannelspermissions_2_.jpg" alt="Textchannelspermissions_2_.jpg" width="686" height="402"></p>