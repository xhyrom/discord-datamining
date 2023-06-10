<h2>Statistics Bot Verification Policy</h2>
<p>What is a statistics bot? It's a Discord bot whose primary purpose is to display statistics about a guild, or the members of that guild. This information can range from how many members a guild has over time, to how active certain channels are, to who are the most active guild members.</p>
<p>We know that people who run communities love to know about what's going on in their server. This article is the policy that we ask all verified Statics Bots to adhere to in order to uphold Discord's commitment to user safety and data privacy.</p>
<p id="guild-data-access callout">Guild Data Access</p>
<p>"Guild Data" is anonymous, aggregate data about the guild as a whole or channels within the guild. It includes but is not limited to:</p>
<ul>
    <li>Growth/memberflow charts</li>
    <li>Activity of individual channels</li>
    <li>Voice/message velocity</li>
    <li>"Activity" data, like popular games</li>
</ul>
<p>Access to Guild Data must meet the following criteria:</p>
<ul>
    <li>Any data or dashboards must be default-private. This means that a user must be a member of the guild in order to see them.</li>
    <li>You may give server owners and admins the ability to mark their guild data as public. This allows aggregated, anonymous data about the guild or guild channels to be visible without being a member.</li>
</ul>
<p id="member-data-access">Member Data Access</p>
<p>"Member Data" is non-anonymous data about a member of the guild. It includes but is not limited to:</p>
<ul>
    <li>Leaderboards</li>
    <li>User activity over time</li>
    <li>User message velocity/voice activity over time</li>
</ul>
<p>Access to Member Data must meet the following criteria:</p>
<ul>
    <li>Any data or dashboards must be default-private. This means that a user must be a member of the guild in order to see them.</li>
    <li>Global aggregate member data may be public
        <ul>
            <li>This includes global EXP/game score leaderboards</li>
        </ul>
    </li>
    <li>Server-specific aggregate member data may not be made public.
        <ul>
            <li>This includes guild-specific voice, message, EXP, and other leaderboards</li>
        </ul>
    </li>
    <li>Time-series member data must always be private to the guild, and must have limited access to guild owners or members with "Administrator" or "Manage Server" or "View Server Insights" permissions.
        <ul>
            <li>This includes member "drill-downs" that show individual user activity over time</li>
        </ul>
    </li>
</ul>
<p>Furthermore, <strong>a user <em>must</em> be allowed an easy way to opt-out of any member data collection via a bot command</strong>. Opting out via a web dashboard is insufficient.</p>
<p>Remember, not all use cases are the same. You may see some bots that have been verified that toe the line; verification is a manual review process, and therefore a human has laid on eyes on every bot that passes through. Therefore, we have deemed that individual use case alright.</p>