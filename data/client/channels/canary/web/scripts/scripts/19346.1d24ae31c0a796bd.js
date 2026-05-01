"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["19346"],
  {
    357801(e, t, n) {
      n.d(t, { F: () => d });
      var i = n(989349),
        s = n.n(i),
        a = n(935208),
        r = n(988794);
      function d(e, t, n, i) {
        let d = s()(),
          u = new Date(e.scheduled_start_time).getTime(),
          w = { start: u - r.Oz, end: u };
        if (d.isBetween(w.start, w.end)) {
          if (null != t) {
            let e = s()(t),
              n = e.isBetween(w.start, w.end),
              a = e.isBetween(s()(u).subtract(r.nN, "days"), u);
            return n || (a && !i) ? void 0 : r.w0.EVENT_STARTING_SOON;
          }
          return r.w0.EVENT_STARTING_SOON;
        }
        let c = a.default.extractTimestamp(e.id),
          l = Math.min((n ?? c) + r.aj, u);
        if (d.isBetween(c, l) && null == t && !i) return r.w0.NEW_EVENT;
      }
    },
  },
]);
//# sourceMappingURL=19346.1d24ae31c0a796bd.js.map
