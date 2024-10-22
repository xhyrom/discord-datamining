"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51529"],
  {
    108843: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return t;
        },
      });
      var s = a(200651);
      a(192379);
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
    228620: function (n, e, a) {
      a.r(e);
      var s = a(200651);
      a(192379);
      var c = a(481060),
        t = a(239091),
        i = a(37234),
        l = a(108843),
        u = a(100527),
        r = a(299206),
        o = a(703656),
        _ = a(852245),
        d = a(689938);
      e.default = (0, l.Z)(
        function (n) {
          let { channel: e, onSelect: a } = n,
            l = (0, _.Z)(e),
            u = (0, r.Z)({ id: e.id, label: d.Z.Messages.COPY_ID_CHANNEL });
          return (0, s.jsxs)(c.Menu, {
            navId: "channel-context",
            onClose: t.Zy,
            "aria-label": d.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: a,
            children: [
              (0, s.jsxs)(c.MenuGroup, {
                children: [
                  l,
                  e.isCategory()
                    ? null
                    : (0, s.jsx)(c.MenuItem, {
                        id: "jump-to-channel",
                        label: d.Z.Messages.JUMP_TO_CHANNEL,
                        action: () => {
                          (0, o.XU)(e.guild_id, e.id), (0, i.xf)();
                        },
                      }),
                ],
              }),
              (0, s.jsx)(c.MenuGroup, { children: u }),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_AUDIT_LOG_MENU],
      );
    },
    852245: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return o;
        },
      });
      var s = a(200651);
      a(192379);
      var c = a(442837),
        t = a(481060),
        i = a(787014),
        l = a(496675),
        u = a(981631),
        r = a(689938);
      function o(n) {
        let {
          canManageChannels: e,
          canManageRoles: a,
          canManageWebhooks: o,
          canAccessChannel: _,
        } = (0, c.cj)(
          [l.Z],
          () => ({
            canManageChannels: l.Z.can(u.Plq.MANAGE_CHANNELS, n),
            canManageRoles: l.Z.can(u.Plq.MANAGE_ROLES, n),
            canManageWebhooks: l.Z.can(u.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: l.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && _ && (e || a || o)
          ? (0, s.jsx)(t.MenuItem, {
              id: "edit-channel",
              label:
                n.type === u.d4z.GUILD_CATEGORY
                  ? r.Z.Messages.EDIT_CATEGORY
                  : r.Z.Messages.EDIT_CHANNEL,
              action: () => i.ZP.open(n.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=7efabc3e59a8c0ae2a71.js.map
