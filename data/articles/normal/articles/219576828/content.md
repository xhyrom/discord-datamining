<p id="docs-internal-guid-1d3c3afd-7fff-c4da-0b7b-6a18dac61322"><strong>Multi-Factor Authentication</strong> (MFA for short) is the best way to add an extra layer of security to your Discord account to make sure that only you have the ability to log in.</p>
<p id="docs-internal-guid-d9166d1b-7fff-15b1-173b-cfcbd562f19a"><span class="wysiwyg-font-size-large"><strong>What this article covers: </strong></span></p>
<ul>
    <li>
        <a href="#docs-internal-guid-daf505a7-7fff-2117-1758-6d58aefebc6a">Types of Multi-Factor Authentication </a>
        <ul>
            <li><a href="#docs-internal-guid-c08017e4-7fff-6508-8580-d9b7737f7440">Security Keys </a></li>
            <li><a href="#docs-internal-guid-85b84278-7fff-8feb-2dee-666f27b383af">Authenticator App</a></li>
            <li><a href="#docs-internal-guid-b4892e97-7fff-b602-382f-a97b6433dcd1">SMS/Texts</a></li>
            <li><a href="#h_01HE39XGDJGMD2QB66BM428DRN">Backup Codes</a></li>
        </ul>
    </li>
    <li>
        <a href="#docs-internal-guid-03c8da49-7fff-62e9-3532-96a827822ef0">The Setup Process on Desktop</a>
        <ul>
            <li><a href="#docs-internal-guid-28110f37-7fff-29c7-ca44-06219bea7492">Registering A Security Key on Desktop</a></li>
        </ul>
    </li>
    <li>
        <a href="#docs-internal-guid-462edc81-7fff-f79e-59f8-53572ff86018">Setting up your Authentication App</a>
        <ul>
            <li><a href="#docs-internal-guid-fcb90c67-7fff-111c-157c-24acbed2410f">Authenticating with Google</a></li>
            <li><a href="#docs-internal-guid-b717eebd-7fff-3ed9-e2e7-85445511304f">Authenticating with Authy</a></li>
            <li><a href="#docs-internal-guid-669f14ea-7fff-2b47-4801-0ab6a156c493">Authenticating with MFA</a></li>
        </ul>
    </li>
    <li>
        <a href="#docs-internal-guid-0b94b292-7fff-a940-9ba3-59d7477d0f1e">The Setup Process on Mobile</a>
        <ul>
            <li><a href="#docs-internal-guid-4c3659ae-7fff-9e5b-99cd-25a7e3fe6ff2">Registering a Security Key on Mobile</a></li>
            <li><a href="#docs-internal-guid-0c0c90ac-7fff-acf8-12dc-9abd89ea663f">Authenticating on the Go</a></li>
        </ul>
    </li>
    <li><a href="#h_01HE3B8FC09F7ZQ8YMAJNWTN6M">I forgot to download my codes! </a></li>
    <li><a href="#docs-internal-guid-bf2b4b60-7fff-6ed3-1f26-b4feac49d642">I forgot to add my phone as backup! </a></li>
    <li><a href="#h_01HE39Q7S19ECFQAV6G202A01G">Server-wide 2FA</a></li>
</ul>
<h1 id="docs-internal-guid-daf505a7-7fff-2117-1758-6d58aefebc6a"><strong><span style="color: #2e3338;">Types of Multi-Factor Authentication </span></strong></h1>
<p><span style="color: #2e3338;">There are three options to add MFA to your account: Security Keys, an Authenticator App, and SMS. You can choose any one of these options or any combo, but there are positives and negatives to each. We’ll talk through each option and give you some info on the security of each one.</span></p>
<h2 id="docs-internal-guid-c08017e4-7fff-6508-8580-d9b7737f7440"><strong>Security Keys</strong></h2>
<p><span style="color: #2e3338;">This is the latest in personal security, and also the most secure! With Security Keys, you’ll be able to use a passkey (ex. FaceId, TouchId, Windows Hello) to gain access to your account. The way this works is when you register a passkey for Discord, you’ll protect it using your biometric (fingerprint or face) and the key itself lives on your device and in your provider’s cloud (e.g. Apple/Microsoft). Whenever you want to use the passkey, you authenticate using your biometric so that your device sends the passkey data to Discord. And to be clear, we’re never given any biometrics data from your device.</span></p>
<p><span style="color: #2e3338;">This method is the best way to protect your account because it is simple to use, on your own devices, backed up in the cloud, and, most importantly, phishing resistant.</span></p>
<h3 id="h_01HE39WXXWC7GRCKQ3SFCHK4DX">For all you Discord Developers out there, we’re working on adding Security Keys to the Developers space, but in the meantime, if you want to use Security Keys for your account, you should keep your Authenticator App enabled to get access to your Apps!</h3>
<h2 id="docs-internal-guid-85b84278-7fff-8feb-2dee-666f27b383af"><strong>Authenticator App</strong></h2>
<p>The Authenticator App is an excellent choice that mixes flexibility with security. Plus the name makes us think we’re in a spy novel. With an Authenticator App, you’ll register a QR code or manually enter a key with an app on your phone or a password manager and then generate a new code for you to use every 30 seconds. </p>
<p>As long as you have your phone or access to your password manager, you can make new codes and hackers will have a hard time getting access to your app. But these codes are still phishable, so if you lose your phone, this could lead to a predicament.</p>
<h2 id="docs-internal-guid-b4892e97-7fff-b602-382f-a97b6433dcd1"><strong>SMS/Texts</strong></h2>
<p>This is a common option. If we can be transparent with you, SMS MFA is better than no MFA, but not by a lot. Hackers have been able to intercept text messages or call up phone carriers to do a “SIM Swap” attack and take over phone numbers. </p>
<p>Since you can only use SMS if you already have an Authenticator App enabled, you should really think carefully about whether it’s worth adding a more easily stolen MFA after setting up a better option with your Authenticator App. Either way, there’s always…</p>
<h2 id="h_01HE39XGDJGMD2QB66BM428DRN"><strong>Backup Codes</strong></h2>
<p>What happens when the worst case scenario happens? You’ve registered your security key, but your laptop’s been stolen; or configured your Authenticator, but lost your phone. How can you regain access to your account? With Backup codes!</p>
<p>Backup codes are special, random codes we give you after signing up for MFA. Keep these secret and well-protected. We recommend storing them in a password manager (like 1Password, or KeePas[XC]), but you can also print them out and hide them if you’d prefer. </p>
<p>If you are locked out of your account and need to get past MFA, you can use one of these codes in order to recover and reconfigure your account. Each code can only be used once, so once your account is under your control again with new MFA configured, generate some new codes and hide them away safely again.</p>
<h1 id="docs-internal-guid-03c8da49-7fff-62e9-3532-96a827822ef0"><strong>The Setup Process on Desktop</strong></h1>
<p id="docs-internal-guid-7452720d-7fff-0d9e-9c55-5feac6fead01">Start by selecting the the cog wheel [<img style="height: 20px; width: 20px;" src="https://lh7-us.googleusercontent.com/-835uFOCR5cGURzDQwoYvgbJw1zuvfjBSzxMalUZq03NEfJHwvTNUgBzUktMyjt5Egzb7q8VBOfc3aW_VzEixu-BF1WZjzcrtxPlSWa2GshMQf6_jiL9gE7QXf2pAgrdOn8SgVwh-RJ6qamxO96mXrs">] next to your username.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18702867658647" alt="image23.png"></p>
<p id="docs-internal-guid-795a155d-7fff-f426-435f-35d27117a4cf">You'll be redirected to your <strong>User Settings</strong> and land on the <strong>My Account</strong> page. While here, you will be able to view the Multi-Factor Authentication options by referring to <strong>Password and Authentication</strong>. </p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18702883636503" alt="image12.png"></p>
<h2 id="docs-internal-guid-28110f37-7fff-29c7-ca44-06219bea7492">Registering Security Keys on Desktop </h2>
<p class="wysiwyg-text-align-left"><span style="color: #2e3338;">To set up a Security Key, select </span><strong><span style="color: #2e3338;">Register a Security Key</span></strong><span style="color: #2e3338;"> and follow the prompts to reauthenticate. You’ll land on this notification so you can go grab your key and plug it in:</span></p>
<p class="wysiwyg-text-align-center"><strong><img src="https://support.discord.com/hc/article_attachments/18702883642135" alt="image17.png"></strong></p>
<p id="docs-internal-guid-c1d4b875-7fff-6207-c178-424c4a8f274c"><span style="color: #2e3338;">Press </span><strong><span style="color: #2e3338;">Let’s go </span></strong><span style="color: #2e3338;">and interact with your key (you might need to tap it, select it, put your finger on it, scan your face, make an incantation over it). Afterwards, be sure to name it something you’ll remember.</span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883646871" alt="image11.png" width="577" height="366"></span></p>
<p id="docs-internal-guid-d4fa49ac-7fff-d698-e2df-23d17d1562dc">Then, remember to download and store your Backup Codes.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18702867680407" alt="image20.png" width="586" height="406"></p>
<p id="docs-internal-guid-facef78e-7fff-660e-0e50-4855d56f9fc8"><span style="color: #2e3338;">And you’re done! </span></p>
<p><span style="color: #2e3338;">You can now register another Security Key on this device or a different device (you can have up to 16 at the same time). If you’re adding a Security Key on another device and it’s asking for an MFA code, but you’ve only registered Security Keys on other devices, remember you can always use a Backup Code to get the process going, then regenerate them to get a fresh set once you’re all done.</span></p>
<p><span style="color: #2e3338;">When you log in, you’ll get one additional challenge after entering your username and password to use you security key:</span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702867685143" alt="image6.png"></span></p>
<p id="docs-internal-guid-0c66b8e9-7fff-d868-1c1e-63c361e799bf"><span style="color: #2e3338;">Press </span><strong><span style="color: #2e3338;">Authenticate with security key</span></strong><span style="color: #2e3338;"> to interact with your Security Key, and you’re in!</span></p>
<h1 id="docs-internal-guid-462edc81-7fff-f79e-59f8-53572ff86018"><strong>Setting up your Authentication App </strong></h1>
<h2 id="docs-internal-guid-fcb90c67-7fff-111c-157c-24acbed2410f"><strong>Authenticating with Google </strong></h2>
<p id="docs-internal-guid-03d35702-7fff-2937-32aa-ad9f2a8a8c0a">If you're using Google Authenticator, you'll be prompted to choose your input method, either <strong>scanning a barcode</strong> or <strong>entering a provided key</strong>:</p>
<p class="wysiwyg-text-align-center"><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/208466847/GASetup.png" alt="" width="600" height="368"></p>
<p id="docs-internal-guid-8da8c25a-7fff-7276-cbf1-69cd10a68ffe">Either one of these will work fine (since Discord provides both input methods) but keep in mind, <strong>Google Authenticator on Android will need you to install another barcode scanning app if you want to use that option.</strong> They require the <strong>ZXing Barcode Scanner</strong> app, which is totally fine and dandy:</p>
<p class="wysiwyg-text-align-center"><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/208453968/ZXing.png" alt="" width="600" height="137"></p>
<p id="docs-internal-guid-00e20d00-7fff-9e81-0a30-8af11c4fa767">Or, you can just input the code provided in Discord; no Barcode Scanner required.</p>
<h2 id="docs-internal-guid-b717eebd-7fff-3ed9-e2e7-85445511304f"><strong>Authentication with Authy </strong></h2>
<p id="docs-internal-guid-ceaeddba-7fff-595c-b4b3-9aaee08441b4">Within Authy, you'll first need to enter your phone number and email to authenticate your phone:</p>
<p class="wysiwyg-text-align-center"><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/207674267/AAA.png" alt="" width="601" height="563"></p>
<p id="docs-internal-guid-349aac53-7fff-c06d-4b3a-3e811e50010e">You'll see a new pop-up with the option to verify via phone call or text message. Internal testing has yielded results that claim that the most recent smartphones are in fact capable of making and receiving phone calls, despite how rare this phenomenon appears.</p>
<p>Once you've authenticated your device, go ahead and press the "+" button in the center to add a new authentication account. Finally, you'll reach the A<strong>uthenticator Accounts</strong> screen. You'll have the option to scan a QR code, or enter the code manually.</p>
<p class="wysiwyg-text-align-center"><img class="shadow" src="https://support.discord.com/hc/en-us/article_attachments/207674447/ScantimeSrs.png" alt="" width="600" height="749"></p>
<h2 id="docs-internal-guid-669f14ea-7fff-2b47-4801-0ab6a156c493"><strong>Authenticating with MFA </strong></h2>
<p>Use Authy's (or Google Authenticator's) QR scanner on the QR code provided within Discord here:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/en-us/article_attachments/207611868/QRTime.png" alt="" width="500" height="546"></p>
<p>This'll generate a 6 digit code that is the final piece to enabling 2FA in Discord. Enter it in, and you're good to go.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/en-us/article_attachments/207611888/CodeTime.png" alt="" width="500" height="546"></p>
<p id="docs-internal-guid-d507dd62-7fff-c39e-9939-fe9e4ee79371">Once you've enabled MFA successfully, you'll have a fancy little box pop up with a couple suggestions to help make sure you can access your account in case of an emergency:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/360064012312" alt="You_did_it.png"><br><em>You did it!</em></p>
<p>You can now link your phone number to your account to help act as a backup method for obtaining 2FA codes. This is to help should you be worried about losing access to your authenticator app say by dropping your phone in water/lava/a hippo/etc.</p>
<p id="docs-internal-guid-2f29011f-7fff-053c-7539-b6bbf827274b">Make sure to also <strong>download your backup codes</strong>. </p>
<p><span style="color: #2e3338;">Now when you log in, you’ll see an additional prompt to enter an authentication code:</span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883660695" alt="image5.png"></span></p>
<p id="docs-internal-guid-3726a8a8-7fff-08de-ca2f-1d52cc70ecbd"><span style="color: #2e3338;">Enter a code, select </span><strong><span style="color: #2e3338;">Confirm</span></strong><span style="color: #2e3338;"> and you’re in!</span></p>
<h1 id="docs-internal-guid-0b94b292-7fff-a940-9ba3-59d7477d0f1e"><strong>The Setup Process on Mobile</strong></h1>
<p><span style="color: #2e3338;">Tap your avatar in the bottom left corner to head into your <strong>User Settings &gt; Account.</strong></span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><strong><img src="https://support.discord.com/hc/article_attachments/18702867696279" alt="image18.png" width="344" height="705"></strong></span></p>
<p id="docs-internal-guid-f7c1dab9-7fff-d164-5440-80f450d95de0"><span style="color: #2e3338;">Now you’re looking at the same options as on Desktop.</span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883674135" alt="image28.png" width="348" height="722"></span></p>
<h2 id="docs-internal-guid-4c3659ae-7fff-9e5b-99cd-25a7e3fe6ff2"><strong>Registering A Security Key on Mobile</strong></h2>
<p><span style="color: #2e3338;">Select<strong> Security Keys </strong>to start setting up a security key<strong>. </strong>Next you’ll press <strong>Register a Security Key.</strong></span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><strong><img src="https://support.discord.com/hc/article_attachments/18702883679895" alt="image27.png" width="362" height="751"></strong></span></p>
<p id="docs-internal-guid-ba066723-7fff-be8b-fd16-b28124d11ae7">Your phone will wait to let you get ready (get your physical token, stretch that finger, fix your hair). When you’re good to go, press <strong>Let’s go</strong>. Your phone will then let you register and choose a name for this key, then tap <strong>Finish.</strong></p>
<p class="wysiwyg-text-align-center"><strong><img src="https://support.discord.com/hc/article_attachments/18702883689751" alt="image16.png" width="352" height="731"></strong></p>
<p id="docs-internal-guid-0f329a94-7fff-87ed-8534-1f1e7584b604">And you’re done! Make sure to <strong>download and store your backup codes</strong>.</p>
<h2 id="docs-internal-guid-0c0c90ac-7fff-acf8-12dc-9abd89ea663f"><strong>Authenticating on the Go</strong></h2>
<p>Tap the <strong>Enable Two-Factor Auth</strong> button to get started. To begin the MFA process, you'll either need to download Google Authenticator or Authy on your mobile device.</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18702883695255" alt="image1.png" width="346" height="718"></p>
<p id="docs-internal-guid-fb742fe8-7fff-4c2f-8487-9dff850b72fc">Once you have either Google Authenticator or Authy installed, you will be prompted to connect your account to the authentication app. (<a href="#docs-internal-guid-fcb90c67-7fff-111c-157c-24acbed2410f">Press here for instructions</a>.)</p>
<p>Once you connected, you've enabled 2FA successfully! 🎉</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18702867729431" alt="image7.png" width="316" height="655">   <img src="https://support.discord.com/hc/article_attachments/18702883716503" alt="image2.png" width="314" height="655"></p>
<p id="docs-internal-guid-ca7e1e59-7fff-289e-b179-1cf264ed850e">You can now link your phone number to your account to help act as a backup method for obtaining MFA codes (remember that SMS codes aren’t super secure). This should help you be less worried about losing access to your authenticator app.</p>
<p>Make sure to also <strong>download and store your backup codes</strong>.</p>
<h1 id="h_01HE3B8FC09F7ZQ8YMAJNWTN6M"><strong>I forgot to download my codes!</strong></h1>
<p><span style="color: #2e3338;">It's all good, you can still do this in your account settings! Your settings screen will now look something like this:</span><span style="color: #2e3338;"><br></span><span style="color: #2e3338;">Head into your </span><strong><span style="color: #2e3338;">User Settings</span></strong> <strong><span style="color: #2e3338;">&gt; My Account. </span></strong></p>
<p class="wysiwyg-text-align-center"><strong><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883724183" alt="image25.png" width="450" height="646"></span></strong></p>
<p id="docs-internal-guid-4658e3f3-7fff-e615-f0b7-92b9bc9f84c6"><span style="color: #2e3338;">Select  </span><strong><span style="color: #2e3338;">View Backup Codes</span></strong><span style="color: #2e3338;"> to see your codes (and which one’s you’ve used) as well as get the option to download them. </span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883730583" alt="image21.png" width="452" height="914"></span></p>
<h4 id="docs-internal-guid-58f3cfe8-7fff-9400-d1a6-85e5617bf25c" class="wysiwyg-text-align-center"><strong><span style="color: #666666;">These codes have been rotated already, obviously.</span></strong></h4>
<h1 id="docs-internal-guid-bf2b4b60-7fff-6ed3-1f26-b4feac49d642"><strong>I forgot to add my phone as backup!</strong></h1>
<p><span style="color: #666666;"><span style="color: #2e3338;">No worries again! Head back to your account and press the </span></span><strong><span style="color: #666666;"><span style="color: #2e3338;">Enable SMS Authentication</span></span></strong><span style="color: #666666;"><span style="color: #2e3338;"> button</span></span><strong><span style="color: #666666;"><span style="color: #2e3338;">.</span></span></strong></p>
<p class="wysiwyg-text-align-center"><strong><span style="color: #666666;"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702867758487" alt="image26.png" width="534" height="359"></span></span></strong></p>
<p id="docs-internal-guid-f3c87c89-7fff-3bc8-b43e-82fd7f72ddd5"><span style="color: #2e3338;">Verify that number in Discord.</span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883737751" alt="image4.png"></span></p>
<p id="docs-internal-guid-b6e05403-7fff-bf1c-c098-8793783ab804"><span style="color: #2e3338;">Now, after you login with username + password, you’ll get an additional screen like this:</span></p>
<p class="wysiwyg-text-align-center"><span style="color: #2e3338;"><img src="https://support.discord.com/hc/article_attachments/18702883741335" alt="image8.png"></span></p>
<p id="docs-internal-guid-8aa5bb43-7fff-41f7-5769-eb7d80ad7b1d"><span style="color: #2e3338;">Just enter the code from your text message and you’re in!</span></p>
<p><span style="color: #2e3338;">Now when you login, if the feature is enabled, you will have a link to request an SMS with a code to authenticate yourself as a backup option.</span></p>
<h1 id="h_01HE39Q7S19ECFQAV6G202A01G">Server-wide 2FA</h1>
<p id="docs-internal-guid-783a57e8-7fff-7d3a-54c7-be7f2433176b">Server owners also have an extra security lever they can pull to prevent unwanted perpetrators from causing havoc in their servers.</p>
<p>In your <strong>Server Settings</strong> menu, you'll see a <strong>Moderation</strong> tab that allows you to require 2FA server-wide. While this doesn't require everyone that joins the server to have 2FA enabled, it does mean that anyone with admin powers won't get to use them unless they enable it. They'll see this pop up instead:</p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/18709481979543" alt="image28.png" width="393" height="415"></p>
<p id="docs-internal-guid-97d9b61d-7fff-0a54-8418-d7cd9f321264">The specific permissions that are disabled ("Admin privileges") include:</p>
<p>Kick Members, Ban Members, Administrator, Manage Channels, Manage Server, Manage Roles, and Manage Messages.</p>
<p>Selecting the <strong>Resolve</strong> link in the popup will bring you directly to the security tab in your <strong>User Settings</strong> menu, where you can follow the above listed steps to get that set up and regain your Admin powers.</p>