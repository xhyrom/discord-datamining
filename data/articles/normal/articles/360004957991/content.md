<p><span class="wysiwyg-font-size-large"><strong>What this article covers:</strong></span></p>
<ul>
    <li><a href="#h_01HDRZVGK9XFK1BRNC9MVVQQCX">What is a Data Package?</a></li>
    <li><a href="#h_01HDRZVGK9HMXFHVWEEP4DQPBP">How to Request a Data Package</a></li>
    <li>
        <a href="#h_01HDRZVGK9Q2T2QZ8HK1MEX9XR">What information is inside a Data Package?</a>
        <ul>
            <li><a href="#h_01HDRZVGK9A36G9W6VKWV73ZKN">Account</a></li>
            <li><a href="#h_01HDRZVGK93EK6EY5CWX4S04SY">Activity</a></li>
            <li><a href="#h_01HDRZVGK9C41Y3QJ3Q72KVPKV">Messages</a></li>
            <li><a href="#h_01HDRZVGK908Y6NEZ9QX51QG5P">Servers</a></li>
            <li><a href="#h_01HDRZVGK9S1PJPQFR5W5V04C7">Programs</a></li>
        </ul>
    </li>
</ul>
<h1 id="h_01HDRZVGK9XFK1BRNC9MVVQQCX">What is a Data Package?</h1>
<p>A Data Package is a ZIP folder of files that you can request through your <strong>User Settings</strong> that contains all of your Discord data for your account. This includes messages, current servers you’re in, activity, and more. The files within the ZIP folder are JSON files that can be opened easily in Notepad on Windows or through Textedit on MacOS. You can also drag and drop them into a browser like Chrome or Firefox. CSV files can easily be opened in Excel or Google Sheets.</p>
<h1 id="h_01HDRZVGK9HMXFHVWEEP4DQPBP">How to Request a Data Package</h1>
<h3 id="h_01HDRZVGK9N2NZCKYX26DV3TQ0"><span style="color: #434343;" data-darkreader-inline-color="">The link to download your Data Package will be valid for 30 days.</span></h3>
<p>You can request your Data Package through the desktop, mobile, and browser. Here are steps on how to do this.</p>
<p>1. Tap on <strong>User Settings</strong> to the right of your avatar in the bottom left of the Discord app.</p>
<p>2. Next, under <strong>User Settings</strong> head to<strong> Privacy &amp; Safety</strong>.</p>
<p>3. Scroll down until you see <strong>Request all of my Data </strong>and tap <strong>Request my Data</strong></p>
<p>4. You will then see a pop-up confirming that you want to request your data. If you want to continue with the request, tap on <strong>Request my Data</strong>.</p>
<p>5. Finally you’ll receive a confirmation stating you should receive your data package in 30 days. Tap on <strong>Okay</strong> to confirm and have the pop-up close.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18610744760087" alt="data_package_request.gif"></p>
<h3 id="h_01HDRZVGK90VYSZ72VH643RDRF"><span style="color: #434343;" data-darkreader-inline-color="">If you disable or delete your account before you receive your download link, it will cancel your request.</span></h3>
<h1 id="h_01HDRZVGK9Q2T2QZ8HK1MEX9XR">What information is inside a Data Package?</h1>
<h2 id="h_01HDRZVGK9A36G9W6VKWV73ZKN">Account</h2>
<p>The account folder contains a couple different items. The first is the avatar that you are using and the second is a JSON file which contains the following information:</p>
<ul>
    <li>Whether you allow email notifications.</li>
    <li>Your Games Tab settings. (Users you subscribe to, Users you opt-out of including.)</li>
    <li>Your IP Address.</li>
    <li>Any accounts you have connected to Discord. (Twitch, Twitter, Steam, etc.) </li>
    <li>Your Discord discriminator number.</li>
    <li>A list of any active sessions you have; PC, Mobile, Browser. (IP Address included.)</li>
    <li>Your Friends list.</li>
    <li>Your Block list.</li>
    <li>Your Account Settings. (Dark Theme/Light Theme, Show Game Status, etc.)</li>
    <li>Payment Information. (If you have subscribed to Nitro.)</li>
    <li>Developer Information. (For any webhooks, bots, etc.)</li>
</ul>
<h2 id="h_01HDRZVGK93EK6EY5CWX4S04SY">Activity</h2>
<p>The activity folder contains four folders, each with a JSON file that has information about the actions you have taken on Discord. </p>
<ul>
    <li>Analytics - This is a record of some of your actions within Discord. The information is used to improve your Discord experience.
        <ul>
            <li>You can disable tracking analytics here: <strong>User Settings</strong> &gt; <strong>Privacy &amp; Safety</strong> &gt; disable <strong>Use data to improve Discord</strong> </li>
        </ul>
    </li>
    <li>Modeling - This is data we use to better tailor certain parts of Discord to you, like the Games Tab.
        <ul>
            <li>You can disable this here: <strong>User Settings</strong> &gt; <strong>Privacy &amp; Safety</strong> &gt; disable <strong>Use data to customize my Discord experience</strong>
            </li>
        </ul>
    </li>
    <li>Reporting - This folder contains a JSON file with data we use in order to operate our business. (Information such as messages sent, or your Nitro subscription, as an example.)</li>
    <li>Trust &amp; Safety - This folder contains data we use in order to protect our service from bad actors. This data is deleted after 180 days.</li>
</ul>
<h2 id="h_01HDRZVGK9C41Y3QJ3Q72KVPKV">Messages</h2>
<p>The messages folder contains all the messages that you have sent on Discord. These are broken down separately into folders based on Direct Messages, Group Direct Messages, and channels that you have chatted in. The number for each folder is the Channel ID for where the messages were sent. There is a JSON file which also contains a full list of the folders included.</p>
<p>When you select a folder, you'll notice it contains a couple items. The first is a JSON file which will include information about what is contained; Guild ID, Channel ID, and Channel Name if it is a file containing messages from a server. The Channel ID, and User IDs if it is a file containing messages from a DM or Group DM.</p>
<p>The second is a CSV file which contains the transcript of your messages. It is made up of four different columns</p>
<ul>
    <li>ID - The message ID</li>
    <li>Timestamp - The date and exact time your message was sent.</li>
    <li>Contents - Your message.</li>
    <li>Attachments - A CDN link to any images, or files you included in your message.</li>
</ul>
<h3 id="h_01HDRZVGK995CVWTS56QEWMXCZ"><span style="color: #434343;" data-darkreader-inline-color="">If you manually delete a message - it is no longer stored in Discord and therefore will not be included in your Data Package.</span></h3>
<h2 id="h_01HDRZVGK908Y6NEZ9QX51QG5P">Servers</h2>
<h3 id="h_01HDRZVGK9YZY228TPH5KDT9JS"><span style="color: #434343;" data-darkreader-inline-color="">If you leave a server before requesting your Data Package, that server will  not be included. Your Data Package only includes servers you are a member of at the time of the request.</span></h3>
<p>The servers folder contains information for all of the servers that you are a member of. This includes servers that you own. The information provided for each is a little different. There is a JSON file which also contains a full list of the folders included.</p>
<p>The folder for a server you own will contain the following. </p>
<ul>
    <li>A folder containing emoji that you have uploaded.</li>
    <li>A JSON file containing actions from your Audit Log.</li>
    <li>A JSON file containing a list of banned users.</li>
    <li>A JSON file containing a list of your channels along with their permissions.</li>
    <li>A JSON file containing the ID information for the emoji you have uploaded.</li>
    <li>A JSON file containing the settings for your server (guild).</li>
    <li>A JSON file containing information for any webhook you have implemented.</li>
</ul>
<p>The folder for a server that you are a member of will contain the following.</p>
<ul>
    <li>A JSON file containing actions from the last 90 days that pertain to your account from the Audit Log.</li>
    <li>A JSON file containing the server ID and name.</li>
</ul>
<h2 id="h_01HDRZVGK9S1PJPQFR5W5V04C7">Programs</h2>
<p>If you previously applied to the Partners Program, HypeSquad Program, or Verified Server Program, any information you provided in your applications will be in the JSON folder. If you never applied for any of these programs, then your Programs folder will be empty.</p>
<p>An example for a HypeSquad application will contain the information you provided as follows:</p>
<ul>
    <li>HypeSquad referrer and referral code.</li>
    <li>HypeSquad Event information. (Events you attend, duration of events, frequency you attend events.)</li>
    <li>Country you are located in.</li>
    <li>The Server you are applied under</li>
    <li>Your website.</li>
</ul>
<p>The information included will vary based on what you provide, and which programs you previously applied for.</p>
<h3 id="h_01HDS08Y8PP0KFA6315X8AYEGG">
    <span style="color: #434343;" data-darkreader-inline-color="">Our Support Team cannot assist you with going through your Data Package, however, if you have any questions or notice something is missing please reach out through here: </span><a href="https://support.discord.com" target="_blank" rel="noopener noreferrer">https://support.discord.com</a>
</h3>