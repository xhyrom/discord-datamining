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
      var s = t(442837),
        l = t(314897),
        i = t(944486),
        a = t(590415);
      function o() {
        let e = (0, s.e7)([i.Z], () => i.Z.getVoiceChannelId()),
          n = (0, s.e7)([l.default], () => l.default.getId());
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
      var s = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        a = t(430824),
        o = t(594174),
        u = t(979651),
        d = t(471253),
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
          g = (0, l.e7)([a.Z], () => a.Z.getGuild(f), [f]),
          N = (0, l.e7)(
            [u.Z],
            () => (null != _ ? u.Z.getVoiceStateForChannel(_, e.id) : null),
            [_, e.id],
          ),
          A =
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          I = (0, Z.Z)(),
          T = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [
            _,
            e.id,
          ]),
          m = (0, r.B)(_);
        if (null == t || null == g || null == N || T.speaker) return null;
        let O = () => {
          A ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
        };
        return m
          ? (0, s.jsx)(i.MenuItem, {
              id: "invite-speaker",
              label: A
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: O,
            })
          : I && A
            ? (0, s.jsx)(i.MenuItem, {
                id: "invite-speaker",
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: O,
              })
            : null;
      }
    },
    881351: function (e, n, t) {
      t.r(n);
      var s = t(735250);
      t(470079);
      var l = t(481060),
        i = t(239091),
        a = t(883385),
        o = t(108843),
        u = t(947440),
        d = t(100527),
        r = t(299206),
        c = t(819403),
        Z = t(777658),
        E = t(858488),
        M = t(185457),
        _ = t(389052),
        f = t(24311),
        g = t(710631),
        N = t(88966),
        A = t(991307),
        I = t(725119),
        T = t(700994),
        m = t(332031),
        O = t(981631),
        C = t(689938);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channelId: a,
                showMediaItems: o = !1,
                mediaEngineContext: d,
                onSelect: O,
              } = e,
              S = (0, I.Z)({ userId: n.id, guildId: t, channelId: a }),
              U = (0, N.Z)(n.id),
              v = (0, f.Z)({ user: n }),
              D = (0, M.Z)({ user: n, guildId: t, channelId: a }),
              x = (0, E.Z)({ user: n }),
              b = (0, m.Z)(n.id),
              L = (0, T.Z)(n.id),
              h = (0, A.Z)(n.id, d),
              R = (0, g.Z)({ user: n }),
              j = (0, u.Z)(null, n),
              p = (0, Z.Z)(n),
              k = (0, _.Z)({ user: n }),
              V = (0, r.Z)({ id: n.id, label: C.Z.Messages.COPY_ID_USER }),
              P = (0, c.Z)(n),
              F = n.isNonUserBot();
            return (0, s.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: i.Zy,
              "aria-label": C.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: O,
              children: [
                !F &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(l.MenuGroup, { children: P }),
                      (0, s.jsxs)(l.MenuGroup, {
                        children: [S, U, v, D, x, b],
                      }),
                      o && (0, s.jsx)(l.MenuGroup, { children: L }),
                      (0, s.jsx)(l.MenuGroup, { children: j }),
                      (0, s.jsxs)(l.MenuGroup, { children: [o && h, R, p, k] }),
                    ],
                  }),
                (0, s.jsx)(l.MenuGroup, { children: V }),
              ],
            });
          },
          { object: O.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU],
      );
    },
    777658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var s = t(735250),
        l = t(470079),
        i = t(442837),
        a = t(481060),
        o = t(194359),
        u = t(699516),
        d = t(594174),
        r = t(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: Z } = e,
          E = (0, i.e7)(
            [d.default],
            () => {
              var e;
              return (
                (null === (e = d.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === t
              );
            },
            [t],
          ),
          [M, _] = (0, i.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [
            t,
          ]),
          [f, g] = l.useState(!1);
        return Z || E
          ? null
          : M
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
                        o.Z.removeFriend(t, { location: n }), g(!1);
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
                    g(!0));
                },
                disabled: _ || (f && !M),
              });
      }
    },
    858488: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var s = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        a = t(699516),
        o = t(689938);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
          [r, c] = (0, l.Wu)(
            [a.Z],
            () => {
              var e;
              return [
                a.Z.isFriend(d),
                null !== (e = a.Z.getNickname(d)) && void 0 !== e ? e : null,
              ];
            },
            [d],
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
            null == u || u(),
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
      var s = t(735250),
        l = t(470079),
        i = t(481060),
        a = t(906732),
        o = t(702557),
        u = t(171368),
        d = t(314897),
        r = t(246946),
        c = t(626135),
        Z = t(981631),
        E = t(228168),
        M = t(689938);
      function _(e) {
        let { user: n, guildId: t, channelId: _, context: f } = e,
          { id: g } = n,
          { loading: N, note: A } = (0, o.Z)(g),
          I = !N && null != A && A.length > 0,
          T = f === Z.IlC.POPOUT,
          m = l.useContext(c.AnalyticsContext),
          { analyticsLocations: O } = (0, a.ZP)();
        return g === d.default.getId() || r.Z.hidePersonalInformation || T
          ? null
          : (0, s.jsx)(i.MenuItem, {
              id: "note",
              label: N
                ? M.Z.Messages.LOADING_NOTE
                : I
                  ? M.Z.Messages.EDIT_NOTE
                  : M.Z.Messages.ADD_NOTE,
              action: () => {
                (0, u.openUserProfileModal)({
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
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var s = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        a = t(493683),
        o = t(40851),
        u = t(314897),
        d = t(981631),
        r = t(689938);
      function c(e, n) {
        let t = (0, o.Aq)();
        return (0, l.e7)([u.default], () => u.default.getId() === e) ||
          n === d.IlC.POPOUT
          ? null
          : (0, s.jsx)(i.MenuItem, {
              id: "message-user",
              label: r.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                a.Z.openPrivateChannel(e),
                  t.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, i.closeAllModals)();
              },
            });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var s = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        a = t(668781),
        o = t(846027),
        u = t(763296),
        d = t(131951),
        r = t(19780),
        c = t(914010),
        Z = t(594174),
        E = t(626135),
        M = t(981631),
        _ = t(65154),
        f = t(689938),
        g = t(480881);
      function N(e) {
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
          N = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: A,
            deafened: I = !1,
            localVideoDisabled: T = !1,
            localVideoAutoDisabled: m = !1,
          } = (0, l.cj)(
            [d.Z],
            () =>
              t
                ? { muted: d.Z.isSelfMute(n), deafened: d.Z.isSelfDeaf(n) }
                : {
                    muted: d.Z.isLocalMute(e, n),
                    localVideoDisabled: d.Z.isLocalVideoDisabled(e, n),
                    localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, n),
                  },
            [t, n, e],
          ),
          O =
            d.Z.supports(_.AN.DISABLE_VIDEO) && !t
              ? (0, s.jsx)(
                  i.MenuCheckboxItem,
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
                      let t = T ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: T,
                    subtext: m
                      ? (0, s.jsxs)("div", {
                          className: g.videoPaused,
                          children: [
                            (0, s.jsx)(i.CircleWarningIcon, {
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
          C = t
            ? null
            : (0, s.jsx)(
                i.MenuCheckboxItem,
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
                      mute_soundboard: !N,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: N,
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
                  action: () => o.Z.toggleSelfMute({ context: n }),
                  checked: A,
                },
                "self-mute",
              ),
              (0, s.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: f.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: I,
                },
                "self-deafen",
              ),
              O,
            ]
          : [
              (0, s.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: A,
                },
                "self-mute",
              ),
              C,
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
      var s = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        a = t(846027),
        o = t(131951),
        u = t(594174),
        d = t(36703),
        r = t(358085),
        c = t(65154),
        Z = t(689938);
      function E(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          E = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
          M =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          _ = t === c.Yn.STREAM;
        return M
          ? null
          : (0, s.jsx)(i.MenuControlItem, {
              id: "user-volume",
              label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, l) =>
                (0, s.jsx)(i.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, d.P)(E),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, d.A)(n), t),
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
      var s = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        a = t(655922),
        o = t(158776),
        u = t(981631),
        d = t(689938);
      function r(e) {
        let n = (0, l.e7)(
          [o.Z],
          () =>
            (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, s.jsx)(i.MenuItem, {
              id: "watch-stream",
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=db8d95b864de071b7ff2.js.map
