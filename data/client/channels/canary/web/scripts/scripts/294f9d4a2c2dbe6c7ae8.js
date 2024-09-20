"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26976"],
  {
    415118: function (e, n, s) {
      s.r(n);
      var t = s(735250);
      s(470079);
      var l = s(481060),
        i = s(239091),
        a = s(883385),
        o = s(108843),
        d = s(947440),
        u = s(100527),
        r = s(299206),
        c = s(976192),
        Z = s(276022),
        M = s(777658),
        E = s(858488),
        _ = s(185457),
        f = s(933409),
        N = s(389052),
        g = s(24311),
        I = s(710631),
        m = s(297047),
        A = s(88966),
        C = s(712301),
        D = s(991307),
        U = s(725119),
        b = s(931617),
        x = s(700994),
        O = s(332031),
        T = s(981631),
        L = s(689938);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: s,
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
              j = (0, U.Z)({ userId: n.id, guildId: s }),
              R = (0, m.Z)(n, s, h),
              p = (0, A.Z)(n.id, h),
              k = (0, O.Z)(n.id),
              V = (0, g.Z)({ user: n, context: h }),
              F = (0, _.Z)({ user: n, guildId: s, context: h }),
              P = (0, E.Z)({ user: n }),
              B = (0, x.Z)(n.id),
              G = (0, D.Z)(n.id),
              y = (0, c.Z)({
                guildId: s,
                userId: n.id,
                analyticsLocation: S,
                context: h,
              }),
              w = (0, Z.Z)({ user: n, guildId: s }),
              Y = (0, I.Z)({ user: n, guildId: s }),
              W = (0, d.Z)(null, n),
              H = (0, M.Z)(n),
              X = (0, N.Z)({ user: n }),
              q = (0, f.Z)(n, s),
              z = (0, b.Z)(n.id, s),
              K = (0, C.Z)(n, s),
              J = (0, r.Z)({ id: n.id, label: L.Z.Messages.COPY_ID_USER }),
              Q = n.isNonUserBot();
            return (0, t.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: i.Zy,
              "aria-label": L.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: v,
              children: [
                !Q &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)(l.MenuGroup, {
                        children: [a && j, u && R, p, V, a && F, a && P, k],
                      }),
                      o && (0, t.jsx)(l.MenuGroup, { children: B }),
                      (0, t.jsx)(l.MenuGroup, { children: a && W }),
                      (0, t.jsxs)(l.MenuGroup, {
                        children: [o && G, a && y, a && Y, H, w, a && X],
                      }),
                      (0, t.jsx)(l.MenuGroup, { children: q }),
                      (0, t.jsxs)(l.MenuGroup, { children: [z, K] }),
                    ],
                  }),
                (0, t.jsx)(l.MenuGroup, { children: J }),
              ],
            });
          },
          { object: T.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU],
      );
    },
    777658: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return c;
        },
      }),
        s(47120);
      var t = s(735250),
        l = s(470079),
        i = s(442837),
        a = s(481060),
        o = s(194359),
        d = s(699516),
        u = s(594174),
        r = s(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: s, username: c, bot: Z } = e,
          M = (0, i.e7)(
            [u.default],
            () => {
              var e;
              return (
                (null === (e = u.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === s
              );
            },
            [s],
          ),
          [E, _] = (0, i.Wu)([d.Z], () => [d.Z.isFriend(s), d.Z.isBlocked(s)], [
            s,
          ]),
          [f, N] = l.useState(!1);
        return Z || M
          ? null
          : E
            ? (0, t.jsx)(a.MenuItem, {
                id: "remove-friend",
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, a.openModal)((e) =>
                    (0, t.jsx)(a.ConfirmModal, {
                      header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: r.Z.Messages.REMOVE_FRIEND,
                      cancelText: r.Z.Messages.CANCEL,
                      onConfirm: () => {
                        o.Z.removeFriend(s, { location: n }), N(!1);
                      },
                      ...e,
                      children: (0, t.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: r.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, t.jsx)(a.MenuItem, {
                id: "add-friend",
                label: f
                  ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : r.Z.Messages.ADD_FRIEND,
                action: () => {
                  !f &&
                    (o.Z.addRelationship({
                      userId: s,
                      context: { location: n },
                    }),
                    N(!0));
                },
                disabled: _ || (f && !E),
              });
      }
    },
    858488: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return d;
        },
      }),
        s(47120);
      var t = s(735250);
      s(470079);
      var l = s(442837),
        i = s(481060),
        a = s(699516),
        o = s(689938);
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
        return (0, t.jsx)(i.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == d || d(),
              (0, i.openModalLazy)(async () => {
                let { default: e } = await s.e("25070").then(s.bind(s, 670794));
                return (s) => (0, t.jsx)(e, { user: n, nickname: c, ...s });
              });
          },
        });
      }
    },
    185457: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = s(735250),
        l = s(470079),
        i = s(481060),
        a = s(906732),
        o = s(531301),
        d = s(171368),
        u = s(314897),
        r = s(246946),
        c = s(626135),
        Z = s(981631),
        M = s(228168),
        E = s(689938);
      function _(e) {
        let { user: n, guildId: s, channelId: _, context: f } = e,
          { id: N } = n,
          { loading: g, note: I } = (0, o.Z)(N),
          m = !g && null != I && I.length > 0,
          A = f === Z.IlC.POPOUT,
          C = l.useContext(c.AnalyticsContext),
          { analyticsLocations: D } = (0, a.ZP)();
        return N === u.default.getId() || r.Z.hidePersonalInformation || A
          ? null
          : (0, t.jsx)(i.MenuItem, {
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
                  guildId: s,
                  channelId: _,
                  sourceAnalyticsLocations: D,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = s(735250);
      s(470079);
      var l = s(442837),
        i = s(481060),
        a = s(493683),
        o = s(40851),
        d = s(740492),
        u = s(314897),
        r = s(592125),
        c = s(699516),
        Z = s(944486),
        M = s(981631),
        E = s(689938);
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
        if (A || _ === M.IlC.POPOUT || D || n.bot || n.isProvisional())
          return null;
        let U = () => {
            null == I || I(),
              a.Z.openPrivateChannel(n.id, !0, N),
              m.dispatch(M.CkL.POPOUT_CLOSE),
              (0, i.closeAllModals)();
          },
          b = !d.ZP.disableCallUserConfirmationPrompt;
        return (0, t.jsx)(i.MenuItem, {
          id: null != g ? g : "call",
          label: null != f ? f : E.Z.Messages.CALL,
          action: b
            ? () => {
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await s
                    .e("27157")
                    .then(s.bind(s, 736454));
                  return (n) => (0, t.jsx)(e, { onSubmit: U, ...n });
                });
              }
            : U,
          disabled: C,
        });
      }
    },
    991307: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return g;
        },
      });
      var t = s(735250);
      s(470079);
      var l = s(442837),
        i = s(481060),
        a = s(668781),
        o = s(846027),
        d = s(763296),
        u = s(131951),
        r = s(19780),
        c = s(914010),
        Z = s(594174),
        M = s(626135),
        E = s(981631),
        _ = s(65154),
        f = s(689938),
        N = s(201683);
      function g(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.Yn.DEFAULT,
          s = (0, l.e7)([Z.default], () => {
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
              s
                ? { muted: u.Z.isSelfMute(n), deafened: u.Z.isSelfDeaf(n) }
                : {
                    muted: u.Z.isLocalMute(e, n),
                    localVideoDisabled: u.Z.isLocalVideoDisabled(e, n),
                    localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, n),
                  },
            [s, n, e],
          ),
          D =
            u.Z.supports(_.AN.DISABLE_VIDEO) && !s
              ? (0, t.jsx)(
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
                      let s = A ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, s, n);
                    },
                    checked: A,
                    subtext: C
                      ? (0, t.jsxs)("div", {
                          className: N.videoPaused,
                          children: [
                            (0, t.jsx)(i.CircleWarningIcon, {
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
          U = s
            ? null
            : (0, t.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: f.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let s = r.Z.getRTCConnection();
                    M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == s ? void 0 : s.getMediaSessionId(),
                      parent_media_session_id:
                        null == s ? void 0 : s.parentMediaSessionId,
                      mute_soundboard: !g,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: g,
                },
                "soundboard-sound-mute",
              );
        return s
          ? [
              (0, t.jsx)(
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
              (0, t.jsx)(
                i.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: f.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: m,
                },
                "self-deafen",
              ),
              D,
            ]
          : [
              (0, t.jsx)(
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
    700994: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return M;
        },
      });
      var t = s(735250);
      s(470079);
      var l = s(442837),
        i = s(481060),
        a = s(846027),
        o = s(131951),
        d = s(594174),
        u = s(36703),
        r = s(358085),
        c = s(65154),
        Z = s(689938);
      function M(e) {
        var n;
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          M = (0, l.e7)([o.Z], () => o.Z.getLocalVolume(e, s), [e, s]),
          E =
            e ===
            (null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          _ = s === c.Yn.STREAM;
        return E
          ? null
          : (0, t.jsx)(i.MenuControlItem, {
              id: "user-volume",
              label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, l) =>
                (0, t.jsx)(i.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, u.P)(M),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, u.A)(n), s),
                  "aria-label": _
                    ? Z.Z.Messages.STREAM_VOLUME
                    : Z.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
    332031: function (e, n, s) {
      s.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = s(735250);
      s(470079);
      var l = s(442837),
        i = s(481060),
        a = s(655922),
        o = s(158776),
        d = s(981631),
        u = s(689938);
      function r(e) {
        let n = (0, l.e7)(
          [o.Z],
          () =>
            (0, a.Z)(o.Z.findActivity(e, (e) => e.type === d.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "watch-stream",
              label: u.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=294f9d4a2c2dbe6c7ae8.js.map
