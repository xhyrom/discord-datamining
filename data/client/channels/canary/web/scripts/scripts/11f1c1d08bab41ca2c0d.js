"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92795"],
  {
    5036: function (e, n, a) {
      var t = a(570140),
        l = a(149071),
        i = a(9156);
      n.Z = {
        update(e) {
          t.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
        },
        toggleCollapseGuild(e) {
          l.Z.saveUserGuildSettings(e, {
            hide_muted_channels: !i.ZP.isGuildCollapsed(e),
          }),
            t.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
        },
      };
    },
    652171: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return E;
          },
        });
      var t = a(735250);
      a(470079);
      var l = a(481060),
        i = a(239091),
        u = a(984933),
        s = a(904483),
        d = a(522762),
        r = a(466330),
        o = a(981631),
        c = a(689938);
      function E(e) {
        let { guild: n, onSelect: a } = e,
          E = u.ZP.getDefaultChannel(n.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          _ = (0, d.Z)(n.id),
          p = (0, s.Z)(n),
          I = (0, r.Z)({
            guild: n,
            source: o.t4x.GUILD_CONTEXT_MENU,
            channel: E,
          });
        return (0, t.jsxs)(l.Menu, {
          navId: "guild-context",
          "aria-label": c.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
          onClose: i.Zy,
          onSelect: a,
          children: [
            (0, t.jsx)(l.MenuGroup, { children: _ }),
            (0, t.jsxs)(l.MenuGroup, { children: [p, I] }),
          ],
        });
      }
    },
    904483: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        i = a(481060),
        u = a(496675),
        s = a(981631),
        d = a(647086),
        r = a(689938);
      function o(e) {
        let n = (0, l.e7)([u.Z], () => u.Z.can(s.Plq.MANAGE_CHANNELS, e));
        return __OVERLAY__
          ? null
          : e.id === d._
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsx)(i.MenuItem, {
                  id: "create-category",
                  label: r.Z.Messages.CREATE_CATEGORY,
                  action: () =>
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await a
                        .e("1812")
                        .then(a.bind(a, 477782));
                      return (n) => (0, t.jsx)(e, { ...n });
                    }),
                }),
              })
            : n
              ? [
                  (0, t.jsx)(
                    i.MenuItem,
                    {
                      id: "create-channel",
                      label: r.Z.Messages.CREATE_CHANNEL,
                      action: () =>
                        (0, i.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            a.e("7590"),
                            a.e("45094"),
                            a.e("5769"),
                          ]).then(a.bind(a, 218613));
                          return (a) =>
                            (0, t.jsx)(n, {
                              ...a,
                              channelType: s.d4z.GUILD_TEXT,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-channel",
                  ),
                  (0, t.jsx)(
                    i.MenuItem,
                    {
                      id: "create-category",
                      label: r.Z.Messages.CREATE_CATEGORY,
                      action: () =>
                        (0, i.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            a.e("7590"),
                            a.e("45094"),
                            a.e("5769"),
                          ]).then(a.bind(a, 218613));
                          return (a) =>
                            (0, t.jsx)(n, {
                              ...a,
                              channelType: s.d4z.GUILD_CATEGORY,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-category",
                  ),
                ]
              : null;
      }
    },
    522762: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        i = a(481060),
        u = a(5036),
        s = a(9156),
        d = a(689938);
      function r(e) {
        let n = (0, l.e7)([s.ZP], () => s.ZP.isGuildCollapsed(e), [e]);
        return (0, t.jsx)(i.MenuCheckboxItem, {
          id: "hide-muted-channels",
          label: d.Z.Messages.HIDE_MUTED_CHANNELS,
          action: () => u.Z.toggleCollapseGuild(e),
          checked: n,
        });
      }
    },
    466330: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        i = a(481060),
        u = a(159300),
        s = a(984933),
        d = a(496675),
        r = a(981631),
        o = a(689938);
      function c(e) {
        let { source: n, guild: a, channel: t, stageInstance: i } = e,
          o = (0, l.e7)([s.ZP], () =>
            s.ZP.getDefaultChannel(a.id, !0, r.Plq.CREATE_INSTANT_INVITE),
          ),
          c = (0, l.e7)([d.Z], () => (0, u.b)(d.Z, a, t, i)),
          p = E(n, a, c && null != t ? t : o),
          I = _(n);
        return null == t && n === r.t4x.GUILD_CONTEXT_MENU
          ? null
          : c || null != o
            ? p
            : I;
      }
      let E = (e, n, l) =>
          (0, t.jsx)(i.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === r.t4x.GUILD_HEADER ? i.GroupPlusIcon : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: i } = await Promise.all([
                  a.e("7654"),
                  a.e("85683"),
                ]).then(a.bind(a, 560114));
                return (a) =>
                  (0, t.jsx)(i, { ...a, guild: n, channel: l, source: e });
              }),
          }),
        _ = (e) =>
          (0, t.jsx)(i.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === r.t4x.GUILD_HEADER ? i.GroupPlusIcon : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: e } = await a.e("88358").then(a.bind(a, 598402));
                return (n) => (0, t.jsx)(e, { ...n });
              }),
          });
    },
  },
]);
//# sourceMappingURL=11f1c1d08bab41ca2c0d.js.map
