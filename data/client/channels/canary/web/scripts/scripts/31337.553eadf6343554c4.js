"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31337"],
  {
    368662(e, t, n) {
      n.r(t), n.d(t, { default: () => r, messagesLoader: () => l });
      let { createLoader: i } = n(919523),
        l = i({ "en-US": () => n.e("62972").then(n.bind(n, 387575)) }, "en-US"),
        { makeMessagesProxy: a } = n(919523),
        r = a(l);
    },
    100544(e, t, n) {
      n.d(t, {
        CT: () => o,
        W6: () => s,
        WM: () => c,
        XY: () => d,
        g6: () => r,
        j_: () => u,
      });
      var i,
        l,
        a,
        r =
          (((i = {}).INACTIVE = "inactive"),
          (i.BACKGROUND = "background"),
          (i.ACTIVE = "active"),
          i),
        s =
          (((l = {}).INVITE = "invite"),
          (l.GUILD_TEMPLATE = "guild-template"),
          (l.CHANNEL = "channel"),
          (l.GIFT_CODE = "gift-code"),
          (l.MESSAGE = "message"),
          (l.OAUTH2_AUTHORIZE = "oauth2-authorize"),
          (l.ONE_TIME_LOGIN = "one-time-login"),
          (l.APP_DIRECTORY_PROFILE = "app-directory-profile"),
          (l.PROMOTIONS = "promotions"),
          (l.FEATURE_PROMO_URL = "promo-url"),
          (l.NONE = "none"),
          (l.REMOTE_AUTH = "remote-auth"),
          (l.USER_PROFILE = "user-profile"),
          (l.BUILD_OVERRIDE = "build-override"),
          (l.CONTACT_SYNC = "contact-sync"),
          (l.ADD_FRIENDS = "add-friends"),
          (l.COMPOSE_MESSAGE = "compose-message"),
          (l.GUILD_EVENT_DETAILS = "guild-event-details"),
          (l.FRIENDS = "friends"),
          (l.EDIT_PROFILE = "edit-profile"),
          (l.MOBILE_WEB_HANDOFF = "mobile-web-handoff"),
          (l.USER_CONNECTIONS_CALLBACK = "user-connections-callback"),
          (l.VOICE_CHANNEL = "voice-channel"),
          (l.GUILD_HOME = "guild-home"),
          (l.USER_CONNECTIONS_LINK_CALLBACK = "user-connections-link-callback"),
          (l.SESSION_MANAGEMENT = "session-management"),
          (l.CONNECTIONS = "connections"),
          (l.GUILD_SETTINGS = "guild-settings"),
          (l.GUILD_SETTINGS_PICKER = "guild-settings-picker"),
          (l.ACTIVATE_DEVICE = "activate-device"),
          (l.FAMILY_CENTER = "family-center"),
          (l.SHARE = "share"),
          (l.CREATE_VOICE_INVITE = "create_voice_invite"),
          (l.SEND_VOICE_HANGOUT_WAVE = "send_voice_hangout_wave"),
          (l.ACCOUNT_STANDING = "account-standing"),
          (l.MOBILE_NATIVE_UPDATE = "mobile-native-update"),
          (l.SHOP = "shop"),
          (l.MOBILE_WEB_REDIRECT_CHECKOUT = "mobile-web-redirect-checkout"),
          (l.AUTHORIZED_APPS = "authorized-apps"),
          (l.DAVE_PROTOCOL_VERIFICATION = "dave-protocol-verification"),
          (l.ICYMI = "icymi"),
          (l.QUESTS = "quests"),
          (l.GIFT = "gift"),
          (l.NITRO_HOME = "store"),
          (l.ACTIVITY = "activity"),
          (l.CONNECTED_GAMES = "connected-games"),
          (l.BOOST_MARKETING = "boost-marketing"),
          (l.BOOST_SETTINGS = "boost-settings"),
          (l.QUEST_PREVIEW_TOOL = "quest-preview-tool"),
          (l.SUBSCRIPTION_SETTINGS = "subscription-settings"),
          (l.GAME_UPDATE = "game-update"),
          l);
      let o = "CacheStoreLazy",
        d = "CacheStoreChannelsLazy",
        u = "CacheStore";
      var c =
        (((a = {}).NONE = "none"),
        (a.SLIDE_UP = "slide-up"),
        (a.SLIDE_IN = "slide-in"),
        (a.SLIDE_OUT = "slide-out"),
        (a.SLIDE_IN_OUT = "slide-in-out"),
        (a.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse"),
        (a.FADE = "fade"),
        a);
      Object.freeze({ START: { x: 0, y: 0 }, END: { x: 1, y: 0 } }),
        Object.freeze({ START: { x: 0, y: 0 }, END: { x: 0, y: 1 } });
    },
    49229(e, t, n) {
      n.d(t, { A: () => m });
      var i = n(636537),
        l = n(765178),
        a = n(228366),
        r = n(315982),
        s = n(395484),
        o = n(700241),
        d = n(381689),
        u = n(30076),
        c = n(287809),
        h = n(395422),
        E = n(427262),
        A = n(157559),
        _ = n(442433),
        p = n(652215),
        g = n(235627),
        f = n(985018);
      function I(e) {
        (0, _.Z_)(), A.A.show(e);
      }
      function S(e, t, n) {
        let { status: i, body: l } = e,
          a = l && l.code;
        switch (i) {
          case 429:
            0 === t &&
              I({
                title: f.intl.string(f.t["3D5eox"]),
                body: f.intl.string(f.t.TuJriJ),
                confirmText: f.intl.string(f.t.DppXIx),
              });
            break;
          case 403:
            if (a === p.t02.EMAIL_VERIFICATION_REQUIRED) {
              I({
                title: f.intl.string(f.t.Gqf33E),
                body: f.intl.string(f.t.GHOBdx),
                confirmText: f.intl.string(f.t.HbTSE6),
                onConfirm: () => {
                  r.R();
                },
              });
              break;
            }
          default:
            if (a === p.t02.USER_QUARANTINED) (0, _.Z_)(), (0, o.default)();
            else if ((0, u.O)(i, a)) break;
            else if (a === p.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
            else if (0 === t) {
              let e =
                null != n ? (0, h.vU)(a || 0, n) : f.intl.string(f.t.paDJBM);
              I({
                title: f.intl.string(f.t["6moJ8s"]),
                body: e,
                confirmText: f.intl.string(f.t.BddRzS),
              });
            }
        }
        throw e;
      }
      let T = {
          sendRequest(e) {
            let {
                discordTag: t,
                context: n,
                captchaPayload: l,
                note: a,
                errorUxConfig: r = 0,
              } = e,
              [s, o] = t.split("#");
            return i.Bo.post({
              url: p.Rsh.USER_RELATIONSHIPS(),
              body: { username: s, discriminator: parseInt(o), note: a, ...l },
              context: n,
              oldFormErrors: !0,
              rejectWithError: !1,
            }).catch((e) => {
              S(e, r, t);
            });
          },
          addRelationship(e, t) {
            let {
                userId: n,
                context: l,
                type: a,
                fromFriendSuggestion: r,
                confirmStrangerRequest: s,
                captchaPayload: o,
              } = e,
              d =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              u = c.default.getUser(n);
            return i.Bo.put({
              url: p.Rsh.USER_RELATIONSHIP(n),
              body: {
                type: a,
                from_friend_suggestion: r,
                confirm_stranger_request: s,
                ...o,
              },
              context: l,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
              .then(() => {
                t?.();
              })
              .catch((e) => (S(e, d, E.Ay.getUserTag(u)), Promise.reject(e)));
          },
          acceptFriendRequest: (e) =>
            T.addRelationship(e, function () {
              l.O.announce(f.intl.string(f.t["3goNa5"]));
            }),
          cancelFriendRequest: (e, t) =>
            T.removeRelationship(e, t, function () {
              l.O.announce(f.intl.string(f.t.pLUaxR));
            }),
          removeFriend(e, t) {
            T.removeRelationship(e, t, function () {
              l.O.announce(f.intl.string(f.t.vGSLa2));
            });
          },
          blockUser: (e, t) =>
            T.addRelationship(
              { userId: e, context: t, type: p.eA$.BLOCKED },
              function () {
                l.O.announce(f.intl.string(f.t.mU0Vrp));
              },
            ),
          unblockUser: (e, t) =>
            T.removeRelationship(e, t, function () {
              l.O.announce(f.intl.string(f.t["9t1au7"]));
            }),
          removeRelationship: (e, t, n) =>
            i.Bo.del({
              url: p.Rsh.USER_RELATIONSHIP(e),
              context: t,
              oldFormErrors: !0,
              rejectWithError: !1,
            })
              .then(() => {
                n?.();
              })
              .catch(() => {
                l.O.announce(f.intl.string(f.t.n6Jo3E));
              }),
          updateRelationship: (e, t) =>
            i.Bo.patch({
              url: p.Rsh.USER_RELATIONSHIP(e),
              body: { nickname: t },
              rejectWithError: !1,
            }),
          fetchRelationships() {
            i.Bo.get({
              url: p.Rsh.USER_RELATIONSHIPS(),
              oldFormErrors: !0,
              rejectWithError: !0,
            }).then(
              (e) =>
                a.h.dispatch({
                  type: "LOAD_RELATIONSHIPS_SUCCESS",
                  relationships: e.body,
                }),
              () => a.h.dispatch({ type: "LOAD_RELATIONSHIPS_FAILURE" }),
            );
          },
          confirmClearPendingRelationships(e) {
            (0, s.A)(e);
          },
          clearPendingRelationships: () =>
            i.Bo.del({
              url: p.Rsh.USER_RELATIONSHIPS(),
              query: { relationship_type: p.eA$.PENDING_INCOMING },
              rejectWithError: !1,
            })
              .then(() => {
                a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
              })
              .catch(() => {
                l.O.announce(f.intl.string(f.t.n6Jo3E));
              }),
          clearPendingSpamAndIgnored: () =>
            i.Bo.del({
              url: p.Rsh.USER_RELATIONSHIPS(),
              query: { relationship_type: p.eA$.PENDING_INCOMING },
              body: { filters: [g.w.SPAM, g.w.IGNORED] },
              rejectWithError: !1,
            })
              .then(() => {
                a.h.dispatch({ type: "RELATIONSHIP_PENDING_INCOMING_REMOVED" });
              })
              .catch(() => {
                l.O.announce(f.intl.string(f.t.n6Jo3E));
              }),
          ignoreUser: (e, t, n) =>
            i.Bo.put({
              url: p.Rsh.IGNORE_USER(e),
              context: { location: t },
              rejectWithError: !1,
            })
              .then(() => {
                d.A.showIgnoreSuccessToast(e, n),
                  l.O.announce(f.intl.string(f.t.Us93Ca)),
                  a.h.dispatch({
                    type: "RELATIONSHIP_IGNORE_USER_SUCCESS",
                    userId: e,
                    timestamp: Date.now(),
                  });
              })
              .catch(() => {
                d.A.showFailedToast(), l.O.announce(f.intl.string(f.t.n6Jo3E));
              }),
          unignoreUser: (e, t, n) =>
            i.Bo.del({
              url: p.Rsh.IGNORE_USER(e),
              context: { location: t },
              rejectWithError: !1,
            })
              .then(() => {
                d.A.showUnignoreSuccessToast(e, n),
                  l.O.announce(f.intl.string(f.t.QlH5w6));
              })
              .catch(() => {
                d.A.showFailedToast(), l.O.announce(f.intl.string(f.t.n6Jo3E));
              }),
        },
        m = T;
    },
    143991(e, t, n) {
      n.d(t, { A: () => V });
      var i = n(627968),
        l = n(64700),
        a = n(17928),
        r = n(933958),
        s = n(969151),
        o = n(91242),
        d = n(643501),
        u = n(652896),
        c = n(400492),
        h = n(105530),
        E = n(95701),
        A = n(616356),
        _ = n(495544),
        p = n(734057),
        g = n(71393),
        f = n(51760),
        I = n(803224),
        S = n(763827),
        T = n(309010),
        m = n(485296),
        C = n(977997),
        O = n(607567),
        N = n(403362),
        y = n(652215);
      function R(e, t, n, i) {
        l.useEffect(() => {
          let l = t(),
            r = new a.ru(e, () => {
              let e = t(),
                a = n(l, e);
              null == a || I.A.isSoundDisabled(a) || (0, c.Ak)(a, i ?? 0.4),
                (l = e);
            });
          return r.attach("useSound"), () => r.detach();
        });
      }
      function L() {
        return (
          R(
            [f.Ay, T.A],
            () => ({
              inVoiceChannel: null != T.A.getVoiceChannelId(),
              selfMute: f.Ay.isSelfMute(),
              selfDeaf: f.Ay.isSelfDeaf(),
              audioPermissionReady: f.Ay.isNativeAudioPermissionReady(),
              shouldSkipMuteUnmuteSound: f.Ay.shouldSkipMuteUnmuteSound(),
            }),
            (e, t) => {
              let {
                inVoiceChannel: n,
                selfMute: i,
                selfDeaf: l,
                audioPermissionReady: a,
                shouldSkipMuteUnmuteSound: r,
              } = t;
              if (e.selfDeaf !== l) return l ? "deafen" : "undeafen";
              if (a && (n || e.audioPermissionReady) && e.selfMute !== i)
                return r
                  ? void f.Ay.notifyMuteUnmuteSoundWasSkipped()
                  : i
                    ? "mute"
                    : "unmute";
            },
          ),
          null
        );
      }
      function v() {
        return (
          R(
            [f.Ay, T.A],
            () => ({
              videoEnabled: f.Ay.isVideoEnabled(),
              inVoiceChannel: null != T.A.getVoiceChannelId(),
            }),
            (e, t) => {
              let { videoEnabled: n, inVoiceChannel: i } = t,
                { videoEnabled: l, inVoiceChannel: a } = e;
              if (l !== n && a && i) return n ? "camera_on" : "camera_off";
            },
          ),
          null
        );
      }
      function D() {
        return (
          R(
            [p.A, S.A, T.A, d.default],
            () => {
              let e = p.A.getChannel(T.A.getVoiceChannelId()),
                t = e?.type,
                n = e?.getGuildId(),
                i = S.A.getWasEverRtcConnected(),
                l = S.A.getState();
              return {
                channelType: t,
                guildId: n,
                connected: l === y.S7L.RTC_CONNECTED,
                connectHasStarted:
                  (!i && l !== y.S7L.DISCONNECTED) || l === y.S7L.RTC_CONNECTED,
                awaitingRemote:
                  null != d.default.getAwaitingRemoteSessionInfo(),
                connectedRemote: null != d.default.getRemoteSessionId(),
              };
            },
            (e, t) => {
              let {
                  channelType: n,
                  connected: i,
                  connectHasStarted: l,
                  awaitingRemote: a,
                  connectedRemote: r,
                } = t,
                s = e.channelType,
                o = e.connectedRemote,
                d = e.connected;
              if ((!e.connectHasStarted && l) || (r && !o)) {
                if (null != n && E.Do.has(n)) return;
                return "user_join";
              }
              if (d && !i) {
                if (a || r || (null != s && E.Do.has(s))) return;
                return "disconnect";
              }
            },
          ),
          null
        );
      }
      function U() {
        return (
          R(
            [m.A],
            () => m.A.isCurrentUserPTTActive(),
            (e, t) => {
              if (e !== t) {
                let e = f.Ay.isSelfMute();
                if (f.Ay.getMode() === y.TBI.PUSH_TO_TALK && !e)
                  return t ? "ptt_start" : "ptt_stop";
              }
            },
          ),
          null
        );
      }
      function P() {
        return (
          R(
            [f.Ay],
            () => f.Ay.isSelfMutedTemporarily(),
            (e, t) => {
              if (e !== t) {
                let e = f.Ay.isSelfMute();
                if (f.Ay.getMode() === y.TBI.VOICE_ACTIVITY && !e)
                  return t ? "ptt_stop" : "ptt_start";
              }
            },
          ),
          null
        );
      }
      function b() {
        return (
          R(
            [m.A],
            () => m.A.isCurrentUserPrioritySpeaker(),
            (e, t) => {
              if (e !== t) {
                let e = f.Ay.isSelfMute();
                if (f.Ay.getMode() === y.TBI.VOICE_ACTIVITY && !e)
                  return t ? "ptt_start" : "ptt_stop";
              }
            },
          ),
          null
        );
      }
      function M() {
        return (
          R(
            [C.A],
            () => C.A.userHasBeenMovedVersion,
            (e, t) => {
              if (e !== t) return "user_moved";
            },
          ),
          null
        );
      }
      function w() {
        return (
          R(
            [T.A, C.A],
            () => {
              let e = T.A.getVoiceChannelId();
              if (null == e) return h.zF.NONE;
              let t = C.A.getVoiceStateForChannel(e);
              return (0, h.eY)(t);
            },
            (e, t) => {
              if (
                e !== t &&
                t === h.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
              )
                return "reconnect";
            },
          ),
          null
        );
      }
      function G() {
        return (
          R(
            [T.A, A.A, _.default, C.A, p.A],
            () => {
              let e,
                t,
                n = T.A.getVoiceChannelId(),
                i = _.default.getId(),
                l = [],
                a = null,
                r = 0,
                s = A.A.getAllActiveStreams();
              if (null != n) {
                let i = p.A.getChannel(n);
                null != i &&
                  ((e = i.type),
                  (t =
                    O.Ay.countVoiceStatesForChannel(i.id) -
                    !!C.A.isInChannel(i.id)),
                  (l = A.A.getAllApplicationStreamsForChannel(i.id).map(
                    (e) => e.ownerId,
                  )));
              }
              let o = null;
              return (
                (o = 1 === s.length ? s[0] : A.A.getCurrentUserActiveStream()),
                o?.state === y.XYD.CONNECTING && (o = null),
                null != o &&
                  ((a = (0, u._z)(o)),
                  (r = A.A.getViewerIds(a).filter((e) => e !== i).length)),
                {
                  channelType: e,
                  voiceChannelId: n,
                  voiceChannelUserCount: t,
                  streamingUserIds: l,
                  singleActiveStreamKey: a,
                  singleActiveStreamViewerCount: r,
                  currentUserId: i,
                  allActiveStreams: s,
                }
              );
            },
            (e, t) => {
              let {
                channelType: n,
                voiceChannelId: i,
                voiceChannelUserCount: l,
                streamingUserIds: a,
                singleActiveStreamKey: r,
                singleActiveStreamViewerCount: s,
                currentUserId: o,
              } = t;
              if (
                e.voiceChannelId !== i ||
                null == i ||
                (function (e) {
                  let t = p.A.getChannel(e);
                  if (null == t) return !1;
                  let n = t.getGuildId();
                  if (null == n) return !1;
                  let i = g.A.getGuild(n);
                  return null != i && i.afkChannelId === t.id;
                })(i) ||
                (null != n && E.Do.has(n))
              )
                return;
              let d = null != r && e.singleActiveStreamKey === r,
                u = a.some((t) => !e.streamingUserIds.includes(t)),
                c = e.allActiveStreams.map((e) => e.ownerId),
                h = e.streamingUserIds.some(
                  (e) => !a.includes(e) && (e === o || c.includes(e)),
                );
              if (u) return "stream_started";
              if (h) return "stream_ended";
              if (
                e.singleActiveStreamViewerCount <= 25 &&
                d &&
                s > e.singleActiveStreamViewerCount
              )
                return "stream_user_joined";
              if (
                null != e.voiceChannelUserCount &&
                null != l &&
                e.voiceChannelUserCount <= 25 &&
                l > e.voiceChannelUserCount
              )
                return "user_join";
              if (
                null != e.voiceChannelUserCount &&
                null != l &&
                e.voiceChannelUserCount <= 25 &&
                l < e.voiceChannelUserCount
              )
                return "user_leave";
              else if (
                e.singleActiveStreamViewerCount <= 25 &&
                d &&
                s < e.singleActiveStreamViewerCount
              )
                return "stream_user_left";
            },
          ),
          null
        );
      }
      function F() {
        return (
          R(
            [T.A, r.Ay, o.A, _.default],
            () => {
              let e = T.A.getVoiceChannelId(),
                t = T.A.getChannelId(),
                n = r.Ay.getConnectedActivityLocation(),
                i = (0, s.H)(n),
                l = _.default.getId(),
                a = (0, N.Vq)(t)
                  ? r.Ay.getEmbeddedActivitiesForChannel(t)
                  : r.Am,
                d = (0, N.Vq)(e)
                  ? r.Ay.getEmbeddedActivitiesForChannel(e)
                  : r.Am,
                u = (0, N.Vq)(i)
                  ? r.Ay.getEmbeddedActivitiesForChannel(i)
                  : r.Am,
                c = (0, N.Vq)(n)
                  ? r.Ay.getSelfEmbeddedActivityForLocation(n)
                  : null;
              return {
                connectedActivityLocation: n,
                voiceChannelId: e,
                currentUserId: l,
                channelActivities: a,
                connectedChannelActivities: u,
                userConnectedActivity: c,
                voiceChannelActivities: d,
                connectedFrame: o.A.getConnectedFrame(),
              };
            },
            (e, t) => {
              let n,
                {
                  connectedActivityLocation: i,
                  voiceChannelId: l,
                  currentUserId: a,
                  channelActivities: r,
                  connectedChannelActivities: s,
                  userConnectedActivity: o,
                  voiceChannelActivities: d,
                  connectedFrame: u,
                } = t,
                c = d.some(
                  (e) =>
                    e.applicationId === o?.applicationId &&
                    e.launchId === o.launchId,
                );
              if ((0, N.Vq)(l)) {
                let t = e.voiceChannelActivities.find((e) => e.userIds.has(a)),
                  i = d.find((e) => e.userIds.has(a));
                e.voiceChannelActivities.length < d.length &&
                  (0, N.Vq)(e.voiceChannelId) &&
                  (n = "activity_launch"),
                  void 0 === i && (0, N.Vq)(t) && (n = "activity_end"),
                  void 0 === t &&
                    (0, N.Vq)(i) &&
                    i.userIds.size > 1 &&
                    (n = "activity_user_join"),
                  (0, N.Vq)(i) &&
                    (0, N.Vq)(t) &&
                    (i.userIds.size > t.userIds.size &&
                      (n = "activity_user_join"),
                    i.userIds.size < t.userIds.size &&
                      (n = "activity_user_left"));
              }
              if (!c) {
                e.connectedChannelActivities.length < s.length &&
                  e.channelActivities.length < r.length &&
                  (n = "activity_launch");
                let t = e.userConnectedActivity;
                null == o && (0, N.Vq)(t) && (n = "activity_end"),
                  (0, N.Vq)(o) &&
                    (0, N.Vq)(t) &&
                    (o.userIds.size > t.userIds.size &&
                      (n = "activity_user_join"),
                    o.userIds.size < t.userIds.size &&
                      (n = "activity_user_left"));
              }
              return (
                null == n &&
                  (null != e.connectedActivityLocation || null != i) &&
                  (null == e.connectedActivityLocation && null != i
                    ? (n = "activity_launch")
                    : null != e.connectedActivityLocation && null == i
                      ? (n = "activity_end")
                      : null != o &&
                        null != e.userConnectedActivity &&
                        (e.userConnectedActivity.userIds.size < o.userIds.size
                          ? (n = "activity_user_join")
                          : e.userConnectedActivity.userIds.size >
                              o.userIds.size && (n = "activity_user_leave"))),
                null == n &&
                  (null != e.connectedFrame || null != u) &&
                  (null == e.connectedFrame && null != u
                    ? (n = "activity_launch")
                    : null != e.connectedFrame &&
                      null == u &&
                      (n = "activity_end")),
                n
              );
            },
          ),
          null
        );
      }
      function V() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(L, {}),
            (0, i.jsx)(v, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(b, {}),
          ],
        });
      }
    },
    863610(e, t, n) {
      n.d(t, { U: () => _, n: () => p });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(785651),
        o = n(717421),
        d = n(866323),
        u = n(597619),
        c = n(872293);
      let h = {
          config: { friction: 50, tension: 900, mass: 1 },
          unique: !0,
          initial: { dotPosition: 1 },
          from: { dotPosition: 0 },
          enter: { dotPosition: 1 },
          leave: { dotPosition: 0 },
        },
        E = { config: { duration: 2400 }, from: { dotCycle: 2.8 }, reset: !0 };
      function A(e) {
        let t = e % 2;
        return t > 1 ? 1 - (t - 1) : t;
      }
      let _ = l.memo(function (e) {
          let {
              dotRadius: t,
              dotPosition: n,
              fill: a = "currentColor",
              spacing: r = 2.5,
            } = e,
            { focused: d } = (0, u.xb)(),
            c = l.useRef(!0);
          l.useEffect(() => () => void (c.current = !1), []);
          let [h] = (0, o.z)(
              () => ({
                ...E,
                to: async (e) => {
                  let t = 2.8;
                  for (; c.current; )
                    d
                      ? ((t += 4), await e({ dotCycle: t, immediate: !1 }))
                      : 2.8 !== t
                        ? ((t = 2.8), await e({ dotCycle: t, immediate: !0 }))
                        : await new Promise((e) => setTimeout(e, 1e3));
                },
              }),
              "animate-always",
              [d],
            ),
            _ = (2 * t * 3 + (t / 4) * 2) / 2;
          return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
              let l = 0.25 * e,
                o = t + t * r * e;
              return (0, i.jsx)(
                s.animated.circle,
                {
                  cx: n ? n.to([0, 1], [_, o]) : o,
                  cy: t,
                  r: h.dotCycle
                    .to((e) => A(e - l))
                    .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                    .to((e) => (d ? e : t)),
                  fill: a,
                  style: {
                    opacity: h.dotCycle
                      .to((e) => A(e - l))
                      .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                      .to((e) => (d ? e : 1)),
                  },
                },
                e,
              );
            }),
          });
        }),
        p = l.memo(function (e) {
          let {
              dotRadius: t,
              x: n,
              y: l,
              hide: a = !1,
              themed: o = !1,
              className: E,
              ref: A,
            } = e,
            { focused: p } = (0, u.xb)();
          return (0, d.p)(
            a,
            { ...h, key: (e) => (e ? "true" : "false") },
            p ? "animate-always" : "animate-never",
          )((e, a, d) => {
            let { dotPosition: u } = e,
              { key: h } = d;
            return a
              ? null
              : (0, i.jsx)(
                  "svg",
                  {
                    ref: A,
                    x: n,
                    y: l,
                    width: 2 * t * 3 + (t / 2) * 2,
                    height: 2 * t,
                    className: r()(E, c.r, o ? c.S : null),
                    children: (0, i.jsx)(s.animated.g, {
                      style: {
                        opacity: u.to((e) => Math.min(1, Math.max(e, 0))),
                      },
                      children: (0, i.jsx)(_, { dotRadius: t, dotPosition: u }),
                    }),
                  },
                  h,
                );
          });
        });
    },
    719129(e, t, n) {
      n.d(t, { GH: () => f, Zi: () => A, c1: () => I, r6: () => S });
      var i = n(228366),
        l = n(386406),
        a = n(56562),
        r = n(328153),
        s = n(760751),
        o = n(287809),
        d = n(954571),
        u = n(723702),
        c = n(19575),
        h = n(652215);
      let E = {
        development: [0, 0, 0, 0],
        canary: [1, 0, 30, 10],
        ptb: [1, 0, 1005, 2],
        stable: [1, 0, 9001, 2],
      };
      function A() {
        return !c.Ay?.isModuleVersionAtLeast?.("discord_hook", E);
      }
      let _ = null;
      async function p() {
        if (!(0, u.isWindows)())
          return Promise.reject(Error("Hook is only available on Windows"));
        if (A()) return Promise.reject(Error("Hook module is too old"));
        await c.Ay.ensureModule("discord_hook");
        let e = await c.Ay.requireModule("discord_hook");
        return (
          (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
              n = o.default.getCurrentUser();
            null != n &&
              n.isStaff() &&
              (console.log("Hook: Enabling crash trigger."), (t |= 2)),
              e.setFlags(t);
          })(e),
          e
        );
      }
      async function g() {
        return null != _ ? _ : (_ = await p());
      }
      function f(e, t) {
        return p().then((n) => {
          let o = r.Ay.getGameForPID(e),
            u = o?.name,
            c = null != o ? s.A.findGame(o) : null,
            E = null;
          return new Promise((s) => {
            let o = (e, n) => {
                d.default.track(h.HAw.HOOK_RESULT, {
                  game_name: u,
                  game_id: null == c ? null : c.id,
                  success: n,
                  error: e,
                  ...t,
                }),
                  null != E && (clearTimeout(E), (E = null)),
                  n ? s() : s((e = e ?? "Unknown hook error"));
              },
              A = r.Ay.getOverlayOptionsForPID(e),
              _ = {
                ...a.gH,
                ...A,
                elevate: r.Ay.shouldElevateProcessForPID(e),
              };
            null == _.allowHook || _.allowHook
              ? ((E = setTimeout(() => {
                  n.cancelAttachToProcess(e),
                    o("Timed out waiting for hook response", !1);
                }, 12e4)),
                n.attachToProcess(e, _, o),
                i.h.wait(() => l.A.clearElevatedProcess()))
              : s("Hook is disabled for this game");
          });
        });
      }
      function I(e) {
        return p().then((t) => {
          t.cancelAttachToProcess(e);
        });
      }
      function S() {
        return g()
          .then((e) =>
            null != e.findSteamProcess ? e.findSteamProcess() : null,
          )
          .catch(() => null);
      }
    },
    743445(e, t, n) {
      let i;
      n.d(t, { bK: () => U, jP: () => v });
      var l,
        a = n(735438),
        r = n.n(a),
        s = n(158390),
        o = n(636537),
        d = n(626584),
        u = n(865116),
        c = n(795129),
        h = n(661011),
        E = n(550642),
        A = n(964404),
        _ = n(544180),
        p = n(954571),
        g = n(509929),
        f = n(927813),
        I = n(209489),
        S = n(38405),
        T = n(292348),
        m = n(565150),
        C = n(787458),
        O = n(972711),
        N = n(652215);
      let y = new d.A("CloudUpload.tsx"),
        R = new Set([429]);
      class L extends Error {
        kind;
        phase;
        messageShort;
        constructor(e, t = {}) {
          const { cause: n, response: i } = t,
            l = L.getErrorKind(n ?? Error(`${i?.text ?? "Unknown error"}`), i),
            a =
              "server_error" === l || "client_error" === l
                ? `${e}:${l}:status_${i?.status ?? 0}`
                : `${e}:${l}`;
          super(a, { cause: n }),
            (this.name = "ResumableUploadError"),
            (this.phase = e),
            (this.kind = l),
            (this.messageShort = a);
        }
        static getErrorKind(e, t) {
          let n = t?.status ?? 0,
            i = n >= 500 && n < 600,
            l = R.has(n),
            a =
              e.message.toLowerCase().includes("network") ||
              e.message.toLowerCase().includes("terminated") ||
              e.message.toLowerCase().includes("offline") ||
              e.message.toLowerCase().includes("changed");
          return i
            ? "server_error"
            : l
              ? "client_error"
              : a
                ? "network_error"
                : "unknown";
        }
        static rejectionHandler(e) {
          return (t) => {
            if (t instanceof o.oh) throw new L(e, { response: t });
            if (t instanceof Error) throw new L(e, { cause: t });
            throw new L(e, { cause: Error(String(t)) });
          };
        }
        canRetry() {
          return (
            "server_error" === this.kind ||
            "network_error" === this.kind ||
            "client_error" === this.kind
          );
        }
      }
      var v =
        (((l = {}).NOT_STARTED = "NOT_STARTED"),
        (l.STARTED = "STARTED"),
        (l.UPLOADING = "UPLOADING"),
        (l.ERROR = "ERROR"),
        (l.COMPLETED = "COMPLETED"),
        (l.CANCELED = "CANCELED"),
        (l.REMOVED_FROM_MSG_DRAFT = "REMOVED_FROM_MSG_DRAFT"),
        l);
      class D {
        numUploadAttempts;
        timing = {};
        compressAndExtractDisabled;
        fileAlreadyPrepped;
        imageCompressionQuality;
        videoCompressionQuality;
        imageEncoderType;
        convertedMimeType;
        sourceMediaWidth;
        sourceMediaHeight;
        sourceMediaFormat;
        sourceVideoBitrate;
        sourceVideoFramerate;
        videoDurationMs;
        sourceVideoProfile;
        sourceVideoLevel;
        uploadedImageWidth;
        uploadedImageHeight;
        targetVideoWidth;
        targetVideoHeight;
        targetVideoBitrate;
        targetVideoCodec;
        targetVideoFramerate;
        targetVideoIsHdr;
        hevcIsSupported;
        progressUpdateGranularity;
        psnr;
        ssim;
        origin;
        psnrMeasurementLatencyMs;
        ssimMeasurementLatencyMs;
        uploadResumptionCount = 0;
        uploadResumptionPosition = 0;
        uploadResumptionReason;
        conversionFailureReason;
      }
      i = n(122924).A;
      class U extends m.Ay {
        status = "NOT_STARTED";
        channelId;
        responseUrl;
        responseUrlSetAt;
        currentSize;
        preCompressionSize;
        postCompressionSize;
        loaded = 0;
        reactNativeFileIndex;
        error;
        reactNativeFilePrepped = !1;
        startTime;
        uploadAnalytics = new D();
        uploadAttempts = 0;
        _abortController;
        _xhr;
        _aborted = !1;
        _uploadHttpClient;
        _libdiscoreEnabled;
        static fromJson(e) {
          let { item: t, channelId: n, reactNativeFileIndex: i } = e,
            l = new U(t, n, i);
          return (
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              t.startsWith("_") || (l[t] = n);
            }),
            "COMPLETED" !== l.status && (l.status = "NOT_STARTED"),
            l
          );
        }
        constructor(e, t, n, i) {
          super(e),
            (this.channelId = t),
            (this.preCompressionSize = e.file?.size ?? 0),
            (this.currentSize = e.file?.size ?? 0),
            (this.reactNativeFileIndex = n),
            null != i && (this.allowOptimization = i),
            e.platform === m.xz.WEB &&
              null != e.compressionMetadata &&
              (this.mimeType = e.compressionMetadata.originalContentType),
            (this._abortController = new AbortController()),
            null != this.origin &&
              (this.uploadAnalytics.origin =
                "string" == typeof this.origin
                  ? this.origin
                  : m.Cj[this.origin]),
            (this._uploadHttpClient = new O.nd()),
            (this._libdiscoreEnabled = !1);
        }
        parseRangeHeader(e) {
          let t = e.match(/^bytes=(\d+)-(\d+)(?:\/\d+)?$/);
          return null == t ? null : [parseInt(t[1], 10), parseInt(t[2], 10)];
        }
        createResumeAwareProgressFn = (e) => (t) => {
          let n = t.loaded + e,
            i = t.total + e,
            l = n - this.loaded;
          this.emit("progress", n, i, l), (this.loaded = n);
        };
        retryOpts() {
          return this.item.platform === m.xz.REACT_NATIVE
            ? {
                timeout: +f.A.Millis.HOUR,
                backoff: new s.A(
                  0.5 * f.A.Millis.SECOND,
                  30 * f.A.Millis.MINUTE,
                ),
                retries: 12,
              }
            : { timeout: +f.A.Millis.HOUR, retries: 12, backoff: new s.A() };
        }
        createAttachmentUrlRetryOpts() {
          return this.item.platform === m.xz.REACT_NATIVE
            ? {
                timeout: {
                  response: 30 * f.A.Millis.SECOND,
                  deadline: 30 * f.A.Millis.MINUTE,
                },
                backoff: new s.A(
                  0.5 * f.A.Millis.SECOND,
                  60 * f.A.Millis.SECOND,
                ),
                retries: 8,
              }
            : this.retryOpts();
        }
        supportsResume() {
          return (
            this._libdiscoreEnabled || this.item.platform !== m.xz.REACT_NATIVE
          );
        }
        async uploadFileToCloud() {
          let e, t;
          if (null == this.responseUrl)
            throw Error("_uploadFileToCloud - responseUrl is not set");
          return (
            y.log(
              `Uploading ${this.id}`,
              this.item.platform === m.xz.REACT_NATIVE
                ? `filename=${this.item.filename}, uri=${this.item.uri}`
                : `filename=${this.item.file.name}`,
            ),
            this.item.platform === m.xz.REACT_NATIVE
              ? (t =
                  null !=
                    (e = {
                      type: this.item.mimeType,
                      uri: this.item.uri,
                      name: this.item.filename,
                    }).type && "application/json" !== e.type
                    ? e.type
                    : "application/octet-stream")
              : ((e = this.item.file), (t = "application/octet-stream")),
            (0, O.gd)(this.item) &&
              ((this._uploadHttpClient = new O.gp()),
              (this._libdiscoreEnabled = !0),
              y.log("Using libdiscore client for file upload")),
            await this.uploadFileWithResumption(this.responseUrl, e, t)
          );
        }
        async getResumePosition(e) {
          let t = {
            url: e,
            headers: { "Content-Range": "bytes */*" },
            rejectWithError: !0,
            retries: 0,
            timeout: { deadline: 30 * f.A.Millis.SECOND },
            signal: this._abortController.signal,
          };
          return await this._uploadHttpClient
            .doUpload(t)
            .then((e) =>
              200 === e.status || 201 === e.status
                ? this.currentSize
                : L.rejectionHandler("status_check")(e),
            )
            .catch((e) => {
              if (e instanceof o.oh && 308 === e.status) {
                let t = this.parseRangeHeader(e.headers.range ?? "");
                return null != t ? t[1] + 1 : 0;
              }
              return L.rejectionHandler("status_check")(e);
            });
        }
        async startOrResumeUpload(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (
            (y.log(
              `Attempting to upload attachment with resumeFrom: ${t} and attempts: ${this.uploadAttempts}`,
            ),
            t > 0)
          )
            this.uploadAnalytics.uploadResumptionCount++,
              (e.headers = {
                ...(e.headers ?? {}),
                "Content-Range": `bytes ${t}-${this.currentSize - 1}/${this.currentSize}`,
              });
          else if (null != e.headers) {
            let { "Content-Range": t, ...n } = e.headers;
            e.headers = n;
          }
          e.onRequestProgress = r().throttle(
            this.createResumeAwareProgressFn(t),
            50,
          );
          let n = await this._uploadHttpClient
            .doUpload(e, { fileByteRange: { start: t } })
            .catch(L.rejectionHandler("upload"));
          if (200 !== n.status && 201 !== n.status)
            throw new L("upload", { response: n });
          return n;
        }
        async uploadFileWithResumption(e, t, n) {
          let { timeout: i, backoff: l, retries: a } = this.retryOpts(),
            s = {
              url: e,
              body: t,
              headers: { "Content-Type": n },
              signal: this._abortController.signal,
              onRequestProgress: r().throttle(
                this.createResumeAwareProgressFn(0),
                50,
              ),
              retries: 0,
              rejectWithError: !0,
              timeout: i,
            },
            o = 0;
          for (; this.uploadAttempts <= a && !this._aborted; ) {
            this.uploadAttempts++,
              (this.uploadAnalytics.numUploadAttempts = this.uploadAttempts);
            try {
              let e = this.responseUrl;
              if (
                (await this.ensureFreshResponseUrl(),
                (s.url = this.responseUrl),
                e !== this.responseUrl)
              )
                (o = 0), (this.loaded = 0);
              else if (this.uploadAttempts > 1) {
                let e = await this.trackTime(
                  "resumptionCheckTimeMs",
                  async () => await this.getResumePosition(this.responseUrl),
                );
                (this.uploadAnalytics.uploadResumptionPosition = e),
                  (o = this.supportsResume() ? e : 0),
                  (this.loaded = o);
              }
              return await this.startOrResumeUpload(s, o);
            } catch (e) {
              if (e instanceof L && e.canRetry()) {
                y.warn(
                  `Error uploading ${this.id}: ${e.message}, attempting resumption`,
                ),
                  (this.uploadAnalytics.uploadResumptionReason =
                    e.messageShort),
                  await I.A.awaitOnline();
                let t = l.fail();
                y.log(
                  `Waiting ${t}ms before attachment upload attempt ${this.uploadAttempts + 1}`,
                ),
                  await new Promise((e) => setTimeout(e, t));
              } else
                throw (
                  (y.warn(
                    `Unrecoverable error uploading ${this.id}: ${e.message}`,
                  ),
                  e)
                );
            }
          }
          throw Error(`Upload failed after ${this.uploadAttempts} attempts`);
        }
        async getSize() {
          return this.currentSize ?? 0;
        }
        async trackTime(e, t) {
          let n = performance.now();
          try {
            return await t();
          } finally {
            this.uploadAnalytics.timing[e] = performance.now() - n;
          }
        }
        async upload() {
          if ("COMPLETED" === this.status) return;
          if (
            (this.setStatus("STARTED"),
            (this.startTime = performance.now()),
            this.trackUploadStart(),
            this.isCancelled())
          )
            return void this.handleComplete(this.id);
          if (this.allowOptimization && this.item.platform === m.xz.WEB) {
            let e = await U.tryConvertToWebP(
              this.item.file,
              () => this._aborted,
              this.id,
            );
            null != e &&
              (null != e.convertedFile &&
                ((this.item.file = e.convertedFile),
                (this.currentSize = e.convertedFile.size)),
              null != e.convertedMimeType &&
                (this.uploadAnalytics.convertedMimeType = e.convertedMimeType),
              null != e.hashTimeMs &&
                (this.uploadAnalytics.timing.hashTimeMs = e.hashTimeMs),
              null != e.conversionFailureReason &&
                (this.uploadAnalytics.conversionFailureReason =
                  e.conversionFailureReason),
              (this.uploadAnalytics.timing.compressTimeMs = e.compressTimeMs));
          }
          let e = await i.getUploadPayload(this),
            t = (0, C.B)(this.item.target);
          if (null == e.filename || "" === e.filename) {
            y.error("File does not have a filename.", JSON.stringify(e)),
              this.handleError(N.t02.INVALID_FILE_ASSET);
            return;
          }
          if (0 === this.currentSize && null != this.item.file)
            try {
              let e = await (0, c._)(this.item.file);
              e > 0 && (this.currentSize = e);
            } catch (t) {
              y.warn("Failed to detect file size, proceeding with original", {
                filename: e.filename,
                error: t instanceof Error ? t.message : String(t),
              });
            }
          if (0 === this.currentSize)
            return void this.handleError(N.t02.ENTITY_EMPTY);
          let n = (0, E.R8)({
              location: "CloudUpload.upload.postCompressionCheck",
            }),
            l = (0, E.Jy)(n, t.getMaxFileSize(this.channelId));
          if ((this.currentSize ?? 0) > l)
            return void this.handleError(N.t02.ENTITY_TOO_LARGE);
          if (u.Ay.get("upload_fail_50") && 0.5 > Math.random())
            return void setTimeout(() => {
              this.handleError(500);
            }, 1e3);
          try {
            y.log(`Requesting upload url for ${this.id}`);
            let n = await this.trackTime("getUploadUrlTimeMs", async () => {
              let n = t.getCreateAttachmentURL(this.channelId);
              return await o.Bo.post({
                url: n,
                body: { files: [e] },
                ...this.createAttachmentUrlRetryOpts(),
                rejectWithError: !1,
              });
            });
            this.setResponseUrl(n.body.attachments[0].upload_url),
              this.setUploadedFilename(n.body.attachments[0].upload_filename);
          } catch (t) {
            let e = t?.body?.code ?? t.status;
            e !== N.t02.ENTITY_TOO_LARGE &&
              (y.error(
                `Requesting upload url failed with code ${e ?? JSON.stringify(t.body)} for ${this.id}`,
              ),
              S.A.captureException(t)),
              this.handleError(e);
            return;
          }
          try {
            await this.trackTime(
              "uploadTimeMs",
              async () => await this.uploadFileToCloud(),
            ),
              this.trackUploadFinished("COMPLETED"),
              this.handleComplete(this.id);
          } catch (e) {
            this.isCancelled()
              ? this.handleComplete(e)
              : (y.info(`Error: status ${e.status} for ${this.id}`),
                this.handleError(e));
          }
        }
        async reactNativeCompressAndExtractData() {
          if (!(0, C.B)(this.item.target).shouldReactNativeCompressUploads)
            return (
              (this.uploadAnalytics.compressAndExtractDisabled = !0),
              y.log(
                "reactNativeCompressAndExtractData() disabled by upload target",
              ),
              this
            );
          if (!0 === this.reactNativeFilePrepped)
            return (
              (this.uploadAnalytics.fileAlreadyPrepped = !0),
              y.log(
                `reactNativeCompressAndExtractData() file already prepped - ${this.id}`,
              ),
              this
            );
          y.log(`Starting compression/conversion for ${this.id}`);
          let e = await this.trackTime(
            "compressTimeMs",
            async () => await (0, g.Si)(this, this.reactNativeFileIndex ?? 0),
          );
          if (null == e || null == e.file)
            return (
              y.error(`Failed to get compressed file for ${this.id}`), this
            );
          let t = e.uri,
            n = e.file.name;
          if (
            ((0, m.Sm)(e.file) &&
              ((this.uploadAnalytics.imageCompressionQuality =
                e.file.imageCompressionQuality),
              (this.uploadAnalytics.videoCompressionQuality =
                e.file.videoCompressionQuality),
              (this.uploadAnalytics.imageEncoderType = e.file.imageEncoderType),
              e.file.isImage &&
                ((this.uploadAnalytics.sourceMediaWidth = e.file.sourceWidth),
                (this.uploadAnalytics.sourceMediaHeight = e.file.sourceHeight),
                (this.uploadAnalytics.uploadedImageWidth =
                  e.file.uploadedImageWidth),
                (this.uploadAnalytics.uploadedImageHeight =
                  e.file.uploadedImageHeight)),
              void 0 !== e.file.videoMetadata &&
                ((this.uploadAnalytics.sourceMediaWidth =
                  e.file.videoMetadata.width),
                (this.uploadAnalytics.sourceMediaHeight =
                  e.file.videoMetadata.height),
                (this.uploadAnalytics.sourceMediaFormat =
                  e.file.videoMetadata.format),
                (this.uploadAnalytics.sourceVideoBitrate =
                  e.file.videoMetadata.bitRate),
                (this.uploadAnalytics.sourceVideoFramerate =
                  e.file.videoMetadata.frameRate),
                (this.uploadAnalytics.videoDurationMs =
                  e.file.videoMetadata.durationMs),
                (this.uploadAnalytics.sourceVideoProfile =
                  e.file.videoMetadata.sourceProfile),
                (this.uploadAnalytics.sourceVideoLevel =
                  e.file.videoMetadata.sourceLevel)),
              void 0 !== e.file.encodingConfig &&
                ((this.uploadAnalytics.targetVideoWidth =
                  e.file.encodingConfig.targetWidth),
                (this.uploadAnalytics.targetVideoHeight =
                  e.file.encodingConfig.targetHeight),
                (this.uploadAnalytics.targetVideoBitrate =
                  e.file.encodingConfig.targetBitrate),
                (this.uploadAnalytics.targetVideoCodec = e.file.encodingConfig
                  .useHEVC
                  ? "hvc1"
                  : "avc1"),
                (this.uploadAnalytics.targetVideoFramerate =
                  e.file.encodingConfig.frameRate),
                (this.uploadAnalytics.targetVideoIsHdr =
                  e.file.encodingConfig.createHDR),
                (this.uploadAnalytics.hevcIsSupported =
                  e.file.encodingConfig.hevcIsSupported),
                (this.uploadAnalytics.progressUpdateGranularity =
                  e.file.encodingConfig.progressUpdateGranularity)),
              (this.uploadAnalytics.psnr = e.file.psnr),
              (this.uploadAnalytics.ssim = e.file.ssim),
              (this.uploadAnalytics.origin = e.file.origin),
              (this.uploadAnalytics.psnrMeasurementLatencyMs =
                e.file.psnrMeasurementLatencyMs),
              (this.uploadAnalytics.ssimMeasurementLatencyMs =
                e.file.ssimMeasurementLatencyMs)),
            (this.filename = n),
            null == n || null == t || null == e.file.type)
          )
            throw (
              (y.error(
                `Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }} for ${this.id}`,
              ),
              Error(
                `Insufficient file data: ${{ filename: n, uri: t, type: e.file.type }}`,
              ))
            );
          let i = n.split(".").pop()?.toLowerCase(),
            l = "jpg" === i || "jpeg" === i ? "image/jpeg" : e.file.type;
          this.uploadAnalytics.convertedMimeType = l;
          let a = e.fileSize ?? (await (0, T.dm)(t)).size;
          if (
            ((this.postCompressionSize = a), (this.currentSize = a), null == a)
          )
            throw (
              (y.error(`Size missing from file data for ${this.id}`),
              Error("Size missing from file data"))
            );
          return (
            y.log(
              `Completed compression and conversion. Output size=${a} bytes; filename=${n}; uri=${t}; originalMimeType=${this.mimeType}; mimeType=${l} for ${this.id}`,
            ),
            (this.item = { ...this.item, uri: t, filename: n, mimeType: l }),
            (this.reactNativeFilePrepped = !0),
            this
          );
        }
        static async tryConvertToWebP(e, t, i) {
          let l,
            a,
            r = (0, h.i)({ location: "CloudUpload.maybeConvertToWebP" });
          if (!r.enabled)
            return (
              y.warn(`webp conversion skipped for ${i}: not enabled`), null
            );
          if (null == e)
            return y.warn(`webp conversion skipped for ${i}: no file`), null;
          if (null != r.maxFileSizeBytes && e.size > r.maxFileSizeBytes)
            return y.warn(`webp conversion skipped for ${i}: too big`), null;
          if (t()) return null;
          let s = performance.now(),
            o = { compressTimeMs: 0 };
          try {
            let r = await Promise.all([n.e("96904"), n.e("87096")]).then(
              n.bind(n, 989707),
            );
            if (
              ((a = r.ConversionFailureReason),
              (l = await r.maybeConvertToWebP(e)),
              t())
            )
              return null;
            if (l.success && null != l.convertedBlob)
              y.log(
                `webp conversion worked for ${i}: ${l.sizeBefore} -> ${l.sizeAfter} bytes (${l.compressionRatio.toFixed(2)}x)`,
              ),
                (o.convertedFile = new File([l.convertedBlob], e.name, {
                  type: "image/webp",
                  lastModified: e.lastModified,
                })),
                (o.convertedMimeType = "image/webp"),
                (o.hashTimeMs = l.hashTimeMs ?? void 0);
            else {
              let e = l.reason ?? a.UNKNOWN_ERROR;
              y.log(`webp conversion skipped for ${i}: ${e}`),
                (o.conversionFailureReason = e);
            }
          } catch (e) {
            y.warn(`webp conversion failed for ${i}:`, e),
              (o.conversionFailureReason = a?.UNKNOWN_ERROR ?? "unknown_error");
          }
          let d = Math.round(performance.now() - s);
          return (o.compressTimeMs = l?.compressTimeMs ?? d), o;
        }
        handleError(e) {
          this.setStatus("ERROR"),
            (this.error = e),
            this.trackUploadFinished("ERROR");
          try {
            this.emit("error", e);
          } catch {}
          this.removeAllListeners();
        }
        handleComplete(e) {
          this.setStatus("COMPLETED"),
            y.log(`Upload complete for ${this.id}`),
            this.emit("complete", e),
            this.removeAllListeners();
        }
        _cancel(e, t) {
          y.log(t),
            (this._aborted = !0),
            this._abortController.abort(),
            this.trackUploadFinished(e),
            "COMPLETED" === this.status && this.delete(),
            this.setStatus(e),
            this.emit("complete"),
            this.removeAllListeners();
        }
        cancel() {
          this._cancel("CANCELED", `Cancelled called for ${this.id}`);
        }
        removeFromMsgDraft() {
          this._cancel(
            "REMOVED_FROM_MSG_DRAFT",
            `Removed from draft for ${this.id}`,
          );
        }
        isCancelled() {
          return (
            "CANCELED" === this.status ||
            "REMOVED_FROM_MSG_DRAFT" === this.status
          );
        }
        resetState() {
          return (
            (this.status = "NOT_STARTED"),
            (this.uploadedFilename = void 0),
            (this.responseUrl = void 0),
            (this.responseUrlSetAt = void 0),
            (this.error = void 0),
            (this.startTime = void 0),
            (this.uploadAnalytics = new D()),
            (this.uploadAttempts = 0),
            (this._aborted = !1),
            (this._abortController = new AbortController()),
            super.resetState()
          );
        }
        async delete() {
          if (null == this.uploadedFilename) return;
          let e = (0, C.B)(this.item.target).getDeleteUploadURL(
            this.uploadedFilename,
          );
          try {
            await o.Bo.del(e);
          } catch {}
        }
        setResponseUrl(e) {
          (this.responseUrl = e), (this.responseUrlSetAt = Date.now());
        }
        static isResponseUrlStale(e) {
          if (null == e) return !0;
          let t = 12 * f.A.Millis.HOUR;
          return Date.now() - e > t;
        }
        async ensureFreshResponseUrl() {
          if (!U.isResponseUrlStale(this.responseUrlSetAt)) return;
          let e = await i.getUploadPayload(this),
            t = (0, C.B)(this.item.target).getCreateAttachmentURL(
              this.channelId,
            ),
            n = await o.Bo.post({
              url: t,
              body: { files: [e] },
              ...this.createAttachmentUrlRetryOpts(),
              rejectWithError: !1,
            });
          if (!n.ok || n.body?.attachments?.[0] == null)
            throw new L("upload", { response: n });
          this.setResponseUrl(n.body.attachments[0].upload_url),
            this.setUploadedFilename(n.body.attachments[0].upload_filename);
        }
        setStatus(e) {
          this.status = e;
        }
        setFilename(e) {
          this.filename = e;
        }
        setUploadedFilename(e) {
          this.uploadedFilename = e;
        }
        trackUploadStart() {
          p.default.track(N.HAw.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: this.mimeType ?? "unknown",
            video_upload_quality: A.Ay.videoUploadQuality,
            data_saving_mode: A.Ay.dataSavingMode,
            low_quality_image_mode: A.Ay.dataSavingMode,
            channel_id: this.channelId,
            connection_type: _.A.getType(),
            effective_connection_speed: _.A.getEffectiveConnectionSpeed(),
            service_provider: _.A.getServiceProvider(),
          });
        }
        trackUploadFinished(e) {
          let t =
            null != this.startTime ? performance.now() - this.startTime : -1;
          p.default.track(N.HAw.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: t,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: this.mimeType ?? "unknown",
            num_upload_attempts: this.uploadAnalytics.numUploadAttempts ?? 1,
            error_code: this.error,
            video_upload_quality: A.Ay.videoUploadQuality,
            data_saving_mode: A.Ay.dataSavingMode,
            low_quality_image_mode: A.Ay.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms:
              this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type:
              this.uploadAnalytics.convertedMimeType ?? "unknown",
            image_compression_quality:
              this.uploadAnalytics.imageCompressionQuality ?? 0,
            video_compression_quality:
              this.uploadAnalytics.videoCompressionQuality ?? "unknown",
            image_encoder_type:
              this.uploadAnalytics.imageEncoderType ?? "unknown",
            was_converted:
              null != this.uploadAnalytics.convertedMimeType &&
              this.mimeType !== this.uploadAnalytics.convertedMimeType,
            was_compressed: this.currentSize < this.preCompressionSize,
            source_media_width: this.uploadAnalytics.sourceMediaWidth,
            source_media_height: this.uploadAnalytics.sourceMediaHeight,
            source_media_format: this.uploadAnalytics.sourceMediaFormat,
            uploaded_image_width: this.uploadAnalytics.uploadedImageWidth,
            uploaded_image_height: this.uploadAnalytics.uploadedImageHeight,
            source_video_bitrate: this.uploadAnalytics.sourceVideoBitrate,
            video_duration_ms: this.uploadAnalytics.videoDurationMs,
            source_video_profile_name: this.uploadAnalytics.sourceVideoProfile,
            source_video_profile_level: this.uploadAnalytics.sourceVideoLevel,
            target_video_width: this.uploadAnalytics.targetVideoWidth,
            target_video_height: this.uploadAnalytics.targetVideoHeight,
            target_video_bitrate: this.uploadAnalytics.targetVideoBitrate,
            target_video_codec: this.uploadAnalytics.targetVideoCodec,
            target_video_framerate: this.uploadAnalytics.targetVideoFramerate,
            target_video_is_hdr: this.uploadAnalytics.targetVideoIsHdr,
            hevc_is_supported: this.uploadAnalytics.hevcIsSupported,
            progress_update_granularity:
              this.uploadAnalytics.progressUpdateGranularity,
            source_video_framerate: this.uploadAnalytics.sourceVideoFramerate,
            channel_id: this.channelId,
            hash_time_ms: this.uploadAnalytics.timing.hashTimeMs,
            psnr: this.uploadAnalytics.psnr,
            ssim: this.uploadAnalytics.ssim,
            origin: this.uploadAnalytics.origin,
            psnr_measurement_latency_ms:
              this.uploadAnalytics.psnrMeasurementLatencyMs,
            ssim_measurement_latency_ms:
              this.uploadAnalytics.ssimMeasurementLatencyMs,
            upload_resumption_count: this.uploadAnalytics.uploadResumptionCount,
            upload_resumption_reason:
              this.uploadAnalytics.uploadResumptionReason,
            upload_resumption_position:
              this.uploadAnalytics.uploadResumptionPosition,
            upload_resumption_check_time_ms:
              this.uploadAnalytics.timing.resumptionCheckTimeMs,
            conversion_failure_reason:
              this.uploadAnalytics.conversionFailureReason,
            upload_http_client: this._libdiscoreEnabled
              ? "libdiscore"
              : "httputils",
            connection_type: _.A.getType(),
            effective_connection_speed: _.A.getEffectiveConnectionSpeed(),
            service_provider: _.A.getServiceProvider(),
          });
        }
      }
    },
    723444(e, t, n) {
      n.d(t, { I: () => l });
      var i = n(425059);
      function l() {
        return new i.A();
      }
    },
    967812(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(64700),
        l = n(795816),
        a = n(170148),
        r = n(641703);
      function s(e, t) {
        let n = (0, a.z)(),
          s = (0, r.A)(t),
          o = (null != e && "" !== e) || s;
        return (
          i.useEffect(() => {
            o && n && (0, l.LV)({ guildId: e });
          }, [e, n, o]),
          o && n
        );
      }
    },
    404522(e, t, n) {
      n.d(t, { b: () => o });
      var i = n(64700),
        l = n(17928),
        a = n(476370),
        r = n(795816),
        s = n(933958);
      let o = (e) => {
        let { surface: t, skipFetchingShelf: n = !0 } = e,
          o = (0, l.bG)([s.Ay], () => s.Ay.getState());
        return (
          (0, i.useEffect)(() => {
            var e;
            (null == (e = o.lastCheckedForBadgeableActivities) ||
              new Date(e).getTime() < Date.now() - 432e5) &&
              !n &&
              (0, r.LV)({ guildId: null });
          }, [o.lastCheckedForBadgeableActivities, n]),
          (0, i.useMemo)(() => (0, a.C)({ storeState: o, surface: t }), [o, t])
        );
      };
    },
    782091(e, t, n) {
      n.d(t, {
        J4: () => _,
        JH: () => A,
        dL: () => g,
        et: () => p,
        xy: () => E,
      });
      var i,
        l = n(17928),
        a = n(734057),
        r = n(71393),
        s = n(576705),
        o = n(977997),
        d = n(170148),
        u = n(360469),
        c = n(652215),
        h = n(985018),
        E =
          (((i = {})[(i.CAN_LAUNCH = 0)] = "CAN_LAUNCH"),
          (i[(i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] =
            "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
          (i[(i.NO_CHANNEL_CONNECT_PERMISSION = 2)] =
            "NO_CHANNEL_CONNECT_PERMISSION"),
          (i[(i.NO_CHANNEL = 3)] = "NO_CHANNEL"),
          (i[(i.NO_GUILD = 4)] = "NO_GUILD"),
          (i[(i.IS_AFK_CHANNEL = 5)] = "IS_AFK_CHANNEL"),
          (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] =
            "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
          (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = 7)] =
            "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL"),
          i);
      function A(e) {
        let {
            channelId: t,
            ChannelStore: n,
            GuildStore: i,
            PermissionStore: l,
            VoiceStateStore: a,
          } = e,
          r = n.getChannel(t);
        if (null == r) return 3;
        if (!u.H5.includes(r.type)) return 7;
        if (!(0, d.A)()) return 6;
        if (null != r && !r.isPrivate()) {
          let e = r.getGuildId();
          if (null == e) return 4;
          let n = i.getGuild(e);
          if (n?.afkChannelId === r.id) return 5;
          let s = l.can(c.xBc.CONNECT, r);
          if (!l.can(c.xBc.USE_EMBEDDED_ACTIVITIES, r)) return 1;
          let o = a.getCurrentClientVoiceChannelId(r.getGuildId()) === t;
          if (r.isVocal() && !o && !s) return 2;
        }
        return 0;
      }
      function _(e) {
        return A({
          channelId: e,
          ChannelStore: a.A,
          GuildStore: r.A,
          PermissionStore: s.A,
          VoiceStateStore: o.A,
        });
      }
      function p(e) {
        return (0, l.bG)(
          [a.A, r.A, s.A, o.A],
          () =>
            A({
              channelId: e,
              ChannelStore: a.A,
              GuildStore: r.A,
              PermissionStore: s.A,
              VoiceStateStore: o.A,
            }),
          [e],
        );
      }
      function g(e) {
        switch (e) {
          case 0:
            return h.intl.string(h.t.qJvTKQ);
          case 1:
            return h.intl.string(h.t.hHGrWz);
          default:
            return h.intl.string(h.t.j29zCr);
        }
      }
    },
    641703(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(702841),
        l = n(734057);
      function a(e) {
        let t = (0, i.bG)([l.A], () => l.A.getChannel(e));
        return t?.isPrivate() ?? !1;
      }
    },
    521588(e, t, n) {
      n.d(t, { a: () => s });
      var i = n(627968);
      n(64700);
      var l = n(503698),
        a = n.n(l),
        r = n(489857);
      let s = (e) => {
        let {
          left: t,
          top: n = 0,
          right: l = 0,
          bottom: s,
          size: o = 8,
          alert: d = !1,
          showBlurpleTreatment: u = !1,
          maskColor: c = 2,
          additionalStyles: h,
        } = e;
        return (0, i.jsx)("span", {
          className: a()(r.Om, {
            [r.xE]: d,
            [r.nB]: u,
            [r.GS]: 0 === c,
            [r.Pn]: 1 === c,
            [r.HP]: 2 === c,
            [r.gl]: 3 === c,
            [h ?? ""]: void 0 !== h,
          }),
          style: { height: o, width: o, left: t, top: n, right: l, bottom: s },
        });
      };
    },
    104171(e, t, n) {
      n.d(t, { Ay: () => C, DN: () => p, mt: () => g }), n(321073);
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(950305),
        o = n(939249),
        d = n(983851),
        u = n(573435),
        c = n(342296),
        h = n(889227),
        E = n(287809),
        A = n(3451),
        _ = n(227568);
      let p = { SIZE_16: 16, SIZE_24: 24, SIZE_32: 32, SIZE_56: 56 },
        g = "user-icon";
      function f(e, t) {
        if (e === g) return `user-icon-${t}`;
        let n = e instanceof h.A ? e : null != e ? e.user : null;
        return null != n ? n.id : `user-${t}`;
      }
      function I(e) {
        return (0, i.jsx)("div", { className: _.In, children: e });
      }
      function S(e) {
        return (0, i.jsx)("div", { className: r()(_.In, _.iq), children: e });
      }
      function T() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : p.SIZE_24;
        switch (e) {
          case p.SIZE_16:
            return _.nc;
          case p.SIZE_24:
            return _.q1;
          case p.SIZE_32:
            return _.Hb;
          case p.SIZE_56:
            return _.dl;
          default:
            return _.q1;
        }
      }
      class m extends l.PureComponent {
        static defaultProps = {
          max: 10,
          renderMoreUsers: I,
          renderIcon: !1,
          showDefaultAvatarsForNullUsers: !1,
          size: p.SIZE_24,
        };
        state = { popoutUserId: null };
        _ref = l.createRef();
        defaultRenderUser = (e, t, n) => {
          let l,
            {
              showUserPopout: a,
              guildId: d,
              size: u,
              dimEmptyUsers: c,
            } = this.props;
          if (null == e)
            if (!this.props.showDefaultAvatarsForNullUsers)
              return (0, i.jsx)("div", { className: r()(_.F2, { [_.F_]: c }) });
            else {
              let e = (n ?? 0) % A.A.DEFAULT_AVATARS.length,
                t = A.A.DEFAULT_AVATARS[e];
              return (0, i.jsx)("img", { src: t, alt: "", className: _.my });
            }
          if (e === g) {
            let e = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p.SIZE_24;
              switch (e) {
                case p.SIZE_16:
                  return 10;
                case p.SIZE_24:
                  return 15;
                case p.SIZE_32:
                  return 20;
                case p.SIZE_56:
                  return 35;
                default:
                  return 10;
              }
            })(u);
            l = (0, i.jsx)(s.n, {
              size: "custom",
              color: "currentColor",
              width: e,
              height: e,
            });
          } else
            l = (0, i.jsx)("img", {
              src: e.getAvatarURL(d, u),
              alt: e.username,
              className: _.my,
            });
          let h = (0, i.jsx)("div", { className: _.WK, children: l }, f(e, n));
          return a && e !== g
            ? (0, i.jsx)(
                o.D,
                {
                  className: _.UC,
                  onClick: () => {
                    null != this._ref.current &&
                      null != e &&
                      this.setState({ popoutUserId: e.id });
                  },
                  tabIndex: -1,
                  children: h,
                },
                f(e, n),
              )
            : h;
        };
        renderUsers() {
          let {
              users: e,
              max: t,
              renderUser: n = this.defaultRenderUser,
              size: l,
              extraDetail: a,
            } = this.props,
            r = [],
            s = e.length === t ? e.length : t - 1,
            o = this.renderMoreUsers(s),
            d = 0;
          for (; d < s && d < e.length; ) {
            let t = null == o && null == a && d === e.length - 1,
              s = n(e[d], t, d);
            r.push(
              t
                ? (0, i.jsx)(
                    "div",
                    { className: _.H, children: s },
                    f(e[d] ?? null, d),
                  )
                : (0, i.jsx)(
                    u.Ay,
                    {
                      className: _.aV,
                      height: l,
                      width: l,
                      mask: u.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                      children: s,
                    },
                    f(e[d], d),
                  ),
            ),
              d++;
          }
          return null != a ? r.push(a) : null != o && r.push(o), r;
        }
        renderMoreUsers(e) {
          let {
              max: t,
              count: n,
              hideMoreUsers: a,
              renderMoreUsers: r,
              users: s,
              dimEmptyUsers: o,
            } = this.props,
            d = Math.min(e, s.length),
            u = o ? S : r;
          if (!a) {
            if (null != n) {
              if (n >= t)
                return (0, i.jsx)(
                  l.Fragment,
                  { children: u(`${t}+`, t) },
                  "more-users",
                );
              else if (n > s.length) {
                let e = n - s.length;
                return (0, i.jsx)(
                  l.Fragment,
                  { children: u(`+${e}`, e) },
                  "more-users",
                );
              }
            } else if (d < s.length) {
              let e = Math.min(s.length - d, 99);
              return (0, i.jsx)(
                l.Fragment,
                { children: u(`+${e}`, e) },
                "more-users",
              );
            }
          }
        }
        renderIcon() {
          let { renderLeadingIcon: e, renderIcon: t } = this.props;
          return t
            ? null != e
              ? e(_.Kk)
              : (0, i.jsx)(d.H, {
                  size: "md",
                  color: "currentColor",
                  colorClass: _.__invalid_foreground,
                  className: _.Kk,
                })
            : null;
        }
        render() {
          let {
              className: e,
              size: t,
              users: n,
              guildId: l,
              showUserPopout: a,
              useFallbackUserForPopout: s,
            } = this.props,
            { popoutUserId: o } = this.state;
          if (null == o)
            return (0, i.jsxs)("div", {
              className: r()(e, _.kL, T(t)),
              children: [this.renderIcon(), this.renderUsers()],
            });
          let d = n.find((e) => e instanceof h.A && e.id === o),
            u = s && null == E.default.getUser(o);
          return (0, i.jsx)(c.A, {
            targetElementRef: this._ref,
            userId: o,
            user: u && null != d ? d : void 0,
            guildId: l,
            fixed: !0,
            shouldShow: !0 === a && null != o,
            onRequestClose: () => this.setState({ popoutUserId: null }),
            clickTrap: !0,
            children: (n) =>
              (0, i.jsxs)("div", {
                className: r()(e, _.kL, T(t)),
                ref: this._ref,
                ...n,
                children: [this.renderIcon(), this.renderUsers()],
              }),
          });
        }
      }
      let C = m;
    },
    861638(e, t, n) {
      n.d(t, { Ht: () => K, Vc: () => Z, as: () => W }), n(321073);
      var i = n(132500),
        l = n(71931),
        a = n(17928),
        r = n(506774),
        s = n(228366),
        o = n(237774),
        d = n(626584),
        u = n(446458),
        c = n(495544),
        h = n(885576),
        E = n(763827),
        A = n(954571),
        _ = n(927813),
        p = n(38405),
        g = n(616005),
        f = n(789999),
        I = n(604594),
        S = n(565783),
        T = n(652215);
      let m = 15 * _.A.Millis.MINUTE,
        C = _.A.Millis.SECOND,
        O = "LAST_CLIENT_HEARTBEAT_SESSION",
        N = "user",
        y = new d.A("SessionHeartbeatScheduler"),
        R = null,
        L = null,
        v = 0,
        D = 0,
        U = { state: "uninitialized" },
        P = E.A.getState(),
        b = (0, f.R)(),
        M = c.default.getToken();
      function w() {
        (function () {
          if (null == R) return !1;
          switch (R.type) {
            case "timeout":
              clearTimeout(R.id);
              break;
            case "interval":
              clearInterval(R.id);
              break;
            default:
              R.type;
          }
          return (R = null), !0;
        })() &&
          (p.A.addBreadcrumb({
            category: N,
            message: "Stopping Analytics Heartbeat",
          }),
          (0, o.p)());
      }
      async function G() {
        let e,
          t = Date.now(),
          n = await K(),
          i = Date.now();
        if (null == n)
          return void p.A.captureException(
            Error(
              `Null session when tracking session heartbeat. Waited ${i - t}ms`,
            ),
          );
        p.A.addBreadcrumb({
          category: N,
          message: "Tracking Heartbeat",
          data: { initialized: n.createdAtTimestamp },
        });
        let l = {
          client_heartbeat_initialization_timestamp: n.createdAtTimestamp,
          client_heartbeat_version: 27,
          ...(0, g.Q)(),
          ...((e = h.A.getIdleSince() ?? 0),
          {
            is_idle: h.A.isIdle(),
            idle_duration_ms: Date.now() - e,
            is_afk: h.A.isAFK(),
            is_system_suspended: h.A.getSystemSuspended(),
            is_system_locked: h.A.getSystemLocked(),
          }),
        };
        A.default.track(T.HAw.CLIENT_HEARTBEAT, l),
          (D = performance.now()),
          (0, o.p)();
      }
      function F() {
        let e = [];
        return (
          null != M &&
            (b && e.push("foregrounded"),
            P === T.S7L.RTC_CONNECTED && e.push("rtc_connected")),
          { active: e.length > 0, ver: 27, reasons: e }
        );
      }
      function V() {
        return F().active;
      }
      function k() {
        V()
          ? (function () {
              if (null != R) return;
              let e = 0 === D ? 0 : m - (performance.now() - D);
              p.A.addBreadcrumb({
                message: `Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ${e / 1e3} seconds. Scheduling Heartbeat`,
              }),
                (R = {
                  type: "timeout",
                  id: setTimeout(() => {
                    G(),
                      (R = {
                        type: "interval",
                        id: setInterval(() => {
                          G();
                        }, m),
                      });
                  }, e),
                });
            })()
          : w(),
          u.A.getSocket()?.handleActiveStateChange(F());
      }
      function H(e) {
        return null == e
          ? null
          : e.version !== I.Ir
            ? (y.warn(
                `Throwing away client session with invalid version: ${e.version}, expected ${I.Ir}`,
              ),
              null)
            : e;
      }
      async function x() {
        let e = await K(!1);
        null != e &&
          u.A.getSocket()?.handleUpdateTimeSpentSessionId(
            e.createdAtTimestamp,
            e.uuid,
            l.C,
          );
      }
      function B() {
        let e = c.default.getToken();
        M !== e &&
          ((M = e),
          r.w.remove(O),
          (U = { state: "loaded", session: null }),
          w(),
          (D = 0)),
          k();
      }
      function Y() {
        let e = E.A.getState();
        P !== e && ((P = e), k());
      }
      function j(e) {
        let { focused: t } = e;
        b !== t && ((b = t), k());
      }
      function $(e) {
        let { state: t } = e,
          n = t === T.g6G.ACTIVE;
        b !== n && ((b = n), k());
      }
      function z() {
        (P = E.A.getState()), (b = (0, f.R)()), B();
      }
      function W() {
        p.A.addBreadcrumb({
          message: "Initializing SessionHeartbeatScheduler",
        }),
          E.A.addChangeListener(Y),
          c.default.addChangeListener(B),
          s.h.subscribe("WINDOW_FOCUS", j),
          s.h.subscribe("APP_STATE_UPDATE", $),
          s.h.subscribe("CONNECTION_OPEN", x),
          k(),
          null == L &&
            (L = {
              id: setInterval(() => {
                !(null != M && (0, S.$)()) ||
                  performance.now() - D <= m ||
                  A.default.track(T.HAw.CLIENT_HEARTBEAT_SKIPPED, {
                    client_heartbeat_version: 27,
                  });
              }, m),
              type: "interval",
            }),
          a.Ay.initialized.then(z);
      }
      async function K() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          t = null,
          n = "loaded" === U.state ? U.session?.uuid : null;
        try {
          t =
            "uninitialized" === U.state
              ? H(await r.w.getAfterRefresh(O))
              : U.session;
        } catch (e) {
          p.A.captureException(e);
        }
        let a = Date.now();
        if (V()) {
          (null == t || (0, I.aE)(t)) &&
            ((t = {
              uuid: (0, i.A)(),
              createdAtTimestamp: a,
              lastUsedTimestamp: a,
              version: I.Ir,
            }),
            (v = 0)),
            (t.lastUsedTimestamp = a);
          var s = t;
          let e = performance.now();
          if (!(e - v < C))
            try {
              r.w.set(O, s), (v = e);
            } catch (e) {
              p.A.captureException(e);
            }
        } else null != t && (0, I.aE)(t) && (t = null);
        return (
          (U = { state: "loaded", session: t }),
          null != t &&
            n !== t.uuid &&
            e &&
            u.A.getSocket()?.handleUpdateTimeSpentSessionId(
              t.createdAtTimestamp,
              t.uuid,
              l.C,
            ),
          t
        );
      }
      function Z() {
        let e = "uninitialized" === U.state ? H(r.w.get(O)) : U.session;
        return null == e || (0, I.aE)(e) ? null : e;
      }
    },
    237774(e, t, n) {
      n.d(t, { k: () => c, p: () => h }), n(321073);
      var i = n(495544),
        l = n(763827),
        a = n(954571),
        r = n(935208),
        s = n(85277);
      let o = new Map(),
        d = -1;
      function u() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (e) {
          let e = r.default.extractTimestamp(i.default.getId());
          e !== d && (h(!1), (d = e));
        }
        return d % 10 == 0;
      }
      function c(e, t) {
        u() &&
          (o.has(e) || o.set(e, []),
          o
            .get(e)
            ?.push({ timestamp: new Date(), rtc_state: l.A.getState(), ...t }));
      }
      function h() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (!u(e)) return void o.clear();
        for (let [e, t] of o) a.default.track(e, (0, s.z)(e, t));
        o.clear();
      }
    },
    240525(e, t, n) {
      n.d(t, { Ay: () => v });
      var i = n(734057),
        l = n(498642),
        a = n(536802),
        r = n(309010),
        s = n(753027),
        o = n(509417),
        d = n(383682),
        u = n(27548),
        c = n(363433),
        h = n(552618),
        E = n(879658);
      let A = null,
        _ = new o.o(750, 500),
        p = new d.K(15),
        g = !1;
      class f extends a.A {
        static displayName = "SaveableChannelsStore";
        static LATEST_SNAPSHOT_VERSION = 1;
        constructor() {
          super({
            CACHE_LOADED_LAZY_NO_CACHE: L,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_DELETE: C,
            CHANNEL_UPDATES: m,
            CONNECTION_OPEN_SUPPLEMENTAL: S,
            GUILD_DELETE: y,
            LOGIN_SUCCESS: R,
            THREAD_DELETE: N,
            THREAD_UPDATE: O,
          });
        }
        initialize() {
          this.waitFor(i.A),
            this.waitFor(r.A),
            this.waitFor(l.A),
            this.syncWith([s.A], () => !0),
            this.syncWith([r.A], I);
        }
        loadCache() {
          let e = this.readSnapshot(f.LATEST_SNAPSHOT_VERSION);
          null != e && ((g = !0), f.mergeSnapshot(e));
        }
        canEvictOrphans() {
          return g;
        }
        saveLimit(e) {
          let t = i.A.getBasicChannel(e);
          return (null != t && (0, c.Z)(t)) ||
            (null != t && (r.A.getChannelId() === e || _.has(e)))
            ? 25
            : 1;
        }
        getSaveableChannels() {
          let e = i.A.getChannelIds(null).map((e) => ({
            guildId: null,
            channelId: e,
          }));
          return s.A.isLowDisk
            ? null != A
              ? [...e, A]
              : e
            : [...e, ..._.values()];
        }
        takeSnapshot() {
          return {
            version: f.LATEST_SNAPSHOT_VERSION,
            data: {
              channels: [..._.allValues()].filter((e) => !e.fallback),
              penalized: [...p.keys()],
              lastChannel: A,
            },
          };
        }
        static mergeSnapshot(e) {
          let t = _,
            n = p;
          for (let n of ((_ = new o.o(_.primaryCapacity, _.extendedCapacity)),
          (p = new d.K(p.capacity)),
          (A = A ?? e.lastChannel),
          [e.channels, t.values()]))
            for (let e of n) e.fallback || _.put(e.channelId, e);
          for (let t of [e.penalized, n.keys()])
            for (let e of t) p.put(e, null);
        }
        static recordChannel(e) {
          let t = i.A.getBasicChannel(e);
          if (null != t && (0, h.c)(t)) {
            let n = {
              guildId: t.guild_id ?? null,
              channelId: e,
              channelType: t.type,
            };
            (A = n),
              _.put(e, n),
              (0, u.qA)(t) && null != p.put(e, null) && _.delete(e);
          }
        }
        static deleteChannel(e) {
          _.delete(e);
        }
        static deleteGuild(e) {
          for (let t of _.allValues()) t.guildId === e && _.delete(t.channelId);
        }
        static dropUnreachableChannels() {
          for (let e of _.keys()) {
            let t = i.A.getBasicChannel(e);
            (0, h.c)(t) || f.deleteChannel(e);
          }
        }
        static deleteUnreadableGuildChannels(e) {
          for (let t of _.values())
            e !== t.guildId ||
              (0, h.J)(t.channelId) ||
              f.deleteChannel(t.channelId);
        }
        static replaceLru(e) {
          _ = e;
        }
      }
      function I() {
        let e = r.A.getChannelId();
        null != e && f.recordChannel(e);
      }
      function S() {
        f.dropUnreachableChannels(), f.replaceLru((0, E.I)(_, 1250));
      }
      function T(e) {
        let t = e.id,
          n = (0, h.c)(e),
          i = r.A.getChannelId();
        n && t === i && f.recordChannel(t), n || f.deleteChannel(t);
      }
      function m(e) {
        for (let t of e.channels) T(t);
      }
      function C(e) {
        f.deleteChannel(e.channel.id);
      }
      function O(e) {
        T(e.channel);
      }
      function N(e) {
        f.deleteChannel(e.channel.id);
      }
      function y(e) {
        return !e.guild.unavailable && (f.deleteGuild(e.guild.id), !0);
      }
      function R(e) {
        _.clear(), p.clear(), (g = !1);
      }
      function L(e) {
        g = !0;
      }
      let v = new f();
    },
    453001(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        l = n(228366),
        a = n(626584),
        r = n(184989);
      new a.A("BasicChannelCacheStore");
      class s extends i.Ay.Store {
        channels = new Map();
        guilds = new Map();
        hasChannel(e) {
          return this.channels.has(e);
        }
        hasGuild(e) {
          return this.guilds.has(e);
        }
        getBasicChannel(e) {
          return this.channels.get(e) ?? null;
        }
        getGuildBasicChannels(e) {
          return this.guilds.get(e) ?? null;
        }
        invalidate(e) {
          this.delete(e);
        }
        restored(e) {
          this.delete(e);
        }
        constructor() {
          super(l.h, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) =>
              this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e),
          });
        }
        initialize() {
          this.waitFor(r.A);
        }
        handleCacheLoadedLazy(e) {
          for (let [t, n] of ((this.guilds = new Map()),
          (this.channels = new Map()),
          e.basicGuildChannels))
            for (let e of (this.guilds.set(
              t,
              Object.fromEntries(n.map((e) => [e.id, e])),
            ),
            n))
              this.channels.set(e.id, e);
        }
        handleCacheLoadedLazyNoCache(e) {
          this.guilds.clear(), this.channels.clear();
        }
        handleConnectionOpen(e) {
          let t = r.A.allGuildIds();
          for (let e of this.guilds.keys()) t.has(e) || this.delete(e);
        }
        handleLogout(e) {
          this.guilds.clear(), this.channels.clear();
        }
        delete(e) {
          for (let t in this.guilds.get(e) ?? {}) this.channels.delete(t);
          this.guilds.delete(e);
        }
      }
      let o = new s();
    },
    753027(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366),
        a = n(626584),
        r = n(927813),
        s = n(723176);
      let o = new a.A("FileSystemStore"),
        d = 10 * r.A.Millis.MINUTE;
      class u extends i.Ay.Store {
        isLowDisk = !1;
        constructor() {
          super(l.h, {
            APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
            POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
          }),
            this.refresh(),
            this.waitFor(s.A),
            setInterval(() => this.refresh(), d);
        }
        handlePostConnectionOpen() {
          return this.refresh(), !1;
        }
        handleAppStateUpdate(e) {
          return "active" !== e.state && this.refresh(), !1;
        }
        async refresh() {
          let e = await s.A.database()
            ?.fsInfo()
            ?.catch((e) => o.warn("couldn't get fs info", e));
          if (null != e) {
            let t =
                e.fs.available < 0x10000000 ||
                e.fs.available < 3 * e.database.used ||
                e.fs.available < 2 * e.database.total,
              n =
                e.fs.available > 0x30000000 &&
                e.fs.available > 4 * e.database.used &&
                e.fs.available > 4 * e.database.total,
              i = !!t || (!n && null);
            null != i &&
              this.isLowDisk !== i &&
              ((this.isLowDisk = i), this.emitChange());
          }
        }
      }
      let c = new u();
    },
    60809(e, t, n) {
      n.d(t, {
        $V: () => c,
        Gu: () => o,
        KG: () => s,
        TY: () => u,
        Ug: () => l,
        Wx: () => a,
        gS: () => r,
        qp: () => d,
        sK: () => h,
      });
      var i,
        l =
          (((i = {})[(i.POPULAR = 0)] = "POPULAR"),
          (i[(i.ALPHABETICAL = 1)] = "ALPHABETICAL"),
          i);
      let a = "app-launcher-element",
        r = "app-launcher-modal",
        s = "app-launcher-entrypoint",
        o = "app-launcher-app-dm-entrypoint",
        d = "app-launcher-app-details-more-menu",
        u = "app-launcher-profile-friend-activity-entry",
        c = "min(100vh, 680px)",
        h = {
          "--custom-app-launcher-width": "500px",
          "--custom-app-launcher-height": c,
        };
    },
    279061(e, t, n) {
      n(240525),
        n(717125),
        n(47671),
        n(736056),
        n(151781),
        n(960755),
        n(380335),
        n(157550),
        n(185657),
        n(91868),
        n(406595),
        n(695515),
        n(9842),
        n(841595),
        n(773669),
        n(363195),
        n(617617),
        n(734057),
        n(769765),
        n(808728),
        n(696451),
        n(184989),
        n(458294),
        n(317525),
        n(71393),
        n(232835),
        n(576705),
        n(222823),
        n(711014),
        n(543465),
        n(287809),
        n(567761);
    },
    798611(e, t, n) {
      n(539895), n(933958);
      var i = n(17928),
        l = n(228366);
      let a = !1;
      function r() {
        a = !1;
      }
      class s extends i.Ay.Store {
        isTogglesDisabled() {
          return a;
        }
      }
      new s(l.h, {
        AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
          a = e.disabled ?? !1;
        },
        CONNECTION_OPEN: r,
        LOGOUT: r,
      }),
        n(787301),
        n(240525);
      var o = n(453001);
      n(753027),
        n(989837),
        n(166862),
        n(264322),
        n(861382),
        n(587895),
        n(715314);
      var d = n(61090);
      n(237751);
      var u = n(506774),
        c = n(154049);
      n(321073);
      var h = n(136722),
        E = n(937724),
        A = n(626584),
        _ = n(446458),
        p = n(95701),
        g = n(495544),
        f = n(734057),
        I = n(317525),
        S = n(71393),
        T = n(576705),
        m = n(799422),
        C = n(723176);
      let O = new A.A("GuildBasicChannels");
      function N(e, t) {
        return (
          null == e ||
          e.type !== t.type ||
          e.parent_id !== t.parent_id ||
          T.A.computeBasicPermissions(e) !== T.A.computeBasicPermissions(t)
        );
      }
      let y = new (class {
        synced = null;
        async getAsync(e) {
          let t = performance.now(),
            [n, i] = await Promise.all([
              C.A.basicChannels(e).getKvEntries(),
              C.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            l = performance.now() - t,
            [a, r] = (function (e) {
              let t = [],
                n = [];
              for (let [i, l] of e) (l ? t : n).push(i);
              return [t, n];
            })(i),
            s = new Set(a);
          return (
            (this.synced = s),
            O.verbose(
              `loaded in ${l}ms (guilds: ${n.length}, synced: ${s.size} unsynced: ${r.length})`,
            ),
            {
              all: n,
              stale: r,
              channels: n.filter((e) => {
                let [t, n] = e;
                return s.has(t);
              }),
            }
          );
        }
        actions = {
          BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
          CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
          CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
          CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
          CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
          GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
          GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
          GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
          GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
          GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
          POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
          WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t),
        };
        handleChannelCreate(e, t) {
          null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
        }
        handleChannelDelete(e, t) {
          null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
        }
        handleChannelUpdates(e, t) {
          for (let n of e.channels.filter((e) => null != e.guild_id))
            N(f.A.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
        }
        handleBackgroundSync(e, t) {
          for (let n of e.guilds)
            switch (n.data_mode) {
              case "unavailable":
                break;
              case "partial":
                let e = (e) => (0, p.UE)(e, n.id);
                this.onGuildUpdate(
                  n.id,
                  n.partial_updates.channels?.map(e) ?? [],
                  n.partial_updates.deleted_channel_ids ?? [],
                  t,
                );
                break;
              default:
                this.onGuildSync(n.id, t);
            }
        }
        handleConnectionOpen(e, t) {
          for (let n of e.guilds) this.handleOneGuildCreate(n, t);
        }
        async handlePostConnectionOpen() {
          let e = _.A.lastTimeConnectedChanged(),
            t = C.A.database();
          if (null == this.synced || null == t || !(0, E.O)()) return;
          let n = S.A.getGuildIds(),
            i = n.filter((e) => !this.synced.has(e));
          for (let l of (O.verbose(
            `scheduling basic_channel optimstic writes (guilds: ${i.length})`,
          ),
          n)) {
            if (
              null == this.synced ||
              t !== C.A.database() ||
              e !== _.A.lastTimeConnectedChanged()
            )
              break;
            if (!this.synced.has(l)) {
              O.verbose(`optimstically writing basic_channels (guild: ${l})`);
              try {
                await f.D.loadGuildIds([l]),
                  await t.transaction(
                    (e) => this.syncOne(l, e),
                    "handlePostConnectionOpen",
                  );
              } catch (e) {
                O.warn("couldn't optimstically write basic_channel:", e);
                return;
              }
              await new Promise((e) => setTimeout(e, 1e3));
            }
          }
        }
        handleGuildCreate(e, t) {
          this.handleOneGuildCreate(e.guild, t);
        }
        handleOneGuildCreate(e, t) {
          let { id: n, channels: i } = e;
          switch (i.op) {
            case "full_sync":
              this.onGuildSync(n, t);
              break;
            case "update":
              this.onGuildUpdate(n, i.writes, i.deletes, t);
          }
        }
        handleGuildUpdate(e, t) {
          this.unsync(e.guild.id, t);
        }
        handleGuildDelete(e, t) {
          !0 !== e.guild.unavailable && this.delete(e.guild.id, t);
        }
        handleGuildRoleUpdate(e, t) {
          let n = e.role,
            i = I.A.getRole(e.guildId, n.id);
          (null != i && h.aI(h.iu(n.permissions), i.permissions)) ||
            this.unsync(e.guildId, t);
        }
        handleGuildMemberUpdate(e, t) {
          e.user.id === g.default.getId() && this.unsync(e.guildId, t);
        }
        handleWriteCaches(e, t) {
          this.sync(t);
        }
        resetInMemoryState() {
          this.synced = null;
        }
        onGuildUpdate(e, t, n, i) {
          (n.length > 0 || t.some((e) => N(f.A.getBasicChannel(e.id), e))) &&
            this.unsync(e, i);
        }
        onGuildSync(e, t) {
          this.unsync(e, t);
        }
        delete(e, t) {
          this.unsync(e, t),
            C.A.basicChannelsTransaction(t).delete(e),
            C.A.syncedBasicChannelsTransaction(t).delete(e);
        }
        unsync(e, t) {
          this.synced?.delete(e),
            C.A.basicChannelsTransaction(t).delete(e),
            C.A.syncedBasicChannelsTransaction(t).put(e, !1),
            o.A.invalidate(e);
        }
        sync(e) {
          O.verbose("Starting to write all basic channels");
          let t = performance.now(),
            n = { written: 0, skipped: 0 };
          for (let t of S.A.getGuildIds())
            this.syncOne(t, e) ? n.written++ : n.skipped++;
          let i = performance.now() - t;
          O.verbose(
            `${n.written} basic_channel guilds submitted (took: ${i}ms, skipped: ${n.skipped} guilds)`,
          );
        }
        syncOne(e, t) {
          var n;
          return (
            !(null == S.A.getGuild(e) || this.synced?.has(e)) &&
            (this.synced?.add(e),
            C.A.basicChannelsTransaction(t).put(
              e,
              ((n = e),
              Object.values(f.A.getMutableGuildChannelsForGuild(n)).map(
                (e) => ({
                  id: e.id,
                  type: e.type,
                  guild_id: e.guild_id,
                  parent_id: e.parent_id,
                  basicPermissions: m.A.asBasicFlag(T.A.computePermissions(e)),
                }),
              )),
            ),
            C.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
          );
        }
      })();
      var R = n(260509),
        L = n(696451),
        v = n(860689),
        D = n(9865),
        U = n(7864),
        P = n(38405);
      let b = new A.A("Guilds"),
        M = new (class {
          async getAsync(e) {
            let t = performance.now(),
              n = await C.A.guilds(e).getMany(),
              i = performance.now();
            return b.verbose(`loaded in ${i - t}ms (guilds: ${n.length})`), n;
          }
          async getOneAsync(e, t) {
            return await C.A.guilds(e).get(t);
          }
          actions = {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
            GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
            GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
            GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
            GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
          };
          handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
              if ("unavailable" === n.data_mode) continue;
              let e = S.A.getGuild(n.id);
              if (null != e) {
                let i = I.A.getUnsafeMutableRoles(n.id),
                  l =
                    "partial" === n.data_mode
                      ? U.ly(
                          n.id,
                          i,
                          n.partial_updates.roles,
                          n.partial_updates.deleted_role_ids,
                        )
                      : D.hd(n.id, n.roles);
                this.put(
                  v.Me(v.kI(n, e), D.cH(l), L.Ay.getSelfMember(n.id)),
                  t,
                );
              }
            }
          }
          handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let i of (C.A.guildsTransaction(t).deleteAllExcept(n),
            e.guilds))
              this.putOne(i, t);
          }
          handleGuildCreate(e, t) {
            this.putOne(e.guild, t);
          }
          handleGuildUpdate(e, t) {
            let n = S.A.getGuild(e.guild.id),
              i = v.Y1(e.guild, n);
            this.put(
              v.Me(
                i,
                D.cH(D.hd(e.guild.id, e.guild.roles)),
                L.Ay.getSelfMember(e.guild.id),
              ),
              t,
            );
          }
          handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
          }
          handleGuildRoleChange(e, t) {
            let n = S.A.getGuild(e.guildId),
              i = I.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
              this.put(
                v.Me(
                  n,
                  D.cH({ ...i, [e.role.id]: D.Wj(e.guildId, e.role) }),
                  L.Ay.getSelfMember(e.guildId),
                ),
                t,
              );
          }
          handleGuildRoleDelete(e, t) {
            let n = S.A.getGuild(e.guildId);
            if (null != n) {
              let i = { ...I.A.getUnsafeMutableRoles(e.guildId) };
              delete i[e.roleId];
              let l = L.Ay.getSelfMember(e.guildId);
              null != l &&
                (l = { ...l, roles: l.roles.filter((t) => t !== e.roleId) }),
                this.put(v.Me(n, D.cH(i), l), t);
            }
          }
          handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === g.default.getId()) {
              let n = S.A.getGuild(e.guildId);
              null != n &&
                this.put(
                  v.Me(
                    (0, R.kn)(n, e.joinedAt),
                    D.cH(I.A.getUnsafeMutableRoles(n.id)),
                    L.Ay.getSelfMember(n.id),
                  ),
                  t,
                );
            }
          }
          handleGuildMemberUpdate(e, t) {
            if (e.user.id !== g.default.getId()) return;
            let n = S.A.getGuild(e.guildId);
            null != n &&
              this.put(
                v.Me(n, D.cH(I.A.getUnsafeMutableRoles(n.id)), {
                  roles: e.roles,
                  userId: e.user.id,
                }),
                t,
              );
          }
          resetInMemoryState() {}
          putOne(e, t) {
            let n = e.members.find((e) => e.user.id === g.default.getId()),
              i = S.A.getGuild(e.id);
            if (null == e.properties && null == i)
              return void P.A.captureMessage(
                "AppDatabase Guilds.putOne skipped: partial payload without cached record",
              );
            let l = D.j_(e.id, e.roles, I.A.getUnsafeMutableRoles(e.id)),
              a = v.Me(
                v.Wj(e, i),
                D.cH(l),
                null != n ? { userId: n.user.id, roles: n.roles } : null,
              );
            this.put(a, t);
          }
          put(e, t) {
            C.A.guildsTransaction(t).put(e);
          }
          delete(e, t) {
            C.A.guildsTransaction(t).delete(e);
          }
        })();
      var w = n(314732),
        G = n(586660),
        F = n(214771),
        V = n(735438),
        k = n.n(V),
        H = n(222823),
        x = n(935208);
      let B = new A.A("ReadStates"),
        Y = new (class {
          readStateVersion = null;
          async getAll(e) {
            let t = performance.now(),
              n = await C.A.readStates(e).getMany(),
              i = performance.now();
            return (
              B.log(
                `asynchronously loaded in ${i - t}ms (readStates: ${n.length})`,
              ),
              n
            );
          }
          actions = {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
            MESSAGE_ACK: (e) => this.handleReadStateAction(e),
            BACKGROUND_SYNC_FINISHED: (e, t) => {
              e.messagesOnly || this.handleWriteCaches(t, !1);
            },
            WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0),
          };
          resetInMemoryState() {
            this.readStateVersion = null;
          }
          handleConnectionOpen(e) {
            this.readStateVersion = e.readState.version;
          }
          handleReadStateAction(e) {
            null != this.readStateVersion &&
              (null != e.version
                ? (this.readStateVersion = e.version)
                : B.log("Received null read states version", e));
          }
          handleWriteCaches(e, t) {
            let n = H.Ay.getAllReadStates(!1);
            if (t) {
              if (null == this.readStateVersion) return;
              let t = "0",
                i = "0",
                l = Object.keys(f.A.getMutablePrivateChannels()),
                a = new Set(l);
              for (let e of ((i =
                k()(l).sort(x.default.compare).reverse().value()[0] ?? "0"),
              n))
                null != e._lastMessageId &&
                  (1 === x.default.compare(e._lastMessageId, t) &&
                    (t = e._lastMessageId),
                  a.has(e.channelId) &&
                    1 === x.default.compare(e._lastMessageId, i) &&
                    (i = e._lastMessageId));
              C.A.nonGuildVersionsTransaction(e).putAll([
                { id: "highest_last_message_id", versionString: t },
                { id: "private_channels_version", versionString: i },
                { id: "read_state_version", version: this.readStateVersion },
              ]);
            }
            let i = C.A.readStatesTransaction(e);
            i.delete(), n.forEach((e) => i.put(`${e.type}-${e.channelId}`, e));
          }
        })();
      var j = n(543465);
      let $ = new A.A("ReadStates"),
        z = new (class {
          async getAll(e) {
            let t = performance.now(),
              n = await C.A.userGuildSettings(e).getMany(),
              i = performance.now();
            return (
              $.log(
                `asynchronously loaded in ${i - t}ms (userGuildSettings: ${n.length})`,
              ),
              n
            );
          }
          actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) =>
              this.handleUserGuildSettingsUpdate(e, t),
          };
          resetInMemoryState() {}
          handleConnectionOpen(e, t) {
            e.userGuildSettings.partial ||
              C.A.userGuildSettingsTransaction(t).delete(),
              this.write(
                e.userGuildSettings.entries,
                e.userGuildSettings.version,
                t,
              );
          }
          handleUserGuildSettingsUpdate(e, t) {
            let n = k().max(e.userGuildSettings.map((e) => e.version ?? -1));
            null != n && this.write(e.userGuildSettings, n, t);
          }
          write(e, t, n) {
            let i = C.A.userGuildSettingsTransaction(n);
            for (let t of e) {
              let e = {
                ...(0, j.wn)(t.guild_id),
                ...t,
                channel_overrides: (0, j.b5)(t.channel_overrides),
              };
              i.put(t.guild_id ?? "dm-sentinel", e);
            }
            C.A.nonGuildVersionsTransaction(n).put({
              id: "user_guild_settings_version",
              version: t,
            });
          }
        })();
      var W = n(617617),
        K = n(45773);
      let Z = new A.A("UserSettingsProto");
      class q {
        actions = {
          CONNECTION_OPEN: () => this.throttledOnChange(),
          USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
          USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
          USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
        };
        async getAll(e) {
          let t = performance.now(),
            n = await C.A.userSettings(e).getMany(),
            i = performance.now();
          Z.verbose(`loaded in ${i - t}ms (settings: ${n.length})`);
          let l = {};
          for (let e of n) l[e.id] = e.value;
          return l;
        }
        handleUserSettingsProtoChange = () => {
          let e = g.default.getId(),
            t = K.A.database(e);
          t?.transaction((e) => {
            let t = W.A.computeState(),
              n = C.A.userSettingsTransaction(e);
            for (let e in t) n.put({ id: Number(e), value: t[e] });
            let i = W.A.settings.versions?.dataVersion ?? -1;
            C.A.nonGuildVersionsTransaction(e).put({
              id: "user_settings_version",
              version: i,
            });
          }, "handleUserSettingsProtoChange");
        };
        throttledOnChange = k().debounce(this.handleUserSettingsProtoChange, 0);
        resetInMemoryState() {}
      }
      let Q = new q();
      var X = n(531743),
        J = n(824579),
        ee = n(548965),
        et = n(917878),
        en = n(464578),
        ei = n(309010),
        el = n(967198),
        ea = n(612181),
        er = n(723702),
        es = n(736400),
        eo = n(652215);
      let ed = new A.A("CacheStore"),
        eu = !1,
        ec = "initializing",
        eh = 0;
      async function eE(e, t, n) {
        let i = performance.now();
        if (null == e || null == n)
          return (
            ed.verbose(
              `skipped loaded messages (channel: ${n}, database: ${e}).`,
            ),
            [
              performance.now() - i,
              {
                guildId: null,
                channelId: null,
                users: [],
                members: [],
                messages: [],
              },
            ]
          );
        {
          let l = await G.Ay.startupLoad(e, t, n, eo.EMb);
          ed.verbose(
            `loaded ${l.messages.length} messages (guild: ${t}, channel: ${n}).`,
          );
          let a = {
            guildId: t,
            channelId: n,
            users: l.users,
            members: l.members,
            messages: l.messages,
          };
          return (
            et.A.recordChannelFetchedLocal(
              n,
              et.a,
              null,
              null,
              eo.EMb,
              l.messages,
            ),
            [performance.now() - i, a]
          );
        }
      }
      async function eA(e, t, n) {
        ed.verbose("loading early cache");
        let a = _.A.getSocket();
        a.connect();
        let r = el.A.getGuildId() ?? null,
          s = ei.A.getChannelId() ?? null,
          o = performance.now(),
          u = en.A.loadCachedMessages.measureAsyncWithoutNesting(() =>
            eE(e, r, s),
          ),
          c = en.A.fetchGuildCache.measureAsync(() => ep(e, n)),
          h = en.A.fetchGuildCache.measureAsync(() => eg(e, n)),
          E =
            null != e
              ? d.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () =>
                  X.A.getAsync(e, null),
                )
              : Promise.resolve([]),
          A =
            null == e
              ? Promise.resolve({})
              : d.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () =>
                  Q.getAll(e),
                ),
          p =
            null == e
              ? Promise.resolve([])
              : d.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () =>
                  Y.getAll(e),
                ),
          g =
            null == e
              ? Promise.resolve([])
              : d.A.timeAsync(
                  "\uD83D\uDCBE",
                  "cache: user_guild_settings",
                  () => z.getAll(e),
                ),
          [[f, I], S, T, m, C, O, N] = await Promise.all([u, c, h, E, A, p, g]),
          y = performance.now() - o;
        if (
          (ed.verbose(`cache loaded in ${y}ms (channel_history ${f}ms)`),
          null == I)
        )
          return (
            ed.verbose("finished without dispatching CACHE_LOADED"),
            [!1, null, 0]
          );
        let R = Object.fromEntries(I.members.map((e) => [e.userId, e])),
          L = null != T.guildId && null != T.channels,
          v = T.guildId;
        return (
          await new Promise((e, t) =>
            i.Ay.Emitter.batched(() => {
              d.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                l.h
                  .dispatch({
                    type: "CACHE_LOADED",
                    guilds: S,
                    privateChannels: m,
                    initialGuildChannels: T.channels ?? [],
                    users: [...I.users],
                    messages:
                      null == I.channelId ? {} : { [I.channelId]: I.messages },
                    guildMembers: null == I.guildId ? {} : { [I.guildId]: R },
                    userSettings: C,
                    userGuildSettings: N,
                    readStates: O,
                  })
                  .then(e, t),
              ),
                d.A.time(
                  "\uD83D\uDCBE",
                  "socket.processFirstQueuedDispatch()",
                  () =>
                    a.dispatcher.processFirstQueuedDispatch(
                      new Set(["INITIAL_GUILD"]),
                    ),
                );
            }),
          ),
          ed.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${r}
          selected_channel: ${s}
          navigation_state: ${JSON.stringify(n)}
          database: ${null != e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${m.length}
            channel_history:
              guild: ${I.guildId}
              channel: ${I.channelId}
              messages: ${I.messages.length}
                members: ${I.members.length}
                users: ${I.users.length}
            initial_guild:
              id: ${v}
              channels: ${T.channels?.length}
            user_settings: ${Object.keys(C).length}
            read_states: ${O.length}
            user_guild_settings: ${N.length}
      )`),
          en.A.setEarlyCacheInfo({ guilds: S.length }),
          ed.verbose("finished dispatching CACHE_LOADED"),
          [!0, L ? (v ?? null) : null, m.length]
        );
      }
      let e_ = !1;
      async function ep(e, t) {
        if (null == e) return [];
        switch (t.page) {
          case "private-channels":
          case "guild-channels":
            e_ = !0;
            break;
          case "other":
            "@me" === t.guildId && (e_ = !0);
        }
        if (e_)
          return (
            (await (0, c.kk)(() =>
              d.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () =>
                M.getAsync(e),
              ),
            )) ?? []
          );
        let n =
          (await F.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
        if (null == n || "@me" === n) return [];
        let i = await (0, c.kk)(() => M.getOneAsync(e, n));
        return null != i ? [i] : [];
      }
      async function eg(e, t) {
        if (null == e)
          return Promise.resolve({ channels: null, guildId: null });
        let n = (await F.A.getCommittedVersions()).initial_guild_id;
        if (
          (null == n && "guild-channels" === t.page && (n = t.guildId),
          null == e || null == n)
        )
          return (
            ed.verbose(
              `skipped loading initial guild (guild: ${n}, database: ${e})`,
            ),
            Promise.resolve({ channels: null, guildId: null })
          );
        let i = n;
        return {
          channels: await (0, c.kk)(() => X.A.getAsync(e, i)),
          guildId: n,
        };
      }
      async function ef(e, t, n, i) {
        ed.verbose("loading late lazy cache");
        let [a, r, s] = await en.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
              (0, c.kk)(() =>
                null != e
                  ? d.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () =>
                      w.A.okAsync(e),
                    )
                  : Promise.resolve(!0),
              ),
              (0, c.kk)(() =>
                null == e || e_
                  ? Promise.resolve([])
                  : d.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () =>
                      M.getAsync(e),
                    ),
              ),
              (0, c.kk)(() =>
                null != e
                  ? d.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () =>
                      y.getAsync(e),
                    )
                  : Promise.resolve({ all: [], stale: [], channels: [] }),
              ),
            ]),
          ),
          o = await en.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != s && s.stale.length > 0
              ? (0, c.kk)(() => {
                  var t;
                  return (
                    (t = s.stale),
                    ed.verbose(
                      `loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`,
                    ),
                    Promise.all(
                      t.map((t) => X.A.getAsync(e, t).then((e) => [t, e])),
                    )
                  );
                })
              : Promise.resolve([]),
          );
        ee.iQ.getCachedEnabled()
          ? ed.verbose("loadLateLazyCache: not yielding to react")
          : (ed.verbose("loadLateLazyCache: yielding to react"),
            await (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 4e3;
              return new Promise((t) => {
                let n = setTimeout(() => {
                  t();
                }, e);
                (0, J.t)(() => {
                  clearTimeout(n), t();
                });
              });
            })((0, er.isIOS)() ? 0 : void 0)),
          en.A.loadLazyCache.recordStart();
        let u = _.A.getSocket();
        eI(() => {
          let d = performance.now();
          if (!1 === a) {
            l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
              l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
          }
          if (null == r || null == s || null == o) {
            ed.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != s}
          guild_channels: ${null != o}
          guilds: ${null != r}
        )`),
              l.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:load_failed",
              }),
              l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
          }
          if (null == a && (r.length > 0 || s.all.length > 0)) {
            ed.log("kv_cache was not ok (null version with values)"),
              l.h.dispatch({
                type: "CLEAR_CACHES",
                reason: "database:versionless",
              }),
              l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
          }
          0;
          u.addAnalytics({ hadCacheAtStartup: !0 });
          let c = {
            type: "CACHE_LOADED_LAZY",
            guilds: r,
            guildChannels: o,
            basicGuildChannels: s.channels,
            initialGuildId: n,
          };
          en.A.deserializeCache.measure(() => {
            null != c.channels && (0, es.Ay)(c.channels),
              null != c.privateChannels && (0, es.Ay)(c.privateChannels),
              null != c.guildChannels && (0, es.X3)(c.guildChannels);
          }),
            en.A.dispatchLazyCache.measure(() => l.h.dispatch(c)),
            ed.verbose(
              `late lazy cache loaded (ok: true, took: ${performance.now() - d}ms)`,
            ),
            u.addAnalytics({ usedCacheAtStartup: !0 });
          let h = o.reduce((e, t) => {
              let [n, i] = t;
              return e + i.length;
            }, 0),
            E = o.length,
            A = s.all.reduce((e, t) => {
              let [n, i] = t;
              return e + i.length;
            }, 0),
            _ = s.channels.reduce((e, t) => {
              let [n, i] = t;
              return e + i.length;
            }, 0),
            p = A - _,
            g = 0 === s.stale.length ? "" : ` \xb7 ${s.stale.join(", ")}`;
          ed.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${a}
            name: ${e?.name}
        data:
          database:
            guilds: ${r.length}
            basic_channels:
              total: ${A} (${s.channels.length} guilds)
              stale: ${p} (${s.stale.length} guilds${g})
              unstale: ${_}
            full_channels (guilds_with_stale_basic_channels):
              total: ${h} (${o.length} guilds)
      )`),
            en.A.setLazyCacheInfo({
              guilds: r.length,
              privateChannels: i,
              basicChannels: A,
              basicChannelsStale: p,
              fullChannels: h,
              fullChannelGuilds: E,
            });
        });
      }
      function eI(e) {
        let t = _.A.getSocket(),
          n = !1;
        i.Ay.Emitter.batched(() => {
          try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
              ed.verbose("Unpausing Dispatch Queue"),
                t.dispatcher.unpauseDispatchQueue();
              return;
            }
            (n = !0),
              en.A.loadLazyCache.recordEnd(),
              ed.verbose("Processing First Queued Dispatch"),
              t.dispatcher.processFirstQueuedDispatch(
                new Set(["READY", "INITIAL_GUILD"]),
              ),
              setTimeout(() => {
                ed.verbose("Unpausing Dispatch Queue"),
                  t.dispatcher.unpauseDispatchQueue();
              }, 100);
          } catch (e) {
            ed.warn("Lazy cache has encountered error", e),
              l.h.dispatch({
                type: "RESET_SOCKET",
                args: { error: e, action: "LazyCache" },
              });
          }
        }),
          n || en.A.loadLazyCache.recordEnd();
      }
      class eS extends i.Ay.Store {
        static displayName = "CacheStore";
        initialize() {
          this.waitFor(g.default, _.A, ei.A, el.A),
            _.A.getSocket().dispatcher.unpauseDispatchQueue();
        }
        hasCache() {
          return !0;
        }
        getLazyCacheStatus() {
          return "no-cache";
        }
        get lastWriteTime() {
          return eh;
        }
        canWriteCaches(e) {
          return (0, ea.wR)()
            ? eu
              ? (ed.log("Not writing cache because caches cleared"), !1)
              : !!e || (ed.log("Not writing cache because never connected"), !1)
            : (ed.log("Not writing cache because not authenticated"), !1);
        }
        async loadCacheAsync(e, t) {
          let n,
            i,
            a =
              ((i = !1),
              function () {
                for (var e = arguments.length, l = Array(e), a = 0; a < e; a++)
                  l[a] = arguments[a];
                return i || ((i = !0), (n = t(...l))), n;
              });
          en.A.setInitialPage(e.page);
          let r = e.guildId;
          if (
            (en.A.setInitialGuildId(null != r && "@me" !== r ? r : null),
            "initializing" !== ec)
          ) {
            a(),
              setTimeout(
                () => _.A.getSocket()?.dispatcher?.unpauseDispatchQueue(),
                0,
              );
            return;
          }
          try {
            let t = g.default.getId(),
              n = K.A.carefullyOpenDatabase(t),
              [i, r, s] = await en.A.loadMiniCache.measureAsync(() =>
                eA(n, t, e),
              );
            i
              ? (a(), await ef(n, t, r, s))
              : (a(),
                await (eI(() =>
                  l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" }),
                ),
                Promise.resolve()));
          } catch (e) {
            ed.error(
              "clearing cache. exception encountered while loading cache.",
              e,
              e.stack,
            ),
              a(),
              l.h.dispatch({
                type: "RESET_SOCKET",
                args: { error: e, action: "loadCacheAsync" },
              });
          }
        }
      }
      new eS(l.h, {}), n(313961);
      let eT = Object.freeze({ online: null, total: null }),
        em = {},
        eC = {},
        eO = null;
      class eN extends i.Ay.PersistedStore {
        static displayName = "ChannelMemberCountStore";
        static persistKey = "channelMemberCounts";
        initialize(e) {
          this.waitFor(_.A, f.A), (eC = e ?? em);
        }
        getState() {
          return eC;
        }
        getMemberCount(e) {
          return eC[e] ?? eT;
        }
        requestCount(e, t) {
          (eO = { guildId: e, channelId: t }),
            _.A.getSocket().requestChannelMemberCount(e, t);
        }
      }
      new eN(l.h, {
        CONNECTION_OPEN: function () {
          null != eO &&
            _.A.getSocket().requestChannelMemberCount(eO.guildId, eO.channelId),
            x.default.keys(eC).forEach((e) => {
              null == f.A.getChannel(e) && delete eC[e];
            });
        },
        CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
          let { channelId: t, online: n, total: i } = e;
          return (
            (null != n || null != i) && (eC[t] = { online: n, total: i }), !0
          );
        },
      }),
        n(309698),
        n(717125),
        n(25639),
        n(725613),
        n(47671),
        n(574520),
        n(517164),
        n(99753),
        n(697627),
        n(771781),
        n(159273),
        n(608960),
        n(736056),
        n(639841),
        n(710195),
        n(457699),
        n(900019),
        n(207777),
        n(969043),
        n(246943),
        n(474399),
        n(768953),
        n(870391),
        n(586774);
      var ey = n(328153);
      n(800828),
        n(507263),
        n(823448),
        n(499118),
        n(351022),
        n(610136),
        n(93474);
      var eR = n(746080);
      let eL = {},
        ev = {},
        eD = {},
        eU = {};
      function eP(e) {
        let t = ev[e];
        if (null == t) return;
        let n = x.default.fromTimestamp(Date.now() - 9e5),
          i = k().findIndex(t, (e) => x.default.compare(e.id, n) > 0);
        if (-1 === i) ev[e] = [];
        else {
          let n = Math.max(i, t.length - 26);
          ev[e] = k().slice(t, n);
        }
        eD[e] = Date.now();
      }
      function eb(e, t, n, i) {
        eL[e].add(t);
        let l = eD[t];
        (null == l || l + 3e5 > Date.now()) && eP(t),
          null == ev[t] && (ev[t] = []),
          ev[t].push({ id: n, userId: i });
      }
      function eM(e) {
        let { channel: t } = e;
        delete ev[t.id], delete eD[t.id];
      }
      class ew extends i.Ay.Store {
        initialize() {
          this.waitFor(f.A, el.A);
        }
        static displayName = "ActiveChannelsStore";
        getActiveChannelsFetchStatus(e) {
          return eU[e];
        }
        getActiveChannelIds(e) {
          return eL[e];
        }
        getChannelMessageData(e) {
          return ev[e];
        }
        shouldFetch(e) {
          return null == eL[e] && !eU[e]?.loading;
        }
      }
      new ew(l.h, {
        CHANNEL_SELECT: function (e) {
          let { channelId: t, guildId: n } = e;
          if (!(0, eR.mP)(t) || null == n) return !1;
          let i = eL[n];
          if (null == i) return !1;
          i.forEach((e) => {
            eP(e), ev[e]?.length === 0 && delete ev[e];
          });
          let l = k()
            .chain(Array.from(i))
            .filter((e) => e in ev)
            .sortBy((e) => -(ev[e]?.length ?? 0))
            .value();
          eL[n] = new Set(l);
        },
        MESSAGE_CREATE: function (e) {
          let {
            channelId: t,
            message: n,
            optimistic: i,
            isPushNotification: l,
          } = e;
          if (i || l) return !1;
          let a = f.A.getChannel(t);
          if (null == a) return !1;
          let r = a.guild_id;
          if (null == r || null == eL[r]) return !1;
          eb(r, t, n.id, n.author?.id);
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          delete eL[t.id];
        },
        CHANNEL_DELETE: eM,
        THREAD_DELETE: eM,
        ACTIVE_CHANNELS_FETCH_START: function (e) {
          let { guildId: t } = e;
          eU[t] = { loading: !0, error: null, fetchedAt: Date.now() };
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
          let { guildId: t, channels: n } = e;
          (eU[t] = { loading: !1, error: null, fetchedAt: Date.now() }),
            (eL[t] = new Set()),
            n.forEach((e) => {
              let { channel_id: n, messages: i } = e;
              i.forEach((e) => {
                eb(t, n, e.message_id, e.user_id);
              });
            });
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
          let { guildId: t, error: n } = e;
          eU[t] = { loading: !1, error: n, fetchedAt: null };
        },
        CONNECTION_OPEN: function () {},
      }),
        n(212455),
        n(879408),
        n(151781),
        n(591552),
        n(713125),
        n(871109);
      var eG = n(936649);
      let eF = {};
      function eV(e, t) {
        let n = eF[e];
        return !(null == n || n.has(t)) && ((eF[e] = new Set(n.add(t))), !0);
      }
      class ek extends i.Ay.PersistedStore {
        static displayName = "GuildProgressStore";
        static persistKey = "GuildProgressStore";
        initialize(e) {
          this.waitFor(g.default, f.A, S.A),
            (eF = {}),
            null != e &&
              x.default.keys(e).forEach((t) => {
                let n = e[t];
                null != n &&
                  "function" == typeof n[Symbol.iterator] &&
                  (eF[t] = new Set(n));
              });
        }
        getProgress(e) {
          return eF[e];
        }
        hasProgress(e) {
          let t = eF[e];
          return null != t && !t.has(eG.gj.DISMISSED);
        }
        getState() {
          return eF;
        }
      }
      new ek(l.h, {
        CONNECTION_OPEN: function () {
          let e = [];
          x.default.keys(eF).forEach((t) => {
            eF[t].has(eG.gj.COMPLETED) && e.push(t);
          }),
            e.forEach((e) => eV(e, eG.gj.DISMISSED));
        },
        GUILD_PROGRESS_INITIALIZE: function (e) {
          let { guildId: t } = e;
          null == eF[t] && (eF[t] = new Set()),
            eF[t].has(eG.gj.COMPLETED) || eF[t].delete(eG.gj.DISMISSED);
        },
        GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
          let { guildId: t } = e;
          if (null == eF[t]) return !1;
          eF[t] = new Set(eF[t].add(eG.gj.COMPLETED));
        },
        GUILD_PROGRESS_DISMISS: function (e) {
          let { guildId: t } = e;
          return eV(t, eG.gj.DISMISSED);
        },
        GUILD_CREATE: function (e) {
          let {
              guild: { id: t, member_count: n },
            } = e,
            i = S.A.getGuild(t);
          if (null == i) return !1;
          i.ownerId === g.default.getId() &&
            null != eF[i.id] &&
            (null != i.icon && eF[i.id].add(eG.gj.AVATAR),
            n > 1 && eF[i.id].add(eG.gj.INVITE));
        },
        CHANNEL_CREATE: function (e) {
          let { channel: t } = e;
          return (
            null != t &&
            null != t.guild_id &&
            null != eF[t.guild_id] &&
            eV(t.guild_id, eG.gj.CHANNEL)
          );
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          for (let e of t)
            null != e &&
              null != e.guild_id &&
              null != eF[e.guild_id] &&
              !1 !== eV(e.guild_id, eG.gj.CHANNEL) &&
              (n = !0);
          return n;
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
          let { guild: t } = e;
          return (
            null != t &&
            null != t.id &&
            null != eF[t.id] &&
            null != t.icon &&
            eV(t.id, eG.gj.AVATAR)
          );
        },
        MESSAGE_CREATE: function (e) {
          let { channelId: t, message: n } = e,
            i = f.A.getChannel(t);
          return (
            n.author?.id === g.default.getId() &&
            null != i &&
            null != eF[i.guild_id] &&
            eV(i.guild_id, eG.gj.MESSAGE)
          );
        },
        GUILD_MEMBER_LIST_UPDATE: function (e) {
          let { guildId: t, memberCount: n } = e;
          return null != eF[t] && n > 1 && eV(t, eG.gj.INVITE);
        },
      }),
        n(636194),
        n(384684),
        n(698441),
        n(960755),
        n(121780),
        n(857071),
        n(752755),
        n(578623),
        n(973153),
        n(401565),
        n(380335),
        n(157550),
        n(274303),
        n(252431);
      var eH = n(253932),
        ex = n(461213),
        eB = n(927813);
      let eY = [],
        ej = !1;
      function e$() {
        return (
          eY.length >= 4 && eY.some((e) => e < Date.now() - 3 * eB.A.Millis.DAY)
        );
      }
      class ez extends i.Ay.PersistedStore {
        static displayName = "HabitualDNDStore";
        static persistKey = "habitualDND";
        initialize(e) {
          this.waitFor(ex.A),
            null != e &&
              Array.isArray(e.sessionStartsWithDND) &&
              (eY = e.sessionStartsWithDND);
        }
        showNagBar() {
          return ej;
        }
        getState() {
          return { sessionStartsWithDND: eY };
        }
        getTemp() {
          return { x: eH.CY.getSetting() };
        }
      }
      new ez(l.h, {
        POST_CONNECTION_OPEN: function () {
          ex.A.getStatus() === eo.clD.DND && "0" === eH.CY.getSetting()
            ? (eY.push(Date.now()),
              (eY = eY.filter((e) => e > Date.now() - 5 * eB.A.Millis.DAY)),
              e$() &&
                setTimeout(() => {
                  l.h.dispatch({ type: "HABITUAL_DND_CLEAR" });
                }, 15 * eB.A.Millis.SECOND))
            : (eY = []);
        },
        HABITUAL_DND_CLEAR: function () {
          (ej = !!e$()), (eY = []);
        },
      }),
        n(535586),
        n(517092),
        n(310031),
        n(833551),
        n(680243),
        n(648427),
        n(185657),
        n(91868),
        n(406595),
        n(695515),
        n(148864),
        n(683760),
        n(275759),
        n(911411),
        n(174768),
        n(135978),
        n(923495),
        n(542986),
        n(853145),
        n(9842),
        n(532309),
        n(707890),
        n(440976),
        n(85109),
        n(199160),
        n(517381),
        n(268988),
        n(349435),
        n(741812),
        n(49431),
        n(832163),
        n(889979),
        n(655116),
        n(63995),
        n(312006),
        n(732755),
        n(446600),
        n(41237),
        n(750385),
        n(822074),
        n(695633),
        n(970278),
        n(45494),
        n(152007),
        n(219065),
        n(802958),
        n(456874),
        n(79858),
        n(279263),
        n(975648),
        n(878460),
        n(773669),
        n(363195),
        n(769022);
      var eW = n(451988),
        eK = n(308368),
        eZ = n(973522),
        eq = n(674378),
        eQ = n(760751),
        eX = n(189081),
        eJ = n(763827);
      let e0 = "ActivityTrackingStore",
        e1 = 30 * eB.A.Millis.MINUTE,
        e2 = 5 * eB.A.Millis.MINUTE,
        e3 = u.w.get(e0) ?? {},
        e5 = {},
        e7 = !1;
      function e6(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        t && e8(e, !0);
        let n = e5[e.applicationId];
        null != n && (n.stop(), delete e5[e.applicationId]),
          delete e3[e.applicationId],
          u.w.set(e0, e3);
      }
      function e8(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Date.now(),
          i = null != e.updatedAt ? n - e.updatedAt : 0;
        i > e1 + e2 && (i = 0);
        let l = (0, eq.kv)(e.applicationId, eX.A),
          a = ei.A.getVoiceChannelId(),
          r = g.default.getSessionId(),
          s = eJ.A.getMediaSessionId();
        eK.A.updateActivity({
          applicationId: e.applicationId,
          distributor: e.isDiscordApplication ? eo.d3x.DISCORD : e.distributor,
          shareActivity: l,
          token: e.token,
          duration: Math.floor(i / 1e3),
          closed: t,
          exePath: e.exePath,
          voiceChannelId: a,
          sessionId: r,
          mediaSessionId: s,
        }),
          (e.updatedAt = n);
        let o = e5[e.applicationId];
        null == o &&
          (o = e5[e.applicationId] = new eW.IX()).start(e1, () => e8(e)),
          t || ((e3[e.applicationId] = e), u.w.set(e0, e3));
      }
      function e9() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          t = ey.Ay.getVisibleRunningGames(),
          n = new Set();
        for (let e of t) {
          let t = eQ.A.findGame(e);
          null != t &&
            (n.add(t.id),
            t.id in e3 ||
              e8({
                applicationId: t.id,
                updatedAt: Date.now(),
                distributor: e.distributor,
                exePath: (0, eZ.Ic)(e.exePath ?? ""),
              }));
        }
        for (let t of Object.keys(e3)) n.has(t) || e6(e3[t], e);
      }
      function e4() {
        for (let e of Object.keys(e3)) e6(e3[e]);
        e7 = !1;
      }
      class te extends i.Ay.Store {
        static displayName = "ActivityTrackingStore";
        initialize() {
          this.waitFor(g.default, eQ.A, eX.A, eJ.A, ey.Ay, ei.A, W.A),
            this.syncWith([W.A], e9);
        }
        getActivities() {
          return e3;
        }
      }
      new te(l.h, {
        RUNNING_GAMES_CHANGE: () => e9(),
        CONNECTION_OPEN: function () {
          if (e7) return !1;
          for (let e of Object.keys(e3)) e8(e3[e]);
          e9(!1), (e7 = !0);
        },
        CONNECTION_CLOSED: function (e) {
          let { code: t } = e;
          4004 === t && e4();
        },
        LOGOUT: e4,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
          let { applicationId: t, token: n } = e,
            i = e3[t];
          if (null == i) return !1;
          (i.token = n), u.w.set(e0, e3);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
          let { applicationId: t } = e,
            n = e3[t];
          if (null == n) return !1;
          (n.token = null), (n.updatedAt = null), u.w.set(e0, e3);
        },
      }),
        n(930839),
        n(384200),
        n(616356),
        n(470710),
        n(924985),
        n(560010),
        n(963307),
        n(966833);
      let tt = {};
      class tn extends i.Ay.Store {
        static displayName = "ChannelSKUStore";
        getSkuIdForChannel(e) {
          return tt[e];
        }
      }
      new tn(l.h, {
        CONNECTION_OPEN: function () {
          tt = {};
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
          let { channelId: t, storeListing: n } = e;
          null != t && (tt[t] = n.sku.id);
        },
      }),
        n(945886),
        n(30370),
        n(153488),
        n(540999),
        n(111162),
        n(31717),
        n(629016),
        n(543897),
        n(30793),
        n(776096),
        n(919638),
        n(769765),
        n(808728),
        n(498642),
        n(860071),
        n(184989),
        n(458294),
        n(82057),
        n(834942),
        n(958590),
        n(670492),
        n(51760),
        n(956703),
        n(232835),
        n(783592),
        n(737613),
        n(362790),
        n(290863),
        n(131677),
        n(584777),
        n(584569),
        n(994500),
        n(528767),
        n(711014),
        n(485296),
        n(437959),
        n(116956),
        n(274184),
        n(741961),
        n(399263),
        n(870570),
        n(287809),
        n(803301),
        n(977997),
        n(615405),
        n(992250),
        n(731667),
        n(568004),
        n(567761),
        n(607567),
        n(595623),
        n(340829),
        n(966846),
        n(532624),
        n(530789),
        n(773371),
        n(256415);
    },
    166862(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(17928),
        l = n(228366),
        a = n(155718),
        r = n(58149),
        s = n(723702),
        o = n(861382),
        d = n(652215);
      let u = new Map(),
        c = new Map(),
        h = new Map();
      function E(e) {
        return (
          c.has(e) ||
            c.set(e, {
              commandId: o.A.getActiveCommand(e)?.id,
              optionName: o.A.getActiveOptionName(e),
              optionNameToAutocompleteQueries: new Map(),
              optionNameToLastResults: new Map(),
              optionNameToNonce: new Map(),
              optionNameToLastQuery: new Map(),
              lastErrored: !1,
              lastResponseNonce: void 0,
            }),
          c.get(e)
        );
      }
      function A() {
        return u.clear(), c.clear(), !0;
      }
      let _ = (0, s.isDesktop)();
      function p(e) {
        let { channelId: t, command: n } = e;
        g(t, n?.id);
      }
      function g(e, t) {
        let n = o.A.getActiveOptionName(e),
          i = c.get(e);
        return (
          null != i &&
          (t !== i.commandId || n !== i.optionName) &&
          (null != t &&
            t !== i.commandId &&
            (i.optionNameToLastResults.clear(),
            i.optionNameToNonce.clear(),
            i.optionNameToLastQuery.clear(),
            i.optionNameToAutocompleteQueries.clear()),
          (i.lastErrored = !1),
          (i.commandId = t),
          (i.optionName = n),
          !0)
        );
      }
      class f extends i.Ay.Store {
        static displayName = "ApplicationCommandAutocompleteStore";
        initialize() {
          this.waitFor(o.A);
        }
        getLastErrored(e) {
          return E(e).lastErrored;
        }
        getAutocompleteChoices(e, t, n) {
          let i = E(e);
          return i.optionNameToAutocompleteQueries.get(t)?.get(n);
        }
        getAutocompleteLastChoices(e, t) {
          return E(e).optionNameToLastResults.get(t);
        }
        getLastResponseNonce(e) {
          return E(e).lastResponseNonce;
        }
      }
      let I = new f(l.h, {
        CONNECTION_OPEN: A,
        LOGOUT: A,
        CHANNEL_SELECT: A,
        APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST: function (e) {
          let { nonce: t, channelId: n, query: i, name: l } = e,
            a = E(n);
          if (a.optionNameToLastQuery.get(l) === i) return !1;
          a.optionNameToLastQuery.set(l, i);
          let r = a.optionNameToAutocompleteQueries.get(l)?.get(i);
          if (null != r)
            return (
              (a.lastErrored = !1), a.optionNameToLastResults.set(l, r), !0
            );
          let s = a.optionNameToNonce.get(l);
          if (
            (null != s && u.delete(s),
            u.set(t, { channelId: n, query: i, name: l }),
            h.set(t, new Date()),
            a.optionNameToNonce.set(l, t),
            a.lastErrored)
          )
            return (a.lastErrored = !1), !0;
        },
        APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE: function (e) {
          let { choices: t, nonce: n } = e,
            i = u.get(n);
          if (null == i) return !1;
          u.delete(n);
          let l = E(i.channelId);
          null == l.optionNameToAutocompleteQueries.get(i.name) &&
            l.optionNameToAutocompleteQueries.set(i.name, new Map());
          let s = _ && o.A.getActiveOption(i.channelId)?.type === a.n4.INTEGER,
            c =
              t?.map((e) => {
                let { value: t, name_localized: n, name: i } = e;
                return {
                  displayName: n ?? i,
                  name: i,
                  value: (t = s ? Number(t) : t),
                };
              }) ?? [],
            A = h.get(n),
            p = null != A ? new Date().getTime() - A.getTime() : 0;
          return (
            (0, r.zV)(
              d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE,
              { duration_ms: p, error: !1, num_options: c.length },
            ),
            h.delete(n),
            l.optionNameToAutocompleteQueries.get(i.name)?.set(i.query, c),
            l.optionNameToLastQuery.get(i.name) === i.query &&
              ((l.lastErrored = !1), l.optionNameToLastResults.set(i.name, c)),
            (l.lastResponseNonce = n),
            !0
          );
        },
        INTERACTION_FAILURE: function (e) {
          let { nonce: t } = e;
          if (null == t) return !1;
          let n = u.get(t);
          if (null == n) return !1;
          u.delete(t);
          let i = h.get(t),
            l = null != i ? new Date().getTime() - i.getTime() : 0;
          return (
            (0, r.zV)(
              d.HAw.APPLICATION_COMMAND_OPTION_STRING_AUTOCOMPLETE_PERFORMANCE,
              { duration_ms: l, error: !0 },
            ),
            h.delete(t),
            (E(n.channelId).lastErrored = !0),
            !0
          );
        },
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: p,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: p,
        APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
          let { channelId: t, command: n } = e;
          g(t, n?.id);
        },
      });
    },
    382483(e, t, n) {
      n.d(t, { Wq: () => o, i$: () => d, un: () => u });
      var i = n(636537),
        l = n(228366),
        a = n(38405),
        r = n(385113),
        s = n(652215);
      async function o() {
        let { force: e = !1 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (
          e ||
          (r.A.getFeaturedFetchState() !== r.e.FETCHING &&
            r.A.getFeaturedFetchState() !== r.e.SUCCESS)
        ) {
          l.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START",
          });
          try {
            let e = await i.Bo.get({
              url: s.Rsh.WIDGET_CONFIGS_FEATURED,
              rejectWithError: !0,
            });
            l.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
              configs: e.body.configs,
            });
          } catch (e) {
            l.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE",
            }),
              a.A.captureException(e);
          }
        }
      }
      async function d() {
        let { force: e = !1 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (
          e ||
          (r.A.getDeveloperFetchState() !== r.e.FETCHING &&
            r.A.getDeveloperFetchState() !== r.e.SUCCESS)
        ) {
          l.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START",
          });
          try {
            let e = await i.Bo.get({
              url: s.Rsh.WIDGET_CONFIGS_DEVELOPER,
              rejectWithError: !0,
            });
            l.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
              configs: e.body.configs,
            });
          } catch (e) {
            l.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE",
            }),
              a.A.captureException(e);
          }
        }
      }
      async function u(e) {
        let { force: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = r.A.getFetchState(e);
        if (t || (n !== r.e.FETCHING && n !== r.e.SUCCESS)) {
          l.h.dispatch({
            type: "APPLICATION_WIDGET_CONFIG_FETCH_START",
            applicationId: e,
          });
          try {
            let t = await i.Bo.get({
              url: s.Rsh.APPLICATION_WIDGET_CONFIGS(e),
              rejectWithError: !0,
            });
            l.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
              applicationId: e,
              configs: t.body,
            });
          } catch (t) {
            l.h.dispatch({
              type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE",
              applicationId: e,
            }),
              a.A.captureException(t);
          }
        }
      }
    },
    385113(e, t, n) {
      n.d(t, { A: () => p, e: () => r });
      var i,
        l = n(17928),
        a = n(228366),
        r =
          (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
          (i.FETCHING = "FETCHING"),
          (i.SUCCESS = "SUCCESS"),
          (i.FAILURE = "FAILURE"),
          i);
      let s = [],
        o = {},
        d = {},
        u = "NOT_FETCHED",
        c = [],
        h = "NOT_FETCHED",
        E = [];
      function A(e) {
        if (0 !== Object.keys(e).length) {
          for (let [t, n] of Object.entries(e)) {
            let e = new Set(n.map((e) => e.config_id)),
              i = o[t]?.filter((t) => !e.has(t.config_id)) ?? [];
            o[t] = [...i, ...n];
          }
          (o = { ...o }),
            (d = {
              ...d,
              ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])),
            });
        }
      }
      class _ extends l.Ay.Store {
        static displayName = "ApplicationWidgetConfigStore";
        getConfig(e) {
          return o[e]?.[0] ?? void 0;
        }
        getConfigs(e) {
          return o[e] ?? s;
        }
        getFetchState(e) {
          return d[e] ?? "NOT_FETCHED";
        }
        getFeaturedFetchState() {
          return u;
        }
        getDeveloperFetchState() {
          return h;
        }
        getAllConfigsByApplication() {
          return o;
        }
        getFeaturedApplicationIds() {
          return c;
        }
        getDeveloperApplicationIds() {
          return E;
        }
      }
      let p = new _(a.h, {
        LOGOUT: function () {
          (o = {}),
            (d = {}),
            (u = "NOT_FETCHED"),
            (c = []),
            (h = "NOT_FETCHED"),
            (E = []);
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
          u = "FETCHING";
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
          (u = "SUCCESS"), (c = Object.keys(e.configs)), A(e.configs);
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
          u = "FAILURE";
        },
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function (e) {
          h = "FETCHING";
        },
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
          (h = "SUCCESS"), (E = Object.keys(e.configs)), A(e.configs);
        },
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
          h = "FAILURE";
        },
        APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
          d = { ...d, [e.applicationId]: "FETCHING" };
        },
        APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
          A({ [e.applicationId]: e.configs });
        },
        APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
          d = { ...d, [e.applicationId]: "FAILURE" };
        },
      });
    },
    715314(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366);
      let a = {},
        r = null,
        s = null;
      function o(e, t) {
        null == t ? e in a && delete a[e] : null != e && (a[e] = t);
      }
      function d(e) {
        let { user: t } = e;
        s = t.id;
      }
      class u extends i.Ay.PersistedStore {
        static displayName = "LoginRequiredActionStore";
        static persistKey = "LoginRequiredActionStore";
        initialize(e) {
          null != e && (a = e);
        }
        requiredActions(e) {
          return a[e] ?? null;
        }
        requiredActionsIncludes(e, t) {
          let n = this.requiredActions(e);
          return null != n && t.reduce((e, t) => e || n.includes(t), !1);
        }
        wasLoginAttemptedInSession(e) {
          return r === e;
        }
        getState() {
          return a;
        }
      }
      let c = new u(l.h, {
        LOGIN_ATTEMPTED: function (e) {
          let { required_actions: t, user_id: n } = e;
          o((r = n), t);
        },
        CONNECTION_OPEN: d,
        CURRENT_USER_UPDATE: d,
        LOGOUT: function (e) {
          let { isSwitchingAccount: t } = e;
          t || null == s || o(s, null);
        },
        PASSWORD_UPDATED: function (e) {
          let { userId: t } = e;
          o(t, null);
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          let { userId: t } = e;
          o(t, null);
        },
      });
    },
    736400(e, t, n) {
      n.d(t, { Ay: () => l, X3: () => a, n2: () => r });
      var i = n(136722);
      function l(e) {
        for (let { permissionOverwrites_: t } of e)
          if (null != t)
            for (let e in t) {
              let n = t[e];
              (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
            }
      }
      function a(e) {
        for (let [t, n] of e) l(n);
      }
      function r(e) {
        let { permissionOverwrites_: t } = e;
        if (null != t)
          for (let e in t) {
            let n = t[e];
            (n.allow = i.iu(n.allow)), (n.deny = i.iu(n.deny));
          }
        return e;
      }
    },
    134047(e, t, n) {
      n.d(t, { M: () => i, T: () => l });
      let i = (0, n(250105).Ay)({
        kind: "user",
        name: "2025-11-auto-open-tiv",
        defaultConfig: {
          collectAnalytics: !1,
          autoOpenTIV: !1,
          autoNavigateChannel: !1,
        },
        variations: {
          0: { collectAnalytics: !0, autoOpenTIV: !1, autoNavigateChannel: !1 },
          1: { collectAnalytics: !0, autoOpenTIV: !0, autoNavigateChannel: !1 },
          2: { collectAnalytics: !0, autoOpenTIV: !0, autoNavigateChannel: !0 },
          3: { collectAnalytics: !0, autoOpenTIV: !1, autoNavigateChannel: !0 },
        },
      });
      function l(e) {
        let { channel: t, location: n } = e,
          { autoOpenTIV: l } = i.useConfig({ location: n });
        return null != t && !!t.isGuildVocal() && l;
      }
    },
    806931(e, t, n) {
      n.d(t, {
        Ay: () => A,
        GK: () => E,
        J7: () => h,
        PJ: () => p,
        R8: () => g,
        Xw: () => _,
        cF: () => I,
        fG: () => f,
        jd: () => c,
        lp: () => d,
        mn: () => S,
        qs: () => u,
      });
      var i,
        l,
        a,
        r,
        s,
        o,
        d =
          (((i = {})[(i.STREAM = 0)] = "STREAM"),
          (i[(i.HIDDEN_STREAM = 1)] = "HIDDEN_STREAM"),
          (i[(i.USER = 2)] = "USER"),
          (i[(i.ACTIVITY = 3)] = "ACTIVITY"),
          i),
        u =
          (((l = {}).STREAM = "STREAM"),
          (l.USER = "USER"),
          (l.ACTIVITY = "ACTIVITY"),
          l),
        c = (((a = {}).NONE = "NONE"), (a.AUTO = "AUTO"), a),
        h =
          (((r = {})[(r.DESKTOP = 0)] = "DESKTOP"),
          (r[(r.MOBILE = 1)] = "MOBILE"),
          (r[(r.XBOX = 2)] = "XBOX"),
          (r[(r.PLAYSTATION = 3)] = "PLAYSTATION"),
          (r[(r.QUEST = 4)] = "QUEST"),
          r),
        E =
          (((s = {}).CONTEXT_MENU = "Context Menu"),
          (s.THREE_DOT = "Three-Dot"),
          (s.CARET = "Caret"),
          (s.OTHER_BUTTON = "Other Button"),
          s);
      function A(e) {
        return e?.type === 0 || e?.type === 1;
      }
      function _(e) {
        return e?.type === 2;
      }
      function p(e) {
        return e?.type === 3;
      }
      var g =
        (((o = {})[(o.VIDEO = 0)] = "VIDEO"),
        (o[(o.CAMERA_PREVIEW = 1)] = "CAMERA_PREVIEW"),
        (o[(o.HAVEN = 2)] = "HAVEN"),
        o);
      let f = { 0: 320, 1: 160, 2: 320 },
        I = { 0: 960, 1: 480, 2: 960 },
        S = { 0: 200, 1: 160, 2: 200 };
    },
    568598(e, t, n) {
      n.d(t, { Ay: () => L, KU: () => y, Qt: () => N, r4: () => R }), n(321073);
      var i,
        l = n(735438),
        a = n(713402),
        r = n(717558),
        s = n(933958),
        o = n(259464),
        d = n(652896),
        u = n(616356),
        c = n(495544),
        h = n(470710),
        E = n(734057),
        A = n(51760),
        _ = n(485296),
        p = n(287809),
        g = n(803301),
        f = n(977997),
        I = n(562153),
        S = n(90575),
        T = n(806931),
        m = n(652215),
        C = n(731854);
      let O = "__EMBEDDED_ACTIVITIES__";
      function N(e) {
        let { applicationId: t, instanceId: n } = e;
        return null != n ? `activity-${t}-${n}` : `activity-${t}`;
      }
      function y(e) {
        switch (e.type) {
          case T.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
          case T.lp.HIDDEN_STREAM:
          case T.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, S.A)(e.userNick, e.user)}\x03`;
          case T.lp.USER:
            let t = "\x05";
            return (
              e.voiceState?.selfVideo
                ? (t = "\x03")
                : e.voiceState?.selfStream && (t = "\x04"),
              `${t}${(0, S.A)(e.userNick, e.user)}`
            );
        }
      }
      var R =
        (((i = {}).VIDEO = "VIDEO"),
        (i.STREAM = "STREAM"),
        (i.FILTERED = "FILTERED"),
        (i.SPEAKING = "SPEAKING"),
        (i.ACTIVITY = "ACTIVITY"),
        (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
        i);
      class L {
        channelId;
        call;
        participants = {};
        lastSpoke = {};
        guildRingingUsers = new Set();
        poppedOutParticipants = new Set();
        participantByIndex = new a.J((e) => {
          let t = [];
          return (
            e.type === T.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === T.lp.USER && e.voiceState?.selfVideo
              ? (t.push("VIDEO"),
                e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
              : (0, T.Ay)(e) &&
                (t.push("STREAM"),
                e.type === T.lp.HIDDEN_STREAM ||
                  null == e.streamId ||
                  e.isPoppedOut ||
                  t.push("FILTERED")),
            e.type === T.lp.ACTIVITY && t.push("ACTIVITY"),
            ("isPoppedOut" in e && e.isPoppedOut) || t.push("NOT_POPPED_OUT"),
            t
          );
        }, y);
        constructor(e) {
          this.channelId = e;
        }
        get version() {
          return this.participantByIndex.version;
        }
        size(e) {
          return this.participantByIndex.size(e);
        }
        toArray(e) {
          return this.participantByIndex.values(e, !0);
        }
        rebuild() {
          let e = E.A.getChannel(this.channelId);
          if (
            null == e ||
            e.type === m.rbe.GUILD_TEXT ||
            ((this.call = h.A.getCall(this.channelId)),
            e.isPrivate() && (null == this.call || this.call.unavailable))
          )
            return !1;
          let t = new Set(
            e.isGuildVocalOrThread()
              ? Object.keys(f.A.getVoiceStatesForChannel(e.id))
              : e.recipients,
          );
          return (
            t.add(c.default.getId()),
            this.guildRingingUsers.size > 0 &&
              (t = new Set([...t, ...this.guildRingingUsers])),
            u.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
              let { ownerId: n } = e;
              return t.add(n);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            t.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
          );
        }
        getParticipant(e) {
          return this.participantByIndex.get(e) ?? null;
        }
        updateEmbeddedActivities() {
          return this.updateParticipant(O);
        }
        hasEmbeddedActivity() {
          return this.size("ACTIVITY") > 0;
        }
        updateParticipant(e) {
          let t = this.participants[e],
            n =
              e === O
                ? this._getParticipantsForEmbeddedActivities()
                : this._getParticipantsForUser(e);
          return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
              this.participantByIndex.delete(e.id);
            }),
            n.forEach((e) => {
              this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
          );
        }
        updateParticipantSpeaking(e) {
          return (
            this.participants[e]?.reduce((t, n) => {
              if (n.type === T.lp.USER) {
                let i = (0, r.R)({ userId: e, checkIsMuted: !0 }),
                  l = _.A.isSoundSharing(e),
                  a = this.participantByIndex.get(n.id);
                return a?.type === T.lp.USER &&
                  a.speaking === i &&
                  a.soundsharing === l
                  ? t
                  : (i && (this.lastSpoke[e] = Date.now()),
                    this.participantByIndex.set(n.id, {
                      ...n,
                      speaking: i,
                      lastSpoke: this.lastSpoke[e],
                      soundsharing: l,
                    }),
                    !0);
              }
              return t;
            }, !1) ?? !1
          );
        }
        updateParticipantQuality(e, t, n) {
          return (
            this.participants[e]?.reduce(
              (e, i) =>
                i.type === T.lp.STREAM
                  ? (this.participantByIndex.set(i.id, {
                      ...i,
                      maxResolution: t,
                      maxFrameRate: n,
                    }),
                    !0)
                  : e,
              !1,
            ) ?? !1
          );
        }
        updateGuildRingingUsers(e, t) {
          t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
        }
        updateParticipantPoppedOut(e, t) {
          t
            ? this.poppedOutParticipants.add(e)
            : this.poppedOutParticipants.delete(e);
        }
        _getEmbeddedActivities() {
          let e = s.Ay.getEmbeddedActivitiesForChannel(this.channelId),
            t = s.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
          return null == t
            ? e
            : (0, l.uniqBy)([...e, t], (e) => e.compositeInstanceId);
        }
        _getParticipantsForEmbeddedActivities() {
          return this._getEmbeddedActivities().map((e, t) => ({
            type: T.lp.ACTIVITY,
            id: N({
              applicationId: e.applicationId,
              instanceId: e.compositeInstanceId,
            }),
            applicationId: e.applicationId,
            activityType: m.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: E.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
          }));
        }
        _getParticipantsForUser(e) {
          let t,
            n,
            i = [],
            l = p.default.getUser(e);
          if (null == l) return i;
          let a = f.A.getVoiceStateForChannel(this.channelId, e),
            s = f.A.getVoicePlatformForChannel(this.channelId, e),
            h = E.A.getChannel(this.channelId),
            S = h?.getGuildId(),
            m =
              (this.call?.ringing?.includes(e) ||
                this.guildRingingUsers.has(e)) ??
              !1;
          (null != a || m) &&
            ((t = {
              type: T.lp.USER,
              ...g.A.getUserStreamData(e, S),
              user: l,
              id: l.id,
              voiceState: a,
              voicePlatform: s,
              speaking: (0, r.R)({ userId: e, checkIsMuted: !0 }),
              lastSpoke: this.lastSpoke[e] ?? 0,
              soundsharing: _.A.isSoundSharing(e),
              ringing: m,
              userNick: I.Ay.getName(S, this.channelId, l),
              userAvatarDecoration: (0, o.U)(l, S),
              localVideoDisabled: A.Ay.isLocalVideoDisabled(l.id),
              isPoppedOut: this.poppedOutParticipants.has(l.id),
            }),
            i.push(t));
          let O =
            u.A.getStreamForUser(e, S) ?? u.A.getActiveStreamForUser(e, S);
          if (null != O && O.channelId === this.channelId) {
            let t = (0, d._z)(O),
              r = this.getParticipant(t),
              s =
                O.ownerId === c.default.getId() &&
                u.A.isSelfStreamHidden(this.channelId),
              o =
                r?.type === T.lp.STREAM
                  ? {
                      maxResolution:
                        null != r.maxResolution
                          ? { ...r.maxResolution }
                          : void 0,
                      maxFrameRate: r.maxFrameRate,
                    }
                  : null;
            (n = {
              ...g.A.getUserStreamData(e, S, C.x.STREAM),
              ...o,
              type: s ? T.lp.HIDDEN_STREAM : T.lp.STREAM,
              id: t,
              userVideo: a?.selfVideo ?? !1,
              user: l,
              userNick: I.Ay.getName(S, this.channelId, l),
              stream: O,
              isPoppedOut: this.poppedOutParticipants.has(t),
            }),
              i.push(n);
          }
          return i;
        }
      }
    },
    325909(e, t, n) {
      n.d(t, { lQ: () => I, oP: () => g, pW: () => f });
      var i = n(17928),
        l = n(890615),
        a = n(721592),
        r = n(164891),
        s = n(495544),
        o = n(470710),
        d = n(734057),
        u = n(696451),
        c = n(834942),
        h = n(576705),
        E = n(290863),
        A = n(994500),
        _ = n(977997),
        p = n(652215);
      function g(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "useCanRing",
          n = arguments.length > 2 ? arguments[2] : void 0,
          l = (0, i.bG)([d.A], () => d.A.getChannel(n)),
          a = (0, i.bG)([s.default], () => s.default.getId() === e.id),
          r = (0, i.bG)([A.A], () => A.A.isFriend(e.id)),
          o = (0, i.bG)(
            [E.A],
            () => E.A.getStatus(e.id) === p.clD.DND && l?.guild_id != null,
          ),
          u = l?.type,
          c = null != u && p.kvI.CALLABLE.has(u),
          h = I(e, t, l);
        return (
          r && !o && !a && !e.bot && !e.system && !e.isProvisional && (h || c)
        );
      }
      function f(e) {
        let t = p.kvI.CALLABLE.has(e.type),
          n = e.type === p.rbe.GUILD_VOICE;
        if (t) {
          let t = o.A.getCall(e.id);
          return (
            null != t && null != t.messageId && !o.A.isCallUnavailable(e.id)
          );
        }
        if (n) {
          let { enabled: t } = r.A.getCurrentConfig({
              guildId: e.guild_id,
              location: "ring",
            }),
            n = _.A.getVoiceState(e.guild_id, s.default.getId());
          return t && null != n && n.channelId === e.id;
        }
        return !1;
      }
      function I(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "useCanRingToGuildVoiceChannel",
          n = arguments.length > 2 ? arguments[2] : void 0,
          s = (0, i.bG)([h.A], () => null != n && (0, l.A)(n, h.A)),
          o = (0, i.bG)([u.Ay, c.A], () => {
            let t = n?.guild_id;
            if (null == t) return !1;
            let i = null != u.Ay.getMember(t, e.id),
              l = c.A.getCheck(t).canChat;
            return i && l;
          }),
          { needSubscriptionToAccess: d } = (0, a.A)(n?.id),
          { enabled: E } = r.A.useExperiment({
            guildId: n?.guild_id,
            location: t,
          }),
          A = n?.type === p.rbe.GUILD_VOICE;
        return E && A && o && s && !d;
      }
    },
    74329(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(627968);
      n(64700);
      var l = n(17928),
        a = n(192308),
        r = n(477782),
        s = n(695366),
        o = n(652896),
        d = n(834757),
        u = n(495544),
        c = n(116956),
        h = n(985018);
      function E(e, t, E) {
        let A = (0, d.AO)(e),
          _ = (0, l.bG)([u.default], () => u.default.getId());
        if (null == e) return null;
        let p = (0, o._z)(e),
          g = c.A.getVideoStats(p) ?? {},
          f = {
            media_session_id: c.A.getMediaSessionId(p),
            rtc_connection_id: c.A.getRtcConnectionId(p),
            stream_region: c.A.getRegion(p),
            max_viewers: c.A.getMaxViewers(p),
            ...g,
          };
        return (0, i.jsx)(r.Dr, {
          id: "report-stream-problem",
          color: "danger",
          label: h.intl.string(h.t.sdnCxV),
          action: () => {
            E?.(),
              null != e &&
                (0, a.openModalLazy)(async () => {
                  let { default: t } = await Promise.all([
                    n.e("17171"),
                    n.e("86889"),
                  ]).then(n.bind(n, 292208));
                  return (n) =>
                    (0, i.jsx)(t, {
                      stream: e,
                      streamApplication: A,
                      isStreamer: _ === e?.ownerId,
                      analyticsData: f,
                      ...n,
                    });
                });
          },
          icon: s.E,
          leadingAccessory: { type: "icon", icon: s.E },
        });
      }
    },
    480890(e, t, n) {
      n.d(t, { Y: () => u, s: () => d });
      var i = n(495544),
        l = n(734057),
        a = n(763827),
        r = n(954571),
        s = n(806931),
        o = n(652215);
      function d(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { targetUserId: i, tileType: l, entrypoint: a } = n;
        return (n) =>
          u({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: a ?? s.GK.CONTEXT_MENU,
            targetUserId: i,
            tileType: l,
          });
      }
      function u(e) {
        let {
            menuItemProps: { type: t },
            menuName: n,
            location: s,
            entrypoint: d,
            targetUserId: u,
            tileType: c,
          } = e,
          h = a.A.getChannelId(),
          E = a.A.getGuildId(),
          A = l.A.getChannel(h)?.type,
          _ = i.default.getId();
        r.default.track(o.HAw.CALL_MENU_ITEM_INTERACTED, {
          location: s,
          menu_name: n,
          menu_item_type: t,
          entrypoint: d,
          targets_self: null == u ? void 0 : u === _,
          guild_id: E,
          channel_id: h,
          channel_type: A,
          tile_type: c,
        });
      }
    },
    556525(e, t, n) {
      n.d(t, { O: () => d, v: () => u });
      var i,
        l = n(64700),
        a = n(17928),
        r = n(775602),
        s = n(531685);
      function o(e, t) {
        return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
      }
      var d =
        (((i = {}).BOTH = "BOTH"),
        (i.INSET_ONLY = "INSET_ONLY"),
        (i.OUTSET_ONLY = "OUTSET_ONLY"),
        i);
      function u(e) {
        let {
            isSpeaking: t,
            voiceDb: i,
            spreadDirection: d = "BOTH",
            maxOuterSpreadRadius: u = 3,
            maxInnerSpreadRadius: c = 1,
            hideIfVolumeMissing: h = !1,
          } = e,
          E = n(773371).default,
          {
            shouldReduceMotion: A,
            useForcedColors: _,
            isAppFocusedOrOverlayVisible: p,
          } = (0, a.cf)([r.A, s.A, E], () => ({
            shouldReduceMotion: r.A.useReducedMotion,
            useForcedColors: r.A.useForcedColors,
            isAppFocusedOrOverlayVisible:
              s.A.isAppFocused() || null != E.getFocusedPID(),
          }));
        return l.useMemo(() => {
          let e = {};
          if (i === -1 / 0 && h) return e;
          if (t) {
            let t = 0,
              n = 2,
              l = 3;
            i !== -1 / 0 &&
              !A &&
              p &&
              ((t = "INSET_ONLY" === d ? 0 : o(i, u)),
              (n = "OUTSET_ONLY" === d ? 0 : o(i, c)),
              (l = "OUTSET_ONLY" === d ? 0 : n + 1));
            let a = _ ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = `0 0 0 ${t}px ${a}, inset 0 0 0 ${n}px ${a}, inset 0 0 0 ${l}px var(--background-base-lower)`;
          }
          return p && (e.transition = "box-shadow 50ms ease-out"), e;
        }, [t, p, A, _, i, d, u, c, h]);
      }
    },
    883600(e, t, n) {
      n.d(t, { A: () => T });
      var i = n(17928),
        l = n(506774),
        a = n(228366),
        r = n(773669),
        s = n(253932),
        o = n(617617),
        d = n(559868);
      let u = {},
        c = {},
        h = null,
        E = null,
        A = null,
        _ = "lastChangeLogDate",
        p = null,
        g = null,
        f = new Set();
      function I() {
        p = s.pK.getSetting();
      }
      class S extends i.Ay.Store {
        static displayName = "ChangelogStore";
        initialize() {
          this.waitFor(r.default, o.A),
            this.syncWith([r.default], () => !0),
            this.syncWith([o.A], I);
          let e = l.w.get(_);
          if (null != e)
            try {
              g = new Date(e);
            } catch {
              l.w.remove(_);
            }
        }
        getChangelog(e, t) {
          return u[e]?.[t] ?? null;
        }
        latestChangelogId() {
          return h;
        }
        getChangelogLoadStatus(e, t) {
          return c[e]?.[t] ?? d._f.NOT_LOADED;
        }
        hasLoadedConfig() {
          return null != A;
        }
        getConfig() {
          return A;
        }
        overrideId() {
          return E;
        }
        lastSeenChangelogId() {
          return p;
        }
        lastSeenChangelogDate() {
          return g;
        }
        getStateForDebugging() {
          return {
            changelogConfig: A,
            loadedChangelogs: c,
            lastSeenChangelogId: p,
            lastSeenChangelogDate: g,
          };
        }
        isLocked() {
          return f.size > 0;
        }
      }
      let T = new S(a.h, {
        CHANGE_LOG_LOCK: function (e) {
          let { key: t } = e;
          if (f.has(t)) return !1;
          (f = new Set(f)).add(t);
        },
        CHANGE_LOG_UNLOCK: function (e) {
          let { key: t } = e;
          if (!f.has(t)) return !1;
          (f = new Set(f)).delete(t);
        },
        CHANGE_LOG_SET_CONFIG: function (e) {
          let { config: t, latestChangelogId: n } = e;
          (h = n), (A = t);
        },
        CHANGE_LOG_FETCH_SUCCESS: function (e) {
          let { id: t, changelog: n } = e;
          null == u[t] && (u[t] = {}),
            (u[t][n.locale] = {
              id: t,
              date: n.date,
              body: n.content,
              revision: 1,
              locale: n.locale,
              [n.asset_type === d.PW.YOUTUBE_VIDEO_ID
                ? "youtube_video_id"
                : "image"]: n.asset,
            }),
            null == c[t] && (c[t] = {}),
            (c[t][n.locale] = d._f.LOADED_SUCCESS);
        },
        CHANGE_LOG_FETCH_FAILED: function (e) {
          let { id: t, locale: n } = e;
          if (null != u[t] && null != u[t][n]) return !1;
          null == c[t] && (c[t] = {}), (c[t][n] = d._f.LOADED_FAILURE);
        },
        CHANGE_LOG_SET_OVERRIDE: function (e) {
          let { id: t } = e;
          E = t;
        },
        CHANGE_LOG_MARK_SEEN: function (e) {
          let { changelogDate: t } = e;
          (g = new Date(t)), l.w.set(_, t);
        },
      });
    },
    717125(e, t, n) {
      n.d(t, { A: () => R });
      var i = n(17928),
        l = n(228366),
        a = n(836039),
        r = n(98318),
        s = n(855918),
        o = n(164956),
        d = n(95701),
        u = n(34457),
        c = n(734057),
        h = n(696451),
        E = n(317525),
        A = n(71393),
        _ = n(287809),
        p = n(652215);
      let g = {},
        f = new Set();
      function I(e) {
        let { guildId: t, role: n, isPreviewingRoles: i } = e;
        return (
          !!(0, r.U)(n) &&
          !!(
            i ||
            (0, r.X)(n ?? void 0) ||
            (function (e, t) {
              if (null == e) return !1;
              let n = _.default.getCurrentUser();
              if (null == n) return !1;
              let i = h.Ay.getMember(t, n.id);
              return null != i && i.roles.includes(e.id);
            })(n, t)
          )
        );
      }
      function S(e, t) {
        if (
          !t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE) &&
          !t.features.has(p.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        )
          return !1;
        let n = o.A.isViewingServerShop(t.id);
        for (let i of Object.keys(e.permissionOverwrites)) {
          let l = E.A.getRole(t.id, i);
          if (!I({ guildId: t.id, role: l, isPreviewingRoles: n })) continue;
          let a = e.permissionOverwrites[i];
          if ((0, s.Uj)(e, a)) return !0;
        }
        let i = E.A.getEveryoneRole(t),
          l = !(0, u._m)(i, p.xBc.VIEW_CHANNEL),
          a = (0, s.AN)(e, e.permissionOverwrites[t.id]);
        if (l && !a) {
          for (let e of E.A.getSortedRoles(t.id))
            if (
              I({ guildId: t.id, role: e, isPreviewingRoles: n }) &&
              (0, s.iR)(e)
            )
              return !0;
        }
        return !1;
      }
      function T(e, t) {
        let n = g[e];
        if (null == n) return !1;
        let i = c.A.getChannel(t);
        if (null == i) return !1;
        let l = A.A.getGuild(i.getGuildId());
        if (null == l) return !1;
        let a = n.has(t),
          r = S(i, l);
        return a !== r && (r ? n.add(t) : n.delete(t), !0);
      }
      function m() {
        (g = {}), f.clear();
      }
      function C(e) {
        let { guild: t } = e;
        delete g[t.id];
      }
      function O(e) {
        let { guildId: t } = e;
        delete g[t];
      }
      function N(e) {
        let { channel: t } = e;
        return null != t.guild_id && T(t.guild_id, t.id);
      }
      class y extends i.Ay.Store {
        static displayName = "GatedChannelStore";
        initialize() {
          this.waitFor(c.A, h.Ay, E.A, A.A, o.A, _.default);
        }
        isChannelGated(e, t) {
          if (null == e) return !1;
          let n = g[e];
          return (
            null == n &&
              (!(function (e) {
                let t = A.A.getGuild(e);
                if (null == t) return;
                let n = (g[e] = new Set());
                if (!t.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))
                  return;
                let i = c.A.getMutableGuildChannelsForGuild(e);
                for (let e in i) {
                  let l = i[e];
                  S(l, t) && n.add(l.id);
                }
              })(e),
              (n = g[e])),
            null != n && n.has(t)
          );
        }
        isChannelGatedAndVisible(e, t) {
          return null != e && this.isChannelGated(e, t) && !f.has(e);
        }
        isChannelOrThreadParentGated(e, t) {
          if (null == e) return !1;
          if (this.isChannelGated(e, t)) return !0;
          let n = c.A.getChannel(t);
          return (
            !!(null != n && null != n.parent_id && d.Le.has(n?.type)) &&
            this.isChannelOrThreadParentGated(e, n.parent_id)
          );
        }
      }
      let R = new y(l.h, {
        CONNECTION_OPEN: m,
        OVERLAY_INITIALIZE: m,
        CACHE_LOADED_LAZY: m,
        GUILD_CREATE: C,
        GUILD_UPDATE: C,
        GUILD_DELETE: C,
        GUILD_ROLE_CREATE: O,
        GUILD_ROLE_UPDATE: O,
        GUILD_ROLE_DELETE: O,
        IMPERSONATE_UPDATE: O,
        IMPERSONATE_STOP: O,
        CHANNEL_CREATE: N,
        CHANNEL_DELETE: N,
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = !1;
          for (let e of t)
            null != e.guild_id && T(e.guild_id, e.id) && (n = !0);
          return n;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
          let { guildId: t, restrictions: n } = e;
          (0, a.Y5)(n) ? f.add(t) : f.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
          let { guildId: t } = e;
          f.add(t);
        },
      });
    },
    408018(e, t, n) {
      function i() {
        return {
          textValue: "",
          richValue: [{ type: "line", children: [{ text: "" }] }],
        };
      }
      function l(e) {
        return { textValue: e, richValue: r(e) };
      }
      n.d(t, { N3: () => i, QR: () => s, ur: () => l, x7: () => r });
      let a = Object.freeze([
        Object.freeze({
          type: "line",
          children: Object.freeze([Object.freeze({ text: "" })]),
        }),
      ]);
      function r(e) {
        return "" !== e
          ? e
              .split("\n")
              .map((e) => ({ type: "line", children: [{ text: e }] }))
          : a;
      }
      function s(e) {
        switch (e.type) {
          case "userMention":
            return { type: "userMention", userId: e.userId };
          case "channelMention":
            return { type: "channelMention", channelId: e.channelId };
          case "soundboard":
            return {
              type: "soundboard",
              guildId: e.guildId,
              soundId: e.soundId,
            };
          case "roleMention":
            return { type: "roleMention", roleId: e.roleId };
          case "textMention":
            return { type: "textMention", text: e.name };
          case "emoji":
            return {
              type: "emoji",
              name: e.emoji.name,
              surrogate: e.emoji.surrogate,
            };
          case "customEmoji":
            return {
              type: "customEmoji",
              emojiId: e.emoji.emojiId,
              name: e.emoji.name,
              animated: e.emoji.animated,
            };
          case "testInlineVoid":
            throw Error("Unable to convert test types");
        }
        return null;
      }
    },
    315949(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(354328),
        l = n(747198);
      function a(e, t) {
        let n = e?.paymentGateway,
          a = (0, i.A)("shop_disable_cache"),
          r = (0, i.A)("shop_include_unpublished");
        return (0, l.i)(
          {
            noCache: a,
            includeUnpublished: r,
            paymentGateway: n,
            logPerf: e?.logPerf,
          },
          void 0,
          t,
        );
      }
    },
    139136(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(203632);
      n(881106);
      var o = n(480335),
        d = n(621395),
        u = n(778765);
      let c = (e) => {
        let {
            skuId: t,
            isHighlighted: n,
            removeSetHeight: a = !1,
            withScaleAnimation: c = !1,
            delayProfileEffectIntro: h = !1,
            hideBackground: E = !1,
          } = e,
          [A, _] = l.useState(!0);
        return (l.useEffect(() => {
          if (!0 !== c) _(!1);
          else {
            let e = setTimeout(() => {
              _(!1);
            }, 500);
            return () => {
              clearTimeout(e);
            };
          }
        }, [c]),
        null == t)
          ? null
          : (0, i.jsxs)("div", {
              className: r()(d.i1, { [d.qy]: c, [d.pE]: !a, [d.JQ]: E }),
              children: [
                (0, i.jsx)("img", {
                  src: u.A,
                  alt: "",
                  className: d.VH,
                  "aria-hidden": !0,
                  draggable: !1,
                }),
                !A &&
                  (0, i.jsx)(o.A, {
                    skuId: t,
                    useThumbnail: !0,
                    autoPlay: c,
                    restartMethod: s.HL.FromStart,
                    resetOnHover: !0,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    delayIntro: h,
                    shopPreview: !0,
                  }),
              ],
            });
      };
    },
    245068(e, t, n) {
      n.d(t, { X: () => S });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(17928),
        o = n(462887),
        d = n(778712),
        u = n(736653),
        c = n(775602),
        h = n(320447),
        E = n(442759),
        A = n(344346),
        _ = n(139136),
        p = n(929283),
        g = n(806771),
        f = n(180171),
        I = n(989099);
      let S = l.memo(function (e) {
        let {
            product: t,
            isHighlighted: n,
            user: l,
            forCollectedModal: a,
            staticPreviewClassName: S,
          } = e,
          {
            firstProfileEffect: T,
            firstAvatarDecoration: m,
            firstNameplate: C,
          } = (0, E.f5)(t),
          { enabled: O } = (0, h.P)("BundlePreview"),
          N = (0, s.bG)([c.A], () => c.A.useReducedMotion),
          y = (0, u.Ay)(),
          R = (0, o.q)(y),
          L = null != C && null != m && null != T,
          v = L ? d._3.SIZE_72 : d._3.SIZE_80,
          D = t.previewAssets?.fgStatic;
        if (O && null != D) {
          let e = n && !N,
            l = t.previewAssets?.fgAnimated;
          return (0, i.jsx)("div", {
            className: g.EJ,
            children: (0, i.jsx)("img", {
              className: r()(g.d2, S, { [g.M2]: n }),
              src: e && null != l ? l : D,
              alt: t.name,
            }),
          });
        }
        return (0, i.jsxs)("div", {
          className: r()(g.kL, { [g.ib]: !L, [g.c$]: L }),
          children: [
            null != T &&
              (0, i.jsx)("div", {
                className: g.NM,
                children: (0, i.jsx)(_.A, {
                  isHighlighted: n,
                  skuId: T.skuId,
                  removeSetHeight: !0,
                  delayProfileEffectIntro: a,
                  withScaleAnimation: a,
                }),
              }),
            L &&
              (0, i.jsx)("div", {
                className: g.M4,
                children: (0, i.jsx)(A.A, {
                  user: l,
                  nameplate: C,
                  isHighlighted: n,
                  showPlaceholderUser: !n,
                  pendingAvatarDecoration: m,
                }),
              }),
            null != m &&
              (0, i.jsx)("div", {
                className: g._P,
                children: (0, i.jsx)(p.i, {
                  item: m,
                  user: l,
                  avatarSize: v,
                  isHighlighted: n,
                  avatarPlaceholderSrc: R ? I : f,
                  className: g.my,
                }),
              }),
          ],
        });
      });
    },
    746793(e, t, n) {
      n.d(t, { A: () => U }), n(321073);
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(735438),
        o = n.n(s),
        d = n(17928),
        u = n(506774),
        c = n(475358),
        h = n(349288),
        E = n(274997),
        A = n(785796),
        _ = n(775602),
        p = n(446458),
        g = n(552122),
        f = n(400492),
        I = n(312671),
        S = n(210714),
        T = n(773669),
        m = n(437959),
        C = n(828184),
        O = n(723702),
        N = n(19575),
        y = n(902811),
        R = n(652215),
        L = n(985018),
        v = n(417376);
      class D extends l.PureComponent {
        videoRef = null;
        _noProblemsTimeout = null;
        _problemsTimeout = null;
        _connectedSound = this.createSound();
        _loadingText = (function () {
          let e = [
            L.intl.string(L.t.Ex79K6),
            L.intl.string(L.t["+v5zsT"]),
            L.intl.string(L.t["RLx6+Y"]),
            L.intl.string(L.t.Q1PZkN),
            L.intl.string(L.t.x7sfVg),
            L.intl.format(L.t.PHuQsQ, {
              tabHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "tab", className: v.P }, t),
            }),
            L.intl.string(L.t["il/GZt"]),
            L.intl.string(L.t["5qAKlq"]),
            L.intl.format(L.t.FVVp79, {
              F6Hook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "f6", className: v.P }, t),
              tabHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "tab", className: v.P }, t),
            }),
            L.intl.string(L.t["7Y1hFH"]),
            L.intl.string(L.t.UcCW71),
            L.intl.string(L.t.E5Ghfc),
            L.intl.string(L.t.bANqo8),
            L.intl.string(L.t.yOEVDr),
            L.intl.string(L.t["u0Ra/G"]),
            L.intl.string(L.t.un4cQ7),
            L.intl.string(L.t["2cyYx1"]),
            L.intl.string(L.t.KCmze1),
            L.intl.string(L.t.I98MEE),
            L.intl.format(L.t.c0YCIx, {}),
            L.intl.string(L.t.z8AvIN),
            L.intl.string(L.t.IjX3P1),
            L.intl.string(L.t.lg3Ckc),
            L.intl.string(L.t["4GaLhY"]),
            L.intl.string(L.t.qHKbUw),
            L.intl.string(L.t.mJxKDw),
            L.intl.string(L.t.iiQBXF),
            L.intl.string(L.t.YPD46Q),
            L.intl.string(L.t.O8Bpga),
            L.intl.string(L.t.xzFwfi),
            L.intl.string(L.t["4G3fsX"]),
            L.intl.string(L.t["/jPyKC"]),
            L.intl.string(L.t["8x7D5c"]),
            L.intl.string(L.t.G6Q8H3),
            L.intl.string(L.t["9Cx+xL"]),
            L.intl.string(L.t.WsZ8dW),
            L.intl.string(L.t.btoe7M),
            L.intl.string(L.t.E6Y0j7),
            L.intl.string(L.t["7KZ81/"]),
            L.intl.string(L.t.hm7OKu),
            L.intl.string(L.t["H535i+"]),
            L.intl.string(L.t["08WJUR"]),
            L.intl.string(L.t.hhtfyi),
            L.intl.string(L.t.on980U),
            L.intl.string(L.t.AL6c01),
            L.intl.string(L.t.iLTeF6),
            L.intl.string(L.t.b3vSu7),
            L.intl.string(L.t.f8ao58),
            L.intl.format(L.t["1v1h8o"], { asterisks: "**" }),
            L.intl.format(L.t.MUlAVW, {
              quickSwitcherHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "mod+k", className: v.P }, t),
            }),
            L.intl.format(L.t.aes5VI, {
              markUnreadHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "alt+click", className: v.P }, t),
            }),
            L.intl.format(L.t.md9Svv, {
              markServerUnreadHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "shift+esc", className: v.P }, t),
            }),
            L.intl.format(L.t["X0Tu+u"], {
              navigateUnreadHook: (e, t) =>
                (0, i.jsx)(
                  c.e,
                  { shortcut: "shift+alt+up", className: v.P },
                  t,
                ),
              downHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "down", className: v.P }, t),
            }),
            L.intl.format(L.t.AkoeIY, {
              keyboardShortcutsHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "mod+/", className: v.P }, t),
            }),
            L.intl.format(L.t.P9sfAH, {
              messageNewlineHook: (e, t) =>
                (0, i.jsx)(
                  c.e,
                  { shortcut: "shift+return", className: v.P },
                  t,
                ),
            }),
            L.intl.format(L.t["3Ox33f"], {
              shiftHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "shift", className: v.P }, t),
            }),
            L.intl.format(L.t.enCV6b, {
              upHook: (e, t) =>
                (0, i.jsx)(c.e, { shortcut: "up", className: v.P }, t),
            }),
          ];
          return (
            T.default.locale.startsWith("en-") &&
              e.push(L.intl.string(L.t.dQ9Wqk)),
            e[o().random(e.length - 1)]
          );
        })();
        _eventLoadingText = (function () {
          let e = g.A.getLoadingTips();
          if (null != e && e.length > 0) return e[o().random(e.length - 1)];
        })();
        constructor(e) {
          super(e);
          const { connected: t } = e;
          (this.state = { ready: t, hide: t, problems: !1, shouldRender: !t }),
            (this._connectedSound.volume = 1);
        }
        createSound() {
          let { soundpack: e } = this.props,
            t = (0, f.aN)("discodo", e);
          return (t.volume = 1), t;
        }
        componentDidMount() {
          this.setProblemsTimeout(), this.props.connected && (0, S.D)();
        }
        componentDidUpdate(e, t) {
          let { ready: n, hide: i, problems: l } = this.state,
            { connected: a, soundpack: r } = this.props,
            s = a && n && !i && !l;
          e.soundpack !== r && (this._connectedSound = this.createSound()),
            e.connected !== a || s
              ? (a && (0, S.D)(),
                a &&
                  null != this.videoRef &&
                  u.w.get(R.wqg) &&
                  this._connectedSound.play(),
                this.setState({ problems: !1, hide: a }))
              : t.hide !== i
                ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(),
                  this.setState({ shouldRender: !0 }),
                  setTimeout(() => this.setState({ shouldRender: !i }), 200))
                : t.problems !== l && l && A.A.checkIncidents();
        }
        componentWillUnmount() {
          this.clearProblemsTimeout();
        }
        handleReady = () => {
          this.setState({ ready: !0 }),
            (0, O.isDesktop)() &&
              (N.Ay.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]),
              N.Ay.send("UPDATE_OPEN_ON_STARTUP"));
        };
        setVideoRef = (e) => {
          this.videoRef = e;
        };
        setProblemsTimeout = () => {
          null == this._problemsTimeout &&
            (this._problemsTimeout = setTimeout(
              () => this.setState({ problems: !0 }),
              1e4,
            ));
        };
        clearProblemsTimeout = () => {
          clearTimeout(this._problemsTimeout), (this._problemsTimeout = null);
        };
        render() {
          let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
          if (!this.state.shouldRender) return null;
          {
            let l = this._loadingText,
              a = null;
            return (
              null != this._eventLoadingText && (l = this._eventLoadingText),
              null != t && ((l = t.name), (a = t.incident_updates[0].body)),
              (0, i.jsxs)("div", {
                className: v.kL,
                "data-fade": n,
                style: {
                  "--connecting-container-fade-duration": "200ms",
                  "--connecting-content-fade-duration": "150ms",
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: v.Qs,
                    children: [
                      (0, i.jsx)(y.A, {
                        autoPlay: !0,
                        loop: !e,
                        setRef: this.setVideoRef,
                        onReady: this.handleReady,
                        className: r()(v.bE, this.state.ready ? v.Gc : ""),
                      }),
                      (0, i.jsxs)("div", {
                        className: v.Qq,
                        children: [
                          null != t
                            ? null
                            : (0, i.jsx)("div", {
                                className: v.mu,
                                children: L.intl.string(L.t.v0R1Lh),
                              }),
                          (0, i.jsx)("div", {
                            className: null != t ? v.DD : v.uN,
                            children: l,
                          }),
                          (0, i.jsx)("div", { className: v.rf, children: a }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: r()(v.Bk, { [v.ly]: this.state.problems }),
                    children: [
                      (0, i.jsx)("div", {
                        className: v.u1,
                        children: L.intl.string(L.t.AG2zPM),
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsxs)(h.Anchor, {
                            className: v.AR,
                            href: R.qF7.TWITTER_SUPPORT,
                            target: "_blank",
                            children: [
                              (0, i.jsx)(E.p, {
                                size: "xs",
                                color: "currentColor",
                                className: v.Kk,
                              }),
                              L.intl.string(L.t.KlyTbj),
                            ],
                          }),
                          (0, i.jsxs)(h.Anchor, {
                            className: v.gy,
                            href: R.qF7.STATUS,
                            target: "_blank",
                            children: [
                              (0, i.jsx)(C.A, { className: v.Kk }),
                              L.intl.string(L.t.AgXXyy),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        }
      }
      let U = d.Ay.connectStores([p.A, m.A, I.A, _.A], () => ({
        isTryingToConnect: p.A.isTryingToConnect(),
        connected: p.A.isConnected(),
        incident: m.A.getIncident(),
        soundpack: I.A.getSoundpack(),
        reducedMotion: _.A.useReducedMotion,
      }))((e) => {
        let {
          isTryingToConnect: t,
          connected: n,
          incident: l,
          soundpack: a,
          reducedMotion: r,
        } = e;
        return t
          ? (0, i.jsx)(D, {
              reducedMotion: r,
              soundpack: a,
              connected: n,
              incident: l,
            })
          : null;
      });
    },
    608960(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(810531),
        l = n(548965),
        a = n(137903),
        r = n(770335);
      function s(e, t) {
        let n = {};
        for (let l of t)
          n[l.id] = {
            [i.L]: "RawGuildEmoji",
            guildId: e,
            id: l.id,
            animated: l.animated,
            name: l.name,
            require_colons: l.require_colons,
            available: l.available,
            roles: l.roles,
            managed: l.managed,
            version: l.version,
            type: r.i.GUILD,
          };
        return n;
      }
      class o extends a.yW {
        static displayName = "RawGuildEmojiStore";
        database = this.addKKVDatabase("guild_emojis");
        stateWrapper() {
          return this.database;
        }
        getGuildEmojis(e) {
          return this.database.getNullablePartition(e);
        }
      }
      function d(e, t, n) {
        if ("full_sync" === t.op) n.setPartition(e, s(e, t.items));
        else {
          let i = n.getNullablePartition(e);
          if (null == i) n.setPartition(e, s(e, t.writes));
          else if (t.writes.length > 0 || t.deletes.length > 0) {
            let l = { ...i };
            for (let e of t.deletes) delete l[e];
            for (let n of t.writes) Object.assign(l, s(e, [n]));
            n.setPartition(e, l);
          }
        }
      }
      let u = new o(
        {
          LOGOUT: (e, t) => t.clear(),
          BACKGROUND_SYNC: (e, t) => t.clear(),
          RESET_SOCKET: (e, t) => t.clear(),
          CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
              l = new Set(n.map((e) => e.id));
            for (let e of i) l.add(e);
            for (let e of t.getPartitionKeys())
              l.has(e) || t.removePartition(e);
            for (let e of n) d(e.id, e.emojis, t);
          },
          OVERLAY_INITIALIZE: (e, t) => {
            t.clear(),
              Object.entries(e.emojis).forEach((e) => {
                let [n, i] = e;
                t.setPartition(n, s(n, i));
              });
          },
          CACHED_EMOJIS_LOADED: (e, t) => {
            for (let [n, i] of e.emojis) t.setPartition(n, s(n, i));
          },
          GUILD_CREATE: (e, t) => {
            d(e.guild.id, e.guild.emojis, t);
          },
          GUILD_UPDATE: (e, t) => {
            t.setPartition(e.guild.id, s(e.guild.id, e.guild.emojis));
          },
          GUILD_EMOJIS_UPDATE: (e, t) => {
            t.setPartition(e.guildId, s(e.guildId, e.emojis));
          },
          GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
          },
        },
        l.P4.getCachedBridgedStoreMode(),
      );
    },
    639841(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(17928),
        l = n(228366),
        a = n(736056),
        r = n(710195),
        s = n(129922),
        o = n(704913),
        d = n(652215);
      function u() {
        o.l.trigger(),
          s.TY.getConfig({ location: "connection_open" }).emitEvent &&
            Promise.resolve()
              .then(n.bind(n, 954571))
              .then((e) => {
                let { default: t } = e;
                t.track(d.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                  experiment: "2026-03-debug-experiment",
                  apex_debug_variant: 1,
                  experiment_location: "connection_open",
                });
              });
      }
      class c extends i.Ay.Store {
        static displayName = "ExperimentTriggerPointStore";
        constructor() {
          super(l.h, { CONNECTION_OPEN: u }, l.A.Early);
        }
        initialize() {
          this.waitFor(a.A, r.A);
        }
      }
      let h = new c();
    },
    457699(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366),
        a = n(320095),
        r = n(390248);
      let s = {};
      function o(e) {
        return `${e.channel_id}:${e.id}`;
      }
      function d(e) {
        let { data: t } = e;
        (s = {}),
          t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
              e.forEach((e) => {
                s[o(e)] = (0, a.rh)(e);
              });
            });
          });
      }
      class u extends i.Ay.Store {
        static displayName = "SearchMessageStore";
        getMessage(e, t) {
          return s[o({ id: e, channel_id: t })];
        }
      }
      let c = new u(l.h, {
        SEARCH_MESSAGES_SUCCESS: d,
        MOD_VIEW_SEARCH_MESSAGES_SUCCESS: d,
        MESSAGE_UPDATE: function (e) {
          let { message: t } = e;
          if (null == t.id || null == t.channel_id) return !1;
          let n = o(t),
            i = s[n];
          return (
            null != i &&
            ((s[n] = (0, a.IU)(i, {
              attachments: t.attachments,
              embeds: t.embeds,
            })),
            !0)
          );
        },
        LOGOUT: function () {
          s = {};
        },
        CONNECTION_OPEN: function () {
          s = {};
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
          let { messageId: t, channelId: n } = e,
            i = o({ id: t, channel_id: n }),
            l = s[i];
          null != l && (s[i] = (0, r.Td)(l));
        },
      });
    },
    294454(e, t, n) {
      n.d(t, { Be: () => o, aU: () => r, fO: () => s, vK: () => d });
      var i = n(627968);
      n(64700);
      var l = n(192308),
        a = n(530912);
      let r = "forward-modal";
      function s(e) {
        let {
          message: t,
          source: s,
          initialSelectedDestinations: o = [],
          forwardOptions: d,
          onRequestSent: u,
          customSendHandler: c,
        } = e;
        (0, a.pp)(t.channel_id, t.id, s),
          (0, l.openModalLazy)(
            async () => {
              let { ForwardModal: e } = await Promise.all([
                n.e("6305"),
                n.e("83004"),
                n.e("90261"),
                n.e("16933"),
                n.e("71561"),
                n.e("1195"),
                n.e("22513"),
                n.e("13498"),
                n.e("25310"),
                n.e("80848"),
                n.e("10191"),
                n.e("54253"),
                n.e("39995"),
                n.e("25568"),
                n.e("32260"),
                n.e("40153"),
                n.e("68953"),
                n.e("26032"),
                n.e("68495"),
                n.e("18125"),
                n.e("65420"),
                n.e("71934"),
                n.e("89324"),
                n.e("7053"),
                n.e("22846"),
                n.e("86483"),
                n.e("24092"),
                n.e("82209"),
                n.e("21530"),
                n.e("24199"),
                n.e("57036"),
                n.e("207"),
                n.e("88394"),
                n.e("15380"),
                n.e("88941"),
                n.e("61379"),
                n.e("34530"),
                n.e("62680"),
                n.e("76602"),
                n.e("43039"),
                n.e("21825"),
                n.e("98125"),
                n.e("69354"),
                n.e("28154"),
                n.e("18441"),
                n.e("48804"),
                n.e("88077"),
                n.e("80527"),
                n.e("85502"),
                n.e("28229"),
                n.e("18401"),
                n.e("13681"),
                n.e("53729"),
                n.e("32551"),
                n.e("52367"),
                n.e("23353"),
                n.e("36561"),
                n.e("50015"),
                n.e("47017"),
                n.e("22584"),
                n.e("77998"),
                n.e("31145"),
                n.e("11523"),
                n.e("66900"),
                n.e("1555"),
                n.e("44695"),
                n.e("21690"),
                n.e("10004"),
                n.e("55314"),
                n.e("29177"),
                n.e("44376"),
                n.e("83429"),
                n.e("96905"),
                n.e("33902"),
                n.e("31644"),
                n.e("70653"),
                n.e("993"),
                n.e("54527"),
                n.e("72535"),
                n.e("86949"),
                n.e("76195"),
                n.e("39227"),
                n.e("1177"),
                n.e("26490"),
                n.e("76170"),
                n.e("32817"),
                n.e("36498"),
                n.e("18943"),
                n.e("89094"),
                n.e("84103"),
                n.e("9915"),
                n.e("99999"),
                n.e("5501"),
                n.e("11527"),
                n.e("96123"),
                n.e("27168"),
                n.e("31825"),
                n.e("39038"),
                n.e("36320"),
                n.e("6223"),
                n.e("20320"),
                n.e("77245"),
                n.e("31549"),
                n.e("43919"),
                n.e("31390"),
                n.e("57906"),
                n.e("37622"),
                n.e("14879"),
                n.e("51243"),
                n.e("45421"),
                n.e("44265"),
                n.e("99141"),
                n.e("21435"),
                n.e("98793"),
                n.e("92731"),
                n.e("25990"),
                n.e("34472"),
                n.e("33584"),
                n.e("63095"),
                n.e("68647"),
                n.e("45723"),
                n.e("67657"),
                n.e("64615"),
                n.e("88017"),
                n.e("87225"),
                n.e("12373"),
                n.e("75134"),
                n.e("84967"),
                n.e("23216"),
                n.e("25582"),
                n.e("30770"),
                n.e("38835"),
                n.e("90889"),
                n.e("78777"),
                n.e("3458"),
                n.e("62827"),
                n.e("73547"),
                n.e("32823"),
                n.e("34691"),
                n.e("99593"),
                n.e("61935"),
                n.e("62168"),
                n.e("55602"),
                n.e("77793"),
                n.e("13499"),
                n.e("91381"),
                n.e("93158"),
                n.e("58765"),
                n.e("22407"),
                n.e("10034"),
                n.e("73500"),
                n.e("25252"),
                n.e("19452"),
                n.e("53526"),
                n.e("65881"),
                n.e("32035"),
                n.e("36126"),
                n.e("51391"),
                n.e("29375"),
                n.e("91942"),
                n.e("48778"),
                n.e("89465"),
                n.e("79440"),
                n.e("78707"),
                n.e("62355"),
                n.e("93708"),
                n.e("71482"),
                n.e("67861"),
                n.e("1518"),
                n.e("10942"),
                n.e("23354"),
                n.e("64480"),
                n.e("10745"),
                n.e("78651"),
                n.e("77084"),
                n.e("39406"),
                n.e("44780"),
                n.e("18997"),
                n.e("65617"),
                n.e("36946"),
                n.e("44385"),
                n.e("92639"),
                n.e("40963"),
                n.e("90480"),
                n.e("66031"),
                n.e("94317"),
                n.e("23601"),
              ]).then(n.bind(n, 953832));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  message: t,
                  initialSelectedDestinations: o,
                  forwardOptions: d,
                  onRequestSent: u,
                  customSendHandler: c,
                  source: s,
                });
            },
            { modalKey: r },
          );
      }
      function o() {
        (0, l.closeModal)(r);
      }
      function d(e) {
        let { message: t, failedDestinations: a, forwardOptions: r } = e;
        (0, l.openModalLazy)(async () => {
          let { ForwardFailedAlertModal: e } = await Promise.all([
            n.e("80848"),
            n.e("24092"),
            n.e("40556"),
            n.e("43039"),
            n.e("48804"),
            n.e("72535"),
            n.e("96123"),
            n.e("31390"),
            n.e("21435"),
            n.e("32823"),
            n.e("77084"),
            n.e("65617"),
            n.e("44385"),
            n.e("92639"),
            n.e("66139"),
          ]).then(n.bind(n, 181622));
          return (n) =>
            (0, i.jsx)(e, {
              ...n,
              message: t,
              failedDestinations: a,
              forwardOptions: r,
            });
        });
      }
    },
    800828(e, t, n) {
      n.d(t, { A: () => S }), n(321073);
      var i = n(17928),
        l = n(713402),
        a = n(228366),
        r = n(994500),
        s = n(652215);
      let o = (e, t) => `${t}-${e}`,
        d = (e) => `application-id-${e}`,
        u = (e) => `user-id-${e}`,
        c = (e) => `relationship-type-${e}`,
        h = new l.J(
          function (e) {
            let t = [];
            return (
              t.push(d(e.applicationId)), t.push(u(e.id)), t.push(c(e.type)), t
            );
          },
          (e) => `${e.since}`,
        ),
        E = 0,
        A = 0,
        _ = 0;
      function p() {
        let e = 0,
          t = 0,
          n = 0;
        h.values().forEach((i) => {
          let { type: l, id: a } = i;
          if (l === s.eA$.FRIEND) n += 1;
          else if (l === s.eA$.PENDING_OUTGOING) t += 1;
          else if (l === s.eA$.PENDING_INCOMING) {
            if (r.A.isSpam(a) || r.A.isIgnored(a)) return;
            e += 1;
          }
        }),
          (E = e),
          (A = t),
          (_ = n);
      }
      function g(e) {
        h.set(o(e.id, e.applicationId), e);
      }
      function f(e, t) {
        h.delete(o(e, t));
      }
      class I extends i.Ay.Store {
        static displayName = "GameRelationshipStore";
        initialize() {
          this.waitFor(r.A);
        }
        getPendingIncomingCount() {
          return E;
        }
        getPendingOutgoingCount() {
          return A;
        }
        getGameFriendCount() {
          return _;
        }
        getGameFriendsForApplication(e) {
          return h.values(d(e), !0).filter((e) => e.type === s.eA$.FRIEND);
        }
        getGameRelationshipsForUser(e) {
          return h.values(u(e), !0);
        }
        getGameRelationshipsForUserByType(e, t) {
          return this.getGameRelationshipsForUser(e).filter(
            (e) => e.type === t,
          );
        }
        getGameFriendsForUser(e) {
          return this.getGameRelationshipsForUserByType(e, s.eA$.FRIEND);
        }
        getGameRelationshipCount() {
          return h.size();
        }
        getGameRelationships() {
          return h;
        }
        getGameRelationshipsByType(e) {
          return h.values(c(e), !0);
        }
        getGameRelationshipsVersion() {
          return h.version;
        }
      }
      let S = new I(a.h, {
        CONNECTION_OPEN: function (e) {
          h.clear(),
            e.gameRelationships.forEach((e) => {
              g({
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type,
              });
            }),
            p();
        },
        GAME_RELATIONSHIP_ADD: function (e) {
          g(e.gameRelationship), p();
        },
        GAME_RELATIONSHIP_REMOVE: function (e) {
          f(e.userId, e.applicationId), p();
        },
        APPLICATIONS_FETCH_SUCCESS: function (e) {
          let { unknownApplicationIds: t } = e;
          if (null != t) {
            for (let e of t)
              for (let t of h.values(d(e)))
                (t.type === s.eA$.PENDING_INCOMING ||
                  t.type === s.eA$.PENDING_OUTGOING) &&
                  f(t.id, e);
            p();
          }
        },
      });
    },
    507263(e, t, n) {
      n.d(t, { B: () => u }), n(142703), n(321073);
      var i = n(228366),
        l = n(426620),
        a = n(446458);
      let r = [];
      function s() {
        return null != l.A.getType();
      }
      function o() {
        s() || (r.forEach((e) => d(e)), (r = []));
      }
      function d(e) {
        setImmediate(() => e());
      }
      function u(e) {
        a.A.isConnectedOrOverlay() && !s() ? d(e) : r.push(e);
      }
      i.h.subscribe("CONNECTION_OPEN", o),
        i.h.subscribe("CONNECTION_RESUMED", o),
        i.h.subscribe("NUF_COMPLETE", o);
    },
    823448(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366),
        a = n(845584);
      let r = new Map();
      class s {
        isInitialFetchComplete = !1;
        isFetching = !1;
        error = null;
        counts = null;
        handleSearchCountStart() {
          (this.error = null), (this.isFetching = !0);
        }
        handleSearchCountSuccess(e) {
          (this.counts = e),
            (this.isFetching = !1),
            (this.isInitialFetchComplete = !0);
        }
        handleSearchCountFailure(e) {
          (this.error = new a.LG(e)), (this.isFetching = !1);
        }
      }
      function o(e) {
        let t = r.get(e) ?? new s();
        return r.set(e, t), t;
      }
      function d(e, t) {
        let n = r.get(e);
        return null != n ? t(n) : null;
      }
      class u extends i.Ay.Store {
        static displayName = "GlobalDiscoveryServersSearchCountStore";
        getIsInitialFetchComplete(e) {
          return d(e, (e) => e.isInitialFetchComplete);
        }
        getIsFetchingCounts(e) {
          return d(e, (e) => e.isFetching);
        }
        getCounts(e) {
          return d(e, (e) => e.counts);
        }
      }
      let c = new u(l.h, {
        CONNECTION_OPEN: function () {
          r.clear();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
          let { query: t } = e;
          o(t).handleSearchCountStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
          let { query: t, categoryCounts: n } = e;
          o(t).handleSearchCountSuccess(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
          let { query: t, error: n } = e;
          o(t).handleSearchCountFailure(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
          let { ignoreQueries: t } = e,
            n = new Set(t);
          r.forEach((e, t) => {
            n.has(t) || r.delete(t);
          });
        },
      });
    },
    8917(e, t, n) {
      let i;
      n.d(t, { A: () => D }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var l = n(284009),
        a = n.n(l),
        r = n(735438),
        s = n.n(r),
        o = n(636537),
        d = n(823598),
        u = n(201327),
        c = n(451988),
        h = n(228366),
        E = n(626584),
        A = n(253932),
        _ = n(616356),
        p = n(495544),
        g = n(723702),
        f = n(19575),
        I = n(652896),
        S = n(325278),
        T = n(652215),
        m = n(731854);
      let C = new c.Ep(),
        O = !1,
        N = window.document.createElement("canvas");
      (N.width = 512), (N.height = 288);
      let y = N.getContext("2d");
      function R() {
        C.stop(), null != i && (i = null);
      }
      let L = s().debounce((e, t, n, i) => {
        v(
          e,
          (0, I._z)({
            streamType: null != t ? S.U4.GUILD : S.U4.CALL,
            guildId: t,
            channelId: n,
            ownerId: i,
          }),
        );
      }, 500);
      async function v(e, t) {
        if (
          i !== e ||
          ((0, g.isWeb)() && A.uh.getSetting()) ||
          _.A.getIsActiveStreamPreviewDisabled(t)
        )
          return;
        let n = () => v(e, t);
        if (!O)
          try {
            var l, r;
            let n, s, c, E, A, _, I, S;
            (l = await ((r = e),
            (S = 0),
            (g.isPlatformEmbedded
              ? function (e, t) {
                  let n = (0, d.lE)();
                  return new Promise((l, a) => {
                    n.getNextVideoOutputFrame(e).then(
                      (e) => {
                        try {
                          null != e && t(e) && l(e);
                        } catch (e) {
                          a(e);
                        }
                      },
                      (t) => {
                        i === e && a(t);
                      },
                    );
                  });
                }
              : function (e, t) {
                  let n = (0, u.yL)(e);
                  if (null == n) return Promise.resolve(new ImageData(0, 0));
                  let { width: i, height: l } = n
                      .getVideoTracks()[0]
                      .getSettings(),
                    a = document.createElement("video"),
                    r = document.createElement("canvas");
                  (a.width = r.width = i ?? 512),
                    (a.height = r.height = l ?? 288),
                    (a.srcObject = n),
                    a.play();
                  let s = r.getContext("2d");
                  return new Promise((e, n) => {
                    a.ontimeupdate = () => {
                      s?.drawImage(a, 0, 0, r.width, r.height);
                      let i = s?.getImageData(0, 0, r.width, r.height);
                      try {
                        null != i && t(i) && e(i);
                      } catch (e) {
                        n(e);
                      }
                    };
                  }).finally(() => {
                    (a.ontimeupdate = null),
                      a.removeAttribute("srcObject"),
                      a.load();
                  });
                })(r, (e) => {
              if (new Uint32Array(e.data.buffer).some((e) => 0 !== e))
                return !0;
              if (++S > 60)
                throw Error(
                  `Timed out awaiting non-black frame after ${60} frames`,
                );
              return !1;
            }))),
              (n = 512 / l.width),
              (s = Math.min(n, 288 / l.height)),
              (c = l.width * s),
              (E = l.height * s),
              (N.width = c),
              (N.height = E),
              (_ = (A = window.document.createElement("canvas")).getContext(
                "2d",
              )),
              (A.width = l.width),
              (A.height = l.height),
              (I = new ImageData(l.data, l.width, l.height)),
              _?.putImageData(I, 0, 0),
              y?.drawImage(A, 0, 0, l.width, l.height, 0, 0, c, E);
            let m = N.toDataURL("image/jpeg");
            if (
              (h.h.dispatch({
                type: "STREAM_PREVIEW_FETCH_SUCCESS",
                streamKey: t,
                previewURL: m,
              }),
              g.isPlatformEmbedded)
            ) {
              let e = p.default.getToken();
              a()(null != e, "Auth token was null while sending screenshot."),
                await f.Ay.makeChunkedRequest(
                  T.Rsh.STREAM_PREVIEW(t),
                  { thumbnail: m },
                  { method: "POST", token: e },
                );
            } else
              await o.Bo.post({
                url: T.Rsh.STREAM_PREVIEW(t),
                body: { thumbnail: m },
                oldFormErrors: !0,
                rejectWithError: !1,
              });
          } catch (t) {
            new E.A("ApplicationStreamPreviewUploadManager").error(
              "Failed to post stream preview",
              t,
            ),
              i === e && C.start(6e4, n);
            return;
          }
        i === e && (O ? C.start(6e4, n) : C.start(3e5, n));
      }
      let D = {
        init() {
          h.h.subscribe("CONNECTION_OPEN", R),
            h.h.subscribe("LOGOUT", R),
            h.h.subscribe("STREAM_DELETE", R),
            h.h.subscribe("RTC_CONNECTION_VIDEO", (e) => {
              let {
                guildId: t,
                channelId: n,
                userId: l,
                streamId: a,
                context: r,
              } = e;
              null == a ||
                r !== m.x.STREAM ||
                l !== p.default.getId() ||
                __OVERLAY__ ||
                (R(), (i = a), L(a, t, n, l));
            }),
            h.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
              let { videoState: t } = e;
              O = t === T.uPF.PAUSED;
            });
        },
      };
    },
    125318(e, t, n) {
      n.d(t, { A: () => C });
      var i,
        l = n(228366),
        a = n(827343),
        r = n(401843),
        s = n(626584),
        o = n(118356),
        d = n(403362);
      let u = "1402418696126992445";
      function c(e, t) {
        if (null == t) return null;
        if (t.applicationId === u) {
          let n, i, l;
          return (
            (n =
              t.processPath.length > 1
                ? t.processPath[t.processPath.length - 2]
                : 0),
            void 0 !==
            (l = (i = e.filter(
              (e) => e.applicationId === u && e.processPath.includes(n),
            )).find((e) => "league of legends.exe" === e.executableName))
              ? l
              : i.length > 0
                ? i[0]
                : null
          );
        }
        let n = new Map(e.map((e) => [e.processId, e])),
          i = t.processPath.map((e) => n.get(e)).find((e) => null != e);
        if (null == i) return null;
        let l = e
          .map((e) => {
            let t = e.processPath.findIndex((e) => n.has(e));
            return -1 === t
              ? null
              : { application: e, rootedPath: e.processPath.slice(t) };
          })
          .filter(d.Vq)
          .filter((e) => e.rootedPath[0] === i.processId);
        l.sort((e, t) => {
          let i = e.rootedPath
              .map((e) => n.get(e))
              .filter((e) => null != e && null != e.windowHandle),
            l = h(
              t.rootedPath
                .map((e) => n.get(e))
                .filter((e) => null != e && null != e.windowHandle),
              i,
            );
          return 0 !== l ? l : h(t.rootedPath, e.rootedPath);
        });
        let a = l.find((e) => null != e.application.windowHandle) ?? l[0];
        return null == a ? null : a.application;
      }
      function h(e, t) {
        return e.length - t.length;
      }
      var E =
        (((i = {}).STREAM = "stream"),
        (i.PAUSE = "pause"),
        (i.STOP = "stop"),
        i);
      class A {
        callback;
        active;
        application;
        sound;
        logger;
        constructor(e) {
          (this.callback = e),
            (this.active = !1),
            (this.application = null),
            (this.sound = !0),
            (this.logger = new o.Vy("StreamDirector"));
        }
        onStreamBegin(e, t, n) {
          let i,
            l = null == (i = e.find((e) => e.processId === t)) ? null : c(e, i);
          (this.sound = n),
            null == l || null == l.windowHandle
              ? this.callback({ type: "stop" })
              : this._stream(l);
        }
        onStreamKilled() {
          this._kill();
        }
        onStreamEnd() {
          this._stop();
        }
        onDetectionUpdate(e) {
          this._update(e);
        }
        onCaptureEnd(e, t) {
          this.application?.windowHandle === t && this._update(e);
        }
        onCaptureLegacyEnd(e) {
          return this.application?.windowHandle != null
            ? this.onCaptureEnd(e, this.application.windowHandle)
            : this._stop();
        }
        _update(e) {
          let t = c(e, this.application);
          if (null != t)
            return null == t.windowHandle ? this._pause() : this._stream(t);
          this._stop();
        }
        _stream(e) {
          let t = this.application?.windowHandle !== e.windowHandle;
          (this.active = !0),
            t &&
              this.logger.info(
                `Stream window changed from ${this.application?.windowHandle} to ${e.windowHandle} for application ${e.applicationId}, executableName ${e.executableName}`,
              ),
            (this.application = Object.assign({}, e)),
            t &&
              this.callback({
                type: "stream",
                sourceId: `window:${this.application.windowHandle}`,
                sound: this.sound,
              });
        }
        _kill() {
          (this.active = !1), (this.application = null);
        }
        _stop() {
          this.active && (this._kill(), this.callback({ type: "stop" }));
        }
        _pause() {
          this.active &&
            ((this.application.windowHandle = null),
            this.callback({ type: "pause" }));
        }
      }
      var _ = n(929921),
        p = n(616356),
        g = n(495544),
        f = n(652896),
        I = n(338771),
        S = n(652215),
        T = n(731854);
      class m {
        director;
        applications;
        streamKey;
        mode;
        constructor() {
          (this.mode = null),
            (this.applications = []),
            (this.director = new A((e) => this._onDirectorAction(e))),
            l.h.subscribe("STREAM_START", (e) => {
              let {
                  streamType: t,
                  guildId: n,
                  channelId: i,
                  pid: l,
                  sourceId: a,
                  audioSourceId: r,
                  sound: o,
                } = e,
                d = g.default.getId(),
                u = (0, f._z)({
                  streamType: t,
                  guildId: n,
                  channelId: i,
                  ownerId: d,
                });
              (null == l) != (null == a)
                ? (null != l && this._onStreamApplication(u, l, o ?? !0),
                  null != a && this._onStreamDirectSource(u, a, r, o))
                : new s.A("ApplicationSwitchingManager").warn(
                    `invalid start_stream: both application + display modes were specified (pid: ${l}, source-id: ${a})`,
                  );
            }),
            l.h.subscribe("STREAM_DELETE", (e) => {
              let { streamKey: t } = e;
              this._onStreamKilled(t);
            }),
            l.h.subscribe("STREAM_STOP", (e) => {
              let { streamKey: t } = e;
              this._onStreamEnd(t);
            }),
            l.h.subscribe("RUNNING_GAMES_CHANGE", (e) => {
              let { games: t } = e;
              this._onGameDetectionUpdate(t);
            }),
            l.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
              let { videoState: t, context: n } = e;
              n === T.x.STREAM && this._onCapturePaused(t === S.uPF.PAUSED);
            }),
            l.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
              let { settings: t, errorCode: n } = e;
              t?.context === T.x.STREAM &&
                t?.desktopSettings == null &&
                t?.cameraSettings == null &&
                this._onCaptureEnded(null == n),
                t?.desktopSettings?.sound != null &&
                  (this.director.sound = t.desktopSettings.sound);
            });
        }
        _onGameDetectionUpdate(e) {
          (this.applications = e.map((e) => ({
            applicationId: e.id ?? null,
            processId: e.pid,
            processPath: e.pidPath,
            windowHandle: e.windowHandle ?? null,
            executableName: e.exeName,
          }))),
            "verbatim-source" !== this.mode &&
              this.director.onDetectionUpdate(this.applications);
        }
        _onStreamApplication(e, t, n) {
          (this.mode = "application"),
            (this.streamKey = e),
            this.director.onStreamBegin(this.applications, t, n);
        }
        _onStreamDirectSource(e, t, n, i) {
          (this.mode = "verbatim-source"),
            (this.streamKey = e),
            (this.director.sound = i ?? !0),
            (this.director.application = null),
            this._onDirectorAction({
              type: E.STREAM,
              sourceId: t,
              audioSourceId: n,
              sound: i,
            });
        }
        _onStreamEnd(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
              case "application":
                this.director.onStreamEnd();
                break;
              case "verbatim-source":
                this._onDirectorAction({ type: E.STOP, alsoClose: t });
                break;
              default:
                throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
            }
        }
        _onStreamKilled(e) {
          if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
              case "application":
                this.director.onStreamKilled();
                break;
              case "verbatim-source":
                break;
              default:
                throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
            }
        }
        _onDirectorAction(e) {
          let t = p.A.getCurrentUserActiveStream(),
            n = _.A.getState();
          switch (e.type) {
            case E.STREAM:
              if (
                (null != t && (0, r.TZ)(t, !1),
                e.sourceId.startsWith("camera") && null != e.audioSourceId)
              ) {
                let t = e.sourceId.split(":")[1];
                a.A.setGoLiveSource({
                  cameraSettings: {
                    videoDeviceGuid: t,
                    audioDeviceGuid: e.audioSourceId,
                  },
                  qualityOptions: {
                    preset: n.preset,
                    resolution: n.resolution,
                    frameRate: n.fps,
                  },
                  context: T.x.STREAM,
                });
              } else
                a.A.setGoLiveSource({
                  desktopSettings: {
                    sourceId: e.sourceId,
                    sound: e.sound ?? !0,
                  },
                  qualityOptions: {
                    preset: n.preset,
                    resolution: n.resolution,
                    frameRate: n.fps,
                  },
                  context: T.x.STREAM,
                });
              break;
            case E.PAUSE:
              null != t && (0, r.TZ)(t, !0);
              break;
            case E.STOP:
              null != t && (0, I.A)(t, !0, e.alsoClose ?? !0);
              break;
            default:
              throw Error(`unhandled stream action: ${e.type}`);
          }
        }
        _onCapturePaused(e) {
          let t = p.A.getCurrentUserActiveStream();
          null != t && (0, r.TZ)(t, e);
        }
        _onCaptureEnded() {
          let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          switch (this.mode) {
            case "application":
              this._onCapturePaused(!0);
              break;
            case "verbatim-source":
              null != this.streamKey && this._onStreamEnd(this.streamKey, e);
              break;
            default:
              throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
          }
        }
      }
      let C = {
        instance: null,
        init() {
          null == this.instance && (this.instance = new m());
        },
      };
    },
    384684(e, t, n) {
      n.d(t, { A: () => O });
      var i = n(17928),
        l = n(228366),
        a = n(260509),
        r = n(34457),
        s = n(696451),
        o = n(317525),
        d = n(71393),
        u = n(287809),
        c = n(98318),
        h = n(652215);
      let E = new Set(),
        A = new Map(),
        _ = new Map(),
        p = new Map(),
        g = new Map(),
        f = null;
      function I(e) {
        let t = u.default.getCurrentUser(),
          n = d.A.getGuild(e);
        if (null == n || null == t) return !1;
        let i = new Set(),
          l = new Set(),
          E = new Set();
        if (
          (g.set(e, (0, a.bM)(n, t)),
          n.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED))
        ) {
          let a = s.Ay.getMember(e, t.id),
            d = new Set(a?.roles ?? []);
          for (let t of o.A.getSortedRoles(n.id))
            (0, c.U)(t) &&
              (i.add(t.id),
              (0, c.X)(t) && (l.add(t.id), d.has(t.id) && E.add(t.id))),
              d.has(t.id) && (0, r._m)(t, h.xBc.ADMINISTRATOR) && g.set(e, !0);
        }
        return A.set(e, i), p.set(e, E), _.set(e, l), !0;
      }
      function S() {
        A.clear(), p.clear(), _.clear(), g.clear(), (f = null);
      }
      function T(e) {
        let {
          guild: { id: t },
        } = e;
        if (null == f) return !1;
        let n = d.A.getGuild(t);
        if (null == n) return !1;
        let i = n.features.has(
          h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
        );
        if (i && !f.has(t)) {
          let e = new Set(f);
          return e.add(t), (f = e), !0;
        }
        if (!i && f.has(t)) {
          let e = new Set(f);
          return e.delete(t), (f = e), !0;
        }
        return !1;
      }
      function m(e) {
        let { guildId: t } = e;
        return !!A.has(t) && I(t);
      }
      class C extends i.Ay.Store {
        static displayName = "SubscriptionRoleStore";
        initialize() {
          this.waitFor(d.A, o.A, u.default, s.Ay);
        }
        getGuildIdsWithPurchasableRoles() {
          if (null != f) return f;
          let e = d.A.getGuildsArray(),
            t = new Set();
          for (let n of e)
            n.features.has(
              h.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
            ) && t.add(n.id);
          return (f = t), t;
        }
        buildRoles(e) {
          A.has(e) || I(e);
        }
        getSubscriptionRoles(e) {
          return this.buildRoles(e), A.get(e) ?? E;
        }
        getPurchasableSubscriptionRoles(e) {
          return this.buildRoles(e), _.get(e) ?? E;
        }
        getUserSubscriptionRoles(e) {
          return this.buildRoles(e), p.get(e) ?? E;
        }
        getUserIsAdmin(e) {
          return this.buildRoles(e), g.get(e) ?? !1;
        }
      }
      let O = new C(l.h, {
        CONNECTION_OPEN: S,
        LOGOUT: S,
        GUILD_CREATE: T,
        GUILD_DELETE: function (e) {
          let {
            guild: { id: t },
          } = e;
          if (f?.has(t) !== !0) return !1;
          let n = new Set(f);
          n.delete(t), (f = n);
        },
        GUILD_UPDATE: T,
        GUILD_ROLE_CREATE: m,
        GUILD_ROLE_UPDATE: m,
        GUILD_ROLE_DELETE: m,
        GUILD_MEMBER_UPDATE: function (e) {
          let { guildId: t, user: n } = e,
            i = u.default.getCurrentUser();
          return !!(n.id === i?.id && A.has(t)) && I(t);
        },
      });
    },
    707592(e, t, n) {
      n.d(t, { Py: () => u, Ul: () => d, uR: () => o });
      var i = n(627968);
      n(64700);
      var l = n(192308),
        a = n(686956),
        r = n(652215),
        s = n(231723);
      function o(e) {
        let { eventId: t, recurrenceId: a } = e;
        (0, l.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("88205"),
            n.e("6305"),
            n.e("89324"),
            n.e("90261"),
            n.e("16933"),
            n.e("1195"),
            n.e("26032"),
            n.e("25310"),
            n.e("68495"),
            n.e("18125"),
            n.e("65420"),
            n.e("22513"),
            n.e("83004"),
            n.e("13498"),
            n.e("80848"),
            n.e("10191"),
            n.e("54253"),
            n.e("71561"),
            n.e("71934"),
            n.e("7053"),
            n.e("22846"),
            n.e("86483"),
            n.e("39995"),
            n.e("25568"),
            n.e("32260"),
            n.e("40153"),
            n.e("68953"),
            n.e("82209"),
            n.e("97893"),
            n.e("7960"),
            n.e("24199"),
            n.e("57036"),
            n.e("207"),
            n.e("88394"),
            n.e("15380"),
            n.e("88941"),
            n.e("61379"),
            n.e("34530"),
            n.e("62680"),
            n.e("43039"),
            n.e("21825"),
            n.e("98125"),
            n.e("69354"),
            n.e("28154"),
            n.e("18441"),
            n.e("48804"),
            n.e("88077"),
            n.e("80527"),
            n.e("85502"),
            n.e("18401"),
            n.e("13681"),
            n.e("53729"),
            n.e("32551"),
            n.e("52367"),
            n.e("23353"),
            n.e("36561"),
            n.e("50015"),
            n.e("47017"),
            n.e("22584"),
            n.e("77998"),
            n.e("31145"),
            n.e("11523"),
            n.e("66900"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("10004"),
            n.e("55314"),
            n.e("29177"),
            n.e("44376"),
            n.e("83429"),
            n.e("96905"),
            n.e("33902"),
            n.e("31644"),
            n.e("70653"),
            n.e("993"),
            n.e("54527"),
            n.e("72535"),
            n.e("86949"),
            n.e("76195"),
            n.e("39227"),
            n.e("1177"),
            n.e("26490"),
            n.e("76170"),
            n.e("32817"),
            n.e("36498"),
            n.e("18943"),
            n.e("89094"),
            n.e("84103"),
            n.e("9915"),
            n.e("99999"),
            n.e("5501"),
            n.e("11527"),
            n.e("96123"),
            n.e("27168"),
            n.e("31825"),
            n.e("39038"),
            n.e("36320"),
            n.e("6223"),
            n.e("20320"),
            n.e("77245"),
            n.e("31549"),
            n.e("43919"),
            n.e("31390"),
            n.e("57906"),
            n.e("37622"),
            n.e("14879"),
            n.e("51243"),
            n.e("45421"),
            n.e("44265"),
            n.e("99141"),
            n.e("21435"),
            n.e("98793"),
            n.e("92731"),
            n.e("25990"),
            n.e("34472"),
            n.e("33584"),
            n.e("63095"),
            n.e("68647"),
            n.e("45723"),
            n.e("67657"),
            n.e("64615"),
            n.e("88017"),
            n.e("87225"),
            n.e("12373"),
            n.e("75134"),
            n.e("84967"),
            n.e("23216"),
            n.e("25582"),
            n.e("30770"),
            n.e("38835"),
            n.e("90889"),
            n.e("78777"),
            n.e("3458"),
            n.e("62827"),
            n.e("73547"),
            n.e("32823"),
            n.e("34691"),
            n.e("99593"),
            n.e("61935"),
            n.e("62168"),
            n.e("55602"),
            n.e("77793"),
            n.e("13499"),
            n.e("91381"),
            n.e("93158"),
            n.e("58765"),
            n.e("22407"),
            n.e("10034"),
            n.e("73500"),
            n.e("25252"),
            n.e("19452"),
            n.e("53526"),
            n.e("65881"),
            n.e("32035"),
            n.e("36126"),
            n.e("51391"),
            n.e("29375"),
            n.e("91942"),
            n.e("48778"),
            n.e("26295"),
            n.e("89465"),
            n.e("79440"),
            n.e("78707"),
            n.e("62355"),
            n.e("93708"),
            n.e("71482"),
            n.e("10942"),
            n.e("64480"),
            n.e("37187"),
            n.e("10745"),
            n.e("55973"),
            n.e("78651"),
            n.e("14041"),
            n.e("39406"),
            n.e("22855"),
            n.e("78100"),
            n.e("33297"),
            n.e("49644"),
            n.e("80007"),
            n.e("22744"),
            n.e("49347"),
            n.e("64287"),
            n.e("53934"),
            n.e("68248"),
            n.e("69647"),
            n.e("98354"),
            n.e("37475"),
            n.e("85285"),
          ]).then(n.bind(n, 640132));
          return (n) =>
            (0, i.jsx)(e, {
              guildScheduledEventId: t,
              initialRecurrenceId: a,
              ...n,
            });
        });
      }
      async function d(e, t) {
        let { guild_id: n } = e;
        await a.A.transitionToGuildSync(n, t), o({ eventId: e.id, event: e });
      }
      function u(e, t) {
        (0, l.openModalLazy)(
          async () => {
            let { default: t } = await Promise.all([
              n.e("19346"),
              n.e("43267"),
              n.e("34526"),
            ]).then(n.bind(n, 521549));
            return (n) => (0, i.jsx)(t, { ...n, channel: e });
          },
          { contextKey: t === r.BRT.POPOUT ? s.KX : s.SY },
        );
      }
    },
    132860(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(495544),
        l = n(576705),
        a = n(607567),
        r = n(488926),
        s = n(698441),
        o = n(219935);
      function d(e) {
        if (
          !e.isGuildVoice() ||
          s.Ay.getGuildScheduledEventsByIndex(s.ej.CHANNEL_EVENT_ACTIVE(e.id))
            .length < 1 ||
          !l.A.can(o.EN, e)
        )
          return !1;
        let t = new Set(a.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
          n = i.default.getId();
        for (let i of t)
          if (i !== n && r.$3({ permission: o.EN, user: i, context: e }))
            return !1;
        return !0;
      }
    },
    669715(e, t, n) {
      n.d(t, { t: () => i });
      function i(e) {
        if (null == e) return !1;
        for (var t = 0; t < e.length; t++)
          if (e[t].voiceState.selfStream) return !0;
        return !1;
      }
    },
    292572(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(636537),
        l = n(228366),
        a = n(954571),
        r = n(177773),
        s = n(652215);
      let o = new Map(),
        d = {
          resolveGuildTemplate: function e(t) {
            if (l.h.isDispatching()) return Promise.resolve().then(() => e(t));
            let n = o.get(t);
            if (null != n) return n;
            l.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE", code: t });
            let d = i.Bo.get({
              url: s.Rsh.UNRESOLVED_GUILD_TEMPLATE(t),
              oldFormErrors: !0,
              rejectWithError: !0,
            })
              .then(
                (e) => {
                  let n = e.body;
                  return (
                    a.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
                      resolved: !0,
                      guild_template_code: t,
                      guild_template_name: n.name,
                      guild_template_description: n.description,
                      guild_template_guild_id: n.source_guild_id,
                    }),
                    l.h.dispatch({
                      type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                      guildTemplate: n,
                      code: t,
                    }),
                    { guildTemplate: (0, r.A)(n), code: t }
                  );
                },
                () => (
                  a.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: t,
                  }),
                  l.h.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                    code: t,
                  }),
                  { guildTemplate: null, code: t }
                ),
              )
              .finally(() => {
                o.delete(t);
              });
            return o.set(t, d), d;
          },
          loadTemplatesForGuild: (e) =>
            i.Bo.get({
              url: s.Rsh.GUILD_TEMPLATES(e),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(
              (e) => (
                l.h.dispatch({
                  type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                  guildTemplates: e.body,
                }),
                e
              ),
            ),
          createGuildTemplate: (e, t, n) =>
            i.Bo.post({
              url: s.Rsh.GUILD_TEMPLATES(e),
              body: { name: t, description: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) => {
              l.h.dispatch({
                type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                guildTemplate: e.body,
                code: e.body.code,
              });
            }),
          syncGuildTemplate: (e, t) =>
            i.Bo.put({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) => {
              l.h.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t,
              });
            }),
          updateGuildTemplate: (e, t, n, a) =>
            i.Bo.patch({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              body: { name: n, description: a },
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then((e) => {
              l.h.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t,
              });
            }),
          deleteGuildTemplate: (e, t) =>
            i.Bo.del({
              url: s.Rsh.GUILD_TEMPLATE(e, t),
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(() => {
              l.h.dispatch({
                type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                guildId: e,
                code: t,
              });
            }),
        };
    },
    692744(e, t, n) {
      n.d(t, { el: () => d, xf: () => o });
      var i = n(572808),
        l = n(368662),
        a = n(985018);
      function r(e) {
        return { userId: e.user_id, position: e.position, avatar: e.avatar };
      }
      function s(e) {
        return { id: e.id, claimedBy: e.claimed_by };
      }
      function o(e) {
        return {
          roomId: e.room_id,
          participants: e.participants.map(r),
          seats: e.seats.map(s),
        };
      }
      function d(e) {
        switch (e) {
          case i.wS.RADIO:
            return a.intl.string(l.default.AjiGKB);
          case i.wS.ENVIRONMENT:
            return a.intl.string(l.default.YEYIbI);
          case i.wS.CAMPFIRE:
            return a.intl.string(l.default["Vk9+Ez"]);
          default:
            return "";
        }
      }
    },
    572808(e, t, n) {
      n.d(t, {
        PZ: () => d,
        TU: () => s,
        dG: () => h,
        oo: () => u,
        qS: () => c,
        qi: () => o,
        wS: () => E,
      });
      var i,
        l,
        a,
        r,
        s =
          (((i = {}).SLEEPY = "sleepy"),
          (i.CHILL = "chill"),
          (i.JAZZY = "jazzy"),
          i),
        o =
          (((l = {}).ENVIRONMENT = "environment"),
          (l.CAMPFIRE = "campfire"),
          l),
        d =
          (((a = {}).NONE = "none"),
          (a.GOLDFISH = "goldfish"),
          (a.GOLDFISH_BLUE = "goldfishBlue"),
          (a.GOLDFISH_PINK = "goldfishPink"),
          (a.POPCORN = "popcorn"),
          (a.POPCORN_PURPLE = "popcornPurple"),
          (a.POPCORN_BLUE = "popcornBlue"),
          (a.IMP = "imp"),
          (a.IMP_BLUE = "impBlue"),
          (a.IMP_PINK = "impPink"),
          a);
      let u = [
          "none",
          "goldfish",
          "goldfishBlue",
          "goldfishPink",
          "popcorn",
          "popcornPurple",
          "popcornBlue",
          "imp",
          "impBlue",
          "impPink",
        ],
        c = {
          none: {
            name: "none",
            width: 0,
            height: 0,
            offset: { top: 0, left: 0 },
          },
          goldfish: {
            name: "goldfish",
            width: 136,
            height: 236,
            offset: { top: 100, left: -6 },
          },
          goldfishBlue: {
            name: "goldfishBlue",
            width: 136,
            height: 236,
            offset: { top: 100, left: -6 },
          },
          goldfishPink: {
            name: "goldfishPink",
            width: 136,
            height: 236,
            offset: { top: 100, left: -6 },
          },
          popcorn: {
            name: "popcorn",
            width: 128,
            height: 124,
            offset: { top: 24, left: -60 },
          },
          popcornPurple: {
            name: "popcornPurple",
            width: 128,
            height: 124,
            offset: { top: 24, left: -60 },
          },
          popcornBlue: {
            name: "popcornBlue",
            width: 128,
            height: 124,
            offset: { top: 24, left: -60 },
          },
          imp: {
            name: "imp",
            width: 160,
            height: 176,
            offset: { top: 72, left: -28 },
          },
          impBlue: {
            name: "impBlue",
            width: 160,
            height: 176,
            offset: { top: 72, left: -28 },
          },
          impPink: {
            name: "impPink",
            width: 160,
            height: 176,
            offset: { top: 72, left: -28 },
          },
        },
        h = [
          {
            id: 1,
            x: 722,
            y: 1203,
            dimensions: { width: 123, height: 102 },
            player: { x: 54, y: 12 },
            assetKey: "cooler",
            shadowPosition: { x: -79, y: 102 },
          },
          {
            id: 2,
            x: 894,
            y: 1100,
            dimensions: { width: 123, height: 157 },
            player: { x: 62, y: 72 },
            assetKey: "chair",
            shadowPosition: { x: -28, y: 161 },
          },
          {
            id: 3,
            x: 1024,
            y: 1156,
            dimensions: { width: 122, height: 58 },
            player: { x: 48, y: 10 },
            assetKey: "leftRock",
          },
          {
            id: 4,
            x: 1173,
            y: 1175,
            dimensions: { width: 144, height: 64 },
            player: { x: 0, y: 0 },
            assetKey: "logLeft",
          },
          {
            id: 5,
            x: 1312,
            y: 1184,
            dimensions: { width: 156, height: 74 },
            player: { x: 0, y: 12 },
            assetKey: "logRight",
          },
          {
            id: 6,
            x: 1398,
            y: 1254,
            dimensions: { width: 116, height: 60 },
            player: { x: -24, y: 0 },
            assetKey: "rightRock",
          },
        ];
      var E =
        (((r = {}).RADIO = "radio"),
        (r.ENVIRONMENT = "environment"),
        (r.CAMPFIRE = "campfire"),
        r);
    },
    962392(e, t, n) {
      n.d(t, { O: () => a, h: () => r });
      var i = n(600975),
        l = n(688151);
      let a = (0, i.C)({
        kind: "guild",
        id: "2026-04_voice_invite_suggestion_placement",
        label: "Voice Invite Suggestion Placement",
        commonTriggerPoint: l.$G.VOICE_CALL,
        defaultConfig: { placement: "top" },
        treatments: [
          {
            id: 0,
            label: "Control (Top Placement)",
            config: { placement: "top" },
          },
          {
            id: 1,
            label: "Treatment (Bottom Placement)",
            config: { placement: "bottom" },
          },
        ],
      });
      function r(e, t) {
        return a.useExperiment(
          { guildId: e.guildId, location: e.location },
          { autoTrackExposure: t.autoTrackExposure },
        );
      }
    },
    548965(e, t, n) {
      n.d(t, {
        FH: () => g,
        ML: () => d,
        P4: () => E,
        hw: () => I,
        iQ: () => _,
        pX: () => S,
        pd: () => A,
      }),
        n(321073);
      var i = n(284009),
        l = n.n(i),
        a = n(306173),
        r = n(626584),
        s = n(723426);
      let o = new r.A("libdiscoreExperiments"),
        d = [],
        u = Symbol("unknown");
      class c {
        id;
        inner = null;
        cachedConfig = u;
        constructor(e, t) {
          (this.id = e), d.push(this);
        }
        getEnabledFeatureName() {
          let e = this.getCachedConfig();
          return void 0 === e || e.treatmentId <= 0
            ? null
            : `${this.id}:${e.treatmentId}`;
        }
        getCachedConfig() {
          return (
            this.cachedConfig === u &&
              ((0, a.xd)()
                ? (this.cachedConfig = (0, a.Ih)().getConfig(this.id))
                : (this.cachedConfig = void 0)),
            this.cachedConfig
          );
        }
        setExperiment(e) {
          this.inner = e;
        }
        getCurrentConfig() {
          return (l()(
            null != this.inner,
            "experiment must be set before calling getCurrentConfig",
          ),
          "getCurrentConfig" in this.inner)
            ? this.inner.getCurrentConfig({ location: "default" })
            : this.inner.getConfig({ location: "default" });
        }
      }
      class h extends c {
        label;
        defaultValue;
        constructor(e, t, n = !1) {
          super(e), (this.label = t), (this.defaultValue = n);
        }
        getLabel() {
          return this.label;
        }
        getTreatments() {
          return [{ treatmentId: 0 }, { treatmentId: 1 }];
        }
        getCachedEnabled() {
          let e = this.getCachedConfig();
          return null == e || -1 === e.treatmentId
            ? this.defaultValue
            : 1 === e.treatmentId;
        }
      }
      let E = new (class extends c {
          storeName;
          constructor(e, t, n) {
            super(e, n), (this.storeName = t);
          }
          getCachedBridgedStoreMode() {
            let e = this.getCachedConfig(),
              t = (() => {
                switch (e?.treatmentId ?? -1) {
                  case 1:
                    return "typescript-libdiscore-dual-read";
                  case 2:
                    return "libdiscore";
                  default:
                    return "typescript";
                }
              })();
            return (0, s.E)(t);
          }
          getEnabledFeatureName() {
            let e = this.getCachedBridgedStoreMode();
            return "typescript" === e
              ? null
              : `BridgedStore[${this.storeName},${e}]`;
          }
          getLabel() {
            return `libdiscore '${this.storeName}' Migration`;
          }
          getTreatments() {
            return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
          }
        })("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor"),
        A = new (class extends c {
          MAX_EMISSIONS_PER_APP_LAUNCH = 5;
          emissionsCount = 0;
          getLabel() {
            return "libdiscore Telemetry";
          }
          getTreatments() {
            return [
              { treatmentId: 0 },
              { treatmentId: 1 },
              { treatmentId: 2 },
              { treatmentId: 3 },
            ];
          }
          getMetricsSampleRate() {
            let e = this.getCachedConfig();
            switch (e?.treatmentId) {
              case 1:
                return 0.01;
              case 2:
                return 0.05;
              case 3:
                return 1;
              default:
                return 0;
            }
          }
          didEmit() {
            this.emissionsCount++;
          }
          shouldCollectMetrics() {
            let e = this.getMetricsSampleRate();
            return (
              0 !== e &&
              (1 === e ||
                (!(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) &&
                  Math.random() < e))
            );
          }
        })("2025-09-libdiscore-telemetry"),
        _ = new h(
          "2025-11-defer-load-late-lazy-cache",
          "Allow react to render before lazy cache is loaded",
        );
      class p extends c {
        label;
        treatmentCount;
        getLabel() {
          return this.label;
        }
        getTreatments() {
          return Array.from({ length: this.treatmentCount }, (e, t) => ({
            treatmentId: t,
          }));
        }
        constructor(e, t, n) {
          super(e), (this.label = t), (this.treatmentCount = n);
        }
      }
      let g = new p("2026-01-android-rmle", "Android Pull Mode Rendering", 4);
      new p("2026-02-android-fresco-cache", "Android Fresco Cache", 3),
        new h(
          "2026-02-android-chat-mosaic-shared-pool",
          "Android Chat Mosaic Shared Pool",
        ),
        new h(
          "2026-03-mobile-hermes-occupancy-target",
          "Android Hermes Occupancy Target",
        );
      let f = !1;
      function I() {
        return f;
      }
      function S() {
        (0, a.xd)() &&
          (o.info("Clearing libdiscore experiment cache and disabling sync"),
          (f = !0),
          (0, a.Ih)().clearCache());
      }
    },
    917878(e, t, n) {
      n.d(t, { A: () => r, a: () => i }), n(134528), n(947204);
      let i = "NativeAppStartup";
      function l(e, t, n, i, l) {
        return `${e}:${t}:${n}:${i}:${l}`;
      }
      class a {
        channelsFetchStarted = new Set();
        channelsFetchedWithLocalMessages = new Set();
        channelsFetchedNetwork = new Set();
        fetchLogs = new Map();
        recordChannelFetchStart(e, t, n, i, a) {
          this.channelsFetchStarted.add(e),
            this.fetchLogs.set(l(e, t, n ?? null, i ?? null, a), {
              channelId: e,
              before: n ?? null,
              after: i ?? null,
              limit: a,
              startTime: Date.now(),
            });
        }
        recordChannelFetchedLocal(e, t, n, i, a, r) {
          this.channelsFetchedWithLocalMessages.add(e);
          let s = this.fetchLogs.get(l(e, t, n ?? null, i ?? null, a));
          null != s &&
            (s.localMessageDetails = {
              loadTime: Date.now(),
              count: r.length,
              lastMessageId: r.at(-1)?.id,
            });
        }
        recordChannelFetchedNetwork(e, t, n, i, a, r) {
          this.channelsFetchedNetwork.add(e);
          let s = this.fetchLogs.get(l(e, t, n ?? null, i ?? null, a));
          null != s &&
            (s.networkMessageDetails = {
              loadTime: Date.now(),
              count: r.length,
              lastMessageId: r.at(-1)?.id,
            });
        }
      }
      let r = new a();
    },
    99712(e, t, n) {
      n.d(t, { i: () => l });
      var i = n(115328);
      function l() {
        return i.A.get("enable_recently_active");
      }
      n(239433);
    },
    205297(e, t, n) {
      n.d(t, { A: () => I, S: () => f });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(735438),
        o = n(761929),
        d = n(483517),
        u = n(699426),
        c = n(652215),
        h = n(806931),
        E = n(201181);
      let A = {
          [c.CUs.TOP_RIGHT]: E.En,
          [c.CUs.TOP_LEFT]: E.rG,
          [c.CUs.BOTTOM_LEFT]: E.j$,
          [c.CUs.BOTTOM_RIGHT]: E.Ue,
        },
        _ = {
          [c.CUs.TOP_RIGHT]: o.R.HORIZONTAL_LEFT,
          [c.CUs.TOP_LEFT]: o.R.HORIZONTAL_RIGHT,
          [c.CUs.BOTTOM_LEFT]: o.R.HORIZONTAL_RIGHT,
          [c.CUs.BOTTOM_RIGHT]: o.R.HORIZONTAL_LEFT,
        };
      function p(e, t) {
        let n = 40 * Math.round(e / 40);
        return (0, s.clamp)(n, t.minWidth, t.maxWidth);
      }
      function g(e) {
        let {
            resizableNode: t,
            onResize: n,
            onResizeEnd: a,
            resizeConfig: s,
            position: d,
          } = e,
          u = (0, o.A)({
            minDimension: s.minWidth,
            maxDimension: s.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: _[d],
            usePointerEvents: !0,
          }),
          c = l.useCallback(
            (e) => {
              e.stopPropagation(), u(e);
            },
            [u],
          );
        return (0, i.jsx)("div", {
          onMouseDown: c,
          className: r()(E.Di, A[d]),
        });
      }
      class f extends l.PureComponent {
        static defaultProps = { hidden: !1, roundCorners: !0 };
        state = { isResizing: !1 };
        _draggable;
        _innerDivRef = l.createRef();
        _resizeObserver;
        _width = null;
        _boundWidth = 0;
        _boundHeight = 0;
        _velocityX = 0;
        _velocityY = 0;
        _lastMoveTime;
        _lastMoveX = 0;
        _lastMoveY = 0;
        componentDidMount() {
          this.setPosition(this.props.position);
        }
        componentDidUpdate(e) {
          if (
            null != this.props.width &&
            null != this.props.resizeConfig &&
            e.width !== this.props.width
          ) {
            let t = this._width ?? e.width ?? this.props.width;
            (this._width = this.props.width),
              null != this._innerDivRef.current &&
                (Math.abs(t - this._width) > 40 &&
                  (this._innerDivRef.current.style.transition = "none"),
                (this._innerDivRef.current.style.width = `${this.props.width}px`));
          }
          (e.edgeOffsetTop !== this.props.edgeOffsetTop ||
            e.edgeOffsetLeft !== this.props.edgeOffsetLeft ||
            e.edgeOffsetBottom !== this.props.edgeOffsetBottom ||
            e.edgeOffsetRight !== this.props.edgeOffsetRight ||
            e.maxX !== this.props.maxX ||
            e.maxY !== this.props.maxY ||
            e.dockedRect !== this.props.dockedRect ||
            e.roundCorners !== this.props.roundCorners) &&
            (this.ensureIsInPosition(), this.ensureWidth());
        }
        componentWillUnmount() {
          this._resizeObserver?.disconnect();
        }
        getPosition(e) {
          let t = this._innerDivRef.current;
          if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
          }
          let {
              edgeOffsetTop: n,
              edgeOffsetLeft: i,
              edgeOffsetBottom: l,
              edgeOffsetRight: a,
              maxX: r,
              maxY: s,
              dockedRect: o,
              getDockedRectPositionY: d,
            } = this.props,
            u = Math.round(n),
            h = Math.round(s - l - this._boundHeight),
            E = Math.round(i),
            A = Math.round(r - a - this._boundWidth);
          if (null != o) return { y: d?.(o.y) ?? o.y ?? 0, x: o?.x ?? 0 };
          switch (e) {
            case c.CUs.TOP_LEFT:
              return { y: u, x: E };
            case c.CUs.BOTTOM_LEFT:
              return { y: h, x: E };
            case c.CUs.TOP_RIGHT:
              return { y: u, x: A };
            default:
              return { y: h, x: A };
          }
        }
        setPosition(e) {
          let { x: t, y: n } = this.getPosition(e);
          this._draggable?.setPosition(t, n);
        }
        animateToPosition(e, t) {
          let { x: n, y: i } = this.getPosition(e);
          this._draggable?.animateToPosition(n, i, {}, t);
        }
        ensureIsInPosition = () => {
          this.setPosition(this.props.position);
        };
        ensureWidth = () => {
          let {
            onResize: e,
            edgeOffsetLeft: t,
            edgeOffsetRight: n,
            maxX: i,
            resizeConfig: l,
          } = this.props;
          if (null == l) return;
          let a = p(i - (t + n), l);
          this.getWidth() > a && ((this._width = a), e?.(a));
        };
        calculateDecayingPosition(e, t, n, i) {
          return { x: e + 200 * n, y: t + 200 * i };
        }
        getXOffset() {
          let {
            position: e,
            edgeOffsetLeft: t,
            edgeOffsetRight: n,
          } = this.props;
          switch (e) {
            case c.CUs.TOP_LEFT:
            case c.CUs.BOTTOM_LEFT:
              return -t;
            default:
              return n;
          }
        }
        getYOffset() {
          let {
            position: e,
            edgeOffsetTop: t,
            edgeOffsetBottom: n,
          } = this.props;
          switch (e) {
            case c.CUs.TOP_LEFT:
            case c.CUs.TOP_RIGHT:
              return -t;
            default:
              return n;
          }
        }
        getWidth() {
          let { width: e } = this.props;
          return this._width ?? e ?? h.fG[h.R8.VIDEO];
        }
        get inPopout() {
          return this.props.appContext === c.BRT.POPOUT;
        }
        handleSetInnerDivRef = (e) => {
          this._innerDivRef.current = e;
          let t = e?.ownerDocument.defaultView;
          null != e &&
            null != t &&
            ((this._resizeObserver = new t.ResizeObserver(
              this.ensureIsInPosition,
            )),
            this._resizeObserver?.observe(e));
        };
        handleSetDraggableRef = (e) => {
          this._draggable = e;
        };
        handleResize = (e) => {
          (this._width = e),
            this.state.isResizing || this.setState({ isResizing: !0 });
        };
        handleResizeEnd = (e) => {
          let { onResize: t, resizeConfig: n } = this.props;
          if (null == n) return;
          let i = p(e, n);
          (this._width = i),
            t?.(i),
            this.setState({ isResizing: !1 }),
            this.ensureWidth();
        };
        handleDragStart = (e, t) => {
          (this._velocityX = 0),
            (this._velocityY = 0),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = new Date()),
            this.props.onDragStart?.(e, t);
        };
        handleDrag = (e, t) => {
          let n = new Date(),
            i = Number(n) - Number(this._lastMoveTime);
          0 !== i &&
            ((this._velocityX = (e - this._lastMoveX) / i),
            (this._velocityY = (t - this._lastMoveY) / i),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = n));
        };
        handleDragEnd = (e, t) => {
          let n,
            { maxX: i, maxY: l } = this.props,
            a = this.calculateDecayingPosition(
              e,
              t,
              this._velocityX,
              this._velocityY,
            ),
            r = !0,
            s = !0;
          if (
            (a.x > i / 2 && (s = !1),
            a.y > l / 2 && (r = !1),
            (n =
              r && s
                ? c.CUs.TOP_LEFT
                : r && !s
                  ? c.CUs.TOP_RIGHT
                  : !r && s
                    ? c.CUs.BOTTOM_LEFT
                    : c.CUs.BOTTOM_RIGHT),
            this.animateToPosition(n, this.ensureIsInPosition),
            n !== this.props.position)
          ) {
            let { id: e, onMove: t } = this.props;
            t?.(e, n);
          }
          this.props.onDragEnd?.(e, t);
        };
        render() {
          let {
              maxX: e,
              maxY: t,
              dockedRect: n,
              hidden: l,
              roundCorners: a,
              className: s,
              position: o,
              resizeConfig: u,
            } = this.props,
            c = this.getWidth(),
            h = {};
          return (
            null != n
              ? (h = {
                  transform: `translate3d(${n.x}, ${n.y}, 0)`,
                  width: n.width,
                  height: n.height,
                })
              : null != u &&
                (h = {
                  width: c,
                  transition: this.state.isResizing
                    ? "none"
                    : "width 0.2s ease-in-out",
                }),
            (0, i.jsxs)(d.A, {
              dragAnywhere: !0,
              ref: this.handleSetDraggableRef,
              className: r()(E.GE, s, { [E.R]: l, [E.Vq]: a }),
              maxX: e,
              maxY: t,
              disabled: null != n,
              onDragStart: this.handleDragStart,
              onDrag: this.handleDrag,
              onDragEnd: this.handleDragEnd,
              children: [
                (0, i.jsx)("div", {
                  ref: this.handleSetInnerDivRef,
                  style: h,
                  children: this.props.children,
                }),
                null != u
                  ? (0, i.jsx)(g, {
                      onResize: this.handleResize,
                      onResizeEnd: this.handleResizeEnd,
                      resizableNode: this._innerDivRef,
                      resizeConfig: u,
                      position: o,
                    })
                  : null,
              ],
            })
          );
        }
      }
      let I = l.memo((e) => {
        let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: a,
            maxX: s,
            maxY: o,
            onWindowMove: d,
            onWindowResize: h,
            dockedRect: A,
            pictureInPictureComponents: _,
            appContext: p,
            roundCorners: g,
            resizeConfig: I,
            className: S,
            getDockedRectPositionY: T,
          } = e,
          [m, C] = l.useState(!1),
          O = l.useMemo(
            () =>
              null == t
                ? null
                : n.map((e) => {
                    if (
                      e.id !== t.id &&
                      e.component !== c.o1q.ACTIVITY &&
                      e.component !== c.o1q.FRAME
                    )
                      return null;
                    let n =
                      "string" == typeof e.component
                        ? _[e.component]
                        : e.component;
                    return (0, i.jsx)(n, { width: a, ...e.props }, e.id);
                  }),
            [n, t, a, _],
          ),
          N = l.useCallback(() => {
            C(!0);
          }, []),
          y = l.useCallback(() => {
            C(!1);
          }, []),
          R = l.useMemo(
            () => n.some((e) => e.component === c.o1q.ACTIVITY),
            [n],
          ),
          L = l.useMemo(() => n.some((e) => e.component === c.o1q.FRAME), [n]);
        return null == t
          ? (0, i.jsx)(u.Ay, {
              children: (0, i.jsx)("div", { className: E._I }),
            })
          : (0, i.jsx)(u.Ay, {
              children: (0, i.jsx)("div", {
                className: r()(E._I, { [E.cB]: m }, S),
                children: (0, i.jsx)(f, {
                  appContext: p,
                  position: t.position,
                  id: t.id,
                  hidden: t.hidden,
                  onMove: d,
                  onResize: h,
                  onDragStart: N,
                  onDragEnd: y,
                  maxX: s,
                  maxY: o,
                  width: a,
                  dockedRect: A,
                  getDockedRectPositionY: T,
                  edgeOffsetTop: 80,
                  edgeOffsetBottom: 132,
                  edgeOffsetLeft: 80,
                  edgeOffsetRight: 80,
                  roundCorners: g,
                  resizeConfig: R || L ? void 0 : I,
                  children: O,
                }),
              }),
            });
      });
    },
    301169(e, t, n) {
      n.d(t, { k: () => o });
      var i = n(139033),
        l = n(453771),
        a = n(685408),
        r = n(652215),
        s = n(985018);
      function o(e) {
        let { guildId: t, code: n } = e;
        if (void 0 === n) return !1;
        if (n === r.t02.ENTITY_TOO_LARGE) {
          let e = (0, l.o2)(t);
          return (
            (0, i.A)({
              title: s.intl.string(s.t["/tGlcj"]),
              subtitle: s.intl.formatToPlainString(s.t.fxEKdS, {
                maxSize: (0, l.Hb)(e),
              }),
            }),
            !0
          );
        }
        if (n === r.t02.TOO_MANY_ATTACHMENTS)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.wOr6hB),
              subtitle: s.intl.formatToPlainString(s.t["qqyp/e"], {
                limit: r.XgB,
              }),
            }),
            !0
          );
        if (n === r.t02.ENTITY_EMPTY)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.B3vFdU),
              subtitle: s.intl.string(s.t["9ZpT2C"]),
            }),
            !0
          );
        if (n === r.t02.INVALID_FILE_ASSET)
          return (
            (0, i.A)({
              title: s.intl.string(s.t.B3vFdU),
              subtitle: s.intl.string(s.t.zMEjJg),
            }),
            !0
          );
        let o = (0, a.c)(n);
        return (
          null != o && ((0, i.A)({ title: o.title, subtitle: o.body }), !0)
        );
      }
    },
    833551(e, t, n) {
      n.r(t), n.d(t, { default: () => eh }), n(321073);
      var i = n(17928),
        l = n(499979),
        a = n(228366),
        r = n(684013),
        s = n(56562),
        o = n(635731),
        d = n(626584),
        u = n(736056),
        c = n(328153),
        h = n(567249),
        E = n(495544),
        A = n(760751),
        _ = n(723702),
        p = n(9302),
        g = n(211753),
        f = n(206885),
        I = n(41984),
        S = n(181435),
        T = n(318739),
        m = n(515183),
        C = n(592598),
        O = n(682763),
        N = n(680243),
        y = n(392164);
      let R = new d.A("OverlayRenderStore"),
        L = I.V6.UNSET,
        v = !1,
        D = !1,
        U = (0, _.isWindows)() && _.isPlatformEmbedded && !__OVERLAY__,
        P = null,
        b = {},
        M = {},
        w = null,
        G = null,
        F = new Set([
          s.aI.FULLSCREEN,
          s.aI.BORDERLESS_FULLSCREEN,
          s.aI.UNKNOWN,
          s.aI.MINIMIZED,
        ]),
        V = new Set([s.aI.MINIMIZED, s.aI.UNKNOWN]),
        k = !1,
        H = new o.A(1e4);
      function x(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : S.QJ.Info;
        (0, O.aS)({
          pid: e,
          name: t,
          type: S.ON.Renderer,
          data: n,
          logType: i,
        });
      }
      function B() {
        return N.A.isOverlayEnabled;
      }
      function Y(e) {
        return b[e] ?? null;
      }
      function j() {
        return Object.keys(b).map(Number);
      }
      function $(e, t, n) {
        let i = b[e]?.state;
        (b = { ...b, [e]: { ...t } }),
          i !== t.state && r.A.trackOverlayStateChanged(e, i, t.state, n);
      }
      function z(e) {
        return e in b;
      }
      function W(e, t, n, i) {
        let l = Y(e);
        if (null == l)
          return void R.error(
            `Tried to set property ${t} to ${n} for untracked pid ${e}`,
          );
        let a = { ...l };
        (a[t] = n), $(e, a, i);
      }
      function K(e, t) {
        let n = Y(e);
        if (null == n) return;
        let i = n.timer;
        switch (t) {
          case I.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
          case I.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
          case I.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
        }
        W(e, "timer", i, "timeOverlayEvent"), ec.emitChange();
      }
      async function Z(e) {
        let t = Y(e);
        if (null != t) return t;
        let n = c.Ay.getGameOrTransformedSubgameForPID(e),
          i = Date.now();
        if (null == n)
          return (
            R.error(
              `Tried to track game ${e} but it was not found in RunningGameStore`,
            ),
            null
          );
        let { enabledOOP: l, enabledLegacy: a, ...r } = (0, c.hw)(n),
          s = A.A.findGame(n),
          o = (await (0, m.E1)(e, 0)) ?? n.fullscreenType,
          d = Date.now();
        R.verbose(`Tracking game ${e} for overlay`);
        let u = {
          ...r,
          pid: e,
          oopEnabled: l,
          legacyEnabled: a,
          applicationId: s?.id ?? null,
          gameName: n.name ?? null,
          state: I.AR.INITIALIZING,
          timer: { startTrackingTimestamp: Date.now() },
          fullscreenType: o,
          fullscreenHistory: { [d]: o },
          hasChangedRenderMode: !1,
          supportsOutOfProcess: s?.supportsOutOfProcessOverlay ?? !0,
          successfullyShown: !1,
        };
        return (
          o !== n.fullscreenType && (u.fullscreenHistory[i] = n.fullscreenType),
          $(e, u, "initializeTrackedGame"),
          ec.emitChange(),
          u
        );
      }
      function q(e, t) {
        switch (L) {
          case I.V6.UNSET:
            break;
          case I.V6.IN_PROCESS_V2:
            return {
              source: I.yp.DEV_OVERRIDE,
              enabledOOP: !1,
              enabledLegacy: !0,
              overlayMethod: I.Ue.Hook,
              reason: "Forced in-process overlay rendering",
            };
          case I.V6.OUT_OF_PROCESS_V3:
            return {
              source: I.yp.DEV_OVERRIDE,
              enabledOOP: !0,
              enabledLegacy: !1,
              overlayMethod: I.Ue.OutOfProcess,
              reason: "Forced out-of-process overlay rendering",
            };
          case I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
              source: I.yp.DEV_OVERRIDE,
              enabledOOP: !0,
              enabledLegacy: !1,
              overlayMethod: I.Ue.OutOfProcessLimitedInteraction,
              reason:
                "Forced out-of-process limited interaction overlay rendering",
            };
        }
        if (!(B() || v))
          return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay globally disabled",
          };
        let n = c.Ay.getGameOrTransformedSubgameForPID(e.pid);
        if (null == n)
          return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "No running game found for tracked game",
          };
        let i = (0, c.hw)(n);
        if (!(i.enabledLegacy || i.enabledOOP))
          return {
            source: i.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: i.reason,
          };
        if (!(e.oopEnabled || e.legacyEnabled))
          return {
            source: I.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay disabled for specific game",
          };
        if (!B() && v) {
          let e = (0, m.O4)(n);
          return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : I.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
          };
        }
        if (!(0, p.supportsOutOfProcess)())
          return {
            ...(0, m.O4)(n),
            source: I.yp.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
          };
        if (!i.enabledOOP && i.enabledLegacy)
          return v
            ? {
                ...(0, m.O4)(n),
                source: I.yp.LEGACY_ENABLED,
                reason: "Legacy overlay enabled only",
              }
            : {
                ...i,
                overlayMethod: I.Ue.Disabled,
                source: I.yp.LEGACY_ENABLED,
                reason: "Legacy overlay disabled",
              };
        let l = A.A.findGame(n)?.id,
          a =
            (0, m.zi)(n) || C.A.isLimitedInteractionOverrideEnabled(n.id ?? l);
        switch (t) {
          case s.aI.MINIMIZED:
          case s.aI.WINDOWED:
          case s.aI.MAXIMIZED:
          case s.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && B(),
              l = i.enabledLegacy && v,
              r = a ? I.Ue.OutOfProcessLimitedInteraction : I.Ue.OutOfProcess;
            return {
              ...i,
              overlayMethod: e
                ? r
                : l
                  ? (0, m.O4)(n).overlayMethod
                  : I.Ue.Disabled,
              reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${l}, runningGameFullscreenType: ${t}`,
            };
          }
          case s.aI.FULLSCREEN: {
            let e = (0, m.O4)(n),
              t = e.enabledLegacy && v,
              i = t ? e.overlayMethod : I.Ue.Disabled;
            return {
              ...e,
              overlayMethod: i,
              reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}`,
            };
          }
          case s.aI.UNKNOWN:
            return {
              source: I.yp.FULL_SCREEN_TYPE,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: "Unknown fullscreen type",
            };
          default:
            return {
              source: I.yp.DEFAULT,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: `Missing runningFullscreenType case: ${t}`,
            };
        }
      }
      async function Q(e) {
        if (z(e)) {
          R.verbose(
            `Skipping track for pid ${e} - already tracked. Determining overlay method.`,
          ),
            await el(new Set([e]));
          return;
        }
        if (!(B() || v))
          return void R.verbose(
            `Skipping track for pid ${e} - overlay is disabled`,
          );
        let t = await Z(e);
        if (null == t) return void R.error(`Failed to track game ${e}`);
        x(e, "game_tracking_starting", {
          game_name: t.gameName,
          fullscreen_type: t.fullscreenType,
        }),
          W(
            e,
            "state",
            I.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
            "maybeTrackGame - 1",
          ),
          ec.emitChange(),
          R.verbose(`Determining initial overlay method for pid ${e}`);
        let n = await ee(e);
        R.verbose(`Overlay method for pid ${e}: ${(0, m.gK)(n.overlayMethod)}`),
          K(e, I.sf.SCREEN_TYPE_RESOLUTION),
          await et(e, n, "maybeTrackGame - 2"),
          (function e(t) {
            null == w &&
              (__OVERLAY__ &&
                R.error("Running Polling While in Overlay Context!"),
              (w = setTimeout(async () => {
                w = null;
                let t = j();
                t.length > 0 && (e(m.T$), await el(new Set(t)));
              }, t)));
          })(m.T$),
          (G = n.overlayMethod),
          ec.emitChange(),
          await r.A.updateTrackedGame(e, t);
      }
      async function X(e) {
        if (!z(e))
          return void R.verbose(`Skipping untrack for pid ${e} - not tracked`);
        R.verbose(`Untracking game ${e}`);
        let t = Y(e),
          n = {
            source: t?.source ?? I.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Untracking game",
          };
        await et(e, n, "maybeUntrackGame", !0),
          null != b[e] &&
            ((M[e] = { ...b[e], state: I.AR.GAME_UNTRACKED }), delete b[e]),
          ec.emitChange(),
          await r.A.updateTrackedGame(e, null);
      }
      async function J(e) {
        let t = c.Ay.getGameOrTransformedSubgameForPID(e);
        if (null == t)
          return (
            R.error(
              `Tried to determine first fullscreen type for untracked pid ${e}`,
            ),
            s.aI.UNKNOWN
          );
        let n = t?.fullscreenType ?? s.aI.UNKNOWN;
        if (F.has(n)) {
          let t = await (0, m.E1)(e, 2e3);
          R.verbose(`Resolved fullscreen type for pid ${e}: ${t}`),
            null != t && (n = t);
        }
        return n;
      }
      async function ee(e) {
        let t = await J(e);
        if (V.has(t)) {
          let n = await (0, m.E1)(e, 3e3);
          null != n && (t = n);
        }
        if (t === s.aI.UNKNOWN) {
          let n = await (0, m.E1)(e, 3e3);
          null != n && (t = n);
        }
        let n = Y(e);
        return null == n
          ? (R.error(
              `Tried to determine initial overlay method for untracked pid ${e}`,
            ),
            {
              source: I.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: "No tracked game found",
            })
          : q(n, t);
      }
      async function et(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = t.overlayMethod,
          a =
            l === I.Ue.Disabled
              ? i
                ? I.AR.OVERLAY_TEARING_DOWN
                : I.AR.OVERLAY_DISABLED
              : I.AR.WAITING_FOR_MODULE_TRACKING,
          s = `${n}: ${t.reason}`;
        W(e, "state", a, s),
          W(e, "overlayMethod", l, s),
          W(e, "source", t.source, s),
          W(e, "oopEnabled", t.enabledOOP, s),
          W(e, "legacyEnabled", t.enabledLegacy, s),
          R.verbose(
            `Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, m.gK)(l)}`,
          ),
          ec.emitChange();
        let o = Y(e);
        return (
          null != o && (await r.A.updateTrackedGame(e, o)),
          r.A.updateOverlayMethod(e, l)
        );
      }
      async function en() {
        let e = new Set(
            c.Ay.getRunningGames()
              .filter((e) => c.Ay.getOverlayEnabledForGame(e))
              .map((e) => e.pid),
          ),
          t = new Set(j()),
          n = new Set([...t].filter((t) => !e.has(t)));
        for (let e of n) await X(e), await (0, l.yy)(16);
        let i = new Set([...e].filter((e) => !t.has(e)));
        for (let e of i) await Q(e), await (0, l.yy)(16);
        let a = new Set([...t].filter((t) => e.has(t)));
        await el(a),
          (n.size > 0 || i.size > 0) &&
            R.verbose("Tracked games have changes", {
              trackedPIDsNoLongerValid: n,
              validPIDsNotAlreadyTracked: i,
              pidsAlreadyTracked: a,
            });
      }
      async function ei(e) {
        var t, n, i, l;
        let a = !1,
          r = Y(e);
        if (null == r)
          return (
            R.error(
              `Tried to determine overlay method swap for untracked pid ${e}`,
            ),
            !1
          );
        if (T.Q.has(r.state))
          return (
            R.verbose(
              `Skipping overlay method swap for pid ${e} - state is ${r.state}`,
            ),
            !1
          );
        let s = await (0, m.E1)(e, 0);
        if (null == s)
          return (
            R.error(`Failed to get revised fullscreen type for pid ${e}`), !1
          );
        r.fullscreenType !== s &&
          R.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: s,
          });
        let o = q(r, s);
        if (
          (r.overlayMethod === o.overlayMethod &&
            r.oopEnabled === o.enabledOOP &&
            r.legacyEnabled === o.enabledLegacy) ||
          ((P === p.UNSET_PID || null === P) &&
            r.state === I.AR.OVERLAY_RENDERING)
        )
          return a;
        let d =
            L === I.V6.OUT_OF_PROCESS_V3 ||
            L === I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
          u = L === I.V6.IN_PROCESS_V2,
          c = (0, m.e3)(s, B()),
          h = (0, m.Zj)(r, s, B());
        R.verbose(`Overlay method different for pid ${e}`, {
          oldOverlayMethod: r.overlayMethod,
          revisedFullscreenType: s,
          fullscreenHistory: r.fullscreenHistory,
          newOverlayGameStatus: o,
          shouldSwitchToHook: h,
          shouldSwitchToOutOfProcess: c,
          isForcedInProcess: u,
          isForcedOutOfProcess: d,
          legacyEnabled: v,
          overlayEnabled: B(),
        });
        let E = () => {
          R.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: s,
          }),
            W(
              e,
              "fullscreenHistory",
              { ...r.fullscreenHistory, [Date.now()]: s },
              "updateFullscreenType",
            ),
            W(e, "fullscreenType", s, "updateFullscreenType"),
            ec.emitChange(),
            (a = !0);
        };
        switch (o.overlayMethod) {
          case I.Ue.OutOfProcess:
          case I.Ue.OutOfProcessLimitedInteraction:
            ((c && !u) || d) &&
              (E(),
              await ((t = e),
              (n = o),
              z(t)
                ? Y(t)?.overlayMethod === n.overlayMethod
                  ? (R.verbose(
                      `OOP requested for pid ${t} but already enabled`,
                    ),
                    Promise.resolve())
                  : (R.verbose(`Enabling OOP for pid ${t}`),
                    W(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                    et(t, n, "enableOutOfProcess"))
                : (R.verbose(`OOP requested for untracked pid ${t}`),
                  Promise.resolve())));
            break;
          case I.Ue.Hook:
            ((h && !d) || u || v) &&
              (E(),
              await ((i = e),
              (l = o),
              z(i)
                ? Y(i)?.overlayMethod === I.Ue.Hook
                  ? (R.verbose(
                      `Hook requested for pid ${i} but already enabled`,
                    ),
                    Promise.resolve())
                  : (R.verbose(`Enabling hook for pid ${i}`),
                    W(i, "hasChangedRenderMode", !0, "enableHook"),
                    et(i, l, "enableHook"))
                : (R.verbose(`Hook requested for untracked pid ${i}`),
                  Promise.resolve())));
            break;
          case I.Ue.Disabled:
            E(), et(e, o, "determineOverlayMethodSwap - disabled");
        }
        return a;
      }
      async function el(e) {
        let t = !1;
        for (let n of e) (t = (await ei(n)) || t), await (0, l.yy)(16);
        t &&
          (R.info("determineFullscreenOverlayMethodSwaps has changes"),
          ec.emitChange(),
          x(null, "fullscreen_overlay_method_swap_changes", {
            tracked_game_pids: Array.from(e),
          }));
      }
      async function ea(e, t) {
        if (!f.O) return void R.verbose("setOverlayEnabled: not supported");
        if (
          (R.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
          }),
          (v = e),
          g.x.update({ legacyEnabled: e, oopEnabled: t }),
          R.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
          }),
          e || t)
        )
          return void es();
        for (let e of j()) await X(e), await (0, l.yy)(16);
      }
      function er() {
        en(), (D = !1), (G = null), ed();
      }
      async function es() {
        await eo(), await (0, l.yy)(2e3);
        let e = j(),
          t = new Set([
            ...c.Ay.getRunningGames()
              .filter((e) => c.Ay.getOverlayEnabledForGame(e))
              .map((e) => e.pid),
            ...e,
          ]);
        for (let n of (R.info(
          `Retracking ${t.size} games (${e.length} already tracked)`,
        ),
        t))
          await Q(n), await (0, l.yy)(16);
        R.info(`Retracked ${e.length} games`);
      }
      async function eo() {
        for (let e of j()) await X(e), await (0, l.yy)(16);
      }
      function ed() {
        u.A.hasLoadedExperiments &&
          !D &&
          ((D = !0), ea(g.x.legacyEnabled, g.x.oopEnabled));
      }
      class eu extends i.Ay.Store {
        static displayName = "OverlayRenderStore";
        initialize() {
          this.waitFor(E.default, u.A, A.A, C.A, c.Ay, N.A, h.A),
            this.syncWith([u.A], ed);
        }
        getDevToolsFocusedPidsWithTimestamp() {
          return H;
        }
        getHasLoadedExperiments() {
          return D;
        }
        getForcedRenderMode() {
          return L;
        }
        isAnyOverlayRendering() {
          return f.e
            ? h.A.getWindowOpen(y.f)
            : this.getOverlayRenderingTrackedGames().length > 0;
        }
        getOverlayMethod(e) {
          return __OVERLAY__
            ? I.Ue.Hook
            : (Y(e)?.overlayMethod ?? I.Ue.Disabled);
        }
        isOverlayOOPEnabledForPid(e) {
          let t = this.getOverlayMethod(e);
          return (
            t === I.Ue.OutOfProcess || t === I.Ue.OutOfProcessLimitedInteraction
          );
        }
        hasChangedRenderMode(e) {
          return Y(e)?.hasChangedRenderMode ?? !1;
        }
        getTrackedGameByPid(e) {
          return Y(e);
        }
        getTrackedGames() {
          return b;
        }
        getClosedTrackedGamesHistory() {
          return M;
        }
        getGameOverlayStatus(e) {
          let t = Y(e.pid);
          return null == t
            ? null
            : {
                enabledOOP: t.oopEnabled,
                enabledLegacy: t.legacyEnabled,
                ...t,
              };
        }
        getGlobalEnabledStatus() {
          return { oopEnabled: B(), legacyEnabled: v };
        }
        getAnyGlobalEnabledOverlay() {
          return B() || v;
        }
        getPerGameEnabledStatus(e) {
          if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
          let t = Y(e.pid);
          return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
        }
        getRenderMethod(e) {
          if (null != e) return Y(e)?.overlayMethod ?? void 0;
        }
        getMostRecentOverlayRenderMethod() {
          return G;
        }
        getOverlayRenderingTrackedGames() {
          return Object.values(b).filter(
            (e) =>
              e.overlayMethod !== I.Ue.Disabled &&
              e.state === I.AR.OVERLAY_RENDERING,
          );
        }
      }
      let ec = new eu(
          a.h,
          !U
            ? {}
            : {
                CONNECTION_OPEN: er,
                LOGIN: function () {
                  (D = !1), (G = null);
                },
                LOGOUT: function () {
                  (D = !1), (G = null), eo();
                },
                EXPERIMENT_OVERRIDE_BUCKET: er,
                OVERLAY_SET_ENABLED: function (e) {
                  let { legacyEnabled: t, oopEnabled: n } = e;
                  return (
                    R.info("handleOverlaySetEnabled", {
                      legacyEnabled: t,
                      oopEnabled: n,
                    }),
                    ea(t, n),
                    !0
                  );
                },
                GAME_LAUNCH_SUCCESS: function (e) {
                  if (null != e.pids) for (let t of e.pids) Q(t);
                },
                RUNNING_GAMES_CHANGE: function (e) {
                  for (let t of (__OVERLAY__ &&
                    R.error(
                      "Running handleRunningGamesChange While in Overlay Context!",
                    ),
                  e.added))
                    Q(t.pid);
                  for (let t of e.removed) X(t.pid);
                },
                RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                  if (
                    (__OVERLAY__ &&
                      R.error(
                        "Running handleGameToggleOverlay While in Overlay Context!",
                      ),
                    R.verbose("handleGameToggleOverlay", { action: e }),
                    !(B() || v))
                  ) {
                    if (
                      (R.verbose(
                        "handleGameToggleOverlay: overlay not enabled",
                      ),
                      "pid" in e.game)
                    ) {
                      let t = e.game.pid,
                        n = Y(t);
                      if (null != n)
                        return (
                          et(
                            t,
                            q(n, n.fullscreenType),
                            "handleGameToggleOverlay - global disabled",
                          ),
                          !0
                        );
                    }
                    return !1;
                  }
                  if (!("pid" in e.game))
                    return (
                      R.verbose(
                        "handleGameToggleOverlay: game is not a PersistGame",
                      ),
                      en(),
                      !0
                    );
                  let t = e.game.pid,
                    {
                      newLegacyOverlayEnabledValue: n,
                      newOverlayV3EnabledValue: i,
                    } = e;
                  if (z(t)) {
                    let e = Y(t);
                    e?.legacyEnabled !== n &&
                      W(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                      e?.oopEnabled !== i &&
                        W(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                  }
                  let l = n && v,
                    a = (i ?? !1) && B();
                  return (
                    l || a
                      ? (R.verbose(
                          "handleGameToggleOverlay: game enabled changed",
                          { pid: t, legacyEnabled: l, overlayV3Enabled: a },
                        ),
                        z(t) ? es() : Q(t))
                      : X(t),
                    !0
                  );
                },
                OVERLAY_FORCE_RENDER_MODE: function (e) {
                  return (L = e.mode), es(), !0;
                },
                OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                  if (null != Y(e.pid))
                    return (
                      W(e.pid, "state", e.overlayState, e.reason),
                      R.verbose(
                        `Updating overlay state for pid ${e.pid} to ${e.overlayState}`,
                      ),
                      e.overlayState === I.AR.WAITING_FOR_POPOUT_OPEN ||
                      e.overlayState === I.AR.WAITING_FOR_OVERLAY_OPEN
                        ? K(e.pid, I.sf.MODULE_TRACKING)
                        : e.overlayState === I.AR.OVERLAY_RENDERING &&
                          K(e.pid, I.sf.OVERLAY_RENDERING),
                      !0
                    );
                },
                OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                  return es(), !0;
                },
                OVERLAY_CRASHED: function (e) {
                  return (
                    R.error(`Overlay crashed for pid ${e.pid}`),
                    !!z(e.pid) &&
                      (W(
                        e.pid,
                        "state",
                        I.AR.OVERLAY_CRASHED,
                        "handleOverlayCrashed",
                      ),
                      !0)
                  );
                },
                OVERLAY_RELOAD: function (e) {
                  return (
                    R.error("Overlay reload for pid", { pid: e.pid }), es(), !0
                  );
                },
                OVERLAY_FOCUSED: function (e) {
                  if (((P = e.pid), k)) {
                    let t = [
                      performance.timeOrigin + performance.now(),
                      e.pid ?? null,
                      e.trackMode,
                    ];
                    H.push(t);
                  }
                  return (
                    !(0, p.isValidGamePID)(e.pid) || ((0, p.setPID)(e.pid), !0)
                  );
                },
                OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  r.A.updateOverlayState(
                    e.pid,
                    I.AR.OVERLAY_RENDERING,
                    "handleOverlaySuccessfullyShown",
                  ),
                    z(e.pid) &&
                      W(
                        e.pid,
                        "successfullyShown",
                        !0,
                        "handleOverlaySuccessfullyShown",
                      ),
                    x(e.pid, "overlay_successfully_shown", { pid: e.pid });
                  let t = Y(e.pid);
                  null != t && r.A.updateTrackedGame(e.pid, t);
                },
                OVERLAY_RENDER_DEBUG_MODE: function (e) {
                  return e.mode === I.x7.TrackFocusPIDs && (k = e.enabled), !0;
                },
                OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                  return (H = new o.A(1e4)), !0;
                },
              },
        ),
        eh = ec;
    },
    680243(e, t, n) {
      n.d(t, { A: () => O });
      var i = n(17928),
        l = n(118356),
        a = n(228366),
        r = n(736056),
        s = n(9302),
        o = n(211753),
        d = n(206885),
        u = n(682763),
        c = n(327194);
      let h = new l.Vy("OverlayV3NativeModuleStore"),
        E = !1,
        A = !1,
        _ = null,
        p = !1,
        g = null,
        f = null,
        I = (() => {
          async function e() {
            T(), (_ = c.P.getInstance());
            try {
              await _.initialize(), (E = !0);
            } catch (e) {
              (0, u._r)(null, "module_initialization_failed", { error: e }),
                (E = !1),
                (0, u.mD)(s.UNSET_PID, e, { crashType: "native" });
            } finally {
              C.emitChange();
            }
          }
          return () => (null == f && (f = e()), f);
        })();
      function S(e) {
        __OVERLAY__ ||
          !d.O ||
          (A !== e && ((A = e), e && (0, s.setOutOfProcessSupport)(!0)));
      }
      function T() {
        !__OVERLAY__ &&
          d.O &&
          ((g = null),
          (p = !1),
          h.verbose("Maybe Enable Overlay"),
          S(o.x.oopEnabled));
      }
      class m extends i.Ay.Store {
        static displayName = "Overlay-v3-Native-Module-Store";
        initialize() {
          this.waitFor(r.A);
        }
        get isModuleLoading() {
          return null != f;
        }
        get isOverlayEnabled() {
          return A;
        }
        get isSupported() {
          return d.O;
        }
        get isModuleLoaded() {
          return E;
        }
        get isCrashedDisabled() {
          return p;
        }
        get errorMessage() {
          return g;
        }
        getNativeModule() {
          return _;
        }
      }
      let C = new m(
          a.h,
          __OVERLAY__ || !d.O
            ? {}
            : {
                CONNECTION_OPEN: function () {
                  return I(), !1;
                },
                EXPERIMENT_OVERRIDE_BUCKET: T,
                OVERLAY_SET_ENABLED: function (e) {
                  let { oopEnabled: t } = e;
                  (g = null), S(t);
                },
                OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                  return (g = null), I(), !1;
                },
                OVERLAY_CRASHED: function (e) {
                  let { isCrashedDisabled: t, error: n } = e;
                  return (
                    !0 === t && (p = !0),
                    null != n &&
                      (g = n instanceof Error ? n.message : String(n)),
                    !0
                  );
                },
              },
        ),
        O = C;
    },
    709055(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(723702),
        l = n(19575),
        a = n(567249);
      function r(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = a.A.getWindow(e);
        null == n ||
          n.closed ||
          (i.isPlatformEmbedded ? l.Ay.focus(e, t) : n.focus());
      }
    },
    683760(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(17928),
        l = n(228366),
        a = n(572009),
        r = n(788868);
      let s = "OverridePremiumTypeStore",
        o = {
          premiumTypeOverride: r.$I,
          premiumTypeActual: r.$I,
          createdAtOverride: r.lk,
        };
      function d(e) {
        let { user: t } = e;
        o.premiumTypeActual = (0, a.nq)(t.premium_type);
      }
      class u extends i.Ay.PersistedStore {
        static displayName = s;
        static persistKey = s;
        static migrations = [
          (e) => {
            if (e?.createdAtOverride == null)
              return { ...e, createdAtOverride: r.lk };
          },
        ];
        initialize(e) {
          if (null != e) {
            (o.premiumTypeActual = e?.premiumTypeActual),
              (o.premiumTypeOverride = e?.premiumTypeOverride),
              null != e.createdAtOverride
                ? (o.createdAtOverride = new Date(e.createdAtOverride))
                : (o.createdAtOverride = r.lk);
            return;
          }
          (o.premiumTypeOverride = r.$I), (o.createdAtOverride = r.lk);
        }
        getPremiumTypeOverride() {
          return o.premiumTypeOverride;
        }
        getPremiumTypeActual() {
          return o.premiumTypeActual;
        }
        getCreatedAtOverride() {
          return o.createdAtOverride;
        }
        getState() {
          return o;
        }
        get premiumType() {
          return o.premiumTypeOverride;
        }
      }
      let c = new u(l.h, {
        SET_PREMIUM_TYPE_OVERRIDE: function (e) {
          let { premiumType: t } = e;
          o.premiumTypeOverride = t;
        },
        SET_CREATED_AT_OVERRIDE: function (e) {
          let { createdAt: t } = e;
          o.createdAtOverride = t;
        },
        CURRENT_USER_UPDATE: d,
        CONNECTION_OPEN: d,
      });
    },
    83942(e, t, n) {
      n.d(t, { c: () => d, w: () => o });
      var i = n(17928),
        l = n(495544),
        a = n(763827),
        r = n(116956);
      function s(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function o(e) {
        return (0, i.bG)([r.A, l.default], () => {
          if (null == e) return !0;
          let t = r.A.getUserIds(e);
          return null == t || s(t, l.default.getId());
        });
      }
      function d() {
        return (0, i.bG)([a.A, l.default], () => {
          let e = a.A.getUserIds();
          return null == e || s(e, l.default.getId());
        });
      }
    },
    910425(e, t, n) {
      n.d(t, { dx: () => u, UF: () => c, Sc: () => h, Lg: () => E }), n(938796);
      var i = n(665260),
        l = n(17928),
        a = n(626584),
        r = n(677413),
        s = n(287809);
      let o = (0, n(945810).mj)({
        name: "2026-04-scheduled-messages-ui-backup",
        kind: "user",
        defaultConfig: !1,
        variations: { 0: !1, 1: !0 },
      });
      var d = n(652215);
      let u = new a.A("Scheduled Messages");
      function c(e) {
        let { content: t, flags: n } = e,
          [l, a] = (0, r.A)(t);
        return l
          ? [a, (0, i.UI)(n ?? 0, d.pr7.SUPPRESS_NOTIFICATIONS)]
          : [t, n ?? 0];
      }
      function h() {
        let e = (0, l.bG)(
            [s.default],
            () => s.default.getCurrentUser()?.isStaff() ?? !1,
          ),
          t = o.useConfig({ location: "useCanUseScheduledMessages" });
        return e || t;
      }
      function E(e) {
        var t;
        return {
          userId: e.user_id,
          scheduledMessageId: e.scheduled_message_id,
          sendAtTimestamp: e.send_at_timestamp,
          scheduledMessage: {
            channelId: (t = e.scheduled_message).channel_id,
            content: t.content,
            type: t.type,
            flags: t.flags,
            messageReference: t.message_reference,
          },
          state: e.state,
        };
      }
    },
    517381(e, t, n) {
      n.d(t, { A: () => I }), n(321073);
      var i = n(17928),
        l = n(228366),
        a = n(845584),
        r = n(320095),
        s = n(815807),
        o = n(495544),
        d = n(994500);
      class u {
        isIndexing = !1;
        isHistoricalIndexing = !1;
        isFetching = !1;
        analyticsId = null;
        error = null;
        messages = null;
        documentsIndexed = 0;
        totalResults = null;
        messageIds = new Set();
        isInitialFetchComplete = !1;
        cursor = null;
        handleSearchStart() {
          (this.isFetching = !0),
            (this.isIndexing = !1),
            (this.analyticsId = null),
            (this.error = null);
        }
        handleSearchIndexing() {
          (this.isInitialFetchComplete = !0),
            (this.isIndexing = !0),
            (this.isHistoricalIndexing = !0),
            (this.isFetching = !1),
            (this.error = null);
        }
        handleSearchFailure(e) {
          (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = !1),
            (this.error = new a.LG(e)),
            (this.analyticsId = null),
            (this.documentsIndexed = 0);
        }
        handleSearchSuccess(e, t) {
          let {
            analyticsId: n,
            cursor: i,
            totalResults: l,
            doingHistoricalIndex: a,
            documentsIndexed: r,
          } = e;
          (this.analyticsId = n),
            (this.isFetching = !1),
            (this.isIndexing = !1),
            (this.isInitialFetchComplete = !0),
            (this.isHistoricalIndexing = a),
            (this.error = null),
            (this.documentsIndexed = r),
            (this.cursor = i);
          let s = [...(this.messages ?? [])],
            o = [];
          return (
            t.forEach((e) => {
              this.messageIds.has(e.id) ||
                (this.messageIds.add(e.id), s.push(e), o.push(e));
            }),
            (this.messages = s),
            (this.totalResults = l),
            o
          );
        }
      }
      let c = new Map(),
        h = new Map(),
        E = new Map();
      function A(e) {
        return c.get(e) ?? new u();
      }
      function _(e) {
        let t = A(e);
        return c.set(e, t), t;
      }
      function p(e, t) {
        let n = h.get(e);
        if (null == n) return !1;
        let i = t(n);
        return h.set(e, i), !0;
      }
      function g(e) {
        let { type: t, messageId: n, userId: i, emoji: l } = e;
        if (!(0, s.vp)(e)) return !1;
        let a = o.default.getId() === i;
        return p(n, (n) => {
          let { reactionType: i } = e;
          return "MESSAGE_REACTION_ADD" === t
            ? n.addReaction(l, a, e.colors, i)
            : n.removeReaction(l, a, i);
        });
      }
      class f extends i.Ay.Store {
        static displayName = "SearchMessageStore";
        initialize() {
          this.waitFor(o.default, d.A);
        }
        getMessage(e) {
          return h.get(e);
        }
        getTotalCount(e) {
          return A(e).totalResults;
        }
        getIsInitialFetchComplete(e) {
          return A(e).isInitialFetchComplete;
        }
        getIsIndexing(e) {
          return A(e).isIndexing;
        }
        getIsHistoricalIndexing(e) {
          return A(e).isHistoricalIndexing;
        }
        getDocumentsIndexed(e) {
          return A(e).documentsIndexed;
        }
        getIsFetching(e) {
          return A(e).isFetching;
        }
        getError(e) {
          return A(e).error;
        }
        getMessages(e) {
          return A(e).messages;
        }
        getCursor(e) {
          return A(e).cursor;
        }
        getAnalyticsId(e) {
          return A(e).analyticsId;
        }
        hasSearchState(e) {
          return c.has(e);
        }
      }
      let I = new f(l.h, {
        SEARCH_MESSAGES_START: function (e) {
          e.ids.forEach((e) => {
            _(e).handleSearchStart();
          });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
          e.data.forEach((e) => {
            let t = _(e.id),
              n = e.messages.map((e) => {
                let [t] = e;
                return (0, r.rh)(t);
              });
            t.handleSearchSuccess(e, n).forEach((e) => {
              h.set(e.id, e);
              let t = E.get(e.id) ?? 0;
              E.set(e.id, t + 1);
            });
          });
        },
        SEARCH_MESSAGES_INDEXING: function (e) {
          e.ids.forEach((e) => {
            _(e).handleSearchIndexing();
          });
        },
        SEARCH_MESSAGES_FAILURE: function (e) {
          e.ids.forEach((t) => {
            _(t).handleSearchFailure(e.error);
          });
        },
        SEARCH_MESSAGES_CLEAR: function (e) {
          let t = c.get(e.id);
          if (null == t) return !1;
          t.messageIds.forEach((e) => {
            let t = E.get(e) ?? 0;
            t <= 1 ? (h.delete(e), E.delete(e)) : E.set(e, t - 1);
          }),
            c.delete(e.id);
        },
        SEARCH_MESSAGES_CLEAR_ALL: function (e) {
          (c = new Map()), (h = new Map()), (E = new Map());
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.id;
          if (null == t) return !1;
          let n = h.get(t);
          if (null == n) return !1;
          let i = (0, r.IU)(n, e.message);
          h.set(t, i);
        },
        MESSAGE_REACTION_ADD: g,
        MESSAGE_REACTION_ADD_MANY: function (e) {
          let { messageId: t, reactions: n } = e,
            i = o.default.getId();
          return p(t, (e) => e.addReactionBatch(n, i));
        },
        MESSAGE_REACTION_REMOVE: g,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
          let { messageId: t } = e;
          return p(t, (e) => e.set("reactions", []));
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
          let { messageId: t, emoji: n } = e;
          return p(t, (e) => e.removeReactionsForEmoji(n));
        },
        CONNECTION_OPEN: function () {
          (c = new Map()), (h = new Map()), (E = new Map());
        },
      });
    },
    268988(e, t, n) {
      n.d(t, { A: () => u }), n(321073);
      var i = n(17928),
        l = n(228366),
        a = n(320095);
      let r = new Map();
      function s() {
        r = new Map();
      }
      let o = [];
      class d extends i.Ay.Store {
        static displayName = "SearchRecentMessageStore";
        getRecentMessageAuthorIds(e) {
          return r.get(e) ?? o;
        }
      }
      let u = new d(l.h, {
        SEARCH_MESSAGES_SUCCESS: function (e) {
          let { guildId: t, data: n } = e;
          if (null == t) return !1;
          let i = !1,
            l = [...(r.get(t) ?? [])],
            s = new Set(l);
          return (
            n.forEach((e) => {
              e.messages.forEach((e) => {
                let [t] = e,
                  n = (0, a.rh)(t);
                !s.has(n.author.id) &&
                  s.size < 15 &&
                  (s.add(n.author.id), l.push(n.author.id), (i = !0));
              });
            }),
            i && r.set(t, l),
            i
          );
        },
        SEARCH_RECENT_MESSAGES_CLEAR: s,
        CONNECTION_OPEN: s,
      });
    },
    741812(e, t, n) {
      n.d(t, { A: () => _ });
      var i = n(17928),
        l = n(228366),
        a = n(994500),
        r = n(977997),
        s = n(514581);
      let o = {},
        d = {},
        u = new Set();
      function c() {
        (o = {}), (d = {});
      }
      function h(e) {
        let { relationship: t } = e,
          n = r.A.getVoiceStateForUser(t.id);
        return null != n && null != n.channelId && E(n.channelId, t.id);
      }
      function E(e, t) {
        let n = !1,
          i = !1,
          l = new Set(o[e]),
          r = a.A.isBlocked(t);
        r && !l.has(t)
          ? (l.add(t), (i = !0), (n = !0))
          : r || (n = l.delete(t)),
          0 === l.size && n ? delete o[e] : n && (o[e] = l);
        let u = new Set(d[e]),
          c = a.A.isIgnored(t);
        return (
          c && !u.has(t)
            ? (u.add(t), (i = !0), (n = !0))
            : c || (n = u.delete(t)),
          0 === u.size && n ? delete d[e] : n && (d[e] = u),
          i && s.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
          n
        );
      }
      class A extends i.Ay.Store {
        initialize() {
          this.waitFor(a.A, r.A);
        }
        getBlockedUsersForVoiceChannel(e) {
          return o[e] ?? u;
        }
        getIgnoredUsersForVoiceChannel(e) {
          return d[e] ?? u;
        }
      }
      let _ = new A(l.h, {
        CONNECTION_OPEN: c,
        LOGOUT: c,
        OVERLAY_INITIALIZE: function () {
          c();
          let e = r.A.getAllVoiceStates(),
            t = !1;
          for (let n of Object.values(e))
            for (let e of Object.values(n))
              null != e.channelId && (t = E(e.channelId, e.userId) || t);
          return t;
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e,
            n = !1;
          return (
            t.forEach((e) => {
              null != e.oldChannelId &&
                (null != o[e.oldChannelId] &&
                  (o[e.oldChannelId]?.delete(e.userId), (n = !0)),
                null != d[e.oldChannelId] &&
                  (d[e.oldChannelId]?.delete(e.userId), (n = !0))),
                null != e.channelId && (n = E(e.channelId, e.userId) || n);
            }),
            n
          );
        },
        RELATIONSHIP_ADD: h,
        RELATIONSHIP_REMOVE: h,
        RELATIONSHIP_UPDATE: h,
      });
    },
    49431(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(439372),
        l = n(733391);
      class a extends i.A {
        actions = {
          POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
        };
        onPostConnectionOpen() {
          (0, l.Xw)();
        }
      }
      let r = new a();
    },
    889979(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(554146),
        l = n(439372),
        a = n(626584),
        r = n(367727),
        s = n(710195),
        o = n(733391),
        d = n(832163),
        u = n(271049);
      let c = new a.A("SocialLayerStorefrontAnnouncementManager");
      class h extends l.A {
        _didAttemptToOpenModal = !1;
        _didConnectionOpen = !1;
        actions = {
          LOGOUT: () => this._handleLogout(),
          POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
          SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: (e) =>
            this._handleStorefrontConfigFetchSuccess(e),
          SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: () => {
            this._handleShowAnnouncementModal();
          },
        };
        stores = new Map()
          .set(d.A, () => this._handleSocialLayerStorefrontUpdate())
          .set(s.A, () => this._handleExperimentChange());
        _handleLogout = () => {
          (this._didAttemptToOpenModal = !1), (this._didConnectionOpen = !1);
        };
        _handlePostConnectionOpen = () => {
          this._didConnectionOpen = !0;
        };
        _handleSocialLayerStorefrontUpdate = () => {
          this._handleShowAnnouncementModal();
        };
        _handleExperimentChange = () => {
          this._handleShowAnnouncementModal();
        };
        _handleStorefrontConfigFetchSuccess = (e) => {
          let { config: t } = e,
            n = t.announcementModalConfig?.version ?? 0;
          0 === n ||
            (0, r.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, n).isDismissed ||
            ("idle" === d.A.getStorefrontAffinity().state && (0, o.dS)(),
            this._handleShowAnnouncementModal());
        };
        _handleShowAnnouncementModal = async () => {
          if (
            this._didAttemptToOpenModal ||
            !this._didConnectionOpen ||
            !(0, u.N)({ location: "SocialLayerStorefrontAnnouncementManager" })
          )
            return;
          let e = d.A.getStorefrontAffinity(),
            t = d.A.getAnnouncementModalConfig(),
            l = t?.version ?? 0,
            a =
              "success" === e.state &&
              e.affinity[t?.applicationId ?? ""]?.isEligible;
          if (
            0 !== l &&
            !(0, r.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, l).isDismissed &&
            a
          ) {
            this._didAttemptToOpenModal = !0;
            try {
              let { openSocialLayerStorefrontAnnouncementModal: e } =
                await Promise.all([
                  n.e("6305"),
                  n.e("69273"),
                  n.e("97893"),
                  n.e("77083"),
                  n.e("63009"),
                  n.e("90261"),
                  n.e("80848"),
                  n.e("16933"),
                  n.e("88205"),
                  n.e("45650"),
                  n.e("1195"),
                  n.e("26032"),
                  n.e("25310"),
                  n.e("68495"),
                  n.e("18125"),
                  n.e("65420"),
                  n.e("22513"),
                  n.e("83004"),
                  n.e("13498"),
                  n.e("10191"),
                  n.e("54253"),
                  n.e("71561"),
                  n.e("71934"),
                  n.e("89324"),
                  n.e("7053"),
                  n.e("22846"),
                  n.e("86483"),
                  n.e("39995"),
                  n.e("25568"),
                  n.e("32260"),
                  n.e("40153"),
                  n.e("68953"),
                  n.e("22894"),
                  n.e("93880"),
                  n.e("55990"),
                  n.e("29946"),
                  n.e("7066"),
                  n.e("22995"),
                  n.e("79705"),
                  n.e("23924"),
                  n.e("71470"),
                  n.e("24199"),
                  n.e("57036"),
                  n.e("207"),
                  n.e("88394"),
                  n.e("15380"),
                  n.e("20287"),
                  n.e("28367"),
                  n.e("35429"),
                  n.e("10471"),
                  n.e("63232"),
                  n.e("60235"),
                  n.e("64827"),
                  n.e("23808"),
                  n.e("11301"),
                  n.e("61737"),
                  n.e("79428"),
                  n.e("29963"),
                  n.e("47834"),
                  n.e("30938"),
                  n.e("20317"),
                  n.e("84569"),
                  n.e("2368"),
                  n.e("24313"),
                  n.e("74016"),
                  n.e("48405"),
                  n.e("12544"),
                  n.e("19551"),
                  n.e("7743"),
                  n.e("45959"),
                  n.e("60658"),
                  n.e("18573"),
                  n.e("55936"),
                  n.e("31988"),
                  n.e("71751"),
                  n.e("39667"),
                  n.e("26073"),
                  n.e("34303"),
                  n.e("28866"),
                  n.e("1368"),
                  n.e("8304"),
                  n.e("58038"),
                  n.e("93159"),
                  n.e("11566"),
                  n.e("10556"),
                  n.e("94723"),
                  n.e("62931"),
                  n.e("81987"),
                  n.e("50417"),
                  n.e("58007"),
                  n.e("5812"),
                  n.e("27602"),
                  n.e("83157"),
                  n.e("88941"),
                  n.e("61379"),
                  n.e("34530"),
                  n.e("62680"),
                  n.e("43039"),
                  n.e("21825"),
                  n.e("98125"),
                  n.e("69354"),
                  n.e("28154"),
                  n.e("18441"),
                  n.e("48804"),
                  n.e("88077"),
                  n.e("80527"),
                  n.e("85502"),
                  n.e("18401"),
                  n.e("13681"),
                  n.e("53729"),
                  n.e("32551"),
                  n.e("52367"),
                  n.e("23353"),
                  n.e("36561"),
                  n.e("50015"),
                  n.e("47017"),
                  n.e("22584"),
                  n.e("77998"),
                  n.e("31145"),
                  n.e("11523"),
                  n.e("66900"),
                  n.e("1555"),
                  n.e("44695"),
                  n.e("21690"),
                  n.e("10004"),
                  n.e("55314"),
                  n.e("29177"),
                  n.e("44376"),
                  n.e("83429"),
                  n.e("9233"),
                  n.e("96905"),
                  n.e("33902"),
                  n.e("31644"),
                  n.e("70653"),
                  n.e("993"),
                  n.e("54527"),
                  n.e("72535"),
                  n.e("86949"),
                  n.e("76195"),
                  n.e("39227"),
                  n.e("69747"),
                  n.e("1177"),
                  n.e("26490"),
                  n.e("76170"),
                  n.e("32817"),
                  n.e("36498"),
                  n.e("18943"),
                  n.e("89094"),
                  n.e("84103"),
                  n.e("9915"),
                  n.e("99999"),
                  n.e("5501"),
                  n.e("28561"),
                  n.e("11527"),
                  n.e("96123"),
                  n.e("27168"),
                  n.e("31825"),
                  n.e("39038"),
                  n.e("36320"),
                  n.e("6223"),
                  n.e("20320"),
                  n.e("77245"),
                  n.e("31549"),
                  n.e("43919"),
                  n.e("31390"),
                  n.e("57906"),
                  n.e("37622"),
                  n.e("14879"),
                  n.e("51243"),
                  n.e("45421"),
                  n.e("44265"),
                  n.e("99141"),
                  n.e("21435"),
                  n.e("98793"),
                  n.e("92731"),
                  n.e("25990"),
                  n.e("34472"),
                  n.e("33584"),
                  n.e("63095"),
                  n.e("68647"),
                  n.e("45723"),
                  n.e("67657"),
                  n.e("64615"),
                  n.e("88017"),
                  n.e("87225"),
                  n.e("12373"),
                  n.e("75134"),
                  n.e("84967"),
                  n.e("23216"),
                  n.e("25582"),
                  n.e("30770"),
                  n.e("38835"),
                  n.e("90889"),
                  n.e("78777"),
                  n.e("21570"),
                  n.e("3458"),
                  n.e("62827"),
                  n.e("73547"),
                  n.e("32823"),
                  n.e("34691"),
                  n.e("99593"),
                  n.e("61935"),
                  n.e("62168"),
                  n.e("55602"),
                  n.e("77793"),
                  n.e("13499"),
                  n.e("91381"),
                  n.e("93158"),
                  n.e("58765"),
                  n.e("22407"),
                  n.e("10034"),
                  n.e("73500"),
                  n.e("25252"),
                  n.e("19452"),
                  n.e("53526"),
                  n.e("65881"),
                  n.e("54975"),
                  n.e("32035"),
                  n.e("36126"),
                  n.e("51391"),
                  n.e("29375"),
                  n.e("91942"),
                  n.e("48778"),
                  n.e("89465"),
                  n.e("79440"),
                  n.e("78707"),
                  n.e("62355"),
                  n.e("93708"),
                  n.e("71482"),
                  n.e("10942"),
                  n.e("64480"),
                  n.e("49697"),
                  n.e("71133"),
                  n.e("10745"),
                  n.e("78651"),
                  n.e("77265"),
                  n.e("77084"),
                  n.e("39406"),
                  n.e("96565"),
                  n.e("95093"),
                  n.e("37687"),
                  n.e("62615"),
                  n.e("20007"),
                  n.e("48900"),
                  n.e("60177"),
                  n.e("27773"),
                  n.e("21976"),
                  n.e("1006"),
                  n.e("55577"),
                  n.e("79707"),
                  n.e("23276"),
                  n.e("9662"),
                  n.e("10567"),
                  n.e("80239"),
                  n.e("63645"),
                  n.e("59880"),
                  n.e("27084"),
                  n.e("88343"),
                  n.e("78412"),
                  n.e("77446"),
                  n.e("5636"),
                  n.e("63213"),
                  n.e("95444"),
                  n.e("38472"),
                  n.e("68479"),
                  n.e("48720"),
                  n.e("834"),
                  n.e("84150"),
                  n.e("54791"),
                  n.e("255"),
                  n.e("84317"),
                  n.e("39286"),
                  n.e("58984"),
                  n.e("54961"),
                  n.e("31445"),
                  n.e("54625"),
                  n.e("166"),
                  n.e("17859"),
                  n.e("33134"),
                  n.e("20858"),
                  n.e("26574"),
                ]).then(n.bind(n, 533406));
              e();
            } catch (e) {
              (this._didAttemptToOpenModal = !1),
                c.error("Failed to open announcement modal", e);
            }
          }
        };
      }
      let E = new h();
    },
    536432(e, t, n) {
      n.d(t, {
        Ak: () => v,
        Au: () => L,
        Dv: () => P,
        Ir: () => R,
        ND: () => w,
        Ni: () => G,
        VE: () => U,
        fh: () => D,
        un: () => b,
        wH: () => N,
      }),
        n(321073);
      var i = n(702841),
        l = n(554146),
        a = n(58149),
        r = n(693806),
        s = n(253932),
        o = n(594061),
        d = n(617617),
        u = n(173660),
        c = n(258582),
        h = n(95701),
        E = n(576705),
        A = n(287809),
        _ = n(954571),
        p = n(927578),
        g = n(427262),
        f = n(796774),
        I = n(209932),
        S = n(807348),
        T = n(123973),
        m = n(984813);
      n(980504);
      var C = n(652215),
        O = n(698279);
      function N() {
        let e = s.dG.getSetting();
        return e?.volume ?? 100;
      }
      function y(e, t) {
        return (
          t?.guild_id == null ||
          E.A.can(C.xBc.USE_EXTERNAL_SOUNDS, t) ||
          "0" === e.guildId ||
          e.guildId === t?.guild_id
        );
      }
      function R(e, t, n) {
        let i =
          !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return (
          (p.Ay.canUseSoundboardEverywhere(e) ||
            t.guildId === n?.guild_id ||
            "0" === t.guildId) &&
          y(t, n) &&
          (!i || t.available)
        );
      }
      function L(e) {
        let { mute: t, suppress: n } = (0, u.k)({ channel: e });
        return !t && !n;
      }
      function v(e, t, n, i) {
        (0, f.qP)(t, e, S.Zm.SOUNDBOARD), (0, c.Wv)(t, e, __OVERLAY__, n, i);
      }
      async function D(e) {
        let t = A.default.getCurrentUser(),
          n = (0, r.A)(),
          i = (0, m.z0)(e);
        if (
          null == n ||
          h.Do.has(n.type) ||
          null == i ||
          !p.Ay.canUseCustomCallSounds(t) ||
          !(0, T.lI)()
        )
          return;
        await (0, f.E7)();
        let l = "0" === i.guildId ? "0" : i.guildId,
          a = I.A.getSound(l, i.soundId);
        if (null != a) {
          var s;
          if (!y(a, n) || !R(t, a, n, !0) || !L(n)) return null;
          (s = n.id),
            (0, f.qP)(s, a, S.Zm.JOINED_VOICE_CHANNEL),
            (0, c.Rc)(s, a, __OVERLAY__);
        }
      }
      function U(e) {
        let { isSoundboardButtonDisabled: t = !1 } = e,
          n = (0, i.bG)([A.default], () => A.default.getCurrentUser()),
          a = [];
        if (
          !t &&
          !Object.values(d.A.settings.guilds?.guilds ?? {}).some(
            (e) => null != e.joinSound,
          )
        ) {
          let e = (0, g.G2)(n);
          (p.Ay.canUseCustomCallSounds(n) || e) &&
            a.push(l.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
        }
        return a;
      }
      function P(e, t) {
        (0, o.TG)(
          e,
          (n) => {
            (n.joinSound = void 0),
              M({
                guildId: e,
                changeType: S.Vr.REMOVED,
                soundType: S.ib.ENTRY,
                location: t,
              });
          },
          o.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function b(e, t, n) {
        (0, o.TG)(
          e,
          (i) => {
            let l = "0" === t.guildId,
              a = l ? S.FH.DEFAULT : S.FH.CUSTOM,
              r = null != i.joinSound ? S.Vr.UPDATED : S.Vr.ADDED;
            (i.joinSound = {
              soundId: t.soundId,
              guildId: l ? "0" : t.guildId,
            }),
              M({
                guildId: e,
                changeType: r,
                soundSource: a,
                soundType: S.ib.ENTRY,
                location: n,
              });
          },
          o.Sb.INFREQUENT_USER_ACTION,
        );
      }
      function M(e) {
        let {
          guildId: t,
          changeType: n,
          soundType: i,
          soundSource: l,
          location: a,
        } = e;
        _.default.track(C.HAw.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
          location_stack: a,
          guild_id: "" === t ? 0 : Number(t),
          change_type: n,
          sound_type: i,
          sound_source: l,
        });
      }
      function w(e) {
        let { location: t } = e;
        _.default.track(C.HAw.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, {
          location_stack: t,
        });
      }
      function G(e) {
        let { sound: t, location: n } = e;
        a.Ay.trackWithMetadata(C.HAw.EXPRESSION_FAVORITED, {
          location: n,
          expression_type: O.kx.SOUNDBOARD,
          expression_id: t.soundId,
          expression_name: t.name,
          expression_guild_id: t.guildId,
        });
      }
    },
    123973(e, t, n) {
      n.d(t, { Ay: () => o, lI: () => s }), n(17928);
      var i = n(734057),
        l = n(576705),
        a = n(309010),
        r = n(652215);
      function s() {
        let e = a.A.getVoiceChannelId();
        return o(i.A.getChannel(e));
      }
      function o(e) {
        if (null == e) return !1;
        if (r.kvI.CALLABLE.has(e.type)) return !0;
        let t = l.A.can(r.xBc.USE_SOUNDBOARD, e),
          n = l.A.can(r.xBc.SPEAK, e);
        return e.isGuildVoiceOrThread() && t && n;
      }
    },
    933204(e, t, n) {
      n.d(t, { I: () => d, T: () => o });
      var i = n(64700),
        l = n(702841),
        a = n(71393),
        r = n(209932);
      function s(e, t) {
        return e.filter((e) => null == t.get(e));
      }
      function o() {
        let e = (0, l.yK)([a.A], () => a.A.getGuildIds()),
          t = (0, l.bG)([r.A], () => r.A.getSounds());
        return (0, i.useMemo)(() => s(e, t), [e, t]);
      }
      function d() {
        return s(a.A.getGuildIds(), r.A.getSounds());
      }
    },
    312671(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        l = n(228366),
        a = n(235079);
      let r = { soundpack: a.i.CLASSIC, lastSoundpackExperimentId: null };
      class s extends i.Ay.PersistedStore {
        static displayName = "SoundpackStore";
        static persistKey = "SoundpackStore";
        initialize(e) {
          null != e &&
            ((r = e),
            Object.values(a.i).includes(r.soundpack) ||
              (r.soundpack = a.i.CLASSIC));
        }
        getState() {
          return r;
        }
        getSoundpack() {
          return r.soundpack;
        }
        getLastSoundpackExperimentId() {
          return r.lastSoundpackExperimentId;
        }
      }
      let o = new s(l.h, {
        SET_SOUNDPACK: function (e) {
          let { soundpack: t, forExperimentId: n } = e;
          r = {
            soundpack: t,
            lastSoundpackExperimentId:
              void 0 !== n ? n : r.lastSoundpackExperimentId,
          };
        },
      });
    },
    763758(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(627968),
        l = n(64700),
        a = n(349288);
      class r extends l.PureComponent {
        render() {
          let { text: e, lastItem: t, className: n } = this.props;
          return (0, i.jsxs)("span", {
            children: [
              (0, i.jsx)(a.Anchor, {
                className: n,
                onClick: this.handleClick,
                children: e,
              }),
              t ? "" : ", ",
            ],
          });
        }
        handleClick = () => {
          let { onClick: e, index: t } = this.props;
          e?.(t);
        };
      }
      class s extends l.PureComponent {
        render() {
          let e = this.props.artists.split("; ");
          if (!this.props.canOpen) return e.join(", ");
          let t = e.length - 1;
          return e.map((e, n) =>
            (0, i.jsx)(
              r,
              {
                text: e,
                index: n,
                lastItem: n === t,
                onClick: this.handleOpenSpotifyArtist,
                className: this.props.linkClassName,
              },
              `spotify-artist-${n}`,
            ),
          );
        }
        handleOpenSpotifyArtist = (e) => {
          let { onOpenSpotifyArtist: t } = this.props;
          t?.(e);
        };
      }
    },
    732755(e, t, n) {
      n.d(t, { A: () => N });
      var i = n(812729),
        l = n.n(i),
        a = n(17928),
        r = n(228366),
        s = n(47167),
        o = n(734057),
        d = n(71393),
        u = n(763827),
        c = n(994500),
        h = n(309010),
        E = n(287809),
        A = n(488926),
        _ = n(63995),
        p = n(69407),
        g = n(82149),
        f = n(446600),
        I = n(96566),
        S = n(516607),
        T = n(652215);
      let m = null;
      function C() {
        let e = (function () {
          let e = h.A.getVoiceChannelId();
          if (null == e) return null;
          let t = f.A.getStageInstanceByChannel(e);
          if (null == t) return null;
          let n = o.A.getChannel(e);
          if (null == n || !A.Ib(T.xBc.VIEW_CHANNEL, n)) return null;
          let i = d.A.getGuild(n.getGuildId());
          if (null == i || !i.features.has(T.GuildFeatures.DISCOVERABLE))
            return null;
          let l = (0, g.eL)(n, t),
            a = m?.party?.id === l ? m : null,
            r = _.A.getMutableParticipants(n.id, p.ip.SPEAKER),
            u = r.filter((e) => e.type === p.wY.STREAM).length,
            C = r.length - u,
            O = _.A.getParticipantCount(e) - u,
            N = a?.party?.size != null ? a.party.size[1] : 0;
          return {
            application_id: S.SS,
            name: t.topic ?? n.topic ?? (0, s.m1)(n, E.default, c.A),
            type: (0, I.xn)(n.id) ? T.$pd.WATCHING : T.$pd.LISTENING,
            timestamps: { start: a?.timestamps?.start ?? new Date().getTime() },
            assets: { small_image: i.icon ?? void 0, small_text: i.name },
            party: { id: l, size: [C, Math.max(O, N)] },
          };
        })();
        return !l()(e, m) && ((m = e), !0);
      }
      class O extends a.Ay.Store {
        static displayName = "StageChannelSelfRichPresenceStore";
        initialize() {
          this.waitFor(o.A, d.A, u.A, h.A, _.A, f.A);
        }
        getActivity() {
          return m;
        }
      }
      let N = new O(r.h, {
        CONNECTION_OPEN: C,
        STAGE_INSTANCE_CREATE: C,
        STAGE_INSTANCE_UPDATE: C,
        STAGE_INSTANCE_DELETE: C,
        VOICE_CHANNEL_SELECT: C,
        RTC_CONNECTION_STATE: function (e) {
          let { state: t } = e,
            n = m?.party?.size?.[1] ?? 0;
          return t === T.S7L.RTC_CONNECTED && !(n > 0) && C();
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          if (null == m) return;
          let n = (0, g.UW)(m);
          null != n &&
            null != t.find((e) => e.channelId === n.channelId) &&
            C();
        },
      });
    },
    41237(e, t, n) {
      n.d(t, { A: () => E }), n(321073);
      var i = n(810531),
        l = n(7584),
        a = n(548965),
        r = n(137903),
        s = n(71393),
        o = n(194004);
      function d(e) {
        return {
          id: e.id,
          tags: e.tags,
          type: e.type,
          name: e.name,
          description: e.description,
          format_type: e.format_type,
          guild_id: e.guild_id,
          available: e.available,
          version: e.version,
          user_id: e.user_id,
          [i.L]: "GuildSticker",
        };
      }
      function u(e) {
        let t = {};
        for (let n of e) t[n.id] = d(n);
        return t;
      }
      class c extends r.yW {
        static displayName = "GuildStickersStore";
        database = this.addKKVDatabase("guildStickers");
        stickerByIdIndex = this.database.addSecondaryKVIndex("id");
        getAllGuildStickers = this.database.memoized((e) => {
          let t = new Map();
          for (let n in e) t.set(n, Object.values(e[n].root));
          return t;
        });
        getStickerMetadataMap = this.database.memoized((e) => {
          let t = new Map();
          for (let n in e)
            for (let [i, a] of Object.entries(e[n].root))
              t.set(
                i,
                (function (e, t) {
                  let n = [],
                    { tags: i } = t,
                    a = {
                      type: o.cG.STICKER_NAME,
                      value: t.name.trim().toLocaleLowerCase(),
                    };
                  if ((n.push(a), null != i)) {
                    let t = {
                      type: o.cG.TAG,
                      value: i.trim().toLocaleLowerCase(),
                    };
                    n.push(t);
                    let a = s.A.getGuild(e);
                    if (null != a) {
                      let e = a.name.trim().toLocaleLowerCase();
                      null != e &&
                        "" !== e &&
                        n.push({ type: o.cG.GUILD_NAME, value: e });
                    }
                    let r = l.Ay.getByName(i);
                    null != r &&
                      (n.push({
                        type: o.cG.CORRELATED_EMOJI,
                        value: r.surrogates,
                      }),
                      r.forEachDiversity((e) =>
                        n.push({
                          type: o.cG.CORRELATED_EMOJI,
                          value: e.surrogates,
                        }),
                      ));
                  }
                  return n;
                })(n, a),
              );
          return t;
        });
        getStickersByGuildId = this.database.memoizedPartition((e, t) =>
          Object.values(t),
        );
        getStickerById(e) {
          return this.stickerByIdIndex.get(e) ?? void 0;
        }
        stateWrapper() {
          return this.database;
        }
      }
      function h(e, t, n) {
        if ("full_sync" === t.op) n.setPartition(e, u(t.items));
        else {
          let i = n.getNullablePartition(e);
          if (null == i) n.setPartition(e, u(t.writes));
          else if (t.writes.length > 0 || t.deletes.length > 0) {
            let l = { ...i };
            for (let e of t.deletes) delete l[e];
            for (let e of t.writes) l[e.id] = d(e);
            n.setPartition(e, l);
          }
        }
      }
      let E = new c(
        {
          LOGOUT: (e, t) => t.clear(),
          BACKGROUND_SYNC: (e, t) => t.clear(),
          RESET_SOCKET: (e, t) => t.clear(),
          CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
              l = new Set(n.map((e) => e.id));
            for (let e of i) l.add(e);
            for (let e of t.getPartitionKeys())
              l.has(e) || t.removePartition(e);
            for (let e of n) h(e.id, e.stickers, t);
          },
          GUILD_CREATE: (e, t) => {
            if (null == e.guild.joined_at) return !1;
            h(e.guild.id, e.guild.stickers, t);
          },
          GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
          },
          GUILD_STICKERS_CREATE_SUCCESS: (e, t) => {
            t.setRecord(e.guildId, e.sticker.id, d(e.sticker));
          },
          GUILD_STICKER_FETCH_SUCCESS: (e, t) => {
            t.setRecord(e.sticker.guild_id, e.sticker.id, d(e.sticker));
          },
          GUILD_STICKERS_UPDATE: (e, t) => {
            let n = t.getPartition(e.guildId),
              i = u(e.stickers);
            if (null != n)
              for (let e in i) {
                let t = i[e],
                  l = n[e];
                null != l &&
                  null == t.user_id &&
                  null != l.user_id &&
                  (i[e] = { ...t, user_id: l.user_id });
              }
            t.setPartition(e.guildId, i);
          },
          CACHED_STICKERS_LOADED: (e, t) => {
            for (let [n, i] of e.stickers) t.setPartition(n, u(i));
          },
          GUILD_STICKERS_FETCH_SUCCESS: (e, t) => {
            t.setPartition(e.guildId, u(e.stickers));
          },
        },
        a.P4.getCachedBridgedStoreMode(),
      );
    },
    45494(e, t, n) {
      let i;
      n.d(t, { A: () => M, m: () => f });
      var l = n(735438),
        a = n.n(l),
        r = n(392421),
        s = n(602137),
        o = n(357758),
        d = n(17928),
        u = n(228366),
        c = n(767581),
        h = n(853742),
        E = n(95701),
        A = n(734057),
        _ = n(222823),
        p = n(935208),
        g = n(152007);
      let f = 25,
        I = !1,
        S = !0,
        T = !1,
        m = !1,
        C = null,
        O = s.T.LATEST_ACTIVITY,
        N = [],
        y = 0,
        R = r.n.MATCH_SOME;
      function L() {
        (I = !1),
          (S = !0),
          (T = !1),
          (m = !1),
          (C = null),
          (O = s.T.LATEST_ACTIVITY),
          (i = new Set()),
          (y = 0),
          (N = []),
          (R = r.n.MATCH_SOME);
      }
      function v(e, t) {
        return t === s.T.LATEST_ACTIVITY ? _.Ay.lastMessageId(e.id) : e.id;
      }
      function D() {
        if (null == C) return !1;
        let e = !T,
          t = A.A.getChannel(N[N.length - 1]),
          n = null == t ? null : v(t, O);
        N = a()(A.A.getAllThreadsForParent(C))
          .filter((e) => e.isArchivedThread())
          .filter((t) => {
            if (0 !== i.size) {
              if (R === r.n.MATCH_SOME) {
                if (t.appliedTags?.some((e) => i.has(e)) !== !0) return !1;
              } else if (R === r.n.MATCH_ALL) {
                for (let e of i.values())
                  if (t.appliedTags?.includes(e) !== !0) return !1;
              }
            }
            if (e || null == n) return !0;
            {
              let e = null == t ? null : v(t, O);
              return null != e && p.default.compare(e, n) >= 0;
            }
          })
          .sort((e, t) => p.default.compare(v(e, O), v(t, O)))
          .map((e) => e.id)
          .reverse()
          .value();
      }
      function U(e) {
        if (!(N.indexOf(e) >= 0)) return !1;
        N = N.filter((t) => t !== e);
      }
      let P = [];
      class b extends d.Ay.Store {
        static displayName = "ArchivedThreadsStore";
        initialize() {
          this.waitFor(A.A, g.A, _.Ay);
        }
        get canLoadMore() {
          return T && !I && !m;
        }
        get nextOffset() {
          return y;
        }
        get isInitialLoad() {
          return S;
        }
        isLoading(e, t, n, l) {
          return C === e && O === t && (0, o._)(i, n) && R === l
            ? I
            : (L(), !1);
        }
        getThreads(e, t, n, l) {
          return C === e && O === t && (0, o._)(i, n) && R === l ? N : P;
        }
      }
      let M = new b(u.h, {
        CONNECTION_OPEN: L,
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return U(t.id);
        },
        THREAD_UPDATE: function (e) {
          let { channel: t } = e;
          return C === t.parent_id && !!(0, c.yr)(t.id) && void U(t.id);
        },
        CHANNEL_DELETE: function (e) {
          if (e.channel.id !== C) return !1;
          L();
        },
        LOAD_ARCHIVED_THREADS: function (e) {
          (e.channelId === C &&
            e.sortOrder === O &&
            (0, o._)(e.tagFilter, i) &&
            e.tagSetting === R) ||
            L(),
            (C = e.channelId),
            (O = e.sortOrder),
            (i =
              e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter)),
            (R = e.tagSetting),
            (I = !0),
            (S = !1);
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
          if (
            e.channelId !== C ||
            e.sortOrder !== O ||
            !(0, o._)(e.tagFilter, i) ||
            e.tagSetting !== R
          )
            return !1;
          let t = e.threads.filter((e) => E.A_.has(e.type)).map((e) => e.id);
          N = N.concat(t);
          let n = A.A.getChannel(C);
          null != n &&
            n.isForumLikeChannel() &&
            (0, h._Z)({
              guildId: n.guild_id,
              channelId: n.id,
              numArchivedThreads: N.length,
              hasMoreThreads: e.hasMore,
              filterTagIds: Array.from(e.tagFilter),
              sortOrder: e.sortOrder,
            }),
            D(),
            (T = e.hasMore),
            (y = e.offset + f),
            (I = !1),
            (S = !1);
        },
        LOAD_ARCHIVED_THREADS_FAIL: function (e) {
          if (
            e.channelId !== C ||
            e.sortOrder !== O ||
            !(0, o._)(e.tagFilter, i) ||
            e.tagSetting !== R
          )
            return !1;
          (I = !1), (m = !0), (S = !1);
        },
        RESORT_THREADS: function (e) {
          return (null == C || null == e.channelId || C === e.channelId) && D();
        },
      });
    },
    219065(e, t, n) {
      n.d(t, { A: () => O }), n(321073);
      var i = n(735438),
        l = n.n(i),
        a = n(17928),
        r = n(228366),
        s = n(734057),
        o = n(696451),
        d = n(82057),
        u = n(290863),
        c = n(461213),
        h = n(287809),
        E = n(403362),
        A = n(488926),
        _ = n(935208),
        p = n(427262),
        g = n(652215);
      let f = {};
      class I {
        guildId;
        parentId;
        threadId;
        version = 0;
        sections = {};
        allUserIds = new Set();
        constructor(e, t, n) {
          (this.guildId = e), (this.parentId = t), (this.threadId = n);
        }
        rebuild(e) {
          this.version++,
            (this.sections = {}),
            null != e && (this.allUserIds = new Set(e));
          let t = s.A.getChannel(this.parentId);
          l()(Array.from(this.allUserIds))
            .map((e) => {
              let [n, i, l] = this.calculateNewState(e, t);
              return {
                userId: e,
                sectionId: n,
                displayName: i,
                canViewChannel: l,
              };
            })
            .sort((e, t) => _.default.compare(e.userId, t.userId))
            .sortBy((e) => e.displayName)
            .forEach((e) => {
              this.addUser(
                e.userId,
                e.sectionId,
                e.displayName,
                e.canViewChannel,
                !0,
              );
            });
        }
        updateMultipleUserIds(e, t) {
          return (
            (null == t || this.guildId === t) &&
            0 !== (e = e.filter((e) => this.allUserIds.has(e))).length &&
            (e.length > 50
              ? this.rebuild()
              : e.forEach((e) => this.updateUserId(e)),
            !0)
          );
        }
        updateUserId(e) {
          if (!this.allUserIds.has(e)) return !1;
          let [t, n, i] = this.findOldState(e),
            [l, a, r] = this.calculateNewState(
              e,
              s.A.getChannel(this.parentId),
            );
          return (
            (t !== l || n !== a || i !== r) &&
            (this.removeUserId(e, t), this.addUser(e, l, a, r), !0)
          );
        }
        addUserId(e) {
          let [t, n, i] = this.calculateNewState(
            e,
            s.A.getChannel(this.parentId),
          );
          this.addUser(e, t, n, i);
        }
        removeUserId(e, t) {
          if (
            (this.allUserIds.delete(e),
            null != t && this.removeUserIdFromSection(e, t))
          )
            return !0;
          for (let t in this.sections)
            if (this.removeUserIdFromSection(e, t)) return !0;
          return !1;
        }
        addUser(e, t, n, i, l) {
          this.allUserIds.add(e);
          let a = h.default.getUser(e);
          if (null == a || "" === a.username) return;
          t in this.sections ||
            (this.sections[t] = { sectionId: t, usersById: {}, userIds: [] });
          let r = this.sections[t];
          if (
            ((r.usersById[e] = {
              userId: e,
              displayName: n,
              canViewChannel: i,
            }),
            l)
          )
            r.userIds.push(e);
          else {
            let t = this.findUserIdSortedPosition(r, e, n);
            r.userIds.splice(t, 0, e);
          }
          this.version++;
        }
        findUserIdSortedPosition(e, t, n) {
          let { userIds: i, usersById: l } = e;
          for (let e = 0; e < i.length; e++) {
            let a = i[e],
              r = l[a].displayName;
            if (r === n) {
              if (t < a) return e;
            } else if (null == r) {
              if (null != n) return e;
            } else if (null != n && n < r) return e;
          }
          return i.length;
        }
        removeUserIdFromSection(e, t) {
          let n = this.sections[t];
          return (
            null != t &&
            e in n.usersById &&
            (delete n.usersById[e],
            (n.userIds = n.userIds.filter((t) => t !== e)),
            this.version++,
            !0)
          );
        }
        findOldState(e) {
          for (let t in this.sections) {
            let n = this.sections[t];
            if (e in n.usersById) {
              let i = n.usersById[e];
              return [t, i.displayName, i.canViewChannel];
            }
          }
          return [void 0, void 0, !1];
        }
        calculateNewState(e, t) {
          let n = o.Ay.getMember(this.guildId, e),
            i = h.default.getUser(e),
            l = h.default.getCurrentUser(),
            a =
              i?.id === l?.id
                ? c.A.getStatus()
                : u.A.getStatus(e, this.guildId),
            r =
              null != i &&
              null != t &&
              A.$3({ permission: g.xBc.VIEW_CHANNEL, user: i, context: t }),
            s =
              a !== g.clD.OFFLINE && a !== g.clD.INVISIBLE
                ? (n?.hoistRoleId ?? "online")
                : "offline",
            d = n?.nick ?? p.Ay.getName(i);
          return [s, d?.toLowerCase(), r];
        }
      }
      function S(e) {
        return T(e.user.id);
      }
      function T(e) {
        if (null == e) return !1;
        let t = !1;
        for (let n in f) f[n].updateUserId(e) && (t = !0);
        return t;
      }
      function m(e) {
        let { guildId: t } = e,
          n = !1;
        for (let e in f) f[e].guildId === t && (f[e].rebuild(), (n = !0));
        return n;
      }
      class C extends a.Ay.Store {
        static displayName = "ThreadMemberListStore";
        initialize() {
          this.waitFor(s.A, o.Ay, d.A, u.A, c.A, h.default),
            this.syncWith([d.A], () => {
              let e = d.A.getSubscribedThreadIds(),
                t = !1;
              for (let n in f) e.has(n) || (delete f[n], (t = !0));
              return t;
            }),
            this.syncWith([c.A], () => T(h.default.getCurrentUser()?.id));
        }
        getMemberListVersion(e) {
          return f[e]?.version;
        }
        getMemberListSections(e) {
          return f[e]?.sections;
        }
        canUserViewChannel(e, t, n) {
          let i = f[e];
          if (null == i) return !1;
          let l = i.sections[t]?.usersById[n];
          return l?.canViewChannel ?? !1;
        }
      }
      let O = new C(r.h, {
        CONNECTION_OPEN: function () {
          f = {};
        },
        THREAD_MEMBERS_UPDATE: function (e) {
          if (!(e.id in f)) return !1;
          e.addedMembers?.forEach((t) => {
            let { userId: n } = t;
            return f[e.id].addUserId(n);
          }),
            e.removedMemberIds?.forEach((t) => f[e.id].removeUserId(t));
        },
        THREAD_UPDATE: function (e) {
          let { channel: t } = e;
          if (!(t.id in f) || t.threadMetadata?.archived !== !0) return !1;
          delete f[t.id];
        },
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          if (!(t.id in f)) return !1;
          delete f[t.id];
        },
        CHANNEL_UPDATES: function (e) {
          let { channels: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = !1;
          for (let e in f) n.has(f[e].parentId) && (f[e].rebuild(), (i = !0));
          return i;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
          let { threadId: t, guildId: n, members: i } = e,
            l = s.A.getChannel(t),
            a = l?.parent_id;
          null != a &&
            ((f[t] = new I(n, a, t)), f[t].rebuild(i.map((e) => e.user_id)));
        },
        USER_UPDATE: S,
        PRESENCE_UPDATES: function (e) {
          let { updates: t } = e;
          return t
            .map((e) => {
              let { user: t } = e;
              return T(t.id);
            })
            .some((e) => e);
        },
        GUILD_MEMBER_ADD: S,
        GUILD_MEMBER_UPDATE: S,
        GUILD_MEMBER_REMOVE: S,
        PRESENCES_REPLACE: function (e) {
          let { presences: t } = e,
            n = l()(t)
              .map((e) => e.user?.id)
              .filter(E.Vq)
              .uniq()
              .value(),
            i = !1;
          for (let e in f) f[e].updateMultipleUserIds(n) && (i = !0);
          return i;
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
          let { chunks: t } = e,
            n = !1;
          for (let { guildId: e, members: i } of t) {
            let t = i.map((e) => e.user.id);
            for (let i in f) f[i].updateMultipleUserIds(t, e) && (n = !0);
          }
          return n;
        },
        GUILD_ROLE_UPDATE: m,
        GUILD_ROLE_DELETE: m,
        PASSIVE_UPDATE_V2: function (e) {
          return e.members.reduce((e, t) => T(t.user.id) || e, !1);
        },
      });
    },
    279263(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(867051),
        l = n(548965),
        a = n(137903);
      let r = "Note";
      class s extends a.yW {
        static displayName = "NoteStore";
        database = this.addKVDatabase("notes");
        getNote(e) {
          return this.database.get(e);
        }
        stateWrapper() {
          return this.database;
        }
      }
      let o = new s(
        {
          LOGOUT: (e, t) => t.clear(),
          RESET_SOCKET: (e, t) => t.clear(),
          CONNECTION_OPEN: (e, t) => t.clear(),
          OVERLAY_INITIALIZE: (e, t) => t.clear(),
          USER_NOTE_UPDATE: (e, t) => {
            t.set(e.id, (0, i.yE)(r, { loading: !1, note: e.note }));
          },
          USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, i.yE)(r, { loading: !0, note: null }));
          },
        },
        l.P4.getCachedBridgedStoreMode(),
      );
    },
    702904(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(627968);
      n(64700);
      var l = n(192308),
        a = n(985018);
      function r() {
        function e() {
          (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              n.e("81013"),
              n.e("44602"),
              n.e("25280"),
            ]).then(n.bind(n, 987482));
            return (t) =>
              (0, i.jsx)(e, { source: "Screenshare Unavailable", ...t });
          });
        }
        (0, l.openModalLazy)(async () => {
          let { default: t } = await n.e("11487").then(n.bind(n, 792866));
          return (n) =>
            (0, i.jsx)(t, {
              ...n,
              header: a.intl.string(a.t.GFr0GR),
              body: a.intl.string(a.t.QSk6E8),
              confirmText: a.intl.string(a.t["BK8LK+"]),
              onConfirm: e,
            });
        });
      }
    },
    442353(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(627968);
      n(64700);
      var l = n(192308),
        a = n(231723),
        r = n(253932),
        s = n(652215);
      function o(e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        r.bm.getSetting() || o
          ? (0, l.openModalLazy)(
              async () => {
                let { default: t } = await Promise.all([
                  n.e("22894"),
                  n.e("80848"),
                  n.e("73873"),
                  n.e("20287"),
                  n.e("28367"),
                  n.e("97162"),
                  n.e("95782"),
                  n.e("39176"),
                  n.e("10534"),
                ]).then(n.bind(n, 308229));
                return (n) =>
                  (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey: t === s.BRT.POPOUT ? a.KX : a.SY,
              },
            )
          : e?.();
      }
    },
    164891(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(600975),
        l = n(688151);
      let a = (0, i.C)({
        kind: "guild",
        id: "2024-12_guild_voice_channel_ringing",
        label: "Guild Voice Ringing",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: l.$G.VOICE_CALL,
        treatments: [
          {
            id: 1,
            label: "Allow users to ring each other in Guild Voice Channels",
            config: { enabled: !0 },
          },
        ],
      });
    },
    769022(e, t, n) {
      n.d(t, { A: () => v });
      var i = n(17928),
        l = n(713402),
        a = n(228366),
        r = n(725613),
        s = n(734057),
        o = n(994500),
        d = n(287809),
        u = n(977997),
        c = n(898926);
      function h(e, t) {
        return `voice-activity-${e}-${t}`;
      }
      function E(e) {
        return `voice-user-${e}`;
      }
      let A = "past";
      function _(e) {
        switch (e.eventType) {
          case c.i.USER_JOINED:
            return ["present-user", e.userId];
          case c.i.USER_LEFT:
            return [A, e.userId];
          case c.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
          case c.i.ACTIVITY_ENDED:
            return [A, e.userId];
          default:
            return [];
        }
      }
      function p(e) {
        return -e.timestamp;
      }
      let g = new Map(),
        f = new Map(),
        I = new Map(),
        S = new Map(),
        T = [];
      function m(e) {
        let t = g.get(e);
        if (null == t) return;
        let n = t.values(A, !0);
        if (!(n.length <= 100)) for (let e of n.slice(100)) t.delete(e.key);
      }
      function C(e) {
        let t = g.get(e),
          n = I.get(e),
          i = t
            ?.values(A)
            .find(
              (e) =>
                e.eventType === c.i.USER_LEFT &&
                !o.A.isBlockedOrIgnored(e.userId),
            );
        if (null != i) {
          if ((I.set(e, i.userId), n !== i.userId)) return !0;
        } else if ((I.delete(e), null != n)) return !0;
        return !1;
      }
      function O(e) {
        let t = g.get(e)?.values(A) ?? [],
          n = S.get(e) ?? T,
          i = t.filter((e) => !o.A.isBlockedOrIgnored(e.userId));
        return S.set(e, i.length > 0 ? i : T), i.length !== n.length;
      }
      function N(e, t) {
        let n = E(t),
          i = g.get(e);
        return (
          null != i &&
          (i.set(n, {
            userId: t,
            timestamp: Date.now(),
            eventType: c.i.USER_JOINED,
            key: n,
          }),
          !0)
        );
      }
      function y(e, t, n) {
        let i = E(t),
          l = g.get(e);
        if (null == l) return !1;
        let a = l.get(i);
        if (null == a)
          return (
            null != n &&
            (l.set(i, {
              userId: t,
              key: i,
              eventType: c.i.USER_LEFT,
              timestamp: n,
            }),
            m(e),
            !0)
          );
        if (null != n && (a.eventType === c.i.USER_JOINED || a.timestamp >= n))
          return !1;
        let r = n ?? Date.now();
        return (
          l.set(i, {
            userId: t,
            key: i,
            eventType: c.i.USER_LEFT,
            timestamp: r,
          }),
          m(e),
          !0
        );
      }
      function R() {
        let e = (function () {
          let e = !1;
          for (let t of g.keys()) e = C(t) || e;
          return e;
        })();
        return (
          (function () {
            let e = !1;
            for (let t of g.keys()) e = O(t) || e;
            return e;
          })() || e
        );
      }
      class L extends i.Ay.Store {
        initialize() {
          this.waitFor(s.A, r.A, u.A, o.A, d.default);
        }
        __getLocalVars = () => ({ channelEventMaps: g, lastLeftUserIds: I });
        getLastLeftUserId(e) {
          return I.get(e);
        }
        getHistory(e) {
          return S.get(e) ?? T;
        }
        getHistoryVersion(e) {
          return g.get(e)?.version ?? 0;
        }
        getHistoryExists(e) {
          return g.has(e);
        }
        getLastFetchTime(e) {
          return f.get(e);
        }
      }
      let v = new L(a.h, {
        VOICE_CHANNEL_SELECT: function (e) {
          let t = d.default.getCurrentUser()?.id,
            { channelId: n, currentVoiceChannelId: i } = e;
          if (null == t || null == i || n === i) return !1;
          let l = y(i, t);
          return l && (C(i), O(i)), l;
        },
        VOICE_STATE_UPDATES: function (e) {
          let t = !1,
            n = new Set(),
            i = e.voiceStates.filter(
              (e) => null != e.oldChannelId && g.has(e.oldChannelId),
            ),
            l = e.voiceStates.filter(
              (e) => null != e.channelId && g.has(e.channelId),
            );
          return (
            new Set(
              i.map((e) => e.oldChannelId).filter((e) => null != e),
            ).forEach((e) => {
              var t;
              let n;
              0 === Object.keys(u.A.getVoiceStatesForChannel(e)).length &&
                ((t = e),
                null != (n = g.get(t)) && n.clear(),
                I.delete(t),
                S.delete(t));
            }),
            i.forEach((e) => {
              let { userId: i, oldChannelId: l } = e,
                a = null != l ? g.get(l) : null;
              null != l &&
                null != a &&
                a.values().length > 0 &&
                y(l, i) &&
                ((t = !0), n.add(l));
            }),
            l.forEach((e) => {
              let { userId: i, channelId: l } = e;
              null != l && g.has(l) && N(l, i) && ((t = !0), n.add(l));
            }),
            n.forEach(C),
            n.forEach(O),
            t
          );
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          return (
            !!g.has(t.id) &&
            (g.delete(t.id), f.delete(t.id), I.delete(t.id), S.delete(t.id), !0)
          );
        },
        VOICE_CHANNEL_HISTORY_START_TRACKING: function (e) {
          let { channelId: t } = e;
          if (!g.has(t))
            return (
              g.has(t) ||
                (g.set(t, new l.J(_, p)),
                Object.values(u.A.getVoiceStatesForChannel(t)).forEach((e) => {
                  N(t, e.userId);
                })),
              !0
            );
          return !1;
        },
        VOICE_CHANNEL_HISTORY_FETCH_COMPLETE: function (e) {
          let { channelId: t, voiceLeaves: n, activities: i } = e,
            l = g.get(t);
          if (null == l) return !1;
          let a = !1;
          for (let { userId: e, leftAt: i } of n) a = y(t, e, i) || a;
          let r = new Set(
            i.map((e) => {
              let { userId: t, applicationId: n, applicationName: i } = e;
              return h(t, n ?? i);
            }),
          );
          for (let e of l.values(A))
            e.eventType !== c.i.ACTIVITY_ENDED ||
              r.has(e.key) ||
              (a = l.delete(e.key) || a);
          for (let {
            userId: e,
            applicationId: n,
            applicationName: l,
            endedAt: r,
          } of i)
            a =
              (function (e, t, n, i, l) {
                let a = n ?? i;
                if (null == a) return !1;
                let r = g.get(e);
                if (null == r) return !1;
                let s = h(t, a);
                return (
                  r.set(s, {
                    userId: t,
                    key: s,
                    timestamp: l,
                    applicationId: n,
                    applicationName: i,
                    activityType: "PLAYED_GAME",
                    eventType: c.i.ACTIVITY_ENDED,
                  }),
                  m(e),
                  !0
                );
              })(t, e, n, l, r) || a;
          return a && (C(t), O(t)), a;
        },
        VOICE_CHANNEL_HISTORY_UPDATE_LAST_FETCH_TIME: function (e) {
          let { channelId: t, timestamp: n } = e;
          f.set(t, n);
        },
        CONNECTION_OPEN: function () {
          return (
            0 !== g.size && (g.clear(), f.clear(), I.clear(), S.clear(), !0)
          );
        },
        RELATIONSHIP_UPDATE: R,
        RELATIONSHIP_ADD: R,
        RELATIONSHIP_REMOVE: R,
        LOAD_RELATIONSHIPS_SUCCESS: R,
      });
    },
    898926(e, t, n) {
      n.d(t, { i: () => l });
      var i,
        l =
          (((i = {}).USER_JOINED = "USER_JOINED"),
          (i.USER_LEFT = "USER_LEFT"),
          (i.ACTIVITY_STARTED = "ACTIVITY_STARTED"),
          (i.ACTIVITY_ENDED = "ACTIVITY_ENDED"),
          i);
    },
    212387(e, t, n) {
      n.d(t, { $: () => H, A: () => x });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        r = n.n(a),
        s = n(890856),
        o = n(140735),
        d = n(707554),
        u = n(17928),
        c = n(97808),
        h = n(587895),
        E = n(713517),
        A = n(575593),
        _ = n(38021),
        p = n(844222),
        g = n(583094),
        f = n(661531),
        I = n(775602),
        S = n(139136),
        T = n(474012),
        m = n(929283),
        C = n(245068),
        O = n(761365),
        N = n(366523),
        y = n(403362),
        R = n(652215),
        L = n(778712),
        v = n(997990);
      function D(e) {
        let { sku: t, isFocused: n, user: a } = e,
          r = l.useMemo(() => (0, T.T)(t), [t]);
        if (null == r) return null;
        if ("bundle" === r.type)
          return (0, i.jsx)("div", {
            className: v.hT,
            children: (0, i.jsx)(C.X, {
              product: r,
              isHighlighted: n,
              user: a,
            }),
          });
        switch (r.item.type) {
          case A.R.AVATAR_DECORATION:
            return (0, i.jsx)(m.i, {
              user: a,
              avatarSize: L._3.SIZE_80,
              item: r.item,
              isHighlighted: n,
            });
          case A.R.PROFILE_EFFECT:
            return (0, i.jsx)("div", {
              className: v.xC,
              children: (0, i.jsx)(S.A, {
                skuId: r.item.skuId,
                isHighlighted: n,
                removeSetHeight: !0,
                hideBackground: !0,
              }),
            });
          case A.R.NAMEPLATE:
            return (0, i.jsx)("div", {
              className: v.M4,
              children: (0, i.jsx)("div", {
                className: v.N1,
                children: (0, i.jsx)(O.A, {
                  user: a,
                  nameplate: r.item,
                  isHighlighted: n,
                  size: "small",
                }),
              }),
            });
          default:
            return null;
        }
      }
      function U(e) {
        let { sku: t, isFocused: n } = e;
        return (0, i.jsx)(N.e, {
          shape: "custom",
          containerClassName: r()(v.JS, n && v.P3),
          backgroundImageClassName: v.m1,
          foregroundImageClassName: v.aF,
          sku: t,
        });
      }
      function P(e) {
        let { eventTargetRef: t, assetClassName: n, disableHover: a } = e,
          s = (0, u.bG)([I.A], () => I.A.useReducedMotion),
          { theme: o, saturation: d } = (0, _.wR)(),
          { highContrastModeEnabled: c } = l.useContext(p.C),
          [h, E, A, S] = f.A.colors.TEXT_DEFAULT.resolve({
            theme: o,
            saturation: d,
            highContrastModeEnabled: c,
          }).rgba();
        return (0, i.jsx)("div", {
          className: v.yv,
          children: (0, i.jsx)(g.u, {
            className: r()(v.MO, n),
            dataBinding: {
              reducedMotion: a || s,
              logoColor: { r: h, g: E, b: A, a: S },
            },
            eventTargetRef: t,
            fit: "contain",
          }),
        });
      }
      function b(e) {
        let {
          sku: t,
          isFocused: n,
          user: l,
          eventTargetRef: a,
          assetClassName: r,
          disableHover: s,
        } = e;
        switch (t.productLine) {
          case R.EZt.COLLECTIBLES:
            return (0, i.jsx)(D, { sku: t, isFocused: n, user: l });
          case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, { sku: t, isFocused: n });
          case R.EZt.APPLICATION:
          case R.EZt.BOOST:
          case R.EZt.GUILD_ROLE:
            return null;
          case R.EZt.PREMIUM:
            return (0, i.jsx)(P, {
              eventTargetRef: a,
              assetClassName: r,
              disableHover: s,
            });
          case R.EZt.GUILD_PRODUCT:
            return null;
          default:
            (0, y.xb)(t.productLine);
        }
      }
      var M = n(661492),
        w = n(627001),
        G = n(985018),
        F = n(213494),
        V = n(476324);
      function k(e) {
        return { width: e.size, height: e.size };
      }
      function H(e) {
        let { spec: t, cardStyle: n } = e;
        return (0, i.jsx)("div", {
          className: r()(F.Nr, n),
          style: k(t),
          children: (0, i.jsx)("div", {
            className: F.ho,
            children: (0, i.jsx)(c.eu, {
              src: V,
              size: L._3.SIZE_80,
              "aria-label": G.intl.string(G.t.lqaIxI),
            }),
          }),
        });
      }
      function x(e) {
        let {
            sku: t,
            user: n,
            spec: a,
            children: c,
            cardStyle: A,
            skuPreviewStyle: _,
            skuAssetClassName: p,
            disableHoverOrFocus: g,
            disableRiveHover: f,
            onHoverOrFocusChange: I,
            onClick: S,
            "aria-label": T,
          } = e,
          m = l.useRef(null),
          { isHoveringOrFocusing: C } = (0, E.A)(m),
          O = l.useRef(I),
          N = (0, u.bG)([h.A], () => h.A.getApplication(t.applicationId));
        return (
          l.useEffect(() => {
            O.current = I;
          }, [I]),
          l.useEffect(() => {
            O.current?.(C);
          }, [C]),
          (0, i.jsxs)(s.s, {
            ref: m,
            className: r()(F.Nr, A),
            onClick: S,
            "aria-label": T,
            style: k(a),
            children: [
              (0, i.jsx)(o.A, {
                children: (0, i.jsx)(d.H, { children: (0, M.TC)(t) }),
              }),
              (0, i.jsx)("div", {
                className: r()(F.ev, _),
                children: (0, i.jsx)(b, {
                  sku: t,
                  isFocused: !g && C,
                  user: n,
                  eventTargetRef: f ? void 0 : m,
                  assetClassName: p,
                  disableHover: f,
                }),
              }),
              (0, i.jsx)(w.P, { spec: a, application: N }),
              c,
            ],
          })
        );
      }
    },
    627001(e, t, n) {
      n.d(t, { P: () => E });
      var i = n(627968),
        l = n(503698),
        a = n.n(l),
        r = n(990078),
        s = n(240248),
        o = n(594832),
        d = n(360469),
        u = n(985018),
        c = n(831350);
      function h(e) {
        let { spec: t, icon: n, tooltipText: l } = e,
          d = !(0, s.uJ)(l),
          u = (0, i.jsx)("div", {
            className: a()(c.Fx, { [c.Y_]: d }),
            style: { top: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
          });
        return d
          ? (0, i.jsx)(r.m, {
              text: l,
              position: "top",
              delay: o.Zh,
              children: u,
            })
          : u;
      }
      function E(e) {
        let { spec: t, application: n } = e,
          l = null != n ? n.getIconURL(d.iu.SMALL) : void 0;
        return null == l
          ? null
          : (0, i.jsx)(h, {
              spec: t,
              icon: (0, i.jsx)("div", {
                className: c.In,
                style: { width: t.iconSize, height: t.iconSize },
                children: (0, i.jsx)("img", { src: l, alt: n?.name }),
              }),
              tooltipText: u.intl.string(u.t["4yiU7x"]),
            });
      }
    },
    288737(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(315069);
      class l extends i.A {
        userId;
        channelId;
        sessionId;
        mute;
        deaf;
        selfMute;
        selfDeaf;
        selfVideo;
        selfStream;
        suppress;
        requestToSpeakTimestamp;
        discoverable;
        connectedAt;
        constructor(e) {
          super(),
            (this.userId = e.userId || ""),
            (this.channelId = e.channelId || null),
            (this.sessionId = e.sessionId || null),
            (this.mute = e.mute || !1),
            (this.deaf = e.deaf || !1),
            (this.selfMute = e.selfMute || !1),
            (this.selfDeaf = e.selfDeaf || !1),
            (this.selfVideo = e.selfVideo || !1),
            (this.selfStream = e.selfStream || !1),
            (this.suppress = e.suppress || !1),
            (this.requestToSpeakTimestamp = e.requestToSpeakTimestamp),
            (this.discoverable = e.discoverable ?? !0),
            (this.connectedAt = e.connectedAt);
        }
        isVoiceMuted() {
          return (
            this.selfMute ||
            this.mute ||
            this.suppress ||
            null != this.requestToSpeakTimestamp
          );
        }
        isVoiceDeafened() {
          return this.selfDeaf || this.deaf;
        }
      }
    },
    540999(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(17928),
        l = n(228366),
        a = n(572009),
        r = n(71393),
        s = n(287809),
        o = n(688151),
        d = n(115093);
      let u =
        "production" === d.B.DEVELOPMENT ||
        window.GLOBAL_ENV.RELEASE_CHANNEL === d.B.STAGING;
      function c() {
        u = (0, a.I9)(s.default.getCurrentUser());
      }
      class h extends i.Ay.Store {
        static displayName = "DeveloperExperimentStore";
        isDeveloper = !1;
        initialize() {
          this.waitFor(s.default, r.A),
            Object.defineProperties(this, {
              isDeveloper: { configurable: !1, get: () => u, set: () => {} },
            }),
            c(),
            setTimeout(() => Object.freeze(this));
        }
        getExperimentDescriptor() {
          return u
            ? {
                type: "developer",
                name: "discord_dev_testing",
                revision: 1,
                override: !0,
                bucket: o.RE.TREATMENT_1,
              }
            : null;
        }
      }
      let E = new h(l.h, {
        CONNECTION_OPEN: c,
        OVERLAY_INITIALIZE: c,
        CURRENT_USER_UPDATE: c,
      });
    },
    184989(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(17928),
        l = n(228366);
      class a extends i.Ay.Store {
        guildIds = new Set();
        allGuildIds() {
          return this.guildIds;
        }
        isMember(e) {
          return this.guildIds.has(e);
        }
        constructor() {
          super(
            l.h,
            {
              CACHE_LOADED: (e) => this.handleCacheLoaded(e),
              CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
              CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
              GUILD_CREATE: (e) => this.handleGuildCreate(e),
              GUILD_DELETE: (e) => this.handleGuildDelete(e),
            },
            l.A.Early,
          );
        }
        handleConnectionOpen(e) {
          this.guildIds = new Set([
            ...e.guilds.map((e) => e.id),
            ...e.unavailableGuilds,
          ]);
        }
        handleCacheLoaded(e) {
          this.guildIds = new Set(e.guilds.map((e) => e.id));
        }
        handleCacheLoadedLazy(e) {
          for (let t of e.guilds) this.guildIds.add(t.id);
        }
        handleGuildCreate(e) {
          this.guildIds.add(e.guild.id);
        }
        handleGuildDelete(e) {
          !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id);
        }
      }
      let r = new a();
    },
    82057(e, t, n) {
      let i;
      n.d(t, { A: () => P });
      var l = n(735438),
        a = n.n(l),
        r = n(17928),
        s = n(228366),
        o = n(323176),
        d = n(736056),
        u = n(655116),
        c = n(495544),
        h = n(963307),
        E = n(761640),
        A = n(734057),
        _ = n(919638),
        p = n(696451),
        g = n(71393),
        f = n(763827),
        I = n(994500),
        S = n(309010),
        T = n(967198),
        m = n(652215);
      let C = new o.Ay((e) => {
        for (let t in e)
          null != g.A.getGuild(t) || _.A.isUnavailable(t) || delete e[t];
        s.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions: e });
      });
      function O(e, t) {
        let n = {};
        C.forEach((l) => {
          l !== T.A.getGuildId() &&
            l !== f.A.getGuildId() &&
            l !== A.A.getChannel(S.A.getChannelId())?.getGuildId() &&
            (null == i || i.guildId !== l) &&
            (C.clearWithoutFlushing(l, e), t && (n[l] = C.get(l)));
        }),
          a().isEmpty(n) ||
            s.h.dispatch({
              type: "GUILD_SUBSCRIPTIONS_FLUSH",
              subscriptions: n,
            });
      }
      function N(e, t) {
        return (
          C.subscribeToGuild(e),
          null != t && E.Ay.getSection(t) === m.YvQ.MEMBERS && y(e, t, o.LD)
        );
      }
      function y(e, t, n) {
        if (t === h.sN) return C.subscribeChannel(e, t, n);
        let i = A.A.getChannel(t);
        if (null == i) return !1;
        let l = i.getGuildId();
        return (l !== e && e === m.YYv && C.subscribeToGuild(l), i?.isThread())
          ? i.type === m.rbe.ANNOUNCEMENT_THREAD
            ? C.subscribeChannel(l, i.parent_id, n)
            : !!i.isActiveThread() &&
              C.subscribeThreadMemberList(l, t, S.A.getChannelId())
          : C.subscribeChannel(l, t, n);
      }
      function R(e) {
        let { type: t } = e;
        "CONNECTION_OPEN" === t && O(!0, !1);
        let n = T.A.getGuildId();
        null != n && N(n, S.A.getChannelId(n));
        let i = {};
        C.forEach((e) => {
          null == g.A.getGuild(e)
            ? C.clearWithoutFlushing(e, !0)
            : (i[e] = C.get(e));
        }),
          a().isEmpty(i) ||
            s.h.dispatch({
              type: "GUILD_SUBSCRIPTIONS_FLUSH",
              subscriptions: i,
            });
      }
      function L(e) {
        let { guildId: t, channelId: n } = e;
        return !_.A.isUnavailable(t) && N(t, n);
      }
      function v() {
        return N(T.A.getGuildId(), S.A.getChannelId());
      }
      function D() {
        let e = u.A.getSyncingWith();
        if (null == e)
          null != i && (C.unsubscribeUser(i.guildId, i.userId), (i = null));
        else {
          let { userId: t } = e;
          if ((null != i && i.userId === t) || I.A.isFriend(t)) return !1;
          let n = p.Ay.memberOf(t);
          if (0 === n.length) return !1;
          let [l] = n;
          (i = { guildId: l, userId: t }), C.subscribeUser(l, t);
        }
        return !1;
      }
      class U extends r.Ay.Store {
        static displayName = "GuildSubscriptionsStore";
        initialize() {
          this.waitFor(
            c.default,
            E.Ay,
            A.A,
            d.A,
            _.A,
            p.Ay,
            g.A,
            f.A,
            I.A,
            S.A,
            T.A,
            u.A,
          ),
            this.syncWith([u.A], D),
            this.syncWith([E.Ay], v);
        }
        getSubscribedThreadIds() {
          return C.getSubscribedThreadIds();
        }
        isSubscribedToThreads(e) {
          return C.isSubscribedToThreads(e);
        }
        isSubscribedToAnyMember(e) {
          return C.isSubscribedToAnyMember(e);
        }
        isSubscribedToMemberUpdates(e) {
          return C.isSubscribedToMemberUpdates(e);
        }
        isSubscribedToAnyGuildChannel(e) {
          let t = C.get(e).channels;
          return null != t && Object.keys(t).length > 0;
        }
      }
      let P = new U(s.h, {
        CONNECTION_OPEN: R,
        CONNECTION_RESUMED: R,
        CONNECTION_CLOSED: function () {
          O(!1, !1);
        },
        IDLE: function (e) {
          let { idle: t } = e;
          if (!t) return !1;
          O(!1, !0);
        },
        LOGOUT: function () {
          C.reset();
        },
        VOICE_CHANNEL_SELECT: L,
        CHANNEL_SELECT: L,
        GUILD_CREATE: function (e) {
          let { guild: t } = e;
          t.id === T.A.getGuildId() && v();
        },
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          C.clearWithoutFlushing(t.id, !0);
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function (e) {
          let { guildId: t, userIds: n } = e;
          return (
            n.forEach((e) => {
              e !== c.default.getId() && C.subscribeUser(t, e);
            }),
            !1
          );
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function (e) {
          let { guildId: t, userIds: n } = e;
          return (
            n.forEach((e) => {
              C.unsubscribeUser(t, e);
            }),
            !1
          );
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function (e) {
          let { guildId: t } = e;
          C.subscribeToMemberUpdates(t);
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function (e) {
          let { guildId: t } = e;
          C.unsubscribeFromMemberUpdates(t);
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function (e) {
          let { guildId: t, channelId: n, ranges: i } = e;
          return y(t, n, i);
        },
        GUILD_SUBSCRIPTIONS: function (e) {
          let { guildId: t } = e;
          return C.subscribeToGuild(t);
        },
        CHANNEL_PRELOAD: function (e) {
          let { guildId: t, channelId: n } = e;
          return N(t, n);
        },
        INBOX_OPEN: function (e) {
          let { guildIds: t } = e;
          for (let e of t) null != e && C.subscribeToGuild(e);
          return !1;
        },
        THREAD_UPDATE: function (e) {
          let { channel: t } = e;
          return t.isArchivedThread()
            ? C.unsubscribeThreadMemberList(t.guild_id, t.id)
            : !!t.isActiveThread() &&
                S.A.getChannelId() === t.id &&
                void C.subscribeThreadMemberList(
                  t.guild_id,
                  t.id,
                  S.A.getChannelId(),
                );
        },
        THREAD_DELETE: function (e) {
          let { channel: t } = e;
          return C.unsubscribeThreadMemberList(t.guild_id, t.id);
        },
        THREAD_LIST_SYNC: v,
      });
    },
    958590(e, t, n) {
      let i;
      n.d(t, { A: () => N });
      var l = n(177029),
        a = n.n(l),
        r = n(818125),
        s = n.n(r),
        o = n(725918),
        d = n.n(o),
        u = n(17928),
        c = n(228366),
        h = n(671759),
        E = n(172799);
      let A = {},
        _ = {},
        p = {},
        g = {},
        f = !1,
        I = !1,
        S = !1,
        T = new Map();
      function m(e) {
        return e.toLowerCase();
      }
      function C(e) {
        let { inviteCode: t } = e,
          n = m(t);
        if (!T.has(n)) return !1;
        (T = new Map(T)).delete(n);
      }
      class O extends u.Ay.Store {
        static displayName = "InstantInviteStore";
        getInvite(e) {
          let {
            targetType: t,
            targetUserId: n,
            targetApplicationId: i,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          return t === E.yV.STREAM && null != n
            ? _[e]?.[n]
            : t === E.yV.EMBEDDED_APPLICATION && null != i
              ? p[e]?.[i]
              : A[e];
        }
        getFriendInvite() {
          return i;
        }
        getFriendInvitesFetching() {
          return f;
        }
        canRevokeFriendInvite() {
          return null != i && !I && !S;
        }
        getReceivedInstallationIdForInviteCode(e) {
          return T.get(m(e));
        }
      }
      let N = new O(c.h, {
        CONNECTION_OPEN: function () {
          (A = {}),
            (_ = {}),
            (p = {}),
            (g = {}),
            (i = null),
            (I = !1),
            (S = !1),
            (f = !1);
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          delete A[t.id], delete _[t.id], delete p[t.id];
        },
        FRIEND_INVITE_CREATE_SUCCESS: function (e) {
          (g[e.invite.code] = h.A.createFromServer(e.invite)),
            (i = a()(s()(d()(Object.values(g), "createdAt"))) ?? null),
            (S = !1);
        },
        FRIEND_INVITE_CREATE_FAILURE: function () {
          S = !1;
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function (e) {
          null != e.invites &&
            e.invites.forEach((e) => {
              null != g[e.code] && delete g[e.code];
            }),
            (i = a()(s()(d()(Object.values(g), "createdAt"))) ?? null),
            (I = !1);
        },
        INSTANT_INVITE_CREATE_SUCCESS: function (e) {
          let { channelId: t, invite: n } = e,
            i = h.A.createFromServer(n);
          i.targetType === E.yV.STREAM && null != i.targetUser
            ? (null == _[t] && (_[t] = {}), (_[t][String(i.targetUser.id)] = i))
            : i.targetType === E.yV.EMBEDDED_APPLICATION &&
                null != i.targetApplication
              ? (null == p[t] && (p[t] = {}),
                (p[t][i.targetApplication.id] = i))
              : (A[t] = i);
        },
        INSTANT_INVITE_CREATE_FAILURE: function (e) {
          let { channelId: t } = e;
          A[t] = null;
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
          let { channelId: t } = e;
          A[t] = null;
        },
        FRIEND_INVITE_REVOKE_REQUEST: function () {
          I = !0;
        },
        FRIEND_INVITE_CREATE_REQUEST: function () {
          S = !0;
        },
        FRIEND_INVITES_FETCH_REQUEST: function () {
          f = !0;
        },
        FRIEND_INVITES_FETCH_RESPONSE: function (e) {
          (g = {}),
            e.invites.forEach((e) => {
              g[e.code] = h.A.createFromServer(e);
            }),
            (i = a()(s()(d()(Object.values(g), "createdAt"))) ?? null),
            (f = !1);
        },
        INSTANT_INVITE_CLEAR: function (e) {
          delete A[e.channelId];
        },
        INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function (e) {
          (T = new Map(T)).set(m(e.inviteCode), e.receivedInstallationId);
        },
        INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: C,
        INVITE_MODAL_CLOSE: function (e) {
          let { inviteCode: t } = e;
          return null != t && C({ inviteCode: t });
        },
        LOGOUT: function () {
          if (0 === T.size) return !1;
          T = new Map();
        },
      });
    },
    737613(e, t, n) {
      let i, l;
      n.d(t, { A: () => _ });
      var a = n(17928),
        r = n(506774),
        s = n(228366),
        o = n(734057),
        d = n(71393);
      let u = "hideSuppressWarning",
        c = !1,
        h = !0,
        E = !1;
      class A extends a.Ay.Store {
        static displayName = "PermissionSpeakStore";
        initialize() {
          this.waitFor(o.A, d.A), (E = r.w.get(u) || E);
        }
        isAFKChannel() {
          let e = o.A.getChannel(l);
          if (null == e) return !1;
          let t = d.A.getGuild(e.getGuildId());
          return null != t && e.id === t.afkChannelId;
        }
        shouldShowWarning() {
          return !o.A.getChannel(l)?.isGuildStageVoice() && !h;
        }
      }
      let _ = new A(s.h, {
        CONNECTION_OPEN: function (e) {
          (i = e.sessionId), (c = !1);
        },
        CONNECTION_CLOSED: function () {
          (i = null), (l = null), (h = !0);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce(
            (e, t) =>
              i !== t.sessionId
                ? e
                : (c !== t.suppress && (h = !(c = t.suppress)),
                  l !== t.channelId && ((l = t.channelId), (h = !c)),
                  (E || null == t.channelId) && (h = !0),
                  !0),
            !1,
          );
        },
        PERMISSION_CLEAR_SUPPRESS_WARNING: function (e) {
          let { forever: t } = e;
          (h = !0), t && ((E = !0), r.w.set(u, E));
        },
      });
    },
    543465(e, t, n) {
      n.d(t, { Ay: () => Z, b5: () => Y, wn: () => B }), n(938796);
      var i = n(735438),
        l = n.n(i),
        a = n(665260),
        r = n(17928),
        s = n(228366),
        o = n(544743),
        d = n(164956),
        u = n(152007),
        c = n(95701),
        h = n(935208),
        E = n(734057),
        A = n(71393),
        _ = n(287809),
        p = n(652215),
        g = n(406535),
        f = n(790782),
        I = n(355097);
      let S = {},
        T = {},
        m = !1,
        C = !1,
        O = { flags: 0 },
        N = new o.Ay(),
        y = new o.Ay(),
        R = {
          suppress_everyone: !1,
          suppress_roles: !1,
          mute_scheduled_events: !1,
          mobile_push: !0,
          muted: !1,
          message_notifications: p.orn.ALL_MESSAGES,
          flags: 0,
          channel_overrides: {},
          notify_highlights: p.guM.NULL,
          hide_muted_channels: !1,
          version: -1,
          mute_config: null,
        },
        L = {
          [p.orn.ALL_MESSAGES]: {
            ...R,
            message_notifications: p.orn.ALL_MESSAGES,
          },
          [p.orn.ONLY_MENTIONS]: {
            ...R,
            message_notifications: p.orn.ONLY_MENTIONS,
          },
        },
        v = {},
        D = {},
        U = new Set(),
        P = new Set(),
        b = {},
        M = {};
      function w(e, t) {
        let n = S[e],
          i = n?.channel_overrides ?? {},
          r = Y(t.channel_overrides),
          s = { ...B(e), ...n, ...t, channel_overrides: r };
        N.clearTimer(e),
          l().forEach(i, (e) => {
            y.clearTimer(e.channel_id);
          }),
          G(e, s),
          (S[e] = s),
          (v[e] = z(S[e]));
        let o = l().filter(s.channel_overrides, (e) =>
          a.Lt(e.flags ?? 0, I.vv.OPT_IN_ENABLED),
        );
        (D[e] = new Set(o.map((e) => e.channel_id))),
          (function (e) {
            if (null == e) return;
            let t = new Set(D[e]),
              n = b[e] ?? {};
            for (let e in n) {
              let i = n[e];
              a.Lt(i.flags, I.vv.OPT_IN_ENABLED) ? t.add(e) : t.delete(e);
            }
            Object.keys(n).length > 0 ? (M[e] = t) : delete M[e];
          })(e),
          delete T[e];
      }
      function G(e, t) {
        !0 === t.muted &&
          N.setTimer(e, t.mute_config, () => {
            F(e, { muted: !1 }),
              s.h.dispatch({ type: "GUILD_MUTE_EXPIRED", guildId: e });
          }) &&
          (t.muted = !1),
          l().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
              y.setTimer(t.channel_id, t.mute_config, () => {
                V(e, t.channel_id, { muted: !1 }),
                  s.h.dispatch({
                    type: "CHANNEL_MUTE_EXPIRED",
                    guildId: e,
                    channelId: t.channel_id,
                  });
              }) &&
              (t.muted = !1);
          });
      }
      function F(e, t) {
        let n = S[e];
        w(e, { channel_overrides: n?.channel_overrides ?? {}, ...t });
      }
      function V(e, t, n) {
        let i = x(e, t, n);
        H(e, { [t]: i });
      }
      function k(e, t) {
        let n = {},
          i = (null != e ? b[e] : null) ?? {};
        h.default.keys(t).forEach((l) => {
          let a = x(e, l, t[l]);
          (n[l] = a), (i[l] = { flags: a.flags ?? 0 });
        }),
          null != e && (b[e] = { ...b[e], ...i }),
          H(e, n);
      }
      function H(e, t) {
        let n = S[e],
          i = n?.channel_overrides ?? {};
        w(e, { channel_overrides: null == n ? t : { ...i, ...t } });
      }
      function x(e, t, n) {
        let i = S[e];
        return {
          channel_id: t,
          muted: !1,
          ...(i?.channel_overrides ?? {})[t],
          ...n,
        };
      }
      function B(e) {
        let t = A.A.getGuild(e);
        return L[
          null != t ? t.defaultMessageNotifications : p.orn.ALL_MESSAGES
        ];
      }
      function Y() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e instanceof Array ? l().keyBy(e, "channel_id") : e;
      }
      function j(e) {
        return S[e] ?? B(e);
      }
      function $(e) {
        (m = a.Lt(e.flags, g.i.USE_NEW_NOTIFICATIONS)),
          (C = a.Lt(e.flags, g.i.MENTION_ON_ALL_MESSAGES)),
          (O = e);
      }
      function z(e) {
        return new Set(
          null != e.channel_overrides
            ? l()(e.channel_overrides)
                .filter((e) => (0, o.tG)(e))
                .map((e) => e.channel_id)
                .value()
            : null,
        );
      }
      function W() {
        return !0;
      }
      class K extends r.Ay.PersistedStore {
        static displayName = "UserGuildSettingsStore";
        static persistKey = "collapsedGuilds";
        initialize(e) {
          this.waitFor(E.A, A.A, d.A, u.A, _.default),
            null != e &&
              ((m = e.useNewNotifications ?? !1),
              "userGuildSettings" in e &&
                ((S = e.userGuildSettings),
                (D = l().mapValues(
                  e.optedInChannelsByGuild ?? {},
                  (e) => new Set(e),
                )),
                l().forEach(S, (e, t) => {
                  v[t] = z(e);
                })));
        }
        getState() {
          return { useNewNotifications: m };
        }
        get mentionOnAllMessages() {
          return C;
        }
        isSuppressEveryoneEnabled(e) {
          return j(e).suppress_everyone;
        }
        isSuppressRolesEnabled(e) {
          return j(e).suppress_roles;
        }
        isMuteScheduledEventsEnabled(e) {
          return j(e).mute_scheduled_events;
        }
        isMobilePushEnabled(e) {
          return j(e).mobile_push;
        }
        isMuted(e) {
          let t = j(e);
          return (0, o.tG)(t);
        }
        isTemporarilyMuted(e) {
          let t = j(e);
          return (0, o.wG)(t);
        }
        getMuteConfig(e) {
          return j(e).mute_config;
        }
        getMessageNotifications(e) {
          return j(e).message_notifications;
        }
        getChannelOverrides(e) {
          return j(e).channel_overrides ?? {};
        }
        getNotifyHighlights(e) {
          return j(e).notify_highlights;
        }
        getGuildFlags(e) {
          return j(e).flags;
        }
        getChannelMessageNotifications(e, t) {
          let n = this.getChannelOverrides(e)[t];
          return null == n || null == n.message_notifications
            ? p.orn.NULL
            : n.message_notifications;
        }
        getChannelMuteConfig(e, t) {
          let n = this.getChannelOverrides(e)[t];
          return null != n ? n.mute_config : null;
        }
        getMutedChannels(e) {
          return v[e] ?? U;
        }
        isChannelMuted(e, t) {
          let n = E.A.getChannel(t);
          return (e = n?.getGuildId() ?? e), this.getMutedChannels(e).has(t);
        }
        isCategoryMuted(e, t) {
          let n = E.A.getChannel(t);
          if (null == n) return !1;
          let i = n.parent_id;
          return null != i && this.getMutedChannels(e).has(i);
        }
        resolvedMessageNotifications(e) {
          let t = this.getChannelMessageNotifications(e.guild_id, e.id);
          if (t !== p.orn.NULL) return t;
          if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(
              e.guild_id,
              e.parent_id,
            );
            if (t !== p.orn.NULL) return t;
          }
          return this.getMessageNotifications(e.guild_id);
        }
        resolveUnreadSetting(e) {
          if (c.Le.has(e.type) || (0, c.Gw)(e.type) || !m)
            return f.e.ALL_MESSAGES;
          let t = this.getChannelUnreadSetting(e.guild_id, e.id);
          if (t !== f.e.UNSET) return t;
          if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== f.e.UNSET) return t;
          }
          let n = this.getGuildUnreadSetting(e.guild_id);
          return n !== f.e.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === p.orn.ALL_MESSAGES
              ? f.e.ALL_MESSAGES
              : f.e.ONLY_MENTIONS;
        }
        isGuildOrCategoryOrChannelMuted(e, t) {
          return (
            this.isMuted(e) ||
            this.isCategoryMuted(e, t) ||
            this.isChannelMuted(e, t)
          );
        }
        allowNoMessages(e) {
          return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === p.orn.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) &&
              !this.isChannelRecordOrParentOptedIn(e))
          );
        }
        allowAllMessages(e) {
          return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === p.orn.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) ||
              this.isChannelRecordOrParentOptedIn(e))
          );
        }
        isGuildCollapsed(e) {
          return S[e]?.hide_muted_channels === !0;
        }
        getAllSettings() {
          return {
            userGuildSettings: S,
            mutedChannels: v,
            optedInChannelsByGuild: D,
          };
        }
        getChannelIdFlags(e, t) {
          let n = this.getChannelOverrides(e)[t];
          return n?.flags ?? 0;
        }
        getChannelFlags(e) {
          return this.getChannelIdFlags(e.guild_id, e.id);
        }
        getNewForumThreadsCreated(e) {
          let t = this.getChannelOverrides(e.guild_id)[e.id];
          if (null != t && null != t.flags) {
            if (a.Lt(t.flags, I.vv.NEW_FORUM_THREADS_ON)) return !0;
            if (a.Lt(t.flags, I.vv.NEW_FORUM_THREADS_OFF)) return !1;
          }
          return this.resolvedMessageNotifications(e) === p.orn.ALL_MESSAGES;
        }
        isOptInEnabled(e) {
          return (
            null != e &&
            (d.A.isFullServerPreview(e)
              ? d.A.isOptInEnabled(e)
              : a.Lt(this.getGuildFlags(e), I.n3.OPT_IN_CHANNELS_ON))
          );
        }
        isChannelRecordOrParentOptedIn(e, t) {
          return (
            null != e &&
            null != e.guild_id &&
            (this.isChannelOptedIn(e.guild_id, e.id, t) ||
              (null != e.parent_id &&
                this.isChannelOptedIn(e.guild_id, e.parent_id, t)))
          );
        }
        isChannelOrParentOptedIn(e, t, n) {
          return this.isChannelRecordOrParentOptedIn(E.A.getChannel(t), n);
        }
        isChannelOptedIn(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (null == e) return !1;
          if (d.A.isFullServerPreview(e)) return d.A.isChannelOptedIn(e, t);
          if (n && null != M[e]) return M[e].has(t);
          let i = this.getChannelOverrides(e)[t]?.flags ?? 0;
          return a.Lt(i, I.vv.OPT_IN_ENABLED);
        }
        getOptedInChannels(e) {
          return d.A.isFullServerPreview(e)
            ? (d.A.getViewingChannels(e) ?? P)
            : (D[e] ?? P);
        }
        getOptedInChannelsWithPendingUpdates(e) {
          return M[e];
        }
        getPendingChannelUpdates(e) {
          return b[e];
        }
        getGuildFavorites(e) {
          if (d.A.isFullServerPreview(e)) return null;
          if (null == T[e]) {
            let t = l().filter(
              this.getChannelOverrides(e),
              (t) =>
                a.Lt(t.flags ?? 0, I.vv.FAVORITED) &&
                E.A.getChannel(t.channel_id)?.guild_id === e,
            );
            T[e] = t.map((e) => e.channel_id);
          }
          return T[e];
        }
        isFavorite(e, t) {
          return (
            !d.A.isFullServerPreview(e) &&
            this.getGuildFavorites(e)?.includes(t) === !0
          );
        }
        isMessagesFavorite(e) {
          let t = this.getChannelOverrides(null)[e]?.flags ?? 0;
          return a.Lt(t, I.vv.FAVORITED);
        }
        get accountNotificationSettings() {
          return O;
        }
        get useNewNotifications() {
          return m;
        }
        getGuildUnreadSetting(e) {
          if (!m) return f.e.ALL_MESSAGES;
          let t = this.getGuildFlags(e);
          return a.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? f.e.ALL_MESSAGES
            : a.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? f.e.ONLY_MENTIONS
              : f.e.UNSET;
        }
        resolveGuildUnreadSetting(e) {
          let t = this.getGuildFlags(e.id);
          return !m || a.Lt(t, I.n3.UNREADS_ALL_MESSAGES)
            ? f.e.ALL_MESSAGES
            : a.Lt(t, I.n3.UNREADS_ONLY_MENTIONS)
              ? f.e.ONLY_MENTIONS
              : e.defaultMessageNotifications === p.orn.ALL_MESSAGES
                ? f.e.ALL_MESSAGES
                : f.e.ONLY_MENTIONS;
        }
        getChannelRecordUnreadSetting(e) {
          return this.getChannelUnreadSetting(e.guild_id, e.id);
        }
        getChannelUnreadSetting(e, t) {
          let n = this.getChannelIdFlags(e, t);
          return a.Lt(n, I.vv.UNREADS_ALL_MESSAGES)
            ? f.e.ALL_MESSAGES
            : a.Lt(n, I.vv.UNREADS_ONLY_MENTIONS)
              ? f.e.ONLY_MENTIONS
              : f.e.UNSET;
        }
      }
      let Z = new K(s.h, {
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
          let { userGuildSettings: t } = e;
          t.forEach((e) => {
            w(e.guild_id, { channel_overrides: {}, ...e });
          });
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
          let { guildId: t, settings: n } = e;
          F(t, n);
        },
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
          let { guildId: t, settings: n } = e;
          F(t, n), k(t, n.channel_overrides);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
          let { guildId: t, channelId: n, settings: i } = e;
          null != t &&
            null != i.flags &&
            (b[t] = { ...b[t], [n]: { flags: i.flags } }),
            V(t, n, i);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
          let { guildId: t, overrides: n } = e;
          return !(null == t || d.A.isFullServerPreview(t)) && (k(t, n), !0);
        },
        CONNECTION_OPEN: function (e) {
          $(e.notificationSettings),
            N.reset(),
            y.reset(),
            e.userGuildSettings.partial || ((S = {}), (v = {}), (D = {}));
          let t = new Set();
          for (let n in (e.userGuildSettings.entries.forEach((e) => {
            "channel_overrides" in e || (e.channel_overrides = {}),
              w(e.guild_id, e),
              null != e.guild_id && t.add(e.guild_id);
          }),
          S))
            t.has(n) || G(n, S[n]);
        },
        CACHE_LOADED: function (e) {
          null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((S = {}),
            (v = {}),
            (D = {}),
            e.userGuildSettings.forEach((e) => {
              let t = e.guild_id;
              S[t] = e;
              let n = new Set(),
                i = new Set();
              for (let t in e.channel_overrides) {
                let l = e.channel_overrides[t];
                (0, o.tG)(l) && n.add(t),
                  a.Lt(l.flags ?? 0, I.vv.OPT_IN_ENABLED) && i.add(t);
              }
              (v[t] = n), (D[t] = i);
            }));
        },
        OVERLAY_INITIALIZE: function (e) {
          let { allUserGuildSettings: t } = e,
            {
              userGuildSettings: n,
              mutedChannels: i,
              optedInChannelsByGuild: l,
            } = t;
          (S = { ...n }),
            (v = {}),
            (D = {}),
            h.default.keys(i).forEach((e) => {
              v[e] = new Set(i[e]);
            }),
            h.default.keys(l).forEach((e) => {
              D[e] = new Set(l[e]);
            });
        },
        GUILD_CREATE: W,
        GUILD_UPDATE: W,
        GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
          let { guildId: t } = e,
            n = null == S[t] ? B(t) : S[t];
          S[t] = {
            ...n,
            guild_id: t,
            hide_muted_channels: !0 !== n.hide_muted_channels,
          };
        },
        IMPERSONATE_UPDATE: W,
        IMPERSONATE_STOP: W,
        USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
          let { guildId: t, updates: n } = e;
          if (null == t) return !1;
          let i = b[t];
          if (null == i) return !1;
          for (let e in n) l().isEqual(n[e], i[e]) && delete i[e];
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
          let { guildId: t } = e;
          if (null == t) return !1;
          delete b[t], delete M[t];
        },
        NOTIFICATION_SETTINGS_UPDATE: function (e) {
          let { settings: t } = e;
          $(t);
        },
        GUILD_MUTE_EXPIRED: () => !0,
        CHANNEL_MUTE_EXPIRED: () => !0,
      });
    },
    803301(e, t, n) {
      n.d(t, { A: () => A });
      var i = n(17928),
        l = n(228366),
        a = n(652215),
        r = n(731854);
      let s = null,
        o = null,
        d = {},
        u = {};
      function c(e, t) {
        return `${e}:${t}`;
      }
      function h(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          i = d[e];
        if (null == i) return;
        let l = i[t ?? a.eGj];
        if (null != l) {
          for (let t of Object.values(r.x))
            (n === t || null == n) && (delete l[t], delete u[c(n ?? t, e)]);
          d[e][t ?? a.eGj] = l;
        }
      }
      class E extends i.Ay.Store {
        static displayName = "VideoStreamStore";
        getStreamId(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.x.DEFAULT;
          return d[e]?.[t ?? a.eGj]?.[n]?.streamId;
        }
        getUserStreamData(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.x.DEFAULT;
          return d[e]?.[t ?? a.eGj]?.[n];
        }
        getTimedoutVideos() {
          return u;
        }
        getTimedoutVideo(e, t) {
          return u[c(e, t)];
        }
      }
      let A = new E(l.h, {
        CONNECTION_OPEN: function (e) {
          let { user: t, sessionId: n } = e;
          (s = t.id), (o = n);
        },
        OVERLAY_INITIALIZE: function (e) {
          let { user: t, sessionId: n } = e;
          (s = t.id), (o = n);
        },
        RTC_CONNECTION_VIDEO: function (e) {
          let { userId: t, guildId: n, streamId: i, context: l } = e;
          if (null != i) {
            let e;
            t in d || (d[t] = {}),
              (e = d[t][n ?? a.eGj] ?? {}),
              (d[t][n ?? a.eGj] = { ...e, [l]: { streamId: i } }),
              delete u[c(l, t)];
          } else h(t, n, l);
        },
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return t.reduce((e, t) => {
            let { userId: n, sessionId: i, channelId: l, guildId: r } = t;
            if (null == l && n === s)
              if (i !== o) return e;
              else (d = {}), (u = {});
            else {
              if (null != l || d[n]?.[r ?? a.eGj] == null) return e;
              h(n, r);
            }
            return !0;
          }, !1);
        },
        VIDEO_STREAM_READY_TIMEOUT: function (e) {
          let {
            videoStreamId: t,
            userId: n,
            streamKey: i,
            mediaContext: l,
          } = e;
          u[c(l, n)] = {
            videoStreamId: t,
            userId: n,
            streamKey: i,
            mediaContext: l,
          };
        },
        CLEAR_VIDEO_STREAM_READY_TIMEOUT: function (e) {
          let { mediaContext: t, userId: n } = e,
            i = c(t, n);
          if (null == u[i]) return !1;
          delete u[i];
        },
      });
    },
    568004(e, t, n) {
      n.d(t, { A: () => w }), n(321073);
      var i = n(735438),
        l = n.n(i),
        a = n(17928),
        r = n(451988),
        s = n(228366),
        o = n(712963),
        d = n(356645),
        u = n(92077),
        c = n(587895),
        h = n(253932),
        E = n(617617),
        A = n(189081),
        _ = n(340829),
        p = n(775228),
        g = n(927813),
        f = n(674378),
        I = n(144914);
      let S = new Set(),
        T = {},
        m = new Set(),
        C = {},
        O = new Set(),
        N = {},
        y = 10 * g.A.Millis.MINUTE,
        R = 6 * g.A.Millis.HOUR,
        L = 10 * g.A.Millis.MINUTE,
        v = new r.Ep();
      function D(e) {
        v.start(e + Math.random() * y, o.r);
      }
      function U() {
        if (!(0, I.S)() || h.l_.getSetting()) return !1;
        let e = A.A.entitledBranchIds,
          t = [];
        for (let n of e) N.hasOwnProperty(n) || ((N[n] = null), t.push(n));
        if (0 === t.length) return !1;
        s.h.wait(() => o.r(t));
      }
      function P(e, t) {
        if (null != T[t] && p.A.shouldBeInstalled(e, t)) {
          let n = T[t],
            i = n.manifestIds,
            a = _.A.getState(e, t);
          null != a &&
            a.shouldPatch &&
            (a.buildId !== n.id || !l().isEqual(a.manifestIds, i)) &&
            s.h.wait(() => {
              let l = c.A.getApplication(e);
              null != l
                ? (O.delete((0, f.gW)(e, t)), (0, u.K3)(l, t, n.id, i, !0))
                : O.add((0, f.gW)(e, t));
            });
        }
      }
      function b() {
        v.stop();
      }
      class M extends a.Ay.Store {
        static displayName = "ApplicationBuildStore";
        initialize() {
          this.syncWith([A.A], U), this.waitFor(c.A, _.A, p.A, A.A, E.A);
        }
        getTargetBuildId(e, t) {
          return null == T[t] ? null : T[t].id;
        }
        getTargetManifests(e, t) {
          return null == T[t] ? null : T[t].manifestIds;
        }
        hasNoBuild(e, t) {
          return m.has(t);
        }
        isFetching(e, t) {
          return S.has(t);
        }
        needsToFetchBuildSize(e) {
          return !C.hasOwnProperty(e);
        }
        getBuildSize(e) {
          return C[e];
        }
      }
      let w = new M(s.h, {
        CONNECTION_OPEN: function () {
          return !h.l_.getSetting() && (D(R), U());
        },
        GAMES_DATABASE_UPDATE: function () {
          if (!(0, I.S)()) return !1;
          for (let e of O) {
            let { applicationId: t, branchId: n } = (0, f.r0)(e);
            null != c.A.getApplication(t) && (O.delete(e), P(t, n));
          }
        },
        APPLICATION_BUILD_FETCH_START: function (e) {
          let { branchId: t } = e;
          S.add(t);
        },
        APPLICATION_BUILD_FETCH_SUCCESS: function (e) {
          let { applicationId: t, branchId: n, locale: i, build: l } = e;
          S.delete(n);
          let a = l.manifests.map((e) => {
              let { id: t } = e;
              return t;
            }),
            r = l.id;
          m.delete(n),
            (T[n] = {
              id: r,
              applicationId: t,
              branchId: n,
              locale: i,
              manifestIds: a,
            }),
            P(t, n);
        },
        APPLICATION_BUILD_NOT_FOUND: function (e) {
          let { branchId: t } = e;
          S.delete(t), m.add(t);
        },
        APPLICATION_BUILD_SIZE_FETCH_START: function (e) {
          let { buildId: t } = e;
          C.hasOwnProperty(t) || (C[t] = null);
        },
        APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function (e) {
          let { buildId: t, sizeKB: n } = e;
          C[t] = n;
        },
        APPLICATION_BUILD_SIZE_FETCH_FAIL: function (e) {
          let { buildId: t } = e;
          null == C[t] && delete C[t];
        },
        APPLICATION_BRANCHES_FETCH_SUCCESS: function (e) {
          let { branches: t } = e,
            n = {};
          for (let e in A.A.libraryApplications) {
            let t = A.A.libraryApplications[e];
            n[t.branchId] = t;
          }
          for (let e of t) {
            let { id: t, liveBuildId: i } = e;
            if (i !== N[t]) {
              let e = n[t];
              null != e && s.h.wait(() => d.n(e.id, e.branchId, !0));
            }
            N[t] = i;
          }
          D(R);
        },
        APPLICATION_BRANCHES_FETCH_FAIL: function () {
          D(L);
        },
        CONNECTION_CLOSED: b,
        LOGOUT: b,
        SKU_PURCHASE_SUCCESS: function (e) {
          let { entitlements: t } = e;
          if (!(0, I.S)()) return !1;
          let n = new Set();
          for (let e of t) n.add(e.application_id);
          for (let e in A.A.libraryApplications) {
            let t = A.A.libraryApplications[e];
            n.has(t.id) &&
              (0, f.XZ)(t) &&
              s.h.wait(() => d.n(t.id, t.branchId));
          }
        },
      });
    },
    966846(e, t, n) {
      n.d(t, { A: () => k }), n(321073), n(667532);
      var i = n(735438),
        l = n.n(i),
        a = n(17928),
        r = n(506774),
        s = n(228366),
        o = n(92077),
        d = n(328153),
        u = n(495544),
        c = n(568004),
        h = n(674378),
        E = n(962052),
        A = n(723702),
        _ = n(340829),
        p = n(652215),
        g = n(613057);
      let f = [g.Hi.AUTHENTICATION_FAILED, g.Hi.NOT_ENTITLED],
        I = "DispatchManagerStore",
        S = [],
        T = [],
        m = !1,
        C = null,
        O = null,
        N = !1,
        y = new Map(),
        R = !1,
        L = null;
      function v() {
        let e = { queue: S, paused: m, userActions: Array.from(y) };
        r.w.set(I, e);
      }
      function D() {
        let e = S[0];
        if (null != e) {
          let { comboId: t, action: n } = e,
            { applicationId: i, branchId: l } = (0, h.r0)(t);
          if (
            (null == C || C.applicationId !== i || C.branchId !== l) &&
            (null == O || O.applicationId !== i || O.branchId !== l) &&
            1
          ) {
            let e = u.default.getToken(),
              t = u.default.getId();
            if (null == e) throw Error("missing user token");
            R = !E.A.setCurrentTask(i, l, n, t, e);
          }
        }
      }
      function U(e, t) {
        let n = (0, h.gW)(e, t);
        return S.findIndex((e) => e.comboId === n);
      }
      function P(e, t, n, i) {
        let l = (0, h.gW)(e, t),
          a = { comboId: l, action: i },
          r = T.indexOf(l);
        -1 !== r && T.splice(r, 1);
        let s = U(e, t);
        0 !== s &&
          (n
            ? -1 === s && (S.push(a), D())
            : (s > 0 && S.splice(s, 1), S.unshift(a), D())),
          !n && m && E.A.resume(),
          v();
      }
      function b(e, t) {
        let n = (0, h.gW)(e, t),
          i = T.indexOf(n);
        -1 !== i && T.splice(i, 1);
        let l = U(e, t);
        -1 !== l && (S.splice(l, 1), v()), D();
      }
      function M(e) {
        let { applicationId: t, branchId: n } = e;
        b(t, n);
      }
      function w(e) {
        let { applicationId: t, branchId: n } = e,
          i = (0, h.gW)(t, n),
          l = T.indexOf(i);
        -1 !== l && T.splice(l, 1);
      }
      function G() {
        let e = u.default.getToken(),
          t = u.default.getId();
        null != e && E.A.setCredentials(t, e);
      }
      function F() {
        for (let e of d.Ay.getRunningDiscordApplicationIds()) o.ZT(e, e);
        let e = d.Ay.getVisibleGame();
        return (
          m || null == e || e.pid === L || o.v7(),
          (L = null == e ? null : e.pid),
          !1
        );
      }
      class V extends a.Ay.Store {
        static displayName = "DispatchManagerStore";
        initialize() {
          let e = r.w.get(I) ?? {
            queue: null,
            paused: null,
            userActions: null,
          };
          null != e.queue &&
            (S = e.queue.map((e) =>
              "string" == typeof e ? { comboId: e, action: "Patch" } : e,
            )),
            null != e.paused && (m = e.paused),
            null != e.userActions && (y = new Map(Array.from(e.userActions))),
            this.waitFor(_.A, d.Ay),
            this.syncWith([d.Ay], F),
            this.waitFor(c.A, u.default, _.A);
        }
        get activeItems() {
          return S.map((e) => {
            let { comboId: t } = e;
            return (0, h.r0)(t);
          });
        }
        get finishedItems() {
          return T.map(h.r0);
        }
        get paused() {
          return m;
        }
        getQueuePosition(e, t) {
          return U(e, t);
        }
        isCorruptInstallation() {
          return R;
        }
      }
      let k = new V(s.h, {
        DISPATCH_APPLICATION_INSTALL: function (e) {
          let { applicationId: t, branchId: n } = e;
          y.set((0, h.gW)(t, n), "Install"), P(t, n, !1, "Patch");
        },
        DISPATCH_APPLICATION_UPDATE: function (e) {
          let { applicationId: t, branchId: n, automatic: i } = e;
          P(t, n, i, "Patch");
        },
        DISPATCH_APPLICATION_UNINSTALL: function (e) {
          M(e), w(e);
        },
        DISPATCH_APPLICATION_CANCEL: M,
        DISPATCH_APPLICATION_REPAIR: function (e) {
          let { applicationId: t, branchId: n } = e;
          y.set((0, h.gW)(t, n), "Repair"), P(t, n, !1, "Repair");
        },
        DISPATCH_APPLICATION_MOVE_UP: function (e) {
          let { applicationId: t, branchId: n } = e,
            i = U(t, n);
          if (i < 1) return !1;
          S.splice(0, 0, S.splice(i, 1)[0]), D(), m && E.A.resume(), v();
        },
        DISPATCH_APPLICATION_REMOVE_FINISHED: w,
        DISPATCH_APPLICATION_STATE_UPDATE: function (e) {
          let { state: t } = e;
          !N && ((N = !0), D(), m || E.A.resume());
          let n = m;
          (m = t.paused), (C = t.currentTask), (O = t.nextTask);
          let i = !1;
          (S = S.filter((e) => {
            let { comboId: t } = e,
              { applicationId: n, branchId: a } = (0, h.r0)(t),
              r = _.A.getState(n, a),
              s = c.A.getTargetBuildId(n, a),
              d = c.A.getTargetManifests(n, a);
            if (
              null != r &&
              r.type === p.WTw.UP_TO_DATE &&
              r.buildId === r.targetBuildId &&
              r.buildId === s &&
              l().isEqual(r.manifestIds, r.targetManifestIds) &&
              l().isEqual(r.manifestIds, d)
            ) {
              if ((T.push(t), y.has(t))) {
                switch (y.get(t)) {
                  case "Install":
                    o.BK(n, r);
                    break;
                  case "Repair":
                    o.jU(n, r);
                }
                y.delete(t);
              }
              return (i = !0), !1;
            }
            return !0;
          })),
            D(),
            (i || n !== m) && v();
        },
        DISPATCH_APPLICATION_ERROR: function (e) {
          let { error: t } = e,
            { code: n } = t;
          if (null != n) {
            if (f.includes(n)) G();
            else if (n === g.Hi.APPLICATION_NOT_FOUND) {
              let { context: e } = t;
              if (null != e) {
                let { application_id: t, branch_id: n } = e;
                b(t, n);
              }
            }
          }
        },
        CONNECTION_OPEN: function () {
          (0, A.isDesktop)() && G();
        },
        LOGOUT: function () {
          r.w.remove(I), (0, A.isDesktop)() && E.A.pause();
        },
      });
    },
    532624(e, t, n) {
      n.d(t, { Ay: () => Q, DV: () => y, aS: () => L }), n(321073);
      var i = n(812729),
        l = n.n(i),
        a = n(735438),
        r = n.n(a),
        s = n(17928),
        o = n(228366),
        d = n(775121),
        u = n(626584),
        c = n(549205),
        h = n(51760),
        E = n(954571),
        A = n(723702),
        _ = n(19575),
        p = n(316501),
        g = n(350535),
        f = n(773371),
        I = n(652215),
        S = n(696016);
      n(980504);
      var T = n(650583),
        m = n(72290);
      let C = new u.A("KeybindsStore");
      function O() {
        let e = (0, p.Ze)(!1).get("Backquote") ?? "`";
        return (
          "+" === e ? (e = "plus") : 0 === e.length && (e = "`"), `shift+${e}`
        );
      }
      let N = function (e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return {
            id: "1001",
            action: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
            shortcut: e,
            enabled: t,
            managed: !0,
            params: {},
          };
        },
        y = (e) => {
          let t = (0, g.Z0)("shift");
          return null != t && (1 !== e.length || e[0][1] !== t);
        },
        R = (e, t, n, i) => {
          let l = (0, p.Ze)(!1).get("Backquote"),
            a = (0, p.Ze)(!0).get("Backquote");
          C.log(e, {
            tags: {
              backquoteKey: l ?? "unknown",
              nativeBackquoteKey: a ?? "unknown",
              backquoteCode: `${(0, p.Q_)(l ?? "`")?.keyCode}`,
              nativeBackquoteCode: `${(0, p.Q_)(a ?? "`")?.keyCode}`,
            },
            extra: {
              keyCombo: t,
              combo: n,
              layoutMapBacktick: l,
              env: T.g$[(0, g._$)()],
              backtickEventShape: (0, p.Q_)("`"),
              backquoteKeyShape: (0, p.Q_)(l ?? "`"),
              nativeBackquoteKeyShape: (0, p.Q_)(a ?? "`"),
              ...i,
            },
          });
        },
        L = () => {
          var e;
          let t,
            n,
            i,
            l = O();
          "shift" === l &&
            (R("Default overlay keybind is only shift", l, null),
            (l = "shift+`"));
          let a =
            ((e = l),
            (t = (0, g.OH)(e)),
            (n = (0, p.Q_)("`")),
            (i = n?.keyCode ?? (0, g.Z0)("`")),
            y(t)
              ? t
              : null == i
                ? (R(
                    "Unable to get backtick code for overlay default keybind",
                    e,
                    t,
                    { rawBacktickShape: n },
                  ),
                  null)
                : (R("Default overlay keybind is unsupported", e, t, {
                    rawBacktickCode: i,
                  }),
                  [...t, [T.zY.KEYBOARD_KEY, i, (0, g._$)()]]));
          if (null == a) return N([], !1);
          if (y(a)) return N(a, !0);
          let r = (0, g.Z0)("shift"),
            s = (0, p.Q_)("`");
          return (
            0 === a.length
              ? R("Default overlay keybind combo is empty", l, a)
              : null == r
                ? R("Unable to get shift code", l, a, { shiftCode: r })
                : null == s && R("Unable to get backtick code", l, a),
            N(a, !1)
          );
        },
        v = {},
        D = {},
        U = 0,
        P = !0,
        b = {},
        M = !1,
        w = [
          I.hCu.PUSH_TO_TALK,
          I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
          I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
        ],
        G = [];
      function F(e) {
        return e === L().id ? L() : D[e];
      }
      function V(e, t, n) {
        E.default.track(I.HAw.KEYBOARD_SHORTCUT_USED, {
          shortcut_name: n.action,
          shortcut_combo: (0, g.dI)(n.shortcut),
          is_native_keyboard_event: !0,
        }),
          t.onTrigger(e, n);
      }
      function k() {
        let e = L();
        null ==
          r().find(
            D,
            (t) => e.action === t.action && t.enabled && t.shortcut.length > 0,
          ) &&
          P &&
          !M &&
          (B(e), (M = !0));
      }
      function H() {
        let e = L();
        M && (x(e.id), (M = !1));
      }
      function x(e) {
        if (A.isPlatformEmbedded) _.Ay.inputEventUnregister(parseInt(e, 10));
        else {
          let t = v[e];
          if (null != t) {
            let n = D[e];
            if (null != n) {
              let e = b[n.action];
              e?.isPressed === !0 && m.nextTick(() => V(!1, e, n));
            }
            t.reset(), (v[e] = null);
          }
        }
      }
      function B(e) {
        if (!P || __OVERLAY__) return;
        let { shortcut: t, action: n, enabled: i } = e;
        if (0 === t.length || null == t || n === I.hCu.UNASSIGNED || !i) return;
        if (null == b[n])
          return void C.error(
            `[kb store] KeybindStore: Looking for callback action ${n} but it doesn't exist in this version. Skipping`,
          );
        let l = e.id,
          a = parseInt(l, 10);
        if (isNaN(a))
          return void C.error(
            "[kb store] KeybindStore: Keybind id is not a number. Skipping registration.",
            { keybind: e },
          );
        let r = b[n].keyEvents;
        e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && H(),
          (function (e, t, n, i) {
            if (A.isPlatformEmbedded)
              try {
                _.Ay.inputEventRegister(e, t, n, i);
              } catch (n) {
                throw (
                  (C.error(
                    "Failed to register native keybind",
                    { eventId: e, shortcut: t },
                    n,
                  ),
                  n)
                );
              }
            else {
              x(e.toString());
              let l = (0, c.I)(document);
              i.keyup && l.bindGlobal((0, g.dI)(t), () => n(!1), "keyup"),
                i.keydown && l.bindGlobal((0, g.dI)(t), () => n(!0), "keydown"),
                (v[e] = l);
            }
          })(
            a,
            t,
            (e) =>
              (function (e, t) {
                let n = F(e);
                if (null == n) return;
                let i = b[n.action]?.keyEvents;
                if (null == i) return;
                let l = b[n.action];
                if (i.keydown && i.keyup) {
                  null != l && V(t, b[n.action], n);
                  return;
                }
                G.push(e),
                  setTimeout(() => {
                    for (let t of G) {
                      if (t === e) continue;
                      let i = F(t);
                      if (
                        null != i &&
                        (function (e, t) {
                          return (
                            !(e.shortcut.length >= t.shortcut.length) &&
                            e.shortcut.every((e) =>
                              t.shortcut.some(
                                (t) => t[0] === e[0] && t[1] === e[1],
                              ),
                            )
                          );
                        })(n, i)
                      ) {
                        G.includes(e) && G.splice(G.indexOf(e), 1);
                        return;
                      }
                    }
                    try {
                      null != l && V(t, l, n);
                    } finally {
                      setTimeout(() => {
                        G.includes(e) && G.splice(G.indexOf(e), 1);
                      }, 10);
                    }
                  }, 10);
              })(l, e),
            { focused: !0, blurred: !0, keydown: !1, keyup: !1, ...r },
          ),
          d.A.validateKeybind((0, g.dI)(t));
      }
      function Y(e) {
        let t = {
          id: U.toString(),
          enabled: !0,
          action: I.hCu.UNASSIGNED,
          shortcut: [],
          managed: !1,
          params: {},
          ...e,
        };
        return (D = { ...D, [t.id]: t }), (U += 1), t;
      }
      function j(e) {
        x(e.id),
          (D = { ...D }),
          delete D[e.id],
          e.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK && k();
      }
      function $(e) {
        let { keybind: t } = e;
        (D = { ...D, [t.id]: t }),
          __OVERLAY__ ||
            (E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
              keybind_action: t.action,
              keybind_is_bound: !0,
              keybind_has_shortcut: t.shortcut.length > 0,
            }),
            t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK
              ? E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                  hotkey:
                    t.action === I.hCu.TOGGLE_OVERLAY_INPUT_LOCK
                      ? (0, g.dI)(t.shortcut)
                      : null,
                })
              : t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET &&
                E.default.track(I.HAw.OVERLAY_SETTINGS_UPDATED, {
                  text_activation_hotkey:
                    t.action === I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET
                      ? (0, g.dI)(t.shortcut)
                      : null,
                })),
          B(t);
      }
      function z(e, t) {
        let n =
          !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return (
          null ==
            r().find(D, (t) => t.action === e && (!n || t.managed === n)) &&
          (B(
            Y({
              action: e,
              enabled: !0,
              shortcut: (0, g.OH)(t),
              managed: !0,
              params: {},
            }),
          ),
          !0)
        );
      }
      let W = [
        function () {
          let e = h.Ay.getShortcuts();
          return (
            r().each(D, (t) => {
              t.action === I.hCu.PUSH_TO_TALK &&
                !0 === t.managed &&
                (null == t.context || null == e[t.context]) &&
                j(t);
            }),
            r().reduce(
              h.Ay.getShortcuts(),
              (e, t, n) => {
                let i = r().find(
                  D,
                  (e) =>
                    e.action === I.hCu.PUSH_TO_TALK &&
                    !0 === e.managed &&
                    e.context === n,
                );
                if (null == i)
                  B(
                    Y({
                      action: I.hCu.PUSH_TO_TALK,
                      enabled: !0,
                      shortcut: t,
                      managed: !0,
                      params: {},
                      context: n,
                    }),
                  );
                else {
                  if (null == t) return e || !1;
                  $({
                    keybind: {
                      ...i,
                      shortcut: "string" == typeof t ? (0, g.OH)(t) : t,
                      context: n,
                    },
                  });
                }
                return !0;
              },
              !1,
            )
          );
        },
        function () {
          return (
            !!f.default.getAnyGlobalEnabledOverlay() &&
            z(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, O())
          );
        },
        function () {
          return (
            !!f.default.getAnyGlobalEnabledOverlay() &&
            z(I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, "]`")
          );
        },
        function () {
          var e;
          let t,
            n =
              ((e = I.hCu.SOUNDBOARD_HOLD),
              (t = !1),
              r().each(D, (n) => {
                n.action === e && !0 === n.managed && (j(n), (t = !0));
              }),
              t);
          return z(I.hCu.SOUNDBOARD_HOLD, "ctrl+`", !1) || n;
        },
        function () {
          return z(I.hCu.SAVE_CLIP, S.Ot);
        },
        function () {
          return z(I.hCu.SAVE_SCREENSHOT, S.sz);
        },
      ];
      function K() {
        return k(), W.reduce((e, t) => t() || e, !1);
      }
      d.A.setGetKeybindList(() => {
        let e = [];
        for (let t in D)
          D.hasOwnProperty(t) && e.push((0, g.dI)(D[t].shortcut));
        return e;
      });
      class Z extends s.Ay.DeviceSettingsStore {
        static displayName = "KeybindsStore";
        static persistKey = "keybinds";
        static migrations = [
          function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { v: t, keybinds: n = e } = e;
            return r().reduce(
              n,
              (e, n, i) => (
                isNaN(parseInt(n.id, 10)) ||
                  n.id !== i ||
                  ((null == t || t < 2) &&
                    ("string" == typeof n.shortcut
                      ? ((n.shortcut = n.shortcut
                          .replace("escape", "esc")
                          .replace("capslock", "caps lock")
                          .replace("numlock", "num lock")
                          .replace("pageup", "page up")
                          .replace("pagedown", "page down")),
                        (n.shortcut = (0, g.OH)(n.shortcut)))
                      : (n.shortcut = n.shortcut.map((e) =>
                          e.length < 3 ? [...e, (0, g._$)()] : e,
                        ))),
                  (e[i] = n)),
                e
              ),
              {},
            );
          },
          (e) => e,
          (e) => {
            let { keybinds: t = e } = e;
            return r().reduce(
              t,
              (e, t, n) => {
                if ((0, A.isLinux)() && t.action === I.hCu.SOUNDBOARD_HOLD) {
                  let n = t.shortcut.map((e) => e[1]),
                    i = (0, g.OH)("`").map((e) => e[1]);
                  if (l()(n, i)) return e;
                }
                return { ...e, [n]: t };
              },
              {},
            );
          },
          (e) => {
            let t = {};
            for (let n in e) {
              let i = e[n];
              null != i &&
                ((null == i.params || null == i.enabled) &&
                  (i = {
                    ...i,
                    enabled: !1 !== i.enabled,
                    params: i.params ?? {},
                  }),
                (t[n] = i));
            }
            return t;
          },
          (e) =>
            r().reduce(
              e,
              (e, t, n) =>
                t.action === I.hCu.TOGGLE_GO_LIVE_STREAMING && t.managed
                  ? e
                  : { ...e, [n]: t },
              {},
            ),
        ];
        initialize(e) {
          __OVERLAY__ || this.waitFor(h.Ay, f.default), (D = e ?? {});
        }
        getUserAgnosticState() {
          return D;
        }
        hasKeybind(e, t, n) {
          for (let i in D)
            for (let l of D[i].shortcut)
              if (l[0] === e && l[1] === t && (void 0 === n || n === l[2]))
                return !0;
          return !1;
        }
        hasExactKeybind(e) {
          for (let t in D) {
            let n = D[t];
            if (r().isEqual(n.shortcut, e)) return !0;
          }
          return !1;
        }
        getKeybindForAction(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            r().find(
              D,
              (i) =>
                i.action === e &&
                (!t || i.managed) &&
                (!n || (i.shortcut.length > 0 && i.enabled)),
            ) ?? null
          );
        }
        getOverlayKeybind() {
          let e = this.getKeybindForAction(I.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
          return null != e ? e : L();
        }
        getOverlayChatKeybind() {
          return this.getKeybindForAction(
            I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
            !0,
          );
        }
      }
      let q = new Z(o.h, {
          CONNECTION_OPEN: K,
          LOGIN_SUCCESS: function () {
            return (
              (async () => {
                await (0, p.AD)(), K() && q.emitChange();
              })(),
              !1
            );
          },
          AUDIO_SET_MODE: K,
          OVERLAY_SET_ENABLED: K,
          RPC_APP_CONNECTED: K,
          RPC_APP_DISCONNECTED: K,
          KEYBINDS_ADD_KEYBIND: function (e) {
            let { keybind: t } = e;
            B(Y(t));
          },
          KEYBINDS_DELETE_KEYBIND: function (e) {
            let { id: t } = e,
              n = D[t];
            __OVERLAY__ ||
              E.default.track(I.HAw.USER_SETTINGS_KEYBIND_UPDATED, {
                keybind_action: n.action,
                keybind_is_bound: !1,
                keybind_has_shortcut: !1,
              }),
              null != n && j(n);
          },
          KEYBINDS_SET_KEYBIND: $,
          KEYBINDS_ENABLE_ALL_KEYBINDS: function (e) {
            let { enable: t } = e;
            (P = t),
              t
                ? (d.A.enable(), r().forEach(D, B), k())
                : (d.A.disable(), r().forEach(D, (e) => x(e.id)), H());
          },
          KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS: function (e) {
            let { keybinds: t } = e;
            (b = t),
              (v = {}),
              (U = 0),
              Object.values(D).filter((e) => w.includes(e.action) && e.managed)
                .length !== w.length && K(),
              r().forEach(D, (e) => {
                U = Math.max(parseInt(e.id, 10), U) + 1;
                try {
                  B(e);
                } catch (t) {
                  C.error("Failed to register keybind", e, t);
                }
              }),
              (P = !0);
          },
        }),
        Q = q;
    },
    256415(e, t, n) {
      n.r(t), n.d(t, { default: () => H });
      var i = n(17928),
        l = n(506774),
        a = n(228366),
        r = n(350723),
        s = n(996308),
        o = n(211753),
        d = n(876156),
        u = n(761821),
        c = n(95701),
        h = n(495544),
        E = n(734057),
        A = n(808728),
        _ = n(38502),
        p = n(967198),
        g = n(9302),
        f = n(531685),
        I = n(652215),
        S = n(672396);
      let T = Object.freeze({
          selectedGuildId: null,
          selectedChannelId: null,
          displayUserMode: I.f5z.ALWAYS,
          displayNameMode: I.pwA.ALWAYS,
          avatarSizeMode: I.OSZ.LARGE,
          notificationPositionMode: I.G6Q.TOP_LEFT,
          textChatNotifications: I.iXc.ENABLED,
          disableExternalLinkAlert: !1,
          disablePinTutorial: !1,
          disableClickableRegions: !1,
          textWidgetOpacity: S.Li.LOWER,
          showGameInviteNotification: !0,
          customInviteMessage: void 0,
        }),
        m = null,
        C = {},
        O = null,
        N = new Set(),
        y = !1,
        R = !1,
        L = !1,
        v = new Set(),
        D = !1;
      function U(e) {
        let t = C[e];
        return null == t && (t = C[e] = { ...T }), t;
      }
      __OVERLAY__ && (0, d.u)((0, g.getRPCAuthToken)());
      let P = { ...T },
        b = new Set([
          "AUDIO_SET_INPUT_DEVICE",
          "AUDIO_SET_INPUT_VOLUME",
          "AUDIO_SET_LOCAL_VIDEO_DISABLED",
          "AUDIO_SET_LOCAL_VOLUME",
          "AUDIO_SET_MODE",
          "AUDIO_SET_NOISE_CANCELLATION",
          "AUDIO_SET_NOISE_SUPPRESSION",
          "AUDIO_SET_OUTPUT_DEVICE",
          "AUDIO_SET_OUTPUT_VOLUME",
          "AUDIO_TOGGLE_LOCAL_MUTE",
          "AUDIO_TOGGLE_SELF_DEAF",
          "AUDIO_TOGGLE_SELF_MUTE",
          "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
          "CATEGORY_COLLAPSE",
          "CATEGORY_EXPAND",
          "CHANNEL_ACK",
          "CHANNEL_PRELOAD",
          "GIFT_CODE_REDEEM",
          "GIFT_CODE_REDEEM_FAILURE",
          "GIFT_CODE_REDEEM_SUCCESS",
          "HOTSPOT_HIDE",
          "INVITE_MODAL_CLOSE",
          "LAYOUT_CREATE",
          "LAYOUT_CREATE_WIDGETS",
          "LAYOUT_DELETE_ALL_WIDGETS",
          "LAYOUT_DELETE_WIDGET",
          "LAYOUT_SET_PINNED",
          "LAYOUT_SET_TOP_WIDGET",
          "LAYOUT_UPDATE_WIDGET",
          "LOAD_MESSAGES",
          "LOAD_MESSAGES_FAILURE",
          "LOAD_MESSAGES_SUCCESS",
          "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          "OVERLAY_ACTIVATE_REGION",
          "OVERLAY_DEACTIVATE_ALL_REGIONS",
          "OVERLAY_MESSAGE_EVENT_ACTION",
          "OVERLAY_SET_AVATAR_SIZE_MODE",
          "OVERLAY_SET_CLICK_ZONES",
          "OVERLAY_SET_DISPLAY_NAME_MODE",
          "OVERLAY_SET_DISPLAY_USER_MODE",
          "OVERLAY_SET_INPUT_LOCKED",
          "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
          "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS",
          "OVERLAY_SET_GAME_INVITE_NOTIFICATION",
          "OVERLAY_SET_INVITE_MESSAGE",
          "OVERLAY_SET_TEXT_WIDGET_OPACITY",
          "OVERLAY_SET_ENABLED",
          "OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN",
          "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
          "OVERLAY_TRACKED_GAME_UPDATE",
          "PREMIUM_PAYMENT_ERROR_CLEAR",
          "PREMIUM_PAYMENT_MODAL_CLOSE",
          "PREMIUM_PAYMENT_MODAL_OPEN",
          "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
          "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
          "PREMIUM_PAYMENT_UPDATE_FAIL",
          "PREMIUM_PAYMENT_UPDATE_SUCCESS",
          "PREMIUM_REQUIRED_MODAL_CLOSE",
          "PREMIUM_REQUIRED_MODAL_OPEN",
          "PURCHASE_CONFIRMATION_MODAL_CLOSE",
          "PURCHASE_CONFIRMATION_MODAL_OPEN",
          "SKU_PURCHASE_CLEAR_ERROR",
          "SKU_PURCHASE_FAIL",
          "SKU_PURCHASE_MODAL_CLOSE",
          "SKU_PURCHASE_MODAL_OPEN",
          "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
          "SKU_PURCHASE_SHOW_CONFIRMATION_STEP",
          "SKU_PURCHASE_START",
          "SKU_PURCHASE_SUCCESS",
          "STREAM_CLOSE",
          "STREAM_START",
          "VOICE_CHANNEL_SELECT",
          "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
          "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
        ]),
        M = new Set([
          ...b.values(),
          "ACTIVITY_INVITE_MODAL_CLOSE",
          "CALL_DELETE",
          "CHANNEL_COLLAPSE",
          "CHANNEL_SELECT",
          "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
          "OVERLAY_CALL_PRIVATE_CHANNEL",
          "OVERLAY_JOIN_GAME",
          "OVERLAY_NOTIFICATION_EVENT",
          "OVERLAY_SELECT_CALL",
          "OVERLAY_SET_NOT_IDLE",
          "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
          "OVERLAY_WIDGET_CHANGED",
          "SOUNDBOARD_SET_OVERLAY_ENABLED",
          "STREAM_STOP",
        ]);
      function w() {
        if (!__OVERLAY__) return !1;
        let e = m === (0, g.getPID)(),
          t = N.has((0, g.getPID)()) || v.size > 0;
        e && t ? (0, r.XC)(window, !0) : (0, r.XC)(window, !1);
      }
      function G() {
        if (m !== (0, g.getPID)()) return !1;
        v.clear();
      }
      function F(e) {
        let t = (0, g.getPID)();
        if (null == e.pid || e.pid === t)
          switch (e.type) {
            case I.kGV.STORAGE_SYNC:
              i.Ay.PersistedStore.initializeAll(e.states);
              break;
            case I.kGV.DISPATCH:
              null != e.payloads &&
                ((R = !0),
                e.payloads.forEach((e) =>
                  (function (e) {
                    if (
                      ("OVERLAY_INITIALIZE" === e.type &&
                        ((null == e.version && 1 === g.OVERLAY_VERSION) ||
                          e.version === g.OVERLAY_VERSION ||
                          (a.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }),
                          (0, s.Zf)(),
                          0)) &&
                        (L = !0),
                      L)
                    )
                      switch (e.type) {
                        case "CHANNEL_CREATE":
                        case "THREAD_CREATE":
                        case "THREAD_UPDATE":
                        case "CHANNEL_DELETE":
                        case "THREAD_DELETE":
                          let t = (0, c.createChannelRecord)(e.channel);
                          if (!c.A_.has(t.type)) break;
                          a.h.dispatch({ type: e.type, channel: t });
                          break;
                        case "CHANNEL_UPDATES":
                          a.h.dispatch({
                            type: e.type,
                            channels: e.channels.map((e) =>
                              (0, c.createChannelRecord)(e),
                            ),
                          });
                          break;
                        case "CONNECTION_OPEN_SUPPLEMENTAL":
                          (e.lazyPrivateChannels = (
                            e.lazyPrivateChannels ?? []
                          ).map((e) => (0, c.createChannelRecord)(e))),
                            a.h.dispatch(e);
                          break;
                        case "THREAD_LIST_SYNC":
                          a.h.dispatch({
                            ...e,
                            threads: e.threads.map((e) =>
                              (0, c.createChannelRecord)(e),
                            ),
                          });
                          break;
                        case "GUILD_CREATE":
                          let n = (e) => (0, c.createChannelRecord)(e),
                            i = e.guild;
                          switch (
                            ((i.threads = i.threads?.map(n)), i.channels.op)
                          ) {
                            case "full_sync":
                              i.channels.items = i.channels.items.map(n);
                              break;
                            case "update":
                              i.channels.writes = i.channels.writes.map(n);
                              break;
                            default:
                              i.channels;
                          }
                          a.h.dispatch({ type: "GUILD_CREATE", guild: i });
                          break;
                        case "USER_SETTINGS_PROTO_UPDATE":
                          a.h.dispatch({
                            ...e,
                            settings: {
                              proto: (0, u.Y5)(
                                e.settings.type,
                                e.settings.proto,
                              ),
                              type: e.settings.type,
                            },
                          });
                          break;
                        default:
                          a.h.dispatch(e);
                      }
                  })(e),
                ),
                (R = !1));
          }
      }
      let V = new Map();
      class k extends i.Ay.PersistedStore {
        static displayName = "OverlayStore";
        static persistKey = "OverlayStoreV2";
        static migrations = [
          () => {
            let {
              pinnedWidgets: e,
              positions: t,
              sizes: n,
              v: i,
              ...a
            } = { ...l.w.get("OverlayStore") };
            return { ...T, ...(5 === i ? a : null) };
          },
          (e) => {
            let t = h.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
          },
        ];
        initialize(e) {
          if (
            (this.waitFor(h.default, E.A, A.Ay, _.A, p.A, f.A),
            this.syncWith([h.default], () => {
              let e = h.default.getId();
              P = null != e ? U(e) : { ...T };
            }),
            __OVERLAY__ && N.delete((0, g.getPID)()),
            null != e)
          ) {
            C = e;
            let t = h.default.getId();
            null != t &&
              (null == (P = U(t)).textChatNotifications &&
                (P.textChatNotifications = T.textChatNotifications),
              null == P.textWidgetOpacity &&
                (P.textWidgetOpacity = T.textWidgetOpacity),
              null == P.disableClickableRegions &&
                (P.disableClickableRegions = T.disableClickableRegions));
          }
        }
        getState() {
          return C;
        }
        isLocked(e) {
          return !N.has(e);
        }
        isInstanceLocked() {
          return !N.has((0, g.getPID)());
        }
        isInstanceFocused() {
          return m === (0, g.getPID)();
        }
        isFocused(e) {
          return m === e;
        }
        isPinned(e) {
          let t = _.A.getLayout(g.OVERLAY_LAYOUT_ID);
          return (
            null != t &&
            null !=
              t.widgets.find((t) => {
                let n = _.A.getWidget(t);
                return null != n && n.type === e && !!n.pinned;
              })
          );
        }
        getSelectedGuildId() {
          return P.selectedGuildId;
        }
        getSelectedChannelId() {
          return P.selectedChannelId;
        }
        getSelectedCallId() {
          return O;
        }
        getDisplayUserMode() {
          return P.displayUserMode;
        }
        getDisplayNameMode() {
          return P.displayNameMode;
        }
        getAvatarSizeMode() {
          return P.avatarSizeMode;
        }
        getNotificationPositionMode() {
          return P.notificationPositionMode;
        }
        get showInviteNotification() {
          return (
            null == P.showGameInviteNotification || P.showGameInviteNotification
          );
        }
        get disableClickableRegions() {
          return null != P.disableClickableRegions && P.disableClickableRegions;
        }
        get customInviteMessage() {
          return P.customInviteMessage;
        }
        getDisableExternalLinkAlert() {
          return P.disableExternalLinkAlert;
        }
        getFocusedPID() {
          return m;
        }
        get initialized() {
          return L;
        }
        get incompatibleApp() {
          return y;
        }
        getActiveRegions() {
          return v;
        }
        getTextWidgetOpacity() {
          return P.textWidgetOpacity;
        }
        isPreviewingInGame() {
          return D;
        }
        getTrackedGame(e) {
          return V.get(e) ?? null;
        }
      }
      let H = new k(a.h, {
        LOGOUT: function (e) {
          e.isSwitchingAccount || (C = {});
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          e.userId in C && delete C[e.userId];
        },
        CONNECTION_CLOSED: function () {
          N.clear();
        },
        OVERLAY_START_SESSION: function () {
          a.h.addInterceptor((e) => {
            if (R || !M.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
              let { guildId: t, channelId: n } = e;
              return (
                null != n &&
                ((0, s.tN)({
                  type: I.kGV.DISPATCH,
                  pid: (0, g.getPID)(),
                  token: (0, g.getRPCAuthToken)(),
                  payloads: [
                    {
                      type: "CHANNEL_PRELOAD",
                      guildId: t === I.ME ? null : t,
                      channelId: n,
                      context: I.QCW,
                    },
                    {
                      type: "OVERLAY_SELECT_CHANNEL",
                      guildId: t,
                      channelId: n,
                    },
                  ],
                }),
                !1)
              );
            }
            return (
              (0, s.tN)({
                type: I.kGV.DISPATCH,
                pid: (0, g.getPID)(),
                token: (0, g.getRPCAuthToken)(),
                payloads: [e],
              }),
              !b.has(e.type)
            );
          }),
            (0, s.QZ)(F, (0, g.getRPCAuthToken)()),
            (0, s.Ng)(),
            (0, s.tN)({
              type: I.kGV.CONNECT,
              pid: (0, g.getPID)(),
              token: (0, g.getRPCAuthToken)(),
            });
        },
        OVERLAY_INITIALIZE: function (e) {
          let { focusedPID: t, trackedGames: n, overlayStoredSettings: i } = e;
          (m = t),
            __OVERLAY__ &&
              (n.forEach((e) => {
                V.set(e.pid, e);
              }),
              o.x.update({
                legacyEnabled: i.legacyEnabled,
                oopEnabled: i.oopEnabled,
              }));
        },
        OVERLAY_READY: function () {
          let e = P.selectedGuildId,
            t = P.selectedChannelId;
          if (
            (null == e ||
              (A.Ay.hasChannels(e) &&
                (null == t || A.Ay.hasSelectableChannel(e, t))) ||
              ((e = null), (t = null)),
            null != t && null == E.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = p.A.getGuildId()),
            null != e && null == t)
          ) {
            let n = A.Ay.getDefaultChannel(e);
            null != n && (t = n.id);
          }
          (P.selectedGuildId = e), (P.selectedChannelId = t);
        },
        OVERLAY_FOCUSED: function (e) {
          let { pid: t } = e;
          (m = t), w();
        },
        OVERLAY_SELECT_CHANNEL: function (e) {
          let { guildId: t, channelId: n } = e;
          (P.selectedGuildId = t), (P.selectedChannelId = n);
        },
        OVERLAY_SELECT_CALL: function (e) {
          let { callId: t } = e;
          O = t;
        },
        CALL_DELETE: function () {
          O = null;
        },
        LAYOUT_CREATE: function () {},
        OVERLAY_SET_ENABLED: function (e) {
          __OVERLAY__ &&
            o.x.update({
              legacyEnabled: e.legacyEnabled,
              oopEnabled: e.oopEnabled,
            });
        },
        OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
          let { mode: t } = e;
          P.displayNameMode = t;
        },
        OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
          let { mode: t } = e;
          P.displayUserMode = t;
        },
        OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
          let { mode: t } = e;
          P.avatarSizeMode = t;
        },
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
          let { mode: t } = e;
          P.notificationPositionMode = t;
        },
        OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: function (e) {
          let { disable: t } = e;
          P.disableClickableRegions = t;
        },
        OVERLAY_SET_INVITE_MESSAGE: function (e) {
          let { message: t } = e,
            n = P.customInviteMessage !== t;
          return (P.customInviteMessage = t), n;
        },
        OVERLAY_SET_GAME_INVITE_NOTIFICATION: function (e) {
          let { shouldShow: t } = e,
            n = P.showGameInviteNotification !== t;
          return (P.showGameInviteNotification = t), n;
        },
        OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
          let { opacity: t } = e,
            n = P.textWidgetOpacity !== t;
          return (P.textWidgetOpacity = t), n;
        },
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
          P.disableExternalLinkAlert = !0;
        },
        OVERLAY_INCOMPATIBLE_APP: function () {
          y = !0;
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
          let { locked: t, pid: n } = e;
          t ? N.delete(n) : N.add(n), G(), w(), (D = !1);
        },
        OVERLAY_ACTIVATE_REGION: function (e) {
          let { region: t } = e;
          if (m !== (0, g.getPID)() || v.has(t)) return !1;
          v.add(t);
        },
        OVERLAY_DEACTIVATE_ALL_REGIONS: G,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
          D = e.isPreviewingInGame;
        },
        WINDOW_RESIZED: function () {
          if (__OVERLAY__) {
            let e = f.A.windowSize();
            (0, g.validResolution)(e) || (D = !1);
          }
        },
        OVERLAY_SET_ASSOCIATED_GAME: function (e) {
          N.delete(e.previousAssociatedGamePID);
        },
        OVERLAY_TRACKED_GAME_UPDATE: function (e) {
          __OVERLAY__ &&
            (null != e.trackedGame
              ? V.set(e.pid, e.trackedGame)
              : V.delete(e.pid));
        },
      });
    },
    768451(e, t, n) {
      n.d(t, { d: () => s });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        a = n(996682),
        r = n(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: n,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          E = c?.height ?? s;
        return (0, i.jsxs)("svg", {
          ...(0, a.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: E,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M22 4v1.51a6 6 0 0 1-1.76 4.25l-4.1 4.1a.5.5 0 0 0-.14.35v1.29a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 .21-.3.26-.36.07l-.8-2.17a.5.5 0 0 0-.12-.18l-3.46-3.46a.5.5 0 0 0-.17-.11l-4.8-1.85a.5.5 0 0 1-.15-.85l2.02-1.73A3 3 0 0 1 6.1 8h3.68a.5.5 0 0 0 .36-.15l4.1-4.1A6 6 0 0 1 18.48 2H20a2 2 0 0 1 2 2Zm-5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              clipRule: "evenodd",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M9 19a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1 3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
              className: d,
            }),
          ],
        });
      };
    },
    123510(e, t, n) {
      n.d(t, { u: () => s });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        a = n(996682),
        r = n(27989);
      let s = (e) => {
        let {
            size: t = "md",
            width: n,
            height: s,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...u
          } = e,
          c = (0, r.J)(t),
          h = c?.width ?? n,
          E = c?.height ?? s;
        return (0, i.jsx)("svg", {
          ...(0, a.A)(u),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: E,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M11.83 1c1.6 0 3.12.35 4.5.99.83-.16 2.06-.2 3.69.28 4.36 1.26 3.81 3.4 3.03 3.32-.77-.08-.23-1.11-1.71-1.43-.7-.14-1.18.1-1.5.43a11.02 11.02 0 0 1 2.28 3.96c.4-.34.96-.73 1.4-.6.85.27-.49 1.63-.86 4.07A10.91 10.91 0 0 1 11.83 23 10.91 10.91 0 0 1 1 11.99C1 5.92 5.85 1 11.83 1Zm2.08 5.3c-.15.25-.28.52-.4.8-1.14-.17-2.3-.17-3.45 0a8.05 8.05 0 0 0-.4-.8c-1.07.18-2.12.5-3.1.95a12.54 12.54 0 0 0-2.24 8.53 12.5 12.5 0 0 0 3.81 1.91c.31-.41.59-.86.82-1.31a8.28 8.28 0 0 1-1.29-.62l.32-.23a8.97 8.97 0 0 0 7.62 0c.1.08.2.16.32.23-.41.25-.84.45-1.3.62.24.46.52.9.83 1.31a12.5 12.5 0 0 0 3.8-1.9c.32-3.24-.53-6.05-2.23-8.54-.99-.45-2.03-.77-3.1-.95h-.01Zm-4.63 4.75c.77 0 1.37.68 1.36 1.5-.01.84-.6 1.51-1.35 1.51-.75 0-1.36-.67-1.36-1.5s.59-1.5 1.35-1.5Zm5.01 0c.76 0 1.37.68 1.36 1.5-.02.84-.6 1.51-1.36 1.51-.74 0-1.35-.67-1.35-1.5s.59-1.5 1.35-1.5Z",
            className: d,
          }),
        });
      };
    },
    864507(e, t, n) {
      n.d(t, { uo: () => r, _x: () => l._, DB: () => i.D });
      var i = n(243826);
      n(510036);
      var l = n(601557),
        a = n(85526);
      function r(e) {
        return a.fromByteArray(e);
      }
    },
    985253(e, t, n) {
      n.d(t, { T: () => a });
      var i = n(778712),
        l = n(996988);
      let a = {
        [l.d.POPOUT]: {
          avatarSize: i._3.SIZE_80,
          avatarOffsetX: 10,
          avatarOffsetY: 4,
          bannerWidth: 300,
          bannerHeight: 105,
          themePadding: 4,
        },
        [l.d.MODAL]: {
          avatarSize: i._3.SIZE_120,
          avatarOffsetX: 16,
          avatarOffsetY: 5,
          bannerWidth: 600,
          bannerHeight: 210,
          themePadding: 0,
        },
        [l.d.MODAL_V2]: {
          avatarSize: i._3.SIZE_120,
          avatarOffsetX: 24,
          avatarOffsetY: 0,
          bannerWidth: 400,
          bannerHeight: 140,
          themePadding: 0,
        },
        [l.d.SIDEBAR]: {
          avatarSize: i._3.SIZE_80,
          avatarOffsetX: 10,
          avatarOffsetY: 8,
          bannerWidth: 340,
          bannerHeight: 120,
          themePadding: 0,
        },
        [l.d.VIDEO_TILE_BACKGROUND]: {
          avatarSize: i._3.SIZE_80,
          avatarOffsetX: 10,
          avatarOffsetY: 4,
          bannerWidth: 300,
          bannerHeight: 105,
          themePadding: 0,
        },
      };
    },
  },
]);
//# sourceMappingURL=31337.553eadf6343554c4.js.map
