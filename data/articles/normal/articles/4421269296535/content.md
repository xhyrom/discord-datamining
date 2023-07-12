<p>We’ve heard from moderators and admins how much effort it takes to manage your Community and how important it is to more easily create and maintain a safe space for your members. In our mission to make it easier to keep your Communities safe on Discord, we're introducing a new auto-moderation tool called AutoMod, for short. With AutoMod, you'll get access to different content filters that let you automatically detect - and even block - undesirable and risky content before it is ever posted.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974151852311" alt="automod_header.png"></p>
<p><span class="wysiwyg-font-size-large"><strong>What does this article cover?</strong></span></p>
<ul>
    <li><a href="#h_01GV3GPHP4ES8CJ4MRXWHNDDDD" target="_self">What is AutoMod?</a></li>
    <li><a href="#h_01GV3GPTD3NTNMY5TCQCFX4X6Z" target="_self">What is AutoMod AI?</a></li>
    <li><a href="#h_01GV3GPY5FWFD66V889QXYAVSE" target="_self">How to Set Up Server Rules</a></li>
    <li>
        <a href="#h_01GV3GQ8B6WR17JJA5KX92GDHT" target="_self">What are Keyword Filters?</a>
        <ul>
            <li><a href="#h_01GV3GQDQD4EJH71R6PA5C6DAC" target="_self">How to Set Up Keyword Filters for AutoMod</a></li>
            <li><a href="#docs-internal-guid-57931522-7fff-24d2-3f2d-58f601b6d462" target="_self"><span id="docs-internal-guid-26a35128-7fff-3ac4-dc68-48dcdcc8b354">Block Words in Server Member Usernames or Server Nicknames</span></a></li>
        </ul>
    </li>
    <li>
        <a href="#h_01GV3GQSB85NVWN1KQJ8AKZYC8" target="_self">What are Spam Filters?</a>
        <ul>
            <li><a href="#h_01GV3GR6B7X9461TJYBJFYSHMK" target="_self">How to Set Up Spam Filters for AutoMod</a></li>
        </ul>
    </li>
    <li><a href="#h_01GV3GRDBMVE8GDA7Q3JQSBRC5" target="_self">Frequently Asked Questions</a></li>
</ul>
<h1 id="h_01GV3GPHP4ES8CJ4MRXWHNDDDD">WHAT IS AUTOMOD?</h1>
<p><strong>AutoMod</strong> is a system of multiple content filters designed to make content moderation easier and less work for moderators. Some filters, like Keyword Filters, are configurable so you can have AutoMod automatically detect and block messages containing specific words or phrases you find harmful to your Community before they’re even posted. Other filters we’re building are powered by machine learning algorithms to detect and block harmful or dangerous messages, such as links to malware.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974156206103" alt="automod_example.png"></p>
<p>AutoMod prevents unwanted messages from being posted in your Community across all of your #text-channels, along with other messaging surfaces like threads and text chat in voice channels. This way, you can feel more comfortable providing your Community with more ways to talk and interact with each other without worrying about adding more moderation work onto your plate. </p>
<p class="wysiwyg-text-align-center"><br><img src="https://support.discord.com/hc/article_attachments/12974178178327" alt="automod_systemmessage.png"></p>
<p class="wysiwyg-text-align-left">You can also choose to have AutoMod send you alerts containing who-what-where information about blocked messages to a dedicated, private channel of your choice to help you identify and act on potential bad actors and unwanted behavior within your Community.</p>
<h1 id="h_01GV3GPTD3NTNMY5TCQCFX4X6Z">WHAT IS AUTOMOD AI?</h1>
<h3>
    <span style="color: #434343;" data-darkreader-inline-color="">This feature is in alpha for a small % of servers. You can check to see if you have it available by going to your AutoMod settings page, </span><strong><span style="color: #434343;" data-darkreader-inline-color="">Server Settings &gt; AutoMod</span></strong><span style="color: #434343;" data-darkreader-inline-color=""> and look for the </span><strong><span style="color: #434343;" data-darkreader-inline-color="">Enforce Server Rules</span></strong><span style="color: #434343;" data-darkreader-inline-color=""> option.</span>
</h3>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12978222390935" alt="automod_ai.png"></p>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">Our team at Discord is always working to do more. Sometimes it isn’t the words themselves that are the problem, but the underlying intent or context in which they are used. For example, a genuine user asking about  the “leading cause of </span><strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">death to hamsters</span></strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">” is not the same as another ill-willed user declaring “</span><strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">death to hamsters</span></strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">.”</span></p>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">To address this, </span><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">we're experimenting with OpenAI technology to</span> <span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">power AutoMod’s ability to detect message context and flag it if it violates a community’s rule - </span><em><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">even if an admin or moderator had not defined it in the AutoMod settings page.</span></em></p>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">To enable it go into </span><strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">Server Settings &gt; AutoMod &gt; </span></strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">(toggle one) </span><strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">Enforce Server Rules.</span></strong></p>
<h3><span style="color: #434343;" data-darkreader-inline-color="">You must set up server rules in either your Rules channel or in your Rules Screening page. AutoMod AI uses these rules to interpret if a message is in violation. Don’t know how to set up server rules? Check out <a href="https://support.discord.com/hc/en-us/articles/1500000466882" target="_blank" rel="noopener noreferrer">How to Set Up Server Rules</a>.</span></h3>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974220577431" alt="image16.png"></p>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">From there, AutoMod will be able to interpret your Community Rules page, the server name &amp; channels, and intelligently auto-flag any unwanted messages across your server for you and your moderators in a single channel that you’ve selected.</span></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974222002839" alt="image2.png"></p>
<p><strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">Caption: </span></strong><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">AutoMod AI will enforce the rules that all members are able to see in the Rules channel or Rules Screening page.</span></p>
<h2 id="h_01GV3GPY5FWFD66V889QXYAVSE">HOW TO SET UP SERVER RULES</h2>
<p>There are two ways to set up Rules for your server.</p>
<p><strong>Option 1</strong></p>
<p><em>Rules Screening <img src="https://support.discord.com/hc/article_attachments/12974274187927" alt="image12.png"></em></p>
<p>1. Navigate to <strong>Server Settings &gt; Rules Screening</strong></p>
<p>2. Under <strong>‘Set up server rules!</strong>’ select <strong>Get Started</strong></p>
<p>3. Add your community’s rules here</p>
<p><strong>Option 2</strong></p>
<p><em>Rules or Guidelines Channel</em></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974277810327" alt="image6.png"></p>
<p>1. Navigate to <strong>Server Settings &gt; Safety Setup </strong></p>
<p>2. Once you are in Safety Setup, select <strong>Edit</strong> within <strong>DM and Spam Protection</strong></p>
<p>3. <strong>Then, enable Members must accept rules before they can talk or DM to set up rules for your community </strong></p>
<p>You can check out our Rules Screening <a href="https://support.discord.com/hc/en-us/articles/1500000466882" target="_blank" rel="noopener noreferrer">article</a> to learn more.</p>
<h1 id="h_01GV3GQ8B6WR17JJA5KX92GDHT">WHAT ARE KEYWORD FILTERS?</h1>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">AutoMod’s Keyword Filters let you set up the following rules to determine what AutoMod should look out for and how to respond when it flags a message containing certain words or phrases: </span></p>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">1. Commonly Flagged Words Rule - Use ready-made word lists to filter commonly flagged words</span></p>
<p><span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">2. Custom Keywords Rule - Build your own list of keywords and terms to filter in your Community </span></p>
<p>We understand it can be tough and time-consuming to think of all the words you’d want to filter out from scratch while also moderating a Community. To get started with AutoMod, you can quickly set up a Commonly Flagged Words rule to enable ready-made word lists that protect your Community from exposure to messages containing commonly flagged words at the push of a button:</p>
<p><strong>Categories of Commonly Flagged Words:</strong></p>
<ul>
    <li>
        <strong>Insults and Slurs </strong>- Protect members of your Community from personally insulting material targeted at them, including terms that may be considered slurs or hate speech.
    </li>
    <li>
        <strong>Sexual Content</strong> - Keep sexually explicit language out of your server to keep your Community family-friendly.
    </li>
    <li>
        <strong>Severe Profanity</strong> - Block the more egregious forms of profanity, while still allowing for mild forms of cursing or swearing.
    </li>
</ul>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974312213271" alt="image4.png"></p>
<p>Because every Community has their own standards on what words are deemed acceptable, you’ll have the ability to exempt words from these lists! Exempted words will no longer be flagged and will not receive a response from AutoMod. For words that you want to allow in your Community but are being filtered by our word lists, simply add them under “Add exempt words.”  </p>
<h2 id="h_01GV3GQDQD4EJH71R6PA5C6DAC">HOW TO SET UP KEYWORD FILTERS FOR AUTOMOD</h2>
<p>In order to set up your own rules for Commonly Flagged Words or Custom Keywords, you can go to the AutoMod tab in your Server Settings. </p>
<ol>
    <li>Go to Server Settings &gt; AutoMod to see the different keyword filter options for AutoMod.</li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974314950295" alt="automod_commonlyflagged_words.gif"></p>
<ol start="2">
    <li>Under Commonly Flagged Words, press “Set Up” to select from any of the three ready-made word lists of commonly flagged words.</li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974349989143" alt="automod_commonlyflagged_words_setup.gif">3. Create your own rules with words and phrases you want AutoMod to filter out by selecting “Set Up” under “Custom Keyword Rule” and entering keywords and phrases.</p>
<p>Tip: If you spot a message containing a word you want to add to your rules, you can quickly do so by highlighting the word in the message you want to add, right-clicking, and selecting "Flag Word" to add the word to an existing or new rule of your choice.</p>
<p>3. Choose to have AutoMod block flagged messages entirely with a custom message, send you an alert, and/or time out users* when it flags a message. <br>*<em>Timeout user response is only available under Custom Keyword Rules</em></p>
<p>When AutoMod blocks a message, a member will receive a message only visible to them. To append your own message, you can select “Edit Custom Message” and enter your own (up to 150 characters). </p>
<p>To be alerted of flagged messages caught by AutoMod, you must select a channel for AutoMod to send alerts to. Make sure to choose a channel only accessible by admins and/or moderators.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974353764503" alt="automod_commonlyflagged_words_modchannel.gif"></p>
<p class="wysiwyg-text-align-center">Block Message or Send an Alert for flagged messages</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974411438743" alt="image15.gif"></p>
<p class="wysiwyg-text-align-center">Timeout user for flagged messages</p>
<ol start="3">
    <li>Add roles or channels you’d like to exempt. </li>
</ol>
<p>If you set a channel to be exempt, any messages in Threads or Text Chat in Voice in that channel will also be exempt. Users with Admin and Manage Server permissions are always exempt from filter rules.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974383035671" alt="image10.png"></p>
<h2 id="docs-internal-guid-57931522-7fff-24d2-3f2d-58f601b6d462">Block Words in Server Member Usernames or Server Nicknames</h2>
<p>You can also customize words or phrases you don't want visible in members' usernames or server nicknames while in your server. Usernames or members who have server nicknames that contain these blocked words will be required to update their server nickname before they can talk or interact with other server members. </p>
<p>If members don't have permission to update their server nickname, members will need to update their default username before they can talk or interact in your server. AutoMod will default to checking the server nickname and if that isn’t implemented, AutoMod will check their username.</p>
<p>1. To set this up, head to <strong>Server Settings </strong>&gt; <strong>Safety Setup</strong> </p>
<p>2. Then tap on <strong>Edit</strong> next to Auto Mod.</p>
<p>3. Under “Members” you should see an option that says “Block Words in Member Profile Names”, tap on the x to enable it if it’s not enabled already.</p>
<p class="wysiwyg-text-align-center"><img style="height: 351px; width: 624px;" src="https://lh5.googleusercontent.com/fwckINmfHvBK-70VmRFoKxz8KTYeeqeG8X-harycpkn5rzEpEocsR7so9hYn6bL-I5SWvOqS-5pUUCzeE0sPHXJcqF_YxZeHJgwzJcqKKzGeCRA24L_e3vzVxWabodD92RpSwEwfNYdGgBGUlRVlyUc"></p>
<p>If a user tries to use one of the blocked phrases or words in their username or server nickname, they’ll receive an error message and need to use something else.</p>
<p class="wysiwyg-text-align-center"><img style="height: 113px; width: 345px;" src="https://lh3.googleusercontent.com/ej10wunVHRICwReyRiSoLLr61UPmE4gES97lQmjtqjSu_y3uk6MGP4GRiBXYVHQzq9s9s5r0uJlhkxIDS4eDwbiVs7u0cgMhPgKbHXr2bnTuSjeEA6X3i2ZvgmYjv8VjrqqIhcGlhtqbx1Qow3JeWCw"></p>
<h1 id="h_01GV3GQSB85NVWN1KQJ8AKZYC8">WHAT ARE SPAM FILTERS?</h1>
<p>Spam is a problem that communities have to defend against every day to protect their members from dangers and bad actors. In our mission to help you keep your Community safe without adding more moderation work onto your plate, we’re building new tools to help cut down spam on Discord.</p>
<p>We know that spam comes in many forms. These new filters help address message activity that negatively impacts the members in your Community by allowing you to block messages containing spammy text content before they’re ever posted.</p>
<p>With AutoMod’s Spam filters, you can enable the two rules below to protect your Community against different types of spam. <span style="background-color: #ffffff;" data-darkreader-inline-bgcolor="">You can also choose how AutoMod will respond when a message triggers your rules.</span></p>
<ol>
    <li>Block Spam Content Rule - Enable this rule to detect messages containing unwanted spammy text content that disrupts your experience on Discord such as:</li>
</ol>
<ul>
    <li style="list-style-type: none;">
        <ul>
            <li>Unsolicited messages or advertisements (free Nitro)</li>
            <li>Invite spam</li>
        </ul>
    </li>
</ul>
<p>Note this filter is powered by machine learning that is informed by spammy messages users have previously reported to us - turning on this AutoMod filter will flag messages with similar qualities. This filter is not perfect so it might not catch everything that you may consider spam; for example, nonsensical words across multiple messages or “copy/pasta” messages. </p>
<p>We will monitor user feedback to improve this filter over time, so help us out: if you come across a message that was incorrectly flagged as spam, click the “Report Issues” button below the flagged message to let us know.</p>
<ol start="2">
    <li>Block Mention Spam Rule - Set a limit on the number of mentions a message may contain. Once configured, AutoMod can detect and block messages containing excessive user or role mentions and help prevent your members from receiving unnecessary notifications and pings.</li>
</ol>
<h2>HOW TO SET UP SPAM FILTERS FOR AUTOMOD</h2>
<p>To start setting up your own rules for Block Spam Content or Block Mention Spam, go to <strong>Server Settings</strong> &gt; <strong>AutoMod</strong> to see the different spam filter options:</p>
<p><strong>How to Set Up the Block Spam Content Filter</strong></p>
<ol>
    <li>Press “Set Up” or enable the toggle button on the Block Spam Content filter to view the different response actions.</li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974672241431" alt="automod_spam.gif"></p>
<ol start="2">
    <li class="wysiwyg-text-align-center">Choose to have AutoMod block flagged messages entirely, and/or send you an alert:<img src="https://support.discord.com/hc/article_attachments/12974704497815" alt="automod.png"><br>Block message and send an alert for flagged messages</li>
    <li>(Optional) Add exempt roles or channels that you don’t want AutoMod to flag for suspected spam content.</li>
</ol>
<p>As a reminder, setting a channel to be exempt will ensure that any messages in Threads and Text Chat in Voice in that particular channel will also be exempt.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974705964183" alt="automod_allow.png"></p>
<p><strong>How to Set Up the Block Mention Spam Filter</strong></p>
<ol>
    <li>Press “Set Up” or enable the toggle button on Block Mention Spam to view the different response actions.</li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974708184471" alt="automod_mention_spam.gif"></p>
<ol start="2">
    <li>Set a limit on the number of mentions that a message may contain.</li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974710092439" alt="config_limits.png"><br>Set a mention limit, up to a maximum of 50 per message</p>
<ol start="3">
    <li>Choose to have AutoMod block messages, send you an alert, and/or time out users when it flags a message containing excessive mentions. </li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974731626391" alt="block_message.png"><br>Block message, send an alert, and/or timeout user for flagged messages</p>
<ol start="4">
    <li>(Optional) Add exempt roles or channels where you don’t want AutoMod to flag messages containing excessive mentions.</li>
</ol>
<p>As a reminder, setting a channel to be exempt will ensure that any messages in Threads and Text Chat in Voice in that particular channel will also be exempt.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974746646935" alt="allow_certain.png"><br>Add exempt roles or channels</p>
<h1 id="h_01GV3HBH7412D01VKF9EKHEMA2">FREQUENTLY ASKED QUESTIONS</h1>
<p><strong>Q: Who has access to AutoMod at this time?</strong><strong><br></strong>A: <span id="docs-internal-guid-5493223c-7fff-12fb-3655-82fc39aaaa4d">AutoMod is currently available for all servers.</span><br>This means you must have Community enabled from your server’s settings to access AutoMod. Learn How to enable your Community Server <a href="https://support.discord.com/hc/en-us/articles/360047132851" target="_blank" rel="noopener noreferrer">here</a>.</p>
<p><strong>Q: What filters are currently available under AutoMod?</strong><strong><br></strong>A: Currently, the Keyword filters and the Spam Content filter are available and ready to use. We will continue working on additional content filters which will be added to AutoMod when ready.</p>
<p><strong>Q: What languages does AutoMod support?</strong></p>
<p>A: AutoMod can detect words and phrases in any language from your Custom Keyword Rules.<br>However, the word lists of Commonly Flagged Words, as well as the Spam Content filter, are currently only available in English.</p>
<p><strong>Q: What kinds of things can AutoMod detect from my custom rules?</strong></p>
<p>A: AutoMod can detect and filter words and characters in English and other languages, links, emojis*, punctuation, and symbols that you enter in your Custom Keyword Rules. <br><em>*Note that you are not able to add custom emojis from other servers that you don't have access to into your Custom Keyword rules.</em></p>
<p><strong>Q: Who can make updates to AutoMod in my server?</strong></p>
<p>A: Those with “Manage Server” or “Administrator” permissions will be able to access, create, and edit your AutoMod rules when on a Desktop device. Updates to your AutoMod rules cannot be made on mobile devices at this time.</p>
<p><strong>Q: How does keyword matching work?</strong><strong><br></strong></p>
<p>A: AutoMod will block messages that contain keywords found anywhere in the message, including between words. This can be useful for reducing toxicity, or protecting against spam bots and targeted harassment.</p>
<p>When you add a term consisting of multiple words to a rule, only messages that contain the exact term will be blocked. For example, adding “this is bananas” as a term will only block messages containing “this is bananas,” not those that contain only “this” or “is bananas.” </p>
<p>The number of terms you can enter in each Custom Keyword Rule is capped at 1,000 with a 60 character limit for each term.</p>
<p><strong>Q: How do wildcards work?</strong></p>
<p>A: By default, AutoMod scans for messages containing keywords that are an exact match to those in your rules. But chances are you’ll run into people in your Community trying to circumvent your rules and get harmful messages in circulation. So how can you block all kinds of words that partially match your keywords too? </p>
<p>That’s where wildcards come into play. When setting up your Custom Keyword Rules, you can append the * wildcard character to your keywords which allows you to filter out word variations that partially match your keywords.</p>
<p>Simply add the * character at the beginning or the end of a keyword to select one of the following matching strategies on a per keyword basis:</p>
<ol>
    <li>Prefix -- at least one word in the message must start with keyword</li>
    <li>Suffix -- at least one word in the message must end with keyword</li>
    <li>Anywhere -- keyword can show up in any part of the message in the middle of any word</li>
</ol>
<p>Examples: <br>cat* ⇒ get a <strong>cat</strong>-sitter <br>*cat ⇒ cool bob<strong>cat</strong> <br>*ana* ⇒ b<strong>ana</strong>nas</p>
<p><strong>Q: Will AutoMod work on Threads and Text Chat in Voice channels?</strong></p>
<p>A: Yes! When containing a keyword or term from your rules:<br>1. Threads are not created</p>
<p>2. Messages within a Thread or Text Chat in Voice channel can be blocked and sent as an alert</p>
<p><strong>Q: Will AutoMod flag messages from bots?</strong></p>
<p>A: No - all bot alerts and messages will be exempt from AutoMod.</p>
<p><strong>Q: I have the Commonly Flagged Words rule enabled - why am I still seeing undesirable words?</strong></p>
<p>A: Our Commonly Flagged Words filters are designed to provide every Community with a quick and effective way to set up defenses against commonly flagged keywords so you don’t have to think about them yourself and build from scratch.</p>
<p>However, we understand every Community has their own rules and tolerance for certain words. Some communities prefer to maintain a more family-friendly environment, while others accept and encourage rowdier language. And oftentimes it’s not the word itself that causes harm, but the intent with which it’s being used.</p>
<p>Because of these considerations, our Commonly Flagged Words filters may not catch everything. For words that we don’t catch, you can add them to any of your Custom Keyword Rules.</p>
<p><strong>Q: How can I see all the words that the Commonly Flagged Words filters contain?</strong></p>
<p>A: We understand you want to see the words in these word lists to decide whether they’ll be effective at providing coverage against language you want to filter out, without stifling conversations in your communities. </p>
<p>However, for the time being we will not publicize words in these word lists in order to maintain their protective efficacy. This is to ensure those with malicious intent can’t easily develop means to circumvent them in communities that use them.<br>We value providing transparency into the thinking that went into making these word lists, and will address those topics in a future post on our blog.</p>
<p><strong>Q: Will the Commonly Flagged Words filters be updated over time?</strong></p>
<p>A: Yes - we recognize that language is fluid and always evolving, and the words of today may not carry the same meaning tomorrow. We’ll continue to explore ways to offer communities further customization with our filters, and will regularly refine them using your reports and feedback.</p>
<p>To share your feedback with us, click “Report Issues” on any of your AutoMod alerts containing the word you’d like to flag to us.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974787119895" alt="automod_alert.png"></p>
<p><strong>Q: What types of spam does the Block Spam Content filter not catch?</strong></p>
<p>A: The spam filter will flag text content that has been reported to us as spam by our users, and thus may not flag everything that may be considered spam such as:</p>
<ul>
    <li>Unwanted spammy text content repeated across multiple messages and channels</li>
    <li>Friend request spam</li>
</ul>
<p><strong>Q: I found spam that Discord missed, what should I do?</strong></p>
<p>A: If you encounter content that was incorrectly flagged as spam, click “Report Issues” on any of your AutoMod alerts of flagged spam content. This will help us improve the filter’s accuracy over time.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/12974788285207" alt="reportmessage.png"></p>
<p><strong>Q: How will Discord use my feedback on the Block Spam Content filter?</strong></p>
<p>A: We will be working to improve the spam filter over time by continuously reviewing user reports. As a reminder, when you report a message, you are sending the content of the flagged message to Discord.</p>
<p><strong><span id="docs-internal-guid-478c11e4-7fff-cc33-e6ce-7619340ec94e">Q: What does OpenAI know about me?</span></strong></p>
<p>A: AutoMod is a Discord service so any data it uses is governed by our <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. When you use AutoMod, it will access certain information such as messages flag content. OpenAI is our vendor, meaning they may only use this information at our direction; they may not use it to train their general AI models.</p>