"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40706"],
  {
    108843: function (n, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var e = a(200651);
      a(192379);
      var i = a(906732);
      function r(n, t) {
        return function (a) {
          let { analyticsLocations: r } = (0, i.ZP)(t);
          return (0, e.jsx)(i.Gt, {
            value: r,
            children: (0, e.jsx)(n, { ...a }),
          });
        };
      }
    },
    610909: function (n, t, a) {
      a.r(t);
      var e = a(200651);
      a(192379);
      var i = a(481060),
        r = a(239091),
        u = a(153867),
        l = a(108843),
        s = a(100527),
        c = a(388032);
      t.default = (0, l.Z)(
        function (n) {
          return (0, e.jsx)(i.Menu, {
            navId: "play-again-context",
            onClose: r.Zy,
            "aria-label": c.intl.string(c.t.qDZryM),
            onSelect: n.onSelect,
            children: (0, e.jsx)(
              i.MenuGroup,
              {
                children: (0, e.jsx)(i.MenuItem, {
                  id: "show-play-again",
                  label: c.intl.string(c.t.AHtm4O),
                  action: () =>
                    u.ZP.updatedUnsyncedSettings({ showPlayAgain: !1 }),
                  subtext: c.intl.format(c.t["Wz/nKi"], {}),
                }),
              },
              "play-again",
            ),
          });
        },
        [s.Z.CONTEXT_MENU, s.Z.APP_DMS_QUICK_LAUNCHER],
      );
    },
  },
]);
//# sourceMappingURL=08a049e516f54a472533.js.map
