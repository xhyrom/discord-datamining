"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72883"],
  {
    922590(e, t, n) {
      n.d(t, { KL: () => h, f1: () => p, fi: () => u });
      var i = n(17928),
        r = n(996439),
        s = n(800828),
        o = n(652215);
      function a(e, t) {
        let [n] = (0, i.bG)(
          [s.A],
          () => [
            s.A.getGameRelationshipsForUserByType(e, t),
            s.A.getGameRelationshipsVersion(),
          ],
          [t, e],
          r.D,
        );
        return n;
      }
      function p(e) {
        return a(e, o.eA$.FRIEND);
      }
      function u(e) {
        return a(e, o.eA$.PENDING_INCOMING);
      }
      function h(e, t) {
        let [n] = (0, i.bG)(
          [s.A],
          () => {
            let n = s.A.getGameRelationshipsForUserByType(e, t),
              i = s.A.getGameRelationshipsVersion();
            return [n.length > 0, i];
          },
          [t, e],
          r.D,
        );
        return n;
      }
    },
  },
]);
//# sourceMappingURL=72883.c2bf9e3681de41cd.js.map
