"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99393"],
  {
    87181: function (e) {
      e.exports = "/assets/d941d0168367773932fe.svg";
    },
    111382: function (e, t, n) {
      n.d(t, {
        n: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
          id: "2024-07_quest_interactable_expired_crendentials",
          kind: "user",
          label: "Quest interactable expired crendentials errors",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "not interactable", config: { enabled: !1 } },
            { id: 1, label: "interactable", config: { enabled: !0 } },
          ],
        }),
        s = () =>
          i.useExperiment({ location: "never" }, { autoTrackExposure: !1 })
            .enabled;
    },
    686777: function (e, t, n) {
      n.d(t, {
        q: function () {
          return s;
        },
      });
      let i = (0, n(818083).B)({
          id: "2024-04_concurrent_quests",
          kind: "user",
          label: "Concurrent Quests",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            {
              id: 1,
              label: "Concurrent Quests Enabled",
              config: { enabled: !0 },
            },
          ],
        }),
        s = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e;
          return i.useExperiment({ location: t }, { autoTrackExposure: n })
            .enabled;
        };
    },
    685613: function (e, t, n) {
      n.d(t, {
        f: function () {
          return s;
        },
      });
      var i,
        s,
        l = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        a = n(780384),
        u = n(302245),
        c = n(475595),
        d = n(78826),
        m = n(46140),
        x = n(981631),
        h = n(900019);
      ((i = s || (s = {}))[(i.SMALL = 24)] = "SMALL"),
        (i[(i.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: i,
            theme: s = x.BRd.DARK,
            withGameTile: r = !0,
          } = e,
          C = (0, a.wj)(s) ? x.BRd.DARK : x.BRd.LIGHT,
          g = (0, u.vI)(i, m.dr.QUESTS_BAR);
        return (0, l.jsxs)("div", {
          className: o()(h.partnerBranding, t),
          children: [
            r &&
              (0, l.jsx)(d.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, l.jsx)("img", {
                    ref: e,
                    className: h.partnerBrandingGameTile,
                    alt: "",
                    src: (0, c.fh)(i, c.eC.GAME_TILE, C).url,
                    style: {
                      borderRadius: (function (e) {
                        switch (e) {
                          case 24:
                            return 3;
                          case 32:
                            return 4;
                        }
                      })(n),
                      width: n,
                      height: n,
                    },
                  }),
              }),
            (0, l.jsx)(d.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, l.jsx)("img", {
                  ref: e,
                  className: o()(h.partnerBrandingLogotype, {
                    [h.rewardHighlightLogotype]: g,
                  }),
                  alt: i.config.messages.gameTitle,
                  src: (0, c.fh)(i, c.eC.LOGO_TYPE, C).url,
                }),
            }),
          ],
        });
      };
    },
    340100: function (e, t, n) {
      n(571269), n(298267);
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(692547),
        o = n(481060),
        a = n(113434),
        u = n(26650),
        c = n(761266);
      t.Z = function (e) {
        let {
            className: t,
            color: n = r.Z.colors.WHITE,
            quest: s,
            isInventory: d,
          } = e,
          m = (0, a.qb)(e.quest),
          { percentComplete: x, completedRatioDisplay: h } = (0, a.I)(s);
        return !d && m.length > 0
          ? (0, i.jsx)(u.Z, { children: m.at(0) })
          : (0, i.jsxs)("div", {
              className: l()(c.wrapper, t),
              style: { color: n.css },
              children: [
                (0, i.jsxs)("div", {
                  className: c.percentCompleteWrapper,
                  children: [
                    (0, i.jsx)(o.Text, {
                      variant: "text-xs/semibold",
                      className: c.percentCompleteLabel,
                      color: "none",
                      children: h,
                    }),
                    (0, i.jsx)("div", {
                      className: c.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - x, "%") },
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: c.progressBar,
                  role: "progressbar",
                  "aria-valuenow": x,
                  children: (0, i.jsx)("div", {
                    className: c.progressBarFill,
                    style: { width: "".concat(x, "%") },
                  }),
                }),
                m.length > 0 &&
                  (0, i.jsx)(u.Z, { isInventory: d, children: m.at(0) }),
              ],
            });
      };
    },
    611855: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(481060),
        o = n(388032),
        a = n(990440);
      t.Z = function (e) {
        let {
          className: t,
          color: n = "header-primary",
          textOpacity: s = 0.9,
          bgOpacity: u = 0.4,
        } = e;
        return (0, i.jsxs)(r.Text, {
          variant: "text-xxs/medium",
          color: n,
          className: l()(a.promotedTag, t),
          children: [
            (0, i.jsx)("span", {
              className: a.promotedTagBackground,
              style: { opacity: u },
            }),
            (0, i.jsx)("span", {
              style: { opacity: s },
              children: o.intl.string(o.t.o6FLcH),
            }),
          ],
        });
      };
    },
    128535: function (e, t, n) {
      n(653041), n(47120), n(724458);
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(959078),
        o = n(442837),
        a = n(481060),
        u = n(607070),
        c = n(553795),
        d = n(358085),
        m = n(617136),
        x = n(111382),
        h = n(113434),
        C = n(918701),
        g = n(566078),
        p = n(667105),
        E = n(388032),
        j = n(490752);
      let T = (e) => (0 === e.length ? j.warning : j.danger),
        f = (e, t) =>
          0 === e.length
            ? E.intl.formatToPlainString(E.t.gX0Qc3, { gameTitle: t })
            : E.intl.formatToPlainString(E.t["28Ql29"], { gameTitle: t }),
        v = (e) => {
          let {
            quest: t,
            location: n,
            errors: s,
            gameTitle: l,
            consoleHelpArticle: o,
            expiredCredentialsInteractable: u,
          } = e;
          if (0 === s.length)
            return (0, i.jsx)(a.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: E.intl.format(E.t.GXqvCw, { gameTitle: l }),
            });
          let x = [];
          (0, C.Nj)({ quest: t }) &&
            x.push(
              (0, d.isWeb)()
                ? E.intl.string(E.t["0UTkPz"])
                : E.intl.string(E.t.XGRUho),
            );
          let h = [
            ...x,
            ...s.map((e) => {
              if (e.type !== r.K.EXPIRED_CREDENTIAL || !u) return e.message;
              let i = c.Z.getAccount(
                  e.connected_account_id,
                  e.connected_account_type,
                ),
                s = (0, C.C9)(e),
                l = (0, C._j)(e);
              return E.intl.format(s, {
                account_name: null == i ? void 0 : i.name,
                onClick: () => {
                  (0, C.fY)(
                    { quest: t, platformType: l },
                    {
                      content: n,
                      ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    },
                  );
                },
              });
            }),
            o,
          ];
          return (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: h.reduce((e, t) => [...e, t, " "], []),
          });
        };
      t.Z = function (e) {
        let t = g.r.build(e.quest.config).application.name,
          n = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          s = (0, p.k3)(e.quest.id, e.location),
          r = (0, x.n)(),
          c = (0, p.g2)({ useReducedMotion: n, className: j.refreshIcon }),
          {
            errorHints: d,
            startingConsoleQuest: C,
            startConsoleQuest: S,
          } = (0, h.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
              c.startAnimation(),
                (0, m._3)({
                  questId: e.quest.id,
                  questContent: e.location,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: c.stopAnimation,
          });
        return (0, i.jsxs)("div", {
          className: l()(j.container, { [j.inFlight]: C }),
          children: [
            (0, i.jsxs)("div", {
              className: j.info,
              children: [
                (0, i.jsxs)("div", {
                  className: j.header,
                  children: [
                    (0, i.jsx)(a.CircleWarningIcon, {
                      className: l()(j.headerIcon, T(d)),
                      size: "custom",
                      color: "currentColor",
                      width: 16,
                      height: 16,
                    }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-sm/semibold",
                      children: f(d, t),
                    }),
                  ],
                }),
                v({
                  quest: e.quest,
                  errors: d,
                  gameTitle: t,
                  location: e.location,
                  consoleHelpArticle: s,
                  expiredCredentialsInteractable: r,
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: j.cta,
              children: (0, i.jsx)(a.Button, {
                color: a.ButtonColors.PRIMARY,
                onClick: S,
                disabled: C,
                children: (0, i.jsxs)("div", {
                  className: j.ctaInner,
                  children: [c.render(), E.intl.string(E.t.nPThNT)],
                }),
              }),
            }),
          ],
        });
      };
    },
    87894: function (e, t, n) {
      n.d(t, {
        DJ: function () {
          return u;
        },
        U0: function () {
          return m;
        },
        W_: function () {
          return o;
        },
        Z$: function () {
          return d;
        },
        Z0: function () {
          return h;
        },
        iM: function () {
          return a;
        },
        j2: function () {
          return x;
        },
        jc: function () {
          return c;
        },
        uq: function () {
          return r;
        },
      });
      var i,
        s,
        l = n(497505);
      function r(e) {
        return [
          l.jn.GIFT_INVENTORY_FOR_YOU,
          l.jn.GIFT_INVENTORY_OTHER,
        ].includes(e);
      }
      function o(e) {
        return e === l.jn.GIFT_INVENTORY_FOR_YOU || !r(e);
      }
      function a(e) {
        let { quest: t, location: n } = e,
          { userStatus: i } = t;
        return (
          ((null == i ? void 0 : i.enrolledAt) != null &&
            null == i.completedAt) ||
          o(n)
        );
      }
      ((i = s || (s = {}))[(i.FOR_YOU = 0)] = "FOR_YOU"),
        (i[(i.OTHER = 1)] = "OTHER");
      let u = 100,
        c = 20,
        d = 32,
        m = 1e3,
        x = 460,
        h = 280;
    },
    37303: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(100621);
      n(442837);
      var r = n(686777),
        o = n(113434);
      n(569984);
      var a = n(497505),
        u = n(602667),
        c = n(87894),
        d = n(372113),
        m = n(206044),
        x = n(266843),
        h = n(46140),
        C = n(444098);
      function g(e) {
        let {
            quest: t,
            location: n,
            initiallyExpanded: g,
            contentPosition: p,
          } = e,
          [E, j] = s.useState(!1),
          T = s.useCallback(() => j(!0), []),
          f = s.useCallback(() => j(!1), []),
          v = (0, o.tP)(t),
          { containerRef: S, size: N, height: q } = (0, x.h)(),
          _ = (0, r.q)({ location: h.dr.QUESTS_CARD }),
          {
            expansionSpring: A,
            isAnimating: R,
            isExpanded: b,
            toggleExpanded: I,
          } = (0, x.O)({
            initiallyExpanded: !_ || g || (0, c.iM)({ location: n, quest: t }),
          }),
          M = null != q ? q : c.U0;
        return (0, i.jsx)(u.A, {
          questOrQuests: t,
          questContent: n,
          questContentPosition: p,
          trackGuildAndChannelMetadata: n === a.jn.QUESTS_EMBED,
          children: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.animated.div, {
                style: {
                  maxHeight:
                    n === a.jn.QUESTS_EMBED
                      ? void 0
                      : A.to({ range: [0, 1], output: [c.DJ, M] }),
                },
                className: C.questsCard,
                onFocus: T,
                onMouseEnter: T,
                onBlur: f,
                onMouseLeave: f,
                children: (0, i.jsxs)("div", {
                  ref: (t) => {
                    (e.current = t), (S.current = t);
                  },
                  children: [
                    (0, i.jsx)(m.Z, {
                      isFocused: E,
                      isQuestExpired: v,
                      location: n,
                      quest: t,
                      size: N,
                      expansionSpring: A,
                      isAnimating: R,
                      isExpanded: b,
                      isInConcurrentQuestExperiment: _,
                      contentPosition: p,
                      toggleExpanded: I,
                    }),
                    (0, i.jsx)(d.Z, {
                      quest: t,
                      isQuestExpired: v,
                      location: n,
                      size: N,
                      isFocused: E,
                      isExpanded: b,
                      isAnimating: R,
                      contentPosition: p,
                    }),
                  ],
                }),
              }),
            }),
        });
      }
    },
    372113: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(442837),
        o = n(481060),
        a = n(607070),
        u = n(706454),
        c = n(63063),
        d = n(930153),
        m = n(617136),
        x = n(113434),
        h = n(569984),
        C = n(497505),
        g = n(918701),
        p = n(566078),
        E = n(340100),
        j = n(644646),
        T = n(667105),
        f = n(341907),
        v = n(128535),
        S = n(87894),
        N = n(2660),
        q = n(46140),
        _ = n(981631),
        A = n(388032),
        R = n(513088);
      let b = (e, t, n) =>
        (0, S.uq)(e) && !n && "lg" === t
          ? "text-lg/medium"
          : "lg" === t
            ? "text-md/medium"
            : "sm" === t
              ? "text-sm/medium"
              : "text-xs/medium";
      function I(e) {
        let { containerSize: t, onClick: n, children: s, tabIndex: l } = e;
        return "xs" === t
          ? (0, i.jsx)(o.Clickable, {
              tabIndex: l,
              className: R.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: s,
              }),
            })
          : (0, i.jsx)(o.Button, {
              tabIndex: l,
              wrapperClassName: R.ctaButtonWrapper,
              color: o.ButtonColors.PRIMARY,
              onClick: n,
              children: s,
            });
      }
      function M(e) {
        let {
            quest: t,
            progressState: n,
            isCollectibleQuest: s,
            location: l,
            questContentPosition: u,
            inGiftInventory: c,
          } = e,
          d = n >= x.OH.COMPLETED,
          m = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
          C = (0, r.e7)([h.Z], () => h.Z.isEnrolling(t.id)),
          p = (0, g.cr)(t),
          E = (0, T.Ks)({
            progressState: n,
            quest: t,
            location: l,
            isCollectibleQuest: s,
            questContentPosition: u,
            inGiftInventory: c,
            isVideoQuest: p,
          }),
          j = d && !m ? o.ShinyButton : o.Button;
        return (0, i.jsx)(
          o.Tooltip,
          {
            text: E.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
              var t;
              return (0, i.jsx)(j, {
                ...e,
                wrapperClassName: R.ctaButtonWrapper,
                color: o.ButtonColors.BRAND,
                disabled: null == E.onClick,
                submitting: C,
                onClick:
                  null !== (t = E.onClick) && void 0 !== t ? t : () => {},
                children: (0, i.jsx)("div", {
                  className: R.ctaButtonInner,
                  children: E.text,
                }),
              });
            },
          },
          E.tooltipText,
        );
      }
      t.Z = (e) => {
        let {
            quest: t,
            location: n,
            size: s,
            isFocused: a,
            isQuestExpired: h,
            isExpanded: T,
            isAnimating: Z,
            contentPosition: L,
          } = e,
          y = (0, x._Q)(t),
          B = y >= x.OH.ACCEPTED,
          P = y >= x.OH.COMPLETED,
          D = y >= x.OH.CLAIMED,
          U = (0, g.Xv)(t.config),
          w = (0, S.uq)(n),
          Q = n === C.jn.QUESTS_EMBED,
          k = T || Z,
          O = B && !D && w,
          H = (0, x.t5)(t, q.dr.QUESTS_CARD, n),
          { xboxAndPlaystationAccounts: z } = (0, x.z6)(),
          G = (0, r.e7)([u.default], () => u.default.locale),
          W = (0, x.z)(t),
          F = w && U,
          V = h && !P,
          X = z.length > 0 && w && (0, g.$J)(t) && B && !P && !W,
          Y = (0, i.jsx)(j.Z, {
            autoplay: a,
            className: l()(R.gridImg, {
              [R.questRewardGiftInventory]: w && "lg" === s,
              [R.questRewardEmbed]: Q && "lg" === s,
              [R.questRewardEmbedSm]: "sm" === s,
              [R.questRewardEmbedXs]: "xs" === s,
            }),
            learnMoreStyle: w ? null : "text",
            location: q.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: L,
          });
        return (0, i.jsxs)("div", {
          className: R.root,
          children: [
            (0, i.jsxs)("div", {
              className: l()(R.outerContainer, {
                [R.outerContainerSm]: "sm" === s,
                [R.outerContainerXs]: "xs" === s,
                [R.outerContainerNoProgress]: !O,
              }),
              style: { visibility: k ? "inherit" : "hidden" },
              "aria-hidden": !k,
              children: [
                (0, i.jsx)(o.Tooltip, {
                  text: V ? A.intl.string(A.t["04MTGR"]) : null,
                  tooltipContentClassName: R.rewardTileExpirationTooltip,
                  shouldShow: V,
                  children: (e) =>
                    (0, i.jsxs)("div", {
                      className: R.rewardTileWrapper,
                      ...e,
                      children: [
                        h &&
                          (0, i.jsx)("div", {
                            className: R.rewardTileExpired,
                            children: (0, i.jsx)(o.CircleWarningIcon, {
                              color: o.tokens.colors.WHITE,
                            }),
                          }),
                        F
                          ? (0, i.jsx)(N.Z, {
                              questConfig: t.config,
                              fallback: Y,
                              isFocused: a,
                            })
                          : Y,
                      ],
                    }),
                }),
                (0, i.jsxs)("div", {
                  className: l()(R.gridText, R.taskDetails),
                  children: [
                    (0, i.jsx)(o.Text, {
                      variant: b(n, s, B),
                      className: R.taskInstructions,
                      children: h
                        ? A.intl.formatToPlainString(A.t["ge+AJi"], {
                            questName: t.config.messages.questName,
                          })
                        : H,
                    }),
                    (0, i.jsx)(o.Text, {
                      variant: "lg" === s ? "text-sm/medium" : "text-xs/medium",
                      color: "text-muted",
                      children: (function (e) {
                        var t, n, i, s, l, r;
                        let { quest: o, locale: a, isQuestExpired: u } = e,
                          m =
                            (null === (t = o.userStatus) || void 0 === t
                              ? void 0
                              : t.completedAt) != null,
                          h =
                            m &&
                            (null === (n = o.userStatus) || void 0 === n
                              ? void 0
                              : n.claimedAt) != null,
                          C = (0, x.B6)(
                            null === (i = o.userStatus) || void 0 === i
                              ? void 0
                              : i.completedAt,
                            { year: "numeric", month: "long", day: "numeric" },
                          ),
                          E = (0, g.oo)({ quest: o }),
                          j = p.r.build(o.config).defaultReward.messages
                            .nameWithArticle,
                          T = (0, g.Kr)(o.config),
                          f = (0, g.b7)(o);
                        if (h) {
                          let e = E
                              ? (0, g.o9)({
                                  quest: o,
                                  idx:
                                    null === (s = o.userStatus) || void 0 === s
                                      ? void 0
                                      : s.claimedTier,
                                })
                              : null,
                            t =
                              null !==
                                (l =
                                  null == e
                                    ? void 0
                                    : e.messages.nameWithArticle) &&
                              void 0 !== l
                                ? l
                                : null;
                          return null != t
                            ? A.intl.formatToPlainString(A.t.RrxtPT, {
                                reward: t,
                                date: C,
                              })
                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                reward: j,
                                date: C,
                              });
                        }
                        if (m)
                          return E
                            ? A.intl.formatToPlainString(A.t.l1jCMz, {
                                date: C,
                              })
                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                reward: j,
                                date: C,
                              });
                        let v = E ? (0, g.o9)({ quest: o, idx: 0 }) : null;
                        return u
                          ? A.intl.formatToPlainString(A.t.DT3aub, {
                              reward:
                                null !==
                                  (r =
                                    null == v
                                      ? void 0
                                      : v.messages.nameWithArticle) &&
                                void 0 !== r
                                  ? r
                                  : j,
                            })
                          : null != v && null != v.approximateCount
                            ? A.intl.format(A.t["4bMK19"], {
                                maxReward: v.messages.nameWithArticle,
                                maxRewardCount: (0, d.Bs)(
                                  v.approximateCount,
                                  a,
                                ),
                                helpCenterLink: c.Z.getArticleURL(
                                  _.BhN.QUESTS_LEARN_MORE,
                                ),
                              })
                            : null != T
                              ? A.intl.formatToPlainString(A.t.Pu5eyM, {
                                  reward: j,
                                  duration: T,
                                })
                              : null != f
                                ? f.description
                                : A.intl.formatToPlainString(A.t.ttFsLi, {
                                    reward: j,
                                  });
                      })({ quest: t, locale: G, isQuestExpired: h }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: l()(R.ctaButtonContainer, R.gridCtaButtons),
                  children: [
                    !w &&
                      (0, i.jsx)(I, {
                        containerSize: s,
                        onClick: () => {
                          (0, f.navigateToQuestHome)(q.dr.QUESTS_CARD, n, t.id),
                            (0, m._3)({
                              questId: t.id,
                              questContent: n,
                              questContentPosition: L,
                              questContentCTA: m.jZ.LEARN_MORE,
                            });
                        },
                        children: A.intl.string(A.t.LLLLPD),
                      }),
                    h && !P
                      ? null
                      : (0, i.jsx)(M, {
                          quest: t,
                          progressState: y,
                          isCollectibleQuest: U,
                          location: n,
                          inGiftInventory: w,
                        }),
                  ],
                }),
                O &&
                  (0, i.jsx)(E.Z, {
                    className: R.gridProgressBar,
                    color: P
                      ? o.tokens.colors.TEXT_POSITIVE
                      : o.tokens.colors.BG_BRAND,
                    quest: t,
                    isInventory: w,
                  }),
              ],
            }),
            X &&
              (0, i.jsxs)("div", {
                className: R.microphoneContainer,
                children: [
                  (0, i.jsx)("div", { className: R.separator }),
                  (0, i.jsx)(v.Z, { quest: t, location: n }),
                ],
              }),
          ],
        });
      };
    },
    206044: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        o = n(100621),
        a = n(722770),
        u = n(442837),
        c = n(846519),
        d = n(481060),
        m = n(393238),
        x = n(607070),
        h = n(70097),
        C = n(210887),
        g = n(572004),
        p = n(617136),
        E = n(113434),
        j = n(497505),
        T = n(918701),
        f = n(475595),
        v = n(566078),
        S = n(685613),
        N = n(611855),
        q = n(644646),
        _ = n(670638),
        A = n(87894),
        R = n(46140),
        b = n(388032),
        I = n(821565);
      let M = (0, o.animated)(d.ChevronSmallDownIcon),
        Z = (0, o.animated)(h.Z),
        L = (e) => {
          let { quest: t, location: n, questContentPosition: l, ...r } = e,
            [o, a] = s.useState(!1),
            u = s.useRef(new c.V7());
          s.useEffect(() => {
            let e = u.current;
            return function () {
              e.stop();
            };
          }, []);
          let m = () => {
            (0, p._3)({
              questId: t.id,
              questContent: n,
              questContentCTA: p.jZ.COPY_QUEST_URL,
              questContentPosition: l,
            }),
              (0, g.JG)((0, T.Rs)(t.id)),
              a(!0),
              u.current.start(1e3, () => a(!1));
          };
          return (0, i.jsx)(d.Tooltip, {
            forceOpen: o,
            shouldShow: o,
            color: d.Tooltip.Colors.GREEN,
            text: b.intl.string(b.t.MSaeTU),
            children: () =>
              (0, i.jsx)(d.Button, {
                ...r,
                className: I.shareButton,
                color: d.Button.Colors.PRIMARY,
                size: d.Button.Sizes.SMALL,
                onClick: m,
                children: b.intl.string(b.t["5Z6rz8"]),
              }),
          });
        };
      t.Z = (e) => {
        var t, n;
        let {
            isFocused: l,
            isQuestExpired: c,
            quest: h,
            location: g,
            size: T,
            expansionSpring: y,
            isAnimating: B,
            isExpanded: P,
            isInConcurrentQuestExperiment: D,
            contentPosition: U,
            toggleExpanded: w,
          } = e,
          { ref: Q, height: k } = (0, m.Z)(),
          { ref: O, width: H, scrollWidth: z } = (0, m.Z)(),
          G = (0, u.e7)([C.Z], () => C.Z.getState().theme),
          W = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
          F = s.useMemo(() => (0, f.fh)(h, f.eC.HERO), [h]),
          V = s.useRef(null),
          X = (0, A.uq)(g),
          Y = g === j.jn.QUESTS_EMBED,
          K = (0, E.t5)(h, R.dr.QUESTS_CARD, g),
          J =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          $ = (0, E.B6)(h.config.expiresAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          ee = (0, E.B6)(v.r.build(h.config).rewardsExpireAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          et = (e) => {
            e.stopPropagation(),
              e.currentTarget.blur(),
              w(),
              (0, p._3)({
                questId: h.id,
                questContent: g,
                questContentCTA: P ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                questContentPosition: U,
              });
          };
        return (
          s.useEffect(() => {
            F.isAnimated &&
              null != V.current &&
              (l
                ? V.current.play()
                : !l && (V.current.pause(), (V.current.currentTime = 0)));
          }, [l, F]),
          (0, i.jsxs)("div", {
            className: r()(I.outerContainer, {
              [I.outerContainerGiftInventory]: X,
              [I.outerContainerEmbed]: Y,
              [I.outerContainerXs]: "xs" === T,
            }),
            "aria-label": b.intl.string(b.t.dcl9MT),
            style: { height: X ? k : void 0 },
            children: [
              (0, i.jsx)(Z, {
                style: { opacity: y.to({ range: [0, 1], output: [0.25, 1] }) },
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                className: I.questSplash,
                controls: !1,
                poster: F.url,
                ref: V,
                children:
                  !W &&
                  F.isAnimated &&
                  (0, i.jsx)("source", {
                    src: F.url,
                    type:
                      null !== (n = F.mimetype) && void 0 !== n ? n : void 0,
                  }),
              }),
              (0, i.jsxs)("div", {
                className: I.header,
                "aria-expanded": P,
                children: [
                  (0, i.jsxs)(o.animated.div, {
                    className: r()(I.headerContent, {
                      [I.headerContentEmbed]: Y,
                    }),
                    style: {
                      y: X
                        ? y.to({ range: [0, 1], output: [A.DJ, 0] })
                        : void 0,
                    },
                    children: [
                      X &&
                        (0, i.jsx)(o.animated.div, {
                          className: I.headerCollapsedContent,
                          style: {
                            opacity: y.to({ range: [0, 1], output: [1, 0] }),
                            visibility: B || !P ? "inherit" : "hidden",
                          },
                          "aria-hidden": !B && P,
                          children: (0, i.jsxs)(d.ClickableContainer, {
                            "aria-label": b.intl.string(b.t.dcl9MT),
                            onClick: et,
                            className: I.headerCollapsedClickableContainer,
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  I.headerCollapsedContentRewardWrapper,
                                children: (0, i.jsx)(q.Z, {
                                  quest: h,
                                  questContent: g,
                                  className: I.headerCollapsedRewardTile,
                                  location: R.dr.QUESTS_CARD,
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: I.headerCollapsedContentCopyWrapper,
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      I.headerCollapsedContentCopyLogos,
                                    children: [
                                      (0, i.jsx)(S.Z, {
                                        className: I.partnerBranding,
                                        gameTileSize: S.f.MEDIUM,
                                        quest: h,
                                        theme: G,
                                      }),
                                      (0, i.jsx)(N.Z, {
                                        color: "always-white",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    children: K,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      (0, i.jsxs)(o.animated.div, {
                        ref: (e) => {
                          Q.current = e;
                        },
                        className: r()(I.headerExpandedContent, {
                          [I.outerContainerGiftInventory]: X,
                          [I.outerContainerEmbed]: Y,
                        }),
                        style: {
                          opacity: y.to({ range: [0, 1], output: [0, 1] }),
                          visibility: B || P ? "inherit" : "hidden",
                        },
                        "aria-hidden": !B && !P,
                        children: [
                          (0, i.jsxs)("div", {
                            className: I.headerExpandedWrapper,
                            children: [
                              (0, i.jsxs)("div", {
                                className: I.iconLogotypeContainer,
                                children: [
                                  (0, i.jsx)(S.Z, {
                                    className: I.partnerBranding,
                                    gameTileSize: S.f.MEDIUM,
                                    quest: h,
                                    theme: G,
                                  }),
                                  Y
                                    ? null
                                    : (0, i.jsx)(N.Z, {
                                        color: "always-white",
                                      }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: I.questInfo,
                                children: [
                                  (0, i.jsx)(d.Tooltip, {
                                    text: h.config.messages.questName,
                                    shouldShow: null != H && null != z && H < z,
                                    children: (e) =>
                                      (0, i.jsx)(d.Heading, {
                                        ref: O,
                                        variant:
                                          "lg" === T
                                            ? "heading-xxl/bold"
                                            : "sm" === T
                                              ? "heading-xl/bold"
                                              : "heading-lg/bold",
                                        className: I.heading,
                                        ...e,
                                        children: b.intl.format(b.t.EAYZAg, {
                                          questName:
                                            h.config.messages.questName,
                                        }),
                                      }),
                                  }),
                                  (0, i.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    children: J
                                      ? b.intl.formatToPlainString(b.t.APddvL, {
                                          expirationDate: ee,
                                        })
                                      : c
                                        ? b.intl.formatToPlainString(
                                            b.t.v7xMw8,
                                            { expirationDate: $ },
                                          )
                                        : b.intl.formatToPlainString(
                                            b.t["pX+fmp"],
                                            { expirationDate: $ },
                                          ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          !c &&
                            X &&
                            (0, i.jsx)(L, {
                              quest: h,
                              location: g,
                              questContentPosition: U,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)(o.animated.div, {
                    className: I.iconsContainer,
                    style: {
                      top: X
                        ? y.to({
                            range: [0, 1],
                            output: [A.DJ / 2 - A.Z$ / 2, A.jc],
                          })
                        : A.jc,
                    },
                    children: [
                      (0, i.jsx)(_.r, {
                        questContent: g,
                        quest: h,
                        questContentPosition: U,
                        shouldShowDisclosure: !0,
                        hideLearnMore: X,
                        showShareLink: !c && Y,
                        children: (e) =>
                          (0, i.jsx)(o.animated.div, {
                            style: {
                              opacity: y,
                              visibility: B || P ? "inherit" : "hidden",
                            },
                            "aria-hidden": !B && !P,
                            children: (0, i.jsx)(d.Clickable, {
                              ...e,
                              className: I.iconWrapper,
                              "aria-label": b.intl.string(b.t.DEoVWV),
                              children: (0, i.jsx)(d.MoreHorizontalIcon, {
                                size: "md",
                                color: a.Z.WHITE,
                              }),
                            }),
                          }),
                      }),
                      D &&
                        !(0, A.W_)(g) &&
                        (0, i.jsx)(d.Clickable, {
                          onClick: et,
                          className: I.iconWrapper,
                          "aria-label": P
                            ? b.intl.string(b.t.iTcumZ)
                            : b.intl.string(b.t.dcl9MT),
                          children: (0, i.jsx)(M, {
                            style: {
                              rotate: y.to({ range: [0, 1], output: [0, 180] }),
                            },
                            color: a.Z.WHITE,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    266843: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
        h: function () {
          return o;
        },
      }),
        n(47120);
      var i = n(192379),
        s = n(481060),
        l = n(393238),
        r = n(87894);
      function o() {
        let e = i.useRef(null),
          [t, n] = i.useState("lg"),
          [s, o] = i.useState(void 0);
        return (
          (0, l.P)(e, (e) => {
            let { width: t, scrollHeight: i } = e;
            return (o(i), null == t || t > r.j2)
              ? n("lg")
              : t > r.Z0
                ? n("sm")
                : n("xs");
          }),
          { containerRef: e, size: t, height: s }
        );
      }
      function a(e) {
        let { initiallyExpanded: t } = e,
          [n, l] = i.useState(t),
          [r, o] = i.useState(!1),
          a = i.useCallback(() => {
            l((e) => !e), o(!0);
          }, []),
          { expansionSpring: u } = (0, s.useSpring)({
            expansionSpring: n ? 1 : 0,
            config: { tension: 450, friction: 45 },
            onRest: () => o(!1),
          });
        return {
          expansionSpring: u,
          isAnimating: r,
          isExpanded: n,
          toggleExpanded: a,
        };
      }
    },
    2660: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(442837),
        l = n(481060),
        r = n(204418),
        o = n(594174),
        a = n(113434),
        u = n(182294),
        c = n(644596);
      let d = (e) => {
        let { questConfig: t, fallback: n, isFocused: d } = e,
          m = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
          { avatarDecoration: x, isFetching: h } = (0, a.DU)(t);
        return h
          ? (0, i.jsx)("div", {
              className: c.questsCollectibleReward,
              children: (0, i.jsx)(l.Spinner, {}),
            })
          : null == m || null == x
            ? n
            : (0, i.jsx)("div", {
                className: c.questsCollectibleReward,
                children: (0, i.jsx)(r.Z, {
                  avatarSize: u.EF.SIZE_56,
                  user: m,
                  guildId: null,
                  avatarDecorationOverride: x,
                  animateOnHover: !d,
                }),
              });
      };
      t.Z = (e) => (0, i.jsx)(d, { ...e });
    },
    134483: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(120356),
        r = n.n(l),
        o = n(442837),
        a = n(780384),
        u = n(481060),
        c = n(358221),
        d = n(594190),
        m = n(687516),
        x = n(210887),
        h = n(937995),
        C = n(158776),
        g = n(594174),
        p = n(617136),
        E = n(272008),
        j = n(113434),
        T = n(569984),
        f = n(497505),
        v = n(918701),
        S = n(5881),
        N = n(475595),
        q = n(566078),
        _ = n(602667),
        A = n(340100),
        R = n(611855),
        b = n(644646),
        I = n(670638),
        M = n(667105),
        Z = n(860151),
        L = n(341907),
        y = n(46140),
        B = n(981631),
        P = n(354459),
        D = n(388032),
        U = n(684905);
      t.Z = function (e) {
        var t, n, l;
        let { channelId: w, previewQuest: Q, isParticipatingOverride: k } = e,
          [O, H] = s.useState(!1),
          z = s.useCallback(() => H(!0), []),
          G = s.useCallback(() => H(!1), []),
          W = s.useContext(h.h9),
          F = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
          V = (0, o.e7)([x.Z], () => x.Z.getState().theme),
          X = (0, a.wj)(V) ? B.BRd.DARK : B.BRd.LIGHT,
          { isCurrentUserStreamingQuestApplication: Y, quest: K } = (0, o.cj)(
            [C.Z, c.Z, T.Z],
            () => {
              var e, t, n, i;
              let s = c.Z.getParticipants(w),
                l =
                  null != Q
                    ? Q
                    : (function (e, t, n) {
                        for (let r of e) {
                          var i, s, l;
                          if (r.type === P.fO.STREAM) {
                            let e =
                                null !== (s = (0, m.Um)(r.stream, n)) &&
                                void 0 !== s
                                  ? s
                                  : null,
                              l = (0, v.ZZ)(t, e);
                            if (
                              null != l &&
                              (null === (i = l.userStatus) || void 0 === i
                                ? void 0
                                : i.claimedAt) == null
                            )
                              return l;
                          }
                          for (let i of e) {
                            if (!(0, P.I)(i))
                              for (let e of n.getActivities(i.user.id)) {
                                let n = (0, v.ZZ)(t, e);
                                if (
                                  null != n &&
                                  (null === (l = n.userStatus) || void 0 === l
                                    ? void 0
                                    : l.claimedAt) == null &&
                                  ((0, v.Nj)({ quest: n }) || (0, v.$J)(n))
                                )
                                  return n;
                              }
                          }
                        }
                        return null;
                      })(s, T.Z.quests, C.Z);
              return {
                isCurrentUserStreamingQuestApplication:
                  null != l &&
                  null != F &&
                  ((e = s),
                  (t = l),
                  (n = F),
                  (i = C.Z),
                  e.some((e) => {
                    if (e.type !== P.fO.STREAM || e.user.id !== n.id) return !1;
                    let s = (0, m.Um)(e.stream, i);
                    return null != s && (0, v._D)(s, t);
                  })),
                quest: l,
              };
            },
            [w, F, Q],
          ),
          J = null != K ? q.r.build(K.config) : null,
          $ = null == J ? void 0 : J.application.id,
          ee = (0, o.e7)(
            [d.ZP, C.Z],
            () => {
              if (null == K) return !1;
              let e = d.ZP.getRunningGames().map((e) => e.id);
              if ((0, v.$H)(K) && e.includes($)) return !0;
              let t =
                null != F
                  ? C.Z.findActivity(
                      F.id,
                      (e) => e.type !== B.IIU.CUSTOM_STATUS,
                    )
                  : null;
              return !!(null != t && (0, v.$J)(K) && (0, v._D)(t, K)) || !1;
            },
            [K, $, F],
          ),
          et = !0 === k || Y || ee,
          en = (0, o.e7)([T.Z], () => null != K && T.Z.isEnrolling(K.id), [K]),
          ei = (0, o.e7)(
            [c.Z],
            () =>
              ((null == F ? void 0 : F.id) == null
                ? null
                : c.Z.getParticipant(w, F.id)) != null,
            [w, F],
          ),
          es = (0, j.B6)(null == K ? void 0 : K.config.expiresAt),
          el = (0, j.B6)(null == J ? void 0 : J.rewardsExpireAt),
          er = s.useCallback(() => {
            null != K &&
              (0, E.AH)(K.id, {
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.ACCEPT_QUEST,
              });
          }, [K]),
          eo = s.useCallback(() => {
            null != K &&
              ((0, p._3)({
                questId: K.id,
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.TRACK_PROGRESS,
              }),
              (0, L.navigateToQuestHome)(
                y.dr.QUEST_CHANNEL_CALL_HEADER,
                f.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          ea = s.useCallback(() => {
            null != K &&
              ((0, p._3)({
                questId: K.id,
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: p.jZ.LEARN_MORE,
              }),
              (0, L.navigateToQuestHome)(
                y.dr.QUEST_CHANNEL_CALL_HEADER,
                f.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          eu = (0, M.hf)({ quest: K, location: f.jn.QUEST_LIVE_STREAM }),
          ec = s.useMemo(
            () =>
              (0, S.T)({ quest: K, location: y.dr.QUEST_CHANNEL_CALL_HEADER }),
            [K],
          ),
          ed = (0, j.tP)(K);
        if (null == K) return null;
        let em =
            (null === (t = K.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          ex =
            (null === (n = K.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          eh =
            null != K.userStatus &&
            (0, v.zE)(K.userStatus, f.jn.QUEST_LIVE_STREAM),
          eC = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_BAR),
          eg = (0, v.Mi)(K, f.jn.QUEST_BAR) && !eC;
        ec.info({
          isQuestCallHeaderDismissed: eh,
          isQuestExpired: ed,
          isQuestBarShowing: eg,
          isCurrentUserCallParticipant: ei,
        });
        let ep =
          null != Q &&
          (null === (l = K.userStatus) || void 0 === l
            ? void 0
            : l.claimedAt) == null;
        if ((!ep && (eh || ed || eg)) || (!ep && !ei)) return null;
        let eE = (0, v.il)(K),
          ej = (0, i.jsx)(b.Z, {
            className: U.rewardTile,
            autoplay: O,
            quest: K,
            questContent: f.jn.QUEST_LIVE_STREAM,
            location: y.dr.QUEST_CHANNEL_CALL_HEADER,
          });
        return (0, i.jsx)(_.A, {
          questOrQuests: K,
          overrideVisibility: !W,
          questContent: f.jn.QUEST_LIVE_STREAM,
          children: () => {
            var e;
            return (0, i.jsxs)("div", {
              className: r()(U.wrapper, { [U.wrapperAccepted]: em }),
              onFocus: z,
              onMouseEnter: z,
              onBlur: G,
              onMouseLeave: G,
              children: [
                !em &&
                  (0, i.jsxs)("div", {
                    className: U.rewardTileWrapper,
                    children: [
                      ej,
                      (0, i.jsx)(R.Z, {
                        bgOpacity: 0.32,
                        className: U.promotedTag,
                      }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: U.content,
                  children: [
                    (0, i.jsxs)("div", {
                      className: U.heading,
                      children: [
                        em && et
                          ? ej
                          : (0, i.jsx)("img", {
                              className: U.gameTile,
                              alt: K.config.messages.gameTitle,
                              src: (0, N.fh)(K, N.eC.GAME_TILE, X).url,
                            }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsxs)("div", {
                              className: U.headingWithSubmenu,
                              children: [
                                (0, i.jsx)(u.Heading, {
                                  className: U.questTitle,
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: et
                                    ? (0, v.AV)({ quest: K, taskDetails: eE })
                                    : D.intl.formatToPlainString(D.t.EQa7oq, {
                                        questName: K.config.messages.questName,
                                      }),
                                }),
                                (0, i.jsx)(I.r, {
                                  questContent: f.jn.QUEST_LIVE_STREAM,
                                  quest: K,
                                  preventIdle: !0,
                                  shouldShowDisclosure:
                                    (null === (e = K.userStatus) || void 0 === e
                                      ? void 0
                                      : e.enrolledAt) == null,
                                  children: (e) =>
                                    (0, i.jsx)(u.Clickable, {
                                      ...e,
                                      className: U.submenuWrapper,
                                      "aria-label": D.intl.string(D.t.DEoVWV),
                                      children: (0, i.jsx)(
                                        u.MoreHorizontalIcon,
                                        {
                                          size: "md",
                                          color: "currentColor",
                                          className: U.submenuIcon,
                                        },
                                      ),
                                    }),
                                }),
                              ],
                            }),
                            (0, i.jsx)(u.Text, {
                              color: "header-secondary",
                              variant: "text-xs/medium",
                              children: ex
                                ? D.intl.formatToPlainString(D.t.APddvL, {
                                    expirationDate: el,
                                  })
                                : D.intl.formatToPlainString(D.t["pX+fmp"], {
                                    expirationDate: es,
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    em &&
                      !ex &&
                      !et &&
                      (0, i.jsx)(Z.Z, {
                        autoplay: O,
                        quest: K,
                        questContent: f.jn.QUEST_LIVE_STREAM,
                        taskDetails: eE,
                        location: y.dr.QUEST_CHANNEL_CALL_HEADER,
                      }),
                    (0, i.jsxs)("div", {
                      className: U.ctas,
                      children: [
                        !em &&
                          (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(u.Button, {
                                className: U.cta,
                                color: u.Button.Colors.PRIMARY,
                                fullWidth: !0,
                                size: u.Button.Sizes.SMALL,
                                onClick: ea,
                                children: D.intl.string(D.t.LLLLPD),
                              }),
                              (0, i.jsx)(u.Button, {
                                className: U.cta,
                                color: u.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: er,
                                size: u.Button.Sizes.SMALL,
                                submitting: en,
                                children: D.intl.string(D.t.l7E81t),
                              }),
                            ],
                          }),
                        em &&
                          !ex &&
                          et &&
                          (0, i.jsx)(A.Z, {
                            color: u.tokens.colors.BG_BRAND,
                            quest: K,
                          }),
                        em &&
                          !ex &&
                          !et &&
                          (0, i.jsx)(u.Button, {
                            className: U.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eo,
                            size: u.Button.Sizes.SMALL,
                            children: D.intl.string(D.t.VN1Ajo),
                          }),
                        ex &&
                          (0, i.jsx)(u.Button, {
                            className: U.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eu,
                            size: u.Button.Sizes.SMALL,
                            children: D.intl.string(D.t.cfY4PD),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
        });
      };
    },
    683650: function (e, t, n) {
      n.d(t, {
        o: function () {
          return C;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(481060),
        o = n(497505),
        a = n(266843),
        u = n(341907),
        c = n(46140),
        d = n(388032),
        m = n(727506),
        x = n(87181);
      function h() {
        return (0, i.jsx)("div", {
          className: m.buttonContainer,
          children: (0, i.jsx)(r.Button, {
            className: m.button,
            color: r.ButtonColors.BRAND,
            onClick: () => {
              (0, u.navigateToQuestHome)(c.dr.EMBED_DESKTOP, o.jn.QUESTS_EMBED);
            },
            children: d.intl.string(d.t.GURBQk),
          }),
        });
      }
      function C() {
        let { containerRef: e, size: t } = (0, a.h)();
        return (0, i.jsxs)("div", {
          ref: (t) => (e.current = t),
          className: l()(m.container, {
            [m.wide]: "lg" === t,
            [m.tall]: "lg" !== t,
          }),
          children: [
            (0, i.jsxs)("div", {
              className: m.contentContainer,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "lg" === t ? "heading-xl/bold" : "heading-lg/bold",
                  color: "header-primary",
                  children: d.intl.string(d.t.vnP31d),
                }),
                (0, i.jsx)(r.Text, {
                  variant: "lg" === t ? "text-sm/medium" : "text-xs/medium",
                  color: "text-normal",
                  className: m.__invalid_mobileWebCopy,
                  children: d.intl.string(d.t.CTn0yc),
                }),
                (0, i.jsx)(h, {}),
              ],
            }),
            (0, i.jsx)("div", {
              className: m.imgContainer,
              children: (0, i.jsx)("img", {
                src: x,
                alt: "",
                className: m.missingQuestImage,
              }),
            }),
          ],
        });
      }
    },
    670638: function (e, t, n) {
      n.d(t, {
        r: function () {
          return f;
        },
      });
      var i = n(200651),
        s = n(192379),
        l = n(442837),
        r = n(481060),
        o = n(239091),
        a = n(479531),
        u = n(390322),
        c = n(617136),
        d = n(272008),
        m = n(113434),
        x = n(569984),
        h = n(497505),
        C = n(918701),
        g = n(341907),
        p = n(46140),
        E = n(231338),
        j = n(388032);
      function T(e) {
        var t;
        let n = (0, l.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
          u = (0, C.GN)(e.questContent),
          T = (0, C.cr)(e.quest),
          f = [h.jn.QUEST_BAR_V2, h.jn.QUEST_BAR].includes(e.questContent),
          v = (0, C.zK)(e.quest, p.S7.DISMISSAL_SURVEY),
          {
            handleComplete: S,
            handleProgress: N,
            handleResetDismissibilityClick: q,
            handleResetStatusClick: _,
            handleOverrideDeliveryClick: A,
          } = (0, m.kJ)(e.quest.id),
          R = s.useCallback(() => {
            (0, C.FE)(e.quest, {
              content: e.questContent,
              ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
            });
          }, [e.quest, e.questContent]),
          b = s.useCallback(() => {
            (0, C.f2)(e.quest.id, {
              content: e.questContent,
              position: e.questContentPosition,
              ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK,
            }),
              (0, r.showToast)(
                (0, r.createToast)(
                  j.intl.string(j.t["+5kSoa"]),
                  r.ToastType.SUCCESS,
                ),
              );
          }, [e.quest, e.questContent, e.questContentPosition]),
          I = (e) =>
            (0, r.showToast)(
              (0, r.createToast)(
                new a.Z(e, e.status).message,
                r.ToastType.FAILURE,
              ),
            ),
          M = () => (0, d.is)(e.quest.id).catch(I),
          Z = s.useMemo(() => (T ? j.t.hvVgAQ : j.t.lwQdjI), [T]);
        return (0, i.jsxs)(r.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, o.Zy)();
          },
          navId: "quests-entry",
          "aria-label": j.intl.string(j.t.ogxXGh),
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : E.dG,
          children: [
            (0, i.jsxs)(
              r.MenuGroup,
              {
                children: [
                  (0, i.jsx)(r.MenuItem, {
                    id: "play-game",
                    label: j.intl.string(Z),
                    action: R,
                    icon: r.LinkExternalMediumIcon,
                  }),
                  !0 === e.showShareLink &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "share-link",
                      label: j.intl.string(j.t.RDE0SU),
                      action: b,
                      icon: r.CopyIcon,
                    }),
                ],
              },
              "major-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "learn-more",
                      label: j.intl.string(j.t["0SzXmp"]),
                      action: () => {
                        (0, c._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, g.navigateToQuestHome)(
                            p.dr.QUEST_CONTEXT_MENU,
                            e.questContent,
                            e.quest.id,
                          );
                      },
                      icon: r.QuestsIcon,
                    }),
                  e.shouldShowDisclosure &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "display-disclosure",
                      label: j.intl.string(j.t.GcsZKC),
                      action: () => {
                        (0, g.openDisclosureModal)(e.quest, {
                          content: e.questContent,
                          position: e.questContentPosition,
                          ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                        });
                      },
                    }),
                  u &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "hide-entrypoint",
                      label: j.intl.string(j.t.NN79Ex),
                      action: () => {
                        if (
                          ((0, c._3)({
                            questId: e.quest.id,
                            questContent: e.questContent,
                            questContentPosition: e.questContentPosition,
                            questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT,
                          }),
                          !!(0, C.GN)(e.questContent))
                        )
                          (0, d.gl)(e.quest.id, e.questContent),
                            v && f && (0, g.maybeShowSurveyForQuest)(e.quest);
                      },
                      subtext: j.intl.string(j.t["1u3YPD"]),
                    }),
                ],
              },
              "minor-actions",
            ),
            e.quest.preview &&
              (0, i.jsxs)(
                r.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, i.jsx)(r.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: A,
                    }),
                    (0, i.jsx)(r.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: q,
                    }),
                    (0, i.jsx)(r.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: () => {
                        _(), M();
                      },
                    }),
                    (0, i.jsx)(r.MenuItem, {
                      id: "progress",
                      label: "Set Random Quest Progress",
                      action: () => {
                        N(0.9 * Math.random() + 0.03);
                      },
                    }),
                    (0, i.jsx)(r.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: S,
                    }),
                    (0, C.$J)(e.quest) &&
                      (0, i.jsxs)(r.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, i.jsx)(r.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, C.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, i.jsx)(r.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, d.CS)(e.quest.id, !0).catch(I),
                          }),
                          (0, i.jsx)(r.MenuItem, {
                            id: "stop",
                            label: "Stop heartbeat",
                            action: M,
                          }),
                        ],
                      }),
                  ],
                },
                "preview-controls",
              ),
          ],
        });
      }
      function f(e) {
        let {
            children: t,
            onOpen: n,
            onClose: l,
            preventIdle: o,
            quest: a,
            questContent: d,
            questContentPosition: m,
            ...x
          } = e,
          h = s.useCallback(() => {
            (0, c._3)({
              questId: a.id,
              questContent: d,
              questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: m,
            }),
              null != n && n();
          }, [n, a.id, d, m]);
        return (0, i.jsx)(r.Popout, {
          onRequestOpen: h,
          onRequestClose: l,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
              ? (0, i.jsx)(u.Z, {
                  children: (0, i.jsx)(T, {
                    ...x,
                    quest: a,
                    questContent: d,
                    questContentPosition: m,
                    onClose: t,
                  }),
                })
              : (0, i.jsx)(T, {
                  ...x,
                  quest: a,
                  questContent: d,
                  questContentPosition: m,
                  onClose: t,
                });
          },
          animation: r.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    26650: function (e, t, n) {
      var i = n(200651),
        s = n(192379),
        l = n(481060),
        r = n(377171),
        o = n(352137);
      t.Z = s.forwardRef(function (e, t) {
        let { isInventory: n, style: s, children: a } = e;
        return (0, i.jsxs)("div", {
          ref: t,
          className: o.desktopTooltip,
          style: { marginTop: n ? 8 : 0, ...s },
          children: [
            (0, i.jsx)(l.CircleInformationIcon, {
              size: "custom",
              className: o.infoIcon,
              height: n ? 16 : 12,
              width: n ? 16 : 12,
              color: n ? r.Z.TEXT_MUTED : r.Z.WHITE,
            }),
            (0, i.jsx)(l.Text, {
              color: n ? "text-muted" : "always-white",
              variant: n ? "text-xs/normal" : "text-xxs/normal",
              children: a,
            }),
          ],
        });
      });
    },
    860151: function (e, t, n) {
      var i = n(200651);
      n(192379);
      var s = n(120356),
        l = n.n(s),
        r = n(481060),
        o = n(585500),
        a = n(644646),
        u = n(89246);
      t.Z = function (e) {
        let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: c,
            taskDetails: d,
            location: m,
          } = e,
          x = (0, o.D)({
            quest: s,
            taskDetails: d,
            location: m,
            questContent: c,
          });
        return (0, i.jsxs)("div", {
          className: l()(u.wrapper, t),
          style: { color: s.config.colors.primary },
          children: [
            (0, i.jsx)(a.Z, {
              autoplay: n,
              className: u.rewardTile,
              quest: s,
              questContent: c,
              location: m,
            }),
            (0, i.jsx)(r.Text, {
              className: u.instructions,
              variant: "text-sm/normal",
              color: "text-normal",
              children: x,
            }),
          ],
        });
      };
    },
    390322: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651),
        s = n(192379),
        l = n(618158);
      function r(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: r } = (0, l.Y)("popup");
        return (
          s.useEffect(() => (n(), () => r()), [r, n]),
          (0, i.jsx)(i.Fragment, { children: t })
        );
      }
    },
  },
]);
//# sourceMappingURL=d2ded67ed6ff830e8f8a.js.map
