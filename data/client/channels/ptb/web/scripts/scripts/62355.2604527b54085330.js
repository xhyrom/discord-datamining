"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62355"],
  {
    145310(t, i, n) {
      n.d(i, { s: () => o });
      var r = n(927578),
        e = n(422936),
        l = n(234419),
        a = n(511484),
        s = n(788868),
        u = n(985018);
      let o = (t) => {
        var i;
        let {
            subscriptionTier: n,
            hasActivePromotion: o = !1,
            useShorterCTA: p = !1,
            isPersistentCTA: v = !1,
          } = t,
          T = (0, l.V)(),
          c = T?.subscription_trial,
          _ = (0, e.O)(),
          d = (0, a.U9)(_, s.pe.TIER_2) ? s.pe.TIER_2 : void 0,
          b = (0, r.tS)({
            intervalType: c?.interval,
            intervalCount: c?.interval_count,
          }),
          k = n ?? T?.subscription_trial?.sku_id ?? d,
          g = null != c && k === c.sku_id,
          h = T?.trial_id === s.Dw;
        return {
          buttonText: o
            ? u.intl.string(u.t.J61px0)
            : null != _
              ? ((i = _.discount.amount),
                p || v
                  ? u.intl.string(u.t.fkPGat)
                  : k === s.pe.TIER_2
                    ? u.intl.formatToPlainString(u.t.bkQ4bH, { percent: i })
                    : void 0)
              : ((t) => {
                  let {
                    showTrialCTA: i,
                    subscriptionTier: n,
                    trialDurationCopy: e,
                    isPersistentCTA: l,
                    shouldShowReferralTrialCopy: a,
                    subscriptionTrial: o,
                  } = t;
                  return i && a
                    ? u.intl.string(u.t.bXTClc)
                    : i && (n === s.pe.TIER_2 || l)
                      ? (0, r.FY)({
                          intervalType: o?.interval,
                          intervalCount: o?.interval_count,
                        })
                      : i
                        ? u.intl.formatToPlainString(u.t.nTmm2v, {
                            freeTrialText: e,
                          })
                        : void 0;
                })({
                  showTrialCTA: g,
                  subscriptionTier: k,
                  trialDurationCopy: b,
                  isPersistentCTA: v,
                  shouldShowReferralTrialCopy: h,
                  subscriptionTrial: c,
                }),
          marketingSubscriptionTierSkuId: k,
        };
      };
    },
  },
]);
//# sourceMappingURL=62355.2604527b54085330.js.map
