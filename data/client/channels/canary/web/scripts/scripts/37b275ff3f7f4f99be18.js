"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99617"],
  {
    138715: function (n) {
      n.exports = "/assets/04e2c9489e75f5614205.svg";
    },
    979770: function (n) {
      n.exports = "/assets/7ff5a96a1c84092e629e.svg";
    },
    502801: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return M;
          },
        }),
        t(653041),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(120356),
        r = t.n(a),
        E = t(442837),
        o = t(952265),
        d = t(481060),
        u = t(493683),
        _ = t(700582),
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
        P = t(594174),
        f = t(186523),
        R = t(553826),
        g = t(823379),
        G = t(407316),
        O = t(937784),
        m = t(388032),
        v = t(598599),
        p = t(138715),
        H = t(979770);
      function Z(n) {
        let { channel: e, ChannelIcon: t, selected: l, onClick: a } = n,
          r = (0, C.ZP)(e);
        return (0, i.jsxs)(d.Clickable, {
          className: v.channelRow,
          onClick: () => a(e.id),
          children: [
            l
              ? (0, i.jsx)(R.Z, { className: v.radioIcon })
              : (0, i.jsx)(f.Z, { className: v.radioIcon }),
            (0, i.jsx)(t, {
              className: v.icon,
              size: "xs",
              color: "currentColor",
            }),
            (0, i.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              children: r,
            }),
          ],
        });
      }
      function x(n) {
        let { guildId: e, selectedChannelId: t, onSelectChannelId: a } = n,
          o = (0, E.e7)([h.Z], () => h.Z.getChannelId()),
          { guildChannels: u } = (0, E.cj)([A.Z], () =>
            A.Z.getGuildWithoutChangingGuildActionRows(e),
          ),
          _ = l.useMemo(() => {
            let n = [];
            return (
              u.forEachChannel((e) => {
                !1 !== (0, G.W)(e.id) &&
                  ((0, D.r8)(e.type) || (0, D.bw)(e.type)) &&
                  n.push(e);
              }),
              n.sort((n, e) => (n.id === o ? -1 : e.id === o ? 1 : 0))
            );
          }, [u, o]);
        return 0 === _.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: r()(v.divider, v.bottomDivider),
                }),
                (0, i.jsx)(d.Text, {
                  variant: "eyebrow",
                  color: "interactive-normal",
                  className: v.contentPadding,
                  children: m.intl.string(m.t.SOtDeX),
                }),
                (0, i.jsx)(d.List, {
                  sections: [_.length],
                  sectionHeight: 0,
                  renderRow: (n) => {
                    let { section: e, row: l } = n;
                    if (e > 0) return null;
                    let r = _[l],
                      E = (0, S.KS)(r);
                    return null == E
                      ? null
                      : (0, i.jsx)(
                          Z,
                          {
                            channel: r,
                            ChannelIcon: E,
                            selected: t === r.id,
                            onClick: a,
                          },
                          r.id,
                        );
                  },
                  rowHeight: (n, e) => (n > 0 ? 0 : null != _[e] ? 56 : 0),
                  renderSection: () => null,
                  className: r()(v.channelList, v.contentPadding),
                  fade: !0,
                }),
              ],
            });
      }
      function b(n) {
        let { friends: e, searchQuery: t, disabled: a, onShareClip: o } = n,
          u = l.useMemo(
            () =>
              0 === t.length
                ? e
                : e.filter((n) =>
                    n.username.toLowerCase().includes(t.toLowerCase()),
                  ),
            [e, t],
          ),
          s = (0, E.e7)([L.Z], () => L.Z.theme);
        return 0 === u.length
          ? (0, i.jsxs)(d.EmptyState, {
              theme: s,
              className: v.emptyStateContainer,
              children: [
                (0, i.jsx)(d.EmptyStateImage, {
                  width: 415,
                  height: 75,
                  lightSrc: H,
                  darkSrc: p,
                }),
                (0, i.jsx)(d.EmptyStateText, {
                  note: m.intl.string(m.t["+Zg0lZ"]),
                }),
              ],
            })
          : (0, i.jsx)(d.List, {
              sections: [u.length],
              sectionHeight: 0,
              renderRow: (n) => {
                let { section: e, row: t } = n;
                if (e > 0) return null;
                let l = u[t],
                  r = u[t].username;
                return (0, i.jsxs)(
                  "div",
                  {
                    className: v.userRow,
                    children: [
                      (0, i.jsx)(_.Z, { user: l }),
                      (0, i.jsx)(d.Text, {
                        className: v.username,
                        variant: "text-md/normal",
                        children: r,
                      }),
                      (0, i.jsx)(d.Button, {
                        disabled: a,
                        onClick: () => o(l.id),
                        className: v.__invalid_friendShareButton,
                        look: d.ButtonLooks.OUTLINED,
                        size: d.ButtonSizes.SMALL,
                        color: d.ButtonColors.BRAND,
                        children: (0, i.jsx)(d.Text, {
                          variant: "text-sm/medium",
                          children: m.intl.string(m.t.RDE0SU),
                        }),
                      }),
                    ],
                  },
                  l.id,
                );
              },
              rowHeight: (n, e) => (n > 0 ? 0 : null != u[e] ? 52 : 0),
              renderSection: () => null,
              className: r()(v.friendsList, v.contentPadding),
              fade: !0,
            });
      }
      function M(n) {
        let { clip: e, editMetadata: t, transitionState: a, onClose: _ } = n,
          [C, S] = l.useState(""),
          [A, L] = l.useState(!1),
          [D, h] = l.useState(null),
          f = (0, E.Wu)([N.Z], () => N.Z.getFriendIDs()),
          R = (0, E.Wu)(
            [I.Z, P.default],
            () =>
              f
                .map((n) => P.default.getUser(n))
                .filter(g.lm)
                .sort((n, e) => {
                  var t, i, l, a;
                  return (
                    (null !==
                      (l =
                        null === (t = I.Z.getUserAffinity(e.id)) || void 0 === t
                          ? void 0
                          : t.affinity) && void 0 !== l
                      ? l
                      : 0) -
                    (null !==
                      (a =
                        null === (i = I.Z.getUserAffinity(n.id)) || void 0 === i
                          ? void 0
                          : i.affinity) && void 0 !== a
                      ? a
                      : 0)
                  );
                }),
            [f],
          ),
          G = (0, E.e7)([U.Z], () => U.Z.getGuildId()),
          { analyticsLocations: p } = (0, c.ZP)(s.Z.CLIPS_SHARE_MODAL);
        async function H(n) {
          let i = null != n ? n : D;
          if (null != i) {
            L(!0);
            try {
              await (0, O.e)(e, {
                channelId: i,
                editMetadata: t,
                analyticsLocations: p,
              }),
                null == n && (0, T.Kh)(i),
                o.pT();
            } catch (n) {
            } finally {
              L(!1);
            }
          }
        }
        async function Z(n) {
          let e = await u.Z.openPrivateChannel(n);
          await H(e);
        }
        return (0, i.jsxs)(d.ModalRoot, {
          size: d.ModalSize.SMALL,
          transitionState: a,
          children: [
            (0, i.jsx)(d.Heading, {
              className: r()(v.title, v.contentPadding),
              variant: "heading-lg/semibold",
              color: "interactive-active",
              children: m.intl.string(m.t["6EcIlJ"]),
            }),
            (0, i.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-normal",
              className: r()(v.subtitle, v.contentPadding),
              children: m.intl.string(m.t.Ey7mOT),
            }),
            (0, i.jsx)(d.SearchBar, {
              className: v.searchBar,
              query: C,
              onChange: S,
              size: d.SearchBar.Sizes.MEDIUM,
              onClear: function () {
                S("");
              },
              placeholder: m.intl.string(m.t.CmSHY2),
            }),
            (0, i.jsx)("div", { className: r()(v.divider, v.topDivider) }),
            (0, i.jsx)(b, {
              searchQuery: C,
              friends: R,
              onShareClip: Z,
              disabled: A,
            }),
            null != G &&
              (0, i.jsx)(x, {
                guildId: G,
                selectedChannelId: D,
                onSelectChannelId: h,
              }),
            (0, i.jsxs)(d.ModalFooter, {
              children: [
                (0, i.jsx)(d.Button, {
                  disabled: null == D,
                  submitting: A,
                  color: d.Button.Colors.BRAND,
                  onClick: () => H(),
                  children: m.intl.string(m.t.I8lglZ),
                }),
                (0, i.jsx)(d.Button, {
                  submitting: A,
                  look: d.ButtonLooks.LINK,
                  onClick: _,
                  color: d.ButtonColors.PRIMARY,
                  children: m.intl.string(m.t["13/7kZ"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    734307: function (n, e, t) {
      t(47120);
      var i,
        l,
        a,
        r,
        E = t(392711),
        o = t.n(E),
        d = t(442837),
        u = t(570140),
        _ = t(317381),
        s = t(16609),
        c = t(430198),
        C = t(924301),
        S = t(601070),
        A = t(569471),
        T = t(581883),
        I = t(314897),
        L = t(680089),
        D = t(592125),
        N = t(58468),
        h = t(77498),
        U = t(496675),
        P = t(306680),
        f = t(944486),
        R = t(9156),
        g = t(823379),
        G = t(709054),
        O = t(540126),
        m = t(526761);
      let v = null,
        p = null,
        H = new O.ZP();
      function Z() {
        let n = f.Z.getChannelId(),
          e = f.Z.getVoiceChannelId();
        return (v = n), (p = e), H.clear();
      }
      function x(n) {
        let {
          guild: { id: e },
        } = n;
        return H.clearGuildId(e);
      }
      function b(n) {
        let {
          channel: { guild_id: e },
        } = n;
        return H.clearGuildId(e);
      }
      function M(n) {
        let { guildId: e } = n;
        return H.clearGuildId(e);
      }
      function B(n) {
        let { channelId: e } = n;
        return H.nonPositionalChannelIdUpdate(e);
      }
      function j(n) {
        let { channel: e } = n;
        return H.nonPositionalChannelIdUpdate(e.id);
      }
      function w(n) {
        let { id: e } = n;
        return H.nonPositionalChannelIdUpdate(e);
      }
      function y() {
        let n = f.Z.getChannelId(),
          e = f.Z.getVoiceChannelId(),
          t = v !== n || p !== e;
        return (
          !!t &&
          (o()([v, p, n, e])
            .uniq()
            .forEach((n) => {
              null != n && H.nonPositionalChannelIdUpdate(n) && (t = !0);
            }),
          (v = n),
          (p = e),
          !0)
        );
      }
      function F(n) {
        let { id: e } = n,
          t = D.Z.getChannel(e);
        return null == t ? H.clearGuildId(e) : H.clearGuildId(t.guild_id);
      }
      function V(n) {
        let { guildId: e } = n;
        return H.clearGuildId(e);
      }
      function Y() {
        return H.updateSubtitles();
      }
      function k(n) {
        let { guildScheduledEvent: e } = n;
        return H.updateSubtitles(e.guild_id);
      }
      class K extends (i = d.ZP.Store) {
        initialize() {
          this.waitFor(
            S.Z,
            I.default,
            L.Z,
            D.Z,
            N.Z,
            _.ZP,
            h.Z,
            c.Z,
            C.ZP,
            A.Z,
            U.Z,
            P.ZP,
            f.Z,
            R.ZP,
            T.Z,
          );
        }
        getGuild(n, e) {
          var t, i;
          let l = H.getGuild(
            n,
            null !== (t = null == e ? void 0 : e.guildActionRows) &&
              void 0 !== t
              ? t
              : [],
            null !== (i = null == e ? void 0 : e.channelNoticeRows) &&
              void 0 !== i
              ? i
              : [],
          );
          return { guildChannelsVersion: l.version, guildChannels: l };
        }
        getGuildWithoutChangingGuildActionRows(n) {
          let e = H.getGuildChannelRowsOnly(n);
          return { guildChannelsVersion: e.version, guildChannels: e };
        }
        recentsChannelCount(n) {
          if (null == n) return 0;
          let e = H.getGuildChannelRowsOnly(n);
          return e
            .getCategoryFromSection(e.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (r = "ChannelListStore"),
        (a = "displayName") in (l = K)
          ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[a] = r),
        (e.Z = new K(u.Z, {
          APPLICATION_FETCH_FAIL: Y,
          APPLICATION_FETCH_SUCCESS: Y,
          APPLICATION_FETCH: Y,
          APPLICATIONS_FETCH_FAIL: Y,
          APPLICATIONS_FETCH_SUCCESS: Y,
          APPLICATIONS_FETCH: Y,
          BACKGROUND_SYNC: Z,
          BULK_ACK: function (n) {
            let { channels: e } = n,
              t = !1;
            return (
              o()(e)
                .map((n) => {
                  var e;
                  return null === (e = D.Z.getChannel(n.channelId)) ||
                    void 0 === e
                    ? void 0
                    : e.guild_id;
                })
                .filter(g.lm)
                .uniq()
                .forEach((n) => {
                  H.clearGuildId(n) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: M,
          CACHE_LOADED_LAZY: Z,
          CATEGORY_COLLAPSE_ALL: M,
          CATEGORY_COLLAPSE: F,
          CATEGORY_EXPAND_ALL: M,
          CATEGORY_EXPAND: F,
          CHANNEL_ACK: B,
          CHANNEL_COLLAPSE: function (n) {
            var e;
            let { channelId: t } = n;
            return H.clearGuildId(
              null === (e = D.Z.getChannel(t)) || void 0 === e
                ? void 0
                : e.guild_id,
            );
          },
          CHANNEL_CREATE: b,
          CHANNEL_DELETE: b,
          CHANNEL_LOCAL_ACK: B,
          CHANNEL_MUTE_EXPIRED: M,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: B,
          CHANNEL_SELECT: y,
          CHANNEL_STATUSES: function (n) {
            return H.clearGuildId(n.guildId);
          },
          CHANNEL_UPDATES: function (n) {
            let { channels: e } = n,
              t = !1;
            return (
              o()(e)
                .map((n) => n.guild_id)
                .uniq()
                .forEach((n) => {
                  H.clearGuildId(n) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: Y,
          CONNECTION_OPEN: Z,
          CURRENT_USER_UPDATE: Z,
          DECAY_READ_STATES: Z,
          DEV_TOOLS_DESIGN_TOGGLE_SET: Z,
          DISABLE_AUTOMATIC_ACK: B,
          DISMISS_FAVORITE_SUGGESTION: function (n) {
            let { channelId: e } = n;
            return H.nonPositionalChannelIdUpdate(e);
          },
          EMBEDDED_ACTIVITY_UPDATE_V2: function (n) {
            let { location: e } = n;
            return H.updateSubtitles((0, s.j)(e), (0, s.p)(e));
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (n) {
            Y();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
          ENABLE_AUTOMATIC_ACK: B,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (n) {
            let { guildId: e } = n;
            return H.updateSubtitles(e);
          },
          GAMES_DATABASE_FETCH_FAIL: Y,
          GAMES_DATABASE_FETCH: Y,
          GAMES_DATABASE_UPDATE: Y,
          GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
          GUILD_CREATE: x,
          GUILD_DELETE: x,
          GUILD_MEMBER_UPDATE: function (n) {
            let { guildId: e, user: t } = n;
            return I.default.getId() === t.id && H.clearGuildId(e);
          },
          GUILD_MUTE_EXPIRED: M,
          GUILD_ROLE_CREATE: M,
          GUILD_ROLE_DELETE: M,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
          GUILD_ROLE_UPDATE: M,
          GUILD_SCHEDULED_EVENT_CREATE: k,
          GUILD_SCHEDULED_EVENT_DELETE: k,
          GUILD_SCHEDULED_EVENT_UPDATE: k,
          GUILD_TOGGLE_COLLAPSE_MUTED: M,
          GUILD_UPDATE: x,
          IMPERSONATE_STOP: M,
          IMPERSONATE_UPDATE: M,
          LOAD_CHANNELS: function (n) {
            n.channels.forEach((n) => {
              let { guildId: e } = n;
              return H.clearGuildId(e);
            });
          },
          LOAD_MESSAGES_SUCCESS: B,
          MESSAGE_ACK: B,
          MESSAGE_CREATE: function (n) {
            let { channelId: e } = n;
            return H.nonPositionalChannelIdUpdate(e);
          },
          MESSAGE_DELETE_BULK: B,
          MESSAGE_DELETE: B,
          NOTIFICATION_SETTINGS_UPDATE: Z,
          OVERLAY_INITIALIZE: Z,
          PASSIVE_UPDATE_V2: function (n) {
            return H.clearGuildId(n.guildId);
          },
          RECOMPUTE_READ_STATES: Z,
          RESORT_THREADS: B,
          SET_RECENTLY_ACTIVE_COLLAPSED: Z,
          THREAD_CREATE: j,
          THREAD_DELETE: function (n) {
            let { channel: e } = n;
            return H.nonPositionalChannelUpdate(e);
          },
          THREAD_LIST_SYNC: M,
          THREAD_MEMBER_UPDATE: w,
          THREAD_MEMBERS_UPDATE: w,
          THREAD_UPDATE: j,
          TRY_ACK: B,
          UPDATE_CHANNEL_DIMENSIONS: B,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (n) {
            let { guildId: e } = n;
            H.updateSubtitles(e);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (n) {
            let { userGuildSettings: e } = n;
            e.forEach((n) => {
              let { guild_id: e } = n;
              return H.clearGuildId(e);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
          USER_GUILD_SETTINGS_GUILD_UPDATE: M,
          USER_SETTINGS_PROTO_UPDATE: function (n) {
            var e;
            let { settings: t } = n;
            if (t.type !== m.yP.PRELOADED_USER_SETTINGS) return !1;
            let i =
                null === (e = t.proto.guilds) || void 0 === e
                  ? void 0
                  : e.guilds,
              l = !1;
            return (
              null != i &&
                G.default.keys(i).forEach((n) => {
                  null != i[n].guildRecentsDismissedAt &&
                    (l = H.updateRecentsCategory(n) || l);
                }),
              l
            );
          },
          VOICE_CATEGORY_COLLAPSE: V,
          VOICE_CATEGORY_EXPAND: V,
          VOICE_CHANNEL_SELECT: y,
          VOICE_CHANNEL_STATUS_UPDATE: function (n) {
            return H.nonPositionalChannelIdUpdate(n.id);
          },
          VOICE_STATE_UPDATES: function (n) {
            let { voiceStates: e } = n,
              t = y(),
              i = new Set();
            for (let { channelId: n, oldChannelId: l } of e)
              null != l &&
                !i.has(l) &&
                (H.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)),
                null != n &&
                  !i.has(n) &&
                  (H.nonPositionalChannelIdUpdate(n) && (t = !0), i.add(n));
            return t;
          },
          WINDOW_FOCUS: function () {
            return null != v && H.nonPositionalChannelIdUpdate(v);
          },
        }));
    },
    598599: function (n, e, t) {
      n.exports = {
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
//# sourceMappingURL=37b275ff3f7f4f99be18.js.map
