"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94612"],
  {
    211739: function (n, t, e) {
      e.d(t, {
        N5: function () {
          return u;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return a;
        },
        mJ: function () {
          return l;
        },
      });
      var i = e(570140);
      function r(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function l(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: n });
      }
      function u(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: n });
      }
      function a(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: n });
      }
    },
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
    422200: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(239091),
        u = e(108843),
        a = e(100527),
        d = e(299206),
        o = e(895563),
        s = e(32750),
        c = e(109764),
        f = e(323597),
        Z = e(461535),
        h = e(438536),
        _ = e(251746),
        M = e(193987),
        g = e(933793),
        m = e(13736),
        E = e(732393),
        S = e(214906),
        O = e(612856),
        b = e(137591),
        p = e(388032);
      t.default = (0, u.Z)(
        function (n) {
          let { channel: t, onSelect: e } = n,
            u = (0, c.Z)(t),
            a = (0, Z.Z)(t),
            v = (0, S.Z)(t),
            C = (0, s.Z)(t),
            N = (0, M.Z)(t),
            G = (0, f.Z)(t),
            L = (0, d.Z)({ id: t.id, label: p.intl.string(p.t.DQ797u) }),
            x = (0, h.Z)(t, "Context Menu"),
            A = (0, g.Z)(t),
            P = (0, O.Z)(t),
            j = (0, m.Z)(t),
            I = (0, E.Z)(t.id),
            U = (0, _.Z)(t),
            T = (0, b.Z)(t),
            R = (0, o.l)(t),
            y = (0, o.P)(t);
          return (0, i.jsxs)(r.Menu, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": p.intl.string(p.t["1NBjqa"]),
            onSelect: e,
            children: [
              (0, i.jsxs)(
                r.MenuGroup,
                { children: [a, R] },
                "mark-as-read-or-favorite",
              ),
              (0, i.jsxs)(
                r.MenuGroup,
                { children: [x, U, C, N, j, I, u] },
                "thread-actions",
              ),
              (0, i.jsxs)(r.MenuGroup, { children: [v, P] }, "notifications"),
              (0, i.jsx)(r.MenuGroup, { children: y }),
              (0, i.jsxs)(
                r.MenuGroup,
                { children: [T, A, G] },
                "admin-actions",
              ),
              (0, i.jsx)(r.MenuGroup, { children: L }, "developer-actions"),
            ],
          });
        },
        [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU],
      );
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
      var r = e(442837),
        l = e(481060),
        u = e(45114),
        a = e(456269),
        d = e(344185),
        o = e(569471),
        s = e(131704),
        c = e(324067),
        f = e(306680),
        Z = e(981631),
        h = e(388032);
      function _(n) {
        let t = (function (n) {
          let t = (0, a.n2)(n.guild_id, n.id),
            e = (0, r.e7)(
              [f.ZP, c.Z, d.Z, o.Z],
              () => {
                if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                if (n.type !== Z.d4z.GUILD_CATEGORY)
                  return f.ZP.hasUnreadOrMentions(n.id);
                {
                  let t = c.Z.getCategories(n.getGuildId());
                  if (null == t[n.id]) return !1;
                  if (
                    t[n.id].some((n) => {
                      let { channel: t } = n;
                      return (
                        (0, s.Em)(t.type) && f.ZP.hasUnreadOrMentions(t.id)
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
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: h.intl.string(h.t.e6RscX),
          action: function () {
            (0, u.U6)(n);
          },
          disabled: !t,
        });
      }
    },
    776568: function (n, t, e) {
      e.d(t, {
        ZP: function () {
          return S;
        },
        k: function () {
          return m;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(913527),
        l = e.n(r),
        u = e(442837),
        a = e(481060),
        d = e(211739),
        o = e(87051),
        s = e(496729),
        c = e(777861),
        f = e(9156),
        Z = e(621600),
        h = e(933557),
        _ = e(981631),
        M = e(969943),
        g = e(388032);
      let m = () => [
          { value: M.Oe.MINUTES_15, label: g.intl.string(g.t["8ot6go"]) },
          { value: M.Oe.HOURS_1, label: g.intl.string(g.t.UMWBZm) },
          { value: M.Oe.HOURS_3, label: g.intl.string(g.t.QmYWtr) },
          { value: M.Oe.HOURS_8, label: g.intl.string(g.t.EpAXPD) },
          { value: M.Oe.HOURS_24, label: g.intl.string(g.t["755t4u"]) },
          { value: M.Oe.ALWAYS, label: g.intl.string(g.t.r3LawM) },
        ],
        E = (n) => {
          let t = n > 0 ? l()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function S(n, t) {
        let [e, r] = (0, u.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          l = (0, c.U)(r),
          M = (0, h.ZP)(n, !0);
        function S(t) {
          t && n.type === _.d4z.GUILD_CATEGORY && (0, d.c4)(n.id),
            o.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              Z.UE.muted(t),
            );
        }
        let O = g.intl.string(g.t.tbeRRE),
          b = g.intl.string(g.t.OYefmZ);
        switch (n.type) {
          case _.d4z.GUILD_CATEGORY:
            (O = g.intl.string(g.t.pNMCg4)), (b = g.intl.string(g.t.olaBeH));
            break;
          case _.d4z.GROUP_DM:
            (O = g.intl.string(g.t.LO3kaG)), (b = g.intl.string(g.t["s5/5fn"]));
            break;
          case _.d4z.DM:
            (O = g.intl.format(g.t.byjuJi, { name: M })),
              (b = g.intl.format(g.t["eC+9rq"], { name: M }));
            break;
          default:
            (O = g.intl.string(g.t.tbeRRE)), (b = g.intl.string(g.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: b,
              subtext: l,
              action: () => S(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: O,
              action: () => {
                S(!0),
                  (0, s.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: m().map((e) => {
                let { value: r, label: l } = e;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(r),
                    label: l,
                    action: () =>
                      (function (e) {
                        n.type === _.d4z.GUILD_CATEGORY && (0, d.c4)(n.id);
                        let i = E(e);
                        o.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          Z.ZB.Muted,
                          t,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    438536: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        l = e(481060),
        u = e(569471),
        a = e(346479),
        d = e(388032);
      function o(n, t) {
        return (0, r.e7)([u.Z], () => u.Z.hasJoined(n.id))
          ? (0, i.jsx)(l.MenuItem, {
              id: "leave-thread",
              label: n.isForumPost()
                ? d.intl.string(d.t["2LsZdX"])
                : d.intl.string(d.t["fa/84u"]),
              action: () => a.Z.leaveThread(n, t),
            })
          : (0, i.jsx)(l.MenuItem, {
              id: "join-thread",
              label: n.isForumPost()
                ? d.intl.string(d.t.ihLPiI)
                : d.intl.string(d.t["10kukZ"]),
              action: () => a.Z.joinThread(n, t),
            });
      }
    },
    214906: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return Z;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(913527),
        l = e.n(r),
        u = e(442837),
        a = e(481060),
        d = e(777861),
        o = e(569471),
        s = e(346479),
        c = e(776568),
        f = e(388032);
      function Z(n) {
        let [t, e, r] = (0, u.Wu)([o.Z], () => [
            o.Z.isMuted(n.id),
            o.Z.getMuteConfig(n.id),
            o.Z.hasJoined(n.id),
          ]),
          Z = (0, d.U)(e);
        function h(t) {
          s.Z.setNotificationSettings(n, { muted: t });
        }
        return r
          ? t
            ? (0, i.jsx)(a.MenuItem, {
                id: "unmute-channel",
                label: n.isForumPost()
                  ? f.intl.string(f.t["0JQfsL"])
                  : f.intl.string(f.t["Cq/TzM"]),
                subtext: Z,
                action: () => h(!1),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "mute-channel",
                label: n.isForumPost()
                  ? f.intl.string(f.t["nP+YkZ"])
                  : f.intl.string(f.t.bUUd8v),
                action: () => h(!0),
                children: (0, c.k)().map((t) => {
                  let { value: e, label: r } = t;
                  return (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "".concat(e),
                      label: r,
                      action: () =>
                        (function (t) {
                          let e =
                            t > 0 ? l()().add(t, "second").toISOString() : null;
                          s.Z.setNotificationSettings(n, {
                            muted: !0,
                            mute_config: {
                              selected_time_window: t,
                              end_time: e,
                            },
                          });
                        })(e),
                    },
                    e,
                  );
                }),
              })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-disabled",
              label: n.isForumPost()
                ? f.intl.string(f.t["nP+YkZ"])
                : f.intl.string(f.t.bUUd8v),
              disabled: !0,
            });
      }
    },
    895563: function (n, t, e) {
      e.d(t, {
        P: function () {
          return g;
        },
        l: function () {
          return M;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(392711),
        l = e.n(r),
        u = e(442837),
        a = e(481060),
        d = e(984933),
        o = e(853856),
        s = e(117984),
        c = e(593214),
        f = e(362658),
        Z = e(981631),
        h = e(388032);
      function _(n, t) {
        return n.type === Z.d4z.GROUP_DM
          ? t
            ? h.intl.string(h.t["0BWmSE"])
            : h.intl.string(h.t.uuVTOD)
          : n.type === Z.d4z.DM
            ? t
              ? h.intl.string(h.t["2wfKGh"])
              : h.intl.string(h.t.wPbAsb)
            : t
              ? h.intl.string(h.t.Bou7lZ)
              : h.intl.string(h.t["4wcdEx"]);
      }
      function M(n) {
        let t = (0, u.e7)([d.ZP], () => d.ZP.getChannels(Z.I_8))[
            Z.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: e } = (0, f.z)("58e21a_1"),
          { notifyFavoriteAdded: r } = (0, c.up)();
        if (!(0, c.li)(n)) return null;
        let [[o], h] = l().partition(t, (n) => "null" === n.channel.id);
        function M(t) {
          r(), (0, s.kj)(n.id, t);
        }
        return 0 === h.length
          ? (0, i.jsx)(a.MenuItem, {
              id: "favorite-channel",
              label: _(n, !1),
              action: () => M(null),
            })
          : (0, i.jsxs)(a.MenuItem, {
              id: "favorite-channel",
              label: _(n, !1),
              action: () => M(null),
              children: [
                e &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "favorite-".concat(o.channel.id),
                        label: o.channel.name,
                        action: () =>
                          M("null" === o.channel.id ? null : o.channel.id),
                      },
                      o.channel.id,
                    ),
                  }),
                (0, i.jsx)(a.MenuGroup, {
                  children: h.map((n) =>
                    (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => M(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function g(n) {
        let t = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id));
        return __OVERLAY__ || !t
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "favorite-channel",
              label: _(n, !0),
              color: "danger",
              action: () =>
                n.type === Z.d4z.GUILD_CATEGORY
                  ? (0, a.openModalLazy)(async () => {
                      let { default: t } = await e
                        .e("37720")
                        .then(e.bind(e, 357632));
                      return (e) =>
                        (0, i.jsx)(t, {
                          ...e,
                          onConfirm: () => {
                            e.onClose(), (0, s.oC)(n.id);
                          },
                          channel: n,
                        });
                    })
                  : (0, s.oC)(n.id),
            });
      }
    },
    305587: function (n, t, e) {
      e.d(t, {
        Xs: function () {
          return r;
        },
      });
      let i = (0, e(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function r(n) {
        let { enabled: t } = i.getCurrentConfig(
          { location: n },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    496729: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
        s: function () {
          return s;
        },
      });
      var i = e(200651),
        r = e(704215),
        l = e(481060),
        u = e(570140),
        a = e(605236),
        d = e(592125),
        o = e(305587);
      function s(n) {
        let { channelId: t, location: e } = n,
          i = d.Z.getChannel(t),
          l = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !l)
          (0, o.Xs)(e) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function c() {
        (0, l.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
    723170: function (n, t, e) {
      e.d(t, {
        B: function () {
          return c;
        },
        J: function () {
          return s;
        },
      }),
        e(789020);
      var i = e(442837),
        r = e(592125),
        l = e(9156),
        u = e(630388),
        a = e(569471),
        d = e(124368),
        o = e(981631);
      function s(n) {
        let t = a.Z.flags(n.id);
        if (null == t) return d.iN.NO_MESSAGES;
        if ((0, u.yE)(t, d.iN.ALL_MESSAGES)) return d.iN.ALL_MESSAGES;
        if ((0, u.yE)(t, d.iN.ONLY_MENTIONS)) return d.iN.ONLY_MENTIONS;
        if ((0, u.yE)(t, d.iN.NO_MESSAGES)) return d.iN.NO_MESSAGES;
        let e = r.Z.getChannel(n.parent_id);
        if (null == e || l.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))
          return d.iN.NO_MESSAGES;
        let i = l.ZP.resolvedMessageNotifications(e);
        return i === o.bL.NO_MESSAGES
          ? d.iN.NO_MESSAGES
          : i === o.bL.ONLY_MENTIONS
            ? d.iN.ONLY_MENTIONS
            : d.iN.ALL_MESSAGES;
      }
      function c(n) {
        return (0, i.e7)([a.Z, l.ZP, r.Z], () => s(n), [n]);
      }
    },
    37461: function (n, t, e) {
      n.exports = { emoji: "emoji_eb856f" };
    },
  },
]);
//# sourceMappingURL=2fc491e18face76ed037.js.map
