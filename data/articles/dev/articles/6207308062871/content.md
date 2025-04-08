<h2 id="h_01JRBEK65WWJRW016EYHTG015E">Privileged Intent Types</h2>
<p>
  Unverified apps may use Privileged Intents freely, but must enable them in
  their app's settings. However, verified apps (required for apps in 100+
  guilds) will need to apply for access to these intents when they are in 75
  servers or more.
</p>
<h3 id="h_01JRBEHFXV4NB03635PTK48T0W">Guild Presences</h3>
<p>
  Controls access to presence update events, which include information about
  when users come online, go offline, or update their status.
</p>
<h3 id="h_01JRBEGY9MVRC71MXPSASKHSMZ">Guild Members</h3>
<p>
  Controls access to guild member events like when members join, update their
  profile, or leave a server, as well as the ability to request guild member
  lists.
</p>
<h3 id="h_01JRBEGY9MHAVEC16MD9QEAP22">Message Content</h3>
<p>
  Unlike other intents, this doesn't correspond to specific events but instead
  controls access to message content data across our APIs, including fields like
  content, embeds, attachments, and components in message objects. Check out our
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/6383579033751-Message-Content-Intent-Alternatives"
    target="_blank"
    rel="noopener noreferrer"
    >Message Content Intent Alternatives</a
  >
  article for workarounds.
</p>
<h2 id="h_01JRBEGY9MWQPGKVQAEA5N5QBZ">When To Use Privileged Intents</h2>
<p>
  Verified apps will be able to do most of what they can do on our platform
  without Privileged Intents, but there are some Gateway Events and API
  responses that require them. If you're not sure whether your app needs these
  intents, please review our
  <a
    href="https://discord.com/developers/docs/events/gateway#gateway-intents"
    target="_blank"
    rel="noopener noreferrer"
    >API Documentation on Privileged Intents</a
  >
  and/or the documentation for the programming library you're using.
</p>
<p>
  For guidance on acceptable use cases for Privileged Intents, see our
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/6177533521047-What-is-considered-an-acceptable-use-case-for-Privileged-Intents"
    target="_blank"
    rel="noopener noreferrer"
    >Acceptable Use Cases for Privileged Intents</a
  >
  article.
</p>
<p>
  After reviewing this and other linked articles, if you have any questions,
  please
  <a href="https://dis.gd/intents" target="_blank" rel="noopener noreferrer"
    >reach out to our Developer Support team</a
  >!
</p>
<p><!-- notionvc: d8c83c20-bd76-446c-9d21-ea1eaaec287d --></p>
