"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26182"],
  {
    456251: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(481060),
        u = n(244203);
      function l() {
        return (0, r.jsx)(a.Spinner, { className: u.spinner });
      }
    },
    614223: function (e, t, n) {
      n.d(t, {
        $g: function () {
          return l;
        },
        Kp: function () {
          return u;
        },
        nA: function () {
          return i;
        },
      });
      var r = n(74538),
        a = n(474936);
      function u(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: r,
          startedPaymentFlowWithPaymentSources: u,
          inReverseTrial: l,
        } = e;
        return !t && !n && !l && null != r && a.YQ.includes(r) && u;
      }
      function l(e, t, n) {
        let r = !1;
        return (
          e &&
            null != t &&
            null == t.invoiceItems.find((e) => e.subscriptionPlanId === n.id) &&
            (r = !0),
          r
        );
      }
      function i(e, t, n) {
        let u = null != t ? (0, r.Af)(t) : null,
          l = a.mn[e],
          i = null != n ? n : l;
        return (
          null != u
            ? i === u.planId && i === a.IW[e]
              ? (i = a.mn[e])
              : i === u.planId && i === a.mn[e]
                ? (i = a.IW[e])
                : (u.planId === a.Xh.PREMIUM_YEAR_TIER_0 ||
                    u.planId === a.Xh.PREMIUM_YEAR_TIER_1) &&
                  i === a.Xh.PREMIUM_MONTH_TIER_2 &&
                  (i = a.Xh.PREMIUM_YEAR_TIER_2)
            : i === a.Xh.PREMIUM_YEAR_TIER_1 && (i = a.Xh.PREMIUM_MONTH_TIER_1),
          i
        );
      }
    },
    857039: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(987209),
        a = n(599659);
      function u(e) {
        let { location: t } = e,
          { enabled: n } = a.O.useExperiment(
            { location: t },
            { autoTrackExposure: !1 },
          ),
          { alreadyHasHalloweenDeco: u, isGift: l } = (0, r.wD)();
        return n && l && !1 === u;
      }
    },
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120),
        n(411104);
      var r = n(200651),
        a = n(192379),
        u = n(442837),
        l = n(481060),
        i = n(607070),
        d = n(409302),
        s = n(474936);
      function h(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: h = !0,
            defaultAnimationState: c,
            idleAnimationState: f,
          } = e,
          b = (0, u.e7)([i.Z], () => i.Z.useReducedMotion),
          [E, o] = a.useState(c),
          R = a.useRef((0, d._)(t, E)),
          [S, I] = a.useState(null == f),
          [k, O] = a.useState(!1),
          [_, A] = a.useState(-1),
          L = () => {
            (R.current = (0, d._)(t, E)), A((e) => e + 1);
          },
          p = () => {
            I(!1), O(!0), A(-1), o(c);
          };
        a.useEffect(() => {
          null == f && o(c);
        }, [f, c]),
          a.useEffect(() => {
            if (null != f && _ >= 0) {
              p();
              return;
            }
            L();
          }, [t, f]),
          a.useEffect(() => {
            (!k || null == f) && L();
          }, [E]),
          a.useEffect(() => {
            k && (I(null == f), O(!1), L());
          }, [k]);
        if (!s.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, r.jsx)(l.LottieAnimation, {
          importData: R.current,
          shouldAnimate: !b && h,
          className: n,
          versionKey: _,
          onComplete:
            null != f
              ? () => {
                  null != f && (o(f), I(!0));
                }
              : void 0,
          loop: S,
        });
      }
    },
    459965: function (e, t, n) {
      n.d(t, {
        H: function () {
          return b;
        },
        w: function () {
          return c;
        },
      });
      var r = n(192379),
        a = n(442837),
        u = n(668781),
        l = n(509545),
        i = n(580130),
        d = n(74538),
        s = n(231338),
        h = n(689938);
      function c(e, t, n) {
        r.useEffect(() => {
          null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (u.Z.show({
              title: h.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                paymentGatewayName: s.Vz[e.paymentGateway],
              }),
              body: h.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                paymentGatewayName: s.Vz[e.paymentGateway],
                subscriptionManagementLink: (0, d.JE)(
                  e.paymentGateway,
                  "SUBSCRIPTION_MANAGEMENT",
                ),
              }),
              confirmText: h.Z.Messages.OKAY,
            }),
            t());
        }, [e]);
      }
      let f = [];
      function b(e, t) {
        let n = (0, a.e7)([l.Z], () => (null != e ? l.Z.get(e) : null)),
          u = (0, a.e7)([i.Z], () => {
            var e;
            return null != n &&
              null !== (e = i.Z.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : f;
          }),
          s = r.useMemo(
            () =>
              Array.from(u).filter((e) => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [u],
          );
        return {
          hasEntitlements:
            !t &&
            null != n &&
            null != s &&
            s.length >= d.ZP.getIntervalMonths(n.interval, n.intervalCount),
          entitlements: s,
        };
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      });
      var r = n(479446),
        a = n(474936);
      let u = (e, t) => {
        let u;
        switch (e) {
          case a.Cj.SNOWGLOBE:
            u = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.Cj.BOX:
            u = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.Cj.CUP:
            u = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case a.Cj.STANDARD_BOX:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.CAKE:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.CHEST:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.COFFEE:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 98860, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_CAKE:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_CHEST:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 897198, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.SEASONAL_COFFEE:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case a.Cj.NITROWEEN_STANDARD:
            switch (t) {
              case r.SR.IDLE:
                u = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                u = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                u = () =>
                  n
                    .e("61365")
                    .then(n.t.bind(n, 279858, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          default:
            u = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return u;
      };
    },
  },
]);
//# sourceMappingURL=3a8c2a18b4d521d8d69b.js.map
