"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41309"],
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
        Y: function () {
          return I;
        },
        p: function () {
          return g;
        },
      });
      var l = e(200651);
      e(192379);
      var i = e(860911),
        r = e(481060),
        u = e(100527),
        a = e(906732),
        o = e(887706),
        s = e(929011),
        c = e(696906),
        d = e(703656),
        f = e(626135),
        p = e(937615),
        v = e(110742),
        m = e(981631),
        h = e(388032),
        S = e(968629);
      function g(n) {
        let {
            appId: t,
            className: e,
            onClick: i,
            onHasClicked: r,
            skuId: u,
            subscriptionPlan: a,
            icon: o,
            cannotOpenReason: s,
          } = n,
          d = null != a ? (0, p.xg)(a) : null,
          f = null == s || s === c.HO.Loading,
          v = (0, c.FC)(s, null != d ? d : "");
        return f
          ? (0, l.jsx)(b, {
              appId: t,
              skuId: u,
              onClick: (n) => {
                i(n), null == r || r();
              },
              className: e,
              submitting: s === c.HO.Loading,
              children: (0, l.jsxs)("div", {
                className: S.btnContent,
                children: [
                  o,
                  null != d
                    ? h.intl.formatToPlainString(h.t.i4T8v7, { rate: d })
                    : h.intl.string(h.t.uuzaAA),
                ],
              }),
            })
          : (0, l.jsx)(Z, { className: e, children: v });
      }
      function I(n) {
        let {
            appId: t,
            className: e,
            onClick: i,
            onHasClicked: r,
            sku: o,
            icon: c,
          } = n,
          { analyticsLocations: d } = (0, a.ZP)(u.Z.APP_STOREFRONT),
          f = () => {
            (0, s.r)({ appId: t, skuId: o.id, analyticsLocations: d });
          },
          g = (0, v.M)(o.id),
          I = o.type === m.epS.DURABLE && g,
          { price: x } = o;
        return null == x
          ? null
          : I
            ? (0, l.jsx)(Z, {
                className: e,
                children: h.intl.string(h.t["/bUsx8"]),
              })
            : (0, l.jsx)(b, {
                appId: t,
                skuId: o.id,
                onClick: (n) => {
                  (null != i ? i : f)(n), null == r || r();
                },
                className: e,
                children: (0, l.jsxs)("div", {
                  className: S.btnContent,
                  children: [
                    c,
                    h.intl.format(h.t.Xp5WTk, {
                      price: (0, p.T4)(x.amount, x.currency),
                    }),
                  ],
                }),
              });
      }
      function b(n) {
        let { appId: t, skuId: e, onClick: u, ...a } = n,
          s = (0, o.Z)();
        return (0, l.jsx)(r.Button, {
          ...a,
          onClick: (n) => {
            if (
              (f.default.track(m.rMx.STOREFRONT_PURCHASE_CLICKED, {
                application_id: t,
                sku_id: e,
              }),
              !s)
            ) {
              n.preventDefault(), n.stopPropagation();
              let l = m.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, e),
                r = (0, i.Ui)(l, !1);
              (0, d.uL)(r);
              return;
            }
            null == u || u(n);
          },
        });
      }
      function Z(n) {
        let { className: t, children: e } = n;
        return (0, l.jsx)(r.Button, {
          disabled: !0,
          className: t,
          look: r.Button.Looks.OUTLINED,
          color: r.Button.Colors.PRIMARY,
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
          applicationId: S,
          showBenefitsFirst: g,
          onComplete: I,
          forcesTransitionToGuild: b,
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
                e.e("88453"),
              ]).then(e.bind(e, 759386)),
              Z = f({ guildId: m, showBenefitsFirst: g });
            return (e) =>
              (0, l.jsx)(n, {
                applicationId: S,
                activeSubscription: i,
                stepConfigs: Z,
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
                    applicationId: S,
                    guildId: null != m ? m : void 0,
                    onComplete: I,
                    forcesTransitionToGuild: b,
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
        let S = (0, o.KW)(m.flags);
        r()(S, "Guild application subscriptions unsupported!"),
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
          S = (0, i.Z)();
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
              e.e("73625"),
            ]).then(e.bind(e, 409600));
            return (e) => {
              let { onClose: i, ...r } = e;
              return (0, l.jsx)(n, {
                ...r,
                loadId: S,
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
                  load_id: S,
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
          return T;
        },
        Ev: function () {
          return C;
        },
        LM: function () {
          return b;
        },
        cr: function () {
          return O;
        },
        h6: function () {
          return Z;
        },
        jd: function () {
          return l;
        },
        qz: function () {
          return E;
        },
        sp: function () {
          return x;
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
        S = e(171246),
        g = e(981631);
      let I = 12633 == e.j ? 2592e6 : null;
      ((i = l || (l = {}))[(i.NOT_LOADED = 0)] = "NOT_LOADED"),
        (i[(i.LOADING = 1)] = "LOADING"),
        (i[(i.LOADED = 2)] = "LOADED"),
        (i[(i.ERROR = 3)] = "ERROR");
      let b = (n) => {
        let { guildId: t, canFetch: e = !0, forceRefetch: l = !1 } = n,
          i = (0, u.e7)(
            [h.Z],
            () => (null != t ? h.Z.getEntitlementsForGuildFetchState(t) : null),
            [t],
          );
        return (
          r.useEffect(() => {
            if (null == t || t === g.ME) return;
            let n = h.Z.getEntitlementsForGuildFetchState(t);
            e && (n === h.M.NOT_FETCHED || l) && (0, v.i1)(t);
          }, [t, e, l]),
          { entitlementsLoaded: i === h.M.FETCHED }
        );
      };
      function Z(n) {
        var t;
        let e =
            null !== (t = null == n ? void 0 : n.id) && void 0 !== t
              ? t
              : g.lds,
          { entitlementsLoaded: l } = b({
            guildId: e,
            canFetch: (0, u.e7)([s.Z], () => s.Z.can(g.Plq.ADMINISTRATOR, n)),
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
                  Math.max(null != i ? i : 0, Date.now() - I),
            )
          : [];
      }
      let x = (n) => {
          let [t, e] = r.useState(!1),
            l = r.useMemo(() => n.map(S.bZ), [n]);
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
        E = () => {
          let [n, t] = r.useState(0);
          return (
            r.useEffect(() => {
              t(1),
                Promise.all([
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: g.qc2.APPLICATION_SUBSCRIPTION,
                  }),
                  (0, a.p0)({
                    withSku: !0,
                    withApplication: !0,
                    entitlementType: g.qc2.PURCHASE,
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
      function T(n, t) {
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
      let N = (n) => n.items;
      function C(n, t) {
        return _(n, t, N);
      }
      let P = (n) => {
        var t;
        return null === (t = n.renewalMutations) || void 0 === t
          ? void 0
          : t.items;
      };
      function O(n, t) {
        return _(n, t, P);
      }
      function _(n, t, e) {
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
                  (0, S.KK)(i) &&
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
          { promise: h, resolve: S } = Promise.withResolvers();
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
            onComplete: S,
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
    696906: function (n, t, e) {
      e.d(t, {
        FC: function () {
          return x;
        },
        HO: function () {
          return l;
        },
        ZP: function () {
          return E;
        },
      }),
        e(390547),
        e(789020);
      var l,
        i,
        r = e(192379),
        u = e(512722),
        a = e.n(u),
        o = e(442837),
        s = e(570140),
        c = e(821849),
        d = e(906732),
        f = e(887706),
        p = e(728345),
        v = e(509545),
        m = e(55563),
        h = e(551428),
        S = e(270144),
        g = e(488915),
        I = e(171246),
        b = e(929011),
        Z = e(388032);
      function x(n, t) {
        let e;
        switch (n) {
          case 3:
            e = Z.intl.formatToPlainString(Z.t.k1ew5O, { rate: t });
            break;
          case 2:
            e = Z.intl.formatToPlainString(Z.t["Hs3Y+P"], { rate: t });
            break;
          case 4:
            e = Z.intl.string(Z.t.HDFZLS);
            break;
          case 1:
            e = Z.intl.string(Z.t.DLAKbm);
        }
        return e;
      }
      function E(n) {
        var t, e, l;
        let i,
          {
            subscribeForGuild: u,
            analyticsLocation: Z,
            skuId: x,
            onComplete: E,
            disableGuildSelector: T,
          } = n,
          N = (0, o.e7)([m.Z], () => (null != x ? m.Z.get(x) : void 0), [x]),
          C = (0, o.e7)([h.Z], () => (null != x ? h.Z.getForSKU(x) : void 0), [
            x,
          ]),
          P =
            null ===
              (t = (0, o.Wu)([v.Z], () => (null != x ? v.Z.getForSKU(x) : []), [
                x,
              ])[0]) || void 0 === t
              ? void 0
              : t.id,
          O = (0, o.e7)(
            [m.Z],
            () => (null != x ? m.Z.getParentSKU(x) : void 0),
            [x],
          ),
          _ = null == O ? void 0 : O.bundledSkuIds,
          L = (0, o.Wu)(
            [v.Z],
            () => {
              var n;
              return null !==
                (n = null == _ ? void 0 : _.flatMap(v.Z.getForSKU)) &&
                void 0 !== n
                ? n
                : [];
            },
            [_],
          ),
          j = r.useMemo(() => L.map((n) => n.id), [L]),
          A = (0, o.e7)(
            [g.Z],
            () =>
              null != u &&
              g.Z.getEntitlementsForGuild(u, !0).some((n) => {
                var t;
                return (
                  null !== (t = null == _ ? void 0 : _.includes(n.skuId)) &&
                  void 0 !== t &&
                  t
                );
              }),
            [_, u],
          ),
          k = null == N ? void 0 : N.applicationId,
          R =
            (null == C ? void 0 : C.published) === !0 &&
            (null == N ? void 0 : N.isAvailable()) === !0,
          { app: y } = (0, p.Rt)(k),
          { analyticsLocations: D } = (0, d.ZP)(),
          F = (0, S.Ev)(O, null != u ? u : void 0),
          M = (0, S.cr)(O, null != u ? u : void 0),
          { entitlementsLoaded: w } = (0, S.LM)({ guildId: u });
        null == u && (w = !0);
        let U = (0, f.Z)(),
          G = (0, I.KK)(
            null !== (l = null == N ? void 0 : N.flags) && void 0 !== l ? l : 0,
          );
        return (
          w && null != y && null != x
            ? R
              ? (null == F ? void 0 : F.subscriptionPlan.skuId) === x &&
                null == M
                ? (i = 2)
                : (null == M
                      ? void 0
                      : null === (e = M.subscriptionPlan) || void 0 === e
                        ? void 0
                        : e.skuId) === x
                  ? (i = 3)
                  : G && A && null == F && (i = 4)
              : (i = 1)
            : (i = 0),
          r.useEffect(() => {
            R &&
              null != x &&
              U &&
              !(v.Z.isFetchingForSKU(x) || v.Z.isLoadedForSKU(x)) &&
              s.Z.wait(() => {
                (0, c.GZ)(x);
              });
          }, [R, x, U]),
          {
            openModal: r.useCallback(() => {
              a()(null != y, "No application"),
                a()(null != x, "No SKU ID"),
                a()(R, "Cannot purchase this unpublished plan"),
                (0, b.H)({
                  subscriptionPlanId: P,
                  sku: N,
                  subscriptionGroupPlanIds: j,
                  activeSubscription: null == F ? void 0 : F.subscription,
                  subscribeForGuild: u,
                  disableGuildSelector: T,
                  analyticsLocations: D,
                  analyticsLocation: Z,
                }).then(() => {
                  null == E || E();
                });
            }, [
              y,
              x,
              R,
              P,
              N,
              j,
              u,
              T,
              D,
              Z,
              null == F ? void 0 : F.subscription,
              E,
            ]),
            cannotOpenReason: i,
          }
        );
      }
      ((i = l || (l = {}))[(i.Loading = 0)] = "Loading"),
        (i[(i.ItemUnavailable = 1)] = "ItemUnavailable"),
        (i[(i.CurrentPlan = 2)] = "CurrentPlan"),
        (i[(i.UpcomingPlan = 3)] = "UpcomingPlan"),
        (i[(i.OtherSubscription = 4)] = "OtherSubscription");
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
        G: function () {
          return v;
        },
        U: function () {
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
      function p(n) {
        let {
          description: t,
          imgSrc: e,
          renderPurchaseButton: i,
          onPurchase: p,
          title: v,
          onDetails: m,
          benefitItems: h,
          benefitsSummary: S,
          subtitle: g,
        } = n;
        return (0, l.jsx)(u.tE, {
          children: (0, l.jsxs)("div", {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
              null != m ? m() : null != p && p();
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
                            n.stopPropagation(), null == p || p();
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
      function v(n) {
        let { icon: t, name: e, description: i } = n;
        return (0, l.jsxs)("div", {
          className: d.cardBenefit,
          children: [
            (0, l.jsx)("div", { className: d.cardBenefitIcon, children: t }),
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)(o.x, { variant: "text-sm/semibold", children: e }),
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
  },
]);
//# sourceMappingURL=c5c644652149b58c90f3.js.map
