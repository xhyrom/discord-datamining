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
        a = n(570140),
        u = n(493683),
        r = n(475179),
        d = n(749210),
        _ = n(292556),
        c = n(287734),
        E = n(802098),
        T = n(933557),
        I = n(456269),
        f = n(15274),
        g = n(355298),
        N = n(601992),
        S = n(11352),
        C = n(671105),
        A = n(703656),
        O = n(359110),
        Z = n(922482),
        h = n(427679),
        m = n(488131),
        v = n(695346),
        D = n(592125),
        p = n(430824),
        R = n(292959),
        M = n(496675),
        L = n(699516),
        U = n(944486),
        y = n(885110),
        P = n(246946),
        G = n(594174),
        F = n(979651),
        w = n(5192),
        b = n(150097),
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
            R.Z.getDesktopType() === W.qrD.NEVER ||
            y.Z.getStatus() === W.Skl.DND ||
            v.QZ.getSetting()
          ) || !1
        );
      }
      function ei(e) {
        return null != F.Z.getVoiceStateForChannel(e);
      }
      class el extends (i = s.ZP.Store) {
        initialize() {
          this.waitFor(G.default, D.Z, R.Z, p.Z, h.Z, L.Z, M.Z, F.Z, g.Z);
        }
      }
      q(el, "displayName", "NotificationStore"),
        new el(
          a.Z,
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
                    let e = U.Z.getChannelId();
                    null != e && et.clearChannel(e);
                  }
                },
                MESSAGE_CREATE: function (e) {
                  var t, i, l, s;
                  let { channelId: o, message: u, optimistic: d } = e;
                  if (d) return !1;
                  let c = D.Z.getChannel(o),
                    T = G.default.getUser(
                      null === (t = u.author) || void 0 === t ? void 0 : t.id,
                    ),
                    I = G.default.getCurrentUser();
                  if (null == c || null == T) return !1;
                  let f = (0, b.eF)(u, o, !Q),
                    g =
                      R.Z.getNotifyMessagesInSelectedChannel() &&
                      (0, b.N_)(u, o);
                  if (
                    (!f && !g) ||
                    (u.type === W.uaV.CHANGELOG &&
                      (null == u.changelog_id ||
                        E.Z.latestChangelogId() !== u.changelog_id))
                  )
                    return !1;
                  let A = !R.Z.isSoundDisabled(X),
                    Z = H.ZP.canUseCustomNotificationSounds(I),
                    h = S.Y.getCurrentConfig({
                      location: "NotificationStore",
                    }).enabled,
                    m =
                      Z && h && A
                        ? null !==
                            (s = (0, C.bb)(
                              null !== (l = c.guild_id) && void 0 !== l
                                ? l
                                : W.aIL,
                              o,
                            )) && void 0 !== s
                          ? s
                          : (0, C.iD)(c.guild_id)
                        : void 0;
                  if ((g && (A && Y.GN("message3", 0.4, void 0, m), !Q)) || !f)
                    return !1;
                  let v = n(808506).Z,
                    p = n(237997).Z;
                  if (
                    null != v.getFocusedPID() &&
                    p.getTextChatNotificationMode() === W.Ypu.ENABLED &&
                    !P.Z.disableNotifications
                  )
                    return !1;
                  let { icon: M, title: L, body: U } = (0, b.Xi)(c, u, T);
                  if (
                    (a.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: c.id,
                      message: u,
                      icon: M,
                      title: L,
                      body: U,
                    }),
                    (0, N.R)(u, c.guild_id),
                    R.Z.getDesktopType() === W.qrD.NEVER)
                  )
                    return A && Y.GN(X, J, void 0, m), !1;
                  let y = k.Z.showNotification(
                    M,
                    L,
                    U,
                    {
                      notif_type: "MESSAGE_CREATE",
                      notif_user_id:
                        null === (i = u.author) || void 0 === i ? void 0 : i.id,
                      message_id: u.id,
                      message_type: u.type,
                      channel_id: c.id,
                      channel_type: c.type,
                      guild_id: c.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: u.id,
                      sound: A ? X : void 0,
                      soundpack: m,
                      volume: J,
                      onClick() {
                        (0, O.Kh)(c.id),
                          (c.type === W.d4z.GUILD_VOICE ||
                            c.type === W.d4z.GUILD_STAGE_VOICE) &&
                            r.Z.updateChatOpen(c.id, !0),
                          _.default.clickedNotification();
                      },
                    },
                  );
                  null != y && et.track(c.id, y);
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
                    let e = G.default.getUser(t);
                    if (null == e) return !1;
                    let i = B.ZP.getName(e),
                      l = n.name,
                      s = e.getAvatarURL(void 0, 128),
                      o = z.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                      a = z.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
                        username: i,
                        gameName: l,
                      });
                    return (
                      k.Z.showNotification(
                        s,
                        o,
                        a,
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
                  if (en()) return;
                  let n = G.default.getCurrentUser();
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
                  let u = p.Z.getGuild(s),
                    r = D.Z.getChannel(l),
                    d = h.Z.getStageInstanceByChannel(l);
                  null != u &&
                    null != r &&
                    null != d &&
                    k.Z.showNotification(
                      u.getIconURL(128),
                      r.name,
                      z.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, T.F6)(r, G.default, L.Z),
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
                  let n = G.default.getCurrentUser(),
                    i = p.Z.getGuild(t.guild_id),
                    s = D.Z.getChannel(t.channel_id),
                    o = G.default.getUser(t.host_id);
                  if (
                    null == n ||
                    null == s ||
                    null == i ||
                    null == o ||
                    !(0, b.LL)(n, o, s) ||
                    !M.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), s) ||
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
                        username: w.ZP.getName(i.id, s.id, o),
                        topic: t.topic,
                      }),
                      {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: i.id,
                        channel_id: s.id,
                      },
                      {
                        onClick() {
                          (0, Z.Cq)(s);
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
                          let n = G.default.getCurrentUser(),
                            i = p.Z.getGuild(e.guild_id),
                            s = D.Z.getChannel(e.channel_id),
                            o = G.default.getUser(e.host_id);
                          if (
                            null == n ||
                            null == s ||
                            null == i ||
                            null == o ||
                            !M.Z.can(l.$e(W.Plq.CONNECT, W.Plq.VIEW_CHANNEL), s)
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
                                username: w.ZP.getName(i.id, s.id, o),
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
                                  (0, Z.Cq)(s),
                                  e.entity_type === x.WX.VOICE &&
                                    c.default.selectVoiceChannel(s.id);
                              },
                            },
                          );
                        })(t)
                      : t.entity_type === x.WX.EXTERNAL &&
                        !(function (e) {
                          if (en()) return !1;
                          let t = G.default.getCurrentUser(),
                            n = p.Z.getGuild(e.guild_id);
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
                  let l = D.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !W.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, b.FI)(n, l, !Q)
                  )
                    return !1;
                  let { author: s, user: o } = (0, I.MC)(n);
                  if (null == o) return !1;
                  let a = p.Z.getGuild(l.guild_id);
                  if (null == a) return !1;
                  let u =
                      z.Z.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format(
                        { channelName: l.name, guildName: a.name },
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
                    u,
                    r,
                    { notif_type: "THREAD_CREATE", notif_user_id: o.id },
                    {
                      onClick() {
                        (0, m.ok)(n);
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
                          null != l && (0, A.uL)(l);
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
          return F;
        },
        LL: function () {
          return y;
        },
        N_: function () {
          return G;
        },
        Xi: function () {
          return k;
        },
        eF: function () {
          return P;
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
      var _ = n(569471),
        c = n(723170),
        E = n(695346),
        T = n(131704),
        I = n(433355),
        f = n(592125),
        g = n(430824),
        N = n(19780),
        S = n(699516),
        C = n(944486),
        A = n(914010),
        O = n(885110),
        Z = n(9156),
        h = n(594174),
        m = n(630388),
        v = n(5192),
        D = n(352736),
        p = n(51144),
        R = n(981631),
        M = n(124368),
        L = n(689938);
      let U = "> -# *";
      function y(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
        let l = n.getGuildId();
        return (
          !(
            (null != l && o.Z.isLurking(l)) ||
            (!i.ignoreSameUser && t.id === e.id) ||
            S.Z.isBlocked(t.id) ||
            (!i.ignoreStatus && O.Z.getStatus() === R.Skl.DND) ||
            E.QZ.getSetting() ||
            (!i.ignoreNoMessagesSetting && Z.ZP.allowNoMessages(n))
          ) && !0
        );
      }
      function P(e, t) {
        var n;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e.flags && (0, m.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let s = f.Z.getChannel(t);
        e.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (s = f.Z.getChannel(null == s ? void 0 : s.parent_id));
        let o = h.default.getCurrentUser(),
          u = h.default.getUser(
            null === (n = e.author) || void 0 === n ? void 0 : n.id,
          );
        if (
          null == s ||
          null == o ||
          null == u ||
          (s.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
          !y(o, u, s, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type),
          }) ||
          a.Z.isMessageRequest(t)
        )
          return !1;
        if (!i) {
          let e = C.Z.getChannelId(A.Z.getGuildId());
          if (e === s.id || I.ZP.getCurrentSidebarChannelId(e) === s.id)
            return !1;
        }
        if (
          S.Z.isBlockedForMessage(e) ||
          (void 0 !== e.activity_instance &&
            null != e.interaction &&
            e.interaction.user.id === o.id)
        )
          return !1;
        if (T.Ec.has(s.type)) {
          if (_.Z.isMuted(s.id)) return !1;
          let t = (0, c.J)(s);
          return (
            t !== M.iN.NO_MESSAGES &&
            (t === M.iN.ALL_MESSAGES ||
              (0, r.Hl)({
                rawMessage: e,
                userId: o.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let t = !T.tx.has(s.type) || N.Z.getChannelId() === s.id;
          if (Z.ZP.allowAllMessages(s) && t) return !0;
          let n = Z.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = Z.ZP.isSuppressRolesEnabled(s.getGuildId());
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
        if (C.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
        let i = f.Z.getChannel(t);
        e.type === R.uaV.THREAD_STARTER_MESSAGE &&
          (i = f.Z.getChannel(null == i ? void 0 : i.parent_id));
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
            s.hasFlag(R.xW$.SPAMMER) ||
            S.Z.isBlockedForMessage(e) ||
            s.id === l.id ||
            O.Z.getStatus() === R.Skl.DND ||
            E.QZ.getSetting() ||
            Z.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function F(e, t) {
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
            !y(l, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            Z.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
          ) &&
          (!!n || C.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
          Z.ZP.getNewForumThreadsCreated(t)
        );
      }
      let w = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, i.F6)(t, h.default, S.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, h.default, S.Z)) : "",
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
      function k(e, t, n) {
        var o, a, r, _, c, E;
        let T;
        let I = v.ZP.getName(e.getGuildId(), e.id, n),
          N = I;
        switch (e.type) {
          case R.d4z.GUILD_ANNOUNCEMENT:
          case R.d4z.GUILD_TEXT:
          case R.d4z.GUILD_VOICE:
          case R.d4z.ANNOUNCEMENT_THREAD:
          case R.d4z.PUBLIC_THREAD:
          case R.d4z.PRIVATE_THREAD:
            let C = f.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != C
              ? (N = w(N, C, f.Z.getChannel(C.parent_id)))
              : (0, d.Z)(t)
                ? null != g.Z.getGuild(e.getGuildId()) && (N = w(N, e, C))
                : (N = w(N, e, C));
            break;
          case R.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && N === (0, i.F6)(e, h.default, S.Z)) &&
              (N = ""
                .concat(N, " (")
                .concat((0, i.F6)(e, h.default, S.Z, !0), ")"));
        }
        let A = t.content;
        if ((0, d.Z)(t) && null == (A = D.Z.stringify(t, e)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t,
            ),
            Error("failed to stringify system message"))
          );
        let O = null !== (o = t.sticker_items) && void 0 !== o ? o : t.stickers;
        if ((0, s.s)(t)) T = L.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
        else if (null != t.activity && null != t.application)
          T =
            t.activity.type === R.mFx.JOIN
              ? b(
                  e,
                  L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  L.Z.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN,
                ).format({ user: I, game: t.application.name })
              : t.activity.type === R.mFx.JOIN_REQUEST
                ? b(
                    e,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    L.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                  ).format({ user: I, game: t.application.name })
                : "";
        else if (null != t.activity && t.activity.type === R.mFx.LISTEN)
          T = b(
            e,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN,
          ).format({ user: I });
        else if (null != O && O.length > 0)
          T = L.Z.Messages.STICKER_NOTIFICATION_BODY.format({
            stickerName: O[0].name,
          });
        else if (t.type === R.uaV.PREMIUM_REFERRAL)
          T = L.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
            username: p.ZP.getName(n),
          });
        else if (null != t.poll)
          T = L.Z.Messages.POLL_SENT_NOTIFICATION.format({
            question: t.poll.question.text,
          });
        else if (t.type === R.uaV.POLL_RESULT) {
          let e =
              null === (_ = t.embeds) || void 0 === _
                ? void 0
                : null === (r = _[0]) || void 0 === r
                  ? void 0
                  : null === (a = r.fields) || void 0 === a
                    ? void 0
                    : a.find((e) => "poll_question_text" === e.name),
            n =
              null !== (c = null == e ? void 0 : e.value) && void 0 !== c
                ? c
                : "";
          T = L.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
        } else
          T =
            0 !== A.length && e.type === R.d4z.DM && A.startsWith(U)
              ? null !==
                  (E = (function (e) {
                    let t = h.default.getCurrentUser();
                    return null == t
                      ? null
                      : [
                            "".concat(
                              L.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format(
                                { username: p.ZP.getName(t) },
                              ),
                            ),
                            "".concat(
                              L.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format(
                                { username: p.ZP.getName(t) },
                              ),
                            ),
                            "".concat(
                              L.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format(
                                { username: p.ZP.getName(t) },
                              ),
                            ),
                            "".concat(
                              L.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format(
                                { username: p.ZP.getName(t) },
                              ),
                            ),
                          ].some((t) => e.startsWith("".concat(U).concat(t)))
                        ? L.Z.Messages.USER_PROFILE_NOTIFICATION_BODY
                        : null;
                  })(A)) && void 0 !== E
                ? E
                : u.ZP.unparse(A, e.id, !0)
              : u.ZP.unparse(A, e.id, !0);
        return (
          0 === T.length &&
            (T = (function (e) {
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
                (0, m.yE)(
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
          { icon: n.getAvatarURL(e.guild_id, 128), title: N, body: T }
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
        _ = n(626135),
        c = n(358085),
        E = n(557177),
        T = n(998502),
        I = n(981631);
      function f(e, t, n) {
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
      let g = c.isPlatformEmbedded && (0, c.isWindows)(),
        N = g && 10 > parseFloat(u.Z.os.release),
        S = !0;
      if (g && !N) {
        let [e, , t] = u.Z.os.release.split(".");
        S = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let C =
          (g && S) ||
          ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
          ("Firefox" === a().name && 52 > parseFloat(a().version)),
        A = s().throttle(E.GN, 1e3, { leading: !0 });
      function O() {
        T.ZP.flashFrame(!1);
      }
      g &&
        (window.addEventListener("focus", O), T.ZP.on("MAIN_WINDOW_FOCUS", O));
      let Z = window.Notification;
      N &&
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
            f(this, "id", Z._id++),
              f(this, "title", void 0),
              f(this, "body", void 0),
              f(this, "icon", void 0),
              f(this, "onshow", function () {}),
              f(this, "onclick", function () {}),
              f(this, "onclose", function () {}),
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
        f(i, "permission", "granted"),
        f(i, "_id", 0),
        (Z = i));
      function h() {
        return null != Z && "granted" === Z.permission;
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
          !h() ||
          (c.isPlatformEmbedded && !T.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: h,
        requestPermission: function (e) {
          null != Z &&
            Z.requestPermission(() => {
              null != e && e(h());
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
          let f =
            null !== (d = null == l ? void 0 : l.tag) && void 0 !== d
              ? d
              : null;
          (0, c.isLinux)() && (n = s().escape(n));
          let N = { icon: e, body: n, tag: f, silent: !0 };
          g && r.Z.taskbarFlash && T.ZP.flashFrame(!0);
          try {
            E = new Z(t, N);
          } catch (e) {
            return null;
          }
          return (null === (o = l.onShown) || void 0 === o || o.call(l),
          !l.omitViewTracking && _.default.track(I.rMx.NOTIFICATION_VIEWED, i),
          (E.onclick = () => {
            var e;
            c.isPlatformEmbedded ? T.ZP.focus() : (window.focus(), E.close()),
              !l.omitClickTracking &&
                _.default.track(I.rMx.NOTIFICATION_CLICKED, i),
              null === (e = l.onClick) || void 0 === e || e.call(l);
          }),
          C && setTimeout(() => E.close(), 5e3),
          S)
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
//# sourceMappingURL=b5d4aa41d3624296ec33.js.map
