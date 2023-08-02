<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Have you ever found a user at your company who actually <em>likes</em> using multi-factor authentication (MFA), either time-based one-time passwords (TOTP) or push-based MFA? Either method adds friction for users by necessitating a second device for logins while increasing the cost to attackers. However, both have problems. SMS MFA is widely regarded as insecure because of the proliferation of SIM jacking attacks that allows for intercepting SMS-delivered MFA codes— but TOTP MFA is also phishable.</p>
            <p>MFA push notifications are also trivially easy to overcome. People’s attention can easily be exhausted. Look no further than Uber’s recent security incident in <a href="https://www.protocol.com/bulletins/uber-breach-hacker-twilio-mfa">mid-September last yea</a><a href="https://www.protocol.com/bulletins/uber-breach-hacker-twilio-mfa">r</a>; that was the likely entrypoint Lapsus$ exploited in order to gain access to Uber’s internal systems.</p>
            <p>Moreover, TOTP and push MFA are difficult to use frequently. They don’t vet that you’re logging in on a known device in a known location. They require use of a third-party authenticator app. Users lose their phones, and it’s difficult to have codes available on multiple devices. Some authenticator apps do support backing up TOTP secrets to a cloud account although backups are not typically enabled by default, which leaves users hanging out to dry if they lose access to their authenticator app.</p>
            <p>Back when I joined Discord, a staff engineer on my team had been pushing for us to adopt “WebAuthn”, and soon. I’d heard of it of course, but they pointed us to a thread from <a href="https://twitter.com/frgx/status/1379504541666701313?lang=en">Dev at Figma</a> chronicling their adoption of WebAuthn. WebAuthn and other hardware-based MFA mechanisms significantly reduce the incidence of account takeovers (ATOs) at companies like Google and Coinbase:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/64c41fecda9a7827b366cc5f_image.png" loading="lazy" alt="Authentication Type chart displaying Percentage of ATOs associated using the noted authentication mechanism as of November 2022. SMS / Text Based Codes = 95.65%. Time Based One Time Passwords = 4.13%. Coinbase App Push Authentication = .18%. Physical Security Key = .04%."></div>
                <figcaption><em>source: </em><a href="https://www.coinbase.com/blog/authentication-matters-coinbase-account-take-over-statistics"><em>coinbase.com</em></a></figcaption>
            </figure>
            <p>In 2022, after completing our migration from Google Workspace to Okta as our primary Identity Provider, our focus turned to answering this question - Our corporate user authentication strategy is great, but how can we continue to improve on it? We decided then was a good time to roll out WebAuthn everywhere.</p>
            <p>This has been a transformative step for our security posture, and we want to walk you through how we did it, including both choices we made that worked out great and choices we made that we wish we hadn’t made. Read on, and we can hopefully help you with your migration!</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>A Primer on WebAuthn</h2>
            <blockquote>The Web Authentication API (also known as WebAuthn) is a <a href="https://w3c.github.io/webauthn/">specification</a> written by the <a href="https://www.w3.org/">W3C</a> and <a href="https://fidoalliance.org/">FIDO</a>, with the participation of Google, Mozilla, Microsoft, Yubico, and others. The API allows servers to register and authenticate users using public key cryptography instead of a password.</blockquote>
            <p>source: <a href="https://webauthn.guide/#about-webauthn">webauthn.guide</a></p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center" style="max-width:60%">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/64c82334656905713b567213_image%20(1).png" loading="lazy" alt="Web Authentication relies on three major properties: Strong (Authentication is ideally backed by a Hardware Security Module, which can safely store private keys and perform the cryptographic operations needed for WebAuthn), Scoped (A keypair is only useful for a specific origin, like browser cookies. A keypair registered at 'webauthn.guide' cannot be used at 'evil-webauthn.guide', mitigating the threat of phishing), and Attested (Authenticators can provide a certificate that helps servers verify that the public key did in fact come from an authenticator they trust, and not a fraudulent source)."></div>
            </figure>
            <p>WebAuthn leverages public key cryptography to generate a unique keypair per device-site pairing. The private key is securely stored on your device; the website gets the public key, and is used to validate the handshake initiated during sign-in.</p>
            <p>The advantages of an approach like this are that WebAuthn is:</p>
            <ul role="list">
                <li>Strongly tied to a specific domain for a site. There’s no concern about lookalike domains for phishing</li>
                <li>Hard to phish. There’s no TOTP code via SMS or authenticator app to phish</li>
                <li>Easy to use. Using an authenticator, especially one built to your platform, is faster than using an authenticator app with expiring codes</li>
            </ul>
            <p><a href="https://webauthn.guide">https://webauthn.guide</a> is a great site with a lot more info; anything I state here will just restate what they say, so I highly recommend diving in there.</p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>Making the Case for WebAuthn</h2>
            <p>We had a number of challenges to overcome in pushing for Discord to adopt WebAuthn internally.</p>
            <p>At the time Discord had been using two-factor authentication (MFA) for a long while, primarily via authenticator apps like Google Authenticator or Authy. We’d been using MFA with Google Workspace for years; we swapped people over to using MFA with Okta just a few months prior to the kickoff of this project in April 2022. So, we were pushing for behavior change after behavior change.</p>
            <p>We wanted to change user behavior and incur additional hardware/support spend by rolling out WebAuthn. The idea of tying authentication to a user’s device worried people as well; would this lead to more lockouts? Would it lead to more support costs incurred to our hard-working IT team?</p>
            <p>We wanted to show that WebAuthn was <strong>safer, easier, and more cost-effective</strong> when compared to the status quo of TOTP MFA.</p>
            <h3>WebAuthn: <strong><em>Safer</em></strong></h3>
            <p>Thanks to a lot of great research from Google and other companies that they’ve published, it’s quite easy (and compelling!) to compare successful account takeover (ATO) or account compromise (ACO) attempts by different authentication factors:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/64c824608ce80e02353aa56e_Untitled.png" loading="lazy" alt="Chart source: https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html"></div>
                <figcaption><em>source: </em><a href="https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html"><em>security.googleblog.com</em></a></figcaption>
            </figure>
            <p>Even more compelling, I got to include this very-definitive statement from the same research in my document:</p>
            <blockquote>“We have had no reported or confirmed account takeovers since implementing security keys at Google.”</blockquote>
            <p>It’s rare you get to be that definitive in security!</p>
            <h3>WebAuthn: <strong><em>Easier</em></strong></h3>
            <p>I don’t know about you, but while I appreciate the security advantages of TOTP MFA, it does not spark joy to fish my phone out of my pocket, unlock it, and unlock my authenticator app, and feel the Damoclesian “T” in Time-based One Time Password counting down just to log into a service.</p>
            <p>TOTP MFA is fairly secure as it is difficult to brute force; but by comparison, the typical experience for a user with WebAuthn set up using a platform authenticator here is:</p>
            <ol role="list">
                <li>App (like Okta) challenges for WebAuthn factor</li>
                <li>User taps WebAuthn-compatible peripheral like Macbook TouchID sensors</li>
                <li>…that’s it!</li>
            </ol>
            <p>Even a cellphone holster can’t compete on friction like that.</p>
            <h3>WebAuthn: <strong><em>More Cost-Effective; Easier to Support</em></strong></h3>
            <p>Committing to spend money to buy hardware not only for <em>everyone today</em> but <em>everyone forever</em> is a big ask. We were looking at a cost of about $100/user that would scale linearly with headcount. We also had the specter looming over us of more IT-serviced lockout requests.</p>
            <p>But the comparison isn’t to one of <em>doing nothing</em>. Inaction leaves us perpetually exposed, at a much higher likelihood, to a successful phishing attack targeting somebody who works for us. It’s a very common vector nowadays for breaches of companies.</p>
            <p>According to IBM, the cost of a <a href="https://www.ibm.com/reports/data-breach">US-based company experiencing a data breach averages $9.44M in 2022</a>. You could buy a heck of a lot of WebAuthn-compatible peripherals for that much money. At $30/pop, that’s <strong>over eight times the length of the Golden Gate Bridge in Yubikeys</strong> stacked end to end!</p>
            <p>Moreover, relying upon additional great research from Google, we were able to show that moving to hardware-based MFA methods would actually <em>decrease support burden</em> over time by <strong>fewer lockouts</strong>:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/64c82513656905713b57fd63_image%20(2).png" loading="lazy" alt="Source: https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45409.pdf"></div>
                <figcaption>source: <a href="https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45409.pdf">Lang, Juan, et al. <em>Security Keys: Practical Cryptographic Second Factors for the Modern Web</em></a></figcaption>
            </figure>
            <p>Google’s research (linked above) summed up the improvements in support burden below:</p>
            <blockquote>For the deployment, we found the increased user productivity, and decreased support cost, were worth the increased hardware cost.</blockquote>
            <p>This meant that we would not only relieve some pressure with IT with this change, but also prevent more MFA lockouts that were already hurting our corporate users! Reasons like lost phones, new phones, lost credentials, etc. were now obviated— as long as we ensured users had multiple WebAuthn authenticators.</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>The Plan</h2>
            <p>So, people are sold. What’s the plan?</p>
            <p><strong>Step 1:</strong> get <strong>everyone</strong> and <strong>every app</strong>* (it’s never <strong>every app</strong>) into Okta</p>
            <p><strong>Step 2:</strong> get two+ WebAuthn authenticators to everybody who works for us. (some people, like super-admins and executives, get three authenticators for redundancy)</p>
            <p><strong>Step 3:</strong> a graduated rollout plan to each group periodically:</p>
            <ul role="list">
                <li>Security Engineering (always test on yourself!)</li>
                <li>Infrastructure Engineering</li>
                <li>IT</li>
                <li>Executives</li>
                <li>All of Engineering</li>
                <li>All other employees</li>
                <li>All different types of contractors</li>
            </ul>
            <p><strong>Step 4:</strong> use an <strong><em>Exception Group</em></strong> in Okta that exempts members from WebAuthn checks</p>
            <ul role="list">
                <li>Actually, we had a <strong><em>Rollout Group</em></strong> until about half our company was onboarded to WebAuhn. Then, we switched to an <strong><em>Exception Group</em></strong></li>
            </ul>
            <p><strong>Step 5:</strong> shrink the <strong>Exception Group</strong> down to zero!</p>
            <p>Easy, right?</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>Tools of the Trade</h2>
            <p>Here at Discord, we’ve got a healthy blend of MacOS, Windows, and Linux devices. Some users are on portable laptops; some are permanently docked. Some are even on desktops!</p>
            <p>Our goal was to ensure everyone had at least two functional authenticators at any time.</p>
            <p>We had a few tools in mind, with a few escape hatches.</p>
            <p><strong>Platform authenticators</strong>: these are WebAuthn authenticators embedded in the device we’re attempting to sign in with. The vast majority of our users were on Macbooks with TouchID or laptops with Windows Hello, meaning we could rely upon users <strong><em>usually</em></strong> having one of these two factors to register.</p>
            <p><strong>Roaming authenticators:</strong> these are WebAuthn peripherals not embedded in the device. For us, we used Yubikeys as our roaming authenticators.</p>
            <p>Specifically, we chose to give most people the <a href="https://www.yubico.com/us/product/security-key-c-nfc-by-yubico/">Yubikey Security Key C NFC</a> as their roaming authenticator. We chose this for a few reasons:</p>
            <ol role="list">
                <li>It supports NFC, not just USB-C, meaning you can use it to bootstrap a new iPhone or Android phone to service as a mobile platform authenticator</li>
                <li>It’s big and bulky, so people are less likely to leave them in their laptops, meaning users are less likely to combine their “roaming” and “platform” authenticator into one laptop-shaped bundle</li>
                <li>It doesn’t support OTP mode, so there’s no “Yubispam” to deal with</li>
            </ol>
            <p>In some cases, like docked users or devices without platform authenticators, we provided keys like the USB 5c Nano to use in place of the Platform Authenticator instead while also supplying Security Key C NFCs as backups.</p>
            <p>Our docs reflected our typical choices, but we always worked with users to find something appropriate and usable to make them successful.</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>How’d ‘The Plan’ Go?</h2>
            <p>So, here’s our planned timeline:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/64c8257dd12acbbdd9c0b5ed_image%20(3).png" loading="lazy" alt="Project Kickoff May 2022; Security, IT, Infra, Execs June 2022; All FTEs July 2022; Everyone August 2022"></div>
            </figure>
            <p>And here’s how it actually went:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/64c82593bb950f4237b71282_image%20(4).png" loading="lazy" alt="Project Kickoff May 2022; Security, IT, Infra, Execs June 2022, All FTEs July 2022, Everyone 2023"></div>
            </figure>
            <p>So, what happened? We have a few learnings to share:</p>
            <ol role="list">
                <li>Fulfillment to a distributed global team is <strong>really hard.</strong> Work from home makes this even more complicated! My advice: pay for importers in any difficult-to-ship-to countries</li>
                <li>Always test on yourself first before shipping keys out to users. Because we did this for weeks, we were able to aggressively roll out to all FTEs on our original timeline!</li>
                <li>Listen to concerns, and find a path forward for unusual cases. We were changing people’s behavior. If they are docked 100% of the time and requested a WebAuthn-compatible keyboard we let them buy their favorite and expense it.</li>
                <li>Lean on enterprise shipping partners where you can. We used Yubico Enterprise Delivery, and their portal helped with US, UK, EU, etc. adoption tremendously. But: they don’t support every country we needed, so we had some complications to work through ourselves</li>
                <li>For enforcement: stick to your dates, but allow for exceptions. The “Exception Group” in the plan let us move the needle forward without blocking on the longest tail cases— invaluable!</li>
            </ol>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>What’s it like now?</h2>
            <p>Nowadays, newly-onboarded Discord corporate users receive a laptop and at least one Yubikey alongside that laptop. IT onboards users to Okta and instructs them to register at least two WebAuthn authenticators; typically, this is their Macbook’s TouchID/Windows Hello sensor and also their Security Key C NFC.</p>
            <p>We also instruct corporate users to set up Okta Verify for use only as a fallback MFA in the event that all their authenticators fail at once. This way, we never have user accounts lacking at least one strong form of multi-factor authentication.</p>
            <p>Lockouts at the worst require overnighting a Yubikey to the user; all the while they’re still protected by hardware MFA. We set up an “exception” group that we track with expiring membership to ensure users cannot stay without WebAuthn protecting their Okta sessions for quite a while.</p>
            <p>The rollout took some effort, but the change has been very impactful, and users love the ease of use when compared with TOTP or other forms of MFA!</p>
        </div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>A Call to Action</h2>
            <p>Phishing attacks are prevalent, and the threat is urgent to address. We’ve stopped thousands of otherwise-successful phishing attacks thanks to our adoption of WebAuthn in Okta.</p>
            <p>And, if you’re somebody who has a product that could support WebAuthn and/or passkeys better: please do! <em>(we might even be building/planning this ourselves 😱)</em>! Patchwork support is the biggest hurdle to adoption.</p>
            <p>Together, we can make phishing (mostly) a thing of the past!</p>
            <h2>For More…</h2>
            <ul role="list">
                <li>Please check out a <a href="https://www.youtube.com/watch?v=IJHkaXT3nWI">recording of a talk given by a member of our team at BSides SF 2023</a></li>
                <li>Check out <a href="https://webauthn.guide">https://webauthn.guide</a> for more of an overview on how WebAuthn functions</li>
                <li>Check out <a href="https://webauthn.me/browser-support">https://webauthn.me/browser-support</a> to find out more about browser support for WebAuthn</li>
            </ul>
        </div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>