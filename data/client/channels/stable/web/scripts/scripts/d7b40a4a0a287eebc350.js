"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54535"],
  {
    197857: function (e) {
      e.exports = "/assets/988c17fdd72ce3646bcc.svg";
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
        x = n(796111),
        m = n(46140),
        g = n(981631),
        _ = n(689938),
        C = n(181284);
      function f(e) {
        let { quest: t, isConnected: n, consoleType: o } = e;
        return (0, s.jsx)(i.Clickable, {
          className: C.connectConsoleButtonWrapper,
          onClick: () => {
            (0, u._3)({
              questId: t.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.CONNECT_CONSOLE,
            }),
              (0, d.Z)({ platformType: o });
          },
          children:
            o === g.ABu.PLAYSTATION
              ? (0, s.jsx)(a.T, {
                  colorClass: r()(
                    C.connectConsoleButton,
                    n
                      ? C.playstationButtonConnected
                      : C.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                })
              : (0, s.jsx)(l.M, {
                  colorClass: r()(
                    C.connectConsoleButton,
                    n
                      ? C.xboxButtonConnected
                      : C.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                }),
        });
      }
      function h(e) {
        let { text: t, quest: n } = e;
        return (0, s.jsx)(i.Clickable, {
          className: C.showConnectionsButton,
          onClick: () => {
            (0, u._3)({
              questId: n.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
            }),
              c.Z.open(g.oAB.CONNECTIONS);
          },
          children: (0, s.jsx)(i.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
          }),
        });
      }
      function E(e) {
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
          className: C.inlineConsoleConnectionDetails,
          children: [
            (0, s.jsxs)("div", {
              className: C.inlineConsoleConnectionDetailsUpper,
              children: [
                (0, s.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-xxs/normal",
                  children: c
                    ? _.Z.Messages.QUESTS_CONNECTED
                    : _.Z.Messages.QUESTS_SELECT_TO_START,
                }),
                (0, s.jsxs)("div", {
                  className: C.inlineConsoleConnectionDetailsIcons,
                  children: [
                    (0, s.jsx)(f, {
                      consoleType: g.ABu.PLAYSTATION,
                      isConnected: u,
                      quest: t,
                    }),
                    (0, s.jsx)("div", { className: C.consoleIconDivider }),
                    (0, s.jsx)(f, {
                      consoleType: g.ABu.XBOX,
                      isConnected: d,
                      quest: t,
                    }),
                  ],
                }),
              ],
            }),
            c &&
              (0, s.jsxs)("div", {
                className: C.inlineConsoleConnectionDetailsLower,
                children: [
                  l.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: r()(
                          C.inlineConsoleConnectionDetailsLowerItem,
                          t > 0 ? C.marginTop4px : void 0,
                        ),
                        children: [
                          (0, s.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/normal",
                            children:
                              e.type === g.ABu.XBOX
                                ? _.Z.Messages.QUESTS_XBOX_ID
                                : _.Z.Messages.QUESTS_PSN_ONLINE_ID_V2,
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
                    (0, s.jsx)(h, {
                      text: _.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
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
          ? (0, s.jsx)(h, {
              text: _.Z.Messages.QUESTS_SHOW_CONNECTIONS,
              quest: n,
            })
          : null;
      }
      function T(e) {
        let t = (0, x.P)({ location: m.dr.QUESTS_BAR });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children:
                _.Z.Messages
                  .QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
            }),
            t ? (0, s.jsx)(E, { ...e }) : (0, s.jsx)(S, { ...e }),
          ],
        });
      }
    },
    693900: function (e, t, n) {
      n.d(t, {
        n: function () {
          return x;
        },
        t: function () {
          return p;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        r = n(56217),
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
      function x(e) {
        var t;
        let { children: n } = e,
          { springConfig: p, isExpanded: x } = o.useContext(u),
          m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
          { ref: g, height: _ = null } = (0, i.Z)(),
          C = null !== (t = (0, c.Z)(_)) && void 0 !== t ? t : null,
          [{ height: f }, h] = (0, l.useSpring)(() => ({
            from: { height: 0 },
            config: p,
          }));
        return (
          o.useLayoutEffect(() => {
            null !== _ && h({ height: _, immediate: !x || m || null === C });
          }, [_, h, x, m, C]),
          (0, s.jsx)(r.animated.div, {
            style: { height: null === C ? "auto" : f, overflow: "hidden" },
            children: (0, s.jsx)("div", {
              style: { overflow: "hidden" },
              ref: g,
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
            isExpanded: x,
            isExpansionAnimationComplete: m,
            onCtxMenuOpened: g,
            onCtxMenuClosed: _,
            onCtxMenuSelection: C,
            quest: f,
            useReducedMotion: h,
            collapsedHeight: E,
          } = e,
          S = o.useRef(null),
          T = o.useRef(null),
          A =
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
              isExpanded: x,
              isExpansionAnimationComplete: m,
              quest: f,
              useReducedMotion: h,
              taskDetails: v,
            }),
            (0, s.jsx)(c.Z, {
              expansionSpring: p,
              className: u.content,
              collapsedHeight: E,
              onCtxMenuOpen: g,
              onCtxMenuClose: _,
              onCtxMenuSelect: C,
              overlayRef: T,
              isExpanded: x,
              isExpansionAnimationComplete: m,
              quest: f,
              useReducedMotion: h,
              ref: n,
              taskDetails: v,
              children: (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(d.Z, { expansionSpring: p, isExpanded: x }),
                  !A &&
                    (0, s.jsx)(a.Z, {
                      quest: f,
                      expansionSpring: p,
                      useReducedMotion: h,
                      isExpanded: x,
                      isExpansionAnimationComplete: m,
                      onCtxMenuOpen: g,
                      onCtxMenuClose: _,
                      onCtxMenuSelect: C,
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
        l = n(56217),
        i = n(481060),
        c = n(617136),
        d = n(497505),
        u = n(918701),
        p = n(302245),
        x = n(685613),
        m = n(670638),
        g = n(341907),
        _ = n(303385),
        C = n(788284),
        f = n(46140),
        h = n(689938),
        E = n(404846);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: r,
            onCtxMenuSelect: S,
            onCtxMenuOpen: T,
            onCtxMenuClose: A,
            useReducedMotion: v,
            isExpanded: N,
            isExpansionAnimationComplete: j,
          } = e,
          B = o.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          R = o.useCallback(() => {
            (0, u.FE)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
            });
          }, [t]),
          b = N && j,
          y = (0, p.vI)(t, f.dr.QUESTS_BAR, !0),
          I = !1 === (0, u.KM)(t),
          M = (0, s.jsx)(i.Clickable, {
            onClick: I ? R : () => {},
            className: a()({ [E.logo]: b, [E.clickable]: I }),
            children: (0, s.jsx)(x.Z, { quest: t, withGameTile: !1 }),
          });
        return (0, s.jsxs)(l.animated.div, {
          className: a()(E.wrapper, {
            [E.interactable]: b,
            [E.rewardHighlightWrapper]: y,
          }),
          style: {
            transform: (0, l.to)(
              [r.to({ range: [0, 1], output: [y ? 8 : 4, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, s.jsx)(l.animated.div, {
              className: E.opaqueExpandedBackground,
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
              className: E.backgroundWrapper,
              style: {
                opacity: r.to({ range: [0, 1], output: [0.5, 0] }),
                borderBottomLeftRadius: r.to({ range: [0, 1], output: [0, 8] }),
                borderBottomRightRadius: r.to({
                  range: [0, 1],
                  output: [0, 8],
                }),
              },
              children: (0, s.jsx)(C.Z, {
                className: E.background,
                animationClassName: E.backgroundAnimation,
                quest: t,
                useReducedMotion: v,
              }),
            }),
            y
              ? (0, s.jsx)(_.Z, {
                  quest: t,
                  expansionSpring: r,
                  isFullyExpanded: b,
                  partnerBranding: M,
                  useReducedMotion: v,
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.animated.img, {
                      alt: "",
                      className: E.wreathIcon,
                      style: {
                        opacity: r.to({ range: [0, 1], output: [1, 0] }),
                      },
                      src: n(858595),
                    }),
                    (0, s.jsx)(l.animated.div, {
                      style: {
                        opacity: r.to({
                          range: [0, 1],
                          output: [1, b ? 1 : 0.8],
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
                      children: M,
                    }),
                    (0, s.jsx)(l.animated.div, {
                      className: E.questAvailable,
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
                        className: E.questAvailableText,
                        children: h.Z.Messages.QUEST_AVAILABLE,
                      }),
                    }),
                  ],
                }),
            (0, s.jsxs)(l.animated.div, {
              className: E.promotedBadgeWrapper,
              style: { opacity: r.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, s.jsxs)(i.Clickable, {
                  className: E.promotedBadge,
                  onClick: B,
                  children: [
                    (0, s.jsx)(i.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: h.Z.Messages.QUESTS_PROMOTED,
                    }),
                    (0, s.jsx)(i.CircleQuestionIcon, {
                      color: i.tokens.colors.WHITE,
                      className: E.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, s.jsx)(m.r, {
                  onOpen: T,
                  onClose: A,
                  onSelect: S,
                  questContent: d.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, s.jsx)(i.Clickable, {
                      ...e,
                      className: E.submenuWrapper,
                      "aria-label": h.Z.Messages.ACTIONS,
                      children: (0, s.jsx)(i.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: a()(E.submenuIcon, E.white),
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
        a = n(56217),
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
              recalculateAnimationPositions: x,
              registerComponent: m,
              unregisterComponent: g,
              expansionSpring: _,
              mountPoints: C,
            } = o.useContext(c),
            f = o.useRef(null),
            h = o.useRef(null),
            E = o.useRef();
          o.useEffect(() => {
            x();
          }, [x]),
            o.useLayoutEffect(() => {
              let e = f.current;
              return (
                null != e && m(e, d, u),
                () => {
                  null != e && g(d, u);
                }
              );
            }, [d, u, m, g]);
          let S = o.useCallback(
            (e) => {
              let { height: t } = e;
              E.current !== t && (x(), (E.current = t));
            },
            [x],
          );
          (0, l.P)(f, S);
          let T = null === (n = C.get(d)) || void 0 === n ? void 0 : n.current,
            A = null;
          return (
            null == T
              ? (A = null)
              : p && null != _
                ? (A = (0, s.jsxs)(s.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, r.createPortal)(
                          (0, s.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: _.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: i(h),
                          }),
                          T,
                        ),
                      "expanded" === u &&
                        (0, r.createPortal)(
                          (0, s.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: _.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: i(h),
                          }),
                          T,
                        ),
                    ],
                  }))
                : "collapsed" === u && (A = (0, r.createPortal)(i(h), T)),
            (0, s.jsxs)("div", {
              style: {
                opacity: (null == A && "collapsed" === u) || null == T ? 1 : 0,
              },
              ref: t,
              children: [i(f), A],
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
            [x, m] = o.useState(() => new Map()),
            g = o.useCallback((e, t, n) => {
              d((s) => {
                var o;
                let r =
                  null !== (o = s[t]) && void 0 !== o
                    ? o
                    : { expanded: null, collapsed: null };
                return { ...s, [t]: { ...r, [n]: e } };
              }),
                m((e) => {
                  let n = new Map(e);
                  return n.set(t, o.createRef()), n;
                });
            }, []),
            _ = o.useCallback((e, t) => {
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
                  m((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
            }, []),
            C = o.useCallback(() => {
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
                  x = d.top - u.top,
                  m = a.left - c.left + i.Li,
                  g = d.left - u.left,
                  _ = -a.right + c.right + i.Li,
                  C = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: g,
                  expandedLeft: m,
                  collapsedRight: C,
                  expandedRight: _,
                  collapsedTop: x,
                  expandedTop: p,
                  width: a.width,
                });
              }
              p(e);
            }, [l, n, r, p]);
          return (0, s.jsx)(c.Provider, {
            value: {
              registerComponent: g,
              unregisterComponent: _,
              animatedComponents: l,
              expandedContentRef: n,
              collapsedContentRef: r,
              recalculateAnimationPositions: C,
              animatedComponentProps: u,
              expansionSpring: a,
              mountPoints: x,
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
        x = n(128220);
      let m = (e) => {
          let { quest: t } = e;
          return (0, i.KM)(t)
            ? (0, s.jsx)(o.Button, {
                className: x.cta,
                size: o.Button.Sizes.SMALL,
                onClick: () =>
                  (0, r.Z)(
                    "https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord",
                  ),
                children: p.Z.Messages.QUESTS_LEARN_MORE_V2,
              })
            : (0, s.jsx)(o.Button, {
                className: x.cta,
                size: o.Button.Sizes.SMALL,
                onClick: () =>
                  (0, i.FE)(t, {
                    content: l.jn.QUEST_BAR_V2,
                    ctaContent: a.jZ.OPEN_GAME_LINK,
                  }),
                children: p.Z.Messages.QUESTS_GET_THIS_GAME,
              });
        },
        g = (e) => {
          let { quest: t } = e;
          return (0, s.jsx)(o.Button, {
            fullWidth: !0,
            className: x.cta,
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
        _ = (e) => {
          let { quest: t, useReducedMotion: n, isExpanded: r } = e,
            a = (0, d.hf)({ quest: t, location: l.jn.QUEST_BAR_V2 });
          return (0, s.jsx)(o.ShinyButton, {
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            onClick: a,
            pauseAnimation: n || !r,
            className: x.cta,
            buttonShineClassName: x.shine,
            children: p.Z.Messages.QUESTS_CLAIM_REWARD,
          });
        },
        C = (e) => {
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
            x =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            C = (0, c.P)({ location: u.dr.QUESTS_BAR });
          if (x)
            return (0, s.jsx)(_, {
              quest: n,
              useReducedMotion: o,
              isExpanded: r,
            });
          if (p === l.LI.CONSOLE && a && !C) return (0, s.jsx)(g, { quest: n });
          if (p !== l.LI.SELECT && !i && !d) return (0, s.jsx)(m, { quest: n });
          return null;
        };
      function f(e) {
        return (0, s.jsxs)("div", {
          className: x.ctaButtons,
          children: [
            e.showBackButton &&
              (0, s.jsx)(o.Button, {
                className: x.backButton,
                innerClassName: x.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, s.jsx)(o.ChevronSmallLeftIcon, {
                  className: x.backIcon,
                }),
              }),
            (0, s.jsx)(C, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        r = n(120356),
        a = n.n(r),
        l = n(56217),
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
            glowBlur: x = 0.4,
            percentCompleteText: m,
            children: g,
          } = e,
          _ = (0, c.EK)(n, o > 0),
          C = r / 2,
          f = r / 2 - p / 2,
          h = 2 * Math.PI * f,
          E = h - o * h,
          S = {
            strokeDasharray: "".concat(h, " ").concat(h),
            strokeDashoffset: E,
          },
          T = {
            strokeDasharray: "".concat(h, " ").concat(h),
            strokeDashoffset: -o * h,
          },
          A = { boxShadow: "0 0 30px 0px ".concat(_.glow) },
          { progressTextAnimation: v } = (0, i.useSpring)({
            progressTextAnimation: null != m && 1 !== o ? 1 : 0,
            config: d.Y,
          });
        return (0, s.jsxs)("div", {
          className: u.outer,
          ref: t,
          children: [
            (0, s.jsxs)("div", {
              className: u.inner,
              style: A,
              children: [
                g,
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
                      children: m,
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
                          stdDeviation: x,
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
                          stopColor: _.backgroundTop,
                        }),
                        (0, s.jsx)("stop", {
                          offset: "100%",
                          stopColor: _.backgroundBottom,
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
                  cx: C,
                  cy: C,
                  stroke: "url(#linear)",
                  style: T,
                }),
                (0, s.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: f,
                  cx: C,
                  cy: C,
                  stroke: _.foreground,
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
        c = n(56217),
        d = n(442837),
        u = n(110924),
        p = n(607070),
        x = n(819640),
        m = n(569379),
        g = n(675654),
        _ = n(435616),
        C = n(197857);
      let f = ["#51BC9D"];
      t.Z = (e) => {
        var t;
        let {
            expansionSpring: n,
            overlayRef: r,
            quest: h,
            progressBarRef: E,
            isExpanded: S,
          } = e,
          { completionSpring: T, startCompletionAnimation: A } = (0, m.GX)(),
          v =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          N = o.useRef(!1),
          j = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          B = o.useRef(null),
          R = (0, d.e7)([x.Z], () => x.Z.hasLayers()),
          b = (0, u.Z)(R),
          [y, I] = o.useState(null),
          [M, k] = o.useState(null),
          O = o.useRef(new l.qA({ gravity: 0, wind: 0 })),
          U = (0, l.uR)(y, M),
          L = o.useCallback(() => {
            if (j) return;
            let e = E.current,
              t = B.current;
            if (null != t && null != e && U.isReady) {
              var n, s, o, r;
              let { x: a, y: l } = e.getBoundingClientRect(),
                { x: i, y: c } = t.getBoundingClientRect();
              U.createMultipleConfetti(
                ((n = a - i),
                (s = l - c),
                (o = e.clientHeight),
                (r = e.clientWidth),
                {
                  ...g.We,
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
          }, [E, B, U, j]),
          Z = (0, u.Z)(S);
        return (o.useEffect(() => {
          v && S && !Z && (A(), L());
        }, [S, v, A, L, Z]),
        o.useEffect(() => {
          v &&
            !R &&
            b &&
            setTimeout(() => {
              A(), L();
            }, 200);
        }, [v, b, R, A, L]),
        o.useEffect(() => {
          if (!!U.isReady) !N.current && v && (A(), L()), (N.current = v);
        }, [v, N, L, A, U]),
        j)
          ? null
          : (0, s.jsxs)("div", {
              className: _.wrapper,
              "aria-hidden": "true",
              ref: B,
              children: [
                (0, s.jsx)(c.animated.div, {
                  className: _.background,
                  style: { opacity: T },
                }),
                (0, s.jsx)(c.animated.div, {
                  className: a()(_.borders, _.bordersTopLeft),
                  style: { opacity: T },
                }),
                (0, s.jsxs)(c.animated.div, {
                  className: _.confettiWrapper,
                  style: {
                    transform: n
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, s.jsx)(l.O_, {
                      ref: I,
                      className: _.confetti,
                      environment: O.current,
                    }),
                    (0, s.jsx)(l.Ji, {
                      ref: k,
                      sprites: [C],
                      colors: f,
                      spriteWidth: g.Ko,
                      spriteHeight: g.Ko,
                    }),
                    null != r.current &&
                      (0, i.createPortal)(
                        (0, s.jsx)(c.animated.div, {
                          className: a()(_.borders, _.bordersBottom),
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
        x = n(111382),
        m = n(113434),
        g = n(497505),
        _ = n(918701),
        C = n(566078),
        f = n(667105),
        h = n(585857),
        E = n(46140),
        S = n(689938),
        T = n(161548);
      function A(e) {
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
      function N(e) {
        let { quest: t, useReducedMotion: n } = e,
          r = (0, x.n)(),
          i = (0, f.k3)(t.id, g.jn.QUEST_BAR_V2),
          d = (0, f.g2)({ useReducedMotion: n }),
          {
            errorHints: h,
            startingConsoleQuest: A,
            startConsoleQuest: N,
          } = (0, m.GI)({
            questId: t.id,
            beforeRequest: () => {
              (0, p._3)({
                questId: t.id,
                questContent: g.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.DEFIBRILLATOR,
              }),
                d.startAnimation();
            },
            afterRequest: d.stopAnimation,
          }),
          { header: j, renderBody: B } = o.useMemo(() => {
            let e = h.length > 0,
              n = () =>
                (0, s.jsx)(s.Fragment, {
                  children: h.map((e, n) => {
                    if (e.type === l.K.EXPIRED_CREDENTIAL && r) {
                      let o = u.Z.getAccount(
                          e.connected_account_id,
                          e.connected_account_type,
                        ),
                        r = (0, _.C9)(e),
                        a = (0, _._j)(e);
                      return (0, s.jsx)(
                        v,
                        {
                          children: r.format({
                            account_name: null == o ? void 0 : o.name,
                            onClick: () => {
                              (0, _.fY)(
                                { quest: t, platformType: a },
                                {
                                  content: g.jn.QUEST_BAR,
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
            if ((0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST))
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
            let o = C.r.build(t.config).application.name;
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
          }, [t, h, r]);
        return (0, s.jsxs)("div", {
          className: T.microphoneUnit,
          children: [
            (0, s.jsxs)("div", {
              className: T.microphoneUnitHeader,
              children: [
                (0, s.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === h.length ? T.warningCircle : T.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, s.jsx)(c.Text, { variant: "text-xs/medium", children: j }),
                (0, s.jsx)(c.Clickable, {
                  className: a()(T.microphoneUnitRefreshIconWrapper, {
                    [T.disabled]: A,
                  }),
                  onClick: () => N(),
                  children: d.render(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: a()({ [T.opacity_50]: A }),
              children: [
                B(),
                0 === h.length ? null : (0, s.jsx)(v, { children: i }),
              ],
            }),
          ],
        });
      }
      function j(e) {
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
          a = (0, m.z6)(),
          {
            steps: l,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: x,
          } = o.useMemo(() => {
            var e;
            let o = a.xboxAndPlaystationAccounts.length > 0,
              r = o && (0, _.Bz)(t),
              l = (0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
              i = C.r.build(t.config).application.name,
              c =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, s.jsx)(h.Q, { ...a, quest: t }),
                  isComplete: o || r || c,
                },
                {
                  renderContent: () =>
                    (0, s.jsx)(j, {
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
                    (0, s.jsx)(j, {
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
                      A,
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
                  !x &&
                  (0, s.jsx)(N, { useReducedMotion: r, quest: t }),
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
        l = n(56217),
        i = n(95985),
        c = n(183004);
      let d = o.forwardRef(function (e, t) {
        var n;
        let {
            className: r,
            expansionSpring: d,
            isExpanded: u,
            isExpansionAnimationComplete: p,
            quest: x,
            taskDetails: m,
          } = e,
          g = o.useRef(null),
          _ =
            (null === (n = x.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null;
        return (0, s.jsx)(l.animated.div, {
          ref: t,
          "aria-hidden": u && p,
          className: a()(r, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: _,
          }),
          style: { opacity: d.to({ range: [0, 1], output: [1, 0] }) },
          children: (0, s.jsx)("div", {
            className: c.contentCollapsedWrapper,
            children: _
              ? (0, s.jsx)(i.Z, {
                  contentLocation: "collapsed",
                  quest: x,
                  progressBarRef: g,
                  isExpanded: !1,
                  taskDetails: m,
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
        l = n(56217),
        i = n(278074),
        c = n(442837),
        d = n(481060),
        u = n(70097),
        p = n(617136),
        x = n(272008),
        m = n(113434),
        g = n(569984),
        _ = n(497505),
        C = n(918701),
        f = n(988303),
        h = n(302245),
        E = n(665430),
        S = n(585500),
        T = n(644646),
        A = n(78826),
        v = n(670638),
        N = n(693900),
        j = n(164495),
        B = n(759853),
        R = n(205511),
        b = n(694802),
        y = n(95985),
        I = n(50476),
        M = n(658590),
        k = n(46140),
        O = n(743294),
        U = n(689938),
        L = n(160443);
      function Z(e) {
        let { quest: t, isHighlightedReward: n } = e;
        return (0, s.jsx)(T.Z, {
          className: a()(L.rewardTile, { [L.hiddenRewardTile]: n }),
          learnMoreStyle: "text",
          quest: t,
          questContent: _.jn.QUEST_BAR_V2,
          location: k.dr.QUESTS_BAR,
        });
      }
      function q(e) {
        let {
            quest: t,
            taskDetails: n,
            expansionSpring: r,
            isInteractable: a,
            useReducedMotion: i,
            containerRef: p,
            isExpanded: x,
            onAcceptQuest: m,
          } = e,
          E = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
          T = (0, C.ph)(t),
          v = o.useMemo(() => (0, C.nP)(T), [T]),
          N = (0, h.vI)(t, k.dr.QUESTS_BAR, !0),
          j = o.useRef(null),
          { primaryVariant: B } = f.u.useExperiment(
            { location: k.dr.QUESTS_BAR },
            { autoTrackExposure: !1 },
          ),
          R = (0, S.D)({
            quest: t,
            location: k.dr.QUESTS_BAR,
            questContent: _.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: B === f.P.V2 || (0, M.a)(t),
          });
        return (
          o.useEffect(() => {
            null != j.current &&
              (i && x
                ? (j.current.pause(), (j.current.currentTime = 0))
                : !i && x && j.current.play());
          }, [i, x]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                children: (0, s.jsxs)("div", {
                  className: L.questPromoContent,
                  ref: p,
                  children: [
                    (0, s.jsxs)("div", {
                      className: L.details,
                      children: [
                        (0, s.jsx)(Z, { quest: t, isHighlightedReward: N }),
                        (0, s.jsx)(d.Heading, {
                          className: L.title,
                          variant: "heading-md/medium",
                          children: U.Z.Messages.QUESTS_TITLE.format({
                            questName: t.config.messages.questName,
                          }),
                        }),
                        (0, s.jsx)(d.Text, {
                          className: L.description,
                          variant: "text-xs/normal",
                          children: R,
                        }),
                      ],
                    }),
                    (0, s.jsx)(d.Button, {
                      className: L.cta,
                      color: d.Button.Colors.BRAND,
                      fullWidth: !0,
                      onClick: a ? m : void 0,
                      size: d.Button.Sizes.SMALL,
                      submitting: E,
                      children: U.Z.Messages.QUESTS_ACCEPT_QUEST,
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)(l.animated.div, {
                className: L.heroAssetWrapper,
                style: {
                  backdropFilter: r
                    .to([0, 1], [5, 0])
                    .to((e) => "blur(".concat(e, "px)")),
                  filter: r
                    .to([0, 1], [0.8, 1])
                    .to((e) => "brightness(".concat(e, ")")),
                  borderRadius: N ? "12px 12px 0 0" : "8px 8px 0 0",
                },
                children: [
                  (0, s.jsx)(l.animated.div, {
                    className: L.heroAssetDarken,
                    style: { opacity: r.to([0, 1], [1, 0]) },
                  }),
                  (0, s.jsx)(l.animated.div, {
                    className: L.heroAssetTint,
                    style: {
                      backgroundColor: t.config.colors.primary,
                      opacity: r.to([0, 1], [1, 0]),
                    },
                  }),
                  v
                    ? (0, s.jsx)(A.Fl, {
                        id: "QuestBarV2ContentExpanded_heroAnimated",
                        children: (e) => (
                          null != e.current && (j.current = e.current),
                          (0, s.jsx)(u.Z, {
                            ref: e,
                            autoPlay: !i && x,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: L.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)("source", {
                              src: T,
                              type: (0, C.mN)(T),
                            }),
                          })
                        ),
                      })
                    : (0, s.jsx)(A.Fl, {
                        id: "QuestBarV2ContentExpanded_heroStatic",
                        children: (e) =>
                          (0, s.jsx)("img", {
                            ref: e,
                            alt: "",
                            className: L.heroAsset,
                            src: T,
                          }),
                      }),
                  (0, s.jsx)(l.animated.div, {
                    className: L.legibilityGradient,
                    style: { opacity: r.to({ range: [0, 1], output: [0, 1] }) },
                  }),
                ],
              }),
            ],
          })
        );
      }
      function w(e) {
        var t;
        let {
            quest: n,
            taskDetails: r,
            expansionSpring: c,
            overlayRef: u,
            isExpanded: p,
            useReducedMotion: x,
            containerRef: g,
            onCtxMenuOpen: C,
            onCtxMenuClose: f,
            onCtxMenuSelect: h,
          } = e,
          S =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          T = r.percentComplete > 0,
          A = (0, m.z)(n),
          [M, Z, q] = (0, m.me)(n, r),
          w = (0, E.pF)({ location: k.dr.QUESTS_BAR }),
          P = o.useRef(null),
          Q = (0, m.B6)(n.config.expiresAt),
          W = (0, m._s)({ quest: n });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.animated.div, {
              className: a()(
                L.postEnrollmentBackground,
                L.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(O.aY, ", ")
                  .concat(O.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, s.jsxs)("div", {
              className: L.questAcceptedContent,
              ref: g,
              children: [
                (0, s.jsxs)("div", {
                  className: L.questAcceptedHeader,
                  children: [
                    (0, s.jsx)(d.Text, {
                      variant: "text-xxs/medium",
                      className: a()(L.flex, L.headerText),
                      children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                        { expirationDate: Q },
                      ),
                    }),
                    (0, s.jsx)(v.r, {
                      onOpen: C,
                      onClose: f,
                      onSelect: h,
                      questContent: _.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, s.jsx)(d.Clickable, {
                          ...e,
                          className: L.submenuWrapper,
                          "aria-label": U.Z.Messages.ACTIONS,
                          children: (0, s.jsx)(d.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(L.submenuIcon, L.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", { className: L.divider }),
                (0, s.jsx)(B.Z, {
                  expansionSpring: c,
                  overlayRef: u,
                  progressBarRef: P,
                  quest: n,
                  isExpanded: p,
                }),
                (0, s.jsx)(y.Z, {
                  contentLocation: "expanded",
                  quest: n,
                  progressBarRef: P,
                  isExpanded: !0,
                  taskDetails: r,
                  activeScreen: M,
                }),
                (0, s.jsx)(N.n, {
                  children:
                    !S &&
                    (0, i.EQ)(M)
                      .with(_.LI.SELECT, () =>
                        (0, s.jsx)(I.Z, {
                          onConsole: () => q(k.cd.CONSOLE),
                          onDesktop: () => q(k.cd.DESKTOP),
                        }),
                      )
                      .with(_.LI.DESKTOP, () => (0, s.jsx)(b.Z, { quest: n }))
                      .with(_.LI.CONSOLE, () =>
                        (0, s.jsx)(R.Z, { quest: n, taskDetails: r }),
                      )
                      .exhaustive(),
                }),
                (0, s.jsx)(N.n, {
                  children: (0, s.jsx)(j.y, {
                    quest: n,
                    useReducedMotion: x,
                    isExpanded: p,
                    awaitingConsoleConnections: W,
                    hasMadeProgress: T,
                    isProgressing: A,
                    activeScreen: M,
                    showBackButton:
                      M !== _.LI.SELECT && Z.length > 1 && !T && !A && w,
                    onBack: () => q(null),
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: a()(
                L.postEnrollmentBackground,
                L.postEnrollmentBackgroundExpanded,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(O.aY, ", ")
                  .concat(O.v6, ")"),
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
            expansionSpring: m,
            onCtxMenuOpen: g,
            onCtxMenuClose: C,
            onCtxMenuSelect: f,
            overlayRef: h,
            quest: E,
            useReducedMotion: S,
            taskDetails: T,
          } = e,
          A = o.useCallback(() => {
            (0, x.AH)(E.id, {
              questContent: _.jn.QUEST_BAR_V2,
              questContentCTA: p.jZ.ACCEPT_QUEST,
            });
          }, [E]),
          v =
            (null === (n = E.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          N = d && u;
        return (0, s.jsxs)(l.animated.div, {
          "aria-hidden": !N,
          className: a()(i, L.contentExpanded, {
            [L.contentInteractable]: N,
            [L.contentExpandedAccepted]: v,
          }),
          style: {
            transform: (0, l.to)(
              [
                m.to({ range: [0, 1], output: [0, -100] }),
                m.to({ range: [0, 1], output: [0, c] }),
              ],
              (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
          },
          children: [
            r,
            (0, s.jsx)(l.animated.div, {
              style: { opacity: 1 },
              children: v
                ? (0, s.jsx)(w, {
                    quest: E,
                    taskDetails: T,
                    expansionSpring: m,
                    overlayRef: h,
                    isExpanded: d,
                    useReducedMotion: S,
                    onCtxMenuOpen: g,
                    onCtxMenuClose: C,
                    onCtxMenuSelect: f,
                    containerRef: t,
                  })
                : (0, s.jsx)(q, {
                    quest: E,
                    taskDetails: T,
                    expansionSpring: m,
                    isInteractable: N,
                    useReducedMotion: S,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: A,
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
          return E;
        },
        GX: function () {
          return h;
        },
        eQ: function () {
          return C;
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
        x = n(585500),
        m = n(566078),
        g = n(46140),
        _ = n(689938);
      function C(e) {
        var t, n;
        let s = (0, o.e7)([l.default], () => l.default.locale),
          r = (0, c.Rf)(e),
          [a] = (0, c.me)(e, r),
          x = (0, p.pF)({ location: g.dr.QUESTS_BAR });
        if (
          (null === (t = e.userStatus) || void 0 === t
            ? void 0
            : t.completedAt) != null
        )
          return _.Z.Messages.QUESTS_COMPLETION_COMPLETE;
        if (
          (null === (n = e.userStatus) || void 0 === n
            ? void 0
            : n.enrolledAt) != null &&
          r.percentComplete > 0
        ) {
          let e = (0, i.T3)(s, r.percentComplete, { roundingMode: "floor" });
          return _.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
            percent: e,
          });
        }
        return x && a === d.LI.SELECT
          ? _.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER
          : (0, u.$J)(e)
            ? _.Z.Messages.QUEST_BAR_TITLE_START_PLAYING
            : _.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
      }
      function f(e, t, n) {
        var s;
        let o = (0, c.B6)(m.r.build(e.config).rewardsExpireAt),
          r = (0, c.Rf)(e),
          a =
            (null === (s = e.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          l = (0, c.z)(e),
          i = (0, x.D)({
            quest: e,
            location: g.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: r,
            useV2Variants: !0,
          });
        if (a)
          return _.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
            expirationDate: o,
          });
        if (t)
          return n === d.LI.SELECT
            ? _.Z.Messages.QUEST_MULTIPLATFORM_SELECT_FUN_SUBTITLE
            : i;
        if (r.percentComplete > 0)
          return l
            ? (0, u.AV)({ quest: e, taskDetails: r })
            : _.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
        return _.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE;
      }
      function h() {
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
      function E(e, t) {
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
            isExpanded: x,
            taskDetails: m,
            activeScreen: g,
          } = e,
          { percentComplete: _ } = m,
          C = (0, c.eQ)(n),
          f = (0, c.vf)(n, x, g);
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
                  percentComplete: _,
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
                      children: C,
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
      var o = n(56217),
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
            partnerBranding: x,
            useReducedMotion: m,
          } = e,
          { enabled: g, variant: _ } = l.Hp.useExperiment({
            location: c.dr.QUESTS_BAR,
          });
        if (!g) return null;
        let C = null;
        return (_ === l.PW.REWARD_AVAILABLE
          ? (C = d.Z.Messages.REWARD_AVAILABLE)
          : _ === l.PW.EARN_A_REWARD
            ? (C = d.Z.Messages.EARN_A_REWARD)
            : _ === l.PW.EARN_A_REWARD_EXCLAMATION &&
              (C = d.Z.Messages.EARN_A_REWARD_EXCLAIMATION),
        null == C)
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
                    autoplay: !m,
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
                      children: x,
                    }),
                    (0, s.jsx)(o.animated.div, {
                      className: u.rewardHighlightCTA,
                      style: {
                        opacity: n.to({ range: [0, 1], output: [0.7, 0] }),
                      },
                      children: (0, s.jsx)(r.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        children: C,
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
        r = n(56217),
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
          quest: x,
          useReducedMotion: m,
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
          quest: x,
          useReducedMotion: m,
          ref: n,
          children: (0, s.jsx)(o.Z, {
            className: a.content,
            expansionSpring: l,
            isExpanded: i,
            isExpansionAnimationComplete: c,
            quest: x,
            useReducedMotion: m,
          }),
        });
      };
    },
    788284: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
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
        x = n(865871);
      let m = [0, 0.5, 1],
        g = {
          "layers[1].shapes[1].g.k.k": [
            0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278,
            0.776,
          ],
          "layers[2].shapes[1].g.k.k": [
            0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271,
            0.757,
          ],
        };
      async function _(e, t) {
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
          })(s, g, t),
          s
        );
      }
      function C(e) {
        var t;
        let {
            animationClassName: n,
            className: r,
            quest: l,
            useReducedMotion: i,
          } = e,
          g = (0, c.e7)([u.Z], () => u.Z.isFocused()),
          C = o.useRef(null),
          [f, h] = o.useState(!1),
          E = o.useMemo(() => {
            if (null == l) return null;
            let e = (0, p.oo)(l.config.colors.primary),
              t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
              n = m.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return _(l.id, n);
          }, [l]),
          S =
            (null === (t = l.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          T = !i && g;
        o.useEffect(() => {
          var e, t, n, s;
          g
            ? T &&
              (null === (s = C.current) ||
                void 0 === s ||
                null === (n = s.animation) ||
                void 0 === n ||
                n.play())
            : null === (t = C.current) ||
              void 0 === t ||
              null === (e = t.animation) ||
              void 0 === e ||
              e.goToAndStop(0, !0);
        }, [T, g]);
        let A = o.useCallback(() => {
          h(!0);
        }, []);
        return null == E || S
          ? (0, s.jsx)("div", {
              className: x.backgroundFallback,
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(l.config.colors.primary, ", ")
                  .concat(l.config.colors.secondary, ")"),
              },
            })
          : (0, s.jsx)("div", {
              className: a()(x.lottieAnimationBackgroundWrapper, r),
              children: (0, s.jsx)(
                d.LottieAnimation,
                {
                  ref: C,
                  onComplete: A,
                  importData: () => E,
                  shouldAnimate: !f && T,
                  className: a()(
                    x.lottieAnimation,
                    x.lottieAnimationBackground,
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
        a = n(56217),
        l = n(481060),
        i = n(113434),
        c = n(497505),
        d = n(685613),
        u = n(340100),
        p = n(644646),
        x = n(788284),
        m = n(46140),
        g = n(689938),
        _ = n(968387);
      t.Z = function (e) {
        var t;
        let {
            className: n,
            expansionSpring: o,
            isExpanded: C,
            isExpansionAnimationComplete: f,
            quest: h,
            useReducedMotion: E,
          } = e,
          S =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { percentComplete: T } = (0, i.Rf)(h),
          A = (0, i.Jf)(h),
          v = null != A ? A.completedRatio > 0 : T > 0;
        return (0, s.jsxs)(a.animated.div, {
          "aria-hidden": C && f,
          className: r()(n, _.contentCollapsed, {
            [_.contentCollapsedExpanded]: C,
            [_.contentCollapsedAccepted]: S,
          }),
          style: { opacity: o.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, s.jsx)(x.Z, { quest: h, useReducedMotion: E }),
            (0, s.jsx)("div", {
              className: _.contentCollapsedWrapper,
              children: S
                ? (0, s.jsxs)("div", {
                    className: _.questProgressWrapper,
                    children: [
                      (0, s.jsx)(p.Z, {
                        className: _.questProgressRewardTile,
                        quest: h,
                        questContent: c.jn.QUEST_BAR,
                        autoplay: !1,
                        location: m.dr.QUESTS_BAR,
                      }),
                      v
                        ? (0, s.jsx)(u.Z, {
                            className: _.questProgressBar,
                            quest: h,
                          })
                        : (0, s.jsx)(l.Text, {
                            className: _.questProgressHint,
                            color: "always-white",
                            variant: "text-sm/semibold",
                            children:
                              g.Z.Messages
                                .QUESTS_COMPLETION_PROGRESS_NOT_STARTED,
                          }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    className: _.brandingWrapper,
                    children: [
                      (0, s.jsx)(d.Z, {
                        className: _.partnerBranding,
                        quest: h,
                      }),
                      (0, s.jsx)(l.Heading, {
                        color: "always-white",
                        variant: "heading-sm/medium",
                        className: _.questName,
                        children: g.Z.Messages.QUEST.format({
                          questName: h.config.messages.questName,
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
        l = n(56217),
        i = n(442837),
        c = n(950104),
        d = n(780384),
        u = n(481060),
        p = n(70097),
        x = n(703656),
        m = n(358085),
        g = n(617136),
        _ = n(272008),
        C = n(113434),
        f = n(569984),
        h = n(497505),
        E = n(918701),
        S = n(865364),
        T = n(585500),
        A = n(566078),
        v = n(340100),
        N = n(611855),
        j = n(644646),
        B = n(78826),
        R = n(670638),
        b = n(667105),
        y = n(46140),
        I = n(981631),
        M = n(701488),
        k = n(689938),
        O = n(609706);
      let U = o.forwardRef(function (e, t) {
        var n, r;
        let {
            children: S,
            className: U,
            collapsedHeight: Z,
            expansionSpring: q,
            isExpanded: w,
            isExpansionAnimationComplete: P,
            onCtxMenuOpen: Q,
            onCtxMenuClose: W,
            onCtxMenuSelect: D,
            quest: H,
            useReducedMotion: V,
          } = e,
          z = (0, i.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]),
          G = (0, C.B6)(H.config.expiresAt),
          F = A.r.build(H.config),
          Y = (0, C.B6)(F.rewardsExpireAt),
          K = (0, E.ph)(H),
          X = o.useMemo(() => (0, E.nP)(K), [K]),
          J = (0, b.tP)(F.application.id),
          $ = F.features.has(y.S7.START_QUEST_CTA)
            ? g.jZ.START_QUEST
            : g.jZ.ACCEPT_QUEST,
          ee = F.features.has(y.S7.START_QUEST_CTA)
            ? k.Z.Messages.QUESTS_START_QUEST
            : k.Z.Messages.QUESTS_ACCEPT_QUEST,
          et = o.useCallback(() => {
            (0, _.AH)(H.id, {
              questContent: h.jn.QUEST_BAR,
              questContentCTA: $,
            }),
              F.features.has(y.S7.START_QUEST_CTA) &&
                (0, x.uL)(I.Z5c.ACTIVITY_DETAILS(M.In), void 0);
          }, [H, $, F.features]),
          en = (0, b.hf)({ quest: H, location: h.jn.QUEST_BAR }),
          es = o.useCallback(() => {
            (0, E.FE)(H, {
              content: h.jn.QUEST_BAR,
              ctaContent: g.jZ.OPEN_GAME_LINK,
            });
          }, [H]),
          eo = F.features.has(y.S7.POST_ENROLLMENT_CTA),
          er = (0, C.Rf)(H),
          ea = (0, C.Jf)(H),
          el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
          ei =
            (null === (n = H.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ec =
            (null === (r = H.userStatus) || void 0 === r
              ? void 0
              : r.completedAt) != null,
          ed = o.useMemo(() => (0, E.Xv)(H.config), [H.config]),
          eu = w && P,
          ep = (0, T.D)({
            quest: H,
            taskDetails: er,
            location: y.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0,
          }),
          ex = (0, m.isWeb)(),
          em = o.useMemo(() => {
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
          className: a()(U, O.contentExpanded, { [O.contentInteractable]: eu }),
          style: {
            backgroundColor: H.config.colors.secondary,
            transform: ec
              ? void 0
              : (0, l.to)(
                  [
                    q.to({ range: [0, 1], output: [0, -100] }),
                    q.to({ range: [0, 1], output: [0, Z] }),
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
                    className: O.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, s.jsxs)("div", {
                        className: O.utils,
                        children: [
                          (0, s.jsxs)("div", {
                            className: O.questAcceptedContentHeading,
                            children: [
                              (0, s.jsx)(j.Z, {
                                className: O.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: H,
                                questContent: h.jn.QUEST_BAR,
                                location: y.dr.QUESTS_BAR,
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, E.AV)({
                                      quest: H,
                                      taskDetails: er,
                                      thirdPartyTaskDetails:
                                        null != ea ? ea : void 0,
                                    }),
                                  }),
                                  (0, s.jsx)(u.Text, {
                                    className:
                                      O.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: ec
                                      ? k.Z.Messages.QUESTS_CLAIM_BY_DATE.format(
                                          { expirationDate: Y },
                                        )
                                      : k.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                          { expirationDate: G },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(R.r, {
                            onOpen: Q,
                            onClose: W,
                            onSelect: D,
                            questContent: h.jn.QUEST_BAR,
                            quest: H,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, s.jsx)(u.Clickable, {
                                ...e,
                                className: O.submenuWrapper,
                                "aria-label": k.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: O.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      ec
                        ? (0, s.jsx)(u.Button, {
                            className: a()(O.cta, O.ctaClaimReward),
                            style: ed ? em : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: en,
                            size: u.Button.Sizes.NONE,
                            children: k.Z.Messages.QUESTS_CLAIM_REWARD,
                          })
                        : (0, s.jsx)(u.Text, {
                            className: O.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ep,
                          }),
                      (0, s.jsx)(v.Z, { quest: H }),
                      !ex &&
                        !el &&
                        !J &&
                        eo &&
                        (0, s.jsx)(L, { onClick: eu ? es : void 0 }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsxs)("div", {
                        className: O.questPromoContent,
                        ref: t,
                        children: [
                          (0, s.jsxs)("div", {
                            className: O.utils,
                            children: [
                              (0, s.jsx)(N.Z, { color: "always-white" }),
                              (0, s.jsx)(R.r, {
                                onOpen: Q,
                                onClose: W,
                                onSelect: D,
                                questContent: h.jn.QUEST_BAR,
                                quest: H,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                children: (e) =>
                                  (0, s.jsx)(u.Clickable, {
                                    ...e,
                                    className: O.submenuWrapper,
                                    "aria-label": k.Z.Messages.ACTIONS,
                                    children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: O.submenuIcon,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: O.details,
                            children: [
                              (0, s.jsx)(j.Z, {
                                className: O.rewardTile,
                                learnMoreStyle: "text",
                                quest: H,
                                questContent: h.jn.QUEST_BAR,
                                location: y.dr.QUESTS_BAR,
                              }),
                              (0, s.jsx)(u.Heading, {
                                className: O.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: k.Z.Messages.QUESTS_TITLE.format({
                                  questName: H.config.messages.questName,
                                }),
                              }),
                              (0, s.jsx)(u.Text, {
                                className: O.description,
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: ep,
                              }),
                            ],
                          }),
                          (0, s.jsx)(u.Button, {
                            className: O.cta,
                            style: "1232852290197655573" !== H.id ? em : void 0,
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
                        className: O.heroAssetWrapper,
                        style: { color: H.config.colors.secondary },
                        children: X
                          ? (0, s.jsx)(B.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                (0, s.jsx)(p.Z, {
                                  ref: e,
                                  autoPlay: !V,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                  className: O.heroAsset,
                                  controls: !1,
                                  children: (0, s.jsx)("source", {
                                    src: K,
                                    type: (0, E.mN)(K),
                                  }),
                                }),
                            })
                          : (0, s.jsx)(B.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                (0, s.jsx)("img", {
                                  ref: e,
                                  alt: "",
                                  className: O.heroAsset,
                                  src: K,
                                }),
                            }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      });
      function L(e) {
        let { style: t, onClick: n } = e;
        return (0, S.O)({ location: y.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, s.jsx)(u.Button, {
              className: O.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: k.Z.Messages.QUESTS_GET_THIS_GAME,
            })
          : null;
      }
      t.Z = U;
    },
    642145: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return s;
        },
      });
      let s = { tension: 250, friction: 20 };
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
  },
]);
//# sourceMappingURL=d7b40a4a0a287eebc350.js.map
