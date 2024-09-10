"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99905"],
  {
    108843: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return u;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(906732);
      function u(n, e) {
        return function (a) {
          let { analyticsLocations: u } = (0, l.ZP)(e);
          return (0, t.jsx)(l.Gt, {
            value: u,
            children: (0, t.jsx)(n, { ...a }),
          });
        };
      }
    },
    649400: function (n, e, a) {
      a.r(e);
      var t = a(735250);
      a(470079);
      var l = a(481060),
        u = a(239091),
        r = a(108843),
        c = a(100527),
        s = a(299206),
        i = a(323597),
        o = a(852245),
        E = a(367722),
        d = a(689938);
      e.default = (0, r.Z)(
        function (n) {
          let { channel: e, guild: a, onSelect: r } = n,
            c = (0, o.Z)(e),
            _ = (0, E.Z)(e, a),
            Z = (0, i.Z)(e),
            N = (0, s.Z)({ id: e.id, label: d.Z.Messages.COPY_ID_CHANNEL });
          return (0, t.jsxs)(l.Menu, {
            navId: "channel-context",
            onClose: u.Zy,
            "aria-label": d.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: r,
            children: [
              (0, t.jsx)(l.MenuGroup, { children: c }),
              (0, t.jsx)(l.MenuGroup, { children: _ }),
              (0, t.jsx)(l.MenuGroup, { children: Z }),
              (0, t.jsx)(l.MenuGroup, { children: N }),
            ],
          });
        },
        [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_STORE_CHANNEL_MENU],
      );
    },
    852245: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return o;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        u = a(481060),
        r = a(787014),
        c = a(496675),
        s = a(981631),
        i = a(689938);
      function o(n) {
        let {
          canManageChannels: e,
          canManageRoles: a,
          canManageWebhooks: o,
          canAccessChannel: E,
        } = (0, l.cj)(
          [c.Z],
          () => ({
            canManageChannels: c.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: c.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: c.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: c.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && E && (e || a || o)
          ? (0, t.jsx)(u.MenuItem, {
              id: "edit-channel",
              label:
                n.type === s.d4z.GUILD_CATEGORY
                  ? i.Z.Messages.EDIT_CATEGORY
                  : i.Z.Messages.EDIT_CHANNEL,
              action: () => r.ZP.open(n.id),
            })
          : null;
      }
    },
    367722: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return u;
        },
      });
      var t = a(466330),
        l = a(981631);
      function u(n, e, a) {
        return (0, t.Z)({
          guild: e,
          channel: n,
          stageInstance: a,
          source: l.t4x.CONTEXT_MENU,
        });
      }
    },
    466330: function (n, e, a) {
      a.d(e, {
        Z: function () {
          return E;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        u = a(481060),
        r = a(159300),
        c = a(984933),
        s = a(496675),
        i = a(981631),
        o = a(689938);
      function E(n) {
        let { source: e, guild: a, channel: t, stageInstance: u } = n,
          o = (0, l.e7)([c.ZP], () =>
            c.ZP.getDefaultChannel(a.id, !0, i.Plq.CREATE_INSTANT_INVITE),
          ),
          E = (0, l.e7)([s.Z], () => (0, r.b)(s.Z, a, t, u)),
          Z = d(e, a, E && null != t ? t : o),
          N = _(e);
        return null == t && e === i.t4x.GUILD_CONTEXT_MENU
          ? null
          : E || null != o
            ? Z
            : N;
      }
      let d = (n, e, l) =>
          (0, t.jsx)(u.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: n === i.t4x.GUILD_HEADER ? u.GroupPlusIcon : void 0,
            action: () =>
              (0, u.openModalLazy)(async () => {
                let { default: u } = await Promise.all([
                  a.e("7654"),
                  a.e("85683"),
                ]).then(a.bind(a, 560114));
                return (a) =>
                  (0, t.jsx)(u, { ...a, guild: e, channel: l, source: n });
              }),
          }),
        _ = (n) =>
          (0, t.jsx)(u.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: n === i.t4x.GUILD_HEADER ? u.GroupPlusIcon : void 0,
            action: () =>
              (0, u.openModalLazy)(async () => {
                let { default: n } = await a.e("88358").then(a.bind(a, 598402));
                return (e) => (0, t.jsx)(n, { ...e });
              }),
          });
    },
  },
]);
//# sourceMappingURL=d9d2b8eb4f5c8b963d8b.js.map
