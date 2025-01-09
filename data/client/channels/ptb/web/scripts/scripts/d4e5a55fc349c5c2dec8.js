"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70623"],
  {
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = e(200651);
      e(192379);
      var c = e(906732);
      function i(n, t) {
        return function (e) {
          let { analyticsLocations: i } = (0, c.ZP)(t);
          return (0, a.jsx)(c.Gt, {
            value: i,
            children: (0, a.jsx)(n, { ...e }),
          });
        };
      }
    },
    99334: function (n, t, e) {
      e.r(t);
      var a = e(200651);
      e(192379);
      var c = e(481060),
        i = e(239091),
        l = e(108843),
        r = e(100527),
        u = e(299206),
        s = e(852245),
        o = e(388032);
      t.default = (0, l.Z)(
        function (n) {
          let { channel: t, onSelect: e } = n,
            l = (0, s.Z)(t),
            r = (0, u.Z)({ id: t.id, label: o.intl.string(o.t.gFHI3t) });
          return (0, a.jsxs)(c.Menu, {
            navId: "channel-context",
            onClose: i.Zy,
            "aria-label": o.intl.string(o.t.Xm41aW),
            onSelect: e,
            children: [
              (0, a.jsx)(c.MenuGroup, { children: l }),
              (0, a.jsx)(c.MenuGroup, { children: r }),
            ],
          });
        },
        [r.Z.CONTEXT_MENU, r.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU],
      );
    },
    852245: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = e(200651);
      e(192379);
      var c = e(442837),
        i = e(481060),
        l = e(787014),
        r = e(685929),
        u = e(496675),
        s = e(981631),
        o = e(388032);
      function d(n) {
        let {
          canManageChannels: t,
          canManageRoles: e,
          canManageWebhooks: d,
          canAccessChannel: E,
          canUnlinkChannel: Z,
        } = (0, c.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, r.C)(n, u.Z),
          }),
          [n],
        );
        return !__OVERLAY__ && E && (t || e || d || Z)
          ? (0, a.jsx)(i.MenuItem, {
              id: "edit-channel",
              label:
                n.type === s.d4z.GUILD_CATEGORY
                  ? o.intl.string(o.t.zdPFs7)
                  : o.intl.string(o.t["3gUsJS"]),
              action: () => l.ZP.open(n.id),
            })
          : null;
      }
    },
    685929: function (n, t, e) {
      e.d(t, {
        C: function () {
          return l;
        },
        Y: function () {
          return r;
        },
      });
      var a = e(442837),
        c = e(496675),
        i = e(981631);
      function l(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z;
        return (
          null != n &&
          null != n.linkedLobby &&
          t.can(i.Plq.MANAGE_CHANNELS, n) &&
          t.can(i.Plq.VIEW_CHANNEL, n) &&
          t.can(i.Plq.SEND_MESSAGES, n)
        );
      }
      function r(n) {
        return (0, a.e7)([c.Z], () => l(n, c.Z));
      }
    },
  },
]);
//# sourceMappingURL=d4e5a55fc349c5c2dec8.js.map
