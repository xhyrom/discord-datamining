"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99617"],
  {
    138715: function (e) {
      e.exports = "/assets/04e2c9489e75f5614205.svg";
    },
    979770: function (e) {
      e.exports = "/assets/7ff5a96a1c84092e629e.svg";
    },
    502801: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        }),
        t(653041),
        t(47120);
      var i = t(735250),
        l = t(470079),
        a = t(120356),
        E = t.n(a),
        r = t(442837),
        o = t(952265),
        d = t(481060),
        _ = t(493683),
        u = t(700582),
        s = t(100527),
        c = t(906732),
        C = t(933557),
        S = t(471445),
        A = t(734307),
        T = t(359110),
        I = t(814443),
        L = t(210887),
        D = t(131704),
        N = t(699516),
        h = t(944486),
        U = t(914010),
        R = t(594174),
        P = t(186523),
        f = t(553826),
        g = t(823379),
        O = t(407316),
        G = t(937784),
        m = t(689938),
        H = t(844478),
        Z = t(138715),
        v = t(979770);
      function p(e) {
        let { channel: n, ChannelIcon: t, selected: l, onClick: a } = e,
          E = (0, C.ZP)(n);
        return (0, i.jsxs)(d.Clickable, {
          className: H.channelRow,
          onClick: () => a(n.id),
          children: [
            l
              ? (0, i.jsx)(f.Z, { className: H.radioIcon })
              : (0, i.jsx)(P.Z, { className: H.radioIcon }),
            (0, i.jsx)(t, {
              className: H.icon,
              size: "xs",
              color: "currentColor",
            }),
            (0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              children: E,
            }),
          ],
        });
      }
      function M(e) {
        let { guildId: n, selectedChannelId: t, onSelectChannelId: a } = e,
          o = (0, r.e7)([h.Z], () => h.Z.getChannelId()),
          { guildChannels: _ } = (0, r.cj)([A.Z], () =>
            A.Z.getGuildWithoutChangingGuildActionRows(n),
          ),
          u = l.useMemo(() => {
            let e = [];
            return (
              _.forEachChannel((n) => {
                !1 !== (0, O.W)(n.id) &&
                  ((0, D.r8)(n.type) || (0, D.bw)(n.type)) &&
                  e.push(n);
              }),
              e.sort((e, n) => (e.id === o ? -1 : n.id === o ? 1 : 0))
            );
          }, [_, o]);
        return 0 === u.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: E()(H.divider, H.bottomDivider),
                }),
                (0, i.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  className: H.contentPadding,
                  children: m.Z.Messages.CLIP_SHARE_SELECT_CHANNEL,
                }),
                (0, i.jsx)(d.List, {
                  sections: [u.length],
                  sectionHeight: 0,
                  renderRow: (e) => {
                    let { section: n, row: l } = e;
                    if (n > 0) return null;
                    let E = u[l],
                      r = (0, S.KS)(E);
                    return null == r
                      ? null
                      : (0, i.jsx)(
                          p,
                          {
                            channel: E,
                            ChannelIcon: r,
                            selected: t === E.id,
                            onClick: a,
                          },
                          E.id,
                        );
                  },
                  rowHeight: (e, n) => (e > 0 ? 0 : null != u[n] ? 56 : 0),
                  renderSection: () => null,
                  className: E()(H.channelList, H.contentPadding),
                  fade: !0,
                }),
              ],
            });
      }
      function x(e) {
        let { friends: n, searchQuery: t, disabled: a, onShareClip: o } = e,
          _ = l.useMemo(
            () =>
              0 === t.length
                ? n
                : n.filter((e) =>
                    e.username.toLowerCase().includes(t.toLowerCase()),
                  ),
            [n, t],
          ),
          s = (0, r.e7)([L.Z], () => L.Z.theme);
        return 0 === _.length
          ? (0, i.jsxs)(d.EmptyState, {
              theme: s,
              className: H.emptyStateContainer,
              children: [
                (0, i.jsx)(d.EmptyStateImage, {
                  width: 415,
                  height: 75,
                  lightSrc: v,
                  darkSrc: Z,
                }),
                (0, i.jsx)(d.EmptyStateText, {
                  note: m.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND,
                }),
              ],
            })
          : (0, i.jsx)(d.List, {
              sections: [_.length],
              sectionHeight: 0,
              renderRow: (e) => {
                let { section: n, row: t } = e;
                if (n > 0) return null;
                let l = _[t],
                  E = _[t].username;
                return (0, i.jsxs)(
                  "div",
                  {
                    className: H.userRow,
                    children: [
                      (0, i.jsx)(u.Z, { user: l }),
                      (0, i.jsx)(d.Text, {
                        className: H.username,
                        variant: "text-md/normal",
                        children: E,
                      }),
                      (0, i.jsx)(d.Button, {
                        disabled: a,
                        onClick: () => o(l.id),
                        className: H.__invalid_friendShareButton,
                        look: d.ButtonLooks.OUTLINED,
                        size: d.ButtonSizes.SMALL,
                        color: d.ButtonColors.BRAND,
                        children: (0, i.jsx)(d.Text, {
                          variant: "text-sm/medium",
                          children: m.Z.Messages.SHARE,
                        }),
                      }),
                    ],
                  },
                  l.id,
                );
              },
              rowHeight: (e, n) => (e > 0 ? 0 : null != _[n] ? 52 : 0),
              renderSection: () => null,
              className: E()(H.friendsList, H.contentPadding),
              fade: !0,
            });
      }
      function b(e) {
        let { clip: n, editMetadata: t, transitionState: a, onClose: u } = e,
          [C, S] = l.useState(""),
          [A, L] = l.useState(!1),
          [D, h] = l.useState(null),
          P = (0, r.Wu)([N.Z], () => N.Z.getFriendIDs()),
          f = (0, r.Wu)(
            [I.Z, R.default],
            () =>
              P.map((e) => R.default.getUser(e))
                .filter(g.lm)
                .sort((e, n) => {
                  var t, i, l, a;
                  return (
                    (null !==
                      (l =
                        null === (t = I.Z.getUserAffinity(n.id)) || void 0 === t
                          ? void 0
                          : t.affinity) && void 0 !== l
                      ? l
                      : 0) -
                    (null !==
                      (a =
                        null === (i = I.Z.getUserAffinity(e.id)) || void 0 === i
                          ? void 0
                          : i.affinity) && void 0 !== a
                      ? a
                      : 0)
                  );
                }),
            [P],
          ),
          O = (0, r.e7)([U.Z], () => U.Z.getGuildId()),
          { analyticsLocations: Z } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
        async function v(e) {
          let i = null != e ? e : D;
          if (null != i) {
            L(!0);
            try {
              await (0, G.e)(n, {
                channelId: i,
                editMetadata: t,
                analyticsLocations: Z,
              }),
                null == e && (0, T.Kh)(i),
                o.pT();
            } catch (e) {
            } finally {
              L(!1);
            }
          }
        }
        async function p(e) {
          let n = await _.Z.openPrivateChannel(e);
          await v(n);
        }
        return (0, i.jsxs)(d.ModalRoot, {
          size: d.ModalSize.SMALL,
          transitionState: a,
          children: [
            (0, i.jsx)(d.Heading, {
              className: E()(H.title, H.contentPadding),
              variant: "heading-lg/semibold",
              color: "interactive-active",
              children: m.Z.Messages.CLIP_SHARE_MODAL_TITLE,
            }),
            (0, i.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-normal",
              className: E()(H.subtitle, H.contentPadding),
              children: m.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE,
            }),
            (0, i.jsx)(d.SearchBar, {
              className: H.searchBar,
              query: C,
              onChange: S,
              size: d.SearchBar.Sizes.MEDIUM,
              onClear: function () {
                S("");
              },
              placeholder: m.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
            }),
            (0, i.jsx)("div", { className: E()(H.divider, H.topDivider) }),
            (0, i.jsx)(x, {
              searchQuery: C,
              friends: f,
              onShareClip: p,
              disabled: A,
            }),
            null != O &&
              (0, i.jsx)(M, {
                guildId: O,
                selectedChannelId: D,
                onSelectChannelId: h,
              }),
            (0, i.jsxs)(d.ModalFooter, {
              children: [
                (0, i.jsx)(d.Button, {
                  disabled: null == D,
                  submitting: A,
                  color: d.Button.Colors.BRAND,
                  onClick: () => v(),
                  children: m.Z.Messages.CLIPS_EDIT_SHARE_CLIP,
                }),
                (0, i.jsx)(d.Button, {
                  submitting: A,
                  look: d.ButtonLooks.LINK,
                  onClick: u,
                  color: d.ButtonColors.PRIMARY,
                  children: m.Z.Messages.BACK,
                }),
              ],
            }),
          ],
        });
      }
    },
    734307: function (e, n, t) {
      t(47120);
      var i,
        l,
        a,
        E,
        r = t(392711),
        o = t.n(r),
        d = t(442837),
        _ = t(570140),
        u = t(317381),
        s = t(430198),
        c = t(924301),
        C = t(601070),
        S = t(569471),
        A = t(581883),
        T = t(314897),
        I = t(680089),
        L = t(592125),
        D = t(58468),
        N = t(77498),
        h = t(496675),
        U = t(306680),
        R = t(944486),
        P = t(9156),
        f = t(823379),
        g = t(709054),
        O = t(540126),
        G = t(526761);
      let m = null,
        H = null,
        Z = new O.ZP();
      function v() {
        let e = R.Z.getChannelId(),
          n = R.Z.getVoiceChannelId();
        return (m = e), (H = n), Z.clear();
      }
      function p(e) {
        let {
          guild: { id: n },
        } = e;
        return Z.clearGuildId(n);
      }
      function M(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return Z.clearGuildId(n);
      }
      function x(e) {
        let { guildId: n } = e;
        return Z.clearGuildId(n);
      }
      function b(e) {
        let { channelId: n } = e;
        return Z.nonPositionalChannelIdUpdate(n);
      }
      function B() {
        return null != m && Z.nonPositionalChannelIdUpdate(m);
      }
      function w(e) {
        let { channel: n } = e;
        return Z.nonPositionalChannelIdUpdate(n.id);
      }
      function j(e) {
        let { id: n } = e;
        return Z.nonPositionalChannelIdUpdate(n);
      }
      function F() {
        let e = R.Z.getChannelId(),
          n = R.Z.getVoiceChannelId(),
          t = m !== e || H !== n;
        return (
          !!t &&
          (o()([m, H, e, n])
            .uniq()
            .forEach((e) => {
              null != e && Z.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (m = e),
          (H = n),
          !0)
        );
      }
      function y(e) {
        let { id: n } = e,
          t = L.Z.getChannel(n);
        return null == t ? Z.clearGuildId(n) : Z.clearGuildId(t.guild_id);
      }
      function V(e) {
        let { guildId: n } = e;
        return Z.clearGuildId(n);
      }
      function Y() {
        return Z.updateSubtitles();
      }
      function k(e) {
        let { guildScheduledEvent: n } = e;
        return Z.updateSubtitles(n.guild_id);
      }
      class K extends (i = d.ZP.Store) {
        initialize() {
          this.waitFor(
            C.Z,
            T.default,
            I.Z,
            L.Z,
            D.Z,
            u.ZP,
            N.Z,
            s.Z,
            c.ZP,
            S.Z,
            h.Z,
            U.ZP,
            R.Z,
            P.ZP,
            A.Z,
          );
        }
        getGuild(e, n) {
          var t, i;
          let l = Z.getGuild(
            e,
            null !== (t = null == n ? void 0 : n.guildActionRows) &&
              void 0 !== t
              ? t
              : [],
            null !== (i = null == n ? void 0 : n.channelNoticeRows) &&
              void 0 !== i
              ? i
              : [],
          );
          return { guildChannelsVersion: l.version, guildChannels: l };
        }
        getGuildWithoutChangingGuildActionRows(e) {
          let n = Z.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = Z.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (E = "ChannelListStore"),
        (a = "displayName") in (l = K)
          ? Object.defineProperty(l, a, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = E),
        (n.Z = new K(_.Z, {
          APPLICATION_FETCH_FAIL: Y,
          APPLICATION_FETCH_SUCCESS: Y,
          APPLICATION_FETCH: Y,
          APPLICATIONS_FETCH_FAIL: Y,
          APPLICATIONS_FETCH_SUCCESS: Y,
          APPLICATIONS_FETCH: Y,
          BACKGROUND_SYNC: v,
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
                .filter(f.lm)
                .uniq()
                .forEach((e) => {
                  Z.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: x,
          CACHE_LOADED_LAZY: v,
          CATEGORY_COLLAPSE_ALL: x,
          CATEGORY_COLLAPSE: y,
          CATEGORY_EXPAND_ALL: x,
          CATEGORY_EXPAND: y,
          CHANNEL_ACK: b,
          CHANNEL_COLLAPSE: function (e) {
            var n;
            let { channelId: t } = e;
            return Z.clearGuildId(
              null === (n = L.Z.getChannel(t)) || void 0 === n
                ? void 0
                : n.guild_id,
            );
          },
          CHANNEL_CREATE: M,
          CHANNEL_DELETE: M,
          CHANNEL_LOCAL_ACK: b,
          CHANNEL_MUTE_EXPIRED: x,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: b,
          CHANNEL_SELECT: F,
          CHANNEL_STATUSES: function (e) {
            return Z.clearGuildId(e.guildId);
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              o()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                  Z.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: Y,
          CONNECTION_OPEN: v,
          CURRENT_USER_UPDATE: v,
          DECAY_READ_STATES: v,
          DEV_TOOLS_DESIGN_TOGGLE_SET: v,
          DISABLE_AUTOMATIC_ACK: b,
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { channelId: n } = e;
            return Z.nonPositionalChannelIdUpdate(n);
          },
          DRAWER_CLOSE: B,
          DRAWER_OPEN: B,
          EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: n } = e;
            return Z.updateSubtitles(n.guild_id, n.channel_id);
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            Y();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
          ENABLE_AUTOMATIC_ACK: b,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: n } = e;
            return Z.updateSubtitles(n);
          },
          GAMES_DATABASE_FETCH_FAIL: Y,
          GAMES_DATABASE_FETCH: Y,
          GAMES_DATABASE_UPDATE: Y,
          GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
          GUILD_CREATE: p,
          GUILD_DELETE: p,
          GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: n, user: t } = e;
            return T.default.getId() === t.id && Z.clearGuildId(n);
          },
          GUILD_MUTE_EXPIRED: x,
          GUILD_ROLE_CREATE: x,
          GUILD_ROLE_DELETE: x,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: x,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: x,
          GUILD_ROLE_UPDATE: x,
          GUILD_SCHEDULED_EVENT_CREATE: k,
          GUILD_SCHEDULED_EVENT_DELETE: k,
          GUILD_SCHEDULED_EVENT_UPDATE: k,
          GUILD_TOGGLE_COLLAPSE_MUTED: x,
          GUILD_UPDATE: p,
          IMPERSONATE_STOP: x,
          IMPERSONATE_UPDATE: x,
          LOAD_CHANNELS: function (e) {
            e.channels.forEach((e) => {
              let { guildId: n } = e;
              return Z.clearGuildId(n);
            });
          },
          LOAD_MESSAGES_SUCCESS: b,
          MESSAGE_ACK: b,
          MESSAGE_CREATE: function (e) {
            let { channelId: n } = e;
            return Z.nonPositionalChannelIdUpdate(n);
          },
          MESSAGE_DELETE_BULK: b,
          MESSAGE_DELETE: b,
          NOTIFICATION_SETTINGS_UPDATE: v,
          OVERLAY_INITIALIZE: v,
          PASSIVE_UPDATE_V2: function (e) {
            return Z.clearGuildId(e.guildId);
          },
          RECOMPUTE_READ_STATES: v,
          RESORT_THREADS: b,
          SET_RECENTLY_ACTIVE_COLLAPSED: v,
          THREAD_CREATE: w,
          THREAD_DELETE: function (e) {
            let { channel: n } = e;
            return Z.nonPositionalChannelUpdate(n);
          },
          THREAD_LIST_SYNC: x,
          THREAD_MEMBER_UPDATE: j,
          THREAD_MEMBERS_UPDATE: j,
          THREAD_UPDATE: w,
          TRY_ACK: b,
          UPDATE_CHANNEL_DIMENSIONS: b,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
            let { guildId: n } = e;
            Z.updateSubtitles(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: x,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: x,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: n } = e;
            n.forEach((e) => {
              let { guild_id: n } = e;
              return Z.clearGuildId(n);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: x,
          USER_GUILD_SETTINGS_GUILD_UPDATE: x,
          USER_SETTINGS_PROTO_UPDATE: function (e) {
            var n;
            let { settings: t } = e;
            if (t.type !== G.yP.PRELOADED_USER_SETTINGS) return !1;
            let i =
                null === (n = t.proto.guilds) || void 0 === n
                  ? void 0
                  : n.guilds,
              l = !1;
            return (
              null != i &&
                g.default.keys(i).forEach((e) => {
                  null != i[e].guildRecentsDismissedAt &&
                    (l = Z.updateRecentsCategory(e) || l);
                }),
              l
            );
          },
          VOICE_CATEGORY_COLLAPSE: V,
          VOICE_CATEGORY_EXPAND: V,
          VOICE_CHANNEL_SELECT: F,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            return Z.nonPositionalChannelIdUpdate(e.id);
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: n } = e,
              t = F(),
              i = new Set();
            for (let { channelId: e, oldChannelId: l } of n)
              null != l &&
                !i.has(l) &&
                (Z.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)),
                null != e &&
                  !i.has(e) &&
                  (Z.nonPositionalChannelIdUpdate(e) && (t = !0), i.add(e));
            return t;
          },
          WINDOW_FOCUS: B,
        }));
    },
    844478: function (e, n, t) {
      e.exports = {
        contentPadding: "contentPadding_b89a4c",
        title: "title_b89a4c",
        subtitle: "subtitle_b89a4c",
        searchBar: "searchBar_b89a4c",
        friendsList: "friendsList_b89a4c",
        channelList: "channelList_b89a4c",
        userRow: "userRow_b89a4c",
        username: "username_b89a4c",
        radioIcon: "radioIcon_b89a4c",
        channelRow: "channelRow_b89a4c",
        icon: "icon_b89a4c",
        divider: "divider_b89a4c",
        bottomDivider: "bottomDivider_b89a4c",
        topDivider: "topDivider_b89a4c",
        emptyStateContainer: "emptyStateContainer_b89a4c",
      };
    },
  },
]);
//# sourceMappingURL=68ea6f1c460596427b8d.js.map
