"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61670"],
  {
    409600: function (t, n, i) {
      i.r(n),
        i.d(n, {
          STANDARD_ONE_TIME_PAYMENT_STEPS: function () {
            return p;
          },
          default: function () {
            return P;
          },
        }),
        i(47120);
      var a = i(200651);
      i(192379);
      var e = i(100527),
        s = i(906732),
        o = i(987209),
        c = i(563132),
        l = i(791785),
        r = i(961830),
        u = i(231338);
      function d(t) {
        let {
            onClose: n,
            onComplete: i,
            transitionState: e,
            applicationId: o,
            analyticsLocationObject: r,
            skuId: u,
          } = t,
          {} = (0, c.usePaymentContext)(),
          { analyticsLocations: d } = (0, s.ZP)();
        return (0, a.jsx)(l.PaymentModal, {
          onClose: n,
          onComplete: i,
          applicationId: o,
          skuId: u,
          initialPlanId: null,
          analyticsObject: r,
          analyticsLocations: d,
          transitionState: e,
        });
      }
      let p = [r.WA, r.s2, ...r.yp, r.wo, r.F7];
      function P(t) {
        let {
            loadId: n,
            applicationId: i,
            skuId: l,
            analyticsLocations: r,
          } = t,
          { analyticsLocations: P } = (0, s.ZP)(r, e.Z.PREMIUM_PAYMENT_MODAL);
        return (0, a.jsx)(s.Gt, {
          value: P,
          children: (0, a.jsx)(c.PaymentContextProvider, {
            loadId: n,
            stepConfigs: p,
            applicationId: i,
            skuIDs: [l],
            activeSubscription: null,
            purchaseType: u.GZ.ONE_TIME,
            children: (0, a.jsx)(o.KB, { children: (0, a.jsx)(d, { ...t }) }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=7b381ab35da2674dda53.js.map
