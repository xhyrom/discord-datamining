<h3>Table of Contents</h3>
<ul>
    <li><a href="#h_01GYA8YEFHMQ365RN3K3Y3CSFG" target="_self" rel="undefined">How Apps are Affected</a></li>
    <li><a href="#h_01GYA8Q7TRFF2Y16B1F9XGCK31" target="_self" rel="undefined">How to Prepare</a></li>
    <li><a href="#h_01H26BDRT8ASH1YVKG6HMGZ1J2" target="_self">FAQs</a></li>
</ul>
<p><span class="discussion-id-2cc8e701-5da7-4cf3-b002-fa555bf0787a notion-enable-hover" data-token-index="0">Discord</span> has announced updates to our username system, and this article aims to provide details concerning app developers. Take time to review the <a href="https://dis.gd/usernames" target="_blank" rel="noopener noreferrer">New Usernames article</a> and familiarize yourself with the overall concept, then we can discuss what it means, how it will affect apps, and how to be ready. <span class="discussion-level-1 discussion-id-dfc51c3d-f9b7-412d-8592-e62f1adeb133 notion-enable-hover" data-token-index="0">You can also <a href="https://discord.com/blog/usernames" target="_blank" rel="noopener noreferrer">visit our blog to read a message from our cofounder about why we are making this change</a></span><span class="discussion-level-1 discussion-id-dfc51c3d-f9b7-412d-8592-e62f1adeb133 notion-enable-hover" data-token-index="2">.</span></p>
<h2 id="h_01GYA8YEFHMQ365RN3K3Y3CSFG">How Apps are Affected</h2>
<p>Developers can expect their apps to receive a couple of updates during migration to the new username system.</p>
<ul>
    <li>
        <a href="#h_01GYA8SXS9QSH1R587DYXAPY94" target="_self">All apps will have a bot user</a>.
    </li>
    <li>App names and bot usernames are <a href="#h_01H268004S5NANV88RBH0DZF57" target="_self">limited to 32 characters</a>.</li>
    <li>Developers may need to <a href="#h_01GYA87X9QZ19H2X6PJ3M35ZDH" target="_self">update their code</a> to support the new username system.</li>
</ul>
<h3 id="h_01GYA8SXS9QSH1R587DYXAPY94">Bot Users Added to all Apps</h3>
<p>All new<span class="discussion-id-f86ff52d-ec4b-4b89-9d91-ff6a869ffab7 discussion-id-f34b01b5-afc7-4b01-81c1-244eb7abb531 notion-enable-hover" data-token-index="1"> apps will now </span><span class="discussion-id-f86ff52d-ec4b-4b89-9d91-ff6a869ffab7 discussion-id-f34b01b5-afc7-4b01-81c1-244eb7abb531 discussion-id-0ed2d054-f4bb-4199-8f25-9e641f784278 notion-enable-hover" data-token-index="2">have a <a href="https://discord.com/developers/docs/change-log#bot-users-added-to-all-new-apps" target="_blank" rel="noopener noreferrer">bot user added</a></span><span class="discussion-id-f86ff52d-ec4b-4b89-9d91-ff6a869ffab7 discussion-id-f34b01b5-afc7-4b01-81c1-244eb7abb531 notion-enable-hover" data-token-index="3"><a href="https://discord.com/developers/docs/change-log#bot-users-added-to-all-new-apps" target="_blank" rel="noopener noreferrer"> during creation</a>, and</span> apps currently without bot users will be assigned one during migration. Please note, that if an app does not require a bot user, then the <a href="https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes" target="_blank" rel="noopener noreferrer">bot scope</a> can simply be omitted when installing.</p>
<h3 id="h_01H268004S5NANV88RBH0DZF57">App Name Character Limit</h3>
<p>Existing apps and bots will be unaffected by this change, at this time. However, the names of newly created apps and bots will be limited to 32 characters, and attempting to change an existing unverified app or bot’s name will also result in a 32 character limit.</p>
<h2 id="h_01GYA8Q7TRFF2Y16B1F9XGCK31">How to Prepare</h2>
<h3 id="h_01GYA87X9QZ19H2X6PJ3M35ZDH">Review Your Code</h3>
<p>With usernames changing, it is a good idea to review your code and ensure no logic relies on usernames.</p>
<ul>
    <li>If your code references usernames instead of IDs, we recommend updating this approach for a smoother transition.</li>
    <li>Identify code that will need updating if it relies on user payloads or the manipulation of discriminators. During migration, usernames will appear in payloads with a <code>#0</code> discriminator at the end. Make sure to account for this temporary discriminator when updating your code.</li>
</ul>
<h2 id="h_01H26BDRT8ASH1YVKG6HMGZ1J2">Frequently Asked Questions (FAQs)</h2>
<h3>Why isn’t Discord making this change for apps?</h3>
<p>Although bots are users under the hood, they still interact differently with Discord. Our username changes are all about making it easier to find and add your friends on Discord. Bots don’t have friends—they get a little lonely sometimes—so we’re keeping them as-is.</p>
<p>In the future, we may consider changing how apps are represented on Discord to make them more distinct from normal users so that you can show off the awesome things you build in a way that makes them feel distinct.</p>
<h3>Will users be able to claim my app’s name?</h3>
<p>First and foremost, we want users to be able to express themselves how they want on Discord. However, there will be some names that are blocked or reserved to combat potential abuse and impersonation. We want to ensure that users aren’t harmed by bad actors that may try to impersonate known and trusted entities on Discord.</p>
<p>Impersonation is against our terms of service and can be reported to our Trust and Safety team. We also have processes through which to act on Trademark disputes or DMCA takedowns. Those are all available through our online support form: <a href="https://dis.gd/contact">https://dis.gd/contact</a></p>
<h3>Will apps be able to update their names?</h3>
<p>Consider App names, business as usual! If yours is not verified, you can change its name within the app’s Developer Portal page. If your app is verified, you may <a href="https://dis.gd/developer-support" target="_self" rel="undefined">submit a request to Developer Support</a> and that request will be reviewed by a Support Agent.</p>
<p><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 15px;">As always, if you have any further questions please </span><a style="background-color: #282929; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 15px;" href="https://dis.gd/developer-support" target="_blank" rel="noopener noreferrer" data-darkreader-inline-bgcolor="">contact Developer Support</a><span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 15px;">.</span></p>