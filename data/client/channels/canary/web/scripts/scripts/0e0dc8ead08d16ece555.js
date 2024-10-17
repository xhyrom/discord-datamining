"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81272"],
  {
    887706: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(399606),
        i = t(314897);
      function s() {
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
        s = t(626135),
        a = t(981631);
      function o(e, n, t) {
        s.default.track(a.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return s;
        },
      }),
        t(47120);
      var l = t(442837),
        i = t(580130);
      function s(e) {
        return (0, l.e7)(
          [i.Z],
          () => {
            let n = i.Z.getForSku(e);
            if (null == n) return !1;
            let t = 0;
            for (let e of n) {
              var l, s;
              let n =
                null !==
                  (s =
                    null === (l = e.endsAt) || void 0 === l
                      ? void 0
                      : l.getTime()) && void 0 !== s
                  ? s
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
        s = t(481060),
        a = t(264043),
        o = t(812206),
        r = t(572004),
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
            children: S,
            footer: x,
          } = e,
          T = (0, i.e7)(
            [o.Z, a.Z],
            () => {
              var e;
              return null !== (e = o.Z.getApplication(n)) && void 0 !== e
                ? e
                : a.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == T) return null;
        let N = (0, u.y)(T, 25),
          { termsOfServiceUrl: E, privacyPolicyUrl: g } = T;
        return (0, l.jsxs)(s.ModalRoot, {
          transitionState: f,
          size: s.ModalSize.DYNAMIC,
          className: v.modal,
          children: [
            (0, l.jsxs)(s.ModalHeader, {
              className: m.modalHeader,
              children: [
                (0, l.jsxs)(s.Clickable, {
                  className: m.modalTitle,
                  onClick: I,
                  children: [
                    null != N &&
                      (0, l.jsx)("img", {
                        src: N.href,
                        alt: "",
                        className: v.appIcon,
                      }),
                    (0, l.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      children: T.name,
                    }),
                  ],
                }),
                (0, l.jsx)(s.ModalCloseButton, {
                  onClick: h,
                  className: m.modalCloseBtn,
                }),
              ],
            }),
            S,
            (0, l.jsxs)(s.ModalFooter, {
              className: v.footer,
              children: [
                null != E && null != g
                  ? (0, l.jsx)(s.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: E,
                          ppUrl: g,
                        }),
                    })
                  : (0, l.jsx)(s.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: v.footerButtons,
                  children: [
                    r.wS &&
                      (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.FILLED,
                        size: s.Button.Sizes.ICON,
                        color: s.Button.Colors.PRIMARY,
                        "aria-label": p.Z.Messages.COPY_LINK,
                        className: v.linkButton,
                        innerClassName: v.innerLinkButton,
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
                          (0, r.JG)(e),
                            (0, s.showToast)(
                              (0, s.createToast)(
                                p.Z.Messages.COPIED_LINK,
                                s.ToastType.SUCCESS,
                              ),
                            ),
                            (0, c.X)(n, c.B.DETAILS_MODAL, t);
                        },
                        children: (0, l.jsx)(s.LinkIcon, {
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
            return I;
          },
        });
      var l = t(735250);
      t(470079);
      var i = t(752843),
        s = t(442837),
        a = t(481060),
        o = t(55563),
        r = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        m = t(680005),
        v = t(938337),
        f = t(981631),
        h = t(689938);
      function I(e) {
        var n, t, I, S;
        let {
            onClose: x,
            transitionState: T,
            skuId: N,
            appId: E,
            onHeaderTitleClick: g,
          } = e,
          _ = (0, s.e7)([r.Z], () => r.Z.getForSKU(N), [N]),
          R = (0, s.e7)([o.Z], () => o.Z.get(N), [N]),
          Z = (0, d.M)(N);
        if (null == R) return null;
        let C = null !== (t = R.name) && void 0 !== t ? t : "",
          O =
            null !==
              (I =
                null == _
                  ? void 0
                  : null === (n = _.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== I
              ? I
              : void 0,
          j =
            (null == _ ? void 0 : _.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(E, _.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          A = R.type === f.epS.DURABLE && Z,
          b =
            R.type === f.epS.DURABLE
              ? A
                ? h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : h.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = R;
        return null == L
          ? null
          : (0, l.jsx)(p.A, {
              appId: E,
              skuId: R.id,
              transitionState: T,
              onHeaderTitleClick: null != g ? g : x,
              onClose: x,
              footer: (0, l.jsx)(m.Y, { appId: E, sku: R }),
              children: (0, l.jsx)(v.i, {
                appId: E,
                skuId: R.id,
                title: C,
                description: O,
                imgSrc: j,
                tag: null != b ? (0, l.jsx)(i.V, { text: b }) : void 0,
                FallbackIcon: a.TicketIcon,
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
          return I;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(860911),
        s = t(481060),
        a = t(100527),
        o = t(906732),
        r = t(887706),
        u = t(929011),
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
          onHasClicked: s,
          skuId: a,
          subscriptionPlan: o,
          icon: r,
          canPurchase: u,
        } = e;
        return u
          ? (0, l.jsx)(x, {
              appId: n,
              skuId: a,
              onClick: (e) => {
                i(e), null == s || s();
              },
              className: t,
              children: (0, l.jsxs)("div", {
                className: h.btnContent,
                children: [
                  r,
                  f.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({
                    rate: (0, p.xg)(o),
                  }),
                ],
              }),
            })
          : (0, l.jsx)(T, {
              className: t,
              children: f.Z.Messages.APPLICATION_SUBSCRIPTION_CURRENT_PLAN,
            });
      }
      function S(e) {
        let {
            appId: n,
            className: t,
            onClick: i,
            onHasClicked: s,
            sku: r,
            icon: c,
          } = e,
          { analyticsLocations: d } = (0, o.ZP)(a.Z.APP_STOREFRONT),
          I = () => {
            (0, u.r)({ appId: n, skuId: r.id, analyticsLocations: d });
          },
          S = (0, m.M)(r.id),
          N = r.type === v.epS.DURABLE && S,
          { price: E } = r;
        return null == E
          ? null
          : N
            ? (0, l.jsx)(T, {
                className: t,
                children: f.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(x, {
                appId: n,
                skuId: r.id,
                onClick: (e) => {
                  (null != i ? i : I)(e), null == s || s();
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
      function x(e) {
        let { appId: n, skuId: t, onClick: a, ...o } = e,
          u = (0, r.Z)();
        return (0, l.jsx)(s.Button, {
          ...o,
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
                s = (0, i.Ui)(l, !1);
              (0, c.uL)(s);
              return;
            }
            null == a || a(e);
          },
        });
      }
      function T(e) {
        let { className: n, children: t } = e;
        return (0, l.jsx)(s.Button, {
          disabled: !0,
          className: n,
          look: s.Button.Looks.OUTLINED,
          color: s.Button.Colors.PRIMARY,
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
        s = t(269210),
        a = t(752843),
        o = t(481060),
        r = t(757746),
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
            onClose: S,
            skuId: x,
            guildId: T,
            transitionState: N,
            onHeaderTitleClick: E,
          } = e,
          { data: g } = (0, u.H)(x),
          { data: _ } = (0, r.Z)(x),
          R = i.useMemo(() => {
            var e;
            return (null == _ ? void 0 : _.thumbnail) != null &&
              null !== (e = m.Z.toURLSafe((0, p._W)(t, _.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, null == _ ? void 0 : _.thumbnail]),
          Z = i.useMemo(() => {
            let e = null == _ ? void 0 : _.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(t, e.icon),
              }));
          }, [t, null == _ ? void 0 : _.benefits]),
          { openModal: C, canOpenModal: O } = (0, d.Z)({
            skuId: x,
            subscribeForGuild: null != T ? T : void 0,
          });
        return null == _ || null == g || 0 === g.length
          ? null
          : (0, l.jsx)(v.A, {
              appId: t,
              skuId: x,
              transitionState: N,
              onHeaderTitleClick: null != E ? E : S,
              onClose: S,
              footer: (0, l.jsx)(f.p, {
                onClick: C,
                appId: t,
                subscriptionType: I,
                skuId: x,
                subscriptionPlan: g[0],
                canPurchase: O,
              }),
              children: (0, l.jsx)(h.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != Z
                    ? Z.map((e) =>
                        (0, l.jsx)(
                          s.G,
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
                  null !== (n = _.description) && void 0 !== n ? n : void 0,
                imgSrc: R,
                title: g[0].name,
                tag: (0, l.jsx)(a.Z, { type: I }),
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
        s = t(512100),
        a = t(906732),
        o = t(626135),
        r = t(981631);
      function u(e) {
        let { appId: n, skuId: t, ...u } = e,
          { analyticsLocations: c } = (0, a.ZP)();
        return (
          i.useEffect(() => {
            o.default.track(r.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
              application_id: n,
              sku_id: t,
              location_stack: c,
            });
          }, [c, n, t]),
          (0, l.jsx)(s.u, { ...u })
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
        s = t.n(i),
        a = t(481060),
        o = t(496929),
        r = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        p = t(981631);
      function m(e) {
        let {
          initialPlanId: n,
          activeSubscription: i,
          analyticsObject: s,
          analyticsLocation: o,
          analyticsLocations: r,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: m,
          skuId: v,
          guildId: f,
          reviewWarningMessage: h,
          applicationId: I,
          showBenefitsFirst: S,
          onComplete: x,
          forcesTransitionToGuild: T,
        } = e;
        (0, a.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              a = (
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
              N = p({ guildId: f, showBenefitsFirst: S });
            return (t) =>
              (0, l.jsx)(e, {
                applicationId: I,
                activeSubscription: i,
                stepConfigs: N,
                skuIDs: [v],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(a, {
                    ...t,
                    initialPlanId: n,
                    skuId: v,
                    analyticsLocations: r,
                    analyticsObject: s,
                    analyticsLocation: o,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: m,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: null != f ? f : void 0,
                    onComplete: x,
                    forcesTransitionToGuild: T,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let v = async (e, n) => {
        let t = (await (0, o.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        s()(null == t, "User already has an active subscription to this SKU");
      };
      async function f(e) {
        var n;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: a,
            analyticsLocations: o,
            renderHeader: d,
          } = e,
          f = c.Z.get(l),
          h = u.Z.getForSKU(l);
        s()(null != f, "Failed to find SKU");
        let I = (0, r.KW)(f.flags);
        s()(I, "Guild application subscriptions unsupported!"),
          await v(t, l),
          m({
            initialPlanId:
              null != i
                ? i
                : null === (n = h[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: o,
            analyticsLocationObject: a,
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
        s = t(481060),
        a = t(976255),
        o = t(667),
        r = t(626135),
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
        (0, s.openModalLazy)(
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
              let { onClose: i, ...s } = t;
              return (0, l.jsx)(e, {
                ...s,
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
                r.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: I,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: v,
                  is_gift: !1,
                  application_id: n,
                  location_stack: m,
                }),
                (0, a.fw)(),
                (0, o.p)(),
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
        s = t(442837),
        a = t(570140);
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
      let r = { lastGuildDismissedTime: {} };
      class u extends (i = s.ZP.DeviceSettingsStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
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
        (n.Z = new u(a.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
          },
        }));
    },
    270144: function (e, n, t) {
      t.d(n, {
        CR: function () {
          return _;
        },
        h6: function () {
          return N;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return g;
        },
        sp: function () {
          return E;
        },
        v9: function () {
          return R;
        },
      }),
        t(653041),
        t(47120),
        t(773603),
        t(789020);
      var l,
        i,
        s = t(470079),
        a = t(442837),
        o = t(496929),
        r = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        p = t(55563),
        m = t(801249),
        v = t(106976),
        f = t(307643),
        h = t(488915),
        I = t(171246),
        S = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let T = (e) => {
        let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
          i = (0, a.e7)(
            [h.Z],
            () => (null != n ? h.Z.getEntitlementsForGuildFetchState(n) : null),
            [n],
          );
        return (
          s.useEffect(() => {
            if (null == n || n === S.ME) return;
            let e = h.Z.getEntitlementsForGuildFetchState(n);
            t && (e === h.M.NOT_FETCHED || l) && (0, v.i1)(n);
          }, [n, t, l]),
          { entitlementsLoaded: i === h.M.FETCHED }
        );
      };
      function N(e) {
        var n;
        let t =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : S.lds,
          { entitlementsLoaded: l } = T({
            guildId: t,
            canFetch: (0, a.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, e)),
          }),
          i = (0, a.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
          o = (0, a.Wu)([h.Z], () => {
            let e = h.Z.getEntitlementsForGuild(t),
              n = h.Z.getEntitlementsForGuild(t, !1),
              l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
          }),
          r = (0, a.cj)([p.Z], () => p.Z.getSKUs()),
          c = s.useMemo(
            () =>
              o.filter((e) => {
                let n = r[e.skuId];
                return null != n && n.available;
              }),
            [o, r],
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
      let E = (e) => {
          let [n, t] = s.useState(!1),
            l = s.useMemo(() => e.map(I.bZ), [e]);
          return (
            s.useEffect(() => {
              t(!0),
                Promise.all(l.map((e) => (0, v.vY)(e)))
                  .catch(() => {})
                  .then(() => {
                    t(!1);
                  });
            }, [l]),
            { loading: n }
          );
        },
        g = () => {
          let [e, n] = s.useState(0);
          return (
            s.useEffect(() => {
              n(1),
                Promise.all([
                  (0, o.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, o.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.qc2.PURCHASE,
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
      function _(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [l, i] = s.useState([]),
          [o, u] = s.useState(!1);
        return (
          s.useLayoutEffect(() => {
            null != e &&
              t &&
              (u(!0),
              (0, f.tn)(e, n)
                .then(i)
                .finally(() => {
                  u(!1);
                }));
          }, [e, n, t]),
          {
            guilds: (0, a.Wu)(
              [r.Z],
              () => l.map((e) => r.Z.getGuild(e)).filter((e) => null != e),
              [l],
            ),
            isFetching: o,
          }
        );
      }
      function R(e, n) {
        return (0, a.cj)([d.ZP, c.Z], () => {
          var t, l, i, s, a;
          for (let o of null !==
            (t = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== t
            ? t
            : []) {
            if (
              (0, I.KK)(
                null !== (s = null == e ? void 0 : e.flags) && void 0 !== s
                  ? s
                  : 0,
              ) &&
              null != n &&
              (null === (l = o.metadata) || void 0 === l
                ? void 0
                : l.application_subscription_guild_id) !== n
            )
              continue;
            let t = (
              null !==
                (a =
                  null === (i = o.renewalMutations) || void 0 === i
                    ? void 0
                    : i.items) && void 0 !== a
                ? a
                : o.items
            )
              .map((e) => c.Z.get(e.planId))
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
            if (null != t) return { subscription: o, subscriptionPlan: t };
          }
          return {};
        });
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(558381),
        s = t(551428);
      let a = (0, l.Kb)(s.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? s.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (e, n, t) {
      t.d(n, {
        H: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(821849),
        s = t(509545);
      let a = (0, l.Kb)(s.Z, {
        queryId: (e) => (null != e ? ["subscription-plans", e] : null),
        get: (e) => (null != e ? s.Z.getForSKU(e) : []),
        load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
        useStateHook: l.Wu,
      });
    },
    929011: function (e, n, t) {
      t.d(n, {
        H: function () {
          return c;
        },
        r: function () {
          return d;
        },
      }),
        t(789020);
      var l = t(735250),
        i = t(481060),
        s = t(724870),
        a = t(87484),
        o = t(171246),
        r = t(689011),
        u = t(981631);
      async function c(e) {
        let {
            subscriptionPlanId: n,
            sku: a,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: p,
            analyticsLocations: m,
            analyticsLocation: v,
          } = e,
          { promise: f, resolve: h } = Promise.withResolvers();
        if ((0, o.KK)(a.flags)) {
          let { promise: e, resolve: n } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: e } = await t
              .e("43889")
              .then(t.bind(t, 279875));
            return (t) =>
              (0, l.jsx)(e, {
                transitionState: t.transitionState,
                onClose: t.onClose,
                sku: a,
                onSelect: n,
                currentGuildId: p,
              });
          }),
            (p = await e);
        }
        return (
          (0, s.h)({
            initialPlanId: n,
            skuId: a.id,
            activeSubscription: null != d ? d : null,
            applicationId: a.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (e, n, t) =>
              (0, l.jsx)(r.t, { step: t, onClose: () => n(!1) }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: v,
            onComplete: h,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          f
        );
      }
      function d(e) {
        let { appId: n, skuId: t, analyticsLocations: l } = e;
        (0, a.Z)({ applicationId: n, skuId: t, analyticsLocations: l });
      }
    },
    696906: function (e, n, t) {
      t(390547);
      var l = t(470079),
        i = t(512722),
        s = t.n(i),
        a = t(442837),
        o = t(570140),
        r = t(821849),
        u = t(906732),
        c = t(887706),
        d = t(728345),
        p = t(509545),
        m = t(55563),
        v = t(551428),
        f = t(270144),
        h = t(929011);
      n.Z = (e) => {
        var n, t;
        let {
            subscribeForGuild: i,
            analyticsLocation: I,
            skuId: S,
            onComplete: x,
          } = e,
          T = (0, a.e7)([m.Z], () => (null != S ? m.Z.get(S) : void 0), [S]),
          N = (0, a.e7)([v.Z], () => (null != S ? v.Z.getForSKU(S) : void 0), [
            S,
          ]),
          E =
            null ===
              (n = (0, a.Wu)([p.Z], () => (null != S ? p.Z.getForSKU(S) : []), [
                S,
              ])[0]) || void 0 === n
              ? void 0
              : n.id,
          g = (0, a.e7)(
            [m.Z],
            () => (null != S ? m.Z.getParentSKU(S) : void 0),
            [S],
          ),
          _ = null == g ? void 0 : g.bundledSkuIds,
          R = (0, a.Wu)(
            [p.Z],
            () => {
              var e;
              return null !==
                (e = null == _ ? void 0 : _.flatMap(p.Z.getForSKU)) &&
                void 0 !== e
                ? e
                : [];
            },
            [_],
          ),
          Z = l.useMemo(() => R.map((e) => e.id), [R]),
          C = null == T ? void 0 : T.applicationId,
          O =
            (null == N ? void 0 : N.published) === !0 &&
            (null == T ? void 0 : T.isAvailable()) === !0,
          { data: j } = (0, d.IX)(C),
          { analyticsLocations: A } = (0, u.ZP)(),
          { subscription: b, subscriptionPlan: L } =
            null !== (t = (0, f.v9)(g, null != i ? i : void 0)) && void 0 !== t
              ? t
              : {},
          P = (0, c.Z)(),
          k =
            null != j && null != S && O && (null == L ? void 0 : L.skuId) !== S;
        return (
          l.useEffect(() => {
            O &&
              null != S &&
              P &&
              !(p.Z.isFetchingForSKU(S) || p.Z.isLoadedForSKU(S)) &&
              o.Z.wait(() => {
                (0, r.GZ)(S);
              });
          }, [O, S, P]),
          {
            openModal: l.useCallback(() => {
              s()(null != j, "No application"),
                s()(null != S, "No SKU ID"),
                s()(O, "Cannot purchase this unpublished plan"),
                (0, h.H)({
                  subscriptionPlanId: E,
                  sku: T,
                  subscriptionGroupPlanIds: Z,
                  activeSubscription: b,
                  subscribeForGuild: i,
                  analyticsLocations: A,
                  analyticsLocation: I,
                }).then(() => {
                  null == x || x();
                });
            }, [j, S, O, E, T, Z, b, i, A, I, x]),
            canOpenModal: k,
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
        s = t(557533),
        a = t.n(s),
        o = t(349361),
        r = t(698117);
      function u(e) {
        let { children: n, gradientClassName: t, ...s } = e,
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
              ...s,
              ref: (e) => {
                null != e && ((u.current = e), p());
              },
              onScroll: p,
              children: n,
            }),
            (0, l.jsx)("div", {
              className: a()(r.containerScrollGradient, t),
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
        s = t(777207),
        a = t(541822),
        o = t(330711),
        r = t(770561);
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
          className: r.container,
          children: (0, l.jsx)(a.Z, {
            className: r.scroller,
            children: (0, l.jsxs)("div", {
              className: r.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: r.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: r.headerBackground,
                      style: m,
                    }),
                    (0, l.jsx)("div", {
                      className: r.headerImage,
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
                  className: r.content,
                  children: [
                    (0, l.jsxs)("div", {
                      className: r.details,
                      children: [
                        null != d && (0, l.jsx)("div", { children: d }),
                        (0, l.jsx)(i.X, {
                          color: "header-primary",
                          variant: "heading-xl/semibold",
                          children: c,
                        }),
                        null != t &&
                          "" !== t &&
                          (0, l.jsx)(s.x, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: r.description,
                            children: t,
                          }),
                      ],
                    }),
                    null != n &&
                      (0, l.jsxs)("div", {
                        className: r.benefits,
                        children: [
                          (0, l.jsx)(s.x, {
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
          return v;
        },
        U: function () {
          return m;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(557533),
        s = t.n(i),
        a = t(789978),
        o = t(368072),
        r = t(777207),
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
        return (0, l.jsx)(a.tE, {
          children: (0, l.jsxs)("div", {
            className: s()(d.container, p.hoverCard),
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
                    (0, l.jsx)(r.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: v,
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
                            e.stopPropagation(), null == m || m();
                          },
                        })
                      : null,
                    null != n &&
                      "" !== n &&
                      (0, l.jsx)(r.x, {
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
                  children: (0, l.jsx)(r.x, {
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
                        (0, l.jsx)(r.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        h.length > 3
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                h.slice(0, 3),
                                (0, l.jsx)(r.x, {
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
                (0, l.jsx)(r.x, { variant: "text-sm/semibold", children: t }),
                null != i &&
                  (0, l.jsx)(r.x, {
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
        s = t(220427),
        a = t(777207),
        o = t(692547),
        r = t(330711),
        u = t(350727);
      function c(e) {
        let { type: n } = e;
        return (0, l.jsx)(d, {
          icon:
            "user" === n
              ? (0, l.jsx)(s.t, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: o.Z.colors.INTERACTIVE_NORMAL,
                }),
          text:
            "user" === n
              ? r.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
              : r.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
        });
      }
      function d(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: u.container,
          children: [
            n,
            (0, l.jsx)(a.x, {
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
//# sourceMappingURL=0e0dc8ead08d16ece555.js.map
