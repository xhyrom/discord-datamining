<h1 id="h_01JR8ZP20Z85JMAYHG3VFWQCEZ">Contents</h1>
<p>
  <a href="#h_01JR8ZP20ZGFEEN44M61V4SNEC"
    >What Can Apps Access Without the Intent?</a
  >
</p>
<p>
  <a href="#h_01JR8ZP20ZW6QXYZQ5JPZH3V7F"
    >Alternatives to Message Content Intent</a
  >
</p>
<p>
      - <a href="#h_01JR8ZP20ZEFSJ7YCRRC7S02FX">Messaging and Communication</a>
</p>
<p>          - <a href="#h_01JR8ZP20ZF7Z3WD1W7XR453P2">Bot-Sent Messages</a></p>
<p>          - <a href="#h_01JR8ZP20ZR5H9BSE6EPTTF0TC">Direct Messages</a></p>
<p>          - <a href="#h_01JR8ZP20ZTN8N5Y8XYK05ND0Q">@Mentions</a></p>
<p>
       -
  <a href="#h_01JR8ZP20ZKSM7CQJV0AZCVHKV"
    >Interactions &amp; Message Components</a
  >
</p>
<p>
            - <a href="#h_01JR8ZP20Z0YN11YZXG60Q4P52">Application Commands</a>
</p>
<p>          - <a href="#h_01JR8ZP20ZCKK3XTAAE0537VDN">Message Commands</a></p>
<p>          - <a href="#h_01JR8ZP20Z7T13MQCY58YYSRCF">Buttons</a></p>
<p>          - <a href="#h_01JR8ZP20ZWW00VF4Z9ENVN21Y">Select Menus</a></p>
<p>          - <a href="#h_01JR8ZP20ZV1X7WPJJZGHXQFJ6">Text Inputs</a></p>
<p><a href="#h_01JR8ZP210DQF0PW2D22GTSSY4">Conclusion</a></p>
<h1 id="h_01JR8ZP20ZGFEEN44M61V4SNEC">
  What Can Apps Access Without the Intent?
</h1>
<p>Bots will always have access to:</p>
<ul>
  <li>Messages received in DMs</li>
  <li>Messages where the bot is @mentioned</li>
  <li>Messages the bot sends</li>
</ul>
<p>For other messages, these fields will return empty:</p>
<ul>
  <li>content</li>
  <li>attachments</li>
  <li>components</li>
  <li>polls</li>
  <li>embeds</li>
</ul>
<h1 id="h_01JR8ZP20ZW6QXYZQ5JPZH3V7F">
  Alternatives to Message Content Intent
</h1>
<p>
  After August 31, 2022, message content became a privileged intent for verified
  apps. Here's how to build functionality without this intent.
</p>
<h2 id="h_01JR8ZP20ZEFSJ7YCRRC7S02FX">Messaging and Communication</h2>
<h3 id="h_01JR8ZP20ZF7Z3WD1W7XR453P2">Bot-Sent Messages</h3>
<p>Bots can always read and edit their own messages.</p>
<p>Useful for:</p>
<ul>
  <li>Updating a leaderboard that refreshes regularly</li>
</ul>
<h3 id="h_01JR8ZP20ZR5H9BSE6EPTTF0TC">Direct Messages</h3>
<p>Bots have full access to message content in DMs.</p>
<p>Useful for:</p>
<ul>
  <li>Support tickets</li>
  <li>Modmail systems</li>
</ul>
<p>Best practices:</p>
<ul>
  <li>Be transparent about DM data handling</li>
  <li>Implement opt-in mechanics</li>
  <li>Encrypt and anonymize stored data</li>
  <li>Delete unused data after 30 days</li>
</ul>
<h3 id="h_01JR8ZP20ZTN8N5Y8XYK05ND0Q">@Mentions</h3>
<p>Bots can access content in messages where they're @mentioned.</p>
<ul>
  <li>Alternative for a command prefix</li>
</ul>
<h2 id="h_01JR8ZP20ZKSM7CQJV0AZCVHKV">Interactions &amp; Message Components</h2>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/31239076787223"
    alt="MCI workarounds.png"
  />
</p>
<h3 id="h_01JR8ZP20Z0YN11YZXG60Q4P52">Application Commands</h3>
<p>Ideal for commands that don't need to know message content.</p>
<p>Interactions provide:</p>
<ul>
  <li>interactionID</li>
  <li>applicationID</li>
  <li>member (user who sent command)</li>
  <li>channelID</li>
  <li>guildID</li>
  <li>message (for component interactions)</li>
</ul>
<p>
  To learn more about application commands, check out our developer
  documentation
  <a
    href="https://discord.com/developers/docs/interactions/application-commands"
    target="_blank"
    rel="noopener noreferrer"
    >here</a
  >.
</p>
<h3 id="h_01JR8ZP20ZCKK3XTAAE0537VDN">Message Commands</h3>
<p>
  Message commands are application commands that appear on the context menu
  (right click or tap) of messages.
</p>
<p>Useful for:</p>
<ul>
  <li>Translation</li>
  <li>Text/Image Alteration</li>
</ul>
<p>
  To learn more about message commands, check out our developer documentation
  <a
    href="https://discord.com/developers/docs/interactions/application-commands#message-commands"
    >here</a
  >.
</p>
<h3 id="h_01JR8ZP20Z7T13MQCY58YYSRCF">Buttons</h3>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/31239091861911"
    alt="MCI buttons.png"
    width="585"
    height="122"
  />
</p>
<p>Useful for verification systems, polls, and other interactive features.</p>
<p>Common use cases for buttons:</p>
<ul>
  <li>Verification systems to prevent spam and automated accounts</li>
  <li>Polls and voting mechanisms</li>
</ul>
<p>
  To learn more about buttons, check out our  help center
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/6381892888087"
    target="_blank"
    rel="noopener noreferrer"
    >Buttons FAQ</a
  >
  or the developer documentation
  <a
    href="https://discord.com/developers/docs/interactions/message-components#buttons"
    target="_blank"
    rel="noopener noreferrer"
    >here</a
  >.
</p>
<h3 id="h_01JR8ZP20ZWW00VF4Z9ENVN21Y">Select Menus</h3>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/31239091862167"
    alt="MCI menus.png"
  />
</p>
<p>Perfect for role selection and other multi-choice interfaces.</p>
<p>Use cases for select menus:</p>
<ul>
  <li>Role assignment systems</li>
  <li>Language preference selection</li>
</ul>
<p>
  To learn more about select menus, check out our help center
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/6382655804311-Bots-Select-Menus"
    target="_blank"
    rel="noopener noreferrer"
    >Select Menus FAQ</a
  >
  or the developer documentation
  <a
    href="https://discord.com/developers/docs/interactions/message-components#select-menus"
    target="_blank"
    rel="noopener noreferrer"
    >here</a
  >.
</p>
<h3 id="h_01JR8ZP20ZV1X7WPJJZGHXQFJ6">Text Inputs</h3>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/31239076790423"
    alt="MCI modals.png"
    width="423"
    height="283"
  />
</p>
<p>
  Text inputs (also known as modals) allow bots to collect freeform text
  responses from users in a structured way.
</p>
<p>Use cases for modals include:</p>
<ul>
  <li>Form submissions</li>
  <li>Surveys</li>
</ul>
<p>
  To learn more about text inputs, check out our developer documentation
  <a
    href="https://discord.com/developers/docs/interactions/message-components#text-inputs"
    >here</a
  >.
</p>
<h1 id="h_01JR8ZP210DQF0PW2D22GTSSY4">Conclusion</h1>
<p>
  Interactions provide powerful alternatives to message content intent. They
  enable users to engage more easily with bots while maintaining functionality.
</p>
<p>For more information:</p>
<ul>
  <li>
    <a
      href="https://discord.com/developers/docs/interactions/application-commands"
      target="_blank"
      rel="noopener noreferrer"
      >Discord Interactions Documentation</a
    >
  </li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots"
      target="_blank"
      rel="noopener noreferrer"
      >Message Content Announcement</a
    >
  </li>
</ul>
<p>
  <span
    style="
      color: #2e3338;
      font-family: gg_sans, &quot; Noto Sans&quot;, &quot; Helvetica Neue&quot;,
        Helvetica, Arial, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      letter-spacing: normal;
      orphans: 2;
      text-align: start;
      text-indent: 0px;
      text-transform: none;
      widows: 2;
      word-spacing: 0px;
      -webkit-text-stroke-width: 0px;
      white-space: normal;
      background-color: #ffffff;
      text-decoration-thickness: initial;
      text-decoration-style: initial;
      text-decoration-color: initial;
      float: none;
      display: inline !important;
    "
    >After reviewing this and other linked articles, if you have any questions,
    please </span
  ><a
    style="
      box-sizing: border-box;
      background-color: #ffffff;
      font-weight: 700 !important;
      color: #1f73b7;
      text-decoration: none;
      font-family: gg_sans, &quot; Noto Sans&quot;, &quot; Helvetica Neue&quot;,
        Helvetica, Arial, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      letter-spacing: normal;
      orphans: 2;
      text-align: start;
      text-indent: 0px;
      text-transform: none;
      widows: 2;
      word-spacing: 0px;
      -webkit-text-stroke-width: 0px;
      white-space: normal;
    "
    href="https://dis.gd/intents"
    target="_blank"
    rel="noopener noreferrer"
    >reach out to our Developer Support team</a
  ><span
    style="
      color: #2e3338;
      font-family: gg_sans, &quot; Noto Sans&quot;, &quot; Helvetica Neue&quot;,
        Helvetica, Arial, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      letter-spacing: normal;
      orphans: 2;
      text-align: start;
      text-indent: 0px;
      text-transform: none;
      widows: 2;
      word-spacing: 0px;
      -webkit-text-stroke-width: 0px;
      white-space: normal;
      background-color: #ffffff;
      text-decoration-thickness: initial;
      text-decoration-style: initial;
      text-decoration-color: initial;
      float: none;
      display: inline !important;
    "
    >!</span
  >
</p>
<p><!-- notionvc: 0c05dd3b-8e56-4e5c-86eb-001bc4626ba1 --></p>
