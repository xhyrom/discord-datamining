"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99707"],
  {
    64514(e) {
      e.exports = "/assets/1eb1b74667b4c0f0.svg";
    },
    121818(e) {
      e.exports = "/assets/983b60e4fcaf973b.svg";
    },
    288894(e) {
      e.exports = "/assets/cd2be35d285d4675.svg";
    },
    276666(e, t, i) {
      i.d(t, { RB: () => x, aB: () => p, x6: () => g });
      var s = i(636537),
        a = i(691540),
        n = i(857250),
        r = i(97483),
        l = i(228366),
        c = i(181658),
        d = i(545600),
        o = i(777376),
        u = i(652215),
        m = i(985018);
      function A() {
        let e = d.A.getRequestState();
        return e === o.Px.FETCHING || e === o.Px.CANCELLING;
      }
      async function p(e) {
        if (!A()) {
          l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
          try {
            let t = await s.Bo.post({
              url: u.Rsh.PARTNER_PERK(e),
              body: {},
              rejectWithError: !0,
            });
            return (
              l.h.dispatch({
                type: "CROISSANT_ACTIVATION_FETCH_SUCCESS",
                activationStatus: t.body,
              }),
              t.body
            );
          } catch {
            l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" }),
              (0, a.P0)((0, n.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE));
          }
        }
      }
      async function g(e) {
        if (!A()) {
          l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
          try {
            let t = await s.Bo.get({
              url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e),
              rejectWithError: !0,
            });
            return (
              l.h.dispatch({
                type: "CROISSANT_ACTIVATION_FETCH_SUCCESS",
                activationStatus: t.body,
              }),
              t.body
            );
          } catch (e) {
            10138 === new c.A(e).code
              ? l.h.dispatch({ type: "CROISSANT_ACTIVATION_RESET" })
              : l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" });
          }
        }
      }
      async function x(e) {
        if (!A()) {
          l.h.dispatch({ type: "CROISSANT_CANCELLATION_START" });
          try {
            await s.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
              l.h.dispatch({ type: "CROISSANT_CANCELLATION_SUCCESS" });
          } catch {
            l.h.dispatch({ type: "CROISSANT_CANCELLATION_FAILURE" }),
              (0, a.P0)((0, n.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE));
          }
        }
      }
    },
    545600(e, t, i) {
      i.d(t, { A: () => A });
      var s = i(17928),
        a = i(228366),
        n = i(777376),
        r = i(983060),
        l = i(788868);
      let c = null,
        d = n.Px.NOT_FETCHED;
      function o() {
        d === n.Px.NOT_FETCHED && (d = n.Px.FETCHED);
      }
      function u(e) {
        if (e.entitlement.sku_id !== r.X8) return !1;
        let t = (0, r.MM)(e.entitlement);
        (c =
          null == t
            ? null
            : {
                perk: n.n9.XGPP,
                state: t,
                entitlement_id: e.entitlement.id,
                redirect: null,
              }),
          o();
      }
      class m extends s.Ay.Store {
        static displayName = "CroissantActivationStore";
        getActivationStatus() {
          return c;
        }
        getRequestState() {
          return d;
        }
      }
      let A = new m(a.h, {
        CROISSANT_ACTIVATION_FETCH_START: function () {
          d = n.Px.FETCHING;
        },
        CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
          let { activationStatus: t } = e;
          (c = t), (d = n.Px.FETCHED);
        },
        CROISSANT_ACTIVATION_FETCH_FAILURE: function () {
          d = n.Px.FETCHED;
        },
        CROISSANT_CANCELLATION_START: function () {
          d = n.Px.CANCELLING;
        },
        CROISSANT_CANCELLATION_SUCCESS: function () {
          (c = {
            perk: c?.perk ?? n.n9.XGPP,
            state: n.gR.CANCELLATION_PENDING,
            entitlement_id: c?.entitlement_id ?? null,
            redirect: null,
          }),
            (d = n.Px.FETCHED);
        },
        CROISSANT_CANCELLATION_FAILURE: function () {
          d = n.Px.FETCHED;
        },
        CROISSANT_ACTIVATION_RESET: function () {
          (c = null), (d = n.Px.FETCHED);
        },
        ENTITLEMENT_CREATE: u,
        ENTITLEMENT_UPDATE: u,
        ENTITLEMENT_DELETE: function (e) {
          if (e.entitlement.sku_id !== r.X8) return !1;
          (c = null), o();
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function (e) {
          if (e.applicationId !== l.tv || 0 === e.entitlements.length)
            return !1;
          let t = null;
          for (let i of e.entitlements) {
            if (i.sku_id !== r.X8) continue;
            let e = (0, r.MM)(i);
            if (e === n.gR.ACTIVATED) {
              (c = {
                perk: n.n9.XGPP,
                state: n.gR.ACTIVATED,
                entitlement_id: i.id,
                redirect: null,
              }),
                o();
              return;
            }
            e === n.gR.CANCELLATION_PENDING && (t = i.id);
          }
          if (null == t) return !1;
          (c = {
            perk: n.n9.XGPP,
            state: n.gR.CANCELLATION_PENDING,
            entitlement_id: t,
            redirect: null,
          }),
            o();
        },
        LOGOUT: function () {
          (c = null), (d = n.Px.NOT_FETCHED);
        },
      });
    },
    985603(e, t, i) {
      i.d(t, {
        $p: () => o,
        A: () => m,
        FZ: () => c,
        XQ: () => d,
        xf: () => u,
      });
      var s,
        a = i(64700),
        n = i(688810),
        r = i(954571),
        l = i(652215);
      let c = "xbox",
        d = "thirdPartyPartnerPerk",
        o = "third_party_learn_more_xbox";
      var u =
        (((s = {}).CLAIM = "claim"),
        (s.PARTNER_PAGE_REDIRECT = "partner_page_redirect"),
        (s.CANCEL = "cancel"),
        s);
      function m() {
        let { analyticsLocations: e } = (0, n.Ay)();
        return a.useCallback(
          (t, i) => {
            r.default.track(l.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
              partner: c,
              cta_type: t,
              url: i ?? null,
              location_stack: e,
            });
          },
          [e],
        );
      }
    },
    777376(e, t, i) {
      i.d(t, {
        Nk: () => u,
        Px: () => c,
        gR: () => o,
        n9: () => d,
        p1: () => l,
      });
      var s,
        a,
        n,
        r,
        l =
          (((s = {}).NOT_CLAIMED = "NOT_CLAIMED"),
          (s.CLAIM_IN_PROGRESS = "CLAIM_IN_PROGRESS"),
          (s.CLAIMED = "CLAIMED"),
          (s.CANCELLATION_IN_PROGRESS = "CANCELLATION_IN_PROGRESS"),
          s),
        c =
          (((a = {}).NOT_FETCHED = "NOT_FETCHED"),
          (a.FETCHING = "FETCHING"),
          (a.FETCHED = "FETCHED"),
          (a.CANCELLING = "CANCELLING"),
          a),
        d = (((n = {})[(n.XGPP = 1)] = "XGPP"), n),
        o =
          (((r = {})[(r.INITIAL = 1)] = "INITIAL"),
          (r[(r.AWAITING_ACTIVATION = 2)] = "AWAITING_ACTIVATION"),
          (r[(r.ACTIVATED = 3)] = "ACTIVATED"),
          (r[(r.FAILED = 4)] = "FAILED"),
          (r[(r.EXPIRED = 5)] = "EXPIRED"),
          (r[(r.CANCELLATION_PENDING = 6)] = "CANCELLATION_PENDING"),
          r);
      function u(e) {
        return null != e && new Date(e.expires_at).getTime() > Date.now();
      }
    },
    758209(e, t, i) {
      i.d(t, { A: () => c });
      var s = i(64700),
        a = i(975807),
        n = i(276666),
        r = i(985603),
        l = i(777376);
      function c(e) {
        let t = (0, r.A)();
        return s.useCallback(async () => {
          if (null != e && (0, l.Nk)(e)) (0, a.A)(e.url, !0);
          else {
            let e = await (0, n.aB)(l.n9.XGPP);
            e?.redirect != null && (0, a.A)(e.redirect.url, !0);
          }
          t(r.xf.CLAIM);
        }, [e, t]);
      }
    },
    185797(e, t, i) {
      i.d(t, { F: () => g, L: () => p });
      var s,
        a = i(743368),
        n = i(975807),
        r = i(723702),
        l = i(985603),
        c = i(777376),
        d = i(758209),
        o = i(915418),
        u = i(674567),
        m = i(237146),
        A = i(985018),
        p = (((s = {}).DEFAULT = "default"), (s.SUBSCRIBE = "subscribe"), s);
      function g() {
        let e,
          t = (0, u.V)(),
          { status: i, requestInProgress: s, redirect: p } = (0, o.r)(),
          g = (0, d.A)(p),
          x = (0, l.A)();
        if (t === u.s.FREE_FRACTIONAL_NITRO)
          return { kind: "subscribe", text: A.intl.string(A.t.sEAnVH) };
        let N = (function (e) {
          switch (e) {
            case c.p1.NOT_CLAIMED:
            case c.p1.CLAIM_IN_PROGRESS:
              return { text: A.intl.string(m.default.EL3rU4) };
            case c.p1.CLAIMED:
              return {
                text: A.intl.string(m.default["0mQ2U6"]),
                icon: a.W,
                iconPosition: "end",
              };
            case c.p1.CANCELLATION_IN_PROGRESS:
              return { text: A.intl.string(m.default.wBz9aO), disabled: !0 };
          }
        })(i);
        if (i === c.p1.NOT_CLAIMED || i === c.p1.CLAIM_IN_PROGRESS)
          e = () => {
            g();
          };
        else if (i === c.p1.CLAIMED) {
          let t = (0, r.isWindows)() ? "msxbox://" : "https://xbox.com/play";
          e = () => {
            (0, n.A)(t), x(l.xf.PARTNER_PAGE_REDIRECT, t);
          };
        }
        return {
          kind: "default",
          claimStatus: i,
          requestInProgress: s,
          text: N.text,
          disabled: (N.disabled ?? !1) || s,
          loading: s,
          icon: N.icon,
          iconPosition: N.iconPosition,
          onClick: e,
        };
      }
    },
    915418(e, t, i) {
      i.d(t, { r: () => m });
      var s = i(64700),
        a = i(17928),
        n = i(469778),
        r = i(276666),
        l = i(545600),
        c = i(777376),
        d = i(674567),
        o = i(788868);
      let u = {
        [c.gR.INITIAL]: c.p1.CLAIM_IN_PROGRESS,
        [c.gR.AWAITING_ACTIVATION]: c.p1.CLAIM_IN_PROGRESS,
        [c.gR.ACTIVATED]: c.p1.CLAIMED,
        [c.gR.FAILED]: c.p1.NOT_CLAIMED,
        [c.gR.EXPIRED]: c.p1.NOT_CLAIMED,
        [c.gR.CANCELLATION_PENDING]: c.p1.CANCELLATION_IN_PROGRESS,
      };
      function m() {
        let e = (0, d.V)(),
          t = (0, a.bG)([n.A], () => n.A.isFetchedForApplication(o.tv)),
          { activationStatus: i, activationRequestState: m } = (0, a.cf)(
            [l.A],
            () => ({
              activationStatus: l.A.getActivationStatus(),
              activationRequestState: l.A.getRequestState(),
            }),
          ),
          A =
            t &&
            (null != i
              ? i.state === c.gR.CANCELLATION_PENDING
              : m === c.Px.NOT_FETCHED);
        return (
          s.useEffect(() => {
            e === d.s.NITRO && A && (0, r.x6)(c.n9.XGPP);
          }, [e, A]),
          (function (e) {
            let { activationStatus: t, activationRequestState: i } = e,
              s = i === c.Px.FETCHING || i === c.Px.CANCELLING;
            return i === c.Px.NOT_FETCHED || i === c.Px.FETCHING
              ? {
                  status: c.p1.NOT_CLAIMED,
                  redirect: null,
                  requestInProgress: !0,
                }
              : {
                  status: null != t ? u[t.state] : c.p1.NOT_CLAIMED,
                  redirect: t?.redirect ?? null,
                  requestInProgress: s,
                };
          })({ activationStatus: i, activationRequestState: m })
        );
      }
    },
    674567(e, t, i) {
      i.d(t, { V: () => d, s: () => c });
      var s,
        a = i(531260),
        n = i(757036),
        r = i(31502),
        l = i(788868),
        c =
          (((s = {})[(s.NONE = 0)] = "NONE"),
          (s[(s.NON_NITRO = 1)] = "NON_NITRO"),
          (s[(s.NITRO = 2)] = "NITRO"),
          (s[(s.FREE_FRACTIONAL_NITRO = 3)] = "FREE_FRACTIONAL_NITRO"),
          s);
      function d() {
        let e = (0, r.l)("userSettings.connections"),
          t = (0, n.L)(l.PremiumTypes.TIER_2),
          { fractionalState: i } = (0, a.A)();
        return e ? (t ? (i === l.xc.FP_ONLY ? 3 : 2) : 1) : 0;
      }
    },
    256599(e, t, i) {
      i.d(t, { A: () => j });
      var s = i(627968);
      i(64700);
      var a = i(503698),
        n = i.n(a),
        r = i(110259),
        l = i(192308),
        c = i(821609),
        d = i(885574),
        o = i(834730),
        u = i(43990),
        m = i(359778),
        A = i(534514),
        p = i(139286),
        g = i(872725),
        x = i(920050),
        N = i(792656),
        E = i(985603),
        h = i(777376),
        f = i(185797),
        R = i(652215),
        _ = i(788868),
        C = i(237146),
        I = i(985018),
        T = i(74776);
      function b() {
        (0, l.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            i.e("16848"),
            i.e("30221"),
            i.e("10622"),
            i.e("77632"),
          ]).then(i.bind(i, 836291));
          return (t) => (0, s.jsx)(e, { ...t });
        });
      }
      function S() {
        let e = (0, f.F)();
        if (e.kind === f.L.SUBSCRIBE)
          return (0, s.jsxs)("div", {
            className: T.R$,
            children: [
              (0, s.jsx)(N.A, {
                defaultTextOverride: e.text,
                variantOverride: "overlay-primary",
                size: "md",
                subscriptionTier: _.pe.TIER_2,
              }),
              (0, s.jsx)(c.$, {
                variant: "secondary",
                size: "md",
                text: I.intl.string(I.t.hvVgAZ),
                onClick: b,
              }),
            ],
          });
        let t =
          e.claimStatus === h.p1.CLAIMED
            ? { text: I.intl.string(C.default.Plwzgf) }
            : { text: I.intl.string(I.t.hvVgAZ) };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: T.R$,
              children: [
                (0, s.jsx)(c.$, {
                  variant: "overlay-primary",
                  size: "md",
                  text: e.text,
                  icon: e.icon,
                  iconPosition: e.iconPosition,
                  onClick: e.onClick,
                  disabled: e.disabled,
                  loading: e.loading,
                }),
                (0, s.jsx)(c.$, {
                  variant: "secondary",
                  size: "md",
                  ...t,
                  onClick: b,
                  disabled: e.requestInProgress,
                }),
              ],
            }),
            e.claimStatus === h.p1.CLAIM_IN_PROGRESS &&
              (0, s.jsxs)("div", {
                className: T.ed,
                children: [
                  (0, s.jsx)(d.m, { size: "xs", color: "var(--text-subtle)" }),
                  (0, s.jsx)(o.E, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: I.intl.string(C.default.Fs74z9),
                  }),
                ],
              }),
          ],
        });
      }
      function j(e) {
        let { glowing: t = !1 } = e;
        return (
          (0, p.A)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: {
              name: x.XBOX_PREMIUM_PERK_HERO_ID,
              third_party_partner: E.FZ,
            },
          }),
          (0, s.jsx)(u.N, {
            theme: R.NJ8.DARKER,
            children: (e) =>
              (0, s.jsx)("div", {
                className: n()(e, T.kL),
                children: (0, s.jsx)(g.A, {
                  cardType: m.s.CUSTOM,
                  cardClassName: T.Nr,
                  glowing: t,
                  hueRotate: 25,
                  glowAmount: 2,
                  blurAmount: 10,
                  children: (0, s.jsxs)("div", {
                    className: T.XF,
                    children: [
                      (0, s.jsxs)("div", {
                        className: T.j,
                        children: [
                          (0, s.jsx)("div", { className: T._g }),
                          (0, s.jsx)("div", { className: T.$h }),
                          (0, s.jsx)("div", { className: T.Rv }),
                          (0, s.jsx)("div", { className: T.Lw }),
                          (0, s.jsx)("div", { className: T.mR }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: T.Qs,
                        children: [
                          (0, s.jsx)("img", {
                            className: T.wm,
                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                            alt: "Xbox Game Pass",
                          }),
                          (0, s.jsx)(A.D, {
                            variant: "display-md",
                            color: "text-strong",
                            className: T.DD,
                            children: I.intl.string(C.default.RGT513),
                          }),
                          (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: T.h_,
                            children: I.intl.string(C.default["+pTnsf"]),
                          }),
                          (0, s.jsx)(S, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          })
        );
      }
    },
    385337(e, t, i) {
      i.d(t, { A: () => o });
      var s = i(627968);
      i(64700);
      var a = i(920050),
        n = i(744064),
        r = i(985603),
        l = i(185797),
        c = i(237146),
        d = i(985018);
      function o(e) {
        let { className: t, containerClassName: i } = e,
          o = (0, l.F)(),
          u =
            o.kind === l.L.SUBSCRIBE
              ? { subscriptionRequired: !0 }
              : {
                  ctaText: o.text,
                  ctaIcon: o.icon,
                  ctaIconPosition: o.iconPosition,
                  ctaDisabled: o.disabled,
                  ctaLoading: o.loading,
                  onCtaClick: o.onClick,
                };
        return (0, s.jsx)(n.S, {
          id: a.XBOX_PREMIUM_PERK_CARD_ID,
          title: d.intl.string(c.default.UVL9tD),
          description: d.intl.string(c.default["I+IXr0"]),
          ...u,
          className: t,
          containerClassName: i,
          backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
          caption: (0, s.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
          }),
          blurTint: "#054B16",
          analyticsOptions: { thirdPartyPartner: r.FZ },
        });
      }
    },
    726649(e, t, i) {
      i.d(t, { b: () => n });
      var s = i(840251),
        a = i(688151);
      let n = new s.E([], a.$G.OPEN_NITRO, {
        location: "open nitro tab/settings",
      });
    },
    611924(e, t, i) {
      i.d(t, { P: () => r });
      var s = i(64700),
        a = i(17928),
        n = i(736056);
      function r(e) {
        let [t, i] = (0, a.yK)([n.A], () => [
          n.A.getAllUserExperimentDescriptors(),
          n.A.getGuildExperiments(),
        ]);
        s.useEffect(() => {
          e.trigger();
        }, [e, t, i]);
      }
    },
    254748(e, t, i) {
      i.d(t, { A: () => c });
      var s = i(627968);
      i(64700);
      var a = i(503698),
        n = i.n(a),
        r = i(367791),
        l = i(672193);
      function c(e) {
        let {
            id: t,
            sectionClassName: i,
            heading: a,
            beforeGrid: c,
            grid: d,
            gridClassName: o,
          } = e,
          u = l.Ui;
        return (0, s.jsxs)("div", {
          id: t,
          className: i,
          children: [
            a,
            c,
            null != d
              ? (0, s.jsx)("div", {
                  className: n()(u, null != c && r.Jx, o),
                  children: d,
                })
              : null,
          ],
        });
      }
    },
    332732(e, t, i) {
      i.d(t, { Ay: () => ir, WU: () => ia, x6: () => is }),
        i(321073),
        i(323874),
        i(14289),
        i(35956);
      var s,
        a = i(627968),
        n = i(64700),
        r = i(503698),
        l = i.n(r),
        c = i(873263),
        d = i(17928),
        o = i(230109),
        u = i(289873),
        m = i(689175),
        A = i(315629),
        p = i(228366),
        g = i(793574),
        x = i(688810),
        N = i(31502),
        E = i(726649),
        h = i(611924),
        f = i(961250),
        R = i(366505),
        _ = i(841595),
        C = i(576622),
        I = i(166403),
        T = i(954571),
        b = i(881489),
        S = i(131168),
        j = i(482589),
        v = i(511484),
        P = i(935956),
        O = i(534514),
        y = i(834730),
        M = i(65470),
        D = i(985018),
        L = i(797221);
      let U = (e) => {
        let { className: t, location: i, analyticsLocation: s } = e,
          { analyticsLocations: n } = (0, x.Ay)(i);
        return (0, a.jsx)(x.f5, {
          value: n,
          children: (0, a.jsxs)(A.h, {
            className: l()(L.kL, L.pm, t),
            color: "purple",
            children: [
              (0, a.jsxs)("div", {
                className: L.FS,
                children: [
                  (0, a.jsx)(O.D, {
                    variant: "heading-xxl/bold",
                    className: L.R_,
                    children: D.intl.string(D.t.Ve9Ge6),
                  }),
                  (0, a.jsx)(y.E, {
                    variant: "text-md/medium",
                    children: D.intl.string(D.t.yQ06u1),
                  }),
                  (0, a.jsx)("div", {
                    className: L.SB,
                    children: (0, a.jsx)(M.A, {
                      buttonTextOverride: D.intl.string(D.t.Ve9Ge6),
                      premiumModalAnalyticsLocation: s,
                      variant: "secondary",
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                className: L._e,
                alt: "gift nitro banner",
              }),
            ],
          }),
        });
      };
      var G = i(877624);
      let k =
        "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
      function w(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 192,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: k,
          srcSet: `${k} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      var F = i(502572),
        V = i(192308),
        B = i(331322),
        H = i(403581),
        z = i(821609),
        X = i(775602),
        W = i(366999),
        K = i(531260),
        Y = i(780964),
        Z = i(858897),
        $ = i(786300),
        q = i(975571),
        Q = i(927578),
        J = i(40185),
        ee = i(89366),
        et = i(422936),
        ei = i(234419),
        es = i(549996),
        ea = i(371764),
        en = i(949964),
        er = i(103411),
        el = i(778712),
        ec = i(97808),
        ed = i(590251),
        eo = i(144165),
        eu = i(854627),
        em = i(427262),
        eA = i(326084),
        ep = i(851746),
        eg = i(664654),
        ex = i(212737),
        eN = i(652215),
        eE = i(849812);
      let eh = (e) => {
          let { user: t } = e,
            { avatarSrc: i, eventHandlers: s } = (0, eu.A)({
              userId: t.id,
              size: el._3.SIZE_24,
            });
          return (0, a.jsx)(
            ec.eu,
            {
              className: eE.bj,
              src: i,
              "aria-label": (0, em.mG)(t),
              size: el._3.SIZE_24,
              ...s,
            },
            t.id,
          );
        },
        ef = (e) => {
          let { slotIndex: t } = e;
          return (0, a.jsx)("div", { className: eE.p, children: t });
        },
        eR = (e) => {
          let { referralSentUsers: t } = e;
          return (0, a.jsx)("div", {
            className: eE.L$,
            children: (() => {
              let e = [];
              for (let i = 0; i < eg.Z; i++)
                if (t?.[i] !== void 0) {
                  let s = (0, a.jsx)(eh, { user: t[i] }, t[i].id);
                  e.push(s);
                } else {
                  let t = (0, a.jsx)(ef, { slotIndex: i + 1 }, i);
                  e.push(t);
                }
              return e;
            })(),
          });
        },
        e_ = (e) => {
          let { nReferralsSent: t } = e;
          return (0, a.jsx)(ed.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: eE.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: eE.e0,
            overlayClassName: t === eg.Z ? eE.ys : void 0,
            children: (0, a.jsx)(eo._, {
              src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
              height: 93,
              width: 93,
              zoomable: !1,
            }),
          });
        },
        eC = (e) => {
          let { className: t } = e,
            { referralSentUsers: s } = (0, eg.J)(),
            n = (0, d.bG)([ep.A], () => ep.A.getRecipientStatus()),
            r = (0, d.bG)([ep.A], () => ep.A.getHasEligibleFriends()),
            c =
              n.size === eg.Z &&
              [...n.values()].every((e) => e === eA.aK.REDEEMED),
            o = n.size === eg.Z;
          return (0, a.jsxs)("div", {
            className: l()(eE.kL, t),
            children: [
              (0, a.jsx)("div", {
                className: eE.G3,
                children: (0, a.jsx)(e_, { nReferralsSent: n.size }),
              }),
              (0, a.jsxs)("div", {
                className: eE.IH,
                children: [
                  (0, a.jsx)(eR, { referralSentUsers: s }),
                  (0, a.jsxs)("div", {
                    className: eE.n4,
                    children: [
                      (0, a.jsx)(O.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: D.intl.string(D.t.USo4s7),
                      }),
                      (0, a.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children:
                          !1 === r
                            ? D.intl.format(D.t["zWhX/Q"], {
                                helpdeskArticle: q.A.getArticleURL(
                                  eN.MVz.REFERRAL_PROGRAM,
                                ),
                              })
                            : s.length === eg.Z
                              ? !0 === c
                                ? D.intl.format(D.t["1aEjsH"], {
                                    helpdeskArticle: q.A.getArticleURL(
                                      eN.MVz.REFERRAL_PROGRAM,
                                    ),
                                  })
                                : D.intl.format(D.t["+u3AOO"], {
                                    helpdeskArticle: q.A.getArticleURL(
                                      eN.MVz.REFERRAL_PROGRAM,
                                    ),
                                  })
                              : D.intl.format(D.t["omMr+V"], {
                                  helpdeskArticle: q.A.getArticleURL(
                                    eN.MVz.REFERRAL_PROGRAM,
                                  ),
                                }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(z.$, {
                    variant: "primary",
                    disabled: !1 === r || !0 === o,
                    text: D.intl.string(D.t.Lm2nFc),
                    onClick: () =>
                      ((e) => {
                        let { startingScreen: t, analyticsLocations: s } = e;
                        T.default.track(
                          eN.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED,
                          { location_stack: s },
                        ),
                          (0, V.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(
                              i.bind(i, 212737),
                            );
                            return (i) =>
                              (0, a.jsx)(e, { ...i, startingScreen: t });
                          });
                      })({
                        startingScreen:
                          ex.SelectFriendsModalScreens.SELECT_FRIENDS,
                        analyticsLocations: [],
                      }),
                  }),
                ],
              }),
            ],
          });
        };
      var eI = i(792656),
        eT = i(989349),
        eb = i.n(eT),
        eS = i(496431),
        ej = i(116689);
      let ev = (e) => {
        let { expiresAt: t, className: i } = e,
          s = (0, eS.A)(eb()(t).toDate(), 1e3);
        if (null == s) return null;
        let { days: n, hours: r, minutes: c, seconds: d } = s,
          o = [
            { unitValue: n, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: c, unitType: "minutes" },
            { unitValue: d, unitType: "seconds" },
          ];
        return (0, a.jsxs)("div", {
          className: l()(ej.Xl, i),
          children: [
            (0, a.jsx)(y.E, {
              variant: "text-sm/semibold",
              color: "text-strong",
              children: D.intl.string(D.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
              className: ej.$R,
              children: o.map((e, t) =>
                (function (e, t) {
                  let i,
                    [s, n] =
                      1 === (i = e.unitValue.toString()).length
                        ? ["0", i[0]]
                        : [i[0], i[1]];
                  return (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)(
                        "div",
                        {
                          className: ej.bh,
                          children: [
                            (0, a.jsxs)("div", {
                              className: ej.kB,
                              children: [
                                (0, a.jsx)("div", {
                                  className: ej.B2,
                                  children: (0, a.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: s,
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: ej.B2,
                                  children: (0, a.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: n,
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)(y.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: (function (e) {
                                switch (e) {
                                  case "days":
                                    return D.intl.string(D.t.ixASa2);
                                  case "hours":
                                    return D.intl.string(D.t["8sNvNn"]);
                                  case "minutes":
                                    return D.intl.string(D.t["Gv6kP/"]);
                                  case "seconds":
                                    return D.intl.string(D.t.JhaiLW);
                                  default:
                                    return "";
                                }
                              })(e.unitType),
                            }),
                          ],
                        },
                        e.unitType,
                      ),
                      !t &&
                        (0, a.jsx)(y.E, {
                          className: ej.cV,
                          variant: "text-lg/normal",
                          color: "text-strong",
                          children: ":",
                        }),
                    ],
                  });
                })(e, t === o.length - 1),
              ),
            }),
          ],
        });
      };
      var eP = i(473702),
        eO = i(505559),
        ey = i(725807),
        eM = i(774774),
        eD = i(695661);
      let eL = () => {
        let e = { section: eN.JJy.REVERSE_TRIAL_BANNER };
        return (0, a.jsxs)("div", {
          className: eD.vK,
          children: [
            (0, a.jsx)(eM.e4, {
              text: D.intl.string(D.t.qYKftX),
              className: eD.Io,
            }),
            (0, a.jsx)("img", {
              src: "/assets/b40444acfe4d521c.svg",
              width: 64,
              height: 64,
              alt: "",
              className: eD._u,
            }),
            (0, a.jsx)("div", {
              className: eD.IP,
              children: (0, a.jsx)(y.E, {
                color: "text-subtle",
                variant: "text-sm/normal",
                children: D.intl.format(D.t.uu1WAa, { weeks: 1 }),
              }),
            }),
            (0, a.jsx)(ey.A, {
              premiumModalAnalyticsLocation: e,
              showGradient: !0,
              className: eD.aA,
              shinyButtonClassName: eD.Xp,
            }),
          ],
        });
      };
      var eU = i(103733),
        eG = i(702841),
        ek = i(384601),
        ew = i(584151);
      let eF = () => {
        let e = (0, eG.bG)([X.A], () => X.A.useReducedMotion);
        return (0, a.jsx)(ek.A, {
          isMotionReduced: e,
          blurScale: 0.4,
          starContainerClassName: ew.cI,
          hammerContainerClassName: ew.qg,
          keyContainerClassName: ew.h2,
          boltContainerClassName: ew.Bz,
          starAssetClassName: ew.ks,
          hammerAssetClassName: ew.GY,
          keyAssetClassName: ew.p4,
          boltAssetClassName: ew.vy,
        });
      };
      var eV = i(608416),
        eB = i(447764),
        eH = i(180894);
      let ez = (e) => {
        let { containerVisibilityPercentage: t } = e,
          i = (0, eG.bG)([X.A], () => X.A.useReducedMotion);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: eB.BI,
              children: (0, a.jsx)(eV.Ay, {
                scaleAnimationData: {
                  startScale: 0.9,
                  endScale: 1,
                  duration: eV.$G,
                },
                yAxisAnimationData: {
                  range: 20,
                  duration: eV.Mp,
                  path: eV.aV.SINE,
                },
                animateXAxisWiggle: !0,
                isMotionReduced: i,
                parallaxAnimationData: {
                  pathDirection: eV.MN.UP,
                  range: 125,
                  containerVisibilityPercentage: t,
                  changeOpacity: !0,
                },
                animationSpeedScale: 2,
                children: (0, a.jsx)("img", {
                  src: eH.A,
                  alt: "",
                  className: eB.Q,
                }),
              }),
            }),
            (0, a.jsx)(ek.A, {
              isMotionReduced: i,
              containerVisibilityPercentage: t,
              hammerContainerClassName: eB.Gj,
              keyContainerClassName: eB.FV,
              starContainerClassName: eB.E1,
              hammerAssetClassName: eB.Wv,
              keyAssetClassName: eB.rs,
              starAssetClassName: eB.OY,
              animationSpeedScale: 2,
            }),
          ],
        });
      };
      var eX = i(218199);
      let eW = (e) => {
        let {
          className: t,
          color: i = "text-strong",
          responsive: s = !0,
          children: n,
        } = e;
        return (0, a.jsx)(O.D, {
          className: l()(eX.w, t, s && eX.n),
          variant: "display-md",
          color: i,
          children: n,
        });
      };
      var eK = i(788868),
        eY = i(97584);
      let eZ = (e) => {
          let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
            n = (0, b.Zb)(t);
          return (0, a.jsx)("div", {
            className: l()(eY.kL, i),
            ref: s,
            children: (0, a.jsxs)("div", {
              className: eY.ap,
              children: [
                (0, a.jsxs)(B.B, {
                  align: "start",
                  gap: 32,
                  children: [
                    (0, a.jsx)(eO.A, { text: D.intl.string(D.t.yhldRB) }),
                    (0, a.jsxs)(B.B, {
                      align: "start",
                      gap: 12,
                      className: eY.rG,
                      children: [
                        (0, a.jsx)(eW, {
                          children: D.intl.format(D.t.FwjP6W, { days: n }),
                        }),
                        (0, a.jsx)(y.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: D.intl.string(D.t.Jf8KrT),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(B.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 12,
                      children: [
                        (0, a.jsx)(eI.A, {
                          size: "md",
                          buttonTextOverride: D.intl.string(D.t["2+luBl"]),
                          iconOverride: H.t,
                          variantOverride: "expressive",
                        }),
                        (0, a.jsx)(z.$, {
                          variant: "secondary",
                          size: "md",
                          text: D.intl.string(D.t.Af7ye6),
                          onClick: () =>
                            (0, Z.openUserSettings)(Y.X.SUBSCRIPTIONS_PANEL),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: eY.Hk,
                  children: [
                    (0, a.jsx)(w, { alt: "", width: "100%", height: "auto" }),
                    (0, a.jsx)(eF, {}),
                  ],
                }),
              ],
            }),
          });
        },
        e$ = (e) => {
          let {
              className: t,
              isEligibleForBogoPromotion: s,
              isInReverseTrial: n,
              shouldShowReferralProgressBar: r,
            } = e,
            {
              headingText: c,
              headingTop: o,
              showPill: u,
              userDiscountOffer: m,
              discountedPrice: A,
              buttonVisibilityRef: p,
            } = eQ(),
            { analyticsLocations: N } = (0, x.Ay)(
              g.A.PREMIUM_MARKETING_HERO_CTA,
            ),
            E = (0, es.c)(G.C.MARKETING_PAGE_BANNER),
            h = null;
          null != E &&
          "marketingPageBanner" === E.properties.properties.oneofKind
            ? (h = (0, a.jsx)(ea.x, {
                componentId: E.id,
                promotionBannerMarketingComponentFields:
                  E.properties.properties.marketingPageBanner,
              }))
            : s
              ? (h = (0, a.jsx)(en.A, { variant: en.c.SUBSCRIBER_HOME }))
              : n
                ? (h = (0, a.jsx)(eL, {}))
                : r && (h = (0, a.jsx)(eC, {}));
          let f = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            R = null != f && f.status === eN.Dmq.CANCELED && null != m,
            _ = (0, ei.V)(),
            C = (0, et.O)(),
            T = (0, v.U9)(C, eK.pe.TIER_2) ? eK.pe.TIER_2 : void 0,
            b =
              null != f &&
              f.status !== eN.Dmq.ACCOUNT_HOLD &&
              f.hasAnyPremiumNitro,
            S = (0, K.A)(),
            j = S.isFractionalPremiumActive && !b && null == h && !R,
            P = (0, d.bG)([X.A], () => X.A.useReducedMotion),
            { visibilityPercentageRef: O, visibilityPercentage: L } = (0, eU.U)(
              !P,
            );
          return n
            ? (0, a.jsx)(eZ, {
                fpEndsAt: S.currentEntitlementEndsAt,
                className: t,
                buttonVisibilityRef: p,
              })
            : (0, a.jsx)("div", {
                className: l()(eY.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: p,
                children: (0, a.jsxs)("div", {
                  className: eY.Qs,
                  ref: O,
                  children: [
                    u && o,
                    (0, a.jsxs)("div", {
                      className: eY.N1,
                      children: [
                        (0, a.jsx)(ez, { containerVisibilityPercentage: L }),
                        R &&
                          null != m.expires_at &&
                          (0, a.jsx)(ev, {
                            expiresAt: m.expires_at,
                            className: eY.IZ,
                          }),
                        (0, a.jsx)(eW, {
                          children: R
                            ? D.intl.format(D.t["3yZP0G"], {
                                percent: m.discount.amount,
                              })
                            : c,
                        }),
                        R &&
                          null != A &&
                          (0, a.jsx)(y.E, {
                            className: eY.jG,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: D.intl.format(D.t["3Q4wCy"], {
                              discountedPrice: A,
                              billingPeriod: (0, Q.Ke)(
                                m.discount.user_usage_limit_interval,
                              ),
                              numMonths: m.discount.user_usage_limit,
                            }),
                          }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: j || R ? eY.UJ : void 0,
                      children: [
                        j &&
                          (0, a.jsx)(eI.A, {
                            size: "md",
                            hasActivePromotion: !!s,
                            subscriptionTier:
                              _?.subscription_trial?.sku_id ?? T,
                          }),
                        R &&
                          (0, a.jsx)(z.$, {
                            variant: "expressive",
                            icon: H.t,
                            size: "md",
                            text: D.intl.string(D.t.zrCzVB),
                            onClick: () => {
                              var e;
                              return (
                                (e = eP.g.CONFIRM_DISCOUNT),
                                void (0, V.openModalLazy)(async () => {
                                  let {
                                    PremiumBrandRefreshSubscriptionCancellationModal:
                                      t,
                                  } = await Promise.all([
                                    i.e("97219"),
                                    i.e("80848"),
                                    i.e("97189"),
                                    i.e("90261"),
                                    i.e("16933"),
                                    i.e("40841"),
                                    i.e("90738"),
                                    i.e("26032"),
                                    i.e("89753"),
                                    i.e("68495"),
                                    i.e("18125"),
                                    i.e("65420"),
                                    i.e("22513"),
                                    i.e("92931"),
                                    i.e("13498"),
                                    i.e("71543"),
                                    i.e("27037"),
                                    i.e("13520"),
                                    i.e("71934"),
                                    i.e("88584"),
                                    i.e("7053"),
                                    i.e("86483"),
                                    i.e("39995"),
                                    i.e("25568"),
                                    i.e("32260"),
                                    i.e("40153"),
                                    i.e("68953"),
                                    i.e("89603"),
                                    i.e("76348"),
                                    i.e("77083"),
                                    i.e("63009"),
                                    i.e("23924"),
                                    i.e("15510"),
                                    i.e("25845"),
                                    i.e("57036"),
                                    i.e("207"),
                                    i.e("88394"),
                                    i.e("15380"),
                                    i.e("20287"),
                                    i.e("28367"),
                                    i.e("35429"),
                                    i.e("10471"),
                                    i.e("64827"),
                                    i.e("23808"),
                                    i.e("11301"),
                                    i.e("61737"),
                                    i.e("79428"),
                                    i.e("29963"),
                                    i.e("47834"),
                                    i.e("30938"),
                                    i.e("20317"),
                                    i.e("2368"),
                                    i.e("24313"),
                                    i.e("74016"),
                                    i.e("48405"),
                                    i.e("63185"),
                                    i.e("19551"),
                                    i.e("37794"),
                                    i.e("48172"),
                                    i.e("21106"),
                                    i.e("88941"),
                                    i.e("61379"),
                                    i.e("43039"),
                                    i.e("69354"),
                                    i.e("28154"),
                                    i.e("48804"),
                                    i.e("88077"),
                                    i.e("85502"),
                                    i.e("18401"),
                                    i.e("13681"),
                                    i.e("53729"),
                                    i.e("32551"),
                                    i.e("52367"),
                                    i.e("23353"),
                                    i.e("36561"),
                                    i.e("50015"),
                                    i.e("47017"),
                                    i.e("77998"),
                                    i.e("31145"),
                                    i.e("11523"),
                                    i.e("66900"),
                                    i.e("1555"),
                                    i.e("44695"),
                                    i.e("21690"),
                                    i.e("10004"),
                                    i.e("55314"),
                                    i.e("44376"),
                                    i.e("96905"),
                                    i.e("31644"),
                                    i.e("70653"),
                                    i.e("993"),
                                    i.e("54527"),
                                    i.e("72535"),
                                    i.e("39227"),
                                    i.e("26490"),
                                    i.e("76170"),
                                    i.e("32817"),
                                    i.e("36498"),
                                    i.e("18943"),
                                    i.e("89094"),
                                    i.e("84103"),
                                    i.e("9915"),
                                    i.e("28561"),
                                    i.e("11527"),
                                    i.e("96123"),
                                    i.e("27168"),
                                    i.e("31825"),
                                    i.e("39038"),
                                    i.e("36320"),
                                    i.e("6223"),
                                    i.e("20320"),
                                    i.e("77245"),
                                    i.e("31549"),
                                    i.e("43919"),
                                    i.e("31390"),
                                    i.e("57906"),
                                    i.e("51243"),
                                    i.e("45421"),
                                    i.e("44265"),
                                    i.e("99141"),
                                    i.e("21435"),
                                    i.e("98793"),
                                    i.e("92731"),
                                    i.e("25990"),
                                    i.e("34472"),
                                    i.e("33584"),
                                    i.e("63095"),
                                    i.e("68647"),
                                    i.e("45723"),
                                    i.e("67657"),
                                    i.e("64615"),
                                    i.e("88017"),
                                    i.e("87225"),
                                    i.e("12373"),
                                    i.e("75134"),
                                    i.e("84967"),
                                    i.e("23216"),
                                    i.e("25582"),
                                    i.e("30770"),
                                    i.e("38835"),
                                    i.e("90889"),
                                    i.e("78777"),
                                    i.e("3458"),
                                    i.e("62827"),
                                    i.e("73547"),
                                    i.e("99593"),
                                    i.e("61935"),
                                    i.e("62168"),
                                    i.e("55602"),
                                    i.e("77793"),
                                    i.e("13499"),
                                    i.e("91381"),
                                    i.e("58765"),
                                    i.e("22407"),
                                    i.e("10034"),
                                    i.e("73500"),
                                    i.e("25252"),
                                    i.e("65881"),
                                    i.e("32035"),
                                    i.e("36126"),
                                    i.e("51391"),
                                    i.e("29375"),
                                    i.e("91942"),
                                    i.e("48778"),
                                    i.e("89465"),
                                    i.e("78707"),
                                    i.e("93708"),
                                    i.e("71482"),
                                    i.e("10942"),
                                    i.e("64480"),
                                    i.e("10745"),
                                    i.e("78651"),
                                    i.e("77084"),
                                    i.e("39406"),
                                    i.e("96565"),
                                    i.e("95093"),
                                    i.e("62615"),
                                    i.e("20007"),
                                    i.e("60177"),
                                    i.e("21976"),
                                    i.e("1006"),
                                    i.e("23276"),
                                    i.e("10567"),
                                    i.e("59880"),
                                    i.e("77446"),
                                    i.e("5636"),
                                    i.e("95444"),
                                    i.e("38472"),
                                    i.e("48720"),
                                    i.e("84150"),
                                    i.e("6159"),
                                    i.e("87075"),
                                    i.e("94161"),
                                    i.e("35432"),
                                    i.e("10741"),
                                    i.e("80347"),
                                    i.e("80166"),
                                  ]).then(i.bind(i, 293061));
                                  return (i) =>
                                    (0, a.jsx)(t, {
                                      ...i,
                                      analyticsLocations: N,
                                      initialStep: e,
                                      premiumSubscription: f,
                                    });
                                })
                              );
                            },
                          }),
                        (0, a.jsx)(M.A, {
                          variant: j || R ? "secondary" : "expressive",
                          size: "md",
                          buttonTextOverride: D.intl.string(D.t["3KomGa"]),
                        }),
                      ],
                    }),
                    h,
                  ],
                }),
              });
        },
        [eq, eQ] = (0, $.A)(),
        eJ = (e) => {
          let {
              className: t,
              buttonVisibilityRef: i,
              userDiscountOffer: s,
              discountedPrice: n,
            } = e,
            { analyticsLocations: r } = (0, x.Ay)(
              g.A.PREMIUM_MARKETING_HERO_CTA,
            ),
            l = (0, b.ds)(),
            c = (0, J.cg)(),
            d = (0, ee.QQ)(),
            o = D.intl.string(D.t.qYKftX),
            u = (0, er.m)(),
            m = D.intl.string(D.t.ifwQZb),
            { fractionalState: A, endsAt: p } = (0, K.A)(),
            N = (0, W.Ay)(p, W.yE.CREDITS_ENDS_IN),
            E = null;
          if (A === eK.xc.NONE || l) E = (0, a.jsx)(eO.A, { text: o });
          else {
            d = !0;
            let e = D.intl.format(D.t["yR+oDD"], {
              helpCenterLink: q.A.getArticleURL(
                eN.MVz.FRACTIONAL_PREMIUM_ABOUT,
              ),
            });
            E = (0, a.jsx)(F.A, {
              text: e,
              "aria-label": e.toString(),
              tooltipClassName: eY.YL,
              position: "right",
              children: (e) =>
                (0, a.jsx)("div", {
                  ...e,
                  className: eY.V_,
                  children: (0, a.jsx)("div", {
                    className: eY.eL,
                    children: (0, a.jsx)(eO.A, { text: N }),
                  }),
                }),
            });
          }
          return (0, a.jsx)(x.f5, {
            value: r,
            children: (0, a.jsx)(eq.Provider, {
              value: {
                headingText: m,
                headingTop: E,
                showPill: d,
                userDiscountOffer: s,
                discountedPrice: n,
                buttonVisibilityRef: i,
              },
              children: (0, a.jsx)(e$, {
                className: t,
                isEligibleForBogoPromotion: c,
                isInReverseTrial: l,
                shouldShowReferralProgressBar: u,
              }),
            }),
          });
        };
      var e0 = i(785651),
        e1 = i(717421),
        e2 = i(98812),
        e7 = i(67423);
      let e8 = function (e) {
        let {
            isVisible: t,
            premiumSubscription: s,
            churnDiscountOffer: n,
            discountedPrice: r,
          } = e,
          { analyticsLocations: c } = (0, x.Ay)(
            g.A.CHURN_DISCOUNT_PERSISTENT_CTA,
          ),
          d = (0, e1.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
          });
        return (0, a.jsx)(e0.animated.div, {
          className: l()(e2.iE, { [e2.q4]: !t }),
          style: d,
          children: (0, a.jsxs)("div", {
            className: e2.iJ,
            children: [
              (0, a.jsx)("img", { alt: "", src: e7, className: e2.oU }),
              (0, a.jsxs)("div", {
                className: e2.iQ,
                children: [
                  (0, a.jsx)(O.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: D.intl.format(D.t["3yZP0G"], {
                      percent: n.discount.amount,
                    }),
                  }),
                  (0, a.jsx)(y.E, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: D.intl.format(D.t["3Q4wCy"], {
                      numMonths: n.discount.user_usage_limit,
                      discountedPrice: r,
                      billingPeriod: (0, Q.Ke)(
                        n.discount.user_usage_limit_interval,
                      ),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(z.$, {
                variant: "expressive",
                icon: H.t,
                size: "md",
                text: D.intl.string(D.t.zrCzVB),
                onClick: () =>
                  void (0, V.openModalLazy)(async () => {
                    let {
                      PremiumBrandRefreshSubscriptionCancellationModal: e,
                    } = await Promise.all([
                      i.e("97219"),
                      i.e("80848"),
                      i.e("97189"),
                      i.e("90261"),
                      i.e("16933"),
                      i.e("40841"),
                      i.e("90738"),
                      i.e("26032"),
                      i.e("89753"),
                      i.e("68495"),
                      i.e("18125"),
                      i.e("65420"),
                      i.e("22513"),
                      i.e("92931"),
                      i.e("13498"),
                      i.e("71543"),
                      i.e("27037"),
                      i.e("13520"),
                      i.e("71934"),
                      i.e("88584"),
                      i.e("7053"),
                      i.e("86483"),
                      i.e("39995"),
                      i.e("25568"),
                      i.e("32260"),
                      i.e("40153"),
                      i.e("68953"),
                      i.e("89603"),
                      i.e("76348"),
                      i.e("77083"),
                      i.e("63009"),
                      i.e("23924"),
                      i.e("15510"),
                      i.e("25845"),
                      i.e("57036"),
                      i.e("207"),
                      i.e("88394"),
                      i.e("15380"),
                      i.e("20287"),
                      i.e("28367"),
                      i.e("35429"),
                      i.e("10471"),
                      i.e("64827"),
                      i.e("23808"),
                      i.e("11301"),
                      i.e("61737"),
                      i.e("79428"),
                      i.e("29963"),
                      i.e("47834"),
                      i.e("30938"),
                      i.e("20317"),
                      i.e("2368"),
                      i.e("24313"),
                      i.e("74016"),
                      i.e("48405"),
                      i.e("63185"),
                      i.e("19551"),
                      i.e("37794"),
                      i.e("48172"),
                      i.e("21106"),
                      i.e("88941"),
                      i.e("61379"),
                      i.e("43039"),
                      i.e("69354"),
                      i.e("28154"),
                      i.e("48804"),
                      i.e("88077"),
                      i.e("85502"),
                      i.e("18401"),
                      i.e("13681"),
                      i.e("53729"),
                      i.e("32551"),
                      i.e("52367"),
                      i.e("23353"),
                      i.e("36561"),
                      i.e("50015"),
                      i.e("47017"),
                      i.e("77998"),
                      i.e("31145"),
                      i.e("11523"),
                      i.e("66900"),
                      i.e("1555"),
                      i.e("44695"),
                      i.e("21690"),
                      i.e("10004"),
                      i.e("55314"),
                      i.e("44376"),
                      i.e("96905"),
                      i.e("31644"),
                      i.e("70653"),
                      i.e("993"),
                      i.e("54527"),
                      i.e("72535"),
                      i.e("39227"),
                      i.e("26490"),
                      i.e("76170"),
                      i.e("32817"),
                      i.e("36498"),
                      i.e("18943"),
                      i.e("89094"),
                      i.e("84103"),
                      i.e("9915"),
                      i.e("28561"),
                      i.e("11527"),
                      i.e("96123"),
                      i.e("27168"),
                      i.e("31825"),
                      i.e("39038"),
                      i.e("36320"),
                      i.e("6223"),
                      i.e("20320"),
                      i.e("77245"),
                      i.e("31549"),
                      i.e("43919"),
                      i.e("31390"),
                      i.e("57906"),
                      i.e("51243"),
                      i.e("45421"),
                      i.e("44265"),
                      i.e("99141"),
                      i.e("21435"),
                      i.e("98793"),
                      i.e("92731"),
                      i.e("25990"),
                      i.e("34472"),
                      i.e("33584"),
                      i.e("63095"),
                      i.e("68647"),
                      i.e("45723"),
                      i.e("67657"),
                      i.e("64615"),
                      i.e("88017"),
                      i.e("87225"),
                      i.e("12373"),
                      i.e("75134"),
                      i.e("84967"),
                      i.e("23216"),
                      i.e("25582"),
                      i.e("30770"),
                      i.e("38835"),
                      i.e("90889"),
                      i.e("78777"),
                      i.e("3458"),
                      i.e("62827"),
                      i.e("73547"),
                      i.e("99593"),
                      i.e("61935"),
                      i.e("62168"),
                      i.e("55602"),
                      i.e("77793"),
                      i.e("13499"),
                      i.e("91381"),
                      i.e("58765"),
                      i.e("22407"),
                      i.e("10034"),
                      i.e("73500"),
                      i.e("25252"),
                      i.e("65881"),
                      i.e("32035"),
                      i.e("36126"),
                      i.e("51391"),
                      i.e("29375"),
                      i.e("91942"),
                      i.e("48778"),
                      i.e("89465"),
                      i.e("78707"),
                      i.e("93708"),
                      i.e("71482"),
                      i.e("10942"),
                      i.e("64480"),
                      i.e("10745"),
                      i.e("78651"),
                      i.e("77084"),
                      i.e("39406"),
                      i.e("96565"),
                      i.e("95093"),
                      i.e("62615"),
                      i.e("20007"),
                      i.e("60177"),
                      i.e("21976"),
                      i.e("1006"),
                      i.e("23276"),
                      i.e("10567"),
                      i.e("59880"),
                      i.e("77446"),
                      i.e("5636"),
                      i.e("95444"),
                      i.e("38472"),
                      i.e("48720"),
                      i.e("84150"),
                      i.e("6159"),
                      i.e("87075"),
                      i.e("94161"),
                      i.e("35432"),
                      i.e("10741"),
                      i.e("80347"),
                      i.e("80166"),
                    ]).then(i.bind(i, 293061));
                    return (t) =>
                      (0, a.jsx)(e, {
                        ...t,
                        premiumSubscription: s,
                        analyticsLocations: c,
                        initialStep: eP.g.CONFIRM_DISCOUNT,
                      });
                  }),
              }),
            ],
          }),
        });
      };
      var e5 = i(761508),
        e6 = i(951707),
        e3 = i(744064);
      function e9(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 192,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      function e4(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 162,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      function te(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 192,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      var tt = i(345394);
      function ti(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 192,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: tt.A,
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      function ts(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 192,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      function ta(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 162,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      function tn(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 162,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      function tr(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 162,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      var tl = i(661531),
        tc = i(996682);
      function td(e) {
        let {
          color: t = tl.A.colors.ICON_STRONG,
          "aria-label": i,
          "aria-hidden": s,
          role: n,
          width: r = 100,
          height: l = 80,
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, tc.A)({ "aria-label": i, "aria-hidden": s, role: n }),
          width: r,
          height: l,
          viewBox: "0 0 100 80",
          fill: t.css,
          children: [
            (0, a.jsx)("g", {
              clipPath: "url(#a)",
              children: (0, a.jsx)("path", {
                fill: t.css,
                d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "a",
                children: (0, a.jsx)("path", {
                  fill: t.css,
                  d: "M0 0h100v80H0z",
                }),
              }),
            }),
          ],
        });
      }
      function to(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 162,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      var tu = i(78701);
      function tm(e) {
        let {
          alt: t,
          ariaLabel: i,
          ariaHidden: s,
          role: n,
          width: r = 288,
          height: l = 192,
        } = e;
        return (0, a.jsx)("img", {
          style: { width: r, height: l },
          src: tu.A,
          alt: t,
          "aria-label": i,
          "aria-hidden": s,
          role: n ?? "img",
        });
      }
      var tA = i(462887),
        tp = i(736653),
        tg = i(259065),
        tx = i(206835),
        tN = i(976860),
        tE = i(591179),
        th = i(462463),
        tf = i(112848),
        tR = i(425713),
        t_ = i(920050),
        tC = i(975807),
        tI = i(562819),
        tT = i(793943),
        tb = i(95035),
        tS = i(532794),
        tj = i(245853),
        tv = i(612669),
        tP = i(892227),
        tO = i(81466),
        ty = i(318254),
        tM = i(490285),
        tD = i(875679);
      let tL = () => {
        let { passesGeneralUIInvariant: e, programReward: t } = (0, R.F)({
          location: "NitroOrbsWhatsNewCardFooter",
        });
        if (!e || null == t) return null;
        let i =
          null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(
                1,
                (0, tP.default)(new Date(t.next_reward_date), new Date()),
              )
            : null;
        return (0, a.jsxs)("div", {
          className: tD.kL,
          children: [
            null != i &&
              (0, a.jsxs)("div", {
                className: tD.nM,
                children: [
                  (0, a.jsxs)("div", {
                    className: tD.Pf,
                    children: [
                      (0, a.jsx)(tO.C, {
                        size: "sm",
                        color: tl.A.colors.TEXT_DEFAULT,
                      }),
                      (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: D.intl.string(tM.default.H2M13c),
                      }),
                    ],
                  }),
                  (0, a.jsx)(y.E, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: D.intl.format(tM.default.xedPIb, { days: i }),
                  }),
                ],
              }),
            null != i && (0, a.jsx)("div", { className: tD.yF }),
            (0, a.jsxs)("div", {
              className: tD.nM,
              children: [
                (0, a.jsxs)("div", {
                  className: tD.Pf,
                  children: [
                    (0, a.jsx)(ty.C, {
                      size: "sm",
                      color: tl.A.colors.TEXT_DEFAULT,
                    }),
                    (0, a.jsx)(y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: D.intl.string(tM.default.F7Bhsg),
                    }),
                  ],
                }),
                (0, a.jsx)(y.E, {
                  variant: "text-sm/medium",
                  color: "text-default",
                  children: D.intl.format(tM.default.UDwsvL, {
                    orbsCount: t.total_rewarded_from_program,
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var tU = i(256358),
        tG = i(655752),
        tk = i(764231),
        tw = i(627380),
        tF = i(30084),
        tV = i(792641),
        tB = i(714206),
        tH = i(88001),
        tz = i(758836),
        tX = i(654487),
        tW = i(466919),
        tK = i(555599),
        tY = i(817577);
      let tZ =
          "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
        t$ =
          "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
        tq =
          "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
      function tQ() {
        let { analyticsLocations: e } = (0, x.Ay)(
            g.A.PREMIUM_MARKETING_PERK_CARD,
          ),
          t = (0, tE.X)("useWhatsNewPerkCards"),
          s = (0, tv.O9)(),
          { logitechCard: r, steelseriesCard: c } = (0, tU.A)(),
          o = (0, tU.S)(),
          u = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
          m = u?.hasActiveTrial ?? !1,
          A = (0, th.A)({ analyticsLocations: e }),
          p = (0, n.useCallback)(() => {
            (0, Z.openUserSettings)(
              Y.X.PROFILE_PANEL,
              { analyticsLocations: e },
              () => (0, tg.L)({ analyticsLocations: e }),
            );
          }, [e]),
          E = (0, n.useCallback)(() => {
            (0, Z.openUserSettings)(
              Y.X.PROFILE_PANEL,
              { analyticsLocations: e },
              () => (0, tI.L)({ analyticsLocations: e }),
            );
          }, [e]),
          h = (0, n.useCallback)(() => {
            (0, Z.openUserSettings)(Y.X.APPEARANCE_IN_APP_ICON_CATEGORY);
          }, []),
          f = () => {
            (0, tC.A)(tH.TE);
          },
          _ = (0, n.useCallback)(() => {
            m
              ? (0, V.openModalLazy)(async () => {
                  let { default: e } = await i
                    .e("99709")
                    .then(i.bind(i, 516044));
                  return (t) => (0, a.jsx)(e, { ...t });
                })
              : (0, tS.A)({
                  subscriptionTier: eK.pe.TIER_2,
                  initialPlanId: eK.gD.PREMIUM_GROUP_MONTH,
                  analyticsLocations: e,
                });
          }, [e, m]),
          C = (function (e) {
            let { fractionalState: t } = (0, K.A)(),
              i = t === eK.xc.FP_ONLY,
              s = (0, tf.$F)(),
              a = (0, tf.Xb)(),
              r = s?.status === tf.Wo.UPCOMING || i,
              c = (0, tR.N)(s?.id),
              d = (function () {
                let e = (0, tf.$F)(),
                  t = (0, tG.P)(),
                  i = (0, tf.Xb)();
                if (null == e || null == t || null == i) return null;
                let s = eb()(),
                  a = eb()(i),
                  n = e.status === tf.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                  r = t.tenureReqNumMonths,
                  l = a.clone().add(n, "months"),
                  c = a.clone().add(r, "months").diff(l);
                return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / c));
              })(),
              o = (0, tw.t)(),
              u = (0, tG.P)();
            return (0, n.useMemo)(() => {
              let t,
                n = null != u ? D.intl.string(u.nameUnformattedNitro) : void 0;
              return (
                null == s
                  ? i &&
                    (t = (0, tk.T)(eK.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                  : (t =
                      s.status === tf.Wo.UPCOMING
                        ? D.intl.formatToPlainString(D.t.a1eKDi, {
                            days: o?.days ?? 0,
                          })
                        : ((function (e, t) {
                            if (null != e && null != t) {
                              if (e.days <= 30)
                                return D.intl.formatToPlainString(D.t.NEXoaI, {
                                  days: e.days,
                                  nextBadgeName: t,
                                });
                              if (e.months <= 3)
                                return D.intl.formatToPlainString(D.t.KDV8oD, {
                                  months: e.months,
                                  nextBadgeName: t,
                                });
                            }
                          })(o, n) ??
                          (0, tk.T)(s.id, s.tenureReqNumMonths) ??
                          void 0)),
                {
                  id: t_.TENURE_BADGE_CARD_ID,
                  title:
                    null != s
                      ? D.intl.string(s.nameUnformattedNitro)
                      : i
                        ? D.intl.string(D.t.tx9Fvw)
                        : "",
                  pillText: D.intl.string(D.t["jyYgZ+"]),
                  primaryAsset:
                    null != c
                      ? r
                        ? c.standard
                        : c.ambientLarge
                      : i
                        ? tB
                        : null,
                  primaryAssetClassName: l()(tV.p, { [tV.n]: r }),
                  caption:
                    null != a
                      ? D.intl.formatToPlainString(D.t.Hu4jfi, {
                          date: new Date(a),
                        })
                      : void 0,
                  description: t,
                  subscriptionRequired: !0,
                  progress: d ?? void 0,
                  ctaText: D.intl.string(D.t.jVcuVY),
                  onCtaClick: () => (0, tF.D)({ analyticsLocations: e }),
                }
              );
            }, [s, c, r, a, d, i, o, u, e]);
          })(e),
          { shouldShowBonusOrbsUX: T, multiplier: b } = (0, tj.Dl)(
            tX.rE.NITRO_HOME_MARKETING,
          ),
          S = (0, N.l)("useWhatsNewPerkCards"),
          { isEligible: j, programReward: v } = (0, R.F)({
            location: "useWhatsNewPerkCards",
          }),
          P = S && j && null != v;
        return (0, n.useMemo)(() => {
          let e = [
              o ? null : r,
              o ? null : c,
              P
                ? {
                    id: t_.NITRO_ORBS_REWARDS_CARD_ID,
                    title: D.intl.string(tM.default.hx5AFp),
                    description: D.intl.format(tM.default["Pz+6Ix"], {
                      orbsCount: v?.reward_amount ?? 0,
                    }),
                    primaryAsset: "/assets/0e1f72ee8aba3549.svg",
                    footerContent: (0, a.jsx)(tL, {}),
                    ctaText: D.intl.string(tM.default.BxjHiu),
                    onCtaClick: () =>
                      (0, tN.pX)(eN.BVt.COLLECTIBLES_SHOP_WITH_TAB(tz.G2.ORBS)),
                  }
                : null,
              T
                ? {
                    id: t_.QUEST_ORB_MULTIPLIER_CARD_ID,
                    title: D.intl.string(D.t.F2MShO),
                    description: D.intl.format(D.t.NpUfej, {
                      bonusOrbMultiplier: b,
                    }),
                    pillText: S ? void 0 : D.intl.string(D.t.oW0eUd),
                    primaryAsset:
                      "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: () => (0, tN.pX)(eN.BVt.QUEST_HOME),
                    primaryAssetClassName: tK.Nf,
                  }
                : null,
              s
                ? {
                    id: t_.PREMIUM_GROUP_CARD_ID,
                    title: D.intl.string(tW.default.YkvksF),
                    description: (0, a.jsxs)(a.Fragment, {
                      children: [
                        D.intl.formatToPlainString(tW.default.JlyGQj, {
                          totalSeats: tH.aw,
                          premiumGroupProductName: (0, tH.DP)(),
                        }),
                        (0, a.jsx)("div", {
                          className: tK.LF,
                          children: (0, a.jsx)(tb.A, {
                            onClick: f,
                            children: D.intl.string(tW.default.yYyGJH),
                          }),
                        }),
                      ],
                    }),
                    pillText: D.intl.string(D.t.oW0eUd),
                    primaryAsset: tY,
                    ctaIcon: H.t,
                    ctaIconPosition: "start",
                    ctaText: D.intl.string(D.t.IJI7yk),
                    onCtaClick: _,
                  }
                : null,
              {
                id: t_.DISPLAY_NAME_STYLES_CARD_ID,
                title: D.intl.string(D.t.OLtTrt),
                description: D.intl.string(D.t["di/pXR"]),
                onCtaClick: t ? A : p,
                ctaText: D.intl.string(D.t.jVcuVY),
                primaryAsset: tZ,
              },
              {
                id: t_.CLIENT_THEMES_CARD_ID,
                title: D.intl.string(D.t.acc6h6),
                description: D.intl.formatToPlainString(D.t.WQazjs, {
                  themeCount: 20,
                }),
                primaryAsset: tq,
                ctaText: D.intl.string(D.t.jVcuVY),
                onCtaClick: () => {
                  (0, tT.nf)(tT.HP.CUSTOM_THEME);
                },
              },
              {
                id: t_.PERMADECOS_CARD_ID,
                title: D.intl.string(D.t.L14NZN),
                description: D.intl.string(D.t.eCZkAI),
                primaryAsset: (0, a.jsx)(tm, { alt: "", ariaHidden: !0 }),
                ctaText: D.intl.string(D.t.jVcuVY),
                onCtaClick: t ? A : E,
              },
              {
                id: t_.CUSTOM_APP_ICONS_CARD_ID,
                title: D.intl.string(D.t["GU+wqh"]),
                description: D.intl.string(D.t["1uPk1Z"]),
                primaryAsset: t$,
                ctaText: D.intl.string(D.t.y9TxXV),
                onCtaClick: h,
              },
            ],
            i = (e = e.filter((e) => null != e))[0].featured,
            n = i ? 5 : 6;
          return (
            e.splice(+!!i, 0, C), e.length > n && e.splice(n, e.length - n), e
          );
        }, [S, C, P, v, s, T, b, p, h, E, _, A, t, r, c, o]);
      }
      var tJ = i(355097),
        t0 = i(64514),
        t1 = i(121818),
        t2 =
          (((s = {}).BEST_OF_NITRO = "bestof"),
          (s.APPEARANCE_STYLE = "appearance"),
          (s.UPGRADES = "upgrades"),
          (s.VIP_EXTRAS = "vip"),
          s);
      let t7 = [
        { id: "bestof", label: () => D.intl.string(D.t.q1u7nQ) },
        { id: "appearance", label: () => D.intl.string(D.t.CUnZkZ) },
        { id: "upgrades", label: () => D.intl.string(D.t.KC5q8v) },
        { id: "vip", label: () => D.intl.string(D.t.DjEAcv) },
      ];
      var t8 = i(758495);
      function t5(e) {
        let { glowingPerkId: t = null } = e,
          i = (function () {
            let e = (0, tp.DP)(),
              t = (0, tE.X)("useFavoritesPerkCards"),
              i = (0, tf.Lh)(),
              s = (0, tR.N)(i)?.standard ?? null,
              { analyticsLocations: r } = (0, x.Ay)(
                g.A.PREMIUM_MARKETING_PERK_CARD,
              ),
              l = (0, tx.A)({
                scrollPosition: tJ._F.TRY_IT_OUT,
                analyticsLocations: r,
              }),
              c = (0, n.useCallback)(() => {
                (0, Z.openUserSettings)(Y.X.APPEARANCE_THEME_CATEGORY, {
                  analyticsLocations: r,
                });
              }, [r]),
              d = (0, n.useCallback)(() => {
                (0, Z.openUserSettings)(Y.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                  analyticsLocations: r,
                });
              }, [r]),
              o = (0, n.useCallback)(() => {
                (0, Z.openUserSettings)(Y.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
                  analyticsLocations: r,
                });
              }, [r]),
              u = (0, n.useCallback)(() => {
                (0, tN.pX)(eN.BVt.COLLECTIBLES_SHOP);
              }, []),
              m = (0, n.useCallback)(() => {
                (0, Z.openUserSettings)(Y.X.SOUNDBOARD_CATEGORY, {
                  analyticsLocations: r,
                });
              }, [r]),
              A = (0, th.A)({ analyticsLocations: r }),
              p = (0, n.useCallback)(() => {
                (0, Z.openUserSettings)(
                  Y.X.PROFILE_PANEL,
                  { analyticsLocations: r },
                  () => (0, tg.L)({ analyticsLocations: r }),
                );
              }, [r]),
              N = tQ(),
              E = (0, n.useMemo)(() => N.map((e) => e?.id), [N]),
              h = (0, n.useMemo)(
                () => [
                  {
                    id: t_.SERVER_BOOSTS_CARD_ID,
                    title: D.intl.formatToPlainString(D.t.pWySes, {
                      boostCount: 2,
                      percentageOff: 30,
                    }),
                    description: D.intl.formatToPlainString(D.t.cWFUoT, {
                      boostCount: 2,
                      percentageOff: 30,
                    }),
                    subscriptionRequired: !0,
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: d,
                    primaryAsset: (0, a.jsx)(e9, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                  },
                  {
                    id: t_.PROFILES_CARD_ID,
                    title: D.intl.string(D.t.xDRab3),
                    description: D.intl.string(D.t.yn6fWA),
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: t ? A : l,
                    primaryAsset: (0, a.jsx)(e4, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                  },
                  {
                    id: t_.HD_VIDEO_CARD_ID,
                    title: D.intl.string(D.t["/mQ5gg"]),
                    description: D.intl.string(D.t["7WwAXh"]),
                    primaryAsset: (0, a.jsx)(te, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                  },
                  {
                    id: t_.CLIENT_THEMES_CARD_ID,
                    title: D.intl.string(D.t.acc6h6),
                    description: D.intl.formatToPlainString(D.t.WQazjs, {
                      themeCount: 20,
                    }),
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: c,
                    primaryAsset: tq,
                    categories: ["bestof", "appearance"],
                  },
                  {
                    id: t_.MORE_EMOJIS_CARD_ID,
                    title: D.intl.string(D.t.D8vIDT),
                    description: D.intl.string(D.t.DRMecB),
                    primaryAsset: (0, a.jsx)(ti, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                  },
                  {
                    id: t_.LARGE_UPLOADS_CARD_ID,
                    title: D.intl.string(D.t.nL1WZV),
                    description: D.intl.formatToPlainString(D.t.k8LC1w, {
                      maxSizeMb: 500,
                    }),
                    primaryAsset: (0, a.jsx)(ts, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                  },
                  {
                    id: t_.CUSTOM_APP_ICONS_CARD_ID,
                    title: D.intl.string(D.t["GU+wqh"]),
                    description: D.intl.string(D.t["1uPk1Z"]),
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: o,
                    primaryAsset: t$,
                    categories: ["appearance"],
                  },
                  {
                    id: t_.ENTRANCE_SOUNDS_CARD_ID,
                    title: D.intl.string(D.t.WJfCPi),
                    description: D.intl.string(D.t.liQKJR),
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: m,
                    primaryAsset:
                      "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                    categories: ["appearance"],
                  },
                  {
                    id: t_.DISPLAY_NAME_STYLES_CARD_ID,
                    title: D.intl.string(D.t.OLtTrt),
                    description: D.intl.string(D.t["di/pXR"]),
                    onCtaClick: t ? A : p,
                    ctaText: D.intl.string(D.t.jVcuVY),
                    primaryAsset: tZ,
                    categories: ["appearance"],
                  },
                  {
                    id: t_.CUSTOM_SOUNDS_CARD_ID,
                    title: D.intl.string(D.t["Cu/oFd"]),
                    description: D.intl.string(D.t.czj2aa),
                    primaryAsset: (0, a.jsx)(ta, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                  },
                  {
                    id: t_.SPECIAL_STICKERS_CARD_ID,
                    title: D.intl.string(D.t.MQoVeb),
                    description: D.intl.string(D.t.HGCLZX),
                    primaryAsset:
                      "https://cdn.discordapp.com/assets/content/c2f81ce9cd5a044c2108e06f6315d207248ac42098113affcc7afe59458e6d58.svg",
                    categories: ["upgrades"],
                  },
                  {
                    id: t_.SUPER_REACTIONS_CARD_ID,
                    title: D.intl.string(D.t.qERvAA),
                    description: D.intl.string(D.t.WkUWzx),
                    primaryAsset: (0, a.jsx)(tn, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                  },
                  {
                    id: t_.VIDEO_BACKGROUNDS_CARD_ID,
                    title: D.intl.string(D.t.ssVDYQ),
                    description: D.intl.string(D.t.aUSRMa),
                    primaryAsset: (0, tA.M)(e) ? t0 : t1,
                    categories: ["upgrades"],
                  },
                  {
                    id: t_.EARLY_ACCESS_CARD_ID,
                    title: D.intl.string(D.t["g/KRY6"]),
                    description: D.intl.string(D.t.JzAmJc),
                    primaryAsset: (0, a.jsx)(tr, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                  },
                  {
                    id: t_.BADGE_CARD_ID,
                    title: D.intl.string(D.t.Bn3CtB),
                    description: D.intl.string(D.t.LmENwu),
                    subscriptionRequired: !0,
                    primaryAsset:
                      null != s
                        ? (0, a.jsx)("img", {
                            src: s,
                            alt: "",
                            width: 160,
                            draggable: "false",
                          })
                        : (0, a.jsx)(td, {
                            color: tl.A.colors.ICON_MUTED,
                            "aria-hidden": !0,
                          }),
                    categories: ["vip"],
                  },
                  {
                    id: t_.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: D.intl.string(D.t["MTD+7w"]),
                    description: D.intl.string(D.t.Bhs0s6),
                    ctaText: D.intl.string(D.t.dBJVnZ),
                    onCtaClick: u,
                    primaryAsset: (0, a.jsx)(to, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                  },
                  {
                    id: t_.PERMADECOS_CARD_ID,
                    title: D.intl.string(D.t.L14NZN),
                    description: D.intl.string(D.t.eCZkAI),
                    primaryAsset: (0, a.jsx)(tm, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                  },
                ],
                [e, s, l, c, d, o, u, m, p, A, t],
              );
            return (0, n.useMemo)(
              () => h.filter((e) => null != e && !E.includes(e.id)),
              [h, E],
            );
          })(),
          s = null != t ? i.find((e) => e?.id === t) : null,
          [r, l] = (0, n.useState)(s?.categories[0] ?? t2.BEST_OF_NITRO),
          c = (0, n.useMemo)(
            () => i.filter((e) => null != e && e.categories.includes(r)),
            [i, r],
          );
        return (0, a.jsxs)("div", {
          className: t8.uW,
          children: [
            (0, a.jsx)(O.D, {
              variant: "display-sm",
              className: t8.R_,
              children: D.intl.string(D.t["Uh3+CA"]),
            }),
            (0, a.jsx)(e5.V, {
              type: "top-pill",
              look: "custom",
              selectedItem: r,
              onItemSelect: l,
              className: t8.Lq,
              "aria-label": D.intl.string(D.t["Uh3+CA"]),
              children: t7.map((e) =>
                (0, a.jsx)(
                  e5.V.Item,
                  { id: e.id, className: t8.IC, children: e.label() },
                  e.id,
                ),
              ),
            }),
            (0, a.jsx)(
              e6.A,
              {
                gap: 20,
                className: t8.jG,
                children: c.map((e) => {
                  if (null != e)
                    return (0, a.jsx)(
                      e3.S,
                      { ...e, glowing: t === e.id, containerClassName: t8.Ui },
                      e.id,
                    );
                }),
              },
              r,
            ),
          ],
        });
      }
      var t6 = i(254748),
        t3 = i(672193);
      function t9(e) {
        let { glowingPerkId: t = null } = e,
          i = tQ();
        return (0, a.jsx)(t6.A, {
          sectionClassName: t3.uW,
          heading: (0, a.jsx)(O.D, {
            variant: "display-sm",
            className: t3.R_,
            children: D.intl.string(D.t.Aw5DRm),
          }),
          grid: (0, a.jsx)(a.Fragment, {
            children: i.map((e, i) => {
              if (null == e) return;
              let s = 0 === i && !0 === e.featured;
              return (0, a.jsx)(
                e3.S,
                {
                  ...e,
                  glowing: t === e.id,
                  featured: s,
                  containerClassName: l()(t3.Nr, { [t3.Nq]: s }),
                },
                e.id,
              );
            }),
          }),
        });
      }
      var t4 = i(549384),
        ie = i(994763),
        it = i(946062),
        ii = i(288894);
      let is = "section",
        ia = "perk",
        ir = (e) => {
          let { userId: t } = e,
            i = (0, b.ds)(),
            s = (0, N.l)("PremiumSubscriberHome"),
            r = (0, c.zy)();
          n.useEffect(() => {
            p.h.wait(async () => {
              let e = [(0, f.Ay)()];
              null != t && e.push((0, C.A)(t)), await Promise.all(e);
            });
          }, [t]),
            n.useEffect(() => {
              X(!0);
            }, []),
            (0, j.j)(),
            (0, h.P)(E.b);
          let O = n.useRef(null),
            y = n.useRef(null),
            M = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            {
              isReady: L,
              programReward: G,
              isEligible: k,
            } = (0, R.F)({ location: "PremiumSubscriberHome" }),
            {
              scrollTargetId: w,
              glowingSectionId: F,
              glowingPerkId: V,
              scrollBlock: B,
              scrollInline: H,
            } = n.useMemo(() => {
              let e = new URLSearchParams(r.search),
                t = e.get(ia),
                i = e.get(is);
              return null != t
                ? {
                    scrollTargetId: t,
                    glowingPerkId: t,
                    scrollBlock: "center",
                    scrollInline: "center",
                  }
                : null != i
                  ? {
                      scrollTargetId: i,
                      glowingSectionId: i,
                      scrollBlock: "start",
                    }
                  : {};
            }, [r.search]);
          (0, ie.z)(w ?? "", null != w, B, H);
          let [z, X] = n.useState(!1),
            W = (0, S.p)(),
            K = n.useRef(null),
            [Y, Z] = n.useState(!1),
            $ = null != W && null != M && M.status === eN.Dmq.CANCELED,
            q = (0, v.iU)(eK.gD.PREMIUM_MONTH_TIER_2, W, M),
            Q = !Y && $,
            { analyticsLocations: J } = (0, x.Ay)(
              g.A.PREMIUM_SUBSCRIBER_NITRO_HOME,
            ),
            [ee, et] = n.useState(!1);
          return null !=
            (0, d.bG)([_.A], () =>
              null != t ? _.A.getUserProfile(t) : null,
            ) &&
            (L || null != G)
            ? (0, a.jsxs)(m.Gt, {
                className: it.xW,
                ref: O,
                children: [
                  (0, a.jsx)(A.h, {
                    color: "nitro-pink",
                    className: l()(it.kL, it.Gd),
                    offsetBottom: i ? 0.55 : 0.8,
                    children: (0, a.jsxs)(x.f5, {
                      value: J,
                      children: [
                        (0, a.jsx)(o.L, {
                          innerRef: K,
                          onChange: (e) => Z(e),
                          threshold: 0.1,
                          active: !0,
                          children: (0, a.jsx)(eJ, {
                            buttonVisibilityRef: K,
                            className: it.v1,
                            userDiscountOffer: W,
                            discountedPrice: q,
                          }),
                        }),
                        (0, a.jsx)(P.A, { glowingSectionId: F }),
                        (0, a.jsx)(t9, { glowingPerkId: V }),
                        null != G &&
                          k &&
                          !s &&
                          (0, a.jsx)(t4.A, {
                            location:
                              g.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                          }),
                        (0, a.jsx)(t5, { glowingPerkId: V }),
                        (0, a.jsx)(U, {
                          className: it.Zy,
                          location: g.A.PREMIUM_MARKETING_GIFT_SECTION,
                          analyticsLocation: {
                            page: eN.liQ.NITRO_HOME,
                            section: eN.JJy.GIFT_BANNER,
                          },
                        }),
                        (0, a.jsx)("div", { className: it.hz }),
                        (0, a.jsx)(o.L, {
                          innerRef: y,
                          onChange: (e) => {
                            e &&
                              !ee &&
                              (T.default.track(
                                eN.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM,
                                { location_stack: J },
                              ),
                              et(!0));
                          },
                          children: (0, a.jsx)("div", {
                            ref: y,
                            className: it._Z,
                          }),
                        }),
                        (0, a.jsx)("img", {
                          src: ii,
                          className: it.Kw,
                          width: 112,
                          height: 85,
                          alt: D.intl.string(D.t.X4IxWL),
                        }),
                      ],
                    }),
                  }),
                  $ &&
                    null != q &&
                    (0, a.jsx)(e8, {
                      isVisible: Q && z,
                      premiumSubscription: M,
                      churnDiscountOffer: W,
                      discountedPrice: q,
                    }),
                ],
              })
            : (0, a.jsx)("div", {
                className: l()(it.kL, it.Lq),
                children: (0, a.jsx)(u.y, {}),
              });
        };
    },
    994763(e, t, i) {
      i.d(t, { z: () => r });
      var s = i(64700),
        a = i(17928),
        n = i(775602);
      function r(e, t, i, r) {
        !(function (e, t, i) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "start",
            l = arguments.length > 4 ? arguments[4] : void 0,
            c = (0, a.bG)([n.A], () => n.A.useReducedMotion),
            d = s.useRef(!1);
          s.useEffect(() => {
            if (!t || d.current) return;
            let i = { behavior: c ? "auto" : "smooth", block: r, inline: l },
              s = e();
            if (null != s && s.offsetHeight > 0) {
              (d.current = !0), s.scrollIntoView(i);
              return;
            }
            let a = !1,
              n = null,
              o = new ResizeObserver((e) => {
                let t = e[0];
                null == t ||
                  !(t.contentRect.height > 0) ||
                  d.current ||
                  a ||
                  ((d.current = !0),
                  o.disconnect(),
                  t.target.scrollIntoView(i));
              }),
              u = performance.now(),
              m = () => {
                if (a || performance.now() - u > 5e3) return;
                let t = e();
                null != t
                  ? t.offsetHeight > 0
                    ? ((d.current = !0), t.scrollIntoView(i))
                    : o.observe(t)
                  : (n = requestAnimationFrame(m));
              };
            return (
              m(),
              () => {
                (a = !0), null != n && cancelAnimationFrame(n), o.disconnect();
              }
            );
          }, [t, c, r, l, ...i]),
            s.useEffect(() => {
              t || (d.current = !1);
            }, [t]);
        })(() => document.getElementById(e), t, [e], i, r);
      }
    },
    256358(e, t, i) {
      i.d(t, { A: () => E, S: () => h });
      var s = i(627968),
        a = i(64700),
        n = i(793574),
        r = i(688810),
        l = i(31502),
        c = i(975571),
        d = i(398523),
        o = i(881373),
        u = i(581921),
        m = i(852218),
        A = i(382259),
        p = i(920050),
        g = i(652215),
        x = i(962995),
        N = i(985018);
      function E() {
        let { analyticsLocations: e } = (0, r.Ay)(
            n.A.PREMIUM_MARKETING_PERK_CARD,
          ),
          t = (0, o.YS)({
            location: "useWhatsNewPerkCards",
          }).functionalityEnabled,
          i = d.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
          E = (0, l.l)("useHardwarePartnerPerkCards"),
          { currentDate: h, nDaysInMonth: f } = (0, a.useMemo)(() => {
            let e = new Date();
            return {
              currentDate: e,
              nDaysInMonth: new Date(
                e.getFullYear(),
                e.getMonth() + 1,
                0,
              ).getDate(),
            };
          }, []);
        return (0, a.useMemo)(() => {
          let a = E ? void 0 : N.intl.string(N.t.y2b7CA);
          return {
            logitechCard: t
              ? {
                  id: p.LOGITECH_3PP_CARD_ID,
                  title: N.intl.string(x.default.OlObRa),
                  description: N.intl.format(x.default["/UNTlE"], {
                    discountPercent: o.aW,
                    termsUrl: c.A.getArticleURL(g.MVz.LOGITECH_PROMOTION),
                  }),
                  subscriptionRequired: !0,
                  progress: h.getDate() / f,
                  ctaText: N.intl.string(N.t.w7s5Qr),
                  onCtaClick: () => (0, u.P)({ partnerId: m.XY }),
                  blurTint: "#2E213D",
                  backgroundAssetUrl:
                    "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                  pillText: a,
                  caption: (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                    alt: "Logitech",
                  }),
                }
              : null,
            steelseriesCard: i
              ? {
                  id: p.RECURRING_3P_PROMOTIONS_CARD_ID,
                  title: N.intl.string(N.t.m7PucM),
                  description: N.intl.format(N.t.zh1X7u, {}),
                  subscriptionRequired: !0,
                  pillText: a,
                  caption: (0, s.jsx)("img", {
                    src: "/assets/aae9b13becd816cf.svg",
                    alt: "SteelSeries",
                  }),
                  backgroundAssetUrl:
                    "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                  progress: h.getDate() / f,
                  ctaText: N.intl.string(N.t.w7s5Qr),
                  onCtaClick: () =>
                    (0, A.u)({
                      analyticsLocations: e,
                      partnerIds: [m.KS, m.Cs],
                    }),
                  blurTint: "#2E213D",
                }
              : null,
          };
        }, [E, e, h, t, f, i]);
      }
      function h() {
        return (0, l.l)("premium_subscriber_home_rewards");
      }
    },
    581921(e, t, i) {
      i.d(t, { P: () => b, ThirdPartyPromotionsModal: () => T });
      var s = i(627968);
      i(64700);
      var a = i(289873),
        n = i(189213),
        r = i(834730),
        l = i(17928),
        c = i(192308),
        d = i(793574),
        o = i(954571),
        u = i(975571),
        m = i(597758),
        A = i(35587),
        p = i(374200),
        g = i(56225),
        x = i(881373);
      let N = (e) => {
        let { promotion: t, analyticsLocations: i } = e;
        return (0, s.jsx)(g.wx, {
          recurrence: t,
          titleVariant: "secondary",
          showPartnerLogo: !1,
          showPartnerImage: !1,
          analyticsLocations: i,
        });
      };
      var E = i(652215),
        h = i(962995),
        f = i(985018),
        R = i(75662);
      let _ = {
          Logitech30P: {
            title: h.default.jkdhZq,
            titleParams: { discountPercent: x.aW },
            body: h.default.Yl5ww1,
          },
          "Logitech G": {
            title: h.default.jkdhZq,
            titleParams: { discountPercent: x.aW },
            body: h.default.Yl5ww1,
          },
          Logitech5PNI: {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: x.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
          },
          "Logitech 5%": {
            title: h.default.zeBjoX,
            titleParams: { discountPercent: x.y$ },
            body: h.default.fC4abC,
            bodyParams: { months: 6 },
          },
          Logitech5PGS: {
            title: h.default.ogcfac,
            titleParams: { discountPercent: x.K2 },
          },
        },
        C = {
          logitech: {
            modalTitle: h.default["2I7nK+"],
            modalSubtitle: {
              message: h.default.W8jOD0,
              values: { termsUrl: u.A.getArticleURL(E.MVz.LOGITECH_PROMOTION) },
            },
            landingUrl: "https://www.logitech.com/",
          },
        },
        I = (e, t) => {
          let i = _[e.outboundTitle];
          return {
            id: e.id,
            partnerId: e.partnerId ?? "",
            title:
              null != i
                ? f.intl.formatToPlainString(i.title, i.titleParams ?? {})
                : "",
            body:
              null != i && null != i.body
                ? f.intl.formatToPlainString(i.body, i.bodyParams ?? {})
                : "",
            startDate: e.startDate,
            endDate: e.endDate,
            redemptionURL: e.outboundRedemptionPageLink,
            code: t,
          };
        },
        T = (e) => {
          let { partnerId: t, transitionState: i, onClose: c } = e,
            o = C[t],
            [u, m] = (0, l.yK)([p.A], () => {
              let { recurring: e, oneTime: i } = p.A.getPromotionsByPartner(t);
              return [
                e.filter((e) => null != _[e.outboundTitle]),
                i.filter((e) => null != _[e.outboundTitle]),
              ];
            }),
            { promotionsLoaded: x, claimedOutboundPromotionCodeMap: E } = (0,
            A.y7)();
          if (!x) return (0, s.jsx)(a.y, {});
          let T =
              o?.modalSubtitle != null
                ? f.intl.format(o.modalSubtitle.message, o.modalSubtitle.values)
                : void 0,
            b = null == o ? t : f.intl.string(o.modalTitle);
          return (0, s.jsx)(n.Modal, {
            title: b,
            subtitle: T,
            actions: [],
            transitionState: i,
            onClose: c,
            children: (0, s.jsxs)("div", {
              className: R.kL,
              children: [
                u.length > 0 &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(r.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: f.intl.string(h.default["9Y2p6p"]),
                      }),
                      (0, s.jsx)("div", {
                        className: R.kR,
                        children: u.map((e) =>
                          (0, s.jsx)(
                            g.wx,
                            {
                              recurrence: {
                                ...I(e, E[e.id] ?? null),
                                asset:
                                  (0, g.Cf)()[e.partnerId ?? ""]?.asset ?? "",
                              },
                              showPartnerImage: !0,
                              displayCTAInDedicatedFooter: !0,
                              analyticsLocations: [
                                d.A.THIRD_PARTY_PROMOTIONS_MODAL,
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                m.length > 0 &&
                  (0, s.jsxs)("div", {
                    className: R.E7,
                    children: [
                      (0, s.jsx)(r.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: f.intl.string(h.default.Wm58LR),
                      }),
                      (0, s.jsx)("div", {
                        className: R.kR,
                        children: m.map((e) =>
                          (0, s.jsx)(
                            N,
                            {
                              promotion: I(e, E[e.id] ?? null),
                              analyticsLocations: [
                                d.A.THIRD_PARTY_PROMOTIONS_MODAL,
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        b = (e) => {
          let { partnerId: t } = e;
          o.default.track(E.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, {
            partner_id: t,
          }),
            m.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
              let { ThirdPartyPromotionsModal: e } =
                await Promise.resolve().then(i.bind(i, 581921));
              return (i) => (0, s.jsx)(e, { ...i, partnerId: t });
            });
        };
    },
    498470(e, t, i) {
      i.d(t, { h: () => d });
      var s = i(232582),
        a = i(532794),
        n = i(976860),
        r = i(332732),
        l = i(788868),
        c = i(652215);
      function d(e) {
        let {
          buttonAction: t,
          deeplinkSection: i,
          analyticsLocations: d = [],
          analyticsLocation: o,
          onClose: u,
        } = e;
        switch (t) {
          case s.dz.OPEN_MARKETING_PAGE:
            return () => {
              let e =
                null != i && "" !== i
                  ? `${c.BVt.APPLICATION_STORE}?${r.x6}=${encodeURIComponent(i)}`
                  : c.BVt.APPLICATION_STORE;
              (0, n.pX)(e), u?.();
            };
          case s.dz.OPEN_TIER_1_PAYMENT_MODAL:
            return () =>
              (0, a.A)({
                subscriptionTier: l.pe.TIER_1,
                analyticsLocations: d,
                analyticsObject: {
                  ...o,
                  object: c.ZSU.BUTTON_CTA,
                  objectType: c.AnalyticsObjectTypes.TIER_1,
                },
                onClose: (e) => {
                  e && u?.();
                },
              });
          case s.dz.OPEN_PLAN_SELECTION_MODAL:
            return () => (0, a.A)({ analyticsLocations: d });
          case s.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL:
            return () =>
              (0, a.A)({
                subscriptionTier: l.pe.TIER_2,
                initialPlanId: l.gD.PREMIUM_GROUP_MONTH,
                analyticsLocations: d,
                analyticsObject: {
                  ...o,
                  object: c.ZSU.BUTTON_CTA,
                  objectType: c.AnalyticsObjectTypes.TIER_2,
                },
                onClose: (e) => {
                  e && u?.();
                },
              });
          case s.dz.OPEN_TIER_2_PAYMENT_MODAL:
          case s.dz.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
          default:
            return () =>
              (0, a.A)({
                subscriptionTier: l.pe.TIER_2,
                analyticsLocations: d,
                analyticsObject: {
                  ...o,
                  object: c.ZSU.BUTTON_CTA,
                  objectType: c.AnalyticsObjectTypes.TIER_2,
                },
                onClose: (e) => {
                  e && u?.();
                },
              });
        }
      }
    },
    637706(e, t, i) {
      i.d(t, { C: () => u, a: () => o });
      var s = i(17928),
        a = i(97352),
        n = i(975571),
        r = i(927578),
        l = i(580630),
        c = i(788868),
        d = i(985018);
      function o(e) {
        let t = "...",
          i = (0, s.bG)([a.A], () => a.A.isLoadedForSKU(c.pe.TIER_2));
        if (-1 !== e.indexOf("{price}") && i)
          try {
            let e = r.Ay.getDefaultPrice(c.gD.PREMIUM_MONTH_TIER_2);
            t = (0, l.$g)(e.amount, e.currency);
          } catch {}
        return e.replace(/\{price\}/g, t);
      }
      function u(e, t) {
        let i = e?.id != null && "" !== e.id ? e.id : t;
        if ("" === i) return null;
        let s =
          e?.linkText != null && "" !== e.linkText
            ? e.linkText
            : d.intl.string(d.t["sBp+u0"]);
        return { url: n.A.getArticleURL(i), linkText: s };
      }
    },
    371764(e, t, i) {
      i.d(t, { x: () => E });
      var s = i(627968);
      i(64700);
      var a = i(110259),
        n = i(877624),
        r = i(403581),
        l = i(534514),
        c = i(834730),
        d = i(232582),
        o = i(821609),
        u = i(349288),
        m = i(212245),
        A = i(688810),
        p = i(139286),
        g = i(498470),
        x = i(637706),
        N = i(975841);
      let E = (e) => {
        let { componentId: t, promotionBannerMarketingComponentFields: i } = e,
          { analyticsLocations: E } = (0, A.Ay)(),
          h = (0, m.p)();
        (0, p.A)({
          type: a.ImpressionTypes.VIEW,
          name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
          properties: {
            component_type: n.C.MARKETING_PAGE_BANNER,
            component_id: t,
          },
        });
        let f = (0, g.h)({
            buttonAction:
              i.button?.buttonAction ?? d.dz.OPEN_TIER_2_PAYMENT_MODAL,
            deeplinkSection: i.button?.deeplinkSection,
            analyticsLocations: E,
            analyticsLocation: h.location,
          }),
          R = (0, x.a)(i.body),
          _ = (0, x.C)(i.helpArticle, i.helpArticleId);
        return (0, s.jsxs)("div", {
          className: N.kL,
          children: [
            (0, s.jsx)("div", {
              className: N.LY,
              children: (0, s.jsx)("img", {
                src: i.assetUrl,
                className: N.ot,
                alt: "",
              }),
            }),
            (0, s.jsxs)("div", {
              className: N.IH,
              children: [
                (0, s.jsx)(l.D, {
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: i.header,
                }),
                (0, s.jsxs)(c.E, {
                  variant: "text-md/medium",
                  color: "text-subtle",
                  className: N.tb,
                  children: [
                    R,
                    null != _ &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          "\xa0",
                          (0, s.jsx)(u.Anchor, {
                            className: N.$T,
                            href: _.url,
                            children: _.linkText,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            null != i.button &&
              (0, s.jsx)("div", {
                className: N.UD,
                children: (0, s.jsx)(o.$, {
                  variant: "expressive",
                  size: "md",
                  onClick: f,
                  text: i.button.copy,
                  icon: r.t,
                }),
              }),
          ],
        });
      };
    },
    949964(e, t, i) {
      i.d(t, { c: () => _, A: () => C });
      var s,
        a = i(627968);
      i(64700);
      var n = i(503698),
        r = i.n(n),
        l = i(862482),
        c = i(366010),
        d = i(534514),
        o = i(834730),
        u = i(736653),
        m = i(793574),
        A = i(688810);
      function p(e) {
        let { analyticsLocations: t } = (0, A.Ay)(...e.newLocations);
        return (0, a.jsx)(A.di.Provider, { value: t, children: e.children });
      }
      var g = i(975571),
        x = i(40185),
        N = i(396375),
        E = i(788868),
        h = i(652215),
        f = i(985018),
        R = i(74981),
        _ =
          (((s = {}).SUBSCRIBER_HOME = "SUBSCRIBER_HOME"),
          (s.NITRO_SETTINGS = "SETTINGS"),
          (s.APPLICATION_NITRO_HOME = "APPLICATION_NITRO_HOME"),
          s);
      let C = function (e) {
        let { variant: t } = e,
          i = (0, x.cg)(),
          s = (0, u.Ay)(),
          n = (0, c.M)(s) ? l.XD.BRAND_INVERTED : l.XD.BRAND;
        return i
          ? "APPLICATION_NITRO_HOME" === t
            ? (0, a.jsx)(
                () =>
                  (0, a.jsx)(p, {
                    newLocations: [m.A.PREMIUM_MARKETING_PAGE_BANNER],
                    children: (0, a.jsxs)("div", {
                      className: R._G,
                      children: [
                        (0, a.jsx)("div", {
                          className: R.V2,
                          children: (0, a.jsx)("div", { className: R.N4 }),
                        }),
                        (0, a.jsx)("div", {
                          className: r()(R.Fg, R.cj),
                          children: (0, a.jsx)(o.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: f.intl.string(f.t.OS9KPu),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: R.IH,
                          children: [
                            (0, a.jsx)(d.D, {
                              className: R.U_,
                              variant: "heading-xxl/extrabold",
                              color: "text-strong",
                              children: f.intl.string(f.t["+5UxML"]),
                            }),
                            (0, a.jsx)(o.E, {
                              className: R._M,
                              variant: "text-md/medium",
                              color: "text-subtle",
                              children: f.intl.format(f.t["lVOH/p"], {
                                helpCenterLink: g.A.getArticleURL(
                                  h.MVz.SUMMER_BOGO_2025,
                                ),
                              }),
                            }),
                            (0, a.jsx)(N.A, {
                              textOptions: {
                                textOverride: f.intl.string(f.t.J61px0),
                                textClassName: R.cZ,
                              },
                              subscriptionTier: E.pe.TIER_2,
                              showIcon: !1,
                              className: R.xF,
                              color: n,
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: R.ZS,
                          children: (0, a.jsx)("img", {
                            alt: "",
                            src: "https://cdn.discordapp.com/assets/content/5ed4a5e53464f95f9a0a196a99b667b06b979eee4a7b7ede0442fa433c9833d0.png",
                            className: R.F$,
                          }),
                        }),
                      ],
                    }),
                  }),
                {},
              )
            : "SETTINGS" === t
              ? (0, a.jsx)(
                  () =>
                    (0, a.jsx)(p, {
                      newLocations: [m.A.PREMIUM_SETTINGS],
                      children: (0, a.jsxs)("div", {
                        className: R.O3,
                        children: [
                          (0, a.jsx)("div", {
                            className: R.V9,
                            children: (0, a.jsx)("img", {
                              alt: "",
                              src: "https://cdn.discordapp.com/assets/content/c363ff378ffd04d0561977f632dc2e1e5ca4906c8850be095be53ea369cdf309.png",
                              className: R.$V,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: R.l$,
                            children: [
                              (0, a.jsx)(d.D, {
                                className: R.U_,
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: f.intl.string(f.t["+5UxML"]),
                              }),
                              (0, a.jsx)(o.E, {
                                className: R._M,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: f.intl.format(f.t["lVOH/p"], {
                                  helpCenterLink: g.A.getArticleURL(
                                    h.MVz.SUMMER_BOGO_2025,
                                  ),
                                }),
                              }),
                              (0, a.jsx)(N.A, {
                                textOptions: {
                                  textOverride: f.intl.string(f.t.J61px0),
                                  textClassName: R.cZ,
                                },
                                subscriptionTier: E.pe.TIER_2,
                                showIcon: !1,
                                className: R.xF,
                                color: n,
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: R.m0,
                            children: (0, a.jsx)("img", {
                              alt: "",
                              src: "https://cdn.discordapp.com/assets/content/4135eb5d081957191871c8ca942b65dab5d2c7cc0aea71c6099dc470d4b648c8.png",
                              className: R.$V,
                            }),
                          }),
                        ],
                      }),
                    }),
                  {},
                )
              : (0, a.jsx)(
                  () =>
                    (0, a.jsxs)("div", {
                      className: R.jo,
                      children: [
                        (0, a.jsx)("div", {
                          className: R.yk,
                          children: (0, a.jsx)("img", {
                            alt: "",
                            src: "https://cdn.discordapp.com/assets/content/e575cd15e039114aa5d6e92f4466b42043e8c035b5c26785806ce1e497892c7b.png",
                            className: R.$V,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: R.Ep,
                          children: [
                            (0, a.jsx)(d.D, {
                              className: R.U_,
                              variant: "heading-md/extrabold",
                              color: "text-strong",
                              children: f.intl.string(f.t["+5UxML"]),
                            }),
                            (0, a.jsx)(o.E, {
                              className: R._M,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: f.intl.format(f.t["lVOH/p"], {
                                helpCenterLink: g.A.getArticleURL(
                                  h.MVz.SUMMER_BOGO_2025,
                                ),
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(N.A, {
                          subscriptionTier: E.pe.TIER_2,
                          showIcon: !0,
                          shinyButtonClassName: R.Xp,
                          hasActivePromotion: !0,
                        }),
                      ],
                    }),
                  {},
                )
          : null;
      };
    },
    103411(e, t, i) {
      i.d(t, { m: () => r });
      var s = i(17928),
        a = i(851746),
        n = i(190187);
      let r = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
          (0, n.i)(e),
          (0, s.bG)([a.A], () => a.A.getIsEligibleToSendReferrals())
        );
      };
    },
    190187(e, t, i) {
      i.d(t, { i: () => m });
      var s = i(64700),
        a = i(17928),
        n = i(531260),
        r = i(287809),
        l = i(474090),
        c = i(367319),
        d = i(89366),
        o = i(851746),
        u = i(788868);
      let m = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = (0, a.bG)([r.default], () => r.default.getCurrentUser()),
          i = (0, c.k5)(),
          m = (0, d.QQ)(),
          A = (0, n.A)(),
          p =
            t?.verified === !0 &&
            (0, l.YE)(t, u.PremiumTypes.TIER_2) &&
            A.fetched &&
            A.fractionalState !== u.xc.FP_ONLY &&
            !i &&
            !m;
        s.useEffect(() => {
          p && !e && o.A.checkAndFetchReferralsRemaining();
        }, [p, e]);
      };
    },
    664654(e, t, i) {
      i.d(t, { J: () => d, Z: () => c });
      var s = i(64700),
        a = i(17928),
        n = i(803306),
        r = i(287809),
        l = i(851746);
      let c = 3;
      function d() {
        let e = (0, a.yK)([l.A], () => l.A.getSentUserIds()),
          t = (0, a.yK)([r.default], () =>
            e.map((e) => r.default.getUser(e)).filter((e) => null != e),
          );
        return (
          s.useEffect(() => {
            e.forEach((e) => {
              (0, n.wz)(e);
            });
          }, [e]),
          {
            referralSentUsers: t,
            hasSentAllReferrals: e.length === c,
            refreshAt: (0, a.bG)([l.A], () => l.A.getRefreshAt()),
          }
        );
      }
    },
    972007(e, t, i) {
      i.d(t, { i: () => o }), i(321073);
      var s = i(64700),
        a = i(284009),
        n = i.n(a),
        r = i(17928),
        l = i(803306),
        c = i(326084),
        d = i(851746);
      let o = (e) => {
        let { searchQuery: t, selectedUsers: i, limit: a } = e,
          o = (0, r.bG)([d.A], () => d.A.getRecipientStatus()),
          u = (0, r.bG)([d.A], () => d.A.getReferralsRemaining()),
          [m, A] = s.useState(0),
          [p, g] = s.useState([]),
          [x, N] = s.useState(!1),
          [E, h] = s.useState(!1),
          [f, R] = s.useState(new Map());
        n()(null != u, "Referrals remaining should not be null");
        let _ = async (e, s) => {
            if (!x && !E && null != e && 0 !== u)
              try {
                N(!0);
                let a = [...f.values()];
                for (let [e, t] of o)
                  if (t === c.aK.PENDING && !f.has(e)) {
                    let t = await (0, l.wz)(e);
                    a.push(t);
                  }
                let n = await (0, c.P7)(e, t, s);
                g((t) => {
                  a = a.filter((e) => !i.has(e.id));
                  let s = new Set(a.map((e) => e.id)),
                    r = n.users.filter((e) => !i.has(e.id) && !s.has(e.id));
                  return 0 === e
                    ? [...i.values(), ...a.values(), ...r]
                    : [...t, ...r];
                }),
                  R((e) => {
                    let t = new Map(e);
                    for (let e of a) t.set(e.id, e);
                    return t;
                  }),
                  A(n.nextIndex);
              } catch (e) {
                h(!0);
              } finally {
                N(!1);
              }
          },
          C = {
            limit: a,
            getNextRows: _,
            getLocalReferrals: async () => {
              let e = new Map();
              for (let [t, i] of o)
                if (i === c.aK.PENDING && !f.has(t)) {
                  let i = await (0, l.wz)(t);
                  e.set(i.id, i);
                }
              R(e), g(Array.from(e.values()));
            },
          },
          I = s.useRef(C);
        return (
          s.useEffect(() => {
            I.current = C;
          }),
          s.useEffect(() => {
            let { getNextRows: e, limit: t, getLocalReferrals: i } = I.current;
            u > 0 ? e(0, t) : i();
          }, [t, u]),
          {
            eligibleUsers: p,
            fetchUsers: () => _(m, a),
            hasError: E,
            isFetching: x,
            resendUsers: f,
          }
        );
      };
    },
    212737(e, t, i) {
      i.d(t, { SelectFriendsModalScreens: () => H, default: () => z });
      var s,
        a = i(627968),
        n = i(64700),
        r = i(503698),
        l = i.n(r),
        c = i(189213),
        d = i(17928),
        o = i(732771),
        u = i(821609),
        m = i(289873),
        A = i(803306),
        p = i(718213),
        g = i(793574),
        x = i(688810),
        N = i(994500),
        E = i(954571),
        h = i(975571),
        f = i(427262),
        R = i(326084),
        _ = i(851746),
        C = i(794783),
        I = i(972007),
        T = i(772707),
        b = i(844222),
        S = i(778712),
        j = i(97808),
        v = i(834730),
        P = i(534890),
        O = i(90517),
        y = i(308528),
        M = i(854627),
        D = i(779733),
        L = i(652215),
        U = i(985018),
        G = i(494025);
      let k = (e) => {
          let { recipient: t, status: i, onClose: s } = e,
            { avatarSrc: n, eventHandlers: r } = (0, M.A)({
              userId: t?.id,
              size: S._3.SIZE_56,
            }),
            c = f.Ay.getName(t),
            d = i === R.o.FAIL;
          return (0, a.jsxs)("div", {
            className: G.w4,
            children: [
              (0, a.jsx)(j.eu, {
                imageClassName: l()({ [G.jN]: d }),
                src: n,
                "aria-label": c,
                size: S._3.SIZE_32,
                ...r,
              }),
              d
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(v.E, {
                        className: G.E0,
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: c,
                      }),
                      (0, a.jsx)(v.E, {
                        variant: "text-md/medium",
                        className: G.nT,
                        color: "text-strong",
                        children: U.intl.format(U.t.RO3T4B, { userName: c }),
                      }),
                    ],
                  })
                : (0, a.jsx)(v.E, {
                    variant: "text-md/medium",
                    className: G.Pm,
                    color: "text-strong",
                    children: c,
                  }),
              (0, a.jsx)(u.$, {
                variant: "secondary",
                size: "sm",
                text: U.intl.string(U.t["g33r/P"]),
                icon: P.o,
                onClick: () => {
                  var e;
                  return (
                    (e = t.id),
                    void ((0, D.default)(),
                    y.A.openPrivateChannel({ recipientIds: e }),
                    s())
                  );
                },
              }),
            ],
          });
        },
        w = (e) => {
          let {
              transitionState: t,
              results: i,
              onClose: s,
              isReminderConfirmation: r,
            } = e,
            l = (0, d.bG)([_.A], () => _.A.getReferralsRemaining());
          E.default.track(L.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
          let { reducedMotion: c } = n.useContext(b.C);
          return null === l
            ? (0, a.jsx)(m.y, {})
            : (0, a.jsx)(T.k, {
                graphic: c.enabled
                  ? {
                      src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                      type: "image",
                    }
                  : { rive: O.l, type: "rive" },
                gradientColor: "nitro-pink",
                title:
                  0 === i.filter((e) => e.status === R.o.SUCCESS).length
                    ? U.intl.string(U.t["7VBEue"])
                    : !0 === r
                      ? U.intl.string(U.t.GP5lbq)
                      : U.intl.string(U.t.tKCltd),
                subtitle:
                  !0 === r
                    ? U.intl.format(U.t["4gJJfD"], {
                        helpdeskArticle: h.A.getArticleURL(
                          L.MVz.REFERRAL_PROGRAM,
                        ),
                      })
                    : U.intl.format(U.t.AwGSWl, {
                        helpdeskArticle: h.A.getArticleURL(
                          L.MVz.REFERRAL_PROGRAM,
                        ),
                      }),
                onClose: s,
                transitionState: t,
                children: (0, a.jsx)("div", {
                  className: G.Hz,
                  children: i.map((e) =>
                    (0, a.jsx)(
                      k,
                      { recipient: e.recipient, status: e.status, onClose: s },
                      e.recipient.id,
                    ),
                  ),
                }),
              });
        };
      var F = i(468049);
      let V = (e) => {
          let { transitionState: t, onClose: i, onShare: s } = e,
            r = (0, d.bG)([_.A], () => _.A.getReferralsRemaining()),
            A = (0, d.bG)([_.A], () => _.A.getHasEligibleFriends()),
            [g, x] = n.useState(new Map()),
            [N, E] = n.useState(""),
            R = (0, p.A)(N, 400),
            {
              eligibleUsers: T,
              fetchUsers: b,
              hasError: S,
              isFetching: j,
              resendUsers: v,
            } = (0, I.i)({ searchQuery: R, selectedUsers: g }),
            [P, O] = n.useState(!1),
            y = T.reduce(
              (e, t) => (e.has(t.id) || e.set(t.id, t), e),
              new Map(),
            );
          return null === r
            ? (0, a.jsx)(m.y, {})
            : S
              ? (0, a.jsx)(c.Modal, {
                  transitionState: t,
                  size: "sm",
                  title: U.intl.string(U.t.lcuio4),
                  subtitle: U.intl.string(U.t["x09+CD"]),
                  onClose: i,
                  actions: [],
                })
              : !1 === A
                ? (0, a.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: U.intl.string(U.t["2YigPp"]),
                    subtitle: U.intl.format(U.t.OOCbz8, {
                      helpdeskArticle: h.A.getArticleURL(
                        L.MVz.REFERRAL_PROGRAM,
                      ),
                    }),
                    onClose: i,
                    actions: [],
                  })
                : (0, a.jsx)(c.Modal, {
                    size: "md",
                    transitionState: t,
                    title: U.intl.string(U.t["2dVCLl"]),
                    subtitle: U.intl.string(U.t.DXgoi2),
                    onClose: i,
                    input: (0, a.jsx)(o.iS, {
                      selectionMode: "multiple",
                      value: Array.from(g.values()),
                      options: Array.from(y.values()),
                      formatOption: (e) => ({
                        id: e.id,
                        value: e,
                        label: f.Ay.getName(e),
                      }),
                      onSelectionChange: (e) => {
                        let t = Array.isArray(e) ? e : [e],
                          i = new Map();
                        t.forEach((e) => {
                          null != e && i.set(e.id, e);
                        }),
                          x(i);
                      },
                      children: (0, a.jsx)("div", {
                        className: F.c,
                        children: (0, a.jsx)(o.a3, {
                          placeholder:
                            0 === g.size ? U.intl.string(U.t.Kd5RaI) : "",
                          onQueryChange: (e) => {
                            E(e.target.value);
                          },
                        }),
                      }),
                    }),
                    actions: [],
                    actionBarInput: ((e) => {
                      let t,
                        { eligibleRecipients: n } = e,
                        r = R.length > 0 && 0 === n.size;
                      return (
                        (t =
                          !0 === r
                            ? U.intl.string(U.t.wpSqAW)
                            : g.size <= 1
                              ? U.intl.string(U.t.ItpQxk)
                              : U.intl.format(U.t.iW2stn, { nTrials: g.size })),
                        (0, a.jsx)("div", {
                          className: l()(F.qr, F.h0),
                          children: (0, a.jsx)(u.$, {
                            variant: "primary",
                            disabled: (0 === g.size && !r) || P,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                              r
                                ? i()
                                : (O(!0), await s([...g.values()]), O(!1));
                            },
                          }),
                        })
                      );
                    })({ eligibleRecipients: y }),
                    children: ((e) => {
                      let { eligibleRecipients: t } = e;
                      return (0, a.jsx)(C.A, {
                        users: Array.from(t.values()),
                        isUserSelected: (e) => g.has(e.id),
                        onSelectionChange: (e, t) => {
                          x((i) => {
                            let s = new Map(i);
                            return t ? s.set(e.id, e) : s.delete(e.id), s;
                          });
                        },
                        isFetching: j,
                        onFetchMore: b,
                        isUserDisabled: (e) =>
                          null !== r &&
                          0 !== r &&
                          [...g.values()].filter((e) => !v.has(e.id)).length >=
                            r &&
                          !g.has(e.id) &&
                          !v.has(e.id),
                        searchQuery: R,
                        emptySearchContent: {
                          header: U.intl.string(U.t["8+ywHD"]),
                          body: U.intl.string(U.t.CgQmY2),
                        },
                        className: F.p_,
                      });
                    })({ eligibleRecipients: y }),
                  });
        },
        B = (e) => {
          let t,
            { transitionState: i, onClose: s, onShare: r } = e,
            o = (0, d.bG)([_.A], () => _.A.getRecipientStatus()),
            [m, p] = n.useState(new Map()),
            [g, x] = n.useState(new Map()),
            [E, h] = n.useState(!1);
          return (
            n.useEffect(() => {
              (async () => {
                let e = new Map();
                for (let [t, i] of o) {
                  if (N.A.isBlockedOrIgnored(t)) continue;
                  let s = await (0, A.wz)(t);
                  (s.referralStatus = i), e.set(s.id, s);
                }
                p(e);
              })();
            }, [o]),
            (0, a.jsx)(c.Modal, {
              size: "md",
              transitionState: i,
              title: U.intl.string(U.t.rKmy8I),
              subtitle: U.intl.string(U.t.VDlF6o),
              onClose: s,
              actions: [],
              actionBarInput:
                ((t =
                  g.size <= 1
                    ? U.intl.string(U.t.ItpQxk)
                    : U.intl.format(U.t.iW2stn, { nTrials: g.size })),
                (0, a.jsx)("div", {
                  className: l()(F.qr, F.h0),
                  children: (0, a.jsx)(u.$, {
                    variant: "primary",
                    disabled: 0 === g.size || E,
                    text: t,
                    size: "md",
                    fullWidth: !0,
                    onClick: async () => {
                      h(!0), await r([...g.values()]), h(!1);
                    },
                  }),
                })),
              children: (0, a.jsx)(C.A, {
                users: Array.from(m.values()),
                isUserSelected: (e) => g.has(e.id),
                isUserDisabled: (e) => e.referralStatus === R.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                  x((i) => {
                    let s = new Map(i);
                    return t ? s.set(e.id, e) : s.delete(e.id), s;
                  });
                },
                className: F.p_,
              }),
            })
          );
        };
      var H =
        (((s = {})[(s.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
        (s[(s.CONFIRMATION = 2)] = "CONFIRMATION"),
        (s[(s.REMINDER = 3)] = "REMINDER"),
        s);
      let z = (e) => {
        let { transitionState: t, onClose: i, startingScreen: s = 1 } = e,
          r = (0, d.bG)([_.A], () => _.A.getReferralsRemaining()),
          [l, c] = n.useState(s),
          [o, u] = n.useState([]),
          { analyticsLocations: A } = (0, x.Ay)([
            g.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL,
          ]),
          p = async (e) => {
            E.default.track(L.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: A,
            });
            let t = await (0, R.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
          };
        return null === r
          ? (0, a.jsx)(m.y, {})
          : 2 === l
            ? (0, a.jsx)(w, {
                transitionState: t,
                isReminderConfirmation: 3 === s,
                results: o,
                onClose: i,
              })
            : 1 === l
              ? (0, a.jsx)(V, { transitionState: t, onClose: i, onShare: p })
              : 3 === l
                ? (0, a.jsx)(B, { transitionState: t, onClose: i, onShare: p })
                : void 0;
      };
    },
    65470(e, t, i) {
      i.d(t, { A: () => c });
      var s = i(627968);
      i(64700);
      var a = i(821609),
        n = i(597770),
        r = i(194509),
        l = i(783420);
      let c = (e) => {
        let {
          subscriptionTier: t,
          premiumModalAnalyticsLocation: i,
          giftMessage: c,
          onClick: d,
          buttonTextOverride: o,
          ...u
        } = e;
        return (0, s.jsx)(l.A, {
          isGift: !0,
          subscriptionTier: t,
          premiumModalAnalyticsLocation: i,
          giftMessage: c,
          onClick: d,
          children: (e) => {
            let { onClick: i } = e,
              l = o ?? (0, r.U)(t);
            return (0, s.jsx)(a.$, { onClick: i, icon: n.o, ...u, text: l });
          },
        });
      };
    },
    505559(e, t, i) {
      i.d(t, { A: () => r });
      var s = i(627968);
      i(64700);
      var a = i(834730),
        n = i(166988);
      let r = (e) => {
        let { text: t } = e;
        return (0, s.jsx)("div", {
          className: n.i,
          children: (0, s.jsx)(a.E, {
            variant: "text-sm/bold",
            color: "always-white",
            children: t,
          }),
        });
      };
    },
    608416(e, t, i) {
      i.d(t, {
        $G: () => o,
        Ay: () => g,
        MN: () => p,
        Mp: () => u,
        XN: () => m,
        aV: () => A,
      });
      var s,
        a,
        n = i(627968),
        r = i(64700),
        l = i(785651),
        c = i(717421),
        d = i(396583);
      let o = 3e3,
        u = 4e3,
        m = 6e3;
      var A = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
        p = (((a = {}).UP = "up"), (a.DOWN = "down"), a);
      let g = (e) => {
        let {
            blurAnimationData: t,
            scaleAnimationData: i,
            yAxisAnimationData: s,
            parallaxAnimationData: a,
            animateXAxisWiggle: o = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: m = 1,
            children: A,
          } = e,
          p = (0, c.z)(
            null != s
              ? {
                  from: { y: 0 },
                  to: { y: 1 },
                  config: { duration: s.duration * m },
                  loop: !0,
                }
              : { y: 0 },
          ),
          g = s?.path === "sine" ? Math.sin : Math.cos,
          [x, N] = (0, r.useState)(1),
          E = (0, c.z)(
            null != i
              ? {
                  from: { scale: x > 0 ? i.startScale : i.endScale },
                  to: { scale: x > 0 ? i.endScale : i.startScale },
                  config: { duration: i.duration * m },
                  onRest: () => N((e) => -1 * e),
                }
              : { scale: 1 },
          ),
          [h, f] = (0, r.useState)(1),
          R = (0, c.z)(
            null != t
              ? {
                  from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                  to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                  config: { duration: t.duration * m },
                  onRest: () => f((e) => -1 * e),
                }
              : { blur: 0 },
          ),
          _ = (0, r.useMemo)(
            () => Math.round((750 + (200 * Math.random() - 100)) * m),
            [m],
          ),
          [C, I] = (0, r.useState)(0),
          [T, b] = (0, r.useState)(1),
          S = (0, c.z)({
            xOffset: C,
            config: { tension: 10, friction: 10, duration: _ },
          });
        return ((0, d.A)(() => {
          I(T * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
        }, _),
        u)
          ? A
          : (0, n.jsx)(l.animated.div, {
              style: {
                transform: p.y?.to((e) => {
                  if (null == s) return "translateY(0px)";
                  let t = g(e * Math.PI * 2) * s.range,
                    i = 0;
                  if (null != a) {
                    let e = a.range * (1 - a.containerVisibilityPercentage);
                    i = "up" === a.pathDirection ? -e : e;
                  }
                  return `translateY(${t + i}px)`;
                }),
                translateX: o ? S.xOffset.to((e) => `${e}px`) : 0,
                scale: E.scale,
                filter: R.blur?.to((e) => `blur(${e}px)`),
                opacity:
                  null != a && a.changeOpacity
                    ? a.containerVisibilityPercentage
                    : 1,
              },
              children: A,
            });
      };
    },
    384601(e, t, i) {
      i.d(t, { A: () => c });
      var s = i(627968),
        a = i(503698),
        n = i.n(a),
        r = i(608416),
        l = i(738472);
      let c = (e) => {
        let {
          isMotionReduced: t,
          containerVisibilityPercentage: i,
          boltContainerClassName: a,
          carContainerClassName: c,
          hammerContainerClassName: d,
          keyContainerClassName: o,
          starContainerClassName: u,
          boltAssetClassName: m,
          carAssetClassName: A,
          hammerAssetClassName: p,
          keyAssetClassName: g,
          starAssetClassName: x,
          animationSpeedScale: N = 1,
          blurScale: E = 1,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            null != a &&
              (0, s.jsx)("div", {
                className: n()(l.nJ, a),
                children: (0, s.jsx)(r.Ay, {
                  blurAnimationData: {
                    startBlurRadius: 10 * E,
                    endBlurRadius: 0,
                    duration: r.$G,
                  },
                  scaleAnimationData: {
                    startScale: 0.85,
                    endScale: 1,
                    duration: r.$G,
                  },
                  yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.COSINE,
                  },
                  parallaxAnimationData:
                    null != i
                      ? {
                          pathDirection: r.MN.UP,
                          range: 125,
                          containerVisibilityPercentage: i,
                          changeOpacity: !0,
                        }
                      : void 0,
                  animateXAxisWiggle: !0,
                  isMotionReduced: t,
                  animationSpeedScale: N,
                  children: (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                    className: m,
                    alt: "",
                  }),
                }),
              }),
            null != c &&
              (0, s.jsx)("div", {
                className: n()(l.IN, c),
                children: (0, s.jsx)(r.Ay, {
                  yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.COSINE,
                  },
                  parallaxAnimationData:
                    null != i
                      ? {
                          pathDirection: r.MN.DOWN,
                          range: 50,
                          containerVisibilityPercentage: i,
                          changeOpacity: !0,
                        }
                      : void 0,
                  animateXAxisWiggle: !0,
                  isMotionReduced: t,
                  animationSpeedScale: N,
                  children: (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                    className: A,
                    alt: "",
                  }),
                }),
              }),
            null != d &&
              (0, s.jsx)("div", {
                className: n()(l.Gj, d),
                children: (0, s.jsx)(r.Ay, {
                  yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.SINE,
                  },
                  parallaxAnimationData:
                    null != i
                      ? {
                          pathDirection: r.MN.DOWN,
                          range: 120,
                          containerVisibilityPercentage: i,
                          changeOpacity: !0,
                        }
                      : void 0,
                  animateXAxisWiggle: !0,
                  isMotionReduced: t,
                  animationSpeedScale: N,
                  children: (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                    className: p,
                    alt: "",
                  }),
                }),
              }),
            null != o &&
              (0, s.jsx)("div", {
                className: n()(l.FV, o),
                children: (0, s.jsx)(r.Ay, {
                  blurAnimationData: {
                    startBlurRadius: 5 * E,
                    endBlurRadius: 0,
                    duration: r.Mp,
                  },
                  scaleAnimationData: {
                    startScale: 0.85,
                    endScale: 1,
                    duration: r.Mp,
                  },
                  yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.SINE,
                  },
                  parallaxAnimationData:
                    null != i
                      ? {
                          pathDirection: r.MN.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !0,
                        }
                      : void 0,
                  animateXAxisWiggle: !0,
                  isMotionReduced: t,
                  animationSpeedScale: N,
                  children: (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                    className: g,
                    alt: "",
                  }),
                }),
              }),
            null != u &&
              (0, s.jsx)("div", {
                className: n()(l.E1, u),
                children: (0, s.jsx)(r.Ay, {
                  blurAnimationData: {
                    startBlurRadius: 0,
                    endBlurRadius: 2 * E,
                    duration: r.$G,
                  },
                  scaleAnimationData: {
                    startScale: 1,
                    endScale: 0.85,
                    duration: r.$G,
                  },
                  yAxisAnimationData: {
                    range: 20,
                    duration: r.Mp,
                    path: r.aV.COSINE,
                  },
                  parallaxAnimationData:
                    null != i
                      ? {
                          pathDirection: r.MN.UP,
                          range: 50,
                          containerVisibilityPercentage: i,
                          changeOpacity: !0,
                        }
                      : void 0,
                  animateXAxisWiggle: !0,
                  isMotionReduced: t,
                  animationSpeedScale: N,
                  children: (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                    className: x,
                    alt: "",
                  }),
                }),
              }),
          ],
        });
      };
    },
    103733(e, t, i) {
      i.d(t, { U: () => n });
      var s = i(64700),
        a = i(172218);
      let n = function () {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          [t, i] = (0, s.useState)(1),
          n = (0, s.useMemo)(
            () => ({
              threshold: Array.from({ length: 101 }, (e, t) => t / 100),
            }),
            [],
          );
        return {
          visibilityPercentageRef: (0, a.B)(
            (e) => {
              i(e.intersectionRatio);
            },
            n,
            e,
          ),
          visibilityPercentage: t,
        };
      };
    },
    180894(e, t, i) {
      i.d(t, { A: () => s });
      let s =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png";
    },
    590251(e, t, i) {
      i.d(t, { a: () => d });
      var s = i(627968),
        a = i(64700),
        n = i(503698),
        r = i.n(n),
        l = i(183834);
      let c = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
      class d extends a.Component {
        static StrokeSizes = c;
        static defaultProps = { strokeSize: c.MEDIUM };
        renderCircle() {
          let {
              strokeSize: e,
              percent: t,
              colorOverride: i,
              background: a,
              ringColorOverrideClassName: n,
            } = this.props,
            c = Math.min(Math.max(t, 0), 100),
            d = (20 - e) / 2,
            o = d * Math.PI * 2;
          return (0, s.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: l.n1,
            children: [
              (0, s.jsx)("circle", {
                className: void 0 !== n ? n : l.cj,
                cx: 10,
                cy: 10,
                r: 10,
              }),
              (0, s.jsx)("circle", {
                className: r()(l.rh, a),
                cx: 10,
                cy: 10,
                r: (20 - 2 * e) / 2,
              }),
              (0, s.jsx)("circle", {
                className: l.iv,
                cx: 10,
                cy: 10,
                r: d,
                strokeWidth: `${e}px`,
                strokeLinecap: "round",
                transform: "rotate(-90 10 10)",
                stroke: null != i ? i : "currentColor",
                style: {
                  strokeDasharray: o,
                  strokeDashoffset: (1 - c / 100) * o,
                },
              }),
            ],
          });
        }
        render() {
          let { className: e, children: t } = this.props;
          return (0, s.jsxs)("div", {
            className: r()(l.G3, e),
            children: [
              this.renderCircle(),
              null != t
                ? (0, s.jsx)("div", {
                    className: r()(l.Bd, this.props.overlayClassName),
                    children: t,
                  })
                : null,
            ],
          });
        }
      }
    },
  },
]);
//# sourceMappingURL=99707.5dec701b34d9b775.js.map
