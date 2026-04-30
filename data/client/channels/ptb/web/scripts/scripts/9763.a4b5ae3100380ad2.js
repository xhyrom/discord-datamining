"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9763"],
  {
    453774(e, t, n) {
      n.d(t, { A: () => s });
      var r = n(64700),
        u = n(17928),
        l = n(429913),
        a = n(832163);
      function s(e) {
        var t;
        let n,
          s,
          i,
          o =
            ((t = r.useMemo(() => (null != e ? [e] : []), [e])),
            (n = (0, u.bG)([a.A], () => a.A.getConfig())),
            (s = r.useMemo(() => {
              if (null == n || 0 === t.length) return [];
              let e = new Set(t);
              return Array.from(
                new Set(
                  n.storefronts
                    .filter((t) => e.has(t.applicationId) || e.has(t.gameId))
                    .map((e) => e.applicationId),
                ),
              );
            }, [n, t])),
            (i = (0, l.A)(s)),
            r.useMemo(
              () => i.reduce((e, t) => (null == t || (e[t.id] = t), e), {}),
              [i],
            ));
        return r.useMemo(() => {
          let e = Object.values(o);
          return 0 === e.length ? null : e[0];
        }, [o]);
      }
    },
  },
]);
//# sourceMappingURL=9763.a4b5ae3100380ad2.js.map
