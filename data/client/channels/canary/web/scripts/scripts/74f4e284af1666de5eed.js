"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18831"],
  {
    170143: function (e) {
      e.exports = "/assets/cffa9b7714f321c8cc60.png";
    },
    384725: function (e, i, n) {
      var t = n(735250);
      n(470079);
      var a = n(481060),
        l = n(570140);
      i.Z = {
        open(e) {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.openModalLazy)(async () => {
              let { default: i } = await n.e("65652").then(n.bind(n, 208265));
              return (n) => (0, t.jsx)(i, { classificationId: e, ...n });
            });
        },
        close() {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
        },
      };
    },
    188879: function (e, i, n) {
      var t = n(735250),
        a = n(470079),
        l = n(286379),
        s = n(692547),
        o = n(481060),
        r = n(442837),
        c = n(797614),
        d = n(706454),
        m = n(626135),
        u = n(219230),
        _ = n(531441),
        h = n(788080),
        A = n(451284),
        p = n(613734),
        x = n(846488),
        I = n(384725),
        E = n(97568),
        T = n(800530),
        g = n(981631),
        C = n(689938),
        f = n(300106);
      let S = (e) => {
          let { classificationTypeText: i, guildMetadata: n } = e,
            l = (0, u.B)("classification_detail"),
            s = a.useMemo(() => {
              let e = {
                classification_type: i,
                classificationHook: (e, i) =>
                  (0, t.jsx)("strong", { children: e }, i),
              };
              return l && null != n
                ? (null == n ? void 0 : n.member_type) === _.wO.OWNER
                  ? C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format(
                      { ...e, guildName: null == n ? void 0 : n.name },
                    )
                  : C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format(
                      { ...e, guildName: null == n ? void 0 : n.name },
                    )
                : C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(
                    e,
                  );
            }, [i, n, l]);
          return (0, t.jsx)("div", {
            className: f.classificationHeader,
            children: (0, t.jsx)(o.Heading, {
              variant: "heading-xl/normal",
              children: s,
            }),
          });
        },
        v = (e) => {
          let { actions: i, classificationExpiration: n } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
          return 0 === i.filter((e) => e.descriptions.length > 0).length &&
            null == n
            ? null
            : (0, t.jsxs)("div", {
                className: f.classificationActionsTakenContainer,
                children: [
                  (0, t.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children:
                      C.Z.Messages
                        .SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2,
                  }),
                  (0, t.jsxs)("ul", {
                    className: f.classificationActionsTakenList,
                    children: [
                      i.map((e) => (0, t.jsx)(N, { action: e }, e.id)),
                      null != n
                        ? (0, t.jsx)(
                            "li",
                            {
                              className: f.classificationActionsTakenRow,
                              children: (0, t.jsx)(o.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children:
                                  C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_VIOLATION_ACCOUNT_STATUS.format(
                                    {
                                      expirationDate: n.toLocaleDateString(a, {
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
        N = (e) => {
          let { action: i } = e;
          return (0, t.jsx)(t.Fragment, {
            children: i.descriptions.map((e, i) =>
              (0, t.jsx)(
                "li",
                {
                  className: f.classificationActionsTakenRow,
                  children: (0, t.jsx)(o.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-normal",
                    children: e,
                  }),
                },
                i,
              ),
            ),
          });
        },
        L = (e) => {
          let { classificationTypeText: i, policyExplainerLink: n } = e;
          return (0, t.jsxs)(o.Anchor, {
            href: n,
            className: f.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, t.jsx)("div", {
                className: f.classificationPolicyCardIcon,
                children: (0, t.jsx)(o.ShieldIcon, {
                  size: "md",
                  color: s.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, t.jsx)("div", {
                className: f.classificationPolicyDescriptionContainer,
                children: (0, t.jsx)(o.Text, {
                  variant: "text-md/normal",
                  children:
                    C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format(
                      { classificationDescription: i },
                    ),
                }),
              }),
              (0, t.jsx)("div", {
                className: f.classificationPolicyLinkIcon,
                children: (0, t.jsx)(o.ChevronSmallRightIcon, {
                  size: "md",
                  color: s.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        j = () =>
          (0, t.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children:
              C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS,
          }),
        y = (e) =>
          (0, t.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children:
              C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format(
                {
                  letUsKnowHook: (i, n) =>
                    (0, t.jsx)(
                      o.Anchor,
                      {
                        href: e.isAppealEligible ? void 0 : e.appealLink,
                        onClick: e.letUsKnowClick,
                        children: i,
                      },
                      n,
                    ),
                },
              ),
          }),
        O = (e) =>
          (0, t.jsx)("div", {
            className: f.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, t.jsx)(j, {})
              : (0, t.jsx)(y, {
                  appealLink: T.sQ.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        D = (e) => {
          let {
            tosLink: i,
            communityGuidelinesLink: n,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: s,
          } = e;
          return (0, t.jsxs)("div", {
            className: f.classificationActionExplanationContainer,
            children: [
              (0, t.jsx)(o.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children:
                  C.Z.Messages
                    .SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER,
              }),
              (0, t.jsx)(o.Text, {
                className: f.guidelinesExplanation,
                variant: "text-sm/normal",
                children:
                  C.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format(
                    { tosLink: i, communityGuidelinesLink: n },
                  ),
              }),
              (0, t.jsx)(L, {
                classificationTypeText: a,
                policyExplainerLink: l,
              }),
              s,
            ],
          });
        };
      i.Z = (e) => {
        var i;
        let { classificationId: n, source: s, onError: o } = e,
          {
            classification: r,
            classificationRequestState: d,
            isAppealEligible: u,
            isDsaEligible: C,
            violationType: N,
          } = (0, p.YG)(n),
          L = (0, A.P)(),
          j =
            null != r &&
            null != r.flagged_content &&
            r.flagged_content.length > 0,
          y = (0, x.e)();
        return (a.useEffect(() => {
          y &&
            m.default.track(g.rMx.SAFETY_HUB_ACTION, {
              action: T.n0.ViewViolationDetail,
              account_standing: L.state,
              classification_ids: [Number(n)],
              source: s,
              is_violative_content_shown: j,
              is_dsa_eligible: C,
              violation_type: N,
            });
        }, [y]),
        null == r && d === _.OY.FAILED)
          ? (o(), null)
          : null == r
            ? null
            : (0, t.jsxs)("div", {
                className: f.classificationContainer,
                children: [
                  (0, t.jsx)(S, {
                    classificationTypeText: r.description,
                    guildMetadata: null == r ? void 0 : r.guild_metadata,
                  }),
                  (0, t.jsx)(E.s, {
                    flaggedContent:
                      null !== (i = r.flagged_content) && void 0 !== i ? i : [],
                  }),
                  (0, t.jsx)(v, {
                    actions: r.actions,
                    classificationExpiration: (0, h.Pu)(r),
                  }),
                  (0, t.jsx)(D, {
                    classificationTypeText: r.description,
                    tosLink: T.sQ.TOS_LINK,
                    communityGuidelinesLink: T.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: r.explainer_link,
                    appealComponent: (0, t.jsx)(O, {
                      hasBeenAppealed: null != r.appeal_status,
                      onLetUsKnowClick: () => {
                        m.default.track(g.rMx.SAFETY_HUB_ACTION, {
                          action: T.n0.ClickLetUsKnow,
                          account_standing: L.state,
                          classification_ids: [Number(n)],
                          source: s,
                          is_violative_content_shown: j,
                          is_dsa_eligible: C,
                          violation_type: N,
                        }),
                          u &&
                            (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }),
                            I.Z.open(n));
                      },
                      isAppealEligible: u,
                    }),
                  }),
                ],
              });
      };
    },
    41164: function (e, i, n) {
      n.r(i);
      var t = n(735250);
      n(470079);
      var a = n(481060),
        l = n(230711),
        s = n(181211),
        o = n(188879),
        r = n(981631),
        c = n(726985),
        d = n(689938),
        m = n(105548),
        u = n(170143);
      i.default = (e) => {
        let {
            transitionState: i,
            onClose: n,
            classificationId: _,
            source: h,
          } = e,
          A = (0, s.Z)(),
          p = () => {
            n(),
              l.Z.open(r.oAB.PRIVACY_AND_SAFETY, c.s6.PRIVACY_ACCOUNT_STANDING);
          };
        return (0, t.jsxs)(a.ModalRoot, {
          className: m.modalRoot,
          transitionState: i,
          children: [
            (0, t.jsxs)("div", {
              className: m.modalHeader,
              children: [
                (0, t.jsx)("img", { className: m.image, src: u, alt: "" }),
                (0, t.jsx)(a.ModalCloseButton, {
                  className: m.modalClose,
                  onClick: n,
                }),
              ],
            }),
            (0, t.jsx)(a.ModalContent, {
              className: m.modalContent,
              children: A
                ? (0, t.jsx)(a.Spinner, {})
                : (0, t.jsx)(o.Z, {
                    classificationId: _,
                    source: h,
                    onError: p,
                  }),
            }),
            (0, t.jsx)(a.ModalFooter, {
              children: (0, t.jsx)(a.Button, {
                className: m.__invalid_button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: p,
                children:
                  d.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2,
              }),
            }),
          ],
        });
      };
    },
    97568: function (e, i, n) {
      n.d(i, {
        s: function () {
          return r;
        },
      });
      var t = n(735250);
      n(470079);
      var a = n(481060),
        l = n(621145),
        s = n(689938),
        o = n(246697);
      let r = (e) => {
        let { flaggedContent: i } = e;
        return 0 === i.length
          ? null
          : (0, t.jsxs)("div", {
              className: o.classificationEvidenceContainer,
              children: [
                (0, t.jsx)(a.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children:
                    s.Z.Messages
                      .SAFETY_HUB_CLASSIFICATION_DETAIL_EVIDENCE_HEADER,
                }),
                (0, t.jsx)(l.Z, { flaggedContent: i }),
              ],
            });
      };
    },
    621145: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return D;
        },
      }),
        n(47120),
        n(773603);
      var t = n(735250),
        a = n(470079),
        l = n(392711),
        s = n(442837),
        o = n(481060),
        r = n(640108),
        c = n(406432),
        d = n(169525),
        m = n(786761),
        u = n(499376),
        _ = n(3148),
        h = n(492593),
        A = n(219797),
        p = n(524444),
        x = n(884182),
        I = n(25015),
        E = n(963550),
        T = n(845080),
        g = n(594174),
        C = n(956664),
        f = n(709054),
        S = n(788080),
        v = n(800530),
        N = n(981631),
        L = n(217702),
        j = n(530124);
      let y = (e, i) => {
          let n = e.attachments.map((e) => {
            var n, t, a, l;
            let s = { ...e, filename: (0, S.eS)(e), size: 0, proxy_url: e.url };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return s;
            return {
              ...s,
              width:
                null !==
                  (a =
                    null === (n = i[e.id]) || void 0 === n
                      ? void 0
                      : n.width) && void 0 !== a
                  ? a
                  : v.Sv,
              height:
                null !==
                  (l =
                    null === (t = i[e.id]) || void 0 === t
                      ? void 0
                      : t.height) && void 0 !== l
                  ? l
                  : v.EY,
            };
          });
          return (0, m.e5)({
            ...(0, _.ZP)({
              nonce: e.id,
              content: e.content,
              type: N.uaV.DEFAULT,
              channelId: N.lds,
            }),
            timestamp: new Date(f.default.extractTimestamp(e.id)).toISOString(),
            attachments: n,
            state: N.yb.SENT,
          });
        },
        O = (e) => {
          let { message: i } = e,
            { attachments: n } = i;
          if (0 === n.length) return null;
          let a = (e, i, n) => {
              let a = v.Sv,
                s = v.EY;
              if (null != i.width && null != i.height) {
                let e = (0, C.Dc)({
                  width: i.width,
                  height: i.height,
                  maxWidth: v.Sv,
                  maxHeight: v.EY,
                });
                (a = (0, l.clamp)(Math.round(i.width * e), 0, v.Sv)),
                  (s = (0, l.clamp)(Math.round(i.height * e), 0, v.EY));
              }
              return (0, t.jsx)("div", {
                style: { width: n ? a : "100%", height: n ? s : "100%" },
                children: (0, t.jsx)(r.ZP, {
                  className: e.className,
                  forceExternal: !1,
                  src: i.url,
                  width: n ? a : "100%",
                  height: n ? s : "100%",
                  responsive: !0,
                  volume: e.volume,
                  autoPlay: !1,
                  autoMute: !1,
                  type: r.ZP.Types.VIDEO,
                  mediaLayoutType: e.mediaLayoutType,
                  fileName: i.filename,
                  fileSize: null == i.size ? void 0 : i.size.toString(),
                  playable: !0,
                  renderLinkComponent: p.iT,
                  onClick: e.onClick,
                  onPlay: e.onPlay,
                  onEnded: e.onEnded,
                  onVolumeChange: e.onVolumeChange,
                  onMute: e.onMute,
                  downloadable: !1,
                }),
              });
            },
            s = 1 === n.length;
          function o(e, i) {
            return (0, d.dn)(e.originalItem, i);
          }
          return (0, t.jsx)("div", {
            className: j.classificationEvidenceMessageAttachment,
            children: (0, t.jsx)(x.Z, {
              items: n.map((e) => ({
                item: {
                  uniqueId: e.id,
                  originalItem: e,
                  type: (0, u.aw)(e, !0),
                  downloadUrl: e.proxy_url,
                  height: e.height,
                  width: e.width,
                  spoiler: e.spoiler,
                  contentType: e.content_type,
                },
                message: i,
                mediaLayoutType: L.hV.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: s,
                onRemoveItem: l.noop,
                renderVideoComponent: (i) => a(i, e, s),
                renderImageComponent: (e) =>
                  (0, t.jsx)(A.dS, {
                    ...e,
                    hiddenSpoilers: !0,
                    shouldHideMediaOptions: !0,
                    shouldLink: !1,
                  }),
                renderAudioComponent: A.q7,
                renderPlaintextFilePreview: A.d4,
                renderGenericFileComponent: A.ZK,
                renderMosaicItemFooter: A.L9,
                getObscureReason: o,
                gifFavoriteButton: () => null,
              })),
            }),
          });
        };
      function D(e) {
        var i;
        let { flaggedContent: n } = e,
          l = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
          [r, d] = a.useState({}),
          [m, u] = a.useState(!0),
          _ = n[0],
          A = y(_, r),
          p = (0, I.Z)(A, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
          });
        return (a.useEffect(() => {
          Promise.all(
            _.attachments
              .filter((e) => {
                let { filename: i } = e;
                return (0, c.CO)(i) || (0, c.NU)(i);
              })
              .map((e) => {
                var i;
                return ((i = e),
                new Promise((e, n) => {
                  if ((0, c.CO)(i.filename)) {
                    let t = new Image();
                    (t.src = i.url),
                      (t.onload = () => {
                        e(t);
                      }),
                      (t.onerror = () => {
                        n();
                      });
                  } else if ((0, c.NU)(i.filename)) {
                    let t = document.createElement("video");
                    (t.src = i.url),
                      (t.onloadedmetadata = () => {
                        let i = t.videoWidth;
                        e({ width: i, height: t.videoHeight });
                      }),
                      (t.onerror = () => {
                        n();
                      });
                  } else e({ width: 0, height: 0 });
                })).then((i) => d((n) => ({ ...n, [e.id]: i })));
              }),
          ).finally(() => u(!1));
        }, [_.attachments]),
        "" === A.content && 0 === A.attachments.length)
          ? null
          : (0, t.jsx)("div", {
              className: j.classificationEvidenceCard,
              children: m
                ? (0, t.jsx)(o.Spinner, {})
                : (0, t.jsx)(h.Z, {
                    compact: !1,
                    childrenHeader: (0, T.Z)({
                      author: {
                        ...l,
                        colorString: "",
                        nick:
                          null !== (i = null == l ? void 0 : l.username) &&
                          void 0 !== i
                            ? i
                            : "",
                      },
                      message: A,
                      channel: void 0,
                      guildId: void 0,
                      compact: !1,
                      animateAvatar: !1,
                      isGroupStart: !0,
                      roleIcon: void 0,
                      hideTimestamp: !1,
                    }),
                    childrenAccessories: (0, t.jsx)(O, { message: A }),
                    childrenMessageContent: (0, E.Z)({ message: A }, p.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
  },
]);
//# sourceMappingURL=74f4e284af1666de5eed.js.map
