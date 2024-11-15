"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40283"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return i;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(906732);
      function i(n, e) {
        return function (t) {
          let { analyticsLocations: i } = (0, a.ZP)(e);
          return (0, l.jsx)(a.Gt, {
            value: i,
            children: (0, l.jsx)(n, { ...t }),
          });
        };
      }
    },
    428108: function (n, e, t) {
      t.r(e);
      var l = t(200651);
      t(192379);
      var a = t(481060),
        i = t(239091),
        r = t(108843),
        u = t(100527),
        c = t(299206),
        o = t(398048),
        d = t(3689),
        s = t(323597),
        _ = t(852245),
        E = t(367722),
        Z = t(388032);
      e.default = (0, r.Z)(
        function (n) {
          let { channel: e, guild: t, onSelect: r } = n,
            u = (0, _.Z)(e),
            h = (0, E.Z)(e, t),
            f = (0, o.Z)(e, t),
            p = (0, d.Z)(e, t),
            I = (0, s.Z)(e),
            M = (0, c.Z)({ id: e.id, label: Z.intl.string(Z.t.gFHI3t) });
          return (0, l.jsxs)(a.Menu, {
            navId: "channel-context",
            onClose: i.Zy,
            "aria-label": Z.intl.string(Z.t.Xm41aW),
            onSelect: r,
            children: [
              (0, l.jsx)(a.MenuGroup, { children: u }),
              (0, l.jsxs)(a.MenuGroup, { children: [h, f, p] }),
              (0, l.jsx)(a.MenuGroup, { children: I }),
              (0, l.jsx)(a.MenuGroup, { children: M }),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
      );
    },
    398048: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        r = t(496675),
        u = t(981631),
        c = t(388032);
      function o(n, e) {
        let o = (0, a.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        return __OVERLAY__ || !o
          ? null
          : (0, l.jsx)(i.MenuItem, {
              id: "clone-channel",
              label: c.intl.string(c.t.dEaPc3),
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: a } = await Promise.all([
                    t.e("7590"),
                    t.e("45094"),
                    t.e("74287"),
                  ]).then(t.bind(t, 218613));
                  return (t) =>
                    (0, l.jsx)(a, {
                      ...t,
                      channelType: n.type,
                      guildId: e.id,
                      categoryId: n.parent_id,
                      cloneChannelId: n.id,
                    });
                }),
            });
      }
    },
    3689: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        r = t(496675),
        u = t(981631),
        c = t(388032);
      function o(n, e) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.type,
          d = (0, a.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        if (__OVERLAY__ || !d) return null;
        let s = () => {
          (0, i.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              t.e("7590"),
              t.e("45094"),
              t.e("74287"),
            ]).then(t.bind(t, 218613));
            return (t) =>
              (0, l.jsx)(e, {
                ...t,
                channelType: o,
                guildId: n.guild_id,
                categoryId: n.parent_id,
              });
          });
        };
        switch (o) {
          case u.d4z.GUILD_TEXT:
            return (0, l.jsx)(i.MenuItem, {
              id: "create-text-channel",
              label: c.intl.string(c.t.HHkTJC),
              action: s,
            });
          case u.d4z.GUILD_VOICE:
            return (0, l.jsx)(i.MenuItem, {
              id: "create-voice-channel",
              label: c.intl.string(c.t.AlbZaG),
              action: s,
            });
          default:
            return null;
        }
      }
    },
    852245: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        r = t(787014),
        u = t(496675),
        c = t(981631),
        o = t(388032);
      function d(n) {
        let {
          canManageChannels: e,
          canManageRoles: t,
          canManageWebhooks: d,
          canAccessChannel: s,
        } = (0, a.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(c.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(c.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(c.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && s && (e || t || d)
          ? (0, l.jsx)(i.MenuItem, {
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
          return i;
        },
      });
      var l = t(466330),
        a = t(981631);
      function i(n, e, t) {
        return (0, l.Z)({
          guild: e,
          channel: n,
          stageInstance: t,
          source: a.t4x.CONTEXT_MENU,
        });
      }
    },
    466330: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        r = t(159300),
        u = t(984933),
        c = t(496675),
        o = t(981631),
        d = t(388032);
      function s(n) {
        let { source: e, guild: t, channel: l, stageInstance: i } = n,
          d = (0, a.e7)([u.ZP], () =>
            u.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          ),
          s = (0, a.e7)([c.Z], () => (0, r.b)(c.Z, t, l, i)),
          Z = _(e, t, s && null != l ? l : d),
          h = E(e);
        return null == l && e === o.t4x.GUILD_CONTEXT_MENU
          ? null
          : s || null != d
            ? Z
            : h;
      }
      let _ = (n, e, a) =>
          (0, l.jsx)(i.MenuItem, {
            id: "invite-people",
            label: d.intl.string(d.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? i.GroupPlusIcon : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: i } = await Promise.all([
                  t.e("7654"),
                  t.e("19821"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, l.jsx)(i, { ...t, guild: e, channel: a, source: n });
              }),
          }),
        E = (n) =>
          (0, l.jsx)(i.MenuItem, {
            id: "invite-people",
            label: d.intl.string(d.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? i.GroupPlusIcon : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: n } = await t.e("88358").then(t.bind(t, 598402));
                return (e) => (0, l.jsx)(n, { ...e });
              }),
          });
    },
  },
]);
//# sourceMappingURL=75895aacf606200f19cf.js.map
