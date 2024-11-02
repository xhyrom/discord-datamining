"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22036"],
  {
    95045: function (t) {
      t.exports = "/assets/b6ecdc8b623f50859f88.png";
    },
    11352: function (t, n, e) {
      e.d(n, {
        Y: function () {
          return i;
        },
      });
      let i = (0, e(818083).B)({
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
    671105: function (t, n, e) {
      e.d(n, {
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
      var i = e(442837),
        l = e(581883),
        o = e(871465);
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
        var n, e;
        return d(
          t,
          void 0,
          null !==
            (e =
              null === (n = l.Z.settings.guilds) || void 0 === n
                ? void 0
                : n.guilds) && void 0 !== e
            ? e
            : {},
        );
      }
      function r(t, n) {
        let e = (0, i.e7)([l.Z], () => {
          var t;
          return null === (t = l.Z.settings.guilds) || void 0 === t
            ? void 0
            : t.guilds;
        });
        return null != n ? d(t, n, e) : void 0;
      }
      function s(t, n) {
        var e, i;
        let o =
          null !==
            (i =
              null === (e = l.Z.settings.guilds) || void 0 === e
                ? void 0
                : e.guilds) && void 0 !== i
            ? i
            : {};
        return null != n ? d(t, n, o) : void 0;
      }
      function d(t, n, e) {
        var i, l;
        if (null == e) return;
        let a =
            null != n
              ? null === (i = e[t]) || void 0 === i
                ? void 0
                : i.channels[n]
              : e[t],
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
    759198: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(120356),
        o = e.n(l),
        a = e(481060),
        u = e(507815);
      function r(t) {
        let { className: n, color: e, ...l } = t;
        return (0, i.jsx)(a.Text, {
          className: o()({ [u.text]: null == e }, n),
          color: e,
          ...l,
        });
      }
    },
    106371: function (t, n, e) {
      var i = e(818083);
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
        (n.Z = l);
    },
    974180: function (t, n, e) {
      e.d(n, {
        Ay: function () {
          return j;
        },
        yk: function () {
          return Q;
        },
      }),
        e(47120),
        e(653041);
      var i,
        l = e(149765),
        o = e(442837),
        a = e(433517),
        u = e(570140),
        r = e(493683),
        s = e(475179),
        d = e(749210),
        c = e(292556),
        f = e(287734),
        g = e(802098),
        E = e(933557),
        _ = e(456269),
        N = e(15274),
        h = e(754688),
        I = e(336197),
        p = e(355298),
        T = e(601992),
        S = e(11352),
        C = e(671105),
        v = e(106371),
        m = e(703656),
        Z = e(359110),
        A = e(922482),
        y = e(427679),
        P = e(488131),
        R = e(695346),
        b = e(592125),
        D = e(430824),
        O = e(292959),
        U = e(496675),
        G = e(699516),
        L = e(944486),
        w = e(885110),
        k = e(246946),
        M = e(594174),
        F = e(979651),
        V = e(5192),
        W = e(150097),
        H = e(912101),
        x = e(358085),
        q = e(74538),
        z = e(557177),
        Y = e(51144),
        B = e(981631),
        X = e(765305),
        J = e(388032);
      function K(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let j = "message1",
        Q = 0.4,
        $ = "discord_dismissed_notification_shown",
        tt = document.hasFocus(),
        tn = null,
        te = new Set(),
        ti = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        tl = new (class {
          track(t, n) {
            let e = this._channels[t];
            for (
              null == e && ((e = []), (this._channels[t] = e)), e.push(n);
              e.length > 1;

            ) {
              let t = e.shift();
              null != t && null != t.close && t.close();
            }
          }
          clearChannel(t) {
            let n = this._channels[t];
            null != n &&
              (delete this._channels[t], n.forEach((t) => t.close()));
          }
          constructor() {
            K(this, "_channels", {});
          }
        })();
      function to() {
        return (
          !!(
            O.Z.getDesktopType() === B.qrD.NEVER ||
            w.Z.getStatus() === B.Skl.DND ||
            R.QZ.getSetting()
          ) || !1
        );
      }
      function ta(t) {
        return null != F.Z.getVoiceStateForChannel(t);
      }
      class tu extends (i = o.ZP.Store) {
        initialize() {
          this.waitFor(M.default, b.Z, O.Z, D.Z, y.Z, G.Z, U.Z, F.Z, p.Z);
        }
      }
      K(tu, "displayName", "NotificationStore"),
        new tu(
          u.Z,
          __OVERLAY__
            ? {}
            : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: n } = t;
                  n === B.$Ab.ENABLED &&
                    !x.isPlatformEmbedded &&
                    H.Z.showNotification(
                      e(185672),
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
                    icon: n,
                    title: e,
                    body: i,
                    trackingProps: l,
                    options: o,
                  } = t;
                  return !to() && (H.Z.showNotification(n, e, i, l, o), !1);
                },
                WINDOW_FOCUS: function (t) {
                  if ((tt = t.focused)) {
                    let t = L.Z.getChannelId();
                    null != t && tl.clearChannel(t);
                  }
                },
                MESSAGE_CREATE: function (t) {
                  var n, i, l, o;
                  let { channelId: a, message: r, optimistic: d } = t;
                  if (d) return !1;
                  let f = b.Z.getChannel(a),
                    E = M.default.getUser(
                      null === (n = r.author) || void 0 === n ? void 0 : n.id,
                    ),
                    _ = M.default.getCurrentUser();
                  if (null == f || null == E) return !1;
                  let N = (0, W.eF)(r, a, !tt),
                    h =
                      O.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, W.N_)(r, a);
                  if (
                    (!N && !h) ||
                    (r.type === B.uaV.CHANGELOG &&
                      (null == r.changelog_id ||
                        g.Z.latestChangelogId() !== r.changelog_id))
                  )
                    return !1;
                  let I = !O.Z.isSoundDisabled(j),
                    p = q.ZP.canUseCustomNotificationSounds(_),
                    v = S.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    m =
                      p && v && I
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
                  if ((h && (I && z.GN("message3", 0.4, void 0, m), !tt)) || !N)
                    return !1;
                  let A = e(808506).Z,
                    y = e(237997).Z;
                  if (
                    null != A.getFocusedPID() &&
                    y.getTextChatNotificationMode() === B.Ypu.ENABLED &&
                    !k.Z.disableNotifications
                  )
                    return !1;
                  let { icon: P, title: R, body: D } = (0, W.Xi)(f, r, E);
                  if (
                    (u.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: f.id,
                      message: r,
                      icon: P,
                      title: R,
                      body: D,
                    }),
                    (0, T.R)(r, f.guild_id),
                    O.Z.getDesktopType() === B.qrD.NEVER)
                  )
                    return I && z.GN(j, Q, void 0, m), !1;
                  let U = H.Z.showNotification(
                    P,
                    R,
                    D,
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
                      sound: I ? j : void 0,
                      soundpack: m,
                      volume: Q,
                      onClick() {
                        (0, Z.Kh)(f.id),
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
                  let { channelId: n } = t;
                  return null != n && tl.clearChannel(n), !1;
                },
                MESSAGE_ACK: function (t) {
                  let { channelId: n } = t;
                  return tl.clearChannel(n), !1;
                },
                ACTIVITY_START: function (t) {
                  let { userId: n, activity: e } = t;
                  if (to()) return !1;
                  if (e.type === B.IIU.PLAYING) {
                    let t = M.default.getUser(n);
                    if (null == t) return !1;
                    let i = Y.ZP.getName(t),
                      l = e.name,
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
                  if (to()) return;
                  let e = M.default.getCurrentUser();
                  if (null == e) return;
                  let i = n.find((t) => t.userId === e.id);
                  if (null == i) return;
                  let {
                    channelId: l,
                    guildId: o,
                    suppress: a,
                    requestToSpeakTimestamp: u,
                  } = i;
                  if (null == l || null == o || !(!a && null != u)) return;
                  let r = D.Z.getGuild(o),
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
                  let { instance: n } = t;
                  if (to() || !n.send_start_notification || ta(n.channel_id))
                    return !1;
                  let e = M.default.getCurrentUser(),
                    i = D.Z.getGuild(n.guild_id),
                    o = b.Z.getChannel(n.channel_id),
                    a = M.default.getUser(n.host_id);
                  if (
                    null == e ||
                    null == o ||
                    null == i ||
                    null == a ||
                    !(0, W.LL)(e, a, o) ||
                    !U.Z.can(l.$e(B.Plq.CONNECT, B.Plq.VIEW_CHANNEL), o) ||
                    te.has(n.id)
                  )
                    return !1;
                  te.add(n.id),
                    H.Z.showNotification(
                      i.getIconURL(128),
                      J.intl.formatToPlainString(J.t.bZ4OkZ, {
                        guildName: i.name,
                      }),
                      J.intl.formatToPlainString(J.t.qTelnJ, {
                        username: V.ZP.getName(i.id, o.id, a),
                        topic: n.topic,
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
                  let { instance: n } = t;
                  te.delete(n.id);
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: n } = t;
                  if (to() || null == n.notification_type) return !1;
                  n.notification_type === X.sy.EVENT_START &&
                    (n.entity_type === X.WX.STAGE_INSTANCE ||
                    n.entity_type === X.WX.VOICE
                      ? !(function (t) {
                          if (to()) return !1;
                          let n = t.channel_id;
                          if (null == n || ta(n)) return !1;
                          let e = M.default.getCurrentUser(),
                            i = D.Z.getGuild(t.guild_id),
                            o = b.Z.getChannel(t.channel_id),
                            a = M.default.getUser(t.host_id);
                          if (
                            null == e ||
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
                        })(n)
                      : n.entity_type === X.WX.EXTERNAL &&
                        !(function (t) {
                          if (to()) return !1;
                          let n = M.default.getCurrentUser(),
                            e = D.Z.getGuild(t.guild_id);
                          if (null == n || null == e) return !1;
                          H.Z.showNotification(
                            e.getIconURL(128),
                            J.intl.formatToPlainString(J.t.bOu6Wl, {
                              guildName: e.name,
                            }),
                            J.intl.formatToPlainString(J.t.mYyaRE, {
                              topic: t.name,
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: e.id,
                            },
                            {
                              onClick() {
                                d.Z.transitionToGuildSync(t.guild_id),
                                  (0, N.bO)({ eventId: t.id });
                              },
                            },
                          );
                        })(n));
                },
                THREAD_CREATE: function (t) {
                  var n;
                  let { channel: e, isNewlyCreated: i } = t;
                  if (to()) return !1;
                  let l = b.Z.getChannel(e.parent_id);
                  if (
                    null == l ||
                    !B.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, W.FI)(e, l, !tt)
                  )
                    return !1;
                  let { author: o, user: a } = (0, _.MC)(e);
                  if (null == a) return !1;
                  let u = D.Z.getGuild(l.guild_id);
                  if (null == u) return !1;
                  let r = J.intl.formatToPlainString(J.t["2IGVl5"], {
                      channelName: l.name,
                      guildName: u.name,
                    }),
                    s = J.intl.formatToPlainString(J.t.jPhTvb, {
                      channelName: e.name,
                      userUsername:
                        null !== (n = null == o ? void 0 : o.nick) &&
                        void 0 !== n
                          ? n
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
                        (0, P.ok)(e);
                      },
                    },
                  );
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let n,
                    {
                      icon: e,
                      title: i,
                      body: l,
                      route: o,
                      trackingType: a,
                      tag: u,
                    } = t;
                  if (to() || null == i || null == l || null == a) return !1;
                  if ("reactions_push_notification" === a) {
                    var r;
                    let { enableInAppNotifications: t } = v.Z.getCurrentConfig(
                      { location: "desktopNotification" },
                      { autoTrackExposure: !0 },
                    );
                    if (!t) return !1;
                    let e =
                      null !== (r = (0, h.Qj)(o)) && void 0 !== r
                        ? r
                        : { channelId: null, guildId: null };
                    if (
                      null == (n = e.channelId) ||
                      null == e.guildId ||
                      (L.Z.getCurrentlySelectedChannelId() === n && tt)
                    )
                      return !1;
                  }
                  let s = H.Z.showNotification(
                    e,
                    i,
                    l,
                    { notif_type: a },
                    {
                      onClick() {
                        null != o &&
                          ((0, I.Z)(o), c.default.clickedNotification());
                      },
                      tag: u,
                    },
                  );
                  null != s && null != n && tl.track(n, s);
                },
                WINDOW_HIDDEN: function () {
                  let t = (0, x.isWindows)(),
                    n = (0, x.isLinux)();
                  if (!(!a.K.get($, !1) && x.isPlatformEmbedded && (t || n)))
                    return !1;
                  let i = !1;
                  return (
                    null != tn && (i = ti.includes(tn)),
                    !!i &&
                      (H.Z.showNotification(
                        e(95045),
                        J.intl.string(J.t.VSgOVl),
                        J.intl.string(J.t["+J/F6+"]),
                        { notif_type: "WINDOW_HIDDEN" },
                        {
                          overrideStreamerMode: !0,
                          onClick: () => {
                            (0, m.uL)(B.Z5c.SETTINGS(t ? "windows" : "linux"));
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
                  let { countryCode: n, guilds: e } = t;
                  (tn = n),
                    te.clear(),
                    e.forEach((t) =>
                      t.stage_instances.forEach((t) => te.add(t.id)),
                    );
                },
                MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: n } = t;
                  if (to()) return !1;
                  let e = n.message;
                  if (null == e || null == e.author) return !1;
                  let i = b.Z.getChannel(n.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: o } = (0, W.Xi)(i, e, e.author);
                  H.Z.showNotification(
                    l,
                    J.intl.string(J.t.IjZJBw),
                    o,
                    { notif_type: "MESSAGE_REMINDER_DUE" },
                    {
                      onClick() {
                        (0, I.Z)(
                          B.Z5c.CHANNEL(
                            null == i ? void 0 : i.getGuildId(),
                            i.id,
                            e.id,
                          ),
                        );
                      },
                    },
                  );
                },
              },
        );
    },
    150097: function (t, n, e) {
      e.d(n, {
        FI: function () {
          return L;
        },
        LL: function () {
          return O;
        },
        N_: function () {
          return G;
        },
        Xi: function () {
          return M;
        },
        eF: function () {
          return U;
        },
      }),
        e(789020),
        e(411104);
      var i = e(933557),
        l = e(710845),
        o = e(978003),
        a = e(41776),
        u = e(355298),
        r = e(957730),
        s = e(572804),
        d = e(901461);
      e(734934);
      var c = e(569471),
        f = e(723170),
        g = e(695346),
        E = e(131704),
        _ = e(433355),
        N = e(592125),
        h = e(430824),
        I = e(19780),
        p = e(699516),
        T = e(944486),
        S = e(914010),
        C = e(885110),
        v = e(9156),
        m = e(594174),
        Z = e(630388),
        A = e(5192),
        y = e(352736),
        P = e(51144),
        R = e(981631),
        b = e(124368),
        D = e(388032);
      function O(t, n, e) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (n.hasFlag(R.xW$.SPAMMER) || e.isManaged()) return !1;
        let l = e.getGuildId();
        return (
          !(
            (null != l && a.Z.isLurking(l)) ||
            (!i.ignoreSameUser && n.id === t.id) ||
            p.Z.isBlocked(n.id) ||
            (!i.ignoreStatus && C.Z.getStatus() === R.Skl.DND) ||
            g.QZ.getSetting() ||
            (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(e))
          ) && !0
        );
      }
      function U(t, n) {
        var e;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != t.flags && (0, Z.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let o = N.Z.getChannel(n);
        t.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (o = N.Z.getChannel(null == o ? void 0 : o.parent_id));
        let a = m.default.getCurrentUser(),
          r = m.default.getUser(
            null === (e = t.author) || void 0 === e ? void 0 : e.id,
          );
        if (
          null == o ||
          null == a ||
          null == r ||
          (o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
          !O(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type),
          }) ||
          u.Z.isMessageRequest(n)
        )
          return !1;
        if (!i) {
          let t = T.Z.getChannelId(S.Z.getGuildId());
          if (t === o.id || _.ZP.getCurrentSidebarChannelId(t) === o.id)
            return !1;
        }
        if (
          p.Z.isBlockedForMessage(t) ||
          (void 0 !== t.activity_instance &&
            null != t.interaction &&
            t.interaction.user.id === a.id)
        )
          return !1;
        if (E.Ec.has(o.type)) {
          if (c.Z.isMuted(o.id)) return !1;
          let n = (0, f.J)(o);
          return (
            n !== b.iN.NO_MESSAGES &&
            (n === b.iN.ALL_MESSAGES ||
              (0, s.Hl)({
                rawMessage: t,
                userId: a.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let n = !E.tx.has(o.type) || I.Z.getChannelId() === o.id;
          if (v.ZP.allowAllMessages(o) && n) return !0;
          let e = v.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(o.getGuildId());
          return (0, s.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: e,
            suppressRoles: i,
          });
        }
      }
      function G(t, n) {
        var e;
        if (T.Z.getChannelId(S.Z.getGuildId()) !== n) return !1;
        let i = N.Z.getChannel(n);
        t.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (i = N.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = m.default.getCurrentUser(),
          o = m.default.getUser(
            null === (e = t.author) || void 0 === e ? void 0 : e.id,
          );
        return (
          !(
            null == i ||
            null == l ||
            null == o ||
            i.isManaged() ||
            o.hasFlag(R.xW$.SPAMMER) ||
            p.Z.isBlockedForMessage(t) ||
            o.id === l.id ||
            C.Z.getStatus() === R.Skl.DND ||
            g.QZ.getSetting() ||
            v.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function L(t, n) {
        let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = m.default.getCurrentUser(),
          o = m.default.getUser(t.ownerId);
        return (
          !(
            null == n ||
            null == l ||
            null == o ||
            !O(l, o, n, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
          ) &&
          (!!e || T.Z.getChannelId(S.Z.getGuildId()) !== n.id) &&
          v.ZP.getNewForumThreadsCreated(n)
        );
      }
      let w = (t, n, e) =>
        ""
          .concat(t, " (")
          .concat((0, i.F6)(n, m.default, p.Z, !0))
          .concat(
            null != e ? ", ".concat((0, i.F6)(e, m.default, p.Z)) : "",
            ")",
          );
      function k(t, n, e, i) {
        switch (t.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
            return n;
          case R.d4z.GROUP_DM:
            return e;
          case R.d4z.DM:
          default:
            return i;
        }
      }
      function M(t, n, e) {
        let a;
        let u = A.ZP.getName(t.getGuildId(), t.id, e),
          s = u;
        switch (t.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
          case R.d4z.GUILD_VOICE:
          case R.d4z.ANNOUNCEMENT_THREAD:
          case R.d4z.PUBLIC_THREAD:
          case R.d4z.PRIVATE_THREAD:
            let c = N.Z.getChannel(t.parent_id);
            n.type === R.uaV.THREAD_STARTER_MESSAGE && null != c
              ? (s = w(s, c, N.Z.getChannel(c.parent_id)))
              : (0, d.Z)(n)
                ? null != h.Z.getGuild(t.getGuildId()) && (s = w(s, t, c))
                : (s = w(s, t, c));
            break;
          case R.d4z.GROUP_DM:
            !(t.isManaged() && e.bot && s === (0, i.F6)(t, m.default, p.Z)) &&
              (s = ""
                .concat(s, " (")
                .concat((0, i.F6)(t, m.default, p.Z, !0), ")"));
        }
        let f = n.content;
        if ((0, d.Z)(n) && null == (f = y.Z.stringify(n, t)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              n,
            ),
            Error("failed to stringify system message"))
          );
        let g = "sticker_items" in n ? n.sticker_items : n.stickers;
        if ("message_reference" in n ? (0, o.s)(n) : (0, o.Z)(n))
          a = D.intl.string(D.t["9ddYKi"]);
        else if (null != n.activity && null != n.application)
          a =
            n.activity.type === R.mFx.JOIN
              ? D.intl.formatToPlainString(
                  k(t, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC),
                  { user: u, game: n.application.name },
                )
              : n.activity.type === R.mFx.JOIN_REQUEST
                ? D.intl.formatToPlainString(
                    k(t, D.t["/TD0lZ"], D.t["/TD0lZ"], D.t["/TD0lZ"]),
                    { user: u, game: n.application.name },
                  )
                : "";
        else if (null != n.activity && n.activity.type === R.mFx.LISTEN) {
          let n = k(t, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
          a = D.intl.formatToPlainString(n, { user: u });
        } else if (null != g && g.length > 0)
          a = D.intl.formatToPlainString(D.t.zY4v1N, {
            stickerName: g[0].name,
          });
        else if (n.type === R.uaV.PREMIUM_REFERRAL)
          a = D.intl.formatToPlainString(D.t.lieTqa, {
            username: P.ZP.getName(e),
          });
        else if (null != n.poll)
          a = D.intl.formatToPlainString(D.t.ImizdH, {
            question: n.poll.question.text,
          });
        else if (n.type === R.uaV.POLL_RESULT) {
          var E, _, I;
          let t =
              null === (I = n.embeds) || void 0 === I
                ? void 0
                : null === (_ = I[0]) || void 0 === _
                  ? void 0
                  : null === (E = _.fields) || void 0 === E
                    ? void 0
                    : E.find(
                        (t) =>
                          ("name" in t ? t.name : t.rawName) ===
                          "poll_question_text",
                      ),
            e = null != t ? ("value" in t ? t.value : t.rawValue) : "";
          a = D.intl.formatToPlainString(D.t["9WrecH"], { question: e });
        } else
          a =
            0 !== f.length &&
            t.type === R.d4z.DM &&
            !e.bot &&
            f.startsWith("> -# *")
              ? (a = r.ZP.unparse(f, t.id, !0)).substring(0, 1) + a.substring(4)
              : r.ZP.unparse(f, t.id, !0);
        return (
          0 === a.length &&
            (a = (function (t) {
              var n;
              if (void 0 !== t.embeds && t.embeds.length > 0) {
                let n = t.embeds[0],
                  e = "description" in n ? n.description : n.rawDescription,
                  i = "title" in n ? n.title : n.rawTitle;
                if (null != e)
                  return null != i ? "".concat(i, " ").concat(e) : e;
                if (null != i) return i;
                if (null != n.fields) {
                  let t = n.fields[0],
                    e = "name" in t ? t.name : t.rawName,
                    i = "value" in t ? t.value : t.rawValue;
                  return "".concat(e, " ").concat(i);
                }
              }
              if (
                (0, Z.yE)(
                  null !== (n = t.flags) && void 0 !== n ? n : 0,
                  R.iLy.IS_VOICE_MESSAGE,
                )
              )
                return D.intl.string(D.t.slFYgo);
              if (void 0 !== t.attachments && t.attachments.length > 0) {
                let n = t.attachments[0].filename;
                return D.intl.formatToPlainString(D.t["51OkwM"], {
                  filename: n,
                });
              }
              return "";
            })(n)),
          { icon: e.getAvatarURL(t.guild_id, 128), title: s, body: a }
        );
      }
    },
    912101: function (t, n, e) {
      let i;
      e(654769);
      (i = e(654769).Z), (n.Z = i);
    },
    654769: function (t, n, e) {
      e(47120), e(177593);
      var i,
        l = e(392711),
        o = e.n(l),
        a = e(525654),
        u = e.n(a),
        r = e(579806),
        s = e(292959),
        d = e(246946),
        c = e(626135),
        f = e(358085),
        g = e(557177),
        E = e(998502),
        _ = e(981631);
      function N(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let h = f.isPlatformEmbedded && (0, f.isWindows)(),
        I = h && 10 > parseFloat(r.Z.os.release),
        p = !0;
      if (h && !I) {
        let [t, , n] = r.Z.os.release.split(".");
        p = parseInt(t) > 10 || parseInt(n) >= 15063;
      }
      let T =
          (h && p) ||
          ("Chrome" === u().name && 47 > parseFloat(u().version)) ||
          ("Firefox" === u().name && 52 > parseFloat(u().version)),
        S = o().throttle(g.GN, 1e3, { leading: !0 });
      function C() {
        E.ZP.flashFrame(!1);
      }
      h &&
        (window.addEventListener("focus", C), E.ZP.on("MAIN_WINDOW_FOCUS", C));
      let v = window.Notification;
      I &&
        (E.ZP.on("NOTIFICATION_CLICK", (t, n) => {
          let e = null[n];
          null != e && (e.onclick(), e.close());
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
          constructor(t, { body: n, icon: e }) {
            N(this, "id", v._id++),
              N(this, "title", void 0),
              N(this, "body", void 0),
              N(this, "icon", void 0),
              N(this, "onshow", function () {}),
              N(this, "onclick", function () {}),
              N(this, "onclose", function () {}),
              (this.title = t),
              (this.body = n),
              (this.icon = e),
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
        (v = i));
      function m() {
        return null != v && "granted" === v.permission;
      }
      function Z(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          e = arguments.length > 2 ? arguments[2] : void 0;
        t.includes("message") ? S(t, n, void 0, e) : (0, g.GN)(t, n);
      }
      function A(t) {
        return (
          (d.Z.disableNotifications && null == t.overrideStreamerMode) ||
          !m() ||
          (f.isPlatformEmbedded && !E.ZP.shouldDisplayNotifications())
        );
      }
      n.Z = {
        hasPermission: m,
        requestPermission: function (t) {
          null != v &&
            v.requestPermission(() => {
              null != t && t(m());
            });
        },
        showNotification: function (t, n, e, i, l) {
          var a, u, r, d;
          let g;
          if (A(l)) {
            null != l.sound &&
              !1 !== l.playSoundIfDisabled &&
              Z(
                l.sound,
                null !== (u = l.volume) && void 0 !== u ? u : 1,
                l.soundpack,
              );
            return;
          }
          null != l.sound &&
            Z(
              l.sound,
              null !== (r = l.volume) && void 0 !== r ? r : 1,
              l.soundpack,
            );
          let N =
            null !== (d = null == l ? void 0 : l.tag) && void 0 !== d
              ? d
              : null;
          (0, f.isLinux)() && (e = o().escape(e));
          let I = { icon: t, body: e, tag: N, silent: !0 };
          h && s.Z.taskbarFlash && E.ZP.flashFrame(!0);
          try {
            g = new v(n, I);
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
//# sourceMappingURL=84648cc1855322a7cb67.js.map
