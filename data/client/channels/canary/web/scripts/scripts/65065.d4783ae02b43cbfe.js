"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65065"],
  {
    112848(e, u, l) {
      l.d(u, {
        $F: () => S,
        Lh: () => o,
        Wo: () => f,
        Xb: () => G,
        bu: () => A,
        p3: () => h,
        rG: () => g,
      });
      var r,
        t = l(989349),
        n = l.n(t),
        i = l(17928),
        m = l(439174),
        d = l(841595),
        s = l(287809),
        p = l(166403),
        a = l(474090),
        c = l(416654),
        b = l(788868),
        f = (((r = {}).UPCOMING = "upcoming"), (r.EARNED = "earned"), r);
      function o() {
        let e = (0, i.bG)([s.default], () => s.default.getCurrentUser());
        return (0, c.v)(e?.id) ?? null;
      }
      let g = (e) =>
        (0, i.bG)([d.A], () => {
          if (null == e) return null;
          let u = d.A.getUserProfile(e);
          return u?.premiumSince;
        });
      function G() {
        let e = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
          u = (0, a.YE)(e, b.PremiumTypes.TIER_2),
          l = (0, i.bG)(
            [p.A],
            () => {
              let e = p.A.getPremiumSubscription();
              return null != e && u ? e.premiumSince : null;
            },
            [u],
          ),
          r = g(e?.id);
        return l ?? r;
      }
      let A = () => {
          let e = Object.values(b.VD),
            u = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
            l = (0, i.bG)([p.A], () => p.A.getPremiumTypeSubscription());
          if (
            !(0, a.YE)(u, b.PremiumTypes.TIER_2) ||
            null == l ||
            null == l.premiumSince
          )
            return null;
          let r = n()(),
            t = n()(l.premiumSince).add(1, "day"),
            m = r.diff(t, "months");
          return e.reduce((e, u) => {
            let { id: l, tenureReqNumMonths: r } = u;
            return m >= r ? l : e;
          }, null);
        },
        S = () => {
          let e,
            u,
            l = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
            r = h(l?.id),
            t =
              ((e = o()),
              (u = (0, i.bG)([p.A], () => p.A.getPremiumTypeSubscription())),
              null == e || null == u || null == u.premiumSince
                ? null
                : (0, m.Xr)(e, u.premiumSince)),
            n = G();
          return null != r
            ? { ...r, earnedOnDate: t, status: "earned" }
            : null != n
              ? { ...Object.values(b.VD)[0], status: "upcoming" }
              : null;
        },
        h = (e) => {
          let u = (0, c.v)(e);
          return null == u ? null : b.VD[u];
        };
    },
  },
]);
//# sourceMappingURL=65065.d4783ae02b43cbfe.js.map
