<p><span style="font-weight: 400;">Individual command permissions act as overrides to application-wide permissions, which can result in a user accidentally locking themselves out of a command.</span></p>
<p><span style="font-weight: 400;">Server owners and administrators cannot lock themselves out of a command since they can access all commands in the server.</span></p>
<h1>The Problem</h1>
<p class="wysiwyg-text-align-center"><span style="font-weight: 400;">Graggle is a member of a server called Wumpus’ Study Corner. This server has an app called StudyBot, which can be used by everyone.</span><img src="https://support.discord.com/hc/article_attachments/10952617491351" alt="mceclip0.png"></p>
<p><span style="font-weight: 400;">Graggle wants only Student Leads to be able to use <strong>/notecards</strong>, so he goes to turn off the command for @everyone.</span></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/10952623791639" alt="mceclip1.png"></p>
<p><span style="font-weight: 400;">But, he forgot a key step!</span></p>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/10952624785175" alt="mceclip2.png"></p>
<h1>The Solution</h1>
<p><span style="font-weight: 400;">Graggle needs to explicitly grant himself access to <strong>/study</strong> before denying it from @everyone, in order to not lock himself out. Graggle has the Student Lead role, so he can do so with the following steps.</span></p>
<ol>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Explicitly allow "Student Leads" to use <strong>/notecards</strong></span></li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Then, deny @everyone the ability to use <strong>/notecards</strong></span></li>
</ol>
<p class="wysiwyg-text-align-center"><img src="https://support.discord.com/hc/article_attachments/10952627048087" alt="mceclip3.png"></p>
<p><span style="font-weight: 400;">Now, only Student Leads can use notecards, and Graggle didn’t lock himself out of the command.</span></p>