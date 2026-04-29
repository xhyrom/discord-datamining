"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65826"],
  {
    159001(_, E, t) {
      t.d(E, {
        GL: () => n,
        IM: () => s,
        JJ: () => l,
        RE: () => o,
        V2: () => S,
        go: () => a,
        x8: () => I,
      });
      var e = t(636537),
        i = t(228366),
        d = t(652215);
      async function n(_, E) {
        let {
          nick: t,
          avatar: n,
          avatarDescription: l,
          avatarId: S,
          avatarDecoration: a,
          nameplate: o,
          displayNameStyles: s,
        } = E;
        if (null == _) throw Error("Need guildId");
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: _ });
        let I = {
          nick: t,
          avatar: n,
          avatar_description: l,
          avatar_id: S,
          avatar_decoration_sku_id: void 0 !== a ? (a?.skuId ?? null) : void 0,
          collectibles:
            void 0 !== o
              ? { nameplate: null === o ? null : { sku_id: o.skuId } }
              : void 0,
          display_name_font_id:
            void 0 !== s ? (null !== s ? s.fontId : null) : void 0,
          display_name_effect_id:
            void 0 !== s ? (null !== s ? s.effectId : null) : void 0,
          display_name_colors:
            void 0 !== s ? (null !== s ? s.colors : null) : void 0,
        };
        try {
          let E = await e.Bo.patch({
              url: d.Rsh.SET_GUILD_MEMBER(_),
              body: I,
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
            t = E.body;
          return (
            i.h.dispatch({
              type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS",
              guildId: _,
            }),
            i.h.dispatch({
              type: "GUILD_MEMBER_PROFILE_UPDATE",
              guildMember: t,
              guildId: _,
            }),
            (null != n || null != S) &&
              i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            E
          );
        } catch (t) {
          let E = t.body;
          return (
            E?.username != null && ((E.nick = E.username), delete E.username),
            i.h.dispatch({
              type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
              guildId: _,
              errors: t.body,
            }),
            t
          );
        }
      }
      function l(_) {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: _ });
      }
      function S(_) {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: _ });
      }
      function a() {
        i.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
        });
      }
      function o() {
        i.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
        });
      }
      function s() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
      }
      function I() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
      }
    },
  },
]);
//# sourceMappingURL=65826.e82a8c51d9196e08.js.map
