"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25343"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    316496: function (e, n, t) {
      t.d(n, {
        S: function () {
          return i;
        },
      });
      let l = (0, t(818083).B)({
        kind: "user",
        id: "2025-01_updated_activity_privacy_controls",
        label: "Enables the rtc popout and updated settings page",
        defaultConfig: { rtcPopoutEnabled: !1, updatedSettingsPageEnabled: !1 },
        treatments: [
          {
            id: 1,
            label: "RTC Popout",
            config: { rtcPopoutEnabled: !0, updatedSettingsPageEnabled: !1 },
          },
          {
            id: 2,
            label: "Updated Settings Page",
            config: { rtcPopoutEnabled: !1, updatedSettingsPageEnabled: !0 },
          },
          {
            id: 3,
            label: "Both Popout and Settings Page",
            config: { rtcPopoutEnabled: !0, updatedSettingsPageEnabled: !0 },
          },
        ],
      });
      function i(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !0 });
      }
    },
    570928: function (e, n, t) {
      var l,
        i,
        r,
        a,
        u = t(200651),
        o = t(192379),
        d = t(120356),
        E = t.n(d),
        _ = t(971139);
      class c extends (a = o.PureComponent) {
        render() {
          let {
            tag: e,
            children: n,
            hoverText: t,
            className: l,
            forceHover: i,
            ...r
          } = this.props;
          return (0, u.jsxs)("div", {
            ...r,
            className: E()(l, _.hoverRoll, {
              [_.disabled]: null == t,
              [_.forceHover]: i,
            }),
            children: [
              (0, u.jsx)(e, { className: _.hovered, children: t }),
              (0, u.jsx)(e, { className: _.default, children: n }),
            ],
          });
        }
      }
      (r = { tag: "div", forceHover: !1 }),
        (i = "defaultProps") in (l = c)
          ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = r),
        (n.Z = c);
    },
    358230: function (e, n, t) {
      t.d(n, {
        T: function () {
          return C;
        },
        Z: function () {
          return s;
        },
      }),
        t(653041);
      var l = t(192379),
        i = t(442837),
        r = t(734307),
        a = t(854444),
        u = t(131704),
        o = t(680089),
        d = t(888369),
        E = t(944486),
        _ = t(981631),
        c = t(647086);
      function s(e) {
        let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = arguments.length > 2 ? arguments[2] : void 0;
        return T(
          e === c._ || e === _.I_8
            ? (0, a.t)()
            : r.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
          {
            currentVoiceChannelId: E.Z.getVoiceChannelId(),
            selectedChannelId: E.Z.getChannelId(),
          },
          { withVoiceChannels: n, withCurrentVoiceChannel: t },
          l,
        );
      }
      function C(e, n, t) {
        let { withVoiceChannels: r = !1, withCurrentVoiceChannel: a = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          u = arguments.length > 4 ? arguments[4] : void 0,
          _ = (0, i.e7)([d.default], () => d.default.getGuildChangeSentinel(e)),
          c = (0, i.e7)([o.Z], () => o.Z.version),
          { currentVoiceChannelId: s, selectedChannelId: C } = (0, i.cj)(
            [E.Z],
            () => ({
              currentVoiceChannelId: E.Z.getVoiceChannelId(),
              selectedChannelId: E.Z.getChannelId(),
            }),
          );
        return (0, l.useMemo)(
          () =>
            T(
              n,
              { currentVoiceChannelId: s, selectedChannelId: C },
              { withVoiceChannels: r, withCurrentVoiceChannel: a },
              u,
            ).map((e) => e.id),
          [n, t, _, c],
        );
      }
      function T(e, n) {
        let { currentVoiceChannelId: t, selectedChannelId: l } = n,
          { withVoiceChannels: i, withCurrentVoiceChannel: r } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = arguments.length > 3 ? arguments[3] : void 0,
          o = [];
        return (
          e.forEachShownChannel((e) => {
            ((0, u.r8)(e.type) ||
              (i && (0, u.bw)(e.type)) ||
              (r && (e.id === t || e.id === l))) &&
              o.push(e);
          }, a),
          o
        );
      }
    },
    675999: function (e, n, t) {
      var l, i, r, a;
      t.d(n, {
        PU: function () {
          return u;
        },
        _m: function () {
          return l;
        },
        lr: function () {
          return i;
        },
      }),
        ((r = l || (l = {})).GUILD_TEMPLATES = "guild-templates"),
        (r.CUSTOMIZE_GUILD = "customize-guild"),
        (r.CHANNEL_PROMPT = "channel-prompt"),
        (r.JOIN_GUILD = "join-guild"),
        (r.CREATION_INTENT = "creation-intent"),
        ((a = i || (i = {})).FRIENDS = "FRIENDS"),
        (a.COMMUNITY = "COMMUNITY"),
        (a.CLAN = "CLAN");
      let u = "create-guild";
    },
    214852: function (e, n, t) {
      t.d(n, {
        z: function () {
          return a;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(442837),
        r = t(353926);
      function a(e) {
        let [n, t] = (0, i.Wu)([r.Z], () => [
          r.Z.getAllUserExperimentDescriptors(),
          r.Z.getGuildExperiments(),
        ]);
        l.useEffect(() => {
          e.trigger();
        }, [e, n, t]);
      }
    },
    734307: function (e, n, t) {
      t(47120);
      var l,
        i,
        r,
        a,
        u = t(392711),
        o = t.n(u),
        d = t(442837),
        E = t(570140),
        _ = t(317381),
        c = t(16609),
        s = t(430198),
        C = t(924301),
        T = t(601070),
        I = t(569471),
        h = t(581883),
        A = t(314897),
        S = t(680089),
        L = t(592125),
        g = t(58468),
        f = t(77498),
        N = t(496675),
        p = t(306680),
        P = t(944486),
        R = t(9156),
        D = t(823379),
        U = t(709054),
        O = t(540126),
        Z = t(526761);
      let v = null,
        G = null,
        H = new O.ZP();
      function m() {
        let e = P.Z.getChannelId(),
          n = P.Z.getVoiceChannelId();
        return (v = e), (G = n), H.clear();
      }
      function M(e) {
        let {
          guild: { id: n },
        } = e;
        return H.clearGuildId(n);
      }
      function b(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return H.clearGuildId(n);
      }
      function y(e) {
        let { guildId: n } = e;
        return H.clearGuildId(n);
      }
      function F(e) {
        let { channelId: n } = e;
        return H.nonPositionalChannelIdUpdate(n);
      }
      function w(e) {
        let { channel: n } = e;
        return H.nonPositionalChannelIdUpdate(n.id);
      }
      function V(e) {
        let { id: n } = e;
        return H.nonPositionalChannelIdUpdate(n);
      }
      function x() {
        let e = P.Z.getChannelId(),
          n = P.Z.getVoiceChannelId(),
          t = v !== e || G !== n;
        return (
          !!t &&
          (o()([v, G, e, n])
            .uniq()
            .forEach((e) => {
              null != e && H.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (v = e),
          (G = n),
          !0)
        );
      }
      function B(e) {
        let { id: n } = e,
          t = L.Z.getChannel(n);
        return null == t ? H.clearGuildId(n) : H.clearGuildId(t.guild_id);
      }
      function K(e) {
        let { guildId: n } = e;
        return H.clearGuildId(n);
      }
      function k() {
        return H.updateSubtitles();
      }
      function W(e) {
        let { guildScheduledEvent: n } = e;
        return H.updateSubtitles(n.guild_id);
      }
      class Y extends (l = d.ZP.Store) {
        initialize() {
          this.waitFor(
            T.Z,
            A.default,
            S.Z,
            L.Z,
            g.Z,
            _.ZP,
            f.Z,
            s.Z,
            C.ZP,
            I.Z,
            N.Z,
            p.ZP,
            P.Z,
            R.ZP,
            h.Z,
          );
        }
        getGuild(e, n) {
          var t, l;
          let i = H.getGuild(
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
          let n = H.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = H.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (a = "ChannelListStore"),
        (r = "displayName") in (i = Y)
          ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = a),
        (n.Z = new Y(E.Z, {
          APPLICATION_FETCH_FAIL: k,
          APPLICATION_FETCH_SUCCESS: k,
          APPLICATION_FETCH: k,
          APPLICATIONS_FETCH_FAIL: k,
          APPLICATIONS_FETCH_SUCCESS: k,
          APPLICATIONS_FETCH: k,
          BACKGROUND_SYNC: m,
          BULK_ACK: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              o()(n)
                .map((e) => {
                  var n;
                  return null === (n = L.Z.getChannel(e.channelId)) ||
                    void 0 === n
                    ? void 0
                    : n.guild_id;
                })
                .filter(D.lm)
                .uniq()
                .forEach((e) => {
                  H.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: y,
          CACHE_LOADED_LAZY: m,
          CATEGORY_COLLAPSE_ALL: y,
          CATEGORY_COLLAPSE: B,
          CATEGORY_EXPAND_ALL: y,
          CATEGORY_EXPAND: B,
          CHANNEL_ACK: F,
          CHANNEL_COLLAPSE: function (e) {
            var n;
            let { channelId: t } = e;
            return H.clearGuildId(
              null === (n = L.Z.getChannel(t)) || void 0 === n
                ? void 0
                : n.guild_id,
            );
          },
          CHANNEL_CREATE: b,
          CHANNEL_DELETE: b,
          CHANNEL_LOCAL_ACK: F,
          CHANNEL_MUTE_EXPIRED: y,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: F,
          CHANNEL_SELECT: x,
          CHANNEL_STATUSES: function (e) {
            return H.clearGuildId(e.guildId);
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              o()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                  H.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: k,
          CONNECTION_OPEN: m,
          CURRENT_USER_UPDATE: m,
          DECAY_READ_STATES: m,
          DEV_TOOLS_DESIGN_TOGGLE_SET: m,
          DISABLE_AUTOMATIC_ACK: F,
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { channelId: n } = e;
            return H.nonPositionalChannelIdUpdate(n);
          },
          EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: n } = e;
            return H.updateSubtitles((0, c.j)(n), (0, c.p)(n));
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            k();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: k,
          ENABLE_AUTOMATIC_ACK: F,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: n } = e;
            return H.updateSubtitles(n);
          },
          GAMES_DATABASE_FETCH_FAIL: k,
          GAMES_DATABASE_FETCH: k,
          GAMES_DATABASE_UPDATE: k,
          GUILD_APPLICATIONS_FETCH_SUCCESS: k,
          GUILD_CREATE: M,
          GUILD_DELETE: M,
          GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: n, user: t } = e;
            return A.default.getId() === t.id && H.clearGuildId(n);
          },
          GUILD_MUTE_EXPIRED: y,
          GUILD_ROLE_CREATE: y,
          GUILD_ROLE_DELETE: y,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: y,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: y,
          GUILD_ROLE_UPDATE: y,
          GUILD_SCHEDULED_EVENT_CREATE: W,
          GUILD_SCHEDULED_EVENT_DELETE: W,
          GUILD_SCHEDULED_EVENT_UPDATE: W,
          GUILD_TOGGLE_COLLAPSE_MUTED: y,
          GUILD_UPDATE: M,
          IMPERSONATE_STOP: y,
          IMPERSONATE_UPDATE: y,
          LOAD_CHANNELS: function (e) {
            e.channels.forEach((e) => {
              let { guildId: n } = e;
              return H.clearGuildId(n);
            });
          },
          LOAD_MESSAGES_SUCCESS: F,
          MESSAGE_ACK: F,
          MESSAGE_CREATE: function (e) {
            let { channelId: n } = e;
            return H.nonPositionalChannelIdUpdate(n);
          },
          MESSAGE_DELETE_BULK: F,
          MESSAGE_DELETE: F,
          NOTIFICATION_SETTINGS_UPDATE: m,
          OVERLAY_INITIALIZE: m,
          PASSIVE_UPDATE_V2: function (e) {
            return H.clearGuildId(e.guildId);
          },
          RECOMPUTE_READ_STATES: m,
          RESORT_THREADS: F,
          SET_RECENTLY_ACTIVE_COLLAPSED: m,
          THREAD_CREATE: w,
          THREAD_DELETE: function (e) {
            let { channel: n } = e;
            return H.nonPositionalChannelUpdate(n);
          },
          THREAD_LIST_SYNC: y,
          THREAD_MEMBER_UPDATE: V,
          THREAD_MEMBERS_UPDATE: V,
          THREAD_UPDATE: w,
          TRY_ACK: F,
          UPDATE_CHANNEL_DIMENSIONS: F,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
            let { guildId: n } = e;
            H.updateSubtitles(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: y,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: y,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: n } = e;
            n.forEach((e) => {
              let { guild_id: n } = e;
              return H.clearGuildId(n);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: y,
          USER_GUILD_SETTINGS_GUILD_UPDATE: y,
          USER_SETTINGS_PROTO_UPDATE: function (e) {
            var n;
            let { settings: t } = e;
            if (t.type !== Z.yP.PRELOADED_USER_SETTINGS) return !1;
            let l =
                null === (n = t.proto.guilds) || void 0 === n
                  ? void 0
                  : n.guilds,
              i = !1;
            return (
              null != l &&
                U.default.keys(l).forEach((e) => {
                  null != l[e].guildRecentsDismissedAt &&
                    (i = H.updateRecentsCategory(e) || i);
                }),
              i
            );
          },
          VOICE_CATEGORY_COLLAPSE: K,
          VOICE_CATEGORY_EXPAND: K,
          VOICE_CHANNEL_SELECT: x,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            return H.nonPositionalChannelIdUpdate(e.id);
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: n } = e,
              t = x(),
              l = new Set();
            for (let { channelId: e, oldChannelId: i } of n)
              null != i &&
                !l.has(i) &&
                (H.nonPositionalChannelIdUpdate(i) && (t = !0), l.add(i)),
                null != e &&
                  !l.has(e) &&
                  (H.nonPositionalChannelIdUpdate(e) && (t = !0), l.add(e));
            return t;
          },
          WINDOW_FOCUS: function () {
            return null != v && H.nonPositionalChannelIdUpdate(v);
          },
        }));
    },
    854444: function (e, n, t) {
      t.d(n, {
        o: function () {
          return D;
        },
        t: function () {
          return U;
        },
      }),
        t(47120),
        t(653041);
      var l = t(192379),
        i = t(392711),
        r = t.n(i),
        a = t(524437),
        u = t(317381),
        o = t(853856),
        d = t(846787),
        E = t(924301),
        _ = t(601070),
        c = t(569471),
        s = t(131704),
        C = t(680089),
        T = t(592125),
        I = t(58468),
        h = t(77498),
        A = t(496675),
        S = t(306680),
        L = t(944486),
        g = t(9156),
        f = t(823379),
        N = t(540126),
        p = t(647086),
        P = t(231338);
      let R = [u.ZP, o.Z, E.ZP, _.Z, c.Z, C.Z, T.Z, h.Z, A.Z, S.ZP, L.Z, g.ZP];
      function D() {
        let [e, n] = l.useState(() => U());
        return (
          l.useEffect(() => {
            let e = r().throttle(() => n(U()), 100);
            return (
              R.forEach((n) => n.addChangeListener(e)),
              () => R.forEach((n) => n.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function U() {
        let e = o.Z.getFavoriteChannels(),
          n = g.ZP.isGuildCollapsed(p._),
          t = L.Z.getChannelId(),
          l = T.Z.getChannel(t),
          i = L.Z.getVoiceChannelId(),
          u = [],
          E = {};
        for (let n in e) {
          let t = e[n],
            l = T.Z.getChannel(t.id);
          if (null == l || t.type === a.Dd.CATEGORY) continue;
          let i = (0, d.r)(e, t, l);
          if (null == t.parentId || !(t.parentId in e)) {
            u.push(i);
            continue;
          }
          !(t.parentId in E) && (E[t.parentId] = []), E[t.parentId].push(i);
        }
        function c(t, a) {
          let { isCollapsed: u, isMuted: o } = a;
          return r()(t)
            .map((t) => {
              var d;
              if (!t.isPrivate() && !A.Z.can(P.Pl.VIEW_CHANNEL, t)) return null;
              let E = null != l && (l.id === t.id || i === t.id),
                c = null != l && l.isThread() && l.parent_id === t.id,
                C =
                  null !==
                    (d =
                      E || c || !u
                        ? _.Z.getActiveJoinedRelevantThreadsForParent(
                            t.guild_id,
                            t.id,
                          )
                        : _.Z.getActiveJoinedUnreadThreadsForParent(
                            t.guild_id,
                            t.id,
                          )) && void 0 !== d
                    ? d
                    : {},
                T = (0, N.zR)(t, C, l, i, n),
                h = I.Z.isCollapsed(t.id),
                L = g.ZP.isChannelMuted(t.guild_id, t.id),
                f = {
                  id: t.id,
                  record: t,
                  category: a,
                  position: e[t.id].order,
                  threadIds: T,
                  threadCount: r().size(T),
                  isCollapsed: h,
                  isMuted: L,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, N.Bz)(t, h, !1),
                };
              return E || c || S.ZP.getMentionCount(t.id) > 0
                ? f
                : (n && L) ||
                    (u &&
                      (L ||
                        o ||
                        (0, s.vd)(t.type) ||
                        ((0, s.vc)(t.type) && !1 === S.ZP.hasUnread(t.id))))
                  ? null
                  : f;
            })
            .filter(f.lm)
            .sortBy((e) => {
              let { record: n } = e;
              return n.isGuildVocal() ? n.position + 1e4 : n.position;
            })
            .value();
        }
        let h = null,
          R = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
              return null == h && (h = c(u, this)), h;
            },
          },
          D = r()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
              var n;
              let { id: t, order: l } = e,
                i = o.Z.getCategoryRecord(t),
                r = null !== (n = E[t]) && void 0 !== n ? n : [],
                a = g.ZP.isChannelMuted(p._, t),
                u = C.Z.isCollapsed(t),
                d = null;
              return {
                isMuted: a,
                isCollapsed: u,
                record: i,
                id: t,
                position: l,
                getChannelRecords: () => r,
                getShownChannelIds: () => r.map((e) => e.id),
                getShownChannelAndThreadIds: () => r.map((e) => e.id),
                isEmpty: () => 0 === r.length,
                get channelList() {
                  return null == d && (d = c(r, this)), d;
                },
              };
            })
            .value(),
          U = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          O = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: p._,
          hideMutedChannels: n,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let e = [];
            (e[N.Fq] = 0),
              (e[N.wZ] = 0),
              (e[N.p2] = 0),
              (e[N.PB] = 0),
              (e[N.wd] = R.channelList.length);
            for (let n = 0; n < D.length; n++)
              e[N.wF + n] = Math.max(1, D[n].channelList.length);
            return e;
          },
          isPlaceholderRow: (e, n) =>
            !(e < N.wF) && 0 === n && 0 === D[e - N.wF].channelList.length,
          getCategoryFromSection: (e) => (e === N.wd ? R : D[e - N.wF]),
          getNamedCategoryFromSection: (e) => D[e - N.wF],
          getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
              ? null
              : { category: t, channel: t.channelList[n] };
          },
          getGuildActionSection: () => U,
          getChannelNoticeSection: () => O,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(e) {
            let n = [R, ...D];
            for (let t = 0; t < n.length; t++)
              for (let l = 0; l < n[t].channelList.length; l++)
                if (n[t].channelList[l].id === e)
                  return [{ section: t + N.wd, row: l }];
            return [];
          },
          forEachShownChannel(e) {
            for (let n of [R, ...D])
              for (let t of n.channelList)
                for (let n of (e(t.record), t.threadIds)) {
                  let t = T.Z.getChannel(n);
                  null != t && e(t);
                }
          },
          forEachChannel(e) {
            for (let n of [R, ...D]) for (let t of n.getChannelRecords()) e(t);
          },
          getSlicedChannels: (e) => [[], e, []],
          getChannels: () => [],
        };
      }
    },
    212632: function (e, n, t) {
      t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        u = t(481060),
        o = t(981631),
        d = t(388032),
        E = t(373780),
        _ = t(232186);
      let c = 0,
        s = () => "notification-position-selector-".concat(c++),
        C = (e) => {
          switch (e) {
            case o._vf.TOP_LEFT:
              return d.intl.string(d.t.xlchpa);
            case o._vf.TOP_RIGHT:
              return d.intl.string(d.t["4uHRHB"]);
            case o._vf.BOTTOM_LEFT:
              return d.intl.string(d.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
              return d.intl.string(d.t["M/9V7+"]);
            default:
              return d.intl.string(d.t.AlY4ZW);
          }
        },
        T = [
          o._vf.DISABLED,
          o._vf.TOP_LEFT,
          o._vf.TOP_RIGHT,
          o._vf.BOTTOM_LEFT,
          o._vf.BOTTOM_RIGHT,
        ];
      function I(e) {
        let { position: n, onChange: t } = e,
          [r] = i.useState(() => s()),
          c =
            n === o._vf.DISABLED
              ? d.intl.string(d.t.R6LxVV)
              : d.intl.formatToPlainString(d.t.XXHDMz, { position: C(n) });
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsx)(u.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, l.jsx)("div", {
                className: a()(E.wrapper, {
                  [E.disabledSelected]: n === o._vf.DISABLED,
                }),
                children: T.map((e) =>
                  (0, l.jsxs)(
                    "label",
                    {
                      className: a()({
                        [E.selected]: e === n,
                        [E.disabled]: e === o._vf.DISABLED,
                        [E.topRight]: e === o._vf.TOP_RIGHT,
                        [E.topLeft]: e === o._vf.TOP_LEFT,
                        [E.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                        [E.bottomLeft]: e === o._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        C(e),
                        e === o._vf.DISABLED
                          ? (0, l.jsx)(u.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: E.disabledIcon,
                            })
                          : null,
                        (0, l.jsx)("input", {
                          type: "radio",
                          name: r,
                          value: e,
                          onChange: (n) => t(n, e),
                          className: E.hiddenInput,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, l.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              className: _.marginTop8,
              children: c,
            }),
          ],
        });
      }
      (I.Positions = o._vf), (n.Z = I);
    },
    51596: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return U;
        },
        Cp: function () {
          return O;
        },
        F_: function () {
          return P;
        },
        Se: function () {
          return G;
        },
        tF: function () {
          return v;
        },
        yC: function () {
          return Z;
        },
      }),
        t(757143),
        t(47120);
      var l = t(570140),
        i = t(493683),
        r = t(475179),
        a = t(925549),
        u = t(287734),
        o = t(212819),
        d = t(336197),
        E = t(359110),
        _ = t(769654),
        c = t(131704),
        s = t(592125),
        C = t(283595),
        T = t(944486),
        I = t(914010),
        h = t(626135);
      if (12633 == t.j) var A = t(777754);
      var S = t(823385),
        L = t(981631),
        g = t(176505);
      let f = () => Promise.resolve();
      f = t(346329).playApplication;
      let N = Object.freeze({
          [o.xQ.USER]: o.h8.USER,
          [o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
          [o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
          [o.xQ.GUILD]: o.h8.GUILD,
          [o.xQ.APPLICATION]: o.h8.APPLICATION,
        }),
        p = new RegExp(
          "^"
            .concat(o.xQ.USER, "|")
            .concat(o.xQ.TEXT_CHANNEL, "|")
            .concat(o.xQ.VOICE_CHANNEL, "|\\")
            .concat(o.xQ.GUILD, "|\\")
            .concat(o.xQ.APPLICATION),
        );
      function P(e) {
        var n, t;
        let l;
        let [i, r] =
          ((l = null !== (t = N[(n = e).charAt(0)]) && void 0 !== t ? t : null),
          [n.replace(p, ""), l]);
        return { query: i, queryMode: r };
      }
      function R(e, n) {
        let {
            results: t,
            queryMode: l,
            query: i,
            maxQueryLength: r,
          } = S.Z.getProps(),
          a = I.Z.getGuildId(),
          u = T.Z.getChannelId(a),
          d = t[(0, o.gJ)(o.a8.DOWN, -1, t)],
          E = A.Z.isEmail(i),
          _ = A.Z.isPhoneNumber(i),
          C = A.Z.isUserTagLike(i),
          L = null != u && (0, g.AB)(u),
          f = (e) =>
            null == e
              ? null
              : e.type === o.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          N = {
            current_channel_id: L ? void 0 : u,
            current_channel_static_route: L ? u : void 0,
            current_guild_id: a,
            query_mode: null != l ? l : "GENERAL",
            query_length: i.length,
            max_query_length: r,
            is_email_like: E,
            is_phone_like: _,
            is_username_like: C,
            query: E || _ || C ? null : i,
            top_result_type: f(d),
            top_result_score: null != d ? d.score : null,
            num_results_total: S.Z.getResultTotals(),
            num_results_users: S.Z.getResultTotals(o.h8.USER),
            num_results_text_channels: S.Z.getResultTotals(o.h8.TEXT_CHANNEL),
            num_results_voice_channels: S.Z.getResultTotals(o.h8.VOICE_CHANNEL),
            num_results_guilds: S.Z.getResultTotals(o.h8.GUILD),
            num_results_group_dms: S.Z.getResultTotals(o.h8.GROUP_DM),
          };
        if (null != u) {
          let e = s.Z.getChannel(u);
          N.current_channel_type = null != e ? e.type : null;
        }
        if (null != n) {
          let { type: e, score: l, record: i } = n;
          switch (
            ((N.selected_type = f(n)),
            (N.selected_score = l),
            (N.selected_index = t.indexOf(n)),
            e)
          ) {
            case o.h8.GUILD:
              N.selected_guild_id = i.id;
              break;
            case o.h8.TEXT_CHANNEL:
            case o.h8.VOICE_CHANNEL:
              i instanceof c.Sf &&
                (N.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                (N.selected_channel_id = i.id);
              break;
            case o.h8.GROUP_DM:
              N.selected_channel_id = i.id;
              break;
            case o.h8.USER:
              N.selected_user_id = i.id;
          }
        }
        h.default.track(e, N);
      }
      function D() {
        l.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function U() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let n;
          if (S.Z.isOpen()) return;
          let t = I.Z.getGuildId(),
            l = T.Z.getChannelId(t);
          if (null != l) {
            let e = s.Z.getChannel(l);
            n = null != e ? e.type : null;
          }
          h.default.track(L.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: t,
            current_channel_id: l,
            current_channel_type: n,
          });
        })(e),
          l.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...P(n) });
      }
      function O() {
        R(L.rMx.QUICKSWITCHER_CLOSED), D();
      }
      function Z(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...P(e) });
      }
      function v(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function G(e) {
        let n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        D(), R(L.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: c, record: T } = e,
          I = { page: L.ZY5.QUICK_SWITCHER };
        switch (c) {
          case o.h8.GUILD:
            (0, _.X)(T.id, { navigationReplace: !0 });
            break;
          case o.h8.TEXT_CHANNEL:
            null != (n = s.Z.getChannel(T.id)) &&
              (0, E.Kh)(n.id, {
                state: { analyticsSource: I },
                navigationReplace: !0,
              });
            break;
          case o.h8.VOICE_CHANNEL:
            null != (n = s.Z.getChannel(T.id)) &&
              (t
                ? r.Z.updateChatOpen(T.id, !0)
                : u.default.selectVoiceChannel(T.id),
              (0, E.Kh)(n.id, {
                state: { analyticsSource: I },
                navigationReplace: !0,
              }));
            break;
          case o.h8.USER:
            i.Z.openPrivateChannel([T.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(L.ME, s.Z.getDMFromUserId(T.id));
            break;
          case o.h8.GROUP_DM:
            (0, E.Kh)(T.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(L.ME, T.id);
            break;
          case o.h8.APPLICATION:
            let h = C.Z.getActiveLibraryApplication(T.id);
            f(T.id, h, {
              analyticsParams: {
                source: L.Sbl.QUICK_SWITCHER,
                location: L.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case o.h8.LINK:
            (0, d.Z)(T.path, { navigationReplace: !0 });
            break;
          case o.h8.IN_APP_NAVIGATION:
            (0, d.Z)(T.path, { navigationReplace: !0 });
        }
        l.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    774343: function (e, n, t) {
      var l,
        i,
        r,
        a,
        u,
        o,
        d,
        E = t(442837),
        _ = t(570140),
        c = t(592125),
        s = t(896797),
        C = t(430824),
        T = t(944486),
        I = t(55589),
        h = t(981631);
      let A = (null !==
        (o =
          null === (u = window) || void 0 === u
            ? void 0
            : null === (a = u.location) || void 0 === a
              ? void 0
              : a.pathname) && void 0 !== o
        ? o
        : ""
      ).startsWith(h.Z5c.ACTIVITIES)
        ? h.Z5c.ACTIVITIES
        : null;
      function S(e) {
        let { link: n } = e;
        if (A === n) return !1;
        A = n;
      }
      class L extends (d = E.ZP.Store) {
        initialize() {
          this.waitFor(s.Z, I.Z, T.Z, C.Z, c.Z);
        }
        getHomeLink() {
          return null != A ? A : s.Z.fallbackRoute;
        }
      }
      (r = "AppViewStore"),
        (i = "displayName") in (l = L)
          ? Object.defineProperty(l, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = r),
        (n.Z = new L(_.Z, {
          OVERLAY_INITIALIZE: function () {
            let e = I.Z.getPrivateChannelIds(),
              n = T.Z.getChannelId(h.ME);
            (null != n || null != e[0]) &&
              (A = h.Z5c.CHANNEL(h.ME, null != n ? n : e[0]));
          },
          APP_VIEW_SET_HOME_LINK: S,
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            S({ link: n.pathname, type: "APP_VIEW_SET_HOME_LINK" });
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == A || !A.startsWith(h.Z5c.APPLICATION_STORE)) return !1;
            A = h.Z5c.APPLICATION_STORE;
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
              let e = h.Z5c.CHANNEL(h.ME, t);
              if (e !== A) return (A = e), !0;
            }
            return !1;
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id &&
              null != n.id &&
              null != A &&
              A === h.Z5c.CHANNEL(h.ME, n.id) &&
              (A = null);
          },
        }));
    },
    460562: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(331595);
      function r(e) {
        let {
          width: n = 32,
          height: t = 32,
          color: r = "currentColor",
          ...a
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.Z)(a),
          width: n,
          height: t,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, l.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: r }),
            (0, l.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: r,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=efd70ee1547491ccf629.js.map
