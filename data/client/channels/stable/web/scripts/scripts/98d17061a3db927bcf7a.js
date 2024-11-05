"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25073"],
  {
    883385: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(410575);
      function o(n, t) {
        return function (e) {
          return (0, r.jsx)(i.Z, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, r.jsx)(n, { ...e }),
          });
        };
      }
    },
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(906732);
      function o(n, t) {
        return function (e) {
          let { analyticsLocations: o } = (0, i.ZP)(t);
          return (0, r.jsx)(i.Gt, {
            value: o,
            children: (0, r.jsx)(n, { ...e }),
          });
        };
      }
    },
    80742: function (n, t, e) {
      e.r(t);
      var r = e(200651);
      e(192379);
      var i = e(481060),
        o = e(239091),
        u = e(883385),
        c = e(108843),
        s = e(100527),
        a = e(299206),
        l = e(981631),
        d = e(388032);
      t.default = (0, c.Z)(
        (0, u.Z)(
          function (n) {
            let { userId: t, onSelect: e } = n,
              u = (0, a.Z)({
                id: t,
                label: d.intl.string(d.t["/AXYnJ"]),
                showWithoutDeveloperMode: !0,
              });
            return (0, r.jsx)(i.Menu, {
              navId: "unknown-user-context",
              onClose: o.Zy,
              "aria-label": d.intl.string(d.t.liqwPD),
              onSelect: e,
              children: (0, r.jsx)(i.MenuGroup, { children: u }),
            });
          },
          { object: l.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.UNKNOWN_USER_MENU],
      );
    },
  },
]);
//# sourceMappingURL=98d17061a3db927bcf7a.js.map
