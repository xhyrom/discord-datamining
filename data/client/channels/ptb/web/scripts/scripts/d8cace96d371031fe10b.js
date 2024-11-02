"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56944"],
  {
    600830: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return p;
          },
        });
      var u = e(200651);
      e(192379);
      var i = e(442837),
        l = e(481060),
        o = e(239091),
        r = e(522474),
        c = e(788983),
        s = e(695346),
        a = e(393431),
        d = e(981631),
        h = e(388032);
      function p(n) {
        let { channel: t, onSelect: e } = n,
          p = (0, a.Z)(),
          g = s.Fg.useSetting(),
          Z = (function (n) {
            let t = (0, i.e7)([r.Z], () =>
              r.Z.getWindow(d.KJ3.CHANNEL_CALL_POPOUT),
            );
            return null == n || null != t
              ? null
              : (0, u.jsx)(l.MenuItem, {
                  id: "popout-call",
                  label: h.intl.string(h.t.JzWez8),
                  icon: l.WindowLaunchIcon,
                  action: () => c.hP(n),
                });
          })(null != t ? t : void 0);
        return (0, u.jsxs)(l.Menu, {
          navId: "rtc-channel",
          "aria-label": h.intl.string(h.t.ogxXGh),
          onClose: o.Zy,
          onSelect: e,
          children: [
            p,
            (0, u.jsxs)(l.MenuGroup, {
              children: [
                Z,
                (0, u.jsx)(l.MenuCheckboxItem, {
                  id: "show-voice-states",
                  checked: g,
                  action: () => s.Fg.updateSetting(!g),
                  label: h.intl.string(h.t.vkbSBw),
                }),
              ],
            }),
          ],
        });
      }
    },
    393431: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var u = e(200651);
      e(192379);
      var i = e(481060),
        l = e(906732),
        o = e(453925),
        r = e(821564),
        c = e(632304);
      function s() {
        let { analyticsLocations: n } = (0, l.ZP)();
        return [
          (0, u.jsx)(
            i.MenuGroup,
            { children: (0, r.Z)(n) },
            "input-mode-items",
          ),
          (0, u.jsxs)(
            i.MenuGroup,
            { children: [(0, o.Z)(n), (0, c.Z)(n)] },
            "input-output",
          ),
        ];
      }
    },
  },
]);
//# sourceMappingURL=d8cace96d371031fe10b.js.map
