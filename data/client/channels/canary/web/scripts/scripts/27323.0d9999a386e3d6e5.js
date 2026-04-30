"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27323"],
  {
    631670(_, t, e) {
      e.d(t, {
        $I: () => c,
        Cw: () => l,
        F7: () => A,
        IM: () => I,
        KD: () => h,
        U_: () => p,
        Uo: () => s,
        _L: () => T,
        _e: () => N,
        fw: () => U,
        pZ: () => u,
        x8: () => R,
      });
      var E = e(636537),
        i = e(506774),
        S = e(228366),
        n = e(870218),
        a = e(976860);
      e(624826);
      var d = e(830215);
      e(252452);
      var o = e(652215),
        r = e(516780);
      function l() {
        S.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
      }
      function s() {
        S.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
      }
      function p(_, t) {
        let e = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
        return E.Bo.post({
          url: e,
          body: { password: _ },
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(() => {
          d.A.logoutInternal(), (0, a.pX)(o.BVt.DEFAULT_LOGGED_OUT);
        });
      }
      async function h(_) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = await E.Bo.patch({
            url: o.Rsh.ME,
            oldFormErrors: !0,
            body: _,
            headers: t.headers,
            rejectWithError: !1,
          }),
          i = e.body;
        if (i.token) {
          let t = i.token;
          delete i.token,
            S.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: i.id }),
            _?.password != null &&
              _?.new_password != null &&
              S.h.dispatch({ type: "PASSWORD_UPDATED", userId: i.id });
        }
        return S.h.dispatch({ type: "CURRENT_USER_UPDATE", user: i }), e;
      }
      function T(_) {
        let {
          username: t,
          discriminator: e,
          email: E,
          emailToken: a,
          password: d,
          avatar: l,
          avatarDescription: s,
          avatarId: p,
          avatarDecoration: T,
          newPassword: c,
          globalName: R,
          legacyUsername: u,
          nameplate: I,
          primaryGuildId: A,
          displayNameStyles: N,
          avatarOriginalMd5: U,
        } = _;
        S.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
        let y = {
          username: t,
          email: E,
          email_token: a,
          password: d,
          avatar: l,
          avatar_description: s,
          avatar_id: p,
          discriminator: e,
          global_name: R,
          legacy_username: u,
          new_password: c,
        };
        void 0 !== T && (y.avatar_decoration_sku_id = T?.skuId ?? null),
          void 0 !== I && (y.nameplate_sku_id = I?.skuId ?? null),
          void 0 !== A && (y.primary_guild_id = A),
          null != N
            ? ((y.display_name_font_id = N.fontId),
              (y.display_name_effect_id = N.effectId),
              (y.display_name_colors = N.colors))
            : null === N &&
              ((y.display_name_font_id = null),
              (y.display_name_effect_id = null),
              (y.display_name_colors = null));
        let L = i.w.get(o.Xlh),
          O = (0, r.oH)();
        null != O && null != L && ((y.push_provider = O), (y.push_token = L));
        let D = i.w.get(o.Ahp);
        return (
          null != r.vz &&
            null != D &&
            ((y.push_voip_provider = r.vz), (y.push_voip_token = D)),
          h(y, { headers: n.A.buildHeadersForMd5(U) }).then(
            (_) => (
              S.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
              (null != l || null != p) &&
                S.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
              _
            ),
            (_) => (
              S.h.dispatch({
                type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
                errors: _.body,
              }),
              _
            ),
          )
        );
      }
      function c(_) {
        return E.Bo.post({
          url: o.Rsh.USER_HARVEST,
          body: { backends: _ },
          oldFormErrors: !0,
          rejectWithError: !1,
        });
      }
      function R() {
        S.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
      }
      function u() {
        S.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES",
        });
      }
      function I() {
        S.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
      }
      function A() {
        S.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
      }
      function N() {
        S.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED",
        });
      }
      function U() {
        S.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES",
        });
      }
    },
    252452(_, t, e) {
      e.d(t, { A: () => i });
      var E = e(228366);
      let i = {
        close() {
          E.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
        },
        setSection(_) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          E.h.dispatch({
            type: "USER_SETTINGS_MODAL_SET_SECTION",
            section: _,
            subsection: t,
            ...e,
          });
        },
        clearSubsection(_) {
          E.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
            forSection: _,
          });
        },
        clearLocation() {
          E.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_LOCATION" });
        },
      };
    },
    624826(_, t, e) {
      e.d(t, { t: () => a });
      var E = e(392107),
        i = e(954571),
        S = e(486020),
        n = e(652215);
      function a(_) {
        let {
          avatarHash: t,
          avatarId: e,
          isGuildProfile: a = !1,
          avatarAssetOrigin: d = E.E.NEW_ASSET,
        } = _;
        i.default.track(n.HAw.USER_AVATAR_UPDATED, {
          animated: (0, S.VI)(t),
          is_guild_profile: a,
          recent_avatar_id: d === E.E.ARCHIVED_ASSET ? Number(e) : void 0,
          is_edited_recent_avatar: d === E.E.EDITED_ARCHIVED_ASSET,
        });
      }
    },
  },
]);
//# sourceMappingURL=27323.0d9999a386e3d6e5.js.map
