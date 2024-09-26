"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28044"],
  {
    197857: function (e) {
      e.exports = "/assets/988c17fdd72ce3646bcc.svg";
    },
    708901: function (e) {
      e.exports = "/assets/9cda127e69904bd8cd68.svg";
    },
    858595: function (e) {
      e.exports = "/assets/c9a939b533ac94caae14.svg";
    },
    54042: function (e, t, n) {
      n.d(t, {
        T: function () {
          return s.T;
        },
      });
      var s = n(987138);
    },
    179839: function (e, t, n) {
      n.d(t, {
        M: function () {
          return s.M;
        },
      });
      var s = n(210730);
    },
    865364: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var s = n(818083),
        o = n(977156);
      let r = (0, s.B)({
          id: "2024-03_quest_bar_progress_cta",
          kind: "user",
          label: "Quest Bar Progress CTA",
          defaultConfig: { enabled: !1 },
          treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            {
              id: 1,
              label: "Quest Bar Progress CTA enabled",
              config: { enabled: !0 },
            },
          ],
        }),
        a = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e,
            s = (0, o.Zy)({ location: t }),
            { enabled: a } = r.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return s && a;
        };
    },
    988303: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
        u: function () {
          return a;
        },
      });
      var s,
        o,
        r = n(818083);
      ((s = o || (o = {}))[(s.V1 = 0)] = "V1"), (s[(s.V2 = 1)] = "V2");
      let a = (0, r.B)({
        id: "2024-05_quest_bar",
        kind: "user",
        label: "Quest Bar",
        defaultConfig: { primaryVariant: 0, progressVariant: 0 },
        treatments: [
          {
            id: 1,
            label: "Quest Bar V2 with V1 Progress",
            config: { primaryVariant: 1, progressVariant: 0 },
          },
          {
            id: 2,
            label: "Quest Bar V2",
            config: { primaryVariant: 1, progressVariant: 1 },
          },
        ],
      });
    },
    796111: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
      });
      let s = (0, n(818083).B)({
          id: "2024-06_quest_inline_console_connection",
          kind: "user",
          label: "Quest Inline Console Connection Experiment",
          defaultConfig: { enabled: !1 },
          treatments: [
            {
              id: 0,
              label: "Simplified console connection flow",
              config: { enabled: !1 },
            },
            {
              id: 1,
              label: "Inline console connection flow",
              config: { enabled: !0 },
            },
          ],
        }),
        o = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e,
            { enabled: o } = s.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return o;
        };
    },
    585857: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return T;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(54042),
        l = n(179839),
        i = n(481060),
        c = n(230711),
        d = n(231757),
        u = n(617136),
        p = n(497505),
        m = n(796111),
        x = n(46140),
        _ = n(981631),
        C = n(689938),
        g = n(181284);
      function f(e) {
        let { quest: t, isConnected: n, consoleType: o } = e;
        return (0, s.jsx)(i.Clickable, {
          className: g.connectConsoleButtonWrapper,
          onClick: () => {
            (0, u._3)({
              questId: t.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.CONNECT_CONSOLE,
            }),
              (0, d.Z)({ platformType: o });
          },
          children:
            o === _.ABu.PLAYSTATION
              ? (0, s.jsx)(a.T, {
                  colorClass: r()(
                    g.connectConsoleButton,
                    n
                      ? g.playstationButtonConnected
                      : g.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                })
              : (0, s.jsx)(l.M, {
                  colorClass: r()(
                    g.connectConsoleButton,
                    n
                      ? g.xboxButtonConnected
                      : g.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                }),
        });
      }
      function E(e) {
        let { text: t, quest: n } = e;
        return (0, s.jsx)(i.Clickable, {
          className: g.showConnectionsButton,
          onClick: () => {
            (0, u._3)({
              questId: n.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
            }),
              c.Z.open(_.oAB.CONNECTIONS);
          },
          children: (0, s.jsx)(i.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
          }),
        });
      }
      function h(e) {
        let {
            quest: t,
            xboxAccounts: n,
            playstationAccounts: o,
            xboxAndPlaystationAccounts: a,
          } = e,
          l = a.slice(0, 2),
          c = a.length > 0,
          d = n.length > 0,
          u = o.length > 0;
        return (0, s.jsxs)("div", {
          className: g.inlineConsoleConnectionDetails,
          children: [
            (0, s.jsxs)("div", {
              className: g.inlineConsoleConnectionDetailsUpper,
              children: [
                (0, s.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-xxs/normal",
                  children: c
                    ? C.Z.Messages.QUESTS_CONNECTED
                    : C.Z.Messages.QUESTS_SELECT_TO_START,
                }),
                (0, s.jsxs)("div", {
                  className: g.inlineConsoleConnectionDetailsIcons,
                  children: [
                    (0, s.jsx)(f, {
                      consoleType: _.ABu.PLAYSTATION,
                      isConnected: u,
                      quest: t,
                    }),
                    (0, s.jsx)("div", { className: g.consoleIconDivider }),
                    (0, s.jsx)(f, {
                      consoleType: _.ABu.XBOX,
                      isConnected: d,
                      quest: t,
                    }),
                  ],
                }),
              ],
            }),
            c &&
              (0, s.jsxs)("div", {
                className: g.inlineConsoleConnectionDetailsLower,
                children: [
                  l.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: r()(
                          g.inlineConsoleConnectionDetailsLowerItem,
                          t > 0 ? g.marginTop4px : void 0,
                        ),
                        children: [
                          (0, s.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/normal",
                            children:
                              e.type === _.ABu.XBOX
                                ? C.Z.Messages.QUESTS_XBOX_ID
                                : C.Z.Messages.QUESTS_PSN_ONLINE_ID_V2,
                          }),
                          (0, s.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/normal",
                            children: e.name,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                  a.length > 2 &&
                    (0, s.jsx)(E, {
                      text: C.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
                      quest: t,
                    }),
                ],
              }),
          ],
        });
      }
      function S(e) {
        let { xboxAndPlaystationAccounts: t, quest: n } = e;
        return t.length > 0
          ? (0, s.jsx)(E, {
              text: C.Z.Messages.QUESTS_SHOW_CONNECTIONS,
              quest: n,
            })
          : null;
      }
      function T(e) {
        let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children:
                C.Z.Messages
                  .QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
            }),
            t ? (0, s.jsx)(h, { ...e }) : (0, s.jsx)(S, { ...e }),
          ],
        });
      }
    },
    210724: function (e, t, n) {
      n.d(t, {
        P: function () {
          return b;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(442837),
        c = n(481060),
        d = n(110924),
        u = n(607070),
        p = n(819640),
        m = n(617136),
        x = n(113434),
        _ = n(569984),
        C = n(497505),
        g = n(918701),
        f = n(302245),
        E = n(977156),
        h = n(5881),
        S = n(602667),
        T = n(78826),
        N = n(693900),
        v = n(617889),
        j = n(46140),
        A = n(981631),
        R = n(604330);
      function b(e) {
        var t, n, r;
        let { quest: _ } = e,
          b = (0, h.T)({ quest: _, location: j.dr.QUESTS_BAR }),
          B = (0, E.Zy)({ location: j.dr.QUESTS_BAR }),
          I = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
          M = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
          O =
            (null === (t = _.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          y = (0, d.Z)(O),
          L =
            (null === (n = _.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          w = (0, d.Z)(L),
          k =
            (null === (r = _.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) != null,
          U = null != _.userStatus && (0, g.zE)(_.userStatus, C.jn.QUEST_BAR),
          Z = (0, x.tP)(_),
          { hasError: q, isLoading: P } = (0, T.d7)(),
          Q = B && !U && !k && !Z && !P,
          D = o.useRef(Q),
          W = (0, v.B)(_, Q && !q),
          H = (0, f.vI)(_, j.dr.QUESTS_BAR) ? f.WV : W.collapsedHeight,
          V = o.useRef(-1),
          z = o.useRef(!1),
          [G, F] = o.useState(!1),
          [K, Y] = o.useState(!1),
          [X, J] = o.useState(!0),
          [$, ee] = o.useState(!0),
          [et, en] = o.useState(W.preEnrollmentExpandedHeight),
          es = o.useRef(null),
          eo = o.useCallback((e) => {
            J(!1), Y(e);
          }, []),
          er = o.useCallback(() => {
            var e, t;
            en(
              (null !==
                (t =
                  null === (e = es.current) || void 0 === e
                    ? void 0
                    : e.offsetHeight) && void 0 !== t
                ? t
                : 84) +
                2 * W.paddingVertical,
            );
          }, [W.paddingVertical]),
          ea = o.useCallback(() => {
            er(), eo(!0);
          }, [er, eo]),
          el = o.useCallback(() => {
            F(!0);
          }, []),
          ei = o.useCallback(() => {
            F(!1), !z.current && !L && eo(!1);
          }, [L, eo]),
          ec = o.useCallback(() => {
            F(!1), !L && eo(!1), (z.current = !1);
          }, [L, eo]),
          ed = o.useCallback(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (K) return;
              let { withDelay: t = !1 } = e;
              t ? (V.current = window.setTimeout(ea, 75)) : ea();
            },
            [ea, K],
          ),
          eu = o.useCallback(() => {
            ed();
          }, [ed]),
          ep = o.useCallback(() => {
            if ((window.clearTimeout(V.current), !!W.canCollapseOnBlur && !G))
              !z.current && eo(!1);
          }, [G, W, eo]),
          em = o.useCallback(() => {
            (0, m.dA)({
              questId: _.id,
              event: A.rMx.QUEST_HOVER,
              properties: (0, m.mH)(C.jn.QUEST_BAR),
            }),
              (z.current = !0),
              ed({ withDelay: !0 });
          }, [ed, _]),
          ex = o.useCallback(() => {
            (z.current = !1), ep();
          }, [ep]);
        o.useLayoutEffect(() => {
          L && W.shouldExpandOnQuestComplete && ea();
        }, [ea, L, W.shouldExpandOnQuestComplete]),
          o.useLayoutEffect(() => {
            O && !y && z.current && ea();
          }, [ea, O, y]),
          o.useLayoutEffect(() => {
            !L && O && !y && !z.current && eo(!1);
          }, [O, L, y, eo]),
          o.useLayoutEffect(() => {
            Q !== D.current && ee(!1), (D.current = Q);
          }, [Q]);
        let e_ = O ? j.XZ : j.R4,
          [{ expansionSpring: eC }, eg] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: e_,
            onRest: () => {
              J(!0);
            },
            onStart: () => {
              J(!1);
            },
          }));
        o.useEffect(() => {
          eg({ expansionSpring: K ? 1 : 0, immediate: I });
        }, [K, eg, I]);
        let { visibilitySpring: ef } = (0, c.useSpring)({
          from: { visibilitySpring: 0 },
          to: { visibilitySpring: Q ? 1 : 0 },
          config: { tension: 250, friction: 10, clamp: !0 },
          onRest: () => {
            ee(!0);
          },
          onStart: () => {
            ee(!1);
          },
        });
        return (o.useLayoutEffect(() => {
          L && !w && W.canCollapseOnBlur && er();
        }, [L, ea, W.canCollapseOnBlur, er, w]),
        o.useEffect(() => {
          q &&
            (0, m.dA)({
              questId: _.id,
              event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
              properties: {
                ...(0, m.mH)(C.jn.QUEST_BAR),
                reason: "asset_loading_error",
              },
            }),
            !B &&
              (0, m.dA)({
                questId: _.id,
                event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  ...(0, m.mH)(C.jn.QUEST_BAR),
                  reason: "not_eligible_for_quest",
                },
              });
        }, [q, B, _.id]),
        B && (Q || !$ || P) && !q)
          ? (0, s.jsx)(S.A, {
              questOrQuests: _,
              questContent: W.trackingCtx.content,
              overrideVisibility: !M && Q,
              children: () => {
                let e = W.component;
                return (0, s.jsx)("div", {
                  className: R.mask,
                  children: (0, s.jsx)(l.animated.div, {
                    "aria-hidden": !Q,
                    onMouseLeave: ex,
                    onMouseEnter: em,
                    onFocus: eu,
                    onBlur: ep,
                    className: a()(R.wrapper, {
                      [R.wrapperInvisible]: !Q,
                      [R.wrapperVisible]: Q && $,
                    }),
                    style: {
                      color: _.config.colors.secondary,
                      height: ef.to({
                        range: [0, 1],
                        output: [0, !W.canCollapseOnBlur && K ? et : H],
                      }),
                    },
                    children: (0, s.jsx)(l.animated.div, {
                      className: a()(R.contentWrapper, {
                        [R.contentWrapperExpanded]: K,
                        [R.contentWrapperAccepted]: O,
                      }),
                      style: {
                        backgroundColor: W.preEnrollmentBackgroundColor,
                        backgroundImage: O
                          ? W.postEnrollmentBackgroundImage
                          : void 0,
                      },
                      children: (0, s.jsx)(N.t, {
                        springConfig: e_,
                        isExpanded: K,
                        children: (0, s.jsx)(e, {
                          expandedContentRef: es,
                          expansionSpring: eC,
                          isExpanded: K,
                          isExpansionAnimationComplete: X,
                          onCtxMenuClosed: ei,
                          onCtxMenuOpened: el,
                          onCtxMenuSelection: ec,
                          quest: _,
                          useReducedMotion: I,
                          collapsedHeight: H,
                        }),
                      }),
                    }),
                  }),
                });
              },
            })
          : (q
              ? b.log("Not rendered due to asset error")
              : !B && b.log("Not rendered due to ineligibility"),
            null);
      }
      t.Z =
        12633 == n.j
          ? function () {
              let e = (0, i.e7)([_.Z], () => {
                var e, t;
                return null !==
                  (t =
                    null !== (e = _.Z.questDeliveryOverride) && void 0 !== e
                      ? e
                      : (0, g.PM)(
                          _.Z.quests,
                          _.Z.questToDeliverForPlacement,
                          C.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
                        )) && void 0 !== t
                  ? t
                  : (0, g._)(_.Z.quests, C.jn.QUEST_BAR);
              });
              return null == e
                ? null
                : (0, s.jsx)(
                    T.p,
                    {
                      source: j.dr.QUESTS_BAR,
                      questId: e.id,
                      children: (0, s.jsx)(b, { quest: e }),
                    },
                    e.id,
                  );
            }
          : null;
    },
    693900: function (e, t, n) {
      n.d(t, {
        n: function () {
          return m;
        },
        t: function () {
          return p;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(526629),
        a = n(442837),
        l = n(481060),
        i = n(393238),
        c = n(110924),
        d = n(607070);
      let u = o.createContext({ springConfig: {}, isExpanded: !1 });
      function p(e) {
        let t = o.useMemo(
          () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
          [e.springConfig, e.isExpanded],
        );
        return (0, s.jsx)(u.Provider, { value: t, children: e.children });
      }
      function m(e) {
        var t;
        let { children: n } = e,
          { springConfig: p, isExpanded: m } = o.useContext(u),
          x = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
          { ref: _, height: C = null } = (0, i.Z)(),
          g = null !== (t = (0, c.Z)(C)) && void 0 !== t ? t : null,
          [{ height: f }, E] = (0, l.useSpring)(() => ({
            from: { height: 0 },
            config: p,
          }));
        return (
          o.useLayoutEffect(() => {
            null !== C && E({ height: C, immediate: !m || x || null === g });
          }, [C, E, m, x, g]),
          (0, s.jsx)(r.animated.div, {
            style: { height: null === g ? "auto" : f, overflow: "hidden" },
            children: (0, s.jsx)("div", {
              style: { overflow: "hidden" },
              ref: _,
              children: n,
            }),
          })
        );
      }
    },
    617889: function (e, t, n) {
      n.d(t, {
        B: function () {
          return c;
        },
      });
      var s = n(470079),
        o = n(918701),
        r = n(988303),
        a = n(658590),
        l = n(448018),
        i = n(46140);
      let c = (e, t) => {
        let n = (0, o.zK)(e, i.S7.QUEST_BAR_V2),
          c = (0, a.a)(e),
          { primaryVariant: d, progressVariant: u } = r.u.useExperiment(
            { location: i.dr.QUESTS_BAR },
            { autoTrackExposure: t && n },
          );
        return s.useMemo(
          () =>
            c
              ? (0, l.v)(e, r.P.V2, r.P.V2)
              : n
                ? (0, l.v)(e, d, u)
                : (0, l.v)(e, r.P.V1, r.P.V1),
          [c, d, u, e, n],
        );
      };
    },
    941348: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(113434),
        a = n(308069),
        l = n(613087),
        i = n(457153),
        c = n(254197),
        d = n(321025),
        u = n(203338);
      t.Z = function (e) {
        var t;
        let {
            expandedContentRef: n,
            expansionSpring: p,
            isExpanded: m,
            isExpansionAnimationComplete: x,
            onCtxMenuOpened: _,
            onCtxMenuClosed: C,
            onCtxMenuSelection: g,
            quest: f,
            useReducedMotion: E,
            collapsedHeight: h,
          } = e,
          S = o.useRef(null),
          T = o.useRef(null),
          N =
            (null === (t = f.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          v = (0, r.Rf)(f);
        return (0, s.jsxs)(l.p, {
          expandedContentRef: n,
          collapsedContentRef: S,
          expansionSpring: p,
          children: [
            (0, s.jsx)(i.Z, {
              ref: S,
              className: u.content,
              expansionSpring: p,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: f,
              useReducedMotion: E,
              taskDetails: v,
            }),
            (0, s.jsx)(c.Z, {
              expansionSpring: p,
              className: u.content,
              collapsedHeight: h,
              onCtxMenuOpen: _,
              onCtxMenuClose: C,
              onCtxMenuSelect: g,
              overlayRef: T,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: f,
              useReducedMotion: E,
              ref: n,
              taskDetails: v,
              children: (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(d.Z, { expansionSpring: p, isExpanded: m }),
                  !N &&
                    (0, s.jsx)(a.Z, {
                      quest: f,
                      expansionSpring: p,
                      useReducedMotion: E,
                      isExpanded: m,
                      isExpansionAnimationComplete: x,
                      onCtxMenuOpen: _,
                      onCtxMenuClose: C,
                      onCtxMenuSelect: g,
                    }),
                ],
              }),
            }),
            (0, s.jsx)("div", { ref: T, className: u.overlay }),
          ],
        });
      };
    },
    308069: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(481060),
        c = n(617136),
        d = n(497505),
        u = n(918701),
        p = n(302245),
        m = n(685613),
        x = n(670638),
        _ = n(341907),
        C = n(303385),
        g = n(788284),
        f = n(46140),
        E = n(689938),
        h = n(404846);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: r,
            onCtxMenuSelect: S,
            onCtxMenuOpen: T,
            onCtxMenuClose: N,
            useReducedMotion: v,
            isExpanded: j,
            isExpansionAnimationComplete: A,
          } = e,
          R = o.useCallback(() => {
            (0, _.openDisclosureModal)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          b = o.useCallback(() => {
            (0, u.FE)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
            });
          }, [t]),
          B = j && A,
          I = (0, p.vI)(t, f.dr.QUESTS_BAR, !0),
          M = !1 === (0, u.KM)(t),
          O = (0, s.jsx)(i.Clickable, {
            onClick: M ? b : () => {},
            className: a()({ [h.logo]: B, [h.clickable]: M }),
            children: (0, s.jsx)(m.Z, { quest: t, withGameTile: !1 }),
          });
        return (0, s.jsxs)(l.animated.div, {
          className: a()(h.wrapper, {
            [h.interactable]: B,
            [h.rewardHighlightWrapper]: I,
          }),
          style: {
            transform: (0, l.to)(
              [r.to({ range: [0, 1], output: [I ? 8 : 4, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, s.jsx)(l.animated.div, {
              className: h.opaqueExpandedBackground,
              style: {
                opacity: r.to({ range: [0, 1], output: [0, 1] }),
                backdropFilter: r
                  .to([0, 1], [0, 1])
                  .to((e) =>
                    "blur("
                      .concat(10 * e, "px) brightness(")
                      .concat(1 - e / 5, ")"),
                  ),
              },
            }),
            (0, s.jsx)(l.animated.div, {
              className: h.backgroundWrapper,
              style: {
                opacity: r.to({ range: [0, 1], output: [0.5, 0] }),
                borderBottomLeftRadius: r.to({ range: [0, 1], output: [0, 8] }),
                borderBottomRightRadius: r.to({
                  range: [0, 1],
                  output: [0, 8],
                }),
              },
              children: (0, s.jsx)(g.Z, {
                className: h.background,
                animationClassName: h.backgroundAnimation,
                quest: t,
                useReducedMotion: v,
              }),
            }),
            I
              ? (0, s.jsx)(C.Z, {
                  quest: t,
                  expansionSpring: r,
                  isFullyExpanded: B,
                  partnerBranding: O,
                  useReducedMotion: v,
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.animated.img, {
                      alt: "",
                      className: h.wreathIcon,
                      style: {
                        opacity: r.to({ range: [0, 1], output: [1, 0] }),
                      },
                      src: n(858595),
                    }),
                    (0, s.jsx)(l.animated.div, {
                      style: {
                        opacity: r.to({
                          range: [0, 1],
                          output: [1, B ? 1 : 0.8],
                        }),
                        transform: (0, l.to)(
                          [
                            r.to({ range: [0, 1], output: [0, -16] }),
                            r.to({ range: [0, 1], output: [0, 8] }),
                          ],
                          (e, t) =>
                            "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                      },
                      children: O,
                    }),
                    (0, s.jsx)(l.animated.div, {
                      className: h.questAvailable,
                      style: {
                        opacity: r.to({ range: [0, 1], output: [0.7, 0] }),
                        transform: (0, l.to)(
                          [r.to({ range: [0, 1], output: [0, -20] })],
                          (e) => "translate(".concat(e, "px"),
                        ),
                      },
                      children: (0, s.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        className: h.questAvailableText,
                        children: E.Z.Messages.QUEST_AVAILABLE,
                      }),
                    }),
                  ],
                }),
            (0, s.jsxs)(l.animated.div, {
              className: h.promotedBadgeWrapper,
              style: { opacity: r.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, s.jsxs)(i.Clickable, {
                  className: h.promotedBadge,
                  onClick: R,
                  children: [
                    (0, s.jsx)(i.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: E.Z.Messages.QUESTS_PROMOTED,
                    }),
                    (0, s.jsx)(i.CircleQuestionIcon, {
                      color: i.tokens.colors.WHITE,
                      className: h.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, s.jsx)(x.r, {
                  onOpen: T,
                  onClose: N,
                  onSelect: S,
                  questContent: d.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, s.jsx)(i.Clickable, {
                      ...e,
                      className: h.submenuWrapper,
                      "aria-label": E.Z.Messages.ACTIONS,
                      children: (0, s.jsx)(i.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: a()(h.submenuIcon, h.white),
                      }),
                    }),
                }),
              ],
            }),
          ],
        });
      };
    },
    613087: function (e, t, n) {
      n.d(t, {
        B$: function () {
          return c;
        },
        l7: function () {
          return d;
        },
        p: function () {
          return u;
        },
      }),
        n(47120),
        n(653041);
      var s = n(735250),
        o = n(470079),
        r = n(699581),
        a = n(526629),
        l = n(393238),
        i = n(743294);
      let c = o.createContext({
          registerComponent: () => {},
          unregisterComponent: () => {},
          animatedComponents: {},
          expandedContentRef: o.createRef(),
          collapsedContentRef: o.createRef(),
          recalculateAnimationPositions: () => {},
          animatedComponentProps: [],
          expansionSpring: null,
          mountPoints: new Map(),
        }),
        d = o.forwardRef(function (e, t) {
          var n;
          let { children: i, id: d, inState: u, isTextTransition: p = !1 } = e,
            {
              recalculateAnimationPositions: m,
              registerComponent: x,
              unregisterComponent: _,
              expansionSpring: C,
              mountPoints: g,
            } = o.useContext(c),
            f = o.useRef(null),
            E = o.useRef(null),
            h = o.useRef();
          o.useEffect(() => {
            m();
          }, [m]),
            o.useLayoutEffect(() => {
              let e = f.current;
              return (
                null != e && x(e, d, u),
                () => {
                  null != e && _(d, u);
                }
              );
            }, [d, u, x, _]);
          let S = o.useCallback(
            (e) => {
              let { height: t } = e;
              h.current !== t && (m(), (h.current = t));
            },
            [m],
          );
          (0, l.P)(f, S);
          let T = null === (n = g.get(d)) || void 0 === n ? void 0 : n.current,
            N = null;
          return (
            null == T
              ? (N = null)
              : p && null != C
                ? (N = (0, s.jsxs)(s.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, r.createPortal)(
                          (0, s.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: C.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: i(E),
                          }),
                          T,
                        ),
                      "expanded" === u &&
                        (0, r.createPortal)(
                          (0, s.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: C.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: i(E),
                          }),
                          T,
                        ),
                    ],
                  }))
                : "collapsed" === u && (N = (0, r.createPortal)(i(E), T)),
            (0, s.jsxs)("div", {
              style: {
                opacity: (null == N && "collapsed" === u) || null == T ? 1 : 0,
              },
              ref: t,
              children: [i(f), N],
            })
          );
        }),
        u = (e) => {
          let {
              children: t,
              expandedContentRef: n,
              collapsedContentRef: r,
              expansionSpring: a,
            } = e,
            [l, d] = o.useState({}),
            [u, p] = o.useState([]),
            [m, x] = o.useState(() => new Map()),
            _ = o.useCallback((e, t, n) => {
              d((s) => {
                var o;
                let r =
                  null !== (o = s[t]) && void 0 !== o
                    ? o
                    : { expanded: null, collapsed: null };
                return { ...s, [t]: { ...r, [n]: e } };
              }),
                x((e) => {
                  let n = new Map(e);
                  return n.set(t, o.createRef()), n;
                });
            }, []),
            C = o.useCallback((e, t) => {
              let n = !1;
              d((s) => {
                var o;
                let r =
                  null !== (o = s[e]) && void 0 !== o
                    ? o
                    : { expanded: null, collapsed: null };
                return (
                  (r[t] = null),
                  (n = null == r.expanded && null == r.collapsed),
                  { ...s, [e]: r }
                );
              }),
                n &&
                  x((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
            }, []),
            g = o.useCallback(() => {
              let e = [];
              for (let t in l) {
                if (null == l[t] || null == n.current || null == r.current)
                  continue;
                let s = l[t].collapsed,
                  o = l[t].expanded;
                if (null == s || null == o) continue;
                let a = o.getBoundingClientRect(),
                  c = n.current.getBoundingClientRect(),
                  d = s.getBoundingClientRect(),
                  u = r.current.getBoundingClientRect(),
                  p = a.top - c.top + i.Li,
                  m = d.top - u.top,
                  x = a.left - c.left + i.Li,
                  _ = d.left - u.left,
                  C = -a.right + c.right + i.Li,
                  g = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: _,
                  expandedLeft: x,
                  collapsedRight: g,
                  expandedRight: C,
                  collapsedTop: m,
                  expandedTop: p,
                  width: a.width,
                });
              }
              p(e);
            }, [l, n, r, p]);
          return (0, s.jsx)(c.Provider, {
            value: {
              registerComponent: _,
              unregisterComponent: C,
              animatedComponents: l,
              expandedContentRef: n,
              collapsedContentRef: r,
              recalculateAnimationPositions: g,
              animatedComponentProps: u,
              expansionSpring: a,
              mountPoints: m,
            },
            children: t,
          });
        };
    },
    164495: function (e, t, n) {
      n.d(t, {
        y: function () {
          return f;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(481060),
        r = n(782568),
        a = n(617136),
        l = n(497505),
        i = n(918701),
        c = n(796111),
        d = n(667105),
        u = n(46140),
        p = n(689938),
        m = n(128220);
      let x = (e) => {
          let { quest: t } = e;
          return (0, i.KM)(t)
            ? (0, s.jsx)(o.Button, {
                className: m.cta,
                size: o.Button.Sizes.SMALL,
                onClick: () =>
                  (0, r.Z)(
                    "https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord",
                  ),
                children: p.Z.Messages.QUESTS_LEARN_MORE_V2,
              })
            : (0, s.jsx)(o.Button, {
                className: m.cta,
                size: o.Button.Sizes.SMALL,
                onClick: () =>
                  (0, i.FE)(t, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: a.jZ.OPEN_GAME_LINK,
                  }),
                children: p.Z.Messages.QUESTS_GET_THIS_GAME,
              });
        },
        _ = (e) => {
          let { quest: t } = e;
          return (0, s.jsx)(o.Button, {
            fullWidth: !0,
            className: m.cta,
            onClick: () =>
              (0, i.gI)(
                { quest: t },
                {
                  content: l.jn.QUEST_BAR_V2,
                  ctaContent: a.jZ.CONNECT_CONSOLE,
                },
              ),
            size: o.Button.Sizes.SMALL,
            children: p.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA,
          });
        },
        C = (e) => {
          let { quest: t, useReducedMotion: n, isExpanded: r } = e,
            a = (0, d.hf)({ quest: t, location: l.jn.QUEST_BAR_V2 });
          return (0, s.jsx)(o.ShinyButton, {
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            onClick: a,
            pauseAnimation: n || !r,
            className: m.cta,
            buttonShineClassName: m.shine,
            children: p.Z.Messages.QUESTS_CLAIM_REWARD,
          });
        },
        g = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: o,
              isExpanded: r,
              awaitingConsoleConnections: a,
              hasMadeProgress: i,
              isProgressing: d,
              activeScreen: p,
            } = e,
            m =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            g = (0, c.P)({ location: u.dr.QUESTS_BAR });
          if (m)
            return (0, s.jsx)(C, {
              quest: n,
              useReducedMotion: o,
              isExpanded: r,
            });
          if (p === l.LI.CONSOLE && a && !g) return (0, s.jsx)(_, { quest: n });
          if (p !== l.LI.SELECT && !i && !d) return (0, s.jsx)(x, { quest: n });
          return null;
        };
      function f(e) {
        return (0, s.jsxs)("div", {
          className: m.ctaButtons,
          children: [
            e.showBackButton &&
              (0, s.jsx)(o.Button, {
                className: m.backButton,
                innerClassName: m.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, s.jsx)(o.ChevronSmallLeftIcon, {
                  className: m.backIcon,
                }),
              }),
            (0, s.jsx)(g, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(481060),
        c = n(569379),
        d = n(642145),
        u = n(808326);
      t.Z = o.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: o,
            size: r = 42,
            strokeWidth: p = 3,
            glowBlur: m = 0.4,
            percentCompleteText: x,
            children: _,
          } = e,
          C = (0, c.EK)(n, o > 0),
          g = r / 2,
          f = r / 2 - p / 2,
          E = 2 * Math.PI * f,
          h = E - o * E,
          S = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: h,
          },
          T = {
            strokeDasharray: "".concat(E, " ").concat(E),
            strokeDashoffset: -o * E,
          },
          N = { boxShadow: "0 0 30px 0px ".concat(C.glow) },
          { progressTextAnimation: v } = (0, i.useSpring)({
            progressTextAnimation: null != x && 1 !== o ? 1 : 0,
            config: d.Y,
          });
        return (0, s.jsxs)("div", {
          className: u.outer,
          ref: t,
          children: [
            (0, s.jsxs)("div", {
              className: u.inner,
              style: N,
              children: [
                _,
                (0, s.jsxs)(l.animated.div, {
                  style: { opacity: v },
                  className: a()(u.coverContent, u.progressTextWrapper),
                  children: [
                    (0, s.jsx)("div", {
                      className: a()(u.coverContent, u.progressTextOverlay),
                    }),
                    (0, s.jsx)(i.Text, {
                      variant: "text-lg/medium",
                      color: "text-primary",
                      className: u.progressText,
                      children: x,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("svg", {
              className: u.progressBar,
              height: r,
              width: r,
              children: [
                (0, s.jsxs)("defs", {
                  children: [
                    (0, s.jsxs)("filter", {
                      id: "glow",
                      children: [
                        (0, s.jsx)("feGaussianBlur", {
                          result: "coloredBlur",
                          stdDeviation: m,
                        }),
                        (0, s.jsxs)("feMerge", {
                          children: [
                            (0, s.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, s.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, s.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, s.jsx)("feMergeNode", { in: "SourceGraphic" }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("linearGradient", {
                      id: "linear",
                      x1: "100%",
                      y1: "0%",
                      x2: "0%",
                      y2: "0%",
                      children: [
                        (0, s.jsx)("stop", {
                          offset: "0%",
                          stopColor: C.backgroundTop,
                        }),
                        (0, s.jsx)("stop", {
                          offset: "100%",
                          stopColor: C.backgroundBottom,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: f,
                  cx: g,
                  cy: g,
                  stroke: "url(#linear)",
                  style: T,
                }),
                (0, s.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: f,
                  cx: g,
                  cy: g,
                  stroke: C.foreground,
                  style: S,
                }),
              ],
            }),
          ],
        });
      });
    },
    759853: function (e, t, n) {
      n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(887024),
        i = n(699581),
        c = n(526629),
        d = n(442837),
        u = n(110924),
        p = n(607070),
        m = n(819640),
        x = n(569379),
        _ = n(675654),
        C = n(435616),
        g = n(197857);
      let f = ["#51BC9D"];
      t.Z = (e) => {
        var t;
        let {
            expansionSpring: n,
            overlayRef: r,
            quest: E,
            progressBarRef: h,
            isExpanded: S,
          } = e,
          { completionSpring: T, startCompletionAnimation: N } = (0, x.GX)(),
          v =
            (null === (t = E.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          j = o.useRef(!1),
          A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          R = o.useRef(null),
          b = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
          B = (0, u.Z)(b),
          [I, M] = o.useState(null),
          [O, y] = o.useState(null),
          L = o.useRef(new l.qA({ gravity: 0, wind: 0 })),
          w = (0, l.uR)(I, O),
          k = o.useCallback(() => {
            if (A) return;
            let e = h.current,
              t = R.current;
            if (null != t && null != e && w.isReady) {
              var n, s, o, r;
              let { x: a, y: l } = e.getBoundingClientRect(),
                { x: i, y: c } = t.getBoundingClientRect();
              w.createMultipleConfetti(
                ((n = a - i),
                (s = l - c),
                (o = e.clientHeight),
                (r = e.clientWidth),
                {
                  ..._.We,
                  position: {
                    type: "static-random",
                    minValue: { x: n, y: s },
                    maxValue: { x: n + o, y: s + r },
                  },
                  velocity: {
                    type: "static-random",
                    minValue: { x: -20, y: -20 },
                    maxValue: { x: 20, y: 20 },
                  },
                  opacity: { type: "linear", value: 2, addValue: -0.1 },
                  dragCoefficient: { type: "static", value: 1e-4 },
                  size: { type: "static-random", minValue: 2, maxValue: 3 },
                }),
                100,
              );
            }
          }, [h, R, w, A]),
          U = (0, u.Z)(S);
        return (o.useEffect(() => {
          v && S && !U && (N(), k());
        }, [S, v, N, k, U]),
        o.useEffect(() => {
          v &&
            !b &&
            B &&
            setTimeout(() => {
              N(), k();
            }, 200);
        }, [v, B, b, N, k]),
        o.useEffect(() => {
          if (!!w.isReady) !j.current && v && (N(), k()), (j.current = v);
        }, [v, j, k, N, w]),
        A)
          ? null
          : (0, s.jsxs)("div", {
              className: C.wrapper,
              "aria-hidden": "true",
              ref: R,
              children: [
                (0, s.jsx)(c.animated.div, {
                  className: C.background,
                  style: { opacity: T },
                }),
                (0, s.jsx)(c.animated.div, {
                  className: a()(C.borders, C.bordersTopLeft),
                  style: { opacity: T },
                }),
                (0, s.jsxs)(c.animated.div, {
                  className: C.confettiWrapper,
                  style: {
                    transform: n
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, s.jsx)(l.O_, {
                      ref: M,
                      className: C.confetti,
                      environment: L.current,
                    }),
                    (0, s.jsx)(l.Ji, {
                      ref: y,
                      sprites: [g],
                      colors: f,
                      spriteWidth: _.Ko,
                      spriteHeight: _.Ko,
                    }),
                    null != r.current &&
                      (0, i.createPortal)(
                        (0, s.jsx)(c.animated.div, {
                          className: a()(C.borders, C.bordersBottom),
                          style: { opacity: T },
                        }),
                        r.current,
                      ),
                  ],
                }),
              ],
            });
      };
    },
    205511: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(959078),
        i = n(442837),
        c = n(481060),
        d = n(607070),
        u = n(553795),
        p = n(617136),
        m = n(111382),
        x = n(113434),
        _ = n(497505),
        C = n(918701),
        g = n(566078),
        f = n(667105),
        E = n(585857),
        h = n(46140),
        S = n(689938),
        T = n(161548);
      function N(e) {
        let { children: t, isComplete: n, hasNextStep: o } = e;
        return (0, s.jsxs)("li", {
          className: a()(
            T.stepWrapper,
            { [T.stepWrapperComplete]: n },
            { [T.stepWrapperWithNextStep]: o },
          ),
          children: [
            (0, s.jsxs)("div", {
              className: T.stepIndicator,
              children: [
                (0, s.jsx)("div", {
                  className: T.stepIconWrapper,
                  children:
                    n &&
                    (0, s.jsx)(c.CheckmarkLargeBoldIcon, {
                      className: T.stepIcon,
                      color: c.tokens.colors.WHITE,
                    }),
                }),
                o && (0, s.jsx)("div", { className: T.stepConnector }),
              ],
            }),
            (0, s.jsx)("div", { className: T.stepContent, children: t }),
          ],
        });
      }
      function v(e) {
        return (0, s.jsx)(c.Text, {
          className: T.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e.children,
        });
      }
      function j(e) {
        let { quest: t, useReducedMotion: n } = e,
          r = (0, m.n)(),
          i = (0, f.k3)(t.id, _.jn.QUEST_BAR_V2),
          d = (0, f.g2)({ useReducedMotion: n }),
          {
            errorHints: E,
            startingConsoleQuest: N,
            startConsoleQuest: j,
          } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
              (0, p._3)({
                questId: t.id,
                questContent: _.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.DEFIBRILLATOR,
              }),
                d.startAnimation();
            },
            afterRequest: d.stopAnimation,
          }),
          { header: A, renderBody: R } = o.useMemo(() => {
            let e = E.length > 0,
              n = () =>
                (0, s.jsx)(s.Fragment, {
                  children: E.map((e, n) => {
                    if (e.type === l.K.EXPIRED_CREDENTIAL && r) {
                      let o = u.Z.getAccount(
                          e.connected_account_id,
                          e.connected_account_type,
                        ),
                        r = (0, C.C9)(e),
                        a = (0, C._j)(e);
                      return (0, s.jsx)(
                        v,
                        {
                          children: r.format({
                            account_name: null == o ? void 0 : o.name,
                            onClick: () => {
                              (0, C.fY)(
                                { quest: t, platformType: a },
                                {
                                  content: _.jn.QUEST_BAR,
                                  ctaContent:
                                    p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                },
                              );
                            },
                          }),
                        },
                        n,
                      );
                    }
                    return (0, s.jsx)(v, { children: e.message }, n);
                  }),
                });
            if ((0, C.zK)(t, h.S7.IN_HOUSE_CONSOLE_QUEST))
              return {
                header: e
                  ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED
                  : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
                renderBody: e
                  ? n
                  : () =>
                      (0, s.jsx)(c.Text, {
                        className: T.microphoneUnitBodyText,
                        color: "text-muted",
                        variant: "text-xxs/normal",
                        children:
                          S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME,
                      }),
              };
            let o = g.r.build(t.config).application.name;
            return {
              header: e
                ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: o })
                : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: o }),
              renderBody: e
                ? n
                : () =>
                    (0, s.jsx)(c.Text, {
                      className: T.microphoneUnitBodyText,
                      color: "text-muted",
                      variant: "text-xxs/normal",
                      children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format(
                        { gameTitle: o },
                      ),
                    }),
            };
          }, [t, E, r]);
        return (0, s.jsxs)("div", {
          className: T.microphoneUnit,
          children: [
            (0, s.jsxs)("div", {
              className: T.microphoneUnitHeader,
              children: [
                (0, s.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === E.length ? T.warningCircle : T.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, s.jsx)(c.Text, { variant: "text-xs/medium", children: A }),
                (0, s.jsx)(c.Clickable, {
                  className: a()(T.microphoneUnitRefreshIconWrapper, {
                    [T.disabled]: N,
                  }),
                  onClick: () => j(),
                  children: d.render(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: a()({ [T.opacity_50]: N }),
              children: [
                R(),
                0 === E.length ? null : (0, s.jsx)(v, { children: i }),
              ],
            }),
          ],
        });
      }
      function A(e) {
        let { text: t } = e;
        return (0, s.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-xs/medium",
          children: t,
        });
      }
      t.Z = function (e) {
        let { quest: t, taskDetails: n } = e,
          r = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
          a = (0, x.z6)(),
          {
            steps: l,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m,
          } = o.useMemo(() => {
            var e;
            let o = a.xboxAndPlaystationAccounts.length > 0,
              r = o && (0, C.Bz)(t),
              l = (0, C.zK)(t, h.S7.IN_HOUSE_CONSOLE_QUEST),
              i = g.r.build(t.config).application.name,
              c =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, s.jsx)(E.Q, { ...a, quest: t }),
                  isComplete: o || r || c,
                },
                {
                  renderContent: () =>
                    (0, s.jsx)(A, {
                      text: l
                        ? S.Z.Messages
                            .QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME
                        : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format(
                            { gameTitle: i },
                          ),
                    }),
                  isComplete: r || c,
                },
                {
                  renderContent: () =>
                    (0, s.jsx)(A, {
                      text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format(
                        { numMinutes: n.targetMinutes },
                      ),
                    }),
                  isComplete: c,
                },
              ],
              hasConnectedAccounts: o,
              isProgressingQuestForLaunchedGame: r,
              isQuestComplete: c,
            };
          }, [a, t, n]);
        return (0, s.jsxs)("div", {
          className: T.wrapper,
          children: [
            (0, s.jsx)("div", {
              className: T.headingWrapper,
              children: (0, s.jsx)(c.Heading, {
                className: T.heading,
                variant: "text-xs/medium",
                children:
                  S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING,
              }),
            }),
            (0, s.jsxs)("div", {
              className: T.stepsWrapper,
              children: [
                (0, s.jsx)("ul", {
                  children: l.map((e, t) =>
                    (0, s.jsx)(
                      N,
                      {
                        isComplete: e.isComplete,
                        hasNextStep: t < l.length - 1,
                        children: e.renderContent(),
                      },
                      t,
                    ),
                  ),
                }),
                u &&
                  !p &&
                  !m &&
                  (0, s.jsx)(j, { useReducedMotion: r, quest: t }),
              ],
            }),
          ],
        });
      };
    },
    743294: function (e, t, n) {
      n.d(t, {
        Li: function () {
          return r;
        },
        aY: function () {
          return s;
        },
        v6: function () {
          return o;
        },
      });
      let s = "#00000000",
        o = "#CDD8FF1A",
        r = 12;
    },
    457153: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(95985),
        c = n(183004);
      let d = o.forwardRef(function (e, t) {
        var n;
        let {
            className: r,
            expansionSpring: d,
            isExpanded: u,
            isExpansionAnimationComplete: p,
            quest: m,
            taskDetails: x,
          } = e,
          _ = o.useRef(null),
          C =
            (null === (n = m.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null;
        return (0, s.jsx)(l.animated.div, {
          ref: t,
          "aria-hidden": u && p,
          className: a()(r, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: C,
          }),
          style: { opacity: d.to({ range: [0, 1], output: [1, 0] }) },
          children: (0, s.jsx)("div", {
            className: c.contentCollapsedWrapper,
            children: C
              ? (0, s.jsx)(i.Z, {
                  contentLocation: "collapsed",
                  quest: m,
                  progressBarRef: _,
                  isExpanded: !1,
                  taskDetails: x,
                })
              : null,
          }),
        });
      });
      t.Z = d;
    },
    254197: function (e, t, n) {
      n(47120), n(627341);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(278074),
        c = n(442837),
        d = n(481060),
        u = n(70097),
        p = n(617136),
        m = n(272008),
        x = n(113434),
        _ = n(569984),
        C = n(497505),
        g = n(918701),
        f = n(988303),
        E = n(302245),
        h = n(665430),
        S = n(585500),
        T = n(644646),
        N = n(78826),
        v = n(670638),
        j = n(693900),
        A = n(164495),
        R = n(759853),
        b = n(205511),
        B = n(694802),
        I = n(95985),
        M = n(50476),
        O = n(658590),
        y = n(46140),
        L = n(743294),
        w = n(689938),
        k = n(160443);
      function U(e) {
        let { quest: t, isHighlightedReward: n } = e;
        return (0, s.jsx)(T.Z, {
          className: a()(k.rewardTile, { [k.hiddenRewardTile]: n }),
          learnMoreStyle: "text",
          quest: t,
          questContent: C.jn.QUEST_BAR_V2,
          location: y.dr.QUESTS_BAR,
        });
      }
      function Z(e) {
        let {
            quest: t,
            taskDetails: n,
            expansionSpring: r,
            isInteractable: a,
            useReducedMotion: i,
            containerRef: p,
            isExpanded: m,
            onAcceptQuest: x,
          } = e,
          h = (0, c.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]),
          T = (0, g.ph)(t),
          v = o.useMemo(() => (0, g.nP)(T), [T]),
          j = (0, E.vI)(t, y.dr.QUESTS_BAR, !0),
          A = o.useRef(null),
          { primaryVariant: R } = f.u.useExperiment(
            { location: y.dr.QUESTS_BAR },
            { autoTrackExposure: !1 },
          ),
          b = (0, S.D)({
            quest: t,
            location: y.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: R === f.P.V2 || (0, O.a)(t),
          });
        return (
          o.useEffect(() => {
            null != A.current &&
              (i && m
                ? (A.current.pause(), (A.current.currentTime = 0))
                : !i && m && A.current.play());
          }, [i, m]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                children: (0, s.jsxs)("div", {
                  className: k.questPromoContent,
                  ref: p,
                  children: [
                    (0, s.jsxs)("div", {
                      className: k.details,
                      children: [
                        (0, s.jsx)(U, { quest: t, isHighlightedReward: j }),
                        (0, s.jsx)(d.Heading, {
                          className: k.title,
                          variant: "heading-md/medium",
                          children: w.Z.Messages.QUESTS_TITLE.format({
                            questName: t.config.messages.questName,
                          }),
                        }),
                        (0, s.jsx)(d.Text, {
                          className: k.description,
                          variant: "text-xs/normal",
                          children: b,
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.Button, {
                      className: k.cta,
                      color: d.Button.Colors.BRAND,
                      fullWidth: !0,
                      onClick: a ? x : void 0,
                      size: d.Button.Sizes.SMALL,
                      submitting: h,
                      children: w.Z.Messages.QUESTS_ACCEPT_QUEST,
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)(l.animated.div, {
                className: k.heroAssetWrapper,
                style: {
                  backdropFilter: r
                    .to([0, 1], [5, 0])
                    .to((e) => "blur(".concat(e, "px)")),
                  filter: r
                    .to([0, 1], [0.8, 1])
                    .to((e) => "brightness(".concat(e, ")")),
                  borderRadius: j ? "12px 12px 0 0" : "8px 8px 0 0",
                },
                children: [
                  (0, s.jsx)(l.animated.div, {
                    className: k.heroAssetDarken,
                    style: { opacity: r.to([0, 1], [1, 0]) },
                  }),
                  (0, s.jsx)(l.animated.div, {
                    className: k.heroAssetTint,
                    style: {
                      backgroundColor: t.config.colors.primary,
                      opacity: r.to([0, 1], [1, 0]),
                    },
                  }),
                  v
                    ? (0, s.jsx)(N.Fl, {
                        id: "QuestBarV2ContentExpanded_heroAnimated",
                        children: (e) => (
                          null != e.current && (A.current = e.current),
                          (0, s.jsx)(u.Z, {
                            ref: e,
                            autoPlay: !i && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: k.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)("source", {
                              src: T,
                              type: (0, g.mN)(T),
                            }),
                          })
                        ),
                      })
                    : (0, s.jsx)(N.Fl, {
                        id: "QuestBarV2ContentExpanded_heroStatic",
                        children: (e) =>
                          (0, s.jsx)("img", {
                            ref: e,
                            alt: "",
                            className: k.heroAsset,
                            src: T,
                          }),
                      }),
                  (0, s.jsx)(l.animated.div, {
                    className: k.legibilityGradient,
                    style: { opacity: r.to({ range: [0, 1], output: [0, 1] }) },
                  }),
                ],
              }),
            ],
          })
        );
      }
      function q(e) {
        var t;
        let {
            quest: n,
            taskDetails: r,
            expansionSpring: c,
            overlayRef: u,
            isExpanded: p,
            useReducedMotion: m,
            containerRef: _,
            onCtxMenuOpen: g,
            onCtxMenuClose: f,
            onCtxMenuSelect: E,
          } = e,
          S =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          T = r.percentComplete > 0,
          N = (0, x.z)(n),
          [O, U, Z] = (0, x.me)(n, r),
          q = (0, h.pF)({ location: y.dr.QUESTS_BAR }),
          P = o.useRef(null),
          Q = (0, x.B6)(n.config.expiresAt),
          D = (0, x._s)({ quest: n });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.animated.div, {
              className: a()(
                k.postEnrollmentBackground,
                k.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(L.aY, ", ")
                  .concat(L.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, s.jsxs)("div", {
              className: k.questAcceptedContent,
              ref: _,
              children: [
                (0, s.jsxs)("div", {
                  className: k.questAcceptedHeader,
                  children: [
                    (0, s.jsx)(d.Text, {
                      variant: "text-xxs/medium",
                      className: a()(k.flex, k.headerText),
                      children: w.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                        { expirationDate: Q },
                      ),
                    }),
                    (0, s.jsx)(v.r, {
                      onOpen: g,
                      onClose: f,
                      onSelect: E,
                      questContent: C.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, s.jsx)(d.Clickable, {
                          ...e,
                          className: k.submenuWrapper,
                          "aria-label": w.Z.Messages.ACTIONS,
                          children: (0, s.jsx)(d.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(k.submenuIcon, k.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", { className: k.divider }),
                (0, s.jsx)(R.Z, {
                  expansionSpring: c,
                  overlayRef: u,
                  progressBarRef: P,
                  quest: n,
                  isExpanded: p,
                }),
                (0, s.jsx)(I.Z, {
                  contentLocation: "expanded",
                  quest: n,
                  progressBarRef: P,
                  isExpanded: !0,
                  taskDetails: r,
                  activeScreen: O,
                }),
                (0, s.jsx)(j.n, {
                  children:
                    !S &&
                    (0, i.EQ)(O)
                      .with(C.LI.SELECT, () =>
                        (0, s.jsx)(M.Z, {
                          onConsole: () => Z(y.cd.CONSOLE),
                          onDesktop: () => Z(y.cd.DESKTOP),
                        }),
                      )
                      .with(C.LI.DESKTOP, () => (0, s.jsx)(B.Z, { quest: n }))
                      .with(C.LI.CONSOLE, () =>
                        (0, s.jsx)(b.Z, { quest: n, taskDetails: r }),
                      )
                      .exhaustive(),
                }),
                (0, s.jsx)(j.n, {
                  children: (0, s.jsx)(A.y, {
                    quest: n,
                    useReducedMotion: m,
                    isExpanded: p,
                    awaitingConsoleConnections: D,
                    hasMadeProgress: T,
                    isProgressing: N,
                    activeScreen: O,
                    showBackButton:
                      O !== C.LI.SELECT && U.length > 1 && !T && !N && q,
                    onBack: () => Z(null),
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: a()(
                k.postEnrollmentBackground,
                k.postEnrollmentBackgroundExpanded,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(L.aY, ", ")
                  .concat(L.v6, ")"),
              },
            }),
          ],
        });
      }
      let P = o.forwardRef(function (e, t) {
        var n;
        let {
            children: r,
            className: i,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: x,
            onCtxMenuOpen: _,
            onCtxMenuClose: g,
            onCtxMenuSelect: f,
            overlayRef: E,
            quest: h,
            useReducedMotion: S,
            taskDetails: T,
          } = e,
          N = o.useCallback(() => {
            (0, m.AH)(h.id, {
              questContent: C.jn.QUEST_BAR_V2,
              questContentCTA: p.jZ.ACCEPT_QUEST,
            });
          }, [h]),
          v =
            (null === (n = h.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          j = d && u;
        return (0, s.jsxs)(l.animated.div, {
          "aria-hidden": !j,
          className: a()(i, k.contentExpanded, {
            [k.contentInteractable]: j,
            [k.contentExpandedAccepted]: v,
          }),
          style: {
            transform: (0, l.to)(
              [
                x.to({ range: [0, 1], output: [0, -100] }),
                x.to({ range: [0, 1], output: [0, c] }),
              ],
              (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
          },
          children: [
            r,
            (0, s.jsx)(l.animated.div, {
              style: { opacity: 1 },
              children: v
                ? (0, s.jsx)(q, {
                    quest: h,
                    taskDetails: T,
                    expansionSpring: x,
                    overlayRef: E,
                    isExpanded: d,
                    useReducedMotion: S,
                    onCtxMenuOpen: _,
                    onCtxMenuClose: g,
                    onCtxMenuSelect: f,
                    containerRef: t,
                  })
                : (0, s.jsx)(Z, {
                    quest: h,
                    taskDetails: T,
                    expansionSpring: x,
                    isInteractable: j,
                    useReducedMotion: S,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: N,
                  }),
            }),
          ],
        });
      });
      t.Z = P;
    },
    569379: function (e, t, n) {
      n.d(t, {
        EK: function () {
          return h;
        },
        GX: function () {
          return E;
        },
        eQ: function () {
          return g;
        },
        vf: function () {
          return f;
        },
      }),
        n(47120);
      var s = n(470079),
        o = n(442837),
        r = n(481060),
        a = n(410030),
        l = n(706454),
        i = n(930153),
        c = n(113434),
        d = n(497505),
        u = n(918701),
        p = n(665430),
        m = n(585500),
        x = n(566078),
        _ = n(46140),
        C = n(689938);
      function g(e) {
        var t, n;
        let s = (0, o.e7)([l.default], () => l.default.locale),
          r = (0, c.Rf)(e),
          [a] = (0, c.me)(e, r),
          m = (0, p.pF)({ location: _.dr.QUESTS_BAR });
        if (
          (null === (t = e.userStatus) || void 0 === t
            ? void 0
            : t.completedAt) != null
        )
          return C.Z.Messages.QUESTS_COMPLETION_COMPLETE;
        if (
          (null === (n = e.userStatus) || void 0 === n
            ? void 0
            : n.enrolledAt) != null &&
          r.percentComplete > 0
        ) {
          let e = (0, i.T3)(s, r.percentComplete, { roundingMode: "floor" });
          return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
            percent: e,
          });
        }
        return m && a === d.LI.SELECT
          ? C.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER
          : (0, u.$J)(e)
            ? C.Z.Messages.QUEST_BAR_TITLE_START_PLAYING
            : C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
      }
      function f(e, t, n) {
        var s;
        let o = (0, c.B6)(x.r.build(e.config).rewardsExpireAt),
          r = (0, c.Rf)(e),
          a =
            (null === (s = e.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          l = (0, c.z)(e),
          i = (0, m.D)({
            quest: e,
            location: _.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: r,
            useV2Variants: !0,
          });
        if (a)
          return C.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
            expirationDate: o,
          });
        if (t)
          return n === d.LI.SELECT
            ? C.Z.Messages.QUEST_MULTIPLATFORM_SELECT_FUN_SUBTITLE
            : i;
        if (r.percentComplete > 0)
          return l
            ? (0, u.AV)({ quest: e, taskDetails: r })
            : C.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
        return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE;
      }
      function E() {
        let [{ spring: e }, t] = (0, r.useSpring)(
          () => ({ spring: 0 }),
          "animate-always",
        );
        return {
          completionSpring: e,
          startCompletionAnimation: s.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
          }, [t]),
        };
      }
      function h(e, t) {
        var n;
        let s = (0, c.z)(e),
          o = null !== (n = (0, a.i6)()) && void 0 !== n ? n : 0,
          r = "var(--green-330)",
          l = ["var(--background-tertiary)", "var(--interactive-normal)"],
          i = t ? l[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: i,
          backgroundBottom: t ? l[o] : ["#535356", "#8B8C95"][o],
          foreground: r,
          glow: t && s ? r : "#C4C1D66E",
        };
      }
    },
    694802: function (e, t, n) {
      n(571269), n(298267);
      var s = n(735250);
      n(470079);
      var o = n(481060),
        r = n(113434),
        a = n(665430),
        l = n(26650),
        i = n(46140),
        c = n(689938),
        d = n(587311);
      function u(e) {
        let { header: t, children: n } = e;
        return (0, s.jsxs)("div", {
          className: d.card,
          children: [
            (0, s.jsxs)("div", {
              className: d.header,
              children: [
                (0, s.jsx)(o.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: d.icon,
                  width: 16,
                  height: 16,
                }),
                (0, s.jsx)(o.Heading, {
                  color: "always-white",
                  variant: "heading-sm/medium",
                  children: t,
                }),
              ],
            }),
            (0, s.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-xs/normal",
              className: d.warningBody,
              children: n,
            }),
          ],
        });
      }
      t.Z = function (e) {
        let { quest: t } = e,
          n = (0, a.pF)({ location: i.dr.QUESTS_BAR }),
          o = (0, r.qb)(t);
        if (0 === o.length) return null;
        let d = o.at(0);
        return n
          ? d === c.Z.Messages.QUESTS_PROGRESS_WEB_TIP
            ? (0, s.jsx)(u, {
                header: c.Z.Messages.QUEST_BAR_WEB_WARNING_HEADER,
                children: c.Z.Messages.QUEST_BAR_WEB_WARNING_BODY,
              })
            : d === c.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP
              ? (0, s.jsx)(u, {
                  header: c.Z.Messages.QUEST_BAR_MAC_WARNING_HEADER_WINDOWS,
                  children: c.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP,
                })
              : null
          : (0, s.jsx)(l.Z, { children: d });
      };
    },
    95985: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(481060),
        r = n(497505),
        a = n(644646),
        l = n(613087),
        i = n(472144),
        c = n(569379),
        d = n(46140),
        u = n(183004);
      t.Z = (e) => {
        let {
            contentLocation: t,
            quest: n,
            progressBarRef: p,
            isExpanded: m,
            taskDetails: x,
            activeScreen: _,
          } = e,
          { percentComplete: C } = x,
          g = (0, c.eQ)(n),
          f = (0, c.vf)(n, m, _);
        return (0, s.jsxs)("div", {
          className: u.questProgressWrapper,
          children: [
            (0, s.jsx)(l.l7, {
              inState: t,
              id: "progress-bar",
              ref: p,
              children: (e) =>
                (0, s.jsx)(i.Z, {
                  ref: e,
                  quest: n,
                  percentComplete: C,
                  size: 42,
                  strokeWidth: 3,
                  children: (0, s.jsx)(a.Z, {
                    className: u.questProgressRewardTile,
                    quest: n,
                    questContent: r.jn.QUEST_BAR_V2,
                    autoplay: !1,
                    location: d.dr.QUESTS_BAR,
                  }),
                }),
            }),
            (0, s.jsxs)("div", {
              className: u.questProgressCopy,
              children: [
                (0, s.jsx)(l.l7, {
                  inState: t,
                  id: "progress-title",
                  children: (e) =>
                    (0, s.jsx)(o.Text, {
                      ref: e,
                      className: u.questProgressHint,
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: g,
                    }),
                }),
                (0, s.jsx)(l.l7, {
                  inState: t,
                  id: "progress-subtitle",
                  isTextTransition: !0,
                  children: (e) =>
                    (0, s.jsx)(o.Text, {
                      ref: e,
                      className: u.questProgressHint,
                      color: "text-muted",
                      variant: "text-xs/normal",
                      children: f,
                    }),
                }),
              ],
            }),
          ],
        });
      };
    },
    303385: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(526629),
        r = n(481060),
        a = n(497505),
        l = n(302245),
        i = n(644646),
        c = n(46140),
        d = n(689938),
        u = n(437567);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: n,
            isFullyExpanded: p,
            partnerBranding: m,
            useReducedMotion: x,
          } = e,
          { enabled: _, variant: C } = l.Hp.useExperiment({
            location: c.dr.QUESTS_BAR,
          });
        if (!_) return null;
        let g = null;
        return (C === l.PW.REWARD_AVAILABLE
          ? (g = d.Z.Messages.REWARD_AVAILABLE)
          : C === l.PW.EARN_A_REWARD
            ? (g = d.Z.Messages.EARN_A_REWARD)
            : C === l.PW.EARN_A_REWARD_EXCLAMATION &&
              (g = d.Z.Messages.EARN_A_REWARD_EXCLAIMATION),
        null == g)
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(o.animated.div, {
                  className: u.rewardTileSpacer,
                  style: {
                    transform: (0, o.to)(
                      [n.to({ range: [0, 1], output: [1, 24 / 38] })],
                      (e) => "scale(".concat(e, ")"),
                    ),
                  },
                }),
                (0, s.jsx)(o.animated.div, {
                  className: u.rewardTileContainer,
                  style: {
                    transform: (0, o.to)(
                      [
                        n.to({ range: [0, 1], output: [-12, 0] }),
                        n.to({ range: [0, 1], output: [0, 92] }),
                        n.to({ range: [1, 0], output: [1, 38 / 64] }),
                      ],
                      (e, t, n) =>
                        "translate("
                          .concat(e, "px, ")
                          .concat(t, "px) scale(")
                          .concat(n, ")"),
                    ),
                  },
                  children: (0, s.jsx)(i.Z, {
                    learnMoreStyle: "text",
                    quest: t,
                    questContent: a.jn.QUEST_BAR_V2,
                    location: c.dr.QUESTS_BAR,
                    autoplay: p && !x,
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: u.rewardHighlightLogoCTA,
                  children: [
                    (0, s.jsx)(o.animated.div, {
                      className: u.partnerBranding,
                      style: {
                        opacity: n.to({
                          range: [0, 1],
                          output: [1, p ? 1 : 0.8],
                        }),
                        transform: (0, o.to)(
                          [
                            n.to({ range: [0, 1], output: [0, -42] }),
                            n.to({ range: [0, 1], output: [0, 10] }),
                          ],
                          (e, t) =>
                            "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                      },
                      children: m,
                    }),
                    (0, s.jsx)(o.animated.div, {
                      className: u.rewardHighlightCTA,
                      style: {
                        opacity: n.to({ range: [0, 1], output: [0.7, 0] }),
                      },
                      children: (0, s.jsx)(r.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        children: g,
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    321025: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(735250),
        o = n(470079),
        r = n(526629),
        a = n(613087);
      function l(e) {
        let { expansionSpring: t, isExpanded: n } = e,
          {
            animatedComponentProps: l,
            recalculateAnimationPositions: i,
            mountPoints: c,
          } = o.useContext(a.B$);
        return (
          o.useEffect(() => {
            i();
          }, [i, n]),
          (0, s.jsx)("div", {
            style: {
              overflow: "hidden",
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 5,
            },
            children: l.map((e) => {
              let {
                  id: n,
                  collapsedLeft: o,
                  expandedLeft: a,
                  collapsedTop: l,
                  expandedTop: i,
                  width: d,
                } = e,
                u = c.get(n);
              return (0, s.jsx)(
                r.animated.div,
                {
                  ref: u,
                  style: {
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: d,
                    transform: (0, r.to)(
                      [
                        t.to({ range: [0, 1], output: [o, a] }),
                        t.to({ range: [0, 1], output: [l, i] }),
                      ],
                      (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                  },
                },
                n,
              );
            }),
          })
        );
      }
    },
    50476: function (e, t, n) {
      var s = n(735250),
        o = n(481060),
        r = n(689938),
        a = n(597916);
      function l(e) {
        let { onClick: t, children: n } = e;
        return (0, s.jsx)(o.Button, {
          onClick: t,
          className: a.button,
          innerClassName: a.buttonInner,
          look: "blank",
          children: n,
        });
      }
      t.Z = function (e) {
        let { onDesktop: t, onConsole: n } = e;
        return (0, s.jsxs)("div", {
          className: a.buttons,
          children: [
            (0, s.jsxs)(l, {
              onClick: t,
              children: [
                r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                (0, s.jsx)(o.ScreenIcon, { size: "sm" }),
              ],
            }),
            (0, s.jsxs)(l, {
              onClick: n,
              children: [
                r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                (0, s.jsx)(o.GameControllerIcon, { size: "sm" }),
              ],
            }),
          ],
        });
      };
    },
    658590: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      var s = n(918701),
        o = n(46140);
      let r = (e) => {
        let t = "1193992107035983872" === e.id,
          n = (0, s.zK)(e, o.S7.IN_HOUSE_CONSOLE_QUEST),
          r = (0, s.zK)(e, o.S7.MOBILE_CONSOLE_QUEST);
        return t || n || r;
      };
    },
    448018: function (e, t, n) {
      n.d(t, {
        v: function () {
          return p;
        },
      });
      var s = n(497505),
        o = n(988303),
        r = n(941348),
        a = n(658590),
        l = n(647365),
        i = n(743294);
      let c = {
          component: l.Z,
          getCollapsedHeight: () => 40,
          getPreEnrollmentExpandedHeight: () => 240,
          getPostEnrollmentBackgroundImage: (e) =>
            "linear-gradient(90deg, "
              .concat(e.config.colors.primary, ", ")
              .concat(e.config.colors.secondary, ")"),
          getPreEnrollmentBackgroundColor: (e) => void 0,
          canCollapseOnBlur: (e) => {
            var t;
            return (
              (null === (t = e.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) == null
            );
          },
          shouldExpandOnQuestComplete: (e) => !0,
          getVerticalPadding: () => 8,
        },
        d = i.Li,
        u = {
          component: r.Z,
          getCollapsedHeight: (e) => {
            var t;
            return (null === (t = e.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null
              ? 66
              : 40;
          },
          getPreEnrollmentExpandedHeight: () => 270,
          getPostEnrollmentBackgroundImage: () =>
            "linear-gradient(90deg, ".concat(i.aY, ", ").concat(i.v6, ")"),
          getPreEnrollmentBackgroundColor: (e) => "var(--home-background)",
          canCollapseOnBlur: (e) => !0,
          shouldExpandOnQuestComplete: (e) => !1,
          getVerticalPadding: () => d,
        },
        p = (e, t, n) => {
          var r;
          let l =
              (null === (r = e.userStatus) || void 0 === r
                ? void 0
                : r.enrolledAt) != null,
            i = (!l && t === o.P.V2) || (l && n === o.P.V2) || (0, a.a)(e),
            d = i ? u : c;
          return {
            component: d.component,
            collapsedHeight: d.getCollapsedHeight(e),
            preEnrollmentExpandedHeight: d.getPreEnrollmentExpandedHeight(e),
            postEnrollmentBackgroundImage:
              d.getPostEnrollmentBackgroundImage(e),
            preEnrollmentBackgroundColor: d.getPreEnrollmentBackgroundColor(e),
            canCollapseOnBlur: d.canCollapseOnBlur(e),
            shouldExpandOnQuestComplete: d.shouldExpandOnQuestComplete(e),
            paddingVertical: d.getVerticalPadding(),
            trackingCtx: { content: i ? s.jn.QUEST_BAR_V2 : s.jn.QUEST_BAR },
          };
        };
    },
    647365: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(453217),
        r = n(100805),
        a = n(784145);
      t.Z = function (e) {
        let {
          collapsedHeight: t,
          expandedContentRef: n,
          expansionSpring: l,
          isExpanded: i,
          isExpansionAnimationComplete: c,
          onCtxMenuOpened: d,
          onCtxMenuClosed: u,
          onCtxMenuSelection: p,
          quest: m,
          useReducedMotion: x,
        } = e;
        return (0, s.jsx)(r.Z, {
          expansionSpring: l,
          className: a.content,
          collapsedHeight: t,
          onCtxMenuOpen: d,
          onCtxMenuClose: u,
          onCtxMenuSelect: p,
          isExpanded: i,
          isExpansionAnimationComplete: c,
          quest: m,
          useReducedMotion: x,
          ref: n,
          children: (0, s.jsx)(o.Z, {
            className: a.content,
            expansionSpring: l,
            isExpanded: i,
            isExpansionAnimationComplete: c,
            quest: m,
            useReducedMotion: x,
          }),
        });
      };
    },
    788284: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120),
        n(724458);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(392711),
        i = n.n(l),
        c = n(442837),
        d = n(481060),
        u = n(451478),
        p = n(302221),
        m = n(865871);
      let x = [0, 0.5, 1],
        _ = {
          "layers[1].shapes[1].g.k.k": [
            0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278,
            0.776,
          ],
          "layers[2].shapes[1].g.k.k": [
            0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271,
            0.757,
          ],
        };
      async function C(e, t) {
        let s = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
        return (
          (function (e, t, n) {
            for (let s in t) {
              let t = i().get(e, s);
              if (null == t) continue;
              let o = t.map((e, t) => {
                var s;
                return null !== (s = n[t]) && void 0 !== s ? s : e;
              });
              i().set(e, s, o);
            }
          })(s, _, t),
          s
        );
      }
      function g(e) {
        var t;
        let {
            animationClassName: n,
            className: r,
            quest: l,
            useReducedMotion: i,
          } = e,
          _ = (0, c.e7)([u.Z], () => u.Z.isFocused()),
          g = o.useRef(null),
          [f, E] = o.useState(!1),
          h = o.useMemo(() => {
            if (null == l) return null;
            let e = (0, p.oo)(l.config.colors.primary),
              t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
              n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return C(l.id, n);
          }, [l]),
          S =
            (null === (t = l.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          T = !i && _;
        o.useEffect(() => {
          var e, t, n, s;
          _
            ? T &&
              (null === (s = g.current) ||
                void 0 === s ||
                null === (n = s.animation) ||
                void 0 === n ||
                n.play())
            : null === (t = g.current) ||
              void 0 === t ||
              null === (e = t.animation) ||
              void 0 === e ||
              e.goToAndStop(0, !0);
        }, [T, _]);
        let N = o.useCallback(() => {
          E(!0);
        }, []);
        return null == h || S
          ? (0, s.jsx)("div", {
              className: m.backgroundFallback,
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(l.config.colors.primary, ", ")
                  .concat(l.config.colors.secondary, ")"),
              },
            })
          : (0, s.jsx)("div", {
              className: a()(m.lottieAnimationBackgroundWrapper, r),
              children: (0, s.jsx)(
                d.LottieAnimation,
                {
                  ref: g,
                  onComplete: N,
                  importData: () => h,
                  shouldAnimate: !f && T,
                  className: a()(
                    m.lottieAnimation,
                    m.lottieAnimationBackground,
                    n,
                  ),
                  loop: 0,
                  rendererSettings: { preserveAspectRatio: "none" },
                },
                l.config.colors.primary,
              ),
            });
      }
    },
    453217: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(120356),
        r = n.n(o),
        a = n(526629),
        l = n(481060),
        i = n(113434),
        c = n(497505),
        d = n(685613),
        u = n(340100),
        p = n(644646),
        m = n(788284),
        x = n(46140),
        _ = n(689938),
        C = n(968387);
      t.Z = function (e) {
        var t;
        let {
            className: n,
            expansionSpring: o,
            isExpanded: g,
            isExpansionAnimationComplete: f,
            quest: E,
            useReducedMotion: h,
          } = e,
          S =
            (null === (t = E.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { percentComplete: T } = (0, i.Rf)(E),
          N = (0, i.Jf)(E),
          v = null != N ? N.completedRatio > 0 : T > 0;
        return (0, s.jsxs)(a.animated.div, {
          "aria-hidden": g && f,
          className: r()(n, C.contentCollapsed, {
            [C.contentCollapsedExpanded]: g,
            [C.contentCollapsedAccepted]: S,
          }),
          style: { opacity: o.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, s.jsx)(m.Z, { quest: E, useReducedMotion: h }),
            (0, s.jsx)("div", {
              className: C.contentCollapsedWrapper,
              children: S
                ? (0, s.jsxs)("div", {
                    className: C.questProgressWrapper,
                    children: [
                      (0, s.jsx)(p.Z, {
                        className: C.questProgressRewardTile,
                        quest: E,
                        questContent: c.jn.QUEST_BAR,
                        autoplay: !1,
                        location: x.dr.QUESTS_BAR,
                      }),
                      v
                        ? (0, s.jsx)(u.Z, {
                            className: C.questProgressBar,
                            quest: E,
                          })
                        : (0, s.jsx)(l.Text, {
                            className: C.questProgressHint,
                            color: "always-white",
                            variant: "text-sm/semibold",
                            children:
                              _.Z.Messages
                                .QUESTS_COMPLETION_PROGRESS_NOT_STARTED,
                          }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    className: C.brandingWrapper,
                    children: [
                      (0, s.jsx)(d.Z, {
                        className: C.partnerBranding,
                        quest: E,
                      }),
                      (0, s.jsx)(l.Heading, {
                        color: "always-white",
                        variant: "heading-sm/medium",
                        className: C.questName,
                        children: _.Z.Messages.QUEST.format({
                          questName: E.config.messages.questName,
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      };
    },
    100805: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(442837),
        c = n(950104),
        d = n(780384),
        u = n(481060),
        p = n(70097),
        m = n(703656),
        x = n(358085),
        _ = n(617136),
        C = n(272008),
        g = n(113434),
        f = n(569984),
        E = n(497505),
        h = n(918701),
        S = n(865364),
        T = n(585500),
        N = n(566078),
        v = n(340100),
        j = n(611855),
        A = n(644646),
        R = n(78826),
        b = n(670638),
        B = n(667105),
        I = n(46140),
        M = n(981631),
        O = n(701488),
        y = n(689938),
        L = n(609706);
      let w = o.forwardRef(function (e, t) {
        var n, r;
        let {
            children: S,
            className: w,
            collapsedHeight: U,
            expansionSpring: Z,
            isExpanded: q,
            isExpansionAnimationComplete: P,
            onCtxMenuOpen: Q,
            onCtxMenuClose: D,
            onCtxMenuSelect: W,
            quest: H,
            useReducedMotion: V,
          } = e,
          z = (0, i.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]),
          G = (0, g.B6)(H.config.expiresAt),
          F = N.r.build(H.config),
          K = (0, g.B6)(F.rewardsExpireAt),
          Y = (0, h.ph)(H),
          X = o.useMemo(() => (0, h.nP)(Y), [Y]),
          J = (0, B.tP)(F.application.id),
          $ = F.features.has(I.S7.START_QUEST_CTA)
            ? _.jZ.START_QUEST
            : _.jZ.ACCEPT_QUEST,
          ee = F.features.has(I.S7.START_QUEST_CTA)
            ? y.Z.Messages.QUESTS_START_QUEST
            : y.Z.Messages.QUESTS_ACCEPT_QUEST,
          et = o.useCallback(() => {
            (0, C.AH)(H.id, {
              questContent: E.jn.QUEST_BAR,
              questContentCTA: $,
            }),
              F.features.has(I.S7.START_QUEST_CTA) &&
                (0, m.uL)(M.Z5c.ACTIVITY_DETAILS(O.In), void 0);
          }, [H, $, F.features]),
          en = (0, B.hf)({ quest: H, location: E.jn.QUEST_BAR }),
          es = o.useCallback(() => {
            (0, h.FE)(H, {
              content: E.jn.QUEST_BAR,
              ctaContent: _.jZ.OPEN_GAME_LINK,
            });
          }, [H]),
          eo = F.features.has(I.S7.POST_ENROLLMENT_CTA),
          er = (0, g.Rf)(H),
          ea = (0, g.Jf)(H),
          el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
          ei =
            (null === (n = H.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ec =
            (null === (r = H.userStatus) || void 0 === r
              ? void 0
              : r.completedAt) != null,
          ed = o.useMemo(() => (0, h.Xv)(H.config), [H.config]),
          eu = q && P,
          ep = (0, T.D)({
            quest: H,
            taskDetails: er,
            location: I.dr.QUESTS_BAR,
            questContent: E.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0,
          }),
          em = (0, x.isWeb)(),
          ex = o.useMemo(() => {
            let e = (0, d.Qg)(H.config.colors.primary, {
              base: "#ffffff",
              contrastRatio: d.S3.Text,
            });
            return {
              "--custom-cta-color": e,
              "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
              "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
          }, [H.config.colors.primary]);
        return (0, s.jsxs)(l.animated.div, {
          className: a()(w, L.contentExpanded, { [L.contentInteractable]: eu }),
          style: {
            backgroundColor: H.config.colors.secondary,
            transform: ec
              ? void 0
              : (0, l.to)(
                  [
                    Z.to({ range: [0, 1], output: [0, -100] }),
                    Z.to({ range: [0, 1], output: [0, U] }),
                  ],
                  (e, t) =>
                    "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                ),
          },
          children: [
            S,
            (0, s.jsx)("div", {
              "aria-hidden": !eu,
              children: ei
                ? (0, s.jsxs)("div", {
                    className: L.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, s.jsxs)("div", {
                        className: L.utils,
                        children: [
                          (0, s.jsxs)("div", {
                            className: L.questAcceptedContentHeading,
                            children: [
                              (0, s.jsx)(A.Z, {
                                className: L.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: H,
                                questContent: E.jn.QUEST_BAR,
                                location: I.dr.QUESTS_BAR,
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, h.AV)({
                                      quest: H,
                                      taskDetails: er,
                                      thirdPartyTaskDetails:
                                        null != ea ? ea : void 0,
                                    }),
                                  }),
                                  (0, s.jsx)(u.Text, {
                                    className:
                                      L.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: ec
                                      ? y.Z.Messages.QUESTS_CLAIM_BY_DATE.format(
                                          { expirationDate: K },
                                        )
                                      : y.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                          { expirationDate: G },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(b.r, {
                            onOpen: Q,
                            onClose: D,
                            onSelect: W,
                            questContent: E.jn.QUEST_BAR,
                            quest: H,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, s.jsx)(u.Clickable, {
                                ...e,
                                className: L.submenuWrapper,
                                "aria-label": y.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: L.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      ec
                        ? (0, s.jsx)(u.Button, {
                            className: a()(L.cta, L.ctaClaimReward),
                            style: ed ? ex : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: en,
                            size: u.Button.Sizes.NONE,
                            children: y.Z.Messages.QUESTS_CLAIM_REWARD,
                          })
                        : (0, s.jsx)(u.Text, {
                            className: L.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ep,
                          }),
                      (0, s.jsx)(v.Z, { quest: H }),
                      !em &&
                        !el &&
                        !J &&
                        eo &&
                        (0, s.jsx)(k, { onClick: eu ? es : void 0 }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsxs)("div", {
                        className: L.questPromoContent,
                        ref: t,
                        children: [
                          (0, s.jsxs)("div", {
                            className: L.utils,
                            children: [
                              (0, s.jsx)(j.Z, { color: "always-white" }),
                              (0, s.jsx)(b.r, {
                                onOpen: Q,
                                onClose: D,
                                onSelect: W,
                                questContent: E.jn.QUEST_BAR,
                                quest: H,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                children: (e) =>
                                  (0, s.jsx)(u.Clickable, {
                                    ...e,
                                    className: L.submenuWrapper,
                                    "aria-label": y.Z.Messages.ACTIONS,
                                    children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: L.submenuIcon,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: L.details,
                            children: [
                              (0, s.jsx)(A.Z, {
                                className: L.rewardTile,
                                learnMoreStyle: "text",
                                quest: H,
                                questContent: E.jn.QUEST_BAR,
                                location: I.dr.QUESTS_BAR,
                              }),
                              (0, s.jsx)(u.Heading, {
                                className: L.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: y.Z.Messages.QUESTS_TITLE.format({
                                  questName: H.config.messages.questName,
                                }),
                              }),
                              (0, s.jsx)(u.Text, {
                                className: L.description,
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: ep,
                              }),
                            ],
                          }),
                          (0, s.jsx)(u.Button, {
                            className: L.cta,
                            style: "1232852290197655573" !== H.id ? ex : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: eu ? et : void 0,
                            size: u.Button.Sizes.NONE,
                            submitting: z,
                            children: ee,
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: L.heroAssetWrapper,
                        style: { color: H.config.colors.secondary },
                        children: X
                          ? (0, s.jsx)(R.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                (0, s.jsx)(p.Z, {
                                  ref: e,
                                  autoPlay: !V,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                  className: L.heroAsset,
                                  controls: !1,
                                  children: (0, s.jsx)("source", {
                                    src: Y,
                                    type: (0, h.mN)(Y),
                                  }),
                                }),
                            })
                          : (0, s.jsx)(R.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                (0, s.jsx)("img", {
                                  ref: e,
                                  alt: "",
                                  className: L.heroAsset,
                                  src: Y,
                                }),
                            }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      });
      function k(e) {
        let { style: t, onClick: n } = e;
        return (0, S.O)({ location: I.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, s.jsx)(u.Button, {
              className: L.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: y.Z.Messages.QUESTS_GET_THIS_GAME,
            })
          : null;
      }
      t.Z = w;
    },
    623249: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return T;
          },
          openConsoleConnectionErrorsModal: function () {
            return v;
          },
        }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(442837),
        i = n(780384),
        c = n(481060),
        d = n(607070),
        u = n(600164),
        p = n(210887),
        m = n(617136),
        x = n(113434),
        _ = n(497505),
        C = n(918701),
        g = n(667105),
        f = n(981631),
        E = n(689938),
        h = n(24444),
        S = n(708901);
      function T(e) {
        let { questId: t, errorHints: n, transitionState: r, onClose: T } = e,
          v = (0, x.B4)(t);
        null == v && T();
        let [j, A] = (0, o.useState)(n),
          R = (0, x.KX)(),
          b = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
          B = (0, g.g2)({ useReducedMotion: b, className: h.colorTransition }),
          I = j.filter((e) =>
            ["xbox", "playstation"].includes(e.connected_account_type),
          ),
          M = (0, C.Bz)(v),
          O = (0, l.e7)([p.Z], () => p.Z.getState().theme),
          y = (0, i.wj)(O) ? f.BRd.DARK : f.BRd.LIGHT,
          { startConsoleQuest: L, startingConsoleQuest: w } = (0, x.GI)({
            questId: v.id,
            beforeRequest: () => {
              B.startAnimation(),
                (0, m._3)({
                  questId: v.id,
                  questContent: _.jn.CONNECTIONS_MODAL,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: (e) => {
              B.stopAnimation(), A(e);
            },
          });
        return (0, s.jsxs)(c.ModalRoot, {
          transitionState: r,
          size: c.ModalSize.DYNAMIC,
          className: h.modalRoot,
          children: [
            (0, s.jsxs)(c.ModalHeader, {
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              className: h.modalHeader,
              children: [
                (0, s.jsxs)("div", {
                  className: h.modalTop,
                  children: [
                    (0, s.jsx)("div", {
                      className: h.iconFrame,
                      children: (0, s.jsx)("img", {
                        className: h.icon,
                        alt: "",
                        src: S,
                      }),
                    }),
                    (0, s.jsx)(c.ModalCloseButton, {
                      className: h.closeBtn,
                      onClick: T,
                    }),
                  ],
                }),
                (0, s.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  children: E.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER,
                }),
                (0, s.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: h.upperBodyText,
                  children: R.message,
                }),
              ],
            }),
            (0, s.jsxs)(c.ModalContent, {
              className: h.modalContent,
              children: [
                (0, s.jsxs)("div", {
                  className: h.contentHeader,
                  children: [
                    (0, s.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "header-secondary",
                      children: E.Z.Messages.CONNECTED_ACCOUNTS,
                    }),
                    (0, s.jsxs)(c.Clickable, {
                      className: a()(h.refreshWrapper, { [h.disabled]: w }),
                      onClick: L,
                      children: [
                        B.render(),
                        (0, s.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color: "currentColor",
                          className: h.colorTransition,
                          children: E.Z.Messages.REFRESH,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: h.accountsWrapper,
                  children: [
                    (0, s.jsx)(N, {
                      icon: (0, s.jsx)(c.ScreenIcon, { size: "sm" }),
                      text: E.Z.Messages.QUESTS_THIS_PC,
                    }),
                    (0, s.jsx)(N, {
                      icon: (0, s.jsx)(c.GameControllerIcon, { size: "sm" }),
                      text: E.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                      errors: M ? void 0 : I.map((e) => e.message),
                      gameTile: M
                        ? (0, s.jsx)(c.Tooltip, {
                            "aria-label": v.config.messages.gameTitle,
                            text: () =>
                              (0, s.jsxs)("div", {
                                className: h.tooltip,
                                children: [
                                  (0, s.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: v.config.messages.gameTitle,
                                  }),
                                  (0, s.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: E.Z.Messages.QUESTS_GAME_DETECTED,
                                  }),
                                ],
                              }),
                            children: (e) =>
                              (0, s.jsx)("img", {
                                ...e,
                                className: h.gameTile,
                                alt: v.config.messages.gameTitle,
                                src: (0, C.uo)(v, y),
                              }),
                          })
                        : null,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(c.ModalFooter, {
              className: h.footer,
              children: [
                (0, s.jsx)(c.Button, {
                  size: c.ButtonSizes.MIN,
                  onClick: T,
                  className: h.footerCloseButton,
                  children: E.Z.Messages.CLOSE,
                }),
                (0, s.jsx)(c.Button, {
                  look: c.ButtonLooks.LINK,
                  color: c.ButtonColors.PRIMARY,
                  onClick: () => {
                    T(),
                      (0, C.V$)(
                        { quest: v },
                        {
                          content: _.jn.CONNECTIONS_MODAL,
                          ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                        },
                      );
                  },
                  children: E.Z.Messages.QUESTS_SHOW_CONNECTIONS,
                }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        let { icon: t, text: n, errors: o = [], gameTile: r } = e,
          l = o.length > 0,
          i = l ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
        return (0, s.jsxs)("div", {
          className: h.connectionRow,
          children: [
            (0, s.jsxs)("div", {
              className: a()(h.connectionRowHeader, {
                [h.connectionRowHeaderError]: l,
              }),
              children: [
                (0, s.jsxs)("div", {
                  className: h.connectionRowHeaderContent,
                  children: [
                    t,
                    (0, s.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "text-normal",
                      children: n,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: h.connectionRowHeaderContent,
                  children: [
                    r,
                    (0, s.jsx)(i, {
                      color: "currentColor",
                      size: "sm",
                      className: a()({ [h.success]: !l, [h.error]: l }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: h.errorsContainer,
              children: o.map((e) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className: h.errorRow,
                    children: [
                      (0, s.jsx)(c.WarningIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: h.error,
                      }),
                      (0, s.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: e,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function v(e) {
        (0, c.openModalLazy)(async () => {
          let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
          return (n) => (0, s.jsx)(t, { ...n, ...e });
        });
      }
    },
    642145: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return s;
        },
      });
      let s = { tension: 250, friction: 20 };
    },
    415104: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(617136),
        i = n(113434),
        c = n(497505),
        d = n(602667),
        u = n(439826),
        p = n(43779),
        m = n(981631),
        x = n(968470);
      function _(e) {
        let {
            quest: t,
            className: n,
            questContent: r,
            contentPosition: _,
            rowIndex: C,
          } = e,
          [g, f] = o.useState(!1),
          [E, h] = o.useState([]),
          S = (0, i.qb)(t),
          T = o.useCallback(() => {
            f(!0),
              (0, l.dA)({
                questId: t.id,
                event: m.rMx.QUEST_HOVER,
                properties: (0, l.mH)(r),
              });
          }, [f, r, t.id]),
          N = o.useCallback(() => {
            f(!1);
          }, [f]);
        return (0, s.jsx)(d.A, {
          questOrQuests: t,
          questContent: r,
          questContentPosition: _,
          questContentRowIndex: C,
          trackGuildAndChannelMetadata: r === c.jn.QUESTS_EMBED,
          children: (e) =>
            (0, s.jsxs)("div", {
              id: "quest-tile-".concat(t.id),
              ref: (t) => {
                e.current = t;
              },
              className: a()(x.container, n),
              onMouseEnter: T,
              onMouseLeave: N,
              children: [
                (0, s.jsx)(u.Z, {
                  quest: t,
                  isHovering: g,
                  errorHints: E,
                  warningHints: S,
                }),
                (0, s.jsx)(p.Z, {
                  quest: t,
                  questContent: r,
                  isHovering: g,
                  contentPosition: _,
                  rowIndex: C,
                  onReceiveErrorHints: h,
                }),
              ],
            }),
        });
      }
    },
    439826: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(571269),
        n(298267);
      var s,
        o,
        r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        c = n(526629),
        d = n(186325),
        u = n(780384),
        p = n(481060),
        m = n(393238),
        x = n(410030),
        _ = n(44315),
        C = n(70097),
        g = n(113434),
        f = n(497505),
        E = n(918701),
        h = n(623249),
        S = n(78826),
        T = n(670638),
        N = n(642145),
        v = n(981631),
        j = n(689938),
        A = n(411702);
      function R(e) {
        var t;
        let { quest: n, errorHints: s, warningHints: o, isDarkTheme: l } = e,
          { ref: i, height: d = 0 } = (0, m.Z)([s]),
          u =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          x = (0, g.z)(n),
          { type: C, hints: f } = a.useMemo(
            () =>
              u || x
                ? { type: 2, hints: [] }
                : s.length > 0
                  ? { type: 0, hints: s.map((e) => e.message) }
                  : o.length > 0
                    ? { type: 1, hints: o }
                    : { type: 2, hints: [] },
            [s, u, x, o],
          ),
          E = 2 !== C,
          S = (0, p.useSpring)({
            opacity: E ? 1 : 0,
            height: E ? d : 0,
            config: N.Y,
          }),
          T = 0 === C ? p.CircleWarningIcon : p.CircleInformationIcon,
          j = (0, _.Lq)(v.Ilk.RED_345),
          R =
            0 === C
              ? j
              : l
                ? p.tokens.colors.TEXT_NORMAL
                : p.tokens.colors.WHITE;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(c.animated.div, {
            style: S,
            children: (0, r.jsxs)("div", {
              ref: i,
              className: A.hints,
              children: [
                (0, r.jsxs)("div", {
                  className: A.hintsContainer,
                  children: [
                    (0, r.jsx)(T, { size: "xs", color: R }),
                    (0, r.jsx)(p.Text, {
                      variant: "text-xs/medium",
                      color: l ? "text-muted" : "always-white",
                      children: f.at(0),
                    }),
                  ],
                }),
                0 === C &&
                  (0, r.jsx)(p.Button, {
                    onClick: () =>
                      (0, h.openConsoleConnectionErrorsModal)({
                        questId: n.id,
                        errorHints: s,
                      }),
                    size: p.ButtonSizes.MIN,
                    look: p.ButtonLooks.LINK,
                    color: p.ButtonColors.CUSTOM,
                    style: { color: (0, _.Lq)(v.Ilk.BLUE_345) },
                    children: "See Details",
                  }),
              ],
            }),
          }),
        });
      }
      function b(e) {
        var t;
        let {
            quest: n,
            isHovering: s,
            errorHints: o,
            warningHints: l,
            onCtxMenuClose: c,
            onCtxMenuOpen: m,
            onCtxMenuSelect: _,
          } = e,
          h = (0, E.j8)(n),
          N = (0, x.ZP)(),
          b = ((0, u.wj)(N) ? v.BRd.DARK : v.BRd.LIGHT) === v.BRd.DARK,
          B = a.useMemo(() => (0, E.nP)(h), [h]),
          I = a.useContext(d.S).reducedMotion.enabled,
          M = (0, E.Mi)(n, f.jn.GIFT_INVENTORY_FOR_YOU),
          O = (0, g.tP)(n),
          y =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          L = a.useRef(s),
          w = a.useRef(null),
          k = (0, g.B6)(n.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          });
        return (
          a.useEffect(() => {
            if (B && null != w.current)
              return (
                L.current !== s &&
                  (s && !I
                    ? w.current.play()
                    : (w.current.pause(), (w.current.currentTime = 0))),
                (L.current = s),
                () => {
                  var e;
                  null === (e = w.current) || void 0 === e || e.pause();
                }
              );
          }, [s, B, I]),
          (0, r.jsxs)("div", {
            className: A.container,
            children: [
              (0, r.jsx)("div", {
                className: A.heroAssetWrapper,
                children: B
                  ? (0, r.jsx)(S.Fl, {
                      id: "QuestTileBanner_heroAnimated",
                      children: (e) => (
                        null != e.current && (w.current = e.current),
                        (0, r.jsx)(C.Z, {
                          ref: e,
                          autoPlay: !I && s,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                          className: A.heroAsset,
                          controls: !1,
                          children: (0, r.jsx)("source", {
                            src: h,
                            type: (0, E.mN)(h),
                          }),
                        })
                      ),
                    })
                  : (0, r.jsx)(S.Fl, {
                      id: "QuestTileBanner",
                      children: (e) =>
                        (0, r.jsx)("img", {
                          ref: e,
                          alt: "".concat(n.config.messages.questName),
                          className: A.heroAsset,
                          src: h,
                        }),
                    }),
              }),
              (0, r.jsx)("div", {
                className: i()(A.overlay, {
                  [A.darkThemeGradient]: b,
                  [A.lightThemeGradient]: !b,
                }),
              }),
              (0, r.jsxs)("div", {
                className: A.positionContentOverBackground,
                children: [
                  (0, r.jsxs)("div", {
                    className: A.contents,
                    children: [
                      (0, r.jsxs)("div", {
                        className: A.topRow,
                        children: [
                          M &&
                            !O &&
                            !y &&
                            (0, r.jsx)("div", {
                              className: A.pill,
                              children: (0, r.jsx)(p.Text, {
                                variant: "eyebrow",
                                color: "always-white",
                                className: A.eyebrowText,
                                children: j.Z.Messages.RECOMMENDED,
                              }),
                            }),
                          (0, r.jsx)(T.r, {
                            onOpen: m,
                            onClose: c,
                            onSelect: _,
                            questContent: f.jn.QUEST_HOME_DESKTOP,
                            quest: n,
                            hideLearnMore: !0,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            children: (e) =>
                              (0, r.jsx)(p.Clickable, {
                                ...e,
                                className: A.submenuWrapper,
                                "aria-label": j.Z.Messages.ACTIONS,
                                children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: i()(A.submenuIcon),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(S.Fl, {
                        id: "QuestPartnerBranding_gameLogotype",
                        children: (e) =>
                          (0, r.jsx)("img", {
                            ref: e,
                            className: A.partnerBranding,
                            alt: n.config.messages.gameTitle,
                            src: (0, E.Gs)(n, "dark"),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                        className: A.bottomRow,
                        children: [
                          (0, r.jsx)(p.Text, {
                            variant: "text-sm/medium",
                            color: b ? "text-muted" : "always-white",
                            children:
                              j.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                                brandName: n.config.messages.gamePublisher,
                              }),
                          }),
                          O || y
                            ? null
                            : (0, r.jsx)(p.Text, {
                                variant: "text-sm/medium",
                                color: b ? "text-muted" : "always-white",
                                children:
                                  j.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format(
                                    { expiryDate: k },
                                  ),
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(R, {
                    quest: n,
                    errorHints: o,
                    warningHints: l,
                    isDarkTheme: b,
                  }),
                ],
              }),
            ],
          })
        );
      }
      ((o = s || (s = {}))[(o.ERROR = 0)] = "ERROR"),
        (o[(o.WARNING = 1)] = "WARNING"),
        (o[(o.NONE = 2)] = "NONE");
    },
    69439: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(442837),
        i = n(481060),
        c = n(607070),
        d = n(617136),
        u = n(113434),
        p = n(569984),
        m = n(497505),
        x = n(918701),
        _ = n(667105),
        C = n(284851),
        g = n(46140),
        f = n(689938),
        E = n(632946);
      let h = [
        {
          value: g.cd.DESKTOP,
          get label() {
            return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
          },
        },
        {
          value: g.cd.CONSOLE,
          get label() {
            return f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
          },
        },
      ];
      function S(e) {
        let t,
          n,
          { value: o } = e;
        switch (o) {
          case g.cd.DESKTOP:
            (n = (0, s.jsx)(i.ScreenIcon, {})),
              (t = f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
          case g.cd.CONSOLE:
            (n = (0, s.jsx)(i.GameControllerIcon, {})),
              (t = f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
          default:
            return null;
        }
        return (0, s.jsxs)("div", {
          className: E.platformSelectorPrimaryLabel,
          children: [n, t],
        });
      }
      function T(e) {
        var t, n, r, T;
        let {
            quest: N,
            location: v,
            onReceiveErrorHints: j,
            contentPosition: A,
            rowIndex: R,
          } = e,
          b = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
          B = (0, _.g2)({ useReducedMotion: b }),
          I = (0, u._s)({ quest: N }),
          M = (0, u.z)(N),
          O = (0, u.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          { isClaiming: y, isEnrolling: L } = (0, l.cj)([p.Z], () => ({
            isClaiming:
              p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id),
          })),
          w =
            (null === (t = N.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          k =
            (null === (n = N.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          U =
            k &&
            (null === (r = N.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) == null,
          Z = (0, x.iQ)(N),
          q = !(0, x.zi)(N),
          P = (0, u._Q)(N),
          Q = (0, x.zK)(N, g.S7.IN_HOUSE_CONSOLE_QUEST),
          D = (0, x.Xv)(N.config),
          W = (0, u.Rf)(N),
          [H, V, z] = (0, u.me)(N, W),
          G = q && P === u.OH.ACCEPTED,
          F = G && H === m.LI.SELECT,
          K = G && !F && V.length > 1,
          Y = o.useCallback(
            (e) => {
              z(e), e === g.cd.DESKTOP && j([]);
            },
            [z, j],
          ),
          { text: X, onClick: J } = (0, _.Ks)({
            progressState: P,
            quest: N,
            isInHouseQuest: Q,
            location: v,
            isCollectibleQuest: D,
            questContentPosition: A,
            questContentRowIndex: R,
            inGiftInventory: !0,
          }),
          { startingConsoleQuest: $, startConsoleQuest: ee } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
              B.startAnimation(),
                (0, d._3)({
                  questId: N.id,
                  questContent: v,
                  questContentCTA: d.jZ.DEFIBRILLATOR,
                  questContentPosition: A,
                  questContentRowIndex: R,
                });
            },
            afterRequest: (e) => {
              B.stopAnimation(), j(e);
            },
          }),
          et =
            (null === (T = N.userStatus) || void 0 === T
              ? void 0
              : T.claimedAt) != null,
          en = null;
        return (Z && U
          ? (en = (0, s.jsx)(i.Button, {
              color: i.ButtonColors.BRAND,
              submitting: y,
              onClick: null != J ? J : void 0,
              className: E.button,
              children: X,
            }))
          : k
            ? (en = (0, s.jsx)(i.Button, {
                color: i.ButtonColors.BRAND,
                className: E.button,
                onClick: null != J ? J : void 0,
                children: X,
              }))
            : q
              ? q && U
                ? (en = (0, s.jsx)(i.Button, {
                    color: i.ButtonColors.BRAND,
                    submitting: y,
                    onClick: null != J ? J : void 0,
                    className: E.button,
                    children: X,
                  }))
                : q && w && !et
                  ? (en = F
                      ? (0, s.jsx)(i.Select, {
                          className: E.platformSelectorPrimary,
                          isSelected: () => !1,
                          options: h,
                          placeholder:
                            f.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                          renderOptionLabel: S,
                          select: Y,
                          serialize: (e) => {
                            switch (e) {
                              case g.cd.DESKTOP:
                                return f.Z.Messages
                                  .QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                              case g.cd.CONSOLE:
                                return f.Z.Messages
                                  .QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                            }
                          },
                        })
                      : (0, x.$J)(N) && !M && H !== m.LI.DESKTOP
                        ? I
                          ? (0, s.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              className: E.button,
                              onClick: null != J ? J : void 0,
                              children: X,
                            })
                          : (0, s.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              onClick: ee,
                              disabled: $,
                              className: E.button,
                              children: (0, s.jsxs)("div", {
                                className: E.ctaInner,
                                children: [
                                  B.render(),
                                  f.Z.Messages
                                    .QUESTS_MICROHPONE_UNIT_BUTTON_CTA,
                                ],
                              }),
                            })
                        : (0, s.jsx)(i.Button, {
                            color: i.ButtonColors.PRIMARY,
                            disabled: !0,
                            className: E.button,
                            children: f.Z.Messages.QUEST_ACCEPTED,
                          }))
                  : q &&
                    !w &&
                    (en = (0, s.jsx)(i.Button, {
                      submitting: L,
                      color: i.ButtonColors.BRAND,
                      onClick: null != J ? J : void 0,
                      className: E.button,
                      children: X,
                    }))
              : (en = (0, s.jsx)(i.Button, {
                  color: i.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: E.button,
                  children: f.Z.Messages.QUESTS_ENDED_ON_DATE.format({
                    expiryDate: O,
                  }),
                })),
        null == en)
          ? null
          : (0, s.jsxs)("div", {
              className: E.container,
              children: [
                en,
                K &&
                  (0, s.jsx)(C.U, {
                    onSelect: Y,
                    quest: N,
                    questContent: m.jn.ACTIVITY_PANEL,
                    children: (e) =>
                      (0, s.jsx)(i.Button, {
                        className: a()(E.button, E.platformSelectorSecondary),
                        color: i.ButtonColors.PRIMARY,
                        ...e,
                        children: (0, s.jsxs)("div", {
                          className: E.platformSelectorSecondaryContent,
                          children: [
                            (function (e) {
                              switch (e) {
                                case m.LI.DESKTOP:
                                  return (0, s.jsx)(i.ScreenIcon, {
                                    color: "currentColor",
                                  });
                                case m.LI.CONSOLE:
                                  return (0, s.jsx)(i.GameControllerIcon, {
                                    color: "currentColor",
                                  });
                                default:
                                  return null;
                              }
                            })(H),
                            (0, s.jsx)(i.ChevronSmallDownIcon, {
                              className: E.platformSelectorSecondaryChevron,
                              color: "currentColor",
                            }),
                          ],
                        }),
                      }),
                  }),
              ],
            });
      }
    },
    43779: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      });
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(526629),
        i = n(442837),
        c = n(481060),
        d = n(393238),
        u = n(607070),
        p = n(113434),
        m = n(566078),
        x = n(472144),
        _ = n(644646),
        C = n(69439),
        g = n(46140),
        f = n(642145),
        E = n(689938),
        h = n(684688);
      let S = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
      function T(e) {
        var t, n, r;
        let {
            quest: T,
            questContent: N,
            isHovering: v,
            contentPosition: j,
            rowIndex: A,
            onReceiveErrorHints: R,
          } = e,
          b = m.r.build(T.config),
          B = b.defaultReward.messages.name,
          I = b.defaultReward.messages.nameWithArticle,
          M =
            (null === (t = T.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { ref: O, scrollHeight: y } = (0, d.Z)(),
          L = 104 !== y,
          { expansionSpring: w } = (0, c.useSpring)({
            expansionSpring: v ? 1 : 0,
            config: { ...f.Y, clamp: !0 },
          }),
          k =
            (null === (n = T.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          U =
            (null === (r = T.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) != null,
          { completedRatio: Z, completedRatioDisplay: q } = (0, p.I)(T),
          P = (0, p.Bd)(T),
          Q = o.useCallback(
            (e) =>
              (0, s.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: "text-normal",
                tag: "span",
                className: h.header,
                children: e,
              }),
            [],
          ),
          D = o.useMemo(
            () =>
              U
                ? Q(B)
                : E.Z.Messages.QUESTS_CLAIM_REWARD_HOOK.format({
                    rewardWithArticleHook: () => Q(I),
                  }),
            [B, I, U, Q],
          ),
          W = o.useMemo(() => {
            if (null != P)
              return (0, s.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: a()(h.description),
                children: P,
              });
          }, [P]),
          H = (0, i.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, s.jsxs)("div", {
          className: a()(h.container),
          children: [
            (0, s.jsxs)(l.animated.div, {
              style: {
                maxHeight: w.to([0, 1], [104, (null != y ? y : 0) + 12]),
              },
              className: a()(h.rewardDescriptionContainer),
              children: [
                (0, s.jsxs)("div", {
                  className: h.assetWrapper,
                  children: [
                    !U &&
                      k &&
                      (0, s.jsx)("div", { className: h.completionAnimation }),
                    M && !U
                      ? (0, s.jsxs)("div", {
                          className: h.progressWrapper,
                          children: [
                            k &&
                              (0, s.jsx)(c.LottieAnimation, {
                                importData: S,
                                className: h.confetti,
                                loop: !1,
                                autoplay: !1,
                                shouldAnimate: !H,
                              }),
                            (0, s.jsx)(x.Z, {
                              quest: T,
                              size: 76,
                              percentComplete: Z,
                              percentCompleteText: v ? q : void 0,
                              children: (0, s.jsx)("div", {
                                className: h.circularRewardTileWrapper,
                                children: (0, s.jsx)(_.Z, {
                                  quest: T,
                                  questContent: N,
                                  className: h.circularQuestRewardTileAsset,
                                  location: g.dr.QUEST_HOME_DESKTOP,
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, s.jsx)(_.Z, {
                          quest: T,
                          autoplay: v,
                          questContent: N,
                          className: h.questRewardTileAsset,
                          location: g.dr.QUEST_HOME_DESKTOP,
                        }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  ref: O,
                  className: a()(h.textContainer, { [h.justifyCenter]: !L }),
                  children: [
                    (0, s.jsx)(c.Heading, {
                      variant: "eyebrow",
                      color: "text-brand",
                      className: h.questName,
                      children: E.Z.Messages.QUEST.format({
                        questName: T.config.messages.questName,
                      }),
                    }),
                    (0, s.jsx)(c.Text, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: h.header,
                      children: D,
                    }),
                    W,
                  ],
                }),
                L &&
                  (0, s.jsx)(l.animated.div, {
                    style: { opacity: w.to([0, 1], [1, 0]) },
                    className: h.textOverflowBlur,
                  }),
              ],
            }),
            (0, s.jsx)(C.Z, {
              quest: T,
              location: N,
              contentPosition: j,
              rowIndex: A,
              onReceiveErrorHints: R,
            }),
          ],
        });
      }
    },
    284851: function (e, t, n) {
      n.d(t, {
        U: function () {
          return i;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(481060),
        r = n(46140),
        a = n(689938);
      function l(e) {
        let { onClose: t, onSelect: n, quest: l } = e;
        return (0, s.jsx)(o.Menu, {
          variant: "fixed",
          onSelect: t,
          navId: "quest-home-platform-select-".concat(l.id),
          "aria-label": a.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: t,
          children: (0, s.jsxs)(
            o.MenuGroup,
            {
              children: [
                (0, s.jsx)(o.MenuItem, {
                  id: "desktop",
                  label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                  action: () => n(r.cd.DESKTOP),
                  icon: o.ScreenIcon,
                }),
                (0, s.jsx)(o.MenuItem, {
                  id: "console",
                  label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                  action: () => n(r.cd.CONSOLE),
                  icon: o.GameControllerIcon,
                }),
              ],
            },
            "actions",
          ),
        });
      }
      function i(e) {
        let { children: t, ...n } = e;
        return (0, s.jsx)(o.Popout, {
          position: "bottom",
          align: "right",
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(l, { ...n, onClose: t });
          },
          children: t,
        });
      }
    },
    181284: function (e, t, n) {
      e.exports = {
        connectConsoleButton: "connectConsoleButton_a22da9",
        playstationButtonConnected: "playstationButtonConnected_a22da9",
        xboxButtonConnected: "xboxButtonConnected_a22da9",
        connectConsoleButtonWrapper: "connectConsoleButtonWrapper_a22da9",
        connectConsoleButtonUnconnected:
          "connectConsoleButtonUnconnected_a22da9",
        inlineConsoleConnectionDetails: "inlineConsoleConnectionDetails_a22da9",
        inlineConsoleConnectionDetailsIcons:
          "inlineConsoleConnectionDetailsIcons_a22da9",
        consoleIconDivider: "consoleIconDivider_a22da9",
        inlineConsoleConnectionDetailsUpper:
          "inlineConsoleConnectionDetailsUpper_a22da9",
        inlineConsoleConnectionDetailsLower:
          "inlineConsoleConnectionDetailsLower_a22da9",
        inlineConsoleConnectionDetailsLowerItem:
          "inlineConsoleConnectionDetailsLowerItem_a22da9",
        marginTop4px: "marginTop4px_a22da9",
        showConnectionsButton: "showConnectionsButton_a22da9",
      };
    },
    604330: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c721cc",
        wrapperInvisible: "wrapperInvisible_c721cc",
        wrapperVisible: "wrapperVisible_c721cc",
        contentWrapper: "contentWrapper_c721cc",
        contentWrapperExpanded: "contentWrapperExpanded_c721cc",
        contentWrapperAccepted: "contentWrapperAccepted_c721cc",
        mask: "mask_c721cc",
      };
    },
    203338: function (e, t, n) {
      e.exports = { content: "content_fb2cb3", overlay: "overlay_fb2cb3" };
    },
    404846: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_efa999",
        opaqueExpandedBackground: "opaqueExpandedBackground_efa999",
        rewardHighlightWrapper: "rewardHighlightWrapper_efa999",
        interactable: "interactable_efa999",
        wreathIcon: "wreathIcon_efa999",
        questAvailable: "questAvailable_efa999",
        questAvailableText: "questAvailableText_efa999",
        submenuWrapper: "submenuWrapper_efa999",
        submenuIcon: "submenuIcon_efa999",
        white: "white_efa999",
        promotedBadgeWrapper: "promotedBadgeWrapper_efa999",
        logo: "logo_efa999",
        clickable: "clickable_efa999",
        promotedBadge: "promotedBadge_efa999",
        promotedBadgeIcon: "promotedBadgeIcon_efa999",
        background: "background_efa999",
        backgroundAnimation: "backgroundAnimation_efa999",
        backgroundWrapper: "backgroundWrapper_efa999",
      };
    },
    128220: function (e, t, n) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    808326: function (e, t, n) {
      e.exports = {
        outer: "outer_df6b25",
        progressBar: "progressBar_df6b25",
        progress: "progress_df6b25",
        inner: "inner_df6b25",
        coverContent: "coverContent_df6b25",
        progressTextWrapper: "progressTextWrapper_df6b25",
        progressTextOverlay: "progressTextOverlay_df6b25",
        progressText: "progressText_df6b25",
      };
    },
    435616: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_f4e40b",
        background: "background_f4e40b",
        borders: "borders_f4e40b",
        bordersTopLeft: "bordersTopLeft_f4e40b",
        bordersBottom: "bordersBottom_f4e40b",
        confettiWrapper: "confettiWrapper_f4e40b",
        confetti: "confetti_f4e40b",
      };
    },
    161548: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_f21e08",
        stepsWrapper: "stepsWrapper_f21e08",
        microphoneUnit: "microphoneUnit_f21e08",
        microphoneUnitHeader: "microphoneUnitHeader_f21e08",
        warningCircle: "warningCircle_f21e08",
        errorCircle: "errorCircle_f21e08",
        microphoneUnitRefreshIconWrapper:
          "microphoneUnitRefreshIconWrapper_f21e08",
        disabled: "disabled_f21e08",
        microphoneUnitBodyText: "microphoneUnitBodyText_f21e08",
        headingWrapper: "headingWrapper_f21e08",
        heading: "heading_f21e08",
        stepWrapper: "stepWrapper_f21e08",
        stepContent: "stepContent_f21e08",
        stepWrapperWithNextStep: "stepWrapperWithNextStep_f21e08",
        stepIndicator: "stepIndicator_f21e08",
        stepIconWrapper: "stepIconWrapper_f21e08",
        stepWrapperComplete: "stepWrapperComplete_f21e08",
        stepConnector: "stepConnector_f21e08",
        stepIcon: "stepIcon_f21e08",
        opacity_50: "opacity_50_f21e08",
      };
    },
    183004: function (e, t, n) {
      e.exports = {
        contentCollapsed: "contentCollapsed_c3427e",
        contentCollapsedWrapper: "contentCollapsedWrapper_c3427e",
        contentCollapsedAccepted: "contentCollapsedAccepted_c3427e",
        contentCollapsedExpanded: "contentCollapsedExpanded_c3427e",
        questProgressWrapper: "questProgressWrapper_c3427e",
        questProgressRewardTile: "questProgressRewardTile_c3427e",
        questProgressHint: "questProgressHint_c3427e",
        questProgressCopy: "questProgressCopy_c3427e",
      };
    },
    160443: function (e, t, n) {
      e.exports = {
        contentExpanded: "contentExpanded_e23249",
        contentExpandedAccepted: "contentExpandedAccepted_e23249",
        questPromoContent: "questPromoContent_e23249",
        questAcceptedHeader: "questAcceptedHeader_e23249",
        divider: "divider_e23249",
        details: "details_e23249",
        submenuWrapper: "submenuWrapper_e23249",
        questAcceptedContent: "questAcceptedContent_e23249",
        submenuIcon: "submenuIcon_e23249",
        interactiveNormal: "interactiveNormal_e23249",
        heroAssetWrapper: "heroAssetWrapper_e23249",
        legibilityGradient: "legibilityGradient_e23249",
        heroAsset: "heroAsset_e23249",
        heroAssetTint: "heroAssetTint_e23249",
        heroAssetDarken: "heroAssetDarken_e23249",
        cta: "cta_e23249",
        contentInteractable: "contentInteractable_e23249",
        headerText: "headerText_e23249",
        title: "title_e23249",
        rewardTile: "rewardTile_e23249",
        hiddenRewardTile: "hiddenRewardTile_e23249",
        description: "description_e23249",
        flex: "flex_e23249",
        postEnrollmentBackground: "postEnrollmentBackground_e23249",
        postEnrollmentBackgroundCollapsed:
          "postEnrollmentBackgroundCollapsed_e23249",
        postEnrollmentBackgroundExpanded:
          "postEnrollmentBackgroundExpanded_e23249",
      };
    },
    587311: function (e, t, n) {
      e.exports = {
        card: "card_f8746f",
        header: "header_f8746f",
        icon: "icon_f8746f",
        warningBody: "warningBody_f8746f",
      };
    },
    437567: function (e, t, n) {
      e.exports = {
        rewardTileContainer: "rewardTileContainer_eb16c5",
        rewardTileSpacer: "rewardTileSpacer_eb16c5",
        rewardHighlightLogoCTA: "rewardHighlightLogoCTA_eb16c5",
        partnerBranding: "partnerBranding_eb16c5",
        rewardHighlightCTA: "rewardHighlightCTA_eb16c5",
      };
    },
    597916: function (e, t, n) {
      e.exports = {
        buttons: "buttons_c5505e",
        button: "button_c5505e",
        buttonInner: "buttonInner_c5505e",
      };
    },
    784145: function (e, t, n) {
      e.exports = { content: "content_dac7ec" };
    },
    865871: function (e, t, n) {
      e.exports = {
        lottieAnimation: "lottieAnimation_ff9919",
        backgroundFallback: "backgroundFallback_ff9919",
        lottieAnimationBackgroundWrapper:
          "lottieAnimationBackgroundWrapper_ff9919",
        lottieAnimationBackground: "lottieAnimationBackground_ff9919",
      };
    },
    968387: function (e, t, n) {
      e.exports = {
        contentCollapsed: "contentCollapsed_c6d7dd",
        contentCollapsedWrapper: "contentCollapsedWrapper_c6d7dd",
        contentCollapsedAccepted: "contentCollapsedAccepted_c6d7dd",
        contentCollapsedExpanded: "contentCollapsedExpanded_c6d7dd",
        brandingWrapper: "brandingWrapper_c6d7dd",
        partnerBranding: "partnerBranding_c6d7dd",
        questName: "questName_c6d7dd",
        questProgressWrapper: "questProgressWrapper_c6d7dd",
        questProgressRewardTile: "questProgressRewardTile_c6d7dd",
        questProgressBar: "questProgressBar_c6d7dd",
        questProgressHint: "questProgressHint_c6d7dd",
      };
    },
    609706: function (e, t, n) {
      e.exports = {
        contentExpanded: "contentExpanded_d38958",
        contentInteractable: "contentInteractable_d38958",
        questPromoContent: "questPromoContent_d38958",
        utils: "utils_d38958",
        questAcceptedContent: "questAcceptedContent_d38958",
        details: "details_d38958",
        submenuWrapper: "submenuWrapper_d38958",
        submenuIcon: "submenuIcon_d38958",
        heroAssetWrapper: "heroAssetWrapper_d38958",
        heroAsset: "heroAsset_d38958",
        cta: "cta_d38958",
        ctaClaimReward: "ctaClaimReward_d38958",
        title: "title_d38958",
        description: "description_d38958",
        rewardTile: "rewardTile_d38958",
        questAcceptedContentHeading: "questAcceptedContentHeading_d38958",
        questProgressRewardTile: "questProgressRewardTile_d38958",
        questAcceptedContentCopySubheading:
          "questAcceptedContentCopySubheading_d38958",
      };
    },
    24444: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_b410a4",
        modalHeader: "modalHeader_b410a4",
        modalTop: "modalTop_b410a4",
        iconFrame: "iconFrame_b410a4",
        icon: "icon_b410a4",
        closeBtn: "closeBtn_b410a4",
        modalContent: "modalContent_b410a4",
        contentHeader: "contentHeader_b410a4",
        refreshWrapper: "refreshWrapper_b410a4",
        disabled: "disabled_b410a4",
        upperBodyText: "upperBodyText_b410a4",
        footer: "footer_b410a4",
        colorTransition: "colorTransition_b410a4",
        footerCloseButton: "footerCloseButton_b410a4",
        accountsWrapper: "accountsWrapper_b410a4",
        connectionRow: "connectionRow_b410a4",
        connectionRowHeader: "connectionRowHeader_b410a4",
        connectionRowHeaderError: "connectionRowHeaderError_b410a4",
        connectionRowHeaderContent: "connectionRowHeaderContent_b410a4",
        success: "success_b410a4",
        error: "error_b410a4",
        gameTile: "gameTile_b410a4",
        errorRow: "errorRow_b410a4",
        errorsContainer: "errorsContainer_b410a4",
        tooltip: "tooltip_b410a4",
      };
    },
    968470: function (e, t, n) {
      e.exports = { container: "container_a97111" };
    },
    411702: function (e, t, n) {
      e.exports = {
        container: "container_f2bc91",
        positionContentOverBackground: "positionContentOverBackground_f2bc91",
        contents: "contents_f2bc91",
        heroAssetWrapper: "heroAssetWrapper_f2bc91",
        heroAsset: "heroAsset_f2bc91",
        overlay: "overlay_f2bc91",
        darkThemeGradient: "darkThemeGradient_f2bc91",
        lightThemeGradient: "lightThemeGradient_f2bc91",
        topRow: "topRow_f2bc91",
        pill: "pill_f2bc91",
        eyebrowText: "eyebrowText_f2bc91",
        submenuWrapper: "submenuWrapper_f2bc91",
        submenuIcon: "submenuIcon_f2bc91",
        partnerBranding: "partnerBranding_f2bc91",
        bottomRow: "bottomRow_f2bc91",
        hints: "hints_f2bc91",
        hintsContainer: "hintsContainer_f2bc91",
      };
    },
    632946: function (e, t, n) {
      e.exports = {
        container: "container_ebf06d",
        ctaInner: "ctaInner_ebf06d",
        button: "button_ebf06d",
        platformSelectorPrimaryLabel: "platformSelectorPrimaryLabel_ebf06d",
        platformSelectorPrimary: "platformSelectorPrimary_ebf06d",
        platformSelectorSecondary: "platformSelectorSecondary_ebf06d",
        platformSelectorSecondaryContent:
          "platformSelectorSecondaryContent_ebf06d",
        platformSelectorSecondaryChevron:
          "platformSelectorSecondaryChevron_ebf06d",
      };
    },
    684688: function (e, t, n) {
      e.exports = {
        container: "container_c2d7e2",
        rewardDescriptionContainer: "rewardDescriptionContainer_c2d7e2",
        confetti: "confetti_c2d7e2",
        completionAnimation: "completionAnimation_c2d7e2",
        progressWrapper: "progressWrapper_c2d7e2",
        circularRewardTileWrapper: "circularRewardTileWrapper_c2d7e2",
        circularQuestRewardTileAsset: "circularQuestRewardTileAsset_c2d7e2",
        questRewardTileAsset: "questRewardTileAsset_c2d7e2",
        assetWrapper: "assetWrapper_c2d7e2",
        textContainer: "textContainer_c2d7e2",
        justifyCenter: "justifyCenter_c2d7e2",
        questName: "questName_c2d7e2",
        header: "header_c2d7e2",
        description: "description_c2d7e2",
        textOverflowBlur: "textOverflowBlur_c2d7e2",
      };
    },
  },
]);
//# sourceMappingURL=ee7dae0c488150852b3d.js.map
