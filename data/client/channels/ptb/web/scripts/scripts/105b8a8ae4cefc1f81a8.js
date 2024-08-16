"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25073"],
  {
    883385: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(410575);
      function u(e, n) {
        return function (t) {
          return (0, r.jsx)(o.Z, {
            page: n.page,
            section: n.section,
            object: n.object,
            objectType: n.objectType,
            children: (0, r.jsx)(e, { ...t }),
          });
        };
      }
    },
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var o = t(906732);
      function u(e, n) {
        return function (t) {
          let { analyticsLocations: u } = (0, o.ZP)(n);
          return (0, r.jsx)(o.Gt, {
            value: u,
            children: (0, r.jsx)(e, { ...t }),
          });
        };
      }
    },
    80742: function (e, n, t) {
      t.r(n);
      var r = t(735250);
      t(470079);
      var o = t(481060),
        u = t(239091),
        c = t(883385),
        i = t(108843),
        s = t(100527),
        a = t(299206),
        l = t(981631),
        d = t(689938);
      n.default = (0, i.Z)(
        (0, c.Z)(
          function (e) {
            let { userId: n, onSelect: t } = e,
              c = (0, a.Z)({
                id: n,
                label: d.Z.Messages.COPY_ID_USER,
                showWithoutDeveloperMode: !0,
              });
            return (0, r.jsx)(o.Menu, {
              navId: "unknown-user-context",
              onClose: u.Zy,
              "aria-label": d.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: t,
              children: (0, r.jsx)(o.MenuGroup, { children: c }),
            });
          },
          { object: l.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.UNKNOWN_USER_MENU],
      );
    },
  },
]);
//# sourceMappingURL=105b8a8ae4cefc1f81a8.js.map
