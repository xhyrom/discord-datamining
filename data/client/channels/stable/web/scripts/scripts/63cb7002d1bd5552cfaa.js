"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26976"],
  {
    415118: function (e, n, t) {
      t.r(n);
      var s = t(200651);
      t(192379);
      var l = t(481060),
        i = t(239091),
        a = t(883385),
        o = t(108843),
        d = t(947440),
        u = t(100527),
        r = t(299206),
        c = t(976192),
        Z = t(276022),
        M = t(777658),
        E = t(858488),
        _ = t(185457),
        f = t(933409),
        N = t(389052),
        g = t(24311),
        I = t(710631),
        m = t(297047),
        A = t(88966),
        C = t(712301),
        D = t(991307),
        U = t(725119),
        x = t(931617),
        b = t(700994),
        O = t(332031),
        T = t(981631),
        L = t(689938);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                showModalItems: a = !0,
                showMediaItems: o = !1,
                showChatItems: u = !0,
                context: h,
                onSelect: v,
              } = e,
              S = {
                page: T.ZY5.GUILD_CHANNEL,
                section: T.jXE.CHAT_USERNAME,
                object: T.qAy.CONTEXT_MENU_ITEM,
              },
              j = (0, U.Z)({ userId: n.id, guildId: t }),
              R = (0, m.Z)(n, t, h),
              p = (0, A.Z)(n.id, h),
              k = (0, O.Z)(n.id),
              V = (0, g.Z)({ user: n, context: h }),
              F = (0, _.Z)({ user: n, guildId: t, context: h }),
              P = (0, E.Z)({ user: n }),
              B = (0, b.Z)(n.id),
              G = (0, D.Z)(n.id),
              y = (0, c.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: S,
                context: h,
              }),
              w = (0, Z.Z)({ user: n, guildId: t }),
              Y = (0, I.Z)({ user: n, guildId: t }),
              W = (0, d.Z)(null, n),
              H = (0, M.Z)(n),
              X = (0, N.Z)({ user: n }),
              q = (0, f.Z)(n, t),
              z = (0, x.Z)(n.id, t),
              K = (0, C.Z)(n, t),
              J = (0, r.Z)({ id: n.id, label: L.Z.Messages.COPY_ID_USER }),
              Q = n.isNonUserBot();
            return (0, s.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: i.Zy,
              "aria-label": L.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: v,
              children: [
                !Q &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)(l.MenuGroup, {
                        children: [a && j, u && R, p, V, a && F, a && P, k],
                      }),
                      o && (0, s.jsx)(l.MenuGroup, { children: B }),
                      (0, s.jsx)(l.MenuGroup, { children: a && W }),
                      (0, s.jsxs)(l.MenuGroup, {
                        children: [o && G, a && y, a && Y, H, w, a && X],
                      }),
                      (0, s.jsx)(l.MenuGroup, { children: q }),
                      (0, s.jsxs)(l.MenuGroup, { children: [z, K] }),
                    ],
                  }),
                (0, s.jsx)(l.MenuGroup, { children: J }),
              ],
            });
          },
          { object: T.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU],
      );
    },
    777658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var s = t(200651),
        l = t(192379),
        i = t(442837),
        a = t(481060),
        o = t(194359),
        d = t(699516),
        u = t(594174),
        r = t(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: Z } = e,
          M = (0, i.e7)(
            [u.default],
            () => {
              var e;
              return (
                (null === (e = u.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === t
              );
            },
            [t],
          ),
          [E, _] = (0, i.Wu)([d.Z], () => [d.Z.isFriend(t), d.Z.isBlocked(t)], [
            t,
          ]),
          [f, N] = l.useState(!1);
        return Z || M
          ? null
          : E
            ? (0, s.jsx)(a.MenuItem, {
                id: "remove-friend",
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, a.openModal)((e) =>
                    (0, s.jsx)(a.ConfirmModal, {
                      header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: r.Z.Messages.REMOVE_FRIEND,
                      cancelText: r.Z.Messages.CANCEL,
                      onConfirm: () => {
                        o.Z.removeFriend(t, { location: n }), N(!1);
                      },
                      ...e,
                      children: (0, s.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: r.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, s.jsx)(a.MenuItem, {
                id: "add-friend",
                label: f
                  ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : r.Z.Messages.ADD_FRIEND,
                action: () => {
                  !f &&
                    (o.Z.addRelationship({
                      userId: t,
                      context: { location: n },
                    }),
                    N(!0));
                },
                disabled: _ || (f && !E),
              });
      }
    },
    858488: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var s = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        a = t(699516),
        o = t(689938);
      function d(e) {
        let { user: n, onAction: d } = e,
          u = n.id,
          [r, c] = (0, l.Wu)(
            [a.Z],
            () => {
              var e;
              return [
                a.Z.isFriend(u),
                null !== (e = a.Z.getNickname(u)) && void 0 !== e ? e : null,
              ];
            },
            [u],
          );
        if (!r) return null;
        let Z =
          null == c
            ? o.Z.Messages.ADD_FRIEND_NICKNAME
            : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, s.jsx)(i.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == d || d(),
              (0, i.openModalLazy)(async () => {
                let { default: e } = await t.e("25070").then(t.bind(t, 670794));
                return (t) => (0, s.jsx)(e, { user: n, nickname: c, ...t });
              });
          },
        });
      }
    },
    185457: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var s = t(200651),
        l = t(192379),
        i = t(481060),
        a = t(906732),
        o = t(531301),
        d = t(171368),
        u = t(314897),
        r = t(246946),
        c = t(626135),
        Z = t(981631),
        M = t(228168),
        E = t(689938);
      function _(e) {
        let { user: n, guildId: t, channelId: _, context: f } = e,
          { id: N } = n,
          { loading: g, note: I } = (0, o.Z)(N),
          m = !g && null != I && I.length > 0,
          A = f === Z.IlC.POPOUT,
          C = l.useContext(c.AnalyticsContext),
          { analyticsLocations: D } = (0, a.ZP)();
        return N === u.default.getId() || r.Z.hidePersonalInformation || A
          ? null
          : (0, s.jsx)(i.MenuItem, {
              id: "note",
              label: g
                ? E.Z.Messages.LOADING_NOTE
                : m
                  ? E.Z.Messages.EDIT_NOTE
                  : E.Z.Messages.ADD_NOTE,
              action: () => {
                (0, d.openUserProfileModal)({
                  userId: n.id,
                  section: M.oh.USER_INFO,
                  subsection: M.Tb.NOTE,
                  guildId: t,
                  channelId: _,
                  sourceAnalyticsLocations: D,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var s = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        a = t(493683),
        o = t(40851),
        d = t(740492),
        u = t(314897),
        r = t(592125),
        c = t(699516),
        Z = t(944486),
        M = t(981631),
        E = t(689938);
      function _(e) {
        let {
            user: n,
            context: _,
            label: f,
            joinCallVideo: N,
            id: g,
            onCall: I,
          } = e,
          m = (0, o.Aq)(),
          A = (0, l.e7)([u.default], () => u.default.getId() === n.id),
          C = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          D = (0, l.e7)(
            [Z.Z, r.Z],
            () => Z.Z.getVoiceChannelId() === r.Z.getDMFromUserId(n.id),
          );
        if (A || _ === M.IlC.POPOUT || D || n.bot || n.isProvisional)
          return null;
        let U = () => {
            null == I || I(),
              a.Z.openPrivateChannel(n.id, !0, N),
              m.dispatch(M.CkL.POPOUT_CLOSE),
              (0, i.closeAllModals)();
          },
          x = !d.ZP.disableCallUserConfirmationPrompt;
        return (0, s.jsx)(i.MenuItem, {
          id: null != g ? g : "call",
          label: null != f ? f : E.Z.Messages.CALL,
          action: x
            ? () => {
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, s.jsx)(e, { onSubmit: U, ...n });
                });
              }
            : U,
          disabled: C,
        });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var s = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        a = t(668781),
        o = t(846027),
        d = t(763296),
        u = t(131951),
        r = t(19780),
        c = t(914010),
        Z = t(594174),
        M = t(626135),
        E = t(981631),
        _ = t(65154),
        f = t(689938),
        N = t(201683);
      function g(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.Yn.DEFAULT,
          t = (0, l.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          g = (0, l.e7)([d.Z], () => d.Z.isLocalSoundboardMuted(e)),
          {
            muted: I,
            deafened: m = !1,
            localVideoDisabled: A = !1,
            localVideoAutoDisabled: C = !1,
          } = (0, l.cj)(
            [u.Z],
            () =>
              t
                ? { muted: u.Z.isSelfMute(n), deafened: u.Z.isSelfDeaf(n) }
                : {
                    muted: u.Z.isLocalMute(e, n),
                    localVideoDisabled: u.Z.isLocalVideoDisabled(e, n),
                    localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, n),
                  },
            [t, n, e],
          ),
          D =
            u.Z.supports(_.AN.DISABLE_VIDEO) && !t
              ? (0, s.jsx)(
                  i.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: f.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (C) {
                        a.Z.show({
                          title: f.Z.Messages.UNSTABLE_CONNECTION,
                          body: f.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: f.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: f.Z.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            o.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = A ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: A,
                    subtext: C
                      ? (0, s.jsxs)("div", {
                          className: N.videoPaused,
                          children: [
                            (0, s.jsx)(i.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: N.warningCircle,
                            }),
                            f.Z.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video",
                )
              : null,
          U = t
            ? null
            : (0, s.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: f.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let t = r.Z.getRTCConnection();
                    M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == t ? void 0 : t.getMediaSessionId(),
                      parent_media_session_id:
                        null == t ? void 0 : t.parentMediaSessionId,
                      mute_soundboard: !g,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: g,
                },
                "soundboard-sound-mute",
              );
        return t
          ? [
              (0, s.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () =>
                    o.Z.toggleSelfMute({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: I,
                },
                "self-mute",
              ),
              (0, s.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: f.Z.Messages.DEAFEN,
                  action: () =>
                    o.Z.toggleSelfDeaf({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: m,
                },
                "self-deafen",
              ),
              D,
            ]
          : [
              (0, s.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: I,
                },
                "self-mute",
              ),
              U,
              D,
            ];
      }
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var s = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        a = t(846027),
        o = t(131951),
        d = t(594174),
        u = t(36703),
        r = t(358085),
        c = t(65154),
        Z = t(689938);
      function M(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          M = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
          E =
            e ===
            (null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          _ = t === c.Yn.STREAM;
        return E
          ? null
          : (0, s.jsx)(i.MenuControlItem, {
              id: "user-volume",
              label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, l) =>
                (0, s.jsx)(i.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, u.P)(M),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, u.A)(n), t),
                  "aria-label": _
                    ? Z.Z.Messages.STREAM_VOLUME
                    : Z.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
    332031: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var s = t(200651);
      t(192379);
      var l = t(442837),
        i = t(481060),
        a = t(655922),
        o = t(158776),
        d = t(981631),
        u = t(689938);
      function r(e) {
        let n = (0, l.e7)(
          [o.Z],
          () =>
            (0, a.Z)(o.Z.findActivity(e, (e) => e.type === d.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, s.jsx)(i.MenuItem, {
              id: "watch-stream",
              label: u.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=63cb7002d1bd5552cfaa.js.map
