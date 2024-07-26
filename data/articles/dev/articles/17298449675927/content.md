<p class="callout">
  ⚠️ Note that currently, only one Subscription SKU can be published at a time
  and as many One-Time Purchase SKUs can be published as desired.
</p>
<p>
  If your App and Team are eligible for
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17709085688727"
    target="_blank"
    rel="noopener noreferrer"
    >Premium Apps</a
  >
  and you have completed the Onboarding step,
  <span
    class="discussion-id-12855f64-d37a-4de3-ad0b-4acc6020918c notion-enable-hover"
    data-token-index="1"
    >you</span
  >
  are ready to start adding SKUs and creating your App’s Store view. If the Team
  Owner hasn’t yet completed the Onboarding flow, review the
  <!-- notionvc: ef715c4f-cd0b-4696-85c1-6b7b1fdaf6c9 -->
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/17708927296663"
    target="_blank"
    rel="noopener noreferrer"
    >Premium Apps Onboarding</a
  >
  article for guidance.
</p>
<h2 id="h_01HW87RGTTFT2HX2VHY6FBXHW2">Table of Contents</h2>
<ul>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HW87Q57FFMRAJCJY20P40SRP"
      >So What Is A SKU?</a
    >
  </li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HAWGE42AHRH5CNNZ5WQBSCDT"
      >Types of SKUs</a
    >
  </li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HAWGE42AV48E0ACGK0YG046K"
      >Creating SKUs</a
    >
  </li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HW884JH97FEY71M9ZM93ZWYN"
      >Managing SKUs</a
    >
  </li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HW88K5RF2PGFJVKECHN6X2HP"
      >Premium App Store View</a
    >
  </li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HW890AK0WWNZ3WZWV5GN4T14"
      >Analytics</a
    >
  </li>
</ul>
<h2 id="h_01HW87Q57FFMRAJCJY20P40SRP">So What is a SKU?</h2>
<p>
  <span
    class="discussion-id-3069d8ce-2c87-4086-a9a2-05b45c58dc73 notion-enable-hover"
    data-token-index="0"
    >A SKU, or stock-keeping unit,</span
  >
  is a tool used to keep track of inventory. In the context of Premium
  Apps,<span
    class="discussion-id-f8c0efa5-8c4a-4301-b31f-2691445d1191 notion-enable-hover"
    data-token-index="2"
  >
    premium features can be thought of as "products"</span
  >
  that an App offers. These “products” can be tracked through their own SKU and
  managed in the Developer Portal of your application.
  <!-- notionvc: add20b4b-66b4-42c0-9718-7893dd3a5582 -->
</p>
<h2 id="h_01HAWGE42AHRH5CNNZ5WQBSCDT">Types of SKUs</h2>
<p>There are 4 types of SKUs supported by Premium Apps at this time:</p>
<h3 id="h_01HW8KWQJX9QCRHV5820DKSCEB">Subscriptions<strong>:</strong></h3>
<h4 id="h_01HW8KWY52F93JCQD6NMWQXEPG">
  <strong>Personal Subscription</strong>
</h4>
<ul>
  <li>
    A recurring subscription that allows a user to purchase access to an app’s
    premium features across all servers they are in with that app.
  </li>
</ul>
<h4 id="h_01HW8KX0XGS8K4DGQ3WTEV8NHS"><strong>Guild Subscription</strong></h4>
<ul>
  <li>
    A recurring subscription that allows a server owner to purchase access to
    your app’s premium features that can be offered to all members on that
    server.
  </li>
</ul>
<h3 id="h_01HW8KX42M4R8JJ24FVT6C780W">One-Time Purchases (OTP):</h3>
<h4 id="h_01HW8KX6F5KR26JEEYYADVPRFE"><strong>Durable OTPs</strong></h4>
<ul>
  <li>
    A one-time purchase that is permanent and is not subject to either renewal
    or consumption, such as lifetime access to an app's premium features.
  </li>
</ul>
<h4 id="h_01HW8KX9CT9BSMES8BQHMNBAED"><strong>Consumable OTPs</strong></h4>
<ul>
  <li>
    A one-time, non-renewable purchase that provides access, such as a temporary
    power-up or boost in a game.
  </li>
</ul>
<p>
  Now that you know what a SKU is and the different types of SKUs available, you
  can start managing your premium features in the Developer Portal.
  <span
    class="discussion-id-33c9fdda-fbfb-41c9-b8bf-766208a461e2 notion-enable-hover"
    data-token-index="1"
    >Your app can currently feature one published Subscription SKU and as many
    published OTP SKUs as desired. There is no limit to the unpublished SKUs you
    can </span
  ><span
    class="discussion-id-896246fb-bf52-4afa-a72b-1a0018981713 discussion-id-33c9fdda-fbfb-41c9-b8bf-766208a461e2 notion-enable-hover"
    data-token-index="2"
    >create</span
  ><span
    class="discussion-id-33c9fdda-fbfb-41c9-b8bf-766208a461e2 notion-enable-hover"
    data-token-index="3"
  >
    for your app.</span
  ><!-- notionvc: aa315991-ec40-4bab-80bf-6270e22f3665 --><br /><!-- notionvc: 52b67843-03bf-4aaa-a3af-e110fab661d3 -->
</p>
<h2 id="h_01HAWGE42AV48E0ACGK0YG046K">Creating SKUs</h2>
<p class="callout">
  ⚠️ As described more in our
  <a
    href="https://support.discord.com/hc/en-us/articles/5330075836311-Monetization-Terms"
    target="_blank"
    rel="noopener noreferrer"
    >Monetization Terms</a
  >, you must accurately and fully describe your premium offering. Furthermore,
  in compliance with the
  <a
    href="https://support.discord.com/hc/en-us/articles/10575066024983-Monetization-Policy"
    target="_blank"
    rel="noopener noreferrer"
    >Monetization Policy</a
  >, any names, descriptions, icons, and other text or imagery representing your
  premium SKU cannot contain any bad or harmful content.
</p>
<p>
  In the app’s developer portal page under the Monetization tab, Team Owners and
  Admins can create SKUs and Publish them to the Store view.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/23036712590743"
    alt="dev_portal_create_SKU.png"
  />
</p>
<p>Several options can be customized for your app’s premium offering:</p>
<ul>
  <li>A name for your premium SKU, max 80 characters.</li>
  <li>A description for your premium SKU, max 160 characters</li>
  <li>An icon for your premium SKU</li>
  <li>A banner for your premium SKU</li>
</ul>
<p>
  You're also able to customize a list of benefits. These are displayed on the
  Premium App Store view, the App Directory, and during the purchase and
  cancellation flows to explain to users the benefits of your premium offering.
  These benefits can have:
</p>
<ul>
  <li>Up to 6 benefits</li>
  <li>An emoji, standard or custom</li>
  <li>A name, max 80 characters</li>
  <li>A description, max 160 characters</li>
</ul>
<h2 id="h_01HW884JH97FEY71M9ZM93ZWYN">Managing SKUs</h2>
<p>
  When Managing SKUs from the Developer Portal, you will have options to
  initially create SKUs but following that you will be able to publish/unpublish
  and delete them as well. Below is a list of states a SKU can be in and actions
  to take, once it is created:
</p>
<h3 id="h_01HW8RFERKAB16K1RVBAT08GF8">Unavailable</h3>
<p>
  This is the state a SKU starts in. Unavailable means it cannot be purchased
</p>
<h3 id="h_01HW8RFERKT4WGECV9AFXEXS9E">Available</h3>
<p>This state means a SKU can be purchased</p>
<h3 id="h_01HW8RFERKSQQ114R2ZESVTZJ7">Publish</h3>
<p>This action sets a SKU state to Available</p>
<h3 id="h_01HW8RFERKJC212C3JY3MZXDN2">Unpublish</h3>
<p>
  This action makes a SKU Unavailable. Note: it won’t cancel all subscribers
  right away, but when they reach their renewel period, it will not renew them.
  Does not delete a SKU.
</p>
<h3 id="h_01HW8RFERKKYDVZGD3JWRHGV3S">Delete</h3>
<p>
  Deletes a SKU in the UI, but keep in mind this doesn’t fully delete. Deleted
  SKUs would still be listed from the endpoint. When deleting SKUs, keep in mind
  that this will unsubscribe everyone from it. If you are having any trouble
  removing SKUs, please
  <a href="https://dis.gd/developer-support/premium-apps"
    >reach out to Developer Support</a
  >.
</p>
<h3 id="h_01HW884JH9DEREEPTV4E436DZT">Editing SKUs</h3>
<p>
  If you wish to change the SKU that is published, you can do so at any time by
  first unpublishing the currently published one. Keep in mind that when you
  unpublish a SKU, it is no longer available for sale, but users who have
  already subscribed will remain subscribed and you must continue to make the
  premium offering available to them until the end of their subscription.
</p>
<h3 id="h_01HW884JH9SA7GR08SWGGB3ZJT">Integrating SKUs</h3>
<p>
  Once SKUs have been created, you can begin to integrate them into your App via
  the API. Visit the
  <a href="https://discord.com/developers/docs/monetization/overview"
    >Monetization overview</a
  >
  in the API documentation, for guidance on how to accomplish this. When a SKU
  has been published and successfully integrated it will then be available in
  the App’s Store view.
</p>
<h2 id="h_01HW88K5RF2PGFJVKECHN6X2HP">Premium App Store View</h2>
<p>
  We're excited to announce the introduction of the Premium App Store view! This
  is a new feature aimed at enhancing the Premium App subscription experience
  for both developers and users, alike. In addition to the App Directory, the
  Store view showcases premium features to users right from a Bot’s profile page
  in any server the App is in.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/23036692437271"
    alt="App_Store_Bot_Profile.png"
    width="300"
    height="469"
  />
</p>
<h3 id="h_01HW88MZ09ZJZCZNH7S6RWMEDD">Setting Up Your Store</h3>
<p>
  Developers now have the ability to set up a Store page in the Developer
  Portal, when managing SKUs. To set up your Premium App’s Store view take the
  following steps:
</p>
<ul>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HAWGE42AV48E0ACGK0YG046K"
      >Create a SKU</a
    > 
  </li>
  <li>Add a SKU icon, banner and benefits</li>
  <li>
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/17298449675927#h_01HW884JH9SA7GR08SWGGB3ZJT"
      >Integrate the SKU into your app</a
    >
  </li>
  <li>Publish a SKU to your Store</li>
</ul>
<p>
  Managing SKUs has been improved with the addition of icons and banners to
  bring life to your offerings and Store, along with easy to use buttons to
  publish/unpublish and edit a store listing. A preview of the store page is
  also available to view how it would look to end users and edits to your Store
  view can be published in real-time.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/23036712619415"
    alt="Premium App Store Editing.png"
    width="424"
    height="523"
  />
</p>
<h3 id="h_01HW88SCJ487EWSKTS8P7F5894">Accessing the Store</h3>
<p>
  Users can now access an App’s store page from the Bot’s profile in a server.
  This allows users to view available subscription and one-time purchases,
  select a subscription to view its perks, benefits and details, and even make
  purchases directly from an App’s Store page!
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/23036712625815"
    alt="App Store OTP listings.png"
    width="423"
    height="338"
  />
</p>
<p><!-- notionvc: ceb12802-967f-477a-b64f-bd1336741d90 --></p>
<p><!-- notionvc: 29b0863f-c452-49c7-8f35-3ed8827ce87a --></p>
<h2 id="h_01HW890AK0WWNZ3WZWV5GN4T14">Analytics</h2>
<p class="callout">
  ⚠️ If you are not seeing SKU data populate, please ensure you have selected a
  SKU from the dropdown, toward the top of the Analytics page. 
</p>
<p>
  In the Monetization section of the developer portal, you will also see an
  <strong>Analytics</strong> tab. When reviewing a Premium App’s analytics data,
  a couple of considerations should be made.
</p>
<h3 id="h_01HW890AK1K9EMD35TH5TJH06Z">Availability</h3>
<p>
  The available data can be considered up-to-date data as of 24 hours prior. Any
  representation of subscription data will reflect that of the previous day,
  based on system updates. This applies to user and revenue data, alike.
  <!-- notionvc: 560c9b19-7e12-4a21-bc61-d914a946daf4 -->
</p>
<h3 id="h_01HW890PB3ZBG7SJ4Z19GWA952">Accuracy</h3>
<p>
  If after reviewing the analytics, it appears the data is inaccurate and the 24
  hour period has been taken into account, keep in mind that only subscribers
  who have <code>Use data to improve Discord</code> enabled will be represented.
  Users that do not have this setting enabled will not reflect in a Premium
  App’s subscription analytics. However, this only applies to user data and does
  not apply to revenue data. Any representation of revenue data will be accurate
  based on the above mentioned availability period.
  <!-- notionvc: 54c2d93b-75e1-42a5-b98c-73abdcc3133c -->
</p>
<h3 id="h_01HW891E1BGHPKY7Z2ANJSZ1Y5">Exporting Data</h3>
<p>
  If you are interested in exporting your Premium App’s Analytics data for your
  own use, you can do so in the form of a CSV at the bottom of the Analytics
  page.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/23036692482967"
    alt="aggregated_analytics.png"
    width="403"
    height="141"
  />
</p>
<p class="undefined"><!-- notionvc: 6657bd49-3873-4f34-8914-96eea14c632e --></p>
<p>
  After reviewing this and other linked articles, if you have any questions
  about Premium Apps SKU setup, please
  <a href="https://dis.gd/developer-support/premium-apps"
    >reach out to our Developer Support team</a
  >!
</p>
