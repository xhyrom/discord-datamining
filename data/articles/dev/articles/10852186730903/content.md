<h2>What is it?</h2>
<p>You can get a general overview of Linked Roles and Connections <a href="https://support-dev.discord.com/hc/en-us/articles/10852166586647" target="_self">here.</a></p>
<p>To build an app with Connection features, you will first need an Application and Bot user configured in the Developer Portal, a target Connection, and a linked role. This article will walk you through these components.</p>
<p class="callout">For an example app and more detailed info on each step, visit our Developer Docs: <a href="https://discord.com/developers/docs/tutorials/configuring-app-metadata-for-linked-roles" target="_self" rel="undefined">https://discord.com/developers/docs/tutorials/configuring-app-metadata-for-linked-roles</a></p>
<h2>Walkthrough</h2>
<p>First, ensure you have created a Bot user in the <a href="https://discord.com/developers/applications" target="_self">Developer Portal</a> to interface with your Connection of choice. The Bot will also need a redirect URL for the OAuth2 flow. The redirect URL would depend on the server as well as how you are hosting your app.</p>
<p>You're also going to need to set a custom endpoint URL for your linked roles in the Developer Portal.</p>
<p>Additionally, in order to get information from something like Steam or any other API, you'll need to visit their developer docs to configure and send a HTTP request to their API. </p>
<h3>Linked Roles</h3>
<p>The last thing to configure is the linked role itself. You are able to <a href="https://discord.com/developers/docs/resources/application-role-connection-metadata" target="_self">register the linked role metadata</a> by setting them in a PUT request to our API similar to registering slash commands that are managed by the app. This metadata will be used as the requirements users must meet to get the linked role.</p>
<p class="callout">Note: use a Bot token for authentication and not a user token.</p>
<p class="callout"><img src="https://support-dev.discord.com/hc/article_attachments/11997377811351" alt="Roles_-_Links_Tab.png" width="662" height="552"></p>
<p>Finally, head to your server settings and create a role. In the Links tab, you'll be able to add <em>requirements</em> for the role. With that done, you're all set!</p>
<p><img src="https://support-dev.discord.com/hc/article_attachments/10852430798487" alt="Server_Dropdown_-_Linked_Roles.png" width="659" height="469"></p>
<p>Now if users want to connect their accounts, they can click the server name at the top left and look for the linked role that is being managed by your app.</p>