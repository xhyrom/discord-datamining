"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99393"],
  {
    87181: function (e) {
      e.exports = "/assets/d941d0168367773932fe.svg";
    },
    469244: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i.P;
        },
      });
      var i = n(161294);
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
        US: function () {
          return r;
        },
        fF: function () {
          return l;
        },
      });
      var i,
        s,
        l,
        r,
        o = n(200651);
      n(192379);
      var a = n(120356),
        u = n.n(a),
        c = n(692547),
        d = n(469244),
        m = n(780384),
        x = n(113434),
        h = n(475595),
        C = n(78826),
        p = n(981631),
        g = n(806145);
      ((i = l || (l = {}))[(i.SMALL = 24)] = "SMALL"),
        (i[(i.MEDIUM = 32)] = "MEDIUM"),
        ((s = r || (r = {}))[(s.SMALL = 2)] = "SMALL"),
        (s[(s.MEDIUM = 8)] = "MEDIUM");
      t.ZP = function (e) {
        let {
            className: t,
            logotypeClassName: n,
            gameTileSize: i = 24,
            quest: s,
            separatorSpacing: l = 2,
            theme: r = p.BRd.DARK,
            withCosponsor: a = !0,
            withGameTile: E = !0,
          } = e,
          j = (0, m.wj)(r) ? p.BRd.DARK : p.BRd.LIGHT,
          T = (0, x.Gd)(s.id, j),
          f = a && null != s.config.cosponsorMetadata && null != T;
        return (0, o.jsxs)("div", {
          className: u()(g.partnerBranding, t),
          children: [
            E &&
              (0, o.jsx)(C.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, o.jsx)("img", {
                    ref: e,
                    className: g.partnerBrandingGameTile,
                    alt: "",
                    src: (0, h.fh)(s, h.eC.GAME_TILE, j).url,
                    style: {
                      borderRadius: (function (e) {
                        switch (e) {
                          case 24:
                            return 3;
                          case 32:
                            return 4;
                        }
                      })(i),
                      width: i,
                      height: i,
                    },
                  }),
              }),
            (0, o.jsx)(C.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, o.jsx)("img", {
                  ref: e,
                  className: u()(g.partnerBrandingLogotype, n, {
                    [g.partnerBrandingLogotypeWithCosponsor]: f,
                  }),
                  alt: s.config.messages.gameTitle,
                  src: (0, h.fh)(s, h.eC.LOGO_TYPE, j).url,
                }),
            }),
            f &&
              (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)("div", {
                    className: g.cosponsorBrandSeparatorWrapper,
                    style: { margin: "0 ".concat(l, "px") },
                    children: (0, o.jsx)(d.P, {
                      className: g.cosponsorBrandSeparator,
                      color: c.Z.colors.WHITE,
                    }),
                  }),
                  (0, o.jsx)(C.Fl, {
                    id: "QuestPartnerBranding_cosponsorLogotype",
                    children: (e) => {
                      var t, i;
                      return (0, o.jsx)("img", {
                        ref: e,
                        className: u()(
                          g.partnerBrandingLogotype,
                          g.partnerBrandingLogotypeWithCosponsor,
                          n,
                        ),
                        alt:
                          null !==
                            (i =
                              null === (t = s.config.cosponsorMetadata) ||
                              void 0 === t
                                ? void 0
                                : t.name) && void 0 !== i
                            ? i
                            : "",
                        src: T.url,
                      });
                    },
                  }),
                ],
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
        c = n(355533);
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
        a = n(973395);
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
        p = n(667105),
        g = n(388032),
        E = n(882924);
      let j = (e) => (0 === e.length ? E.warning : E.danger),
        T = (e, t) =>
          0 === e.length
            ? g.intl.formatToPlainString(g.t.gX0Qc3, { gameTitle: t })
            : g.intl.formatToPlainString(g.t["28Ql29"], { gameTitle: t }),
        f = (e) => {
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
              children: g.intl.format(g.t.GXqvCw, { gameTitle: l }),
            });
          let x = [];
          (0, C.Nj)({ quest: t }) &&
            x.push(
              (0, d.isWeb)()
                ? g.intl.string(g.t["0UTkPz"])
                : g.intl.string(g.t.XGRUho),
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
              return g.intl.format(s, {
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
        let t = e.quest.config.messages.gameTitle,
          n = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          s = (0, p.k3)(e.quest.id, e.location),
          r = (0, x.n)(),
          c = (0, p.g2)({ useReducedMotion: n, className: E.refreshIcon }),
          {
            errorHints: d,
            startingConsoleQuest: C,
            startConsoleQuest: v,
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
          className: l()(E.container, { [E.inFlight]: C }),
          children: [
            (0, i.jsxs)("div", {
              className: E.info,
              children: [
                (0, i.jsxs)("div", {
                  className: E.header,
                  children: [
                    (0, i.jsx)(a.CircleWarningIcon, {
                      className: l()(E.headerIcon, j(d)),
                      size: "custom",
                      color: "currentColor",
                      width: 16,
                      height: 16,
                    }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-sm/semibold",
                      children: T(d, t),
                    }),
                  ],
                }),
                f({
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
              className: E.cta,
              children: (0, i.jsx)(a.Button, {
                color: a.ButtonColors.PRIMARY,
                onClick: v,
                disabled: C,
                children: (0, i.jsxs)("div", {
                  className: E.ctaInner,
                  children: [c.render(), g.intl.string(g.t.nPThNT)],
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
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        l = n(666912);
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
        C = n(451938);
      function p(e) {
        let {
            quest: t,
            location: n,
            initiallyExpanded: p,
            contentPosition: g,
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
            initiallyExpanded: !_ || p || (0, c.iM)({ location: n, quest: t }),
          }),
          M = null != q ? q : c.U0;
        return (0, i.jsx)(u.A, {
          questOrQuests: t,
          questContent: n,
          questContentPosition: g,
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
                      contentPosition: g,
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
                      contentPosition: g,
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
        p = n(918701),
        g = n(566078),
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
        R = n(441347);
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
          g = (0, p.q8)(t),
          E = (0, T.Ks)({
            progressState: n,
            quest: t,
            location: l,
            isCollectibleQuest: s,
            questContentPosition: u,
            inGiftInventory: c,
            isVideoQuest: g,
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
            isAnimating: L,
            contentPosition: Z,
          } = e,
          y = (0, x._Q)(t),
          P = y >= x.OH.ACCEPTED,
          B = y >= x.OH.COMPLETED,
          D = y >= x.OH.CLAIMED,
          w = (0, p.Xv)(t.config),
          U = (0, S.uq)(n),
          O = n === C.jn.QUESTS_EMBED,
          Q = T || L,
          k = P && !D && U,
          H = (0, x.t5)(t, q.dr.QUESTS_CARD, n),
          { xboxAndPlaystationAccounts: W } = (0, x.z6)(),
          G = (0, r.e7)([u.default], () => u.default.locale),
          z = (0, x.z)(t),
          F = U && w,
          V = h && !B,
          X = W.length > 0 && U && (0, p.$J)(t) && P && !B && !z,
          Y = (0, i.jsx)(j.Z, {
            autoplay: a,
            className: l()(R.gridImg, {
              [R.questRewardGiftInventory]: U && "lg" === s,
              [R.questRewardEmbed]: O && "lg" === s,
              [R.questRewardEmbedSm]: "sm" === s,
              [R.questRewardEmbedXs]: "xs" === s,
            }),
            learnMoreStyle: U ? null : "text",
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
                      variant: b(n, s, P),
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
                          E = (0, p.oo)({ quest: o }),
                          j = g.r.build(o.config).defaultReward.messages
                            .nameWithArticle,
                          T = (0, p.Kr)(o.config),
                          f = (0, p.b7)(o);
                        if (h) {
                          let e = E
                              ? (0, p.o9)({
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
                        let v = E ? (0, p.o9)({ quest: o, idx: 0 }) : null;
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
                    !U &&
                      (0, i.jsx)(I, {
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
                    h && !B
                      ? null
                      : (0, i.jsx)(M, {
                          quest: t,
                          progressState: y,
                          isCollectibleQuest: w,
                          location: n,
                          inGiftInventory: U,
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
                    isInventory: U,
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
        o = n(666912),
        a = n(722770),
        u = n(442837),
        c = n(846519),
        d = n(481060),
        m = n(393238),
        x = n(607070),
        h = n(70097),
        C = n(572004),
        p = n(617136),
        g = n(113434),
        E = n(497505),
        j = n(918701),
        T = n(475595),
        f = n(566078),
        v = n(685613),
        S = n(611855),
        N = n(644646),
        q = n(64141),
        _ = n(87894),
        A = n(46140),
        R = n(231338),
        b = n(388032),
        I = n(747028);
      let M = (0, o.animated)(d.ChevronSmallDownIcon),
        L = (0, o.animated)(h.Z),
        Z = (e) => {
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
              (0, C.JG)((0, j.Rs)(t.id)),
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
            location: C,
            size: j,
            expansionSpring: y,
            isAnimating: P,
            isExpanded: B,
            isInConcurrentQuestExperiment: D,
            contentPosition: w,
            toggleExpanded: U,
          } = e,
          { ref: O, height: Q } = (0, m.Z)(),
          { ref: k, width: H, scrollWidth: W } = (0, m.Z)(),
          G = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
          z = s.useMemo(() => (0, T.fh)(h, T.eC.HERO), [h]),
          F = s.useRef(null),
          V = (0, _.uq)(C),
          X = C === E.jn.QUESTS_EMBED,
          Y = (0, g.t5)(h, A.dr.QUESTS_CARD, C),
          K =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          J = (0, g.B6)(h.config.expiresAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          $ = (0, g.B6)(f.r.build(h.config).rewardsExpireAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          ee = s.useMemo(() => null != h.config.cosponsorMetadata, [h]),
          et = (e) => {
            e.stopPropagation(),
              e.currentTarget.blur(),
              U(),
              (0, p._3)({
                questId: h.id,
                questContent: C,
                questContentCTA: B ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                questContentPosition: w,
              });
          };
        s.useEffect(() => {
          z.isAnimated &&
            null != F.current &&
            (l
              ? F.current.play()
              : !l && (F.current.pause(), (F.current.currentTime = 0)));
        }, [l, z]);
        let en = (0, i.jsx)(v.ZP, {
          className: I.partnerBranding,
          logotypeClassName: ee ? I.partnerBrandingLogotypes : void 0,
          gameTileSize: v.fF.MEDIUM,
          quest: h,
          separatorSpacing: v.US.MEDIUM,
          theme: R.BR.DARK,
          withGameTile: !X || null == h.config.cosponsorMetadata,
        });
        return (0, i.jsxs)("div", {
          className: r()(I.outerContainer, {
            [I.outerContainerGiftInventory]: V,
            [I.outerContainerEmbed]: X,
            [I.outerContainerXs]: "xs" === j,
          }),
          "aria-label": b.intl.string(b.t.dcl9MT),
          style: { height: V ? Q : void 0 },
          children: [
            (0, i.jsx)(L, {
              style: { opacity: y.to({ range: [0, 1], output: [0.25, 1] }) },
              autoPlay: !1,
              loop: !1,
              muted: !0,
              playsInline: !0,
              className: I.questSplash,
              controls: !1,
              poster: z.url,
              ref: F,
              children:
                !G &&
                z.isAnimated &&
                (0, i.jsx)("source", {
                  src: z.url,
                  type: null !== (n = z.mimetype) && void 0 !== n ? n : void 0,
                }),
            }),
            (0, i.jsxs)("div", {
              className: I.header,
              "aria-expanded": B,
              children: [
                (0, i.jsxs)(o.animated.div, {
                  className: r()(I.headerContent, {
                    [I.headerContentEmbed]: X,
                  }),
                  style: {
                    y: V ? y.to({ range: [0, 1], output: [_.DJ, 0] }) : void 0,
                  },
                  children: [
                    V &&
                      (0, i.jsx)(o.animated.div, {
                        className: I.headerCollapsedContent,
                        style: {
                          opacity: y.to({ range: [0, 1], output: [1, 0] }),
                          visibility: P || !B ? "inherit" : "hidden",
                        },
                        "aria-hidden": !P && B,
                        children: (0, i.jsxs)(d.ClickableContainer, {
                          "aria-label": b.intl.string(b.t.dcl9MT),
                          onClick: et,
                          className: I.headerCollapsedClickableContainer,
                          children: [
                            (0, i.jsx)("div", {
                              className: I.headerCollapsedContentRewardWrapper,
                              children: (0, i.jsx)(N.Z, {
                                quest: h,
                                questContent: C,
                                className: I.headerCollapsedRewardTile,
                                location: A.dr.QUESTS_CARD,
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: I.headerCollapsedContentCopyWrapper,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: I.headerCollapsedContentCopyLogos,
                                  children: [
                                    en,
                                    (0, i.jsx)(S.Z, { color: "always-white" }),
                                  ],
                                }),
                                (0, i.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  children: Y,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    (0, i.jsxs)(o.animated.div, {
                      ref: (e) => {
                        O.current = e;
                      },
                      className: r()(I.headerExpandedContent, {
                        [I.outerContainerGiftInventory]: V,
                        [I.outerContainerEmbed]: X,
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
                                en,
                                X
                                  ? null
                                  : (0, i.jsx)(S.Z, { color: "always-white" }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: I.questInfo,
                              children: [
                                (0, i.jsx)(d.Tooltip, {
                                  text: h.config.messages.questName,
                                  shouldShow: null != H && null != W && H < W,
                                  children: (e) =>
                                    (0, i.jsx)(d.Heading, {
                                      ref: k,
                                      variant:
                                        "lg" === j
                                          ? "heading-xxl/bold"
                                          : "sm" === j
                                            ? "heading-xl/bold"
                                            : "heading-lg/bold",
                                      className: I.heading,
                                      color: "always-white",
                                      ...e,
                                      children: b.intl.format(b.t.EAYZAg, {
                                        questName: h.config.messages.questName,
                                      }),
                                    }),
                                }),
                                (0, i.jsx)(d.Text, {
                                  variant: "text-xs/normal",
                                  color: "always-white",
                                  children: K
                                    ? b.intl.formatToPlainString(b.t.APddvL, {
                                        expirationDate: $,
                                      })
                                    : c
                                      ? b.intl.formatToPlainString(b.t.v7xMw8, {
                                          expirationDate: J,
                                        })
                                      : b.intl.formatToPlainString(
                                          b.t["pX+fmp"],
                                          { expirationDate: J },
                                        ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !c &&
                          V &&
                          (0, i.jsx)(Z, {
                            quest: h,
                            location: C,
                            questContentPosition: w,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(o.animated.div, {
                  className: I.iconsContainer,
                  style: {
                    top: V
                      ? y.to({
                          range: [0, 1],
                          output: [_.DJ / 2 - _.Z$ / 2, _.jc],
                        })
                      : _.jc,
                  },
                  children: [
                    (0, i.jsx)(q.r, {
                      questContent: C,
                      quest: h,
                      questContentPosition: w,
                      shouldShowDisclosure: !0,
                      hideLearnMore: V,
                      showShareLink: !c && X,
                      children: (e) =>
                        (0, i.jsx)(o.animated.div, {
                          style: {
                            opacity: y,
                            visibility: P || B ? "inherit" : "hidden",
                          },
                          "aria-hidden": !P && !B,
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
                      !(0, _.W_)(C) &&
                      (0, i.jsx)(d.Clickable, {
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
        });
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
        c = n(443763);
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
        p = n(594174),
        g = n(617136),
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
        I = n(64141),
        M = n(667105),
        L = n(860151),
        Z = n(341907),
        y = n(46140),
        P = n(981631),
        B = n(354459),
        D = n(388032),
        w = n(815405);
      t.Z = function (e) {
        var t, n, l;
        let { channelId: U, previewQuest: O, isParticipatingOverride: Q } = e,
          [k, H] = s.useState(!1),
          W = s.useCallback(() => H(!0), []),
          G = s.useCallback(() => H(!1), []),
          z = s.useContext(h.h9),
          F = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
          V = (0, o.e7)([x.Z], () => x.Z.getState().theme),
          X = (0, a.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT,
          {
            isCurrentUserStreamingQuestApplication: Y,
            quest: K,
            isQuestInQuestBar: J,
          } = (0, o.cj)(
            [C.Z, c.Z, T.Z],
            () => {
              var e, t, n, i;
              let s = c.Z.getParticipants(U),
                l =
                  null != O
                    ? O
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
                      })(s, T.Z.quests, C.Z);
              let r =
                  null != l &&
                  null != F &&
                  ((e = s),
                  (t = l),
                  (n = F),
                  (i = C.Z),
                  e.some((e) => {
                    if (e.type !== B.fO.STREAM || e.user.id !== n.id) return !1;
                    let s = (0, m.Um)(e.stream, i);
                    return null != s && (0, v._D)(s, t);
                  })),
                o = (0, v.PM)(
                  T.Z.quests,
                  T.Z.questToDeliverForPlacement,
                  f.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
                );
              return {
                isCurrentUserStreamingQuestApplication: r,
                quest: l,
                isQuestInQuestBar:
                  (null == o ? void 0 : o.id) === (null == l ? void 0 : l.id),
              };
            },
            [U, F, O],
          ),
          $ = null != K ? q.r.build(K.config) : null,
          ee = null == $ ? void 0 : $.application.id,
          et = (0, o.e7)(
            [d.ZP, C.Z],
            () => {
              if (null == K) return !1;
              let e = d.ZP.getRunningGames().map((e) => e.id);
              if ((0, v.$H)(K) && e.includes(ee)) return !0;
              let t =
                null != F
                  ? C.Z.findActivity(
                      F.id,
                      (e) => e.type !== P.IIU.CUSTOM_STATUS,
                    )
                  : null;
              return !!(null != t && (0, v.$J)(K) && (0, v._D)(t, K)) || !1;
            },
            [K, ee, F],
          ),
          en = !0 === Q || Y || et,
          ei = (0, o.e7)([T.Z], () => null != K && T.Z.isEnrolling(K.id), [K]),
          es = (0, o.e7)(
            [c.Z],
            () =>
              ((null == F ? void 0 : F.id) == null
                ? null
                : c.Z.getParticipant(U, F.id)) != null,
            [U, F],
          ),
          el = (0, j.B6)(null == K ? void 0 : K.config.expiresAt),
          er = (0, j.B6)(null == $ ? void 0 : $.rewardsExpireAt),
          eo = s.useCallback(() => {
            null != K &&
              (0, E.AH)(K.id, {
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.ACCEPT_QUEST,
              });
          }, [K]),
          ea = s.useCallback(() => {
            null != K &&
              ((0, g._3)({
                questId: K.id,
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.TRACK_PROGRESS,
              }),
              (0, Z.navigateToQuestHome)(
                y.dr.QUEST_CHANNEL_CALL_HEADER,
                f.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          eu = s.useCallback(() => {
            null != K &&
              ((0, g._3)({
                questId: K.id,
                questContent: f.jn.QUEST_LIVE_STREAM,
                questContentCTA: g.jZ.LEARN_MORE,
              }),
              (0, Z.navigateToQuestHome)(
                y.dr.QUEST_CHANNEL_CALL_HEADER,
                f.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          ec = (0, M.hf)({ quest: K, location: f.jn.QUEST_LIVE_STREAM }),
          ed = s.useMemo(
            () =>
              (0, S.T)({ quest: K, location: y.dr.QUEST_CHANNEL_CALL_HEADER }),
            [K],
          ),
          em = (0, j.tP)(K);
        if (null == K) return null;
        let ex =
            (null === (t = K.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          eh =
            (null === (n = K.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          eC =
            null != K.userStatus &&
            (0, v.zE)(K.userStatus, f.jn.QUEST_LIVE_STREAM),
          ep = null != K.userStatus && (0, v.zE)(K.userStatus, f.jn.QUEST_BAR),
          eg = J && !ep;
        ed.info({
          isQuestCallHeaderDismissed: eC,
          isQuestExpired: em,
          isQuestBarShowing: eg,
          isCurrentUserCallParticipant: es,
        });
        let eE =
          null != O &&
          (null === (l = K.userStatus) || void 0 === l
            ? void 0
            : l.claimedAt) == null;
        if ((!eE && (eC || em || eg)) || (!eE && !es)) return null;
        let ej = (0, v.il)(K),
          eT = (0, i.jsx)(b.Z, {
            className: w.rewardTile,
            autoplay: k,
            quest: K,
            questContent: f.jn.QUEST_LIVE_STREAM,
            location: y.dr.QUEST_CHANNEL_CALL_HEADER,
          });
        return (0, i.jsx)(_.A, {
          questOrQuests: K,
          overrideVisibility: !z,
          questContent: f.jn.QUEST_LIVE_STREAM,
          children: () => {
            var e;
            return (0, i.jsxs)("div", {
              className: r()(w.wrapper, { [w.wrapperAccepted]: ex }),
              onFocus: W,
              onMouseEnter: W,
              onBlur: G,
              onMouseLeave: G,
              children: [
                !ex &&
                  (0, i.jsxs)("div", {
                    className: w.rewardTileWrapper,
                    children: [
                      eT,
                      (0, i.jsx)(R.Z, {
                        bgOpacity: 0.32,
                        className: w.promotedTag,
                      }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  className: w.content,
                  children: [
                    (0, i.jsxs)("div", {
                      className: w.heading,
                      children: [
                        ex && en
                          ? eT
                          : (0, i.jsx)("img", {
                              className: w.gameTile,
                              alt: K.config.messages.gameTitle,
                              src: (0, N.fh)(K, N.eC.GAME_TILE, X).url,
                            }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsxs)("div", {
                              className: w.headingWithSubmenu,
                              children: [
                                (0, i.jsx)(u.Heading, {
                                  className: w.questTitle,
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: en
                                    ? (0, v.AV)({ quest: K, taskDetails: ej })
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
                                      className: w.submenuWrapper,
                                      "aria-label": D.intl.string(D.t.DEoVWV),
                                      children: (0, i.jsx)(
                                        u.MoreHorizontalIcon,
                                        {
                                          size: "md",
                                          color: "currentColor",
                                          className: w.submenuIcon,
                                        },
                                      ),
                                    }),
                                }),
                              ],
                            }),
                            (0, i.jsx)(u.Text, {
                              color: "header-secondary",
                              variant: "text-xs/medium",
                              children: eh
                                ? D.intl.formatToPlainString(D.t.APddvL, {
                                    expirationDate: er,
                                  })
                                : D.intl.formatToPlainString(D.t["pX+fmp"], {
                                    expirationDate: el,
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    ex &&
                      !eh &&
                      !en &&
                      (0, i.jsx)(L.Z, {
                        autoplay: k,
                        quest: K,
                        questContent: f.jn.QUEST_LIVE_STREAM,
                        taskDetails: ej,
                        location: y.dr.QUEST_CHANNEL_CALL_HEADER,
                      }),
                    (0, i.jsxs)("div", {
                      className: w.ctas,
                      children: [
                        !ex &&
                          (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(u.Button, {
                                className: w.cta,
                                color: u.Button.Colors.PRIMARY,
                                fullWidth: !0,
                                size: u.Button.Sizes.SMALL,
                                onClick: eu,
                                children: D.intl.string(D.t.LLLLPD),
                              }),
                              (0, i.jsx)(u.Button, {
                                className: w.cta,
                                color: u.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: eo,
                                size: u.Button.Sizes.SMALL,
                                submitting: ei,
                                children: D.intl.string(D.t.l7E81t),
                              }),
                            ],
                          }),
                        ex &&
                          !eh &&
                          en &&
                          (0, i.jsx)(A.Z, {
                            color: u.tokens.colors.BG_BRAND,
                            quest: K,
                          }),
                        ex &&
                          !eh &&
                          !en &&
                          (0, i.jsx)(u.Button, {
                            className: w.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: ea,
                            size: u.Button.Sizes.SMALL,
                            children: D.intl.string(D.t.VN1Ajo),
                          }),
                        eh &&
                          (0, i.jsx)(u.Button, {
                            className: w.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: ec,
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
        m = n(625838),
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
    64141: function (e, t, n) {
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
        p = n(341907),
        g = n(46140),
        E = n(231338),
        j = n(388032);
      function T(e) {
        var t;
        let n = (0, l.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
          u = (0, C.GN)(e.questContent),
          T = !(0, C.q8)(e.quest) && !(0, C.pO)(e.quest),
          f = [h.jn.QUEST_BAR_V2, h.jn.QUEST_BAR].includes(e.questContent),
          v = (0, C.zK)(e.quest, g.S7.DISMISSAL_SURVEY),
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
          L = s.useMemo(() => (T ? j.t.lwQdjI : j.t.hvVgAQ), [T]);
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
                    label: j.intl.string(L),
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
                      label: j.intl.string(j.t.Ws2Bl5),
                      action: () => {
                        (0, c._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, p.navigateToQuestHome)(
                            g.dr.QUEST_CONTEXT_MENU,
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
                        (0, p.openDisclosureModal)(e.quest, {
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
                            v && f && (0, p.maybeShowSurveyForQuest)(e.quest);
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
        o = n(281300);
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
        u = n(56233);
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
//# sourceMappingURL=9fe0d6be3c1960c4af74.js.map
