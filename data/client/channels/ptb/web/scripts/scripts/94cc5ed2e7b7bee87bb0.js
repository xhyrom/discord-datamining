"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70675"],
  {
    976192: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = l(735250),
        i = l(470079),
        a = l(442837),
        r = l(481060),
        s = l(58540),
        u = l(40851),
        d = l(300284),
        o = l(484459),
        c = l(314897),
        Z = l(271383),
        E = l(430824),
        M = l(496675),
        f = l(594174),
        _ = l(981631),
        g = l(689938),
        I = l(745974);
      function m(e) {
        let {
            guildId: n,
            userId: m,
            analyticsLocation: R,
            analyticsLocations: N,
            context: C,
            icon: O,
          } = e,
          A = E.Z.getGuild(n),
          h = c.default.getId(),
          v = (0, a.e7)([f.default], () => f.default.getUser(m)),
          T = (0, a.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, m), [n, m]);
        (0, a.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
        let x = i.useMemo(() => ({ [n]: [m] }), [n, m]);
        (0, s.$)(x);
        let b = C === _.IlC.POPOUT,
          S = (0, d.Z)({ guild: A, analyticsLocation: R }),
          p = (0, u.Aq)();
        if (null == A || b) return null;
        let P =
            h === m &&
            (M.Z.can(_.Plq.CHANGE_NICKNAME, A) ||
              M.Z.can(_.Plq.MANAGE_NICKNAMES, A)),
          U = h === m,
          j = M.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, m, A);
        if (!(P || j || U) || null == v || T) return null;
        let L = A.hasFeature(_.oNc.HUB)
            ? g.Z.Messages.HUB_EDIT_PROFILE
            : g.Z.Messages.CHANGE_IDENTITY,
          D = U ? L : g.Z.Messages.CHANGE_NICKNAME;
        return (0, t.jsx)(r.MenuItem, {
          id: "change-nickname",
          label: (0, t.jsx)("div", {
            className: I.labelWrapper,
            children: (0, t.jsx)("span", { className: I.label, children: D }),
          }),
          icon: O,
          action: () => {
            U
              ? ((0, o.Z)(v.id, v.getAvatarURL(n, 80), { guildId: n }),
                S(),
                p.dispatch(_.CkL.POPOUT_CLOSE),
                (0, r.closeAllModals)())
              : (0, r.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("17712")
                    .then(l.bind(l, 620021));
                  return (l) =>
                    (0, t.jsx)(e, {
                      ...l,
                      guildId: n,
                      user: v,
                      analyticsSource: R,
                      analyticsLocations: N,
                    });
                });
          },
        });
      }
    },
    267980: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = l(442837),
        i = l(314897),
        a = l(944486),
        r = l(590415);
      function s() {
        let e = (0, t.e7)([a.Z], () => a.Z.getVoiceChannelId()),
          n = (0, t.e7)([i.default], () => i.default.getId());
        return (
          (0, r.ZP)(n, e) === r.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return f;
        },
      });
      var t = l(735250);
      l(470079);
      var i = l(442837),
        a = l(481060),
        r = l(430824),
        s = l(594174),
        u = l(979651),
        d = l(471253),
        o = l(200498),
        c = l(88751),
        Z = l(267980),
        E = l(623633),
        M = l(689938);
      function f(e) {
        var n;
        let l = (0, E.Z)(),
          f = null == l ? void 0 : l.id,
          _ = null == l ? void 0 : l.guild_id,
          g = (0, i.e7)([r.Z], () => r.Z.getGuild(_), [_]),
          I = (0, i.e7)(
            [u.Z],
            () => (null != f ? u.Z.getVoiceStateForChannel(f, e.id) : null),
            [f, e.id],
          ),
          m =
            (null === (n = s.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          R = (0, Z.Z)(),
          N = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, f), [
            f,
            e.id,
          ]),
          C = (0, o.B)(f);
        if (null == l || null == g || null == I || N.speaker) return null;
        let O = () => {
          m ? (0, d.RK)(l, !1) : (0, d._0)(l, e.id);
        };
        return C
          ? (0, t.jsx)(a.MenuItem, {
              id: "invite-speaker",
              label: m
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: O,
            })
          : R && m
            ? (0, t.jsx)(a.MenuItem, {
                id: "invite-speaker",
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: O,
              })
            : null;
      }
    },
    654663: function (e, n, l) {
      l.r(n);
      var t = l(735250);
      l(470079);
      var i = l(481060),
        a = l(239091),
        r = l(883385),
        s = l(108843),
        u = l(911969),
        d = l(947440),
        o = l(100527),
        c = l(299206),
        Z = l(976192),
        E = l(819403),
        M = l(777658),
        f = l(858488),
        _ = l(185457),
        g = l(570870),
        I = l(389052),
        m = l(24311),
        R = l(710631),
        N = l(297047),
        C = l(88966),
        O = l(712301),
        A = l(520063),
        h = l(725119),
        v = l(931617),
        T = l(332031),
        x = l(981631),
        b = l(689938);
      n.default = (0, s.Z)(
        (0, r.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: r,
                context: s,
                onSelect: o,
                onHeightUpdate: S,
              } = e,
              p = (0, h.Z)({ userId: n.id, guildId: l, channelId: r.id }),
              P = (0, N.Z)(n, l, s),
              U = (0, C.Z)(n.id, s),
              j = (0, T.Z)(n.id),
              L = (0, m.Z)({ user: n, context: s }),
              D = (0, _.Z)({
                user: n,
                guildId: l,
                channelId: r.id,
                context: s,
              }),
              G = (0, f.Z)({ user: n }),
              F = (0, Z.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: {
                  page: x.ZY5.GUILD_CHANNEL,
                  section: x.jXE.CHAT_USERNAME,
                  object: x.qAy.CONTEXT_MENU_ITEM,
                },
                context: s,
              }),
              k = (0, R.Z)({ user: n, guildId: l }),
              y = (0, d.Z)(null, n),
              V = (0, M.Z)(n),
              K = (0, I.Z)({ user: n }),
              B = (0, A.Z)(n, l, r.id),
              H = (0, v.Z)(n.id, l),
              q = (0, O.Z)(n, l),
              w = (0, c.Z)({ id: n.id, label: b.Z.Messages.COPY_ID_USER }),
              Y = (0, E.Z)(n),
              W = (0, g.Z)({
                commandType: u.yU.USER,
                commandTargetId: n.id,
                channel: r,
                guildId: l,
                onHeightUpdate: S,
              }),
              z = n.isNonUserBot();
            return (0, t.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": b.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: o,
              children: [
                !z &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(i.MenuGroup, { children: Y }),
                      (0, t.jsxs)(i.MenuGroup, {
                        children: [p, P, U, L, D, G, j],
                      }),
                      (0, t.jsx)(i.MenuGroup, { children: y }),
                      (0, t.jsxs)(i.MenuGroup, { children: [F, W, k, V, K] }),
                      (0, t.jsx)(i.MenuGroup, { children: B }),
                      (0, t.jsxs)(i.MenuGroup, { children: [H, q] }),
                    ],
                  }),
                (0, t.jsx)(i.MenuGroup, { children: w }),
              ],
            });
          },
          { object: x.qAy.CONTEXT_MENU },
        ),
        [o.Z.CONTEXT_MENU, o.Z.THREAD_USER_MENU],
      );
    },
    777658: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      }),
        l(47120);
      var t = l(735250),
        i = l(470079),
        a = l(442837),
        r = l(481060),
        s = l(194359),
        u = l(699516),
        d = l(594174),
        o = l(689938);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: l, username: c, bot: Z } = e,
          E = (0, a.e7)(
            [d.default],
            () => {
              var e;
              return (
                (null === (e = d.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === l
              );
            },
            [l],
          ),
          [M, f] = (0, a.Wu)([u.Z], () => [u.Z.isFriend(l), u.Z.isBlocked(l)], [
            l,
          ]),
          [_, g] = i.useState(!1);
        return Z || E
          ? null
          : M
            ? (0, t.jsx)(r.MenuItem, {
                id: "remove-friend",
                label: o.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, r.openModal)((e) =>
                    (0, t.jsx)(r.ConfirmModal, {
                      header: o.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: o.Z.Messages.REMOVE_FRIEND,
                      cancelText: o.Z.Messages.CANCEL,
                      onConfirm: () => {
                        s.Z.removeFriend(l, { location: n }), g(!1);
                      },
                      ...e,
                      children: (0, t.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: o.Z.Messages.REMOVE_FRIEND_BODY.format({
                          name: c,
                        }),
                      }),
                    }),
                  );
                },
              })
            : (0, t.jsx)(r.MenuItem, {
                id: "add-friend",
                label: _
                  ? o.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : o.Z.Messages.ADD_FRIEND,
                action: () => {
                  !_ &&
                    (s.Z.addRelationship({
                      userId: l,
                      context: { location: n },
                    }),
                    g(!0));
                },
                disabled: f || (_ && !M),
              });
      }
    },
    858488: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return u;
        },
      }),
        l(47120);
      var t = l(735250);
      l(470079);
      var i = l(442837),
        a = l(481060),
        r = l(699516),
        s = l(689938);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
          [o, c] = (0, i.Wu)(
            [r.Z],
            () => {
              var e;
              return [
                r.Z.isFriend(d),
                null !== (e = r.Z.getNickname(d)) && void 0 !== e ? e : null,
              ];
            },
            [d],
          );
        if (!o) return null;
        let Z =
          null == c
            ? s.Z.Messages.ADD_FRIEND_NICKNAME
            : s.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, t.jsx)(a.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == u || u(),
              (0, a.openModalLazy)(async () => {
                let { default: e } = await l.e("25070").then(l.bind(l, 670794));
                return (l) => (0, t.jsx)(e, { user: n, nickname: c, ...l });
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
      var t = l(735250),
        i = l(470079),
        a = l(481060),
        r = l(906732),
        s = l(531301),
        u = l(171368),
        d = l(314897),
        o = l(246946),
        c = l(626135),
        Z = l(981631),
        E = l(228168),
        M = l(689938);
      function f(e) {
        let { user: n, guildId: l, channelId: f, context: _ } = e,
          { id: g } = n,
          { loading: I, note: m } = (0, s.Z)(g),
          R = !I && null != m && m.length > 0,
          N = _ === Z.IlC.POPOUT,
          C = i.useContext(c.AnalyticsContext),
          { analyticsLocations: O } = (0, r.ZP)();
        return g === d.default.getId() || o.Z.hidePersonalInformation || N
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "note",
              label: I
                ? M.Z.Messages.LOADING_NOTE
                : R
                  ? M.Z.Messages.EDIT_NOTE
                  : M.Z.Messages.ADD_NOTE,
              action: () => {
                (0, u.openUserProfileModal)({
                  userId: n.id,
                  section: E.oh.USER_INFO,
                  subsection: E.Tb.NOTE,
                  guildId: l,
                  channelId: f,
                  sourceAnalyticsLocations: O,
                  analyticsLocation: C.location,
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
      var t = l(735250);
      l(470079);
      var i = l(442837),
        a = l(481060),
        r = l(493683),
        s = l(40851),
        u = l(740492),
        d = l(314897),
        o = l(592125),
        c = l(699516),
        Z = l(944486),
        E = l(981631),
        M = l(689938);
      function f(e) {
        let {
            user: n,
            context: f,
            label: _,
            joinCallVideo: g,
            id: I,
            onCall: m,
          } = e,
          R = (0, s.Aq)(),
          N = (0, i.e7)([d.default], () => d.default.getId() === n.id),
          C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          O = (0, i.e7)(
            [Z.Z, o.Z],
            () => Z.Z.getVoiceChannelId() === o.Z.getDMFromUserId(n.id),
          );
        if (N || f === E.IlC.POPOUT || O || n.bot || n.isProvisional())
          return null;
        let A = () => {
            null == m || m(),
              r.Z.openPrivateChannel(n.id, !0, g),
              R.dispatch(E.CkL.POPOUT_CLOSE),
              (0, a.closeAllModals)();
          },
          h = !u.ZP.disableCallUserConfirmationPrompt;
        return (0, t.jsx)(a.MenuItem, {
          id: null != I ? I : "call",
          label: null != _ ? _ : M.Z.Messages.CALL,
          action: h
            ? () => {
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("27157")
                    .then(l.bind(l, 736454));
                  return (n) => (0, t.jsx)(e, { onSubmit: A, ...n });
                });
              }
            : A,
          disabled: C,
        });
      }
    },
    88966: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = l(735250);
      l(470079);
      var i = l(442837),
        a = l(481060),
        r = l(493683),
        s = l(40851),
        u = l(314897),
        d = l(981631),
        o = l(689938);
      function c(e, n) {
        let l = (0, s.Aq)();
        return (0, i.e7)([u.default], () => u.default.getId() === e) ||
          n === d.IlC.POPOUT
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "message-user",
              label: o.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                r.Z.openPrivateChannel(e),
                  l.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, a.closeAllModals)();
              },
            });
      }
    },
    712301: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return C;
        },
      });
      var t = l(735250);
      l(470079);
      var i = l(442837),
        a = l(481060),
        r = l(749210),
        s = l(287734),
        u = l(933557),
        d = l(314897),
        o = l(592125),
        c = l(984933),
        Z = l(271383),
        E = l(430824),
        M = l(496675),
        f = l(699516),
        _ = l(594174),
        g = l(979651),
        I = l(934415),
        m = l(700785),
        R = l(981631),
        N = l(689938);
      function C(e, n) {
        let l = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
          C = (0, i.e7)(
            [g.Z, o.Z],
            () => {
              let l = g.Z.getUserVoiceChannelId(n, e.id);
              return o.Z.getChannel(l);
            },
            [n, e.id],
          );
        if (
          (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) ||
          null == C
        )
          return null;
        let O = e.id === d.default.getId();
        if (!O && !M.Z.can(R.Plq.MOVE_MEMBERS, C)) return null;
        let A = l.filter((n) => {
          let { channel: l } = n;
          return (
            l.id !== C.id &&
            (O
              ? M.Z.can(R.Plq.CONNECT, l) && !(0, I.rY)(l, g.Z, E.Z)
              : M.Z.can(R.Plq.MOVE_MEMBERS, l) &&
                (M.Z.can(R.Plq.CONNECT, l) ||
                  m.BT({ permission: R.Plq.CONNECT, user: e, context: l })) &&
                !(0, I.rY)(l, g.Z, E.Z))
          );
        });
        return 0 === A.length
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "voice-move",
              label: N.Z.Messages.MOVE_TO,
              children: A.map((l) => {
                let { channel: i } = l;
                return (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: i.id,
                    action: () => {
                      var l;
                      return (
                        (l = i),
                        void (e.id === d.default.getId()
                          ? s.default.selectVoiceChannel(l.id)
                          : r.Z.setChannel(n, e.id, l.id))
                      );
                    },
                    label: (0, u.F6)(i, _.default, f.Z),
                  },
                  i.id,
                );
              }),
            });
      }
    },
    520063: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return g;
        },
      });
      var t = l(735250),
        i = l(470079),
        a = l(442837),
        r = l(481060),
        s = l(58540),
        u = l(438536),
        d = l(346479),
        o = l(665906),
        c = l(592125),
        Z = l(430824),
        E = l(496675),
        M = l(594174),
        f = l(981631),
        _ = l(689938);
      function g(e, n, g) {
        let I = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
        (0, s.$)(I), (0, a.e7)([E.Z], () => E.Z.getGuildVersion(n), [n]);
        let m = (0, a.e7)([c.Z], () => c.Z.getChannel(g)),
          R = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
          N = (0, a.e7)([M.default], () => M.default.getCurrentUser()),
          C = (0, u.Z)(m, "Context Menu"),
          O = (0, o.Xb)(m);
        if ((null == N ? void 0 : N.id) === e.id) return [C];
        if (null == R || null == m || null == N) return [];
        let A = O || (m.ownerId === N.id && m.type === f.d4z.PRIVATE_THREAD);
        return [
          A
            ? (0, t.jsx)(r.MenuItem, {
                id: "remove",
                label: m.isForumPost()
                  ? _.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({
                      user: e.username,
                    })
                  : _.Z.Messages.REMOVE_USER_FROM_THREAD.format({
                      user: e.username,
                    }),
                color: "danger",
                action: () => d.Z.removeMember(m, e.id, "Context Menu"),
              })
            : null,
          E.Z.canManageUser(f.Plq.KICK_MEMBERS, e, R)
            ? (0, t.jsx)(r.MenuItem, {
                id: "kick",
                label: A
                  ? _.Z.Messages.KICK_USER_FROM_SERVER.format({
                      user: e.username,
                    })
                  : _.Z.Messages.KICK_USER.format({ user: e.username }),
                color: "danger",
                action: () =>
                  (0, r.openModalLazy)(async () => {
                    let { default: n } = await l
                      .e("5454")
                      .then(l.bind(l, 854360));
                    return (l) =>
                      (0, t.jsx)(n, { ...l, guildId: R.id, user: e });
                  }),
              })
            : null,
          E.Z.canManageUser(f.Plq.BAN_MEMBERS, e, R)
            ? (0, t.jsx)(r.MenuItem, {
                id: "ban",
                label: A
                  ? _.Z.Messages.BAN_USER_FROM_SERVER.format({
                      user: e.username,
                    })
                  : _.Z.Messages.BAN_USER.format({ user: e.username }),
                color: "danger",
                action: () =>
                  (0, r.openModalLazy)(async () => {
                    let { default: n } = await l
                      .e("43350")
                      .then(l.bind(l, 98746));
                    return (l) =>
                      (0, t.jsx)(n, { ...l, guildId: R.id, user: e });
                  }),
              })
            : null,
        ];
      }
    },
    931617: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return m;
        },
      });
      var t = l(735250);
      l(470079);
      var i = l(866442),
        a = l(442837),
        r = l(481060),
        s = l(607070),
        u = l(605436),
        d = l(910693),
        o = l(434404),
        c = l(271383),
        Z = l(430824),
        E = l(496675),
        M = l(823379),
        f = l(981631),
        _ = l(689938),
        g = l(587525);
      function I(e, n) {
        var l, a;
        return (0, t.jsxs)("div", {
          className: g.roleRow,
          children: [
            "dot" === n
              ? (0, t.jsx)(r.RoleDot, {
                  className: g.roleDot,
                  color:
                    null !== (l = e.colorString) && void 0 !== l
                      ? l
                      : (0, i.Rf)(f.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, t.jsx)(r.RoleCircle, {
                  className: g.roleDot,
                  color:
                    null !== (a = e.colorString) && void 0 !== a
                      ? a
                      : (0, i.Rf)(f.p6O),
                }),
            (0, t.jsx)("div", { children: e.name }),
          ],
        });
      }
      function m(e, n) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          m = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n)),
          R = (0, a.e7)([Z.Z], () => Z.Z.getRoles(n)),
          N = (0, a.e7)([s.Z], () => s.Z.roleStyle),
          C = (0, d.sE)(n, { location: i, targetUserId: e }),
          {
            userRoles: O,
            isGuildMember: A,
            canManageRoles: h,
          } = (0, a.cj)(
            [c.ZP, E.Z],
            () => {
              let l = c.ZP.getMember(n, e);
              return {
                userRoles: null != l ? l.roles : [],
                isGuildMember: null != l,
                canManageRoles: null != m && E.Z.can(f.Plq.MANAGE_ROLES, m),
              };
            },
            [e, n, m],
          );
        if (__OVERLAY__ || null == O || null == m || !A) return null;
        let v = E.Z.getHighestRole(m),
          T = Object.values(R).filter((e) => !(0, u.pM)(m.id, e.id)),
          x =
            h && !g
              ? T.map((l) => {
                  let i = l.managed || !E.Z.isRoleHigher(m, v, l),
                    a = -1 !== O.indexOf(l.id);
                  return i && !a
                    ? null
                    : (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: l.id,
                          label: () => I(l, N),
                          disabled: i,
                          action: () => {
                            var t;
                            return (
                              (t = l),
                              void (O.includes(t.id)
                                ? (o.Z.updateMemberRoles(
                                    n,
                                    e,
                                    O.filter((e) => e !== t.id),
                                    [],
                                    [t.id],
                                  ),
                                  C(d.jQ.REMOVE_ROLE))
                                : (o.Z.updateMemberRoles(
                                    n,
                                    e,
                                    O.concat([t.id]),
                                    [t.id],
                                    [],
                                  ),
                                  C(d.jQ.ADD_ROLE)))
                            );
                          },
                          checked: a,
                        },
                        l.id,
                      );
                })
              : T.filter((e) => -1 !== O.indexOf(e.id)).map((e) =>
                  (0, u.pM)(m.id, e.id)
                    ? null
                    : (0, t.jsx)(
                        r.MenuItem,
                        { id: e.id, label: () => I(e, N) },
                        e.id,
                      ),
                );
        return 0 === x.filter(M.lm).length
          ? null
          : l
            ? x
            : (0, t.jsx)(r.MenuItem, {
                id: "roles",
                label: _.Z.Messages.ROLES_LIST.format({ numRoles: x.length }),
                children: x,
              });
      }
    },
    332031: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = l(735250);
      l(470079);
      var i = l(442837),
        a = l(481060),
        r = l(655922),
        s = l(158776),
        u = l(981631),
        d = l(689938);
      function o(e) {
        let n = (0, i.e7)(
          [s.Z],
          () =>
            (0, r.Z)(s.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "watch-stream",
              label: d.Z.Messages.WATCH_STREAM,
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
    587525: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=94cc5ed2e7b7bee87bb0.js.map
