"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6996"],
  {
    488703(e, r, t) {
      t.d(r, {
        A: () =>
          function e(r) {
            return null == r
              ? r
              : Object.keys(r).reduce((t, s) => {
                  let u = (0, c.snakeCase)(s);
                  return (
                    "object" != typeof r[s] || Array.isArray(r[s])
                      ? (t[u] = r[s])
                      : (t[u] = e(r[s])),
                    (t[u] = r[s]),
                    t
                  );
                }, {});
          },
        W: () =>
          function e(r) {
            return null == r
              ? r
              : Object.keys(r).reduce((t, s) => {
                  let u = (0, c.camelCase)(s);
                  return (
                    "object" != typeof r[s] || Array.isArray(r[s])
                      ? (t[u] = r[s])
                      : (t[u] = e(r[s])),
                    t
                  );
                }, {});
          },
      });
      var c = t(735438);
    },
  },
]);
//# sourceMappingURL=6996.2d80f4326efa3615.js.map
