"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28249"],
  {
    613329: function (n, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return l;
          },
        });
      var r = i(200651);
      i(192379);
      var e = i(481060),
        u = i(239091),
        o = i(299660),
        s = i(517640),
        c = i(388032);
      function l(n) {
        let { guild: t, onSelect: i } = n,
          l = (0, s.Z)(t),
          a = (0, o.Z)(t.id);
        return (0, r.jsx)(e.Menu, {
          navId: "role-subscription-context",
          "aria-label": c.intl.string(c.t.g3KvYG),
          onClose: u.Zy,
          onSelect: i,
          children: (0, r.jsxs)(e.MenuGroup, { children: [l, a] }),
        });
      }
    },
    299660: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = i(200651);
      i(192379);
      var e = i(852229),
        u = i(481060),
        o = i(934415),
        s = i(176505),
        c = i(388032);
      function l(n) {
        return (0, r.jsx)(u.MenuItem, {
          id: "role-subscription-copy-link",
          label: c.intl.string(c.t.WqhZsr),
          action: () => {
            (0, e.J)((0, o.wR)(n, s.oC.ROLE_SUBSCRIPTIONS));
          },
        });
      }
    },
    517640: function (n, t, i) {
      i.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = i(200651);
      i(192379);
      var e = i(481060),
        u = i(434404),
        o = i(144507),
        s = i(981631),
        c = i(388032);
      function l(n) {
        return (0, o.$D)(n)
          ? (0, r.jsx)(e.MenuItem, {
              id: "role-subscription-settings",
              label: c.intl.string(c.t.jMN5ZG),
              action: () => {
                u.Z.open(n.id, s.pNK.ROLE_SUBSCRIPTIONS);
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=7b36a8071787013a5664.js.map
