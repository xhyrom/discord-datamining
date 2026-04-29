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
      n.d(e, { pD: () => tl, cH: () => ti }), n(321073);
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
        Y = n(870570),
        j = n(287809),
        J = n(977997),
        q = n(954571),
        X = n(562153),
        K = n(723702),
        $ = n(427262),
        z = n(756876),
        Z = n(652215),
        Q = n(988794),
        tt = n(672396),
        te = n(355097),
        tn = n(985018);
      let ti = "message1",
        tl = 0.4,
        ta = f.A?.features.supports("notifications") ? 20 : 1,
        tr = "discord_dismissed_notification_shown",
        to = document.hasFocus(),
        tu = null,
        ts = new Set(),
        td = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
        tc = new (class {
          _channels = {};
          track(t, e, n) {
            let i = this._channels[t];
            for (
              null == i && ((i = []), (this._channels[t] = i)),
                i.push({ notification: e, trackingProps: n });
              i.length > ta;

            ) {
              let t = i.shift();
              t?.notification?.close != null &&
                (t.notification.close(),
                q.default.track(Z.HAw.NOTIFICATION_ACTION, {
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
                  q.default.track(Z.HAw.NOTIFICATION_ACTION, {
                    action: "ACK",
                    ...n,
                  });
              }));
          }
        })();
      function tf() {
        return !!(
          b.A.getDesktopType() === Z.nRU.NEVER ||
          x.A.getStatus() === Z.clD.DND ||
          v.NO.getSetting() ||
          y.A.isCurrentUserInRestrictedHours()
        );
      }
      function tA(t) {
        return null != J.A.getVoiceStateForChannel(t);
      }
      class t_ extends l.Ay.Store {
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
            Y.A,
            j.default,
            J.A,
          );
        }
      }
      new t_(
        r.h,
        __OVERLAY__
          ? {}
          : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                let { enabled: e } = t;
                e !== Z.kCE.ENABLED ||
                  K.isPlatformEmbedded ||
                  z.A.showNotification(
                    n(705194),
                    tn.intl.string(tn.t.VSgOVg),
                    tn.intl.string(tn.t["1UJvqc"]),
                    { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                    {
                      sound: ti,
                      volume: tl,
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
                return !tf() && (z.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                if ((to = t.focused)) {
                  let t = M.A.getChannelId();
                  null != t && tc.clearChannel(t);
                }
              },
              MESSAGE_CREATE: function (t) {
                let { channelId: e, message: i, optimistic: l } = t;
                if (l) return !1;
                let a = G.A.getChannel(e),
                  o = j.default.getUser(i.author?.id),
                  s = j.default.getCurrentUser();
                if (null == a || null == o || null == s) return !1;
                let c = (0, I.lx)(i, e, !to),
                  f =
                    b.A.getNotifyMessagesInSelectedChannel() && (0, I.kY)(i, e);
                if (
                  (!c && !f) ||
                  y.A.isCurrentUserInRestrictedHours() ||
                  Y.A.hasAction() ||
                  (i.type === Z.lAJ.CHANGELOG &&
                    (null == i.changelog_id ||
                      A.A.latestChangelogId() !== i.changelog_id))
                )
                  return !1;
                let _ = !b.A.isSoundDisabled(ti);
                if (
                  (f &&
                    (_ && z.A.playNotificationSound("message3", 0.4), !to)) ||
                  !c
                )
                  return !1;
                let g = n(773371).default,
                  E = n(592598).A;
                if (
                  null != g.getFocusedPID() &&
                  !E.isNotificationDisabled(tt.KS.TextChat) &&
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
                  b.A.getDesktopType() === Z.nRU.NEVER)
                )
                  return _ && z.A.playNotificationSound(ti, tl), !1;
                let P = V.A.getMessage(e, i.id) ?? (0, T.rh)(i);
                z.A.showNotification(
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
                    sound: _ ? ti : void 0,
                    volume: tl,
                    onClick() {
                      (0, U.iN)(a.id),
                        (a.type === Z.rbe.GUILD_VOICE ||
                          a.type === Z.rbe.GUILD_STAGE_VOICE) &&
                          u.A.updateChatOpen(a.id, !0),
                        d.default.clickedNotification();
                    },
                    isUserAvatar: !0,
                    messageRecord: P,
                    fallbackDeepLink: (0, z.I)(
                      Z.BVt.CHANNEL(a.guild_id, a.id, i.id),
                    ),
                    emoji: p,
                  },
                ).then((t) => {
                  null != t && tc.track(a.id, t.notification, t.trackingProps);
                });
              },
              CHANNEL_SELECT: function (t) {
                let { channelId: e } = t;
                return null != e && tc.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                let { channelId: e } = t;
                return tc.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                let { userId: e, activity: n } = t;
                if (tf() || n.type !== Z.$pd.PLAYING) return !1;
                {
                  let t = j.default.getUser(e);
                  if (null == t) return !1;
                  let i = $.Ay.getName(t),
                    l = n.name,
                    a = t.getAvatarURL(void 0, 128),
                    r = tn.intl.string(tn.t.XoTWsI),
                    u = tn.intl.formatToPlainString(tn.t.o4Aipn, {
                      username: i,
                      gameName: l,
                    });
                  return (
                    z.A.showNotification(
                      a,
                      r,
                      u,
                      {
                        notif_type: "ACTIVITY_START",
                        activity_type: Z.$pd.PLAYING,
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
                if (tf()) return;
                let n = j.default.getCurrentUser();
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
                  z.A.showNotification(
                    (0, w.Iv)(u, 128),
                    (0, _.m1)(s, j.default, W.A),
                    tn.intl.formatToPlainString(tn.t.sqnsSP, {
                      channelName: (0, _.m1)(s, j.default, W.A),
                      channelTopic: d?.topic,
                    }),
                    { notif_type: "Stage Speak Invite" },
                    { isUserAvatar: !1 },
                  );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                let { instance: e } = t;
                if (tf() || !e.send_start_notification || tA(e.channel_id))
                  return !1;
                let n = j.default.getCurrentUser(),
                  l = L.A.getGuild(e.guild_id),
                  a = G.A.getChannel(e.channel_id),
                  r = j.default.getUser(e.host_id);
                if (
                  null == n ||
                  null == a ||
                  null == l ||
                  null == r ||
                  !(0, I.Wv)(n, r, a) ||
                  !F.A.can(i.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), a) ||
                  ts.has(e.id)
                )
                  return !1;
                ts.add(e.id),
                  z.A.showNotification(
                    (0, w.Iv)(l, 128),
                    tn.intl.formatToPlainString(tn.t.bZ4Okd, {
                      guildName: l.name,
                    }),
                    tn.intl.formatToPlainString(tn.t.qTelnO, {
                      username: X.Ay.getName(l.id, a.id, r),
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
                ts.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                let { guildScheduledEvent: e } = t;
                if (tf() || null == e.notification_type) return !1;
                e.notification_type === Q.b8.EVENT_START &&
                  (e.entity_type === Q.Ps.STAGE_INSTANCE ||
                  e.entity_type === Q.Ps.VOICE
                    ? (function (t) {
                        if (tf()) return;
                        let e = t.channel_id;
                        if (null == e || tA(e)) return;
                        let n = j.default.getCurrentUser(),
                          l = L.A.getGuild(t.guild_id),
                          a = G.A.getChannel(t.channel_id),
                          r = j.default.getUser(t.host_id);
                        null != n &&
                          null != a &&
                          null != l &&
                          null != r &&
                          F.A.can(i.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), a) &&
                          z.A.showNotification(
                            (0, w.Iv)(l, 128),
                            tn.intl.formatToPlainString(tn.t.bOu6Wn, {
                              guildName: l.name,
                            }),
                            tn.intl.formatToPlainString(tn.t.GV9L8u, {
                              topic: t.name,
                              username: X.Ay.getName(l.id, a.id, r),
                            }),
                            {
                              notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                              guild_id: l.id,
                              channel_id: a.id,
                            },
                            {
                              onClick() {
                                t.entity_type === Q.Ps.STAGE_INSTANCE &&
                                  (0, P.av)(a),
                                  t.entity_type === Q.Ps.VOICE &&
                                    c.default.selectVoiceChannel(a.id);
                              },
                              isUserAvatar: !1,
                            },
                          );
                      })(e)
                    : e.entity_type === Q.Ps.EXTERNAL &&
                      (function (t) {
                        if (tf()) return;
                        let e = j.default.getCurrentUser(),
                          n = L.A.getGuild(t.guild_id);
                        null == e ||
                          null == n ||
                          z.A.showNotification(
                            (0, w.Iv)(n, 128),
                            tn.intl.formatToPlainString(tn.t.bOu6Wn, {
                              guildName: n.name,
                            }),
                            tn.intl.formatToPlainString(tn.t.mYyaRB, {
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
                if (tf()) return !1;
                let i = G.A.getChannel(e.parent_id);
                if (
                  null == i ||
                  !Z.kvI.GUILD_THREADS_ONLY.has(i.type) ||
                  !n ||
                  !(0, I.q1)(e, i, !to)
                )
                  return !1;
                let { author: l, user: a } = (0, g.tY)(e);
                if (null == a) return !1;
                let r = L.A.getGuild(i.guild_id);
                if (null == r) return !1;
                let o = tn.intl.formatToPlainString(tn.t["2IGVl5"], {
                    channelName: (0, _.m1)(i, j.default, W.A),
                    guildName: r.name,
                  }),
                  u = tn.intl.formatToPlainString(tn.t.jPhTvT, {
                    channelName: (0, _.m1)(e, j.default, W.A),
                    userUsername: l?.nick ?? a?.username,
                  }),
                  s = a.getAvatarURL(void 0, 128);
                z.A.showNotification(
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
                  tf() ||
                  null == i ||
                  null == l ||
                  null == r ||
                  "reactions_push_notification" === r.toLowerCase()
                )
                  return !1;
                z.A.showNotification(
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
                    tc.track(e, t.notification, t.trackingProps);
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
                if (tf() || null == n || null == i || null == a) return !1;
                let u = r.channel_id;
                if (
                  null == u ||
                  (M.A.getCurrentlySelectedChannelId() === u && to)
                )
                  return !1;
                let s = G.A.getChannel(u);
                if (null == s) return !1;
                if (s.type === Z.rbe.GROUP_DM) {
                  let t = j.default.getCurrentUser();
                  if (
                    r.author?.id !== t?.id &&
                    !S.A.getConfig({ location: "desktopNotification" })
                      .showSettingsToggle
                  )
                    return !1;
                }
                z.A.showNotification(
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
                    tc.track(u, t.notification, t.trackingProps);
                });
              },
              WINDOW_HIDDEN: function () {
                let t = (0, K.isWindows)(),
                  e = (0, K.isLinux)();
                if (!(!a.w.get(tr, !1) && K.isPlatformEmbedded && (t || e)))
                  return !1;
                let i = !1;
                return (
                  null != tu && (i = td.includes(tu)),
                  !!i &&
                    (z.A.showNotification(
                      n(608598),
                      tn.intl.string(tn.t.VSgOVg),
                      tn.intl.string(tn.t["+J/F66"]),
                      { notif_type: "WINDOW_HIDDEN" },
                      {
                        overrideStreamerMode: !0,
                        onClick: () => {
                          (0, O.pX)(
                            (0, k.settingsPathToRoute)(
                              t ? te.od.WINDOWS : te.od.LINUX,
                            ),
                          );
                        },
                        onShown: () => {
                          a.w.set(tr, !0);
                        },
                        isUserAvatar: !1,
                      },
                    ),
                    !1)
                );
              },
              LOGOUT: function () {
                return a.w.remove(tr), !1;
              },
              CONNECTION_OPEN: function (t) {
                let { countryCode: e, guilds: n } = t;
                (tu = e),
                  ts.clear(),
                  n.forEach((t) =>
                    t.stage_instances.forEach((t) => ts.add(t.id)),
                  );
              },
              MESSAGE_REMINDER_DUE: function (t) {
                let { savedMessage: e } = t;
                if (tf()) return !1;
                let n = e.message;
                if (null == n || null == n.author) return !1;
                let i = G.A.getChannel(e.saveData.channelId);
                if (null == i) return !1;
                let { icon: l, body: a } = (0, I.TB)(i, n, n.author);
                z.A.showNotification(
                  l,
                  tn.intl.string(tn.t.IjZJB5),
                  a,
                  { notif_type: "MESSAGE_REMINDER_DUE" },
                  {
                    onClick() {
                      (0, N.A)(Z.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                    },
                    isUserAvatar: !0,
                  },
                );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                let { title: e, subtitle: i } = t;
                if (tf()) return !1;
                z.A.showNotification(
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
//# sourceMappingURL=96843.0064710aba41bcb3.js.map
