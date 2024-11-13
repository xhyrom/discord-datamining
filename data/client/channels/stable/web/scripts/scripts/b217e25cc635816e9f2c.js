"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60178"],
  {
    211739: function (t, e, n) {
      n.d(e, {
        N5: function () {
          return l;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return a;
        },
        mJ: function () {
          return u;
        },
      });
      var i = n(570140);
      function r(t) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: t });
      }
      function u(t) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: t });
      }
      function l(t) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: t });
      }
      function a(t) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: t });
      }
    },
    776568: function (t, e, n) {
      n.d(e, {
        ZP: function () {
          return p;
        },
        k: function () {
          return O;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var r = n(913527),
        u = n.n(r),
        l = n(442837),
        a = n(481060),
        o = n(211739),
        c = n(87051),
        s = n(496729),
        d = n(777861),
        f = n(9156),
        N = n(621600),
        E = n(933557),
        m = n(981631),
        _ = n(969943),
        g = n(388032);
      let O = () => [
          { value: _.Oe.MINUTES_15, label: g.intl.string(g.t["8ot6go"]) },
          { value: _.Oe.HOURS_1, label: g.intl.string(g.t.UMWBZm) },
          { value: _.Oe.HOURS_3, label: g.intl.string(g.t.QmYWtr) },
          { value: _.Oe.HOURS_8, label: g.intl.string(g.t.EpAXPD) },
          { value: _.Oe.HOURS_24, label: g.intl.string(g.t["755t4u"]) },
          { value: _.Oe.ALWAYS, label: g.intl.string(g.t.r3LawM) },
        ],
        A = (t) => {
          let e = t > 0 ? u()().add(t, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: t, end_time: e },
          };
        };
      function p(t, e) {
        let [n, r] = (0, l.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(t.guild_id, t.id),
            f.ZP.getChannelMuteConfig(t.guild_id, t.id),
          ]),
          u = (0, d.U)(r),
          _ = (0, E.ZP)(t, !0);
        function p(e) {
          e && t.type === m.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            c.Z.updateChannelOverrideSettings(
              t.guild_id,
              t.id,
              { muted: e },
              N.UE.muted(e),
            );
        }
        let R = g.intl.string(g.t.tbeRRE),
          S = g.intl.string(g.t.OYefmZ);
        switch (t.type) {
          case m.d4z.GUILD_CATEGORY:
            (R = g.intl.string(g.t.pNMCg4)), (S = g.intl.string(g.t.olaBeH));
            break;
          case m.d4z.GROUP_DM:
            (R = g.intl.string(g.t.LO3kaG)), (S = g.intl.string(g.t["s5/5fn"]));
            break;
          case m.d4z.DM:
            (R = g.intl.format(g.t.byjuJi, { name: _ })),
              (S = g.intl.format(g.t["eC+9rq"], { name: _ }));
            break;
          default:
            (R = g.intl.string(g.t.tbeRRE)), (S = g.intl.string(g.t.OYefmZ));
        }
        return n
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: S,
              subtext: u,
              action: () => p(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: R,
              action: () => {
                p(!0),
                  (0, s.s)({
                    channelId: t.id,
                    location: "channel_context_menu",
                  });
              },
              children: O().map((n) => {
                let { value: r, label: u } = n;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(r),
                    label: u,
                    action: () =>
                      (function (n) {
                        t.type === m.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                        let i = A(n);
                        c.Z.updateChannelOverrideSettings(
                          t.guild_id,
                          t.id,
                          i,
                          N.ZB.Muted,
                          e,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    858822: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return E;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(913527),
        u = n.n(r),
        l = n(442837),
        a = n(481060),
        o = n(87051),
        c = n(776568),
        s = n(777861),
        d = n(9156),
        f = n(621600),
        N = n(388032);
      function E(t, e) {
        let n = null == t ? void 0 : t.id,
          { muted: r, muteConfig: E } = (0, l.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          m = (0, s.U)(E);
        return null == n
          ? null
          : r
            ? (0, i.jsx)(a.MenuItem, {
                id: "unmute-guild",
                label: N.intl.string(N.t.De0BTE),
                subtext: m,
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "mute-guild",
                label: N.intl.string(N.t.vRzp7O),
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.ZB.Muted,
                  ),
                children: (0, c.k)().map((t) => {
                  let { value: r, label: l } = t;
                  return (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "".concat(r),
                      label: l,
                      action: () =>
                        (function (t) {
                          if (null == n) return;
                          let i =
                            t > 0 ? u()().add(t, "second").toISOString() : null;
                          o.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: t,
                                end_time: i,
                              },
                            },
                            f.ZB.Muted,
                            e,
                          );
                        })(r),
                    },
                    r,
                  );
                }),
              });
      }
    },
    97797: function (t, e, n) {
      n.d(e, {
        i: function () {
          return u;
        },
      });
      var i = n(981631),
        r = n(388032);
      function u(t) {
        let {
          username: e,
          usernameOnClickHandler: n = i.dG4,
          productName: u,
        } = t;
        return r.intl.formatToParts(r.t.w4iXs7, {
          username: e,
          usernameHook: n,
          productName: u,
        });
      }
    },
    423589: function (t, e, n) {
      n.d(e, {
        Mn: function () {
          return _;
        },
        OD: function () {
          return m;
        },
        W9: function () {
          return N;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        r = n(798140),
        u = n(9156),
        l = n(630388),
        a = n(709054),
        o = n(312400),
        c = n(981631),
        s = n(969943),
        d = n(526761),
        f = n(388032);
      function N() {
        return [
          { label: f.intl.string(f.t["8ot6go"]), value: s.Oe.MINUTES_15 },
          { label: f.intl.string(f.t.UMWBZm), value: s.Oe.HOURS_1 },
          { label: f.intl.string(f.t.QmYWtr), value: s.Oe.HOURS_3 },
          { label: f.intl.string(f.t.EpAXPD), value: s.Oe.HOURS_8 },
          { label: f.intl.string(f.t["755t4u"]), value: s.Oe.HOURS_24 },
          { label: f.intl.string(f.t.r3LawM), value: s.Oe.ALWAYS },
        ];
      }
      let E = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function m(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
        return a.default.keys(t).filter((n) => {
          var i, u;
          let a = t[n].message_notifications !== c.bL.NULL,
            o =
              l.yE(
                null !== (i = t[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              l.yE(
                null !== (u = t[n].flags) && void 0 !== u ? u : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!e.ignoreUnreadSetting && o) ||
            (!e.ignoreNotificationSetting && a) ||
            (!e.ignoreMute && (0, r.m$)(t[n]))
          );
        });
      }
      function _(t) {
        let e = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 })
            .enabled && e
        );
      }
    },
    499401: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return r;
        },
      });
      var i = n(388032);
      function r(t) {
        let { application: e, username: n, usernameOnClick: r } = t;
        return null != e
          ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: n,
              applicationName: e.name,
              usernameOnClick: r,
            })
          : i.intl.formatToParts(i.t.PUJtgo, {
              username: n,
              usernameOnClick: r,
            });
      }
    },
    693912: function (t, e, n) {
      n.d(e, {
        B2: function () {
          return o;
        },
        DS: function () {
          return l;
        },
        hj: function () {
          return c;
        },
        nh: function () {
          return a;
        },
      });
      var i = n(63063),
        r = n(981631),
        u = n(388032);
      function l(t) {
        let {
          application: e,
          username: n,
          usernameHook: l = r.dG4,
          applicationNameHook: a = r.dG4,
        } = t;
        return null != e
          ? u.intl.format(u.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t["+6V2sb"], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(t) {
        let {
          application: e,
          username: n,
          usernameHook: l = r.dG4,
          applicationNameHook: a = r.dG4,
        } = t;
        return null != e
          ? u.intl.format(u.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t.sAX6rq, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function o(t) {
        let {
          application: e,
          username: n,
          usernameOnClick: l,
          applicationNameOnClick: a,
          medium: o,
        } = t;
        return null != e
          ? u.intl.formatToParts(u.t["8r+Z+P"], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t.ojysqa, {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function c(t) {
        let {
          application: e,
          username: n,
          usernameOnClick: l,
          applicationNameOnClick: a,
          medium: o,
        } = t;
        return null != e
          ? u.intl.formatToParts(u.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t["x2CN/f"], {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    305587: function (t, e, n) {
      n.d(e, {
        Xs: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
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
      function r(t) {
        let { enabled: e } = i.getCurrentConfig(
          { location: t },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    496729: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return d;
        },
        s: function () {
          return s;
        },
      });
      var i = n(200651),
        r = n(704215),
        u = n(481060),
        l = n(570140),
        a = n(605236),
        o = n(592125),
        c = n(305587);
      function s(t) {
        let { channelId: e, location: n } = t,
          i = o.Z.getChannel(e),
          u = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !u)
          (0, c.Xs)(n) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function d() {
        (0, u.openModalLazy)(async () => {
          let { default: t } = await n.e("87995").then(n.bind(n, 180970));
          return (e) => (0, i.jsx)(t, { ...e });
        });
      }
    },
    723170: function (t, e, n) {
      n.d(e, {
        B: function () {
          return d;
        },
        J: function () {
          return s;
        },
      }),
        n(789020);
      var i = n(442837),
        r = n(592125),
        u = n(9156),
        l = n(630388),
        a = n(569471),
        o = n(124368),
        c = n(981631);
      function s(t) {
        let e = a.Z.flags(t.id);
        if (null == e) return o.iN.NO_MESSAGES;
        if ((0, l.yE)(e, o.iN.ALL_MESSAGES)) return o.iN.ALL_MESSAGES;
        if ((0, l.yE)(e, o.iN.ONLY_MENTIONS)) return o.iN.ONLY_MENTIONS;
        if ((0, l.yE)(e, o.iN.NO_MESSAGES)) return o.iN.NO_MESSAGES;
        let n = r.Z.getChannel(t.parent_id);
        if (null == n || u.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id))
          return o.iN.NO_MESSAGES;
        let i = u.ZP.resolvedMessageNotifications(n);
        return i === c.bL.NO_MESSAGES
          ? o.iN.NO_MESSAGES
          : i === c.bL.ONLY_MENTIONS
            ? o.iN.ONLY_MENTIONS
            : o.iN.ALL_MESSAGES;
      }
      function d(t) {
        return (0, i.e7)([a.Z, u.ZP, r.Z], () => s(t), [t]);
      }
    },
    352736: function (t, e, n) {
      var i,
        r,
        u = n(25209),
        l = n(97797),
        a = n(35125),
        o = n(786761),
        c = n(739566),
        s = n(499401),
        d = n(693912),
        f = n(23750),
        N = n(314897),
        E = n(592125),
        m = n(430824),
        _ = n(594174),
        g = n(5192),
        O = n(709054),
        A = n(981631),
        p = n(388032);
      let R = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((i = r || (r = {})).NORMAL = "NORMAL"), (i.CLAN = "CLAN");
      let S = () => [
          p.t["0cuj7u"],
          p.t["MuW+CA"],
          p.t.osqpHR,
          p.t["5ToSh4"],
          p.t.JEB8pq,
          p.t.pkOV5e,
          p.t.kRb1Jy,
          p.t.EmKLY2,
          p.t.rPtBnZ,
          p.t["5B/ekZ"],
          p.t.ESNC3d,
          p.t["Iw6d8/"],
          p.t.WecSZ2,
        ],
        T = () => [
          p.t.Jm6e09,
          p.t.MGRnRU,
          p.t.EXOEGh,
          p.t["5uCTFB"],
          p.t.rl45Qk,
          p.t.Bh9zpa,
          p.t.RdEy1N,
          p.t.qcdp09,
          p.t.F7w2Rk,
          p.t.gSyOgI,
          p.t.uYgqv7,
          p.t["b/1SBQ"],
          p.t.LhebZG,
        ],
        I = () => [
          p.t["20E/ys"],
          p.t["oa8+kp"],
          p.t.zoKkXl,
          p.t.FP9aS0,
          p.t.E5Zj1d,
          p.t["6Anmws"],
          p.t.sR78HR,
          p.t.gA9qPz,
          p.t.Hkiyp6,
          p.t.w1HMho,
        ],
        C = () => [
          p.t["8fy3DQ"],
          p.t.UproUV,
          p.t["7l3EyM"],
          p.t.GToyaG,
          p.t["DUs+Zm"],
          p.t.yLkbfn,
          p.t.oWdvws,
          p.t.tOoKTE,
          p.t["VM7+Oj"],
          p.t["hJx/u7"],
        ],
        L = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return S();
            case "CLAN":
              return I();
          }
        },
        h = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return T();
            case "CLAN":
              return C();
          }
        };
      function G(t, e) {
        let n = h(e),
          i = O.default.extractTimestamp(t) % n.length;
        return n[i];
      }
      function M(t) {
        return (0, u.Rp)(
          p.intl.formatToParts(p.t["ihxM9/"], {
            username: t,
            usernameOnClick: A.dG4,
          }),
        );
      }
      function P(t, e) {
        let n = E.Z.getChannel(e);
        return null == n || null == m.Z.getGuild(n.getGuildId())
          ? M(t)
          : (0, u.Rp)(
              p.intl.formatToParts(p.t["ihxM9/"], {
                username: t,
                usernameOnClick: A.dG4,
              }),
            );
      }
      function Z(t) {
        var e;
        return (
          null === (e = m.Z.getGuild(t)) || void 0 === e
            ? void 0
            : e.hasFeature(A.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      e.Z = {
        stringify: function (t, e) {
          var n, i, r, O;
          let R = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            S =
              null != R && "string" != typeof R
                ? _.default.getUser(R.id)
                : void 0,
            T = t.channel_id,
            I = g.ZP.getName(null, T, t.author);
          switch (t.type) {
            case A.uaV.RECIPIENT_ADD:
              if (null == S) return;
              return (0, u.Rp)(
                p.intl.formatToParts(p.t["7/Xl0d"], {
                  username: I,
                  usernameOnClick: A.dG4,
                  otherUsername: g.ZP.getName(null, T, S),
                  otherUsernameOnClick: A.dG4,
                }),
              );
            case A.uaV.RECIPIENT_REMOVE:
              if (null == S) return;
              let C = t.author;
              if (null == C || C.id === S.id)
                return (0, u.Rp)(
                  p.intl.formatToParts(p.t["Qn5+LS"], {
                    username: I,
                    usernameOnClick: A.dG4,
                  }),
                );
              return (0, u.Rp)(
                p.intl.formatToParts(p.t.QtZ0RE, {
                  username: I,
                  usernameOnClick: A.dG4,
                  otherUsername: g.ZP.getName(null, T, S),
                  otherUsernameOnClick: A.dG4,
                }),
              );
            case A.uaV.CALL:
              let { call: L } = t;
              if (null != L && -1 === L.participants.indexOf(N.default.getId()))
                return (0, u.Rp)(
                  p.intl.formatToParts(p.t.DbgSAw, {
                    username: I,
                    usernameOnClick: A.dG4,
                  }),
                );
              return;
            case A.uaV.CHANNEL_NAME_CHANGE:
              return (0, u.Rp)(
                p.intl.formatToParts(
                  e.isForumPost() ? p.t["qa0e/v"] : p.t.XCPMEB,
                  {
                    username: I,
                    usernameOnClick: A.dG4,
                    channelName: t.content,
                  },
                ),
              );
            case A.uaV.CHANNEL_ICON_CHANGE:
              return (0, u.Rp)(
                p.intl.formatToParts(p.t.wypJZ2, {
                  username: I,
                  usernameOnClick: A.dG4,
                }),
              );
            case A.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, u.Rp)(
                p.intl.formatToParts(p.t["/M60j4"], {
                  username: I,
                  usernameOnClick: A.dG4,
                }),
              );
            case A.uaV.USER_JOIN:
              let h = Z(e.guild_id);
              return (0, u.Rp)(
                p.intl.formatToParts(G(t.id, h), {
                  username: I,
                  usernameOnClick: A.dG4,
                }),
              );
            case A.uaV.GUILD_BOOST:
              return M(I);
            case A.uaV.GUILD_BOOST_TIER_1:
            case A.uaV.GUILD_BOOST_TIER_2:
            case A.uaV.GUILD_BOOST_TIER_3:
              return P(I, T);
            case A.uaV.GUILD_INVITE_REMINDER:
              return p.intl.string(p.t.gxyKvr);
            case A.uaV.THREAD_STARTER_MESSAGE:
              return p.intl.formatToPlainString(p.t["B8H+Cg"], {
                username: I,
                threadName: e.name,
              });
            case A.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (t instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, a.vp)({
                  username: I,
                  guildId: e.guild_id,
                  roleSubscriptionData: t.role_subscription_data,
                }),
              );
            case A.uaV.PURCHASE_NOTIFICATION:
              if (
                t instanceof f.ZP ||
                (null === (r = t.purchase_notification) || void 0 === r
                  ? void 0
                  : null === (i = r.guild_product_purchase) || void 0 === i
                    ? void 0
                    : i.product_name) == null
              )
                return null;
              return (0, u.Rp)(
                (0, l.i)({
                  username: I,
                  productName:
                    t.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case A.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (t instanceof f.ZP) return null;
              let U = (0, c.ZH)((0, o.e5)(t));
              return (0, u.Rp)(
                (0, s.Y)({ application: t.application, username: U.nick }),
              );
            case A.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (t instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, d.B2)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case A.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (t instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, d.hj)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case A.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (O = t.embeds) || void 0 === O
                  ? void 0
                  : O.some((t) => {
                      let { type: e } = t;
                      return e === A.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (t) {
                  let e = E.Z.getChannel(t);
                  if (null == e) return null;
                  let n = m.Z.getGuild(e.getGuildId());
                  return null == n
                    ? null
                    : (0, u.Rp)(
                        p.intl.formatToParts(p.t["a+lJKi"], {
                          guildName: n.name,
                        }),
                      );
                })(T);
              return t.content;
            case A.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (t, e, n) {
                let i = E.Z.getChannel(e);
                if (null == i) return null;
                let r = m.Z.getGuild(i.getGuildId());
                return null == r
                  ? null
                  : (0, u.Rp)(
                      p.intl.formatToParts(p.t.iOuWPj, {
                        username: t,
                        guildName: r.name,
                        time:
                          "" !== n
                            ? new Date(n).toLocaleString(p.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(I, T, t.content);
            case A.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (t, e) {
                let n = E.Z.getChannel(e);
                if (null == n) return null;
                let i = m.Z.getGuild(n.getGuildId());
                return null == i
                  ? null
                  : (0, u.Rp)(
                      p.intl.formatToParts(p.t.axmbpq, {
                        username: t,
                        guildName: i.name,
                      }),
                    );
              })(I, T);
            default:
              return t.content;
          }
        },
        getSystemMessageUserJoin: function (t, e) {
          let n = L(e),
            i = O.default.extractTimestamp(t) % n.length;
          return n[i];
        },
        getSystemMessageUserJoinMobile: G,
        getSystemMessageBotJoin: function (t) {
          return null == R[t]
            ? null
            : p.intl.format(p.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(R[t]) },
              });
        },
        getWelcomeMessageKind: Z,
      };
    },
  },
]);
//# sourceMappingURL=b217e25cc635816e9f2c.js.map
