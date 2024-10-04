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
          return L;
        },
        hd: function () {
          return F;
        },
        zz: function () {
          return y;
        },
      }),
        i(47120);
      var l = i(735250),
        s = i(470079),
        t = i(905322),
        r = i(200207),
        a = i(269210),
        o = i(442837),
        d = i(481060),
        u = i(607070),
        c = i(100527),
        m = i(906732),
        v = i(87484),
        p = i(171246),
        x = i(930155),
        h = i(889989),
        g = i(696906),
        I = i(55563),
        S = i(551428),
        j = i(626135),
        R = i(768581),
        f = i(73346),
        N = i(624138),
        P = i(591759),
        T = i(601911),
        k = i(150414),
        b = i(110742),
        O = i(147496),
        _ = i(680005),
        E = i(955335),
        M = i(519896),
        A = i(981631),
        U = i(689938),
        Z = i(335567);
      function L(n) {
        let { app: e, guildId: i, subscriptions: r, otps: a } = n,
          v = s.useMemo(() => (0, T.y)(e, 100), [e]),
          { bot: x } = e,
          h = s.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null) return;
            let e = (0, R.aN)({
              id: x.id,
              banner: x.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != e && null !== (n = P.Z.toURLSafe(e)) && void 0 !== n
              ? n
              : void 0;
          }, [x]),
          g = s.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null) return;
            let e = (0, R.aN)({
              id: x.id,
              banner: x.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != e && null !== (n = P.Z.toURLSafe(e)) && void 0 !== n
              ? n
              : void 0;
          }, [x]),
          I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          S = s.useMemo(
            () => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)],
            [r, a],
          ),
          { analyticsLocations: f } = (0, m.ZP)(c.Z.APP_STOREFRONT);
        return (
          s.useEffect(() => {
            0 !== S.length &&
              j.default.track(A.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: e.id,
                sku_ids: S,
                location_stack: f,
              });
          }, [f, e.id, S]),
          (0, l.jsxs)("div", {
            className: Z.wrapper,
            children: [
              (0, l.jsx)(t.j, {
                title: e.name,
                iconSrc: v,
                backgroundSrc: h,
                animatedBackgroundSrc: g,
                prefersReducedMotion: I,
              }),
              r.length > 0 &&
                (0, l.jsxs)("div", {
                  className: Z.productSection,
                  children: [
                    (0, l.jsx)(E.r, { subscriptions: r }),
                    (0, l.jsx)("div", {
                      className: Z.productList,
                      children: r.map((n) =>
                        (0, l.jsx)(
                          y,
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
                  className: Z.productSection,
                  children: [
                    (0, l.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      children: U.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, l.jsx)("div", {
                      className: Z.productList,
                      children: a.map((n) =>
                        (0, l.jsx)(F, { skuId: n.skuId, appId: e.id }, n.id),
                      ),
                    }),
                  ],
                }),
              (0, l.jsx)(d.Text, {
                variant: "text-md/normal",
                className: Z.legalText,
                children:
                  null != e.termsOfServiceUrl && null != e.privacyPolicyUrl
                    ? U.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: e.termsOfServiceUrl,
                        ppUrl: e.privacyPolicyUrl,
                      })
                    : U.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            ],
          })
        );
      }
      function y(n) {
        var e;
        let {
            appId: i,
            guildId: t,
            listing: r,
            subscriptionType: o,
            onDetails: u,
          } = n,
          { data: c } = (0, x.H)(r.skuId),
          {
            openModal: m,
            canOpenModal: v,
            cannotOpenReason: p,
          } = (0, g.Z)({
            guildId: t,
            showBenefitsFirst: !1,
            analyticsLocation: A.Sbl.APP_STOREFRONT,
            skuId: r.skuId,
          }),
          I = s.useMemo(() => {
            var n;
            return null === (n = r.benefits) || void 0 === n
              ? void 0
              : n.map((n) => ({
                  id: n.id,
                  title: n.name,
                  description: n.description,
                  icon: (0, h.n)(i, n.icon),
                }));
          }, [i, r.benefits]),
          S = s.useMemo(
            () =>
              null != r.thumbnail ? (0, k.q)(i, r.thumbnail, 256) : void 0,
            [i, r.thumbnail],
          ),
          j = s.useCallback(
            (n) =>
              null == c || 0 === c.length
                ? null
                : (0, l.jsx)(_.p, {
                    ...n,
                    appId: i,
                    subscriptionType: o,
                    skuId: r.skuId,
                    subscriptionPlan: c[0],
                    canPurchase: v,
                    cannotPurchaseReason: p,
                  }),
            [i, o, r.skuId, c, v, p],
          );
        return null == c
          ? null
          : (0, l.jsx)(a.U, {
              title: r.summary,
              description:
                null !== (e = r.description) && void 0 !== e ? e : void 0,
              imgSrc: S,
              onPurchase: m,
              renderPurchaseButton: j,
              benefitItems:
                null != I
                  ? I.map((n) =>
                      (0, l.jsx)(a.G, { name: n.title, icon: n.icon }, n.id),
                    )
                  : void 0,
              onDetails:
                null != u
                  ? u
                  : null != I
                    ? () => {
                        (0, d.openModal)((n) => {
                          let { onClose: e, transitionState: s } = n;
                          return (0, l.jsx)(M.SubscriptionDetailsModal, {
                            appId: i,
                            subscriptionType: o,
                            onClose: e,
                            skuId: r.skuId,
                            transitionState: s,
                            guildId: t,
                          });
                        });
                      }
                    : void 0,
            });
      }
      function F(n) {
        var e, i, s, t;
        let { skuId: a, appId: u, onDetails: p } = n,
          { analyticsLocations: x } = (0, m.ZP)(c.Z.APP_STOREFRONT),
          h = (0, o.e7)([S.Z], () => S.Z.getForSKU(a), [a]),
          g = (0, o.e7)([I.Z], () => I.Z.get(a), [a]),
          j = (0, b.M)(a);
        if (null == g) return null;
        let R = null !== (i = g.name) && void 0 !== i ? i : "",
          T =
            null !==
              (s =
                null == h
                  ? void 0
                  : null === (e = h.description) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== s
              ? s
              : void 0,
          k =
            (null == h ? void 0 : h.headerBackground) != null &&
            null !==
              (t = P.Z.toURLSafe((0, f._W)(u, h.headerBackground, 256))) &&
            void 0 !== t
              ? t
              : void 0,
          E = g.type === A.epS.DURABLE && j,
          M =
            g.type === A.epS.DURABLE
              ? E
                ? U.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : U.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: Z } = g;
        return null == Z
          ? null
          : (0, l.jsx)(r.I, {
              title: R,
              description: T,
              headerImage: k,
              availabilityLabel: M,
              onDetails:
                null != p
                  ? p
                  : (0, N.Ew)(T)
                    ? void 0
                    : () => {
                        (0, d.openModal)((n) => {
                          let { onClose: e, transitionState: i } = n;
                          return (0, l.jsx)(O.ItemDetailsModal, {
                            appId: u,
                            skuId: a,
                            onClose: e,
                            transitionState: i,
                          });
                        });
                      },
              PurchaseButton: (n) =>
                (0, l.jsx)(_.Y, { ...n, appId: u, sku: g }),
              onPurchase: () => {
                (0, v.Z)({
                  applicationId: u,
                  skuId: g.id,
                  analyticsLocations: x,
                });
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
      var l = i(735250);
      i(470079);
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
      var l = i(735250),
        s = i(470079),
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
      var l = i(735250);
      i(470079);
      var s = i(557533),
        t = i.n(s),
        r = i(789978),
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
//# sourceMappingURL=2d31534384dc2f960733.js.map
