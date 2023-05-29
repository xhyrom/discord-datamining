<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h5>Updated November 19, 2021</h5>
            <p>At Discord, the Data Platform team empowers the organization to analyze, understand, and leverage data to help Discord create space for everyone to find belonging. Discord uses data for a number of reasons: to identify bad actors and harmful communities; to develop insights that inform critical product and strategy decisions; and to train and assess the effectiveness of machine learning models (check out our <a href="https://discord.com/privacy">Privacy Policy</a> for more information on what information we collect and how we use it!). Without regular and rigorous analysis of how our product is used, our ability to make informed decisions about company strategy at scale would be severely lacking.<br></p>
            <p>Raw data comes to us as production datastore exports and product telemetry data (over 15 trillion records so far and billions generated daily). When Discord was a smaller company and data use cases were simpler, it was somewhat tenable, if not ideal, to manually compute useful datasets as needed. Today, we process <em>petabytes</em> of data with 30,000 vCPUs in the cloud. To be useful, the raw data must be cleaned, privatized according to our data governance policies, and then transformed into a complex schema of thousands of precomputed tables in our 30+ petabyte data warehouse (we use Google <a href="https://cloud.google.com/bigquery">BigQuery</a>).</p>
            <p>As of this writing, the part of the Data Platform team responsible for ingesting raw data and making it accessible consists of eight people and we were even fewer in number during the history described below. Given the team’s size relative to the rest of Discord, it was important to build a system that was self-serve and as automated as possible. <strong>This is the story of how we turned petabytes of raw data into a structured data warehouse and the system we built to maintain it, internally referred to as <em>Derived</em>.</strong></p>
            <p><strong>‍</strong><br></p>
            <h2>Requirements and Approach</h2>
            <p>What we needed was a system for maintaining a complex Directed Acyclic Graph (DAG) of precomputed data—in our case, this meant a DAG of <strong>derived tables</strong> in our BigQuery data warehouse:<br></p>
            <ol role="list">
                <li>A <strong>derived table</strong> essentially represents a data transformation that may have predecessor tables in the DAG as input dependencies: in other words, a derived table definition may be thought of as a SQL SELECT statement that references raw data or other derived tables.  </li>
                <li>Assuming the DAG flows top to bottom, one might imagine that at the top of the DAG would be the raw data sources and lookup tables; in the middle, a core set of reusable “golden” core data tables (e.g. normalized daily sign-ups across platforms); and towards the bottom of the DAG, tables that are intended to be consumed directly in analysis, BI tools or machine learning models.</li>
                <li>The DAG may contain thousands of tables, so it needs to scale.</li>
            </ol>
            <figure style="max-width:1505pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61959330fb297575acdb9a82_Derived_Blog_Post_-_1_-_artistic_1.png" loading="lazy" alt=""></div>
            </figure>
            <p><strong>Though the system would be broken down into a series of deliverable milestones, we wanted the eventual system to meet the following requirements:<br></strong></p>
            <ol role="list">
                <li>Table updates should run as soon as new data is available (but no sooner!)</li>
                <li>Maintain an audit trail of mutations to each table.</li>
                <li>Include primitives for powering data lineage and a data catalog.</li>
                <li>Intuitive, self-serve table modifications  for stakeholder teams like engineering, data science, and machine learning.</li>
                <li>Allow for integration with  data access controls and support for  scalable privacy policy enforcement.</li>
                <li>Ability to automatically export derived data to production datastores for use in Discord’s user-facing product.</li>
                <li>Simple and easy to operate in the context of Discord’s infrastructure environment.<strong><br></strong></li>
            </ol>
            <p>While existing solutions such as <a href="https://blog.getdbt.com/what-exactly-is-dbt/">dbt</a>, <a href="https://airflow.apache.org/">Airflow</a>, and <a href="https://looker.com/">Looker</a> solve for some of the above, we ultimately decided that we wanted a more custom solution that would integrate nicely with our existing systems  and give us the flexibility to extend to use cases beyond analytics.<strong><br></strong></p>
            <p>We were already using Airflow to schedule batch jobs and to process simpler datasets, but we found the following limitations:<strong><br></strong></p>
            <ol role="list">
                <li>Writing jobs was complicated and required people to have a deep understanding of Python, SQL, and Airflow. This violated our requirement that DAG modifications should be self-serve.</li>
                <li>Scheduling queries that depended on each other on different schedules was difficult to reason about (e.g., knowing when to update a table that is scheduled weekly and reads from a table that is updated monthly).</li>
                <li>Knowing exactly where to insert your table build into the dependency graph and understanding its impact on other tables was not straightforward (e.g., knowing when tables you own should be backfilled because predecessor datasets owned by another team were incomplete, introduced corrupt data, or had data changes).</li>
                <li>Writing logic for incremental data builds that append or merge data into an existing table was mistake-prone and copypasta, especially when accounting for all the potential rebuild and backfill conditions.<br></li>
            </ol>
            <p><strong>Taking into account our requirements, observing existing pain points, and drawing some inspiration from existing solutions, we made the following design choices:<br></strong></p>
            <ol role="list">
                <li>People should only need to know SQL to define derived tables.</li>
                <li>People should not need to know about the specific structure of the DAG: the system will infer the DAG from within the SQL.</li>
                <li>Everything should be in git for a complete history of changes and for easy lookup of current production configurations.</li>
                <li>The system had to integrate data processing with our existing data privatization systems and data governance policies. We take the privacy of our users seriously, and it was paramount that whatever we built enforced our strict privacy controls.</li>
                <li>Metadata history and current state of each table should be stored in an accessible format to build monitoring, lineage, and performance tooling.</li>
                <li>Data repair operations (backfills) should be easy and ensure that data is consistent across the entire data warehouse.</li>
            </ol>
            <h2>Version One: The Minimum Viable Product</h2>
            <p>For the initial deliverable, the highest priority goals were to get data transformations into git, ensure that data was consistent across the warehouse, and simplify data operations. We built the following:<br></p>
            <ul role="list">
                <li>Derived tables would be defined by SQL using files in Jinja templating format. Each table would be configured in its own file and stored in git.</li>
                <li>The framework would build the DAG of dependencies based on the table configurations and build out the data warehouse, leveraging Airflow for scheduling of jobs, visualization, and monitoring.</li>
                <li>We would build a basic command-line tool to accurately rebuild and backfill tables.</li>
                <li>In order to manage the scope of the MVP, we decided to group tables by update schedule (eg, hourly, daily, weekly, or monthly) to avoid complex dependency resolution logic. The tradeoff was that we couldn’t easily intermix tables with different update schedules.<br></li>
            </ul>
            <p>Table build behavior specified using one of three different strategies would instruct how tables are built, incremented, and backfilled:<br></p>
            <ul role="list">
                <li><strong>Replace:</strong> replace the entire table on a regular schedule. </li>
                <li><strong>Append:</strong> add data incrementally to a table on a regular schedule.<strong>‍</strong></li>
                <li><strong>Merge:</strong> merge incoming data with existing data based on configured criteria. This strategy is primarily used with tables supporting cohort analysis where we want to segment on user attributes such as “the first time a user used voice chat ” or “the most recent time that a user joined a Discord community server.”<br></li>
            </ul>
            <p>Thus, Derived was born and fit into our architecture as illustrated below:</p>
            <figure style="max-width:3300pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/61983f47a722ab5b1643274e_Derived_Blog_Post_-_2_-_artistic_12.png" loading="lazy" alt=""></div>
            </figure>
            <h2>Version Two: Ergonomics</h2>
            <p>The MVP proved the technology of constructing the DAG, building tables, and managing the data warehouse, but people internally struggled to create new Derived Tables without the help of Data Engineers because the process was still too complicated and obscure. So for the next iteration, we focused on creating a simple user interface for people to easily create new tables and write documentation right alongside their code.<br></p>
            <p>Features:</p>
            <ul role="list">
                <li>Introduced YAML format so that people could focus on writing SQL and only need to learn a few properties for how frequently the table should run and the window (time range) of data it should run on.</li>
                <li>Enabled dependencies between tables with any combination of schedule, window, and strategy so that the people would not need to know about the specific structure of the DAG and its dependencies.</li>
                <li>One limitation that we accepted for this iteration was that table metadata was still stored in Airflow, and it would require us to pause the airflow dag to do repair operations. Additionally, syncing table state with airflow metadata after rebuilds was complex.</li>
            </ul>
            <p>When the table definition is merged into the main branch, Derived will create the table and initially populate it with all existing data. For every subsequent run, it will upsert one hour of data into the existing table - a MERGE operation in BigQuery terms. Also, as you can see below, the documentation for table and column definitions lives with the table definition, minimizing the possibility of drift between table functionality and documentation.<br></p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/18d1b39cd1b13c5dbb61caee3eda7726.js"></script>
            </div>
            <p>Another benefit of adopting this standardized interface is that it provides an abstraction layer for us to rapidly iterate on the systems underlying the configuration without impacting teams.</p>
            <h2>Version Three: Automation</h2>
            <p>Version Two successfully unlocked our Data Science teams to create tables without assistance, and they created hundreds of tables within the first year. With this success emerged a new set of problems:<br></p>
            <ol role="list">
                <li><strong>Creating new tables was easy but updating tables required manual steps by Data Engineers:</strong> DAG builds/rebuilds were not automated and needed to be triggered by engineers. While these maintenance tasks were relatively simple, they took time and occurred more frequently as adoption increased.</li>
                <li><strong>A single table with a SQL bug would block all tables from progressing and bugs became more frequent as adoption increased:</strong> Test suites did not comprehensively test all combinations of generated SQL nor the dependencies between tables. The worst part was that bugs frequently would not manifest until running in production due to incorrect assumptions about the data, and it would frequently require Data Engineers to backfill data and repair tables.</li>
                <li><strong>It was difficult to use Derived insights to power application features</strong> because the data warehouse (BigQuery) is not optimized for the milliseconds latency requirements of user-facing services.<br></li>
            </ol>
            <p>Version Three therefore focused on improving the reliability of deployments and automating the rebuilding/repairing of Derived tables. To accomplish this, we focused on ergonomics, testing, and general automation:<br></p>
            <h3><strong>Testing:</strong></h3>
            <p>We wanted people to be able to test while developing new tables, so we implemented the following:</p>
            <ul role="list">
                <li>For local development, people are able to use a command-line interface (CLI) to load up the real table configurations and validate dependencies across the entire DAG. </li>
                <li>From the CLI, people can also create test versions of their tables on shadow production data to verify table output. </li>
                <li>Once a pull request is created, continuous integration (CI) deploys all new tables to a shadow production environment so that people are able to validate their changes again with real data before merging the pull request.<br></li>
            </ul>
            <h3><strong>Automation:</strong></h3>
            <p>In Version Two of Derived, the table’s metadata was tracked in Airflow, resulting in a number of manual steps during data maintenance operations (e.g. a backfill required pausing the DAG, running the operation, and then syncing the actual state of the table with Airflow metadata).<br></p>
            <p>To automate data operations we moved table state tracking out of Airflow and into a metadata log so that Derived could independently decide when to repair, rebuild, and add data to tables. </p>
            <p>More detailed state tracking at the table level also unlocks parallel computations so that a parent process doesn’t block while sequencing and scheduling 900+ tables, all tables can run concurrently and as frequently as desired to keep derived insights consistent across the data warehouse and up-to-date with data sources. Each table updater is deployed as its own Kubernetes Pod:  when a pod starts up, it runs through the following steps:<br></p>
            <figure style="max-width:1705pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/619593436eb329754b290b1e_Derived_Blog_Post_-_3-_artistic_8.png" loading="lazy" alt=""></div>
            </figure>
            <p>The metadata log is available in BigQuery and enables detailed monitoring, performance analysis, and data lineage. It  answers monitoring questions like <em>When was the table last updated? How recent is the data in the table</em>? For performance analysis, we join the metadata log to the BigQuery information_schema for query execution details; and to report on metrics for each table. Data lineage can be obtained from the metadata log by tracking predecessor dependencies when tables are updated, so the entire lineage can be re-constructed by traversing the metadata log.<br></p>
            <h3><strong>Powering Discord Features:</strong></h3>
            <p>Up until now, Derived operated only on BigQuery datasets (a data warehouse designed for big data processing) that frequently has query response times greater than one second. In order to power application features the response times needed to be much faster, especially for machine learning features where the application flow is: receive a user request, query multiple Derived datasets to create a feature set, make a prediction and respond to the user within one second. For this we added a new configuration option on Derived to automatically export from BigQuery to <a href="https://www.scylladb.com/">Scylla</a> so that the Derived dataset would be available in a database designed for high-performance queries in online systems.</p>
            <h2>Conclusion<br></h2>
            <p>We’ve been running Version Three in production for over a year now and have accomplished the original seven goals we set out to achieve...</p>
            <p> ✔️ Table updates should run as soon as new data is available (but no sooner!)<br> ✔️ Maintains an audit trail of mutations to derived datasets.<br> ✔️ Includes primitives for powering data lineage and data catalog tooling.<br> ✔️ Modifications to the DAG should be self-serve and intuitive for stakeholder teams like engineering, data science, and machine learning.<br> ✔️ Aware of data access controls and provides scalable data governance policy enforcement.<br> ✔️ Able to automatically export derived data to production datastores for use in Discord’s user-facing product.<br> ✔️ Simple and easy to operate in the context of Discord’s environment.<br></p>
            <p>... but the journey is far from over, there are now thousands of tables in production and the team often receives feedback and suggestions from engaged people internally who are using Derived to build out very complex data sets. The system processes petabytes of data daily from trillions of data points and we continue to  improve the performance and feature set of Derived. We are working on a Version Four now -- we’re very creative with our project names around here --  and look forward to sharing further insights on the iterations to come.</p>
            <p>Whew! That was a lot of information and quite the adventure for the team! If working with massive data sets strikes a chord with you, we invite you to check out our <a href="https://discord.com/jobs?team=data">jobs</a> page and apply!<br></p>
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