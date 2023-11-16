<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>On November 6th, beginning at 10:52 AM PST and lasting for approximately 50 minutes, Discord’s authentication service went down, preventing users from connecting, logging in, reading and sending messages, or doing much of anything on the platform.</p>
            <p>This outage was due to an operation we were performing to upgrade the operating system on the underlying ScyllaDB cluster interacting negatively with a degraded disk on one of our cloud instances. This combination of a zone being intentionally down for upgrade and the degraded disk in another zone led to the cluster becoming overloaded and unable to serve authentication lookups.</p>
            <p><strong>The nature of the outage impacted the availability of our service only, there was no impact to the correctness of the results returned by our authentication service. This incident was not in any way caused by external actors or the result of unauthorized access.</strong></p>
            <p>We have taken steps to improve both the architecture of this particular cluster as well as our upgrade procedure to ensure that this kind of outage cannot recur. In the rest of this blog post, we will go into more details about the system, the timeline of the incident, and what we’ve done to improve the resiliency of our systems.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Discord runs several ScyllaDB clusters, grouped by their relative functionality. We wrote earlier this year about our <a href="https://discord.com/blog/how-discord-stores-trillions-of-messages">messages cluster</a>. We also have an authentication cluster, [scylla-authentication], which holds information about user sessions. This cluster follows our standard ScyllaDB storage topology:</p>
            <ul role="list">
                <li>Our <a href="https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency">hybrid RAID super-disk</a> approach, where we use RAID to mirror fast NVMe Local SSDs, which are cleared on a reboot, with a persistent disk that’s slower but durable.</li>
                <li>Data replicated across three zones in our cloud provider</li>
            </ul>
            <p>We architect our clusters to tolerate zonal failure; if we lose one zone, the cluster should continue to successfully serve requests. This behavior is due to both our configured replication factor in Scylla — spread across three zones — and quorum consistency reads against the database.</p>
            <p>Additionally, with our disk topology, we spend 40 minutes (scaling with the size of the persistent disk) on instance startup syncing the RAID, copying data from the persistent disks to the NVMEs. This copy must be completed before Scylla can start.</p>
            <p>The relevant cluster here — [scylla-authentication] — is fronted by our Rust authentication service. Whenever a user makes a request against our API, the authentication service is responsible for validating that the user is authenticated. It’s a critical part of our infrastructure: if we can’t authenticate users, it’s going to be very disruptive to everyone on Discord.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65554f032ca59b02f43a41a4_mermaid-diagram-2023-11-08-144652.png" loading="lazy" alt="A chart starting at &quot;API&quot;, and moving through &quot;validate users&quot;, &quot;Authentication Service&quot;, and ending on &quot;scylla-authentication&quot;."></div>
            </figure>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Beginning on November 3rd, our persistence infrastructure team began executing an OS upgrade procedure on our Scylla clusters. We perform this operation for each of our Scylla clusters by taking one zone at a time offline, detaching their persistent data disks, and terminating the instances. We then provision new instances with the upgraded OS and reattached disks, let the RAID rebuild, and then bring Scylla back online. We wait a configured period of time for the state of the cluster to settle before continuing to the next zone.</p>
            <p>Performing operations zonally on our clusters allows us to speed up the work significantly, as well as testing our resiliency to zonal issues. Instead of taking over a week to do our largest cluster, we can get it knocked out in a few hours. While each cluster is zonally redundant, removing a whole zone not only removes a third of the cluster’s compute capacity but leaves no additional room for error. Any further downtime in a second zone will cause a loss of quorum, leaving queries against the cluster unable to complete. The scary part of the procedure is that for a period of time, the cluster is in a vulnerable state, because after we detach the disk, we can’t restore that capacity to the cluster for at least 45 minutes, due to the RAID rebuild time.</p>
            <p>Before the incident began on November 6th, we had upgraded several of our clusters already over the weekend and had successfully completed the procedure against over a hundred nodes. Coming online on Monday morning, we had two clusters remaining, including authentication.</p>
            <p>In preparing for authentication, we noted that we hadn’t done a full zonal restart of the [scylla-authentication] cluster recently, so taking an entire zone offline would be potentially risky, as the recovery time if we were unable to handle the load would have been approximately 45 minutes. To mitigate this risk, we temporarily took one zone, [b], offline for ten minutes to assess the cluster’s performance. After seeing no degradation, we began upgrading [scylla-authentication].</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>We began the upgrade at <strong>9:16 AM</strong>. When we took zone [b] offline during the upgrade, the cluster’s latency and error rate were nominal, as we’d seen with every cluster we’d upgraded to this point. However, we did notice one odd datapoint: one of the two nodes, [scylla-authentication-b-2], was rebuilding its RAID array much slower than its counterpart. Because the speeds at which the RAID rebuilds are higher than we let it operate at normally, we treated it as more of an interesting quirk and not the harbinger of doom it was in hindsight.</p>
            <p>At <strong>10:42 AM</strong>, the upgrade of zone [b] was complete. Our procedure waits ten minutes for the cluster to stabilize once all nodes are online, letting its latency settle and allowing it to catch up on compactions. The operator validated that the cluster was in a well-functioning state and manually advanced to the next zone. The ten-minute waiting period began.</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>At <strong>10:52 AM</strong>, the script drained all connections from zone [c] of scylla-authentication, and the outage began.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65555237eff274bf055e3e3b_Screenshot%202023-11-08%20at%204.46.15%20PM.png" loading="lazy" alt="&quot;discord-ap Availability&quot; chart from November 6th, showing a drop just before 19:00 and ending around 19:45."></div>
            </figure>
            <p>Discord’s availability, as measured by the percentage of HTTP requests returning a 200-level response, immediately plummeted to approximately 25% when connections drained.</p>
            <p>This drop was caused by a confluence of factors:</p>
            <ul role="list">
                <li>The cluster was underprovisioned. While we design our clusters to tolerate the loss of an entire zone, having an entire zone offline plus degraded performance in a single additional node in a different zone should not have caused an outage of this magnitude.</li>
                <li>One of the NVMe Local SSDs attached to [scylla-authentication-b-2] was degraded, as evidenced by the slow rebuild times, harming disk I/O on that instance.</li>
                <li>ScyllaDB maintains a row cache to reduce expensive reads. We’ve found that for some clusters, cache hit rate needs to be at a certain level to safely proceed with restarting nodes. This behavior is a sign of an underprovisioned cluster, which we’re working to rectify. As part of the restart procedure, we didn’t verify that authentication’s cache hit rate for the recently restarted [b] nodes had reached a safe level before continuing, as the earlier zonal downtime procedure had given us false confidence that proceeding would be safe.</li>
                <li>Our application, on server errors to authentication endpoints, will retry requests. After our system became overloaded and began timing out requests, we exacerbated the problem by creating a retry storm, further overloading the Scylla cluster.</li>
            </ul>
            <p>These factors combined to leave us in a state where:</p>
            <ul role="list">
                <li>Zone [b] had one degraded node and one healthy node with relatively empty row caches</li>
                <li>Zone [c] was offline for upgrades</li>
                <li>Zone [d] had two healthy nodes</li>
            </ul>
            <p>In this state, the cluster was overloaded and unable to quickly serve user requests, causing an immediate SEV.</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>The first alerts went off at <strong>10:56 AM</strong>, about four minutes after the start of the incident, but we had already started an incident response call and were investigating the issue, immediately bringing in engineers from our various infrastructure teams.</p>
            <p>We quickly suspected this was tied to the in-progress authentication upgrade due to the timing correlation, as well as a graph that has served as an incredible troubleshooting tool for us — time spent by downstream service — which told us that the authentication service was spending much, much more time processing user requests than normal. This finding was confirmed when the authentication alerts went off moments later.</p>
            <p>Unfortunately, by the time we had discovered the source of the issue, the upgrade script had detached the data disk. To get zone [c] back online, we needed to wait approximately 45 minutes to provision the new instances and rebuild the RAID array. We were hopeful that we could recover without needing to bring zone [c] back online by pulling other levers.</p>
            <p>When looking at the authentication cluster, we observed it to be saturated with queries and exhibiting high latency. To lessen load on the authentication cluster, we turned off sending typing events and marking messages as read at <strong>11:05 AM</strong>. This action restored authentication functionality to approximately 50% of users, but not the full recovery we were hoping for.</p>
            <p>At this point, we were racing the RAID rebuild; at approximately <strong>11:40 AM</strong>, it would complete and restore us to nominal capacity. Upon inspecting [scylla-authentication], we saw all four nodes being overwhelmed, with load at 100% for some shards on each node (Scylla operates on a shard per-core architecture, sharding the dataset internally on each node in addition to replicating the dataset around the cluster via a hash ring).</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/655555ee5834a96f71f6e2e9_Screenshot%202023-11-08%20at%206.57.05%20PM.png" loading="lazy" alt="Chart for &quot;Load (scylla reactor) by Shard of Host&quot; with many lines jumping during the 19:00 to 19:45 time period."></div>
            </figure>
            <p>As we had already begun shedding load to the cluster, we had already used the biggest hammer available to us. Another option available to us was to restart the nodes in the cluster to clear out long running queries that had been abandoned by clients. There was a clear downside, however, to restarting nodes. While the cluster was clearly suffering serious issues and was unable to serve quorum queries, because all of zone [c] is offline, restarting nodes would absolutely break quorum, albeit in a predictable fashion.</p>
            <p>Only 50% of users were able to successfully use Discord as of <strong>11:10 AM</strong>. In a perfectly-controlled situation, having one zone offline plus one other node, would mean that 1/N requests would fail, where N is the number of nodes per zone. Since we have two nodes per zone, restarting one node with another zone down would mean 50% of requests would fail. If we were to try to rolling restart the remaining nodes, and if we restarted the right node (assuming one node was the source of the trouble), there’d be no extra ill effects and we would ideally recover. If we restarted the wrong node, however, we might be completely down. With that in mind, we continued researching to find the source of the problem.</p>
            <p>After a detour due to a misleading error message in our authentication service, we determined from inspecting Scylla’s logs that the two [b] nodes — [scylla-authentication-b-1] and [scylla-authentication-b-2] — were overwhelmed, as Scylla was reporting errors connecting to each of these nodes. Saying this out loud, we recalled the curiosity we observed earlier: [scylla-authentication-b-2] took much longer to rebuild its RAID array. With that in mind, we briefly discussed restarting [scylla-authentication-b-2], but it was <strong>11:35 AM</strong>. The RAID’s rebuild would be complete in five minutes, and so we elected to wait five more minutes and let the system recover on its own to avoid any extra risk and imperil the impending recovery.</p>
            <p>At <strong>11:41 AM</strong>, the two [c] nodes came back online. We immediately restarted the said b nodes, one node at a time. At <strong>11:43 AM</strong>, the system had recovered, and we saw user activity return to the normal levels.</p>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>We measure availability in terms of 9s because you’ll never have 100% availability — incidents happen. This incident, however, was above and beyond what we consider normal, and we’re dedicated to making sure this doesn’t happen again. With that in mind, we’re taking the follow actions:</p>
            <ul role="list">
                <li>Immediately after the incident, we expanded the [scylla-authentication] cluster, doubling it in size to give it additional capacity. When we performed our zonal downtime test before the procedure, it was running with four nodes with full caches. By doubling the size, each node takes half as many requests and gives us additional room for error when nodes are offline.</li>
                <li>After some analysis, we rebuilt [scylla-authentication-b-2] with new, non-degraded disks. Taking our learnings, we’re working on building a way to detect disk degradation when it is at a level that’s subtle enough not to affect overall latency but might pose a risk to the reliability of the service.</li>
                <li>Concurrently, we’re working on building a more automatic control plane for our Scylla clusters. Moving these upgrade operations into the control plane, which can include far more robust cluster analysis (such as the cache hit rate), provides greater safety via further automation to the procedure.</li>
            </ul>
            <p>Longer term, after fully understanding this outage, it’s clear to us that we need to operate this cluster differently from how we operate our other clusters (which are much, much larger.) We are currently exploring a few options, but we haven’t yet decided which we’ll go with:</p>
            <ul role="list">
                <li>Increased replication factor (an easy knob, but may not give us the failure profile we want)</li>
                <li>Hot-standby cluster in another region (complicates the consistency model of auth which is pretty critical to get right)</li>
            </ul>
            <p>Whatever we decide, our goal here is to increase the redundancy built into this small but critical cluster. The team is currently working on this and we anticipate having a solution being deployed within the next few weeks.</p>
            <p>Finally, we know how impactful any interruption is, how much we all rely on Discord being available. We’re dedicated to improving our systems in light of this incident and building a more reliable Discord for you.</p>
        </div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>