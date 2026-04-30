"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57060"],
  {
    115328(e, t, n) {
      n.d(t, { A: () => d });
      var l = n(17928),
        i = n(228366);
      let s = {
          enable_recently_active: "Enable recently active channels",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          show_icymi_debug_scores: "Show ICYMI debug scores",
          channel_list_scrim: "Dim the channel list when chat appears",
          mana_radio_large_variant: "Larger Radio",
          mana_checkbox_large_variant: "Larger Checkbox",
          mana_switch_large_variant: "Larger Switch",
          mana_switch_show_icons: "Show icons on switches",
          show_header_debug_info: "Show header component debug overlays",
        },
        a = {};
      class r extends l.Ay.DeviceSettingsStore {
        static displayName = "DevToolsDesignTogglesStore";
        static persistKey = "DevToolsDesignTogglesStore";
        getUserAgnosticState() {
          return { toggleStates: a };
        }
        initialize(e) {
          for (var t in s) {
            let n = e?.toggleStates?.[t] ?? !1;
            a[t] = n;
          }
        }
        get(e) {
          return a[e] ?? !1;
        }
        set(e, t) {
          return (a[e] = t), t;
        }
        all() {
          return a;
        }
        allWithDescriptions() {
          return Object.entries(a).map((e) => {
            let [t, n] = e;
            return [t, n, s[t]];
          });
        }
      }
      let d = new r(i.h, {
        DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
          a[e.toggle] = e.value;
        },
      });
    },
    239433(e, t, n) {
      n(17928), n(115328);
    },
    281405(e, t, n) {
      n.d(t, { n: () => i });
      var l,
        i =
          (((l = {}).GUILD_PREMIUM_PROGRESS_BAR = "guild-premium-progress-bar"),
          (l.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events"),
          (l.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options"),
          (l.GUILD_FAVORITES = "favorites"),
          (l.GUILD_CHANNEL_LIST_OPT_IN_NOTICE =
            "guild-channel-list-opt-in-notice"),
          (l.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions"),
          (l.GUILD_GAME_SHOP = "game-shop"),
          (l.GUILD_SHOP = "shop"),
          (l.GUILD_HOME = "@home"),
          (l.CHANNELS_AND_ROLES = "channels-and-roles"),
          (l.BROWSE_CHANNELS = "browse-channels"),
          (l.GUILD_DIRECTORY = "guild-directory"),
          (l.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR =
            "guild-new-member-actions-progress-bar"),
          (l.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety"),
          (l.GUILD_BOOSTS = "guild-boosts"),
          (l.GAME_SERVERS = "game-servers"),
          (l.GAME_SERVERS_EMPTY = "game-servers-empty"),
          l);
      /^(14256|21552)$/.test(n.j);
    },
    240935(e, t, n) {
      n.d(t, { A: () => h });
      var l = n(17928),
        i = n(228366),
        s = n(734057),
        a = n(309010),
        r = n(543465);
      let d = {},
        u = {},
        o = {};
      function c() {
        let e = a.A.getChannelId();
        if (null == e) return;
        let t = s.A.getChannel(e);
        if (null == t || null == t.guild_id) return;
        let n = t.guild_id;
        if (
          (null == o[e] && (o[e] = 0),
          t.isThread() ||
            (r.Ay.isOptInEnabled(n) && !r.Ay.isChannelOrParentOptedIn(n, t.id)))
        ) {
          delete o[e], null != d[n] && d[n].delete(e);
          return;
        }
        return (o[e]++,
        null == d[n] && (d[n] = new Set()),
        r.Ay.isFavorite(n, e))
          ? void d[n].delete(e)
          : (null == u[n] || !u[n].has(e)) && o[e] > 50
            ? (d[n].add(e), !0)
            : void 0;
      }
      class _ extends l.Ay.PersistedStore {
        static displayName = "FavoritesSuggestionStore";
        static persistKey = "FavoritesSuggestionStore";
        initialize(e) {
          if (
            (this.waitFor(s.A, a.A, r.Ay), this.syncWith([a.A], c), null == e)
          )
            return;
          let {
            suggestedChannels: t,
            dismissedSuggestions: n,
            channelOpensByChannelId: l,
          } = e;
          if (null != t) for (let e in t) d[e] = new Set(t[e]) ?? new Set();
          if (null != n) for (let e in n) u[e] = new Set(n[e]) ?? new Set();
          o = l ?? {};
        }
        getSuggestedChannelId(e) {
          return null;
        }
        getState() {
          return {
            suggestedChannels: {},
            dismissedSuggestions: {},
            channelOpensByChannelId: {},
          };
        }
      }
      let h = new _(i.h, {
        DISMISS_FAVORITE_SUGGESTION: function (e) {
          let { guildId: t, channelId: n } = e;
          return (
            null == u[t] && (u[t] = new Set()), u[t].add(n), d[t].delete(n), !0
          );
        },
      });
    },
    50827(e, t, n) {
      n.d(t, { A: () => r });
      var l = n(17928),
        i = n(228366);
      let s = new Set();
      class a extends l.Ay.PersistedStore {
        static displayName = "RecentlyActiveCollapseStore";
        static persistKey = "RecentlyActiveCollapseStore";
        initialize(e) {
          s.clear(), e?.guilds.forEach((e) => s.add(e));
        }
        isCollapsed(e) {
          return s.has(e);
        }
        getState() {
          return { guilds: s };
        }
      }
      let r = new a(i.h, {
        SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
          let { guildId: t, collapsed: n } = e;
          n ? s.add(t) : s.delete(t);
        },
      });
    },
    454058(e, t, n) {
      n.d(t, { A: () => O });
      var l = n(17928),
        i = n(228366),
        s = n(334738),
        a = n(940382),
        r = n(617617),
        d = n(495544),
        u = n(734057),
        o = n(808728),
        c = n(696451),
        _ = n(71393),
        h = n(222823),
        A = n(543465),
        E = n(927813),
        S = n(935208),
        g = n(652215);
      let I = new Set(),
        C = {},
        N = {};
      function p(e, t) {
        let n = C[e];
        null != n &&
          null != t &&
          n.has(t) &&
          A.Ay.isOptInEnabled(e) &&
          !u.A.getChannel(t)?.isThread() &&
          null == h.Ay.ackMessageId(t) &&
          i.h.wait(() =>
            (0, s.ack)(
              t,
              {
                object: g.ZSU.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED,
                objectType: g.AnalyticsObjectTypes.ACK_AUTOMATIC,
              },
              !0,
              !0,
              S.default.atPreviousMillisecond(t),
            ),
          );
      }
      function y(e) {
        if (null != C[e]) return;
        let t = o.Ay.getChannels(e)[o.I6].map((e) => e.channel.id),
          n = c.Ay.getMember(e, d.default.getId())?.joinedAt;
        if (null == n) return;
        C[e] = new Set();
        let l = new Date(n).getTime();
        0 !== t.length &&
          ((C[e] = new Set(
            t.filter((t) => {
              let n = S.default.extractTimestamp(t);
              return (
                null == h.Ay.getTrackedAckMessageId(t) &&
                n > Date.now() - E.A.Millis.WEEK &&
                n > r.A.getGuildRecentsDismissedAt(e) &&
                n > l &&
                !A.Ay.isChannelOrParentOptedIn(e, t)
              );
            }),
          )),
          (N[e] = Date.now()));
      }
      function w() {
        S.default.keys(C).forEach((e) => {
          let t = C[e];
          C[e] = new Set(
            [...t].filter((t) => !A.Ay.isChannelOrParentOptedIn(e, t)),
          );
        });
      }
      class L extends l.Ay.Store {
        static displayName = "NewChannelsStore";
        initialize() {
          this.waitFor(d.default, u.A, o.Ay, c.Ay, _.A, h.Ay, A.Ay, r.A),
            this.syncWith([A.Ay], w);
        }
        getNewChannelIds(e) {
          return null != e && null == C[e] && y(e), null != e ? (C[e] ?? I) : I;
        }
        shouldIndicateNewChannel(e, t) {
          if (null == e) return !1;
          let n = _.A.getGuild(e);
          return (
            null != n &&
            !!n.features.has(g.GuildFeatures.COMMUNITY) &&
            (null != e && null == C[e] && y(e),
            C[e]?.has(t) && null == h.Ay.getTrackedAckMessageId(t))
          );
        }
      }
      let O = new L(i.h, {
        BULK_CLEAR_RECENTS: function (e) {
          let { guildId: t, channelIds: n } = e;
          if (null == C[t]) return !1;
          n.forEach((e) => C[t].delete(e)), 0 === C[t].size && delete C[t];
        },
        CHANNEL_ACK: () => !0,
        CHANNEL_SELECT: function (e) {
          let { guildId: t, channelId: n } = e;
          return (
            null != t &&
            (null == C[t] || N[t] < Date.now() - E.A.Millis.HOUR
              ? (y(t), !0)
              : (null != n && p(t, n), !1))
          );
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
          let { guildId: t, channelId: n, sidebarType: l } = e;
          return null != t && l === a.PE.VIEW_CHANNEL && (p(t, n), !1);
        },
        SIDEBAR_VIEW_GUILD: function (e) {
          let { guildId: t, baseChannelId: n } = e;
          return null != t && (p(t, n), !1);
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          delete C[t.id];
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          t.isVocal() ||
            ((C[t.guild_id] = C[t.guild_id] ?? new Set()),
            C[t.guild_id].add(t.id));
        },
      });
    },
    945886(e, t, n) {
      n.d(t, { A: () => c });
      var l = n(17928),
        i = n(228366),
        s = n(935208),
        a = n(734057);
      let r = {},
        d = r;
      function u() {
        s.default.keys(d).forEach((e) => {
          null == a.A.getChannel(e) && delete d[e];
        });
      }
      class o extends l.Ay.PersistedStore {
        static displayName = "CollapsedVoiceChannelStore";
        static persistKey = "collapsedChannels";
        initialize(e) {
          this.waitFor(a.A), (d = e ?? r);
        }
        getState() {
          return d;
        }
        getCollapsed() {
          return d;
        }
        isCollapsed(e) {
          return d[e] || !1;
        }
      }
      let c = new o(i.h, {
        CONNECTION_OPEN: u,
        OVERLAY_INITIALIZE: u,
        CHANNEL_COLLAPSE: function (e) {
          let { channelId: t } = e;
          d[t] ? delete d[t] : (d[t] = !0), (d = { ...d });
        },
      });
    },
  },
]);
//# sourceMappingURL=57060.4ee1c2745ebbca3c.js.map
