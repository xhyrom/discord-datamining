<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong
          >Help!! We’re excited to test Voice Messages on Discord but can’t do a
          traditional A/B test…Now What? <br
        /></strong>
      </h2>
      <p>Come with us, if you will, on a causal inference journey…&nbsp;</p>
      <p>
        In 2023, Discord added a feature: users could now post Voice Messages in
        text channels, DMs, and Group DMs using the mobile app. The team felt
        excited about the feature and was curious to learn how users would
        react. <em>Surely</em> people love to hear each others’ dulcet tones,
        right? But how do we measure the causal effect?&nbsp;
      </p>
      <figure
        style="max-width: 500pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/6746526c290df94a8e71835e_AD_4nXc0yq9BtdE32RscyhcOHrLWJrUyIgYnSGPbCFNdx82yXxK2z_rMLYJ9L2igzp6Sr0zl1hnj7x_T8t1RIQS0GAlnf-X9RAjkUYnrk8AWq-qpIJN9jC6cO0WqBWg4pfIESiyyUvIXvGGtLeSnZ7PsUOJ0h-qv.png"
            loading="lazy"
            alt="A meme where a person is reacting to two messages with different emotions. The person is happy by seeing the phrase “Excited to test Voice Messages on Discord,” but sad when a follow-up message says “We can’t do a traditional A/B test.”"
          />
        </div>
      </figure>
      <p>
        This is where things became difficult for us. Discord is rife (rife, we
        tell you!) with networks. We usually use A/B testing to measure the
        impact of our work, but many of our tests are influenced by network
        effects - or the feature doesn’t even make sense outside of a network.
        Network effects occur when the behavior of users in Group A influences
        the behavior of users in Group B and vice versa. This can potentially
        skew the results by introducing cross-group interactions and violating
        the assumptions of independent units across control &amp; treatment
        groups (SUTVA ♥️). A feature like Voice Messages is especially
        vulnerable to network effects. The feature only works if one person
        sends a Voice Message and another receives it, ya know?&nbsp;
      </p>
      <p>
        The ideal then would be to randomize <em>by</em> network. This is
        challenging because, unfortunately, Discord’s testing platform doesn't
        (<em>yet!)</em> support cluster randomization.&nbsp;
      </p>
      <p>
        So, we have a few options: a (bad) user-level A/B test or randomizing by
        country. The idea is that most networks are likely country or
        language-specific, so, we could mitigate network effects by comparing a
        treated geo against a control geo. But geo-testing isn't great either,
        as comparing a treated country to a control country conflates all their
        other differences with the treatment effect. So… what’s a better option?
      </p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Synthetic Controls have Entered the Chat<br /></strong>
      </h2>
      <p>
        🔥 <strong>Synthetic controls</strong> compare one treated unit (e.g. a
        country) to a weighted combination (a “synthetic control”) of all other
        non-treated units (e.g. other countries).&nbsp;
      </p>
      <h3><strong>Slightly longer explanation</strong></h3>
      <p>
        Synthetic controls are a method developed by academic economist
        <a
          href="https://economics.mit.edu/sites/default/files/publications/The%20Economic%20Costs%20of%20Conflict.pdf"
          >Alberto Abadie</a
        >. The main idea is: sometimes, you just can’t randomize - it’s either
        not possible, or it’s unethical, or you sacrifice too much precision. In
        those cases, you can release your treatment to one group and create a
        composite, synthetic control made up of a weighted combination of your
        untreated groups.&nbsp;
      </p>
      <p>
        A typical "vanilla geo-test" design would compare one treatment geo,
        such as Brazil, to a “similar” control geo, like Argentina.
        Unfortunately, geo-tests typically fail on both internal and external
        validity as they are neither unbiased estimates (internal validity) nor
        generalizable (external validity).
      </p>
      <p>
        But why is that? Say we compare Brazil vs. Argentina. Even if we check
        stats of each country’s average user engagement on Discord, we can't
        control for <em>everything</em>. We’ll still suffer from what’s called
        “<a href="https://en.wikipedia.org/wiki/Omitted-variable_bias"
          >omitted variable bias”</a
        >
        — omitted variable bias would skew our estimate of the treatment effect.
        OVB is really out to get you. It would affect our testing even if we
        controlled for the countries' different languages, sizes, and histories!
      </p>
      <p>
        The problem of external validity also applies: even if we managed to
        control for aalllll the ways Brazil and Argentina differ, we'll only get
        a reasonable estimate for the effect of releasing Voice Messages... in
        Brazil. That treatment effect may not generalize properly. Just because
        we learn that Brazil users love voice messages doesn't mean that users
        around the world would feel the same way. (Spoiler: Brazil<a
          href="https://www.cnnbrasil.com.br/tecnologia/brasileiros-sao-os-que-mais-enviam-audios-e-figurinhas-no-whatsapp-diz-mark-zuckerberg/"
        >
          <em>loves </em>voice messages</a
        >. 🇧🇷)
      </p>
      <p>
        For a place like Discord, synthetic controls are a
        <strong>much</strong> better option<strong>.</strong> Synthetic controls
        create a "fake" (or... synthetic) counterfactual using a weighted
        combination of all other geos that did not receive the treatment. So,
        instead of comparing Brazil to only Argentina, we would compare it to a
        “synthetic Brazil.” This “synthetic Brazil” could be something like 50%
        Argentina, 30% Uruguay, and 20% Chile (and 100% more helpful than a
        counterfactual of 100% Argentina).
      </p>
      <figure
        style="max-width: 607px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/6746531fc43ef8d5949b3521_AD_4nXcwiVBbrEsUbMcmGI7N4okknpp5ZAjfGFb_S9uuRwBB-v45o6BR1sLyrlG8eqFpw8wFFOarHp4TrZvx5RAXdbI-VxDUdt-uW7uTXo8twjN6FxBPOoMK3IHkhgqx9bcHltO9SjadwOVLaRdodU9_zWg4U15p.jpeg"
            loading="lazy"
            alt="The Strong Doge vs Weak Doge (Cheems) meme. Strong Doge represents “Test Voice Messages via Synthetic Control Method,” and Weak Doge represents “Test Voice Message via geo test.”"
          />
        </div>
      </figure>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Benefits of Synthetic Controls<br /></strong>
      </h2>
      <p>
        The biggest benefit of synthetic controls is that they’re relatively
        simple to implement. They control for observable and unobservable
        characteristics more effectively than geo-tests, and they can give you a
        decent signal on <em>how</em> unbiased your estimate is.&nbsp;
      </p>
      <p>Here’s the simple recipe:</p>
      <ul role="list">
        <li>
          Outcome data for one treatment unit, multiple time periods before and
          after treatment.
        </li>
        <li>
          Outcome data for multiple control units, for those same time periods.
        </li>
        <li>
          A trusted analytical library to generate the synthetic control
          counterfactual, e.g. the
          <a href="https://cran.r-project.org/web/packages/Synth/Synth.pdf"
            >Synth</a
          >
          package in R, or the<a
            href="https://pypi.org/project/SyntheticControlMethods/"
          >
            SyntheticControls</a
          >
          package in Python.
        </li>
      </ul>
      <p>
        You can evaluate how well your synthetic control has, well… controlled…
        by examining the Mean Squared Prediction Error (MSPE) before and after
        the feature was rolled out. If your MSPE gets much bigger after the
        feature rolls out, that means your treatment effect is working properly!
        You can also do a sanity check when you compare other time periods where
        there was no intervention - does your synthetic control closely match
        your observed outcomes? If so, you’re good to go!
      </p>
      <figure class="w-richtext-align-center w-richtext-figure-type-image">
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/6746536d9108f7cf6173c49a_AD_4nXcHqixEt3rvbC7bapaGB8qIuGA7zmR6MUa48RpX_GoqLZa36MDs8ePCSSJUQTWr-3sScAd5HVxIqFAC95QktRQLOFR4yBHsQ00MeZ_ou2KzmXSThFm1L4Mgp3BZbSJdPRwB0dok3ROGQbEdMvBZktIJG8k.png"
            loading="lazy"
            alt="The image is a line graph comparing the number of imprisoned individuals in Texas (solid line) with a “synthetic Texas” (dashed line) from around 1985 to 2000. The vertical axis represents the prison population, with increments of 10,000, ranging from 0 to 60,000. The horizontal axis shows the years from 1985 to 2000. A vertical dotted line around 1933-1994 appears to mark a specific event or policy change, as the number of imprisoned individuals in Texas sharply increases after this point. The synthetic Texas line shows a much slower and steadier increase during the same time frame. The gap between the Texas and synthetic Texas lines grows significantly after the dotted line."
          />
        </div>
        <figcaption>
          An example from<a
            href="https://mixtape.scunning.com/10-synthetic_control"
          >
            Scott Cunningham’s Causal Mixtape</a
          >
        </figcaption>
      </figure>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong
          >Main Weaknesses or Assumptions of Synthetic Controls<br
        /></strong>
      </h2>
      <p>
        Every solution has its advantages, but nothing is perfect. One of the
        main weaknesses of synthetic controls is generalizability - even with a
        perfect “synthetic Brazil”, we still only get the answer for Brazil. Can
        we mitigate this challenge? Thankfully, yes. In situations like this, we
        can repeat the synthetic control process by rolling the feature out to
        another country — for example, the UK — and constructing a
        “counterfactual UK”. We can continue doing this, sequentially: one
        synthetic control for each geo that a feature is rolled out to. Soon, we
        will virtualize the WORLD!!! *ahem<em>*</em>
      </p>
      <p>
        Another challenge is drift: as features mature and evolve in our
        platform, will our synthetic control remain a reliable counterfactual?
        Unclear. But probably not good to rely on it for long-term treatment
        effects.&nbsp;
      </p>
      <p>
        And finally: power! No, not that kind. Statistical power! Depending on
        the number of untreated groups, plus the number of time periods, we may
        be underpowered relative to a straight-up, typical A/B test. This means
        our treatment effect estimates can’t be as
        precise.&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        Okay, and one more small challenge: We need our data to be long and
        wide. That is, we need data on outcomes and some features, as well as
        many observations <em>of</em> those variables over time. We need data
        before and after the “treatment” (e.g. rolling out voice memos). And we
        need the same data - features and time series - for any potential
        control geos.
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Use case: Voice Messages<br /></strong>
      </h2>
      <p>
        In 2023, we were developing an eagerly anticipated feature that allows
        users to send recorded audio messages, making communication faster and
        more personal. You know, Voice Messages!&nbsp;
      </p>
      <p>
        We were excited about the feature because we believed it would enhance
        engagement by offering a more dynamic and expressive way to connect,
        especially in situations where typing is inconvenient. However, this
        feature posed a critical question: How could we accurately measure the
        impact of Voice Messages on our platform, considering the numerous
        network effects such a feature might
        trigger?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <figure
        style="max-width: 739pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/674653b4f28d3453ecbda13a_AD_4nXdmwJufTRpgaIqXf81EA40SuqtGxVofCsDpY5LInz57NnYi7osX5Ie2kAmYKSyKvX7VI6fglobo8Pp5x5uT83wgVAD0xrJfJLbcBNhTG5ywVUvxvnrsyB1SlZkfUzbYKrVSgAvyJA.png"
            loading="lazy"
            alt="A screenshot of the Discord mobile app. A Voice Message has been posted to chat. A play button is shown next to the Voice Message, with a waveform preview of its contents."
          />
        </div>
        <figcaption>
          The original UI for seeing a Voice Message on the Discord mobile app.
        </figcaption>
      </figure>
      <h3>How we landed on the synthetic control method</h3>
      <p>
        Choosing the synthetic control method for Voice Messages was the result
        of a thorough process where we considered various experimentation
        approaches. We couldn't do a traditional, user-level A/B test due to
        potential cross-contamination: users with access to the feature might
        send Voice Messages to a friend without access. If we allowed the
        recipient to play the message, they'd be exposed to the treatment; if we
        didn't, the sender's experience would be affected — both of these
        scenarios bias the results.
      </p>
      <p>
        We then explored a server-level A/B test, a common type of experiment at
        Discord. While this would better address any network effects, this comes
        with its own challenges. Users might have access to Voice Messages in
        one server but not another, creating a confusing experience. Plus, our
        qualitative research indicated that Voice Messages were more suited for
        DMs or Group DMs, making a server-level test less relevant for the
        feature's primary use case.
      </p>
      <p>
        Next, we considered a geo-test comparing two similar countries as
        control and treatment groups. However, finding truly comparable
        countries proved challenging. We identified a promising pair in Brazil
        and South Korea: both countries had high rates of DMs sent within the
        same country, thereby mitigating many of the network effects. They also
        had nearly identical rates of active users DM'ing, controlling for DM
        inclinations, and generated significant traffic, making them well suited
        for the test.
      </p>
      <p>
        Despite these similarities, deeper analysis revealed behavioral
        differences that could skew results. Notably, Brazilians used voice
        calls—which we considered a proxy for Voice Messages—on Discord at a
        higher rate than South Koreans. Unsurprisingly, we later came across
        <a
          href="https://www.cnnbrasil.com.br/tecnologia/brasileiros-sao-os-que-mais-enviam-audios-e-figurinhas-no-whatsapp-diz-mark-zuckerberg/"
          >this article</a
        >
        stating that Brazilians sent four times more voice notes than any other
        population on WhatsApp!
      </p>
      <p>
        Finally, after considering all these approaches, we settled on the
        synthetic control method. Brazil would serve as the treatment group
        because it checked many boxes, but how could we construct a synthetic
        control that would closely mirror Brazil?
      </p>
      <h3>Creating the synthetic control method</h3>
      <p>
        To create our synthetic control method, we first compiled a dataset
        containing all the metrics we aimed to measure during the experiment,
        including primary, secondary, and guardrail metrics.
      </p>
      <p>Next, we constructed a model with several key parameters:</p>
      <ol role="list">
        <li>The feature release date, expressed as a day-of-year integer.</li>
        <li>
          The model training time window, represented by a range of day-of-year
          integers leading up to and including the release date.
        </li>
        <li>
          Predictor metrics for our target metric, serving as model parameters.
          These predictors should:
          <ol role="list">
            <li>Have data available over a sufficiently long time horizon.</li>
            <li>
              Avoid high correlation or collinearity with the target metric.
            </li>
          </ol>
        </li>
      </ol>
      <h3>Analyzing the results</h3>
      <p>
        After validating our synthetic control setup, we analyzed the experiment
        results and saw what we were hoping for - a clear increase in user
        engagement after the feature's release! This gave us confidence that the
        feature was providing value to our users and was ready for our broader
        user base.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/674653b332bafb4778476803_AD_4nXfKXeKDl1ah7KGLffE5rxv0KVhQfa_TgzGq_yHbXI2mHElpaiQDq7rNjta16jZfOM1XTnZdYS9HIiKVFE5Y2txP9T172aoeih8JGnmIp43neuzQKGCtK4PnD8BgYTKTlbN0oyYY8w.png"
            loading="lazy"
            alt="The image shows a line graph comparing a metric between Brazil (treatment group) and a synthetic control. The horizontal axis is labeled “Day of year” ranging from 60 to 90. A vertical blue line marks the feature release date, after which the solid Brazil line starts to diverge slightly upward compared to the dashed synthetic control line. An arrow labeled “Feature impact” indicates a positive shift after the feature release, suggesting that the feature increased the metric in Brazil."
          />
        </div>
        <figcaption>
          Impact on metric from Voice Messages seen via the synthetic control
          method.
        </figcaption>
      </figure>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>Recap</strong></h2>
      <p>
        Synthetic controls are a powerful addition to your causal inference
        toolkit when traditional A/B tests aren't feasible—due to logistical or
        ethical constraints. Discord's initial rollout of voice messages
        exemplifies how this approach can be effectively used. The synthetic
        control method enabled us to test the feature while mitigating network
        effects. However, it's crucial to recognize the method's limitations: it
        requires extensive time series data and doesn't ensure generalizability.
      </p>
      <p>
        If you made it to the bottom of this blog post and are interested in
        more Engineering articles like this, check out our
        <a href="https://discord.com/category/engineering"
          >Engineering &amp; Developers section</a
        >
        of the Discord Blog! Or, if you want to tackle some of these challenges
        yourself, we’d love to have you —
        <a href="https://discord.com/careers">explore our Careers page</a> for
        any openings!&nbsp;&nbsp;
      </p>
    </div>
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
