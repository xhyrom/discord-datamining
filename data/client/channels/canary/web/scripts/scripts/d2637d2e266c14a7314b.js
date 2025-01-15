"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92453"],
  {
    607783: function (e, t, n) {
      n.d(t, {
        B: function () {
          return Z;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(40851),
        u = n(352954),
        d = n(630759),
        s = n(441894),
        c = n(314897),
        f = n(388032);
      function Z(e) {
        let { userId: t, channelId: n, guildId: Z, location: g } = e,
          m = (0, s.J)({ channelId: n, location: g }),
          v = (0, r.e7)([c.default], () => c.default.getId() === t),
          b = (0, a.bp)(),
          x = l.useCallback(() => {
            u.Z.openSecureFramesUserVerificationModal(
              t,
              n,
              () => (0, d.fz)({ userId: t, channelId: n, guildId: Z }),
              b,
            );
          }, [b, n, Z, t]);
        return !m || v
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "secure-frames-user-verification",
              label: f.intl.string(f.t["8ErYvb"]),
              action: x,
            });
      }
    },
    267980: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(442837),
        l = n(314897),
        r = n(944486),
        o = n(590415);
      function a() {
        let e = (0, i.e7)([r.Z], () => r.Z.getVoiceChannelId()),
          t = (0, i.e7)([l.default], () => l.default.getId());
        return (
          (0, o.ZP)(t, e) === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(430824),
        a = n(594174),
        u = n(979651),
        d = n(471253),
        s = n(200498),
        c = n(88751),
        f = n(267980),
        Z = n(623633),
        g = n(388032);
      function m(e) {
        var t;
        let n = (0, Z.Z)(),
          m = null == n ? void 0 : n.id,
          v = null == n ? void 0 : n.guild_id,
          b = (0, l.e7)([o.Z], () => o.Z.getGuild(v), [v]),
          x = (0, l.e7)(
            [u.Z],
            () => (null != m ? u.Z.getVoiceStateForChannel(m, e.id) : null),
            [m, e.id],
          ),
          M =
            (null === (t = a.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === e.id,
          I = (0, f.Z)(),
          h = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [
            m,
            e.id,
          ]),
          C = (0, s.B)(m);
        if (null == n || null == b || null == x || h.speaker) return null;
        let L = () => {
          M ? (0, d.RK)(n, !1) : (0, d._0)(n, e.id);
        };
        return C
          ? (0, i.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: M
                ? g.intl.string(g.t["W6c/VV"])
                : g.intl.string(g.t.VUCWcH),
              action: L,
            })
          : I && M
            ? (0, i.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: g.intl.string(g.t["W6c/VV"]),
                action: L,
              })
            : null;
      }
    },
    777658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(194359),
        u = n(699516),
        d = n(594174),
        s = n(388032);
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: n, username: c, bot: f } = e,
          Z = (0, r.e7)(
            [d.default],
            () => {
              var e;
              return (
                (null === (e = d.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === n
              );
            },
            [n],
          ),
          [g, m] = (0, r.Wu)([u.Z], () => [u.Z.isFriend(n), u.Z.isBlocked(n)], [
            n,
          ]),
          [v, b] = l.useState(!1);
        return f || Z
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
                        a.Z.removeFriend(n, { location: t }), b(!1);
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
                    (a.Z.addRelationship({
                      userId: n,
                      context: { location: t },
                    }),
                    b(!0));
                },
                disabled: m || (v && !g),
              });
      }
    },
    858488: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(699516),
        a = n(388032);
      function u(e) {
        let { user: t, onAction: u } = e,
          d = t.id,
          [s, c] = (0, l.Wu)(
            [o.Z],
            () => {
              var e;
              return [
                o.Z.isFriend(d),
                null !== (e = o.Z.getNickname(d)) && void 0 !== e ? e : null,
              ];
            },
            [d],
          );
        if (!s) return null;
        let f =
          null == c ? a.intl.string(a.t.BGYkaG) : a.intl.string(a.t["8pOYUF"]);
        return (0, i.jsx)(r.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: f,
          action: () => {
            null == u || u(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("25070").then(n.bind(n, 670794));
                return (n) => (0, i.jsx)(e, { user: t, nickname: c, ...n });
              });
          },
        });
      }
    },
    185457: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(481060),
        o = n(906732),
        a = n(531301),
        u = n(171368),
        d = n(314897),
        s = n(246946),
        c = n(626135),
        f = n(981631),
        Z = n(228168),
        g = n(388032);
      function m(e) {
        let { user: t, guildId: n, channelId: m, context: v } = e,
          { id: b } = t,
          { loading: x, note: M } = (0, a.Z)(b),
          I = !x && null != M && M.length > 0,
          h = v === f.IlC.POPOUT,
          C = l.useContext(c.AnalyticsContext),
          { analyticsLocations: L } = (0, o.ZP)();
        return b === d.default.getId() || s.Z.hidePersonalInformation || h
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "note",
              label: x
                ? g.intl.string(g.t["WLKx//"])
                : I
                  ? g.intl.string(g.t.sHHsOD)
                  : g.intl.string(g.t.Dglxra),
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: t.id,
                  section: Z.oh.USER_INFO,
                  subsection: Z.Tb.NOTE,
                  guildId: n,
                  channelId: m,
                  sourceAnalyticsLocations: L,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(493683),
        a = n(40851),
        u = n(740492),
        d = n(314897),
        s = n(592125),
        c = n(699516),
        f = n(944486),
        Z = n(981631),
        g = n(388032);
      function m(e) {
        let {
            user: t,
            context: m,
            label: v,
            joinCallVideo: b,
            id: x,
            onCall: M,
          } = e,
          I = (0, a.Aq)(),
          h = (0, l.e7)([d.default], () => d.default.getId() === t.id),
          C = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
          L = (0, l.e7)(
            [f.Z, s.Z],
            () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(t.id),
          );
        if (h || m === Z.IlC.POPOUT || L || t.bot || t.isProvisional)
          return null;
        let A = () => {
            null == M || M(),
              o.Z.openPrivateChannel(t.id, !0, b),
              I.dispatch(Z.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          U = !u.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(r.MenuItem, {
          id: null != x ? x : "call",
          label: null != v ? v : g.intl.string(g.t.JJogjo),
          action: U
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("27157")
                    .then(n.bind(n, 736454));
                  return (t) => (0, i.jsx)(e, { onSubmit: A, ...t });
                });
              }
            : A,
          disabled: C,
        });
      }
    },
    332576: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(475179),
        a = n(358221),
        u = n(979651),
        d = n(981631),
        s = n(388032);
      function c(e, t) {
        let n = (0, l.e7)([a.Z], () => e === a.Z.getSelectedParticipantId(t), [
          t,
          e,
        ]);
        return (0, l.e7)(
          [a.Z, u.Z],
          () => {
            let n = u.Z.isInChannel(t, e) && u.Z.hasVideo(t),
              i = a.Z.getLayout(t),
              l = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
            return !n || l;
          },
          [t, e],
        )
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "focus-video",
              label: n
                ? s.intl.string(s.t.KJPKUV)
                : s.intl.string(s.t["77cRNz"]),
              action: () => o.Z.selectParticipant(t, n ? null : e),
            });
      }
    },
    991307: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(668781),
        a = n(846027),
        u = n(763296),
        d = n(131951),
        s = n(19780),
        c = n(914010),
        f = n(594174),
        Z = n(626135),
        g = n(981631),
        m = n(65154),
        v = n(388032),
        b = n(96907);
      function x(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : m.Yn.DEFAULT,
          n = (0, l.e7)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === e
            );
          }),
          x = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: M,
            deafened: I = !1,
            localVideoDisabled: h = !1,
            localVideoAutoDisabled: C = !1,
          } = (0, l.cj)(
            [d.Z],
            () =>
              n
                ? { muted: d.Z.isSelfMute(t), deafened: d.Z.isSelfDeaf(t) }
                : {
                    muted: d.Z.isLocalMute(e, t),
                    localVideoDisabled: d.Z.isLocalVideoDisabled(e, t),
                    localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, t),
                  },
            [n, t, e],
          ),
          L =
            d.Z.supports(m.AN.DISABLE_VIDEO) && !n
              ? (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: v.intl.string(v.t["4MMsWF"]),
                    action: () => {
                      if (C) {
                        o.Z.show({
                          title: v.intl.string(v.t.m2Hyj4),
                          body: v.intl.string(v.t.EhaK6O),
                          confirmText: v.intl.string(v.t.ND1my8),
                          cancelText: v.intl.string(v.t.jEqEh4),
                          onConfirm: () =>
                            a.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let n = h ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                      a.Z.setDisableLocalVideo(e, n, t);
                    },
                    checked: h,
                    subtext: C
                      ? (0, i.jsxs)("div", {
                          className: b.videoPaused,
                          children: [
                            (0, i.jsx)(r.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: b.warningCircle,
                            }),
                            v.intl.string(v.t.m2Hyj4),
                          ],
                        })
                      : null,
                  },
                  "disable-video",
                )
              : null,
          A = n
            ? null
            : (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: v.intl.string(v.t.LxhEuL),
                  action: () => {
                    let n = s.Z.getRTCConnection();
                    Z.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == n ? void 0 : n.getMediaSessionId(),
                      parent_media_session_id:
                        null == n ? void 0 : n.parentMediaSessionId,
                      mute_soundboard: !x,
                    }),
                      a.Z.toggleLocalSoundboardMute(e, t);
                  },
                  checked: x,
                },
                "soundboard-sound-mute",
              );
        return n
          ? [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: v.intl.string(v.t.sWmtIy),
                  action: () =>
                    a.Z.toggleSelfMute({
                      context: t,
                      location: "User Context Menu",
                    }),
                  checked: M,
                },
                "self-mute",
              ),
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: v.intl.string(v.t.wjcRFR),
                  action: () =>
                    a.Z.toggleSelfDeaf({
                      context: t,
                      location: "User Context Menu",
                    }),
                  checked: I,
                },
                "self-deafen",
              ),
              L,
            ]
          : [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: v.intl.string(v.t.sWmtIy),
                  action: () => a.Z.toggleLocalMute(e, t),
                  checked: M,
                },
                "self-mute",
              ),
              A,
              L,
            ];
      }
    },
    700994: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(846027),
        a = n(131951),
        u = n(594174),
        d = n(36703),
        s = n(358085),
        c = n(65154),
        f = n(388032);
      function Z(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          Z = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, n), [e, n]),
          g =
            e ===
            (null === (t = u.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          m = n === c.Yn.STREAM;
        return g
          ? null
          : (0, i.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: m ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH),
              control: (t, l) =>
                (0, i.jsx)(r.MenuSliderControl, {
                  ...t,
                  ref: l,
                  value: (0, d.P)(Z),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (t) => o.Z.setLocalVolume(e, (0, d.A)(t), n),
                  "aria-label": m
                    ? f.intl.string(f.t.t4JBnJ)
                    : f.intl.string(f.t.m7TNdH),
                }),
            });
      }
    },
    332031: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(442837),
        r = n(481060),
        o = n(655922),
        a = n(158776),
        u = n(981631),
        d = n(388032);
      function s(e) {
        let t = (0, l.e7)(
          [a.Z],
          () =>
            (0, o.Z)(a.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == t
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "watch-stream",
              label: d.intl.string(d.t["7Xq/nZ"]),
              action: () => window.open(t, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=d2637d2e266c14a7314b.js.map
