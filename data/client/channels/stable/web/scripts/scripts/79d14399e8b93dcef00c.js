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
    853178: function (e, i, t) {
      var n = t(200651);
      t(192379);
      var a = t(481060),
        l = t(570140);
      i.Z = {
        open() {
          (0, a.openModalLazy)(async () => {
            l.Z.dispatch({
              type: "SAFETY_HUB_REQUEST_AGE_VERIFICATION_MODAL_OPEN",
            });
            let { default: e } = await t.e("82961").then(t.bind(t, 751744));
            return (i) => (0, n.jsx)(e, { ...i });
          });
        },
        close() {
          l.Z.dispatch({
            type: "SAFETY_HUB_REQUEST_AGE_VERIFICATION_MODAL_CLOSE",
          });
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
        u = t(626135),
        m = t(219230),
        h = t(531441),
        p = t(236289),
        x = t(788080),
        f = t(451284),
        g = t(613734),
        v = t(846488),
        _ = t(384725),
        E = t(853178),
        j = t(97568),
        A = t(800530),
        C = t(981631),
        N = t(388032),
        T = t(300106);
      let y = (e) => {
          let { classificationTypeText: i, guildMetadata: t } = e,
            l = (0, m.B)("classification_detail"),
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
            className: T.classificationHeader,
            children: (0, n.jsx)(s.Heading, {
              variant: "heading-xl/normal",
              children: o,
            }),
          });
        },
        I = (e) => {
          let { actions: i, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
          return 0 === i.filter((e) => e.descriptions.length > 0).length &&
            null == t
            ? null
            : (0, n.jsxs)("div", {
                className: T.classificationActionsTakenContainer,
                children: [
                  (0, n.jsx)(s.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: N.intl.string(N.t.O2nYk5),
                  }),
                  (0, n.jsxs)("ul", {
                    className: T.classificationActionsTakenList,
                    children: [
                      i.map((e) => (0, n.jsx)(S, { action: e }, e.id)),
                      null != t
                        ? (0, n.jsx)(
                            "li",
                            {
                              className: T.classificationActionsTakenRow,
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
        S = (e) => {
          let { action: i } = e;
          return (0, n.jsx)(n.Fragment, {
            children: i.descriptions.map((e, i) =>
              (0, n.jsx)(
                "li",
                {
                  className: T.classificationActionsTakenRow,
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
        L = (e) => {
          let { classificationTypeText: i, policyExplainerLink: t } = e;
          return (0, n.jsxs)(s.Anchor, {
            href: t,
            className: T.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, n.jsx)("div", {
                className: T.classificationPolicyCardIcon,
                children: (0, n.jsx)(s.ShieldIcon, {
                  size: "md",
                  color: o.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, n.jsx)("div", {
                className: T.classificationPolicyDescriptionContainer,
                children: (0, n.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: N.intl.format(N.t.zxUdpq, {
                    classificationDescription: i,
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: T.classificationPolicyLinkIcon,
                children: (0, n.jsx)(s.ChevronSmallRightIcon, {
                  size: "md",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        w = () =>
          (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t["I2H0/P"]),
          }),
        k = (e) =>
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
        P = (e) =>
          (0, n.jsx)("div", {
            className: T.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, n.jsx)(w, {})
              : (0, n.jsx)(k, {
                  appealLink: A.sQ.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        Z = (e) => {
          let {
            tosLink: i,
            communityGuidelinesLink: t,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: o,
          } = e;
          return (0, n.jsxs)("div", {
            className: T.classificationActionExplanationContainer,
            children: [
              (0, n.jsx)(s.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: N.intl.string(N.t["977ien"]),
              }),
              (0, n.jsx)(s.Text, {
                className: T.guidelinesExplanation,
                variant: "text-sm/normal",
                children: N.intl.format(N.t["1Z/+aG"], {
                  tosLink: i,
                  communityGuidelinesLink: t,
                }),
              }),
              (0, n.jsx)(L, {
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
            classification: d,
            classificationRequestState: m,
            isAppealEligible: N,
            isDsaEligible: S,
            violationType: L,
          } = (0, g.YG)(t),
          w = (0, r.e7)([p.Z], () => p.Z.getAppealEligibility()),
          k = (0, f.P)(),
          U =
            null != d &&
            null != d.flagged_content &&
            d.flagged_content.length > 0,
          O = (0, v.e)();
        return (a.useEffect(() => {
          O &&
            u.default.track(C.rMx.SAFETY_HUB_ACTION, {
              action: A.n0.ViewViolationDetail,
              account_standing: k.state,
              classification_ids: [Number(t)],
              source: o,
              is_violative_content_shown: U,
              is_dsa_eligible: S,
              violation_type: L,
            });
        }, [O]),
        null == d && m === h.OY.FAILED)
          ? (s(), null)
          : null == d
            ? null
            : (0, n.jsxs)("div", {
                className: T.classificationContainer,
                children: [
                  (0, n.jsx)(y, {
                    classificationTypeText: d.description,
                    guildMetadata: null == d ? void 0 : d.guild_metadata,
                  }),
                  (0, n.jsx)(j.s, {
                    flaggedContent:
                      null !== (i = d.flagged_content) && void 0 !== i ? i : [],
                  }),
                  (0, n.jsx)(I, {
                    actions: d.actions,
                    classificationExpiration: (0, x.Pu)(d),
                  }),
                  (0, n.jsx)(Z, {
                    classificationTypeText: d.description,
                    tosLink: A.sQ.TOS_LINK,
                    communityGuidelinesLink: A.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: d.explainer_link,
                    appealComponent: (0, n.jsx)(P, {
                      hasBeenAppealed: null != d.appeal_status,
                      onLetUsKnowClick: () => {
                        u.default.track(C.rMx.SAFETY_HUB_ACTION, {
                          action: A.n0.ClickLetUsKnow,
                          account_standing: k.state,
                          classification_ids: [Number(t)],
                          source: o,
                          is_violative_content_shown: U,
                          is_dsa_eligible: S,
                          violation_type: L,
                        }),
                          (null == d ? void 0 : d.is_coppa) &&
                          w.includes(h.tG.AGE_VERIFY_ELIGIBLE)
                            ? E.Z.open()
                            : N &&
                              (c.Z.increment({
                                name: l.V.APPEAL_INGESTION_VIEW,
                              }),
                              _.Z.open(t));
                      },
                      isAppealEligible: N,
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
        u = t(388032),
        m = t(105548),
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
          className: m.modalRoot,
          transitionState: i,
          children: [
            (0, n.jsxs)("div", {
              className: m.modalHeader,
              children: [
                (0, n.jsx)("img", { className: m.image, src: h, alt: "" }),
                (0, n.jsx)(a.ModalCloseButton, {
                  className: m.modalClose,
                  onClick: t,
                }),
              ],
            }),
            (0, n.jsx)(a.ModalContent, {
              className: m.modalContent,
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
                className: m.__invalid_button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: v,
                children: u.intl.string(u.t.elrEjI),
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
        u = t(786761),
        m = t(499376),
        h = t(3148),
        p = t(492593),
        x = t(219797),
        f = t(524444),
        g = t(884182),
        v = t(25015),
        _ = t(963550),
        E = t(845080),
        j = t(594174),
        A = t(956664),
        C = t(709054),
        N = t(236289),
        T = t(788080),
        y = t(800530),
        I = t(981631),
        S = t(217702),
        L = t(530124);
      let w = (e, i, t, n) => {
          let a = e.attachments.map((e) => {
            var t, n, a, l;
            let o = { ...e, filename: (0, T.eS)(e), size: 0, proxy_url: e.url };
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
                  : y.Sv,
              height:
                null !==
                  (l =
                    null === (n = i[e.id]) || void 0 === n
                      ? void 0
                      : n.height) && void 0 !== l
                  ? l
                  : y.EY,
            };
          });
          return (0, u.e5)({
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
            timestamp: new Date(C.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: I.yb.SENT,
          });
        },
        k = (e) => {
          let { message: i } = e,
            { attachments: t } = i;
          if (0 === t.length) return null;
          let a = (e, i, t) => {
              let a = y.Sv,
                o = y.EY;
              if (null != i.width && null != i.height) {
                let e = (0, A.Dc)({
                  width: i.width,
                  height: i.height,
                  maxWidth: y.Sv,
                  maxHeight: y.EY,
                });
                (a = (0, l.clamp)(Math.round(i.width * e), 0, y.Sv)),
                  (o = (0, l.clamp)(Math.round(i.height * e), 0, y.EY));
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
            className: L.classificationEvidenceMessageAttachment,
            children: (0, n.jsx)(g.Z, {
              items: t.map((e) => ({
                item: {
                  uniqueId: e.id,
                  originalItem: e,
                  type: (0, m.aw)(e, !0),
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
          l = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
          [r, d] = a.useState({}),
          [u, m] = a.useState(!0),
          h = (0, o.e7)([N.Z], () => N.Z.getUsername()),
          x = t[0],
          f = w(x, r, l, h),
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
          ).finally(() => m(!1));
        }, [x.attachments]),
        "" === f.content && 0 === f.attachments.length)
          ? null
          : (0, n.jsx)("div", {
              className: L.classificationEvidenceCard,
              children: u
                ? (0, n.jsx)(s.Spinner, {})
                : (0, n.jsx)(p.Z, {
                    compact: !1,
                    childrenHeader: (0, E.Z)({
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
                    childrenAccessories: (0, n.jsx)(k, { message: f }),
                    childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
  },
]);
//# sourceMappingURL=79d14399e8b93dcef00c.js.map
