"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69220"],
  {
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(314897),
        s = t(944486),
        a = t(590415);
      function o() {
        let e = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          n = (0, l.e7)([i.default], () => i.default.getId());
        return (
          (0, a.ZP)(n, e) === a.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(430824),
        o = t(594174),
        d = t(979651),
        u = t(471253),
        r = t(200498),
        c = t(88751),
        Z = t(267980),
        E = t(623633),
        M = t(689938);
      function _(e) {
        var n;
        let t = (0, E.Z)(),
          _ = null == t ? void 0 : t.id,
          f = null == t ? void 0 : t.guild_id,
          g = (0, i.e7)([a.Z], () => a.Z.getGuild(f), [f]),
          A = (0, i.e7)(
            [d.Z],
            () => (null != _ ? d.Z.getVoiceStateForChannel(_, e.id) : null),
            [_, e.id],
          ),
          I =
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          N = (0, Z.Z)(),
          C = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [
            _,
            e.id,
          ]),
          m = (0, r.B)(_);
        if (null == t || null == g || null == A || C.speaker) return null;
        let O = () => {
          I ? (0, u.RK)(t, !1) : (0, u._0)(t, e.id);
        };
        return m
          ? (0, l.jsx)(s.MenuItem, {
              id: "invite-speaker",
              label: I
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: O,
            })
          : N && I
            ? (0, l.jsx)(s.MenuItem, {
                id: "invite-speaker",
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: O,
              })
            : null;
      }
    },
    881351: function (e, n, t) {
      t.r(n);
      var l = t(735250);
      t(470079);
      var i = t(481060),
        s = t(239091),
        a = t(883385),
        o = t(108843),
        d = t(947440),
        u = t(100527),
        r = t(299206),
        c = t(819403),
        Z = t(777658),
        E = t(858488),
        M = t(185457),
        _ = t(389052),
        f = t(24311),
        g = t(710631),
        A = t(88966),
        I = t(991307),
        N = t(725119),
        C = t(700994),
        m = t(332031),
        O = t(981631),
        T = t(689938);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channelId: a,
                showMediaItems: o = !1,
                mediaEngineContext: u,
                onSelect: O,
              } = e,
              v = (0, N.Z)({ userId: n.id, guildId: t, channelId: a }),
              U = (0, A.Z)(n.id),
              S = (0, f.Z)({ user: n }),
              b = (0, M.Z)({ user: n, guildId: t, channelId: a }),
              x = (0, E.Z)({ user: n }),
              D = (0, m.Z)(n.id),
              L = (0, C.Z)(n.id),
              h = (0, I.Z)(n.id, u),
              R = (0, g.Z)({ user: n }),
              P = (0, d.Z)(null, n),
              p = (0, Z.Z)(n),
              j = (0, _.Z)({ user: n }),
              k = (0, r.Z)({ id: n.id, label: T.Z.Messages.COPY_ID_USER }),
              V = (0, c.Z)(n),
              F = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: s.Zy,
              "aria-label": T.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: O,
              children: [
                !F &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(i.MenuGroup, { children: V }),
                      (0, l.jsxs)(i.MenuGroup, {
                        children: [v, U, S, b, x, D],
                      }),
                      o && (0, l.jsx)(i.MenuGroup, { children: L }),
                      (0, l.jsx)(i.MenuGroup, { children: P }),
                      (0, l.jsxs)(i.MenuGroup, { children: [o && h, R, p, j] }),
                    ],
                  }),
                (0, l.jsx)(i.MenuGroup, { children: k }),
              ],
            });
          },
          { object: O.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.USER_GENERIC_MENU],
      );
    },
    777658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var l = t(735250),
        i = t(470079),
        s = t(442837),
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
          E = (0, s.e7)(
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
          [M, _] = (0, s.Wu)([d.Z], () => [d.Z.isFriend(t), d.Z.isBlocked(t)], [
            t,
          ]),
          [f, g] = i.useState(!1);
        return Z || E
          ? null
          : M
            ? (0, l.jsx)(a.MenuItem, {
                id: "remove-friend",
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, a.openModal)((e) =>
                    (0, l.jsx)(a.ConfirmModal, {
                      header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: r.Z.Messages.REMOVE_FRIEND,
                      cancelText: r.Z.Messages.CANCEL,
                      onConfirm: () => {
                        o.Z.removeFriend(t, { location: n }), g(!1);
                      },
                      ...e,
                      children: (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: r.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, l.jsx)(a.MenuItem, {
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
                    g(!0));
                },
                disabled: _ || (f && !M),
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
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(699516),
        o = t(689938);
      function d(e) {
        let { user: n, onAction: d } = e,
          u = n.id,
          [r, c] = (0, i.Wu)(
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
        return (0, l.jsx)(s.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == d || d(),
              (0, s.openModalLazy)(async () => {
                let { default: e } = await t.e("25070").then(t.bind(t, 670794));
                return (t) => (0, l.jsx)(e, { user: n, nickname: c, ...t });
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
      var l = t(735250),
        i = t(470079),
        s = t(481060),
        a = t(906732),
        o = t(531301),
        d = t(171368),
        u = t(314897),
        r = t(246946),
        c = t(626135),
        Z = t(981631),
        E = t(228168),
        M = t(689938);
      function _(e) {
        let { user: n, guildId: t, channelId: _, context: f } = e,
          { id: g } = n,
          { loading: A, note: I } = (0, o.Z)(g),
          N = !A && null != I && I.length > 0,
          C = f === Z.IlC.POPOUT,
          m = i.useContext(c.AnalyticsContext),
          { analyticsLocations: O } = (0, a.ZP)();
        return g === u.default.getId() || r.Z.hidePersonalInformation || C
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "note",
              label: A
                ? M.Z.Messages.LOADING_NOTE
                : N
                  ? M.Z.Messages.EDIT_NOTE
                  : M.Z.Messages.ADD_NOTE,
              action: () => {
                (0, d.openUserProfileModal)({
                  userId: n.id,
                  section: E.oh.USER_INFO,
                  subsection: E.Tb.NOTE,
                  guildId: t,
                  channelId: _,
                  sourceAnalyticsLocations: O,
                  analyticsLocation: m.location,
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
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(493683),
        o = t(40851),
        d = t(740492),
        u = t(314897),
        r = t(592125),
        c = t(699516),
        Z = t(944486),
        E = t(981631),
        M = t(689938);
      function _(e) {
        let {
            user: n,
            context: _,
            label: f,
            joinCallVideo: g,
            id: A,
            onCall: I,
          } = e,
          N = (0, o.Aq)(),
          C = (0, i.e7)([u.default], () => u.default.getId() === n.id),
          m = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          O = (0, i.e7)(
            [Z.Z, r.Z],
            () => Z.Z.getVoiceChannelId() === r.Z.getDMFromUserId(n.id),
          );
        if (C || _ === E.IlC.POPOUT || O || n.bot || n.isProvisional())
          return null;
        let T = () => {
            null == I || I(),
              a.Z.openPrivateChannel(n.id, !0, g),
              N.dispatch(E.CkL.POPOUT_CLOSE),
              (0, s.closeAllModals)();
          },
          v = !d.ZP.disableCallUserConfirmationPrompt;
        return (0, l.jsx)(s.MenuItem, {
          id: null != A ? A : "call",
          label: null != f ? f : M.Z.Messages.CALL,
          action: v
            ? () => {
                (0, s.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, l.jsx)(e, { onSubmit: T, ...n });
                });
              }
            : T,
          disabled: m,
        });
      }
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(493683),
        o = t(40851),
        d = t(314897),
        u = t(981631),
        r = t(689938);
      function c(e, n) {
        let t = (0, o.Aq)();
        return (0, i.e7)([d.default], () => d.default.getId() === e) ||
          n === u.IlC.POPOUT
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "message-user",
              label: r.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                a.Z.openPrivateChannel(e),
                  t.dispatch(u.CkL.POPOUT_CLOSE),
                  (0, s.closeAllModals)();
              },
            });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(668781),
        o = t(846027),
        d = t(763296),
        u = t(131951),
        r = t(19780),
        c = t(914010),
        Z = t(594174),
        E = t(626135),
        M = t(981631),
        _ = t(65154),
        f = t(689938),
        g = t(201683);
      function A(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.Yn.DEFAULT,
          t = (0, i.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          A = (0, i.e7)([d.Z], () => d.Z.isLocalSoundboardMuted(e)),
          {
            muted: I,
            deafened: N = !1,
            localVideoDisabled: C = !1,
            localVideoAutoDisabled: m = !1,
          } = (0, i.cj)(
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
          O =
            u.Z.supports(_.AN.DISABLE_VIDEO) && !t
              ? (0, l.jsx)(
                  s.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: f.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (m) {
                        a.Z.show({
                          title: f.Z.Messages.UNSTABLE_CONNECTION,
                          body: f.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: f.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: f.Z.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            o.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = C ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: C,
                    subtext: m
                      ? (0, l.jsxs)("div", {
                          className: g.videoPaused,
                          children: [
                            (0, l.jsx)(s.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: g.warningCircle,
                            }),
                            f.Z.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video",
                )
              : null,
          T = t
            ? null
            : (0, l.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: f.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let t = r.Z.getRTCConnection();
                    E.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == t ? void 0 : t.getMediaSessionId(),
                      parent_media_session_id:
                        null == t ? void 0 : t.parentMediaSessionId,
                      mute_soundboard: !A,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: A,
                },
                "soundboard-sound-mute",
              );
        return t
          ? [
              (0, l.jsx)(
                s.MenuCheckboxItem,
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
              (0, l.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: f.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: N,
                },
                "self-deafen",
              ),
              O,
            ]
          : [
              (0, l.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: I,
                },
                "self-mute",
              ),
              T,
              O,
            ];
      }
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(846027),
        o = t(131951),
        d = t(594174),
        u = t(36703),
        r = t(358085),
        c = t(65154),
        Z = t(689938);
      function E(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          E = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
          M =
            e ===
            (null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          _ = t === c.Yn.STREAM;
        return M
          ? null
          : (0, l.jsx)(s.MenuControlItem, {
              id: "user-volume",
              label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, i) =>
                (0, l.jsx)(s.MenuSliderControl, {
                  ...n,
                  ref: i,
                  value: (0, u.P)(E),
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
      var l = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        a = t(655922),
        o = t(158776),
        d = t(981631),
        u = t(689938);
      function r(e) {
        let n = (0, i.e7)(
          [o.Z],
          () =>
            (0, a.Z)(o.Z.findActivity(e, (e) => e.type === d.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "watch-stream",
              label: u.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
    201683: function (e, n, t) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=e55738890b70912ad59b.js.map
