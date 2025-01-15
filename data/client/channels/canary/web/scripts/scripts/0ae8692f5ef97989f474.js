"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18320"],
  {
    398048: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(496675),
        u = e(981631),
        d = e(388032);
      function o(n, t) {
        let o = (0, l.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        return __OVERLAY__ || !o
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "clone-channel",
              label: d.intl.string(d.t.dEaPc3),
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: l } = await Promise.all([
                    e.e("7590"),
                    e.e("45094"),
                    e.e("89025"),
                  ]).then(e.bind(e, 218613));
                  return (e) =>
                    (0, i.jsx)(l, {
                      ...e,
                      channelType: n.type,
                      guildId: t.id,
                      categoryId: n.parent_id,
                      cloneChannelId: n.id,
                    });
                }),
            });
      }
    },
    3689: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(496675),
        u = e(981631),
        d = e(388032);
      function o(n, t) {
        let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.type,
          c = (0, l.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        if (__OVERLAY__ || !c) return null;
        let s = () => {
          (0, a.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
              e.e("7590"),
              e.e("45094"),
              e.e("89025"),
            ]).then(e.bind(e, 218613));
            return (e) =>
              (0, i.jsx)(t, {
                ...e,
                channelType: o,
                guildId: n.guild_id,
                categoryId: n.parent_id,
              });
          });
        };
        switch (o) {
          case u.d4z.GUILD_TEXT:
            return (0, i.jsx)(a.MenuItem, {
              id: "create-text-channel",
              label: d.intl.string(d.t.HHkTJC),
              action: s,
            });
          case u.d4z.GUILD_VOICE:
            return (0, i.jsx)(a.MenuItem, {
              id: "create-voice-channel",
              label: d.intl.string(d.t.AlbZaG),
              action: s,
            });
          default:
            return null;
        }
      }
    },
    852245: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(787014),
        u = e(685929),
        d = e(496675),
        o = e(981631),
        c = e(388032);
      function s(n) {
        let {
          canManageChannels: t,
          canManageRoles: e,
          canManageWebhooks: s,
          canAccessChannel: f,
          canUnlinkChannel: g,
        } = (0, l.cj)(
          [d.Z],
          () => ({
            canManageChannels: d.Z.can(o.Plq.MANAGE_CHANNELS, n),
            canManageRoles: d.Z.can(o.Plq.MANAGE_ROLES, n),
            canManageWebhooks: d.Z.can(o.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: d.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, u.C)(n, d.Z),
          }),
          [n],
        );
        return !__OVERLAY__ && f && (t || e || s || g)
          ? (0, i.jsx)(a.MenuItem, {
              id: "edit-channel",
              label:
                n.type === o.d4z.GUILD_CATEGORY
                  ? c.intl.string(c.t.zdPFs7)
                  : c.intl.string(c.t["3gUsJS"]),
              action: () => r.ZP.open(n.id),
            })
          : null;
      }
    },
    367722: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(466330),
        l = e(981631);
      function a(n, t, e) {
        return (0, i.Z)({
          guild: t,
          channel: n,
          stageInstance: e,
          source: l.t4x.CONTEXT_MENU,
        });
      }
    },
    461535: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return _;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(45114),
        u = e(456269),
        d = e(344185),
        o = e(569471),
        c = e(131704),
        s = e(324067),
        f = e(306680),
        g = e(981631),
        h = e(388032);
      function _(n) {
        let t = (function (n) {
          let t = (0, u.n2)(n.guild_id, n.id),
            e = (0, l.e7)(
              [f.ZP, s.Z, d.Z, o.Z],
              () => {
                if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                if (n.type !== g.d4z.GUILD_CATEGORY)
                  return f.ZP.hasUnreadOrMentions(n.id);
                {
                  let t = s.Z.getCategories(n.getGuildId());
                  if (null == t[n.id]) return !1;
                  if (
                    t[n.id].some((n) => {
                      let { channel: t } = n;
                      return (
                        (0, c.Em)(t.type) && f.ZP.hasUnreadOrMentions(t.id)
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
                          o.Z.hasJoined(t) &&
                          !o.Z.isMuted(t) &&
                          f.ZP.hasUnreadOrMentions(t)
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
        return (0, i.jsx)(a.MenuItem, {
          id: "mark-channel-read",
          label: h.intl.string(h.t.e6RscX),
          action: function () {
            (0, r.U6)(n);
          },
          disabled: !t,
        });
      }
    },
    442754: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(362658),
        u = e(152376),
        d = e(398758),
        o = e(9156),
        c = e(981631),
        s = e(388032);
      function f(n) {
        let { isFavoritesPerk: t } = (0, r.z)("useChannelOptInItems"),
          e = (0, d.DM)(n.guild_id),
          f = (0, l.e7)([o.ZP], () => o.ZP.isChannelOptedIn(n.guild_id, n.id)),
          g = (0, l.e7)(
            [o.ZP],
            () =>
              null != n.parent_id &&
              o.ZP.isChannelOptedIn(n.guild_id, n.parent_id),
          ),
          h = (0, l.e7)([o.ZP], () => o.ZP.isFavorite(n.guild_id, n.id)),
          _ = () => {
            (0, u.XQ)(n.guild_id, n.id, !f, { section: c.jXE.CONTEXT_MENU });
          },
          p = () => {
            null != n.parent_id &&
              (0, u.XQ)(n.guild_id, n.parent_id, !1, {
                section: c.jXE.CONTEXT_MENU,
              });
          };
        if (!e || n.isThread()) return null;
        if (n.isCategory())
          return (0, i.jsx)(a.MenuItem, {
            id: "opt-into-category",
            label: f
              ? s.intl.string(s.t["3zySTE"])
              : s.intl.string(s.t["9mysCg"]),
            action: () => _(),
          });
        let I = h ? s.intl.string(s.t.z7I3gY) : s.intl.string(s.t["N2c/Ul"]),
          M = h ? s.intl.string(s.t.M5PWSU) : s.intl.string(s.t.RMpwZm);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? M : I,
              action: () => {
                (0, u.dM)(n.guild_id, n.id, !h, {
                  section: c.jXE.CONTEXT_MENU,
                });
              },
            }),
            g
              ? (0, i.jsx)(a.MenuItem, {
                  id: "opt-out-category",
                  label: s.intl.string(s.t.jNphKS),
                  action: () => p(),
                })
              : (0, i.jsx)(a.MenuItem, {
                  id: "opt-into-channel",
                  label: f
                    ? s.intl.string(s.t["3zySTE"])
                    : s.intl.string(s.t["9mysCg"]),
                  action: () => _(),
                }),
          ],
        });
      }
    },
    895563: function (n, t, e) {
      e.d(t, {
        P: function () {
          return I;
        },
        l: function () {
          return p;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(392711),
        a = e.n(l),
        r = e(442837),
        u = e(481060),
        d = e(984933),
        o = e(853856),
        c = e(117984),
        s = e(593214),
        f = e(362658),
        g = e(981631),
        h = e(388032);
      function _(n, t) {
        return n.type === g.d4z.GROUP_DM
          ? t
            ? h.intl.string(h.t["0BWmSE"])
            : h.intl.string(h.t.uuVTOD)
          : n.type === g.d4z.DM
            ? t
              ? h.intl.string(h.t["2wfKGh"])
              : h.intl.string(h.t.wPbAsb)
            : t
              ? h.intl.string(h.t.Bou7lZ)
              : h.intl.string(h.t["4wcdEx"]);
      }
      function p(n) {
        let t = (0, r.e7)([d.ZP], () => d.ZP.getChannels(g.I_8))[
            g.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: e } = (0, f.z)("58e21a_1"),
          { notifyFavoriteAdded: l } = (0, s.up)();
        if (!(0, s.li)(n)) return null;
        let [[o], h] = a().partition(t, (n) => "null" === n.channel.id);
        function p(t) {
          l(), (0, c.kj)(n.id, t);
        }
        return 0 === h.length
          ? (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: _(n, !1),
              action: () => p(null),
            })
          : (0, i.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: _(n, !1),
              action: () => p(null),
              children: [
                e &&
                  (0, i.jsx)(u.MenuGroup, {
                    children: (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(o.channel.id),
                        label: o.channel.name,
                        action: () =>
                          p("null" === o.channel.id ? null : o.channel.id),
                      },
                      o.channel.id,
                    ),
                  }),
                (0, i.jsx)(u.MenuGroup, {
                  children: h.map((n) =>
                    (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => p(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function I(n) {
        let t = (0, r.e7)([o.Z], () => o.Z.isFavorite(n.id));
        return __OVERLAY__ || !t
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: _(n, !0),
              color: "danger",
              action: () =>
                n.type === g.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: t } = await e
                        .e("37720")
                        .then(e.bind(e, 357632));
                      return (e) =>
                        (0, i.jsx)(t, {
                          ...e,
                          onConfirm: () => {
                            e.onClose(), (0, c.oC)(n.id);
                          },
                          channel: n,
                        });
                    })
                  : (0, c.oC)(n.id),
            });
      }
    },
    212205: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(914010),
        u = e(362658),
        d = e(981631),
        o = e(388032);
      function c(n) {
        let t = (0, l.e7)([r.Z], () => r.Z.getGuildId()),
          c = n.type === d.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: s } = (0, u.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || t !== d.I_8
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "set-channel-nickname",
              label:
                s && c ? o.intl.string(o.t.xXYKiI) : o.intl.string(o.t.dilOFx),
              action: function () {
                (0, a.openModalLazy)(async () => {
                  let { default: t } = await e
                    .e("46161")
                    .then(e.bind(e, 238716));
                  return (e) =>
                    (0, i.jsx)(t, {
                      ...e,
                      channelId: n.id,
                      heading:
                        s && c
                          ? o.intl.string(o.t.xXYKiI)
                          : o.intl.string(o.t.dilOFx),
                      formTitle:
                        s && c
                          ? o.intl.string(o.t.OCAkGB)
                          : o.intl.string(o.t["621LJC"]),
                      allowReset: !(s && c),
                    });
                });
              },
            });
      }
    },
    478035: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(703656),
        u = e(914010),
        d = e(981631),
        o = e(388032);
      function c(n) {
        let t = (0, l.e7)([u.Z], () => u.Z.getGuildId());
        return __OVERLAY__ || t !== d.I_8
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "go-to-original-guild",
              label: o.intl.string(o.t.WYj55e),
              action: function () {
                (0, r.XU)(n.guild_id, n.id);
              },
            });
      }
    },
    62420: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      }),
        e(653041),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(481060),
        a = e(117984),
        r = e(593214),
        u = e(362658),
        d = e(388032);
      function o(n) {
        let t = (0, r.Mt)(),
          e = (0, r.s4)(n.id),
          o = (0, r.zv)(),
          { isFavoritesPerk: c } = (0, u.z)("useChannelMoveToCategory");
        if (__OVERLAY__ || !t || null == e || !c) return null;
        let [s, f] = (function (n) {
          let t = [],
            e = null;
          for (let i of n) null == i.id ? (e = i) : t.push(i);
          return [e, t];
        })(o.filter((n) => n.id !== (null == e ? void 0 : e.parentId)));
        function g(n) {
          null != e && (0, a.uA)(e.id, n);
        }
        return null == s && 0 === f.length
          ? null
          : (0, i.jsxs)(l.MenuItem, {
              id: "move-to-category",
              label: d.intl.string(d.t.FAplmp),
              children: [
                null != s &&
                  (0, i.jsx)(l.MenuGroup, {
                    children: (0, i.jsx)(l.MenuItem, {
                      id: "favorite-uncategorized",
                      label: s.name,
                      action: () => g(s.id),
                    }),
                  }),
                f.length > 0 &&
                  (0, i.jsx)(l.MenuGroup, {
                    children: f.map((n) => {
                      let { id: t, name: e } = n;
                      return (0, i.jsx)(
                        l.MenuItem,
                        {
                          id: "favorite-".concat(t),
                          label: e,
                          action: () => g(t),
                        },
                        t,
                      );
                    }),
                  }),
              ],
            });
      }
    },
    466330: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(159300),
        u = e(984933),
        d = e(496675),
        o = e(981631),
        c = e(388032);
      function s(n) {
        let { source: t, guild: e, channel: i, stageInstance: a } = n,
          c = (0, l.e7)([u.ZP], () =>
            u.ZP.getDefaultChannel(e.id, !0, o.Plq.CREATE_INSTANT_INVITE),
          ),
          s = (0, l.e7)([d.Z], () => (0, r.b)(d.Z, e, i, a)),
          h = f(t, e, s && null != i ? i : c),
          _ = g(t);
        return null == i && t === o.t4x.GUILD_CONTEXT_MENU
          ? null
          : s || null != c
            ? h
            : _;
      }
      let f = (n, t, l) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: c.intl.string(c.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                  e.e("7654"),
                  e.e("46949"),
                ]).then(e.bind(e, 560114));
                return (e) =>
                  (0, i.jsx)(a, { ...e, guild: t, channel: l, source: n });
              }),
          }),
        g = (n) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: c.intl.string(c.t.BN75l5),
            color: "brand",
            icon: n === o.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: n } = await e.e("88358").then(e.bind(e, 598402));
                return (t) => (0, i.jsx)(n, { ...t });
              }),
          });
    },
  },
]);
//# sourceMappingURL=0ae8692f5ef97989f474.js.map
