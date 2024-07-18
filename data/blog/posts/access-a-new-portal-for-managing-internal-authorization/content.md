<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Appropriately managing complex access permissions is a crucial part of mature security programs at companies like Discord. Access controls that are easy to understand and manage make our lives easier, while poorly configured access controls often lead to significant harm.</p>
            <p><a href="https://www.verizon.com/business/resources/Tcdc/reports/2023-data-breach-investigations-report-dbir.pdf">74% of all breaches involve the human element, with privilege misuse and stolen user credentials being two of the primary threats</a>. This indicates that access control is crucial to the security of businesses, especially when it comes to protecting proprietary information and sensitive systems. That said, plans and policies designed to manage permissions tend to cause headaches for end-users and leave the decisions about “who can access what” in the hands of people who don’t have much information about the resources – often IT or Security.&nbsp;</p>
            <p>To address this within Discord, we built a new internal portal for staff to manage their permissions. We created it with the goals of security, transparency, and ease of use in mind with the intention of eventually making the tool publicly available and free to use.</p>
            <p>We’ve been hard at work to make our vision a reality and are happy to announce that Access has now been open-sourced on GitHub for anyone to utilize. In this article, we’ll discuss our path to creating Access and highlight its biggest features.</p>
            <div class="w-embed">
                <div class="btn-wrapper"><a data-track="https://github.com/discord/access" href="https://github.com/discord/access" class="btn-blog w-button" target="_blank">View the Access GitHub Repo</a></div>
            </div>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Our goals<br></strong></h2>
            <p>At Discord, we use Okta as our identity provider for employee single sign-on. As we grew, so did our desire to further customize access controls for our employees, leading us to want to either build or buy an additional access control tool. To start, we came up with a list of standards we wanted this tool to meet:</p>
            <ul role="list">
                <li><strong>Above all else, the tool needed to be security-focused and enforce the principle of least-privilege</strong>. The product we ended up using should be designed to decrease risks associated with long-standing, elevated, and sometimes no-longer-needed permissions to protect our systems and customer data.&nbsp;</li>
            </ul>
            <ul role="list">
                <li><strong>We wanted an intuitive user experience that didn’t require staff to have deep knowledge of the access control tool or the systems being managed</strong>. This would help ensure the tool’s adoption within the company.&nbsp;<strong>‍</strong></li>
                <li><strong>The tool needed to be “self-serve” and allow delegation within our internal policies</strong>. Having IT or Security teams exclusively manage permissions would lead to an immense operational burden on one particular organization and slow down everyone in the company. In addition, centralizing all authorization decisions with a few highly privileged teams would quickly devolve into a problem known as the “<a href="https://en.wikipedia.org/wiki/Confused_deputy_problem">confused deputy</a>” — team members likely would not have enough context to make informed decisions about access and end up ‘rubber stamping’ requests. By delegating access approvals to application owners and people leads with the most understanding about the application or role and permissions being requested, we could reduce risk while distributing the load.&nbsp;</li>
            </ul>
            <ul role="list">
                <li><strong>Finally, we wanted a system that was transparent and discoverable</strong>. Users should be able to see what access they or their teammates have, what resources are controlled by the system, what permissions they had in the past but have since expired, and they should be able to request access to resources freely. This would empower employees to troubleshoot their own permissions and solve issues through access requests.</li>
            </ul>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Why build a new tool?<br></strong></h2>
            <p>After defining our needs in an access control system, we started by exploring what was already available in the landscape, including open source systems and those available for purchase.&nbsp;</p>
            <p>When we looked at what was available, we asked ourselves: What Okta-compatible access control systems currently exist? Do the feature sets and user experiences on offer align with what we have in mind for Discord? If this sort of system doesn’t exist or if the existing systems do not match our expectations, is it worth the investment to build our own?</p>
            <p>Although we did identify some enterprise and open-source options, we found that they either were not compatible with Okta or didn’t align with our goals for access control at Discord.&nbsp;</p>
            <p>This led us to decide that creating our own solution was worth the operational cost of developing and maintaining it ourselves to increase business velocity while decreasing risk. Plus, how often do infrastructure security engineers get the chance to write <em>this much</em> front-end code? <strong>As a result, we built Access: an easy-to-use access control tool based on complex security and compliance principles.&nbsp;</strong></p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>What is role-based access control?<br></strong></h2>
            <p>The core security mechanism underlying Access is <a href="https://en.wikipedia.org/wiki/Role-based_access_control">role-based access control</a> (RBAC).&nbsp;</p>
            <p>As the name suggests, the most important concept in RBAC is <em>roles</em>. Roles are groups of users who share similar responsibilities, with the idea that those users will need similar permissions for various resources. Importantly, roles do not necessarily have parity with teams.&nbsp;</p>
            <p>Within a team, members may have a range of job functions (think managers vs. their reports) that may necessitate access to different services and data. Roles can also be used to temporarily grant access to systems, like in the case of cross-functional projects and on-call rotations. Practically, this method of access control means that individuals may have one or many roles assigned to them, sort of like a big Discord community!&nbsp;</p>
            <figure style="max-width:1600px" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/66033f70a84c36a88a4b1692_V5h4Nm-lC9eKhQ4hGShV-WSFnuW1sFxTbxyYuzWBTQn0uc-mMXsirVsBgKqGTVWB-XQuAJ092fF1yvbM0AghIO3UQqo6S4Bo-rphAyJbp9wr82UV4s56DHolW5aQ9CMru-uRa3fgI2D8A12anGEqBqE.png" loading="lazy" alt="The image has three columns. The first contains a team made up of a manager, a software engineer, and a data scientist. The second column contains a list of different job functions that could be set as roles: All Employees, Manager, Engineering, Data Science. The third column contains a list of resources like email, a manager Google group, GitHub, and a ML database. There are arrows between the columns showing how team members with different jobs may have many roles from the job function column which then map to permissions associated with the different resources."></div>
            </figure>
            <p>Roles make permissions much easier to manage. Rather than having to grant each employee access to each service individually, RBAC allows you to grant a role access to many resources, which then grants all of the members in the role access to the same resources by default. They also increase transparency by making it clear <em>why</em> a specific person has access to a resource, which aids in discovery and auditing.</p>
            <p>After setting up roles, onboarding and team transfers become simple — it’s just a matter of assigning a new role to the employee or removing their old role.&nbsp;</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Other Concepts in Access<br></strong></h2>
            <p>While designing our version of RBAC, we decided to include a few entities other than roles.&nbsp;</p>
            <p>“Users” are employees of the company. A User may be a member or owner of a group. There are three types of groups in Access with different features: ‘vanilla’ standalone groups, app groups, and roles, all of which map to Okta groups.&nbsp;</p>
            <p>A role may be a member, owner, or both of app groups and standalone groups. Apps are resources, such as third-party SaaS applications (GitHub, for example), or first-party services, like an internal administrator dashboard. Any app that is compatible with Okta can be an app within Access.&nbsp;</p>
            <p>Lastly, app groups can be tied to certain permissions associated with an app. For instance, app groups may be used to manage a GitHub team or Google Workspace group.&nbsp;</p>
            <figure style="padding-bottom:75%" class="w-richtext-align-fullwidth w-richtext-figure-type-video">
                <div><iframe allowfullscreen="true" frameborder="0" scrolling="no" src="https://www.youtube.com/embed/G2yqmkD0zUA" title="Access Demo 1"></iframe></div>
            </figure>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>After cementing our security goals and strategy (and after weeks of development time and dozens of cups of coffee), we built Access! Access has a rich feature set, with a few notable highlights we want to share here:</p>
            <ul role="list">
                <li><strong>Delegated control:</strong> Each group or app has a set of owners who control membership and access related to that resource. This distributes resource management responsibilities and by following clear guidelines helps to ensure that permissions are managed by the people who have the most context, reducing the possibility of confused deputies and speeding up resolution times.&nbsp;</li>
            </ul>
            <ul role="list">
                <li><strong>Time-bounded access:</strong> When a user is added as a member or owner of a group, we included an option to set their access for a predetermined amount of time, after which point the access will be automatically removed. This reduces risks associated with employees accumulating permissions that they only need for a short time and cleans up unused permissions for those who have changed responsibilities.</li>
            </ul>
            <ul role="list">
                <li><strong>Access requests:</strong> Users may request ownership of or membership to any group in Access, which is then reviewed and decided upon by its appropriate owners. Since all users can see the permissions anyone in the system has and all of the groups available, users can more easily discover the groups they need to join to gain specific permissions. Delegating these reviews to those who have the best understanding of what they are leads to better controls over which permissions are granted.&nbsp;</li>
            </ul>
            <ul role="list">
                <li><strong>Audit views:</strong> Every user, group, and role in Access has a page viewable by all employees that shows complete membership and ownership history. This allows users to troubleshoot their access if they think they have lost permissions, increases transparency, and creates an easily accessible record of past access grants.<strong>‍</strong> </li>
            </ul>
            <figure style="max-width:1600pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/66033fc5d82b867596f925ab_YN6fT5s4pQlxlJ2LSoJUO5pcTmED7EWrAFrvAQDkQFxDLuP6Dibv_OhZDUy2cUsXZMoWzrGkBkYNNSJDrM1_p1ogGlEF7FLzm18_N33p0RrLTvcs0HnFxr2V0n2Kfpr3xyoiuqNlCfkyFrnqW63NG5w.png" loading="lazy" alt="The image is a screenshot of an Access user audit page. It displays the membership history for Locke, including which groups he has been in, whether he was a member or owner, and the duration of the access."></div>
            </figure>
            <ul role="list">
                <li><strong>Group and app tagging:</strong> Tags can be created to label groups and, optionally, can be used to enforce a variety of constraints, including membership time limits and whether or not group owners can manage their own membership or ownership. Tags can be applied to apps or groups, allowing system administrators to have tighter controls over sensitive resources. They’re also useful when running access reviews for compliance and for ensuring least-privilege.</li>
            </ul>
            <ul role="list">
                <li><strong>Expiring access pages and bulk renewal:</strong> The Expiring Access UI is separated into two sections: Expiring Groups, which shows users whose access to a role or group is expiring soon, and Expiring Roles, which displays roles that will be losing their access to groups soon. Group owners can bulk-renew access for users while users can view which groups they will be losing access to soon and create an access request if they wish to extend their access individually.</li>
            </ul>
            <figure style="padding-bottom:75%" class="w-richtext-align-fullwidth w-richtext-figure-type-video">
                <div><iframe allowfullscreen="true" frameborder="0" scrolling="no" src="https://www.youtube.com/embed/727uvA49nXA" title="Access Demo 2"></iframe></div>
            </figure>
            <ul role="list">
                <li><strong>Notifications:</strong> A notification system is built into Access using webhooks, allowing it to be integrated with Discord (naturally), email, and many other apps. The system can notify group owners of access requests made to their groups or let users know that they’ll be losing access soon.</li>
            </ul>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Results<br></strong></h2>
            <p>Discord has been using Access for over a year now and we have seen a lot of success.&nbsp;</p>
            <p>Creating Access has allowed us to unify and streamline access control within the company by moving towards a single source of truth for all authorizations. This, in turn, has increased user efficiency since there are fewer tools and systems to learn. Since rolling out Access, we have seen fewer out-of-band requests for permissions in help channels and have gotten feedback from our internal audit team that it has simplified their quarterly access review process. Access has also reduced ‘rubber stamping’, confused deputies, and long-standing permissions, decreasing risk across our services. After test-driving it for a while ourselves and seeing these sorts of positive results, we have decided that it is finally ready to be open-sourced!&nbsp;</p>
            <p>At Discord, we value trust and security. We hope that by making Access available for public use, we can contribute to improving the security landscape outside of our company.&nbsp;</p>
            <p><strong>Access is now live on </strong><a href="https://github.com/discord/access"><strong>GitHub</strong></a><strong>!</strong> The ReadMe has instructions for installing and testing it. If you end up using Access for your organization, please let us know! We’d love to hear about your team’s experience.</p>
            <div class="w-embed">
                <div class="btn-wrapper"><a data-track="https://github.com/discord/access" href="https://github.com/discord/access" class="btn-blog w-button" target="_blank">View the Access GitHub Repo</a></div>
            </div>
        </div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Continuing Work<br></strong></h2>
            <p>Everyone knows that just because your product is released, doesn’t mean it’s done. We plan to continue maintaining Access and adding new features over time.&nbsp;</p>
            <p>As a sneak peek, some of the features we’re considering adding are:</p>
            <ul role="list">
                <li>A Group Lifecycle and User Lifecycle plugin framework for applications that don’t currently handle <a href="https://scim.cloud/">SCIM</a></li>
                <li>Support for configuring Google Groups and GitHub Teams in Okta automatically via Group Lifecycle plugins</li>
                <li>Role access requests, so a role owner can request that their role is added as a member or owner of a group</li>
                <li>A webhook to synchronize group memberships and disable users in real-time from Okta</li>
            </ul>
        </div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>