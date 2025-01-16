"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48923"],
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
    763610: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(481060),
        l = n(53281),
        c = n(14943);
      function d(e) {
        let {
            filename: t,
            className: n,
            filters: s,
            buttonText: d,
            placeholder: u,
            onFileSelect: p,
          } = e,
          m = r.useRef(null);
        return (0, o.jsxs)("div", {
          className: a()(n, c.fileUpload),
          children: [
            (0, o.jsx)("input", {
              className: c.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: u,
              type: "text",
              value: t,
            }),
            (0, o.jsxs)(i.Button, {
              size: i.Button.Sizes.MIN,
              className: c.fileUploadButton,
              children: [
                d,
                (0, o.jsx)(l.Z, {
                  ref: m,
                  tabIndex: -1,
                  onChange: (e) => {
                    var t;
                    p(
                      null === (t = e.currentTarget.files) || void 0 === t
                        ? void 0
                        : t[0],
                    );
                  },
                  multiple: !1,
                  filters: s,
                }),
              ],
            }),
          ],
        });
      }
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
          return T;
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
        h = n(388032),
        f = n(387029);
      function v(e) {
        let { quest: t, isConnected: n, consoleType: r } = e,
          c = (0, u.O5)();
        return (0, o.jsx)(l.Clickable, {
          className: f.connectConsoleButtonWrapper,
          onClick: () => {
            c({
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
                    f.connectConsoleButton,
                    n
                      ? f.playstationButtonConnected
                      : f.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                })
              : (0, o.jsx)(i.M, {
                  colorClass: s()(
                    f.connectConsoleButton,
                    n
                      ? f.xboxButtonConnected
                      : f.connectConsoleButtonUnconnected,
                  ),
                  size: "sm",
                }),
        });
      }
      function C(e) {
        let { text: t, quest: n } = e,
          r = (0, u.O5)();
        return (0, o.jsx)(l.Clickable, {
          className: f.showConnectionsButton,
          onClick: () => {
            r({
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
          className: f.inlineConsoleConnectionDetails,
          children: [
            (0, o.jsxs)("div", {
              className: f.inlineConsoleConnectionDetailsUpper,
              children: [
                (0, o.jsx)(l.Text, {
                  color: "header-secondary",
                  variant: "text-xxs/normal",
                  children: c
                    ? h.intl.string(h.t["u30/ur"])
                    : h.intl.string(h.t.owFNBw),
                }),
                (0, o.jsxs)("div", {
                  className: f.inlineConsoleConnectionDetailsIcons,
                  children: [
                    (0, o.jsx)(v, {
                      consoleType: g.ABu.PLAYSTATION,
                      isConnected: u,
                      quest: t,
                    }),
                    (0, o.jsx)("div", { className: f.consoleIconDivider }),
                    (0, o.jsx)(v, {
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
                className: f.inlineConsoleConnectionDetailsLower,
                children: [
                  i.map((e, t) =>
                    (0, o.jsxs)(
                      "div",
                      {
                        className: s()(
                          f.inlineConsoleConnectionDetailsLowerItem,
                          t > 0 ? f.marginTop4px : void 0,
                        ),
                        children: [
                          (0, o.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-xxs/normal",
                            children:
                              e.type === g.ABu.XBOX
                                ? h.intl.string(h.t.MEhKlp)
                                : h.intl.string(h.t["74VQCA"]),
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
                    (0, o.jsx)(C, {
                      text: h.intl.string(h.t.o8ZkKS),
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
          ? (0, o.jsx)(C, { text: h.intl.string(h.t["qiS+xs"]), quest: n })
          : null;
      }
      function T(e) {
        let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(l.Text, {
              color: "text-muted",
              variant: "text-xs/medium",
              children: h.intl.string(h.t.EJFSvL),
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
        g = n(497505),
        h = n(977156),
        f = n(5881),
        v = n(602667),
        C = n(78826),
        j = n(667105),
        _ = n(693900),
        T = n(617889),
        E = n(130653),
        S = n(46140),
        b = n(981631),
        N = n(157410);
      function B(e) {
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
          x = (0, f.T)({ quest: s, location: S.dr.QUESTS_BAR }),
          y = (0, h.Zy)({ location: S.dr.QUESTS_BAR }),
          A = (0, j.qN)({ quest: s, location: S.dr.QUESTS_BAR }),
          w = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
          R = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
          I = r.useRef(null),
          P =
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          k = (0, d.Z)(P),
          O =
            (null === (n = s.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          q = (0, d.Z)(O),
          { hasError: M, isLoading: L } = (0, C.d7)(),
          D = r.useContext(E.T) || (y && A && !L),
          Z = r.useRef(D),
          V = (0, T.B)(s, D && !M),
          W = r.useRef(-1),
          H = r.useRef(!1),
          [Q, U] = r.useState(!1),
          [F, K] = r.useState(!1),
          [z, Y] = r.useState(!0),
          [G, X] = r.useState(!0),
          [J, $] = r.useState(V.preEnrollmentExpandedHeight),
          ee = r.useRef(null),
          et = r.useCallback((e) => {
            Y(!1), K(e);
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
                2 * V.paddingVertical,
            );
          }, [V.paddingVertical]),
          eo = r.useCallback(() => {
            en(), et(!0);
          }, [en, et]),
          er = r.useCallback(() => {
            U(!0);
          }, []),
          es = r.useCallback(() => {
            U(!1), !H.current && !O && et(!1);
          }, [O, et]),
          ea = r.useCallback(() => {
            U(!1), !O && et(!1), (H.current = !1);
          }, [O, et]),
          ei = r.useCallback(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (F) return;
              let { withDelay: t = !1 } = e;
              t ? (W.current = window.setTimeout(eo, 75)) : eo();
            },
            [eo, F],
          ),
          el = r.useCallback(() => {
            ei();
          }, [ei]),
          ec = r.useCallback(() => {
            if ((window.clearTimeout(W.current), !!V.canCollapseOnBlur && !Q))
              !H.current && et(!1);
          }, [Q, V, et]),
          ed = r.useCallback(() => {
            var e;
            (0, m.dA)({
              questId: s.id,
              event: b.rMx.QUEST_HOVER,
              properties: {
                ...(0, m.mH)(g.jn.QUEST_BAR),
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
              event: b.rMx.QUEST_HOVER_OFF,
              properties: {
                ...(0, m.mH)(g.jn.QUEST_BAR),
                impression_id:
                  null === (e = I.current) || void 0 === e ? void 0 : e.getId(),
              },
            }),
              (H.current = !1),
              ec();
          }, [ec, s]);
        r.useLayoutEffect(() => {
          O && V.shouldExpandOnQuestComplete && eo();
        }, [eo, O, V.shouldExpandOnQuestComplete]),
          r.useLayoutEffect(() => {
            P && !k && H.current && eo();
          }, [eo, P, k]),
          r.useLayoutEffect(() => {
            !O && P && !k && !H.current && et(!1);
          }, [P, O, k, et]),
          r.useLayoutEffect(() => {
            D !== Z.current && X(!1), (Z.current = D);
          }, [D]);
        let ep = P ? S.XZ : S.R4,
          [{ expansionSpring: em }, ex] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: ep,
            onRest: () => {
              Y(!0);
            },
            onStart: () => {
              Y(!1);
            },
          }));
        r.useEffect(() => {
          ex({ expansionSpring: F ? 1 : 0, immediate: w });
        }, [F, ex, w]);
        let { visibilitySpring: eg } = (0, c.useSpring)({
          from: { visibilitySpring: 0 },
          to: { visibilitySpring: D ? 1 : 0 },
          config: { tension: 250, friction: 10, clamp: !0 },
          onRest: () => {
            X(!0);
          },
          onStart: () => {
            X(!1);
          },
        });
        return (r.useLayoutEffect(() => {
          O && !q && V.canCollapseOnBlur && en();
        }, [O, eo, V.canCollapseOnBlur, en, q]),
        r.useEffect(() => {
          var e, t;
          M &&
            (0, m.dA)({
              questId: s.id,
              event: b.rMx.QUEST_CONTENT_RENDERING_FAILURE,
              properties: {
                ...(0, m.mH)(g.jn.QUEST_BAR),
                reason: "asset_loading_error",
                impression_id:
                  null === (e = I.current) || void 0 === e ? void 0 : e.getId(),
              },
            }),
            !y &&
              (0, m.dA)({
                questId: s.id,
                event: b.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  ...(0, m.mH)(g.jn.QUEST_BAR),
                  reason: "not_eligible_for_quest",
                  impression_id:
                    null === (t = I.current) || void 0 === t
                      ? void 0
                      : t.getId(),
                },
              });
        }, [M, y, s.id]),
        y && (D || !G || L) && !M)
          ? (0, o.jsx)(v.A, {
              questOrQuests: s,
              questContent: V.trackingCtx.content,
              overrideVisibility: !R && D,
              children: (e, t) => {
                let n = V.component;
                return (
                  (I.current = t.current),
                  (0, o.jsxs)("div", {
                    className: N.mask,
                    children: [
                      D && (0, o.jsx)(B, { questId: s.id, isExpanded: F }),
                      (0, o.jsx)(i.animated.div, {
                        "aria-hidden": !D,
                        onMouseLeave: eu,
                        onMouseEnter: ed,
                        onFocus: el,
                        onBlur: ec,
                        className: a()(N.wrapper, {
                          [N.wrapperInvisible]: !D,
                          [N.wrapperVisible]: D && G,
                        }),
                        style: {
                          color: s.config.colors.secondary,
                          height: eg.to({
                            range: [0, 1],
                            output: [0, !V.canCollapseOnBlur && F ? J : 70],
                          }),
                        },
                        children: (0, o.jsx)(i.animated.div, {
                          className: a()(N.contentWrapper, {
                            [N.contentWrapperExpanded]: F,
                            [N.contentWrapperAccepted]: P,
                          }),
                          style: {
                            backgroundColor: V.preEnrollmentBackgroundColor,
                            backgroundImage: P
                              ? V.postEnrollmentBackgroundImage
                              : void 0,
                          },
                          children: (0, o.jsx)(_.t, {
                            springConfig: ep,
                            isExpanded: F,
                            children: (0, o.jsx)(n, {
                              expandedContentRef: ee,
                              expansionSpring: em,
                              isExpanded: F,
                              isExpansionAnimationComplete: z,
                              onCtxMenuClosed: es,
                              onCtxMenuOpened: er,
                              onCtxMenuSelection: ea,
                              quest: s,
                              useReducedMotion: w,
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
          : (M
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
                    C.p,
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
          { ref: g, height: h = null } = (0, l.Z)(),
          f = null !== (t = (0, c.Z)(h)) && void 0 !== t ? t : null,
          [{ height: v }, C] = (0, i.useSpring)(() => ({
            from: { height: 0 },
            config: p,
          }));
        return (
          r.useLayoutEffect(() => {
            null !== h && C({ height: h, immediate: !m || x || null === f });
          }, [h, C, m, x, f]),
          (0, o.jsx)(s.animated.div, {
            style: { height: null === f ? "auto" : v, overflow: "hidden" },
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
        u = n(277636);
      t.Z = function (e) {
        var t;
        let {
            expandedContentRef: n,
            expansionSpring: p,
            isExpanded: m,
            isExpansionAnimationComplete: x,
            onCtxMenuOpened: g,
            onCtxMenuClosed: h,
            onCtxMenuSelection: f,
            quest: v,
            useReducedMotion: C,
            collapsedHeight: j,
          } = e,
          _ = r.useRef(null),
          T = r.useRef(null),
          E =
            (null === (t = v.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          S = (0, s.Rf)(v);
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
              quest: v,
              useReducedMotion: C,
              taskDetails: S,
            }),
            (0, o.jsx)(c.Z, {
              expansionSpring: p,
              className: u.content,
              collapsedHeight: j,
              onCtxMenuOpen: g,
              onCtxMenuClose: h,
              onCtxMenuSelect: f,
              overlayRef: T,
              isExpanded: m,
              isExpansionAnimationComplete: x,
              quest: v,
              useReducedMotion: C,
              ref: n,
              taskDetails: S,
              children: (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(d.Z, { expansionSpring: p, isExpanded: m }),
                  !E &&
                    (0, o.jsx)(a.Z, {
                      quest: v,
                      expansionSpring: p,
                      useReducedMotion: C,
                      isExpanded: m,
                      isExpansionAnimationComplete: x,
                      onCtxMenuOpen: g,
                      onCtxMenuClose: h,
                      onCtxMenuSelect: f,
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
        g = n(341907),
        h = n(303385),
        f = n(388032),
        v = n(626094);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: n,
            onCtxMenuSelect: s,
            onCtxMenuOpen: C,
            onCtxMenuClose: j,
            useReducedMotion: _,
            isExpanded: T,
            isExpansionAnimationComplete: E,
          } = e,
          S = (0, d.aM)(),
          b = r.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
              content: u.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          N = r.useCallback(() => {
            (0, p.FE)(t, {
              content: u.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
              impressionId: S,
            });
          }, [S, t]),
          B = T && E,
          y = (0, o.jsx)(l.Clickable, {
            onClick: N,
            className: a()(v.clickable, { [v.logo]: B }),
            children: (0, o.jsx)(m.ZP, {
              quest: t,
              logotypeClassName: a()(v.rewardHighlightLogotype),
              withGameTile: !1,
            }),
          });
        return (0, o.jsxs)(i.animated.div, {
          className: a()(v.wrapper, v.rewardHighlightWrapper, {
            [v.interactable]: B,
          }),
          style: {
            transform: (0, i.to)(
              [n.to({ range: [0, 1], output: [8, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, o.jsx)(i.animated.div, {
              className: v.opaqueExpandedBackground,
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
            (0, o.jsx)(h.Z, {
              quest: t,
              expansionSpring: n,
              isFullyExpanded: B,
              partnerBranding: y,
              useReducedMotion: _,
            }),
            (0, o.jsxs)(i.animated.div, {
              className: v.promotedBadgeWrapper,
              style: { opacity: n.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, o.jsxs)(l.Clickable, {
                  className: v.promotedBadge,
                  onClick: b,
                  children: [
                    (0, o.jsx)(l.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: f.intl.string(f.t.o6FLcH),
                    }),
                    (0, o.jsx)(l.CircleQuestionIcon, {
                      color: l.tokens.colors.WHITE,
                      className: v.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, o.jsx)(x.r, {
                  onOpen: C,
                  onClose: j,
                  onSelect: s,
                  questContent: u.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, o.jsx)(l.Clickable, {
                      ...e,
                      className: v.submenuWrapper,
                      "aria-label": f.intl.string(f.t.DEoVWV),
                      children: (0, o.jsx)(l.MoreHorizontalIcon, {
                        size: "md",
                        color: "currentColor",
                        className: a()(v.submenuIcon, v.white),
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
              unregisterComponent: g,
              expansionSpring: h,
              mountPoints: f,
            } = r.useContext(c),
            v = r.useRef(null),
            C = r.useRef(null),
            j = r.useRef();
          r.useEffect(() => {
            m();
          }, [m]),
            r.useLayoutEffect(() => {
              let e = v.current;
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
          (0, i.P)(v, _);
          let T = null === (n = f.get(d)) || void 0 === n ? void 0 : n.current,
            E = null;
          return (
            null == T
              ? (E = null)
              : p && null != h
                ? (E = (0, o.jsxs)(o.Fragment, {
                    children: [
                      "collapsed" === u &&
                        (0, s.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: h.to({ range: [0, 1], output: [1, 0] }),
                            },
                            children: l(C),
                          }),
                          T,
                        ),
                      "expanded" === u &&
                        (0, s.createPortal)(
                          (0, o.jsx)(a.animated.div, {
                            style: {
                              position: "absolute",
                              opacity: h.to({ range: [0, 1], output: [0, 1] }),
                            },
                            children: l(C),
                          }),
                          T,
                        ),
                    ],
                  }))
                : "collapsed" === u && (E = (0, s.createPortal)(l(C), T)),
            (0, o.jsxs)("div", {
              style: {
                opacity: (null == E && "collapsed" === u) || null == T ? 1 : 0,
              },
              ref: t,
              children: [l(v), E],
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
            h = r.useCallback((e, t) => {
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
            f = r.useCallback(() => {
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
                  h = -a.right + c.right + l.Li,
                  f = -d.right + u.right;
                e.push({
                  id: t,
                  collapsedLeft: g,
                  expandedLeft: x,
                  collapsedRight: f,
                  expandedRight: h,
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
              unregisterComponent: h,
              animatedComponents: i,
              expandedContentRef: n,
              collapsedContentRef: s,
              recalculateAnimationPositions: f,
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
        g = n(46140),
        h = n(388032),
        f = n(977174);
      function v(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, o.jsx)(a.Button, {
          className: f.cta,
          color: a.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, m.openVideoQuestModal)(t);
          },
          size: a.Button.Sizes.SMALL,
          children: (0, x.F9)(n),
        });
      }
      let C = (e) => {
          let { quest: t } = e,
            n = (0, l.aM)();
          return (0, o.jsx)(a.Button, {
            className: f.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
              (0, d.FE)(t, {
                content: c.jn.QUEST_BAR_V2,
                ctaContent: i.jZ.OPEN_GAME_LINK,
                impressionId: n,
              }),
            children: (0, d.pO)(t)
              ? h.intl.string(h.t.hvVgAQ)
              : h.intl.string(h.t.lwQdjI),
          });
        },
        j = (e) => {
          var t;
          let { quest: n } = e,
            r = null === (t = (0, l.WD)()) || void 0 === t ? void 0 : t.getId();
          return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: f.cta,
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
            children: h.intl.string(h.t.csptqa),
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
            className: s()(f.cta, i),
            buttonShineClassName: f.shine,
            ...d,
            children: null != l ? l : h.intl.string(h.t.cfY4PD),
          });
        },
        T = (e) => {
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
            h = (0, u.P)({ location: g.dr.QUESTS_BAR }),
            f = (0, d.q8)(n);
          if (x)
            return (0, o.jsx)(_, {
              quest: n,
              useReducedMotion: r,
              isExpanded: s,
            });
          if (f) return (0, o.jsx)(v, { quest: n, taskDetails: m });
          if (p === c.LI.CONSOLE && a && !h) return (0, o.jsx)(j, { quest: n });
          else if (p !== c.LI.SELECT && !i && !l)
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
            (0, o.jsx)(T, { ...e }),
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
            percentCompleteTextVariant: g = "text-lg/medium",
            children: h,
          } = e,
          f = (0, c.E)(n, r > 0),
          v = s / 2,
          C = s / 2 - p / 2,
          j = 2 * Math.PI * C,
          _ = j - r * j,
          T = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: _,
          },
          E = {
            strokeDasharray: "".concat(j, " ").concat(j),
            strokeDashoffset: -r * j,
          },
          S = { boxShadow: "0 0 30px 0px ".concat(f.glow) },
          { progressTextAnimation: b } = (0, l.useSpring)({
            progressTextAnimation: null != x && 1 !== r ? 1 : 0,
            config: d.Y,
          });
        return (0, o.jsxs)("div", {
          className: u.outer,
          ref: t,
          children: [
            (0, o.jsxs)("div", {
              className: u.inner,
              style: S,
              children: [
                h,
                (0, o.jsxs)(i.animated.div, {
                  style: { opacity: b },
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
                          stopColor: f.backgroundTop,
                        }),
                        (0, o.jsx)("stop", {
                          offset: "100%",
                          stopColor: f.backgroundBottom,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: C,
                  cx: v,
                  cy: v,
                  stroke: "url(#linear)",
                  style: E,
                }),
                (0, o.jsx)("circle", {
                  className: u.progress,
                  strokeWidth: p,
                  fill: "transparent",
                  r: C,
                  cx: v,
                  cy: v,
                  stroke: f.foreground,
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
        g = n(675654),
        h = n(211720),
        f = n(197857);
      let v = ["#51BC9D"];
      t.Z = (e) => {
        var t;
        let {
            expansionSpring: n,
            overlayRef: s,
            quest: C,
            progressBarRef: j,
            isExpanded: _,
          } = e,
          { completionSpring: T, startCompletionAnimation: E } = (0, x.G)(),
          S =
            (null === (t = C.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          b = r.useRef(!1),
          N = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
          B = r.useRef(null),
          y = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
          A = (0, u.Z)(y),
          [w, R] = r.useState(null),
          [I, P] = r.useState(null),
          k = r.useRef(new i.qA({ gravity: 0, wind: 0 })),
          O = (0, i.uR)(w, I),
          q = r.useCallback(() => {
            if (N) return;
            let e = j.current,
              t = B.current;
            if (null != t && null != e && O.isReady) {
              var n, o, r, s;
              let { x: a, y: i } = e.getBoundingClientRect(),
                { x: l, y: c } = t.getBoundingClientRect();
              O.createMultipleConfetti(
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
          }, [j, B, O, N]),
          M = (0, u.Z)(_);
        return (r.useEffect(() => {
          S && _ && !M && (E(), q());
        }, [_, S, E, q, M]),
        r.useEffect(() => {
          S &&
            !y &&
            A &&
            setTimeout(() => {
              E(), q();
            }, 200);
        }, [S, A, y, E, q]),
        r.useEffect(() => {
          if (!!O.isReady) !b.current && S && (E(), q()), (b.current = S);
        }, [S, b, q, E, O]),
        N)
          ? null
          : (0, o.jsxs)("div", {
              className: h.wrapper,
              "aria-hidden": "true",
              ref: B,
              children: [
                (0, o.jsx)(c.animated.div, {
                  className: h.background,
                  style: { opacity: T },
                }),
                (0, o.jsx)(c.animated.div, {
                  className: a()(h.borders, h.bordersTopLeft),
                  style: { opacity: T },
                }),
                (0, o.jsxs)(c.animated.div, {
                  className: h.confettiWrapper,
                  style: {
                    transform: n
                      .to({ range: [0, 1], output: [-35, 0] })
                      .to((e) => "translateY(".concat(e, "px)")),
                  },
                  children: [
                    (0, o.jsx)(i.O_, {
                      ref: R,
                      className: h.confetti,
                      environment: k.current,
                    }),
                    (0, o.jsx)(i.Ji, {
                      ref: P,
                      sprites: [f],
                      colors: v,
                      spriteWidth: g.Ko,
                      spriteHeight: g.Ko,
                    }),
                    null != s.current &&
                      (0, l.createPortal)(
                        (0, o.jsx)(c.animated.div, {
                          className: a()(h.borders, h.bordersBottom),
                          style: { opacity: T },
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
        g = n(113434),
        h = n(497505),
        f = n(918701),
        v = n(667105),
        C = n(585857),
        j = n(388032),
        _ = n(313750);
      function T(e) {
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
      function S(e) {
        let { quest: t, useReducedMotion: n } = e,
          s = (0, x.n)(),
          l = (0, v.k3)(t.id, h.jn.QUEST_BAR_V2),
          d = (0, v.g2)({ useReducedMotion: n }),
          C = (0, p.O5)(),
          T = (0, m.aM)(),
          {
            errorHints: S,
            startingConsoleQuest: b,
            startConsoleQuest: N,
          } = (0, g.GI)({
            questId: t.id,
            beforeRequest: () => {
              C({
                questId: t.id,
                questContent: h.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.DEFIBRILLATOR,
              }),
                d.startAnimation();
            },
            afterRequest: d.stopAnimation,
          }),
          { header: B, renderBody: y } = r.useMemo(() => {
            let e = S.length > 0,
              n = t.config.messages.gameTitle;
            return {
              header: e
                ? j.intl.formatToPlainString(j.t["28Ql29"], { gameTitle: n })
                : j.intl.formatToPlainString(j.t.gX0Qc3, { gameTitle: n }),
              renderBody: e
                ? () =>
                    (0, o.jsx)(o.Fragment, {
                      children: S.map((e, n) => {
                        if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                          let r = u.Z.getAccount(
                              e.connected_account_id,
                              e.connected_account_type,
                            ),
                            s = (0, f.C9)(e),
                            a = (0, f._j)(e);
                          return (0, o.jsx)(
                            E,
                            {
                              children: j.intl.format(s, {
                                account_name: null == r ? void 0 : r.name,
                                onClick: () => {
                                  (0, f.fY)(
                                    { quest: t, platformType: a },
                                    {
                                      content: h.jn.QUEST_BAR,
                                      ctaContent:
                                        p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                      impressionId: T,
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
          }, [S, t, s, T]);
        return (0, o.jsxs)("div", {
          className: _.microphoneUnit,
          children: [
            (0, o.jsxs)("div", {
              className: _.microphoneUnitHeader,
              children: [
                (0, o.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === S.length ? _.warningCircle : _.errorCircle,
                  width: 16,
                  height: 16,
                }),
                (0, o.jsx)(c.Text, { variant: "text-xs/medium", children: B }),
                (0, o.jsx)(c.Clickable, {
                  className: a()(_.microphoneUnitRefreshIconWrapper, {
                    [_.disabled]: b,
                  }),
                  onClick: () => N(),
                  children: d.render(),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: a()({ [_.opacity_50]: b }),
              children: [
                y(),
                0 === S.length ? null : (0, o.jsx)(E, { children: l }),
              ],
            }),
          ],
        });
      }
      function b(e) {
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
          a = (0, g.z6)(),
          {
            steps: i,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m,
          } = r.useMemo(() => {
            var e;
            let r = a.xboxAndPlaystationAccounts.length > 0,
              s = r && (0, f.Bz)(t),
              i = t.config.messages.gameTitle,
              l =
                (null === (e = t.userStatus) || void 0 === e
                  ? void 0
                  : e.completedAt) != null;
            return {
              steps: [
                {
                  renderContent: () => (0, o.jsx)(C.Q, { ...a, quest: t }),
                  isComplete: r || s || l,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(b, {
                      text: j.intl.formatToPlainString(j.t["+8JB6e"], {
                        gameTitle: i,
                      }),
                    }),
                  isComplete: s || l,
                },
                {
                  renderContent: () =>
                    (0, o.jsx)(b, {
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
                      T,
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
          g = r.useRef(null),
          h =
            (null === (n = m.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null;
        return (0, o.jsx)(i.animated.div, {
          ref: t,
          "aria-hidden": u && p,
          className: a()(s, c.contentCollapsed, {
            [c.contentCollapsedExpanded]: u,
            [c.contentCollapsedAccepted]: h,
          }),
          style: { opacity: d.to({ range: [0, 1], output: [1, 0] }) },
          children: (0, o.jsx)("div", {
            className: c.contentCollapsedWrapper,
            children: h
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
        i = n(476183),
        l = n(278074),
        c = n(442837),
        d = n(692547),
        u = n(481060),
        p = n(70097),
        m = n(617136),
        x = n(272008),
        g = n(113434),
        h = n(569984),
        f = n(497505),
        v = n(918701),
        C = n(184299),
        j = n(665430),
        _ = n(585500),
        T = n(475595),
        E = n(720293),
        S = n(644646),
        b = n(78826),
        N = n(64141),
        B = n(341907),
        y = n(693900),
        A = n(164495),
        w = n(759853),
        R = n(205511),
        I = n(694802),
        P = n(95985),
        k = n(50476),
        O = n(46140),
        q = n(743294),
        M = n(388032),
        L = n(748628);
      function D(e) {
        var t;
        let { quest: n, onClick: s, reducedMotion: i } = e,
          [l, c] = r.useState(!1),
          m = r.useRef(null),
          x = (0, E.z)(E.i.QUEST_BAR_PREVIEW_VIDEO, n),
          g = (0, E.z)(E.i.VIDEO_PLAYER_THUMBNAIL, n),
          h = (0, C.km)((e) => e.getVideoProgressState);
        r.useEffect(() => {
          null != m.current &&
            (i && l && (m.current.currentTime = 0), m.current.play());
        }, [m, l, i]);
        let f = h(n.id),
          v =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null && f === C.iw.COMPLETED,
          j = !v && (!i || l);
        return (0, o.jsxs)(u.Clickable, {
          className: L.videoQuestPreviewCont,
          onClick: s,
          onMouseEnter: () => {
            i && !l && c(!0);
          },
          onMouseLeave: () => {
            i && l && c(!1);
          },
          children: [
            null != g &&
              (0, o.jsx)("img", {
                alt: "",
                src: g.url,
                className: L.assetBodyVideoPreviewMedia,
              }),
            null != x
              ? (0, o.jsx)(p.Z, {
                  ref: m,
                  autoPlay: !0,
                  poster: null == g ? void 0 : g.url,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className: a()(L.assetBodyVideoPreviewVideo, {
                    [L.assetBodyVideoPreviewVisible]: j,
                  }),
                  controls: !1,
                  children: (0, o.jsx)("source", {
                    src: x.url,
                    type: x.mimetype,
                  }),
                })
              : null,
            (0, o.jsx)("div", {
              className: L.previewPlayButtonCont,
              children: v
                ? (0, o.jsx)(u.RetryIcon, {
                    color: d.Z.colors.WHITE,
                    className: L.previewPlayButton,
                  })
                : (0, o.jsx)(u.PlayIcon, {
                    color: d.Z.colors.WHITE,
                    className: L.previewPlayButton,
                  }),
            }),
          ],
        });
      }
      function Z(e) {
        let { quest: t } = e;
        return (0, o.jsx)(S.Z, {
          className: a()(L.rewardTile, L.hiddenRewardTile),
          learnMoreStyle: "text",
          quest: t,
          questContent: f.jn.QUEST_BAR_V2,
          location: O.dr.QUESTS_BAR,
        });
      }
      function V(e) {
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
          g = (0, c.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]),
          C = r.useMemo(() => (0, T.fh)(t, T.eC.QUEST_BAR_HERO), [t]),
          j = r.useRef(null),
          E = (0, _.D)({
            quest: t,
            location: O.dr.QUESTS_BAR,
            questContent: f.jn.QUEST_BAR_V2,
            taskDetails: n,
          });
        r.useEffect(() => {
          null != j.current &&
            (l && m
              ? (j.current.pause(), (j.current.currentTime = 0))
              : !l && m && j.current.play());
        }, [l, m]);
        let S = (0, v.q8)(t)
          ? M.intl.string(M.t.umdNio)
          : M.intl.string(M.t.l7E81t);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              children: (0, o.jsxs)("div", {
                className: L.questPromoContent,
                ref: d,
                children: [
                  (0, o.jsxs)("div", {
                    className: L.details,
                    children: [
                      (0, o.jsx)(Z, { quest: t }),
                      (0, o.jsx)(u.Heading, {
                        className: L.title,
                        variant: "heading-md/medium",
                        children: M.intl.format(M.t.EQa7oq, {
                          questName: t.config.messages.questName,
                        }),
                      }),
                      (0, o.jsx)(u.Text, {
                        className: L.description,
                        variant: "text-xs/normal",
                        children: E,
                      }),
                    ],
                  }),
                  (0, o.jsx)(u.Button, {
                    className: L.cta,
                    color: u.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: a ? x : void 0,
                    size: u.Button.Sizes.SMALL,
                    submitting: g,
                    children: S,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(i.animated.div, {
              className: L.heroAssetWrapper,
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
                  className: L.heroAssetDarken,
                  style: { opacity: s.to([0, 1], [1, 0]) },
                }),
                (0, o.jsx)(i.animated.div, {
                  className: L.heroAssetTint,
                  style: {
                    backgroundColor: t.config.colors.primary,
                    opacity: s.to([0, 1], [1, 0]),
                  },
                }),
                C.isAnimated
                  ? (0, o.jsx)(b.Fl, {
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
                            className: L.heroAsset,
                            controls: !1,
                            children: (0, o.jsx)("source", {
                              src: C.url,
                              type:
                                null !== (t = C.mimetype) && void 0 !== t
                                  ? t
                                  : void 0,
                            }),
                          })
                        );
                      },
                    })
                  : (0, o.jsx)(b.Fl, {
                      id: "QuestBarV2ContentExpanded_heroStatic",
                      children: (e) =>
                        (0, o.jsx)("img", {
                          ref: e,
                          alt: "",
                          className: L.heroAsset,
                          src: C.url,
                        }),
                    }),
                (0, o.jsx)(i.animated.div, {
                  className: L.legibilityGradient,
                  style: { opacity: s.to({ range: [0, 1], output: [0, 1] }) },
                }),
              ],
            }),
          ],
        });
      }
      function W(e) {
        var t;
        let {
            quest: n,
            taskDetails: s,
            expansionSpring: c,
            overlayRef: d,
            isExpanded: p,
            reducedMotion: m,
            containerRef: x,
            onCtxMenuOpen: h,
            onCtxMenuClose: C,
            onCtxMenuSelect: _,
          } = e,
          T =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          E = s.percentComplete > 0,
          S = (0, g.z)(n),
          [b, Z, V] = (0, g.me)(n, s),
          W = (0, j.pF)({ location: O.dr.QUESTS_BAR }),
          H = r.useRef(null),
          Q = (0, g.B6)(n.config.expiresAt),
          U = (0, g._s)({ quest: n }),
          F = (0, v.q8)(n),
          K = r.useCallback(() => {
            (0, B.openVideoQuestModal)(n);
          }, [n]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.animated.div, {
              className: a()(
                L.postEnrollmentBackground,
                L.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(q.aY, ", ")
                  .concat(q.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, o.jsxs)("div", {
              className: L.questAcceptedContent,
              ref: x,
              children: [
                (0, o.jsxs)("div", {
                  className: L.questAcceptedHeader,
                  children: [
                    (0, o.jsx)(u.Text, {
                      variant: "text-xxs/medium",
                      className: a()(L.flex, L.headerText),
                      children: M.intl.format(M.t["pX+fmp"], {
                        expirationDate: Q,
                      }),
                    }),
                    (0, o.jsx)(N.r, {
                      onOpen: h,
                      onClose: C,
                      onSelect: _,
                      questContent: f.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, o.jsx)(u.Clickable, {
                          ...e,
                          className: L.submenuWrapper,
                          "aria-label": M.intl.string(M.t.DEoVWV),
                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(L.submenuIcon, L.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: L.divider }),
                (0, o.jsx)(w.Z, {
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
                  activeScreen: b,
                }),
                (0, o.jsx)(y.n, {
                  children:
                    !T &&
                    !(0, v.Gd)(n) &&
                    (0, l.EQ)(b)
                      .with(f.LI.SELECT, () =>
                        (0, o.jsx)(k.Z, {
                          onConsole: () => V(O.cd.CONSOLE),
                          onDesktop: () => V(O.cd.DESKTOP),
                        }),
                      )
                      .with(f.LI.DESKTOP, () => (0, o.jsx)(I.Z, { quest: n }))
                      .with(f.LI.CONSOLE, () =>
                        (0, o.jsx)(R.Z, { quest: n, taskDetails: s }),
                      )
                      .exhaustive(),
                }),
                (0, o.jsxs)(y.n, {
                  children: [
                    F &&
                      (0, o.jsx)(D, { quest: n, onClick: K, reducedMotion: m }),
                    (0, o.jsx)(A.yD, {
                      quest: n,
                      useReducedMotion: m,
                      isExpanded: p,
                      awaitingConsoleConnections: U,
                      hasMadeProgress: E,
                      isProgressing: S,
                      activeScreen: b,
                      showBackButton:
                        b !== f.LI.SELECT && Z.length > 1 && !E && !S && W,
                      onBack: () => V(null),
                      taskDetails: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: a()(
                L.postEnrollmentBackground,
                L.postEnrollmentBackgroundExpanded,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(q.aY, ", ")
                  .concat(q.v6, ")"),
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
            onCtxMenuOpen: g,
            onCtxMenuClose: h,
            onCtxMenuSelect: C,
            overlayRef: j,
            quest: _,
            useReducedMotion: T,
            taskDetails: E,
          } = e,
          S = (0, v.q8)(_),
          b = r.useCallback(() => {
            (0, x.AH)(_.id, {
              questContent: f.jn.QUEST_BAR_V2,
              questContentCTA: m.jZ.ACCEPT_QUEST,
            }),
              S && (0, B.openVideoQuestModal)(_);
          }, [_, S]),
          N =
            (null === (n = _.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          y = d && u;
        return (0, o.jsxs)(i.animated.div, {
          "aria-hidden": !y,
          className: a()(l, L.contentExpanded, {
            [L.contentInteractable]: y,
            [L.contentExpandedAccepted]: N,
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
              children: N
                ? (0, o.jsx)(W, {
                    quest: _,
                    taskDetails: E,
                    expansionSpring: p,
                    overlayRef: j,
                    isExpanded: d,
                    reducedMotion: T,
                    onCtxMenuOpen: g,
                    onCtxMenuClose: h,
                    onCtxMenuSelect: C,
                    containerRef: t,
                  })
                : (0, o.jsx)(V, {
                    quest: _,
                    taskDetails: E,
                    expansionSpring: p,
                    isInteractable: y,
                    reducedMotion: T,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: b,
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
            activeScreen: g,
          } = e,
          { percentComplete: h } = x,
          f = (0, s.eQ)(n),
          v = (0, s.vf)(n, m, g);
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
                  percentComplete: h,
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
                      children: f,
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
                      children: v,
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
          return f;
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
      async function h(e, t) {
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
      function f(e) {
        var t;
        let {
            animationClassName: n,
            className: s,
            quest: i,
            useReducedMotion: l,
          } = e,
          g = (0, c.e7)([u.Z], () => u.Z.isFocused()),
          f = r.useRef(null),
          [v, C] = r.useState(!1),
          j = r.useMemo(() => {
            if (null == i) return null;
            let e = (0, p.oo)(i.config.colors.primary),
              t = { r: e.r / 255, g: e.g / 255, b: e.b / 255 },
              n = x.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
            return h(i.id, n);
          }, [i]),
          _ =
            (null === (t = i.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          T = !l && g;
        r.useEffect(() => {
          var e, t, n, o;
          g
            ? T &&
              (null === (o = f.current) ||
                void 0 === o ||
                null === (n = o.animation) ||
                void 0 === n ||
                n.play())
            : null === (t = f.current) ||
              void 0 === t ||
              null === (e = t.animation) ||
              void 0 === e ||
              e.goToAndStop(0, !0);
        }, [T, g]);
        let E = r.useCallback(() => {
          C(!0);
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
                  ref: f,
                  onComplete: E,
                  importData: () => j,
                  shouldAnimate: !v && T,
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
        g = n(388032),
        h = n(208041);
      t.Z = function (e) {
        var t;
        let {
            className: n,
            expansionSpring: r,
            isExpanded: f,
            isExpansionAnimationComplete: v,
            quest: C,
            useReducedMotion: j,
          } = e,
          _ =
            (null === (t = C.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { percentComplete: T } = (0, l.Rf)(C),
          E = (0, l.Jf)(C),
          S = null != E ? E.completedRatio > 0 : T > 0;
        return (0, o.jsxs)(a.animated.div, {
          "aria-hidden": f && v,
          className: s()(n, h.contentCollapsed, {
            [h.contentCollapsedExpanded]: f,
            [h.contentCollapsedAccepted]: _,
          }),
          style: { opacity: r.to({ range: [0, 1], output: [1, 0] }) },
          children: [
            (0, o.jsx)(m.Z, { quest: C, useReducedMotion: j }),
            (0, o.jsx)("div", {
              className: h.contentCollapsedWrapper,
              children: _
                ? (0, o.jsxs)("div", {
                    className: h.questProgressWrapper,
                    children: [
                      (0, o.jsx)(p.Z, {
                        className: h.questProgressRewardTile,
                        quest: C,
                        questContent: c.jn.QUEST_BAR,
                        autoplay: !1,
                        location: x.dr.QUESTS_BAR,
                      }),
                      S
                        ? (0, o.jsx)(u.Z, {
                            className: h.questProgressBar,
                            quest: C,
                          })
                        : (0, o.jsx)(i.Text, {
                            className: h.questProgressHint,
                            color: "always-white",
                            variant: "text-sm/semibold",
                            children: g.intl.string(g.t["7e5k7O"]),
                          }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: h.brandingWrapper,
                    children: [
                      (0, o.jsx)(d.ZP, {
                        className: h.partnerBranding,
                        quest: C,
                      }),
                      (0, o.jsx)(i.Heading, {
                        color: "always-white",
                        variant: "heading-sm/medium",
                        className: h.questName,
                        children: g.intl.format(g.t.EAYZAg, {
                          questName: C.config.messages.questName,
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
        g = n(617136),
        h = n(915750),
        f = n(272008),
        v = n(113434),
        C = n(569984),
        j = n(497505),
        _ = n(918701),
        T = n(865364),
        E = n(585500),
        S = n(475595),
        b = n(566078),
        N = n(340100),
        B = n(611855),
        y = n(644646),
        A = n(78826),
        w = n(64141),
        R = n(667105),
        I = n(46140),
        P = n(981631),
        k = n(701488),
        O = n(388032),
        q = n(502926);
      let M = r.forwardRef(function (e, t) {
        var n, s;
        let {
            children: T,
            className: M,
            collapsedHeight: D,
            expansionSpring: Z,
            isExpanded: V,
            isExpansionAnimationComplete: W,
            onCtxMenuOpen: H,
            onCtxMenuClose: Q,
            onCtxMenuSelect: U,
            quest: F,
            useReducedMotion: K,
          } = e,
          z = (0, l.e7)([C.Z], () => C.Z.isEnrolling(F.id), [F]),
          Y = (0, h.aM)(),
          G = (0, v.B6)(F.config.expiresAt),
          X = b.r.build(F.config),
          J = (0, v.B6)(X.rewardsExpireAt),
          $ = r.useMemo(() => (0, S.fh)(F, S.eC.HERO), [F]),
          ee = (0, R.tP)(X.application.id),
          et = X.features.has(I.S7.START_QUEST_CTA)
            ? g.jZ.START_QUEST
            : g.jZ.ACCEPT_QUEST,
          en = X.features.has(I.S7.START_QUEST_CTA)
            ? O.intl.string(O.t.E80Bdn)
            : O.intl.string(O.t.l7E81t),
          eo = r.useCallback(() => {
            (0, f.AH)(F.id, {
              questContent: j.jn.QUEST_BAR,
              questContentCTA: et,
            }),
              X.features.has(I.S7.START_QUEST_CTA) &&
                (0, m.uL)(P.Z5c.ACTIVITY_DETAILS(k.In), void 0);
          }, [F, et, X.features]),
          er = (0, R.hf)({ quest: F, location: j.jn.QUEST_BAR }),
          es = r.useCallback(() => {
            (0, _.FE)(F, {
              content: j.jn.QUEST_BAR,
              ctaContent: g.jZ.OPEN_GAME_LINK,
              impressionId: Y,
            });
          }, [Y, F]),
          ea = X.features.has(I.S7.POST_ENROLLMENT_CTA),
          ei = (0, v.Rf)(F),
          el = (0, v.Jf)(F),
          ec = null != el ? el.progress > 0 : ei.progressSeconds > 0,
          ed =
            (null === (n = F.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          eu =
            (null === (s = F.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          ep = r.useMemo(() => (0, _.Xv)(F.config), [F.config]),
          em = V && W,
          ex = (0, E.D)({
            quest: F,
            taskDetails: ei,
            location: I.dr.QUESTS_BAR,
            questContent: j.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != el ? el : void 0,
          }),
          eg = (0, x.isWeb)(),
          eh = r.useMemo(() => {
            let e = (0, d.Qg)(F.config.colors.primary, {
              base: "#ffffff",
              contrastRatio: d.S3.Text,
            });
            return {
              "--custom-cta-color": e,
              "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
              "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
          }, [F.config.colors.primary]);
        return (0, o.jsxs)(i.animated.div, {
          className: a()(M, q.contentExpanded, { [q.contentInteractable]: em }),
          style: {
            backgroundColor: F.config.colors.secondary,
            transform: eu
              ? void 0
              : (0, i.to)(
                  [
                    Z.to({ range: [0, 1], output: [0, -100] }),
                    Z.to({ range: [0, 1], output: [0, D] }),
                  ],
                  (e, t) =>
                    "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
                ),
          },
          children: [
            T,
            (0, o.jsx)("div", {
              "aria-hidden": !em,
              children: ed
                ? (0, o.jsxs)("div", {
                    className: q.questAcceptedContent,
                    ref: t,
                    children: [
                      (0, o.jsxs)("div", {
                        className: q.utils,
                        children: [
                          (0, o.jsxs)("div", {
                            className: q.questAcceptedContentHeading,
                            children: [
                              (0, o.jsx)(y.Z, {
                                className: q.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: F,
                                questContent: j.jn.QUEST_BAR,
                                location: I.dr.QUESTS_BAR,
                              }),
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, _.AV)({
                                      quest: F,
                                      taskDetails: ei,
                                      thirdPartyTaskDetails:
                                        null != el ? el : void 0,
                                    }),
                                  }),
                                  (0, o.jsx)(u.Text, {
                                    className:
                                      q.questAcceptedContentCopySubheading,
                                    color: "always-white",
                                    variant: "text-xxs/normal",
                                    children: eu
                                      ? O.intl.formatToPlainString(O.t.APddvL, {
                                          expirationDate: J,
                                        })
                                      : O.intl.formatToPlainString(
                                          O.t["pX+fmp"],
                                          { expirationDate: G },
                                        ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsx)(w.r, {
                            onOpen: H,
                            onClose: Q,
                            onSelect: U,
                            questContent: j.jn.QUEST_BAR,
                            quest: F,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: (e) =>
                              (0, o.jsx)(u.Clickable, {
                                ...e,
                                className: q.submenuWrapper,
                                "aria-label": O.intl.string(O.t.DEoVWV),
                                children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: q.submenuIcon,
                                }),
                              }),
                          }),
                        ],
                      }),
                      eu
                        ? (0, o.jsx)(u.Button, {
                            className: a()(q.cta, q.ctaClaimReward),
                            style: ep ? eh : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: er,
                            size: u.Button.Sizes.NONE,
                            children: O.intl.string(O.t.cfY4PD),
                          })
                        : (0, o.jsx)(u.Text, {
                            className: q.description,
                            color: "always-white",
                            variant: "text-xs/normal",
                            children: ex,
                          }),
                      (0, o.jsx)(N.Z, { quest: F }),
                      !eg &&
                        !ec &&
                        !ee &&
                        ea &&
                        (0, o.jsx)(L, { onClick: em ? es : void 0 }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsxs)("div", {
                        className: q.questPromoContent,
                        ref: t,
                        children: [
                          (0, o.jsxs)("div", {
                            className: q.utils,
                            children: [
                              (0, o.jsx)(B.Z, { color: "always-white" }),
                              (0, o.jsx)(w.r, {
                                onOpen: H,
                                onClose: Q,
                                onSelect: U,
                                questContent: j.jn.QUEST_BAR,
                                quest: F,
                                shouldShowDisclosure: !0,
                                showShareLink: !0,
                                children: (e) =>
                                  (0, o.jsx)(u.Clickable, {
                                    ...e,
                                    className: q.submenuWrapper,
                                    "aria-label": O.intl.string(O.t.DEoVWV),
                                    children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: q.submenuIcon,
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className: q.details,
                            children: [
                              (0, o.jsx)(y.Z, {
                                className: q.rewardTile,
                                learnMoreStyle: "text",
                                quest: F,
                                questContent: j.jn.QUEST_BAR,
                                location: I.dr.QUESTS_BAR,
                              }),
                              (0, o.jsx)(u.Heading, {
                                className: q.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: O.intl.format(O.t.EQa7oq, {
                                  questName: F.config.messages.questName,
                                }),
                              }),
                              (0, o.jsx)(u.Text, {
                                className: q.description,
                                color: "always-white",
                                variant: "text-sm/normal",
                                children: ex,
                              }),
                            ],
                          }),
                          (0, o.jsx)(u.Button, {
                            className: q.cta,
                            style: "1232852290197655573" !== F.id ? eh : void 0,
                            color: u.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: em ? eo : void 0,
                            size: u.Button.Sizes.NONE,
                            submitting: z,
                            children: en,
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: q.heroAssetWrapper,
                        style: { color: F.config.colors.secondary },
                        children: $.isAnimated
                          ? (0, o.jsx)(A.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => {
                                var t;
                                return (0, o.jsx)(p.Z, {
                                  ref: e,
                                  autoPlay: !K,
                                  loop: !0,
                                  muted: !0,
                                  playsInline: !0,
                                  className: q.heroAsset,
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
                                  className: q.heroAsset,
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
      function L(e) {
        let { style: t, onClick: n } = e;
        return (0, T.O)({ location: I.dr.QUESTS_BAR, autoTrackExposure: !0 })
          ? (0, o.jsx)(u.Button, {
              className: q.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: O.intl.string(O.t.lwQdjI),
            })
          : null;
      }
      t.Z = M;
    },
    623249: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return S;
          },
          openConsoleConnectionErrorsModal: function () {
            return N;
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
        g = n(113434),
        h = n(497505),
        f = n(918701),
        v = n(475595),
        C = n(667105),
        j = n(981631),
        _ = n(388032),
        T = n(839434),
        E = n(708901);
      function S(e) {
        var t;
        let { questId: n, errorHints: s, transitionState: S, onClose: N } = e,
          B = (0, g.B4)(n);
        null == B && N();
        let [y, A] = (0, r.useState)(s),
          w = (0, g.KX)(),
          R = (0, m.O5)(),
          I = null === (t = (0, x.WD)()) || void 0 === t ? void 0 : t.getId(),
          P = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
          k = (0, C.g2)({ useReducedMotion: P, className: T.colorTransition }),
          O = y.filter((e) =>
            ["xbox", "playstation"].includes(e.connected_account_type),
          ),
          q = (0, f.Bz)(B),
          M = (0, i.e7)([p.Z], () => p.Z.getState().theme),
          L = (0, l.wj)(M) ? j.BRd.DARK : j.BRd.LIGHT,
          { startConsoleQuest: D, startingConsoleQuest: Z } = (0, g.GI)({
            questId: B.id,
            beforeRequest: () => {
              k.startAnimation(),
                R({
                  questId: B.id,
                  questContent: h.jn.CONNECTIONS_MODAL,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: (e) => {
              k.stopAnimation(), A(e);
            },
          });
        return (0, o.jsxs)(c.ModalRoot, {
          transitionState: S,
          size: c.ModalSize.DYNAMIC,
          className: T.modalRoot,
          children: [
            (0, o.jsxs)(c.ModalHeader, {
              direction: u.Z.Direction.VERTICAL,
              separator: !1,
              className: T.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: T.modalTop,
                  children: [
                    (0, o.jsx)("div", {
                      className: T.iconFrame,
                      children: (0, o.jsx)("img", {
                        className: T.icon,
                        alt: "",
                        src: E,
                      }),
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                      className: T.closeBtn,
                      onClick: N,
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
                  className: T.upperBodyText,
                  children: w.message,
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalContent, {
              className: T.modalContent,
              children: [
                (0, o.jsxs)("div", {
                  className: T.contentHeader,
                  children: [
                    (0, o.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "header-secondary",
                      children: _.intl.string(_.t["+/hZMz"]),
                    }),
                    (0, o.jsxs)(c.Clickable, {
                      className: a()(T.refreshWrapper, { [T.disabled]: Z }),
                      onClick: D,
                      children: [
                        k.render(),
                        (0, o.jsx)(c.Text, {
                          variant: "text-sm/medium",
                          color: "currentColor",
                          className: T.colorTransition,
                          children: _.intl.string(_.t.wzzjk5),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: T.accountsWrapper,
                  children: [
                    (0, o.jsx)(b, {
                      icon: (0, o.jsx)(c.ScreenIcon, { size: "sm" }),
                      text: _.intl.string(_.t.br3uIi),
                    }),
                    (0, o.jsx)(b, {
                      icon: (0, o.jsx)(c.GameControllerIcon, { size: "sm" }),
                      text: _.intl.string(_.t.XF4wuL),
                      errors: q ? void 0 : O.map((e) => e.message),
                      gameTile: q
                        ? (0, o.jsx)(c.Tooltip, {
                            "aria-label": B.config.messages.gameTitle,
                            text: () =>
                              (0, o.jsxs)("div", {
                                className: T.tooltip,
                                children: [
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: B.config.messages.gameTitle,
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
                                className: T.gameTile,
                                alt: B.config.messages.gameTitle,
                                src: (0, v.fh)(B, v.eC.GAME_TILE, L).url,
                              }),
                          })
                        : null,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(c.ModalFooter, {
              className: T.footer,
              children: [
                (0, o.jsx)(c.Button, {
                  size: c.ButtonSizes.MIN,
                  onClick: N,
                  className: T.footerCloseButton,
                  children: _.intl.string(_.t.cpT0Cg),
                }),
                (0, o.jsx)(c.Button, {
                  look: c.ButtonLooks.LINK,
                  color: c.ButtonColors.PRIMARY,
                  onClick: () => {
                    N(),
                      (0, f.V$)(
                        { quest: B },
                        {
                          content: h.jn.CONNECTIONS_MODAL,
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
      function b(e) {
        let { icon: t, text: n, errors: r = [], gameTile: s } = e,
          i = r.length > 0,
          l = i ? c.ConnectionUnknownIcon : c.ConnectionFineIcon;
        return (0, o.jsxs)("div", {
          className: T.connectionRow,
          children: [
            (0, o.jsxs)("div", {
              className: a()(T.connectionRowHeader, {
                [T.connectionRowHeaderError]: i,
              }),
              children: [
                (0, o.jsxs)("div", {
                  className: T.connectionRowHeaderContent,
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
                  className: T.connectionRowHeaderContent,
                  children: [
                    s,
                    (0, o.jsx)(l, {
                      color: "currentColor",
                      size: "sm",
                      className: a()({ [T.success]: !i, [T.error]: i }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: T.errorsContainer,
              children: r.map((e) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: T.errorRow,
                    children: [
                      (0, o.jsx)(c.WarningIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: T.error,
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
      function N(e) {
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
          return h;
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
      function g(e) {
        let {
            quest: t,
            className: n,
            questContent: s,
            contentPosition: c,
            rowIndex: d,
            impressionRef: g,
          } = e,
          [h, f] = r.useState(!1),
          [v, C] = r.useState([]),
          j = (0, l.qb)(t),
          _ = (0, i._F)(),
          T = r.useCallback(() => {
            f(!0),
              _({
                questId: t.id,
                event: m.rMx.QUEST_HOVER,
                properties: (0, i.mH)(s),
              });
          }, [_, t.id, s]),
          E = r.useCallback(() => {
            f(!1),
              _({
                questId: t.id,
                event: m.rMx.QUEST_HOVER_OFF,
                properties: (0, i.mH)(s),
              });
          }, [_, t.id, s]);
        return (0, o.jsxs)("div", {
          id: "quest-tile-".concat(t.id),
          ref: (e) => {
            g.current = e;
          },
          className: a()(x.container, n),
          onMouseEnter: T,
          onMouseLeave: E,
          children: [
            (0, o.jsx)(u.Z, {
              quest: t,
              isHovering: h,
              errorHints: v,
              warningHints: j,
            }),
            (0, o.jsx)(p.Z, {
              quest: t,
              questContent: s,
              isHovering: h,
              contentPosition: c,
              rowIndex: d,
              onReceiveErrorHints: C,
            }),
          ],
        });
      }
      function h(e) {
        return (0, o.jsx)(d.A, {
          questOrQuests: e.quest,
          questContent: e.questContent,
          questContentPosition: e.contentPosition,
          questContentRowIndex: e.rowIndex,
          trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
          children: (t) => (0, o.jsx)(g, { ...e, impressionRef: t }),
        });
      }
    },
    439826: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
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
        g = n(44315),
        h = n(70097),
        f = n(617136),
        v = n(272008),
        C = n(113434),
        j = n(497505),
        _ = n(918701),
        T = n(475595),
        E = n(720293),
        S = n(623249),
        b = n(685613),
        N = n(78826),
        B = n(64141),
        y = n(341907),
        A = n(642145),
        w = n(981631),
        R = n(388032),
        I = n(60821);
      function P(e) {
        var t;
        let { quest: n, errorHints: o, warningHints: r, isDarkTheme: i } = e,
          { ref: l, height: d = 0 } = (0, m.Z)([o]),
          u =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          x = (0, C.z)(n),
          { type: h, hints: f } = a.useMemo(
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
          v = 2 !== h,
          j = (0, p.useSpring)({
            opacity: v ? 1 : 0,
            height: v ? d : 0,
            config: A.Y,
          }),
          _ = 0 === h ? p.CircleWarningIcon : p.CircleInformationIcon,
          T = (0, g.Lq)(w.Ilk.RED_345),
          E =
            0 === h
              ? T
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
                      children: f.at(0),
                    }),
                  ],
                }),
                0 === h &&
                  (0, s.jsx)(p.Button, {
                    onClick: () =>
                      (0, S.openConsoleConnectionErrorsModal)({
                        questId: n.id,
                        errorHints: o,
                      }),
                    size: p.ButtonSizes.MIN,
                    look: p.ButtonLooks.LINK,
                    color: p.ButtonColors.CUSTOM,
                    style: { color: (0, g.Lq)(w.Ilk.BLUE_345) },
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
          (0, s.jsx)(h.Z, {
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
      function O(e) {
        var t, n, o, r, i;
        let {
            quest: c,
            isHovering: m,
            errorHints: g,
            warningHints: S,
            onCtxMenuClose: A,
            onCtxMenuOpen: O,
            onCtxMenuSelect: q,
          } = e,
          M = (0, _.q8)(c),
          L = a.useMemo(() => (0, T.fh)(c, T.eC.HERO), [c]),
          D = (0, x.ZP)(),
          Z = ((0, u.wj)(D) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK,
          V = a.useContext(d.S).reducedMotion.enabled,
          W = (0, C.tP)(c),
          H =
            (null === (t = c.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          Q = a.useRef(m),
          U = a.useRef(null),
          F = (0, C.B6)(c.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          K =
            (null === (n = c.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          z =
            (null === (o = c.userStatus) || void 0 === o
              ? void 0
              : o.completedAt) != null,
          Y = a.useCallback(() => {
            if (!!M)
              !(0, _.zi)(c) &&
                !K &&
                (0, v.AH)(c.id, {
                  questContent: j.jn.QUEST_HOME_DESKTOP,
                  questContentCTA: f.jZ.ACCEPT_QUEST,
                }),
                (0, y.openVideoQuestModal)(c);
          }, [M, c, K]);
        a.useEffect(() => {
          if (L.isAnimated && null != U.current)
            return (
              Q.current !== m &&
                (m && !V
                  ? U.current.play()
                  : (U.current.pause(), (U.current.currentTime = 0))),
              (Q.current = m),
              () => {
                var e;
                null === (e = U.current) || void 0 === e || e.pause();
              }
            );
        }, [m, L, V]);
        let G = a.useMemo(() => (0, E.z)(E.i.QUEST_HOME_VIDEO, c), [c]);
        return (0, s.jsxs)("div", {
          className: I.container,
          children: [
            (0, s.jsxs)("div", {
              className: I.heroAssetWrapper,
              children: [
                L.isAnimated
                  ? (0, s.jsx)(N.Fl, {
                      id: "QuestTileBanner_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (U.current = e.current),
                          (0, s.jsx)(h.Z, {
                            ref: e,
                            autoPlay: !V && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: I.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)("source", {
                              src: L.url,
                              type:
                                null !== (t = L.mimetype) && void 0 !== t
                                  ? t
                                  : void 0,
                            }),
                          })
                        );
                      },
                    })
                  : (0, s.jsx)(N.Fl, {
                      id: "QuestTileBanner",
                      children: (e) =>
                        (0, s.jsx)("img", {
                          ref: e,
                          alt: "".concat(c.config.messages.questName),
                          className: I.heroAsset,
                          src: L.url,
                        }),
                    }),
                M &&
                  !V &&
                  null != G &&
                  (0, s.jsx)(k, {
                    asset: G,
                    reducedMotionEnabled: V,
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
                              children: R.intl.string(R.t.SKNnqq),
                            }),
                          }),
                        M &&
                          (0, s.jsx)(p.Tooltip, {
                            text: z
                              ? R.intl.string(R.t.YsCuyM)
                              : K
                                ? R.intl.string(R.t["74Kqra"])
                                : (0, _.zi)(c)
                                  ? R.intl.string(R.t["I6JG4+"])
                                  : R.intl.string(R.t.umdNio),
                            children: (e) =>
                              (0, s.jsx)(p.Clickable, {
                                ...e,
                                className: I.utilButtonWrapper,
                                "aria-label": R.intl.string(R.t.RscU7O),
                                onClick: Y,
                                children: (0, s.jsx)(p.PlayIcon, {
                                  className: I.utilButtonIcon,
                                }),
                              }),
                          }),
                        (0, s.jsx)(B.r, {
                          onOpen: O,
                          onClose: A,
                          onSelect: q,
                          questContent: j.jn.QUEST_HOME_DESKTOP,
                          quest: c,
                          hideLearnMore: !0,
                          shouldShowDisclosure: !0,
                          showShareLink: !0,
                          children: (e) =>
                            (0, s.jsx)(p.Clickable, {
                              ...e,
                              className: I.utilButtonWrapper,
                              "aria-label": R.intl.string(R.t.DEoVWV),
                              children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: l()(I.utilButtonIcon),
                              }),
                            }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(b.ZP, {
                      className: I.partnerBranding,
                      logotypeClassName: I.partnerLogotypes,
                      quest: c,
                      separatorSpacing: b.US.MEDIUM,
                      withGameTile: !1,
                    }),
                    (0, s.jsxs)("div", {
                      className: I.bottomRow,
                      children: [
                        (0, s.jsx)(p.Text, {
                          variant: "text-sm/medium",
                          color: Z ? "text-muted" : "always-white",
                          children: R.intl.format(R.t.buEvBw, {
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
                        W || H
                          ? null
                          : (0, s.jsx)(p.Text, {
                              variant: "text-sm/medium",
                              color: Z ? "text-muted" : "always-white",
                              children: R.intl.format(R.t["7D8r4O"], {
                                expiryDate: F,
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(P, {
                  quest: c,
                  errorHints: g,
                  warningHints: S,
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
        g = n(667105),
        h = n(341907),
        f = n(284851),
        v = n(46140),
        C = n(388032),
        j = n(382128);
      let _ = [
        {
          value: v.cd.DESKTOP,
          get label() {
            return C.intl.string(C.t.QXc019);
          },
        },
        {
          value: v.cd.CONSOLE,
          get label() {
            return C.intl.string(C.t["8lAfuL"]);
          },
        },
      ];
      function T(e) {
        let t,
          n,
          { value: r } = e;
        switch (r) {
          case v.cd.DESKTOP:
            (n = (0, o.jsx)(l.ScreenIcon, {})), (t = C.intl.string(C.t.QXc019));
            break;
          case v.cd.CONSOLE:
            (n = (0, o.jsx)(l.GameControllerIcon, {})),
              (t = C.intl.string(C.t["8lAfuL"]));
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
            quest: S,
            location: b,
            onReceiveErrorHints: N,
            contentPosition: B,
            rowIndex: y,
          } = e,
          A = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
          w = (0, g.g2)({ useReducedMotion: A }),
          R = (0, d.O5)(),
          I = (0, u._s)({ quest: S }),
          P = (0, u.z)(S),
          k = (0, u.B6)(S.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          { isClaiming: O, isEnrolling: q } = (0, i.cj)([p.Z], () => ({
            isClaiming:
              p.Z.isClaimingReward(S.id) || p.Z.isFetchingRewardCode(S.id),
            isEnrolling: p.Z.isEnrolling(S.id),
          })),
          M =
            (null === (t = S.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          L =
            (null === (n = S.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          D =
            L &&
            (null === (s = S.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) == null,
          Z = (0, x.iQ)(S),
          V = !(0, x.zi)(S),
          W = (0, u._Q)(S),
          H = (0, x.Xv)(S.config),
          Q = (0, x.q8)(S),
          U = (0, u.GU)(S),
          F = (0, u.Rf)(S),
          [K, z, Y] = (0, u.me)(S, F),
          G = V && W === u.OH.ACCEPTED,
          X = G && K === m.LI.SELECT,
          J = G && !X && z.length > 1,
          $ = r.useCallback(
            (e) => {
              Y(e), e === v.cd.DESKTOP && N([]);
            },
            [Y, N],
          ),
          {
            text: ee,
            onClick: et,
            tooltipText: en,
          } = (0, g.Ks)({
            progressState: W,
            quest: S,
            location: b,
            isCollectibleQuest: H,
            questContentPosition: B,
            questContentRowIndex: y,
            inGiftInventory: !0,
            isVideoQuest: Q,
          }),
          { startingConsoleQuest: eo, startConsoleQuest: er } = (0, u.GI)({
            questId: S.id,
            beforeRequest: () => {
              w.startAnimation(),
                R({
                  questId: S.id,
                  questContent: b,
                  questContentCTA: d.jZ.DEFIBRILLATOR,
                  questContentPosition: B,
                  questContentRowIndex: y,
                });
            },
            afterRequest: (e) => {
              w.stopAnimation(), N(e);
            },
          }),
          es =
            (null === (E = S.userStatus) || void 0 === E
              ? void 0
              : E.claimedAt) != null,
          ea = null;
        return (Z && D
          ? (ea = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: O,
              onClick: null != et ? et : void 0,
              className: j.button,
              children: ee,
            }))
          : L
            ? (ea = Q
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        className: j.button,
                        style: { flex: 1 },
                        onClick: () => {
                          (0, h.openVideoQuestModal)(S);
                        },
                        children: (0, o.jsxs)("div", {
                          className: j.ctaInner,
                          children: [
                            (0, o.jsx)(l.RetryIcon, {
                              color: l.tokens.colors.WHITE,
                              className: j.videoQuestPlayIcon,
                            }),
                            (0, o.jsx)("span", {
                              children: C.intl.string(C.t.YsCuyM),
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
            : V
              ? U.length > 0
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
                : V && D
                  ? (ea = (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      submitting: O,
                      onClick: null != et ? et : void 0,
                      className: j.button,
                      children: ee,
                    }))
                  : V && M && !es
                    ? (ea = X
                        ? (0, o.jsx)(l.Select, {
                            className: j.platformSelectorPrimary,
                            isSelected: () => !1,
                            options: _,
                            placeholder: C.intl.string(C.t.drVw4e),
                            renderOptionLabel: T,
                            select: $,
                            serialize: (e) => {
                              switch (e) {
                                case v.cd.DESKTOP:
                                  return C.intl.string(C.t.QXc019);
                                case v.cd.CONSOLE:
                                  return C.intl.string(C.t["8lAfuL"]);
                              }
                            },
                          })
                        : (0, x.$J)(S) && !P && K !== m.LI.DESKTOP
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
                                    w.render(),
                                    C.intl.string(C.t.nPThNT),
                                  ],
                                }),
                              })
                          : Q
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
                                children: C.intl.string(C.t["9KoPyM"]),
                              }))
                    : V &&
                      !M &&
                      (ea = (0, o.jsx)(l.Button, {
                        submitting: q,
                        color: l.ButtonColors.BRAND,
                        onClick: null != et ? et : void 0,
                        className: j.button,
                        children: ee,
                      }))
              : (ea = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: C.intl.format(C.t["14o6QU"], { expiryDate: k }),
                })),
        null == ea)
          ? null
          : (0, o.jsxs)("div", {
              className: j.container,
              children: [
                ea,
                J &&
                  (0, o.jsx)(f.U, {
                    onSelect: $,
                    quest: S,
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
                            })(K),
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
          return T;
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
        g = n(644646),
        h = n(69439),
        f = n(46140),
        v = n(642145),
        C = n(388032),
        j = n(902904);
      let _ = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
      function T(e) {
        var t, n, s;
        let {
            quest: T,
            questContent: E,
            isHovering: S,
            contentPosition: b,
            rowIndex: N,
            onReceiveErrorHints: B,
          } = e,
          y = m.r.build(T.config),
          A = y.defaultReward.messages.name,
          w = y.defaultReward.messages.nameWithArticle,
          R =
            (null === (t = T.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          { ref: I, scrollHeight: P } = (0, d.Z)(),
          k = 104 !== P,
          { expansionSpring: O } = (0, c.useSpring)({
            expansionSpring: S ? 1 : 0,
            config: { ...v.Y, clamp: !0 },
          }),
          q =
            (null === (n = T.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          M =
            (null === (s = T.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) != null,
          { completedRatio: L, completedRatioDisplay: D } = (0, p.I)(T),
          Z = (0, p.Bd)(T),
          V = r.useCallback(
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
                "".concat(T.id, "_reward"),
              ),
            [T.id],
          ),
          W = r.useMemo(
            () =>
              M
                ? V(A)
                : C.intl.format(C.t["0IUT4e"], {
                    rewardWithArticleHook: () => V(w),
                  }),
            [A, w, M, V],
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
          Q = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
        return (0, o.jsxs)("div", {
          className: a()(j.container),
          children: [
            (0, o.jsxs)(i.animated.div, {
              style: {
                maxHeight: O.to([0, 1], [104, (null != P ? P : 0) + 12]),
              },
              className: a()(j.rewardDescriptionContainer),
              children: [
                (0, o.jsxs)("div", {
                  className: j.assetWrapper,
                  children: [
                    !M &&
                      q &&
                      (0, o.jsx)("div", { className: j.completionAnimation }),
                    R && !M
                      ? (0, o.jsxs)("div", {
                          className: j.progressWrapper,
                          children: [
                            q &&
                              (0, o.jsx)(c.LottieAnimation, {
                                importData: _,
                                className: j.confetti,
                                loop: !1,
                                autoplay: !1,
                                shouldAnimate: !Q,
                              }),
                            (0, o.jsx)(x.Z, {
                              quest: T,
                              size: 76,
                              percentComplete: L,
                              percentCompleteText: S ? D : void 0,
                              children: (0, o.jsx)("div", {
                                className: j.circularRewardTileWrapper,
                                children: (0, o.jsx)(g.Z, {
                                  quest: T,
                                  questContent: E,
                                  className: j.circularQuestRewardTileAsset,
                                  location: f.dr.QUEST_HOME_DESKTOP,
                                }),
                              }),
                            }),
                          ],
                        })
                      : (0, o.jsx)(g.Z, {
                          quest: T,
                          autoplay: S,
                          questContent: E,
                          className: j.questRewardTileAsset,
                          location: f.dr.QUEST_HOME_DESKTOP,
                        }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  ref: I,
                  className: a()(j.textContainer, { [j.justifyCenter]: !k }),
                  children: [
                    (0, o.jsx)(c.Heading, {
                      variant: "eyebrow",
                      color: "text-brand",
                      className: j.questName,
                      children: C.intl.format(C.t.EAYZAg, {
                        questName: T.config.messages.questName,
                      }),
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-md/semibold",
                      color: "header-primary",
                      className: j.header,
                      children: W,
                    }),
                    H,
                  ],
                }),
                k &&
                  (0, o.jsx)(i.animated.div, {
                    style: { opacity: O.to([0, 1], [1, 0]) },
                    className: j.textOverflowBlur,
                  }),
              ],
            }),
            (0, o.jsx)(h.Z, {
              quest: T,
              location: E,
              contentPosition: b,
              rowIndex: N,
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
    478977: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var r = n(866442),
        s = n(481060),
        a = n(102787);
      t.Z = function (e) {
        let { colorKey: t, value: n, onChange: i, title: l } = e;
        return (0, o.jsxs)(s.FormItem, {
          children: [
            (0, o.jsx)(s.FormTitle, { tag: s.FormTitleTags.H5, children: l }),
            (0, o.jsx)(s.Popout, {
              renderPopout: (e) =>
                (0, o.jsx)(s.CustomColorPicker, {
                  ...e,
                  value: n,
                  onChange: (e) => i(t, (0, r.Rf)(e)),
                }),
              children: (e) =>
                (0, o.jsx)(s.Clickable, {
                  ...e,
                  tag: "span",
                  "aria-label": "Select a color",
                  className: a.swatchContainer,
                  style: { backgroundColor: n },
                  children: (0, o.jsx)(s.EyeDropperIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: a.swatchIcon,
                  }),
                }),
            }),
          ],
        });
      };
    },
    456799: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        a = n(481060),
        i = n(102787);
      t.Z = function (e) {
        let { allowClicks: t = !1, children: n, withBorder: r = !1 } = e;
        return (0, o.jsx)(a.FocusBlock, {
          children: (0, o.jsx)(a.Card, {
            className: s()(i.componentPreviewWrapper, {
              [i.componentPreviewWrapperBordered]: r,
            }),
            outline: r,
            children: (0, o.jsx)("div", {
              className: i.componentPreview,
              onClickCapture: t
                ? void 0
                : function (e) {
                    e.stopPropagation();
                  },
              children: n,
            }),
          }),
        });
      };
    },
    210851: function (e, t, n) {
      n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
      var o = n(200651),
        r = n(192379),
        s = n(481060),
        a = n(763610),
        i = n(102787);
      t.Z = function (e) {
        var t, n;
        let {
            assetKey: l,
            filters: c,
            initialValue: d,
            onFileChange: u,
            title: p,
          } = e,
          [m, x] = r.useState(null),
          g = r.useRef(null);
        return (
          r.useEffect(
            () => () => {
              null != g.current && URL.revokeObjectURL(g.current);
            },
            [],
          ),
          (0, o.jsxs)(s.FormItem, {
            children: [
              (0, o.jsx)(s.FormTitle, {
                tag: s.FormTitleTags.H5,
                children: (0, o.jsxs)("div", {
                  className: i.headingWithTooltip,
                  children: [
                    p,
                    (0, o.jsx)(s.Tooltip, {
                      text: "Supported asset formats: ".concat(c.join(", ")),
                      children: (e) =>
                        (0, o.jsx)(s.CircleInformationIcon, {
                          size: "xs",
                          ...e,
                        }),
                    }),
                  ],
                }),
              }),
              (0, o.jsx)(a.Z, {
                filename:
                  null !==
                    (n =
                      null !== (t = null == m ? void 0 : m.name) && void 0 !== t
                        ? t
                        : d) && void 0 !== n
                    ? n
                    : "",
                filters: [{ name: p, extensions: c }],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                  if ((x(null != e ? e : null), null == e)) return;
                  let t = URL.createObjectURL(e);
                  g.current = t;
                  let n = new URL(t);
                  n.searchParams.append("mimetype", e.type),
                    n.searchParams.append("name", e.name),
                    u(l, n.toString());
                },
              }),
            ],
          })
        );
      };
    },
    602683: function (e, t, n) {
      n(47120);
      var o = n(200651),
        r = n(192379),
        s = n(481060);
      t.Z = function (e) {
        let { assetKey: t, initialValue: n, onMessageChange: a, title: i } = e,
          [l, c] = r.useState("");
        return (
          r.useEffect(() => {
            c(null != n ? n : "");
          }, [n]),
          (0, o.jsxs)(s.FormItem, {
            children: [
              (0, o.jsx)(s.FormTitle, { tag: s.FormTitleTags.H5, children: i }),
              (0, o.jsx)(s.FormText, {
                children: (0, o.jsx)(s.TextInput, {
                  value: l,
                  onChange: function (e) {
                    c(e), a(t, e);
                  },
                }),
              }),
            ],
          })
        );
      };
    },
    916028: function (e, t, n) {
      n(47120);
      var o = n(200651);
      n(192379);
      var r = n(481060),
        s = n(113434);
      t.Z = function (e) {
        let { onSelect: t, quest: n } = e,
          { quests: a } = (0, s.J2)({ fetchPolicy: "cache-and-network" }),
          i = [
            { label: "NONE", value: null },
            ...a.map((e) => ({ label: e.config.messages.questName, value: e })),
          ];
        return (0, o.jsxs)(r.FormItem, {
          children: [
            (0, o.jsx)(r.FormTitle, {
              tag: r.FormTitleTags.H5,
              children: "Prefill with Quest",
            }),
            (0, o.jsx)(r.FormText, {
              children: (0, o.jsx)(r.Select, {
                "aria-label": "Prefill Quest",
                options: i,
                isSelected: (e) =>
                  (null == e ? void 0 : e.id) === (null == n ? void 0 : n.id),
                select: t,
                serialize: String,
              }),
            }),
          ],
        });
      };
    },
    652380: function (e, t, n) {
      n.d(t, {
        b: function () {
          return q;
        },
      }),
        n(47120),
        n(627341);
      var o = n(200651),
        r = n(192379),
        s = n(278074),
        a = n(754700),
        i = n(887003),
        l = n(742635),
        c = n(458708),
        d = n(481060),
        u = n(70956),
        p = n(497505),
        m = n(918701),
        x = n(210724),
        g = n(130653),
        h = n(415104),
        f = n(78826),
        v = n(37303),
        C = n(134483),
        j = n(683650),
        _ = n(920916),
        T = n(341907),
        E = n(478977),
        S = n(456799),
        b = n(210851),
        N = n(602683),
        B = n(916028),
        y = n(749912),
        A = n(815183),
        w = n(899457),
        R = n(102787);
      function I(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let P = ["png", "gif", "webp"],
        k = [...P, "jpg", "jpeg"],
        O = Array.from(new Set([...k, "gif", "mp4", "webm"]));
      function q(e) {
        var t, n;
        return {
          code: "PREVIEW-MODE-CODE",
          tier: 0,
          platform: p.y$.CROSS_PLATFORM,
          userId: "123",
          questId: e.id,
          claimedAt:
            null !==
              (n =
                null === (t = e.userStatus) || void 0 === t
                  ? void 0
                  : t.claimedAt) && void 0 !== n
              ? n
              : "",
        };
      }
      function M() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            streamProgressSeconds: t = 0,
            completedAt: n = null,
            enrolledAt: o = null,
            claimedAt: r = null,
          } = e;
        return {
          userId: "123",
          questId: "1193992107035983872",
          enrolledAt: o,
          completedAt: n,
          claimedAt: r,
          claimedTier: null,
          lastStreamHeartbeatAt: null,
          streamProgressSeconds: t,
          dismissedQuestContent: 0,
          progress: {},
        };
      }
      let L = "1193992107035983872",
        D = {
          id: L,
          preview: !0,
          config: {
            id: L,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: {
              link: "https://discord.com/",
              id: "123",
              name: "Sky Runners",
            },
            messages: {
              questName: "Sky Runners",
              gameTitle: "Sky Runners",
              gamePublisher: "Discord",
            },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
              assignmentMethod: 1,
              rewards: [
                {
                  skuId: "",
                  asset: "reward.png",
                  assetVideo: null,
                  type: i.w.REWARD_CODE,
                  messages: {
                    name: "Orange Buddy Jetpack",
                    nameWithArticle: "an Orange Buddy Jetpack",
                    redemptionInstructionsByPlatform: {
                      0: "This code can be used on any platform!",
                      1: "Redeem your code on your Xbox.",
                      2: "Redeem your code on your Playstation.",
                      3: "Redeem your code on your Switch.",
                      4: "Redeem your code on your PC.",
                    },
                  },
                },
              ],
              rewardsExpireAt: "2030-01-01T00:00:00+00:00",
              platforms: [0, 4, 2, 3, 1],
            },
            assets: {
              hero: "hero.png",
              heroVideo: null,
              questBarHero: "quests_bar_hero.webm",
              questBarHeroVideo: null,
              gameTile: "game_tile.png",
              logotype: "game_logotype.png",
            },
            taskConfig: {
              type: l.L.FIRST_PARTY,
              joinOperator: c.r.AND,
              tasks: {
                [a.X.PLAY_ON_DESKTOP]: {
                  eventName: a.X.PLAY_ON_DESKTOP,
                  target: 300,
                  externalIds: [],
                },
              },
            },
            features: [],
          },
          userStatus: null,
          targetedContent: [],
        };
      function Z() {
        var e, t, i, l, c, I, q, L, Z, V, W, H, Q, U;
        let [F, K] = r.useState(D),
          [z, Y] = r.useState(w.a.UNENROLLED),
          [G, X] = r.useState(!1),
          [J, $] = r.useState(!1),
          [ee, et] = r.useState(null);
        let en =
          ((U = F.config),
          (0, s.EQ)(U)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
        function eo(e, t) {
          var n, o;
          if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
          )
            K({
              ...F,
              config:
                ((n = F.config),
                (o = { [e]: t }),
                (0, s.EQ)(n)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    assets: { ...e.assets, ...o },
                  }))
                  .exhaustive()),
            });
        }
        function er(e, t) {
          var n, o, r;
          K({
            ...F,
            config: {
              ...F.config,
              videoMetadata: {
                ...F.config.videoMetadata,
                messages:
                  null !==
                    (r =
                      null === (n = F.config.videoMetadata) || void 0 === n
                        ? void 0
                        : n.messages) && void 0 !== r
                    ? r
                    : {},
                assets: {
                  ...(null === (o = F.config.videoMetadata) || void 0 === o
                    ? void 0
                    : o.assets),
                  [e]: t,
                },
              },
            },
          });
        }
        function es(e, t) {
          var n, o;
          if ("questName" === e || "gameTitle" === e || "gamePublisher" === e)
            K({
              ...F,
              config:
                ((n = F.config),
                (o = { [e]: t }),
                (0, s.EQ)(n)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    messages: { ...e.messages, ...o },
                  }))
                  .exhaustive()),
            });
        }
        function ea(e, t) {
          var n, o, r;
          K({
            ...F,
            config: {
              ...F.config,
              videoMetadata: {
                ...F.config.videoMetadata,
                assets:
                  null !==
                    (r =
                      null === (n = F.config.videoMetadata) || void 0 === n
                        ? void 0
                        : n.assets) && void 0 !== r
                    ? r
                    : {},
                messages: {
                  ...(null === (o = F.config.videoMetadata) || void 0 === o
                    ? void 0
                    : o.messages),
                  [e]: t,
                },
              },
            },
          });
        }
        function ei(e, t, n) {
          var o, r, a;
          if ("name" === e || "nameWithArticle" === e)
            K({
              ...F,
              config:
                ((o = F.config),
                (r = { [e]: t }),
                (a = n),
                (0, s.EQ)(o)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    rewardsConfig: {
                      ...e.rewardsConfig,
                      rewards: e.rewardsConfig.rewards.map((e, t) =>
                        t === a
                          ? { ...e, messages: { ...e.messages, ...r } }
                          : e,
                      ),
                    },
                  }))
                  .exhaustive()),
            });
        }
        function el(e, t) {
          K({
            ...F,
            config: { ...F.config, colors: { ...F.config.colors, [e]: t } },
          });
        }
        function ec() {
          (0, m.Xv)(F.config)
            ? (0, _.openCollectibleRewardModal)(
                F,
                p.jn.GIFT_INVENTORY_FOR_YOU,
                !0,
              )
            : (0, T.openQuestsRewardCodeModal)({
                questId: F.id,
                location: p.jn.GIFT_INVENTORY_FOR_YOU,
                preview: !0,
                previewQuest: F,
              });
        }
        let ed = r.useMemo(() => {
            for (let [e, t] of Object.entries(F.config.taskConfig.tasks))
              if (null != t.target) return t.target;
            return 10 * u.Z.Seconds.MINUTE;
          }, [F.config.taskConfig.tasks]),
          eu = r.useMemo(
            () => a.X.WATCH_VIDEO in F.config.taskConfig.tasks,
            [F.config.taskConfig.tasks],
          );
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              className: R.heading,
              children: "Quest Preview Tool",
            }),
            (0, o.jsx)("div", {
              className: R.fields,
              children: (0, o.jsx)(B.Z, {
                onSelect: function (e) {
                  if ((et(e), null != e))
                    Y(
                      (function (e) {
                        if (null == e.userStatus) return w.a.UNENROLLED;
                        if (null != e.userStatus.claimedAt) return w.a.CLAIMED;
                        if (null != e.userStatus.completedAt)
                          return w.a.COMPLETED_100;
                        let t = (0, m.il)(e),
                          n = t.progressSeconds,
                          o = t.targetSeconds;
                        return n / o >= 1
                          ? w.a.COMPLETED_100
                          : n / o >= 0.75
                            ? w.a.COMPLETED_75
                            : n / o >= 0.5
                              ? w.a.COMPLETED_50
                              : n / o >= 0.25
                                ? w.a.COMPLETED_25
                                : w.a.ENROLLED;
                      })(e),
                    ),
                      K(e);
                },
                quest: ee,
              }),
            }),
            (0, o.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              className: R.subheading,
              children: "Task Config",
            }),
            (0, o.jsx)("div", {
              className: R.fields,
              children: (0, o.jsx)(y.Z, {
                taskDuration: ed,
                taskConfig: F.config.taskConfig,
                onSelect: function (e) {
                  K({ ...F, config: { ...F.config, taskConfig: e } });
                },
              }),
            }),
            (0, o.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              className: R.subheading,
              children: "Messages",
            }),
            (0, o.jsxs)("div", {
              className: R.fields,
              children: [
                (0, o.jsx)(N.Z, {
                  title: "Quest Name",
                  assetKey: "questName",
                  onMessageChange: es,
                  initialValue: F.config.messages.questName,
                }),
                (0, o.jsx)(N.Z, {
                  title: "Game Title",
                  assetKey: "gameTitle",
                  onMessageChange: es,
                  initialValue: F.config.messages.gameTitle,
                }),
                (0, o.jsx)(N.Z, {
                  title: "Game Publisher",
                  assetKey: "gamePublisher",
                  onMessageChange: es,
                  initialValue: F.config.messages.gamePublisher,
                }),
                eu &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(N.Z, {
                        title: "Video Title",
                        assetKey: "videoTitle",
                        onMessageChange: ea,
                        initialValue:
                          null === (e = F.config.videoMetadata) || void 0 === e
                            ? void 0
                            : e.messages.videoTitle,
                      }),
                      (0, o.jsx)(N.Z, {
                        title: "End CTA Title",
                        assetKey: "videoEndCtaTitle",
                        onMessageChange: ea,
                        initialValue:
                          null === (t = F.config.videoMetadata) || void 0 === t
                            ? void 0
                            : t.messages.videoEndCtaTitle,
                      }),
                      (0, o.jsx)(N.Z, {
                        title: "End CTA Subtitle",
                        assetKey: "videoEndCtaSubtitle",
                        onMessageChange: ea,
                        initialValue:
                          null === (i = F.config.videoMetadata) || void 0 === i
                            ? void 0
                            : i.messages.videoEndCtaSubtitle,
                      }),
                    ],
                  }),
              ],
            }),
            (0, o.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              className: R.subheading,
              children: "Assets",
            }),
            (0, o.jsxs)("div", {
              className: R.fields,
              children: [
                (0, o.jsx)(b.Z, {
                  title: "Hero",
                  assetKey: "hero",
                  onFileChange: eo,
                  filters: O,
                  initialValue: F.config.assets.hero,
                }),
                (0, o.jsx)(b.Z, {
                  title: "Hero Video (optional)",
                  assetKey: "heroVideo",
                  onFileChange: eo,
                  filters: O,
                  initialValue:
                    null !== (H = F.config.assets.heroVideo) && void 0 !== H
                      ? H
                      : void 0,
                }),
                (0, o.jsx)(b.Z, {
                  title: "Quest Bar Hero",
                  assetKey: "questBarHero",
                  onFileChange: eo,
                  filters: O,
                  initialValue: F.config.assets.questBarHero,
                }),
                (0, o.jsx)(b.Z, {
                  title: "Quest Bar Hero Video (optional)",
                  assetKey: "questBarHeroVideo",
                  onFileChange: eo,
                  filters: O,
                  initialValue:
                    null !== (Q = F.config.assets.questBarHeroVideo) &&
                    void 0 !== Q
                      ? Q
                      : void 0,
                }),
                (0, o.jsx)(b.Z, {
                  title: "Game Tile",
                  assetKey: "gameTile",
                  onFileChange: eo,
                  filters: [...k, "svg"],
                  initialValue: F.config.assets.gameTile,
                }),
                (0, o.jsx)(b.Z, {
                  title: "Logotype",
                  assetKey: "logotype",
                  onFileChange: eo,
                  filters: [...P, "svg"],
                  initialValue: F.config.assets.logotype,
                }),
                eu &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(b.Z, {
                        title: "Quest Video",
                        assetKey: "videoPlayerVideo",
                        onFileChange: er,
                        filters: O,
                        initialValue:
                          null === (l = F.config.videoMetadata) || void 0 === l
                            ? void 0
                            : l.assets.videoPlayerVideo,
                      }),
                      (0, o.jsx)(b.Z, {
                        title: "Quest Video (Low Resolution)",
                        assetKey: "videoPlayerVideoLowRes",
                        onFileChange: er,
                        filters: O,
                        initialValue:
                          null === (c = F.config.videoMetadata) || void 0 === c
                            ? void 0
                            : c.assets.videoPlayerVideoLowRes,
                      }),
                      (0, o.jsx)(b.Z, {
                        title: "Video Player Thumbnail (optional)",
                        assetKey: "videoPlayerThumbnail",
                        onFileChange: er,
                        filters: k,
                        initialValue:
                          null === (q = F.config.videoMetadata) || void 0 === q
                            ? void 0
                            : null === (I = q.assets) || void 0 === I
                              ? void 0
                              : I.videoPlayerThumbnail,
                      }),
                      (0, o.jsx)(b.Z, {
                        title: "Quest Bar Preview Video (optional)",
                        assetKey: "questBarPreviewVideo",
                        onFileChange: er,
                        filters: O,
                        initialValue:
                          null === (L = F.config.videoMetadata) || void 0 === L
                            ? void 0
                            : L.assets.questBarPreviewVideo,
                      }),
                      (0, o.jsx)(b.Z, {
                        title: "Quest Home Video (optional)",
                        assetKey: "questHomeVideo",
                        onFileChange: er,
                        filters: O,
                        initialValue:
                          null === (Z = F.config.videoMetadata) || void 0 === Z
                            ? void 0
                            : Z.assets.questHomeVideo,
                      }),
                    ],
                  }),
              ],
            }),
            en.map((e, t) =>
              (0, o.jsxs)(
                "div",
                {
                  children: [
                    (0, o.jsxs)(d.Heading, {
                      variant: "heading-md/semibold",
                      className: R.subheading,
                      children: ["Reward #", t + 1],
                    }),
                    (0, o.jsxs)("div", {
                      className: R.fields,
                      children: [
                        (0, o.jsx)(N.Z, {
                          title: "Name",
                          assetKey: "name",
                          onMessageChange: (e, n) => ei(e, n, t),
                          initialValue: e.messages.name,
                        }),
                        (0, o.jsx)(N.Z, {
                          title: "Name With Article",
                          assetKey: "nameWithArticle",
                          onMessageChange: (e, n) => ei(e, n, t),
                          initialValue: e.messages.nameWithArticle,
                        }),
                        (0, o.jsx)(b.Z, {
                          title: "Asset",
                          assetKey: "asset",
                          onFileChange: (e, n) =>
                            (function (e, t, n) {
                              var o, r, a;
                              if ("asset" === e)
                                K({
                                  ...F,
                                  config:
                                    ((o = F.config),
                                    (r = t),
                                    (a = n),
                                    (0, s.EQ)(o)
                                      .with({ configVersion: 2 }, (e) => ({
                                        ...e,
                                        rewardsConfig: {
                                          ...e.rewardsConfig,
                                          rewards: e.rewardsConfig.rewards.map(
                                            (e, t) =>
                                              t === a
                                                ? { ...e, asset: r, skuId: "" }
                                                : e,
                                          ),
                                        },
                                      }))
                                      .exhaustive()),
                                });
                            })(e, n, t),
                          filters: O,
                          initialValue: e.asset,
                        }),
                        (0, o.jsxs)(d.FormItem, {
                          children: [
                            (0, o.jsx)(d.FormTitle, {
                              children: "Claim Modal",
                            }),
                            (0, o.jsx)(d.Button, {
                              color: d.ButtonColors.BRAND,
                              onClick: ec,
                              children: "Open Reward Modal",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                t,
              ),
            ),
            (0, o.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              className: R.subheading,
              children: "Colors & Quest States",
            }),
            (0, o.jsxs)("div", {
              className: R.fields,
              children: [
                (0, o.jsxs)("div", {
                  className: R.fields,
                  style: { marginBottom: 0 },
                  children: [
                    (0, o.jsx)(E.Z, {
                      title: "Primary",
                      colorKey: "primary",
                      onChange: el,
                      value: F.config.colors.primary,
                    }),
                    (0, o.jsx)(E.Z, {
                      title: "Secondary",
                      colorKey: "secondary",
                      onChange: el,
                      value: F.config.colors.secondary,
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: R.fields,
                  children: (0, o.jsx)(A.Z, {}),
                }),
                (0, o.jsx)(w.Z, {
                  onChange: function (e) {
                    switch ((Y(e), e)) {
                      case w.a.UNENROLLED:
                        K({ ...F, userStatus: null });
                        break;
                      case w.a.ENROLLED:
                        K({
                          ...F,
                          userStatus: M({
                            enrolledAt: new Date().toISOString(),
                          }),
                        });
                        break;
                      case w.a.COMPLETED_25:
                        K({
                          ...F,
                          userStatus: M({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.25 * ed,
                          }),
                        });
                        break;
                      case w.a.COMPLETED_50:
                        K({
                          ...F,
                          userStatus: M({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.5 * ed,
                          }),
                        });
                        break;
                      case w.a.COMPLETED_75:
                        K({
                          ...F,
                          userStatus: M({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.75 * ed,
                          }),
                        });
                        break;
                      case w.a.COMPLETED_100:
                        K({
                          ...F,
                          userStatus: M({
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ed,
                          }),
                        });
                        break;
                      case w.a.CLAIMED:
                        K({
                          ...F,
                          userStatus: M({
                            claimedAt: new Date().toISOString(),
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ed,
                          }),
                        });
                    }
                  },
                  value: z,
                }),
              ],
            }),
            (0, o.jsx)(d.Heading, {
              variant: "heading-lg/bold",
              className: R.heading,
              children: "Component Previews",
            }),
            (0, o.jsxs)("div", {
              className: R.componentPreviews,
              children: [
                (0, o.jsxs)(S.Z, {
                  withBorder: !0,
                  children: [
                    (0, o.jsx)(d.FormTitle, { children: "Quest Bar" }),
                    (0, o.jsxs)("div", {
                      className: R.questBarPreviewWrapper,
                      children: [
                        (null === (V = F.userStatus) || void 0 === V
                          ? void 0
                          : V.claimedAt) != null &&
                          (0, o.jsx)(d.Text, {
                            color: "text-secondary",
                            variant: "text-sm/normal",
                            children:
                              "The Quest Bar is hidden when the user has claimed the reward.",
                          }),
                        (0, o.jsx)("div", {
                          className: R.questBarPreview,
                          children: (0, o.jsx)(f.p, {
                            isPreview: !0,
                            source: "preview",
                            questId: "0",
                            children: (0, o.jsx)(g.Z, {
                              children: (0, o.jsx)(x.P, { quest: F }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)(S.Z, {
                  withBorder: !0,
                  children: [
                    (0, o.jsx)(d.FormTitle, { children: "Quest Home Card" }),
                    (0, o.jsx)(f.p, {
                      isPreview: !0,
                      source: "preview",
                      questId: "0",
                      children: (0, o.jsx)(h.Z, {
                        quest: F,
                        className: R.questTile,
                        questContent: p.jn.QUEST_HOME_DESKTOP,
                        contentPosition: 0,
                        rowIndex: 0,
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)(S.Z, {
                  withBorder: !0,
                  children: [
                    (0, o.jsx)(d.FormTitle, {
                      children: "Channel Call Header",
                    }),
                    (null === (W = F.userStatus) || void 0 === W
                      ? void 0
                      : W.claimedAt) != null &&
                      (0, o.jsx)(d.Text, {
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children:
                          "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                      }),
                    (0, o.jsx)("div", {
                      className: R.questBarPreviewWrapper,
                      children: (0, o.jsx)(f.p, {
                        isPreview: !0,
                        source: "preview",
                        questId: "0",
                        children: (0, o.jsx)("div", {
                          className: R.questChannelCallHeaderPreview,
                          children: (0, o.jsx)(C.Z, {
                            channelId: "123",
                            previewQuest: F,
                            isParticipatingOverride: G,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: R.toggleSwitch,
                  children: (0, o.jsx)(d.FormItem, {
                    children: (0, o.jsx)(d.FormSwitch, {
                      value: G,
                      onChange: function (e) {
                        X(e);
                      },
                      hideBorder: !0,
                      children: "Is Participating:",
                    }),
                  }),
                }),
                (0, o.jsxs)(S.Z, {
                  withBorder: !0,
                  children: [
                    (0, o.jsx)(d.FormTitle, { children: "Quest Card Embed" }),
                    J
                      ? (0, o.jsx)(j.o, {})
                      : (0, o.jsx)(
                          v.Z,
                          { quest: F, location: p.jn.QUESTS_EMBED },
                          F.id,
                        ),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: R.toggleSwitch,
                  children: (0, o.jsx)(d.FormItem, {
                    children: (0, o.jsx)(d.FormSwitch, {
                      value: J,
                      onChange: $,
                      hideBorder: !0,
                      children: "Invalid Quests Embed:",
                    }),
                  }),
                }),
                eu &&
                  (0, o.jsxs)(S.Z, {
                    withBorder: !0,
                    allowClicks: !0,
                    children: [
                      (0, o.jsx)(d.FormTitle, { children: "Video Player" }),
                      (0, o.jsx)(d.Button, {
                        onClick: () => {
                          (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                              n.e("30816"),
                              n.e("32249"),
                              n.e("30414"),
                            ]).then(n.bind(n, 536687));
                            return (t) => {
                              var n;
                              return (0, o.jsx)(e, {
                                ...t,
                                videoSessionId: "fake-quest-session-id",
                                questId:
                                  null !== (n = F.id) && void 0 !== n
                                    ? n
                                    : "fake-quest-id",
                                overrideQuest: F,
                                autoplay: !0,
                              });
                            };
                          });
                        },
                        children: "Open Video Player Modal",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      class V extends r.Component {
        componentDidCatch(e) {
          this.setState({ error: e });
        }
        render() {
          let { error: e, renderKey: t } = this.state;
          return null != e
            ? (0, o.jsxs)("div", {
                className: R.errorBoundary,
                children: [
                  (0, o.jsx)(d.CircleWarningIcon, {
                    className: R.errorBoundaryIcon,
                  }),
                  (0, o.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Something broke in the Quest preview tool :(",
                  }),
                  (0, o.jsx)(d.Button, {
                    color: d.ButtonColors.PRIMARY,
                    onClick: this.handleResetState,
                    children: "Reset",
                  }),
                  null != e.message &&
                    (0, o.jsx)(d.Card, {
                      className: R.errorMessageWrapper,
                      children: (0, o.jsx)("code", {
                        className: R.errorMessage,
                        children: e.message,
                      }),
                    }),
                ],
              })
            : (0, o.jsx)(Z, {}, t);
        }
        constructor(...e) {
          super(...e),
            I(this, "state", { error: null, renderKey: 0 }),
            I(this, "handleResetState", () => {
              this.setState((e) => ({
                error: null,
                renderKey: e.renderKey + 1,
              }));
            });
        }
      }
      t.Z = V;
    },
    749912: function (e, t, n) {
      n(47120);
      var o,
        r,
        s = n(200651);
      n(192379);
      var a = n(754700),
        i = n(481060),
        l = n(70956),
        c = n(416457);
      ((r = o || (o = {}))[(r.PLAY_DESKTOP = 0)] = "PLAY_DESKTOP"),
        (r[(r.STREAM_DESKTOP = 1)] = "STREAM_DESKTOP"),
        (r[(r.WATCH_VIDEO = 2)] = "WATCH_VIDEO"),
        (r[(r.PLAY_CONSOLE = 3)] = "PLAY_CONSOLE"),
        (r[(r.PLAY_DESKTOP_CONSOLE = 4)] = "PLAY_DESKTOP_CONSOLE"),
        (r[(r.PLAY_ACTIVITY = 5)] = "PLAY_ACTIVITY");
      let d = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
      ];
      t.Z = function (e) {
        let { onSelect: t, taskDuration: n = 10, taskConfig: o } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(i.FormItem, {
              children: [
                (0, s.jsx)(i.FormTitle, {
                  tag: i.FormTitleTags.H5,
                  children: "Task Type(s)",
                }),
                (0, s.jsx)(i.FormText, {
                  children: (0, s.jsx)(i.Select, {
                    className: c.taskPresetSelect,
                    placeholder: "Select Task Preset",
                    options: d,
                    renderOptionValue: (e) =>
                      e.map((e) =>
                        (0, s.jsx)("div", { children: e.label }, e.value),
                      ),
                    renderOptionLabel: (e) =>
                      (0, s.jsx)("div", { children: e.label }),
                    isSelected: (e) =>
                      e ===
                      (function (e) {
                        let t =
                            a.X.PLAY_ON_PLAYSTATION in e ||
                            a.X.PLAY_ON_XBOX in e,
                          n =
                            a.X.PLAY_ON_DESKTOP in e ||
                            a.X.PLAY_ON_DESKTOP_V2 in e,
                          o = a.X.STREAM_ON_DESKTOP in e,
                          r = a.X.WATCH_VIDEO in e,
                          s = a.X.PLAY_ACTIVITY in e;
                        return t && n
                          ? 4
                          : t
                            ? 3
                            : n
                              ? 0
                              : o
                                ? 1
                                : r
                                  ? 2
                                  : s
                                    ? 5
                                    : void 0;
                      })(o.tasks),
                    select: (e) => {
                      t({
                        ...o,
                        tasks: (function (e, t) {
                          let n = [];
                          switch (e) {
                            case 1:
                              n = [a.X.STREAM_ON_DESKTOP];
                              break;
                            case 0:
                              n = [a.X.PLAY_ON_DESKTOP];
                              break;
                            case 3:
                              n = [a.X.PLAY_ON_PLAYSTATION, a.X.PLAY_ON_XBOX];
                              break;
                            case 4:
                              n = [
                                a.X.PLAY_ON_DESKTOP,
                                a.X.PLAY_ON_PLAYSTATION,
                                a.X.PLAY_ON_XBOX,
                              ];
                              break;
                            case 2:
                              n = [a.X.WATCH_VIDEO];
                              break;
                            case 5:
                              n = [a.X.PLAY_ACTIVITY];
                          }
                          let o = {};
                          for (let e of n)
                            o[e] = { eventName: e, target: t, externalIds: [] };
                          return o;
                        })(e, n),
                      });
                    },
                    serialize: String,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)(i.FormItem, {
              children: [
                (0, s.jsx)(i.FormTitle, {
                  tag: i.FormTitleTags.H5,
                  children: "Task Duration",
                }),
                (0, s.jsx)(i.FormText, {
                  children: (0, s.jsx)(i.TextInput, {
                    value: String(n / l.Z.Seconds.MINUTE),
                    onChange: function (e) {
                      let n = Number(e);
                      if (isNaN(n)) return;
                      n *= l.Z.Seconds.MINUTE;
                      let r = { ...o.tasks };
                      for (let [e, t] of Object.entries(r))
                        r[e] = { ...t, target: n };
                      t({ ...o, tasks: r });
                    },
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    815183: function (e, t, n) {
      var o = n(200651);
      n(192379);
      var r = n(481060),
        s = n(153867),
        a = n(410030),
        i = n(583901),
        l = n(231338);
      t.Z = function () {
        let e = (0, a.ZP)();
        return (0, o.jsxs)(r.FormItem, {
          children: [
            (0, o.jsx)(r.FormTitle, {
              tag: r.FormTitleTags.H5,
              children: "Theme",
            }),
            (0, o.jsxs)("div", {
              style: { display: "flex", justifyContent: "space-between" },
              children: [
                (0, o.jsx)(i.bD, {
                  theme: l.BR.LIGHT,
                  isSelected: e === l.BR.LIGHT,
                  onSelect: () => (0, s.ZI)({ theme: l.BR.LIGHT }),
                }),
                (0, o.jsx)(i.bD, {
                  theme: l.BR.DARK,
                  isSelected: e === l.BR.DARK,
                  onSelect: () => (0, s.ZI)({ theme: l.BR.DARK }),
                }),
              ],
            }),
          ],
        });
      };
    },
    899457: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      var o,
        r,
        s = n(200651);
      n(192379);
      var a = n(481060);
      ((o = r || (r = {}))[(o.UNENROLLED = 0)] = "UNENROLLED"),
        (o[(o.ENROLLED = 1)] = "ENROLLED"),
        (o[(o.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (o[(o.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (o[(o.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (o[(o.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (o[(o.CLAIMED = 6)] = "CLAIMED");
      t.Z = function (e) {
        let { onChange: t, value: n } = e;
        return (0, s.jsxs)(a.FormItem, {
          children: [
            (0, s.jsx)(a.FormTitle, {
              tag: a.FormTitleTags.H5,
              children: "User State",
            }),
            (0, s.jsx)(a.FormText, {
              children: (0, s.jsx)(a.Select, {
                "aria-label": "User State",
                options: [
                  { label: "Unenrolled", value: 0 },
                  { label: "Enrolled", value: 1 },
                  { label: "25% Complete", value: 2 },
                  { label: "50% Complete", value: 3 },
                  { label: "75% Complete", value: 4 },
                  { label: "100% Complete", value: 5 },
                  { label: "Claimed", value: 6 },
                ],
                isSelected: (e) => e === n,
                select: t,
                serialize: String,
              }),
            }),
          ],
        });
      };
    },
    458708: function (e, t, n) {
      var o, r;
      n.d(t, {
        r: function () {
          return o;
        },
      }),
        ((r = o || (o = {})).AND = "and"),
        (r.OR = "or");
    },
    14943: function (e, t, n) {
      e.exports = {
        fileUploadButton: "fileUploadButton_aef0dd",
        fileUpload: "fileUpload_aef0dd " + n("921382").container,
        fileUploadInput: "fileUploadInput_aef0dd " + n("921382").input,
      };
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
    839434: function (e, t, n) {
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
    102787: function (e, t, n) {
      e.exports = {
        heading: "heading_e92711",
        subheading: "subheading_e92711",
        componentPreviews: "componentPreviews_e92711",
        componentPreviewWrapper: "componentPreviewWrapper_e92711",
        componentPreviewWrapperBordered:
          "componentPreviewWrapperBordered_e92711",
        componentPreview: "componentPreview_e92711",
        questBarPreviewWrapper: "questBarPreviewWrapper_e92711",
        questBarPreview: "questBarPreview_e92711",
        questChannelCallHeaderPreview: "questChannelCallHeaderPreview_e92711",
        toggleSwitch: "toggleSwitch_e92711",
        fields: "fields_e92711",
        swatchContainer: "swatchContainer_e92711",
        swatchIcon: "swatchIcon_e92711",
        errorBoundary: "errorBoundary_e92711",
        errorBoundaryIcon: "errorBoundaryIcon_e92711",
        headingWithTooltip: "headingWithTooltip_e92711",
        errorMessageWrapper: "errorMessageWrapper_e92711",
        errorMessage: "errorMessage_e92711",
        questTile: "questTile_e92711",
      };
    },
    416457: function (e, t, n) {
      e.exports = { taskPresetSelect: "taskPresetSelect_eb7367" };
    },
    921382: function (e, t, n) {
      n.r(
        (e.exports = {
          container: "container_c67e31",
          layout: "layout_c67e31",
          base: "base_c67e31",
          hiddenMessage: "hiddenMessage_c67e31 base_c67e31",
          input: "input_c67e31 base_c67e31",
          button: "button_c67e31",
          disabled: "disabled_c67e31",
        }),
      );
    },
  },
]);
//# sourceMappingURL=514b07098ad77ad9a043.js.map
