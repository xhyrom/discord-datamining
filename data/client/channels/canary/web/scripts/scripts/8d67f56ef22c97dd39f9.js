"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77803"],
  {
    507608: function (n, i, e) {
      e.d(i, {
        AF: function () {
          return L;
        },
        hd: function () {
          return z;
        },
        zz: function () {
          return O;
        },
      }),
        e(47120);
      var l = e(200651),
        t = e(192379),
        r = e(905322),
        s = e(83998),
        d = e(269210),
        a = e(442837),
        u = e(481060),
        o = e(607070),
        c = e(100527),
        m = e(906732),
        v = e(565138),
        p = e(270144),
        x = e(171246),
        h = e(930155),
        g = e(929011),
        I = e(889989),
        j = e(263519),
        b = e(430824),
        k = e(55563),
        f = e(551428),
        P = e(626135),
        S = e(768581),
        N = e(73346),
        Z = e(624138),
        y = e(591759),
        M = e(601911),
        R = e(150414),
        T = e(110742),
        E = e(680005),
        _ = e(955335),
        w = e(981631),
        A = e(388032),
        C = e(941221);
      let F = new Intl.DateTimeFormat(A.intl.currentLocale, {
        month: "short",
        day: "numeric",
      });
      function L(n) {
        let { app: i, guildId: e, subscriptions: s, otps: d } = n,
          u = t.useMemo(() => (0, M.y)(i, 100), [i]),
          { bot: v } = i,
          p = t.useMemo(() => {
            var n;
            if ((null == v ? void 0 : v.banner) == null) return;
            let i = (0, S.aN)({
              id: v.id,
              banner: v.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != i && null !== (n = y.Z.toURLSafe(i)) && void 0 !== n
              ? n
              : void 0;
          }, [v]),
          x = t.useMemo(() => {
            var n;
            if ((null == v ? void 0 : v.banner) == null) return;
            let i = (0, S.aN)({
              id: v.id,
              banner: v.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != i && null !== (n = y.Z.toURLSafe(i)) && void 0 !== n
              ? n
              : void 0;
          }, [v]),
          h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
          g = t.useMemo(
            () => [...s.map((n) => n.skuId), ...d.map((n) => n.skuId)],
            [s, d],
          ),
          { analyticsLocations: I } = (0, m.ZP)(c.Z.APP_STOREFRONT);
        return (
          t.useEffect(() => {
            0 !== g.length &&
              P.default.track(w.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: i.id,
                sku_ids: g,
                location_stack: I,
              });
          }, [I, i.id, g]),
          (0, l.jsxs)("div", {
            className: C.wrapper,
            children: [
              (0, l.jsx)(r.j, {
                title: i.name,
                iconSrc: u,
                backgroundSrc: p,
                animatedBackgroundSrc: x,
                prefersReducedMotion: h,
              }),
              (0, l.jsx)(U, {
                appId: i.id,
                subscriptions: s,
                otps: d,
                guildId: e,
              }),
            ],
          })
        );
      }
      function U(n) {
        let { appId: i, subscriptions: e, otps: t, guildId: r } = n;
        return (0, l.jsxs)("div", {
          className: C.productsContainer,
          children: [
            e.length > 0 &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(_.r, { subscriptions: e }),
                  (0, l.jsx)("div", {
                    className: C.productSection,
                    children: e.map((n) =>
                      (0, l.jsx)(
                        O,
                        {
                          appId: i,
                          guildId: r,
                          listing: n,
                          subscriptionType: (0, x.KW)(n.skuFlags)
                            ? "user"
                            : "guild",
                        },
                        n.id,
                      ),
                    ),
                  }),
                ],
              }),
            t.length > 0 &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)(u.Heading, {
                    variant: "heading-lg/semibold",
                    children: A.intl.string(A.t.yUGTs7),
                  }),
                  (0, l.jsx)("div", {
                    className: C.productSection,
                    children: t.map((n) =>
                      (0, l.jsx)(z, { skuId: n.skuId, appId: i }, n.id),
                    ),
                  }),
                ],
              }),
          ],
        });
      }
      function O(n) {
        var i, r;
        let {
            appId: s,
            guildId: o,
            listing: c,
            subscriptionType: m,
            onDetails: g,
          } = n,
          { data: f } = (0, h.H)(c.skuId),
          P = null == f ? void 0 : f[0],
          S = (0, a.e7)([k.Z], () => k.Z.get(c.skuId), [c.skuId]),
          N = (0, a.e7)([b.Z], () => b.Z.getGuild(o), [o]),
          Z = (0, a.e7)([k.Z], () => k.Z.getParentSKU(c.skuId), [c.skuId]),
          y = (0, p.Ev)(Z, o),
          M = null == y ? void 0 : y.subscription,
          T = (0, p.cr)(Z, o),
          _ = null != M && (0, x.Jf)(M, S),
          L =
            null != T &&
            (null == y
              ? void 0
              : null === (i = y.subscriptionPlan) || void 0 === i
                ? void 0
                : i.id) !== (null == T ? void 0 : T.subscriptionPlan.id),
          U =
            !1 === _ &&
            (null == T ? void 0 : T.subscriptionPlan.skuId) === c.skuId,
          O = (null == y ? void 0 : y.subscriptionPlan.skuId) === c.skuId,
          {
            openModal: z,
            subscriptionPurchaseButtonState: B,
            isGuildSubscribed: D,
          } = (0, j.Z)({
            skuId: c.skuId,
            initialSubscribeForGuild: o,
            analyticsLocation: w.Sbl.APP_STOREFRONT,
          }),
          G = t.useMemo(() => {
            var n;
            return null === (n = c.benefits) || void 0 === n
              ? void 0
              : n.map((n) => ({
                  id: n.id,
                  title: n.name,
                  description: n.description,
                  icon: (0, I.n)(s, n.icon),
                }));
          }, [s, c.benefits]),
          q = t.useMemo(
            () =>
              null != c.thumbnail ? (0, R.q)(s, c.thumbnail, 256) : void 0,
            [s, c.thumbnail],
          ),
          H = t.useCallback(
            (n) =>
              (0, l.jsx)(E.pV, {
                ...n,
                appId: s,
                subscriptionType: m,
                skuId: c.skuId,
                subscriptionPlan: P,
                state: B,
              }),
            [s, m, c.skuId, P, B],
          ),
          K = t.useMemo(() => {
            if (L && (null == M ? void 0 : M.currentPeriodEnd) != null) {
              let n = F.format(null == M ? void 0 : M.currentPeriodEnd);
              if (O) return A.intl.formatToPlainString(A.t.EV2lZ2, { date: n });
              if (U)
                return A.intl.formatToPlainString(A.t["2w6+ND"], { date: n });
            }
            if (D)
              return (0, l.jsxs)(l.Fragment, {
                children: [
                  null != N &&
                    (0, l.jsx)(v.Z, { guild: N, size: v.Z.Sizes.MINI }),
                  A.intl.string(A.t.l8ufqK),
                ],
              });
          }, [null == M ? void 0 : M.currentPeriodEnd, N, L, O, D, U]),
          V =
            null != K
              ? (0, l.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-sm/normal",
                  className: C.subscriptionCardSubtext,
                  children: K,
                })
              : void 0;
        return (0, l.jsx)(d.Uj, {
          title: c.summary,
          subtitle: V,
          maxBenefits: null != V ? d.ZI - 1 : d.ZI,
          description:
            null !== (r = c.description) && void 0 !== r ? r : void 0,
          imgSrc: q,
          onPurchase: z,
          renderPurchaseButton: H,
          benefitItems:
            null != G
              ? G.map((n) =>
                  (0, l.jsx)(
                    d.Gm,
                    { description: n.title, icon: n.icon },
                    n.id,
                  ),
                )
              : void 0,
          onDetails:
            null != g
              ? g
              : null != G
                ? () => {
                    (0, u.openModalLazy)(async () => {
                      let { SubscriptionDetailsModal: n } = await Promise.all([
                        e.e("86282"),
                        e.e("97319"),
                      ]).then(e.bind(e, 519896));
                      return (i) =>
                        (0, l.jsx)(n, {
                          appId: s,
                          subscriptionType: m,
                          skuId: c.skuId,
                          guildId: o,
                          ...i,
                        });
                    });
                  }
                : void 0,
        });
      }
      function z(n) {
        var i, t, r, d;
        let { skuId: o, appId: v, onDetails: p } = n,
          { analyticsLocations: x } = (0, m.ZP)(c.Z.APP_STOREFRONT),
          h = (0, a.e7)([f.Z], () => f.Z.getForSKU(o), [o]),
          I = (0, a.e7)([k.Z], () => k.Z.get(o), [o]),
          j = (0, T.M)(o);
        if (null == I) return null;
        let b = null !== (t = I.name) && void 0 !== t ? t : "",
          P =
            null !==
              (r =
                null == h
                  ? void 0
                  : null === (i = h.description) || void 0 === i
                    ? void 0
                    : i.trim()) && void 0 !== r
              ? r
              : void 0,
          S =
            (null == h ? void 0 : h.headerBackground) != null &&
            null !==
              (d = y.Z.toURLSafe((0, N._W)(v, h.headerBackground, 256))) &&
            void 0 !== d
              ? d
              : void 0,
          M = I.type === w.epS.DURABLE && j,
          R =
            I.type === w.epS.DURABLE
              ? M
                ? A.intl.string(A.t.bm82mp)
                : A.intl.string(A.t["6gprwc"])
              : void 0,
          { price: _ } = I;
        return null == _
          ? null
          : (0, l.jsx)(s.I, {
              title: b,
              description: P,
              headerImage: S,
              availabilityLabel: R,
              onDetails:
                null != p
                  ? p
                  : (0, Z.Ew)(P)
                    ? void 0
                    : () => {
                        (0, u.openModalLazy)(async () => {
                          let { ItemDetailsModal: n } = await e
                            .e("69796")
                            .then(e.bind(e, 147496));
                          return (i) =>
                            (0, l.jsx)(n, { appId: v, skuId: o, ...i });
                        });
                      },
              PurchaseButton: (n) =>
                (0, l.jsx)(E.YG, { ...n, appId: v, sku: I }),
              onPurchase: () => {
                (0, g.r)({ appId: v, skuId: I.id, analyticsLocations: x });
              },
            });
      }
    },
    955335: function (n, i, e) {
      e.d(i, {
        r: function () {
          return o;
        },
      });
      var l = e(200651);
      e(192379);
      var t = e(481060),
        r = e(630388),
        s = e(981631),
        d = e(388032),
        a = e(755522);
      let u = { size: "md", color: t.tokens.colors.INTERACTIVE_NORMAL };
      function o(n) {
        let { subscriptions: i, color: e = "text-normal" } = n,
          o = i.some((n) =>
            (0, r.yE)(n.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION),
          );
        return (0, l.jsx)(t.Heading, {
          variant: "heading-lg/semibold",
          color: e,
          className: a.heading,
          children: o
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.ServerIcon, { ...u, color: "currentColor" }),
                  d.intl.string(d.t.XIhSoq),
                ],
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(t.UserIcon, { ...u, color: "currentColor" }),
                  d.intl.string(d.t.dxfZpq),
                ],
              }),
        });
      }
    },
    905322: function (n, i, e) {
      e.d(i, {
        j: function () {
          return d;
        },
      });
      var l = e(200651),
        t = e(192379),
        r = e(777207),
        s = e(422235);
      function d(n) {
        let {
            title: i,
            subtitle: e,
            iconSrc: d,
            backgroundSrc: a,
            animatedBackgroundSrc: u,
            prefersReducedMotion: o = !0,
          } = n,
          c = t.useMemo(() => {
            let n = null != a ? a : d;
            if (null != n)
              return {
                "--custom-background-url": "url(".concat(n.toString(), ")"),
              };
          }, [a, d]),
          m = t.useMemo(() => {
            if (null == a) return;
            let n = {
              "--custom-background-static": "url(".concat(a.toString()),
            };
            return (
              !o &&
                null != u &&
                (n["--custom-background-animated"] = "url(".concat(
                  u.toString(),
                  ")",
                )),
              n
            );
          }, [u, a, o]);
        return (0, l.jsxs)("div", {
          className: s.wrapper,
          children: [
            (0, l.jsx)("div", { className: s.background, style: c }),
            (0, l.jsxs)("div", {
              className: s.content,
              children: [
                null != d &&
                  (0, l.jsx)("div", {
                    className: s.icon,
                    children: (0, l.jsx)("img", { src: d.toString(), alt: "" }),
                  }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(r.x, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: i,
                    }),
                    null != e &&
                      (0, l.jsxs)(r.x, {
                        variant: "text-sm/normal",
                        children: ["“", e, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != a
              ? (0, l.jsx)("div", { className: s.image, style: m })
              : null,
          ],
        });
      }
    },
    83998: function (n, i, e) {
      e.d(i, {
        I: function () {
          return c;
        },
      });
      var l = e(200651);
      e(192379);
      var t = e(557533),
        r = e.n(t),
        s = e(489948),
        d = e(790472),
        a = e(777207),
        u = e(134992),
        o = e(717729);
      function c(n) {
        let {
          title: i,
          description: e,
          headerImage: t,
          onDetails: c,
          onPurchase: m,
          PurchaseButton: v,
          availabilityLabel: p,
        } = n;
        return (0, l.jsx)(s.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(u.wrapper, o.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != c ? c() : null != m && m();
            },
            children: [
              (0, l.jsx)("div", {
                className: u.cardHeaderImg,
                style:
                  null != t
                    ? {
                        backgroundImage:
                          null != t ? "url(".concat(t.toString(), ")") : void 0,
                      }
                    : void 0,
                children:
                  null == t &&
                  (0, l.jsx)(d.P, {
                    color: "white",
                    size: "custom",
                    height: 80,
                    width: 80,
                  }),
              }),
              (0, l.jsxs)("div", {
                className: u.details,
                children: [
                  (0, l.jsx)(a.x, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: i,
                  }),
                  null != e &&
                    (0, l.jsx)(a.x, {
                      className: u.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: e,
                    }),
                ],
              }),
              null != v &&
                (0, l.jsxs)("div", {
                  className: u.footer,
                  children: [
                    (0, l.jsx)(a.x, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: p,
                    }),
                    (0, l.jsx)(v, {
                      onClick: (n) => {
                        n.stopPropagation(), null == m || m();
                      },
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=8d67f56ef22c97dd39f9.js.map
