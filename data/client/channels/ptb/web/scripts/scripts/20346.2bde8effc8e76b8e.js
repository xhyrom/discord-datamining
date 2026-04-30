"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20346"],
  {
    231265(n, t, e) {
      e.d(t, { C: () => c, _: () => l });
      var a = e(40185),
        o = e(478097),
        i = e(196042),
        u = e(374200),
        r = e(985018);
      async function c() {
        let n = u.A.bogoPromotion,
          t =
            null != n &&
            new Date(n.endDate).valueOf() >= Date.now() &&
            new Date(n.startDate).valueOf() <= Date.now(),
          e = await (0, a.nq)(),
          r = (0, i.RK)("bogo announcement modal eligibility"),
          c = (0, o.BI)("bogo announcement modal marketing");
        return t && c && r && e;
      }
      function l() {
        return r.intl.string(r.t.iQTfWx);
      }
    },
  },
]);
//# sourceMappingURL=20346.2bde8effc8e76b8e.js.map
