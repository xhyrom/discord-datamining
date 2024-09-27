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
          return u;
        },
        bb: function () {
          return r;
        },
        iD: function () {
          return a;
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
      function a(e) {
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
      function u(e, t) {
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
          a = null == o ? void 0 : o.customNotificationSoundConfig;
        return null != a
          ? (function (e) {
              return null != e
                ? Object.values(s.YC).find((t) => t === e)
                : void 0;
            })(
              null == a
                ? void 0
                : null === (l = a.notificationSoundPackId) || void 0 === l
                  ? void 0
                  : l.value,
            )
          : void 0;
      }
    },
    759198: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        s = n.n(l),
        o = n(481060),
        a = n(507815);
      function u(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(o.Text, {
          className: s()({ [a.text]: null == n }, t),
          color: n,
          ...l,
        });
      }
    },
    974180: function (e, t, n) {
      n.d(t, {
        Ay: function () {
          return K;
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
        a = n(570140),
        u = n(493683),
        r = n(475179),
        d = n(749210),
        c = n(292556),
        _ = n(287734),
        E = n(802098),
        I = n(933557),
        f = n(456269),
        T = n(15274),
        N = n(336197),
        g = n(355298),
        C = n(601992),
        S = n(11352),
        A = n(671105),
        Z = n(703656),
        h = n(359110),
        O = n(922482),
        m = n(427679),
        v = n(488131),
        D = n(695346),
        p = n(592125),
        M = n(430824),
        R = n(292959),
        L = n(496675),
        y = n(699516),
        G = n(944486),
        U = n(885110),
        P = n(246946),
        F = n(594174),
        w = n(979651),
        b = n(5192),
        k = n(150097),
        V = n(912101),
        H = n(358085),
        Y = n(74538),
        B = n(557177),
        W = n(51144),
        x = n(981631),
        z = n(765305),
        q = n(689938);
      function X(e, t, n) {
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
      let K = "message1",
        J = 0.4,
        Q = "discord_dismissed_notification_shown",
        $ = document.hasFocus(),
        j = null,
        ee = new Set(),
        et = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        en = new (class {
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
            X(this, "_channels", {});
          }
        })();
      function ei() {
        return (
          !!(
            R.Z.getDesktopType() === x.qrD.NEVER ||
            U.Z.getStatus() === x.Skl.DND ||
            D.QZ.getSetting()
          ) || !1
        );
      }
      function el(e) {
        return null != w.Z.getVoiceStateForChannel(e);
      }
      class es extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(F.default, p.Z, R.Z, M.Z, m.Z, y.Z, L.Z, w.Z, g.Z);
        }
      }
      X(es, "displayName", "NotificationStore"),
        new es(
          a.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t === x.$Ab.ENABLED &&
                    !H.isPlatformEmbedded &&
                    V.Z.showNotification(
                      n(185672),
                      q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                      q.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                      { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                      {
                        omitViewTracking: !0,
                        sound: K,
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
                  return !ei() && (V.Z.showNotification(t, n, i, l, s), !1);
                },
                WINDOW_FOCUS: function (e) {
                  if (($ = e.focused)) {
                    let e = G.Z.getChannelId();
                    null != e && en.clearChannel(e);
                  }
                },
                MESSAGE_CREATE: function (e) {
                  var t, i, l, s;
                  let { channelId: o, message: u, optimistic: d } = e;
                  if (d) return !1;
                  let _ = p.Z.getChannel(o),
                    I = F.default.getUser(
                      null === (t = u.author) || void 0 === t ? void 0 : t.id,
                    ),
                    f = F.default.getCurrentUser();
                  if (null == _ || null == I) return !1;
                  let T = (0, k.eF)(u, o, !$),
                    N =
                      R.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, k.N_)(u, o);
                  if (
                    (!T && !N) ||
                    (u.type === x.uaV.CHANGELOG &&
                      (null == u.changelog_id ||
                        E.Z.latestChangelogId() !== u.changelog_id))
                  )
                    return !1;
                  let g = !R.Z.isSoundDisabled(K),
                    Z = Y.ZP.canUseCustomNotificationSounds(f),
                    O = S.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    m =
                      Z && O && g
                        ? null !==
                            (s = (0, A.bb)(
                              null !== (l = _.guild_id) && void 0 !== l
                                ? l
                                : x.aIL,
                              o,
                            )) && void 0 !== s
                          ? s
                          : (0, A.iD)(_.guild_id)
                        : void 0;
                  if ((N && (g && B.GN("message3", 0.4, void 0, m), !$)) || !T)
                    return !1;
                  let v = n(808506).Z,
                    D = n(237997).Z;
                  if (
                    null != v.getFocusedPID() &&
                    D.getTextChatNotificationMode() === x.Ypu.ENABLED &&
                    !P.Z.disableNotifications
                  )
                    return !1;
                  let { icon: M, title: L, body: y } = (0, k.Xi)(_, u, I);
                  if (
                    (a.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: _.id,
                      message: u,
                      icon: M,
                      title: L,
                      body: y,
                    }),
                    (0, C.R)(u, _.guild_id),
                    R.Z.getDesktopType() === x.qrD.NEVER)
                  )
                    return g && B.GN(K, J, void 0, m), !1;
                  let G = V.Z.showNotification(
                    M,
                    L,
                    y,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (i = u.author) || void 0 === i ? void 0 : i.id,
                      message_id: u.id,
                      message_type: u.type,
                      channel_id: _.id,
                      channel_type: _.type,
                      guild_id: _.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: u.id,
                      sound: g ? K : void 0,
                      soundpack: m,
                      volume: J,
                      onClick() {
                        (0, h.Kh)(_.id),
                          (_.type === x.d4z.GUILD_VOICE ||
                            _.type === x.d4z.GUILD_STAGE_VOICE) &&
                            r.Z.updateChatOpen(_.id, !0),
                          c.default.clickedNotification();
                      },
                    },
                  );
                  null != G && en.track(_.id, G);
                },
                CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && en.clearChannel(t), !1;
                },
                MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return en.clearChannel(t), !1;
                },
                ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (ei()) return !1;
                  if (n.type === x.IIU.PLAYING) {
                    let e = F.default.getUser(t);
                    if (null == e) return !1;
                    let i = W.ZP.getName(e),
                      l = n.name,
                      s = e.getAvatarURL(void 0, 128),
                      o = q.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                      a = q.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                        username: i,
                        gameName: l,
                      });
                    return (
                      V.Z.showNotification(
                        s,
                        o,
                        a,
                        {
                          notif_type: "ACTIVITY_START",
                          activity_type: x.IIU.PLAYING,
                          notif_user_id: t,
                          activity_name: l,
                        },
                        {
                          sound: "message2",
                          playSoundIfDisabled: !1,
                          volume: 0.4,
                          onClick() {
                            u.Z.openPrivateChannel(t);
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
                  if (ei()) return;
                  let n = F.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let {
                    channelId: l,
                    guildId: s,
                    suppress: o,
                    requestToSpeakTimestamp: a,
                  } = i;
                  if (null == l || null == s || !(!o && null != a)) return;
                  let u = M.Z.getGuild(s),
                    r = p.Z.getChannel(l),
                    d = m.Z.getStageInstanceByChannel(l);
                  null != u &&
                    null != r &&
                    null != d &&
                    V.Z.showNotification(
                      u.getIconURL(128),
                      r.name,
                      q.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, I.F6)(r, F.default, y.Z),
                        channelTopic: null == d ? void 0 : d.topic,
                      }),
                      { notif_type: "Stage Speak Invite" },
                      {},
                    );
                },
                STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (ei() || !t.send_start_notification || el(t.channel_id))
                    return !1;
                  let n = F.default.getCurrentUser(),
                    i = M.Z.getGuild(t.guild_id),
                    s = p.Z.getChannel(t.channel_id),
                    o = F.default.getUser(t.host_id);
                  if (
                    null == n ||
                    null == s ||
                    null == i ||
                    null == o ||
                    !(0, k.LL)(n, o, s) ||
                    !L.Z.can(l.$e(x.Plq.CONNECT, x.Plq.VIEW_CHANNEL), s) ||
                    ee.has(t.id)
                  )
                    return !1;
                  ee.add(t.id),
                    V.Z.showNotification(
                      i.getIconURL(128),
                      q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: i.name,
                      }),
                      q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
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
                  ee.delete(t.id);
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (ei() || null == t.notification_type) return !1;
                  t.notification_type === z.sy.EVENT_START &&
                    (t.entity_type === z.WX.STAGE_INSTANCE ||
                    t.entity_type === z.WX.VOICE
                      ? !(function (e) {
                          if (ei()) return !1;
                          let t = e.channel_id;
                          if (null == t || el(t)) return !1;
                          let n = F.default.getCurrentUser(),
                            i = M.Z.getGuild(e.guild_id),
                            s = p.Z.getChannel(e.channel_id),
                            o = F.default.getUser(e.host_id);
                          if (
                            null == n ||
                            null == s ||
                            null == i ||
                            null == o ||
                            !L.Z.can(l.$e(x.Plq.CONNECT, x.Plq.VIEW_CHANNEL), s)
                          )
                            return !1;
                          V.Z.showNotification(
                            i.getIconURL(128),
                            q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: i.name },
                            ),
                            q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format(
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
                                e.entity_type === z.WX.STAGE_INSTANCE &&
                                  (0, O.Cq)(s),
                                  e.entity_type === z.WX.VOICE &&
                                    _.default.selectVoiceChannel(s.id);
                              },
                            },
                          );
                        })(t)
                      : t.entity_type === z.WX.EXTERNAL &&
                        !(function (e) {
                          if (ei()) return !1;
                          let t = F.default.getCurrentUser(),
                            n = M.Z.getGuild(e.guild_id);
                          if (null == t || null == n) return !1;
                          V.Z.showNotification(
                            n.getIconURL(128),
                            q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: n.name },
                            ),
                            q.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format(
                              { topic: e.name },
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: n.id,
                            },
                            {
                              onClick() {
                                d.Z.transitionToGuildSync(e.guild_id),
                                  (0, T.bO)({ eventId: e.id });
                              },
                            },
                          );
                        })(t));
                },
                THREAD_CREATE: function (e) {
                  var t;
                  let { channel: n, isNewlyCreated: i } = e;
                  if (ei()) return !1;
                  let l = p.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !x.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, k.FI)(n, l, !$)
                  )
                    return !1;
                  let { author: s, user: o } = (0, f.MC)(n);
                  if (null == o) return !1;
                  let a = M.Z.getGuild(l.guild_id);
                  if (null == a) return !1;
                  let u =
                      q.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format(
                        { channelName: l.name, guildName: a.name },
                      ),
                    r =
                      q.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format(
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
                  V.Z.showNotification(
                    d,
                    u,
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
                    !ei() &&
                    null != n &&
                    null != i &&
                    null != s &&
                    (V.Z.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: s },
                      {
                        onClick() {
                          null != l &&
                            ((0, Z.uL)(l), c.default.clickedNotification());
                        },
                        tag: o,
                      },
                    ),
                    !1)
                  );
                },
                WINDOW_HIDDEN: function () {
                  let e = (0, H.isWindows)(),
                    t = (0, H.isLinux)();
                  if (!(!o.K.get(Q, !1) && H.isPlatformEmbedded && (e || t)))
                    return !1;
                  let i = !1;
                  return (
                    null != j && (i = et.includes(j)),
                    !!i &&
                      (V.Z.showNotification(
                        n(95045),
                        q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                        q.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, Z.uL)(x.Z5c.SETTINGS(e ? "windows" : "linux"));
                          },
                          onShown: () => {
                            o.K.set(Q, !0);
                          },
                        },
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return o.K.remove(Q), !1;
                },
                CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (j = t),
                    ee.clear(),
                    n.forEach((e) =>
                      e.stage_instances.forEach((e) => ee.add(e.id)),
                    );
                },
                MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (ei()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = p.Z.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: s } = (0, k.Xi)(i, n, n.author);
                  V.Z.showNotification(
                    l,
                    q.Z.Messages.MESSAGE_REMINDER_DESKTOP_NOTIFICATION_TITLE,
                    s,
                    { notif_type: "MESSAGE_REMINDER_DUE" },
                    {
                      onClick() {
                        (0, N.Z)(
                          x.Z5c.CHANNEL(
                            null == i ? void 0 : i.getGuildId(),
                            i.id,
                            n.id,
                          ),
                        );
                      },
                    },
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
          return y;
        },
        N_: function () {
          return U;
        },
        Xi: function () {
          return b;
        },
        eF: function () {
          return G;
        },
      }),
        n(789020),
        n(411104);
      var i = n(933557),
        l = n(710845),
        s = n(978003),
        o = n(41776),
        a = n(355298),
        u = n(957730),
        r = n(572804),
        d = n(901461);
      n(734934);
      var c = n(569471),
        _ = n(723170),
        E = n(695346),
        I = n(131704),
        f = n(433355),
        T = n(592125),
        N = n(430824),
        g = n(19780),
        C = n(699516),
        S = n(944486),
        A = n(914010),
        Z = n(885110),
        h = n(9156),
        O = n(594174),
        m = n(630388),
        v = n(5192),
        D = n(352736),
        p = n(51144),
        M = n(981631),
        R = n(124368),
        L = n(689938);
      function y(e, t, n) {
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
            (!i.ignoreNoMessagesSetting && h.ZP.allowNoMessages(n))
          ) && !0
        );
      }
      function G(e, t) {
        var n;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e.flags && (0, m.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let s = T.Z.getChannel(t);
        e.type === M.uaV.THREAD_STARTER_MESSAGE &&
          (s = T.Z.getChannel(null == s ? void 0 : s.parent_id));
        let o = O.default.getCurrentUser(),
          u = O.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        if (
          null == s ||
          null == o ||
          null == u ||
          (s.type === M.d4z.GROUP_DM && e.type === M.uaV.RECIPIENT_REMOVE) ||
          !y(o, u, s, {
            ignoreStatus: l,
            ignoreSameUser: M.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
          }) ||
          a.Z.isMessageRequest(t)
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
        if (I.Ec.has(s.type)) {
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
          let t = !I.tx.has(s.type) || g.Z.getChannelId() === s.id;
          if (h.ZP.allowAllMessages(s) && t) return !0;
          let n = h.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = h.ZP.isSuppressRolesEnabled(s.getGuildId());
          return (0, r.Hl)({
            rawMessage: e,
            userId: o.id,
            suppressEveryone: n,
            suppressRoles: i,
          });
        }
      }
      function U(e, t) {
        var n;
        if (S.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
        let i = T.Z.getChannel(t);
        e.type === M.uaV.THREAD_STARTER_MESSAGE &&
          (i = T.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = O.default.getCurrentUser(),
          s = O.default.getUser(
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
            h.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function P(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = O.default.getCurrentUser(),
          s = O.default.getUser(e.ownerId);
        return (
          !(
            null == t ||
            null == l ||
            null == s ||
            !y(l, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            h.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
          ) &&
          (!!n || S.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
          h.ZP.getNewForumThreadsCreated(t)
        );
      }
      let F = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, i.F6)(t, O.default, C.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, O.default, C.Z)) : "",
            ")",
          );
      function w(e, t, n, i) {
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
      function b(e, t, n) {
        let o;
        let a = v.ZP.getName(e.getGuildId(), e.id, n),
          r = a;
        switch (e.type) {
          case M.d4z.GUILD_ANNOUNCEMENT:
          case M.d4z.GUILD_TEXT:
          case M.d4z.GUILD_VOICE:
          case M.d4z.ANNOUNCEMENT_THREAD:
          case M.d4z.PUBLIC_THREAD:
          case M.d4z.PRIVATE_THREAD:
            let c = T.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != c
              ? (r = F(r, c, T.Z.getChannel(c.parent_id)))
              : (0, d.Z)(t)
                ? null != N.Z.getGuild(e.getGuildId()) && (r = F(r, e, c))
                : (r = F(r, e, c));
            break;
          case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && r === (0, i.F6)(e, O.default, C.Z)) &&
              (r = ""
                .concat(r, " (")
                .concat((0, i.F6)(e, O.default, C.Z, !0), ")"));
        }
        let _ = t.content;
        if ((0, d.Z)(t) && null == (_ = D.Z.stringify(t, e)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t,
            ),
            Error("failed to stringify system message"))
          );
        let E = "sticker_items" in t ? t.sticker_items : t.stickers;
        if ("message_reference" in t ? (0, s.s)(t) : (0, s.Z)(t))
          o = L.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
        else if (null != t.activity && null != t.application)
          o =
            t.activity.type === M.mFx.JOIN
              ? w(
                  e,
                  L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  L.Z.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN,
                ).format({ user: a, game: t.application.name })
              : t.activity.type === M.mFx.JOIN_REQUEST
                ? w(
                    e,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                  ).format({ user: a, game: t.application.name })
                : "";
        else if (null != t.activity && t.activity.type === M.mFx.LISTEN)
          o = w(
            e,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN,
          ).format({ user: a });
        else if (null != E && E.length > 0)
          o = L.Z.Messages.STICKER_NOTIFICATION_BODY.format({
            stickerName: E[0].name,
          });
        else if (t.type === M.uaV.PREMIUM_REFERRAL)
          o = L.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
            username: p.ZP.getName(n),
          });
        else if (null != t.poll)
          o = L.Z.Messages.POLL_SENT_NOTIFICATION.format({
            question: t.poll.question.text,
          });
        else if (t.type === M.uaV.POLL_RESULT) {
          var I, f, g;
          let e =
              null === (g = t.embeds) || void 0 === g
                ? void 0
                : null === (f = g[0]) || void 0 === f
                  ? void 0
                  : null === (I = f.fields) || void 0 === I
                    ? void 0
                    : I.find(
                        (e) =>
                          ("name" in e ? e.name : e.rawName) ===
                          "poll_question_text",
                      ),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
          o = L.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
        } else
          o =
            0 !== _.length &&
            e.type === M.d4z.DM &&
            !n.bot &&
            _.startsWith("> -# *")
              ? (o = u.ZP.unparse(_, e.id, !0)).substring(0, 1) + o.substring(4)
              : u.ZP.unparse(_, e.id, !0);
        return (
          0 === o.length &&
            (o = (function (e) {
              var t;
              if (void 0 !== e.embeds && e.embeds.length > 0) {
                let t = e.embeds[0],
                  n = "description" in t ? t.description : t.rawDescription,
                  i = "title" in t ? t.title : t.rawTitle;
                if (null != n)
                  return null != i ? "".concat(i, " ").concat(n) : n;
                if (null != i) return i;
                if (null != t.fields) {
                  let e = t.fields[0],
                    n = "name" in e ? e.name : e.rawName,
                    i = "value" in e ? e.value : e.rawValue;
                  return "".concat(n, " ").concat(i);
                }
              }
              if (
                (0, m.yE)(
                  null !== (t = e.flags) && void 0 !== t ? t : 0,
                  M.iLy.IS_VOICE_MESSAGE,
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
          { icon: n.getAvatarURL(e.guild_id, 128), title: r, body: o }
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
        a = n.n(o),
        u = n(579806),
        r = n(292959),
        d = n(246946),
        c = n(626135),
        _ = n(358085),
        E = n(557177),
        I = n(998502),
        f = n(981631);
      function T(e, t, n) {
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
        g = N && 10 > parseFloat(u.Z.os.release),
        C = !0;
      if (N && !g) {
        let [e, , t] = u.Z.os.release.split(".");
        C = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let S =
          (N && C) ||
          ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
          ("Firefox" === a().name && 52 > parseFloat(a().version)),
        A = s().throttle(E.GN, 1e3, { leading: !0 });
      function Z() {
        I.ZP.flashFrame(!1);
      }
      N &&
        (window.addEventListener("focus", Z), I.ZP.on("MAIN_WINDOW_FOCUS", Z));
      let h = window.Notification;
      g &&
        (I.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        I.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              I.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            T(this, "id", h._id++),
              T(this, "title", void 0),
              T(this, "body", void 0),
              T(this, "icon", void 0),
              T(this, "onshow", function () {}),
              T(this, "onclick", function () {}),
              T(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              I.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        T(i, "permission", "granted"),
        T(i, "_id", 0),
        (h = i));
      function O() {
        return null != h && "granted" === h.permission;
      }
      function m(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? A(e, t, void 0, n) : (0, E.GN)(e, t);
      }
      function v(e) {
        return (
          (d.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !O() ||
          (_.isPlatformEmbedded && !I.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: O,
        requestPermission: function (e) {
          null != h &&
            h.requestPermission(() => {
              null != e && e(O());
            });
        },
        showNotification: function (e, t, n, i, l) {
          var o, a, u, d;
          let E;
          if (v(l)) {
            null != l.sound &&
              !1 !== l.playSoundIfDisabled &&
              m(
                l.sound,
                null !== (a = l.volume) && void 0 !== a ? a : 1,
                l.soundpack,
              );
            return;
          }
          null != l.sound &&
            m(
              l.sound,
              null !== (u = l.volume) && void 0 !== u ? u : 1,
              l.soundpack,
            );
          let T =
            null !== (d = null == l ? void 0 : l.tag) && void 0 !== d
              ? d
              : null;
          (0, _.isLinux)() && (n = s().escape(n));
          let g = { icon: e, body: n, tag: T, silent: !0 };
          N && r.Z.taskbarFlash && I.ZP.flashFrame(!0);
          try {
            E = new h(t, g);
          } catch (e) {
            return null;
          }
          return (null === (o = l.onShown) || void 0 === o || o.call(l),
          !l.omitViewTracking && c.default.track(f.rMx.NOTIFICATION_VIEWED, i),
          (E.onclick = () => {
            var e;
            _.isPlatformEmbedded ? I.ZP.focus() : (window.focus(), E.close()),
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
        disabled: v,
      };
    },
  },
]);
//# sourceMappingURL=07b42ba658052447f63e.js.map
