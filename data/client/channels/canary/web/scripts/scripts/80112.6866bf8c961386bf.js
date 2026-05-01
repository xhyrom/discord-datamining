"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80112"],
  {
    482947(e, t, u) {
      u.d(t, { A: () => c, H: () => n });
      var r,
        i = u(945810),
        n =
          (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
          (r[(r.OPEN_PURCHASE = 1)] = "OPEN_PURCHASE"),
          (r[(r.PAID_PREMIUM_SUBSCRIBERS_ONLY = 2)] =
            "PAID_PREMIUM_SUBSCRIBERS_ONLY"),
          r);
      let c = (0, i.mj)({
        name: "2026-04-collectibles-profile-frames-purchase",
        kind: "user",
        defaultConfig: { bucket: 0 },
        variations: { 0: { bucket: 0 }, 1: { bucket: 1 }, 2: { bucket: 2 } },
      });
    },
    13875(e, t, u) {
      u.d(t, { Ay: () => a, Do: () => C, M: () => E, sk: () => S });
      var r = u(17928),
        i = u(441574),
        n = u(287809),
        c = u(474090),
        R = u(32206),
        s = u(482947),
        _ = u(788868);
      function S(e) {
        let t = (0, R.c)(e),
          { bucket: u } = s.A.useConfig({ location: e });
        return t && u !== s.H.CONTROL;
      }
      function C(e) {
        let t = (0, R.c)(e),
          { bucket: u } = s.A.useConfig({ location: e });
        return t && u === s.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
      }
      function E(e) {
        return (
          (0, c.YE)(e, _.PremiumTypes.TIER_2) &&
          e?.premiumState != null &&
          e.premiumState.premiumSubscriptionType === i.jK.TIER_2
        );
      }
      function a(e) {
        let t = (0, R.c)(e),
          { bucket: u } = s.A.useConfig({ location: e }),
          i = (0, r.bG)([n.default], () => E(n.default.getCurrentUser())),
          c =
            u === s.H.OPEN_PURCHASE ||
            (u === s.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && i);
        return t && c;
      }
    },
  },
]);
//# sourceMappingURL=80112.6866bf8c961386bf.js.map
