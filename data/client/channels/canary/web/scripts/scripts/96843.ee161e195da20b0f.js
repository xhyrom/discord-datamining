"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96843"],
  {
    608598(t) {
      t.exports = "/assets/dbf950ebc5dc2bc5.png";
    },
    571524(t, e, n) {
      n.d(e, { A: () => a, h: () => l });
      let i = (0, n(945810).mj)({
        name: "2026-02-gdm-all-reaction-notifications",
        kind: "user",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 } },
      });
      function l(t) {
        return i.useConfig({ location: t });
      }
      let a = i;
    },
    783592(t, e, n) {
      n.d(e, { A: () => h });
      var i = n(17928),
        l = n(228366),
        a = n(294857),
        r = n(427358),
        o = n(290863),
        u = n(287809),
        s = n(652215);
      let d = !1,
        c = {},
        f = {};
      function A(t) {
        let e = !1;
        return (
          t.forEach((t) => {
            e = !1 !== g(t) || e;
          }),
          e
        );
      }
      function _(t) {
        let e = f[t];
        if (null == e) return !1;
        let n = e.gameId;
        return (
          null != c[n] &&
            ((c = { ...c }),
            delete c[n][t],
            0 === Object.values(c[n]).length && delete c[n]),
          (f = { ...f }),
          delete f[t],
          !0
        );
      }
      function g(t) {
        let { user: e, activities: n } = t;
        if (null == e) return !1;
        let i = n.filter((t) => t.type !== s.$pd.CUSTOM_STATUS);
        if (0 === i.length) return _(e.id);
        let l = !1;
        return (
          i.forEach((t) => {
            (function (t, e) {
              let n = (0, a.A)(t);
              if (null == n) return _(e.id);
              let i = f[e.id];
              null != i && i.gameId !== n && _(e.id);
              let l = t.timestamps?.start ?? Date.now(),
                r = { userId: e.id, activity: t, startedPlaying: l };
              return (
                (c = { ...c, [n]: { ...c[n], [r.userId]: r } }),
                (f = {
                  ...f,
                  [r.userId]: { gameId: n, startedPlaying: r.startedPlaying },
                }),
                !0
              );
            })(t, e) && (l = !0);
          }),
          l
        );
      }
      function E() {
        let t,
          e = !1;
        return (
          r.A.shouldFetch() ||
            d ||
            ((c = {}),
            (f = {}),
            (t = !1),
            o.A.getUserIds().forEach((e) => {
              let n = u.default.getUser(e);
              null != n &&
                (t = g({ user: n, activities: o.A.getActivities(e) }) || t);
            }),
            (e = t)),
          (d = !r.A.shouldFetch()),
          e
        );
      }
      class N extends i.Ay.Store {
        static displayName = "NowPlayingStore";
        initialize() {
          this.waitFor(o.A, r.A, u.default), this.syncWith([r.A], E);
        }
        get games() {
          return c;
        }
        get usersPlaying() {
          return f;
        }
        get gameIds() {
          return Object.keys(c);
        }
        getNowPlaying(t) {
          return c[t];
        }
        getUserGame(t) {
          return f[t];
        }
      }
      let h = new N(l.h, {
        CONNECTION_OPEN: function () {
          (c = {}), (f = {});
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (t) {
          let { guilds: e, presences: n } = t,
            i = !1;
          return (
            e.forEach((t) => {
              A(t.presences) && (i = !0);
            }),
            A(n) && (i = !0),
            i
          );
        },
        LOGOUT: function () {
          (c = {}), (f = {});
        },
        PRESENCE_UPDATES: function (t) {
          let { updates: e } = t;
          return e.map((t) => g(t)).some((t) => t);
        },
        PRESENCES_REPLACE: function (t) {
          let { presences: e } = t;
          return A(e);
        },
      });
    },
    530789(t, e, n) {
      n.d(e, { pD: () => ti, cH: () => tn }), n(321073);
      var i = n(136722),
        l = n(17928),
        a = n(506774),
        r = n(228366),
        o = n(308528),
        u = n(367513),
        s = n(686956),
        d = n(264686),
        c = n(956793),
        f = n(77729),
        A = n(883600),
        _ = n(47167),
        g = n(435470),
        E = n(707592),
        N = n(22007),
        h = n(380335),
        T = n(320095),
        C = n(535586),
        I = n(938005),
        S = n(571524),
        p = n(181370),
        m = n.n(p),
        y = n(695515),
        O = n(976860),
        U = n(378570),
        P = n(790535),
        D = n(446600),
        R = n(747926),
        v = n(253932),
        k = n(718446),
        w = n(260509),
        G = n(734057),
        L = n(71393),
        V = n(232835),
        b = n(803224),
        F = n(576705),
        H = n(222823),
        W = n(994500),
        M = n(309010),
        x = n(461213),
        B = n(351906),
        Y = n(287809),
        j = n(977997),
        J = n(954571),
        q = n(562153),
        X = n(723702),
        K = n(427262),
        $ = n(756876),
        z = n(652215),
        Z = n(988794),
        Q = n(672396),
        tt = n(355097),
        te = n(985018);
      let tn = "message1",
        ti = 0.4,
        tl = f.A?.features.supports("notifications") ? 20 : 1,
        ta = "discord_dismissed_notification_shown",
        tr = document.hasFocus(),
        to = null,
        tu = new Set(),
        ts = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        td = new (class {
          _channels = {};
          track(t, e, n) {
            let i = this._channels[t];
            for (
              null == i && ((i = []), (this._channels[t] = i)),
                i.push({ notification: e, trackingProps: n });
              i.length > tl;

            ) {
              let t = i.shift();
              t?.notification?.close != null &&
                (t.notification.close(),
                J.default.track(z.HAw.NOTIFICATION_ACTION, {
                  action: "REMOVE",
                  ...t.trackingProps,
                }));
            }
          }
          clearChannel(t) {
            let e = this._channels[t];
            null != e &&
              (delete this._channels[t],
              e.forEach((t) => {
                let { notification: e, trackingProps: n } = t;
                e.close(),
                  J.default.track(z.HAw.NOTIFICATION_ACTION, {
                    action: "ACK",
                    ...n,
                  });
              }));
          }
        })();
      function tc() {
        return !!(
          b.A.getDesktopType() === z.nRU.NEVER ||
          x.A.getStatus() === z.clD.DND ||
          v.NO.getSetting() ||
          y.A.isCurrentUserInRestrictedHours()
        );
      }
      function tf(t) {
        return null != j.A.getVoiceStateForChannel(t);
      }
      class tA extends l.Ay.Store {
        static displayName = "NotificationStore";
        initialize() {
          this.waitFor(
            A.A,
            G.A,
            y.A,
            L.A,
            h.A,
            V.A,
            b.A,
            F.A,
            W.A,
            M.A,
            x.A,
            D.A,
            B.A,
            Y.default,
            j.A,
          );
        }
      }
      new tA(
        r.h,
        __OVERLAY__
          ? {}
          : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                let { enabled: e } = t;
                e !== z.kCE.ENABLED ||
                  X.isPlatformEmbedded ||
                  $.A.showNotification(
                    n(705194),
                    te.intl.string(te.t.VSgOVg),
                    te.intl.string(te.t["1UJvqc"]),
                    { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                    {
                      sound: tn,
                      volume: ti,
                      tag: "hello",
                      onClick: () => {
                        window.focus();
                      },
                      isUserAvatar: !1,
                    },
                  );
              },
              NOTIFICATION_CREATE: function (t) {
                let {
                  icon: e,
                  title: n,
                  body: i,
                  trackingProps: l,
                  options: a,
                } = t;
                return !tc() && ($.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                if ((tr = t.focused)) {
                  let t = M.A.getChannelId();
                  null != t && td.clearChannel(t);
                }
              },
              MESSAGE_CREATE: function (t) {
                let { channelId: e, message: i, optimistic: l } = t;
                if (l) return !1;
                let a = G.A.getChannel(e),
                  o = Y.default.getUser(i.author?.id),
                  s = Y.default.getCurrentUser();
                if (null == a || null == o || null == s) return !1;
                let c = (0, I.lx)(i, e, !tr),
                  f =
                    b.A.getNotifyMessagesInSelectedChannel() && (0, I.kY)(i, e);
                if (
                  (!c && !f) ||
                  y.A.isCurrentUserInRestrictedHours() ||
                  (i.type === z.lAJ.CHANGELOG &&
                    (null == i.changelog_id ||
                      A.A.latestChangelogId() !== i.changelog_id))
                )
                  return !1;
                let _ = !b.A.isSoundDisabled(tn);
                if (
                  (f &&
                    (_ && $.A.playNotificationSound("message3", 0.4), !tr)) ||
                  !c
                )
                  return !1;
                let g = n(773371).default,
                  E = n(592598).A;
                if (
                  null != g.getFocusedPID() &&
                  !E.isNotificationDisabled(Q.KS.TextChat) &&
                  !B.A.disableNotifications
                )
                  return !1;
                let {
                    icon: N,
                    title: h,
                    body: S,
                    emoji: p,
                  } = (0, I.TB)(a, i, o),
                  O = !((t) => {
                    let e;
                    return (
                      null != t &&
                      ((e = m().v3(String(t))) < 0 && (e += 0x100000000),
                      e % 0x7fffffff < 21474836.47)
                    );
                  })(s?.id);
                if (
                  (r.h.dispatch({
                    type: "RPC_NOTIFICATION_CREATE",
                    channelId: a.id,
                    message: i,
                    icon: N,
                    title: h,
                    body: S,
                  }),
                  (0, C.n)(i, a.guild_id),
                  b.A.getDesktopType() === z.nRU.NEVER)
                )
                  return _ && $.A.playNotificationSound(tn, ti), !1;
                let P = V.A.getMessage(e, i.id) ?? (0, T.rh)(i);
                $.A.showNotification(
                  N,
                  h,
                  S,
                  {
                    notif_type: "MESSAGE_CREATE",
                    notif_user_id: i.author?.id,
                    message_id: i.id,
                    message_type: i.type,
                    channel_id: a.id,
                    channel_type: a.type,
                    guild_id: a.guild_id,
                    badge: (0, H.Wm)(P, s),
                  },
                  {
                    omitViewTracking: O,
                    tag: i.id,
                    sound: _ ? tn : void 0,
                    volume: ti,
                    onClick() {
                      (0, U.iN)(a.id),
                        (a.type === z.rbe.GUILD_VOICE ||
                          a.type === z.rbe.GUILD_STAGE_VOICE) &&
                          u.A.updateChatOpen(a.id, !0),
                        d.default.clickedNotification();
                    },
                    isUserAvatar: !0,
                    messageRecord: P,
                    fallbackDeepLink: (0, $.I)(
                      z.BVt.CHANNEL(a.guild_id, a.id, i.id),
                    ),
                    emoji: p,
                  },
                ).then((t) => {
                  null != t && td.track(a.id, t.notification, t.trackingProps);
                });
              },
              CHANNEL_SELECT: function (t) {
                let { channelId: e } = t;
                return null != e && td.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                let { channelId: e } = t;
                return td.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                let { userId: e, activity: n } = t;
                if (tc() || n.type !== z.$pd.PLAYING) return !1;
                {
                  let t = Y.default.getUser(e);
                  if (null == t) return !1;
                  let i = K.Ay.getName(t),
                    l = n.name,
                    a = t.getAvatarURL(void 0, 128),
                    r = te.intl.string(te.t.XoTWsI),
                    u = te.intl.formatToPlainString(te.t.o4Aipn, {
                      username: i,
                      gameName: l,
                    });
                  return (
                    $.A.showNotification(
                      a,
                      r,
                      u,
                      {
                        notif_type: "ACTIVITY_START",
                        activity_type: z.$pd.PLAYING,
                        notif_user_id: e,
                        activity_name: l,
                      },
                      {
                        sound: "message2",
                        playSoundIfDisabled: !1,
                        volume: 0.4,
                        onClick() {
                          o.A.openPrivateChannel({ recipientIds: e });
                        },
                        isUserAvatar: !0,
                      },
                    ),
                    !1
                  );
                }
              },
              VOICE_STATE_UPDATES: function (t) {
                let { voiceStates: e } = t;
                if (tc()) return;
                let n = Y.default.getCurrentUser();
                if (null == n) return;
                let i = e.find((t) => t.userId === n.id);
                if (null == i) return;
                let {
                  channelId: l,
                  guildId: a,
                  suppress: r,
                  requestToSpeakTimestamp: o,
                } = i;
                if (null == l || null == a || !(!r && null != o)) return;
                let u = L.A.getGuild(a),
                  s = G.A.getChannel(l),
                  d = D.A.getStageInstanceByChannel(l);
                null != u &&
                  null != s &&
                  null != d &&
                  $.A.showNotification(
                    (0, w.Iv)(u, 128),
                    (0, _.m1)(s, Y.default, W.A),
                    te.intl.formatToPlainString(te.t.sqnsSP, {
                      channelName: (0, _.m1)(s, Y.default, W.A),
                      channelTopic: d?.topic,
                    }),
                    { notif_type: "Stage Speak Invite" },
                    { isUserAvatar: !1 },
                  );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                let { instance: e } = t;
                if (tc() || !e.send_start_notification || tf(e.channel_id))
                  return !1;
                let n = Y.default.getCurrentUser(),
                  l = L.A.getGuild(e.guild_id),
                  a = G.A.getChannel(e.channel_id),
                  r = Y.default.getUser(e.host_id);
                if (
                  null == n ||
                  null == a ||
                  null == l ||
                  null == r ||
                  !(0, I.Wv)(n, r, a) ||
                  !F.A.can(i.kg(z.xBc.CONNECT, z.xBc.VIEW_CHANNEL), a) ||
                  tu.has(e.id)
                )
                  return !1;
                tu.add(e.id),
                  $.A.showNotification(
                    (0, w.Iv)(l, 128),
                    te.intl.formatToPlainString(te.t.bZ4Okd, {
                      guildName: l.name,
                    }),
                    te.intl.formatToPlainString(te.t.qTelnO, {
                      username: q.Ay.getName(l.id, a.id, r),
                      topic: e.topic,
                    }),
                    {
                      notif_type: "STAGE_INSTANCE_CREATE",
                      guild_id: l.id,
                      channel_id: a.id,
                    },
                    {
                      onClick() {
                        (0, P.av)(a);
                      },
                      isUserAvatar: !1,
                    },
                  );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                let { instance: e } = t;
                tu.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                let { guildScheduledEvent: e } = t;
                if (tc() || null == e.notification_type) return !1;
                e.notification_type === Z.b8.EVENT_START &&
                  (e.entity_type === Z.Ps.STAGE_INSTANCE ||
                  e.entity_type === Z.Ps.VOICE
                    ? (function (t) {
                        if (tc()) return;
                        let e = t.channel_id;
                        if (null == e || tf(e)) return;
                        let n = Y.default.getCurrentUser(),
                          l = L.A.getGuild(t.guild_id),
                          a = G.A.getChannel(t.channel_id),
                          r = Y.default.getUser(t.host_id);
                        null != n &&
                          null != a &&
                          null != l &&
                          null != r &&
                          F.A.can(i.kg(z.xBc.CONNECT, z.xBc.VIEW_CHANNEL), a) &&
                          $.A.showNotification(
                            (0, w.Iv)(l, 128),
                            te.intl.formatToPlainString(te.t.bOu6Wn, {
                              guildName: l.name,
                            }),
                            te.intl.formatToPlainString(te.t.GV9L8u, {
                              topic: t.name,
                              username: q.Ay.getName(l.id, a.id, r),
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: l.id,
                              channel_id: a.id,
                            },
                            {
                              onClick() {
                                t.entity_type === Z.Ps.STAGE_INSTANCE &&
                                  (0, P.av)(a),
                                  t.entity_type === Z.Ps.VOICE &&
                                    c.default.selectVoiceChannel(a.id);
                              },
                              isUserAvatar: !1,
                            },
                          );
                      })(e)
                    : e.entity_type === Z.Ps.EXTERNAL &&
                      (function (t) {
                        if (tc()) return;
                        let e = Y.default.getCurrentUser(),
                          n = L.A.getGuild(t.guild_id);
                        null == e ||
                          null == n ||
                          $.A.showNotification(
                            (0, w.Iv)(n, 128),
                            te.intl.formatToPlainString(te.t.bOu6Wn, {
                              guildName: n.name,
                            }),
                            te.intl.formatToPlainString(te.t.mYyaRB, {
                              topic: t.name,
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: n.id,
                            },
                            {
                              onClick() {
                                s.A.transitionToGuildSync(t.guild_id),
                                  (0, E.uR)({ eventId: t.id });
                              },
                              isUserAvatar: !1,
                            },
                          );
                      })(e));
              },
              THREAD_CREATE: function (t) {
                let { channel: e, isNewlyCreated: n } = t;
                if (tc()) return !1;
                let i = G.A.getChannel(e.parent_id);
                if (
                  null == i ||
                  !z.kvI.GUILD_THREADS_ONLY.has(i.type) ||
                  !n ||
                  !(0, I.q1)(e, i, !tr)
                )
                  return !1;
                let { author: l, user: a } = (0, g.tY)(e);
                if (null == a) return !1;
                let r = L.A.getGuild(i.guild_id);
                if (null == r) return !1;
                let o = te.intl.formatToPlainString(te.t["2IGVl5"], {
                    channelName: (0, _.m1)(i, Y.default, W.A),
                    guildName: r.name,
                  }),
                  u = te.intl.formatToPlainString(te.t.jPhTvT, {
                    channelName: (0, _.m1)(e, Y.default, W.A),
                    userUsername: l?.nick ?? a?.username,
                  }),
                  s = a.getAvatarURL(void 0, 128);
                $.A.showNotification(
                  s,
                  o,
                  u,
                  { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                  {
                    onClick() {
                      (0, R.JA)(e);
                    },
                    isUserAvatar: !0,
                  },
                );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                let e,
                  {
                    icon: n,
                    title: i,
                    body: l,
                    route: a,
                    trackingType: r,
                    tag: o,
                  } = t;
                if (
                  tc() ||
                  null == i ||
                  null == l ||
                  null == r ||
                  "reactions_push_notification" === r.toLowerCase()
                )
                  return !1;
                $.A.showNotification(
                  n,
                  i,
                  l,
                  { notif_type: r },
                  {
                    onClick() {
                      null != a &&
                        ((0, N.A)(a), d.default.clickedNotification());
                    },
                    tag: o,
                    isUserAvatar: !1,
                  },
                ).then((t) => {
                  null != t &&
                    null != e &&
                    td.track(e, t.notification, t.trackingProps);
                });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                let {
                  icon: e,
                  title: n,
                  body: i,
                  route: l,
                  trackingType: a,
                  message: r,
                  reactorUserId: o,
                } = t;
                if (tc() || null == n || null == i || null == a) return !1;
                let u = r.channel_id;
                if (
                  null == u ||
                  (M.A.getCurrentlySelectedChannelId() === u && tr)
                )
                  return !1;
                let s = G.A.getChannel(u);
                if (null == s) return !1;
                if (s.type === z.rbe.GROUP_DM) {
                  let t = Y.default.getCurrentUser();
                  if (
                    r.author?.id !== t?.id &&
                    !S.A.getConfig({ location: "desktopNotification" })
                      .showSettingsToggle
                  )
                    return !1;
                }
                $.A.showNotification(
                  e,
                  n,
                  i,
                  { notif_type: a, notif_user_id: o, message_id: r.id },
                  {
                    onClick() {
                      null != l &&
                        ((0, N.A)(l), d.default.clickedNotification());
                    },
                    isUserAvatar: !0,
                  },
                ).then((t) => {
                  null != t &&
                    null != u &&
                    td.track(u, t.notification, t.trackingProps);
                });
              },
              WINDOW_HIDDEN: function () {
                let t = (0, X.isWindows)(),
                  e = (0, X.isLinux)();
                if (!(!a.w.get(ta, !1) && X.isPlatformEmbedded && (t || e)))
                  return !1;
                let i = !1;
                return (
                  null != to && (i = ts.includes(to)),
                  !!i &&
                    ($.A.showNotification(
                      n(608598),
                      te.intl.string(te.t.VSgOVg),
                      te.intl.string(te.t["+J/F66"]),
                      { notif_type: "WINDOW_HIDDEN" },
                      {
                        overrideStreamerMode: !0,
                        onClick: () => {
                          (0, O.pX)(
                            (0, k.settingsPathToRoute)(
                              t ? tt.od.WINDOWS : tt.od.LINUX,
                            ),
                          );
                        },
                        onShown: () => {
                          a.w.set(ta, !0);
                        },
                        isUserAvatar: !1,
                      },
                    ),
                    !1)
                );
              },
              LOGOUT: function () {
                return a.w.remove(ta), !1;
              },
              CONNECTION_OPEN: function (t) {
                let { countryCode: e, guilds: n } = t;
                (to = e),
                  tu.clear(),
                  n.forEach((t) =>
                    t.stage_instances.forEach((t) => tu.add(t.id)),
                  );
              },
              MESSAGE_REMINDER_DUE: function (t) {
                let { savedMessage: e } = t;
                if (tc()) return !1;
                let n = e.message;
                if (null == n || null == n.author) return !1;
                let i = G.A.getChannel(e.saveData.channelId);
                if (null == i) return !1;
                let { icon: l, body: a } = (0, I.TB)(i, n, n.author);
                $.A.showNotification(
                  l,
                  te.intl.string(te.t.IjZJB5),
                  a,
                  { notif_type: "MESSAGE_REMINDER_DUE" },
                  {
                    onClick() {
                      (0, N.A)(z.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                    },
                    isUserAvatar: !0,
                  },
                );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                let { title: e, subtitle: i } = t;
                if (tc()) return !1;
                $.A.showNotification(
                  n(608598),
                  e,
                  i,
                  { notif_type: "RESTRICTED_HOURS_WARNING" },
                  { isUserAvatar: !1 },
                );
              },
            },
      );
    },
  },
]);
//# sourceMappingURL=96843.ee161e195da20b0f.js.map
