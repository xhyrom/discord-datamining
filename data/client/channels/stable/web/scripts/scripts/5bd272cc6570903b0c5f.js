"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39612"],
  {
    547280: function (e, t, i) {
      i.d(t, {
        b: function () {
          return u;
        },
        o: function () {
          return d;
        },
      });
      var n = i(570140),
        s = i(605236),
        c = i(626135),
        l = i(445507),
        a = i(981631),
        o = i(921944);
      function d(e) {
        let { targetKey: t, dismissibleContent: i, data: d, completed: u } = e;
        null != d.selectedOptionKey &&
          (!(0, s.un)(i) &&
            c.default.track(a.rMx.SIGNUP_COMPLETED, {
              target_key: t,
              selected_option_key: d.selectedOptionKey,
              email: d.email,
              guild_id: d.guildId,
              metadata: (0, l.mU)(d),
              completed: u,
            }),
          (0, s.EW)(i, { dismissAction: o.L.PRIMARY, forceTrack: !0 }),
          n.Z.dispatch({
            type: "COMPLETE_SIGN_UP",
            email: d.email,
            targetKey: t,
            selectedOptionKey: d.selectedOptionKey,
          }));
      }
      function u(e, t) {
        (0, s.EW)(t, { dismissAction: o.L.DISMISS, forceTrack: !0 }),
          n.Z.dispatch({ type: "DISMISS_SIGN_UP", targetKey: e });
      }
    },
    761624: function (e, t, i) {
      i.r(t);
      var n = i(200651),
        s = i(192379),
        c = i(481060),
        l = i(239091),
        a = i(547280),
        o = i(388032);
      t.default = function (e) {
        let { signupTarget: t, onSelect: i } = e,
          d = s.useCallback(() => {
            (0, a.b)(t.key, t.dismissibleContent);
          }, [t]);
        return (0, n.jsx)(c.Menu, {
          navId: "signup-button-context",
          onClose: l.Zy,
          "aria-label": o.intl.string(o.t.WAI6xs),
          onSelect: i,
          children: (0, n.jsx)(c.MenuGroup, {
            children: (0, n.jsx)(c.MenuItem, {
              id: "dismiss",
              label: o.intl.string(o.t.WAI6xs),
              action: d,
            }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=5bd272cc6570903b0c5f.js.map
