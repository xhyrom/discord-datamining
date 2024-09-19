"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92453"],
  {
    607783: function (e, n, t) {
      t.d(n, {
        B: function () {
          return E;
        },
      });
      var l = t(735250),
        i = t(470079),
        a = t(442837),
        s = t(481060),
        o = t(40851),
        u = t(352954),
        d = t(630759),
        r = t(441894),
        c = t(314897),
        Z = t(689938);
      function E(e) {
        let { userId: n, channelId: t, guildId: E, location: M } = e,
          f = (0, r.J)({ channelId: t, location: M }),
          _ = (0, a.e7)([c.default], () => c.default.getId() === n),
          I = (0, o.bp)(),
          g = i.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
              n,
              t,
              () => (0, d.fz)({ userId: n, channelId: t, guildId: E }),
              I,
            );
          }, [I, t, E, n]);
        return !f || _
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "secure-frames-user-verification",
              label: Z.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: g,
            });
      }
    },
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(314897),
        a = t(944486),
        s = t(590415);
      function o() {
        let e = (0, l.e7)([a.Z], () => a.Z.getVoiceChannelId()),
          n = (0, l.e7)([i.default], () => i.default.getId());
        return (
          (0, s.ZP)(n, e) === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        s = t(430824),
        o = t(594174),
        u = t(979651),
        d = t(471253),
        r = t(200498),
        c = t(88751),
        Z = t(267980),
        E = t(623633),
        M = t(689938);
      function f(e) {
        var n;
        let t = (0, E.Z)(),
          f = null == t ? void 0 : t.id,
          _ = null == t ? void 0 : t.guild_id,
          I = (0, i.e7)([s.Z], () => s.Z.getGuild(_), [_]),
          g = (0, i.e7)(
            [u.Z],
            () => (null != f ? u.Z.getVoiceStateForChannel(f, e.id) : null),
            [f, e.id],
          ),
          A =
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          N = (0, Z.Z)(),
          m = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, f), [
            f,
            e.id,
          ]),
          C = (0, r.B)(f);
        if (null == t || null == I || null == g || m.speaker) return null;
        let T = () => {
          A ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
        };
        return C
          ? (0, l.jsx)(a.MenuItem, {
              id: "invite-speaker",
              label: A
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: T,
            })
          : N && A
            ? (0, l.jsx)(a.MenuItem, {
                id: "invite-speaker",
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: T,
              })
            : null;
      }
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
        a = t(442837),
        s = t(481060),
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
          E = (0, a.e7)(
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
          [M, f] = (0, a.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [
            t,
          ]),
          [_, I] = i.useState(!1);
        return Z || E
          ? null
          : M
            ? (0, l.jsx)(s.MenuItem, {
                id: "remove-friend",
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, s.openModal)((e) =>
                    (0, l.jsx)(s.ConfirmModal, {
                      header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: r.Z.Messages.REMOVE_FRIEND,
                      cancelText: r.Z.Messages.CANCEL,
                      onConfirm: () => {
                        o.Z.removeFriend(t, { location: n }), I(!1);
                      },
                      ...e,
                      children: (0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: r.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, l.jsx)(s.MenuItem, {
                id: "add-friend",
                label: _
                  ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : r.Z.Messages.ADD_FRIEND,
                action: () => {
                  !_ &&
                    (o.Z.addRelationship({
                      userId: t,
                      context: { location: n },
                    }),
                    I(!0));
                },
                disabled: f || (_ && !M),
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
      var l = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        s = t(699516),
        o = t(689938);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
          [r, c] = (0, i.Wu)(
            [s.Z],
            () => {
              var e;
              return [
                s.Z.isFriend(d),
                null !== (e = s.Z.getNickname(d)) && void 0 !== e ? e : null,
              ];
            },
            [d],
          );
        if (!r) return null;
        let Z =
          null == c
            ? o.Z.Messages.ADD_FRIEND_NICKNAME
            : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, l.jsx)(a.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == u || u(),
              (0, a.openModalLazy)(async () => {
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
          return f;
        },
      });
      var l = t(735250),
        i = t(470079),
        a = t(481060),
        s = t(906732),
        o = t(531301),
        u = t(171368),
        d = t(314897),
        r = t(246946),
        c = t(626135),
        Z = t(981631),
        E = t(228168),
        M = t(689938);
      function f(e) {
        let { user: n, guildId: t, channelId: f, context: _ } = e,
          { id: I } = n,
          { loading: g, note: A } = (0, o.Z)(I),
          N = !g && null != A && A.length > 0,
          m = _ === Z.IlC.POPOUT,
          C = i.useContext(c.AnalyticsContext),
          { analyticsLocations: T } = (0, s.ZP)();
        return I === d.default.getId() || r.Z.hidePersonalInformation || m
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: "note",
              label: g
                ? M.Z.Messages.LOADING_NOTE
                : N
                  ? M.Z.Messages.EDIT_NOTE
                  : M.Z.Messages.ADD_NOTE,
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: E.oh.USER_INFO,
                  subsection: E.Tb.NOTE,
                  guildId: t,
                  channelId: f,
                  sourceAnalyticsLocations: T,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        s = t(493683),
        o = t(40851),
        u = t(740492),
        d = t(314897),
        r = t(592125),
        c = t(699516),
        Z = t(944486),
        E = t(981631),
        M = t(689938);
      function f(e) {
        let {
            user: n,
            context: f,
            label: _,
            joinCallVideo: I,
            id: g,
            onCall: A,
          } = e,
          N = (0, o.Aq)(),
          m = (0, i.e7)([d.default], () => d.default.getId() === n.id),
          C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          T = (0, i.e7)(
            [Z.Z, r.Z],
            () => Z.Z.getVoiceChannelId() === r.Z.getDMFromUserId(n.id),
          );
        if (m || f === E.IlC.POPOUT || T || n.bot || n.isProvisional())
          return null;
        let v = () => {
            null == A || A(),
              s.Z.openPrivateChannel(n.id, !0, I),
              N.dispatch(E.CkL.POPOUT_CLOSE),
              (0, a.closeAllModals)();
          },
          O = !u.ZP.disableCallUserConfirmationPrompt;
        return (0, l.jsx)(a.MenuItem, {
          id: null != g ? g : "call",
          label: null != _ ? _ : M.Z.Messages.CALL,
          action: O
            ? () => {
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, l.jsx)(e, { onSubmit: v, ...n });
                });
              }
            : v,
          disabled: C,
        });
      }
    },
    332576: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        s = t(475179),
        o = t(358221),
        u = t(979651),
        d = t(981631),
        r = t(689938);
      function c(e, n) {
        let t = (0, i.e7)([o.Z], () => e === o.Z.getSelectedParticipantId(n), [
          n,
          e,
        ]);
        return (0, i.e7)(
          [o.Z, u.Z],
          () => {
            let t = u.Z.isInChannel(n, e) && u.Z.hasVideo(n),
              l = o.Z.getLayout(n),
              i = l === d.AEg.MINIMUM || l === d.AEg.NORMAL;
            return !t || i;
          },
          [n, e],
        )
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: "focus-video",
              label: t
                ? r.Z.Messages.UNFOCUS_PARTICIPANT
                : r.Z.Messages.FOCUS_PARTICIPANT,
              action: () => s.Z.selectParticipant(n, t ? null : e),
            });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        a = t(481060),
        s = t(668781),
        o = t(846027),
        u = t(763296),
        d = t(131951),
        r = t(19780),
        c = t(914010),
        Z = t(594174),
        E = t(626135),
        M = t(981631),
        f = t(65154),
        _ = t(689938),
        I = t(201683);
      function g(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f.Yn.DEFAULT,
          t = (0, i.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          g = (0, i.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: A,
            deafened: N = !1,
            localVideoDisabled: m = !1,
            localVideoAutoDisabled: C = !1,
          } = (0, i.cj)(
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
          T =
            d.Z.supports(f.AN.DISABLE_VIDEO) && !t
              ? (0, l.jsx)(
                  a.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: _.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (C) {
                        s.Z.show({
                          title: _.Z.Messages.UNSTABLE_CONNECTION,
                          body: _.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: _.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: _.Z.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            o.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = m ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: m,
                    subtext: C
                      ? (0, l.jsxs)("div", {
                          className: I.videoPaused,
                          children: [
                            (0, l.jsx)(a.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: I.warningCircle,
                            }),
                            _.Z.Messages.UNSTABLE_CONNECTION,
                          ],
                        })
                      : null,
                  },
                  "disable-video",
                )
              : null,
          v = t
            ? null
            : (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: _.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let t = r.Z.getRTCConnection();
                    E.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
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
              (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "mute",
                  label: _.Z.Messages.SOUND_MUTE,
                  action: () =>
                    o.Z.toggleSelfMute({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: A,
                },
                "self-mute",
              ),
              (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: _.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: N,
                },
                "self-deafen",
              ),
              T,
            ]
          : [
              (0, l.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "mute",
                  label: _.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: A,
                },
                "self-mute",
              ),
              v,
              T,
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
        a = t(481060),
        s = t(846027),
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
          E = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
          M =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          f = t === c.Yn.STREAM;
        return M
          ? null
          : (0, l.jsx)(a.MenuControlItem, {
              id: "user-volume",
              label: f ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, i) =>
                (0, l.jsx)(a.MenuSliderControl, {
                  ...n,
                  ref: i,
                  value: (0, d.P)(E),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => s.Z.setLocalVolume(e, (0, d.A)(n), t),
                  "aria-label": f
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
        a = t(481060),
        s = t(655922),
        o = t(158776),
        u = t(981631),
        d = t(689938);
      function r(e) {
        let n = (0, i.e7)(
          [o.Z],
          () =>
            (0, s.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: "watch-stream",
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=96752e7d3b20d84d3952.js.map
