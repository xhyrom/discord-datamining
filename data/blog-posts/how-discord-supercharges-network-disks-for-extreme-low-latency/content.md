<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>It's no secret that Discord has become your place to talk; the 4 billion messages sent through the platform by millions of people per day have us convinced. But text chat only accounts for a chunk of the features that Discord supports. Server roles, custom emojis, video calls, and more all contribute to the hundreds of terabytes of data we serve to our users.†</p>
            <p>To provide this enormous amount of data, we run a set of NoSQL database clusters (powered by ScyllaDB), each one the source of truth for their respective data set. As a real-time chat platform, we want our databases to respond to the high frequency of queries as fast as possible.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:580pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62fa8baf6342b4bb5b594de7_Untitled.png" loading="lazy" alt="A line graph containing &quot;Total Requests per Second by Cluster.&quot; There are multiple unlabeled lines shown, with the biggest takeaway being that the &quot;Requests per Second&quot; are consistently hovering around 2 million."></div>
                <figcaption>Our databases were serving around 2 million requests per second (in this screenshot.)</figcaption>
            </figure>
            <h2><strong>Scaling Beyond Our Hardware</strong></h2>
            <p>The biggest impact on our database performance is the latency of individual disk operations - how long it takes to read or write data from the physical hardware. Below a certain database query rate, disk latency isn't noticeable, as our databases do a great job of handling requests in parallel (not blocking on a single disk operation). But this parallelism is limited; at a certain threshold, the database will need to wait for an outstanding disk operation to complete before it will issue another. If you combine this with disks that take a millisecond or two to complete an operation, the database eventually reaches a point where it can no longer immediately fetch data for incoming queries. This causes disk operations and queries to "back up", slowing the response to the client who issued the query, which in turn causes poor application performance. In the worst case, this can cascade into an ever-expanding queue of disk operations whose queries time out by the time the disk is available. This is exactly what we were seeing on our own servers—the database would report an ever-growing queue of disk reads and queries would start timing out.</p>
            <p>But wait: A millisecond or two to complete a disk operation? Why are we seeing this behavior when disk latency can usually be measured in microseconds?</p>
            <p>Discord runs most of its hardware in Google Cloud and they provide ready access to “Local SSDs” — NVMe based instance storage, which do have incredibly fast latency profiles. Unfortunately, in our testing, we ran into enough reliability issues that we didn’t feel comfortable with depending on this solution for our critical data storage. This took us back to the drawing board — how do we get incredibly low latency when we can’t rely on the super-fast on-device storage?</p>
            <p>The other main means of instance storage in GCP is called Persistent Disks. These are disks that can be attached/detached from servers on the fly, can be resized without downtime, can generate point-in-time snapshots at any time, and are replicated by design (to prevent data loss in the event that a single piece of hardware dies). The downside is that these disks are not attached directly to a server, but are connected from a somewhat-nearby location (probably the same building as the server) via the network.</p>
            <p>While latency over a local network connection is low, it's nowhere near as low as over a PCI or SATA connection that spans less than a meter. This means that the average latency of disk operations (from the perspective of the operating system) can be on the order of a couple milliseconds, compared to half a millisecond for directly-attached disks.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:undefinedpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62fa8c8fc8a25b2ae703b096_Untitled.png" alt="A line graph labeled &quot;Disk latency, milliseconds, by device.&quot; It contains two lines: The &quot;Persistent Disk&quot; line is erratic, with the line rapily moving between 1 millisecond and 2 milliseconds. The &quot;Local Disk&quot; line is consistently round half a millisecond."></div>
            </figure>
            <p>Local SSDs have other concerns, as well. As with traditional hard drives, the downside is that a hardware issue with one of these disks (or a disk controller) means we immediately lose everything on that disk. But worse than with traditional hard drives is what happens when the <em>host</em> has problems; if the host to which the Local SSDs are attached has critical issues, the disks and their data are gone forever. We also lose the ability to create point-in-time snapshots of an entire disk, which is critical for certain workflows at Discord (like some data backups). These missing features are why nearly all Discord servers are powered by Persistent Disks instead of Local SSDs.</p>
            <h2><strong><br>Evaluating the Problem</strong></h2>
            <p>In a perfect world, we'd power our databases with a disk that combined the best properties of Persistent Disks and Local SSDs. Unfortunately no such disk exists, at least not within the ecosystem of common cloud providers. Asking for low latency directly-attached disks removes the abstraction that gives Persistent Disks their amazing flexibility.</p>
            <p>But what if we didn't need <em>all</em> of that flexibility? For instance, write latency isn't critical for our workloads—it's read latency that has the biggest impact on application performance (due to our read-heavy workloads). And resizing disks without downtime isn't an important feature - we can better estimate our storage growth and provision larger disks ahead of time.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:580pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62fa8ca5c227ca1dd5478335_Untitled.png" alt="A line graph labeled &quot;Disk Operations Per Second.&quot; There are two lines on this chart, with &quot;Reads&quot; hovering between 1.25 million and 1.5 million Reads Per Second. The &quot;Writes&quot; line is hovering around .1 million &quot;Writes Per Second.&quot;"></div>
            </figure>
            <p>‍</p>
            <p>After thinking through what was most valuable for the operation of our databases, we narrowed down the requirements for solving our database woes:</p>
            <ul role="list">
                <li>Stay within Google Cloud (i.e. leverage GCP's disk offerings)</li>
                <li>Continue using point-in-time snapshotting for data backups</li>
                <li>Prioritize low-latency disk reads over all other disk metrics</li>
                <li>Do not sacrifice existing database uptime guarantees</li>
            </ul>
            <p>The different GCP disk types each meet these requirements in different ways. It would be all too convenient if we could combine both disk types into one super-disk. Since our primary focus for disk performance was low-latency reads, we would love to read from GCP's Local SSDs (low latency) while still writing to Persistent Disks (snapshotting, redundancy via replication). But is there a way to create such a super-disk at the software level?</p>
            <h2><strong><br>Creating the Super-Disk</strong></h2>
            <p>What we'd described with our requirement was essentially a write-through cache, with GCP's Local SSDs as the cache and Persistent Disks as the storage layer. We run Ubuntu on our database servers, so we were fortunate to find that the Linux kernel is able to cache data at the disk level in a variety of ways, providing modules such as <em>dm-cache</em>, <em>lvm-cache</em>, and <em>bcache</em>.</p>
            <p>Unfortunately, our experimentation with caching led us to discover a couple pitfalls. The biggest one was how failures in the cache disk were handled: Reading a bad sector from the cache caused the entire read operation to fail. Local SSDs, a thin layer on top of NVMe SSD hardware, suffer from bad sectors like any other physical disk. These bad sectors can be fixed by overwriting the sector on the cache with data from the storage layer, but the disk caching solutions we evaluated either didn't have this capability or required more complex configuration than we wanted to consider during this phase of research. Without the cache fixing bad sectors, they will be exposed to the calling application, and our databases will shutdown for data safety reasons when encountering bad sector reads:</p>
            <blockquote><em>storage_service - Shutting down communications due to I/O errors until operator intervention<br>storage_service - Disk error: std::system_error (error system:61, No data available)</em></blockquote>
            <p>With our requirements updated to include "Survive bad sectors on the Local SSD", we investigated an entirely different type of Linux kernel system: <em>md</em></p>
            <p><em>md</em> allows Linux to create software RAID arrays, turning multiple disks into one "array" (virtual disk). A simple mirrored (RAID1) array between Local SSDs and Persistent Disks would not solve our problem; reads would still hit the Persistent Disks for about half of all operations. However, <em>md</em> offers additional features not present in a traditional RAID controller, one of which is "write-mostly". The kernel man pages give the best summary of this feature:</p>
            <blockquote><em>Individual devices in a RAID1 can be marked as "write-mostly". These drives are excluded from the normal read balancing and will only be read from when there is no other option. This can be useful for devices connected over a slow link.</em></blockquote>
            <p>Since "devices connected over a slow link" just happens to be a perfect description of Persistent Disks, this looked like a viable strategy for proceeding with building a super-disk. A RAID1 array containing a Local SSD and a Persistent Disk set to write-mostly would meet all our requirements.</p>
            <p>One last problem remained: Local SSDs in GCP are exactly 375GB in size. Discord requires a terabyte or more of storage per database instance for certain applications, so this is nowhere near enough space. We could attach multiple Local SSDs to a server, but we needed a way to turn a bunch of smaller disks into one larger disk.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:584pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62fa8e1dfb24ac7e3bc84e10_Untitled.png" alt="A bar graph called &quot;Disk Used,&quot; showing how much Data is stored. While there are dozens of tiny lines, the main point of the graph is to show total amount of storage used, which is just under 768 Tebibytes of storage."></div>
            </figure>
            <p>‍</p>
            <p><em>md</em> offers a number of RAID configurations that stripe data across multiple disks. The simplest method, RAID0, splits raw data across all disks, and if one disk is lost, the entire array fails and all data is lost. More complex methods (RAID5, RAID6) maintain parity and allow the loss of at least one disk at the cost of performance penalties. This is great for maintaining uptime—just remove the failed disk and replace it with a fresh one. But in the GCP world, there is no concept of replacing a Local SSD - these are devices located deep inside Google data centers. In addition, GCP provides an interesting "guarantee" around the failure of Local SSDs: If any Local SSD fails, the entire server is migrated to a different set of hardware, essentially erasing all Local SSD data for that server. Since we don't (can't) worry about replacing Local SSDs, and to reduce the performance impact of striped RAID arrays, we settled on RAID0 as our strategy to turn multiple Local SSDs into one low-latency virtual disk.</p>
            <p>With a RAID0 on top of the Local SSDs, and a RAID1 between the Persistent Disk and RAID0 array, we could configure the database with a disk drive that would offer low-latency reads, while still allowing us to benefit from the best properties of Persistent Disks.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:622pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62fa8e85b2bb02210f63f001_Untitled.png" alt="A chart displaying how Hardware and md interact. On Hardware’s Local SSD, four NVME drives interact with “mb0” on RAID0, then flow to “md1” on RAID1. As an alternate pathway, “Persistent Disk” on Hardware can “write-mostly” to “md1” on RAID1 directly, bypassing md0 on RAID0. "></div>
            </figure>
            <h2><strong><br>Database Performance</strong></h2>
            <p>This new disk configuration looked good in testing, but how would it behave with an actual database on top of it?</p>
            <p>We saw exactly what we expected - at peak load, our databases no longer started queueing up disk operations, and we saw no change in query latency. In practice, this means our metrics show fewer outstanding database disk reads on super-disks than on Persistent Disks, due to less time spent on I/O operations.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:892pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62fa8e97c47c385a1c87a868_iowait.png" alt="A line chart called “System iowait,” showing the times that Disks were spend idle before a new action was taken.” Persistent Disk is hovering around “8e-3,” while Super-Disk” sticker between “4e-3” and “2e-3.”"></div>
            </figure>
            <p>These performance increases let us squeeze more queries onto the same servers, which is great news for those of us maintaining the database servers (and for the finance department).<br>‍</p>
            <h2>Conclusion</h2>
            <p>In retrospect, disk latency should have been an obvious concern early on in our database deployments. The world of cloud computing causes so many systems to behave in ways that are nothing like their physical data center counterparts. The research and testing that went into developing our super-disk solution gave us many useful performance metrics to monitor, taught the team about the inner workings of disk devices (in both Linux and GCP), and improved our culture of testing and validating architectural changes. With super-disks introduced to production, our databases have continued to scale with the growth of Discord's user base.</p>
            <p>Anyone who has ever worked with RAID before might be suspicious that such a setup would “just work” - there are a lot of systems at play in a cloud environment that can fail in fascinating new ways. &nbsp;There is more happening to support this disk setup than just a single <em>md</em> configuration. &nbsp;Expect a part two to this blog post that will go into more detail about the specific edge cases we’ve run into in the cloud environment and how we’ve solved them.</p>
            <p>Lastly, if you like what you see here, come join us! We are hiring!</p>
        </div>
    </div>
    <div class="btn-wrapper"><a href="https://discord.com/jobs?team=engineering" class="btn-blog w-button">Browse Careers at Discord</a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p> </p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
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