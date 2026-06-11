<h2 id="h_01KTA3VF6YWJHJ4BZV22JYKWPR">A Note to App Developers</h2>
<p>
  App developers are a huge part of what makes Discord work. You build bots,
  game integrations, welcome flows, and utilities that server owners depend on
  every day. Millions of people have better experiences on Discord because of
  what you've built.
</p>
<p>
  <strong
    >Today, we're announcing changes to how Discord Apps access Privileged
    Intents (Guild Members, Presence, and Message Content): a new user-based
    threshold for when access requires review, and an annual process to reapply
    for continued access.</strong
  >
</p>
<p>
  If your app is accessible to fewer than 10,000 users, these changes do not
  impact your app.
</p>
<p>
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/6207308062871-What-are-Privileged-Intents"
    target="_blank"
    rel="noopener noreferrer"
    >What are Privileged Intents?</a
  >
</p>
<hr />
<h2 id="h_01KTA3TSQPVQWXFNZJW6PAR7EF">Why We're Making This Change Now</h2>
<p>
  Discord's bot ecosystem has grown enormously. There are more bots on the
  platform today than ever before, which means more developers doing creative,
  useful work, but also more surface area for accessing user data.
</p>
<p>
  Shifting to a user-count threshold reflects how apps now scale across Discord
  as our ecosystem has evolved. If your app is under 10,000 users, these changes
  do not apply to you, while apps with greater reach are required to submit a
  request for review of their access.
</p>
<p>
  The annual review process comes from a similar place. Bots evolve over time. A
  bot with access from one year ago may serve a very different purpose today.
  Periodic check-ins help reduce access that is not intended, necessary, or
  acceptable under our policies, which is better for users and ultimately better
  for developer trust across the ecosystem.
</p>
<hr />
<h2 id="h_01KTA3TSQPEDTB2PCNGBHYX5C3">What's Changing</h2>
<h3 id="h_01KTA3TSQQJ30MSF9XA0NAK1X7">
  1. The review threshold is now based on user count, not server count.
</h3>
<p>
  Previously, apps in fewer than 100 servers could access Privileged Intents by
  toggling them on in the Developer Portal, and apps in 100+ servers needed to
  apply for access.
</p>
<p>
  Starting today, the threshold is based on the number of users your app can
  access across all the servers it belongs to. If your app has fewer than 10,000
  users, you can continue accessing Privileged Intents by toggling them on in
  the Developer Portal. Once your app reaches 10,000 users, you'll need to apply
  for Privileged Intent access.
</p>
<blockquote>
  <p>
    <strong>How we count users for your app:</strong> We count the number of
    unique users who have access to your app across all the servers it's
    installed in. When your app reaches the 10,000-user threshold, the app or
    team owner will receive a notification via email and/or system DM. You will
    also see a message in the Developer Portal letting you know it's time to
    apply. You will have <strong>90 days</strong> from the date of the
    notification to submit your application. If you do not apply within this
    window, your app's access to Privileged Intents will be removed. You can
    still apply at any time to request access again.
  </p>
</blockquote>
<h3 id="h_01KTA3TSQQ0JJ9QYZ07FDA7KB1">
  2. Apps must now reapply annually for continued access.
</h3>
<p>
  Apps with Privileged Intent access granted from a prior review will need to
  reapply to confirm their continued access once per year in the Developer
  Portal.
</p>
<blockquote>
  <p>
    <strong>Annual review timeline:</strong> If you already have access to
    Privileged Intents granted from a prior review, you should expect to receive
    a notification to reapply sometime between now and the end of this year.
    After you receive that notification, you will have
    <strong>90 days</strong> to reapply for continued access to your intents. If
    you retain access, you will receive a notification before your next annual
    review cycle.
  </p>
</blockquote>
<p>
  In both scenarios above, the submission form asks you to provide and confirm
  information about your app's current functionality, use case for each
  requested Privileged Intent, and data practices, which will be used for the
  review of your app's access. If you submit your request during the 90-day
  window, your app will retain its current intent access while your submission
  is under review.
</p>
<p>
  <em
    >Note: If your app does not need access to Privileged Intents, you do not
    need to take any action.</em
  >
</p>
<h3 id="h_01KTA3TSQR3MTG6QKGABA56T3R">
  3. Apps can keep growing during Privileged Intent review.
</h3>
<p>
  Previously, when an app hit 100 servers and was required to apply for
  continued access to its Privileged Intents, it was blocked from joining new
  servers until the review was complete.
</p>
<p>
  That's no longer the case. Under the new user-based threshold, apps can
  continue joining servers and reaching new users while their submission is
  under review.
</p>
<h3 id="h_01KTT0HVW4ZW75VN9FYSAN8GH4">
  4. App Verification and Privileged Intent review are now separate.
</h3>
<p>
  Previously,
  <a
    href="https://support-dev.discord.com/hc/en-us/articles/23926564536471-How-Do-I-Get-My-App-Verified"
    >App Verification</a
  >
  and Privileged Intent review were part of the same review process. With this
  change, we have separated App Verification and the Privileged Intent review
  process.
</p>
<h2 id="h_01KTA3TSQS4QXA1Y4A3XNP0H0F">What This Means for You</h2>
<p><strong>If your app is under 10,000 users:</strong></p>
<p>
  These changes do not apply to your app. You can continue toggling Privileged
  Intents on in the Developer Portal. If your app later grows beyond 10,000
  users, you'll be notified to apply.
</p>
<p>
  <strong
    >If your app currently has access to Privileged Intents granted from a prior
    review:</strong
  >
</p>
<p>
  Your access remains active. You will have to reapply annually for continued
  access. No action is needed until you receive a notification via email and/or
  system direct messages when your reapplication date approaches.
</p>
<p>
  <strong
    >If your app is accessing Privileged Intents via the self-serve toggle in
    the Developer Portal and is accessible to 10,000+ users:</strong
  >
</p>
<p>
  Under the new threshold, your app now requires review for continued access to
  Privileged Intents. You will receive a notification via email and/or system
  DM. There will also be an alert when viewing your application in the Developer
  Portal. New guild installs are not blocked while your app is in this state.
  You have <strong>90 days</strong> from the date of the notification to submit
  your application. If you do not apply within this window, your app's access to
  Privileged Intents will be removed; however, you can still apply at any time
  to request access again.
</p>
<p><strong>Does this change what data Privileged Intents provide?</strong></p>
<p>
  <strong>No. The data available through each intent remains the same.</strong>
  These changes update the threshold for when Privileged Intent access requires
  review and add an annual reapplication process.
</p>
<h2 id="h_01KTA3TSQTGXS9SCX07V293VNP">
  Do You Actually Need Privileged Intents?
</h2>
<p>
  Before applying, please review whether your app's current functionality
  requires Privileged Intents, or whether newer API features cover your use
  case.
  <a
    href="https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent"
    target="_blank"
    rel="noopener noreferrer"
    >We've put together a guide to help</a
  >
  you evaluate each intent and its alternatives.
</p>
<p>
  For example, apps that previously relied on prefix commands to read message
  content can now use application commands instead, removing the need for the
  Message Content intent entirely.
</p>
<p>
  If you've confirmed that your app does need Privileged Intents and the use
  case complies with our guidelines, the application process is easy to complete
  in the Developer Portal.
</p>
<ul>
  <li data-list-item-id="ef90413861dac5c7ef965f5e5f018bcf1">
    <a
      href="https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review"
      target="_blank"
      rel="noopener noreferrer"
      >Guide: Getting Started with Privileged Intent Review</a
    >
  </li>
  <li data-list-item-id="ee02bb671486c69eb1abd744cf0b7d6b7">
    <a
      href="https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent"
      target="_blank"
      rel="noopener noreferrer"
      >Guide: You Might Not Need a Privileged Intent</a
    >
  </li>
</ul>
<h2 id="h_01KTA3TSQWEW2QD7H9847T87WP">Looking Ahead</h2>
<p>
  As our app ecosystem continues to grow, we always look for more ways to help
  developers, users, and the platform grow with it responsibly. When people feel
  more confident about the apps in their server, they're more willing to install
  new ones, engage with them, and stick around. That benefits everyone who
  builds on Discord.
</p>
<p>
  We're continuing to invest in the tools, infrastructure, and support that make
  Discord the best place to build and run apps. If you run into issues during
  this transition, reach out.
</p>
<p>
  Our developer support team is available in our
  <a
    href="https://support-dev.discord.com/hc/en-us"
    target="_blank"
    rel="noopener noreferrer"
    >developer support center</a
  >, and the
  <a
    href="https://discord.gg/discord-developers"
    target="_blank"
    rel="noopener noreferrer"
    >Discord Developers server</a
  >
  is a great place to ask questions and share what you're learning.
</p>
<hr />
<h2 id="h_01KTA3TSQW8AJ1SEXH0M9EMCAB">Common Questions</h2>
<p><strong>Where can I see my app's user count?</strong></p>
<p>
  We don’t display your app’s user count in the Developer Portal. When your app
  grows beyond the 10,000-user threshold and triggers Privileged Intents access
  review, you’ll see an alert in the Developer Portal and receive a notification
  via email and/or system DM.
</p>
<p>
  <strong
    >What happens if I hit the threshold? Does my app stop working?</strong
  >
</p>
<p>
  No. Your app continues to function and receive events from Privileged Intents.
  Guild installs are also not blocked while you are in review. Users can still
  join servers where your app is already installed, and user installs remain
  unaffected. You have <strong>90 days</strong> from notification to submit your
  application before your Privileged Intents are removed.
</p>
<p><strong>What happens if my request is denied?</strong></p>
<p>
  You will get a notice. In some cases, you will be given additional time to
  address certain issues with your submission and resubmit or make necessary
  changes without losing access during that period. In other cases (e.g., use
  case does not comply with our policies), your access will be removed, but you
  will still be able to submit a request for new access at any time.
</p>
<p><strong>Does this change what data Privileged Intents provide?</strong></p>
<p>
  No. The data available through each intent remains the same. These changes
  apply to when Privileged Intent access requires review.
</p>
<p>
  For more questions,
  <a
    href="https://support-dev.discord.com/"
    target="_blank"
    rel="noopener noreferrer"
    >please reach out to Discord’s developer support team</a
  >.
</p>
