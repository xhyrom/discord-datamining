"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62927"],
  {
    211739: function (t, e, n) {
      n.d(e, {
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
      var i = n(570140);
      function r(t) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: t });
      }
      function l(t) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: t });
      }
      function u(t) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: t });
      }
      function a(t) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: t });
      }
    },
    776568: function (t, e, n) {
      n.d(e, {
        ZP: function () {
          return R;
        },
        k: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var r = n(913527),
        l = n.n(r),
        u = n(442837),
        a = n(481060),
        o = n(211739),
        c = n(87051),
        s = n(496729),
        d = n(777861),
        f = n(9156),
        m = n(621600),
        _ = n(933557),
        E = n(981631),
        N = n(969943),
        g = n(388032);
      let p = () => [
          { value: N.Oe.MINUTES_15, label: g.intl.string(g.t["8ot6go"]) },
          { value: N.Oe.HOURS_1, label: g.intl.string(g.t.UMWBZm) },
          { value: N.Oe.HOURS_3, label: g.intl.string(g.t.QmYWtr) },
          { value: N.Oe.HOURS_8, label: g.intl.string(g.t.EpAXPD) },
          { value: N.Oe.HOURS_24, label: g.intl.string(g.t["755t4u"]) },
          { value: N.Oe.ALWAYS, label: g.intl.string(g.t.r3LawM) },
        ],
        O = (t) => {
          let e = t > 0 ? l()().add(t, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: t, end_time: e },
          };
        };
      function R(t, e) {
        let [n, r] = (0, u.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(t.guild_id, t.id),
            f.ZP.getChannelMuteConfig(t.guild_id, t.id),
          ]),
          l = (0, d.U)(r),
          N = (0, _.ZP)(t, !0);
        function R(e) {
          e && t.type === E.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            c.Z.updateChannelOverrideSettings(
              t.guild_id,
              t.id,
              { muted: e },
              m.UE.muted(e),
            );
        }
        let A = g.intl.string(g.t.tbeRRE),
          T = g.intl.string(g.t.OYefmZ);
        switch (t.type) {
          case E.d4z.GUILD_CATEGORY:
            (A = g.intl.string(g.t.pNMCg4)), (T = g.intl.string(g.t.olaBeH));
            break;
          case E.d4z.GROUP_DM:
            (A = g.intl.string(g.t.LO3kaG)), (T = g.intl.string(g.t["s5/5fn"]));
            break;
          case E.d4z.DM:
            (A = g.intl.format(g.t.byjuJi, { name: N })),
              (T = g.intl.format(g.t["eC+9rq"], { name: N }));
            break;
          default:
            (A = g.intl.string(g.t.tbeRRE)), (T = g.intl.string(g.t.OYefmZ));
        }
        return n
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: T,
              subtext: l,
              action: () => R(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: A,
              action: () => {
                R(!0),
                  (0, s.s)({
                    channelId: t.id,
                    location: "channel_context_menu",
                  });
              },
              children: p().map((n) => {
                let { value: r, label: l } = n;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(r),
                    label: l,
                    action: () =>
                      (function (n) {
                        t.type === E.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                        let i = O(n);
                        c.Z.updateChannelOverrideSettings(
                          t.guild_id,
                          t.id,
                          i,
                          m.ZB.Muted,
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
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(913527),
        l = n.n(r),
        u = n(442837),
        a = n(481060),
        o = n(87051),
        c = n(776568),
        s = n(777861),
        d = n(9156),
        f = n(621600),
        m = n(388032);
      function _(t, e) {
        let n = null == t ? void 0 : t.id,
          { muted: r, muteConfig: _ } = (0, u.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          E = (0, s.U)(_);
        return null == n
          ? null
          : r
            ? (0, i.jsx)(a.MenuItem, {
                id: "unmute-guild",
                label: m.intl.string(m.t.De0BTE),
                subtext: E,
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "mute-guild",
                label: m.intl.string(m.t.vRzp7O),
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.ZB.Muted,
                  ),
                children: (0, c.k)().map((t) => {
                  let { value: r, label: u } = t;
                  return (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "".concat(r),
                      label: u,
                      action: () =>
                        (function (t) {
                          if (null == n) return;
                          let i =
                            t > 0 ? l()().add(t, "second").toISOString() : null;
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
          return l;
        },
      });
      var i = n(981631),
        r = n(388032);
      function l(t) {
        let {
          username: e,
          usernameOnClickHandler: n = i.dG4,
          productName: l,
        } = t;
        return r.intl.formatToParts(r.t.w4iXs7, {
          username: e,
          usernameHook: n,
          productName: l,
        });
      }
    },
    423589: function (t, e, n) {
      n.d(e, {
        Mn: function () {
          return N;
        },
        OD: function () {
          return E;
        },
        W9: function () {
          return m;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        r = n(798140),
        l = n(9156),
        u = n(630388),
        a = n(709054),
        o = n(312400),
        c = n(981631),
        s = n(969943),
        d = n(526761),
        f = n(388032);
      function m() {
        return [
          { label: f.intl.string(f.t["8ot6go"]), value: s.Oe.MINUTES_15 },
          { label: f.intl.string(f.t.UMWBZm), value: s.Oe.HOURS_1 },
          { label: f.intl.string(f.t.QmYWtr), value: s.Oe.HOURS_3 },
          { label: f.intl.string(f.t.EpAXPD), value: s.Oe.HOURS_8 },
          { label: f.intl.string(f.t["755t4u"]), value: s.Oe.HOURS_24 },
          { label: f.intl.string(f.t.r3LawM), value: s.Oe.ALWAYS },
        ];
      }
      let _ = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function E(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
        return a.default.keys(t).filter((n) => {
          var i, l;
          let a = t[n].message_notifications !== c.bL.NULL,
            o =
              u.yE(
                null !== (i = t[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              u.yE(
                null !== (l = t[n].flags) && void 0 !== l ? l : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!e.ignoreUnreadSetting && o) ||
            (!e.ignoreNotificationSetting && a) ||
            (!e.ignoreMute && (0, r.m$)(t[n]))
          );
        });
      }
      function N(t) {
        let e = (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
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
          return u;
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
        l = n(388032);
      function u(t) {
        let {
          application: e,
          username: n,
          usernameHook: u = r.dG4,
          applicationNameHook: a = r.dG4,
        } = t;
        return null != e
          ? l.intl.format(l.t.J8SaGx, {
              username: n,
              otherUsername: e.name,
              usernameHook: u,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : l.intl.format(l.t["+6V2sb"], {
              username: n,
              usernameHook: u,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(t) {
        let {
          application: e,
          username: n,
          usernameHook: u = r.dG4,
          applicationNameHook: a = r.dG4,
        } = t;
        return null != e
          ? l.intl.format(l.t.eGCDam, {
              username: n,
              otherUsername: e.name,
              usernameHook: u,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : l.intl.format(l.t.sAX6rq, {
              username: n,
              usernameHook: u,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function o(t) {
        let {
          application: e,
          username: n,
          usernameOnClick: u,
          applicationNameOnClick: a,
          medium: o,
        } = t;
        return null != e
          ? l.intl.formatToParts(l.t["8r+Z+P"], {
              username: n,
              otherUsername: e.name,
              usernameOnClick: u,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : l.intl.formatToParts(l.t.ojysqa, {
              username: n,
              usernameOnClick: u,
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
          usernameOnClick: u,
          applicationNameOnClick: a,
          medium: o,
        } = t;
        return null != e
          ? l.intl.formatToParts(l.t.zmc0mp, {
              username: n,
              otherUsername: e.name,
              usernameOnClick: u,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : l.intl.formatToParts(l.t["x2CN/f"], {
              username: n,
              usernameOnClick: u,
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
        l = n(481060),
        u = n(570140),
        a = n(605236),
        o = n(592125),
        c = n(305587);
      function s(t) {
        let { channelId: e, location: n } = t,
          i = o.Z.getChannel(e),
          l = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !l)
          (0, c.Xs)(n) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function d() {
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.e("87995").then(n.bind(n, 180970));
          return (e) => (0, i.jsx)(t, { ...e });
        });
      }
    },
    352736: function (t, e, n) {
      var i,
        r,
        l = n(25209),
        u = n(97797),
        a = n(35125),
        o = n(786761),
        c = n(739566),
        s = n(499401),
        d = n(693912),
        f = n(23750),
        m = n(314897),
        _ = n(592125),
        E = n(430824),
        N = n(594174),
        g = n(5192),
        p = n(709054),
        O = n(981631),
        R = n(388032);
      let A = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((i = r || (r = {})).NORMAL = "NORMAL"), (i.CLAN = "CLAN");
      let T = () => [
          R.t["0cuj7u"],
          R.t["MuW+CA"],
          R.t.osqpHR,
          R.t["5ToSh4"],
          R.t.JEB8pq,
          R.t.pkOV5e,
          R.t.kRb1Jy,
          R.t.EmKLY2,
          R.t.rPtBnZ,
          R.t["5B/ekZ"],
          R.t.ESNC3d,
          R.t["Iw6d8/"],
          R.t.WecSZ2,
        ],
        C = () => [
          R.t.Jm6e09,
          R.t.MGRnRU,
          R.t.EXOEGh,
          R.t["5uCTFB"],
          R.t.rl45Qk,
          R.t.Bh9zpa,
          R.t.RdEy1N,
          R.t.qcdp09,
          R.t.F7w2Rk,
          R.t.gSyOgI,
          R.t.uYgqv7,
          R.t["b/1SBQ"],
          R.t.LhebZG,
        ],
        I = () => [
          R.t["20E/ys"],
          R.t["oa8+kp"],
          R.t.zoKkXl,
          R.t.FP9aS0,
          R.t.E5Zj1d,
          R.t["6Anmws"],
          R.t.sR78HR,
          R.t.gA9qPz,
          R.t.Hkiyp6,
          R.t.w1HMho,
        ],
        h = () => [
          R.t["8fy3DQ"],
          R.t.UproUV,
          R.t["7l3EyM"],
          R.t.GToyaG,
          R.t["DUs+Zm"],
          R.t.yLkbfn,
          R.t.oWdvws,
          R.t.tOoKTE,
          R.t["VM7+Oj"],
          R.t["hJx/u7"],
        ],
        L = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return T();
            case "CLAN":
              return I();
          }
        },
        S = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return C();
            case "CLAN":
              return h();
          }
        };
      function P(t, e) {
        let n = S(e),
          i = p.default.extractTimestamp(t) % n.length;
        return n[i];
      }
      function U(t) {
        return (0, l.Rp)(
          R.intl.formatToParts(R.t["ihxM9/"], {
            username: t,
            usernameOnClick: O.dG4,
          }),
        );
      }
      function G(t, e) {
        let n = _.Z.getChannel(e);
        return null == n || null == E.Z.getGuild(n.getGuildId())
          ? U(t)
          : (0, l.Rp)(
              R.intl.formatToParts(R.t["ihxM9/"], {
                username: t,
                usernameOnClick: O.dG4,
              }),
            );
      }
      function Z(t) {
        var e;
        return (
          null === (e = E.Z.getGuild(t)) || void 0 === e
            ? void 0
            : e.hasFeature(O.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      e.Z = {
        stringify: function (t, e) {
          var n, i, r, p;
          let A = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            T =
              null != A && "string" != typeof A
                ? N.default.getUser(A.id)
                : void 0,
            C = t.channel_id,
            I = g.ZP.getName(null, C, t.author);
          switch (t.type) {
            case O.uaV.RECIPIENT_ADD:
              if (null == T) return;
              return (0, l.Rp)(
                R.intl.formatToParts(R.t["7/Xl0d"], {
                  username: I,
                  usernameOnClick: O.dG4,
                  otherUsername: g.ZP.getName(null, C, T),
                  otherUsernameOnClick: O.dG4,
                }),
              );
            case O.uaV.RECIPIENT_REMOVE:
              if (null == T) return;
              let h = t.author;
              if (null == h || h.id === T.id)
                return (0, l.Rp)(
                  R.intl.formatToParts(R.t["Qn5+LS"], {
                    username: I,
                    usernameOnClick: O.dG4,
                  }),
                );
              return (0, l.Rp)(
                R.intl.formatToParts(R.t.QtZ0RE, {
                  username: I,
                  usernameOnClick: O.dG4,
                  otherUsername: g.ZP.getName(null, C, T),
                  otherUsernameOnClick: O.dG4,
                }),
              );
            case O.uaV.CALL:
              let { call: L } = t;
              if (null != L && -1 === L.participants.indexOf(m.default.getId()))
                return (0, l.Rp)(
                  R.intl.formatToParts(R.t.DbgSAw, {
                    username: I,
                    usernameOnClick: O.dG4,
                  }),
                );
              return;
            case O.uaV.CHANNEL_NAME_CHANGE:
              return (0, l.Rp)(
                R.intl.formatToParts(
                  e.isForumPost() ? R.t["qa0e/v"] : R.t.XCPMEB,
                  {
                    username: I,
                    usernameOnClick: O.dG4,
                    channelName: t.content,
                  },
                ),
              );
            case O.uaV.CHANNEL_ICON_CHANGE:
              return (0, l.Rp)(
                R.intl.formatToParts(R.t.wypJZ2, {
                  username: I,
                  usernameOnClick: O.dG4,
                }),
              );
            case O.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, l.Rp)(
                R.intl.formatToParts(R.t["/M60j4"], {
                  username: I,
                  usernameOnClick: O.dG4,
                }),
              );
            case O.uaV.USER_JOIN:
              let S = Z(e.guild_id);
              return (0, l.Rp)(
                R.intl.formatToParts(P(t.id, S), {
                  username: I,
                  usernameOnClick: O.dG4,
                }),
              );
            case O.uaV.GUILD_BOOST:
              return U(I);
            case O.uaV.GUILD_BOOST_TIER_1:
            case O.uaV.GUILD_BOOST_TIER_2:
            case O.uaV.GUILD_BOOST_TIER_3:
              return G(I, C);
            case O.uaV.GUILD_INVITE_REMINDER:
              return R.intl.string(R.t.gxyKvr);
            case O.uaV.THREAD_STARTER_MESSAGE:
              return R.intl.formatToPlainString(R.t["B8H+Cg"], {
                username: I,
                threadName: e.name,
              });
            case O.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (t instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, a.vp)({
                  username: I,
                  guildId: e.guild_id,
                  roleSubscriptionData: t.role_subscription_data,
                }),
              );
            case O.uaV.PURCHASE_NOTIFICATION:
              if (
                t instanceof f.ZP ||
                (null === (r = t.purchase_notification) || void 0 === r
                  ? void 0
                  : null === (i = r.guild_product_purchase) || void 0 === i
                    ? void 0
                    : i.product_name) == null
              )
                return null;
              return (0, l.Rp)(
                (0, u.i)({
                  username: I,
                  productName:
                    t.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case O.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (t instanceof f.ZP) return null;
              let M = (0, c.ZH)((0, o.e5)(t));
              return (0, l.Rp)(
                (0, s.Y)({ application: t.application, username: M.nick }),
              );
            case O.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (t instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, d.B2)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case O.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (t instanceof f.ZP) return null;
              return (0, l.Rp)(
                (0, d.hj)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case O.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (p = t.embeds) || void 0 === p
                  ? void 0
                  : p.some((t) => {
                      let { type: e } = t;
                      return e === O.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (t) {
                  let e = _.Z.getChannel(t);
                  if (null == e) return null;
                  let n = E.Z.getGuild(e.getGuildId());
                  return null == n
                    ? null
                    : (0, l.Rp)(
                        R.intl.formatToParts(R.t["a+lJKi"], {
                          guildName: n.name,
                        }),
                      );
                })(C);
              return t.content;
            case O.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (t, e, n) {
                let i = _.Z.getChannel(e);
                if (null == i) return null;
                let r = E.Z.getGuild(i.getGuildId());
                return null == r
                  ? null
                  : (0, l.Rp)(
                      R.intl.formatToParts(R.t.iOuWPj, {
                        username: t,
                        guildName: r.name,
                        time:
                          "" !== n
                            ? new Date(n).toLocaleString(R.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(I, C, t.content);
            case O.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (t, e) {
                let n = _.Z.getChannel(e);
                if (null == n) return null;
                let i = E.Z.getGuild(n.getGuildId());
                return null == i
                  ? null
                  : (0, l.Rp)(
                      R.intl.formatToParts(R.t.axmbpq, {
                        username: t,
                        guildName: i.name,
                      }),
                    );
              })(I, C);
            default:
              return t.content;
          }
        },
        getSystemMessageUserJoin: function (t, e) {
          let n = L(e),
            i = p.default.extractTimestamp(t) % n.length;
          return n[i];
        },
        getSystemMessageUserJoinMobile: P,
        getSystemMessageBotJoin: function (t) {
          return null == A[t]
            ? null
            : R.intl.format(R.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(A[t]) },
              });
        },
        getWelcomeMessageKind: Z,
      };
    },
  },
]);
//# sourceMappingURL=996a20d780eea038b8d9.js.map
