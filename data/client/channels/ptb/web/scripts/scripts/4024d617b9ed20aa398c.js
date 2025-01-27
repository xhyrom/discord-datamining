"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26976"],
  {
    415118: function (e, n, t) {
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
        c = t(976192),
        m = t(276022),
        Z = t(777658),
        f = t(858488),
        g = t(44652),
        x = t(185457),
        M = t(933409),
        h = t(389052),
        b = t(24311),
        v = t(158508),
        C = t(710631),
        I = t(297047),
        j = t(88966),
        p = t(712301),
        E = t(47091),
        L = t(991307),
        U = t(37258),
        N = t(931617),
        T = t(700994),
        A = t(332031),
        k = t(981631),
        S = t(388032);
      n.default = (0, a.Z)(
        (0, o.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                showModalItems: o = !0,
                showMediaItems: a = !1,
                showChatItems: d = !0,
                context: _,
                onSelect: D,
              } = e,
              O = {
                page: k.ZY5.GUILD_CHANNEL,
                section: k.jXE.CHAT_USERNAME,
                object: k.qAy.CONTEXT_MENU_ITEM,
              },
              G = (0, U.Z)({ userId: n.id, guildId: t }),
              P = (0, I.Z)(n, t, _),
              F = (0, j.Z)(n.id, _),
              y = (0, A.Z)(n.id),
              w = (0, b.Z)({ user: n, context: _ }),
              R = (0, x.Z)({ user: n, guildId: t, context: _ }),
              B = (0, f.Z)({ user: n }),
              V = (0, T.Z)(n.id),
              X = (0, L.Z)(n.id),
              W = (0, c.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: O,
                context: _,
              }),
              q = (0, m.Z)({ user: n, guildId: t }),
              H = (0, C.Z)({ user: n, guildId: t }),
              z = (0, u.Z)(null, n),
              Y = (0, Z.Z)(n),
              J = (0, g.Z)({ user: n }),
              K = (0, E.Z)({ user: n }),
              Q = (0, h.Z)({
                user: n,
                guildId: t,
                location: "GuildUserContextMenu",
              }),
              $ = (0, v.Z)({
                user: n,
                guildId: t,
                location: "GuildUserContextMenu",
              }),
              ee = (0, M.Z)(n, t),
              en = (0, N.Z)(n.id, t),
              et = (0, p.Z)(n, t),
              ei = (0, s.Z)({ id: n.id, label: S.intl.string(S.t["/AXYnJ"]) }),
              el = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": S.intl.string(S.t.liqwPD),
              onSelect: D,
              children: [
                !el &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [o && G, d && P, F, w, o && R, o && B, y],
                      }),
                      a && (0, i.jsx)(l.MenuGroup, { children: V }),
                      (0, i.jsx)(l.MenuGroup, { children: o && z }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [
                          a && X,
                          o && W,
                          o && H,
                          Y,
                          J,
                          K,
                          q,
                          o && $,
                          o && Q,
                        ],
                      }),
                      (0, i.jsx)(l.MenuGroup, { children: ee }),
                      (0, i.jsxs)(l.MenuGroup, { children: [en, et] }),
                    ],
                  }),
                (0, i.jsx)(l.MenuGroup, { children: ei }),
              ],
            });
          },
          { object: k.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.GUILD_USER_MENU],
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
          { id: t, username: c, bot: m } = e,
          Z = (0, r.e7)(
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
          [f, g] = (0, r.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [
            t,
          ]),
          [x, M] = l.useState(!1);
        return m || Z
          ? null
          : f
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
                        a.Z.removeFriend(t, { location: n }), M(!1);
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
                    M(!0));
                },
                disabled: g || (x && !f),
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
        let m =
          null == c ? a.intl.string(a.t.BGYkaG) : a.intl.string(a.t["8pOYUF"]);
        return (0, i.jsx)(r.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: m,
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
        m = t(981631),
        Z = t(228168),
        f = t(388032);
      function g(e) {
        let { user: n, guildId: t, channelId: g, context: x } = e,
          { id: M } = n,
          { loading: h, note: b } = (0, a.Z)(M),
          v = !h && null != b && b.length > 0,
          C = x === m.IlC.POPOUT,
          I = l.useContext(c.AnalyticsContext),
          { analyticsLocations: j } = (0, o.ZP)();
        return M === d.default.getId() || s.Z.hidePersonalInformation || C
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "note",
              label: h
                ? f.intl.string(f.t["WLKx//"])
                : v
                  ? f.intl.string(f.t.sHHsOD)
                  : f.intl.string(f.t.Dglxra),
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: Z.oh.USER_INFO,
                  subsection: Z.Tb.NOTE,
                  guildId: t,
                  channelId: g,
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
        m = t(944486),
        Z = t(981631),
        f = t(388032);
      function g(e) {
        let {
            user: n,
            context: g,
            label: x,
            joinCallVideo: M,
            id: h,
            onCall: b,
          } = e,
          v = (0, a.Aq)(),
          C = (0, l.e7)([d.default], () => d.default.getId() === n.id),
          I = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          j = (0, l.e7)(
            [m.Z, s.Z],
            () => m.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (C || g === Z.IlC.POPOUT || j || n.bot || n.isProvisional)
          return null;
        let p = () => {
            null == b || b(),
              o.Z.openPrivateChannel(n.id, !0, M),
              v.dispatch(Z.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          E = !u.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(r.MenuItem, {
          id: null != h ? h : "call",
          label: null != x ? x : f.intl.string(f.t.JJogjo),
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
          disabled: I,
        });
      }
    },
    749302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
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
      let m = [];
      function Z(e) {
        let { application: n } = e;
        return (0, i.jsxs)("div", {
          className: c.subtext,
          children: [
            (0, i.jsx)(u.Z, { game: n, size: u.Z.Sizes.XXSMALL }),
            (0, i.jsx)("span", { children: n.name }),
          ],
        });
      }
      function f(e) {
        let {
            menuItemId: n,
            user: t,
            label: c,
            gameRelationships: f,
            onClick: g,
          } = e,
          { id: x, bot: M } = t,
          h = (0, r.e7)([s.default], () => {
            var e;
            return (
              (null === (e = s.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id) === x
            );
          }),
          b = (0, d.wn)({ location: "useAcceptGameFriendRequest" }),
          v = h || M || !b,
          C = v ? m : f,
          [I, j] = l.useState(!1),
          p = l.useCallback(() => j(!0), []),
          E = l.useMemo(
            () =>
              C.map((e) => {
                let { applicationId: n } = e;
                return n;
              }),
            [C],
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
          })(E, I || 1 === C.length);
        if (v || 0 === C.length) return null;
        if (1 === C.length) {
          let { applicationId: e } = C[0],
            t = L.get(e);
          return null == t
            ? null
            : (0, i.jsx)(o.MenuItem, {
                id: n,
                label: c,
                subtext: (0, i.jsx)(Z, { application: t }),
                onFocus: p,
                action: () => g(t),
              });
        }
        let U = [];
        return (C.forEach((e) => {
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
    47091: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
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
      function m(e) {
        let { user: n } = e,
          m = (0, r.Wu)([a.Z], () => a.Z.getGameFriendsForUser(n.id)),
          Z = d.ZP.useName(n),
          f = l.useCallback(
            (e) => {
              let { id: l, name: r } = e;
              (0, o.openModalLazy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(
                  t.bind(t, 481060),
                );
                return (t) =>
                  (0, i.jsx)(e, {
                    header: c.intl.formatToPlainString(c.t["GOFk9/"], {
                      name: Z,
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
                        name: Z,
                        gameName: r,
                      }),
                    }),
                  });
              });
            },
            [Z, n],
          );
        return (0, s.Z)({
          user: n,
          gameRelationships: m,
          menuItemId: "remove-game-friend",
          label: c.intl.string(c.t["RLcE6+"]),
          onClick: f,
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
        m = t(594174),
        Z = t(626135),
        f = t(981631),
        g = t(65154),
        x = t(388032),
        M = t(705197);
      function h(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : g.Yn.DEFAULT,
          t = (0, l.e7)([m.default], () => {
            var n;
            return (
              (null === (n = m.default.getCurrentUser()) || void 0 === n
                ? void 0
                : n.id) === e
            );
          }),
          h = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
          {
            muted: b,
            deafened: v = !1,
            localVideoDisabled: C = !1,
            localVideoAutoDisabled: I = !1,
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
                      if (I) {
                        o.Z.show({
                          title: x.intl.string(x.t.m2Hyj4),
                          body: x.intl.string(x.t.EhaK6O),
                          confirmText: x.intl.string(x.t.ND1my8),
                          cancelText: x.intl.string(x.t.jEqEh4),
                          onConfirm: () =>
                            a.Z.setDisableLocalVideo(e, f.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = C ? f.ZUi.MANUAL_ENABLED : f.ZUi.DISABLED;
                      a.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: C,
                    subtext: I
                      ? (0, i.jsxs)("div", {
                          className: M.videoPaused,
                          children: [
                            (0, i.jsx)(r.CircleWarningIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 12,
                              className: M.warningCircle,
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
                    Z.default.track(f.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
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
                  checked: b,
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
                  checked: v,
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
                  checked: b,
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
          return Z;
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
        m = t(388032);
      function Z(e) {
        var n;
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          Z = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, t), [e, t]),
          f =
            e ===
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          g = t === c.Yn.STREAM;
        return f
          ? null
          : (0, i.jsx)(r.MenuControlItem, {
              id: "user-volume",
              label: g ? m.intl.string(m.t.t4JBnJ) : m.intl.string(m.t.m7TNdH),
              control: (n, l) =>
                (0, i.jsx)(r.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, d.P)(Z),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => o.Z.setLocalVolume(e, (0, d.A)(n), t),
                  "aria-label": g
                    ? m.intl.string(m.t.t4JBnJ)
                    : m.intl.string(m.t.m7TNdH),
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
//# sourceMappingURL=4024d617b9ed20aa398c.js.map
