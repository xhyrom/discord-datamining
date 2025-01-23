"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31996"],
  {
    607783: function (n, t, e) {
      e.d(t, {
        B: function () {
          return g;
        },
      });
      var i = e(200651),
        l = e(192379),
        r = e(442837),
        o = e(481060),
        u = e(40851),
        a = e(352954),
        d = e(630759),
        s = e(441894),
        c = e(314897),
        f = e(388032);
      function g(n) {
        let { userId: t, channelId: e, guildId: g, location: Z } = n,
          m = (0, s.J)({ channelId: e, location: Z }),
          v = (0, r.e7)([c.default], () => c.default.getId() === t),
          b = (0, u.bp)(),
          x = l.useCallback(() => {
            a.Z.openSecureFramesUserVerificationModal(
              t,
              e,
              () => (0, d.fz)({ userId: t, channelId: e, guildId: g }),
              b,
            );
          }, [b, e, g, t]);
        return !m || v
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "secure-frames-user-verification",
              label: f.intl.string(f.t["8ErYvb"]),
              action: x,
            });
      }
    },
    267980: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(442837),
        l = e(314897),
        r = e(944486),
        o = e(590415);
      function u() {
        let n = (0, i.e7)([r.Z], () => r.Z.getVoiceChannelId()),
          t = (0, i.e7)([l.default], () => l.default.getId());
        return (
          (0, o.ZP)(t, n) === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(430824),
        u = e(594174),
        a = e(979651),
        d = e(471253),
        s = e(200498),
        c = e(88751),
        f = e(267980),
        g = e(623633),
        Z = e(388032);
      function m(n) {
        var t;
        let e = (0, g.Z)(),
          m = null == e ? void 0 : e.id,
          v = null == e ? void 0 : e.guild_id,
          b = (0, l.e7)([o.Z], () => o.Z.getGuild(v), [v]),
          x = (0, l.e7)(
            [a.Z],
            () => (null != m ? a.Z.getVoiceStateForChannel(m, n.id) : null),
            [m, n.id],
          ),
          M =
            (null === (t = u.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id) === n.id,
          I = (0, f.Z)(),
          h = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(n.id, m), [
            m,
            n.id,
          ]),
          C = (0, s.B)(m);
        if (null == e || null == b || null == x || h.speaker) return null;
        let p = () => {
          M ? (0, d.RK)(e, !1) : (0, d._0)(e, n.id);
        };
        return C
          ? (0, i.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: M
                ? Z.intl.string(Z.t["W6c/VV"])
                : Z.intl.string(Z.t.VUCWcH),
              action: p,
            })
          : I && M
            ? (0, i.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: Z.intl.string(Z.t["W6c/VV"]),
                action: p,
              })
            : null;
      }
    },
    777658: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      }),
        e(47120);
      var i = e(200651),
        l = e(192379),
        r = e(442837),
        o = e(481060),
        u = e(194359),
        a = e(699516),
        d = e(594174),
        s = e(388032);
      function c(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: e, username: c, bot: f } = n,
          g = (0, r.e7)(
            [d.default],
            () => {
              var n;
              return (
                (null === (n = d.default.getCurrentUser()) || void 0 === n
                  ? void 0
                  : n.id) === e
              );
            },
            [e],
          ),
          [Z, m] = (0, r.Wu)([a.Z], () => [a.Z.isFriend(e), a.Z.isBlocked(e)], [
            e,
          ]),
          [v, b] = l.useState(!1);
        return f || g
          ? null
          : Z
            ? (0, i.jsx)(o.MenuItem, {
                id: "remove-friend",
                label: s.intl.string(s.t.cvSt1N),
                action: function () {
                  (0, o.openModal)((n) =>
                    (0, i.jsx)(o.ConfirmModal, {
                      header: s.intl.formatToPlainString(s.t.fPLvZW, {
                        name: c,
                      }),
                      confirmText: s.intl.string(s.t.cvSt1N),
                      cancelText: s.intl.string(s.t["ETE/oK"]),
                      onConfirm: () => {
                        u.Z.removeFriend(e, { location: t }), b(!1);
                      },
                      ...n,
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
                    (u.Z.addRelationship({
                      userId: e,
                      context: { location: t },
                    }),
                    b(!0));
                },
                disabled: m || (v && !Z),
              });
      }
    },
    858488: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(699516),
        u = e(388032);
      function a(n) {
        let { user: t, onAction: a } = n,
          d = t.id,
          [s, c] = (0, l.Wu)(
            [o.Z],
            () => {
              var n;
              return [
                o.Z.isFriend(d),
                null !== (n = o.Z.getNickname(d)) && void 0 !== n ? n : null,
              ];
            },
            [d],
          );
        if (!s) return null;
        let f =
          null == c ? u.intl.string(u.t.BGYkaG) : u.intl.string(u.t["8pOYUF"]);
        return (0, i.jsx)(r.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: f,
          action: () => {
            null == a || a(),
              (0, r.openModalLazy)(async () => {
                let { default: n } = await e.e("25070").then(e.bind(e, 670794));
                return (e) => (0, i.jsx)(n, { user: t, nickname: c, ...e });
              });
          },
        });
      }
    },
    185457: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = e(200651),
        l = e(192379),
        r = e(481060),
        o = e(906732),
        u = e(531301),
        a = e(171368),
        d = e(314897),
        s = e(246946),
        c = e(626135),
        f = e(981631),
        g = e(228168),
        Z = e(388032);
      function m(n) {
        let { user: t, guildId: e, channelId: m, context: v } = n,
          { id: b } = t,
          { loading: x, note: M } = (0, u.Z)(b),
          I = !x && null != M && M.length > 0,
          h = v === f.IlC.POPOUT,
          C = l.useContext(c.AnalyticsContext),
          { analyticsLocations: p } = (0, o.ZP)();
        return b === d.default.getId() || s.Z.hidePersonalInformation || h
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "note",
              label: x
                ? Z.intl.string(Z.t["WLKx//"])
                : I
                  ? Z.intl.string(Z.t.sHHsOD)
                  : Z.intl.string(Z.t.Dglxra),
              action: () => {
                (0, a.openUserProfileModal)({
                  userId: t.id,
                  section: g.oh.USER_INFO,
                  subsection: g.Tb.NOTE,
                  guildId: e,
                  channelId: m,
                  sourceAnalyticsLocations: p,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(493683),
        u = e(40851),
        a = e(740492),
        d = e(314897),
        s = e(592125),
        c = e(699516),
        f = e(944486),
        g = e(981631),
        Z = e(388032);
      function m(n) {
        let {
            user: t,
            context: m,
            label: v,
            joinCallVideo: b,
            id: x,
            onCall: M,
          } = n,
          I = (0, u.Aq)(),
          h = (0, l.e7)([d.default], () => d.default.getId() === t.id),
          C = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
          p = (0, l.e7)(
            [f.Z, s.Z],
            () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(t.id),
          );
        if (h || m === g.IlC.POPOUT || p || t.bot || t.isProvisional)
          return null;
        let L = () => {
            null == M || M(),
              o.Z.openPrivateChannel(t.id, !0, b),
              I.dispatch(g.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          U = !a.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(r.MenuItem, {
          id: null != x ? x : "call",
          label: null != v ? v : Z.intl.string(Z.t.JJogjo),
          action: U
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: n } = await e
                    .e("27157")
                    .then(e.bind(e, 736454));
                  return (t) => (0, i.jsx)(n, { onSubmit: L, ...t });
                });
              }
            : L,
          disabled: C,
        });
      }
    },
    332576: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(475179),
        u = e(358221),
        a = e(979651),
        d = e(981631),
        s = e(388032);
      function c(n, t) {
        let e = (0, l.e7)([u.Z], () => n === u.Z.getSelectedParticipantId(t), [
          t,
          n,
        ]);
        return (0, l.e7)(
          [u.Z, a.Z],
          () => {
            let e = a.Z.isInChannel(t, n) && a.Z.hasVideo(t),
              i = u.Z.getLayout(t),
              l = i === d.AEg.MINIMUM || i === d.AEg.NORMAL;
            return !e || l;
          },
          [t, n],
        )
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "focus-video",
              label: e
                ? s.intl.string(s.t.KJPKUV)
                : s.intl.string(s.t["77cRNz"]),
              action: () => o.Z.selectParticipant(t, e ? null : n),
            });
      }
    },
    558924: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(26151),
        u = e(358221),
        a = e(985588),
        d = e(354459),
        s = e(388032);
      function c(n, t) {
        let [e, c] = (0, l.Wu)(
          [u.Z],
          () => [
            null != t ? u.Z.getParticipants(t) : null,
            null != t ? u.Z.getParticipant(t, n.id) : null,
          ],
          [t, n.id],
        );
        return (0, a.s)(n, "context_menu", t) &&
          (null == e ? void 0 : e.length) !== 0 &&
          null != t
          ? null == c
            ? (0, i.jsx)(r.MenuItem, {
                id: "ring",
                label: s.intl.string(s.t.bHa9kJ),
                action: () => o.Z.ring(t, [n.id]),
              })
            : c.type === d.fO.USER && c.ringing
              ? (0, i.jsx)(r.MenuItem, {
                  id: "stop-ringing",
                  label: s.intl.string(s.t.ygslb2),
                  action: () => o.Z.stopRinging(t, [n.id]),
                })
              : null
          : null;
      }
    },
    991307: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return x;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(668781),
        u = e(846027),
        a = e(763296),
        d = e(131951),
        s = e(19780),
        c = e(914010),
        f = e(594174),
        g = e(626135),
        Z = e(981631),
        m = e(65154),
        v = e(388032),
        b = e(705197);
      function x(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : m.Yn.DEFAULT,
          e = (0, l.e7)([f.default], () => {
            var t;
            return (
              (null === (t = f.default.getCurrentUser()) || void 0 === t
                ? void 0
                : t.id) === n
            );
          }),
          x = (0, l.e7)([a.Z], () => a.Z.isLocalSoundboardMuted(n)),
          {
            muted: M,
            deafened: I = !1,
            localVideoDisabled: h = !1,
            localVideoAutoDisabled: C = !1,
          } = (0, l.cj)(
            [d.Z],
            () =>
              e
                ? { muted: d.Z.isSelfMute(t), deafened: d.Z.isSelfDeaf(t) }
                : {
                    muted: d.Z.isLocalMute(n, t),
                    localVideoDisabled: d.Z.isLocalVideoDisabled(n, t),
                    localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(n, t),
                  },
            [e, t, n],
          ),
          p =
            d.Z.supports(m.AN.DISABLE_VIDEO) && !e
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
                            u.Z.setDisableLocalVideo(n, Z.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let e = h ? Z.ZUi.MANUAL_ENABLED : Z.ZUi.DISABLED;
                      u.Z.setDisableLocalVideo(n, e, t);
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
          L = e
            ? null
            : (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: v.intl.string(v.t.LxhEuL),
                  action: () => {
                    let e = s.Z.getRTCConnection();
                    g.default.track(Z.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: n,
                      media_session_id:
                        null == e ? void 0 : e.getMediaSessionId(),
                      parent_media_session_id:
                        null == e ? void 0 : e.parentMediaSessionId,
                      mute_soundboard: !x,
                    }),
                      u.Z.toggleLocalSoundboardMute(n, t);
                  },
                  checked: x,
                },
                "soundboard-sound-mute",
              );
        return e
          ? [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: v.intl.string(v.t.sWmtIy),
                  action: () =>
                    u.Z.toggleSelfMute({
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
                    u.Z.toggleSelfDeaf({
                      context: t,
                      location: "User Context Menu",
                    }),
                  checked: I,
                },
                "self-deafen",
              ),
              p,
            ]
          : [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: v.intl.string(v.t.sWmtIy),
                  action: () => u.Z.toggleLocalMute(n, t),
                  checked: M,
                },
                "self-mute",
              ),
              L,
              p,
            ];
      }
    },
    700994: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(846027),
        u = e(131951),
        a = e(594174),
        d = e(36703),
        s = e(358085),
        c = e(65154),
        f = e(388032);
      function g(n) {
        var t;
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          g = (0, l.e7)([u.Z], () => u.Z.getLocalVolume(n, e), [n, e]),
          Z =
            n ===
            (null === (t = a.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id),
          m = e === c.Yn.STREAM;
        return Z
          ? null
          : (0, i.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: m ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH),
              control: (t, l) =>
                (0, i.jsx)(r.MenuSliderControl, {
                  ...t,
                  ref: l,
                  value: (0, d.P)(g),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (t) => o.Z.setLocalVolume(n, (0, d.A)(t), e),
                  "aria-label": m
                    ? f.intl.string(f.t.t4JBnJ)
                    : f.intl.string(f.t.m7TNdH),
                }),
            });
      }
    },
    332031: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        r = e(481060),
        o = e(655922),
        u = e(158776),
        a = e(981631),
        d = e(388032);
      function s(n) {
        let t = (0, l.e7)(
          [u.Z],
          () =>
            (0, o.Z)(u.Z.findActivity(n, (n) => n.type === a.IIU.STREAMING)),
          [n],
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
//# sourceMappingURL=b15c7fe61af0f987ccfa.js.map
