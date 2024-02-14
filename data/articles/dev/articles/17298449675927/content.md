<p class="callout">⚠️ Note that at the time of launch, you can publish one SKU at a time</p>
<p>If your App and Team are eligible for <a href="https://support-dev.discord.com/hc/en-us/articles/17709085688727" target="_blank" rel="noopener noreferrer">Premium Apps</a> and have successfully Onboarded your app, you are ready to start adding SKUs. If the Team Owner hasn’t yet completed the Onboarding flow, review the <a href="https://support-dev.discord.com/hc/en-us/articles/17708927296663" target="_blank" rel="noopener noreferrer">Premium Apps Onboarding</a> article for guidance.</p>
<p>So what is a SKU? A SKU, or stock-keeping unit, is a tool used to keep track of inventory. In the context of Premium Apps, premium features can be thought of as "products" that your App offers. These “products” can be tracked through their own SKU and managed in the Developer Portal of your application.</p>
<h2 id="h_01HAWGE42AHRH5CNNZ5WQBSCDT">Types of SKUs</h2>
<p>At this time, there are two types of SKUs supported by Premium Apps</p>
<h3 id="h_01HB8Y9KX1AG3WV48HC16SD8W4">User Subs</h3>
<ul>
    <li>Allows a user to purchase access to your app’s premium features across all servers they are in with the app</li>
</ul>
<h3 id="h_01HB8Y9KX1R275K4V1A5NG2CQJ">Guild Subs</h3>
<ul>
    <li>Allows a server owner to purchase access to your app’s premium features that can be offered to all members on that server</li>
</ul>
<p>Now that you know what a SKU is and the different types of SKUs available, you can start managing your premium features in the Developer Portal. Your app can currently feature one published SKU, but there is no limit to the unpublished SKUs you can create for your app.</p>
<h2 id="h_01HAWGE42AV48E0ACGK0YG046K">Adding SKUs</h2>
<p class="callout">⚠️ As described more in our <a href="https://support.discord.com/hc/en-us/articles/5330075836311-Monetization-Terms" target="_blank" rel="noopener noreferrer">Monetization Terms</a>, you must accurately and fully describe your premium offering. Furthermore, in compliance with the <a href="https://support-dev.discord.com/hc/en-us/articles/17442400631959" target="_blank" rel="noopener noreferrer">Premium Apps Policy</a>, any names, descriptions, icons, and other text or imagery representing your premium SKU cannot contain any bad or harmful content.</p>
<p>In the app’s developer portal page under the Monetization tab, Team Owners and Admins can add SKUs.</p>
<p><img src="https://support-dev.discord.com/hc/article_attachments/17717777198999" alt="Screen Shot 2023-09-15 at 9.23.37 AM.png"></p>
<p>Several options can be customized for your app’s premium offering:</p>
<ul>
    <li>A name for your premium SKU, max 80 characters.</li>
    <li>A description for your premium SKU, max 160 characters</li>
    <li>An icon for your premium SKU</li>
</ul>
<p>You're also able to customize a list of benefits. These are displayed on the App Directory, and during the purchase and cancellation flows to explain to users the benefits of your premium offering. These benefits can have:</p>
<ul>
    <li>Up to 6 benefits</li>
    <li>An emoji, standard or custom</li>
    <li>A name, max 80 characters</li>
    <li>A description, max 160 characters</li>
</ul>
<h2 id="h_01HAWGE42A0VGD9M2ZX5TBK0DB">Integrating SKUs</h2>
<p>Once SKUs have been added, you can begin to integrate them into your App via the API. Visit the <a class="notion-link-token notion-focusable-token notion-enable-hover" tabindex="0" href="https://discord.com/developers/docs/monetization/overview" target="_blank" rel="noopener noreferrer" data-token-index="1">Monetization overview</a> in the API documentation, for guidance on how to accomplish this.</p>
<h2 id="h_01HAWGE42A5HC455XN7WX7WZG4">Managing SKUs</h2>
<p>When Managing SKUs from the Developer Portal, you will have options to initially <span class="discussion-id-fc77301b-70d2-4207-a15f-f059ca0d5ef0 notion-enable-hover" data-token-index="1">add SKUs </span>but following that you will be able to publish/unpublish and remove them as well.</p>
<h3 id="h_01HAWGFR0QHQMF9AVQQZK97ACN">Publish/Unpublish SKUs</h3>
<p>While many SKUs can be added, keep in mind that 1 SKU can be published at a time, which makes it available for sale. If you wish to change the SKU that is published, you can do so at any time by first unpublishing the currently published one. Keep in mind that when you unpublish a SKU, it is no longer available for sale, but <span class="discussion-id-904387d8-cccd-496c-b1a0-529121c2fb31 notion-enable-hover" data-token-index="1">users</span> who have already subscribed will remain <span class="discussion-id-398d4b7e-1df8-44da-9c44-ce476396c4cb notion-enable-hover" data-token-index="3">subscribed</span> and you must continue to make the premium offering available to them until the end of their subscription.</p>
<h3 id="h_01HAWGFTVPA4X1VMP4XCG7RFBZ">Remove SKUs</h3>
<p>When removing SKUs, keep in mind that this will unsubscribe everyone from it. If you are having any trouble removing SKUs, please <a href="https://dis.gd/developer-support/premium-apps" target="_blank" rel="noopener noreferrer">reach out to Developer Support</a>.</p>
<h2 id="h_01HCZP2Q53FJ6NBVP6J4DZ85MR">Analytics</h2>
<p>In the Monetization section of the developer portal, you will also see an <strong>Analytics</strong> tab. When reviewing a Premium App’s analytics data, a couple of considerations should be made.</p>
<h3 id="h_01HCZP2Q53SYESTQPWQK9YWS7Y">Availability</h3>
<p>The available data can be considered up-to-date data as of 24 hours prior. Any representation of subscription data will reflect that of the previous day, based on system updates. This applies to user and revenue data, alike.</p>
<h3 id="h_01HCZP2Q537A342VRBQ5932DWS">Accuracy</h3>
<p>If after reviewing the analytics, it appears the data is inaccurate and the 24 hour period has been taken into account, keep in mind that only subscribers who have <code>Use data to improve Discord</code> enabled will be represented. Users that do not have this setting enabled will not reflect in a Premium App’s subscription analytics. However, this only applies to user data and does not apply to revenue data. Any representation of revenue data will be accurate based on the above mentioned availability period.</p>
<p class="callout">⚠️ If you are not seeing SKU data populate, please ensure you have selected a SKU from the dropdown, toward the top of the Analytics page. </p>
<p>After reviewing this and other linked articles, if you have any questions about Premium Apps SKU setup, please <a href="https://dis.gd/developer-support/premium-apps">reach out to our Developer Support team</a>!</p>