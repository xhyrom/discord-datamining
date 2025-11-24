<div class="warn-box">
  <strong>Important:</strong> The old permissions (Manage Messages, Manage
  Channel, and Manage Threads) will continue to bypass Slowmode until February
  23, 2025. Server admins can migrate to the new permission now by going to
  <strong>Server Settings</strong> &gt; <strong>Roles</strong> to update their
  role settings before this deadline.
</div>
<p>
  <strong>Slowmode</strong> is a channel permission that helps manage the pace
  of conversation by limiting how often individual users can send messages. When
  enabled, users must wait for a specified time period between sending messages
  in that channel.
</p>
<div class="toc-box">
  <p>
    <span class="wysiwyg-font-size-x-large"
      ><strong>What this article covers:</strong></span
    >
  </p>
  <ul>
    <li data-list-item-id="e84145c09e64584f48e88f9b5ad1afe3b">
      <a href="#h_01KAVCMJ16VW4RPBH6CJQ7TGBX">What is Slowmode?</a>
    </li>
    <li data-list-item-id="e8de50e7667cb20cafcd79e01b972203c">
      <a href="#h_01KAVCMJ19ARQ7EQBBYVP4ZQD7"
        >How to Enable Slowmode for a Text Channel</a
      >
      <ul>
        <li data-list-item-id="e56159a63dc64ae283d114c98991f5309">
          <a href="#h_01KAVCMJ1AGDAQTM9JM799EK16">Desktop/Browser</a>
        </li>
        <li data-list-item-id="ec85cdbc882123e68ce312854c2403871">
          <a href="#h_01KAVCMJ1W6FWVBA47SMEQDXFF">Mobile</a>
        </li>
      </ul>
    </li>
    <li data-list-item-id="e46cf10b113774dbf3439d6b02ca33cca">
      <a href="#h_01KAVCMJ21AXWKB35J5Q37NNYM"
        >How to Enable Bypass Slowmode as an Owner/Administrator</a
      >
      <ul>
        <li data-list-item-id="e5e5f2920f76c806c0145fe6774bd4198">
          <a href="#h_01KAVCMJ21HP8MJ01KW6RR91EY">Desktop/Browser</a>
        </li>
        <li data-list-item-id="ede48eaae7c5b82cd88ffd4501fcb29e2">
          <a href="#h_01KAVCMJ2Q98VXB0J8DBD1WKSA">Mobile</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
<div class="info-box">
  <strong>Note:</strong> Some roles in your server may need to bypass Slowmode.
  You can enable the Bypass Slowmode permission for these roles. We've
  consolidated all slowmode bypass into this single permission—previously
  handled by Manage Messages, Manage Channel, or Manage Threads—for easier
  management. You can learn more about this under the
  <a href="#h_01KAVCMJ21AXWKB35J5Q37NNYM"
    >How to Enable Bypass Slowmode as an Owner/Administrator section</a
  >.
</div>
<h1 id="h_01KAVCMJ16VW4RPBH6CJQ7TGBX">What is Slowmode?</h1>
<p>
  Slowmode adds a cooldown timer between messages for each user in a channel.
  After sending a message, a user must wait for the cooldown period to expire
  before they can send another message in that same channel. This timer applies
  to each user individually—one person's timer doesn't affect anyone else's
  ability to send messages.
</p>
<p>
  For example, if a channel has a 30-second slowmode, each user can only send
  one message every 30 seconds in that channel. They can still read messages,
  react to them, and participate in other channels without restriction.
</p>
<h1 id="h_01KAVCMJ19ARQ7EQBBYVP4ZQD7">
  How to Enable Slowmode for a Text Channel
</h1>
<p>
  Slowmode can be enabled per text channel, as long as you have the permissions
  to enable it.
</p>
<h2 id="h_01KAVCMJ1AGDAQTM9JM799EK16">Desktop/Browser</h2>
<p>
  1. Navigate to the channel you want to enable Slowmode for and press on the
  <strong>cogwheel icon </strong>[<img
    src="https://support.discord.com/hc/article_attachments/36555069554327"
    width="24"
    height="24"
  />]. 
</p>
<p>
  2. Under the <strong>Overview</strong> tab, scroll down until you see
  <strong>Slowmode</strong>. 
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/36555091208215"
    width="624"
    height="349"
  />
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVCMJ1GX0PMABFCMN5FYJVY">
  <span style="color: #666666">Slowmode setting</span>
</h4>
<p>3. You can choose between the following options:</p>
<ul>
  <li data-list-item-id="e95d4e8ed77e80fe854a8c7f77436688d">Off</li>
  <li data-list-item-id="e7f866425076a233e133b0a67213bdf5e">5 seconds</li>
  <li data-list-item-id="eae492704031f5dc816b15a5f2c420ff6">10 seconds</li>
  <li data-list-item-id="efda1b10d1eaa582875c33e80951bb39c">15 seconds</li>
  <li data-list-item-id="eda4764889c688cee7866aaca79426b85">30 seconds</li>
  <li data-list-item-id="ebea73bf57fdb9493f1043b33ab40a0a8">1 minute</li>
  <li data-list-item-id="e69408bd49f949862971ca1a6097d86a4">2 minutes </li>
  <li data-list-item-id="e83d586f3f3adefad067a365b05ee44c9">5 minutes </li>
  <li data-list-item-id="ef07ec829ca8172d9cb8571ca5e600fba">10 minutes </li>
  <li data-list-item-id="eaa24e1782bcc2b33748e38dc61916042">15 minutes </li>
  <li data-list-item-id="e2feee682de50fda7421ed2692e7da3b8">30 minutes </li>
  <li data-list-item-id="ea6b9936264ba5e7aae89b1257c60b047">1 hour</li>
  <li data-list-item-id="e6ae31265e134f0a943f275f5b3954635">2 hours</li>
  <li data-list-item-id="e6d93831a55d156a8a33b8e162483e5f6">6 hours</li>
</ul>
<p>
  4. After selecting your preferred time period, press on
  <strong>Save</strong> to save your changes.
</p>
<p>
  5. When a member of your server navigates to the channel, they’ll see that
  Slowmode has been enabled and for how long.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/36555069561623"
    width="215"
    height="109"
  />
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVCMJ1W87B832H331V4X4S7">
  <span style="color: #666666">Slowmode is enabled</span>
</h4>
<h2 id="h_01KAVCMJ1W6FWVBA47SMEQDXFF">Mobile</h2>
<p>
  1. Navigate to the channel you want to enable Slowmode for and long-press on
  the channel, then select <strong>Edit Channel</strong>.
</p>
<p>
  2. Scroll down until you see <strong>Slowmode Cooldown</strong>. Drag the dial
  to your preferred setting, then tap <strong>Save</strong> to save changes.
</p>
<p>
  3. When you access the channel, you should now see that Slowmode has been
  enabled.
</p>
<p class="wysiwyg-text-align-center">
  <span style="color: #666666"
    ><img
      src="https://support.discord.com/hc/article_attachments/36555091212567"
      alt="image14.gif"
      width="331"
      height="720"
  /></span>
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVCMJ209EAHWYMZHCD3529S">
  <span style="color: #666666">Enable Slowmode on mobile</span>
</h4>
<h1 id="h_01KAVCMJ21AXWKB35J5Q37NNYM">
  How to Enable Bypass Slowmode as an Owner/Administrator
</h1>
<h2 id="h_01KAVCMJ21HP8MJ01KW6RR91EY">Desktop/Browser</h2>
<p>
  1. Navigate to the server you want to edit this setting for, and then select
  <strong>Server Settings</strong> after pressing on the drop-down.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/36555069566103"
    width="287"
    height="336"
  />
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVCMJ23DPJ45C5V0J53FP3B">
  <span style="color: #666666">Server Settings</span>
</h4>
<p>
  2. Select the <strong>Roles </strong>tab and then press on the
  <strong>Edit</strong> button [<img
    src="https://support.discord.com/hc/article_attachments/36555091216663"
    width="24"
    height="24"
  />] to edit a specific role.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/36555091219735"
    width="624"
    height="431"
  />
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVCMJ2NQAJ5JY1G74TNT3P5">
  <span style="color: #666666">Roles permissions</span>
</h4>
<p>
  3. Select<strong> Permissions</strong> at the top, and then scroll down until
  you see <strong>Bypass Slowmode</strong> under
  <strong>Text Channel Permissions</strong>. An <strong>x </strong>means it’s
  disabled, while a <strong>check</strong> means it’s enabled. Select
  <strong>Save</strong> to save changes.
</p>
<p class="wysiwyg-text-align-center">
  <img
    src="https://support.discord.com/hc/article_attachments/36555091222679"
    width="458"
    height="78"
  />
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVCMJ2QYH9R2ZX7QNGZ8PJX">
  <span style="color: #666666">Bypass Slowmode is enabled</span> 
</h4>
<h2 id="h_01KAVQDJZCD7T7736PHD951BK1">Mobile</h2>
<p>
  1. Navigate to the server you want to edit the permissions for and press on
  the server in the top-left to open <strong>Settings</strong> [<img
    src="https://support.discord.com/hc/article_attachments/36555069554327"
    width="24"
    height="24"
  />].
</p>
<p>
  2. Press on <strong>Roles</strong> and then select the role you want to edit. 
</p>
<p>
  3. Select <strong>Permissions</strong> and then scroll down to
  <strong>Bypass Slowmode</strong>. Tap on the toggle to enable or disable this
  setting. 
</p>
<p class="wysiwyg-text-align-center">
  <strong
    ><img
      src="https://support.discord.com/hc/article_attachments/36555069577111"
      width="624"
      height="112"
  /></strong>
</p>
<h4 class="wysiwyg-text-align-center" id="h_01KAVQDJZJ0H3W7DA2J0XX4JDK">
  <span style="color: #666666">Bypass Slowmode on mobile</span>
</h4>
<p><br />4. Tap on <strong>Save</strong> to save your settings.</p>
<div class="form-box">
  <strong>Contact Us:</strong> Running into an issue with Slowmode? Please reach
  out to our Support team for further assistance:
  <a href="http://dis.gd/contact" target="_blank" rel="noopener noreferrer"
    >http://dis.gd/contact</a
  >
</div>
