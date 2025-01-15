"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79981"],
  {
    211739: function (n, t, e) {
      e.d(t, {
        N5: function () {
          return u;
        },
        c4: function () {
          return l;
        },
        lc: function () {
          return a;
        },
        mJ: function () {
          return r;
        },
      });
      var i = e(570140);
      function l(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function r(n) {
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
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(906732);
      function r(n, t) {
        return function (e) {
          let { analyticsLocations: r } = (0, l.ZP)(t);
          return (0, i.jsx)(l.Gt, {
            value: r,
            children: (0, i.jsx)(n, { ...e }),
          });
        };
      }
    },
    422200: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var l = e(481060),
        r = e(239091),
        u = e(108843),
        a = e(100527),
        d = e(299206),
        o = e(895563),
        s = e(32750),
        c = e(109764),
        f = e(323597),
        h = e(461535),
        Z = e(438536),
        m = e(251746),
        g = e(193987),
        _ = e(933793),
        M = e(13736),
        b = e(732393),
        p = e(214906),
        v = e(612856),
        C = e(137591),
        E = e(388032);
      t.default = (0, u.Z)(
        function (n) {
          let { channel: t, onSelect: e } = n,
            u = (0, c.Z)(t),
            a = (0, h.Z)(t),
            O = (0, p.Z)(t),
            x = (0, s.Z)(t),
            j = (0, g.Z)(t),
            P = (0, f.Z)(t),
            U = (0, d.Z)({ id: t.id, label: E.intl.string(E.t.DQ797u) }),
            G = (0, Z.Z)(t, "Context Menu"),
            I = (0, _.Z)(t),
            L = (0, v.Z)(t),
            A = (0, M.Z)(t),
            R = (0, b.Z)(t.id),
            S = (0, m.Z)(t),
            k = (0, C.Z)(t),
            D = (0, o.l)(t),
            T = (0, o.P)(t);
          return (0, i.jsxs)(l.Menu, {
            navId: "thread-context",
            onClose: r.Zy,
            "aria-label": E.intl.string(E.t["1NBjqa"]),
            onSelect: e,
            children: [
              (0, i.jsxs)(
                l.MenuGroup,
                { children: [a, D] },
                "mark-as-read-or-favorite",
              ),
              (0, i.jsxs)(
                l.MenuGroup,
                { children: [G, S, x, j, A, R, u] },
                "thread-actions",
              ),
              (0, i.jsxs)(l.MenuGroup, { children: [O, L] }, "notifications"),
              (0, i.jsx)(l.MenuGroup, { children: T }),
              (0, i.jsxs)(
                l.MenuGroup,
                { children: [k, I, P] },
                "admin-actions",
              ),
              (0, i.jsx)(l.MenuGroup, { children: U }, "developer-actions"),
            ],
          });
        },
        [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU],
      );
    },
    461535: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        u = e(45114),
        a = e(456269),
        d = e(344185),
        o = e(569471),
        s = e(131704),
        c = e(324067),
        f = e(306680),
        h = e(981631),
        Z = e(388032);
      function m(n) {
        let t = (function (n) {
          let t = (0, a.n2)(n.guild_id, n.id),
            e = (0, l.e7)(
              [f.ZP, c.Z, d.Z, o.Z],
              () => {
                if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                if (n.type !== h.d4z.GUILD_CATEGORY)
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
        return (0, i.jsx)(r.MenuItem, {
          id: "mark-channel-read",
          label: Z.intl.string(Z.t.e6RscX),
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
          return p;
        },
        k: function () {
          return M;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(913527),
        r = e.n(l),
        u = e(442837),
        a = e(481060),
        d = e(211739),
        o = e(87051),
        s = e(496729),
        c = e(777861),
        f = e(9156),
        h = e(621600),
        Z = e(933557),
        m = e(981631),
        g = e(969943),
        _ = e(388032);
      let M = () => [
          { value: g.Oe.MINUTES_15, label: _.intl.string(_.t["8ot6go"]) },
          { value: g.Oe.HOURS_1, label: _.intl.string(_.t.UMWBZm) },
          { value: g.Oe.HOURS_3, label: _.intl.string(_.t.QmYWtr) },
          { value: g.Oe.HOURS_8, label: _.intl.string(_.t.EpAXPD) },
          { value: g.Oe.HOURS_24, label: _.intl.string(_.t["755t4u"]) },
          { value: g.Oe.ALWAYS, label: _.intl.string(_.t.r3LawM) },
        ],
        b = (n) => {
          let t = n > 0 ? r()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function p(n, t) {
        let [e, l] = (0, u.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          r = (0, c.U)(l),
          g = (0, Z.ZP)(n, !0);
        function p(t) {
          t && n.type === m.d4z.GUILD_CATEGORY && (0, d.c4)(n.id),
            o.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              h.UE.muted(t),
            );
        }
        let v = _.intl.string(_.t.tbeRRE),
          C = _.intl.string(_.t.OYefmZ);
        switch (n.type) {
          case m.d4z.GUILD_CATEGORY:
            (v = _.intl.string(_.t.pNMCg4)), (C = _.intl.string(_.t.olaBeH));
            break;
          case m.d4z.GROUP_DM:
            (v = _.intl.string(_.t.LO3kaG)), (C = _.intl.string(_.t["s5/5fn"]));
            break;
          case m.d4z.DM:
            (v = _.intl.format(_.t.byjuJi, { name: g })),
              (C = _.intl.format(_.t["eC+9rq"], { name: g }));
            break;
          default:
            (v = _.intl.string(_.t.tbeRRE)), (C = _.intl.string(_.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: r,
              action: () => p(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: v,
              action: () => {
                p(!0),
                  (0, s.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: M().map((e) => {
                let { value: l, label: r } = e;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(l),
                    label: r,
                    action: () =>
                      (function (e) {
                        n.type === m.d4z.GUILD_CATEGORY && (0, d.c4)(n.id);
                        let i = b(e);
                        o.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          h.ZB.Muted,
                          t,
                        );
                      })(l),
                  },
                  l,
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
      var l = e(442837),
        r = e(481060),
        u = e(569471),
        a = e(346479),
        d = e(388032);
      function o(n, t) {
        return (0, l.e7)([u.Z], () => u.Z.hasJoined(n.id))
          ? (0, i.jsx)(r.MenuItem, {
              id: "leave-thread",
              label: n.isForumPost()
                ? d.intl.string(d.t["2LsZdX"])
                : d.intl.string(d.t["fa/84u"]),
              action: () => a.Z.leaveThread(n, t),
            })
          : (0, i.jsx)(r.MenuItem, {
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
          return h;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(913527),
        r = e.n(l),
        u = e(442837),
        a = e(481060),
        d = e(777861),
        o = e(569471),
        s = e(346479),
        c = e(776568),
        f = e(388032);
      function h(n) {
        let [t, e, l] = (0, u.Wu)([o.Z], () => [
            o.Z.isMuted(n.id),
            o.Z.getMuteConfig(n.id),
            o.Z.hasJoined(n.id),
          ]),
          h = (0, d.U)(e);
        function Z(t) {
          s.Z.setNotificationSettings(n, { muted: t });
        }
        return l
          ? t
            ? (0, i.jsx)(a.MenuItem, {
                id: "unmute-channel",
                label: n.isForumPost()
                  ? f.intl.string(f.t["0JQfsL"])
                  : f.intl.string(f.t["Cq/TzM"]),
                subtext: h,
                action: () => Z(!1),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "mute-channel",
                label: n.isForumPost()
                  ? f.intl.string(f.t["nP+YkZ"])
                  : f.intl.string(f.t.bUUd8v),
                action: () => Z(!0),
                children: (0, c.k)().map((t) => {
                  let { value: e, label: l } = t;
                  return (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "".concat(e),
                      label: l,
                      action: () =>
                        (function (t) {
                          let e =
                            t > 0 ? r()().add(t, "second").toISOString() : null;
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
          return _;
        },
        l: function () {
          return g;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(392711),
        r = e.n(l),
        u = e(442837),
        a = e(481060),
        d = e(984933),
        o = e(853856),
        s = e(117984),
        c = e(593214),
        f = e(362658),
        h = e(981631),
        Z = e(388032);
      function m(n, t) {
        return n.type === h.d4z.GROUP_DM
          ? t
            ? Z.intl.string(Z.t["0BWmSE"])
            : Z.intl.string(Z.t.uuVTOD)
          : n.type === h.d4z.DM
            ? t
              ? Z.intl.string(Z.t["2wfKGh"])
              : Z.intl.string(Z.t.wPbAsb)
            : t
              ? Z.intl.string(Z.t.Bou7lZ)
              : Z.intl.string(Z.t["4wcdEx"]);
      }
      function g(n) {
        let t = (0, u.e7)([d.ZP], () => d.ZP.getChannels(h.I_8))[
            h.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: e } = (0, f.z)("58e21a_1"),
          { notifyFavoriteAdded: l } = (0, c.up)();
        if (!(0, c.li)(n)) return null;
        let [[o], Z] = r().partition(t, (n) => "null" === n.channel.id);
        function g(t) {
          l(), (0, s.kj)(n.id, t);
        }
        return 0 === Z.length
          ? (0, i.jsx)(a.MenuItem, {
              id: "favorite-channel",
              label: m(n, !1),
              action: () => g(null),
            })
          : (0, i.jsxs)(a.MenuItem, {
              id: "favorite-channel",
              label: m(n, !1),
              action: () => g(null),
              children: [
                e &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "favorite-".concat(o.channel.id),
                        label: o.channel.name,
                        action: () =>
                          g("null" === o.channel.id ? null : o.channel.id),
                      },
                      o.channel.id,
                    ),
                  }),
                (0, i.jsx)(a.MenuGroup, {
                  children: Z.map((n) =>
                    (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => g(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function _(n) {
        let t = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id));
        return __OVERLAY__ || !t
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "favorite-channel",
              label: m(n, !0),
              color: "danger",
              action: () =>
                n.type === h.d4z.GUILD_CATEGORY
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
          return l;
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
      function l(n) {
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
        l = e(704215),
        r = e(481060),
        u = e(570140),
        a = e(605236),
        d = e(592125),
        o = e(305587);
      function s(n) {
        let { channelId: t, location: e } = n,
          i = d.Z.getChannel(t),
          r = (0, a.un)(l.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !r)
          (0, o.Xs)(e) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function c() {
        (0, r.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
    806206: function (n, t, e) {
      n.exports = { emoji: "emoji_eb856f" };
    },
  },
]);
//# sourceMappingURL=287e730c1f36cc48af15.js.map
