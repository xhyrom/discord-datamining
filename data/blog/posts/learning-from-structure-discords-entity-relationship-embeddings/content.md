<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Thanks to Large Language Models (or LLMs), embeddings have become
        commonplace. Embeddings are simple but powerful structures that capture
        complex data as a series of numbers — a vector — and are a greatnatural
        way to represent many things within machine learning models. In LLMs,
        embeddings represent words (or tokens). <br /><br />Here at Discord, we
        built DERE, or Discord's Entity-Relationship Embeddings, which represent
        things like servers (in this article, we’ll use their technical term
        “guilds”), users, games, and other entities. Just as embeddings from
        LLMs have made it easy to build text-based applications quickly and
        easily, these embeddings make it easy for ML engineers at Discord to
        build models and generate insights from our data faster than ever.
      </p>
      <figure
        style="max-width: 2314pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66ec5b3f4a3667839cb3be49_66ec5b128c4a74ebd8e0924b_Trends%2520Chart.png"
            loading="lazy"
            alt='A line chart explaining how large the interest in the term "embeddings" over a 20-year timeframe. '
          />
        </div>
      </figure>
      <p>
        If you’re familiar with Natural Language Processing, this technique is
        used to build pre-trained word representations from text. In the NLP
        setup, the relationships between words are defined by the neighbors of
        any given word. So, in the sentence “the cat sat”, you could say “cat”
        has a relationship to “the” and “sat”.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb62dad2a4312899562691_AD_4nXcx7AdBHtXDPfK3PSeHKCDCK2sRSONqypbnpkXlT678xxZlIKDRhP4LPwTGm4m19uPLNjBN2B52ZOKehb1KsOlxyTYQ3hr1ZBlE7MvbEBOGoTBwxSlUi_PqJOnVFxB5B6E54coM-eUHgBTV5X0_kePoRBA_.png"
            loading="lazy"
            alt="An example of relationships in Natural Language Processing. The word “the” is a neighbor to “cat” which is a neighbor to “sat.” This equates to a transitive relation where “the” is related to “sat” because “cat” is related to both. "
          />
        </div>
      </figure>
      <p>‍</p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>What is DERE?</strong></h2>
      <p>
        DERE is the mechanism Discord uses to build meaningful representations
        from raw data. <br /><br />At its core, DERE pre-trains embeddings for
        each user, guild, game, and various other entities. Effectively, it maps
        entity IDs, like guild ID or game IDs, to a vector which can then be
        used in various ways.&nbsp;
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb6307ed97b6930078d251_AD_4nXfSaxH4aEim-FvzopFHAN3gVBF6pAZPwHJwXsc3haD2SZCZj8yDiKe6XYB_6sngFAOv7ksRqZusWV-_39IB4wx0oVcPhI_fo9axyjhFfLw-hBXximvkssmqRhQb9SJvGz5VZmiNCPglaSc96qW2Ux1JDNY.png"
            loading="lazy"
            alt="A diagram showing some of the relationships used in DERE. Users have relationships to their friends, to games they play, and to the guilds they’re in. Bots also have a relationship to the guild they’re in."
          />
        </div>
      </figure>
      <p>&nbsp;</p>
      <p>
        DERE relies solely on social graph-based features, such as relationships
        between users and their interactions within the platform (e.g. what
        guilds you’re in). If you re-imagine the NLP example above and tilt your
        head slightly, you could sort of make a sentence out of this… maybe
        something like: “Nelly is friends with Clyde.” In DERE, our setup is
        pretty much exactly like this! Nelly-&gt;is_friend-&gt;Clyde. While
        simple, this is very powerful at scale.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb63b3d2a4312899574ed2_AD_4nXdFWkLiEweEsuKwbIAhF4LnZr0zpp6butkg1-hZpShQUxbj6s3OV-KnJBsXGpAQT2WKFNRI4rhVLIGi_kq_xlBv85B7jVcf95zZVRyzkj-jXlS8NGchT_G7tgNgO-SGn6Is2VEfJBDwqvzU-8uIyn2ZCpQc.png"
            loading="lazy"
            alt="On the left: A diagram showing an NLP example of the sentence “Nelly is friends with Clyde” with the input being Nelly, the projection being the neighbors, and the output being the rest of the sentence. On the right: A diagram showing a DERE example of Nelly’s relationships to guilds, friends, and games."
          />
        </div>
      </figure>
      <p>
        Under the hood, DERE uses an unsupervised machine learning technique
        known as “contrastive learning,” which trains on triplets of
        head-relation-tail (h, r, t) examples. The data used in DERE is broken
        down into these triples, which our ML models can use to unravel the
        relationships and build useful representations.
      </p>
      <p>Examples of (h, r, t) triples include:</p>
      <figure
        style="max-width: 1223pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb67d59edce9bf14d5c888_66eb64ee7365f48e44c51061_image1.png"
            loading="lazy"
            alt="Table of examples of head, relation, tail (h, r, t) triples with an explanation for each. Row one shows that a user has a relationship to a guild that they are a member of. Row two shows that two users that are friends have an edge between them. Row three shows that channels belong to guilds."
          />
        </div>
      </figure>
      <p>An example of what the model sees during training time is:</p>
      <p>
        <strong
          >(h, r, t) = (661027446241361930, 17, 974519864045756446)</strong
        >
      </p>
      <p>
        Where this particular example is the edge between my user ID and the
        OpenAI server ID. Relation 17 (at the time of writing) is the
        “user_in_guild” relationship.
      </p>
      <p>
        Training is thus two embedding lookups: one for the embedding for my
        user ID and the other for the embedding of the server ID. The relation
        ID is then used to choose which model we’ll use to transform these
        entities into the same space:
      </p>
      <figure
        style="max-width: 1424pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb67d69edce9bf14d5c8db_66eb653de82f29ae30c7b6d1_image5.png"
            loading="lazy"
            alt="An equation showing a scoring function for a particular relationship that inputs two embedding vectors for the head and tail entities, and is equal to a comparator function such as dot product or cosine distance that inputs the head entity embedding and additionally applies a transformation such as translation or diagonal multiplication to the tail entity embedding."
          />
        </div>
      </figure>
      <p>
        Our positive examples are all of the edges that exist between any two
        entities in our graph, such as my user ID and a guild that I’m in.
        Negative examples are constructed on-the-fly during train time by
        randomly corrupting positive examples. So continuing the example above,
        an example would be my user id in guild &lt;xyz&gt; where I’m not
        actually in that guild. Because our training data is massive, corrupting
        positive edges is a safe operation. To give an idea of how big these
        graphs can get, we operate on billions of entities and tens of billions
        of relationships.
      </p>
      <p>
        Our loss function during training is a ranking loss called triplet
        margin loss which optimizes related entities to be nearby each other in
        their embedding space, and unrelated entities to be further away from
        each other. We could also use logistic or softmax loss, depending on use
        case.
      </p>
      <p>
        Continuing from the above example, my (h, r, t) triple is considered a
        positive example since it exists in the training data. If we corrupted
        the edges within the batch, would could wind up with a negative example
        like
      </p>
      <p>(h, r, t) = (661027446241361930, 17, 560127830160048128)</p>
      <p>
        Where the tail was randomly selected and is a Rust server I’m not a
        member of.
      </p>
      <p>
        Now we can take the positive and negative examples and calculate our
        loss:
      </p>
      <figure
        style="max-width: 1438pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb67d79edce9bf14d5ca50_66eb65b0cc4fabad4f6fe34b_image7.png"
            loading="lazy"
            alt="An equation showing the triplet margin ranking loss which takes the maximum of 0 and margin parameter minus the scores for the positive example plus the score for the negative example(s)"
          />
        </div>
      </figure>
      <p>
        We use this loss to update the learned transformation as well as the
        embeddings themselves.
      </p>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Interpretation of Learned Representations<br /></strong>
      </h2>
      <p>
        Our setup evaluates our learned representations based on how often we
        can correctly perform link prediction. (Or, given a head and
        relationship type, how often do we correctly predict the tail entity?)
        We evaluate this by ranking how often our model predicts the correct
        entity in the top 1, 10, and 50 items. We also monitor overall loss,
        area under the curve (AUC), and mean reciprocal rank (MRR).
      </p>
      <p>
        One way to think about what’s being learned here is to consider it as a
        “superposition” of relationships. A related technique called “matrix
        factorization” produces embeddings from just two entities and a single
        relationship. For example, it compares users in one column and guilds in
        another column, where if a user is in a guild, it’s marked as a “1”.
        With DERE, we can learn a superposition of many entities and multiple
        relationships, each of them influencing the final representation of one
        another. From this, we can view these embeddings as capturing a
        representation of the entire relationship graph for a given entity.
      </p>
      <p>
        By projecting our vectors to a lower-dimensional space (2 or 3
        dimensions) using UMAP, we can uncover some of the structure that has
        been learned:
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb65ece8feba38f8b6c39f_AD_4nXe9gt1oYhLSvYXQqUWlfNCd1-we9JNcx3XrlF2YHW1YahD41Sxc5zRjwNHeV9am7GtwRYueIbn8WqCDkT6czfMyRYILN5fyaRniNcVbFmHsb9qjSh1ZAWEO8h_2rahS49W50yew6X7rjEqxKFvO0AWOykJZ.png"
            loading="lazy"
            alt="A 3-dimensional projection of guild embeddings showing a search for Reddit communities on Discord that begin with r/"
          />
        </div>
      </figure>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Iterating with Embeddings<br /></strong>
      </h2>
      <p>
        When building with DERE, we divide the process into a few key
        stages.&nbsp;
      </p>
      <p>
        The journey starts with product ideation and defining requirements. Not
        all projects need DERE, and in some cases, model interpretability
        matters more than raw performance. In these instances, a simpler model
        is suggested. If DERE is a good fit, we move on to developing prototypes
        and learning from small-scale experiments. For this, DERE offers
        multiple pipelines at various scales. Some pipelines are much smaller
        and therefore quicker to train, test, and iterate on until we're
        satisfied. Finally, we fully launch and deploy the model at scale!
      </p>
      <p>
        With this approach, we've been able to utilize DERE’s embeddings in
        several downstream tasks — they’ve been utilized for fine-tuning
        purposes, integrated into classifiers, deployed for nearest neighbor
        lookups, and applied similarly to NLP tasks! One of our observations
        during this is that pre-training offers a solid foundation to build
        upon: while each model owner could ingest and train on this data
        independently, having a single pre-trained pipeline upstream for model
        owners to use off the shelf vastly reduces overhead.
      </p>
      <p>
        DERE plays a key role in a number of Discord projects, including
        classification models such as categorization, use-case, and other
        analytics models. Recently, we’ve even been using them for ranking and
        recommendations. The goal is not just to use embeddings to streamline
        processes, but to create a wealth of applications that can leverage
        these features efficiently.
      </p>
      <p>
        In addition, DERE has been useful when creating a notion of game
        similarity. By incorporating a new entity type for games, we were able
        to quickly ship and experiment with ways to let users discover PC or
        console games they may be interested in, directly on Discord!&nbsp;
      </p>
      <p>
        We’ve also incorporated the resulting game embeddings into Quests,
        resulting in big improvements in how we determine which players may be
        interested in specific Quests, which helps more players earn rewards for
        playing them on Discord!
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>How to Use DERE Embeddings<br /></strong>
      </h2>
      <p>
        At Discord, we want to make our technology as accessible as possible. We
        host our embeddings in BigQuery to make it easy to quickly get up and
        running. If you want a lower-level route, the raw embeddings files are
        also available in Google Cloud Storage. Finally, our latest offering is
        to serve them live, which can be used for online lookups. By making our
        embeddings easily available internally, our ML practitioners get an
        immediate head start on their machine learning projects.
      </p>
      <figure
        style="max-width: 1600pxpx"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66eb66953aeb8f2ee1041414_AD_4nXdF8RLUrqW7UV69y6UzL_hnyAweaGQE0z7H1Kxq6ao96iQMWp0QHjDAAZlhOeWeMJgOKGbyZiSuSpP8aUMpJYEa8WKgWOX8AGFapIibZbiiZFJAn6BRvQtrKM9qlNeavhpjmK-FLGGq5fJS-3jDIOfO3c6W.png"
            loading="lazy"
            alt="A diagram showing offline and online serving for DERE. Offline use cases can access Google Cloud Storage for raw vectors or nearest neighbor indices and BigQuery for Vectors or Nearest Neighbors, while online use cases have embeddings and nearest neighbor APIs available"
          />
        </div>
      </figure>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2><strong>The Future of DERE</strong></h2>
      <p>
        We're planning several updates to further enhance DERE's capabilities
        down the road. We recently implemented significant updates to DERE’s
        ability to track stability over time, providing more actionable insights
        for model optimizations to help ensure that retraining downstream models
        is stable. Similarly, we're aiming to incorporate new features that help
        visualize embeddings from every training run, offering a more detailed
        view of our models' performance over time.
      </p>
      <p>
        Embeddings have become a standard tool in the larger world of machine
        learning, helping provide a reusable signal that can accelerate
        downstream ML development and provide novel analytics capabilities.
        Given the complex nature of Discord, building an entity-agnostic
        embeddings framework has been incredibly valuable in both internal model
        development and user-facing products. We're excited to share what we've
        built and look forward to continue investing in this space.&nbsp;
      </p>
      <p>Never stop building. 🫡</p>
      <p>
        ‍<em
          >If you read this whole thing, we bet you’d love to work at Discord. </em
        ><a href="https://discord.com/careers"><em>Join us!</em></a>
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
