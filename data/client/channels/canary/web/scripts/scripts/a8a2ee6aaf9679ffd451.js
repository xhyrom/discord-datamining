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
      var u = n(481060),
        a = n(960346);
      function l() {
        return (0, r.jsx)(u.Spinner, { className: a.spinner });
      }
    },
    614223: function (e, t, n) {
      n.d(t, {
        $g: function () {
          return l;
        },
        Kp: function () {
          return a;
        },
        nA: function () {
          return i;
        },
      });
      var r = n(74538),
        u = n(474936);
      function a(e) {
        let {
          isTrial: t,
          isGift: n,
          selectedSkuId: r,
          startedPaymentFlowWithPaymentSources: a,
          inReverseTrial: l,
        } = e;
        return !t && !n && !l && null != r && u.YQ.includes(r) && a;
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
        let a = null != t ? (0, r.Af)(t) : null,
          l = u.mn[e],
          i = null != n ? n : l;
        return (
          null != a
            ? i === a.planId && i === u.IW[e]
              ? (i = u.mn[e])
              : i === a.planId && i === u.mn[e]
                ? (i = u.IW[e])
                : (a.planId === u.Xh.PREMIUM_YEAR_TIER_0 ||
                    a.planId === u.Xh.PREMIUM_YEAR_TIER_1) &&
                  i === u.Xh.PREMIUM_MONTH_TIER_2 &&
                  (i = u.Xh.PREMIUM_YEAR_TIER_2)
            : i === u.Xh.PREMIUM_YEAR_TIER_1 && (i = u.Xh.PREMIUM_MONTH_TIER_1),
          i
        );
      }
    },
    857039: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(987209),
        u = n(599659);
      function a(e) {
        let { location: t } = e,
          { enabled: n } = u.O.useExperiment(
            { location: t },
            { autoTrackExposure: !1 },
          ),
          { alreadyHasHalloweenDeco: a, isGift: l } = (0, r.wD)();
        return n && l && !1 === a;
      }
    },
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      }),
        n(47120),
        n(411104);
      var r = n(200651),
        u = n(192379),
        a = n(442837),
        l = n(481060),
        i = n(607070),
        d = n(409302),
        c = n(474936);
      function s(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: s = !0,
            defaultAnimationState: f,
            idleAnimationState: h,
          } = e,
          b = (0, a.e7)([i.Z], () => i.Z.useReducedMotion),
          [o, E] = u.useState(f),
          R = u.useRef((0, d._)(t, o)),
          [S, k] = u.useState(null == h),
          [I, O] = u.useState(!1),
          [m, p] = u.useState(-1);
        u.useEffect(() => {
          null == h && E(f);
        }, [h, f]);
        let _ = {
            applyAnimation: () => {
              (R.current = (0, d._)(t, o)), p((e) => e + 1);
            },
            idleAnimationState: h,
            isChanging: I,
            resetAnimation: () => {
              k(!1), O(!0), p(-1), E(f);
            },
            versionKey: m,
          },
          A = u.useRef(_);
        u.useEffect(() => {
          A.current = _;
        }),
          u.useEffect(() => {
            let {
              resetAnimation: e,
              versionKey: t,
              applyAnimation: n,
            } = A.current;
            if (null != h && t >= 0) {
              e();
              return;
            }
            n();
          }, [t, h]),
          u.useEffect(() => {
            let {
              applyAnimation: e,
              isChanging: t,
              idleAnimationState: n,
            } = A.current;
            (!t || null == n) && e();
          }, [o]),
          u.useEffect(() => {
            let { applyAnimation: e, idleAnimationState: t } = A.current;
            I && (k(null == t), O(!1), e());
          }, [I]);
        if (!c.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, r.jsx)(l.LottieAnimation, {
          importData: R.current,
          shouldAnimate: !b && s,
          className: n,
          versionKey: m,
          onComplete:
            null != h
              ? () => {
                  null != h && (E(h), k(!0));
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
          return f;
        },
      });
      var r = n(192379),
        u = n(442837),
        a = n(668781),
        l = n(509545),
        i = n(580130),
        d = n(74538),
        c = n(231338),
        s = n(388032);
      function f(e, t, n) {
        let u = { closeModal: t, isGift: n },
          l = r.useRef(u);
        r.useEffect(() => {
          l.current = u;
        }),
          r.useEffect(() => {
            let { closeModal: t, isGift: n } = l.current;
            null != e &&
              e.isPurchasedExternally &&
              null != e.paymentGateway &&
              !n &&
              (a.Z.show({
                title: s.intl.formatToPlainString(s.t["6mIX6u"], {
                  paymentGatewayName: c.Vz[e.paymentGateway],
                }),
                body: s.intl.format(s.t.EOa8en, {
                  paymentGatewayName: c.Vz[e.paymentGateway],
                  subscriptionManagementLink: (0, d.JE)(
                    e.paymentGateway,
                    "SUBSCRIPTION_MANAGEMENT",
                  ),
                }),
                confirmText: s.intl.string(s.t.BddRzc),
              }),
              t());
          }, [e]);
      }
      let h = [];
      function b(e, t) {
        let n = (0, u.e7)([l.Z], () => (null != e ? l.Z.get(e) : null)),
          a = (0, u.e7)([i.Z], () => {
            var e;
            return null != n &&
              null !== (e = i.Z.getForSku(n.skuId)) &&
              void 0 !== e
              ? e
              : h;
          }),
          c = r.useMemo(
            () =>
              Array.from(a).filter((e) => {
                let { parentId: t, consumed: n } = e;
                return null != t && !n;
              }),
            [a],
          );
        return {
          hasEntitlements:
            !t &&
            null != n &&
            null != c &&
            c.length >= d.ZP.getIntervalMonths(n.interval, n.intervalCount),
          entitlements: c,
        };
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return a;
        },
      });
      var r = n(479446),
        u = n(474936);
      let a = (e, t) => {
        let a;
        switch (e) {
          case u.Cj.SNOWGLOBE:
            a = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case u.Cj.BOX:
            a = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case u.Cj.CUP:
            a = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case u.Cj.STANDARD_BOX:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.CAKE:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.CHEST:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.COFFEE:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 482293, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.SEASONAL_CAKE:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.SEASONAL_CHEST:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 897198, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.SEASONAL_COFFEE:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case u.Cj.NITROWEEN_STANDARD:
            switch (t) {
              case r.SR.IDLE:
                a = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case r.SR.LOOP:
                a = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                a = () =>
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
            a = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return a;
      };
    },
  },
]);
//# sourceMappingURL=a8a2ee6aaf9679ffd451.js.map
