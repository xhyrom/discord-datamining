"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53526"],
  {
    792656(i, r, s) {
      s.d(r, { A: () => n });
      var t = s(627968),
        e = s(465794),
        u = s(204413);
      function n(i) {
        let {
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: n,
            isPersistentCTA: p,
            buttonTextOverride: c,
            defaultTextOverride: o,
            iconOverride: b,
            variantOverride: d,
            ...l
          } = i,
          { subscribeButtonProps: a, subscriptionTier: h } = (0, u.$)({
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: n,
            isPersistentCTA: p,
            buttonTextOverride: c,
            defaultTextOverride: o,
            iconOverride: b,
            variantOverride: d,
          });
        return (0, t.jsx)(e.A, { ...l, ...a, subscriptionTier: h });
      }
    },
    204413(i, r, s) {
      s.d(r, { $: () => n });
      var t = s(145310),
        e = s(938973),
        u = s(788868);
      let n = (i) => {
        let {
            subscriptionTier: r = null,
            hasActivePromotion: s = !1,
            useShorterCTA: n = !1,
            isPersistentCTA: p = !1,
            buttonTextOverride: c,
            ...o
          } = i,
          { buttonText: b, marketingSubscriptionTierSkuId: d } = (0, t.s)({
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: n,
            isPersistentCTA: p,
          }),
          { subscribeButtonProps: l } = (0, e.B)({
            ...o,
            subscriptionTier: d,
            buttonTextOverride: c ?? b,
          });
        return {
          subscribeButtonProps: l,
          subscriptionTier: d === u.pe.NONE ? null : d,
        };
      };
    },
  },
]);
//# sourceMappingURL=53526.cef02f6cf64188e1.js.map
