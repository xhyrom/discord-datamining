<p>
  Discord has
  <a href="https://discord.com/blog/safer-for-teens-same-discord-for-adults"
    >launched additional safety protections for teens globally</a
  >, expanding age-appropriate protections for teens across privacy, content and
  settings meant for adults, messaging, and spending.
</p>
<p>
  This launch is primarily a platform-level Trust &amp; Safety update, rather
  than a change to Discord's developer platform. Ahead of the rollout, Discord
  completed a comprehensive technical audit across SDK integrations, Apps &amp;
  Bots, Activities, and Commerce to understand what these changes could mean for
  developers and their existing integrations.
</p>
<p>
  For most developers, nothing changes: existing apps, bots, games, Activities,
  and Social SDK integrations continue to work as is.
</p>
<p>
  There are four behaviors you may observe as these protections roll out. These
  are things your app might encounter at runtime, not changes you need to
  implement.
</p>
<figure class="wysiwyg-table wysiwyg-table-align-left">
  <table>
    <thead>
      <tr>
        <th><strong>Area</strong></th>
        <th><strong>What you may observe</strong></th>
        <th><strong>What you need to do</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong
            >Apps &amp; Bots: Private Profiles may limit custom status
            visibility</strong
          >
          <em>Bots using </em><code><em>GUILD_PRESENCES</em></code
          ><em> in servers with 200+ members</em>
        </td>
        <td>
          For users in the teen age group using Private Profiles,
          <code>PRESENCE_UPDATE</code> and <code>GUILD_CREATE</code> presences
          may arrive without <code>custom_status</code>.
          <strong
            >Online status, voice states, and streams are unchanged.</strong
          >
          Friends-scoped surfaces are unaffected.
        </td>
        <td>
          <strong>No integration changes required.</strong> If your experience
          uses <code>custom_status</code>, account for cases where it may not be
          available.
        </td>
      </tr>
      <tr>
        <td>
          <strong
            >Activities: Age-gated Activities may require users to confirm their
            age group</strong
          >
          <em
            >Activities with the Developer Portal Age Gate enabled or an ADULT
            classification</em
          >
        </td>
        <td>
          Some users may need to confirm their age group before accessing an
          age-gated Activity. Until they do, they may be unable to launch the
          Activity or see it in the Activity shelf. A blocked launch returns
          <strong>403 / error code 50165</strong>.
        </td>
        <td>
          <strong>No integration changes required.</strong> Account for users
          who may not be eligible to launch the Activity. When testing age-gated
          experiences, use a non-development-team account, as development team
          accounts may bypass the age gate.
        </td>
      </tr>
      <tr>
        <td>
          <strong
            >Commerce: Parent-set spending limits may prevent some
            purchases</strong
          >
          <em>Third-party application SKUs and Activity in-app purchases</em>
        </td>
        <td>
          If a user in the teen age group has a linked parent or guardian who
          has set a spending limit, a blocked purchase ends as
          <code>PURCHASE_CANCELED</code>. No entitlement is granted and no
          purchase webhook is sent.
          <strong
            >Subscription renewals and Orbs-paid purchases are exempt.</strong
          >
        </td>
        <td>
          <strong>No integration changes required.</strong> Continue treating
          <code>PURCHASE_CANCELED</code> as a normal purchase outcome and only
          grant entitlements following a successful purchase.
        </td>
      </tr>
      <tr>
        <td>
          <strong
            >Social SDK: DMs may encounter Message Requests more
            frequently</strong
          >
          <em>Games using Social SDK messaging</em>
        </td>
        <td>
          As existing Message Request protections apply more broadly, developers
          may see more DMs routed through the Message Request experience. As a
          result, some messages may be less likely to be accepted or surfaced to
          the recipient.
        </td>
        <td>
          <strong>No integration changes required.</strong> Continue to account
          for the possibility that a DM may not be accepted or surfaced to the
          recipient.
        </td>
      </tr>
    </tbody>
  </table>
</figure>
<h3 id="h_01M34X88TZR5JSQGJ9E53NER79">Why you may see these behaviors</h3>
<p>
  This launch expands how existing age, privacy, messaging, and spending
  protections are applied globally.
</p>
<p>
  As a result, your underlying integration can continue working as it does
  today, while some users may experience additional protections based on their
  age group or settings.
</p>
<p>
  We'll continue to provide technical guidance in our developer documentation
  for cases where these protections affect specific API or SDK behavior. If you
  encounter unexpected behavior or have questions about your integration, please
  reach out through Discord's developer support channels.
</p>
