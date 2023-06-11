<h2>TLDR</h2>
<p>Privileged intents are a subset of Gateway Intents that restrict access to potentially sensitive information. Verified bots need approval to make use of Privileged Intents.</p>
<h2>Details</h2>
<p>Privileged intents are a subset of Gateway Intents that restrict access to potentially sensitive information. Our API Documentation includes a <a href="https://discord.com/developers/docs/topics/gateway#privileged-intents">list of the current Privileged Intents</a>. Unverified bots may use Privileged Intents freely. However, verified bots will need to apply for access to these intents.</p>
<p>Verified bots will be able to do most of what they can do on Discord without Privileged Intents, but there are some Gateway Events, and a few API responses, that require them. If you’re not sure whether or not your bot uses these intents, please have a look at our API Documentation, and/or the documentation for the programming library you used, to see if any of your bot’s features depend on them.</p>
<p> </p>
<h3>See Also</h3>
<p><a href="https://support-dev.discord.com/hc/en-us/articles/6177533521047" target="_self">What is considered an acceptable use case for Privileged Intents?</a></p>
<p><a href="https://support-dev.discord.com/hc/en-us/articles/6205754771351" target="_self" rel="undefined">How do I get Privileged Intents for my bot?</a></p>
<p><a href="https://support-dev.discord.com/hc/en-us/articles/6207083765655" target="_self">What is Bot Verification?</a></p>