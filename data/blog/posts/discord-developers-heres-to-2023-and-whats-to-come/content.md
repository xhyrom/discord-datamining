<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Hi developers! As we bid farewell to 2023, it’s time to reflect on the incredible journey we’ve had together in the world of developing on Discord. From sharing groundbreaking updates to a thriving developer community that never stopped growing, this year has been nothing short of extraordinary. <br></p>
            <p>A few weeks ago, the Discord Developers server, the official home for all devs on Discord (or “DDevs” for short) celebrated a huge milestone: <a href="https://discord.com/blog/ddevs-celebrates-250k-members">reaching a quarter million members</a>! We offer resources for building and growing both on and off-platform, including peer support and Discord-led events. Past events include a <em>DDevs Buildathon</em>, recurring events called “<em>Code &amp;&amp; Chat</em>s,” and held App Directory Peer Review sessions. We also host quarterly <em>Platform Updates</em> Stage Events with our amazing Developer Relations (DevRel) team and surprise staff guests.</p>
            <p>DDevs, Discord Developers, developer communities… you figure out where I’m going with this? 👀If you guessed we’re hosting the end-of-year event in the Discord Developers community, <em>ding ding ding</em>! You’re right! Your award: an invitation to the event TODAY at noon Pacific! <em>*cue fanfare*</em>&nbsp;</p>
            <p>During this special <em>Platform Updates: 2023 Recap</em> event, we’ll review platform highlights from the year and preview exciting content planned for 2024. We’ll also host a Q&amp;A with DevRel and other Discord staff. You don’t want to miss this one — we got a LOT planned!</p>
            <div class="w-embed">
                <div class="btn-wrapper"><a data-track="https://discord.gg/discord-developers?event=1182444104249000068" href="https://discord.gg/discord-developers?event=1182444104249000068" class="btn-blog w-button" target="_blank">RSVP to the Discord Developers Platform Updates Event</a></div>
            </div>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Developer Tools<br></strong></h2>
            <p>Speaking of DevRel, I’ve brought in the help of a special friend from the DevRel team to add some event highlights below. Let’s go over to Shay, Senior Developer Advocate, with our 10-day weather foreca-…oops, wrong blog. Take it away, Shay!</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1600px">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578bac72d2ddd4bd18848fb_tFCgt5lLWLs7Vm4D7sU0DPKMQqD4sQeFjZUkL-MST2StUUlSQadpiDxCk_-AVygpTtnc_Kj0EYx5vFhyM3s3qZM2CQLOYE-uK2dI_tvRwswkbpND8_ImkgUklDjcggXPc5wGBOj9ugl3e8EMXk3T5KA.png" alt=""></div>
            </figure>
            <p>Shay here! This year, we invested a ton in building out new tools and resources that make it easier for developers on Discord to build and debug their apps.</p>
            <p>We released a public preview of our <a href="https://github.com/discord/discord-api-spec">OpenAPI 3.1 spec</a>, which makes it easier and more reliable than ever before to build with our HTTP API. The OpenAPI spec is generated directly from our source code, providing a more accurate representation of the Discord API.</p>
            <p>After that, we took our newly created OpenAPI spec for a spin by using it to generate a new <a href="https://www.postman.com/discord-api">Postman collection</a>, which makes it easier to test your apps and explore our API.</p>
            <p>Last but not least, we released a new <a href="https://discord.com/developers/embeds">Embed debugger</a> that lets you preview and debug how your site’s embed will appear in Discord. You could say it’s… embed-der for everyone!</p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Premium App Subscriptions <br></strong></h2>
            <p>In October, we announced Premium App Subscriptions natively within Discord. Now, developers within the US, UK, and European Union can offer additional features to their apps for a monthly subscription fee.&nbsp;</p>
            <p>What sorts of features? Well, that’s up to you and your dev team to decide! We’ve already seen devs offer additional moderation features, or just as a way to donate without a new feature as a reward.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:440px">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/657b9a0a8844db26de8bd02e_yLSwTf_GXlRC10wJM1QTtp5Xdo9iFoH4ONuC6LUusWt3uSH38R9evQU_6ne153t1I8NCxEA04707jBY7rrotlKndgbb5hBQcgLh5TMcJ52CftF4uqGWG1Krp_l2-GcPsyqJgvrH7Z-IOZirpTToWxLo.png" alt="An example of a user going through the purchase flow to subscribe to “Plant Pal Plus.”"></div>
            </figure>
            <p>There’s a whole ton more to Premium App Subscriptions — check out its <a href="https://discord.com/blog/premium-app-subscriptions-for-discord-developers">dedicated blog</a> and <a href="https://discord.com/build/premium-apps">webpage</a> for more deets.&nbsp;</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Platform &amp; API Updates<br></strong></h2>
            <p>We also made a bunch of small improvements to our API that might have not gotten their own blog post, but we think they’re pretty cool and we know developers have been asking for them. There are too many improvements to include everything, but to highlight a few:</p>
            <ul role="list">
                <li>We added <a href="https://discord.com/developers/docs/change-log#team-member-roles">new team member roles in the Discord Developer Portal</a> to dev teams, making it easier to manage dev team roles and permissions.</li>
                <li>You can now define default values when creating auto-populated select menus using the new <a href="https://discord.com/developers/docs/change-log#default-value-in-autopopulated-select-menus">`default_values` field</a>.</li>
                <li>We let bot users start updating their activity state, allowing them to <a href="https://discord.com/developers/docs/change-log#activity-state-for-bot-users">set their own custom statuses</a>.</li>
                <li>And finally, we added new <a href="https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-">markdown formatting options</a>, like masked links and headers, that can be used by apps and users alike.</li>
            </ul>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Automod Updates<br></strong></h2>
            <p>We didn’t stop at releasing AutoMod APIs last year. Improvements were made to AutoMod for both users and apps, including <a href="https://discord.com/developers/docs/change-log#add-join-raid-and-mention-raid-fields">new fields</a>, <a href="https://discord.com/developers/docs/change-log#increase-auto-moderation-keyword-limits">keyword limit increases</a>, and a brand new shiny <a href="https://support-dev.discord.com/hc/en-us/articles/13847462843543-Introducing-the-AutoMod-Badge-">“powered by AutoMod” badge</a> for bot users.&nbsp;</p>
            <p>Back to you in the studio, bitwisecat! 😽</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1600px">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578bac72d2ddd4bd18848fb_tFCgt5lLWLs7Vm4D7sU0DPKMQqD4sQeFjZUkL-MST2StUUlSQadpiDxCk_-AVygpTtnc_Kj0EYx5vFhyM3s3qZM2CQLOYE-uK2dI_tvRwswkbpND8_ImkgUklDjcggXPc5wGBOj9ugl3e8EMXk3T5KA.png" alt=""></div>
            </figure>
            <p>Thanks, Shay! To everyone watching from home, we hope you can join us in the Discord Developers community for our <em>Platform Updates: 2023 Recap</em> event today at Noon Pacific. Can’t make it? No problem — a recording will be shared in DDevs after the event — you’ll find it in the #server-news announcement channel.</p>
            <p>We’ll host one final event to cap off 2023, a DDevs <em>Activities Game Night</em>! Come play some Activities with Discord Staff on both Thursday, December 21st, and Friday, December 22nd in the DDevs server.<br><br>From all of us at Discord, happy holidays and happy new year! We hope your New Year’s resolutions include building more on Discord, and we can’t wait to show you what’s in store for 2024!&nbsp;</p>
            <div class="w-embed">
                <div class="btn-wrapper"><a data-track="https://discord.com/invite/discord-developers" href="https://discord.com/invite/discord-developers" class="btn-blog w-button" target="_blank">Join the Discord Developers server</a></div>
            </div>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>