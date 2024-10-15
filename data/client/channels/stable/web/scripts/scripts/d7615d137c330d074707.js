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
          return r;
        },
      });
      var l,
        i,
        a = t(626135),
        s = t(981631);
      function r(e, n, t) {
        a.default.track(s.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return f;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        s = t(264043),
        r = t(812206),
        o = t(572004),
        u = t(601911),
        c = t(504211),
        d = t(981631),
        p = t(689938),
        m = t(213891),
        v = t(566809);
      function f(e) {
        let {
            appId: n,
            skuId: t,
            transitionState: f,
            onClose: h,
            onHeaderTitleClick: I,
            children: x,
            footer: S,
          } = e,
          T = (0, i.e7)(
            [r.Z, s.Z],
            () => {
              var e;
              return null !== (e = r.Z.getApplication(n)) && void 0 !== e
                ? e
                : s.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == T) return null;
        let N = (0, u.y)(T, 25),
          { termsOfServiceUrl: E, privacyPolicyUrl: _ } = T;
        return (0, l.jsxs)(a.ModalRoot, {
          transitionState: f,
          size: a.ModalSize.DYNAMIC,
          className: v.modal,
          children: [
            (0, l.jsxs)(a.ModalHeader, {
              className: m.modalHeader,
              children: [
                (0, l.jsxs)(a.Clickable, {
                  className: m.modalTitle,
                  onClick: I,
                  children: [
                    null != N &&
                      (0, l.jsx)("img", {
                        src: N.href,
                        alt: "",
                        className: v.appIcon,
                      }),
                    (0, l.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      children: T.name,
                    }),
                  ],
                }),
                (0, l.jsx)(a.ModalCloseButton, {
                  onClick: h,
                  className: m.modalCloseBtn,
                }),
              ],
            }),
            x,
            (0, l.jsxs)(a.ModalFooter, {
              className: v.footer,
              children: [
                null != E && null != _
                  ? (0, l.jsx)(a.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: E,
                          ppUrl: _,
                        }),
                    })
                  : (0, l.jsx)(a.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: v.footerButtons,
                  children: [
                    o.wS &&
                      (0, l.jsx)(a.Button, {
                        look: a.ButtonLooks.FILLED,
                        size: a.ButtonSizes.ICON,
                        color: a.ButtonColors.CUSTOM,
                        "aria-label": p.Z.Messages.COPY_LINK,
                        className: v.linkButton,
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
                          (0, o.JG)(e),
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
                    S,
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
            return I;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(752843),
        a = t(442837),
        s = t(481060),
        r = t(55563),
        o = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        m = t(680005),
        v = t(938337),
        f = t(981631),
        h = t(689938);
      function I(e) {
        var n, t, I, x;
        let {
            onClose: S,
            transitionState: T,
            skuId: N,
            appId: E,
            onHeaderTitleClick: _,
          } = e,
          g = (0, a.e7)([o.Z], () => o.Z.getForSKU(N), [N]),
          Z = (0, a.e7)([r.Z], () => r.Z.get(N), [N]),
          R = (0, d.M)(N);
        if (null == Z) return null;
        let O = null !== (t = Z.name) && void 0 !== t ? t : "",
          j =
            null !==
              (I =
                null == g
                  ? void 0
                  : null === (n = g.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== I
              ? I
              : void 0,
          C =
            (null == g ? void 0 : g.headerBackground) != null &&
            null !==
              (x = c.Z.toURLSafe((0, u._W)(E, g.headerBackground, 256))) &&
            void 0 !== x
              ? x
              : void 0,
          A = Z.type === f.epS.DURABLE && R,
          b =
            Z.type === f.epS.DURABLE
              ? A
                ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = Z;
        return null == L
          ? null
          : (0, l.jsx)(p.A, {
              appId: E,
              skuId: Z.id,
              transitionState: T,
              onHeaderTitleClick: null != _ ? _ : S,
              onClose: S,
              footer: (0, l.jsx)(m.Y, { appId: E, sku: Z }),
              children: (0, l.jsx)(v.i, {
                appId: E,
                skuId: Z.id,
                title: O,
                description: j,
                imgSrc: C,
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
          return I;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(860911),
        a = t(481060),
        s = t(100527),
        r = t(906732),
        o = t(887706),
        u = t(87484),
        c = t(703656),
        d = t(626135),
        p = t(937615),
        m = t(110742),
        v = t(981631),
        f = t(689938),
        h = t(962083);
      function I(e) {
        let {
          appId: n,
          className: t,
          onClick: i,
          onHasClicked: a,
          skuId: s,
          subscriptionPlan: r,
          icon: o,
          canPurchase: u,
        } = e;
        return u
          ? (0, l.jsx)(S, {
              appId: n,
              skuId: s,
              onClick: (e) => {
                i(e), null == a || a();
              },
              className: t,
              children: (0, l.jsxs)("div", {
                className: h.btnContent,
                children: [
                  o,
                  f.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                    rate: (0, p.xg)(r),
                  }),
                ],
              }),
            })
          : (0, l.jsx)(T, {
              className: t,
              children: f.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_PLAN,
            });
      }
      function x(e) {
        let {
            appId: n,
            className: t,
            onClick: i,
            onHasClicked: a,
            sku: o,
            icon: c,
          } = e,
          { analyticsLocations: d } = (0, r.ZP)(s.Z.APP_STOREFRONT),
          I = () => {
            (0, u.Z)({ applicationId: n, skuId: o.id, analyticsLocations: d });
          },
          x = (0, m.M)(o.id),
          N = o.type === v.epS.DURABLE && x,
          { price: E } = o;
        return null == E
          ? null
          : N
            ? (0, l.jsx)(T, {
                className: t,
                children: f.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(S, {
                appId: n,
                skuId: o.id,
                onClick: (e) => {
                  (null != i ? i : I)(e), null == a || a();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: h.btnContent,
                  children: [
                    c,
                    f.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, p.T4)(E.amount, E.currency),
                    }),
                  ],
                }),
              });
      }
      function S(e) {
        let { appId: n, skuId: t, onClick: s, ...r } = e,
          u = (0, o.Z)();
        return (0, l.jsx)(a.Button, {
          ...r,
          onClick: (e) => {
            if (
              (d.default.track(v.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: n,
                sku_id: t,
              }),
              !u)
            ) {
              e.preventDefault(), e.stopPropagation();
              let l = v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                a = (0, i.Ui)(l, !1);
              (0, c.uL)(a);
              return;
            }
            null == s || s(e);
          },
        });
      }
      function T(e) {
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
            return I;
          },
        });
      var l = t(735250),
        i = t(470079),
        a = t(269210),
        s = t(752843),
        r = t(481060),
        o = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        p = t(73346),
        m = t(591759),
        v = t(886253),
        f = t(680005),
        h = t(938337);
      function I(e) {
        var n;
        let {
            appId: t,
            subscriptionType: I,
            onClose: x,
            skuId: S,
            guildId: T,
            transitionState: N,
            onHeaderTitleClick: E,
          } = e,
          { data: _ } = (0, u.H)(S),
          { data: g } = (0, o.Z)(S),
          Z = i.useMemo(() => {
            var e;
            return (null == g ? void 0 : g.thumbnail) != null &&
              null !== (e = m.Z.toURLSafe((0, p._W)(t, g.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, null == g ? void 0 : g.thumbnail]),
          R = i.useMemo(() => {
            let e = null == g ? void 0 : g.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(t, e.icon),
              }));
          }, [t, null == g ? void 0 : g.benefits]),
          { openModal: O, canOpenModal: j } = (0, d.Z)({
            skuId: S,
            guildId: T,
            showBenefitsFirst: !1,
          });
        return null == g || null == _ || 0 === _.length
          ? null
          : (0, l.jsx)(v.A, {
              appId: t,
              skuId: S,
              transitionState: N,
              onHeaderTitleClick: null != E ? E : x,
              onClose: x,
              footer: (0, l.jsx)(f.p, {
                onClick: O,
                appId: t,
                subscriptionType: I,
                skuId: S,
                subscriptionPlan: _[0],
                canPurchase: j,
              }),
              children: (0, l.jsx)(h.i, {
                appId: t,
                skuId: S,
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
                  null !== (n = g.description) && void 0 !== n ? n : void 0,
                imgSrc: Z,
                title: _[0].name,
                tag: (0, l.jsx)(s.Z, { type: I }),
                FallbackIcon: r.BadgeIcon,
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
        s = t(906732),
        r = t(626135),
        o = t(981631);
      function u(e) {
        let { appId: n, skuId: t, ...u } = e,
          { analyticsLocations: c } = (0, s.ZP)();
        return (
          i.useEffect(() => {
            r.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
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
          return m;
        },
        m: function () {
          return f;
        },
      }),
        t(789020);
      var l = t(735250);
      t(470079);
      var i = t(512722),
        a = t.n(i),
        s = t(481060),
        r = t(496929),
        o = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        p = t(981631);
      function m(e) {
        let {
          initialPlanId: n,
          activeSubscription: i,
          analyticsObject: a,
          analyticsLocation: r,
          analyticsLocations: o,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: m,
          skuId: v,
          guildId: f,
          reviewWarningMessage: h,
          applicationId: I,
          showBenefitsFirst: x,
          onComplete: S,
          forcesTransitionToGuild: T,
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
              N = p({ guildId: f, showBenefitsFirst: x });
            return (t) =>
              (0, l.jsx)(e, {
                applicationId: I,
                activeSubscription: i,
                stepConfigs: N,
                skuIDs: [v],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(s, {
                    ...t,
                    initialPlanId: n,
                    skuId: v,
                    analyticsLocations: o,
                    analyticsObject: a,
                    analyticsLocation: r,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: m,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: null != f ? f : void 0,
                    onComplete: S,
                    forcesTransitionToGuild: T,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let v = async (e, n) => {
        let t = (await (0, r.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        a()(null == t, "User already has an active subscription to this SKU");
      };
      async function f(e) {
        var n;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: s,
            analyticsLocations: r,
            renderHeader: d,
          } = e,
          f = c.Z.get(l),
          h = u.Z.getForSKU(l);
        a()(null != f, "Failed to find SKU");
        let I = (0, o.KW)(f.flags);
        a()(I, "Guild application subscriptions unsupported!"),
          await v(t, l),
          m({
            initialPlanId:
              null != i
                ? i
                : null === (n = h[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: r,
            analyticsLocationObject: s,
            analyticsSubscriptionType: p.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
            guildId: null,
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
        s = t(976255),
        r = t(667),
        o = t(626135),
        u = t(981631);
      function c(e) {
        let {
            applicationId: n,
            skuId: c,
            onClose: d,
            onComplete: p,
            analyticsLocations: m,
            analyticsLocationObject: v,
            contextKey: f,
          } = e,
          h = !1,
          I = (0, i.Z)();
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
                loadId: I,
                applicationId: n,
                skuId: c,
                analyticsLocations: m,
                analyticsLocationObject: v,
                onClose: (e) => {
                  i(), null == d || d(e);
                },
                onComplete: (e) => {
                  (h = !0), null == p || p(e);
                },
              });
            };
          },
          {
            contextKey: f,
            onCloseCallback: () => {
              !h &&
                o.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: I,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: v,
                  is_gift: !1,
                  application_id: n,
                  location_stack: m,
                }),
                (0, s.fw)(),
                (0, r.p)(),
                null == d || d(h);
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
        s = t(570140);
      function r(e, n, t) {
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
      let o = { lastGuildDismissedTime: {} };
      class u extends (i = a.ZP.DeviceSettingsStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          l = e;
        }
        getUserAgnosticState() {
          return l;
        }
        getLastGuildDismissedTime(e) {
          return l.lastGuildDismissedTime[e];
        }
      }
      r(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        r(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (n.Z = new u(s.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
          },
        }));
    },
    270144: function (e, n, t) {
      t.d(n, {
        h6: function () {
          return S;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return N;
        },
        sp: function () {
          return T;
        },
        v9: function () {
          return E;
        },
      }),
        t(653041),
        t(47120),
        t(789020);
      var l,
        i,
        a = t(470079),
        s = t(442837),
        r = t(496929);
      t(430824);
      var o = t(496675),
        u = t(509545),
        c = t(78839),
        d = t(55563),
        p = t(801249),
        m = t(106976);
      t(307643);
      var v = t(488915),
        f = t(171246),
        h = t(981631);
      let I = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let x = (e) => {
        let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
          i = (0, s.e7)(
            [v.Z],
            () => (null != n ? v.Z.getEntitlementsForGuildFetchState(n) : null),
            [n],
          );
        return (
          a.useEffect(() => {
            if (null == n || n === h.ME) return;
            let e = v.Z.getEntitlementsForGuildFetchState(n);
            t && (e === v.M.NOT_FETCHED || l) && (0, m.i1)(n);
          }, [n, t, l]),
          { entitlementsLoaded: i === v.M.FETCHED }
        );
      };
      function S(e) {
        var n;
        let t =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : h.lds,
          { entitlementsLoaded: l } = x({
            guildId: t,
            canFetch: (0, s.e7)([o.Z], () => o.Z.can(h.Plq.ADMINISTRATOR, e)),
          }),
          i = (0, s.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(t)),
          r = (0, s.Wu)([v.Z], () => {
            let e = v.Z.getEntitlementsForGuild(t),
              n = v.Z.getEntitlementsForGuild(t, !1),
              l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
          }),
          u = (0, s.cj)([d.Z], () => d.Z.getSKUs()),
          c = a.useMemo(
            () =>
              r.filter((e) => {
                let n = u[e.skuId];
                return null != n && n.available;
              }),
            [r, u],
          );
        return l
          ? c.filter(
              (e) =>
                null != e.endsAt &&
                e.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - I),
            )
          : [];
      }
      let T = (e) => {
          let [n, t] = a.useState(!1),
            l = a.useMemo(() => e.map(f.bZ), [e]);
          return (
            a.useEffect(() => {
              t(!0),
                Promise.all(l.map((e) => (0, m.vY)(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  });
            }, [l]),
            { loading: n }
          );
        },
        N = () => {
          let [e, n] = a.useState(0);
          return (
            a.useEffect(() => {
              n(1),
                Promise.all([
                  (0, r.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: h.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, r.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: h.qc2.PURCHASE,
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
      function E(e, n) {
        return (0, s.cj)([c.ZP, u.Z], () => {
          var t, l, i, a, s;
          for (let r of null !==
            (t = c.ZP.getActiveApplicationSubscriptions()) && void 0 !== t
            ? t
            : []) {
            if (
              (0, f.KK)(
                null !== (a = null == e ? void 0 : e.flags) && void 0 !== a
                  ? a
                  : 0,
              ) &&
              null != n &&
              (null === (l = r.metadata) || void 0 === l
                ? void 0
                : l.application_subscription_guild_id) !== n
            )
              continue;
            let t = (
              null !==
                (s =
                  null === (i = r.renewalMutations) || void 0 === i
                    ? void 0
                    : i.items) && void 0 !== s
                ? s
                : r.items
            )
              .map((e) => u.Z.get(e.planId))
              .find((n) => {
                var t;
                return (
                  null != n &&
                  null !==
                    (t =
                      null == e ? void 0 : e.bundledSkuIds.includes(n.skuId)) &&
                  void 0 !== t &&
                  t
                );
              });
            if (null != t) return { subscription: r, subscriptionPlan: t };
          }
          return {};
        });
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
        a = t(551428);
      let s = (0, l.Kb)(a.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? a.Z.getForSKU(e) : null),
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
        a = t(509545);
      let s = (0, l.Kb)(a.Z, {
        queryId: (e) => (null != e ? ["subscription-plans", e] : null),
        get: (e) => (null != e ? a.Z.getForSKU(e) : []),
        load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
        useStateHook: l.Wu,
      });
    },
    696906: function (e, n, t) {
      t(390547);
      var l = t(735250),
        i = t(470079),
        a = t(512722),
        s = t.n(a),
        r = t(442837),
        o = t(570140),
        u = t(821849),
        c = t(906732),
        d = t(887706),
        p = t(728345),
        m = t(724870),
        v = t(509545),
        f = t(55563),
        h = t(551428),
        I = t(270144),
        x = t(689011),
        S = t(981631);
      n.Z = (e) => {
        var n;
        let {
            guildId: t,
            analyticsLocation: a,
            showBenefitsFirst: T,
            skuId: N,
            onComplete: E,
            forcesTransitionToGuild: _,
          } = e,
          g = (0, r.e7)([f.Z], () => (null != N ? f.Z.get(N) : void 0), [N]),
          Z = (0, r.e7)([h.Z], () => (null != N ? h.Z.getForSKU(N) : void 0), [
            N,
          ]),
          R =
            null ===
              (n = (0, r.Wu)([v.Z], () => (null != N ? v.Z.getForSKU(N) : []), [
                N,
              ])[0]) || void 0 === n
              ? void 0
              : n.id,
          O = (0, r.e7)(
            [f.Z],
            () => (null != N ? f.Z.getParentSKU(N) : void 0),
            [N],
          ),
          j = null == O ? void 0 : O.bundledSkuIds,
          C = (0, r.Wu)(
            [v.Z],
            () => {
              var e;
              return null !==
                (e = null == j ? void 0 : j.flatMap(v.Z.getForSKU)) &&
                void 0 !== e
                ? e
                : [];
            },
            [j],
          ),
          A = i.useMemo(() => C.map((e) => e.id), [C]),
          b = null == g ? void 0 : g.applicationId,
          L =
            (null == Z ? void 0 : Z.published) === !0 &&
            (null == g ? void 0 : g.isAvailable()) === !0,
          { data: P } = (0, p.IX)(b),
          { analyticsLocations: k } = (0, c.ZP)(),
          { subscription: M, subscriptionPlan: D } = (0, I.v9)(
            O,
            null != t ? t : void 0,
          ),
          F = (0, d.Z)(),
          y =
            null != P && null != N && L && (null == D ? void 0 : D.skuId) !== N;
        return (
          i.useEffect(() => {
            L &&
              null != N &&
              F &&
              !(v.Z.isFetchingForSKU(N) || v.Z.isLoadedForSKU(N)) &&
              o.Z.wait(() => {
                (0, u.GZ)(N);
              });
          }, [L, N, F]),
          {
            openModal: i.useCallback(() => {
              s()(null != P, "No application"),
                s()(null != N, "No SKU ID"),
                s()(L, "Cannot purchase this unpublished plan");
              (0, m.h)({
                activeSubscription: null != M ? M : null,
                analyticsSubscriptionType: S.NYc.APPLICATION,
                analyticsLocations: k,
                analyticsLocation: a,
                renderHeader: (e, n, t) =>
                  (0, l.jsx)(x.t, { step: t, onClose: () => n(!1) }),
                initialPlanId: R,
                skuId: N,
                guildId: t,
                planGroup: A,
                applicationId: P.id,
                showBenefitsFirst: T,
                onComplete: E,
                forcesTransitionToGuild: _,
              });
            }, [N, R, A, L, P, t, k, a, M, T, E, _]),
            canOpenModal: y,
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
        s = t.n(a),
        r = t(349361),
        o = t(698117);
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
            (0, l.jsx)(r.h2, {
              fade: !0,
              ...a,
              ref: (e) => {
                null != e && ((u.current = e), p());
              },
              onScroll: p,
              children: n,
            }),
            (0, l.jsx)("div", {
              className: s()(o.containerScrollGradient, t),
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
        s = t(541822),
        r = t(330711),
        o = t(770561);
      function u(e) {
        let {
            benefits: n,
            description: t,
            imgSrc: u,
            title: c,
            tag: d,
            FallbackIcon: p,
          } = e,
          m =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: o.container,
          children: (0, l.jsx)(s.Z, {
            className: o.scroller,
            children: (0, l.jsxs)("div", {
              className: o.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: o.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: o.headerBackground,
                      style: m,
                    }),
                    (0, l.jsx)("div", {
                      className: o.headerImage,
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
                  className: o.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: o.details,
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
                            className: o.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, l.jsxs)("div", {
                        className: o.benefits,
                        children: [
                          (0, l.jsx)(a.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: r.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
          return v;
        },
        U: function () {
          return m;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(557533),
        a = t.n(i),
        s = t(789978),
        r = t(368072),
        o = t(777207),
        u = t(692547),
        c = t(330711),
        d = t(56273),
        p = t(103077);
      function m(e) {
        let {
          description: n,
          imgSrc: t,
          renderPurchaseButton: i,
          onPurchase: m,
          title: v,
          onDetails: f,
          benefitItems: h,
          benefitsSummary: I,
        } = e;
        return (0, l.jsx)(s.tE, {
          children: (0, l.jsxs)("div", {
            className: a()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != f ? f() : null != m && m();
            },
            children: [
              (0, l.jsx)("div", {
                className: d.card,
                children: (0, l.jsxs)("div", {
                  className: d.body,
                  children: [
                    (0, l.jsx)(o.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: v,
                    }),
                    (0, l.jsx)("div", {
                      className: d.image,
                      children:
                        null != t
                          ? (0, l.jsx)("img", { src: t.toString(), alt: "" })
                          : (0, l.jsx)(r.V, {
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
                            e.stopPropagation(), null == m || m();
                          },
                        })
                      : null,
                    null != n &&
                      "" !== n &&
                      (0, l.jsx)(o.x, {
                        className: d.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: n,
                      }),
                  ],
                }),
              }),
              null != I &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(o.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: I,
                    }),
                  }),
                }),
              null != h &&
                h.length > 0 &&
                (0, l.jsx)("div", {
                  className: d.benefits,
                  children: (0, l.jsx)("div", {
                    className: d.benefitsContainer,
                    children: (0, l.jsxs)("div", {
                      className: d.benefitsList,
                      children: [
                        (0, l.jsx)(o.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        h.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                h.slice(0, 3),
                                (0, l.jsx)(o.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.STOREFRONT_MORE_BENEFITS.format(
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
                (0, l.jsx)(o.x, { variant: "text-sm/semibold", children: t }),
                null != i &&
                  (0, l.jsx)(o.x, {
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
        s = t(777207),
        r = t(692547),
        o = t(330711),
        u = t(350727);
      function c(e) {
        let { type: n } = e;
        return (0, l.jsx)(d, {
          icon:
            "user" === n
              ? (0, l.jsx)(a.t, {
                  size: "xxs",
                  color: r.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: r.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: u.container,
          children: [
            n,
            (0, l.jsx)(s.x, {
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
//# sourceMappingURL=d7615d137c330d074707.js.map
