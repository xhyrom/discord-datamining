<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>At Discord, we utilize a Python monolith to power our <a href="https://discord.com/developers/docs/reference">API</a>, from sending messages to managing Nitro subscriptions. To support this, we use <a href="https://github.com/pytest-dev/pytest">pytest</a> to write and run unit tests. </p>
            <p>Over the last 8 years, the time it takes to run a single test has continuously grown until it reached a point where it takes a whopping 13 seconds to run a single test. </p>
            <p>To clarify, even if the test ends up doing absolutely nothing, 13 seconds is the bare minimum it takes:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/d824641a57d3487e7fb96394a87cadca.js"></script>
            </div>
            <p>Most of the testing time is spent in our global <strong>conftest.py</strong> file, which contains slow imports and fixtures with <strong>scope=session</strong>. We refer to this internally as "importing the universe," and to say it straight: the lack of dependency boundaries in this project is an issue that’s worsened with time. We’re actively working to address this in the long term by breaking our monolith into modules, reducing the number of imports &amp; fixtures required to run a single test.</p>
            <p>However, since running a single unit test happens frequently, we started looking into potential stop-gap solutions.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>Why is it important?</h2>
            <p>Simply put: humans get distracted. When I’m waiting for a test for more than a few seconds, I might click on a notification, open my browser, or get distracted for a few minutes. These distractions extend the feedback loop and make me less efficient in completing my current task.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:413pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/657257bafeeb80b48e72c137_compiling.png" alt="An XKCD comic. Two engineers are swordfighting, looking as if they're not working. The caption reads: &quot;The #1 programmer excuse for legitimately slacking off: 'My code's compiling.'&quot;"></div>
                <figcaption><a href="https://3d.xkcd.com/303/"><em>https://3d.xkcd.com/303/</em></a></figcaption>
            </figure>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>Solution: Wait ahead of time!</h2>
            <p>After tinkering for a bit, I came up with a simple but imperfect solution that can speed things up significantly which I call “pytest daemon.” The gist of the approach is to have an already-loaded process on standby, letting us run any test quickly without having to wait for a new Python process to import.</p>
            <p>Our daemon manager watches for any code changes, and if something changes, a new process is spawned.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:2000pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65725a338ca0f27dc38d69f9_Flowchart.png" loading="lazy" alt="A flowchart that goes as such: &quot;Dev -> Test -> daemon manager -> daemon&quot;"></div>
            </figure>
            <p>The difference between utilizing a vanilla test and running a test with the daemon involves replacing the regular pytest command: you use a script that transforms the arguments into a REST HTTP request. This is then sent to the daemon manager, which proxies the request to the active daemon.</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Here be dragons:</strong> Hot reloading</h2>
            <p>So, it’s time to get to work: let’s assume we have a process ready to run some tests, but then we end up making one last change — should we wait a whole 13 seconds for a new process to start? Pfft… nahh! We can call upon the dark arts of:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/722e4bc4e37230330377ca8a8b0206d8.js"></script>
            </div>
            <p>To utilize our tactic, we’ll need to determine which modules need to be reloaded and the order they should be reloaded. For instance, if we have the following imports:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-center" style="max-width:">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65725adf90e0e3bcaa3f64e6_Screenshot%202023-12-07%20at%203.52.46%E2%80%AFPM.png" loading="lazy" alt="A flowchart with two paths. One goes: &quot;Test -> import -> view -> import -> model.&quot; The other goes: &quot;test -> import - model&quot;"></div>
            </figure>
            <ul role="list">
                <li>If <strong>test.py</strong> is modified, we only need to reload it.</li>
                <li>If <strong>view.py</strong> is modified, we need to reload <strong>view.py</strong>, <strong>test.py</strong>, in that order.</li>
                <li>if <strong>model.py</strong> is modified, we need to reload <strong>model.py</strong>, <strong>view.py</strong>, <strong>test.py</strong>, in that exact order.</li>
            </ul>
            <p>To know which files to load, our daemon manager starts by analyzing all our source code:</p>
            <ol role="list">
                <li>Build an import graph for our code, where each node is pointing to all the files that directly import it (reversing the import graph):</li>
            </ol>
            <figure class="w-richtext-figure-type-image w-richtext-align-center" style="max-width:">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65725b1754caa81aae5cc169_Screenshot%202023-12-07%20at%203.53.37%E2%80%AFPM.png" loading="lazy" alt="A flowchart with two paths. One goes: &quot;model -> dependancy -> test.&quot; The other goes &quot;model -> dependancy -> view -> dependancy -> test.&quot;"></div>
            </figure>
            <ol role="list">
                <li>Create a topological sort of the dependencies graph from step one. For example: <strong>[model.py, view.py, test.py]</strong></li>
                <li>When a file is modified, use the graph from step one to get a mapping from each python file to all other files that import it directly. In case we have multiple files, we sort them based on their topological sort from step two.</li>
            </ol>
            <blockquote>💡 Without using topological sort, we might create the wrong reload order. Consider what will happen if <strong>model</strong> is modified and we choose to reload using the following order: <strong>model, test, view</strong>? Now, when executing <strong>importlib.reload(test)</strong> it will keep a reference to an old version of <strong>view</strong> which, in turn, still uses an obsoleted version of <strong>model</strong>.</blockquote>
            <p>Reloading the files in the right order doesn’t solve all of our issues. Consider the following task decorator, which has the below sanity check:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/2beb82bb1a7c2a00b3fc021aea08ab83.js"></script>
            </div>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/f37cf2685b6b0649a906d7d27a55fd85.js"></script>
            </div>
            <p>In the example above, reloading <strong>task.py</strong> will raise an exception! To work around these kinds of issues, we added a patching point:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/120ba383f038758c90d574c2e5f8f584.js"></script>
            </div>
            <p>To fix the example above, we can implement the following patch:</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/c01d314c49868a2acbad9aaeaba4797e.js"></script>
            </div>
            <p>Hard as we try, there might be cases where hot-reloading fails or where it’s simply not worth the effort to work around these failures, which is why we always start a new, clean process in parallel to our reloading attempts. If our new method doesn’t work, we still have ol’ reliable within at most 13 seconds from the last save.</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>How Much Faster Is It?</h2>
            <p>It’s <strong>so</strong> fast. Just look at these results:</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:2734pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/65725d02f8432d5f01ef30a6_Screenshot%202023-12-07%20at%204.01.59%E2%80%AFPM.png" loading="lazy" alt="A table comparing two results. One row reads: &quot;empty test with daemon, .4 seconds, without daemon, 12.7 seconds.&quot; The second row reads &quot;complex test with many dependancies, with daemon 3.9/2.4/2.4 seconds, without daemon 17.5 seconds.&quot;"></div>
            </figure>
            <p>A few notes when looking at these results:</p>
            <ol role="list">
                <li>Running the daemon multiple times can improve results in case additional one-time work was triggered, for example, if additional modules were loaded.</li>
                <li>Running our “empty test” on vanilla python without any imports or <a href="https://conftest.py">conftest.py</a> takes 0.6 seconds, which means our stop-gap solution is faster than we could ever get by removing unneeded imports or fixtures.</li>
            </ol>
            <p>Looking at aggregated runs of our users in a given month, <strong>we found that we reduced the median test duration from 20 seconds down to 2 seconds!</strong></p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>VS Code Integration</h2>
            <p>Using pytest is well supported by popular IDEs like VS Code. However, our pytest daemon breaks some of its functionality. To address this, we developed a small plugin that provides the following features:</p>
            <ol role="list">
                <li>Test the current method.</li>
                <li>Run all tests in the current file.</li>
                <li>Repeat the last run.</li>
                <li>Start the daemon manager.</li>
                <li>Force a full reload of the daemon in case of any issues.</li>
            </ol>
            <p>While our plugin may not be as good as the built-in integration, it’s a close approximation. A speed trade-off is worth sacrificing some fancy features.</p>
            <p>It’s important to note that debugging still works seamlessly. By debugging the daemon manager, VS Code automatically attaches to any child process spawned, with all breakpoints functioning as expected.</p>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>Open Source Projects</h2>
            <p>While drafting this blog post, I searched around the web to see if anyone else was having a similar issue and found an open source project that implemented a similar approach. It even used the same name! </p>
            <p>Both projects were created independently around the same time, which is pretty cool. Great minds think alike! </p>
            <p>If you run into a similar issue, consider checking their work out: <a href="https://github.com/JamesHutchison/pytest-hot-reloading/">https://github.com/JamesHutchison/pytest-hot-reloading/</a></p>
            <p></p>
        </div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2>Side Quest Conclusion</h2>
            <p>Our 15 seconds import time is still there, but now we can focus on improving it properly, with pytest daemon being the stop-gap solution we needed. </p>
            <p>One of our Company Principles is <strong>Progress Over Perfection:</strong></p>
            <blockquote><em>All big things start small. Think long-term and break ideas down so you can start delivering value and learning right away. Strive for an 80/20 approach and compound from there. This is the essence of moving fast with both excellence and surprise &amp; delight.</em></blockquote>
            <p>Building the first iteration of pytest daemon was about a week of work and it was a fun challenge that supported our goal of helping our engineers move faster! My initial version was published as an opt-in version our engineers could use, and after incorporating their feedback, we started migrating most of our local dev flows to use it. </p>
            <p>I keep iterating on it every few weeks to see what small improvements would make our engineers move faster or resolve any issues preventing certain teammates from leveraging it).</p>
            <p>Speaking of moving faster, I used ChatGPT4 and GitHub Copilot to speed up my progress. Specifically:</p>
            <ul role="list">
                <li>Building my first VSCode extension was straightforward.</li>
                <li>Asking ChatGPT to write a script to analyze all the imports in our code generated a relatively good starting point.</li>
            </ul>
            <p>If improving developer environments work excites you <a href="https://discord.com/careers">check out our careers page</a>. At the time of publishing, we’re actively hiring for our developer environments team!</p>
            <p></p>
        </div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>