"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8965"],
  {
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(906732);
      function s(e, n) {
        return function (t) {
          let { analyticsLocations: s } = (0, i.ZP)(n);
          return (0, a.jsx)(i.Gt, {
            value: s,
            children: (0, a.jsx)(e, { ...t }),
          });
        };
      }
    },
    139035: function (e, n, t) {
      t.r(n);
      var a = t(735250);
      t(470079);
      var i = t(481060),
        s = t(239091),
        r = t(108843),
        l = t(100527),
        u = t(299206),
        d = t(916069),
        o = t(697229),
        c = t(212205),
        _ = t(423589),
        Z = t(411567),
        E = t(672824),
        M = t(3689),
        C = t(323597),
        A = t(852245),
        N = t(461535),
        g = t(776568),
        h = t(218035),
        f = t(775666),
        I = t(442754),
        O = t(623483),
        T = t(689938);
      function p(e) {
        let { channel: n, onSelect: t } = e,
          r = (0, N.Z)(n),
          l = (0, g.ZP)(n),
          d = (0, h.Z)(n),
          M = (0, E.Z)(n),
          C = (0, Z.Z)(n),
          A = (0, c.Z)(n),
          I = (0, o.Z)(n),
          p = (0, O.Z)(n),
          L = (0, u.Z)({ id: n.id, label: T.Z.Messages.COPY_ID_CHANNEL }),
          G = (0, _.Mn)("ChannelCategoryFavoritesMenu"),
          x = (0, f.ZP)(n);
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: s.Zy,
          "aria-label": T.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: [
            (0, a.jsxs)(i.MenuGroup, { children: [r, I, A] }),
            (0, a.jsxs)(i.MenuGroup, { children: [l, G ? x : d] }),
            (0, a.jsxs)(i.MenuGroup, { children: [M, C] }),
            (0, a.jsx)(i.MenuGroup, { children: p }),
            (0, a.jsx)(i.MenuGroup, { children: L }),
          ],
        });
      }
      function L(e) {
        let { channel: n, guild: t, onSelect: r } = e,
          l = (0, N.Z)(n),
          d = (0, g.ZP)(n),
          o = (0, h.Z)(n),
          O = (0, E.Z)(n),
          p = (0, Z.Z)(n),
          L = (0, A.Z)(n),
          G = (0, c.Z)(n),
          x = (0, M.Z)(n, t),
          j = (0, C.Z)(n),
          P = (0, u.Z)({ id: n.id, label: T.Z.Messages.COPY_ID_CHANNEL }),
          R = (0, I.Z)(n),
          v = (0, _.Mn)("ChannelCategoryNormalMenu"),
          m = (0, f.ZP)(n);
        return (0, a.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: s.Zy,
          "aria-label": T.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: r,
          children: [
            (0, a.jsx)(i.MenuGroup, { children: l }, "mark-as-read"),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [R, O, p] },
              "channel-actions",
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [d, v ? m : o] },
              "notifications",
            ),
            (0, a.jsxs)(
              i.MenuGroup,
              { children: [L, G, x, j] },
              "admin-actions",
            ),
            (0, a.jsx)(i.MenuGroup, { children: P }, "developer-actions"),
          ],
        });
      }
      n.default = (0, r.Z)(
        function (e) {
          return (0, d.Z)() ? (0, a.jsx)(p, { ...e }) : (0, a.jsx)(L, { ...e });
        },
        [l.Z.CONTEXT_MENU, l.Z.CHANNEL_CATEGORY_MENU],
      );
    },
    411567: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        r = t(211739),
        l = t(680089),
        u = t(592125),
        d = t(981631),
        o = t(689938);
      function c(e) {
        return (0, i.e7)([l.Z, u.Z], () => {
          let n = Object.values(
            u.Z.getMutableBasicGuildChannelsForGuild(e.guild_id),
          ).filter((e) => e.type === d.d4z.GUILD_CATEGORY);
          return 0 === n.length || n.every((e) => l.Z.isCollapsed(e.id));
        })
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "collapse-all-categories",
              label: o.Z.Messages.COLLAPSE_ALL_CATEGORIES,
              action: () => (0, r.N5)(e.guild_id),
            });
      }
    },
    672824: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        r = t(211739),
        l = t(680089),
        u = t(689938);
      function d(e) {
        let n = (0, i.e7)([l.Z], () => l.Z.isCollapsed(e.id), [e.id]);
        return (0, a.jsx)(s.MenuCheckboxItem, {
          id: "collapse-category",
          label: u.Z.Messages.COLLAPSE_CATEGORY,
          action: () => (n ? (0, r.mJ)(e.id) : (0, r.c4)(e.id)),
          checked: n,
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
        s = t(481060),
        r = t(496675),
        l = t(981631),
        u = t(689938);
      function d(e, n) {
        let d =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.type,
          o = (0, i.e7)([r.Z], () => r.Z.can(l.Plq.MANAGE_CHANNELS, e), [e]);
        if (__OVERLAY__ || !o) return null;
        let c = () => {
          (0, s.openModalLazy)(async () => {
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
          case l.d4z.GUILD_TEXT:
            return (0, a.jsx)(s.MenuItem, {
              id: "create-text-channel",
              label: u.Z.Messages.CREATE_TEXT_CHANNEL,
              action: c,
            });
          case l.d4z.GUILD_VOICE:
            return (0, a.jsx)(s.MenuItem, {
              id: "create-voice-channel",
              label: u.Z.Messages.CREATE_VOICE_CHANNEL,
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
        s = t(481060),
        r = t(787014),
        l = t(496675),
        u = t(981631),
        d = t(689938);
      function o(e) {
        let {
          canManageChannels: n,
          canManageRoles: t,
          canManageWebhooks: o,
          canAccessChannel: c,
        } = (0, i.cj)(
          [l.Z],
          () => ({
            canManageChannels: l.Z.can(u.Plq.MANAGE_CHANNELS, e),
            canManageRoles: l.Z.can(u.Plq.MANAGE_ROLES, e),
            canManageWebhooks: l.Z.can(u.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: l.Z.can(e.accessPermissions, e),
          }),
          [e],
        );
        return !__OVERLAY__ && c && (n || t || o)
          ? (0, a.jsx)(s.MenuItem, {
              id: "edit-channel",
              label:
                e.type === u.d4z.GUILD_CATEGORY
                  ? d.Z.Messages.EDIT_CATEGORY
                  : d.Z.Messages.EDIT_CHANNEL,
              action: () => r.ZP.open(e.id),
            })
          : null;
      }
    },
    461535: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        r = t(45114),
        l = t(456269),
        u = t(344185),
        d = t(569471),
        o = t(131704),
        c = t(324067),
        _ = t(306680),
        Z = t(981631),
        E = t(689938);
      function M(e) {
        let n = (function (e) {
          let n = (0, l.n2)(e.guild_id, e.id),
            t = (0, i.e7)(
              [_.ZP, c.Z, u.Z, d.Z],
              () => {
                if (e.isForumPost()) return _.ZP.isForumPostUnread(e.id);
                if (e.type !== Z.d4z.GUILD_CATEGORY)
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
                    a = u.Z.getThreadsForGuild(e.guild_id);
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
        return (0, a.jsx)(s.MenuItem, {
          id: "mark-channel-read",
          label: E.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, r.U6)(e);
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
        s = t(481060),
        r = t(362658),
        l = t(152376),
        u = t(398758),
        d = t(9156),
        o = t(981631),
        c = t(689938);
      function _(e) {
        let { isFavoritesPerk: n } = (0, r.z)("useChannelOptInItems"),
          t = (0, u.DM)(e.guild_id),
          _ = (0, i.e7)([d.ZP], () => d.ZP.isChannelOptedIn(e.guild_id, e.id)),
          Z = (0, i.e7)(
            [d.ZP],
            () =>
              null != e.parent_id &&
              d.ZP.isChannelOptedIn(e.guild_id, e.parent_id),
          ),
          E = (0, i.e7)([d.ZP], () => d.ZP.isFavorite(e.guild_id, e.id)),
          M = () => {
            (0, l.XQ)(e.guild_id, e.id, !_, { section: o.jXE.CONTEXT_MENU });
          },
          C = () => {
            null != e.parent_id &&
              (0, l.XQ)(e.guild_id, e.parent_id, !1, {
                section: o.jXE.CONTEXT_MENU,
              });
          };
        if (!t || e.isThread()) return null;
        if (e.isCategory())
          return (0, a.jsx)(s.MenuItem, {
            id: "opt-into-category",
            label: _
              ? c.Z.Messages.CHANNEL_OPT_OUT
              : c.Z.Messages.CHANNEL_OPT_IN,
            action: () => M(),
          });
        let A = E ? c.Z.Messages.REMOVE_FAVORITE : c.Z.Messages.ADD_FAVORITE,
          N = E ? c.Z.Messages.UNPIN_CHANNEL : c.Z.Messages.PIN_CHANNEL_TO_TOP;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.MenuItem, {
              id: "opt-in-favorite-channel",
              label: n ? N : A,
              action: () => {
                (0, l.dM)(e.guild_id, e.id, !E, {
                  section: o.jXE.CONTEXT_MENU,
                });
              },
            }),
            Z
              ? (0, a.jsx)(s.MenuItem, {
                  id: "opt-out-category",
                  label: c.Z.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                  action: () => C(),
                })
              : (0, a.jsx)(s.MenuItem, {
                  id: "opt-into-channel",
                  label: _
                    ? c.Z.Messages.CHANNEL_OPT_OUT
                    : c.Z.Messages.CHANNEL_OPT_IN,
                  action: () => M(),
                }),
          ],
        });
      }
    },
    623483: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        s = t(117984),
        r = t(689938);
      function l(e) {
        return (0, a.jsx)(i.MenuItem, {
          id: "delete-channel",
          label: r.Z.Messages.REMOVE_CATEGORY,
          subtext: r.Z.Messages.DELETE_CATEGORY_SUBTEXT,
          color: "danger",
          action: () =>
            (0, i.openModalLazy)(async () => {
              let { default: n } = await t.e("37720").then(t.bind(t, 357632));
              return (t) =>
                (0, a.jsx)(n, {
                  ...t,
                  onConfirm: () => {
                    t.onClose(), (0, s.xh)(e.id);
                  },
                  channel: e,
                });
            }),
        });
      }
    },
    697229: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        r = t(914010),
        l = t(362658),
        u = t(981631),
        d = t(689938);
      function o(e) {
        let n = (0, i.e7)([r.Z], () => r.Z.getGuildId()),
          o = e.type === u.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, l.z)("useCategoryAddChannelItem");
        return !__OVERLAY__ && n === u.I_8 && c && o
          ? (0, a.jsx)(s.MenuItem, {
              id: "add-channel-to-category",
              icon: s.CirclePlusIcon,
              color: "brand",
              label: d.Z.Messages.FAVORITES_ADD_A_CHANNEL,
              action: function () {
                (0, s.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("95257")
                    .then(t.bind(t, 178125));
                  return (t) => (0, a.jsx)(n, { ...t, parentId: e.id });
                });
              },
            })
          : null;
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
        s = t(481060),
        r = t(914010),
        l = t(362658),
        u = t(981631),
        d = t(689938);
      function o(e) {
        let n = (0, i.e7)([r.Z], () => r.Z.getGuildId()),
          o = e.type === u.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, l.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || n !== u.I_8
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && o
                  ? d.Z.Messages.FAVORITES_RENAME_CATEGORY
                  : d.Z.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, s.openModalLazy)(async () => {
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
  },
]);
//# sourceMappingURL=1b1a1541b380da88113d.js.map
