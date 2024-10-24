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
          return o.T;
        },
      });
      var o = n(987138);
    },
    179839: function (e, t, n) {
      n.d(t, {
        M: function () {
          return o.M;
        },
      });
      var o = n(210730);
    },
    865364: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var o = n(818083),
        s = n(977156);
      let r = (0, o.B)({
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
            o = (0, s.Zy)({ location: t }),
            { enabled: a } = r.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return o && a;
        };
    },
    988303: function (e, t, n) {
      n.d(t, {
        P: function () {
          return s;
        },
        u: function () {
          return a;
        },
      });
      var o,
        s,
        r = n(818083);
      ((o = s || (s = {}))[(o.V1 = 0)] = "V1"), (o[(o.V2 = 1)] = "V2");
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
          return s;
        },
      });
      let o = (0, n(818083).B)({
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
        s = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e,
            { enabled: s } = o.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return s;
        };
    },
    585857: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return T;
        },
      });
      var o = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(54042),
        l = n(179839),
        i = n(481060),
        c = n(230711),
        d = n(231757),
        u = n(617136),
        p = n(497505),
        m = n(796111),
        x = n(46140),
        C = n(981631),
        g = n(689938),
        _ = n(181284);
      function f(e) {
        let { quest: t, isConnected: n, consoleType: s } = e;
        return (0, o.jsx)(i.Clickable, {
          className: _.connectConsoleButtonWrapper,
          onClick: () => {
            (0, u._3)({
              questId: t.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.CONNECT_CONSOLE,
            }),
              (0, d.Z)({ platformType: s });
          },
          children:
            s === C.ABu.PLAYSTATION
              ? (0, o.jsx)(a.T, {
                  colorClass: r()(
                    _.connectConsoleButton,
                    n
                      ? _.playstationButtonConnected
                      : _.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                })
              : (0, o.jsx)(l.M, {
                  colorClass: r()(
                    _.connectConsoleButton,
                    n
                      ? _.xboxButtonConnected
                      : _.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                }),
        });
      }
      function h(e) {
        let { text: t, quest: n } = e;
        return (0, o.jsx)(i.Clickable, {
          className: _.showConnectionsButton,
          onClick: () => {
            (0, u._3)({
              questId: n.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
            }),
              c.Z.open(C.oAB.CONNECTIONS);
          },
          children: (0, o.jsx)(i.Text, {
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
            playstationAccounts: s,
            xboxAndPlaystationAccounts: a,
          } = e,
          l = a.slice(0, 2),
          c = a.length > 0,
          d = n.length > 0,
          u = s.length > 0;
        return (0, o.jsxs)("div", {
          className: _.inlineConsoleConnectionDetails,
          children: [
            (0, o.jsxs)("div", {
              className: _.inlineConsoleConnectionDetailsUpper,
              children: [
                (0, o.jsx)(i.Text, {
                  color: "header-secondary",
                  variant: "text-xxs/normal",
                  children: c
                    ? g.Z.Messages.QUESTS_CONNECTED
                    : g.Z.Messages.QUESTS_SELECT_TO_START,
                }),
                (0, o.jsxs)("div", {
                  className: _.inlineConsoleConnectionDetailsIcons,
                  children: [
                    (0, o.jsx)(f, {
                      consoleType: C.ABu.PLAYSTATION,
                      isConnected: u,
                      quest: t,
                    }),
                    (0, o.jsx)("div", { className: _.consoleIconDivider }),
                    (0, o.jsx)(f, {
                      consoleType: C.ABu.XBOX,
                      isConnected: d,
                      quest: t,
                    }),
                  ],
                }),
              ],
            }),
            c &&
              (0, o.jsxs)("div", {
                className: _.inlineConsoleConnectionDetailsLower,
                children: [
                  l.map((e, t) =>
                    (0, o.jsxs)(
                      "div",
                      {
                        className: r()(
                          _.inlineConsoleConnectionDetailsLowerItem,
                          t > 0 ? _.marginTop4px : void 0,
                        ),
                        children: [
                          (0, o.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/normal",
                            children:
                              e.type === C.ABu.XBOX
                                ? g.Z.Messages.QUESTS_XBOX_ID
                                : g.Z.Messages.QUESTS_PSN_ONLINE_ID_V2,
                          }),
                          (0, o.jsx)(i.Text, {
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
                    (0, o.jsx)(h, {
                      text: g.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
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
          ? (0, o.jsx)(h, {
              text: g.Z.Messages.QUESTS_SHOW_CONNECTIONS,
              quest: n,
            })
          : null;
      }
      function T(e) {
        let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children:
                g.Z.Messages
                  .QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT,
            }),
            t ? (0, o.jsx)(E, { ...e }) : (0, o.jsx)(S, { ...e }),
          ],
        });
      }
    },
    210724: function (e, t, n) {
      n.d(t, {
        P: function () {
          return B;
        },
      }),
        n(47120);
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(442837),
        c = n(481060),
        d = n(110924),
        u = n(607070),
        p = n(819640),
        m = n(617136),
        x = n(113434),
        C = n(497505),
        g = n(302245),
        _ = n(977156),
        f = n(5881),
        h = n(602667),
        E = n(78826),
        S = n(667105),
        T = n(693900),
        v = n(617889),
        N = n(130653),
        j = n(46140),
        A = n(981631),
        b = n(604330);
      function R(e) {
        let { isExpanded: t, questId: n } = e;
        return (
          (0, x.qI)({
            mode: t ? j.NH.EXPANDED : j.NH.COLLAPSED,
            questContent: C.jn.QUEST_BAR_V2,
            questId: n,
          }),
          null
        );
      }
      function B(e) {
        var t, n;
        let { quest: r } = e,
          x = (0, f.T)({ quest: r, location: j.dr.QUESTS_BAR }),
          B = (0, _.Zy)({ location: j.dr.QUESTS_BAR }),
          I = (0, S.qN)({ quest: r, location: j.dr.QUESTS_BAR }),
          y = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
          M = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
          O =
            (null === (t = r.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          k = (0, d.Z)(O),
          w =
            (null === (n = r.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          L = (0, d.Z)(w),
          { hasError: U, isLoading: q } = (0, E.d7)(),
          Z = s.useContext(N.T) || (B && I && !q),
          P = s.useRef(Z),
          Q = (0, v.B)(r, Z && !U),
          D = (0, g.vI)(r, j.dr.QUESTS_BAR) ? g.WV : Q.collapsedHeight,
          W = s.useRef(-1),
          H = s.useRef(!1),
          [V, z] = s.useState(!1),
          [G, F] = s.useState(!1),
          [K, Y] = s.useState(!0),
          [X, J] = s.useState(!0),
          [$, ee] = s.useState(Q.preEnrollmentExpandedHeight),
          et = s.useRef(null),
          en = s.useCallback((e) => {
            Y(!1), F(e);
          }, []),
          eo = s.useCallback(() => {
            var e, t;
            ee(
              (null !==
                (t =
                  null === (e = et.current) || void 0 === e
                    ? void 0
                    : e.offsetHeight) && void 0 !== t
                ? t
                : 84) +
                2 * Q.paddingVertical,
            );
          }, [Q.paddingVertical]),
          es = s.useCallback(() => {
            eo(), en(!0);
          }, [eo, en]),
          er = s.useCallback(() => {
            z(!0);
          }, []),
          ea = s.useCallback(() => {
            z(!1), !H.current && !w && en(!1);
          }, [w, en]),
          el = s.useCallback(() => {
            z(!1), !w && en(!1), (H.current = !1);
          }, [w, en]),
          ei = s.useCallback(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (G) return;
              let { withDelay: t = !1 } = e;
              t ? (W.current = window.setTimeout(es, 75)) : es();
            },
            [es, G],
          ),
          ec = s.useCallback(() => {
            ei();
          }, [ei]),
          ed = s.useCallback(() => {
            if ((window.clearTimeout(W.current), !!Q.canCollapseOnBlur && !V))
              !H.current && en(!1);
          }, [V, Q, en]),
          eu = s.useCallback(() => {
            (0, m.dA)({
              questId: r.id,
              event: A.rMx.QUEST_HOVER,
              properties: (0, m.mH)(C.jn.QUEST_BAR),
            }),
              (H.current = !0),
              ei({ withDelay: !0 });
          }, [ei, r]),
          ep = s.useCallback(() => {
            (H.current = !1), ed();
          }, [ed]);
        s.useLayoutEffect(() => {
          w && Q.shouldExpandOnQuestComplete && es();
        }, [es, w, Q.shouldExpandOnQuestComplete]),
          s.useLayoutEffect(() => {
            O && !k && H.current && es();
          }, [es, O, k]),
          s.useLayoutEffect(() => {
            !w && O && !k && !H.current && en(!1);
          }, [O, w, k, en]),
          s.useLayoutEffect(() => {
            Z !== P.current && J(!1), (P.current = Z);
          }, [Z]);
        let em = O ? j.XZ : j.R4,
          [{ expansionSpring: ex }, eC] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: em,
            onRest: () => {
              Y(!0);
            },
            onStart: () => {
              Y(!1);
            },
          }));
        s.useEffect(() => {
          eC({ expansionSpring: G ? 1 : 0, immediate: y });
        }, [G, eC, y]);
        let { visibilitySpring: eg } = (0, c.useSpring)({
          from: { visibilitySpring: 0 },
          to: { visibilitySpring: Z ? 1 : 0 },
          config: { tension: 250, friction: 10, clamp: !0 },
          onRest: () => {
            J(!0);
          },
          onStart: () => {
            J(!1);
          },
        });
        return (s.useLayoutEffect(() => {
          w && !L && Q.canCollapseOnBlur && eo();
        }, [w, es, Q.canCollapseOnBlur, eo, L]),
        s.useEffect(() => {
          U &&
            (0, m.dA)({
              questId: r.id,
              event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
              properties: {
                ...(0, m.mH)(C.jn.QUEST_BAR),
                reason: "asset_loading_error",
              },
            }),
            !B &&
              (0, m.dA)({
                questId: r.id,
                event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  ...(0, m.mH)(C.jn.QUEST_BAR),
                  reason: "not_eligible_for_quest",
                },
              });
        }, [U, B, r.id]),
        B && (Z || !X || q) && !U)
          ? (0, o.jsx)(h.A, {
              questOrQuests: r,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !M && Z,
              children: () => {
                let e = Q.component;
                return (0, o.jsxs)("div", {
                  className: b.mask,
                  children: [
                    Z && (0, o.jsx)(R, { questId: r.id, isExpanded: G }),
                    (0, o.jsx)(l.animated.div, {
                      "aria-hidden": !Z,
                      onMouseLeave: ep,
                      onMouseEnter: eu,
                      onFocus: ec,
                      onBlur: ed,
                      className: a()(b.wrapper, {
                        [b.wrapperInvisible]: !Z,
                        [b.wrapperVisible]: Z && X,
                      }),
                      style: {
                        color: r.config.colors.secondary,
                        height: eg.to({
                          range: [0, 1],
                          output: [0, !Q.canCollapseOnBlur && G ? $ : D],
                        }),
                      },
                      children: (0, o.jsx)(l.animated.div, {
                        className: a()(b.contentWrapper, {
                          [b.contentWrapperExpanded]: G,
                          [b.contentWrapperAccepted]: O,
                        }),
                        style: {
                          backgroundColor: Q.preEnrollmentBackgroundColor,
                          backgroundImage: O
                            ? Q.postEnrollmentBackgroundImage
                            : void 0,
                        },
                        children: (0, o.jsx)(T.t, {
                          springConfig: em,
                          isExpanded: G,
                          children: (0, o.jsx)(e, {
                            expandedContentRef: et,
                            expansionSpring: ex,
                            isExpanded: G,
                            isExpansionAnimationComplete: K,
                            onCtxMenuClosed: ea,
                            onCtxMenuOpened: er,
                            onCtxMenuSelection: el,
                            quest: r,
                            useReducedMotion: y,
                            collapsedHeight: D,
                          }),
                        }),
                      }),
                    }),
                  ],
                });
              },
            })
          : (U
              ? x.log("Not rendered due to asset error")
              : !B && x.log("Not rendered due to ineligibility"),
            null);
      }
      t.Z =
        12633 == n.j
          ? function () {
              let e = (0, S.DH)();
              return null == e
                ? null
                : (0, o.jsx)(
                    E.p,
                    {
                      source: j.dr.QUESTS_BAR,
                      questId: e.id,
                      children: (0, o.jsx)(B, { quest: e }),
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
      var o = n(200651),
        s = n(192379),
        r = n(100621),
        a = n(442837),
        l = n(481060),
        i = n(393238),
        c = n(110924),
        d = n(607070);
      let u = s.createContext({ springConfig: {}, isExpanded: !1 });
      function p(e) {
        let t = s.useMemo(
          () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
          [e.springConfig, e.isExpanded],
        );
        return (0, o.jsx)(u.Provider, { value: t, children: e.children });
      }
      function m(e) {
        var t;
        let { children: n } = e,
          { springConfig: p, isExpanded: m } = s.useContext(u),
          x = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
          { ref: C, height: g = null } = (0, i.Z)(),
          _ = null !== (t = (0, c.Z)(g)) && void 0 !== t ? t : null,
          [{ height: f }, h] = (0, l.useSpring)(() => ({
            from: { height: 0 },
            config: p,
          }));
        return (
          s.useLayoutEffect(() => {
            null !== g && h({ height: g, immediate: !m || x || null === _ });
          }, [g, h, m, x, _]),
          (0, o.jsx)(r.animated.div, {
            style: { height: null === _ ? "auto" : f, overflow: "hidden" },
            children: (0, o.jsx)("div", {
              style: { overflow: "hidden" },
              ref: C,
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
      var o = n(192379),
        s = n(918701),
        r = n(988303),
        a = n(658590),
        l = n(448018),
        i = n(46140);
      let c = (e, t) => {
        let n = (0, s.zK)(e, i.S7.QUEST_BAR_V2),
          c = (0, a.a)(e),
          { primaryVariant: d, progressVariant: u } = r.u.useExperiment(
            { location: i.dr.QUESTS_BAR },
            { autoTrackExposure: t && n },
          );
        return o.useMemo(
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
    130653: function (e, t, n) {
      n.d(t, {
        T: function () {
          return s;
        },
        Z: function () {
          return r;
        },
      });
      var o = n(200651);
      let s = n(192379).createContext(!1);
      function r(e) {
        return (0, o.jsx)(s.Provider, { value: !0, children: e.children });
      }
    },
    941348: function (e, t, n) {
      var o = n(200651),
        s = n(192379),
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
            onCtxMenuOpened: C,
            onCtxMenuClosed: g,
            onCtxMenuSelection: _,
            quest: f,
            useReducedMotion: h,
            collapsedHeight: E,
          } = e,
          S = s.useRef(null),
          T = s.useRef(null),
          v =
            (null === (t = f.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          N = (0, r.Rf)(f);
        return (0, o.jsxs)(l.p, {
          expandedContentRef: n,
          collapsedContentRef: S,
          expansionSpring: p,
          children: [
            (0, o.jsx)(i.Z, {
              ref: S,
              className: u.content,
              expansionSpring: p,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: f,
              useReducedMotion: h,
              taskDetails: N,
            }),
            (0, o.jsx)(c.Z, {
              expansionSpring: p,
              className: u.content,
              collapsedHeight: E,
              onCtxMenuOpen: C,
              onCtxMenuClose: g,
              onCtxMenuSelect: _,
              overlayRef: T,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: f,
              useReducedMotion: h,
              ref: n,
              taskDetails: N,
              children: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(d.Z, { expansionSpring: p, isExpanded: m }),
                  !v &&
                    (0, o.jsx)(a.Z, {
                      quest: f,
                      expansionSpring: p,
                      useReducedMotion: h,
                      isExpanded: m,
                      isExpansionAnimationComplete: x,
                      onCtxMenuOpen: C,
                      onCtxMenuClose: g,
                      onCtxMenuSelect: _,
                    }),
                ],
              }),
            }),
            (0, o.jsx)("div", { ref: T, className: u.overlay }),
          ],
        });
      };
    },
    308069: function (e, t, n) {
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(481060),
        c = n(617136),
        d = n(497505),
        u = n(918701),
        p = n(302245),
        m = n(685613),
        x = n(670638),
        C = n(341907),
        g = n(303385),
        _ = n(788284),
        f = n(46140),
        h = n(689938),
        E = n(404846);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: r,
            onCtxMenuSelect: S,
            onCtxMenuOpen: T,
            onCtxMenuClose: v,
            useReducedMotion: N,
            isExpanded: j,
            isExpansionAnimationComplete: A,
          } = e,
          b = s.useCallback(() => {
            (0, C.openDisclosureModal)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          R = s.useCallback(() => {
            (0, u.FE)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
            });
          }, [t]),
          B = j && A,
          I = (0, p.vI)(t, f.dr.QUESTS_BAR, !0),
          y = (0, o.jsx)(i.Clickable, {
            onClick: R,
            className: a()({ [E.logo]: B }),
            children: (0, o.jsx)(m.Z, { quest: t, withGameTile: !1 }),
          });
        return (0, o.jsxs)(l.animated.div, {
          className: a()(E.wrapper, {
            [E.interactable]: B,
            [E.rewardHighlightWrapper]: I,
          }),
          style: {
            transform: (0, l.to)(
              [r.to({ range: [0, 1], output: [I ? 8 : 4, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, o.jsx)(l.animated.div, {
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
            (0, o.jsx)(l.animated.div, {
              className: E.backgroundWrapper,
              style: {
                opacity: r.to({ range: [0, 1], output: [0.5, 0] }),
                borderBottomLeftRadius: r.to({ range: [0, 1], output: [0, 8] }),
                borderBottomRightRadius: r.to({
                  range: [0, 1],
                  output: [0, 8],
                }),
              },
              children: (0, o.jsx)(_.Z, {
                className: E.background,
                animationClassName: E.backgroundAnimation,
                quest: t,
                useReducedMotion: N,
              }),
            }),
            I
              ? (0, o.jsx)(g.Z, {
                  quest: t,
                  expansionSpring: r,
                  isFullyExpanded: B,
                  partnerBranding: y,
                  useReducedMotion: N,
                })
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(l.animated.img, {
                      alt: "",
                      className: E.wreathIcon,
                      style: {
                        opacity: r.to({ range: [0, 1], output: [1, 0] }),
                      },
                      src: n(858595),
                    }),
                    (0, o.jsx)(l.animated.div, {
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
                      children: y,
                    }),
                    (0, o.jsx)(l.animated.div, {
                      className: E.questAvailable,
                      style: {
                        opacity: r.to({ range: [0, 1], output: [0.7, 0] }),
                        transform: (0, l.to)(
                          [r.to({ range: [0, 1], output: [0, -20] })],
                          (e) => "translate(".concat(e, "px"),
                        ),
                      },
                      children: (0, o.jsx)(i.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        className: E.questAvailableText,
                        children: h.Z.Messages.QUEST_AVAILABLE,
                      }),
                    }),
                  ],
                }),
            (0, o.jsxs)(l.animated.div, {
              className: E.promotedBadgeWrapper,
              style: { opacity: r.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, o.jsxs)(i.Clickable, {
                  className: E.promotedBadge,
                  onClick: b,
                  children: [
                    (0, o.jsx)(i.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: h.Z.Messages.QUESTS_PROMOTED,
                    }),
                    (0, o.jsx)(i.CircleQuestionIcon, {
                      color: i.tokens.colors.WHITE,
                      className: E.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, o.jsx)(x.r, {
                  onOpen: T,
                  onClose: v,
                  onSelect: S,
                  questContent: d.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, o.jsx)(i.Clickable, {
                      ...e,
                      className: E.submenuWrapper,
                      "aria-label": h.Z.Messages.ACTIONS,
                      children: (0, o.jsx)(i.MoreHorizontalIcon, {
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
      var o = n(200651),
        s = n(192379),
        r = n(995295),
        a = n(100621),
        l = n(393238),
        i = n(743294);
      let c = s.createContext({
          registerComponent: () => {},
          unregisterComponent: () => {},
          animatedComponents: {},
          expandedContentRef: s.createRef(),
          collapsedContentRef: s.createRef(),
          recalculateAnimationPositions: () => {},
          animatedComponentProps: [],
          expansionSpring: null,
          mountPoints: new Map(),
        }),
        d = s.forwardRef(function (e, t) {
          var n;
          let { children: i, id: d, inState: u, isTextTransition: p = !1 } = e,
            {
              recalculateAnimationPositions: m,
              registerComponent: x,
              unregisterComponent: C,
              expansionSpring: g,
              mountPoints: _,
            } = s.useContext(c),
            f = s.useRef(null),
            h = s.useRef(null),
            E = s.useRef();
          s.useEffect(() => {
            m();
          }, [m]),
            s.useLayoutEffect(() => {
              let e = f.current;
              return (
                null != e && x(e, d, u),
                () => {
                  null != e && C(d, u);
                }
              );
            }, [d, u, x, C]);
          let S = s.useCallback(
            (e) => {
              let { height: t } = e;
              E.current !== t && (m(), (E.current = t));
            },
            [m],
          );
          (0, l.P)(f, S);
          let T = null === (n = _.get(d)) || void 0 === n ? void 0 : n.current,
            v = null;
          return (
            null == T
              ? (v = null)
              : p && null != g
                ? (v = (0, o.jsxs)(o.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, r.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: g.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: i(h),
                          }),
                          T,
                        ),
                      "expanded" === u &&
                        (0, r.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: g.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: i(h),
                          }),
                          T,
                        ),
                    ],
                  }))
                : "collapsed" === u && (v = (0, r.createPortal)(i(h), T)),
            (0, o.jsxs)("div", {
              style: {
                opacity: (null == v && "collapsed" === u) || null == T ? 1 : 0,
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
              collapsedContentRef: r,
              expansionSpring: a,
            } = e,
            [l, d] = s.useState({}),
            [u, p] = s.useState([]),
            [m, x] = s.useState(() => new Map()),
            C = s.useCallback((e, t, n) => {
              d((o) => {
                var s;
                let r =
                  null !== (s = o[t]) && void 0 !== s
                    ? s
                    : { expanded: null, collapsed: null };
                return { ...o, [t]: { ...r, [n]: e } };
              }),
                x((e) => {
                  let n = new Map(e);
                  return n.set(t, s.createRef()), n;
                });
            }, []),
            g = s.useCallback((e, t) => {
              let n = !1;
              d((o) => {
                var s;
                let r =
                  null !== (s = o[e]) && void 0 !== s
                    ? s
                    : { expanded: null, collapsed: null };
                return (
                  (r[t] = null),
                  (n = null == r.expanded && null == r.collapsed),
                  { ...o, [e]: r }
                );
              }),
                n &&
                  x((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
            }, []),
            _ = s.useCallback(() => {
              let e = [];
              for (let t in l) {
                if (null == l[t] || null == n.current || null == r.current)
                  continue;
                let o = l[t].collapsed,
                  s = l[t].expanded;
                if (null == o || null == s) continue;
                let a = s.getBoundingClientRect(),
                  c = n.current.getBoundingClientRect(),
                  d = o.getBoundingClientRect(),
                  u = r.current.getBoundingClientRect(),
                  p = a.top - c.top + i.Li,
                  m = d.top - u.top,
                  x = a.left - c.left + i.Li,
                  C = d.left - u.left,
                  g = -a.right + c.right + i.Li,
                  _ = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: C,
                  expandedLeft: x,
                  collapsedRight: _,
                  expandedRight: g,
                  collapsedTop: m,
                  expandedTop: p,
                  width: a.width,
                });
              }
              p(e);
            }, [l, n, r, p]);
          return (0, o.jsx)(c.Provider, {
            value: {
              registerComponent: C,
              unregisterComponent: g,
              animatedComponents: l,
              expandedContentRef: n,
              collapsedContentRef: r,
              recalculateAnimationPositions: _,
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
          return T;
        },
      });
      var o = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(481060),
        l = n(617136),
        i = n(497505),
        c = n(918701),
        d = n(796111),
        u = n(667105),
        p = n(341907),
        m = n(604162),
        x = n(46140),
        C = n(689938),
        g = n(128220);
      function _(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, o.jsx)(a.Button, {
          className: g.cta,
          color: a.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, p.openVideoQuestModal)(t);
          },
          size: a.Button.Sizes.SMALL,
          children: (0, m.F)(n),
        });
      }
      let f = (e) => {
          let { quest: t } = e;
          return (0, o.jsx)(a.Button, {
            className: g.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: i.jn.QUEST_BAR_V2,
                ctaContent: l.jZ.OPEN_GAME_LINK,
              }),
            children: C.Z.Messages.QUESTS_GET_THIS_GAME,
          });
        },
        h = (e) => {
          let { quest: t } = e;
          return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: g.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: i.jn.QUEST_BAR_V2,
                  ctaContent: l.jZ.CONNECT_CONSOLE,
                },
              ),
            size: a.Button.Sizes.SMALL,
            children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA,
          });
        },
        E = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: s,
              className: l,
              ctaLabel: c,
              ...d
            } = e,
            p = (0, u.hf)({ quest: t, location: i.jn.QUEST_BAR_V2 });
          return (0, o.jsx)(a.ShinyButton, {
            fullWidth: !0,
            size: a.Button.Sizes.SMALL,
            onClick: p,
            pauseAnimation: n || !s,
            className: r()(g.cta, l),
            buttonShineClassName: g.shine,
            ...d,
            children: null != c ? c : C.Z.Messages.QUESTS_CLAIM_REWARD,
          });
        },
        S = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: s,
              isExpanded: r,
              awaitingConsoleConnections: a,
              hasMadeProgress: l,
              isProgressing: u,
              activeScreen: p,
              taskDetails: m,
            } = e,
            C =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            g = (0, d.P)({ location: x.dr.QUESTS_BAR }),
            S = (0, c.cr)(n);
          if (C)
            return (0, o.jsx)(E, {
              quest: n,
              useReducedMotion: s,
              isExpanded: r,
            });
          if (S) return (0, o.jsx)(_, { quest: n, taskDetails: m });
          if (p === i.LI.CONSOLE && a && !g) return (0, o.jsx)(h, { quest: n });
          else if (p !== i.LI.SELECT && !l && !u)
            return (0, o.jsx)(f, { quest: n });
          return null;
        };
      function T(e) {
        return (0, o.jsxs)("div", {
          className: g.ctaButtons,
          children: [
            e.showBackButton &&
              (0, o.jsx)(a.Button, {
                className: g.backButton,
                innerClassName: g.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, o.jsx)(a.ChevronSmallLeftIcon, {
                  className: g.backIcon,
                }),
              }),
            (0, o.jsx)(S, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(481060),
        c = n(569379),
        d = n(642145),
        u = n(808326);
      t.Z = s.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: s,
            size: r = 42,
            strokeWidth: p = 3,
            glowBlur: m = 0.4,
            percentCompleteText: x,
            children: C,
          } = e,
          g = (0, c.E)(n, s > 0),
          _ = r / 2,
          f = r / 2 - p / 2,
          h = 2 * Math.PI * f,
          E = h - s * h,
          S = {
            strokeDasharray: "".concat(h, " ").concat(h),
            strokeDashoffset: E,
          },
          T = {
            strokeDasharray: "".concat(h, " ").concat(h),
            strokeDashoffset: -s * h,
          },
          v = { boxShadow: "0 0 30px 0px ".concat(g.glow) },
          { progressTextAnimation: N } = (0, i.useSpring)({
            progressTextAnimation: null != x && 1 !== s ? 1 : 0,
            config: d.Y,
          });
        return (0, o.jsxs)("div", {
          className: u.outer,
          ref: t,
          children: [
            (0, o.jsxs)("div", {
              className: u.inner,
              style: v,
              children: [
                C,
                (0, o.jsxs)(l.animated.div, {
                  style: { opacity: N },
                  className: a()(u.coverContent, u.progressTextWrapper),
                  children: [
                    (0, o.jsx)("div", {
                      className: a()(u.coverContent, u.progressTextOverlay),
                    }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-lg/medium",
                      color: "text-primary",
                      className: u.progressText,
                      children: x,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("svg", {
              className: u.progressBar,
              height: r,
              width: r,
              children: [
                (0, o.jsxs)("defs", {
                  children: [
                    (0, o.jsxs)("filter", {
                      id: "glow",
                      children: [
                        (0, o.jsx)("feGaussianBlur", {
                          result: "coloredBlur",
                          stdDeviation: m,
                        }),
                        (0, o.jsxs)("feMerge", {
                          children: [
                            (0, o.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, o.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, o.jsx)("feMergeNode", { in: "coloredBlur" }),
                            (0, o.jsx)("feMergeNode", { in: "SourceGraphic" }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsxs)("linearGradient", {
                      id: "linear",
                      x1: "100%",
                      y1: "0%",
                      x2: "0%",
                      y2: "0%",
                      children: [
                        (0, o.jsx)("stop", {
                          offset: "0%",
                          stopColor: g.backgroundTop,
                        }),
                        (0, o.jsx)("stop", {
                          offset: "100%",
                          stopColor: g.backgroundBottom,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: f,
                  cx: _,
                  cy: _,
                  stroke: "url(#linear)",
                  style: T,
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: f,
                  cx: _,
                  cy: _,
                  stroke: g.foreground,
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
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(703533),
        i = n(995295),
        c = n(100621),
        d = n(442837),
        u = n(110924),
        p = n(607070),
        m = n(819640),
        x = n(569379),
        C = n(675654),
        g = n(435616),
        _ = n(197857);
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
          { completionSpring: T, startCompletionAnimation: v } = (0, x.G)(),
          N =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          j = s.useRef(!1),
          A = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          b = s.useRef(null),
          R = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
          B = (0, u.Z)(R),
          [I, y] = s.useState(null),
          [M, O] = s.useState(null),
          k = s.useRef(new l.qA({ gravity: 0, wind: 0 })),
          w = (0, l.uR)(I, M),
          L = s.useCallback(() => {
            if (A) return;
            let e = E.current,
              t = b.current;
            if (null != t && null != e && w.isReady) {
              var n, o, s, r;
              let { x: a, y: l } = e.getBoundingClientRect(),
                { x: i, y: c } = t.getBoundingClientRect();
              w.createMultipleConfetti(
                ((n = a - i),
                (o = l - c),
                (s = e.clientHeight),
                (r = e.clientWidth),
                {
                  ...C.We,
                  position: {
                    type: "static-random",
                    minValue: { x: n, y: o },
                    maxValue: { x: n + s, y: o + r },
                  },
                  velocity: {
                    type: "static-random",
                    minValue: { x: -20, y: -20 },
                    maxValue: { x: 20, y: 20 },
                  },
                  opacity: { type: "linear", value: 2, addValue: -0.1 },
                  dragCoefficient: { type: "static", value: 0.166 },
                  size: { type: "static-random", minValue: 2, maxValue: 3 },
                }),
                100,
              );
            }
          }, [E, b, w, A]),
          U = (0, u.Z)(S);
        return (s.useEffect(() => {
          N && S && !U && (v(), L());
        }, [S, N, v, L, U]),
        s.useEffect(() => {
          N &&
            !R &&
            B &&
            setTimeout(() => {
              v(), L();
            }, 200);
        }, [N, B, R, v, L]),
        s.useEffect(() => {
          if (!!w.isReady) !j.current && N && (v(), L()), (j.current = N);
        }, [N, j, L, v, w]),
        A)
          ? null
          : (0, o.jsxs)("div", {
              className: g.wrapper,
              "aria-hidden": "true",
              ref: b,
              children: [
                (0, o.jsx)(c.animated.div, {
                  className: g.background,
                  style: { opacity: T },
                }),
                (0, o.jsx)(c.animated.div, {
                  className: a()(g.borders, g.bordersTopLeft),
                  style: { opacity: T },
                }),
                (0, o.jsxs)(c.animated.div, {
                  className: g.confettiWrapper,
                  style: {
                    transform: n
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, o.jsx)(l.O_, {
                      ref: y,
                      className: g.confetti,
                      environment: k.current,
                    }),
                    (0, o.jsx)(l.Ji, {
                      ref: O,
                      sprites: [_],
                      colors: f,
                      spriteWidth: C.Ko,
                      spriteHeight: C.Ko,
                    }),
                    null != r.current &&
                      (0, i.createPortal)(
                        (0, o.jsx)(c.animated.div, {
                          className: a()(g.borders, g.bordersBottom),
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
      var o = n(200651),
        s = n(192379),
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
        C = n(497505),
        g = n(918701),
        _ = n(566078),
        f = n(667105),
        h = n(585857),
        E = n(46140),
        S = n(689938),
        T = n(161548);
      function v(e) {
        let { children: t, isComplete: n, hasNextStep: s } = e;
        return (0, o.jsxs)("li", {
          className: a()(
            T.stepWrapper,
            { [T.stepWrapperComplete]: n },
            { [T.stepWrapperWithNextStep]: s },
          ),
          children: [
            (0, o.jsxs)("div", {
              className: T.stepIndicator,
              children: [
                (0, o.jsx)("div", {
                  className: T.stepIconWrapper,
                  children:
                    n &&
                    (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                      className: T.stepIcon,
                      color: c.tokens.colors.WHITE,
                    }),
                }),
                s && (0, o.jsx)("div", { className: T.stepConnector }),
              ],
            }),
            (0, o.jsx)("div", { className: T.stepContent, children: t }),
          ],
        });
      }
      function N(e) {
        return (0, o.jsx)(c.Text, {
          className: T.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e.children,
        });
      }
      function j(e) {
        let { quest: t, useReducedMotion: n } = e,
          r = (0, m.n)(),
          i = (0, f.k3)(t.id, C.jn.QUEST_BAR_V2),
          d = (0, f.g2)({ useReducedMotion: n }),
          {
            errorHints: h,
            startingConsoleQuest: v,
            startConsoleQuest: j,
          } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
              (0, p._3)({
                questId: t.id,
                questContent: C.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.DEFIBRILLATOR,
              }),
                d.startAnimation();
            },
            afterRequest: d.stopAnimation,
          }),
          { header: A, renderBody: b } = s.useMemo(() => {
            let e = h.length > 0,
              n = () =>
                (0, o.jsx)(o.Fragment, {
                  children: h.map((e, n) => {
                    if (e.type === l.K.EXPIRED_CREDENTIAL && r) {
                      let s = u.Z.getAccount(
                          e.connected_account_id,
                          e.connected_account_type,
                        ),
                        r = (0, g.C9)(e),
                        a = (0, g._j)(e);
                      return (0, o.jsx)(
                        N,
                        {
                          children: r.format({
                            account_name: null == s ? void 0 : s.name,
                            onClick: () => {
                              (0, g.fY)(
                                { quest: t, platformType: a },
                                {
                                  content: C.jn.QUEST_BAR,
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
                    return (0, o.jsx)(N, { children: e.message }, n);
                  }),
                });
            if ((0, g.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST))
              return {
                header: e
                  ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED
                  : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
                renderBody: e
                  ? n
                  : () =>
                      (0, o.jsx)(c.Text, {
                        className: T.microphoneUnitBodyText,
                        color: "text-muted",
                        variant: "text-xxs/normal",
                        children:
                          S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME,
                      }),
              };
            let s = _.r.build(t.config).application.name;
            return {
              header: e
                ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: s })
                : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: s }),
              renderBody: e
                ? n
                : () =>
                    (0, o.jsx)(c.Text, {
                      className: T.microphoneUnitBodyText,
                      color: "text-muted",
                      variant: "text-xxs/normal",
                      children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format(
                        { gameTitle: s },
                      ),
                    }),
            };
          }, [t, h, r]);
        return (0, o.jsxs)("div", {
          className: T.microphoneUnit,
          children: [
            (0, o.jsxs)("div", {
              className: T.microphoneUnitHeader,
              children: [
                (0, o.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === h.length ? T.warningCircle : T.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, o.jsx)(c.Text, { variant: "text-xs/medium", children: A }),
                (0, o.jsx)(c.Clickable, {
                  className: a()(T.microphoneUnitRefreshIconWrapper, {
                    [T.disabled]: v,
                  }),
                  onClick: () => j(),
                  children: d.render(),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: a()({ [T.opacity_50]: v }),
              children: [
                b(),
                0 === h.length ? null : (0, o.jsx)(N, { children: i }),
              ],
            }),
          ],
        });
      }
      function A(e) {
        let { text: t } = e;
        return (0, o.jsx)(c.Text, {
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
          } = s.useMemo(() => {
            var e;
            let s = a.xboxAndPlaystationAccounts.length > 0,
              r = s && (0, g.Bz)(t),
              l = (0, g.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
              i = _.r.build(t.config).application.name,
              c =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, o.jsx)(h.Q, { ...a, quest: t }),
                  isComplete: s || r || c,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(A, {
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
                    (0, o.jsx)(A, {
                      text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format(
                        { numMinutes: n.targetMinutes },
                      ),
                    }),
                  isComplete: c,
                },
              ],
              hasConnectedAccounts: s,
              isProgressingQuestForLaunchedGame: r,
              isQuestComplete: c,
            };
          }, [a, t, n]);
        return (0, o.jsxs)("div", {
          className: T.wrapper,
          children: [
            (0, o.jsx)("div", {
              className: T.headingWrapper,
              children: (0, o.jsx)(c.Heading, {
                className: T.heading,
                variant: "text-xs/medium",
                children:
                  S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING,
              }),
            }),
            (0, o.jsxs)("div", {
              className: T.stepsWrapper,
              children: [
                (0, o.jsx)("ul", {
                  children: l.map((e, t) =>
                    (0, o.jsx)(
                      v,
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
                  (0, o.jsx)(j, { useReducedMotion: r, quest: t }),
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
          return o;
        },
        v6: function () {
          return s;
        },
      });
      let o = "#00000000",
        s = "#CDD8FF1A",
        r = 12;
    },
    457153: function (e, t, n) {
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(95985),
        c = n(183004);
      let d = s.forwardRef(function (e, t) {
        var n;
        let {
            className: r,
            expansionSpring: d,
            isExpanded: u,
            isExpansionAnimationComplete: p,
            quest: m,
            taskDetails: x,
          } = e,
          C = s.useRef(null),
          g =
            (null === (n = m.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null;
        return (0, o.jsx)(l.animated.div, {
          ref: t,
          "aria-hidden": u && p,
          className: a()(r, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: g,
          }),
          style: { opacity: d.to({ range: [0, 1], output: [1, 0] }) },
          children: (0, o.jsx)("div", {
            className: c.contentCollapsedWrapper,
            children: g
              ? (0, o.jsx)(i.Z, {
                  contentLocation: "collapsed",
                  quest: m,
                  progressBarRef: C,
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
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(278074),
        c = n(442837),
        d = n(481060),
        u = n(70097),
        p = n(617136),
        m = n(272008),
        x = n(113434),
        C = n(569984),
        g = n(497505),
        _ = n(918701),
        f = n(988303),
        h = n(302245),
        E = n(665430),
        S = n(585500),
        T = n(475595),
        v = n(644646),
        N = n(78826),
        j = n(670638),
        A = n(341907),
        b = n(693900),
        R = n(164495),
        B = n(759853),
        I = n(205511),
        y = n(694802),
        M = n(95985),
        O = n(50476),
        k = n(658590),
        w = n(46140),
        L = n(743294),
        U = n(689938),
        q = n(160443);
      function Z(e) {
        let { quest: t, isHighlightedReward: n } = e;
        return (0, o.jsx)(v.Z, {
          className: a()(q.rewardTile, { [q.hiddenRewardTile]: n }),
          learnMoreStyle: "text",
          quest: t,
          questContent: g.jn.QUEST_BAR_V2,
          location: w.dr.QUESTS_BAR,
        });
      }
      function P(e) {
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
          E = (0, c.e7)([C.Z], () => C.Z.isEnrolling(t.id), [t]),
          v = s.useMemo(() => (0, T.fh)(t, T.Bd.QUEST_BAR_HERO), [t]),
          j = (0, h.vI)(t, w.dr.QUESTS_BAR, !0),
          A = s.useRef(null),
          { primaryVariant: b } = f.u.useExperiment(
            { location: w.dr.QUESTS_BAR },
            { autoTrackExposure: !1 },
          ),
          R = (0, S.D)({
            quest: t,
            location: w.dr.QUESTS_BAR,
            questContent: g.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: b === f.P.V2 || (0, k.a)(t),
          });
        s.useEffect(() => {
          null != A.current &&
            (i && m
              ? (A.current.pause(), (A.current.currentTime = 0))
              : !i && m && A.current.play());
        }, [i, m]);
        let B = (0, _.cr)(t)
          ? U.Z.Messages.QUESTS_START_VIDEO_QUEST
          : U.Z.Messages.QUESTS_ACCEPT_QUEST;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              children: (0, o.jsxs)("div", {
                className: q.questPromoContent,
                ref: p,
                children: [
                  (0, o.jsxs)("div", {
                    className: q.details,
                    children: [
                      (0, o.jsx)(Z, { quest: t, isHighlightedReward: j }),
                      (0, o.jsx)(d.Heading, {
                        className: q.title,
                        variant: "heading-md/medium",
                        children: U.Z.Messages.QUESTS_TITLE.format({
                          questName: t.config.messages.questName,
                        }),
                      }),
                      (0, o.jsx)(d.Text, {
                        className: q.description,
                        variant: "text-xs/normal",
                        children: R,
                      }),
                    ],
                  }),
                  (0, o.jsx)(d.Button, {
                    className: q.cta,
                    color: d.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: a ? x : void 0,
                    size: d.Button.Sizes.SMALL,
                    submitting: E,
                    children: B,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(l.animated.div, {
              className: q.heroAssetWrapper,
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
                (0, o.jsx)(l.animated.div, {
                  className: q.heroAssetDarken,
                  style: { opacity: r.to([0, 1], [1, 0]) },
                }),
                (0, o.jsx)(l.animated.div, {
                  className: q.heroAssetTint,
                  style: {
                    backgroundColor: t.config.colors.primary,
                    opacity: r.to([0, 1], [1, 0]),
                  },
                }),
                v.isAnimated
                  ? (0, o.jsx)(N.Fl, {
                      id: "QuestBarV2ContentExpanded_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (A.current = e.current),
                          (0, o.jsx)(u.Z, {
                            ref: e,
                            autoPlay: !i && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: q.heroAsset,
                            controls: !1,
                            children: (0, o.jsx)("source", {
                              src: v.url,
                              type:
                                null !== (t = v.mimetype) && void 0 !== t
                                  ? t
                                  : void 0,
                            }),
                          })
                        );
                      },
                    })
                  : (0, o.jsx)(N.Fl, {
                      id: "QuestBarV2ContentExpanded_heroStatic",
                      children: (e) =>
                        (0, o.jsx)("img", {
                          ref: e,
                          alt: "",
                          className: q.heroAsset,
                          src: v.url,
                        }),
                    }),
                (0, o.jsx)(l.animated.div, {
                  className: q.legibilityGradient,
                  style: { opacity: r.to({ range: [0, 1], output: [0, 1] }) },
                }),
              ],
            }),
          ],
        });
      }
      function Q(e) {
        var t;
        let {
            quest: n,
            taskDetails: r,
            expansionSpring: c,
            overlayRef: u,
            isExpanded: p,
            useReducedMotion: m,
            containerRef: C,
            onCtxMenuOpen: f,
            onCtxMenuClose: h,
            onCtxMenuSelect: S,
          } = e,
          T =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          v = r.percentComplete > 0,
          N = (0, x.z)(n),
          [A, k, Z] = (0, x.me)(n, r),
          P = (0, E.pF)({ location: w.dr.QUESTS_BAR }),
          Q = s.useRef(null),
          D = (0, x.B6)(n.config.expiresAt),
          W = (0, x._s)({ quest: n }),
          H = (0, _.cr)(n);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.animated.div, {
              className: a()(
                q.postEnrollmentBackground,
                q.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(L.aY, ", ")
                  .concat(L.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, o.jsxs)("div", {
              className: q.questAcceptedContent,
              ref: C,
              children: [
                (0, o.jsxs)("div", {
                  className: q.questAcceptedHeader,
                  children: [
                    (0, o.jsx)(d.Text, {
                      variant: "text-xxs/medium",
                      className: a()(q.flex, q.headerText),
                      children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                        { expirationDate: D },
                      ),
                    }),
                    (0, o.jsx)(j.r, {
                      onOpen: f,
                      onClose: h,
                      onSelect: S,
                      questContent: g.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, o.jsx)(d.Clickable, {
                          ...e,
                          className: q.submenuWrapper,
                          "aria-label": U.Z.Messages.ACTIONS,
                          children: (0, o.jsx)(d.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(q.submenuIcon, q.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: q.divider }),
                (0, o.jsx)(B.Z, {
                  expansionSpring: c,
                  overlayRef: u,
                  progressBarRef: Q,
                  quest: n,
                  isExpanded: p,
                }),
                (0, o.jsx)(M.Z, {
                  contentLocation: "expanded",
                  quest: n,
                  progressBarRef: Q,
                  isExpanded: !0,
                  taskDetails: r,
                  activeScreen: A,
                }),
                (0, o.jsx)(b.n, {
                  children:
                    !T &&
                    !H &&
                    (0, i.EQ)(A)
                      .with(g.LI.SELECT, () =>
                        (0, o.jsx)(O.Z, {
                          onConsole: () => Z(w.cd.CONSOLE),
                          onDesktop: () => Z(w.cd.DESKTOP),
                        }),
                      )
                      .with(g.LI.DESKTOP, () => (0, o.jsx)(y.Z, { quest: n }))
                      .with(g.LI.CONSOLE, () =>
                        (0, o.jsx)(I.Z, { quest: n, taskDetails: r }),
                      )
                      .exhaustive(),
                }),
                (0, o.jsx)(b.n, {
                  children: (0, o.jsx)(R.y, {
                    quest: n,
                    useReducedMotion: m,
                    isExpanded: p,
                    awaitingConsoleConnections: W,
                    hasMadeProgress: v,
                    isProgressing: N,
                    activeScreen: A,
                    showBackButton:
                      A !== g.LI.SELECT && k.length > 1 && !v && !N && P,
                    onBack: () => Z(null),
                    taskDetails: r,
                  }),
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: a()(
                q.postEnrollmentBackground,
                q.postEnrollmentBackgroundExpanded,
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
      let D = s.forwardRef(function (e, t) {
        var n;
        let {
            children: r,
            className: i,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: x,
            onCtxMenuOpen: C,
            onCtxMenuClose: f,
            onCtxMenuSelect: h,
            overlayRef: E,
            quest: S,
            useReducedMotion: T,
            taskDetails: v,
          } = e,
          N = (0, _.cr)(S),
          j = s.useCallback(() => {
            (0, m.AH)(S.id, {
              questContent: g.jn.QUEST_BAR_V2,
              questContentCTA: p.jZ.ACCEPT_QUEST,
            }),
              N && (0, A.openVideoQuestModal)(S);
          }, [S, N]),
          b =
            (null === (n = S.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          R = d && u;
        return (0, o.jsxs)(l.animated.div, {
          "aria-hidden": !R,
          className: a()(i, q.contentExpanded, {
            [q.contentInteractable]: R,
            [q.contentExpandedAccepted]: b,
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
            (0, o.jsx)(l.animated.div, {
              style: { opacity: 1 },
              children: b
                ? (0, o.jsx)(Q, {
                    quest: S,
                    taskDetails: v,
                    expansionSpring: x,
                    overlayRef: E,
                    isExpanded: d,
                    useReducedMotion: T,
                    onCtxMenuOpen: C,
                    onCtxMenuClose: f,
                    onCtxMenuSelect: h,
                    containerRef: t,
                  })
                : (0, o.jsx)(P, {
                    quest: S,
                    taskDetails: v,
                    expansionSpring: x,
                    isInteractable: R,
                    useReducedMotion: T,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: j,
                  }),
            }),
          ],
        });
      });
      t.Z = D;
    },
    569379: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
        G: function () {
          return l;
        },
      }),
        n(47120);
      var o = n(192379),
        s = n(481060),
        r = n(410030),
        a = n(113434);
      function l() {
        let [{ spring: e }, t] = (0, s.useSpring)(
          () => ({ spring: 0 }),
          "animate-always",
        );
        return {
          completionSpring: e,
          startCompletionAnimation: o.useCallback(() => {
            t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
          }, [t]),
        };
      }
      function i(e, t) {
        var n;
        let o = (0, a.z)(e),
          s = null !== (n = (0, r.i6)()) && void 0 !== n ? n : 0,
          l = "var(--green-330)",
          i = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = t ? i[s] : ["#828288", "#CBCDD4"][s];
        return {
          backgroundTop: c,
          backgroundBottom: t ? i[s] : ["#535356", "#8B8C95"][s],
          foreground: l,
          glow: t && o ? l : "#C4C1D66E",
        };
      }
    },
    694802: function (e, t, n) {
      n(571269), n(298267);
      var o = n(200651);
      n(192379);
      var s = n(481060),
        r = n(113434),
        a = n(665430),
        l = n(26650),
        i = n(46140),
        c = n(689938),
        d = n(587311);
      function u(e) {
        let { header: t, children: n } = e;
        return (0, o.jsxs)("div", {
          className: d.card,
          children: [
            (0, o.jsxs)("div", {
              className: d.header,
              children: [
                (0, o.jsx)(s.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: d.icon,
                  width: 16,
                  height: 16,
                }),
                (0, o.jsx)(s.Heading, {
                  color: "text-normal",
                  variant: "heading-sm/medium",
                  children: t,
                }),
              ],
            }),
            (0, o.jsx)(s.Text, {
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
          s = (0, r.qb)(t);
        if (0 === s.length) return null;
        let d = s.at(0);
        return n
          ? d === c.Z.Messages.QUESTS_PROGRESS_WEB_TIP
            ? (0, o.jsx)(u, {
                header: c.Z.Messages.QUEST_BAR_WEB_WARNING_HEADER,
                children: c.Z.Messages.QUEST_BAR_WEB_WARNING_BODY,
              })
            : d === c.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP
              ? (0, o.jsx)(u, {
                  header: c.Z.Messages.QUEST_BAR_MAC_WARNING_HEADER_WINDOWS,
                  children: c.Z.Messages.QUESTS_PROGRESS_MAC_STREAMING_TIP,
                })
              : null
          : (0, o.jsx)(l.Z, { children: d });
      };
    },
    95985: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var s = n(481060),
        r = n(113434),
        a = n(497505),
        l = n(644646),
        i = n(613087),
        c = n(472144),
        d = n(46140),
        u = n(183004);
      t.Z = (e) => {
        let {
            contentLocation: t,
            quest: n,
            progressBarRef: p,
            isExpanded: m,
            taskDetails: x,
            activeScreen: C,
          } = e,
          { percentComplete: g } = x,
          _ = (0, r.eQ)(n),
          f = (0, r.vf)(n, m, C);
        return (0, o.jsxs)("div", {
          className: u.questProgressWrapper,
          children: [
            (0, o.jsx)(i.l7, {
              inState: t,
              id: "progress-bar",
              ref: p,
              children: (e) =>
                (0, o.jsx)(c.Z, {
                  ref: e,
                  quest: n,
                  percentComplete: g,
                  size: 42,
                  strokeWidth: 3,
                  children: (0, o.jsx)(l.Z, {
                    className: u.questProgressRewardTile,
                    quest: n,
                    questContent: a.jn.QUEST_BAR_V2,
                    autoplay: !1,
                    location: d.dr.QUESTS_BAR,
                  }),
                }),
            }),
            (0, o.jsxs)("div", {
              className: u.questProgressCopy,
              children: [
                (0, o.jsx)(i.l7, {
                  inState: t,
                  id: "progress-title",
                  children: (e) =>
                    (0, o.jsx)(s.Text, {
                      ref: e,
                      className: u.questProgressHint,
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: _,
                    }),
                }),
                (0, o.jsx)(i.l7, {
                  inState: t,
                  id: "progress-subtitle",
                  isTextTransition: !0,
                  children: (e) =>
                    (0, o.jsx)(s.Text, {
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
      var o = n(200651);
      n(192379);
      var s = n(100621),
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
          { enabled: C, variant: g } = l.Hp.useExperiment({
            location: c.dr.QUESTS_BAR,
          });
        if (!C) return null;
        let _ = null;
        return (g === l.PW.REWARD_AVAILABLE
          ? (_ = d.Z.Messages.REWARD_AVAILABLE)
          : g === l.PW.EARN_A_REWARD
            ? (_ = d.Z.Messages.EARN_A_REWARD)
            : g === l.PW.EARN_A_REWARD_EXCLAMATION &&
              (_ = d.Z.Messages.EARN_A_REWARD_EXCLAIMATION),
        null == _)
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(s.animated.div, {
                  className: u.rewardTileSpacer,
                  style: {
                    transform: (0, s.to)(
                      [n.to({ range: [0, 1], output: [1, 24 / 38] })],
                      (e) => "scale(".concat(e, ")"),
                    ),
                  },
                }),
                (0, o.jsx)(s.animated.div, {
                  className: u.rewardTileContainer,
                  style: {
                    transform: (0, s.to)(
                      [
                        n.to({ range: [0, 1], output: [-8, 0] }),
                        n.to({ range: [0, 1], output: [0, 92] }),
                        n.to({ range: [1, 0], output: [1, 0.75] }),
                      ],
                      (e, t, n) =>
                        "translate("
                          .concat(e, "px, ")
                          .concat(t, "px) scale(")
                          .concat(n, ")"),
                    ),
                  },
                  children: (0, o.jsx)(i.Z, {
                    learnMoreStyle: "text",
                    quest: t,
                    questContent: a.jn.QUEST_BAR_V2,
                    location: c.dr.QUESTS_BAR,
                    autoplay: p && !x,
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: u.rewardHighlightLogoCTA,
                  children: [
                    (0, o.jsx)(s.animated.div, {
                      className: u.partnerBranding,
                      style: {
                        opacity: n.to({
                          range: [0, 1],
                          output: [1, p ? 1 : 0.8],
                        }),
                        transform: (0, s.to)(
                          [
                            n.to({ range: [0, 1], output: [0, -48] }),
                            n.to({ range: [0, 1], output: [0, 8] }),
                          ],
                          (e, t) =>
                            "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                      },
                      children: m,
                    }),
                    (0, o.jsx)(s.animated.div, {
                      className: u.rewardHighlightCTA,
                      style: {
                        opacity: n.to({ range: [0, 1], output: [0.7, 0] }),
                      },
                      children: (0, o.jsx)(r.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        children: _,
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
      var o = n(200651),
        s = n(192379),
        r = n(100621),
        a = n(613087);
      function l(e) {
        let { expansionSpring: t, isExpanded: n } = e,
          {
            animatedComponentProps: l,
            recalculateAnimationPositions: i,
            mountPoints: c,
          } = s.useContext(a.B$);
        return (
          s.useEffect(() => {
            i();
          }, [i, n]),
          (0, o.jsx)("div", {
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
                  collapsedLeft: s,
                  expandedLeft: a,
                  collapsedTop: l,
                  expandedTop: i,
                  width: d,
                } = e,
                u = c.get(n);
              return (0, o.jsx)(
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
                        t.to({ range: [0, 1], output: [s, a] }),
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
      var o = n(200651),
        s = n(481060),
        r = n(689938),
        a = n(597916);
      function l(e) {
        let { onClick: t, children: n } = e;
        return (0, o.jsx)(s.Button, {
          onClick: t,
          className: a.button,
          innerClassName: a.buttonInner,
          look: "blank",
          children: n,
        });
      }
      t.Z = function (e) {
        let { onDesktop: t, onConsole: n } = e;
        return (0, o.jsxs)("div", {
          className: a.buttons,
          children: [
            (0, o.jsxs)(l, {
              onClick: t,
              children: [
                r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                (0, o.jsx)(s.ScreenIcon, { size: "sm" }),
              ],
            }),
            (0, o.jsxs)(l, {
              onClick: n,
              children: [
                r.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                (0, o.jsx)(s.GameControllerIcon, { size: "sm" }),
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
      var o = n(918701),
        s = n(46140);
      let r = (e) => {
        let t = "1193992107035983872" === e.id,
          n = (0, o.zK)(e, s.S7.IN_HOUSE_CONSOLE_QUEST),
          r = (0, o.zK)(e, s.S7.MOBILE_CONSOLE_QUEST);
        return t || n || r;
      };
    },
    448018: function (e, t, n) {
      n.d(t, {
        v: function () {
          return p;
        },
      });
      var o = n(497505),
        s = n(988303),
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
            i = (!l && t === s.P.V2) || (l && n === s.P.V2) || (0, a.a)(e),
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
            trackingCtx: { content: i ? o.jn.QUEST_BAR_V2 : o.jn.QUEST_BAR },
          };
        };
    },
    647365: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var s = n(453217),
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
        return (0, o.jsx)(r.Z, {
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
          children: (0, o.jsx)(s.Z, {
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
          return _;
        },
      }),
        n(47120),
        n(724458);
      var o = n(200651),
        s = n(192379),
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
        C = {
          "layers[1].shapes[1].g.k.k": [
            0, 0.522, 0.278, 0.776, 0.5, 0.522, 0.278, 0.776, 1, 0.522, 0.278,
            0.776,
          ],
          "layers[2].shapes[1].g.k.k": [
            0, 0.714, 0.271, 0.757, 0.5, 0.714, 0.271, 0.757, 1, 0.714, 0.271,
            0.757,
          ],
        };
      async function g(e, t) {
        let o = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
        return (
          (function (e, t, n) {
            for (let o in t) {
              let t = i().get(e, o);
              if (null == t) continue;
              let s = t.map((e, t) => {
                var o;
                return null !== (o = n[t]) && void 0 !== o ? o : e;
              });
              i().set(e, o, s);
            }
          })(o, C, t),
          o
        );
      }
      function _(e) {
        var t;
        let {
            animationClassName: n,
            className: r,
            quest: l,
            useReducedMotion: i,
          } = e,
          C = (0, c.e7)([u.Z], () => u.Z.isFocused()),
          _ = s.useRef(null),
          [f, h] = s.useState(!1),
          E = s.useMemo(() => {
            if (null == l) return null;
            let e = (0, p.oo)(l.config.colors.primary),
              t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
              n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return g(l.id, n);
          }, [l]),
          S =
            (null === (t = l.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          T = !i && C;
        s.useEffect(() => {
          var e, t, n, o;
          C
            ? T &&
              (null === (o = _.current) ||
                void 0 === o ||
                null === (n = o.animation) ||
                void 0 === n ||
                n.play())
            : null === (t = _.current) ||
              void 0 === t ||
              null === (e = t.animation) ||
              void 0 === e ||
              e.goToAndStop(0, !0);
        }, [T, C]);
        let v = s.useCallback(() => {
          h(!0);
        }, []);
        return null == E || S
          ? (0, o.jsx)("div", {
              className: m.backgroundFallback,
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(l.config.colors.primary, ", ")
                  .concat(l.config.colors.secondary, ")"),
              },
            })
          : (0, o.jsx)("div", {
              className: a()(m.lottieAnimationBackgroundWrapper, r),
              children: (0, o.jsx)(
                d.LottieAnimation,
                {
                  ref: _,
                  onComplete: v,
                  importData: () => E,
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
      var o = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        a = n(100621),
        l = n(481060),
        i = n(113434),
        c = n(497505),
        d = n(685613),
        u = n(340100),
        p = n(644646),
        m = n(788284),
        x = n(46140),
        C = n(689938),
        g = n(968387);
      t.Z = function (e) {
        var t;
        let {
            className: n,
            expansionSpring: s,
            isExpanded: _,
            isExpansionAnimationComplete: f,
            quest: h,
            useReducedMotion: E,
          } = e,
          S =
            (null === (t = h.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { percentComplete: T } = (0, i.Rf)(h),
          v = (0, i.Jf)(h),
          N = null != v ? v.completedRatio > 0 : T > 0;
        return (0, o.jsxs)(a.animated.div, {
          "aria-hidden": _ && f,
          className: r()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: _,
            [g.contentCollapsedAccepted]: S,
          }),
          style: { opacity: s.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, o.jsx)(m.Z, { quest: h, useReducedMotion: E }),
            (0, o.jsx)("div", {
              className: g.contentCollapsedWrapper,
              children: S
                ? (0, o.jsxs)("div", {
                    className: g.questProgressWrapper,
                    children: [
                      (0, o.jsx)(p.Z, {
                        className: g.questProgressRewardTile,
                        quest: h,
                        questContent: c.jn.QUEST_BAR,
                        autoplay: !1,
                        location: x.dr.QUESTS_BAR,
                      }),
                      N
                        ? (0, o.jsx)(u.Z, {
                            className: g.questProgressBar,
                            quest: h,
                          })
                        : (0, o.jsx)(l.Text, {
                            className: g.questProgressHint,
                            color: "always-white",
                            variant: "text-sm/semibold",
                            children:
                              C.Z.Messages
                                .QUESTS_COMPLETION_PROGRESS_NOT_STARTED,
                          }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: g.brandingWrapper,
                    children: [
                      (0, o.jsx)(d.Z, {
                        className: g.partnerBranding,
                        quest: h,
                      }),
                      (0, o.jsx)(l.Heading, {
                        color: "always-white",
                        variant: "heading-sm/medium",
                        className: g.questName,
                        children: C.Z.Messages.QUEST.format({
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
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(442837),
        c = n(950104),
        d = n(780384),
        u = n(481060),
        p = n(70097),
        m = n(703656),
        x = n(358085),
        C = n(617136),
        g = n(272008),
        _ = n(113434),
        f = n(569984),
        h = n(497505),
        E = n(918701),
        S = n(865364),
        T = n(585500),
        v = n(475595),
        N = n(566078),
        j = n(340100),
        A = n(611855),
        b = n(644646),
        R = n(78826),
        B = n(670638),
        I = n(667105),
        y = n(46140),
        M = n(981631),
        O = n(701488),
        k = n(689938),
        w = n(609706);
      let L = s.forwardRef(function (e, t) {
        var n, r;
        let {
            children: S,
            className: L,
            collapsedHeight: q,
            expansionSpring: Z,
            isExpanded: P,
            isExpansionAnimationComplete: Q,
            onCtxMenuOpen: D,
            onCtxMenuClose: W,
            onCtxMenuSelect: H,
            quest: V,
            useReducedMotion: z,
          } = e,
          G = (0, i.e7)([f.Z], () => f.Z.isEnrolling(V.id), [V]),
          F = (0, _.B6)(V.config.expiresAt),
          K = N.r.build(V.config),
          Y = (0, _.B6)(K.rewardsExpireAt),
          X = s.useMemo(() => (0, v.fh)(V, v.Bd.HERO), [V]),
          J = (0, I.tP)(K.application.id),
          $ = K.features.has(y.S7.START_QUEST_CTA)
            ? C.jZ.START_QUEST
            : C.jZ.ACCEPT_QUEST,
          ee = K.features.has(y.S7.START_QUEST_CTA)
            ? k.Z.Messages.QUESTS_START_QUEST
            : k.Z.Messages.QUESTS_ACCEPT_QUEST,
          et = s.useCallback(() => {
            (0, g.AH)(V.id, {
              questContent: h.jn.QUEST_BAR,
              questContentCTA: $,
            }),
              K.features.has(y.S7.START_QUEST_CTA) &&
                (0, m.uL)(M.Z5c.ACTIVITY_DETAILS(O.In), void 0);
          }, [V, $, K.features]),
          en = (0, I.hf)({ quest: V, location: h.jn.QUEST_BAR }),
          eo = s.useCallback(() => {
            (0, E.FE)(V, {
              content: h.jn.QUEST_BAR,
              ctaContent: C.jZ.OPEN_GAME_LINK,
            });
          }, [V]),
          es = K.features.has(y.S7.POST_ENROLLMENT_CTA),
          er = (0, _.Rf)(V),
          ea = (0, _.Jf)(V),
          el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
          ei =
            (null === (n = V.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ec =
            (null === (r = V.userStatus) || void 0 === r
              ? void 0
              : r.completedAt) != null,
          ed = s.useMemo(() => (0, E.Xv)(V.config), [V.config]),
          eu = P && Q,
          ep = (0, T.D)({
            quest: V,
            taskDetails: er,
            location: y.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0,
          }),
          em = (0, x.isWeb)(),
          ex = s.useMemo(() => {
            let e = (0, d.Qg)(V.config.colors.primary, {
              base: "#ffffff",
              contrastRatio: d.S3.Text,
            });
            return {
              "--custom-cta-color": e,
              "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
              "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
          }, [V.config.colors.primary]);
        return (0, o.jsxs)(l.animated.div, {
          className: a()(L, w.contentExpanded, { [w.contentInteractable]: eu }),
          style: {
            backgroundColor: V.config.colors.secondary,
            transform: ec
              ? void 0
              : (0, l.to)(
                  [
                    Z.to({ range: [0, 1], output: [0, -100] }),
                    Z.to({ range: [0, 1], output: [0, q] }),
                  ],
                  (e, t) =>
                    "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                ),
          },
          children: [
            S,
            (0, o.jsx)("div", {
              "aria-hidden": !eu,
              children: ei
                ? (0, o.jsxs)("div", {
                    className: w.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, o.jsxs)("div", {
                        className: w.utils,
                        children: [
                          (0, o.jsxs)("div", {
                            className: w.questAcceptedContentHeading,
                            children: [
                              (0, o.jsx)(b.Z, {
                                className: w.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: V,
                                questContent: h.jn.QUEST_BAR,
                                location: y.dr.QUESTS_BAR,
                              }),
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, E.AV)({
                                      quest: V,
                                      taskDetails: er,
                                      thirdPartyTaskDetails:
                                        null != ea ? ea : void 0,
                                    }),
                                  }),
                                  (0, o.jsx)(u.Text, {
                                    className:
                                      w.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: ec
                                      ? k.Z.Messages.QUESTS_CLAIM_BY_DATE.format(
                                          { expirationDate: Y },
                                        )
                                      : k.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format(
                                          { expirationDate: F },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)(B.r, {
                            onOpen: D,
                            onClose: W,
                            onSelect: H,
                            questContent: h.jn.QUEST_BAR,
                            quest: V,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, o.jsx)(u.Clickable, {
                                ...e,
                                className: w.submenuWrapper,
                                "aria-label": k.Z.Messages.ACTIONS,
                                children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: w.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      ec
                        ? (0, o.jsx)(u.Button, {
                            className: a()(w.cta, w.ctaClaimReward),
                            style: ed ? ex : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: en,
                            size: u.Button.Sizes.NONE,
                            children: k.Z.Messages.QUESTS_CLAIM_REWARD,
                          })
                        : (0, o.jsx)(u.Text, {
                            className: w.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ep,
                          }),
                      (0, o.jsx)(j.Z, { quest: V }),
                      !em &&
                        !el &&
                        !J &&
                        es &&
                        (0, o.jsx)(U, { onClick: eu ? eo : void 0 }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsxs)("div", {
                        className: w.questPromoContent,
                        ref: t,
                        children: [
                          (0, o.jsxs)("div", {
                            className: w.utils,
                            children: [
                              (0, o.jsx)(A.Z, { color: "always-white" }),
                              (0, o.jsx)(B.r, {
                                onOpen: D,
                                onClose: W,
                                onSelect: H,
                                questContent: h.jn.QUEST_BAR,
                                quest: V,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                children: (e) =>
                                  (0, o.jsx)(u.Clickable, {
                                    ...e,
                                    className: w.submenuWrapper,
                                    "aria-label": k.Z.Messages.ACTIONS,
                                    children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: w.submenuIcon,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: w.details,
                            children: [
                              (0, o.jsx)(b.Z, {
                                className: w.rewardTile,
                                learnMoreStyle: "text",
                                quest: V,
                                questContent: h.jn.QUEST_BAR,
                                location: y.dr.QUESTS_BAR,
                              }),
                              (0, o.jsx)(u.Heading, {
                                className: w.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: k.Z.Messages.QUESTS_TITLE.format({
                                  questName: V.config.messages.questName,
                                }),
                              }),
                              (0, o.jsx)(u.Text, {
                                className: w.description,
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: ep,
                              }),
                            ],
                          }),
                          (0, o.jsx)(u.Button, {
                            className: w.cta,
                            style: "1232852290197655573" !== V.id ? ex : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: eu ? et : void 0,
                            size: u.Button.Sizes.NONE,
                            submitting: G,
                            children: ee,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: w.heroAssetWrapper,
                        style: { color: V.config.colors.secondary },
                        children: X.isAnimated
                          ? (0, o.jsx)(R.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => {
                                var t;
                                return (0, o.jsx)(p.Z, {
                                  ref: e,
                                  autoPlay: !z,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                  className: w.heroAsset,
                                  controls: !1,
                                  children: (0, o.jsx)("source", {
                                    src: X.url,
                                    type:
                                      null !== (t = X.mimetype) && void 0 !== t
                                        ? t
                                        : void 0,
                                  }),
                                });
                              },
                            })
                          : (0, o.jsx)(R.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                (0, o.jsx)("img", {
                                  ref: e,
                                  alt: "",
                                  className: w.heroAsset,
                                  src: X.url,
                                }),
                            }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      });
      function U(e) {
        let { style: t, onClick: n } = e;
        return (0, S.O)({ location: y.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, o.jsx)(u.Button, {
              className: w.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: k.Z.Messages.QUESTS_GET_THIS_GAME,
            })
          : null;
      }
      t.Z = L;
    },
    623249: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
          openConsoleConnectionErrorsModal: function () {
            return j;
          },
        }),
        n(47120);
      var o = n(200651),
        s = n(192379),
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
        C = n(497505),
        g = n(918701),
        _ = n(475595),
        f = n(667105),
        h = n(981631),
        E = n(689938),
        S = n(24444),
        T = n(708901);
      function v(e) {
        let { questId: t, errorHints: n, transitionState: r, onClose: v } = e,
          j = (0, x.B4)(t);
        null == j && v();
        let [A, b] = (0, s.useState)(n),
          R = (0, x.KX)(),
          B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
          I = (0, f.g2)({ useReducedMotion: B, className: S.colorTransition }),
          y = A.filter((e) =>
            ["xbox", "playstation"].includes(e.connected_account_type),
          ),
          M = (0, g.Bz)(j),
          O = (0, l.e7)([p.Z], () => p.Z.getState().theme),
          k = (0, i.wj)(O) ? h.BRd.DARK : h.BRd.LIGHT,
          { startConsoleQuest: w, startingConsoleQuest: L } = (0, x.GI)({
            questId: j.id,
            beforeRequest: () => {
              I.startAnimation(),
                (0, m._3)({
                  questId: j.id,
                  questContent: C.jn.CONNECTIONS_MODAL,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: (e) => {
              I.stopAnimation(), b(e);
            },
          });
        return (0, o.jsxs)(c.ModalRoot, {
          transitionState: r,
          size: c.ModalSize.DYNAMIC,
          className: S.modalRoot,
          children: [
            (0, o.jsxs)(c.ModalHeader, {
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              className: S.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: S.modalTop,
                  children: [
                    (0, o.jsx)("div", {
                      className: S.iconFrame,
                      children: (0, o.jsx)("img", {
                        className: S.icon,
                        alt: "",
                        src: T,
                      }),
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                      className: S.closeBtn,
                      onClick: v,
                    }),
                  ],
                }),
                (0, o.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  children: E.Z.Messages.QUESTS_CONNECTION_MODAL_ERROR_HEADER,
                }),
                (0, o.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: S.upperBodyText,
                  children: R.message,
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: S.modalContent,
              children: [
                (0, o.jsxs)("div", {
                  className: S.contentHeader,
                  children: [
                    (0, o.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "header-secondary",
                      children: E.Z.Messages.CONNECTED_ACCOUNTS,
                    }),
                    (0, o.jsxs)(c.Clickable, {
                      className: a()(S.refreshWrapper, { [S.disabled]: L }),
                      onClick: w,
                      children: [
                        I.render(),
                        (0, o.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color: "currentColor",
                          className: S.colorTransition,
                          children: E.Z.Messages.REFRESH,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: S.accountsWrapper,
                  children: [
                    (0, o.jsx)(N, {
                      icon: (0, o.jsx)(c.ScreenIcon, { size: "sm" }),
                      text: E.Z.Messages.QUESTS_THIS_PC,
                    }),
                    (0, o.jsx)(N, {
                      icon: (0, o.jsx)(c.GameControllerIcon, { size: "sm" }),
                      text: E.Z.Messages.QUESTS_CONNECTED_CONSOLES,
                      errors: M ? void 0 : y.map((e) => e.message),
                      gameTile: M
                        ? (0, o.jsx)(c.Tooltip, {
                            "aria-label": j.config.messages.gameTitle,
                            text: () =>
                              (0, o.jsxs)("div", {
                                className: S.tooltip,
                                children: [
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: j.config.messages.gameTitle,
                                  }),
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: E.Z.Messages.QUESTS_GAME_DETECTED,
                                  }),
                                ],
                              }),
                            children: (e) =>
                              (0, o.jsx)("img", {
                                ...e,
                                className: S.gameTile,
                                alt: j.config.messages.gameTitle,
                                src: (0, _.fh)(j, _.Bd.GAME_TILE, k).url,
                              }),
                          })
                        : null,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalFooter, {
              className: S.footer,
              children: [
                (0, o.jsx)(c.Button, {
                  size: c.ButtonSizes.MIN,
                  onClick: v,
                  className: S.footerCloseButton,
                  children: E.Z.Messages.CLOSE,
                }),
                (0, o.jsx)(c.Button, {
                  look: c.ButtonLooks.LINK,
                  color: c.ButtonColors.PRIMARY,
                  onClick: () => {
                    v(),
                      (0, g.V$)(
                        { quest: j },
                        {
                          content: C.jn.CONNECTIONS_MODAL,
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
        let { icon: t, text: n, errors: s = [], gameTile: r } = e,
          l = s.length > 0,
          i = l ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
        return (0, o.jsxs)("div", {
          className: S.connectionRow,
          children: [
            (0, o.jsxs)("div", {
              className: a()(S.connectionRowHeader, {
                [S.connectionRowHeaderError]: l,
              }),
              children: [
                (0, o.jsxs)("div", {
                  className: S.connectionRowHeaderContent,
                  children: [
                    t,
                    (0, o.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "text-normal",
                      children: n,
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: S.connectionRowHeaderContent,
                  children: [
                    r,
                    (0, o.jsx)(i, {
                      color: "currentColor",
                      size: "sm",
                      className: a()({ [S.success]: !l, [S.error]: l }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: S.errorsContainer,
              children: s.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: S.errorRow,
                    children: [
                      (0, o.jsx)(c.WarningIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: S.error,
                      }),
                      (0, o.jsx)(c.Text, {
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
      function j(e) {
        (0, c.openModalLazy)(async () => {
          let { default: t } = await Promise.resolve().then(n.bind(n, 623249));
          return (n) => (0, o.jsx)(t, { ...n, ...e });
        });
      }
    },
    642145: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return o;
        },
      });
      let o = { tension: 250, friction: 20 };
    },
    415104: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var o = n(200651),
        s = n(192379),
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
      function C(e) {
        let {
            quest: t,
            className: n,
            questContent: r,
            contentPosition: C,
            rowIndex: g,
          } = e,
          [_, f] = s.useState(!1),
          [h, E] = s.useState([]),
          S = (0, i.qb)(t),
          T = s.useCallback(() => {
            f(!0),
              (0, l.dA)({
                questId: t.id,
                event: m.rMx.QUEST_HOVER,
                properties: (0, l.mH)(r),
              });
          }, [f, r, t.id]),
          v = s.useCallback(() => {
            f(!1);
          }, [f]);
        return (0, o.jsx)(d.A, {
          questOrQuests: t,
          questContent: r,
          questContentPosition: C,
          questContentRowIndex: g,
          trackGuildAndChannelMetadata: r === c.jn.QUESTS_EMBED,
          children: (e) =>
            (0, o.jsxs)("div", {
              id: "quest-tile-".concat(t.id),
              ref: (t) => {
                e.current = t;
              },
              className: a()(x.container, n),
              onMouseEnter: T,
              onMouseLeave: v,
              children: [
                (0, o.jsx)(u.Z, {
                  quest: t,
                  isHovering: _,
                  errorHints: h,
                  warningHints: S,
                }),
                (0, o.jsx)(p.Z, {
                  quest: t,
                  questContent: r,
                  isHovering: _,
                  contentPosition: C,
                  rowIndex: g,
                  onReceiveErrorHints: E,
                }),
              ],
            }),
        });
      }
    },
    439826: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(571269),
        n(298267);
      var o,
        s,
        r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        c = n(100621),
        d = n(186325),
        u = n(780384),
        p = n(481060),
        m = n(393238),
        x = n(410030),
        C = n(44315),
        g = n(70097),
        _ = n(617136),
        f = n(272008),
        h = n(113434),
        E = n(497505),
        S = n(918701),
        T = n(475595),
        v = n(720293),
        N = n(623249),
        j = n(78826),
        A = n(670638),
        b = n(341907),
        R = n(642145),
        B = n(981631),
        I = n(689938),
        y = n(411702);
      function M(e) {
        var t;
        let { quest: n, errorHints: o, warningHints: s, isDarkTheme: l } = e,
          { ref: i, height: d = 0 } = (0, m.Z)([o]),
          u =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          x = (0, h.z)(n),
          { type: g, hints: _ } = a.useMemo(
            () =>
              u || x
                ? { type: 2, hints: [] }
                : o.length > 0
                  ? { type: 0, hints: o.map((e) => e.message) }
                  : s.length > 0
                    ? { type: 1, hints: s }
                    : { type: 2, hints: [] },
            [o, u, x, s],
          ),
          f = 2 !== g,
          E = (0, p.useSpring)({
            opacity: f ? 1 : 0,
            height: f ? d : 0,
            config: R.Y,
          }),
          S = 0 === g ? p.CircleWarningIcon : p.CircleInformationIcon,
          T = (0, C.Lq)(B.Ilk.RED_345),
          v =
            0 === g
              ? T
              : l
                ? p.tokens.colors.TEXT_NORMAL
                : p.tokens.colors.WHITE;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(c.animated.div, {
            style: E,
            children: (0, r.jsxs)("div", {
              ref: i,
              className: y.hints,
              children: [
                (0, r.jsxs)("div", {
                  className: y.hintsContainer,
                  children: [
                    (0, r.jsx)(S, { size: "xs", color: v }),
                    (0, r.jsx)(p.Text, {
                      variant: "text-xs/medium",
                      color: l ? "text-muted" : "always-white",
                      children: _.at(0),
                    }),
                  ],
                }),
                0 === g &&
                  (0, r.jsx)(p.Button, {
                    onClick: () =>
                      (0, N.openConsoleConnectionErrorsModal)({
                        questId: n.id,
                        errorHints: o,
                      }),
                    size: p.ButtonSizes.MIN,
                    look: p.ButtonLooks.LINK,
                    color: p.ButtonColors.CUSTOM,
                    style: { color: (0, C.Lq)(B.Ilk.BLUE_345) },
                    children: "See Details",
                  }),
              ],
            }),
          }),
        });
      }
      function O(e) {
        var t;
        let { asset: n, reducedMotionEnabled: o, visible: s } = e,
          l = a.useRef(null);
        return (
          a.useEffect(() => {
            null != l.current && s && l.current.play();
          }, [s]),
          (0, r.jsx)(g.Z, {
            ref: l,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: i()(y.videoOverlay, { [y.videoOverlayVisible]: s }),
            controls: !1,
            children: (0, r.jsx)("source", {
              src: n.url,
              type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0,
            }),
          })
        );
      }
      function k(e) {
        var t, n, o;
        let {
            quest: s,
            isHovering: l,
            errorHints: c,
            warningHints: m,
            onCtxMenuClose: C,
            onCtxMenuOpen: N,
            onCtxMenuSelect: R,
          } = e,
          k = (0, S.cr)(s),
          w = a.useMemo(() => (0, T.fh)(s, T.Bd.HERO), [s]),
          L = a.useMemo(() => (0, T.fh)(s, T.Bd.LOGO_TYPE, "dark"), [s]),
          U = (0, x.ZP)(),
          q = ((0, u.wj)(U) ? B.BRd.DARK : B.BRd.LIGHT) === B.BRd.DARK,
          Z = a.useContext(d.S).reducedMotion.enabled,
          P = (0, S.Mi)(s, E.jn.GIFT_INVENTORY_FOR_YOU),
          Q = (0, h.tP)(s),
          D =
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          W = a.useRef(l),
          H = a.useRef(null),
          V = (0, h.B6)(s.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          z =
            (null === (n = s.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          G =
            (null === (o = s.userStatus) || void 0 === o
              ? void 0
              : o.completedAt) != null,
          F = a.useCallback(() => {
            if (!!k)
              (0, f.AH)(s.id, {
                questContent: E.jn.QUEST_HOME_DESKTOP,
                questContentCTA: _.jZ.ACCEPT_QUEST,
              }),
                (0, b.openVideoQuestModal)(s);
          }, [k, s]);
        a.useEffect(() => {
          if (w.isAnimated && null != H.current)
            return (
              W.current !== l &&
                (l && !Z
                  ? H.current.play()
                  : (H.current.pause(), (H.current.currentTime = 0))),
              (W.current = l),
              () => {
                var e;
                null === (e = H.current) || void 0 === e || e.pause();
              }
            );
        }, [l, w, Z]);
        let K = a.useMemo(() => (0, v.z)(v.i.QUEST_HOME_VIDEO, s), [s]);
        return (0, r.jsxs)("div", {
          className: y.container,
          children: [
            (0, r.jsxs)("div", {
              className: y.heroAssetWrapper,
              children: [
                w.isAnimated
                  ? (0, r.jsx)(j.Fl, {
                      id: "QuestTileBanner_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (H.current = e.current),
                          (0, r.jsx)(g.Z, {
                            ref: e,
                            autoPlay: !Z && l,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: y.heroAsset,
                            controls: !1,
                            children: (0, r.jsx)("source", {
                              src: w.url,
                              type:
                                null !== (t = w.mimetype) && void 0 !== t
                                  ? t
                                  : void 0,
                            }),
                          })
                        );
                      },
                    })
                  : (0, r.jsx)(j.Fl, {
                      id: "QuestTileBanner",
                      children: (e) =>
                        (0, r.jsx)("img", {
                          ref: e,
                          alt: "".concat(s.config.messages.questName),
                          className: y.heroAsset,
                          src: w.url,
                        }),
                    }),
                k &&
                  !Z &&
                  null != K &&
                  (0, r.jsx)(O, {
                    asset: K,
                    reducedMotionEnabled: Z,
                    visible: l,
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: i()(y.overlay, {
                [y.darkThemeGradient]: q,
                [y.lightThemeGradient]: !q,
              }),
            }),
            (0, r.jsxs)("div", {
              className: y.positionContentOverBackground,
              children: [
                (0, r.jsxs)("div", {
                  className: y.contents,
                  children: [
                    (0, r.jsxs)("div", {
                      className: y.topRow,
                      children: [
                        P &&
                          !Q &&
                          !D &&
                          (0, r.jsx)("div", {
                            className: y.pill,
                            children: (0, r.jsx)(p.Text, {
                              variant: "eyebrow",
                              color: "always-white",
                              className: y.eyebrowText,
                              children: I.Z.Messages.RECOMMENDED,
                            }),
                          }),
                        k &&
                          (0, r.jsx)(p.Tooltip, {
                            text: G
                              ? "Watch again"
                              : z
                                ? "Continue watching"
                                : "Start video quest",
                            children: (e) =>
                              (0, r.jsx)(p.Clickable, {
                                ...e,
                                className: y.utilButtonWrapper,
                                "aria-label": I.Z.Messages.PLAY,
                                onClick: F,
                                children: (0, r.jsx)(p.PlayIcon, {
                                  className: y.utilButtonIcon,
                                }),
                              }),
                          }),
                        (0, r.jsx)(A.r, {
                          onOpen: N,
                          onClose: C,
                          onSelect: R,
                          questContent: E.jn.QUEST_HOME_DESKTOP,
                          quest: s,
                          hideLearnMore: !0,
                          shouldShowDisclosure: !0,
                          showShareLink: !0,
                          children: (e) =>
                            (0, r.jsx)(p.Clickable, {
                              ...e,
                              className: y.utilButtonWrapper,
                              "aria-label": I.Z.Messages.ACTIONS,
                              children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: i()(y.utilButtonIcon),
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(j.Fl, {
                      id: "QuestPartnerBranding_gameLogotype",
                      children: (e) =>
                        (0, r.jsx)("img", {
                          ref: e,
                          className: y.partnerBranding,
                          alt: s.config.messages.gameTitle,
                          src: L.url,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                      className: y.bottomRow,
                      children: [
                        (0, r.jsx)(p.Text, {
                          variant: "text-sm/medium",
                          color: q ? "text-muted" : "always-white",
                          children:
                            I.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({
                              brandName: s.config.messages.gamePublisher,
                            }),
                        }),
                        Q || D
                          ? null
                          : (0, r.jsx)(p.Text, {
                              variant: "text-sm/medium",
                              color: q ? "text-muted" : "always-white",
                              children:
                                I.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format(
                                  { expiryDate: V },
                                ),
                            }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(M, {
                  quest: s,
                  errorHints: c,
                  warningHints: m,
                  isDarkTheme: q,
                }),
              ],
            }),
          ],
        });
      }
      ((s = o || (o = {}))[(s.ERROR = 0)] = "ERROR"),
        (s[(s.WARNING = 1)] = "WARNING"),
        (s[(s.NONE = 2)] = "NONE");
    },
    69439: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var o = n(200651),
        s = n(192379),
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
        C = n(667105),
        g = n(341907),
        _ = n(284851),
        f = n(46140),
        h = n(689938),
        E = n(632946);
      let S = [
        {
          value: f.cd.DESKTOP,
          get label() {
            return h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP;
          },
        },
        {
          value: f.cd.CONSOLE,
          get label() {
            return h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE;
          },
        },
      ];
      function T(e) {
        let t,
          n,
          { value: s } = e;
        switch (s) {
          case f.cd.DESKTOP:
            (n = (0, o.jsx)(i.ScreenIcon, {})),
              (t = h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP);
            break;
          case f.cd.CONSOLE:
            (n = (0, o.jsx)(i.GameControllerIcon, {})),
              (t = h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE);
            break;
          default:
            return null;
        }
        return (0, o.jsxs)("div", {
          className: E.platformSelectorPrimaryLabel,
          children: [n, t],
        });
      }
      function v(e) {
        var t, n, r, v;
        let {
            quest: N,
            location: j,
            onReceiveErrorHints: A,
            contentPosition: b,
            rowIndex: R,
          } = e,
          B = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
          I = (0, C.g2)({ useReducedMotion: B }),
          y = (0, u._s)({ quest: N }),
          M = (0, u.z)(N),
          O = (0, u.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          { isClaiming: k, isEnrolling: w } = (0, l.cj)([p.Z], () => ({
            isClaiming:
              p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id),
          })),
          L =
            (null === (t = N.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          U =
            (null === (n = N.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          q =
            U &&
            (null === (r = N.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) == null,
          Z = (0, x.iQ)(N),
          P = !(0, x.zi)(N),
          Q = (0, u._Q)(N),
          D = (0, x.zK)(N, f.S7.IN_HOUSE_CONSOLE_QUEST),
          W = (0, x.Xv)(N.config),
          H = (0, x.cr)(N),
          V = (0, u.Rf)(N),
          [z, G, F] = (0, u.me)(N, V),
          K = P && Q === u.OH.ACCEPTED,
          Y = K && z === m.LI.SELECT,
          X = K && !Y && G.length > 1,
          J = s.useCallback(
            (e) => {
              F(e), e === f.cd.DESKTOP && A([]);
            },
            [F, A],
          ),
          { text: $, onClick: ee } = (0, C.Ks)({
            progressState: Q,
            quest: N,
            isInHouseQuest: D,
            location: j,
            isCollectibleQuest: W,
            questContentPosition: b,
            questContentRowIndex: R,
            inGiftInventory: !0,
            isVideoQuest: H,
          }),
          { startingConsoleQuest: et, startConsoleQuest: en } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
              I.startAnimation(),
                (0, d._3)({
                  questId: N.id,
                  questContent: j,
                  questContentCTA: d.jZ.DEFIBRILLATOR,
                  questContentPosition: b,
                  questContentRowIndex: R,
                });
            },
            afterRequest: (e) => {
              I.stopAnimation(), A(e);
            },
          }),
          eo =
            (null === (v = N.userStatus) || void 0 === v
              ? void 0
              : v.claimedAt) != null,
          es = null;
        return (Z && q
          ? (es = (0, o.jsx)(i.Button, {
              color: i.ButtonColors.BRAND,
              submitting: k,
              onClick: null != ee ? ee : void 0,
              className: E.button,
              children: $,
            }))
          : U
            ? (es = H
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(i.Button, {
                        color: i.ButtonColors.PRIMARY,
                        className: E.button,
                        style: { flex: 1 },
                        onClick: () => {
                          (0, g.openVideoQuestModal)(N);
                        },
                        children: (0, o.jsxs)("div", {
                          className: E.ctaInner,
                          children: [
                            (0, o.jsx)(i.RetryIcon, {
                              color: i.tokens.colors.WHITE,
                              className: E.videoQuestPlayIcon,
                            }),
                            (0, o.jsx)("span", {
                              children: h.Z.Messages.QUESTS_WATCH_AGAIN,
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)(i.Button, {
                        color: i.ButtonColors.BRAND,
                        className: E.button,
                        onClick: null != ee ? ee : void 0,
                        children: $,
                      }),
                    ],
                  })
                : (0, o.jsx)(i.Button, {
                    color: i.ButtonColors.BRAND,
                    className: E.button,
                    onClick: null != ee ? ee : void 0,
                    children: $,
                  }))
            : P
              ? P && q
                ? (es = (0, o.jsx)(i.Button, {
                    color: i.ButtonColors.BRAND,
                    submitting: k,
                    onClick: null != ee ? ee : void 0,
                    className: E.button,
                    children: $,
                  }))
                : P && L && !eo
                  ? (es = Y
                      ? (0, o.jsx)(i.Select, {
                          className: E.platformSelectorPrimary,
                          isSelected: () => !1,
                          options: S,
                          placeholder:
                            h.Z.Messages.QUEST_MULTIPLATFORM_SELECT_SUBTITLE,
                          renderOptionLabel: T,
                          select: J,
                          serialize: (e) => {
                            switch (e) {
                              case f.cd.DESKTOP:
                                return h.Z.Messages
                                  .QUEST_MULTIPLATFORM_SELECT_DESKTOP;
                              case f.cd.CONSOLE:
                                return h.Z.Messages
                                  .QUEST_MULTIPLATFORM_SELECT_CONSOLE;
                            }
                          },
                        })
                      : (0, x.$J)(N) && !M && z !== m.LI.DESKTOP
                        ? y
                          ? (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              className: E.button,
                              onClick: null != ee ? ee : void 0,
                              children: $,
                            })
                          : (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              onClick: en,
                              disabled: et,
                              className: E.button,
                              children: (0, o.jsxs)("div", {
                                className: E.ctaInner,
                                children: [
                                  I.render(),
                                  h.Z.Messages
                                    .QUESTS_MICROHPONE_UNIT_BUTTON_CTA,
                                ],
                              }),
                            })
                        : H
                          ? (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.BRAND,
                              onClick: null != ee ? ee : void 0,
                              className: E.button,
                              children: $,
                            })
                          : (0, o.jsx)(i.Button, {
                              color: i.ButtonColors.PRIMARY,
                              disabled: !0,
                              className: E.button,
                              children: h.Z.Messages.QUEST_ACCEPTED,
                            }))
                  : P &&
                    !L &&
                    (es = (0, o.jsx)(i.Button, {
                      submitting: w,
                      color: i.ButtonColors.BRAND,
                      onClick: null != ee ? ee : void 0,
                      className: E.button,
                      children: $,
                    }))
              : (es = (0, o.jsx)(i.Button, {
                  color: i.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: E.button,
                  children: h.Z.Messages.QUESTS_ENDED_ON_DATE.format({
                    expiryDate: O,
                  }),
                })),
        null == es)
          ? null
          : (0, o.jsxs)("div", {
              className: E.container,
              children: [
                es,
                X &&
                  (0, o.jsx)(_.U, {
                    onSelect: J,
                    quest: N,
                    questContent: m.jn.ACTIVITY_PANEL,
                    children: (e) =>
                      (0, o.jsx)(i.Button, {
                        className: a()(E.button, E.platformSelectorSecondary),
                        color: i.ButtonColors.PRIMARY,
                        ...e,
                        children: (0, o.jsxs)("div", {
                          className: E.platformSelectorSecondaryContent,
                          children: [
                            (function (e) {
                              switch (e) {
                                case m.LI.DESKTOP:
                                  return (0, o.jsx)(i.ScreenIcon, {
                                    color: "currentColor",
                                  });
                                case m.LI.CONSOLE:
                                  return (0, o.jsx)(i.GameControllerIcon, {
                                    color: "currentColor",
                                  });
                                default:
                                  return null;
                              }
                            })(z),
                            (0, o.jsx)(i.ChevronSmallDownIcon, {
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
      var o = n(200651),
        s = n(192379),
        r = n(120356),
        a = n.n(r),
        l = n(100621),
        i = n(442837),
        c = n(481060),
        d = n(393238),
        u = n(607070),
        p = n(113434),
        m = n(566078),
        x = n(472144),
        C = n(644646),
        g = n(69439),
        _ = n(46140),
        f = n(642145),
        h = n(689938),
        E = n(684688);
      let S = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
      function T(e) {
        var t, n, r;
        let {
            quest: T,
            questContent: v,
            isHovering: N,
            contentPosition: j,
            rowIndex: A,
            onReceiveErrorHints: b,
          } = e,
          R = m.r.build(T.config),
          B = R.defaultReward.messages.name,
          I = R.defaultReward.messages.nameWithArticle,
          y =
            (null === (t = T.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { ref: M, scrollHeight: O } = (0, d.Z)(),
          k = 104 !== O,
          { expansionSpring: w } = (0, c.useSpring)({
            expansionSpring: N ? 1 : 0,
            config: { ...f.Y, clamp: !0 },
          }),
          L =
            (null === (n = T.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          U =
            (null === (r = T.userStatus) || void 0 === r
              ? void 0
              : r.claimedAt) != null,
          { completedRatio: q, completedRatioDisplay: Z } = (0, p.I)(T),
          P = (0, p.Bd)(T),
          Q = s.useCallback(
            (e) =>
              (0, o.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: "text-normal",
                tag: "span",
                className: E.header,
                children: e,
              }),
            [],
          ),
          D = s.useMemo(
            () =>
              U
                ? Q(B)
                : h.Z.Messages.QUESTS_CLAIM_REWARD_HOOK.format({
                    rewardWithArticleHook: () => Q(I),
                  }),
            [B, I, U, Q],
          ),
          W = s.useMemo(() => {
            if (null != P)
              return (0, o.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: a()(E.description),
                children: P,
              });
          }, [P]),
          H = (0, i.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, o.jsxs)("div", {
          className: a()(E.container),
          children: [
            (0, o.jsxs)(l.animated.div, {
              style: {
                maxHeight: w.to([0, 1], [104, (null != O ? O : 0) + 12]),
              },
              className: a()(E.rewardDescriptionContainer),
              children: [
                (0, o.jsxs)("div", {
                  className: E.assetWrapper,
                  children: [
                    !U &&
                      L &&
                      (0, o.jsx)("div", { className: E.completionAnimation }),
                    y && !U
                      ? (0, o.jsxs)("div", {
                          className: E.progressWrapper,
                          children: [
                            L &&
                              (0, o.jsx)(c.LottieAnimation, {
                                importData: S,
                                className: E.confetti,
                                loop: !1,
                                autoplay: !1,
                                shouldAnimate: !H,
                              }),
                            (0, o.jsx)(x.Z, {
                              quest: T,
                              size: 76,
                              percentComplete: q,
                              percentCompleteText: N ? Z : void 0,
                              children: (0, o.jsx)("div", {
                                className: E.circularRewardTileWrapper,
                                children: (0, o.jsx)(C.Z, {
                                  quest: T,
                                  questContent: v,
                                  className: E.circularQuestRewardTileAsset,
                                  location: _.dr.QUEST_HOME_DESKTOP,
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, o.jsx)(C.Z, {
                          quest: T,
                          autoplay: N,
                          questContent: v,
                          className: E.questRewardTileAsset,
                          location: _.dr.QUEST_HOME_DESKTOP,
                        }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  ref: M,
                  className: a()(E.textContainer, { [E.justifyCenter]: !k }),
                  children: [
                    (0, o.jsx)(c.Heading, {
                      variant: "eyebrow",
                      color: "text-brand",
                      className: E.questName,
                      children: h.Z.Messages.QUEST.format({
                        questName: T.config.messages.questName,
                      }),
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: E.header,
                      children: D,
                    }),
                    W,
                  ],
                }),
                k &&
                  (0, o.jsx)(l.animated.div, {
                    style: { opacity: w.to([0, 1], [1, 0]) },
                    className: E.textOverflowBlur,
                  }),
              ],
            }),
            (0, o.jsx)(g.Z, {
              quest: T,
              location: v,
              contentPosition: j,
              rowIndex: A,
              onReceiveErrorHints: b,
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
      var o = n(200651);
      n(192379);
      var s = n(481060),
        r = n(46140),
        a = n(689938);
      function l(e) {
        let { onClose: t, onSelect: n, quest: l } = e;
        return (0, o.jsx)(s.Menu, {
          variant: "fixed",
          onSelect: t,
          navId: "quest-home-platform-select-".concat(l.id),
          "aria-label": a.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: t,
          children: (0, o.jsxs)(
            s.MenuGroup,
            {
              children: [
                (0, o.jsx)(s.MenuItem, {
                  id: "desktop",
                  label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_DESKTOP,
                  action: () => n(r.cd.DESKTOP),
                  icon: s.ScreenIcon,
                }),
                (0, o.jsx)(s.MenuItem, {
                  id: "console",
                  label: a.Z.Messages.QUEST_MULTIPLATFORM_SELECT_CONSOLE,
                  action: () => n(r.cd.CONSOLE),
                  icon: s.GameControllerIcon,
                }),
              ],
            },
            "actions",
          ),
        });
      }
      function i(e) {
        let { children: t, ...n } = e;
        return (0, o.jsx)(s.Popout, {
          position: "bottom",
          align: "right",
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, o.jsx)(l, { ...n, onClose: t });
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
        utilButtonWrapper: "utilButtonWrapper_f2bc91",
        utilButtonIcon: "utilButtonIcon_f2bc91",
        partnerBranding: "partnerBranding_f2bc91",
        bottomRow: "bottomRow_f2bc91",
        hints: "hints_f2bc91",
        hintsContainer: "hintsContainer_f2bc91",
        videoOverlay: "videoOverlay_f2bc91",
        videoOverlayVisible: "videoOverlayVisible_f2bc91",
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
        videoQuestPlayIcon: "videoQuestPlayIcon_ebf06d",
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
//# sourceMappingURL=66ee46cdbb77c5d06f53.js.map
