"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92795"],
  {
    5036: function (e, n, t) {
      var l = t(570140),
        a = t(149071),
        i = t(9156);
      n.Z = {
        update(e) {
          l.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
        },
        toggleCollapseGuild(e) {
          a.Z.saveUserGuildSettings(e, {
            hide_muted_channels: !i.ZP.isGuildCollapsed(e),
          }),
            l.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
        },
      };
    },
    652171: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        });
      var l = t(200651);
      t(192379);
      var a = t(481060),
        i = t(239091),
        r = t(984933),
        u = t(904483),
        d = t(522762),
        o = t(466330),
        c = t(981631),
        s = t(388032);
      function p(e) {
        let { guild: n, onSelect: t } = e,
          p = r.ZP.getDefaultChannel(n.id, !0, c.Plq.CREATE_INSTANT_INVITE),
          h = (0, d.Z)(n.id),
          I = (0, u.Z)(n),
          _ = (0, o.Z)({
            guild: n,
            source: c.t4x.GUILD_CONTEXT_MENU,
            channel: p,
          });
        return (0, l.jsxs)(a.Menu, {
          navId: "guild-context",
          "aria-label": s.intl.string(s.t.HpQykZ),
          onClose: i.Zy,
          onSelect: t,
          children: [
            (0, l.jsx)(a.MenuGroup, { children: h }),
            (0, l.jsxs)(a.MenuGroup, { children: [I, _] }),
          ],
        });
      }
    },
    904483: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        r = t(496675),
        u = t(981631),
        d = t(647086),
        o = t(388032);
      function c(e) {
        let n = (0, a.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, e));
        return __OVERLAY__
          ? null
          : e.id === d._
            ? (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(i.MenuItem, {
                  id: "create-category",
                  label: o.intl.string(o.t["ISN+ND"]),
                  action: () =>
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("1812")
                        .then(t.bind(t, 477782));
                      return (n) => (0, l.jsx)(e, { ...n });
                    }),
                }),
              })
            : n
              ? [
                  (0, l.jsx)(
                    i.MenuItem,
                    {
                      id: "create-channel",
                      label: o.intl.string(o.t["fUYU+v"]),
                      action: () =>
                        (0, i.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            t.e("7590"),
                            t.e("45094"),
                            t.e("74100"),
                          ]).then(t.bind(t, 218613));
                          return (t) =>
                            (0, l.jsx)(n, {
                              ...t,
                              channelType: u.d4z.GUILD_TEXT,
                              guildId: e.id,
                            });
                        }),
                    },
                    "create-channel",
                  ),
                  (0, l.jsx)(
                    i.MenuItem,
                    {
                      id: "create-category",
                      label: o.intl.string(o.t["ISN+ND"]),
                      action: () =>
                        (0, i.openModalLazy)(async () => {
                          let { default: n } = await Promise.all([
                            t.e("7590"),
                            t.e("45094"),
                            t.e("74100"),
                          ]).then(t.bind(t, 218613));
                          return (t) =>
                            (0, l.jsx)(n, {
                              ...t,
                              channelType: u.d4z.GUILD_CATEGORY,
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
    522762: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        r = t(5036),
        u = t(9156),
        d = t(388032);
      function o(e) {
        let n = (0, a.e7)([u.ZP], () => u.ZP.isGuildCollapsed(e), [e]);
        return (0, l.jsx)(i.MenuCheckboxItem, {
          id: "hide-muted-channels",
          label: d.intl.string(d.t.UwOLJC),
          action: () => r.Z.toggleCollapseGuild(e),
          checked: n,
        });
      }
    },
    466330: function (e, n, t) {
      t.d(n, {
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
        d = t(496675),
        o = t(981631),
        c = t(388032);
      function s(e) {
        let { source: n, guild: t, channel: l, stageInstance: i } = e,
          c = (0, a.e7)([u.ZP], () =>
            u.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          ),
          s = (0, a.e7)([d.Z], () => (0, r.b)(d.Z, t, l, i)),
          I = p(n, t, s && null != l ? l : c),
          _ = h(n);
        return null == l && n === o.t4x.GUILD_CONTEXT_MENU
          ? null
          : s || null != c
            ? I
            : _;
      }
      let p = (e, n, a) =>
          (0, l.jsx)(i.MenuItem, {
            id: "invite-people",
            label: c.intl.string(c.t.BN75l5),
            color: "brand",
            icon: e === o.t4x.GUILD_HEADER ? i.GroupPlusIcon : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: i } = await Promise.all([
                  t.e("7654"),
                  t.e("86004"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, l.jsx)(i, { ...t, guild: n, channel: a, source: e });
              }),
          }),
        h = (e) =>
          (0, l.jsx)(i.MenuItem, {
            id: "invite-people",
            label: c.intl.string(c.t.BN75l5),
            color: "brand",
            icon: e === o.t4x.GUILD_HEADER ? i.GroupPlusIcon : void 0,
            action: () =>
              (0, i.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, l.jsx)(e, { ...n });
              }),
          });
    },
  },
]);
//# sourceMappingURL=9b7b3c7f34256154d9c4.js.map
