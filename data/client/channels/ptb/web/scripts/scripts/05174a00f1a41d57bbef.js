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
          return a;
        },
      });
      let s = (0, n(818083).B)({
          id: "2024-07_quest_interactable_expired_crendentials",
          kind: "user",
          label: "Quest interactable expired crendentials errors",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "not interactable", config: { enabled: !1 } },
            { id: 1, label: "interactable", config: { enabled: !0 } },
          ],
        }),
        a = () =>
          s.useExperiment({ location: "never" }, { autoTrackExposure: !1 })
            .enabled;
    },
    686777: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
      });
      let s = (0, n(818083).B)({
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
        a = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e;
          return s.useExperiment({ location: t }, { autoTrackExposure: n })
            .enabled;
        };
    },
    685613: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var s,
        a,
        i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(780384),
        u = n(302245),
        d = n(475595),
        c = n(78826),
        E = n(46140),
        m = n(981631),
        C = n(789935);
      ((s = a || (a = {}))[(s.SMALL = 24)] = "SMALL"),
        (s[(s.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: s,
            theme: a = m.BRd.DARK,
            withGameTile: l = !0,
          } = e,
          x = (0, o.wj)(a) ? m.BRd.DARK : m.BRd.LIGHT,
          _ = (0, u.vI)(s, E.dr.QUESTS_BAR);
        return (0, i.jsxs)("div", {
          className: r()(C.partnerBranding, t),
          children: [
            l &&
              (0, i.jsx)(c.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, i.jsx)("img", {
                    ref: e,
                    className: C.partnerBrandingGameTile,
                    alt: "",
                    src: (0, d.fh)(s, d.Bd.GAME_TILE, x).url,
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
            (0, i.jsx)(c.Fl, {
              id: "QuestPartnerBranding_gameLogotype",
              children: (e) =>
                (0, i.jsx)("img", {
                  ref: e,
                  className: r()(C.partnerBrandingLogotype, {
                    [C.rewardHighlightLogotype]: _,
                  }),
                  alt: s.config.messages.gameTitle,
                  src: (0, d.fh)(s, d.Bd.LOGO_TYPE, x).url,
                }),
            }),
          ],
        });
      };
    },
    340100: function (e, t, n) {
      n(571269), n(298267);
      var s = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(692547),
        r = n(481060),
        o = n(113434),
        u = n(26650),
        d = n(597799);
      t.Z = function (e) {
        let {
            className: t,
            color: n = l.Z.colors.WHITE,
            quest: a,
            isInventory: c,
          } = e,
          E = (0, o.qb)(e.quest),
          { percentComplete: m, completedRatioDisplay: C } = (0, o.I)(a);
        return !c && E.length > 0
          ? (0, s.jsx)(u.Z, { children: E.at(0) })
          : (0, s.jsxs)("div", {
              className: i()(d.wrapper, t),
              style: { color: n.css },
              children: [
                (0, s.jsxs)("div", {
                  className: d.percentCompleteWrapper,
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: "text-xs/semibold",
                      className: d.percentCompleteLabel,
                      color: "none",
                      children: C,
                    }),
                    (0, s.jsx)("div", {
                      className: d.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - m, "%") },
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: d.progressBar,
                  role: "progressbar",
                  "aria-valuenow": m,
                  children: (0, s.jsx)("div", {
                    className: d.progressBarFill,
                    style: { width: "".concat(m, "%") },
                  }),
                }),
                E.length > 0 &&
                  (0, s.jsx)(u.Z, { isInventory: c, children: E.at(0) }),
              ],
            });
      };
    },
    611855: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(481060),
        r = n(689938),
        o = n(967979);
      t.Z = function (e) {
        let {
          className: t,
          color: n = "header-primary",
          textOpacity: a = 0.9,
          bgOpacity: u = 0.4,
        } = e;
        return (0, s.jsxs)(l.Text, {
          variant: "text-xxs/medium",
          color: n,
          className: i()(o.promotedTag, t),
          children: [
            (0, s.jsx)("span", {
              className: o.promotedTagBackground,
              style: { opacity: u },
            }),
            (0, s.jsx)("span", {
              style: { opacity: a },
              children: r.Z.Messages.QUESTS_PROMOTED,
            }),
          ],
        });
      };
    },
    128535: function (e, t, n) {
      n(653041), n(47120), n(724458);
      var s = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(959078),
        r = n(442837),
        o = n(481060),
        u = n(607070),
        d = n(553795),
        c = n(358085),
        E = n(617136),
        m = n(111382),
        C = n(113434),
        x = n(918701),
        _ = n(566078),
        T = n(667105),
        S = n(689938),
        h = n(727526);
      let g = (e) => (0 === e.length ? h.warning : h.danger),
        p = (e, t) =>
          0 === e.length
            ? S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: t })
            : S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: t }),
        j = (e) => {
          let {
            quest: t,
            location: n,
            errors: a,
            gameTitle: i,
            consoleHelpArticle: r,
            expiredCredentialsInteractable: u,
          } = e;
          if (0 === a.length)
            return (0, s.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
                gameTitle: i,
              }),
            });
          let m = [];
          (0, x.Nj)({ quest: t }) &&
            m.push(
              (0, c.isWeb)()
                ? S.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB
                : S.Z.Messages.QUEST_PROGRESS_NO_GAME,
            );
          let C = [
            ...m,
            ...a.map((e) => {
              if (e.type !== l.K.EXPIRED_CREDENTIAL || !u) return e.message;
              let s = d.Z.getAccount(
                  e.connected_account_id,
                  e.connected_account_type,
                ),
                a = (0, x.C9)(e),
                i = (0, x._j)(e);
              return a.format({
                account_name: null == s ? void 0 : s.name,
                onClick: () => {
                  (0, x.fY)(
                    { quest: t, platformType: i },
                    {
                      content: n,
                      ctaContent: E.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    },
                  );
                },
              });
            }),
            r,
          ];
          return (0, s.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: C.reduce((e, t) => [...e, t, " "], []),
          });
        };
      t.Z = function (e) {
        let t = _.r.build(e.quest.config).application.name,
          n = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
          a = (0, T.k3)(e.quest.id, e.location),
          l = (0, m.n)(),
          d = (0, T.g2)({ useReducedMotion: n, className: h.refreshIcon }),
          {
            errorHints: c,
            startingConsoleQuest: x,
            startConsoleQuest: N,
          } = (0, C.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
              d.startAnimation(),
                (0, E._3)({
                  questId: e.quest.id,
                  questContent: e.location,
                  questContentCTA: E.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: d.stopAnimation,
          });
        return (0, s.jsxs)("div", {
          className: i()(h.container, { [h.inFlight]: x }),
          children: [
            (0, s.jsxs)("div", {
              className: h.info,
              children: [
                (0, s.jsxs)("div", {
                  className: h.header,
                  children: [
                    (0, s.jsx)(o.CircleWarningIcon, {
                      className: i()(h.headerIcon, g(c)),
                      size: "custom",
                      color: "currentColor",
                      width: 16,
                      height: 16,
                    }),
                    (0, s.jsx)(o.Text, {
                      variant: "text-sm/semibold",
                      children: p(c, t),
                    }),
                  ],
                }),
                j({
                  quest: e.quest,
                  errors: c,
                  gameTitle: t,
                  location: e.location,
                  consoleHelpArticle: a,
                  expiredCredentialsInteractable: l,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: h.cta,
              children: (0, s.jsx)(o.Button, {
                color: o.ButtonColors.PRIMARY,
                onClick: N,
                disabled: x,
                children: (0, s.jsxs)("div", {
                  className: h.ctaInner,
                  children: [
                    d.render(),
                    S.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA,
                  ],
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
          return E;
        },
        W_: function () {
          return r;
        },
        Z$: function () {
          return c;
        },
        Z0: function () {
          return C;
        },
        iM: function () {
          return o;
        },
        j2: function () {
          return m;
        },
        jc: function () {
          return d;
        },
        uq: function () {
          return l;
        },
      });
      var s,
        a,
        i = n(497505);
      function l(e) {
        return [
          i.jn.GIFT_INVENTORY_FOR_YOU,
          i.jn.GIFT_INVENTORY_OTHER,
        ].includes(e);
      }
      function r(e) {
        return e === i.jn.GIFT_INVENTORY_FOR_YOU || !l(e);
      }
      function o(e) {
        let { quest: t, location: n } = e,
          { userStatus: s } = t;
        return (
          ((null == s ? void 0 : s.enrolledAt) != null &&
            null == s.completedAt) ||
          r(n)
        );
      }
      ((s = a || (a = {}))[(s.FOR_YOU = 0)] = "FOR_YOU"),
        (s[(s.OTHER = 1)] = "OTHER");
      let u = 100,
        d = 20,
        c = 32,
        E = 1e3,
        m = 460,
        C = 280;
    },
    37303: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var s = n(200651),
        a = n(192379),
        i = n(100621);
      n(442837);
      var l = n(686777),
        r = n(113434);
      n(569984);
      var o = n(497505),
        u = n(602667),
        d = n(87894),
        c = n(372113),
        E = n(206044),
        m = n(266843),
        C = n(46140),
        x = n(271074);
      function _(e) {
        let {
            quest: t,
            location: n,
            initiallyExpanded: _,
            contentPosition: T,
          } = e,
          [S, h] = a.useState(!1),
          g = a.useCallback(() => h(!0), []),
          p = a.useCallback(() => h(!1), []),
          j = (0, r.tP)(t),
          { containerRef: N, size: f, height: v } = (0, m.h)(),
          A = (0, l.q)({ location: C.dr.QUESTS_CARD }),
          {
            expansionSpring: M,
            isAnimating: R,
            isExpanded: I,
            toggleExpanded: q,
          } = (0, m.O)({
            initiallyExpanded: !A || _ || (0, d.iM)({ location: n, quest: t }),
          }),
          Z = null != v ? v : d.U0;
        return (0, s.jsx)(u.A, {
          questOrQuests: t,
          questContent: n,
          questContentPosition: T,
          trackGuildAndChannelMetadata: n === o.jn.QUESTS_EMBED,
          children: (e) =>
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(i.animated.div, {
                style: {
                  maxHeight:
                    n === o.jn.QUESTS_EMBED
                      ? void 0
                      : M.to({ range: [0, 1], output: [d.DJ, Z] }),
                },
                className: x.questsCard,
                onFocus: g,
                onMouseEnter: g,
                onBlur: p,
                onMouseLeave: p,
                children: (0, s.jsxs)("div", {
                  ref: (t) => {
                    (e.current = t), (N.current = t);
                  },
                  children: [
                    (0, s.jsx)(E.Z, {
                      isFocused: S,
                      isQuestExpired: j,
                      location: n,
                      quest: t,
                      size: f,
                      expansionSpring: M,
                      isAnimating: R,
                      isExpanded: I,
                      isInConcurrentQuestExperiment: A,
                      contentPosition: T,
                      toggleExpanded: q,
                    }),
                    (0, s.jsx)(c.Z, {
                      quest: t,
                      isQuestExpired: j,
                      location: n,
                      size: f,
                      isFocused: S,
                      isExpanded: I,
                      isAnimating: R,
                      contentPosition: T,
                    }),
                  ],
                }),
              }),
            }),
        });
      }
    },
    372113: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(442837),
        r = n(481060),
        o = n(607070),
        u = n(706454),
        d = n(63063),
        c = n(930153),
        E = n(617136),
        m = n(113434),
        C = n(569984),
        x = n(497505),
        _ = n(918701),
        T = n(566078),
        S = n(340100),
        h = n(644646),
        g = n(667105),
        p = n(341907),
        j = n(128535),
        N = n(87894),
        f = n(2660),
        v = n(46140),
        A = n(981631),
        M = n(689938),
        R = n(389444),
        I = n(789002);
      let q = (e, t, n) =>
        (0, N.uq)(e) && !n && "lg" === t
          ? "text-lg/medium"
          : "lg" === t
            ? "text-md/medium"
            : "sm" === t
              ? "text-sm/medium"
              : "text-xs/medium";
      function Z(e) {
        let { containerSize: t, onClick: n, children: a, tabIndex: i } = e;
        return "xs" === t
          ? (0, s.jsx)(r.Clickable, {
              tabIndex: i,
              className: R.learnMoreLink,
              tag: "span",
              onClick: n,
              children: (0, s.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: a,
              }),
            })
          : (0, s.jsx)(r.Button, {
              tabIndex: i,
              wrapperClassName: R.ctaButtonWrapper,
              color: r.ButtonColors.PRIMARY,
              onClick: n,
              children: a,
            });
      }
      function U(e) {
        let {
            quest: t,
            progressState: n,
            isCollectibleQuest: a,
            location: i,
            questContentPosition: u,
            inGiftInventory: d,
          } = e,
          c = n >= m.OH.COMPLETED,
          E = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
          x = (0, l.e7)([C.Z], () => C.Z.isEnrolling(t.id)),
          T = (0, _.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST),
          S = (0, g.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: T,
            location: i,
            isCollectibleQuest: a,
            questContentPosition: u,
            inGiftInventory: d,
          }),
          h = T && d && c,
          p = h ? R.inHouseButton : r.ButtonColors.BRAND,
          j = c && !E ? r.ShinyButton : r.Button;
        return (0, s.jsx)(
          r.Tooltip,
          {
            text: S.tooltipText,
            tooltipContentClassName: R.ctaTooltipText,
            children: (e) => {
              var t;
              return (0, s.jsx)(j, {
                ...e,
                wrapperClassName: R.ctaButtonWrapper,
                color: p,
                disabled: null == S.onClick,
                submitting: x,
                onClick:
                  null !== (t = S.onClick) && void 0 !== t ? t : () => {},
                children: (0, s.jsxs)("div", {
                  className: R.ctaButtonInner,
                  children: [
                    h &&
                      (0, s.jsx)("img", {
                        src: I,
                        alt: "",
                        className: R.inHouseIcon,
                      }),
                    S.text,
                  ],
                }),
              });
            },
          },
          S.tooltipText,
        );
      }
      t.Z = (e) => {
        let {
            quest: t,
            location: n,
            size: a,
            isFocused: o,
            isQuestExpired: C,
            isExpanded: g,
            isAnimating: I,
            contentPosition: L,
          } = e,
          b = (0, m._Q)(t),
          D = b >= m.OH.ACCEPTED,
          O = b >= m.OH.COMPLETED,
          Q = b >= m.OH.CLAIMED,
          B = (0, _.Xv)(t.config),
          y = (0, N.uq)(n),
          P = n === x.jn.QUESTS_EMBED,
          w = g || I,
          H = D && !Q && y,
          k = (0, m.t5)(t, v.dr.QUESTS_CARD, n),
          { xboxAndPlaystationAccounts: W } = (0, m.z6)(),
          G = (0, l.e7)([u.default], () => u.default.locale),
          z = (0, m.z)(t),
          V = y && B,
          F = C && !O,
          Y = W.length > 0 && y && (0, _.$J)(t) && D && !O && !z,
          X = (0, s.jsx)(h.Z, {
            autoplay: o,
            className: i()(R.gridImg, {
              [R.questRewardGiftInventory]: y && "lg" === a,
              [R.questRewardEmbed]: P && "lg" === a,
              [R.questRewardEmbedSm]: "sm" === a,
              [R.questRewardEmbedXs]: "xs" === a,
            }),
            learnMoreStyle: y ? null : "text",
            location: v.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: L,
          });
        return (0, s.jsxs)("div", {
          className: R.root,
          children: [
            (0, s.jsxs)("div", {
              className: i()(R.outerContainer, {
                [R.outerContainerSm]: "sm" === a,
                [R.outerContainerXs]: "xs" === a,
                [R.outerContainerNoProgress]: !H,
              }),
              style: { visibility: w ? "inherit" : "hidden" },
              "aria-hidden": !w,
              children: [
                (0, s.jsx)(r.Tooltip, {
                  text: F
                    ? M.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST
                    : null,
                  tooltipContentClassName: R.rewardTileExpirationTooltip,
                  shouldShow: F,
                  children: (e) =>
                    (0, s.jsxs)("div", {
                      className: R.rewardTileWrapper,
                      ...e,
                      children: [
                        C &&
                          (0, s.jsx)("div", {
                            className: R.rewardTileExpired,
                            children: (0, s.jsx)(r.CircleWarningIcon, {
                              color: r.tokens.colors.WHITE,
                            }),
                          }),
                        V
                          ? (0, s.jsx)(f.Z, {
                              questConfig: t.config,
                              fallback: X,
                              isFocused: o,
                            })
                          : X,
                      ],
                    }),
                }),
                (0, s.jsxs)("div", {
                  className: i()(R.gridText, R.taskDetails),
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: q(n, a, D),
                      className: R.taskInstructions,
                      children: C
                        ? M.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format(
                            { questName: t.config.messages.questName },
                          )
                        : k,
                    }),
                    (0, s.jsx)(r.Text, {
                      variant: "lg" === a ? "text-sm/medium" : "text-xs/medium",
                      color: "text-muted",
                      children: (function (e) {
                        var t, n, s, a, i, l;
                        let {
                            quest: r,
                            location: o,
                            locale: u,
                            isQuestExpired: E,
                          } = e,
                          C =
                            (null === (t = r.userStatus) || void 0 === t
                              ? void 0
                              : t.completedAt) != null,
                          x =
                            C &&
                            (null === (n = r.userStatus) || void 0 === n
                              ? void 0
                              : n.claimedAt) != null,
                          S = (0, _.zK)(r, v.S7.IN_HOUSE_CONSOLE_QUEST),
                          h = (0, N.uq)(o),
                          g = (0, m.B6)(
                            null === (s = r.userStatus) || void 0 === s
                              ? void 0
                              : s.completedAt,
                            { year: "numeric", month: "long", day: "numeric" },
                          ),
                          p = (0, _.oo)({ quest: r }),
                          j = T.r.build(r.config).defaultReward.messages
                            .nameWithArticle,
                          f = (0, _.Kr)(r.config),
                          R = (0, _.b7)(r);
                        if (C && S && h)
                          return M.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format(
                            { date: g },
                          );
                        if (x) {
                          let e = p
                              ? (0, _.o9)({
                                  quest: r,
                                  idx:
                                    null === (a = r.userStatus) || void 0 === a
                                      ? void 0
                                      : a.claimedTier,
                                })
                              : null,
                            t =
                              null !==
                                (i =
                                  null == e
                                    ? void 0
                                    : e.messages.nameWithArticle) &&
                              void 0 !== i
                                ? i
                                : null;
                          return null != t
                            ? M.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format(
                                { reward: t, date: g },
                              )
                            : M.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                reward: j,
                                date: g,
                              });
                        }
                        if (C)
                          return p
                            ? M.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format(
                                { date: g },
                              )
                            : M.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                reward: j,
                                date: g,
                              });
                        let I = p ? (0, _.o9)({ quest: r, idx: 0 }) : null;
                        return E
                          ? M.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format(
                              {
                                reward:
                                  null !==
                                    (l =
                                      null == I
                                        ? void 0
                                        : I.messages.nameWithArticle) &&
                                  void 0 !== l
                                    ? l
                                    : j,
                              },
                            )
                          : null != I && null != I.approximateCount
                            ? M.Z.Messages.QUEST_REWARD_TIERED.format({
                                maxReward: I.messages.nameWithArticle,
                                maxRewardCount: (0, c.Bs)(
                                  I.approximateCount,
                                  u,
                                ),
                                helpCenterLink: d.Z.getArticleURL(
                                  A.BhN.QUESTS_LEARN_MORE,
                                ),
                              })
                            : null != f
                              ? M.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format(
                                  { reward: j, duration: f },
                                )
                              : null != R
                                ? R.description
                                : M.Z.Messages.QUEST_REWARD.format({
                                    reward: j,
                                  });
                      })({
                        quest: t,
                        location: n,
                        locale: G,
                        isQuestExpired: C,
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: i()(R.ctaButtonContainer, R.gridCtaButtons),
                  children: [
                    !y &&
                      (0, s.jsx)(Z, {
                        containerSize: a,
                        onClick: () => {
                          (0, p.navigateToQuestHome)(v.dr.QUESTS_CARD, n, t.id),
                            (0, E._3)({
                              questId: t.id,
                              questContent: n,
                              questContentPosition: L,
                              questContentCTA: E.jZ.LEARN_MORE,
                            });
                        },
                        children: M.Z.Messages.QUESTS_LEARN_MORE_V2,
                      }),
                    C && !O
                      ? null
                      : (0, s.jsx)(U, {
                          quest: t,
                          progressState: b,
                          isCollectibleQuest: B,
                          location: n,
                          inGiftInventory: y,
                        }),
                  ],
                }),
                H &&
                  (0, s.jsx)(S.Z, {
                    className: R.gridProgressBar,
                    color: O
                      ? r.tokens.colors.TEXT_POSITIVE
                      : r.tokens.colors.BG_BRAND,
                    quest: t,
                    isInventory: y,
                  }),
              ],
            }),
            Y &&
              (0, s.jsxs)("div", {
                className: R.microphoneContainer,
                children: [
                  (0, s.jsx)("div", { className: R.separator }),
                  (0, s.jsx)(j.Z, { quest: t, location: n }),
                ],
              }),
          ],
        });
      };
    },
    206044: function (e, t, n) {
      n(47120);
      var s = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        r = n(100621),
        o = n(722770),
        u = n(442837),
        d = n(846519),
        c = n(481060),
        E = n(393238),
        m = n(607070),
        C = n(70097),
        x = n(210887),
        _ = n(572004),
        T = n(617136),
        S = n(113434),
        h = n(497505),
        g = n(918701),
        p = n(475595),
        j = n(566078),
        N = n(685613),
        f = n(611855),
        v = n(644646),
        A = n(670638),
        M = n(87894),
        R = n(46140),
        I = n(689938),
        q = n(128175);
      let Z = (0, r.animated)(c.ChevronSmallDownIcon),
        U = (0, r.animated)(C.Z),
        L = (e) => {
          let { quest: t, location: n, questContentPosition: i, ...l } = e,
            [r, o] = a.useState(!1),
            u = a.useRef(new d.V7());
          a.useEffect(() => {
            let e = u.current;
            return function () {
              e.stop();
            };
          }, []);
          let E = () => {
            (0, T._3)({
              questId: t.id,
              questContent: n,
              questContentCTA: T.jZ.COPY_QUEST_URL,
              questContentPosition: i,
            }),
              (0, _.JG)((0, g.Rs)(t.id)),
              o(!0),
              u.current.start(1e3, () => o(!1));
          };
          return (0, s.jsx)(c.Tooltip, {
            forceOpen: r,
            shouldShow: r,
            color: c.Tooltip.Colors.GREEN,
            text: I.Z.Messages.COPY_SUCCESS_1,
            children: () =>
              (0, s.jsx)(c.Button, {
                ...l,
                className: q.shareButton,
                color: c.Button.Colors.PRIMARY,
                size: c.Button.Sizes.SMALL,
                onClick: E,
                children: I.Z.Messages.QUESTS_SHARE_QUEST,
              }),
          });
        };
      t.Z = (e) => {
        var t, n;
        let {
            isFocused: i,
            isQuestExpired: d,
            quest: C,
            location: _,
            size: g,
            expansionSpring: b,
            isAnimating: D,
            isExpanded: O,
            isInConcurrentQuestExperiment: Q,
            contentPosition: B,
            toggleExpanded: y,
          } = e,
          { ref: P, height: w } = (0, E.Z)(),
          { ref: H, width: k, scrollWidth: W } = (0, E.Z)(),
          G = (0, u.e7)([x.Z], () => x.Z.getState().theme),
          z = (0, u.e7)([m.Z], () => m.Z.useReducedMotion),
          V = a.useMemo(() => (0, p.fh)(C, p.Bd.HERO), [C]),
          F = a.useRef(null),
          Y = (0, M.uq)(_),
          X = _ === h.jn.QUESTS_EMBED,
          K = (0, S.t5)(C, R.dr.QUESTS_CARD, _),
          J =
            (null === (t = C.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          $ = (0, S.B6)(C.config.expiresAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          ee = (0, S.B6)(j.r.build(C.config).rewardsExpireAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          et = (e) => {
            e.stopPropagation(),
              e.currentTarget.blur(),
              y(),
              (0, T._3)({
                questId: C.id,
                questContent: _,
                questContentCTA: O ? T.jZ.COLLAPSE : T.jZ.EXPAND,
                questContentPosition: B,
              });
          };
        return (
          a.useEffect(() => {
            V.isAnimated &&
              null != F.current &&
              (i
                ? F.current.play()
                : !i && (F.current.pause(), (F.current.currentTime = 0)));
          }, [i, V]),
          (0, s.jsxs)("div", {
            className: l()(q.outerContainer, {
              [q.outerContainerGiftInventory]: Y,
              [q.outerContainerEmbed]: X,
              [q.outerContainerXs]: "xs" === g,
            }),
            "aria-label": I.Z.Messages.EXPAND,
            style: { height: Y ? w : void 0 },
            children: [
              (0, s.jsx)(U, {
                style: { opacity: b.to({ range: [0, 1], output: [0.25, 1] }) },
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                className: q.questSplash,
                controls: !1,
                poster: V.url,
                ref: F,
                children:
                  !z &&
                  V.isAnimated &&
                  (0, s.jsx)("source", {
                    src: V.url,
                    type:
                      null !== (n = V.mimetype) && void 0 !== n ? n : void 0,
                  }),
              }),
              (0, s.jsxs)("div", {
                className: q.header,
                "aria-expanded": O,
                children: [
                  (0, s.jsxs)(r.animated.div, {
                    className: l()(q.headerContent, {
                      [q.headerContentEmbed]: X,
                    }),
                    style: {
                      y: Y
                        ? b.to({ range: [0, 1], output: [M.DJ, 0] })
                        : void 0,
                    },
                    children: [
                      Y &&
                        (0, s.jsx)(r.animated.div, {
                          className: q.headerCollapsedContent,
                          style: {
                            opacity: b.to({ range: [0, 1], output: [1, 0] }),
                            visibility: D || !O ? "inherit" : "hidden",
                          },
                          "aria-hidden": !D && O,
                          children: (0, s.jsxs)(c.ClickableContainer, {
                            "aria-label": I.Z.Messages.EXPAND,
                            onClick: et,
                            className: q.headerCollapsedClickableContainer,
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  q.headerCollapsedContentRewardWrapper,
                                children: (0, s.jsx)(v.Z, {
                                  quest: C,
                                  questContent: _,
                                  className: q.headerCollapsedRewardTile,
                                  location: R.dr.QUESTS_CARD,
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: q.headerCollapsedContentCopyWrapper,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      q.headerCollapsedContentCopyLogos,
                                    children: [
                                      (0, s.jsx)(N.Z, {
                                        className: q.partnerBranding,
                                        gameTileSize: N.f.MEDIUM,
                                        quest: C,
                                        theme: G,
                                      }),
                                      (0, s.jsx)(f.Z, {
                                        color: "always-white",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    children: K,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      (0, s.jsxs)(r.animated.div, {
                        ref: (e) => {
                          P.current = e;
                        },
                        className: l()(q.headerExpandedContent, {
                          [q.outerContainerGiftInventory]: Y,
                          [q.outerContainerEmbed]: X,
                        }),
                        style: {
                          opacity: b.to({ range: [0, 1], output: [0, 1] }),
                          visibility: D || O ? "inherit" : "hidden",
                        },
                        "aria-hidden": !D && !O,
                        children: [
                          (0, s.jsxs)("div", {
                            className: q.headerExpandedWrapper,
                            children: [
                              (0, s.jsxs)("div", {
                                className: q.iconLogotypeContainer,
                                children: [
                                  (0, s.jsx)(N.Z, {
                                    className: q.partnerBranding,
                                    gameTileSize: N.f.MEDIUM,
                                    quest: C,
                                    theme: G,
                                  }),
                                  X
                                    ? null
                                    : (0, s.jsx)(f.Z, {
                                        color: "always-white",
                                      }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: q.questInfo,
                                children: [
                                  (0, s.jsx)(c.Tooltip, {
                                    text: C.config.messages.questName,
                                    shouldShow: null != k && null != W && k < W,
                                    children: (e) =>
                                      (0, s.jsx)(c.Heading, {
                                        ref: H,
                                        variant:
                                          "lg" === g
                                            ? "heading-xxl/bold"
                                            : "sm" === g
                                              ? "heading-xl/bold"
                                              : "heading-lg/bold",
                                        className: q.heading,
                                        ...e,
                                        children: I.Z.Messages.QUEST.format({
                                          questName:
                                            C.config.messages.questName,
                                        }),
                                      }),
                                  }),
                                  (0, s.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: J
                                      ? I.Z.Messages.QUESTS_CLAIM_BY_DATE.format(
                                          { expirationDate: ee },
                                        )
                                      : d
                                        ? I.Z.Messages.QUESTS_EXPIRED_ON.format(
                                            { expirationDate: $ },
                                          )
                                        : I.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                            { expirationDate: $ },
                                          ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          !d &&
                            Y &&
                            (0, s.jsx)(L, {
                              quest: C,
                              location: _,
                              questContentPosition: B,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(r.animated.div, {
                    className: q.iconsContainer,
                    style: {
                      top: Y
                        ? b.to({
                            range: [0, 1],
                            output: [M.DJ / 2 - M.Z$ / 2, M.jc],
                          })
                        : M.jc,
                    },
                    children: [
                      (0, s.jsx)(A.r, {
                        questContent: _,
                        quest: C,
                        questContentPosition: B,
                        shouldShowDisclosure: !0,
                        hideLearnMore: Y,
                        showShareLink: !d && X,
                        children: (e) =>
                          (0, s.jsx)(r.animated.div, {
                            style: {
                              opacity: b,
                              visibility: D || O ? "inherit" : "hidden",
                            },
                            "aria-hidden": !D && !O,
                            children: (0, s.jsx)(c.Clickable, {
                              ...e,
                              className: q.iconWrapper,
                              "aria-label": I.Z.Messages.ACTIONS,
                              children: (0, s.jsx)(c.MoreHorizontalIcon, {
                                size: "md",
                                color: o.Z.WHITE,
                              }),
                            }),
                          }),
                      }),
                      Q &&
                        !(0, M.W_)(_) &&
                        (0, s.jsx)(c.Clickable, {
                          onClick: et,
                          className: q.iconWrapper,
                          "aria-label": O
                            ? I.Z.Messages.COLLAPSE
                            : I.Z.Messages.EXPAND,
                          children: (0, s.jsx)(Z, {
                            style: {
                              rotate: b.to({ range: [0, 1], output: [0, 180] }),
                            },
                            color: o.Z.WHITE,
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
          return o;
        },
        h: function () {
          return r;
        },
      }),
        n(47120);
      var s = n(192379),
        a = n(481060),
        i = n(393238),
        l = n(87894);
      function r() {
        let e = s.useRef(null),
          [t, n] = s.useState("lg"),
          [a, r] = s.useState(void 0);
        return (
          (0, i.P)(e, (e) => {
            let { width: t, scrollHeight: s } = e;
            return (r(s), null == t || t > l.j2)
              ? n("lg")
              : t > l.Z0
                ? n("sm")
                : n("xs");
          }),
          { containerRef: e, size: t, height: a }
        );
      }
      function o(e) {
        let { initiallyExpanded: t } = e,
          [n, i] = s.useState(t),
          [l, r] = s.useState(!1),
          o = s.useCallback(() => {
            i((e) => !e), r(!0);
          }, []),
          { expansionSpring: u } = (0, a.useSpring)({
            expansionSpring: n ? 1 : 0,
            config: { tension: 450, friction: 45 },
            onRest: () => r(!1),
          });
        return {
          expansionSpring: u,
          isAnimating: l,
          isExpanded: n,
          toggleExpanded: o,
        };
      }
    },
    2660: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var a = n(442837),
        i = n(481060),
        l = n(204418),
        r = n(594174),
        o = n(113434),
        u = n(182294),
        d = n(52539);
      let c = (e) => {
        let { questConfig: t, fallback: n, isFocused: c } = e,
          E = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
          { avatarDecoration: m, isFetching: C } = (0, o.DU)(t);
        return C
          ? (0, s.jsx)("div", {
              className: d.questsCollectibleReward,
              children: (0, s.jsx)(i.Spinner, {}),
            })
          : null == E || null == m
            ? n
            : (0, s.jsx)("div", {
                className: d.questsCollectibleReward,
                children: (0, s.jsx)(l.Z, {
                  avatarSize: u.EF.SIZE_56,
                  user: E,
                  guildId: null,
                  avatarDecorationOverride: m,
                  animateOnHover: !c,
                }),
              });
      };
      t.Z = (e) => (0, s.jsx)(c, { ...e });
    },
    134483: function (e, t, n) {
      n(47120);
      var s = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        r = n(442837),
        o = n(780384),
        u = n(481060),
        d = n(358221),
        c = n(594190),
        E = n(687516),
        m = n(210887),
        C = n(937995),
        x = n(158776),
        _ = n(594174),
        T = n(617136),
        S = n(272008),
        h = n(113434),
        g = n(569984),
        p = n(497505),
        j = n(918701),
        N = n(5881),
        f = n(475595),
        v = n(566078),
        A = n(602667),
        M = n(340100),
        R = n(611855),
        I = n(644646),
        q = n(670638),
        Z = n(667105),
        U = n(860151),
        L = n(341907),
        b = n(46140),
        D = n(981631),
        O = n(354459),
        Q = n(689938),
        B = n(869630);
      t.Z = function (e) {
        var t, n, i;
        let { channelId: y, previewQuest: P, isParticipatingOverride: w } = e,
          [H, k] = a.useState(!1),
          W = a.useCallback(() => k(!0), []),
          G = a.useCallback(() => k(!1), []),
          z = a.useContext(C.h9),
          V = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
          F = (0, r.e7)([m.Z], () => m.Z.getState().theme),
          Y = (0, o.wj)(F) ? D.BRd.DARK : D.BRd.LIGHT,
          { isCurrentUserStreamingQuestApplication: X, quest: K } = (0, r.cj)(
            [x.Z, d.Z, g.Z],
            () => {
              var e, t, n, s;
              let a = d.Z.getParticipants(y),
                i =
                  null != P
                    ? P
                    : (function (e, t, n) {
                        for (let l of e) {
                          var s, a, i;
                          if (l.type === O.fO.STREAM) {
                            let e =
                                null !== (a = (0, E.Um)(l.stream, n)) &&
                                void 0 !== a
                                  ? a
                                  : null,
                              i = (0, j.ZZ)(t, e);
                            if (
                              null != i &&
                              (null === (s = i.userStatus) || void 0 === s
                                ? void 0
                                : s.claimedAt) == null
                            )
                              return i;
                          }
                          for (let s of e) {
                            if (!(0, O.I)(s))
                              for (let e of n.getActivities(s.user.id)) {
                                let n = (0, j.ZZ)(t, e);
                                if (
                                  null != n &&
                                  (null === (i = n.userStatus) || void 0 === i
                                    ? void 0
                                    : i.claimedAt) == null &&
                                  ((0, j.Nj)({ quest: n }) || (0, j.$J)(n))
                                )
                                  return n;
                              }
                          }
                        }
                        return null;
                      })(a, g.Z.quests, x.Z);
              return {
                isCurrentUserStreamingQuestApplication:
                  null != i &&
                  null != V &&
                  ((e = a),
                  (t = i),
                  (n = V),
                  (s = x.Z),
                  e.some((e) => {
                    if (e.type !== O.fO.STREAM || e.user.id !== n.id) return !1;
                    let a = (0, E.Um)(e.stream, s);
                    return null != a && (0, j._D)(a, t);
                  })),
                quest: i,
              };
            },
            [y, V, P],
          ),
          J = null != K ? v.r.build(K.config) : null,
          $ = null == J ? void 0 : J.application.id,
          ee = (0, r.e7)(
            [c.ZP, x.Z],
            () => {
              if (null == K) return !1;
              let e = c.ZP.getRunningGames().map((e) => e.id);
              if ((0, j.$H)(K) && e.includes($)) return !0;
              let t =
                null != V
                  ? x.Z.findActivity(
                      V.id,
                      (e) => e.type !== D.IIU.CUSTOM_STATUS,
                    )
                  : null;
              return !!(null != t && (0, j.$J)(K) && (0, j._D)(t, K)) || !1;
            },
            [K, $, V],
          ),
          et = !0 === w || X || ee,
          en = (0, r.e7)([g.Z], () => null != K && g.Z.isEnrolling(K.id), [K]),
          es = (0, r.e7)(
            [d.Z],
            () =>
              ((null == V ? void 0 : V.id) == null
                ? null
                : d.Z.getParticipant(y, V.id)) != null,
            [y, V],
          ),
          ea = (0, h.B6)(null == K ? void 0 : K.config.expiresAt),
          ei = (0, h.B6)(null == J ? void 0 : J.rewardsExpireAt),
          el = a.useCallback(() => {
            null != K &&
              (0, S.AH)(K.id, {
                questContent: p.jn.QUEST_LIVE_STREAM,
                questContentCTA: T.jZ.ACCEPT_QUEST,
              });
          }, [K]),
          er = a.useCallback(() => {
            null != K &&
              ((0, T._3)({
                questId: K.id,
                questContent: p.jn.QUEST_LIVE_STREAM,
                questContentCTA: T.jZ.TRACK_PROGRESS,
              }),
              (0, L.navigateToQuestHome)(
                b.dr.QUEST_CHANNEL_CALL_HEADER,
                p.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          eo = a.useCallback(() => {
            null != K &&
              ((0, T._3)({
                questId: K.id,
                questContent: p.jn.QUEST_LIVE_STREAM,
                questContentCTA: T.jZ.LEARN_MORE,
              }),
              (0, L.navigateToQuestHome)(
                b.dr.QUEST_CHANNEL_CALL_HEADER,
                p.jn.QUEST_LIVE_STREAM,
                K.id,
              ));
          }, [K]),
          eu = (0, Z.hf)({ quest: K, location: p.jn.QUEST_LIVE_STREAM }),
          ed = a.useMemo(
            () =>
              (0, N.T)({ quest: K, location: b.dr.QUEST_CHANNEL_CALL_HEADER }),
            [K],
          ),
          ec = (0, h.tP)(K);
        if (null == K || !(0, j.dl)(K)) return null;
        let eE =
            (null === (t = K.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          em =
            (null === (n = K.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          eC =
            null != K.userStatus &&
            (0, j.zE)(K.userStatus, p.jn.QUEST_LIVE_STREAM),
          ex = null != K.userStatus && (0, j.zE)(K.userStatus, p.jn.QUEST_BAR),
          e_ = (0, j.Mi)(K, p.jn.QUEST_BAR) && !ex;
        ed.info({
          isQuestCallHeaderDismissed: eC,
          isQuestExpired: ec,
          isQuestBarShowing: e_,
          isCurrentUserCallParticipant: es,
        });
        let eT =
          null != P &&
          (null === (i = K.userStatus) || void 0 === i
            ? void 0
            : i.claimedAt) == null;
        if ((!eT && (eC || ec || e_)) || (!eT && !es)) return null;
        let eS = (0, j.il)(K),
          eh = (0, s.jsx)(I.Z, {
            className: B.rewardTile,
            autoplay: H,
            quest: K,
            questContent: p.jn.QUEST_LIVE_STREAM,
            location: b.dr.QUEST_CHANNEL_CALL_HEADER,
          });
        return (0, s.jsx)(A.A, {
          questOrQuests: K,
          overrideVisibility: !z,
          questContent: p.jn.QUEST_LIVE_STREAM,
          children: () => {
            var e;
            return (0, s.jsxs)("div", {
              className: l()(B.wrapper, { [B.wrapperAccepted]: eE }),
              onFocus: W,
              onMouseEnter: W,
              onBlur: G,
              onMouseLeave: G,
              children: [
                !eE &&
                  (0, s.jsxs)("div", {
                    className: B.rewardTileWrapper,
                    children: [
                      eh,
                      (0, s.jsx)(R.Z, {
                        bgOpacity: 0.32,
                        className: B.promotedTag,
                      }),
                    ],
                  }),
                (0, s.jsxs)("div", {
                  className: B.content,
                  children: [
                    (0, s.jsxs)("div", {
                      className: B.heading,
                      children: [
                        eE && et
                          ? eh
                          : (0, s.jsx)("img", {
                              className: B.gameTile,
                              alt: K.config.messages.gameTitle,
                              src: (0, f.fh)(K, f.Bd.GAME_TILE, Y).url,
                            }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              className: B.headingWithSubmenu,
                              children: [
                                (0, s.jsx)(u.Heading, {
                                  className: B.questTitle,
                                  variant: "heading-md/semibold",
                                  color: "header-primary",
                                  children: et
                                    ? (0, j.AV)({ quest: K, taskDetails: eS })
                                    : Q.Z.Messages.QUESTS_TITLE.format({
                                        questName: K.config.messages.questName,
                                      }),
                                }),
                                (0, s.jsx)(q.r, {
                                  questContent: p.jn.QUEST_LIVE_STREAM,
                                  quest: K,
                                  preventIdle: !0,
                                  shouldShowDisclosure:
                                    (null === (e = K.userStatus) || void 0 === e
                                      ? void 0
                                      : e.enrolledAt) == null,
                                  children: (e) =>
                                    (0, s.jsx)(u.Clickable, {
                                      ...e,
                                      className: B.submenuWrapper,
                                      "aria-label": Q.Z.Messages.ACTIONS,
                                      children: (0, s.jsx)(
                                        u.MoreHorizontalIcon,
                                        {
                                          size: "md",
                                          color: "currentColor",
                                          className: B.submenuIcon,
                                        },
                                      ),
                                    }),
                                }),
                              ],
                            }),
                            (0, s.jsx)(u.Text, {
                              color: "header-secondary",
                              variant: "text-xs/medium",
                              children: em
                                ? Q.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                                    expirationDate: ei,
                                  })
                                : Q.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                    { expirationDate: ea },
                                  ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    eE &&
                      !em &&
                      !et &&
                      (0, s.jsx)(U.Z, {
                        autoplay: H,
                        quest: K,
                        questContent: p.jn.QUEST_LIVE_STREAM,
                        taskDetails: eS,
                        location: b.dr.QUEST_CHANNEL_CALL_HEADER,
                      }),
                    (0, s.jsxs)("div", {
                      className: B.ctas,
                      children: [
                        !eE &&
                          (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(u.Button, {
                                className: B.cta,
                                color: u.Button.Colors.PRIMARY,
                                fullWidth: !0,
                                size: u.Button.Sizes.SMALL,
                                onClick: eo,
                                children: Q.Z.Messages.QUESTS_LEARN_MORE_V2,
                              }),
                              (0, s.jsx)(u.Button, {
                                className: B.cta,
                                color: u.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: el,
                                size: u.Button.Sizes.SMALL,
                                submitting: en,
                                children: Q.Z.Messages.QUESTS_ACCEPT_QUEST,
                              }),
                            ],
                          }),
                        eE &&
                          !em &&
                          et &&
                          (0, s.jsx)(M.Z, {
                            color: u.tokens.colors.BG_BRAND,
                            quest: K,
                          }),
                        eE &&
                          !em &&
                          !et &&
                          (0, s.jsx)(u.Button, {
                            className: B.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: er,
                            size: u.Button.Sizes.SMALL,
                            children: Q.Z.Messages.QUESTS_CHECK_PROGRESS,
                          }),
                        em &&
                          (0, s.jsx)(u.Button, {
                            className: B.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: eu,
                            size: u.Button.Sizes.SMALL,
                            children: Q.Z.Messages.QUESTS_CLAIM_REWARD,
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
          return x;
        },
      });
      var s = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(481060),
        r = n(497505),
        o = n(266843),
        u = n(341907),
        d = n(46140),
        c = n(689938),
        E = n(424621),
        m = n(87181);
      function C() {
        return (0, s.jsx)("div", {
          className: E.buttonContainer,
          children: (0, s.jsx)(l.Button, {
            className: E.button,
            color: l.ButtonColors.BRAND,
            onClick: () => {
              (0, u.navigateToQuestHome)(d.dr.EMBED_DESKTOP, r.jn.QUESTS_EMBED);
            },
            children: c.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON,
          }),
        });
      }
      function x() {
        let { containerRef: e, size: t } = (0, o.h)();
        return (0, s.jsxs)("div", {
          ref: (t) => (e.current = t),
          className: i()(E.container, {
            [E.wide]: "lg" === t,
            [E.tall]: "lg" !== t,
          }),
          children: [
            (0, s.jsxs)("div", {
              className: E.contentContainer,
              children: [
                (0, s.jsx)(l.Heading, {
                  variant: "lg" === t ? "heading-xl/bold" : "heading-lg/bold",
                  color: "header-primary",
                  children: c.Z.Messages.QUESTS_EMBED_INVALID_HEADING,
                }),
                (0, s.jsx)(l.Text, {
                  variant: "lg" === t ? "text-sm/medium" : "text-xs/medium",
                  color: "text-normal",
                  className: E.__invalid_mobileWebCopy,
                  children: c.Z.Messages.QUESTS_EMBED_INVALID_BODY_3,
                }),
                (0, s.jsx)(C, {}),
              ],
            }),
            (0, s.jsx)("div", {
              className: E.imgContainer,
              children: (0, s.jsx)("img", {
                src: m,
                alt: "",
                className: E.missingQuestImage,
              }),
            }),
          ],
        });
      }
    },
    670638: function (e, t, n) {
      n.d(t, {
        r: function () {
          return p;
        },
      });
      var s = n(200651),
        a = n(192379),
        i = n(442837),
        l = n(481060),
        r = n(239091),
        o = n(479531),
        u = n(390322),
        d = n(617136),
        c = n(272008),
        E = n(113434),
        m = n(569984),
        C = n(497505),
        x = n(918701),
        _ = n(341907),
        T = n(46140),
        S = n(231338),
        h = n(689938);
      function g(e) {
        var t;
        let n = (0, i.e7)([m.Z], () => m.Z.questDeliveryOverride, []),
          u = (0, x.GN)(e.questContent),
          g = (0, x.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
          p = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
          j = (0, x.zK)(e.quest, T.S7.DISMISSAL_SURVEY),
          {
            handleComplete: N,
            handleProgress: f,
            handleResetDismissibilityClick: v,
            handleResetStatusClick: A,
            handleOverrideDeliveryClick: M,
          } = (0, E.kJ)(e.quest.id),
          R = a.useCallback(() => {
            (0, x.FE)(e.quest, {
              content: e.questContent,
              ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK,
            });
          }, [e.quest, e.questContent]),
          I = a.useCallback(() => {
            (0, x.f2)(e.quest.id, {
              content: e.questContent,
              position: e.questContentPosition,
              ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK,
            });
          }, [e.quest, e.questContent, e.questContentPosition]),
          q = (e) =>
            (0, l.showToast)(
              (0, l.createToast)(
                new o.Z(e, e.status).message,
                l.ToastType.FAILURE,
              ),
            );
        return (0, s.jsxs)(l.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
          },
          navId: "quests-entry",
          "aria-label": h.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : S.dG,
          children: [
            (0, s.jsxs)(
              l.MenuGroup,
              {
                children: [
                  !1 === g &&
                    (0, s.jsx)(l.MenuItem, {
                      id: "play-game",
                      label: h.Z.Messages.QUESTS_GET_THIS_GAME,
                      action: R,
                      icon: l.LinkExternalMediumIcon,
                    }),
                  !0 === e.showShareLink &&
                    (0, s.jsx)(l.MenuItem, {
                      id: "share-link",
                      label: h.Z.Messages.COPY_LINK,
                      action: I,
                      icon: l.CopyIcon,
                    }),
                ],
              },
              "major-actions",
            ),
            (0, s.jsxs)(
              l.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, s.jsx)(l.MenuItem, {
                      id: "learn-more",
                      label: h.Z.Messages.QUESTS_LEARN_MORE_V2,
                      action: () => {
                        (0, d._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, _.navigateToQuestHome)(
                            T.dr.QUEST_CONTEXT_MENU,
                            e.questContent,
                            e.quest.id,
                          );
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(l.MenuItem, {
                      id: "display-disclosure",
                      label: h.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                      action: () => {
                        (0, _.openDisclosureModal)(e.quest, {
                          content: e.questContent,
                          position: e.questContentPosition,
                          ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                        });
                      },
                    }),
                  u &&
                    (0, s.jsx)(l.MenuItem, {
                      id: "hide-entrypoint",
                      label: h.Z.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        if (
                          ((0, d._3)({
                            questId: e.quest.id,
                            questContent: e.questContent,
                            questContentPosition: e.questContentPosition,
                            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT,
                          }),
                          !!(0, x.GN)(e.questContent))
                        )
                          (0, c.gl)(e.quest.id, e.questContent),
                            j && p && (0, _.maybeShowSurveyForQuest)(e.quest);
                      },
                      subtext:
                        h.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME,
                    }),
                ],
              },
              "minor-actions",
            ),
            e.quest.preview &&
              (0, s.jsxs)(
                l.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, s.jsx)(l.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: M,
                    }),
                    (0, s.jsx)(l.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: v,
                    }),
                    (0, s.jsx)(l.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: A,
                    }),
                    (0, s.jsx)(l.MenuItem, {
                      id: "progress",
                      label: "Set Random Quest Progress",
                      action: () => {
                        f(0.9 * Math.random() + 0.03);
                      },
                    }),
                    (0, s.jsx)(l.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: N,
                    }),
                    (0, x.$J)(e.quest) &&
                      (0, s.jsxs)(l.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, s.jsx)(l.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, x.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, s.jsx)(l.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, c.CS)(e.quest.id, !0).catch(q),
                          }),
                          (0, s.jsx)(l.MenuItem, {
                            id: "stop",
                            label: "Stop heartbeat",
                            action: () => (0, c.is)(e.quest.id).catch(q),
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
      function p(e) {
        let {
            children: t,
            onOpen: n,
            onClose: i,
            preventIdle: r,
            quest: o,
            questContent: c,
            questContentPosition: E,
            ...m
          } = e,
          C = a.useCallback(() => {
            (0, d._3)({
              questId: o.id,
              questContent: c,
              questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: E,
            }),
              null != n && n();
          }, [n, o.id, c, E]);
        return (0, s.jsx)(l.Popout, {
          onRequestOpen: C,
          onRequestClose: i,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
              ? (0, s.jsx)(u.Z, {
                  children: (0, s.jsx)(g, {
                    ...m,
                    quest: o,
                    questContent: c,
                    questContentPosition: E,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(g, {
                  ...m,
                  quest: o,
                  questContent: c,
                  questContentPosition: E,
                  onClose: t,
                });
          },
          animation: l.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    26650: function (e, t, n) {
      var s = n(200651),
        a = n(192379),
        i = n(481060),
        l = n(377171),
        r = n(1494);
      t.Z = a.forwardRef(function (e, t) {
        let { isInventory: n, style: a, children: o } = e;
        return (0, s.jsxs)("div", {
          ref: t,
          className: r.desktopTooltip,
          style: { marginTop: n ? 8 : 0, ...a },
          children: [
            (0, s.jsx)(i.CircleInformationIcon, {
              size: "custom",
              className: r.infoIcon,
              height: n ? 16 : 12,
              width: n ? 16 : 12,
              color: n ? l.Z.TEXT_MUTED : l.Z.WHITE,
            }),
            (0, s.jsx)(i.Text, {
              color: n ? "text-muted" : "always-white",
              variant: n ? "text-xs/normal" : "text-xxs/normal",
              children: o,
            }),
          ],
        });
      });
    },
    860151: function (e, t, n) {
      var s = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        l = n(481060),
        r = n(585500),
        o = n(644646),
        u = n(489066);
      t.Z = function (e) {
        let {
            className: t,
            autoplay: n,
            quest: a,
            questContent: d,
            taskDetails: c,
            location: E,
          } = e,
          m = (0, r.D)({
            quest: a,
            taskDetails: c,
            location: E,
            questContent: d,
          });
        return (0, s.jsxs)("div", {
          className: i()(u.wrapper, t),
          style: { color: a.config.colors.primary },
          children: [
            (0, s.jsx)(o.Z, {
              autoplay: n,
              className: u.rewardTile,
              quest: a,
              questContent: d,
              location: E,
            }),
            (0, s.jsx)(l.Text, {
              className: u.instructions,
              variant: "text-sm/normal",
              color: "text-normal",
              children: m,
            }),
          ],
        });
      };
    },
    390322: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(200651),
        a = n(192379),
        i = n(618158);
      function l(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: l } = (0, i.Y)("popup");
        return (
          a.useEffect(() => (n(), () => l()), [l, n]),
          (0, s.jsx)(s.Fragment, { children: t })
        );
      }
    },
  },
]);
//# sourceMappingURL=05174a00f1a41d57bbef.js.map
