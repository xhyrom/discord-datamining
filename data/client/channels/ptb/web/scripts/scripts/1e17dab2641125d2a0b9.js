"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56944"],
  {
    600830: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        });
      var u = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        c = t(239091),
        o = t(522474),
        l = t(788983),
        r = t(695346),
        a = t(393431),
        d = t(981631),
        p = t(689938);
      function h(n) {
        let { channel: e, onSelect: t } = n,
          h = (0, a.Z)(),
          Z = r.Fg.useSetting(),
          _ = (function (n) {
            let e = (0, i.e7)([o.Z], () =>
              o.Z.getWindow(d.KJ3.CHANNEL_CALL_POPOUT),
            );
            return null == n || null != e
              ? null
              : (0, u.jsx)(s.MenuItem, {
                  id: "popout-call",
                  label: p.Z.Messages.POPOUT_PLAYER,
                  icon: s.WindowLaunchIcon,
                  action: () => l.hP(n),
                });
          })(null != e ? e : void 0);
        return (0, u.jsxs)(s.Menu, {
          navId: "rtc-channel",
          "aria-label": p.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: c.Zy,
          onSelect: t,
          children: [
            h,
            (0, u.jsxs)(s.MenuGroup, {
              children: [
                _,
                (0, u.jsx)(s.MenuCheckboxItem, {
                  id: "show-voice-states",
                  checked: Z,
                  action: () => r.Fg.updateSetting(!Z),
                  label: p.Z.Messages.VOICE_PANEL_SHOW_VOICE_USERS,
                }),
              ],
            }),
          ],
        });
      }
    },
    393431: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var u = t(735250);
      t(470079);
      var i = t(481060),
        s = t(906732),
        c = t(453925),
        o = t(821564),
        l = t(632304);
      function r() {
        let { analyticsLocations: n } = (0, s.ZP)();
        return [
          (0, u.jsx)(
            i.MenuGroup,
            { children: (0, o.Z)(n) },
            "input-mode-items",
          ),
          (0, u.jsxs)(
            i.MenuGroup,
            { children: [(0, c.Z)(n), (0, l.Z)(n)] },
            "input-output",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=1e17dab2641125d2a0b9.js.map
