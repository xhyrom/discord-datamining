<p class="callout">⚠️ Currently Premium Apps are available to developers based in the US, UK, and EU but check the <a class="notion-link-token notion-focusable-token notion-enable-hover" tabindex="0" href="https://support-dev.discord.com/hc/en-us/articles/17297949965079#h_01HB90E77QPN986GFV0S01ZSF2" target="_blank" rel="noopener noreferrer" data-token-index="1">Supported Locales section</a> and in the Discord Developers server for future announcements.</p>
<p>Developers can now monetize their apps with Premium Apps! Using Premium Apps, you can offer premium features to users in the form of <a href="https://support.discord.com/hc/en-us/articles/9359445233303" target="_blank" rel="noopener noreferrer">App Subscriptions</a>. To use Premium Apps and monetize your application using App Subscriptions, you’ll need to meet and maintain a series of requirements and <a href="https://support-dev.discord.com/hc/en-us/categories/360000656491" target="_blank" rel="noopener noreferrer">policies</a>. This article is a broad overview of what this process looks like.</p>
<p>Upgrading an app to premium consists of 3 main phases:</p>
<ul>
    <li>
        <a href="https://support-dev.discord.com/hc/en-us/articles/17709085688727#h_01HB8WP0GADB3NZ78DM0CVE9N4">Onboarding</a> - A series of automated checks in the <a href="https://discordapp.com/developers/" target="_blank" rel="noopener noreferrer">Developer Portal</a>
    </li>
    <li>
        <a href="https://support-dev.discord.com/hc/en-us/articles/17709085688727#h_01HB8WP0GBE0P7X6P16ZVVRHBW">Integration</a> - Developers add a premium SKU to which a user can subscribe
    </li>
    <li>
        <a href="https://support-dev.discord.com/hc/en-us/articles/17709085688727#h_01HB8WP0GB6ZFV8TQ18SZ77K11">Payout</a> - After an app makes its first $100 and subsequent $25 increments on a monthly basis
    </li>
</ul>
<p>In order to complete these phases, app owners, teams, and apps will all need to meet many requirements and complete a series of steps.</p>
<h2 id="h_01HB8WP0GADB3NZ78DM0CVE9N4">Step 1 - Onboarding Requirements</h2>
<p>The onboarding flow consists of checks for the following requirements:</p>
<h3 id="h_01HB8WP0GAXC66J85688WRKPXE">App Requirements</h3>
<p>A Premium App must:</p>
<ul>
    <li>Be <a href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Allowlisting" target="_blank" rel="noopener noreferrer">verified</a>
    </li>
    <li>Belong to a Developer Team</li>
    <li>Use <a href="https://discord.com/developers/docs/interactions/application-commands#application-commands" target="_blank" rel="noopener noreferrer">application commands</a>, or have been approved for the <a href="https://discord.com/developers/docs/topics/gateway#message-content-intent" target="_blank" rel="noopener noreferrer">Message Content privileged intent</a>
    </li>
    <li>Have a link to your Terms of Service</li>
    <li>Have a link to your Privacy Policy</li>
    <li>Not contain any harmful or bad language in the name, description, commands, or role connection metadata.</li>
</ul>
<h3 id="h_01HB8WP0GB6W76S5HEWSKB58RY">Developer Team Owner Requirements</h3>
<p>Developer team owner must:</p>
<ul>
    <li>Be over 18 years old</li>
    <li>Have a verified email and 2FA set up</li>
    <li>Must be located in the US, UK, or EU</li>
    <li>Agree to the <a href="https://support.discord.com/hc/en-us/articles/5330075836311" target="_blank" rel="noopener noreferrer">Monetization Terms</a> and <a href="https://support.discord.com/hc/en-us/articles/10575066024983-Monetization-Policy" target="_blank" rel="noopener noreferrer">Monetization Policy</a>
    </li>
</ul>
<h3 id="h_01HB8WP0GBMT4E142096S9HYYS">Developer Team Member Requirements</h3>
<p>All developer team members must:</p>
<ul>
    <li>Have a verified email and 2FA set up</li>
</ul>
<p>For more information on the Onboarding process visit the <a href="https://support-dev.discord.com/hc/en-us/articles/17708927296663" target="_blank" rel="noopener noreferrer">Premium App Onboarding</a> article.</p>
<h2 id="h_01HB8WP0GBE0P7X6P16ZVVRHBW">Step 2 - SKUs and Monetization</h2>
<p>Once an app has successfully been onboarded, SKUs can be added to the app within the developer portal. Initially, there will be 2 types of SKUs you can add to your apps: User and Guild Subscriptions. Currently, an app can only publish 1 SKU at a time but can create as many unpublished SKUs as desired.</p>
<h3 id="h_01HB8WP0GB5883T28K8SCJB02E">Types of SKUs</h3>
<p><strong>User Subs</strong></p>
<ul>
    <li>Allows a user to purchase access to your app’s premium features across all servers they are in with the app</li>
</ul>
<p><strong>Guild Subs</strong></p>
<ul>
    <li>Allows a server owner to purchase access to your app’s premium features that can be offered to all members on that server</li>
</ul>
<p>For more information on setting up SKUs and monetizing your app, visit the <a href="https://support-dev.discord.com/hc/en-us/articles/17298449675927" target="_blank" rel="noopener noreferrer">Premium Apps SKU Setup</a> article.</p>
<p>Once an app has SKUs added within the Developer Portal, they can be accessed through the API and devs can code the subscription functionality into their app.</p>
<h3 id="h_01HB8WP0GBZGA9R5KP8QTJ2GWH">Monetization</h3>
<p>Once an app has set up a SKU and they have been integrated into the app's code, there are 4 ways users will be able to subscribe:</p>
<ul>
    <li>Server admins can use the Integrations settings menu
        <ul>
            <li>Go to Server Settings → Integrations → [App Name] → scroll to the bottom of the page, and see upgrade buttons</li>
        </ul>
    </li>
    <li>Attempting to run a premium command will offer the Upgrade button in the response</li>
    <li>Bot profiles will offer the Upgrade button</li>
    <li>App Directory profiles will offer a Premium tab containing subscription details and an Upgrade option.</li>
</ul>
<p><img src="https://support-dev.discord.com/hc/article_attachments/17822040299415" alt="Untitled (1).png"></p>
<h3 id="h_01HB97XFN09QYQVV0VRPQGV39K">Can I keep using my existing payment system?</h3>
<p>Yes. You can continue using existing payment systems, such as Patreon or Stripe integrations on external websites. We'll provide an update to our policies soon to clarify how we’ll treat the promotion of third-party payment options on Discord as we continue to expand our native monetization features. Discord is committed to ensuring great, safe, and secure premium experience for all of our users and developers.</p>
<h2 id="h_01HB8WP0GB6ZFV8TQ18SZ77K11">Step 3 - Payout</h2>
<p>Once an app has made its first $100 it will become eligible for payout. A review will be conducted and if everything looks good, your team will begin to receive payouts.</p>
<p>For more information please visit the <a href="https://support-dev.discord.com/hc/en-us/articles/17299902720919" target="_blank" rel="noopener noreferrer">Premium Apps Payouts</a> article.</p>
<p>Once you have a verified app, owned by a team, that supports slash commands or has the message content privileged intent, you can check out the <a href="https://support-dev.discord.com/hc/en-us/articles/17297949965079" target="_blank" rel="noopener noreferrer">How Do I Monetize My App?</a> article for next steps!</p>
<p>After reviewing this and other linked articles, if you have any questions about Premium Apps and App Subscriptions, please <a href="https://dis.gd/developer-support/premium-apps" target="_blank" rel="noopener noreferrer">reach out to our Developer Support team</a>!</p>