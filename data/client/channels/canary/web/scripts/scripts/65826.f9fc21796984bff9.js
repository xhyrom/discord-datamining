"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65826"],
  {
    159001(_, E, t) {
      t.d(E, {
        GL: () => n,
        IM: () => s,
        JJ: () => a,
        RE: () => r,
        V2: () => o,
        go: () => S,
        x8: () => I,
      });
      var e = t(636537),
        d = t(228366),
        i = t(870218),
        l = t(652215);
      async function n(_, E) {
        let {
          nick: t,
          avatar: n,
          avatarDescription: a,
          avatarId: o,
          avatarDecoration: S,
          nameplate: r,
          displayNameStyles: s,
          avatarOriginalMd5: I,
        } = E;
        if (null == _) throw Error("Need guildId");
        d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: _ });
        let c = {
          nick: t,
          avatar: n,
          avatar_description: a,
          avatar_id: o,
          avatar_decoration_sku_id: void 0 !== S ? (S?.skuId ?? null) : void 0,
          collectibles:
            void 0 !== r
              ? { nameplate: null === r ? null : { sku_id: r.skuId } }
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
              url: l.Rsh.SET_GUILD_MEMBER(_),
              body: c,
              headers: i.A.buildHeadersForMd5(I),
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
            t = E.body;
          return (
            d.h.dispatch({
              type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS",
              guildId: _,
            }),
            d.h.dispatch({
              type: "GUILD_MEMBER_PROFILE_UPDATE",
              guildMember: t,
              guildId: _,
            }),
            (null != n || null != o) &&
              d.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            E
          );
        } catch (t) {
          let E = t.body;
          return (
            E?.username != null && ((E.nick = E.username), delete E.username),
            d.h.dispatch({
              type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
              guildId: _,
              errors: t.body,
            }),
            t
          );
        }
      }
      function a(_) {
        d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: _ });
      }
      function o(_) {
        d.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: _ });
      }
      function S() {
        d.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
        });
      }
      function r() {
        d.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
        });
      }
      function s() {
        d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
      }
      function I() {
        d.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
      }
    },
  },
]);
//# sourceMappingURL=65826.f9fc21796984bff9.js.map
