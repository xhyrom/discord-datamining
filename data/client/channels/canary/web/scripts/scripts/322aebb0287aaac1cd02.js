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
        let { text: t, quest: n } = e;
        return (0, o.jsx)(l.Clickable, {
          className: h.showConnectionsButton,
          onClick: () => {
            (0, u._3)({
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
          return A;
        },
      }),
        n(47120);
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(752877),
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
      function A(e) {
        var t, n;
        let { quest: s } = e,
          x = (0, h.T)({ quest: s, location: N.dr.QUESTS_BAR }),
          A = (0, g.Zy)({ location: N.dr.QUESTS_BAR }),
          y = (0, j.qN)({ quest: s, location: N.dr.QUESTS_BAR }),
          R = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
          w = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
          I =
            (null === (t = s.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          k = (0, d.Z)(I),
          q =
            (null === (n = s.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          P = (0, d.Z)(q),
          { hasError: M, isLoading: O } = (0, v.d7)(),
          W = r.useContext(E.T) || (A && y && !O),
          L = r.useRef(W),
          Q = (0, b.B)(s, W && !M),
          Z = r.useRef(-1),
          D = r.useRef(!1),
          [V, H] = r.useState(!1),
          [U, z] = r.useState(!1),
          [F, G] = r.useState(!0),
          [Y, K] = r.useState(!0),
          [X, J] = r.useState(Q.preEnrollmentExpandedHeight),
          $ = r.useRef(null),
          ee = r.useCallback((e) => {
            G(!1), z(e);
          }, []),
          et = r.useCallback(() => {
            var e, t;
            J(
              (null !==
                (t =
                  null === (e = $.current) || void 0 === e
                    ? void 0
                    : e.offsetHeight) && void 0 !== t
                ? t
                : 84) +
                2 * Q.paddingVertical,
            );
          }, [Q.paddingVertical]),
          en = r.useCallback(() => {
            et(), ee(!0);
          }, [et, ee]),
          eo = r.useCallback(() => {
            H(!0);
          }, []),
          er = r.useCallback(() => {
            H(!1), !D.current && !q && ee(!1);
          }, [q, ee]),
          es = r.useCallback(() => {
            H(!1), !q && ee(!1), (D.current = !1);
          }, [q, ee]),
          ea = r.useCallback(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (U) return;
              let { withDelay: t = !1 } = e;
              t ? (Z.current = window.setTimeout(en, 75)) : en();
            },
            [en, U],
          ),
          ei = r.useCallback(() => {
            ea();
          }, [ea]),
          el = r.useCallback(() => {
            if ((window.clearTimeout(Z.current), !!Q.canCollapseOnBlur && !V))
              !D.current && ee(!1);
          }, [V, Q, ee]),
          ec = r.useCallback(() => {
            (0, m.dA)({
              questId: s.id,
              event: B.rMx.QUEST_HOVER,
              properties: (0, m.mH)(f.jn.QUEST_BAR),
            }),
              (D.current = !0),
              ea({ withDelay: !0 });
          }, [ea, s]),
          ed = r.useCallback(() => {
            (0, m.dA)({
              questId: s.id,
              event: B.rMx.QUEST_HOVER_OFF,
              properties: (0, m.mH)(f.jn.QUEST_BAR),
            }),
              (D.current = !1),
              el();
          }, [el, s]);
        r.useLayoutEffect(() => {
          q && Q.shouldExpandOnQuestComplete && en();
        }, [en, q, Q.shouldExpandOnQuestComplete]),
          r.useLayoutEffect(() => {
            I && !k && D.current && en();
          }, [en, I, k]),
          r.useLayoutEffect(() => {
            !q && I && !k && !D.current && ee(!1);
          }, [I, q, k, ee]),
          r.useLayoutEffect(() => {
            W !== L.current && K(!1), (L.current = W);
          }, [W]);
        let eu = I ? N.XZ : N.R4,
          [{ expansionSpring: ep }, em] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: eu,
            onRest: () => {
              G(!0);
            },
            onStart: () => {
              G(!1);
            },
          }));
        r.useEffect(() => {
          em({ expansionSpring: U ? 1 : 0, immediate: R });
        }, [U, em, R]);
        let { visibilitySpring: ex } = (0, c.useSpring)({
          from: { visibilitySpring: 0 },
          to: { visibilitySpring: W ? 1 : 0 },
          config: { tension: 250, friction: 10, clamp: !0 },
          onRest: () => {
            K(!0);
          },
          onStart: () => {
            K(!1);
          },
        });
        return (r.useLayoutEffect(() => {
          q && !P && Q.canCollapseOnBlur && et();
        }, [q, en, Q.canCollapseOnBlur, et, P]),
        r.useEffect(() => {
          M &&
            (0, m.dA)({
              questId: s.id,
              event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
              properties: {
                ...(0, m.mH)(f.jn.QUEST_BAR),
                reason: "asset_loading_error",
              },
            }),
            !A &&
              (0, m.dA)({
                questId: s.id,
                event: B.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                  ...(0, m.mH)(f.jn.QUEST_BAR),
                  reason: "not_eligible_for_quest",
                },
              });
        }, [M, A, s.id]),
        A && (W || !Y || O) && !M)
          ? (0, o.jsx)(C.A, {
              questOrQuests: s,
              questContent: Q.trackingCtx.content,
              overrideVisibility: !w && W,
              children: () => {
                let e = Q.component;
                return (0, o.jsxs)("div", {
                  className: T.mask,
                  children: [
                    W && (0, o.jsx)(S, { questId: s.id, isExpanded: U }),
                    (0, o.jsx)(i.animated.div, {
                      "aria-hidden": !W,
                      onMouseLeave: ed,
                      onMouseEnter: ec,
                      onFocus: ei,
                      onBlur: el,
                      className: a()(T.wrapper, {
                        [T.wrapperInvisible]: !W,
                        [T.wrapperVisible]: W && Y,
                      }),
                      style: {
                        color: s.config.colors.secondary,
                        height: ex.to({
                          range: [0, 1],
                          output: [0, !Q.canCollapseOnBlur && U ? X : 70],
                        }),
                      },
                      children: (0, o.jsx)(i.animated.div, {
                        className: a()(T.contentWrapper, {
                          [T.contentWrapperExpanded]: U,
                          [T.contentWrapperAccepted]: I,
                        }),
                        style: {
                          backgroundColor: Q.preEnrollmentBackgroundColor,
                          backgroundImage: I
                            ? Q.postEnrollmentBackgroundImage
                            : void 0,
                        },
                        children: (0, o.jsx)(_.t, {
                          springConfig: eu,
                          isExpanded: U,
                          children: (0, o.jsx)(e, {
                            expandedContentRef: $,
                            expansionSpring: ep,
                            isExpanded: U,
                            isExpansionAnimationComplete: F,
                            onCtxMenuClosed: er,
                            onCtxMenuOpened: eo,
                            onCtxMenuSelection: es,
                            quest: s,
                            useReducedMotion: R,
                            collapsedHeight: 70,
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
              : !A && x.log("Not rendered due to ineligibility"),
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
                      children: (0, o.jsx)(A, { quest: e }),
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
        s = n(752877),
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
        i = n(752877),
        l = n(481060),
        c = n(617136),
        d = n(497505),
        u = n(918701),
        p = n(685613),
        m = n(64141),
        x = n(341907),
        f = n(303385),
        g = n(388032),
        h = n(626094);
      t.Z = (e) => {
        let {
            quest: t,
            expansionSpring: n,
            onCtxMenuSelect: s,
            onCtxMenuOpen: C,
            onCtxMenuClose: v,
            useReducedMotion: j,
            isExpanded: _,
            isExpansionAnimationComplete: b,
          } = e,
          E = r.useCallback(() => {
            (0, x.openDisclosureModal)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_DISCLOSURE,
            });
          }, [t]),
          N = r.useCallback(() => {
            (0, u.FE)(t, {
              content: d.jn.QUEST_BAR_V2,
              ctaContent: c.jZ.OPEN_GAME_LINK,
            });
          }, [t]),
          B = _ && b,
          T = (0, o.jsx)(l.Clickable, {
            onClick: N,
            className: a()(h.clickable, { [h.logo]: B }),
            children: (0, o.jsx)(p.ZP, {
              quest: t,
              logotypeClassName: a()(h.rewardHighlightLogotype),
              withGameTile: !1,
            }),
          });
        return (0, o.jsxs)(i.animated.div, {
          className: a()(h.wrapper, h.rewardHighlightWrapper, {
            [h.interactable]: B,
          }),
          style: {
            transform: (0, i.to)(
              [n.to({ range: [0, 1], output: [8, 0] })],
              (e) => "translateY(".concat(e, "px"),
            ),
          },
          children: [
            (0, o.jsx)(i.animated.div, {
              className: h.opaqueExpandedBackground,
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
            (0, o.jsx)(f.Z, {
              quest: t,
              expansionSpring: n,
              isFullyExpanded: B,
              partnerBranding: T,
              useReducedMotion: j,
            }),
            (0, o.jsxs)(i.animated.div, {
              className: h.promotedBadgeWrapper,
              style: { opacity: n.to({ range: [0, 1], output: [0, 1] }) },
              children: [
                (0, o.jsxs)(l.Clickable, {
                  className: h.promotedBadge,
                  onClick: E,
                  children: [
                    (0, o.jsx)(l.Text, {
                      color: "always-white",
                      variant: "text-xs/normal",
                      children: g.intl.string(g.t.o6FLcH),
                    }),
                    (0, o.jsx)(l.CircleQuestionIcon, {
                      color: l.tokens.colors.WHITE,
                      className: h.promotedBadgeIcon,
                    }),
                  ],
                }),
                (0, o.jsx)(m.r, {
                  onOpen: C,
                  onClose: v,
                  onSelect: s,
                  questContent: d.jn.QUEST_BAR_V2,
                  quest: t,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: (e) =>
                    (0, o.jsx)(l.Clickable, {
                      ...e,
                      className: h.submenuWrapper,
                      "aria-label": g.intl.string(g.t.DEoVWV),
                      children: (0, o.jsx)(l.MoreHorizontalIcon, {
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
      var o = n(200651),
        r = n(192379),
        s = n(995295),
        a = n(752877),
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
          return j;
        },
        yD: function () {
          return b;
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
        f = n(388032),
        g = n(977174);
      function h(e) {
        let { quest: t, taskDetails: n } = e;
        return (0, o.jsx)(a.Button, {
          className: g.cta,
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
            className: g.cta,
            size: a.Button.Sizes.SMALL,
            onClick: () =>
              (0, c.FE)(t, {
                content: l.jn.QUEST_BAR_V2,
                ctaContent: i.jZ.OPEN_GAME_LINK,
              }),
            children: (0, c.pO)(t)
              ? f.intl.string(f.t.hvVgAQ)
              : f.intl.string(f.t.lwQdjI),
          });
        },
        v = (e) => {
          let { quest: t } = e;
          return (0, o.jsx)(a.Button, {
            fullWidth: !0,
            className: g.cta,
            onClick: () =>
              (0, c.gI)(
                { quest: t },
                {
                  content: l.jn.QUEST_BAR_V2,
                  ctaContent: i.jZ.CONNECT_CONSOLE,
                },
              ),
            size: a.Button.Sizes.SMALL,
            children: f.intl.string(f.t.csptqa),
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
            className: s()(g.cta, i),
            buttonShineClassName: g.shine,
            ...d,
            children: null != c ? c : f.intl.string(f.t.cfY4PD),
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
            f =
              (null === (t = n.userStatus) || void 0 === t
                ? void 0
                : t.completedAt) != null,
            g = (0, d.P)({ location: x.dr.QUESTS_BAR }),
            _ = (0, c.q8)(n);
          if (f)
            return (0, o.jsx)(j, {
              quest: n,
              useReducedMotion: r,
              isExpanded: s,
            });
          if (_) return (0, o.jsx)(h, { quest: n, taskDetails: m });
          if (p === l.LI.CONSOLE && a && !g) return (0, o.jsx)(v, { quest: n });
          else if (p !== l.LI.SELECT && !i && !u)
            return (0, o.jsx)(C, { quest: n });
          return null;
        };
      function b(e) {
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
        i = n(752877),
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
        c = n(752877),
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
          A = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
          y = (0, u.Z)(A),
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
            !A &&
            y &&
            setTimeout(() => {
              E(), M();
            }, 200);
        }, [N, y, A, E, M]),
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
        m = n(111382),
        x = n(113434),
        f = n(497505),
        g = n(918701),
        h = n(566078),
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
          s = (0, m.n)(),
          l = (0, C.k3)(t.id, f.jn.QUEST_BAR_V2),
          d = (0, C.g2)({ useReducedMotion: n }),
          {
            errorHints: v,
            startingConsoleQuest: b,
            startConsoleQuest: N,
          } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
              (0, p._3)({
                questId: t.id,
                questContent: f.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.DEFIBRILLATOR,
              }),
                d.startAnimation();
            },
            afterRequest: d.stopAnimation,
          }),
          { header: B, renderBody: T } = r.useMemo(() => {
            let e = v.length > 0,
              n = h.r.build(t.config).application.name;
            return {
              header: e
                ? j.intl.formatToPlainString(j.t["28Ql29"], { gameTitle: n })
                : j.intl.formatToPlainString(j.t.gX0Qc3, { gameTitle: n }),
              renderBody: e
                ? () =>
                    (0, o.jsx)(o.Fragment, {
                      children: v.map((e, n) => {
                        if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                          let r = u.Z.getAccount(
                              e.connected_account_id,
                              e.connected_account_type,
                            ),
                            s = (0, g.C9)(e),
                            a = (0, g._j)(e);
                          return (0, o.jsx)(
                            E,
                            {
                              children: j.intl.format(s, {
                                account_name: null == r ? void 0 : r.name,
                                onClick: () => {
                                  (0, g.fY)(
                                    { quest: t, platformType: a },
                                    {
                                      content: f.jn.QUEST_BAR,
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
          }, [t, v, s]);
        return (0, o.jsxs)("div", {
          className: _.microphoneUnit,
          children: [
            (0, o.jsxs)("div", {
              className: _.microphoneUnitHeader,
              children: [
                (0, o.jsx)(c.CircleWarningIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: 0 === v.length ? _.warningCircle : _.errorCircle,
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
                T(),
                0 === v.length ? null : (0, o.jsx)(E, { children: l }),
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
          a = (0, x.z6)(),
          {
            steps: i,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m,
          } = r.useMemo(() => {
            var e;
            let r = a.xboxAndPlaystationAccounts.length > 0,
              s = r && (0, g.Bz)(t),
              i = h.r.build(t.config).application.name,
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
        i = n(752877),
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
        i = n(752877),
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
        j = n(988303),
        _ = n(665430),
        b = n(585500),
        E = n(475595),
        N = n(720293),
        B = n(644646),
        T = n(78826),
        S = n(64141),
        A = n(341907),
        y = n(693900),
        R = n(164495),
        w = n(759853),
        I = n(205511),
        k = n(694802),
        q = n(95985),
        P = n(50476),
        M = n(658590),
        O = n(46140),
        W = n(743294),
        L = n(388032),
        Q = n(748628);
      function Z(e) {
        var t;
        let {
            quest: n,
            onClick: s,
            containerClassName: i,
            imgClassName: l,
            reducedMotion: c,
          } = e,
          [m, x] = r.useState(!1),
          f = r.useRef(null),
          g = (0, N.z)(N.i.QUEST_BAR_PREVIEW_VIDEO, n),
          h = (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, n),
          C = (0, v.km)((e) => e.getVideoProgressState);
        r.useEffect(() => {
          null != f.current &&
            (c && m && (f.current.currentTime = 0), f.current.play());
        }, [f, m, c]);
        let j = C(n.id),
          _ =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null && j === v.iw.COMPLETED,
          b = !_ && (!c || m);
        return (0, o.jsxs)(u.Clickable, {
          className: a()(Q.videoQuestPreviewCont, i),
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
                className: a()(Q.assetBodyVideoPreviewMedia, l),
              }),
            null != g
              ? (0, o.jsx)(p.Z, {
                  ref: f,
                  autoPlay: !0,
                  poster: null == h ? void 0 : h.url,
                  loop: !0,
                  muted: !0,
                  playsInline: !0,
                  className: a()(
                    Q.assetBodyVideoPreviewMedia,
                    Q.assetBodyVideoPreviewVideo,
                    { [Q.assetBodyVideoPreviewVisible]: b },
                  ),
                  controls: !1,
                  children: (0, o.jsx)("source", {
                    src: g.url,
                    type: g.mimetype,
                  }),
                })
              : null,
            (0, o.jsx)("div", {
              className: Q.previewPlayButtonCont,
              children: _
                ? (0, o.jsx)(u.RetryIcon, {
                    color: d.Z.colors.WHITE,
                    className: Q.previewPlayButton,
                  })
                : (0, o.jsx)(u.PlayIcon, {
                    color: d.Z.colors.WHITE,
                    className: Q.previewPlayButton,
                  }),
            }),
          ],
        });
      }
      function D(e) {
        let { quest: t } = e;
        return (0, o.jsx)(B.Z, {
          className: a()(Q.rewardTile, Q.hiddenRewardTile),
          learnMoreStyle: "text",
          quest: t,
          questContent: h.jn.QUEST_BAR_V2,
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
          f = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
          v = r.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]),
          _ = r.useRef(null),
          { primaryVariant: N } = j.u.useExperiment(
            { location: O.dr.QUESTS_BAR },
            { autoTrackExposure: !1 },
          ),
          B = (0, b.D)({
            quest: t,
            location: O.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: N === j.P.V2 || (0, M.a)(t),
          });
        r.useEffect(() => {
          null != _.current &&
            (l && m
              ? (_.current.pause(), (_.current.currentTime = 0))
              : !l && m && _.current.play());
        }, [l, m]);
        let S = (0, C.q8)(t)
          ? L.intl.string(L.t.umdNio)
          : L.intl.string(L.t.l7E81t);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)("div", {
              children: (0, o.jsxs)("div", {
                className: Q.questPromoContent,
                ref: d,
                children: [
                  (0, o.jsxs)("div", {
                    className: Q.details,
                    children: [
                      (0, o.jsx)(D, { quest: t }),
                      (0, o.jsx)(u.Heading, {
                        className: Q.title,
                        variant: "heading-md/medium",
                        children: L.intl.format(L.t.EQa7oq, {
                          questName: t.config.messages.questName,
                        }),
                      }),
                      (0, o.jsx)(u.Text, {
                        className: Q.description,
                        variant: "text-xs/normal",
                        children: B,
                      }),
                    ],
                  }),
                  (0, o.jsx)(u.Button, {
                    className: Q.cta,
                    color: u.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: a ? x : void 0,
                    size: u.Button.Sizes.SMALL,
                    submitting: f,
                    children: S,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)(i.animated.div, {
              className: Q.heroAssetWrapper,
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
                  className: Q.heroAssetDarken,
                  style: { opacity: s.to([0, 1], [1, 0]) },
                }),
                (0, o.jsx)(i.animated.div, {
                  className: Q.heroAssetTint,
                  style: {
                    backgroundColor: t.config.colors.primary,
                    opacity: s.to([0, 1], [1, 0]),
                  },
                }),
                v.isAnimated
                  ? (0, o.jsx)(T.Fl, {
                      id: "QuestBarV2ContentExpanded_heroAnimated",
                      children: (e) => {
                        var t;
                        return (
                          null != e.current && (_.current = e.current),
                          (0, o.jsx)(p.Z, {
                            ref: e,
                            autoPlay: !l && m,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: Q.heroAsset,
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
                  : (0, o.jsx)(T.Fl, {
                      id: "QuestBarV2ContentExpanded_heroStatic",
                      children: (e) =>
                        (0, o.jsx)("img", {
                          ref: e,
                          alt: "",
                          className: Q.heroAsset,
                          src: v.url,
                        }),
                    }),
                (0, o.jsx)(i.animated.div, {
                  className: Q.legibilityGradient,
                  style: { opacity: s.to({ range: [0, 1], output: [0, 1] }) },
                }),
              ],
            }),
          ],
        });
      }
      function H(e) {
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
            onCtxMenuSelect: j,
          } = e,
          b =
            (null === (t = n.userStatus) || void 0 === t
              ? void 0
              : t.completedAt) != null,
          E = s.percentComplete > 0,
          N = (0, f.z)(n),
          [B, T, M] = (0, f.me)(n, s),
          D = (0, _.pF)({ location: O.dr.QUESTS_BAR }),
          V = r.useRef(null),
          H = (0, f.B6)(n.config.expiresAt),
          U = (0, f._s)({ quest: n }),
          z = (0, C.q8)(n),
          F = r.useCallback(() => {
            (0, A.openVideoQuestModal)(n);
          }, [n]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(i.animated.div, {
              className: a()(
                Q.postEnrollmentBackground,
                Q.postEnrollmentBackgroundCollapsed,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(W.aY, ", ")
                  .concat(W.v6, ")"),
                opacity: c.to({ range: [0, 1], output: [1, 0] }),
              },
            }),
            (0, o.jsxs)("div", {
              className: Q.questAcceptedContent,
              ref: x,
              children: [
                (0, o.jsxs)("div", {
                  className: Q.questAcceptedHeader,
                  children: [
                    (0, o.jsx)(u.Text, {
                      variant: "text-xxs/medium",
                      className: a()(Q.flex, Q.headerText),
                      children: L.intl.format(L.t["pX+fmp"], {
                        expirationDate: H,
                      }),
                    }),
                    (0, o.jsx)(S.r, {
                      onOpen: g,
                      onClose: v,
                      onSelect: j,
                      questContent: h.jn.QUEST_BAR_V2,
                      quest: n,
                      shouldShowDisclosure: !1,
                      showShareLink: !0,
                      children: (e) =>
                        (0, o.jsx)(u.Clickable, {
                          ...e,
                          className: Q.submenuWrapper,
                          "aria-label": L.intl.string(L.t.DEoVWV),
                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: a()(Q.submenuIcon, Q.interactiveNormal),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, o.jsx)("div", { className: Q.divider }),
                (0, o.jsx)(w.Z, {
                  expansionSpring: c,
                  overlayRef: d,
                  progressBarRef: V,
                  quest: n,
                  isExpanded: p,
                }),
                (0, o.jsx)(q.Z, {
                  contentLocation: "expanded",
                  quest: n,
                  progressBarRef: V,
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
                        (0, o.jsx)(P.Z, {
                          onConsole: () => M(O.cd.CONSOLE),
                          onDesktop: () => M(O.cd.DESKTOP),
                        }),
                      )
                      .with(h.LI.DESKTOP, () => (0, o.jsx)(k.Z, { quest: n }))
                      .with(h.LI.CONSOLE, () =>
                        (0, o.jsx)(I.Z, { quest: n, taskDetails: s }),
                      )
                      .exhaustive(),
                }),
                (0, o.jsxs)(y.n, {
                  children: [
                    z &&
                      (0, o.jsx)(Z, {
                        quest: n,
                        onClick: F,
                        containerClassName: Q.enrolledVideoPreview,
                        imgClassName: Q.enrolledVideoPreviewImg,
                        reducedMotion: m,
                      }),
                    (0, o.jsx)(R.yD, {
                      quest: n,
                      useReducedMotion: m,
                      isExpanded: p,
                      awaitingConsoleConnections: U,
                      hasMadeProgress: E,
                      isProgressing: N,
                      activeScreen: B,
                      showBackButton:
                        B !== h.LI.SELECT && T.length > 1 && !E && !N && D,
                      onBack: () => M(null),
                      taskDetails: s,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: a()(
                Q.postEnrollmentBackground,
                Q.postEnrollmentBackgroundExpanded,
              ),
              style: {
                backgroundImage: "linear-gradient(90deg, "
                  .concat(W.aY, ", ")
                  .concat(W.v6, ")"),
              },
            }),
          ],
        });
      }
      let U = r.forwardRef(function (e, t) {
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
              N && (0, A.openVideoQuestModal)(_);
          }, [_, N]),
          T =
            (null === (n = _.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          S = d && u;
        return (0, o.jsxs)(i.animated.div, {
          "aria-hidden": !S,
          className: a()(l, Q.contentExpanded, {
            [Q.contentInteractable]: S,
            [Q.contentExpandedAccepted]: T,
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
                ? (0, o.jsx)(H, {
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
                : (0, o.jsx)(V, {
                    quest: _,
                    taskDetails: E,
                    expansionSpring: p,
                    isInteractable: S,
                    reducedMotion: b,
                    containerRef: t,
                    isExpanded: d,
                    onAcceptQuest: B,
                  }),
            }),
          ],
        });
      });
      t.Z = U;
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
      var r = n(752877),
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
        s = n(752877),
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
        a = n(752877),
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
        i = n(752877),
        l = n(442837),
        c = n(950104),
        d = n(780384),
        u = n(481060),
        p = n(70097),
        m = n(703656),
        x = n(358085),
        f = n(617136),
        g = n(272008),
        h = n(113434),
        C = n(569984),
        v = n(497505),
        j = n(918701),
        _ = n(865364),
        b = n(585500),
        E = n(475595),
        N = n(566078),
        B = n(340100),
        T = n(611855),
        S = n(644646),
        A = n(78826),
        y = n(64141),
        R = n(667105),
        w = n(46140),
        I = n(981631),
        k = n(701488),
        q = n(388032),
        P = n(502926);
      let M = r.forwardRef(function (e, t) {
        var n, s;
        let {
            children: _,
            className: M,
            collapsedHeight: W,
            expansionSpring: L,
            isExpanded: Q,
            isExpansionAnimationComplete: Z,
            onCtxMenuOpen: D,
            onCtxMenuClose: V,
            onCtxMenuSelect: H,
            quest: U,
            useReducedMotion: z,
          } = e,
          F = (0, l.e7)([C.Z], () => C.Z.isEnrolling(U.id), [U]),
          G = (0, h.B6)(U.config.expiresAt),
          Y = N.r.build(U.config),
          K = (0, h.B6)(Y.rewardsExpireAt),
          X = r.useMemo(() => (0, E.fh)(U, E.eC.HERO), [U]),
          J = (0, R.tP)(Y.application.id),
          $ = Y.features.has(w.S7.START_QUEST_CTA)
            ? f.jZ.START_QUEST
            : f.jZ.ACCEPT_QUEST,
          ee = Y.features.has(w.S7.START_QUEST_CTA)
            ? q.intl.string(q.t.E80Bdn)
            : q.intl.string(q.t.l7E81t),
          et = r.useCallback(() => {
            (0, g.AH)(U.id, {
              questContent: v.jn.QUEST_BAR,
              questContentCTA: $,
            }),
              Y.features.has(w.S7.START_QUEST_CTA) &&
                (0, m.uL)(I.Z5c.ACTIVITY_DETAILS(k.In), void 0);
          }, [U, $, Y.features]),
          en = (0, R.hf)({ quest: U, location: v.jn.QUEST_BAR }),
          eo = r.useCallback(() => {
            (0, j.FE)(U, {
              content: v.jn.QUEST_BAR,
              ctaContent: f.jZ.OPEN_GAME_LINK,
            });
          }, [U]),
          er = Y.features.has(w.S7.POST_ENROLLMENT_CTA),
          es = (0, h.Rf)(U),
          ea = (0, h.Jf)(U),
          ei = null != ea ? ea.progress > 0 : es.progressSeconds > 0,
          el =
            (null === (n = U.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          ec =
            (null === (s = U.userStatus) || void 0 === s
              ? void 0
              : s.completedAt) != null,
          ed = r.useMemo(() => (0, j.Xv)(U.config), [U.config]),
          eu = Q && Z,
          ep = (0, b.D)({
            quest: U,
            taskDetails: es,
            location: w.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0,
          }),
          em = (0, x.isWeb)(),
          ex = r.useMemo(() => {
            let e = (0, d.Qg)(U.config.colors.primary, {
              base: "#ffffff",
              contrastRatio: d.S3.Text,
            });
            return {
              "--custom-cta-color": e,
              "--custom-cta-color-hover": (0, c.r5)(e, 0.3),
              "--custom-cta-color-active": (0, c.r5)(e, 0.35),
            };
          }, [U.config.colors.primary]);
        return (0, o.jsxs)(i.animated.div, {
          className: a()(M, P.contentExpanded, { [P.contentInteractable]: eu }),
          style: {
            backgroundColor: U.config.colors.secondary,
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
                              (0, o.jsx)(S.Z, {
                                className: P.questProgressRewardTile,
                                learnMoreStyle: "icon",
                                quest: U,
                                questContent: v.jn.QUEST_BAR,
                                location: w.dr.QUESTS_BAR,
                              }),
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)(u.Heading, {
                                    color: "always-white",
                                    variant: "heading-sm/semibold",
                                    children: (0, j.AV)({
                                      quest: U,
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
                                          expirationDate: K,
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
                            onClose: V,
                            onSelect: H,
                            questContent: v.jn.QUEST_BAR,
                            quest: U,
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
                      (0, o.jsx)(B.Z, { quest: U }),
                      !em &&
                        !ei &&
                        !J &&
                        er &&
                        (0, o.jsx)(O, { onClick: eu ? eo : void 0 }),
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
                                onClose: V,
                                onSelect: H,
                                questContent: v.jn.QUEST_BAR,
                                quest: U,
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
                              (0, o.jsx)(S.Z, {
                                className: P.rewardTile,
                                learnMoreStyle: "text",
                                quest: U,
                                questContent: v.jn.QUEST_BAR,
                                location: w.dr.QUESTS_BAR,
                              }),
                              (0, o.jsx)(u.Heading, {
                                className: P.title,
                                color: "always-white",
                                variant: "heading-md/medium",
                                children: q.intl.format(q.t.EQa7oq, {
                                  questName: U.config.messages.questName,
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
                            style: "1232852290197655573" !== U.id ? ex : void 0,
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
                        style: { color: U.config.colors.secondary },
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
      function O(e) {
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
      t.Z = M;
    },
    623249: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
          openConsoleConnectionErrorsModal: function () {
            return B;
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
        f = n(497505),
        g = n(918701),
        h = n(475595),
        C = n(667105),
        v = n(981631),
        j = n(388032),
        _ = n(839434),
        b = n(708901);
      function E(e) {
        let { questId: t, errorHints: n, transitionState: s, onClose: E } = e,
          B = (0, x.B4)(t);
        null == B && E();
        let [T, S] = (0, r.useState)(n),
          A = (0, x.KX)(),
          y = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
          R = (0, C.g2)({ useReducedMotion: y, className: _.colorTransition }),
          w = T.filter((e) =>
            ["xbox", "playstation"].includes(e.connected_account_type),
          ),
          I = (0, g.Bz)(B),
          k = (0, i.e7)([p.Z], () => p.Z.getState().theme),
          q = (0, l.wj)(k) ? v.BRd.DARK : v.BRd.LIGHT,
          { startConsoleQuest: P, startingConsoleQuest: M } = (0, x.GI)({
            questId: B.id,
            beforeRequest: () => {
              R.startAnimation(),
                (0, m._3)({
                  questId: B.id,
                  questContent: f.jn.CONNECTIONS_MODAL,
                  questContentCTA: m.jZ.DEFIBRILLATOR,
                });
            },
            afterRequest: (e) => {
              R.stopAnimation(), S(e);
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
                        src: b,
                      }),
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                      className: _.closeBtn,
                      onClick: E,
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
                      className: a()(_.refreshWrapper, { [_.disabled]: M }),
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
                            "aria-label": B.config.messages.gameTitle,
                            text: () =>
                              (0, o.jsxs)("div", {
                                className: _.tooltip,
                                children: [
                                  (0, o.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: B.config.messages.gameTitle,
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
                                alt: B.config.messages.gameTitle,
                                src: (0, h.fh)(B, h.eC.GAME_TILE, q).url,
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
                  onClick: E,
                  className: _.footerCloseButton,
                  children: j.intl.string(j.t.cpT0Cg),
                }),
                (0, o.jsx)(c.Button, {
                  look: c.ButtonLooks.LINK,
                  color: c.ButtonColors.PRIMARY,
                  onClick: () => {
                    E(),
                      (0, g.V$)(
                        { quest: B },
                        {
                          content: f.jn.CONNECTIONS_MODAL,
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
      function B(e) {
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
          return f;
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
            contentPosition: f,
            rowIndex: g,
          } = e,
          [h, C] = r.useState(!1),
          [v, j] = r.useState([]),
          _ = (0, l.qb)(t),
          b = r.useCallback(() => {
            C(!0),
              (0, i.dA)({
                questId: t.id,
                event: m.rMx.QUEST_HOVER,
                properties: (0, i.mH)(s),
              });
          }, [C, s, t.id]),
          E = r.useCallback(() => {
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
          questContentPosition: f,
          questContentRowIndex: g,
          trackGuildAndChannelMetadata: s === c.jn.QUESTS_EMBED,
          children: (e) =>
            (0, o.jsxs)("div", {
              id: "quest-tile-".concat(t.id),
              ref: (t) => {
                e.current = t;
              },
              className: a()(x.container, n),
              onMouseEnter: b,
              onMouseLeave: E,
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
                  contentPosition: f,
                  rowIndex: g,
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
        c = n(752877),
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
        A = n(341907),
        y = n(642145),
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
            config: y.Y,
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
            onCtxMenuClose: y,
            onCtxMenuOpen: P,
            onCtxMenuSelect: M,
          } = e,
          O = (0, _.q8)(c),
          W = a.useMemo(() => (0, b.fh)(c, b.eC.HERO), [c]),
          L = (0, x.ZP)(),
          Q = ((0, u.wj)(L) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
          Z = a.useContext(d.S).reducedMotion.enabled,
          D = (0, _.Mi)(c, j.jn.GIFT_INVENTORY_FOR_YOU),
          V = (0, v.tP)(c),
          H =
            (null === (t = c.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          U = a.useRef(m),
          z = a.useRef(null),
          F = (0, v.B6)(c.config.expiresAt, {
            month: "numeric",
            day: "numeric",
          }),
          G =
            (null === (n = c.userStatus) || void 0 === n
              ? void 0
              : n.enrolledAt) != null,
          Y =
            (null === (o = c.userStatus) || void 0 === o
              ? void 0
              : o.completedAt) != null,
          K = a.useCallback(() => {
            if (!!O)
              !(0, _.zi)(c) &&
                !G &&
                (0, C.AH)(c.id, {
                  questContent: j.jn.QUEST_HOME_DESKTOP,
                  questContentCTA: h.jZ.ACCEPT_QUEST,
                }),
                (0, A.openVideoQuestModal)(c);
          }, [O, c, G]);
        a.useEffect(() => {
          if (W.isAnimated && null != z.current)
            return (
              U.current !== m &&
                (m && !Z
                  ? z.current.play()
                  : (z.current.pause(), (z.current.currentTime = 0))),
              (U.current = m),
              () => {
                var e;
                null === (e = z.current) || void 0 === e || e.pause();
              }
            );
        }, [m, W, Z]);
        let X = a.useMemo(() => (0, E.z)(E.i.QUEST_HOME_VIDEO, c), [c]);
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
                          null != e.current && (z.current = e.current),
                          (0, s.jsx)(g.Z, {
                            ref: e,
                            autoPlay: !Z && m,
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
                  !Z &&
                  null != X &&
                  (0, s.jsx)(q, {
                    asset: X,
                    reducedMotionEnabled: Z,
                    visible: m,
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className: l()(I.overlay, {
                [I.darkThemeGradient]: Q,
                [I.lightThemeGradient]: !Q,
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
                        D &&
                          !V &&
                          !H &&
                          (0, s.jsx)("div", {
                            className: I.pill,
                            children: (0, s.jsx)(p.Text, {
                              variant: "eyebrow",
                              color: "always-white",
                              className: I.eyebrowText,
                              children: w.intl.string(w.t.WThgAQ),
                            }),
                          }),
                        O &&
                          (0, s.jsx)(p.Tooltip, {
                            text: Y
                              ? w.intl.string(w.t.YsCuyM)
                              : G
                                ? w.intl.string(w.t["3PatS0"])
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
                          onClose: y,
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
                          color: Q ? "text-muted" : "always-white",
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
                        V || H
                          ? null
                          : (0, s.jsx)(p.Text, {
                              variant: "text-sm/medium",
                              color: Q ? "text-muted" : "always-white",
                              children: w.intl.format(w.t["7D8r4O"], {
                                expiryDate: F,
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
                  isDarkTheme: Q,
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
            rowIndex: A,
          } = e,
          y = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
          R = (0, f.g2)({ useReducedMotion: y }),
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
          M =
            (null === (t = N.userStatus) || void 0 === t
              ? void 0
              : t.enrolledAt) != null,
          O =
            (null === (n = N.userStatus) || void 0 === n
              ? void 0
              : n.completedAt) != null,
          W =
            O &&
            (null === (s = N.userStatus) || void 0 === s
              ? void 0
              : s.claimedAt) == null,
          L = (0, x.iQ)(N),
          Q = !(0, x.zi)(N),
          Z = (0, u._Q)(N),
          D = (0, x.Xv)(N.config),
          V = (0, x.q8)(N),
          H = (0, u.GU)(N),
          U = (0, u.Rf)(N),
          [z, F, G] = (0, u.me)(N, U),
          Y = Q && Z === u.OH.ACCEPTED,
          K = Y && z === m.LI.SELECT,
          X = Y && !K && F.length > 1,
          J = r.useCallback(
            (e) => {
              G(e), e === C.cd.DESKTOP && T([]);
            },
            [G, T],
          ),
          {
            text: $,
            onClick: ee,
            tooltipText: et,
          } = (0, f.Ks)({
            progressState: Z,
            quest: N,
            location: B,
            isCollectibleQuest: D,
            questContentPosition: S,
            questContentRowIndex: A,
            inGiftInventory: !0,
            isVideoQuest: V,
          }),
          { startingConsoleQuest: en, startConsoleQuest: eo } = (0, u.GI)({
            questId: N.id,
            beforeRequest: () => {
              R.startAnimation(),
                (0, d._3)({
                  questId: N.id,
                  questContent: B,
                  questContentCTA: d.jZ.DEFIBRILLATOR,
                  questContentPosition: S,
                  questContentRowIndex: A,
                });
            },
            afterRequest: (e) => {
              R.stopAnimation(), T(e);
            },
          }),
          er =
            (null === (E = N.userStatus) || void 0 === E
              ? void 0
              : E.claimedAt) != null,
          es = null;
        return (L && W
          ? (es = (0, o.jsx)(l.Button, {
              color: l.ButtonColors.BRAND,
              submitting: q,
              onClick: null != ee ? ee : void 0,
              className: j.button,
              children: $,
            }))
          : O
            ? (es = V
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
              ? H.length > 0
                ? (es = (0, o.jsx)(
                    l.TooltipContainer,
                    {
                      text: et,
                      className: j.buttonTooltip,
                      children: (0, o.jsx)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        disabled: !0,
                        className: j.button,
                        children: $,
                      }),
                    },
                    et,
                  ))
                : Q && W
                  ? (es = (0, o.jsx)(l.Button, {
                      color: l.ButtonColors.BRAND,
                      submitting: q,
                      onClick: null != ee ? ee : void 0,
                      className: j.button,
                      children: $,
                    }))
                  : Q && M && !er
                    ? (es = K
                        ? (0, o.jsx)(l.Select, {
                            className: j.platformSelectorPrimary,
                            isSelected: () => !1,
                            options: _,
                            placeholder: v.intl.string(v.t.drVw4e),
                            renderOptionLabel: b,
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
                                onClick: eo,
                                disabled: en,
                                className: j.button,
                                children: (0, o.jsxs)("div", {
                                  className: j.ctaInner,
                                  children: [
                                    R.render(),
                                    v.intl.string(v.t.nPThNT),
                                  ],
                                }),
                              })
                          : V
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
                      !M &&
                      (es = (0, o.jsx)(l.Button, {
                        submitting: P,
                        color: l.ButtonColors.BRAND,
                        onClick: null != ee ? ee : void 0,
                        className: j.button,
                        children: $,
                      }))
              : (es = (0, o.jsx)(l.Button, {
                  color: l.ButtonColors.PRIMARY,
                  disabled: !0,
                  className: j.button,
                  children: v.intl.format(v.t["14o6QU"], { expiryDate: k }),
                })),
        null == es)
          ? null
          : (0, o.jsxs)("div", {
              className: j.container,
              children: [
                es,
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
          return b;
        },
      });
      var o = n(200651),
        r = n(192379),
        s = n(120356),
        a = n.n(s),
        i = n(752877),
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
          A = m.r.build(b.config),
          y = A.defaultReward.messages.name,
          R = A.defaultReward.messages.nameWithArticle,
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
          Q = (0, p.Bd)(b),
          Z = r.useCallback(
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
                ? Z(y)
                : v.intl.format(v.t["0IUT4e"], {
                    rewardWithArticleHook: () => Z(R),
                  }),
            [y, R, O, Z],
          ),
          V = r.useMemo(() => {
            if (null != Q)
              return (0, o.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: a()(j.description),
                children: Q,
              });
          }, [Q]),
          H = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
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
                                shouldAnimate: !H,
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
                    V,
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
  },
]);
//# sourceMappingURL=322aebb0287aaac1cd02.js.map
