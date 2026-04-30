"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73547"],
  {
    172710(t, e, n) {
      n.d(e, { Mp: () => a, Pt: () => u, QX: () => c, mN: () => d });
      var i = n(723702),
        o = n(210528),
        r = n(981616),
        l = n(272984);
      function s(t, e, n) {
        let s;
        (0, i.isDesktop)() || (s = window.open("", "_blank")),
          (0, r.LI)(t, e)
            .then((t) => n(t))
            .then((t) => {
              let { resourceType: e, resourceId: n } = t,
                i = o.A.isProtocolRegistered()
                  ? l.RQ.PLAYER_OPEN(e, n)
                  : l.RQ.WEB_OPEN(e, n);
              null != s ? (s.location.href = i) : window.open(i);
            })
            .catch(() => {
              null != s && s.close();
            });
      }
      function u() {
        window.open(l.RQ.PREMIUM_SITE);
      }
      function a(t) {
        let { sync_id: e, metadata: n } = t;
        if (null == e) return;
        let i = (0, l.NJ)(n?.type ?? l.M0.TRACK);
        if (null == i) return;
        let r = o.A.isProtocolRegistered()
          ? l.RQ.PLAYER_OPEN(i, e)
          : l.RQ.WEB_OPEN(i, e);
        window.open(r);
      }
      function c(t, e) {
        s(t, e, (e) => {
          let { album_id: n } = e;
          return {
            resourceType:
              (0, l.NJ)(t.metadata?.type) === l.M0.EPISODE
                ? l.M0.SHOW
                : l.M0.ALBUM,
            resourceId: n,
          };
        });
      }
      function d(t, e, n) {
        s(t, e, (t) => {
          let { artist_ids: e } = t;
          if (null == e) throw Error("no artist ids in metadata");
          let i = e[n];
          if (null == i) throw Error("invalid artist index");
          return { resourceType: l.M0.ARTIST, resourceId: i };
        });
      }
    },
  },
]);
//# sourceMappingURL=73547.5fc539dfcac03e20.js.map
