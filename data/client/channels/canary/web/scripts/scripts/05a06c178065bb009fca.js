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
        r = l(470079),
        i = l(442837),
        a = l(481060),
        s = l(58540),
        u = l(40851),
        d = l(300284),
        o = l(484459),
        c = l(314897),
        Z = l(271383),
        E = l(430824),
        M = l(496675),
        _ = l(594174),
        f = l(981631),
        g = l(689938),
        I = l(936124);
      function m(e) {
        let {
            guildId: n,
            userId: m,
            analyticsLocation: R,
            analyticsLocations: N,
            context: A,
            icon: O,
          } = e,
          C = E.Z.getGuild(n),
          T = c.default.getId(),
          h = (0, i.e7)([_.default], () => _.default.getUser(m)),
          v = (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, m), [n, m]);
        (0, i.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
        let x = r.useMemo(() => ({ [n]: [m] }), [n, m]);
        (0, s.$)(x);
        let S = A === f.IlC.POPOUT,
          p = (0, d.Z)({ guild: C, analyticsLocation: R }),
          b = (0, u.Aq)();
        if (null == C || S) return null;
        let U =
            T === m &&
            (M.Z.can(f.Plq.CHANGE_NICKNAME, C) ||
              M.Z.can(f.Plq.MANAGE_NICKNAMES, C)),
          P = T === m,
          j = M.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, m, C);
        if (!(U || j || P) || null == h || v) return null;
        let D = C.hasFeature(f.oNc.HUB)
            ? g.Z.Messages.HUB_EDIT_PROFILE
            : g.Z.Messages.CHANGE_IDENTITY,
          L = P ? D : g.Z.Messages.CHANGE_NICKNAME;
        return (0, t.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, t.jsx)("div", {
            className: I.labelWrapper,
            children: (0, t.jsx)("span", { className: I.label, children: L }),
          }),
          icon: O,
          action: () => {
            P
              ? ((0, o.Z)(h.id, h.getAvatarURL(n, 80), { guildId: n }),
                p(),
                b.dispatch(f.CkL.POPOUT_CLOSE),
                (0, a.closeAllModals)())
              : (0, a.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("17712")
                    .then(l.bind(l, 620021));
                  return (l) =>
                    (0, t.jsx)(e, {
                      ...l,
                      guildId: n,
                      user: h,
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
        r = l(314897),
        i = l(944486),
        a = l(590415);
      function s() {
        let e = (0, t.e7)([i.Z], () => i.Z.getVoiceChannelId()),
          n = (0, t.e7)([r.default], () => r.default.getId());
        return (
          (0, a.ZP)(n, e) === a.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(442837),
        i = l(481060),
        a = l(430824),
        s = l(594174),
        u = l(979651),
        d = l(471253),
        o = l(200498),
        c = l(88751),
        Z = l(267980),
        E = l(623633),
        M = l(689938);
      function _(e) {
        var n;
        let l = (0, E.Z)(),
          _ = null == l ? void 0 : l.id,
          f = null == l ? void 0 : l.guild_id,
          g = (0, r.e7)([a.Z], () => a.Z.getGuild(f), [f]),
          I = (0, r.e7)(
            [u.Z],
            () => (null != _ ? u.Z.getVoiceStateForChannel(_, e.id) : null),
            [_, e.id],
          ),
          m =
            (null === (n = s.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          R = (0, Z.Z)(),
          N = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [
            _,
            e.id,
          ]),
          A = (0, o.B)(_);
        if (null == l || null == g || null == I || N.speaker) return null;
        let O = () => {
          m ? (0, d.RK)(l, !1) : (0, d._0)(l, e.id);
        };
        return A
          ? (0, t.jsx)(i.MenuItem, {
              id: "invite-speaker",
              label: m
                ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER
                : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: O,
            })
          : R && m
            ? (0, t.jsx)(i.MenuItem, {
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
      var r = l(481060),
        i = l(239091),
        a = l(883385),
        s = l(108843),
        u = l(911969),
        d = l(947440),
        o = l(100527),
        c = l(299206),
        Z = l(976192),
        E = l(819403),
        M = l(777658),
        _ = l(858488),
        f = l(185457),
        g = l(570870),
        I = l(389052),
        m = l(24311),
        R = l(710631),
        N = l(297047),
        A = l(88966),
        O = l(712301),
        C = l(520063),
        T = l(725119),
        h = l(931617),
        v = l(332031),
        x = l(981631),
        S = l(689938);
      n.default = (0, s.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: a,
                context: s,
                onSelect: o,
                onHeightUpdate: p,
              } = e,
              b = (0, T.Z)({ userId: n.id, guildId: l, channelId: a.id }),
              U = (0, N.Z)(n, l, s),
              P = (0, A.Z)(n.id, s),
              j = (0, v.Z)(n.id),
              D = (0, m.Z)({ user: n, context: s }),
              L = (0, f.Z)({
                user: n,
                guildId: l,
                channelId: a.id,
                context: s,
              }),
              G = (0, _.Z)({ user: n }),
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
              H = (0, C.Z)(n, l, a.id),
              B = (0, h.Z)(n.id, l),
              q = (0, O.Z)(n, l),
              w = (0, c.Z)({ id: n.id, label: S.Z.Messages.COPY_ID_USER }),
              Y = (0, E.Z)(n),
              W = (0, g.Z)({
                commandType: u.yU.USER,
                commandTargetId: n.id,
                channel: a,
                guildId: l,
                onHeightUpdate: p,
              }),
              z = n.isNonUserBot();
            return (0, t.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: i.Zy,
              "aria-label": S.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: o,
              children: [
                !z &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(r.MenuGroup, { children: Y }),
                      (0, t.jsxs)(r.MenuGroup, {
                        children: [b, U, P, D, L, G, j],
                      }),
                      (0, t.jsx)(r.MenuGroup, { children: y }),
                      (0, t.jsxs)(r.MenuGroup, { children: [F, W, k, V, K] }),
                      (0, t.jsx)(r.MenuGroup, { children: H }),
                      (0, t.jsxs)(r.MenuGroup, { children: [B, q] }),
                    ],
                  }),
                (0, t.jsx)(r.MenuGroup, { children: w }),
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
        r = l(470079),
        i = l(442837),
        a = l(481060),
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
          E = (0, i.e7)(
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
          [M, _] = (0, i.Wu)([u.Z], () => [u.Z.isFriend(l), u.Z.isBlocked(l)], [
            l,
          ]),
          [f, g] = r.useState(!1);
        return Z || E
          ? null
          : M
            ? (0, t.jsx)(a.MenuItem, {
                id: "remove-friend",
                label: o.Z.Messages.REMOVE_FRIEND,
                action: function () {
                  (0, a.openModal)((e) =>
                    (0, t.jsx)(a.ConfirmModal, {
                      header: o.Z.Messages.REMOVE_FRIEND_TITLE.format({
                        name: c,
                      }),
                      confirmText: o.Z.Messages.REMOVE_FRIEND,
                      cancelText: o.Z.Messages.CANCEL,
                      onConfirm: () => {
                        s.Z.removeFriend(l, { location: n }), g(!1);
                      },
                      ...e,
                      children: (0, t.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: o.Z.Messages.REMOVE_FRIEND_BODY.format({
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
                  ? o.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                  : o.Z.Messages.ADD_FRIEND,
                action: () => {
                  !f &&
                    (s.Z.addRelationship({
                      userId: l,
                      context: { location: n },
                    }),
                    g(!0));
                },
                disabled: _ || (f && !M),
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
      var r = l(442837),
        i = l(481060),
        a = l(699516),
        s = l(689938);
      function u(e) {
        let { user: n, onAction: u } = e,
          d = n.id,
          [o, c] = (0, r.Wu)(
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
        if (!o) return null;
        let Z =
          null == c
            ? s.Z.Messages.ADD_FRIEND_NICKNAME
            : s.Z.Messages.CHANGE_FRIEND_NICKNAME;
        return (0, t.jsx)(i.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == u || u(),
              (0, i.openModalLazy)(async () => {
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
          return _;
        },
      });
      var t = l(735250),
        r = l(470079),
        i = l(481060),
        a = l(906732),
        s = l(702557),
        u = l(171368),
        d = l(314897),
        o = l(246946),
        c = l(626135),
        Z = l(981631),
        E = l(228168),
        M = l(689938);
      function _(e) {
        let { user: n, guildId: l, channelId: _, context: f } = e,
          { id: g } = n,
          { loading: I, note: m } = (0, s.Z)(g),
          R = !I && null != m && m.length > 0,
          N = f === Z.IlC.POPOUT,
          A = r.useContext(c.AnalyticsContext),
          { analyticsLocations: O } = (0, a.ZP)();
        return g === d.default.getId() || o.Z.hidePersonalInformation || N
          ? null
          : (0, t.jsx)(i.MenuItem, {
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
                  channelId: _,
                  sourceAnalyticsLocations: O,
                  analyticsLocation: A.location,
                });
              },
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
      var r = l(442837),
        i = l(481060),
        a = l(493683),
        s = l(40851),
        u = l(314897),
        d = l(981631),
        o = l(689938);
      function c(e, n) {
        let l = (0, s.Aq)();
        return (0, r.e7)([u.default], () => u.default.getId() === e) ||
          n === d.IlC.POPOUT
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "message-user",
              label: o.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                a.Z.openPrivateChannel(e),
                  l.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, i.closeAllModals)();
              },
            });
      }
    },
    712301: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return A;
        },
      });
      var t = l(735250);
      l(470079);
      var r = l(442837),
        i = l(481060),
        a = l(749210),
        s = l(287734),
        u = l(933557),
        d = l(314897),
        o = l(592125),
        c = l(984933),
        Z = l(271383),
        E = l(430824),
        M = l(496675),
        _ = l(699516),
        f = l(594174),
        g = l(979651),
        I = l(934415),
        m = l(700785),
        R = l(981631),
        N = l(689938);
      function A(e, n) {
        let l = (0, r.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
          A = (0, r.e7)(
            [g.Z, o.Z],
            () => {
              let l = g.Z.getUserVoiceChannelId(n, e.id);
              return o.Z.getChannel(l);
            },
            [n, e.id],
          );
        if (
          (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) ||
          null == A
        )
          return null;
        let O = e.id === d.default.getId();
        if (!O && !M.Z.can(R.Plq.MOVE_MEMBERS, A)) return null;
        let C = l.filter((n) => {
          let { channel: l } = n;
          return (
            l.id !== A.id &&
            (O
              ? M.Z.can(R.Plq.CONNECT, l) && !(0, I.rY)(l, g.Z, E.Z)
              : M.Z.can(R.Plq.MOVE_MEMBERS, l) &&
                (M.Z.can(R.Plq.CONNECT, l) ||
                  m.BT({ permission: R.Plq.CONNECT, user: e, context: l })) &&
                !(0, I.rY)(l, g.Z, E.Z))
          );
        });
        return 0 === C.length
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "voice-move",
              label: N.Z.Messages.MOVE_TO,
              children: C.map((l) => {
                let { channel: r } = l;
                return (0, t.jsx)(
                  i.MenuItem,
                  {
                    id: r.id,
                    action: () => {
                      var l;
                      return (
                        (l = r),
                        void (e.id === d.default.getId()
                          ? s.default.selectVoiceChannel(l.id)
                          : a.Z.setChannel(n, e.id, l.id))
                      );
                    },
                    label: (0, u.F6)(r, f.default, _.Z),
                  },
                  r.id,
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
        r = l(470079),
        i = l(442837),
        a = l(481060),
        s = l(58540),
        u = l(438536),
        d = l(346479),
        o = l(665906),
        c = l(592125),
        Z = l(430824),
        E = l(496675),
        M = l(594174),
        _ = l(981631),
        f = l(689938);
      function g(e, n, g) {
        let I = r.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
        (0, s.$)(I), (0, i.e7)([E.Z], () => E.Z.getGuildVersion(n), [n]);
        let m = (0, i.e7)([c.Z], () => c.Z.getChannel(g)),
          R = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
          N = (0, i.e7)([M.default], () => M.default.getCurrentUser()),
          A = (0, u.Z)(m, "Context Menu"),
          O = (0, o.Xb)(m);
        if ((null == N ? void 0 : N.id) === e.id) return [A];
        if (null == R || null == m || null == N) return [];
        let C = O || (m.ownerId === N.id && m.type === _.d4z.PRIVATE_THREAD);
        return [
          C
            ? (0, t.jsx)(a.MenuItem, {
                id: "remove",
                label: m.isForumPost()
                  ? f.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({
                      user: e.username,
                    })
                  : f.Z.Messages.REMOVE_USER_FROM_THREAD.format({
                      user: e.username,
                    }),
                color: "danger",
                action: () => d.Z.removeMember(m, e.id, "Context Menu"),
              })
            : null,
          E.Z.canManageUser(_.Plq.KICK_MEMBERS, e, R)
            ? (0, t.jsx)(a.MenuItem, {
                id: "kick",
                label: C
                  ? f.Z.Messages.KICK_USER_FROM_SERVER.format({
                      user: e.username,
                    })
                  : f.Z.Messages.KICK_USER.format({ user: e.username }),
                color: "danger",
                action: () =>
                  (0, a.openModalLazy)(async () => {
                    let { default: n } = await l
                      .e("5454")
                      .then(l.bind(l, 854360));
                    return (l) =>
                      (0, t.jsx)(n, { ...l, guildId: R.id, user: e });
                  }),
              })
            : null,
          E.Z.canManageUser(_.Plq.BAN_MEMBERS, e, R)
            ? (0, t.jsx)(a.MenuItem, {
                id: "ban",
                label: C
                  ? f.Z.Messages.BAN_USER_FROM_SERVER.format({
                      user: e.username,
                    })
                  : f.Z.Messages.BAN_USER.format({ user: e.username }),
                color: "danger",
                action: () =>
                  (0, a.openModalLazy)(async () => {
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
      var r = l(866442),
        i = l(442837),
        a = l(481060),
        s = l(607070),
        u = l(605436),
        d = l(910693),
        o = l(434404),
        c = l(271383),
        Z = l(430824),
        E = l(496675),
        M = l(823379),
        _ = l(981631),
        f = l(689938),
        g = l(522425);
      function I(e, n) {
        var l, i;
        return (0, t.jsxs)("div", {
          className: g.roleRow,
          children: [
            "dot" === n
              ? (0, t.jsx)(a.RoleDot, {
                  className: g.roleDot,
                  color:
                    null !== (l = e.colorString) && void 0 !== l
                      ? l
                      : (0, r.Rf)(_.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, t.jsx)(a.RoleCircle, {
                  className: g.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, r.Rf)(_.p6O),
                }),
            (0, t.jsx)("div", { children: e.name }),
          ],
        });
      }
      function m(e, n) {
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          g = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
          m = (0, i.e7)([Z.Z], () => Z.Z.getRoles(n)),
          R = (0, i.e7)([s.Z], () => s.Z.roleStyle),
          N = (0, d.sE)(n, { location: r, targetUserId: e }),
          {
            userRoles: A,
            isGuildMember: O,
            canManageRoles: C,
          } = (0, i.cj)(
            [c.ZP, E.Z],
            () => {
              let l = c.ZP.getMember(n, e);
              return {
                userRoles: null != l ? l.roles : [],
                isGuildMember: null != l,
                canManageRoles: null != g && E.Z.can(_.Plq.MANAGE_ROLES, g),
              };
            },
            [e, n, g],
          );
        if (__OVERLAY__ || null == A || null == g || !O) return null;
        let T = E.Z.getHighestRole(g),
          h = Object.values(m).filter((e) => !(0, u.pM)(g.id, e.id)),
          v = C
            ? h.map((l) => {
                let r = l.managed || !E.Z.isRoleHigher(g, T, l),
                  i = -1 !== A.indexOf(l.id);
                return r && !i
                  ? null
                  : (0, t.jsx)(
                      a.MenuCheckboxItem,
                      {
                        id: l.id,
                        label: () => I(l, R),
                        disabled: r,
                        action: () => {
                          var t;
                          return (
                            (t = l),
                            void (A.includes(t.id)
                              ? (o.Z.updateMemberRoles(
                                  n,
                                  e,
                                  A.filter((e) => e !== t.id),
                                  [],
                                  [t.id],
                                ),
                                N(d.jQ.REMOVE_ROLE))
                              : (o.Z.updateMemberRoles(
                                  n,
                                  e,
                                  A.concat([t.id]),
                                  [t.id],
                                  [],
                                ),
                                N(d.jQ.ADD_ROLE)))
                          );
                        },
                        checked: i,
                      },
                      l.id,
                    );
              })
            : h
                .filter((e) => -1 !== A.indexOf(e.id))
                .map((e) =>
                  (0, u.pM)(g.id, e.id)
                    ? null
                    : (0, t.jsx)(
                        a.MenuItem,
                        { id: e.id, label: () => I(e, R) },
                        e.id,
                      ),
                );
        return 0 === v.filter(M.lm).length
          ? null
          : l
            ? v
            : (0, t.jsx)(a.MenuItem, {
                id: "roles",
                label: f.Z.Messages.ROLES_LIST.format({ numRoles: v.length }),
                children: v,
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
      var r = l(442837),
        i = l(481060),
        a = l(655922),
        s = l(158776),
        u = l(981631),
        d = l(689938);
      function o(e) {
        let n = (0, r.e7)(
          [s.Z],
          () =>
            (0, a.Z)(s.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "watch-stream",
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, "_blank"),
            });
      }
    },
    936124: function (e, n, l) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    522425: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=05a06c178065bb009fca.js.map
