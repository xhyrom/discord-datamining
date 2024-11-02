"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99393"],
  {
    87181: function (e) {
      e.exports = "/assets/d941d0168367773932fe.svg";
    },
    789002: function (e) {
      e.exports = "/assets/a07e8868e18d0c063624.svg";
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
        d = n(475595),
        c = n(78826),
        m = n(46140),
        x = n(981631),
        C = n(789935);
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
          h = (0, a.wj)(s) ? x.BRd.DARK : x.BRd.LIGHT,
          g = (0, u.vI)(i, m.dr.QUESTS_BAR);
        return (0, l.jsxs)("div", {
          className: o()(C.partnerBranding, t),
          children: [
            r &&
              (0, l.jsx)(c.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, l.jsx)("img", {
                    ref: e,
                    className: C.partnerBrandingGameTile,
                    alt: "",
                    src: (0, d.fh)(i, d.eC.GAME_TILE, h).url,
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
            (0, l.jsx)(c.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, l.jsx)("img", {
                  ref: e,
                  className: o()(C.partnerBrandingLogotype, {
                    [C.rewardHighlightLogotype]: g,
                  }),
                  alt: i.config.messages.gameTitle,
                  src: (0, d.fh)(i, d.eC.LOGO_TYPE, h).url,
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
        d = n(597799);
      t.Z = function (e) {
        let {
            className: t,
            color: n = r.Z.colors.WHITE,
            quest: s,
            isInventory: c,
          } = e,
          m = (0, a.qb)(e.quest),
          { percentComplete: x, completedRatioDisplay: C } = (0, a.I)(s);
        return !c && m.length > 0
          ? (0, i.jsx)(u.Z, { children: m.at(0) })
          : (0, i.jsxs)("div", {
              className: l()(d.wrapper, t),
              style: { color: n.css },
              children: [
                (0, i.jsxs)("div", {
                  className: d.percentCompleteWrapper,
                  children: [
                    (0, i.jsx)(o.Text, {
                      variant: "text-xs/semibold",
                      className: d.percentCompleteLabel,
                      color: "none",
                      children: C,
                    }),
                    (0, i.jsx)("div", {
                      className: d.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - x, "%") },
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: d.progressBar,
                  role: "progressbar",
                  "aria-valuenow": x,
                  children: (0, i.jsx)("div", {
                    className: d.progressBarFill,
                    style: { width: "".concat(x, "%") },
                  }),
                }),
                m.length > 0 &&
                  (0, i.jsx)(u.Z, { isInventory: c, children: m.at(0) }),
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
        a = n(967979);
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
        d = n(553795),
        c = n(358085),
        m = n(617136),
        x = n(111382),
        C = n(113434),
        h = n(918701),
        g = n(566078),
        p = n(667105),
        E = n(388032),
        j = n(727526);
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
          (0, h.Nj)({ quest: t }) &&
            x.push(
              (0, c.isWeb)()
                ? E.intl.string(E.t["0UTkPz"])
                : E.intl.string(E.t.XGRUho),
            );
          let C = [
            ...x,
            ...s.map((e) => {
              if (e.type !== r.K.EXPIRED_CREDENTIAL || !u) return e.message;
              let i = d.Z.getAccount(
                  e.connected_account_id,
                  e.connected_account_type,
                ),
                s = (0, h.C9)(e),
                l = (0, h._j)(e);
              return E.intl.format(s, {
                account_name: null == i ? void 0 : i.name,
                onClick: () => {
                  (0, h.fY)(
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
            children: C.reduce((e, t) => [...e, t, " "], []),
          });
        };
      t.Z = function (e) {
        let t = g.r.build(e.quest.config).application.name,
          n = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          s = (0, p.k3)(e.quest.id, e.location),
          r = (0, x.n)(),
          d = (0, p.g2)({ useReducedMotion: n, className: j.refreshIcon }),
          {
            errorHints: c,
            startingConsoleQuest: h,
            startConsoleQuest: S,
          } = (0, C.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
              d.startAnimation(),
                (0, m._3)({
                  questId: e.quest.id,
                  questContent: e.location,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: d.stopAnimation,
          });
        return (0, i.jsxs)("div", {
          className: l()(j.container, { [j.inFlight]: h }),
          children: [
            (0, i.jsxs)("div", {
              className: j.info,
              children: [
                (0, i.jsxs)("div", {
                  className: j.header,
                  children: [
                    (0, i.jsx)(a.CircleWarningIcon, {
                      className: l()(j.headerIcon, T(c)),
                      size: "custom",
                      color: "currentColor",
                      width: 16,
                      height: 16,
                    }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-sm/semibold",
                      children: f(c, t),
                    }),
                  ],
                }),
                v({
                  quest: e.quest,
                  errors: c,
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
                disabled: h,
                children: (0, i.jsxs)("div", {
                  className: j.ctaInner,
                  children: [d.render(), E.intl.string(E.t.nPThNT)],
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
          return c;
        },
        Z0: function () {
          return C;
        },
        iM: function () {
          return a;
        },
        j2: function () {
          return x;
        },
        jc: function () {
          return d;
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
        d = 20,
        c = 32,
        m = 1e3,
        x = 460,
        C = 280;
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
        d = n(87894),
        c = n(372113),
        m = n(206044),
        x = n(266843),
        C = n(46140),
        h = n(271074);
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
          _ = (0, r.q)({ location: C.dr.QUESTS_CARD }),
          {
            expansionSpring: A,
            isAnimating: R,
            isExpanded: b,
            toggleExpanded: I,
          } = (0, x.O)({
            initiallyExpanded: !_ || g || (0, d.iM)({ location: n, quest: t }),
          }),
          M = null != q ? q : d.U0;
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
                      : A.to({ range: [0, 1], output: [d.DJ, M] }),
                },
                className: h.questsCard,
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
                    (0, i.jsx)(c.Z, {
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
        d = n(63063),
        c = n(930153),
        m = n(617136),
        x = n(113434),
        C = n(569984),
        h = n(497505),
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
        R = n(389444),
        b = n(789002);
      let I = (e, t, n) =>
        (0, S.uq)(e) && !n && "lg" === t
          ? "text-lg/medium"
          : "lg" === t
            ? "text-md/medium"
            : "sm" === t
              ? "text-sm/medium"
              : "text-xs/medium";
      function M(e) {
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
      function L(e) {
        let {
            quest: t,
            progressState: n,
            isCollectibleQuest: s,
            location: l,
            questContentPosition: u,
            inGiftInventory: d,
          } = e,
          c = n >= x.OH.COMPLETED,
          m = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
          h = (0, r.e7)([C.Z], () => C.Z.isEnrolling(t.id)),
          p = (0, g.zK)(t, q.S7.IN_HOUSE_CONSOLE_QUEST),
          E = (0, g.cr)(t),
          j = (0, T.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: p,
            location: l,
            isCollectibleQuest: s,
            questContentPosition: u,
            inGiftInventory: d,
            isVideoQuest: E,
          }),
          f = p && d && c,
          v = f ? R.inHouseButton : o.ButtonColors.BRAND,
          S = c && !m ? o.ShinyButton : o.Button;
        return (0, i.jsx)(
          o.Tooltip,
          {
            text: j.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
              var t;
              return (0, i.jsx)(S, {
                ...e,
                wrapperClassName: R.ctaButtonWrapper,
                color: v,
                disabled: null == j.onClick,
                submitting: h,
                onClick:
                  null !== (t = j.onClick) && void 0 !== t ? t : () => {},
                children: (0, i.jsxs)("div", {
                  className: R.ctaButtonInner,
                  children: [
                    f &&
                      (0, i.jsx)("img", {
                        src: b,
                        alt: "",
                        className: R.inHouseIcon,
                      }),
                    j.text,
                  ],
                }),
              });
            },
          },
          j.tooltipText,
        );
      }
      t.Z = (e) => {
        let {
            quest: t,
            location: n,
            size: s,
            isFocused: a,
            isQuestExpired: C,
            isExpanded: T,
            isAnimating: b,
            contentPosition: Z,
          } = e,
          y = (0, x._Q)(t),
          P = y >= x.OH.ACCEPTED,
          B = y >= x.OH.COMPLETED,
          U = y >= x.OH.CLAIMED,
          D = (0, g.Xv)(t.config),
          O = (0, S.uq)(n),
          w = n === h.jn.QUESTS_EMBED,
          Q = T || b,
          k = P && !U && O,
          H = (0, x.t5)(t, q.dr.QUESTS_CARD, n),
          { xboxAndPlaystationAccounts: z } = (0, x.z6)(),
          W = (0, r.e7)([u.default], () => u.default.locale),
          G = (0, x.z)(t),
          F = O && D,
          V = C && !B,
          X = z.length > 0 && O && (0, g.$J)(t) && P && !B && !G,
          Y = (0, i.jsx)(j.Z, {
            autoplay: a,
            className: l()(R.gridImg, {
              [R.questRewardGiftInventory]: O && "lg" === s,
              [R.questRewardEmbed]: w && "lg" === s,
              [R.questRewardEmbedSm]: "sm" === s,
              [R.questRewardEmbedXs]: "xs" === s,
            }),
            learnMoreStyle: O ? null : "text",
            location: q.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: Z,
          });
        return (0, i.jsxs)("div", {
          className: R.root,
          children: [
            (0, i.jsxs)("div", {
              className: l()(R.outerContainer, {
                [R.outerContainerSm]: "sm" === s,
                [R.outerContainerXs]: "xs" === s,
                [R.outerContainerNoProgress]: !k,
              }),
              style: { visibility: Q ? "inherit" : "hidden" },
              "aria-hidden": !Q,
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
                        C &&
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
                      variant: I(n, s, P),
                      className: R.taskInstructions,
                      children: C
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
                        let {
                            quest: o,
                            location: a,
                            locale: u,
                            isQuestExpired: m,
                          } = e,
                          C =
                            (null === (t = o.userStatus) || void 0 === t
                              ? void 0
                              : t.completedAt) != null,
                          h =
                            C &&
                            (null === (n = o.userStatus) || void 0 === n
                              ? void 0
                              : n.claimedAt) != null,
                          E = (0, g.zK)(o, q.S7.IN_HOUSE_CONSOLE_QUEST),
                          j = (0, S.uq)(a),
                          T = (0, x.B6)(
                            null === (i = o.userStatus) || void 0 === i
                              ? void 0
                              : i.completedAt,
                            { year: "numeric", month: "long", day: "numeric" },
                          ),
                          f = (0, g.oo)({ quest: o }),
                          v = p.r.build(o.config).defaultReward.messages
                            .nameWithArticle,
                          N = (0, g.Kr)(o.config),
                          R = (0, g.b7)(o);
                        if (C && E && j)
                          return A.intl.formatToPlainString(A.t.l1jCMz, {
                            date: T,
                          });
                        if (h) {
                          let e = f
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
                                date: T,
                              })
                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                reward: v,
                                date: T,
                              });
                        }
                        if (C)
                          return f
                            ? A.intl.formatToPlainString(A.t.l1jCMz, {
                                date: T,
                              })
                            : A.intl.formatToPlainString(A.t.zNoqRU, {
                                reward: v,
                                date: T,
                              });
                        let b = f ? (0, g.o9)({ quest: o, idx: 0 }) : null;
                        return m
                          ? A.intl.formatToPlainString(A.t.DT3aub, {
                              reward:
                                null !==
                                  (r =
                                    null == b
                                      ? void 0
                                      : b.messages.nameWithArticle) &&
                                void 0 !== r
                                  ? r
                                  : v,
                            })
                          : null != b && null != b.approximateCount
                            ? A.intl.format(A.t["4bMK19"], {
                                maxReward: b.messages.nameWithArticle,
                                maxRewardCount: (0, c.Bs)(
                                  b.approximateCount,
                                  u,
                                ),
                                helpCenterLink: d.Z.getArticleURL(
                                  _.BhN.QUESTS_LEARN_MORE,
                                ),
                              })
                            : null != N
                              ? A.intl.formatToPlainString(A.t.Pu5eyM, {
                                  reward: v,
                                  duration: N,
                                })
                              : null != R
                                ? R.description
                                : A.intl.formatToPlainString(A.t.ttFsLi, {
                                    reward: v,
                                  });
                      })({
                        quest: t,
                        location: n,
                        locale: W,
                        isQuestExpired: C,
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: l()(R.ctaButtonContainer, R.gridCtaButtons),
                  children: [
                    !O &&
                      (0, i.jsx)(M, {
                        containerSize: s,
                        onClick: () => {
                          (0, f.navigateToQuestHome)(q.dr.QUESTS_CARD, n, t.id),
                            (0, m._3)({
                              questId: t.id,
                              questContent: n,
                              questContentPosition: Z,
                              questContentCTA: m.jZ.LEARN_MORE,
                            });
                        },
                        children: A.intl.string(A.t.LLLLPD),
                      }),
                    C && !B
                      ? null
                      : (0, i.jsx)(L, {
                          quest: t,
                          progressState: y,
                          isCollectibleQuest: D,
                          location: n,
                          inGiftInventory: O,
                        }),
                  ],
                }),
                k &&
                  (0, i.jsx)(E.Z, {
                    className: R.gridProgressBar,
                    color: B
                      ? o.tokens.colors.TEXT_POSITIVE
                      : o.tokens.colors.BG_BRAND,
                    quest: t,
                    isInventory: O,
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
        d = n(846519),
        c = n(481060),
        m = n(393238),
        x = n(607070),
        C = n(70097),
        h = n(210887),
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
        I = n(128175);
      let M = (0, o.animated)(c.ChevronSmallDownIcon),
        L = (0, o.animated)(C.Z),
        Z = (e) => {
          let { quest: t, location: n, questContentPosition: l, ...r } = e,
            [o, a] = s.useState(!1),
            u = s.useRef(new d.V7());
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
          return (0, i.jsx)(c.Tooltip, {
            forceOpen: o,
            shouldShow: o,
            color: c.Tooltip.Colors.GREEN,
            text: b.intl.string(b.t.MSaeTU),
            children: () =>
              (0, i.jsx)(c.Button, {
                ...r,
                className: I.shareButton,
                color: c.Button.Colors.PRIMARY,
                size: c.Button.Sizes.SMALL,
                onClick: m,
                children: b.intl.string(b.t["5Z6rz8"]),
              }),
          });
        };
      t.Z = (e) => {
        var t, n;
        let {
            isFocused: l,
            isQuestExpired: d,
            quest: C,
            location: g,
            size: T,
            expansionSpring: y,
            isAnimating: P,
            isExpanded: B,
            isInConcurrentQuestExperiment: U,
            contentPosition: D,
            toggleExpanded: O,
          } = e,
          { ref: w, height: Q } = (0, m.Z)(),
          { ref: k, width: H, scrollWidth: z } = (0, m.Z)(),
          W = (0, u.e7)([h.Z], () => h.Z.getState().theme),
          G = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
          F = s.useMemo(() => (0, f.fh)(C, f.eC.HERO), [C]),
          V = s.useRef(null),
          X = (0, A.uq)(g),
          Y = g === j.jn.QUESTS_EMBED,
          K = (0, E.t5)(C, R.dr.QUESTS_CARD, g),
          J =
            (null === (t = C.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          $ = (0, E.B6)(C.config.expiresAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          ee = (0, E.B6)(v.r.build(C.config).rewardsExpireAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          et = (e) => {
            e.stopPropagation(),
              e.currentTarget.blur(),
              O(),
              (0, p._3)({
                questId: C.id,
                questContent: g,
                questContentCTA: B ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                questContentPosition: D,
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
            style: { height: X ? Q : void 0 },
            children: [
              (0, i.jsx)(L, {
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
                  !G &&
                  F.isAnimated &&
                  (0, i.jsx)("source", {
                    src: F.url,
                    type:
                      null !== (n = F.mimetype) && void 0 !== n ? n : void 0,
                  }),
              }),
              (0, i.jsxs)("div", {
                className: I.header,
                "aria-expanded": B,
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
                            visibility: P || !B ? "inherit" : "hidden",
                          },
                          "aria-hidden": !P && B,
                          children: (0, i.jsxs)(c.ClickableContainer, {
                            "aria-label": b.intl.string(b.t.dcl9MT),
                            onClick: et,
                            className: I.headerCollapsedClickableContainer,
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  I.headerCollapsedContentRewardWrapper,
                                children: (0, i.jsx)(q.Z, {
                                  quest: C,
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
                                        quest: C,
                                        theme: W,
                                      }),
                                      (0, i.jsx)(N.Z, {
                                        color: "always-white",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(c.Text, {
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
                          w.current = e;
                        },
                        className: r()(I.headerExpandedContent, {
                          [I.outerContainerGiftInventory]: X,
                          [I.outerContainerEmbed]: Y,
                        }),
                        style: {
                          opacity: y.to({ range: [0, 1], output: [0, 1] }),
                          visibility: P || B ? "inherit" : "hidden",
                        },
                        "aria-hidden": !P && !B,
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
                                    quest: C,
                                    theme: W,
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
                                  (0, i.jsx)(c.Tooltip, {
                                    text: C.config.messages.questName,
                                    shouldShow: null != H && null != z && H < z,
                                    children: (e) =>
                                      (0, i.jsx)(c.Heading, {
                                        ref: k,
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
                                            C.config.messages.questName,
                                        }),
                                      }),
                                  }),
                                  (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: J
                                      ? b.intl.formatToPlainString(b.t.APddvL, {
                                          expirationDate: ee,
                                        })
                                      : d
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
                          !d &&
                            X &&
                            (0, i.jsx)(Z, {
                              quest: C,
                              location: g,
                              questContentPosition: D,
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
                        quest: C,
                        questContentPosition: D,
                        shouldShowDisclosure: !0,
                        hideLearnMore: X,
                        showShareLink: !d && Y,
                        children: (e) =>
                          (0, i.jsx)(o.animated.div, {
                            style: {
                              opacity: y,
                              visibility: P || B ? "inherit" : "hidden",
                            },
                            "aria-hidden": !P && !B,
                            children: (0, i.jsx)(c.Clickable, {
                              ...e,
                              className: I.iconWrapper,
                              "aria-label": b.intl.string(b.t.DEoVWV),
                              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                size: "md",
                                color: a.Z.WHITE,
                              }),
                            }),
                          }),
                      }),
                      U &&
                        !(0, A.W_)(g) &&
                        (0, i.jsx)(c.Clickable, {
                          onClick: et,
                          className: I.iconWrapper,
                          "aria-label": B
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
        d = n(52539);
      let c = (e) => {
        let { questConfig: t, fallback: n, isFocused: c } = e,
          m = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
          { avatarDecoration: x, isFetching: C } = (0, a.DU)(t);
        return C
          ? (0, i.jsx)("div", {
              className: d.questsCollectibleReward,
              children: (0, i.jsx)(l.Spinner, {}),
            })
          : null == m || null == x
            ? n
            : (0, i.jsx)("div", {
                className: d.questsCollectibleReward,
                children: (0, i.jsx)(r.Z, {
                  avatarSize: u.EF.SIZE_56,
                  user: m,
                  guildId: null,
                  avatarDecorationOverride: x,
                  animateOnHover: !c,
                }),
              });
      };
      t.Z = (e) => (0, i.jsx)(c, { ...e });
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
        d = n(358221),
        c = n(594190),
        m = n(687516),
        x = n(210887),
        C = n(937995),
        h = n(158776),
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
        L = n(860151),
        Z = n(341907),
        y = n(46140),
        P = n(981631),
        B = n(354459),
        U = n(388032),
        D = n(869630);
      t.Z = function (e) {
        var t, n, l;
        let { channelId: O, previewQuest: w, isParticipatingOverride: Q } = e,
          [k, H] = s.useState(!1),
          z = s.useCallback(() => H(!0), []),
          W = s.useCallback(() => H(!1), []),
          G = s.useContext(C.h9),
          F = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
          V = (0, o.e7)([x.Z], () => x.Z.getState().theme),
          X = (0, a.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT,
          { isCurrentUserStreamingQuestApplication: Y, quest: K } = (0, o.cj)(
            [h.Z, d.Z, T.Z],
            () => {
              var e, t, n, i;
              let s = d.Z.getParticipants(O),
                l =
                  null != w
                    ? w
                    : (function (e, t, n) {
                        for (let r of e) {
                          var i, s, l;
                          if (r.type === B.fO.STREAM) {
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
                            if (!(0, B.I)(i))
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
                      })(s, T.Z.quests, h.Z);
              return {
                isCurrentUserStreamingQuestApplication:
                  null != l &&
                  null != F &&
                  ((e = s),
                  (t = l),
                  (n = F),
                  (i = h.Z),
                  e.some((e) => {
                    if (e.type !== B.fO.STREAM || e.user.id !== n.id) return !1;
                    let s = (0, m.Um)(e.stream, i);
                    return null != s && (0, v._D)(s, t);
                  })),
                quest: l,
              };
            },
            [O, F, w],
          ),
          J = null != K ? q.r.build(K.config) : null,
          $ = null == J ? void 0 : J.application.id,
          ee = (0, o.e7)(
            [c.ZP, h.Z],
            () => {
              if (null == K) return !1;
              let e = c.ZP.getRunningGames().map((e) => e.id);
              if ((0, v.$H)(K) && e.includes($)) return !0;
              let t =
                null != F
                  ? h.Z.findActivity(
                      F.id,
                      (e) => e.type !== P.IIU.CUSTOM_STATUS,
                    )
                  : null;
              return !!(null != t && (0, v.$J)(K) && (0, v._D)(t, K)) || !1;
            },
            [K, $, F],
          ),
          et = !0 === Q || Y || ee,
          en = (0, o.e7)([T.Z], () => null != K && T.Z.isEnrolling(K.id), [K]),
          ei = (0, o.e7)(
            [d.Z],
            () =>
              ((null == F ? void 0 : F.id) == null
                ? null
                : d.Z.getParticipant(O, F.id)) != null,
            [O, F],
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
              (0, Z.navigateToQuestHome)(
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
              (0, Z.navigateToQuestHome)(
                y.dr.QUEST_CHANNEL_CALL_HEADER,
                f.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          eu = (0, M.hf)({ quest: K, location: f.jn.QUEST_LIVE_STREAM }),
          ed = s.useMemo(
            () =>
              (0, S.T)({ quest: K, location: y.dr.QUEST_CHANNEL_CALL_HEADER }),
            [K],
          ),
          ec = (0, j.tP)(K);
        if (null == K || !(0, v.dl)(K)) return null;
        let em =
            (null === (t = K.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          ex =
            (null === (n = K.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          eC =
            null != K.userStatus &&
            (0, v.zE)(K.userStatus, f.jn.QUEST_LIVE_STREAM),
          eh = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_BAR),
          eg = (0, v.Mi)(K, f.jn.QUEST_BAR) && !eh;
        ed.info({
          isQuestCallHeaderDismissed: eC,
          isQuestExpired: ec,
          isQuestBarShowing: eg,
          isCurrentUserCallParticipant: ei,
        });
        let ep =
          null != w &&
          (null === (l = K.userStatus) || void 0 === l
            ? void 0
            : l.claimedAt) == null;
        if ((!ep && (eC || ec || eg)) || (!ep && !ei)) return null;
        let eE = (0, v.il)(K),
          ej = (0, i.jsx)(b.Z, {
            className: D.rewardTile,
            autoplay: k,
            quest: K,
            questContent: f.jn.QUEST_LIVE_STREAM,
            location: y.dr.QUEST_CHANNEL_CALL_HEADER,
          });
        return (0, i.jsx)(_.A, {
          questOrQuests: K,
          overrideVisibility: !G,
          questContent: f.jn.QUEST_LIVE_STREAM,
          children: () => {
            var e;
            return (0, i.jsxs)("div", {
              className: r()(D.wrapper, { [D.wrapperAccepted]: em }),
              onFocus: z,
              onMouseEnter: z,
              onBlur: W,
              onMouseLeave: W,
              children: [
                !em &&
                  (0, i.jsxs)("div", {
                    className: D.rewardTileWrapper,
                    children: [
                      ej,
                      (0, i.jsx)(R.Z, {
                        bgOpacity: 0.32,
                        className: D.promotedTag,
                      }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: D.content,
                  children: [
                    (0, i.jsxs)("div", {
                      className: D.heading,
                      children: [
                        em && et
                          ? ej
                          : (0, i.jsx)("img", {
                              className: D.gameTile,
                              alt: K.config.messages.gameTitle,
                              src: (0, N.fh)(K, N.eC.GAME_TILE, X).url,
                            }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsxs)("div", {
                              className: D.headingWithSubmenu,
                              children: [
                                (0, i.jsx)(u.Heading, {
                                  className: D.questTitle,
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: et
                                    ? (0, v.AV)({ quest: K, taskDetails: eE })
                                    : U.intl.formatToPlainString(U.t.EQa7oq, {
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
                                      className: D.submenuWrapper,
                                      "aria-label": U.intl.string(U.t.DEoVWV),
                                      children: (0, i.jsx)(
                                        u.MoreHorizontalIcon,
                                        {
                                          size: "md",
                                          color: "currentColor",
                                          className: D.submenuIcon,
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
                                ? U.intl.formatToPlainString(U.t.APddvL, {
                                    expirationDate: el,
                                  })
                                : U.intl.formatToPlainString(U.t["pX+fmp"], {
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
                      (0, i.jsx)(L.Z, {
                        autoplay: k,
                        quest: K,
                        questContent: f.jn.QUEST_LIVE_STREAM,
                        taskDetails: eE,
                        location: y.dr.QUEST_CHANNEL_CALL_HEADER,
                      }),
                    (0, i.jsxs)("div", {
                      className: D.ctas,
                      children: [
                        !em &&
                          (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(u.Button, {
                                className: D.cta,
                                color: u.Button.Colors.PRIMARY,
                                fullWidth: !0,
                                size: u.Button.Sizes.SMALL,
                                onClick: ea,
                                children: U.intl.string(U.t.LLLLPD),
                              }),
                              (0, i.jsx)(u.Button, {
                                className: D.cta,
                                color: u.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: er,
                                size: u.Button.Sizes.SMALL,
                                submitting: en,
                                children: U.intl.string(U.t.l7E81t),
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
                            className: D.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eo,
                            size: u.Button.Sizes.SMALL,
                            children: U.intl.string(U.t.VN1Ajo),
                          }),
                        ex &&
                          (0, i.jsx)(u.Button, {
                            className: D.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eu,
                            size: u.Button.Sizes.SMALL,
                            children: U.intl.string(U.t.cfY4PD),
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
          return h;
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
        d = n(46140),
        c = n(388032),
        m = n(424621),
        x = n(87181);
      function C() {
        return (0, i.jsx)("div", {
          className: m.buttonContainer,
          children: (0, i.jsx)(r.Button, {
            className: m.button,
            color: r.ButtonColors.BRAND,
            onClick: () => {
              (0, u.navigateToQuestHome)(d.dr.EMBED_DESKTOP, o.jn.QUESTS_EMBED);
            },
            children: c.intl.string(c.t.GURBQk),
          }),
        });
      }
      function h() {
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
                  children: c.intl.string(c.t.vnP31d),
                }),
                (0, i.jsx)(r.Text, {
                  variant: "lg" === t ? "text-sm/medium" : "text-xs/medium",
                  color: "text-normal",
                  className: m.__invalid_mobileWebCopy,
                  children: c.intl.string(c.t.CTn0yc),
                }),
                (0, i.jsx)(C, {}),
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
        d = n(617136),
        c = n(272008),
        m = n(113434),
        x = n(569984),
        C = n(497505),
        h = n(918701),
        g = n(341907),
        p = n(46140),
        E = n(231338),
        j = n(388032);
      function T(e) {
        var t;
        let n = (0, l.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
          u = (0, h.GN)(e.questContent),
          T = (0, h.zK)(e.quest, p.S7.IN_HOUSE_CONSOLE_QUEST),
          f = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
          v = (0, h.zK)(e.quest, p.S7.DISMISSAL_SURVEY),
          {
            handleComplete: S,
            handleProgress: N,
            handleResetDismissibilityClick: q,
            handleResetStatusClick: _,
            handleOverrideDeliveryClick: A,
          } = (0, m.kJ)(e.quest.id),
          R = s.useCallback(() => {
            (0, h.FE)(e.quest, {
              content: e.questContent,
              ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
            });
          }, [e.quest, e.questContent]),
          b = s.useCallback(() => {
            (0, h.f2)(e.quest.id, {
              content: e.questContent,
              position: e.questContentPosition,
              ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK,
            });
          }, [e.quest, e.questContent, e.questContentPosition]),
          I = (e) =>
            (0, r.showToast)(
              (0, r.createToast)(
                new a.Z(e, e.status).message,
                r.ToastType.FAILURE,
              ),
            );
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
                  !1 === T &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "play-game",
                      label: j.intl.string(j.t.lwQdjI),
                      action: R,
                      icon: r.LinkExternalMediumIcon,
                    }),
                  !0 === e.showShareLink &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "share-link",
                      label: j.intl.string(j.t.WqhZsr),
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
                      label: j.intl.string(j.t.LLLLPD),
                      action: () => {
                        (0, d._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, g.navigateToQuestHome)(
                            p.dr.QUEST_CONTEXT_MENU,
                            e.questContent,
                            e.quest.id,
                          );
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "display-disclosure",
                      label: j.intl.string(j.t.GcsZKC),
                      action: () => {
                        (0, g.openDisclosureModal)(e.quest, {
                          content: e.questContent,
                          position: e.questContentPosition,
                          ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                        });
                      },
                    }),
                  u &&
                    (0, i.jsx)(r.MenuItem, {
                      id: "hide-entrypoint",
                      label: j.intl.string(j.t.NN79Ex),
                      action: () => {
                        if (
                          ((0, d._3)({
                            questId: e.quest.id,
                            questContent: e.questContent,
                            questContentPosition: e.questContentPosition,
                            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT,
                          }),
                          !!(0, h.GN)(e.questContent))
                        )
                          (0, c.gl)(e.quest.id, e.questContent),
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
                      action: _,
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
                    (0, h.$J)(e.quest) &&
                      (0, i.jsxs)(r.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, i.jsx)(r.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, h.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, i.jsx)(r.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, c.CS)(e.quest.id, !0).catch(I),
                          }),
                          (0, i.jsx)(r.MenuItem, {
                            id: "stop",
                            label: "Stop heartbeat",
                            action: () => (0, c.is)(e.quest.id).catch(I),
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
            questContent: c,
            questContentPosition: m,
            ...x
          } = e,
          C = s.useCallback(() => {
            (0, d._3)({
              questId: a.id,
              questContent: c,
              questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: m,
            }),
              null != n && n();
          }, [n, a.id, c, m]);
        return (0, i.jsx)(r.Popout, {
          onRequestOpen: C,
          onRequestClose: l,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
              ? (0, i.jsx)(u.Z, {
                  children: (0, i.jsx)(T, {
                    ...x,
                    quest: a,
                    questContent: c,
                    questContentPosition: m,
                    onClose: t,
                  }),
                })
              : (0, i.jsx)(T, {
                  ...x,
                  quest: a,
                  questContent: c,
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
        o = n(1494);
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
        u = n(489066);
      t.Z = function (e) {
        let {
            className: t,
            autoplay: n,
            quest: s,
            questContent: d,
            taskDetails: c,
            location: m,
          } = e,
          x = (0, o.D)({
            quest: s,
            taskDetails: c,
            location: m,
            questContent: d,
          });
        return (0, i.jsxs)("div", {
          className: l()(u.wrapper, t),
          style: { color: s.config.colors.primary },
          children: [
            (0, i.jsx)(a.Z, {
              autoplay: n,
              className: u.rewardTile,
              quest: s,
              questContent: d,
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
//# sourceMappingURL=e2b17e476da0444d62ba.js.map
