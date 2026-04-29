"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11295"],
  {
    309698(t, e, i) {
      i.d(e, { A: () => _ });
      var d = i(478437),
        n = i(17928),
        u = i(228366),
        l = i(446458);
      let s = new Set(),
        a = {};
      function E() {
        s.clear();
      }
      function N(t) {
        s.delete(t.guild.id);
      }
      class C extends n.Ay.Store {
        initialize() {
          this.waitFor(l.A);
        }
        static displayName = "ChannelStatusStore";
        getChannelStatus(t) {
          if (null != t && null != t.guild_id && t.type === d.r.GUILD_VOICE)
            return a[t.guild_id]?.[t.id];
        }
        hasRequestedStatuses(t) {
          return s.has(t);
        }
      }
      let _ = new C(u.h, {
        GUILD_CREATE: N,
        GUILD_DELETE: N,
        CONNECTION_RESUMED: E,
        CONNECTION_OPEN: E,
        VOICE_CHANNEL_STATUS_UPDATE: function (t) {
          null == a[t.guildId] && (a[t.guildId] = {}),
            (a[t.guildId][t.id] = t.status);
        },
        CHANNEL_INFO: function (t) {
          let { guildId: e, channels: i } = t;
          for (let { id: t, status: d } of ((a[e] = {}), i)) a[e][t] = d;
        },
        FETCH_CHANNEL_INFO: function (t) {
          let { guildId: e } = t;
          s.add(e);
        },
      });
    },
  },
]);
//# sourceMappingURL=11295.fb381af22d59c81e.js.map
