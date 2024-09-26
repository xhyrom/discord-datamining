<h1 id="h_01J8JESC98QJP1HRBQ6MNAG18Q">Contents</h1>
<p><a href="#h_01J8JESC983NH01G412Q0672KZ">Introduction</a></p>
<p>
  <a href="#h_01J8JESC985W7V9M5XSMK8YA14"
    >The Difference Between Verified and Unverified Activities</a
  >
</p>
<p>
  <a href="#h_01J8JESC989C99FYAYBXPYZ05Q"
    >When to Keep your Activity Unverified</a
  >
</p>
<p><a href="#h_01J8JESC98H586ZCZJN1T6YN77">When to Verify your Activity</a></p>
<p>
  <a href="#h_01J8JESC98NQPAGDEGJYTDNWVD"
    >How to Change the Public/Private Settings</a
  >
</p>
<h1 id="h_01J8JESC983NH01G412Q0672KZ">Introduction</h1>
<p>
  Discord offers two distinct settings for Activities: Verified and Unverified.
  These settings provide different levels of visibility and functionality, each
  suited for specific purposes. In this article, we'll delve into the
  characteristics and benefits of both Verified and Unverified Activities,
  helping you understand when and how to use each effectively.
</p>
<h1 id="h_01J8JESC985W7V9M5XSMK8YA14">
  The Difference Between Verified and Unverified Activities
</h1>
<p>Verified and Unverified Activities have several distinct characteristics:</p>
<h2 id="h_01J8JESC988BHFTRZQC7WCCVBF">Verified Activities</h2>
<p>These Activities are:</p>
<ul>
  <li>
    Visible to everyone on Discord (There is no longer a server member limit.)
  </li>
  <li>Allowed to enable discovery through Discord Discovery Surfaces</li>
  <li>Playable in any server, regardless of size</li>
  <li>
    Eligible for monetization, provided
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17709085688727-What-Are-Premium-Apps#h_01HB8WP0GADB3NZ78DM0CVE9N4"
      target="_blank"
      rel="noopener noreferrer"
      >Premium App requirements</a
    >
    are met
  </li>
</ul>
<h2 id="h_01J8JESC98ZGZ473H93TXPC2J0">Unverified Activities</h2>
<p>Unverified Activities have the following features:</p>
<ul>
  <li>Only visible to you, your development team, and app testers</li>
  <li>Not discoverable by the general Discord community</li>
  <li>Limited to servers with less than 25 members</li>
  <li>Great for testing and development</li>
</ul>
<p>
  The key difference is accessibility and visibility. Verified Activities are
  open to all Discord users, while Unverified Activities are restricted to
  developers and testers.
</p>
<h1 id="h_01J8JESC989C99FYAYBXPYZ05Q">When to Keep your Activity Unverified</h1>
<p>
  While you are developing and testing your Activity, keeping your Activity
  unverified is the best option as they are only playable by the developers on
  the team and app testers who are explicitly invited to test them. They are
  also only able to be launched in servers with less than 25 members.
</p>
<h4 id="h_01J8JH7WCPJEP7KX505A3N1DMW" class="callout">
  <span
    style="
      color: #2e3338;
      font-family: gg_sans, &quot; Noto Sans&quot;, &quot; Helvetica Neue&quot;,
        Helvetica, Arial, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      font-weight: 500;
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
      display: inline !important;
      float: none;
    "
    >⚠️ </span
  >It's crucial to only test Activities from developers you trust. For more
  information on Unverified Activity Safety, check out
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety"
    target="_blank"
    rel="noopener noreferrer"
    >this article</a
  >.
</h4>
<p>
  The best practice for development, testing, and adding new features is to use
  an unverified Activity. Meanwhile, maintain a separate verified "live"
  Activity for your stable build.
</p>
<h1 id="h_01J8JESC98H586ZCZJN1T6YN77">When to Verify your Activity</h1>
<p>
  When you are ready to release your Activity to the world, this will open up
  the doors to discoverability and monetization. But first, verification is a
  necessary step to enable both <strong>discovery</strong> and
  <strong>monetization</strong> features for your Activity.
</p>
<h2 id="h_01J8JESC987FWKEFYHVTEKHP97"><strong>Verification</strong></h2>
<p class="callout">
  Once your application is verified, you will <strong>not</strong> be able to
  turn off the public setting in the Developer Portal. For development and
  iteration, we suggest having a unverified Activity.
</p>
<p>
  To learn about how to get your Activity verified, please see the
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/23926564536471-How-Do-I-Get-My-App-Verified"
    target="_blank"
    rel="noopener noreferrer"
    >How Do I Get My App Verified</a
  >
  article
</p>
<h2 id="h_01J8JESC98218H31J9FDZ01J0F"><strong>Discoverability</strong></h2>
<p>
  There are currently 3 surfaces where people can discover your Activity once
  it’s verified and discovery has been enabled.
</p>
<ul>
  <li>
    <a
      href="https://support.discord.com/hc/en-us/articles/9360431966359-Welcome-to-the-App-Directory"
      target="_blank"
      rel="noopener noreferrer"
      >App Directory</a
    >
  </li>
  <li>
    <a
      href="https://support.discord.com/hc/en-us/articles/21334461140375-Using-Apps-on-Discord#docs-internal-guid-d9c5c0e9-7fff-1b40-550f-e6a3f64f347e"
      target="_blank"
      rel="noopener noreferrer"
      >App Launcher</a
    >
  </li>
  <li>
    <a
      href="https://support.discord.com/hc/en-us/articles/7931156448919-Activity-Status-Recent-Activity#h_01HTJA8QV5YFRR10TQ9RBZM8SS"
      target="_blank"
      rel="noopener noreferrer"
      >Activity Status (Recent Activity)</a
    >
  </li>
</ul>
<p>
  To learn more about these surfaces and how users can find and launch your
  Activity, please see
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/21204493235991"
    target="_blank"
    rel="noopener noreferrer"
    >this article</a
  >.
</p>
<h4 id="h_01J8JH6Y24GVCJ1WMRZSYKYN5K" class="callout">
  <span
    style="
      color: #2e3338;
      font-family: gg_sans, &quot; Noto Sans&quot;, &quot; Helvetica Neue&quot;,
        Helvetica, Arial, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-variant-ligatures: normal;
      font-variant-caps: normal;
      font-weight: 500;
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
      display: inline !important;
      float: none;
    "
    >⚠️ </span
  >Note that after enabling discovery for your app, it can take up to 30 hours
  for your Activity to show up in the search bar.
</h4>
<h2 id="h_01J8JESC98PKW0YZRF0TAQ38AD"><strong>Monetization</strong></h2>
<p>
  You can now monetize your eligible Activity through both
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17298449675927-Premium-Apps-SKU-and-Store-Setup#h_01HAWGE42AHRH5CNNZ5WQBSCDT"
    target="_blank"
    rel="noopener noreferrer"
    >In-App Purchases and Subscriptions</a
  >!
</p>
<p>
  To learn about the eligibility criteria and how to monetize your application
  check out
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17297949965079-How-Do-I-Monetize-My-App"
    target="_blank"
    rel="noopener noreferrer"
    >this article</a
  >.
</p>
<p>
  When you are ready to release your application to the world, you can toggle on
  that <strong>public</strong> switch in the bot settings and get your app
  verified!
</p>
<h1 id="h_01J8JESC98NQPAGDEGJYTDNWVD">
  How to Change the Public/Private Bot Setting
</h1>
<p>
  In the
  <a
    href="https://discord.com/developers/applications"
    target="_blank"
    rel="noopener noreferrer"
    >Developer Portal</a
  >, find the Application you wish to modify. Navigate to the Bot tab and scroll
  down until you see <strong>Public Bot</strong>. Toggle this switch on to set
  your bot to <strong>Public</strong>.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/26594401281303"
  />
</p>
<p>
  If your application is already <strong>Public</strong> and you want to turn
  that setting off, you can only do so if the application hasn't been Verified
  and if the <strong>Install Link</strong> on the
  <strong>Installation</strong> tab is set to <strong>None</strong>.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/26594417678231"
  />
</p>
<h2 id="h_01J8JESC983PHQYEVEYKA14B5M">Additional Resources</h2>
<ul>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/21204423970071-Introducing-the-Embedded-App-SDK"
      target="_blank"
      rel="noopener noreferrer"
      >Introducing the Embedded App SDK!</a
    >
  </li>
  <li>
    <a
      href="https://discord.com/developers/docs/activities/overview"
      target="_blank"
      rel="noopener noreferrer"
      >Activities - Getting Started Guide</a
    >
  </li>
  <li>
    Join the
    <a
      href="https://discord.gg/discord-developers"
      target="_blank"
      rel="noopener noreferrer"
      >Discord Developers Server</a
    >
    <code>#activities-dev-help</code> channel!
  </li>
  <li>
    Reach out to our
    <a
      href="https://dis.gd/developer-activities"
      target="_blank"
      rel="noopener noreferrer"
      >Developer Support</a
    >
    team if you have any questions about the SDK!
  </li>
</ul>
<p><!-- notionvc: 446bb39a-4c7b-42b7-b5e1-3935bc7a6373 --></p>
