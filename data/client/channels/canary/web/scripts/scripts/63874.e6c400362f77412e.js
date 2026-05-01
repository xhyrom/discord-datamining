"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63874"],
  {
    396375(t, e, r) {
      r.d(e, { A: () => T });
      var s = r(627968);
      r(64700);
      var _ = r(462887),
        a = r(862482),
        c = r(736653),
        i = r(234419),
        E = r(725807),
        M = r(145310),
        n = r(943386);
      let T = (t) => {
        let {
            textOptions: e,
            subscriptionTier: r,
            hasActivePromotion: T = !1,
            isPersistentCTA: o = !1,
            useShorterCTA: N = !1,
            showGradient: R,
            confirmationFooter: U,
            color: l,
            ...A
          } = t,
          u = (0, c.Ay)(),
          { buttonText: d, marketingSubscriptionTierSkuId: O } = (0, M.s)({
            hasActivePromotion: T,
            subscriptionTier: r,
            useShorterCTA: N,
            isPersistentCTA: o,
          }),
          p = (0, i.V)(),
          P = p?.subscription_trial,
          h = null != P && O === P.sku_id,
          H = l ?? ((0, _.M)(u) ? a.XD.BRAND_INVERTED : a.XD.BRAND);
        return (0, s.jsx)(E.A, {
          color: H,
          textOptions: {
            textOverride: d,
            textClassName: h ? n.A : void 0,
            ...e,
          },
          onlyShineOnHover: !0,
          subscriptionTier: O,
          showGradient: R,
          confirmationFooter: U,
          ...A,
        });
      };
    },
    764231(t, e, r) {
      r.d(e, { T: () => a }), r(439174), r(112848);
      var s = r(788868),
        _ = r(985018);
      let a = (t, e) => {
        switch (t) {
          case s.Ac.PREMIUM_TENURE_1_MONTH:
          case s.Ac.PREMIUM_TENURE_3_MONTH:
          case s.Ac.PREMIUM_TENURE_6_MONTH:
            return _.intl.formatToPlainString(_.t.erUSmA, { months: e });
          case s.Ac.PREMIUM_TENURE_12_MONTH:
          case s.Ac.PREMIUM_TENURE_24_MONTH:
          case s.Ac.PREMIUM_TENURE_36_MONTH:
          case s.Ac.PREMIUM_TENURE_60_MONTH:
          case s.Ac.PREMIUM_TENURE_72_MONTH:
            return _.intl.formatToPlainString(_.t.qOdyDe, { years: e / 12 });
          default:
            return null;
        }
      };
    },
  },
]);
//# sourceMappingURL=63874.e6c400362f77412e.js.map
