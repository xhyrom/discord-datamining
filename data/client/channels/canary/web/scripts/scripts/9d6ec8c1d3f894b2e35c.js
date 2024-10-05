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
          return s;
        },
      });
      var n = _(570140);
      function t(e) {
        n.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
      }
      function s(e) {
        n.Z.dispatch({ type: "CATEGORY_EXPAND", id: e });
      }
      function a(e) {
        n.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
      }
      function M(e) {
        n.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
      }
    },
    776568: function (e, E, _) {
      _.d(E, {
        ZP: function () {
          return o;
        },
        k: function () {
          return L;
        },
      }),
        _(47120);
      var n = _(735250);
      _(470079);
      var t = _(913527),
        s = _.n(t),
        a = _(442837),
        M = _(481060),
        r = _(211739),
        S = _(87051),
        u = _(401412),
        N = _(777861),
        A = _(9156),
        i = _(621600),
        l = _(933557),
        O = _(981631),
        I = _(969943),
        T = _(689938);
      let L = () => [
          {
            value: I.Oe.MINUTES_15,
            label: T.Z.Messages.MUTE_DURATION_15_MINUTES,
          },
          { value: I.Oe.HOURS_1, label: T.Z.Messages.MUTE_DURATION_1_HOUR },
          { value: I.Oe.HOURS_3, label: T.Z.Messages.MUTE_DURATION_3_HOURS },
          { value: I.Oe.HOURS_8, label: T.Z.Messages.MUTE_DURATION_8_HOURS },
          { value: I.Oe.HOURS_24, label: T.Z.Messages.MUTE_DURATION_24_HOURS },
          { value: I.Oe.ALWAYS, label: T.Z.Messages.MUTE_DURATION_ALWAYS },
        ],
        c = (e) => {
          let E = e > 0 ? s()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: E },
          };
        };
      function o(e, E) {
        let [_, t] = (0, a.Wu)([A.ZP], () => [
            A.ZP.isChannelMuted(e.guild_id, e.id),
            A.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          s = (0, N.U)(t),
          I = (0, l.ZP)(e, !0);
        function o(E) {
          E && e.type === O.d4z.GUILD_CATEGORY && (0, r.c4)(e.id),
            S.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: E },
              i.UE.muted(E),
            );
        }
        let C = T.Z.Messages.MUTE_CHANNEL_GENERIC,
          G = T.Z.Messages.UNMUTE_CHANNEL_GENERIC;
        switch (e.type) {
          case O.d4z.GUILD_CATEGORY:
            (C = T.Z.Messages.MUTE_CATEGORY),
              (G = T.Z.Messages.UNMUTE_CATEGORY);
            break;
          case O.d4z.GROUP_DM:
            (C = T.Z.Messages.MUTE_CONVERSATION),
              (G = T.Z.Messages.UNMUTE_CONVERSATION);
            break;
          case O.d4z.DM:
            (C = T.Z.Messages.MUTE_CHANNEL.format({ name: I })),
              (G = T.Z.Messages.UNMUTE_CHANNEL.format({ name: I }));
            break;
          default:
            (C = T.Z.Messages.MUTE_CHANNEL_GENERIC),
              (G = T.Z.Messages.UNMUTE_CHANNEL_GENERIC);
        }
        return _
          ? (0, n.jsx)(M.MenuItem, {
              id: "unmute-channel",
              label: G,
              subtext: s,
              action: () => o(!1),
            })
          : (0, n.jsx)(M.MenuItem, {
              id: "mute-channel",
              label: C,
              action: () => {
                o(!0),
                  (0, u.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: L().map((_) => {
                let { value: t, label: s } = _;
                return (0, n.jsx)(
                  M.MenuItem,
                  {
                    id: "".concat(t),
                    label: s,
                    action: () =>
                      (function (_) {
                        e.type === O.d4z.GUILD_CATEGORY && (0, r.c4)(e.id);
                        let n = c(_);
                        S.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          n,
                          i.ZB.Muted,
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
      var n = _(689938);
      function t(e) {
        let { username: E, usernameOnClickHandler: _, productName: t } = e;
        return n.Z.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat(
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
      var n = _(689938);
      function t(e) {
        let { application: E, username: _, usernameOnClick: t, medium: s } = e;
        return null != E
          ? n.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat(
              {
                username: _,
                applicationName: E.name,
                usernameOnClick: t,
                medium: s,
              },
            )
          : n.Z.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat(
              { username: _, usernameOnClick: t, medium: s },
            );
      }
    },
    693912: function (e, E, _) {
      _.d(E, {
        B2: function () {
          return r;
        },
        DS: function () {
          return a;
        },
        hj: function () {
          return S;
        },
        nh: function () {
          return M;
        },
      });
      var n = _(63063),
        t = _(981631),
        s = _(689938);
      function a(e) {
        let {
          application: E,
          username: _,
          usernameHook: a = t.dG4,
          applicationNameHook: M = t.dG4,
        } = e;
        return null != E
          ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: n.Z.getArticleURL(
                t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION.format(
              {
                username: _,
                usernameHook: a,
                helpCenterLink: n.Z.getArticleURL(
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
          ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED.format({
              username: _,
              otherUsername: E.name,
              usernameHook: a,
              otherUsernameHook: M,
              helpCenterLink: n.Z.getArticleURL(
                t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION.format(
              {
                username: _,
                usernameHook: a,
                helpCenterLink: n.Z.getArticleURL(
                  t.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
                ),
              },
            );
      }
      function r(e) {
        let {
          application: E,
          username: _,
          usernameOnClick: a,
          applicationNameOnClick: M,
          medium: r,
        } = e;
        return null != E
          ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: r,
              helpCenterLink: {
                url: n.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_ADDED_DELETED_APPLICATION_MOBILE.astFormat(
              {
                username: _,
                usernameOnClick: a,
                medium: r,
                helpCenterLink: {
                  url: n.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
                },
              },
            );
      }
      function S(e) {
        let {
          application: E,
          username: _,
          usernameOnClick: a,
          applicationNameOnClick: M,
          medium: r,
        } = e;
        return null != E
          ? s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_MOBILE.astFormat({
              username: _,
              otherUsername: E.name,
              usernameOnClick: a,
              otherUsernameOnClick: M,
              medium: r,
              helpCenterLink: {
                url: n.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : s.Z.Messages.PRIVATE_CHANNEL_INTEGRATION_REMOVED_DELETED_APPLICATION_MOBILE.astFormat(
              {
                username: _,
                usernameOnClick: a,
                medium: r,
                helpCenterLink: {
                  url: n.Z.getArticleURL(t.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
                },
              },
            );
      }
    },
    305587: function (e, E, _) {
      _.d(E, {
        Xs: function () {
          return t;
        },
      });
      let n = (0, _(818083).B)({
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
      function t(e) {
        let { enabled: E } = n.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return E;
      }
    },
    401412: function (e, E, _) {
      _.d(E, {
        s: function () {
          return r;
        },
      });
      var n = _(704215),
        t = _(570140),
        s = _(605236),
        a = _(592125),
        M = _(305587);
      function r(e) {
        let { channelId: E, location: _ } = e,
          r = a.Z.getChannel(E),
          S = (0, s.un)(n.z.USER_DM_MUTE_FEEDBACK);
        if (null != r && !!r.isDM() && !S)
          (0, M.Xs)(_) &&
            t.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: r });
      }
    },
    723170: function (e, E, _) {
      _.d(E, {
        B: function () {
          return N;
        },
        J: function () {
          return u;
        },
      }),
        _(789020);
      var n = _(442837),
        t = _(592125),
        s = _(9156),
        a = _(630388),
        M = _(569471),
        r = _(124368),
        S = _(981631);
      function u(e) {
        let E = M.Z.flags(e.id);
        if (null == E) return r.iN.NO_MESSAGES;
        if ((0, a.yE)(E, r.iN.ALL_MESSAGES)) return r.iN.ALL_MESSAGES;
        if ((0, a.yE)(E, r.iN.ONLY_MENTIONS)) return r.iN.ONLY_MENTIONS;
        if ((0, a.yE)(E, r.iN.NO_MESSAGES)) return r.iN.NO_MESSAGES;
        let _ = t.Z.getChannel(e.parent_id);
        if (null == _ || s.ZP.isGuildOrCategoryOrChannelMuted(_.guild_id, _.id))
          return r.iN.NO_MESSAGES;
        let n = s.ZP.resolvedMessageNotifications(_);
        return n === S.bL.NO_MESSAGES
          ? r.iN.NO_MESSAGES
          : n === S.bL.ONLY_MENTIONS
            ? r.iN.ONLY_MENTIONS
            : r.iN.ALL_MESSAGES;
      }
      function N(e) {
        return (0, n.e7)([M.Z, s.ZP, t.Z], () => u(e), [e]);
      }
    },
    352736: function (e, E, _) {
      var n,
        t,
        s = _(25209),
        a = _(97797),
        M = _(35125),
        r = _(786761),
        S = _(739566),
        u = _(499401),
        N = _(693912),
        A = _(23750),
        i = _(314897),
        l = _(592125),
        O = _(430824),
        I = _(594174),
        T = _(5192),
        L = _(709054),
        c = _(981631),
        o = _(689938);
      let C = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((n = t || (t = {})).NORMAL = "NORMAL"), (n.CLAN = "CLAN");
      let G = () => [
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK,
        ],
        R = () => [
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012,
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013,
        ],
        g = () => [
          o.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK,
        ],
        d = () => [
          o.Z.Messages.CLAN_WELCOME_MESSAGE_0,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_1,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_2,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_3,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_4,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_5,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_6,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_7,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_8,
          o.Z.Messages.CLAN_WELCOME_MESSAGE_9,
        ],
        Z = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return G();
            case "CLAN":
              return g();
          }
        },
        U = (e) => {
          switch (e) {
            case "NORMAL":
            default:
              return R();
            case "CLAN":
              return d();
          }
        };
      function D(e, E) {
        let _ = U(E),
          n = L.default.extractTimestamp(e) % _.length;
        return _[n];
      }
      function m(e) {
        return (0, s.Rp)(
          o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
            username: e,
            usernameOnClick: c.dG4,
          }),
        );
      }
      function f(e, E) {
        let _ = l.Z.getChannel(E);
        return null == _ || null == O.Z.getGuild(_.getGuildId())
          ? m(e)
          : (0, s.Rp)(
              o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
                username: e,
                usernameOnClick: c.dG4,
              }),
            );
      }
      function p(e) {
        var E;
        return (
          null === (E = O.Z.getGuild(e)) || void 0 === E
            ? void 0
            : E.hasFeature(c.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      E.Z = {
        stringify: function (e, E) {
          var _, n, t, L;
          let C = null === (_ = e.mentions) || void 0 === _ ? void 0 : _[0],
            G =
              null != C && "string" != typeof C
                ? I.default.getUser(C.id)
                : void 0,
            R = e.channel_id,
            g = T.ZP.getName(null, R, e.author);
          switch (e.type) {
            case c.uaV.RECIPIENT_ADD:
              if (null == G) return;
              return (0, s.Rp)(
                o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
                  username: g,
                  usernameOnClick: c.dG4,
                  otherUsername: T.ZP.getName(null, R, G),
                  otherUsernameOnClick: c.dG4,
                }),
              );
            case c.uaV.RECIPIENT_REMOVE:
              if (null == G) return;
              let d = e.author;
              if (null == d || d.id === G.id)
                return (0, s.Rp)(
                  o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
                    username: g,
                    usernameOnClick: c.dG4,
                  }),
                );
              return (0, s.Rp)(
                o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
                  username: g,
                  usernameOnClick: c.dG4,
                  otherUsername: T.ZP.getName(null, R, G),
                  otherUsernameOnClick: c.dG4,
                }),
              );
            case c.uaV.CALL:
              let { call: Z } = e;
              if (null != Z && -1 === Z.participants.indexOf(i.default.getId()))
                return (0, s.Rp)(
                  o.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
                    username: g,
                    usernameOnClick: c.dG4,
                  }),
                );
              return;
            case c.uaV.CHANNEL_NAME_CHANGE:
              return (0, s.Rp)(
                (E.isForumPost()
                  ? o.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE
                  : o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE
                ).astFormat({
                  username: g,
                  usernameOnClick: c.dG4,
                  channelName: e.content,
                }),
              );
            case c.uaV.CHANNEL_ICON_CHANGE:
              return (0, s.Rp)(
                o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
                  username: g,
                  usernameOnClick: c.dG4,
                }),
              );
            case c.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, s.Rp)(
                o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
                  username: g,
                  usernameOnClick: c.dG4,
                }),
              );
            case c.uaV.USER_JOIN:
              let U = p(E.guild_id);
              return (0, s.Rp)(
                D(e.id, U).astFormat({ username: g, usernameOnClick: c.dG4 }),
              );
            case c.uaV.GUILD_BOOST:
              return m(g);
            case c.uaV.GUILD_BOOST_TIER_1:
            case c.uaV.GUILD_BOOST_TIER_2:
            case c.uaV.GUILD_BOOST_TIER_3:
              return f(g, R);
            case c.uaV.GUILD_INVITE_REMINDER:
              return o.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
            case c.uaV.THREAD_STARTER_MESSAGE:
              return o.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
                username: g,
                threadName: E.name,
              });
            case c.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof A.ZP) return null;
              return (0, s.Rp)(
                (0, M.vp)({
                  username: g,
                  guildId: E.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case c.uaV.PURCHASE_NOTIFICATION:
              if (
                e instanceof A.ZP ||
                (null === (t = e.purchase_notification) || void 0 === t
                  ? void 0
                  : null === (n = t.guild_product_purchase) || void 0 === n
                    ? void 0
                    : n.product_name) == null
              )
                return null;
              return (0, s.Rp)(
                (0, a.i)({
                  username: g,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case c.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof A.ZP) return null;
              let H = (0, S.ZH)((0, r.e5)(e));
              return (0, s.Rp)(
                (0, u.Y)({ application: e.application, username: H.nick }),
              );
            case c.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof A.ZP) return null;
              return (0, s.Rp)(
                (0, N.B2)({
                  application: e.application,
                  username: (0, S.ZH)((0, r.e5)(e)).nick,
                }),
              );
            case c.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof A.ZP) return null;
              return (0, s.Rp)(
                (0, N.hj)({
                  application: e.application,
                  username: (0, S.ZH)((0, r.e5)(e)).nick,
                }),
              );
            case c.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (L = e.embeds) || void 0 === L
                  ? void 0
                  : L.some((e) => {
                      let { type: E } = e;
                      return E === c.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (e) {
                  let E = l.Z.getChannel(e);
                  if (null == E) return null;
                  let _ = O.Z.getGuild(E.getGuildId());
                  return null == _
                    ? null
                    : (0, s.Rp)(
                        o.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat(
                          { guildName: _.name },
                        ),
                      );
                })(R);
              return e.content;
            case c.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (e, E, _) {
                let n = l.Z.getChannel(E);
                if (null == n) return null;
                let t = O.Z.getGuild(n.getGuildId());
                return null == t
                  ? null
                  : (0, s.Rp)(
                      o.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat(
                        {
                          username: e,
                          guildName: t.name,
                          time:
                            "" !== _
                              ? new Date(_).toLocaleString(o.Z.getLocale(), {
                                  hour: "numeric",
                                  minute: "2-digit",
                                })
                              : "",
                        },
                      ),
                    );
              })(g, R, e.content);
            case c.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (e, E) {
                let _ = l.Z.getChannel(E);
                if (null == _) return null;
                let n = O.Z.getGuild(_.getGuildId());
                return null == n
                  ? null
                  : (0, s.Rp)(
                      o.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat(
                        { username: e, guildName: n.name },
                      ),
                    );
              })(g, R);
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e, E) {
          let _ = Z(E),
            n = L.default.extractTimestamp(e) % _.length;
          return _[n];
        },
        getSystemMessageUserJoinMobile: D,
        getSystemMessageBotJoin: function (e) {
          return null == C[e]
            ? null
            : o.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
                learnOnClick: { onClick: () => window.open(C[e]) },
              });
        },
        getWelcomeMessageKind: p,
      };
    },
  },
]);
//# sourceMappingURL=9d6ec8c1d3f894b2e35c.js.map
