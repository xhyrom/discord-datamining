"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15046"],
  {
    514661(a, s, t) {
      t.d(s, { A: () => i });
      var e = t(64700),
        u = t(933725),
        c = t(849841);
      function i(a, s) {
        let [t, i] = e.useState(!1),
          l = e.useCallback(async () => {
            null != a && (i(!0), await (0, u.m)(a, !0), i(!1)), s?.();
          }, [a, s]),
          n = (0, c.A)(a);
        return {
          isAdopting: t,
          onAdoptTag: l,
          onEditProfile: e.useCallback(() => {
            s?.(), n();
          }, [n, s]),
        };
      }
    },
  },
]);
//# sourceMappingURL=15046.8260a66c9d0a3b23.js.map
