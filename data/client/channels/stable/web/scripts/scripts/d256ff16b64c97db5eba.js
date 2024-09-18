"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84780"],
  {
    276022: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      }),
        l(653041);
      var i = l(735250),
        t = l(470079),
        a = l(442837),
        s = l(481060),
        o = l(139387),
        d = l(230711),
        u = l(213459),
        r = l(434404),
        c = l(430824),
        Z = l(496675),
        M = l(981631),
        E = l(689938);
      function f(e) {
        let { user: n, guildId: l, channel: f, context: _ } = e,
          I = c.Z.getGuild(l),
          A = (0, a.e7)([Z.Z], () =>
            null != I ? Z.Z.can(M.Plq.MANAGE_GUILD, I) : null,
          ),
          g = (0, u.em)(f, !0, !0),
          N = (0, u.PL)(!0, !0),
          { isUserApp: v, isGuildApp: b } = t.useMemo(() => {
            var e, l, i, t;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let a = Object.values(
                null !==
                  (i =
                    null === (e = g.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              ),
              s = Object.values(
                null !==
                  (t =
                    null === (l = N.result) || void 0 === l
                      ? void 0
                      : l.sections) && void 0 !== t
                  ? t
                  : {},
              );
            return {
              isGuildApp: a.some((e) => {
                var l;
                return (
                  (null === (l = e.descriptor.application) || void 0 === l
                    ? void 0
                    : l.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: s.some((e) => {
                var l;
                return (
                  (null === (l = e.descriptor.application) || void 0 === l
                    ? void 0
                    : l.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [g, N, null == n ? void 0 : n.id]),
          m = t.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              r.Z.open(I.id, M.pNK.INTEGRATIONS),
                o.Z.setSection(M.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == I ? void 0 : I.id]),
          p = t.useCallback(() => {
            d.Z.open(M.oAB.AUTHORIZED_APPS);
          }, []),
          C = _ === M.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !A || C || (!b && !v)) return null;
        let O = [];
        return (
          b &&
            O.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-integration",
                  label: E.Z.Messages.MANAGE_INTEGRATION,
                  action: m,
                },
                "manage-integration",
              ),
            ),
          v &&
            O.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: E.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: p,
                },
                "manage-authorized-app",
              ),
            ),
          O
        );
      }
    },
    251794: function (e, n, l) {
      l.d(n, {
        q: function () {
          return s;
        },
        z: function () {
          return a;
        },
      });
      var i = l(735250);
      l(470079);
      var t = l(481060);
      function a(e, n, a) {
        (0, t.openModalLazy)(async () => {
          let { default: t } = await l.e("72920").then(l.bind(l, 109730));
          return (l) =>
            (0, i.jsx)(t, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...l,
            });
        });
      }
      function s(e, n, a) {
        (0, t.openModalLazy)(async () => {
          let { default: t } = await l.e("76233").then(l.bind(l, 171494));
          return (l) =>
            (0, i.jsx)(t, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...l,
            });
        });
      }
    },
    415118: function (e, n, l) {
      l.r(n);
      var i = l(735250);
      l(470079);
      var t = l(481060),
        a = l(239091),
        s = l(883385),
        o = l(108843),
        d = l(947440),
        u = l(100527),
        r = l(299206),
        c = l(976192),
        Z = l(276022),
        M = l(777658),
        E = l(858488),
        f = l(185457),
        _ = l(933409),
        I = l(389052),
        A = l(24311),
        g = l(710631),
        N = l(297047),
        v = l(88966),
        b = l(712301),
        m = l(991307),
        p = l(725119),
        C = l(931617),
        O = l(700994),
        D = l(332031),
        T = l(981631),
        x = l(689938);
      n.default = (0, o.Z)(
        (0, s.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                showModalItems: s = !0,
                showMediaItems: o = !1,
                showChatItems: u = !0,
                context: U,
                onSelect: L,
              } = e,
              h = {
                page: T.ZY5.GUILD_CHANNEL,
                section: T.jXE.CHAT_USERNAME,
                object: T.qAy.CONTEXT_MENU_ITEM,
              },
              S = (0, p.Z)({ userId: n.id, guildId: l }),
              j = (0, N.Z)(n, l, U),
              R = (0, v.Z)(n.id, U),
              P = (0, D.Z)(n.id),
              k = (0, A.Z)({ user: n, context: U }),
              G = (0, f.Z)({ user: n, guildId: l, context: U }),
              V = (0, E.Z)({ user: n }),
              F = (0, O.Z)(n.id),
              y = (0, m.Z)(n.id),
              B = (0, c.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: h,
                context: U,
              }),
              w = (0, Z.Z)({ user: n, guildId: l }),
              z = (0, g.Z)({ user: n, guildId: l }),
              Y = (0, d.Z)(null, n),
              W = (0, M.Z)(n),
              H = (0, I.Z)({ user: n }),
              q = (0, _.Z)(n, l),
              X = (0, C.Z)(n.id, l),
              K = (0, b.Z)(n, l),
              J = (0, r.Z)({ id: n.id, label: x.Z.Messages.COPY_ID_USER }),
              Q = n.isNonUserBot();
            return (0, i.jsxs)(t.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": x.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: L,
              children: [
                !Q &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(t.MenuGroup, {
                        children: [s && S, u && j, R, k, s && G, s && V, P],
                      }),
                      o && (0, i.jsx)(t.MenuGroup, { children: F }),
                      (0, i.jsx)(t.MenuGroup, { children: s && Y }),
                      (0, i.jsxs)(t.MenuGroup, {
                        children: [o && y, s && B, s && z, W, w, s && H],
                      }),
                      (0, i.jsx)(t.MenuGroup, { children: q }),
                      (0, i.jsxs)(t.MenuGroup, { children: [X, K] }),
                    ],
                  }),
                (0, i.jsx)(t.MenuGroup, { children: J }),
              ],
            });
          },
          { object: T.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU],
      );
    },
    777658: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      }),
        l(47120);
      var i = l(735250),
        t = l(470079),
        a = l(442837),
        s = l(481060),
        o = l(194359),
        d = l(699516),
        u = l(594174),
        r = l(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: l, username: c, bot: Z } = e,
          M = (0, a.e7)(
            [u.default],
            () => {
              var e;
              return (
                (null === (e = u.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === l
              );
            },
            [l],
          ),
          [E, f] = (0, a.Wu)([d.Z], () => [d.Z.isFriend(l), d.Z.isBlocked(l)], [
            l,
          ]),
          [_, I] = t.useState(!1);
        return Z || M
          ? null
          : E
            ? (0, i.jsx)(s.MenuItem, {
                id: "remove-friend",
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, s.openModal)((e) =>
                    (0, i.jsx)(s.ConfirmModal, {
                      header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: r.Z.Messages.REMOVE_FRIEND,
                      cancelText: r.Z.Messages.CANCEL,
                      onConfirm: () => {
                        o.Z.removeFriend(l, { location: n }), I(!1);
                      },
                      ...e,
                      children: (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: r.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, i.jsx)(s.MenuItem, {
                id: "add-friend",
                label: _
                  ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : r.Z.Messages.ADD_FRIEND,
                action: () => {
                  !_ &&
                    (o.Z.addRelationship({
                      userId: l,
                      context: { location: n },
                    }),
                    I(!0));
                },
                disabled: f || (_ && !E),
              });
      }
    },
    858488: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return d;
        },
      }),
        l(47120);
      var i = l(735250);
      l(470079);
      var t = l(442837),
        a = l(481060),
        s = l(699516),
        o = l(689938);
      function d(e) {
        let { user: n, onAction: d } = e,
          u = n.id,
          [r, c] = (0, t.Wu)(
            [s.Z],
            () => {
              var e;
              return [
                s.Z.isFriend(u),
                null !== (e = s.Z.getNickname(u)) && void 0 !== e ? e : null,
              ];
            },
            [u],
          );
        if (!r) return null;
        let Z =
          null == c
            ? o.Z.Messages.ADD_FRIEND_NICKNAME
            : o.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, i.jsx)(a.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == d || d(),
              (0, a.openModalLazy)(async () => {
                let { default: e } = await l.e("25070").then(l.bind(l, 670794));
                return (l) => (0, i.jsx)(e, { user: n, nickname: c, ...l });
              });
          },
        });
      }
    },
    185457: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = l(735250),
        t = l(470079),
        a = l(481060),
        s = l(906732),
        o = l(531301),
        d = l(171368),
        u = l(314897),
        r = l(246946),
        c = l(626135),
        Z = l(981631),
        M = l(228168),
        E = l(689938);
      function f(e) {
        let { user: n, guildId: l, channelId: f, context: _ } = e,
          { id: I } = n,
          { loading: A, note: g } = (0, o.Z)(I),
          N = !A && null != g && g.length > 0,
          v = _ === Z.IlC.POPOUT,
          b = t.useContext(c.AnalyticsContext),
          { analyticsLocations: m } = (0, s.ZP)();
        return I === u.default.getId() || r.Z.hidePersonalInformation || v
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "note",
              label: A
                ? E.Z.Messages.LOADING_NOTE
                : N
                  ? E.Z.Messages.EDIT_NOTE
                  : E.Z.Messages.ADD_NOTE,
              action: () => {
                (0, d.openUserProfileModal)({
                  userId: n.id,
                  section: M.oh.USER_INFO,
                  subsection: M.Tb.NOTE,
                  guildId: l,
                  channelId: f,
                  sourceAnalyticsLocations: m,
                  analyticsLocation: b.location,
                });
              },
            });
      }
    },
    24311: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = l(735250);
      l(470079);
      var t = l(442837),
        a = l(481060),
        s = l(493683),
        o = l(40851),
        d = l(740492),
        u = l(314897),
        r = l(592125),
        c = l(699516),
        Z = l(944486),
        M = l(981631),
        E = l(689938);
      function f(e) {
        let {
            user: n,
            context: f,
            label: _,
            joinCallVideo: I,
            id: A,
            onCall: g,
          } = e,
          N = (0, o.Aq)(),
          v = (0, t.e7)([u.default], () => u.default.getId() === n.id),
          b = (0, t.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          m = (0, t.e7)(
            [Z.Z, r.Z],
            () => Z.Z.getVoiceChannelId() === r.Z.getDMFromUserId(n.id),
          );
        if (v || f === M.IlC.POPOUT || m || n.bot || n.isProvisional())
          return null;
        let p = () => {
            null == g || g(),
              s.Z.openPrivateChannel(n.id, !0, I),
              N.dispatch(M.CkL.POPOUT_CLOSE),
              (0, a.closeAllModals)();
          },
          C = !d.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(a.MenuItem, {
          id: null != A ? A : "call",
          label: null != _ ? _ : E.Z.Messages.CALL,
          action: C
            ? () => {
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("27157")
                    .then(l.bind(l, 736454));
                  return (n) => (0, i.jsx)(e, { onSubmit: p, ...n });
                });
              }
            : p,
          disabled: b,
        });
      }
    },
    991307: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return A;
        },
      });
      var i = l(735250);
      l(470079);
      var t = l(442837),
        a = l(481060),
        s = l(668781),
        o = l(846027),
        d = l(763296),
        u = l(131951),
        r = l(19780),
        c = l(914010),
        Z = l(594174),
        M = l(626135),
        E = l(981631),
        f = l(65154),
        _ = l(689938),
        I = l(201683);
      function A(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : f.Yn.DEFAULT,
          l = (0, t.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          A = (0, t.e7)([d.Z], () => d.Z.isLocalSoundboardMuted(e)),
          {
            muted: g,
            deafened: N = !1,
            localVideoDisabled: v = !1,
            localVideoAutoDisabled: b = !1,
          } = (0, t.cj)(
            [u.Z],
            () =>
              l
                ? { muted: u.Z.isSelfMute(n), deafened: u.Z.isSelfDeaf(n) }
                : {
                    muted: u.Z.isLocalMute(e, n),
                    localVideoDisabled: u.Z.isLocalVideoDisabled(e, n),
                    localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, n),
                  },
            [l, n, e],
          ),
          m =
            u.Z.supports(f.AN.DISABLE_VIDEO) && !l
              ? (0, i.jsx)(
                  a.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: _.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (b) {
                        s.Z.show({
                          title: _.Z.Messages.UNSTABLE_CONNECTION,
                          body: _.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                          confirmText: _.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                          cancelText: _.Z.Messages.LEAVE_VIDEO_OFF,
                          onConfirm: () =>
                            o.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let l = v ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, l, n);
                    },
                    checked: v,
                    subtext: b
                      ? (0, i.jsxs)("div", {
                          className: I.videoPaused,
                          children: [
                            (0, i.jsx)(a.CircleWarningIcon, {
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
          p = l
            ? null
            : (0, i.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: _.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let l = r.Z.getRTCConnection();
                    M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == l ? void 0 : l.getMediaSessionId(),
                      parent_media_session_id:
                        null == l ? void 0 : l.parentMediaSessionId,
                      mute_soundboard: !A,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: A,
                },
                "soundboard-sound-mute",
              );
        return l
          ? [
              (0, i.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "mute",
                  label: _.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleSelfMute({ context: n }),
                  checked: g,
                },
                "self-mute",
              ),
              (0, i.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: _.Z.Messages.DEAFEN,
                  action: () => o.Z.toggleSelfDeaf({ context: n }),
                  checked: N,
                },
                "self-deafen",
              ),
              m,
            ]
          : [
              (0, i.jsx)(
                a.MenuCheckboxItem,
                {
                  id: "mute",
                  label: _.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleLocalMute(e, n),
                  checked: g,
                },
                "self-mute",
              ),
              p,
              m,
            ];
      }
    },
    700994: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = l(735250);
      l(470079);
      var t = l(442837),
        a = l(481060),
        s = l(846027),
        o = l(131951),
        d = l(594174),
        u = l(36703),
        r = l(358085),
        c = l(65154),
        Z = l(689938);
      function M(e) {
        var n;
        let l =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          M = (0, t.e7)([o.Z], () => o.Z.getLocalVolume(e, l), [e, l]),
          E =
            e ===
            (null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          f = l === c.Yn.STREAM;
        return E
          ? null
          : (0, i.jsx)(a.MenuControlItem, {
              id: "user-volume",
              label: f ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, t) =>
                (0, i.jsx)(a.MenuSliderControl, {
                  ...n,
                  ref: t,
                  value: (0, u.P)(M),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => s.Z.setLocalVolume(e, (0, u.A)(n), l),
                  "aria-label": f
                    ? Z.Z.Messages.STREAM_VOLUME
                    : Z.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
    332031: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = l(735250);
      l(470079);
      var t = l(442837),
        a = l(481060),
        s = l(655922),
        o = l(158776),
        d = l(981631),
        u = l(689938);
      function r(e) {
        let n = (0, t.e7)(
          [o.Z],
          () =>
            (0, s.Z)(o.Z.findActivity(e, (e) => e.type === d.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "watch-stream",
              label: u.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
    745974: function (e, n, l) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    201683: function (e, n, l) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=d256ff16b64c97db5eba.js.map
