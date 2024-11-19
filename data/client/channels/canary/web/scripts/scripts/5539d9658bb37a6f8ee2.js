"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99905"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(906732);
      function a(n, e) {
        return function (t) {
          let { analyticsLocations: a } = (0, i.ZP)(e);
          return (0, l.jsx)(i.Gt, {
            value: a,
            children: (0, l.jsx)(n, { ...t }),
          });
        };
      }
    },
    649400: function (n, e, t) {
      t.r(e);
      var l = t(200651);
      t(192379);
      var i = t(481060),
        a = t(239091),
        r = t(108843),
        u = t(100527),
        c = t(299206),
        o = t(323597),
        s = t(852245),
        d = t(367722),
        E = t(388032);
      e.default = (0, r.Z)(
        function (n) {
          let { channel: e, guild: t, onSelect: r } = n,
            u = (0, s.Z)(e),
            Z = (0, d.Z)(e, t),
            _ = (0, o.Z)(e),
            p = (0, c.Z)({ id: e.id, label: E.intl.string(E.t.gFHI3t) });
          return (0, l.jsxs)(i.Menu, {
            navId: "channel-context",
            onClose: a.Zy,
            "aria-label": E.intl.string(E.t.Xm41aW),
            onSelect: r,
            children: [
              (0, l.jsx)(i.MenuGroup, { children: u }),
              (0, l.jsx)(i.MenuGroup, { children: Z }),
              (0, l.jsx)(i.MenuGroup, { children: _ }),
              (0, l.jsx)(i.MenuGroup, { children: p }),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_STORE_CHANNEL_MENU],
      );
    },
    852245: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        a = t(481060),
        r = t(787014),
        u = t(496675),
        c = t(981631),
        o = t(388032);
      function s(n) {
        let {
          canManageChannels: e,
          canManageRoles: t,
          canManageWebhooks: s,
          canAccessChannel: d,
        } = (0, i.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(c.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(c.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(c.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && d && (e || t || s)
          ? (0, l.jsx)(a.MenuItem, {
              id: "edit-channel",
              label:
                n.type === c.d4z.GUILD_CATEGORY
                  ? o.intl.string(o.t.zdPFs7)
                  : o.intl.string(o.t["3gUsJS"]),
              action: () => r.ZP.open(n.id),
            })
          : null;
      }
    },
    367722: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var l = t(466330),
        i = t(981631);
      function a(n, e, t) {
        return (0, l.Z)({
          guild: e,
          channel: n,
          stageInstance: t,
          source: i.t4x.CONTEXT_MENU,
        });
      }
    },
    466330: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        a = t(481060),
        r = t(159300),
        u = t(984933),
        c = t(496675),
        o = t(981631),
        s = t(388032);
      function d(n) {
        let { source: e, guild: t, channel: l, stageInstance: a } = n,
          s = (0, i.e7)([u.ZP], () =>
            u.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          ),
          d = (0, i.e7)([c.Z], () => (0, r.b)(c.Z, t, l, a)),
          _ = E(e, t, d && null != l ? l : s),
          p = Z(e);
        return null == l && e === o.t4x.GUILD_CONTEXT_MENU
          ? null
          : d || null != s
            ? _
            : p;
      }
      let E = (n, e, i) =>
          (0, l.jsx)(a.MenuItem, {
            id: "invite-people",
            label: s.intl.string(s.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                  t.e("7654"),
                  t.e("85683"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, l.jsx)(a, { ...t, guild: e, channel: i, source: n });
              }),
          }),
        Z = (n) =>
          (0, l.jsx)(a.MenuItem, {
            id: "invite-people",
            label: s.intl.string(s.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: n } = await t.e("88358").then(t.bind(t, 598402));
                return (e) => (0, l.jsx)(n, { ...e });
              }),
          });
    },
  },
]);
//# sourceMappingURL=5539d9658bb37a6f8ee2.js.map
