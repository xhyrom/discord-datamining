<p class="callout">
  ⚠️ Currently Premium Apps are available to developers based in the US, UK, and
  EU but check the
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    tabindex="0"
    href="https://support-dev.discord.com/hc/en-us/articles/17297949965079#h_01HB90E77QPN986GFV0S01ZSF2"
    target="_blank"
    rel="noopener noreferrer"
    data-token-index="1"
    >Supported Locales section</a
  >
  and in the Discord Developers server for future announcements.
</p>
<p>
  Developers can monetize their apps, specifically bots and activities with
  <span
    class="discussion-id-c0bd97fb-3a1c-4252-8d24-402bbd01227c notion-enable-hover"
    data-token-index="1"
    >Premium Apps</span
  >! Using Premium Apps, developers can offer premium features to users in the
  form of
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    style="
      cursor: pointer;
      color: inherit;
      word-wrap: break-word;
      text-decoration: inherit;
    "
    tabindex="0"
    href="https://support.discord.com/hc/en-us/articles/9359445233303"
    rel="noopener noreferrer"
    data-token-index="3"
    ><span
      class="link-annotation-unknown-block-id--1840033236"
      style="
        border-bottom: 0.05em solid;
        border-color: rgba(55, 53, 47, 0.4);
        opacity: 0.7;
      "
      >App Subscriptions</span
    ></a
  >
  and
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    style="
      cursor: pointer;
      color: inherit;
      word-wrap: break-word;
      text-decoration: inherit;
    "
    tabindex="0"
    href="https://support-apps.discord.com/hc/en-us/articles/26501767768471-Premium-App-FAQ#h_01HW8TY8QFRCVZFFXM55XWV0NT"
    rel="noopener noreferrer"
    data-token-index="5"
    ><span
      class="link-annotation-unknown-block-id-1784028657"
      style="
        border-bottom: 0.05em solid;
        border-color: rgba(55, 53, 47, 0.4);
        opacity: 0.7;
      "
      >One-Time Purchases</span
    ></a
  >. To monetize an app using Premium Apps, a series of terms and
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    style="
      cursor: pointer;
      color: inherit;
      word-wrap: break-word;
      text-decoration: inherit;
    "
    tabindex="0"
    href="https://support-dev.discord.com/hc/en-us/categories/360000656491"
    rel="noopener noreferrer"
    data-token-index="7"
    ><span
      class="link-annotation-unknown-block-id-1681970688"
      style="
        border-bottom: 0.05em solid;
        border-color: rgba(55, 53, 47, 0.4);
        opacity: 0.7;
      "
      >policies</span
    ></a
  >
  will need to be met and maintained. This article is a broad overview of what
  this process looks like.
  <!-- notionvc: 9601be42-f9b8-47e1-94af-84aa96cd07d9 -->
</p>
<p>Upgrading an app to premium consists of 3 main phases:</p>
<ul>
  <li>
    <a href="#h_01HB8WP0GADB3NZ78DM0CVE9N4">Onboarding</a> - A series of
    requirements and automated checks in the
    <a
      href="https://discordapp.com/developers/"
      target="_blank"
      rel="noopener noreferrer"
      >Developer Portal</a
    >
  </li>
  <li>
    <a href="#h_01HB8WP0GBE0P7X6P16ZVVRHBW">Integration</a> - Developers add
    premium SKUs to which users can subscribe
  </li>
  <li>
    <a href="#h_01HB8WP0GB6ZFV8TQ18SZ77K11">Payout</a> - After an app makes its
    first $100 and subsequent $25 increments on a monthly basis, it will be
    eligible for payout. The app will then undergo a review process to ensure
    compliance with Discord's policies before payouts can begin.<!-- notionvc: 0f251051-fad5-4a88-92de-2b1bc23a33fa -->
  </li>
</ul>
<p>
  In order to complete these phases app owners, teams, and apps will all need to
  meet many requirements and complete a series of steps.
</p>
<h2 id="h_01HB8WP0GADB3NZ78DM0CVE9N4">Step 1 - Onboarding Requirements</h2>
<p>The onboarding flow consists of checks for the following requirements:</p>
<h3 id="h_01HB8WP0GAXC66J85688WRKPXE">App Requirements</h3>
<p>A Premium App must:</p>
<ul>
  <li>
    Be
    <a
      href="https://support-dev.discord.com/hc/articles/23926564536471-How-Do-I-Get-My-App-Verified"
      target="_blank"
      rel="noopener noreferrer"
      >verified</a
    >
  </li>
  <li>Belong to a Developer Team</li>
  <li>Have a link to your Terms of Service</li>
  <li>Have a link to your Privacy Policy</li>
  <li>
    Not contain any harmful or bad language in the name, description, commands,
    or role connection metadata.
  </li>
</ul>
<h3 id="h_01HB8WP0GB6W76S5HEWSKB58RY">Developer Team Owner Requirements</h3>
<p>Developer team owner must:</p>
<ul>
  <li>Be over 18 years old</li>
  <li>Have a verified email and 2FA set up</li>
  <li>
    Must be located in a
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17297949965079#h_01HB90E77QPN986GFV0S01ZSF2"
      target="_blank"
      rel="noopener noreferrer"
      >Supported Locale</a
    ><!-- notionvc: ec218568-c7bb-496f-9b21-4376f04a2a8d -->
  </li>
  <li>
    Agree to the
    <a
      href="https://support.discord.com/hc/en-us/articles/5330075836311"
      target="_blank"
      rel="noopener noreferrer"
      >Monetization Terms</a
    >
    and
    <a
      href="https://support.discord.com/hc/en-us/articles/10575066024983-Monetization-Policy"
      target="_blank"
      rel="noopener noreferrer"
      >Monetization Policy</a
    >
  </li>
</ul>
<h3 id="h_01HB8WP0GBMT4E142096S9HYYS">Developer Team Member Requirements</h3>
<p>All developer team members must:</p>
<ul>
  <li>Have a verified email and 2FA set up</li>
</ul>
<p>
  For more information on the Onboarding process visit the
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17708927296663"
    target="_blank"
    rel="noopener noreferrer"
    >Premium App Onboarding</a
  >
  article.
</p>
<h2 id="h_01HB8WP0GBE0P7X6P16ZVVRHBW">Step 2 - SKUs and Monetization</h2>
<p>
  After successful onboarding SKUs can be added to the app. The 4 types of SKUs
  are: User and Guild (Server) Subscriptions, as well as Durable and Consumable
  Items, also known as One-Time Purchases (OTPs). Multiple Subscriptions and
  One-Time Purchase SKUs can be published at a time, however there is a limit of
  50 SKUs per app.<!-- notionvc: 8f117ea2-800c-4282-ac1c-74354596a087 --><br /><!-- notionvc: 67f93f38-41ab-4ed5-bd4d-24272b606142 -->
</p>
<p><br /><!-- notionvc: e05e950c-bd59-4358-b0d9-4037a6f59f14 --></p>
<h3 id="h_01HB8WP0GB5883T28K8SCJB02E">Types of SKUs</h3>
<h4 id="h_01HW8T8M8GHYZJVDSSSXNP1229">
  <strong><span class="wysiwyg-underline">Subscriptions:</span></strong>
</h4>
<p>User Subscription</p>
<ul>
  <li>
    A recurring subscription that allows a user to purchase access to an app’s
    premium features across all servers they are in with that app.<!-- notionvc: cbf5be93-cb74-4ec2-bc52-1d260f82cda4 -->
  </li>
</ul>
<p>Guild Subscription</p>
<ul>
  <li>
    A recurring subscription that allows a server owner to purchase access to
    your app’s premium features that can be offered to all members on that
    server.<!-- notionvc: 004d664f-b476-4e32-8b26-1a40e9a63959 -->
  </li>
</ul>
<h4 id="h_01HW8T8SYT2R3E7EPTTRZPSK2E">
  <strong
    ><span class="wysiwyg-underline">One-Time Purchases (OTP):</span></strong
  >
</h4>
<p>Durable OTPs</p>
<ul>
  <li>
    A one-time purchase that is permanent and is not subject to either renewal
    or consumption, such as lifetime access to an app's premium features.<!-- notionvc: 73db333f-52d8-4e95-ab15-7bd32ef404cb -->
  </li>
</ul>
<p>Consumable OTPs</p>
<ul>
  <li>
    A one-time, non-renewable purchase that provides access, such as a temporary
    power-up or boost in a game.<!-- notionvc: 9fe3b6dd-6a88-46d7-8eea-46718f93dc36 -->
  </li>
</ul>
<p>
  Once SKUs have been added within the Developer Portal, developers can access
  them through the API and code the subscription functionality into their app.
  These SKUs can then be published and featured on an
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17298449675927-Premium-Apps-SKU-and-Store-Setup"
    target="_blank"
    rel="noopener noreferrer"
    >App’s Store Page</a
  >
  and other
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/21204493235991-How-Can-Users-Discover-and-Play-My-Activity#h_01J8JK19X2C6NY1XDZ1WDJEDGX"
    target="_blank"
    rel="noopener noreferrer"
    >Discovery surfaces</a
  >.<!-- notionvc: d9df8cc8-c41d-4e6f-9f09-85e0c3046663 -->
</p>
<h3 id="h_01HB8WP0GBZGA9R5KP8QTJ2GWH">Monetization</h3>
<p>
  Once an app has a SKU set up, integrated into the app’s code and published,
  there are 4 ways users will be able to subscribe or purchase premium features:
</p>
<ul>
  <li>
    Bot profiles will offer the Store button, leading users to the App’s Store
    page
  </li>
  <li>
    App Directory profiles offer a Store button leading users to the App’s Store
    page
  </li>
  <li>
    Server admins can use the Integrations settings menu
    <ul>
      <li>
        Go to Server Settings → Integrations → [App Name] → scroll to the bottom
        of the page, and see the Store button
      </li>
    </ul>
  </li>
</ul>
<h2 id="h_01HB8WP0GB6ZFV8TQ18SZ77K11">Step 3 - Payout</h2>
<p>
  Once an app has made its first $100 it will become eligible for payout. A
  review will automatically be conducted and if everything looks good, your team
  will be able to receive payouts.
  <!-- notionvc: 4556d264-8605-4b4a-92f6-03bf7c581dce -->
</p>
<p>
  For more information please visit the
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17299902720919"
    target="_blank"
    rel="noopener noreferrer"
    >Premium Apps Payouts</a
  >
  article.
</p>
<p>
  Once you have a verified app, owned by a team, that supports slash commands or
  has the message content privileged intent, you can check out the
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17297949965079"
    target="_blank"
    rel="noopener noreferrer"
    >How Do I Monetize My App?</a
  >
  article for next steps!
</p>
<p>
  After reviewing this and other linked articles, if you have any questions
  about Premium Apps and App Subscriptions, please
  <a
    href="https://dis.gd/developer-support/premium-apps"
    target="_blank"
    rel="noopener noreferrer"
    >reach out to our Developer Support team</a
  >!
</p>
<p> </p>
<h3 id="h_01HB97XFN09QYQVV0VRPQGV39K">
  Can I keep using my existing payment system?
</h3>
<p>
  Yes. You can continue using existing payment systems, such as Patreon or
  Stripe integrations on external websites. However, developers who offer paid
  capabilities or other offerings for their apps are required to support
  purchase of such items through Discord’s Premium App monetization features at
  a price no higher than those offered through other payment options. For more
  information about this<!-- notionvc: 089d8f22-8f86-488c-acec-eaa78e0d464f -->
  Monetization Requirement please visit the
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/23810643331735-Premium-Apps-Required-Support-for-Monetizing-Apps"
    >Premium Apps' Required Support for Monetizing Apps article</a
  >.
</p>
