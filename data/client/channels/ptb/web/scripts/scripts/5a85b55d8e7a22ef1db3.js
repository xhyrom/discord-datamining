"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62318"],
  {
    241155: function (e, t, n) {
      n(47120);
      var d,
        u,
        i,
        r,
        l = n(392711),
        c = n.n(l),
        _ = n(442837),
        a = n(570140),
        E = n(924301),
        o = n(601964),
        h = n(486527);
      let s = !1,
        v = {},
        C = {},
        g = {},
        T = (e) => (
          (g[e.guild_scheduled_event.id] = new o.ZP(
            e.guild_scheduled_event.guild,
          )),
          (C[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: h.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class f extends (d = _.ZP.Store) {
        isFetching() {
          return s;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return v[e];
        }
        getCachedGuildByEventId(e) {
          var t;
          return null !== (t = g[e]) && void 0 !== t ? t : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var t;
          return null !== (t = C[e]) && void 0 !== t ? t : void 0;
        }
      }
      (r = "EventDirectoryStore"),
        (i = "displayName") in (u = f)
          ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (u[i] = r),
        (t.Z = new f(a.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            s = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: t, entries: n } = e;
            s = !1;
            let d = c().sortBy(
                [...n],
                [
                  function (e) {
                    return (0, E.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              u = c().map(d, T);
            v[t] = u;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            s = !1;
          },
        }));
    },
    592126: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var d = n(442837),
        u = n(241155),
        i = n(430824);
      function r(e, t) {
        return (0, d.cj)(
          [i.Z, u.Z],
          () => {
            let n = i.Z.getGuild(e),
              d = null != n;
            return (
              null == n && null != t && (n = u.Z.getCachedGuildByEventId(t)),
              { isMember: d, guild: n }
            );
          },
          [e, t],
        );
      }
    },
  },
]);
//# sourceMappingURL=5a85b55d8e7a22ef1db3.js.map
