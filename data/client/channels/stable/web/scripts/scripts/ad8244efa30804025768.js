"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81272"],
  {
    887706: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(399606),
        l = t(314897);
      function r() {
        return (0, i.e7)([l.default], () => l.default.isAuthenticated());
      }
    },
    601911: function (e, n, t) {
      t.d(n, {
        y: function () {
          return l;
        },
      });
      var i = t(591759);
      function l(e, n) {
        let t = e.getIconSource(n);
        if (null != t && "number" != typeof t) {
          let e;
          if (
            (Array.isArray(t) ? t.length > 0 && (e = t[0].uri) : (e = t.uri),
            null != e)
          ) {
            var l;
            return null !== (l = i.Z.toURLSafe(e)) && void 0 !== l ? l : void 0;
          }
        }
      }
    },
    504211: function (e, n, t) {
      t.d(n, {
        B: function () {
          return l;
        },
        X: function () {
          return o;
        },
      });
      var i,
        l,
        r = t(626135),
        s = t(981631);
      function o(e, n, t) {
        r.default.track(s.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: e,
          area: n,
          sku_id: t,
        });
      }
      ((i = l || (l = {})).STORE_MODAL = "store_modal"),
        (i.DETAILS_MODAL = "details_modal"),
        (i.STORE_EMBED = "store_embed"),
        (i.SKU_EMBED = "sku_embed");
    },
    110742: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(442837),
        l = t(580130);
      function r(e) {
        return (0, i.e7)(
          [l.Z],
          () => {
            let n = l.Z.getForSku(e);
            if (null == n) return !1;
            let t = 0;
            for (let e of n) {
              var i, r;
              let n =
                null !==
                  (r =
                    null === (i = e.endsAt) || void 0 === i
                      ? void 0
                      : i.getTime()) && void 0 !== r
                  ? r
                  : 1 / 0;
              n >= t && (t = n);
            }
            return t > new Date().getTime();
          },
          [e],
        );
      }
    },
    886253: function (e, n, t) {
      t.d(n, {
        A: function () {
          return v;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(442837),
        r = t(481060),
        s = t(264043),
        o = t(812206),
        a = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(981631),
        f = t(689938),
        p = t(213891),
        m = t(566809);
      function v(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: v,
            onClose: I,
            onHeaderTitleClick: S,
            children: g,
            footer: h,
          } = e,
          x = (0, l.e7)(
            [o.Z, s.Z],
            () => {
              var e;
              return null !== (e = o.Z.getApplication(n)) && void 0 !== e
                ? e
                : s.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == x) return null;
        let E = (0, u.y)(x, 25),
          { termsOfServiceUrl: _, privacyPolicyUrl: N } = x;
        return (0, i.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, i.jsxs)(r.ModalHeader, {
              className: p.modalHeader,
              children: [
                (0, i.jsxs)(r.Clickable, {
                  className: p.modalTitle,
                  onClick: S,
                  children: [
                    null != E &&
                      (0, i.jsx)("img", {
                        src: E.href,
                        alt: "",
                        className: m.appIcon,
                      }),
                    (0, i.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: x.name,
                    }),
                  ],
                }),
                (0, i.jsx)(r.ModalCloseButton, {
                  onClick: I,
                  className: p.modalCloseBtn,
                }),
              ],
            }),
            g,
            (0, i.jsxs)(r.ModalFooter, {
              className: m.footer,
              children: [
                null != _ && null != N
                  ? (0, i.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        f.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: _,
                          ppUrl: N,
                        }),
                    })
                  : (0, i.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: f.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, i.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    a.wS &&
                      (0, i.jsx)(r.Button, {
                        look: r.ButtonLooks.FILLED,
                        size: r.ButtonSizes.ICON,
                        color: r.ButtonColors.CUSTOM,
                        "aria-label": f.Z.Messages.COPY_LINK,
                        className: m.linkButton,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              d.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                                n,
                                t,
                              ),
                            );
                          (0, a.JG)(e),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                f.Z.Messages.COPIED_LINK,
                                r.ToastType.SUCCESS,
                              ),
                            ),
                            (0, c.X)(n, c.B.DETAILS_MODAL, t);
                        },
                        children: (0, i.jsx)(r.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    h,
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    147496: function (e, n, t) {
      t.r(n),
        t.d(n, {
          ItemDetailsModal: function () {
            return S;
          },
        });
      var i = t(735250);
      t(470079);
      var l = t(752843),
        r = t(442837),
        s = t(481060),
        o = t(55563),
        a = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        f = t(886253),
        p = t(680005),
        m = t(938337),
        v = t(981631),
        I = t(689938);
      function S(e) {
        var n, t, S, g;
        let {
            onClose: h,
            transitionState: x,
            skuId: E,
            appId: _,
            onHeaderTitleClick: N,
          } = e,
          T = (0, r.e7)([a.Z], () => a.Z.getForSKU(E), [E]),
          Z = (0, r.e7)([o.Z], () => o.Z.get(E), [E]),
          C = (0, d.M)(E);
        if (null == Z) return null;
        let A = null !== (t = Z.name) && void 0 !== t ? t : "",
          L =
            null !==
              (S =
                null == T
                  ? void 0
                  : null === (n = T.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== S
              ? S
              : void 0,
          b =
            (null == T ? void 0 : T.headerBackground) != null &&
            null !==
              (g = c.Z.toURLSafe((0, u._W)(_, T.headerBackground, 256))) &&
            void 0 !== g
              ? g
              : void 0,
          O = Z.type === v.epS.DURABLE && C,
          R =
            Z.type === v.epS.DURABLE
              ? O
                ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: j } = Z;
        return null == j
          ? null
          : (0, i.jsx)(f.A, {
              appId: _,
              skuId: Z.id,
              transitionState: x,
              onHeaderTitleClick: null != N ? N : h,
              onClose: h,
              footer: (0, i.jsx)(p.Y, { appId: _, sku: Z }),
              children: (0, i.jsx)(m.i, {
                appId: _,
                skuId: Z.id,
                title: A,
                description: L,
                imgSrc: b,
                tag: null != R ? (0, i.jsx)(l.V, { text: R }) : void 0,
                FallbackIcon: s.TicketIcon,
              }),
            });
      }
    },
    680005: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return x;
        },
        p: function () {
          return h;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(860911),
        r = t(481060),
        s = t(100527),
        o = t(906732),
        a = t(887706),
        u = t(87484),
        c = t(696906),
        d = t(703656),
        f = t(626135),
        p = t(937615),
        m = t(110742),
        v = t(981631),
        I = t(474936),
        S = t(689938),
        g = t(962083);
      function h(e) {
        let {
            appId: n,
            className: t,
            groupListingId: l,
            subscriptionType: r,
            guildId: s,
            onClick: o,
            onHasClicked: a,
            skuId: u,
            subscriptionPlan: d,
            icon: f,
          } = e,
          { openModal: h } = (0, c.Z)({
            guildId: s,
            groupListingId: l,
            showBenefitsFirst: !1,
            analyticsLocation: v.Sbl.APP_STOREFRONT,
            skuId: u,
          }),
          x = (0, m.M)(u);
        return "guild" !== r && ("user" !== r || x)
          ? (0, i.jsx)(_, {
              className: t,
              children:
                S.Z.Messages
                  .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL,
            })
          : (0, i.jsx)(E, {
              appId: n,
              skuId: u,
              onClick: (e) => {
                (null != o ? o : h)(e), null == a || a();
              },
              className: t,
              children: (0, i.jsxs)("div", {
                className: g.btnContent,
                children: [
                  f,
                  S.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                    rate: (0, p.og)(
                      (0, p.T4)(d.price, d.currency),
                      I.rV.MONTH,
                      1,
                    ),
                  }),
                ],
              }),
            });
      }
      function x(e) {
        let {
            appId: n,
            className: t,
            onClick: l,
            onHasClicked: r,
            sku: a,
            icon: c,
          } = e,
          { analyticsLocations: d } = (0, o.ZP)(s.Z.APP_STOREFRONT),
          f = () => {
            (0, u.Z)({ applicationId: n, skuId: a.id, analyticsLocations: d });
          },
          I = (0, m.M)(a.id),
          h = a.type === v.epS.DURABLE && I,
          { price: x } = a;
        return null == x
          ? null
          : h
            ? (0, i.jsx)(_, {
                className: t,
                children: S.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, i.jsx)(E, {
                appId: n,
                skuId: a.id,
                onClick: (e) => {
                  (null != l ? l : f)(e), null == r || r();
                },
                className: t,
                children: (0, i.jsxs)("div", {
                  className: g.btnContent,
                  children: [
                    c,
                    S.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, p.T4)(x.amount, x.currency),
                    }),
                  ],
                }),
              });
      }
      function E(e) {
        let { appId: n, skuId: t, onClick: s, ...o } = e,
          u = (0, a.Z)();
        return (0, i.jsx)(r.Button, {
          ...o,
          onClick: (e) => {
            if (
              (f.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: n,
                sku_id: t,
              }),
              !u)
            ) {
              e.preventDefault(), e.stopPropagation();
              let i = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                r = (0, l.U)(i, !1);
              (0, d.uL)(r);
              return;
            }
            null == s || s(e);
          },
        });
      }
      function _(e) {
        let { className: n, children: t } = e;
        return (0, i.jsx)(r.Button, {
          disabled: !0,
          className: n,
          look: r.Button.Looks.OUTLINED,
          color: r.Button.Colors.PRIMARY,
          size: r.Button.Sizes.SMALL,
          children: t,
        });
      }
    },
    519896: function (e, n, t) {
      t.r(n),
        t.d(n, {
          SubscriptionDetailsModal: function () {
            return I;
          },
        });
      var i = t(735250),
        l = t(470079),
        r = t(269210),
        s = t(752843),
        o = t(481060),
        a = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(73346),
        f = t(591759),
        p = t(886253),
        m = t(680005),
        v = t(938337);
      function I(e) {
        var n;
        let {
            appId: t,
            groupListingId: I,
            subscriptionType: S,
            guildId: g,
            onClose: h,
            skuId: x,
            transitionState: E,
            onHeaderTitleClick: _,
          } = e,
          { data: N } = (0, u.H)(x),
          { data: T } = (0, a.Z)(x),
          Z = l.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null &&
              null !== (e = f.Z.toURLSafe((0, d._W)(t, T.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, null == T ? void 0 : T.thumbnail]),
          C = l.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(t, e.icon),
              }));
          }, [t, null == T ? void 0 : T.benefits]);
        return null == T || null == N || 0 === N.length
          ? null
          : (0, i.jsx)(p.A, {
              appId: t,
              skuId: x,
              transitionState: E,
              onHeaderTitleClick: null != _ ? _ : h,
              onClose: h,
              footer: (0, i.jsx)(m.p, {
                appId: t,
                groupListingId: I,
                subscriptionType: S,
                guildId: g,
                skuId: x,
                subscriptionPlan: N[0],
              }),
              children: (0, i.jsx)(v.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != C
                    ? C.map((e) =>
                        (0, i.jsx)(
                          r.G,
                          {
                            name: e.title,
                            icon: e.icon,
                            description: e.description,
                          },
                          e.id,
                        ),
                      )
                    : void 0,
                description:
                  null !== (n = T.description) && void 0 !== n ? n : void 0,
                imgSrc: Z,
                title: N[0].name,
                tag: (0, i.jsx)(s.Z, { type: S }),
                FallbackIcon: o.BadgeIcon,
              }),
            });
      }
    },
    938337: function (e, n, t) {
      t.d(n, {
        i: function () {
          return u;
        },
      });
      var i = t(735250),
        l = t(470079),
        r = t(512100),
        s = t(906732),
        o = t(626135),
        a = t(981631);
      function u(e) {
        let { appId: n, skuId: t, ...u } = e,
          { analyticsLocations: c } = (0, s.ZP)();
        return (
          l.useEffect(() => {
            o.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: c,
            });
          }, [c, n, t]),
          (0, i.jsx)(r.u, { ...u })
        );
      }
    },
    724870: function (e, n, t) {
      t.d(n, {
        h: function () {
          return p;
        },
        m: function () {
          return v;
        },
      }),
        t(789020);
      var i = t(735250);
      t(470079);
      var l = t(512722),
        r = t.n(l),
        s = t(481060),
        o = t(496929),
        a = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        f = t(981631);
      function p(e) {
        let {
          initialPlanId: n,
          activeSubscription: l,
          analyticsObject: r,
          analyticsLocation: o,
          analyticsLocations: a,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: p,
          skuId: m,
          guildId: v,
          reviewWarningMessage: I,
          applicationId: S,
          showBenefitsFirst: g,
          eligibleApplicationSubscriptionGuilds: h,
          onComplete: x,
          forcesTransitionToGuild: E,
        } = e;
        (0, s.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              s = (
                await Promise.all([
                  t.e("52249"),
                  t.e("47006"),
                  t.e("32776"),
                  t.e("42400"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: f } = await Promise.all([
                t.e("96427"),
                t.e("77298"),
                t.e("23357"),
                t.e("54803"),
                t.e("15685"),
                t.e("79915"),
                t.e("30671"),
                t.e("86751"),
              ]).then(t.bind(t, 759386)),
              _ = f({
                guildId: v,
                showBenefitsFirst: g,
                eligibleApplicationSubscriptionGuilds: h,
              });
            return (t) =>
              (0, i.jsx)(e, {
                applicationId: S,
                activeSubscription: l,
                stepConfigs: _,
                skuIDs: [m],
                children: (0, i.jsx)(d.KB, {
                  children: (0, i.jsx)(s, {
                    ...t,
                    initialPlanId: n,
                    skuId: m,
                    analyticsLocations: a,
                    analyticsObject: r,
                    analyticsLocation: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: p,
                    reviewWarningMessage: I,
                    applicationId: S,
                    guildId: null != v ? v : void 0,
                    onComplete: x,
                    forcesTransitionToGuild: E,
                  }),
                }),
              });
          },
          { onCloseRequest: f.dG4 },
        );
      }
      let m = async (e, n) => {
        let t = (await (0, o.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        r()(null == t, "User already has an active subscription to this SKU");
      };
      async function v(e) {
        var n;
        let {
            applicationId: t,
            skuId: i,
            initialPlanId: l,
            analyticsLocationObject: s,
            analyticsLocations: o,
            renderHeader: d,
          } = e,
          v = c.Z.get(i),
          I = u.Z.getForSKU(i);
        r()(null != v, "Failed to find SKU");
        let S = (0, a.KW)(v.flags);
        r()(S, "Guild application subscriptions unsupported!"),
          await m(t, i),
          p({
            initialPlanId:
              null != l
                ? l
                : null === (n = I[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: s,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: i,
            guildId: null,
            eligibleApplicationSubscriptionGuilds: [],
            showBenefitsFirst: !1,
            applicationId: t,
          });
      }
    },
    87484: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(772848),
        r = t(481060),
        s = t(976255),
        o = t(667),
        a = t(626135),
        u = t(981631);
      function c(e) {
        let {
            applicationId: n,
            skuId: c,
            onClose: d,
            onComplete: f,
            analyticsLocations: p,
            analyticsLocationObject: m,
            contextKey: v,
          } = e,
          I = !1,
          S = (0, l.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              t.e("96427"),
              t.e("77298"),
              t.e("23357"),
              t.e("52249"),
              t.e("54803"),
              t.e("15685"),
              t.e("47006"),
              t.e("32776"),
              t.e("79915"),
              t.e("30671"),
              t.e("49288"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: l, ...r } = t;
              return (0, i.jsx)(e, {
                ...r,
                loadId: S,
                applicationId: n,
                skuId: c,
                analyticsLocations: p,
                analyticsLocationObject: m,
                onClose: (e) => {
                  l(), null == d || d(e);
                },
                onComplete: (e) => {
                  (I = !0), null == f || f(e);
                },
              });
            };
          },
          {
            contextKey: v,
            onCloseCallback: () => {
              !I &&
                a.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: S,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: m,
                  is_gift: !1,
                  application_id: n,
                  location_stack: p,
                }),
                (0, s.fw)(),
                (0, o.p)(),
                null == d || d(I);
            },
            onCloseRequest: u.dG4,
          },
        );
      }
    },
    801249: function (e, n, t) {
      let i;
      var l,
        r = t(442837),
        s = t(570140);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let a = { lastGuildDismissedTime: {} };
      class u extends (l = r.ZP.DeviceSettingsStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
          i = e;
        }
        getUserAgnosticState() {
          return i;
        }
        getLastGuildDismissedTime(e) {
          return i.lastGuildDismissedTime[e];
        }
      }
      o(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        o(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (n.Z = new u(s.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            i.lastGuildDismissedTime[n] = Date.now();
          },
        }));
    },
    270144: function (e, n, t) {
      t.d(n, {
        CR: function () {
          return O;
        },
        F5: function () {
          return C;
        },
        FE: function () {
          return E;
        },
        _k: function () {
          return N;
        },
        h6: function () {
          return A;
        },
        jd: function () {
          return i;
        },
        qz: function () {
          return b;
        },
        sp: function () {
          return L;
        },
      }),
        t(653041),
        t(47120);
      var i,
        l,
        r = t(470079),
        s = t(442837),
        o = t(496929),
        a = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        f = t(580130),
        p = t(55563),
        m = t(801249),
        v = t(106976),
        I = t(307643),
        S = t(488915),
        g = t(171246),
        h = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((l = i || (i = {}))[(l.NOT_LOADED = 0)] = "NOT_LOADED"),
        (l[(l.LOADING = 1)] = "LOADING"),
        (l[(l.LOADED = 2)] = "LOADED"),
        (l[(l.ERROR = 3)] = "ERROR");
      let E = function (e, n) {
          let { refetchOnMount: t = !1 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = (0, s.e7)(
              [S.Z],
              () =>
                null != e
                  ? S.Z.getSubscriptionGroupListingsForApplicationFetchState(e)
                  : S.M.FETCHED,
              [e],
            );
          return (
            r.useEffect(() => {
              if (null == e || null == n) return;
              let i =
                S.Z.getSubscriptionGroupListingsForApplicationFetchState(e);
              (t || i === S.M.NOT_FETCHED) && (0, v.rx)(e, n);
            }, [e, n, t]),
            { listingsLoaded: i === S.M.FETCHED }
          );
        },
        _ = (e) => {
          let { guildId: n, canFetch: t = !0, forceRefetch: i = !1 } = e,
            l = (0, s.e7)(
              [S.Z],
              () =>
                null != n ? S.Z.getEntitlementsForGuildFetchState(n) : null,
              [n],
            );
          return (
            r.useEffect(() => {
              if (null == n || n === h.ME) return;
              let e = S.Z.getEntitlementsForGuildFetchState(n);
              t && (e === S.M.NOT_FETCHED || i) && (0, v.i1)(n);
            }, [n, t, i]),
            { entitlementsLoaded: l === S.M.FETCHED }
          );
        },
        N = function (e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { includeSoftDeleted: !1 };
          return (0, s.Wu)(
            [S.Z],
            () => {
              if (null == e) return [];
              let t = S.Z.getSubscriptionGroupListing(e);
              if (null == t) return [];
              let i = [];
              for (let e of t.subscription_listings_ids) {
                let t = S.Z.getSubscriptionListing(e);
                if (null != t)
                  (!t.soft_deleted || n.includeSoftDeleted) && i.push(t);
              }
              return i;
            },
            [e, n.includeSoftDeleted],
          );
        },
        T = [],
        Z = [];
      function C(e, n) {
        let t = (0, s.e7)([d.ZP], () => d.ZP.getSubscriptions()),
          {
            subscriptionGroupListing: i,
            guildEntitlements: l,
            userEntitlements: o,
          } = (0, s.cj)(
            [S.Z, f.Z],
            () => {
              var t, i;
              return {
                subscriptionGroupListing:
                  null != e
                    ? S.Z.getSubscriptionGroupListingForApplication(e)
                    : null,
                guildEntitlements:
                  null != e && null != n
                    ? S.Z.getApplicationEntitlementsForGuild(e, n)
                    : T,
                userEntitlements:
                  null != e &&
                  null !==
                    (i =
                      null === (t = f.Z.getForApplication(e)) || void 0 === t
                        ? void 0
                        : t.values()) &&
                  void 0 !== i
                    ? i
                    : Z,
              };
            },
            [e, n],
          ),
          a = r.useMemo(() => [...l, ...o], [l, o]),
          u = null == i ? void 0 : i.subscription_listings,
          { activeSubscriptionListing: c, activeEntitlement: p } =
            r.useMemo(() => {
              if (null != u) {
                for (let e of a)
                  for (let t of u)
                    if ((0, g.AQ)(t, e, n))
                      return {
                        activeSubscriptionListing: t,
                        activeEntitlement: e,
                      };
              }
              return {
                activeSubscriptionListing: null,
                activeEntitlement: null,
              };
            }, [a, u, n]);
        return {
          activeSubscription: r.useMemo(() => {
            if (null == t) return null;
            let e = null == c ? void 0 : c.subscription_plans[0].id;
            for (let n of Object.values(t))
              if (n.type === h.NYc.APPLICATION && n.items[0].planId === e)
                return n;
            return null;
          }, [c, t]),
          activeSubscriptionListing: c,
          activeEntitlement: p,
          subscriptionGroupListing: i,
        };
      }
      function A(e) {
        var n;
        let t =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : h.lds,
          { entitlementsLoaded: i } = _({
            guildId: t,
            canFetch: (0, s.e7)([u.Z], () => u.Z.can(h.Plq.ADMINISTRATOR, e)),
          }),
          l = (0, s.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
          o = (0, s.Wu)([S.Z], () => {
            let e = S.Z.getEntitlementsForGuild(t),
              n = S.Z.getEntitlementsForGuild(t, !1),
              i = e.map((e) => e.applicationId);
            return n.filter((e) => !i.includes(e.applicationId));
          }),
          a = (0, s.cj)([p.Z], () => p.Z.getSKUs()),
          c = r.useMemo(
            () =>
              o.filter((e) => {
                let n = a[e.skuId];
                return null != n && n.available;
              }),
            [o, a],
          );
        return i
          ? c.filter(
              (e) =>
                null != e.endsAt &&
                e.endsAt.getTime() >
                  Math.max(null != l ? l : 0, Date.now() - x),
            )
          : [];
      }
      let L = (e) => {
          let [n, t] = r.useState(!1),
            i = r.useMemo(() => e.map(g.bZ), [e]),
            l = (0, s.Wu)([c.Z], () => i.filter((e) => null == c.Z.get(e)), [
              i,
            ]);
          return (
            r.useEffect(() => {
              l.length > 0 &&
                (t(!0),
                Promise.all(l.map((e) => (0, v.vY)(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  }));
            }, [l]),
            { loading: n }
          );
        },
        b = () => {
          let [e, n] = r.useState(0);
          return (
            r.useEffect(() => {
              n(1),
                (0, o.p0)({
                  withSku: !0,
                  withApplication: !0,
                  entitlementType: h.qc2.APPLICATION_SUBSCRIPTION,
                })
                  .catch(() => {
                    n(3);
                  })
                  .then(() => {
                    n(2);
                  });
            }, []),
            { loadState: e }
          );
        };
      function O(e, n) {
        let t = (0, s.e7)([a.Z], () => a.Z.isLoaded()),
          [i, l] = r.useState([]);
        return (
          r.useEffect(() => {
            null == n &&
              null != e &&
              t &&
              (0, I.tn)(e).then((e) => {
                l(e.map((e) => a.Z.getGuild(e)).filter((e) => null != e));
              });
          }, [e, n, t]),
          i
        );
      }
    },
    171246: function (e, n, t) {
      t.d(n, {
        AQ: function () {
          return d;
        },
        Jf: function () {
          return p;
        },
        KK: function () {
          return u;
        },
        KW: function () {
          return c;
        },
        OL: function () {
          return f;
        },
        Pw: function () {
          return a;
        },
        bZ: function () {
          return o;
        },
      });
      var i = t(512722),
        l = t.n(i),
        r = t(630388),
        s = t(981631);
      function o(e) {
        let n = e.items;
        return (
          l()(
            1 === n.length,
            "more than 1 subscription item for application subscription",
          ),
          n[0].planId
        );
      }
      function a(e) {
        var n;
        return null === (n = e.subscription_listings) || void 0 === n
          ? void 0
          : n.find(
              (e) =>
                e.published &&
                (u(e.sku_flags) || c(e.sku_flags)) &&
                e.subscription_plans[0].price > 0,
            );
      }
      function u(e) {
        return (0, r.yE)(e, s.l4R.APPLICATION_GUILD_SUBSCRIPTION);
      }
      function c(e) {
        return (0, r.yE)(e, s.l4R.APPLICATION_USER_SUBSCRIPTION);
      }
      function d(e, n, t) {
        return (
          e.subscription_plans[0].sku_id === n.skuId &&
          (u(e.sku_flags)
            ? null != t && n.guildId === t && t !== s.ME
            : !!c(e.sku_flags) && null == n.guildId)
        );
      }
      function f(e) {
        return !1 === e.available;
      }
      function p(e, n) {
        var t;
        let i =
            null !== (t = null == n ? void 0 : n.deleted) && void 0 !== t && t,
          l = null != n && f(n);
        return e.status === s.O0b.CANCELED || i || l;
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(442837),
        l = t(558381),
        r = t(551428);
      let s = (0, i.Kb)(r.Z, {
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, l.km)(n) : Promise.resolve()),
        getIsLoading: (e) => null != e && r.Z.isFetchingForSKU(e),
        useStateHook: i.e7,
      });
    },
    930155: function (e, n, t) {
      t.d(n, {
        H: function () {
          return a;
        },
      });
      var i = t(470079),
        l = t(442837),
        r = t(821849),
        s = t(509545);
      let o = (0, l.Kb)(s.Z, {
        get: (e) => (null != e ? s.Z.getForSKU(e) : []),
        load: (e, n) => (null != n ? (0, r.GZ)(n) : Promise.resolve()),
        getIsLoading: (e) => null != e && s.Z.isFetchingForSKU(e),
        useStateHook: l.Wu,
      });
      function a(e) {
        let n = o(e);
        return (
          i.useEffect(() => {
            if (null != e) (0, r.GZ)(e);
          }, [e]),
          n
        );
      }
    },
    714441: function (e, n, t) {
      t.d(n, {
        i: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(481060);
      function r(e) {
        let { applicationName: n, onConfirm: r, onCancel: s } = e;
        return (0, l.openModalLazy)(
          async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t
              .e("99809")
              .then(t.bind(t, 525549));
            return (t) =>
              (0, i.jsx)(e, {
                ...t,
                applicationName: n,
                onConfirm: r,
                onCancel: s,
              });
          },
          { modalKey: "application-user-subscribe-no-shared-server-warning" },
        );
      }
    },
    696906: function (e, n, t) {
      t(789020);
      var i = t(735250),
        l = t(470079),
        r = t(512722),
        s = t.n(r),
        o = t(442837),
        a = t(570140),
        u = t(821849),
        c = t(906732),
        d = t(887706),
        f = t(728345),
        p = t(724870),
        m = t(594174),
        v = t(509545),
        I = t(55563),
        S = t(551428),
        g = t(630388),
        h = t(270144),
        x = t(171246),
        E = t(689011),
        _ = t(714441),
        N = t(981631),
        T = t(689938);
      n.Z = (e) => {
        var n;
        let t,
          {
            guildId: r,
            groupListingId: Z,
            analyticsLocation: C,
            showBenefitsFirst: A,
            skuId: L,
            onComplete: b,
            forcesTransitionToGuild: O,
          } = e,
          R = (0, o.e7)([I.Z], () => (null != L ? I.Z.get(L) : void 0), [L]),
          j = (0, o.e7)([S.Z], () => (null != L ? S.Z.getForSKU(L) : void 0), [
            L,
          ]),
          P = (0, o.Wu)([v.Z], () => (null != L ? v.Z.getForSKU(L) : []), [L]),
          M = null != P ? P[0] : void 0,
          D = null == R ? void 0 : R.applicationId,
          k =
            (null == j ? void 0 : j.published) === !0 &&
            null != R &&
            (0, g.yE)(R.flags, N.l4R.AVAILABLE),
          F = null == M ? void 0 : M.skuId,
          { data: y } = (0, f.I)(D),
          U = (0, h._k)(Z, { includeSoftDeleted: !0 }).map(
            (e) => e.subscription_plans[0].id,
          ),
          { analyticsLocations: B } = (0, c.ZP)(),
          { activeSubscription: G, activeEntitlement: w } = (0, h.F5)(D, r),
          K = (0, h.CR)(D, r),
          H = (0, d.Z)(),
          Y = null != R && (0, x.KW)(R.flags),
          z =
            null != w &&
            w.userId ===
              (null === (n = m.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id),
          W = null == w || z,
          V = null == w || U.length > 1,
          q = null != r || K.length > 0,
          Q = Y && z,
          X = null != M && null != y && W && V && (q || Y) && !Q;
        return (
          W
            ? q
              ? Q &&
                null != M &&
                (t =
                  T.Z.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format(
                    { tierName: M.name },
                  ))
              : (t = T.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE)
            : (t =
                T.Z.Messages
                  .APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION),
          l.useEffect(() => {
            k &&
              null != F &&
              H &&
              !(v.Z.isFetchingForSKU(F) || v.Z.isLoadedForSKU(F)) &&
              a.Z.wait(() => {
                (0, u.GZ)(F);
              });
          }, [k, F, H]),
          {
            openModal: l.useCallback(() => {
              s()(null != y, "No application"),
                s()(null != M, "No subscription plan"),
                s()(k, "Cannot purchase this unpublished plan");
              let e = () => {
                (0, p.h)({
                  activeSubscription: G,
                  analyticsSubscriptionType: N.NYc.APPLICATION,
                  analyticsLocations: B,
                  analyticsLocation: C,
                  renderHeader: (e, n, t) =>
                    (0, i.jsx)(E.t, { step: t, onClose: () => n(!1) }),
                  initialPlanId: M.id,
                  skuId: M.skuId,
                  guildId: r,
                  eligibleApplicationSubscriptionGuilds: K,
                  planGroup: U,
                  applicationId: y.id,
                  showBenefitsFirst: A,
                  onComplete: b,
                  forcesTransitionToGuild: O,
                });
              };
              !q && Y
                ? (0, _.i)({
                    applicationName: y.name,
                    onConfirm: e,
                    onCancel: () => {},
                  })
                : e();
            }, [k, M, U, y, r, q, Y, B, C, G, A, K, b, O]),
            canOpenModal: X,
            cannotOpenReason: t,
          }
        );
      };
    },
    541822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(735250),
        l = t(470079),
        r = t(557533),
        s = t.n(r),
        o = t(349361),
        a = t(698117);
      function u(e) {
        let { children: n, gradientClassName: t, ...r } = e,
          u = l.useRef(null),
          [c, d] = l.useState(!0),
          f = () => {
            var e;
            (null === (e = u.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? d(!1)
              : d(!0);
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o.h2, {
              ...r,
              fade: !0,
              ref: (e) => {
                null != e && ((u.current = e), f());
              },
              onScroll: f,
              children: n,
            }),
            (0, i.jsx)("div", {
              className: s()(a.containerScrollGradient, t),
              "data-shown": c,
            }),
          ],
        });
      }
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return a;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(777207),
        r = t(541822),
        s = t(330711),
        o = t(770561);
      function a(e) {
        let {
            benefits: n,
            description: t,
            imgSrc: a,
            title: u,
            tag: c,
            FallbackIcon: d,
          } = e,
          f =
            null != a
              ? { "--custom-background-url": "url(".concat(a.toString(), ")") }
              : void 0,
          p = null != t && "" !== t,
          m = p || null != n;
        return (0, i.jsxs)("div", {
          className: o.container,
          children: [
            (0, i.jsxs)("div", {
              className: o.header,
              children: [
                (0, i.jsx)("div", { className: o.headerBackground, style: f }),
                (0, i.jsx)("div", {
                  className: o.headerTop,
                  children: (0, i.jsx)("div", { children: c }),
                }),
                (0, i.jsx)("div", {
                  className: o.headerImage,
                  children:
                    null != a
                      ? (0, i.jsx)("img", { src: a.toString(), alt: "" })
                      : (0, i.jsx)(d, {
                          size: "custom",
                          color: "var(--text-muted)",
                          height: 96,
                          width: 96,
                        }),
                }),
              ],
            }),
            (0, i.jsxs)(r.Z, {
              className: o.scroll,
              children: [
                (0, i.jsx)("br", {}),
                (0, i.jsxs)("div", {
                  className: o.scrollContent,
                  children: [
                    (0, i.jsx)(l.x, {
                      color: "header-primary",
                      tag: "div",
                      variant: "heading-xl/semibold",
                      children: u,
                    }),
                    m &&
                      (0, i.jsxs)("div", {
                        className: o.details,
                        children: [
                          (0, i.jsx)(l.x, {
                            color: "header-primary",
                            tag: "div",
                            variant: "heading-lg/semibold",
                            children: s.Z.Messages.Storefront.PRODUCT_DETAILS,
                          }),
                          p &&
                            (0, i.jsx)(l.x, {
                              color: "text-muted",
                              variant: "text-md/normal",
                              className: o.description,
                              children: t,
                            }),
                          null != n &&
                            (0, i.jsxs)("div", {
                              className: o.benefits,
                              children: [
                                (0, i.jsx)(l.x, {
                                  color: "header-secondary",
                                  variant: "eyebrow",
                                  children:
                                    s.Z.Messages.Storefront.BENEFITS_TITLE,
                                }),
                                n,
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    269210: function (e, n, t) {
      t.d(n, {
        G: function () {
          return m;
        },
        U: function () {
          return p;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(557533),
        r = t.n(l),
        s = t(789978),
        o = t(368072),
        a = t(777207),
        u = t(752843),
        c = t(330711),
        d = t(56273),
        f = t(103077);
      function p(e) {
        let {
          description: n,
          imgSrc: t,
          renderPurchaseButton: l,
          onPurchase: p,
          subscriptionType: m,
          title: v,
          onDetails: I,
          benefitItems: S,
          benefitsSummary: g,
        } = e;
        return (0, i.jsx)(s.tE, {
          children: (0, i.jsxs)("div", {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != I ? I() : null != p && p();
            },
            children: [
              (0, i.jsxs)("div", {
                className: d.card,
                children: [
                  null != m && (0, i.jsx)(u.Z, { type: m }),
                  (0, i.jsxs)("div", {
                    className: d.body,
                    children: [
                      (0, i.jsx)(a.x, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: v,
                      }),
                      (0, i.jsx)("div", {
                        className: d.image,
                        children:
                          null != t
                            ? (0, i.jsx)("img", { src: t.toString(), alt: "" })
                            : (0, i.jsx)(o.V, {
                                color: "white",
                                size: "custom",
                                height: 48,
                                width: 48,
                              }),
                      }),
                      null != l
                        ? l({
                            className: d.purchaseBtn,
                            onClick: (e) => {
                              e.stopPropagation(), null == p || p();
                            },
                          })
                        : null,
                      null != n &&
                        "" !== n &&
                        (0, i.jsx)(a.x, {
                          className: d.description,
                          color: "text-normal",
                          variant: "text-sm/medium",
                          children: n,
                        }),
                    ],
                  }),
                ],
              }),
              null != g &&
                (0, i.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, i.jsx)(a.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.Storefront.BENEFITS_SUMMARY.format({
                      count: g,
                    }),
                  }),
                }),
              null != S &&
                (0, i.jsx)("div", {
                  className: d.benefits,
                  children: (0, i.jsx)("div", {
                    className: d.benefitsContainer,
                    children: (0, i.jsxs)("div", {
                      className: d.benefitsList,
                      children: [
                        (0, i.jsx)(a.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        S.length > 3
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                S.slice(0, 3),
                                (0, i.jsx)(a.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.Storefront.MORE_BENEFITS.format(
                                      { count: S.length - 3 },
                                    ),
                                }),
                              ],
                            })
                          : S,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function m(e) {
        let { icon: n, name: t, description: l } = e;
        return (0, i.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, i.jsx)("div", { className: d.cardBenefitIcon, children: n }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(a.x, { variant: "text-md/semibold", children: t }),
                null != l &&
                  (0, i.jsx)(a.x, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: l,
                  }),
              ],
            }),
          ],
        });
      }
    },
    752843: function (e, n, t) {
      t.d(n, {
        V: function () {
          return c;
        },
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(628028),
        r = t(220427),
        s = t(777207),
        o = t(330711),
        a = t(350727);
      function u(e) {
        let { type: n } = e;
        return (0, i.jsx)(c, {
          icon:
            "user" === n
              ? (0, i.jsx)(r.t, { size: "xxs", color: "var(--text-positive)" })
              : (0, i.jsx)(l.Q, { size: "xxs", color: "var(--text-brand)" }),
          text:
            "user" === n
              ? o.Z.Messages.Storefront.USER_SUBSCRIPTION
              : o.Z.Messages.Storefront.SERVER_SUBSCRIPTION,
        });
      }
      function c(e) {
        let { icon: n, text: t } = e;
        return (0, i.jsxs)("div", {
          className: a.container,
          children: [
            n,
            (0, i.jsx)(s.x, {
              color: "header-secondary",
              variant: "text-sm/medium",
              children: t,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=ad8244efa30804025768.js.map
