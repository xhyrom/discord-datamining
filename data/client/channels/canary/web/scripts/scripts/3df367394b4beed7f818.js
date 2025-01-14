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
          return b;
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
        f = n(981631),
        g = n(388032),
        h = n(387029);
      function C(e) {
        let { quest: t, isConnected: n, consoleType: r } = e,
          c = (0, u.O5)();
        return (0, o.jsx)(l.Clickable, {
          className: h.connectConsoleButtonWrapper,
          onClick: () => {
            c({
              questId: t.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.CONNECT_CONSOLE,
            }),
              (0, d.Z)({ platformType: r });
          },
          children:
            r === f.ABu.PLAYSTATION
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
        let { text: t, quest: n } = e,
          r = (0, u.O5)();
        return (0, o.jsx)(l.Clickable, {
          className: h.showConnectionsButton,
          onClick: () => {
            r({
              questId: n.id,
              questContent: p.jn.QUEST_BAR_V2,
              questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
            }),
              c.Z.open(f.oAB.CONNECTIONS);
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
                    ? g.intl.string(g.t["u30/ur"])
                    : g.intl.string(g.t.owFNBw),
                }),
                (0, o.jsxs)("div", {
                  className: h.inlineConsoleConnectionDetailsIcons,
                  children: [
                    (0, o.jsx)(C, {
                      consoleType: f.ABu.PLAYSTATION,
                      isConnected: u,
                      quest: t,
                    }),
                    (0, o.jsx)("div", { className: h.consoleIconDivider }),
                    (0, o.jsx)(C, {
                      consoleType: f.ABu.XBOX,
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
                              e.type === f.ABu.XBOX
                                ? g.intl.string(g.t.MEhKlp)
                                : g.intl.string(g.t["74VQCA"]),
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
                      text: g.intl.string(g.t.o8ZkKS),
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
          ? (0, o.jsx)(v, { text: g.intl.string(g.t["qiS+xs"]), quest: n })
          : null;
      }
      function b(e) {
        let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: g.intl.string(g.t.EJFSvL),
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
        i = n(476183),
        l = n(442837),
        c = n(481060),
        d = n(110924),
        u = n(607070),
        p = n(819640),
        m = n(617136),
        x = n(113434),
        f = n(497505),
        g = n(977156),
        h = n(5881),
        C = n(602667),
        v = n(78826),
        j = n(667105),
        _ = n(693900),
        b = n(617889),
        E = n(130653),
        N = n(46140),
        B = n(981631),
        T = n(157410);
      function S(e) {
        let { isExpanded: t, questId: n } = e;
        return (
          (0, x.qI)({
            mode: t ? N.NH.EXPANDED : N.NH.COLLAPSED,
            questContent: f.jn.QUEST_BAR_V2,
            questId: n,
          }),
          null
        );
      }
      function y(e) {
        var t, n;
        let { quest: s } = e,
          x = (0, h.T)({ quest: s, location: N.dr.QUESTS_BAR }),
          y = (0, g.Zy)({ location: N.dr.QUESTS_BAR }),
          A = (0, j.qN)({ quest: s, location: N.dr.QUESTS_BAR }),
          R = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
          w = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
          I = r.useRef(null),
          k =
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          q = (0, d.Z)(k),
          P =
            (null === (n = s.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          M = (0, d.Z)(P),
          { hasError: O, isLoading: W } = (0, v.d7)(),
          L = r.useContext(E.T) || (y && A && !W),
          Z = r.useRef(L),
          Q = (0, b.B)(s, L && !O),
          D = r.useRef(-1),
          H = r.useRef(!1),
          [U, V] = r.useState(!1),
          [z, F] = r.useState(!1),
          [G, K] = r.useState(!0),
          [Y, X] = r.useState(!0),
          [J, $] = r.useState(Q.preEnrollmentExpandedHeight),
          ee = r.useRef(null),
          et = r.useCallback((e) => {
            K(!1), F(e);
          }, []),
          en = r.useCallback(() => {
            var e, t;
            $(
              (null !==
                (t =
                  null === (e = ee.current) || void 0 === e
                    ? void 0
                    : e.offsetHeight) && void 0 !== t
                ? t
                : 84) +
                2 * Q.paddingVertical,
            );
          }, [Q.paddingVertical]),
          eo = r.useCallback(() => {
            en(), et(!0);
          }, [en, et]),
          er = r.useCallback(() => {
            V(!0);
          }, []),
          es = r.useCallback(() => {
            V(!1), !H.current && !P && et(!1);
          }, [P, et]),
          ea = r.useCallback(() => {
            V(!1), !P && et(!1), (H.current = !1);
          }, [P, et]),
          ei = r.useCallback(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (z) return;
              let { withDelay: t = !1 } = e;
              t ? (D.current = window.setTimeout(eo, 75)) : eo();
            },
            [eo, z],
          ),
          el = r.useCallback(() => {
            ei();
          }, [ei]),
          ec = r.useCallback(() => {
            if ((window.clearTimeout(D.current), !!Q.canCollapseOnBlur && !U))
              !H.current && et(!1);
          }, [U, Q, et]),
          ed = r.useCallback(() => {
            var e;
            (0, m.dA)({
              questId: s.id,
              event: B.rMx.QUEST_HOVER,
              properties: {
                ...(0, m.mH)(f.jn.QUEST_BAR),
                impression_id:
                  null === (e = I.current) || void 0 === e ? void 0 : e.getId(),
              },
            }),
              (H.current = !0),
              ei({ withDelay: !0 });
          }, [ei, s]),
          eu = r.useCallback(() => {
            var e;
            (0, m.dA)({
              questId: s.id,
              event: B.rMx.QUEST_HOVER_OFF,
              properties: {
                ...(0, m.mH)(f.jn.QUEST_BAR),
                impression_id:
                  null === (e = I.current) || void 0 === e ? void 0 : e.getId(),
              },
            }),
              (H.current = !1),
              ec();
          }, [ec, s]);
        r.useLayoutEffect(() => {
          P && Q.shouldExpandOnQuestComplete && eo();
        }, [eo, P, Q.shouldExpandOnQuestComplete]),
          r.useLayoutEffect(() => {
            k && !q && H.current && eo();
          }, [eo, k, q]),
          r.useLayoutEffect(() => {
            !P && k && !q && !H.current && et(!1);
          }, [k, P, q, et]),
          r.useLayoutEffect(() => {
            L !== Z.current && X(!1), (Z.current = L);
          }, [L]);
        let ep = k ? N.XZ : N.R4,
          [{ expansionSpring: em }, ex] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: ep,
            onRest: () => {
              K(!0);
            },
            onStart: () => {
              K(!1);
            },
          }));
        r.useEffect(() => {
          ex({ expansionSpring: z ? 1 : 0, immediate: R });
        }, [z, ex, R]);
        let { visibilitySpring: ef } = (0, c.useSpring)({
          from: { visibilitySpring: 0 },
          to: { visibilitySpring: L ? 1 : 0 },
          config: { tension: 250, friction: 10, clamp: !0 },
          onRest: () => {
            X(!0);
          },
          onStart: () => {
            X(!1);
          },
        });
        return (r.useLayoutEffect(() => {
          P && !M && Q.canCollapseOnBlur && en();
        }, [P, eo, Q.canCollapseOnBlur, en, M]),
        r.useEffect(() => {
          var e, t;
          O &&
            (0, m.dA)({
              questId: s.id,
              event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
              properties: {
                ...(0, m.mH)(f.jn.QUEST_BAR),
                reason: "asset_loading_error",
                impression_id:
                  null === (e = I.current) || void 0 === e ? void 0 : e.getId(),
              },
            }),
            !y &&
              (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  ...(0, m.mH)(f.jn.QUEST_BAR),
                  reason: "not_eligible_for_quest",
                  impression_id:
                    null === (t = I.current) || void 0 === t
                      ? void 0
                      : t.getId(),
                },
              });
        }, [O, y, s.id]),
        y && (L || !Y || W) && !O)
          ? (0, o.jsx)(C.A, {
              questOrQuests: s,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !w && L,
              children: (e, t) => {
                let n = Q.component;
                return (
                  (I.current = t.current),
                  (0, o.jsxs)("div", {
                    className: T.mask,
                    children: [
                      L && (0, o.jsx)(S, { questId: s.id, isExpanded: z }),
                      (0, o.jsx)(i.animated.div, {
                        "aria-hidden": !L,
                        onMouseLeave: eu,
                        onMouseEnter: ed,
                        onFocus: el,
                        onBlur: ec,
                        className: a()(T.wrapper, {
                          [T.wrapperInvisible]: !L,
                          [T.wrapperVisible]: L && Y,
                        }),
                        style: {
                          color: s.config.colors.secondary,
                          height: ef.to({
                            range: [0, 1],
                            output: [0, !Q.canCollapseOnBlur && z ? J : 70],
                          }),
                        },
                        children: (0, o.jsx)(i.animated.div, {
                          className: a()(T.contentWrapper, {
                            [T.contentWrapperExpanded]: z,
                            [T.contentWrapperAccepted]: k,
                          }),
                          style: {
                            backgroundColor: Q.preEnrollmentBackgroundColor,
                            backgroundImage: k
                              ? Q.postEnrollmentBackgroundImage
                              : void 0,
                          },
                          children: (0, o.jsx)(_.t, {
                            springConfig: ep,
                            isExpanded: z,
                            children: (0, o.jsx)(n, {
                              expandedContentRef: ee,
                              expansionSpring: em,
                              isExpanded: z,
                              isExpansionAnimationComplete: G,
                              onCtxMenuClosed: es,
                              onCtxMenuOpened: er,
                              onCtxMenuSelection: ea,
                              quest: s,
                              useReducedMotion: R,
                              collapsedHeight: 70,
                            }),
                          }),
                        }),
                      }),
                    ],
                  })
                );
              },
            })
          : (O
              ? x.log("Not rendered due to asset error")
              : !y && x.log("Not rendered due to ineligibility"),
            null);
      }
      t.Z =
        12633 == n.j
          ? function () {
              let e = (0, j.DH)();
              return null == e
                ? null
                : (0, o.jsx)(
                    v.p,
                    {
                      source: N.dr.QUESTS_BAR,
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
        s = n(476183),
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
          { ref: f, height: g = null } = (0, l.Z)(),
          h = null !== (t = (0, c.Z)(g)) && void 0 !== t ? t : null,
          [{ height: C }, v] = (0, i.useSpring)(() => ({
            from: { height: 0 },
            config: p,
          }));
        return (
          r.useLayoutEffect(() => {
            null !== g && v({ height: g, immediate: !m || x || null === h });
          }, [g, v, m, x, h]),
          (0, o.jsx)(s.animated.div, {
            style: { height: null === h ? "auto" : C, overflow: "hidden" },
            children: (0, o.jsx)("div", {
              style: { overflow: "hidden" },
              ref: f,
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
        u = n(277636);
      t.Z = function (e) {
        var t;
        let {
            expandedContentRef: n,
            expansionSpring: p,
            isExpanded: m,
            isExpansionAnimationComplete: x,
            onCtxMenuOpened: f,
            onCtxMenuClosed: g,
            onCtxMenuSelection: h,
            quest: C,
            useReducedMotion: v,
            collapsedHeight: j,
          } = e,
          _ = r.useRef(null),
          b = r.useRef(null),
          E =
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
              onCtxMenuOpen: f,
              onCtxMenuClose: g,
              onCtxMenuSelect: h,
              overlayRef: b,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: C,
              useReducedMotion: v,
              ref: n,
              taskDetails: N,
              children: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(d.Z, { expansionSpring: p, isExpanded: m }),
                  !E &&
                    (0, o.jsx)(a.Z, {
                      quest: C,
                      expansionSpring: p,
                      useReducedMotion: v,
                      isExpanded: m,
                      isExpansionAnimationComplete: x,
                      onCtxMenuOpen: f,
                      onCtxMenuClose: g,
                      onCtxMenuSelect: h,
                    }),
                ],
              }),
            }),
            (0, o.jsx)("div", { ref: b, className: u.overlay }),
          ],
        });
      };
    },
    308069: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(476183),
        l = n(481060),
        c = n(617136),
        d = n(915750),
        u = n(497505),
        p = n(918701),
        m = n(685613),
        x = n(64141),
        f = n(341907),
        g = n(303385),
        h = n(388032),
        C = n(626094);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: n,
            onCtxMenuSelect: s,
            onCtxMenuOpen: v,
            onCtxMenuClose: j,
            useReducedMotion: _,
            isExpanded: b,
            isExpansionAnimationComplete: E,
          } = e,
          N = (0, d.aM)(),
          B = r.useCallback(() => {
            (0, f.openDisclosureModal)(t, {
              content: u.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          T = r.useCallback(() => {
            (0, p.FE)(t, {
              content: u.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
              impressionId: N,
            });
          }, [N, t]),
          S = b && E,
          y = (0, o.jsx)(l.Clickable, {
            onClick: T,
            className: a()(C.clickable, { [C.logo]: S }),
            children: (0, o.jsx)(m.ZP, {
              quest: t,
              logotypeClassName: a()(C.rewardHighlightLogotype),
              withGameTile: !1,
            }),
          });
        return (0, o.jsxs)(i.animated.div, {
          className: a()(C.wrapper, C.rewardHighlightWrapper, {
            [C.interactable]: S,
          }),
          style: {
            transform: (0, i.to)(
              [n.to({ range: [0, 1], output: [8, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, o.jsx)(i.animated.div, {
              className: C.opaqueExpandedBackground,
              style: {
                opacity: n.to({ range: [0, 1], output: [0, 1] }),
                backdropFilter: n
                  .to([0, 1], [0, 1])
                  .to((e) =>
                    "blur("
                      .concat(10 * e, "px) brightness(")
                      .concat(1 - e / 4, ")"),
                  ),
              },
            }),
            (0, o.jsx)(g.Z, {
              quest: t,
              expansionSpring: n,
              isFullyExpanded: S,
              partnerBranding: y,
              useReducedMotion: _,
            }),
            (0, o.jsxs)(i.animated.div, {
              className: C.promotedBadgeWrapper,
              style: { opacity: n.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, o.jsxs)(l.Clickable, {
                  className: C.promotedBadge,
                  onClick: B,
                  children: [
                    (0, o.jsx)(l.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: h.intl.string(h.t.o6FLcH),
                    }),
                    (0, o.jsx)(l.CircleQuestionIcon, {
                      color: l.tokens.colors.WHITE,
                      className: C.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, o.jsx)(x.r, {
                  onOpen: v,
                  onClose: j,
                  onSelect: s,
                  questContent: u.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, o.jsx)(l.Clickable, {
                      ...e,
                      className: C.submenuWrapper,
                      "aria-label": h.intl.string(h.t.DEoVWV),
                      children: (0, o.jsx)(l.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: a()(C.submenuIcon, C.white),
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
        a = n(476183),
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
              unregisterComponent: f,
              expansionSpring: g,
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
                  null != e && f(d, u);
                }
              );
            }, [d, u, x, f]);
          let _ = r.useCallback(
            (e) => {
              let { height: t } = e;
              j.current !== t && (m(), (j.current = t));
            },
            [m],
          );
          (0, i.P)(C, _);
          let b = null === (n = h.get(d)) || void 0 === n ? void 0 : n.current,
            E = null;
          return (
            null == b
              ? (E = null)
              : p && null != g
                ? (E = (0, o.jsxs)(o.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, s.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: g.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: l(v),
                          }),
                          b,
                        ),
                      "expanded" === u &&
                        (0, s.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: g.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: l(v),
                          }),
                          b,
                        ),
                    ],
                  }))
                : "collapsed" === u && (E = (0, s.createPortal)(l(v), b)),
            (0, o.jsxs)("div", {
              style: {
                opacity: (null == E && "collapsed" === u) || null == b ? 1 : 0,
              },
              ref: t,
              children: [l(C), E],
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
            f = r.useCallback((e, t, n) => {
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
            g = r.useCallback((e, t) => {
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
                  f = d.left - u.left,
                  g = -a.right + c.right + l.Li,
                  h = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: f,
                  expandedLeft: x,
                  collapsedRight: h,
                  expandedRight: g,
                  collapsedTop: m,
                  expandedTop: p,
                  width: a.width,
                });
              }
              p(e);
            }, [i, n, s, p]);
          return (0, o.jsx)(c.Provider, {
            value: {
              registerComponent: f,
              unregisterComponent: g,
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
          return _;
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
        l = n(915750),
        c = n(497505),
        d = n(918701),
        u = n(796111),
        p = n(667105),
        m = n(341907),
        x = n(604162),
        f = n(46140),
        g = n(388032),
        h = n(977174);
      function C(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, o.jsx)(a.Button, {
          className: h.cta,
          color: a.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(t);
          },
          size: a.Button.Sizes.SMALL,
          children: (0, x.F9)(n),
        });
      }
      let v = (e) => {
          let { quest: t } = e,
            n = (0, l.aM)();
          return (0, o.jsx)(a.Button, {
            className: h.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
              (0, d.FE)(t, {
                content: c.jn.QUEST_BAR_V2,
                ctaContent: i.jZ.OPEN_GAME_LINK,
                impressionId: n,
              }),
            children: (0, d.pO)(t)
              ? g.intl.string(g.t.hvVgAQ)
              : g.intl.string(g.t.lwQdjI),
          });
        },
        j = (e) => {
          var t;
          let { quest: n } = e,
            r = null === (t = (0, l.WD)()) || void 0 === t ? void 0 : t.getId();
          return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: h.cta,
            onClick: () =>
              (0, d.gI)(
                { quest: n },
                {
                  content: c.jn.QUEST_BAR_V2,
                  ctaContent: i.jZ.CONNECT_CONSOLE,
                  impressionId: r,
                },
              ),
            size: a.Button.Sizes.SMALL,
            children: g.intl.string(g.t.csptqa),
          });
        },
        _ = (e) => {
          let {
              quest: t,
              useReducedMotion: n,
              isExpanded: r,
              className: i,
              ctaLabel: l,
              ...d
            } = e,
            u = (0, p.hf)({ quest: t, location: c.jn.QUEST_BAR_V2 });
          return (0, o.jsx)(a.ShinyButton, {
            fullWidth: !0,
            size: a.Button.Sizes.SMALL,
            onClick: u,
            pauseAnimation: n || !r,
            className: s()(h.cta, i),
            buttonShineClassName: h.shine,
            ...d,
            children: null != l ? l : g.intl.string(g.t.cfY4PD),
          });
        },
        b = (e) => {
          var t;
          let {
              quest: n,
              useReducedMotion: r,
              isExpanded: s,
              awaitingConsoleConnections: a,
              hasMadeProgress: i,
              isProgressing: l,
              activeScreen: p,
              taskDetails: m,
            } = e,
            x =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            g = (0, u.P)({ location: f.dr.QUESTS_BAR }),
            h = (0, d.q8)(n);
          if (x)
            return (0, o.jsx)(_, {
              quest: n,
              useReducedMotion: r,
              isExpanded: s,
            });
          if (h) return (0, o.jsx)(C, { quest: n, taskDetails: m });
          if (p === c.LI.CONSOLE && a && !g) return (0, o.jsx)(j, { quest: n });
          else if (p !== c.LI.SELECT && !i && !l)
            return (0, o.jsx)(v, { quest: n });
          return null;
        };
      function E(e) {
        return (0, o.jsxs)("div", {
          className: h.ctaButtons,
          children: [
            e.showBackButton &&
              (0, o.jsx)(a.Button, {
                className: h.backButton,
                innerClassName: h.backButtonInner,
                look: "blank",
                grow: !1,
                fullWidth: !1,
                size: "none",
                onClick: e.onBack,
                children: (0, o.jsx)(a.ChevronSmallLeftIcon, {
                  className: h.backIcon,
                }),
              }),
            (0, o.jsx)(b, { ...e }),
          ],
        });
      }
    },
    472144: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(476183),
        l = n(481060),
        c = n(569379),
        d = n(642145),
        u = n(793436);
      t.Z = r.forwardRef((e, t) => {
        let {
            quest: n,
            percentComplete: r,
            size: s = 42,
            strokeWidth: p = 3,
            glowBlur: m = 0.4,
            percentCompleteText: x,
            percentCompleteTextVariant: f = "text-lg/medium",
            children: g,
          } = e,
          h = (0, c.E)(n, r > 0),
          C = s / 2,
          v = s / 2 - p / 2,
          j = 2 * Math.PI * v,
          _ = j - r * j,
          b = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: _,
          },
          E = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -r * j,
          },
          N = { boxShadow: "0 0 30px 0px ".concat(h.glow) },
          { progressTextAnimation: B } = (0, l.useSpring)({
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
                g,
                (0, o.jsxs)(i.animated.div, {
                  style: { opacity: B },
                  className: a()(u.coverContent, u.progressTextWrapper),
                  children: [
                    (0, o.jsx)("div", {
                      className: a()(u.coverContent, u.progressTextOverlay),
                    }),
                    (0, o.jsx)(l.Text, {
                      variant: f,
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
                  style: E,
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: v,
                  cx: C,
                  cy: C,
                  stroke: h.foreground,
                  style: b,
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
        i = n(119617),
        l = n(995295),
        c = n(476183),
        d = n(442837),
        u = n(110924),
        p = n(607070),
        m = n(819640),
        x = n(569379),
        f = n(675654),
        g = n(211720),
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
          { completionSpring: b, startCompletionAnimation: E } = (0, x.G)(),
          N =
            (null === (t = v.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          B = r.useRef(!1),
          T = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          S = r.useRef(null),
          y = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
          A = (0, u.Z)(y),
          [R, w] = r.useState(null),
          [I, k] = r.useState(null),
          q = r.useRef(new i.qA({ gravity: 0, wind: 0 })),
          P = (0, i.uR)(R, I),
          M = r.useCallback(() => {
            if (T) return;
            let e = j.current,
              t = S.current;
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
                  ...f.We,
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
          }, [j, S, P, T]),
          O = (0, u.Z)(_);
        return (r.useEffect(() => {
          N && _ && !O && (E(), M());
        }, [_, N, E, M, O]),
        r.useEffect(() => {
          N &&
            !y &&
            A &&
            setTimeout(() => {
              E(), M();
            }, 200);
        }, [N, A, y, E, M]),
        r.useEffect(() => {
          if (!!P.isReady) !B.current && N && (E(), M()), (B.current = N);
        }, [N, B, M, E, P]),
        T)
          ? null
          : (0, o.jsxs)("div", {
              className: g.wrapper,
              "aria-hidden": "true",
              ref: S,
              children: [
                (0, o.jsx)(c.animated.div, {
                  className: g.background,
                  style: { opacity: b },
                }),
                (0, o.jsx)(c.animated.div, {
                  className: a()(g.borders, g.bordersTopLeft),
                  style: { opacity: b },
                }),
                (0, o.jsxs)(c.animated.div, {
                  className: g.confettiWrapper,
                  style: {
                    transform: n
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, o.jsx)(i.O_, {
                      ref: w,
                      className: g.confetti,
                      environment: q.current,
                    }),
                    (0, o.jsx)(i.Ji, {
                      ref: k,
                      sprites: [h],
                      colors: C,
                      spriteWidth: f.Ko,
                      spriteHeight: f.Ko,
                    }),
                    null != s.current &&
                      (0, l.createPortal)(
                        (0, o.jsx)(c.animated.div, {
                          className: a()(g.borders, g.bordersBottom),
                          style: { opacity: b },
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
        m = n(915750),
        x = n(111382),
        f = n(113434),
        g = n(497505),
        h = n(918701),
        C = n(667105),
        v = n(585857),
        j = n(388032),
        _ = n(313750);
      function b(e) {
        let { children: t, isComplete: n, hasNextStep: r } = e;
        return (0, o.jsxs)("li", {
          className: a()(
            _.stepWrapper,
            { [_.stepWrapperComplete]: n },
            { [_.stepWrapperWithNextStep]: r },
          ),
          children: [
            (0, o.jsxs)("div", {
              className: _.stepIndicator,
              children: [
                (0, o.jsx)("div", {
                  className: _.stepIconWrapper,
                  children:
                    n &&
                    (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                      className: _.stepIcon,
                      color: c.tokens.colors.WHITE,
                    }),
                }),
                r && (0, o.jsx)("div", { className: _.stepConnector }),
              ],
            }),
            (0, o.jsx)("div", { className: _.stepContent, children: t }),
          ],
        });
      }
      function E(e) {
        return (0, o.jsx)(c.Text, {
          className: _.microphoneUnitBodyText,
          color: "text-muted",
          variant: "text-xxs/normal",
          children: e.children,
        });
      }
      function N(e) {
        let { quest: t, useReducedMotion: n } = e,
          s = (0, x.n)(),
          l = (0, C.k3)(t.id, g.jn.QUEST_BAR_V2),
          d = (0, C.g2)({ useReducedMotion: n }),
          v = (0, p.O5)(),
          b = (0, m.aM)(),
          {
            errorHints: N,
            startingConsoleQuest: B,
            startConsoleQuest: T,
          } = (0, f.GI)({
            questId: t.id,
            beforeRequest: () => {
              v({
                questId: t.id,
                questContent: g.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.DEFIBRILLATOR,
              }),
                d.startAnimation();
            },
            afterRequest: d.stopAnimation,
          }),
          { header: S, renderBody: y } = r.useMemo(() => {
            let e = N.length > 0,
              n = t.config.messages.gameTitle;
            return {
              header: e
                ? j.intl.formatToPlainString(j.t["28Ql29"], { gameTitle: n })
                : j.intl.formatToPlainString(j.t.gX0Qc3, { gameTitle: n }),
              renderBody: e
                ? () =>
                    (0, o.jsx)(o.Fragment, {
                      children: N.map((e, n) => {
                        if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                          let r = u.Z.getAccount(
                              e.connected_account_id,
                              e.connected_account_type,
                            ),
                            s = (0, h.C9)(e),
                            a = (0, h._j)(e);
                          return (0, o.jsx)(
                            E,
                            {
                              children: j.intl.format(s, {
                                account_name: null == r ? void 0 : r.name,
                                onClick: () => {
                                  (0, h.fY)(
                                    { quest: t, platformType: a },
                                    {
                                      content: g.jn.QUEST_BAR,
                                      ctaContent:
                                        p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                      impressionId: b,
                                    },
                                  );
                                },
                              }),
                            },
                            n,
                          );
                        }
                        return (0, o.jsx)(E, { children: e.message }, n);
                      }),
                    })
                : () =>
                    (0, o.jsx)(c.Text, {
                      className: _.microphoneUnitBodyText,
                      color: "text-muted",
                      variant: "text-xxs/normal",
                      children: j.intl.format(j.t.GXqvCw, { gameTitle: n }),
                    }),
            };
          }, [N, t, s, b]);
        return (0, o.jsxs)("div", {
          className: _.microphoneUnit,
          children: [
            (0, o.jsxs)("div", {
              className: _.microphoneUnitHeader,
              children: [
                (0, o.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === N.length ? _.warningCircle : _.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, o.jsx)(c.Text, { variant: "text-xs/medium", children: S }),
                (0, o.jsx)(c.Clickable, {
                  className: a()(_.microphoneUnitRefreshIconWrapper, {
                    [_.disabled]: B,
                  }),
                  onClick: () => T(),
                  children: d.render(),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: a()({ [_.opacity_50]: B }),
              children: [
                y(),
                0 === N.length ? null : (0, o.jsx)(E, { children: l }),
              ],
            }),
          ],
        });
      }
      function B(e) {
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
          a = (0, f.z6)(),
          {
            steps: i,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m,
          } = r.useMemo(() => {
            var e;
            let r = a.xboxAndPlaystationAccounts.length > 0,
              s = r && (0, h.Bz)(t),
              i = t.config.messages.gameTitle,
              l =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, o.jsx)(v.Q, { ...a, quest: t }),
                  isComplete: r || s || l,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(B, {
                      text: j.intl.formatToPlainString(j.t["+8JB6e"], {
                        gameTitle: i,
                      }),
                    }),
                  isComplete: s || l,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(B, {
                      text: j.intl.formatToPlainString(j.t.HhfrYW, {
                        numMinutes: n.targetMinutes,
                      }),
                    }),
                  isComplete: l,
                },
              ],
              hasConnectedAccounts: r,
              isProgressingQuestForLaunchedGame: s,
              isQuestComplete: l,
            };
          }, [a, t, n]);
        return (0, o.jsxs)("div", {
          className: _.wrapper,
          children: [
            (0, o.jsx)("div", {
              className: _.headingWrapper,
              children: (0, o.jsx)(c.Heading, {
                className: _.heading,
                variant: "text-xs/medium",
                children: j.intl.string(j.t.UPWlJi),
              }),
            }),
            (0, o.jsxs)("div", {
              className: _.stepsWrapper,
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
                  (0, o.jsx)(N, { useReducedMotion: s, quest: t }),
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
        i = n(476183),
        l = n(95985),
        c = n(952529);
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
          f = r.useRef(null),
          g =
            (null === (n = m.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null;
        return (0, o.jsx)(i.animated.div, {
          ref: t,
          "aria-hidden": u && p,
          className: a()(s, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: g,
          }),
          style: { opacity: d.to({ range: [0, 1], output: [1, 0] }) },
          children: (0, o.jsx)("div", {
            className: c.contentCollapsedWrapper,
            children: g
              ? (0, o.jsx)(l.Z, {
                  contentLocation: "collapsed",
                  quest: m,
                  progressBarRef: f,
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
        i = n(476183),
        l = n(278074),
        c = n(442837),
        d = n(692547),
        u = n(481060),
        p = n(70097),
        m = n(617136),
        x = n(272008),
        f = n(113434),
        g = n(569984),
        h = n(497505),
        C = n(918701),
        v = n(184299),
        j = n(665430),
        _ = n(585500),
        b = n(475595),
        E = n(720293),
        N = n(644646),
        B = n(78826),
        T = n(64141),
        S = n(341907),
        y = n(693900),
        A = n(164495),
        R = n(759853),
        w = n(205511),
        I = n(694802),
        k = n(95985),
        q = n(50476),
        P = n(46140),
        M = n(743294),
        O = n(388032),
        W = n(748628);
      function L(e) {
        var t;
        let { quest: n, onClick: s, reducedMotion: i } = e,
          [l, c] = r.useState(!1),
          m = r.useRef(null),
          x = (0, E.z)(E.i.QUEST_BAR_PREVIEW_VIDEO, n),
          f = (0, E.z)(E.i.VIDEO_PLAYER_THUMBNAIL, n),
          g = (0, v.km)((e) => e.getVideoProgressState);
        r.useEffect(() => {
          null != m.current &&
            (i && l && (m.current.currentTime = 0), m.current.play());
        }, [m, l, i]);
        let h = g(n.id),
          C =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null && h === v.iw.COMPLETED,
          j = !C && (!i || l);
        return (0, o.jsxs)(u.Clickable, {
          className: W.videoQuestPreviewCont,
          onClick: s,
          onMouseEnter: () => {
            i && !l && c(!0);
          },
          onMouseLeave: () => {
            i && l && c(!1);
          },
          children: [
            null != f &&
              (0, o.jsx)("img", {
                alt: "",
                src: f.url,
                className: W.assetBodyVideoPreviewMedia,
              }),
            null != x
              ? (0, o.jsx)(p.Z, {
                  ref: m,
                  autoPlay: !0,
                  poster: null == f ? void 0 : f.url,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className: a()(W.assetBodyVideoPreviewVideo, {
                    [W.assetBodyVideoPreviewVisible]: j,
                  }),
                  controls: !1,
                  children: (0, o.jsx)("source", {
                    src: x.url,
                    type: x.mimetype,
                  }),
                })
              : null,
            (0, o.jsx)("div", {
              className: W.previewPlayButtonCont,
              children: C
                ? (0, o.jsx)(u.RetryIcon, {
                    color: d.Z.colors.WHITE,
                    className: W.previewPlayButton,
                  })
                : (0, o.jsx)(u.PlayIcon, {
                    color: d.Z.colors.WHITE,
                    className: W.previewPlayButton,
                  }),
            }),
          ],
        });
      }
      function Z(e) {
        let { quest: t } = e;
        return (0, o.jsx)(N.Z, {
          className: a()(W.rewardTile, W.hiddenRewardTile),
          learnMoreStyle: "text",
          quest: t,
          questContent: h.jn.QUEST_BAR_V2,
          location: P.dr.QUESTS_BAR,
        });
      }
      function Q(e) {
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
          f = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
          v = r.useMemo(() => (0, b.fh)(t, b.eC.QUEST_BAR_HERO), [t]),
          j = r.useRef(null),
          E = (0, _.D)({
            quest: t,
            location: P.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: n,
          });
        r.useEffect(() => {
          null != j.current &&
            (l && m
              ? (j.current.pause(), (j.current.currentTime = 0))
              : !l && m && j.current.play());
        }, [l, m]);
        let N = (0, C.q8)(t)
          ? O.intl.string(O.t.umdNio)
          : O.intl.string(O.t.l7E81t);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              children: (0, o.jsxs)("div", {
                className: W.questPromoContent,
                ref: d,
                children: [
                  (0, o.jsxs)("div", {
                    className: W.details,
                    children: [
                      (0, o.jsx)(Z, { quest: t }),
                      (0, o.jsx)(u.Heading, {
                        className: W.title,
                        variant: "heading-md/medium",
                        children: O.intl.format(O.t.EQa7oq, {
                          questName: t.config.messages.questName,
                        }),
                      }),
                      (0, o.jsx)(u.Text, {
                        className: W.description,
                        variant: "text-xs/normal",
                        children: E,
                      }),
                    ],
                  }),
                  (0, o.jsx)(u.Button, {
                    className: W.cta,
                    color: u.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: a ? x : void 0,
                    size: u.Button.Sizes.SMALL,
                    submitting: f,
                    children: N,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(i.animated.div, {
              className: W.heroAssetWrapper,
              style: {
                backdropFilter: s
                  .to([0, 1], [5, 0])
                  .to((e) => "blur(".concat(e, "px)")),
                filter: s
                  .to([0, 1], [0.8, 1])
                  .to((e) => "brightness(".concat(e, ")")),
              },
              children: [
                (0, o.jsx)(i.animated.div, {
                  className: W.heroAssetDarken,
                  style: { opacity: s.to([0, 1], [1, 0]) },
                }),
                (0, o.jsx)(i.animated.div, {
                  className: W.heroAssetTint,
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
                          null != e.current && (j.current = e.current),
                          (0, o.jsx)(p.Z, {
                            ref: e,
                            autoPlay: !l && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: W.heroAsset,
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
                          className: W.heroAsset,
                          src: v.url,
                        }),
                    }),
                (0, o.jsx)(i.animated.div, {
                  className: W.legibilityGradient,
                  style: { opacity: s.to({ range: [0, 1], output: [0, 1] }) },
                }),
              ],
            }),
          ],
        });
      }
      function D(e) {
        var t;
        let {
            quest: n,
            taskDetails: s,
            expansionSpring: c,
            overlayRef: d,
            isExpanded: p,
            reducedMotion: m,
            containerRef: x,
            onCtxMenuOpen: g,
            onCtxMenuClose: v,
            onCtxMenuSelect: _,
          } = e,
          b =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          E = s.percentComplete > 0,
          N = (0, f.z)(n),
          [B, Z, Q] = (0, f.me)(n, s),
          D = (0, j.pF)({ location: P.dr.QUESTS_BAR }),
          H = r.useRef(null),
          U = (0, f.B6)(n.config.expiresAt),
          V = (0, f._s)({ quest: n }),
          z = (0, C.q8)(n),
          F = r.useCallback(() => {
            (0, S.openVideoQuestModal)(n);
          }, [n]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.animated.div, {
              className: a()(
                W.postEnrollmentBackground,
                W.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(M.aY, ", ")
                  .concat(M.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, o.jsxs)("div", {
              className: W.questAcceptedContent,
              ref: x,
              children: [
                (0, o.jsxs)("div", {
                  className: W.questAcceptedHeader,
                  children: [
                    (0, o.jsx)(u.Text, {
                      variant: "text-xxs/medium",
                      className: a()(W.flex, W.headerText),
                      children: O.intl.format(O.t["pX+fmp"], {
                        expirationDate: U,
                      }),
                    }),
                    (0, o.jsx)(T.r, {
                      onOpen: g,
                      onClose: v,
                      onSelect: _,
                      questContent: h.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, o.jsx)(u.Clickable, {
                          ...e,
                          className: W.submenuWrapper,
                          "aria-label": O.intl.string(O.t.DEoVWV),
                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(W.submenuIcon, W.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: W.divider }),
                (0, o.jsx)(R.Z, {
                  expansionSpring: c,
                  overlayRef: d,
                  progressBarRef: H,
                  quest: n,
                  isExpanded: p,
                }),
                (0, o.jsx)(k.Z, {
                  contentLocation: "expanded",
                  quest: n,
                  progressBarRef: H,
                  isExpanded: !0,
                  taskDetails: s,
                  activeScreen: B,
                }),
                (0, o.jsx)(y.n, {
                  children:
                    !b &&
                    !(0, C.Gd)(n) &&
                    (0, l.EQ)(B)
                      .with(h.LI.SELECT, () =>
                        (0, o.jsx)(q.Z, {
                          onConsole: () => Q(P.cd.CONSOLE),
                          onDesktop: () => Q(P.cd.DESKTOP),
                        }),
                      )
                      .with(h.LI.DESKTOP, () => (0, o.jsx)(I.Z, { quest: n }))
                      .with(h.LI.CONSOLE, () =>
                        (0, o.jsx)(w.Z, { quest: n, taskDetails: s }),
                      )
                      .exhaustive(),
                }),
                (0, o.jsxs)(y.n, {
                  children: [
                    z &&
                      (0, o.jsx)(L, { quest: n, onClick: F, reducedMotion: m }),
                    (0, o.jsx)(A.yD, {
                      quest: n,
                      useReducedMotion: m,
                      isExpanded: p,
                      awaitingConsoleConnections: V,
                      hasMadeProgress: E,
                      isProgressing: N,
                      activeScreen: B,
                      showBackButton:
                        B !== h.LI.SELECT && Z.length > 1 && !E && !N && D,
                      onBack: () => Q(null),
                      taskDetails: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: a()(
                W.postEnrollmentBackground,
                W.postEnrollmentBackgroundExpanded,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(M.aY, ", ")
                  .concat(M.v6, ")"),
              },
            }),
          ],
        });
      }
      let H = r.forwardRef(function (e, t) {
        var n;
        let {
            children: s,
            className: l,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: p,
            onCtxMenuOpen: f,
            onCtxMenuClose: g,
            onCtxMenuSelect: v,
            overlayRef: j,
            quest: _,
            useReducedMotion: b,
            taskDetails: E,
          } = e,
          N = (0, C.q8)(_),
          B = r.useCallback(() => {
            (0, x.AH)(_.id, {
              questContent: h.jn.QUEST_BAR_V2,
              questContentCTA: m.jZ.ACCEPT_QUEST,
            }),
              N && (0, S.openVideoQuestModal)(_);
          }, [_, N]),
          T =
            (null === (n = _.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          y = d && u;
        return (0, o.jsxs)(i.animated.div, {
          "aria-hidden": !y,
          className: a()(l, W.contentExpanded, {
            [W.contentInteractable]: y,
            [W.contentExpandedAccepted]: T,
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
                ? (0, o.jsx)(D, {
                    quest: _,
                    taskDetails: E,
                    expansionSpring: p,
                    overlayRef: j,
                    isExpanded: d,
                    reducedMotion: b,
                    onCtxMenuOpen: f,
                    onCtxMenuClose: g,
                    onCtxMenuSelect: v,
                    containerRef: t,
                  })
                : (0, o.jsx)(Q, {
                    quest: _,
                    taskDetails: E,
                    expansionSpring: p,
                    isInteractable: y,
                    reducedMotion: b,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: B,
                  }),
            }),
          ],
        });
      });
      t.Z = H;
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
        d = n(597924);
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
        u = n(952529);
      t.Z = (e) => {
        let {
            contentLocation: t,
            quest: n,
            progressBarRef: p,
            isExpanded: m,
            taskDetails: x,
            activeScreen: f,
          } = e,
          { percentComplete: g } = x,
          h = (0, s.eQ)(n),
          C = (0, s.vf)(n, m, f);
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
                  percentComplete: g,
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
      var r = n(476183),
        s = n(481060),
        a = n(497505),
        i = n(644646),
        l = n(46140),
        c = n(388032),
        d = n(734723);
      t.Z = (e) => {
        let {
          quest: t,
          expansionSpring: n,
          isFullyExpanded: u,
          partnerBranding: p,
          useReducedMotion: m,
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", { className: d.rewardTileSpacer }),
            (0, o.jsx)(r.animated.div, {
              className: d.rewardTileContainer,
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
              children: (0, o.jsx)(i.Z, {
                learnMoreStyle: "text",
                quest: t,
                questContent: a.jn.QUEST_BAR_V2,
                location: l.dr.QUESTS_BAR,
                autoplay: u && !m,
              }),
            }),
            (0, o.jsxs)(r.animated.div, {
              className: d.rewardHighlightLogoCTA,
              style: {
                transform: (0, r.to)(
                  [
                    n.to({ range: [0, 1], output: [0, -48] }),
                    n.to({ range: [0, 1], output: [0, 8] }),
                  ],
                  (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                ),
              },
              children: [
                (0, o.jsx)("div", {
                  className: d.partnerBranding,
                  children: p,
                }),
                (0, o.jsx)(r.animated.div, {
                  className: d.rewardHighlightCTA,
                  style: { opacity: n.to({ range: [0, 1], output: [0.7, 0] }) },
                  children: (0, o.jsx)(s.Text, {
                    color: "always-white",
                    variant: "text-xs/medium",
                    children: c.intl.string(c.t["2BD0CQ"]),
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
        s = n(476183),
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
        a = n(160952);
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
          return o;
        },
      });
      let o = (e) => "1193992107035983872" === e.id;
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
        s = n(578080),
        a = n(633796);
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
        m = n(554804);
      let x = [0, 0.5, 1],
        f = {
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
              let t = l().get(e, o);
              if (null == t) continue;
              let r = t.map((e, t) => {
                var o;
                return null !== (o = n[t]) && void 0 !== o ? o : e;
              });
              l().set(e, o, r);
            }
          })(o, f, t),
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
          f = (0, c.e7)([u.Z], () => u.Z.isFocused()),
          h = r.useRef(null),
          [C, v] = r.useState(!1),
          j = r.useMemo(() => {
            if (null == i) return null;
            let e = (0, p.oo)(i.config.colors.primary),
              t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
              n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return g(i.id, n);
          }, [i]),
          _ =
            (null === (t = i.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          b = !l && f;
        r.useEffect(() => {
          var e, t, n, o;
          f
            ? b &&
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
        }, [b, f]);
        let E = r.useCallback(() => {
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
                  onComplete: E,
                  importData: () => j,
                  shouldAnimate: !C && b,
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
        a = n(476183),
        i = n(481060),
        l = n(113434),
        c = n(497505),
        d = n(685613),
        u = n(340100),
        p = n(644646),
        m = n(788284),
        x = n(46140),
        f = n(388032),
        g = n(208041);
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
          { percentComplete: b } = (0, l.Rf)(v),
          E = (0, l.Jf)(v),
          N = null != E ? E.completedRatio > 0 : b > 0;
        return (0, o.jsxs)(a.animated.div, {
          "aria-hidden": h && C,
          className: s()(n, g.contentCollapsed, {
            [g.contentCollapsedExpanded]: h,
            [g.contentCollapsedAccepted]: _,
          }),
          style: { opacity: r.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, o.jsx)(m.Z, { quest: v, useReducedMotion: j }),
            (0, o.jsx)("div", {
              className: g.contentCollapsedWrapper,
              children: _
                ? (0, o.jsxs)("div", {
                    className: g.questProgressWrapper,
                    children: [
                      (0, o.jsx)(p.Z, {
                        className: g.questProgressRewardTile,
                        quest: v,
                        questContent: c.jn.QUEST_BAR,
                        autoplay: !1,
                        location: x.dr.QUESTS_BAR,
                      }),
                      N
                        ? (0, o.jsx)(u.Z, {
                            className: g.questProgressBar,
                            quest: v,
                          })
                        : (0, o.jsx)(i.Text, {
                            className: g.questProgressHint,
                            color: "always-white",
                            variant: "text-sm/semibold",
                            children: f.intl.string(f.t["7e5k7O"]),
                          }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: g.brandingWrapper,
                    children: [
                      (0, o.jsx)(d.ZP, {
                        className: g.partnerBranding,
                        quest: v,
                      }),
                      (0, o.jsx)(i.Heading, {
                        color: "always-white",
                        variant: "heading-sm/medium",
                        className: g.questName,
                        children: f.intl.format(f.t.EAYZAg, {
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
    578080: function (e, t, n) {
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(476183),
        l = n(442837),
        c = n(950104),
        d = n(780384),
        u = n(481060),
        p = n(70097),
        m = n(703656),
        x = n(358085),
        f = n(617136),
        g = n(915750),
        h = n(272008),
        C = n(113434),
        v = n(569984),
        j = n(497505),
        _ = n(918701),
        b = n(865364),
        E = n(585500),
        N = n(475595),
        B = n(566078),
        T = n(340100),
        S = n(611855),
        y = n(644646),
        A = n(78826),
        R = n(64141),
        w = n(667105),
        I = n(46140),
        k = n(981631),
        q = n(701488),
        P = n(388032),
        M = n(502926);
      let O = r.forwardRef(function (e, t) {
        var n, s;
        let {
            children: b,
            className: O,
            collapsedHeight: L,
            expansionSpring: Z,
            isExpanded: Q,
            isExpansionAnimationComplete: D,
            onCtxMenuOpen: H,
            onCtxMenuClose: U,
            onCtxMenuSelect: V,
            quest: z,
            useReducedMotion: F,
          } = e,
          G = (0, l.e7)([v.Z], () => v.Z.isEnrolling(z.id), [z]),
          K = (0, g.aM)(),
          Y = (0, C.B6)(z.config.expiresAt),
          X = B.r.build(z.config),
          J = (0, C.B6)(X.rewardsExpireAt),
          $ = r.useMemo(() => (0, N.fh)(z, N.eC.HERO), [z]),
          ee = (0, w.tP)(X.application.id),
          et = X.features.has(I.S7.START_QUEST_CTA)
            ? f.jZ.START_QUEST
            : f.jZ.ACCEPT_QUEST,
          en = X.features.has(I.S7.START_QUEST_CTA)
            ? P.intl.string(P.t.E80Bdn)
            : P.intl.string(P.t.l7E81t),
          eo = r.useCallback(() => {
            (0, h.AH)(z.id, {
              questContent: j.jn.QUEST_BAR,
              questContentCTA: et,
            }),
              X.features.has(I.S7.START_QUEST_CTA) &&
                (0, m.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), void 0);
          }, [z, et, X.features]),
          er = (0, w.hf)({ quest: z, location: j.jn.QUEST_BAR }),
          es = r.useCallback(() => {
            (0, _.FE)(z, {
              content: j.jn.QUEST_BAR,
              ctaContent: f.jZ.OPEN_GAME_LINK,
              impressionId: K,
            });
          }, [K, z]),
          ea = X.features.has(I.S7.POST_ENROLLMENT_CTA),
          ei = (0, C.Rf)(z),
          el = (0, C.Jf)(z),
          ec = null != el ? el.progress > 0 : ei.progressSeconds > 0,
          ed =
            (null === (n = z.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          eu =
            (null === (s = z.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          ep = r.useMemo(() => (0, _.Xv)(z.config), [z.config]),
          em = Q && D,
          ex = (0, E.D)({
            quest: z,
            taskDetails: ei,
            location: I.dr.QUESTS_BAR,
            questContent: j.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != el ? el : void 0,
          }),
          ef = (0, x.isWeb)(),
          eg = r.useMemo(() => {
            let e = (0, d.Qg)(z.config.colors.primary, {
              base: "#ffffff",
              contrastRatio: d.S3.Text,
            });
            return {
              "--custom-cta-color": e,
              "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
              "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
          }, [z.config.colors.primary]);
        return (0, o.jsxs)(i.animated.div, {
          className: a()(O, M.contentExpanded, { [M.contentInteractable]: em }),
          style: {
            backgroundColor: z.config.colors.secondary,
            transform: eu
              ? void 0
              : (0, i.to)(
                  [
                    Z.to({ range: [0, 1], output: [0, -100] }),
                    Z.to({ range: [0, 1], output: [0, L] }),
                  ],
                  (e, t) =>
                    "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                ),
          },
          children: [
            b,
            (0, o.jsx)("div", {
              "aria-hidden": !em,
              children: ed
                ? (0, o.jsxs)("div", {
                    className: M.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, o.jsxs)("div", {
                        className: M.utils,
                        children: [
                          (0, o.jsxs)("div", {
                            className: M.questAcceptedContentHeading,
                            children: [
                              (0, o.jsx)(y.Z, {
                                className: M.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: z,
                                questContent: j.jn.QUEST_BAR,
                                location: I.dr.QUESTS_BAR,
                              }),
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, _.AV)({
                                      quest: z,
                                      taskDetails: ei,
                                      thirdPartyTaskDetails:
                                        null != el ? el : void 0,
                                    }),
                                  }),
                                  (0, o.jsx)(u.Text, {
                                    className:
                                      M.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: eu
                                      ? P.intl.formatToPlainString(P.t.APddvL, {
                                          expirationDate: J,
                                        })
                                      : P.intl.formatToPlainString(
                                          P.t["pX+fmp"],
                                          { expirationDate: Y },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)(R.r, {
                            onOpen: H,
                            onClose: U,
                            onSelect: V,
                            questContent: j.jn.QUEST_BAR,
                            quest: z,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, o.jsx)(u.Clickable, {
                                ...e,
                                className: M.submenuWrapper,
                                "aria-label": P.intl.string(P.t.DEoVWV),
                                children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: M.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      eu
                        ? (0, o.jsx)(u.Button, {
                            className: a()(M.cta, M.ctaClaimReward),
                            style: ep ? eg : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: er,
                            size: u.Button.Sizes.NONE,
                            children: P.intl.string(P.t.cfY4PD),
                          })
                        : (0, o.jsx)(u.Text, {
                            className: M.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ex,
                          }),
                      (0, o.jsx)(T.Z, { quest: z }),
                      !ef &&
                        !ec &&
                        !ee &&
                        ea &&
                        (0, o.jsx)(W, { onClick: em ? es : void 0 }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsxs)("div", {
                        className: M.questPromoContent,
                        ref: t,
                        children: [
                          (0, o.jsxs)("div", {
                            className: M.utils,
                            children: [
                              (0, o.jsx)(S.Z, { color: "always-white" }),
                              (0, o.jsx)(R.r, {
                                onOpen: H,
                                onClose: U,
                                onSelect: V,
                                questContent: j.jn.QUEST_BAR,
                                quest: z,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                children: (e) =>
                                  (0, o.jsx)(u.Clickable, {
                                    ...e,
                                    className: M.submenuWrapper,
                                    "aria-label": P.intl.string(P.t.DEoVWV),
                                    children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: M.submenuIcon,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: M.details,
                            children: [
                              (0, o.jsx)(y.Z, {
                                className: M.rewardTile,
                                learnMoreStyle: "text",
                                quest: z,
                                questContent: j.jn.QUEST_BAR,
                                location: I.dr.QUESTS_BAR,
                              }),
                              (0, o.jsx)(u.Heading, {
                                className: M.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: P.intl.format(P.t.EQa7oq, {
                                  questName: z.config.messages.questName,
                                }),
                              }),
                              (0, o.jsx)(u.Text, {
                                className: M.description,
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: ex,
                              }),
                            ],
                          }),
                          (0, o.jsx)(u.Button, {
                            className: M.cta,
                            style: "1232852290197655573" !== z.id ? eg : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: em ? eo : void 0,
                            size: u.Button.Sizes.NONE,
                            submitting: G,
                            children: en,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: M.heroAssetWrapper,
                        style: { color: z.config.colors.secondary },
                        children: $.isAnimated
                          ? (0, o.jsx)(A.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => {
                                var t;
                                return (0, o.jsx)(p.Z, {
                                  ref: e,
                                  autoPlay: !F,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                  className: M.heroAsset,
                                  controls: !1,
                                  children: (0, o.jsx)("source", {
                                    src: $.url,
                                    type:
                                      null !== (t = $.mimetype) && void 0 !== t
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
                                  className: M.heroAsset,
                                  src: $.url,
                                }),
                            }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      });
      function W(e) {
        let { style: t, onClick: n } = e;
        return (0, b.O)({ location: I.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, o.jsx)(u.Button, {
              className: M.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: P.intl.string(P.t.lwQdjI),
            })
          : null;
      }
      t.Z = O;
    },
    623249: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return N;
          },
          openConsoleConnectionErrorsModal: function () {
            return T;
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
        x = n(915750),
        f = n(113434),
        g = n(497505),
        h = n(918701),
        C = n(475595),
        v = n(667105),
        j = n(981631),
        _ = n(388032),
        b = n(506430),
        E = n(708901);
      function N(e) {
        var t;
        let { questId: n, errorHints: s, transitionState: N, onClose: T } = e,
          S = (0, f.B4)(n);
        null == S && T();
        let [y, A] = (0, r.useState)(s),
          R = (0, f.KX)(),
          w = (0, m.O5)(),
          I = null === (t = (0, x.WD)()) || void 0 === t ? void 0 : t.getId(),
          k = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
          q = (0, v.g2)({ useReducedMotion: k, className: b.colorTransition }),
          P = y.filter((e) =>
            ["xbox", "playstation"].includes(e.connected_account_type),
          ),
          M = (0, h.Bz)(S),
          O = (0, i.e7)([p.Z], () => p.Z.getState().theme),
          W = (0, l.wj)(O) ? j.BRd.DARK : j.BRd.LIGHT,
          { startConsoleQuest: L, startingConsoleQuest: Z } = (0, f.GI)({
            questId: S.id,
            beforeRequest: () => {
              q.startAnimation(),
                w({
                  questId: S.id,
                  questContent: g.jn.CONNECTIONS_MODAL,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: (e) => {
              q.stopAnimation(), A(e);
            },
          });
        return (0, o.jsxs)(c.ModalRoot, {
          transitionState: N,
          size: c.ModalSize.DYNAMIC,
          className: b.modalRoot,
          children: [
            (0, o.jsxs)(c.ModalHeader, {
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              className: b.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: b.modalTop,
                  children: [
                    (0, o.jsx)("div", {
                      className: b.iconFrame,
                      children: (0, o.jsx)("img", {
                        className: b.icon,
                        alt: "",
                        src: E,
                      }),
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                      className: b.closeBtn,
                      onClick: T,
                    }),
                  ],
                }),
                (0, o.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  children: _.intl.string(_.t.W5lmKi),
                }),
                (0, o.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: b.upperBodyText,
                  children: R.message,
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: b.modalContent,
              children: [
                (0, o.jsxs)("div", {
                  className: b.contentHeader,
                  children: [
                    (0, o.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "header-secondary",
                      children: _.intl.string(_.t["+/hZMz"]),
                    }),
                    (0, o.jsxs)(c.Clickable, {
                      className: a()(b.refreshWrapper, { [b.disabled]: Z }),
                      onClick: L,
                      children: [
                        q.render(),
                        (0, o.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color: "currentColor",
                          className: b.colorTransition,
                          children: _.intl.string(_.t.wzzjk5),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: b.accountsWrapper,
                  children: [
                    (0, o.jsx)(B, {
                      icon: (0, o.jsx)(c.ScreenIcon, { size: "sm" }),
                      text: _.intl.string(_.t.br3uIi),
                    }),
                    (0, o.jsx)(B, {
                      icon: (0, o.jsx)(c.GameControllerIcon, { size: "sm" }),
                      text: _.intl.string(_.t.XF4wuL),
                      errors: M ? void 0 : P.map((e) => e.message),
                      gameTile: M
                        ? (0, o.jsx)(c.Tooltip, {
                            "aria-label": S.config.messages.gameTitle,
                            text: () =>
                              (0, o.jsxs)("div", {
                                className: b.tooltip,
                                children: [
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: S.config.messages.gameTitle,
                                  }),
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: _.intl.string(_.t.STpNEB),
                                  }),
                                ],
                              }),
                            children: (e) =>
                              (0, o.jsx)("img", {
                                ...e,
                                className: b.gameTile,
                                alt: S.config.messages.gameTitle,
                                src: (0, C.fh)(S, C.eC.GAME_TILE, W).url,
                              }),
                          })
                        : null,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalFooter, {
              className: b.footer,
              children: [
                (0, o.jsx)(c.Button, {
                  size: c.ButtonSizes.MIN,
                  onClick: T,
                  className: b.footerCloseButton,
                  children: _.intl.string(_.t.cpT0Cg),
                }),
                (0, o.jsx)(c.Button, {
                  look: c.ButtonLooks.LINK,
                  color: c.ButtonColors.PRIMARY,
                  onClick: () => {
                    T(),
                      (0, h.V$)(
                        { quest: S },
                        {
                          content: g.jn.CONNECTIONS_MODAL,
                          ctaContent: m.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
                          impressionId: I,
                        },
                      );
                  },
                  children: _.intl.string(_.t["qiS+xs"]),
                }),
              ],
            }),
          ],
        });
      }
      function B(e) {
        let { icon: t, text: n, errors: r = [], gameTile: s } = e,
          i = r.length > 0,
          l = i ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
        return (0, o.jsxs)("div", {
          className: b.connectionRow,
          children: [
            (0, o.jsxs)("div", {
              className: a()(b.connectionRowHeader, {
                [b.connectionRowHeaderError]: i,
              }),
              children: [
                (0, o.jsxs)("div", {
                  className: b.connectionRowHeaderContent,
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
                  className: b.connectionRowHeaderContent,
                  children: [
                    s,
                    (0, o.jsx)(l, {
                      color: "currentColor",
                      size: "sm",
                      className: a()({ [b.success]: !i, [b.error]: i }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: b.errorsContainer,
              children: r.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: b.errorRow,
                    children: [
                      (0, o.jsx)(c.WarningIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: b.error,
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
      function T(e) {
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
        x = n(263740);
      function f(e) {
        let {
            quest: t,
            className: n,
            questContent: s,
            contentPosition: c,
            rowIndex: d,
            impressionRef: f,
          } = e,
          [g, h] = r.useState(!1),
          [C, v] = r.useState([]),
          j = (0, l.qb)(t),
          _ = (0, i._F)(),
          b = r.useCallback(() => {
            h(!0),
              _({
                questId: t.id,
                event: m.rMx.QUEST_HOVER,
                properties: (0, i.mH)(s),
              });
          }, [_, t.id, s]),
          E = r.useCallback(() => {
            h(!1),
              _({
                questId: t.id,
                event: m.rMx.QUEST_HOVER_OFF,
                properties: (0, i.mH)(s),
              });
          }, [_, t.id, s]);
        return (0, o.jsxs)("div", {
          id: "quest-tile-".concat(t.id),
          ref: (e) => {
            f.current = e;
          },
          className: a()(x.container, n),
          onMouseEnter: b,
          onMouseLeave: E,
          children: [
            (0, o.jsx)(u.Z, {
              quest: t,
              isHovering: g,
              errorHints: C,
              warningHints: j,
            }),
            (0, o.jsx)(p.Z, {
              quest: t,
              questContent: s,
              isHovering: g,
              contentPosition: c,
              rowIndex: d,
              onReceiveErrorHints: v,
            }),
          ],
        });
      }
      function g(e) {
        return (0, o.jsx)(d.A, {
          questOrQuests: e.quest,
          questContent: e.questContent,
          questContentPosition: e.contentPosition,
          questContentRowIndex: e.rowIndex,
          trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
          children: (t) => (0, o.jsx)(f, { ...e, impressionRef: t }),
        });
      }
    },
    439826: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
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
        c = n(476183),
        d = n(186325),
        u = n(780384),
        p = n(481060),
        m = n(393238),
        x = n(410030),
        f = n(44315),
        g = n(70097),
        h = n(617136),
        C = n(272008),
        v = n(113434),
        j = n(497505),
        _ = n(918701),
        b = n(475595),
        E = n(720293),
        N = n(623249),
        B = n(685613),
        T = n(78826),
        S = n(64141),
        y = n(341907),
        A = n(642145),
        R = n(981631),
        w = n(388032),
        I = n(60821);
      function k(e) {
        var t;
        let { quest: n, errorHints: o, warningHints: r, isDarkTheme: i } = e,
          { ref: l, height: d = 0 } = (0, m.Z)([o]),
          u =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          x = (0, v.z)(n),
          { type: g, hints: h } = a.useMemo(
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
          C = 2 !== g,
          j = (0, p.useSpring)({
            opacity: C ? 1 : 0,
            height: C ? d : 0,
            config: A.Y,
          }),
          _ = 0 === g ? p.CircleWarningIcon : p.CircleInformationIcon,
          b = (0, f.Lq)(R.Ilk.RED_345),
          E =
            0 === g
              ? b
              : i
                ? p.tokens.colors.TEXT_NORMAL
                : p.tokens.colors.WHITE;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(c.animated.div, {
            style: j,
            children: (0, s.jsxs)("div", {
              ref: l,
              className: I.hints,
              children: [
                (0, s.jsxs)("div", {
                  className: I.hintsContainer,
                  children: [
                    (0, s.jsx)(_, { size: "xs", color: E }),
                    (0, s.jsx)(p.Text, {
                      variant: "text-xs/medium",
                      color: i ? "text-muted" : "always-white",
                      children: h.at(0),
                    }),
                  ],
                }),
                0 === g &&
                  (0, s.jsx)(p.Button, {
                    onClick: () =>
                      (0, N.openConsoleConnectionErrorsModal)({
                        questId: n.id,
                        errorHints: o,
                      }),
                    size: p.ButtonSizes.MIN,
                    look: p.ButtonLooks.LINK,
                    color: p.ButtonColors.CUSTOM,
                    style: { color: (0, f.Lq)(R.Ilk.BLUE_345) },
                    children: "See Details",
                  }),
              ],
            }),
          }),
        });
      }
      function q(e) {
        var t;
        let { asset: n, reducedMotionEnabled: o, visible: r } = e,
          i = a.useRef(null);
        return (
          a.useEffect(() => {
            null != i.current && r && i.current.play();
          }, [r]),
          (0, s.jsx)(g.Z, {
            ref: i,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: l()(I.videoOverlay, { [I.videoOverlayVisible]: r }),
            controls: !1,
            children: (0, s.jsx)("source", {
              src: n.url,
              type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0,
            }),
          })
        );
      }
      function P(e) {
        var t, n, o, r, i;
        let {
            quest: c,
            isHovering: m,
            errorHints: f,
            warningHints: N,
            onCtxMenuClose: A,
            onCtxMenuOpen: P,
            onCtxMenuSelect: M,
          } = e,
          O = (0, _.q8)(c),
          W = a.useMemo(() => (0, b.fh)(c, b.eC.HERO), [c]),
          L = (0, x.ZP)(),
          Z = ((0, u.wj)(L) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
          Q = a.useContext(d.S).reducedMotion.enabled,
          D = (0, v.tP)(c),
          H =
            (null === (t = c.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          U = a.useRef(m),
          V = a.useRef(null),
          z = (0, v.B6)(c.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          F =
            (null === (n = c.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          G =
            (null === (o = c.userStatus) || void 0 === o
              ? void 0
              : o.completedAt) != null,
          K = a.useCallback(() => {
            if (!!O)
              !(0, _.zi)(c) &&
                !F &&
                (0, C.AH)(c.id, {
                  questContent: j.jn.QUEST_HOME_DESKTOP,
                  questContentCTA: h.jZ.ACCEPT_QUEST,
                }),
                (0, y.openVideoQuestModal)(c);
          }, [O, c, F]);
        a.useEffect(() => {
          if (W.isAnimated && null != V.current)
            return (
              U.current !== m &&
                (m && !Q
                  ? V.current.play()
                  : (V.current.pause(), (V.current.currentTime = 0))),
              (U.current = m),
              () => {
                var e;
                null === (e = V.current) || void 0 === e || e.pause();
              }
            );
        }, [m, W, Q]);
        let Y = a.useMemo(() => (0, E.z)(E.i.QUEST_HOME_VIDEO, c), [c]);
        return (0, s.jsxs)("div", {
          className: I.container,
          children: [
            (0, s.jsxs)("div", {
              className: I.heroAssetWrapper,
              children: [
                W.isAnimated
                  ? (0, s.jsx)(T.Fl, {
                      id: "QuestTileBanner_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (V.current = e.current),
                          (0, s.jsx)(g.Z, {
                            ref: e,
                            autoPlay: !Q && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: I.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)("source", {
                              src: W.url,
                              type:
                                null !== (t = W.mimetype) && void 0 !== t
                                  ? t
                                  : void 0,
                            }),
                          })
                        );
                      },
                    })
                  : (0, s.jsx)(T.Fl, {
                      id: "QuestTileBanner",
                      children: (e) =>
                        (0, s.jsx)("img", {
                          ref: e,
                          alt: "".concat(c.config.messages.questName),
                          className: I.heroAsset,
                          src: W.url,
                        }),
                    }),
                O &&
                  !Q &&
                  null != Y &&
                  (0, s.jsx)(q, {
                    asset: Y,
                    reducedMotionEnabled: Q,
                    visible: m,
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className: l()(I.overlay, {
                [I.darkThemeGradient]: Z,
                [I.lightThemeGradient]: !Z,
              }),
            }),
            (0, s.jsxs)("div", {
              className: I.positionContentOverBackground,
              children: [
                (0, s.jsxs)("div", {
                  className: I.contents,
                  children: [
                    (0, s.jsxs)("div", {
                      className: I.topRow,
                      children: [
                        c.preview &&
                          (0, s.jsx)("div", {
                            className: I.pill,
                            children: (0, s.jsx)(p.Text, {
                              variant: "eyebrow",
                              color: "always-white",
                              className: I.eyebrowText,
                              children: w.intl.string(w.t.SKNnqq),
                            }),
                          }),
                        O &&
                          (0, s.jsx)(p.Tooltip, {
                            text: G
                              ? w.intl.string(w.t.YsCuyM)
                              : F
                                ? w.intl.string(w.t["74Kqra"])
                                : (0, _.zi)(c)
                                  ? w.intl.string(w.t["I6JG4+"])
                                  : w.intl.string(w.t.umdNio),
                            children: (e) =>
                              (0, s.jsx)(p.Clickable, {
                                ...e,
                                className: I.utilButtonWrapper,
                                "aria-label": w.intl.string(w.t.RscU7O),
                                onClick: K,
                                children: (0, s.jsx)(p.PlayIcon, {
                                  className: I.utilButtonIcon,
                                }),
                              }),
                          }),
                        (0, s.jsx)(S.r, {
                          onOpen: P,
                          onClose: A,
                          onSelect: M,
                          questContent: j.jn.QUEST_HOME_DESKTOP,
                          quest: c,
                          hideLearnMore: !0,
                          shouldShowDisclosure: !0,
                          showShareLink: !0,
                          children: (e) =>
                            (0, s.jsx)(p.Clickable, {
                              ...e,
                              className: I.utilButtonWrapper,
                              "aria-label": w.intl.string(w.t.DEoVWV),
                              children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: l()(I.utilButtonIcon),
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(B.ZP, {
                      className: I.partnerBranding,
                      logotypeClassName: I.partnerLogotypes,
                      quest: c,
                      separatorSpacing: B.US.MEDIUM,
                      withGameTile: !1,
                    }),
                    (0, s.jsxs)("div", {
                      className: I.bottomRow,
                      children: [
                        (0, s.jsx)(p.Text, {
                          variant: "text-sm/medium",
                          color: Z ? "text-muted" : "always-white",
                          children: w.intl.format(w.t.buEvBw, {
                            brandName:
                              null !==
                                (i =
                                  null === (r = c.config.cosponsorMetadata) ||
                                  void 0 === r
                                    ? void 0
                                    : r.name) && void 0 !== i
                                ? i
                                : c.config.messages.gamePublisher,
                          }),
                        }),
                        D || H
                          ? null
                          : (0, s.jsx)(p.Text, {
                              variant: "text-sm/medium",
                              color: Z ? "text-muted" : "always-white",
                              children: w.intl.format(w.t["7D8r4O"], {
                                expiryDate: z,
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(k, {
                  quest: c,
                  errorHints: f,
                  warningHints: N,
                  isDarkTheme: Z,
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
          return E;
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
        f = n(667105),
        g = n(341907),
        h = n(284851),
        C = n(46140),
        v = n(388032),
        j = n(382128);
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
      function b(e) {
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
      function E(e) {
        var t, n, s, E;
        let {
            quest: N,
            location: B,
            onReceiveErrorHints: T,
            contentPosition: S,
            rowIndex: y,
          } = e,
          A = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
          R = (0, f.g2)({ useReducedMotion: A }),
          w = (0, d.O5)(),
          I = (0, u._s)({ quest: N }),
          k = (0, u.z)(N),
          q = (0, u.B6)(N.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          { isClaiming: P, isEnrolling: M } = (0, i.cj)([p.Z], () => ({
            isClaiming:
              p.Z.isClaimingReward(N.id) || p.Z.isFetchingRewardCode(N.id),
            isEnrolling: p.Z.isEnrolling(N.id),
          })),
          O =
            (null === (t = N.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          W =
            (null === (n = N.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          L =
            W &&
            (null === (s = N.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) == null,
          Z = (0, x.iQ)(N),
          Q = !(0, x.zi)(N),
          D = (0, u._Q)(N),
          H = (0, x.Xv)(N.config),
          U = (0, x.q8)(N),
          V = (0, u.GU)(N),
          z = (0, u.Rf)(N),
          [F, G, K] = (0, u.me)(N, z),
          Y = Q && D === u.OH.ACCEPTED,
          X = Y && F === m.LI.SELECT,
          J = Y && !X && G.length > 1,
          $ = r.useCallback(
            (e) => {
              K(e), e === C.cd.DESKTOP && T([]);
            },
            [K, T],
          ),
          {
            text: ee,
            onClick: et,
            tooltipText: en,
          } = (0, f.Ks)({
            progressState: D,
            quest: N,
            location: B,
            isCollectibleQuest: H,
            questContentPosition: S,
            questContentRowIndex: y,
            inGiftInventory: !0,
            isVideoQuest: U,
          }),
          { startingConsoleQuest: eo, startConsoleQuest: er } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
              R.startAnimation(),
                w({
                  questId: N.id,
                  questContent: B,
                  questContentCTA: d.jZ.DEFIBRILLATOR,
                  questContentPosition: S,
                  questContentRowIndex: y,
                });
            },
            afterRequest: (e) => {
              R.stopAnimation(), T(e);
            },
          }),
          es =
            (null === (E = N.userStatus) || void 0 === E
              ? void 0
              : E.claimedAt) != null,
          ea = null;
        return (Z && L
          ? (ea = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: P,
              onClick: null != et ? et : void 0,
              className: j.button,
              children: ee,
            }))
          : W
            ? (ea = U
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        className: j.button,
                        style: { flex: 1 },
                        onClick: () => {
                          (0, g.openVideoQuestModal)(N);
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
                        onClick: null != et ? et : void 0,
                        children: ee,
                      }),
                    ],
                  })
                : (0, o.jsx)(l.Button, {
                    color: l.ButtonColors.BRAND,
                    className: j.button,
                    onClick: null != et ? et : void 0,
                    children: ee,
                  }))
            : Q
              ? V.length > 0
                ? (ea = (0, o.jsx)(
                    l.TooltipContainer,
                    {
                      text: en,
                      className: j.buttonTooltip,
                      children: (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        disabled: !0,
                        className: j.button,
                        children: ee,
                      }),
                    },
                    en,
                  ))
                : Q && L
                  ? (ea = (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      submitting: P,
                      onClick: null != et ? et : void 0,
                      className: j.button,
                      children: ee,
                    }))
                  : Q && O && !es
                    ? (ea = X
                        ? (0, o.jsx)(l.Select, {
                            className: j.platformSelectorPrimary,
                            isSelected: () => !1,
                            options: _,
                            placeholder: v.intl.string(v.t.drVw4e),
                            renderOptionLabel: b,
                            select: $,
                            serialize: (e) => {
                              switch (e) {
                                case C.cd.DESKTOP:
                                  return v.intl.string(v.t.QXc019);
                                case C.cd.CONSOLE:
                                  return v.intl.string(v.t["8lAfuL"]);
                              }
                            },
                          })
                        : (0, x.$J)(N) && !k && F !== m.LI.DESKTOP
                          ? I
                            ? (0, o.jsx)(l.Button, {
                                color: l.ButtonColors.PRIMARY,
                                className: j.button,
                                onClick: null != et ? et : void 0,
                                children: ee,
                              })
                            : (0, o.jsx)(l.Button, {
                                color: l.ButtonColors.PRIMARY,
                                onClick: er,
                                disabled: eo,
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
                                onClick: null != et ? et : void 0,
                                className: j.button,
                                children: ee,
                              })
                            : (0, o.jsx)(l.Button, {
                                color: l.ButtonColors.PRIMARY,
                                disabled: !0,
                                className: j.button,
                                children: v.intl.string(v.t["9KoPyM"]),
                              }))
                    : Q &&
                      !O &&
                      (ea = (0, o.jsx)(l.Button, {
                        submitting: M,
                        color: l.ButtonColors.BRAND,
                        onClick: null != et ? et : void 0,
                        className: j.button,
                        children: ee,
                      }))
              : (ea = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t["14o6QU"], { expiryDate: q }),
                })),
        null == ea)
          ? null
          : (0, o.jsxs)("div", {
              className: j.container,
              children: [
                ea,
                J &&
                  (0, o.jsx)(h.U, {
                    onSelect: $,
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
                            })(F),
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
          return b;
        },
      });
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(476183),
        l = n(442837),
        c = n(481060),
        d = n(393238),
        u = n(607070),
        p = n(113434),
        m = n(566078),
        x = n(472144),
        f = n(644646),
        g = n(69439),
        h = n(46140),
        C = n(642145),
        v = n(388032),
        j = n(902904);
      let _ = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
      function b(e) {
        var t, n, s;
        let {
            quest: b,
            questContent: E,
            isHovering: N,
            contentPosition: B,
            rowIndex: T,
            onReceiveErrorHints: S,
          } = e,
          y = m.r.build(b.config),
          A = y.defaultReward.messages.name,
          R = y.defaultReward.messages.nameWithArticle,
          w =
            (null === (t = b.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { ref: I, scrollHeight: k } = (0, d.Z)(),
          q = 104 !== k,
          { expansionSpring: P } = (0, c.useSpring)({
            expansionSpring: N ? 1 : 0,
            config: { ...C.Y, clamp: !0 },
          }),
          M =
            (null === (n = b.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          O =
            (null === (s = b.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) != null,
          { completedRatio: W, completedRatioDisplay: L } = (0, p.I)(b),
          Z = (0, p.Bd)(b),
          Q = r.useCallback(
            (e) =>
              (0, o.jsx)(
                c.Text,
                {
                  variant: "text-md/semibold",
                  color: "text-normal",
                  tag: "span",
                  className: j.header,
                  children: e,
                },
                "".concat(b.id, "_reward"),
              ),
            [b.id],
          ),
          D = r.useMemo(
            () =>
              O
                ? Q(A)
                : v.intl.format(v.t["0IUT4e"], {
                    rewardWithArticleHook: () => Q(R),
                  }),
            [A, R, O, Q],
          ),
          H = r.useMemo(() => {
            if (null != Z)
              return (0, o.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: a()(j.description),
                children: Z,
              });
          }, [Z]),
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
                    !O &&
                      M &&
                      (0, o.jsx)("div", { className: j.completionAnimation }),
                    w && !O
                      ? (0, o.jsxs)("div", {
                          className: j.progressWrapper,
                          children: [
                            M &&
                              (0, o.jsx)(c.LottieAnimation, {
                                importData: _,
                                className: j.confetti,
                                loop: !1,
                                autoplay: !1,
                                shouldAnimate: !U,
                              }),
                            (0, o.jsx)(x.Z, {
                              quest: b,
                              size: 76,
                              percentComplete: W,
                              percentCompleteText: N ? L : void 0,
                              children: (0, o.jsx)("div", {
                                className: j.circularRewardTileWrapper,
                                children: (0, o.jsx)(f.Z, {
                                  quest: b,
                                  questContent: E,
                                  className: j.circularQuestRewardTileAsset,
                                  location: h.dr.QUEST_HOME_DESKTOP,
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, o.jsx)(f.Z, {
                          quest: b,
                          autoplay: N,
                          questContent: E,
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
                        questName: b.config.messages.questName,
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
            (0, o.jsx)(g.Z, {
              quest: b,
              location: E,
              contentPosition: B,
              rowIndex: T,
              onReceiveErrorHints: S,
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
    387029: function (e, t, n) {
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
    157410: function (e, t, n) {
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
    277636: function (e, t, n) {
      e.exports = { content: "content_fb2cb3", overlay: "overlay_fb2cb3" };
    },
    626094: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_efa999",
        opaqueExpandedBackground: "opaqueExpandedBackground_efa999",
        rewardHighlightWrapper: "rewardHighlightWrapper_efa999",
        interactable: "interactable_efa999",
        submenuWrapper: "submenuWrapper_efa999",
        submenuIcon: "submenuIcon_efa999",
        white: "white_efa999",
        promotedBadgeWrapper: "promotedBadgeWrapper_efa999",
        logo: "logo_efa999",
        clickable: "clickable_efa999",
        promotedBadge: "promotedBadge_efa999",
        promotedBadgeIcon: "promotedBadgeIcon_efa999",
        rewardHighlightLogotype: "rewardHighlightLogotype_efa999",
      };
    },
    977174: function (e, t, n) {
      e.exports = {
        ctaButtons: "ctaButtons_e60321",
        cta: "cta_e60321",
        shine: "shine_e60321",
        backButton: "backButton_e60321",
        backButtonInner: "backButtonInner_e60321",
        backIcon: "backIcon_e60321",
      };
    },
    793436: function (e, t, n) {
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
    211720: function (e, t, n) {
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
    313750: function (e, t, n) {
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
    952529: function (e, t, n) {
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
    748628: function (e, t, n) {
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
        videoQuestPreviewCont: "videoQuestPreviewCont_e23249",
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
      };
    },
    597924: function (e, t, n) {
      e.exports = {
        card: "card_f8746f",
        header: "header_f8746f",
        icon: "icon_f8746f",
        warningBody: "warningBody_f8746f",
      };
    },
    734723: function (e, t, n) {
      e.exports = {
        rewardTileContainer: "rewardTileContainer_eb16c5",
        rewardTileSpacer: "rewardTileSpacer_eb16c5",
        rewardHighlightLogoCTA: "rewardHighlightLogoCTA_eb16c5",
        partnerBranding: "partnerBranding_eb16c5",
        rewardHighlightCTA: "rewardHighlightCTA_eb16c5",
      };
    },
    160952: function (e, t, n) {
      e.exports = {
        buttons: "buttons_c5505e",
        button: "button_c5505e",
        buttonInner: "buttonInner_c5505e",
      };
    },
    633796: function (e, t, n) {
      e.exports = { content: "content_dac7ec" };
    },
    554804: function (e, t, n) {
      e.exports = {
        lottieAnimation: "lottieAnimation_ff9919",
        backgroundFallback: "backgroundFallback_ff9919",
        lottieAnimationBackgroundWrapper:
          "lottieAnimationBackgroundWrapper_ff9919",
        lottieAnimationBackground: "lottieAnimationBackground_ff9919",
      };
    },
    208041: function (e, t, n) {
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
    502926: function (e, t, n) {
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
    506430: function (e, t, n) {
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
    263740: function (e, t, n) {
      e.exports = { container: "container_a97111" };
    },
    60821: function (e, t, n) {
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
        partnerLogotypes: "partnerLogotypes_f2bc91",
        bottomRow: "bottomRow_f2bc91",
        hints: "hints_f2bc91",
        hintsContainer: "hintsContainer_f2bc91",
        videoOverlay: "videoOverlay_f2bc91",
        videoOverlayVisible: "videoOverlayVisible_f2bc91",
      };
    },
    382128: function (e, t, n) {
      e.exports = {
        container: "container_ebf06d",
        ctaInner: "ctaInner_ebf06d",
        button: "button_ebf06d",
        buttonTooltip: "buttonTooltip_ebf06d button_ebf06d",
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
    902904: function (e, t, n) {
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
//# sourceMappingURL=3df367394b4beed7f818.js.map
