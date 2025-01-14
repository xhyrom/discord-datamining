<div class="toc-box">
  <strong
    ><span class="wysiwyg-font-size-x-large">What this article covers:</span
    ><br
  /></strong>
  <ul>
    <li><a href="#h_01JHKE0REAPQ159JEZEZ2MG64B">What is Bluesky?</a></li>
    <li>
      <a href="#h_01JHKE0REBD6ASXKMC3J8K638Q"
        >How to Connect Bluesky to your Discord Account</a
      >
    </li>
    <li>
      <a href="#h_01JHKE0REBYK74N3HS18PN3PM4"
        >An Unknown Error Occurred. Maybe check your handle?</a
      >
    </li>
    <li>
      <a href="#h_01JHKE0REB3N61580PK2TPTFR6"
        >Using a Custom Domain with Bluesky</a
      >
      <ul>
        <li>
          <a href="#h_01JHKE0REBV2TX0B2MVYBSHM1K">Custom PDS Providers</a>
        </li>
        <li><a href="#h_01JHKE0REB44CG7RMBX0M8W4HZ">did:web: accounts</a></li>
      </ul>
    </li>
  </ul>
</div>
<h1 id="h_01JHKE0REAPQ159JEZEZ2MG64B">What is Bluesky?</h1>
<p>
  <a href="https://bsky.app/" target="_blank" rel="noopener noreferrer"
    >Bluesky</a
  >
  is a social media platform that allows you to post short messages, photos,
  videos and more. 
</p>
<h1 id="h_01JHKE0REBD6ASXKMC3J8K638Q">
  How to Connect Bluesky to your Discord Account
</h1>
<p>
  1. Head into your <strong>User Settings</strong> by pressing the
  <strong>cogwheel</strong> [<img
    src="https://support.discord.com/hc/article_attachments/29228192224663"
    width="23"
    height="24"
  />] <strong>icon</strong>.
</p>
<p>
  2. Tap on the <strong>Connections</strong> tab and then the
  <strong>Bluesky butterfly icon</strong>. 
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/29228185854359"
    width="624"
    height="409"
  />
</p>
<h4 id="h_01JHKE0REBXQV21KCCA50VJJCF" class="wysiwyg-text-align-center">
  <span style="color: #666666" data-darkreader-inline-color=""
    >Connections tab under User Settings</span
  >
</h4>
<p>
  3. Type in your handle for Bluesky and then follow the on-screen instructions
  to connect your account.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/29228185857687"
    width="433"
    height="267"
  />
</p>
<h4 id="h_01JHKE0REB49N5ABPJPR68EVSB" class="wysiwyg-text-align-center">
  <span style="color: #666666" data-darkreader-inline-color=""
    >Example of where you enter your Bluesky Account handle</span
  >
</h4>
<p>
  4. You’ll know you’ve successfully connected when you receive this
  confirmation message:
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/29228192236311"
    width="412"
    height="307"
  />
</p>
<h4 id="h_01JHKE0REBWR0W6MA48B434D3T" class="wysiwyg-text-align-center">
  <span style="color: #666666" data-darkreader-inline-color=""
    >Confirmation window that your Bluesky account has been connected to
    Discord</span
  >
</h4>
<h1 id="h_01JHKE0REBYK74N3HS18PN3PM4">
  An Unknown Error Occurred. Maybe check your handle?
</h1>
<p>
  If we can’t find a Bluesky account associated with the handle you enter,
  you'll see an error message like this:
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/29228192239255"
    width="432"
    height="275"
  />
</p>
<h4 id="h_01JHKE0REB2P0R2JPCFCFG9H9J" class="wysiwyg-text-align-center">
  <span style="color: #666666" data-darkreader-inline-color=""
    >Error example when the wrong handle has been entered</span
  >
</h4>
<p>
  This usually means you’ve made a typo when entering the handle, so please make
  sure to double-check the account name that you have entered. 
</p>
<p>
  If your account uses a custom domain or custom PDS, see Using a Custom Domain
  with Bluesky below for more details. Otherwise, it’s possible that you may be
  hitting a temporary server error due to excessive load on the Bluesky network
  and you’ll have to try connecting your Bluesky account again later.
</p>
<h1 id="h_01JHKE0REB3N61580PK2TPTFR6">Using a Custom Domain with Bluesky</h1>
<p>
  In order to link a Bluesky account with a custom-domain handle, Discord will
  need to look up your account’s DID. This happens when you initially connect
  the Bluesky account on Discord and then on an ongoing basis to keep your
  account connected to Discord. 
</p>
<p>
  Verification happens in the same way described in the
  <a
    href="https://atproto.com/specs/handle"
    target="_blank"
    rel="noopener noreferrer"
    >AT Protocol documentation</a
  >
  and the
  <a
    href="https://bsky.social/about/blog/4-28-2023-domain-handle-tutorial"
    target="_blank"
    rel="noopener noreferrer"
    >Bluesky blog</a
  >.
</p>
<p>
  When verifying a domain using the /.well-known/atproto-did method, Discord
  will use a user-agent string in the form of
  <code>Discord/1.0 (Discord API; +https://discordapp.com</code>. 
</p>
<p>
  Please ensure that your web server does not block requests with this
  user-agent, or severely rate-limit requests to this endpoint.
</p>
<p>
  You can simulate the request Discord will make to verify your handle using a
  curl command in this form:
  <code
    >curl -H 'User-Agent: Discord/1.0 (Discord API; +https://discordapp.com)'
    https://{your-handle-here}/.well-known/atproto-did</code
  >
</p>
<h2 id="h_01JHKE0REBV2TX0B2MVYBSHM1K">Custom PDS Providers</h2>
<p>
  Discord supports linking AT Protocol accounts hosted by third-party PDS
  providers in the same way as accounts hosted by Bluesky. If hosting your own
  PDS, please ensure that your web server allows Discord’s user-agent on the
  authentication and PDS data endpoints, in addition to the
  <code>/.well-known/atproto-did</code> endpoint.
</p>
<h2 id="h_01JHKE0REB44CG7RMBX0M8W4HZ">did:web: accounts</h2>
<p>
  Discord also supports linking AT Protocol accounts that use
  <code>did:web: identifiers</code>. The requirements for the
  <code
    >/.well-known/atproto-did endpoint also apply to the
    /.well-known/did.json</code
  >
  endpoint.
</p>
<div class="form-box">
  <strong>Note: </strong>If you run into any issues with linking your Bluesky
  account to your Discord account, please reach out to our support team through
  here:
  <a href="http://dis.gd/contact" target="_blank" rel="noopener noreferrer"
    >http://dis.gd/contact</a
  >
</div>
