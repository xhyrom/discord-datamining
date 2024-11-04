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
        r = n(977156);
      let s = (0, o.B)({
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
            o = (0, r.Zy)({ location: t }),
            { enabled: a } = s.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return o && a;
        };
    },
    988303: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
        u: function () {
          return a;
        },
      });
      var o,
        r,
        s = n(818083);
      ((o = r || (r = {}))[(o.V1 = 0)] = "V1"), (o[(o.V2 = 1)] = "V2");
      let a = (0, s.B)({
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
          return r;
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
        r = (e) => {
          let { location: t, autoTrackExposure: n = !1 } = e,
            { enabled: r } = o.useExperiment(
              { location: t },
              { autoTrackExposure: n },
            );
          return r;
        };
    },
    585857: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return E;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(54042),
        i = n(179839),
        l = n(481060),
        c = n(230711),
        d = n(231757),
        u = n(617136),
        p = n(497505),
        m = n(796111),
        x = n(46140),
        g = n(981631),
        f = n(388032),
        h = n(181284);
      function C(e) {
        let { quest: t, isConnected: n, consoleType: r } = e;
        return (0, o.jsx)(l.Clickable, {
          className: h.connectConsoleButtonWrapper,
          onClick: () => {
            (0, u._3)({
              questId: t.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.CONNECT_CONSOLE,
            }),
              (0, d.Z)({ platformType: r });
          },
          children:
            r === g.ABu.PLAYSTATION
              ? (0, o.jsx)(a.T, {
                  colorClass: s()(
                    h.connectConsoleButton,
                    n
                      ? h.playstationButtonConnected
                      : h.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                })
              : (0, o.jsx)(i.M, {
                  colorClass: s()(
                    h.connectConsoleButton,
                    n
                      ? h.xboxButtonConnected
                      : h.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                }),
        });
      }
      function v(e) {
        let { text: t, quest: n } = e;
        return (0, o.jsx)(l.Clickable, {
          className: h.showConnectionsButton,
          onClick: () => {
            (0, u._3)({
              questId: n.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
            }),
              c.Z.open(g.oAB.CONNECTIONS);
          },
          children: (0, o.jsx)(l.Text, {
            "aria-label": t,
            color: "none",
            variant: "text-xxs/normal",
            children: t,
          }),
        });
      }
      function j(e) {
        let {
            quest: t,
            xboxAccounts: n,
            playstationAccounts: r,
            xboxAndPlaystationAccounts: a,
          } = e,
          i = a.slice(0, 2),
          c = a.length > 0,
          d = n.length > 0,
          u = r.length > 0;
        return (0, o.jsxs)("div", {
          className: h.inlineConsoleConnectionDetails,
          children: [
            (0, o.jsxs)("div", {
              className: h.inlineConsoleConnectionDetailsUpper,
              children: [
                (0, o.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-xxs/normal",
                  children: c
                    ? f.intl.string(f.t["u30/ur"])
                    : f.intl.string(f.t.owFNBw),
                }),
                (0, o.jsxs)("div", {
                  className: h.inlineConsoleConnectionDetailsIcons,
                  children: [
                    (0, o.jsx)(C, {
                      consoleType: g.ABu.PLAYSTATION,
                      isConnected: u,
                      quest: t,
                    }),
                    (0, o.jsx)("div", { className: h.consoleIconDivider }),
                    (0, o.jsx)(C, {
                      consoleType: g.ABu.XBOX,
                      isConnected: d,
                      quest: t,
                    }),
                  ],
                }),
              ],
            }),
            c &&
              (0, o.jsxs)("div", {
                className: h.inlineConsoleConnectionDetailsLower,
                children: [
                  i.map((e, t) =>
                    (0, o.jsxs)(
                      "div",
                      {
                        className: s()(
                          h.inlineConsoleConnectionDetailsLowerItem,
                          t > 0 ? h.marginTop4px : void 0,
                        ),
                        children: [
                          (0, o.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/normal",
                            children:
                              e.type === g.ABu.XBOX
                                ? f.intl.string(f.t.MEhKlp)
                                : f.intl.string(f.t["74VQCA"]),
                          }),
                          (0, o.jsx)(l.Text, {
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
                    (0, o.jsx)(v, {
                      text: f.intl.string(f.t.o8ZkKS),
                      quest: t,
                    }),
                ],
              }),
          ],
        });
      }
      function _(e) {
        let { xboxAndPlaystationAccounts: t, quest: n } = e;
        return t.length > 0
          ? (0, o.jsx)(v, { text: f.intl.string(f.t["qiS+xs"]), quest: n })
          : null;
      }
      function E(e) {
        let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: f.intl.string(f.t.EJFSvL),
            }),
            t ? (0, o.jsx)(j, { ...e }) : (0, o.jsx)(_, { ...e }),
          ],
        });
      }
    },
    210724: function (e, t, n) {
      n.d(t, {
        P: function () {
          return y;
        },
      }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(442837),
        c = n(481060),
        d = n(110924),
        u = n(607070),
        p = n(819640),
        m = n(617136),
        x = n(113434),
        g = n(497505),
        f = n(302245),
        h = n(977156),
        C = n(5881),
        v = n(602667),
        j = n(78826),
        _ = n(667105),
        E = n(693900),
        b = n(617889),
        N = n(130653),
        S = n(46140),
        T = n(981631),
        B = n(604330);
      function A(e) {
        let { isExpanded: t, questId: n } = e;
        return (
          (0, x.qI)({
            mode: t ? S.NH.EXPANDED : S.NH.COLLAPSED,
            questContent: g.jn.QUEST_BAR_V2,
            questId: n,
          }),
          null
        );
      }
      function y(e) {
        var t, n;
        let { quest: s } = e,
          x = (0, C.T)({ quest: s, location: S.dr.QUESTS_BAR }),
          y = (0, h.Zy)({ location: S.dr.QUESTS_BAR }),
          R = (0, _.qN)({ quest: s, location: S.dr.QUESTS_BAR }),
          w = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
          I = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
          k =
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          q = (0, d.Z)(k),
          P =
            (null === (n = s.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          O = (0, d.Z)(P),
          { hasError: M, isLoading: W } = (0, j.d7)(),
          L = r.useContext(N.T) || (y && R && !W),
          Q = r.useRef(L),
          Z = (0, b.B)(s, L && !M),
          D = (0, f.vI)(s, S.dr.QUESTS_BAR) ? f.WV : Z.collapsedHeight,
          H = r.useRef(-1),
          U = r.useRef(!1),
          [V, z] = r.useState(!1),
          [F, G] = r.useState(!1),
          [K, Y] = r.useState(!0),
          [X, J] = r.useState(!0),
          [$, ee] = r.useState(Z.preEnrollmentExpandedHeight),
          et = r.useRef(null),
          en = r.useCallback((e) => {
            Y(!1), G(e);
          }, []),
          eo = r.useCallback(() => {
            var e, t;
            ee(
              (null !==
                (t =
                  null === (e = et.current) || void 0 === e
                    ? void 0
                    : e.offsetHeight) && void 0 !== t
                ? t
                : 84) +
                2 * Z.paddingVertical,
            );
          }, [Z.paddingVertical]),
          er = r.useCallback(() => {
            eo(), en(!0);
          }, [eo, en]),
          es = r.useCallback(() => {
            z(!0);
          }, []),
          ea = r.useCallback(() => {
            z(!1), !U.current && !P && en(!1);
          }, [P, en]),
          ei = r.useCallback(() => {
            z(!1), !P && en(!1), (U.current = !1);
          }, [P, en]),
          el = r.useCallback(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (F) return;
              let { withDelay: t = !1 } = e;
              t ? (H.current = window.setTimeout(er, 75)) : er();
            },
            [er, F],
          ),
          ec = r.useCallback(() => {
            el();
          }, [el]),
          ed = r.useCallback(() => {
            if ((window.clearTimeout(H.current), !!Z.canCollapseOnBlur && !V))
              !U.current && en(!1);
          }, [V, Z, en]),
          eu = r.useCallback(() => {
            (0, m.dA)({
              questId: s.id,
              event: T.rMx.QUEST_HOVER,
              properties: (0, m.mH)(g.jn.QUEST_BAR),
            }),
              (U.current = !0),
              el({ withDelay: !0 });
          }, [el, s]),
          ep = r.useCallback(() => {
            (0, m.dA)({
              questId: s.id,
              event: T.rMx.QUEST_HOVER_OFF,
              properties: (0, m.mH)(g.jn.QUEST_BAR),
            }),
              (U.current = !1),
              ed();
          }, [ed, s]);
        r.useLayoutEffect(() => {
          P && Z.shouldExpandOnQuestComplete && er();
        }, [er, P, Z.shouldExpandOnQuestComplete]),
          r.useLayoutEffect(() => {
            k && !q && U.current && er();
          }, [er, k, q]),
          r.useLayoutEffect(() => {
            !P && k && !q && !U.current && en(!1);
          }, [k, P, q, en]),
          r.useLayoutEffect(() => {
            L !== Q.current && J(!1), (Q.current = L);
          }, [L]);
        let em = k ? S.XZ : S.R4,
          [{ expansionSpring: ex }, eg] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: em,
            onRest: () => {
              Y(!0);
            },
            onStart: () => {
              Y(!1);
            },
          }));
        r.useEffect(() => {
          eg({ expansionSpring: F ? 1 : 0, immediate: w });
        }, [F, eg, w]);
        let { visibilitySpring: ef } = (0, c.useSpring)({
          from: { visibilitySpring: 0 },
          to: { visibilitySpring: L ? 1 : 0 },
          config: { tension: 250, friction: 10, clamp: !0 },
          onRest: () => {
            J(!0);
          },
          onStart: () => {
            J(!1);
          },
        });
        return (r.useLayoutEffect(() => {
          P && !O && Z.canCollapseOnBlur && eo();
        }, [P, er, Z.canCollapseOnBlur, eo, O]),
        r.useEffect(() => {
          M &&
            (0, m.dA)({
              questId: s.id,
              event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
              properties: {
                ...(0, m.mH)(g.jn.QUEST_BAR),
                reason: "asset_loading_error",
              },
            }),
            !y &&
              (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  ...(0, m.mH)(g.jn.QUEST_BAR),
                  reason: "not_eligible_for_quest",
                },
              });
        }, [M, y, s.id]),
        y && (L || !X || W) && !M)
          ? (0, o.jsx)(v.A, {
              questOrQuests: s,
              questContent: Z.trackingCtx.content,
              overrideVisibility: !I && L,
              children: () => {
                let e = Z.component;
                return (0, o.jsxs)("div", {
                  className: B.mask,
                  children: [
                    L && (0, o.jsx)(A, { questId: s.id, isExpanded: F }),
                    (0, o.jsx)(i.animated.div, {
                      "aria-hidden": !L,
                      onMouseLeave: ep,
                      onMouseEnter: eu,
                      onFocus: ec,
                      onBlur: ed,
                      className: a()(B.wrapper, {
                        [B.wrapperInvisible]: !L,
                        [B.wrapperVisible]: L && X,
                      }),
                      style: {
                        color: s.config.colors.secondary,
                        height: ef.to({
                          range: [0, 1],
                          output: [0, !Z.canCollapseOnBlur && F ? $ : D],
                        }),
                      },
                      children: (0, o.jsx)(i.animated.div, {
                        className: a()(B.contentWrapper, {
                          [B.contentWrapperExpanded]: F,
                          [B.contentWrapperAccepted]: k,
                        }),
                        style: {
                          backgroundColor: Z.preEnrollmentBackgroundColor,
                          backgroundImage: k
                            ? Z.postEnrollmentBackgroundImage
                            : void 0,
                        },
                        children: (0, o.jsx)(E.t, {
                          springConfig: em,
                          isExpanded: F,
                          children: (0, o.jsx)(e, {
                            expandedContentRef: et,
                            expansionSpring: ex,
                            isExpanded: F,
                            isExpansionAnimationComplete: K,
                            onCtxMenuClosed: ea,
                            onCtxMenuOpened: es,
                            onCtxMenuSelection: ei,
                            quest: s,
                            useReducedMotion: w,
                            collapsedHeight: D,
                          }),
                        }),
                      }),
                    }),
                  ],
                });
              },
            })
          : (M
              ? x.log("Not rendered due to asset error")
              : !y && x.log("Not rendered due to ineligibility"),
            null);
      }
      t.Z =
        12633 == n.j
          ? function () {
              let e = (0, _.DH)();
              return null == e
                ? null
                : (0, o.jsx)(
                    j.p,
                    {
                      source: S.dr.QUESTS_BAR,
                      questId: e.id,
                      children: (0, o.jsx)(y, { quest: e }),
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
        r = n(192379),
        s = n(100621),
        a = n(442837),
        i = n(481060),
        l = n(393238),
        c = n(110924),
        d = n(607070);
      let u = r.createContext({ springConfig: {}, isExpanded: !1 });
      function p(e) {
        let t = r.useMemo(
          () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
          [e.springConfig, e.isExpanded],
        );
        return (0, o.jsx)(u.Provider, { value: t, children: e.children });
      }
      function m(e) {
        var t;
        let { children: n } = e,
          { springConfig: p, isExpanded: m } = r.useContext(u),
          x = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
          { ref: g, height: f = null } = (0, l.Z)(),
          h = null !== (t = (0, c.Z)(f)) && void 0 !== t ? t : null,
          [{ height: C }, v] = (0, i.useSpring)(() => ({
            from: { height: 0 },
            config: p,
          }));
        return (
          r.useLayoutEffect(() => {
            null !== f && v({ height: f, immediate: !m || x || null === h });
          }, [f, v, m, x, h]),
          (0, o.jsx)(s.animated.div, {
            style: { height: null === h ? "auto" : C, overflow: "hidden" },
            children: (0, o.jsx)("div", {
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
      var o = n(192379),
        r = n(918701),
        s = n(988303),
        a = n(658590),
        i = n(448018),
        l = n(46140);
      let c = (e, t) => {
        let n = (0, r.zK)(e, l.S7.QUEST_BAR_V2),
          c = (0, a.a)(e),
          { primaryVariant: d, progressVariant: u } = s.u.useExperiment(
            { location: l.dr.QUESTS_BAR },
            { autoTrackExposure: t && n },
          );
        return o.useMemo(
          () =>
            c
              ? (0, i.v)(e, s.P.V2, s.P.V2)
              : n
                ? (0, i.v)(e, d, u)
                : (0, i.v)(e, s.P.V1, s.P.V1),
          [c, d, u, e, n],
        );
      };
    },
    130653: function (e, t, n) {
      n.d(t, {
        T: function () {
          return r;
        },
        Z: function () {
          return s;
        },
      });
      var o = n(200651);
      let r = n(192379).createContext(!1);
      function s(e) {
        return (0, o.jsx)(r.Provider, { value: !0, children: e.children });
      }
    },
    941348: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(113434),
        a = n(308069),
        i = n(613087),
        l = n(457153),
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
            onCtxMenuOpened: g,
            onCtxMenuClosed: f,
            onCtxMenuSelection: h,
            quest: C,
            useReducedMotion: v,
            collapsedHeight: j,
          } = e,
          _ = r.useRef(null),
          E = r.useRef(null),
          b =
            (null === (t = C.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          N = (0, s.Rf)(C);
        return (0, o.jsxs)(i.p, {
          expandedContentRef: n,
          collapsedContentRef: _,
          expansionSpring: p,
          children: [
            (0, o.jsx)(l.Z, {
              ref: _,
              className: u.content,
              expansionSpring: p,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: C,
              useReducedMotion: v,
              taskDetails: N,
            }),
            (0, o.jsx)(c.Z, {
              expansionSpring: p,
              className: u.content,
              collapsedHeight: j,
              onCtxMenuOpen: g,
              onCtxMenuClose: f,
              onCtxMenuSelect: h,
              overlayRef: E,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: C,
              useReducedMotion: v,
              ref: n,
              taskDetails: N,
              children: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(d.Z, { expansionSpring: p, isExpanded: m }),
                  !b &&
                    (0, o.jsx)(a.Z, {
                      quest: C,
                      expansionSpring: p,
                      useReducedMotion: v,
                      isExpanded: m,
                      isExpansionAnimationComplete: x,
                      onCtxMenuOpen: g,
                      onCtxMenuClose: f,
                      onCtxMenuSelect: h,
                    }),
                ],
              }),
            }),
            (0, o.jsx)("div", { ref: E, className: u.overlay }),
          ],
        });
      };
    },
    308069: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(481060),
        c = n(617136),
        d = n(497505),
        u = n(918701),
        p = n(302245),
        m = n(685613),
        x = n(670638),
        g = n(341907),
        f = n(303385),
        h = n(788284),
        C = n(46140),
        v = n(388032),
        j = n(404846);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: s,
            onCtxMenuSelect: _,
            onCtxMenuOpen: E,
            onCtxMenuClose: b,
            useReducedMotion: N,
            isExpanded: S,
            isExpansionAnimationComplete: T,
          } = e,
          B = r.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          A = r.useCallback(() => {
            (0, u.FE)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
            });
          }, [t]),
          y = S && T,
          R = (0, p.vI)(t, C.dr.QUESTS_BAR, !0),
          w = (0, o.jsx)(l.Clickable, {
            onClick: A,
            className: a()({ [j.logo]: y }),
            children: (0, o.jsx)(m.Z, { quest: t, withGameTile: !1 }),
          });
        return (0, o.jsxs)(i.animated.div, {
          className: a()(j.wrapper, {
            [j.interactable]: y,
            [j.rewardHighlightWrapper]: R,
          }),
          style: {
            transform: (0, i.to)(
              [s.to({ range: [0, 1], output: [R ? 8 : 4, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, o.jsx)(i.animated.div, {
              className: j.opaqueExpandedBackground,
              style: {
                opacity: s.to({ range: [0, 1], output: [0, 1] }),
                backdropFilter: s
                  .to([0, 1], [0, 1])
                  .to((e) =>
                    "blur("
                      .concat(10 * e, "px) brightness(")
                      .concat(1 - e / 5, ")"),
                  ),
              },
            }),
            (0, o.jsx)(i.animated.div, {
              className: j.backgroundWrapper,
              style: {
                opacity: s.to({ range: [0, 1], output: [0.5, 0] }),
                borderBottomLeftRadius: s.to({ range: [0, 1], output: [0, 8] }),
                borderBottomRightRadius: s.to({
                  range: [0, 1],
                  output: [0, 8],
                }),
              },
              children: (0, o.jsx)(h.Z, {
                className: j.background,
                animationClassName: j.backgroundAnimation,
                quest: t,
                useReducedMotion: N,
              }),
            }),
            R
              ? (0, o.jsx)(f.Z, {
                  quest: t,
                  expansionSpring: s,
                  isFullyExpanded: y,
                  partnerBranding: w,
                  useReducedMotion: N,
                })
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(i.animated.img, {
                      alt: "",
                      className: j.wreathIcon,
                      style: {
                        opacity: s.to({ range: [0, 1], output: [1, 0] }),
                      },
                      src: n(858595),
                    }),
                    (0, o.jsx)(i.animated.div, {
                      style: {
                        opacity: s.to({
                          range: [0, 1],
                          output: [1, y ? 1 : 0.8],
                        }),
                        transform: (0, i.to)(
                          [
                            s.to({ range: [0, 1], output: [0, -16] }),
                            s.to({ range: [0, 1], output: [0, 8] }),
                          ],
                          (e, t) =>
                            "translate(".concat(e, "px, ").concat(t, "px)"),
                        ),
                      },
                      children: w,
                    }),
                    (0, o.jsx)(i.animated.div, {
                      className: j.questAvailable,
                      style: {
                        opacity: s.to({ range: [0, 1], output: [0.7, 0] }),
                        transform: (0, i.to)(
                          [s.to({ range: [0, 1], output: [0, -20] })],
                          (e) => "translate(".concat(e, "px"),
                        ),
                      },
                      children: (0, o.jsx)(l.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        className: j.questAvailableText,
                        children: v.intl.string(v.t.g8zcER),
                      }),
                    }),
                  ],
                }),
            (0, o.jsxs)(i.animated.div, {
              className: j.promotedBadgeWrapper,
              style: { opacity: s.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, o.jsxs)(l.Clickable, {
                  className: j.promotedBadge,
                  onClick: B,
                  children: [
                    (0, o.jsx)(l.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: v.intl.string(v.t.o6FLcH),
                    }),
                    (0, o.jsx)(l.CircleQuestionIcon, {
                      color: l.tokens.colors.WHITE,
                      className: j.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, o.jsx)(x.r, {
                  onOpen: E,
                  onClose: b,
                  onSelect: _,
                  questContent: d.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, o.jsx)(l.Clickable, {
                      ...e,
                      className: j.submenuWrapper,
                      "aria-label": v.intl.string(v.t.DEoVWV),
                      children: (0, o.jsx)(l.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: a()(j.submenuIcon, j.white),
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
        r = n(192379),
        s = n(995295),
        a = n(100621),
        i = n(393238),
        l = n(743294);
      let c = r.createContext({
          registerComponent: () => {},
          unregisterComponent: () => {},
          animatedComponents: {},
          expandedContentRef: r.createRef(),
          collapsedContentRef: r.createRef(),
          recalculateAnimationPositions: () => {},
          animatedComponentProps: [],
          expansionSpring: null,
          mountPoints: new Map(),
        }),
        d = r.forwardRef(function (e, t) {
          var n;
          let { children: l, id: d, inState: u, isTextTransition: p = !1 } = e,
            {
              recalculateAnimationPositions: m,
              registerComponent: x,
              unregisterComponent: g,
              expansionSpring: f,
              mountPoints: h,
            } = r.useContext(c),
            C = r.useRef(null),
            v = r.useRef(null),
            j = r.useRef();
          r.useEffect(() => {
            m();
          }, [m]),
            r.useLayoutEffect(() => {
              let e = C.current;
              return (
                null != e && x(e, d, u),
                () => {
                  null != e && g(d, u);
                }
              );
            }, [d, u, x, g]);
          let _ = r.useCallback(
            (e) => {
              let { height: t } = e;
              j.current !== t && (m(), (j.current = t));
            },
            [m],
          );
          (0, i.P)(C, _);
          let E = null === (n = h.get(d)) || void 0 === n ? void 0 : n.current,
            b = null;
          return (
            null == E
              ? (b = null)
              : p && null != f
                ? (b = (0, o.jsxs)(o.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, s.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: f.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: l(v),
                          }),
                          E,
                        ),
                      "expanded" === u &&
                        (0, s.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: f.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: l(v),
                          }),
                          E,
                        ),
                    ],
                  }))
                : "collapsed" === u && (b = (0, s.createPortal)(l(v), E)),
            (0, o.jsxs)("div", {
              style: {
                opacity: (null == b && "collapsed" === u) || null == E ? 1 : 0,
              },
              ref: t,
              children: [l(C), b],
            })
          );
        }),
        u = (e) => {
          let {
              children: t,
              expandedContentRef: n,
              collapsedContentRef: s,
              expansionSpring: a,
            } = e,
            [i, d] = r.useState({}),
            [u, p] = r.useState([]),
            [m, x] = r.useState(() => new Map()),
            g = r.useCallback((e, t, n) => {
              d((o) => {
                var r;
                let s =
                  null !== (r = o[t]) && void 0 !== r
                    ? r
                    : { expanded: null, collapsed: null };
                return { ...o, [t]: { ...s, [n]: e } };
              }),
                x((e) => {
                  let n = new Map(e);
                  return n.set(t, r.createRef()), n;
                });
            }, []),
            f = r.useCallback((e, t) => {
              let n = !1;
              d((o) => {
                var r;
                let s =
                  null !== (r = o[e]) && void 0 !== r
                    ? r
                    : { expanded: null, collapsed: null };
                return (
                  (s[t] = null),
                  (n = null == s.expanded && null == s.collapsed),
                  { ...o, [e]: s }
                );
              }),
                n &&
                  x((t) => {
                    let n = new Map(t);
                    return n.delete(e), n;
                  });
            }, []),
            h = r.useCallback(() => {
              let e = [];
              for (let t in i) {
                if (null == i[t] || null == n.current || null == s.current)
                  continue;
                let o = i[t].collapsed,
                  r = i[t].expanded;
                if (null == o || null == r) continue;
                let a = r.getBoundingClientRect(),
                  c = n.current.getBoundingClientRect(),
                  d = o.getBoundingClientRect(),
                  u = s.current.getBoundingClientRect(),
                  p = a.top - c.top + l.Li,
                  m = d.top - u.top,
                  x = a.left - c.left + l.Li,
                  g = d.left - u.left,
                  f = -a.right + c.right + l.Li,
                  h = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: g,
                  expandedLeft: x,
                  collapsedRight: h,
                  expandedRight: f,
                  collapsedTop: m,
                  expandedTop: p,
                  width: a.width,
                });
              }
              p(e);
            }, [i, n, s, p]);
          return (0, o.jsx)(c.Provider, {
            value: {
              registerComponent: g,
              unregisterComponent: f,
              animatedComponents: i,
              expandedContentRef: n,
              collapsedContentRef: s,
              recalculateAnimationPositions: h,
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
        i0: function () {
          return j;
        },
        yD: function () {
          return E;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(481060),
        i = n(617136),
        l = n(497505),
        c = n(918701),
        d = n(796111),
        u = n(667105),
        p = n(341907),
        m = n(604162),
        x = n(46140),
        g = n(388032),
        f = n(128220);
      function h(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, o.jsx)(a.Button, {
          className: f.cta,
          color: a.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, p.openVideoQuestModal)(t);
          },
          size: a.Button.Sizes.SMALL,
          children: (0, m.F9)(n),
        });
      }
      let C = (e) => {
          let { quest: t } = e;
          return (0, o.jsx)(a.Button, {
            className: f.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: l.jn.QUEST_BAR_V2,
                ctaContent: i.jZ.OPEN_GAME_LINK,
              }),
            children: g.intl.string(g.t.lwQdjI),
          });
        },
        v = (e) => {
          let { quest: t } = e;
          return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: f.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: l.jn.QUEST_BAR_V2,
                  ctaContent: i.jZ.CONNECT_CONSOLE,
                },
              ),
            size: a.Button.Sizes.SMALL,
            children: g.intl.string(g.t.csptqa),
          });
        },
        j = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: r,
              className: i,
              ctaLabel: c,
              ...d
            } = e,
            p = (0, u.hf)({ quest: t, location: l.jn.QUEST_BAR_V2 });
          return (0, o.jsx)(a.ShinyButton, {
            fullWidth: !0,
            size: a.Button.Sizes.SMALL,
            onClick: p,
            pauseAnimation: n || !r,
            className: s()(f.cta, i),
            buttonShineClassName: f.shine,
            ...d,
            children: null != c ? c : g.intl.string(g.t.cfY4PD),
          });
        },
        _ = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: r,
              isExpanded: s,
              awaitingConsoleConnections: a,
              hasMadeProgress: i,
              isProgressing: u,
              activeScreen: p,
              taskDetails: m,
            } = e,
            g =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            f = (0, d.P)({ location: x.dr.QUESTS_BAR }),
            _ = (0, c.cr)(n);
          if (g)
            return (0, o.jsx)(j, {
              quest: n,
              useReducedMotion: r,
              isExpanded: s,
            });
          if (_) return (0, o.jsx)(h, { quest: n, taskDetails: m });
          if (p === l.LI.CONSOLE && a && !f) return (0, o.jsx)(v, { quest: n });
          else if (p !== l.LI.SELECT && !i && !u)
            return (0, o.jsx)(C, { quest: n });
          return null;
        };
      function E(e) {
        return (0, o.jsxs)("div", {
          className: f.ctaButtons,
          children: [
            e.showBackButton &&
              (0, o.jsx)(a.Button, {
                className: f.backButton,
                innerClassName: f.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, o.jsx)(a.ChevronSmallLeftIcon, {
                  className: f.backIcon,
                }),
              }),
            (0, o.jsx)(_, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(481060),
        c = n(569379),
        d = n(642145),
        u = n(808326);
      t.Z = r.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: r,
            size: s = 42,
            strokeWidth: p = 3,
            glowBlur: m = 0.4,
            percentCompleteText: x,
            percentCompleteTextVariant: g = "text-lg/medium",
            children: f,
          } = e,
          h = (0, c.E)(n, r > 0),
          C = s / 2,
          v = s / 2 - p / 2,
          j = 2 * Math.PI * v,
          _ = j - r * j,
          E = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: _,
          },
          b = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -r * j,
          },
          N = { boxShadow: "0 0 30px 0px ".concat(h.glow) },
          { progressTextAnimation: S } = (0, l.useSpring)({
            progressTextAnimation: null != x && 1 !== r ? 1 : 0,
            config: d.Y,
          });
        return (0, o.jsxs)("div", {
          className: u.outer,
          ref: t,
          children: [
            (0, o.jsxs)("div", {
              className: u.inner,
              style: N,
              children: [
                f,
                (0, o.jsxs)(i.animated.div, {
                  style: { opacity: S },
                  className: a()(u.coverContent, u.progressTextWrapper),
                  children: [
                    (0, o.jsx)("div", {
                      className: a()(u.coverContent, u.progressTextOverlay),
                    }),
                    (0, o.jsx)(l.Text, {
                      variant: g,
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
              height: s,
              width: s,
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
                          stopColor: h.backgroundTop,
                        }),
                        (0, o.jsx)("stop", {
                          offset: "100%",
                          stopColor: h.backgroundBottom,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: v,
                  cx: C,
                  cy: C,
                  stroke: "url(#linear)",
                  style: b,
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: v,
                  cx: C,
                  cy: C,
                  stroke: h.foreground,
                  style: E,
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
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(703533),
        l = n(995295),
        c = n(100621),
        d = n(442837),
        u = n(110924),
        p = n(607070),
        m = n(819640),
        x = n(569379),
        g = n(675654),
        f = n(435616),
        h = n(197857);
      let C = ["#51BC9D"];
      t.Z = (e) => {
        var t;
        let {
            expansionSpring: n,
            overlayRef: s,
            quest: v,
            progressBarRef: j,
            isExpanded: _,
          } = e,
          { completionSpring: E, startCompletionAnimation: b } = (0, x.G)(),
          N =
            (null === (t = v.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          S = r.useRef(!1),
          T = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          B = r.useRef(null),
          A = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
          y = (0, u.Z)(A),
          [R, w] = r.useState(null),
          [I, k] = r.useState(null),
          q = r.useRef(new i.qA({ gravity: 0, wind: 0 })),
          P = (0, i.uR)(R, I),
          O = r.useCallback(() => {
            if (T) return;
            let e = j.current,
              t = B.current;
            if (null != t && null != e && P.isReady) {
              var n, o, r, s;
              let { x: a, y: i } = e.getBoundingClientRect(),
                { x: l, y: c } = t.getBoundingClientRect();
              P.createMultipleConfetti(
                ((n = a - l),
                (o = i - c),
                (r = e.clientHeight),
                (s = e.clientWidth),
                {
                  ...g.We,
                  position: {
                    type: "static-random",
                    minValue: { x: n, y: o },
                    maxValue: { x: n + r, y: o + s },
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
          }, [j, B, P, T]),
          M = (0, u.Z)(_);
        return (r.useEffect(() => {
          N && _ && !M && (b(), O());
        }, [_, N, b, O, M]),
        r.useEffect(() => {
          N &&
            !A &&
            y &&
            setTimeout(() => {
              b(), O();
            }, 200);
        }, [N, y, A, b, O]),
        r.useEffect(() => {
          if (!!P.isReady) !S.current && N && (b(), O()), (S.current = N);
        }, [N, S, O, b, P]),
        T)
          ? null
          : (0, o.jsxs)("div", {
              className: f.wrapper,
              "aria-hidden": "true",
              ref: B,
              children: [
                (0, o.jsx)(c.animated.div, {
                  className: f.background,
                  style: { opacity: E },
                }),
                (0, o.jsx)(c.animated.div, {
                  className: a()(f.borders, f.bordersTopLeft),
                  style: { opacity: E },
                }),
                (0, o.jsxs)(c.animated.div, {
                  className: f.confettiWrapper,
                  style: {
                    transform: n
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, o.jsx)(i.O_, {
                      ref: w,
                      className: f.confetti,
                      environment: q.current,
                    }),
                    (0, o.jsx)(i.Ji, {
                      ref: k,
                      sprites: [h],
                      colors: C,
                      spriteWidth: g.Ko,
                      spriteHeight: g.Ko,
                    }),
                    null != s.current &&
                      (0, l.createPortal)(
                        (0, o.jsx)(c.animated.div, {
                          className: a()(f.borders, f.bordersBottom),
                          style: { opacity: E },
                        }),
                        s.current,
                      ),
                  ],
                }),
              ],
            });
      };
    },
    205511: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(959078),
        l = n(442837),
        c = n(481060),
        d = n(607070),
        u = n(553795),
        p = n(617136),
        m = n(111382),
        x = n(113434),
        g = n(497505),
        f = n(918701),
        h = n(566078),
        C = n(667105),
        v = n(585857),
        j = n(46140),
        _ = n(388032),
        E = n(161548);
      function b(e) {
        let { children: t, isComplete: n, hasNextStep: r } = e;
        return (0, o.jsxs)("li", {
          className: a()(
            E.stepWrapper,
            { [E.stepWrapperComplete]: n },
            { [E.stepWrapperWithNextStep]: r },
          ),
          children: [
            (0, o.jsxs)("div", {
              className: E.stepIndicator,
              children: [
                (0, o.jsx)("div", {
                  className: E.stepIconWrapper,
                  children:
                    n &&
                    (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                      className: E.stepIcon,
                      color: c.tokens.colors.WHITE,
                    }),
                }),
                r && (0, o.jsx)("div", { className: E.stepConnector }),
              ],
            }),
            (0, o.jsx)("div", { className: E.stepContent, children: t }),
          ],
        });
      }
      function N(e) {
        return (0, o.jsx)(c.Text, {
          className: E.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e.children,
        });
      }
      function S(e) {
        let { quest: t, useReducedMotion: n } = e,
          s = (0, m.n)(),
          l = (0, C.k3)(t.id, g.jn.QUEST_BAR_V2),
          d = (0, C.g2)({ useReducedMotion: n }),
          {
            errorHints: v,
            startingConsoleQuest: b,
            startConsoleQuest: S,
          } = (0, x.GI)({
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
          { header: T, renderBody: B } = r.useMemo(() => {
            let e = v.length > 0,
              n = () =>
                (0, o.jsx)(o.Fragment, {
                  children: v.map((e, n) => {
                    if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                      let r = u.Z.getAccount(
                          e.connected_account_id,
                          e.connected_account_type,
                        ),
                        s = (0, f.C9)(e),
                        a = (0, f._j)(e);
                      return (0, o.jsx)(
                        N,
                        {
                          children: _.intl.format(s, {
                            account_name: null == r ? void 0 : r.name,
                            onClick: () => {
                              (0, f.fY)(
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
                    return (0, o.jsx)(N, { children: e.message }, n);
                  }),
                });
            if ((0, f.zK)(t, j.S7.IN_HOUSE_CONSOLE_QUEST))
              return {
                header: e
                  ? _.intl.string(_.t["6cSPND"])
                  : _.intl.string(_.t.YstzGB),
                renderBody: e
                  ? n
                  : () =>
                      (0, o.jsx)(c.Text, {
                        className: E.microphoneUnitBodyText,
                        color: "text-muted",
                        variant: "text-xxs/normal",
                        children: _.intl.string(_.t.zrLnnJ),
                      }),
              };
            let r = h.r.build(t.config).application.name;
            return {
              header: e
                ? _.intl.formatToPlainString(_.t["28Ql29"], { gameTitle: r })
                : _.intl.formatToPlainString(_.t.gX0Qc3, { gameTitle: r }),
              renderBody: e
                ? n
                : () =>
                    (0, o.jsx)(c.Text, {
                      className: E.microphoneUnitBodyText,
                      color: "text-muted",
                      variant: "text-xxs/normal",
                      children: _.intl.format(_.t.GXqvCw, { gameTitle: r }),
                    }),
            };
          }, [t, v, s]);
        return (0, o.jsxs)("div", {
          className: E.microphoneUnit,
          children: [
            (0, o.jsxs)("div", {
              className: E.microphoneUnitHeader,
              children: [
                (0, o.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === v.length ? E.warningCircle : E.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, o.jsx)(c.Text, { variant: "text-xs/medium", children: T }),
                (0, o.jsx)(c.Clickable, {
                  className: a()(E.microphoneUnitRefreshIconWrapper, {
                    [E.disabled]: b,
                  }),
                  onClick: () => S(),
                  children: d.render(),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: a()({ [E.opacity_50]: b }),
              children: [
                B(),
                0 === v.length ? null : (0, o.jsx)(N, { children: l }),
              ],
            }),
          ],
        });
      }
      function T(e) {
        let { text: t } = e;
        return (0, o.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-xs/medium",
          children: t,
        });
      }
      t.Z = function (e) {
        let { quest: t, taskDetails: n } = e,
          s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
          a = (0, x.z6)(),
          {
            steps: i,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m,
          } = r.useMemo(() => {
            var e;
            let r = a.xboxAndPlaystationAccounts.length > 0,
              s = r && (0, f.Bz)(t),
              i = (0, f.zK)(t, j.S7.IN_HOUSE_CONSOLE_QUEST),
              l = h.r.build(t.config).application.name,
              c =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, o.jsx)(v.Q, { ...a, quest: t }),
                  isComplete: r || s || c,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(T, {
                      text: i
                        ? _.intl.string(_.t["9rQPys"])
                        : _.intl.formatToPlainString(_.t["+8JB6e"], {
                            gameTitle: l,
                          }),
                    }),
                  isComplete: s || c,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(T, {
                      text: _.intl.formatToPlainString(_.t.HhfrYW, {
                        numMinutes: n.targetMinutes,
                      }),
                    }),
                  isComplete: c,
                },
              ],
              hasConnectedAccounts: r,
              isProgressingQuestForLaunchedGame: s,
              isQuestComplete: c,
            };
          }, [a, t, n]);
        return (0, o.jsxs)("div", {
          className: E.wrapper,
          children: [
            (0, o.jsx)("div", {
              className: E.headingWrapper,
              children: (0, o.jsx)(c.Heading, {
                className: E.heading,
                variant: "text-xs/medium",
                children: _.intl.string(_.t.UPWlJi),
              }),
            }),
            (0, o.jsxs)("div", {
              className: E.stepsWrapper,
              children: [
                (0, o.jsx)("ul", {
                  children: i.map((e, t) =>
                    (0, o.jsx)(
                      b,
                      {
                        isComplete: e.isComplete,
                        hasNextStep: t < i.length - 1,
                        children: e.renderContent(),
                      },
                      t,
                    ),
                  ),
                }),
                u &&
                  !p &&
                  !m &&
                  (0, o.jsx)(S, { useReducedMotion: s, quest: t }),
              ],
            }),
          ],
        });
      };
    },
    743294: function (e, t, n) {
      n.d(t, {
        Li: function () {
          return s;
        },
        aY: function () {
          return o;
        },
        v6: function () {
          return r;
        },
      });
      let o = "#00000000",
        r = "#CDD8FF1A",
        s = 12;
    },
    457153: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(95985),
        c = n(183004);
      let d = r.forwardRef(function (e, t) {
        var n;
        let {
            className: s,
            expansionSpring: d,
            isExpanded: u,
            isExpansionAnimationComplete: p,
            quest: m,
            taskDetails: x,
          } = e,
          g = r.useRef(null),
          f =
            (null === (n = m.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null;
        return (0, o.jsx)(i.animated.div, {
          ref: t,
          "aria-hidden": u && p,
          className: a()(s, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: f,
          }),
          style: { opacity: d.to({ range: [0, 1], output: [1, 0] }) },
          children: (0, o.jsx)("div", {
            className: c.contentCollapsedWrapper,
            children: f
              ? (0, o.jsx)(l.Z, {
                  contentLocation: "collapsed",
                  quest: m,
                  progressBarRef: g,
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
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(278074),
        c = n(442837),
        d = n(692547),
        u = n(481060),
        p = n(70097),
        m = n(617136),
        x = n(272008),
        g = n(113434),
        f = n(569984),
        h = n(497505),
        C = n(918701),
        v = n(184299),
        j = n(988303),
        _ = n(302245),
        E = n(665430),
        b = n(585500),
        N = n(475595),
        S = n(720293),
        T = n(644646),
        B = n(78826),
        A = n(670638),
        y = n(341907),
        R = n(693900),
        w = n(164495),
        I = n(759853),
        k = n(205511),
        q = n(694802),
        P = n(95985),
        O = n(50476),
        M = n(658590),
        W = n(46140),
        L = n(743294),
        Q = n(388032),
        Z = n(160443);
      function D(e) {
        var t;
        let {
            quest: n,
            onClick: s,
            containerClassName: i,
            imgClassName: l,
            reducedMotion: c,
          } = e,
          [m, x] = r.useState(!1),
          g = r.useRef(null),
          f = (0, S.z)(S.i.QUEST_BAR_PREVIEW_VIDEO, n),
          h = (0, S.z)(S.i.VIDEO_PLAYER_THUMBNAIL, n),
          C = (0, v.km)((e) => e.getVideoProgressState);
        r.useEffect(() => {
          null != g.current &&
            (c && m && (g.current.currentTime = 0), g.current.play());
        }, [g, m, c]);
        let j = C(n.id),
          _ =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null && j === v.iw.COMPLETED,
          E = !_ && (!c || m);
        return (0, o.jsxs)(u.Clickable, {
          className: a()(Z.videoQuestPreviewCont, i),
          onClick: s,
          onMouseEnter: () => {
            c && !m && x(!0);
          },
          onMouseLeave: () => {
            c && m && x(!1);
          },
          children: [
            null != h &&
              (0, o.jsx)("img", {
                alt: "",
                src: h.url,
                className: a()(Z.assetBodyVideoPreviewMedia, l),
              }),
            null != f
              ? (0, o.jsx)(p.Z, {
                  ref: g,
                  autoPlay: !0,
                  poster: null == h ? void 0 : h.url,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className: a()(
                    Z.assetBodyVideoPreviewMedia,
                    Z.assetBodyVideoPreviewVideo,
                    { [Z.assetBodyVideoPreviewVisible]: E },
                  ),
                  controls: !1,
                  children: (0, o.jsx)("source", {
                    src: f.url,
                    type: f.mimetype,
                  }),
                })
              : null,
            (0, o.jsx)("div", {
              className: Z.previewPlayButtonCont,
              children: _
                ? (0, o.jsx)(u.RetryIcon, {
                    color: d.Z.colors.WHITE,
                    className: Z.previewPlayButton,
                  })
                : (0, o.jsx)(u.PlayIcon, {
                    color: d.Z.colors.WHITE,
                    className: Z.previewPlayButton,
                  }),
            }),
          ],
        });
      }
      function H(e) {
        let { quest: t, isHighlightedReward: n } = e;
        return (0, o.jsx)(T.Z, {
          className: a()(Z.rewardTile, { [Z.hiddenRewardTile]: n }),
          learnMoreStyle: "text",
          quest: t,
          questContent: h.jn.QUEST_BAR_V2,
          location: W.dr.QUESTS_BAR,
        });
      }
      function U(e) {
        let {
            quest: t,
            taskDetails: n,
            expansionSpring: s,
            isInteractable: a,
            reducedMotion: l,
            containerRef: d,
            isExpanded: m,
            onAcceptQuest: x,
          } = e,
          g = (0, c.e7)([f.Z], () => f.Z.isEnrolling(t.id), [t]),
          v = r.useMemo(() => (0, N.fh)(t, N.eC.QUEST_BAR_HERO), [t]),
          E = (0, _.vI)(t, W.dr.QUESTS_BAR, !0),
          S = r.useRef(null),
          { primaryVariant: T } = j.u.useExperiment(
            { location: W.dr.QUESTS_BAR },
            { autoTrackExposure: !1 },
          ),
          A = (0, b.D)({
            quest: t,
            location: W.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: T === j.P.V2 || (0, M.a)(t),
          });
        r.useEffect(() => {
          null != S.current &&
            (l && m
              ? (S.current.pause(), (S.current.currentTime = 0))
              : !l && m && S.current.play());
        }, [l, m]);
        let y = (0, C.cr)(t)
          ? Q.intl.string(Q.t.umdNio)
          : Q.intl.string(Q.t.l7E81t);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              children: (0, o.jsxs)("div", {
                className: Z.questPromoContent,
                ref: d,
                children: [
                  (0, o.jsxs)("div", {
                    className: Z.details,
                    children: [
                      (0, o.jsx)(H, { quest: t, isHighlightedReward: E }),
                      (0, o.jsx)(u.Heading, {
                        className: Z.title,
                        variant: "heading-md/medium",
                        children: Q.intl.format(Q.t.EQa7oq, {
                          questName: t.config.messages.questName,
                        }),
                      }),
                      (0, o.jsx)(u.Text, {
                        className: Z.description,
                        variant: "text-xs/normal",
                        children: A,
                      }),
                    ],
                  }),
                  (0, o.jsx)(u.Button, {
                    className: Z.cta,
                    color: u.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: a ? x : void 0,
                    size: u.Button.Sizes.SMALL,
                    submitting: g,
                    children: y,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(i.animated.div, {
              className: Z.heroAssetWrapper,
              style: {
                backdropFilter: s
                  .to([0, 1], [5, 0])
                  .to((e) => "blur(".concat(e, "px)")),
                filter: s
                  .to([0, 1], [0.8, 1])
                  .to((e) => "brightness(".concat(e, ")")),
                borderRadius: E ? "12px 12px 0 0" : "8px 8px 0 0",
              },
              children: [
                (0, o.jsx)(i.animated.div, {
                  className: Z.heroAssetDarken,
                  style: { opacity: s.to([0, 1], [1, 0]) },
                }),
                (0, o.jsx)(i.animated.div, {
                  className: Z.heroAssetTint,
                  style: {
                    backgroundColor: t.config.colors.primary,
                    opacity: s.to([0, 1], [1, 0]),
                  },
                }),
                v.isAnimated
                  ? (0, o.jsx)(B.Fl, {
                      id: "QuestBarV2ContentExpanded_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (S.current = e.current),
                          (0, o.jsx)(p.Z, {
                            ref: e,
                            autoPlay: !l && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: Z.heroAsset,
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
                  : (0, o.jsx)(B.Fl, {
                      id: "QuestBarV2ContentExpanded_heroStatic",
                      children: (e) =>
                        (0, o.jsx)("img", {
                          ref: e,
                          alt: "",
                          className: Z.heroAsset,
                          src: v.url,
                        }),
                    }),
                (0, o.jsx)(i.animated.div, {
                  className: Z.legibilityGradient,
                  style: { opacity: s.to({ range: [0, 1], output: [0, 1] }) },
                }),
              ],
            }),
          ],
        });
      }
      function V(e) {
        var t;
        let {
            quest: n,
            taskDetails: s,
            expansionSpring: c,
            overlayRef: d,
            isExpanded: p,
            reducedMotion: m,
            containerRef: x,
            onCtxMenuOpen: f,
            onCtxMenuClose: v,
            onCtxMenuSelect: j,
          } = e,
          _ =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          b = s.percentComplete > 0,
          N = (0, g.z)(n),
          [S, T, B] = (0, g.me)(n, s),
          M = (0, E.pF)({ location: W.dr.QUESTS_BAR }),
          H = r.useRef(null),
          U = (0, g.B6)(n.config.expiresAt),
          V = (0, g._s)({ quest: n }),
          z = (0, C.cr)(n),
          F = r.useCallback(() => {
            (0, y.openVideoQuestModal)(n);
          }, [n]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.animated.div, {
              className: a()(
                Z.postEnrollmentBackground,
                Z.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(L.aY, ", ")
                  .concat(L.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, o.jsxs)("div", {
              className: Z.questAcceptedContent,
              ref: x,
              children: [
                (0, o.jsxs)("div", {
                  className: Z.questAcceptedHeader,
                  children: [
                    (0, o.jsx)(u.Text, {
                      variant: "text-xxs/medium",
                      className: a()(Z.flex, Z.headerText),
                      children: Q.intl.format(Q.t["pX+fmp"], {
                        expirationDate: U,
                      }),
                    }),
                    (0, o.jsx)(A.r, {
                      onOpen: f,
                      onClose: v,
                      onSelect: j,
                      questContent: h.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, o.jsx)(u.Clickable, {
                          ...e,
                          className: Z.submenuWrapper,
                          "aria-label": Q.intl.string(Q.t.DEoVWV),
                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(Z.submenuIcon, Z.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: Z.divider }),
                (0, o.jsx)(I.Z, {
                  expansionSpring: c,
                  overlayRef: d,
                  progressBarRef: H,
                  quest: n,
                  isExpanded: p,
                }),
                (0, o.jsx)(P.Z, {
                  contentLocation: "expanded",
                  quest: n,
                  progressBarRef: H,
                  isExpanded: !0,
                  taskDetails: s,
                  activeScreen: S,
                }),
                (0, o.jsx)(R.n, {
                  children:
                    !_ &&
                    !z &&
                    (0, l.EQ)(S)
                      .with(h.LI.SELECT, () =>
                        (0, o.jsx)(O.Z, {
                          onConsole: () => B(W.cd.CONSOLE),
                          onDesktop: () => B(W.cd.DESKTOP),
                        }),
                      )
                      .with(h.LI.DESKTOP, () => (0, o.jsx)(q.Z, { quest: n }))
                      .with(h.LI.CONSOLE, () =>
                        (0, o.jsx)(k.Z, { quest: n, taskDetails: s }),
                      )
                      .exhaustive(),
                }),
                (0, o.jsxs)(R.n, {
                  children: [
                    z &&
                      (0, o.jsx)(D, {
                        quest: n,
                        onClick: F,
                        containerClassName: Z.enrolledVideoPreview,
                        imgClassName: Z.enrolledVideoPreviewImg,
                        reducedMotion: m,
                      }),
                    (0, o.jsx)(w.yD, {
                      quest: n,
                      useReducedMotion: m,
                      isExpanded: p,
                      awaitingConsoleConnections: V,
                      hasMadeProgress: b,
                      isProgressing: N,
                      activeScreen: S,
                      showBackButton:
                        S !== h.LI.SELECT && T.length > 1 && !b && !N && M,
                      onBack: () => B(null),
                      taskDetails: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: a()(
                Z.postEnrollmentBackground,
                Z.postEnrollmentBackgroundExpanded,
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
      let z = r.forwardRef(function (e, t) {
        var n;
        let {
            children: s,
            className: l,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: p,
            onCtxMenuOpen: g,
            onCtxMenuClose: f,
            onCtxMenuSelect: v,
            overlayRef: j,
            quest: _,
            useReducedMotion: E,
            taskDetails: b,
          } = e,
          N = (0, C.cr)(_),
          S = r.useCallback(() => {
            (0, x.AH)(_.id, {
              questContent: h.jn.QUEST_BAR_V2,
              questContentCTA: m.jZ.ACCEPT_QUEST,
            }),
              N && (0, y.openVideoQuestModal)(_);
          }, [_, N]),
          T =
            (null === (n = _.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          B = d && u;
        return (0, o.jsxs)(i.animated.div, {
          "aria-hidden": !B,
          className: a()(l, Z.contentExpanded, {
            [Z.contentInteractable]: B,
            [Z.contentExpandedAccepted]: T,
          }),
          style: {
            transform: (0, i.to)(
              [
                p.to({ range: [0, 1], output: [0, -100] }),
                p.to({ range: [0, 1], output: [0, c] }),
              ],
              (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
          },
          children: [
            s,
            (0, o.jsx)(i.animated.div, {
              style: { opacity: 1 },
              children: T
                ? (0, o.jsx)(V, {
                    quest: _,
                    taskDetails: b,
                    expansionSpring: p,
                    overlayRef: j,
                    isExpanded: d,
                    reducedMotion: E,
                    onCtxMenuOpen: g,
                    onCtxMenuClose: f,
                    onCtxMenuSelect: v,
                    containerRef: t,
                  })
                : (0, o.jsx)(U, {
                    quest: _,
                    taskDetails: b,
                    expansionSpring: p,
                    isInteractable: B,
                    reducedMotion: E,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: S,
                  }),
            }),
          ],
        });
      });
      t.Z = z;
    },
    569379: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
        G: function () {
          return i;
        },
      }),
        n(47120);
      var o = n(192379),
        r = n(481060),
        s = n(410030),
        a = n(113434);
      function i() {
        let [{ spring: e }, t] = (0, r.useSpring)(
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
      function l(e, t) {
        var n;
        let o = (0, a.z)(e),
          r = null !== (n = (0, s.i6)()) && void 0 !== n ? n : 0,
          i = "var(--green-330)",
          l = ["var(--background-tertiary)", "var(--interactive-normal)"],
          c = t ? l[r] : ["#828288", "#CBCDD4"][r];
        return {
          backgroundTop: c,
          backgroundBottom: t ? l[r] : ["#535356", "#8B8C95"][r],
          foreground: i,
          glow: t && o ? i : "#C4C1D66E",
        };
      }
    },
    694802: function (e, t, n) {
      n(571269), n(298267);
      var o = n(200651);
      n(192379);
      var r = n(481060),
        s = n(113434),
        a = n(665430),
        i = n(26650),
        l = n(46140),
        c = n(388032),
        d = n(587311);
      function u(e) {
        let { header: t, children: n } = e;
        return (0, o.jsxs)("div", {
          className: d.card,
          children: [
            (0, o.jsxs)("div", {
              className: d.header,
              children: [
                (0, o.jsx)(r.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: d.icon,
                  width: 16,
                  height: 16,
                }),
                (0, o.jsx)(r.Heading, {
                  color: "text-normal",
                  variant: "heading-sm/medium",
                  children: t,
                }),
              ],
            }),
            (0, o.jsx)(r.Text, {
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
          n = (0, a.pF)({ location: l.dr.QUESTS_BAR }),
          r = (0, s.qb)(t);
        if (0 === r.length) return null;
        let d = r.at(0);
        return n
          ? d === c.intl.string(c.t.BV6xDg)
            ? (0, o.jsx)(u, {
                header: c.intl.string(c.t.onh6cn),
                children: c.intl.string(c.t.arVHRE),
              })
            : d === c.intl.string(c.t.MFGxFB)
              ? (0, o.jsx)(u, {
                  header: c.intl.string(c.t.JPihZG),
                  children: c.intl.string(c.t.MFGxFB),
                })
              : null
          : (0, o.jsx)(i.Z, { children: d });
      };
    },
    95985: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var r = n(481060),
        s = n(113434),
        a = n(497505),
        i = n(644646),
        l = n(613087),
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
            activeScreen: g,
          } = e,
          { percentComplete: f } = x,
          h = (0, s.eQ)(n),
          C = (0, s.vf)(n, m, g);
        return (0, o.jsxs)("div", {
          className: u.questProgressWrapper,
          children: [
            (0, o.jsx)(l.l7, {
              inState: t,
              id: "progress-bar",
              ref: p,
              children: (e) =>
                (0, o.jsx)(c.Z, {
                  ref: e,
                  quest: n,
                  percentComplete: f,
                  size: 42,
                  strokeWidth: 3,
                  children: (0, o.jsx)(i.Z, {
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
                (0, o.jsx)(l.l7, {
                  inState: t,
                  id: "progress-title",
                  children: (e) =>
                    (0, o.jsx)(r.Text, {
                      ref: e,
                      className: u.questProgressHint,
                      color: "header-primary",
                      variant: "text-sm/semibold",
                      children: h,
                    }),
                }),
                (0, o.jsx)(l.l7, {
                  inState: t,
                  id: "progress-subtitle",
                  isTextTransition: !0,
                  children: (e) =>
                    (0, o.jsx)(r.Text, {
                      ref: e,
                      className: u.questProgressHint,
                      color: "text-muted",
                      variant: "text-xs/normal",
                      children: C,
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
      var r = n(100621),
        s = n(481060),
        a = n(497505),
        i = n(302245),
        l = n(644646),
        c = n(46140),
        d = n(388032),
        u = n(437567);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: n,
            isFullyExpanded: p,
            partnerBranding: m,
            useReducedMotion: x,
          } = e,
          { enabled: g, variant: f } = i.Hp.useExperiment({
            location: c.dr.QUESTS_BAR,
          });
        if (!g) return null;
        let h = null;
        return (f === i.PW.REWARD_AVAILABLE
          ? (h = d.intl.string(d.t["2BD0CQ"]))
          : f === i.PW.EARN_A_REWARD
            ? (h = d.intl.string(d.t.mETI3N))
            : f === i.PW.EARN_A_REWARD_EXCLAMATION &&
              (h = d.intl.string(d.t.LCpIZG)),
        null == h)
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(r.animated.div, {
                  className: u.rewardTileSpacer,
                  style: {
                    transform: (0, r.to)(
                      [n.to({ range: [0, 1], output: [1, 24 / 38] })],
                      (e) => "scale(".concat(e, ")"),
                    ),
                  },
                }),
                (0, o.jsx)(r.animated.div, {
                  className: u.rewardTileContainer,
                  style: {
                    transform: (0, r.to)(
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
                  children: (0, o.jsx)(l.Z, {
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
                    (0, o.jsx)(r.animated.div, {
                      className: u.partnerBranding,
                      style: {
                        opacity: n.to({
                          range: [0, 1],
                          output: [1, p ? 1 : 0.8],
                        }),
                        transform: (0, r.to)(
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
                    (0, o.jsx)(r.animated.div, {
                      className: u.rewardHighlightCTA,
                      style: {
                        opacity: n.to({ range: [0, 1], output: [0.7, 0] }),
                      },
                      children: (0, o.jsx)(s.Text, {
                        color: "always-white",
                        variant: "text-xs/medium",
                        children: h,
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
          return i;
        },
      });
      var o = n(200651),
        r = n(192379),
        s = n(100621),
        a = n(613087);
      function i(e) {
        let { expansionSpring: t, isExpanded: n } = e,
          {
            animatedComponentProps: i,
            recalculateAnimationPositions: l,
            mountPoints: c,
          } = r.useContext(a.B$);
        return (
          r.useEffect(() => {
            l();
          }, [l, n]),
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
            children: i.map((e) => {
              let {
                  id: n,
                  collapsedLeft: r,
                  expandedLeft: a,
                  collapsedTop: i,
                  expandedTop: l,
                  width: d,
                } = e,
                u = c.get(n);
              return (0, o.jsx)(
                s.animated.div,
                {
                  ref: u,
                  style: {
                    zIndex: 2,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: d,
                    transform: (0, s.to)(
                      [
                        t.to({ range: [0, 1], output: [r, a] }),
                        t.to({ range: [0, 1], output: [i, l] }),
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
        r = n(481060),
        s = n(388032),
        a = n(597916);
      function i(e) {
        let { onClick: t, children: n } = e;
        return (0, o.jsx)(r.Button, {
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
            (0, o.jsxs)(i, {
              onClick: t,
              children: [
                s.intl.string(s.t.QXc019),
                (0, o.jsx)(r.ScreenIcon, { size: "sm" }),
              ],
            }),
            (0, o.jsxs)(i, {
              onClick: n,
              children: [
                s.intl.string(s.t["8lAfuL"]),
                (0, o.jsx)(r.GameControllerIcon, { size: "sm" }),
              ],
            }),
          ],
        });
      };
    },
    658590: function (e, t, n) {
      n.d(t, {
        a: function () {
          return s;
        },
      });
      var o = n(918701),
        r = n(46140);
      let s = (e) => {
        let t = "1193992107035983872" === e.id,
          n = (0, o.zK)(e, r.S7.IN_HOUSE_CONSOLE_QUEST),
          s = (0, o.zK)(e, r.S7.MOBILE_CONSOLE_QUEST);
        return t || n || s;
      };
    },
    448018: function (e, t, n) {
      n.d(t, {
        v: function () {
          return p;
        },
      });
      var o = n(497505),
        r = n(988303),
        s = n(941348),
        a = n(658590),
        i = n(647365),
        l = n(743294);
      let c = {
          component: i.Z,
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
        d = l.Li,
        u = {
          component: s.Z,
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
            "linear-gradient(90deg, ".concat(l.aY, ", ").concat(l.v6, ")"),
          getPreEnrollmentBackgroundColor: (e) => "var(--home-background)",
          canCollapseOnBlur: (e) => !0,
          shouldExpandOnQuestComplete: (e) => !1,
          getVerticalPadding: () => d,
        },
        p = (e, t, n) => {
          var s;
          let i =
              (null === (s = e.userStatus) || void 0 === s
                ? void 0
                : s.enrolledAt) != null,
            l = (!i && t === r.P.V2) || (i && n === r.P.V2) || (0, a.a)(e),
            d = l ? u : c;
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
            trackingCtx: { content: l ? o.jn.QUEST_BAR_V2 : o.jn.QUEST_BAR },
          };
        };
    },
    647365: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var r = n(453217),
        s = n(100805),
        a = n(784145);
      t.Z = function (e) {
        let {
          collapsedHeight: t,
          expandedContentRef: n,
          expansionSpring: i,
          isExpanded: l,
          isExpansionAnimationComplete: c,
          onCtxMenuOpened: d,
          onCtxMenuClosed: u,
          onCtxMenuSelection: p,
          quest: m,
          useReducedMotion: x,
        } = e;
        return (0, o.jsx)(s.Z, {
          expansionSpring: i,
          className: a.content,
          collapsedHeight: t,
          onCtxMenuOpen: d,
          onCtxMenuClose: u,
          onCtxMenuSelect: p,
          isExpanded: l,
          isExpansionAnimationComplete: c,
          quest: m,
          useReducedMotion: x,
          ref: n,
          children: (0, o.jsx)(r.Z, {
            className: a.content,
            expansionSpring: i,
            isExpanded: l,
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
          return h;
        },
      }),
        n(47120),
        n(724458);
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(392711),
        l = n.n(i),
        c = n(442837),
        d = n(481060),
        u = n(451478),
        p = n(302221),
        m = n(865871);
      let x = [0, 0.5, 1],
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
      async function f(e, t) {
        let o = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
        return (
          (function (e, t, n) {
            for (let o in t) {
              let t = l().get(e, o);
              if (null == t) continue;
              let r = t.map((e, t) => {
                var o;
                return null !== (o = n[t]) && void 0 !== o ? o : e;
              });
              l().set(e, o, r);
            }
          })(o, g, t),
          o
        );
      }
      function h(e) {
        var t;
        let {
            animationClassName: n,
            className: s,
            quest: i,
            useReducedMotion: l,
          } = e,
          g = (0, c.e7)([u.Z], () => u.Z.isFocused()),
          h = r.useRef(null),
          [C, v] = r.useState(!1),
          j = r.useMemo(() => {
            if (null == i) return null;
            let e = (0, p.oo)(i.config.colors.primary),
              t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
              n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return f(i.id, n);
          }, [i]),
          _ =
            (null === (t = i.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          E = !l && g;
        r.useEffect(() => {
          var e, t, n, o;
          g
            ? E &&
              (null === (o = h.current) ||
                void 0 === o ||
                null === (n = o.animation) ||
                void 0 === n ||
                n.play())
            : null === (t = h.current) ||
              void 0 === t ||
              null === (e = t.animation) ||
              void 0 === e ||
              e.goToAndStop(0, !0);
        }, [E, g]);
        let b = r.useCallback(() => {
          v(!0);
        }, []);
        return null == j || _
          ? (0, o.jsx)("div", {
              className: m.backgroundFallback,
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(i.config.colors.primary, ", ")
                  .concat(i.config.colors.secondary, ")"),
              },
            })
          : (0, o.jsx)("div", {
              className: a()(m.lottieAnimationBackgroundWrapper, s),
              children: (0, o.jsx)(
                d.LottieAnimation,
                {
                  ref: h,
                  onComplete: b,
                  importData: () => j,
                  shouldAnimate: !C && E,
                  className: a()(
                    m.lottieAnimation,
                    m.lottieAnimationBackground,
                    n,
                  ),
                  loop: 0,
                  rendererSettings: { preserveAspectRatio: "none" },
                },
                i.config.colors.primary,
              ),
            });
      }
    },
    453217: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(100621),
        i = n(481060),
        l = n(113434),
        c = n(497505),
        d = n(685613),
        u = n(340100),
        p = n(644646),
        m = n(788284),
        x = n(46140),
        g = n(388032),
        f = n(968387);
      t.Z = function (e) {
        var t;
        let {
            className: n,
            expansionSpring: r,
            isExpanded: h,
            isExpansionAnimationComplete: C,
            quest: v,
            useReducedMotion: j,
          } = e,
          _ =
            (null === (t = v.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { percentComplete: E } = (0, l.Rf)(v),
          b = (0, l.Jf)(v),
          N = null != b ? b.completedRatio > 0 : E > 0;
        return (0, o.jsxs)(a.animated.div, {
          "aria-hidden": h && C,
          className: s()(n, f.contentCollapsed, {
            [f.contentCollapsedExpanded]: h,
            [f.contentCollapsedAccepted]: _,
          }),
          style: { opacity: r.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, o.jsx)(m.Z, { quest: v, useReducedMotion: j }),
            (0, o.jsx)("div", {
              className: f.contentCollapsedWrapper,
              children: _
                ? (0, o.jsxs)("div", {
                    className: f.questProgressWrapper,
                    children: [
                      (0, o.jsx)(p.Z, {
                        className: f.questProgressRewardTile,
                        quest: v,
                        questContent: c.jn.QUEST_BAR,
                        autoplay: !1,
                        location: x.dr.QUESTS_BAR,
                      }),
                      N
                        ? (0, o.jsx)(u.Z, {
                            className: f.questProgressBar,
                            quest: v,
                          })
                        : (0, o.jsx)(i.Text, {
                            className: f.questProgressHint,
                            color: "always-white",
                            variant: "text-sm/semibold",
                            children: g.intl.string(g.t["7e5k7O"]),
                          }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: f.brandingWrapper,
                    children: [
                      (0, o.jsx)(d.Z, {
                        className: f.partnerBranding,
                        quest: v,
                      }),
                      (0, o.jsx)(i.Heading, {
                        color: "always-white",
                        variant: "heading-sm/medium",
                        className: f.questName,
                        children: g.intl.format(g.t.EAYZAg, {
                          questName: v.config.messages.questName,
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
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(442837),
        c = n(950104),
        d = n(780384),
        u = n(481060),
        p = n(70097),
        m = n(703656),
        x = n(358085),
        g = n(617136),
        f = n(272008),
        h = n(113434),
        C = n(569984),
        v = n(497505),
        j = n(918701),
        _ = n(865364),
        E = n(585500),
        b = n(475595),
        N = n(566078),
        S = n(340100),
        T = n(611855),
        B = n(644646),
        A = n(78826),
        y = n(670638),
        R = n(667105),
        w = n(46140),
        I = n(981631),
        k = n(701488),
        q = n(388032),
        P = n(609706);
      let O = r.forwardRef(function (e, t) {
        var n, s;
        let {
            children: _,
            className: O,
            collapsedHeight: W,
            expansionSpring: L,
            isExpanded: Q,
            isExpansionAnimationComplete: Z,
            onCtxMenuOpen: D,
            onCtxMenuClose: H,
            onCtxMenuSelect: U,
            quest: V,
            useReducedMotion: z,
          } = e,
          F = (0, l.e7)([C.Z], () => C.Z.isEnrolling(V.id), [V]),
          G = (0, h.B6)(V.config.expiresAt),
          K = N.r.build(V.config),
          Y = (0, h.B6)(K.rewardsExpireAt),
          X = r.useMemo(() => (0, b.fh)(V, b.eC.HERO), [V]),
          J = (0, R.tP)(K.application.id),
          $ = K.features.has(w.S7.START_QUEST_CTA)
            ? g.jZ.START_QUEST
            : g.jZ.ACCEPT_QUEST,
          ee = K.features.has(w.S7.START_QUEST_CTA)
            ? q.intl.string(q.t.E80Bdn)
            : q.intl.string(q.t.l7E81t),
          et = r.useCallback(() => {
            (0, f.AH)(V.id, {
              questContent: v.jn.QUEST_BAR,
              questContentCTA: $,
            }),
              K.features.has(w.S7.START_QUEST_CTA) &&
                (0, m.uL)(I.Z5c.ACTIVITY_DETAILS(k.In), void 0);
          }, [V, $, K.features]),
          en = (0, R.hf)({ quest: V, location: v.jn.QUEST_BAR }),
          eo = r.useCallback(() => {
            (0, j.FE)(V, {
              content: v.jn.QUEST_BAR,
              ctaContent: g.jZ.OPEN_GAME_LINK,
            });
          }, [V]),
          er = K.features.has(w.S7.POST_ENROLLMENT_CTA),
          es = (0, h.Rf)(V),
          ea = (0, h.Jf)(V),
          ei = null != ea ? ea.progress > 0 : es.progressSeconds > 0,
          el =
            (null === (n = V.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ec =
            (null === (s = V.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          ed = r.useMemo(() => (0, j.Xv)(V.config), [V.config]),
          eu = Q && Z,
          ep = (0, E.D)({
            quest: V,
            taskDetails: es,
            location: w.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0,
          }),
          em = (0, x.isWeb)(),
          ex = r.useMemo(() => {
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
        return (0, o.jsxs)(i.animated.div, {
          className: a()(O, P.contentExpanded, { [P.contentInteractable]: eu }),
          style: {
            backgroundColor: V.config.colors.secondary,
            transform: ec
              ? void 0
              : (0, i.to)(
                  [
                    L.to({ range: [0, 1], output: [0, -100] }),
                    L.to({ range: [0, 1], output: [0, W] }),
                  ],
                  (e, t) =>
                    "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                ),
          },
          children: [
            _,
            (0, o.jsx)("div", {
              "aria-hidden": !eu,
              children: el
                ? (0, o.jsxs)("div", {
                    className: P.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, o.jsxs)("div", {
                        className: P.utils,
                        children: [
                          (0, o.jsxs)("div", {
                            className: P.questAcceptedContentHeading,
                            children: [
                              (0, o.jsx)(B.Z, {
                                className: P.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: V,
                                questContent: v.jn.QUEST_BAR,
                                location: w.dr.QUESTS_BAR,
                              }),
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, j.AV)({
                                      quest: V,
                                      taskDetails: es,
                                      thirdPartyTaskDetails:
                                        null != ea ? ea : void 0,
                                    }),
                                  }),
                                  (0, o.jsx)(u.Text, {
                                    className:
                                      P.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: ec
                                      ? q.intl.formatToPlainString(q.t.APddvL, {
                                          expirationDate: Y,
                                        })
                                      : q.intl.formatToPlainString(
                                          q.t["pX+fmp"],
                                          { expirationDate: G },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)(y.r, {
                            onOpen: D,
                            onClose: H,
                            onSelect: U,
                            questContent: v.jn.QUEST_BAR,
                            quest: V,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, o.jsx)(u.Clickable, {
                                ...e,
                                className: P.submenuWrapper,
                                "aria-label": q.intl.string(q.t.DEoVWV),
                                children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: P.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      ec
                        ? (0, o.jsx)(u.Button, {
                            className: a()(P.cta, P.ctaClaimReward),
                            style: ed ? ex : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: en,
                            size: u.Button.Sizes.NONE,
                            children: q.intl.string(q.t.cfY4PD),
                          })
                        : (0, o.jsx)(u.Text, {
                            className: P.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ep,
                          }),
                      (0, o.jsx)(S.Z, { quest: V }),
                      !em &&
                        !ei &&
                        !J &&
                        er &&
                        (0, o.jsx)(M, { onClick: eu ? eo : void 0 }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsxs)("div", {
                        className: P.questPromoContent,
                        ref: t,
                        children: [
                          (0, o.jsxs)("div", {
                            className: P.utils,
                            children: [
                              (0, o.jsx)(T.Z, { color: "always-white" }),
                              (0, o.jsx)(y.r, {
                                onOpen: D,
                                onClose: H,
                                onSelect: U,
                                questContent: v.jn.QUEST_BAR,
                                quest: V,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                children: (e) =>
                                  (0, o.jsx)(u.Clickable, {
                                    ...e,
                                    className: P.submenuWrapper,
                                    "aria-label": q.intl.string(q.t.DEoVWV),
                                    children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: P.submenuIcon,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: P.details,
                            children: [
                              (0, o.jsx)(B.Z, {
                                className: P.rewardTile,
                                learnMoreStyle: "text",
                                quest: V,
                                questContent: v.jn.QUEST_BAR,
                                location: w.dr.QUESTS_BAR,
                              }),
                              (0, o.jsx)(u.Heading, {
                                className: P.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: q.intl.format(q.t.EQa7oq, {
                                  questName: V.config.messages.questName,
                                }),
                              }),
                              (0, o.jsx)(u.Text, {
                                className: P.description,
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: ep,
                              }),
                            ],
                          }),
                          (0, o.jsx)(u.Button, {
                            className: P.cta,
                            style: "1232852290197655573" !== V.id ? ex : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: eu ? et : void 0,
                            size: u.Button.Sizes.NONE,
                            submitting: F,
                            children: ee,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: P.heroAssetWrapper,
                        style: { color: V.config.colors.secondary },
                        children: X.isAnimated
                          ? (0, o.jsx)(A.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => {
                                var t;
                                return (0, o.jsx)(p.Z, {
                                  ref: e,
                                  autoPlay: !z,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                  className: P.heroAsset,
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
                          : (0, o.jsx)(A.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                (0, o.jsx)("img", {
                                  ref: e,
                                  alt: "",
                                  className: P.heroAsset,
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
      function M(e) {
        let { style: t, onClick: n } = e;
        return (0, _.O)({ location: w.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, o.jsx)(u.Button, {
              className: P.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: q.intl.string(q.t.lwQdjI),
            })
          : null;
      }
      t.Z = O;
    },
    623249: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
          openConsoleConnectionErrorsModal: function () {
            return S;
          },
        }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(442837),
        l = n(780384),
        c = n(481060),
        d = n(607070),
        u = n(600164),
        p = n(210887),
        m = n(617136),
        x = n(113434),
        g = n(497505),
        f = n(918701),
        h = n(475595),
        C = n(667105),
        v = n(981631),
        j = n(388032),
        _ = n(24444),
        E = n(708901);
      function b(e) {
        let { questId: t, errorHints: n, transitionState: s, onClose: b } = e,
          S = (0, x.B4)(t);
        null == S && b();
        let [T, B] = (0, r.useState)(n),
          A = (0, x.KX)(),
          y = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
          R = (0, C.g2)({ useReducedMotion: y, className: _.colorTransition }),
          w = T.filter((e) =>
            ["xbox", "playstation"].includes(e.connected_account_type),
          ),
          I = (0, f.Bz)(S),
          k = (0, i.e7)([p.Z], () => p.Z.getState().theme),
          q = (0, l.wj)(k) ? v.BRd.DARK : v.BRd.LIGHT,
          { startConsoleQuest: P, startingConsoleQuest: O } = (0, x.GI)({
            questId: S.id,
            beforeRequest: () => {
              R.startAnimation(),
                (0, m._3)({
                  questId: S.id,
                  questContent: g.jn.CONNECTIONS_MODAL,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: (e) => {
              R.stopAnimation(), B(e);
            },
          });
        return (0, o.jsxs)(c.ModalRoot, {
          transitionState: s,
          size: c.ModalSize.DYNAMIC,
          className: _.modalRoot,
          children: [
            (0, o.jsxs)(c.ModalHeader, {
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              className: _.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: _.modalTop,
                  children: [
                    (0, o.jsx)("div", {
                      className: _.iconFrame,
                      children: (0, o.jsx)("img", {
                        className: _.icon,
                        alt: "",
                        src: E,
                      }),
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                      className: _.closeBtn,
                      onClick: b,
                    }),
                  ],
                }),
                (0, o.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  children: j.intl.string(j.t.W5lmKi),
                }),
                (0, o.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: _.upperBodyText,
                  children: A.message,
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: _.modalContent,
              children: [
                (0, o.jsxs)("div", {
                  className: _.contentHeader,
                  children: [
                    (0, o.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "header-secondary",
                      children: j.intl.string(j.t["+/hZMz"]),
                    }),
                    (0, o.jsxs)(c.Clickable, {
                      className: a()(_.refreshWrapper, { [_.disabled]: O }),
                      onClick: P,
                      children: [
                        R.render(),
                        (0, o.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color: "currentColor",
                          className: _.colorTransition,
                          children: j.intl.string(j.t.wzzjk5),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: _.accountsWrapper,
                  children: [
                    (0, o.jsx)(N, {
                      icon: (0, o.jsx)(c.ScreenIcon, { size: "sm" }),
                      text: j.intl.string(j.t.br3uIi),
                    }),
                    (0, o.jsx)(N, {
                      icon: (0, o.jsx)(c.GameControllerIcon, { size: "sm" }),
                      text: j.intl.string(j.t.XF4wuL),
                      errors: I ? void 0 : w.map((e) => e.message),
                      gameTile: I
                        ? (0, o.jsx)(c.Tooltip, {
                            "aria-label": S.config.messages.gameTitle,
                            text: () =>
                              (0, o.jsxs)("div", {
                                className: _.tooltip,
                                children: [
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: S.config.messages.gameTitle,
                                  }),
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: j.intl.string(j.t.STpNEB),
                                  }),
                                ],
                              }),
                            children: (e) =>
                              (0, o.jsx)("img", {
                                ...e,
                                className: _.gameTile,
                                alt: S.config.messages.gameTitle,
                                src: (0, h.fh)(S, h.eC.GAME_TILE, q).url,
                              }),
                          })
                        : null,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalFooter, {
              className: _.footer,
              children: [
                (0, o.jsx)(c.Button, {
                  size: c.ButtonSizes.MIN,
                  onClick: b,
                  className: _.footerCloseButton,
                  children: j.intl.string(j.t.cpT0Cg),
                }),
                (0, o.jsx)(c.Button, {
                  look: c.ButtonLooks.LINK,
                  color: c.ButtonColors.PRIMARY,
                  onClick: () => {
                    b(),
                      (0, f.V$)(
                        { quest: S },
                        {
                          content: g.jn.CONNECTIONS_MODAL,
                          ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                        },
                      );
                  },
                  children: j.intl.string(j.t["qiS+xs"]),
                }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        let { icon: t, text: n, errors: r = [], gameTile: s } = e,
          i = r.length > 0,
          l = i ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
        return (0, o.jsxs)("div", {
          className: _.connectionRow,
          children: [
            (0, o.jsxs)("div", {
              className: a()(_.connectionRowHeader, {
                [_.connectionRowHeaderError]: i,
              }),
              children: [
                (0, o.jsxs)("div", {
                  className: _.connectionRowHeaderContent,
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
                  className: _.connectionRowHeaderContent,
                  children: [
                    s,
                    (0, o.jsx)(l, {
                      color: "currentColor",
                      size: "sm",
                      className: a()({ [_.success]: !i, [_.error]: i }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: _.errorsContainer,
              children: r.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: _.errorRow,
                    children: [
                      (0, o.jsx)(c.WarningIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: _.error,
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
      function S(e) {
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
          return g;
        },
      }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(617136),
        l = n(113434),
        c = n(497505),
        d = n(602667),
        u = n(439826),
        p = n(43779),
        m = n(981631),
        x = n(968470);
      function g(e) {
        let {
            quest: t,
            className: n,
            questContent: s,
            contentPosition: g,
            rowIndex: f,
          } = e,
          [h, C] = r.useState(!1),
          [v, j] = r.useState([]),
          _ = (0, l.qb)(t),
          E = r.useCallback(() => {
            C(!0),
              (0, i.dA)({
                questId: t.id,
                event: m.rMx.QUEST_HOVER,
                properties: (0, i.mH)(s),
              });
          }, [C, s, t.id]),
          b = r.useCallback(() => {
            C(!1),
              (0, i.dA)({
                questId: t.id,
                event: m.rMx.QUEST_HOVER_OFF,
                properties: (0, i.mH)(s),
              });
          }, [C, s, t.id]);
        return (0, o.jsx)(d.A, {
          questOrQuests: t,
          questContent: s,
          questContentPosition: g,
          questContentRowIndex: f,
          trackGuildAndChannelMetadata: s === c.jn.QUESTS_EMBED,
          children: (e) =>
            (0, o.jsxs)("div", {
              id: "quest-tile-".concat(t.id),
              ref: (t) => {
                e.current = t;
              },
              className: a()(x.container, n),
              onMouseEnter: E,
              onMouseLeave: b,
              children: [
                (0, o.jsx)(u.Z, {
                  quest: t,
                  isHovering: h,
                  errorHints: v,
                  warningHints: _,
                }),
                (0, o.jsx)(p.Z, {
                  quest: t,
                  questContent: s,
                  isHovering: h,
                  contentPosition: g,
                  rowIndex: f,
                  onReceiveErrorHints: j,
                }),
              ],
            }),
        });
      }
    },
    439826: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return q;
        },
      }),
        n(571269),
        n(298267);
      var o,
        r,
        s = n(200651),
        a = n(192379),
        i = n(120356),
        l = n.n(i),
        c = n(100621),
        d = n(186325),
        u = n(780384),
        p = n(481060),
        m = n(393238),
        x = n(410030),
        g = n(44315),
        f = n(70097),
        h = n(617136),
        C = n(272008),
        v = n(113434),
        j = n(497505),
        _ = n(918701),
        E = n(475595),
        b = n(720293),
        N = n(623249),
        S = n(78826),
        T = n(670638),
        B = n(341907),
        A = n(642145),
        y = n(981631),
        R = n(388032),
        w = n(411702);
      function I(e) {
        var t;
        let { quest: n, errorHints: o, warningHints: r, isDarkTheme: i } = e,
          { ref: l, height: d = 0 } = (0, m.Z)([o]),
          u =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          x = (0, v.z)(n),
          { type: f, hints: h } = a.useMemo(
            () =>
              u || x
                ? { type: 2, hints: [] }
                : o.length > 0
                  ? { type: 0, hints: o.map((e) => e.message) }
                  : r.length > 0
                    ? { type: 1, hints: r }
                    : { type: 2, hints: [] },
            [o, u, x, r],
          ),
          C = 2 !== f,
          j = (0, p.useSpring)({
            opacity: C ? 1 : 0,
            height: C ? d : 0,
            config: A.Y,
          }),
          _ = 0 === f ? p.CircleWarningIcon : p.CircleInformationIcon,
          E = (0, g.Lq)(y.Ilk.RED_345),
          b =
            0 === f
              ? E
              : i
                ? p.tokens.colors.TEXT_NORMAL
                : p.tokens.colors.WHITE;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(c.animated.div, {
            style: j,
            children: (0, s.jsxs)("div", {
              ref: l,
              className: w.hints,
              children: [
                (0, s.jsxs)("div", {
                  className: w.hintsContainer,
                  children: [
                    (0, s.jsx)(_, { size: "xs", color: b }),
                    (0, s.jsx)(p.Text, {
                      variant: "text-xs/medium",
                      color: i ? "text-muted" : "always-white",
                      children: h.at(0),
                    }),
                  ],
                }),
                0 === f &&
                  (0, s.jsx)(p.Button, {
                    onClick: () =>
                      (0, N.openConsoleConnectionErrorsModal)({
                        questId: n.id,
                        errorHints: o,
                      }),
                    size: p.ButtonSizes.MIN,
                    look: p.ButtonLooks.LINK,
                    color: p.ButtonColors.CUSTOM,
                    style: { color: (0, g.Lq)(y.Ilk.BLUE_345) },
                    children: "See Details",
                  }),
              ],
            }),
          }),
        });
      }
      function k(e) {
        var t;
        let { asset: n, reducedMotionEnabled: o, visible: r } = e,
          i = a.useRef(null);
        return (
          a.useEffect(() => {
            null != i.current && r && i.current.play();
          }, [r]),
          (0, s.jsx)(f.Z, {
            ref: i,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: l()(w.videoOverlay, { [w.videoOverlayVisible]: r }),
            controls: !1,
            children: (0, s.jsx)("source", {
              src: n.url,
              type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0,
            }),
          })
        );
      }
      function q(e) {
        var t, n, o;
        let {
            quest: r,
            isHovering: i,
            errorHints: c,
            warningHints: m,
            onCtxMenuClose: g,
            onCtxMenuOpen: N,
            onCtxMenuSelect: A,
          } = e,
          q = (0, _.cr)(r),
          P = a.useMemo(() => (0, E.fh)(r, E.eC.HERO), [r]),
          O = a.useMemo(() => (0, E.fh)(r, E.eC.LOGO_TYPE, "dark"), [r]),
          M = (0, x.ZP)(),
          W = ((0, u.wj)(M) ? y.BRd.DARK : y.BRd.LIGHT) === y.BRd.DARK,
          L = a.useContext(d.S).reducedMotion.enabled,
          Q = (0, _.Mi)(r, j.jn.GIFT_INVENTORY_FOR_YOU),
          Z = (0, v.tP)(r),
          D =
            (null === (t = r.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          H = a.useRef(i),
          U = a.useRef(null),
          V = (0, v.B6)(r.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          z =
            (null === (n = r.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          F =
            (null === (o = r.userStatus) || void 0 === o
              ? void 0
              : o.completedAt) != null,
          G = a.useCallback(() => {
            if (!!q)
              (0, C.AH)(r.id, {
                questContent: j.jn.QUEST_HOME_DESKTOP,
                questContentCTA: h.jZ.ACCEPT_QUEST,
              }),
                (0, B.openVideoQuestModal)(r);
          }, [q, r]);
        a.useEffect(() => {
          if (P.isAnimated && null != U.current)
            return (
              H.current !== i &&
                (i && !L
                  ? U.current.play()
                  : (U.current.pause(), (U.current.currentTime = 0))),
              (H.current = i),
              () => {
                var e;
                null === (e = U.current) || void 0 === e || e.pause();
              }
            );
        }, [i, P, L]);
        let K = a.useMemo(() => (0, b.z)(b.i.QUEST_HOME_VIDEO, r), [r]);
        return (0, s.jsxs)("div", {
          className: w.container,
          children: [
            (0, s.jsxs)("div", {
              className: w.heroAssetWrapper,
              children: [
                P.isAnimated
                  ? (0, s.jsx)(S.Fl, {
                      id: "QuestTileBanner_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (U.current = e.current),
                          (0, s.jsx)(f.Z, {
                            ref: e,
                            autoPlay: !L && i,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: w.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)("source", {
                              src: P.url,
                              type:
                                null !== (t = P.mimetype) && void 0 !== t
                                  ? t
                                  : void 0,
                            }),
                          })
                        );
                      },
                    })
                  : (0, s.jsx)(S.Fl, {
                      id: "QuestTileBanner",
                      children: (e) =>
                        (0, s.jsx)("img", {
                          ref: e,
                          alt: "".concat(r.config.messages.questName),
                          className: w.heroAsset,
                          src: P.url,
                        }),
                    }),
                q &&
                  !L &&
                  null != K &&
                  (0, s.jsx)(k, {
                    asset: K,
                    reducedMotionEnabled: L,
                    visible: i,
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className: l()(w.overlay, {
                [w.darkThemeGradient]: W,
                [w.lightThemeGradient]: !W,
              }),
            }),
            (0, s.jsxs)("div", {
              className: w.positionContentOverBackground,
              children: [
                (0, s.jsxs)("div", {
                  className: w.contents,
                  children: [
                    (0, s.jsxs)("div", {
                      className: w.topRow,
                      children: [
                        Q &&
                          !Z &&
                          !D &&
                          (0, s.jsx)("div", {
                            className: w.pill,
                            children: (0, s.jsx)(p.Text, {
                              variant: "eyebrow",
                              color: "always-white",
                              className: w.eyebrowText,
                              children: R.intl.string(R.t.WThgAQ),
                            }),
                          }),
                        q &&
                          (0, s.jsx)(p.Tooltip, {
                            text: F
                              ? "Watch again"
                              : z
                                ? "Continue watching"
                                : "Start video quest",
                            children: (e) =>
                              (0, s.jsx)(p.Clickable, {
                                ...e,
                                className: w.utilButtonWrapper,
                                "aria-label": R.intl.string(R.t.RscU7O),
                                onClick: G,
                                children: (0, s.jsx)(p.PlayIcon, {
                                  className: w.utilButtonIcon,
                                }),
                              }),
                          }),
                        (0, s.jsx)(T.r, {
                          onOpen: N,
                          onClose: g,
                          onSelect: A,
                          questContent: j.jn.QUEST_HOME_DESKTOP,
                          quest: r,
                          hideLearnMore: !0,
                          shouldShowDisclosure: !0,
                          showShareLink: !0,
                          children: (e) =>
                            (0, s.jsx)(p.Clickable, {
                              ...e,
                              className: w.utilButtonWrapper,
                              "aria-label": R.intl.string(R.t.DEoVWV),
                              children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: l()(w.utilButtonIcon),
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(S.Fl, {
                      id: "QuestPartnerBranding_gameLogotype",
                      children: (e) =>
                        (0, s.jsx)("img", {
                          ref: e,
                          className: w.partnerBranding,
                          alt: r.config.messages.gameTitle,
                          src: O.url,
                        }),
                    }),
                    (0, s.jsxs)("div", {
                      className: w.bottomRow,
                      children: [
                        (0, s.jsx)(p.Text, {
                          variant: "text-sm/medium",
                          color: W ? "text-muted" : "always-white",
                          children: R.intl.format(R.t.buEvBw, {
                            brandName: r.config.messages.gamePublisher,
                          }),
                        }),
                        Z || D
                          ? null
                          : (0, s.jsx)(p.Text, {
                              variant: "text-sm/medium",
                              color: W ? "text-muted" : "always-white",
                              children: R.intl.format(R.t["7D8r4O"], {
                                expiryDate: V,
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(I, {
                  quest: r,
                  errorHints: c,
                  warningHints: m,
                  isDarkTheme: W,
                }),
              ],
            }),
          ],
        });
      }
      ((r = o || (o = {}))[(r.ERROR = 0)] = "ERROR"),
        (r[(r.WARNING = 1)] = "WARNING"),
        (r[(r.NONE = 2)] = "NONE");
    },
    69439: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(442837),
        l = n(481060),
        c = n(607070),
        d = n(617136),
        u = n(113434),
        p = n(569984),
        m = n(497505),
        x = n(918701),
        g = n(667105),
        f = n(341907),
        h = n(284851),
        C = n(46140),
        v = n(388032),
        j = n(632946);
      let _ = [
        {
          value: C.cd.DESKTOP,
          get label() {
            return v.intl.string(v.t.QXc019);
          },
        },
        {
          value: C.cd.CONSOLE,
          get label() {
            return v.intl.string(v.t["8lAfuL"]);
          },
        },
      ];
      function E(e) {
        let t,
          n,
          { value: r } = e;
        switch (r) {
          case C.cd.DESKTOP:
            (n = (0, o.jsx)(l.ScreenIcon, {})), (t = v.intl.string(v.t.QXc019));
            break;
          case C.cd.CONSOLE:
            (n = (0, o.jsx)(l.GameControllerIcon, {})),
              (t = v.intl.string(v.t["8lAfuL"]));
            break;
          default:
            return null;
        }
        return (0, o.jsxs)("div", {
          className: j.platformSelectorPrimaryLabel,
          children: [n, t],
        });
      }
      function b(e) {
        var t, n, s, b;
        let {
            quest: N,
            location: S,
            onReceiveErrorHints: T,
            contentPosition: B,
            rowIndex: A,
          } = e,
          y = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
          R = (0, g.g2)({ useReducedMotion: y }),
          w = (0, u._s)({ quest: N }),
          I = (0, u.z)(N),
          k = (0, u.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          { isClaiming: q, isEnrolling: P } = (0, i.cj)([p.Z], () => ({
            isClaiming:
              p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id),
          })),
          O =
            (null === (t = N.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          M =
            (null === (n = N.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          W =
            M &&
            (null === (s = N.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) == null,
          L = (0, x.iQ)(N),
          Q = !(0, x.zi)(N),
          Z = (0, u._Q)(N),
          D = (0, x.zK)(N, C.S7.IN_HOUSE_CONSOLE_QUEST),
          H = (0, x.Xv)(N.config),
          U = (0, x.cr)(N),
          V = (0, u.Rf)(N),
          [z, F, G] = (0, u.me)(N, V),
          K = Q && Z === u.OH.ACCEPTED,
          Y = K && z === m.LI.SELECT,
          X = K && !Y && F.length > 1,
          J = r.useCallback(
            (e) => {
              G(e), e === C.cd.DESKTOP && T([]);
            },
            [G, T],
          ),
          { text: $, onClick: ee } = (0, g.Ks)({
            progressState: Z,
            quest: N,
            isInHouseQuest: D,
            location: S,
            isCollectibleQuest: H,
            questContentPosition: B,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: U,
          }),
          { startingConsoleQuest: et, startConsoleQuest: en } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
              R.startAnimation(),
                (0, d._3)({
                  questId: N.id,
                  questContent: S,
                  questContentCTA: d.jZ.DEFIBRILLATOR,
                  questContentPosition: B,
                  questContentRowIndex: A,
                });
            },
            afterRequest: (e) => {
              R.stopAnimation(), T(e);
            },
          }),
          eo =
            (null === (b = N.userStatus) || void 0 === b
              ? void 0
              : b.claimedAt) != null,
          er = null;
        return (L && W
          ? (er = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: q,
              onClick: null != ee ? ee : void 0,
              className: j.button,
              children: $,
            }))
          : M
            ? (er = U
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        className: j.button,
                        style: { flex: 1 },
                        onClick: () => {
                          (0, f.openVideoQuestModal)(N);
                        },
                        children: (0, o.jsxs)("div", {
                          className: j.ctaInner,
                          children: [
                            (0, o.jsx)(l.RetryIcon, {
                              color: l.tokens.colors.WHITE,
                              className: j.videoQuestPlayIcon,
                            }),
                            (0, o.jsx)("span", {
                              children: v.intl.string(v.t.YsCuyM),
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.BRAND,
                        className: j.button,
                        onClick: null != ee ? ee : void 0,
                        children: $,
                      }),
                    ],
                  })
                : (0, o.jsx)(l.Button, {
                    color: l.ButtonColors.BRAND,
                    className: j.button,
                    onClick: null != ee ? ee : void 0,
                    children: $,
                  }))
            : Q
              ? Q && W
                ? (er = (0, o.jsx)(l.Button, {
                    color: l.ButtonColors.BRAND,
                    submitting: q,
                    onClick: null != ee ? ee : void 0,
                    className: j.button,
                    children: $,
                  }))
                : Q && O && !eo
                  ? (er = Y
                      ? (0, o.jsx)(l.Select, {
                          className: j.platformSelectorPrimary,
                          isSelected: () => !1,
                          options: _,
                          placeholder: v.intl.string(v.t.drVw4e),
                          renderOptionLabel: E,
                          select: J,
                          serialize: (e) => {
                            switch (e) {
                              case C.cd.DESKTOP:
                                return v.intl.string(v.t.QXc019);
                              case C.cd.CONSOLE:
                                return v.intl.string(v.t["8lAfuL"]);
                            }
                          },
                        })
                      : (0, x.$J)(N) && !I && z !== m.LI.DESKTOP
                        ? w
                          ? (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              className: j.button,
                              onClick: null != ee ? ee : void 0,
                              children: $,
                            })
                          : (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              onClick: en,
                              disabled: et,
                              className: j.button,
                              children: (0, o.jsxs)("div", {
                                className: j.ctaInner,
                                children: [
                                  R.render(),
                                  v.intl.string(v.t.nPThNT),
                                ],
                              }),
                            })
                        : U
                          ? (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.BRAND,
                              onClick: null != ee ? ee : void 0,
                              className: j.button,
                              children: $,
                            })
                          : (0, o.jsx)(l.Button, {
                              color: l.ButtonColors.PRIMARY,
                              disabled: !0,
                              className: j.button,
                              children: v.intl.string(v.t["9KoPyM"]),
                            }))
                  : Q &&
                    !O &&
                    (er = (0, o.jsx)(l.Button, {
                      submitting: P,
                      color: l.ButtonColors.BRAND,
                      onClick: null != ee ? ee : void 0,
                      className: j.button,
                      children: $,
                    }))
              : (er = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t["14o6QU"], { expiryDate: k }),
                })),
        null == er)
          ? null
          : (0, o.jsxs)("div", {
              className: j.container,
              children: [
                er,
                X &&
                  (0, o.jsx)(h.U, {
                    onSelect: J,
                    quest: N,
                    questContent: m.jn.ACTIVITY_PANEL,
                    children: (e) =>
                      (0, o.jsx)(l.Button, {
                        className: a()(j.button, j.platformSelectorSecondary),
                        color: l.ButtonColors.PRIMARY,
                        ...e,
                        children: (0, o.jsxs)("div", {
                          className: j.platformSelectorSecondaryContent,
                          children: [
                            (function (e) {
                              switch (e) {
                                case m.LI.DESKTOP:
                                  return (0, o.jsx)(l.ScreenIcon, {
                                    color: "currentColor",
                                  });
                                case m.LI.CONSOLE:
                                  return (0, o.jsx)(l.GameControllerIcon, {
                                    color: "currentColor",
                                  });
                                default:
                                  return null;
                              }
                            })(z),
                            (0, o.jsx)(l.ChevronSmallDownIcon, {
                              className: j.platformSelectorSecondaryChevron,
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
          return E;
        },
      });
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(100621),
        l = n(442837),
        c = n(481060),
        d = n(393238),
        u = n(607070),
        p = n(113434),
        m = n(566078),
        x = n(472144),
        g = n(644646),
        f = n(69439),
        h = n(46140),
        C = n(642145),
        v = n(388032),
        j = n(684688);
      let _ = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
      function E(e) {
        var t, n, s;
        let {
            quest: E,
            questContent: b,
            isHovering: N,
            contentPosition: S,
            rowIndex: T,
            onReceiveErrorHints: B,
          } = e,
          A = m.r.build(E.config),
          y = A.defaultReward.messages.name,
          R = A.defaultReward.messages.nameWithArticle,
          w =
            (null === (t = E.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { ref: I, scrollHeight: k } = (0, d.Z)(),
          q = 104 !== k,
          { expansionSpring: P } = (0, c.useSpring)({
            expansionSpring: N ? 1 : 0,
            config: { ...C.Y, clamp: !0 },
          }),
          O =
            (null === (n = E.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          M =
            (null === (s = E.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) != null,
          { completedRatio: W, completedRatioDisplay: L } = (0, p.I)(E),
          Q = (0, p.Bd)(E),
          Z = r.useCallback(
            (e) =>
              (0, o.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: "text-normal",
                tag: "span",
                className: j.header,
                children: e,
              }),
            [],
          ),
          D = r.useMemo(
            () =>
              M
                ? Z(y)
                : v.intl.format(v.t["0IUT4e"], {
                    rewardWithArticleHook: () => Z(R),
                  }),
            [y, R, M, Z],
          ),
          H = r.useMemo(() => {
            if (null != Q)
              return (0, o.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: a()(j.description),
                children: Q,
              });
          }, [Q]),
          U = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, o.jsxs)("div", {
          className: a()(j.container),
          children: [
            (0, o.jsxs)(i.animated.div, {
              style: {
                maxHeight: P.to([0, 1], [104, (null != k ? k : 0) + 12]),
              },
              className: a()(j.rewardDescriptionContainer),
              children: [
                (0, o.jsxs)("div", {
                  className: j.assetWrapper,
                  children: [
                    !M &&
                      O &&
                      (0, o.jsx)("div", { className: j.completionAnimation }),
                    w && !M
                      ? (0, o.jsxs)("div", {
                          className: j.progressWrapper,
                          children: [
                            O &&
                              (0, o.jsx)(c.LottieAnimation, {
                                importData: _,
                                className: j.confetti,
                                loop: !1,
                                autoplay: !1,
                                shouldAnimate: !U,
                              }),
                            (0, o.jsx)(x.Z, {
                              quest: E,
                              size: 76,
                              percentComplete: W,
                              percentCompleteText: N ? L : void 0,
                              children: (0, o.jsx)("div", {
                                className: j.circularRewardTileWrapper,
                                children: (0, o.jsx)(g.Z, {
                                  quest: E,
                                  questContent: b,
                                  className: j.circularQuestRewardTileAsset,
                                  location: h.dr.QUEST_HOME_DESKTOP,
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, o.jsx)(g.Z, {
                          quest: E,
                          autoplay: N,
                          questContent: b,
                          className: j.questRewardTileAsset,
                          location: h.dr.QUEST_HOME_DESKTOP,
                        }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  ref: I,
                  className: a()(j.textContainer, { [j.justifyCenter]: !q }),
                  children: [
                    (0, o.jsx)(c.Heading, {
                      variant: "eyebrow",
                      color: "text-brand",
                      className: j.questName,
                      children: v.intl.format(v.t.EAYZAg, {
                        questName: E.config.messages.questName,
                      }),
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: j.header,
                      children: D,
                    }),
                    H,
                  ],
                }),
                q &&
                  (0, o.jsx)(i.animated.div, {
                    style: { opacity: P.to([0, 1], [1, 0]) },
                    className: j.textOverflowBlur,
                  }),
              ],
            }),
            (0, o.jsx)(f.Z, {
              quest: E,
              location: b,
              contentPosition: S,
              rowIndex: T,
              onReceiveErrorHints: B,
            }),
          ],
        });
      }
    },
    284851: function (e, t, n) {
      n.d(t, {
        U: function () {
          return l;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(481060),
        s = n(46140),
        a = n(388032);
      function i(e) {
        let { onClose: t, onSelect: n, quest: i } = e;
        return (0, o.jsx)(r.Menu, {
          variant: "fixed",
          onSelect: t,
          navId: "quest-home-platform-select-".concat(i.id),
          "aria-label": a.intl.string(a.t.ogxXGh),
          onClose: t,
          children: (0, o.jsxs)(
            r.MenuGroup,
            {
              children: [
                (0, o.jsx)(r.MenuItem, {
                  id: "desktop",
                  label: a.intl.string(a.t.QXc019),
                  action: () => n(s.cd.DESKTOP),
                  icon: r.ScreenIcon,
                }),
                (0, o.jsx)(r.MenuItem, {
                  id: "console",
                  label: a.intl.string(a.t["8lAfuL"]),
                  action: () => n(s.cd.CONSOLE),
                  icon: r.GameControllerIcon,
                }),
              ],
            },
            "actions",
          ),
        });
      }
      function l(e) {
        let { children: t, ...n } = e;
        return (0, o.jsx)(r.Popout, {
          position: "bottom",
          align: "right",
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, o.jsx)(i, { ...n, onClose: t });
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
        assetBodyVideoPreviewMedia: "assetBodyVideoPreviewMedia_e23249",
        assetBodyVideoPreviewVideo: "assetBodyVideoPreviewVideo_e23249",
        assetBodyVideoPreviewVisible: "assetBodyVideoPreviewVisible_e23249",
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
        previewPlayButtonCont: "previewPlayButtonCont_e23249",
        previewPlayButton: "previewPlayButton_e23249",
        videoQuestPreviewCont: "videoQuestPreviewCont_e23249",
        enrolledVideoPreview: "enrolledVideoPreview_e23249",
        enrolledVideoPreviewImg: "enrolledVideoPreviewImg_e23249",
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
//# sourceMappingURL=6b22fb202b08385999e1.js.map
