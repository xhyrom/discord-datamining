<h4 id="h_01KJ8FSJ5CX3D5DQKF2JH2B0H1">
  Our CTO and Co-founder released a
  <a
    href="https://discord.com/blog/getting-global-age-assurance-right-what-we-got-wrong-and-whats-changing"
    tabindex="0"
    data-token-index="1"
    rel="noopener noreferrer"
    >blog post</a
  >
  <span data-token-index="5">to share, recognize, </span>and address feedback
  from Discord users about our Global Age Assurance approach.
</h4>
<p>
  You may have seen recent news about Discord’s upcoming teen-by-default
  experience and age assurance updates, which will begin rolling out globally
  in<span data-token-index="0"> the <strong>second half of 2026</strong>.</span>
</p>
<p>
  <strong
    >TLDR: We do not expect any action to be required from developers.</strong
  >
  As part of this rollout, Discord is not requiring everyone to complete age
  verification (such as a face scan or ID upload) to use Discord. The vast
  majority of people can continue using Discord as they do today without ever
  being asked to confirm their age.
</p>
<p>
  Age verification is only one part of Discord’s broader age assurance approach.
  For the majority of adult users, we can assign their age group using
  information we already have (and this does not use message content), using age
  inference to determine whether an account belongs to an adult and allowing
  access to age-restricted experiences without completing an explicit age
  assurance flow.
</p>
<p>Here are the key points most relevant to you:</p>
<ul>
  <li data-list-item-id="e1f276b9f2a4c84035f69708788d707e1">
    <strong>Most users won’t be asked to complete an age check.</strong> Age
    assurance is only prompted when someone tries to access age-restricted
    experiences or change certain safety settings.
  </li>
  <li data-list-item-id="ed1b58c4a54a135f8d5dff79512ee6d86">
    <strong>No expected SDK or integration changes.</strong> We do not expect
    developers to change how their Discord integrations work. Our goal is to
    handle age assurance on Discord’s side while ensuring common in-game
    features powered by the Social SDK, such as Linked Channels, DMs, Deeplink
    Game Invites, and Account Linking, continue to work as expected.
  </li>
  <li data-list-item-id="e8a98abf34b99e00eabad5ebc0bcf1395">
    <strong
      >Teen-by-default affects Discord UI behavior, not your game logic.</strong
    >
    Some users may see updated defaults in Discord (for example, message
    requests from unfamiliar users will now go to a separate inbox), but this
    does not prevent players from using your game or its social features.
  </li>
  <li data-list-item-id="ea16a0de7f6bd2964f9854051f53f4a77">
    <strong>No new developer responsibility for age assurance.</strong>
    Developers will continue to manage age-related requirements for their own
    games and applications.
  </li>
</ul>
<p>
  Thanks for partnering with us as we continue to invest in safer,
  age-appropriate experiences for our shared community members.
</p>
