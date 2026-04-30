"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86949"],
  {
    562819(t, e, _) {
      _.d(e, { L: () => S, Te: () => I });
      var E = _(627968);
      _(64700);
      var i = _(778712),
        n = _(192308);
      _(515718);
      var T = _(190460);
      function I(t) {
        return "number" != typeof t ? (0, i.FT)(t) * T.Xq : t * T.Xq;
      }
      let S = (t) => {
        let {
          analyticsLocations: e,
          initialSelectedDecoration: i,
          guild: T,
          onClose: I,
          stackingBehavior: S,
        } = t;
        (0, n.openModalLazy)(
          async () => {
            let { default: t } = await Promise.all([
              _.e("69502"),
              _.e("40841"),
              _.e("18573"),
              _.e("21825"),
              _.e("98125"),
              _.e("18441"),
              _.e("80527"),
              _.e("22584"),
              _.e("83429"),
              _.e("76195"),
              _.e("31825"),
              _.e("14879"),
              _.e("51243"),
              _.e("36126"),
              _.e("78707"),
              _.e("27773"),
              _.e("77473"),
              _.e("20683"),
              _.e("27462"),
              _.e("28545"),
              _.e("6721"),
            ]).then(_.bind(_, 40344));
            return (_) =>
              (0, E.jsx)(t, {
                ..._,
                onCloseModal: _.onClose,
                onClose: I,
                analyticsLocations: e,
                initialSelectedDecoration: i,
                guild: T,
              });
          },
          { stackingBehavior: S },
        );
      };
    },
    207803(t, e, _) {
      _.d(e, {
        EW: () => y,
        FY: () => g,
        Go: () => C,
        Gr: () => u,
        RE: () => L,
        VQ: () => P,
        XQ: () => U,
        a: () => f,
        e$: () => N,
        gi: () => l,
        w5: () => G,
        xe: () => F,
      });
      var E = _(17928),
        i = _(636537),
        n = _(765178),
        T = _(228366),
        I = _(845584),
        S = _(870218),
        R = _(451909),
        a = _(287809),
        A = _(954571),
        r = _(625494),
        o = _(38405),
        c = _(841595),
        p = _(814390),
        s = _(652215),
        O = _(788868),
        h = _(985018);
      function P() {
        r._.dispatch(s.jej.SHAKE_PROFILE_MODAL),
          r._.dispatch(s.jej.EMPHASIZE_NOTICE),
          n.O.announce(
            `${h.intl.string(h.t.GP7JLE)} ${h.intl.string(h.t.gKoO1D)}`,
          );
      }
      function d(t) {
        A.default.track(s.HAw.PREMIUM_FEATURE_TRY_OUT, {
          feature_name: t,
          feature_tier: O.tz.PREMIUM_STANDARD,
        });
      }
      async function l(t, e, _) {
        let E = a.default.getCurrentUser()?.id;
        if (null == E) return;
        let n = (0, p.h)();
        null != t.bio && n && (t.bio = R.Ay.parse(void 0, t.bio).content);
        try {
          T.h.dispatch({
            type: "USER_PROFILE_UPDATE_START",
            userId: E,
            guildId: e,
          });
          let n = await i.Bo.patch({
            url:
              null != e
                ? s.Rsh.USER_GUILD_PROFILE(e, s.ME)
                : s.Rsh.USER_PROFILE(s.ME),
            body: t,
            headers: S.A.buildHeadersForMd5(_),
            rejectWithError: !1,
          });
          if (n.ok)
            T.h.dispatch({
              type: "USER_PROFILE_UPDATE_SUCCESS",
              userId: E,
              guildId: e,
              ...n.body,
            });
          else {
            let t = new I.LG(n);
            T.h.dispatch({
              type: "USER_PROFILE_UPDATE_FAILURE",
              guildId: e,
              errors: n.body,
              apiError: t,
            });
          }
          return n;
        } catch (_) {
          let t = new I.LG(_);
          return (
            T.h.dispatch({
              type: "USER_PROFILE_UPDATE_FAILURE",
              guildId: e,
              errors: {},
              apiError: t,
            }),
            _
          );
        }
      }
      function u(t, e) {
        let _ = a.default.getCurrentUser()?.id;
        null != _ &&
          T.h.dispatch({
            type: "USER_PROFILE_PIN_BADGES_ON_CLIENT",
            badges: t,
            ttlInSeconds: e,
            userId: _,
          });
      }
      function L() {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES",
        });
      }
      function U() {
        T.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
      }
      function N(t) {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR",
          avatar: t,
        }),
          d(O.Ae.ANIMATED_AVATAR);
      }
      function C(t) {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION",
          avatarDecoration: t,
        }),
          d(O.Ae.AVATAR_DECORATION);
      }
      function F(t) {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER",
          banner: t,
        }),
          d(O.Ae.PROFILE_BANNER);
      }
      function f(t) {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS",
          themeColors: t,
        }),
          d(O.Ae.PROFILE_THEME_COLOR);
      }
      function y(t) {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES",
          displayNameStyles: t,
        }),
          d(O.Ae.DISPLAY_NAME_STYLES);
      }
      function G(t) {
        T.h.dispatch({
          type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET",
          ...t,
        }),
          d(O.Ae.PRESET);
      }
      async function D() {
        if (
          null == c.A.applicationWidgetConfigs ||
          !(c.A.applicationWidgetConfigs.length > 0)
        ) {
          T.h.dispatch({
            type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START",
          });
          try {
            let t = await i.Bo.get({
              url: s.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS,
              rejectWithError: !0,
            });
            T.h.dispatch({
              type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
              applicationConfigs: t.body.application_configs,
            });
          } catch (t) {
            throw (
              (T.h.dispatch({
                type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE",
              }),
              o.A.captureException(t),
              t)
            );
          }
        }
      }
      let g = (0, E.UT)(c.A, {
        getQueryId: s.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
        get: () => c.A.applicationWidgetConfigs,
        load: () => D(),
      });
    },
    814390(t, e, _) {
      _.d(e, { A: () => i, h: () => n });
      var E = _(253932);
      function i() {
        let t = E.D_.useSetting(),
          e = E.SI.useSetting();
        return t || !e;
      }
      function n() {
        return E.D_.getSetting() || !E.SI.getSetting();
      }
    },
  },
]);
//# sourceMappingURL=86949.364c2e453fdb305f.js.map
