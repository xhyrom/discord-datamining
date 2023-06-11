<p>Discord's built in <strong>Webhooks</strong> function as an easy way to get automated messages and data updates sent to a text channel in your server.</p>
<p>Think of them as one of those fancy pneumatic tube things you used to love sending money into at a bank and watch disappear, but instead of never seeing your money again, you're actually sending messages into Discord from another platform.</p>
<p>By creating a webhook endpoint in your server, you'll generate a Webhook URL that you can drop into a number of different other services to link the two.</p>
<p>While everyone absolutely loves pneumatic tubes (100% true), it's important to note that <strong>webhooks require another website to use (though programming-inclined users can make their own tube schoomper themselves).</strong> </p>
<p>Some services and websites are built to easily incorporate webhooks and send messages outwards, but some aren't. Here's a little handy reference list:</p>
<table style="height: 109px;" width="372">
    <tbody>
        <tr>
            <td class="wysiwyg-text-align-center" style="width: 184px;">  <span class="wysiwyg-underline"><strong><span class="wysiwyg-color-blue">Can use webhooks:</span></strong></span>
            </td>
            <td class="wysiwyg-text-align-center" style="width: 185px;"><span class="wysiwyg-underline"><span class="wysiwyg-color-red"><strong>Can't really use webhooks:</strong></span></span></td>
        </tr>
        <tr>
            <td class="wysiwyg-text-align-center" style="width: 184px;">  <span class="wysiwyg-underline">GitHub</span>
            </td>
            <td class="wysiwyg-text-align-center" style="width: 185px;">  <span class="wysiwyg-underline">Twitch / YouTube</span>
            </td>
        </tr>
        <tr>
            <td class="wysiwyg-text-align-center" style="width: 184px;">  <span class="wysiwyg-underline">CircleCI</span>
            </td>
            <td class="wysiwyg-text-align-center" style="width: 185px;">  <span class="wysiwyg-underline">Nelly The Hamster</span>
            </td>
        </tr>
        <tr>
            <td class="wysiwyg-text-align-center" style="width: 184px;">  <span class="wysiwyg-underline">DataDog</span>
            </td>
            <td class="wysiwyg-text-align-center" style="width: 185px;">  <span class="wysiwyg-underline">Facebook</span>
            </td>
        </tr>
    </tbody>
</table>
<h1>Making a Webhook</h1>
<p>With that in mind, if you want to update your Discord server with <strong>GitHub commits and pull requests</strong> or <strong>track analytics from DataDog</strong> or anything similar, here's how!</p>
<ol>
    <li>Open your <strong>Server Settings</strong> and head into the <strong>Integrations</strong> tab:</li>
    <li>Click the "<strong>Create Webhook</strong>" button to create a new webhook!</li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500000463501/Screen_Shot_2020-12-15_at_4.41.53_PM.png" alt="Screen_Shot_2020-12-15_at_4.41.53_PM.png"></p>
<p>You'll have a few options here. You can:</p>
<ul>
    <li> <strong>Edit the avatar: </strong>By clicking the avatar next to the Name in the top left</li>
    <li>
        <strong>Choose what channel the Webhook posts to:</strong> By selecting the desired text channel in the  dropdown menu.
    </li>
    <li>
        <strong>Name your Webhook: </strong>Good for distinguishing multiple webhooks for multiple different services.
    </li>
</ul>
<p>You now have your own handy URL / pneumatic tube <em>schoomp</em>-er that you can link to more websites to receive messages from. </p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/360101553853/Screen_Shot_2020-12-15_at_4.51.38_PM.png" alt="Screen_Shot_2020-12-15_at_4.51.38_PM.png" width="650" height="393"></p>
<h1>Quick Example: GitHub Webhook Integration</h1>
<p>Since webhooks can't really function on their own and need to be linked to another website to function as intended, I figured it'd be best to include a sample integration for any of you GitHub enthusiasts and code-pushers.</p>
<p>You can use Discord's webhooks to send any code merge or push updates in a repository of yours into a text channel in your server.  </p>
<p><strong><span class="wysiwyg-font-size-large">1. Get the webhook URL for the server/channel you want to receive messages:</span></strong></p>
<p>In my server, I've created a text channel labeled #general-chat and I want my repo updates to post messages here!</p>
<p>Therefore, I'll grab the webhook URL for this channel by pressing the <strong>Copy Webhook URL</strong> button:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/1500000455142/Screen_Shot_2020-12-15_at_4.45.52_PM.png" alt="Screen_Shot_2020-12-15_at_4.45.52_PM.png" width="601" height="609"></p>
<p><strong><span class="wysiwyg-font-size-large">2. Add the webhook URL into your GitHub repo settings</span></strong></p>
<p>Choose the repository that you'd like to get updates from in your Discord server. Once you've selected the repo, go into the Settings &gt; Webhooks menu</p>
<p>And then click the "Add webhook" button, and enter the Discord-generated URL in the "Payload URL" blank. </p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/en-us/article_attachments/214526988/findIngithub.png" alt=""></p>
<h3>To make the webhook display messages properly, it's really really really REALLY really important that you append '/github' at the end of it. Yes, like five-reallys important.</h3>
<p>In addition to the URL, you have some more GitHub-specific options to choose from. For <strong>content type</strong>, stick with application/json. Discord's webhook format really likes JSON. In the next section, you can choose to customize what kind of events trigger webhook messages. </p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/en-us/article_attachments/214602687/addStuff.png" alt=""></p>
<p>Click the last "Add webhook" button beneath the event notifications customization option, and you're all set! Pushing any updates in the repo (including editing the readme file) will show up in your text channel: </p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/en-us/article_attachments/214527028/wowMuchwebhook.png" alt=""> </p>
<p>And you're all set! GitHub is just one example of an integration that can post messages via webhook. If you've got a knack for JSON application-building or HTTP POST requests and want to customize your own webhooks, you can dig up some more information in <a href="https://discord.com/developers/docs/resources/webhook" target="_self">our developer docs</a>.</p>