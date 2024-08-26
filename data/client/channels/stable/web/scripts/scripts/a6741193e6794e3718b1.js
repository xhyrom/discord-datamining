"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18831"],
  {
    170143: function (E) {
      E.exports = "/assets/cffa9b7714f321c8cc60.png";
    },
    384725: function (E, _, I) {
      var A = I(735250);
      I(470079);
      var O = I(481060),
        T = I(570140);
      _.Z = {
        open(E) {
          T.Z.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: E }),
            (0, O.openModalLazy)(async () => {
              let { default: _ } = await I.e("65652").then(I.bind(I, 208265));
              return (I) => (0, A.jsx)(_, { classificationId: E, ...I });
            });
        },
        close() {
          T.Z.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
        },
      };
    },
    188879: function (E, _, I) {
      var A = I(735250),
        O = I(470079),
        T = I(286379),
        S = I(692547),
        C = I(481060),
        N = I(442837),
        D = I(797614),
        R = I(706454),
        e = I(626135),
        V = I(219230),
        P = I(531441),
        i = I(788080),
        n = I(451284),
        t = I(613734),
        L = I(846488),
        a = I(384725),
        l = I(97568),
        s = I(800530),
        o = I(981631),
        M = I(689938),
        r = I(298198);
      let U = (E) => {
          let { classificationTypeText: _, guildMetadata: I } = E,
            T = (0, V.B)("classification_detail"),
            S = O.useMemo(() => {
              let E = {
                classification_type: _,
                classificationHook: (E, _) =>
                  (0, A.jsx)("strong", { children: E }, _),
              };
              return T && null != I
                ? (null == I ? void 0 : I.member_type) === P.wO.OWNER
                  ? M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format(
                      { ...E, guildName: null == I ? void 0 : I.name },
                    )
                  : M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format(
                      { ...E, guildName: null == I ? void 0 : I.name },
                    )
                : M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(
                    E,
                  );
            }, [_, I, T]);
          return (0, A.jsx)("div", {
            className: r.classificationHeader,
            children: (0, A.jsx)(C.Heading, {
              variant: "heading-xl/normal",
              children: S,
            }),
          });
        },
        Y = (E) => {
          let { actions: _, classificationExpiration: I } = E,
            O = (0, N.e7)([R.default], () => R.default.locale);
          return 0 === _.filter((E) => E.descriptions.length > 0).length &&
            null == I
            ? null
            : (0, A.jsxs)("div", {
                className: r.classificationActionsTakenContainer,
                children: [
                  (0, A.jsx)(C.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children:
                      M.Z.Messages
                        .SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2,
                  }),
                  (0, A.jsxs)("ul", {
                    className: r.classificationActionsTakenList,
                    children: [
                      _.map((E) => (0, A.jsx)(c, { action: E }, E.id)),
                      null != I
                        ? (0, A.jsx)(
                            "li",
                            {
                              className: r.classificationActionsTakenRow,
                              children: (0, A.jsx)(C.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children:
                                  M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_VIOLATION_ACCOUNT_STATUS.format(
                                    {
                                      expirationDate: I.toLocaleDateString(O, {
                                        dateStyle: "medium",
                                      }),
                                    },
                                  ),
                              }),
                            },
                            "expiration",
                          )
                        : null,
                    ],
                  }),
                ],
              });
        },
        c = (E) => {
          let { action: _ } = E;
          return (0, A.jsx)(A.Fragment, {
            children: _.descriptions.map((E, _) =>
              (0, A.jsx)(
                "li",
                {
                  className: r.classificationActionsTakenRow,
                  children: (0, A.jsx)(C.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-normal",
                    children: E,
                  }),
                },
                _,
              ),
            ),
          });
        },
        G = (E) => {
          let { classificationTypeText: _, policyExplainerLink: I } = E;
          return (0, A.jsxs)(C.Anchor, {
            href: I,
            className: r.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, A.jsx)("div", {
                className: r.classificationPolicyCardIcon,
                children: (0, A.jsx)(C.ShieldIcon, {
                  size: "md",
                  color: S.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, A.jsx)("div", {
                className: r.classificationPolicyDescriptionContainer,
                children: (0, A.jsx)(C.Text, {
                  variant: "text-md/normal",
                  children:
                    M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format(
                      { classificationDescription: _ },
                    ),
                }),
              }),
              (0, A.jsx)("div", {
                className: r.classificationPolicyLinkIcon,
                children: (0, A.jsx)(C.ChevronSmallRightIcon, {
                  size: "md",
                  color: S.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        d = () =>
          (0, A.jsx)(C.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children:
              M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS,
          }),
        F = (E) =>
          (0, A.jsx)(C.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children:
              M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format(
                {
                  letUsKnowHook: (_, I) =>
                    (0, A.jsx)(
                      C.Anchor,
                      {
                        href: E.isAppealEligible ? void 0 : E.appealLink,
                        onClick: E.letUsKnowClick,
                        children: _,
                      },
                      I,
                    ),
                },
              ),
          }),
        u = (E) =>
          (0, A.jsx)("div", {
            className: r.classificationLetUsKnowContainer,
            children: E.hasBeenAppealed
              ? (0, A.jsx)(d, {})
              : (0, A.jsx)(F, {
                  appealLink: s.sQ.APPEALS_LINK,
                  letUsKnowClick: E.onLetUsKnowClick,
                  isAppealEligible: E.isAppealEligible,
                }),
          }),
        m = (E) => {
          let {
            tosLink: _,
            communityGuidelinesLink: I,
            classificationTypeText: O,
            policyExplainerLink: T,
            appealComponent: S,
          } = E;
          return (0, A.jsxs)("div", {
            className: r.classificationActionExplanationContainer,
            children: [
              (0, A.jsx)(C.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children:
                  M.Z.Messages
                    .SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER,
              }),
              (0, A.jsx)(C.Text, {
                className: r.guidelinesExplanation,
                variant: "text-sm/normal",
                children:
                  M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format(
                    { tosLink: _, communityGuidelinesLink: I },
                  ),
              }),
              (0, A.jsx)(G, {
                classificationTypeText: O,
                policyExplainerLink: T,
              }),
              S,
            ],
          });
        };
      _.Z = (E) => {
        var _;
        let { classificationId: I, source: S, onError: C } = E,
          {
            classification: N,
            classificationRequestState: R,
            isAppealEligible: V,
            isDsaEligible: M,
            violationType: c,
          } = (0, t.YG)(I),
          G = (0, n.P)(),
          d =
            null != N &&
            null != N.flagged_content &&
            N.flagged_content.length > 0,
          F = (0, L.e)();
        return (O.useEffect(() => {
          F &&
            e.default.track(o.rMx.SAFETY_HUB_ACTION, {
              action: s.n0.ViewViolationDetail,
              account_standing: G.state,
              classification_ids: [Number(I)],
              source: S,
              is_violative_content_shown: d,
              is_dsa_eligible: M,
              violation_type: c,
            });
        }, [F]),
        null == N && R === P.OY.FAILED)
          ? (C(), null)
          : null == N
            ? null
            : (0, A.jsxs)("div", {
                className: r.classificationContainer,
                children: [
                  (0, A.jsx)(U, {
                    classificationTypeText: N.description,
                    guildMetadata: null == N ? void 0 : N.guild_metadata,
                  }),
                  (0, A.jsx)(l.s, {
                    flaggedContent:
                      null !== (_ = N.flagged_content) && void 0 !== _ ? _ : [],
                  }),
                  (0, A.jsx)(Y, {
                    actions: N.actions,
                    classificationExpiration: (0, i.Pu)(N),
                  }),
                  (0, A.jsx)(m, {
                    classificationTypeText: N.description,
                    tosLink: s.sQ.TOS_LINK,
                    communityGuidelinesLink: s.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: N.explainer_link,
                    appealComponent: (0, A.jsx)(u, {
                      hasBeenAppealed: null != N.appeal_status,
                      onLetUsKnowClick: () => {
                        e.default.track(o.rMx.SAFETY_HUB_ACTION, {
                          action: s.n0.ClickLetUsKnow,
                          account_standing: G.state,
                          classification_ids: [Number(I)],
                          source: S,
                          is_violative_content_shown: d,
                          is_dsa_eligible: M,
                          violation_type: c,
                        }),
                          V &&
                            (D.Z.increment({ name: T.V.APPEAL_INGESTION_VIEW }),
                            a.Z.open(I));
                      },
                      isAppealEligible: V,
                    }),
                  }),
                ],
              });
      };
    },
    41164: function (E, _, I) {
      I.r(_);
      var A = I(735250);
      I(470079);
      var O = I(481060),
        T = I(230711),
        S = I(181211),
        C = I(188879),
        N = I(981631),
        D = I(726985),
        R = I(689938),
        e = I(729129),
        V = I(170143);
      _.default = (E) => {
        let {
            transitionState: _,
            onClose: I,
            classificationId: P,
            source: i,
          } = E,
          n = (0, S.Z)(),
          t = () => {
            I(),
              T.Z.open(N.oAB.PRIVACY_AND_SAFETY, D.s6.PRIVACY_ACCOUNT_STANDING);
          };
        return (0, A.jsxs)(O.ModalRoot, {
          className: e.modalRoot,
          transitionState: _,
          children: [
            (0, A.jsxs)("div", {
              className: e.modalHeader,
              children: [
                (0, A.jsx)("img", { className: e.image, src: V, alt: "" }),
                (0, A.jsx)(O.ModalCloseButton, {
                  className: e.modalClose,
                  onClick: I,
                }),
              ],
            }),
            (0, A.jsx)(O.ModalContent, {
              className: e.modalContent,
              children: n
                ? (0, A.jsx)(O.Spinner, {})
                : (0, A.jsx)(C.Z, {
                    classificationId: P,
                    source: i,
                    onError: t,
                  }),
            }),
            (0, A.jsx)(O.ModalFooter, {
              children: (0, A.jsx)(O.Button, {
                className: e.__invalid_button,
                type: "button",
                color: O.Button.Colors.BRAND,
                onClick: t,
                children:
                  R.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2,
              }),
            }),
          ],
        });
      };
    },
    97568: function (E, _, I) {
      I.d(_, {
        s: function () {
          return N;
        },
      });
      var A = I(735250);
      I(470079);
      var O = I(481060),
        T = I(621145),
        S = I(689938),
        C = I(473860);
      let N = (E) => {
        let { flaggedContent: _ } = E;
        return 0 === _.length
          ? null
          : (0, A.jsxs)("div", {
              className: C.classificationEvidenceContainer,
              children: [
                (0, A.jsx)(O.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children:
                    S.Z.Messages
                      .SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER,
                }),
                (0, A.jsx)(T.Z, { flaggedContent: _ }),
              ],
            });
      };
    },
    621145: function (E, _, I) {
      I.d(_, {
        Z: function () {
          return m;
        },
      }),
        I(47120),
        I(773603);
      var A = I(735250),
        O = I(470079),
        T = I(392711),
        S = I(442837),
        C = I(481060),
        N = I(640108),
        D = I(406432),
        R = I(169525),
        e = I(786761),
        V = I(3148),
        P = I(492593),
        i = I(219797),
        n = I(524444),
        t = I(884182),
        L = I(546432),
        a = I(25015),
        l = I(963550),
        s = I(845080),
        o = I(594174),
        M = I(956664),
        r = I(709054),
        U = I(788080),
        Y = I(800530),
        c = I(981631),
        G = I(217702),
        d = I(499712);
      let F = (E, _) => {
          let I = E.attachments.map((E) => {
            var I, A, O, T;
            let S = { ...E, filename: (0, U.eS)(E), size: 0, proxy_url: E.url };
            if (!((0, D.CO)(E.filename) || (0, D.NU)(E.filename))) return S;
            return {
              ...S,
              width:
                null !==
                  (O =
                    null === (I = _[E.id]) || void 0 === I
                      ? void 0
                      : I.width) && void 0 !== O
                  ? O
                  : Y.Sv,
              height:
                null !==
                  (T =
                    null === (A = _[E.id]) || void 0 === A
                      ? void 0
                      : A.height) && void 0 !== T
                  ? T
                  : Y.EY,
            };
          });
          return (0, e.e5)({
            ...(0, V.ZP)({
              nonce: E.id,
              content: E.content,
              type: c.uaV.DEFAULT,
              channelId: c.lds,
            }),
            timestamp: new Date(r.default.extractTimestamp(E.id)).toISOString(),
            attachments: I,
            state: c.yb.SENT,
          });
        },
        u = (E) => {
          let { message: _ } = E,
            { attachments: I } = _;
          if (0 === I.length) return null;
          let O = (E, _, I) => {
              let O = Y.Sv,
                S = Y.EY;
              if (null != _.width && null != _.height) {
                let E = (0, M.Dc)({
                  width: _.width,
                  height: _.height,
                  maxWidth: Y.Sv,
                  maxHeight: Y.EY,
                });
                (O = (0, T.clamp)(Math.round(_.width * E), 0, Y.Sv)),
                  (S = (0, T.clamp)(Math.round(_.height * E), 0, Y.EY));
              }
              return (0, A.jsx)("div", {
                style: { width: I ? O : "100%", height: I ? S : "100%" },
                children: (0, A.jsx)(N.ZP, {
                  className: E.className,
                  forceExternal: !1,
                  src: _.url,
                  width: I ? O : "100%",
                  height: I ? S : "100%",
                  responsive: !0,
                  volume: E.volume,
                  autoPlay: !1,
                  autoMute: !1,
                  type: N.ZP.Types.VIDEO,
                  mediaLayoutType: E.mediaLayoutType,
                  fileName: _.filename,
                  fileSize: null == _.size ? void 0 : _.size.toString(),
                  playable: !0,
                  renderLinkComponent: n.iT,
                  onClick: E.onClick,
                  onPlay: E.onPlay,
                  onEnded: E.onEnded,
                  onVolumeChange: E.onVolumeChange,
                  onMute: E.onMute,
                  downloadable: !1,
                }),
              });
            },
            S = 1 === I.length;
          function C(E, _) {
            return (0, R.dn)(E.originalItem, _);
          }
          return (0, A.jsx)("div", {
            className: d.classificationEvidenceMessageAttachment,
            children: (0, A.jsx)(t.Z, {
              items: I.map((E) => ({
                item: {
                  uniqueId: E.id,
                  originalItem: E,
                  type: (0, L.aw)(E, !0),
                  downloadUrl: E.proxy_url,
                  height: E.height,
                  width: E.width,
                  spoiler: E.spoiler,
                  contentType: E.content_type,
                },
                message: _,
                mediaLayoutType: G.hV.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: S,
                onRemoveItem: T.noop,
                renderVideoComponent: (_) => O(_, E, S),
                renderImageComponent: (E) =>
                  (0, A.jsx)(i.dS, {
                    ...E,
                    hiddenSpoilers: !0,
                    shouldHideMediaOptions: !0,
                    shouldLink: !1,
                  }),
                renderAudioComponent: i.q7,
                renderPlaintextFilePreview: i.d4,
                renderGenericFileComponent: i.ZK,
                renderMosaicItemFooter: i.L9,
                getObscureReason: C,
                gifFavoriteButton: () => null,
              })),
            }),
          });
        };
      function m(E) {
        var _;
        let { flaggedContent: I } = E,
          T = (0, S.e7)([o.default], () => o.default.getCurrentUser()),
          [N, R] = O.useState({}),
          [e, V] = O.useState(!0),
          i = I[0],
          n = F(i, N),
          t = (0, a.Z)(n, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
          });
        return (O.useEffect(() => {
          Promise.all(
            i.attachments
              .filter((E) => {
                let { filename: _ } = E;
                return (0, D.CO)(_) || (0, D.NU)(_);
              })
              .map((E) => {
                var _;
                return ((_ = E),
                new Promise((E, I) => {
                  if ((0, D.CO)(_.filename)) {
                    let A = new Image();
                    (A.src = _.url),
                      (A.onload = () => {
                        E(A);
                      }),
                      (A.onerror = () => {
                        I();
                      });
                  } else if ((0, D.NU)(_.filename)) {
                    let A = document.createElement("video");
                    (A.src = _.url),
                      (A.onloadedmetadata = () => {
                        let _ = A.videoWidth;
                        E({ width: _, height: A.videoHeight });
                      }),
                      (A.onerror = () => {
                        I();
                      });
                  } else E({ width: 0, height: 0 });
                })).then((_) => R((I) => ({ ...I, [E.id]: _ })));
              }),
          ).finally(() => V(!1));
        }, [i.attachments]),
        "" === n.content && 0 === n.attachments.length)
          ? null
          : (0, A.jsx)("div", {
              className: d.classificationEvidenceCard,
              children: e
                ? (0, A.jsx)(C.Spinner, {})
                : (0, A.jsx)(P.Z, {
                    compact: !1,
                    childrenHeader: (0, s.Z)({
                      author: {
                        ...T,
                        colorString: "",
                        nick:
                          null !== (_ = null == T ? void 0 : T.username) &&
                          void 0 !== _
                            ? _
                            : "",
                      },
                      message: n,
                      channel: void 0,
                      guildId: void 0,
                      compact: !1,
                      animateAvatar: !1,
                      isGroupStart: !0,
                      roleIcon: void 0,
                      hideTimestamp: !1,
                    }),
                    childrenAccessories: (0, A.jsx)(u, { message: n }),
                    childrenMessageContent: (0, l.Z)({ message: n }, t.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
    726985: function (E, _, I) {
      var A, O;
      I.d(_, {
        CF: function () {
          return T;
        },
        QF: function () {
          return S;
        },
        s6: function () {
          return A;
        },
      }),
        ((O = A || (A = {})).SEARCH_NO_RESULTS = "SEARCH_NO_RESULTS"),
        (O.ACCOUNT = "ACCOUNT"),
        (O.ACCOUNT_PROFILE = "ACCOUNT_PROFILE"),
        (O.ACCOUNT_DISPLAY_NAME = "ACCOUNT_DISPLAY_NAME"),
        (O.ACCOUNT_PHONE_NUMBER = "ACCOUNT_PHONE_NUMBER"),
        (O.ACCOUNT_USERNAME = "ACCOUNT_USERNAME"),
        (O.ACCOUNT_EMAIL = "ACCOUNT_EMAIL"),
        (O.ACCOUNT_PASSWORD_AND_AUTHENTICATION =
          "ACCOUNT_PASSWORD_AND_AUTHENTICATION"),
        (O.ACCOUNT_MULTI_FACTOR_AUTHENTICATION =
          "ACCOUNT_MULTI_FACTOR_AUTHENTICATION"),
        (O.ACCOUNT_CHANGE_PASSWORD = "ACCOUNT_CHANGE_PASSWORD"),
        (O.ACCOUNT_CONFIRM_PASSWORD = "ACCOUNT_CONFIRM_PASSWORD"),
        (O.ACCOUNT_ENABLE_2FA = "ACCOUNT_ENABLE_2FA"),
        (O.ACCOUNT_REMOVE_2FA = "ACCOUNT_REMOVE_2FA"),
        (O.ACCOUNT_VIEW_BACKUP_CODES = "ACCOUNT_VIEW_BACKUP_CODES"),
        (O.ACCOUNT_SMS_BACKUP = "ACCOUNT_SMS_BACKUP"),
        (O.ACCOUNT_SECURITY_KEYS = "ACCOUNT_SECURITY_KEYS"),
        (O.ACCOUNT_REMOVAL = "ACCOUNT_REMOVAL"),
        (O.ACCOUNT_DELETE_ACCOUNT = "ACCOUNT_DELETE_ACCOUNT"),
        (O.ACCOUNT_DISABLE_ACCOUNT = "ACCOUNT_DISABLE_ACCOUNT"),
        (O.GAMES = "GAMES"),
        (O.GAMES_MY_GAMES = "GAMES_MY_GAMES"),
        (O.GAMES_CLIPS = "GAMES_CLIPS"),
        (O.GAMES_OVERLAY = "GAMES_OVERLAY"),
        (O.GAMES_ACTIVITY_PRIVACY = "GAMES_ACTIVITY_PRIVACY"),
        (O.PROFILE_CUSTOMIZATION = "PROFILE_CUSTOMIZATION"),
        (O.PROFILE_DISPLAY_NAME = "PROFILE_DISPLAY_NAME"),
        (O.PROFILE_USER_PROFILE = "PROFILE_USER_PROFILE"),
        (O.PROFILE_SERVER_PROFILES = "PROFILE_SERVER_PROFILES"),
        (O.PRIVACY_AND_SAFETY = "PRIVACY_AND_SAFETY"),
        (O.PRIVACY_USER_SETTINGS = "PRIVACY_USER_SETTINGS"),
        (O.PRIVACY_SENSITIVE_MEDIA = "PRIVACY_SENSITIVE_MEDIA"),
        (O.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER =
          "PRIVACY_DIRECT_MESSAGE_SPAM_FILTER"),
        (O.PRIVACY_KEYWORD_FILTER = "PRIVACY_KEYWORD_FILTER"),
        (O.PRIVACY_SERVER_PRIVACY_DEFAULTS = "PRIVACY_SERVER_PRIVACY_DEFAULTS"),
        (O.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS =
          "PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS"),
        (O.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS =
          "PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS"),
        (O.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS =
          "PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS"),
        (O.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS =
          "PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS"),
        (O.PRIVACY_SERVER_SPECIFIC_SETTINGS =
          "PRIVACY_SERVER_SPECIFIC_SETTINGS"),
        (O.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS =
          "PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS"),
        (O.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS =
          "PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS"),
        (O.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS =
          "PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS"),
        (O.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING =
          "PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING"),
        (O.PRIVACY_DATA_PRIVACY = "PRIVACY_DATA_PRIVACY"),
        (O.PRIVACY_DATA_IMPROVE_DISCORD = "PRIVACY_DATA_IMPROVE_DISCORD"),
        (O.PRIVACY_DATA_PERSONALIZE = "PRIVACY_DATA_PERSONALIZE"),
        (O.PRIVACY_DATA_QUESTS = "PRIVACY_DATA_QUESTS"),
        (O.PRIVACY_DATA_BASIC_SERVICE = "PRIVACY_DATA_BASIC_SERVICE"),
        (O.PRIVACY_DATA_REQUEST = "PRIVACY_DATA_REQUEST"),
        (O.PRIVACY_TERMS_POLICY = "PRIVACY_TERMS_POLICY"),
        (O.PRIVACY_STAFF_ONLY = "PRIVACY_STAFF_ONLY"),
        (O.PRIVACY_ACCOUNT_STANDING = "PRIVACY_ACCOUNT_STANDING"),
        (O.PRIVACY_FAMILY_CENTER = "PRIVACY_FAMILY_CENTER"),
        (O.PRIVACY_SAFETY_ALERTS = "PRIVACY_SAFETY_ALERTS"),
        (O.PRIVACY_ENCRYPTION = "PRIVACY_ENCRYPTION"),
        (O.PRIVACY_ENCRYPTION_VERIFICATION_CODES =
          "PRIVACY_ENCRYPTION_VERIFICATION_CODES"),
        (O.PRIVACY_ENCRYPTION_VERIFIED_DEVICES =
          "PRIVACY_ENCRYPTION_VERIFIED_DEVICES"),
        (O.AUTHORIZED_APPS = "AUTHORIZED_APPS"),
        (O.SESSIONS = "SESSION"),
        (O.CONNECTIONS = "CONNECTIONS"),
        (O.CONNECTIONS_CONNECTED_ACCOUNTS = "CONNECTIONS_CONNECTED_ACCOUNTS"),
        (O.CLIPS = "CLIPS"),
        (O.FRIEND_REQUESTS = "FRIEND_REQUESTS"),
        (O.PREMIUM = "PREMIUM"),
        (O.GUILD_BOOSTING = "GUILD_BOOSTING"),
        (O.SUBSCRIPTIONS = "SUBSCRIPTIONS"),
        (O.SUBSCRIPTIONS_CREDITS = "SUBSCRIPTIONS_CREDITS"),
        (O.GIFT_INVENTORY = "GIFT_INVENTORY"),
        (O.GIFT_NITRO = "GIFT_NITRO"),
        (O.GIFT_CODE_REDEMPTION = "GIFT_CODE_REDEMPTION"),
        (O.GIFT_INVENTORY_QUESTS = "GIFT_INVENTORY_QUESTS"),
        (O.GIFT_INVENTORY_LIST = "GIFT_INVENTORY_LIST"),
        (O.GIFT_BLOCKED_PAYMENTS = "GIFT_BLOCKED_PAYMENTS"),
        (O.BILLING = "BILLING"),
        (O.BILLING_PAYMENT_METHODS = "BILLING_PAYMENT_METHODS"),
        (O.BILLING_TRANSACTION_HISTORY = "BILLING_TRANSACTION_HISTORY"),
        (O.APPEARANCE = "APPEARANCE"),
        (O.APPEARANCE_THEME = "APPEARANCE_THEME"),
        (O.APPEARANCE_COLOR = "APPEARANCE_COLOR"),
        (O.APPEARANCE_ICON = "APPEARANCE_ICON"),
        (O.APPEARANCE_MESSAGE_DISPLAY_COMPACT =
          "APPEARANCE_MESSAGE_DISPLAY_COMPACT"),
        (O.APPEARANCE_SCALING_SPACING = "APPEARANCE_SCALING_SPACING"),
        (O.ACCESSIBILITY = "ACCESSIBILITY"),
        (O.ACCESSIBILITY_SATURATION = "ACCESSIBILITY_SATURATION"),
        (O.ACCESSIBILITY_LINK_DECORATIONS = "ACCESSIBILITY_LINK_DECORATIONS"),
        (O.ACCESSIBILITY_ROLE_STYLE = "ACCESSIBILITY_ROLE_STYLE"),
        (O.ACCESSIBILITY_TAGS = "ACCESSIBILITY_TAGS"),
        (O.ACCESSIBILITY_SYNC_PROFILE_THEME =
          "ACCESSIBILITY_SYNC_PROFILE_THEME"),
        (O.ACCESSIBILITY_CONTRAST = "ACCESSIBILITY_CONTRAST"),
        (O.ACCESSIBILITY_REDUCED_MOTION = "ACCESSIBILITY_REDUCED_MOTION"),
        (O.ACCESSIBILITY_STICKERS = "ACCESSIBILITY_STICKERS"),
        (O.ACCESSIBILITY_MESSAGES = "ACCESSIBILITY_MESSAGES"),
        (O.ACCESSIBILITY_TEXT_TO_SPEECH = "ACCESSIBILITY_TEXT_TO_SPEECH"),
        (O.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (O.VOICE_AND_VIDEO_DEVICES = "VOICE_AND_VIDEO_DEVICES"),
        (O.VOICE_AND_VIDEO_VOLUME_CONTROLS = "VOICE_AND_VIDEO_VOLUME_CONTROLS"),
        (O.VOICE_AND_VIDEO_MIC_TEST = "VOICE_AND_VIDEO_MIC_TEST"),
        (O.VOICE_AND_VIDEO_INPUT_MODE = "VOICE_AND_VIDEO_INPUT_MODE"),
        (O.VOICE_AND_VIDEO_SENSITIVITY = "VOICE_AND_VIDEO_SENSITIVITY"),
        (O.VOICE_AND_VIDEO_SOUNDBOARD = "VOICE_AND_VIDEO_SOUNDBOARD"),
        (O.VOICE_AND_VIDEO_SOUNDS = "VOICE_AND_VIDEO_SOUNDS"),
        (O.VOICE_AND_VIDEO_ENTRANCE_SOUNDS = "VOICE_AND_VIDEO_ENTRANCE_SOUNDS"),
        (O.VOICE_AND_VIDEO_VIDEO = "VOICE_AND_VIDEO_VIDEO"),
        (O.VOICE_AND_VIDEO_VIDEO_CAMERA = "VOICE_AND_VIDEO_VIDEO_CAMERA"),
        (O.VOICE_AND_VIDEO_ADVANCED = "VOICE_AND_VIDEO_ADVANCED"),
        (O.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO =
          "VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO"),
        (O.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO =
          "VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO"),
        (O.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264 =
          "VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264"),
        (O.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION =
          "VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION"),
        (O.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS =
          "VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS"),
        (O.VOICE_AND_VIDEO_ADVANCED_PROCESSING =
          "VOICE_AND_VIDEO_ADVANCED_PROCESSING"),
        (O.VOICE_AND_VIDEO_STREAM_PREVIEWS = "VOICE_AND_VIDEO_STREAM_PREVIEWS"),
        (O.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION =
          "VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION"),
        (O.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION =
          "VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION"),
        (O.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY =
          "VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY"),
        (O.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL =
          "VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL"),
        (O.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION =
          "VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION"),
        (O.VOICE_AND_VIDEO_ADVANCED_QOS = "VOICE_AND_VIDEO_ADVANCED_QOS"),
        (O.VOICE_AND_VIDEO_ADVANCED_ATTENUATION =
          "VOICE_AND_VIDEO_ADVANCED_ATTENUATION"),
        (O.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM =
          "VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM"),
        (O.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING =
          "VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING"),
        (O.VOICE_AND_VIDEO_ADVANCED_DEBUGGING =
          "VOICE_AND_VIDEO_ADVANCED_DEBUGGING"),
        (O.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY =
          "VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY"),
        (O.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP =
          "VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP"),
        (O.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY =
          "VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY"),
        (O.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING =
          "VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING"),
        (O.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS =
          "VOICE_AND_VIDEO_RESET_VOICE_SETTINGS"),
        (O.POGGERMODE = "POGGERMODE"),
        (O.CHAT = "CHAT"),
        (O.CHAT_INLINE_MEDIA = "CHAT_INLINE_MEDIA"),
        (O.CHAT_INLINE_MEDIA_LINKS = "CHAT_INLINE_MEDIA_LINKS"),
        (O.CHAT_INLINE_MEDIA_UPLOADS = "CHAT_INLINE_MEDIA_UPLOADS"),
        (O.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS =
          "CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS"),
        (O.CHAT_EMBEDS = "CHAT_EMBEDS"),
        (O.CHAT_EMBEDS_LINK_PREVIEWS = "CHAT_EMBEDS_LINK_PREVIEWS"),
        (O.CHAT_EMOJI = "CHAT_EMOJI"),
        (O.CHAT_EMOJI_REACTIONS = "CHAT_EMOJI_REACTIONS"),
        (O.CHAT_EMOJI_EMOTICONS = "CHAT_EMOJI_EMOTICONS"),
        (O.CHAT_STICKERS = "CHAT_STICKERS"),
        (O.CHAT_STICKERS_SUGGESTIONS = "CHAT_STICKERS_SUGGESTIONS"),
        (O.CHAT_STICKERS_AUTOCOMPLETE = "CHAT_STICKERS_AUTOCOMPLETE"),
        (O.CHAT_TEXT_BOX = "CHAT_TEXT_BOX"),
        (O.CHAT_TEXT_BOX_PREVIEW = "CHAT_TEXT_BOX_PREVIEW"),
        (O.CHAT_THREADS = "CHAT_THREADS"),
        (O.CHAT_THREADS_SPLIT_VIEW = "CHAT_THREADS_SPLIT_VIEW"),
        (O.CHAT_SPOILERS = "CHAT_SPOILERS"),
        (O.NOTIFICATIONS = "NOTIFICATIONS"),
        (O.NOTIFICATIONS_ENABLE_DESKTOP = "NOTIFICATIONS_ENABLE_DESKTOP"),
        (O.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES =
          "NOTIFICATIONS_MENTION_ON_ALL_MESSAGES"),
        (O.NOTIFICATIONS_UNREAD_MESSAGE_BADGE =
          "NOTIFICATIONS_UNREAD_MESSAGE_BADGE"),
        (O.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING =
          "NOTIFICATIONS_ENABLE_TASKBAR_FLASHING"),
        (O.NOTIFICATIONS_UNREAD_SETTINGS = "NOTIFICATIONS_UNREAD_SETTINGS"),
        (O.NOTIFICATIONS_NEW_SETTINGS = "NOTIFICATIONS_NEW_SETTINGS"),
        (O.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT =
          "NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT"),
        (O.NOTIFICATIONS_LAUNCH_MIGRATION = "NOTIFICATIONS_LAUNCH_MIGRATION"),
        (O.NOTIFICATIONS_TOGGLE_NEW_SYSTEM = "NOTIFICATIONS_TOGGLE_NEW_SYSTEM"),
        (O.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT =
          "NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT"),
        (O.NOTIFICATIONS_TEXT_TO_SPEECH = "NOTIFICATIONS_TEXT_TO_SPEECH"),
        (O.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS =
          "NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS"),
        (O.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS =
          "NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS"),
        (O.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS =
          "NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS"),
        (O.NOTIFICATIONS_SOUNDS = "NOTIFICATIONS_SOUNDS"),
        (O.NOTIFICATIONS_EMAILS = "NOTIFICATION_EMAILS"),
        (O.NOTIFICATIONS_EMAILS_COMMUNICATION =
          "NOTIFICATIONS_EMAILS_COMMUNICATION"),
        (O.NOTIFICATIONS_EMAILS_SOCIAL = "NOTIFICATIONS_EMAILS_SOCIAL"),
        (O.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES =
          "NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES"),
        (O.NOTIFICATIONS_EMAILS_TIPS = "NOTIFICATIONS_EMAILS_TIPS"),
        (O.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS =
          "NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS"),
        (O.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS =
          "NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS"),
        (O.KEYBINDS = "KEYBINDS"),
        (O.LANGUAGE = "LANGUAGE"),
        (O.WINDOW_SETTINGS = "WINDOW_SETTINGS"),
        (O.LINUX_SETTINGS = "LINUX_SETTINGS"),
        (O.STREAMER_MODE = "STREAMER_MODE"),
        (O.STREAMER_MODE_ENABLE = "STREAMER_MODE_ENABLE"),
        (O.STREAMER_MODE_HIDE_PERSONAL_INFORMATION =
          "STREAMER_MODE_HIDE_PERSONAL_INFORMATION"),
        (O.STREAMER_MODE_HIDE_INVITE_LINKS = "STREAMER_MODE_HIDE_INVITE_LINKS"),
        (O.STREAMER_MODE_DISABLE_SOUNDS = "STREAMER_MODE_DISABLE_SOUNDS"),
        (O.STREAMER_MODE_DISABLE_NOTIFICATIONS =
          "STREAMER_MODE_DISABLE_NOTIFICATIONS"),
        (O.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE =
          "STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE"),
        (O.STREAMER_MODE_INTEGRATIONS = "STREAMER_MODE_INTEGRATIONS"),
        (O.SETTINGS_ADVANCED = "SETTINGS_ADVANCED"),
        (O.SETTINGS_ADVANCED_DEVELOPER_MODE =
          "SETTINGS_ADVANCED_DEVELOPER_MODE"),
        (O.SETTINGS_ADVANCED_HARDWARE_ACCELERATION =
          "SETTINGS_ADVANCED_HARDWARE_ACCELERATION"),
        (O.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY =
          "SETTINGS_ADVANCED_SHOW_GAME_LIBRARY"),
        (O.SETTINGS_ADVANCED_APPLICATION_TEST_MODE =
          "SETTINGS_ADVANCED_APPLICATION_TEST_MODE"),
        (O.ACTIVITY_PRIVACY = "ACTIVITY_PRIVACY"),
        (O.ACTIVITY_PRIVACY_STATUS = "ACTIVITY_PRIVACY_STATUS"),
        (O.ACTIVITY_PRIVACY_RICH_PRESENCE = "ACTIVITY_PRIVACY_RICH_PRESENCE"),
        (O.ACTIVITY_PRIVACY_BROADCASTING = "ACTIVITY_PRIVACY_BROADCASTING"),
        (O.ACTIVITY_PRIVACY_TOS = "ACTIVITY_PRIVACY_TOS"),
        (O.REGISTERED_GAMES = "REGISTERED_GAMES"),
        (O.OVERLAY = "OVERLAY"),
        (O.CHANGELOG = "CHANGELOG"),
        (O.MERCHANDISE = "MERCHANDISE"),
        (O.HYPESQUAD = "HYPESQUAD"),
        (O.EXPERIMENTS = "EXPERIMENTS"),
        (O.DEVELOPER_OPTIONS = "DEVELOPER_OPTIONS"),
        (O.DEVELOPER_OPTIONS_FLAGS = "DEVELOPER_OPTIONS_FLAGS"),
        (O.DEVELOPER_OPTIONS_TRACING_REQUESTS =
          "DEVELOPER_OPTIONS_TRACING_REQUESTS"),
        (O.DEVELOPER_OPTIONS_FORCED_CANARY = "DEVELOPER_OPTIONS_FORCED_CANARY"),
        (O.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE =
          "DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE"),
        (O.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS =
          "DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS"),
        (O.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING =
          "DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING"),
        (O.DEVELOPER_OPTIONS_SOURCE_MAPS = "DEVELOPER_OPTIONS_SOURCE_MAPS"),
        (O.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW =
          "DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW"),
        (O.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR =
          "DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR"),
        (O.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING =
          "DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING"),
        (O.DEVELOPER_OPTIONS_CSS_DEBUGGING = "DEVELOPER_OPTIONS_CSS_DEBUGGING"),
        (O.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING =
          "DEVELOPER_OPTIONS_LAYOUT_DEBUGGING"),
        (O.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS =
          "DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS"),
        (O.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS =
          "DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS"),
        (O.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE =
          "DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE"),
        (O.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE =
          "DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE"),
        (O.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA =
          "DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA"),
        (O.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY =
          "DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY"),
        (O.DEVELOPER_OPTIONS_RESET_SOCKET = "DEVELOPER_OPTIONS_RESET_SOCKET"),
        (O.DEVELOPER_OPTIONS_CLEAR_CACHES = "DEVELOPER_OPTIONS_CLEAR_CACHES"),
        (O.DEVELOPER_OPTIONS_CRASHES = "DEVELOPER_OPTIONS_CRASHES"),
        (O.DEVELOPER_OPTIONS_SURVEY_OVERRIDE =
          "DEVELOPER_OPTIONS_SURVEY_OVERRIDE"),
        (O.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE =
          "DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE"),
        (O.DEVELOPER_OPTIONS_BUILD_OVERRIDE =
          "DEVELOPER_OPTIONS_BUILD_OVERRIDE"),
        (O.HOTSPOT_OPTIONS = "HOTSPOT_OPTIONS"),
        (O.DISMISSIBLE_CONTENT_OPTIONS = "DISMISSIBLE_CONTENT_OPTIONS"),
        (O.PAYMENT_FLOW_MODALS = "PAYMENT_FLOW_MODALS"),
        (O.TEXT_PLAYGROUND = "TEXT_PLAYGROUND"),
        (O.DESIGN_SYSTEMS = "DESIGN_SYSTEMS"),
        (O.TEXT_COMPONENTS = "TEXT_COMPONENTS"),
        (O.INTL_TESTING = "INTL_TESTING"),
        (O.PROFILE_EFFECTS_PREVIEW_TOOL = "PROFILE_EFFECTS_PREVIEW_TOOL"),
        (O.QUEST_PREVIEW_TOOL = "QUEST_PREVIEW_TOOL"),
        (O.LOGOUT = "LOGOUT"),
        (O.SOCIAL_LINKS = "SOCIAL_LINKS"),
        (O.CLIENT_DEBUG_INFO = "CLIENT_DEBUG_INFO");
      let T = "",
        S = [];
    },
  },
]);
//# sourceMappingURL=a6741193e6794e3718b1.js.map
