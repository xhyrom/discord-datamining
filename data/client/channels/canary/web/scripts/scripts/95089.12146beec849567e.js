"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95089"],
  {
    960755(e, n, t) {
      t.d(n, { A: () => w });
      var l = t(735438),
        E = t.n(l),
        i = t(17928),
        A = t(228366),
        a = t(933958),
        _ = t(969151),
        r = t(717125),
        u = t(698441),
        T = t(695633),
        C = t(152007),
        o = t(617617),
        S = t(495544),
        d = t(924985),
        s = t(734057),
        I = t(945886),
        c = t(760751),
        D = t(576705),
        N = t(222823),
        L = t(309010),
        U = t(543465),
        O = t(403362),
        P = t(935208),
        R = t(32603),
        G = t(355097);
      let h = null,
        f = null,
        g = new R.Ay();
      function H() {
        let e = L.A.getChannelId(),
          n = L.A.getVoiceChannelId();
        return (h = e), (f = n), g.clear();
      }
      function m(e) {
        let {
          guild: { id: n },
        } = e;
        return g.clearGuildId(n);
      }
      function p(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return g.clearGuildId(n);
      }
      function M(e) {
        let { guildId: n } = e;
        return g.clearGuildId(n);
      }
      function y(e) {
        let { channelId: n } = e;
        return g.nonPositionalChannelIdUpdate(n);
      }
      function b(e) {
        let { channel: n } = e;
        return g.nonPositionalChannelIdUpdate(n.id);
      }
      function x(e) {
        let { id: n } = e;
        return g.nonPositionalChannelIdUpdate(n);
      }
      function F() {
        let e = L.A.getChannelId(),
          n = L.A.getVoiceChannelId(),
          t = h !== e || f !== n;
        return (
          !!t &&
          (E()([h, f, e, n])
            .uniq()
            .forEach((e) => {
              null != e && g.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (h = e),
          (f = n),
          !0)
        );
      }
      function V(e) {
        let { id: n } = e,
          t = s.A.getChannel(n);
        return null == t ? g.clearGuildId(n) : g.clearGuildId(t.guild_id);
      }
      function B(e) {
        let { guildId: n } = e;
        return g.clearGuildId(n);
      }
      function Y() {
        return g.updateSubtitles();
      }
      function v(e) {
        let { guildScheduledEvent: n } = e;
        return g.updateSubtitles(n.guild_id);
      }
      class j extends i.Ay.Store {
        static displayName = "ChannelListStore";
        initialize() {
          this.waitFor(
            T.A,
            S.default,
            d.A,
            s.A,
            I.A,
            a.Ay,
            c.A,
            r.A,
            u.Ay,
            C.A,
            D.A,
            N.Ay,
            L.A,
            U.Ay,
            o.A,
          );
        }
        getGuild(e, n) {
          let t = g.getGuild(
            e,
            n?.guildActionRows ?? [],
            n?.channelNoticeRows ?? [],
          );
          return { guildChannelsVersion: t.version, guildChannels: t };
        }
        getGuildWithoutChangingGuildActionRows(e) {
          let n = g.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = g.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      let w = new j(A.h, {
        APPLICATION_FETCH_FAIL: Y,
        APPLICATION_FETCH_SUCCESS: Y,
        APPLICATION_FETCH: Y,
        APPLICATIONS_FETCH_FAIL: Y,
        APPLICATIONS_FETCH_SUCCESS: Y,
        APPLICATIONS_FETCH: Y,
        BACKGROUND_SYNC: H,
        BULK_ACK: function (e) {
          let { channels: n } = e,
            t = !1;
          return (
            E()(n)
              .map((e) => s.A.getChannel(e.channelId)?.guild_id)
              .filter(O.Vq)
              .uniq()
              .forEach((e) => {
                g.clearGuildId(e) && (t = !0);
              }),
            t
          );
        },
        BULK_CLEAR_RECENTS: M,
        CACHE_LOADED_LAZY: H,
        CATEGORY_COLLAPSE_ALL: M,
        CATEGORY_COLLAPSE: V,
        CATEGORY_EXPAND_ALL: M,
        CATEGORY_EXPAND: V,
        CHANNEL_ACK: y,
        CHANNEL_COLLAPSE: function (e) {
          let { channelId: n } = e;
          return g.clearGuildId(s.A.getChannel(n)?.guild_id);
        },
        CHANNEL_CREATE: p,
        CHANNEL_DELETE: p,
        CHANNEL_LOCAL_ACK: y,
        CHANNEL_MUTE_EXPIRED: M,
        CHANNEL_RTC_UPDATE_CHAT_OPEN: y,
        CHANNEL_SELECT: F,
        CHANNEL_INFO: function (e) {
          let { guildId: n } = e;
          return g.clearGuildId(n);
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: n } = e,
            t = !1;
          return (
            E()(n)
              .map((e) => e.guild_id)
              .uniq()
              .forEach((e) => {
                g.clearGuildId(e) && (t = !0);
              }),
            t
          );
        },
        CONNECTION_OPEN_SUPPLEMENTAL: Y,
        CONNECTION_OPEN: H,
        CURRENT_USER_UPDATE: H,
        DECAY_READ_STATES: H,
        DEV_TOOLS_DESIGN_TOGGLE_SET: H,
        DISABLE_AUTOMATIC_ACK: y,
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { channelId: n } = e;
          return g.nonPositionalChannelIdUpdate(n);
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
          let { location: n } = e;
          return g.updateSubtitles((0, _.D)(n), (0, _.H)(n));
        },
        EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
          Y();
        },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
        ENABLE_AUTOMATIC_ACK: y,
        FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
          let { guildId: n } = e;
          return g.updateSubtitles(n);
        },
        GAMES_DATABASE_FETCH_FAIL: Y,
        GAMES_DATABASE_FETCH: Y,
        GAMES_DATABASE_UPDATE: Y,
        GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
        GUILD_CREATE: m,
        GUILD_DELETE: m,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: n, user: t } = e;
          return S.default.getId() === t.id && g.clearGuildId(n);
        },
        GUILD_MUTE_EXPIRED: M,
        GUILD_ROLE_CREATE: M,
        GUILD_ROLE_DELETE: M,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
        GUILD_ROLE_UPDATE: M,
        GUILD_SCHEDULED_EVENT_CREATE: v,
        GUILD_SCHEDULED_EVENT_DELETE: v,
        GUILD_SCHEDULED_EVENT_UPDATE: v,
        GUILD_TOGGLE_COLLAPSE_MUTED: M,
        GUILD_UPDATE: m,
        IMPERSONATE_STOP: M,
        IMPERSONATE_UPDATE: M,
        LOAD_CHANNELS: function (e) {
          e.channels.forEach((e) => {
            let { guildId: n } = e;
            return g.clearGuildId(n);
          });
        },
        LOAD_MESSAGES_SUCCESS: y,
        MESSAGE_ACK: y,
        MESSAGE_CREATE: function (e) {
          let { channelId: n } = e;
          return g.nonPositionalChannelIdUpdate(n);
        },
        MESSAGE_DELETE_BULK: y,
        MESSAGE_DELETE: y,
        NOTIFICATION_SETTINGS_UPDATE: H,
        OVERLAY_INITIALIZE: H,
        PASSIVE_UPDATE_V2: function (e) {
          return g.clearGuildId(e.guildId);
        },
        RECOMPUTE_READ_STATES: H,
        RESORT_THREADS: y,
        SET_RECENTLY_ACTIVE_COLLAPSED: H,
        THREAD_CREATE: b,
        THREAD_DELETE: function (e) {
          let { channel: n } = e;
          return g.nonPositionalChannelUpdate(n);
        },
        THREAD_LIST_SYNC: M,
        THREAD_MEMBER_UPDATE: x,
        THREAD_MEMBERS_UPDATE: x,
        THREAD_UPDATE: b,
        TRY_ACK: y,
        UPDATE_CHANNEL_DIMENSIONS: y,
        UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
          let { guildId: n } = e;
          g.updateSubtitles(n);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: n } = e;
          n.forEach((e) => {
            let { guild_id: n } = e;
            return g.clearGuildId(n);
          });
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
        USER_GUILD_SETTINGS_GUILD_UPDATE: M,
        USER_SETTINGS_PROTO_UPDATE: function (e) {
          let { settings: n } = e;
          if (n.type !== G.oD.PRELOADED_USER_SETTINGS) return !1;
          let t = n.proto.guilds?.guilds,
            l = !1;
          return (
            null != t &&
              P.default.keys(t).forEach((e) => {
                null != t[e].guildRecentsDismissedAt &&
                  (l = g.updateRecentsCategory(e) || l);
              }),
            l
          );
        },
        VOICE_CATEGORY_COLLAPSE: B,
        VOICE_CATEGORY_EXPAND: B,
        VOICE_CHANNEL_SELECT: F,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
          return g.nonPositionalChannelIdUpdate(e.id);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: n } = e,
            t = F(),
            l = new Set();
          for (let { channelId: e, oldChannelId: E } of n)
            null == E ||
              l.has(E) ||
              (g.nonPositionalChannelIdUpdate(E) && (t = !0), l.add(E)),
              null == e ||
                l.has(e) ||
                (g.nonPositionalChannelIdUpdate(e) && (t = !0), l.add(e));
          return t;
        },
        WINDOW_FOCUS: function () {
          return null != h && g.nonPositionalChannelIdUpdate(h);
        },
      });
    },
    742589(e, n, t) {
      t.d(n, { A: () => D, I: () => d });
      var l = t(627968);
      t(64700);
      var E = t(607399),
        i = t(793574),
        A = t(688810),
        a = t(268218),
        _ = t(335180),
        r = t(723702),
        u = t(19575),
        T = t(58736),
        C = t(746080),
        o = t(546930);
      let S = (0, a.Fe)({
        createPromise: () =>
          Promise.all([
            t.e("33521"),
            t.e("1195"),
            t.e("79093"),
            t.e("11394"),
            t.e("38939"),
            t.e("61156"),
            t.e("81202"),
            t.e("66016"),
            t.e("20803"),
            t.e("21225"),
            t.e("12549"),
            t.e("83752"),
          ]).then(t.bind(t, 381687)),
        webpackId: 381687,
        name: "Search",
        renderLoader: _.O7,
      });
      async function d(e) {
        if (!e && (0, r.isMac)() && r.isPlatformEmbedded) {
          let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
          "Minimize" === e
            ? u.Ay.minimize()
            : "Maximize" === e && u.Ay.maximize();
        }
      }
      function s(e) {
        let {
          children: n,
          className: t,
          channelId: i,
          guildId: A,
          innerClassname: a,
          transparent: _ = !1,
          hidden: r = !1,
          toolbar: u,
          mobileToolbar: s,
          "aria-label": I,
          "aria-labelledby": c,
          scrollable: D,
          role: N,
          hideSearch: L,
          disableDoubleClick: U,
        } = e;
        return (0, l.jsx)(T.Ay, {
          className: t,
          innerClassName: a,
          toolbar: (function () {
            if (null == u) return null;
            let e = null != i && !L;
            return E.Fr
              ? s
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    u,
                    e && !(0, C.jq)(i)
                      ? (0, l.jsx)(
                          S,
                          { guildId: A, channelId: i, className: o.$P },
                          A ?? i,
                        )
                      : null,
                  ],
                });
          })(),
          transparent: _,
          hidden: r,
          onDoubleClick: () => d(U),
          "aria-label": I,
          "aria-labelledby": c,
          role: N,
          scrollable: D,
          children: n,
        });
      }
      function I(e) {
        let {
          children: n,
          className: t,
          "aria-label": E,
          "aria-labelledby": i,
          role: A,
          disableDoubleClick: a,
        } = e;
        return (0, l.jsx)(T.Ay, {
          className: t,
          onDoubleClick: () => d(a),
          "aria-label": E,
          "aria-labelledby": i,
          role: A,
          children: n,
        });
      }
      function c(e) {
        let { isAuthenticated: n = !0, ...t } = e,
          { analyticsLocations: E } = (0, A.Ay)(i.A.HEADER_BAR);
        return (0, l.jsx)(A.f5, {
          value: E,
          children: n
            ? (0, l.jsx)(s, { ...t, className: t.className })
            : (0, l.jsx)(I, { ...t, className: t.className }),
        });
      }
      (c.Title = T.Ay.Title),
        (c.Icon = T.Ay.Icon),
        (c.ChannelIcon = T.Ay.ChannelIcon),
        (c.Divider = T.Ay.Divider),
        (c.Caret = T.Ay.Caret);
      let D = c;
    },
    674168(e, n, t) {
      t.d(n, { m: () => O });
      var l = t(627968);
      t(64700);
      var E = t(17928),
        i = t(834730),
        A = t(862482),
        a = t(939249),
        _ = t(789645),
        r = t(403581),
        u = t(534514),
        T = t(821609),
        C = t(725807),
        o = t(212168),
        S = t(780964),
        d = t(858897),
        s = t(287809),
        I = t(927578),
        c = t(652215),
        D = t(49999),
        N = t(788868),
        L = t(985018),
        U = t(871425);
      function O(e) {
        var n;
        let { onClose: t, markAsDismissed: O } = e,
          P = (0, E.bG)([s.default], () => s.default.getCurrentUser()),
          R =
            (n = P?.premiumType) === N.PremiumTypes.TIER_2
              ? L.intl.string(L.t.jqO5Qn)
              : null == n
                ? L.intl.string(L.t.f2qjw5)
                : L.intl.string(L.t.SblICW),
          G = I.Ay.canUseCustomCallSounds(P);
        return (0, l.jsxs)(o.A, {
          isShown: !0,
          type: o.i.PREMIUM,
          className: U.ne,
          backgroundClassName: U.u4,
          children: [
            null != O
              ? (0, l.jsx)(a.D, {
                  className: U.VN,
                  onClick: () => O?.(D.i.DISMISS),
                  "aria-label": L.intl.string(L.t.cpT0Cq),
                  children: (0, l.jsx)(_.P, {
                    size: "xs",
                    color: "currentColor",
                    className: U.ut,
                  }),
                })
              : null,
            (0, l.jsxs)("div", {
              className: U.ex,
              children: [
                (0, l.jsx)(r.t, {
                  size: "sm",
                  color: "currentColor",
                  className: U.ax,
                }),
                (0, l.jsx)(u.D, {
                  variant: "heading-sm/bold",
                  children: L.intl.string(L.t.dTbAxx),
                }),
              ],
            }),
            (0, l.jsx)(i.E, { variant: "text-sm/normal", children: R }),
            G
              ? (0, l.jsx)(T.$, {
                  onClick: function () {
                    (0, d.openUserSettings)(S.X.SOUNDBOARD_CATEGORY),
                      t?.(),
                      O?.(D.i.PRIMARY);
                  },
                  text: L.intl.string(L.t.RzWDqY),
                  fullWidth: !0,
                })
              : (0, l.jsx)(C.A, {
                  textOptions: { textOverride: L.intl.string(L.t.pj0XBN) },
                  subscriptionTier: N.pe.TIER_2,
                  premiumModalAnalyticsLocation: {
                    section: c.JJy.SOUNDBOARD_SOUND_PICKER,
                    object: c.ZSU.BUTTON_CTA,
                  },
                  color: A.$n.Colors.GREEN,
                  onSubscribeModalClose: () => O?.(D.i.PRIMARY),
                }),
          ],
        });
      }
    },
    975648(e, n, t) {
      let l;
      t.d(n, { A: () => _ });
      var E = t(17928),
        i = t(228366);
      let A = !1;
      class a extends E.Ay.Store {
        static displayName = "DataHarvestStore";
        get harvestType() {
          return l;
        }
        get requestingHarvest() {
          return A;
        }
      }
      let _ = new a(i.h, {
        CONNECTION_OPEN: function () {
          l = void 0;
        },
        UPDATE_DATA_HARVEST_TYPE: function (e) {
          let { harvestType: n } = e;
          (A = !1), (l = n);
        },
        LOAD_DATA_HARVEST_TYPE_START: function () {
          A = !0;
        },
        LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
          A = !1;
        },
        LOGOUT: function () {
          (A = !1), (l = null);
        },
      });
    },
    878460(e, n, t) {
      t.d(n, { A: () => r });
      var l = t(17928),
        E = t(228366);
      let i = {},
        A = null;
      function a() {
        (i = {}), (A = null);
      }
      class _ extends l.Ay.Store {
        static displayName = "EmailSettingsStore";
        getEmailSettings() {
          return { categories: i, initialized: A };
        }
      }
      let r = new _(E.h, {
        CONNECTION_OPEN: a,
        LOGOUT: a,
        EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
          let { settings: n } = e;
          (i = n.categories), (A = n.initialized);
        },
        EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
          let { settings: n } = e;
          i = n.categories;
        },
        EMAIL_SETTINGS_UPDATE: function (e) {
          let { updates: n } = e;
          i = { ...i, ...n };
        },
      });
    },
  },
]);
//# sourceMappingURL=95089.12146beec849567e.js.map
