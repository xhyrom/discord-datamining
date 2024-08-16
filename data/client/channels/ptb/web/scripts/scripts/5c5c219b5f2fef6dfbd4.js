"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70474"],
  {
    145474: function (e, n, t) {
      t.d(n, {
        P: function () {
          return c;
        },
      });
      var a = t(735250),
        i = t(470079),
        s = t(442837),
        l = t(481060),
        o = t(352954),
        r = t(441894),
        u = t(314897),
        d = t(689938);
      function c(e) {
        let { userId: n, channelId: t, location: c } = e,
          E = (0, r.J)({ channelId: t, location: c }),
          Z = (0, s.e7)([u.default], () => u.default.getId() === n),
          M = i.useCallback(() => {
            o.Z.openSecureFramesUserVerificationModal(n, t);
          }, [t, n]);
        return !E || Z
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "secure-frames-user-verification",
              label: d.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: M,
            });
      }
    },
    352954: function (e, n, t) {
      t(411104);
      var a = t(735250);
      t(470079);
      var i = t(481060),
        s = t(689938);
      n.Z = {
        openSecureFramesUserVerificationModal: function (e, n) {
          (0, i.openModalLazy)(async () => {
            let i = (
              await Promise.all([t.e("95437"), t.e("33397")]).then(
                t.bind(t, 963410),
              )
            ).default;
            return (t) => (0, a.jsx)(i, { userId: e, channelId: n, ...t });
          });
        },
        openSecureFramesUpdateConfirmation: function (e) {
          let { title: n, subtitle: l, onConfirm: o } = e;
          (0, i.openModalLazy)(async () => {
            let { ConfirmModal: e } = await Promise.resolve().then(
              t.bind(t, 481060),
            );
            return (t) =>
              (0, a.jsx)(e, {
                header: n,
                confirmText: s.Z.Messages.CONFIRM,
                cancelText: s.Z.Messages.CANCEL,
                onConfirm: o,
                ...t,
                children: (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: l,
                }),
              });
          });
        },
        handleSecureFramesUserVerificationLink: function (e) {
          throw Error("handleSecureFramesUserVerificationLink not implemented");
        },
      };
    },
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(442837),
        i = t(314897),
        s = t(944486),
        l = t(590415);
      function o() {
        let e = (0, a.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          n = (0, a.e7)([i.default], () => i.default.getId());
        return (
          (0, l.ZP)(n, e) === l.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(430824),
        o = t(594174),
        r = t(979651),
        u = t(471253),
        d = t(200498),
        c = t(88751),
        E = t(267980),
        Z = t(623633),
        M = t(689938);
      function f(e) {
        var n;
        let t = (0, Z.Z)(),
          f = null == t ? void 0 : t.id,
          _ = null == t ? void 0 : t.guild_id,
          I = (0, i.e7)([l.Z], () => l.Z.getGuild(_), [_]),
          g = (0, i.e7)(
            [r.Z],
            () => (null != f ? r.Z.getVoiceStateForChannel(f, e.id) : null),
            [f, e.id],
          ),
          m =
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          A = (0, E.Z)(),
          N = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, f), [
            f,
            e.id,
          ]),
          C = (0, d.B)(f);
        if (null == t || null == I || null == g || N.speaker) return null;
        let T = () => {
          m ? (0, u.RK)(t, !1) : (0, u._0)(t, e.id);
        };
        return C
          ? (0, a.jsx)(s.MenuItem, {
              id: "invite-speaker",
              label: m
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: T,
            })
          : A && m
            ? (0, a.jsx)(s.MenuItem, {
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
      var a = t(735250),
        i = t(470079),
        s = t(442837),
        l = t(481060),
        o = t(194359),
        r = t(699516),
        u = t(594174),
        d = t(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: E } = e,
          Z = (0, s.e7)(
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
          [M, f] = (0, s.Wu)([r.Z], () => [r.Z.isFriend(t), r.Z.isBlocked(t)], [
            t,
          ]),
          [_, I] = i.useState(!1);
        return E || Z
          ? null
          : M
            ? (0, a.jsx)(l.MenuItem, {
                id: "remove-friend",
                label: d.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, l.openModal)((e) =>
                    (0, a.jsx)(l.ConfirmModal, {
                      header: d.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: d.Z.Messages.REMOVE_FRIEND,
                      cancelText: d.Z.Messages.CANCEL,
                      onConfirm: () => {
                        o.Z.removeFriend(t, { location: n }), I(!1);
                      },
                      ...e,
                      children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: d.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, a.jsx)(l.MenuItem, {
                id: "add-friend",
                label: _
                  ? d.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : d.Z.Messages.ADD_FRIEND,
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
          return r;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(699516),
        o = t(689938);
      function r(e) {
        let { user: n, onAction: r } = e,
          u = n.id,
          [d, c] = (0, i.Wu)(
            [l.Z],
            () => {
              var e;
              return [
                l.Z.isFriend(u),
                null !== (e = l.Z.getNickname(u)) && void 0 !== e ? e : null,
              ];
            },
            [u],
          );
        if (!d) return null;
        let E =
          null == c
            ? o.Z.Messages.ADD_FRIEND_NICKNAME
            : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, a.jsx)(s.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: E,
          action: () => {
            null == r || r(),
              (0, s.openModalLazy)(async () => {
                let { default: e } = await t.e("25070").then(t.bind(t, 670794));
                return (t) => (0, a.jsx)(e, { user: n, nickname: c, ...t });
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
      var a = t(735250),
        i = t(470079),
        s = t(481060),
        l = t(906732),
        o = t(702557),
        r = t(171368),
        u = t(314897),
        d = t(246946),
        c = t(626135),
        E = t(981631),
        Z = t(228168),
        M = t(689938);
      function f(e) {
        let { user: n, guildId: t, channelId: f, context: _ } = e,
          { id: I } = n,
          { loading: g, note: m } = (0, o.Z)(I),
          A = !g && null != m && m.length > 0,
          N = _ === E.IlC.POPOUT,
          C = i.useContext(c.AnalyticsContext),
          { analyticsLocations: T } = (0, l.ZP)();
        return I === u.default.getId() || d.Z.hidePersonalInformation || N
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "note",
              label: g
                ? M.Z.Messages.LOADING_NOTE
                : A
                  ? M.Z.Messages.EDIT_NOTE
                  : M.Z.Messages.ADD_NOTE,
              action: () => {
                (0, r.openUserProfileModal)({
                  userId: n.id,
                  section: Z.oh.USER_INFO,
                  subsection: Z.Tb.NOTE,
                  guildId: t,
                  channelId: f,
                  sourceAnalyticsLocations: T,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    332576: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(475179),
        o = t(358221),
        r = t(979651),
        u = t(981631),
        d = t(689938);
      function c(e, n) {
        let t = (0, i.e7)([o.Z], () => e === o.Z.getSelectedParticipantId(n), [
          n,
          e,
        ]);
        return (0, i.e7)(
          [o.Z, r.Z],
          () => {
            let t = r.Z.isInChannel(n, e) && r.Z.hasVideo(n),
              a = o.Z.getLayout(n),
              i = a === u.AEg.MINIMUM || a === u.AEg.NORMAL;
            return !t || i;
          },
          [n, e],
        )
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "focus-video",
              label: t
                ? d.Z.Messages.UNFOCUS_PARTICIPANT
                : d.Z.Messages.FOCUS_PARTICIPANT,
              action: () => l.Z.selectParticipant(n, t ? null : e),
            });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(668781),
        o = t(846027),
        r = t(763296),
        u = t(131951),
        d = t(19780),
        c = t(914010),
        E = t(594174),
        Z = t(626135),
        M = t(981631),
        f = t(65154),
        _ = t(689938),
        I = t(480881);
      function g(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f.Yn.DEFAULT,
          t = (0, i.e7)([E.default], () => {
            var n;
            return (
              (null === (n = E.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          g = (0, i.e7)([r.Z], () => r.Z.isLocalSoundboardMuted(e)),
          {
            muted: m,
            deafened: A = !1,
            localVideoDisabled: N = !1,
            localVideoAutoDisabled: C = !1,
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
          T =
            u.Z.supports(f.AN.DISABLE_VIDEO) && !t
              ? (0, a.jsx)(
                  s.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: _.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (C) {
                        l.Z.show({
                          title: _.Z.Messages.UNSTABLE_CONNECTION,
                          body: _.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: _.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: _.Z.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            o.Z.setDisableLocalVideo(e, M.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = N ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: N,
                    subtext: C
                      ? (0, a.jsxs)("div", {
                          className: I.videoPaused,
                          children: [
                            (0, a.jsx)(s.CircleWarningIcon, {
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
            : (0, a.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: _.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let t = d.Z.getRTCConnection();
                    Z.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
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
              (0, a.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "mute",
                  label: _.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleSelfMute({ context: n }),
                  checked: m,
                },
                "self-mute",
              ),
              (0, a.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: _.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: A,
                },
                "self-deafen",
              ),
              T,
            ]
          : [
              (0, a.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "mute",
                  label: _.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: m,
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
          return Z;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(846027),
        o = t(131951),
        r = t(594174),
        u = t(36703),
        d = t(358085),
        c = t(65154),
        E = t(689938);
      function Z(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          Z = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [e, t]),
          M =
            e ===
            (null === (n = r.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          f = t === c.Yn.STREAM;
        return M
          ? null
          : (0, a.jsx)(s.MenuControlItem, {
              id: "user-volume",
              label: f ? E.Z.Messages.STREAM_VOLUME : E.Z.Messages.USER_VOLUME,
              control: (n, i) =>
                (0, a.jsx)(s.MenuSliderControl, {
                  ...n,
                  ref: i,
                  value: (0, u.P)(Z),
                  maxValue: d.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => l.Z.setLocalVolume(e, (0, u.A)(n), t),
                  "aria-label": f
                    ? E.Z.Messages.STREAM_VOLUME
                    : E.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
    332031: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        s = t(481060),
        l = t(655922),
        o = t(158776),
        r = t(981631),
        u = t(689938);
      function d(e) {
        let n = (0, i.e7)(
          [o.Z],
          () =>
            (0, l.Z)(o.Z.findActivity(e, (e) => e.type === r.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "watch-stream",
              label: u.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=5c5c219b5f2fef6dfbd4.js.map
