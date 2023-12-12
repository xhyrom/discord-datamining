<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>In our previous post about <a href="https://discord.com/blog/how-discord-rolled-out-yubikeys-for-all-employees">rolling out YubiKeys to employees</a> we discussed WebAuthn and its importance in preventing phishing attacks targeting Discord employees. WebAuthn is the strongest form of multi-factor authentication that is easily accessible to everyone. For more information on WebAuthn, please read the linked blog post above where we talk about the security benefits provided by WebAuthn.&nbsp;</p>
            <p>We’ve been hard at work making multi-factor authentication easy to use and are happy to announce that WebAuthn has landed in Discord for all users across all platforms. In this post, we will talk about the engineering challenges we faced introducing WebAuthn to Discord and how we overcame them.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>A Primer on WebAuthn<br></strong></h2>
            <p>Before continuing we are going to briefly cover WebAuthn and why it was important for us to ship WebAuthn support in Discord. Let’s dive in!</p>
            <p>WebAuthn is an API that supports public key cryptography and is implemented across all major browsers and devices. We’ll cover three major benefits of WebAuthn: it is non-phishable, non-guessable, and easy to use.</p>
            <h3>Non-phishable Credentials</h3>
            <p>Phishing scams are the ways fraudulent actors convince users to reveal private information usually through impersonation or social engineering. If you give your password to someone else masquerading as someone in support, you’ve been phished! If you give your authenticator app code to someone else or put it into an untrustworthy website, you’ve been phished!&nbsp;</p>
            <p>WebAuthn is different from previous authentication methods because it is <strong>domain-bound</strong>. Effectively this means that ONLY discord.com can request you to login with WebAuthn with your Discord credentials. When you show up to an attacker-controlled site you will be unable to send your Discord-specific WebAuthn keys no matter how hard those fraudsters try. When an attacker tries to phish you, you will have nothing to send them since the private key is securely tucked away and unknown to even you.</p>
            <h3>Non-guessable Credentials</h3>
            <p>When logging in with password-based authentication, your password is static: it does not change on every login. If your password gets exposed in a data dump of some site, attackers obtain the value and can attempt to log in as you. If you happen to reuse the password on multiple sites (please don’t) then the attacker has a good chance of logging in as you in many places. On the other hand, when authenticating with WebAuthn the authentication response changes every time, meaning that even if an attacker dumps the WebAuthn database, they are still unable to login as you. Only your devices have access to the secret material required to complete the challenge, and that secret is not shared with external servers.</p>
            <h3>Ease of use</h3>
            <p>Compared to the alternatives WebAuthn is the clear winner for usability. Authenticator apps require users to scan a QR code for registration and copy/paste time-based codes. WebAuthn integrates with common authenticators like Windows Hello, Apple’s Face ID or Touch ID, and physical security keys meaning that users can scan their face, use their fingerprint, interact with a device, or simply click a ‘Continue’ button to verify their identity. With proper implementation, the WebAuthn experience is seamless to the user. And the WebAuthn experience has been greatly improved over time due to the investment into passkeys, an initiative designed to replace passwords with WebAuthn-based credentials.</p>
            <p>For more information on WebAuthn we suggest reading our blog post ‘<a href="https://discord.com/blog/how-discord-rolled-out-yubikeys-for-all-employees">How Discord Rolled out Yubikeys for All Employees</a>’. Let’s get back to the regularly scheduled programming!</p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Background: Legacy Multi-Factor Authentication (MFA) at Discord<br></strong></h2>
            <p>Before we introduced WebAuthn, Discord supported the following MFA methods:</p>
            <ul role="list">
                <li><strong>Time-based one-time password (TOTP)</strong>: Available for in-app challenges and login.</li>
                <li><strong>8-digit one-time use backup codes</strong>: Intended for users who lose access to their authenticators, but can still be used for in-app challenges and login.</li>
                <li><strong>Text Message (SMS) 6-digit verification code</strong>: Only available if TOTP is enabled, can be used only during Login.</li>
            </ul>
            <p>In order to obtain codes from users, it was the frontend’s job to check the user’s MFA status to determine whether to show a prompt. This generally led to frontend patterns such as:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/f15fcba5a386095a469fd853db47a4e4.js"></script>
            </div>
            <p>The backend checked the sent codes based on whether the user should have sent a code or not, like so:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/70ebb17d37da5d40fcf95d61aeb56d76.js"></script>
            </div>
            <p>This pattern has some drawbacks that make it unwieldy. First, whenever teams wanted to onboard routes to be protected by MFA, they would have to make both backend and frontend changes: the backend needed to accept and verify each MFA code, while the frontend needed to show an input modal to users; each frontend input modal had to be supported by Desktop, Browser, and Mobile UIs. On top of that, Mobile deployments shipped weeks later due to App Store reviews making the whole process take weeks for a single MFA check.</p>
            <p>The next unwieldy drawback is that teams would make their own promptForMFA function with custom components, meaning our app had unique MFA modals each making their own decisions and styling. Finally, this pattern only supported client-initiated challenges, meaning the frontend needed to self-determine whether to show an MFA prompt or silently fail. This was a non-starter for WebAuthn, because it requires a server-generated challenge: we cannot show the MFA modal until the server provides a challenge to the browser.</p>
            <p>We found enough issues with the old system that it required both a redesign and a migration from the old system to the new one.</p>
            <h2>Migration Requirements</h2>
            <p><strong>1. There should be a single MFA component used in the frontend.</strong></p>
            <p>This keeps the user experience of MFA in the application consistent and provides a centralized location for modification across the entire application. Adding a new MFA method in the future should be simple and work across all routes that expect MFA.</p>
            <p><strong>2. The server should be responsible for challenging a client with MFA.</strong></p>
            <p>The frontend should not have to specially handle MFA cases for each action, and a server-initiated challenge not only allows seamless integration of the WebAuthn challenge flow, making the server provide a challenge when necessary, but also allows developers to onboard routes to MFA by only changing backend code. Adding a challenge to a new route should not require waiting on App Store approvals.</p>
            <p><strong>3. Any registered form of MFA should be allowed by this singular component.</strong></p>
            <p>So long as a user has chosen one or more forms of MFA, we should give them all options for any MFA challenge. Previously, certain MFA methods like SMS were only for Login and our mfaEnabled property only considered TOTP; we found many cases where code only handled TOTP for these flows despite there being alternative ways a user could have enabled MFA (WebAuthn for example).</p>
            <p><strong>4. We should be able to cache a user's successful MFA for a period of time for ease of use.</strong></p>
            <p>We heard plenty of complaints, especially from admins and owners about having to MFA multiple times in the same minute to do server maintenance. Once a user has completed an MFA challenge, we can assume they’ve remained in control of the same device for a few minutes to improve their experience and hopefully remove a potential barrier to registering an MFA option.</p>
            <p>To address the above, we established what we creatively call our MFA Version 2 (MFAv2) flow.</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>MFAv2 Frontend<br></h2>
            <p>The guiding principle of MFAv2 is that our backend is capable of returning a challenge containing a list of supported MFA factors to the frontend which will conditionally render an MFA option-picker UI.</p>
            <p>The following sequence diagram shows a normal MFAv2 flow for an MFA-enabled user taking an MFA-protected action.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:915pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578b914bf7d06d9d47ed6c4_2hM-UCQvxgQrHRrQuGBcLKKgH_H78NknLqW-LqakLumSZHbHnKFZEUOrUE94T0CLvdcnYOUU89Ld6pBacT160GWUvV3f-N0EF3zDoCVw8havtgukGPw30e4sK_HuVKvyn8vnpKI_NAkzF3vtv4u3yaA.png" alt="Sequence diagram showing the MFAv2 flow on protected routes."></div>
            </figure>
            <p>In this flow, the user first attempts to make the request without any MFA credentials attached. The backend determines whether the request should be allowed based on the route’s MFA setting and the user’s configured MFA options:</p>
            <ul role="list">
                <li>If the route requires MFA and the user has it enabled, then the backend returns a payload to the frontend containing the MFA options that the user must take.&nbsp;</li>
                <li>If the backend decides MFA is not required then it continues executing the request.</li>
            </ul>
            <p>The frontend code contains a global response interceptor that checks for the special ‘MFA required’ response the backend will provide. On obtaining this response the frontend launches the MFA modal with the list of options provided by the backend.</p>
            <p>After the user supplies authentication data, the frontend sends a request for a token which represents a successfully-completed MFA. The token is implemented as an expiring HTTP cookie. The frontend then automatically resends the initial request to the protected route this time with the cookie attached, the route verifies the cookie, and if it is valid then continues to execute the request. In the case of an invalid cookie, then the backend returns the same ‘MFA required’ response and we re-enter the flow until a successful MFA can be performed or the user cancels their request.</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>MFAv2 Backend<br></strong></h2>
            <p>Two services work in tandem for the backend handling of MFA actions: our Python API and our Rust authentication service. The Python API is responsible for determining whether an action requires MFA or not, and whether the user is capable of performing an MFA check. If the API decides that MFA must be performed then it requests an MFAv2 ‘ticket’ from our authentication service over gRPC.</p>
            <p>The authentication service is responsible for the creation of the MFA ticket and determining which factors the user can use to complete the challenge. For WebAuthn, this is where we create the server-side challenge and attach it to the ticket.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:753pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578b931cdfe5516f83fc499_e8OCxPJEpS9Hn4O6OGLNnXneQdOB1z00qb06cH1du8vYQGE3YrcRaivJcxApsjFSqdT-jab_bfZiSGJ7xrp9Jk2b6387J5rNQdjVRUB3zkULNzOj9j5AVDtRC4XW2Qjk_J_2qM1xS32Eb8wNL98dRA0.png" alt="Sequence diagram showing the authentication service creating an MFAv2 ticket on protected routes."></div>
            </figure>
            <p>Alt-text: Sequence diagram showing the authentication service creating an MFAv2 ticket on protected routes.</p>
            <p><em>For more information on Data Services, see our post ‘</em><a href="https://discord.com/blog/how-discord-stores-trillions-of-messages"><em>How Discord Stores Trillions of Messages</em></a><em>’.</em></p>
            <p>The ticket is formatted in JSON and contains two top-level fields: ‘ticket’ which represents an ID for lookup, and the supported methods for the action based on user enrollment:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/cd3e83eacbf68654fb3881dcbd046d25.js"></script>
            </div>
            <p>The frontend creates its option picker based on the results included in the ticket:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:445pxpx">
                <div><img alt="Discord promoting to the user to choose between three MFA options: Use a security key, use your authenticator app, or use a backup code.‍" src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578b9318a9cbcc6d0691cf0_zyOaANGmW_sDGui47z4Wkt4uZJamYzxicbxoVdjc6uaFSnyb4-4tVRg8pNZMSVabxxq0_Yfe_QbkS5RypwQVFX9XEvIJlHp3SsrwE0H-ehKq6spPKevTjHTL07C8UbxD1Oo0vKAe4NOZKzZZAvhlce8.png"></div>
            </figure>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Device Support<br></strong></h2>
            <p>For mobile apps, we support WebAuthn by writing Swift for iOS and Kotlin for Android, ensuring a native experience.</p>
            <p>Discord’s desktop applications are developed with the Electron framework and Electron <a href="https://github.com/electron/electron/issues/24573">does not have explicit support for WebAuthn</a>. When testing on different platforms we found that WebAuthn in Electron worked great on Windows desktops but was unresponsive on MacOS. Determined to support MacOS we had to find a solution to this problem.</p>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Electron and Mac Kerfuffle<br></strong></h2>
            <p>One of the challenges we faced when introducing WebAuthn to Discord's desktop application was the lack of native prompts in Electron for Mac to specify a passkey or security key. To address this, we developed an Electron Native Module written in Objective-C++ which calls Mac native code (specifically using <a href="https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller">ASAuthorizationController</a>).</p>
            <p>Since the renderer process in Electron does not have direct access to windows, we had to use Inter-Process Communication (IPC) from the Renderer process to the Main process to trigger the native WebAuthn module. Since the main process can access the main application window, we were able to render the WebAuthn selector screen on Mac to support native WebAuthn for desktop clients.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:765pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578bac7b297fd20f56bbeba_x7jZqyj1aBxOyg01I95KZBh8GSGcg8YQyhhIilmOgt9IresFS9pNMikeqgW6v6WshatT8o5aeeNePE8kfHN4WX1-jfJy30mTTCKHzhfD1WnrQk1HUSKj8IAmT49weILkjgFJhRgGeIwxzCykNElKAhI.png" alt="Sequence diagram showing the renderer Electron process sending an IPC to the main Electron process in order to trigger ASAuthorizationController code."></div>
            </figure>
            <p>We ship our Electron native modules outside of the Discord application to keep our install size small. Since this feature is only necessary for users interacting with WebAuthn on Mac, we download the module the first time the user attempts WebAuthn functionality from a Mac. After we ensure the module has been installed, we issue an IPC from the renderer process to the main process to trigger the MacOS system code for WebAuthn which ultimately returns the results to the renderer process over IPC.</p>
            <p>This Mac integration in an Electron Native Module allowed us to provide the necessary prompts and ensure a seamless WebAuthn experience for Discord users on Mac.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1600pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6578bac72d2ddd4bd18848fb_tFCgt5lLWLs7Vm4D7sU0DPKMQqD4sQeFjZUkL-MST2StUUlSQadpiDxCk_-AVygpTtnc_Kj0EYx5vFhyM3s3qZM2CQLOYE-uK2dI_tvRwswkbpND8_ImkgUklDjcggXPc5wGBOj9ugl3e8EMXk3T5KA.png" alt=""></div>
            </figure>
            <p>Introducing WebAuthn to Discord led us on a journey to address MFA on the platform holistically while providing an extensible and experience that’s easy for developers to use: onboarding MFA protection only requires a single-line change on the backend to enter our MFAv2 flow, developers don’t need to handle any frontend logic themselves, and we ensure support across our platforms.&nbsp;</p>
            <p>Now that our backend supports WebAuthn our next aim is WebAuthn-based passwordless login. Stay tuned!</p>
        </div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>