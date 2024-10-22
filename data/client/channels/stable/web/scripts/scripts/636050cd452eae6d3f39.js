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
          return u;
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
        o = n(871465);
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
        let o =
          null !==
            (i =
              null === (n = l.Z.settings.guilds) || void 0 === n
                ? void 0
                : n.guilds) && void 0 !== i
            ? i
            : {};
        return null != t ? d(e, t, o) : void 0;
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
                ? Object.values(o.YC).find((t) => t === e)
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
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        a = n(481060),
        s = n(507815);
      function u(e) {
        let { className: t, color: n, ...l } = e;
        return (0, i.jsx)(a.Text, {
          className: o()({ [s.text]: null == n }, t),
          color: n,
          ...l,
        });
      }
    },
    106371: function (e, t, n) {
      var i = n(818083);
      let l = (0, i.B)({
        kind: "user",
        id: "2024-08_reaction_push_notifications_user",
        label: "In App Notifications for Reactions",
        defaultConfig: {
          enableInAppNotifications: !1,
          enableNotificationsForAllReactions: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions (First Reaction)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !1,
            },
          },
          {
            id: 2,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
          {
            id: 3,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
        ],
      });
      (0, i.B)({
        kind: "guild",
        id: "2024-08_reaction_push_notifications_guild",
        label: "In App Notifications for Reactions (Guild)",
        defaultConfig: { enableInAppNotifications: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions",
            config: { enableInAppNotifications: !0 },
          },
        ],
      }),
        (t.Z = l);
    },
    974180: function (e, t, n) {
      n.d(t, {
        Ay: function () {
          return Q;
        },
        yk: function () {
          return $;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l = n(149765),
        o = n(442837),
        a = n(433517),
        s = n(570140),
        u = n(493683),
        r = n(475179),
        d = n(749210),
        c = n(292556),
        _ = n(287734),
        E = n(802098),
        f = n(933557),
        I = n(456269),
        T = n(15274),
        N = n(754688),
        g = n(336197),
        A = n(355298),
        C = n(601992),
        S = n(11352),
        Z = n(671105),
        h = n(106371),
        O = n(703656),
        p = n(359110),
        m = n(922482),
        v = n(427679),
        D = n(488131),
        R = n(695346),
        M = n(592125),
        y = n(430824),
        L = n(292959),
        G = n(496675),
        U = n(699516),
        F = n(944486),
        P = n(885110),
        b = n(246946),
        w = n(594174),
        k = n(979651),
        V = n(5192),
        H = n(150097),
        Y = n(912101),
        B = n(358085),
        W = n(74538),
        x = n(557177),
        z = n(51144),
        q = n(981631),
        X = n(765305),
        K = n(689938);
      function J(e, t, n) {
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
      let Q = "message1",
        $ = 0.4,
        j = "discord_dismissed_notification_shown",
        ee = document.hasFocus(),
        et = null,
        en = new Set(),
        ei = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        el = new (class {
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
            J(this, "_channels", {});
          }
        })();
      function eo() {
        return (
          !!(
            L.Z.getDesktopType() === q.qrD.NEVER ||
            P.Z.getStatus() === q.Skl.DND ||
            R.QZ.getSetting()
          ) || !1
        );
      }
      function ea(e) {
        return null != k.Z.getVoiceStateForChannel(e);
      }
      class es extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(w.default, M.Z, L.Z, y.Z, v.Z, U.Z, G.Z, k.Z, A.Z);
        }
      }
      J(es, "displayName", "NotificationStore"),
        new es(
          s.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t === q.$Ab.ENABLED &&
                    !B.isPlatformEmbedded &&
                    Y.Z.showNotification(
                      n(185672),
                      K.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                      K.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
                      { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                      {
                        omitViewTracking: !0,
                        sound: Q,
                        volume: $,
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
                    options: o,
                  } = e;
                  return !eo() && (Y.Z.showNotification(t, n, i, l, o), !1);
                },
                WINDOW_FOCUS: function (e) {
                  if ((ee = e.focused)) {
                    let e = F.Z.getChannelId();
                    null != e && el.clearChannel(e);
                  }
                },
                MESSAGE_CREATE: function (e) {
                  var t, i, l, o;
                  let { channelId: a, message: u, optimistic: d } = e;
                  if (d) return !1;
                  let _ = M.Z.getChannel(a),
                    f = w.default.getUser(
                      null === (t = u.author) || void 0 === t ? void 0 : t.id,
                    ),
                    I = w.default.getCurrentUser();
                  if (null == _ || null == f) return !1;
                  let T = (0, H.eF)(u, a, !ee),
                    N =
                      L.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, H.N_)(u, a);
                  if (
                    (!T && !N) ||
                    (u.type === q.uaV.CHANGELOG &&
                      (null == u.changelog_id ||
                        E.Z.latestChangelogId() !== u.changelog_id))
                  )
                    return !1;
                  let g = !L.Z.isSoundDisabled(Q),
                    A = W.ZP.canUseCustomNotificationSounds(I),
                    h = S.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    O =
                      A && h && g
                        ? null !==
                            (o = (0, Z.bb)(
                              null !== (l = _.guild_id) && void 0 !== l
                                ? l
                                : q.aIL,
                              a,
                            )) && void 0 !== o
                          ? o
                          : (0, Z.iD)(_.guild_id)
                        : void 0;
                  if ((N && (g && x.GN("message3", 0.4, void 0, O), !ee)) || !T)
                    return !1;
                  let m = n(808506).Z,
                    v = n(237997).Z;
                  if (
                    null != m.getFocusedPID() &&
                    v.getTextChatNotificationMode() === q.Ypu.ENABLED &&
                    !b.Z.disableNotifications
                  )
                    return !1;
                  let { icon: D, title: R, body: y } = (0, H.Xi)(_, u, f);
                  if (
                    (s.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: _.id,
                      message: u,
                      icon: D,
                      title: R,
                      body: y,
                    }),
                    (0, C.R)(u, _.guild_id),
                    L.Z.getDesktopType() === q.qrD.NEVER)
                  )
                    return g && x.GN(Q, $, void 0, O), !1;
                  let G = Y.Z.showNotification(
                    D,
                    R,
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
                      sound: g ? Q : void 0,
                      soundpack: O,
                      volume: $,
                      onClick() {
                        (0, p.Kh)(_.id),
                          (_.type === q.d4z.GUILD_VOICE ||
                            _.type === q.d4z.GUILD_STAGE_VOICE) &&
                            r.Z.updateChatOpen(_.id, !0),
                          c.default.clickedNotification();
                      },
                    },
                  );
                  null != G && el.track(_.id, G);
                },
                CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && el.clearChannel(t), !1;
                },
                MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return el.clearChannel(t), !1;
                },
                ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (eo()) return !1;
                  if (n.type === q.IIU.PLAYING) {
                    let e = w.default.getUser(t);
                    if (null == e) return !1;
                    let i = z.ZP.getName(e),
                      l = n.name,
                      o = e.getAvatarURL(void 0, 128),
                      a = K.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                      s = K.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                        username: i,
                        gameName: l,
                      });
                    return (
                      Y.Z.showNotification(
                        o,
                        a,
                        s,
                        {
                          notif_type: "ACTIVITY_START",
                          activity_type: q.IIU.PLAYING,
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
                  if (eo()) return;
                  let n = w.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let {
                    channelId: l,
                    guildId: o,
                    suppress: a,
                    requestToSpeakTimestamp: s,
                  } = i;
                  if (null == l || null == o || !(!a && null != s)) return;
                  let u = y.Z.getGuild(o),
                    r = M.Z.getChannel(l),
                    d = v.Z.getStageInstanceByChannel(l);
                  null != u &&
                    null != r &&
                    null != d &&
                    Y.Z.showNotification(
                      u.getIconURL(128),
                      r.name,
                      K.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, f.F6)(r, w.default, U.Z),
                        channelTopic: null == d ? void 0 : d.topic,
                      }),
                      { notif_type: "Stage Speak Invite" },
                      {},
                    );
                },
                STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (eo() || !t.send_start_notification || ea(t.channel_id))
                    return !1;
                  let n = w.default.getCurrentUser(),
                    i = y.Z.getGuild(t.guild_id),
                    o = M.Z.getChannel(t.channel_id),
                    a = w.default.getUser(t.host_id);
                  if (
                    null == n ||
                    null == o ||
                    null == i ||
                    null == a ||
                    !(0, H.LL)(n, a, o) ||
                    !G.Z.can(l.$e(q.Plq.CONNECT, q.Plq.VIEW_CHANNEL), o) ||
                    en.has(t.id)
                  )
                    return !1;
                  en.add(t.id),
                    Y.Z.showNotification(
                      i.getIconURL(128),
                      K.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: i.name,
                      }),
                      K.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                        username: V.ZP.getName(i.id, o.id, a),
                        topic: t.topic,
                      }),
                      {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: i.id,
                        channel_id: o.id,
                      },
                      {
                        onClick() {
                          (0, m.Cq)(o);
                        },
                      },
                    );
                },
                STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  en.delete(t.id);
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (eo() || null == t.notification_type) return !1;
                  t.notification_type === X.sy.EVENT_START &&
                    (t.entity_type === X.WX.STAGE_INSTANCE ||
                    t.entity_type === X.WX.VOICE
                      ? !(function (e) {
                          if (eo()) return !1;
                          let t = e.channel_id;
                          if (null == t || ea(t)) return !1;
                          let n = w.default.getCurrentUser(),
                            i = y.Z.getGuild(e.guild_id),
                            o = M.Z.getChannel(e.channel_id),
                            a = w.default.getUser(e.host_id);
                          if (
                            null == n ||
                            null == o ||
                            null == i ||
                            null == a ||
                            !G.Z.can(l.$e(q.Plq.CONNECT, q.Plq.VIEW_CHANNEL), o)
                          )
                            return !1;
                          Y.Z.showNotification(
                            i.getIconURL(128),
                            K.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: i.name },
                            ),
                            K.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format(
                              {
                                topic: e.name,
                                username: V.ZP.getName(i.id, o.id, a),
                              },
                            ),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: i.id,
                              channel_id: o.id,
                            },
                            {
                              onClick() {
                                e.entity_type === X.WX.STAGE_INSTANCE &&
                                  (0, m.Cq)(o),
                                  e.entity_type === X.WX.VOICE &&
                                    _.default.selectVoiceChannel(o.id);
                              },
                            },
                          );
                        })(t)
                      : t.entity_type === X.WX.EXTERNAL &&
                        !(function (e) {
                          if (eo()) return !1;
                          let t = w.default.getCurrentUser(),
                            n = y.Z.getGuild(e.guild_id);
                          if (null == t || null == n) return !1;
                          Y.Z.showNotification(
                            n.getIconURL(128),
                            K.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: n.name },
                            ),
                            K.Z.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format(
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
                  if (eo()) return !1;
                  let l = M.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !q.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, H.FI)(n, l, !ee)
                  )
                    return !1;
                  let { author: o, user: a } = (0, I.MC)(n);
                  if (null == a) return !1;
                  let s = y.Z.getGuild(l.guild_id);
                  if (null == s) return !1;
                  let u =
                      K.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format(
                        { channelName: l.name, guildName: s.name },
                      ),
                    r =
                      K.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format(
                        {
                          channelName: n.name,
                          userUsername:
                            null !== (t = null == o ? void 0 : o.nick) &&
                            void 0 !== t
                              ? t
                              : null == a
                                ? void 0
                                : a.username,
                        },
                      ),
                    d = a.getAvatarURL(void 0, 128);
                  Y.Z.showNotification(
                    d,
                    u,
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
                  let t,
                    {
                      icon: n,
                      title: i,
                      body: l,
                      route: o,
                      trackingType: a,
                      tag: s,
                    } = e;
                  if (eo() || null == i || null == l || null == a) return !1;
                  if ("reactions_push_notification" === a) {
                    var u;
                    let { enableInAppNotifications: e } = h.Z.getCurrentConfig(
                      { location: "desktopNotification" },
                      { autoTrackExposure: !0 },
                    );
                    if (!e) return !1;
                    let n =
                      null !== (u = (0, N.Qj)(o)) && void 0 !== u
                        ? u
                        : { channelId: null, guildId: null };
                    if (
                      null == (t = n.channelId) ||
                      null == n.guildId ||
                      (F.Z.getCurrentlySelectedChannelId() === t && ee)
                    )
                      return !1;
                  }
                  let r = Y.Z.showNotification(
                    n,
                    i,
                    l,
                    { notif_type: a },
                    {
                      onClick() {
                        null != o &&
                          ((0, g.Z)(o), c.default.clickedNotification());
                      },
                      tag: s,
                    },
                  );
                  null != r && null != t && el.track(t, r);
                },
                WINDOW_HIDDEN: function () {
                  let e = (0, B.isWindows)(),
                    t = (0, B.isLinux)();
                  if (!(!a.K.get(j, !1) && B.isPlatformEmbedded && (e || t)))
                    return !1;
                  let i = !1;
                  return (
                    null != et && (i = ei.includes(et)),
                    !!i &&
                      (Y.Z.showNotification(
                        n(95045),
                        K.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                        K.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, O.uL)(q.Z5c.SETTINGS(e ? "windows" : "linux"));
                          },
                          onShown: () => {
                            a.K.set(j, !0);
                          },
                        },
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return a.K.remove(j), !1;
                },
                CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (et = t),
                    en.clear(),
                    n.forEach((e) =>
                      e.stage_instances.forEach((e) => en.add(e.id)),
                    );
                },
                MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (eo()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = M.Z.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: o } = (0, H.Xi)(i, n, n.author);
                  Y.Z.showNotification(
                    l,
                    K.Z.Messages.MESSAGE_REMINDER_DESKTOP_NOTIFICATION_TITLE,
                    o,
                    { notif_type: "MESSAGE_REMINDER_DUE" },
                    {
                      onClick() {
                        (0, g.Z)(
                          q.Z5c.CHANNEL(
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
          return F;
        },
        LL: function () {
          return L;
        },
        N_: function () {
          return U;
        },
        Xi: function () {
          return w;
        },
        eF: function () {
          return G;
        },
      }),
        n(789020),
        n(411104);
      var i = n(933557),
        l = n(710845),
        o = n(978003),
        a = n(41776),
        s = n(355298),
        u = n(957730),
        r = n(572804),
        d = n(901461);
      n(734934);
      var c = n(569471),
        _ = n(723170),
        E = n(695346),
        f = n(131704),
        I = n(433355),
        T = n(592125),
        N = n(430824),
        g = n(19780),
        A = n(699516),
        C = n(944486),
        S = n(914010),
        Z = n(885110),
        h = n(9156),
        O = n(594174),
        p = n(630388),
        m = n(5192),
        v = n(352736),
        D = n(51144),
        R = n(981631),
        M = n(124368),
        y = n(689938);
      function L(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
        let l = n.getGuildId();
        return (
          !(
            (null != l && a.Z.isLurking(l)) ||
            (!i.ignoreSameUser && t.id === e.id) ||
            A.Z.isBlocked(t.id) ||
            (!i.ignoreStatus && Z.Z.getStatus() === R.Skl.DND) ||
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
        if (null != e.flags && (0, p.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let o = T.Z.getChannel(t);
        e.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (o = T.Z.getChannel(null == o ? void 0 : o.parent_id));
        let a = O.default.getCurrentUser(),
          u = O.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        if (
          null == o ||
          null == a ||
          null == u ||
          (o.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
          !L(a, u, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
          }) ||
          s.Z.isMessageRequest(t)
        )
          return !1;
        if (!i) {
          let e = C.Z.getChannelId(S.Z.getGuildId());
          if (e === o.id || I.ZP.getCurrentSidebarChannelId(e) === o.id)
            return !1;
        }
        if (
          A.Z.isBlockedForMessage(e) ||
          (void 0 !== e.activity_instance &&
            null != e.interaction &&
            e.interaction.user.id === a.id)
        )
          return !1;
        if (f.Ec.has(o.type)) {
          if (c.Z.isMuted(o.id)) return !1;
          let t = (0, _.J)(o);
          return (
            t !== M.iN.NO_MESSAGES &&
            (t === M.iN.ALL_MESSAGES ||
              (0, r.Hl)({
                rawMessage: e,
                userId: a.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let t = !f.tx.has(o.type) || g.Z.getChannelId() === o.id;
          if (h.ZP.allowAllMessages(o) && t) return !0;
          let n = h.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = h.ZP.isSuppressRolesEnabled(o.getGuildId());
          return (0, r.Hl)({
            rawMessage: e,
            userId: a.id,
            suppressEveryone: n,
            suppressRoles: i,
          });
        }
      }
      function U(e, t) {
        var n;
        if (C.Z.getChannelId(S.Z.getGuildId()) !== t) return !1;
        let i = T.Z.getChannel(t);
        e.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (i = T.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = O.default.getCurrentUser(),
          o = O.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        return (
          !(
            null == i ||
            null == l ||
            null == o ||
            i.isManaged() ||
            o.hasFlag(R.xW$.SPAMMER) ||
            A.Z.isBlockedForMessage(e) ||
            o.id === l.id ||
            Z.Z.getStatus() === R.Skl.DND ||
            E.QZ.getSetting() ||
            h.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function F(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = O.default.getCurrentUser(),
          o = O.default.getUser(e.ownerId);
        return (
          !(
            null == t ||
            null == l ||
            null == o ||
            !L(l, o, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            h.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
          ) &&
          (!!n || C.Z.getChannelId(S.Z.getGuildId()) !== t.id) &&
          h.ZP.getNewForumThreadsCreated(t)
        );
      }
      let P = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, i.F6)(t, O.default, A.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, O.default, A.Z)) : "",
            ")",
          );
      function b(e, t, n, i) {
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
        let a;
        let s = m.ZP.getName(e.getGuildId(), e.id, n),
          r = s;
        switch (e.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
          case R.d4z.GUILD_VOICE:
          case R.d4z.ANNOUNCEMENT_THREAD:
          case R.d4z.PUBLIC_THREAD:
          case R.d4z.PRIVATE_THREAD:
            let c = T.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != c
              ? (r = P(r, c, T.Z.getChannel(c.parent_id)))
              : (0, d.Z)(t)
                ? null != N.Z.getGuild(e.getGuildId()) && (r = P(r, e, c))
                : (r = P(r, e, c));
            break;
          case R.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && r === (0, i.F6)(e, O.default, A.Z)) &&
              (r = ""
                .concat(r, " (")
                .concat((0, i.F6)(e, O.default, A.Z, !0), ")"));
        }
        let _ = t.content;
        if ((0, d.Z)(t) && null == (_ = v.Z.stringify(t, e)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t,
            ),
            Error("failed to stringify system message"))
          );
        let E = "sticker_items" in t ? t.sticker_items : t.stickers;
        if ("message_reference" in t ? (0, o.s)(t) : (0, o.Z)(t))
          a = y.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
        else if (null != t.activity && null != t.application)
          a =
            t.activity.type === R.mFx.JOIN
              ? b(
                  e,
                  y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  y.Z.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN,
                ).format({ user: s, game: t.application.name })
              : t.activity.type === R.mFx.JOIN_REQUEST
                ? b(
                    e,
                    y.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    y.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    y.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                  ).format({ user: s, game: t.application.name })
                : "";
        else if (null != t.activity && t.activity.type === R.mFx.LISTEN)
          a = b(
            e,
            y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN,
          ).format({ user: s });
        else if (null != E && E.length > 0)
          a = y.Z.Messages.STICKER_NOTIFICATION_BODY.format({
            stickerName: E[0].name,
          });
        else if (t.type === R.uaV.PREMIUM_REFERRAL)
          a = y.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
            username: D.ZP.getName(n),
          });
        else if (null != t.poll)
          a = y.Z.Messages.POLL_SENT_NOTIFICATION.format({
            question: t.poll.question.text,
          });
        else if (t.type === R.uaV.POLL_RESULT) {
          var f, I, g;
          let e =
              null === (g = t.embeds) || void 0 === g
                ? void 0
                : null === (I = g[0]) || void 0 === I
                  ? void 0
                  : null === (f = I.fields) || void 0 === f
                    ? void 0
                    : f.find(
                        (e) =>
                          ("name" in e ? e.name : e.rawName) ===
                          "poll_question_text",
                      ),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
          a = y.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
        } else
          a =
            0 !== _.length &&
            e.type === R.d4z.DM &&
            !n.bot &&
            _.startsWith("> -# *")
              ? (a = u.ZP.unparse(_, e.id, !0)).substring(0, 1) + a.substring(4)
              : u.ZP.unparse(_, e.id, !0);
        return (
          0 === a.length &&
            (a = (function (e) {
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
                (0, p.yE)(
                  null !== (t = e.flags) && void 0 !== t ? t : 0,
                  R.iLy.IS_VOICE_MESSAGE,
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
          { icon: n.getAvatarURL(e.guild_id, 128), title: r, body: a }
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
        o = n.n(l),
        a = n(525654),
        s = n.n(a),
        u = n(579806),
        r = n(292959),
        d = n(246946),
        c = n(626135),
        _ = n(358085),
        E = n(557177),
        f = n(998502),
        I = n(981631);
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
        A = !0;
      if (N && !g) {
        let [e, , t] = u.Z.os.release.split(".");
        A = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let C =
          (N && A) ||
          ("Chrome" === s().name && 47 > parseFloat(s().version)) ||
          ("Firefox" === s().name && 52 > parseFloat(s().version)),
        S = o().throttle(E.GN, 1e3, { leading: !0 });
      function Z() {
        f.ZP.flashFrame(!1);
      }
      N &&
        (window.addEventListener("focus", Z), f.ZP.on("MAIN_WINDOW_FOCUS", Z));
      let h = window.Notification;
      g &&
        (f.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        f.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              f.ZP.send("NOTIFICATION_CLOSE", this.id),
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
              f.ZP.send("NOTIFICATION_SHOW", {
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
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? S(e, t, void 0, n) : (0, E.GN)(e, t);
      }
      function m(e) {
        return (
          (d.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !O() ||
          (_.isPlatformEmbedded && !f.ZP.shouldDisplayNotifications())
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
          var a, s, u, d;
          let E;
          if (m(l)) {
            null != l.sound &&
              !1 !== l.playSoundIfDisabled &&
              p(
                l.sound,
                null !== (s = l.volume) && void 0 !== s ? s : 1,
                l.soundpack,
              );
            return;
          }
          null != l.sound &&
            p(
              l.sound,
              null !== (u = l.volume) && void 0 !== u ? u : 1,
              l.soundpack,
            );
          let T =
            null !== (d = null == l ? void 0 : l.tag) && void 0 !== d
              ? d
              : null;
          (0, _.isLinux)() && (n = o().escape(n));
          let g = { icon: e, body: n, tag: T, silent: !0 };
          N && r.Z.taskbarFlash && f.ZP.flashFrame(!0);
          try {
            E = new h(t, g);
          } catch (e) {
            return null;
          }
          return (null === (a = l.onShown) || void 0 === a || a.call(l),
          !l.omitViewTracking && c.default.track(I.rMx.NOTIFICATION_VIEWED, i),
          (E.onclick = () => {
            var e;
            _.isPlatformEmbedded ? f.ZP.focus() : (window.focus(), E.close()),
              !l.omitClickTracking &&
                c.default.track(I.rMx.NOTIFICATION_CLICKED, i),
              null === (e = l.onClick) || void 0 === e || e.call(l);
          }),
          C && setTimeout(() => E.close(), 5e3),
          A)
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
//# sourceMappingURL=636050cd452eae6d3f39.js.map
