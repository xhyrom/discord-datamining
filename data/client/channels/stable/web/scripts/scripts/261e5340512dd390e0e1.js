"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40706"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(906732);
      function r(n, e) {
        return function (t) {
          let { analyticsLocations: r } = (0, i.ZP)(e);
          return (0, a.jsx)(i.Gt, {
            value: r,
            children: (0, a.jsx)(n, { ...t }),
          });
        };
      }
    },
    610909: function (n, e, t) {
      t.r(e);
      var a = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        c = t(239091),
        l = t(153867),
        u = t(108843),
        s = t(100527),
        o = t(740492),
        d = t(388032);
      e.default = (0, u.Z)(
        function (n) {
          let e = (0, i.e7)([o.ZP], () => o.ZP.showPlayAgain);
          return (0, a.jsx)(r.Menu, {
            navId: "play-again-context",
            onClose: c.Zy,
            "aria-label": d.intl.string(d.t.qDZryM),
            onSelect: n.onSelect,
            children: (0, a.jsx)(
              r.MenuGroup,
              {
                children: (0, a.jsx)(r.MenuCheckboxItem, {
                  id: "show-play-again",
                  label: d.intl.string(d.t.qDZryM),
                  action: () =>
                    l.ZP.updatedUnsyncedSettings({ showPlayAgain: !e }),
                  checked: e,
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
//# sourceMappingURL=261e5340512dd390e0e1.js.map
