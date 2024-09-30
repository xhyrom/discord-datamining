"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98538"],
  {
    150414: function (e, n, t) {
      t.d(n, {
        q: function () {
          return l;
        },
      });
      var a = t(73346),
        i = t(591759);
      function l(e, n, t) {
        var l;
        return null !== (l = i.Z.toURLSafe((0, a._W)(e, n, t))) && void 0 !== l
          ? l
          : void 0;
      }
    },
    507608: function (e, n, t) {
      t.d(n, {
        AF: function () {
          return C;
        },
        hd: function () {
          return y;
        },
        zz: function () {
          return L;
        },
      }),
        t(47120);
      var a = t(735250),
        i = t(470079),
        l = t(905322),
        s = t(200207),
        r = t(269210),
        o = t(442837),
        d = t(481060),
        c = t(607070),
        u = t(100527),
        p = t(906732),
        m = t(87484),
        v = t(171246),
        h = t(930155),
        x = t(889989),
        g = t(696906),
        f = t(55563),
        S = t(551428),
        I = t(626135),
        N = t(768581),
        T = t(73346),
        R = t(624138),
        j = t(591759),
        _ = t(601911),
        b = t(150414),
        O = t(110742),
        k = t(147496),
        E = t(680005),
        P = t(519896),
        M = t(981631),
        A = t(689938),
        Z = t(335567);
      function C(e) {
        let { app: n, guildId: t, subscriptions: s, otps: r } = e,
          m = i.useMemo(() => (0, _.y)(n, 100), [n]),
          { bot: h } = n,
          x = i.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, N.aN)({
              id: h.id,
              banner: h.banner,
              size: 1024,
              canAnimate: !1,
            });
            return null != n && null !== (e = j.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [h]),
          g = i.useMemo(() => {
            var e;
            if ((null == h ? void 0 : h.banner) == null) return;
            let n = (0, N.aN)({
              id: h.id,
              banner: h.banner,
              size: 1024,
              canAnimate: !0,
            });
            return null != n && null !== (e = j.Z.toURLSafe(n)) && void 0 !== e
              ? e
              : void 0;
          }, [h]),
          f = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
          S = i.useMemo(
            () => [...s.map((e) => e.skuId), ...r.map((e) => e.skuId)],
            [s, r],
          ),
          { analyticsLocations: T } = (0, p.ZP)(u.Z.APP_STOREFRONT);
        return (
          i.useEffect(() => {
            0 !== S.length &&
              I.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                application_id: n.id,
                sku_ids: S,
                location_stack: T,
              });
          }, [T, n.id, S]),
          (0, a.jsxs)("div", {
            className: Z.wrapper,
            children: [
              (0, a.jsx)(l.j, {
                title: n.name,
                iconSrc: m,
                backgroundSrc: x,
                animatedBackgroundSrc: g,
                prefersReducedMotion: f,
              }),
              s.length > 0 &&
                (0, a.jsxs)("div", {
                  className: Z.productSection,
                  children: [
                    (0, a.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: A.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS,
                    }),
                    (0, a.jsx)("div", {
                      className: Z.productList,
                      children: s.map((e) =>
                        (0, a.jsx)(
                          L,
                          {
                            appId: n.id,
                            guildId: t,
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
                (0, a.jsxs)("div", {
                  className: Z.productSection,
                  children: [
                    (0, a.jsx)(d.Heading, {
                      variant: "heading-lg/semibold",
                      color: "header-secondary",
                      children: A.Z.Messages.STOREFRONT_APP_PRODUCTS,
                    }),
                    (0, a.jsx)("div", {
                      className: Z.productList,
                      children: r.map((e) =>
                        (0, a.jsx)(y, { skuId: e.skuId, appId: n.id }, e.id),
                      ),
                    }),
                  ],
                }),
              (0, a.jsx)(d.Text, {
                variant: "text-md/normal",
                className: Z.legalText,
                children:
                  null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
                    ? A.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: n.termsOfServiceUrl,
                        ppUrl: n.privacyPolicyUrl,
                      })
                    : A.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            ],
          })
        );
      }
      function L(e) {
        var n;
        let {
            appId: t,
            guildId: l,
            listing: s,
            subscriptionType: o,
            onDetails: c,
          } = e,
          { data: u } = (0, h.H)(s.skuId),
          {
            openModal: p,
            canOpenModal: m,
            cannotOpenReason: v,
          } = (0, g.Z)({
            guildId: l,
            showBenefitsFirst: !1,
            analyticsLocation: M.Sbl.APP_STOREFRONT,
            skuId: s.skuId,
          }),
          f = i.useMemo(() => {
            var e;
            return null === (e = s.benefits) || void 0 === e
              ? void 0
              : e.map((e) => ({
                  id: e.id,
                  title: e.name,
                  description: e.description,
                  icon: (0, x.n)(t, e.icon),
                }));
          }, [t, s.benefits]),
          S = i.useMemo(
            () =>
              null != s.thumbnail ? (0, b.q)(t, s.thumbnail, 256) : void 0,
            [t, s.thumbnail],
          ),
          I = i.useCallback(
            (e) =>
              null == u || 0 === u.length
                ? null
                : (0, a.jsx)(E.p, {
                    ...e,
                    appId: t,
                    subscriptionType: o,
                    skuId: s.skuId,
                    subscriptionPlan: u[0],
                    canPurchase: m,
                    cannotPurchaseReason: v,
                  }),
            [t, o, s.skuId, u, m, v],
          );
        return null == u
          ? null
          : (0, a.jsx)(r.U, {
              title: s.summary,
              description:
                null !== (n = s.description) && void 0 !== n ? n : void 0,
              imgSrc: S,
              subscriptionType: o,
              onPurchase: p,
              renderPurchaseButton: I,
              benefitItems:
                null != f
                  ? f.map((e) =>
                      (0, a.jsx)(r.G, { name: e.title, icon: e.icon }, e.id),
                    )
                  : void 0,
              onDetails:
                null != c
                  ? c
                  : null != f
                    ? () => {
                        (0, d.openModal)((e) => {
                          let { onClose: n, transitionState: i } = e;
                          return (0, a.jsx)(P.SubscriptionDetailsModal, {
                            appId: t,
                            subscriptionType: o,
                            onClose: n,
                            skuId: s.skuId,
                            transitionState: i,
                            guildId: l,
                          });
                        });
                      }
                    : void 0,
            });
      }
      function y(e) {
        var n, t, i, l;
        let { skuId: r, appId: c, onDetails: v } = e,
          { analyticsLocations: h } = (0, p.ZP)(u.Z.APP_STOREFRONT),
          x = (0, o.e7)([S.Z], () => S.Z.getForSKU(r), [r]),
          g = (0, o.e7)([f.Z], () => f.Z.get(r), [r]),
          I = (0, O.M)(r);
        if (null == g) return null;
        let N = null !== (t = g.name) && void 0 !== t ? t : "",
          _ =
            null !==
              (i =
                null == x
                  ? void 0
                  : null === (n = x.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== i
              ? i
              : void 0,
          b =
            (null == x ? void 0 : x.headerBackground) != null &&
            null !==
              (l = j.Z.toURLSafe((0, T._W)(c, x.headerBackground, 256))) &&
            void 0 !== l
              ? l
              : void 0,
          P = g.type === M.epS.DURABLE && I,
          Z =
            g.type === M.epS.DURABLE
              ? P
                ? A.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : A.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: C } = g;
        return null == C
          ? null
          : (0, a.jsx)(s.I, {
              title: N,
              description: _,
              headerImage: b,
              availabilityLabel: Z,
              onDetails:
                null != v
                  ? v
                  : (0, R.Ew)(_)
                    ? void 0
                    : () => {
                        (0, d.openModal)((e) => {
                          let { onClose: n, transitionState: t } = e;
                          return (0, a.jsx)(k.ItemDetailsModal, {
                            appId: c,
                            skuId: r,
                            onClose: n,
                            transitionState: t,
                          });
                        });
                      },
              PurchaseButton: (e) =>
                (0, a.jsx)(E.Y, { ...e, appId: c, sku: g }),
              onPurchase: () => {
                (0, m.Z)({
                  applicationId: c,
                  skuId: g.id,
                  analyticsLocations: h,
                });
              },
            });
      }
    },
    7225: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return I;
          },
        }),
        t(47120);
      var a,
        i,
        l = t(735250),
        s = t(470079),
        r = t(442837),
        o = t(481060),
        d = t(728345),
        c = t(812206),
        u = t(886176),
        p = t(572004),
        m = t(504211),
        v = t(283836),
        h = t(507608),
        x = t(981631),
        g = t(272242),
        f = t(689938),
        S = t(213891);
      function I(e) {
        let { onClose: n, transitionState: t, appId: a, guildId: i } = e,
          I = (0, r.e7)([c.Z], () => c.Z.getApplication(a), [a]),
          [N, T] = s.useState(() =>
            c.Z.isFetchingApplication(a) ? { status: 1 } : { status: 0 },
          ),
          R = s.useRef(null),
          [j, _] = s.useState(!0),
          b = () => {
            var e;
            (null === (e = R.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? _(!1)
              : _(!0);
          };
        s.useEffect(() => {
          0 === N.status &&
            (T({ status: 1 }),
            d.Z.fetchApplication(a)
              .then(() => {
                T({ status: 2 });
              })
              .catch((e) => {
                T({ status: 3, error: e.message });
              }));
        }, [a, N.status]);
        let { subscriptions: O, otps: k } = (0, v.q)(a);
        if (null == I) return null;
        let E = f.Z.Messages.STOREFRONT_TITLE.format({ appName: I.name });
        return (0, l.jsxs)(o.ModalRoot, {
          transitionState: t,
          "aria-label": E,
          size: o.ModalSize.DYNAMIC,
          className: S.modal,
          children: [
            (0, l.jsxs)(o.ModalHeader, {
              className: S.modalHeader,
              children: [
                (0, l.jsxs)("div", {
                  className: S.modalTitle,
                  children: [
                    (0, l.jsx)(u.Z, {}),
                    (0, l.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      children: E,
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: S.modalHeaderLinks,
                  children: [
                    p.wS &&
                      (0, l.jsx)(o.Button, {
                        look: o.ButtonLooks.BLANK,
                        size: o.ButtonSizes.ICON,
                        color: o.ButtonColors.TRANSPARENT,
                        "aria-label": f.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              x.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                a,
                                g.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, p.JG)(e),
                            (0, o.showToast)(
                              (0, o.createToast)(
                                f.Z.Messages.COPIED_LINK,
                                o.ToastType.SUCCESS,
                              ),
                            ),
                            (0, m.X)(a, m.B.STORE_MODAL);
                        },
                        children: (0, l.jsx)(o.LinkIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "var(--white)",
                        }),
                      }),
                    (0, l.jsx)(o.ModalCloseButton, {
                      onClick: n,
                      className: S.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(o.ModalContent, {
              scrollerRef: (e) => {
                null != e && ((R.current = e), b());
              },
              onScroll: b,
              children: (0, l.jsx)(h.AF, {
                app: I,
                guildId: i,
                subscriptions: O,
                otps: k,
              }),
            }),
            (0, l.jsx)("div", {
              className: S.containerScrollGradient,
              "data-shown": j,
            }),
          ],
        });
      }
      ((i = a || (a = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR");
    },
    905322: function (e, n, t) {
      t.d(n, {
        j: function () {
          return r;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(777207),
        s = t(529079);
      function r(e) {
        let {
            title: n,
            subtitle: t,
            iconSrc: r,
            backgroundSrc: o,
            animatedBackgroundSrc: d,
            prefersReducedMotion: c = !0,
          } = e,
          u = i.useMemo(() => {
            let e = null != o ? o : r;
            if (null != e)
              return {
                "--custom-background-url": "url(".concat(e.toString(), ")"),
              };
          }, [o, r]),
          p = i.useMemo(() => {
            if (null == o) return;
            let e = {
              "--custom-background-static": "url(".concat(o.toString()),
            };
            return (
              !c &&
                null != d &&
                (e["--custom-background-animated"] = "url(".concat(
                  d.toString(),
                  ")",
                )),
              e
            );
          }, [d, o, c]);
        return (0, a.jsxs)("div", {
          className: s.wrapper,
          children: [
            (0, a.jsx)("div", { className: s.background, style: u }),
            (0, a.jsxs)("div", {
              className: s.content,
              children: [
                null != r &&
                  (0, a.jsx)("div", {
                    className: s.icon,
                    children: (0, a.jsx)("img", { src: r.toString(), alt: "" }),
                  }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(l.x, {
                      variant: "heading-xl/bold",
                      tag: "div",
                      children: n,
                    }),
                    null != t &&
                      (0, a.jsxs)(l.x, {
                        variant: "text-sm/normal",
                        children: ["“", t, "”"],
                      }),
                  ],
                }),
              ],
            }),
            null != o
              ? (0, a.jsx)("div", { className: s.image, style: p })
              : null,
          ],
        });
      }
    },
    200207: function (e, n, t) {
      t.d(n, {
        I: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(557533),
        l = t.n(i),
        s = t(789978),
        r = t(790472),
        o = t(777207),
        d = t(147333),
        c = t(103077);
      function u(e) {
        let {
          title: n,
          description: t,
          headerImage: i,
          onDetails: u,
          onPurchase: p,
          PurchaseButton: m,
          availabilityLabel: v,
        } = e;
        return (0, a.jsx)(s.tE, {
          children: (0, a.jsxs)("div", {
            className: l()(d.wrapper, c.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != u ? u() : null != p && p();
            },
            children: [
              (0, a.jsx)("div", {
                className: d.cardHeaderImg,
                style:
                  null != i
                    ? {
                        backgroundImage:
                          null != i ? "url(".concat(i.toString(), ")") : void 0,
                      }
                    : void 0,
                children:
                  null == i &&
                  (0, a.jsx)(r.P, {
                    color: "white",
                    size: "custom",
                    height: 80,
                    width: 80,
                  }),
              }),
              (0, a.jsxs)("div", {
                className: d.details,
                children: [
                  (0, a.jsx)(o.x, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: n,
                  }),
                  null != t &&
                    (0, a.jsx)(o.x, {
                      className: d.description,
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: t,
                    }),
                ],
              }),
              null != m &&
                (0, a.jsxs)("div", {
                  className: d.footer,
                  children: [
                    (0, a.jsx)(o.x, {
                      color: "interactive-normal",
                      variant: "text-sm/normal",
                      children: v,
                    }),
                    (0, a.jsx)(m, {
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
    335567: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    529079: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=2a8179787078cee02190.js.map
