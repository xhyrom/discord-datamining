<h1 data-pm-slice="1 1 []"><strong>Symptoms:</strong></h1>
<p data-pm-slice="1 1 []">In rare occasions, Discord may freeze when your start <a href="https://support.discord.com/hc/en-us/articles/360040816151" target="_blank" rel="noopener">Go Live or screen share</a> on your Mac.</p>
<p data-pm-slice="1 1 []">Disconnecting/reconnecting results in <strong>RTC_CONNECTING</strong> errors and you have to refresh (Cmd+R) the client.</p>
<p data-pm-slice="1 1 []">The issue may occur after updating your Discord app.</p>
<h2><strong>Reason:</strong></h2>
<p>We found the freeze happens when Discord attempts to initialize <a href="https://support.discord.com/hc/en-us/articles/1500006741102" target="_blank" rel="noopener"><strong>Rogue Amoeba's ACE library</strong></a> that is used for sound share.</p>
<h1><strong>Fix: </strong></h1>
<p>Start by removing the <strong><a href="https://support.discord.com/hc/en-us/articles/1500006741102" target="_blank" rel="noopener">Rogue Amoeba ACE Library</a>.</strong> Once removed, then attempt to re-install the library once more.</p>