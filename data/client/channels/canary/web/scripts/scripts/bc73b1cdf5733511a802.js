"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70623"],
  {
    108843: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return t;
        },
      });
      var s = a(735250);
      a(470079);
      var c = a(906732);
      function t(n, e) {
        return function (a) {
          let { analyticsLocations: t } = (0, c.ZP)(e);
          return (0, s.jsx)(c.Gt, {
            value: t,
            children: (0, s.jsx)(n, { ...a }),
          });
        };
      }
    },
    99334: function (n, e, a) {
      a.r(e);
      var s = a(735250);
      a(470079);
      var c = a(481060),
        t = a(239091),
        r = a(108843),
        u = a(100527),
        i = a(299206),
        l = a(852245),
        o = a(689938);
      e.default = (0, r.Z)(
        function (n) {
          let { channel: e, onSelect: a } = n,
            r = (0, l.Z)(e),
            u = (0, i.Z)({ id: e.id, label: o.Z.Messages.COPY_ID_CHANNEL });
          return (0, s.jsxs)(c.Menu, {
            navId: "channel-context",
            onClose: t.Zy,
            "aria-label": o.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: a,
            children: [
              (0, s.jsx)(c.MenuGroup, { children: r }),
              (0, s.jsx)(c.MenuGroup, { children: u }),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU],
      );
    },
    852245: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return o;
        },
      });
      var s = a(735250);
      a(470079);
      var c = a(442837),
        t = a(481060),
        r = a(787014),
        u = a(496675),
        i = a(981631),
        l = a(689938);
      function o(n) {
        let {
          canManageChannels: e,
          canManageRoles: a,
          canManageWebhooks: o,
          canAccessChannel: E,
        } = (0, c.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(i.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(i.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(i.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && E && (e || a || o)
          ? (0, s.jsx)(t.MenuItem, {
              id: "edit-channel",
              label:
                n.type === i.d4z.GUILD_CATEGORY
                  ? l.Z.Messages.EDIT_CATEGORY
                  : l.Z.Messages.EDIT_CHANNEL,
              action: () => r.ZP.open(n.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=bc73b1cdf5733511a802.js.map
