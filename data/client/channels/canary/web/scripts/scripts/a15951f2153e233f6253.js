"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66711"],
  {
    887706: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = e(399606),
        l = e(314897);
      function r() {
        return (0, i.e7)([l.default], () => l.default.isAuthenticated());
      }
    },
    601911: function (n, t, e) {
      e.d(t, {
        y: function () {
          return l;
        },
      });
      var i = e(591759);
      function l(n, t) {
        let e = n.getIconSource(t);
        if (null != e && "number" != typeof e) {
          let n;
          if (
            (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : (n = e.uri),
            null != n)
          ) {
            var l;
            return null !== (l = i.Z.toURLSafe(n)) && void 0 !== l ? l : void 0;
          }
        }
      }
    },
    110742: function (n, t, e) {
      e.d(t, {
        M: function () {
          return r;
        },
      }),
        e(47120);
      var i = e(442837),
        l = e(580130);
      function r(n) {
        return (0, i.e7)(
          [l.Z],
          () => {
            let t = l.Z.getForSku(n);
            if (null == t) return !1;
            let e = 0;
            for (let n of t) {
              var i, r;
              let t =
                null !==
                  (r =
                    null === (i = n.endsAt) || void 0 === i
                      ? void 0
                      : i.getTime()) && void 0 !== r
                  ? r
                  : 1 / 0;
              t >= e && (e = t);
            }
            return e > new Date().getTime();
          },
          [n],
        );
      }
    },
    680005: function (n, t, e) {
      e.d(t, {
        YG: function () {
          return Z;
        },
        pV: function () {
          return g;
        },
        rf: function () {
          return l;
        },
      });
      var i,
        l,
        r = e(200651);
      e(192379);
      var u = e(860911),
        a = e(481060),
        o = e(100527),
        s = e(906732),
        c = e(887706),
        d = e(929011),
        f = e(703656),
        p = e(626135),
        m = e(937615),
        v = e(110742),
        I = e(981631),
        S = e(388032),
        h = e(250394);
      ((i = l || (l = {}))[(i.AVAILABLE = 0)] = "AVAILABLE"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (i[(i.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (i[(i.UNAVAILABLE = 4)] = "UNAVAILABLE");
      function g(n) {
        let {
            appId: t,
            className: e,
            onClick: i,
            onHasClicked: l,
            skuId: u,
            subscriptionPlan: a,
            icon: o,
            state: s = 0,
          } = n,
          c = null != a ? (0, m.xg)(a) : null,
          d = 1 === s;
        return 0 === s || d
          ? (0, r.jsx)(A, {
              appId: t,
              skuId: u,
              onClick: (n) => {
                i(n), null == l || l();
              },
              className: e,
              submitting: d,
              children: (0, r.jsxs)("div", {
                className: h.btnContent,
                children: [
                  o,
                  null != c
                    ? S.intl.formatToPlainString(S.t.i4T8v7, { rate: c })
                    : S.intl.string(S.t.uuzaAA),
                ],
              }),
            })
          : (0, r.jsx)(N, {
              className: e,
              children: (function (n, t) {
                switch (n) {
                  case 2:
                    return S.intl.formatToPlainString(S.t.k1ew5O, { rate: t });
                  case 3:
                    return S.intl.formatToPlainString(S.t["Hs3Y+P"], {
                      rate: t,
                    });
                  case 4:
                    return S.intl.string(S.t.DLAKbm);
                }
              })(s, null != c ? c : ""),
            });
      }
      function Z(n) {
        let {
            appId: t,
            className: e,
            onClick: i,
            onHasClicked: l,
            sku: u,
            icon: a,
          } = n,
          { analyticsLocations: c } = (0, s.ZP)(o.Z.APP_STOREFRONT),
          f = () => {
            (0, d.r)({ appId: t, skuId: u.id, analyticsLocations: c });
          },
          p = (0, v.M)(u.id),
          g = u.type === I.epS.DURABLE && p,
          { price: Z } = u;
        return null == Z
          ? null
          : g
            ? (0, r.jsx)(N, {
                className: e,
                children: S.intl.string(S.t["/bUsx8"]),
              })
            : (0, r.jsx)(A, {
                appId: t,
                skuId: u.id,
                onClick: (n) => {
                  (null != i ? i : f)(n), null == l || l();
                },
                className: e,
                children: (0, r.jsxs)("div", {
                  className: h.btnContent,
                  children: [
                    a,
                    S.intl.format(S.t.Xp5WTk, {
                      price: (0, m.T4)(Z.amount, Z.currency),
                    }),
                  ],
                }),
              });
      }
      function A(n) {
        let { appId: t, skuId: e, onClick: i, ...l } = n,
          o = (0, c.Z)();
        return (0, r.jsx)(a.Button, {
          ...l,
          onClick: (n) => {
            if (
              (p.default.track(I.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: t,
                sku_id: e,
              }),
              !o)
            ) {
              n.preventDefault(), n.stopPropagation();
              let i = I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, e),
                l = (0, u.Ui)(i, !1);
              (0, f.uL)(l);
              return;
            }
            null == i || i(n);
          },
        });
      }
      function N(n) {
        let { className: t, children: e } = n;
        return (0, r.jsx)(a.Button, {
          disabled: !0,
          className: t,
          look: a.Button.Looks.OUTLINED,
          color: a.Button.Colors.PRIMARY,
          children: e,
        });
      }
    },
    724870: function (n, t, e) {
      e.d(t, {
        h: function () {
          return S;
        },
        m: function () {
          return g;
        },
      }),
        e(789020);
      var i = e(200651);
      e(192379);
      var l = e(512722),
        r = e.n(l),
        u = e(772848),
        a = e(481060),
        o = e(496929),
        s = e(159351),
        c = e(667),
        d = e(171246),
        f = e(509545),
        p = e(55563),
        m = e(626135),
        v = e(987209),
        I = e(981631);
      function S(n) {
        let {
            initialPlanId: t,
            activeSubscription: l,
            analyticsObject: r,
            analyticsLocation: o,
            analyticsLocations: d,
            analyticsSubscriptionType: f,
            renderHeader: p,
            planGroup: S,
            skuId: h,
            guildId: g,
            reviewWarningMessage: Z,
            applicationId: A,
            showBenefitsFirst: N,
            onComplete: b,
            forcesTransitionToGuild: E,
          } = n,
          P = (0, u.Z)(),
          C = !1;
        (0, a.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                e.bind(e, 563132),
              ),
              u = (
                await Promise.all([
                  e.e("52249"),
                  e.e("26182"),
                  e.e("32776"),
                  e.e("41158"),
                ]).then(e.bind(e, 405083))
              ).default,
              { getApplicationPaymentSteps: a } = await Promise.all([
                e.e("77298"),
                e.e("23357"),
                e.e("12013"),
                e.e("83834"),
                e.e("26182"),
                e.e("95900"),
                e.e("66774"),
              ]).then(e.bind(e, 759386)),
              s = a({ guildId: g, showBenefitsFirst: N });
            return (e) =>
              (0, i.jsx)(n, {
                loadId: P,
                applicationId: A,
                activeSubscription: l,
                stepConfigs: s,
                skuIDs: [h],
                children: (0, i.jsx)(v.KB, {
                  children: (0, i.jsx)(u, {
                    ...e,
                    initialPlanId: t,
                    skuId: h,
                    analyticsLocations: d,
                    analyticsObject: r,
                    analyticsLocation: o,
                    analyticsSubscriptionType: f,
                    renderHeader: p,
                    planGroup: S,
                    reviewWarningMessage: Z,
                    applicationId: A,
                    guildId: null != g ? g : void 0,
                    onComplete: () => {
                      (C = !0), null == b || b();
                    },
                    forcesTransitionToGuild: E,
                  }),
                }),
              });
          },
          {
            onCloseCallback: () => {
              !C &&
                (m.default.track(I.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: P,
                  payment_type: I.Zuq[I.GZQ.SUBSCRIPTION],
                  location: null != o ? o : r,
                  is_gift: !1,
                  sku_id: h,
                  application_id: A,
                  location_stack: d,
                }),
                (0, s.fw)(),
                (0, c.p)());
            },
            onCloseRequest: I.dG4,
          },
        );
      }
      let h = async (n, t) => {
        let e = (await (0, o.yD)(n))
          .filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date())
          .find((n) => n.sku_id === t);
        r()(null == e, "User already has an active subscription to this SKU");
      };
      async function g(n) {
        var t;
        let {
            applicationId: e,
            skuId: i,
            initialPlanId: l,
            analyticsLocationObject: u,
            analyticsLocations: a,
            renderHeader: o,
          } = n,
          s = p.Z.get(i),
          c = f.Z.getForSKU(i);
        r()(null != s, "Failed to find SKU");
        let m = (0, d.KW)(s.flags);
        r()(m, "Guild application subscriptions unsupported!"),
          await h(e, i),
          S({
            initialPlanId:
              null != l
                ? l
                : null === (t = c[0]) || void 0 === t
                  ? void 0
                  : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: u,
            analyticsSubscriptionType: I.NYc.APPLICATION,
            renderHeader: o,
            planGroup: [],
            skuId: i,
            guildId: null,
            showBenefitsFirst: !1,
            applicationId: e,
          });
      }
    },
    87484: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(772848),
        r = e(481060),
        u = e(159351),
        a = e(667),
        o = e(626135),
        s = e(981631);
      function c(n) {
        let {
            applicationId: t,
            skuId: c,
            onClose: d,
            onComplete: f,
            analyticsLocations: p,
            analyticsLocationObject: m,
            contextKey: v,
          } = n,
          I = !1,
          S = (0, l.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              e.e("77298"),
              e.e("23357"),
              e.e("12013"),
              e.e("52249"),
              e.e("83834"),
              e.e("26182"),
              e.e("95900"),
              e.e("32776"),
              e.e("51386"),
            ]).then(e.bind(e, 409600));
            return (e) => {
              let { onClose: l, ...r } = e;
              return (0, i.jsx)(n, {
                ...r,
                loadId: S,
                applicationId: t,
                skuId: c,
                analyticsLocations: p,
                analyticsLocationObject: m,
                onClose: (n) => {
                  l(), null == d || d(n);
                },
                onComplete: (n) => {
                  (I = !0), null == f || f(n);
                },
              });
            };
          },
          {
            contextKey: v,
            onCloseCallback: () => {
              !I &&
                o.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: S,
                  payment_type: s.Zuq[s.GZQ.ONE_TIME],
                  location: m,
                  is_gift: !1,
                  sku_id: c,
                  application_id: t,
                  location_stack: p,
                }),
                (0, u.fw)(),
                (0, a.p)(),
                null == d || d(I);
            },
            onCloseRequest: s.dG4,
          },
        );
      }
    },
    801249: function (n, t, e) {
      let i;
      var l,
        r = e(442837),
        u = e(570140);
      function a(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      let o = { lastGuildDismissedTime: {} };
      class s extends (l = r.ZP.DeviceSettingsStore) {
        initialize() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          i = n;
        }
        getUserAgnosticState() {
          return i;
        }
        getLastGuildDismissedTime(n) {
          return i.lastGuildDismissedTime[n];
        }
      }
      a(s, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        a(s, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (t.Z = new s(u.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: t } = n;
            i.lastGuildDismissedTime[t] = Date.now();
          },
        }));
    },
    270144: function (n, t, e) {
      e.d(t, {
        CR: function () {
          return E;
        },
        E8: function () {
          return _;
        },
        Ev: function () {
          return C;
        },
        LM: function () {
          return Z;
        },
        cr: function () {
          return T;
        },
        ec: function () {
          return P;
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
          return N;
        },
      }),
        e(653041),
        e(47120),
        e(773603),
        e(789020);
      var i,
        l,
        r = e(192379),
        u = e(442837),
        a = e(496929),
        o = e(430824),
        s = e(496675),
        c = e(509545),
        d = e(78839),
        f = e(55563),
        p = e(801249),
        m = e(106976),
        v = e(307643),
        I = e(488915),
        S = e(171246),
        h = e(981631);
      let g = 12633 == e.j ? 2592e6 : null;
      ((l = i || (i = {}))[(l.NOT_LOADED = 0)] = "NOT_LOADED"),
        (l[(l.LOADING = 1)] = "LOADING"),
        (l[(l.LOADED = 2)] = "LOADED"),
        (l[(l.ERROR = 3)] = "ERROR");
      let Z = (n) => {
        let { guildId: t, canFetch: e = !0, forceRefetch: i = !1 } = n,
          l = (0, u.e7)(
            [I.Z],
            () => (null != t ? I.Z.getEntitlementsForGuildFetchState(t) : null),
            [t],
          );
        return (
          r.useEffect(() => {
            if (null == t || t === h.ME) return;
            let n = I.Z.getEntitlementsForGuildFetchState(t);
            e && (n === I.M.NOT_FETCHED || i) && (0, m.i1)(t);
          }, [t, e, i]),
          { entitlementsLoaded: l === I.M.FETCHED }
        );
      };
      function A(n) {
        var t;
        let e =
            null !== (t = null == n ? void 0 : n.id) && void 0 !== t
              ? t
              : h.lds,
          { entitlementsLoaded: i } = Z({
            guildId: e,
            canFetch: (0, u.e7)([s.Z], () => s.Z.can(h.Plq.ADMINISTRATOR, n)),
          }),
          l = (0, u.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(e)),
          a = (0, u.Wu)([I.Z], () => {
            let n = I.Z.getEntitlementsForGuild(e),
              t = I.Z.getEntitlementsForGuild(e, !1),
              i = n.map((n) => n.applicationId);
            return t.filter((n) => !i.includes(n.applicationId));
          }),
          o = (0, u.cj)([f.Z], () => f.Z.getSKUs()),
          c = r.useMemo(
            () =>
              a.filter((n) => {
                let t = o[n.skuId];
                return null != t && t.available;
              }),
            [a, o],
          );
        return i
          ? c.filter(
              (n) =>
                null != n.endsAt &&
                n.endsAt.getTime() >
                  Math.max(null != l ? l : 0, Date.now() - g),
            )
          : [];
      }
      let N = (n) => {
          let [t, e] = r.useState(!1),
            i = r.useMemo(() => n.map(S.bZ), [n]);
          return (
            r.useEffect(() => {
              e(!0),
                Promise.all(i.map((n) => (0, m.vY)(n)))
                  .catch(() => {})
                  .then(() => {
                    e(!1);
                  });
            }, [i]),
            { loading: t }
          );
        },
        b = () => {
          let [n, t] = r.useState(0);
          return (
            r.useEffect(() => {
              t(1),
                Promise.all([
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: h.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: h.qc2.PURCHASE,
                  }),
                ])
                  .catch(() => {
                    t(3);
                  })
                  .then(() => {
                    t(2);
                  });
            }, []),
            { loadState: n }
          );
        };
      function E(n, t) {
        let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [i, l] = r.useState([]),
          [a, s] = r.useState(!1);
        return (
          r.useLayoutEffect(() => {
            null != n &&
              e &&
              (s(!0),
              (0, v.tn)(n, t)
                .then(l)
                .finally(() => {
                  s(!1);
                }));
          }, [n, t, e]),
          {
            guilds: (0, u.Wu)(
              [o.Z],
              () => i.map((n) => o.Z.getGuild(n)).filter((n) => null != n),
              [i],
            ),
            isFetching: a,
          }
        );
      }
      let P = (n) => n.items;
      function C(n, t) {
        return x(n, t, P);
      }
      let L = (n) => {
        var t, e;
        return null !==
          (e =
            null === (t = n.renewalMutations) || void 0 === t
              ? void 0
              : t.items) && void 0 !== e
          ? e
          : [];
      };
      function T(n, t) {
        return x(n, t, L);
      }
      function x(n, t, e) {
        let [i, l] = (0, u.Wu)(
          [d.ZP, c.Z],
          () =>
            null == n
              ? []
              : _({
                  groupSku: n,
                  SubscriptionStore: d.ZP,
                  SubscriptionPlanStore: c.Z,
                  mapSubscriptionItems: e,
                  guildId: t,
                }),
          [n, e, t],
        );
        return r.useMemo(() => {
          if (null != i && null != l)
            return { subscription: i, subscriptionPlan: l };
        }, [i, l]);
      }
      function _(n) {
        var t, e;
        let {
            groupSku: i,
            SubscriptionStore: l,
            SubscriptionPlanStore: r,
            mapSubscriptionItems: u,
            guildId: a,
          } = n,
          { bundledSkuIds: o, flags: s } = i;
        for (let n of null !== (t = l.getActiveApplicationSubscriptions()) &&
        void 0 !== t
          ? t
          : []) {
          if (
            (0, S.KK)(s) &&
            null != a &&
            (null === (e = n.metadata) || void 0 === e
              ? void 0
              : e.application_subscription_guild_id) !== a
          )
            continue;
          let t = u(n)
            .map((n) => r.get(n.planId))
            .find((n) => null != n && o.includes(n.skuId));
          if (null != t) return [n, t];
        }
        return [];
      }
    },
    930155: function (n, t, e) {
      e.d(t, {
        H: function () {
          return a;
        },
      }),
        e(47120),
        e(411104);
      var i = e(192379),
        l = e(442837),
        r = e(821849),
        u = e(509545);
      function a(n) {
        let [t, e] = i.useState(!1),
          a = (0, l.Wu)([u.Z], () => u.Z.getForSKU(n), [n]),
          o = (0, l.e7)([u.Z], () => u.Z.isFetchingForSKU(n), [n]);
        return (
          i.useEffect(() => {
            !u.Z.isFetchingForSKU(n) &&
              (e(!1),
              (0, r.GZ)(n)
                .then(() => {
                  e(!1);
                })
                .catch(() => {
                  e(!0);
                }));
          }, [n]),
          {
            data: a,
            isLoading: o,
            error: t ? Error("SubscriptionPlans failed to fetch") : void 0,
          }
        );
      }
    },
    929011: function (n, t, e) {
      e.d(t, {
        H: function () {
          return m;
        },
        r: function () {
          return v;
        },
      }),
        e(789020),
        e(47120);
      var i = e(200651),
        l = e(481060),
        r = e(724870),
        u = e(87484),
        a = e(509545),
        o = e(78839),
        s = e(55563),
        c = e(270144),
        d = e(171246),
        f = e(689011),
        p = e(981631);
      async function m(n) {
        let {
            subscriptionPlanId: t,
            sku: u,
            subscriptionGroupPlanIds: m,
            initialSubscribeForGuild: v,
            analyticsLocations: I,
            analyticsLocation: S,
            disableGuildSelector: h = !1,
          } = n,
          { promise: g, resolve: Z } = Promise.withResolvers();
        if ((0, d.KK)(u.flags) && !1 === h) {
          let { promise: n, resolve: t } = Promise.withResolvers();
          (0, l.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await e
              .e("43889")
              .then(e.bind(e, 279875));
            return (e) =>
              (0, i.jsx)(n, {
                transitionState: e.transitionState,
                onClose: e.onClose,
                sku: u,
                onSelect: t,
                currentGuildId: v,
              });
          }),
            (v = await n);
        }
        let A = s.Z.getParentSKU(u.id),
          N = null;
        return (
          null != A &&
            ([N] = (0, c.E8)({
              groupSku: A,
              SubscriptionStore: o.ZP,
              SubscriptionPlanStore: a.Z,
              mapSubscriptionItems: c.ec,
              guildId: v,
            })),
          (0, r.h)({
            initialPlanId: t,
            skuId: u.id,
            activeSubscription: N,
            applicationId: u.applicationId,
            planGroup: m,
            guildId: v,
            renderHeader: (n, t, e) =>
              (0, i.jsx)(f.t, { step: e, onClose: () => t(!1) }),
            analyticsSubscriptionType: p.NYc.APPLICATION,
            analyticsLocations: I,
            analyticsLocation: S,
            onComplete: Z,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          g
        );
      }
      function v(n) {
        let { appId: t, skuId: e, analyticsLocations: i } = n;
        (0, u.Z)({ applicationId: t, skuId: e, analyticsLocations: i });
      }
    },
    263519: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return Z;
        },
      }),
        e(390547),
        e(789020);
      var i = e(192379),
        l = e(512722),
        r = e.n(l),
        u = e(442837),
        a = e(570140),
        o = e(821849),
        s = e(906732),
        c = e(887706),
        d = e(680005),
        f = e(728345),
        p = e(509545),
        m = e(55563),
        v = e(551428),
        I = e(270144),
        S = e(488915),
        h = e(171246),
        g = e(929011);
      function Z(n) {
        var t, e;
        let {
            initialSubscribeForGuild: l,
            analyticsLocation: Z,
            skuId: A,
            onComplete: N,
            disableGuildSelector: b,
          } = n,
          E = (0, u.e7)([m.Z], () => (null != A ? m.Z.get(A) : void 0), [A]),
          P = (0, u.e7)([v.Z], () => (null != A ? v.Z.getForSKU(A) : void 0), [
            A,
          ]),
          C =
            null ===
              (t = (0, u.Wu)([p.Z], () => (null != A ? p.Z.getForSKU(A) : []), [
                A,
              ])[0]) || void 0 === t
              ? void 0
              : t.id,
          L = (0, u.e7)(
            [m.Z],
            () => (null != A ? m.Z.getParentSKU(A) : void 0),
            [A],
          ),
          T = null == L ? void 0 : L.bundledSkuIds,
          x = (0, u.Wu)(
            [p.Z],
            () => {
              var n;
              return null !==
                (n = null == T ? void 0 : T.flatMap(p.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [T],
          ),
          _ = i.useMemo(() => x.map((n) => n.id), [x]),
          O = (0, h.KK)(
            null !== (e = null == E ? void 0 : E.flags) && void 0 !== e ? e : 0,
          ),
          k = (0, u.e7)(
            [S.Z],
            () =>
              null != l &&
              !1 !== O &&
              S.Z.getEntitlementsForGuild(l, !0).some((n) => n.skuId === A),
            [O, A, l],
          ),
          y = null == E ? void 0 : E.applicationId,
          R =
            (null == P ? void 0 : P.published) === !0 &&
            (null == E ? void 0 : E.isAvailable()) === !0,
          { app: j } = (0, f.Rt)(y),
          { analyticsLocations: D } = (0, s.ZP)(),
          F = (0, I.Ev)(L, null != l ? l : void 0),
          M = null == F ? void 0 : F.subscription,
          U = null == F ? void 0 : F.subscriptionPlan,
          G = (0, I.cr)(L, null != l ? l : void 0),
          w = null == G ? void 0 : G.subscriptionPlan,
          { entitlementsLoaded: B } = (0, I.LM)({ guildId: l });
        null == l && (B = !0);
        let K = (0, c.Z)(),
          H = null != M && (0, h.Jf)(M, E),
          W = i.useMemo(() => {
            if (!B || null == j || null == A) return d.rf.LOADING;
            if (!R) return d.rf.UNAVAILABLE;
            if (!O) {
              if ((null == U ? void 0 : U.skuId) === A) return d.rf.SUBSCRIBED;
              if ((null == w ? void 0 : w.skuId) === A && !1 === H)
                return d.rf.UPCOMING_PLAN;
            }
            return d.rf.AVAILABLE;
          }, [
            null == U ? void 0 : U.skuId,
            R,
            j,
            B,
            H,
            O,
            null == w ? void 0 : w.skuId,
            A,
          ]);
        return (
          i.useEffect(() => {
            R &&
              null != A &&
              K &&
              !(p.Z.isFetchingForSKU(A) || p.Z.isLoadedForSKU(A)) &&
              a.Z.wait(() => {
                (0, o.GZ)(A);
              });
          }, [R, A, K]),
          {
            openModal: i.useCallback(() => {
              r()(null != j, "No application"),
                r()(null != A, "No SKU ID"),
                r()(R, "Cannot purchase this unpublished plan"),
                (0, g.H)({
                  subscriptionPlanId: C,
                  sku: E,
                  subscriptionGroupPlanIds: _,
                  initialSubscribeForGuild: l,
                  disableGuildSelector: b,
                  analyticsLocations: D,
                  analyticsLocation: Z,
                }).then(() => {
                  null == N || N();
                });
            }, [j, A, R, C, E, _, l, b, D, Z, N]),
            subscriptionPurchaseButtonState: W,
            isGuildSubscribed: k,
          }
        );
      }
    },
    269210: function (n, t, e) {
      e.d(t, {
        Gm: function () {
          return v;
        },
        Uj: function () {
          return m;
        },
        ZI: function () {
          return p;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(557533),
        r = e.n(l),
        u = e(489948),
        a = e(368072),
        o = e(777207),
        s = e(692547),
        c = e(330711),
        d = e(271352),
        f = e(226655);
      let p = 5;
      function m(n) {
        let {
          description: t,
          imgSrc: e,
          renderPurchaseButton: l,
          onPurchase: m,
          title: v,
          onDetails: I,
          benefitItems: S,
          benefitsSummary: h,
          subtitle: g,
          maxBenefits: Z = p,
        } = n;
        return (0, i.jsx)(u.tE, {
          children: (0, i.jsxs)("div", {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != I ? I() : null != m && m();
            },
            children: [
              (0, i.jsx)("div", {
                className: d.card,
                children: (0, i.jsxs)("div", {
                  className: d.body,
                  children: [
                    (0, i.jsx)(o.x, {
                      tag: "div",
                      variant: "heading-lg/semibold",
                      children: v,
                    }),
                    (0, i.jsx)("div", {
                      className: d.image,
                      children:
                        null != e
                          ? (0, i.jsx)("img", { src: e.toString(), alt: "" })
                          : (0, i.jsx)(a.V, {
                              color: s.Z.colors.ICON_PRIMARY,
                              size: "custom",
                              height: 48,
                              width: 48,
                            }),
                    }),
                    null != l
                      ? l({
                          className: d.purchaseBtn,
                          onClick: (n) => {
                            n.stopPropagation(), null == m || m();
                          },
                        })
                      : null,
                    g,
                    null != t &&
                      "" !== t &&
                      (0, i.jsx)(o.x, {
                        className: d.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: t,
                      }),
                  ],
                }),
              }),
              null != h &&
                (0, i.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, i.jsx)(o.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: h,
                    }),
                  }),
                }),
              null != S &&
                S.length > 0 &&
                (0, i.jsx)("div", {
                  className: d.benefits,
                  children: (0, i.jsx)("div", {
                    className: d.benefitsContainer,
                    children: (0, i.jsxs)("div", {
                      className: d.benefitsList,
                      children: [
                        (0, i.jsx)(o.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        S.length > Z
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                S.slice(0, Z),
                                (0, i.jsx)(o.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.STOREFRONT_MORE_BENEFITS.format(
                                      { count: S.length - Z },
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
      function v(n) {
        let { icon: t, header: e, description: l } = n;
        return (0, i.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, i.jsx)("div", { className: d.cardBenefitIcon, children: t }),
            (0, i.jsxs)("div", {
              children: [
                null != e &&
                  (0, i.jsx)(o.x, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: e,
                  }),
                (0, i.jsx)(o.x, { variant: "text-sm/normal", children: l }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=a15951f2153e233f6253.js.map
