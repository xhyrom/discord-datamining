"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31638"],
  {
    655752(n, u, t) {
      t.d(u, { P: () => r });
      var l = t(112848),
        e = t(788868);
      function r() {
        let n = (0, l.$F)();
        if (null == n) return null;
        if (n.status === l.Wo.UPCOMING) return n;
        let u = e.sp.indexOf(n.id),
          t = e.sp[u + 1];
        return null == t || -1 === u ? null : e.VD[t];
      }
    },
    416654(n, u, t) {
      t.d(u, { v: () => d });
      var l = t(17928),
        e = t(439174),
        r = t(841595);
      function d(n) {
        return (0, l.bG)([r.A], () => {
          let u,
            t = null != n ? r.A.getUserProfile(n) : null,
            l = t?.premiumSince;
          return null == t || null == l
            ? null
            : (t?.badges?.forEach((n) => {
                let t = (0, e.cZ)(n.id);
                null != t && (u = t);
              }),
              u);
        });
      }
    },
    627380(n, u, t) {
      t.d(u, { t: () => s });
      var l = t(64700),
        e = t(989349),
        r = t.n(e),
        d = t(655752),
        a = t(112848);
      function i(n, u) {
        return r()(n).add(u, "months").add(1, "day");
      }
      function s() {
        let n = (0, d.P)(),
          u = (0, a.Xb)();
        return (0, l.useMemo)(() => {
          if (null == n || null == u) return null;
          let t = n.tenureReqNumMonths,
            l = i(u, t);
          return {
            days: Math.max(0, i(u, t).diff(r()(), "days")),
            months: Math.max(0, Math.round(l.diff(r()(), "months", !0))),
          };
        }, [n, u]);
      }
    },
  },
]);
//# sourceMappingURL=31638.22975b8456002528.js.map
