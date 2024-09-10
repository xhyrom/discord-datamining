"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24783"],
  {
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(906732);
      function l(e, n) {
        return function (t) {
          let { analyticsLocations: l } = (0, i.ZP)(n);
          return (0, a.jsx)(i.Gt, {
            value: l,
            children: (0, a.jsx)(e, { ...t }),
          });
        };
      }
    },
    207035: function (e, n, t) {
      t.d(n, {
        P: function () {
          return i;
        },
      });
      let a = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        return a.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    439635: function (e, n, t) {
      t.r(n);
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(239091),
        u = t(108843),
        o = t(100527),
        r = t(299206),
        s = t(423589),
        c = t(398048),
        d = t(315732),
        _ = t(3689),
        E = t(323597),
        N = t(852245),
        Z = t(367722),
        p = t(776568),
        M = t(218035),
        C = t(775666),
        I = t(593589),
        T = t(442754),
        f = t(981631),
        h = t(689938);
      n.default = (0, u.Z)(
        function (e) {
          let { channel: n, guild: t, includeTopic: u = !1, onSelect: o } = e,
            A = (0, T.Z)(n),
            P = (0, p.ZP)(n),
            g = (0, M.Z)(n),
            O = (0, d.Z)(n),
            x = (0, N.Z)(n),
            L = (0, Z.Z)(n, t),
            j = (0, c.Z)(n, t),
            b = (0, _.Z)(n, t, f.d4z.GUILD_TEXT),
            v = (0, _.Z)(n, t, f.d4z.GUILD_VOICE),
            G = (0, E.Z)(n),
            m = (0, r.Z)({ id: n.id, label: h.Z.Messages.COPY_ID_CHANNEL }),
            H = (0, I.Z)(n, "title_context_menu"),
            y = (0, s.Mn)("ChannelTitleContextMenu"),
            U = (0, C.ZP)(n);
          return (0, a.jsxs)(i.Menu, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": h.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
            onSelect: o,
            children: [
              (0, a.jsx)(i.MenuGroup, { children: A }),
              (0, a.jsx)(i.MenuGroup, { children: P }),
              (0, a.jsxs)(i.MenuGroup, { children: [u ? O : y ? U : g, x] }),
              (0, a.jsxs)(i.MenuGroup, { children: [L, j, b, v] }),
              (0, a.jsx)(i.MenuGroup, { children: H }),
              (0, a.jsx)(i.MenuGroup, { children: G }),
              (0, a.jsx)(i.MenuGroup, { children: m }),
            ],
          });
        },
        [o.Z.CONTEXT_MENU, o.Z.CHANNEL_TITLE_MENU],
      );
    },
    398048: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(496675),
        o = t(981631),
        r = t(689938);
      function s(e, n) {
        let s = (0, i.e7)([u.Z], () => u.Z.can(o.Plq.MANAGE_CHANNELS, e), [e]);
        return __OVERLAY__ || !s
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "clone-channel",
              label: r.Z.Messages.CLONE_CHANNEL,
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: i } = await Promise.all([
                    t.e("7590"),
                    t.e("45094"),
                    t.e("5769"),
                  ]).then(t.bind(t, 218613));
                  return (t) =>
                    (0, a.jsx)(i, {
                      ...t,
                      channelType: e.type,
                      guildId: n.id,
                      categoryId: e.parent_id,
                      cloneChannelId: e.id,
                    });
                }),
            });
      }
    },
    315732: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(572004),
        u = t(689938);
      function o(e) {
        return l.wS
          ? (0, a.jsx)(i.MenuItem, {
              id: "copy-channel-topic",
              label: u.Z.Messages.COPY_CHANNEL_TOPIC,
              action: () => (0, l.JG)(e.topic),
            })
          : null;
      }
    },
    3689: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(496675),
        o = t(981631),
        r = t(689938);
      function s(e, n) {
        let s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          c = (0, i.e7)([u.Z], () => u.Z.can(o.Plq.MANAGE_CHANNELS, e), [e]);
        if (__OVERLAY__ || !c) return null;
        let d = () => {
          (0, l.openModalLazy)(async () => {
            let { default: n } = await Promise.all([
              t.e("7590"),
              t.e("45094"),
              t.e("5769"),
            ]).then(t.bind(t, 218613));
            return (t) =>
              (0, a.jsx)(n, {
                ...t,
                channelType: s,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (s) {
          case o.d4z.GUILD_TEXT:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: r.Z.Messages.CREATE_TEXT_CHANNEL,
              action: d,
            });
          case o.d4z.GUILD_VOICE:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-voice-channel",
              label: r.Z.Messages.CREATE_VOICE_CHANNEL,
              action: d,
            });
          default:
            return null;
        }
      }
    },
    852245: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(787014),
        o = t(496675),
        r = t(981631),
        s = t(689938);
      function c(e) {
        let {
          canManageChannels: n,
          canManageRoles: t,
          canManageWebhooks: c,
          canAccessChannel: d,
        } = (0, i.cj)(
          [o.Z],
          () => ({
            canManageChannels: o.Z.can(r.Plq.MANAGE_CHANNELS, e),
            canManageRoles: o.Z.can(r.Plq.MANAGE_ROLES, e),
            canManageWebhooks: o.Z.can(r.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: o.Z.can(e.accessPermissions, e),
          }),
          [e],
        );
        return !__OVERLAY__ && d && (n || t || c)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                e.type === r.d4z.GUILD_CATEGORY
                  ? s.Z.Messages.EDIT_CATEGORY
                  : s.Z.Messages.EDIT_CHANNEL,
              action: () => u.ZP.open(e.id),
            })
          : null;
      }
    },
    367722: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(466330),
        i = t(981631);
      function l(e, n, t) {
        return (0, a.Z)({
          guild: n,
          channel: e,
          stageInstance: t,
          source: i.t4x.CONTEXT_MENU,
        });
      }
    },
    593589: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(481060),
        u = t(372900),
        o = t(238246),
        r = t(788983),
        s = t(207035),
        c = t(823748),
        d = t(981631),
        _ = t(405601);
      function E(e) {
        let { windowKey: n, channel: t } = e;
        return (0, a.jsx)(o.Z, {
          withTitleBar: !0,
          windowKey: n,
          title: t.name,
          channelId: t.id,
          contentClassName: _.popoutContent,
          children: (0, a.jsx)(u.Z.Provider, {
            value: t.guild_id,
            children: (0, a.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function N(e, n) {
        let t = (0, s.P)(n),
          u = i.useCallback(() => {
            r.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, a.jsx)(E, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, a.jsx)(l.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => u(),
            })
          : null;
      }
    },
    442754: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(362658),
        o = t(152376),
        r = t(398758),
        s = t(9156),
        c = t(981631),
        d = t(689938);
      function _(e) {
        let { isFavoritesPerk: n } = (0, u.z)("useChannelOptInItems"),
          t = (0, r.DM)(e.guild_id),
          _ = (0, i.e7)([s.ZP], () => s.ZP.isChannelOptedIn(e.guild_id, e.id)),
          E = (0, i.e7)(
            [s.ZP],
            () =>
              null != e.parent_id &&
              s.ZP.isChannelOptedIn(e.guild_id, e.parent_id),
          ),
          N = (0, i.e7)([s.ZP], () => s.ZP.isFavorite(e.guild_id, e.id)),
          Z = () => {
            (0, o.XQ)(e.guild_id, e.id, !_, { section: c.jXE.CONTEXT_MENU });
          },
          p = () => {
            null != e.parent_id &&
              (0, o.XQ)(e.guild_id, e.parent_id, !1, {
                section: c.jXE.CONTEXT_MENU,
              });
          };
        if (!t || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(l.MenuItem, {
            id: "opt-into-category",
            label: _
              ? d.Z.Messages.CHANNEL_OPT_OUT
              : d.Z.Messages.CHANNEL_OPT_IN,
            action: () => Z(),
          });
        let M = N ? d.Z.Messages.REMOVE_FAVORITE : d.Z.Messages.ADD_FAVORITE,
          C = N ? d.Z.Messages.UNPIN_CHANNEL : d.Z.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.MenuItem, {
              id: "opt-in-favorite-channel",
              label: n ? C : M,
              action: () => {
                (0, o.dM)(e.guild_id, e.id, !N, {
                  section: c.jXE.CONTEXT_MENU,
                });
              },
            }),
            E
              ? (0, a.jsx)(l.MenuItem, {
                  id: "opt-out-category",
                  label: d.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => p(),
                })
              : (0, a.jsx)(l.MenuItem, {
                  id: "opt-into-channel",
                  label: _
                    ? d.Z.Messages.CHANNEL_OPT_OUT
                    : d.Z.Messages.CHANNEL_OPT_IN,
                  action: () => Z(),
                }),
          ],
        });
      }
    },
    466330: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(159300),
        o = t(984933),
        r = t(496675),
        s = t(981631),
        c = t(689938);
      function d(e) {
        let { source: n, guild: t, channel: a, stageInstance: l } = e,
          c = (0, i.e7)([o.ZP], () =>
            o.ZP.getDefaultChannel(t.id, !0, s.Plq.CREATE_INSTANT_INVITE),
          ),
          d = (0, i.e7)([r.Z], () => (0, u.b)(r.Z, t, a, l)),
          N = _(n, t, d && null != a ? a : c),
          Z = E(n);
        return null == a && n === s.t4x.GUILD_CONTEXT_MENU
          ? null
          : d || null != c
            ? N
            : Z;
      }
      let _ = (e, n, i) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                  t.e("7654"),
                  t.e("85683"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, a.jsx)(l, { ...t, guild: n, channel: i, source: e });
              }),
          }),
        E = (e) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: c.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === s.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, a.jsx)(e, { ...n });
              }),
          });
    },
    405601: function (e, n, t) {
      e.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=9b1aeb362ad8f6b271b4.js.map
