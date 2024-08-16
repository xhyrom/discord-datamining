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
          return r;
        },
      });
      var s = n(818083),
        o = n(977156);
      let a = (0, s.B)({
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
        r = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e,
            s = (0, o.Zy)({ location: t }),
            { enabled: r } = a.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return s && r;
        };
    },
    988303: function (e, t, n) {
      n.d(t, {
        P: function () {
          return o;
        },
        u: function () {
          return r;
        },
      });
      var s,
        o,
        a = n(818083);
      ((s = o || (o = {}))[(s.V1 = 0)] = "V1"), (s[(s.V2 = 1)] = "V2");
      let r = (0, a.B)({
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
    585857: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return S;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        r = n(54042),
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
        C = n(59596);
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
              ? (0, s.jsx)(r.T, {
                  colorClass: a()(
                    C.connectConsoleButton,
                    n
                      ? C.playstationButtonConnected
                      : C.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                })
              : (0, s.jsx)(l.M, {
                  colorClass: a()(
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
            xboxAndPlaystationAccounts: r,
          } = e,
          l = r.slice(0, 2),
          c = r.length > 0,
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
                        className: a()(
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
                  r.length > 2 &&
                    (0, s.jsx)(h, {
                      text: _.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
                      quest: t,
                    }),
                ],
              }),
          ],
        });
      }
      function T(e) {
        let { xboxAndPlaystationAccounts: t, quest: n } = e;
        return t.length > 0
          ? (0, s.jsx)(h, {
              text: _.Z.Messages.QUESTS_SHOW_CONNECTIONS,
              quest: n,
            })
          : null;
      }
      function S(e) {
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
            t ? (0, s.jsx)(E, { ...e }) : (0, s.jsx)(T, { ...e }),
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
        a = n(338545),
        r = n(442837),
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
          m = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
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
          (0, s.jsx)(a.animated.div, {
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
        a = n(988303),
        r = n(658590),
        l = n(448018),
        i = n(46140);
      let c = (e, t) => {
        let n = (0, o.zK)(e, i.S7.QUEST_BAR_V2),
          c = (0, r.a)(e),
          { primaryVariant: d, progressVariant: u } = a.u.useExperiment(
            { location: i.dr.QUESTS_BAR },
            { autoTrackExposure: t && n },
          );
        return s.useMemo(
          () =>
            c
              ? (0, l.v)(e, a.P.V2, a.P.V2)
              : n
                ? (0, l.v)(e, d, u)
                : (0, l.v)(e, a.P.V1, a.P.V1),
          [c, d, u, e, n],
        );
      };
    },
    941348: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(113434),
        r = n(308069),
        l = n(613087),
        i = n(457153),
        c = n(254197),
        d = n(321025),
        u = n(657213);
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
          T = o.useRef(null),
          S = o.useRef(null),
          v =
            (null === (t = f.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          A = (0, a.Rf)(f);
        return (0, s.jsxs)(l.p, {
          expandedContentRef: n,
          collapsedContentRef: T,
          expansionSpring: p,
          children: [
            (0, s.jsx)(i.Z, {
              ref: T,
              className: u.content,
              expansionSpring: p,
              isExpanded: x,
              isExpansionAnimationComplete: m,
              quest: f,
              useReducedMotion: h,
              taskDetails: A,
            }),
            (0, s.jsx)(c.Z, {
              expansionSpring: p,
              className: u.content,
              collapsedHeight: E,
              onCtxMenuOpen: g,
              onCtxMenuClose: _,
              onCtxMenuSelect: C,
              overlayRef: S,
              isExpanded: x,
              isExpansionAnimationComplete: m,
              quest: f,
              useReducedMotion: h,
              ref: n,
              taskDetails: A,
              children: (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(d.Z, { expansionSpring: p, isExpanded: x }),
                  !v &&
                    (0, s.jsx)(r.Z, {
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
            (0, s.jsx)("div", { ref: S, className: u.overlay }),
          ],
        });
      };
    },
    308069: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(120356),
        r = n.n(a),
        l = n(338545),
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
        E = n(91242);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: a,
            onCtxMenuSelect: T,
            onCtxMenuOpen: S,
            onCtxMenuClose: v,
            useReducedMotion: A,
            isExpanded: N,
            isExpansionAnimationComplete: j,
          } = e,
          B = o.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
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
          R = N && j,
          y = (0, p.vI)(t, f.dr.QUESTS_BAR, !0),
          I = (0, s.jsx)(i.Clickable, {
            onClick: b,
            className: r()({ [E.logo]: R }),
            children: (0, s.jsx)(x.Z, { quest: t, withGameTile: !1 }),
          });
        return (0, s.jsxs)(l.animated.div, {
          className: r()(E.wrapper, {
            [E.interactable]: R,
            [E.rewardHighlightWrapper]: y,
          }),
          style: {
            transform: (0, l.to)(
              [a.to({ range: [0, 1], output: [y ? 8 : 4, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, s.jsx)(l.animated.div, {
              className: E.opaqueExpandedBackground,
              style: {
                opacity: a.to({ range: [0, 1], output: [0, 1] }),
                backdropFilter: a
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
                opacity: a.to({ range: [0, 1], output: [0.5, 0] }),
                borderBottomLeftRadius: a.to({ range: [0, 1], output: [0, 8] }),
                borderBottomRightRadius: a.to({
                  range: [0, 1],
                  output: [0, 8],
                }),
              },
              children: (0, s.jsx)(C.Z, {
                className: E.background,
                animationClassName: E.backgroundAnimation,
                quest: t,
                useReducedMotion: A,
              }),
            }),
            y
              ? (0, s.jsx)(_.Z, {
                  quest: t,
                  expansionSpring: a,
                  isFullyExpanded: R,
                  partnerBranding: I,
                  useReducedMotion: A,
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(l.animated.img, {
                      alt: "",
                      className: E.wreathIcon,
                      style: {
                        opacity: a.to({ range: [0, 1], output: [1, 0] }),
                      },
                      src: n(858595),
                    }),
                    (0, s.jsx)(l.animated.div, {
                      style: {
                        opacity: a.to({
                          range: [0, 1],
                          output: [1, R ? 1 : 0.8],
                        }),
                        transform: (0, l.to)(
                          [
                            a.to({ range: [0, 1], output: [0, -16] }),
                            a.to({ range: [0, 1], output: [0, 8] }),
                          ],
                          (e, t) =>
                            "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                      },
                      children: I,
                    }),
                    (0, s.jsx)(l.animated.div, {
                      className: E.questAvailable,
                      style: {
                        opacity: a.to({ range: [0, 1], output: [0.7, 0] }),
                        transform: (0, l.to)(
                          [a.to({ range: [0, 1], output: [0, -20] })],
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
              style: { opacity: a.to({ range: [0, 1], output: [0, 1] }) },
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
                  onOpen: S,
                  onClose: v,
                  onSelect: T,
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
                        className: r()(E.submenuIcon, E.white),
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
        a = n(699581),
        r = n(338545),
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
          let T = o.useCallback(
            (e) => {
              let { height: t } = e;
              E.current !== t && (x(), (E.current = t));
            },
            [x],
          );
          (0, l.P)(f, T);
          let S = null === (n = C.get(d)) || void 0 === n ? void 0 : n.current,
            v = null;
          return (
            null == S
              ? (v = null)
              : p && null != _
                ? (v = (0, s.jsxs)(s.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, a.createPortal)(
                          (0, s.jsx)(r.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: _.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: i(h),
                          }),
                          S,
                        ),
                      "expanded" === u &&
                        (0, a.createPortal)(
                          (0, s.jsx)(r.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: _.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: i(h),
                          }),
                          S,
                        ),
                    ],
                  }))
                : "collapsed" === u && (v = (0, a.createPortal)(i(h), S)),
            (0, s.jsxs)("div", {
              style: {
                opacity: (null == v && "collapsed" === u) || null == S ? 1 : 0,
              },
              ref: t,
              children: [i(f), v],
            })
          );
        }),
        u = (e) => {
          let {
              children: t,
              expandedContentRef: n,
              collapsedContentRef: a,
              expansionSpring: r,
            } = e,
            [l, d] = o.useState({}),
            [u, p] = o.useState([]),
            [x, m] = o.useState(() => new Map()),
            g = o.useCallback((e, t, n) => {
              d((s) => {
                var o;
                let a =
                  null !== (o = s[t]) && void 0 !== o
                    ? o
                    : { expanded: null, collapsed: null };
                return { ...s, [t]: { ...a, [n]: e } };
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
                let a =
                  null !== (o = s[e]) && void 0 !== o
                    ? o
                    : { expanded: null, collapsed: null };
                return (
                  (a[t] = null),
                  (n = null == a.expanded && null == a.collapsed),
                  { ...s, [e]: a }
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
                if (null == l[t] || null == n.current || null == a.current)
                  continue;
                let s = l[t].collapsed,
                  o = l[t].expanded;
                if (null == s || null == o) continue;
                let r = o.getBoundingClientRect(),
                  c = n.current.getBoundingClientRect(),
                  d = s.getBoundingClientRect(),
                  u = a.current.getBoundingClientRect(),
                  p = r.top - c.top + i.Li,
                  x = d.top - u.top,
                  m = r.left - c.left + i.Li,
                  g = d.left - u.left,
                  _ = -r.right + c.right + i.Li,
                  C = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: g,
                  expandedLeft: m,
                  collapsedRight: C,
                  expandedRight: _,
                  collapsedTop: x,
                  expandedTop: p,
                  width: r.width,
                });
              }
              p(e);
            }, [l, n, a, p]);
          return (0, s.jsx)(c.Provider, {
            value: {
              registerComponent: g,
              unregisterComponent: _,
              animatedComponents: l,
              expandedContentRef: n,
              collapsedContentRef: a,
              recalculateAnimationPositions: C,
              animatedComponentProps: u,
              expansionSpring: r,
              mountPoints: x,
            },
            children: t,
          });
        };
    },
    776263: function (e, t, n) {
      n.d(t, {
        y: function () {
          return C;
        },
      });
      var s = n(735250);
      n(470079);
      var o = n(481060),
        a = n(617136),
        r = n(497505),
        l = n(918701),
        i = n(796111),
        c = n(667105),
        d = n(46140),
        u = n(689938),
        p = n(575137);
      let x = (e) => {
          let { quest: t } = e;
          return (0, s.jsx)(o.Button, {
            className: p.cta,
            size: o.Button.Sizes.SMALL,
            onClick: () =>
              (0, l.FE)(t, {
                content: r.jn.QUEST_BAR_V2,
                ctaContent: a.jZ.OPEN_GAME_LINK,
              }),
            children: u.Z.Messages.QUESTS_GET_THIS_GAME,
          });
        },
        m = (e) => {
          let { quest: t } = e;
          return (0, s.jsx)(o.Button, {
            fullWidth: !0,
            className: p.cta,
            onClick: () =>
              (0, l.gI)(
                { quest: t, showInline: !1 },
                {
                  content: r.jn.QUEST_BAR_V2,
                  ctaContent: a.jZ.CONNECT_CONSOLE,
                },
              ),
            size: o.Button.Sizes.SMALL,
            children: u.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA,
          });
        },
        g = (e) => {
          let { quest: t, useReducedMotion: n, isExpanded: a } = e,
            l = (0, c.hf)({ quest: t, location: r.jn.QUEST_BAR_V2 });
          return (0, s.jsx)(o.ShinyButton, {
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            onClick: l,
            pauseAnimation: n || !a,
            className: p.cta,
            buttonShineClassName: p.shine,
            children: u.Z.Messages.QUESTS_CLAIM_REWARD,
          });
        },
        _ = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: o,
              isExpanded: a,
              awaitingConsoleConnections: l,
              hasMadeProgress: c,
              isProgressing: u,
              activeScreen: p,
            } = e,
            _ =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            C = (0, i.P)({ location: d.dr.QUESTS_BAR });
          if (_)
            return (0, s.jsx)(g, {
              quest: n,
              useReducedMotion: o,
              isExpanded: a,
            });
          if (p === r.LI.CONSOLE && l && !C) return (0, s.jsx)(m, { quest: n });
          if (p !== r.LI.SELECT && !c && !u) return (0, s.jsx)(x, { quest: n });
          return null;
        };
      function C(e) {
        return (0, s.jsxs)("div", {
          className: p.ctaButtons,
          children: [
            e.showBackButton &&
              (0, s.jsx)(o.Button, {
                className: p.backButton,
                innerClassName: p.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, s.jsx)(o.ChevronSmallLeftIcon, {
                  className: p.backIcon,
                }),
              }),
            (0, s.jsx)(_, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(120356),
        r = n.n(a),
        l = n(338545),
        i = n(481060),
        c = n(569379),
        d = n(642145),
        u = n(416744);
      t.Z = o.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: o,
            size: a = 42,
            strokeWidth: p = 3,
            glowBlur: x = 0.4,
            percentCompleteText: m,
            children: g,
          } = e,
          _ = (0, c.EK)(n, o > 0),
          C = a / 2,
          f = a / 2 - p / 2,
          h = 2 * Math.PI * f,
          E = h - o * h,
          T = {
            strokeDasharray: "".concat(h, " ").concat(h),
            strokeDashoffset: E,
          },
          S = {
            strokeDasharray: "".concat(h, " ").concat(h),
            strokeDashoffset: -o * h,
          },
          v = { boxShadow: "0 0 30px 0px ".concat(_.glow) },
          { progressTextAnimation: A } = (0, i.useSpring)({
            progressTextAnimation: null != m && 1 !== o ? 1 : 0,
            config: d.Y,
          });
        return (0, s.jsxs)("div", {
          className: u.outer,
          ref: t,
          children: [
            (0, s.jsxs)("div", {
              className: u.inner,
              style: v,
              children: [
                g,
                (0, s.jsxs)(l.animated.div, {
                  style: { opacity: A },
                  className: r()(u.coverContent, u.progressTextWrapper),
                  children: [
                    (0, s.jsx)("div", {
                      className: r()(u.coverContent, u.progressTextOverlay),
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
              height: a,
              width: a,
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
                  style: S,
                }),
                (0, s.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: f,
                  cx: C,
                  cy: C,
                  stroke: _.foreground,
                  style: T,
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
        a = n(120356),
        r = n.n(a),
        l = n(887024),
        i = n(699581),
        c = n(338545),
        d = n(442837),
        u = n(110924),
        p = n(607070),
        x = n(819640),
        m = n(569379),
        g = n(675654),
        _ = n(301095),
        C = n(197857);
      let f = ["#51BC9D"];
      t.Z = (e) => {
        var t;
        let {
            expansionSpring: n,
            overlayRef: a,
            quest: h,
            progressBarRef: E,
            isExpanded: T,
          } = e,
          { completionSpring: S, startCompletionAnimation: v } = (0, m.GX)(),
          A =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          N = o.useRef(!1),
          j = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          B = o.useRef(null),
          b = (0, d.e7)([x.Z], () => x.Z.hasLayers()),
          R = (0, u.Z)(b),
          [y, I] = o.useState(null),
          [k, M] = o.useState(null),
          O = o.useRef(new l.qA({ gravity: 0, wind: 0 })),
          U = (0, l.uR)(y, k),
          L = o.useCallback(() => {
            if (j) return;
            let e = E.current,
              t = B.current;
            if (null != t && null != e && U.isReady) {
              var n, s, o, a;
              let { x: r, y: l } = e.getBoundingClientRect(),
                { x: i, y: c } = t.getBoundingClientRect();
              U.createMultipleConfetti(
                ((n = r - i),
                (s = l - c),
                (o = e.clientHeight),
                (a = e.clientWidth),
                {
                  ...g.We,
                  position: {
                    type: "static-random",
                    minValue: { x: n, y: s },
                    maxValue: { x: n + o, y: s + a },
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
          q = (0, u.Z)(T);
        return (o.useEffect(() => {
          A && T && !q && (v(), L());
        }, [T, A, v, L, q]),
        o.useEffect(() => {
          A &&
            !b &&
            R &&
            setTimeout(() => {
              v(), L();
            }, 200);
        }, [A, R, b, v, L]),
        o.useEffect(() => {
          if (!!U.isReady) !N.current && A && (v(), L()), (N.current = A);
        }, [A, N, L, v, U]),
        j)
          ? null
          : (0, s.jsxs)("div", {
              className: _.wrapper,
              "aria-hidden": "true",
              ref: B,
              children: [
                (0, s.jsx)(c.animated.div, {
                  className: _.background,
                  style: { opacity: S },
                }),
                (0, s.jsx)(c.animated.div, {
                  className: r()(_.borders, _.bordersTopLeft),
                  style: { opacity: S },
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
                      ref: M,
                      sprites: [C],
                      colors: f,
                      spriteWidth: g.Ko,
                      spriteHeight: g.Ko,
                    }),
                    null != a.current &&
                      (0, i.createPortal)(
                        (0, s.jsx)(c.animated.div, {
                          className: r()(_.borders, _.bordersBottom),
                          style: { opacity: S },
                        }),
                        a.current,
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
        a = n(120356),
        r = n.n(a),
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
        T = n(981631),
        S = n(689938),
        v = n(627196);
      function A(e) {
        let { children: t, isComplete: n, hasNextStep: o } = e;
        return (0, s.jsxs)("li", {
          className: r()(
            v.stepWrapper,
            { [v.stepWrapperComplete]: n },
            { [v.stepWrapperWithNextStep]: o },
          ),
          children: [
            (0, s.jsxs)("div", {
              className: v.stepIndicator,
              children: [
                (0, s.jsx)("div", {
                  className: v.stepIconWrapper,
                  children:
                    n &&
                    (0, s.jsx)(c.CheckmarkLargeBoldIcon, {
                      className: v.stepIcon,
                      color: c.tokens.colors.WHITE,
                    }),
                }),
                o && (0, s.jsx)("div", { className: v.stepConnector }),
              ],
            }),
            (0, s.jsx)("div", { className: v.stepContent, children: t }),
          ],
        });
      }
      function N(e) {
        return (0, s.jsx)(c.Text, {
          className: v.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e.children,
        });
      }
      function j(e) {
        let { quest: t, useReducedMotion: n } = e,
          a = (0, x.n)(),
          i = (0, f.k3)(t.id, g.jn.QUEST_BAR_V2),
          d = (0, f.g2)({ useReducedMotion: n }),
          {
            errorHints: h,
            startingConsoleQuest: A,
            startConsoleQuest: j,
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
          { header: B, renderBody: b } = o.useMemo(() => {
            let e = h.length > 0,
              n = () =>
                (0, s.jsx)(s.Fragment, {
                  children: h.map((e, n) => {
                    if (e.type === l.K.EXPIRED_CREDENTIAL && a) {
                      let o = u.Z.getAccount(
                          e.connected_account_id,
                          e.connected_account_type,
                        ),
                        a = (0, _.C9)(e),
                        r = (0, _._j)(e),
                        l = r === T.ABu.XBOX;
                      return (0, s.jsx)(
                        N,
                        {
                          children: a.format({
                            account_name: null == o ? void 0 : o.name,
                            onClick: () => {
                              (0, _.fY)(
                                { quest: t, showInline: l, platformType: r },
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
                    return (0, s.jsx)(N, { children: e.message }, n);
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
                        className: v.microphoneUnitBodyText,
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
                      className: v.microphoneUnitBodyText,
                      color: "text-muted",
                      variant: "text-xxs/normal",
                      children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format(
                        { gameTitle: o },
                      ),
                    }),
            };
          }, [t, h, a]);
        return (0, s.jsxs)("div", {
          className: v.microphoneUnit,
          children: [
            (0, s.jsxs)("div", {
              className: v.microphoneUnitHeader,
              children: [
                (0, s.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === h.length ? v.warningCircle : v.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, s.jsx)(c.Text, { variant: "text-xs/medium", children: B }),
                (0, s.jsx)(c.Clickable, {
                  className: r()(v.microphoneUnitRefreshIconWrapper, {
                    [v.disabled]: A,
                  }),
                  onClick: () => j(),
                  children: d.render(),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: r()({ [v.opacity_50]: A }),
              children: [
                b(),
                0 === h.length ? null : (0, s.jsx)(N, { children: i }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        let { text: t } = e;
        return (0, s.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-xs/medium",
          children: t,
        });
      }
      t.Z = function (e) {
        let { quest: t, taskDetails: n } = e,
          a = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
          r = (0, m.z6)(),
          {
            steps: l,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: x,
          } = o.useMemo(() => {
            var e;
            let o = r.xboxAndPlaystationAccounts.length > 0,
              a = o && (0, _.Bz)(t),
              l = (0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
              i = C.r.build(t.config).application.name,
              c =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, s.jsx)(h.Q, { ...r, quest: t }),
                  isComplete: o || a || c,
                },
                {
                  renderContent: () =>
                    (0, s.jsx)(B, {
                      text: l
                        ? S.Z.Messages
                            .QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME
                        : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format(
                            { gameTitle: i },
                          ),
                    }),
                  isComplete: a || c,
                },
                {
                  renderContent: () =>
                    (0, s.jsx)(B, {
                      text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format(
                        { numMinutes: n.targetMinutes },
                      ),
                    }),
                  isComplete: c,
                },
              ],
              hasConnectedAccounts: o,
              isProgressingQuestForLaunchedGame: a,
              isQuestComplete: c,
            };
          }, [r, t, n]);
        return (0, s.jsxs)("div", {
          className: v.wrapper,
          children: [
            (0, s.jsx)("div", {
              className: v.headingWrapper,
              children: (0, s.jsx)(c.Heading, {
                className: v.heading,
                variant: "text-xs/medium",
                children:
                  S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING,
              }),
            }),
            (0, s.jsxs)("div", {
              className: v.stepsWrapper,
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
                  (0, s.jsx)(j, { useReducedMotion: a, quest: t }),
              ],
            }),
          ],
        });
      };
    },
    743294: function (e, t, n) {
      n.d(t, {
        Li: function () {
          return a;
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
        a = 12;
    },
    457153: function (e, t, n) {
      var s = n(735250),
        o = n(470079),
        a = n(120356),
        r = n.n(a),
        l = n(338545),
        i = n(95985),
        c = n(596282);
      let d = o.forwardRef(function (e, t) {
        var n;
        let {
            className: a,
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
          className: r()(a, c.contentCollapsed, {
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
        a = n(120356),
        r = n.n(a),
        l = n(338545),
        i = n(278074),
        c = n(442837),
        d = n(481060),
        u = n(70097),
        p = n(358085),
        x = n(617136),
        m = n(272008),
        g = n(113434),
        _ = n(569984),
        C = n(497505),
        f = n(918701),
        h = n(988303),
        E = n(302245),
        T = n(665430),
        S = n(585500),
        v = n(644646),
        A = n(78826),
        N = n(670638),
        j = n(693900),
        B = n(776263),
        b = n(759853),
        R = n(205511),
        y = n(95985),
        I = n(50476),
        k = n(658590),
        M = n(740697),
        O = n(46140),
        U = n(743294),
        L = n(689938),
        q = n(159296);
      let w = o.forwardRef(function (e, t) {
        var n, a;
        let {
            children: w,
            className: Z,
            collapsedHeight: P,
            isExpanded: Q,
            isExpansionAnimationComplete: W,
            expansionSpring: D,
            onCtxMenuOpen: H,
            onCtxMenuClose: V,
            onCtxMenuSelect: z,
            overlayRef: G,
            quest: F,
            useReducedMotion: Y,
            taskDetails: K,
          } = e,
          X = o.useRef(null),
          J = (0, c.e7)([_.Z], () => _.Z.isEnrolling(F.id), [F]),
          $ = (0, g.B6)(F.config.expiresAt),
          ee = o.useMemo(() => (0, f.nP)(F.config.assets.questBarHero), [F]),
          et = o.useCallback(() => {
            (0, m.AH)(F.id, {
              questContent: C.jn.QUEST_BAR_V2,
              questContentCTA: x.jZ.ACCEPT_QUEST,
            });
          }, [F]),
          en = (0, T.p)({ location: O.dr.QUESTS_BAR }),
          { primaryVariant: es } = h.u.useExperiment(
            { location: O.dr.QUESTS_BAR },
            { autoTrackExposure: !1 },
          ),
          eo =
            (null === (n = F.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ea =
            (null === (a = F.userStatus) || void 0 === a
              ? void 0
              : a.completedAt) != null,
          er = Q && W,
          el = (0, g._s)({ quest: F }),
          ei = K.percentComplete > 0,
          ec = (0, g.z)(F),
          [ed, eu, ep] = (0, g.me)(F, K),
          ex = (0, f.ph)(F),
          em = (0, S.D)({
            quest: F,
            location: O.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: K,
            useV2Variants: es === h.P.V2 || (0, k.a)(F),
          }),
          eg = (0, E.vI)(F, O.dr.QUESTS_BAR, !0);
        return (0, s.jsxs)(l.animated.div, {
          "aria-hidden": !er,
          className: r()(Z, q.contentExpanded, {
            [q.contentInteractable]: er,
            [q.contentExpandedAccepted]: eo,
          }),
          style: {
            transform: (0, l.to)(
              [
                D.to({ range: [0, 1], output: [0, -100] }),
                D.to({ range: [0, 1], output: [0, P] }),
              ],
              (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
          },
          children: [
            eo &&
              (0, s.jsx)(l.animated.div, {
                className: r()(
                  q.postEnrollmentBackground,
                  q.postEnrollmentBackgroundCollapsed,
                ),
                style: {
                  backgroundImage: "linear-gradient(90deg, "
                    .concat(U.aY, ", ")
                    .concat(U.v6, ")"),
                  opacity: D.to({ range: [0, 1], output: [1, 0] }),
                },
              }),
            w,
            (0, s.jsx)(l.animated.div, {
              style: { opacity: 1 },
              children: eo
                ? (0, s.jsxs)("div", {
                    className: q.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, s.jsxs)("div", {
                        className: q.questAcceptedHeader,
                        children: [
                          (0, s.jsx)(d.Text, {
                            variant: "text-xxs/medium",
                            className: r()(q.flex, q.headerText),
                            children:
                              L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                                expirationDate: $,
                              }),
                          }),
                          (0, s.jsx)(N.r, {
                            onOpen: H,
                            onClose: V,
                            onSelect: z,
                            questContent: C.jn.QUEST_BAR_V2,
                            quest: F,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, s.jsx)(d.Clickable, {
                                ...e,
                                className: q.submenuWrapper,
                                "aria-label": L.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: r()(
                                    q.submenuIcon,
                                    q.interactiveNormal,
                                  ),
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: q.divider }),
                      (0, s.jsx)(b.Z, {
                        expansionSpring: D,
                        overlayRef: G,
                        progressBarRef: X,
                        quest: F,
                        isExpanded: Q,
                      }),
                      (0, s.jsx)(y.Z, {
                        contentLocation: "expanded",
                        quest: F,
                        progressBarRef: X,
                        isExpanded: !0,
                        taskDetails: K,
                        activeScreen: ed,
                      }),
                      (0, s.jsx)(j.n, {
                        children:
                          !ea &&
                          (0, i.EQ)(ed)
                            .with(C.LI.SELECT, () =>
                              (0, s.jsx)(I.Z, {
                                onConsole: () => ep(O.cd.CONSOLE),
                                onDesktop: () => ep(O.cd.DESKTOP),
                              }),
                            )
                            .with(
                              C.LI.DESKTOP,
                              () => (0, p.isWeb)() && en && (0, s.jsx)(M.Z, {}),
                            )
                            .with(C.LI.CONSOLE, () =>
                              (0, s.jsx)(R.Z, { quest: F, taskDetails: K }),
                            )
                            .exhaustive(),
                      }),
                      (0, s.jsx)(j.n, {
                        children: (0, s.jsx)(B.y, {
                          quest: F,
                          useReducedMotion: Y,
                          isExpanded: Q,
                          awaitingConsoleConnections: el,
                          hasMadeProgress: ei,
                          isProgressing: ec,
                          activeScreen: ed,
                          showBackButton:
                            ed !== C.LI.SELECT &&
                            eu.length > 1 &&
                            !ei &&
                            !ec &&
                            en,
                          onBack: () => ep(null),
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)("div", {
                    children: (0, s.jsxs)("div", {
                      className: q.questPromoContent,
                      ref: t,
                      children: [
                        (0, s.jsxs)("div", {
                          className: q.details,
                          children: [
                            (0, s.jsx)(v.Z, {
                              className: r()(q.rewardTile, {
                                [q.hiddenRewardTile]: eg,
                              }),
                              learnMoreStyle: "text",
                              quest: F,
                              questContent: C.jn.QUEST_BAR_V2,
                              location: O.dr.QUESTS_BAR,
                            }),
                            (0, s.jsx)(d.Heading, {
                              className: q.title,
                              variant: "heading-md/medium",
                              children: L.Z.Messages.QUESTS_TITLE.format({
                                questName: F.config.messages.questName,
                              }),
                            }),
                            (0, s.jsx)(d.Text, {
                              className: q.description,
                              variant: "text-xs/normal",
                              children: em,
                            }),
                          ],
                        }),
                        (0, s.jsx)(d.Button, {
                          className: q.cta,
                          color: d.Button.Colors.BRAND,
                          fullWidth: !0,
                          onClick: er ? et : void 0,
                          size: d.Button.Sizes.SMALL,
                          submitting: J,
                          children: L.Z.Messages.QUESTS_ACCEPT_QUEST,
                        }),
                      ],
                    }),
                  }),
            }),
            eo
              ? (0, s.jsx)("div", {
                  className: r()(
                    q.postEnrollmentBackground,
                    q.postEnrollmentBackgroundExpanded,
                  ),
                  style: {
                    backgroundImage: "linear-gradient(90deg, "
                      .concat(U.aY, ", ")
                      .concat(U.v6, ")"),
                  },
                })
              : (0, s.jsxs)(l.animated.div, {
                  className: q.heroAssetWrapper,
                  style: {
                    backdropFilter: D.to([0, 1], [5, 0]).to((e) =>
                      "blur(".concat(e, "px)"),
                    ),
                    filter: D.to([0, 1], [0.8, 1]).to((e) =>
                      "brightness(".concat(e, ")"),
                    ),
                    borderRadius: eg ? "12px 12px 0 0" : "8px 8px 0 0",
                  },
                  children: [
                    (0, s.jsx)(l.animated.div, {
                      className: q.heroAssetDarken,
                      style: { opacity: D.to([0, 1], [1, 0]) },
                    }),
                    (0, s.jsx)(l.animated.div, {
                      className: q.heroAssetTint,
                      style: {
                        backgroundColor: F.config.colors.primary,
                        opacity: D.to([0, 1], [1, 0]),
                      },
                    }),
                    ee
                      ? (0, s.jsx)(A.Fl, {
                          id: "QuestBarV2ContentExpanded_heroAnimated",
                          children: (e) =>
                            (0, s.jsx)(u.Z, {
                              ref: e,
                              autoPlay: !Y,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: q.heroAsset,
                              controls: !1,
                              children: (0, s.jsx)("source", {
                                src: ex,
                                type: (0, f.mN)(ex),
                              }),
                            }),
                        })
                      : (0, s.jsx)(A.Fl, {
                          id: "QuestBarV2ContentExpanded_heroStatic",
                          children: (e) =>
                            (0, s.jsx)("img", {
                              ref: e,
                              alt: "",
                              className: q.heroAsset,
                              src: ex,
                            }),
                        }),
                    (0, s.jsx)(l.animated.div, {
                      className: q.legibilityGradient,
                      style: {
                        opacity: D.to({ range: [0, 1], output: [0, 1] }),
                      },
                    }),
                  ],
                }),
          ],
        });
      });
      t.Z = w;
    },
    569379: function (e, t, n) {
      n.d(t, {
        EK: function () {
          return h;
        },
        GX: function () {
          return f;
        },
        eQ: function () {
          return _;
        },
        vf: function () {
          return C;
        },
      }),
        n(47120);
      var s = n(470079),
        o = n(442837),
        a = n(481060),
        r = n(410030),
        l = n(706454),
        i = n(930153),
        c = n(113434),
        d = n(497505),
        u = n(918701),
        p = n(585500),
        x = n(566078),
        m = n(46140),
        g = n(689938);
      function _(e) {
        var t, n;
        let s = (0, o.e7)([l.default], () => l.default.locale),
          { percentComplete: a } = (0, c.Rf)(e);
        if (
          (null === (t = e.userStatus) || void 0 === t
            ? void 0
            : t.completedAt) != null
        )
          return g.Z.Messages.QUESTS_COMPLETION_COMPLETE;
        if (
          (null === (n = e.userStatus) || void 0 === n
            ? void 0
            : n.enrolledAt) != null &&
          a > 0
        ) {
          let e = (0, i.T3)(s, a, { roundingMode: "floor" });
          return g.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED_V2.format({
            percent: e,
          });
        }
        return (0, u.$J)(e)
          ? g.Z.Messages.QUEST_BAR_TITLE_START_PLAYING
          : g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
      }
      function C(e, t, n) {
        var s;
        let o = (0, c.B6)(x.r.build(e.config).rewardsExpireAt),
          a = (0, c.Rf)(e),
          r =
            (null === (s = e.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          l = (0, c.z)(e),
          i = (0, p.D)({
            quest: e,
            location: m.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: a,
            useV2Variants: !0,
          });
        if (r)
          return g.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
            expirationDate: o,
          });
        if (t)
          return n === d.LI.SELECT
            ? g.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE
            : i;
        if (a.percentComplete > 0)
          return l
            ? (0, u.AV)({ quest: e, taskDetails: a })
            : g.Z.Messages.QUEST_BAR_TITLE_START_PLAYING;
        return g.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED_SUBTITLE;
      }
      function f() {
        let [{ spring: e }, t] = (0, a.useSpring)(
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
          o = null !== (n = (0, r.i6)()) && void 0 !== n ? n : 0,
          a = "var(--green-330)",
          l = ["var(--background-tertiary)", "var(--interactive-normal)"],
          i = t ? l[o] : ["#828288", "#CBCDD4"][o];
        return {
          backgroundTop: i,
          backgroundBottom: t ? l[o] : ["#535356", "#8B8C95"][o],
          foreground: a,
          glow: t && s ? a : "#C4C1D66E",
        };
      }
    },
    95985: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(481060),
        a = n(497505),
        r = n(644646),
        l = n(613087),
        i = n(472144),
        c = n(569379),
        d = n(46140),
        u = n(596282);
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
                  children: (0, s.jsx)(r.Z, {
                    className: u.questProgressRewardTile,
                    quest: n,
                    questContent: a.jn.QUEST_BAR_V2,
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
      var o = n(338545),
        a = n(481060),
        r = n(497505),
        l = n(302245),
        i = n(644646),
        c = n(46140),
        d = n(689938),
        u = n(627516);
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
                    questContent: r.jn.QUEST_BAR_V2,
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
                      children: (0, s.jsx)(a.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        children: C,
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(o.animated.div, {
                  className: u.giftBoxIcon,
                  style: { opacity: n.to({ range: [0, 1], output: [1, 0] }) },
                  children: (0, s.jsx)(a.GiftIcon, {
                    size: "md",
                    color: a.tokens.colors.WHITE,
                  }),
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
        a = n(338545),
        r = n(613087);
      function l(e) {
        let { expansionSpring: t, isExpanded: n } = e,
          {
            animatedComponentProps: l,
            recalculateAnimationPositions: i,
            mountPoints: c,
          } = o.useContext(r.B$);
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
                  expandedLeft: r,
                  collapsedTop: l,
                  expandedTop: i,
                  width: d,
                } = e,
                u = c.get(n);
              return (0, s.jsx)(
                a.animated.div,
                {
                  ref: u,
                  style: {
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: d,
                    transform: (0, a.to)(
                      [
                        t.to({ range: [0, 1], output: [o, r] }),
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
        a = n(689938),
        r = n(173074);
      function l(e) {
        let { onClick: t, children: n } = e;
        return (0, s.jsx)(o.Button, {
          onClick: t,
          className: r.button,
          innerClassName: r.buttonInner,
          look: "blank",
          children: n,
        });
      }
      t.Z = function (e) {
        let { onDesktop: t, onConsole: n } = e;
        return (0, s.jsxs)("div", {
          className: r.buttons,
          children: [
            (0, s.jsxs)(l, {
              onClick: t,
              children: [
                a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                (0, s.jsx)(o.ScreenIcon, {}),
              ],
            }),
            (0, s.jsxs)(l, {
              onClick: n,
              children: [
                a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                (0, s.jsx)(o.GameControllerIcon, {}),
              ],
            }),
          ],
        });
      };
    },
    658590: function (e, t, n) {
      n.d(t, {
        a: function () {
          return a;
        },
      });
      var s = n(918701),
        o = n(46140);
      let a = (e) => {
        let t = "1193992107035983872" === e.id,
          n = (0, s.zK)(e, o.S7.IN_HOUSE_CONSOLE_QUEST),
          a = (0, s.zK)(e, o.S7.MOBILE_CONSOLE_QUEST);
        return t || n || a;
      };
    },
    740697: function (e, t, n) {
      var s = n(735250);
      n(470079);
      var o = n(481060),
        a = n(689938),
        r = n(571141);
      t.Z = function () {
        return (0, s.jsxs)("div", {
          className: r.card,
          children: [
            (0, s.jsxs)("div", {
              className: r.header,
              children: [
                (0, s.jsx)(o.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: r.icon,
                  width: 16,
                  height: 16,
                }),
                (0, s.jsx)(o.Heading, {
                  color: "always-white",
                  variant: "heading-sm/medium",
                  children: a.Z.Messages.QUEST_BAR_WEB_WARNING_HEADER,
                }),
              ],
            }),
            (0, s.jsx)(o.Text, {
              color: "text-muted",
              variant: "text-xs/normal",
              children: a.Z.Messages.QUEST_BAR_WEB_WARNING_BODY,
            }),
          ],
        });
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
        a = n(941348),
        r = n(658590),
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
          component: a.Z,
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
          var a;
          let l =
              (null === (a = e.userStatus) || void 0 === a
                ? void 0
                : a.enrolledAt) != null,
            i = (!l && t === o.P.V2) || (l && n === o.P.V2) || (0, r.a)(e),
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
        a = n(100805),
        r = n(988953);
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
        return (0, s.jsx)(a.Z, {
          expansionSpring: l,
          className: r.content,
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
            className: r.content,
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
        a = n(120356),
        r = n.n(a),
        l = n(392711),
        i = n.n(l),
        c = n(442837),
        d = n(481060),
        u = n(451478),
        p = n(302221),
        x = n(869448);
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
            className: a,
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
          T =
            (null === (t = l.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          S = !i && g;
        o.useEffect(() => {
          var e, t, n, s;
          g
            ? S &&
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
        }, [S, g]);
        let v = o.useCallback(() => {
          h(!0);
        }, []);
        return null == E || T
          ? (0, s.jsx)("div", {
              className: x.backgroundFallback,
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(l.config.colors.primary, ", ")
                  .concat(l.config.colors.secondary, ")"),
              },
            })
          : (0, s.jsx)("div", {
              className: r()(x.lottieAnimationBackgroundWrapper, a),
              children: (0, s.jsx)(
                d.LottieAnimation,
                {
                  ref: C,
                  onComplete: v,
                  importData: () => E,
                  shouldAnimate: !f && S,
                  className: r()(
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
        a = n.n(o),
        r = n(338545),
        l = n(481060),
        i = n(113434),
        c = n(497505),
        d = n(685613),
        u = n(340100),
        p = n(644646),
        x = n(788284),
        m = n(46140),
        g = n(689938),
        _ = n(168998);
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
          T =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { percentComplete: S } = (0, i.Rf)(h),
          v = (0, i.Jf)(h),
          A = null != v ? v.completedRatio > 0 : S > 0;
        return (0, s.jsxs)(r.animated.div, {
          "aria-hidden": C && f,
          className: a()(n, _.contentCollapsed, {
            [_.contentCollapsedExpanded]: C,
            [_.contentCollapsedAccepted]: T,
          }),
          style: { opacity: o.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, s.jsx)(x.Z, { quest: h, useReducedMotion: E }),
            (0, s.jsx)("div", {
              className: _.contentCollapsedWrapper,
              children: T
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
                      A
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
        a = n(120356),
        r = n.n(a),
        l = n(338545),
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
        T = n(865364),
        S = n(585500),
        v = n(566078),
        A = n(340100),
        N = n(611855),
        j = n(644646),
        B = n(78826),
        b = n(670638),
        R = n(667105),
        y = n(46140),
        I = n(981631),
        k = n(701488),
        M = n(689938),
        O = n(919812);
      let U = o.forwardRef(function (e, t) {
        var n, a;
        let {
            children: T,
            className: U,
            collapsedHeight: q,
            expansionSpring: w,
            isExpanded: Z,
            isExpansionAnimationComplete: P,
            onCtxMenuOpen: Q,
            onCtxMenuClose: W,
            onCtxMenuSelect: D,
            quest: H,
            useReducedMotion: V,
          } = e,
          z = (0, i.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]),
          G = (0, C.B6)(H.config.expiresAt),
          F = v.r.build(H.config),
          Y = (0, C.B6)(F.rewardsExpireAt),
          K = o.useMemo(() => (0, E.nP)(H.config.assets.questBarHero), [H]),
          X = (0, R.tP)(F.application.id),
          J = F.features.has(y.S7.START_QUEST_CTA)
            ? g.jZ.START_QUEST
            : g.jZ.ACCEPT_QUEST,
          $ = F.features.has(y.S7.START_QUEST_CTA)
            ? M.Z.Messages.QUESTS_START_QUEST
            : M.Z.Messages.QUESTS_ACCEPT_QUEST,
          ee = o.useCallback(() => {
            (0, _.AH)(H.id, {
              questContent: h.jn.QUEST_BAR,
              questContentCTA: J,
            }),
              F.features.has(y.S7.START_QUEST_CTA) &&
                (0, x.uL)(I.Z5c.ACTIVITY_DETAILS(k.In), void 0);
          }, [H, J, F.features]),
          et = (0, R.hf)({ quest: H, location: h.jn.QUEST_BAR }),
          en = o.useCallback(() => {
            (0, E.FE)(H, {
              content: h.jn.QUEST_BAR,
              ctaContent: g.jZ.OPEN_GAME_LINK,
            });
          }, [H]),
          es = F.features.has(y.S7.POST_ENROLLMENT_CTA),
          eo = (0, C.Rf)(H),
          ea = (0, C.Jf)(H),
          er = null != ea ? ea.progress > 0 : eo.progressSeconds > 0,
          el =
            (null === (n = H.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ei =
            (null === (a = H.userStatus) || void 0 === a
              ? void 0
              : a.completedAt) != null,
          ec = o.useMemo(() => (0, E.Xv)(H.config), [H.config]),
          ed = Z && P,
          eu = (0, E.ph)(H),
          ep = (0, S.D)({
            quest: H,
            taskDetails: eo,
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
          className: r()(U, O.contentExpanded, { [O.contentInteractable]: ed }),
          style: {
            backgroundColor: H.config.colors.secondary,
            transform: ei
              ? void 0
              : (0, l.to)(
                  [
                    w.to({ range: [0, 1], output: [0, -100] }),
                    w.to({ range: [0, 1], output: [0, q] }),
                  ],
                  (e, t) =>
                    "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                ),
          },
          children: [
            T,
            (0, s.jsx)("div", {
              "aria-hidden": !ed,
              children: el
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
                                      taskDetails: eo,
                                      thirdPartyTaskDetails:
                                        null != ea ? ea : void 0,
                                    }),
                                  }),
                                  (0, s.jsx)(u.Text, {
                                    className:
                                      O.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: ei
                                      ? M.Z.Messages.QUESTS_CLAIM_BY_DATE.format(
                                          { expirationDate: Y },
                                        )
                                      : M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                          { expirationDate: G },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(b.r, {
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
                                "aria-label": M.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: O.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      ei
                        ? (0, s.jsx)(u.Button, {
                            className: r()(O.cta, O.ctaClaimReward),
                            style: ec ? em : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: et,
                            size: u.Button.Sizes.NONE,
                            children: M.Z.Messages.QUESTS_CLAIM_REWARD,
                          })
                        : (0, s.jsx)(u.Text, {
                            className: O.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ep,
                          }),
                      (0, s.jsx)(A.Z, { quest: H }),
                      !ex &&
                        !er &&
                        !X &&
                        es &&
                        (0, s.jsx)(L, { onClick: ed ? en : void 0 }),
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
                              (0, s.jsx)(b.r, {
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
                                    "aria-label": M.Z.Messages.ACTIONS,
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
                                children: M.Z.Messages.QUESTS_TITLE.format({
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
                            onClick: ed ? ee : void 0,
                            size: u.Button.Sizes.NONE,
                            submitting: z,
                            children: $,
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: O.heroAssetWrapper,
                        style: { color: H.config.colors.secondary },
                        children: K
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
                                    src: eu,
                                    type: (0, E.mN)(eu),
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
                                  src: eu,
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
        return (0, T.O)({ location: y.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, s.jsx)(u.Button, {
              className: O.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: M.Z.Messages.QUESTS_GET_THIS_GAME,
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
    59596: function (e, t, n) {
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
    657213: function (e, t, n) {
      e.exports = { content: "content_fb2cb3", overlay: "overlay_fb2cb3" };
    },
    91242: function (e, t, n) {
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
        promotedBadge: "promotedBadge_efa999",
        promotedBadgeIcon: "promotedBadgeIcon_efa999",
        background: "background_efa999",
        backgroundAnimation: "backgroundAnimation_efa999",
        backgroundWrapper: "backgroundWrapper_efa999",
      };
    },
    575137: function (e, t, n) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    416744: function (e, t, n) {
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
    301095: function (e, t, n) {
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
    627196: function (e, t, n) {
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
    596282: function (e, t, n) {
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
    159296: function (e, t, n) {
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
    627516: function (e, t, n) {
      e.exports = {
        rewardTileContainer: "rewardTileContainer_eb16c5",
        rewardTileSpacer: "rewardTileSpacer_eb16c5",
        rewardHighlightLogoCTA: "rewardHighlightLogoCTA_eb16c5",
        partnerBranding: "partnerBranding_eb16c5",
        rewardHighlightCTA: "rewardHighlightCTA_eb16c5",
        giftBoxIcon: "giftBoxIcon_eb16c5",
      };
    },
    173074: function (e, t, n) {
      e.exports = {
        buttons: "buttons_c5505e",
        button: "button_c5505e",
        buttonInner: "buttonInner_c5505e",
      };
    },
    571141: function (e, t, n) {
      e.exports = {
        card: "card_e511fd",
        header: "header_e511fd",
        icon: "icon_e511fd",
      };
    },
    988953: function (e, t, n) {
      e.exports = { content: "content_dac7ec" };
    },
    869448: function (e, t, n) {
      e.exports = {
        lottieAnimation: "lottieAnimation_ff9919",
        backgroundFallback: "backgroundFallback_ff9919",
        lottieAnimationBackgroundWrapper:
          "lottieAnimationBackgroundWrapper_ff9919",
        lottieAnimationBackground: "lottieAnimationBackground_ff9919",
      };
    },
    168998: function (e, t, n) {
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
    919812: function (e, t, n) {
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
//# sourceMappingURL=958b10628cf0b9dd53de.js.map
