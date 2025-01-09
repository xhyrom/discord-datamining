"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51529"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(906732);
      function l(n, e) {
        return function (t) {
          let { analyticsLocations: l } = (0, i.ZP)(e);
          return (0, a.jsx)(i.Gt, {
            value: l,
            children: (0, a.jsx)(n, { ...t }),
          });
        };
      }
    },
    228620: function (n, e, t) {
      t.r(e);
      var a = t(200651);
      t(192379);
      var i = t(481060),
        l = t(239091),
        c = t(37234),
        r = t(108843),
        s = t(100527),
        u = t(299206),
        o = t(703656),
        d = t(852245),
        h = t(388032);
      e.default = (0, r.Z)(
        function (n) {
          let { channel: e, onSelect: t } = n,
            r = (0, d.Z)(e),
            s = (0, u.Z)({ id: e.id, label: h.intl.string(h.t.gFHI3t) });
          return (0, a.jsxs)(i.Menu, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": h.intl.string(h.t.Xm41aW),
            onSelect: t,
            children: [
              (0, a.jsxs)(i.MenuGroup, {
                children: [
                  r,
                  e.isCategory()
                    ? null
                    : (0, a.jsx)(i.MenuItem, {
                        id: "jump-to-channel",
                        label: h.intl.string(h.t["bQIM4+"]),
                        action: () => {
                          (0, o.XU)(e.guild_id, e.id), (0, c.xf)();
                        },
                      }),
                ],
              }),
              (0, a.jsx)(i.MenuGroup, { children: s }),
            ],
          });
        },
        [s.Z.CONTEXT_MENU, s.Z.CHANNEL_AUDIT_LOG_MENU],
      );
    },
    852245: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var a = t(200651);
      t(192379);
      var i = t(442837),
        l = t(481060),
        c = t(787014),
        r = t(685929),
        s = t(496675),
        u = t(981631),
        o = t(388032);
      function d(n) {
        let {
          canManageChannels: e,
          canManageRoles: t,
          canManageWebhooks: d,
          canAccessChannel: h,
          canUnlinkChannel: Z,
        } = (0, i.cj)(
          [s.Z],
          () => ({
            canManageChannels: s.Z.can(u.Plq.MANAGE_CHANNELS, n),
            canManageRoles: s.Z.can(u.Plq.MANAGE_ROLES, n),
            canManageWebhooks: s.Z.can(u.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: s.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, r.C)(n, s.Z),
          }),
          [n],
        );
        return !__OVERLAY__ && h && (e || t || d || Z)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                n.type === u.d4z.GUILD_CATEGORY
                  ? o.intl.string(o.t.zdPFs7)
                  : o.intl.string(o.t["3gUsJS"]),
              action: () => c.ZP.open(n.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=9f287992f037458a0d53.js.map
