"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51529"],
  {
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = e(200651);
      e(192379);
      var i = e(906732);
      function c(n, t) {
        return function (e) {
          let { analyticsLocations: c } = (0, i.ZP)(t);
          return (0, a.jsx)(i.Gt, {
            value: c,
            children: (0, a.jsx)(n, { ...e }),
          });
        };
      }
    },
    228620: function (n, t, e) {
      e.r(t);
      var a = e(200651);
      e(192379);
      var i = e(481060),
        c = e(239091),
        l = e(37234),
        r = e(108843),
        s = e(100527),
        u = e(299206),
        o = e(703656),
        d = e(852245),
        h = e(388032);
      t.default = (0, r.Z)(
        function (n) {
          let { channel: t, onSelect: e } = n,
            r = (0, d.Z)(t),
            s = (0, u.Z)({ id: t.id, label: h.intl.string(h.t.gFHI3t) });
          return (0, a.jsxs)(i.Menu, {
            navId: "channel-context",
            onClose: c.Zy,
            "aria-label": h.intl.string(h.t.Xm41aW),
            onSelect: e,
            children: [
              (0, a.jsxs)(i.MenuGroup, {
                children: [
                  r,
                  t.isCategory()
                    ? null
                    : (0, a.jsx)(i.MenuItem, {
                        id: "jump-to-channel",
                        label: h.intl.string(h.t["bQIM4+"]),
                        action: () => {
                          (0, o.XU)(t.guild_id, t.id), (0, l.xf)();
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
    852245: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = e(200651);
      e(192379);
      var i = e(442837),
        c = e(481060),
        l = e(787014),
        r = e(496675),
        s = e(981631),
        u = e(388032);
      function o(n) {
        let {
          canManageChannels: t,
          canManageRoles: e,
          canManageWebhooks: o,
          canAccessChannel: d,
        } = (0, i.cj)(
          [r.Z],
          () => ({
            canManageChannels: r.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: r.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: r.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: r.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && d && (t || e || o)
          ? (0, a.jsx)(c.MenuItem, {
              id: "edit-channel",
              label:
                n.type === s.d4z.GUILD_CATEGORY
                  ? u.intl.string(u.t.zdPFs7)
                  : u.intl.string(u.t["3gUsJS"]),
              action: () => l.ZP.open(n.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=d022ac3551f61adcdd37.js.map
