"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27323"],
  {
    631670(_, t, E) {
      E.d(t, {
        $I: () => h,
        Cw: () => r,
        F7: () => I,
        IM: () => u,
        KD: () => s,
        U_: () => p,
        Uo: () => l,
        _L: () => T,
        _e: () => A,
        fw: () => N,
        pZ: () => R,
        x8: () => c,
      });
      var e = E(636537),
        S = E(506774),
        i = E(228366),
        n = E(976860);
      E(624826);
      var a = E(830215);
      E(252452);
      var o = E(652215),
        d = E(516780);
      function r() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
      }
      function l() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
      }
      function p(_, t) {
        let E = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
        return e.Bo.post({
          url: E,
          body: { password: _ },
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(() => {
          a.A.logoutInternal(), (0, n.pX)(o.BVt.DEFAULT_LOGGED_OUT);
        });
      }
      async function s(_) {
        let t = await e.Bo.patch({
            url: o.Rsh.ME,
            oldFormErrors: !0,
            body: _,
            rejectWithError: !1,
          }),
          E = t.body;
        if (E.token) {
          let t = E.token;
          delete E.token,
            i.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: E.id }),
            _?.password != null &&
              _?.new_password != null &&
              i.h.dispatch({ type: "PASSWORD_UPDATED", userId: E.id });
        }
        return i.h.dispatch({ type: "CURRENT_USER_UPDATE", user: E }), t;
      }
      function T(_) {
        let {
          username: t,
          discriminator: E,
          email: e,
          emailToken: n,
          password: a,
          avatar: r,
          avatarDescription: l,
          avatarId: p,
          avatarDecoration: T,
          newPassword: h,
          globalName: c,
          legacyUsername: R,
          nameplate: u,
          primaryGuildId: I,
          displayNameStyles: A,
        } = _;
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
        let N = {
          username: t,
          email: e,
          email_token: n,
          password: a,
          avatar: r,
          avatar_description: l,
          avatar_id: p,
          discriminator: E,
          global_name: c,
          legacy_username: R,
          new_password: h,
        };
        void 0 !== T && (N.avatar_decoration_sku_id = T?.skuId ?? null),
          void 0 !== u && (N.nameplate_sku_id = u?.skuId ?? null),
          void 0 !== I && (N.primary_guild_id = I),
          null != A
            ? ((N.display_name_font_id = A.fontId),
              (N.display_name_effect_id = A.effectId),
              (N.display_name_colors = A.colors))
            : null === A &&
              ((N.display_name_font_id = null),
              (N.display_name_effect_id = null),
              (N.display_name_colors = null));
        let U = S.w.get(o.Xlh),
          y = (0, d.oH)();
        null != y && null != U && ((N.push_provider = y), (N.push_token = U));
        let L = S.w.get(o.Ahp);
        return (
          null != d.vz &&
            null != L &&
            ((N.push_voip_provider = d.vz), (N.push_voip_token = L)),
          s(N).then(
            (_) => (
              i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
              (null != r || null != p) &&
                i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
              _
            ),
            (_) => (
              i.h.dispatch({
                type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
                errors: _.body,
              }),
              _
            ),
          )
        );
      }
      function h(_) {
        return e.Bo.post({
          url: o.Rsh.USER_HARVEST,
          body: { backends: _ },
          oldFormErrors: !0,
          rejectWithError: !1,
        });
      }
      function c() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
      }
      function R() {
        i.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
        });
      }
      function u() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
      }
      function I() {
        i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
      }
      function A() {
        i.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED",
        });
      }
      function N() {
        i.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES",
        });
      }
    },
    252452(_, t, E) {
      E.d(t, { A: () => S });
      var e = E(228366);
      let S = {
        close() {
          e.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
        },
        setSection(_) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            E =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          e.h.dispatch({
            type: "USER_SETTINGS_MODAL_SET_SECTION",
            section: _,
            subsection: t,
            ...E,
          });
        },
        clearSubsection(_) {
          e.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
            forSection: _,
          });
        },
        clearLocation() {
          e.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
        },
      };
    },
    624826(_, t, E) {
      E.d(t, { t: () => a });
      var e = E(392107),
        S = E(954571),
        i = E(486020),
        n = E(652215);
      function a(_) {
        let {
          avatarHash: t,
          avatarId: E,
          isGuildProfile: a = !1,
          avatarAssetOrigin: o = e.E.NEW_ASSET,
        } = _;
        S.default.track(n.HAw.USER_AVATAR_UPDATED, {
          animated: (0, i.VI)(t),
          is_guild_profile: a,
          recent_avatar_id: o === e.E.ARCHIVED_ASSET ? Number(E) : void 0,
          is_edited_recent_avatar: o === e.E.EDITED_ARCHIVED_ASSET,
        });
      }
    },
  },
]);
//# sourceMappingURL=27323.f8e85d9be054bb56.js.map
