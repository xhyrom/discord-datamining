<p>
  If
  <span
    class="discussion-id-fe35fe6a-8e74-45b0-8c2c-613ab64b4ba6 notion-enable-hover"
    data-token-index="1"
    >you</span
  >r App and Team are eligible for
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    style="
      cursor: pointer;
      color: inherit;
      word-wrap: break-word;
      text-decoration: inherit;
    "
    tabindex="0"
    href="https://support-dev.discord.com/hc/en-us/articles/17709085688727"
    rel="noopener noreferrer"
    data-token-index="3"
    data-darkreader-inline-color=""
    ><span
      class="link-annotation-unknown-block-id-1414434848"
      style="
        border-bottom: 0.05em solid;
        border-color: rgba(55, 53, 47, 0.4);
        opacity: 0.7;
      "
      data-darkreader-inline-border-top=""
      data-darkreader-inline-border-right=""
      data-darkreader-inline-border-bottom=""
      data-darkreader-inline-border-left=""
      >Premium Apps</span
    ></a
  >
  and you have completed the Onboarding step,
  <span
    class="discussion-id-12855f64-d37a-4de3-ad0b-4acc6020918c notion-enable-hover"
    data-token-index="5"
    >you</span
  >
  are ready to start adding SKUs and creating your App’s Store view. If the Team
  Owner hasn’t yet completed the Onboarding flow, review the
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    style="
      cursor: pointer;
      color: inherit;
      word-wrap: break-word;
      text-decoration: inherit;
    "
    tabindex="0"
    href="https://support-dev.discord.com/hc/en-us/articles/17708927296663"
    rel="noopener noreferrer"
    data-token-index="7"
    data-darkreader-inline-color=""
    ><span
      class="link-annotation-unknown-block-id--1976813488"
      style="
        border-bottom: 0.05em solid;
        border-color: rgba(55, 53, 47, 0.4);
        opacity: 0.7;
      "
      data-darkreader-inline-border-top=""
      data-darkreader-inline-border-right=""
      data-darkreader-inline-border-bottom=""
      data-darkreader-inline-border-left=""
      >Premium Apps Onboarding</span
    ></a
  >
  article for guidance. This article will cover what SKUs are, managing them
  from the Developer Portal, and curating your App’s Store view.<!-- notionvc: 45b92b4f-79b0-4f11-8ecd-dd8bc5ec4fb0 -->
</p>
<h2 id="h_01HW87RGTTFT2HX2VHY6FBXHW2">Table of Contents</h2>
<ul>
  <li><a href="#h_01HW87Q57FFMRAJCJY20P40SRP">So What Is A SKU?</a></li>
  <li><a href="#h_01HAWGE42AHRH5CNNZ5WQBSCDT">Types of SKUs</a></li>
  <li><a href="#h_01HAWGE42AV48E0ACGK0YG046K">Creating SKUs</a></li>
  <li><a href="#h_01HW884JH97FEY71M9ZM93ZWYN">Managing SKUs</a></li>
  <li><a href="#h_01HW88K5RF2PGFJVKECHN6X2HP">Premium App Store View</a></li>
  <li><a href="#h_01HW890AK0WWNZ3WZWV5GN4T14">Analytics</a></li>
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
  that an app or activity offers. These “products” can be tracked through their
  own SKU and managed in the Developer Portal of your application.<!-- notionvc: d303411b-c9d0-4a56-88a7-64673780699a --><br /><!-- notionvc: add20b4b-66b4-42c0-9718-7893dd3a5582 -->
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
    premium features across all servers they are in with that app.<!-- notionvc: cd50ecdc-16b2-4215-884d-7c01914fa776 -->
  </li>
</ul>
<h4 id="h_01HW8KX0XGS8K4DGQ3WTEV8NHS"><strong>Guild Subscription</strong></h4>
<ul>
  <li>
    A recurring subscription that allows a server owner to purchase access to
    your app’s premium features that can be offered to all members on that
    server.<!-- notionvc: b98ce399-5d07-4fe4-af13-2edc42860330 -->
  </li>
</ul>
<h3 id="h_01HW8KX42M4R8JJ24FVT6C780W">One-Time Purchases (OTP):</h3>
<h4 id="h_01HW8KX6F5KR26JEEYYADVPRFE"><strong>Durable OTPs</strong></h4>
<ul>
  <li>
    A one-time purchase that is permanent and is not subject to either renewal
    or consumption, such as lifetime access to an app's premium features.<!-- notionvc: f63f8059-0473-4e5f-8947-7a3d36a43e8e -->
  </li>
</ul>
<h4 id="h_01HW8KX9CT9BSMES8BQHMNBAED"><strong>Consumable OTPs</strong></h4>
<ul>
  <li>
    A one-time, non-renewable purchase that provides access, such as a temporary
    power-up or boost in a game.<!-- notionvc: 6b47e887-f4b3-4e83-a963-cf48d46da2d2 -->
  </li>
</ul>
<p>
  Now that you know what a SKU is and the different types of SKUs available, you
  can start managing your premium features in the Developer Portal. Your app can
  feature as many published Subscription SKU and OTP SKUs as desired, with a
  limit of 50.
  <!-- notionvc: 433b3cd0-1a42-434f-81d5-c9d00bd70a8c --><!-- notionvc: 580314f9-36a2-4c62-9516-7fc16e61bbf8 -->
</p>
<h2 id="h_01JEY0KT79G1E9SC3227H65N7R">Creating SKUs</h2>
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
<p>
  Several options can be customized for your app’s or activity's premium
  offerings:
</p>
<ul>
  <li>A name (max 80 characters)</li>
  <li>A description (max 160 characters)</li>
  <li>An icon</li>
  <li>A banner</li>
</ul>
<p>
  You're also able to customize a list of up to 6 benefits. These are displayed
  on the Premium App Store view, the App Directory, and during the purchase and
  cancellation flows to explain to users the benefits of your premium offering.
  These benefits can have:
</p>
<ul>
  <li>An emoji, standard or custom</li>
  <li>A name (max 80 characters)</li>
  <li>A description (max 160 characters)</li>
</ul>
<h2 id="h_01HW884JH97FEY71M9ZM93ZWYN">Managing SKUs</h2>
<p>
  When Managing SKUs from the Developer Portal, you will initially be able to
  create<span
    class="discussion-id-fc77301b-70d2-4207-a15f-f059ca0d5ef0 notion-enable-hover"
    data-token-index="1"
  >
    SKUs </span
  >but once created, you will be able to publish, unpublish, and delete them as
  well. Below is a list of states a SKU can be in and actions to take, once it
  is created:<!-- notionvc: 76270829-bf24-4231-a404-01f70bcf9030 -->
</p>
<h3 id="h_01JEXSCBCT4VHM0B9FNJ3YAQ7M">STATES:</h3>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/28481534275223"
  />
</p>
<h4 id="h_01JEXSEC0SQ77JXR5MR31TZNSK">Unpublished</h4>
<p>
  This is the state a SKU starts in. Unavailable means it cannot be purchased
</p>
<h4 id="h_01JEXSEC0S56FMRQ8QC1EJA3ZG">Published</h4>
<p>This state means a SKU can be purchased</p>
<h4 id="h_01JEXSEC0SGASF4F5RGKNV5HFN">Available in Store</h4>
<p>
  There will be a shop icon next to Published Apps that are available in your
  Shop. If there is not a shop icon but your application is still in a Published
  state, the SKU is still accessible from the API.
</p>
<p> </p>
<h3 id="h_01JEXSCYRBYZ2ZYHCP4PYAYTRE">ACTIONS:</h3>
<h4 id="h_01JEXSFJ2787M4615Y4JZMTVYD">Publish SKU</h4>
<p>
  This action sets a SKU state to Available. When publishing a SKU you will have
  2 options. Available via Store &amp; API will be the choice if you are setting
  up a Store. Available via API only will be better suited for Activities.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/28481576410647"
  />
</p>
<h4 id="h_01JEXSFJ27C1Q8M76HBDB52230">Unpublish SKU</h4>
<p>
  This action sets a SKU state to Unavailable. Keep in mind that when you
  unpublish a SKU, it won't cancel subscriptions right away, but subscriptions
  will not renew if the end of the billing cycle is reached while a SKU is in
  the Unavailable state. Once desired changes are made, you will want to
  republish the SKU to avoid any lapse in billing cycles. Unpublishing does not
  delete a SKU.
</p>
<h4 id="h_01JEXSFJ27JS9C3WRX11H24JHW">Add to Store/Remove from Store</h4>
<p>
  This action applies only to published SKUs. It lets you control whether your
  SKU appears in the Store or is only accessible through the API.
</p>
<h4 id="h_01JEXSFJ27WNJQABBJGAVBCCWN">Delete SKU</h4>
<p>
  This action, found in the edit SKU page, removes a SKU from the UI—however, it
  is not completely deleted. Deleted SKUs will still appear in the
  <a
    href="https://discord.com/developers/docs/resources/entitlement#list-entitlements"
    >List Entitlements</a
  >
  endpoint and Analytics. When you delete a SKU, existing subscriptions continue
  until their billing cycle ends, at which point they will not renew. If you
  experience any issues deleting SKUs, please
  <a href="https://dis.gd/developer-support/premium-apps"
    >reach out to Developer Support</a
  >.
</p>
<h4 id="h_01JEXSFJ2748T792AFBTXJNYWE">Edit SKU</h4>
<p>
  If you wish to change a SKU that is published, you can do so at any time by
  first unpublishing the desired SKU. Keep in mind that when you unpublish a
  SKU, it won't cancel subscriptions right away, but subscriptions will not
  renew if the end of the billing cycle is reached while a SKU is in the
  Unavailable state. Once desired changes are made, you will want to republish
  the SKU to avoid any lapse in billing cycles.
</p>
<p>
  If you edit a SKU to change the price, keep in mind that this would only
  change the price for new subscribers. Current subscribers will continue to pay
  the price at which they initially purchased the SKU.
</p>
<p>
  <img
    src="https://support-dev.discord.com/hc/article_attachments/28481534286359"
  />
</p>
<h2 id="h_01HW88K5RF2PGFJVKECHN6X2HP">Premium App Store View</h2>
<p>
  The Premium App Store view is a feature aimed at enhancing the Premium Apps
  experience for both developers and users, alike. In addition to the App
  Directory, the Store view showcases premium features to users right from a
  Bot’s profile page in any server the App is in.<!-- notionvc: 7ad287c5-ed73-4df4-8cb0-d27b1445ed9f -->
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
  Developers have the ability to set up a Store Page in the Developer Portal,
  when managing SKUs. To set up your Premium App’s Store view take the following
  steps:<!-- notionvc: 74a08589-456c-4488-99de-c767db2007a2 -->
</p>
<ul>
  <li><a href="#h_01HAWGE42AV48E0ACGK0YG046K">Create a SKU</a> </li>
  <li>Add a SKU icon, banner and benefits</li>
  <li>
    <a href="#h_01HW884JH9SA7GR08SWGGB3ZJT">Integrate the SKU into your app</a>
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
<h3 id="h_01JEXSM0H7HSEP6620BKXEMQV1">Deep Linking</h3>
<p>
  Once your SKUs and Store are all set up, they can be surfaced more easily to
  Users with deep linking. Deep linking allows you to link directly to a SKU or
  Store using our App Directory Store URL scheme. Visit the Managing SKUs
  documentation to learn more about
  <a
    href="https://discord.com/developers/docs/monetization/managing-skus#linking-to-a-specific-sku"
    >Linking To A Specific SKU</a
  >
  or
  <a
    href="https://discord.com/developers/docs/monetization/managing-skus#linking-to-your-store"
    >Linking To Your Store</a
  >.<!-- notionvc: 1f3042c6-9728-438d-8c2c-50d00d6941df -->
</p>
<h3 id="h_01JEXSMJ7VCXT5ENNAYERCG3F1">Integrating SKUs</h3>
<p>
  Once SKUs have been created, you can integrate them into your App or Activity
  via the API. You can learn more about Integrating SKUs in your App
  <a
    href="https://discord.com/developers/docs/monetization/managing-skus#integrating-skus-in-your-app"
    >here</a
  >. When a SKU has been published and successfully integrated it will then be
  available in the App’s Store view.
</p>
<p><!-- notionvc: 64fbe9d8-772f-429e-b0fa-d2b7a2c17409 --></p>
<h2 id="h_01HW890AK0WWNZ3WZWV5GN4T14">Analytics</h2>
<p>
  In the Monetization section of the Developer Portal, you will also see an
  <strong>Analytics</strong> tab. When reviewing a Premium App’s analytics data,
  a couple of considerations should be made.
</p>
<h3 id="h_01K2FSAXCD6RSMHW2YNHC7NVRJ">Availability</h3>
<p>
  The available data can be considered up-to-date as of 24 hours prior for
  Subscriptions and One-Time Purchases, so any representation of data will
  reflect that of the previous day, based on system updates. This applies to
  user and revenue data, alike.
</p>
<h3 id="h_01K2FSAXCEWGD6PT3N0QCYZRDA">Accuracy</h3>
<p>
  If after reviewing the analytics, it appears the data is inaccurate and the
  aforementioned time periods have been taken into account, keep in mind that
  only data for subscribers who have the
  <em>Use data to improve Discord</em> setting enabled will be represented.
</p>
<p>
  Users that do not have this setting enabled will not reflect in a Premium
  App’s analytics. However, this only applies to user data and does not apply to
  revenue data. Any representation of revenue data will be accurate based on the
  above mentioned availability period.
</p>
<p>
  ⚠️ If you are not seeing SKU data populate, please ensure you have selected a
  SKU from the dropdown next to the date range, toward the top of the Analytics
  page.
</p>
<h3 id="h_01K2FSAXCEB2FKJMY224NGNCJ4">Exporting Data</h3>
<p>
  If you are interested in exporting your Premium App’s Analytics data for your
  own use, you can do so in the form of a CSV at the bottom of the Analytics
  page. Current or previous month data can be exported, but keep in mind that
  this data can be considered up-to-date as of 24 hours prior.
</p>
<p><!-- notionvc: a26e9449-c951-4e5c-b3fa-da3714d04ef0 --></p>
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
  <a
    class="notion-link-token notion-focusable-token notion-enable-hover"
    style="
      cursor: pointer;
      color: inherit;
      word-wrap: break-word;
      text-decoration: inherit;
    "
    tabindex="0"
    href="https://dis.gd/developer-support/premium-apps"
    rel="noopener noreferrer"
    data-token-index="1"
    data-darkreader-inline-color=""
    ><span
      class="link-annotation-unknown-block-id-253898030"
      style="
        border-bottom: 0.05em solid;
        border-color: rgba(55, 53, 47, 0.4);
        opacity: 0.7;
      "
      data-darkreader-inline-border-top=""
      data-darkreader-inline-border-right=""
      data-darkreader-inline-border-bottom=""
      data-darkreader-inline-border-left=""
      >reach out to our Developer Support team</span
    ></a
  >!<!-- notionvc: 02fc4d65-e256-4771-ba55-7b209b1dccc9 -->
</p>
