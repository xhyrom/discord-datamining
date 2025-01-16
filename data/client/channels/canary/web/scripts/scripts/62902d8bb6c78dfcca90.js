"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26976"],
  {
    415118: function (e, n, t) {
      t.r(n);
      var i = t(200651);
      t(192379);
      var l = t(481060),
        o = t(239091),
        r = t(883385),
        d = t(108843),
        a = t(947440),
        u = t(100527),
        s = t(299206),
        c = t(976192),
        Z = t(276022),
        f = t(777658),
        m = t(858488),
        g = t(185457),
        x = t(933409),
        M = t(389052),
        b = t(24311),
        h = t(158508),
        v = t(710631),
        C = t(297047),
        I = t(88966),
        j = t(712301),
        E = t(991307),
        L = t(37258),
        U = t(931617),
        p = t(700994),
        A = t(332031),
        T = t(981631),
        _ = t(388032);
      n.default = (0, d.Z)(
        (0, r.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                showModalItems: r = !0,
                showMediaItems: d = !1,
                showChatItems: u = !0,
                context: N,
                onSelect: D,
              } = e,
              k = {
                page: T.ZY5.GUILD_CHANNEL,
                section: T.jXE.CHAT_USERNAME,
                object: T.qAy.CONTEXT_MENU_ITEM,
              },
              S = (0, L.Z)({ userId: n.id, guildId: t }),
              O = (0, C.Z)(n, t, N),
              P = (0, I.Z)(n.id, N),
              y = (0, A.Z)(n.id),
              G = (0, b.Z)({ user: n, context: N }),
              w = (0, g.Z)({ user: n, guildId: t, context: N }),
              F = (0, m.Z)({ user: n }),
              B = (0, p.Z)(n.id),
              V = (0, E.Z)(n.id),
              R = (0, c.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: k,
                context: N,
              }),
              H = (0, Z.Z)({ user: n, guildId: t }),
              W = (0, v.Z)({ user: n, guildId: t }),
              q = (0, a.Z)(null, n),
              J = (0, f.Z)(n),
              Y = (0, M.Z)({
                user: n,
                guildId: t,
                location: "GuildUserContextMenu",
              }),
              X = (0, h.Z)({
                user: n,
                guildId: t,
                location: "GuildUserContextMenu",
              }),
              K = (0, x.Z)(n, t),
              z = (0, U.Z)(n.id, t),
              Q = (0, j.Z)(n, t),
              $ = (0, s.Z)({ id: n.id, label: _.intl.string(_.t["/AXYnJ"]) }),
              ee = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
              navId: "user-context",
              onClose: o.Zy,
              "aria-label": _.intl.string(_.t.liqwPD),
              onSelect: D,
              children: [
                !ee &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [r && S, u && O, P, G, r && w, r && F, y],
                      }),
                      d && (0, i.jsx)(l.MenuGroup, { children: B }),
                      (0, i.jsx)(l.MenuGroup, { children: r && q }),
                      (0, i.jsxs)(l.MenuGroup, {
                        children: [
                          d && V,
                          r && R,
                          r && W,
                          J,
                          H,
                          r && X,
                          r && Y,
                        ],
                      }),
                      (0, i.jsx)(l.MenuGroup, { children: K }),
                      (0, i.jsxs)(l.MenuGroup, { children: [z, Q] }),
                    ],
                  }),
                (0, i.jsx)(l.MenuGroup, { children: $ }),
              ],
            });
          },
          { object: T.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU],
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
        o = t(442837),
        r = t(481060),
        d = t(194359),
        a = t(699516),
        u = t(594174),
        s = t(388032);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: Z } = e,
          f = (0, o.e7)(
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
          [m, g] = (0, o.Wu)([a.Z], () => [a.Z.isFriend(t), a.Z.isBlocked(t)], [
            t,
          ]),
          [x, M] = l.useState(!1);
        return Z || f
          ? null
          : m
            ? (0, i.jsx)(r.MenuItem, {
                id: "remove-friend",
                label: s.intl.string(s.t.cvSt1N),
                action: function () {
                  (0, r.openModal)((e) =>
                    (0, i.jsx)(r.ConfirmModal, {
                      header: s.intl.formatToPlainString(s.t.fPLvZW, {
                        name: c,
                      }),
                      confirmText: s.intl.string(s.t.cvSt1N),
                      cancelText: s.intl.string(s.t["ETE/oK"]),
                      onConfirm: () => {
                        d.Z.removeFriend(t, { location: n }), M(!1);
                      },
                      ...e,
                      children: (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: s.intl.format(s.t.l5FFq6, { name: c }),
                      }),
                    }),
                  );
                },
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "add-friend",
                label: x
                  ? s.intl.string(s.t.xMH6vL)
                  : s.intl.string(s.t.w5uwoK),
                action: () => {
                  !x &&
                    (d.Z.addRelationship({
                      userId: t,
                      context: { location: n },
                    }),
                    M(!0));
                },
                disabled: g || (x && !m),
              });
      }
    },
    858488: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        r = t(699516),
        d = t(388032);
      function a(e) {
        let { user: n, onAction: a } = e,
          u = n.id,
          [s, c] = (0, l.Wu)(
            [r.Z],
            () => {
              var e;
              return [
                r.Z.isFriend(u),
                null !== (e = r.Z.getNickname(u)) && void 0 !== e ? e : null,
              ];
            },
            [u],
          );
        if (!s) return null;
        let Z =
          null == c ? d.intl.string(d.t.BGYkaG) : d.intl.string(d.t["8pOYUF"]);
        return (0, i.jsx)(o.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == a || a(),
              (0, o.openModalLazy)(async () => {
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
          return g;
        },
      });
      var i = t(200651),
        l = t(192379),
        o = t(481060),
        r = t(906732),
        d = t(531301),
        a = t(171368),
        u = t(314897),
        s = t(246946),
        c = t(626135),
        Z = t(981631),
        f = t(228168),
        m = t(388032);
      function g(e) {
        let { user: n, guildId: t, channelId: g, context: x } = e,
          { id: M } = n,
          { loading: b, note: h } = (0, d.Z)(M),
          v = !b && null != h && h.length > 0,
          C = x === Z.IlC.POPOUT,
          I = l.useContext(c.AnalyticsContext),
          { analyticsLocations: j } = (0, r.ZP)();
        return M === u.default.getId() || s.Z.hidePersonalInformation || C
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "note",
              label: b
                ? m.intl.string(m.t["WLKx//"])
                : v
                  ? m.intl.string(m.t.sHHsOD)
                  : m.intl.string(m.t.Dglxra),
              action: () => {
                (0, a.openUserProfileModal)({
                  userId: n.id,
                  section: f.oh.USER_INFO,
                  subsection: f.Tb.NOTE,
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
        o = t(481060),
        r = t(493683),
        d = t(40851),
        a = t(740492),
        u = t(314897),
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
            joinCallVideo: M,
            id: b,
            onCall: h,
          } = e,
          v = (0, d.Aq)(),
          C = (0, l.e7)([u.default], () => u.default.getId() === n.id),
          I = (0, l.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          j = (0, l.e7)(
            [Z.Z, s.Z],
            () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (C || g === f.IlC.POPOUT || j || n.bot || n.isProvisional)
          return null;
        let E = () => {
            null == h || h(),
              r.Z.openPrivateChannel(n.id, !0, M),
              v.dispatch(f.CkL.POPOUT_CLOSE),
              (0, o.closeAllModals)();
          },
          L = !a.ZP.disableCallUserConfirmationPrompt;
        return (0, i.jsx)(o.MenuItem, {
          id: null != b ? b : "call",
          label: null != x ? x : m.intl.string(m.t.JJogjo),
          action: L
            ? () => {
                (0, o.openModalLazy)(async () => {
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
    991307: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        o = t(481060),
        r = t(668781),
        d = t(846027),
        a = t(763296),
        u = t(131951),
        s = t(19780),
        c = t(914010),
        Z = t(594174),
        f = t(626135),
        m = t(981631),
        g = t(65154),
        x = t(388032),
        M = t(705197);
      function b(e) {
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
          b = (0, l.e7)([a.Z], () => a.Z.isLocalSoundboardMuted(e)),
          {
            muted: h,
            deafened: v = !1,
            localVideoDisabled: C = !1,
            localVideoAutoDisabled: I = !1,
          } = (0, l.cj)(
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
          j =
            u.Z.supports(g.AN.DISABLE_VIDEO) && !t
              ? (0, i.jsx)(
                  o.MenuCheckboxItem,
                  {
                    id: "disable-video",
                    label: x.intl.string(x.t["4MMsWF"]),
                    action: () => {
                      if (I) {
                        r.Z.show({
                          title: x.intl.string(x.t.m2Hyj4),
                          body: x.intl.string(x.t.EhaK6O),
                          confirmText: x.intl.string(x.t.ND1my8),
                          cancelText: x.intl.string(x.t.jEqEh4),
                          onConfirm: () =>
                            d.Z.setDisableLocalVideo(e, m.ZUi.MANUAL_ENABLED),
                        });
                        return;
                      }
                      let t = C ? m.ZUi.MANUAL_ENABLED : m.ZUi.DISABLED;
                      d.Z.setDisableLocalVideo(e, t, n);
                    },
                    checked: C,
                    subtext: I
                      ? (0, i.jsxs)("div", {
                          className: M.videoPaused,
                          children: [
                            (0, i.jsx)(o.CircleWarningIcon, {
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
          E = t
            ? null
            : (0, i.jsx)(
                o.MenuCheckboxItem,
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
                      mute_soundboard: !b,
                    }),
                      d.Z.toggleLocalSoundboardMute(e, n);
                  },
                  checked: b,
                },
                "soundboard-sound-mute",
              );
        return t
          ? [
              (0, i.jsx)(
                o.MenuCheckboxItem,
                {
                  id: "mute",
                  label: x.intl.string(x.t.sWmtIy),
                  action: () =>
                    d.Z.toggleSelfMute({
                      context: n,
                      location: "User Context Menu",
                    }),
                  checked: h,
                },
                "self-mute",
              ),
              (0, i.jsx)(
                o.MenuCheckboxItem,
                {
                  id: "deafen",
                  label: x.intl.string(x.t.wjcRFR),
                  action: () =>
                    d.Z.toggleSelfDeaf({
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
                o.MenuCheckboxItem,
                {
                  id: "mute",
                  label: x.intl.string(x.t.sWmtIy),
                  action: () => d.Z.toggleLocalMute(e, n),
                  checked: h,
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
        o = t(481060),
        r = t(846027),
        d = t(131951),
        a = t(594174),
        u = t(36703),
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
          m =
            e ===
            (null === (n = a.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id),
          g = t === c.Yn.STREAM;
        return m
          ? null
          : (0, i.jsx)(o.MenuControlItem, {
              id: "user-volume",
              label: g ? Z.intl.string(Z.t.t4JBnJ) : Z.intl.string(Z.t.m7TNdH),
              control: (n, l) =>
                (0, i.jsx)(o.MenuSliderControl, {
                  ...n,
                  ref: l,
                  value: (0, u.P)(f),
                  maxValue: s.isPlatformEmbedded ? 200 : 100,
                  onChange: (n) => r.Z.setLocalVolume(e, (0, u.A)(n), t),
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
        o = t(481060),
        r = t(655922),
        d = t(158776),
        a = t(981631),
        u = t(388032);
      function s(e) {
        let n = (0, l.e7)(
          [d.Z],
          () =>
            (0, r.Z)(d.Z.findActivity(e, (e) => e.type === a.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, i.jsx)(o.MenuItem, {
              id: "watch-stream",
              label: u.intl.string(u.t["7Xq/nZ"]),
              action: () => window.open(n, "_blank"),
            });
      }
    },
  },
]);
//# sourceMappingURL=62902d8bb6c78dfcca90.js.map
