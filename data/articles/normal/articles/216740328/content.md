<p>At Discord, we're always taking steps to improve connection stability and ping spike issues for users experiencing issues. If you've gone through all the troubleshoot steps to improve ping spikes in your connection to voice channels, running a WinMTR can give us extremely useful information about your connection. To gather the necessary details, follow these steps:</p>
<p> </p>
<p><strong><span class="wysiwyg-font-size-large">1. </span></strong><span class="wysiwyg-underline"><span class="wysiwyg-font-size-large">Download WinMTR from the website</span></span></p>
<p>First, go to <a href="https://sourceforge.net/projects/winmtr/">WinMTR's download page.</a> You'll have a choice to select either the 32 or 64 bit version of WinMTR. Downloading the file from either link will give you a zip file with both versions, so if the 64 bit doesn't work, you can use 32 bit anyways. No big deal.</p>
<p> </p>
<p><strong><span class="wysiwyg-font-size-large">2. </span></strong><span class="wysiwyg-underline"><span class="wysiwyg-font-size-large">Installation</span></span></p>
<p>This is the easy part. Open the zip file, and extract the program file. You'll get a document folder containing the WinMTR file. That's it!</p>
<p> </p>
<p><strong><span class="wysiwyg-font-size-large">3. </span></strong><span class="wysiwyg-underline"><span class="wysiwyg-font-size-large">Implement the Traceroute</span></span></p>
<p><span class="wysiwyg-font-size-medium">When you start the program, you'll get a small box with a couple of windows and some drop down menus.</span></p>
<p><span class="wysiwyg-font-size-medium"><img src="https://support.discord.com/hc/article_attachments/205443497" alt=""></span></p>
<p> </p>
<p>Here's where we get Discord specific. We'll need the server name and number in the "Host" box to get the specific traceroute for that voice server. To do that, you first need to make sure Developer Mode is enabled.</p>
<p><strong>Go to User Settings through the cog wheel at the bottom left corner &gt; Advanced &gt; enable Developer Mode.</strong></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/4443209096215" alt="Developer_Mode.png"></p>
<p><strong>Next, connect to the voice channel you're having ping issues on.</strong></p>
<p> <img src="https://support.discord.com/hc/article_attachments/360058239171" alt="Capture.JPG"></p>
<p><strong>Second, click the "Voice Connected" icon to pull up the voice server specifics.</strong></p>
<p><img src="https://support.discord.com/hc/article_attachments/360058076692" alt="Capture.JPG"></p>
<p>Now that we have all the information we need, it's important to type the correct IP into the WinMTR window. To do this, take <strong>the name and number of the voice server you're connected to</strong> (in the case above, mine would be "us-south495") and <strong>add ".discord.gg" </strong>to the end of it. As such, the end product would be:</p>
<p><strong>us-south495.discord.gg</strong> </p>
<p> </p>
<p>Great. Now enter it into the WinMTR window:</p>
<p><img src="https://support.discord.com/hc/article_attachments/205446917" alt=""></p>
<p> </p>
<p>And hit Start! Be patient with the traceroute, it can take a few minutes to complete. When you're done, you'll get a list of hops in the window:</p>
<p><img src="https://support.discord.com/hc/article_attachments/205449427" alt=""></p>
<p> </p>
<p>To make sure the traceroute is effective and accurate, make sure this number has reached at least 500:</p>
<p><img src="https://support.discord.com/hc/article_attachments/205449847" alt=""></p>
<p> </p>