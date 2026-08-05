<p>
  When you share a link in Discord, you'll often see a small preview card show
  up with a title, image, or description. This is built using a bot called
  <strong>Discordbot</strong>. This article explains how that works, and how
  website owners can recognize and confirm its traffic.
</p>
<div class="toc-box">
  <p>
    <span class="wysiwyg-font-size-x-large"
      ><strong>What this article covers:</strong></span
    >
  </p>
  <ul>
    <li data-list-item-id="e4b892952eb72e79cb14e20a86ffdfed8">
      <a href="#h_01KZ9NS8GM3SSZTY156EBSE0VT"
        >How Discord Generates Link Previews</a
      >
    </li>
    <li data-list-item-id="e624919a02323aa6397932c9800384359">
      <a href="#h_01KZ9NS8GM4SSNW707CFN3PY4P">The Discordbot</a>
      <ul>
        <li data-list-item-id="ee34bd5661d23e530221f1e4f9c44869a">
          <a href="#h_01KZ9NS8GPV14WW1TSX7GCCBMJ">Identifying Discordbot</a>
        </li>
        <li data-list-item-id="ec2dd4bf8a59c4a1f81e6d9ec409bf0a5">
          <a href="#h_01KZ9NVDZ1HVMADS5WEM1GGWGH">Verifying Discord Traffic</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
<h1 id="h_01KZ9NS8GM3SSZTY156EBSE0VT">How Discord Generates Link Previews</h1>
<p>
  When someone shares a link in a Discord message, it automatically visits that
  link to grab information about the page, like its title, description, and
  image. This information is used to build the preview card you see in chat.
</p>
<p>
  This only happens when a link is actually shared in a message. There's no
  continuous scanning or crawling of websites on its own.
</p>
<p>
  If the link points to an image or video, a copy may also be saved for a while
  so it loads faster next time. When someone views that image or video, it's
  delivered through Discord's own servers rather than pulled directly from the
  original website. This keeps the viewer's information, like their IP address,
  private from the site hosting the file.
</p>
<h1 id="h_01KZ9NS8GM4SSNW707CFN3PY4P">The Discordbot</h1>
<p>
  <strong>Discordbot</strong> is the tool that visits links and builds these
  previews. If you own a website, you might want to know when it's visiting your
  site, maybe to show slightly different information, or to make sure your
  firewall doesn't accidentally block it.
</p>
<p>There are two ways to recognize its requests:</p>
<ol>
  <li data-list-item-id="e74e6be56f53022f4a1264f8a51d219f9">
    Look at the User-Agent (a short bit of text that identifies what's making
    the request)
  </li>
  <li data-list-item-id="e8921c2ada603f989a438848bbbcb57cd">
    Check the IP address the request is coming from
  </li>
</ol>
<h2 id="h_01KZ9NS8GPV14WW1TSX7GCCBMJ">Identifying Discordbot</h2>
<p>Every request it makes includes a User-Agent that looks like this:</p>
<pre class="language-auto">
Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)
</pre>
<p>
  You can check for the word "<strong>Discordbot</strong>" anywhere in that
  text. Other parts of it might change over time, so don't rely on matching the
  whole string exactly.
</p>
<div class="warn-box">
  <strong>Important:</strong> Just checking the User-Agent isn't enough to be
  sure a request really came from Discord, since anyone can fake one. If you're
  using this to decide whether to let a request through your firewall, also
  check the IP address (see below).
</div>
<h2 id="h_01KZ9NVDZ1HVMADS5WEM1GGWGH">Verifying Discord Traffic</h2>
<p>
  To be sure a request truly came from Discord, check that its IP address is on
  the official list of
  <a
    href="https://cdn.discordapp.com/ipranges/discord.json"
    target="_blank"
    rel="noopener noreferrer"
    >public IP ranges</a
  >. This is published in two formats (json and txt) so you can check it
  programmatically. It's a good idea to recheck this list every so often, since
  the ranges can change.
</p>
