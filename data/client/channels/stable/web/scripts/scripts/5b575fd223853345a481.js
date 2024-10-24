"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77803"],
  {
    150414: function (n, e, i) {
      i.d(e, {
        q: function () {
          return t;
        },
      });
      var l = i(73346),
        s = i(591759);
      function t(n, e, i) {
        var t;
        return null !== (t = s.Z.toURLSafe((0, l._W)(n, e, i))) && void 0 !== t
          ? t
          : void 0;
      }
    },
    507608: function (n, e, i) {
      i.d(e, {
        AF: function () {
          return B;
        },
        hd: function () {
          return y;
        },
        zz: function () {
          return C;
        },
      }),
        i(47120);
      var l = i(200651),
        s = i(192379),
        t = i(905322),
        r = i(200207),
        a = i(269210),
        o = i(442837),
        d = i(481060),
        u = i(607070),
        c = i(100527),
        m = i(906732),
        v = i(270144),
        p = i(171246),
        I = i(930155),
        x = i(929011),
        h = i(889989),
        g = i(696906),
        S = i(55563),
        R = i(551428),
        b = i(626135),
        j = i(768581),
        k = i(73346),
        N = i(624138),
        T = i(591759),
        f = i(601911),
        P = i(150414),
        _ = i(110742),
        E = i(147496),
        O = i(680005),
        M = i(955335),
        A = i(519896),
        Z = i(981631),
        L = i(689938),
        U = i(335567);
      let F = new Intl.DateTimeFormat(L.Z.getLocale(), {
        month: "short",
        day: "numeric",
      });
      function B(n) {
        let { app: e, guildId: i, subscriptions: r, otps: a } = n,
          v = s.useMemo(() => (0, f.y)(e, 100), [e]),
          { bot: I } = e,
          x = s.useMemo(() => {
            var n;
            if ((null == I ? void 0 : I.banner) == null) return;
            let e = (0, j.aN)({
              id: I.id,
              banner: I.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != e && null !== (n = T.Z.toURLSafe(e)) && void 0 !== n
              ? n
              : void 0;
          }, [I]),
          h = s.useMemo(() => {
            var n;
            if ((null == I ? void 0 : I.banner) == null) return;
            let e = (0, j.aN)({
              id: I.id,
              banner: I.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != e && null !== (n = T.Z.toURLSafe(e)) && void 0 !== n
              ? n
              : void 0;
          }, [I]),
          g = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          S = s.useMemo(
            () => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)],
            [r, a],
          ),
          { analyticsLocations: R } = (0, m.ZP)(c.Z.APP_STOREFRONT);
        return (
          s.useEffect(() => {
            0 !== S.length &&
              b.default.track(Z.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: e.id,
                sku_ids: S,
                location_stack: R,
              });
          }, [R, e.id, S]),
          (0, l.jsxs)("div", {
            className: U.wrapper,
            children: [
              (0, l.jsx)(t.j, {
                title: e.name,
                iconSrc: v,
                backgroundSrc: x,
                animatedBackgroundSrc: h,
                prefersReducedMotion: g,
              }),
              r.length > 0 &&
                (0, l.jsxs)("div", {
                  className: U.productSection,
                  children: [
                    (0, l.jsx)(M.r, { subscriptions: r }),
                    (0, l.jsx)("div", {
                      className: U.productList,
                      children: r.map((n) =>
                        (0, l.jsx)(
                          C,
                          {
                            appId: e.id,
                            guildId: i,
                            listing: n,
                            subscriptionType: (0, p.KW)(n.skuFlags)
                              ? "user"
                              : "guild",
                          },
                          n.id,
                        ),
                      ),
                    }),
                  ],
                }),
              a.length > 0 &&
                (0, l.jsxs)("div", {
                  className: U.productSection,
                  children: [
                    (0, l.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      children: L.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, l.jsx)("div", {
                      className: U.productList,
                      children: a.map((n) =>
                        (0, l.jsx)(y, { skuId: n.skuId, appId: e.id }, n.id),
                      ),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function C(n) {
        var e, i;
        let t,
          {
            appId: r,
            guildId: u,
            listing: c,
            subscriptionType: m,
            onDetails: p,
          } = n,
          { data: x } = (0, I.H)(c.skuId),
          R = null == x ? void 0 : x[0],
          b = (0, o.e7)([S.Z], () => S.Z.getParentSKU(c.skuId), [c.skuId]),
          j = (0, v.Ev)(b, u),
          k = (0, v.cr)(b, u),
          N =
            null != k &&
            (null == j
              ? void 0
              : null === (e = j.subscriptionPlan) || void 0 === e
                ? void 0
                : e.id) !== (null == k ? void 0 : k.subscriptionPlan.id),
          T = (null == k ? void 0 : k.subscriptionPlan.skuId) === c.skuId,
          f = (null == j ? void 0 : j.subscriptionPlan.skuId) === c.skuId,
          { openModal: _, cannotOpenReason: E } = (0, g.ZP)({
            skuId: c.skuId,
            subscribeForGuild: u,
            analyticsLocation: Z.Sbl.APP_STOREFRONT,
          }),
          M = s.useMemo(() => {
            var n;
            return null === (n = c.benefits) || void 0 === n
              ? void 0
              : n.map((n) => ({
                  id: n.id,
                  title: n.name,
                  description: n.description,
                  icon: (0, h.n)(r, n.icon),
                }));
          }, [r, c.benefits]),
          U = s.useMemo(
            () =>
              null != c.thumbnail ? (0, P.q)(r, c.thumbnail, 256) : void 0,
            [r, c.thumbnail],
          ),
          B = s.useCallback(
            (n) =>
              (0, l.jsx)(O.p, {
                ...n,
                appId: r,
                subscriptionType: m,
                skuId: c.skuId,
                subscriptionPlan: R,
                cannotOpenReason: E,
              }),
            [r, m, c.skuId, R, E],
          );
        if (
          N &&
          (null == j ? void 0 : j.subscription.currentPeriodEnd) != null
        ) {
          let n = F.format(
            null == j ? void 0 : j.subscription.currentPeriodEnd,
          );
          f
            ? (t = L.Z.Messages.STOREFRONT_CURRENTLY_SUBSCRIBED_UNTIL.format({
                date: n,
              }))
            : T &&
              (t = L.Z.Messages.STOREFRONT_SUBSCRIPTION_STARTS.format({
                date: n,
              }));
        }
        let C =
          null != t
            ? (0, l.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: t,
              })
            : void 0;
        return (0, l.jsx)(a.U, {
          title: c.summary,
          description:
            null !== (i = c.description) && void 0 !== i ? i : void 0,
          imgSrc: U,
          onPurchase: _,
          renderPurchaseButton: B,
          benefitItems:
            null != M
              ? M.map((n) =>
                  (0, l.jsx)(a.G, { name: n.title, icon: n.icon }, n.id),
                )
              : void 0,
          onDetails:
            null != p
              ? p
              : null != M
                ? () => {
                    (0, d.openModal)((n) => {
                      let { onClose: e, transitionState: i } = n;
                      return (0, l.jsx)(A.SubscriptionDetailsModal, {
                        appId: r,
                        subscriptionType: m,
                        onClose: e,
                        skuId: c.skuId,
                        transitionState: i,
                        guildId: u,
                      });
                    });
                  }
                : void 0,
          subtitle: C,
        });
      }
      function y(n) {
        var e, i, s, t;
        let { skuId: a, appId: u, onDetails: v } = n,
          { analyticsLocations: p } = (0, m.ZP)(c.Z.APP_STOREFRONT),
          I = (0, o.e7)([R.Z], () => R.Z.getForSKU(a), [a]),
          h = (0, o.e7)([S.Z], () => S.Z.get(a), [a]),
          g = (0, _.M)(a);
        if (null == h) return null;
        let b = null !== (i = h.name) && void 0 !== i ? i : "",
          j =
            null !==
              (s =
                null == I
                  ? void 0
                  : null === (e = I.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== s
              ? s
              : void 0,
          f =
            (null == I ? void 0 : I.headerBackground) != null &&
            null !==
              (t = T.Z.toURLSafe((0, k._W)(u, I.headerBackground, 256))) &&
            void 0 !== t
              ? t
              : void 0,
          P = h.type === Z.epS.DURABLE && g,
          M =
            h.type === Z.epS.DURABLE
              ? P
                ? L.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : L.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: A } = h;
        return null == A
          ? null
          : (0, l.jsx)(r.I, {
              title: b,
              description: j,
              headerImage: f,
              availabilityLabel: M,
              onDetails:
                null != v
                  ? v
                  : (0, N.Ew)(j)
                    ? void 0
                    : () => {
                        (0, d.openModal)((n) => {
                          let { onClose: e, transitionState: i } = n;
                          return (0, l.jsx)(E.ItemDetailsModal, {
                            appId: u,
                            skuId: a,
                            onClose: e,
                            transitionState: i,
                          });
                        });
                      },
              PurchaseButton: (n) =>
                (0, l.jsx)(O.Y, { ...n, appId: u, sku: h }),
              onPurchase: () => {
                (0, x.r)({ appId: u, skuId: h.id, analyticsLocations: p });
              },
            });
      }
    },
    955335: function (n, e, i) {
      i.d(e, {
        r: function () {
          return u;
        },
      });
      var l = i(200651);
      i(192379);
      var s = i(481060),
        t = i(630388),
        r = i(981631),
        a = i(689938),
        o = i(132313);
      let d = { size: "md", color: s.tokens.colors.INTERACTIVE_NORMAL };
      function u(n) {
        let { subscriptions: e } = n,
          i = e.some((n) =>
            (0, t.yE)(n.skuFlags, r.l4R.APPLICATION_GUILD_SUBSCRIPTION),
          );
        return (0, l.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          className: o.heading,
          children: i
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(s.ServerIcon, { ...d }),
                  a.Z.Messages.STOREFRONT_APP_SERVER_SUBSCRIPTIONS,
                ],
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(s.UserIcon, { ...d }),
                  a.Z.Messages.STOREFRONT_APP_PERSONAL_SUBSCRIPTIONS,
                ],
              }),
        });
      }
    },
    905322: function (n, e, i) {
      i.d(e, {
        j: function () {
          return a;
        },
      });
      var l = i(200651),
        s = i(192379),
        t = i(777207),
        r = i(529079);
      function a(n) {
        let {
            title: e,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: o,
            animatedBackgroundSrc: d,
            prefersReducedMotion: u = !0,
          } = n,
          c = s.useMemo(() => {
            let n = null != o ? o : a;
            if (null != n)
              return {
                "--custom-background-url": "url(".concat(n.toString(), ")"),
              };
          }, [o, a]),
          m = s.useMemo(() => {
            if (null == o) return;
            let n = {
              "--custom-background-static": "url(".concat(o.toString()),
            };
            return (
              !u &&
                null != d &&
                (n["--custom-background-animated"] = "url(".concat(
                  d.toString(),
                  ")",
                )),
              n
            );
          }, [d, o, u]);
        return (0, l.jsxs)("div", {
          className: r.wrapper,
          children: [
            (0, l.jsx)("div", { className: r.background, style: c }),
            (0, l.jsxs)("div", {
              className: r.content,
              children: [
                null != a &&
                  (0, l.jsx)("div", {
                    className: r.icon,
                    children: (0, l.jsx)("img", { src: a.toString(), alt: "" }),
                  }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(t.x, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: e,
                    }),
                    null != i &&
                      (0, l.jsxs)(t.x, {
                        variant: "text-sm/normal",
                        children: ["“", i, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != o
              ? (0, l.jsx)("div", { className: r.image, style: m })
              : null,
          ],
        });
      }
    },
    200207: function (n, e, i) {
      i.d(e, {
        I: function () {
          return c;
        },
      });
      var l = i(200651);
      i(192379);
      var s = i(557533),
        t = i.n(s),
        r = i(489948),
        a = i(790472),
        o = i(777207),
        d = i(147333),
        u = i(103077);
      function c(n) {
        let {
          title: e,
          description: i,
          headerImage: s,
          onDetails: c,
          onPurchase: m,
          PurchaseButton: v,
          availabilityLabel: p,
        } = n;
        return (0, l.jsx)(r.tE, {
          children: (0, l.jsxs)("div", {
            className: t()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != c ? c() : null != m && m();
            },
            children: [
              (0, l.jsx)("div", {
                className: d.cardHeaderImg,
                style:
                  null != s
                    ? {
                        backgroundImage:
                          null != s ? "url(".concat(s.toString(), ")") : void 0,
                      }
                    : void 0,
                children:
                  null == s &&
                  (0, l.jsx)(a.P, {
                    color: "white",
                    size: "custom",
                    height: 80,
                    width: 80,
                  }),
              }),
              (0, l.jsxs)("div", {
                className: d.details,
                children: [
                  (0, l.jsx)(o.x, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: e,
                  }),
                  null != i &&
                    (0, l.jsx)(o.x, {
                      className: d.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: i,
                    }),
                ],
              }),
              null != v &&
                (0, l.jsxs)("div", {
                  className: d.footer,
                  children: [
                    (0, l.jsx)(o.x, {
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
//# sourceMappingURL=5b575fd223853345a481.js.map
