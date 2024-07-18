<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>At Discord, we take pride in making data-driven decisions to deliver a great experience for users around the world. As our platform and user base have grown over the years, so have the demands on our data orchestration system.&nbsp;</p>
            <p>Until recently, we’ve been using <a href="https://discord.com/blog/how-discord-creates-insights-from-trillions-of-data-points">Derived</a>, an in-house orchestration system that’s provided the foundation for Discord’s data analytics over the last five years. As our data organization grew, it became apparent that both self-service and top-notch observability would be key for our ability to effectively scale as a team.&nbsp;</p>
            <p>To continue delivering seamless service and insightful data analytics, we embraced an ambitious project: <strong>to overhaul our data orchestration infrastructure using modern, open-source tools</strong>.&nbsp;</p>
            <p>Keep reading to learn about how we embarked on this journey, the candid lessons we learned along the way, and how our new system is powering over 2000 dbt tables today.</p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Reflecting on Derived<br></strong></h2>
            <p>Derived was originally engineered in-house to fulfill our requirements when we used to have a relatively smaller user base and a more manageable data volume. It played its part well during our earlier days, but our flexibility and observability requirements have substantially increased over time.&nbsp; Similarly, where we previously relied on software engineers to manage the system, the intent now is to foster greater self-service and maintain a more user-friendly design.</p>
            <p>While Derived was instrumental in providing advanced features and setting a foundation of expectations for data transformation systems at Discord, it missed the mark in offering usability and flexibility. We had outgrown our system, which led us to the next iteration of our data transformation journey.</p>
            <p>If you’d like to learn about Derived and how it worked, <a href="https://discord.com/blog/how-discord-creates-insights-from-trillions-of-data-points">check out a previous blog post written here</a></p>
        </div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Dagster &amp; dbt: a match made in heaven<br></strong></h2>
            <p>There’s been a lot of innovation in the data orchestration space since Airflow, an orchestration platform created by Airbnb, was open-sourced back in 2015.&nbsp;</p>
            <p>Today, a Google search for “open source data orchestration tool” will net you things like Argo, Prefect, Dagster, Kestra, and Mage to name a few. On the modeling side, you’ll find tools like dbt, Coalesce, and SQLMesh. The breadth of functionality around dbt made it a straightforward pick for our data modeling tool. However, our team had to spend a bit of extra time to find the right data orchestrator that would help solve the pain points that both our customers and our team were experiencing with Derived.&nbsp;</p>
            <p>There were a few key criteria we felt were imperative during our search:</p>
            <ol role="list">
                <li>Declarative automation: there was conviction around this being a necessary component of our self-service model. It helped enable the types of flexibility our users were accustomed to in our old system.</li>
                <li>A modern UI that provided a “single pane of glass” for our data engineers and data scientists. In the ideal world, this would allow for total data asset self-service, from observability to operations.</li>
                <li>Reliability and scalability: running orchestration workloads on Kubernetes is tried and true, and we felt strongly that any serious contender needed to work with Kubernetes to be considered.</li>
                <li>Integration with existing tooling: How quickly and easily can our existing Airflow jobs, CI/CD scaffolds and data quality solutions be migrated over without too much disruption?</li>
            </ol>
            <p>Ultimately, our team landed on a combination of <strong>Dagster</strong> and <strong>dbt</strong>.&nbsp;</p>
            <p>While Dagster was a newer kid on the block and was less battle-proven than airflow, it hit the mark on our four criteria above: It provided out-of-the-box support for deployment and execution on<a href="https://docs.dagster.io/_apidocs/libraries/dagster-k8s"> Kubernetes</a>, had built-in support for<a href="https://docs.dagster.io/concepts/assets/asset-auto-execution"> declarative automation</a>, <em>and</em><a href="https://docs.dagster.io/concepts/webserver/ui"> provided a UI</a> that allowed data producers and consumers to quickly understand the state of their data assets. Plus, its<a href="https://docs.dagster.io/integrations/airflow"> airflow integration</a> and Python APIs meant migrating over existing jobs would be less of a burden.&nbsp;</p>
            <p>Although it wasn't part of our initial requirements, we were pleasantly surprised by how straightforward it was to run Dagster locally. Our developers and pilot testers were able to create a mock environment locally that enabled them to get a good sense of how the Dagster API functioned and how our use case would fit into it.&nbsp;</p>
            <p>There is some inherent risk with betting on newer technologies, but Discord is<a href="https://discord.com/blog/how-discord-stores-trillions-of-messages"> no stranger to moving fast</a> and<a href="https://discord.com/blog/why-discord-is-switching-from-go-to-rust"> leveraging the bleeding edge</a>. Dagster’s openness to work with us and build out new functionality to handle our scale gave us the confidence to ultimately move forward and break ground on the new system.</p>
        </div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Breaking ground on our new data transformation system<br></strong></h2>
            <p>Building out our new system was a journey — one that had a healthy balance of both technical challenges and “aha” moments as things “just worked”.&nbsp;</p>
            <p>Thanks to Dagster’s out-of-the-box support for deploying to Kubernetes, we were able to get things running quickly. Integrating dbt with Dagster using<a href="https://docs.dagster.io/concepts/assets/software-defined-assets"> software-defined assets</a> felt natural and quickly became a standard part of our team’s nomenclature: off-the-bat, our team made the crucial decision to utilize dbt mainly for SQL templating, managing data quality tests, configuring asset metadata, and execution of queries. Dagster would be the true “brain” behind the orchestration and would be responsible for things running in the correct order.</p>
            <p>We decided to schedule our entire DAG using Dagster's declarative automation mechanism, triggered by scheduled runs that monitored our raw data layer. The declarative nature of this scheduling allows our data producers to easily create dependencies between wildly varying partition definitions (think “hourly → daily”) without having to implement custom logic.&nbsp;</p>
            <p>Learn more about declarative automation and how it differs from cron-based scheduling<a href="https://dagster.io/blog/declarative-scheduling"> here</a>.</p>
            <p>With these decisions in place, we focused on building out a minimum lovable product to enable our data engineering crew to begin modeling our new data architecture in parallel as soon as possible. This allowed for fast feedback on the new mechanisms we were building into the system, including components such as custom partition mappings, dbt test execution, and custom dbt model configurations.&nbsp;</p>
            <p>It took a couple of tries to get right from both a user interface and functionality perspective, but ultimately we engineered a system that combined the advanced modeling capabilities of dbt with the cutting-edge scheduling and out-of-the-box visibility provided by Dagster.</p>
            <figure style="max-width:1003pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/6690335426b54c7d266614cc_AD_4nXdBaYzrg8FSibu1kVK2-zEQ9ozPQRvedSAhvdYIDHqzZSEpT0siqsycq2REOPjKnXluKxOEu0VAWpgEEdbHdff6tpGdJtzj1pHc2uz3_ImJ-AfzeaA-4rGXDZoz2EFAzAI0IgBq1jgMugxjo0y9OZZ7z0bw.png" loading="lazy" alt="A data lineage diagram illustrating how multiple daily tables are derived from a single hourly source. The central 'staging_hourly_table' feeds into three 'int_daily_table' nodes, each representing a daily aggregation. This structure highlights how higher-frequency (hourly) data can be scheduled with lower-frequency (daily) tables using declarative automation."></div>
                <figcaption>Hourly data maps to daily models with ease, requiring no additional effort from data producers</figcaption>
            </figure>
            <p>We eventually realized that we could leverage Dagster Labs' Hybrid Cloud offering, <a href="https://dagster.io/plus">Dagster+</a>, to enable our small and mighty team to move faster. This decision offloaded a lot of the time we spent on correctly configuring infrastructure and debugging behind-the-scenes issues, letting us focus on what mattered most: data orchestration.&nbsp;</p>
            <p>Plus, features included in Dagster+, such as SSO and branch deployments, gave our new system a final layer of polish that enhanced both our productivity and the overall quality of our data workflows.</p>
        </div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Lessons learned<br></strong></h2>
            <p>While we were getting our new systems established, there were a couple of issues we identified early on that we knew would have to be solved before we could enable the system in production. For one, dbt<a href="https://github.com/dbt-labs/dbt-core/issues/5291"> did not support parallelism well</a>.&nbsp;</p>
            <p>For incremental models, dbt stores data in a temporary table before merging the processed partitions in its production location. This created a race condition when multiple instances of dbt run were initiated for the same model, as dbt would try to delete the temporary table once it was completed. We solved this by adjusting dbt’s logic for storing temporary data, which enabled us to run multiple partitions of the same asset in parallel.&nbsp;</p>
            <p>Second, backfilling assets partition-by-partition did not play well with our data warehouse (BigQuery) and led to extremely lengthy backfill times. We worked closely with the Dagster team to push an<a href="https://github.com/dagster-io/dagster/pull/15474"> open-source commit</a>, which resulted in us being able to configure how many partitions could be backfilled at once for each asset.</p>
            <p>One more challenge we faced stemmed from a constraint that we felt was critical for the high bar of data quality that our data consumers expect: atomicity and data consistency. In essence, the code-version for an asset needed to remain consistent across partitions, even while backfilling. While not supported out of the box, Dagster provides a flexible graphQL interface which, in combination with a series of<a href="https://docs.dagster.io/concepts/partitions-schedules-sensors/sensors"> sensors</a> and<a href="https://docs.dagster.io/concepts/ops-jobs-graphs/jobs"> jobs</a>, enabled us to bring this functionality to life!</p>
        </div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>How users are benefiting from the new system<br></strong></h2>
            <p>Once the core pieces were in place, it didn’t take long for our data teams to benefit from the new tools at their disposal. For one, answering the very simple, yet important, question “Why isn’t my data asset updating?” is now a self-serve, at-a-glance feature:</p>
            <figure style="max-width:520pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/669033b68467f79d18b0989a_AD_4nXcMeXNg4AAf6SRZ0zW3H7mmaAo28BtyYhCGFHECLYECLnUyd-5CGrRShi0lD_pWYmasfvFOiDtOS_RZPNf7zz6kvpfmQnvUjepcZ_z4hlkQWLtP_YGHqnqdUyHl6XBx5QCUiGnVbTNq4lyrmVqpNeuaXwfb.png" loading="lazy" alt="A table titled 'Evaluation metadata' displaying two rows of dependency information. The first row shows 'waiting_on_ancestor_1' corresponding to 'core / dim_users_growth_accounting'. The second row shows 'waiting_on_ancestor_2' corresponding to 'core / dim_users_hfu'. This metadata indicates that an asset's materialization is pending completion of these two ancestor assets in the Dagster pipeline."></div>
                <figcaption>The automation tab indicates exactly why or why not a given asset is being queued up for materialization</figcaption>
            </figure>
            <p>Empowered by Dagster's asset definition pages, asset owners now seamlessly manage the lifecycles of their data assets, from backfilling to incremental updates. This interface provides comprehensive, real-time insights into every activity related to an asset. One asset owner has been quoted as enjoying the UI so much that they feel confident doing things like “launching backfills from my phone.” (We <em>don’t</em> recommend trying this at home)</p>
            <figure style="max-width:1412pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/669033b6f8365ff56558428f_AD_4nXfoznVRlESqgY8sujahZ436AapKE3Id-TnbET7QB5B5kuXF81MKn1VhMsS_XmzZR4B6IpRucPADFV0suVHAnfRR0y7BHRZ42xVNsVmoRXdjkiqimSrC_80llVIIVfijbYJMhimy-1xDR4-1Awt7efPFgIDN.png" loading="lazy" alt="A screenshot of Dagster's data lineage view, showcasing interconnected data assets. The view displays four tables: table_a, table_b, table_c, and table_d, with arrows indicating dependencies. Tables a, b, and c are marked as 'Materialized' with timestamps, while table_d is currently 'Materializing'. The image highlights Dagster's ability to visualize data freshness and dependencies in a data pipeline."></div>
                <figcaption>The lineage view allows anyone to quickly determine table landing times and identify blockages that prevent downstream execution.<br></figcaption>
            </figure>
            <p>Data quality is at the heart of this new system — our engineers can now write point-in-time quality checks that can be tuned to “warn,” or even “block,” downstream runs on failure. This allows us to quickly catch, alert, and fix issues before impacting critical downstream use cases like company dashboards. We alert our table owners by utilizing a notification system called DAN (Data Asset Notifications) that informs users of table failures via a<a href="https://discord.com/developers/docs/intro"> Discord app</a>. (Who uses email nowadays?)</p>
            <p>On the dbt side, we’ve been able to standardize complex metric calculations using<a href="https://docs.getdbt.com/docs/build/jinja-macros#macros"> macros</a>, which has played a key role in removing discrepancies across the business and streamlined the way data practitioners are transforming and consuming data.&nbsp;</p>
            <p>To boost developer productivity, we created an internal suite of custom<a href="https://docs.getdbt.com/reference/dbt-commands"> dbt CLI commands</a> One of these, dubbed <em>autogen-schema,</em> automatically generates the boilerplate dbt YAML files a new model requires, which can often be verbose when creating from scratch.&nbsp;</p>
            <p>We also implemented a robust CI/CD process to prevent disruptive changes across table logic, macros, dbt tests, and more. Our advanced dbt table<a href="https://docs.getdbt.com/reference/model-configs"> configurations</a> and custom<a href="https://docs.getdbt.com/docs/build/materializations"> materializations</a> are tailored to meet business demands while effortlessly integrating with our Dagster orchestration system and maintaining parity with the previous Derived system.&nbsp;</p>
            <p>Last but not least, we were able to leverage and<a href="https://github.com/elementary-data/dbt-data-reliability/pull/674"> contribute</a> to the wide range of dbt packages, such as<a href="https://hub.getdbt.com/calogica/dbt_expectations/latest/"> great-expectations</a> and<a href="https://hub.getdbt.com/elementary-data/elementary/latest/"> elementary</a>, to quickly enable new features and functionality in our project.</p>
        </div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <h2><strong>Where we’ve arrived post-Derived<br></strong></h2>
            <p>Today, our new system (internally referred to as “Transformation 2.0,” or “T2”) powers over 2000 dbt tables, covered by over 12000 dbt tests.&nbsp;</p>
            <p>On a typical day we will see roughly ~4000 materializations automatically triggered across both hourly and daily assets. Our migration effort has seen <em>petabytes</em> of data churned through as we’ve moved off of Derived and onto Transformation 2.0.</p>
            <figure style="max-width:1600pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image">
                <div><img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/66903435291d41b500844fbd_AD_4nXejUSE5GJjDd5T8cTXw5dkF1J8r3ca6ENQhnLGrMWy30Sp6pOLCqzlP1oskvl6pT4YZy9wpTU10WIeZilNG7pLIl20ftAelg6oY43qGhcdC7xAUXUZFYUI94gw6dFRElUAlEj0wh3nrqQXbPq57pOWhgh1m.png" loading="lazy" alt="A timeline visualization from the Dagster UI 'overview' page, showing multiple scheduled runs across a deployment. The chart uses color-coded bars to represent different run statuses and durations. Predominantly green bars indicate successful runs, with occasional red sections for failures. Blue bars represent ongoing or queued runs. The timeline is densely populated, suggesting frequent and regular job executions."></div>
                <figcaption>A typical 6-hour overview of our system in its current state<br></figcaption>
            </figure>
            <p>As Dagster continues to evolve, our data producers and consumers have been able to take advantage of new functionality, including<a href="https://docs.dagster.io/concepts/metadata-tags/asset-metadata/column-level-lineage"> column level lineage</a> and other<a href="https://dagster.io/blog/dagster-plus-calatog-a-new-built-in-asset-library"> catalog-like</a> features, that accentuate data discovery. We have strong conviction that Dagster will be the heart of many of Discord’s future Data Platform developments, and hope to soon open up the platform to be <em>the place</em> for orchestration at Discord. We greatly appreciate our partners over at Dagster, and we’re looking forward to staying on the cutting edge of orchestration with their support!</p>
            <p>If you’re interested in working on technologies like those mentioned today (<em>without</em> launching backfills from your phone), be sure to check out our open roles on Discord’s mighty Data Platform team and others <a href="https://discord.com/careers">at our jobs page</a>.</p>
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