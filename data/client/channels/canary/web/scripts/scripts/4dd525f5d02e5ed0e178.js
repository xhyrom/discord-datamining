"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18831"],
  {
    170143: function (e) {
      e.exports = "/assets/cffa9b7714f321c8cc60.png";
    },
    384725: function (e, i, t) {
      var n = t(200651);
      t(192379);
      var a = t(481060),
        l = t(570140);
      i.Z = {
        open(e) {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.openModalLazy)(async () => {
              let { default: i } = await t.e("65652").then(t.bind(t, 208265));
              return (t) => (0, n.jsx)(i, { classificationId: e, ...t });
            });
        },
        close() {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
        },
      };
    },
    188879: function (e, i, t) {
      var n = t(200651),
        a = t(192379),
        l = t(286379),
        o = t(692547),
        s = t(481060),
        r = t(442837),
        c = t(797614),
        d = t(706454),
        m = t(626135),
        u = t(219230),
        h = t(531441),
        p = t(788080),
        x = t(451284),
        f = t(613734),
        g = t(846488),
        v = t(384725),
        j = t(97568),
        C = t(800530),
        _ = t(981631),
        N = t(388032),
        A = t(300106);
      let E = (e) => {
          let { classificationTypeText: i, guildMetadata: t } = e,
            l = (0, u.B)("classification_detail"),
            o = a.useMemo(() => {
              let e = {
                classification_type: i,
                classificationHook: (e, i) =>
                  (0, n.jsx)("strong", { children: e }, i),
              };
              return l && null != t
                ? (null == t ? void 0 : t.member_type) === h.wO.OWNER
                  ? N.intl.format(N.t.X1ngSU, {
                      ...e,
                      guildName: null == t ? void 0 : t.name,
                    })
                  : N.intl.format(N.t.rmpEPD, {
                      ...e,
                      guildName: null == t ? void 0 : t.name,
                    })
                : N.intl.format(N.t.HpvELi, e);
            }, [i, t, l]);
          return (0, n.jsx)("div", {
            className: A.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
              variant: "heading-xl/normal",
              children: o,
            }),
          });
        },
        y = (e) => {
          let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
          return 0 === i.filter((e) => e.descriptions.length > 0).length &&
            null == t
            ? null
            : (0, n.jsxs)("div", {
                className: A.classificationActionsTakenContainer,
                children: [
                  (0, n.jsx)(s.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: N.intl.string(N.t.O2nYk5),
                  }),
                  (0, n.jsxs)("ul", {
                    className: A.classificationActionsTakenList,
                    children: [
                      i.map((e) => (0, n.jsx)(T, { action: e }, e.id)),
                      null != t
                        ? (0, n.jsx)(
                            "li",
                            {
                              className: A.classificationActionsTakenRow,
                              children: (0, n.jsx)(s.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children: N.intl.format(N.t.TByIjY, {
                                  expirationDate: t.toLocaleDateString(a, {
                                    dateStyle: "medium",
                                  }),
                                }),
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
        T = (e) => {
          let { action: i } = e;
          return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
              (0, n.jsx)(
                "li",
                {
                  className: A.classificationActionsTakenRow,
                  children: (0, n.jsx)(s.Text, {
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
        I = (e) => {
          let { classificationTypeText: i, policyExplainerLink: t } = e;
          return (0, n.jsxs)(s.Anchor, {
            href: t,
            className: A.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, n.jsx)("div", {
                className: A.classificationPolicyCardIcon,
                children: (0, n.jsx)(s.ShieldIcon, {
                  size: "md",
                  color: o.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, n.jsx)("div", {
                className: A.classificationPolicyDescriptionContainer,
                children: (0, n.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: N.intl.format(N.t.zxUdpq, {
                    classificationDescription: i,
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: A.classificationPolicyLinkIcon,
                children: (0, n.jsx)(s.ChevronSmallRightIcon, {
                  size: "md",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        S = () =>
          (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t["I2H0/P"]),
          }),
        w = (e) =>
          (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.format(N.t.IFxUaW, {
              letUsKnowHook: (i, t) =>
                (0, n.jsx)(
                  s.Anchor,
                  {
                    href: e.isAppealEligible ? void 0 : e.appealLink,
                    onClick: e.letUsKnowClick,
                    children: i,
                  },
                  t,
                ),
            }),
          }),
        k = (e) =>
          (0, n.jsx)("div", {
            className: A.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, n.jsx)(S, {})
              : (0, n.jsx)(w, {
                  appealLink: C.sQ.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        L = (e) => {
          let {
            tosLink: i,
            communityGuidelinesLink: t,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: o,
          } = e;
          return (0, n.jsxs)("div", {
            className: A.classificationActionExplanationContainer,
            children: [
              (0, n.jsx)(s.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: N.intl.string(N.t["977ien"]),
              }),
              (0, n.jsx)(s.Text, {
                className: A.guidelinesExplanation,
                variant: "text-sm/normal",
                children: N.intl.format(N.t["1Z/+aG"], {
                  tosLink: i,
                  communityGuidelinesLink: t,
                }),
              }),
              (0, n.jsx)(I, {
                classificationTypeText: a,
                policyExplainerLink: l,
              }),
              o,
            ],
          });
        };
      i.Z = (e) => {
        var i;
        let { classificationId: t, source: o, onError: s } = e,
          {
            classification: r,
            classificationRequestState: d,
            isAppealEligible: u,
            isDsaEligible: N,
            violationType: T,
          } = (0, f.YG)(t),
          I = (0, x.P)(),
          S =
            null != r &&
            null != r.flagged_content &&
            r.flagged_content.length > 0,
          w = (0, g.e)();
        return (a.useEffect(() => {
          w &&
            m.default.track(_.rMx.SAFETY_HUB_ACTION, {
              action: C.n0.ViewViolationDetail,
              account_standing: I.state,
              classification_ids: [Number(t)],
              source: o,
              is_violative_content_shown: S,
              is_dsa_eligible: N,
              violation_type: T,
            });
        }, [w]),
        null == r && d === h.OY.FAILED)
          ? (s(), null)
          : null == r
            ? null
            : (0, n.jsxs)("div", {
                className: A.classificationContainer,
                children: [
                  (0, n.jsx)(E, {
                    classificationTypeText: r.description,
                    guildMetadata: null == r ? void 0 : r.guild_metadata,
                  }),
                  (0, n.jsx)(j.s, {
                    flaggedContent:
                      null !== (i = r.flagged_content) && void 0 !== i ? i : [],
                  }),
                  (0, n.jsx)(y, {
                    actions: r.actions,
                    classificationExpiration: (0, p.Pu)(r),
                  }),
                  (0, n.jsx)(L, {
                    classificationTypeText: r.description,
                    tosLink: C.sQ.TOS_LINK,
                    communityGuidelinesLink: C.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: r.explainer_link,
                    appealComponent: (0, n.jsx)(k, {
                      hasBeenAppealed: null != r.appeal_status,
                      onLetUsKnowClick: () => {
                        m.default.track(_.rMx.SAFETY_HUB_ACTION, {
                          action: C.n0.ClickLetUsKnow,
                          account_standing: I.state,
                          classification_ids: [Number(t)],
                          source: o,
                          is_violative_content_shown: S,
                          is_dsa_eligible: N,
                          violation_type: T,
                        }),
                          u &&
                            (c.Z.increment({ name: l.V.APPEAL_INGESTION_VIEW }),
                            v.Z.open(t));
                      },
                      isAppealEligible: u,
                    }),
                  }),
                ],
              });
      };
    },
    41164: function (e, i, t) {
      t.r(i);
      var n = t(200651);
      t(192379);
      var a = t(481060),
        l = t(230711),
        o = t(187819),
        s = t(181211),
        r = t(188879),
        c = t(981631),
        d = t(726985),
        m = t(388032),
        u = t(105548),
        h = t(170143);
      i.default = (e) => {
        let {
            transitionState: i,
            onClose: t,
            classificationId: p,
            source: x,
          } = e,
          f = (0, s.Z)(),
          g = (0, o._p)({ location: "classification-detail-modal" }),
          v = () => {
            t(),
              g
                ? l.Z.open(c.oAB.ACCOUNT, d.s6.PRIVACY_AND_SAFETY_STANDING)
                : l.Z.open(
                    c.oAB.PRIVACY_AND_SAFETY,
                    d.s6.PRIVACY_ACCOUNT_STANDING,
                  );
          };
        return (0, n.jsxs)(a.ModalRoot, {
          className: u.modalRoot,
          transitionState: i,
          children: [
            (0, n.jsxs)("div", {
              className: u.modalHeader,
              children: [
                (0, n.jsx)("img", { className: u.image, src: h, alt: "" }),
                (0, n.jsx)(a.ModalCloseButton, {
                  className: u.modalClose,
                  onClick: t,
                }),
              ],
            }),
            (0, n.jsx)(a.ModalContent, {
              className: u.modalContent,
              children: f
                ? (0, n.jsx)(a.Spinner, {})
                : (0, n.jsx)(r.Z, {
                    classificationId: p,
                    source: x,
                    onError: v,
                  }),
            }),
            (0, n.jsx)(a.ModalFooter, {
              children: (0, n.jsx)(a.Button, {
                className: u.__invalid_button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: v,
                children: m.intl.string(m.t.elrEjI),
              }),
            }),
          ],
        });
      };
    },
    97568: function (e, i, t) {
      t.d(i, {
        s: function () {
          return r;
        },
      });
      var n = t(200651);
      t(192379);
      var a = t(481060),
        l = t(621145),
        o = t(388032),
        s = t(246697);
      let r = (e) => {
        let { flaggedContent: i } = e;
        return 0 === i.length
          ? null
          : (0, n.jsxs)("div", {
              className: s.classificationEvidenceContainer,
              children: [
                (0, n.jsx)(a.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children: o.intl.string(o.t.s64CMj),
                }),
                (0, n.jsx)(l.Z, { flaggedContent: i }),
              ],
            });
      };
    },
    621145: function (e, i, t) {
      t.d(i, {
        Z: function () {
          return P;
        },
      }),
        t(47120),
        t(773603);
      var n = t(200651),
        a = t(192379),
        l = t(392711),
        o = t(442837),
        s = t(481060),
        r = t(640108),
        c = t(406432),
        d = t(169525),
        m = t(786761),
        u = t(499376),
        h = t(3148),
        p = t(492593),
        x = t(219797),
        f = t(524444),
        g = t(884182),
        v = t(25015),
        j = t(963550),
        C = t(845080),
        _ = t(594174),
        N = t(956664),
        A = t(709054),
        E = t(236289),
        y = t(788080),
        T = t(800530),
        I = t(981631),
        S = t(217702),
        w = t(530124);
      let k = (e, i, t, n) => {
          let a = e.attachments.map((e) => {
            var t, n, a, l;
            let o = { ...e, filename: (0, y.eS)(e), size: 0, proxy_url: e.url };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return o;
            return {
              ...o,
              width:
                null !==
                  (a =
                    null === (t = i[e.id]) || void 0 === t
                      ? void 0
                      : t.width) && void 0 !== a
                  ? a
                  : T.Sv,
              height:
                null !==
                  (l =
                    null === (n = i[e.id]) || void 0 === n
                      ? void 0
                      : n.height) && void 0 !== l
                  ? l
                  : T.EY,
            };
          });
          return (0, m.e5)({
            ...(0, h.ZP)({
              author:
                null != t
                  ? t
                  : {
                      id: "",
                      avatar: void 0,
                      discriminator: "0000",
                      username: n,
                    },
              nonce: e.id,
              content: e.content,
              type: I.uaV.DEFAULT,
              channelId: I.lds,
            }),
            timestamp: new Date(A.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: I.yb.SENT,
          });
        },
        L = (e) => {
          let { message: i } = e,
            { attachments: t } = i;
          if (0 === t.length) return null;
          let a = (e, i, t) => {
              let a = T.Sv,
                o = T.EY;
              if (null != i.width && null != i.height) {
                let e = (0, N.Dc)({
                  width: i.width,
                  height: i.height,
                  maxWidth: T.Sv,
                  maxHeight: T.EY,
                });
                (a = (0, l.clamp)(Math.round(i.width * e), 0, T.Sv)),
                  (o = (0, l.clamp)(Math.round(i.height * e), 0, T.EY));
              }
              return (0, n.jsx)("div", {
                style: { width: t ? a : "100%", height: t ? o : "100%" },
                children: (0, n.jsx)(r.ZP, {
                  className: e.className,
                  forceExternal: !1,
                  src: i.url,
                  width: t ? a : "100%",
                  height: t ? o : "100%",
                  responsive: !0,
                  volume: e.volume,
                  autoPlay: !1,
                  autoMute: !1,
                  type: r.ZP.Types.VIDEO,
                  mediaLayoutType: e.mediaLayoutType,
                  fileName: i.filename,
                  fileSize: null == i.size ? void 0 : i.size.toString(),
                  playable: !0,
                  renderLinkComponent: f.iT,
                  onClick: e.onClick,
                  onPlay: e.onPlay,
                  onEnded: e.onEnded,
                  onVolumeChange: e.onVolumeChange,
                  onMute: e.onMute,
                  downloadable: !1,
                }),
              });
            },
            o = 1 === t.length;
          function s(e, i) {
            return (0, d.dn)(e.originalItem, i);
          }
          return (0, n.jsx)("div", {
            className: w.classificationEvidenceMessageAttachment,
            children: (0, n.jsx)(g.Z, {
              items: t.map((e) => ({
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
                mediaLayoutType: S.hV.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: o,
                onRemoveItem: l.noop,
                renderVideoComponent: (i) => a(i, e, o),
                renderImageComponent: (e) =>
                  (0, n.jsx)(x.dS, {
                    ...e,
                    hiddenSpoilers: !0,
                    shouldHideMediaOptions: !0,
                    shouldLink: !1,
                  }),
                renderAudioComponent: x.q7,
                renderPlaintextFilePreview: x.d4,
                renderGenericFileComponent: x.ZK,
                renderMosaicItemFooter: x.L9,
                getObscureReason: s,
                gifFavoriteButton: () => null,
              })),
            }),
          });
        };
      function P(e) {
        var i;
        let { flaggedContent: t } = e,
          l = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
          [r, d] = a.useState({}),
          [m, u] = a.useState(!0),
          h = (0, o.e7)([E.Z], () => E.Z.getUsername()),
          x = t[0],
          f = k(x, r, l, h),
          g = (0, v.Z)(f, {
            hideSimpleEmbedContent: !1,
            allowList: !1,
            allowHeading: !1,
            allowLinks: !1,
            previewLinkTarget: !1,
          });
        return (a.useEffect(() => {
          Promise.all(
            x.attachments
              .filter((e) => {
                let { filename: i } = e;
                return (0, c.CO)(i) || (0, c.NU)(i);
              })
              .map((e) => {
                var i;
                return ((i = e),
                new Promise((e, t) => {
                  if ((0, c.CO)(i.filename)) {
                    let n = new Image();
                    (n.src = i.url),
                      (n.onload = () => {
                        e(n);
                      }),
                      (n.onerror = () => {
                        t();
                      });
                  } else if ((0, c.NU)(i.filename)) {
                    let n = document.createElement("video");
                    (n.src = i.url),
                      (n.onloadedmetadata = () => {
                        let i = n.videoWidth;
                        e({ width: i, height: n.videoHeight });
                      }),
                      (n.onerror = () => {
                        t();
                      });
                  } else e({ width: 0, height: 0 });
                })).then((i) => d((t) => ({ ...t, [e.id]: i })));
              }),
          ).finally(() => u(!1));
        }, [x.attachments]),
        "" === f.content && 0 === f.attachments.length)
          ? null
          : (0, n.jsx)("div", {
              className: w.classificationEvidenceCard,
              children: m
                ? (0, n.jsx)(s.Spinner, {})
                : (0, n.jsx)(p.Z, {
                    compact: !1,
                    childrenHeader: (0, C.Z)({
                      author: {
                        ...l,
                        colorString: "",
                        nick:
                          null !== (i = null == l ? void 0 : l.username) &&
                          void 0 !== i
                            ? i
                            : h,
                      },
                      message: f,
                      channel: void 0,
                      guildId: void 0,
                      compact: !1,
                      animateAvatar: !1,
                      isGroupStart: !0,
                      roleIcon: void 0,
                      hideTimestamp: !1,
                    }),
                    childrenAccessories: (0, n.jsx)(L, { message: f }),
                    childrenMessageContent: (0, j.Z)({ message: f }, g.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
  },
]);
//# sourceMappingURL=4dd525f5d02e5ed0e178.js.map
