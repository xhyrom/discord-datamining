"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15062"],
  {
    32603(e, t, n) {
      n.d(t, {
        Ay: () => $,
        HP: () => W,
        PU: () => H,
        TF: () => K,
        Xt: () => k,
        bK: () => J,
        go: () => ec,
        rR: () => z,
        wF: () => eg,
        xu: () => en,
        yO: () => q,
      }),
        n(321073),
        n(667532);
      var i = n(284009),
        s = n.n(i),
        r = n(735438),
        l = n.n(r),
        a = n(933958),
        o = n(587895),
        h = n(309698),
        d = n(717125),
        u = n(473529),
        c = n(698441),
        g = n(164956),
        C = n(99712),
        p = n(240935),
        y = n(50827),
        I = n(395504),
        f = n(454058),
        v = n(272720),
        A = n(56595),
        m = n(695633),
        S = n(152007),
        w = n(95701),
        E = n(924985),
        _ = n(734057),
        b = n(945886),
        R = n(71393),
        N = n(576705),
        L = n(222823),
        G = n(309010),
        V = n(543465),
        x = n(977997),
        O = n(607567),
        T = n(403362),
        U = n(935208),
        F = n(669715),
        B = n(551851),
        D = n(281405),
        M = n(652215),
        P = n(746080),
        j = n(818348);
      let Y = "placeholder-channel-id",
        z = 2,
        k = 0,
        H = 1,
        W = 2,
        q = 3,
        J = 4,
        K = 5,
        X = new Set([String(D.n.GUILD_DIRECTORY)]);
      class $ {
        guilds = {};
        _areGuildActionRowsUpdated(e, t) {
          return !l().isEqual(
            this.guilds[e]
              ?.getGuildActionSection()
              .getRows()
              .filter((e) => !X.has(e)),
            t,
          );
        }
        _areChannelNoticeRowsUpdated(e, t) {
          return !l().isEqual(
            this.guilds[e]?.getChannelNoticeSection().getRows(),
            t,
          );
        }
        _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
          let t = this.guilds[e];
          if (null == t) return !1;
          let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            i = t.getCategoryFromSection(t.recentsSectionNumber);
          for (let e in i.channels) {
            let t = i.channels[e];
            if (
              2 === t.renderLevel &&
              t.record.isGuildVocal() &&
              null == n.channels[t.id] &&
              l().some(x.A.getVoiceStatesForChannel(t.id)) &&
              L.Ay.getMentionCount(t.id) > 0
            )
              return !0;
          }
          return !1;
        }
        getGuild(e, t, n) {
          return (
            (!(e in this.guilds) ||
              this._areGuildActionRowsUpdated(e, t) ||
              this._areChannelNoticeRowsUpdated(e, n) ||
              this._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(
                e,
              )) &&
              (this.guilds[e] = new Q(e, t, n)),
            this.guilds[e]
          );
        }
        getGuildChannelRowsOnly(e) {
          return (
            e in this.guilds || (this.guilds[e] = new Q(e, [], [])),
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
          return (
            null != e &&
            e in this.guilds &&
            (this.guilds[e]?.updateRecentsCategory() ?? !1)
          );
        }
        nonPositionalChannelIdUpdate(e) {
          let t = _.A.getBasicChannel(e);
          return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof w.YB || null != (t = _.A.getChannel(e))) &&
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
      }
      class Q {
        id;
        hideMutedChannels;
        favoritesSectionNumber;
        recentsSectionNumber;
        voiceChannelsSectionNumber;
        mutedChannelIds;
        optedInChannels;
        optInEnabled;
        hideResourceChannels;
        favoriteChannelIds;
        suggestedFavoriteChannelId;
        collapsedCategoryIds;
        moderatorReportChannelId;
        moderatorReportChannelEnabled;
        categories;
        noParentCategory;
        favoritesCategory;
        recentsCategory;
        voiceChannelsCategory;
        guildActionSection;
        channelNoticeSection;
        sortedNamedCategories = null;
        sections = null;
        rows = null;
        firstVoiceChannel = void 0;
        allChannelsById = null;
        version = 0;
        constructor(e, t, n) {
          (this.id = e),
            (this.hideMutedChannels = V.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = V.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
              V.Ay.getOptedInChannelsWithPendingUpdates(this.id) ??
              V.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, I.WW)(this.id)),
            (this.hideResourceChannels = (0, u.K)(this.id)),
            (this.favoriteChannelIds = new Set(
              V.Ay.getGuildFavorites(this.id) ?? [],
            )),
            (this.suggestedFavoriteChannelId = p.A.getSuggestedChannelId(
              this.id,
            )),
            (this.collapsedCategoryIds = E.A.getCollapsedCategories());
          const i = _.A.getMutableGuildChannelsForGuild(this.id),
            r = R.A.getGuild(this.id);
          (this.moderatorReportChannelId = null != r ? (0, v.A)(r) : null),
            (this.moderatorReportChannelEnabled = null != r && (0, A.A)(r));
          const a = {},
            o = [],
            h = {};
          for (const e in i) {
            const t = i[e];
            t.type === M.rbe.GUILD_CATEGORY && ((a[t.id] = t), (h[t.id] = []));
          }
          const d = [],
            c = [],
            g = [],
            y = this.initializationData;
          for (const e in i) {
            const t = i[e];
            if (t.type !== M.rbe.GUILD_CATEGORY) {
              if (t.type === M.rbe.GUILD_DIRECTORY) {
                null == r || r.features.has(M.GuildFeatures.HUB) || g.push(t);
                continue;
              }
              ey(this, t, y)
                ? d.push(t)
                : (t.type === M.rbe.GUILD_VOICE ||
                    t.type === M.rbe.GUILD_STAGE_VOICE) &&
                  (null != t.parent_id &&
                    null != a[t.parent_id] &&
                    c.push(a[t.parent_id]),
                  c.push(t)),
                null != t.parent_id && t.parent_id in h
                  ? h[t.parent_id].push(t)
                  : o.push(t);
            }
          }
          for (const e in ((this.categories = {}), h))
            this.categories[e] = new et(this, a[e], h[e], y);
          (this.recentsSectionNumber = q),
            (this.favoritesSectionNumber = W),
            (this.noParentCategory = new ee(this, o, y)),
            (this.favoritesCategory = new en(this, y)),
            (this.recentsCategory = (0, C.i)()
              ? new ChannelListRecentlyActiveCategory(this, i, y)
              : new ei(this, d, y)),
            (this.voiceChannelsCategory = new es(this, c, a, y)),
            (this.guildActionSection = new el(t, g.length > 0)),
            (this.channelNoticeSection = new er(n)),
            s()(
              !("null" in this.categories),
              "somehow a null got into categories",
            ),
            (this.voiceChannelsSectionNumber = K + l().size(this.categories));
        }
        get initializationData() {
          return {
            selectedChannel: _.A.getChannel(G.A.getChannelId()),
            selectedVoiceChannelId: G.A.getVoiceChannelId(),
            activeJoinedRelevantThreads:
              m.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: m.A.getActiveJoinedUnreadThreadsForGuild(
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
            (this.sortedNamedCategories = l().sortBy(
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
            case k:
              throw Error(
                "Invalid section. Use getChannelNoticeSection instead",
              );
            case H:
              throw Error("Invalid section. Use getGuildActionSection instead");
            case W:
              return this.favoritesCategory;
            case J:
              return this.noParentCategory;
            case this.recentsSectionNumber:
              return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
              return this.voiceChannelsCategory;
            default:
              return this.getSortedNamedCategories()[e - K];
          }
        }
        getNamedCategoryFromSection(e) {
          return (
            (e -= K),
            s()(
              e >= 0 && e < this.getSortedNamedCategories().length,
              `invalid section index ${e}`,
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
            s()(e > H, "Invalid section"),
            e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
          );
        }
        getFirstVoiceChannel(e) {
          if (void 0 === this.firstVoiceChannel) {
            if (
              ((this.firstVoiceChannel =
                this.favoritesCategory.getFirstVoiceChannel(e)),
              null != this.firstVoiceChannel ||
                ((this.firstVoiceChannel =
                  this.noParentCategory.getFirstVoiceChannel(e)),
                null != this.firstVoiceChannel))
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
          let t = (function (e) {
            if (null == e) return null;
            if (eI.has(e)) return e;
            let t = _.A.getChannel(e);
            return t?.isDirectory() ? D.n.GUILD_DIRECTORY : null;
          })(e);
          if (null != t)
            return [
              {
                row: this.getGuildActionSection().getRows().indexOf(t),
                section: H,
              },
            ];
          let n = [],
            i = _.A.getChannel(e);
          if (null == i || null == e) return n;
          let s = i.isThread();
          if ((s && (i = _.A.getChannel(i.parent_id)), null == i)) return n;
          let r = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
          r >= 0 && n.push({ section: W, row: r });
          let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
          if (
            (a >= 0 && n.push({ section: this.recentsSectionNumber, row: a }),
            i.type === M.rbe.GUILD_CATEGORY)
          )
            return [
              {
                section:
                  l().findIndex(
                    this.getSortedNamedCategories(),
                    (e) => e.id === i?.id,
                  ) + K,
              },
            ];
          let o = this.getCategory(i),
            h =
              o instanceof ee
                ? J
                : this.getSortedNamedCategories().indexOf(o) + K,
            d = o.getShownChannelIds().indexOf(i.id);
          if (h >= 0 && d >= 0) {
            let t = s ? o.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({ section: h, row: d, threadOffset: t });
          }
          let u = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
          return (
            u >= 0 &&
              n.push({ section: this.voiceChannelsSectionNumber, row: u }),
            n
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
          s()(e.length > 0, "must have at least one channel in the slice");
          let n = e[0],
            i = e[e.length - 1],
            r = !0,
            l = !1,
            a = [],
            o = [];
          for (let e of this.getSortedCategories()) {
            let s = t?.ignoreRecents && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
              let h = e.channels[t];
              r && (h.id === n.id ? (r = !1) : s || a.push(h)),
                l && !s && o.push(h),
                r || l || h.id !== i.id || (l = !0);
            }
          }
          return [a, e, o];
        }
        _initializeAllChannelsById() {
          if (null == this.allChannelsById)
            for (let e of ((this.allChannelsById = {}),
            this.getSortedCategories()))
              for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
          return this.allChannelsById;
        }
        getChannels(e) {
          let t = [],
            n = this._initializeAllChannelsById();
          for (let i of e) null != n[i] && t.push(n[i]);
          return t;
        }
        getChannel(e) {
          return this._initializeAllChannelsById()[e] ?? null;
        }
        updateSubtitles(e) {
          let t = [];
          if (null != e) {
            let n = _.A.getChannel(e);
            if (null != n)
              if (n.id in this.favoritesCategory.channels)
                t = [this.favoritesCategory.channels[n.id]];
              else if (n.id in this.recentsCategory.channels)
                t = [this.recentsCategory.channels[n.id]];
              else {
                let i = this.getCategory(n);
                null != i && null != i.channels[e] && (t = [i.channels[e]]);
              }
          } else
            t = l()(this.getSortedCategories())
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
          for (let n of this.getSortedCategories())
            if (!t?.ignoreRecents || n !== this.recentsCategory)
              for (let t of n.getShownChannelIds()) {
                let i = n.channels[t];
                for (let t of (e(i.record), i.threadIds)) {
                  let n = _.A.getChannel(t);
                  null != n && e(n);
                }
              }
        }
        forEachChannel(e, t) {
          for (let n of this.getSortedCategories())
            if (!t?.ignoreRecents || n !== this.recentsCategory)
              for (let t of n.getChannelRecords()) e(t);
        }
      }
      class Z {
        guild;
        isMuted = !1;
        isCollapsed = !1;
        position = -1;
        channels = {};
        shownChannelIds = null;
        constructor(e) {
          this.guild = e;
        }
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
          return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e;
        }
        shouldShowEmptyCategory() {
          return l().some(this.channels, (e) => e.renderLevel >= 3);
        }
        getShownChannelIds() {
          return (
            null == this.shownChannelIds &&
              (this.shownChannelIds = l()(this.channels)
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
          let e = l()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
          return this.getShownChannelIds().concat(e);
        }
        isEmpty() {
          return 0 === this.getShownChannelIds().length;
        }
        getChannelRecords() {
          return l()(this.channels)
            .values()
            .filter((e) => e.renderLevel > 1)
            .map((e) => e.record)
            .value();
        }
        getFirstVoiceChannel(e) {
          for (let t of this.getShownChannelIds())
            if (e && this.channels[t].record.isGuildStageVoice())
              return this.channels[t];
            else if (!e && this.channels[t].record.isGuildVocal())
              return this.channels[t];
          return null;
        }
      }
      class ee extends Z {
        constructor(e, t, n) {
          super(e),
            (this.channels = l()(t)
              .map((e) => new eo(this, e, n))
              .keyBy((e) => e.id)
              .value());
        }
      }
      class et extends Z {
        id;
        record;
        constructor(e, t, n, i) {
          for (const s of (super(e),
          (this.record = t),
          (this.id = t.id),
          (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
          (this.isMuted = e.mutedChannelIds.has(t.id)),
          (this.channels = {}),
          n))
            this.channels[s.id] = new eo(this, s, i);
        }
        shouldShowEmptyCategory() {
          return !!(
            super.shouldShowEmptyCategory() ||
            (N.A.can(j.xB.MANAGE_CHANNELS, this.record) &&
              N.A.can(j.xB.VIEW_CHANNEL, this.record) &&
              l().isEmpty(this.channels) &&
              (!this.guild.optInEnabled ||
                this.guild.optedInChannels.has(this.id)))
          );
        }
      }
      class en extends Z {
        constructor(e, t) {
          super(e),
            (this.channels = l()(V.Ay.getGuildFavorites(e.id) ?? [])
              .map((e) => _.A.getChannel(e))
              .filter(T.Vq)
              .map((e) => new eh(this, e, t))
              .keyBy((e) => e.id)
              .value());
          const n = p.A.getSuggestedChannelId(e.id),
            i = _.A.getChannel(n);
          null != i &&
            null != n &&
            (this.channels[n] = new eh(this, i, {
              ...t,
              activeJoinedRelevantThreads: {},
              activeJoinedUnreadThreads: {},
            }));
        }
        updateChannel(e, t) {
          let n = e.id in this.channels && V.Ay.isFavorite(e.guild_id, e.id),
            i = p.A.getSuggestedChannelId(e.guild_id);
          return (e.id !== i ||
            n ||
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
      }
      class ei extends Z {
        constructor(e, t, n) {
          if ((super(e), !e.optInEnabled || g.A.isFullServerPreview(e.id)))
            return;
          (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = l()(t)
              .map((e) => new ed(this, e, n))
              .keyBy((e) => e.id)
              .value());
        }
        updateAllChannels(e) {
          let t = !1;
          return (
            U.default.keys(this.channels).forEach((n) => {
              this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
          );
        }
        updateChannel(e, t) {
          let n = super.updateChannel(e, t);
          if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (ey(this.guild, e, t) && null == n)
              return (
                (this.channels[e.id] = new ed(this, e, t)),
                this.invalidate(),
                !0
              );
          }
          return n;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
        getShownChannelIds() {
          if (null == this.shownChannelIds) {
            let e = l()(this.channels)
                .values()
                .filter((e) => 4 === e.renderLevel || 3 === e.renderLevel),
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
            this.shownChannelIds = l()([...n])
              .sortBy((e) => {
                let { record: t } = e;
                return t.position;
              })
              .map((e) => e.id)
              .value();
          }
          return this.shownChannelIds;
        }
      }
      class es extends Z {
        categoriesById;
        hiddenChannelIds = null;
        constructor(e, t, n, i) {
          if ((super(e), (this.categoriesById = n), !e.optInEnabled)) return;
          (this.isCollapsed = B.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = l()(t)
              .map((e) => new eu(this, e, i))
              .keyBy((e) => e.id)
              .value());
        }
        invalidate() {
          super.invalidate(), (this.hiddenChannelIds = null);
        }
        getHiddenChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.hiddenChannelIds) {
            let e = l()(this.channels)
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
            ? [Y]
            : e;
        }
        getShownChannelIds() {
          if (!this.guild.optInEnabled) return [];
          if (null == this.shownChannelIds) {
            let e = l()(this.channels)
              .filter((e) => 4 === e.renderLevel)
              .orderBy(
                [
                  (e) => {
                    var t;
                    return (
                      (t = this.categoriesById),
                      e.record.type === M.rbe.GUILD_CATEGORY
                        ? e.record.position
                        : null != e.record.parent_id
                          ? (t[e.record.parent_id]?.position ?? -1)
                          : -1
                    );
                  },
                  (e) =>
                    e.record.type === M.rbe.GUILD_CATEGORY
                      ? -1
                      : e.record.position,
                ],
                ["asc", "asc"],
              )
              .value();
            this.shownChannelIds = [];
            for (let t = 0; t < e.length; t++) {
              let n = e[t];
              (t < e.length - 1 &&
                n.record.type === M.rbe.GUILD_CATEGORY &&
                e[t + 1]?.record.type === M.rbe.GUILD_CATEGORY) ||
                ((t !== e.length - 1 ||
                  n.record.type !== M.rbe.GUILD_CATEGORY) &&
                  this.shownChannelIds.push(n.id));
            }
          }
          return this.shownChannelIds;
        }
        getFirstVoiceChannel(e) {
          return null;
        }
      }
      class er {
        rows;
        constructor(e) {
          this.rows = e;
        }
        isEmpty() {
          return 0 === this.rows.length;
        }
        getRows() {
          return this.rows;
        }
        getRow(e) {
          return this.rows[e];
        }
      }
      class el {
        guildActionRows;
        constructor(e, t) {
          (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(D.n.GUILD_DIRECTORY));
        }
        isEmpty() {
          return 0 === this.guildActionRows.length;
        }
        getRows() {
          return this.guildActionRows;
        }
        getRow(e) {
          return this.guildActionRows[e];
        }
      }
      class ea {
        category;
        record;
        id;
        position = -1;
        threadIds = [];
        threadCount = 0;
        subtitle = null;
        renderLevel = 1;
        constructor(e, t, n) {
          (this.category = e), (this.record = t), (this.id = t.id);
          const { renderLevel: i, threadIds: s } = this.computeState(n);
          (this.renderLevel = i),
            (this.threadCount = l().size(s)),
            (this.threadIds = s),
            4 === i && (this.subtitle = this.computeSubtitle());
        }
        get isMuted() {
          return this.category.guild.mutedChannelIds.has(this.id);
        }
        get isCollapsed() {
          return b.A.isCollapsed(this.id);
        }
        get isFirstVoiceChannel() {
          return this.category.getFirstVoiceChannel() === this;
        }
        get lastMessageTimestamp() {
          return Math.max(
            L.Ay.lastMessageTimestamp(this.id),
            ...this.threadIds.map(L.Ay.lastMessageTimestamp),
          );
        }
        updateChannel(e, t) {
          let n = !1;
          null != e && e !== this.record && ((this.record = e), (n = !0));
          let i = this.computeState(t);
          return (
            (i.renderLevel === this.renderLevel &&
              l().isEqual(i.threadIds, this.threadIds)) ||
              ((this.renderLevel = i.renderLevel),
              (this.threadIds = i.threadIds),
              (this.threadCount = l().size(i.threadIds)),
              (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
          );
        }
        updateSubtitle() {
          let e = this.computeSubtitle();
          return !l().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
        }
        computeSubtitle() {
          return ec(
            this.record,
            this.isCollapsed || this.category.isCollapsed,
            this.category.guild.optInEnabled,
          );
        }
      }
      class eo extends ea {
        computeState(e) {
          let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
            activeJoinedUnreadThreads: s,
          } = e;
          if (!N.A.can(j.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === n) return { renderLevel: 4, threadIds: [] };
            else if (
              !d.A.isChannelGatedAndVisible(
                this.record.guild_id,
                this.record.id,
              )
            )
              return { renderLevel: 1, threadIds: [] };
          }
          let r = this.record.parent_id,
            a = this.category.guild;
          if (eC(a, this.record)) return { renderLevel: 1, threadIds: [] };
          let o = t?.id === this.id || n === this.id,
            h = null != t && t.isThread() && t.parent_id === this.id,
            u =
              (o || h || (!this.category.isCollapsed && !this.isMuted)
                ? i[this.id]
                : s[this.id]) ?? {},
            c = eg(this.record, u, t, n, a.hideMutedChannels);
          return this.id !== a.moderatorReportChannelId ||
            a.moderatorReportChannelEnabled
            ? a.optInEnabled &&
              a.hideResourceChannels &&
              this.record.hasFlag(P.lx.IS_GUILD_RESOURCE_CHANNEL)
              ? { renderLevel: o ? 4 : 1, threadIds: c }
              : !a.optInEnabled ||
                  a.optedInChannels.has(this.id) ||
                  (null != r && a.optedInChannels.has(r))
                ? o || h || !l().isEmpty(c) || L.Ay.getMentionCount(this.id) > 0
                  ? { renderLevel: 4, threadIds: c }
                  : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                    ? { renderLevel: 2, threadIds: c }
                    : this.category.isCollapsed &&
                        (a.mutedChannelIds.has(this.id) ||
                          (null != r && a.mutedChannelIds.has(r)) ||
                          this.record.isGuildVocal() ||
                          this.record.type === M.rbe.GUILD_STORE ||
                          ((0, w.ig)(this.record.type) &&
                            !L.Ay.hasUnread(this.record.id)))
                      ? { renderLevel: 3, threadIds: c }
                      : { renderLevel: 4, threadIds: c }
                : { renderLevel: 2, threadIds: c }
            : { renderLevel: 2, threadIds: c };
        }
      }
      class eh extends ea {
        computeState(e) {
          let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
          } = e;
          return N.A.can(j.xB.VIEW_CHANNEL, this.record)
            ? {
                renderLevel: 4,
                threadIds: eg(this.record, i[this.id] ?? {}, t, n, !1),
              }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class ed extends ea {
        computeState(e) {
          let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
          } = e;
          return N.A.can(j.xB.VIEW_CHANNEL, this.record)
            ? ey(this.category.guild, this.record, e)
              ? {
                  renderLevel: ep(this, e) ? 4 : 3,
                  threadIds: eg(this.record, i[this.id] ?? {}, t, n, !1),
                }
              : { renderLevel: 2, threadIds: [] }
            : { renderLevel: 1, threadIds: [] };
        }
      }
      class eu extends eo {
        getRenderLevel(e) {
          let t = this.category.guild;
          return !N.A.can(j.xB.VIEW_CHANNEL, this.record) ||
            4 === e ||
            3 === e ||
            eC(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? l().some(x.A.getVoiceStatesForChannel(this.record.id))
                ? 4
                : 3
              : 4;
        }
        computeState(e) {
          let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
          return (
            4 === n &&
              (this.subtitle = ec(
                this.record,
                this.isCollapsed || this.category.isCollapsed,
                this.category.guild.optInEnabled,
              )),
            { threadIds: [], renderLevel: n }
          );
        }
      }
      function ec(e, t, n) {
        switch (e.type) {
          case M.rbe.GUILD_VOICE: {
            let i = c.Ay.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let s = O.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, F.t)(s)) return { type: "go-live" };
            let r = h.A.getChannelStatus(e);
            if (null != r && r.length > 0) return { type: "voice", text: r };
            let l = a.Ay.getEmbeddedActivitiesForChannel(e.id)
              .map((e) => o.A.getApplication(e.applicationId)?.name)
              .filter(T.Vq);
            if (l.length > 0)
              return { type: "embedded-activities", name: l.join(", ") };
            return null;
          }
          case M.rbe.GUILD_STAGE_VOICE: {
            let t = c.Ay.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
          }
          default:
            return null;
        }
      }
      function eg(e, t, n, i, s) {
        let r = null != n && (n.id === e.id || i === e.id),
          a = null != n && n.isThread() && n.parent_id === e.id;
        if (w.wE.has(e.type)) {
          let e = l()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
          return r
            ? e
            : a
              ? (n.id in t || e.unshift(n.id), e)
              : s
                ? e.filter(
                    (e) => !S.A.isMuted(e) || L.Ay.getMentionCount(e) > 0,
                  )
                : e;
        }
        return [];
      }
      function eC(e, t) {
        return e.favoriteChannelIds.has(t.id);
      }
      function ep(e, t) {
        let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
        if (L.Ay.getMentionCount(e.id) > 0) return !0;
        for (let t in i[e.id]) if (L.Ay.getMentionCount(t) > 0) return !0;
        if (
          null != n &&
          (n.id === e.id || (n.isThread() && n.parent_id === e.id))
        )
          return !0;
        let s = f.A.getNewChannelIds(e.category.guild.id);
        if (s.size > z);
        else if (s.has(e.id)) return !0;
        return !1;
      }
      function ey(e, t, n) {
        let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
        if (
          t.type === M.rbe.GUILD_DIRECTORY ||
          !e.optInEnabled ||
          e.optedInChannels.has(t.id) ||
          t.isThread() ||
          (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
          (e.hideResourceChannels &&
            t.hasFlag(P.lx.IS_GUILD_RESOURCE_CHANNEL)) ||
          (t.isGuildVocal() &&
            (!B.A.isVoiceCategoryCollapsed(e.id) ||
              l().some(x.A.getVoiceStatesForChannel(t.id))))
        )
          return !1;
        if (
          (null != i &&
            (i.id === t.id || (i.isThread() && i.parent_id === t.id))) ||
          L.Ay.getMentionCount(t.id) > 0
        )
          return !0;
        for (let e in s[t.id])
          if (
            L.Ay.getMentionCount(e) > 0 ||
            L.Ay.hasUnread(e) ||
            L.Ay.hasRecentlyVisitedAndRead(e)
          )
            return !0;
        if (
          e.mutedChannelIds.has(t.id) ||
          (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))
        )
          return !1;
        let r = f.A.getNewChannelIds(e.id),
          a = Array.from(r).sort((e, t) => U.default.compare(t, e));
        return !!(
          (r.has(t.id) && a.indexOf(t.id) < z) ||
          L.Ay.hasRecentlyVisitedAndRead(t.id)
        );
      }
      let eI = new Set(Object.values(D.n));
    },
    551851(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        s = n(228366);
      let r = {};
      function l(e) {
        let { guildId: t, expand: n } = e;
        n ? (r[t] = !0) : delete r[t];
      }
      class a extends i.Ay.PersistedStore {
        static displayName = "ChannelListVoiceCategoryStore";
        static persistKey = "ChannelListVoiceCategoryStore";
        initialize(e) {
          r = e ?? {};
        }
        isVoiceCategoryExpanded(e) {
          return (null != e && r[e]) ?? !1;
        }
        isVoiceCategoryCollapsed(e) {
          return !this.isVoiceCategoryExpanded(e);
        }
        getState() {
          return r;
        }
      }
      let o = new a(s.h, {
        VOICE_CATEGORY_COLLAPSE: l,
        VOICE_CATEGORY_EXPAND: l,
      });
    },
    603488(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(627968);
      n(64700);
      var s = n(503698),
        r = n.n(s),
        l = n(554146),
        a = n(406810),
        o = n(834730),
        h = n(826673),
        d = n(985018),
        u = n(757503);
      function c() {
        return (0, h.k8)(l.M.BOGO_2025_NITRO_TAB_BADGE)
          ? (0, i.jsxs)("div", {
              className: r()(u.Fg, u.Hh, {}),
              children: [
                (0, i.jsx)(a.O, {
                  size: "custom",
                  width: 14,
                  height: 14,
                  color: "currentColor",
                  className: u.iD,
                }),
                (0, i.jsx)(o.E, {
                  variant: "eyebrow",
                  color: "text-subtle",
                  children: d.intl.string(d.t.OS9KPu),
                }),
              ],
            })
          : (0, i.jsx)("div", {
              className: r()(u.Fg, u.N4),
              children: (0, i.jsx)(o.E, {
                variant: "eyebrow",
                color: "always-white",
                children: d.intl.string(d.t.OS9KPu),
              }),
            });
      }
    },
    105390(e, t, n) {
      n.d(t, { Ag: () => v, MA: () => m, fY: () => A });
      var i = n(627968),
        s = n(64700),
        r = n(503698),
        l = n.n(r),
        a = n(990078),
        o = n(406810),
        h = n(834730),
        d = n(496431),
        u = n(58703),
        c = n(927578),
        g = n(234419),
        C = n(915516),
        p = n(788868),
        y = n(985018),
        I = n(386667);
      function f(e) {
        let {
            isTabSelected: t,
            expiresAt: n,
            badgeCopy: r,
            className: c,
            tooltipTextOverride: g,
            tooltipPosition: C,
            hideTooltip: p = !1,
          } = e,
          f = s.useMemo(() => Date.parse(n), [n]),
          v = (0, d.A)(f, 6e4);
        if (Object.values(v).every((e) => 0 === e)) return null;
        let A = (0, i.jsxs)("div", {
          className: l()(I.Fg, I.C8, c, { [I.WO]: t }),
          children: [
            (0, i.jsx)(o.O, {
              size: "custom",
              width: 16,
              height: 16,
              color: "currentColor",
              className: I._q,
            }),
            (0, i.jsx)(h.E, {
              variant: "eyebrow",
              color: "text-strong",
              children: r,
            }),
          ],
        });
        return p
          ? A
          : (0, i.jsx)(a.m, {
              text:
                null != g
                  ? g
                  : (0, u.uN)(v, {
                      days: y.t.qVGNkU,
                      hours: y.t.wyg9a9,
                      minutes: y.t.IzmIlV,
                    }),
              position: null != C ? C : "top",
              children: A,
            });
      }
      function v(e) {
        let { isTabSelected: t, trialOffer: n } = e,
          s = (0, g.V)()?.subscription_trial,
          r = (0, c.tS)({
            intervalType: s?.interval,
            intervalCount: s?.interval_count,
          }),
          l = n.trial_id === p.Tt,
          a = (0, C.Fu)(n);
        return (0, i.jsx)(m, {
          isTabSelected: t,
          badgeCopy: r,
          offerExpiresAt: n.expires_at,
          tooltipTextOverride: a,
          tooltipPosition: "right",
          hideTooltip: l,
        });
      }
      function A(e) {
        let { isTabSelected: t, userDiscount: n, includesAmountOff: s } = e,
          r = y.intl.formatToPlainString(y.t.iiLbvu, {
            percent: n.discount.amount,
          }),
          l = (0, C.__)(n);
        return (0, i.jsx)(m, {
          isTabSelected: t,
          badgeCopy: s ? r : y.intl.string(y.t["/DTtr6"]),
          offerExpiresAt: n.expires_at,
          tooltipTextOverride: l,
          tooltipPosition: "right",
        });
      }
      function m(e) {
        let {
          isTabSelected: t,
          badgeCopy: n,
          offerExpiresAt: s,
          tooltipTextOverride: r,
          tooltipPosition: a,
          hideTooltip: o,
        } = e;
        return null != s
          ? (0, i.jsx)(f, {
              expiresAt: s,
              isTabSelected: t,
              badgeCopy: n,
              tooltipTextOverride: r,
              tooltipPosition: a,
              hideTooltip: o,
            })
          : (0, i.jsx)("div", {
              className: l()(I.Fg, I.AT),
              children: (0, i.jsx)(h.E, {
                variant: "eyebrow",
                className: I.md,
                children: n,
              }),
            });
      }
    },
  },
]);
//# sourceMappingURL=15062.85d8f9855c535f5c.js.map
