<div class="column-4 w-col w-col-8 w-col-stack">
  <div id="heading-1" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <p>
        Last year, we
        <a
          href="https://discord.com/blog/encryption-for-voice-and-video-on-discord"
          >announced</a
        >
        that we were experimenting with new encryption protocols and
        technologies for audio and video calls on Discord. After extensive
        experimenting, designing, developing, and auditing,
        <a href="http://discord.com/safety/more-private-and-secure"
          >we’re excited to announce</a
        >
        Discord’s audio and video end-to-end encryption (“E2EE A/V” or “E2EE”
        for short), which we like to refer to as our DAVE protocol.
      </p>
      <p>
        Discord is committed to protecting the privacy and data of the roughly
        200 million people who use our platform every month. As we continue to
        be a place that helps our users deepen friendships around games and
        shared interests, we are thrilled to be launching more secure and
        private voice and video calls.&nbsp;
      </p>
      <p>
        Today, we’ll start migrating voice and video in DMs, Group DMs, voice
        channels, and Go Live streams to use E2EE. You will be able to confirm
        when calls are end-to-end encrypted and perform verification of other
        members in those calls.&nbsp;
      </p>
      <p>
        We’d like to explain why we’re bringing E2EE A/V to Discord, share our
        design and implementation goals, and provide a high-level technical
        overview of how the new protocol works.
      </p>
    </div>
  </div>
  <div class="btn-wrapper w-condition-invisible">
    <a href="#" class="btn-blog w-dyn-bind-empty w-button"></a>
  </div>
  <div id="heading-2" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>What We’ve Been Up To<br /></strong>
      </h2>
      <p>
        When it comes to building a secure and trusted E2EE A/V protocol,
        transparency is key. To support this, we’re releasing the DAVE protocol
        whitepaper (<a href="http://github.com/discord/dave-protocol"
          >discord/dave-protocol</a
        >) and the libraries our clients use to implement it (<a
          href="http://github.com/discord/libdave"
          >discord/libdave</a
        >). Moving forward, any changes to either the protocol or our code will
        be reflected in those repositories.
      </p>
      <p>
        In the past few months, we collaborated closely with
        <a href="https://www.trailofbits.com">Trail of Bits</a>, a renowned
        independent cybersecurity firm, to conduct a thorough review of both the
        design and implementation of DAVE in our code base. With DAVE’s launch,
        Trail of Bits is publishing their findings from both the
        <a
          href="https://github.com/trailofbits/publications/blob/master/reviews/2024-08-discord-dave-protocol-designreview.pdf"
          >design review</a
        >
        and
        <a
          href="https://github.com/trailofbits/publications/blob/master/reviews/2024-09-discord-dave-protocol-codereview.pdf"
          >implementation review</a
        >.
      </p>
      <p>
        Safety is intertwined with our product and policies. While audio and
        video will be end-to-end encrypted, messages on Discord will continue to
        follow our
        <a href="https://discord.com/safety/our-approach-to-content-moderation"
          >content moderation</a
        >
        approach and are not end-to-end encrypted. The E2EE A/V protocol was
        designed from the outset to be compatible with additional safety
        features that support the E2EE experience.
      </p>
    </div>
  </div>
  <div id="heading-3" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Our Goals<br /></strong>
      </h2>
      <p>
        The design and implementation of the DAVE protocol were informed by five
        key goals.
      </p>
      <h3><strong>Truly private conversations</strong></h3>
      <p>
        During E2EE A/V calls, no one but the participants can access the
        contents of ongoing audio and video conversations. Outsiders, including
        Discord itself, never know the media encryption keys.&nbsp;
      </p>
      <p>
        E2EE media encryption keys are different for each call, and for each
        specific group within the call at a point in time. When the participants
        join or leave a call, keys are changed and members cannot decrypt media
        that was sent before they joined or after they left.
      </p>
      <h3><strong>An open and effective protocol</strong></h3>
      <p>
        We want an E2EE A/V protocol that is publicly auditable and achieves the
        goals we set out for it. To that end, the protocol is detailed in
        <a href="https://github.com/discord/dave-protocol">our whitepaper</a>
        and
        <a href="https://github.com/discord/libdave">open-source library</a>,
        uses industry-standard sub-protocols and cryptographic algorithms, and
        had its design and implementation externally audited by Trail of Bits.
      </p>
      <p>
        Our first-party clients and the open-source library support out-of-band
        verifications of individual call participants and of the E2EE A/V call
        state as a whole.
      </p>
      <h3><strong>Broad platform support</strong></h3>
      <p>
        DAVE is compatible with all of our supported clients and nearly all of
        our voice and video spaces. Our latest desktop and mobile clients
        already support this upgrade, and we plan to extend support to the rest
        of our clients next year.&nbsp;
      </p>
      <p>
        To transmit real-time audio and video, Discord uses WebRTC. When it
        comes to web clients, we are limited by the WebRTC API availability in
        browsers, which poses a unique challenge to supporting E2EE A/V. This is
        why DAVE leverages the WebRTC encoded transform API with a codec-aware
        send-side transform, which creates compatibility with WebRTC’s handling
        of Discord’s supported codecs.&nbsp;
      </p>
      <h3><strong>Transparent to our users</strong></h3>
      <p>
        Discord’s high quality, robust, low latency voice and video is not
        compromised by the introduction of E2EE A/V. Everyone should continue to
        experience Discord calls as they always have: chatting with friends
        without needing to think about the underlying technology and
        protocols.&nbsp;
      </p>
      <p>
        As we begin rolling out DAVE, or when we make protocol updates in the
        future, we will automatically shift users to our new protocol versions.
        As people hop in and out of calls the underlying protocol version can
        change, but members of the call will not notice a disruption in what
        they see or hear.&nbsp;
      </p>
      <p>
        E2EE A/V will eventually become the default for voice and video in DMs,
        Group DMs, voice channels, and Go Live streams on Discord. We want to
        seamlessly enable E2EE A/V for all of Discord’s users and their many
        devices, without requiring them to manage identity keys or select a
        primary device.
      </p>
      <h3><strong>Scalable and performant</strong></h3>
      <p>
        We want all calls on Discord, no matter the number of participants, to
        be eligible for E2EE. Audio and video conversations shouldn’t be forced
        to “downgrade” to transport-only encryption because of their scale.
      </p>
      <p>
        We want to deliver decoded media to call participants as quickly as
        possible. However, negotiating a shared key through a multi-party key
        exchange takes time. We aim for the “initial time-to-media” from E2EE to
        be as small as possible, in the ballpark of a few hundred milliseconds
        for a reasonably sized Discord call.
      </p>
      <p>
        We evaluated multiple key exchange protocols before selecting
        <a href="https://datatracker.ietf.org/doc/rfc9420/"
          >Messaging Layer Security</a
        >. We strongly believe that its group-based approach is a better fit for
        Discord’s scalability and performance requirements than pairwise
        alternatives.
      </p>
    </div>
  </div>
  <div id="heading-4" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>How It Works<br /></strong>
      </h2>
      <p>
        At a high level, below are the four main components that come together
        to form the DAVE protocol.
      </p>
      <h3><strong>WebRTC Encoded Transforms</strong></h3>
      <p>
        DAVE uses the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms"
          >WebRTC encoded transform API</a
        >. This allows us to insert a frame transformation function on both the
        sending and receiving side, encrypting after encode on the send side and
        decrypting before decode on the receive side.
      </p>
      <p>
        In this frame transformation, each frame is encrypted or decrypted with
        a per-sender symmetric key. This key is known to all participants of the
        audio and video session but crucially is unknown to any outsider who is
        not a member of the call, including Discord.<br />
      </p>
      <figure
        style="max-width: 1600px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66e8669741da70d807cdd9ba_AD_4nXcM4RPLuQgOvSIcPCz4X6mgSMJLIKzHiYwYA6htFIMlrWPFin7Xy_b6QVlFP1m_r3xrdLxjtVq6vbCKe6TMgjWeUvyRoJ-r8AoQAlbUzdhbxtj05gtEJxzgMoa3FFdJiQQEjWtWag0IaVCQJ1lij9mLuOoI.png"
            loading="lazy"
            alt="Graphic visually showing the media frame process from encode all the way through the steps to decode using the DAVE frame transformers."
          />
        </div>
      </figure>
      <p>
        WebRTC requires that the transformed frame go through the WebRTC
        codec-specific packetizer after our encrypting frame transformer and
        then through the WebRTC codec-specific depacketizer before our
        decrypting frame transformer. This means any data that the packetizer or
        depacketizer expects to read must not be encrypted, and that special
        sequences reserved by codecs cannot appear unexpectedly in the
        transformed frame. As WebRTC is updating their API to be more compatible
        with E2EE, we expect this requirement to eventually be removed. We look
        forward to the future associated DAVE protocol update which will greatly
        simplify our frame transformers.&nbsp;
      </p>
      <p>
        To address these current challenges appropriately for each supported
        codec, our send-side encrypting&nbsp; frame transformer is codec-aware.
        It is responsible for identifying the ranges of codec metadata that must
        remain unencrypted and for validating that the produced ciphertext does
        not contain any reserved sequences of bytes which would be problematic
        for the given codec.&nbsp;
      </p>
      <p>
        This results in a transformed frame that can be correctly packetized and
        then depacketized by WebRTC and that arrives at the receiver’s
        decrypting frame transformer without modification.
      </p>
      <h3><strong>Key Exchange: Messaging Layer Security</strong></h3>
      <p>
        The protocol uses
        <a href="https://datatracker.ietf.org/doc/rfc9420/"
          >Messaging Layer Security (MLS)</a
        >
        for group key exchange. We selected MLS because it provides a scalable
        mechanism for groups to update shared keys.
      </p>
      <p>
        With DAVE, the client is a member of an underlying MLS group from which
        they can extract a per-sender media encryption key known to all of the
        members of the group. Our existing voice gateway now additionally serves
        the role of MLS delivery service and external sender, routing messages
        amongst group members and proposing when group members should be added
        or removed.
      </p>
      <p>
        When participants join or leave a voice or video session on Discord, the
        group moves to a new “epoch,” and all of the per-sender keys change. A
        new member of the group cannot decrypt any media sent in the previous
        epochs, and a leaving member of the group cannot decrypt any media sent
        in future epochs.
      </p>
      <p>
        Discord’s existing transport encryption for audio and video between the
        client and our selective forwarding unit (SFU) is retained, ensuring
        only audio and video from authenticated call participants is forwarded.
        While the SFU still processes all packets for the call, audio or video
        data inside each packet is end-to-end encrypted and undecryptable by the
        SFU.
      </p>
      <p>
        Participants of the MLS group for a given epoch can compare an exported
        secret called the “epoch authenticator.” Discord clients display the
        call’s epoch authenticator as a string of numbers referred to as the
        <strong>Voice Privacy Code</strong>. Each Go Live stream associated with
        the call displays its epoch authenticator as a
        <strong>Stream Privacy Code</strong>.
      </p>
      <p>
        The epoch authenticator is different for each epoch and changes whenever
        participants join or leave calls. By comparing these codes out-of-band,
        participants of the MLS group can verify that they all have the same MLS
        group state and that no one is being impersonated.
      </p>
      <h3><strong>Identity Key Pairs and User Verification</strong></h3>
      <p>
        We selected an MLS ciphersuite with Elliptic Curve Digital Signature
        Algorithm (ECDSA) signature keys, for compatibility with WebCrypto and
        to enable a future improvement to our persistent key storage:
        non-extractable keys provided by Trusted Platform Modules.
      </p>
      <p>
        Each call participant generates an ECDSA P256 identity key pair and
        shares the public key with other call members before joining the
        underlying MLS group. Each device generates its own key pair, and there
        is no synchronization of private keys between a user’s devices.
      </p>
      <p>
        During a call, each pair of users can perform an out-of-band comparison
        of their <strong>Verification Code </strong>to ensure that the other
        participant is the person they expect and not an impersonating attacker.
      </p>
      <p>
        By default, identity key pairs are ephemeral and re-generated for each
        call. This means that the pairwise
        <strong>Verification Code </strong>changes for a pair of users across
        different calls or when somebody re-joins the same call (e.g., leaving a
        voice channel and rejoining a few minutes later).
      </p>
      <p>
        Each user can choose to use a persistent identity key pair for each
        device they use to communicate on Discord, meaning that they will always
        present the same identity public key across all E2EE A/V calls with that
        device. This allows others to store a persistent verification for them
        and see them as verified across multiple E2EE A/V calls.&nbsp;
      </p>
      <p>
        While the persistent identity key pair provides for a better
        verification experience, it necessarily shows other participants that
        you’re using the same device across multiple E2EE A/V calls. By making
        this opt-in we believe we struck the right balance: implementing a
        reasonable default privacy approach for Discord users while still
        offering the kind of E2EE verification experience that
        security-conscious users might expect.
      </p>
      <h3><strong>Protocol Version and Group Transitions</strong></h3>
      <p>
        For a call to use E2EE, every member of the call must support the E2EE
        protocol. During the rollout phase, a single non-supporting member being
        present forces the call to transport-only encryption. The call will
        automatically “upgrade” to E2EE if that member disconnects. We’ve built
        new user experience flows to show when calls are end-to-end encrypted
        and when they are not.
      </p>
      <p>
        The voice gateway negotiates protocol and MLS epoch transitions between
        the members of a given call, to ensure an uninterrupted audio and video
        experience. We worked to make these transitions feel completely
        seamless: whether it’s a call transitioning in and out of E2EE, changing
        E2EE protocol versions, or adding and removing participants.
      </p>
      <p>
        When a protocol or member change is required, the voice gateway
        announces this to all participants and coordinates any MLS group
        initialization, cleanup, or change. Clients report to the voice gateway
        once they are ready to complete a given transition, and the voice
        gateway announces that the transition can be executed once all members
        are ready.
      </p>
      <p>
        When the transition is executed, call members start sending media for
        the new group’s protocol context. During these time-bounded transition
        phases, call members can temporarily process audio and video for either
        the previous or the current group’s protocol context. This ensures that
        the stream of audio and video received does not have any interruptions
        while the protocol context of the group changes underneath.
      </p>
      <p>
        For a <em>much</em> more technical and detailed breakdown of the
        protocol, you might enjoy diving into the
        <a href="http://github.com/discord/dave-protocol">protocol whitepaper</a
        >.
      </p>
    </div>
  </div>
  <div id="heading-5" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>Creating a Turnkey User Experience<br /></strong>
      </h2>
      <p>
        On the surface, voice and video on Discord remain the same great
        experience that millions of concurrent users rely on every day. To
        support the implementation of E2EE A/V, we’re rolling out user interface
        changes to view when voice and video calls are end-to-end encrypted and
        to help call members use <strong>Verification Codes</strong> to perform
        out-of-band verifications of members in E2EE calls. Check out our new
        <a href="https://support.discord.com/hc/en-us/articles/25968222946071/"
          >help center article</a
        >
        to learn more.
      </p>
      <figure
        style="max-width: 1080px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66e885f82d7a717e8ec390cb_AD_4nXfMoJABhsonA0aLoMGYJ8KzFSEICxRW-j803wdZU7JOEnCznDXb_gLYQthwuDYi7pam645X722sJ3xFqRJvBffJl3I9MF8j3am5ucPRuoIxGaNR5wmTG4OYZ_p_PQlB3Uxh8GG3xTuRNx7bL2J3qyRRd97B.png"
            loading="lazy"
            alt="Discord user interface showing the voice or video call details including a new Privacy tab which indicates the call is end-to-end encrypted."
          />
        </div>
      </figure>
      <p>
        Opening the details view for your E2EE audio or video call shows a new
        Privacy tab. This tab contains a <strong>Voice Privacy Code</strong>,
        which displays an exported secret from the underlying MLS group–that
        “epoch authenticator” we mentioned earlier. It will change as users join
        and leave the call, and it can be compared out-of-band to ensure that
        nobody in the call is being impersonated.
      </p>
      <figure
        style="max-width: 1080px"
        class="w-richtext-align-fullwidth w-richtext-figure-type-image"
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/66e885f86afc31b3eb451113_AD_4nXc8QwJsXJDM2KsgWaczzC6Jc4V3FhYJWdmHN1bF3GLtVq56bSHqaZi2olWIn99LE9D1dJVbCP7lzNT6eurTFhxYql52FZoLS2n3or_s1qlcZj-YHyxF8CTsuKGZhn3w-xrqa8Xlh157rmZmbFfRKqZrCP0.png"
            loading="lazy"
            alt="Discord user interface of a user’s verification codes for a call."
          />
        </div>
      </figure>
      <p>
        <br />You can also view a pairwise
        <strong>Verification Code</strong> for each of the other users in your
        audio and video call, and can undergo an out-of-band verification
        process to confirm that the other user is who you expect. The successful
        completion of this process will locally store the public identity key
        for the verified user.&nbsp; The stored verification of another device
        may or may not persist between multiple calls, and this depends on
        whether the identity key presented by the other device is “persistent.”
      </p>
    </div>
  </div>
  <div id="heading-6" class="rich-wrapper">
    <div class="blog-post-content w-richtext">
      <h2>
        <strong>What Happens Next?<br /></strong>
      </h2>
      <p>
        We know that this is a significant change for our external developer
        community, and from the start, we’ve prioritized making this transition
        as easy as possible. For more information,
        <a href="http://github.com/discord/dave-protocol"
          >the protocol whitepaper</a
        >, <a href="http://github.com/discord/libdave">open-source library</a>,
        and
        <a href="https://discord.com/developers/docs/topics/voice-connections"
          >our updated voice websocket documentation</a
        >
        are all now available.
      </p>
      <p>
        If you’d like to review the protocol and provide your feedback, we
        recommend diving into
        <a href="https://github.com/discord/dave-protocol"
          >the protocol whitepaper</a
        >
        and the Trail of Bits
        <a
          href="https://github.com/trailofbits/publications/blob/master/reviews/2024-08-discord-dave-protocol-designreview.pdf"
          >design review</a
        >
        and
        <a
          href="https://github.com/trailofbits/publications/blob/master/reviews/2024-09-discord-dave-protocol-codereview.pdf"
          >implementation review</a
        >. In addition, our
        <a href="https://discord.com/security">HackerOne program</a> now also
        includes monetary rewards for successful vulnerability reports related
        to the DAVE protocol.
      </p>
      <p>
        We understand that not everyone uses Discord in the same way, and people
        have different expectations of privacy in each space they’re in. As we
        continue to work to protect the privacy of our users, we’ll also keep
        investing heavily in safety features, technologies, and systems that put
        users in control of their experience.
      </p>
      <p>
        Finally, while we’ve spent the last year testing and refining the DAVE
        protocol, we’ll continue to update our documentation as we expand
        support to other surfaces and identify opportunities for improvement.
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
