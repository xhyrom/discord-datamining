<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Generative AI is attracting attention as the technology has progressed
        in leaps and bounds in recent years, offering fresh ways to solve user
        problems. Since it's a relatively new area in terms of its practical
        application, figuring out how to start building with LLMs (large
        language models) can be challenging. We're excited to share our approach
        for solving problems with generative AI, along with insights on rapidly
        launching new features leveraging this technology.&nbsp;
      </p>
      <p>
        We break down the process of building with LLMs into a few stages.
        Starting with product ideation and defining requirements, we first need
        to figure out what we’re building and how it can benefit users. Next, we
        develop a prototype of our idea, learn from small-scale experiments, and
        repeat that process until our feature is in a good state. Finally, we
        fully launch and deploy our product at scale. In this post, we will dive
        deeper into each stage of this process.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66107c36aba21f3a702efda8_gxPN0o6QwrI5agJtv8uq-nfK98WRjx6p4SjFIIGzc6mncw-fm9k4_lJsg4aPioknaAPdYT9bc7o79shM_tYxlkw99EIPsBYvU7REEHzb2736FxK3ufWolklwPBgLHbfxoIH0LGELrKGCbJLa4Sz4a5A.png"
            loading="lazy"
            alt="A flow chart showing the steps: ideation, define requirements, prototype, collect learnings, and deploy at scale. Collect learnings has an arrow back to “prototype” to show several iterations of prototypes may be needed."
          />
        </div>
        <figcaption>
          The different stages of building an LLM-powered feature
        </figcaption>
      </figure>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>How we identify use cases for generative AI</strong></h2>
      <p>
        We start by having empathy for our users and for our staff - what are
        the opportunities that generative AI can help address? Like machine
        learning in general, generative AI is a tool — and one that shouldn’t be
        applied when other tools are a better fit.&nbsp; When it comes to
        identifying where generative AI can make an impact, we dig into
        challenges that commonly:
      </p>
      <ul role="list">
        <li>
          Involve analysis, interpretation, or review of unstructured content
          (e.g. text) at scale
        </li>
        <li>
          Require massive scaling that may be otherwise prohibitive due to
          limited resources
        </li>
        <li>
          Would be challenging for rules-based or traditional ML approaches
        </li>
      </ul>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>Defining product requirements</strong></h2>
      <p>
        Once we've identified a potential use case for a generative AI
        application, the next step involves defining the product requirements.
        This phase requires a thoughtful analysis to select the best-suited LLM
        and to frame our problem as a prompt to an LLM.
      </p>
      <p>We consider these aspects of our problem:</p>
      <ul role="list">
        <li>
          <strong>Latency</strong>: How fast does the system need to respond to
          user input?
        </li>
        <li>
          <strong>Task Complexity</strong>: What level of understanding is
          required from the LLM? Is the input context and prompt super
          domain-specific?
        </li>
        <li>
          <strong>Prompt Length</strong>: How much context needs to be provided
          for the LLM to do its task?
        </li>
        <li>
          <strong>Quality</strong>: What is the acceptable level of accuracy for
          the generated content?
        </li>
        <li>
          <strong>Safety</strong>: How important is it to sanitize user input or
          prevent the generation of harmful content and
          <a
            href="https://promptengineering.org/the-rise-of-a-new-threat-prompt-hacking/"
            >prompt hacking</a
          >?
        </li>
        <li>
          <strong>Language Support</strong>: Which languages does the
          application need to support?
        </li>
        <li>
          <strong>Estimated QPS</strong>: What throughput does our system
          eventually need to handle?
        </li>
      </ul>
      <p>
        Several factors, such as complexity, prompt length, and quality, often
        conflict with the need for low latency, primarily because a bigger, more
        capable LLM usually delivers better outcomes but operates more slowly
        during inference owing to the model’s larger size. Consequently, if
        minimizing response time is critical, we can consider either incurring
        higher costs (e.g. by having more available compute) or accepting a drop
        in quality by using smaller models.
      </p>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>Prototyping AI applications: From Idea to MVP</strong></h2>
      <p>
        The product requirements we define then play into our selection of which
        off-the-shelf LLM we'll use for our prototype. We generally lean towards
        picking more advanced commercial LLMs to quickly validate our ideas and
        obtain early feedback from users. Although they may be expensive, the
        general idea is that if problems can't be adequately solved with
        state-of-the-art foundational models like GPT-4, then more often than
        not, those problems may not be addressable using current generative AI
        tech. If an off-the-shelf LLM can address our problem, then we can step
        into the learning stage and concentrate on iterating on our product
        rather than diverting engineering resources towards building and
        maintaining machine learning infrastructure.
      </p>
      <h3>Evaluating Prompts</h3>
      <p>
        The key step at this stage is to create the right prompt. We start with
        a basic prompt that tells ChatGPT (or whatever LLM we selected for our
        prototype) what we want it to do. Then, we make adjustments to this
        prompt, changing the wording to make the task clearer. However, after a
        lot of adjustments, it's often difficult to tell if these changes are
        actually improving our results. That's where evaluating the prompts
        becomes crucial. By using metrics to guide our changes, we know we are
        moving the needle on the quality of our results.
      </p>
      <p>
        To do this, we employ a technique known as
        <a
          href="https://arize.com/blog-course/llm-evaluation-the-definitive-guide/"
          >AI-assisted evaluation</a
        >, alongside traditional metrics for measuring performance. This helps
        us pick the prompts that lead to better quality outputs, making the end
        product more appealing to users. AI-assisted evaluation uses
        best-in-class LLMs (like GPT-4) to automatically critique how well the
        AI's outputs match what we expected or how they score against a set of
        criteria. This method uses GPT-4 in a way that’s similar to the critic
        model found in the
        <a
          href="https://www.tensorflow.org/tutorials/reinforcement_learning/actor_critic"
          >actor-critic algorithm</a
        >
        in reinforcement learning where a separate model is used to evaluate how
        well the model used for inference performed. Automating evaluation
        allows us to quickly see what's working well and what needs to be
        tweaked in our prompts, without having to manually check everything.
        When evaluating, we design prompts that ask for simple yes or no answers
        or rate the outputs on a scale, making the evaluation process
        straightforward.
      </p>
      <figure
        style="max-width: 1600px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66107cb4b5357212cdd178e1_CcYGASYqjXXfmM9eS_FnvFIKtU0JZf7gpY5r7V_wDGrcwKX62DOs1B7XortdtSYJq7nQ_UtK-WdD2BcNxVzgSlcIoi7624ug4VZPD1JVKSAsExXFFQT7hBw1X4kSWcjveE1x16TSJIx02BjG9ebFJZQ.png"
            loading="lazy"
            alt="A developer makes an API call to GPT-4 with an input prompt for their task “Write a story about Wumpus”. GPT-4 returns “Once upon a time, in the digital realm of Discordia, a curious creator named Wumpus roamed…”. The developer inputs the story into a critic prompt back to GPT-4 “Was the story about Wumpsum?”. GPT-4 responds with the evaluation “Yes”."
          />
        </div>
        <figcaption>
          AI-assisted evaluation consists of 2 separate prompts: one for your
          task and another to evaluate your results. The task prompt is passed
          to the inference model whereas the critic prompt is passed to the more
          advanced critic model.
        </figcaption>
      </figure>
      <h3>Launch and Learn</h3>
      <p>
        Once we are sufficiently confident in the quality of the results our
        prompt generates, we roll out a limited release (e.g. A/B test) of our
        product and observe the system’s performance in situ. The exact metrics
        we use depend on the application — our main goal is to understand how
        users use the feature and quickly make improvements to better meet their
        needs. For internal applications, this might mean measuring efficiency
        and sentiment. For consumer-facing applications, we similarly focus on
        measures of user satisfaction - direct user feedback, user engagement
        measures, etc.&nbsp; This feedback is critical to identify areas for
        improvement, including highlighting incorrect answers or instances where
        LLM hallucinations might be causing a strange user experience.
      </p>
      <p>
        Beyond user satisfaction, we also pay attention to system health
        metrics, such as response speed (latency), throughput (tokens per
        second), and error rates. LLMs sometimes have trouble generating output
        in a consistently structured format, which is crucial for minimizing
        data parsing errors and ensuring the output is robustly usable in our
        services. Insights here can inform how much post-hoc processing might be
        needed to fully productionize this capability at scale.
      </p>
      <p>
        Keeping an eye on costs is equally important for understanding how much
        we will spend when we fully scale up the feature. We look at how many
        tokens per second we're using in our initial limited release to predict
        the costs of a complete launch if we were to use the same technology
        that’s powering our prototype.&nbsp;
      </p>
      <p>
        All of the above information is critical to understanding if our product
        is working as intended and providing value to users.&nbsp; If it is,
        then we can proceed to the next step: deploying at scale.&nbsp; If not,
        then we look to take our learnings, iterate on the system, and try
        again.
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>Deploying at Scale</strong></h2>
      <h3>LLM Application Architecture</h3>
      <figure
        style="max-width: 1376px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66107d20b5357212cdd1e6f0_IJdCCUv_muZC1xzxjCTUeyuXn5exkN8fpGbFraHIeuZkCaEh2uh5vwyhurqyTsJfpiKscibX0lWu0qVF8sULT84Q7IaZnHf1cNRDpmRpZQzbvqSchGwzra3-IWyka5w6q2ozxkloX7IhmT7t1r3keNM.png"
            loading="lazy"
            alt="A user sends a request through an API gateway which requests to an LLM inference server and receives the LLM output. Then the gateway hydrates the LLM output and passes it to a content safety service which scans the content for trust and safety before returning it to the user."
          />
        </div>
        <figcaption>
          A high-level architecture for an LLM application
        </figcaption>
      </figure>
      <p>
        The basic setup for apps using LLMs consists of several essential parts.
        Inputs to the inference server are prepared into a prompt that we’ve
        tested and evaluated on a robust set of examples. At the heart of the
        architecture lies the LLM inference server, tasked with the job of
        operating the LLM to produce answers from the inputs it gets. Examples
        of such servers commercially include ChatGPT or other OpenAI GPT APIs,
        which are specialized in generating content with low latency.
      </p>
      <p>
        Because we care deeply about the user experience, privacy, and safety,
        we work with cross-functional partners like Legal and other Safety teams
        to ensure we’ve implemented thoughtful mitigations, while adhering to
        privacy principles such as data minimization. For example, we chose to
        incorporate content safety filters to the output of the inference server
        to identify undesired material before it reaches the user. We can
        leverage in-house or third-party trust and safety ML models to detect
        inappropriate content.
      </p>
      <p>
        All these elements put together form a system that taps into the
        capabilities of LLMs efficiently while monitoring the content's quality
        and safety to ensure that we’re delivering a quality end product.
      </p>
      <h3>Self-hosted LLMs</h3>
      <p>
        When we're thinking about adding a feature that uses LLMs, we consider
        many tradeoffs when designing our LLM inference server such as balancing
        the costs and the amount of engineering effort. Using commercial LLMs is
        great because it gives us access to top-notch models and we don't have
        to worry about setting up the tech ourselves, but the expenses can add
        up quickly. For privacy reasons, we may also prefer to process
        full-scale data completely in-house. A solution is to self-host an
        open-sourced or custom fine-tuned LLM. Opting for a self-hosted model
        can reduce costs dramatically - but with additional development time,
        maintenance overhead, and possible performance implications. Considering
        self-hosted solutions requires weighing these different trade-offs
        carefully.
      </p>
      <p>
        Recent open-source models, like
        <a href="https://llama.meta.com/">Llama</a> and
        <a href="https://docs.mistral.ai/">Mistral</a>, are making high-quality
        results possible right out of the gate, even for complex tasks that
        traditionally required a model to be trained specifically for them.
        However, for domain-specific or complex tasks, we might still need to
        fine-tune the model to achieve excellent performance. We've found it's
        best to start with smaller models and only move up to bigger ones if
        needed for quality reasons.
      </p>
      <p>
        Setting up the necessary machine learning infrastructure to run these
        big models is another challenge. We need a dedicated model server for
        running model inference (using frameworks like
        <a href="https://developer.nvidia.com/triton-inference-server"
          >Triton</a
        >
        or <a href="https://docs.vllm.ai/en/latest/">vLLM</a>), powerful GPUs to
        run everything robustly, and configurability in our servers to make sure
        they're high throughput and low latency. Tuning the inference servers
        for optimal performance is task-specific - the best configuration
        depends on the models we’re using, as well as the input and output token
        lengths, and ultimately impacts how efficiently the server can
        <a
          href="https://www.anyscale.com/blog/continuous-batching-llm-inference"
          >batch input requests</a
        >
        to maximize throughput.
      </p>
      <figure
        style="max-width: 1600px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66107d5cf0fba1ac59936b01_utFdP6WCqlJm7Ssf3Tdc7GEhPLdX8LjCl_ml3mDTvrEQYlUUGAHvMzFOIrqkw2YhuZ3FqQCwjmEnvZZOEXUkaMJWvKJkGaeL8PYpXavYHP8X0WI3yW_vjBYH5S3EiYVm2kJws8xwY41eCX5MM4XiE7k.png"
            loading="lazy"
            alt="A flow chart of a self-hosted LLM architecture and request flow. 3 requests enter a load balancer and then inference server swarm. The inference server swarm has 2 pods each with its own request queue, batch scheduler, and LLM. The output of the system is 3 LLM generated outputs."
          />
        </div>
        <figcaption>Self-hosted inference server</figcaption>
      </figure>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>Closing Thoughts</strong></h2>
      <p>
        Looking ahead, there’s little doubt that generative AI will only grow
        more important as a means of solving massive-scale business-critical
        problems. Balancing cost, engineering effort, and performance will
        remain challenging, and we’re excited to see (and contribute to) the
        rapid development of novel technology and tools to more effectively do
        so in the coming years!
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
