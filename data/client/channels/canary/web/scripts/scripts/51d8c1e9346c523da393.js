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
        c = n(292556),
        _ = n(287734),
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
        p = n(592125),
        D = n(430824),
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
        q = n(689938);
      function z(e, t, n) {
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
            z(this, "_channels", {});
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
          this.waitFor(G.default, p.Z, R.Z, D.Z, h.Z, L.Z, M.Z, F.Z, g.Z);
        }
      }
      z(el, "displayName", "NotificationStore"),
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
                      q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                      q.Z.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY,
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
                  let _ = p.Z.getChannel(o),
                    T = G.default.getUser(
                      null === (t = u.author) || void 0 === t ? void 0 : t.id,
                    ),
                    I = G.default.getCurrentUser();
                  if (null == _ || null == T || _.isBroadcastChannel())
                    return !1;
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
                              null !== (l = _.guild_id) && void 0 !== l
                                ? l
                                : W.aIL,
                              o,
                            )) && void 0 !== s
                          ? s
                          : (0, C.iD)(_.guild_id)
                        : void 0;
                  if ((g && (A && Y.GN("message3", 0.4, void 0, m), !Q)) || !f)
                    return !1;
                  let v = n(808506).Z,
                    D = n(237997).Z;
                  if (
                    null != v.getFocusedPID() &&
                    D.getTextChatNotificationMode() === W.Ypu.ENABLED &&
                    !P.Z.disableNotifications
                  )
                    return !1;
                  let { icon: M, title: L, body: U } = (0, b.Xi)(_, u, T);
                  if (
                    (a.Z.dispatch({
                      type: "RPC_NOTIFICATION_CREATE",
                      channelId: _.id,
                      message: u,
                      icon: M,
                      title: L,
                      body: U,
                    }),
                    (0, N.R)(u, _.guild_id),
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
                      channel_id: _.id,
                      channel_type: _.type,
                      guild_id: _.guild_id,
                    },
                    {
                      omitViewTracking: !0,
                      tag: u.id,
                      sound: A ? X : void 0,
                      soundpack: m,
                      volume: J,
                      onClick() {
                        (0, O.Kh)(_.id),
                          (_.type === W.d4z.GUILD_VOICE ||
                            _.type === W.d4z.GUILD_STAGE_VOICE) &&
                            r.Z.updateChatOpen(_.id, !0),
                          c.default.clickedNotification();
                      },
                    },
                  );
                  null != y && et.track(_.id, y);
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
                      o = q.Z.Messages.NOTIFICATION_TITLE_START_GAME,
                      a = q.Z.Messages.NOTIFICATION_BODY_START_GAME.format({
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
                  let u = D.Z.getGuild(s),
                    r = p.Z.getChannel(l),
                    d = h.Z.getStageInstanceByChannel(l);
                  null != u &&
                    null != r &&
                    null != d &&
                    k.Z.showNotification(
                      u.getIconURL(128),
                      r.name,
                      q.Z.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
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
                    i = D.Z.getGuild(t.guild_id),
                    s = p.Z.getChannel(t.channel_id),
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
                      q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: i.name,
                      }),
                      q.Z.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
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
                            i = D.Z.getGuild(e.guild_id),
                            s = p.Z.getChannel(e.channel_id),
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
                            q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format(
                              { guildName: i.name },
                            ),
                            q.Z.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format(
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
                                    _.default.selectVoiceChannel(s.id);
                              },
                            },
                          );
                        })(t)
                      : t.entity_type === x.WX.EXTERNAL &&
                        !(function (e) {
                          if (en()) return !1;
                          let t = G.default.getCurrentUser(),
                            n = D.Z.getGuild(e.guild_id);
                          if (null == t || null == n) return !1;
                          k.Z.showNotification(
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
                  let l = p.Z.getChannel(n.parent_id);
                  if (
                    null == l ||
                    !W.TPd.GUILD_THREADS_ONLY.has(l.type) ||
                    !i ||
                    !(0, b.FI)(n, l, !Q)
                  )
                    return !1;
                  let { author: s, user: o } = (0, I.MC)(n);
                  if (null == o) return !1;
                  let a = D.Z.getGuild(l.guild_id);
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
                        q.Z.Messages.NOTIFICATION_TITLE_DISCORD,
                        q.Z.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN,
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
        n(653041),
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
        E = n(718107),
        T = n(695346),
        I = n(131704),
        f = n(433355),
        g = n(592125),
        N = n(430824),
        S = n(19780),
        C = n(699516),
        A = n(944486),
        O = n(914010),
        Z = n(885110),
        h = n(9156),
        m = n(594174),
        v = n(630388),
        p = n(5192),
        D = n(352736),
        R = n(51144),
        M = n(981631),
        L = n(124368),
        U = n(689938);
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
            T.QZ.getSetting() ||
            (!i.ignoreNoMessagesSetting && h.ZP.allowNoMessages(n))
          ) && !0
        );
      }
      function P(e, t) {
        var n;
        let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null != e.flags && (0, v.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS))
          return !1;
        let s = g.Z.getChannel(t);
        e.type === M.uaV.THREAD_STARTER_MESSAGE &&
          (s = g.Z.getChannel(null == s ? void 0 : s.parent_id));
        let o = m.default.getCurrentUser(),
          u = m.default.getUser(
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
          let e = A.Z.getChannelId(O.Z.getGuildId());
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
            t !== L.iN.NO_MESSAGES &&
            (t === L.iN.ALL_MESSAGES ||
              (0, r.Hl)({
                rawMessage: e,
                userId: o.id,
                suppressEveryone: !1,
                suppressRoles: !1,
              }))
          );
        }
        {
          let t = !I.tx.has(s.type) || S.Z.getChannelId() === s.id;
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
      function G(e, t) {
        var n;
        if (A.Z.getChannelId(O.Z.getGuildId()) !== t) return !1;
        let i = g.Z.getChannel(t);
        e.type === M.uaV.THREAD_STARTER_MESSAGE &&
          (i = g.Z.getChannel(null == i ? void 0 : i.parent_id));
        let l = m.default.getCurrentUser(),
          s = m.default.getUser(
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
            T.QZ.getSetting() ||
            h.ZP.allowNoMessages(i)
          ) && !0
        );
      }
      function F(e, t) {
        let n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          l = m.default.getCurrentUser(),
          s = m.default.getUser(e.ownerId);
        return (
          !(
            null == t ||
            null == l ||
            null == s ||
            !y(l, s, t, { ignoreStatus: i, ignoreNoMessagesSetting: !0 }) ||
            h.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
          ) &&
          (!!n || A.Z.getChannelId(O.Z.getGuildId()) !== t.id) &&
          h.ZP.getNewForumThreadsCreated(t)
        );
      }
      let w = (e, t, n) =>
        ""
          .concat(e, " (")
          .concat((0, i.F6)(t, m.default, C.Z, !0))
          .concat(
            null != n ? ", ".concat((0, i.F6)(n, m.default, C.Z)) : "",
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
      function k(e, t, n) {
        var o, a, r, c, _, T;
        let I;
        let f = p.ZP.getName(e.getGuildId(), e.id, n),
          S = f;
        switch (e.type) {
          case M.d4z.GUILD_ANNOUNCEMENT:
          case M.d4z.GUILD_TEXT:
          case M.d4z.GUILD_VOICE:
          case M.d4z.ANNOUNCEMENT_THREAD:
          case M.d4z.PUBLIC_THREAD:
          case M.d4z.PRIVATE_THREAD:
            let A = g.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != A
              ? (S = w(S, A, g.Z.getChannel(A.parent_id)))
              : (0, d.Z)(t)
                ? null != N.Z.getGuild(e.getGuildId()) && (S = w(S, e, A))
                : (S = w(S, e, A));
            break;
          case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && S === (0, i.F6)(e, m.default, C.Z)) &&
              (S = ""
                .concat(S, " (")
                .concat((0, i.F6)(e, m.default, C.Z, !0), ")"));
        }
        let O = t.content;
        if ((0, d.Z)(t) && null == (O = D.Z.stringify(t, e)))
          throw (
            (new l.Z("NotificationTextUtils").warn(
              "SystemMessageUtils.stringify(...) could not convert",
              t,
            ),
            Error("failed to stringify system message"))
          );
        let Z = null !== (o = t.sticker_items) && void 0 !== o ? o : t.stickers;
        if ((0, s.s)(t)) I = U.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
        else if (null != t.activity && null != t.application)
          I =
            t.activity.type === M.mFx.JOIN
              ? b(
                  e,
                  U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
                  U.Z.Messages
                    .NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
                  U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN,
                ).format({ user: f, game: t.application.name })
              : t.activity.type === M.mFx.JOIN_REQUEST
                ? b(
                    e,
                    U.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    U.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                    U.Z.Messages
                      .NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
                  ).format({ user: f, game: t.application.name })
                : "";
        else if (null != t.activity && t.activity.type === M.mFx.LISTEN)
          I = b(
            e,
            U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
            U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
            U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN,
          ).format({ user: f });
        else if (null != Z && Z.length > 0)
          I = U.Z.Messages.STICKER_NOTIFICATION_BODY.format({
            stickerName: Z[0].name,
          });
        else if (t.type === M.uaV.PREMIUM_REFERRAL)
          I = U.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
            username: R.ZP.getName(n),
          });
        else if (null != t.poll)
          I = U.Z.Messages.POLL_SENT_NOTIFICATION.format({
            question: t.poll.question.text,
          });
        else if (t.type === M.uaV.POLL_RESULT) {
          let e =
              null === (c = t.embeds) || void 0 === c
                ? void 0
                : null === (r = c[0]) || void 0 === r
                  ? void 0
                  : null === (a = r.fields) || void 0 === a
                    ? void 0
                    : a.find((e) => "poll_question_text" === e.name),
            n =
              null !== (_ = null == e ? void 0 : e.value) && void 0 !== _
                ? _
                : "";
          I = U.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
        } else I = u.ZP.unparse(O, e.id, !0);
        return (
          0 !== O.length &&
            (I =
              null !==
                (T = (function (e) {
                  let t = m.default.getCurrentUser();
                  if (null == t) return null;
                  let {
                    avatarReactReplyEnabled: n,
                    statusReactReplyEnabled: i,
                  } = (0, E.f)({ location: "NotificationTextUtils" });
                  if (!n && !i) return null;
                  let l = [];
                  return (i &&
                    (l.push(
                      "".concat(
                        U.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({
                          username: R.ZP.getName(t),
                        }),
                      ),
                    ),
                    l.push(
                      "".concat(
                        U.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({
                          username: R.ZP.getName(t),
                        }),
                      ),
                    )),
                  n &&
                    (l.push(
                      "".concat(
                        U.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({
                          username: R.ZP.getName(t),
                        }),
                      ),
                    ),
                    l.push(
                      "".concat(
                        U.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({
                          username: R.ZP.getName(t),
                        }),
                      ),
                    )),
                  l.some((t) => e.startsWith("".concat("> -# *").concat(t))))
                    ? U.Z.Messages.USER_PROFILE_NOTIFICATION_BODY
                    : null;
                })(O)) && void 0 !== T
                ? T
                : I),
          0 === I.length &&
            (I = (function (e) {
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
                return U.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
              if (void 0 !== e.attachments && e.attachments.length > 0) {
                let t = e.attachments[0].filename;
                return U.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
                  filename: t,
                });
              }
              return "";
            })(t)),
          { icon: n.getAvatarURL(e.guild_id, 128), title: S, body: I }
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
      let g = _.isPlatformEmbedded && (0, _.isWindows)(),
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
          (_.isPlatformEmbedded && !T.ZP.shouldDisplayNotifications())
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
          (0, _.isLinux)() && (n = s().escape(n));
          let N = { icon: e, body: n, tag: f, silent: !0 };
          g && r.Z.taskbarFlash && T.ZP.flashFrame(!0);
          try {
            E = new Z(t, N);
          } catch (e) {
            return null;
          }
          return (null === (o = l.onShown) || void 0 === o || o.call(l),
          !l.omitViewTracking && c.default.track(I.rMx.NOTIFICATION_VIEWED, i),
          (E.onclick = () => {
            var e;
            _.isPlatformEmbedded ? T.ZP.focus() : (window.focus(), E.close()),
              !l.omitClickTracking &&
                c.default.track(I.rMx.NOTIFICATION_CLICKED, i),
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
//# sourceMappingURL=51d8c1e9346c523da393.js.map
