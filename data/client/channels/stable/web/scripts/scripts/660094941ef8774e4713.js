"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8965"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(906732);
      function l(n, e) {
        return function (t) {
          let { analyticsLocations: l } = (0, r.ZP)(e);
          return (0, i.jsx)(r.Gt, {
            value: l,
            children: (0, i.jsx)(n, { ...t }),
          });
        };
      }
    },
    139035: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(239091),
        a = t(108843),
        u = t(100527),
        d = t(299206),
        s = t(916069),
        o = t(697229),
        c = t(212205),
        Z = t(423589),
        g = t(411567),
        h = t(672824),
        f = t(3689),
        M = t(323597),
        _ = t(852245),
        p = t(461535),
        C = t(776568),
        x = t(218035),
        I = t(775666),
        j = t(442754),
        m = t(623483),
        E = t(388032);
      function G(n) {
        let { channel: e, onSelect: t } = n,
          a = (0, p.Z)(e),
          u = (0, C.ZP)(e),
          s = (0, x.Z)(e),
          f = (0, h.Z)(e),
          M = (0, g.Z)(e),
          _ = (0, c.Z)(e),
          j = (0, o.Z)(e),
          G = (0, m.Z)(e),
          v = (0, d.Z)({ id: e.id, label: E.intl.string(E.t.gFHI3t) }),
          y = (0, Z.Mn)("ChannelCategoryFavoritesMenu"),
          b = (0, I.ZP)(e);
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: l.Zy,
          "aria-label": E.intl.string(E.t.Xm41aW),
          onSelect: t,
          children: [
            (0, i.jsxs)(r.MenuGroup, { children: [a, j, _] }),
            (0, i.jsxs)(r.MenuGroup, { children: [u, y ? b : s] }),
            (0, i.jsxs)(r.MenuGroup, { children: [f, M] }),
            (0, i.jsx)(r.MenuGroup, { children: G }),
            (0, i.jsx)(r.MenuGroup, { children: v }),
          ],
        });
      }
      function v(n) {
        let { channel: e, guild: t, onSelect: a } = n,
          u = (0, p.Z)(e),
          s = (0, C.ZP)(e),
          o = (0, x.Z)(e),
          m = (0, h.Z)(e),
          G = (0, g.Z)(e),
          v = (0, _.Z)(e),
          y = (0, c.Z)(e),
          b = (0, f.Z)(e, t),
          O = (0, M.Z)(e),
          P = (0, d.Z)({ id: e.id, label: E.intl.string(E.t.gFHI3t) }),
          A = (0, j.Z)(e),
          N = (0, Z.Mn)("ChannelCategoryNormalMenu"),
          T = (0, I.ZP)(e);
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: l.Zy,
          "aria-label": E.intl.string(E.t.Xm41aW),
          onSelect: a,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: u }, "mark-as-read"),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [A, m, G] },
              "channel-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [s, N ? T : o] },
              "notifications",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [v, y, b, O] },
              "admin-actions",
            ),
            (0, i.jsx)(r.MenuGroup, { children: P }, "developer-actions"),
          ],
        });
      }
      e.default = (0, a.Z)(
        function (n) {
          return (0, s.Z)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(v, { ...n });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_CATEGORY_MENU],
      );
    },
    411567: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(211739),
        u = t(680089),
        d = t(592125),
        s = t(981631),
        o = t(388032);
      function c(n) {
        return (0, r.e7)([u.Z, d.Z], () => {
          let e = Object.values(
            d.Z.getMutableBasicGuildChannelsForGuild(n.guild_id),
          ).filter((n) => n.type === s.d4z.GUILD_CATEGORY);
          return 0 === e.length || e.every((n) => u.Z.isCollapsed(n.id));
        })
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "collapse-all-categories",
              label: o.intl.string(o.t["9dqzUl"]),
              action: () => (0, a.N5)(n.guild_id),
            });
      }
    },
    672824: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(211739),
        u = t(680089),
        d = t(388032);
      function s(n) {
        let e = (0, r.e7)([u.Z], () => u.Z.isCollapsed(n.id), [n.id]);
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "collapse-category",
          label: d.intl.string(d.t.SvVRsr),
          action: () => (e ? (0, a.mJ)(n.id) : (0, a.c4)(n.id)),
          checked: e,
        });
      }
    },
    3689: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(496675),
        u = t(981631),
        d = t(388032);
      function s(n, e) {
        let s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.type,
          o = (0, r.e7)([a.Z], () => a.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        if (__OVERLAY__ || !o) return null;
        let c = () => {
          (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              t.e("7590"),
              t.e("45094"),
              t.e("74100"),
            ]).then(t.bind(t, 218613));
            return (t) =>
              (0, i.jsx)(e, {
                ...t,
                channelType: s,
                guildId: n.guild_id,
                categoryId: n.parent_id,
              });
          });
        };
        switch (s) {
          case u.d4z.GUILD_TEXT:
            return (0, i.jsx)(l.MenuItem, {
              id: "create-text-channel",
              label: d.intl.string(d.t.HHkTJC),
              action: c,
            });
          case u.d4z.GUILD_VOICE:
            return (0, i.jsx)(l.MenuItem, {
              id: "create-voice-channel",
              label: d.intl.string(d.t.AlbZaG),
              action: c,
            });
          default:
            return null;
        }
      }
    },
    852245: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(787014),
        u = t(685929),
        d = t(496675),
        s = t(981631),
        o = t(388032);
      function c(n) {
        let {
          canManageChannels: e,
          canManageRoles: t,
          canManageWebhooks: c,
          canAccessChannel: Z,
          canUnlinkChannel: g,
        } = (0, r.cj)(
          [d.Z],
          () => ({
            canManageChannels: d.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: d.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: d.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: d.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, u.C)(n, d.Z),
          }),
          [n],
        );
        return !__OVERLAY__ && Z && (e || t || c || g)
          ? (0, i.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                n.type === s.d4z.GUILD_CATEGORY
                  ? o.intl.string(o.t.zdPFs7)
                  : o.intl.string(o.t["3gUsJS"]),
              action: () => a.ZP.open(n.id),
            })
          : null;
      }
    },
    461535: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(45114),
        u = t(456269),
        d = t(344185),
        s = t(569471),
        o = t(131704),
        c = t(324067),
        Z = t(306680),
        g = t(981631),
        h = t(388032);
      function f(n) {
        let e = (function (n) {
          let e = (0, u.n2)(n.guild_id, n.id),
            t = (0, r.e7)(
              [Z.ZP, c.Z, d.Z, s.Z],
              () => {
                if (n.isForumPost()) return Z.ZP.isForumPostUnread(n.id);
                if (n.type !== g.d4z.GUILD_CATEGORY)
                  return Z.ZP.hasUnreadOrMentions(n.id);
                {
                  let e = c.Z.getCategories(n.getGuildId());
                  if (null == e[n.id]) return !1;
                  if (
                    e[n.id].some((n) => {
                      let { channel: e } = n;
                      return (
                        (0, o.Em)(e.type) && Z.ZP.hasUnreadOrMentions(e.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(e[n.id].map((n) => n.channel.id)),
                    i = d.Z.getThreadsForGuild(n.guild_id);
                  for (let n in i)
                    if (t.has(n)) {
                      for (let e in i[n])
                        if (
                          s.Z.hasJoined(e) &&
                          !s.Z.isMuted(e) &&
                          Z.ZP.hasUnreadOrMentions(e)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [n],
            );
          return n.isForumLikeChannel() ? e > 0 : t;
        })(n);
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: h.intl.string(h.t.e6RscX),
          action: function () {
            (0, a.U6)(n);
          },
          disabled: !e,
        });
      }
    },
    442754: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(362658),
        u = t(152376),
        d = t(398758),
        s = t(9156),
        o = t(981631),
        c = t(388032);
      function Z(n) {
        let { isFavoritesPerk: e } = (0, a.z)("useChannelOptInItems"),
          t = (0, d.DM)(n.guild_id),
          Z = (0, r.e7)([s.ZP], () => s.ZP.isChannelOptedIn(n.guild_id, n.id)),
          g = (0, r.e7)(
            [s.ZP],
            () =>
              null != n.parent_id &&
              s.ZP.isChannelOptedIn(n.guild_id, n.parent_id),
          ),
          h = (0, r.e7)([s.ZP], () => s.ZP.isFavorite(n.guild_id, n.id)),
          f = () => {
            (0, u.XQ)(n.guild_id, n.id, !Z, { section: o.jXE.CONTEXT_MENU });
          },
          M = () => {
            null != n.parent_id &&
              (0, u.XQ)(n.guild_id, n.parent_id, !1, {
                section: o.jXE.CONTEXT_MENU,
              });
          };
        if (!t || n.isThread()) return null;
        if (n.isCategory())
          return (0, i.jsx)(l.MenuItem, {
            id: "opt-into-category",
            label: Z
              ? c.intl.string(c.t["3zySTE"])
              : c.intl.string(c.t["9mysCg"]),
            action: () => f(),
          });
        let _ = h ? c.intl.string(c.t.z7I3gY) : c.intl.string(c.t["N2c/Ul"]),
          p = h ? c.intl.string(c.t.M5PWSU) : c.intl.string(c.t.RMpwZm);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(l.MenuItem, {
              id: "opt-in-favorite-channel",
              label: e ? p : _,
              action: () => {
                (0, u.dM)(n.guild_id, n.id, !h, {
                  section: o.jXE.CONTEXT_MENU,
                });
              },
            }),
            g
              ? (0, i.jsx)(l.MenuItem, {
                  id: "opt-out-category",
                  label: c.intl.string(c.t.jNphKS),
                  action: () => M(),
                })
              : (0, i.jsx)(l.MenuItem, {
                  id: "opt-into-channel",
                  label: Z
                    ? c.intl.string(c.t["3zySTE"])
                    : c.intl.string(c.t["9mysCg"]),
                  action: () => f(),
                }),
          ],
        });
      }
    },
    623483: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(117984),
        a = t(388032);
      function u(n) {
        return (0, i.jsx)(r.MenuItem, {
          id: "delete-channel",
          label: a.intl.string(a.t.Jg0R7e),
          subtext: a.intl.string(a.t["+mNKMz"]),
          color: "danger",
          action: () =>
            (0, r.openModalLazy)(async () => {
              let { default: e } = await t.e("37720").then(t.bind(t, 357632));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  onConfirm: () => {
                    t.onClose(), (0, l.xh)(n.id);
                  },
                  channel: n,
                });
            }),
        });
      }
    },
    697229: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(914010),
        u = t(362658),
        d = t(981631),
        s = t(388032);
      function o(n) {
        let e = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
          o = n.type === d.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.z)("useCategoryAddChannelItem");
        return !__OVERLAY__ && e === d.I_8 && c && o
          ? (0, i.jsx)(l.MenuItem, {
              id: "add-channel-to-category",
              icon: l.CirclePlusIcon,
              color: "brand",
              label: s.intl.string(s.t["6uDHk5"]),
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("95257")
                    .then(t.bind(t, 178125));
                  return (t) => (0, i.jsx)(e, { ...t, parentId: n.id });
                });
              },
            })
          : null;
      }
    },
    212205: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        a = t(914010),
        u = t(362658),
        d = t(981631),
        s = t(388032);
      function o(n) {
        let e = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
          o = n.type === d.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || e !== d.I_8
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && o ? s.intl.string(s.t.xXYKiI) : s.intl.string(s.t.dilOFx),
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("46161")
                    .then(t.bind(t, 238716));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      channelId: n.id,
                      heading:
                        c && o
                          ? s.intl.string(s.t.xXYKiI)
                          : s.intl.string(s.t.dilOFx),
                      formTitle:
                        c && o
                          ? s.intl.string(s.t.OCAkGB)
                          : s.intl.string(s.t["621LJC"]),
                      allowReset: !(c && o),
                    });
                });
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=660094941ef8774e4713.js.map
