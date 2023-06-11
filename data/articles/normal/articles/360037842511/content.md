<p class="wysiwyg-text-align-center"> </p>
<p><span style="font-weight: 400;">With the release of our new and improved Chat Text Box comes the coding critters of the dark---bugs! 🐛</span></p>
<p><span style="font-weight: 400;">Here is a long and detailed article to satisfy and answer your curiosities of what is currently happening with this really cool box.</span></p>
<h1><span style="font-weight: 400;">Bugs to Squash To-Do List:</span></h1>
<p><span style="font-weight: 400;">Here is the list of known bugs that we will be working on removing in the coming updates:</span><span style="font-weight: 400;"><br></span></p>
<ul>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Pasting in a lot of emojis/mentions all at once can be slow</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Emoticons do not auto-convert to emojis</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Clicking on a mention does nothing</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">User discriminators are shown in the mention tooltip in streamer mode</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Manually typing out an emoji, emoticon, or mention will not convert it to the "rich format"</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Starting a message with /, @, or s/, and then using auto-complete will insert a mention as &lt;@userid&gt; instead of @username#id</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Discord ignores backslashes when parsing ``` when calculating whether the cursor is currently in a code block or not</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">The tooltip for the character counter, the text for the upload modal, and the text for the setting to disable the new chat box are not translated</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Leading whitespace is often ignored for markdown syntax highlighting. For example “|| text||” will not put a background color on the first 5 spaces there</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Clicking away from the editor and back into it on Firefox will move the cursor to the beginning of the text box</span></li>
</ul>
<h2><span style="font-weight: 400;">Not Bugs:</span></h2>
<p><span style="font-weight: 400;">In the meantime, here is a list of behaviors that may seem like a bug, but are not bugs. They are unlikely to be fixed and are working as intended:</span></p>
<ul>
    <li style="font-weight: 400;"><span style="font-weight: 400;">&gt; and &gt;&gt;&gt; behave the same way</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Links are not clickable</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Links won't show URL encoding or other modifications that appear after sending the message</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Typing slash commands like “/spoiler” or “/me” does not show a preview of the styled text</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">The backticks show inside of the background color for inline code blocks</span></li>
    <li style="font-weight: 400;">
        <span style="font-weight: 400;">The character counter may </span><em><span style="font-weight: 400;">slightly </span></em><span style="font-weight: 400;">miscalculate the length of the message. <em>For example, if you type “/spoiler foo”, it would count that as 12 characters, but when sent is only 5</em></span>
    </li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Hitting backspace after a mention deletes the entire mention</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Creating an empty code block by putting a space between the two sets of ``` symbols</span></li>
</ul>
<h1><span style="font-weight: 400;">Bugs That Will Live:</span></h1>
<p><span style="font-weight: 400;">Lastly, here is a list of identified bugs that are considered relatively harmless and will remain in coexistence with the app:</span></p>
<ul>
    <li style="font-weight: 400;"><span style="font-weight: 400;">The rich chat box is turned off on the Android browser and in certain old browsers (such as Edge &lt;= 18)</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Multi-line bold/italics/underline/etc does not get styled</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">In compact mode, RTL messages have a line break between the author's name and the message content</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">You cannot use triple-click to select an entire line of text when that line contains an emoji or mention</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Inserting an emoji and then wrapping that emoji in an inline code block or multi-line code block will not down-convert it to plain text</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Typing two regional indicator emojis will not combine them into the corresponding flag emoji</span></li>
    <li style="font-weight: 400;">
        <span style="font-weight: 400;">If you hold shift-enter to make the text box scroll, the editor will not be scrolled </span><em><span style="font-weight: 400;">entirely </span></em><span style="font-weight: 400;">to the bottom (but the last line of text is still visible)</span>
    </li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Syntax highlighting in code blocks is turned off on the last line if the closing backticks do not end on their own line</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">If you mention yourself it won't highlight the message with a yellow background</span></li>
</ul>
<p> </p>
<h1><span style="font-weight: 400;">I Found More Bugs!</span></h1>
<p><span style="font-weight: 400;">If a bug needs to be escalated to the Wizards for bad behavior, it would be extremely helpful to include the following, since often these bugs only reproduce on very specific setups:</span></p>
<ul>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Browser and browser version</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Operating system</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Discord release channel</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Discord build number</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Keyboard layout (meaning US/French/Chinese/etc)</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">The language they are trying to type in</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">What you are trying to type</span></li>
</ul>
<p><strong>If you are unable to type something in a non-English language due to a bug, please follow the instructions below:</strong></p>
<ol>
    <li style="font-weight: 400;">
        <span style="font-weight: 400;">Go to:</span><a href="https://danburzo.github.io/input-methods/index.html"> <span style="font-weight: 400;">https://danburzo.github.io/input-methods/index.html</span></a>
    </li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Clear out the "Simple DOM contenteditable" section</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Click "Clear Log"</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Start a "Screen recording"</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Type in exactly what they would type in to Discord that causes Discord to break</span></li>
    <li style="font-weight: 400;"><span style="font-weight: 400;">Stop recording and send it to us, along with an explanation of what is different between the behavior on that website vs Discord</span></li>
</ol>
<p><span style="font-weight: 400;">This tool records everything you are typing, so it both demonstrates how to reproduce the problem and what is supposed to happen, and your explanation at the end should confirm how Discord is broken.</span></p>
<h2>How Do I Turn this off?</h2>
<p>There <em>is</em> an option to turn off the new chat box! It will only show if users have access to the new chat box though, which currently means only Canary &amp; PTB users on the latest release will see it.<br><br>We are using this as a <em>temporary</em> option though, so that users who are stuck can turn it off, <strong>but our hope is to fix any major blockers so we can remove this option in the future.</strong></p>
<h3><span style="font-size: 1.2em;">Please send all reports of <span class="wysiwyg-color-red">new</span> issues with the new Text Chat Box to  dis.gd/contact and we’ll do our best to help out.</span></h3>
<p class="wysiwyg-text-align-center"><strong>Happy bug hunting!<br></strong></p>
<p> </p>