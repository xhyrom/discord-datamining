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
      var l = t(399606),
        i = t(314897);
      function r() {
        return (0, l.e7)([i.default], () => i.default.isAuthenticated());
      }
    },
    601911: function (e, n, t) {
      t.d(n, {
        y: function () {
          return i;
        },
      });
      var l = t(591759);
      function i(e, n) {
        let t = e.getIconSource(n);
        if (null != t && "number" != typeof t) {
          let e;
          if (
            (Array.isArray(t) ? t.length > 0 && (e = t[0].uri) : (e = t.uri),
            null != e)
          ) {
            var i;
            return null !== (i = l.Z.toURLSafe(e)) && void 0 !== i ? i : void 0;
          }
        }
      }
    },
    504211: function (e, n, t) {
      t.d(n, {
        B: function () {
          return i;
        },
        X: function () {
          return o;
        },
      });
      var l,
        i,
        r = t(626135),
        s = t(981631);
      function o(e, n, t) {
        r.default.track(s.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: e,
          area: n,
          sku_id: t,
        });
      }
      ((l = i || (i = {})).STORE_MODAL = "store_modal"),
        (l.DETAILS_MODAL = "details_modal"),
        (l.STORE_EMBED = "store_embed"),
        (l.SKU_EMBED = "sku_embed");
    },
    110742: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      }),
        t(47120);
      var l = t(442837),
        i = t(580130);
      function r(e) {
        return (0, l.e7)(
          [i.Z],
          () => {
            let n = i.Z.getForSku(e);
            if (null == n) return !1;
            let t = 0;
            for (let e of n) {
              var l, r;
              let n =
                null !==
                  (r =
                    null === (l = e.endsAt) || void 0 === l
                      ? void 0
                      : l.getTime()) && void 0 !== r
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
      var l = t(735250);
      t(470079);
      var i = t(442837),
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
            children: h,
            footer: g,
          } = e,
          x = (0, i.e7)(
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
        let _ = (0, u.y)(x, 25),
          { termsOfServiceUrl: N, privacyPolicyUrl: E } = x;
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: v,
          size: r.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              className: p.modalHeader,
              children: [
                (0, l.jsxs)(r.Clickable, {
                  className: p.modalTitle,
                  onClick: S,
                  children: [
                    null != _ &&
                      (0, l.jsx)("img", {
                        src: _.href,
                        alt: "",
                        className: m.appIcon,
                      }),
                    (0, l.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: x.name,
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: I,
                  className: p.modalCloseBtn,
                }),
              ],
            }),
            h,
            (0, l.jsxs)(r.ModalFooter, {
              className: m.footer,
              children: [
                null != N && null != E
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        f.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: N,
                          ppUrl: E,
                        }),
                    })
                  : (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: f.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    a.wS &&
                      (0, l.jsx)(r.Button, {
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
                        children: (0, l.jsx)(r.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    g,
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
      var l = t(735250);
      t(470079);
      var i = t(752843),
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
        var n, t, S, h;
        let {
            onClose: g,
            transitionState: x,
            skuId: _,
            appId: N,
            onHeaderTitleClick: E,
          } = e,
          T = (0, r.e7)([a.Z], () => a.Z.getForSKU(_), [_]),
          Z = (0, r.e7)([o.Z], () => o.Z.get(_), [_]),
          C = (0, d.M)(_);
        if (null == Z) return null;
        let A = null !== (t = Z.name) && void 0 !== t ? t : "",
          O =
            null !==
              (S =
                null == T
                  ? void 0
                  : null === (n = T.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== S
              ? S
              : void 0,
          L =
            (null == T ? void 0 : T.headerBackground) != null &&
            null !==
              (h = c.Z.toURLSafe((0, u._W)(N, T.headerBackground, 256))) &&
            void 0 !== h
              ? h
              : void 0,
          R = Z.type === v.epS.DURABLE && C,
          b =
            Z.type === v.epS.DURABLE
              ? R
                ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: j } = Z;
        return null == j
          ? null
          : (0, l.jsx)(f.A, {
              appId: N,
              skuId: Z.id,
              transitionState: x,
              onHeaderTitleClick: null != E ? E : g,
              onClose: g,
              footer: (0, l.jsx)(p.Y, { appId: N, sku: Z }),
              children: (0, l.jsx)(m.i, {
                appId: N,
                skuId: Z.id,
                title: A,
                description: O,
                imgSrc: L,
                tag: null != b ? (0, l.jsx)(i.V, { text: b }) : void 0,
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
          return g;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(860911),
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
        h = t(962083);
      function g(e) {
        let {
            appId: n,
            className: t,
            groupListingId: i,
            subscriptionType: r,
            guildId: s,
            onClick: o,
            onHasClicked: a,
            skuId: u,
            subscriptionPlan: d,
            icon: f,
          } = e,
          { openModal: g } = (0, c.Z)({
            guildId: s,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: v.Sbl.APP_STOREFRONT,
            skuId: u,
          }),
          x = (0, m.M)(u);
        return "guild" !== r && ("user" !== r || x)
          ? (0, l.jsx)(N, {
              className: t,
              children:
                S.Z.Messages
                  .APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL,
            })
          : (0, l.jsx)(_, {
              appId: n,
              skuId: u,
              onClick: (e) => {
                (null != o ? o : g)(e), null == a || a();
              },
              className: t,
              children: (0, l.jsxs)("div", {
                className: h.btnContent,
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
            onClick: i,
            onHasClicked: r,
            sku: a,
            icon: c,
          } = e,
          { analyticsLocations: d } = (0, o.ZP)(s.Z.APP_STOREFRONT),
          f = () => {
            (0, u.Z)({ applicationId: n, skuId: a.id, analyticsLocations: d });
          },
          I = (0, m.M)(a.id),
          g = a.type === v.epS.DURABLE && I,
          { price: x } = a;
        return null == x
          ? null
          : g
            ? (0, l.jsx)(N, {
                className: t,
                children: S.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(_, {
                appId: n,
                skuId: a.id,
                onClick: (e) => {
                  (null != i ? i : f)(e), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: h.btnContent,
                  children: [
                    c,
                    S.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, p.T4)(x.amount, x.currency),
                    }),
                  ],
                }),
              });
      }
      function _(e) {
        let { appId: n, skuId: t, onClick: s, ...o } = e,
          u = (0, a.Z)();
        return (0, l.jsx)(r.Button, {
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
              let l = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                r = (0, i.U)(l, !1);
              (0, d.uL)(r);
              return;
            }
            null == s || s(e);
          },
        });
      }
      function N(e) {
        let { className: n, children: t } = e;
        return (0, l.jsx)(r.Button, {
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
      var l = t(735250),
        i = t(470079),
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
            guildId: h,
            onClose: g,
            skuId: x,
            transitionState: _,
            onHeaderTitleClick: N,
          } = e,
          { data: E } = (0, u.H)(x),
          { data: T } = (0, a.Z)(x),
          Z = i.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null &&
              null !== (e = f.Z.toURLSafe((0, d._W)(t, T.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, null == T ? void 0 : T.thumbnail]),
          C = i.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(t, e.icon),
              }));
          }, [t, null == T ? void 0 : T.benefits]);
        return null == T || null == E || 0 === E.length
          ? null
          : (0, l.jsx)(p.A, {
              appId: t,
              skuId: x,
              transitionState: _,
              onHeaderTitleClick: null != N ? N : g,
              onClose: g,
              footer: (0, l.jsx)(m.p, {
                appId: t,
                groupListingId: I,
                subscriptionType: S,
                guildId: h,
                skuId: x,
                subscriptionPlan: E[0],
              }),
              children: (0, l.jsx)(v.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != C
                    ? C.map((e) =>
                        (0, l.jsx)(
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
                title: E[0].name,
                tag: (0, l.jsx)(s.Z, { type: S }),
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
      var l = t(735250),
        i = t(470079),
        r = t(512100),
        s = t(906732),
        o = t(626135),
        a = t(981631);
      function u(e) {
        let { appId: n, skuId: t, ...u } = e,
          { analyticsLocations: c } = (0, s.ZP)();
        return (
          i.useEffect(() => {
            o.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: c,
            });
          }, [c, n, t]),
          (0, l.jsx)(r.u, { ...u })
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
      var l = t(735250);
      t(470079);
      var i = t(512722),
        r = t.n(i),
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
          activeSubscription: i,
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
          showBenefitsFirst: h,
          eligibleApplicationSubscriptionGuilds: g,
          onComplete: x,
          forcesTransitionToGuild: _,
        } = e;
        (0, s.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              s = (
                await Promise.all([
                  t.e("52249"),
                  t.e("72652"),
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
              N = f({
                guildId: v,
                showBenefitsFirst: h,
                eligibleApplicationSubscriptionGuilds: g,
              });
            return (t) =>
              (0, l.jsx)(e, {
                applicationId: S,
                activeSubscription: i,
                stepConfigs: N,
                skuIDs: [m],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(s, {
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
                    forcesTransitionToGuild: _,
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
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: s,
            analyticsLocations: o,
            renderHeader: d,
          } = e,
          v = c.Z.get(l),
          I = u.Z.getForSKU(l);
        r()(null != v, "Failed to find SKU");
        let S = (0, a.KW)(v.flags);
        r()(S, "Guild application subscriptions unsupported!"),
          await m(t, l),
          p({
            initialPlanId:
              null != i
                ? i
                : null === (n = I[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: s,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
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
      var l = t(735250);
      t(470079);
      var i = t(772848),
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
          S = (0, i.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              t.e("96427"),
              t.e("77298"),
              t.e("23357"),
              t.e("52249"),
              t.e("54803"),
              t.e("15685"),
              t.e("72652"),
              t.e("32776"),
              t.e("79915"),
              t.e("30671"),
              t.e("49288"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: i, ...r } = t;
              return (0, l.jsx)(e, {
                ...r,
                loadId: S,
                applicationId: n,
                skuId: c,
                analyticsLocations: p,
                analyticsLocationObject: m,
                onClose: (e) => {
                  i(), null == d || d(e);
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
      let l;
      var i,
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
      class u extends (i = r.ZP.DeviceSettingsStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
          l = e;
        }
        getUserAgnosticState() {
          return l;
        }
        getLastGuildDismissedTime(e) {
          return l.lastGuildDismissedTime[e];
        }
      }
      o(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        o(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (n.Z = new u(s.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
          },
        }));
    },
    270144: function (e, n, t) {
      t.d(n, {
        CR: function () {
          return L;
        },
        F5: function () {
          return Z;
        },
        _k: function () {
          return N;
        },
        h6: function () {
          return C;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return O;
        },
        sp: function () {
          return A;
        },
      }),
        t(653041),
        t(47120);
      var l,
        i,
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
        h = t(171246),
        g = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let _ = (e) => {
          let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
            i = (0, s.e7)(
              [S.Z],
              () =>
                null != n ? S.Z.getEntitlementsForGuildFetchState(n) : null,
              [n],
            );
          return (
            r.useEffect(() => {
              if (null == n || n === g.ME) return;
              let e = S.Z.getEntitlementsForGuildFetchState(n);
              t && (e === S.M.NOT_FETCHED || l) && (0, v.i1)(n);
            }, [n, t, l]),
            { entitlementsLoaded: i === S.M.FETCHED }
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
              let l = [];
              for (let e of t.subscription_listings_ids) {
                let t = S.Z.getSubscriptionListing(e);
                if (null != t)
                  (!t.soft_deleted || n.includeSoftDeleted) && l.push(t);
              }
              return l;
            },
            [e, n.includeSoftDeleted],
          );
        },
        E = [],
        T = [];
      function Z(e, n, t) {
        let l = (0, s.e7)([d.ZP], () => d.ZP.getSubscriptions()),
          {
            subscriptionGroupListing: i,
            guildEntitlements: o,
            userEntitlements: a,
          } = (0, s.cj)(
            [S.Z, f.Z],
            () => {
              var l, i;
              return {
                subscriptionGroupListing:
                  null != t ? S.Z.getSubscriptionGroupListing(t) : null,
                guildEntitlements:
                  null != e && null != n
                    ? S.Z.getApplicationEntitlementsForGuild(e, n)
                    : E,
                userEntitlements:
                  null != e &&
                  null !==
                    (i =
                      null === (l = f.Z.getForApplication(e)) || void 0 === l
                        ? void 0
                        : l.values()) &&
                  void 0 !== i
                    ? i
                    : T,
              };
            },
            [e, n, t],
          ),
          u = r.useMemo(() => [...o, ...a], [o, a]),
          c = null == i ? void 0 : i.subscription_listings,
          { activeSubscriptionListing: p, activeEntitlement: m } =
            r.useMemo(() => {
              if (null != c) {
                for (let e of u)
                  for (let t of c)
                    if ((0, h.AQ)(t, e, n))
                      return {
                        activeSubscriptionListing: t,
                        activeEntitlement: e,
                      };
              }
              return {
                activeSubscriptionListing: null,
                activeEntitlement: null,
              };
            }, [u, c, n]);
        return {
          activeSubscription: r.useMemo(() => {
            if (null == l) return null;
            let e = null == p ? void 0 : p.subscription_plans[0].id;
            for (let n of Object.values(l))
              if (n.type === g.NYc.APPLICATION && n.items[0].planId === e)
                return n;
            return null;
          }, [p, l]),
          activeSubscriptionListing: p,
          activeEntitlement: m,
          subscriptionGroupListing: i,
        };
      }
      function C(e) {
        var n;
        let t =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : g.lds,
          { entitlementsLoaded: l } = _({
            guildId: t,
            canFetch: (0, s.e7)([u.Z], () => u.Z.can(g.Plq.ADMINISTRATOR, e)),
          }),
          i = (0, s.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
          o = (0, s.Wu)([S.Z], () => {
            let e = S.Z.getEntitlementsForGuild(t),
              n = S.Z.getEntitlementsForGuild(t, !1),
              l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
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
        return l
          ? c.filter(
              (e) =>
                null != e.endsAt &&
                e.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - x),
            )
          : [];
      }
      let A = (e) => {
          let [n, t] = r.useState(!1),
            l = r.useMemo(() => e.map(h.bZ), [e]),
            i = (0, s.Wu)([c.Z], () => l.filter((e) => null == c.Z.get(e)), [
              l,
            ]);
          return (
            r.useEffect(() => {
              i.length > 0 &&
                (t(!0),
                Promise.all(i.map((e) => (0, v.vY)(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  }));
            }, [i]),
            { loading: n }
          );
        },
        O = () => {
          let [e, n] = r.useState(0);
          return (
            r.useEffect(() => {
              n(1),
                (0, o.p0)({
                  withSku: !0,
                  withApplication: !0,
                  entitlementType: g.qc2.APPLICATION_SUBSCRIPTION,
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
      function L(e, n) {
        let t = (0, s.e7)([a.Z], () => a.Z.isLoaded()),
          [l, i] = r.useState([]);
        return (
          r.useEffect(() => {
            null == n &&
              null != e &&
              t &&
              (0, I.tn)(e).then((e) => {
                i(e.map((e) => a.Z.getGuild(e)).filter((e) => null != e));
              });
          }, [e, n, t]),
          l
        );
      }
    },
    171246: function (e, n, t) {
      t.d(n, {
        AQ: function () {
          return c;
        },
        Jf: function () {
          return f;
        },
        KK: function () {
          return a;
        },
        KW: function () {
          return u;
        },
        OL: function () {
          return d;
        },
        bZ: function () {
          return o;
        },
      });
      var l = t(512722),
        i = t.n(l),
        r = t(630388),
        s = t(981631);
      function o(e) {
        let n = e.items;
        return (
          i()(
            1 === n.length,
            "more than 1 subscription item for application subscription",
          ),
          n[0].planId
        );
      }
      function a(e) {
        return (0, r.yE)(e, s.l4R.APPLICATION_GUILD_SUBSCRIPTION);
      }
      function u(e) {
        return (0, r.yE)(e, s.l4R.APPLICATION_USER_SUBSCRIPTION);
      }
      function c(e, n, t) {
        return (
          e.subscription_plans[0].sku_id === n.skuId &&
          (a(e.sku_flags)
            ? null != t && n.guildId === t && t !== s.ME
            : !!u(e.sku_flags) && null == n.guildId)
        );
      }
      function d(e) {
        return !1 === e.available;
      }
      function f(e, n) {
        var t;
        let l =
            null !== (t = null == n ? void 0 : n.deleted) && void 0 !== t && t,
          i = null != n && d(n);
        return e.status === s.O0b.CANCELED || l || i;
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(442837),
        i = t(558381),
        r = t(551428);
      let s = (0, l.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (e, n, t) {
      t.d(n, {
        H: function () {
          return s;
        },
      });
      var l = t(442837),
        i = t(821849),
        r = t(509545);
      let s = (0, l.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["subscription-plans", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : []),
        load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
        useStateHook: l.Wu,
      });
    },
    714441: function (e, n, t) {
      t.d(n, {
        i: function () {
          return r;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(481060);
      function r(e) {
        let { applicationName: n, onConfirm: r, onCancel: s } = e;
        return (0, i.openModalLazy)(
          async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t
              .e("99809")
              .then(t.bind(t, 525549));
            return (t) =>
              (0, l.jsx)(e, {
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
      var l = t(735250),
        i = t(470079),
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
        h = t(630388),
        g = t(270144),
        x = t(171246),
        _ = t(689011),
        N = t(714441),
        E = t(981631),
        T = t(689938);
      n.Z = (e) => {
        var n;
        let t,
          {
            guildId: r,
            groupListingId: Z,
            analyticsLocation: C,
            showBenefitsFirst: A,
            skuId: O,
            onComplete: L,
            forcesTransitionToGuild: R,
          } = e,
          b = (0, o.e7)([I.Z], () => (null != O ? I.Z.get(O) : void 0), [O]),
          j = (0, o.e7)([S.Z], () => (null != O ? S.Z.getForSKU(O) : void 0), [
            O,
          ]),
          P = (0, o.Wu)([v.Z], () => (null != O ? v.Z.getForSKU(O) : []), [O]),
          M = null != P ? P[0] : void 0,
          D = null == b ? void 0 : b.applicationId,
          k =
            (null == j ? void 0 : j.published) === !0 &&
            null != b &&
            (0, h.yE)(b.flags, E.l4R.AVAILABLE),
          y = null == M ? void 0 : M.skuId,
          { data: B } = (0, f.I)(D),
          U = (0, g._k)(Z, { includeSoftDeleted: !0 }).map(
            (e) => e.subscription_plans[0].id,
          ),
          { analyticsLocations: F } = (0, c.ZP)(),
          { activeSubscription: G, activeEntitlement: w } = (0, g.F5)(D, r, Z),
          K = (0, g.CR)(D, r),
          Y = (0, d.Z)(),
          H = null != b && (0, x.KW)(b.flags),
          z =
            null != w &&
            w.userId ===
              (null === (n = m.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id),
          W = null == w || z,
          V = null == w || U.length > 1,
          q = null != r || K.length > 0,
          Q = H && z,
          X = null != M && null != B && W && V && (q || H) && !Q;
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
          i.useEffect(() => {
            k &&
              null != y &&
              Y &&
              !(v.Z.isFetchingForSKU(y) || v.Z.isLoadedForSKU(y)) &&
              a.Z.wait(() => {
                (0, u.GZ)(y);
              });
          }, [k, y, Y]),
          {
            openModal: i.useCallback(() => {
              s()(null != B, "No application"),
                s()(null != M, "No subscription plan"),
                s()(k, "Cannot purchase this unpublished plan");
              let e = () => {
                (0, p.h)({
                  activeSubscription: G,
                  analyticsSubscriptionType: E.NYc.APPLICATION,
                  analyticsLocations: F,
                  analyticsLocation: C,
                  renderHeader: (e, n, t) =>
                    (0, l.jsx)(_.t, { step: t, onClose: () => n(!1) }),
                  initialPlanId: M.id,
                  skuId: M.skuId,
                  guildId: r,
                  eligibleApplicationSubscriptionGuilds: K,
                  planGroup: U,
                  applicationId: B.id,
                  showBenefitsFirst: A,
                  onComplete: L,
                  forcesTransitionToGuild: R,
                });
              };
              !q && H
                ? (0, N.i)({
                    applicationName: B.name,
                    onConfirm: e,
                    onCancel: () => {},
                  })
                : e();
            }, [k, M, U, B, r, q, H, F, C, G, A, K, L, R]),
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
      var l = t(735250),
        i = t(470079),
        r = t(557533),
        s = t.n(r),
        o = t(349361),
        a = t(698117);
      function u(e) {
        let { children: n, gradientClassName: t, ...r } = e,
          u = i.useRef(null),
          [c, d] = i.useState(!0),
          f = () => {
            var e;
            (null === (e = u.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? d(!1)
              : d(!0);
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(o.h2, {
              ...r,
              fade: !0,
              ref: (e) => {
                null != e && ((u.current = e), f());
              },
              onScroll: f,
              children: n,
            }),
            (0, l.jsx)("div", {
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
      var l = t(735250);
      t(470079);
      var i = t(777207),
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
        return (0, l.jsxs)("div", {
          className: o.container,
          children: [
            (0, l.jsxs)("div", {
              className: o.header,
              children: [
                (0, l.jsx)("div", { className: o.headerBackground, style: f }),
                (0, l.jsx)("div", {
                  className: o.headerTop,
                  children: (0, l.jsx)("div", { children: c }),
                }),
                (0, l.jsx)("div", {
                  className: o.headerImage,
                  children:
                    null != a
                      ? (0, l.jsx)("img", { src: a.toString(), alt: "" })
                      : (0, l.jsx)(d, {
                          size: "custom",
                          color: "var(--text-muted)",
                          height: 96,
                          width: 96,
                        }),
                }),
              ],
            }),
            (0, l.jsxs)(r.Z, {
              className: o.scroll,
              children: [
                (0, l.jsx)("br", {}),
                (0, l.jsxs)("div", {
                  className: o.scrollContent,
                  children: [
                    (0, l.jsx)(i.x, {
                      color: "header-primary",
                      tag: "div",
                      variant: "heading-xl/semibold",
                      children: u,
                    }),
                    m &&
                      (0, l.jsxs)("div", {
                        className: o.details,
                        children: [
                          (0, l.jsx)(i.x, {
                            color: "header-primary",
                            tag: "div",
                            variant: "heading-lg/semibold",
                            children: s.Z.Messages.Storefront.PRODUCT_DETAILS,
                          }),
                          p &&
                            (0, l.jsx)(i.x, {
                              color: "text-muted",
                              variant: "text-md/normal",
                              className: o.description,
                              children: t,
                            }),
                          null != n &&
                            (0, l.jsxs)("div", {
                              className: o.benefits,
                              children: [
                                (0, l.jsx)(i.x, {
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
          return v;
        },
        U: function () {
          return m;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(557533),
        r = t.n(i),
        s = t(789978),
        o = t(368072),
        a = t(777207),
        u = t(752843),
        c = t(330711),
        d = t(56273),
        f = t(103077),
        p = t(692547);
      function m(e) {
        let {
          description: n,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: m,
          subscriptionType: v,
          title: I,
          onDetails: S,
          benefitItems: h,
          benefitsSummary: g,
        } = e;
        return (0, l.jsx)(s.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != S ? S() : null != m && m();
            },
            children: [
              (0, l.jsxs)("div", {
                className: d.card,
                children: [
                  null != v && (0, l.jsx)(u.Z, { type: v }),
                  (0, l.jsxs)("div", {
                    className: d.body,
                    children: [
                      (0, l.jsx)(a.x, {
                        tag: "div",
                        variant: "heading-lg/semibold",
                        children: I,
                      }),
                      (0, l.jsx)("div", {
                        className: d.image,
                        children:
                          null != t
                            ? (0, l.jsx)("img", { src: t.toString(), alt: "" })
                            : (0, l.jsx)(o.V, {
                                color: p.Z.colors.ICON_PRIMARY,
                                size: "custom",
                                height: 48,
                                width: 48,
                              }),
                      }),
                      null != i
                        ? i({
                            className: d.purchaseBtn,
                            onClick: (e) => {
                              e.stopPropagation(), null == m || m();
                            },
                          })
                        : null,
                      null != n &&
                        "" !== n &&
                        (0, l.jsx)(a.x, {
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
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(a.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.Storefront.BENEFITS_SUMMARY.format({
                      count: g,
                    }),
                  }),
                }),
              null != h &&
                (0, l.jsx)("div", {
                  className: d.benefits,
                  children: (0, l.jsx)("div", {
                    className: d.benefitsContainer,
                    children: (0, l.jsxs)("div", {
                      className: d.benefitsList,
                      children: [
                        (0, l.jsx)(a.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.Storefront.BENEFITS_TITLE,
                        }),
                        h.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                h.slice(0, 3),
                                (0, l.jsx)(a.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.Storefront.MORE_BENEFITS.format(
                                      { count: h.length - 3 },
                                    ),
                                }),
                              ],
                            })
                          : h,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function v(e) {
        let { icon: n, name: t, description: i } = e;
        return (0, l.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, l.jsx)("div", { className: d.cardBenefitIcon, children: n }),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(a.x, { variant: "text-md/semibold", children: t }),
                null != i &&
                  (0, l.jsx)(a.x, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: i,
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
      var l = t(735250);
      t(470079);
      var i = t(628028),
        r = t(220427),
        s = t(777207),
        o = t(330711),
        a = t(350727);
      function u(e) {
        let { type: n } = e;
        return (0, l.jsx)(c, {
          icon:
            "user" === n
              ? (0, l.jsx)(r.t, { size: "xxs", color: "var(--text-positive)" })
              : (0, l.jsx)(i.Q, { size: "xxs", color: "var(--text-brand)" }),
          text:
            "user" === n
              ? o.Z.Messages.Storefront.USER_SUBSCRIPTION
              : o.Z.Messages.Storefront.SERVER_SUBSCRIPTION,
        });
      }
      function c(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: a.container,
          children: [
            n,
            (0, l.jsx)(s.x, {
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
//# sourceMappingURL=ac6a529b1d85baefc3a8.js.map
