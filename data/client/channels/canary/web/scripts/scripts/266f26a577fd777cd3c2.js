"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65840"],
  {
    863750: function (e, t, n) {
      n(47120);
      var i,
        s = n(442837),
        l = n(570140);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let a = {
          enable_recently_active: "Enable recently active channels",
          happening_main_tab: "Enable Happening tab containing summaries",
          theme_setting_in_account_sheet:
            "Show theme settings in the Account action sheet",
          cozy_header: "Cozy header",
          mobile_profile_effect_debug_controls:
            "mobile_profile_effect_debug_controls",
          nav_experiment_server_drawer_enabled:
            "[NavI] Enable expandable server drawer",
          shop_include_unpublished: "[Shop] show unpublished items in shop",
          disable_channel_list:
            "Disable channel list -- for performance testing. You probably don't want to turn this on, lol",
          show_icymi_debug_scores: "Show ICYMI debug scores",
          only_channel_screen:
            "Down with PanelsView, rely on only ChannelScreen!",
        },
        d = {};
      class o extends (i = s.ZP.DeviceSettingsStore) {
        getUserAgnosticState() {
          return { toggleStates: d };
        }
        initialize(e) {
          for (var t in a) {
            var n, i;
            let s =
              null !==
                (i =
                  null == e
                    ? void 0
                    : null === (n = e.toggleStates) || void 0 === n
                      ? void 0
                      : n[t]) &&
              void 0 !== i &&
              i;
            d[t] = s;
          }
        }
        get(e) {
          var t;
          return null !== (t = d[e]) && void 0 !== t && t;
        }
        set(e, t) {
          return (d[e] = t), t;
        }
        all() {
          return d;
        }
        allWithDescriptions() {
          return Object.entries(d).map((e) => {
            let [t, n] = e;
            return [t, n, a[t]];
          });
        }
      }
      r(o, "displayName", "DevToolsDesignTogglesStore"),
        r(o, "persistKey", "DevToolsDesignTogglesStore"),
        (t.Z = new o(l.Z, {
          DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            d[e.toggle] = e.value;
          },
        }));
    },
    238428: function (e, t, n) {
      n(442837), n(863750);
    },
    540126: function (e, t, n) {
      n.d(t, {
        Bz: function () {
          return eI;
        },
        Cb: function () {
          return W;
        },
        Fq: function () {
          return q;
        },
        PB: function () {
          return X;
        },
        VR: function () {
          return er;
        },
        ZP: function () {
          return et;
        },
        p2: function () {
          return K;
        },
        wF: function () {
          return $;
        },
        wZ: function () {
          return J;
        },
        wd: function () {
          return Q;
        },
        zR: function () {
          return eE;
        },
      }),
        n(47120),
        n(411104),
        n(653041),
        n(390547),
        n(724458),
        n(733860);
      var i,
        s,
        l,
        r,
        a = n(512722),
        d = n.n(a),
        o = n(392711),
        h = n.n(o),
        u = n(317381),
        c = n(812206),
        C = n(12498),
        g = n(430198),
        p = n(931261),
        f = n(924301),
        v = n(160404),
        I = n(57132),
        E = n(798423),
        S = n(18036),
        _ = n(798379),
        y = n(398758),
        w = n(22082),
        m = n(601070),
        N = n(569471),
        A = n(131704),
        L = n(680089),
        R = n(592125),
        b = n(58468),
        Z = n(430824),
        O = n(496675),
        T = n(306680),
        P = n(944486),
        D = n(9156),
        G = n(979651),
        U = n(938475),
        V = n(823379),
        M = n(709054),
        F = n(968358),
        H = n(203818),
        B = n(443063),
        z = n(981631),
        x = n(176505),
        Y = n(231338);
      function j(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let k = "placeholder-channel-id",
        W = 2;
      ((l = i || (i = {}))[(l.CannotShow = 1)] = "CannotShow"),
        (l[(l.DoNotShow = 2)] = "DoNotShow"),
        (l[(l.WouldShowIfUncollapsed = 3)] = "WouldShowIfUncollapsed"),
        (l[(l.Show = 4)] = "Show"),
        ((r = s || (s = {}))[(r.CHANNEL_NOTICES = 0)] = "CHANNEL_NOTICES"),
        (r[(r.GUILD_ACTIONS = 1)] = "GUILD_ACTIONS"),
        (r[(r.FAVORITES = 2)] = "FAVORITES"),
        (r[(r.RECENTS = 3)] = "RECENTS"),
        (r[(r.UNCATEGORIZED_CHANNELS = 4)] = "UNCATEGORIZED_CHANNELS"),
        (r[(r.FIRST_NAMED_CATEGORY = 5)] = "FIRST_NAMED_CATEGORY");
      let q = 0,
        J = 1,
        K = 2,
        X = 3,
        Q = 4,
        $ = 5,
        ee = new Set([String(B.z.GUILD_DIRECTORY)]);
      class et {
        _areGuildActionRowsUpdated(e, t) {
          var n;
          return !h().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
              ? void 0
              : n
                  .getGuildActionSection()
                  .getRows()
                  .filter((e) => !ee.has(e)),
            t,
          );
        }
        _areChannelNoticeRowsUpdated(e, t) {
          var n;
          return !h().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
              ? void 0
              : n.getChannelNoticeSection().getRows(),
            t,
          );
        }
        getGuild(e, t, n) {
          return (
            (!(e in this.guilds) ||
              this._areGuildActionRowsUpdated(e, t) ||
              this._areChannelNoticeRowsUpdated(e, n)) &&
              (this.guilds[e] = new en(e, t, n)),
            this.guilds[e]
          );
        }
        getGuildChannelRowsOnly(e) {
          return (
            !(e in this.guilds) && (this.guilds[e] = new en(e, [], [])),
            this.guilds[e]
          );
        }
        clear() {
          this.guilds = {};
        }
        clearGuildId(e) {
          return null != e && e in this.guilds && (delete this.guilds[e], !0);
        }
        updateRecentsCategory(e) {
          var t, n;
          if (null == e || !(e in this.guilds)) return !1;
          return (
            null !==
              (n =
                null === (t = this.guilds[e]) || void 0 === t
                  ? void 0
                  : t.updateRecentsCategory()) &&
            void 0 !== n &&
            n
          );
        }
        nonPositionalChannelIdUpdate(e) {
          let t = R.Z.getBasicChannel(e);
          return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof A.Sf || null != (t = R.Z.getChannel(e))) &&
            this.nonPositionalChannelUpdate(t)
          );
        }
        nonPositionalChannelUpdate(e) {
          if (null == e.guild_id) return !1;
          let t = this.guilds[e.guild_id];
          if (null == t) return !1;
          let n = !1;
          return (
            e.isThread() &&
              (n = this.nonPositionalChannelIdUpdate(e.parent_id)),
            t.nonPositionalChannelUpdate(e) || n
          );
        }
        updateSubtitles(e, t) {
          (null == e
            ? Object.values(this.guilds)
            : e in this.guilds
              ? [this.guilds[e]]
              : []
          ).forEach((e) => e.updateSubtitles(t));
        }
        constructor() {
          j(this, "guilds", {});
        }
      }
      class en {
        get initializationData() {
          return {
            selectedChannel: R.Z.getChannel(P.Z.getChannelId()),
            selectedVoiceChannelId: P.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads:
              m.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: m.Z.getActiveJoinedUnreadThreadsForGuild(
              this.id,
            ),
          };
        }
        invalidate() {
          (this.sections = null),
            (this.rows = null),
            (this.sortedNamedCategories = null),
            (this.firstVoiceChannel = void 0),
            this.version++;
        }
        getSortedNamedCategories() {
          return (
            null == this.sortedNamedCategories && this.getRows(),
            this.sortedNamedCategories
          );
        }
        getSortedCategories() {
          return [
            this.favoritesCategory,
            this.recentsCategory,
            this.noParentCategory,
            ...this.getSortedNamedCategories(),
            this.voiceChannelsCategory,
          ];
        }
        getSections() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (null == this.sections &&
            (this.sections = this.getRows().map((e) => e.length)),
          e)
            ? [...this.sections]
            : this.sections;
        }
        getRows() {
          if (null == this.rows) {
            (this.sortedNamedCategories = h().sortBy(
              Object.values(this.categories),
              (e) => e.record.position,
            )),
              (this.rows = [
                this.channelNoticeSection,
                this.guildActionSection,
                this.favoritesCategory,
                this.recentsCategory,
                this.noParentCategory,
                ...this.sortedNamedCategories,
                this.voiceChannelsCategory,
              ].map((e) => e.getRows()));
            let e = 0;
            for (let t of [
              this.noParentCategory,
              ...this.sortedNamedCategories,
            ])
              for (let n of ((t.position = ++e), t.getShownChannelIds()))
                t.channels[n].position = ++e;
          }
          return this.rows;
        }
        getCategoryFromSection(e) {
          switch (e) {
            case J:
              throw Error("Invalid section. Use getGuildActionSection instead");
            case K:
              return this.favoritesCategory;
            case Q:
              return this.noParentCategory;
            case this.recentsSectionNumber:
              return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
              return this.voiceChannelsCategory;
            default:
              return this.getSortedNamedCategories()[e - $];
          }
        }
        getNamedCategoryFromSection(e) {
          return (
            (e -= $),
            d()(
              e >= 0 && e < this.getSortedNamedCategories().length,
              "invalid section index ".concat(e),
            ),
            this.getSortedNamedCategories()[e]
          );
        }
        getGuildActionSection() {
          return this.guildActionSection;
        }
        getChannelNoticeSection() {
          return this.channelNoticeSection;
        }
        getChannelFromSectionRow(e, t) {
          let n = this.getCategoryFromSection(e);
          if (null == n) return null;
          let i = n.channels[n.getShownChannelIds()[t]];
          return null == i ? null : { category: n, channel: i };
        }
        isPlaceholderRow(e, t) {
          return (
            d()(e > J, "Invalid section"),
            e !== this.recentsSectionNumber && this.getRows()[e][t] === k
          );
        }
        getFirstVoiceChannel(e) {
          if (void 0 === this.firstVoiceChannel) {
            if (
              ((this.firstVoiceChannel =
                this.favoritesCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel)
            )
              return this.firstVoiceChannel;
            if (
              ((this.firstVoiceChannel =
                this.noParentCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel)
            )
              return this.firstVoiceChannel;
            for (let t of this.getSortedNamedCategories())
              if (null != t.getFirstVoiceChannel(e)) {
                this.firstVoiceChannel = t.getFirstVoiceChannel(e);
                break;
              }
          }
          return this.firstVoiceChannel;
        }
        getSectionRowsFromChannel(e) {
          if (
            (function (e) {
              return null != e && em.has(e);
            })(e)
          )
            return [
              {
                row: this.getGuildActionSection().getRows().indexOf(e),
                section: J,
              },
            ];
          let t = [],
            n = R.Z.getChannel(e);
          if (null == n || null == e) return t;
          let i = n.isThread();
          if ((i && (n = R.Z.getChannel(n.parent_id)), null == n)) return t;
          let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
          s >= 0 && t.push({ section: K, row: s });
          let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
          if (
            (l >= 0 && t.push({ section: this.recentsSectionNumber, row: l }),
            n.type === z.d4z.GUILD_CATEGORY)
          )
            return [
              {
                section:
                  h().findIndex(
                    this.getSortedNamedCategories(),
                    (e) => e.id === (null == n ? void 0 : n.id),
                  ) + $,
              },
            ];
          let r = this.getCategory(n),
            a =
              r instanceof es
                ? Q
                : this.getSortedNamedCategories().indexOf(r) + $,
            d = r.getShownChannelIds().indexOf(n.id);
          if (a >= 0 && d >= 0) {
            let s = i ? r.channels[n.id].threadIds.indexOf(e) : 0;
            t.push({ section: a, row: d, threadOffset: s });
          }
          let o = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
          return (
            o >= 0 &&
              t.push({ section: this.voiceChannelsSectionNumber, row: o }),
            t
          );
        }
        getCategory(e) {
          return null != e.parent_id && e.parent_id in this.categories
            ? this.categories[e.parent_id]
            : this.noParentCategory;
        }
        updateRecentsCategory() {
          let e = this.recentsCategory.updateAllChannels(
            this.initializationData,
          );
          return e && this.invalidate(), e;
        }
        nonPositionalChannelUpdate(e) {
          let t = this.initializationData,
            n = this.getCategory(e).updateChannel(e, t);
          return (
            this.favoritesCategory.updateChannel(e, t) && (n = !0),
            this.recentsCategory.updateChannel(e, t) && (n = !0),
            this.voiceChannelsCategory.updateChannel(e, t) && (n = !0),
            n && this.invalidate(),
            n
          );
        }
        getSlicedChannels(e, t) {
          d()(e.length > 0, "must have at least one channel in the slice");
          let n = e[0],
            i = e[e.length - 1],
            s = !0,
            l = !1,
            r = [],
            a = [];
          for (let e of this.getSortedCategories()) {
            let d =
              (null == t ? void 0 : t.ignoreRecents) &&
              e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
              let o = e.channels[t];
              s && (o.id === n.id ? (s = !1) : !d && r.push(o)),
                l && !d && a.push(o),
                !s && !l && o.id === i.id && (l = !0);
            }
          }
          return [r, e, a];
        }
        getChannels(e) {
          let t = [];
          if (null == this.allChannelsById)
            for (let e of ((this.allChannelsById = {}),
            this.getSortedCategories()))
              for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
          for (let n of e)
            null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
          return t;
        }
        updateSubtitles(e) {
          let t = [];
          if (null != e) {
            let n = R.Z.getChannel(e);
            if (null != n) {
              if (n.id in this.favoritesCategory.channels)
                t = [this.favoritesCategory.channels[n.id]];
              else if (n.id in this.recentsCategory.channels)
                t = [this.recentsCategory.channels[n.id]];
              else {
                let i = this.getCategory(n);
                null != i && null != i.channels[e] && (t = [i.channels[e]]);
              }
            }
          } else
            t = h()(this.getSortedCategories())
              .map((e) => Object.values(e.channels))
              .flatten()
              .value();
          let n = !1;
          return (
            t.forEach((e) => {
              e.updateSubtitle() && (n = !0);
            }),
            n && this.version++,
            n
          );
        }
        forEachShownChannel(e, t) {
          for (let n of this.getSortedCategories()) {
            if (
              (null == t ? !void 0 : !t.ignoreRecents) ||
              n !== this.recentsCategory
            )
              for (let t of n.getShownChannelIds()) {
                let i = n.channels[t];
                for (let t of (e(i.record), i.threadIds)) {
                  let n = R.Z.getChannel(t);
                  null != n && e(n);
                }
              }
          }
        }
        forEachChannel(e, t) {
          for (let n of this.getSortedCategories()) {
            if (
              (null == t ? !void 0 : !t.ignoreRecents) ||
              n !== this.recentsCategory
            )
              for (let t of n.getChannelRecords()) e(t);
          }
        }
        constructor(e, t, n) {
          var i, s;
          j(this, "id", void 0),
            j(this, "hideMutedChannels", void 0),
            j(this, "favoritesSectionNumber", void 0),
            j(this, "recentsSectionNumber", void 0),
            j(this, "voiceChannelsSectionNumber", void 0),
            j(this, "mutedChannelIds", void 0),
            j(this, "optedInChannels", void 0),
            j(this, "optInEnabled", void 0),
            j(this, "hideResourceChannels", void 0),
            j(this, "favoriteChannelIds", void 0),
            j(this, "suggestedFavoriteChannelId", void 0),
            j(this, "collapsedCategoryIds", void 0),
            j(this, "categories", void 0),
            j(this, "noParentCategory", void 0),
            j(this, "favoritesCategory", void 0),
            j(this, "recentsCategory", void 0),
            j(this, "voiceChannelsCategory", void 0),
            j(this, "guildActionSection", void 0),
            j(this, "channelNoticeSection", void 0),
            j(this, "sortedNamedCategories", void 0),
            j(this, "sections", void 0),
            j(this, "rows", void 0),
            j(this, "firstVoiceChannel", void 0),
            j(this, "allChannelsById", void 0),
            j(this, "version", void 0),
            (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = D.ZP.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = D.ZP.getMutedChannels(this.id)),
            (this.optedInChannels =
              null !==
                (i = D.ZP.getOptedInChannelsWithPendingUpdates(this.id)) &&
              void 0 !== i
                ? i
                : D.ZP.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, y.r1)(this.id)),
            (this.hideResourceChannels = (0, p.s)(this.id)),
            (this.favoriteChannelIds = new Set(
              null !== (s = D.ZP.getGuildFavorites(this.id)) && void 0 !== s
                ? s
                : [],
            )),
            (this.suggestedFavoriteChannelId = S.Z.getSuggestedChannelId(
              this.id,
            )),
            (this.collapsedCategoryIds = L.Z.getCollapsedCategories());
          let l = R.Z.getMutableGuildChannelsForGuild(this.id),
            r = Z.Z.getGuild(this.id),
            a = {},
            o = [],
            u = {};
          for (let e in l) {
            let t = l[e];
            t.type === z.d4z.GUILD_CATEGORY && ((a[t.id] = t), (u[t.id] = []));
          }
          let c = [],
            C = [],
            g = [],
            f = this.initializationData;
          for (let e in l) {
            let t = l[e];
            if (t.type !== z.d4z.GUILD_CATEGORY) {
              if (t.type === z.d4z.GUILD_DIRECTORY) {
                null != r && !r.hasFeature(z.oNc.HUB) && g.push(t);
                continue;
              }
              ew(this, t, f)
                ? c.push(t)
                : (t.type === z.d4z.GUILD_VOICE ||
                    t.type === z.d4z.GUILD_STAGE_VOICE) &&
                  (null != t.parent_id &&
                    null != a[t.parent_id] &&
                    C.push(a[t.parent_id]),
                  C.push(t)),
                null != t.parent_id && t.parent_id in u
                  ? u[t.parent_id].push(t)
                  : o.push(t);
            }
          }
          for (let e in ((this.categories = {}), u))
            this.categories[e] = new el(this, a[e], u[e], f);
          (this.recentsSectionNumber = X),
            (this.favoritesSectionNumber = K),
            (this.noParentCategory = new es(this, o, f)),
            (this.favoritesCategory = new er(this, f)),
            (this.recentsCategory = (0, E.Q)()
              ? new ea(this, l, f)
              : new ed(this, c, f)),
            (this.voiceChannelsCategory = new eo(this, C, a, f)),
            (this.guildActionSection = new eu(t, g.length > 0)),
            (this.channelNoticeSection = new eh(n)),
            d()(
              !("null" in this.categories),
              "somehow a null got into categories",
            ),
            (this.voiceChannelsSectionNumber = $ + h().size(this.categories));
        }
      }
      class ei {
        updateChannel(e, t) {
          return (
            !!(
              e.id in this.channels && this.channels[e.id].updateChannel(e, t)
            ) && (this.invalidate(), !0)
          );
        }
        invalidate() {
          this.shownChannelIds = null;
        }
        getRows() {
          let e = this.getShownChannelIds();
          return 0 === e.length && this.shouldShowEmptyCategory() ? [k] : e;
        }
        shouldShowEmptyCategory() {
          return h().some(this.channels, (e) => e.renderLevel >= 3);
        }
        getShownChannelIds() {
          return (
            null == this.shownChannelIds &&
              (this.shownChannelIds = h()(this.channels)
                .values()
                .filter((e) => 4 === e.renderLevel)
                .sortBy((e) => {
                  let { record: t } = e;
                  return t.isGuildVocal() ? t.position + 1e4 : t.position;
                })
                .map((e) => e.id)
                .value()),
            this.shownChannelIds
          );
        }
        getShownChannelAndThreadIds() {
          let e = h()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
          return this.getShownChannelIds().concat(e);
        }
        isEmpty() {
          return 0 === this.getShownChannelIds().length;
        }
        getChannelRecords() {
          return h()(this.channels)
            .values()
            .filter((e) => e.renderLevel > 1)
            .map((e) => e.record)
            .value();
        }
        getFirstVoiceChannel(e) {
          for (let t of this.getShownChannelIds()) {
            if (e && this.channels[t].record.isGuildStageVoice())
              return this.channels[t];
            if (!e && this.channels[t].record.isGuildVocal())
              return this.channels[t];
          }
          return null;
        }
        constructor(e) {
          j(this, "guild", void 0),
            j(this, "isMuted", void 0),
            j(this, "isCollapsed", void 0),
            j(this, "position", void 0),
            j(this, "channels", void 0),
            j(this, "shownChannelIds", void 0),
            (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
        }
      }
      class es extends ei {
        constructor(e, t, n) {
          super(e),
            (this.channels = h()(t)
              .map((e) => new eC(this, e, n))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class el extends ei {
        shouldShowEmptyCategory() {
          return (
            !!(
              super.shouldShowEmptyCategory() ||
              (O.Z.can(Y.Pl.MANAGE_CHANNELS, this.record) &&
                O.Z.can(Y.Pl.VIEW_CHANNEL, this.record) &&
                h().isEmpty(this.channels) &&
                (!this.guild.optInEnabled ||
                  this.guild.optedInChannels.has(this.id)))
            ) || !1
          );
        }
        constructor(e, t, n, i) {
          for (let s of (super(e),
          j(this, "id", void 0),
          j(this, "record", void 0),
          (this.record = t),
          (this.id = t.id),
          (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
          (this.isMuted = e.mutedChannelIds.has(t.id)),
          (this.channels = {}),
          n))
            this.channels[s.id] = new eC(this, s, i);
        }
      }
      class er extends ei {
        updateChannel(e, t) {
          let n = e.id in this.channels && D.ZP.isFavorite(e.guild_id, e.id),
            i = S.Z.getSuggestedChannelId(e.guild_id);
          return (e.id === i &&
            !n &&
            (t = {
              ...t,
              activeJoinedRelevantThreads: {},
              activeJoinedUnreadThreads: {},
            }),
          e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels &&
                e.id !== i &&
                !n &&
                (delete this.channels[e.id], this.invalidate(), !0);
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        constructor(e, t) {
          var n;
          if (
            (super(e),
            !e.optInEnabled &&
              !(function () {
                return !1;
              })())
          )
            return;
          this.channels = h()(
            null !== (n = D.ZP.getGuildFavorites(e.id)) && void 0 !== n
              ? n
              : [],
          )
            .map((e) => R.Z.getChannel(e))
            .filter(V.lm)
            .map((e) => new eg(this, e, t))
            .keyBy((e) => e.id)
            .value();
          let i = S.Z.getSuggestedChannelId(e.id),
            s = R.Z.getChannel(i);
          null != s &&
            null != i &&
            (this.channels[i] = new eg(this, s, {
              ...t,
              activeJoinedRelevantThreads: {},
              activeJoinedUnreadThreads: {},
            }));
        }
      }
      class ea extends ei {
        shouldShowEmptyCategory() {
          return (
            this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
          );
        }
        updateAllChannels(e) {
          return Object.values(this.channels).reduce(
            (t, n) => this.updateChannel(n.record, e) || t,
            !1,
          );
        }
        updateChannel(e, t) {
          if (!this.enabled) return !1;
          if ((0, A.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
          }
          if (!(0, A.vc)(e.type)) return !1;
          let n = super.updateChannel(e, t),
            i = this.channels[e.id];
          return null == i
            ? ((i = new ef(this, e, t)),
              (this.channels[e.id] = i),
              this.invalidate(),
              !0)
            : this.updateShownChannelIds(i) || n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
              ? h()(this.channels)
                  .filter((t) => t.renderLevel >= e)
                  .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                  .filter((e) => {
                    let [, t, n] = e;
                    return (
                      4 === n ||
                      (t > 0 && Date.now() - t < ea.MAX_TIMESTAMP_DELTA)
                    );
                  })
                  .sortBy((e) => {
                    let [, t, n] = e;
                    return -(t - (4 === n ? 0 : M.DISCORD_EPOCH));
                  })
                  .take(ea.MAX_RECENT_CHANNELS)
                  .sortBy((e) => {
                    let [, t] = e;
                    return -t;
                  })
                  .map((e) => {
                    let [t] = e;
                    return t;
                  })
                  .value()
              : [];
          }
          return this.shownChannelIds;
        }
        updateShownChannelIds(e) {
          var t;
          let n = this.isCollapsed ? 4 : 3;
          if (null == this.shownChannelIds || e.renderLevel < n) return !1;
          if (
            e.lastMessageTimestamp >
            (null === (t = this.channels[this.shownChannelIds[0]]) ||
            void 0 === t
              ? void 0
              : t.lastMessageTimestamp)
          ) {
            let t = this.shownChannelIds.indexOf(e.id);
            return (
              t > -1 && this.shownChannelIds.splice(t, 1),
              this.shownChannelIds.splice(0, 0, e.id),
              this.shownChannelIds.length > ea.MAX_RECENT_CHANNELS &&
                (this.shownChannelIds = this.shownChannelIds.slice(
                  0,
                  ea.MAX_RECENT_CHANNELS,
                )),
              !0
            );
          }
          return !1;
        }
        constructor(e, t, n) {
          if (
            (super(e),
            j(this, "enabled", !1),
            (this.isCollapsed = _.Z.isCollapsed(e.id)),
            (this.enabled =
              (function () {
                return !1;
              })() && Object.keys(t).length >= ea.MIN_READABLE_CHANNELS),
            this.enabled)
          )
            for (let e of Object.values(t))
              (0, A.vc)(e.type) &&
                !(0, A.Q5)(e.type) &&
                (this.channels[e.id] = new ef(this, e, n));
        }
      }
      j(ea, "MIN_READABLE_CHANNELS", 7),
        j(ea, "MAX_RECENT_CHANNELS", 10),
        j(ea, "MAX_TIMESTAMP_DELTA", 6048e5);
      class ed extends ei {
        updateAllChannels(e) {
          let t = !1;
          return (
            M.default.keys(this.channels).forEach((n) => {
              this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
          );
        }
        updateChannel(e, t) {
          let n = super.updateChannel(e, t);
          if (this.guild.optInEnabled) {
            let n = this.channels[e.id],
              i = ew(this.guild, e, t);
            if (i && null == n)
              return (
                (this.channels[e.id] = new ep(this, e, t)),
                this.invalidate(),
                !0
              );
            if (!i && null != n)
              return delete this.channels[e.id], this.invalidate(), !0;
          }
          return n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = h()(this.channels)
                .values()
                .filter((e) => 4 === e.renderLevel || 3 === e.renderLevel)
                .filter((e) => !e.record.isGuildVocal()),
              t = e
                .sortBy((e) => {
                  let { record: t } = e;
                  return t.position;
                })
                .take(5)
                .value(),
              n = new Set([
                ...e.filter((e) => 4 === e.renderLevel).value(),
                ...t,
              ]);
            this.shownChannelIds = h()([...n])
              .sortBy((e) => {
                let { record: t } = e;
                return t.position;
              })
              .map((e) => e.id)
              .value();
          }
          return this.shownChannelIds;
        }
        constructor(e, t, n) {
          if ((super(e), !e.optInEnabled || v.Z.isFullServerPreview(e.id)))
            return;
          (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = h()(t)
              .map((e) => new ep(this, e, n))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class eo extends ei {
        invalidate() {
          super.invalidate(), (this.hiddenChannelIds = null);
        }
        getHiddenChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.hiddenChannelIds) {
            let e = h()(this.channels)
              .filter((e) => 3 === e.renderLevel)
              .value();
            if (e.every((e) => e.record.isCategory()))
              return (this.hiddenChannelIds = []), this.hiddenChannelIds;
            this.hiddenChannelIds = e.map((e) => e.id);
          }
          return this.hiddenChannelIds;
        }
        getRows() {
          if (!this.guild.optInEnabled) return [];
          let e = this.getShownChannelIds();
          return 0 === e.length && this.getHiddenChannelIds().length > 0
            ? [k]
            : e;
        }
        getShownChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.shownChannelIds) {
            let t = h()(this.channels)
              .filter((e) => 4 === e.renderLevel)
              .orderBy(
                [
                  (e) =>
                    (function (e, t) {
                      if (e.record.type === z.d4z.GUILD_CATEGORY)
                        return e.record.position;
                      if (null != e.record.parent_id) {
                        var n, i;
                        return null !==
                          (i =
                            null === (n = t[e.record.parent_id]) || void 0 === n
                              ? void 0
                              : n.position) && void 0 !== i
                          ? i
                          : -1;
                      }
                      return -1;
                    })(e, this.categoriesById),
                  (e) =>
                    e.record.type === z.d4z.GUILD_CATEGORY
                      ? -1
                      : e.record.position,
                ],
                ["asc", "asc"],
              )
              .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
              var e;
              let i = t[n];
              if (
                (!(n < t.length - 1) ||
                  i.record.type !== z.d4z.GUILD_CATEGORY ||
                  (null === (e = t[n + 1]) || void 0 === e
                    ? void 0
                    : e.record.type) !== z.d4z.GUILD_CATEGORY) &&
                (n !== t.length - 1 || i.record.type !== z.d4z.GUILD_CATEGORY)
              )
                this.shownChannelIds.push(i.id);
            }
          }
          return this.shownChannelIds;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        constructor(e, t, n, i) {
          if (
            (super(e),
            j(this, "categoriesById", void 0),
            j(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
          )
            return;
          (this.isCollapsed = H.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = h()(t)
              .map((e) => new ev(this, e, i))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class eh {
        isEmpty() {
          return 0 === this.rows.length;
        }
        getRows() {
          return this.rows;
        }
        getRow(e) {
          return this.rows[e];
        }
        constructor(e) {
          j(this, "rows", void 0), (this.rows = e);
        }
      }
      class eu {
        isEmpty() {
          return 0 === this.guildActionRows.length;
        }
        getRows() {
          return this.guildActionRows;
        }
        getRow(e) {
          return this.guildActionRows[e];
        }
        constructor(e, t) {
          j(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(B.z.GUILD_DIRECTORY));
        }
      }
      class ec {
        get isMuted() {
          return this.category.guild.mutedChannelIds.has(this.id);
        }
        get isCollapsed() {
          return b.Z.isCollapsed(this.id);
        }
        get isFirstVoiceChannel() {
          return this.category.getFirstVoiceChannel() === this;
        }
        get lastMessageTimestamp() {
          return Math.max(
            T.ZP.lastMessageTimestamp(this.id),
            ...this.threadIds.map(T.ZP.lastMessageTimestamp),
          );
        }
        updateChannel(e, t) {
          let n = !1;
          null != e && e !== this.record && ((this.record = e), (n = !0));
          let i = this.computeState(t);
          return (
            (i.renderLevel !== this.renderLevel ||
              !h().isEqual(i.threadIds, this.threadIds)) &&
              ((this.renderLevel = i.renderLevel),
              (this.threadIds = i.threadIds),
              (this.threadCount = h().size(i.threadIds)),
              (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
          );
        }
        updateSubtitle() {
          let e = this.computeSubtitle();
          return !h().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
        }
        computeSubtitle() {
          return eI(
            this.record,
            this.isCollapsed || this.category.isCollapsed,
            this.category.guild.optInEnabled,
          );
        }
        constructor(e, t, n) {
          j(this, "category", void 0),
            j(this, "record", void 0),
            j(this, "id", void 0),
            j(this, "position", void 0),
            j(this, "threadIds", void 0),
            j(this, "threadCount", void 0),
            j(this, "subtitle", void 0),
            j(this, "renderLevel", void 0),
            (this.category = e),
            (this.record = t),
            (this.position = -1),
            (this.threadIds = []),
            (this.threadCount = 0),
            (this.subtitle = null),
            (this.renderLevel = 1),
            (this.id = t.id);
          let { renderLevel: i, threadIds: s } = this.computeState(n);
          (this.renderLevel = i),
            (this.threadCount = h().size(s)),
            (this.threadIds = s),
            4 === i && (this.subtitle = this.computeSubtitle());
        }
      }
      class eC extends ec {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: s,
            activeJoinedUnreadThreads: l,
          } = e;
          if (!O.Z.can(Y.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i) return { renderLevel: 4, threadIds: [] };
            if (
              !g.Z.isChannelGatedAndVisible(
                this.record.guild_id,
                this.record.id,
              )
            )
              return { renderLevel: 1, threadIds: [] };
          }
          let r = this.record.parent_id,
            a = this.category.guild;
          if (e_(a, this.record)) return { renderLevel: 1, threadIds: [] };
          let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
            o = null != n && n.isThread() && n.parent_id === this.id,
            u =
              null !==
                (t =
                  d || o || (!this.category.isCollapsed && !this.isMuted)
                    ? s[this.id]
                    : l[this.id]) && void 0 !== t
                ? t
                : {},
            c = eE(this.record, u, n, i, a.hideMutedChannels);
          return a.optInEnabled &&
            a.hideResourceChannels &&
            this.record.hasFlag(x.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? { renderLevel: d ? 4 : 1, threadIds: c }
            : !a.optInEnabled ||
                a.optedInChannels.has(this.id) ||
                (null != r && a.optedInChannels.has(r))
              ? d || o || !h().isEmpty(c) || T.ZP.getMentionCount(this.id) > 0
                ? { renderLevel: 4, threadIds: c }
                : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                  ? { renderLevel: 2, threadIds: c }
                  : this.category.isCollapsed &&
                      (a.mutedChannelIds.has(this.id) ||
                        (null != r && a.mutedChannelIds.has(r)) ||
                        this.record.isGuildVocal() ||
                        this.record.type === z.d4z.GUILD_STORE ||
                        ((0, A.vc)(this.record.type) &&
                          !T.ZP.hasUnread(this.record.id)))
                    ? { renderLevel: 3, threadIds: c }
                    : { renderLevel: 4, threadIds: c }
              : { renderLevel: 2, threadIds: c };
        }
      }
      class eg extends ec {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: s,
          } = e;
          return O.Z.can(Y.Pl.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: 4,
                threadIds: eE(
                  this.record,
                  null !== (t = s[this.id]) && void 0 !== t ? t : {},
                  n,
                  i,
                  !1,
                ),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class ep extends ec {
        computeState(e) {
          var t;
          let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: s,
          } = e;
          return O.Z.can(Y.Pl.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: ey(this, e) ? 4 : 3,
                threadIds: eE(
                  this.record,
                  null !== (t = s[this.id]) && void 0 !== t ? t : {},
                  n,
                  i,
                  !1,
                ),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class ef extends eC {
        computeState(e) {
          let { renderLevel: t, threadIds: n } = super.computeState(e);
          if (t > 1) {
            let i = this.record.parent_id,
              s = this.category.guild;
            s.mutedChannelIds.has(this.id) ||
            (null != i && s.mutedChannelIds.has(i))
              ? (t = 2)
              : 4 === t
                ? (t = 3)
                : 2 === t && ew(this.category.guild, this.record, e) && (t = 3),
              3 === t && ey(this, e) && (t = 4),
              (n = h().sortBy(n, (e) => -T.ZP.lastMessageTimestamp(e)));
          }
          return { renderLevel: t, threadIds: n };
        }
      }
      class ev extends eC {
        getRenderLevel(e) {
          let t = this.category.guild;
          return !O.Z.can(Y.Pl.VIEW_CHANNEL, this.record) ||
            4 === e ||
            3 === e ||
            e_(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? h().some(G.Z.getVoiceStatesForChannel(this.record.id))
                ? 4
                : 3
              : 4;
        }
        computeState(e) {
          let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
          return (
            4 === n &&
              (this.subtitle = eI(
                this.record,
                this.isCollapsed || this.category.isCollapsed,
                this.category.guild.optInEnabled,
              )),
            { threadIds: [], renderLevel: n }
          );
        }
      }
      function eI(e, t, n) {
        switch (e.type) {
          case z.d4z.GUILD_VOICE: {
            let i = f.ZP.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let s = U.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, F.a)(s)) return { type: "go-live" };
            let l = C.Z.getChannelStatus(e);
            if (null != l && l.length > 0) return { type: "voice", text: l };
            let r = u.ZP.getEmbeddedActivitiesForChannel(e.id),
              a = (null != r ? r : [])
                .map((e) => {
                  var t;
                  return null === (t = c.Z.getApplication(e.applicationId)) ||
                    void 0 === t
                    ? void 0
                    : t.name;
                })
                .filter(V.lm);
            if (a.length > 0)
              return { type: "embedded-activities", name: a.join(", ") };
            return null;
          }
          case z.d4z.GUILD_STAGE_VOICE: {
            let t = f.ZP.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
          }
          default:
            return null;
        }
      }
      function eE(e, t, n, i, s) {
        let l = null != n && (n.id === e.id || i === e.id),
          r = null != n && n.isThread() && n.parent_id === e.id;
        if (A.uC.has(e.type)) {
          let e = h()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
          if (l) return e;
          if (r) return !(n.id in t) && !(0, I.cn)() && e.unshift(n.id), e;
          else if (s)
            return e.filter(
              (e) => !N.Z.isMuted(e) || T.ZP.getMentionCount(e) > 0,
            );
          else return e;
        }
        return [];
      }
      function eS() {
        return !1;
      }
      function e_(e, t) {
        return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
      }
      function ey(e, t) {
        let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
        if (T.ZP.getMentionCount(e.id) > 0) return !0;
        for (let t in i[e.id]) if (T.ZP.getMentionCount(t) > 0) return !0;
        if (
          null != n &&
          (n.id === e.id || (n.isThread() && n.parent_id === e.id))
        )
          return true;
        let s = w.Z.getNewChannelIds(e.category.guild.id);
        if (s.size > W);
        else if (s.has(e.id)) return !0;
        return !1;
      }
      function ew(e, t, n) {
        let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
        if (
          t.type === z.d4z.GUILD_DIRECTORY ||
          !e.optInEnabled ||
          t.isGuildVocal() ||
          e.optedInChannels.has(t.id) ||
          t.isThread() ||
          (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
          (e.hideResourceChannels && t.hasFlag(x.zZ.IS_GUILD_RESOURCE_CHANNEL))
        )
          return !1;
        if (
          (null != i &&
            !(0, I.cn)() &&
            (i.id === t.id || (i.isThread() && i.parent_id === t.id))) ||
          T.ZP.getMentionCount(t.id) > 0
        )
          return !0;
        let l = w.Z.getNewChannelIds(e.id),
          r = Array.from(l).sort((e, t) => M.default.compare(t, e));
        if (l.has(t.id) && r.indexOf(t.id) < W) return !0;
        for (let e in s[t.id])
          if (
            T.ZP.getMentionCount(e) > 0 ||
            T.ZP.hasUnread(e) ||
            T.ZP.hasRecentlyVisitedAndRead(e)
          )
            return !0;
        return (
          !(
            e.mutedChannelIds.has(t.id) ||
            (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))
          ) &&
          (!!T.ZP.hasRecentlyVisitedAndRead(t.id) || !1)
        );
      }
      let em = new Set(Object.values(B.z));
    },
    203818: function (e, t, n) {
      var i,
        s = n(442837),
        l = n(570140);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let a = {};
      function d(e) {
        let { guildId: t, expand: n } = e;
        n ? (a[t] = !0) : delete a[t];
      }
      class o extends (i = s.ZP.PersistedStore) {
        initialize(e) {
          a = null != e ? e : {};
        }
        isVoiceCategoryExpanded(e) {
          var t;
          return null !== (t = null != e && a[e]) && void 0 !== t && t;
        }
        isVoiceCategoryCollapsed(e) {
          return !this.isVoiceCategoryExpanded(e);
        }
        getState() {
          return a;
        }
      }
      r(o, "displayName", "ChannelListVoiceCategoryStore"),
        r(o, "persistKey", "ChannelListVoiceCategoryStore"),
        (t.Z = new o(l.Z, {
          VOICE_CATEGORY_COLLAPSE: d,
          VOICE_CATEGORY_EXPAND: d,
        }));
    },
    443063: function (e, t, n) {
      var i, s, l, r;
      n.d(t, {
        z: function () {
          return i;
        },
      }),
        ((l = i || (i = {})).GUILD_PREMIUM_PROGRESS_BAR =
          "guild-premium-progress-bar"),
        (l.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events"),
        (l.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options"),
        (l.GUILD_FAVORITES = "favorites"),
        (l.GUILD_CHANNEL_LIST_OPT_IN_NOTICE =
          "guild-channel-list-opt-in-notice"),
        (l.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions"),
        (l.GUILD_SHOP = "shop"),
        (l.GUILD_MEMBER_APPLICATIONS = "member-applications"),
        (l.GUILD_HOME = "@home"),
        (l.CHANNELS_AND_ROLES = "channels-and-roles"),
        (l.BROWSE_CHANNELS = "browse-channels"),
        (l.GUILD_DIRECTORY = "guild-directory"),
        (l.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR =
          "guild-new-member-actions-progress-bar"),
        (l.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety"),
        ((r = s || (s = {})).GUILD_PROGRESS = "guild-progress"),
        (r.MFA_WARNING = "mfa-warning"),
        (r.LIVE_CHANNEL_NOTICE = "live-channel-notice");
    },
    798423: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return s;
        },
      });
      var i = n(863750);
      function s() {
        return i.Z.get("enable_recently_active");
      }
      n(238428);
    },
    18036: function (e, t, n) {
      n(47120);
      var i,
        s = n(442837),
        l = n(570140),
        r = n(592125),
        a = n(944486),
        d = n(9156);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let h = {},
        u = {},
        c = {};
      function C() {
        let e = a.Z.getChannelId();
        if (null == e) return;
        let t = r.Z.getChannel(e);
        if (null == t || null == t.guild_id) return;
        let n = t.guild_id;
        if (
          (null == c[e] && (c[e] = 0),
          t.isThread() ||
            (d.ZP.isOptInEnabled(n) && !d.ZP.isChannelOrParentOptedIn(n, t.id)))
        ) {
          delete c[e], null != h[n] && h[n].delete(e);
          return;
        }
        if (
          (c[e]++, null == h[n] && (h[n] = new Set()), d.ZP.isFavorite(n, e))
        ) {
          h[n].delete(e);
          return;
        }
        if ((null == u[n] || !u[n].has(e)) && c[e] > 50) return h[n].add(e), !0;
      }
      class g extends (i = s.ZP.PersistedStore) {
        initialize(e) {
          var t, n;
          if ((this.syncWith([a.Z], C), null == e)) return;
          let {
            suggestedChannels: i,
            dismissedSuggestions: s,
            channelOpensByChannelId: l,
          } = e;
          if (null != i)
            for (let e in i)
              (t = new Set(i[e])), (h[e] = void 0 !== t ? t : new Set());
          if (null != s)
            for (let e in s)
              (n = new Set(s[e])), (u[e] = void 0 !== n ? n : new Set());
          c = null != l ? l : {};
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
      o(g, "displayName", "FavoritesSuggestionStore"),
        o(g, "persistKey", "FavoritesSuggestionStore"),
        (t.Z = new g(l.Z, {
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { guildId: t, channelId: n } = e;
            return (
              null == u[t] && (u[t] = new Set()),
              u[t].add(n),
              h[t].delete(n),
              !0
            );
          },
        }));
    },
    798379: function (e, t, n) {
      n(47120);
      var i,
        s = n(442837),
        l = n(570140);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let a = new Set();
      class d extends (i = s.ZP.PersistedStore) {
        initialize(e) {
          a.clear(), null == e || e.guilds.forEach((e) => a.add(e));
        }
        isCollapsed(e) {
          return a.has(e);
        }
        getState() {
          return { guilds: a };
        }
      }
      r(d, "displayName", "RecentlyActiveCollapseStore"),
        r(d, "persistKey", "RecentlyActiveCollapseStore"),
        (t.Z = new d(l.Z, {
          SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
            let { guildId: t, collapsed: n } = e;
            n ? a.add(t) : a.delete(t);
          },
        }));
    },
    22082: function (e, t, n) {
      n(47120);
      var i,
        s,
        l,
        r,
        a = n(442837),
        d = n(570140),
        o = n(45114),
        h = n(897473),
        u = n(581883),
        c = n(314897),
        C = n(592125),
        g = n(984933),
        p = n(271383),
        f = n(430824),
        v = n(306680),
        I = n(9156),
        E = n(70956),
        S = n(709054),
        _ = n(981631);
      let y = new Set(),
        w = {},
        m = {};
      function N(e, t) {
        let n = w[e];
        if (null != n && null != t && n.has(t)) {
          var i;
          I.ZP.isOptInEnabled(e) &&
            !(null === (i = C.Z.getChannel(t)) || void 0 === i
              ? void 0
              : i.isThread()) &&
            null == v.ZP.ackMessageId(t) &&
            d.Z.wait(() =>
              (0, o.In)(t, !0, !0, S.default.atPreviousMillisecond(t)),
            );
        }
      }
      function A(e) {
        var t;
        if (null != w[e]) return;
        let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
          i =
            null === (t = p.ZP.getMember(e, c.default.getId())) || void 0 === t
              ? void 0
              : t.joinedAt;
        if (null == i) return;
        w[e] = new Set();
        let s = new Date(i).getTime();
        if (0 !== n.length)
          (w[e] = new Set(
            n.filter((t) => {
              let n = S.default.extractTimestamp(t);
              return (
                null == v.ZP.getTrackedAckMessageId(t) &&
                n > Date.now() - E.Z.Millis.WEEK &&
                n > u.Z.getGuildRecentsDismissedAt(e) &&
                n > s &&
                !I.ZP.isChannelOrParentOptedIn(e, t)
              );
            }),
          )),
            (m[e] = Date.now());
      }
      function L() {
        S.default.keys(w).forEach((e) => {
          let t = w[e];
          w[e] = new Set(
            [...t].filter((t) => !I.ZP.isChannelOrParentOptedIn(e, t)),
          );
        });
      }
      class R extends (i = a.ZP.Store) {
        initialize() {
          this.waitFor(g.ZP, c.default, p.ZP, I.ZP, v.ZP, u.Z),
            this.syncWith([I.ZP], L);
        }
        getNewChannelIds(e) {
          var t;
          return (
            null != e && null == w[e] && A(e),
            null != e && null !== (t = w[e]) && void 0 !== t ? t : y
          );
        }
        shouldIndicateNewChannel(e, t) {
          var n;
          if (null == e) return !1;
          let i = f.Z.getGuild(e);
          return (
            !!(null != i && i.hasFeature(_.oNc.COMMUNITY)) &&
            (null != e && null == w[e] && A(e),
            (null === (n = w[e]) || void 0 === n ? void 0 : n.has(t)) &&
              null == v.ZP.getTrackedAckMessageId(t))
          );
        }
      }
      (r = "NewChannelsStore"),
        (l = "displayName") in (s = R)
          ? Object.defineProperty(s, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[l] = r),
        (t.Z = new R(d.Z, {
          BULK_CLEAR_RECENTS: function (e) {
            let { guildId: t, channelIds: n } = e;
            if (null == w[t]) return !1;
            n.forEach((e) => w[t].delete(e)), 0 === w[t].size && delete w[t];
          },
          CHANNEL_ACK: () => !0,
          CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            return (
              null != t &&
              (null == w[t] || m[t] < Date.now() - E.Z.Millis.HOUR
                ? (A(t), !0)
                : (null != n && N(t, n), !1))
            );
          },
          SIDEBAR_VIEW_CHANNEL: function (e) {
            let { guildId: t, channelId: n, sidebarType: i } = e;
            return null != t && i === h.tI.VIEW_CHANNEL && (N(t, n), !1);
          },
          SIDEBAR_VIEW_GUILD: function (e) {
            let { guildId: t, baseChannelId: n } = e;
            return null != t && (N(t, n), !1);
          },
          GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete w[t.id];
          },
          CHANNEL_CREATE: function (e) {
            var t;
            let { channel: n } = e;
            !n.isVocal() &&
              ((w[n.guild_id] =
                null !== (t = w[n.guild_id]) && void 0 !== t ? t : new Set()),
              w[n.guild_id].add(n.id));
          },
        }));
    },
    58468: function (e, t, n) {
      n(47120);
      var i,
        s = n(442837),
        l = n(570140),
        r = n(709054),
        a = n(592125);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let o = {},
        h = o;
      function u() {
        r.default.keys(h).forEach((e) => {
          null == a.Z.getChannel(e) && delete h[e];
        });
      }
      class c extends (i = s.ZP.PersistedStore) {
        initialize(e) {
          this.waitFor(a.Z), (h = null != e ? e : o);
        }
        getState() {
          return h;
        }
        getCollapsed() {
          return h;
        }
        isCollapsed(e) {
          return h[e] || !1;
        }
      }
      d(c, "displayName", "CollapsedVoiceChannelStore"),
        d(c, "persistKey", "collapsedChannels"),
        (t.Z = new c(l.Z, {
          CONNECTION_OPEN: u,
          OVERLAY_INITIALIZE: u,
          CHANNEL_COLLAPSE: function (e) {
            let { channelId: t } = e;
            h[t] ? delete h[t] : (h[t] = !0), (h = { ...h });
          },
        }));
    },
    55589: function (e, t, n) {
      let i, s, l;
      n(47120), n(653041);
      var r,
        a,
        d,
        o,
        h,
        u,
        c = n(913527),
        C = n.n(c),
        g = n(442837),
        p = n(759174),
        f = n(570140),
        v = n(355298),
        I = n(333984),
        E = n(131704),
        S = n(592125),
        _ = n(430824),
        y = n(306680),
        w = n(9156),
        m = n(594174),
        N = n(709054),
        A = n(176505);
      ((d = r || (r = {})).DEFAULT = "DEFAULT"), (d.FAVORITE = "FAVORITE");
      let L = new p.h(
        (e) => {
          let { isRequest: t, isFavorite: n } = e;
          return t ? [] : [n ? "FAVORITE" : "DEFAULT"];
        },
        (e) => {
          let { lastMessageId: t } = e;
          return -t;
        },
      );
      function R(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (function (e) {
                var t, n;
                let i =
                    null !==
                      (n =
                        null !== (t = y.ZP.lastMessageId(e.id)) && void 0 !== t
                          ? t
                          : e.lastMessageId) && void 0 !== n
                      ? n
                      : e.id,
                  s = e.isMessageRequestTimestamp;
                if (null != s) {
                  let e = C()(s).valueOf(),
                    t = N.default.fromTimestamp(e);
                  return N.default.compare(i, t) > 0 ? i : t;
                }
                return i;
              })(e);
        return {
          channelId: e.id,
          lastMessageId: t,
          isFavorite: !1,
          isRequest: v.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id),
        };
      }
      function b() {
        L.clear(),
          Object.values(S.Z.getMutablePrivateChannels()).forEach((e) => {
            L.set(e.id, R(e));
          });
      }
      function Z() {
        let e = S.Z.getMutablePrivateChannels();
        for (let t in e) L.set(t, R(e[t]));
      }
      let O =
        ((i = []),
        (s = []),
        (l = []),
        () => {
          let e = L.values("FAVORITE"),
            t = L.values("DEFAULT");
          return (
            (i !== e || s !== t) &&
              ((l = []),
              e.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (i = e),
              t.forEach((e) => {
                let { channelId: t } = e;
                return l.push(t);
              }),
              (s = t)),
            l
          );
        });
      class T extends (a = g.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, _.Z, m.default, v.Z, w.ZP),
            this.syncWith([w.ZP, v.Z], b);
        }
        getPrivateChannelIds() {
          return O();
        }
        getSortedChannels() {
          return [L.values("FAVORITE"), L.values("DEFAULT")];
        }
        serializeForOverlay() {
          let e = {};
          return (
            L.values().forEach((t) => {
              let { channelId: n, lastMessageId: i } = t;
              e[n] = i;
            }),
            e
          );
        }
      }
      (u = "PrivateChannelSortStore"),
        (h = "displayName") in (o = T)
          ? Object.defineProperty(o, h, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[h] = u),
        (t.Z = new T(f.Z, {
          CONNECTION_OPEN: b,
          CONNECTION_OPEN_SUPPLEMENTAL: b,
          OVERLAY_INITIALIZE: b,
          CACHE_LOADED: Z,
          CACHE_LOADED_LAZY: Z,
          CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            t.forEach((e) => {
              ((0, E.hv)(e.type) || L.has(e.id)) && L.set(e.id, R(e));
            });
          },
          CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            if (!(0, E.hv)(t.type) || t.id === A.V) return !1;
            L.set(t.id, R(t));
          },
          CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return L.delete(t.id);
          },
          MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n } = e;
            if (!L.has(t)) return !1;
            let i = S.Z.getChannel(t);
            return null != i && L.set(t, R(i, n.id));
          },
          GUILD_CREATE: function (e) {
            let t = e.guild.id;
            return L.delete(t);
          },
          LOGOUT: function () {
            L.clear();
          },
        }));
    },
  },
]);
//# sourceMappingURL=266f26a577fd777cd3c2.js.map
