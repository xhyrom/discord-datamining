"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52774"],
  {
    981632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120),
        n(411104);
      var i = n(735250),
        s = n(470079),
        r = n(442837),
        a = n(481060),
        u = n(607070),
        l = n(409302),
        d = n(474936);
      function o(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: o = !0,
            defaultAnimationState: h,
            idleAnimationState: c,
          } = e,
          b = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
          [f, p] = s.useState(h),
          S = s.useRef((0, l._)(t, f)),
          [_, E] = s.useState(null == c),
          [k, m] = s.useState(!1),
          [I, O] = s.useState(-1),
          L = () => {
            (S.current = (0, l._)(t, f)), O((e) => e + 1);
          },
          g = () => {
            E(!1), m(!0), O(-1), p(h);
          };
        s.useEffect(() => {
          null == c && p(h);
        }, [c, h]),
          s.useEffect(() => {
            if (null != c && I >= 0) {
              g();
              return;
            }
            L();
          }, [t, c]),
          s.useEffect(() => {
            (!k || null == c) && L();
          }, [f]),
          s.useEffect(() => {
            k && (E(null == c), m(!1), L());
          }, [k]);
        if (!d.Cj.hasOwnProperty(t))
          throw Error("Unexpected giftStyle ".concat(t));
        return (0, i.jsx)(a.LottieAnimation, {
          importData: S.current,
          shouldAnimate: !b && o,
          className: n,
          versionKey: I,
          onComplete:
            null != c
              ? () => {
                  null != c && (p(c), E(!0));
                }
              : void 0,
          loop: _,
        });
      }
    },
    409302: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var i = n(479446),
        s = n(474936);
      let r = (e, t) => {
        let r;
        switch (e) {
          case s.Cj.SNOWGLOBE:
            r = () =>
              n
                .e("20268")
                .then(n.t.bind(n, 22952, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case s.Cj.BOX:
            r = () =>
              n
                .e("37372")
                .then(n.t.bind(n, 459274, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case s.Cj.CUP:
            r = () =>
              n
                .e("37066")
                .then(n.t.bind(n, 990632, 19))
                .then((e) => {
                  let { default: t } = e;
                  return t;
                });
            break;
          case s.Cj.STANDARD_BOX:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("60592")
                    .then(n.t.bind(n, 433166, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("81358")
                    .then(n.t.bind(n, 145894, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("46468")
                    .then(n.t.bind(n, 70303, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.CAKE:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("5996")
                    .then(n.t.bind(n, 889601, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("71378")
                    .then(n.t.bind(n, 445637, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("69806")
                    .then(n.t.bind(n, 549883, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.CHEST:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("38506")
                    .then(n.t.bind(n, 449445, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("31085")
                    .then(n.t.bind(n, 837312, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("40331")
                    .then(n.t.bind(n, 669711, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.COFFEE:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("23847")
                    .then(n.t.bind(n, 98860, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("93554")
                    .then(n.t.bind(n, 732573, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("71244")
                    .then(n.t.bind(n, 398161, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.SEASONAL_STANDARD_BOX:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("20196")
                    .then(n.t.bind(n, 862977, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("58903")
                    .then(n.t.bind(n, 883984, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("62065")
                    .then(n.t.bind(n, 402483, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.SEASONAL_CAKE:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("22101")
                    .then(n.t.bind(n, 953256, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("63007")
                    .then(n.t.bind(n, 320152, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("68822")
                    .then(n.t.bind(n, 721670, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.SEASONAL_CHEST:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("97674")
                    .then(n.t.bind(n, 897198, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("37357")
                    .then(n.t.bind(n, 967705, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("72637")
                    .then(n.t.bind(n, 209128, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.SEASONAL_COFFEE:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("83646")
                    .then(n.t.bind(n, 804732, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("92695")
                    .then(n.t.bind(n, 702411, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
                  n
                    .e("12112")
                    .then(n.t.bind(n, 335878, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
            }
            break;
          case s.Cj.NITROWEEN_STANDARD:
            switch (t) {
              case i.SR.IDLE:
                r = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              case i.SR.LOOP:
                r = () =>
                  n
                    .e("63401")
                    .then(n.t.bind(n, 972224, 19))
                    .then((e) => {
                      let { default: t } = e;
                      return t;
                    });
                break;
              default:
                r = () =>
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
            r = () => Promise.resolve("Error: Invalid giftStyle");
        }
        return r;
      };
    },
    590783: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(789020);
      var i = n(913527),
        s = n.n(i),
        r = n(81825),
        a = n(630388),
        u = n(301766),
        l = n(474936);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let o = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class h extends r.Z {
        static createFromServer(e) {
          return new h({
            userId: null != e.user ? e.user.id : null,
            code: e.code,
            skuId: e.sku_id,
            applicationId: e.application_id,
            uses: e.uses,
            maxUses: e.max_uses,
            storeListingId: null != e.store_listing ? e.store_listing.id : null,
            expiresAt: null != e.expires_at ? s()(e.expires_at) : null,
            redeemed: e.redeemed,
            subscriptionPlanId:
              null != e.subscription_plan
                ? e.subscription_plan.id
                : e.subscription_plan_id,
            subscriptionPlan:
              null != e.subscription_plan
                ? u.ZP.createFromServer(e.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != e.entitlement_branches ? e.entitlement_branches : null,
            flags: null != e.flags ? e.flags : 0,
            giftStyle: e.gift_style,
            subscriptionTrial:
              null != e.subscription_trial
                ? {
                    id: e.subscription_trial.id,
                    interval: e.subscription_trial.interval,
                    intervalCount: e.subscription_trial.interval_count,
                    skuId: e.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != e.promotion
                ? {
                    id: e.promotion.id,
                    startDate: e.promotion.start_date,
                    endDate: e.promotion.end_date,
                    inboundHeaderText: e.promotion.inbound_header_text,
                    inboundBodyText: e.promotion.inbound_body_text,
                    inboundHelpCenterLink: e.promotion.inbound_help_center_link,
                  }
                : null,
          });
        }
        isExpired() {
          let e = this.expiresAt;
          return null != e && s()().isAfter(e);
        }
        get hasMultipleCopies() {
          return this.maxUses > 1;
        }
        get isClaimed() {
          return this.uses >= this.maxUses;
        }
        get remainingUses() {
          return this.maxUses - this.uses;
        }
        get isSubscription() {
          return null != this.subscriptionPlanId;
        }
        get premiumSubscriptionType() {
          return (this.isSubscription && l.y7[this.skuId]) || null;
        }
        get isSelfRedeemable() {
          return !(0, a.yE)(this.flags, o.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, a.yE)(
            this.flags,
            o.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
        constructor(e) {
          super(),
            d(this, "userId", void 0),
            d(this, "code", void 0),
            d(this, "skuId", void 0),
            d(this, "applicationId", void 0),
            d(this, "uses", void 0),
            d(this, "maxUses", void 0),
            d(this, "expiresAt", void 0),
            d(this, "redeemed", void 0),
            d(this, "storeListingId", void 0),
            d(this, "subscriptionPlanId", void 0),
            d(this, "subscriptionPlan", void 0),
            d(this, "revoked", void 0),
            d(this, "entitlementBranches", void 0),
            d(this, "flags", void 0),
            d(this, "subscriptionTrial", void 0),
            d(this, "promotion", void 0),
            d(this, "giftStyle", void 0),
            (this.userId = e.userId),
            (this.code = e.code),
            (this.skuId = e.skuId),
            (this.applicationId = e.applicationId),
            (this.uses = e.uses),
            (this.maxUses = e.maxUses),
            (this.expiresAt = e.expiresAt),
            (this.redeemed = e.redeemed),
            (this.storeListingId = e.storeListingId),
            (this.subscriptionPlanId = e.subscriptionPlanId),
            (this.subscriptionPlan = e.subscriptionPlan),
            (this.revoked = e.revoked),
            (this.entitlementBranches = e.entitlementBranches),
            (this.flags = e.flags),
            (this.subscriptionTrial = e.subscriptionTrial),
            (this.promotion = e.promotion),
            (this.giftStyle = e.giftStyle);
        }
      }
    },
  },
]);
//# sourceMappingURL=57cb2aa4ecf20b7ce418.js.map
