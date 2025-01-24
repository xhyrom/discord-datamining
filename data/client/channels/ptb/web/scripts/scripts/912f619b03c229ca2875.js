"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18831"],
  {
    170143: function (e) {
      e.exports = "/assets/cffa9b7714f321c8cc60.png";
    },
    115262: function (e, n, t) {
      t.d(n, {
        Vc: function () {
          return a;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2025-01_underage_appeals_mobile",
        label: "Luanching underage appeals on mobile",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable the new user remediation tool",
            config: { enabled: !0 },
          },
        ],
      });
      function a(e) {
        let { location: n } = e;
        return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 })
          .enabled;
      }
    },
    331692: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var a = t(481060),
        l = t(570140);
      n.Z = {
        open(e) {
          (0, a.openModalLazy)(
            async () => {
              l.Z.dispatch({
                type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN",
              });
              let { default: e } = await t.e("82961").then(t.bind(t, 751744));
              return (n) => (0, i.jsx)(e, { ...n });
            },
            { onCloseCallback: e },
          );
        },
      };
    },
    384725: function (e, n, t) {
      var i = t(200651);
      t(192379);
      var a = t(481060),
        l = t(570140);
      n.Z = {
        open(e) {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.openModalLazy)(async () => {
              let { default: n } = await t.e("65652").then(t.bind(t, 208265));
              return (t) => (0, i.jsx)(n, { classificationId: e, ...t });
            });
        },
        close() {
          l.Z.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
        },
      };
    },
    188879: function (e, n, t) {
      var i = t(200651),
        a = t(192379),
        l = t(286379),
        o = t(692547),
        s = t(481060),
        r = t(442837),
        c = t(797614),
        d = t(706454),
        u = t(626135),
        m = t(115262),
        h = t(331692),
        p = t(531441),
        x = t(236289),
        f = t(788080),
        g = t(451284),
        v = t(613734),
        _ = t(846488),
        E = t(384725),
        C = t(97568),
        j = t(800530),
        y = t(981631),
        A = t(388032),
        N = t(729779);
      let T = (e) => {
          let { classificationTypeText: n, guildMetadata: t } = e,
            l = a.useMemo(() => {
              let e = {
                classification_type: n,
                classificationHook: (e, n) =>
                  (0, i.jsx)("strong", { children: e }, n),
              };
              return null == t
                ? A.intl.format(A.t.HpvELi, e)
                : (null == t ? void 0 : t.member_type) === p.wO.OWNER
                  ? A.intl.format(A.t.X1ngSU, {
                      ...e,
                      guildName: null == t ? void 0 : t.name,
                    })
                  : A.intl.format(A.t.rmpEPD, {
                      ...e,
                      guildName: null == t ? void 0 : t.name,
                    });
            }, [n, t]);
          return (0, i.jsx)("div", {
            className: N.classificationHeader,
            children: (0, i.jsx)(s.Heading, {
              variant: "heading-xl/normal",
              children: l,
            }),
          });
        },
        I = (e) => {
          let { actions: n, classificationExpiration: t } = e,
            a = (0, r.e7)([d.default], () => d.default.locale);
          return 0 === n.filter((e) => e.descriptions.length > 0).length &&
            null == t
            ? null
            : (0, i.jsxs)("div", {
                className: N.classificationActionsTakenContainer,
                children: [
                  (0, i.jsx)(s.Text, {
                    variant: "eyebrow",
                    color: "text-muted",
                    children: A.intl.string(A.t.O2nYk5),
                  }),
                  (0, i.jsxs)("ul", {
                    className: N.classificationActionsTakenList,
                    children: [
                      n.map((e) => (0, i.jsx)(w, { action: e }, e.id)),
                      null != t
                        ? (0, i.jsx)(
                            "li",
                            {
                              className: N.classificationActionsTakenRow,
                              children: (0, i.jsx)(s.Text, {
                                tag: "span",
                                variant: "heading-md/normal",
                                color: "text-normal",
                                children: A.intl.format(A.t.TByIjY, {
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
        w = (e) => {
          let { action: n } = e;
          return (0, i.jsx)(i.Fragment, {
            children: n.descriptions.map((e, n) =>
              (0, i.jsx)(
                "li",
                {
                  className: N.classificationActionsTakenRow,
                  children: (0, i.jsx)(s.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-normal",
                    children: e,
                  }),
                },
                n,
              ),
            ),
          });
        },
        L = (e) => {
          let { classificationTypeText: n, policyExplainerLink: t } = e;
          return (0, i.jsxs)(s.Anchor, {
            href: t,
            className: N.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
              (0, i.jsx)("div", {
                className: N.classificationPolicyCardIcon,
                children: (0, i.jsx)(s.ShieldIcon, {
                  size: "md",
                  color: o.Z.colors.FOCUS_PRIMARY,
                }),
              }),
              (0, i.jsx)("div", {
                className: N.classificationPolicyDescriptionContainer,
                children: (0, i.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: A.intl.format(A.t.zxUdpq, {
                    classificationDescription: n,
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: N.classificationPolicyLinkIcon,
                children: (0, i.jsx)(s.ChevronSmallRightIcon, {
                  size: "md",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
              }),
            ],
          });
        },
        k = () =>
          (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: A.intl.string(A.t["I2H0/P"]),
          }),
        S = (e) =>
          (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: A.intl.format(A.t.IFxUaW, {
              letUsKnowHook: (n, t) =>
                (0, i.jsx)(
                  s.Anchor,
                  {
                    href: e.isAppealEligible ? void 0 : e.appealLink,
                    onClick: e.letUsKnowClick,
                    children: n,
                  },
                  t,
                ),
            }),
          }),
        b = (e) =>
          (0, i.jsx)("div", {
            className: N.classificationLetUsKnowContainer,
            children: e.hasBeenAppealed
              ? (0, i.jsx)(k, {})
              : (0, i.jsx)(S, {
                  appealLink: j.sQ.APPEALS_LINK,
                  letUsKnowClick: e.onLetUsKnowClick,
                  isAppealEligible: e.isAppealEligible,
                }),
          }),
        P = (e) => {
          let {
            tosLink: n,
            communityGuidelinesLink: t,
            classificationTypeText: a,
            policyExplainerLink: l,
            appealComponent: o,
          } = e;
          return (0, i.jsxs)("div", {
            className: N.classificationActionExplanationContainer,
            children: [
              (0, i.jsx)(s.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: A.intl.string(A.t["977ien"]),
              }),
              (0, i.jsx)(s.Text, {
                className: N.guidelinesExplanation,
                variant: "text-sm/normal",
                children: A.intl.format(A.t["1Z/+aG"], {
                  tosLink: n,
                  communityGuidelinesLink: t,
                }),
              }),
              (0, i.jsx)(L, {
                classificationTypeText: a,
                policyExplainerLink: l,
              }),
              o,
            ],
          });
        };
      n.Z = (e) => {
        var n;
        let { classificationId: t, source: o, onError: s, onClose: d } = e,
          {
            classification: A,
            classificationRequestState: w,
            isAppealEligible: L,
            isDsaEligible: k,
            violationType: S,
          } = (0, v.YG)(t),
          Z = (0, r.e7)([x.Z], () => x.Z.getAppealEligibility()),
          U = (0, g.P)(),
          M =
            null != A &&
            null != A.flagged_content &&
            A.flagged_content.length > 0,
          O = (0, _.e)(),
          D =
            (0, m.Vc)({ location: "ConnectedClassificationDetail" }) &&
            !!(null == A ? void 0 : A.is_coppa) &&
            Z.includes(p.tG.AGE_VERIFY_ELIGIBLE),
          R = {
            accountStanding: U,
            classificationId: t,
            hasFlaggedContent: M,
            isDsaEligible: k,
            source: o,
            violationType: S,
          },
          Y = a.useRef(R);
        return (a.useEffect(() => {
          Y.current = R;
        }),
        a.useEffect(() => {
          let {
            accountStanding: e,
            classificationId: n,
            hasFlaggedContent: t,
            isDsaEligible: i,
            source: a,
            violationType: l,
          } = Y.current;
          O &&
            u.default.track(y.rMx.SAFETY_HUB_ACTION, {
              action: j.n0.ViewViolationDetail,
              account_standing: e.state,
              classification_ids: [Number(n)],
              source: a,
              is_violative_content_shown: t,
              is_dsa_eligible: i,
              violation_type: l,
            });
        }, [O]),
        null == A && w === p.OY.FAILED)
          ? (s(), null)
          : null == A
            ? null
            : (0, i.jsxs)("div", {
                className: N.classificationContainer,
                children: [
                  (0, i.jsx)(T, {
                    classificationTypeText: A.description,
                    guildMetadata: null == A ? void 0 : A.guild_metadata,
                  }),
                  (0, i.jsx)(C.s, {
                    flaggedContent:
                      null !== (n = A.flagged_content) && void 0 !== n ? n : [],
                  }),
                  (0, i.jsx)(I, {
                    actions: A.actions,
                    classificationExpiration: (0, f.Pu)(A),
                  }),
                  (0, i.jsx)(P, {
                    classificationTypeText: A.description,
                    tosLink: j.sQ.TOS_LINK,
                    communityGuidelinesLink: j.sQ.COMMUNITY_GUIDELINES,
                    policyExplainerLink: A.explainer_link,
                    appealComponent: (0, i.jsx)(b, {
                      hasBeenAppealed: null != A.appeal_status,
                      onLetUsKnowClick: () => {
                        u.default.track(y.rMx.SAFETY_HUB_ACTION, {
                          action: j.n0.ClickLetUsKnow,
                          account_standing: U.state,
                          classification_ids: [Number(t)],
                          source: o,
                          is_violative_content_shown: M,
                          is_dsa_eligible: k,
                          violation_type: S,
                        }),
                          D
                            ? h.Z.open(d)
                            : L &&
                              (c.Z.increment({
                                name: l.V.APPEAL_INGESTION_VIEW,
                              }),
                              E.Z.open(t));
                      },
                      isAppealEligible: L || D,
                    }),
                  }),
                ],
              });
      };
    },
    41164: function (e, n, t) {
      t.r(n);
      var i = t(200651);
      t(192379);
      var a = t(481060),
        l = t(230711),
        o = t(181211),
        s = t(188879),
        r = t(981631),
        c = t(726985),
        d = t(388032),
        u = t(280322),
        m = t(170143);
      n.default = (e) => {
        let {
            transitionState: n,
            onClose: t,
            classificationId: h,
            source: p,
          } = e,
          x = (0, o.Z)(),
          f = () => {
            t(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
          };
        return (0, i.jsxs)(a.ModalRoot, {
          className: u.modalRoot,
          transitionState: n,
          children: [
            (0, i.jsxs)("div", {
              className: u.modalHeader,
              children: [
                (0, i.jsx)("img", { className: u.image, src: m, alt: "" }),
                (0, i.jsx)(a.ModalCloseButton, {
                  className: u.modalClose,
                  onClick: t,
                }),
              ],
            }),
            (0, i.jsx)(a.ModalContent, {
              className: u.modalContent,
              children: x
                ? (0, i.jsx)(a.Spinner, {})
                : (0, i.jsx)(s.Z, {
                    classificationId: h,
                    source: p,
                    onError: f,
                    onClose: f,
                  }),
            }),
            (0, i.jsx)(a.ModalFooter, {
              children: (0, i.jsx)(a.Button, {
                className: u.__invalid_button,
                type: "button",
                color: a.Button.Colors.BRAND,
                onClick: f,
                children: d.intl.string(d.t.elrEjI),
              }),
            }),
          ],
        });
      };
    },
    97568: function (e, n, t) {
      t.d(n, {
        s: function () {
          return r;
        },
      });
      var i = t(200651);
      t(192379);
      var a = t(481060),
        l = t(621145),
        o = t(388032),
        s = t(804711);
      let r = (e) => {
        let { flaggedContent: n } = e;
        return 0 === n.length
          ? null
          : (0, i.jsxs)("div", {
              className: s.classificationEvidenceContainer,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: "eyebrow",
                  color: "text-muted",
                  children: o.intl.string(o.t.s64CMj),
                }),
                (0, i.jsx)(l.Z, { flaggedContent: n }),
              ],
            });
      };
    },
    621145: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120),
        t(773603);
      var i = t(200651),
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
        C = t(594174),
        j = t(956664),
        y = t(709054),
        A = t(236289),
        N = t(788080),
        T = t(800530),
        I = t(981631),
        w = t(217702),
        L = t(453486);
      let k = (e, n, t, i) => {
          let a = e.attachments.map((e) => {
            var t, i, a, l;
            let o = { ...e, filename: (0, N.eS)(e), size: 0, proxy_url: e.url };
            if (!((0, c.CO)(e.filename) || (0, c.NU)(e.filename))) return o;
            return {
              ...o,
              width:
                null !==
                  (a =
                    null === (t = n[e.id]) || void 0 === t
                      ? void 0
                      : t.width) && void 0 !== a
                  ? a
                  : T.Sv,
              height:
                null !==
                  (l =
                    null === (i = n[e.id]) || void 0 === i
                      ? void 0
                      : i.height) && void 0 !== l
                  ? l
                  : T.EY,
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
                      username: i,
                    },
              nonce: e.id,
              content: e.content,
              type: I.uaV.DEFAULT,
              channelId: I.lds,
            }),
            timestamp: new Date(y.default.extractTimestamp(e.id)).toISOString(),
            attachments: a,
            state: I.yb.SENT,
          });
        },
        S = (e) => {
          let { message: n } = e,
            { attachments: t } = n;
          if (0 === t.length) return null;
          let a = (e, n, t) => {
              let a = T.Sv,
                o = T.EY;
              if (null != n.width && null != n.height) {
                let e = (0, j.Dc)({
                  width: n.width,
                  height: n.height,
                  maxWidth: T.Sv,
                  maxHeight: T.EY,
                });
                (a = (0, l.clamp)(Math.round(n.width * e), 0, T.Sv)),
                  (o = (0, l.clamp)(Math.round(n.height * e), 0, T.EY));
              }
              return (0, i.jsx)("div", {
                style: { width: t ? a : "100%", height: t ? o : "100%" },
                children: (0, i.jsx)(r.ZP, {
                  className: e.className,
                  forceExternal: !1,
                  src: n.url,
                  width: t ? a : "100%",
                  height: t ? o : "100%",
                  responsive: !0,
                  volume: e.volume,
                  autoPlay: !1,
                  autoMute: !1,
                  type: r.ZP.Types.VIDEO,
                  mediaLayoutType: e.mediaLayoutType,
                  fileName: n.filename,
                  fileSize: null == n.size ? void 0 : n.size.toString(),
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
          function s(e, n) {
            return (0, d.dn)(e.originalItem, n);
          }
          return (0, i.jsx)("div", {
            className: L.classificationEvidenceMessageAttachment,
            children: (0, i.jsx)(g.Z, {
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
                message: n,
                mediaLayoutType: w.hV.MOSAIC,
                autoPlayGif: !1,
                canRemoveItem: !1,
                isSingleMosaicItem: o,
                onRemoveItem: l.noop,
                renderVideoComponent: (n) => a(n, e, o),
                renderImageComponent: (e) =>
                  (0, i.jsx)(x.dS, {
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
      function b(e) {
        var n;
        let { flaggedContent: t } = e,
          l = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
          [r, d] = a.useState({}),
          [u, m] = a.useState(!0),
          h = (0, o.e7)([A.Z], () => A.Z.getUsername()),
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
                let { filename: n } = e;
                return (0, c.CO)(n) || (0, c.NU)(n);
              })
              .map((e) => {
                var n;
                return ((n = e),
                new Promise((e, t) => {
                  if ((0, c.CO)(n.filename)) {
                    let i = new Image();
                    (i.src = n.url),
                      (i.onload = () => {
                        e(i);
                      }),
                      (i.onerror = () => {
                        t();
                      });
                  } else if ((0, c.NU)(n.filename)) {
                    let i = document.createElement("video");
                    (i.src = n.url),
                      (i.onloadedmetadata = () => {
                        let n = i.videoWidth;
                        e({ width: n, height: i.videoHeight });
                      }),
                      (i.onerror = () => {
                        t();
                      });
                  } else e({ width: 0, height: 0 });
                })).then((n) => d((t) => ({ ...t, [e.id]: n })));
              }),
          ).finally(() => m(!1));
        }, [x.attachments]),
        "" === f.content && 0 === f.attachments.length)
          ? null
          : (0, i.jsx)("div", {
              className: L.classificationEvidenceCard,
              children: u
                ? (0, i.jsx)(s.Spinner, {})
                : (0, i.jsx)(p.Z, {
                    compact: !1,
                    childrenHeader: (0, E.Z)({
                      author: {
                        ...l,
                        colorString: "",
                        nick:
                          null !== (n = null == l ? void 0 : l.username) &&
                          void 0 !== n
                            ? n
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
                    childrenAccessories: (0, i.jsx)(S, { message: f }),
                    childrenMessageContent: (0, _.Z)({ message: f }, g.content),
                    hasThread: !1,
                    hasReply: !1,
                  }),
            });
      }
    },
  },
]);
//# sourceMappingURL=912f619b03c229ca2875.js.map
