"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74891"],
  {
    887706: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = e(399606),
        i = e(314897);
      function r() {
        return (0, l.e7)([i.default], () => i.default.isAuthenticated());
      }
    },
    601911: function (n, t, e) {
      e.d(t, {
        y: function () {
          return i;
        },
      });
      var l = e(591759);
      function i(n, t) {
        let e = n.getIconSource(t);
        if (null != e && "number" != typeof e) {
          let n;
          if (
            (Array.isArray(e) ? e.length > 0 && (n = e[0].uri) : (n = e.uri),
            null != n)
          ) {
            var i;
            return null !== (i = l.Z.toURLSafe(n)) && void 0 !== i ? i : void 0;
          }
        }
      }
    },
    504211: function (n, t, e) {
      e.d(t, {
        B: function () {
          return i;
        },
        X: function () {
          return a;
        },
      });
      var l,
        i,
        r = e(626135),
        u = e(981631);
      function a(n, t, e) {
        r.default.track(u.rMx.STOREFRONT_COPY_LINK_CLICKED, {
          application_id: n,
          area: t,
          sku_id: e,
        });
      }
      ((l = i || (i = {})).STORE_MODAL = "store_modal"),
        (l.DETAILS_MODAL = "details_modal"),
        (l.STORE_EMBED = "store_embed"),
        (l.SKU_EMBED = "sku_embed");
    },
    110742: function (n, t, e) {
      e.d(t, {
        M: function () {
          return r;
        },
      }),
        e(47120);
      var l = e(442837),
        i = e(580130);
      function r(n) {
        return (0, l.e7)(
          [i.Z],
          () => {
            let t = i.Z.getForSku(n);
            if (null == t) return !1;
            let e = 0;
            for (let n of t) {
              var l, r;
              let t =
                null !==
                  (r =
                    null === (l = n.endsAt) || void 0 === l
                      ? void 0
                      : l.getTime()) && void 0 !== r
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
          return E;
        },
        pV: function () {
          return g;
        },
        rf: function () {
          return i;
        },
      });
      var l,
        i,
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
        v = e(937615),
        m = e(110742),
        h = e(981631),
        I = e(388032),
        S = e(968629);
      ((l = i || (i = {}))[(l.AVAILABLE = 0)] = "AVAILABLE"),
        (l[(l.LOADING = 1)] = "LOADING"),
        (l[(l.UPCOMING_PLAN = 2)] = "UPCOMING_PLAN"),
        (l[(l.SUBSCRIBED = 3)] = "SUBSCRIBED"),
        (l[(l.UNAVAILABLE = 4)] = "UNAVAILABLE");
      function g(n) {
        let {
            appId: t,
            className: e,
            onClick: l,
            onHasClicked: i,
            skuId: u,
            subscriptionPlan: a,
            icon: o,
            state: s = 0,
          } = n,
          c = null != a ? (0, v.xg)(a) : null,
          d = 1 === s;
        return 0 === s || d
          ? (0, r.jsx)(A, {
              appId: t,
              skuId: u,
              onClick: (n) => {
                l(n), null == i || i();
              },
              className: e,
              submitting: d,
              children: (0, r.jsxs)("div", {
                className: S.btnContent,
                children: [
                  o,
                  null != c
                    ? I.intl.formatToPlainString(I.t.i4T8v7, { rate: c })
                    : I.intl.string(I.t.uuzaAA),
                ],
              }),
            })
          : (0, r.jsx)(N, {
              className: e,
              children: (function (n, t) {
                switch (n) {
                  case 2:
                    return I.intl.formatToPlainString(I.t.k1ew5O, { rate: t });
                  case 3:
                    return I.intl.formatToPlainString(I.t["Hs3Y+P"], {
                      rate: t,
                    });
                  case 4:
                    return I.intl.string(I.t.DLAKbm);
                }
              })(s, null != c ? c : ""),
            });
      }
      function E(n) {
        let {
            appId: t,
            className: e,
            onClick: l,
            onHasClicked: i,
            sku: u,
            icon: a,
          } = n,
          { analyticsLocations: c } = (0, s.ZP)(o.Z.APP_STOREFRONT),
          f = () => {
            (0, d.r)({ appId: t, skuId: u.id, analyticsLocations: c });
          },
          p = (0, m.M)(u.id),
          g = u.type === h.epS.DURABLE && p,
          { price: E } = u;
        return null == E
          ? null
          : g
            ? (0, r.jsx)(N, {
                className: e,
                children: I.intl.string(I.t["/bUsx8"]),
              })
            : (0, r.jsx)(A, {
                appId: t,
                skuId: u.id,
                onClick: (n) => {
                  (null != l ? l : f)(n), null == i || i();
                },
                className: e,
                children: (0, r.jsxs)("div", {
                  className: S.btnContent,
                  children: [
                    a,
                    I.intl.format(I.t.Xp5WTk, {
                      price: (0, v.T4)(E.amount, E.currency),
                    }),
                  ],
                }),
              });
      }
      function A(n) {
        let { appId: t, skuId: e, onClick: l, ...i } = n,
          o = (0, c.Z)();
        return (0, r.jsx)(a.Button, {
          ...i,
          onClick: (n) => {
            if (
              (p.default.track(h.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: t,
                sku_id: e,
              }),
              !o)
            ) {
              n.preventDefault(), n.stopPropagation();
              let l = h.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, e),
                i = (0, u.Ui)(l, !1);
              (0, f.uL)(i);
              return;
            }
            null == l || l(n);
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
    533159: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(794295),
        r = e(388032),
        u = e(266377);
      function a(n) {
        let { termsOfServiceUrl: t, privacyPolicyUrl: e } = n;
        return null == t && null == e
          ? null
          : (0, l.jsxs)("span", {
              className: u.text,
              children: [
                null != t &&
                  (0, l.jsx)(i.Z, {
                    href: t,
                    children: r.intl.string(r.t["8S0kcH"]),
                  }),
                null != t &&
                  null != e &&
                  (0, l.jsx)("span", {
                    "aria-disabled": "true",
                    children: "•",
                  }),
                null != e &&
                  (0, l.jsx)(i.Z, {
                    href: e,
                    children: r.intl.string(r.t.ZpyeCg),
                  }),
              ],
            });
      }
    },
    724870: function (n, t, e) {
      e.d(t, {
        h: function () {
          return p;
        },
        m: function () {
          return m;
        },
      }),
        e(789020);
      var l = e(200651);
      e(192379);
      var i = e(512722),
        r = e.n(i),
        u = e(481060),
        a = e(496929),
        o = e(171246),
        s = e(509545),
        c = e(55563),
        d = e(987209),
        f = e(981631);
      function p(n) {
        let {
          initialPlanId: t,
          activeSubscription: i,
          analyticsObject: r,
          analyticsLocation: a,
          analyticsLocations: o,
          analyticsSubscriptionType: s,
          renderHeader: c,
          planGroup: p,
          skuId: v,
          guildId: m,
          reviewWarningMessage: h,
          applicationId: I,
          showBenefitsFirst: S,
          onComplete: g,
          forcesTransitionToGuild: E,
        } = n;
        (0, u.openModalLazy)(
          async () => {
            let { PaymentContextProvider: n } = await Promise.resolve().then(
                e.bind(e, 563132),
              ),
              u = (
                await Promise.all([
                  e.e("52249"),
                  e.e("26182"),
                  e.e("32776"),
                  e.e("97195"),
                ]).then(e.bind(e, 405083))
              ).default,
              { getApplicationPaymentSteps: f } = await Promise.all([
                e.e("63288"),
                e.e("77298"),
                e.e("23357"),
                e.e("12013"),
                e.e("14627"),
                e.e("26182"),
                e.e("95900"),
                e.e("66470"),
              ]).then(e.bind(e, 759386)),
              A = f({ guildId: m, showBenefitsFirst: S });
            return (e) =>
              (0, l.jsx)(n, {
                applicationId: I,
                activeSubscription: i,
                stepConfigs: A,
                skuIDs: [v],
                children: (0, l.jsx)(d.KB, {
                  children: (0, l.jsx)(u, {
                    ...e,
                    initialPlanId: t,
                    skuId: v,
                    analyticsLocations: o,
                    analyticsObject: r,
                    analyticsLocation: a,
                    analyticsSubscriptionType: s,
                    renderHeader: c,
                    planGroup: p,
                    reviewWarningMessage: h,
                    applicationId: I,
                    guildId: null != m ? m : void 0,
                    onComplete: g,
                    forcesTransitionToGuild: E,
                  }),
                }),
              });
          },
          { onCloseRequest: f.dG4 },
        );
      }
      let v = async (n, t) => {
        let e = (await (0, a.yD)(n))
          .filter((n) => null == n.ends_at || new Date(n.ends_at) > new Date())
          .find((n) => n.sku_id === t);
        r()(null == e, "User already has an active subscription to this SKU");
      };
      async function m(n) {
        var t;
        let {
            applicationId: e,
            skuId: l,
            initialPlanId: i,
            analyticsLocationObject: u,
            analyticsLocations: a,
            renderHeader: d,
          } = n,
          m = c.Z.get(l),
          h = s.Z.getForSKU(l);
        r()(null != m, "Failed to find SKU");
        let I = (0, o.KW)(m.flags);
        r()(I, "Guild application subscriptions unsupported!"),
          await v(e, l),
          p({
            initialPlanId:
              null != i
                ? i
                : null === (t = h[0]) || void 0 === t
                  ? void 0
                  : t.id,
            activeSubscription: null,
            analyticsLocations: a,
            analyticsLocationObject: u,
            analyticsSubscriptionType: f.NYc.APPLICATION,
            renderHeader: d,
            planGroup: [],
            skuId: l,
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
      var l = e(200651);
      e(192379);
      var i = e(772848),
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
            analyticsLocationObject: v,
            contextKey: m,
          } = n,
          h = !1,
          I = (0, i.Z)();
        (0, r.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              e.e("63288"),
              e.e("77298"),
              e.e("23357"),
              e.e("12013"),
              e.e("52249"),
              e.e("14627"),
              e.e("26182"),
              e.e("95900"),
              e.e("32776"),
              e.e("7458"),
            ]).then(e.bind(e, 409600));
            return (e) => {
              let { onClose: i, ...r } = e;
              return (0, l.jsx)(n, {
                ...r,
                loadId: I,
                applicationId: t,
                skuId: c,
                analyticsLocations: p,
                analyticsLocationObject: v,
                onClose: (n) => {
                  i(), null == d || d(n);
                },
                onComplete: (n) => {
                  (h = !0), null == f || f(n);
                },
              });
            };
          },
          {
            contextKey: m,
            onCloseCallback: () => {
              !h &&
                o.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
                  load_id: I,
                  payment_type: s.Zuq[s.GZQ.ONE_TIME],
                  location: v,
                  is_gift: !1,
                  application_id: t,
                  location_stack: p,
                }),
                (0, u.fw)(),
                (0, a.p)(),
                null == d || d(h);
            },
            onCloseRequest: s.dG4,
          },
        );
      }
    },
    801249: function (n, t, e) {
      let l;
      var i,
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
      class s extends (i = r.ZP.DeviceSettingsStore) {
        initialize() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
          l = n;
        }
        getUserAgnosticState() {
          return l;
        }
        getLastGuildDismissedTime(n) {
          return l.lastGuildDismissedTime[n];
        }
      }
      a(s, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
        a(s, "persistKey", "ApplicationSubscriptionChannelNoticeStore"),
        (t.Z = new s(u.Z, {
          APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (n) {
            let { guildId: t } = n;
            l.lastGuildDismissedTime[t] = Date.now();
          },
        }));
    },
    270144: function (n, t, e) {
      e.d(t, {
        CR: function () {
          return x;
        },
        Ev: function () {
          return L;
        },
        LM: function () {
          return E;
        },
        cr: function () {
          return C;
        },
        h6: function () {
          return A;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return Z;
        },
        sp: function () {
          return N;
        },
      }),
        e(653041),
        e(47120),
        e(773603),
        e(789020);
      var l,
        i,
        r = e(192379),
        u = e(442837),
        a = e(496929),
        o = e(430824),
        s = e(496675),
        c = e(509545),
        d = e(78839),
        f = e(55563),
        p = e(801249),
        v = e(106976),
        m = e(307643),
        h = e(488915),
        I = e(171246),
        S = e(981631);
      let g = 12633 == e.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let E = (n) => {
        let { guildId: t, canFetch: e = !0, forceRefetch: l = !1 } = n,
          i = (0, u.e7)(
            [h.Z],
            () => (null != t ? h.Z.getEntitlementsForGuildFetchState(t) : null),
            [t],
          );
        return (
          r.useEffect(() => {
            if (null == t || t === S.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(t);
            e && (n === h.M.NOT_FETCHED || l) && (0, v.i1)(t);
          }, [t, e, l]),
          { entitlementsLoaded: i === h.M.FETCHED }
        );
      };
      function A(n) {
        var t;
        let e =
            null !== (t = null == n ? void 0 : n.id) && void 0 !== t
              ? t
              : S.lds,
          { entitlementsLoaded: l } = E({
            guildId: e,
            canFetch: (0, u.e7)([s.Z], () => s.Z.can(S.Plq.ADMINISTRATOR, n)),
          }),
          i = (0, u.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(e)),
          a = (0, u.Wu)([h.Z], () => {
            let n = h.Z.getEntitlementsForGuild(e),
              t = h.Z.getEntitlementsForGuild(e, !1),
              l = n.map((n) => n.applicationId);
            return t.filter((n) => !l.includes(n.applicationId));
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
        return l
          ? c.filter(
              (n) =>
                null != n.endsAt &&
                n.endsAt.getTime() >
                  Math.max(null != i ? i : 0, Date.now() - g),
            )
          : [];
      }
      let N = (n) => {
          let [t, e] = r.useState(!1),
            l = r.useMemo(() => n.map(I.bZ), [n]);
          return (
            r.useEffect(() => {
              e(!0),
                Promise.all(l.map((n) => (0, v.vY)(n)))
                  .catch(() => {})
                  .then(() => {
                    e(!1);
                  });
            }, [l]),
            { loading: t }
          );
        },
        Z = () => {
          let [n, t] = r.useState(0);
          return (
            r.useEffect(() => {
              t(1),
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
                    t(3);
                  })
                  .then(() => {
                    t(2);
                  });
            }, []),
            { loadState: n }
          );
        };
      function x(n, t) {
        let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          [l, i] = r.useState([]),
          [a, s] = r.useState(!1);
        return (
          r.useLayoutEffect(() => {
            null != n &&
              e &&
              (s(!0),
              (0, m.tn)(n, t)
                .then(i)
                .finally(() => {
                  s(!1);
                }));
          }, [n, t, e]),
          {
            guilds: (0, u.Wu)(
              [o.Z],
              () => l.map((n) => o.Z.getGuild(n)).filter((n) => null != n),
              [l],
            ),
            isFetching: a,
          }
        );
      }
      let T = (n) => n.items;
      function L(n, t) {
        return P(n, t, T);
      }
      let b = (n) => {
        var t;
        return null === (t = n.renewalMutations) || void 0 === t
          ? void 0
          : t.items;
      };
      function C(n, t) {
        return P(n, t, b);
      }
      function P(n, t, e) {
        let l = null == n ? void 0 : n.bundledSkuIds,
          i = null == n ? void 0 : n.flags,
          [a, o] = (0, u.Wu)(
            [d.ZP, c.Z],
            () => {
              var n, r;
              if (null == l || null == i) return [];
              for (let u of null !==
                (n = d.ZP.getActiveApplicationSubscriptions()) && void 0 !== n
                ? n
                : []) {
                if (
                  (0, I.KK)(i) &&
                  null != t &&
                  (null === (r = u.metadata) || void 0 === r
                    ? void 0
                    : r.application_subscription_guild_id) !== t
                )
                  continue;
                let n = e(u);
                if (null == n) continue;
                let a = n
                  .map((n) => c.Z.get(n.planId))
                  .find((n) => null != n && l.includes(n.skuId));
                if (null != a) return [u, a];
              }
              return [];
            },
            [i, t, e, l],
          );
        return r.useMemo(() => {
          if (null != a && null != o)
            return { subscription: a, subscriptionPlan: o };
        }, [a, o]);
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
      var l = e(192379),
        i = e(442837),
        r = e(821849),
        u = e(509545);
      function a(n) {
        let [t, e] = l.useState(!1),
          a = (0, i.Wu)([u.Z], () => u.Z.getForSKU(n), [n]),
          o = (0, i.e7)([u.Z], () => u.Z.isFetchingForSKU(n), [n]);
        return (
          l.useEffect(() => {
            !o &&
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
          return c;
        },
        r: function () {
          return d;
        },
      }),
        e(789020);
      var l = e(200651),
        i = e(481060),
        r = e(724870),
        u = e(87484),
        a = e(171246),
        o = e(689011),
        s = e(981631);
      async function c(n) {
        let {
            subscriptionPlanId: t,
            sku: u,
            subscriptionGroupPlanIds: c,
            activeSubscription: d,
            subscribeForGuild: f,
            analyticsLocations: p,
            analyticsLocation: v,
            disableGuildSelector: m = !1,
          } = n,
          { promise: h, resolve: I } = Promise.withResolvers();
        if ((0, a.KK)(u.flags) && !1 === m) {
          let { promise: n, resolve: t } = Promise.withResolvers();
          (0, i.openModalLazy)(async () => {
            let { GuildSubscriptionSelectionModal: n } = await e
              .e("43889")
              .then(e.bind(e, 279875));
            return (e) =>
              (0, l.jsx)(n, {
                transitionState: e.transitionState,
                onClose: e.onClose,
                sku: u,
                onSelect: t,
                currentGuildId: f,
              });
          }),
            (f = await n);
        }
        return (
          (0, r.h)({
            initialPlanId: t,
            skuId: u.id,
            activeSubscription: null != d ? d : null,
            applicationId: u.applicationId,
            planGroup: c,
            guildId: f,
            renderHeader: (n, t, e) =>
              (0, l.jsx)(o.t, { step: e, onClose: () => t(!1) }),
            analyticsSubscriptionType: s.NYc.APPLICATION,
            analyticsLocations: p,
            analyticsLocation: v,
            onComplete: I,
            showBenefitsFirst: !1,
            forcesTransitionToGuild: !1,
          }),
          h
        );
      }
      function d(n) {
        let { appId: t, skuId: e, analyticsLocations: l } = n;
        (0, u.Z)({ applicationId: t, skuId: e, analyticsLocations: l });
      }
    },
    263519: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return E;
        },
      }),
        e(390547),
        e(789020);
      var l = e(192379),
        i = e(512722),
        r = e.n(i),
        u = e(442837),
        a = e(570140),
        o = e(821849),
        s = e(906732),
        c = e(887706),
        d = e(680005),
        f = e(728345),
        p = e(509545),
        v = e(55563),
        m = e(551428),
        h = e(270144),
        I = e(488915),
        S = e(171246),
        g = e(929011);
      function E(n) {
        var t, e;
        let {
            subscribeForGuild: i,
            analyticsLocation: E,
            skuId: A,
            onComplete: N,
            disableGuildSelector: Z,
          } = n,
          x = (0, u.e7)([v.Z], () => (null != A ? v.Z.get(A) : void 0), [A]),
          T = (0, u.e7)([m.Z], () => (null != A ? m.Z.getForSKU(A) : void 0), [
            A,
          ]),
          L =
            null ===
              (t = (0, u.Wu)([p.Z], () => (null != A ? p.Z.getForSKU(A) : []), [
                A,
              ])[0]) || void 0 === t
              ? void 0
              : t.id,
          b = (0, u.e7)(
            [v.Z],
            () => (null != A ? v.Z.getParentSKU(A) : void 0),
            [A],
          ),
          C = null == b ? void 0 : b.bundledSkuIds,
          P = (0, u.Wu)(
            [p.Z],
            () => {
              var n;
              return null !==
                (n = null == C ? void 0 : C.flatMap(p.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [C],
          ),
          _ = l.useMemo(() => P.map((n) => n.id), [P]),
          O = (0, S.KK)(
            null !== (e = null == x ? void 0 : x.flags) && void 0 !== e ? e : 0,
          ),
          j = (0, u.e7)(
            [I.Z],
            () =>
              null != i &&
              !1 !== O &&
              I.Z.getEntitlementsForGuild(i, !0).some((n) => n.skuId === A),
            [O, A, i],
          ),
          D = null == x ? void 0 : x.applicationId,
          R =
            (null == T ? void 0 : T.published) === !0 &&
            (null == x ? void 0 : x.isAvailable()) === !0,
          { app: k } = (0, f.Rt)(D),
          { analyticsLocations: y } = (0, s.ZP)(),
          M = (0, h.Ev)(b, null != i ? i : void 0),
          F = null == M ? void 0 : M.subscription,
          U = null == M ? void 0 : M.subscriptionPlan,
          G = (0, h.cr)(b, null != i ? i : void 0),
          w = null == G ? void 0 : G.subscriptionPlan,
          { entitlementsLoaded: B } = (0, h.LM)({ guildId: i });
        null == i && (B = !0);
        let K = (0, c.Z)(),
          H = null != F && (0, S.Jf)(F, x),
          Y = l.useMemo(() => {
            if (!B || null == k || null == A) return d.rf.LOADING;
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
            k,
            B,
            H,
            O,
            null == w ? void 0 : w.skuId,
            A,
          ]);
        return (
          l.useEffect(() => {
            R &&
              null != A &&
              K &&
              !(p.Z.isFetchingForSKU(A) || p.Z.isLoadedForSKU(A)) &&
              a.Z.wait(() => {
                (0, o.GZ)(A);
              });
          }, [R, A, K]),
          {
            openModal: l.useCallback(() => {
              r()(null != k, "No application"),
                r()(null != A, "No SKU ID"),
                r()(R, "Cannot purchase this unpublished plan"),
                (0, g.H)({
                  subscriptionPlanId: L,
                  sku: x,
                  subscriptionGroupPlanIds: _,
                  activeSubscription: F,
                  subscribeForGuild: i,
                  disableGuildSelector: Z,
                  analyticsLocations: y,
                  analyticsLocation: E,
                }).then(() => {
                  null == N || N();
                });
            }, [k, A, R, L, x, _, i, Z, y, E, F, N]),
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: j,
          }
        );
      }
    },
    541822: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      }),
        e(47120);
      var l = e(200651),
        i = e(192379),
        r = e(557533),
        u = e.n(r),
        a = e(349361),
        o = e(875804);
      function s(n) {
        let { children: t, gradientClassName: e, ...r } = n,
          s = i.useRef(null),
          [c, d] = i.useState(!0),
          f = () => {
            var n;
            (null === (n = s.current) || void 0 === n
              ? void 0
              : n.isScrolledToBottom()) === !0
              ? d(!1)
              : d(!0);
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(a.h2, {
              fade: !0,
              ...r,
              ref: (n) => {
                null != n && ((s.current = n), f());
              },
              onScroll: f,
              children: t,
            }),
            (0, l.jsx)("div", {
              className: u()(o.containerScrollGradient, e),
              "data-shown": c,
            }),
          ],
        });
      }
    },
    269210: function (n, t, e) {
      e.d(t, {
        Gm: function () {
          return m;
        },
        Uj: function () {
          return v;
        },
        ZI: function () {
          return p;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(557533),
        r = e.n(i),
        u = e(489948),
        a = e(368072),
        o = e(777207),
        s = e(692547),
        c = e(330711),
        d = e(377199),
        f = e(847987);
      let p = 5;
      function v(n) {
        let {
          description: t,
          imgSrc: e,
          renderPurchaseButton: i,
          onPurchase: v,
          title: m,
          onDetails: h,
          benefitItems: I,
          benefitsSummary: S,
          subtitle: g,
          maxBenefits: E = p,
        } = n;
        return (0, l.jsx)(u.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != h ? h() : null != v && v();
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
                      children: m,
                    }),
                    (0, l.jsx)("div", {
                      className: d.image,
                      children:
                        null != e
                          ? (0, l.jsx)("img", { src: e.toString(), alt: "" })
                          : (0, l.jsx)(a.V, {
                              color: s.Z.colors.ICON_PRIMARY,
                              size: "custom",
                              height: 48,
                              width: 48,
                            }),
                    }),
                    null != i
                      ? i({
                          className: d.purchaseBtn,
                          onClick: (n) => {
                            n.stopPropagation(), null == v || v();
                          },
                        })
                      : null,
                    g,
                    null != t &&
                      "" !== t &&
                      (0, l.jsx)(o.x, {
                        className: d.description,
                        color: "text-normal",
                        variant: "text-sm/medium",
                        children: t,
                      }),
                  ],
                }),
              }),
              null != S &&
                (0, l.jsx)("div", {
                  className: d.benefitsSummary,
                  children: (0, l.jsx)(o.x, {
                    color: "interactive-normal",
                    variant: "text-sm/medium",
                    children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
                      count: S,
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
                        (0, l.jsx)(o.x, {
                          color: "header-secondary",
                          variant: "eyebrow",
                          children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE,
                        }),
                        I.length > E
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                I.slice(0, E),
                                (0, l.jsx)(o.x, {
                                  variant: "text-md/semibold",
                                  color: "text-secondary",
                                  children:
                                    c.Z.Messages.STOREFRONT_MORE_BENEFITS.format(
                                      { count: I.length - E },
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
      function m(n) {
        let { icon: t, header: e, description: i } = n;
        return (0, l.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, l.jsx)("div", { className: d.cardBenefitIcon, children: t }),
            (0, l.jsxs)("div", {
              children: [
                null != e &&
                  (0, l.jsx)(o.x, {
                    variant: "text-md/normal",
                    color: "header-primary",
                    children: e,
                  }),
                (0, l.jsx)(o.x, { variant: "text-sm/normal", children: i }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=bb57ba6c2ce8f4545c14.js.map
