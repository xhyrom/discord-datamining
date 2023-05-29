<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h5>The following blog post was created thanks to the invaluable collaborative efforts by Risa Pesavento, Ravi Mandliya, and Imran Akbar — thanks so much for all your work!<br>‍</h5>
            <p>Notifications: when done right, they help you stay connected to the communities and friends they feel close to. Notifications are delightful when sent at the right time, at the right place, and tell you about the right stuff. Doing it “right” can be extremely difficult and learning from user feedback offers a glimmer of hope to tackle the challenge. That’s why machine learning is crucial to building a delightful notification experience.</p>
            <p>We’ll start with a conceptual outline of a notification system and then keep adding layers to reach the industrial state of the art. We’ll follow the start-simple-deliver-value approach of<a href="https://recsysml.substack.com/p/how-to-build-ml-first-products"> how to build ml-first products</a> in the following blog post.</p>
            <div class="w-embed">
                <hr class="hr-style">
            </div>
            <p>‍<br></p>
            <h2><strong>Inputs:</strong></h2>
            <p><strong>1. Direct messages to individuals or groups:</strong> There is an implicit expectation from the user to be getting a notification for content in this channel, for example, direct messages to a user on a messaging platform like Discord. From the recipient’s perspective, these could be:</p>
            <p>a. time sensitive / urgent</p>
            <p>b. important but not urgent, at least not urgent enough to notify them.</p>
            <p>c. promotional / spam / scam direct messages</p>
            <p><strong>2. Mentions / tags in content:</strong> Depending on the volume and frequency for the recipient (think a million people tagging Tom Cruise in tweets after Top Gun), we might want to optimize the channel for how much we believe a particular&nbsp; notification interrupts the user.</p>
            <p><strong>3.</strong> <strong>Posts of followed users / topics (connected content)</strong></p>
            <p><strong>4. All posts (unconnected content): </strong>For example, all messages in a Discord server.</p>
            <p><strong>5. Creator / Platform driven: </strong>For example, promotions by creators/community hosts or recommendations by the platform for Groups to join, Users to add-friend, follow, and so on.<br><br></p>
            <h2><strong>Channels:</strong></h2>
            <p>These are surfaces where the user could be notified such as their email inbox, a push notification to their mobile device, or their notifications hub within an app. We have chosen not to include channels such as newsfeeds or homefeeds because those are surfaces a user visits to see content, i.e. action initiated by the user. The channels are avenues by which the platform reaches out to the user.</p>
            <p><strong>1. New email notification</strong> - typically shows up in email and usually filtered out into the “promotions” tab by Gmail’s smartness.</p>
            <p><strong>2. New push notification </strong>- typically shows up on the user’s phone if they have notifications enabled for this app.</p>
            <p><strong>3. New in-app notification for logged in users </strong>- For example, an in-game notification in Roblox, or an in-app notification that a “friend” has started live streaming on a social network.</p>
            <p><strong>4. New notification in the app’s notif-tab / inbox</strong> - This might or might not be accompanied by badging of the app icon. Usually this is a strict superset of (2) push notifs.</p>
            <p><strong>5. Update an existing notification in the app’s notif-tab</strong> - For example if you post something on Instagram and you get 250 likes on it, you probably don’t want to see 250 different items in your notification tab about it. You probably want to see a single item there showing a few users who have liked and the total number of likes.<br><br></p>
            <h2>Basic Framework</h2>
            <p>At a high level we have inputs, i.e. sources of notifications, channels, and ways of getting in touch with users. To optimize the experience, we need to add a decision maker in the middle that decides for each notification whether it should be dropped or sent ahead and if sending, to which channel.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f3111c2613d8bd469a_0HBcAB-C0_ZLZAekJ7qwu1ee7NpOtqy0KS3ssNs3uB8zMlMXetX2rcCSC8wSxCTvEhAvi3tmtXis_EUsrnZRI9tfRr-nv46-n9mooC0Wp0bwnnPAGET3pI4liDHcYz2o2W_uqzsntS9I2T0cZmvaqWQ.png" alt="A flowchart starting from “Inputs,” going to “Smart Notification Service SMS.” From here, it branches off to either “Don’t Send Notification,” or “Send” to “Channels.” &nbsp;"></div>
                <figcaption>High level system design: Need a smart notification system (SNS) between inputs (processes generating notifications) and outputs (channels to deliver notifications, i.e. ways of getting in touch with the user).</figcaption>
            </figure>
            <p>There is some nuance missing in the above schematic.</p>
            <ul role="list">
                <li>To learn and optimize, we need to log the user’s interaction with the notification which is typically delayed.</li>
            </ul>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f2932acd06c280040d_JhQDlMoODgtM4ZNBS-h4BmFzO9QFs1hFbyiZv5aLDxGwSbx1P5XlLOYVIvJNxN_1udGOmW_hWJlRVgoB1y9Hq8_BA5RCn2scDo2k6UxfTYvsDN7-GpAzSR4UUQJFra5dw0Prb__yfuRuHY5jJLFpIbs.png" alt="Another flowchart starting from “Inputs,” going to “SNS.” Unlike the first flowchart, this one branches off into three directions. The first lane goes to “either sync / aysnc” to “Channels,” then “delayed reaction from user” to “Interaction Logs.” The second pathway from “SNS” simply goes to “Don’t send notification.” The last pathway from “SNS” goes to “used to train model,” to the “Interaction Logs” that the first pathway went to.&nbsp;&nbsp;"></div>
                <figcaption>Fig 2: Need to close the loop and provide training data for SNS to improve.</figcaption>
            </figure>
            <p>However, to keep the images clean, we will extend Fig 1 going forward, just bearing in mind the implicit detail of Fig 2.</p>
            <h2>Need for Smart Channels</h2>
            <p>Channels may be synchronous or asynchronous. Asynchronous channels operate at their own cadence. For example, emails might be batched and sent once a day to the user. As mentioned in “<strong>Update an existing notification</strong>”, i.e. Channel # 5 above, not all channels are idempotent. Some, like the notification tab, might want to optimize their own product experience.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f2fa48a02374a97328_Y-BzRrmxM_t_JMo10jq68_wVrxaaYuU9bH4tBCgVis0gwezKEaPwLT2PHFaH-2nopam6BAgKt9Gk2KHgDODSd7_oZ3SxOBmW4WqeZWaWvWIYnNhGbhw4tQq0tml-_0s8PAYlhnr13Cjo2ZBnLq-ZANA.png" alt="A third flowchart starting from “Inputs,” going to “SNS.” SNS branches into three pathways. The first pathway goes to “Don’t send notification,” then ends there. The second pathway goes to “Simple Channels,” and also ends there.” The final pathway goes into “Smart Channels Data,” then connects via “Used Async In” to “Smart Channels.”&nbsp;"></div>
                <figcaption>For simple channels, the notifications are delivered to a service and are on their way to the user. For smart channels, the notification data is sent to a storage area or queue for the channel to consume and optimize.</figcaption>
            </figure>
            <h2>Some Notifications May Have a Longer Life?</h2>
            <p>Some items might be relevant for notifications like email and push notifications somewhat asynchronously and later than when the content was created. Hence even if items are not sent immediately, they should be reconsidered.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f22ee92bc92fd10d0f_akhZC14mfSha-j2jv3xg9OtghXUn1KO0cy0yNMCBKmDLqcEw7MxjiKfRZ6AAGY4UEaRZ0wbUzr4XfQaikX2gWnKU5S61qlHueC8hz7-Ee9SU9ubbcI8WQW19cBJgbbXZHvS52Hmbaq0umFo4lXzdBew.png" alt="A fourth flowchart that is laid out the same way as the third flowchart. However, this one has an addition under “SNS.” Below “SNS” is a section labeled “reconsider in some time,” where items may wait and be considered later on to go down the three pathways."></div>
                <figcaption>Fig 4: Some notifications like posts for email digest and push notifications might be relevant at a later time than when they were posted. Hence they should be considered multiple times.</figcaption>
            </figure>
            <p><strong>Problem:</strong> <strong>Too many items to reconsider!</strong></p>
            <p>This process is having to independently optimize for each user. Let’s say there are millions of users and messages on the platform. Each message can potentially be sent as a notification. For example, on other social platforms, these could be posts from users who follow high volume hashtags. In such cases it seems the “<strong>reconsider in some time</strong>” might become a huge list of messages to consider for each user.</p>
            <p><strong>Proposed solution: Smart Inputs</strong></p>
            <p>To make the SNS lighter, what if we made “Smart Inputs” that are capable of looking at older content to determine what to send, whom to send and when to send? This way we can remove the reconsider loop in SNS.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f26c80e07482ea920d_g5NFNMeEqAxOF_72ZH-ShTY8uPG--dxfmLYGy5QjdOpoTVMchzkaWYQGIXw7jxC9seuhpfejJG7vKB_gg8LDFYOkct_yJ1h4mvQoeiAee58Vw2JcQ6pV46IXwEspd9sGLJ9rHwzfbOKnOhAUj0PMBSk.png" alt="A flowchart that has two different starting points: “Simple Inputs” and “Smart Inputs.” Both flow into “SNS,” but “Smart Inputs” may access the “Sent Already Log” before moving to “SNS.” From “SNS”, the chart flows similarly to the last flowchart, leading to either “Don’t sent notification,” “simple channels,” or “Smart Channels Data,” which is used asynchronously in “Smart Channels.” Now, “SNS” may also record its actions in the “Sent Already Log,” which the beginning “Simple Inputs” may see.&nbsp;"></div>
                <figcaption>Fig 5: Smart Inputs are notification generators that run periodically. They look at what can be sent and what has already been sent to users to determine (a) what to send (b) whom to send (c) when to send.</figcaption>
            </figure>
            <h2>Real Example - Notif Stack of a Social Network</h2>
            <p>We will put together what we have talked about so far into an actual example, say the notification stack of a consumer internet company like Discord.</p>
            <p>Examples of “simple inputs”: Creator went live and Direct message</p>
            <p>Examples of “smart inputs”: Email digest, Push notification of notable posts (a.k.a. Inorganic push notifs)</p>
            <p>Example of “smart channel”: Notification Inbox / Tab on the app.</p>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f36c80e05c66ea92f2_AQ2l2Jc28PcZqaNosDj68pB1juoThC9spwWNeMszwaosCElaV8PzvdEslRXHwRBG_TDUaimPArFaG6mJu5DJ02fDtcWJ5ziNF5RtLSNWrsQ1l9URcl51oFq5YiguXbL4AsuRPKzlCB2o0F4nCI6J8RQ.png" alt="A flowchart with four starting points. It is very similar to the previous one, with the only changes being at the beginning, there are now four starting branches: “Creator went live,” “Direct Message,” “Email Digest,” and “Inorganic Push Notifications.” All four flow into “SNS” and continue the same path as the previous flowchart, with “Inorganic Notifications” and “Email Digest” being able to access the “Sent already log.”&nbsp;"></div>
                <figcaption>Fig 6: Industrial state of the art notification stack of a social network service</figcaption>
            </figure>
            <h2><strong><br>Design Choices</strong></h2>
            <h3><strong>Separating ML service from a platform service</strong></h3>
            <figure class="w-richtext-figure-type-image w-richtext-align-fullwidth" style="max-width:1456pxpx">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/62e833f3439105255a26fc78_y4nnRSRNQv-oI92PKjcj-PhLyb9DnZIkLtU4sKQhKEHoqo2CqICaechxj1lLh9Efa2QKZPr6708oFcRii3B8LRPSrAZ_FNFagCPRd1Zg6pjTqhMxG0ith_JReoJNbO5bc9V4FdFktHzfJIBMQe5m3k0.png" alt="One final flowchart. This one has one starting point named “Inputs,” which flows into a new point called “Notifications platform.” From the “Notifications platform,” there are three pathways: it can go back and forward between “ML Smart Notification Service,” it can “send” to “Channels,” or it can opt to not send a notification at all."></div>
                <figcaption>Fig 7: To expand upon Fig 1, SNS might internally have two components: a <strong>Notifs Platform</strong> that does the actual intake and sending of notifications to channels and an ML-driven <strong>Smart Notification Service</strong> which is called only by Notifs Platform. This internal ML module tells Notifs Platform what to do with each notification. This separation of concerns might be a more scalable design.</figcaption>
            </figure>
            <h2><strong>Conclusion</strong></h2>
            <p>Together, we saw how the notification system design needs to change to incorporate machine learning. We also learned how to componentize machine learning into smart inputs and smart channels in addition to the main Smart Notification System, so each of them can be developed in parallel by different ML teams.</p>
            <p>Does this sound interesting to you? We’re always hiring, so check out our <a href="https://discord.com/jobs">jobs page</a>!</p>
            <p>‍</p>
            <h6>We want to thank the following people for their invaluable contributions to this ideation process: Sri Vasamsetti, Catherine Tan, Alec Lee, Athena Yao, Mark Wilhelm, Wenxin Peng, Aaron Bartholomew, Ian Wesley-Smith, Yen Pai, Ki Kim, and Shahen Mirzoyan.</h6>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
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