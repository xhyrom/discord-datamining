"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18320"],
  {
    398048: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(496675),
        r = t(981631),
        s = t(689938);
      function d(e, n) {
        let d = (0, i.e7)([u.Z], () => u.Z.can(r.Plq.MANAGE_CHANNELS, e), [e]);
        return __OVERLAY__ || !d
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "clone-channel",
              label: s.Z.Messages.CLONE_CHANNEL,
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
    3689: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(496675),
        r = t(981631),
        s = t(689938);
      function d(e, n) {
        let d =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          o = (0, i.e7)([u.Z], () => u.Z.can(r.Plq.MANAGE_CHANNELS, e), [e]);
        if (__OVERLAY__ || !o) return null;
        let c = () => {
          (0, l.openModalLazy)(async () => {
            let { default: n } = await Promise.all([
              t.e("7590"),
              t.e("45094"),
              t.e("5769"),
            ]).then(t.bind(t, 218613));
            return (t) =>
              (0, a.jsx)(n, {
                ...t,
                channelType: d,
                guildId: e.guild_id,
                categoryId: e.parent_id,
              });
          });
        };
        switch (d) {
          case r.d4z.GUILD_TEXT:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: s.Z.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case r.d4z.GUILD_VOICE:
            return (0, a.jsx)(l.MenuItem, {
              id: "create-voice-channel",
              label: s.Z.Messages.CREATE_VOICE_CHANNEL,
              action: c,
            });
          default:
            return null;
        }
      }
    },
    852245: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(787014),
        r = t(496675),
        s = t(981631),
        d = t(689938);
      function o(e) {
        let {
          canManageChannels: n,
          canManageRoles: t,
          canManageWebhooks: o,
          canAccessChannel: c,
        } = (0, i.cj)(
          [r.Z],
          () => ({
            canManageChannels: r.Z.can(s.Plq.MANAGE_CHANNELS, e),
            canManageRoles: r.Z.can(s.Plq.MANAGE_ROLES, e),
            canManageWebhooks: r.Z.can(s.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: r.Z.can(e.accessPermissions, e),
          }),
          [e],
        );
        return !__OVERLAY__ && c && (n || t || o)
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                e.type === s.d4z.GUILD_CATEGORY
                  ? d.Z.Messages.EDIT_CATEGORY
                  : d.Z.Messages.EDIT_CHANNEL,
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
    461535: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(45114),
        r = t(456269),
        s = t(344185),
        d = t(569471),
        o = t(131704),
        c = t(324067),
        _ = t(306680),
        E = t(981631),
        M = t(689938);
      function I(e) {
        let n = (function (e) {
          let n = (0, r.n2)(e.guild_id, e.id),
            t = (0, i.e7)(
              [_.ZP, c.Z, s.Z, d.Z],
              () => {
                if (e.isForumPost()) return _.ZP.isForumPostUnread(e.id);
                if (e.type !== E.d4z.GUILD_CATEGORY)
                  return _.ZP.hasUnreadOrMentions(e.id);
                {
                  let n = c.Z.getCategories(e.getGuildId());
                  if (null == n[e.id]) return !1;
                  if (
                    n[e.id].some((e) => {
                      let { channel: n } = e;
                      return (
                        (0, o.Em)(n.type) && _.ZP.hasUnreadOrMentions(n.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(n[e.id].map((e) => e.channel.id)),
                    a = s.Z.getThreadsForGuild(e.guild_id);
                  for (let e in a)
                    if (t.has(e)) {
                      for (let n in a[e])
                        if (
                          d.Z.hasJoined(n) &&
                          !d.Z.isMuted(n) &&
                          _.ZP.hasUnreadOrMentions(n)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [e],
            );
          return e.isForumLikeChannel() ? n > 0 : t;
        })(e);
        return (0, a.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: M.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, u.U6)(e);
          },
          disabled: !n,
        });
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
        r = t(152376),
        s = t(398758),
        d = t(9156),
        o = t(981631),
        c = t(689938);
      function _(e) {
        let { isFavoritesPerk: n } = (0, u.z)("useChannelOptInItems"),
          t = (0, s.DM)(e.guild_id),
          _ = (0, i.e7)([d.ZP], () => d.ZP.isChannelOptedIn(e.guild_id, e.id)),
          E = (0, i.e7)(
            [d.ZP],
            () =>
              null != e.parent_id &&
              d.ZP.isChannelOptedIn(e.guild_id, e.parent_id),
          ),
          M = (0, i.e7)([d.ZP], () => d.ZP.isFavorite(e.guild_id, e.id)),
          I = () => {
            (0, r.XQ)(e.guild_id, e.id, !_, { section: o.jXE.CONTEXT_MENU });
          },
          Z = () => {
            null != e.parent_id &&
              (0, r.XQ)(e.guild_id, e.parent_id, !1, {
                section: o.jXE.CONTEXT_MENU,
              });
          };
        if (!t || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(l.MenuItem, {
            id: "opt-into-category",
            label: _
              ? c.Z.Messages.CHANNEL_OPT_OUT
              : c.Z.Messages.CHANNEL_OPT_IN,
            action: () => I(),
          });
        let f = M ? c.Z.Messages.REMOVE_FAVORITE : c.Z.Messages.ADD_FAVORITE,
          A = M ? c.Z.Messages.UNPIN_CHANNEL : c.Z.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.MenuItem, {
              id: "opt-in-favorite-channel",
              label: n ? A : f,
              action: () => {
                (0, r.dM)(e.guild_id, e.id, !M, {
                  section: o.jXE.CONTEXT_MENU,
                });
              },
            }),
            E
              ? (0, a.jsx)(l.MenuItem, {
                  id: "opt-out-category",
                  label: c.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => Z(),
                })
              : (0, a.jsx)(l.MenuItem, {
                  id: "opt-into-channel",
                  label: _
                    ? c.Z.Messages.CHANNEL_OPT_OUT
                    : c.Z.Messages.CHANNEL_OPT_IN,
                  action: () => I(),
                }),
          ],
        });
      }
    },
    895563: function (e, n, t) {
      t.d(n, {
        P: function () {
          return f;
        },
        l: function () {
          return Z;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(392711),
        l = t.n(i),
        u = t(442837),
        r = t(481060),
        s = t(984933),
        d = t(853856),
        o = t(117984),
        c = t(593214),
        _ = t(362658),
        E = t(981631),
        M = t(689938);
      function I(e, n) {
        return e.type === E.d4z.GROUP_DM
          ? n
            ? M.Z.Messages.UNFAVORITE_GDM
            : M.Z.Messages.FAVORITE_GDM
          : e.type === E.d4z.DM
            ? n
              ? M.Z.Messages.UNFAVORITE_DM
              : M.Z.Messages.FAVORITE_DM
            : n
              ? M.Z.Messages.UNFAVORITE_CHANNEL
              : M.Z.Messages.FAVORITE_CHANNEL;
      }
      function Z(e) {
        let n = (0, u.e7)([s.ZP], () => s.ZP.getChannels(E.I_8))[
            E.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, _.z)("58e21a_1"),
          { notifyFavoriteAdded: i } = (0, c.up)();
        if (!(0, c.li)(e)) return null;
        let [[d], M] = l().partition(n, (e) => "null" === e.channel.id);
        function Z(n) {
          i(), (0, o.kj)(e.id, n);
        }
        return 0 === M.length
          ? (0, a.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: I(e, !1),
              action: () => Z(null),
            })
          : (0, a.jsxs)(r.MenuItem, {
              id: "favorite-channel",
              label: I(e, !1),
              action: () => Z(null),
              children: [
                t &&
                  (0, a.jsx)(r.MenuGroup, {
                    children: (0, a.jsx)(
                      r.MenuItem,
                      {
                        id: "favorite-".concat(d.channel.id),
                        label: d.channel.name,
                        action: () =>
                          Z("null" === d.channel.id ? null : d.channel.id),
                      },
                      d.channel.id,
                    ),
                  }),
                (0, a.jsx)(r.MenuGroup, {
                  children: M.map((e) =>
                    (0, a.jsx)(
                      r.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => Z(e.channel.id),
                      },
                      e.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function f(e) {
        let n = (0, u.e7)([d.Z], () => d.Z.isFavorite(e.id));
        return __OVERLAY__ || !n
          ? null
          : (0, a.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: I(e, !0),
              color: "danger",
              action: () =>
                e.type === E.d4z.GUILD_CATEGORY
                  ? (0, r.openModalLazy)(async () => {
                      let { default: n } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, a.jsx)(n, {
                          ...t,
                          onConfirm: () => {
                            t.onClose(), (0, o.oC)(e.id);
                          },
                          channel: e,
                        });
                    })
                  : (0, o.oC)(e.id),
            });
      }
    },
    212205: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(914010),
        r = t(362658),
        s = t(981631),
        d = t(689938);
      function o(e) {
        let n = (0, i.e7)([u.Z], () => u.Z.getGuildId()),
          o = e.type === s.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, r.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || n !== s.I_8
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && o
                  ? d.Z.Messages.FAVORITES_RENAME_CATEGORY
                  : d.Z.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("46161")
                    .then(t.bind(t, 238716));
                  return (t) =>
                    (0, a.jsx)(n, {
                      ...t,
                      channelId: e.id,
                      heading:
                        c && o
                          ? d.Z.Messages.FAVORITES_RENAME_CATEGORY
                          : d.Z.Messages.CHANGE_NICKNAME,
                      formTitle:
                        c && o
                          ? d.Z.Messages.CATEGORY_NAME
                          : d.Z.Messages.NICKNAME,
                      allowReset: !(c && o),
                    });
                });
              },
            });
      }
    },
    478035: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(703656),
        r = t(914010),
        s = t(981631),
        d = t(689938);
      function o(e) {
        let n = (0, i.e7)([r.Z], () => r.Z.getGuildId());
        return __OVERLAY__ || n !== s.I_8
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "go-to-original-guild",
              label: d.Z.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
              action: function () {
                (0, u.XU)(e.guild_id, e.id);
              },
            });
      }
    },
    62420: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(653041),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(117984),
        u = t(593214),
        r = t(362658),
        s = t(689938);
      function d(e) {
        let n = (0, u.Mt)(),
          t = (0, u.s4)(e.id),
          d = (0, u.zv)(),
          { isFavoritesPerk: o } = (0, r.z)("useChannelMoveToCategory");
        if (__OVERLAY__ || !n || null == t || !o) return null;
        let [c, _] = (function (e) {
          let n = [],
            t = null;
          for (let a of e) null == a.id ? (t = a) : n.push(a);
          return [t, n];
        })(d.filter((e) => e.id !== (null == t ? void 0 : t.parentId)));
        function E(e) {
          null != t && (0, l.uA)(t.id, e);
        }
        return null == c && 0 === _.length
          ? null
          : (0, a.jsxs)(i.MenuItem, {
              id: "move-to-category",
              label: s.Z.Messages.MOVE_TO,
              children: [
                null != c &&
                  (0, a.jsx)(i.MenuGroup, {
                    children: (0, a.jsx)(i.MenuItem, {
                      id: "favorite-uncategorized",
                      label: c.name,
                      action: () => E(c.id),
                    }),
                  }),
                _.length > 0 &&
                  (0, a.jsx)(i.MenuGroup, {
                    children: _.map((e) => {
                      let { id: n, name: t } = e;
                      return (0, a.jsx)(
                        i.MenuItem,
                        {
                          id: "favorite-".concat(n),
                          label: t,
                          action: () => E(n),
                        },
                        n,
                      );
                    }),
                  }),
              ],
            });
      }
    },
    466330: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        u = t(159300),
        r = t(984933),
        s = t(496675),
        d = t(981631),
        o = t(689938);
      function c(e) {
        let { source: n, guild: t, channel: a, stageInstance: l } = e,
          o = (0, i.e7)([r.ZP], () =>
            r.ZP.getDefaultChannel(t.id, !0, d.Plq.CREATE_INSTANT_INVITE),
          ),
          c = (0, i.e7)([s.Z], () => (0, u.b)(s.Z, t, a, l)),
          M = _(n, t, c && null != a ? a : o),
          I = E(n);
        return null == a && n === d.t4x.GUILD_CONTEXT_MENU
          ? null
          : c || null != o
            ? M
            : I;
      }
      let _ = (e, n, i) =>
          (0, a.jsx)(l.MenuItem, {
            id: "invite-people",
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === d.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
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
            label: o.Z.Messages.INVITE_PEOPLE,
            color: "brand",
            icon: e === d.t4x.GUILD_HEADER ? l.GroupPlusIcon : void 0,
            action: () =>
              (0, l.openModalLazy)(async () => {
                let { default: e } = await t.e("88358").then(t.bind(t, 598402));
                return (n) => (0, a.jsx)(e, { ...n });
              }),
          });
    },
  },
]);
//# sourceMappingURL=ac934feb0cdfccd146f8.js.map
