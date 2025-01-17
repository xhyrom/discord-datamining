"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70205"],
  {
    95045: function (t) {
      t.exports = "/assets/b6ecdc8b623f50859f88.png";
    },
    11352: function (t, n, i) {
      i.d(n, {
        Y: function () {
          return e;
        },
      });
      let e = (0, i(818083).B)({
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
    671105: function (t, n, i) {
      i.d(n, {
        OR: function () {
          return a;
        },
        _c: function () {
          return r;
        },
        bb: function () {
          return s;
        },
        iD: function () {
          return u;
        },
      });
      var e = i(442837),
        l = i(581883),
        o = i(871465);
      function a(t) {
        return d(
          t,
          void 0,
          (0, e.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.settings.guilds) || void 0 === t
              ? void 0
              : t.guilds;
          }),
        );
      }
      function u(t) {
        var n, i;
        return d(
          t,
          void 0,
          null !==
            (i =
              null === (n = l.Z.settings.guilds) || void 0 === n
                ? void 0
                : n.guilds) && void 0 !== i
            ? i
            : {},
        );
      }
      function r(t, n) {
        let i = (0, e.e7)([l.Z], () => {
          var t;
          return null === (t = l.Z.settings.guilds) || void 0 === t
            ? void 0
            : t.guilds;
        });
        return null != n ? d(t, n, i) : void 0;
      }
      function s(t, n) {
        var i, e;
        let o =
          null !==
            (e =
              null === (i = l.Z.settings.guilds) || void 0 === i
                ? void 0
                : i.guilds) && void 0 !== e
            ? e
            : {};
        return null != n ? d(t, n, o) : void 0;
      }
      function d(t, n, i) {
        var e, l;
        if (null == i) return;
        let a =
            null != n
              ? null === (e = i[t]) || void 0 === e
                ? void 0
                : e.channels[n]
              : i[t],
          u = null == a ? void 0 : a.customNotificationSoundConfig;
        return null != u
          ? (function (t) {
              return null != t
                ? Object.values(o.YC).find((n) => n === t)
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
    106371: function (t, n, i) {
      var e = i(818083);
      let l = (0, e.B)({
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
      (0, e.B)({
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
        (n.Z = l);
    },
    974180: function (t, n, i) {
      i.d(n, {
        Ay: function () {
          return j;
        },
        yk: function () {
          return Q;
        },
      }),
        i(47120),
        i(653041);
      var e,
        l = i(149765),
        o = i(442837),
        a = i(433517),
        u = i(570140),
        r = i(493683),
        s = i(475179),
        d = i(749210),
        c = i(292556),
        f = i(287734),
        g = i(579806),
        _ = i(802098),
        N = i(933557),
        E = i(456269),
        I = i(15274),
        h = i(754688),
        v = i(336197),
        T = i(355298),
        p = i(601992),
        Z = i(11352),
        S = i(671105),
        C = i(106371),
        m = i(703656),
        A = i(359110),
        y = i(922482),
        O = i(427679),
        P = i(488131),
        R = i(695346),
        w = i(592125),
        D = i(430824),
        b = i(292959),
        k = i(496675),
        F = i(699516),
        U = i(944486),
        L = i(885110),
        G = i(246946),
        M = i(594174),
        V = i(979651),
        W = i(5192),
        H = i(150097),
        z = i(912101),
        q = i(358085),
        x = i(74538),
        Y = i(51144),
        B = i(981631),
        X = i(765305),
        K = i(388032);
      function J(t, n, i) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      let j = "message1",
        Q = 0.4,
        $ = (
          null === g.Z || void 0 === g.Z
            ? void 0
            : g.Z.features.supports("notifications")
        )
          ? 20
          : 1,
        tt = "discord_dismissed_notification_shown",
        tn = document.hasFocus(),
        ti = null,
        te = new Set(),
        tl = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        to = new (class {
          track(t, n) {
            let i = this._channels[t];
            for (
              null == i && ((i = []), (this._channels[t] = i)), i.push(n);
              i.length > $;

            ) {
              let t = i.shift();
              null != t && null != t.close && t.close();
            }
          }
          clearChannel(t) {
            let n = this._channels[t];
            null != n &&
              (delete this._channels[t], n.forEach((t) => t.close()));
          }
          constructor() {
            J(this, "_channels", {});
          }
        })();
      function ta() {
        return (
          !!(
            b.Z.getDesktopType() === B.qrD.NEVER ||
            L.Z.getStatus() === B.Skl.DND ||
            R.QZ.getSetting()
          ) || !1
        );
      }
      function tu(t) {
        return null != V.Z.getVoiceStateForChannel(t);
      }
      class tr extends (e = o.ZP.Store) {
        initialize() {
          this.waitFor(M.default, w.Z, b.Z, D.Z, O.Z, F.Z, k.Z, V.Z, T.Z);
        }
      }
      J(tr, "displayName", "NotificationStore"),
        new tr(
          u.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: n } = t;
                  n === B.$Ab.ENABLED &&
                    !q.isPlatformEmbedded &&
                    z.Z.showNotification(
                      i(185672),
                      K.intl.string(K.t.VSgOVl),
                      K.intl.string(K.t["1UJvqa"]),
                      { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                      {
                        omitViewTracking: !0,
                        sound: j,
                        volume: Q,
                        tag: "hello",
                        onClick: () => {
                          window.focus();
                        },
                      },
                    );
                },
                NOTIFICATION_CREATE: function (t) {
                  let {
                    icon: n,
                    title: i,
                    body: e,
                    trackingProps: l,
                    options: o,
                  } = t;
                  return !ta() && (z.Z.showNotification(n, i, e, l, o), !1);
                },
                WINDOW_FOCUS: function (t) {
                  if ((tn = t.focused)) {
                    let t = U.Z.getChannelId();
                    null != t && to.clearChannel(t);
                  }
                },
                MESSAGE_CREATE: function (t) {
                  var n, e, l, o;
                  let { channelId: a, message: r, optimistic: d } = t;
                  if (d) return !1;
                  let f = w.Z.getChannel(a),
                    g = M.default.getUser(
                      null === (n = r.author) || void 0 === n ? void 0 : n.id,
                    ),
                    N = M.default.getCurrentUser();
                  if (null == f || null == g) return !1;
                  let E = (0, H.eF)(r, a, !tn),
                    I =
                      b.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, H.N_)(r, a);
                  if (
                    (!E && !I) ||
                    (r.type === B.uaV.CHANGELOG &&
                      (null == r.changelog_id ||
                        _.Z.latestChangelogId() !== r.changelog_id))
                  )
                    return !1;
                  let h = !b.Z.isSoundDisabled(j),
                    v = x.ZP.canUseCustomNotificationSounds(N),
                    T = Z.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    C =
                      v && T && h
                        ? null !==
                            (o = (0, S.bb)(
                              null !== (l = f.guild_id) && void 0 !== l
                                ? l
                                : B.aIL,
                              a,
                            )) && void 0 !== o
                          ? o
                          : (0, S.iD)(f.guild_id)
                        : void 0;
                  if (
                    (I &&
                      (h && z.Z.playNotificationSound("message3", 0.4, C),
                      !tn)) ||
                    !E
                  )
                    return !1;
                  let m = i(808506).Z,
                    y = i(237997).Z;
                  if (
                    null != m.getFocusedPID() &&
                    y.getTextChatNotificationMode() === B.Ypu.ENABLED &&
                    !G.Z.disableNotifications
                  )
                    return !1;
                  let { icon: O, title: P, body: R } = (0, H.Xi)(f, r, g);
                  if (
                    (u.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: f.id,
                      message: r,
                      icon: O,
                      title: P,
                      body: R,
                    }),
                    (0, p.R)(r, f.guild_id),
                    b.Z.getDesktopType() === B.qrD.NEVER)
                  )
                    return h && z.Z.playNotificationSound(j, Q, C), !1;
                  z.Z.showNotification(
                    O,
                    P,
                    R,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (e = r.author) || void 0 === e ? void 0 : e.id,
                      message_id: r.id,
                      message_type: r.type,
                      channel_id: f.id,
                      channel_type: f.type,
                      guild_id: f.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: r.id,
                      sound: h ? j : void 0,
                      soundpack: C,
                      volume: Q,
                      onClick() {
                        (0, A.Kh)(f.id),
                          (f.type === B.d4z.GUILD_VOICE ||
                            f.type === B.d4z.GUILD_STAGE_VOICE) &&
                            s.Z.updateChatOpen(f.id, !0),
                          c.default.clickedNotification();
                      },
                    },
                  ).then((t) => {
                    null != t && to.track(f.id, t);
                  });
                },
                CHANNEL_SELECT: function (t) {
                  let { channelId: n } = t;
                  return null != n && to.clearChannel(n), !1;
                },
                MESSAGE_ACK: function (t) {
                  let { channelId: n } = t;
                  return to.clearChannel(n), !1;
                },
                ACTIVITY_START: function (t) {
                  let { userId: n, activity: i } = t;
                  if (ta()) return !1;
                  if (i.type === B.IIU.PLAYING) {
                    let t = M.default.getUser(n);
                    if (null == t) return !1;
                    let e = Y.ZP.getName(t),
                      l = i.name,
                      o = t.getAvatarURL(void 0, 128),
                      a = K.intl.string(K.t.XoTWsL),
                      u = K.intl.formatToPlainString(K.t.o4Aipq, {
                        username: e,
                        gameName: l,
                      });
                    return (
                      z.Z.showNotification(
                        o,
                        a,
                        u,
                        {
                          notif_type: "ACTIVITY_START",
                          activity_type: B.IIU.PLAYING,
                          notif_user_id: n,
                          activity_name: l,
                        },
                        {
                          sound: "message2",
                          playSoundIfDisabled: !1,
                          volume: 0.4,
                          onClick() {
                            r.Z.openPrivateChannel(n);
                          },
                        },
                      ),
                      !1
                    );
                  }
                  return !1;
                },
                VOICE_STATE_UPDATES: function (t) {
                  let { voiceStates: n } = t;
                  if (ta()) return;
                  let i = M.default.getCurrentUser();
                  if (null == i) return;
                  let e = n.find((t) => t.userId === i.id);
                  if (null == e) return;
                  let {
                    channelId: l,
                    guildId: o,
                    suppress: a,
                    requestToSpeakTimestamp: u,
                  } = e;
                  if (null == l || null == o || !(!a && null != u)) return;
                  let r = D.Z.getGuild(o),
                    s = w.Z.getChannel(l),
                    d = O.Z.getStageInstanceByChannel(l);
                  null != r &&
                    null != s &&
                    null != d &&
                    z.Z.showNotification(
                      r.getIconURL(128),
                      s.name,
                      K.intl.formatToPlainString(K.t.sqnsSE, {
                        channelName: (0, N.F6)(s, M.default, F.Z),
                        channelTopic: null == d ? void 0 : d.topic,
                      }),
                      { notif_type: "Stage Speak Invite" },
                      {},
                    );
                },
                STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: n } = t;
                  if (ta() || !n.send_start_notification || tu(n.channel_id))
                    return !1;
                  let i = M.default.getCurrentUser(),
                    e = D.Z.getGuild(n.guild_id),
                    o = w.Z.getChannel(n.channel_id),
                    a = M.default.getUser(n.host_id);
                  if (
                    null == i ||
                    null == o ||
                    null == e ||
                    null == a ||
                    !(0, H.LL)(i, a, o) ||
                    !k.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o) ||
                    te.has(n.id)
                  )
                    return !1;
                  te.add(n.id),
                    z.Z.showNotification(
                      e.getIconURL(128),
                      K.intl.formatToPlainString(K.t.bZ4OkZ, {
                        guildName: e.name,
                      }),
                      K.intl.formatToPlainString(K.t.qTelnJ, {
                        username: W.ZP.getName(e.id, o.id, a),
                        topic: n.topic,
                      }),
                      {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: e.id,
                        channel_id: o.id,
                      },
                      {
                        onClick() {
                          (0, y.Cq)(o);
                        },
                      },
                    );
                },
                STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: n } = t;
                  te.delete(n.id);
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: n } = t;
                  if (ta() || null == n.notification_type) return !1;
                  n.notification_type === X.sy.EVENT_START &&
                    (n.entity_type === X.WX.STAGE_INSTANCE ||
                    n.entity_type === X.WX.VOICE
                      ? !(function (t) {
                          if (ta()) return !1;
                          let n = t.channel_id;
                          if (null == n || tu(n)) return !1;
                          let i = M.default.getCurrentUser(),
                            e = D.Z.getGuild(t.guild_id),
                            o = w.Z.getChannel(t.channel_id),
                            a = M.default.getUser(t.host_id);
                          if (
                            null == i ||
                            null == o ||
                            null == e ||
                            null == a ||
                            !k.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o)
                          )
                            return !1;
                          z.Z.showNotification(
                            e.getIconURL(128),
                            K.intl.formatToPlainString(K.t.bOu6Wl, {
                              guildName: e.name,
                            }),
                            K.intl.formatToPlainString(K.t.GV9L8v, {
                              topic: t.name,
                              username: W.ZP.getName(e.id, o.id, a),
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: e.id,
                              channel_id: o.id,
                            },
                            {
                              onClick() {
                                t.entity_type === X.WX.STAGE_INSTANCE &&
                                  (0, y.Cq)(o),
                                  t.entity_type === X.WX.VOICE &&
                                    f.default.selectVoiceChannel(o.id);
                              },
                            },
                          );
                        })(n)
                      : n.entity_type === X.WX.EXTERNAL &&
                        !(function (t) {
                          if (ta()) return !1;
                          let n = M.default.getCurrentUser(),
                            i = D.Z.getGuild(t.guild_id);
                          if (null == n || null == i) return !1;
                          z.Z.showNotification(
                            i.getIconURL(128),
                            K.intl.formatToPlainString(K.t.bOu6Wl, {
                              guildName: i.name,
                            }),
                            K.intl.formatToPlainString(K.t.mYyaRE, {
                              topic: t.name,
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: i.id,
                            },
                            {
                              onClick() {
                                d.Z.transitionToGuildSync(t.guild_id),
                                  (0, I.bO)({ eventId: t.id });
                              },
                            },
                          );
                        })(n));
                },
                THREAD_CREATE: function (t) {
                  var n;
                  let { channel: i, isNewlyCreated: e } = t;
                  if (ta()) return !1;
                  let l = w.Z.getChannel(i.parent_id);
                  if (
                    null == l ||
                    !B.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !e ||
                    !(0, H.FI)(i, l, !tn)
                  )
                    return !1;
                  let { author: o, user: a } = (0, E.MC)(i);
                  if (null == a) return !1;
                  let u = D.Z.getGuild(l.guild_id);
                  if (null == u) return !1;
                  let r = K.intl.formatToPlainString(K.t["2IGVl5"], {
                      channelName: l.name,
                      guildName: u.name,
                    }),
                    s = K.intl.formatToPlainString(K.t.jPhTvb, {
                      channelName: i.name,
                      userUsername:
                        null !== (n = null == o ? void 0 : o.nick) &&
                        void 0 !== n
                          ? n
                          : null == a
                            ? void 0
                            : a.username,
                    }),
                    d = a.getAvatarURL(void 0, 128);
                  z.Z.showNotification(
                    d,
                    r,
                    s,
                    { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                    {
                      onClick() {
                        (0, P.ok)(i);
                      },
                    },
                  );
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let n,
                    {
                      icon: i,
                      title: e,
                      body: l,
                      route: o,
                      trackingType: a,
                      tag: u,
                    } = t;
                  if (ta() || null == e || null == l || null == a) return !1;
                  if ("reactions_push_notification" === a) {
                    var r;
                    let { enableInAppNotifications: t } = C.Z.getCurrentConfig(
                      { location: "desktopNotification" },
                      { autoTrackExposure: !0 },
                    );
                    if (!t) return !1;
                    let i =
                      null !== (r = (0, h.Qj)(o)) && void 0 !== r
                        ? r
                        : { channelId: null, guildId: null };
                    if (
                      null == (n = i.channelId) ||
                      null == i.guildId ||
                      (U.Z.getCurrentlySelectedChannelId() === n && tn)
                    )
                      return !1;
                  }
                  z.Z.showNotification(
                    i,
                    e,
                    l,
                    { notif_type: a },
                    {
                      onClick() {
                        null != o &&
                          ((0, v.Z)(o), c.default.clickedNotification());
                      },
                      tag: u,
                    },
                  ).then((t) => {
                    null != t && null != n && to.track(n, t);
                  });
                },
                WINDOW_HIDDEN: function () {
                  let t = (0, q.isWindows)(),
                    n = (0, q.isLinux)();
                  if (!(!a.K.get(tt, !1) && q.isPlatformEmbedded && (t || n)))
                    return !1;
                  let e = !1;
                  return (
                    null != ti && (e = tl.includes(ti)),
                    !!e &&
                      (z.Z.showNotification(
                        i(95045),
                        K.intl.string(K.t.VSgOVl),
                        K.intl.string(K.t["+J/F6+"]),
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, m.uL)(B.Z5c.SETTINGS(t ? "windows" : "linux"));
                          },
                          onShown: () => {
                            a.K.set(tt, !0);
                          },
                        },
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return a.K.remove(tt), !1;
                },
                CONNECTION_OPEN: function (t) {
                  let { countryCode: n, guilds: i } = t;
                  (ti = n),
                    te.clear(),
                    i.forEach((t) =>
                      t.stage_instances.forEach((t) => te.add(t.id)),
                    );
                },
                MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: n } = t;
                  if (ta()) return !1;
                  let i = n.message;
                  if (null == i || null == i.author) return !1;
                  let e = w.Z.getChannel(n.saveData.channelId);
                  if (null == e) return !1;
                  let { icon: l, body: o } = (0, H.Xi)(e, i, i.author);
                  z.Z.showNotification(
                    l,
                    K.intl.string(K.t.IjZJBw),
                    o,
                    { notif_type: "MESSAGE_REMINDER_DUE" },
                    {
                      onClick() {
                        (0, v.Z)(
                          B.Z5c.CHANNEL(
                            null == e ? void 0 : e.getGuildId(),
                            e.id,
                            i.id,
                          ),
                        );
                      },
                    },
                  );
                },
              },
        );
    },
    150097: function (t, n, i) {
      i.d(n, {
        FI: function () {
          return U;
        },
        LL: function () {
          return b;
        },
        N_: function () {
          return F;
        },
        Xi: function () {
          return M;
        },
        eF: function () {
          return k;
        },
      }),
        i(789020),
        i(411104);
      var e = i(933557),
        l = i(710845),
        o = i(978003),
        a = i(41776),
        u = i(355298),
        r = i(957730),
        s = i(850908),
        d = i(572804),
        c = i(901461);
      i(734934);
      var f = i(569471),
        g = i(723170),
        _ = i(695346),
        N = i(131704),
        E = i(433355),
        I = i(592125),
        h = i(430824),
        v = i(19780),
        T = i(699516),
        p = i(944486),
        Z = i(914010),
        S = i(885110),
        C = i(9156),
        m = i(594174),
        A = i(630388),
        y = i(5192),
        O = i(352736),
        P = i(51144),
        R = i(981631),
        w = i(124368),
        D = i(388032);
      function b(t, n, i) {
        let e =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (n.hasFlag(R.xW$.SPAMMER) || i.isManaged()) return !1;
        let l = i.getGuildId();
        return (
          !(
            (null != l && a.Z.isLurking(l)) ||
            (!e.ignoreSameUser && n.id === t.id) ||
            T.Z.isBlockedOrIgnored(n.id) ||
            (!e.ignoreStatus && S.Z.getStatus() === R.Skl.DND) ||
            _.QZ.getSetting() ||
            (!e.ignoreNoMessagesSetting && C.ZP.allowNoMessages(i))
          ) && !0
        );
      }
      function k(t, n) {
        var i;
        let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != t.flags && (0, A.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let o = I.Z.getChannel(n);
        t.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (o = I.Z.getChannel(null == o ? void 0 : o.parent_id));
        let a = m.default.getCurrentUser(),
          r = m.default.getUser(
            null === (i = t.author) || void 0 === i ? void 0 : i.id,
          );
        if (
          null == o ||
          null == a ||
          null == r ||
          (o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
          !b(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type),
          }) ||
          u.Z.isMessageRequest(n)
        )
          return !1;
        if (!e) {
          let t = p.Z.getChannelId(Z.Z.getGuildId());
          if (t === o.id || E.ZP.getCurrentSidebarChannelId(t) === o.id)
            return !1;
        }
        if (
          T.Z.isBlockedOrIgnoredForMessage(t) ||
          (void 0 !== t.activity_instance &&
            null != t.interaction &&
            t.interaction.user.id === a.id)
        )
          return !1;
        if (N.Ec.has(o.type)) {
          if (f.Z.isMuted(o.id)) return !1;
          let n = (0, g.J)(o);
          return (
            n !== w.iN.NO_MESSAGES &&
            (n === w.iN.ALL_MESSAGES ||
              (0, d.Hl)({
                rawMessage: t,
                userId: a.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let n = !N.tx.has(o.type) || v.Z.getChannelId() === o.id;
          if (C.ZP.allowAllMessages(o) && n) return !0;
          let i = C.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            e = C.ZP.isSuppressRolesEnabled(o.getGuildId());
          return (0, d.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: i,
            suppressRoles: e,
          });
        }
      }
      function F(t, n) {
        var i;
        if (p.Z.getChannelId(Z.Z.getGuildId()) !== n) return !1;
        let e = I.Z.getChannel(n);
        t.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (e = I.Z.getChannel(null == e ? void 0 : e.parent_id));
        let l = m.default.getCurrentUser(),
          o = m.default.getUser(
            null === (i = t.author) || void 0 === i ? void 0 : i.id,
          );
        return (
          !(
            null == e ||
            null == l ||
            null == o ||
            e.isManaged() ||
            o.hasFlag(R.xW$.SPAMMER) ||
            T.Z.isBlockedOrIgnoredForMessage(t) ||
            o.id === l.id ||
            S.Z.getStatus() === R.Skl.DND ||
            _.QZ.getSetting() ||
            C.ZP.allowNoMessages(e)
          ) && !0
        );
      }
      function U(t, n) {
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = m.default.getCurrentUser(),
          o = m.default.getUser(t.ownerId);
        return (
          !(
            null == n ||
            null == l ||
            null == o ||
            !b(l, o, n, { ignoreStatus: e, ignoreNoMessagesSetting: !0 }) ||
            C.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
          ) &&
          (!!i || p.Z.getChannelId(Z.Z.getGuildId()) !== n.id) &&
          C.ZP.getNewForumThreadsCreated(n)
        );
      }
      let L = (t, n, i) =>
        ""
          .concat(t, " (")
          .concat((0, e.F6)(n, m.default, T.Z, !0))
          .concat(
            null != i ? ", ".concat((0, e.F6)(i, m.default, T.Z)) : "",
            ")",
          );
      function G(t, n, i, e) {
        switch (t.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
            return n;
          case R.d4z.GROUP_DM:
            return i;
          case R.d4z.DM:
          default:
            return e;
        }
      }
      function M(t, n, i) {
        let a;
        let u = y.ZP.getName(t.getGuildId(), t.id, i),
          d = u;
        switch (t.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
          case R.d4z.GUILD_VOICE:
          case R.d4z.ANNOUNCEMENT_THREAD:
          case R.d4z.PUBLIC_THREAD:
          case R.d4z.PRIVATE_THREAD:
            let f = I.Z.getChannel(t.parent_id);
            n.type === R.uaV.THREAD_STARTER_MESSAGE && null != f
              ? (d = L(d, f, I.Z.getChannel(f.parent_id)))
              : (0, c.Z)(n)
                ? null != h.Z.getGuild(t.getGuildId()) && (d = L(d, t, f))
                : (d = L(d, t, f));
            break;
          case R.d4z.GROUP_DM:
            !(t.isManaged() && i.bot && d === (0, e.F6)(t, m.default, T.Z)) &&
              (d = ""
                .concat(d, " (")
                .concat((0, e.F6)(t, m.default, T.Z, !0), ")"));
        }
        let g = n.content;
        if ((0, c.Z)(n) && null == (g = O.Z.stringify(n, t)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              n,
            ),
            Error("failed to stringify system message"))
          );
        let _ =
          "sticker_items" in n
            ? n.sticker_items
            : "stickerItems" in n
              ? n.stickerItems
              : n.stickers;
        if ("message_reference" in n ? (0, o.s)(n) : (0, o.Z)(n))
          a = D.intl.string(D.t["9ddYKi"]);
        else if (null != n.activity && null != n.application)
          a =
            n.activity.type === R.mFx.JOIN
              ? D.intl.formatToPlainString(
                  G(t, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC),
                  { user: u, game: n.application.name },
                )
              : n.activity.type === R.mFx.JOIN_REQUEST
                ? D.intl.formatToPlainString(
                    G(t, D.t["/TD0lZ"], D.t["/TD0lZ"], D.t["/TD0lZ"]),
                    { user: u, game: n.application.name },
                  )
                : "";
        else if (null != n.activity && n.activity.type === R.mFx.LISTEN) {
          let n = G(t, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
          a = D.intl.formatToPlainString(n, { user: u });
        } else if (null != _ && _.length > 0)
          a = D.intl.formatToPlainString(D.t.zY4v1N, {
            stickerName: _[0].name,
          });
        else if (n.type === R.uaV.PREMIUM_REFERRAL)
          a = D.intl.formatToPlainString(D.t.lieTqa, {
            username: P.ZP.getName(i),
          });
        else if (null != n.poll)
          a = D.intl.formatToPlainString(D.t.ImizdH, {
            question: n.poll.question.text,
          });
        else if (n.type === R.uaV.POLL_RESULT) {
          var N, E, v;
          let t =
              null === (v = n.embeds) || void 0 === v
                ? void 0
                : null === (E = v[0]) || void 0 === E
                  ? void 0
                  : null === (N = E.fields) || void 0 === N
                    ? void 0
                    : N.find(
                        (t) =>
                          ("name" in t ? t.name : t.rawName) ===
                          "poll_question_text",
                      ),
            i = null != t ? ("value" in t ? t.value : t.rawValue) : "";
          a = D.intl.formatToPlainString(D.t["9WrecH"], { question: i });
        } else
          a =
            0 !== g.length &&
            t.type === R.d4z.DM &&
            !i.bot &&
            g.startsWith("> -# *")
              ? (a = r.ZP.unparse(g, t.id, !0)).substring(0, 1) + a.substring(4)
              : r.ZP.unparse(g, t.id, !0);
        return (
          0 === a.length &&
            (a = (function (t) {
              var n;
              if (void 0 !== t.embeds && t.embeds.length > 0) {
                let n = t.embeds[0],
                  i = "description" in n ? n.description : n.rawDescription,
                  e = "title" in n ? n.title : n.rawTitle;
                if (null != i)
                  return null != e ? "".concat(e, " ").concat(i) : i;
                if (null != e) return e;
                if (null != n.fields && n.fields.length > 0) {
                  let t = n.fields[0],
                    i = "name" in t ? t.name : t.rawName,
                    e = "value" in t ? t.value : t.rawValue;
                  return "".concat(i, " ").concat(e);
                }
              }
              if (
                (0, A.yE)(
                  null !== (n = t.flags) && void 0 !== n ? n : 0,
                  R.iLy.IS_VOICE_MESSAGE,
                )
              )
                return D.intl.string(D.t.slFYgo);
              if (void 0 !== t.attachments && t.attachments.length > 0) {
                let n = (0, s.Z)(t.attachments[0]);
                return D.intl.formatToPlainString(D.t["51OkwM"], {
                  filename: n,
                });
              }
              return "";
            })(n)),
          { icon: i.getAvatarURL(t.guild_id, 128), title: d, body: a }
        );
      }
    },
    912101: function (t, n, i) {
      let e;
      i(654769);
      (e = i(654769).Z), (n.Z = e);
    },
    654769: function (t, n, i) {
      let e;
      i(47120), i(177593), i(773603);
      var l,
        o = i(392711),
        a = i.n(o),
        u = i(525654),
        r = i.n(u),
        s = i(579806),
        d = i(933557),
        c = i(710845),
        f = i(474873),
        g = i(135906),
        _ = i(592125),
        N = i(292959),
        E = i(699516),
        I = i(246946),
        h = i(594174),
        v = i(626135),
        T = i(5192),
        p = i(358085),
        Z = i(557177),
        S = i(998502),
        C = i(981631);
      function m(t, n, i) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      let A = p.isPlatformEmbedded && (0, p.isWindows)(),
        y = A && 10 > parseFloat(s.Z.os.release),
        O = !0;
      if (A && !y) {
        let [t, , n] = s.Z.os.release.split(".");
        O = parseInt(t) > 10 || parseInt(n) >= 15063;
      }
      let P = new c.Z("NotificationUtils"),
        R =
          (A && O) ||
          ("Chrome" === r().name && 47 > parseFloat(r().version)) ||
          ("Firefox" === r().name && 52 > parseFloat(r().version));
      async function w() {
        if (void 0 === e) {
          if (
            null === s.Z || void 0 === s.Z
              ? void 0
              : s.Z.features.supports("notifications")
          )
            try {
              e = await S.ZP.invoke("NOTIFICATIONS_GET_SETTINGS");
            } catch (t) {
              P.warn(
                "Fetching native notification settings failed with error: ",
                t,
              ),
                (e = null);
            }
          else e = null;
        }
        return e;
      }
      async function D() {
        let t = await w();
        return (
          (null == t ? void 0 : t.authorizationStatus) === "authorized" &&
          (null == t ? void 0 : t.sound) === !0
        );
      }
      function b(t, n) {
        var i;
        return null !== (i = (0, g.Z)(null != n ? n : f.Z.getSoundpack())[t]) &&
          void 0 !== i
          ? i
          : t;
      }
      async function k(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 ? arguments[2] : void 0;
        if (await D())
          try {
            await S.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
              sound: b(t, i),
            });
            return;
          } catch (t) {
            P.warn("Native notification sound failed with error: ", t);
          }
        (0, Z.GN)(t, n, void 0, i);
      }
      let F = a().throttle(k, 1e3, { leading: !0 });
      function U() {
        S.ZP.flashFrame(!1);
      }
      A &&
        (window.addEventListener("focus", U), S.ZP.on("MAIN_WINDOW_FOCUS", U));
      let L = window.Notification;
      y &&
        (S.ZP.on("NOTIFICATION_CLICK", (t, n) => {
          let i = null[n];
          null != i && (i.onclick(), i.close());
        }),
        S.ZP.send("NOTIFICATIONS_CLEAR"),
        (l = class {
          static requestPermission(t) {
            t();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              S.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(t, { body: n, icon: i }) {
            m(this, "id", L._id++),
              m(this, "title", void 0),
              m(this, "body", void 0),
              m(this, "icon", void 0),
              m(this, "onshow", function () {}),
              m(this, "onclick", function () {}),
              m(this, "onclose", function () {}),
              (this.title = t),
              (this.body = n),
              (this.icon = i),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              S.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        m(l, "permission", "granted"),
        m(l, "_id", 0),
        (L = l));
      let G = {};
      if (
        null === s.Z || void 0 === s.Z
          ? void 0
          : s.Z.features.supports("notifications")
      )
        try {
          S.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (t, n, i) => {
            if ("dismiss" === n) delete G[i];
            else {
              var e, l, o;
              let t = G[i];
              !(null == t
                ? void 0
                : null === (e = t.options) || void 0 === e
                  ? void 0
                  : e.omitClickTracking) &&
                v.default.track(
                  C.rMx.NOTIFICATION_CLICKED,
                  null == t ? void 0 : t.trackingProps,
                ),
                null == t ||
                  null === (o = t.options) ||
                  void 0 === o ||
                  null === (l = o.onClick) ||
                  void 0 === l ||
                  l.call(o);
            }
          }),
            S.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
        } catch (t) {
          P.warn("Native notification setup failed with error: ", t);
        }
      async function M() {
        if (
          null === s.Z || void 0 === s.Z
            ? void 0
            : s.Z.features.supports("notifications")
        ) {
          var t;
          return (
            (null === (t = await w()) || void 0 === t
              ? void 0
              : t.authorizationStatus) === "authorized"
          );
        }
        return null != L && "granted" === L.permission;
      }
      function V(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i = arguments.length > 2 ? arguments[2] : void 0;
        t.includes("message") ? F(t, n, i) : k(t, n, i);
      }
      async function W(t) {
        return (
          (I.Z.disableNotifications && null == t.overrideStreamerMode) ||
          !(await M()) ||
          (p.isPlatformEmbedded && !S.ZP.shouldDisplayNotifications())
        );
      }
      async function H(t, n, i, e, l) {
        var o, u, r, s;
        let c;
        if (await W(l)) {
          null != l.sound &&
            !1 !== l.playSoundIfDisabled &&
            V(
              l.sound,
              null !== (o = l.volume) && void 0 !== o ? o : 1,
              l.soundpack,
            );
          return;
        }
        let f =
          null !== (u = null == l ? void 0 : l.tag) && void 0 !== u ? u : null;
        (0, p.isLinux)() && (i = a().escape(i));
        let g = await w(),
          I = (null == g ? void 0 : g.authorizationStatus) === "authorized",
          Z = I && (null == g ? void 0 : g.sound) === !0,
          m = (t) => {
            var n;
            null === (n = l.onShown) || void 0 === n || n.call(l),
              !l.omitViewTracking &&
                v.default.track(C.rMx.NOTIFICATION_VIEWED, e),
              R && setTimeout(() => t.close(), 5e3);
          };
        if (
          (null != l.sound &&
            !Z &&
            V(
              l.sound,
              null !== (r = l.volume) && void 0 !== r ? r : 1,
              l.soundpack,
            ),
          I)
        ) {
          let o = { title: n, body: i };
          null != t && (o.icon = t),
            (null == l ? void 0 : l.sound) != null &&
              (o.sound = b(l.sound, l.soundpack)),
            (null == l ? void 0 : l.tag) != null && (o.identifier = l.tag);
          let a =
              "string" == typeof (null == e ? void 0 : e.guild_id)
                ? e.guild_id
                : null,
            u =
              "string" == typeof (null == e ? void 0 : e.channel_id)
                ? e.channel_id
                : null,
            r =
              "string" == typeof (null == e ? void 0 : e.notif_user_id)
                ? e.notif_user_id
                : null;
          if (null != u) {
            o.threadIdentifier = u;
            let t = _.Z.getChannel(u);
            null != t && (o.groupName = (0, d.F6)(t, h.default, E.Z));
          }
          null != r &&
            ((o.senderIdentifier = r),
            null != a &&
              (o.senderDisplayName = T.ZP.getName(a, u, h.default.getUser(r))));
          try {
            let t = await S.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", o);
            G[t] = { options: l, trackingProps: e };
            let n = {
              close() {
                try {
                  S.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [t]);
                } catch (t) {
                  P.warn("Native notification removal failed with error: ", t);
                }
              },
            };
            return m(n), n;
          } catch (t) {
            P.warn("Native notification failed with error: ", t);
          }
        }
        null != l.sound &&
          I &&
          V(
            l.sound,
            null !== (s = l.volume) && void 0 !== s ? s : 1,
            l.soundpack,
          );
        let y = { icon: t, body: i, tag: f, silent: !0 };
        A && N.Z.taskbarFlash && S.ZP.flashFrame(!0);
        try {
          c = new L(n, y);
        } catch (t) {
          return null;
        }
        return (m(c),
        (c.onclick = () => {
          var t;
          p.isPlatformEmbedded ? S.ZP.focus() : (window.focus(), c.close()),
            !l.omitClickTracking &&
              v.default.track(C.rMx.NOTIFICATION_CLICKED, e),
            null === (t = l.onClick) || void 0 === t || t.call(l);
        }),
        O)
          ? c
          : {
              close() {
                var t;
                null == c ||
                  null === (t = c.onclose) ||
                  void 0 === t ||
                  t.call(c);
              },
            };
      }
      n.Z = {
        hasPermission: M,
        requestPermission: function (t) {
          if (
            null === s.Z || void 0 === s.Z
              ? void 0
              : s.Z.features.supports("notifications")
          )
            try {
              S.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((n) => {
                  t(n);
                })
                .catch(() => {
                  t(!1);
                })
                .finally(() => {
                  e = void 0;
                });
              return;
            } catch (t) {
              P.warn(
                "Native notification authorization failed with error: ",
                t,
              );
            }
          null != L &&
            L.requestPermission(async () => {
              null != t && t(await M());
            });
        },
        showNotification: H,
        disabled: W,
        playNotificationSound: k,
      };
    },
  },
]);
//# sourceMappingURL=a9395f7d280fd43bc5db.js.map
