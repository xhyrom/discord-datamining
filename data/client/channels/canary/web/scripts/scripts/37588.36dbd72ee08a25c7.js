"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37588"],
  {
    474399(t, e, n) {
      n.d(e, { A: () => h });
      var i = n(284009),
        r = n.n(i),
        a = n(17928),
        u = n(228366),
        o = n(970278),
        s = n(734057),
        d = n(222823);
      let l = {},
        A = new Set();
      class c extends a.Ay.Store {
        static displayName = "ForumPostUnreadCountStore";
        initialize() {
          this.waitFor(o.A, s.A, d.Ay);
        }
        getCount(t) {
          return l[t];
        }
        getThreadIdsMissingCounts(t, e) {
          return (
            r()(
              o.A.hasLoaded(t),
              "must wait for THREAD_LIST_SYNC before calling this",
            ),
            e.filter((t) => !(t in l) && !A.has(t))
          );
        }
      }
      let h = new c(u.h, {
        CONNECTION_OPEN: function () {
          (l = {}), (A = new Set());
        },
        THREAD_CREATE: function (t) {
          let { channel: e, isNewlyCreated: n } = t;
          if (!n || !o.A.hasLoaded(e.guild_id)) return !1;
          l[e.id] = 0;
        },
        MESSAGE_CREATE: function (t) {
          let { channelId: e, optimistic: n, isPushNotification: i } = t;
          if (n || i || !(e in l)) return !1;
          l[e]++;
        },
        FORUM_UNREADS: function (t) {
          let { threads: e } = t;
          e.forEach((t) => {
            null != t.count && (l[t.threadId] = t.count);
          });
        },
        MESSAGE_ACK: function (t) {
          let { channelId: e } = t;
          if (!(e in l)) {
            let t = s.A.getChannel(e),
              n = s.A.getChannel(t?.parent_id);
            if (!n?.isForumLikeChannel()) return !1;
          }
          l[e] = d.Ay.getUnreadCount(e);
        },
        REQUEST_FORUM_UNREADS: function (t) {
          let { threads: e } = t;
          e.forEach((t) => {
            let { threadId: e } = t;
            return A.add(e);
          });
        },
      });
    },
  },
]);
//# sourceMappingURL=37588.36dbd72ee08a25c7.js.map
