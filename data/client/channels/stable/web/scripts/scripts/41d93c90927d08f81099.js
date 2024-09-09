"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90578"],
  {
    276022: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return _;
        },
      }),
        i(653041);
      var l = i(735250),
        t = i(470079),
        s = i(442837),
        a = i(481060),
        o = i(139387),
        u = i(230711),
        d = i(213459),
        r = i(434404),
        c = i(430824),
        Z = i(496675),
        M = i(981631),
        E = i(689938);
      function _(e) {
        let { user: n, guildId: i, channel: _, context: f } = e,
          N = c.Z.getGuild(i),
          A = (0, s.e7)([Z.Z], () =>
            null != N ? Z.Z.can(M.Plq.MANAGE_GUILD, N) : null,
          ),
          I = (0, d.em)(_, !0, !0),
          g = (0, d.PL)(!0, !0),
          { isUserApp: v, isGuildApp: b } = t.useMemo(() => {
            var e, i, l, t;
            if ((null == n ? void 0 : n.id) == null)
              return { isGuildApp: !1, isUserApp: !1 };
            let s = Object.values(
                null !==
                  (l =
                    null === (e = I.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== l
                  ? l
                  : {},
              ),
              a = Object.values(
                null !==
                  (t =
                    null === (i = g.result) || void 0 === i
                      ? void 0
                      : i.sections) && void 0 !== t
                  ? t
                  : {},
              );
            return {
              isGuildApp: s.some((e) => {
                var i;
                return (
                  (null === (i = e.descriptor.application) || void 0 === i
                    ? void 0
                    : i.id) === (null == n ? void 0 : n.id)
                );
              }),
              isUserApp: a.some((e) => {
                var i;
                return (
                  (null === (i = e.descriptor.application) || void 0 === i
                    ? void 0
                    : i.id) === (null == n ? void 0 : n.id)
                );
              }),
            };
          }, [I, g, null == n ? void 0 : n.id]),
          m = t.useCallback(() => {
            if ((null == N ? void 0 : N.id) != null)
              r.Z.open(N.id, M.pNK.INTEGRATIONS),
                o.Z.setSection(M.b4C.APPLICATION, null == n ? void 0 : n.id);
          }, [null == n ? void 0 : n.id, null == N ? void 0 : N.id]),
          p = t.useCallback(() => {
            u.Z.open(M.oAB.AUTHORIZED_APPS);
          }, []),
          D = f === M.IlC.POPOUT;
        if (!(null == n ? void 0 : n.bot) || !A || D || (!b && !v)) return null;
        let T = [];
        return (
          b &&
            T.push(
              (0, l.jsx)(
                a.MenuItem,
                {
                  id: "manage-integration",
                  label: E.Z.Messages.MANAGE_INTEGRATION,
                  action: m,
                },
                "manage-integration",
              ),
            ),
          v &&
            T.push(
              (0, l.jsx)(
                a.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: E.Z.Messages.MANAGE_AUTHORIZED_APP,
                  action: p,
                },
                "manage-authorized-app",
              ),
            ),
          T
        );
      }
    },
    251794: function (e, n, i) {
      i.d(n, {
        q: function () {
          return a;
        },
        z: function () {
          return s;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(481060);
      function s(e, n, s) {
        (0, t.openModalLazy)(async () => {
          let { default: t } = await i.e("72920").then(i.bind(i, 109730));
          return (i) =>
            (0, l.jsx)(t, {
              guildId: e,
              userId: n,
              anaylticsLocations: s,
              ...i,
            });
        });
      }
      function a(e, n, s) {
        (0, t.openModalLazy)(async () => {
          let { default: t } = await i.e("76233").then(i.bind(i, 171494));
          return (i) =>
            (0, l.jsx)(t, {
              guildId: e,
              userId: n,
              anaylticsLocations: s,
              ...i,
            });
        });
      }
    },
    48211: function (e, n, i) {
      i.r(n);
      var l = i(735250);
      i(470079);
      var t = i(481060),
        s = i(239091),
        a = i(883385),
        o = i(108843),
        u = i(947440),
        d = i(100527),
        r = i(299206),
        c = i(976192),
        Z = i(276022),
        M = i(777658),
        E = i(858488),
        _ = i(185457),
        f = i(933409),
        N = i(389052),
        A = i(24311),
        I = i(710631),
        g = i(297047),
        v = i(88966),
        b = i(712301),
        m = i(991307),
        p = i(725119),
        D = i(931617),
        T = i(700994),
        x = i(332031),
        O = i(981631),
        C = i(689938);
      n.default = (0, o.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: i,
                showModalItems: a = !0,
                showMediaItems: o = !1,
                showChatItems: d = !0,
                context: U,
                onSelect: L,
              } = e,
              h = {
                page: O.ZY5.GUILD_CHANNEL,
                section: O.jXE.CHAT_USERNAME,
                object: O.qAy.CONTEXT_MENU_ITEM,
              },
              S = (0, p.Z)({ userId: n.id, guildId: i }),
              R = (0, g.Z)(n, i, U),
              j = (0, v.Z)(n.id, U),
              G = (0, x.Z)(n.id),
              k = (0, A.Z)({ user: n, context: U }),
              V = (0, _.Z)({ user: n, guildId: i, context: U }),
              P = (0, E.Z)({ user: n }),
              F = (0, T.Z)(n.id),
              y = (0, m.Z)(n.id),
              B = (0, c.Z)({
                guildId: i,
                userId: n.id,
                analyticsLocation: h,
                context: U,
              }),
              w = (0, Z.Z)({ user: n, guildId: i }),
              Y = (0, I.Z)({ user: n, guildId: i }),
              z = (0, u.Z)(null, n),
              W = (0, M.Z)(n),
              H = (0, N.Z)({ user: n }),
              q = (0, f.Z)(n, i),
              X = (0, D.Z)(n.id, i),
              K = (0, b.Z)(n, i),
              J = (0, r.Z)({ id: n.id, label: C.Z.Messages.COPY_ID_USER }),
              Q = n.isNonUserBot();
            return (0, l.jsxs)(t.Menu, {
              navId: "user-context",
              onClose: s.Zy,
              "aria-label": C.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: L,
              children: [
                !Q &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)(t.MenuGroup, {
                        children: [a && S, d && R, j, k, a && V, a && P, G],
                      }),
                      o && (0, l.jsx)(t.MenuGroup, { children: F }),
                      (0, l.jsx)(t.MenuGroup, { children: a && z }),
                      (0, l.jsxs)(t.MenuGroup, {
                        children: [o && y, a && B, a && Y, W, w, a && H],
                      }),
                      (0, l.jsx)(t.MenuGroup, { children: q }),
                      (0, l.jsxs)(t.MenuGroup, { children: [X, K] }),
                    ],
                  }),
                (0, l.jsx)(t.MenuGroup, { children: J }),
              ],
            });
          },
          { object: O.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.GUILD_USER_MENU],
      );
    },
    777658: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      }),
        i(47120);
      var l = i(735250),
        t = i(470079),
        s = i(442837),
        a = i(481060),
        o = i(194359),
        u = i(699516),
        d = i(594174),
        r = i(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: i, username: c, bot: Z } = e,
          M = (0, s.e7)(
            [d.default],
            () => {
              var e;
              return (
                (null === (e = d.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === i
              );
            },
            [i],
          ),
          [E, _] = (0, s.Wu)([u.Z], () => [u.Z.isFriend(i), u.Z.isBlocked(i)], [
            i,
          ]),
          [f, N] = t.useState(!1);
        return Z || M
          ? null
          : E
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
                        o.Z.removeFriend(i, { location: n }), N(!1);
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
                      userId: i,
                      context: { location: n },
                    }),
                    N(!0));
                },
                disabled: _ || (f && !E),
              });
      }
    },
    858488: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return u;
        },
      }),
        i(47120);
      var l = i(735250);
      i(470079);
      var t = i(442837),
        s = i(481060),
        a = i(699516),
        o = i(689938);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
          [r, c] = (0, t.Wu)(
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
        return (0, l.jsx)(s.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == u || u(),
              (0, s.openModalLazy)(async () => {
                let { default: e } = await i.e("25070").then(i.bind(i, 670794));
                return (i) => (0, l.jsx)(e, { user: n, nickname: c, ...i });
              });
          },
        });
      }
    },
    185457: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = i(735250),
        t = i(470079),
        s = i(481060),
        a = i(906732),
        o = i(531301),
        u = i(171368),
        d = i(314897),
        r = i(246946),
        c = i(626135),
        Z = i(981631),
        M = i(228168),
        E = i(689938);
      function _(e) {
        let { user: n, guildId: i, channelId: _, context: f } = e,
          { id: N } = n,
          { loading: A, note: I } = (0, o.Z)(N),
          g = !A && null != I && I.length > 0,
          v = f === Z.IlC.POPOUT,
          b = t.useContext(c.AnalyticsContext),
          { analyticsLocations: m } = (0, a.ZP)();
        return N === d.default.getId() || r.Z.hidePersonalInformation || v
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "note",
              label: A
                ? E.Z.Messages.LOADING_NOTE
                : g
                  ? E.Z.Messages.EDIT_NOTE
                  : E.Z.Messages.ADD_NOTE,
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: M.oh.USER_INFO,
                  subsection: M.Tb.NOTE,
                  guildId: i,
                  channelId: _,
                  sourceAnalyticsLocations: m,
                  analyticsLocation: b.location,
                });
              },
            });
      }
    },
    991307: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return A;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(442837),
        s = i(481060),
        a = i(668781),
        o = i(846027),
        u = i(763296),
        d = i(131951),
        r = i(19780),
        c = i(914010),
        Z = i(594174),
        M = i(626135),
        E = i(981631),
        _ = i(65154),
        f = i(689938),
        N = i(480881);
      function A(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : _.Yn.DEFAULT,
          i = (0, t.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          A = (0, t.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: I,
            deafened: g = !1,
            localVideoDisabled: v = !1,
            localVideoAutoDisabled: b = !1,
          } = (0, t.cj)(
            [d.Z],
            () =>
              i
                ? { muted: d.Z.isSelfMute(n), deafened: d.Z.isSelfDeaf(n) }
                : {
                    muted: d.Z.isLocalMute(e, n),
                    localVideoDisabled: d.Z.isLocalVideoDisabled(e, n),
                    localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, n),
                  },
            [i, n, e],
          ),
          m =
            d.Z.supports(_.AN.DISABLE_VIDEO) && !i
              ? (0, l.jsx)(
                  s.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: f.Z.Messages.DISABLE_VIDEO,
                    action: () => {
                      if (b) {
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
                      let i = v ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                      o.Z.setDisableLocalVideo(e, i, n);
                    },
                    checked: v,
                    subtext: b
                      ? (0, l.jsxs)("div", {
                          className: N.videoPaused,
                          children: [
                            (0, l.jsx)(s.CircleWarningIcon, {
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
          p = i
            ? null
            : (0, l.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: f.Z.Messages.MUTE_SOUNDBOARD,
                  action: () => {
                    let i = r.Z.getRTCConnection();
                    M.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == i ? void 0 : i.getMediaSessionId(),
                      parent_media_session_id:
                        null == i ? void 0 : i.parentMediaSessionId,
                      mute_soundboard: !A,
                    }),
                      o.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: A,
                },
                "soundboard-sound-mute",
              );
        return i
          ? [
              (0, l.jsx)(
                s.MenuCheckboxItem,
                {
                  id: "mute",
                  label: f.Z.Messages.SOUND_MUTE,
                  action: () => o.Z.toggleSelfMute({ context: n }),
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
                  checked: g,
                },
                "self-deafen",
              ),
              m,
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
              p,
              m,
            ];
      }
    },
    700994: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return M;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(442837),
        s = i(481060),
        a = i(846027),
        o = i(131951),
        u = i(594174),
        d = i(36703),
        r = i(358085),
        c = i(65154),
        Z = i(689938);
      function M(e) {
        var n;
        let i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          M = (0, t.e7)([o.Z], () => o.Z.getLocalVolume(e, i), [e, i]),
          E =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          _ = i === c.Yn.STREAM;
        return E
          ? null
          : (0, l.jsx)(s.MenuControlItem, {
              id: "user-volume",
              label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
              control: (n, t) =>
                (0, l.jsx)(s.MenuSliderControl, {
                  ...n,
                  ref: t,
                  value: (0, d.P)(M),
                  maxValue: r.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => a.Z.setLocalVolume(e, (0, d.A)(n), i),
                  "aria-label": _
                    ? Z.Z.Messages.STREAM_VOLUME
                    : Z.Z.Messages.USER_VOLUME,
                }),
            });
      }
    },
    332031: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = i(735250);
      i(470079);
      var t = i(442837),
        s = i(481060),
        a = i(655922),
        o = i(158776),
        u = i(981631),
        d = i(689938);
      function r(e) {
        let n = (0, t.e7)(
          [o.Z],
          () =>
            (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, l.jsx)(s.MenuItem, {
              id: "watch-stream",
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
    936124: function (e, n, i) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    480881: function (e, n, i) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    522425: function (e, n, i) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=41d93c90927d08f81099.js.map
