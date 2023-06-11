<p>You can use Discord's new OBS Streamkit Overlay as an awesomely-customizable additional browser source to depict your voice / text chat activity while in game. This will help you display vital server information to your viewers without using up valuable stream real estate for the whole client. You can set up the overlay in three simple steps: <strong>installation</strong>, <strong>customization,</strong> and <strong>implementation</strong>.</p>
<p> </p>
<p><span class="wysiwyg-underline"><strong><span class="wysiwyg-font-size-large">1.</span></strong><span class="wysiwyg-font-size-large"> Installing and Authorizing the Streamkit Overlay</span></span></p>
<p><span class="wysiwyg-font-size-medium">When you open the overlay webpage, you'll see the choice to install the Overlay for OBS:</span></p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/210058827/InstallOBS.png" alt="" width="899" height="484"></p>
<p> </p>
<p><strong>Clicking install will let the overlay access your Discord client and control certain aspects of it. </strong>You'll see this information reflected under <strong>User Settings &gt; Connections &gt; Authorized Apps</strong>.</p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/210052167/AuthApp.png" alt="" width="600" height="450"></p>
<p> </p>
<p>Specifically speaking, the permissions granted allow overlay to perform an action in your client, specifically generating an invite to use (if you choose) in the status widget.</p>
<p><em>Side note: You can tell when an app like the Streamkit Overlay is connected and accessing parts of your client by the blue banner on the top of the client window. You can close it by clicking the X in the corner:</em></p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/210051807/StreamerlayBar.png" alt=""></p>
<p> </p>
<p> </p>
<p><span class="wysiwyg-underline"><strong><span class="wysiwyg-font-size-large">2.</span></strong><span class="wysiwyg-font-size-large"> Customizing your overlay</span></span></p>
<p><span class="wysiwyg-font-size-medium">O<span class="wysiwyg-font-size-medium">nce you've authorized the overlay in your client, you'll be taken right to the customization page. Directly under the OBS logo, you'll have the option to customize <strong>3 separate widgets: Status, Chat, and Voice.</strong> </span></span></p>
<p><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/209915308/Screen_Shot_2016-07-27_at_3.58.16_PM.png" alt="" width="602" height="197"></p>
<p> </p>
<p><span class="wysiwyg-font-size-medium">To get started with the preview, you'll want to first choose <strong>which server the overlay is showing</strong>, by selecting the server in the <strong>server dropdown menu</strong>.</span></p>
<p><span class="wysiwyg-font-size-medium"><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/209952968/ServerDropDown.png" alt=""></span></p>
<p> </p>
<p><span class="wysiwyg-font-size-medium">Each separate widget is customizable in different ways, and all 3 can be used simultaneously! As you adjust the text color, size, shadow size, and icon visibility, you'll see a live preview of that widget display in the preview window.</span></p>
<p> </p>
<p> </p>
<p><span class="wysiwyg-underline"><span class="wysiwyg-font-size-medium"><strong><span class="wysiwyg-font-size-large">3.</span></strong><span class="wysiwyg-font-size-large"> Implementing your overlay in OBS</span></span></span></p>
<p><span class="wysiwyg-font-size-medium">Once you've got your ideal overlay setup all decked out, be sure to check out the link in the installation panel:</span></p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/209953168/OBSCopyLink.png" alt=""></p>
<p> </p>
<p><span class="wysiwyg-font-size-medium">Installation is as simple as copying the link provided in the installation panel, pasting it as a new browser source within your OBS stream client, and adjusting the height and width to match the dimensions given by the overlay website. Each separate widget will yield a separate installation code, so just repeat the installation process for each individual widget you want to use.</span></p>
<p><span class="wysiwyg-font-size-medium"><strong>To add the overlay, you'll need to have the latest version of OBS Studio installed! Head over to the <a href="https://obsproject.com">OBS website</a> and grab the latest updates.</strong></span></p>
<p><em><span class="wysiwyg-font-size-medium">Side Pro Tip: If you're super-duper tech-savvy, you can make the Streamkit Overlay work in OBS Classic, but you'll need to download the necessary plugins from OBS' website. Not much we can help with there, unfortunately. </span></em></p>
<p><span class="wysiwyg-font-size-medium">Let's check it out:</span> </p>
<p> </p>
<p><span class="wysiwyg-font-size-large"><strong><span class="wysiwyg-underline">Implementation:</span></strong></span></p>
<p>1. Copy the installation link:</p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/209953568/OBSCopyLinkHighlight.png" alt=""></p>
<p> </p>
<p>2. Click the Add Source icon, and add a "BrowserSource":</p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/209910928/OBStudioAddEdit.png" alt=""></p>
<p> </p>
<p>3. Select "Create new", then name it:</p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/210007187/OBStudioNameAdd.png" alt=""></p>
<p> </p>
<p>4. Enter the installation link in the URL box, then adjust the Height &amp; Width as needed:</p>
<p><img src="https://support.discord.com/hc/en-us/article_attachments/209957808/URLWidthStudio.png" alt=""></p>
<p><em>Make sure your entered width &amp; height measurements are the same as provided by the Streamkit website:</em></p>
<p><em><img src="https://support.discord.com/hc/en-us/article_attachments/210054167/DimensionsStuff.png" alt=""> </em></p>
<p> </p>
<p>5. You'll see the overlay live on your stream preview now! You can drag &amp; adjust it as you need.</p>