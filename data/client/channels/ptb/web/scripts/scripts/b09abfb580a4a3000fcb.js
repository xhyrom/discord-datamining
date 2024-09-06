"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98538"],
  {
    507608: function (e, n, l) {
      l.d(n, {
        AF: function () {
          return A;
        },
        hd: function () {
          return L;
        },
        zz: function () {
          return C;
        },
      }),
        l(47120);
      var i = l(735250),
        t = l(470079),
        s = l(905322),
        a = l(200207),
        r = l(269210),
        o = l(442837),
        d = l(481060),
        u = l(607070),
        c = l(100527),
        m = l(906732),
        p = l(87484),
        v = l(171246),
        h = l(930155),
        S = l(889989),
        x = l(696906),
        g = l(55563),
        I = l(551428),
        N = l(626135),
        T = l(768581),
        j = l(73346),
        R = l(624138),
        f = l(591759),
        b = l(601911),
        O = l(110742),
        k = l(147496),
        E = l(680005),
        P = l(519896),
        M = l(981631),
        _ = l(689938),
        Z = l(637714);
      function A(e) {
        let {
            app: n,
            onlySubscribeServerSubForGuildId: l,
            subscriptions: a,
            otps: r,
          } = e,
          p = t.useMemo(() => (0, b.y)(n, 100), [n]),
          { bot: h } = n,
          S = t.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, T.aN)({
              id: h.id,
              banner: h.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != n && null !== (e = f.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [h]),
          x = t.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, T.aN)({
              id: h.id,
              banner: h.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != n && null !== (e = f.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [h]),
          g = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
          I = t.useMemo(
            () => [...a.map((e) => e.skuId), ...r.map((e) => e.skuId)],
            [a, r],
          ),
          { analyticsLocations: j } = (0, m.ZP)(c.Z.APP_STOREFRONT);
        return (
          t.useEffect(() => {
            0 !== I.length &&
              N.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: n.id,
                sku_ids: I,
                location_stack: j,
              });
          }, [j, n.id, I]),
          (0, i.jsxs)("div", {
            className: Z.wrapper,
            children: [
              (0, i.jsx)(s.j, {
                title: n.name,
                iconSrc: p,
                backgroundSrc: S,
                animatedBackgroundSrc: x,
                prefersReducedMotion: g,
              }),
              a.length > 0 &&
                (0, i.jsxs)("div", {
                  className: Z.productSection,
                  children: [
                    (0, i.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: _.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                    }),
                    (0, i.jsx)("div", {
                      className: Z.productList,
                      children: a.map((e) =>
                        (0, i.jsx)(
                          C,
                          {
                            appId: n.id,
                            onlySubscribeServerSubForGuildId: l,
                            listing: e,
                            subscriptionType: (0, v.KW)(e.skuFlags)
                              ? "user"
                              : "guild",
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              r.length > 0 &&
                (0, i.jsxs)("div", {
                  className: Z.productSection,
                  children: [
                    (0, i.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: _.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, i.jsx)("div", {
                      className: Z.productList,
                      children: r.map((e) =>
                        (0, i.jsx)(L, { skuId: e.skuId, appId: n.id }, e.id),
                      ),
                    }),
                  ],
                }),
              (0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                className: Z.legalText,
                children:
                  null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                    ? _.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: n.termsOfServiceUrl,
                        ppUrl: n.privacyPolicyUrl,
                      })
                    : _.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            ],
          })
        );
      }
      function C(e) {
        var n;
        let {
            appId: l,
            onlySubscribeServerSubForGuildId: s,
            listing: a,
            subscriptionType: u,
            onDetails: c,
          } = e,
          { data: m } = (0, h.H)(a.skuId),
          p = (0, o.e7)([g.Z], () => g.Z.getParentSKU(a.skuId), [a.skuId]),
          { openModal: v } = (0, x.Z)({
            guildId: s,
            groupListingId: null == p ? void 0 : p.id,
            showBenefitsFirst: !1,
            analyticsLocation: M.Sbl.APP_STOREFRONT,
            skuId: a.skuId,
          }),
          I = t.useMemo(() => {
            var e;
            return null === (e = a.benefits) || void 0 === e
              ? void 0
              : e.map((e) => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, S.n)(l, e.icon),
                }));
          }, [l, a.benefits]),
          N = t.useMemo(() => {
            var e;
            return null != a.thumbnail &&
              null !== (e = f.Z.toURLSafe((0, j._W)(l, a.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [l, a.thumbnail]),
          T = t.useCallback(
            (e) =>
              null == m || 0 === m.length
                ? null
                : (0, i.jsx)(E.p, {
                    ...e,
                    appId: l,
                    groupListingId: null == p ? void 0 : p.id,
                    subscriptionType: u,
                    guildId: s,
                    skuId: a.skuId,
                    subscriptionPlan: m[0],
                  }),
            [l, null == p ? void 0 : p.id, u, s, a.skuId, m],
          );
        return null == m
          ? null
          : (0, i.jsx)(r.U, {
              title: a.summary,
              description:
                null !== (n = a.description) && void 0 !== n ? n : void 0,
              imgSrc: N,
              subscriptionType: u,
              onPurchase: v,
              renderPurchaseButton: T,
              benefitItems:
                null != I
                  ? I.map((e) =>
                      (0, i.jsx)(r.G, { name: e.title, icon: e.icon }, e.id),
                    )
                  : void 0,
              onDetails:
                null != c
                  ? c
                  : null != I
                    ? () => {
                        (0, d.openModal)((e) => {
                          let { onClose: n, transitionState: t } = e;
                          return (0, i.jsx)(P.SubscriptionDetailsModal, {
                            appId: l,
                            groupListingId: null == p ? void 0 : p.id,
                            subscriptionType: u,
                            onClose: n,
                            skuId: a.skuId,
                            transitionState: t,
                          });
                        });
                      }
                    : void 0,
            });
      }
      function L(e) {
        var n, l, t, s;
        let { skuId: r, appId: u, onDetails: v } = e,
          { analyticsLocations: h } = (0, m.ZP)(c.Z.APP_STOREFRONT),
          S = (0, o.e7)([I.Z], () => I.Z.getForSKU(r), [r]),
          x = (0, o.e7)([g.Z], () => g.Z.get(r), [r]),
          N = (0, O.M)(r);
        if (null == x) return null;
        let T = null !== (l = x.name) && void 0 !== l ? l : "",
          b =
            null !==
              (t =
                null == S
                  ? void 0
                  : null === (n = S.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== t
              ? t
              : void 0,
          P =
            (null == S ? void 0 : S.headerBackground) != null &&
            null !==
              (s = f.Z.toURLSafe((0, j._W)(u, S.headerBackground, 256))) &&
            void 0 !== s
              ? s
              : void 0,
          Z = x.type === M.epS.DURABLE && N,
          A =
            x.type === M.epS.DURABLE
              ? Z
                ? _.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : _.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: C } = x;
        return null == C
          ? null
          : (0, i.jsx)(a.I, {
              title: T,
              description: b,
              headerImage: P,
              availabilityLabel: A,
              onDetails:
                null != v
                  ? v
                  : (0, R.Ew)(b)
                    ? void 0
                    : () => {
                        (0, d.openModal)((e) => {
                          let { onClose: n, transitionState: l } = e;
                          return (0, i.jsx)(k.ItemDetailsModal, {
                            appId: u,
                            skuId: r,
                            onClose: n,
                            transitionState: l,
                          });
                        });
                      },
              PurchaseButton: (e) =>
                (0, i.jsx)(E.Y, { ...e, appId: u, sku: x }),
              onPurchase: () => {
                (0, p.Z)({
                  applicationId: u,
                  skuId: x.id,
                  analyticsLocations: h,
                });
              },
            });
      }
    },
    7225: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return T;
          },
        }),
        l(47120);
      var i,
        t,
        s = l(735250),
        a = l(470079),
        r = l(442837),
        o = l(481060),
        d = l(728345),
        u = l(812206),
        c = l(886176),
        m = l(270144),
        p = l(572004),
        v = l(504211),
        h = l(283836),
        S = l(507608),
        x = l(981631),
        g = l(272242),
        I = l(689938),
        N = l(437561);
      function T(e) {
        let {
            onClose: n,
            transitionState: l,
            appId: i,
            onlySubscribeServerSubForGuildId: t,
          } = e,
          T = (0, r.e7)([u.Z], () => u.Z.getApplication(i), [i]),
          [j, R] = a.useState(() =>
            u.Z.isFetchingApplication(i) ? { status: 1 } : { status: 0 },
          ),
          f = a.useRef(null),
          [b, O] = a.useState(!0),
          k = () => {
            var e;
            (null === (e = f.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? O(!1)
              : O(!0);
          };
        a.useEffect(() => {
          0 === j.status &&
            (R({ status: 1 }),
            d.Z.fetchApplication(i)
              .then(() => {
                R({ status: 2 });
              })
              .catch((e) => {
                R({ status: 3, error: e.message });
              }));
        }, [i, j.status]);
        let { subscriptions: E, otps: P } = (0, h.q)(i);
        if (
          ((0, m.FE)(i, null == T ? void 0 : T.primarySkuId, {
            refetchOnMount: !0,
          }),
          null == T)
        )
          return null;
        let M = I.Z.Messages.STOREFRONT_TITLE.format({ appName: T.name });
        return (0, s.jsxs)(o.ModalRoot, {
          transitionState: l,
          "aria-label": M,
          size: o.ModalSize.DYNAMIC,
          className: N.modal,
          children: [
            (0, s.jsxs)(o.ModalHeader, {
              className: N.modalHeader,
              children: [
                (0, s.jsxs)("div", {
                  className: N.modalTitle,
                  children: [
                    (0, s.jsx)(c.Z, {}),
                    (0, s.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: M,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: N.modalHeaderLinks,
                  children: [
                    p.wS &&
                      (0, s.jsx)(o.Button, {
                        look: o.ButtonLooks.BLANK,
                        size: o.ButtonSizes.ICON,
                        color: o.ButtonColors.TRANSPARENT,
                        "aria-label": I.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                i,
                                g.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, p.JG)(e),
                            (0, o.showToast)(
                              (0, o.createToast)(
                                I.Z.Messages.COPIED_LINK,
                                o.ToastType.SUCCESS,
                              ),
                            ),
                            (0, v.X)(i, v.B.STORE_MODAL);
                        },
                        children: (0, s.jsx)(o.LinkIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "var(--white)",
                        }),
                      }),
                    (0, s.jsx)(o.ModalCloseButton, {
                      onClick: n,
                      className: N.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(o.ModalContent, {
              scrollerRef: (e) => {
                null != e && ((f.current = e), k());
              },
              onScroll: k,
              children: (0, s.jsx)(S.AF, {
                app: T,
                onlySubscribeServerSubForGuildId: t,
                subscriptions: E,
                otps: P,
              }),
            }),
            (0, s.jsx)("div", {
              className: N.containerScrollGradient,
              "data-shown": b,
            }),
          ],
        });
      }
      ((t = i || (i = {}))[(t.NONE = 0)] = "NONE"),
        (t[(t.FETCHING = 1)] = "FETCHING"),
        (t[(t.FETCHED = 2)] = "FETCHED"),
        (t[(t.ERROR = 3)] = "ERROR");
    },
    905322: function (e, n, l) {
      l.d(n, {
        j: function () {
          return r;
        },
      });
      var i = l(735250),
        t = l(470079),
        s = l(777207),
        a = l(393713);
      function r(e) {
        let {
            title: n,
            subtitle: l,
            iconSrc: r,
            backgroundSrc: o,
            animatedBackgroundSrc: d,
            prefersReducedMotion: u = !0,
          } = e,
          c = t.useMemo(() => {
            let e = null != o ? o : r;
            if (null != e)
              return {
                "--custom-background-url": "url(".concat(e.toString(), ")"),
              };
          }, [o, r]),
          m = t.useMemo(() => {
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
        return (0, i.jsxs)("div", {
          className: a.wrapper,
          children: [
            (0, i.jsx)("div", { className: a.background, style: c }),
            (0, i.jsxs)("div", {
              className: a.content,
              children: [
                null != r &&
                  (0, i.jsx)("div", {
                    className: a.icon,
                    children: (0, i.jsx)("img", { src: r.toString(), alt: "" }),
                  }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(s.x, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: n,
                    }),
                    null != l &&
                      (0, i.jsxs)(s.x, {
                        variant: "text-sm/normal",
                        children: ["“", l, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != o
              ? (0, i.jsx)("div", { className: a.image, style: m })
              : null,
          ],
        });
      }
    },
    200207: function (e, n, l) {
      l.d(n, {
        I: function () {
          return c;
        },
      });
      var i = l(735250);
      l(470079);
      var t = l(557533),
        s = l.n(t),
        a = l(789978),
        r = l(790472),
        o = l(777207),
        d = l(25378),
        u = l(778342);
      function c(e) {
        let {
          title: n,
          description: l,
          headerImage: t,
          onDetails: c,
          onPurchase: m,
          PurchaseButton: p,
          availabilityLabel: v,
        } = e;
        return (0, i.jsx)(a.tE, {
          children: (0, i.jsxs)("div", {
            className: s()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != c ? c() : null != m && m();
            },
            children: [
              (0, i.jsx)("div", {
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
                  (0, i.jsx)(r.P, {
                    color: "white",
                    size: "custom",
                    height: 80,
                    width: 80,
                  }),
              }),
              (0, i.jsxs)("div", {
                className: d.details,
                children: [
                  (0, i.jsx)(o.x, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: n,
                  }),
                  null != l &&
                    (0, i.jsx)(o.x, {
                      className: d.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: l,
                    }),
                ],
              }),
              null != p &&
                (0, i.jsxs)("div", {
                  className: d.footer,
                  children: [
                    (0, i.jsx)(o.x, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: v,
                    }),
                    (0, i.jsx)(p, {
                      onClick: (e) => {
                        e.stopPropagation(), null == m || m();
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
//# sourceMappingURL=b09abfb580a4a3000fcb.js.map
