"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14461"],
  {
    160768(t, n, r) {
      r.d(n, { A: () => e });
      var i = r(272984),
        a = r(985018);
      function e(t, n) {
        switch (n) {
          case i.Qp.USER_ACTIVITY_PLAY:
            return t.hasSpotifyAccount
              ? a.intl.formatToPlainString(a.t.LEgD7t, { platform: i.HD })
              : a.intl.formatToPlainString(a.t.XWSHTb, { platform: i.HD });
          case i.Qp.EMBED_SYNC:
            if (!t.hasSpotifyAccount)
              return a.intl.formatToPlainString(a.t.XWSHTb, { platform: i.HD });
            if (t.syncingWithUser || t.syncingWithParty)
              return a.intl.string(a.t.KC26NR);
            return a.intl.string(a.t.VJlc0S);
          case i.Qp.USER_ACTIVITY_SYNC:
          default:
            return;
        }
      }
    },
    341335(t, n, r) {
      r.d(n, { A: () => l });
      var i = r(427262),
        a = r(272984),
        e = r(985018);
      function l(t, n, r) {
        switch (n) {
          case a.Qp.USER_ACTIVITY_PLAY:
            if (t.isCurrentUser) return e.intl.string(e.t.ZpDeUC);
            if (t.playingSameTrack) return e.intl.string(e.t.TYSymS);
            if (t.notPlayable)
              return e.intl.formatToPlainString(e.t.SqJBnN, { name: a.HD });
            return;
          case a.Qp.USER_ACTIVITY_SYNC:
            if (t.isCurrentUser) return e.intl.string(e.t["AOU/CR"]);
            if (t.syncingWithUser || t.syncingWithParty)
              return e.intl.string(e.t.m8CScv);
            if (t.notPlayable)
              return e.intl.formatToPlainString(e.t.SqJBnN, { name: a.HD });
            return e.intl.formatToPlainString(e.t.CT9xYI, {
              name: r ?? i.Ay.getName(t.user),
            });
          case a.Qp.EMBED_SYNC:
            if (t.notPlayable)
              return e.intl.formatToPlainString(e.t.SqJBnN, { name: a.HD });
            return;
          default:
            return;
        }
      }
    },
    881335(t, n, r) {
      r.d(n, { A: () => s });
      var i = r(729937),
        a = r(981616),
        e = r(285933),
        l = r(227005);
      async function s(t, n, r) {
        let { hasSpotifyAccount: s, activity: u, user: c } = t;
        (0, l.A)(s) &&
          null != u &&
          null != u.sync_id &&
          (await (0, a.dM)(), i.ZH(u, c.id), (0, e.A)(n, c, u, r));
      }
    },
  },
]);
//# sourceMappingURL=14461.802b1a7eb43a6649.js.map
