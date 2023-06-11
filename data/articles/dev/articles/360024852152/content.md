<h2>General Usage Notes</h2>
<h3>Data Availability</h3>
<ul>
    <li>We expose data going back as far as 12/6/2018</li>
    <li>All dates and date ranges represent international UTC time</li>
    <li>Any currency amounts are reported are in $ USD</li>
    <li>Data is available for the last complete day (in UTC)</li>
</ul>
<h3>Dashboard interactivity</h3>
<ul>
    <li>
        <strong>Custom date ranges</strong>: You can specify a custom date range for historical charts
    </li>
    <li>
        <strong>Custom intervals: </strong>For time series charts, you can toggle the interval between day, week, and month
    </li>
    <li>
        <strong>No partial periods</strong>: We only show data for completed days, weeks, or months
        <ul>
            <li>NOTE: This means, if you've selected week or month as your interval, and your starting date doesn't line up with the start of a week or month, you may miss an initial period</li>
        </ul>
    </li>
    <li>
        <strong>CSV Export</strong>: You can export data to CSV if you want to manipulate data yourself
        <ul>
            <li>NOTE: We only show the top 10 countries in breakdowns, but downloading the CSV will reveal the remaining amounts</li>
        </ul>
    </li>
    <li>
        <strong>Hiding data</strong>: For charts with multiple amounts, you can click on a label in a chart's legend to hide amounts and focus on the others. Ideal to use when one amount dwarfs the rest.
    </li>
</ul>
<h2>I. Acquisition</h2>
<p>This is the "top of the funnel" section about visitors to your Discord store page acquiring your game.</p>
<p><a class="ql-link" href="https://support-dev.discordapp.com/hc/en-us/articles/360025153051" target="_blank" rel="noopener noreferrer">Visit this page</a> to learn how to track conversions to your Discord store page.</p>
<h3><strong>Definitions</strong></h3>
<ul>
    <li>
        <strong>Acquisitions</strong>: The number of people who acquired your game. This will not include acquisitions of non-game SKUs (e.g. DLC, in-app purchases, etc.). This will include visitors purchasing a game for themselves or as a gift, or if a game is free-to-play, visitors adding that game to their library
    </li>
    <li>
        <strong>Impression</strong>: The number of times a user will load and render on their screen a clickable unit in the Discord app that will navigate to your Discord store page
    </li>
    <li>
        <strong>Store Listing Page Views</strong>: The number of visits to your Discord store page
    </li>
    <li>Sources:
        <ul>
            <li>
                <strong>Activity Feed Body</strong>: The body and content section of the Activity Feed page
            </li>
            <li>
                <strong>Activity Feed Hero: </strong>The hero unit at the top of the Activity Feed page
            </li>
            <li>
                <strong>Chat Embed: </strong>A message embed in Discord chat that, when clicked, will take a user to your Discord store page
            </li>
            <li>
                <strong>External Web: </strong>A visit to your Discord store page via direct navigation online
            </li>
            <li>
                <strong>Other: </strong>In order to improve access to your game, Discord frequently experiments with new surface areas in the app. We group these in "Other" and will break them out explicitly as they become formalized (e.g. user profile pop-outs, store directory, game pop-outs, etc.)
            </li>
        </ul>
    </li>
    <li>Calculations:
        <ul>
            <li>Impression click-through-rate (% CTR): We calculated this by looking at the number of Store Listing Page Visits that were driven by each of the impressions sources within the app</li>
            <li>In-app impression conversion rate (% CVR): We attribute acquisitions to in-app impressions sources by looking at the last source "touched" before the acquisition took place, within a 7-day window</li>
            <li>External web conversion rate (% CVR): we attribute acquisitions to external web sources by looking for acquisitions within a 24-hour window of a user having visited
                <ul>
                    <li>NOTE: This means that if a user clicked links to your Discord store page from both Twitch and Youtube and then acquired the game within the same 24 hour period, both Twitch and Youtube will get the credit</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<h2>II. Revenue</h2>
<p>This section will give you a breakdown of units sold and revenue from gross to net. Anything a user can acquire for free will not show up here.</p>
<p class="callout">NOTE: The below revenue-related definitions may vary—be sure to confirm based on your contract with Discord!</p>
<h3>Definitions</h3>
<ul>
    <li>Units-related
        <ul>
            <li>
                <strong>Gross Units Sold</strong>: The total number of units sold
            </li>
            <li>
                <strong>Refunded Units</strong>: Any units successfully refunded
            </li>
            <li>
                <strong>Net Units Sold</strong>: Gross Units Sold - Refunded Units
            </li>
        </ul>
    </li>
    <li>Revenue-related
        <ul>
            <li>
                <strong>Gross Revenue</strong>: Total revenue in $ USD actually received and booked by Discord from its users
            </li>
            <li>
                <strong>Refunds, Chargebacks, Fraud (RCF)</strong>: Actual $ amounts attributed to returns, user fraud, charge-backs and refunds
            </li>
            <li>
                <strong>Taxes: </strong>Any value added tax, goods and services tax or any other similar tax, including any sales tax, service tax, gross receipt tax, or use tax imposed by any governmental authority
            </li>
            <li>
                <strong>Fees:</strong> Any amounts paid to third-party payment processors and money-transmitters
            </li>
            <li>
                <strong>Net Revenue: </strong>Gross revenue - RCF - Taxes - Fees
            </li>
        </ul>
    </li>
</ul>