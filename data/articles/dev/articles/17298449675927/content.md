<p>⚠️ Note that at the time of launch, you can publish one SKU at a time</p>
<p>If your App and Team are eligible for<a href="https://support-dev.discord.com/hc/en-us/articles/17709085688727"> Premium Apps</a> and have successfully Onboarded your app, you are ready to start adding SKUs. If the Team Owner hasn’t yet completed the Onboarding flow, review the<a href="https://support-dev.discord.com/hc/en-us/articles/17708927296663"> Premium Apps Onboarding</a> article for guidance.</p>
<p>So what is a SKU? A SKU, or stock-keeping unit, is a tool used to keep track of inventory. In the context of Premium Apps, premium features can be thought of as "products" that your App offers. These “products” can be tracked through their own SKU and managed in the Developer Portal of your application.</p>
<h2>
    <a id="_b2xiqk56h3y"></a><strong>Types of SKUs</strong>
</h2>
<p>At this time, there are two types of SKUs supported by Premium Apps</p>
<h3>
    <a id="_a86rsudzjbrc"></a><strong>User Subs</strong>
</h3>
<ul>
    <li>Allows a user to purchase access to your app’s premium features across all servers they are in with the app</li>
</ul>
<h3>
    <a id="_yrgmxi293b94"></a><strong>Guild Subs</strong>
</h3>
<ul>
    <li>Allows a server owner to purchase access to your app’s premium features that can be offered to all members on that server</li>
</ul>
<p>Now that you know what a SKU is and the different types of SKUs available, you can start managing your premium features in the Developer Portal. Your app can currently feature one published SKU, but there is no limit to the unpublished SKUs you can create for your app.</p>
<h2>
    <a id="_hsnag06p8iut"></a><strong>Adding SKUs</strong>
</h2>
<p>⚠️ As described more in our<a href="https://support.discord.com/hc/en-us/articles/5330075836311-Monetization-Terms"> Monetization Terms</a>, you must accurately and fully describe your premium offering. Furthermore, in compliance with the<a href="https://support-dev.discord.com/hc/en-us/articles/17442400631959"> Premium Apps Policy</a>, any names, descriptions, icons, and other text or imagery representing your premium SKU cannot contain any bad or harmful content.</p>
<p>In the app’s developer portal page under the Monetization tab, Team Owners and Admins can add SKUs.</p>
<p><img src="https://support-dev.discord.com/hc/article_attachments/18060512722071"></p>
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
<h2>
    <a id="_3vharfd2vwij"></a><strong>Integrating SKUs</strong>
</h2>
<p>Once SKUs have been added, you can begin to integrate them into your App via the API. Visit the<a href="https://discord.com/developers/docs/monetization/overview"> Monetization overview</a> in the API documentation, for guidance on how to accomplish this.</p>
<h2>
    <a id="_sc6do09ab73r"></a><strong>Managing SKUs</strong>
</h2>
<p>When Managing SKUs from the Developer Portal, you will have options to initially add SKUs but following that you will be able to publish/unpublish and remove them as well.</p>
<h3>
    <a id="_c2udi84nffwz"></a><strong>Publish/Unpublish SKUs</strong>
</h3>
<p>While many SKUs can be added, keep in mind that 1 SKU can be published at a time, which makes it available for sale. If you wish to change the SKU that is published, you can do so at any time by first unpublishing the currently published one. Keep in mind that when you unpublish a SKU, it is no longer available for sale, but users who have already subscribed will remain subscribed and you must continue to make the premium offering available to them until the end of their subscription.</p>
<h3>
    <a id="_pw4v79x4behd"></a><strong>Remove SKUs</strong>
</h3>
<p>When removing SKUs, keep in mind that this will unsubscribe everyone from it. If you are having any trouble removing SKUs, please<a href="https://dis.gd/developer-support/premium-apps"> reach out to Developer Support</a>.</p>
<p>After reviewing this and other linked articles, if you have any questions about Premium Apps SKU setup, please reach out to our Developer Support team!</p>