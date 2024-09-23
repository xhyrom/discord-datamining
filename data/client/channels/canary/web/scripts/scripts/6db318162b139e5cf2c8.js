"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22036"],
  {
    95045: function (e) {
      e.exports = "/assets/b6ecdc8b623f50859f88.png";
    },
    11352: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-04_custom_notification_sound_web",
        label: "Custom Notification Sound for Desktop",
        defaultConfig: { enabled: !1, nestedEntry: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable custom notification sounds",
            config: { enabled: !0, nestedEntry: !1 },
          },
          {
            id: 2,
            label: "Enable custom notification sounds + nested entry point",
            config: { enabled: !0, nestedEntry: !0 },
          },
        ],
      });
    },
    671105: function (e, t, n) {
      n.d(t, {
        OR: function () {
          return o;
        },
        _c: function () {
          return a;
        },
        bb: function () {
          return r;
        },
        iD: function () {
          return u;
        },
      });
      var i = n(442837),
        l = n(581883),
        s = n(871465);
      function o(e) {
        return d(
          e,
          void 0,
          (0, i.e7)([l.Z], () => {
            var e;
            return null === (e = l.Z.settings.guilds) || void 0 === e
              ? void 0
              : e.guilds;
          }),
        );
      }
      function u(e) {
        var t, n;
        return d(
          e,
          void 0,
          null !==
            (n =
              null === (t = l.Z.settings.guilds) || void 0 === t
                ? void 0
                : t.guilds) && void 0 !== n
            ? n
            : {},
        );
      }
      function a(e, t) {
        let n = (0, i.e7)([l.Z], () => {
          var e;
          return null === (e = l.Z.settings.guilds) || void 0 === e
            ? void 0
            : e.guilds;
        });
        return null != t ? d(e, t, n) : void 0;
      }
      function r(e, t) {
        var n, i;
        let s =
          null !==
            (i =
              null === (n = l.Z.settings.guilds) || void 0 === n
                ? void 0
                : n.guilds) && void 0 !== i
            ? i
            : {};
        return null != t ? d(e, t, s) : void 0;
      }
      function d(e, t, n) {
        var i, l;
        if (null == n) return;
        let o =
            null != t
              ? null === (i = n[e]) || void 0 === i
                ? void 0
                : i.channels[t]
              : n[e],
          u = null == o ? void 0 : o.customNotificationSoundConfig;
        return null != u
          ? (function (e) {
              return null != e
                ? Object.values(s.YC).find((t) => t === e)
                : void 0;
            })(
              null == u
                ? void 0
                : null === (l = u.notificationSoundPackId) || void 0 === l
                  ? void 0
                  : l.value,
            )
          : void 0;
      }
    },
    759198: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        o = n(481060),
        u = n(507815);
      function a(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(o.Text, {
          className: s()({ [u.text]: null == n }, t),
          color: n,
          ...l,
        });
      }
    },
    974180: function (e, t, n) {
      n.d(t, {
        Ay: function () {
          return X;
        },
        yk: function () {
          return J;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l = n(149765),
        s = n(442837),
        o = n(433517),
        u = n(570140),
        a = n(493683),
        r = n(475179),
        d = n(749210),
        c = n(292556),
        _ = n(287734),
        E = n(802098),
        T = n(933557),
        f = n(456269),
        I = n(15274),
        N = n(355298),
        g = n(601992),
        C = n(11352),
        S = n(671105),
        A = n(703656),
        Z = n(359110),
        O = n(922482),
        h = n(427679),
        v = n(488131),
        m = n(695346),
        p = n(592125),
        D = n(430824),
        M = n(292959),
        R = n(496675),
        y = n(699516),
        L = n(944486),
        U = n(885110),
        G = n(246946),
        P = n(594174),
        F = n(979651),
        b = n(5192),
        w = n(150097),
        k = n(912101),
        V = n(358085),
        H = n(74538),
        Y = n(557177),
        B = n(51144),
        W = n(981631),
        x = n(765305),
        z = n(689938);
      function q(e, t, n) {
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
      let X = "message1",
        J = 0.4,
        K = "discord_dismissed_notification_shown",
        Q = document.hasFocus(),
        $ = null,
        j = new Set(),
        ee = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        et = new (class {
          track(e, t) {
            let n = this._channels[e];
            for (
              null == n && ((n = []), (this._channels[e] = n)), n.push(t);
              n.length > 1;

            ) {
              let e = n.shift();
              null != e && null != e.close && e.close();
            }
          }
          clearChannel(e) {
            let t = this._channels[e];
            null != t &&
              (delete this._channels[e], t.forEach((e) => e.close()));
          }
          constructor() {
            q(this, "_channels", {});
          }
        })();
      function en() {
        return (
          !!(
            M.Z.getDesktopType() === W.qrD.NEVER ||
            U.Z.getStatus() === W.Skl.DND ||
            m.QZ.getSetting()
          ) || !1
        );
      }
      function ei(e) {
        return null != F.Z.getVoiceStateForChannel(e);
      }
      class el extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(P.default, p.Z, M.Z, D.Z, h.Z, y.Z, R.Z, F.Z, N.Z);
        }
      }
      q(el, "displayName", "NotificationStore"),
        new el(
          u.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t === W.$Ab.ENABLED &&
                    !V.isPlatformEmbedded &&
                    k.Z.showNotification(
                      n(185672),
                      z.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                      z.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                      { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                      {
                        omitViewTracking: !0,
                        sound: X,
                        volume: J,
                        tag: "hello",
                        onClick: () => {
                          window.focus();
                        },
                      },
                    );
                },
                NOTIFICATION_CREATE: function (e) {
                  let {
                    icon: t,
                    title: n,
                    body: i,
                    trackingProps: l,
                    options: s,
                  } = e;
                  return !en() && (k.Z.showNotification(t, n, i, l, s), !1);
                },
                WINDOW_FOCUS: function (e) {
                  if ((Q = e.focused)) {
                    let e = L.Z.getChannelId();
                    null != e && et.clearChannel(e);
                  }
                },
                MESSAGE_CREATE: function (e) {
                  var t, i, l, s;
                  let { channelId: o, message: a, optimistic: d } = e;
                  if (d) return !1;
                  let _ = p.Z.getChannel(o),
                    T = P.default.getUser(
                      null === (t = a.author) || void 0 === t ? void 0 : t.id,
                    ),
                    f = P.default.getCurrentUser();
                  if (null == _ || null == T) return !1;
                  let I = (0, w.eF)(a, o, !Q),
                    N =
                      M.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, w.N_)(a, o);
                  if (
                    (!I && !N) ||
                    (a.type === W.uaV.CHANGELOG &&
                      (null == a.changelog_id ||
                        E.Z.latestChangelogId() !== a.changelog_id))
                  )
                    return !1;
                  let A = !M.Z.isSoundDisabled(X),
                    O = H.ZP.canUseCustomNotificationSounds(f),
                    h = C.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    v =
                      O && h && A
                        ? null !==
                            (s = (0, S.bb)(
                              null !== (l = _.guild_id) && void 0 !== l
                                ? l
                                : W.aIL,
                              o,
                            )) && void 0 !== s
                          ? s
                          : (0, S.iD)(_.guild_id)
                        : void 0;
                  if ((N && (A && Y.GN("message3", 0.4, void 0, v), !Q)) || !I)
                    return !1;
                  let m = n(808506).Z,
                    D = n(237997).Z;
                  if (
                    null != m.getFocusedPID() &&
                    D.getTextChatNotificationMode() === W.Ypu.ENABLED &&
                    !G.Z.disableNotifications
                  )
                    return !1;
                  let { icon: R, title: y, body: L } = (0, w.Xi)(_, a, T);
                  if (
                    (u.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: _.id,
                      message: a,
                      icon: R,
                      title: y,
                      body: L,
                    }),
                    (0, g.R)(a, _.guild_id),
                    M.Z.getDesktopType() === W.qrD.NEVER)
                  )
                    return A && Y.GN(X, J, void 0, v), !1;
                  let U = k.Z.showNotification(
                    R,
                    y,
                    L,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (i = a.author) || void 0 === i ? void 0 : i.id,
                      message_id: a.id,
                      message_type: a.type,
                      channel_id: _.id,
                      channel_type: _.type,
                      guild_id: _.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: a.id,
                      sound: A ? X : void 0,
                      soundpack: v,
                      volume: J,
                      onClick() {
                        (0, Z.Kh)(_.id),
                          (_.type === W.d4z.GUILD_VOICE ||
                            _.type === W.d4z.GUILD_STAGE_VOICE) &&
                            r.Z.updateChatOpen(_.id, !0),
                          c.default.clickedNotification();
                      },
                    },
                  );
                  null != U && et.track(_.id, U);
                },
                CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && et.clearChannel(t), !1;
                },
                MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return et.clearChannel(t), !1;
                },
                ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (en()) return !1;
                  if (n.type === W.IIU.PLAYING) {
                    let e = P.default.getUser(t);
                    if (null == e) return !1;
                    let i = B.ZP.getName(e),
                      l = n.name,
                      s = e.getAvatarURL(void 0, 128),
                      o = z.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                      u = z.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                        username: i,
                        gameName: l,
                      });
                    return (
                      k.Z.showNotification(
                        s,
                        o,
                        u,
                        {
                          notif_type: "ACTIVITY_START",
                          activity_type: W.IIU.PLAYING,
                          notif_user_id: t,
                          activity_name: l,
                        },
                        {
                          sound: "message2",
                          playSoundIfDisabled: !1,
                          volume: 0.4,
                          onClick() {
                            a.Z.openPrivateChannel(t);
                          },
                        },
                      ),
                      !1
                    );
                  }
                  return !1;
                },
                VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  if (en()) return;
                  let n = P.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let {
                    channelId: l,
                    guildId: s,
                    suppress: o,
                    requestToSpeakTimestamp: u,
                  } = i;
                  if (null == l || null == s || !(!o && null != u)) return;
                  let a = D.Z.getGuild(s),
                    r = p.Z.getChannel(l),
                    d = h.Z.getStageInstanceByChannel(l);
                  null != a &&
                    null != r &&
                    null != d &&
                    k.Z.showNotification(
                      a.getIconURL(128),
                      r.name,
                      z.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, T.F6)(r, P.default, y.Z),
                        channelTopic: null == d ? void 0 : d.topic,
                      }),
                      { notif_type: "Stage Speak Invite" },
                      {},
                    );
                },
                STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (en() || !t.send_start_notification || ei(t.channel_id))
                    return !1;
                  let n = P.default.getCurrentUser(),
                    i = D.Z.getGuild(t.guild_id),
                    s = p.Z.getChannel(t.channel_id),
                    o = P.default.getUser(t.host_id);
                  if (
                    null == n ||
                    null == s ||
                    null == i ||
                    null == o ||
                    !(0, w.LL)(n, o, s) ||
                    !R.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), s) ||
                    j.has(t.id)
                  )
                    return !1;
                  j.add(t.id),
                    k.Z.showNotification(
                      i.getIconURL(128),
                      z.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: i.name,
                      }),
                      z.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                        username: b.ZP.getName(i.id, s.id, o),
                        topic: t.topic,
                      }),
                      {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: i.id,
                        channel_id: s.id,
                      },
                      {
                        onClick() {
                          (0, O.Cq)(s);
                        },
                      },
                    );
                },
                STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  j.delete(t.id);
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (en() || null == t.notification_type) return !1;
                  t.notification_type === x.sy.EVENT_START &&
                    (t.entity_type === x.WX.STAGE_INSTANCE ||
                    t.entity_type === x.WX.VOICE
                      ? !(function (e) {
                          if (en()) return !1;
                          let t = e.channel_id;
                          if (null == t || ei(t)) return !1;
                          let n = P.default.getCurrentUser(),
                            i = D.Z.getGuild(e.guild_id),
                            s = p.Z.getChannel(e.channel_id),
                            o = P.default.getUser(e.host_id);
                          if (
                            null == n ||
                            null == s ||
                            null == i ||
                            null == o ||
                            !R.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), s)
                          )
                            return !1;
                          k.Z.showNotification(
                            i.getIconURL(128),
                            z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: i.name },
                            ),
                            z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format(
                              {
                                topic: e.name,
                                username: b.ZP.getName(i.id, s.id, o),
                              },
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: i.id,
                              channel_id: s.id,
                            },
                            {
                              onClick() {
                                e.entity_type === x.WX.STAGE_INSTANCE &&
                                  (0, O.Cq)(s),
                                  e.entity_type === x.WX.VOICE &&
                                    _.default.selectVoiceChannel(s.id);
                              },
                            },
                          );
                        })(t)
                      : t.entity_type === x.WX.EXTERNAL &&
                        !(function (e) {
                          if (en()) return !1;
                          let t = P.default.getCurrentUser(),
                            n = D.Z.getGuild(e.guild_id);
                          if (null == t || null == n) return !1;
                          k.Z.showNotification(
                            n.getIconURL(128),
                            z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: n.name },
                            ),
                            z.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format(
                              { topic: e.name },
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: n.id,
                            },
                            {
                              onClick() {
                                d.Z.transitionToGuildSync(e.guild_id),
                                  (0, I.bO)({ eventId: e.id });
                              },
                            },
                          );
                        })(t));
                },
                THREAD_CREATE: function (e) {
                  var t;
                  let { channel: n, isNewlyCreated: i } = e;
                  if (en()) return !1;
                  let l = p.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !W.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, w.FI)(n, l, !Q)
                  )
                    return !1;
                  let { author: s, user: o } = (0, f.MC)(n);
                  if (null == o) return !1;
                  let u = D.Z.getGuild(l.guild_id);
                  if (null == u) return !1;
                  let a =
                      z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format(
                        { channelName: l.name, guildName: u.name },
                      ),
                    r =
                      z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format(
                        {
                          channelName: n.name,
                          userUsername:
                            null !== (t = null == s ? void 0 : s.nick) &&
                            void 0 !== t
                              ? t
                              : null == o
                                ? void 0
                                : o.username,
                        },
                      ),
                    d = o.getAvatarURL(void 0, 128);
                  k.Z.showNotification(
                    d,
                    a,
                    r,
                    { notif_type: "THREAD_CREATE", notif_user_id: o.id },
                    {
                      onClick() {
                        (0, v.ok)(n);
                      },
                    },
                  );
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let {
                    icon: t,
                    title: n,
                    body: i,
                    route: l,
                    trackingType: s,
                    tag: o,
                  } = e;
                  return (
                    !en() &&
                    null != n &&
                    null != i &&
                    null != s &&
                    (k.Z.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: s },
                      {
                        onClick() {
                          null != l &&
                            ((0, A.uL)(l), c.default.clickedNotification());
                        },
                        tag: o,
                      },
                    ),
                    !1)
                  );
                },
                WINDOW_HIDDEN: function () {
                  let e = (0, V.isWindows)(),
                    t = (0, V.isLinux)();
                  if (!(!o.K.get(K, !1) && V.isPlatformEmbedded && (e || t)))
                    return !1;
                  let i = !1;
                  return (
                    null != $ && (i = ee.includes($)),
                    !!i &&
                      (k.Z.showNotification(
                        n(95045),
                        z.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                        z.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, A.uL)(W.Z5c.SETTINGS(e ? "windows" : "linux"));
                          },
                          onShown: () => {
                            o.K.set(K, !0);
                          },
                        },
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return o.K.remove(K), !1;
                },
                CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  ($ = t),
                    j.clear(),
                    n.forEach((e) =>
                      e.stage_instances.forEach((e) => j.add(e.id)),
                    );
                },
              },
        );
    },
    150097: function (e, t, n) {
      n.d(t, {
        FI: function () {
          return P;
        },
        LL: function () {
          return L;
        },
        N_: function () {
          return G;
        },
        Xi: function () {
          return w;
        },
        eF: function () {
          return U;
        },
      }),
        n(789020),
        n(411104);
      var i = n(933557),
        l = n(710845),
        s = n(978003),
        o = n(41776),
        u = n(355298),
        a = n(957730),
        r = n(572804),
        d = n(901461);
      n(734934);
      var c = n(569471),
        _ = n(723170),
        E = n(695346),
        T = n(131704),
        f = n(433355),
        I = n(592125),
        N = n(430824),
        g = n(19780),
        C = n(699516),
        S = n(944486),
        A = n(914010),
        Z = n(885110),
        O = n(9156),
        h = n(594174),
        v = n(630388),
        m = n(5192),
        p = n(352736),
        D = n(51144),
        M = n(981631),
        R = n(124368),
        y = n(689938);
      function L(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t.hasFlag(M.xW$.SPAMMER) || n.isManaged()) return !1;
        let l = n.getGuildId();
        return (
          !(
            (null != l && o.Z.isLurking(l)) ||
            (!i.ignoreSameUser && t.id === e.id) ||
            C.Z.isBlocked(t.id) ||
            (!i.ignoreStatus && Z.Z.getStatus() === M.Skl.DND) ||
            E.QZ.getSetting() ||
            (!i.ignoreNoMessagesSetting && O.ZP.allowNoMessages(n))
          ) && !0
        );
      }
      function U(e, t) {
        var n;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e.flags && (0, v.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let s = I.Z.getChannel(t);
        e.type === M.uaV.THREAD_STARTER_MESSAGE &&
          (s = I.Z.getChannel(null == s ? void 0 : s.parent_id));
        let o = h.default.getCurrentUser(),
          a = h.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        if (
          null == s ||
          null == o ||
          null == a ||
          (s.type === M.d4z.GROUP_DM && e.type === M.uaV.RECIPIENT_REMOVE) ||
          !L(o, a, s, {
            ignoreStatus: l,
            ignoreSameUser: M.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
          }) ||
          u.Z.isMessageRequest(t)
        )
          return !1;
        if (!i) {
          let e = S.Z.getChannelId(A.Z.getGuildId());
          if (e === s.id || f.ZP.getCurrentSidebarChannelId(e) === s.id)
            return !1;
        }
        if (
          C.Z.isBlockedForMessage(e) ||
          (void 0 !== e.activity_instance &&
            null != e.interaction &&
            e.interaction.user.id === o.id)
        )
          return !1;
        if (T.Ec.has(s.type)) {
          if (c.Z.isMuted(s.id)) return !1;
          let t = (0, _.J)(s);
          return (
            t !== R.iN.NO_MESSAGES &&
            (t === R.iN.ALL_MESSAGES ||
              (0, r.Hl)({
                rawMessage: e,
                userId: o.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let t = !T.tx.has(s.type) || g.Z.getChannelId() === s.id;
          if (O.ZP.allowAllMessages(s) && t) return !0;
          let n = O.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = O.ZP.isSuppressRolesEnabled(s.getGuildId());
          return (0, r.Hl)({
            rawMessage: e,
            userId: o.id,
            suppressEveryone: n,
            suppressRoles: i,
          });
        }
      }
      function G(e, t) {
        var n;
        if (S.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
        let i = I.Z.getChannel(t);
        e.type === M.uaV.THREAD_STARTER_MESSAGE &&
          (i = I.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = h.default.getCurrentUser(),
          s = h.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        return (
          !(
            null == i ||
            null == l ||
            null == s ||
            i.isManaged() ||
            s.hasFlag(M.xW$.SPAMMER) ||
            C.Z.isBlockedForMessage(e) ||
            s.id === l.id ||
            Z.Z.getStatus() === M.Skl.DND ||
            E.QZ.getSetting() ||
            O.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function P(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = h.default.getCurrentUser(),
          s = h.default.getUser(e.ownerId);
        return (
          !(
            null == t ||
            null == l ||
            null == s ||
            !L(l, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            O.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
          ) &&
          (!!n || S.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
          O.ZP.getNewForumThreadsCreated(t)
        );
      }
      let F = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, i.F6)(t, h.default, C.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, h.default, C.Z)) : "",
            ")",
          );
      function b(e, t, n, i) {
        switch (e.type) {
          case M.d4z.GUILD_ANNOUNCEMENT:
          case M.d4z.GUILD_TEXT:
            return t;
          case M.d4z.GROUP_DM:
            return n;
          case M.d4z.DM:
          default:
            return i;
        }
      }
      function w(e, t, n) {
        var o, u, r, c, _;
        let E;
        let T = m.ZP.getName(e.getGuildId(), e.id, n),
          f = T;
        switch (e.type) {
          case M.d4z.GUILD_ANNOUNCEMENT:
          case M.d4z.GUILD_TEXT:
          case M.d4z.GUILD_VOICE:
          case M.d4z.ANNOUNCEMENT_THREAD:
          case M.d4z.PUBLIC_THREAD:
          case M.d4z.PRIVATE_THREAD:
            let g = I.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != g
              ? (f = F(f, g, I.Z.getChannel(g.parent_id)))
              : (0, d.Z)(t)
                ? null != N.Z.getGuild(e.getGuildId()) && (f = F(f, e, g))
                : (f = F(f, e, g));
            break;
          case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && f === (0, i.F6)(e, h.default, C.Z)) &&
              (f = ""
                .concat(f, " (")
                .concat((0, i.F6)(e, h.default, C.Z, !0), ")"));
        }
        let S = t.content;
        if ((0, d.Z)(t) && null == (S = p.Z.stringify(t, e)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t,
            ),
            Error("failed to stringify system message"))
          );
        let A = null !== (o = t.sticker_items) && void 0 !== o ? o : t.stickers;
        if ((0, s.s)(t)) E = y.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
        else if (null != t.activity && null != t.application)
          E =
            t.activity.type === M.mFx.JOIN
              ? b(
                  e,
                  y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  y.Z.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN,
                ).format({ user: T, game: t.application.name })
              : t.activity.type === M.mFx.JOIN_REQUEST
                ? b(
                    e,
                    y.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    y.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    y.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                  ).format({ user: T, game: t.application.name })
                : "";
        else if (null != t.activity && t.activity.type === M.mFx.LISTEN)
          E = b(
            e,
            y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN,
          ).format({ user: T });
        else if (null != A && A.length > 0)
          E = y.Z.Messages.STICKER_NOTIFICATION_BODY.format({
            stickerName: A[0].name,
          });
        else if (t.type === M.uaV.PREMIUM_REFERRAL)
          E = y.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
            username: D.ZP.getName(n),
          });
        else if (null != t.poll)
          E = y.Z.Messages.POLL_SENT_NOTIFICATION.format({
            question: t.poll.question.text,
          });
        else if (t.type === M.uaV.POLL_RESULT) {
          let e =
              null === (c = t.embeds) || void 0 === c
                ? void 0
                : null === (r = c[0]) || void 0 === r
                  ? void 0
                  : null === (u = r.fields) || void 0 === u
                    ? void 0
                    : u.find((e) => "poll_question_text" === e.name),
            n =
              null !== (_ = null == e ? void 0 : e.value) && void 0 !== _
                ? _
                : "";
          E = y.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
        } else
          E =
            0 !== S.length &&
            e.type === M.d4z.DM &&
            !n.bot &&
            S.startsWith("> -# *")
              ? (E = a.ZP.unparse(S, e.id, !0)).substring(0, 1) + E.substring(4)
              : a.ZP.unparse(S, e.id, !0);
        return (
          0 === E.length &&
            (E = (function (e) {
              var t;
              if (void 0 !== e.embeds && e.embeds.length > 0) {
                let t = e.embeds[0];
                if (null != t.description)
                  return null != t.title
                    ? "".concat(t.title, " ").concat(t.description)
                    : t.description;
                if (null != t.title) return t.title;
                if (null != t.fields) {
                  let e = t.fields[0];
                  return "".concat(e.name, " ").concat(e.value);
                }
              }
              if (
                (0, v.yE)(
                  null !== (t = e.flags) && void 0 !== t ? t : 0,
                  M.iLy.IS_VOICE_MESSAGE,
                )
              )
                return y.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
              if (void 0 !== e.attachments && e.attachments.length > 0) {
                let t = e.attachments[0].filename;
                return y.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
                  filename: t,
                });
              }
              return "";
            })(t)),
          { icon: n.getAvatarURL(e.guild_id, 128), title: f, body: E }
        );
      }
    },
    912101: function (e, t, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (t.Z = i);
    },
    654769: function (e, t, n) {
      n(47120), n(177593);
      var i,
        l = n(392711),
        s = n.n(l),
        o = n(525654),
        u = n.n(o),
        a = n(579806),
        r = n(292959),
        d = n(246946),
        c = n(626135),
        _ = n(358085),
        E = n(557177),
        T = n(998502),
        f = n(981631);
      function I(e, t, n) {
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
      let N = _.isPlatformEmbedded && (0, _.isWindows)(),
        g = N && 10 > parseFloat(a.Z.os.release),
        C = !0;
      if (N && !g) {
        let [e, , t] = a.Z.os.release.split(".");
        C = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let S =
          (N && C) ||
          ("Chrome" === u().name && 47 > parseFloat(u().version)) ||
          ("Firefox" === u().name && 52 > parseFloat(u().version)),
        A = s().throttle(E.GN, 1e3, { leading: !0 });
      function Z() {
        T.ZP.flashFrame(!1);
      }
      N &&
        (window.addEventListener("focus", Z), T.ZP.on("MAIN_WINDOW_FOCUS", Z));
      let O = window.Notification;
      g &&
        (T.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        T.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              T.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            I(this, "id", O._id++),
              I(this, "title", void 0),
              I(this, "body", void 0),
              I(this, "icon", void 0),
              I(this, "onshow", function () {}),
              I(this, "onclick", function () {}),
              I(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              T.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        I(i, "permission", "granted"),
        I(i, "_id", 0),
        (O = i));
      function h() {
        return null != O && "granted" === O.permission;
      }
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? A(e, t, void 0, n) : (0, E.GN)(e, t);
      }
      function m(e) {
        return (
          (d.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !h() ||
          (_.isPlatformEmbedded && !T.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: h,
        requestPermission: function (e) {
          null != O &&
            O.requestPermission(() => {
              null != e && e(h());
            });
        },
        showNotification: function (e, t, n, i, l) {
          var o, u, a, d;
          let E;
          if (m(l)) {
            null != l.sound &&
              !1 !== l.playSoundIfDisabled &&
              v(
                l.sound,
                null !== (u = l.volume) && void 0 !== u ? u : 1,
                l.soundpack,
              );
            return;
          }
          null != l.sound &&
            v(
              l.sound,
              null !== (a = l.volume) && void 0 !== a ? a : 1,
              l.soundpack,
            );
          let I =
            null !== (d = null == l ? void 0 : l.tag) && void 0 !== d
              ? d
              : null;
          (0, _.isLinux)() && (n = s().escape(n));
          let g = { icon: e, body: n, tag: I, silent: !0 };
          N && r.Z.taskbarFlash && T.ZP.flashFrame(!0);
          try {
            E = new O(t, g);
          } catch (e) {
            return null;
          }
          return (null === (o = l.onShown) || void 0 === o || o.call(l),
          !l.omitViewTracking && c.default.track(f.rMx.NOTIFICATION_VIEWED, i),
          (E.onclick = () => {
            var e;
            _.isPlatformEmbedded ? T.ZP.focus() : (window.focus(), E.close()),
              !l.omitClickTracking &&
                c.default.track(f.rMx.NOTIFICATION_CLICKED, i),
              null === (e = l.onClick) || void 0 === e || e.call(l);
          }),
          S && setTimeout(() => E.close(), 5e3),
          C)
            ? E
            : {
                close() {
                  var e;
                  null == E ||
                    null === (e = E.onclose) ||
                    void 0 === e ||
                    e.call(E);
                },
              };
        },
        disabled: m,
      };
    },
  },
]);
//# sourceMappingURL=6db318162b139e5cf2c8.js.map
