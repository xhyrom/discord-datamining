"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69220"],
  {
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(442837),
        l = t(314897),
        r = t(944486),
        o = t(590415);
      function a() {
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
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(430824),
        a = t(594174),
        u = t(979651),
        d = t(471253),
        s = t(200498),
        c = t(88751),
        Z = t(267980),
        f = t(623633),
        m = t(388032);
      function g(e) {
        var n;
        let t = (0, f.Z)(),
          g = null == t ? void 0 : t.id,
          x = null == t ? void 0 : t.guild_id,
          v = (0, l.e7)([o.Z], () => o.Z.getGuild(x), [x]),
          h = (0, l.e7)(
            [u.Z],
            () => (null != g ? u.Z.getVoiceStateForChannel(g, e.id) : null),
            [g, e.id],
          ),
          M =
            (null === (n = a.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          b = (0, Z.Z)(),
          I = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, g), [
            g,
            e.id,
          ]),
          C = (0, s.B)(g);
        if (null == t || null == v || null == h || I.speaker) return null;
        let j = () => {
          M ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
        };
        return C
          ? (0, i.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: M
                ? m.intl.string(m.t["W6c/VV"])
                : m.intl.string(m.t.VUCWcH),
              action: j,
            })
          : b && M
            ? (0, i.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: m.intl.string(m.t["W6c/VV"]),
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
        a = t(108843),
        u = t(947440),
        d = t(100527),
        s = t(299206),
        c = t(819403),
        Z = t(777658),
        f = t(858488),
        m = t(44652),
        g = t(185457),
        x = t(389052),
        v = t(24311),
        h = t(158508),
        M = t(710631),
        b = t(88966),
        I = t(47091),
        C = t(991307),
        j = t(37258),
        p = t(700994),
        E = t(332031),
        L = t(981631),
        U = t(388032);
      n.default = (0, a.Z)(
        (0, o.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channelId: o,
                showMediaItems: a = !1,
                mediaEngineContext: d,
                onSelect: L,
              } = e,
              A = (0, j.Z)({ userId: n.id, guildId: t, channelId: o }),
              T = (0, b.Z)(n.id),
              _ = (0, v.Z)({ user: n }),
              k = (0, g.Z)({ user: n, guildId: t, channelId: o }),
              S = (0, f.Z)({ user: n }),
              N = (0, E.Z)(n.id),
              P = (0, p.Z)(n.id),
              O = (0, C.Z)(n.id, d),
              D = (0, M.Z)({ user: n }),
              F = (0, u.Z)(null, n),
              G = (0, Z.Z)(n),
              y = (0, m.Z)({ user: n }),
              R = (0, I.Z)({ user: n }),
              V = (0, x.Z)({ user: n }),
              w = (0, h.Z)({ user: n }),
              W = (0, s.Z)({ id: n.id, label: U.intl.string(U.t["/AXYnJ"]) }),
              B = (0, c.Z)(n),
              q = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": U.intl.string(U.t.liqwPD),
              onSelect: L,
              children: [
                !q &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(l.MenuGroup, { children: B }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [A, T, _, k, S, N],
                      }),
                      a && (0, i.jsx)(l.MenuGroup, { children: P }),
                      (0, i.jsx)(l.MenuGroup, { children: F }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [a && O, D, G, y, R, w, V],
                      }),
                    ],
                  }),
                (0, i.jsx)(l.MenuGroup, { children: W }),
              ],
            });
          },
          { object: L.qAy.CONTEXT_MENU },
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
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        o = t(481060),
        a = t(194359),
        u = t(699516),
        d = t(594174),
        s = t(388032);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: Z } = e,
          f = (0, r.e7)(
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
          [m, g] = (0, r.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [
            t,
          ]),
          [x, v] = l.useState(!1);
        return Z || f
          ? null
          : m
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
                        a.Z.removeFriend(t, { location: n }), v(!1);
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
                label: x
                  ? s.intl.string(s.t.xMH6vL)
                  : s.intl.string(s.t.w5uwoK),
                action: () => {
                  !x &&
                    (a.Z.addRelationship({
                      userId: t,
                      context: { location: n },
                    }),
                    v(!0));
                },
                disabled: g || (x && !m),
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
        a = t(388032);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
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
        let Z =
          null == c ? a.intl.string(a.t.BGYkaG) : a.intl.string(a.t["8pOYUF"]);
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
    44652: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(192379),
        l = t(442837),
        r = t(91896),
        o = t(298213),
        a = t(749302),
        u = t(981631),
        d = t(388032);
      function s(e) {
        let { user: n } = e,
          t = (0, l.Wu)([r.Z], () =>
            r.Z.getGameRelationshipsForUser(n.id, u.OGo.PENDING_INCOMING),
          ),
          s = i.useCallback(
            (e) => {
              o.Z.acceptFriendRequest({
                userId: n.id,
                applicationId: e.id,
                location: "Context Menu",
              });
            },
            [n.id],
          );
        return (0, a.Z)({
          user: n,
          gameRelationships: t,
          menuItemId: "add-game-friend",
          label: d.intl.string(d.t.X76oLC),
          onClick: s,
        });
      }
    },
    185457: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(481060),
        o = t(906732),
        a = t(531301),
        u = t(171368),
        d = t(314897),
        s = t(246946),
        c = t(626135),
        Z = t(981631),
        f = t(228168),
        m = t(388032);
      function g(e) {
        let { user: n, guildId: t, channelId: g, context: x } = e,
          { id: v } = n,
          { loading: h, note: M } = (0, a.Z)(v),
          b = !h && null != M && M.length > 0,
          I = x === Z.IlC.POPOUT,
          C = l.useContext(c.AnalyticsContext),
          { analyticsLocations: j } = (0, o.ZP)();
        return v === d.default.getId() || s.Z.hidePersonalInformation || I
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "note",
              label: h
                ? m.intl.string(m.t["WLKx//"])
                : b
                  ? m.intl.string(m.t.sHHsOD)
                  : m.intl.string(m.t.Dglxra),
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: f.oh.USER_INFO,
                  subsection: f.Tb.NOTE,
                  guildId: t,
                  channelId: g,
                  sourceAnalyticsLocations: j,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(493683),
        a = t(40851),
        u = t(740492),
        d = t(314897),
        s = t(592125),
        c = t(699516),
        Z = t(944486),
        f = t(981631),
        m = t(388032);
      function g(e) {
        let {
            user: n,
            context: g,
            label: x,
            joinCallVideo: v,
            id: h,
            onCall: M,
          } = e,
          b = (0, a.Aq)(),
          I = (0, l.e7)([d.default], () => d.default.getId() === n.id),
          C = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          j = (0, l.e7)(
            [Z.Z, s.Z],
            () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (I || g === f.IlC.POPOUT || j || n.bot || n.isProvisional)
          return null;
        let p = () => {
            null == M || M(),
              o.Z.openPrivateChannel(n.id, !0, v),
              b.dispatch(f.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          E = !u.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(r.MenuItem, {
          id: null != h ? h : "call",
          label: null != x ? x : m.intl.string(m.t.JJogjo),
          action: E
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, i.jsx)(e, { onSubmit: p, ...n });
                });
              }
            : p,
          disabled: C,
        });
      }
    },
    749302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120),
        t(653041);
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        o = t(481060),
        a = t(835473),
        u = t(925329),
        d = t(372460),
        s = t(594174),
        c = t(960897);
      let Z = [];
      function f(e) {
        let { application: n } = e;
        return (0, i.jsxs)("div", {
          className: c.subtext,
          children: [
            (0, i.jsx)(u.Z, { game: n, size: u.Z.Sizes.XXSMALL }),
            (0, i.jsx)("span", { children: n.name }),
          ],
        });
      }
      function m(e) {
        let {
            menuItemId: n,
            user: t,
            label: c,
            gameRelationships: m,
            onClick: g,
          } = e,
          { id: x, bot: v } = t,
          h = (0, r.e7)([s.default], () => {
            var e;
            return (
              (null === (e = s.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id) === x
            );
          }),
          M = (0, d.wn)({ location: "useAcceptGameFriendRequest" }),
          b = h || v || !M,
          I = b ? Z : m,
          [C, j] = l.useState(!1),
          p = l.useCallback(() => j(!0), []),
          E = l.useMemo(
            () =>
              I.map((e) => {
                let { applicationId: n } = e;
                return n;
              }),
            [I],
          ),
          L = (function (e, n) {
            let t = (0, a.Z)(e, n);
            return l.useMemo(() => {
              let e = new Map();
              return (
                t.forEach((n) => {
                  null != n && e.set(n.id, n);
                }),
                e
              );
            }, [t]);
          })(E, C || 1 === I.length);
        if (b || 0 === I.length) return null;
        if (1 === I.length) {
          let { applicationId: e } = I[0],
            t = L.get(e);
          return null == t
            ? null
            : (0, i.jsx)(o.MenuItem, {
                id: n,
                label: c,
                subtext: (0, i.jsx)(f, { application: t }),
                onFocus: p,
                action: () => g(t),
              });
        }
        let U = [];
        return (I.forEach((e) => {
          let { applicationId: n } = e,
            t = L.get(n);
          null != t &&
            U.push(
              (0, i.jsx)(
                o.MenuItem,
                {
                  id: n,
                  label: t.name,
                  icon: (0, i.jsx)(u.Z, { game: t, size: u.Z.Sizes.XXSMALL }),
                  action: () => g(t),
                },
                n,
              ),
            );
        }),
        0 === U.length)
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: n,
              label: c,
              onFocus: p,
              children: U,
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
        a = t(40851),
        u = t(314897),
        d = t(981631),
        s = t(388032);
      function c(e, n) {
        let t = (0, a.Aq)();
        return (0, l.e7)([u.default], () => u.default.getId() === e) ||
          n === d.IlC.POPOUT
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                o.Z.openPrivateChannel(e),
                  t.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, r.closeAllModals)();
              },
            });
      }
    },
    47091: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        o = t(481060),
        a = t(91896),
        u = t(298213),
        d = t(51144),
        s = t(749302),
        c = t(388032);
      function Z(e) {
        let { user: n } = e,
          Z = (0, r.Wu)([a.Z], () => a.Z.getGameFriendsForUser(n.id)),
          f = d.ZP.useName(n),
          m = l.useCallback(
            (e) => {
              let { id: l, name: r } = e;
              (0, o.openModalLazy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(
                  t.bind(t, 481060),
                );
                return (t) =>
                  (0, i.jsx)(e, {
                    header: c.intl.formatToPlainString(c.t["GOFk9/"], {
                      name: f,
                    }),
                    confirmText: c.intl.string(c.t["cY+Ooa"]),
                    cancelText: c.intl.string(c.t["ETE/oK"]),
                    onConfirm: () =>
                      u.Z.removeFriend({
                        userId: n.id,
                        applicationId: l,
                        location: "Context Menu",
                      }),
                    ...t,
                    children: (0, i.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children: c.intl.format(c.t.dsU5bm, {
                        name: f,
                        gameName: r,
                      }),
                    }),
                  });
              });
            },
            [f, n],
          );
        return (0, s.Z)({
          user: n,
          gameRelationships: Z,
          menuItemId: "remove-game-friend",
          label: c.intl.string(c.t["RLcE6+"]),
          onClick: m,
        });
      }
    },
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        o = t(668781),
        a = t(846027),
        u = t(763296),
        d = t(131951),
        s = t(19780),
        c = t(914010),
        Z = t(594174),
        f = t(626135),
        m = t(981631),
        g = t(65154),
        x = t(388032),
        v = t(705197);
      function h(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : g.Yn.DEFAULT,
          t = (0, l.e7)([Z.default], () => {
            var n;
            return (
              (null === (n = Z.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          h = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: M,
            deafened: b = !1,
            localVideoDisabled: I = !1,
            localVideoAutoDisabled: C = !1,
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
          j =
            d.Z.supports(g.AN.DISABLE_VIDEO) && !t
              ? (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: x.intl.string(x.t["4MMsWF"]),
                    action: () => {
                      if (C) {
                        o.Z.show({
                          title: x.intl.string(x.t.m2Hyj4),
                          body: x.intl.string(x.t.EhaK6O),
                          confirmText: x.intl.string(x.t.ND1my8),
                          cancelText: x.intl.string(x.t.jEqEh4),
                          onConfirm: () =>
                            a.Z.setDisableLocalVideo(e, m.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = I ? m.ZUi.MANUAL_ENABLED : m.ZUi.DISABLED;
                      a.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: I,
                    subtext: C
                      ? (0, i.jsxs)("div", {
                          className: v.videoPaused,
                          children: [
                            (0, i.jsx)(r.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: v.warningCircle,
                            }),
                            x.intl.string(x.t.m2Hyj4),
                          ],
                        })
                      : null,
                  },
                  "disable-video",
                )
              : null,
          p = t
            ? null
            : (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "soundboard-sound-mute",
                  label: x.intl.string(x.t.LxhEuL),
                  action: () => {
                    let t = s.Z.getRTCConnection();
                    f.default.track(m.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                      guild_id: c.Z.getGuildId(),
                      target_user_id: e,
                      media_session_id:
                        null == t ? void 0 : t.getMediaSessionId(),
                      parent_media_session_id:
                        null == t ? void 0 : t.parentMediaSessionId,
                      mute_soundboard: !h,
                    }),
                      a.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: h,
                },
                "soundboard-sound-mute",
              );
        return t
          ? [
              (0, i.jsx)(
                r.MenuCheckboxItem,
                {
                  id: "mute",
                  label: x.intl.string(x.t.sWmtIy),
                  action: () =>
                    a.Z.toggleSelfMute({
                      context: n,
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
                  label: x.intl.string(x.t.wjcRFR),
                  action: () =>
                    a.Z.toggleSelfDeaf({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: b,
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
                  label: x.intl.string(x.t.sWmtIy),
                  action: () => a.Z.toggleLocalMute(e, n),
                  checked: M,
                },
                "self-mute",
              ),
              p,
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
        a = t(131951),
        u = t(594174),
        d = t(36703),
        s = t(358085),
        c = t(65154),
        Z = t(388032);
      function f(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          f = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, t), [e, t]),
          m =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          g = t === c.Yn.STREAM;
        return m
          ? null
          : (0, i.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: g ? Z.intl.string(Z.t.t4JBnJ) : Z.intl.string(Z.t.m7TNdH),
              control: (n, l) =>
                (0, i.jsx)(r.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, d.P)(f),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, d.A)(n), t),
                  "aria-label": g
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
        a = t(158776),
        u = t(981631),
        d = t(388032);
      function s(e) {
        let n = (0, l.e7)(
          [a.Z],
          () =>
            (0, o.Z)(a.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "watch-stream",
              label: d.intl.string(d.t["7Xq/nZ"]),
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=178c4ec222c02d011538.js.map
