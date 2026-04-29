"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33134"],
  {
    7133(s, i, e) {
      e.d(i, { A: () => d }), e(938796);
      var t = e(989349),
        r = e.n(t),
        n = e(665260),
        l = e(315069),
        u = e(835095),
        a = e(832946),
        o = e(788868);
      let p = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4,
      });
      class d extends l.A {
        userId;
        code;
        skuId;
        applicationId;
        uses;
        maxUses;
        expiresAt;
        redeemed;
        storeListingId;
        subscriptionPlanId;
        subscriptionPlan;
        revoked;
        entitlementBranches;
        flags;
        subscriptionTrial;
        promotion;
        giftStyle;
        static createFromServer(s) {
          return new d({
            userId: null != s.user ? s.user.id : null,
            code: s.code,
            skuId: s.sku_id,
            applicationId: s.application_id,
            uses: s.uses,
            maxUses: s.max_uses,
            storeListingId: null != s.store_listing ? s.store_listing.id : null,
            expiresAt: null != s.expires_at ? r()(s.expires_at) : null,
            redeemed: s.redeemed,
            subscriptionPlanId:
              null != s.subscription_plan
                ? s.subscription_plan.id
                : s.subscription_plan_id,
            subscriptionPlan:
              null != s.subscription_plan
                ? a.Ay.createFromServer(s.subscription_plan)
                : null,
            revoked: !1,
            entitlementBranches:
              null != s.entitlement_branches ? s.entitlement_branches : null,
            flags: null != s.flags ? s.flags : 0,
            giftStyle: s.gift_style,
            subscriptionTrial:
              null != s.subscription_trial
                ? {
                    id: s.subscription_trial.id,
                    interval: s.subscription_trial.interval,
                    intervalCount: s.subscription_trial.interval_count,
                    skuId: s.subscription_trial.sku_id,
                  }
                : null,
            promotion:
              null != s.promotion ? u.A.createFromServer(s.promotion) : null,
          });
        }
        constructor(s) {
          super(),
            (this.userId = s.userId),
            (this.code = s.code),
            (this.skuId = s.skuId),
            (this.applicationId = s.applicationId),
            (this.uses = s.uses),
            (this.maxUses = s.maxUses),
            (this.expiresAt = s.expiresAt),
            (this.redeemed = s.redeemed),
            (this.storeListingId = s.storeListingId),
            (this.subscriptionPlanId = s.subscriptionPlanId),
            (this.subscriptionPlan = s.subscriptionPlan),
            (this.revoked = s.revoked),
            (this.entitlementBranches = s.entitlementBranches),
            (this.flags = s.flags),
            (this.subscriptionTrial = s.subscriptionTrial),
            (this.promotion = s.promotion),
            (this.giftStyle = s.giftStyle);
        }
        isExpired() {
          let s = this.expiresAt;
          return null != s && r()().isAfter(s);
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
          return this.isSubscription ? (o.WN[this.skuId] ?? null) : null;
        }
        get isSelfRedeemable() {
          return !(0, n.Lt)(this.flags, p.NOT_SELF_REDEEMABLE);
        }
        get isExistingPremiumSubscriptionDisallowed() {
          return (0, n.Lt)(
            this.flags,
            p.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED,
          );
        }
        get analyticsData() {
          return { gift_code: this.code, gift_code_max_uses: this.maxUses };
        }
        toString() {
          return this.code;
        }
      }
    },
  },
]);
//# sourceMappingURL=33134.61abfe8ebad70088.js.map
