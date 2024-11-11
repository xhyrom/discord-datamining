"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5456"],
  {
    211739: function (t, n, e) {
      e.d(n, {
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
      var i = e(570140);
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
    776568: function (t, n, e) {
      e.d(n, {
        ZP: function () {
          return S;
        },
        k: function () {
          return A;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(913527),
        u = e.n(r),
        l = e(442837),
        a = e(481060),
        o = e(211739),
        c = e(87051),
        s = e(496729),
        d = e(777861),
        f = e(9156),
        N = e(621600),
        E = e(933557),
        _ = e(981631),
        m = e(969943),
        O = e(388032);
      let A = () => [
          { value: m.Oe.MINUTES_15, label: O.intl.string(O.t["8ot6go"]) },
          { value: m.Oe.HOURS_1, label: O.intl.string(O.t.UMWBZm) },
          { value: m.Oe.HOURS_3, label: O.intl.string(O.t.QmYWtr) },
          { value: m.Oe.HOURS_8, label: O.intl.string(O.t.EpAXPD) },
          { value: m.Oe.HOURS_24, label: O.intl.string(O.t["755t4u"]) },
          { value: m.Oe.ALWAYS, label: O.intl.string(O.t.r3LawM) },
        ],
        g = (t) => {
          let n = t > 0 ? u()().add(t, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: t, end_time: n },
          };
        };
      function S(t, n) {
        let [e, r] = (0, l.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(t.guild_id, t.id),
            f.ZP.getChannelMuteConfig(t.guild_id, t.id),
          ]),
          u = (0, d.U)(r),
          m = (0, E.ZP)(t, !0);
        function S(n) {
          n && t.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            c.Z.updateChannelOverrideSettings(
              t.guild_id,
              t.id,
              { muted: n },
              N.UE.muted(n),
            );
        }
        let p = O.intl.string(O.t.tbeRRE),
          R = O.intl.string(O.t.OYefmZ);
        switch (t.type) {
          case _.d4z.GUILD_CATEGORY:
            (p = O.intl.string(O.t.pNMCg4)), (R = O.intl.string(O.t.olaBeH));
            break;
          case _.d4z.GROUP_DM:
            (p = O.intl.string(O.t.LO3kaG)), (R = O.intl.string(O.t["s5/5fn"]));
            break;
          case _.d4z.DM:
            (p = O.intl.format(O.t.byjuJi, { name: m })),
              (R = O.intl.format(O.t["eC+9rq"], { name: m }));
            break;
          default:
            (p = O.intl.string(O.t.tbeRRE)), (R = O.intl.string(O.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: R,
              subtext: u,
              action: () => S(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: p,
              action: () => {
                S(!0),
                  (0, s.s)({
                    channelId: t.id,
                    location: "channel_context_menu",
                  });
              },
              children: A().map((e) => {
                let { value: r, label: u } = e;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(r),
                    label: u,
                    action: () =>
                      (function (e) {
                        t.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                        let i = g(e);
                        c.Z.updateChannelOverrideSettings(
                          t.guild_id,
                          t.id,
                          i,
                          N.ZB.Muted,
                          n,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    858822: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return E;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(913527),
        u = e.n(r),
        l = e(442837),
        a = e(481060),
        o = e(87051),
        c = e(776568),
        s = e(777861),
        d = e(9156),
        f = e(621600),
        N = e(388032);
      function E(t, n) {
        let e = null == t ? void 0 : t.id,
          { muted: r, muteConfig: E } = (0, l.cj)(
            [d.ZP],
            () => ({
              muted: null != e ? d.ZP.isMuted(e) : void 0,
              muteConfig: null != e ? d.ZP.getMuteConfig(e) : void 0,
            }),
            [e],
          ),
          _ = (0, s.U)(E);
        return null == e
          ? null
          : r
            ? (0, i.jsx)(a.MenuItem, {
                id: "unmute-guild",
                label: N.intl.string(N.t.De0BTE),
                subtext: _,
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    e,
                    { muted: !1 },
                    f.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "mute-guild",
                label: N.intl.string(N.t.vRzp7O),
                action: () =>
                  o.Z.updateGuildNotificationSettings(
                    e,
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
                          if (null == e) return;
                          let i =
                            t > 0 ? u()().add(t, "second").toISOString() : null;
                          o.Z.updateGuildNotificationSettings(
                            e,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: t,
                                end_time: i,
                              },
                            },
                            f.ZB.Muted,
                            n,
                          );
                        })(r),
                    },
                    r,
                  );
                }),
              });
      }
    },
    97797: function (t, n, e) {
      e.d(n, {
        i: function () {
          return u;
        },
      });
      var i = e(981631),
        r = e(388032);
      function u(t) {
        let {
          username: n,
          usernameOnClickHandler: e = i.dG4,
          productName: u,
        } = t;
        return r.intl.formatToParts(r.t.w4iXs7, {
          username: n,
          usernameHook: e,
          productName: u,
        });
      }
    },
    423589: function (t, n, e) {
      e.d(n, {
        Mn: function () {
          return m;
        },
        OD: function () {
          return _;
        },
        W9: function () {
          return N;
        },
      }),
        e(47120),
        e(789020);
      var i = e(442837),
        r = e(798140),
        u = e(9156),
        l = e(630388),
        a = e(709054),
        o = e(312400),
        c = e(981631),
        s = e(969943),
        d = e(526761),
        f = e(388032);
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
      function _(t) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
        return a.default.keys(t).filter((e) => {
          var i, u;
          let a = t[e].message_notifications !== c.bL.NULL,
            o =
              l.yE(
                null !== (i = t[e].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              l.yE(
                null !== (u = t[e].flags) && void 0 !== u ? u : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && o) ||
            (!n.ignoreNotificationSetting && a) ||
            (!n.ignoreMute && (0, r.m$)(t[e]))
          );
        });
      }
      function m(t) {
        let n = (0, i.e7)([u.ZP], () => u.ZP.useNewNotifications);
        return (
          o.xT.useExperiment({ location: t }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (t, n, e) {
      e.d(n, {
        Q4: function () {
          return u;
        },
        YF: function () {
          return l;
        },
        pq: function () {
          return a;
        },
      });
      var i = e(630388),
        r = e(526761);
      function u(t, n) {
        var e;
        return i.pj(
          ((e = t),
          i.M1(e, r.vc.UNREADS_ALL_MESSAGES, r.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let l = (t) =>
        i.M1(t, r.ic.UNREADS_ALL_MESSAGES, r.ic.UNREADS_ONLY_MENTIONS);
      function a(t, n) {
        return i.pj(l(t), n);
      }
    },
    499401: function (t, n, e) {
      e.d(n, {
        Y: function () {
          return r;
        },
      });
      var i = e(388032);
      function r(t) {
        let { application: n, username: e, usernameOnClick: r } = t;
        return null != n
          ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: e,
              applicationName: n.name,
              usernameOnClick: r,
            })
          : i.intl.formatToParts(i.t.PUJtgo, {
              username: e,
              usernameOnClick: r,
            });
      }
    },
    693912: function (t, n, e) {
      e.d(n, {
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
      var i = e(63063),
        r = e(981631),
        u = e(388032);
      function l(t) {
        let {
          application: n,
          username: e,
          usernameHook: l = r.dG4,
          applicationNameHook: a = r.dG4,
        } = t;
        return null != n
          ? u.intl.format(u.t.J8SaGx, {
              username: e,
              otherUsername: n.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t["+6V2sb"], {
              username: e,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(t) {
        let {
          application: n,
          username: e,
          usernameHook: l = r.dG4,
          applicationNameHook: a = r.dG4,
        } = t;
        return null != n
          ? u.intl.format(u.t.eGCDam, {
              username: e,
              otherUsername: n.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t.sAX6rq, {
              username: e,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function o(t) {
        let {
          application: n,
          username: e,
          usernameOnClick: l,
          applicationNameOnClick: a,
          medium: o,
        } = t;
        return null != n
          ? u.intl.formatToParts(u.t["8r+Z+P"], {
              username: e,
              otherUsername: n.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t.ojysqa, {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function c(t) {
        let {
          application: n,
          username: e,
          usernameOnClick: l,
          applicationNameOnClick: a,
          medium: o,
        } = t;
        return null != n
          ? u.intl.formatToParts(u.t.zmc0mp, {
              username: e,
              otherUsername: n.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t["x2CN/f"], {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    305587: function (t, n, e) {
      e.d(n, {
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
      function r(t) {
        let { enabled: n } = i.getCurrentConfig(
          { location: t },
          { autoTrackExposure: !0 },
        );
        return n;
      }
    },
    496729: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
        s: function () {
          return s;
        },
      });
      var i = e(200651),
        r = e(704215),
        u = e(481060),
        l = e(570140),
        a = e(605236),
        o = e(592125),
        c = e(305587);
      function s(t) {
        let { channelId: n, location: e } = t,
          i = o.Z.getChannel(n),
          u = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !u)
          (0, c.Xs)(e) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function d() {
        (0, u.openModalLazy)(async () => {
          let { default: t } = await e.e("87995").then(e.bind(e, 180970));
          return (n) => (0, i.jsx)(t, { ...n });
        });
      }
    },
    723170: function (t, n, e) {
      e.d(n, {
        B: function () {
          return d;
        },
        J: function () {
          return s;
        },
      }),
        e(789020);
      var i = e(442837),
        r = e(592125),
        u = e(9156),
        l = e(630388),
        a = e(569471),
        o = e(124368),
        c = e(981631);
      function s(t) {
        let n = a.Z.flags(t.id);
        if (null == n) return o.iN.NO_MESSAGES;
        if ((0, l.yE)(n, o.iN.ALL_MESSAGES)) return o.iN.ALL_MESSAGES;
        if ((0, l.yE)(n, o.iN.ONLY_MENTIONS)) return o.iN.ONLY_MENTIONS;
        if ((0, l.yE)(n, o.iN.NO_MESSAGES)) return o.iN.NO_MESSAGES;
        let e = r.Z.getChannel(t.parent_id);
        if (null == e || u.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))
          return o.iN.NO_MESSAGES;
        let i = u.ZP.resolvedMessageNotifications(e);
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
    352736: function (t, n, e) {
      var i,
        r,
        u = e(25209),
        l = e(97797),
        a = e(35125),
        o = e(786761),
        c = e(739566),
        s = e(499401),
        d = e(693912),
        f = e(23750),
        N = e(314897),
        E = e(592125),
        _ = e(430824),
        m = e(594174),
        O = e(5192),
        A = e(709054),
        g = e(981631),
        S = e(388032);
      let p = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((i = r || (r = {})).NORMAL = "NORMAL"), (i.CLAN = "CLAN");
      let R = () => [
          S.t["0cuj7u"],
          S.t["MuW+CA"],
          S.t.osqpHR,
          S.t["5ToSh4"],
          S.t.JEB8pq,
          S.t.pkOV5e,
          S.t.kRb1Jy,
          S.t.EmKLY2,
          S.t.rPtBnZ,
          S.t["5B/ekZ"],
          S.t.ESNC3d,
          S.t["Iw6d8/"],
          S.t.WecSZ2,
        ],
        T = () => [
          S.t.Jm6e09,
          S.t.MGRnRU,
          S.t.EXOEGh,
          S.t["5uCTFB"],
          S.t.rl45Qk,
          S.t.Bh9zpa,
          S.t.RdEy1N,
          S.t.qcdp09,
          S.t.F7w2Rk,
          S.t.gSyOgI,
          S.t.uYgqv7,
          S.t["b/1SBQ"],
          S.t.LhebZG,
        ],
        L = () => [
          S.t["20E/ys"],
          S.t["oa8+kp"],
          S.t.zoKkXl,
          S.t.FP9aS0,
          S.t.E5Zj1d,
          S.t["6Anmws"],
          S.t.sR78HR,
          S.t.gA9qPz,
          S.t.Hkiyp6,
          S.t.w1HMho,
        ],
        I = () => [
          S.t["8fy3DQ"],
          S.t.UproUV,
          S.t["7l3EyM"],
          S.t.GToyaG,
          S.t["DUs+Zm"],
          S.t.yLkbfn,
          S.t.oWdvws,
          S.t.tOoKTE,
          S.t["VM7+Oj"],
          S.t["hJx/u7"],
        ],
        C = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return R();
            case "CLAN":
              return L();
          }
        },
        h = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return T();
            case "CLAN":
              return I();
          }
        };
      function M(t, n) {
        let e = h(n),
          i = A.default.extractTimestamp(t) % e.length;
        return e[i];
      }
      function G(t) {
        return (0, u.Rp)(
          S.intl.formatToParts(S.t["ihxM9/"], {
            username: t,
            usernameOnClick: g.dG4,
          }),
        );
      }
      function P(t, n) {
        let e = E.Z.getChannel(n);
        return null == e || null == _.Z.getGuild(e.getGuildId())
          ? G(t)
          : (0, u.Rp)(
              S.intl.formatToParts(S.t["ihxM9/"], {
                username: t,
                usernameOnClick: g.dG4,
              }),
            );
      }
      function U(t) {
        var n;
        return (
          null === (n = _.Z.getGuild(t)) || void 0 === n
            ? void 0
            : n.hasFeature(g.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      n.Z = {
        stringify: function (t, n) {
          var e, i, r, A;
          let p = null === (e = t.mentions) || void 0 === e ? void 0 : e[0],
            R =
              null != p && "string" != typeof p
                ? m.default.getUser(p.id)
                : void 0,
            T = t.channel_id,
            L = O.ZP.getName(null, T, t.author);
          switch (t.type) {
            case g.uaV.RECIPIENT_ADD:
              if (null == R) return;
              return (0, u.Rp)(
                S.intl.formatToParts(S.t["7/Xl0d"], {
                  username: L,
                  usernameOnClick: g.dG4,
                  otherUsername: O.ZP.getName(null, T, R),
                  otherUsernameOnClick: g.dG4,
                }),
              );
            case g.uaV.RECIPIENT_REMOVE:
              if (null == R) return;
              let I = t.author;
              if (null == I || I.id === R.id)
                return (0, u.Rp)(
                  S.intl.formatToParts(S.t["Qn5+LS"], {
                    username: L,
                    usernameOnClick: g.dG4,
                  }),
                );
              return (0, u.Rp)(
                S.intl.formatToParts(S.t.QtZ0RE, {
                  username: L,
                  usernameOnClick: g.dG4,
                  otherUsername: O.ZP.getName(null, T, R),
                  otherUsernameOnClick: g.dG4,
                }),
              );
            case g.uaV.CALL:
              let { call: C } = t;
              if (null != C && -1 === C.participants.indexOf(N.default.getId()))
                return (0, u.Rp)(
                  S.intl.formatToParts(S.t.DbgSAw, {
                    username: L,
                    usernameOnClick: g.dG4,
                  }),
                );
              return;
            case g.uaV.CHANNEL_NAME_CHANGE:
              return (0, u.Rp)(
                S.intl.formatToParts(
                  n.isForumPost() ? S.t["qa0e/v"] : S.t.XCPMEB,
                  {
                    username: L,
                    usernameOnClick: g.dG4,
                    channelName: t.content,
                  },
                ),
              );
            case g.uaV.CHANNEL_ICON_CHANGE:
              return (0, u.Rp)(
                S.intl.formatToParts(S.t.wypJZ2, {
                  username: L,
                  usernameOnClick: g.dG4,
                }),
              );
            case g.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, u.Rp)(
                S.intl.formatToParts(S.t["/M60j4"], {
                  username: L,
                  usernameOnClick: g.dG4,
                }),
              );
            case g.uaV.USER_JOIN:
              let h = U(n.guild_id);
              return (0, u.Rp)(
                S.intl.formatToParts(M(t.id, h), {
                  username: L,
                  usernameOnClick: g.dG4,
                }),
              );
            case g.uaV.GUILD_BOOST:
              return G(L);
            case g.uaV.GUILD_BOOST_TIER_1:
            case g.uaV.GUILD_BOOST_TIER_2:
            case g.uaV.GUILD_BOOST_TIER_3:
              return P(L, T);
            case g.uaV.GUILD_INVITE_REMINDER:
              return S.intl.string(S.t.gxyKvr);
            case g.uaV.THREAD_STARTER_MESSAGE:
              return S.intl.formatToPlainString(S.t["B8H+Cg"], {
                username: L,
                threadName: n.name,
              });
            case g.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (t instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, a.vp)({
                  username: L,
                  guildId: n.guild_id,
                  roleSubscriptionData: t.role_subscription_data,
                }),
              );
            case g.uaV.PURCHASE_NOTIFICATION:
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
                  username: L,
                  productName:
                    t.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case g.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (t instanceof f.ZP) return null;
              let Z = (0, c.ZH)((0, o.e5)(t));
              return (0, u.Rp)(
                (0, s.Y)({ application: t.application, username: Z.nick }),
              );
            case g.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (t instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, d.B2)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case g.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (t instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, d.hj)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case g.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (A = t.embeds) || void 0 === A
                  ? void 0
                  : A.some((t) => {
                      let { type: n } = t;
                      return n === g.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (t) {
                  let n = E.Z.getChannel(t);
                  if (null == n) return null;
                  let e = _.Z.getGuild(n.getGuildId());
                  return null == e
                    ? null
                    : (0, u.Rp)(
                        S.intl.formatToParts(S.t["a+lJKi"], {
                          guildName: e.name,
                        }),
                      );
                })(T);
              return t.content;
            case g.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (t, n, e) {
                let i = E.Z.getChannel(n);
                if (null == i) return null;
                let r = _.Z.getGuild(i.getGuildId());
                return null == r
                  ? null
                  : (0, u.Rp)(
                      S.intl.formatToParts(S.t.iOuWPj, {
                        username: t,
                        guildName: r.name,
                        time:
                          "" !== e
                            ? new Date(e).toLocaleString(S.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(L, T, t.content);
            case g.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (t, n) {
                let e = E.Z.getChannel(n);
                if (null == e) return null;
                let i = _.Z.getGuild(e.getGuildId());
                return null == i
                  ? null
                  : (0, u.Rp)(
                      S.intl.formatToParts(S.t.axmbpq, {
                        username: t,
                        guildName: i.name,
                      }),
                    );
              })(L, T);
            default:
              return t.content;
          }
        },
        getSystemMessageUserJoin: function (t, n) {
          let e = C(n),
            i = A.default.extractTimestamp(t) % e.length;
          return e[i];
        },
        getSystemMessageUserJoinMobile: M,
        getSystemMessageBotJoin: function (t) {
          return null == p[t]
            ? null
            : S.intl.format(S.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(p[t]) },
              });
        },
        getWelcomeMessageKind: U,
      };
    },
  },
]);
//# sourceMappingURL=31da0271d5381bf71f3b.js.map
