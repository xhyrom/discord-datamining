"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37801"],
  {
    834409(e, t, i) {
      i.d(t, { Eo: () => s, V: () => a, ZE: () => _ });
      var d,
        n,
        l,
        s =
          (((d = {}).MESSAGE = "message"),
          (d.NAGBAR = "nagbar"),
          (d.GUILD_SETTINGS = "guild_settings"),
          (d.CONTEXT_MENU = "context_menu"),
          (d.GUILD_PROFILE = "guild_profile"),
          (d.MEMBER_SAFETY_PAGE = "member_safety_page"),
          d),
        a = (((n = {}).JOIN_RAID = "join_raid"), (n.DM_RAID = "dm_raid"), n),
        _ =
          (((l = {}).INVITES_DISABLED = "invites_disabled"),
          (l.DMS_DISABLED = "dms_disabled"),
          l);
    },
    610136(e, t, i) {
      i.d(t, { A: () => D });
      var d = i(17928),
        n = i(228366),
        l = i(736056),
        s = i(617617),
        a = i(71393),
        _ = i(576705),
        u = i(903093);
      let r = {},
        c = {};
      function A() {
        let e = s.A.getGuildsProto() ?? {},
          t = a.A.getGuildsArray();
        for (let i of ((c = {}), t))
          c[i.id] = { guildId: i.id, guildName: i.name, ...e[i.id] };
      }
      function o(e) {
        return null != e && Object.keys(e).length > 0
          ? {
              raidDetectedAt: e.raid_detected_at,
              dmSpamDetectedAt: e.dm_spam_detected_at,
              dmsDisabledUntil: e.dms_disabled_until,
              invitesDisabledUntil: e.invites_disabled_until,
            }
          : null;
      }
      class E extends d.Ay.Store {
        static displayName = "GuildIncidentsStore";
        initialize() {
          this.waitFor(s.A, a.A, _.A, l.A),
            this.syncWith([s.A, a.A, _.A, l.A], A);
        }
        getGuildIncident(e) {
          return r[e];
        }
        getIncidentsByGuild() {
          return r;
        }
        getGuildAlertSettings() {
          return c;
        }
      }
      let D = new E(n.h, {
        CONNECTION_OPEN: function (e) {
          for (let t of ((r = {}), e.guilds)) {
            let e = o(t.properties?.incidents_data);
            null != e && ((0, u.k$)(e) || (0, u._J)(e)) && (r[t.id] = e);
          }
        },
        GUILD_CREATE: function (e) {
          let { guild: t } = e,
            i = o(t.properties?.incidents_data);
          null != i && ((0, u.k$)(i) || (0, u._J)(i)) && (r[t.id] = i);
        },
        GUILD_UPDATE: function (e) {
          let { guild: t } = e,
            i = o(t.incidents_data);
          null != i && ((0, u.k$)(i) || (0, u._J)(i))
            ? (r[t.id] = i)
            : delete r[t.id];
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          delete r[t.id];
        },
        LOGOUT: function (e) {
          r = {};
        },
      });
    },
  },
]);
//# sourceMappingURL=37801.ddabe74dd0cafc26.js.map
