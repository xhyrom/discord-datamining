"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79440"],
  {
    367319(e, t, n) {
      n.d(t, {
        k5: () => O,
        ar: () => o,
        k0: () => f,
        f9: () => l,
        nf: () => R,
        Bv: () => G,
        g5: () => M,
      });
      var r = n(64700),
        u = n(989349),
        _ = n.n(u),
        i = n(17928),
        a = n(155718),
        c = n(166403),
        A = n(89366),
        N = n(881489),
        s = n(694080);
      let T = (0, n(945810).mj)({
        name: "2026-04-trial-continuation-discount",
        kind: "user",
        defaultConfig: !1,
        variations: { 0: !1, 1: !0 },
      });
      var I = n(422936),
        E = n(234419),
        d = n(788868);
      function o() {
        let e = (0, E.V)(),
          t = (0, A.QQ)(),
          n = (0, I.O)(),
          r = O();
        return null != e || t || null != n || r;
      }
      let O = () => {
          let e = (0, i.bG)([c.A], () => c.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
          return null != t && _()(Date.now()) <= _()(t);
        },
        R = () => {
          let e = (0, i.bG)([c.A], () => c.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
          switch (t) {
            case d.q:
            case d.lj:
              return { duration: 1, percentage: 30, discountId: t };
            case d.EG:
            case d.TU:
            case d.KG:
              return { duration: 3, percentage: 30, discountId: t };
            case d.HF:
              return { duration: 1, percentage: 40, discountId: t };
            case d.BR:
              return { duration: 1, percentage: 20, discountId: t };
            case d.CW:
              return { duration: 1, percentage: 25, discountId: t };
            case d.V2:
              return { duration: 1, percentage: 40, discountId: t };
            default:
              return;
          }
        },
        M = (e) => {
          let [t, n] = r.useState(!1),
            [u, _] = r.useState(!1),
            [i, a] = r.useState(null);
          if (e)
            return {
              churnUserDiscountOffer: i,
              isFetchingChurnDiscountOffer: u,
            };
          let c = () => {
            n(!0), _(!1);
          };
          return (
            u ||
              t ||
              (_(!0),
              (0, s.qz)()
                .then((e) => {
                  a(e), c();
                })
                .catch((e) => {
                  c();
                })),
            { churnUserDiscountOffer: i, isFetchingChurnDiscountOffer: u }
          );
        },
        l = () => {
          let e = (0, i.bG)([c.A], () => c.A.getPremiumTypeSubscription()),
            t = O(),
            n = (function (e) {
              let { location: t } = e;
              return T.useConfig({ location: t });
            })({ location: "churn_offer" }),
            r = null !== e && e.hasPremiumNitroMonthly,
            u = !!e?.hasActiveTrial;
          return r && !t && (!u || n);
        },
        G = (e) => {
          for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
            if (null != e)
              switch (e.discount_id) {
                case d.q:
                  return {
                    duration: 1,
                    percentage: e.percentage_amount,
                    discountId: e.discount_id,
                  };
                case d.EG:
                  return {
                    duration: 3,
                    percentage: e.percentage_amount,
                    discountId: e.discount_id,
                  };
              }
          }
          return null;
        },
        f = () => (0, N.ds)();
    },
    345394(e, t, n) {
      n.d(t, { A: () => r });
      let r =
        "https://cdn.discordapp.com/assets/content/6b2632bb9dbba806cf6bd3a42efeaedfe508bcffefc6ed5325260f87dd619dc6.svg";
    },
    877624(e, t, n) {
      n.d(t, { C: () => u });
      var r,
        u =
          (((r = {})[(r.ANNOUNCEMENT_MODAL = 0)] = "ANNOUNCEMENT_MODAL"),
          (r[(r.PREMIUM_TAB = 1)] = "PREMIUM_TAB"),
          (r[(r.MARKETING_PAGE_BANNER = 2)] = "MARKETING_PAGE_BANNER"),
          (r[(r.PAYMENT_MODAL_BANNER = 3)] = "PAYMENT_MODAL_BANNER"),
          (r[(r.MOBILE_BOTTOM_SHEET = 4)] = "MOBILE_BOTTOM_SHEET"),
          (r[(r.GIFT_ICON = 5)] = "GIFT_ICON"),
          (r[(r.GIFT_ICON_COACHMARK = 6)] = "GIFT_ICON_COACHMARK"),
          (r[(r.GIFT_PLAN_SELECTION_CARD_BANNER = 7)] =
            "GIFT_PLAN_SELECTION_CARD_BANNER"),
          (r[(r.GIFT_CUSTOMIZATION_BANNER = 8)] = "GIFT_CUSTOMIZATION_BANNER"),
          (r[(r.BILLING_SETTINGS_NITRO_GIFT_BANNER = 9)] =
            "BILLING_SETTINGS_NITRO_GIFT_BANNER"),
          (r[(r.GIFT_REMINDER_NAGBAR = 10)] = "GIFT_REMINDER_NAGBAR"),
          (r[(r.GIFT_REMINDER_COACHMARK = 11)] = "GIFT_REMINDER_COACHMARK"),
          (r[(r.PREMIUM_TAB_TOOLTIP = 12)] = "PREMIUM_TAB_TOOLTIP"),
          (r[(r.PREMIUM_TAB_POPOVER = 13)] = "PREMIUM_TAB_POPOVER"),
          (r[(r.NAGBAR = 14)] = "NAGBAR"),
          r);
    },
  },
]);
//# sourceMappingURL=79440.f42f76c8d24dd347.js.map
