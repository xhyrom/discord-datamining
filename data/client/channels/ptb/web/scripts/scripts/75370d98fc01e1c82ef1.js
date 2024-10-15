"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81272"],
  {
    887706: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(399606),
        i = t(314897);
      function a() {
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
        a = t(626135),
        r = t(981631);
      function o(e, n, t) {
        a.default.track(r.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return a;
        },
      }),
        t(47120);
      var l = t(442837),
        i = t(580130);
      function a(e) {
        return (0, l.e7)(
          [i.Z],
          () => {
            let n = i.Z.getForSku(e);
            if (null == n) return !1;
            let t = 0;
            for (let e of n) {
              var l, a;
              let n =
                null !==
                  (a =
                    null === (l = e.endsAt) || void 0 === l
                      ? void 0
                      : l.getTime()) && void 0 !== a
                  ? a
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
        a = t(481060),
        r = t(264043),
        o = t(812206),
        s = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(981631),
        p = t(689938),
        f = t(213891),
        m = t(566809);
      function v(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: v,
            onClose: I,
            onHeaderTitleClick: h,
            children: S,
            footer: x,
          } = e,
          N = (0, i.e7)(
            [o.Z, r.Z],
            () => {
              var e;
              return null !== (e = o.Z.getApplication(n)) && void 0 !== e
                ? e
                : r.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == N) return null;
        let T = (0, u.y)(N, 25),
          { termsOfServiceUrl: Z, privacyPolicyUrl: g } = N;
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: v,
          size: a.ModalSize.DYNAMIC,
          className: m.modal,
          children: [
            (0, l.jsxs)(a.ModalHeader, {
              className: f.modalHeader,
              children: [
                (0, l.jsxs)(a.Clickable, {
                  className: f.modalTitle,
                  onClick: h,
                  children: [
                    null != T &&
                      (0, l.jsx)("img", {
                        src: T.href,
                        alt: "",
                        className: m.appIcon,
                      }),
                    (0, l.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      children: N.name,
                    }),
                  ],
                }),
                (0, l.jsx)(a.ModalCloseButton, {
                  onClick: I,
                  className: f.modalCloseBtn,
                }),
              ],
            }),
            S,
            (0, l.jsxs)(a.ModalFooter, {
              className: m.footer,
              children: [
                null != Z && null != g
                  ? (0, l.jsx)(a.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: Z,
                          ppUrl: g,
                        }),
                    })
                  : (0, l.jsx)(a.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: m.footerButtons,
                  children: [
                    s.wS &&
                      (0, l.jsx)(a.Button, {
                        look: a.ButtonLooks.FILLED,
                        size: a.ButtonSizes.ICON,
                        color: a.ButtonColors.CUSTOM,
                        "aria-label": p.Z.Messages.COPY_LINK,
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
                          (0, s.JG)(e),
                            (0, a.showToast)(
                              (0, a.createToast)(
                                p.Z.Messages.COPIED_LINK,
                                a.ToastType.SUCCESS,
                              ),
                            ),
                            (0, c.X)(n, c.B.DETAILS_MODAL, t);
                        },
                        children: (0, l.jsx)(a.LinkIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    x,
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
            return h;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(752843),
        a = t(442837),
        r = t(481060),
        o = t(55563),
        s = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        f = t(680005),
        m = t(938337),
        v = t(981631),
        I = t(689938);
      function h(e) {
        var n, t, h, S;
        let {
            onClose: x,
            transitionState: N,
            skuId: T,
            appId: Z,
            onHeaderTitleClick: g,
          } = e,
          E = (0, a.e7)([s.Z], () => s.Z.getForSKU(T), [T]),
          _ = (0, a.e7)([o.Z], () => o.Z.get(T), [T]),
          R = (0, d.M)(T);
        if (null == _) return null;
        let C = null !== (t = _.name) && void 0 !== t ? t : "",
          O =
            null !==
              (h =
                null == E
                  ? void 0
                  : null === (n = E.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== h
              ? h
              : void 0,
          A =
            (null == E ? void 0 : E.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(Z, E.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          j = _.type === v.epS.DURABLE && R,
          b =
            _.type === v.epS.DURABLE
              ? j
                ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: P } = _;
        return null == P
          ? null
          : (0, l.jsx)(p.A, {
              appId: Z,
              skuId: _.id,
              transitionState: N,
              onHeaderTitleClick: null != g ? g : x,
              onClose: x,
              footer: (0, l.jsx)(f.Y, { appId: Z, sku: _ }),
              children: (0, l.jsx)(m.i, {
                appId: Z,
                skuId: _.id,
                title: C,
                description: O,
                imgSrc: A,
                tag: null != b ? (0, l.jsx)(i.V, { text: b }) : void 0,
                FallbackIcon: r.TicketIcon,
              }),
            });
      }
    },
    680005: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return S;
        },
        p: function () {
          return h;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(860911),
        a = t(481060),
        r = t(100527),
        o = t(906732),
        s = t(887706),
        u = t(87484),
        c = t(703656),
        d = t(626135),
        p = t(937615),
        f = t(110742),
        m = t(981631),
        v = t(689938),
        I = t(962083);
      function h(e) {
        let {
          appId: n,
          className: t,
          onClick: i,
          onHasClicked: a,
          skuId: r,
          subscriptionPlan: o,
          icon: s,
          canPurchase: u,
          cannotPurchaseReason: c,
        } = e;
        return u
          ? (0, l.jsx)(x, {
              appId: n,
              skuId: r,
              onClick: (e) => {
                i(e), null == a || a();
              },
              className: t,
              children: (0, l.jsxs)("div", {
                className: I.btnContent,
                children: [
                  s,
                  v.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                    rate: (0, p.xg)(o),
                  }),
                ],
              }),
            })
          : (0, l.jsx)(N, { className: t, children: c });
      }
      function S(e) {
        let {
            appId: n,
            className: t,
            onClick: i,
            onHasClicked: a,
            sku: s,
            icon: c,
          } = e,
          { analyticsLocations: d } = (0, o.ZP)(r.Z.APP_STOREFRONT),
          h = () => {
            (0, u.Z)({ applicationId: n, skuId: s.id, analyticsLocations: d });
          },
          S = (0, f.M)(s.id),
          T = s.type === m.epS.DURABLE && S,
          { price: Z } = s;
        return null == Z
          ? null
          : T
            ? (0, l.jsx)(N, {
                className: t,
                children: v.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(x, {
                appId: n,
                skuId: s.id,
                onClick: (e) => {
                  (null != i ? i : h)(e), null == a || a();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: I.btnContent,
                  children: [
                    c,
                    v.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, p.T4)(Z.amount, Z.currency),
                    }),
                  ],
                }),
              });
      }
      function x(e) {
        let { appId: n, skuId: t, onClick: r, ...o } = e,
          u = (0, s.Z)();
        return (0, l.jsx)(a.Button, {
          ...o,
          onClick: (e) => {
            if (
              (d.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: n,
                sku_id: t,
              }),
              !u)
            ) {
              e.preventDefault(), e.stopPropagation();
              let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                a = (0, i.Ui)(l, !1);
              (0, c.uL)(a);
              return;
            }
            null == r || r(e);
          },
        });
      }
      function N(e) {
        let { className: n, children: t } = e;
        return (0, l.jsx)(a.Button, {
          disabled: !0,
          className: n,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.PRIMARY,
          children: t,
        });
      }
    },
    519896: function (e, n, t) {
      t.r(n),
        t.d(n, {
          SubscriptionDetailsModal: function () {
            return h;
          },
        });
      var l = t(735250),
        i = t(470079),
        a = t(269210),
        r = t(752843),
        o = t(481060),
        s = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        p = t(73346),
        f = t(591759),
        m = t(886253),
        v = t(680005),
        I = t(938337);
      function h(e) {
        var n;
        let {
            appId: t,
            subscriptionType: h,
            onClose: S,
            skuId: x,
            guildId: N,
            transitionState: T,
            onHeaderTitleClick: Z,
          } = e,
          { data: g } = (0, u.H)(x),
          { data: E } = (0, s.Z)(x),
          _ = i.useMemo(() => {
            var e;
            return (null == E ? void 0 : E.thumbnail) != null &&
              null !== (e = f.Z.toURLSafe((0, p._W)(t, E.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, null == E ? void 0 : E.thumbnail]),
          R = i.useMemo(() => {
            let e = null == E ? void 0 : E.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(t, e.icon),
              }));
          }, [t, null == E ? void 0 : E.benefits]),
          {
            openModal: C,
            canOpenModal: O,
            cannotOpenReason: A,
          } = (0, d.Z)({ skuId: x, guildId: N, showBenefitsFirst: !1 });
        return null == E || null == g || 0 === g.length
          ? null
          : (0, l.jsx)(m.A, {
              appId: t,
              skuId: x,
              transitionState: T,
              onHeaderTitleClick: null != Z ? Z : S,
              onClose: S,
              footer: (0, l.jsx)(v.p, {
                onClick: C,
                appId: t,
                subscriptionType: h,
                skuId: x,
                subscriptionPlan: g[0],
                canPurchase: O,
                cannotPurchaseReason: A,
              }),
              children: (0, l.jsx)(I.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != R
                    ? R.map((e) =>
                        (0, l.jsx)(
                          a.G,
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
                  null !== (n = E.description) && void 0 !== n ? n : void 0,
                imgSrc: _,
                title: g[0].name,
                tag: (0, l.jsx)(r.Z, { type: h }),
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
        a = t(512100),
        r = t(906732),
        o = t(626135),
        s = t(981631);
      function u(e) {
        let { appId: n, skuId: t, ...u } = e,
          { analyticsLocations: c } = (0, r.ZP)();
        return (
          i.useEffect(() => {
            o.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: c,
            });
          }, [c, n, t]),
          (0, l.jsx)(a.u, { ...u })
        );
      }
    },
    724870: function (e, n, t) {
      t.d(n, {
        h: function () {
          return f;
        },
        m: function () {
          return v;
        },
      }),
        t(789020);
      var l = t(735250);
      t(470079);
      var i = t(512722),
        a = t.n(i),
        r = t(481060),
        o = t(496929),
        s = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        p = t(981631);
      function f(e) {
        let {
          initialPlanId: n,
          activeSubscription: i,
          analyticsObject: a,
          analyticsLocation: o,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: f,
          skuId: m,
          guildId: v,
          reviewWarningMessage: I,
          applicationId: h,
          showBenefitsFirst: S,
          eligibleApplicationSubscriptionGuilds: x,
          onComplete: N,
          forcesTransitionToGuild: T,
        } = e;
        (0, r.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              r = (
                await Promise.all([
                  t.e("52249"),
                  t.e("72652"),
                  t.e("32776"),
                  t.e("68845"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: p } = await Promise.all([
                t.e("96427"),
                t.e("77298"),
                t.e("23357"),
                t.e("54803"),
                t.e("15685"),
                t.e("79915"),
                t.e("30671"),
                t.e("59329"),
              ]).then(t.bind(t, 759386)),
              Z = p({
                guildId: v,
                showBenefitsFirst: S,
                eligibleApplicationSubscriptionGuilds: x,
              });
            return (t) =>
              (0, l.jsx)(e, {
                applicationId: h,
                activeSubscription: i,
                stepConfigs: Z,
                skuIDs: [m],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(r, {
                    ...t,
                    initialPlanId: n,
                    skuId: m,
                    analyticsLocations: s,
                    analyticsObject: a,
                    analyticsLocation: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: f,
                    reviewWarningMessage: I,
                    applicationId: h,
                    guildId: null != v ? v : void 0,
                    onComplete: N,
                    forcesTransitionToGuild: T,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let m = async (e, n) => {
        let t = (await (0, o.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        a()(null == t, "User already has an active subscription to this SKU");
      };
      async function v(e) {
        var n;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: r,
            analyticsLocations: o,
            renderHeader: d,
          } = e,
          v = c.Z.get(l),
          I = u.Z.getForSKU(l);
        a()(null != v, "Failed to find SKU");
        let h = (0, s.KW)(v.flags);
        a()(h, "Guild application subscriptions unsupported!"),
          await m(t, l),
          f({
            initialPlanId:
              null != i
                ? i
                : null === (n = I[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: r,
            analyticsSubscriptionType: p.NYc.APPLICATION,
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
        a = t(481060),
        r = t(976255),
        o = t(667),
        s = t(626135),
        u = t(981631);
      function c(e) {
        let {
            applicationId: n,
            skuId: c,
            onClose: d,
            onComplete: p,
            analyticsLocations: f,
            analyticsLocationObject: m,
            contextKey: v,
          } = e,
          I = !1,
          h = (0, i.Z)();
        (0, a.openModalLazy)(
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
              t.e("52730"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: i, ...a } = t;
              return (0, l.jsx)(e, {
                ...a,
                loadId: h,
                applicationId: n,
                skuId: c,
                analyticsLocations: f,
                analyticsLocationObject: m,
                onClose: (e) => {
                  i(), null == d || d(e);
                },
                onComplete: (e) => {
                  (I = !0), null == p || p(e);
                },
              });
            };
          },
          {
            contextKey: v,
            onCloseCallback: () => {
              !I &&
                s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: h,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: m,
                  is_gift: !1,
                  application_id: n,
                  location_stack: f,
                }),
                (0, r.fw)(),
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
        a = t(442837),
        r = t(570140);
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
      let s = { lastGuildDismissedTime: {} };
      class u extends (i = a.ZP.DeviceSettingsStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
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
        (n.Z = new u(r.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
          },
        }));
    },
    270144: function (e, n, t) {
      t.d(n, {
        C9: function () {
          return R;
        },
        CR: function () {
          return j;
        },
        Ev: function () {
          return b;
        },
        h6: function () {
          return C;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return A;
        },
        sp: function () {
          return O;
        },
      }),
        t(653041),
        t(47120);
      var l,
        i,
        a = t(470079),
        r = t(512722),
        o = t.n(r),
        s = t(442837),
        u = t(496929),
        c = t(430824),
        d = t(496675),
        p = t(509545),
        f = t(78839),
        m = t(580130),
        v = t(55563),
        I = t(801249),
        h = t(106976),
        S = t(307643),
        x = t(488915),
        N = t(171246),
        T = t(981631);
      let Z = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let g = (e) => {
          let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
            i = (0, s.e7)(
              [x.Z],
              () =>
                null != n ? x.Z.getEntitlementsForGuildFetchState(n) : null,
              [n],
            );
          return (
            a.useEffect(() => {
              if (null == n || n === T.ME) return;
              let e = x.Z.getEntitlementsForGuildFetchState(n);
              t && (e === x.M.NOT_FETCHED || l) && (0, h.i1)(n);
            }, [n, t, l]),
            { entitlementsLoaded: i === x.M.FETCHED }
          );
        },
        E = [],
        _ = [];
      function R(e, n) {
        o()(
          null == e || e.type === T.epS.SUBSCRIPTION_GROUP,
          "SKU must be a subscription group",
        );
        let t = null == e ? void 0 : e.bundledSkuIds,
          l = null == e ? void 0 : e.applicationId,
          i = (0, s.e7)([f.ZP], () => f.ZP.getSubscriptions(), []),
          r = (0, s.Wu)(
            [x.Z],
            () =>
              null != l && null != n
                ? x.Z.getApplicationEntitlementsForGuild(l, n)
                : E,
            [l, n],
          ),
          u = (0, s.Wu)(
            [m.Z],
            () => {
              var e;
              return null != l
                ? [
                    ...(null !== (e = m.Z.getForApplication(l)) && void 0 !== e
                      ? e
                      : []),
                  ]
                : _;
            },
            [l],
          ),
          c = a.useMemo(
            () =>
              [...r, ...u].filter(
                (e) =>
                  (null == t ? void 0 : t.includes(e.skuId)) &&
                  e.isValid(null, v.Z),
              ),
            [r, u, t],
          );
        return (0, s.cj)(
          [p.Z, v.Z],
          () => {
            let e, l;
            if (null == i) return {};
            for (let a of Object.values(i)) {
              if (null == l) {
                let e = (0, N.z0)(p.Z, null != t ? t : [], a);
                null != e && (l = { upcomingSubscriptionPlan: e });
              }
              if (null == e)
                for (let t of c) {
                  let l = (0, N.PB)(p.Z, v.Z, a, t, n);
                  if (null != l) {
                    e = {
                      activeSubscription: a,
                      activeSubscriptionPlan: l,
                      activeEntitlement: t,
                    };
                    break;
                  }
                }
              if (null != e && null != l) break;
            }
            return { ...e, ...l };
          },
          [i, t, c, n],
        );
      }
      function C(e) {
        var n;
        let t =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : T.lds,
          { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, s.e7)([d.Z], () => d.Z.can(T.Plq.ADMINISTRATOR, e)),
          }),
          i = (0, s.e7)([I.Z], () => I.Z.getLastGuildDismissedTime(t)),
          r = (0, s.Wu)([x.Z], () => {
            let e = x.Z.getEntitlementsForGuild(t),
              n = x.Z.getEntitlementsForGuild(t, !1),
              l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
          }),
          o = (0, s.cj)([v.Z], () => v.Z.getSKUs()),
          u = a.useMemo(
            () =>
              r.filter((e) => {
                let n = o[e.skuId];
                return null != n && n.available;
              }),
            [r, o],
          );
        return l
          ? u.filter(
              (e) =>
                null != e.endsAt &&
                e.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - Z),
            )
          : [];
      }
      let O = (e) => {
          let [n, t] = a.useState(!1),
            l = a.useMemo(() => e.map(N.bZ), [e]);
          return (
            a.useEffect(() => {
              t(!0),
                Promise.all(l.map((e) => (0, h.vY)(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  });
            }, [l]),
            { loading: n }
          );
        },
        A = () => {
          let [e, n] = a.useState(0);
          return (
            a.useEffect(() => {
              n(1),
                Promise.all([
                  (0, u.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: T.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, u.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: T.qc2.PURCHASE,
                  }),
                ])
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
      function j(e, n) {
        let [t, l] = a.useState([]);
        return (
          a.useEffect(() => {
            null != e && (0, S.tn)(e, n).then(l);
          }, [e, n]),
          (0, s.Wu)(
            [c.Z],
            () => t.map((e) => c.Z.getGuild(e)).filter((e) => null != e),
            [t],
          )
        );
      }
      function b(e, n) {
        return (0, s.e7)(
          [f.ZP, v.Z, p.Z],
          () => {
            let t = new Set();
            for (let n of e) {
              let e = v.Z.get(n);
              null != e && e.isAvailable() && !1 === e.deleted && t.add(n);
            }
            let l = f.ZP.getActiveApplicationSubscriptions();
            return null == l
              ? void 0
              : l.find((e) => {
                  var l;
                  if (
                    null != n &&
                    (null === (l = e.metadata) || void 0 === l
                      ? void 0
                      : l.application_subscription_guild_id) !== n
                  )
                    return !1;
                  for (let n of e.items.map((e) => p.Z.get(e.planId)))
                    if (null != n && t.has(n.skuId)) return !0;
                  return !1;
                });
          },
          [e, n],
        );
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(558381),
        a = t(551428);
      let r = (0, l.Kb)(a.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? a.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (e, n, t) {
      t.d(n, {
        H: function () {
          return r;
        },
      });
      var l = t(442837),
        i = t(821849),
        a = t(509545);
      let r = (0, l.Kb)(a.Z, {
        queryId: (e) => (null != e ? ["subscription-plans", e] : null),
        get: (e) => (null != e ? a.Z.getForSKU(e) : []),
        load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
        useStateHook: l.Wu,
      });
    },
    714441: function (e, n, t) {
      t.d(n, {
        i: function () {
          return a;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(481060);
      function a(e) {
        let { applicationName: n, onConfirm: a, onCancel: r } = e;
        return (0, i.openModalLazy)(
          async () => {
            let { ConfirmNoSharedServerSubscribeWarningModal: e } = await t
              .e("99809")
              .then(t.bind(t, 525549));
            return (t) =>
              (0, l.jsx)(e, {
                ...t,
                applicationName: n,
                onConfirm: a,
                onCancel: r,
              });
          },
          { modalKey: "application-user-subscribe-no-shared-server-warning" },
        );
      }
    },
    696906: function (e, n, t) {
      t(390547), t(789020);
      var l = t(735250),
        i = t(470079),
        a = t(512722),
        r = t.n(a),
        o = t(442837),
        s = t(570140),
        u = t(821849),
        c = t(906732),
        d = t(887706),
        p = t(728345),
        f = t(724870),
        m = t(594174),
        v = t(509545),
        I = t(55563),
        h = t(551428),
        S = t(270144),
        x = t(171246),
        N = t(689011),
        T = t(714441),
        Z = t(981631),
        g = t(689938);
      n.Z = (e) => {
        var n, t, a, E;
        let _,
          {
            guildId: R,
            analyticsLocation: C,
            showBenefitsFirst: O,
            skuId: A,
            onComplete: j,
            forcesTransitionToGuild: b,
          } = e,
          P = (0, o.e7)([I.Z], () => (null != A ? I.Z.get(A) : void 0), [A]),
          L = (0, o.e7)([h.Z], () => (null != A ? h.Z.getForSKU(A) : void 0), [
            A,
          ]),
          k =
            null ===
              (n = (0, o.Wu)([v.Z], () => (null != A ? v.Z.getForSKU(A) : []), [
                A,
              ])[0]) || void 0 === n
              ? void 0
              : n.id,
          M = (0, o.e7)(
            [I.Z],
            () => (null != A ? I.Z.getParentSKU(A) : void 0),
            [A],
          ),
          D = null == M ? void 0 : M.bundledSkuIds,
          y = (0, o.Wu)(
            [v.Z],
            () => {
              var e;
              return null !==
                (e = null == D ? void 0 : D.flatMap(v.Z.getForSKU)) &&
                void 0 !== e
                ? e
                : [];
            },
            [D],
          ),
          F = i.useMemo(() => y.map((e) => e.id), [y]),
          U = null == P ? void 0 : P.applicationId,
          B = (0, S.CR)(U, A),
          w = B.some((e) => e.id === R)
            ? R
            : null === (t = B[0]) || void 0 === t
              ? void 0
              : t.id,
          G =
            (null == L ? void 0 : L.published) === !0 &&
            (null == P ? void 0 : P.isAvailable()) === !0,
          { data: K } = (0, p.IX)(U),
          { analyticsLocations: Y } = (0, c.ZP)(),
          { activeEntitlement: H } = (0, S.C9)(M, w),
          z = (0, S.Ev)(
            null !== (E = null == M ? void 0 : M.bundledSkuIds) && void 0 !== E
              ? E
              : [],
            null != R ? R : void 0,
          ),
          W = (0, d.Z)(),
          V = null != P && (0, x.KW)(P.flags),
          q = (null == H ? void 0 : H.skuId) === A,
          X =
            null != H &&
            H.userId ===
              (null === (a = m.default.getCurrentUser()) || void 0 === a
                ? void 0
                : a.id),
          Q = null == H || y.length > 1,
          J = B.length > 0,
          $ = V && X && q,
          ee = null != P && null != K && Q && (J || V) && !$;
        return (
          J
            ? $ && (_ = g.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_PLAN)
            : (_ = g.Z.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE),
          i.useEffect(() => {
            G &&
              null != A &&
              W &&
              !(v.Z.isFetchingForSKU(A) || v.Z.isLoadedForSKU(A)) &&
              s.Z.wait(() => {
                (0, u.GZ)(A);
              });
          }, [G, A, W]),
          {
            openModal: i.useCallback(() => {
              r()(null != K, "No application"),
                r()(null != A, "No SKU ID"),
                r()(G, "Cannot purchase this unpublished plan");
              let e = () => {
                (0, f.h)({
                  activeSubscription: null != z ? z : null,
                  analyticsSubscriptionType: Z.NYc.APPLICATION,
                  analyticsLocations: Y,
                  analyticsLocation: C,
                  renderHeader: (e, n, t) =>
                    (0, l.jsx)(N.t, { step: t, onClose: () => n(!1) }),
                  initialPlanId: k,
                  skuId: A,
                  guildId: w,
                  eligibleApplicationSubscriptionGuilds: B,
                  planGroup: F,
                  applicationId: K.id,
                  showBenefitsFirst: O,
                  onComplete: j,
                  forcesTransitionToGuild: b,
                });
              };
              !J && V
                ? (0, T.i)({
                    applicationName: K.name,
                    onConfirm: e,
                    onCancel: () => {},
                  })
                : e();
            }, [A, k, F, G, K, w, J, V, Y, C, z, O, B, j, b]),
            canOpenModal: ee,
            cannotOpenReason: _,
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
        a = t(557533),
        r = t.n(a),
        o = t(349361),
        s = t(698117);
      function u(e) {
        let { children: n, gradientClassName: t, ...a } = e,
          u = i.useRef(null),
          [c, d] = i.useState(!0),
          p = () => {
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
              fade: !0,
              ...a,
              ref: (e) => {
                null != e && ((u.current = e), p());
              },
              onScroll: p,
              children: n,
            }),
            (0, l.jsx)("div", {
              className: r()(s.containerScrollGradient, t),
              "data-shown": c,
            }),
          ],
        });
      }
    },
    512100: function (e, n, t) {
      t.d(n, {
        u: function () {
          return u;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(409794),
        a = t(777207),
        r = t(541822),
        o = t(330711),
        s = t(770561);
      function u(e) {
        let {
            benefits: n,
            description: t,
            imgSrc: u,
            title: c,
            tag: d,
            FallbackIcon: p,
          } = e,
          f =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: s.container,
          children: (0, l.jsx)(r.Z, {
            className: s.scroller,
            children: (0, l.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: s.headerBackground,
                      style: f,
                    }),
                    (0, l.jsx)("div", {
                      className: s.headerImage,
                      children:
                        null != u
                          ? (0, l.jsx)("img", { src: u.toString(), alt: "" })
                          : (0, l.jsx)(p, {
                              size: "custom",
                              color: "var(--text-muted)",
                              height: 96,
                              width: 96,
                            }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: s.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: s.details,
                      children: [
                        null != d && (0, l.jsx)("div", { children: d }),
                        (0, l.jsx)(i.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: c,
                        }),
                        null != t &&
                          "" !== t &&
                          (0, l.jsx)(a.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: s.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, l.jsxs)("div", {
                        className: s.benefits,
                        children: [
                          (0, l.jsx)(a.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: o.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                          }),
                          n,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    269210: function (e, n, t) {
      t.d(n, {
        G: function () {
          return m;
        },
        U: function () {
          return f;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(557533),
        a = t.n(i),
        r = t(789978),
        o = t(368072),
        s = t(777207),
        u = t(692547),
        c = t(330711),
        d = t(56273),
        p = t(103077);
      function f(e) {
        let {
          description: n,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: f,
          title: m,
          onDetails: v,
          benefitItems: I,
          benefitsSummary: h,
        } = e;
        return (0, l.jsx)(r.tE, {
          children: (0, l.jsxs)("div", {
            className: a()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != v ? v() : null != f && f();
            },
            children: [
              (0, l.jsx)("div", {
                className: d.card,
                children: (0, l.jsxs)("div", {
                  className: d.body,
                  children: [
                    (0, l.jsx)(s.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: m,
                    }),
                    (0, l.jsx)("div", {
                      className: d.image,
                      children:
                        null != t
                          ? (0, l.jsx)("img", { src: t.toString(), alt: "" })
                          : (0, l.jsx)(o.V, {
                              color: u.Z.colors.ICON_PRIMARY,
                              size: "custom",
                              height: 48,
                              width: 48,
                            }),
                    }),
                    null != i
                      ? i({
                          className: d.purchaseBtn,
                          onClick: (e) => {
                            e.stopPropagation(), null == f || f();
                          },
                        })
                      : null,
                    null != n &&
                      "" !== n &&
                      (0, l.jsx)(s.x, {
                        className: d.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: n,
                      }),
                  ],
                }),
              }),
              null != h &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(s.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: h,
                    }),
                  }),
                }),
              null != I &&
                I.length > 0 &&
                (0, l.jsx)("div", {
                  className: d.benefits,
                  children: (0, l.jsx)("div", {
                    className: d.benefitsContainer,
                    children: (0, l.jsxs)("div", {
                      className: d.benefitsList,
                      children: [
                        (0, l.jsx)(s.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        I.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                I.slice(0, 3),
                                (0, l.jsx)(s.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.STOREFRONT_MORE_BENEFITS.format(
                                      { count: I.length - 3 },
                                    ),
                                }),
                              ],
                            })
                          : I,
                      ],
                    }),
                  }),
                }),
            ],
          }),
        });
      }
      function m(e) {
        let { icon: n, name: t, description: i } = e;
        return (0, l.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, l.jsx)("div", { className: d.cardBenefitIcon, children: n }),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(s.x, { variant: "text-sm/semibold", children: t }),
                null != i &&
                  (0, l.jsx)(s.x, {
                    variant: "text-sm/normal",
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
          return d;
        },
        Z: function () {
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(628028),
        a = t(220427),
        r = t(777207),
        o = t(692547),
        s = t(330711),
        u = t(350727);
      function c(e) {
        let { type: n } = e;
        return (0, l.jsx)(d, {
          icon:
            "user" === n
              ? (0, l.jsx)(a.t, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: u.container,
          children: [
            n,
            (0, l.jsx)(r.x, {
              color: "header-primary",
              variant: "text-sm/medium",
              children: t,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=75370d98fc01e1c82ef1.js.map
