<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>[Editor’s Note: This article was amended on May 5, 2023 and May 10, 2023 to further clarify information on the rollout process for username changes and the use of the "@" symbol.]</p>
            <p><em>TL;DR: Discord usernames are changing to remove four-digit discriminators. Display Names are being added so how you appear to other users stays the same. We will be assigning priority to choose your new username based on when you registered for Discord, Nitro status, and ownership of partner and verified servers. For more information see our Help Center article </em><a href="https://dis.gd/usernames"><em>here</em></a><em>.</em></p>
            <p>Way back when Jason and I first built Discord in 2015, there were only a handful of us working on the product and I was personally responsible for designing and programming our username and identity systems. We were building Discord as a place to hang out with our friends while playing games. Back then I was playing Final Fantasy XIV and it was important to me that I show up in the Discord server as my in-game character. Years later, I spend most nights still hanging out in voice while playing FFXIV (maybe a little <em>too</em> much lol). Being able to be myself in these spaces and seeing others do the same is something I care about.</p>
            <p>Starting this month, however, we’re making some big changes to how usernames and identities work on our platform.</p>
            <p>The whole point of these changes is that we want to make it a lot easier for you and all the new users coming to Discord to connect and hang out with friends. And as Discord’s Co-Founder, I wanted to talk about these changes personally. We know that your username and identity are important, and we understand that some of you may not like this change and disagree with it. We know that this is an issue you feel strongly about.&nbsp;</p>
            <p>We also recognize that our current username format has been one of the things that makes Discord unique, and that this change makes our usernames look a lot like those on other platforms. To be blunt, that’s kind of the point. These weren’t easy decisions, and we didn’t come to them lightly. We’ve put a lot of thought into this (like…<em> a lot</em>), so I’d like to walk through how we got here and what’s going to happen next.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How We Got Here</strong></h2>
            <p>When we were first building Discord, one of our top priorities was to let you give yourself just about any name you wanted, join your friend’s server and hop on voice chat quickly and easily. We didn’t want people to ever hit a screen that said “Your Desired Username is Taken.” We also allowed usernames to be case-sensitive because originally, we didn’t even have a friend system, so no one had to type usernames manually. This became technical debt that we didn’t address adequately.</p>
            <p>Meanwhile, as Discord grew, we got a ton of requests to let people chat with one another even if they no longer shared a server, so we created a friend system. To make sure everything still worked, we exposed the four-digit suffix called a “discriminator.” With those four digits, “PhiBi#8936” could be differentiated from “PhiBi#9863”.</p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How Usernames Ended Up After Eight Years</strong></h2>
            <p>As Discord has grown and friending has become more popular, more problems have emerged. The technical and product debt we incurred years ago caught up with us and small issues that seemed to impact a few people started affecting tens of millions of people. <strong>The biggest problem: our current usernames can often be too complicated or obscure for people to remember and share easily</strong>.</p>
            <p>We've heard from tons of people that they've run into problems like these:</p>
            <ul role="list">
                <li>You try to share your username outside of Discord. Unfortunately, you either can’t remember the discriminator, have to explain which letters are uppercase and lowercase, or have to try to specify which special characters your name uses.</li>
            </ul>
            <ul role="list">
                <li>You meet someone IRL that you want to talk to on Discord, and they say “I’m Phibi Eight Nine Three Six!” You go home and add “phibi#8936” only to find out you added the wrong “Phibi” because your new friend’s username is actually “PhIBI#8936”.&nbsp;</li>
            </ul>
            <ul role="list">
                <li>You want to use a common name like “Mike” or “Jane” but there are already 9,999 Mikes or Janes so you’re blocked from that name altogether.</li>
            </ul>
            <ul role="list">
                <li>You like to change your username a lot and get rate limited.</li>
            </ul>
            <ul role="list">
                <li>Your friend says they changed their name to “vernacular” but actually it’s “𝖛𝖊𝖗𝖓𝖆𝖈𝖚𝖑𝖆𝖗” and you have trouble finding them.</li>
            </ul>
            <p>We spoke with a lot of you about how you add one another as friends and crunched some numbers. It turns out that:&nbsp;</p>
            <ul role="list">
                <li><strong>More than 40% of you</strong> either don’t remember your discriminator or <a href="https://www.reddit.com/r/discordapp/comments/1311wal/what_is_this_code_called/">don’t even know what a discriminator is</a>. That’s a big problem when discriminators are <em>required</em> to add a new friend.&nbsp;</li>
            </ul>
            <ul role="list">
                <li>Across Discord, <strong>almost half of all friend requests fail to connect the user with the person they wanted to match with</strong>, mostly because users enter an incorrect or invalid username due to a combination of missing discriminator and incorrect casing.&nbsp;</li>
            </ul>
            <p>This isn’t a great experience, and we want to fix it. We want Discord to be a fun, easy place to hang out with friends, and it’s often just too difficult or complicated to connect with the people you care about.</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How We Approached the Problem</strong></h2>
            <p>We have considered <em>many</em> potential solutions to these issues and most ended up being “halfway” fixes that didn’t solve the fundamental difficulty of easily remembering and sharing your identity with friends.&nbsp;</p>
            <p>Here’s an example:</p>
            <p>We decided at one point that the most important issue to solve was case-sensitivity and special characters, so there could be only one phibi#8936, instead of allowing permutations like PhIBI#8936, and PHibi#8936.&nbsp;</p>
            <p>Unfortunately, we found that nearly one-third of our active users would be forced to change their name just to accommodate this. Meanwhile, people from regions where non-alphanumeric characters are common in names, such as Asia, would have difficulty fully representing themselves.</p>
            <p>So then we considered making that change but also enabling a separate global Display Name that could include special characters, a bit like how server nicknames work currently. But we realized that then we would have an even <em>more</em> complex system with both a Display Name and a username that still included the four-digit discriminator.&nbsp;&nbsp;</p>
            <p>We came to the conclusion that if we were going to ask a lot of our users to make a change, we needed a more comprehensive and robust long-term solution - one that gives people the power to have a Display Name they can change anytime with very relaxed rate limits. Think of them like a global nickname.</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How We’re Improving Usernames on Discord</strong></h2>
            <p>After we transition over the course of this year, everyone will have:</p>
            <p>1) A unique alphanumeric<strong> username</strong> without a discriminator, such as “phibi”. Think of this merely as a technical necessity. This username will be used only for connecting with other users (friending) and telling users apart when you check their profiles. They’ll be limited to lowercase characters (a-z), numbers (0-9) and two special characters (period and underscore). They’ll be much easier to remember, verbalize and share with your friends. You’ll be able to continue to change your username, but not too frequently.</p>
            <p>2) A non-unique <strong>Display Name</strong> that can include just about anything (as long as it adheres to our <a href="https://discord.com/guidelines">Community Guidelines</a>), including special characters, spaces, emojis and non-Latin characters. Your new Display Name will be <strong>how you primarily appear</strong> and will be your most prominent form of identity. Think of this as your main name. You will be able to change your Display Name whenever you want, even minute to minute.&nbsp;</p>
            <p>By default, your new Display Name will be your old username without the discriminator, <strong>so your friends continue to recognize you</strong>. So if you used to be “PhiBi#8936”, your new default Display Name will be “PhiBi”. Here’s an example:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1106pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/645c2a012698cf52d94bbb25_Username%20example.png" loading="lazy" alt="A Discord profile with a new username. Their username is now &quot;phibiscool,&quot; and their display name is &quot;PhiBi.&quot;"></div>
            </figure>
            <p>In addition, your previous username and discriminator will continue to work as an alias after the conversion process is done, so old friends who don’t know your new username yet will continue to be able to add you.&nbsp;</p>
            <p>And for the developers out there, while numerical User IDs will remain the same, learn more about some other changes that may impact your Apps <a href="https://dis.gd/app-usernames">here.</a>&nbsp;</p>
            <p>If you already use a Server Nickname in a particular community, that Server Nickname will still take priority over your Display Name in that server.</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How We’re Rolling Out New Usernames</strong></h2>
            <p>In the coming weeks, we’ll begin notifying users when they’re able to update their account to a new username, so be on the lookout for an in-app prompt when it’s your turn.&nbsp;</p>
            <p>During the transition, all Discord users will be asked to choose a new username, and access will roll out slowly over the course of several months. We want to be particularly considerate of longtime Discord users who have had their usernames for quite awhile, so we will be assigning priority to choose your new username based on when you registered for Discord.&nbsp;In terms of rollout, we’re starting with access to owners of partner and verified servers, then to all users based on the age of their account in the coming months, starting with 2015. Current Nitro subscribers paying for the ability to customize their discriminator that registered for Nitro on or before March 1, 2023 will also be given early access.</p>
            <p>We recognize that this is a big change. There may be hiccups with this process, and it may be tough to part ways with that “#0001” that’s meant a lot to you over the years. We’ll be doing everything we can to manage things as smoothly as possible.</p>
            <p>Jason and I truly believe this is the right thing to do to help more people hang out with their friends on Discord, which is what we’re all about.&nbsp;</p>
            <p>Thank you for being part of Discord. For more details and information, please visit the links below:</p>
            <ul role="list">
                <li><a href="https://dis.gd/usernames">Help Center</a></li>
                <li><a href="https://dis.gd/app-usernames">Developer Help Center </a></li>
            </ul>
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