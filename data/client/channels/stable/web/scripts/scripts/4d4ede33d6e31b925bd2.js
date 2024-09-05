"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89131"],
  {
    283836: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return u;
        },
        q: function () {
          return o;
        },
      });
      var l = i(470079),
        t = i(442837),
        r = i(241159),
        s = i(496929),
        a = i(558381),
        d = i(238);
      function o(n) {
        return (
          l.useEffect(() => {
            u(n);
          }, [n]),
          (0, t.e7)([d.Z], () => d.Z.getStoreLayout(n), [n])
        );
      }
      function u(n) {
        (0, r.k)(n), (0, a.oJ)(n), (0, s.yD)(n, !1);
      }
    },
    507608: function (n, e, i) {
      i.d(e, {
        AF: function () {
          return E;
        },
        hd: function () {
          return U;
        },
        zz: function () {
          return L;
        },
      }),
        i(47120);
      var l = i(735250),
        t = i(470079),
        r = i(905322),
        s = i(200207),
        a = i(269210),
        d = i(442837),
        o = i(481060),
        u = i(607070),
        c = i(100527),
        p = i(906732),
        m = i(87484),
        v = i(171246),
        g = i(930155),
        h = i(889989),
        x = i(696906),
        I = i(55563),
        S = i(551428),
        f = i(626135),
        j = i(768581),
        b = i(73346),
        k = i(624138),
        R = i(591759),
        N = i(601911),
        T = i(110742),
        P = i(147496),
        O = i(680005),
        _ = i(519896),
        Z = i(981631),
        M = i(689938),
        y = i(637714);
      function E(n) {
        let {
            app: e,
            onlySubscribeServerSubForGuildId: i,
            subscriptions: s,
            otps: a,
          } = n,
          m = t.useMemo(() => (0, N.y)(e, 100), [e]),
          { bot: g } = e,
          h = t.useMemo(() => {
            var n;
            if ((null == g ? void 0 : g.banner) == null) return;
            let e = (0, j.aN)({
              id: g.id,
              banner: g.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != e && null !== (n = R.Z.toURLSafe(e)) && void 0 !== n
              ? n
              : void 0;
          }, [g]),
          x = t.useMemo(() => {
            var n;
            if ((null == g ? void 0 : g.banner) == null) return;
            let e = (0, j.aN)({
              id: g.id,
              banner: g.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != e && null !== (n = R.Z.toURLSafe(e)) && void 0 !== n
              ? n
              : void 0;
          }, [g]),
          I = (0, d.e7)([u.Z], () => u.Z.useReducedMotion),
          S = t.useMemo(
            () => [...s.map((n) => n.skuId), ...a.map((n) => n.skuId)],
            [s, a],
          ),
          { analyticsLocations: b } = (0, p.ZP)(c.Z.APP_STOREFRONT);
        return (
          t.useEffect(() => {
            0 !== S.length &&
              f.default.track(Z.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: e.id,
                sku_ids: S,
                location_stack: b,
              });
          }, [b, e.id, S]),
          (0, l.jsxs)("div", {
            className: y.wrapper,
            children: [
              (0, l.jsx)(r.j, {
                title: e.name,
                iconSrc: m,
                backgroundSrc: h,
                animatedBackgroundSrc: x,
                prefersReducedMotion: I,
              }),
              s.length > 0 &&
                (0, l.jsxs)("div", {
                  className: y.productSection,
                  children: [
                    (0, l.jsx)(o.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: M.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                    }),
                    (0, l.jsx)("div", {
                      className: y.productList,
                      children: s.map((n) =>
                        (0, l.jsx)(
                          L,
                          {
                            appId: e.id,
                            onlySubscribeServerSubForGuildId: i,
                            listing: n,
                            subscriptionType: (0, v.KW)(n.skuFlags)
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
                  className: y.productSection,
                  children: [
                    (0, l.jsx)(o.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: M.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, l.jsx)("div", {
                      className: y.productList,
                      children: a.map((n) =>
                        (0, l.jsx)(U, { skuId: n.skuId, appId: e.id }, n.id),
                      ),
                    }),
                  ],
                }),
              (0, l.jsx)(o.Text, {
                variant: "text-md/normal",
                className: y.legalText,
                children:
                  null != e.termsOfServiceUrl && null != e.privacyPolicyUrl
                    ? M.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: e.termsOfServiceUrl,
                        ppUrl: e.privacyPolicyUrl,
                      })
                    : M.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            ],
          })
        );
      }
      function L(n) {
        var e;
        let {
            appId: i,
            onlySubscribeServerSubForGuildId: r,
            listing: s,
            subscriptionType: u,
            onDetails: c,
          } = n,
          { data: p } = (0, g.H)(s.skuId),
          m = (0, d.e7)([I.Z], () => I.Z.getParentSKU(s.skuId), [s.skuId]),
          { openModal: v } = (0, x.Z)({
            guildId: r,
            groupListingId: null == m ? void 0 : m.id,
            showBenefitsFirst: !1,
            analyticsLocation: Z.Sbl.APP_STOREFRONT,
            skuId: s.skuId,
          }),
          S = t.useMemo(() => {
            var n;
            return null === (n = s.benefits) || void 0 === n
              ? void 0
              : n.map((n) => ({
                  id: n.id,
                  title: n.name,
                  description: n.description,
                  icon: (0, h.n)(i, n.icon),
                }));
          }, [i, s.benefits]),
          f = t.useMemo(() => {
            var n;
            return null != s.thumbnail &&
              null !== (n = R.Z.toURLSafe((0, b._W)(i, s.thumbnail, 256))) &&
              void 0 !== n
              ? n
              : void 0;
          }, [i, s.thumbnail]),
          j = t.useCallback(
            (n) =>
              null == p || 0 === p.length
                ? null
                : (0, l.jsx)(O.p, {
                    ...n,
                    appId: i,
                    groupListingId: null == m ? void 0 : m.id,
                    subscriptionType: u,
                    guildId: r,
                    skuId: s.skuId,
                    subscriptionPlan: p[0],
                  }),
            [i, null == m ? void 0 : m.id, u, r, s.skuId, p],
          );
        return null == p
          ? null
          : (0, l.jsx)(a.U, {
              title: s.summary,
              description:
                null !== (e = s.description) && void 0 !== e ? e : void 0,
              imgSrc: f,
              subscriptionType: u,
              onPurchase: v,
              renderPurchaseButton: j,
              benefitItems:
                null != S
                  ? S.map((n) =>
                      (0, l.jsx)(a.G, { name: n.title, icon: n.icon }, n.id),
                    )
                  : void 0,
              onDetails:
                null != c
                  ? c
                  : null != S
                    ? () => {
                        (0, o.openModal)((n) => {
                          let { onClose: e, transitionState: t } = n;
                          return (0, l.jsx)(_.SubscriptionDetailsModal, {
                            appId: i,
                            groupListingId: null == m ? void 0 : m.id,
                            subscriptionType: u,
                            onClose: e,
                            skuId: s.skuId,
                            transitionState: t,
                          });
                        });
                      }
                    : void 0,
            });
      }
      function U(n) {
        var e, i, t, r;
        let { skuId: a, appId: u, onDetails: v } = n,
          { analyticsLocations: g } = (0, p.ZP)(c.Z.APP_STOREFRONT),
          h = (0, d.e7)([S.Z], () => S.Z.getForSKU(a), [a]),
          x = (0, d.e7)([I.Z], () => I.Z.get(a), [a]),
          f = (0, T.M)(a);
        if (null == x) return null;
        let j = null !== (i = x.name) && void 0 !== i ? i : "",
          N =
            null !==
              (t =
                null == h
                  ? void 0
                  : null === (e = h.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== t
              ? t
              : void 0,
          _ =
            (null == h ? void 0 : h.headerBackground) != null &&
            null !==
              (r = R.Z.toURLSafe((0, b._W)(u, h.headerBackground, 256))) &&
            void 0 !== r
              ? r
              : void 0,
          y = x.type === Z.epS.DURABLE && f,
          E =
            x.type === Z.epS.DURABLE
              ? y
                ? M.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : M.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = x;
        return null == L
          ? null
          : (0, l.jsx)(s.I, {
              title: j,
              description: N,
              headerImage: _,
              availabilityLabel: E,
              onDetails:
                null != v
                  ? v
                  : (0, k.Ew)(N)
                    ? void 0
                    : () => {
                        (0, o.openModal)((n) => {
                          let { onClose: e, transitionState: i } = n;
                          return (0, l.jsx)(P.ItemDetailsModal, {
                            appId: u,
                            skuId: a,
                            onClose: e,
                            transitionState: i,
                          });
                        });
                      },
              PurchaseButton: (n) =>
                (0, l.jsx)(O.Y, { ...n, appId: u, sku: x }),
              onPurchase: () => {
                (0, m.Z)({
                  applicationId: u,
                  skuId: x.id,
                  analyticsLocations: g,
                });
              },
            });
      }
    },
    905322: function (n, e, i) {
      i.d(e, {
        j: function () {
          return a;
        },
      });
      var l = i(735250),
        t = i(470079),
        r = i(777207),
        s = i(393713);
      function a(n) {
        let {
            title: e,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: d,
            animatedBackgroundSrc: o,
            prefersReducedMotion: u = !0,
          } = n,
          c = t.useMemo(() => {
            let n = null != d ? d : a;
            if (null != n)
              return {
                "--custom-background-url": "url(".concat(n.toString(), ")"),
              };
          }, [d, a]),
          p = t.useMemo(() => {
            if (null == d) return;
            let n = {
              "--custom-background-static": "url(".concat(d.toString()),
            };
            return (
              !u &&
                null != o &&
                (n["--custom-background-animated"] = "url(".concat(
                  o.toString(),
                  ")",
                )),
              n
            );
          }, [o, d, u]);
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
                      children: e,
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
            null != d
              ? (0, l.jsx)("div", { className: s.image, style: p })
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
      var l = i(735250);
      i(470079);
      var t = i(557533),
        r = i.n(t),
        s = i(789978),
        a = i(790472),
        d = i(777207),
        o = i(25378),
        u = i(778342);
      function c(n) {
        let {
          title: e,
          description: i,
          headerImage: t,
          onDetails: c,
          onPurchase: p,
          PurchaseButton: m,
          availabilityLabel: v,
        } = n;
        return (0, l.jsx)(s.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(o.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != c ? c() : null != p && p();
            },
            children: [
              (0, l.jsx)("div", {
                className: o.cardHeaderImg,
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
                className: o.details,
                children: [
                  (0, l.jsx)(d.x, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: e,
                  }),
                  null != i &&
                    (0, l.jsx)(d.x, {
                      className: o.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: i,
                    }),
                ],
              }),
              null != m &&
                (0, l.jsxs)("div", {
                  className: o.footer,
                  children: [
                    (0, l.jsx)(d.x, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: v,
                    }),
                    (0, l.jsx)(m, {
                      onClick: (n) => {
                        n.stopPropagation(), null == p || p();
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
//# sourceMappingURL=4d4ede33d6e31b925bd2.js.map
