"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73165"],
  {
    643612(e, t, r) {
      r.d(t, { G: () => n });
      let n = r(64700).createContext(() => null);
    },
    269849(e, t, r) {
      r.d(t, { o: () => a }), r(64700);
      var n = r(621466),
        l = r(644447),
        o = r(836781),
        u = r(256905);
      function a(e, t, r) {
        let a = {},
          i = {};
        for (let [d, c] of e.entries()) {
          let p = (0, l.E)({ proxyURL: c.proxyUrl, url: c.url });
          (a[p] = (l) =>
            (function (e, t, r) {
              let l =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o = arguments.length > 4 ? arguments[4] : void 0;
              e.preventDefault(),
                (0, n.vq)(e.currentTarget) && e.currentTarget.blur(),
                (0, u.R)({
                  ...l,
                  items: t,
                  startingIndex: r,
                  location: o ?? "zoomedMediaModalHelper",
                });
            })(l, e, d, t, r)),
            (i[p] = () => (0, o.Z)(c, e.length > 1));
        }
        return { srcToOnClickOverride: a, srcToHandlePreloadImage: i };
      }
    },
  },
]);
//# sourceMappingURL=73165.c753dd662da7367c.js.map
