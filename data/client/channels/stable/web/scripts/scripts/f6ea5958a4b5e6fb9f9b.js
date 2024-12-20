"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70205"],
  {
    95045: function (t) {
      t.exports = "/assets/b6ecdc8b623f50859f88.png";
    },
    11352: function (t, e, n) {
      n.d(e, {
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
    671105: function (t, e, n) {
      n.d(e, {
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
      var i = n(442837),
        l = n(581883),
        o = n(871465);
      function a(t) {
        return d(
          t,
          void 0,
          (0, i.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.settings.guilds) || void 0 === t
              ? void 0
              : t.guilds;
          }),
        );
      }
      function u(t) {
        var e, n;
        return d(
          t,
          void 0,
          null !==
            (n =
              null === (e = l.Z.settings.guilds) || void 0 === e
                ? void 0
                : e.guilds) && void 0 !== n
            ? n
            : {},
        );
      }
      function r(t, e) {
        let n = (0, i.e7)([l.Z], () => {
          var t;
          return null === (t = l.Z.settings.guilds) || void 0 === t
            ? void 0
            : t.guilds;
        });
        return null != e ? d(t, e, n) : void 0;
      }
      function s(t, e) {
        var n, i;
        let o =
          null !==
            (i =
              null === (n = l.Z.settings.guilds) || void 0 === n
                ? void 0
                : n.guilds) && void 0 !== i
            ? i
            : {};
        return null != e ? d(t, e, o) : void 0;
      }
      function d(t, e, n) {
        var i, l;
        if (null == n) return;
        let a =
            null != e
              ? null === (i = n[t]) || void 0 === i
                ? void 0
                : i.channels[e]
              : n[t],
          u = null == a ? void 0 : a.customNotificationSoundConfig;
        return null != u
          ? (function (t) {
              return null != t
                ? Object.values(o.YC).find((e) => e === t)
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
    106371: function (t, e, n) {
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
        (e.Z = l);
    },
    974180: function (t, e, n) {
      n.d(e, {
        Ay: function () {
          return j;
        },
        yk: function () {
          return Q;
        },
      }),
        n(47120),
        n(653041);
      var i,
        l = n(149765),
        o = n(442837),
        a = n(433517),
        u = n(570140),
        r = n(493683),
        s = n(475179),
        d = n(749210),
        c = n(292556),
        f = n(287734),
        g = n(802098),
        E = n(933557),
        _ = n(456269),
        N = n(15274),
        I = n(754688),
        h = n(336197),
        p = n(355298),
        T = n(601992),
        S = n(11352),
        C = n(671105),
        m = n(106371),
        Z = n(703656),
        v = n(359110),
        A = n(922482),
        y = n(427679),
        P = n(488131),
        R = n(695346),
        b = n(592125),
        O = n(430824),
        D = n(292959),
        U = n(496675),
        G = n(699516),
        L = n(944486),
        k = n(885110),
        w = n(246946),
        M = n(594174),
        F = n(979651),
        V = n(5192),
        W = n(150097),
        H = n(912101),
        q = n(358085),
        x = n(74538),
        z = n(557177),
        Y = n(51144),
        B = n(981631),
        X = n(765305),
        J = n(388032);
      function K(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let j = "message1",
        Q = 0.4,
        $ = "discord_dismissed_notification_shown",
        tt = document.hasFocus(),
        te = null,
        tn = new Set(),
        ti = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        tl = new (class {
          track(t, e) {
            let n = this._channels[t];
            for (
              null == n && ((n = []), (this._channels[t] = n)), n.push(e);
              n.length > 1;

            ) {
              let t = n.shift();
              null != t && null != t.close && t.close();
            }
          }
          clearChannel(t) {
            let e = this._channels[t];
            null != e &&
              (delete this._channels[t], e.forEach((t) => t.close()));
          }
          constructor() {
            K(this, "_channels", {});
          }
        })();
      function to() {
        return (
          !!(
            D.Z.getDesktopType() === B.qrD.NEVER ||
            k.Z.getStatus() === B.Skl.DND ||
            R.QZ.getSetting()
          ) || !1
        );
      }
      function ta(t) {
        return null != F.Z.getVoiceStateForChannel(t);
      }
      class tu extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(M.default, b.Z, D.Z, O.Z, y.Z, G.Z, U.Z, F.Z, p.Z);
        }
      }
      K(tu, "displayName", "NotificationStore"),
        new tu(
          u.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e === B.$Ab.ENABLED &&
                    !q.isPlatformEmbedded &&
                    H.Z.showNotification(
                      n(185672),
                      J.intl.string(J.t.VSgOVl),
                      J.intl.string(J.t["1UJvqa"]),
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
                    icon: e,
                    title: n,
                    body: i,
                    trackingProps: l,
                    options: o,
                  } = t;
                  return !to() && (H.Z.showNotification(e, n, i, l, o), !1);
                },
                WINDOW_FOCUS: function (t) {
                  if ((tt = t.focused)) {
                    let t = L.Z.getChannelId();
                    null != t && tl.clearChannel(t);
                  }
                },
                MESSAGE_CREATE: function (t) {
                  var e, i, l, o;
                  let { channelId: a, message: r, optimistic: d } = t;
                  if (d) return !1;
                  let f = b.Z.getChannel(a),
                    E = M.default.getUser(
                      null === (e = r.author) || void 0 === e ? void 0 : e.id,
                    ),
                    _ = M.default.getCurrentUser();
                  if (null == f || null == E) return !1;
                  let N = (0, W.eF)(r, a, !tt),
                    I =
                      D.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, W.N_)(r, a);
                  if (
                    (!N && !I) ||
                    (r.type === B.uaV.CHANGELOG &&
                      (null == r.changelog_id ||
                        g.Z.latestChangelogId() !== r.changelog_id))
                  )
                    return !1;
                  let h = !D.Z.isSoundDisabled(j),
                    p = x.ZP.canUseCustomNotificationSounds(_),
                    m = S.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    Z =
                      p && m && h
                        ? null !==
                            (o = (0, C.bb)(
                              null !== (l = f.guild_id) && void 0 !== l
                                ? l
                                : B.aIL,
                              a,
                            )) && void 0 !== o
                          ? o
                          : (0, C.iD)(f.guild_id)
                        : void 0;
                  if ((I && (h && z.GN("message3", 0.4, void 0, Z), !tt)) || !N)
                    return !1;
                  let A = n(808506).Z,
                    y = n(237997).Z;
                  if (
                    null != A.getFocusedPID() &&
                    y.getTextChatNotificationMode() === B.Ypu.ENABLED &&
                    !w.Z.disableNotifications
                  )
                    return !1;
                  let { icon: P, title: R, body: O } = (0, W.Xi)(f, r, E);
                  if (
                    (u.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: f.id,
                      message: r,
                      icon: P,
                      title: R,
                      body: O,
                    }),
                    (0, T.R)(r, f.guild_id),
                    D.Z.getDesktopType() === B.qrD.NEVER)
                  )
                    return h && z.GN(j, Q, void 0, Z), !1;
                  let U = H.Z.showNotification(
                    P,
                    R,
                    O,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (i = r.author) || void 0 === i ? void 0 : i.id,
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
                      soundpack: Z,
                      volume: Q,
                      onClick() {
                        (0, v.Kh)(f.id),
                          (f.type === B.d4z.GUILD_VOICE ||
                            f.type === B.d4z.GUILD_STAGE_VOICE) &&
                            s.Z.updateChatOpen(f.id, !0),
                          c.default.clickedNotification();
                      },
                    },
                  );
                  null != U && tl.track(f.id, U);
                },
                CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && tl.clearChannel(e), !1;
                },
                MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return tl.clearChannel(e), !1;
                },
                ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (to()) return !1;
                  if (n.type === B.IIU.PLAYING) {
                    let t = M.default.getUser(e);
                    if (null == t) return !1;
                    let i = Y.ZP.getName(t),
                      l = n.name,
                      o = t.getAvatarURL(void 0, 128),
                      a = J.intl.string(J.t.XoTWsL),
                      u = J.intl.formatToPlainString(J.t.o4Aipq, {
                        username: i,
                        gameName: l,
                      });
                    return (
                      H.Z.showNotification(
                        o,
                        a,
                        u,
                        {
                          notif_type: "ACTIVITY_START",
                          activity_type: B.IIU.PLAYING,
                          notif_user_id: e,
                          activity_name: l,
                        },
                        {
                          sound: "message2",
                          playSoundIfDisabled: !1,
                          volume: 0.4,
                          onClick() {
                            r.Z.openPrivateChannel(e);
                          },
                        },
                      ),
                      !1
                    );
                  }
                  return !1;
                },
                VOICE_STATE_UPDATES: function (t) {
                  let { voiceStates: e } = t;
                  if (to()) return;
                  let n = M.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let {
                    channelId: l,
                    guildId: o,
                    suppress: a,
                    requestToSpeakTimestamp: u,
                  } = i;
                  if (null == l || null == o || !(!a && null != u)) return;
                  let r = O.Z.getGuild(o),
                    s = b.Z.getChannel(l),
                    d = y.Z.getStageInstanceByChannel(l);
                  null != r &&
                    null != s &&
                    null != d &&
                    H.Z.showNotification(
                      r.getIconURL(128),
                      s.name,
                      J.intl.formatToPlainString(J.t.sqnsSE, {
                        channelName: (0, E.F6)(s, M.default, G.Z),
                        channelTopic: null == d ? void 0 : d.topic,
                      }),
                      { notif_type: "Stage Speak Invite" },
                      {},
                    );
                },
                STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (to() || !e.send_start_notification || ta(e.channel_id))
                    return !1;
                  let n = M.default.getCurrentUser(),
                    i = O.Z.getGuild(e.guild_id),
                    o = b.Z.getChannel(e.channel_id),
                    a = M.default.getUser(e.host_id);
                  if (
                    null == n ||
                    null == o ||
                    null == i ||
                    null == a ||
                    !(0, W.LL)(n, a, o) ||
                    !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o) ||
                    tn.has(e.id)
                  )
                    return !1;
                  tn.add(e.id),
                    H.Z.showNotification(
                      i.getIconURL(128),
                      J.intl.formatToPlainString(J.t.bZ4OkZ, {
                        guildName: i.name,
                      }),
                      J.intl.formatToPlainString(J.t.qTelnJ, {
                        username: V.ZP.getName(i.id, o.id, a),
                        topic: e.topic,
                      }),
                      {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: i.id,
                        channel_id: o.id,
                      },
                      {
                        onClick() {
                          (0, A.Cq)(o);
                        },
                      },
                    );
                },
                STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tn.delete(e.id);
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (to() || null == e.notification_type) return !1;
                  e.notification_type === X.sy.EVENT_START &&
                    (e.entity_type === X.WX.STAGE_INSTANCE ||
                    e.entity_type === X.WX.VOICE
                      ? !(function (t) {
                          if (to()) return !1;
                          let e = t.channel_id;
                          if (null == e || ta(e)) return !1;
                          let n = M.default.getCurrentUser(),
                            i = O.Z.getGuild(t.guild_id),
                            o = b.Z.getChannel(t.channel_id),
                            a = M.default.getUser(t.host_id);
                          if (
                            null == n ||
                            null == o ||
                            null == i ||
                            null == a ||
                            !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o)
                          )
                            return !1;
                          H.Z.showNotification(
                            i.getIconURL(128),
                            J.intl.formatToPlainString(J.t.bOu6Wl, {
                              guildName: i.name,
                            }),
                            J.intl.formatToPlainString(J.t.GV9L8v, {
                              topic: t.name,
                              username: V.ZP.getName(i.id, o.id, a),
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: i.id,
                              channel_id: o.id,
                            },
                            {
                              onClick() {
                                t.entity_type === X.WX.STAGE_INSTANCE &&
                                  (0, A.Cq)(o),
                                  t.entity_type === X.WX.VOICE &&
                                    f.default.selectVoiceChannel(o.id);
                              },
                            },
                          );
                        })(e)
                      : e.entity_type === X.WX.EXTERNAL &&
                        !(function (t) {
                          if (to()) return !1;
                          let e = M.default.getCurrentUser(),
                            n = O.Z.getGuild(t.guild_id);
                          if (null == e || null == n) return !1;
                          H.Z.showNotification(
                            n.getIconURL(128),
                            J.intl.formatToPlainString(J.t.bOu6Wl, {
                              guildName: n.name,
                            }),
                            J.intl.formatToPlainString(J.t.mYyaRE, {
                              topic: t.name,
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: n.id,
                            },
                            {
                              onClick() {
                                d.Z.transitionToGuildSync(t.guild_id),
                                  (0, N.bO)({ eventId: t.id });
                              },
                            },
                          );
                        })(e));
                },
                THREAD_CREATE: function (t) {
                  var e;
                  let { channel: n, isNewlyCreated: i } = t;
                  if (to()) return !1;
                  let l = b.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !B.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, W.FI)(n, l, !tt)
                  )
                    return !1;
                  let { author: o, user: a } = (0, _.MC)(n);
                  if (null == a) return !1;
                  let u = O.Z.getGuild(l.guild_id);
                  if (null == u) return !1;
                  let r = J.intl.formatToPlainString(J.t["2IGVl5"], {
                      channelName: l.name,
                      guildName: u.name,
                    }),
                    s = J.intl.formatToPlainString(J.t.jPhTvb, {
                      channelName: n.name,
                      userUsername:
                        null !== (e = null == o ? void 0 : o.nick) &&
                        void 0 !== e
                          ? e
                          : null == a
                            ? void 0
                            : a.username,
                    }),
                    d = a.getAvatarURL(void 0, 128);
                  H.Z.showNotification(
                    d,
                    r,
                    s,
                    { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                    {
                      onClick() {
                        (0, P.ok)(n);
                      },
                    },
                  );
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let e,
                    {
                      icon: n,
                      title: i,
                      body: l,
                      route: o,
                      trackingType: a,
                      tag: u,
                    } = t;
                  if (to() || null == i || null == l || null == a) return !1;
                  if ("reactions_push_notification" === a) {
                    var r;
                    let { enableInAppNotifications: t } = m.Z.getCurrentConfig(
                      { location: "desktopNotification" },
                      { autoTrackExposure: !0 },
                    );
                    if (!t) return !1;
                    let n =
                      null !== (r = (0, I.Qj)(o)) && void 0 !== r
                        ? r
                        : { channelId: null, guildId: null };
                    if (
                      null == (e = n.channelId) ||
                      null == n.guildId ||
                      (L.Z.getCurrentlySelectedChannelId() === e && tt)
                    )
                      return !1;
                  }
                  let s = H.Z.showNotification(
                    n,
                    i,
                    l,
                    { notif_type: a },
                    {
                      onClick() {
                        null != o &&
                          ((0, h.Z)(o), c.default.clickedNotification());
                      },
                      tag: u,
                    },
                  );
                  null != s && null != e && tl.track(e, s);
                },
                WINDOW_HIDDEN: function () {
                  let t = (0, q.isWindows)(),
                    e = (0, q.isLinux)();
                  if (!(!a.K.get($, !1) && q.isPlatformEmbedded && (t || e)))
                    return !1;
                  let i = !1;
                  return (
                    null != te && (i = ti.includes(te)),
                    !!i &&
                      (H.Z.showNotification(
                        n(95045),
                        J.intl.string(J.t.VSgOVl),
                        J.intl.string(J.t["+J/F6+"]),
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, Z.uL)(B.Z5c.SETTINGS(t ? "windows" : "linux"));
                          },
                          onShown: () => {
                            a.K.set($, !0);
                          },
                        },
                      ),
                      !1)
                  );
                },
                LOGOUT: function () {
                  return a.K.remove($), !1;
                },
                CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  (te = e),
                    tn.clear(),
                    n.forEach((t) =>
                      t.stage_instances.forEach((t) => tn.add(t.id)),
                    );
                },
                MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (to()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = b.Z.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: o } = (0, W.Xi)(i, n, n.author);
                  H.Z.showNotification(
                    l,
                    J.intl.string(J.t.IjZJBw),
                    o,
                    { notif_type: "MESSAGE_REMINDER_DUE" },
                    {
                      onClick() {
                        (0, h.Z)(
                          B.Z5c.CHANNEL(
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
    150097: function (t, e, n) {
      n.d(e, {
        FI: function () {
          return k;
        },
        LL: function () {
          return U;
        },
        N_: function () {
          return L;
        },
        Xi: function () {
          return F;
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
        u = n(355298),
        r = n(957730),
        s = n(850908),
        d = n(572804),
        c = n(901461);
      n(734934);
      var f = n(569471),
        g = n(723170),
        E = n(695346),
        _ = n(131704),
        N = n(433355),
        I = n(592125),
        h = n(430824),
        p = n(19780),
        T = n(699516),
        S = n(944486),
        C = n(914010),
        m = n(885110),
        Z = n(9156),
        v = n(594174),
        A = n(630388),
        y = n(5192),
        P = n(352736),
        R = n(51144),
        b = n(981631),
        O = n(124368),
        D = n(388032);
      function U(t, e, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.hasFlag(b.xW$.SPAMMER) || n.isManaged()) return !1;
        let l = n.getGuildId();
        return (
          !(
            (null != l && a.Z.isLurking(l)) ||
            (!i.ignoreSameUser && e.id === t.id) ||
            T.Z.isBlockedOrIgnored(e.id) ||
            (!i.ignoreStatus && m.Z.getStatus() === b.Skl.DND) ||
            E.QZ.getSetting() ||
            (!i.ignoreNoMessagesSetting && Z.ZP.allowNoMessages(n))
          ) && !0
        );
      }
      function G(t, e) {
        var n;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != t.flags && (0, A.yE)(t.flags, b.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let o = I.Z.getChannel(e);
        t.type === b.uaV.THREAD_STARTER_MESSAGE &&
          (o = I.Z.getChannel(null == o ? void 0 : o.parent_id));
        let a = v.default.getCurrentUser(),
          r = v.default.getUser(
            null === (n = t.author) || void 0 === n ? void 0 : n.id,
          );
        if (
          null == o ||
          null == a ||
          null == r ||
          (o.type === b.d4z.GROUP_DM && t.type === b.uaV.RECIPIENT_REMOVE) ||
          !U(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: b.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type),
          }) ||
          u.Z.isMessageRequest(e)
        )
          return !1;
        if (!i) {
          let t = S.Z.getChannelId(C.Z.getGuildId());
          if (t === o.id || N.ZP.getCurrentSidebarChannelId(t) === o.id)
            return !1;
        }
        if (
          T.Z.isBlockedOrIgnoredForMessage(t) ||
          (void 0 !== t.activity_instance &&
            null != t.interaction &&
            t.interaction.user.id === a.id)
        )
          return !1;
        if (_.Ec.has(o.type)) {
          if (f.Z.isMuted(o.id)) return !1;
          let e = (0, g.J)(o);
          return (
            e !== O.iN.NO_MESSAGES &&
            (e === O.iN.ALL_MESSAGES ||
              (0, d.Hl)({
                rawMessage: t,
                userId: a.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let e = !_.tx.has(o.type) || p.Z.getChannelId() === o.id;
          if (Z.ZP.allowAllMessages(o) && e) return !0;
          let n = Z.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = Z.ZP.isSuppressRolesEnabled(o.getGuildId());
          return (0, d.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: n,
            suppressRoles: i,
          });
        }
      }
      function L(t, e) {
        var n;
        if (S.Z.getChannelId(C.Z.getGuildId()) !== e) return !1;
        let i = I.Z.getChannel(e);
        t.type === b.uaV.THREAD_STARTER_MESSAGE &&
          (i = I.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = v.default.getCurrentUser(),
          o = v.default.getUser(
            null === (n = t.author) || void 0 === n ? void 0 : n.id,
          );
        return (
          !(
            null == i ||
            null == l ||
            null == o ||
            i.isManaged() ||
            o.hasFlag(b.xW$.SPAMMER) ||
            T.Z.isBlockedOrIgnoredForMessage(t) ||
            o.id === l.id ||
            m.Z.getStatus() === b.Skl.DND ||
            E.QZ.getSetting() ||
            Z.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function k(t, e) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = v.default.getCurrentUser(),
          o = v.default.getUser(t.ownerId);
        return (
          !(
            null == e ||
            null == l ||
            null == o ||
            !U(l, o, e, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            Z.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
          ) &&
          (!!n || S.Z.getChannelId(C.Z.getGuildId()) !== e.id) &&
          Z.ZP.getNewForumThreadsCreated(e)
        );
      }
      let w = (t, e, n) =>
        ""
          .concat(t, " (")
          .concat((0, i.F6)(e, v.default, T.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, v.default, T.Z)) : "",
            ")",
          );
      function M(t, e, n, i) {
        switch (t.type) {
          case b.d4z.GUILD_ANNOUNCEMENT:
          case b.d4z.GUILD_TEXT:
            return e;
          case b.d4z.GROUP_DM:
            return n;
          case b.d4z.DM:
          default:
            return i;
        }
      }
      function F(t, e, n) {
        let a;
        let u = y.ZP.getName(t.getGuildId(), t.id, n),
          d = u;
        switch (t.type) {
          case b.d4z.GUILD_ANNOUNCEMENT:
          case b.d4z.GUILD_TEXT:
          case b.d4z.GUILD_VOICE:
          case b.d4z.ANNOUNCEMENT_THREAD:
          case b.d4z.PUBLIC_THREAD:
          case b.d4z.PRIVATE_THREAD:
            let f = I.Z.getChannel(t.parent_id);
            e.type === b.uaV.THREAD_STARTER_MESSAGE && null != f
              ? (d = w(d, f, I.Z.getChannel(f.parent_id)))
              : (0, c.Z)(e)
                ? null != h.Z.getGuild(t.getGuildId()) && (d = w(d, t, f))
                : (d = w(d, t, f));
            break;
          case b.d4z.GROUP_DM:
            !(t.isManaged() && n.bot && d === (0, i.F6)(t, v.default, T.Z)) &&
              (d = ""
                .concat(d, " (")
                .concat((0, i.F6)(t, v.default, T.Z, !0), ")"));
        }
        let g = e.content;
        if ((0, c.Z)(e) && null == (g = P.Z.stringify(e, t)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              e,
            ),
            Error("failed to stringify system message"))
          );
        let E =
          "sticker_items" in e
            ? e.sticker_items
            : "stickerItems" in e
              ? e.stickerItems
              : e.stickers;
        if ("message_reference" in e ? (0, o.s)(e) : (0, o.Z)(e))
          a = D.intl.string(D.t["9ddYKi"]);
        else if (null != e.activity && null != e.application)
          a =
            e.activity.type === b.mFx.JOIN
              ? D.intl.formatToPlainString(
                  M(t, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC),
                  { user: u, game: e.application.name },
                )
              : e.activity.type === b.mFx.JOIN_REQUEST
                ? D.intl.formatToPlainString(
                    M(t, D.t["/TD0lZ"], D.t["/TD0lZ"], D.t["/TD0lZ"]),
                    { user: u, game: e.application.name },
                  )
                : "";
        else if (null != e.activity && e.activity.type === b.mFx.LISTEN) {
          let e = M(t, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
          a = D.intl.formatToPlainString(e, { user: u });
        } else if (null != E && E.length > 0)
          a = D.intl.formatToPlainString(D.t.zY4v1N, {
            stickerName: E[0].name,
          });
        else if (e.type === b.uaV.PREMIUM_REFERRAL)
          a = D.intl.formatToPlainString(D.t.lieTqa, {
            username: R.ZP.getName(n),
          });
        else if (null != e.poll)
          a = D.intl.formatToPlainString(D.t.ImizdH, {
            question: e.poll.question.text,
          });
        else if (e.type === b.uaV.POLL_RESULT) {
          var _, N, p;
          let t =
              null === (p = e.embeds) || void 0 === p
                ? void 0
                : null === (N = p[0]) || void 0 === N
                  ? void 0
                  : null === (_ = N.fields) || void 0 === _
                    ? void 0
                    : _.find(
                        (t) =>
                          ("name" in t ? t.name : t.rawName) ===
                          "poll_question_text",
                      ),
            n = null != t ? ("value" in t ? t.value : t.rawValue) : "";
          a = D.intl.formatToPlainString(D.t["9WrecH"], { question: n });
        } else
          a =
            0 !== g.length &&
            t.type === b.d4z.DM &&
            !n.bot &&
            g.startsWith("> -# *")
              ? (a = r.ZP.unparse(g, t.id, !0)).substring(0, 1) + a.substring(4)
              : r.ZP.unparse(g, t.id, !0);
        return (
          0 === a.length &&
            (a = (function (t) {
              var e;
              if (void 0 !== t.embeds && t.embeds.length > 0) {
                let e = t.embeds[0],
                  n = "description" in e ? e.description : e.rawDescription,
                  i = "title" in e ? e.title : e.rawTitle;
                if (null != n)
                  return null != i ? "".concat(i, " ").concat(n) : n;
                if (null != i) return i;
                if (null != e.fields && e.fields.length > 0) {
                  let t = e.fields[0],
                    n = "name" in t ? t.name : t.rawName,
                    i = "value" in t ? t.value : t.rawValue;
                  return "".concat(n, " ").concat(i);
                }
              }
              if (
                (0, A.yE)(
                  null !== (e = t.flags) && void 0 !== e ? e : 0,
                  b.iLy.IS_VOICE_MESSAGE,
                )
              )
                return D.intl.string(D.t.slFYgo);
              if (void 0 !== t.attachments && t.attachments.length > 0) {
                let e = (0, s.Z)(t.attachments[0]);
                return D.intl.formatToPlainString(D.t["51OkwM"], {
                  filename: e,
                });
              }
              return "";
            })(e)),
          { icon: n.getAvatarURL(t.guild_id, 128), title: d, body: a }
        );
      }
    },
    912101: function (t, e, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (e.Z = i);
    },
    654769: function (t, e, n) {
      n(47120), n(177593);
      var i,
        l = n(392711),
        o = n.n(l),
        a = n(525654),
        u = n.n(a),
        r = n(579806),
        s = n(292959),
        d = n(246946),
        c = n(626135),
        f = n(358085),
        g = n(557177),
        E = n(998502),
        _ = n(981631);
      function N(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      let I = f.isPlatformEmbedded && (0, f.isWindows)(),
        h = I && 10 > parseFloat(r.Z.os.release),
        p = !0;
      if (I && !h) {
        let [t, , e] = r.Z.os.release.split(".");
        p = parseInt(t) > 10 || parseInt(e) >= 15063;
      }
      let T =
          (I && p) ||
          ("Chrome" === u().name && 47 > parseFloat(u().version)) ||
          ("Firefox" === u().name && 52 > parseFloat(u().version)),
        S = o().throttle(g.GN, 1e3, { leading: !0 });
      function C() {
        E.ZP.flashFrame(!1);
      }
      I &&
        (window.addEventListener("focus", C), E.ZP.on("MAIN_WINDOW_FOCUS", C));
      let m = window.Notification;
      h &&
        (E.ZP.on("NOTIFICATION_CLICK", (t, e) => {
          let n = null[e];
          null != n && (n.onclick(), n.close());
        }),
        E.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(t) {
            t();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              E.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(t, { body: e, icon: n }) {
            N(this, "id", m._id++),
              N(this, "title", void 0),
              N(this, "body", void 0),
              N(this, "icon", void 0),
              N(this, "onshow", function () {}),
              N(this, "onclick", function () {}),
              N(this, "onclose", function () {}),
              (this.title = t),
              (this.body = e),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              E.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        N(i, "permission", "granted"),
        N(i, "_id", 0),
        (m = i));
      function Z() {
        return null != m && "granted" === m.permission;
      }
      function v(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        t.includes("message") ? S(t, e, void 0, n) : (0, g.GN)(t, e);
      }
      function A(t) {
        return (
          (d.Z.disableNotifications && null == t.overrideStreamerMode) ||
          !Z() ||
          (f.isPlatformEmbedded && !E.ZP.shouldDisplayNotifications())
        );
      }
      e.Z = {
        hasPermission: Z,
        requestPermission: function (t) {
          null != m &&
            m.requestPermission(() => {
              null != t && t(Z());
            });
        },
        showNotification: function (t, e, n, i, l) {
          var a, u, r, d;
          let g;
          if (A(l)) {
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
              null !== (r = l.volume) && void 0 !== r ? r : 1,
              l.soundpack,
            );
          let N =
            null !== (d = null == l ? void 0 : l.tag) && void 0 !== d
              ? d
              : null;
          (0, f.isLinux)() && (n = o().escape(n));
          let h = { icon: t, body: n, tag: N, silent: !0 };
          I && s.Z.taskbarFlash && E.ZP.flashFrame(!0);
          try {
            g = new m(e, h);
          } catch (t) {
            return null;
          }
          return (null === (a = l.onShown) || void 0 === a || a.call(l),
          !l.omitViewTracking && c.default.track(_.rMx.NOTIFICATION_VIEWED, i),
          (g.onclick = () => {
            var t;
            f.isPlatformEmbedded ? E.ZP.focus() : (window.focus(), g.close()),
              !l.omitClickTracking &&
                c.default.track(_.rMx.NOTIFICATION_CLICKED, i),
              null === (t = l.onClick) || void 0 === t || t.call(l);
          }),
          T && setTimeout(() => g.close(), 5e3),
          p)
            ? g
            : {
                close() {
                  var t;
                  null == g ||
                    null === (t = g.onclose) ||
                    void 0 === t ||
                    t.call(g);
                },
              };
        },
        disabled: A,
      };
    },
  },
]);
//# sourceMappingURL=f6ea5958a4b5e6fb9f9b.js.map
