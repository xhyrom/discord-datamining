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
          return a;
        },
        _c: function () {
          return o;
        },
        bb: function () {
          return r;
        },
        iD: function () {
          return s;
        },
      });
      var i = n(442837),
        l = n(581883),
        u = n(871465);
      function a(e) {
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
      function s(e) {
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
      function o(e, t) {
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
        let u =
          null !==
            (i =
              null === (n = l.Z.settings.guilds) || void 0 === n
                ? void 0
                : n.guilds) && void 0 !== i
            ? i
            : {};
        return null != t ? d(e, t, u) : void 0;
      }
      function d(e, t, n) {
        var i, l;
        if (null == n) return;
        let a =
            null != t
              ? null === (i = n[e]) || void 0 === i
                ? void 0
                : i.channels[t]
              : n[e],
          s = null == a ? void 0 : a.customNotificationSoundConfig;
        return null != s
          ? (function (e) {
              return null != e
                ? Object.values(u.YC).find((t) => t === e)
                : void 0;
            })(
              null == s
                ? void 0
                : null === (l = s.notificationSoundPackId) || void 0 === l
                  ? void 0
                  : l.value,
            )
          : void 0;
      }
    },
    759198: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        u = n.n(l),
        a = n(481060),
        s = n(100535);
      function o(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(a.Text, {
          className: u()({ [s.text]: null == n }, t),
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
        u = n(442837),
        a = n(433517),
        s = n(570140),
        o = n(493683),
        r = n(475179),
        d = n(749210),
        _ = n(292556),
        E = n(287734),
        c = n(802098),
        T = n(933557),
        I = n(456269),
        f = n(15274),
        g = n(355298),
        N = n(601992),
        S = n(11352),
        C = n(671105),
        A = n(703656),
        Z = n(359110),
        O = n(922482),
        h = n(427679),
        D = n(488131),
        v = n(695346),
        M = n(592125),
        p = n(430824),
        R = n(292959),
        m = n(496675),
        L = n(699516),
        U = n(944486),
        y = n(885110),
        G = n(246946),
        P = n(594174),
        F = n(979651),
        V = n(5192),
        w = n(150097),
        b = n(912101),
        k = n(358085),
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
        Q = "discord_dismissed_notification_shown",
        K = document.hasFocus(),
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
            R.Z.getDesktopType() === W.qrD.NEVER ||
            y.Z.getStatus() === W.Skl.DND ||
            v.QZ.getSetting()
          ) || !1
        );
      }
      function ei(e) {
        return null != F.Z.getVoiceStateForChannel(e);
      }
      class el extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(P.default, M.Z, R.Z, p.Z, h.Z, L.Z, m.Z, F.Z, g.Z);
        }
      }
      q(el, "displayName", "NotificationStore"),
        new el(
          s.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t === W.$Ab.ENABLED &&
                    !k.isPlatformEmbedded &&
                    b.Z.showNotification(
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
                    options: u,
                  } = e;
                  return !en() && (b.Z.showNotification(t, n, i, l, u), !1);
                },
                WINDOW_FOCUS: function (e) {
                  if ((K = e.focused)) {
                    let e = U.Z.getChannelId();
                    null != e && et.clearChannel(e);
                  }
                },
                MESSAGE_CREATE: function (e) {
                  var t, i, l, u;
                  let { channelId: a, message: o, optimistic: d } = e;
                  if (d) return !1;
                  let E = M.Z.getChannel(a),
                    T = P.default.getUser(
                      null === (t = o.author) || void 0 === t ? void 0 : t.id,
                    ),
                    I = P.default.getCurrentUser();
                  if (null == E || null == T || E.isBroadcastChannel())
                    return !1;
                  let f = (0, w.eF)(o, a, !K),
                    g =
                      R.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, w.N_)(o, a);
                  if (
                    (!f && !g) ||
                    (o.type === W.uaV.CHANGELOG &&
                      (null == o.changelog_id ||
                        c.Z.latestChangelogId() !== o.changelog_id))
                  )
                    return !1;
                  let A = !R.Z.isSoundDisabled(X),
                    O = H.ZP.canUseCustomNotificationSounds(I),
                    h = S.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    D =
                      O && h && A
                        ? null !==
                            (u = (0, C.bb)(
                              null !== (l = E.guild_id) && void 0 !== l
                                ? l
                                : W.aIL,
                              a,
                            )) && void 0 !== u
                          ? u
                          : (0, C.iD)(E.guild_id)
                        : void 0;
                  if ((g && (A && Y.GN("message3", 0.4, void 0, D), !K)) || !f)
                    return !1;
                  let v = n(808506).Z,
                    p = n(237997).Z;
                  if (
                    null != v.getFocusedPID() &&
                    p.getTextChatNotificationMode() === W.Ypu.ENABLED &&
                    !G.Z.disableNotifications
                  )
                    return !1;
                  let { icon: m, title: L, body: U } = (0, w.Xi)(E, o, T);
                  if (
                    (s.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: E.id,
                      message: o,
                      icon: m,
                      title: L,
                      body: U,
                    }),
                    (0, N.R)(o, E.guild_id),
                    R.Z.getDesktopType() === W.qrD.NEVER)
                  )
                    return A && Y.GN(X, J, void 0, D), !1;
                  let y = b.Z.showNotification(
                    m,
                    L,
                    U,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (i = o.author) || void 0 === i ? void 0 : i.id,
                      message_id: o.id,
                      message_type: o.type,
                      channel_id: E.id,
                      channel_type: E.type,
                      guild_id: E.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: o.id,
                      sound: A ? X : void 0,
                      soundpack: D,
                      volume: J,
                      onClick() {
                        (0, Z.Kh)(E.id),
                          (E.type === W.d4z.GUILD_VOICE ||
                            E.type === W.d4z.GUILD_STAGE_VOICE) &&
                            r.Z.updateChatOpen(E.id, !0),
                          _.default.clickedNotification();
                      },
                    },
                  );
                  null != y && et.track(E.id, y);
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
                      u = e.getAvatarURL(void 0, 128),
                      a = z.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                      s = z.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                        username: i,
                        gameName: l,
                      });
                    return (
                      b.Z.showNotification(
                        u,
                        a,
                        s,
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
                            o.Z.openPrivateChannel(t);
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
                    guildId: u,
                    suppress: a,
                    requestToSpeakTimestamp: s,
                  } = i;
                  if (null == l || null == u || !(!a && null != s)) return;
                  let o = p.Z.getGuild(u),
                    r = M.Z.getChannel(l),
                    d = h.Z.getStageInstanceByChannel(l);
                  null != o &&
                    null != r &&
                    null != d &&
                    b.Z.showNotification(
                      o.getIconURL(128),
                      r.name,
                      z.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, T.F6)(r, P.default, L.Z),
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
                    i = p.Z.getGuild(t.guild_id),
                    u = M.Z.getChannel(t.channel_id),
                    a = P.default.getUser(t.host_id);
                  if (
                    null == n ||
                    null == u ||
                    null == i ||
                    null == a ||
                    !(0, w.LL)(n, a, u) ||
                    !m.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), u) ||
                    j.has(t.id)
                  )
                    return !1;
                  j.add(t.id),
                    b.Z.showNotification(
                      i.getIconURL(128),
                      z.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: i.name,
                      }),
                      z.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                        username: V.ZP.getName(i.id, u.id, a),
                        topic: t.topic,
                      }),
                      {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: i.id,
                        channel_id: u.id,
                      },
                      {
                        onClick() {
                          (0, O.Cq)(u);
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
                            i = p.Z.getGuild(e.guild_id),
                            u = M.Z.getChannel(e.channel_id),
                            a = P.default.getUser(e.host_id);
                          if (
                            null == n ||
                            null == u ||
                            null == i ||
                            null == a ||
                            !m.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), u)
                          )
                            return !1;
                          b.Z.showNotification(
                            i.getIconURL(128),
                            z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: i.name },
                            ),
                            z.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format(
                              {
                                topic: e.name,
                                username: V.ZP.getName(i.id, u.id, a),
                              },
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: i.id,
                              channel_id: u.id,
                            },
                            {
                              onClick() {
                                e.entity_type === x.WX.STAGE_INSTANCE &&
                                  (0, O.Cq)(u),
                                  e.entity_type === x.WX.VOICE &&
                                    E.default.selectVoiceChannel(u.id);
                              },
                            },
                          );
                        })(t)
                      : t.entity_type === x.WX.EXTERNAL &&
                        !(function (e) {
                          if (en()) return !1;
                          let t = P.default.getCurrentUser(),
                            n = p.Z.getGuild(e.guild_id);
                          if (null == t || null == n) return !1;
                          b.Z.showNotification(
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
                                  (0, f.bO)({ eventId: e.id });
                              },
                            },
                          );
                        })(t));
                },
                THREAD_CREATE: function (e) {
                  var t;
                  let { channel: n, isNewlyCreated: i } = e;
                  if (en()) return !1;
                  let l = M.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !W.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, w.FI)(n, l, !K)
                  )
                    return !1;
                  let { author: u, user: a } = (0, I.MC)(n);
                  if (null == a) return !1;
                  let s = p.Z.getGuild(l.guild_id);
                  if (null == s) return !1;
                  let o =
                      z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format(
                        { channelName: l.name, guildName: s.name },
                      ),
                    r =
                      z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format(
                        {
                          channelName: n.name,
                          userUsername:
                            null !== (t = null == u ? void 0 : u.nick) &&
                            void 0 !== t
                              ? t
                              : null == a
                                ? void 0
                                : a.username,
                        },
                      ),
                    d = a.getAvatarURL(void 0, 128);
                  b.Z.showNotification(
                    d,
                    o,
                    r,
                    { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                    {
                      onClick() {
                        (0, D.ok)(n);
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
                    trackingType: u,
                    tag: a,
                  } = e;
                  return (
                    !en() &&
                    null != n &&
                    null != i &&
                    null != u &&
                    (b.Z.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: u },
                      {
                        onClick() {
                          null != l && (0, A.uL)(l);
                        },
                        tag: a,
                      },
                    ),
                    !1)
                  );
                },
                WINDOW_HIDDEN: function () {
                  let e = (0, k.isWindows)(),
                    t = (0, k.isLinux)();
                  if (!(!a.K.get(Q, !1) && k.isPlatformEmbedded && (e || t)))
                    return !1;
                  let i = !1;
                  return (
                    null != $ && (i = ee.includes($)),
                    !!i &&
                      (b.Z.showNotification(
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
                            a.K.set(Q, !0);
                          },
                        },
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return a.K.remove(Q), !1;
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
          return U;
        },
        N_: function () {
          return G;
        },
        Xi: function () {
          return w;
        },
        eF: function () {
          return y;
        },
      }),
        n(789020),
        n(411104);
      var i = n(933557),
        l = n(710845),
        u = n(978003),
        a = n(41776),
        s = n(355298),
        o = n(957730),
        r = n(572804),
        d = n(901461);
      n(734934);
      var _ = n(569471),
        E = n(723170),
        c = n(695346),
        T = n(131704),
        I = n(433355),
        f = n(592125),
        g = n(430824),
        N = n(19780),
        S = n(699516),
        C = n(944486),
        A = n(914010),
        Z = n(885110),
        O = n(9156),
        h = n(594174),
        D = n(630388),
        v = n(5192),
        M = n(352736),
        p = n(51144),
        R = n(981631),
        m = n(124368),
        L = n(689938);
      function U(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
        let l = n.getGuildId();
        return (
          !(
            (null != l && a.Z.isLurking(l)) ||
            (!i.ignoreSameUser && t.id === e.id) ||
            S.Z.isBlocked(t.id) ||
            (!i.ignoreStatus && Z.Z.getStatus() === R.Skl.DND) ||
            c.QZ.getSetting() ||
            (!i.ignoreNoMessagesSetting && O.ZP.allowNoMessages(n))
          ) && !0
        );
      }
      function y(e, t) {
        var n;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e.flags && (0, D.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let u = f.Z.getChannel(t);
        e.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (u = f.Z.getChannel(null == u ? void 0 : u.parent_id));
        let a = h.default.getCurrentUser(),
          o = h.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        if (
          null == u ||
          null == a ||
          null == o ||
          (u.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
          !U(a, o, u, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
          }) ||
          s.Z.isMessageRequest(t)
        )
          return !1;
        if (!i) {
          let e = C.Z.getChannelId(A.Z.getGuildId());
          if (e === u.id || I.ZP.getCurrentSidebarChannelId(e) === u.id)
            return !1;
        }
        if (
          S.Z.isBlockedForMessage(e) ||
          (void 0 !== e.activity_instance &&
            null != e.interaction &&
            e.interaction.user.id === a.id)
        )
          return !1;
        if (T.Ec.has(u.type)) {
          if (_.Z.isMuted(u.id)) return !1;
          let t = (0, E.J)(u);
          return (
            t !== m.iN.NO_MESSAGES &&
            (t === m.iN.ALL_MESSAGES ||
              (0, r.Hl)({
                rawMessage: e,
                userId: a.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let t = !T.tx.has(u.type) || N.Z.getChannelId() === u.id;
          if (O.ZP.allowAllMessages(u) && t) return !0;
          let n = O.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
            i = O.ZP.isSuppressRolesEnabled(u.getGuildId());
          return (0, r.Hl)({
            rawMessage: e,
            userId: a.id,
            suppressEveryone: n,
            suppressRoles: i,
          });
        }
      }
      function G(e, t) {
        var n;
        if (C.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
        let i = f.Z.getChannel(t);
        e.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (i = f.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = h.default.getCurrentUser(),
          u = h.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        return (
          !(
            null == i ||
            null == l ||
            null == u ||
            i.isManaged() ||
            u.hasFlag(R.xW$.SPAMMER) ||
            S.Z.isBlockedForMessage(e) ||
            u.id === l.id ||
            Z.Z.getStatus() === R.Skl.DND ||
            c.QZ.getSetting() ||
            O.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function P(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = h.default.getCurrentUser(),
          u = h.default.getUser(e.ownerId);
        return (
          !(
            null == t ||
            null == l ||
            null == u ||
            !U(l, u, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            O.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
          ) &&
          (!!n || C.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
          O.ZP.getNewForumThreadsCreated(t)
        );
      }
      let F = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, i.F6)(t, h.default, S.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, h.default, S.Z)) : "",
            ")",
          );
      function V(e, t, n, i) {
        switch (e.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
            return t;
          case R.d4z.GROUP_DM:
            return n;
          case R.d4z.DM:
          default:
            return i;
        }
      }
      function w(e, t, n) {
        var a, s, r, _, E;
        let c;
        let T = v.ZP.getName(e.getGuildId(), e.id, n),
          I = T;
        switch (e.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
          case R.d4z.GUILD_VOICE:
          case R.d4z.ANNOUNCEMENT_THREAD:
          case R.d4z.PUBLIC_THREAD:
          case R.d4z.PRIVATE_THREAD:
            let N = f.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != N
              ? (I = F(I, N, f.Z.getChannel(N.parent_id)))
              : (0, d.Z)(t)
                ? null != g.Z.getGuild(e.getGuildId()) && (I = F(I, e, N))
                : (I = F(I, e, N));
            break;
          case R.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && I === (0, i.F6)(e, h.default, S.Z)) &&
              (I = ""
                .concat(I, " (")
                .concat((0, i.F6)(e, h.default, S.Z, !0), ")"));
        }
        let C = t.content;
        if ((0, d.Z)(t) && null == (C = M.Z.stringify(t, e)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t,
            ),
            Error("failed to stringify system message"))
          );
        let A = null !== (a = t.sticker_items) && void 0 !== a ? a : t.stickers;
        if ((0, u.s)(t)) c = L.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
        else if (null != t.activity && null != t.application)
          c =
            t.activity.type === R.mFx.JOIN
              ? V(
                  e,
                  L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  L.Z.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN,
                ).format({ user: T, game: t.application.name })
              : t.activity.type === R.mFx.JOIN_REQUEST
                ? V(
                    e,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                  ).format({ user: T, game: t.application.name })
                : "";
        else if (null != t.activity && t.activity.type === R.mFx.LISTEN)
          c = V(
            e,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN,
          ).format({ user: T });
        else if (null != A && A.length > 0)
          c = L.Z.Messages.STICKER_NOTIFICATION_BODY.format({
            stickerName: A[0].name,
          });
        else if (t.type === R.uaV.PREMIUM_REFERRAL)
          c = L.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
            username: p.ZP.getName(n),
          });
        else if (null != t.poll)
          c = L.Z.Messages.POLL_SENT_NOTIFICATION.format({
            question: t.poll.question.text,
          });
        else if (t.type === R.uaV.POLL_RESULT) {
          let e =
              null === (_ = t.embeds) || void 0 === _
                ? void 0
                : null === (r = _[0]) || void 0 === r
                  ? void 0
                  : null === (s = r.fields) || void 0 === s
                    ? void 0
                    : s.find((e) => "poll_question_text" === e.name),
            n =
              null !== (E = null == e ? void 0 : e.value) && void 0 !== E
                ? E
                : "";
          c = L.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
        } else c = o.ZP.unparse(C, e.id, !0);
        return (
          0 === c.length &&
            (c = (function (e) {
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
                (0, D.yE)(
                  null !== (t = e.flags) && void 0 !== t ? t : 0,
                  R.iLy.IS_VOICE_MESSAGE,
                )
              )
                return L.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
              if (void 0 !== e.attachments && e.attachments.length > 0) {
                let t = e.attachments[0].filename;
                return L.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
                  filename: t,
                });
              }
              return "";
            })(t)),
          { icon: n.getAvatarURL(e.guild_id, 128), title: I, body: c }
        );
      }
    },
    912101: function (e, t, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (t.Z = i);
    },
  },
]);
//# sourceMappingURL=4e63f4a60963ba651287.js.map
