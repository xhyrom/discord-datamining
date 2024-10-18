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
          return a;
        },
      });
      var l,
        i,
        r = t(626135),
        o = t(981631);
      function a(e, n, t) {
        r.default.track(o.rMx.STOREFRONT_COPY_LINK_CLICKED, {
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
          return f;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        r = t(481060),
        o = t(264043),
        a = t(812206),
        s = t(572004),
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
            onClose: I,
            onHeaderTitleClick: h,
            children: S,
            footer: x,
          } = e,
          g = (0, i.e7)(
            [a.Z, o.Z],
            () => {
              var e;
              return null !== (e = a.Z.getApplication(n)) && void 0 !== e
                ? e
                : o.Z.getApplicationRecord(n);
            },
            [n],
          );
        if (null == g) return null;
        let T = (0, u.y)(g, 25),
          { termsOfServiceUrl: E, privacyPolicyUrl: N } = g;
        return (0, l.jsxs)(r.ModalRoot, {
          transitionState: f,
          size: r.ModalSize.DYNAMIC,
          className: v.modal,
          children: [
            (0, l.jsxs)(r.ModalHeader, {
              className: m.modalHeader,
              children: [
                (0, l.jsxs)(r.Clickable, {
                  className: m.modalTitle,
                  onClick: h,
                  children: [
                    null != T &&
                      (0, l.jsx)("img", {
                        src: T.href,
                        alt: "",
                        className: v.appIcon,
                      }),
                    (0, l.jsx)(r.Heading, {
                      variant: "heading-md/semibold",
                      children: g.name,
                    }),
                  ],
                }),
                (0, l.jsx)(r.ModalCloseButton, {
                  onClick: I,
                  className: m.modalCloseBtn,
                }),
              ],
            }),
            S,
            (0, l.jsxs)(r.ModalFooter, {
              className: v.footer,
              children: [
                null != E && null != N
                  ? (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-sm/normal",
                      children:
                        p.Z.Messages.STOREFRONT_DETAILS_TOS_AND_PRIVACY.format({
                          tosUrl: E,
                          ppUrl: N,
                        }),
                    })
                  : (0, l.jsx)(r.Text, {
                      color: "header-primary",
                      variant: "text-xs/normal",
                      children: p.Z.Messages.STOREFRONT_NO_TOS_PP,
                    }),
                (0, l.jsxs)("div", {
                  className: v.footerButtons,
                  children: [
                    s.wS &&
                      (0, l.jsx)(r.Button, {
                        look: r.Button.Looks.FILLED,
                        size: r.Button.Sizes.ICON,
                        color: r.Button.Colors.PRIMARY,
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
                          (0, s.JG)(e),
                            (0, r.showToast)(
                              (0, r.createToast)(
                                p.Z.Messages.COPIED_LINK,
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
        r = t(442837),
        o = t(481060),
        a = t(55563),
        s = t(551428),
        u = t(73346),
        c = t(591759),
        d = t(110742),
        p = t(886253),
        m = t(680005),
        v = t(938337),
        f = t(981631),
        I = t(689938);
      function h(e) {
        var n, t, h, S;
        let {
            onClose: x,
            transitionState: g,
            skuId: T,
            appId: E,
            onHeaderTitleClick: N,
          } = e,
          R = (0, r.e7)([s.Z], () => s.Z.getForSKU(T), [T]),
          O = (0, r.e7)([a.Z], () => a.Z.get(T), [T]),
          _ = (0, d.M)(T);
        if (null == O) return null;
        let Z = null !== (t = O.name) && void 0 !== t ? t : "",
          C =
            null !==
              (h =
                null == R
                  ? void 0
                  : null === (n = R.description) || void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== h
              ? h
              : void 0,
          b =
            (null == R ? void 0 : R.headerBackground) != null &&
            null !==
              (S = c.Z.toURLSafe((0, u._W)(E, R.headerBackground, 256))) &&
            void 0 !== S
              ? S
              : void 0,
          j = O.type === f.epS.DURABLE && _,
          A =
            O.type === f.epS.DURABLE
              ? j
                ? I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
                : I.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
              : void 0,
          { price: L } = O;
        return null == L
          ? null
          : (0, l.jsx)(p.A, {
              appId: E,
              skuId: O.id,
              transitionState: g,
              onHeaderTitleClick: null != N ? N : x,
              onClose: x,
              footer: (0, l.jsx)(m.Y, { appId: E, sku: O }),
              children: (0, l.jsx)(v.i, {
                appId: E,
                skuId: O.id,
                title: Z,
                description: C,
                imgSrc: b,
                tag: null != A ? (0, l.jsx)(i.V, { text: A }) : void 0,
                FallbackIcon: o.TicketIcon,
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
          return S;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(860911),
        r = t(481060),
        o = t(100527),
        a = t(906732),
        s = t(887706),
        u = t(929011),
        c = t(696906),
        d = t(703656),
        p = t(626135),
        m = t(937615),
        v = t(110742),
        f = t(981631),
        I = t(689938),
        h = t(962083);
      function S(e) {
        let {
            appId: n,
            className: t,
            onClick: i,
            onHasClicked: r,
            skuId: o,
            subscriptionPlan: a,
            icon: s,
            cannotOpenReason: u,
          } = e,
          d = (0, m.xg)(a),
          p = null == u || u === c.HO.LoggedOut || u === c.HO.Loading,
          v = (0, c.FC)(u, d);
        return p
          ? (0, l.jsx)(g, {
              appId: n,
              skuId: o,
              onClick: (e) => {
                i(e), null == r || r();
              },
              className: t,
              submitting: u === c.HO.Loading,
              children: (0, l.jsxs)("div", {
                className: h.btnContent,
                children: [
                  s,
                  I.Z.Messages.STOREFRONT_SUBSCRIBE_FOR.format({ rate: d }),
                ],
              }),
            })
          : (0, l.jsx)(T, { className: t, children: v });
      }
      function x(e) {
        let {
            appId: n,
            className: t,
            onClick: i,
            onHasClicked: r,
            sku: s,
            icon: c,
          } = e,
          { analyticsLocations: d } = (0, a.ZP)(o.Z.APP_STOREFRONT),
          p = () => {
            (0, u.r)({ appId: n, skuId: s.id, analyticsLocations: d });
          },
          S = (0, v.M)(s.id),
          x = s.type === f.epS.DURABLE && S,
          { price: E } = s;
        return null == E
          ? null
          : x
            ? (0, l.jsx)(T, {
                className: t,
                children: I.Z.Messages.COLLECTIBLES_ALREADY_OWNED,
              })
            : (0, l.jsx)(g, {
                appId: n,
                skuId: s.id,
                onClick: (e) => {
                  (null != i ? i : p)(e), null == r || r();
                },
                className: t,
                children: (0, l.jsxs)("div", {
                  className: h.btnContent,
                  children: [
                    c,
                    I.Z.Messages.STOREFRONT_PURCHASE_FOR.format({
                      price: (0, m.T4)(E.amount, E.currency),
                    }),
                  ],
                }),
              });
      }
      function g(e) {
        let { appId: n, skuId: t, onClick: o, ...a } = e,
          u = (0, s.Z)();
        return (0, l.jsx)(r.Button, {
          ...a,
          onClick: (e) => {
            if (
              (p.default.track(f.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: n,
                sku_id: t,
              }),
              !u)
            ) {
              e.preventDefault(), e.stopPropagation();
              let l = f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t),
                r = (0, i.Ui)(l, !1);
              (0, d.uL)(r);
              return;
            }
            null == o || o(e);
          },
        });
      }
      function T(e) {
        let { className: n, children: t } = e;
        return (0, l.jsx)(r.Button, {
          disabled: !0,
          className: n,
          look: r.Button.Looks.OUTLINED,
          color: r.Button.Colors.PRIMARY,
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
        r = t(269210),
        o = t(752843),
        a = t(481060),
        s = t(757746),
        u = t(930155),
        c = t(889989),
        d = t(696906),
        p = t(73346),
        m = t(591759),
        v = t(886253),
        f = t(680005),
        I = t(938337);
      function h(e) {
        var n;
        let {
            appId: t,
            subscriptionType: h,
            onClose: S,
            skuId: x,
            guildId: g,
            transitionState: T,
            onHeaderTitleClick: E,
          } = e,
          { data: N } = (0, u.H)(x),
          { data: R } = (0, s.Z)(x),
          O = i.useMemo(() => {
            var e;
            return (null == R ? void 0 : R.thumbnail) != null &&
              null !== (e = m.Z.toURLSafe((0, p._W)(t, R.thumbnail, 256))) &&
              void 0 !== e
              ? e
              : void 0;
          }, [t, null == R ? void 0 : R.thumbnail]),
          _ = i.useMemo(() => {
            let e = null == R ? void 0 : R.benefits;
            if (null != e && 0 !== e.length)
              return e.map((e) => ({
                id: e.id,
                title: e.name,
                description: e.description,
                icon: (0, c.n)(t, e.icon),
              }));
          }, [t, null == R ? void 0 : R.benefits]),
          { openModal: Z, cannotOpenReason: C } = (0, d.ZP)({
            skuId: x,
            subscribeForGuild: null != g ? g : void 0,
          });
        return null == R || null == N || 0 === N.length
          ? null
          : (0, l.jsx)(v.A, {
              appId: t,
              skuId: x,
              transitionState: T,
              onHeaderTitleClick: null != E ? E : S,
              onClose: S,
              footer: (0, l.jsx)(f.p, {
                onClick: Z,
                appId: t,
                subscriptionType: h,
                skuId: x,
                subscriptionPlan: N[0],
                cannotOpenReason: C,
              }),
              children: (0, l.jsx)(I.i, {
                appId: t,
                skuId: x,
                benefits:
                  null != _
                    ? _.map((e) =>
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
                  null !== (n = R.description) && void 0 !== n ? n : void 0,
                imgSrc: O,
                title: N[0].name,
                tag: (0, l.jsx)(o.Z, { type: h }),
                FallbackIcon: a.BadgeIcon,
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
        o = t(906732),
        a = t(626135),
        s = t(981631);
      function u(e) {
        let { appId: n, skuId: t, ...u } = e,
          { analyticsLocations: c } = (0, o.ZP)();
        return (
          i.useEffect(() => {
            a.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
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
        r = t.n(i),
        o = t(481060),
        a = t(496929),
        s = t(171246),
        u = t(509545),
        c = t(55563),
        d = t(987209),
        p = t(981631);
      function m(e) {
        let {
          initialPlanId: n,
          activeSubscription: i,
          analyticsObject: r,
          analyticsLocation: a,
          analyticsLocations: s,
          analyticsSubscriptionType: u,
          renderHeader: c,
          planGroup: m,
          skuId: v,
          guildId: f,
          reviewWarningMessage: I,
          applicationId: h,
          showBenefitsFirst: S,
          onComplete: x,
          forcesTransitionToGuild: g,
        } = e;
        (0, o.openModalLazy)(
          async () => {
            let { PaymentContextProvider: e } = await Promise.resolve().then(
                t.bind(t, 598),
              ),
              o = (
                await Promise.all([
                  t.e("52249"),
                  t.e("26182"),
                  t.e("32776"),
                  t.e("8573"),
                ]).then(t.bind(t, 405083))
              ).default,
              { getApplicationPaymentSteps: p } = await Promise.all([
                t.e("96427"),
                t.e("77298"),
                t.e("23357"),
                t.e("12013"),
                t.e("99783"),
                t.e("26182"),
                t.e("95900"),
                t.e("31269"),
              ]).then(t.bind(t, 759386)),
              T = p({ guildId: f, showBenefitsFirst: S });
            return (t) =>
              (0, l.jsx)(e, {
                applicationId: h,
                activeSubscription: i,
                stepConfigs: T,
                skuIDs: [v],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(o, {
                    ...t,
                    initialPlanId: n,
                    skuId: v,
                    analyticsLocations: s,
                    analyticsObject: r,
                    analyticsLocation: a,
                    analyticsSubscriptionType: u,
                    renderHeader: c,
                    planGroup: m,
                    reviewWarningMessage: I,
                    applicationId: h,
                    guildId: null != f ? f : void 0,
                    onComplete: x,
                    forcesTransitionToGuild: g,
                  }),
                }),
              });
          },
          { onCloseRequest: p.dG4 },
        );
      }
      let v = async (e, n) => {
        let t = (await (0, a.yD)(e))
          .filter((e) => null == e.ends_at || new Date(e.ends_at) > new Date())
          .find((e) => e.sku_id === n);
        r()(null == t, "User already has an active subscription to this SKU");
      };
      async function f(e) {
        var n;
        let {
            applicationId: t,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: o,
            analyticsLocations: a,
            renderHeader: d,
          } = e,
          f = c.Z.get(l),
          I = u.Z.getForSKU(l);
        r()(null != f, "Failed to find SKU");
        let h = (0, s.KW)(f.flags);
        r()(h, "Guild application subscriptions unsupported!"),
          await v(t, l),
          m({
            initialPlanId:
              null != i
                ? i
                : null === (n = I[0]) || void 0 === n
                  ? void 0
                  : n.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: o,
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
        r = t(481060),
        o = t(976255),
        a = t(667),
        s = t(626135),
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
          I = !1,
          h = (0, i.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: e } = await Promise.all([
              t.e("96427"),
              t.e("77298"),
              t.e("23357"),
              t.e("12013"),
              t.e("52249"),
              t.e("99783"),
              t.e("26182"),
              t.e("95900"),
              t.e("32776"),
              t.e("57308"),
            ]).then(t.bind(t, 409600));
            return (t) => {
              let { onClose: i, ...r } = t;
              return (0, l.jsx)(e, {
                ...r,
                loadId: h,
                applicationId: n,
                skuId: c,
                analyticsLocations: m,
                analyticsLocationObject: v,
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
            contextKey: f,
            onCloseCallback: () => {
              !I &&
                s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: h,
                  payment_type: u.Zuq[u.GZQ.ONE_TIME],
                  location: v,
                  is_gift: !1,
                  application_id: n,
                  location_stack: m,
                }),
                (0, o.fw)(),
                (0, a.p)(),
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
        o = t(570140);
      function a(e, n, t) {
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
      class u extends (i = r.ZP.DeviceSettingsStore) {
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
      a(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        a(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (n.Z = new u(o.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            l.lastGuildDismissedTime[n] = Date.now();
          },
        }));
    },
    270144: function (e, n, t) {
      t.d(n, {
        CR: function () {
          return R;
        },
        Ev: function () {
          return _;
        },
        LM: function () {
          return g;
        },
        cr: function () {
          return C;
        },
        h6: function () {
          return T;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return N;
        },
        sp: function () {
          return E;
        },
      }),
        t(653041),
        t(47120),
        t(773603),
        t(789020);
      var l,
        i,
        r = t(470079),
        o = t(442837),
        a = t(496929),
        s = t(430824),
        u = t(496675),
        c = t(509545),
        d = t(78839),
        p = t(55563),
        m = t(801249),
        v = t(106976),
        f = t(307643),
        I = t(488915),
        h = t(171246),
        S = t(981631);
      let x = 12633 == t.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let g = (e) => {
        let { guildId: n, canFetch: t = !0, forceRefetch: l = !1 } = e,
          i = (0, o.e7)(
            [I.Z],
            () => (null != n ? I.Z.getEntitlementsForGuildFetchState(n) : null),
            [n],
          );
        return (
          r.useEffect(() => {
            if (null == n || n === S.ME) return;
            let e = I.Z.getEntitlementsForGuildFetchState(n);
            t && (e === I.M.NOT_FETCHED || l) && (0, v.i1)(n);
          }, [n, t, l]),
          { entitlementsLoaded: i === I.M.FETCHED }
        );
      };
      function T(e) {
        var n;
        let t =
            null !== (n = null == e ? void 0 : e.id) && void 0 !== n
              ? n
              : S.lds,
          { entitlementsLoaded: l } = g({
            guildId: t,
            canFetch: (0, o.e7)([u.Z], () => u.Z.can(S.Plq.ADMINISTRATOR, e)),
          }),
          i = (0, o.e7)([m.Z], () => m.Z.getLastGuildDismissedTime(t)),
          a = (0, o.Wu)([I.Z], () => {
            let e = I.Z.getEntitlementsForGuild(t),
              n = I.Z.getEntitlementsForGuild(t, !1),
              l = e.map((e) => e.applicationId);
            return n.filter((e) => !l.includes(e.applicationId));
          }),
          s = (0, o.cj)([p.Z], () => p.Z.getSKUs()),
          c = r.useMemo(
            () =>
              a.filter((e) => {
                let n = s[e.skuId];
                return null != n && n.available;
              }),
            [a, s],
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
          let [n, t] = r.useState(!1),
            l = r.useMemo(() => e.map(h.bZ), [e]);
          return (
            r.useEffect(() => {
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
        N = () => {
          let [e, n] = r.useState(0);
          return (
            r.useEffect(() => {
              n(1),
                Promise.all([
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: S.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, a.p0)({
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
      function R(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [l, i] = r.useState([]),
          [a, u] = r.useState(!1);
        return (
          r.useLayoutEffect(() => {
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
            guilds: (0, o.Wu)(
              [s.Z],
              () => l.map((e) => s.Z.getGuild(e)).filter((e) => null != e),
              [l],
            ),
            isFetching: a,
          }
        );
      }
      let O = (e) => e.items;
      function _(e, n) {
        return b(e, n, O);
      }
      let Z = (e) => {
        var n;
        return null === (n = e.renewalMutations) || void 0 === n
          ? void 0
          : n.items;
      };
      function C(e, n) {
        return b(e, n, Z);
      }
      function b(e, n, t) {
        let l = null == e ? void 0 : e.bundledSkuIds,
          i = null == e ? void 0 : e.flags,
          [a, s] = (0, o.Wu)(
            [d.ZP, c.Z],
            () => {
              var e, r;
              for (let o of null !==
                (e = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== e
                ? e
                : []) {
                if (
                  (0, h.KK)(null != i ? i : 0) &&
                  null != n &&
                  (null === (r = o.metadata) || void 0 === r
                    ? void 0
                    : r.application_subscription_guild_id) !== n
                )
                  continue;
                let e = t(o);
                if (null == e) continue;
                let a = e
                  .map((e) => c.Z.get(e.planId))
                  .find((e) => {
                    var n;
                    return (
                      null != e &&
                      null !== (n = null == l ? void 0 : l.includes(e.skuId)) &&
                      void 0 !== n &&
                      n
                    );
                  });
                if (null != a) return [o, a];
              }
              return [];
            },
            [i, n, t, l],
          );
        return r.useMemo(() => {
          if (null != a && null != s)
            return { subscription: a, subscriptionPlan: s };
        }, [a, s]);
      }
    },
    757746: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(558381),
        r = t(551428);
      let o = (0, l.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["storeListing", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : null),
        load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
        useStateHook: l.e7,
      });
    },
    930155: function (e, n, t) {
      t.d(n, {
        H: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(821849),
        r = t(509545);
      let o = (0, l.Kb)(r.Z, {
        queryId: (e) => (null != e ? ["subscription-plans", e] : null),
        get: (e) => (null != e ? r.Z.getForSKU(e) : []),
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
        r = t(724870),
        o = t(87484),
        a = t(171246),
        s = t(689011),
        u = t(981631);
      async function c(e) {
        let {
            subscriptionPlanId: n,
            sku: o,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: p,
            analyticsLocations: m,
            analyticsLocation: v,
          } = e,
          { promise: f, resolve: I } = Promise.withResolvers();
        if ((0, a.KK)(o.flags)) {
          let { promise: e, resolve: n } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: e } = await t
              .e("43889")
              .then(t.bind(t, 279875));
            return (t) =>
              (0, l.jsx)(e, {
                transitionState: t.transitionState,
                onClose: t.onClose,
                sku: o,
                onSelect: n,
                currentGuildId: p,
              });
          }),
            (p = await e);
        }
        return (
          (0, r.h)({
            initialPlanId: n,
            skuId: o.id,
            activeSubscription: null != d ? d : null,
            applicationId: o.applicationId,
            planGroup: c,
            guildId: p,
            renderHeader: (e, n, t) =>
              (0, l.jsx)(s.t, { step: t, onClose: () => n(!1) }),
            analyticsSubscriptionType: u.NYc.APPLICATION,
            analyticsLocations: m,
            analyticsLocation: v,
            onComplete: I,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          f
        );
      }
      function d(e) {
        let { appId: n, skuId: t, analyticsLocations: l } = e;
        (0, o.Z)({ applicationId: n, skuId: t, analyticsLocations: l });
      }
    },
    696906: function (e, n, t) {
      t.d(n, {
        FC: function () {
          return E;
        },
        HO: function () {
          return l;
        },
      }),
        t(390547),
        t(789020);
      var l,
        i,
        r = t(470079),
        o = t(512722),
        a = t.n(o),
        s = t(442837),
        u = t(570140),
        c = t(821849),
        d = t(906732),
        p = t(887706),
        m = t(728345),
        v = t(509545),
        f = t(55563),
        I = t(551428),
        h = t(270144),
        S = t(488915),
        x = t(171246),
        g = t(929011),
        T = t(689938);
      function E(e, n) {
        let t;
        switch (e) {
          case 3:
            t = T.Z.Messages.STOREFRONT_UPCOMING_PLAN_FOR.format({ rate: n });
            break;
          case 2:
            t = T.Z.Messages.STOREFRONT_CURRENT_PLAN_FOR.format({ rate: n });
            break;
          case 4:
            t = T.Z.Messages.STOREFRONT_ALREADY_SUBSCRIBED;
            break;
          case 1:
            t = T.Z.Messages.STOREFRONT_ITEM_UNAVAILABLE;
        }
        return t;
      }
      ((i = l || (l = {}))[(i.Loading = 0)] = "Loading"),
        (i[(i.ItemUnavailable = 1)] = "ItemUnavailable"),
        (i[(i.CurrentPlan = 2)] = "CurrentPlan"),
        (i[(i.UpcomingPlan = 3)] = "UpcomingPlan"),
        (i[(i.OtherSubscription = 4)] = "OtherSubscription"),
        (i[(i.LoggedOut = 5)] = "LoggedOut");
      n.ZP = (e) => {
        var n, t, l;
        let i,
          {
            subscribeForGuild: o,
            analyticsLocation: T,
            skuId: E,
            onComplete: N,
          } = e,
          R = (0, s.e7)([f.Z], () => (null != E ? f.Z.get(E) : void 0), [E]),
          O = (0, s.e7)([I.Z], () => (null != E ? I.Z.getForSKU(E) : void 0), [
            E,
          ]),
          _ =
            null ===
              (n = (0, s.Wu)([v.Z], () => (null != E ? v.Z.getForSKU(E) : []), [
                E,
              ])[0]) || void 0 === n
              ? void 0
              : n.id,
          Z = (0, s.e7)(
            [f.Z],
            () => (null != E ? f.Z.getParentSKU(E) : void 0),
            [E],
          ),
          C = null == Z ? void 0 : Z.bundledSkuIds,
          b = (0, s.Wu)(
            [v.Z],
            () => {
              var e;
              return null !==
                (e = null == C ? void 0 : C.flatMap(v.Z.getForSKU)) &&
                void 0 !== e
                ? e
                : [];
            },
            [C],
          ),
          j = r.useMemo(() => b.map((e) => e.id), [b]),
          A = (0, s.e7)(
            [S.Z],
            () =>
              null != o &&
              S.Z.getEntitlementsForGuild(o, !0).some((e) => {
                var n;
                return (
                  null !== (n = null == C ? void 0 : C.includes(e.skuId)) &&
                  void 0 !== n &&
                  n
                );
              }),
            [C, o],
          ),
          L = null == R ? void 0 : R.applicationId,
          P =
            (null == O ? void 0 : O.published) === !0 &&
            (null == R ? void 0 : R.isAvailable()) === !0,
          { data: k } = (0, m.IX)(L),
          { analyticsLocations: M } = (0, d.ZP)(),
          F = (0, h.Ev)(Z, null != o ? o : void 0),
          D = (0, h.cr)(Z, null != o ? o : void 0),
          { entitlementsLoaded: y } = (0, h.LM)({ guildId: o });
        null == o && (y = !0);
        let U = (0, p.Z)(),
          B = (0, x.KK)(
            null !== (l = null == R ? void 0 : R.flags) && void 0 !== l ? l : 0,
          );
        return (
          U
            ? y && null != k && null != E
              ? P
                ? (null == F ? void 0 : F.subscriptionPlan.skuId) === E &&
                  null == D
                  ? (i = 2)
                  : (null == D
                        ? void 0
                        : null === (t = D.subscriptionPlan) || void 0 === t
                          ? void 0
                          : t.skuId) === E
                    ? (i = 3)
                    : B && A && null == F && (i = 4)
                : (i = 1)
              : (i = 0)
            : (i = 5),
          r.useEffect(() => {
            P &&
              null != E &&
              U &&
              !(v.Z.isFetchingForSKU(E) || v.Z.isLoadedForSKU(E)) &&
              u.Z.wait(() => {
                (0, c.GZ)(E);
              });
          }, [P, E, U]),
          {
            openModal: r.useCallback(() => {
              a()(null != k, "No application"),
                a()(null != E, "No SKU ID"),
                a()(P, "Cannot purchase this unpublished plan"),
                (0, g.H)({
                  subscriptionPlanId: _,
                  sku: R,
                  subscriptionGroupPlanIds: j,
                  activeSubscription: null == F ? void 0 : F.subscription,
                  subscribeForGuild: o,
                  analyticsLocations: M,
                  analyticsLocation: T,
                }).then(() => {
                  null == N || N();
                });
            }, [
              k,
              E,
              P,
              _,
              R,
              j,
              o,
              M,
              T,
              null == F ? void 0 : F.subscription,
              N,
            ]),
            cannotOpenReason: i,
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
        o = t.n(r),
        a = t(349361),
        s = t(698117);
      function u(e) {
        let { children: n, gradientClassName: t, ...r } = e,
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
            (0, l.jsx)(a.h2, {
              fade: !0,
              ...r,
              ref: (e) => {
                null != e && ((u.current = e), p());
              },
              onScroll: p,
              children: n,
            }),
            (0, l.jsx)("div", {
              className: o()(s.containerScrollGradient, t),
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
        r = t(777207),
        o = t(541822),
        a = t(330711),
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
          m =
            null != u
              ? { "--custom-background-url": "url(".concat(u.toString(), ")") }
              : void 0;
        return (0, l.jsx)("div", {
          className: s.container,
          children: (0, l.jsx)(o.Z, {
            className: s.scroller,
            children: (0, l.jsxs)("div", {
              className: s.scrollContent,
              children: [
                (0, l.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, l.jsx)("div", {
                      className: s.headerBackground,
                      style: m,
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
                          (0, l.jsx)(r.x, {
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
                          (0, l.jsx)(r.x, {
                            color: "header-secondary",
                            variant: "eyebrow",
                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE,
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
        r = t.n(i),
        o = t(789978),
        a = t(368072),
        s = t(777207),
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
          benefitItems: I,
          benefitsSummary: h,
          subtitle: S,
        } = e;
        return (0, l.jsx)(o.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, p.hoverCard),
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
                    (0, l.jsx)(s.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: v,
                    }),
                    (0, l.jsx)("div", {
                      className: d.image,
                      children:
                        null != t
                          ? (0, l.jsx)("img", { src: t.toString(), alt: "" })
                          : (0, l.jsx)(a.V, {
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
                    S,
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
      function v(e) {
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
        r = t(220427),
        o = t(777207),
        a = t(692547),
        s = t(330711),
        u = t(350727);
      function c(e) {
        let { type: n } = e;
        return (0, l.jsx)(d, {
          icon:
            "user" === n
              ? (0, l.jsx)(r.t, {
                  size: "xxs",
                  color: a.Z.colors.INTERACTIVE_NORMAL,
                })
              : (0, l.jsx)(i.Q, {
                  size: "xxs",
                  color: a.Z.colors.INTERACTIVE_NORMAL,
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
            (0, l.jsx)(o.x, {
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
//# sourceMappingURL=b44cb8544c1a9bc2cba7.js.map
