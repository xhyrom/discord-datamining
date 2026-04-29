"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5895"],
  {
    526292(e, t, n) {
      n.d(t, {
        Bv: () => G,
        ar: () => d,
        f9: () => M,
        g5: () => o,
        k0: () => B,
        k5: () => O,
        nf: () => R,
      });
      var r = n(64700),
        _ = n(989349),
        u = n.n(_),
        c = n(17928),
        a = n(155718),
        i = n(166403),
        A = n(89366),
        N = n(881489),
        s = n(694080),
        T = n(422936),
        I = n(234419),
        E = n(788868);
      function d() {
        let e = (0, I.V)(),
          t = (0, A.QQ)(),
          n = (0, T.O)(),
          r = O();
        return null != e || t || null != n || r;
      }
      let O = () => {
          let e = (0, c.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
          return null != t && u()(Date.now()) <= u()(t);
        },
        R = () => {
          let e = (0, c.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
          switch (t) {
            case E.q:
            case E.lj:
              return { duration: 1, percentage: 30, discountId: t };
            case E.EG:
            case E.TU:
            case E.KG:
              return { duration: 3, percentage: 30, discountId: t };
            case E.HF:
              return { duration: 1, percentage: 40, discountId: t };
            case E.BR:
              return { duration: 1, percentage: 20, discountId: t };
            case E.CW:
              return { duration: 1, percentage: 25, discountId: t };
            case E.V2:
              return { duration: 1, percentage: 40, discountId: t };
            default:
              return;
          }
        },
        o = (e) => {
          let [t, n] = r.useState(!1),
            [_, u] = r.useState(!1),
            [c, a] = r.useState(null);
          if (e)
            return {
              churnUserDiscountOffer: c,
              isFetchingChurnDiscountOffer: _,
            };
          let i = () => {
            n(!0), u(!1);
          };
          return (
            _ ||
              t ||
              (u(!0),
              (0, s.qz)()
                .then((e) => {
                  a(e), i();
                })
                .catch((e) => {
                  i();
                })),
            { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: _ }
          );
        },
        M = () => {
          let e = (0, c.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
            t = O(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = !!e?.hasActiveTrial;
          return n && !r && !t;
        },
        G = (e) => {
          for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
            if (null != e)
              switch (e.discount_id) {
                case E.q:
                  return {
                    duration: 1,
                    percentage: e.percentage_amount,
                    discountId: e.discount_id,
                  };
                case E.EG:
                  return {
                    duration: 3,
                    percentage: e.percentage_amount,
                    discountId: e.discount_id,
                  };
              }
          }
          return null;
        },
        B = () => (0, N.ds)();
    },
    345394(e, t, n) {
      n.d(t, { A: () => r });
      let r =
        "https://cdn.discordapp.com/assets/content/6b2632bb9dbba806cf6bd3a42efeaedfe508bcffefc6ed5325260f87dd619dc6.svg";
    },
    877624(e, t, n) {
      n.d(t, { C: () => _ });
      var r,
        _ =
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
//# sourceMappingURL=5895.d2e5e90c5927c7c2.js.map
