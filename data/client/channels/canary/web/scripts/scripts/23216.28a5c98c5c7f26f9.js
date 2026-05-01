"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23216"],
  {
    837011(t, e, l) {
      l.d(e, { A: () => o, X: () => a });
      var n,
        E = l(17928),
        i = l(228366),
        s = l(9994),
        u = l(652215),
        a =
          (((n = {}).NOT_FETCHED = "NOT_FETCHED"),
          (n.FETCHING = "FETCHING"),
          (n.FETCHED = "FETCHED"),
          n);
      let T = new Map(),
        I = {
          profile: null,
          lastSyncTimestamp: null,
          fetchStatus: "NOT_FETCHED",
          isUpdating: !1,
          error: null,
        };
      function _(t) {
        let { guildId: e } = t,
          l = T.get(e);
        null == l
          ? T.set(e, { ...I, isUpdating: !0 })
          : T.set(e, { ...l, isUpdating: !0 });
      }
      function r(t) {
        let { guildId: e, error: l } = t,
          n = T.get(e);
        null == n
          ? T.set(e, { ...I, error: l })
          : T.set(e, { ...n, error: l, isUpdating: !1 });
      }
      function c(t) {
        let { invite: e } = t,
          { profile: l } = e;
        if (null == l) return;
        let n = T.get(l.id),
          E = (0, s.wr)(l);
        null == n
          ? T.set(l.id, {
              ...I,
              profile: E,
              lastSyncTimestamp: Date.now(),
              fetchStatus: "FETCHED",
            })
          : T.set(l.id, {
              ...n,
              profile: E,
              lastSyncTimestamp: Date.now(),
              fetchStatus: "FETCHED",
            });
      }
      class S extends E.Ay.Store {
        static displayName = "GuildProfileStore";
        getProfile(t) {
          return null == t ? null : (T.get(t)?.profile ?? null);
        }
        getFetchStatus(t) {
          return null == t
            ? "NOT_FETCHED"
            : (T.get(t)?.fetchStatus ?? "NOT_FETCHED");
        }
        getLastSyncTimestamp(t) {
          return null == t ? null : (T.get(t)?.lastSyncTimestamp ?? null);
        }
        getIsUpdating(t) {
          return null != t && (T.get(t)?.isUpdating ?? !1);
        }
        getErrorCode(t) {
          return null == t ? null : (T.get(t)?.error?.code ?? null);
        }
      }
      let o = new S(i.h, {
        GUILD_PROFILE_FETCH: function (t) {
          let { guildId: e } = t,
            l = T.get(e);
          null == l
            ? T.set(e, { ...I, fetchStatus: "FETCHING" })
            : T.set(e, { ...l, fetchStatus: "FETCHING" });
        },
        GUILD_PROFILE_FETCH_SUCCESS: function (t) {
          let { guildId: e, profile: l } = t,
            n = T.get(e);
          null == n
            ? T.set(e, {
                ...I,
                profile: l,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              })
            : T.set(e, {
                ...n,
                profile: l,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              });
        },
        GUILD_PROFILE_FETCH_FAILURE: function (t) {
          let { guildId: e, error: l } = t,
            n = T.get(e);
          null == n
            ? T.set(e, { ...I, error: l, fetchStatus: "FETCHED" })
            : T.set(e, { ...n, error: l, fetchStatus: "FETCHED" });
        },
        GUILD_PROFILE_UPDATE: _,
        GUILD_PROFILE_UPDATE_SUCCESS: function (t) {
          let { guildId: e, profile: l } = t,
            n = T.get(e);
          null == n
            ? T.set(e, { ...I, profile: l })
            : T.set(e, { ...n, profile: l, isUpdating: !1 });
        },
        GUILD_PROFILE_UPDATE_FAILURE: r,
        MEMBER_VERIFICATION_FORM_UPDATE: function (t) {
          let { form: e, guildId: l } = t,
            n = e?.profile;
          if (null == n) return;
          let E = T.get(l);
          null == E
            ? T.set(l, {
                ...I,
                profile: n,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              })
            : T.set(l, {
                ...E,
                profile: n,
                lastSyncTimestamp: Date.now(),
                fetchStatus: "FETCHED",
              });
        },
        INVITE_RESOLVE_SUCCESS: c,
        INSTANT_INVITE_CREATE_SUCCESS: c,
        CHANNEL_CREATE: function (t) {
          let { channel: e } = t;
          e.type === u.rbe.GUILD_ANNOUNCEMENT &&
            null != e.guild_id &&
            T.delete(e.guild_id);
        },
        GUILD_SETTINGS_SET_WIDGET: function (t) {
          let { guildId: e, enabled: l } = t;
          null != e && l && T.delete(e);
        },
        GUILD_UPDATE: function (t) {
          let { guild: e } = t,
            l = T.get(e.id);
          if (null == l || null == l.profile) return !1;
          let n = {
            ...l.profile,
            name: e.name,
            icon: e.icon ?? null,
            description: e.description ?? "",
            customBanner: e.discovery_splash ?? null,
          };
          T.set(e.id, { ...l, profile: n });
        },
        GUILD_PROFILE_UPDATE_VISIBILITY: _,
        GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: function (t) {
          let { guildId: e, visibility: l } = t,
            n = T.get(e),
            E = n?.profile;
          null != n &&
            null != E &&
            T.set(e, {
              ...n,
              isUpdating: !1,
              profile: { ...E, visibility: l },
            });
        },
        GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: r,
      });
    },
  },
]);
//# sourceMappingURL=23216.28a5c98c5c7f26f9.js.map
