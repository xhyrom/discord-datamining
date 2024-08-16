"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28249"],
  {
    613329: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return a;
          },
        });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        s = t(239091),
        u = t(299660),
        o = t(517640),
        c = t(689938);
      function a(n) {
        let { guild: e, onSelect: t } = n,
          a = (0, o.Z)(e),
          l = (0, u.Z)(e.id);
        return (0, r.jsx)(i.Menu, {
          navId: "role-subscription-context",
          "aria-label": c.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
          onClose: s.Zy,
          onSelect: t,
          children: (0, r.jsxs)(i.MenuGroup, { children: [a, l] }),
        });
      }
    },
    299660: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(852229),
        s = t(481060),
        u = t(934415),
        o = t(176505),
        c = t(689938);
      function a(n) {
        return (0, r.jsx)(s.MenuItem, {
          id: "role-subscription-copy-link",
          label: c.Z.Messages.COPY_LINK,
          action: () => {
            (0, i.J)((0, u.wR)(n, o.oC.ROLE_SUBSCRIPTIONS));
          },
        });
      }
    },
    517640: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = t(735250);
      t(470079);
      var i = t(481060),
        s = t(434404),
        u = t(144507),
        o = t(981631),
        c = t(689938);
      function a(n) {
        return (0, u.$D)(n)
          ? (0, r.jsx)(i.MenuItem, {
              id: "role-subscription-settings",
              label: c.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_EDIT_SETTINGS,
              action: () => {
                s.Z.open(n.id, o.pNK.ROLE_SUBSCRIPTIONS);
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=24303a05d275b483d940.js.map
