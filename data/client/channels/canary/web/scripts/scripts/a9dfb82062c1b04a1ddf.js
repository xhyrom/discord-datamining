"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90286"],
  {
    607783: function (e, n, t) {
      t.d(n, {
        B: function () {
          return Z;
        },
      });
      var s = t(735250),
        i = t(470079),
        l = t(442837),
        a = t(481060),
        o = t(40851),
        u = t(352954),
        d = t(630759),
        r = t(441894),
        c = t(314897),
        E = t(689938);
      function Z(e) {
        let { userId: n, channelId: t, guildId: Z, location: M } = e,
          _ = (0, r.J)({ channelId: t, location: M }),
          f = (0, l.e7)([c.default], () => c.default.getId() === n),
          g = (0, o.bp)(),
          I = i.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
              n,
              t,
              () => (0, d.fz)({ userId: n, channelId: t, guildId: Z }),
              g,
            );
          }, [g, t, Z, n]);
        return !_ || f
          ? null
          : (0, s.jsx)(a.MenuItem, {
              id: "secure-frames-user-verification",
              label: E.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
              action: I,
            });
      }
    },
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var s = t(442837),
        i = t(314897),
        l = t(944486),
        a = t(590415);
      function o() {
        let e = (0, s.e7)([l.Z], () => l.Z.getVoiceChannelId()),
          n = (0, s.e7)([i.default], () => i.default.getId());
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
      var i = t(442837),
        l = t(481060),
        a = t(430824),
        o = t(594174),
        u = t(979651),
        d = t(471253),
        r = t(200498),
        c = t(88751),
        E = t(267980),
        Z = t(623633),
        M = t(689938);
      function _(e) {
        var n;
        let t = (0, Z.Z)(),
          _ = null == t ? void 0 : t.id,
          f = null == t ? void 0 : t.guild_id,
          g = (0, i.e7)([a.Z], () => a.Z.getGuild(f), [f]),
          I = (0, i.e7)(
            [u.Z],
            () => (null != _ ? u.Z.getVoiceStateForChannel(_, e.id) : null),
            [_, e.id],
          ),
          A =
            (null === (n = o.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          N = (0, E.Z)(),
          m = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [
            _,
            e.id,
          ]),
          T = (0, r.B)(_);
        if (null == t || null == g || null == I || m.speaker) return null;
        let C = () => {
          A ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
        };
        return T
          ? (0, s.jsx)(l.MenuItem, {
              id: "invite-speaker",
              label: A
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: C,
            })
          : N && A
            ? (0, s.jsx)(l.MenuItem, {
                id: "invite-speaker",
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: C,
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
      var s = t(735250),
        i = t(470079),
        l = t(442837),
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
          { id: t, username: c, bot: E } = e,
          Z = (0, l.e7)(
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
          [M, _] = (0, l.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [
            t,
          ]),
          [f, g] = i.useState(!1);
        return E || Z
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
      var i = t(442837),
        l = t(481060),
        a = t(699516),
        o = t(689938);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
          [r, c] = (0, i.Wu)(
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
        let E =
          null == c
            ? o.Z.Messages.ADD_FRIEND_NICKNAME
            : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, s.jsx)(l.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: E,
          action: () => {
            null == u || u(),
              (0, l.openModalLazy)(async () => {
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
        i = t(470079),
        l = t(481060),
        a = t(906732),
        o = t(531301),
        u = t(171368),
        d = t(314897),
        r = t(246946),
        c = t(626135),
        E = t(981631),
        Z = t(228168),
        M = t(689938);
      function _(e) {
        let { user: n, guildId: t, channelId: _, context: f } = e,
          { id: g } = n,
          { loading: I, note: A } = (0, o.Z)(g),
          N = !I && null != A && A.length > 0,
          m = f === E.IlC.POPOUT,
          T = i.useContext(c.AnalyticsContext),
          { analyticsLocations: C } = (0, a.ZP)();
        return g === d.default.getId() || r.Z.hidePersonalInformation || m
          ? null
          : (0, s.jsx)(l.MenuItem, {
              id: "note",
              label: I
                ? M.Z.Messages.LOADING_NOTE
                : N
                  ? M.Z.Messages.EDIT_NOTE
                  : M.Z.Messages.ADD_NOTE,
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: Z.oh.USER_INFO,
                  subsection: Z.Tb.NOTE,
                  guildId: t,
                  channelId: _,
                  sourceAnalyticsLocations: C,
                  analyticsLocation: T.location,
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
      var s = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        a = t(475179),
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
              s = o.Z.getLayout(n),
              i = s === d.AEg.MINIMUM || s === d.AEg.NORMAL;
            return !t || i;
          },
          [n, e],
        )
          ? null
          : (0, s.jsx)(l.MenuItem, {
              id: "focus-video",
              label: t
                ? r.Z.Messages.UNFOCUS_PARTICIPANT
                : r.Z.Messages.FOCUS_PARTICIPANT,
              action: () => a.Z.selectParticipant(n, t ? null : e),
            });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        a = t(668781),
        o = t(846027),
        u = t(763296),
        d = t(131951),
        r = t(19780),
        c = t(914010),
        E = t(594174),
        Z = t(626135),
        M = t(981631),
        _ = t(65154),
        f = t(689938),
        g = t(201683);
      function I(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.Yn.DEFAULT,
          t = (0, i.e7)([E.default], () => {
            var n;
            return (
              (null === (n = E.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          I = (0, i.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: A,
            deafened: N = !1,
            localVideoDisabled: m = !1,
            localVideoAutoDisabled: T = !1,
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
          C =
            d.Z.supports(_.AN.DISABLE_VIDEO) && !t
              ? (0, s.jsx)(
                  l.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: f.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (T) {
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
                      let t = m ? M.ZUi.MANUAL_ENABLED : M.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: m,
                    subtext: T
                      ? (0, s.jsxs)("div", {
                          className: g.videoPaused,
                          children: [
                            (0, s.jsx)(l.CircleWarningIcon, {
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
          v = t
            ? null
            : (0, s.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: f.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let t = r.Z.getRTCConnection();
                    Z.default.track(M.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == t ? void 0 : t.getMediaSessionId(),
                      parent_media_session_id:
                        null == t ? void 0 : t.parentMediaSessionId,
                      mute_soundboard: !I,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: I,
                },
                "soundboard-sound-mute",
              );
        return t
          ? [
              (0, s.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleSelfMute({ context: n }),
                  checked: A,
                },
                "self-mute",
              ),
              (0, s.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: f.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: N,
                },
                "self-deafen",
              ),
              C,
            ]
          : [
              (0, s.jsx)(
                l.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: A,
                },
                "self-mute",
              ),
              v,
              C,
            ];
      }
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        a = t(846027),
        o = t(131951),
        u = t(594174),
        d = t(36703),
        r = t(358085),
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
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          _ = t === c.Yn.STREAM;
        return M
          ? null
          : (0, s.jsx)(l.MenuControlItem, {
              id: "user-volume",
              label: _ ? E.Z.Messages.STREAM_VOLUME : E.Z.Messages.USER_VOLUME,
              control: (n, i) =>
                (0, s.jsx)(l.MenuSliderControl, {
                  ...n,
                  ref: i,
                  value: (0, d.P)(Z),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, d.A)(n), t),
                  "aria-label": _
                    ? E.Z.Messages.STREAM_VOLUME
                    : E.Z.Messages.USER_VOLUME,
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
      var i = t(442837),
        l = t(481060),
        a = t(655922),
        o = t(158776),
        u = t(981631),
        d = t(689938);
      function r(e) {
        let n = (0, i.e7)(
          [o.Z],
          () =>
            (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, s.jsx)(l.MenuItem, {
              id: "watch-stream",
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=a9dfb82062c1b04a1ddf.js.map
