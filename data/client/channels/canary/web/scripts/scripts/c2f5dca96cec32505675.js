"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37447"],
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
        i = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        l = n(780384),
        u = n(302245),
        d = n(475595),
        c = n(78826),
        m = n(46140),
        E = n(981631),
        x = n(789935);
      ((s = a || (a = {}))[(s.SMALL = 24)] = "SMALL"),
        (s[(s.MEDIUM = 32)] = "MEDIUM");
      t.Z = function (e) {
        let {
            className: t,
            gameTileSize: n = 24,
            quest: s,
            theme: a = E.BRd.DARK,
            withGameTile: o = !0,
          } = e,
          C = (0, l.wj)(a) ? E.BRd.DARK : E.BRd.LIGHT,
          h = (0, u.vI)(s, m.dr.QUESTS_BAR);
        return (0, i.jsxs)("div", {
          className: r()(x.partnerBranding, t),
          children: [
            o &&
              (0, i.jsx)(c.Fl, {
                id: "QuestPartnerBranding_gameTile",
                children: (e) =>
                  (0, i.jsx)("img", {
                    ref: e,
                    className: x.partnerBrandingGameTile,
                    alt: "",
                    src: (0, d.fh)(s, d.Bd.GAME_TILE, C).url,
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
                  className: r()(x.partnerBrandingLogotype, {
                    [x.rewardHighlightLogotype]: h,
                  }),
                  alt: s.config.messages.gameTitle,
                  src: (0, d.fh)(s, d.Bd.LOGO_TYPE, C).url,
                }),
            }),
          ],
        });
      };
    },
    340100: function (e, t, n) {
      n(571269), n(298267);
      var s = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(692547),
        r = n(481060),
        l = n(113434),
        u = n(26650),
        d = n(597799);
      t.Z = function (e) {
        let {
            className: t,
            color: n = o.Z.colors.WHITE,
            quest: a,
            isInventory: c,
          } = e,
          m = (0, l.qb)(e.quest),
          { percentComplete: E, completedRatioDisplay: x } = (0, l.I)(a);
        return !c && m.length > 0
          ? (0, s.jsx)(u.Z, { children: m.at(0) })
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
                      children: x,
                    }),
                    (0, s.jsx)("div", {
                      className: d.percentCompleteLabelOffset,
                      style: { width: "".concat(100 - E, "%") },
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: d.progressBar,
                  role: "progressbar",
                  "aria-valuenow": E,
                  children: (0, s.jsx)("div", {
                    className: d.progressBarFill,
                    style: { width: "".concat(E, "%") },
                  }),
                }),
                m.length > 0 &&
                  (0, s.jsx)(u.Z, { isInventory: c, children: m.at(0) }),
              ],
            });
      };
    },
    611855: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(481060),
        r = n(689938),
        l = n(967979);
      t.Z = function (e) {
        let {
          className: t,
          color: n = "header-primary",
          textOpacity: a = 0.9,
          bgOpacity: u = 0.4,
        } = e;
        return (0, s.jsxs)(o.Text, {
          variant: "text-xxs/medium",
          color: n,
          className: i()(l.promotedTag, t),
          children: [
            (0, s.jsx)("span", {
              className: l.promotedTagBackground,
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
      var s = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(959078),
        r = n(442837),
        l = n(481060),
        u = n(607070),
        d = n(553795),
        c = n(358085),
        m = n(617136),
        E = n(111382),
        x = n(113434),
        C = n(918701),
        h = n(566078),
        _ = n(667105),
        g = n(689938),
        T = n(727526);
      let p = (e) => (0 === e.length ? T.warning : T.danger),
        S = (e, t) =>
          0 === e.length
            ? g.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: t })
            : g.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: t }),
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
            return (0, s.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-muted",
              children: g.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
                gameTitle: i,
              }),
            });
          let E = [];
          (0, C.Nj)({ quest: t }) &&
            E.push(
              (0, c.isWeb)()
                ? g.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB
                : g.Z.Messages.QUEST_PROGRESS_NO_GAME,
            );
          let x = [
            ...E,
            ...a.map((e) => {
              if (e.type !== o.K.EXPIRED_CREDENTIAL || !u) return e.message;
              let s = d.Z.getAccount(
                  e.connected_account_id,
                  e.connected_account_type,
                ),
                a = (0, C.C9)(e),
                i = (0, C._j)(e);
              return a.format({
                account_name: null == s ? void 0 : s.name,
                onClick: () => {
                  (0, C.fY)(
                    { quest: t, platformType: i },
                    {
                      content: n,
                      ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                    },
                  );
                },
              });
            }),
            r,
          ];
          return (0, s.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: x.reduce((e, t) => [...e, t, " "], []),
          });
        };
      t.Z = function (e) {
        let t = h.r.build(e.quest.config).application.name,
          n = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
          a = (0, _.k3)(e.quest.id, e.location),
          o = (0, E.n)(),
          d = (0, _.g2)({ useReducedMotion: n, className: T.refreshIcon }),
          {
            errorHints: c,
            startingConsoleQuest: C,
            startConsoleQuest: N,
          } = (0, x.GI)({
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
        return (0, s.jsxs)("div", {
          className: i()(T.container, { [T.inFlight]: C }),
          children: [
            (0, s.jsxs)("div", {
              className: T.info,
              children: [
                (0, s.jsxs)("div", {
                  className: T.header,
                  children: [
                    (0, s.jsx)(l.CircleWarningIcon, {
                      className: i()(T.headerIcon, p(c)),
                      size: "custom",
                      color: "currentColor",
                      width: 16,
                      height: 16,
                    }),
                    (0, s.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: S(c, t),
                    }),
                  ],
                }),
                j({
                  quest: e.quest,
                  errors: c,
                  gameTitle: t,
                  location: e.location,
                  consoleHelpArticle: a,
                  expiredCredentialsInteractable: o,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: T.cta,
              children: (0, s.jsx)(l.Button, {
                color: l.ButtonColors.PRIMARY,
                onClick: N,
                disabled: C,
                children: (0, s.jsxs)("div", {
                  className: T.ctaInner,
                  children: [
                    d.render(),
                    g.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA,
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
          return m;
        },
        W_: function () {
          return r;
        },
        Z$: function () {
          return c;
        },
        Z0: function () {
          return x;
        },
        iM: function () {
          return l;
        },
        j2: function () {
          return E;
        },
        jc: function () {
          return d;
        },
        uq: function () {
          return o;
        },
      });
      var s,
        a,
        i = n(497505);
      function o(e) {
        return [
          i.jn.GIFT_INVENTORY_FOR_YOU,
          i.jn.GIFT_INVENTORY_OTHER,
        ].includes(e);
      }
      function r(e) {
        return e === i.jn.GIFT_INVENTORY_FOR_YOU || !o(e);
      }
      function l(e) {
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
        m = 1e3,
        E = 460,
        x = 280;
    },
    37303: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120);
      var s = n(735250),
        a = n(470079),
        i = n(212433);
      n(442837);
      var o = n(686777),
        r = n(113434);
      n(569984);
      var l = n(497505),
        u = n(602667),
        d = n(87894),
        c = n(372113),
        m = n(206044),
        E = n(266843),
        x = n(46140),
        C = n(271074);
      function h(e) {
        let {
            quest: t,
            location: n,
            initiallyExpanded: h,
            contentPosition: _,
          } = e,
          [g, T] = a.useState(!1),
          p = a.useCallback(() => T(!0), []),
          S = a.useCallback(() => T(!1), []),
          j = (0, r.tP)(t),
          { containerRef: N, size: f, height: v } = (0, E.h)(),
          M = (0, o.q)({ location: x.dr.QUESTS_CARD }),
          {
            expansionSpring: I,
            isAnimating: q,
            isExpanded: R,
            toggleExpanded: A,
          } = (0, E.O)({
            initiallyExpanded: !M || h || (0, d.iM)({ location: n, quest: t }),
          }),
          Z = null != v ? v : d.U0;
        return (0, s.jsx)(u.A, {
          questOrQuests: t,
          questContent: n,
          questContentPosition: _,
          trackGuildAndChannelMetadata: n === l.jn.QUESTS_EMBED,
          children: (e) =>
            (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(i.animated.div, {
                style: {
                  maxHeight:
                    n === l.jn.QUESTS_EMBED
                      ? void 0
                      : I.to({ range: [0, 1], output: [d.DJ, Z] }),
                },
                className: C.questsCard,
                onFocus: p,
                onMouseEnter: p,
                onBlur: S,
                onMouseLeave: S,
                children: (0, s.jsxs)("div", {
                  ref: (t) => {
                    (e.current = t), (N.current = t);
                  },
                  children: [
                    (0, s.jsx)(m.Z, {
                      isFocused: g,
                      isQuestExpired: j,
                      location: n,
                      quest: t,
                      size: f,
                      expansionSpring: I,
                      isAnimating: q,
                      isExpanded: R,
                      isInConcurrentQuestExperiment: M,
                      contentPosition: _,
                      toggleExpanded: A,
                    }),
                    (0, s.jsx)(c.Z, {
                      quest: t,
                      isQuestExpired: j,
                      location: n,
                      size: f,
                      isFocused: g,
                      isExpanded: R,
                      isAnimating: q,
                      contentPosition: _,
                    }),
                  ],
                }),
              }),
            }),
        });
      }
    },
    372113: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(442837),
        r = n(481060),
        l = n(607070),
        u = n(706454),
        d = n(63063),
        c = n(930153),
        m = n(617136),
        E = n(113434),
        x = n(569984),
        C = n(497505),
        h = n(918701),
        _ = n(566078),
        g = n(340100),
        T = n(644646),
        p = n(667105),
        S = n(341907),
        j = n(128535),
        N = n(87894),
        f = n(2660),
        v = n(46140),
        M = n(981631),
        I = n(689938),
        q = n(389444),
        R = n(789002);
      let A = (e, t, n) =>
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
              className: q.learnMoreLink,
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
              wrapperClassName: q.ctaButtonWrapper,
              color: r.ButtonColors.PRIMARY,
              onClick: n,
              children: a,
            });
      }
      function O(e) {
        let {
            quest: t,
            progressState: n,
            isCollectibleQuest: a,
            location: i,
            questContentPosition: u,
            inGiftInventory: d,
          } = e,
          c = n >= E.OH.COMPLETED,
          m = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
          C = (0, o.e7)([x.Z], () => x.Z.isEnrolling(t.id)),
          _ = (0, h.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST),
          g = (0, p.Ks)({
            progressState: n,
            quest: t,
            isInHouseQuest: _,
            location: i,
            isCollectibleQuest: a,
            questContentPosition: u,
            inGiftInventory: d,
          }),
          T = _ && d && c,
          S = T ? q.inHouseButton : r.ButtonColors.BRAND,
          j = c && !m ? r.ShinyButton : r.Button;
        return (0, s.jsx)(
          r.Tooltip,
          {
            text: g.tooltipText,
            tooltipContentClassName: q.ctaTooltipText,
            children: (e) => {
              var t;
              return (0, s.jsx)(j, {
                ...e,
                wrapperClassName: q.ctaButtonWrapper,
                color: S,
                disabled: null == g.onClick,
                submitting: C,
                onClick:
                  null !== (t = g.onClick) && void 0 !== t ? t : () => {},
                children: (0, s.jsxs)("div", {
                  className: q.ctaButtonInner,
                  children: [
                    T &&
                      (0, s.jsx)("img", {
                        src: R,
                        alt: "",
                        className: q.inHouseIcon,
                      }),
                    g.text,
                  ],
                }),
              });
            },
          },
          g.tooltipText,
        );
      }
      t.Z = (e) => {
        let {
            quest: t,
            location: n,
            size: a,
            isFocused: l,
            isQuestExpired: x,
            isExpanded: p,
            isAnimating: R,
            contentPosition: b,
          } = e,
          D = (0, E._Q)(t),
          U = D >= E.OH.ACCEPTED,
          Q = D >= E.OH.COMPLETED,
          L = D >= E.OH.CLAIMED,
          y = (0, h.Xv)(t.config),
          B = (0, N.uq)(n),
          P = n === C.jn.QUESTS_EMBED,
          w = p || R,
          k = U && !L && B,
          H = (0, E.t5)(t, v.dr.QUESTS_CARD, n),
          { xboxAndPlaystationAccounts: W } = (0, E.z6)(),
          G = (0, o.e7)([u.default], () => u.default.locale),
          F = (0, E.z)(t),
          X = B && y,
          Y = x && !Q,
          z = W.length > 0 && B && (0, h.$J)(t) && U && !Q && !F,
          K = (0, s.jsx)(T.Z, {
            autoplay: l,
            className: i()(q.gridImg, {
              [q.questRewardGiftInventory]: B && "lg" === a,
              [q.questRewardEmbed]: P && "lg" === a,
              [q.questRewardEmbedSm]: "sm" === a,
              [q.questRewardEmbedXs]: "xs" === a,
            }),
            learnMoreStyle: B ? null : "text",
            location: v.dr.QUESTS_CARD,
            quest: t,
            questContent: n,
            questContentPosition: b,
          });
        return (0, s.jsxs)("div", {
          className: q.root,
          children: [
            (0, s.jsxs)("div", {
              className: i()(q.outerContainer, {
                [q.outerContainerSm]: "sm" === a,
                [q.outerContainerXs]: "xs" === a,
                [q.outerContainerNoProgress]: !k,
              }),
              style: { visibility: w ? "inherit" : "hidden" },
              "aria-hidden": !w,
              children: [
                (0, s.jsx)(r.Tooltip, {
                  text: Y
                    ? I.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST
                    : null,
                  tooltipContentClassName: q.rewardTileExpirationTooltip,
                  shouldShow: Y,
                  children: (e) =>
                    (0, s.jsxs)("div", {
                      className: q.rewardTileWrapper,
                      ...e,
                      children: [
                        x &&
                          (0, s.jsx)("div", {
                            className: q.rewardTileExpired,
                            children: (0, s.jsx)(r.CircleWarningIcon, {
                              color: r.tokens.colors.WHITE,
                            }),
                          }),
                        X
                          ? (0, s.jsx)(f.Z, {
                              questConfig: t.config,
                              fallback: K,
                              isFocused: l,
                            })
                          : K,
                      ],
                    }),
                }),
                (0, s.jsxs)("div", {
                  className: i()(q.gridText, q.taskDetails),
                  children: [
                    (0, s.jsx)(r.Text, {
                      variant: A(n, a, U),
                      className: q.taskInstructions,
                      children: x
                        ? I.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format(
                            { questName: t.config.messages.questName },
                          )
                        : H,
                    }),
                    (0, s.jsx)(r.Text, {
                      variant: "lg" === a ? "text-sm/medium" : "text-xs/medium",
                      color: "text-muted",
                      children: (function (e) {
                        var t, n, s, a, i, o;
                        let {
                            quest: r,
                            location: l,
                            locale: u,
                            isQuestExpired: m,
                          } = e,
                          x =
                            (null === (t = r.userStatus) || void 0 === t
                              ? void 0
                              : t.completedAt) != null,
                          C =
                            x &&
                            (null === (n = r.userStatus) || void 0 === n
                              ? void 0
                              : n.claimedAt) != null,
                          g = (0, h.zK)(r, v.S7.IN_HOUSE_CONSOLE_QUEST),
                          T = (0, N.uq)(l),
                          p = (0, E.B6)(
                            null === (s = r.userStatus) || void 0 === s
                              ? void 0
                              : s.completedAt,
                            { year: "numeric", month: "long", day: "numeric" },
                          ),
                          S = (0, h.oo)({ quest: r }),
                          j = _.r.build(r.config).defaultReward.messages
                            .nameWithArticle,
                          f = (0, h.Kr)(r.config),
                          q = (0, h.b7)(r);
                        if (x && g && T)
                          return I.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format(
                            { date: p },
                          );
                        if (C) {
                          let e = S
                              ? (0, h.o9)({
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
                            ? I.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format(
                                { reward: t, date: p },
                              )
                            : I.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                reward: j,
                                date: p,
                              });
                        }
                        if (x)
                          return S
                            ? I.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format(
                                { date: p },
                              )
                            : I.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                reward: j,
                                date: p,
                              });
                        let R = S ? (0, h.o9)({ quest: r, idx: 0 }) : null;
                        return m
                          ? I.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format(
                              {
                                reward:
                                  null !==
                                    (o =
                                      null == R
                                        ? void 0
                                        : R.messages.nameWithArticle) &&
                                  void 0 !== o
                                    ? o
                                    : j,
                              },
                            )
                          : null != R && null != R.approximateCount
                            ? I.Z.Messages.QUEST_REWARD_TIERED.format({
                                maxReward: R.messages.nameWithArticle,
                                maxRewardCount: (0, c.Bs)(
                                  R.approximateCount,
                                  u,
                                ),
                                helpCenterLink: d.Z.getArticleURL(
                                  M.BhN.QUESTS_LEARN_MORE,
                                ),
                              })
                            : null != f
                              ? I.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format(
                                  { reward: j, duration: f },
                                )
                              : null != q
                                ? q.description
                                : I.Z.Messages.QUEST_REWARD.format({
                                    reward: j,
                                  });
                      })({
                        quest: t,
                        location: n,
                        locale: G,
                        isQuestExpired: x,
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: i()(q.ctaButtonContainer, q.gridCtaButtons),
                  children: [
                    !B &&
                      (0, s.jsx)(Z, {
                        containerSize: a,
                        onClick: () => {
                          (0, S.navigateToQuestHome)(v.dr.QUESTS_CARD, n, t.id),
                            (0, m._3)({
                              questId: t.id,
                              questContent: n,
                              questContentPosition: b,
                              questContentCTA: m.jZ.LEARN_MORE,
                            });
                        },
                        children: I.Z.Messages.QUESTS_LEARN_MORE_V2,
                      }),
                    x && !Q
                      ? null
                      : (0, s.jsx)(O, {
                          quest: t,
                          progressState: D,
                          isCollectibleQuest: y,
                          location: n,
                          inGiftInventory: B,
                        }),
                  ],
                }),
                k &&
                  (0, s.jsx)(g.Z, {
                    className: q.gridProgressBar,
                    color: Q
                      ? r.tokens.colors.TEXT_POSITIVE
                      : r.tokens.colors.BG_BRAND,
                    quest: t,
                    isInventory: B,
                  }),
              ],
            }),
            z &&
              (0, s.jsxs)("div", {
                className: q.microphoneContainer,
                children: [
                  (0, s.jsx)("div", { className: q.separator }),
                  (0, s.jsx)(j.Z, { quest: t, location: n }),
                ],
              }),
          ],
        });
      };
    },
    206044: function (e, t, n) {
      n(47120);
      var s = n(735250),
        a = n(470079),
        i = n(120356),
        o = n.n(i),
        r = n(212433),
        l = n(722770),
        u = n(442837),
        d = n(846519),
        c = n(481060),
        m = n(393238),
        E = n(607070),
        x = n(70097),
        C = n(210887),
        h = n(572004),
        _ = n(617136),
        g = n(113434),
        T = n(497505),
        p = n(918701),
        S = n(475595),
        j = n(566078),
        N = n(685613),
        f = n(611855),
        v = n(644646),
        M = n(670638),
        I = n(87894),
        q = n(46140),
        R = n(689938),
        A = n(128175);
      let Z = (0, r.animated)(c.ChevronSmallDownIcon),
        O = (0, r.animated)(x.Z),
        b = (e) => {
          let { quest: t, location: n, questContentPosition: i, ...o } = e,
            [r, l] = a.useState(!1),
            u = a.useRef(new d.V7());
          if (
            (a.useEffect(() => {
              let e = u.current;
              return function () {
                e.stop();
              };
            }, []),
            (0, p.zK)(t, q.S7.FRACTIONS_QUEST))
          )
            return null;
          let m = () => {
            (0, _._3)({
              questId: t.id,
              questContent: n,
              questContentCTA: _.jZ.COPY_QUEST_URL,
              questContentPosition: i,
            }),
              (0, h.JG)((0, p.Rs)(t.id)),
              l(!0),
              u.current.start(1e3, () => l(!1));
          };
          return (0, s.jsx)(c.Tooltip, {
            forceOpen: r,
            shouldShow: r,
            color: c.Tooltip.Colors.GREEN,
            text: R.Z.Messages.COPY_SUCCESS_1,
            children: () =>
              (0, s.jsx)(c.Button, {
                ...o,
                className: A.shareButton,
                color: c.Button.Colors.PRIMARY,
                size: c.Button.Sizes.SMALL,
                onClick: m,
                children: R.Z.Messages.QUESTS_SHARE_QUEST,
              }),
          });
        };
      t.Z = (e) => {
        var t, n;
        let {
            isFocused: i,
            isQuestExpired: d,
            quest: x,
            location: h,
            size: p,
            expansionSpring: D,
            isAnimating: U,
            isExpanded: Q,
            isInConcurrentQuestExperiment: L,
            contentPosition: y,
            toggleExpanded: B,
          } = e,
          { ref: P, height: w } = (0, m.Z)(),
          { ref: k, width: H, scrollWidth: W } = (0, m.Z)(),
          G = (0, u.e7)([C.Z], () => C.Z.getState().theme),
          F = (0, u.e7)([E.Z], () => E.Z.useReducedMotion),
          X = a.useMemo(() => (0, S.fh)(x, S.Bd.HERO), [x]),
          Y = a.useRef(null),
          z = (0, I.uq)(h),
          K = h === T.jn.QUESTS_EMBED,
          V = (0, g.t5)(x, q.dr.QUESTS_CARD, h),
          J =
            (null === (t = x.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          $ = (0, g.B6)(x.config.expiresAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          ee = (0, g.B6)(j.r.build(x.config).rewardsExpireAt, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          et = (e) => {
            e.stopPropagation(),
              e.currentTarget.blur(),
              B(),
              (0, _._3)({
                questId: x.id,
                questContent: h,
                questContentCTA: Q ? _.jZ.COLLAPSE : _.jZ.EXPAND,
                questContentPosition: y,
              });
          };
        return (
          a.useEffect(() => {
            X.isAnimated &&
              null != Y.current &&
              (i
                ? Y.current.play()
                : !i && (Y.current.pause(), (Y.current.currentTime = 0)));
          }, [i, X]),
          (0, s.jsxs)("div", {
            className: o()(A.outerContainer, {
              [A.outerContainerGiftInventory]: z,
              [A.outerContainerEmbed]: K,
              [A.outerContainerXs]: "xs" === p,
            }),
            "aria-label": R.Z.Messages.EXPAND,
            style: { height: z ? w : void 0 },
            children: [
              (0, s.jsx)(O, {
                style: { opacity: D.to({ range: [0, 1], output: [0.25, 1] }) },
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                className: A.questSplash,
                controls: !1,
                poster: X.url,
                ref: Y,
                children:
                  !F &&
                  X.isAnimated &&
                  (0, s.jsx)("source", {
                    src: X.url,
                    type:
                      null !== (n = X.mimetype) && void 0 !== n ? n : void 0,
                  }),
              }),
              (0, s.jsxs)("div", {
                className: A.header,
                "aria-expanded": Q,
                children: [
                  (0, s.jsxs)(r.animated.div, {
                    className: o()(A.headerContent, {
                      [A.headerContentEmbed]: K,
                    }),
                    style: {
                      y: z
                        ? D.to({ range: [0, 1], output: [I.DJ, 0] })
                        : void 0,
                    },
                    children: [
                      z &&
                        (0, s.jsx)(r.animated.div, {
                          className: A.headerCollapsedContent,
                          style: {
                            opacity: D.to({ range: [0, 1], output: [1, 0] }),
                            visibility: U || !Q ? "inherit" : "hidden",
                          },
                          "aria-hidden": !U && Q,
                          children: (0, s.jsxs)(c.ClickableContainer, {
                            "aria-label": R.Z.Messages.EXPAND,
                            onClick: et,
                            className: A.headerCollapsedClickableContainer,
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  A.headerCollapsedContentRewardWrapper,
                                children: (0, s.jsx)(v.Z, {
                                  quest: x,
                                  questContent: h,
                                  className: A.headerCollapsedRewardTile,
                                  location: q.dr.QUESTS_CARD,
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: A.headerCollapsedContentCopyWrapper,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      A.headerCollapsedContentCopyLogos,
                                    children: [
                                      (0, s.jsx)(N.Z, {
                                        className: A.partnerBranding,
                                        gameTileSize: N.f.MEDIUM,
                                        quest: x,
                                        theme: G,
                                      }),
                                      (0, s.jsx)(f.Z, {
                                        color: "always-white",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    children: V,
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
                        className: o()(A.headerExpandedContent, {
                          [A.outerContainerGiftInventory]: z,
                          [A.outerContainerEmbed]: K,
                        }),
                        style: {
                          opacity: D.to({ range: [0, 1], output: [0, 1] }),
                          visibility: U || Q ? "inherit" : "hidden",
                        },
                        "aria-hidden": !U && !Q,
                        children: [
                          (0, s.jsxs)("div", {
                            className: A.headerExpandedWrapper,
                            children: [
                              (0, s.jsxs)("div", {
                                className: A.iconLogotypeContainer,
                                children: [
                                  (0, s.jsx)(N.Z, {
                                    className: A.partnerBranding,
                                    gameTileSize: N.f.MEDIUM,
                                    quest: x,
                                    theme: G,
                                  }),
                                  K
                                    ? null
                                    : (0, s.jsx)(f.Z, {
                                        color: "always-white",
                                      }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: A.questInfo,
                                children: [
                                  (0, s.jsx)(c.Tooltip, {
                                    text: x.config.messages.questName,
                                    shouldShow: null != H && null != W && H < W,
                                    children: (e) =>
                                      (0, s.jsx)(c.Heading, {
                                        ref: k,
                                        variant:
                                          "lg" === p
                                            ? "heading-xxl/bold"
                                            : "sm" === p
                                              ? "heading-xl/bold"
                                              : "heading-lg/bold",
                                        className: A.heading,
                                        ...e,
                                        children: R.Z.Messages.QUEST.format({
                                          questName:
                                            x.config.messages.questName,
                                        }),
                                      }),
                                  }),
                                  (0, s.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: J
                                      ? R.Z.Messages.QUESTS_CLAIM_BY_DATE.format(
                                          { expirationDate: ee },
                                        )
                                      : d
                                        ? R.Z.Messages.QUESTS_EXPIRED_ON.format(
                                            { expirationDate: $ },
                                          )
                                        : R.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                            { expirationDate: $ },
                                          ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          !d &&
                            z &&
                            (0, s.jsx)(b, {
                              quest: x,
                              location: h,
                              questContentPosition: y,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(r.animated.div, {
                    className: A.iconsContainer,
                    style: {
                      top: z
                        ? D.to({
                            range: [0, 1],
                            output: [I.DJ / 2 - I.Z$ / 2, I.jc],
                          })
                        : I.jc,
                    },
                    children: [
                      (0, s.jsx)(M.r, {
                        questContent: h,
                        quest: x,
                        questContentPosition: y,
                        shouldShowDisclosure: !0,
                        hideLearnMore: z,
                        showShareLink: !d && K,
                        children: (e) =>
                          (0, s.jsx)(r.animated.div, {
                            style: {
                              opacity: D,
                              visibility: U || Q ? "inherit" : "hidden",
                            },
                            "aria-hidden": !U && !Q,
                            children: (0, s.jsx)(c.Clickable, {
                              ...e,
                              className: A.iconWrapper,
                              "aria-label": R.Z.Messages.ACTIONS,
                              children: (0, s.jsx)(c.MoreHorizontalIcon, {
                                size: "md",
                                color: l.Z.WHITE,
                              }),
                            }),
                          }),
                      }),
                      L &&
                        !(0, I.W_)(h) &&
                        (0, s.jsx)(c.Clickable, {
                          onClick: et,
                          className: A.iconWrapper,
                          "aria-label": Q
                            ? R.Z.Messages.COLLAPSE
                            : R.Z.Messages.EXPAND,
                          children: (0, s.jsx)(Z, {
                            style: {
                              rotate: D.to({ range: [0, 1], output: [0, 180] }),
                            },
                            color: l.Z.WHITE,
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
          return l;
        },
        h: function () {
          return r;
        },
      }),
        n(47120);
      var s = n(470079),
        a = n(481060),
        i = n(393238),
        o = n(87894);
      function r() {
        let e = s.useRef(null),
          [t, n] = s.useState("lg"),
          [a, r] = s.useState(void 0);
        return (
          (0, i.P)(e, (e) => {
            let { width: t, scrollHeight: s } = e;
            return (r(s), null == t || t > o.j2)
              ? n("lg")
              : t > o.Z0
                ? n("sm")
                : n("xs");
          }),
          { containerRef: e, size: t, height: a }
        );
      }
      function l(e) {
        let { initiallyExpanded: t } = e,
          [n, i] = s.useState(t),
          [o, r] = s.useState(!1),
          l = s.useCallback(() => {
            i((e) => !e), r(!0);
          }, []),
          { expansionSpring: u } = (0, a.useSpring)({
            expansionSpring: n ? 1 : 0,
            config: { tension: 450, friction: 45 },
            onRest: () => r(!1),
          });
        return {
          expansionSpring: u,
          isAnimating: o,
          isExpanded: n,
          toggleExpanded: l,
        };
      }
    },
    2660: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var a = n(442837),
        i = n(481060),
        o = n(204418),
        r = n(594174),
        l = n(113434),
        u = n(46140),
        d = n(182294),
        c = n(52539);
      let m = () => (0, s.jsx)("div", { className: c.questsCollectibleReward }),
        E = (e) => {
          let { questConfig: t, fallback: n, isFocused: u } = e,
            m = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
            { avatarDecoration: E, isFetching: x } = (0, l.DU)(t);
          return x
            ? (0, s.jsx)("div", {
                className: c.questsCollectibleReward,
                children: (0, s.jsx)(i.Spinner, {}),
              })
            : null == m || null == E
              ? n
              : (0, s.jsx)("div", {
                  className: c.questsCollectibleReward,
                  children: (0, s.jsx)(o.Z, {
                    avatarSize: d.EF.SIZE_56,
                    user: m,
                    guildId: null,
                    avatarDecorationOverride: E,
                    animateOnHover: !u,
                  }),
                });
        };
      t.Z = (e) =>
        e.questConfig.features.includes(u.S7.FRACTIONS_QUEST)
          ? (0, s.jsx)(m, {})
          : (0, s.jsx)(E, { ...e });
    },
    683650: function (e, t, n) {
      n.d(t, {
        o: function () {
          return C;
        },
      });
      var s = n(735250);
      n(470079);
      var a = n(120356),
        i = n.n(a),
        o = n(481060),
        r = n(497505),
        l = n(266843),
        u = n(341907),
        d = n(46140),
        c = n(689938),
        m = n(424621),
        E = n(87181);
      function x() {
        return (0, s.jsx)("div", {
          className: m.buttonContainer,
          children: (0, s.jsx)(o.Button, {
            className: m.button,
            color: o.ButtonColors.BRAND,
            onClick: () => {
              (0, u.navigateToQuestHome)(d.dr.EMBED_DESKTOP, r.jn.QUESTS_EMBED);
            },
            children: c.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON,
          }),
        });
      }
      function C() {
        let { containerRef: e, size: t } = (0, l.h)();
        return (0, s.jsxs)("div", {
          ref: (t) => (e.current = t),
          className: i()(m.container, {
            [m.wide]: "lg" === t,
            [m.tall]: "lg" !== t,
          }),
          children: [
            (0, s.jsxs)("div", {
              className: m.contentContainer,
              children: [
                (0, s.jsx)(o.Heading, {
                  variant: "lg" === t ? "heading-xl/bold" : "heading-lg/bold",
                  color: "header-primary",
                  children: c.Z.Messages.QUESTS_EMBED_INVALID_HEADING,
                }),
                (0, s.jsx)(o.Text, {
                  variant: "lg" === t ? "text-sm/medium" : "text-xs/medium",
                  color: "text-normal",
                  className: m.__invalid_mobileWebCopy,
                  children: c.Z.Messages.QUESTS_EMBED_INVALID_BODY_3,
                }),
                (0, s.jsx)(x, {}),
              ],
            }),
            (0, s.jsx)("div", {
              className: m.imgContainer,
              children: (0, s.jsx)("img", {
                src: E,
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
          return p;
        },
      });
      var s = n(735250),
        a = n(470079),
        i = n(442837),
        o = n(481060),
        r = n(239091),
        l = n(479531),
        u = n(390322),
        d = n(617136),
        c = n(272008),
        m = n(113434),
        E = n(569984),
        x = n(918701),
        C = n(341907),
        h = n(46140),
        _ = n(231338),
        g = n(689938);
      function T(e) {
        var t;
        let n = (0, i.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
          u = (0, x.GN)(e.questContent),
          T = (0, x.zK)(e.quest, h.S7.IN_HOUSE_CONSOLE_QUEST),
          p = (0, x.KM)(e.quest),
          {
            handleComplete: S,
            handleProgress: j,
            handleResetDismissibilityClick: N,
            handleResetStatusClick: f,
            handleOverrideDeliveryClick: v,
          } = (0, m.kJ)(e.quest.id),
          M = a.useCallback(() => {
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
            (0, o.showToast)(
              (0, o.createToast)(
                new l.Z(e, e.status).message,
                o.ToastType.FAILURE,
              ),
            );
        return (0, s.jsxs)(o.Menu, {
          variant: "fixed",
          onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
          },
          navId: "quests-entry",
          "aria-label": g.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose:
            null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t
              ? t
              : _.dG,
          children: [
            !1 === p &&
              (0, s.jsxs)(
                o.MenuGroup,
                {
                  children: [
                    !1 === T &&
                      (0, s.jsx)(o.MenuItem, {
                        id: "play-game",
                        label: g.Z.Messages.QUESTS_GET_THIS_GAME,
                        action: M,
                        icon: o.LinkExternalMediumIcon,
                      }),
                    !0 === e.showShareLink &&
                      (0, s.jsx)(o.MenuItem, {
                        id: "share-link",
                        label: g.Z.Messages.COPY_LINK,
                        action: I,
                        icon: o.CopyIcon,
                      }),
                  ],
                },
                "major-actions",
              ),
            (0, s.jsxs)(
              o.MenuGroup,
              {
                children: [
                  !e.hideLearnMore &&
                    (0, s.jsx)(o.MenuItem, {
                      id: "learn-more",
                      label: g.Z.Messages.QUESTS_LEARN_MORE_V2,
                      action: () => {
                        (0, d._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE,
                        }),
                          (0, C.navigateToQuestHome)(
                            h.dr.QUEST_CONTEXT_MENU,
                            e.questContent,
                            e.quest.id,
                          );
                      },
                    }),
                  e.shouldShowDisclosure &&
                    (0, s.jsx)(o.MenuItem, {
                      id: "display-disclosure",
                      label: g.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                      action: () => {
                        (0, C.openDisclosureModal)(e.quest, {
                          content: e.questContent,
                          position: e.questContentPosition,
                          ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE,
                        });
                      },
                    }),
                  u &&
                    (0, s.jsx)(o.MenuItem, {
                      id: "hide-entrypoint",
                      label: g.Z.Messages.QUESTS_HIDE_THIS,
                      action: () => {
                        (0, d._3)({
                          questId: e.quest.id,
                          questContent: e.questContent,
                          questContentPosition: e.questContentPosition,
                          questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT,
                        }),
                          (0, x.GN)(e.questContent) &&
                            (0, c.gl)(e.quest.id, e.questContent);
                      },
                      subtext:
                        g.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME,
                    }),
                ],
              },
              "minor-actions",
            ),
            e.quest.preview &&
              (0, s.jsxs)(
                o.MenuGroup,
                {
                  label: "Preview Controls",
                  children: [
                    (0, s.jsx)(o.MenuCheckboxItem, {
                      id: "delivery",
                      label: "Show in Quest Bar",
                      checked: (null == n ? void 0 : n.id) === e.quest.id,
                      action: v,
                    }),
                    (0, s.jsx)(o.MenuItem, {
                      id: "dismiss",
                      label: "Reset Dismissibility",
                      action: N,
                    }),
                    (0, s.jsx)(o.MenuItem, {
                      id: "enrollment",
                      label: "Reset Quest",
                      action: f,
                    }),
                    (0, s.jsx)(o.MenuItem, {
                      id: "progress",
                      label: "Set Random Quest Progress",
                      action: () => {
                        j(0.9 * Math.random() + 0.03);
                      },
                    }),
                    (0, s.jsx)(o.MenuItem, {
                      id: "complete",
                      label: "Complete Quest",
                      action: S,
                    }),
                    (0, x.$J)(e.quest) &&
                      (0, s.jsxs)(o.MenuItem, {
                        id: "console",
                        label: "Console Heartbeat",
                        children: [
                          (0, s.jsx)(o.MenuItem, {
                            disabled: !0,
                            id: "status",
                            label: "Status: ".concat(
                              (0, x.Bz)(e.quest) ? "alive" : "dead",
                            ),
                          }),
                          (0, s.jsx)(o.MenuItem, {
                            id: "start",
                            label: "Start heartbeat (cheatmode)",
                            action: () => (0, c.CS)(e.quest.id, !0).catch(q),
                          }),
                          (0, s.jsx)(o.MenuItem, {
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
            quest: l,
            questContent: c,
            questContentPosition: m,
            ...E
          } = e,
          x = a.useCallback(() => {
            (0, d._3)({
              questId: l.id,
              questContent: c,
              questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
              questContentPosition: m,
            }),
              null != n && n();
          }, [n, l.id, c, m]);
        return (0, s.jsx)(o.Popout, {
          onRequestOpen: x,
          onRequestClose: i,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
              ? (0, s.jsx)(u.Z, {
                  children: (0, s.jsx)(T, {
                    ...E,
                    quest: l,
                    questContent: c,
                    questContentPosition: m,
                    onClose: t,
                  }),
                })
              : (0, s.jsx)(T, {
                  ...E,
                  quest: l,
                  questContent: c,
                  questContentPosition: m,
                  onClose: t,
                });
          },
          animation: o.Popout.Animation.NONE,
          children: (e) => t(e),
        });
      }
    },
    26650: function (e, t, n) {
      var s = n(735250),
        a = n(470079),
        i = n(481060),
        o = n(377171),
        r = n(1494);
      t.Z = a.forwardRef(function (e, t) {
        let { isInventory: n, style: a, children: l } = e;
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
              color: n ? o.Z.TEXT_MUTED : o.Z.WHITE,
            }),
            (0, s.jsx)(i.Text, {
              color: n ? "text-muted" : "always-white",
              variant: n ? "text-xs/normal" : "text-xxs/normal",
              children: l,
            }),
          ],
        });
      });
    },
    390322: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(735250),
        a = n(470079),
        i = n(618158);
      function o(e) {
        let { children: t } = e,
          { preventIdle: n, allowIdle: o } = (0, i.Y)("popup");
        return (
          a.useEffect(() => (n(), () => o()), [o, n]),
          (0, s.jsx)(s.Fragment, { children: t })
        );
      }
    },
  },
]);
//# sourceMappingURL=c2f5dca96cec32505675.js.map
