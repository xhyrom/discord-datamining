"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["40283"],
  {
    108843: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(906732);
      function r(e, n) {
        return function (a) {
          let { analyticsLocations: r } = (0, l.ZP)(n);
          return (0, t.jsx)(l.Gt, {
            value: r,
            children: (0, t.jsx)(e, { ...a }),
          });
        };
      }
    },
    428108: function (e, n, a) {
      a.r(n);
      var t = a(735250);
      a(470079);
      var l = a(481060),
        r = a(239091),
        u = a(108843),
        c = a(100527),
        i = a(299206),
        s = a(398048),
        o = a(3689),
        d = a(323597),
        E = a(852245),
        _ = a(367722),
        Z = a(689938);
      n.default = (0, u.Z)(
        function (e) {
          let { channel: n, guild: a, onSelect: u } = e,
            c = (0, E.Z)(n),
            N = (0, _.Z)(n, a),
            M = (0, s.Z)(n, a),
            I = (0, o.Z)(n, a),
            A = (0, d.Z)(n),
            C = (0, i.Z)({ id: n.id, label: Z.Z.Messages.COPY_ID_CHANNEL });
          return (0, t.jsxs)(l.Menu, {
            navId: "channel-context",
            onClose: r.Zy,
            "aria-label": Z.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: u,
            children: [
              (0, t.jsx)(l.MenuGroup, { children: c }),
              (0, t.jsxs)(l.MenuGroup, { children: [N, M, I] }),
              (0, t.jsx)(l.MenuGroup, { children: A }),
              (0, t.jsx)(l.MenuGroup, { children: C }),
            ],
          });
        },
        [c.Z.CONTEXT_MENU, c.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
      );
    },
    398048: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        r = a(481060),
        u = a(496675),
        c = a(981631),
        i = a(689938);
      function s(e, n) {
        let s = (0, l.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
        return __OVERLAY__ || !s
          ? null
          : (0, t.jsx)(r.MenuItem, {
              id: "clone-channel",
              label: i.Z.Messages.CLONE_CHANNEL,
              action: () =>
                (0, r.openModalLazy)(async () => {
                  let { default: l } = await Promise.all([
                    a.e("7590"),
                    a.e("45094"),
                    a.e("5769"),
                  ]).then(a.bind(a, 218613));
                  return (a) =>
                    (0, t.jsx)(l, {
                      ...a,
                      channelType: e.type,
                      guildId: n.id,
                      categoryId: e.parent_id,
                      cloneChannelId: e.id,
                    });
                }),
            });
      }
    },
    3689: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        r = a(481060),
        u = a(496675),
        c = a(981631),
        i = a(689938);
      function s(e, n) {
        let s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          o = (0, l.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
        if (__OVERLAY__ || !o) return null;
        let d = () => {
          (0, r.openModalLazy)(async () => {
            let { default: n } = await Promise.all([
              a.e("7590"),
              a.e("45094"),
              a.e("5769"),
            ]).then(a.bind(a, 218613));
            return (a) =>
              (0, t.jsx)(n, {
                ...a,
                channelType: s,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (s) {
          case c.d4z.GUILD_TEXT:
            return (0, t.jsx)(r.MenuItem, {
              id: "create-text-channel",
              label: i.Z.Messages.CREATE_TEXT_CHANNEL,
              action: d,
            });
          case c.d4z.GUILD_VOICE:
            return (0, t.jsx)(r.MenuItem, {
              id: "create-voice-channel",
              label: i.Z.Messages.CREATE_VOICE_CHANNEL,
              action: d,
            });
          default:
            return null;
        }
      }
    },
    852245: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        r = a(481060),
        u = a(787014),
        c = a(496675),
        i = a(981631),
        s = a(689938);
      function o(e) {
        let {
          canManageChannels: n,
          canManageRoles: a,
          canManageWebhooks: o,
          canAccessChannel: d,
        } = (0, l.cj)(
          [c.Z],
          () => ({
            canManageChannels: c.Z.can(i.Plq.MANAGE_CHANNELS, e),
            canManageRoles: c.Z.can(i.Plq.MANAGE_ROLES, e),
            canManageWebhooks: c.Z.can(i.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: c.Z.can(e.accessPermissions, e),
          }),
          [e],
        );
        return !__OVERLAY__ && d && (n || a || o)
          ? (0, t.jsx)(r.MenuItem, {
              id: "edit-channel",
              label:
                e.type === i.d4z.GUILD_CATEGORY
                  ? s.Z.Messages.EDIT_CATEGORY
                  : s.Z.Messages.EDIT_CHANNEL,
              action: () => u.ZP.open(e.id),
            })
          : null;
      }
    },
    367722: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = a(466330),
        l = a(981631);
      function r(e, n, a) {
        return (0, t.Z)({
          guild: n,
          channel: e,
          stageInstance: a,
          source: l.t4x.CONTEXT_MENU,
        });
      }
    },
    466330: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = a(735250);
      a(470079);
      var l = a(442837),
        r = a(481060),
        u = a(159300),
        c = a(984933),
        i = a(496675),
        s = a(981631),
        o = a(689938);
      function d(e) {
        let { source: n, guild: a, channel: t, stageInstance: r } = e,
          o = (0, l.e7)([c.ZP], () =>
            c.ZP.getDefaultChannel(a.id, !0, s.Plq.CREATE_INSTANT_INVITE),
          ),
          d = (0, l.e7)([i.Z], () => (0, u.b)(i.Z, a, t, r)),
          Z = E(n, a, d && null != t ? t : o),
          N = _(n);
        return null == t && n === s.t4x.GUILD_CONTEXT_MENU
          ? null
          : d || null != o
            ? Z
            : N;
      }
      let E = (e, n, l) =>
          (0, t.jsx)(r.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? r.GroupPlusIcon : void 0,
            action: () =>
              (0, r.openModalLazy)(async () => {
                let { default: r } = await Promise.all([
                  a.e("7654"),
                  a.e("85683"),
                ]).then(a.bind(a, 560114));
                return (a) =>
                  (0, t.jsx)(r, { ...a, guild: n, channel: l, source: e });
              }),
          }),
        _ = (e) =>
          (0, t.jsx)(r.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? r.GroupPlusIcon : void 0,
            action: () =>
              (0, r.openModalLazy)(async () => {
                let { default: e } = await a.e("88358").then(a.bind(a, 598402));
                return (n) => (0, t.jsx)(e, { ...n });
              }),
          });
    },
  },
]);
//# sourceMappingURL=b3db604f42183977d339.js.map
