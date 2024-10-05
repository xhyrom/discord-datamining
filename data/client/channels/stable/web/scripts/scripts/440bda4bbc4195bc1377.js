"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94612"],
  {
    211739: function (e, n, t) {
      t.d(n, {
        N5: function () {
          return u;
        },
        c4: function () {
          return a;
        },
        lc: function () {
          return r;
        },
        mJ: function () {
          return s;
        },
      });
      var i = t(570140);
      function a(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function s(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function u(e) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function r(e) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(906732);
      function s(e, n) {
        return function (t) {
          let { analyticsLocations: s } = (0, a.ZP)(n);
          return (0, i.jsx)(a.Gt, {
            value: s,
            children: (0, i.jsx)(e, { ...t }),
          });
        };
      }
    },
    422200: function (e, n, t) {
      t.r(n);
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(239091),
        u = t(108843),
        r = t(100527),
        l = t(299206),
        d = t(895563),
        o = t(32750),
        c = t(109764),
        M = t(323597),
        _ = t(461535),
        E = t(438536),
        Z = t(251746),
        f = t(193987),
        N = t(933793),
        O = t(13736),
        T = t(732393),
        U = t(214906),
        A = t(612856),
        h = t(137591),
        g = t(689938);
      n.default = (0, u.Z)(
        function (e) {
          let { channel: n, onSelect: t } = e,
            u = (0, c.Z)(n),
            r = (0, _.Z)(n),
            S = (0, U.Z)(n),
            m = (0, o.Z)(n),
            C = (0, f.Z)(n),
            R = (0, M.Z)(n),
            I = (0, l.Z)({ id: n.id, label: g.Z.Messages.COPY_ID_THREAD }),
            p = (0, E.Z)(n, "Context Menu"),
            G = (0, N.Z)(n),
            b = (0, A.Z)(n),
            L = (0, O.Z)(n),
            v = (0, T.Z)(n.id),
            D = (0, Z.Z)(n),
            P = (0, h.Z)(n),
            x = (0, d.l)(n),
            j = (0, d.P)(n);
          return (0, i.jsxs)(a.Menu, {
            navId: "thread-context",
            onClose: s.Zy,
            "aria-label": g.Z.Messages.THREAD_ACTIONS_MENU_LABEL,
            onSelect: t,
            children: [
              (0, i.jsxs)(
                a.MenuGroup,
                { children: [r, x] },
                "mark-as-read-or-favorite",
              ),
              (0, i.jsxs)(
                a.MenuGroup,
                { children: [p, D, m, C, L, v, u] },
                "thread-actions",
              ),
              (0, i.jsxs)(a.MenuGroup, { children: [S, b] }, "notifications"),
              (0, i.jsx)(a.MenuGroup, { children: j }),
              (0, i.jsxs)(
                a.MenuGroup,
                { children: [P, G, R] },
                "admin-actions",
              ),
              (0, i.jsx)(a.MenuGroup, { children: I }, "developer-actions"),
            ],
          });
        },
        [r.Z.CONTEXT_MENU, r.Z.CHANNEL_LIST_THREAD_MENU],
      );
    },
    461535: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        u = t(45114),
        r = t(456269),
        l = t(344185),
        d = t(569471),
        o = t(131704),
        c = t(324067),
        M = t(306680),
        _ = t(981631),
        E = t(689938);
      function Z(e) {
        let n = (function (e) {
          let n = (0, r.n2)(e.guild_id, e.id),
            t = (0, a.e7)(
              [M.ZP, c.Z, l.Z, d.Z],
              () => {
                if (e.isForumPost()) return M.ZP.isForumPostUnread(e.id);
                if (e.type !== _.d4z.GUILD_CATEGORY)
                  return M.ZP.hasUnreadOrMentions(e.id);
                {
                  let n = c.Z.getCategories(e.getGuildId());
                  if (null == n[e.id]) return !1;
                  if (
                    n[e.id].some((e) => {
                      let { channel: n } = e;
                      return (
                        (0, o.Em)(n.type) && M.ZP.hasUnreadOrMentions(n.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(n[e.id].map((e) => e.channel.id)),
                    i = l.Z.getThreadsForGuild(e.guild_id);
                  for (let e in i)
                    if (t.has(e)) {
                      for (let n in i[e])
                        if (
                          d.Z.hasJoined(n) &&
                          !d.Z.isMuted(n) &&
                          M.ZP.hasUnreadOrMentions(n)
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
        return (0, i.jsx)(s.MenuItem, {
          id: "mark-channel-read",
          label: E.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, u.U6)(e);
          },
          disabled: !n,
        });
      }
    },
    776568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return U;
        },
        k: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(913527),
        s = t.n(a),
        u = t(442837),
        r = t(481060),
        l = t(211739),
        d = t(87051),
        o = t(401412),
        c = t(777861),
        M = t(9156),
        _ = t(621600),
        E = t(933557),
        Z = t(981631),
        f = t(969943),
        N = t(689938);
      let O = () => [
          {
            value: f.Oe.MINUTES_15,
            label: N.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: f.Oe.HOURS_1, label: N.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: f.Oe.HOURS_3, label: N.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: f.Oe.HOURS_8, label: N.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: f.Oe.HOURS_24, label: N.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: f.Oe.ALWAYS, label: N.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        T = (e) => {
          let n = e > 0 ? s()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: n },
          };
        };
      function U(e, n) {
        let [t, a] = (0, u.Wu)([M.ZP], () => [
            M.ZP.isChannelMuted(e.guild_id, e.id),
            M.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          s = (0, c.U)(a),
          f = (0, E.ZP)(e, !0);
        function U(n) {
          n && e.type === Z.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            d.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: n },
              _.UE.muted(n),
            );
        }
        let A = N.Z.Messages.MUTE_CHANNEL_GENERIC,
          h = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case Z.d4z.GUILD_CATEGORY:
            (A = N.Z.Messages.MUTE_CATEGORY),
              (h = N.Z.Messages.UNMUTE_CATEGORY);
            break;
          case Z.d4z.GROUP_DM:
            (A = N.Z.Messages.MUTE_CONVERSATION),
              (h = N.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case Z.d4z.DM:
            (A = N.Z.Messages.MUTE_CHANNEL.format({ name: f })),
              (h = N.Z.Messages.UNMUTE_CHANNEL.format({ name: f }));
            break;
          default:
            (A = N.Z.Messages.MUTE_CHANNEL_GENERIC),
              (h = N.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return t
          ? (0, i.jsx)(r.MenuItem, {
              id: "unmute-channel",
              label: h,
              subtext: s,
              action: () => U(!1),
            })
          : (0, i.jsx)(r.MenuItem, {
              id: "mute-channel",
              label: A,
              action: () => {
                U(!0),
                  (0, o.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: O().map((t) => {
                let { value: a, label: s } = t;
                return (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "".concat(a),
                    label: s,
                    action: () =>
                      (function (t) {
                        e.type === Z.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let i = T(t);
                        d.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          _.ZB.Muted,
                          n,
                        );
                      })(a),
                  },
                  a,
                );
              }),
            });
      }
    },
    438536: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        s = t(481060),
        u = t(569471),
        r = t(346479),
        l = t(689938);
      function d(e, n) {
        return (0, a.e7)([u.Z], () => u.Z.hasJoined(e.id))
          ? (0, i.jsx)(s.MenuItem, {
              id: "leave-thread",
              label: e.isForumPost()
                ? l.Z.Messages.LEAVE_FORUM_POST
                : l.Z.Messages.LEAVE_THREAD,
              action: () => r.Z.leaveThread(e, n),
            })
          : (0, i.jsx)(s.MenuItem, {
              id: "join-thread",
              label: e.isForumPost()
                ? l.Z.Messages.JOIN_FORUM_POST
                : l.Z.Messages.JOIN_THREAD,
              action: () => r.Z.joinThread(e, n),
            });
      }
    },
    214906: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(913527),
        s = t.n(a),
        u = t(442837),
        r = t(481060),
        l = t(777861),
        d = t(569471),
        o = t(346479),
        c = t(776568),
        M = t(689938);
      function _(e) {
        let [n, t, a] = (0, u.Wu)([d.Z], () => [
            d.Z.isMuted(e.id),
            d.Z.getMuteConfig(e.id),
            d.Z.hasJoined(e.id),
          ]),
          _ = (0, l.U)(t);
        function E(n) {
          o.Z.setNotificationSettings(e, { muted: n });
        }
        return a
          ? n
            ? (0, i.jsx)(r.MenuItem, {
                id: "unmute-channel",
                label: e.isForumPost()
                  ? M.Z.Messages.UNMUTE_FORUM_POST
                  : M.Z.Messages.UNMUTE_THREAD,
                subtext: _,
                action: () => E(!1),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "mute-channel",
                label: e.isForumPost()
                  ? M.Z.Messages.MUTE_FORUM_POST
                  : M.Z.Messages.MUTE_THREAD,
                action: () => E(!0),
                children: (0, c.k)().map((n) => {
                  let { value: t, label: a } = n;
                  return (0, i.jsx)(
                    r.MenuItem,
                    {
                      id: "".concat(t),
                      label: a,
                      action: () =>
                        (function (n) {
                          let t =
                            n > 0 ? s()().add(n, "second").toISOString() : null;
                          o.Z.setNotificationSettings(e, {
                            muted: !0,
                            mute_config: {
                              selected_time_window: n,
                              end_time: t,
                            },
                          });
                        })(t),
                    },
                    t,
                  );
                }),
              })
          : (0, i.jsx)(r.MenuItem, {
              id: "mute-disabled",
              label: e.isForumPost()
                ? M.Z.Messages.MUTE_FORUM_POST
                : M.Z.Messages.MUTE_THREAD,
              disabled: !0,
            });
      }
    },
    895563: function (e, n, t) {
      t.d(n, {
        P: function () {
          return N;
        },
        l: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(392711),
        s = t.n(a),
        u = t(442837),
        r = t(481060),
        l = t(984933),
        d = t(853856),
        o = t(117984),
        c = t(593214),
        M = t(362658),
        _ = t(981631),
        E = t(689938);
      function Z(e, n) {
        return e.type === _.d4z.GROUP_DM
          ? n
            ? E.Z.Messages.UNFAVORITE_GDM
            : E.Z.Messages.FAVORITE_GDM
          : e.type === _.d4z.DM
            ? n
              ? E.Z.Messages.UNFAVORITE_DM
              : E.Z.Messages.FAVORITE_DM
            : n
              ? E.Z.Messages.UNFAVORITE_CHANNEL
              : E.Z.Messages.FAVORITE_CHANNEL;
      }
      function f(e) {
        let n = (0, u.e7)([l.ZP], () => l.ZP.getChannels(_.I_8))[
            _.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, M.z)("58e21a_1"),
          { notifyFavoriteAdded: a } = (0, c.up)();
        if (!(0, c.li)(e)) return null;
        let [[d], E] = s().partition(n, (e) => "null" === e.channel.id);
        function f(n) {
          a(), (0, o.kj)(e.id, n);
        }
        return 0 === E.length
          ? (0, i.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: Z(e, !1),
              action: () => f(null),
            })
          : (0, i.jsxs)(r.MenuItem, {
              id: "favorite-channel",
              label: Z(e, !1),
              action: () => f(null),
              children: [
                t &&
                  (0, i.jsx)(r.MenuGroup, {
                    children: (0, i.jsx)(
                      r.MenuItem,
                      {
                        id: "favorite-".concat(d.channel.id),
                        label: d.channel.name,
                        action: () =>
                          f("null" === d.channel.id ? null : d.channel.id),
                      },
                      d.channel.id,
                    ),
                  }),
                (0, i.jsx)(r.MenuGroup, {
                  children: E.map((e) =>
                    (0, i.jsx)(
                      r.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => f(e.channel.id),
                      },
                      e.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function N(e) {
        let n = (0, u.e7)([d.Z], () => d.Z.isFavorite(e.id));
        return __OVERLAY__ || !n
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "favorite-channel",
              label: Z(e, !0),
              color: "danger",
              action: () =>
                e.type === _.d4z.GUILD_CATEGORY
                  ? (0, r.openModalLazy)(async () => {
                      let { default: n } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, i.jsx)(n, {
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
    305587: function (e, n, t) {
      t.d(n, {
        Xs: function () {
          return a;
        },
      });
      let i = (0, t(818083).B)({
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
      function a(e) {
        let { enabled: n } = i.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return n;
      }
    },
    401412: function (e, n, t) {
      t.d(n, {
        s: function () {
          return l;
        },
      });
      var i = t(704215),
        a = t(570140),
        s = t(605236),
        u = t(592125),
        r = t(305587);
      function l(e) {
        let { channelId: n, location: t } = e,
          l = u.Z.getChannel(n),
          d = (0, s.un)(i.z.USER_DM_MUTE_FEEDBACK);
        if (null != l && !!l.isDM() && !d)
          (0, r.Xs)(t) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: l });
      }
    },
    723170: function (e, n, t) {
      t.d(n, {
        B: function () {
          return c;
        },
        J: function () {
          return o;
        },
      }),
        t(789020);
      var i = t(442837),
        a = t(592125),
        s = t(9156),
        u = t(630388),
        r = t(569471),
        l = t(124368),
        d = t(981631);
      function o(e) {
        let n = r.Z.flags(e.id);
        if (null == n) return l.iN.NO_MESSAGES;
        if ((0, u.yE)(n, l.iN.ALL_MESSAGES)) return l.iN.ALL_MESSAGES;
        if ((0, u.yE)(n, l.iN.ONLY_MENTIONS)) return l.iN.ONLY_MENTIONS;
        if ((0, u.yE)(n, l.iN.NO_MESSAGES)) return l.iN.NO_MESSAGES;
        let t = a.Z.getChannel(e.parent_id);
        if (null == t || s.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id))
          return l.iN.NO_MESSAGES;
        let i = s.ZP.resolvedMessageNotifications(t);
        return i === d.bL.NO_MESSAGES
          ? l.iN.NO_MESSAGES
          : i === d.bL.ONLY_MENTIONS
            ? l.iN.ONLY_MENTIONS
            : l.iN.ALL_MESSAGES;
      }
      function c(e) {
        return (0, i.e7)([r.Z, s.ZP, a.Z], () => o(e), [e]);
      }
    },
    37461: function (e, n, t) {
      e.exports = { emoji: "emoji_eb856f" };
    },
  },
]);
//# sourceMappingURL=440bda4bbc4195bc1377.js.map
