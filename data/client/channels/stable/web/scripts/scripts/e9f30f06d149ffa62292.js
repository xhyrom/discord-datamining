"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59743"],
  {
    211739: function (e, E, _) {
      _.d(E, {
        N5: function () {
          return a;
        },
        c4: function () {
          return t;
        },
        lc: function () {
          return M;
        },
        mJ: function () {
          return n;
        },
      });
      var s = _(570140);
      function t(e) {
        s.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function n(e) {
        s.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function a(e) {
        s.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function M(e) {
        s.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    776568: function (e, E, _) {
      _.d(E, {
        ZP: function () {
          return G;
        },
        k: function () {
          return T;
        },
      }),
        _(47120);
      var s = _(735250);
      _(470079);
      var t = _(913527),
        n = _.n(t),
        a = _(442837),
        M = _(481060),
        S = _(211739),
        r = _(92114),
        N = _(777861),
        u = _(9156),
        A = _(621600),
        O = _(933557),
        i = _(981631),
        l = _(969943),
        I = _(689938);
      let T = () => [
          {
            value: l.Oe.MINUTES_15,
            label: I.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: l.Oe.HOURS_1, label: I.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: l.Oe.HOURS_3, label: I.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: l.Oe.HOURS_8, label: I.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: l.Oe.HOURS_24, label: I.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: l.Oe.ALWAYS, label: I.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        L = (e) => {
          let E = e > 0 ? n()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: E },
          };
        };
      function G(e, E) {
        let [_, t] = (0, a.Wu)([u.ZP], () => [
            u.ZP.isChannelMuted(e.guild_id, e.id),
            u.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          n = (0, N.U)(t),
          l = (0, O.ZP)(e, !0);
        function G(E) {
          E && e.type === i.d4z.GUILD_CATEGORY && (0, S.c4)(e.id),
            r.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: E },
              A.UE.muted(E),
            );
        }
        let R = I.Z.Messages.MUTE_CHANNEL_GENERIC,
          C = I.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case i.d4z.GUILD_CATEGORY:
            (R = I.Z.Messages.MUTE_CATEGORY),
              (C = I.Z.Messages.UNMUTE_CATEGORY);
            break;
          case i.d4z.GROUP_DM:
            (R = I.Z.Messages.MUTE_CONVERSATION),
              (C = I.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case i.d4z.DM:
            (R = I.Z.Messages.MUTE_CHANNEL.format({ name: l })),
              (C = I.Z.Messages.UNMUTE_CHANNEL.format({ name: l }));
            break;
          default:
            (R = I.Z.Messages.MUTE_CHANNEL_GENERIC),
              (C = I.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return _
          ? (0, s.jsx)(M.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: n,
              action: () => G(!1),
            })
          : (0, s.jsx)(M.MenuItem, {
              id: "mute-channel",
              label: R,
              action: () => G(!0),
              children: T().map((_) => {
                let { value: t, label: n } = _;
                return (0, s.jsx)(
                  M.MenuItem,
                  {
                    id: "".concat(t),
                    label: n,
                    action: () =>
                      (function (_) {
                        e.type === i.d4z.GUILD_CATEGORY && (0, S.c4)(e.id);
                        let s = L(_);
                        r.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          s,
                          A.ZB.Muted,
                          E,
                        );
                      })(t),
                  },
                  t,
                );
              }),
            });
      }
    },
    97797: function (e, E, _) {
      _.d(E, {
        i: function () {
          return t;
        },
      });
      var s = _(689938);
      function t(e) {
        let { username: E, usernameOnClickHandler: _, productName: t } = e;
        return s.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat(
          { username: E, usernameHook: _, productName: t },
        );
      }
    },
    499401: function (e, E, _) {
      _.d(E, {
        Y: function () {
          return t;
        },
      });
      var s = _(689938);
      function t(e) {
        let { application: E, username: _, usernameOnClick: t, medium: n } = e;
        return null != E
          ? s.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat(
              {
                username: _,
                applicationName: E.name,
                usernameOnClick: t,
                medium: n,
              },
            )
          : s.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat(
              { username: _, usernameOnClick: t, medium: n },
            );
      }
    },
    693912: function (e, E, _) {
      _.d(E, {
        B2: function () {
          return S;
        },
        DS: function () {
          return a;
        },
        hj: function () {
          return r;
        },
        nh: function () {
          return M;
        },
      });
      var s = _(63063),
        t = _(981631),
        n = _(689938);
      function a(e) {
        let {
          application: E,
          username: _,
          usernameHook: a = t.dG4,
          applicationNameHook: M = t.dG4,
        } = e;
        return null != E
          ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: s.Z.getArticleURL(
                t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format(
              {
                username: _,
                usernameHook: a,
                helpCenterLink: s.Z.getArticleURL(
                  t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
                ),
              },
            );
      }
      function M(e) {
        let {
          application: E,
          username: _,
          usernameHook: a = t.dG4,
          applicationNameHook: M = t.dG4,
        } = e;
        return null != E
          ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: s.Z.getArticleURL(
                t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format(
              {
                username: _,
                usernameHook: a,
                helpCenterLink: s.Z.getArticleURL(
                  t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
                ),
              },
            );
      }
      function S(e) {
        let {
          application: E,
          username: _,
          usernameOnClick: a,
          applicationNameOnClick: M,
          medium: S,
        } = e;
        return null != E
          ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: S,
              helpCenterLink: {
                url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat(
              {
                username: _,
                usernameOnClick: a,
                medium: S,
                helpCenterLink: {
                  url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
                },
              },
            );
      }
      function r(e) {
        let {
          application: E,
          username: _,
          usernameOnClick: a,
          applicationNameOnClick: M,
          medium: S,
        } = e;
        return null != E
          ? n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: S,
              helpCenterLink: {
                url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : n.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat(
              {
                username: _,
                usernameOnClick: a,
                medium: S,
                helpCenterLink: {
                  url: s.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
                },
              },
            );
      }
    },
    723170: function (e, E, _) {
      _.d(E, {
        B: function () {
          return u;
        },
        J: function () {
          return N;
        },
      }),
        _(789020);
      var s = _(442837),
        t = _(592125),
        n = _(9156),
        a = _(630388),
        M = _(569471),
        S = _(124368),
        r = _(981631);
      function N(e) {
        let E = M.Z.flags(e.id);
        if (null == E) return S.iN.NO_MESSAGES;
        if ((0, a.yE)(E, S.iN.ALL_MESSAGES)) return S.iN.ALL_MESSAGES;
        if ((0, a.yE)(E, S.iN.ONLY_MENTIONS)) return S.iN.ONLY_MENTIONS;
        if ((0, a.yE)(E, S.iN.NO_MESSAGES)) return S.iN.NO_MESSAGES;
        let _ = t.Z.getChannel(e.parent_id);
        if (null == _ || n.ZP.isGuildOrCategoryOrChannelMuted(_.guild_id, _.id))
          return S.iN.NO_MESSAGES;
        let s = n.ZP.resolvedMessageNotifications(_);
        return s === r.bL.NO_MESSAGES
          ? S.iN.NO_MESSAGES
          : s === r.bL.ONLY_MENTIONS
            ? S.iN.ONLY_MENTIONS
            : S.iN.ALL_MESSAGES;
      }
      function u(e) {
        return (0, s.e7)([M.Z, n.ZP, t.Z], () => N(e), [e]);
      }
    },
    352736: function (e, E, _) {
      var s,
        t,
        n = _(25209),
        a = _(97797),
        M = _(35125),
        S = _(786761),
        r = _(739566),
        N = _(499401),
        u = _(693912),
        A = _(23750),
        O = _(314897),
        i = _(592125),
        l = _(430824),
        I = _(594174),
        T = _(5192),
        L = _(709054),
        G = _(981631),
        R = _(689938);
      let C = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((s = t || (t = {})).NORMAL = "NORMAL"), (s.CLAN = "CLAN");
      let o = () => [
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK,
        ],
        c = () => [
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012,
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013,
        ],
        g = () => [
          R.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK,
        ],
        d = () => [
          R.Z.Messages.CLAN_WELCOME_MESSAGE_0,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_1,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_2,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_3,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_4,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_5,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_6,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_7,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_8,
          R.Z.Messages.CLAN_WELCOME_MESSAGE_9,
        ],
        Z = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return o();
            case "CLAN":
              return g();
          }
        },
        U = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return c();
            case "CLAN":
              return d();
          }
        };
      function D(e, E) {
        let _ = U(E),
          s = L.default.extractTimestamp(e) % _.length;
        return _[s];
      }
      function m(e) {
        return (0, n.Rp)(
          R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
            username: e,
            usernameOnClick: G.dG4,
          }),
        );
      }
      function f(e, E) {
        let _ = i.Z.getChannel(E);
        return null == _ || null == l.Z.getGuild(_.getGuildId())
          ? m(e)
          : (0, n.Rp)(
              R.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
                username: e,
                usernameOnClick: G.dG4,
              }),
            );
      }
      function p(e) {
        var E;
        return (
          null === (E = l.Z.getGuild(e)) || void 0 === E
            ? void 0
            : E.hasFeature(G.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      E.Z = {
        stringify: function (e, E) {
          var _, s, t, L;
          let C = null === (_ = e.mentions) || void 0 === _ ? void 0 : _[0],
            o =
              null != C && "string" != typeof C
                ? I.default.getUser(C.id)
                : void 0,
            c = e.channel_id,
            g = T.ZP.getName(null, c, e.author);
          switch (e.type) {
            case G.uaV.RECIPIENT_ADD:
              if (null == o) return;
              return (0, n.Rp)(
                R.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
                  username: g,
                  usernameOnClick: G.dG4,
                  otherUsername: T.ZP.getName(null, c, o),
                  otherUsernameOnClick: G.dG4,
                }),
              );
            case G.uaV.RECIPIENT_REMOVE:
              if (null == o) return;
              let d = e.author;
              if (null == d || d.id === o.id)
                return (0, n.Rp)(
                  R.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
                    username: g,
                    usernameOnClick: G.dG4,
                  }),
                );
              return (0, n.Rp)(
                R.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
                  username: g,
                  usernameOnClick: G.dG4,
                  otherUsername: T.ZP.getName(null, c, o),
                  otherUsernameOnClick: G.dG4,
                }),
              );
            case G.uaV.CALL:
              let { call: Z } = e;
              if (null != Z && -1 === Z.participants.indexOf(O.default.getId()))
                return (0, n.Rp)(
                  R.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
                    username: g,
                    usernameOnClick: G.dG4,
                  }),
                );
              return;
            case G.uaV.CHANNEL_NAME_CHANGE:
              return (0, n.Rp)(
                (E.isForumPost()
                  ? R.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE
                  : R.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE
                ).astFormat({
                  username: g,
                  usernameOnClick: G.dG4,
                  channelName: e.content,
                }),
              );
            case G.uaV.CHANNEL_ICON_CHANGE:
              return (0, n.Rp)(
                R.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
                  username: g,
                  usernameOnClick: G.dG4,
                }),
              );
            case G.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, n.Rp)(
                R.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
                  username: g,
                  usernameOnClick: G.dG4,
                }),
              );
            case G.uaV.USER_JOIN:
              let U = p(E.guild_id);
              return (0, n.Rp)(
                D(e.id, U).astFormat({ username: g, usernameOnClick: G.dG4 }),
              );
            case G.uaV.GUILD_BOOST:
              return m(g);
            case G.uaV.GUILD_BOOST_TIER_1:
            case G.uaV.GUILD_BOOST_TIER_2:
            case G.uaV.GUILD_BOOST_TIER_3:
              return f(g, c);
            case G.uaV.GUILD_INVITE_REMINDER:
              return R.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
            case G.uaV.THREAD_STARTER_MESSAGE:
              return R.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
                username: g,
                threadName: E.name,
              });
            case G.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof A.ZP) return null;
              return (0, n.Rp)(
                (0, M.vp)({
                  username: g,
                  guildId: E.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case G.uaV.PURCHASE_NOTIFICATION:
              if (
                e instanceof A.ZP ||
                (null === (t = e.purchase_notification) || void 0 === t
                  ? void 0
                  : null === (s = t.guild_product_purchase) || void 0 === s
                    ? void 0
                    : s.product_name) == null
              )
                return null;
              return (0, n.Rp)(
                (0, a.i)({
                  username: g,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case G.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof A.ZP) return null;
              let H = (0, r.ZH)((0, S.e5)(e));
              return (0, n.Rp)(
                (0, N.Y)({ application: e.application, username: H.nick }),
              );
            case G.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof A.ZP) return null;
              return (0, n.Rp)(
                (0, u.B2)({
                  application: e.application,
                  username: (0, r.ZH)((0, S.e5)(e)).nick,
                }),
              );
            case G.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof A.ZP) return null;
              return (0, n.Rp)(
                (0, u.hj)({
                  application: e.application,
                  username: (0, r.ZH)((0, S.e5)(e)).nick,
                }),
              );
            case G.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (L = e.embeds) || void 0 === L
                  ? void 0
                  : L.some((e) => {
                      let { type: E } = e;
                      return E === G.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (e) {
                  let E = i.Z.getChannel(e);
                  if (null == E) return null;
                  let _ = l.Z.getGuild(E.getGuildId());
                  return null == _
                    ? null
                    : (0, n.Rp)(
                        R.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat(
                          { guildName: _.name },
                        ),
                      );
                })(c);
              return e.content;
            case G.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (e, E, _) {
                let s = i.Z.getChannel(E);
                if (null == s) return null;
                let t = l.Z.getGuild(s.getGuildId());
                return null == t
                  ? null
                  : (0, n.Rp)(
                      R.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat(
                        {
                          username: e,
                          guildName: t.name,
                          time:
                            "" !== _
                              ? new Date(_).toLocaleString(R.Z.getLocale(), {
                                  hour: "numeric",
                                  minute: "2-digit",
                                })
                              : "",
                        },
                      ),
                    );
              })(g, c, e.content);
            case G.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (e, E) {
                let _ = i.Z.getChannel(E);
                if (null == _) return null;
                let s = l.Z.getGuild(_.getGuildId());
                return null == s
                  ? null
                  : (0, n.Rp)(
                      R.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat(
                        { username: e, guildName: s.name },
                      ),
                    );
              })(g, c);
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e, E) {
          let _ = Z(E),
            s = L.default.extractTimestamp(e) % _.length;
          return _[s];
        },
        getSystemMessageUserJoinMobile: D,
        getSystemMessageBotJoin: function (e) {
          return null == C[e]
            ? null
            : R.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
                learnOnClick: { onClick: () => window.open(C[e]) },
              });
        },
        getWelcomeMessageKind: p,
      };
    },
  },
]);
//# sourceMappingURL=e9f30f06d149ffa62292.js.map
