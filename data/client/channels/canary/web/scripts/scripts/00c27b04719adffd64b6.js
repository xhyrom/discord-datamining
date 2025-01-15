"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99905"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(906732);
      function r(n, e) {
        return function (t) {
          let { analyticsLocations: r } = (0, i.ZP)(e);
          return (0, l.jsx)(i.Gt, {
            value: r,
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
        r = t(239091),
        u = t(108843),
        a = t(100527),
        c = t(299206),
        o = t(323597),
        s = t(852245),
        d = t(367722),
        E = t(388032);
      e.default = (0, u.Z)(
        function (n) {
          let { channel: e, guild: t, onSelect: u } = n,
            a = (0, s.Z)(e),
            Z = (0, d.Z)(e, t),
            N = (0, o.Z)(e),
            _ = (0, c.Z)({ id: e.id, label: E.intl.string(E.t.gFHI3t) });
          return (0, l.jsxs)(i.Menu, {
            navId: "channel-context",
            onClose: r.Zy,
            "aria-label": E.intl.string(E.t.Xm41aW),
            onSelect: u,
            children: [
              (0, l.jsx)(i.MenuGroup, { children: a }),
              (0, l.jsx)(i.MenuGroup, { children: Z }),
              (0, l.jsx)(i.MenuGroup, { children: N }),
              (0, l.jsx)(i.MenuGroup, { children: _ }),
            ],
          });
        },
        [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_STORE_CHANNEL_MENU],
      );
    },
    852245: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        u = t(787014),
        a = t(685929),
        c = t(496675),
        o = t(981631),
        s = t(388032);
      function d(n) {
        let {
          canManageChannels: e,
          canManageRoles: t,
          canManageWebhooks: d,
          canAccessChannel: E,
          canUnlinkChannel: Z,
        } = (0, i.cj)(
          [c.Z],
          () => ({
            canManageChannels: c.Z.can(o.Plq.MANAGE_CHANNELS, n),
            canManageRoles: c.Z.can(o.Plq.MANAGE_ROLES, n),
            canManageWebhooks: c.Z.can(o.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: c.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, a.C)(n, c.Z),
          }),
          [n],
        );
        return !__OVERLAY__ && E && (e || t || d || Z)
          ? (0, l.jsx)(r.MenuItem, {
              id: "edit-channel",
              label:
                n.type === o.d4z.GUILD_CATEGORY
                  ? s.intl.string(s.t.zdPFs7)
                  : s.intl.string(s.t["3gUsJS"]),
              action: () => u.ZP.open(n.id),
            })
          : null;
      }
    },
    367722: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = t(466330),
        i = t(981631);
      function r(n, e, t) {
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
        r = t(481060),
        u = t(159300),
        a = t(984933),
        c = t(496675),
        o = t(981631),
        s = t(388032);
      function d(n) {
        let { source: e, guild: t, channel: l, stageInstance: r } = n,
          s = (0, i.e7)([a.ZP], () =>
            a.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          ),
          d = (0, i.e7)([c.Z], () => (0, u.b)(c.Z, t, l, r)),
          N = E(e, t, d && null != l ? l : s),
          _ = Z(e);
        return null == l && e === o.t4x.GUILD_CONTEXT_MENU
          ? null
          : d || null != s
            ? N
            : _;
      }
      let E = (n, e, i) =>
          (0, l.jsx)(r.MenuItem, {
            id: "invite-people",
            label: s.intl.string(s.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? r.GroupPlusIcon : void 0,
            action: () =>
              (0, r.openModalLazy)(async () => {
                let { default: r } = await Promise.all([
                  t.e("7654"),
                  t.e("46949"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, l.jsx)(r, { ...t, guild: e, channel: i, source: n });
              }),
          }),
        Z = (n) =>
          (0, l.jsx)(r.MenuItem, {
            id: "invite-people",
            label: s.intl.string(s.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? r.GroupPlusIcon : void 0,
            action: () =>
              (0, r.openModalLazy)(async () => {
                let { default: n } = await t.e("88358").then(t.bind(t, 598402));
                return (e) => (0, l.jsx)(n, { ...e });
              }),
          });
    },
    685929: function (n, e, t) {
      t.d(e, {
        C: function () {
          return u;
        },
        Y: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(496675),
        r = t(981631);
      function u(n) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
        return (
          null != n &&
          null != n.linkedLobby &&
          e.can(r.Plq.MANAGE_CHANNELS, n) &&
          e.can(r.Plq.VIEW_CHANNEL, n) &&
          e.can(r.Plq.SEND_MESSAGES, n)
        );
      }
      function a(n) {
        return (0, l.e7)([i.Z], () => u(n, i.Z));
      }
    },
  },
]);
//# sourceMappingURL=00c27b04719adffd64b6.js.map
