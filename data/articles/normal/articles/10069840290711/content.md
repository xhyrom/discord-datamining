<p><span style="font-weight: 400;"><a href="https://support.discord.com/hc/en-us/articles/4421269296535" target="_blank" rel="noopener noreferrer">AutoMod</a> allows you to filter messages based on regular expression (regex) patterns in your Custom Keyword rules.</span></p>
<p><span style="font-weight: 400;">Regular expressions let you define patterns that you want AutoMod to detect in messages and respond to accordingly, and can be a more efficient and effective way to filter out unwanted messages in your community.</span></p>
<h1><strong>How it Works</strong></h1>
<p><span style="font-weight: 400;"> A regex pattern is like a bunch of keywords all packed into one. By filtering based on patterns instead of individual keywords, you can save time and effort from having to think of 50 variations of “free Nitro” that you’d want to filter out and adding each of them to your rules - instead, you could write a singular regex pattern that’ll do the same job.</span></p>
<p><span style="font-weight: 400;">This also makes regex an effective way to prevent people who try to bypass your keyword filters by intentionally misspelling words or using word variants, or block messages containing non-words like phone numbers, addresses (email, IP, physical), and that weird-lookin’ zalgo text.</span></p>
<h3 class="wysiwyg-text-align-center">
    <span style="font-weight: 400;"><img src="https://support.discord.com/hc/article_attachments/10070021037975" alt="image2.png" width="590" height="430"></span><span style="font-weight: 400;"><img src="https://support.discord.com/hc/article_attachments/10070015701271" alt="image3.png" width="590" height="475"></span>
</h3>
<h3><span class="wysiwyg-font-size-medium"><span class="wysiwyg-color-blue90" style="font-weight: 400;"><strong>For Example: </strong></span><span style="font-weight: 400;">Trying to block or receive alerts whenever someone posts a message containing an email address in your server? You can’t enter every possible email address that exists into your keyword filters (and you really don’t want to), but you can use a regex pattern like the above to pattern-match the format of a typical email address. This lets AutoMod flag messages containing all kinds of email addresses!</span></span></h3>
<p><strong>As you begin, note the following:</strong></p>
<ul>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">Find regex filtering in </span><strong>Server Settings</strong><span style="font-weight: 400;"> &gt; </span><strong>AutoMod</strong><span style="font-weight: 400;"> &gt; any of your </span><strong>Custom Keyword Rules </strong><span style="font-weight: 400;">(must have “Manage Server” or “Administrator” permissions)</span>
    </li>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">We use the </span><strong>Rust</strong><span style="font-weight: 400;"> flavor of regex and recommend writing your regex in Rust syntax to minimize errors. To edit and test your regex syntax in Rust, we recommend using </span><a href="https://rustexp.lpil.uk/" target="_blank" rel="noopener noreferrer">Rustexp</a><span style="font-weight: 400;">.</span>
    </li>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Case-insensitive and unicode support flags are on by default for every regex pattern.</span></li>
</ul>
<h1><strong>Be careful!</strong></h1>
<p><span style="font-weight: 400;">Regex filtering is advanced and not for the faint of heart. Improper regular expressions could prevent all users from being able to send messages that are acceptable in your community. We recommend only using this if you know what you’re doing. </span></p>
<p><span style="font-weight: 400;">Be sure to use an external tool like </span><a href="https://rustexp.lpil.uk/" target="_blank" rel="noopener noreferrer">Rustexp</a><span style="font-weight: 400;"> to validate your Regex and make sure it works as expected.</span></p>
<h2><strong>FAQ</strong></h2>
<p><span class="wysiwyg-font-size-large wysiwyg-color-blue90"><strong>Q: What do I do if my regex syntax is invalid or doesn’t work?</strong><span style="font-weight: 400;"><br></span></span><span style="font-weight: 400;"><strong>A:</strong> Considerations to keep in mind to validate your regex:</span></p>
<ul>
    <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Always test and validate your syntax before saving your changes. Valid syntax means your regex does not contain any syntax errors.</span></li>
    <li style="font-weight: 400;" aria-level="1">
        <span style="font-weight: 400;">Ensure your syntax compiles below our limits - </span><span style="font-weight: 400;">even if your regex has valid syntax, it might still not be accepted if it is too complex and exceeds some of our technical limits</span><span style="font-weight: 400;">. </span>
    </li>
    <li style="font-weight: 400;" aria-level="1">Regular expressions must not include backreferences since those are not supported.</li>
</ul>
<p><span style="font-weight: 400;">If you find your regex isn’t working, go through these steps:<br></span></p>
<ol>
    <li>
        <span style="font-weight: 400;"> Check that your syntax is valid. Because AutoMod uses the Rust-flavor of regex, we recommend testing your regular expressions in an engine that also uses Rust, such as </span><a href="https://rustexp.lpil.uk/" target="_blank" rel="noopener noreferrer">Rustexp</a><span style="font-weight: 400;">. </span>
    </li>
    <li><span style="font-weight: 400;"> Make sure the word or type of message you're targeting works as expected.</span></li>
    <li><span style="font-weight: 400;"> Paste your regex into AutoMod and confirm your syntax doesn't contain errors. Save the rule to enable the regular expression.</span></li>
    <li><span style="font-weight: 400;"> It is recommended to send a few messages that you expect to be blocked, as well as a few messages that you expect to go through from a non-moderator account to ensure your regular expression is behaving as expected. </span></li>
</ol>
<p><span class="wysiwyg-font-size-large wysiwyg-color-blue90"><strong>Q: What are all the different types of regex errors and what do they mean OR and how do I fix them? </strong></span></p>
<p><span style="font-weight: 400;"><strong>A:</strong> The different type of errors include: </span></p>
<ul>
    <li>
        <span style="font-weight: 400;">Invalid syntax</span><span style="font-weight: 400;"> - Your regex contains a syntax error(s).</span>
    </li>
    <li>
        <span style="font-weight: 400;">Compile size exceeded limit</span><span style="font-weight: 400;">. The regular expression compiled above our size limit. </span>
    </li>
    <li>
        <span style="font-weight: 400;">Too long</span><span style="font-weight: 400;">. Regular expressions are limited to 10 expressions total with 75 characters each.</span>
    </li>
</ul>
<p><span class="wysiwyg-font-size-large wysiwyg-color-blue90"><strong>Q: How can I enable or disable regular expression flags, such as case insensitivity?</strong></span></p>
<p><span style="font-weight: 400;"><strong>A:</strong> Regular expressions can be used with flags to instruct the compiler how to evaluate the regular expression. The Rust regex crate supports the following flags:</span></p>
<ul>
    <li>
        <span style="font-weight: 400;">u</span><span style="font-weight: 400;"> unicode</span>
    </li>
    <li>
        <span style="font-weight: 400;">i</span><span style="font-weight: 400;"> case insensitive</span>
    </li>
    <li>
        <span style="font-weight: 400;">s</span><span style="font-weight: 400;"> dot matches newline</span>
    </li>
    <li>
        <span style="font-weight: 400;">m</span><span style="font-weight: 400;"> multiline</span>
    </li>
</ul>
<p><span style="font-weight: 400;">Case-insensitive and unicode support flags are on by default for every regex pattern. However, you can overwrite these flags or enable other flags by prefixing your regular expression with a modifier. The syntax to enable a modifier is: </span><span style="font-weight: 400;">(?a)</span><span style="font-weight: 400;">, and the syntax to disable a monitor is:</span><span style="font-weight: 400;">(?-a)</span><span style="font-weight: 400;">, where </span><span style="font-weight: 400;">a</span><span style="font-weight: 400;"> is the flag you wish to enable to disable.</span></p>
<p><span class="wysiwyg-font-size-large wysiwyg-color-blue90"><strong>Q: Do you have any examples of starter regular expressions?</strong></span></p>
<p><span style="font-weight: 400;"><strong>A:</strong> </span><span style="font-weight: 400;">Match all braille characters detailed in <a href="https://en.wikipedia.org/wiki/Braille_Patterns" target="_blank" rel="noopener noreferrer">this link here</a>!</span></p>
<ul>
    <li><span style="font-weight: 400;">[\u2800-\u28FF]+</span></li>
</ul>
<p><span style="font-weight: 400;">Match all Greek letters except beta:</span></p>
<ul>
    <li><span style="font-weight: 400;">[\p{Greek}--β]+</span></li>
</ul>
<div id="gtx-trans" style="position: absolute; left: 214px; top: 3054.08px;">
    <div class="gtx-trans-icon"> </div>
</div>