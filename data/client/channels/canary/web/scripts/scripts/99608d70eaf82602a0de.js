"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70623"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return i;
        },
      });
      var a = t(200651);
      t(192379);
      var c = t(906732);
      function i(n, e) {
        return function (t) {
          let { analyticsLocations: i } = (0, c.ZP)(e);
          return (0, a.jsx)(c.Gt, {
            value: i,
            children: (0, a.jsx)(n, { ...t }),
          });
        };
      }
    },
    99334: function (n, e, t) {
      t.r(e);
      var a = t(200651);
      t(192379);
      var c = t(481060),
        i = t(239091),
        r = t(108843),
        l = t(100527),
        s = t(299206),
        u = t(852245),
        o = t(388032);
      e.default = (0, r.Z)(
        function (n) {
          let { channel: e, onSelect: t } = n,
            r = (0, u.Z)(e),
            l = (0, s.Z)({ id: e.id, label: o.intl.string(o.t.gFHI3t) });
          return (0, a.jsxs)(c.Menu, {
            navId: "channel-context",
            onClose: i.Zy,
            "aria-label": o.intl.string(o.t.Xm41aW),
            onSelect: t,
            children: [
              (0, a.jsx)(c.MenuGroup, { children: r }),
              (0, a.jsx)(c.MenuGroup, { children: l }),
            ],
          });
        },
        [l.Z.CONTEXT_MENU, l.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU],
      );
    },
    852245: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var a = t(200651);
      t(192379);
      var c = t(442837),
        i = t(481060),
        r = t(787014),
        l = t(496675),
        s = t(981631),
        u = t(388032);
      function o(n) {
        let {
          canManageChannels: e,
          canManageRoles: t,
          canManageWebhooks: o,
          canAccessChannel: d,
        } = (0, c.cj)(
          [l.Z],
          () => ({
            canManageChannels: l.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: l.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: l.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: l.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && d && (e || t || o)
          ? (0, a.jsx)(i.MenuItem, {
              id: "edit-channel",
              label:
                n.type === s.d4z.GUILD_CATEGORY
                  ? u.intl.string(u.t.zdPFs7)
                  : u.intl.string(u.t["3gUsJS"]),
              action: () => r.ZP.open(n.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=99608d70eaf82602a0de.js.map
