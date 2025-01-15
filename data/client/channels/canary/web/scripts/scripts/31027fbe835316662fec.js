"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69220"],
  {
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(442837),
        l = t(314897),
        r = t(944486),
        o = t(590415);
      function d() {
        let e = (0, i.e7)([r.Z], () => r.Z.getVoiceChannelId()),
          n = (0, i.e7)([l.default], () => l.default.getId());
        return (
          (0, o.ZP)(n, e) === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(430824),
        d = t(594174),
        u = t(979651),
        a = t(471253),
        s = t(200498),
        c = t(88751),
        Z = t(267980),
        f = t(623633),
        g = t(388032);
      function m(e) {
        var n;
        let t = (0, f.Z)(),
          m = null == t ? void 0 : t.id,
          v = null == t ? void 0 : t.guild_id,
          x = (0, l.e7)([o.Z], () => o.Z.getGuild(v), [v]),
          M = (0, l.e7)(
            [u.Z],
            () => (null != m ? u.Z.getVoiceStateForChannel(m, e.id) : null),
            [m, e.id],
          ),
          b =
            (null === (n = d.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          h = (0, Z.Z)(),
          C = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [
            m,
            e.id,
          ]),
          I = (0, s.B)(m);
        if (null == t || null == x || null == M || C.speaker) return null;
        let j = () => {
          b ? (0, a.RK)(t, !1) : (0, a._0)(t, e.id);
        };
        return I
          ? (0, i.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: b
                ? g.intl.string(g.t["W6c/VV"])
                : g.intl.string(g.t.VUCWcH),
              action: j,
            })
          : h && b
            ? (0, i.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: g.intl.string(g.t["W6c/VV"]),
                action: j,
              })
            : null;
      }
    },
    881351: function (e, n, t) {
      t.r(n);
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(239091),
        o = t(883385),
        d = t(108843),
        u = t(947440),
        a = t(100527),
        s = t(299206),
        c = t(819403),
        Z = t(777658),
        f = t(858488),
        g = t(185457),
        m = t(389052),
        v = t(24311),
        x = t(158508),
        M = t(710631),
        b = t(88966),
        h = t(991307),
        C = t(37258),
        I = t(700994),
        j = t(332031),
        E = t(981631),
        U = t(388032);
      n.default = (0, d.Z)(
        (0, o.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channelId: o,
                showMediaItems: d = !1,
                mediaEngineContext: a,
                onSelect: E,
              } = e,
              A = (0, C.Z)({ userId: n.id, guildId: t, channelId: o }),
              L = (0, b.Z)(n.id),
              _ = (0, v.Z)({ user: n }),
              p = (0, g.Z)({ user: n, guildId: t, channelId: o }),
              T = (0, f.Z)({ user: n }),
              P = (0, j.Z)(n.id),
              k = (0, I.Z)(n.id),
              O = (0, h.Z)(n.id, a),
              S = (0, M.Z)({ user: n }),
              D = (0, u.Z)(null, n),
              N = (0, Z.Z)(n),
              V = (0, m.Z)({ user: n }),
              y = (0, x.Z)({ user: n }),
              F = (0, s.Z)({ id: n.id, label: U.intl.string(U.t["/AXYnJ"]) }),
              G = (0, c.Z)(n),
              w = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": U.intl.string(U.t.liqwPD),
              onSelect: E,
              children: [
                !w &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(l.MenuGroup, { children: G }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [A, L, _, p, T, P],
                      }),
                      d && (0, i.jsx)(l.MenuGroup, { children: k }),
                      (0, i.jsx)(l.MenuGroup, { children: D }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [d && O, S, N, y, V],
                      }),
                    ],
                  }),
                (0, i.jsx)(l.MenuGroup, { children: F }),
              ],
            });
          },
          { object: E.qAy.CONTEXT_MENU },
        ),
        [a.Z.CONTEXT_MENU, a.Z.USER_GENERIC_MENU],
      );
    },
    777658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        o = t(481060),
        d = t(194359),
        u = t(699516),
        a = t(594174),
        s = t(388032);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: Z } = e,
          f = (0, r.e7)(
            [a.default],
            () => {
              var e;
              return (
                (null === (e = a.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === t
              );
            },
            [t],
          ),
          [g, m] = (0, r.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [
            t,
          ]),
          [v, x] = l.useState(!1);
        return Z || f
          ? null
          : g
            ? (0, i.jsx)(o.MenuItem, {
                id: "remove-friend",
                label: s.intl.string(s.t.cvSt1N),
                action: function () {
                  (0, o.openModal)((e) =>
                    (0, i.jsx)(o.ConfirmModal, {
                      header: s.intl.formatToPlainString(s.t.fPLvZW, {
                        name: c,
                      }),
                      confirmText: s.intl.string(s.t.cvSt1N),
                      cancelText: s.intl.string(s.t["ETE/oK"]),
                      onConfirm: () => {
                        d.Z.removeFriend(t, { location: n }), x(!1);
                      },
                      ...e,
                      children: (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: s.intl.format(s.t.l5FFq6, { name: c }),
                      }),
                    }),
                  );
                },
              })
            : (0, i.jsx)(o.MenuItem, {
                id: "add-friend",
                label: v
                  ? s.intl.string(s.t.xMH6vL)
                  : s.intl.string(s.t.w5uwoK),
                action: () => {
                  !v &&
                    (d.Z.addRelationship({
                      userId: t,
                      context: { location: n },
                    }),
                    x(!0));
                },
                disabled: m || (v && !g),
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
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(699516),
        d = t(388032);
      function u(e) {
        let { user: n, onAction: u } = e,
          a = n.id,
          [s, c] = (0, l.Wu)(
            [o.Z],
            () => {
              var e;
              return [
                o.Z.isFriend(a),
                null !== (e = o.Z.getNickname(a)) && void 0 !== e ? e : null,
              ];
            },
            [a],
          );
        if (!s) return null;
        let Z =
          null == c ? d.intl.string(d.t.BGYkaG) : d.intl.string(d.t["8pOYUF"]);
        return (0, i.jsx)(r.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == u || u(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await t.e("25070").then(t.bind(t, 670794));
                return (t) => (0, i.jsx)(e, { user: n, nickname: c, ...t });
              });
          },
        });
      }
    },
    185457: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        o = t(906732),
        d = t(531301),
        u = t(171368),
        a = t(314897),
        s = t(246946),
        c = t(626135),
        Z = t(981631),
        f = t(228168),
        g = t(388032);
      function m(e) {
        let { user: n, guildId: t, channelId: m, context: v } = e,
          { id: x } = n,
          { loading: M, note: b } = (0, d.Z)(x),
          h = !M && null != b && b.length > 0,
          C = v === Z.IlC.POPOUT,
          I = l.useContext(c.AnalyticsContext),
          { analyticsLocations: j } = (0, o.ZP)();
        return x === a.default.getId() || s.Z.hidePersonalInformation || C
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "note",
              label: M
                ? g.intl.string(g.t["WLKx//"])
                : h
                  ? g.intl.string(g.t.sHHsOD)
                  : g.intl.string(g.t.Dglxra),
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: f.oh.USER_INFO,
                  subsection: f.Tb.NOTE,
                  guildId: t,
                  channelId: m,
                  sourceAnalyticsLocations: j,
                  analyticsLocation: I.location,
                });
              },
            });
      }
    },
    24311: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(493683),
        d = t(40851),
        u = t(740492),
        a = t(314897),
        s = t(592125),
        c = t(699516),
        Z = t(944486),
        f = t(981631),
        g = t(388032);
      function m(e) {
        let {
            user: n,
            context: m,
            label: v,
            joinCallVideo: x,
            id: M,
            onCall: b,
          } = e,
          h = (0, d.Aq)(),
          C = (0, l.e7)([a.default], () => a.default.getId() === n.id),
          I = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          j = (0, l.e7)(
            [Z.Z, s.Z],
            () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (C || m === f.IlC.POPOUT || j || n.bot || n.isProvisional)
          return null;
        let E = () => {
            null == b || b(),
              o.Z.openPrivateChannel(n.id, !0, x),
              h.dispatch(f.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          U = !u.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(r.MenuItem, {
          id: null != M ? M : "call",
          label: null != v ? v : g.intl.string(g.t.JJogjo),
          action: U
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, i.jsx)(e, { onSubmit: E, ...n });
                });
              }
            : E,
          disabled: I,
        });
      }
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(493683),
        d = t(40851),
        u = t(314897),
        a = t(981631),
        s = t(388032);
      function c(e, n) {
        let t = (0, d.Aq)();
        return (0, l.e7)([u.default], () => u.default.getId() === e) ||
          n === a.IlC.POPOUT
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                o.Z.openPrivateChannel(e),
                  t.dispatch(a.CkL.POPOUT_CLOSE),
                  (0, r.closeAllModals)();
              },
            });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(668781),
        d = t(846027),
        u = t(763296),
        a = t(131951),
        s = t(19780),
        c = t(914010),
        Z = t(594174),
        f = t(626135),
        g = t(981631),
        m = t(65154),
        v = t(388032),
        x = t(96907);
      function M(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : m.Yn.DEFAULT,
          t = (0, l.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          M = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: b,
            deafened: h = !1,
            localVideoDisabled: C = !1,
            localVideoAutoDisabled: I = !1,
          } = (0, l.cj)(
            [a.Z],
            () =>
              t
                ? { muted: a.Z.isSelfMute(n), deafened: a.Z.isSelfDeaf(n) }
                : {
                    muted: a.Z.isLocalMute(e, n),
                    localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                    localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n),
                  },
            [t, n, e],
          ),
          j =
            a.Z.supports(m.AN.DISABLE_VIDEO) && !t
              ? (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: v.intl.string(v.t["4MMsWF"]),
                    action: () => {
                      if (I) {
                        o.Z.show({
                          title: v.intl.string(v.t.m2Hyj4),
                          body: v.intl.string(v.t.EhaK6O),
                          confirmText: v.intl.string(v.t.ND1my8),
                          cancelText: v.intl.string(v.t.jEqEh4),
                          onConfirm: () =>
                            d.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = C ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                      d.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: C,
                    subtext: I
                      ? (0, i.jsxs)("div", {
                          className: x.videoPaused,
                          children: [
                            (0, i.jsx)(r.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: x.warningCircle,
                            }),
                            v.intl.string(v.t.m2Hyj4),
                          ],
                        })
                      : null,
                  },
                  "disable-video",
                )
              : null,
          E = t
            ? null
            : (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: v.intl.string(v.t.LxhEuL),
                  action: () => {
                    let t = s.Z.getRTCConnection();
                    f.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == t ? void 0 : t.getMediaSessionId(),
                      parent_media_session_id:
                        null == t ? void 0 : t.parentMediaSessionId,
                      mute_soundboard: !M,
                    }),
                      d.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: M,
                },
                "soundboard-sound-mute",
              );
        return t
          ? [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: v.intl.string(v.t.sWmtIy),
                  action: () =>
                    d.Z.toggleSelfMute({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: b,
                },
                "self-mute",
              ),
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: v.intl.string(v.t.wjcRFR),
                  action: () =>
                    d.Z.toggleSelfDeaf({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: h,
                },
                "self-deafen",
              ),
              j,
            ]
          : [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: v.intl.string(v.t.sWmtIy),
                  action: () => d.Z.toggleLocalMute(e, n),
                  checked: b,
                },
                "self-mute",
              ),
              E,
              j,
            ];
      }
    },
    700994: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(846027),
        d = t(131951),
        u = t(594174),
        a = t(36703),
        s = t(358085),
        c = t(65154),
        Z = t(388032);
      function f(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          f = (0, l.e7)([d.Z], () => d.Z.getLocalVolume(e, t), [e, t]),
          g =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          m = t === c.Yn.STREAM;
        return g
          ? null
          : (0, i.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: m ? Z.intl.string(Z.t.t4JBnJ) : Z.intl.string(Z.t.m7TNdH),
              control: (n, l) =>
                (0, i.jsx)(r.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, a.P)(f),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, a.A)(n), t),
                  "aria-label": m
                    ? Z.intl.string(Z.t.t4JBnJ)
                    : Z.intl.string(Z.t.m7TNdH),
                }),
            });
      }
    },
    332031: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(655922),
        d = t(158776),
        u = t(981631),
        a = t(388032);
      function s(e) {
        let n = (0, l.e7)(
          [d.Z],
          () =>
            (0, o.Z)(d.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "watch-stream",
              label: a.intl.string(a.t["7Xq/nZ"]),
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=31027fbe835316662fec.js.map
