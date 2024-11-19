"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8965"],
  {
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(906732);
      function l(n, t) {
        return function (e) {
          let { analyticsLocations: l } = (0, r.ZP)(t);
          return (0, i.jsx)(r.Gt, {
            value: l,
            children: (0, i.jsx)(n, { ...e }),
          });
        };
      }
    },
    139035: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(239091),
        a = e(108843),
        u = e(100527),
        d = e(299206),
        s = e(916069),
        o = e(697229),
        c = e(212205),
        Z = e(423589),
        g = e(411567),
        h = e(672824),
        f = e(3689),
        M = e(323597),
        _ = e(852245),
        p = e(461535),
        C = e(776568),
        x = e(218035),
        I = e(775666),
        j = e(442754),
        m = e(623483),
        E = e(388032);
      function G(n) {
        let { channel: t, onSelect: e } = n,
          a = (0, p.Z)(t),
          u = (0, C.ZP)(t),
          s = (0, x.Z)(t),
          f = (0, h.Z)(t),
          M = (0, g.Z)(t),
          _ = (0, c.Z)(t),
          j = (0, o.Z)(t),
          G = (0, m.Z)(t),
          v = (0, d.Z)({ id: t.id, label: E.intl.string(E.t.gFHI3t) }),
          y = (0, Z.Mn)("ChannelCategoryFavoritesMenu"),
          b = (0, I.ZP)(t);
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: l.Zy,
          "aria-label": E.intl.string(E.t.Xm41aW),
          onSelect: e,
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
        let { channel: t, guild: e, onSelect: a } = n,
          u = (0, p.Z)(t),
          s = (0, C.ZP)(t),
          o = (0, x.Z)(t),
          m = (0, h.Z)(t),
          G = (0, g.Z)(t),
          v = (0, _.Z)(t),
          y = (0, c.Z)(t),
          b = (0, f.Z)(t, e),
          O = (0, M.Z)(t),
          P = (0, d.Z)({ id: t.id, label: E.intl.string(E.t.gFHI3t) }),
          A = (0, j.Z)(t),
          N = (0, Z.Mn)("ChannelCategoryNormalMenu"),
          T = (0, I.ZP)(t);
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
      t.default = (0, a.Z)(
        function (n) {
          return (0, s.Z)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(v, { ...n });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_CATEGORY_MENU],
      );
    },
    411567: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(211739),
        u = e(680089),
        d = e(592125),
        s = e(981631),
        o = e(388032);
      function c(n) {
        return (0, r.e7)([u.Z, d.Z], () => {
          let t = Object.values(
            d.Z.getMutableBasicGuildChannelsForGuild(n.guild_id),
          ).filter((n) => n.type === s.d4z.GUILD_CATEGORY);
          return 0 === t.length || t.every((n) => u.Z.isCollapsed(n.id));
        })
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "collapse-all-categories",
              label: o.intl.string(o.t["9dqzUl"]),
              action: () => (0, a.N5)(n.guild_id),
            });
      }
    },
    672824: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(211739),
        u = e(680089),
        d = e(388032);
      function s(n) {
        let t = (0, r.e7)([u.Z], () => u.Z.isCollapsed(n.id), [n.id]);
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "collapse-category",
          label: d.intl.string(d.t.SvVRsr),
          action: () => (t ? (0, a.mJ)(n.id) : (0, a.c4)(n.id)),
          checked: t,
        });
      }
    },
    3689: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(496675),
        u = e(981631),
        d = e(388032);
      function s(n, t) {
        let s =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.type,
          o = (0, r.e7)([a.Z], () => a.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        if (__OVERLAY__ || !o) return null;
        let c = () => {
          (0, l.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
              e.e("7590"),
              e.e("45094"),
              e.e("74287"),
            ]).then(e.bind(e, 218613));
            return (e) =>
              (0, i.jsx)(t, {
                ...e,
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
    852245: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(787014),
        u = e(496675),
        d = e(981631),
        s = e(388032);
      function o(n) {
        let {
          canManageChannels: t,
          canManageRoles: e,
          canManageWebhooks: o,
          canAccessChannel: c,
        } = (0, r.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(d.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(d.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(d.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && c && (t || e || o)
          ? (0, i.jsx)(l.MenuItem, {
              id: "edit-channel",
              label:
                n.type === d.d4z.GUILD_CATEGORY
                  ? s.intl.string(s.t.zdPFs7)
                  : s.intl.string(s.t["3gUsJS"]),
              action: () => a.ZP.open(n.id),
            })
          : null;
      }
    },
    461535: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(45114),
        u = e(456269),
        d = e(344185),
        s = e(569471),
        o = e(131704),
        c = e(324067),
        Z = e(306680),
        g = e(981631),
        h = e(388032);
      function f(n) {
        let t = (function (n) {
          let t = (0, u.n2)(n.guild_id, n.id),
            e = (0, r.e7)(
              [Z.ZP, c.Z, d.Z, s.Z],
              () => {
                if (n.isForumPost()) return Z.ZP.isForumPostUnread(n.id);
                if (n.type !== g.d4z.GUILD_CATEGORY)
                  return Z.ZP.hasUnreadOrMentions(n.id);
                {
                  let t = c.Z.getCategories(n.getGuildId());
                  if (null == t[n.id]) return !1;
                  if (
                    t[n.id].some((n) => {
                      let { channel: t } = n;
                      return (
                        (0, o.Em)(t.type) && Z.ZP.hasUnreadOrMentions(t.id)
                      );
                    })
                  )
                    return !0;
                  let e = new Set(t[n.id].map((n) => n.channel.id)),
                    i = d.Z.getThreadsForGuild(n.guild_id);
                  for (let n in i)
                    if (e.has(n)) {
                      for (let t in i[n])
                        if (
                          s.Z.hasJoined(t) &&
                          !s.Z.isMuted(t) &&
                          Z.ZP.hasUnreadOrMentions(t)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [n],
            );
          return n.isForumLikeChannel() ? t > 0 : e;
        })(n);
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: h.intl.string(h.t.e6RscX),
          action: function () {
            (0, a.U6)(n);
          },
          disabled: !t,
        });
      }
    },
    442754: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return Z;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(362658),
        u = e(152376),
        d = e(398758),
        s = e(9156),
        o = e(981631),
        c = e(388032);
      function Z(n) {
        let { isFavoritesPerk: t } = (0, a.z)("useChannelOptInItems"),
          e = (0, d.DM)(n.guild_id),
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
        if (!e || n.isThread()) return null;
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
              label: t ? p : _,
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
    623483: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(117984),
        a = e(388032);
      function u(n) {
        return (0, i.jsx)(r.MenuItem, {
          id: "delete-channel",
          label: a.intl.string(a.t.Jg0R7e),
          subtext: a.intl.string(a.t["+mNKMz"]),
          color: "danger",
          action: () =>
            (0, r.openModalLazy)(async () => {
              let { default: t } = await e.e("37720").then(e.bind(e, 357632));
              return (e) =>
                (0, i.jsx)(t, {
                  ...e,
                  onConfirm: () => {
                    e.onClose(), (0, l.xh)(n.id);
                  },
                  channel: n,
                });
            }),
        });
      }
    },
    697229: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(914010),
        u = e(362658),
        d = e(981631),
        s = e(388032);
      function o(n) {
        let t = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
          o = n.type === d.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.z)("useCategoryAddChannelItem");
        return !__OVERLAY__ && t === d.I_8 && c && o
          ? (0, i.jsx)(l.MenuItem, {
              id: "add-channel-to-category",
              icon: l.CirclePlusIcon,
              color: "brand",
              label: s.intl.string(s.t["6uDHk5"]),
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await e
                    .e("95257")
                    .then(e.bind(e, 178125));
                  return (e) => (0, i.jsx)(t, { ...e, parentId: n.id });
                });
              },
            })
          : null;
      }
    },
    212205: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        a = e(914010),
        u = e(362658),
        d = e(981631),
        s = e(388032);
      function o(n) {
        let t = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
          o = n.type === d.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || t !== d.I_8
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && o ? s.intl.string(s.t.xXYKiI) : s.intl.string(s.t.dilOFx),
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await e
                    .e("46161")
                    .then(e.bind(e, 238716));
                  return (e) =>
                    (0, i.jsx)(t, {
                      ...e,
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
//# sourceMappingURL=f3897e16e371422c37ec.js.map
