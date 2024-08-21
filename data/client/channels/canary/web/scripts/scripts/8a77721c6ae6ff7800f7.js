"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89131"],
  {
    283836: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
        q: function () {
          return u;
        },
      }),
        i(47120);
      var l = i(470079),
        t = i(442837),
        r = i(241159),
        s = i(496929),
        a = i(558381),
        o = i(270144),
        d = i(238);
      function u(e, n) {
        l.useEffect(() => {
          c(e);
        }, [e]);
        let { subscriptionGroupListing: i } = (0, o.F5)(e, n),
          r = null == i ? void 0 : i.subscription_listings,
          s = (0, t.Wu)(
            [d.Z],
            () => {
              var n;
              let { subscriptions: i } = d.Z.getStoreLayout(e),
                l = new Set(i.map((e) => e.id));
              return null !==
                (n = null == r ? void 0 : r.filter((e) => l.has(e.id))) &&
                void 0 !== n
                ? n
                : [];
            },
            [e, r],
          ),
          a = (0, t.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
        return l.useMemo(
          () => ({
            subs: s,
            otps: a,
            subscriptionGroupListing: null != i ? i : void 0,
          }),
          [s, a, i],
        );
      }
      function c(e) {
        (0, r.k)(e), (0, a.oJ)(e), (0, s.yD)(e, !1);
      }
    },
    507608: function (e, n, i) {
      i.d(n, {
        AF: function () {
          return y;
        },
        hd: function () {
          return A;
        },
        zz: function () {
          return E;
        },
      }),
        i(47120);
      var l = i(735250),
        t = i(470079),
        r = i(905322),
        s = i(200207),
        a = i(269210),
        o = i(442837),
        d = i(481060),
        u = i(607070),
        c = i(100527),
        p = i(906732),
        m = i(87484),
        v = i(171246),
        g = i(930155),
        x = i(889989),
        h = i(696906),
        S = i(55563),
        f = i(551428),
        j = i(626135),
        I = i(768581),
        _ = i(73346),
        b = i(624138),
        R = i(591759),
        N = i(601911),
        T = i(110742),
        P = i(147496),
        k = i(680005),
        O = i(519896),
        Z = i(981631),
        M = i(689938),
        L = i(637714);
      function y(e) {
        let {
            app: n,
            subscriptionGroupListing: i,
            onlySubscribeServerSubForGuildId: s,
            subscriptionListings: a,
            otpListings: m,
          } = e,
          g = t.useMemo(() => (0, N.y)(n, 100), [n]),
          { bot: x } = n,
          h = t.useMemo(() => {
            var e;
            if ((null == x ? void 0 : x.banner) == null) return;
            let n = (0, I.aN)({
              id: x.id,
              banner: x.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != n && null !== (e = R.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [x]),
          S = t.useMemo(() => {
            var e;
            if ((null == x ? void 0 : x.banner) == null) return;
            let n = (0, I.aN)({
              id: x.id,
              banner: x.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != n && null !== (e = R.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [x]),
          f = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          _ = t.useMemo(
            () => [...a.map((e) => e.id), ...m.map((e) => e.id)],
            [a, m],
          ),
          { analyticsLocations: b } = (0, p.ZP)(c.Z.APP_STOREFRONT);
        return (
          t.useEffect(() => {
            0 !== _.length &&
              j.default.track(Z.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: n.id,
                sku_ids: _,
                location_stack: b,
              });
          }, [b, n.id, _]),
          (0, l.jsxs)("div", {
            className: L.wrapper,
            children: [
              (0, l.jsx)(r.j, {
                title: n.name,
                iconSrc: g,
                backgroundSrc: h,
                animatedBackgroundSrc: S,
                prefersReducedMotion: f,
              }),
              a.length > 0 &&
                null != i &&
                (0, l.jsxs)("div", {
                  className: L.productSection,
                  children: [
                    (0, l.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: M.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                    }),
                    (0, l.jsx)("div", {
                      className: L.productList,
                      children: a.map((e) =>
                        (0, l.jsx)(
                          E,
                          {
                            appId: n.id,
                            groupListingId: i.id,
                            onlySubscribeServerSubForGuildId: s,
                            listing: e,
                            groupListingType: (0, v.KW)(i.sku_flags)
                              ? "user"
                              : "guild",
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              m.length > 0 &&
                (0, l.jsxs)("div", {
                  className: L.productSection,
                  children: [
                    (0, l.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: M.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, l.jsx)("div", {
                      className: L.productList,
                      children: m.map((e) =>
                        (0, l.jsx)(A, { skuId: e.sku.id, appId: n.id }, e.id),
                      ),
                    }),
                  ],
                }),
              (0, l.jsx)(d.Text, {
                variant: "text-md/normal",
                className: L.legalText,
                children:
                  null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                    ? M.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: n.termsOfServiceUrl,
                        ppUrl: n.privacyPolicyUrl,
                      })
                    : M.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            ],
          })
        );
      }
      function E(e) {
        let {
            appId: n,
            groupListingId: i,
            onlySubscribeServerSubForGuildId: r,
            listing: s,
            groupListingType: o,
            onDetails: u,
          } = e,
          { data: c } = (0, g.H)(s.id),
          { openModal: p } = (0, h.Z)({
            guildId: r,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: Z.Sbl.APP_STOREFRONT,
            skuId: s.id,
          }),
          m = t.useMemo(() => {
            var e;
            return null === (e = s.store_listing_benefits) || void 0 === e
              ? void 0
              : e.map((e) => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, x.n)(n, e.icon),
                }));
          }, [n, s.store_listing_benefits]),
          v = t.useMemo(() => {
            var e;
            return null != s.image_asset &&
              null !== (e = R.Z.toURLSafe((0, _._W)(n, s.image_asset, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [n, s.image_asset]),
          S = t.useCallback(
            (e) =>
              null == c || 0 === c.length
                ? null
                : (0, l.jsx)(k.p, {
                    ...e,
                    appId: n,
                    groupListingId: i,
                    groupListingType: o,
                    guildId: r,
                    skuId: s.id,
                    subPlan: c[0],
                  }),
            [n, i, o, r, s.id, c],
          );
        return null == c
          ? null
          : (0, l.jsx)(a.U, {
              title: s.name,
              description: s.description,
              imgSrc: v,
              subscriptionType: o,
              onPurchase: p,
              PurchaseButton: S,
              benefitItems:
                null != m
                  ? m.map((e) =>
                      (0, l.jsx)(a.G, { name: e.title, icon: e.icon }, e.id),
                    )
                  : void 0,
              onDetails:
                null != u
                  ? u
                  : null != m
                    ? () => {
                        (0, d.openModal)((e) => {
                          let { onClose: t, transitionState: r } = e;
                          return (0, l.jsx)(O.SubscriptionDetailsModal, {
                            appId: n,
                            groupListingId: i,
                            groupListingType: o,
                            onClose: t,
                            skuId: s.id,
                            transitionState: r,
                          });
                        });
                      }
                    : void 0,
            });
      }
      function A(e) {
        var n, i, t, r;
        let { skuId: a, appId: u, onDetails: v } = e,
          { analyticsLocations: g } = (0, p.ZP)(c.Z.APP_STOREFRONT),
          x = (0, o.e7)([f.Z], () => f.Z.getForSKU(a), [a]),
          h = (0, o.e7)([S.Z], () => S.Z.get(a), [a]),
          j = (0, T.M)(a);
        if (null == h) return null;
        let I = null !== (i = h.name) && void 0 !== i ? i : "",
          N =
            null !==
              (t =
                null == x
                  ? void 0
                  : null === (n = x.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== t
              ? t
              : void 0,
          O =
            (null == x ? void 0 : x.headerBackground) != null &&
            null !==
              (r = R.Z.toURLSafe((0, _._W)(u, x.headerBackground, 256))) &&
            void 0 !== r
              ? r
              : void 0,
          L = h.type === Z.epS.DURABLE && j,
          y =
            h.type === Z.epS.DURABLE
              ? L
                ? M.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : M.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: E } = h;
        return null == E
          ? null
          : (0, l.jsx)(s.I, {
              title: I,
              description: N,
              headerImage: O,
              availabilityLabel: y,
              onDetails:
                null != v
                  ? v
                  : (0, b.Ew)(N)
                    ? void 0
                    : () => {
                        (0, d.openModal)((e) => {
                          let { onClose: n, transitionState: i } = e;
                          return (0, l.jsx)(P.ItemDetailsModal, {
                            appId: u,
                            skuId: a,
                            onClose: n,
                            transitionState: i,
                          });
                        });
                      },
              PurchaseButton: (e) =>
                (0, l.jsx)(k.Y, { ...e, appId: u, sku: h }),
              onPurchase: () => {
                (0, m.Z)({
                  applicationId: u,
                  skuId: h.id,
                  analyticsLocations: g,
                });
              },
            });
      }
    },
    905322: function (e, n, i) {
      i.d(n, {
        j: function () {
          return a;
        },
      });
      var l = i(735250),
        t = i(470079),
        r = i(777207),
        s = i(393713);
      function a(e) {
        let {
            title: n,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: o,
            animatedBackgroundSrc: d,
            prefersReducedMotion: u = !0,
          } = e,
          c = t.useMemo(() => {
            let e = null != o ? o : a;
            if (null != e)
              return {
                "--custom-background-url": "url(".concat(e.toString(), ")"),
              };
          }, [o, a]),
          p = t.useMemo(() => {
            if (null == o) return;
            let e = {
              "--custom-background-static": "url(".concat(o.toString()),
            };
            return (
              !u &&
                null != d &&
                (e["--custom-background-animated"] = "url(".concat(
                  d.toString(),
                  ")",
                )),
              e
            );
          }, [d, o, u]);
        return (0, l.jsxs)("div", {
          className: s.wrapper,
          children: [
            (0, l.jsx)("div", { className: s.background, style: c }),
            (0, l.jsxs)("div", {
              className: s.content,
              children: [
                null != a &&
                  (0, l.jsx)("div", {
                    className: s.icon,
                    children: (0, l.jsx)("img", { src: a.toString(), alt: "" }),
                  }),
                (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)(r.x, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: n,
                    }),
                    null != i &&
                      (0, l.jsxs)(r.x, {
                        variant: "text-sm/normal",
                        children: ["“", i, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != o
              ? (0, l.jsx)("div", { className: s.image, style: p })
              : null,
          ],
        });
      }
    },
    200207: function (e, n, i) {
      i.d(n, {
        I: function () {
          return c;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(557533),
        r = i.n(t),
        s = i(789978),
        a = i(790472),
        o = i(777207),
        d = i(25378),
        u = i(778342);
      function c(e) {
        let {
          title: n,
          description: i,
          headerImage: t,
          onDetails: c,
          onPurchase: p,
          PurchaseButton: m,
          availabilityLabel: v,
        } = e;
        return (0, l.jsx)(s.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != c ? c() : null != p && p();
            },
            children: [
              (0, l.jsx)("div", {
                className: d.cardHeaderImg,
                style:
                  null != t
                    ? {
                        backgroundImage:
                          null != t ? "url(".concat(t.toString(), ")") : void 0,
                      }
                    : void 0,
                children:
                  null == t &&
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
                    children: n,
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
              null != m &&
                (0, l.jsxs)("div", {
                  className: d.footer,
                  children: [
                    (0, l.jsx)(o.x, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: v,
                    }),
                    (0, l.jsx)(m, {
                      onClick: (e) => {
                        e.stopPropagation(), null == p || p();
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
//# sourceMappingURL=8a77721c6ae6ff7800f7.js.map
