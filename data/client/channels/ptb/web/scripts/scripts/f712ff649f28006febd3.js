"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59743"],
  {
    211739: function (t, n, e) {
      e.d(n, {
        N5: function () {
          return l;
        },
        c4: function () {
          return i;
        },
        lc: function () {
          return a;
        },
        mJ: function () {
          return u;
        },
      });
      var r = e(570140);
      function i(t) {
        r.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: t });
      }
      function u(t) {
        r.Z.dispatch({ type: "CATEGORY_EXPAND", id: t });
      }
      function l(t) {
        r.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: t });
      }
      function a(t) {
        r.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: t });
      }
    },
    776568: function (t, n, e) {
      e.d(n, {
        ZP: function () {
          return T;
        },
        k: function () {
          return O;
        },
      }),
        e(47120);
      var r = e(200651);
      e(192379);
      var i = e(913527),
        u = e.n(i),
        l = e(442837),
        a = e(481060),
        o = e(211739),
        c = e(87051),
        s = e(496729),
        d = e(777861),
        N = e(9156),
        E = e(621600),
        f = e(933557),
        _ = e(981631),
        m = e(969943),
        A = e(388032);
      let O = () => [
          { value: m.Oe.MINUTES_15, label: A.intl.string(A.t["8ot6go"]) },
          { value: m.Oe.HOURS_1, label: A.intl.string(A.t.UMWBZm) },
          { value: m.Oe.HOURS_3, label: A.intl.string(A.t.QmYWtr) },
          { value: m.Oe.HOURS_8, label: A.intl.string(A.t.EpAXPD) },
          { value: m.Oe.HOURS_24, label: A.intl.string(A.t["755t4u"]) },
          { value: m.Oe.ALWAYS, label: A.intl.string(A.t.r3LawM) },
        ],
        p = (t) => {
          let n = t > 0 ? u()().add(t, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: t, end_time: n },
          };
        };
      function T(t, n) {
        let [e, i] = (0, l.Wu)([N.ZP], () => [
            N.ZP.isChannelMuted(t.guild_id, t.id),
            N.ZP.getChannelMuteConfig(t.guild_id, t.id),
          ]),
          u = (0, d.U)(i),
          m = (0, f.ZP)(t, !0);
        function T(n) {
          n && t.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(t.id),
            c.Z.updateChannelOverrideSettings(
              t.guild_id,
              t.id,
              { muted: n },
              E.UE.muted(n),
            );
        }
        let R = A.intl.string(A.t.tbeRRE),
          C = A.intl.string(A.t.OYefmZ);
        switch (t.type) {
          case _.d4z.GUILD_CATEGORY:
            (R = A.intl.string(A.t.pNMCg4)), (C = A.intl.string(A.t.olaBeH));
            break;
          case _.d4z.GROUP_DM:
            (R = A.intl.string(A.t.LO3kaG)), (C = A.intl.string(A.t["s5/5fn"]));
            break;
          case _.d4z.DM:
            (R = A.intl.format(A.t.byjuJi, { name: m })),
              (C = A.intl.format(A.t["eC+9rq"], { name: m }));
            break;
          default:
            (R = A.intl.string(A.t.tbeRRE)), (C = A.intl.string(A.t.OYefmZ));
        }
        return e
          ? (0, r.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: u,
              action: () => T(!1),
            })
          : (0, r.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: R,
              action: () => {
                T(!0),
                  (0, s.s)({
                    channelId: t.id,
                    location: "channel_context_menu",
                  });
              },
              children: O().map((e) => {
                let { value: i, label: u } = e;
                return (0, r.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(i),
                    label: u,
                    action: () =>
                      (function (e) {
                        t.type === _.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
                        let r = p(e);
                        c.Z.updateChannelOverrideSettings(
                          t.guild_id,
                          t.id,
                          r,
                          E.ZB.Muted,
                          n,
                        );
                      })(i),
                  },
                  i,
                );
              }),
            });
      }
    },
    97797: function (t, n, e) {
      e.d(n, {
        i: function () {
          return i;
        },
      });
      var r = e(388032);
      function i(t) {
        let { username: n, usernameOnClickHandler: e, productName: i } = t;
        return r.intl.formatToParts(r.t.w4iXs7, {
          username: n,
          usernameHook: e,
          productName: i,
        });
      }
    },
    499401: function (t, n, e) {
      e.d(n, {
        Y: function () {
          return i;
        },
      });
      var r = e(388032);
      function i(t) {
        let { application: n, username: e, usernameOnClick: i } = t;
        return null != n
          ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: e,
              applicationName: n.name,
              usernameOnClick: i,
            })
          : r.intl.formatToParts(r.t.PUJtgo, {
              username: e,
              usernameOnClick: i,
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
      var r = e(63063),
        i = e(981631),
        u = e(388032);
      function l(t) {
        let {
          application: n,
          username: e,
          usernameHook: l = i.dG4,
          applicationNameHook: a = i.dG4,
        } = t;
        return null != n
          ? u.intl.format(u.t.J8SaGx, {
              username: e,
              otherUsername: n.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t["+6V2sb"], {
              username: e,
              usernameHook: l,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(t) {
        let {
          application: n,
          username: e,
          usernameHook: l = i.dG4,
          applicationNameHook: a = i.dG4,
        } = t;
        return null != n
          ? u.intl.format(u.t.eGCDam, {
              username: e,
              otherUsername: n.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t.sAX6rq, {
              username: e,
              usernameHook: l,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
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
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t.ojysqa, {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
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
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t["x2CN/f"], {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    305587: function (t, n, e) {
      e.d(n, {
        Xs: function () {
          return i;
        },
      });
      let r = (0, e(818083).B)({
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
      function i(t) {
        let { enabled: n } = r.getCurrentConfig(
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
      var r = e(200651),
        i = e(704215),
        u = e(481060),
        l = e(570140),
        a = e(605236),
        o = e(592125),
        c = e(305587);
      function s(t) {
        let { channelId: n, location: e } = t,
          r = o.Z.getChannel(n),
          u = (0, a.un)(i.z.USER_DM_MUTE_FEEDBACK);
        if (null != r && !!r.isDM() && !u)
          (0, c.Xs)(e) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: r });
      }
      function d() {
        (0, u.openModalLazy)(async () => {
          let { default: t } = await e.e("87995").then(e.bind(e, 180970));
          return (n) => (0, r.jsx)(t, { ...n });
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
      var r = e(442837),
        i = e(592125),
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
        let e = i.Z.getChannel(t.parent_id);
        if (null == e || u.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))
          return o.iN.NO_MESSAGES;
        let r = u.ZP.resolvedMessageNotifications(e);
        return r === c.bL.NO_MESSAGES
          ? o.iN.NO_MESSAGES
          : r === c.bL.ONLY_MENTIONS
            ? o.iN.ONLY_MENTIONS
            : o.iN.ALL_MESSAGES;
      }
      function d(t) {
        return (0, r.e7)([a.Z, u.ZP, i.Z], () => s(t), [t]);
      }
    },
    352736: function (t, n, e) {
      var r,
        i,
        u = e(25209),
        l = e(97797),
        a = e(35125),
        o = e(786761),
        c = e(739566),
        s = e(499401),
        d = e(693912),
        N = e(23750),
        E = e(314897),
        f = e(592125),
        _ = e(430824),
        m = e(594174),
        A = e(5192),
        O = e(709054),
        p = e(981631),
        T = e(388032);
      let R = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((r = i || (i = {})).NORMAL = "NORMAL"), (r.CLAN = "CLAN");
      let C = () => [
          T.t["0cuj7u"],
          T.t["MuW+CA"],
          T.t.osqpHR,
          T.t["5ToSh4"],
          T.t.JEB8pq,
          T.t.pkOV5e,
          T.t.kRb1Jy,
          T.t.EmKLY2,
          T.t.rPtBnZ,
          T.t["5B/ekZ"],
          T.t.ESNC3d,
          T.t["Iw6d8/"],
          T.t.WecSZ2,
        ],
        I = () => [
          T.t.Jm6e09,
          T.t.MGRnRU,
          T.t.EXOEGh,
          T.t["5uCTFB"],
          T.t.rl45Qk,
          T.t.Bh9zpa,
          T.t.RdEy1N,
          T.t.qcdp09,
          T.t.F7w2Rk,
          T.t.gSyOgI,
          T.t.uYgqv7,
          T.t["b/1SBQ"],
          T.t.LhebZG,
        ],
        g = () => [
          T.t["20E/ys"],
          T.t["oa8+kp"],
          T.t.zoKkXl,
          T.t.FP9aS0,
          T.t.E5Zj1d,
          T.t["6Anmws"],
          T.t.sR78HR,
          T.t.gA9qPz,
          T.t.Hkiyp6,
          T.t.w1HMho,
        ],
        L = () => [
          T.t["8fy3DQ"],
          T.t.UproUV,
          T.t["7l3EyM"],
          T.t.GToyaG,
          T.t["DUs+Zm"],
          T.t.yLkbfn,
          T.t.oWdvws,
          T.t.tOoKTE,
          T.t["VM7+Oj"],
          T.t["hJx/u7"],
        ],
        h = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return C();
            case "CLAN":
              return g();
          }
        },
        S = (t) => {
          switch (t) {
            case "NORMAL":
            default:
              return I();
            case "CLAN":
              return L();
          }
        };
      function G(t, n) {
        let e = S(n),
          r = O.default.extractTimestamp(t) % e.length;
        return e[r];
      }
      function P(t) {
        return (0, u.Rp)(
          T.intl.formatToParts(T.t["ihxM9/"], {
            username: t,
            usernameOnClick: p.dG4,
          }),
        );
      }
      function M(t, n) {
        let e = f.Z.getChannel(n);
        return null == e || null == _.Z.getGuild(e.getGuildId())
          ? P(t)
          : (0, u.Rp)(
              T.intl.formatToParts(T.t["ihxM9/"], {
                username: t,
                usernameOnClick: p.dG4,
              }),
            );
      }
      function Z(t) {
        var n;
        return (
          null === (n = _.Z.getGuild(t)) || void 0 === n
            ? void 0
            : n.hasFeature(p.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      n.Z = {
        stringify: function (t, n) {
          var e, r, i, O;
          let R = null === (e = t.mentions) || void 0 === e ? void 0 : e[0],
            C =
              null != R && "string" != typeof R
                ? m.default.getUser(R.id)
                : void 0,
            I = t.channel_id,
            g = A.ZP.getName(null, I, t.author);
          switch (t.type) {
            case p.uaV.RECIPIENT_ADD:
              if (null == C) return;
              return (0, u.Rp)(
                T.intl.formatToParts(T.t["7/Xl0d"], {
                  username: g,
                  usernameOnClick: p.dG4,
                  otherUsername: A.ZP.getName(null, I, C),
                  otherUsernameOnClick: p.dG4,
                }),
              );
            case p.uaV.RECIPIENT_REMOVE:
              if (null == C) return;
              let L = t.author;
              if (null == L || L.id === C.id)
                return (0, u.Rp)(
                  T.intl.formatToParts(T.t["Qn5+LS"], {
                    username: g,
                    usernameOnClick: p.dG4,
                  }),
                );
              return (0, u.Rp)(
                T.intl.formatToParts(T.t.QtZ0RE, {
                  username: g,
                  usernameOnClick: p.dG4,
                  otherUsername: A.ZP.getName(null, I, C),
                  otherUsernameOnClick: p.dG4,
                }),
              );
            case p.uaV.CALL:
              let { call: h } = t;
              if (null != h && -1 === h.participants.indexOf(E.default.getId()))
                return (0, u.Rp)(
                  T.intl.formatToParts(T.t.DbgSAw, {
                    username: g,
                    usernameOnClick: p.dG4,
                  }),
                );
              return;
            case p.uaV.CHANNEL_NAME_CHANGE:
              return (0, u.Rp)(
                T.intl.formatToParts(
                  n.isForumPost() ? T.t["qa0e/v"] : T.t.XCPMEB,
                  {
                    username: g,
                    usernameOnClick: p.dG4,
                    channelName: t.content,
                  },
                ),
              );
            case p.uaV.CHANNEL_ICON_CHANGE:
              return (0, u.Rp)(
                T.intl.formatToParts(T.t.wypJZ2, {
                  username: g,
                  usernameOnClick: p.dG4,
                }),
              );
            case p.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, u.Rp)(
                T.intl.formatToParts(T.t["/M60j4"], {
                  username: g,
                  usernameOnClick: p.dG4,
                }),
              );
            case p.uaV.USER_JOIN:
              let S = Z(n.guild_id);
              return (0, u.Rp)(
                T.intl.formatToParts(G(t.id, S), {
                  username: g,
                  usernameOnClick: p.dG4,
                }),
              );
            case p.uaV.GUILD_BOOST:
              return P(g);
            case p.uaV.GUILD_BOOST_TIER_1:
            case p.uaV.GUILD_BOOST_TIER_2:
            case p.uaV.GUILD_BOOST_TIER_3:
              return M(g, I);
            case p.uaV.GUILD_INVITE_REMINDER:
              return T.intl.string(T.t.gxyKvr);
            case p.uaV.THREAD_STARTER_MESSAGE:
              return T.intl.formatToPlainString(T.t["B8H+Cg"], {
                username: g,
                threadName: n.name,
              });
            case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (t instanceof N.ZP) return null;
              return (0, u.Rp)(
                (0, a.vp)({
                  username: g,
                  guildId: n.guild_id,
                  roleSubscriptionData: t.role_subscription_data,
                }),
              );
            case p.uaV.PURCHASE_NOTIFICATION:
              if (
                t instanceof N.ZP ||
                (null === (i = t.purchase_notification) || void 0 === i
                  ? void 0
                  : null === (r = i.guild_product_purchase) || void 0 === r
                    ? void 0
                    : r.product_name) == null
              )
                return null;
              return (0, u.Rp)(
                (0, l.i)({
                  username: g,
                  productName:
                    t.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (t instanceof N.ZP) return null;
              let U = (0, c.ZH)((0, o.e5)(t));
              return (0, u.Rp)(
                (0, s.Y)({ application: t.application, username: U.nick }),
              );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (t instanceof N.ZP) return null;
              return (0, u.Rp)(
                (0, d.B2)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (t instanceof N.ZP) return null;
              return (0, u.Rp)(
                (0, d.hj)({
                  application: t.application,
                  username: (0, c.ZH)((0, o.e5)(t)).nick,
                }),
              );
            case p.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (O = t.embeds) || void 0 === O
                  ? void 0
                  : O.some((t) => {
                      let { type: n } = t;
                      return n === p.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (t) {
                  let n = f.Z.getChannel(t);
                  if (null == n) return null;
                  let e = _.Z.getGuild(n.getGuildId());
                  return null == e
                    ? null
                    : (0, u.Rp)(
                        T.intl.formatToParts(T.t["a+lJKi"], {
                          guildName: e.name,
                        }),
                      );
                })(I);
              return t.content;
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (t, n, e) {
                let r = f.Z.getChannel(n);
                if (null == r) return null;
                let i = _.Z.getGuild(r.getGuildId());
                return null == i
                  ? null
                  : (0, u.Rp)(
                      T.intl.formatToParts(T.t.iOuWPj, {
                        username: t,
                        guildName: i.name,
                        time:
                          "" !== e
                            ? new Date(e).toLocaleString(T.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(g, I, t.content);
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (t, n) {
                let e = f.Z.getChannel(n);
                if (null == e) return null;
                let r = _.Z.getGuild(e.getGuildId());
                return null == r
                  ? null
                  : (0, u.Rp)(
                      T.intl.formatToParts(T.t.axmbpq, {
                        username: t,
                        guildName: r.name,
                      }),
                    );
              })(g, I);
            default:
              return t.content;
          }
        },
        getSystemMessageUserJoin: function (t, n) {
          let e = h(n),
            r = O.default.extractTimestamp(t) % e.length;
          return e[r];
        },
        getSystemMessageUserJoinMobile: G,
        getSystemMessageBotJoin: function (t) {
          return null == R[t]
            ? null
            : T.intl.format(T.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(R[t]) },
              });
        },
        getWelcomeMessageKind: Z,
      };
    },
  },
]);
//# sourceMappingURL=f712ff649f28006febd3.js.map
