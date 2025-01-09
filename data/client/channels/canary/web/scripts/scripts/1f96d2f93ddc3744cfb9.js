"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24207"],
  {
    816782: function (e, n, t) {
      var l = t(570140);
      n.Z = {
        toggleMembersSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
        },
        toggleProfilePanelSection() {
          l.Z.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
        },
        toggleSummariesSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
        },
      };
    },
    475468: function (e, n, t) {
      t.d(n, {
        K: function () {
          return E;
        },
        z: function () {
          return o;
        },
      });
      var l = t(481060),
        i = t(475179),
        u = t(925549),
        a = t(905423),
        r = t(981631);
      function E(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          E = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && u.Z.channelListScrollTo(e, n),
            E && null != n && i.Z.updateChatOpen(n, !0),
            a.Z.getState().updatePath(r.Z5c.CHANNEL(e, n));
      }
      function o(e) {
        if (!(0, l.hasAnyModalOpen)()) a.Z.getState().updatePath(e);
      }
    },
    358230: function (e, n, t) {
      t.d(n, {
        T: function () {
          return I;
        },
        Z: function () {
          return C;
        },
      }),
        t(653041);
      var l = t(192379),
        i = t(442837),
        u = t(734307),
        a = t(854444),
        r = t(131704),
        E = t(680089),
        o = t(888369),
        d = t(944486),
        _ = t(981631),
        c = t(647086);
      function C(e) {
        let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = arguments.length > 2 ? arguments[2] : void 0;
        return s(
          e === c._ || e === _.I_8
            ? (0, a.t)()
            : u.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
          {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId(),
          },
          { withVoiceChannels: n, withCurrentVoiceChannel: t },
          l,
        );
      }
      function I(e, n, t) {
        let { withVoiceChannels: u = !1, withCurrentVoiceChannel: a = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r = arguments.length > 4 ? arguments[4] : void 0,
          _ = (0, i.e7)([o.default], () => o.default.getGuildChangeSentinel(e)),
          c = (0, i.e7)([E.Z], () => E.Z.version),
          { currentVoiceChannelId: C, selectedChannelId: I } = (0, i.cj)(
            [d.Z],
            () => ({
              currentVoiceChannelId: d.Z.getVoiceChannelId(),
              selectedChannelId: d.Z.getChannelId(),
            }),
          );
        return (0, l.useMemo)(
          () =>
            s(
              n,
              { currentVoiceChannelId: C, selectedChannelId: I },
              { withVoiceChannels: u, withCurrentVoiceChannel: a },
              r,
            ).map((e) => e.id),
          [n, t, _, c],
        );
      }
      function s(e, n) {
        let { currentVoiceChannelId: t, selectedChannelId: l } = n,
          { withVoiceChannels: i, withCurrentVoiceChannel: u } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = arguments.length > 3 ? arguments[3] : void 0,
          E = [];
        return (
          e.forEachShownChannel((e) => {
            ((0, r.r8)(e.type) ||
              (i && (0, r.bw)(e.type)) ||
              (u && (e.id === t || e.id === l))) &&
              E.push(e);
          }, a),
          E
        );
      }
    },
    675999: function (e, n, t) {
      var l, i, u, a;
      t.d(n, {
        PU: function () {
          return r;
        },
        _m: function () {
          return l;
        },
        lr: function () {
          return i;
        },
      }),
        ((u = l || (l = {})).GUILD_TEMPLATES = "guild-templates"),
        (u.CUSTOMIZE_GUILD = "customize-guild"),
        (u.CHANNEL_PROMPT = "channel-prompt"),
        (u.JOIN_GUILD = "join-guild"),
        (u.CREATION_INTENT = "creation-intent"),
        ((a = i || (i = {})).FRIENDS = "FRIENDS"),
        (a.COMMUNITY = "COMMUNITY"),
        (a.CLAN = "CLAN");
      let r = "create-guild";
    },
    734307: function (e, n, t) {
      t(47120);
      var l,
        i,
        u,
        a,
        r = t(392711),
        E = t.n(r),
        o = t(442837),
        d = t(570140),
        _ = t(317381),
        c = t(16609),
        C = t(430198),
        I = t(924301),
        s = t(601070),
        T = t(569471),
        A = t(581883),
        h = t(314897),
        S = t(680089),
        L = t(592125),
        N = t(58468),
        g = t(77498),
        f = t(496675),
        P = t(306680),
        U = t(944486),
        R = t(9156),
        p = t(823379),
        D = t(709054),
        Z = t(540126),
        O = t(526761);
      let G = null,
        H = null,
        v = new Z.ZP();
      function M() {
        let e = U.Z.getChannelId(),
          n = U.Z.getVoiceChannelId();
        return (G = e), (H = n), v.clear();
      }
      function m(e) {
        let {
          guild: { id: n },
        } = e;
        return v.clearGuildId(n);
      }
      function y(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return v.clearGuildId(n);
      }
      function w(e) {
        let { guildId: n } = e;
        return v.clearGuildId(n);
      }
      function V(e) {
        let { channelId: n } = e;
        return v.nonPositionalChannelIdUpdate(n);
      }
      function F(e) {
        let { channel: n } = e;
        return v.nonPositionalChannelIdUpdate(n.id);
      }
      function b(e) {
        let { id: n } = e;
        return v.nonPositionalChannelIdUpdate(n);
      }
      function K() {
        let e = U.Z.getChannelId(),
          n = U.Z.getVoiceChannelId(),
          t = G !== e || H !== n;
        return (
          !!t &&
          (E()([G, H, e, n])
            .uniq()
            .forEach((e) => {
              null != e && v.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (G = e),
          (H = n),
          !0)
        );
      }
      function B(e) {
        let { id: n } = e,
          t = L.Z.getChannel(n);
        return null == t ? v.clearGuildId(n) : v.clearGuildId(t.guild_id);
      }
      function k(e) {
        let { guildId: n } = e;
        return v.clearGuildId(n);
      }
      function W() {
        return v.updateSubtitles();
      }
      function Y(e) {
        let { guildScheduledEvent: n } = e;
        return v.updateSubtitles(n.guild_id);
      }
      class Q extends (l = o.ZP.Store) {
        initialize() {
          this.waitFor(
            s.Z,
            h.default,
            S.Z,
            L.Z,
            N.Z,
            _.ZP,
            g.Z,
            C.Z,
            I.ZP,
            T.Z,
            f.Z,
            P.ZP,
            U.Z,
            R.ZP,
            A.Z,
          );
        }
        getGuild(e, n) {
          var t, l;
          let i = v.getGuild(
            e,
            null !== (t = null == n ? void 0 : n.guildActionRows) &&
              void 0 !== t
              ? t
              : [],
            null !== (l = null == n ? void 0 : n.channelNoticeRows) &&
              void 0 !== l
              ? l
              : [],
          );
          return { guildChannelsVersion: i.version, guildChannels: i };
        }
        getGuildWithoutChangingGuildActionRows(e) {
          let n = v.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = v.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (a = "ChannelListStore"),
        (u = "displayName") in (i = Q)
          ? Object.defineProperty(i, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[u] = a),
        (n.Z = new Q(d.Z, {
          APPLICATION_FETCH_FAIL: W,
          APPLICATION_FETCH_SUCCESS: W,
          APPLICATION_FETCH: W,
          APPLICATIONS_FETCH_FAIL: W,
          APPLICATIONS_FETCH_SUCCESS: W,
          APPLICATIONS_FETCH: W,
          BACKGROUND_SYNC: M,
          BULK_ACK: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              E()(n)
                .map((e) => {
                  var n;
                  return null === (n = L.Z.getChannel(e.channelId)) ||
                    void 0 === n
                    ? void 0
                    : n.guild_id;
                })
                .filter(p.lm)
                .uniq()
                .forEach((e) => {
                  v.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: w,
          CACHE_LOADED_LAZY: M,
          CATEGORY_COLLAPSE_ALL: w,
          CATEGORY_COLLAPSE: B,
          CATEGORY_EXPAND_ALL: w,
          CATEGORY_EXPAND: B,
          CHANNEL_ACK: V,
          CHANNEL_COLLAPSE: function (e) {
            var n;
            let { channelId: t } = e;
            return v.clearGuildId(
              null === (n = L.Z.getChannel(t)) || void 0 === n
                ? void 0
                : n.guild_id,
            );
          },
          CHANNEL_CREATE: y,
          CHANNEL_DELETE: y,
          CHANNEL_LOCAL_ACK: V,
          CHANNEL_MUTE_EXPIRED: w,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: V,
          CHANNEL_SELECT: K,
          CHANNEL_STATUSES: function (e) {
            return v.clearGuildId(e.guildId);
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              E()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                  v.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: W,
          CONNECTION_OPEN: M,
          CURRENT_USER_UPDATE: M,
          DECAY_READ_STATES: M,
          DEV_TOOLS_DESIGN_TOGGLE_SET: M,
          DISABLE_AUTOMATIC_ACK: V,
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { channelId: n } = e;
            return v.nonPositionalChannelIdUpdate(n);
          },
          EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: n } = e;
            return v.updateSubtitles((0, c.j)(n), (0, c.p)(n));
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            W();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: W,
          ENABLE_AUTOMATIC_ACK: V,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: n } = e;
            return v.updateSubtitles(n);
          },
          GAMES_DATABASE_FETCH_FAIL: W,
          GAMES_DATABASE_FETCH: W,
          GAMES_DATABASE_UPDATE: W,
          GUILD_APPLICATIONS_FETCH_SUCCESS: W,
          GUILD_CREATE: m,
          GUILD_DELETE: m,
          GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: n, user: t } = e;
            return h.default.getId() === t.id && v.clearGuildId(n);
          },
          GUILD_MUTE_EXPIRED: w,
          GUILD_ROLE_CREATE: w,
          GUILD_ROLE_DELETE: w,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: w,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: w,
          GUILD_ROLE_UPDATE: w,
          GUILD_SCHEDULED_EVENT_CREATE: Y,
          GUILD_SCHEDULED_EVENT_DELETE: Y,
          GUILD_SCHEDULED_EVENT_UPDATE: Y,
          GUILD_TOGGLE_COLLAPSE_MUTED: w,
          GUILD_UPDATE: m,
          IMPERSONATE_STOP: w,
          IMPERSONATE_UPDATE: w,
          LOAD_CHANNELS: function (e) {
            e.channels.forEach((e) => {
              let { guildId: n } = e;
              return v.clearGuildId(n);
            });
          },
          LOAD_MESSAGES_SUCCESS: V,
          MESSAGE_ACK: V,
          MESSAGE_CREATE: function (e) {
            let { channelId: n } = e;
            return v.nonPositionalChannelIdUpdate(n);
          },
          MESSAGE_DELETE_BULK: V,
          MESSAGE_DELETE: V,
          NOTIFICATION_SETTINGS_UPDATE: M,
          OVERLAY_INITIALIZE: M,
          PASSIVE_UPDATE_V2: function (e) {
            return v.clearGuildId(e.guildId);
          },
          RECOMPUTE_READ_STATES: M,
          RESORT_THREADS: V,
          SET_RECENTLY_ACTIVE_COLLAPSED: M,
          THREAD_CREATE: F,
          THREAD_DELETE: function (e) {
            let { channel: n } = e;
            return v.nonPositionalChannelUpdate(n);
          },
          THREAD_LIST_SYNC: w,
          THREAD_MEMBER_UPDATE: b,
          THREAD_MEMBERS_UPDATE: b,
          THREAD_UPDATE: F,
          TRY_ACK: V,
          UPDATE_CHANNEL_DIMENSIONS: V,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
            let { guildId: n } = e;
            v.updateSubtitles(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: w,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: w,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: n } = e;
            n.forEach((e) => {
              let { guild_id: n } = e;
              return v.clearGuildId(n);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: w,
          USER_GUILD_SETTINGS_GUILD_UPDATE: w,
          USER_SETTINGS_PROTO_UPDATE: function (e) {
            var n;
            let { settings: t } = e;
            if (t.type !== O.yP.PRELOADED_USER_SETTINGS) return !1;
            let l =
                null === (n = t.proto.guilds) || void 0 === n
                  ? void 0
                  : n.guilds,
              i = !1;
            return (
              null != l &&
                D.default.keys(l).forEach((e) => {
                  null != l[e].guildRecentsDismissedAt &&
                    (i = v.updateRecentsCategory(e) || i);
                }),
              i
            );
          },
          VOICE_CATEGORY_COLLAPSE: k,
          VOICE_CATEGORY_EXPAND: k,
          VOICE_CHANNEL_SELECT: K,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            return v.nonPositionalChannelIdUpdate(e.id);
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: n } = e,
              t = K(),
              l = new Set();
            for (let { channelId: e, oldChannelId: i } of n)
              null != i &&
                !l.has(i) &&
                (v.nonPositionalChannelIdUpdate(i) && (t = !0), l.add(i)),
                null != e &&
                  !l.has(e) &&
                  (v.nonPositionalChannelIdUpdate(e) && (t = !0), l.add(e));
            return t;
          },
          WINDOW_FOCUS: function () {
            return null != G && v.nonPositionalChannelIdUpdate(G);
          },
        }));
    },
    854444: function (e, n, t) {
      t.d(n, {
        o: function () {
          return p;
        },
        t: function () {
          return D;
        },
      }),
        t(47120),
        t(653041);
      var l = t(192379),
        i = t(392711),
        u = t.n(i),
        a = t(524437),
        r = t(317381),
        E = t(853856),
        o = t(846787),
        d = t(924301),
        _ = t(601070),
        c = t(569471),
        C = t(131704),
        I = t(680089),
        s = t(592125),
        T = t(58468),
        A = t(77498),
        h = t(496675),
        S = t(306680),
        L = t(944486),
        N = t(9156),
        g = t(823379),
        f = t(540126),
        P = t(647086),
        U = t(231338);
      let R = [r.ZP, E.Z, d.ZP, _.Z, c.Z, I.Z, s.Z, A.Z, h.Z, S.ZP, L.Z, N.ZP];
      function p() {
        let [e, n] = l.useState(() => D());
        return (
          l.useEffect(() => {
            let e = u().throttle(() => n(D()), 100);
            return (
              R.forEach((n) => n.addChangeListener(e)),
              () => R.forEach((n) => n.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function D() {
        let e = E.Z.getFavoriteChannels(),
          n = N.ZP.isGuildCollapsed(P._),
          t = L.Z.getChannelId(),
          l = s.Z.getChannel(t),
          i = L.Z.getVoiceChannelId(),
          r = [],
          d = {};
        for (let n in e) {
          let t = e[n],
            l = s.Z.getChannel(t.id);
          if (null == l || t.type === a.Dd.CATEGORY) continue;
          let i = (0, o.r)(e, t, l);
          if (null == t.parentId || !(t.parentId in e)) {
            r.push(i);
            continue;
          }
          !(t.parentId in d) && (d[t.parentId] = []), d[t.parentId].push(i);
        }
        function c(t, a) {
          let { isCollapsed: r, isMuted: E } = a;
          return u()(t)
            .map((t) => {
              var o;
              if (!t.isPrivate() && !h.Z.can(U.Pl.VIEW_CHANNEL, t)) return null;
              let d = null != l && (l.id === t.id || i === t.id),
                c = null != l && l.isThread() && l.parent_id === t.id,
                I =
                  null !==
                    (o =
                      d || c || !r
                        ? _.Z.getActiveJoinedRelevantThreadsForParent(
                            t.guild_id,
                            t.id,
                          )
                        : _.Z.getActiveJoinedUnreadThreadsForParent(
                            t.guild_id,
                            t.id,
                          )) && void 0 !== o
                    ? o
                    : {},
                s = (0, f.zR)(t, I, l, i, n),
                A = T.Z.isCollapsed(t.id),
                L = N.ZP.isChannelMuted(t.guild_id, t.id),
                g = {
                  id: t.id,
                  record: t,
                  category: a,
                  position: e[t.id].order,
                  threadIds: s,
                  threadCount: u().size(s),
                  isCollapsed: A,
                  isMuted: L,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, f.Bz)(t, A, !1),
                };
              return d || c || S.ZP.getMentionCount(t.id) > 0
                ? g
                : (n && L) ||
                    (r &&
                      (L ||
                        E ||
                        (0, C.vd)(t.type) ||
                        ((0, C.vc)(t.type) && !1 === S.ZP.hasUnread(t.id))))
                  ? null
                  : g;
            })
            .filter(g.lm)
            .sortBy((e) => {
              let { record: n } = e;
              return n.isGuildVocal() ? n.position + 1e4 : n.position;
            })
            .value();
        }
        let A = null,
          R = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => r,
            getShownChannelIds: () => r.map((e) => e.id),
            getShownChannelAndThreadIds: () => r.map((e) => e.id),
            isEmpty: () => 0 === r.length,
            get channelList() {
              return null == A && (A = c(r, this)), A;
            },
          },
          p = u()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
              var n;
              let { id: t, order: l } = e,
                i = E.Z.getCategoryRecord(t),
                u = null !== (n = d[t]) && void 0 !== n ? n : [],
                a = N.ZP.isChannelMuted(P._, t),
                r = I.Z.isCollapsed(t),
                o = null;
              return {
                isMuted: a,
                isCollapsed: r,
                record: i,
                id: t,
                position: l,
                getChannelRecords: () => u,
                getShownChannelIds: () => u.map((e) => e.id),
                getShownChannelAndThreadIds: () => u.map((e) => e.id),
                isEmpty: () => 0 === u.length,
                get channelList() {
                  return null == o && (o = c(u, this)), o;
                },
              };
            })
            .value(),
          D = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          Z = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: P._,
          hideMutedChannels: n,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let e = [];
            (e[f.Fq] = 0),
              (e[f.wZ] = 0),
              (e[f.p2] = 0),
              (e[f.PB] = 0),
              (e[f.wd] = R.channelList.length);
            for (let n = 0; n < p.length; n++)
              e[f.wF + n] = Math.max(1, p[n].channelList.length);
            return e;
          },
          isPlaceholderRow: (e, n) =>
            !(e < f.wF) && 0 === n && 0 === p[e - f.wF].channelList.length,
          getCategoryFromSection: (e) => (e === f.wd ? R : p[e - f.wF]),
          getNamedCategoryFromSection: (e) => p[e - f.wF],
          getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
              ? null
              : { category: t, channel: t.channelList[n] };
          },
          getGuildActionSection: () => D,
          getChannelNoticeSection: () => Z,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(e) {
            let n = [R, ...p];
            for (let t = 0; t < n.length; t++)
              for (let l = 0; l < n[t].channelList.length; l++)
                if (n[t].channelList[l].id === e)
                  return [{ section: t + f.wd, row: l }];
            return [];
          },
          forEachShownChannel(e) {
            for (let n of [R, ...p])
              for (let t of n.channelList)
                for (let n of (e(t.record), t.threadIds)) {
                  let t = s.Z.getChannel(n);
                  null != t && e(t);
                }
          },
          forEachChannel(e) {
            for (let n of [R, ...p]) for (let t of n.getChannelRecords()) e(t);
          },
          getSlicedChannels: (e) => [[], e, []],
          getChannels: () => [],
        };
      }
    },
    51596: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return D;
        },
        Cp: function () {
          return Z;
        },
        F_: function () {
          return U;
        },
        Se: function () {
          return H;
        },
        tF: function () {
          return G;
        },
        yC: function () {
          return O;
        },
      }),
        t(757143),
        t(47120);
      var l = t(570140),
        i = t(493683),
        u = t(475179),
        a = t(925549),
        r = t(287734),
        E = t(212819),
        o = t(336197),
        d = t(359110),
        _ = t(769654),
        c = t(131704),
        C = t(592125),
        I = t(283595),
        s = t(944486),
        T = t(914010),
        A = t(626135);
      if (12633 == t.j) var h = t(777754);
      var S = t(823385),
        L = t(981631),
        N = t(176505);
      let g = () => Promise.resolve();
      g = t(346329).playApplication;
      let f = Object.freeze({
          [E.xQ.USER]: E.h8.USER,
          [E.xQ.TEXT_CHANNEL]: E.h8.TEXT_CHANNEL,
          [E.xQ.VOICE_CHANNEL]: E.h8.VOICE_CHANNEL,
          [E.xQ.GUILD]: E.h8.GUILD,
          [E.xQ.APPLICATION]: E.h8.APPLICATION,
        }),
        P = new RegExp(
          "^"
            .concat(E.xQ.USER, "|")
            .concat(E.xQ.TEXT_CHANNEL, "|")
            .concat(E.xQ.VOICE_CHANNEL, "|\\")
            .concat(E.xQ.GUILD, "|\\")
            .concat(E.xQ.APPLICATION),
        );
      function U(e) {
        var n, t;
        let l;
        let [i, u] =
          ((l = null !== (t = f[(n = e).charAt(0)]) && void 0 !== t ? t : null),
          [n.replace(P, ""), l]);
        return { query: i, queryMode: u };
      }
      function R(e, n) {
        let {
            results: t,
            queryMode: l,
            query: i,
            maxQueryLength: u,
          } = S.Z.getProps(),
          a = T.Z.getGuildId(),
          r = s.Z.getChannelId(a),
          o = t[(0, E.gJ)(E.a8.DOWN, -1, t)],
          d = h.Z.isEmail(i),
          _ = h.Z.isPhoneNumber(i),
          I = h.Z.isUserTagLike(i),
          L = null != r && (0, N.AB)(r),
          g = (e) =>
            null == e
              ? null
              : e.type === E.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          f = {
            current_channel_id: L ? void 0 : r,
            current_channel_static_route: L ? r : void 0,
            current_guild_id: a,
            query_mode: null != l ? l : "GENERAL",
            query_length: i.length,
            max_query_length: u,
            is_email_like: d,
            is_phone_like: _,
            is_username_like: I,
            query: d || _ || I ? null : i,
            top_result_type: g(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(E.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(E.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(E.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(E.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(E.h8.GROUP_DM),
          };
        if (null != r) {
          let e = C.Z.getChannel(r);
          f.current_channel_type = null != e ? e.type : null;
        }
        if (null != n) {
          let { type: e, score: l, record: i } = n;
          switch (
            ((f.selected_type = g(n)),
            (f.selected_score = l),
            (f.selected_index = t.indexOf(n)),
            e)
          ) {
            case E.h8.GUILD:
              f.selected_guild_id = i.id;
              break;
            case E.h8.TEXT_CHANNEL:
            case E.h8.VOICE_CHANNEL:
              i instanceof c.Sf &&
                (f.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                (f.selected_channel_id = i.id);
              break;
            case E.h8.GROUP_DM:
              f.selected_channel_id = i.id;
              break;
            case E.h8.USER:
              f.selected_user_id = i.id;
          }
        }
        A.default.track(e, f);
      }
      function p() {
        l.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function D() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let n;
          if (S.Z.isOpen()) return;
          let t = T.Z.getGuildId(),
            l = s.Z.getChannelId(t);
          if (null != l) {
            let e = C.Z.getChannel(l);
            n = null != e ? e.type : null;
          }
          A.default.track(L.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: t,
            current_channel_id: l,
            current_channel_type: n,
          });
        })(e),
          l.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...U(n) });
      }
      function Z() {
        R(L.rMx.QUICKSWITCHER_CLOSED), p();
      }
      function O(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...U(e) });
      }
      function G(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function H(e) {
        let n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        p(), R(L.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: c, record: s } = e,
          T = { page: L.ZY5.QUICK_SWITCHER };
        switch (c) {
          case E.h8.GUILD:
            (0, _.X)(s.id, { navigationReplace: !0 });
            break;
          case E.h8.TEXT_CHANNEL:
            null != (n = C.Z.getChannel(s.id)) &&
              (0, d.Kh)(n.id, {
                state: { analyticsSource: T },
                navigationReplace: !0,
              });
            break;
          case E.h8.VOICE_CHANNEL:
            null != (n = C.Z.getChannel(s.id)) &&
              (t
                ? u.Z.updateChatOpen(s.id, !0)
                : r.default.selectVoiceChannel(s.id),
              (0, d.Kh)(n.id, {
                state: { analyticsSource: T },
                navigationReplace: !0,
              }));
            break;
          case E.h8.USER:
            i.Z.openPrivateChannel([s.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(L.ME, C.Z.getDMFromUserId(s.id));
            break;
          case E.h8.GROUP_DM:
            (0, d.Kh)(s.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(L.ME, s.id);
            break;
          case E.h8.APPLICATION:
            let A = I.Z.getActiveLibraryApplication(s.id);
            g(s.id, A, {
              analyticsParams: {
                source: L.Sbl.QUICK_SWITCHER,
                location: L.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case E.h8.LINK:
            (0, o.Z)(s.path, { navigationReplace: !0 });
            break;
          case E.h8.IN_APP_NAVIGATION:
            (0, o.Z)(s.path, { navigationReplace: !0 });
        }
        l.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    774343: function (e, n, t) {
      var l,
        i,
        u,
        a,
        r,
        E,
        o,
        d = t(442837),
        _ = t(570140),
        c = t(592125),
        C = t(896797),
        I = t(430824),
        s = t(944486),
        T = t(55589),
        A = t(981631);
      let h = (null !==
        (E =
          null === (r = window) || void 0 === r
            ? void 0
            : null === (a = r.location) || void 0 === a
              ? void 0
              : a.pathname) && void 0 !== E
        ? E
        : ""
      ).startsWith(A.Z5c.ACTIVITIES)
        ? A.Z5c.ACTIVITIES
        : null;
      function S(e) {
        let { link: n } = e;
        if (h === n) return !1;
        h = n;
      }
      class L extends (o = d.ZP.Store) {
        initialize() {
          this.waitFor(C.Z, T.Z, s.Z, I.Z, c.Z);
        }
        getHomeLink() {
          return null != h ? h : C.Z.fallbackRoute;
        }
      }
      (u = "AppViewStore"),
        (i = "displayName") in (l = L)
          ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = u),
        (n.Z = new L(_.Z, {
          OVERLAY_INITIALIZE: function () {
            let e = T.Z.getPrivateChannelIds(),
              n = s.Z.getChannelId(A.ME);
            (null != n || null != e[0]) &&
              (h = A.Z5c.CHANNEL(A.ME, null != n ? n : e[0]));
          },
          APP_VIEW_SET_HOME_LINK: S,
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            S({ link: n.pathname, type: "APP_VIEW_SET_HOME_LINK" });
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == h || !h.startsWith(A.Z5c.APPLICATION_STORE)) return !1;
            h = A.Z5c.APPLICATION_STORE;
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
              let e = A.Z5c.CHANNEL(A.ME, t);
              if (e !== h) return (h = e), !0;
            }
            return !1;
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id &&
              null != n.id &&
              null != h &&
              h === A.Z5c.CHANNEL(A.ME, n.id) &&
              (h = null);
          },
        }));
    },
  },
]);
//# sourceMappingURL=1f96d2f93ddc3744cfb9.js.map
