<p>
  If your bot is encountering rate limit errors, don't worry—this is a common
  challenge that can be resolved with the right approach. This article will help
  you understand Discord's rate-limiting system and provide practical solutions.
</p>
<div class="toc-box">
  <strong
    ><span class="wysiwyg-font-size-x-large">What this article covers:</span
    ><br
  /></strong>
  <ul>
    <li>
      <strong
        ><a href="#h_01JY29F3YPG9CQMDVR84KAYF6D"
          >Understanding Discord's Rate Limit Types</a
        ></strong
      >
    </li>
    <li>
      <strong
        ><a href="#h_01JY29F3YPQYYQXCDW7H3PCHV9"
          >How to Identify Your Rate Limit Issue</a
        ></strong
      >
    </li>
    <li>
      <strong
        ><a href="#h_01JY29F3YPR3YQ7G8XZQFB2YPC"
          >Best Practices for Handling Rate Limits</a
        ></strong
      >
    </li>
    <li>
      <strong
        ><a href="#h_01JY29F3YP6MFT878JB3TH700K">Global Rate Limits</a></strong
      >
    </li>
    <li>
      <strong
        ><a href="#h_01JY29F3YPHEVS66T9GW4X7078"
          >Gateway Considerations and Sharding</a
        ></strong
      >
    </li>
  </ul>
</div>
<h1 id="h_01JY29F3YPG9CQMDVR84KAYF6D">
  Understanding Discord's Rate Limit Types
</h1>
<p>
  Discord uses multiple types of rate limiting to protect the API. Identifying
  which type you're encountering is crucial for finding the right solution:
</p>
<h2 id="h_01JY29F3YPJXMAZ5N4MC19HW1N">Global Rate Limits</h2>
<p><strong>Limit</strong>: 50 requests per second across most endpoints</p>
<p><strong>Scope</strong>: Applies to your entire application</p>
<p>
  <strong>Identification</strong>: Look for
  <code>X-RateLimit-Scope: global</code> in response headers
</p>
<h2 id="h_01JY29F3YPZT91B3X4FNQ6AGCB">Per-Route Rate Limits</h2>
<p><strong>Limit</strong>: Varies by endpoint</p>
<p><strong>Scope</strong>: Specific to individual API routes</p>
<p>
  <strong>Identification</strong>: Check for
  <code>X-RateLimit-Scope: user</code>
</p>
<h2 id="h_01JY29F3YPDBQP2YMHZJN84VR3">Resource-Specific Rate Limits</h2>
<div class="info-box">
  Resource-specific rate limits can be reached by multiple sources (other users,
  bots, webhooks, etc.) and may not indicate that your application is solely
  responsible.
</div>
<p>
  <strong>Limit</strong>: Independent limits for specific guilds, channels, or
  webhooks
</p>
<p><strong>Scope</strong>: Applies to actions on specific resources.</p>
<p>
  <strong>Identification</strong>: Look for
  <code>X-RateLimit-Scope: shared</code> in headers
</p>
<h2 id="h_01JY29F3YPHEFEQSH1AGCE66TH">Invalid Request Limits</h2>
<p><strong>Limit</strong>: 10,000 invalid requests per 10 minutes</p>
<p>
  <strong>Common Cause</strong>: Unhandled errors
  (<strong>401</strong>, <strong>403</strong>, or <strong>429</strong>) causing
  request spikes. Please note,
  <em
    >429 errors returned with <code>X-RateLimit-Scope: shared</code> are not
    counted towards your invalid request limit.</em
  >
</p>
<p><strong>Result:</strong> Temporary Cloudflare ban</p>
<h2 id="h_01K05KXPJP88KF8X1T7G0AA5FA">How to Identify Your Rate Limit Issue</h2>
<p>
  The most reliable way to determine which limit you're hitting is by examining
  the HTTP response headers when you receive a 429 status code. Key headers to
  check:
</p>
<p><code>X-RateLimit-Limit</code>: The rate limit ceiling for that endpoint</p>
<p>
  <code>X-RateLimit-Remaining</code>: Number of requests remaining in the
  current window
</p>
<p>
  <code>X-RateLimit-Reset</code>: When the rate limit window resets (Unix
  timestamp)
</p>
<p><code>X-RateLimit-Reset-After</code>: Seconds until the limit resets</p>
<p>
  <code>X-RateLimit-Scope</code>: Indicates the type of rate limit (global,
  user, or shared)
</p>
<p>
  <code>retry_after</code>: Milliseconds to wait before making another request
</p>
<h1 id="h_01JY29F3YPR3YQ7G8XZQFB2YPC">
  Best Practices for Handling Rate Limits
</h1>
<h2 id="h_01JY29F3YP8CN6HBHEQ6FMRJAP">Implement Proper Backoff Strategies</h2>
<p>
  Always respect the <code>retry_after</code> value in rate limit responses.
  This tells you exactly how long to wait before retrying.
</p>
<h2 id="h_01JY29F3YPE9ZAR0AAEEQG8GAE">
  Consider Using Interactions Where Possible
</h2>
<p>
  <a
    href="https://discord.com/developers/docs/interactions/application-commands"
    target="_blank"
    rel="noopener noreferrer"
    >Application commands</a
  >
  and
  <a
    href="https://discord.com/developers/docs/components/overview"
    target="_blank"
    rel="noopener noreferrer"
    >message components</a
  >
  are an excellent alternative to prefix commands, which may prevent excessive
  API requests and messages in channels.
</p>
<p>
  Bonus tip: Make Interaction Responses and follow-up messages ephemeral since
  they do not count towards the rate limits.
</p>
<h2 id="h_01K05KY4QPWFMYMX1JR80G1FCK">Cache Data Effectively</h2>
<p>Reduce API calls by caching frequently accessed data, like:</p>
<ul>
  <li>Guild information</li>
  <li>Channel details</li>
  <li>User profiles</li>
  <li>Role data</li>
</ul>
<h2 id="h_01JY29F3YP5WYRF5FBNWA0M8DT">Use Request Throttling</h2>
<p>
  Throttling is a proactive approach to preventing rate limits by controlling
  the pace of your requests before hitting the limit.
</p>
<p>
  For example, if your bot needs to send welcome messages to 200 new members,
  instead of sending all 200 messages immediately, place them in a queue that
  releases 4 requests every 100 milliseconds. This maintains a steady rate of 40
  requests per second, staying safely below the 50 request limit while ensuring
  all messages are sent in about 5 seconds.
</p>
<h1 id="h_01JY29F3YP6MFT878JB3TH700K">Global Rate Limits</h1>
<p>
  If you're hitting global rate limits, your program may have an underlying
  issue that needs to be addressed.
</p>
<p>Here's how to optimize your code to stay within limits:</p>
<ul>
  <li>Implementing proper caching</li>
  <li>Migrate to interaction-based features</li>
</ul>
<p>
  If these solutions don't resolve your global rate limit issues, we encourage
  you to reach out in the Discord Developer Server
  <code>#api-help</code> channel or reach out to
  <a
    href="https://dis.gd/api-and-gateway"
    target="_blank"
    rel="noopener noreferrer"
    >Developer Support</a
  >.
</p>
<h1 id="h_01JY29F3YPHEVS66T9GW4X7078">Gateway Considerations and Sharding</h1>
<p>
  For bots handling real-time events through Discord's Gateway (websocket
  connection), sharding is essential as your bot grows.
</p>
<h2 id="h_01JY29F3YPKDT2E08R6P20M5BJ">What is Sharding?</h2>
<p>
  Sharding splits your bot into multiple instances, each handling a subset of
  guilds. This distributes the load across multiple websocket connections,
  helping you stay within rate limits.
</p>
<p>
  It's recommended to start planning for sharding implementation when
  approaching 2,000 guilds, as sharding <strong>must</strong> be enabled at
  2,500+ guilds. For optimal performance, follow the best practice of
  maintaining approximately 1 shard per 1,000 guilds.
</p>
<p>
  Remember, rate limits exist to ensure a stable experience for all Discord
  users. By following these best practices, you can build a bot that scales
  effectively while respecting these limits.
</p>
<p><!-- notionvc: 0702b028-bf66-450d-a141-059fb7712caf --></p>
