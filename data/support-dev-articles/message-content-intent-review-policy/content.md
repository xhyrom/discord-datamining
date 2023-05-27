<p>User privacy and safety are high priorities for Discord, including with the use of bots. In August, we announced message content access for bots will require verification and privileged gateway intent approval for any bot operating in 100 servers or more. <strong>Our goal is to ensure that message privacy is the default state of the world for bots operating at scale on Discord, and that message content access is only granted based on the need for a bot's core functionality.</strong></p>
<p>There are of course plenty of use-cases where a bot has a legitimate need to access message content. Some common ones we see:</p>
<ul>
    <li>Content moderation</li>
    <li>Gameplay interactions</li>
    <li>Machine learning and neuro-linguistic applications</li>
    <li>Community archival features</li>
    <li>Message proxying and chat relays</li>
</ul>
<p class="callout"><span class="discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a discussion-level-1 discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a notion-enable-hover" data-token-index="0" data-reactroot="">❓ Got questions about your use case? Make a ticket at </span><a class="discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a discussion-level-1 discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a notion-link-token notion-enable-hover" href="https://dis.gd/contact" target="_blank" rel="noopener noreferrer" data-token-index="1" data-reactroot=""><span class="link-annotation-unknown-block-id--1942738211">https://dis.gd/contact</span></a><span class="discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a discussion-level-1 discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a notion-enable-hover" data-token-index="2" data-reactroot=""> using the Bot &amp; API Developer Support form, or ask in the Discord Developers server! </span></p>
<p><span class="discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a discussion-level-1 discussion-id-d7cdc17c-06e5-4099-9aeb-5639d08a2c0a notion-enable-hover" data-token-index="2" data-reactroot=""><span class="discussion-id-19b91ee2-1ef5-4f83-af27-62b4b4638918 discussion-level-1 discussion-id-19b91ee2-1ef5-4f83-af27-62b4b4638918 notion-enable-hover" data-token-index="0" data-reactroot="">To be approved for verification to use message content, </span><span class="discussion-id-19b91ee2-1ef5-4f83-af27-62b4b4638918 discussion-level-1 discussion-id-19b91ee2-1ef5-4f83-af27-62b4b4638918 notion-enable-hover" data-token-index="1" data-reactroot="">a bot's use-case for accessing message content must:</span></span></p>
<ul>
    <li>
        <strong>provide a unique, compelling, and/or transformative experience to users</strong>;
    </li>
    <li>
        <strong>be non-invasive</strong> and put user privacy and safety front and center;
        <ul>
            <li>
                <strong>Provide a link to your Privacy Policy</strong> for users to easily find.
            </li>
        </ul>
    </li>
    <li>
        <strong>cannot be feasibly migrated</strong> to our new interaction options;
    </li>
    <li>
        <strong>be relevant</strong> to the bot's mission and existing feature set;
    </li>
    <li>
        <strong>not represent any significant impact to our infrastructure</strong>.
    </li>
</ul>
<p>We recommend that all bots <span class="notion-enable-hover" data-token-index="1" data-reactroot="">begin migration to our new interaction options where at all possible,</span> even if approved for the message intent.</p>
<p><strong><span class="wysiwyg-font-size-large">What does this article cover?</span></strong></p>
<ul>
    <li><a href="#h_01FJ9G3JV1H0HN25C4V7X3RHD4" target="_self"><span class="wysiwyg-font-size-large">Background</span></a></li>
    <li>
        <a href="#h_01FJ9G3RTCBDCXCBEN59PTG195" target="_self"><span class="wysiwyg-font-size-large">Criteria for Approval</span></a>
        <ul>
            <li><a href="#h_01FJ9G3XGF17JTSSY9GMW90VRS" target="_self"><span class="wysiwyg-font-size-large">Unique</span></a></li>
            <li><a href="#h_01FJ9G42JH1V3849KK3FRH9CCN" target="_self"><span class="wysiwyg-font-size-large">Compelling</span></a></li>
            <li><a href="#h_01FJ9G47WXN5MFSBZBKC13VQB8" target="_self"><span class="wysiwyg-font-size-large">Transformative</span></a></li>
            <li><a href="#h_01FJ9G4DRZ22D1ZP0CKSADVGQW" target="_self"><span class="wysiwyg-font-size-large">Non-Invasive</span></a></li>
        </ul>
    </li>
    <li><a href="#h_01FJ9G4NPF3D3H07T1C77XHXKH" target="_self"><span class="wysiwyg-font-size-large">Feasibility of migration</span></a></li>
    <li><a href="#h_01FJ9G4TMMJDZFP3RYFPED7KE1" target="_self"><span class="wysiwyg-font-size-large">Library Issues</span></a></li>
    <li><a href="#h_01FJ9G50PSGEPPY4554SKGGR9Q" target="_self"><span class="wysiwyg-font-size-large">Relevancy to bot</span></a></li>
    <li><a href="#h_01FJ9G55R201JADEZ67HN4QKJM" target="_self"><span class="wysiwyg-font-size-large">Impact to infrastructure</span></a></li>
    <li><a href="#h_01FJ9G59ZPXE36S1NHS5VCQSDD" target="_self"><span class="wysiwyg-font-size-large">Reporting</span></a></li>
    <li><a href="#h_01FJ9G5EF2G3B511NEDFCQSP1Z" target="_self"><span class="wysiwyg-font-size-large">Enforcement</span></a></li>
</ul>
<h2 id="h_01FJ9G3JV1H0HN25C4V7X3RHD4">Background</h2>
<p class="callout"><span class="discussion-id-de15683b-bb25-40e9-b2d3-cac028c16989 discussion-level-1 discussion-id-de15683b-bb25-40e9-b2d3-cac028c16989 notion-enable-hover" data-token-index="0" data-reactroot="">⚠️ If your Bot is operating in 100 servers or less, this change doesn't impact you.</span></p>
<p>If you're reading this, it's because you've heard the big news—as of August 31, 2022, message content will require verification and privileged gateway intent approval for any bot operating in over 100 servers. If your bot is operating in fewer than 100 servers, this change doesn't impact you.</p>
<p>Our goal is to ensure that message privacy is the default state of the world for bots operating at scale on Discord, and that message content access is only granted based on the need for a bot's core functionality. Message content access <strong>is not going away</strong>. There will always be unique, compelling, and transformative features that require access to messages in a server: from moderation to gameplay, to things we can't even imagine yet. Bots will continue to have access to any messages that specifically @mention them, as well as to DMs directly with the bot, regardless of message intent approval.</p>
<p>If a bot operating at scale has access to messages in bulk, we have to ensure it has that access with good reason. Approval for message content also means that bot is using messages in ways that cannot be migrated to our newer interaction options. <strong>Handling message data is a huge responsibility and can greatly impact the privacy and safety of users on Discord.</strong></p>
<p>Below, we'll explain what the different criteria mentioned above mean and why they're important to our thought process.</p>
<h2 id="h_01FJ9G3RTCBDCXCBEN59PTG195">Criteria for Approval</h2>
<p>We've rooted our approval philosophy in three basic tenets. We look for features that are <span class="notion-enable-hover" data-token-index="1" data-reactroot="">unique, compelling, </span>and<span class="notion-enable-hover" data-token-index="3" data-reactroot=""> transformative</span>. Let's talk about what that means in general, and what it will mean for messages moving forward.</p>
<h3 id="h_01FJ9G3XGF17JTSSY9GMW90VRS">Unique</h3>
<p class="callout">📝 We consider <span class="notion-enable-hover" data-token-index="1" data-reactroot="">UNIQUE</span> to be features that are <span class="notion-enable-hover" data-token-index="3" data-reactroot="">not currently available in any capacity within the client</span>.</p>
<p><span class="notion-enable-hover" data-token-index="0" data-reactroot="">If a feature you are building is something the client already does to some capacity, we likely wouldn't grant you intents approval for that feature.</span></p>
<ul>
    <li>
        <strong>Example:</strong> Let's use Guild Presences and activity data as an example of how we apply these criteria generally. When working with Guild Presences, and your only use case is to count how many users are online in a given server. The client already does this—you can just check the sidebar in any channel with @everyone access! Because the client does this near identically, we wouldn't consider your use case a unique one, and thus wouldn't grant you Presences access solely to provide that kind of feature.
        <ul>
            <li>Note that what features are "unique" can change as the client does. We reserve the right to deny or remove Privileged Intents when this functionality is exposed through the client.</li>
        </ul>
    </li>
</ul>
<h3 id="h_01FJ9G42JH1V3849KK3FRH9CCN">Compelling</h3>
<p class="callout">📝 We think of <span class="notion-enable-hover" data-token-index="1" data-reactroot="">COMPELLING</span> as features that are <span class="notion-enable-hover" data-token-index="3" data-reactroot="">clear, self-explanatory, and immediately understandable why this feature should exist and where it would be useful</span>.</p>
<p>Of all our criteria, features being considered compelling is perhaps the most nuanced, which is why we encourage you to share as much detail as you possibly can.</p>
<p>Describe your features in-depth. Tell us why you think your features are cool, and why you think your users need them. We love it when you tell us stories about the software you're making, so tell us your stories!</p>
<p>With that in mind, simply requesting approval for messages so you can maintain custom prefixes or traditional command interfaces will result in a denial, as we don't believe that to be a compelling use case on its own.</p>
<h3 id="h_01FJ9G47WXN5MFSBZBKC13VQB8">Transformative</h3>
<p class="callout">📝 We consider <span class="notion-enable-hover" data-token-index="1" data-reactroot="">TRANSFORMATIVE</span> as <span class="notion-enable-hover" data-token-index="3" data-reactroot="">using the information you collect through message intents to provide new functionality or features.</span></p>
<p>Just resurfacing the message content you're collecting in a new way generally isn't considered "transformative". Often, developers will request approval for intents simply so they can share user information, server data, or other statistics. For the most part, that kind of thing <em>isn't</em> transformative.</p>
<p><strong>Example:</strong> Let's use Guild Presences and activity data as an example of how we apply these criteria generally. If you're just displaying what someone's activity status is with some sort of !activity [user ID here] command, for example, that's simply recreating functionality that exists in the client. But, if you're looking at someone's activity data and acting on it in ways that the client can't, that'd be transformative. For example, a command that provides lyrics for a song mentioned in someone's Now Playing activity status.</p>
<h3 id="h_01FJ9G4DRZ22D1ZP0CKSADVGQW">Non-Invasive</h3>
<p>In addition to looking for features that are unique, compelling, and transformative, <strong>we also require that use cases respect user privacy and safety.</strong></p>
<p>If you intend to collect user data to provide some degree of functionality, you must:</p>
<ul>
    <li>Ensure that you are complying with all relevant privacy laws. This includes <strong>clearly disclosing</strong> what data you collect and how you use it.</li>
    <li>Post a <strong>Privacy Policy</strong> publicly and make it accessible to users (and provide us with a link).</li>
    <li>Allow users to <strong>opt out</strong> of providing you that data, even if that means not being able to participate in the feature.</li>
    <li>Provide an accessible way for users to request access to and deletion of their data.</li>
</ul>
<p>As a reminder, it's your responsibility to ensure that you have reviewed and comply with our Developer Terms, Developer Policy, Terms of Service, and Community Guideline.</p>
<p><strong>Example:</strong> Let's use Guild Presences and activity data as an example of how we apply these criteria generally. Collecting a user's Presence information to gather a rough idea of what time zone they're in based on their time spent active on platform, without users volunteering that information to you themselves. The most invasive features are ones that are used to provide advertising and marketing within servers, which is explicitly disallowed by our <strong>Developer Policy</strong> already.</p>
<h2 id="h_01FJ9G4NPF3D3H07T1C77XHXKH">Feasibility of migration</h2>
<p>When reviewing requests for message content, we're going to consider the <strong>feasibility of migrating your stated functionality to interactions where possible</strong>. Our goal is to either maintain the functionality of those features that fit the above criteria as they exist now, or to help you migrate those features to interactions where possible.</p>
<p><strong>If a feature cannot be migrated to interactions in any capacity and meets our other criteria, you'll likely get message content approval.</strong> If, however, a feature <em>can</em> be migrated to interactions with some degree of modifications to your user experience, we'll likely lean towards helping you migrate that functionality rather than granting you message approval.</p>
<h2 id="h_01FJ9G4TMMJDZFP3RYFPED7KE1">Library Issues</h2>
<p>When discussing the feasibility of migration, it's of course important for us to consider the impact of community-driven libraries and their adoption of our interaction options. We've been working with the libdev community since early summer to try and help them adopt interactions as quickly and smoothly as possible.</p>
<p>That said, <strong>we won't be able to grant message intents in cases where your only blocker preventing migration is a lack of support for interactions in your chosen development library.</strong></p>
<ul>
    <li>If you are on a library that does not support interactions, and your features are not otherwise unique or compelling enough to justify message intent approval, please consider exploring library extensions, alternative libraries, or alternative languages where possible.</li>
</ul>
<p><strong>Bots will continue to have access to any messages that specifically @mention them, as well as to DMs directly with the bot, regardless of message intent approval.</strong> If you're developing with a library that does not support migration to interactions, you can rely on this access as a fallback.</p>
<h2 id="h_01FJ9G50PSGEPPY4554SKGGR9Q">Relevancy to bot</h2>
<p>Our goal is to ensure that developers are only getting access to message content where it's necessary to provide features that are directly relevant to their users. With that in mind, for the message intent, we'll be a bit more discerning about whether or not a proposed feature is relevant to your bot's overall stated goals.</p>
<p>Plan to explain why your bot in particular needs accesses to message content in order to enable that specific functionality.</p>
<p class="callout"><span class="wysiwyg-color-red110">🛑 We reserve the right to re-review privileges and verification to any bot at random, on a periodic basis to ensure they are compliant with our policies. We may revoke verification for a verified bot if the bot changed significantly from the stated goals and purposes in the original verification application and has not been updated.</span></p>
<h2 id="h_01FJ9G55R201JADEZ67HN4QKJM">Impact to infrastructure</h2>
<ul>
    <li>Features that incentivize spam.</li>
    <li>Features that put undue load on our databases (e.g. hammering the same resource very fast forever).</li>
    <li>Features that incentivize selfbotting. </li>
</ul>
<h2 id="h_01FJ9G59ZPXE36S1NHS5VCQSDD">Reporting</h2>
<p>If you find a bot that is not compliant with this policy, please report it to us by filling out the form here: <a href="https://dis.gd/report">https://dis.gd/report</a></p>
<h2 id="h_01FJ9G5EF2G3B511NEDFCQSP1Z">Enforcement</h2>
<p>This policy is enforced by our Developer Support team. The team will review your application, may request further information, and can make the decision to verify, not verify, or revoke verification depending on the bot's compliance with this policy and all other applicable terms and policies.</p>
<p>Questions, comments, concerns? We've got the <a href="https://dis.gd/contact" target="_blank" rel="noopener noreferrer">Developer Support contact form</a> and the <a href="https://discord.gg/4Yj6tMbDbg" target="_blank" rel="noopener noreferrer">Discord Developers server</a> ready and waiting for your questions as we approach approval day.</p>