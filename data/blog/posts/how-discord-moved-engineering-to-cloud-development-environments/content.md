<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Introduction<br></strong></h2>
            <p>If you've been following our previous<a href="https://discord.com/blogs?engineering"> engineering blog posts</a>, you'll know that building and maintaining Discord is a complex task. Our software development takes place in a polyglot mono-repo, where Python, Typescript, Rust, Elixir, and C/C++ are the most actively developed languages. We also develop and ship products for all major platforms including Android, iOS, MacOS, Windows, and Linux.</p>
            <p>The Internal Developer Experience team is responsible for roughly the first third of the Software Development Life Cycle. Our main tasks include building and maintaining IDE experiences, managing development environments, shipping tools for building, developing, and testing code, scaling and maintaining CI infrastructure, and owning the change management process and supporting tooling infrastructure. While we could delve deeper into any of these topics, this blog post focuses on how we transitioned all backend and infrastructure development to a Linux-based Cloud Development Environment, thanks to the team over at<a href="https://coder.com/"> Coder</a>.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Background <br></strong></h2>
            <p>Over the past few years, Discord's engineering organization has gone through rapid growth and more than tripled in size. Discord operates as a hybrid company with a physical office in San Francisco and the Netherlands, but our engineering team primarily operates remotely.</p>
            <p>Most of our developers use MacBooks. Before transitioning to remote development machines, we ensured that engineers could fully stand up Discord on both Mac and Ubuntu machines, and created custom tools to provision laptops using Homebrew. However, we encountered several issues where a <em>brew upgrade</em> could halt a developer in their tracks. We resolved many of these issues by hard-pinning every software package and transitive dependency, although this made it more difficult to install arbitrary software packages. We have since moved from Homebrew to Nix for installing system dependencies, allowing engineers to use Homebrew as needed.</p>
            <p>Our local service orchestration tools have also evolved. We began with Makefiles and procfiles, but quickly outgrew this system. We experimented with Docker and docker-compose, but for various reasons, this did not work for us. At that time, the performance on docker-for-Mac performance was subpar, and the added friction in the (re)-build loop led us to seek faster, simpler solutions. We eventually moved to a<a href="http://supervisord.org/"> supervisor</a>-based system and developed tools to easily define and run services and dependencies.</p>
            <p>However, not using containers in the development loop comes with trade-offs. Managing two non-reproducible environments became a significant burden for the tooling teams. We often found ourselves debugging niche and unique issues to unblock engineers. As the company continued to grow, it became clear that we needed to focus on a single Linux-based development environment. This led us to explore Cloud Developer Environments (CDEs) and eventually evaluate Coder.</p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Cloud Development Environments<br></strong></h2>
            <p>Shifting development to VMs hosted on a cloud provider yields numerous benefits, such as immutability, reproducibility, configurability, enhanced security, and built-in IAM. Additionally, it provides access to a broader range of tooling and automation options to manage and maintain the environments.&nbsp;</p>
            <p>A core requirement for CDEs to even be viable is a good editor and dev loop experience. Fortunately, VS Code’s<a href="https://code.visualstudio.com/docs/remote/remote-overview"> remote development extension</a> was stable and offered a robust experience. Most engineers at Discord used VSCode, so we felt the experience was good enough to embark on this journey.</p>
            <p>Reproducible and consistent environments are critical for a stable experience. Although a completely immutable environment would be theoretically ideal, it's just not practical. We chose to mount and preserve the <em>/home</em> directory across restarts, allowing developers to pick up exactly where they left off. This provides a space for storing repos, dotfiles, personal tools, and for customizing their workspace. While this approach deviates from some immutability principles and can introduce potential issues, we can still update the template and image without needing a full workspace rebuild, giving us the best of both worlds.</p>
            <p>While there are many benefits to CDEs, it's important to acknowledge the drawbacks. Notably, no solution can rival the performance of working on localhost, and the added latency from working over SSH can be substantial. In unstable network conditions, latency, connection drops, and a generally degraded experience were reported.</p>
            <p>Sending large HTML and JavaScript bundles over the network adds significant time to critical save and rebuild loops. Consequently, many engineers prefer to do their frontend work on their local laptops and backend work on their remote machines. This approach necessitates a "split-brain" repository or code syncing between the laptop and remote machine when changes to both API and UI code are necessary. This increases cognitive load and is certainly not an ideal situation.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1600px">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65d7ab31adc625e013ce709c_3I-9ahl1LkT0bqglH-BoShQ11tIYECFYHbGzSIXqzFqHlOKsVHTfil63skYjP3UQB8Zzj4cD__WpeUeBQct1ebnQPiUnZEk1436ppRuqlxWJ3asp_MB3LUxJgz7GRWjwhyGnZOmUBj7xL8t_Re7aUUY.png" alt="A diagram, displaying a developer’s laptop accessing remote services in the Cloud, with backend services running remotely, and local services optionally local or remote. Explicit callout is given that code can live either locally or remotely, which can be confusing."></div>
            </figure>
            <p>Still, even with these tradeoffs, we firmly believed the benefits outweigh the negatives!</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Coder<br></strong></h2>
            <p>Our initial engagement with Coder began in late 2020. At the time, Coder was a small engineering team, and they were avid Discord users. Their early product was entirely Kubernetes native, which appealed to us as Discord is a heavy Kubernetes user. Considering the time and effort to build a similar solution with the features we needed, evaluating Coder’s product was an obvious decision.</p>
            <p>Feature-wise, Coder provides all the bells and whistles you'd expect and the team recently rebuilt their product from the ground up, addressing many of the issues we had experienced in our early engagement. Notably, we encountered many issues using Kubernetes and containers as the main development environment. Developing Discord requires a highly complex environment with many moving parts, and as we found, developing in a<a href="https://github.com/nestybox/sysbox"> Sysbox</a> environment made it challenging to maintain and debug the various issues across the many layers of virtualization. Additionally, we saw issues with noisy neighbors, lag spikes, and higher-than-expected latency.</p>
            <p>In 2023, we moved to Coder’s V2 product which gives us the power to deliver VMs to developers, largely solving most of our problems. Another notable change in their V2 product was a rewrite of their networking stack, which now leverages Tailscale &amp; WireGuard for much more stable, secure, and performant networking. Moving to VMs gives us full access to the host and has drastically simplified the architecture, resulting in a stable and fast environment. After the migration to V2, we received a ton of feedback from engineers that development generally felt faster and smoother. Additionally, we no longer see support tickets and questions about high latency and connection drops. These are huge wins across the board.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1280px">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65d7ab5b128ec85ab5a0652a_4WVsDbGfFq2uxnUD1ifK1Mvt7pt8lA8A1X7ETMPuwcCL-SnOF458gWZ1vW3oAA-07EUXgYc20gAK2C8WhMS4QxOK1XQkLPbgMzGAmrGbLXbmuZ0X7cejYgqWatDkxkTiteMFbUr0ZLA-9gOFul_fYqM.png" alt="A collage of discord messages, displaying people happy with Coder V2."></div>
            </figure>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>So, how did the migration go?<br></strong></h2>
            <p>Our transition from local development on MacBooks to using Coder was a journey full of learning and adaptation. Here's a detailed account of our migration process, the lessons we learned, and what we would do differently if we were to do it again.</p>
            <h3><strong>The Migration</strong></h3>
            <p>The (very) simplified migration plan looked like this:</p>
            <ol role="list">
                <li>Solidify the experience - default experience should “just work”</li>
                <li>Increase broader adoption - small tests with developers, collect representative feedback, then move to open beta</li>
                <li>Hard cutoff - solid docs, wider training, support channels, and fully deprecate backend dev on MacBooks</li>
            </ol>
            <p>Our migration started with the “easy” work of creating the dev container, installing system dependencies, setting up user accounts, permissions, and any pre-existing software that needed to be installed. Investing a little into our own automation to make our feedback loops fast was important for velocity during this time.&nbsp;</p>
            <p>I said “easy” work above, because these types of migrations are not just technical problems, but largely people problems. It’s easy to miss how much work it takes to execute a large migration impacting the entire engineering org. We needed to understand what kinds of experiences people would be missing, what they would need to learn, and where they would feel the most pain. We conducted interviews, got early feedback, and of course, dogfooded the environment ourselves.</p>
            <p>To gain widespread adoption within the company, we identified and recruited "champions" from various departments who were enthusiastic about tooling. These individuals helped test the new environment and provided regular feedback. The diversity in day-to-day loops and needs was crucial, as it allowed us to identify a wide range of issues that could arise during daily development. We found numerous issues through this process and collaborated closely with these early beta testers to address their concerns. We benchmarked different build tools, conducted network load tests, and ensured that the most common development loops remained functional and efficient.</p>
            <p>We believe that if we develop and deliver tools that enhance engineering experiences, developers will be naturally incentivized to adopt the new functionality. We understood a hard cutover date would be required since there will always be some who resist change, but we strived to offer such a compelling experience that people would opt to transition independently. Of course, we nudged people to try Coder when their MacBooks had issues, but we saw a reassuring number of individuals willing to experiment with the remote environment.</p>
            <p>With the arrival of Apple’s M1 ARM-based silicon, we accelerated our timeline and decided to move quicker on the cutoff date. New M1 laptops were starting to ship to developers and we found several issues running our backend stack on the new hardware. Rosetta emulation worked for some applications, but not all. When we discovered that the only new hardware available was Apple Silicon, we decided to fast-track milestone 3, deprecate MacOS-based backend development, and choose an accelerated timeline for the transition.</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h3><strong>Lessons Learned</strong></h3>
            <p>We learned that emulating a development machine in a container running in Kubernetes is challenging. For instance, running privileged containers was not an option for us, so we had to find unique solutions for changing kernel parameters in development. This posed difficulties in running applications like Scylla, which required kernel modules or kernel parameter updates. We solved this by having a privileged daemon on each node to set kernel parameters for the underlying host. However, we faced other issues and, in retrospect, could have identified these problems and planned for them in advance.</p>
            <p>It's a given, but we also learned how much developers value responsiveness. If developers can type faster than the system can render, it can disrupt their workflow. We also recognized the importance of a smooth onboarding process, especially for developers not comfortable with the command line. We added documentation, training materials, recorded videos, and created rich default dotfiles for those that don’t come with many years of highly tuned tools. We spent a considerable amount of time on this “last-mile” work, but it still felt insufficient to meet everyone's needs.</p>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h3><strong>What We Would Do Differently</strong></h3>
            <p>The primary issue that emerged after the migration was around networking latency and connection drops. Given our highly-distributed environment with engineers working across the US and in various other locations, it was challenging to anticipate the worst-case scenarios. Although we leveraged Coder's early satellite feature to establish Kubernetes clusters in different regions and reduce latency, some developers still encountered significant performance issues.</p>
            <p>In retrospect, we should have developed better tooling to understand, diagnose, and troubleshoot these issues under different networking conditions as they occurred. While we did eventually create these tools, they came after the migration, leaving us somewhat in the dark. Most of these issues have been resolved thanks to a rebuilt networking stack and the switch to VMs. However, an early focus on these issues would have equipped us with the knowledge to better understand the user experience.</p>
            <p>For any large-scale migrations, it's crucial to significantly invest in communication and documentation. Requesting all of your engineers to overhaul their entire development workflow is a major ask. Although we communicated the change in all-hands meetings, signaled the change in advance, and held an extensive beta testing period, we still feel we could have done more to ensure a smoother transition.</p>
            <p>Despite the challenges and the need for two migrations (Mac→V1→V2), our move to remote dev machines using Coder has been remarkably successful. The timing was fortuitous, as we embarked on this journey before the pandemic began.&nbsp;</p>
            <p>Now, with a highly distributed Discord engineering team across the US, we are incredibly grateful for our partnership with Coder. It has provided our developers with a more consistent and reliable development environment and while it was a significant investment for the company, it’s one we would make again.</p>
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