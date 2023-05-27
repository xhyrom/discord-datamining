<p>As of <strong>October 27th, 2020</strong>, a long-promised gateway update was rolled out to incorporate our gateway intents, and as a result, we've seen an escalation in bot connection issues and general confusion regarding the gateway rollout. As such, we wanted to take a moment to clarify some basic questions regarding the new <a href="https://discord.com/developers/docs/topics/gateway#gateways" target="_self">gateway</a> update and our <a href="https://discord.com/developers/docs/topics/gateway#privileged-intents" target="_self">privileged intents</a> slate.</p>
<p class="callout">Please note that in this developer-oriented FAQ, the legacy term "guild" is used interchangeably with the modern term "server". </p>
<h2>What's all this about, exactly?</h2>
<p>As of <strong>October 27th, 2020</strong> the events under the <code>GUILD_PRESENCES</code> and <code>GUILD_MEMBERS</code> intents will be turned <strong>off by default on all gateway versions</strong>. If you are using <strong>Gateway v6</strong>, you will receive those events if you have enabled the flags for those intents in the Developer Portal and have been verified if your bot is in 100 or more guilds. You do not need to use Intents on Gateway v6 to receive these events; you just need to enable the flags.</p>
<p>If you are using <strong>Gateway v8</strong>, Intents are <strong>mandatory</strong> and <strong>must be specified when connecting.</strong></p>
<p class="callout">You can learn more about gateway versions in the <a href="https://discord.com/developers/docs/topics/gateway#gateways" target="_self">Developer Documentation</a>. </p>
<h2>Why is my bot no longer working suddenly?</h2>
<p>When the new gateway update was deployed, bots which weren't adequately prepared to specify gateway intents could have experienced a variety of issues. Common symptoms include:</p>
<ul>
    <li>The bot not responding anymore, despite being online</li>
    <li>The bot cache being empty (only seeing a few users across all guilds)</li>
    <li>A library on ready event not firing or timing out (happening mostly on <strong>discord.py</strong> and <strong>discord.js</strong> bots but other libraries might exhibit the same behavior)</li>
</ul>
<p>If you are affected by this, this is because of 2 gateway changes:</p>
<ul>
    <li>You no longer have access to disabled privileged intents if you are not specifying intents</li>
    <li>You can no longer request member info for multiple guilds at the same time</li>
</ul>
<p class="callout">Please note that a variety of libraries are facing other issues, including but not limited to lengthy startup times in JDA. You'll want to review the <a href="https://discord.com/developers/docs/topics/community-resources" target="_self">Community Resources</a> page for links to various library homepages to learn more about potential impacts to your library.</p>
<h2>How do I get back up and running?</h2>
<h3>Updating Your Library</h3>
<p>First, you must make sure you're using a library version that can handle intents, and by extension no longer requests information on multiple guilds at once.</p>
<p>For <strong>discord.py</strong>, this means you need to update to <strong>v1.5 or higher</strong>. </p>
<p>For <strong>discord.js</strong>, this means you need to update to <strong>v12 or higher</strong>. </p>
<p class="callout">If you're unsure how to upgrade your bot to a new library release or are unclear regarding the intent compatibility of an alternative library, please see the library links provided in our <a href="https://discord.com/developers/docs/topics/community-resources" target="_self">Developer Community Resources</a>. </p>
<h3>Specifying Gateway Intents</h3>
<p>Please note that a variety of our gateway intents are not privileged, meaning they do not require specific switches to be flipped or whitelisted access to be requested. You can review the entirety of our available intents <a href="https://discord.com/developers/docs/topics/gateway#gateway-intents" target="_self">here</a>.</p>
<p>Specifying which intents you'd like to receive varies based on your chosen library. Documentation on how to specify gateway intents in <strong>discord.js</strong> is available <a href="https://discordjs.guide/popular-topics/intents.html" target="_self">here</a>. Documentation for specifying gateway intents in <strong>discord.py</strong> is available <a href="https://discordpy.readthedocs.io/en/latest/intents.html" target="_self">here</a>.</p>
<p class="callout">Please note that specifying intents requires <strong>discord.py v1.5 and higher</strong> or <strong>discord.js v12 and higher</strong>. For alternative libraries, please review our <a href="https://discord.com/developers/docs/topics/community-resources" target="_self">Community Resources</a>. </p>
<h3>Requesting Privileged Gateway Intents</h3>
<p>Privileged gateway intents include <code>GUILD_PRESENCES</code> and <code>GUILD_MEMBERS</code>. The process of enabling access to these two intents depends on your bot's size, verification status, and the intent variety you need access to.</p>
<h4>Unverified Bots in 75 Servers or Less</h4>
<p>If your bot is in <strong>under 76 servers</strong>, and thus does not require or qualify for verification, you can enable access to either privileged intent by flipping the corresponding switch in your bot's <strong>Developer Portal</strong> prior to calling the intents in code.</p>
<h4>Unverified Bots in 76 or More Servers</h4>
<p>If your unverified bot is in <strong>76</strong><strong> or more servers</strong>, you'll need to be verified prior to calling and using our privileged gateway intents. If you're not verified yet, we ask that you apply as soon as you can. You can request verification and whitelisting at the same time just by filling out the form in the <strong>Developer Portal</strong>. </p>
<p>Note that bots in <strong>100 servers or more</strong> will need to be verified prior to continuing to join servers in addition to requesting intents. </p>
<h4>Verified Bots</h4>
<p>Once your bot is verified, you won't be able to manually flip the intent switches in the Developer Portal. To request whitelisted access to an additional privileged gateway intent for a verified bot, please send our support team a ticket <a href="https://dis.gd/contact" target="_self">here</a>!</p>
<p>Make sure to include your <strong>bot's ID</strong>, which <strong>intents you're requesting</strong>, a basic <strong>description of your use case for the requested intent</strong>, and <strong>screenshots or video of that use case in action </strong>(or code snippets, if not user facing!).</p>
<p class="callout">There's more information on how to request intents over in the #verification-faq channel in our <a href="https://discord.gg/discord-developers" target="_self">official Developers server</a>, so please join the server if you've got additional questions! </p>
<h2>Working with Limited Intents</h2>
<p>In many situations, developers are granted access to one of the privileged intents, but not the other. Calling one without the other can be a bit different from library-to-library, but here's some general advice. </p>
<h3>For bots that have the GUILD_MEMBERS intent and do not need or have the GUILD_PRESENCES intent</h3>
<p>You can fill your bot cache again on startup by <strong>requesting the info for each guild individually.</strong> For details on how to do this please see the documentation of the library you use.</p>
<h4>A Note On discord.js</h4>
<p>If you're using <strong>discord.js</strong>, and you rely on building a cache of member data while only having access to partial intents, you should consider building a persistent cache which is updated when a member uses your bot, or by tracking member events using the <code>GUILD_MEMBERS</code> scope.</p>
<p>While discord.js does not currently fully support persistent caching, you could consider regularly triggering events to fetch all members and fill your cache as a stopgap. </p>
<h2>For bots that do not have the GUILD_MEMBERS intent</h2>
<p>If you do not need to do anything when a guild member joins, leaves, or is updated, <strong>you do NOT need the members intent</strong>. You cannot get a full member list to fill the cache, but in the majority of cases, a full member list is not necessary for building a persistent cache. </p>
<p>For finding users on a guild by ID or name, you can do this over the gateway without access to a privileged intent. Refer to the documentation of your library for information. The API also allows you to get this info by ID over the REST API.</p>
<p>For building basic leaderboards, we would instead encourage you to build a persistent database of user score information, and query that database to present active leaderboard data rather than querying a full member cache. </p>
<p class="callout">If you need further assistance on incorporating our guidance on intent usage, please visit the Developers server <a href="https://discord.gg/discord-developers" target="_self">here</a>! </p>
<h2>Resources</h2>
<p>There's a variety of resources that can help you navigate using gateway intents and requesting access to privileged intents. Here's a few!</p>
<ul>
    <li><a href="https://discord.gg/discord-developers" target="_self">Official Discord Developers Server</a></li>
    <li><a href="https://discordapp.com/developers/docs/intro" target="_self">Developer Documentation</a></li>
    <li><a href="https://discord.com/developers/docs/topics/community-resources" target="_self">Developer Community Resources</a></li>
    <li><a href="https://dis.gd/contact">Discord Support</a></li>
</ul>