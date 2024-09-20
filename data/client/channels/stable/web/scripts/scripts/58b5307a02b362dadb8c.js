"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13125"],
  {
    91176: function (e, l, n) {
      var t = n(913527),
        a = n.n(t),
        i = n(749210);
      l.Z = {
        async setCommunicationDisabledDuration(e, l, n, t, r) {
          let s = null != n ? a()().add(n, "s").toISOString() : null;
          await i.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: l,
            communicationDisabledUntilTimestamp: s,
            duration: n,
            reason: t,
            location: r,
          });
        },
      };
    },
    933409: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return N;
        },
      }),
        n(47120),
        n(789020);
      var t = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(91176),
        u = n(749210),
        d = n(58540),
        o = n(251794),
        c = n(386696),
        E = n(71619),
        M = n(910693),
        Z = n(592125),
        I = n(271383),
        g = n(430824),
        m = n(496675),
        _ = n(594174),
        C = n(979651),
        R = n(630388),
        v = n(5192),
        f = n(813872),
        S = n(981631),
        O = n(590433),
        P = n(372897),
        h = n(689938);
      function N(e, l, N, A) {
        let U = a.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
          T = null != A ? [A] : [];
        (0, d.$)(U), (0, i.e7)([m.Z], () => m.Z.getGuildVersion(l), [l]);
        let b = (0, i.e7)([g.Z], () => g.Z.getGuild(l), [l]),
          L = (0, i.e7)(
            [_.default],
            () => {
              var l;
              return (
                (null === (l = _.default.getCurrentUser()) || void 0 === l
                  ? void 0
                  : l.id) === e.id
              );
            },
            [e.id],
          ),
          x = (0, i.e7)([I.ZP], () => I.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
          j = (0, i.e7)([Z.Z], () => Z.Z.getChannel(N), [N]),
          [, p] = (0, E.ZP)(e.id, l),
          D = null == j ? void 0 : j.isGuildStageVoice(),
          {
            muted: B,
            deafened: q,
            suppressed: V,
            voiceChannelId: y,
          } = (0, i.cj)([C.Z], () => {
            var n, t, a;
            let i = C.Z.getVoiceState(l, e.id);
            return {
              muted:
                null !== (n = null == i ? void 0 : i.mute) && void 0 !== n && n,
              deafened:
                null !== (t = null == i ? void 0 : i.deaf) && void 0 !== t && t,
              suppressed:
                null !== (a = null == i ? void 0 : i.suppress) &&
                void 0 !== a &&
                a,
              voiceChannelId: null == i ? void 0 : i.channelId,
            };
          }),
          k = (0, i.e7)([I.ZP], () => I.ZP.getMember(l, e.id)),
          G = (0, f.Z)({ userId: e.id, guildId: l, channelId: N, location: A }),
          F = (0, M.sE)(l, { location: A, targetUserId: e.id }),
          w = (0, c.Z)(l, e.id),
          K =
            null != y &&
            null != N &&
            m.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: y }) &&
            !x
              ? [
                  (!D || (D && !V)) &&
                  m.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, {
                    channelId: N,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-mute",
                          label: h.Z.Messages.SERVER_VOICE_MUTE,
                          checked: B,
                          color: "danger",
                          action: () => {
                            !1 === B && F(M.jQ.MUTE),
                              u.Z.setServerMute(l, e.id, !B);
                          },
                        },
                        "voice-mute",
                      )
                    : null,
                  (!D || (D && !V)) &&
                  m.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, {
                    channelId: N,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-deafen",
                          label: h.Z.Messages.SERVER_DEAFEN,
                          checked: q,
                          color: "danger",
                          action: () => u.Z.setServerDeaf(l, e.id, !q),
                        },
                        "voice-deafen",
                      )
                    : null,
                  !L &&
                  null != b &&
                  m.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, {
                    channelId: N,
                  })
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "voice-disconnect",
                          label: L
                            ? h.Z.Messages.DISCONNECT_SELF
                            : h.Z.Messages.DISCONNECT_OTHER,
                          color: "danger",
                          action: () => u.Z.setChannel(l, e.id, null),
                        },
                        "voice-disconnect",
                      )
                    : null,
                ]
              : [],
          Y = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
              try {
                var a;
                await s.Z.setCommunicationDisabledDuration(
                  n,
                  t,
                  O.UK.DURATION_60_SEC,
                  null,
                  A,
                ),
                  F(M.jQ.TIMEOUT),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      h.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                        user:
                          null !== (a = v.ZP.getName(n, null, e)) &&
                          void 0 !== a
                            ? a
                            : "",
                      }),
                      r.ToastType.SUCCESS,
                    ),
                  );
              } catch (e) {
                (0, r.showToast)(
                  (0, r.createToast)(
                    h.Z.Messages
                      .APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,
                    r.ToastType.FAILURE,
                  ),
                );
              }
          },
          W = null,
          H =
            null != b &&
            m.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, b) &&
            m.Z.canManageUser(S.Plq.KICK_MEMBERS, e, b) &&
            m.Z.canManageUser(S.Plq.BAN_MEMBERS, e, b),
          Q =
            null != b &&
            (m.Z.canManageUser(S.Plq.MANAGE_GUILD, e, b) ||
              m.Z.canManageUser(S.Plq.MANAGE_ROLES, e, b));
        if (
          !L &&
          null != b &&
          null != k &&
          null != k.joinedAt &&
          (H || Q) &&
          b.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)
        ) {
          var z;
          W = (0, R.yE)(
            null !== (z = k.flags) && void 0 !== z ? z : 0,
            P.q.BYPASSES_VERIFICATION,
          )
            ? (0, t.jsx)(
                r.MenuItem,
                {
                  id: "verify",
                  label: h.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                  action: () => {
                    var l;
                    return u.Z.setMemberFlags(
                      b.id,
                      e.id,
                      (0, R.mB)(
                        null !== (l = k.flags) && void 0 !== l ? l : 0,
                        P.q.BYPASSES_VERIFICATION,
                        !1,
                      ),
                    );
                  },
                },
                "verify",
              )
            : (0, t.jsx)(
                r.MenuItem,
                {
                  id: "verify",
                  label: h.Z.Messages.MANUALLY_VERIFY_MEMBER,
                  action: () => {
                    var l;
                    return u.Z.setMemberFlags(
                      b.id,
                      e.id,
                      (0, R.mB)(
                        null !== (l = k.flags) && void 0 !== l ? l : 0,
                        P.q.BYPASSES_VERIFICATION,
                        !0,
                      ),
                    );
                  },
                },
                "verify",
              );
        }
        return [
          ...K,
          ...(L || null == b
            ? []
            : [
                G,
                W,
                w && !x
                  ? p
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "removetimeout",
                          label:
                            h.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format(
                              { user: e.username },
                            ),
                          color: "danger",
                          action: () => {
                            (0, o.q)(l, e.id, T);
                          },
                        },
                        "removetimeout",
                      )
                    : (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "timeout",
                          label:
                            h.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format(
                              { user: e.username },
                            ),
                          color: "danger",
                          action: (n) => {
                            if (n.ctrlKey || n.metaKey) return Y(n, l, e.id);
                            (0, o.z)(l, e.id, T);
                          },
                        },
                        "timeout",
                      )
                  : null,
                m.Z.canManageUser(S.Plq.KICK_MEMBERS, e, b) && !e.isClyde()
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "kick",
                        label: h.Z.Messages.KICK_USER.format({
                          user: e.username,
                        }),
                        color: "danger",
                        action: () =>
                          (0, r.openModalLazy)(async () => {
                            let { default: a } = await n
                              .e("5454")
                              .then(n.bind(n, 854360));
                            return (n) =>
                              (0, t.jsx)(a, {
                                ...n,
                                location: A,
                                guildId: l,
                                user: e,
                              });
                          }),
                      },
                      "kick",
                    )
                  : null,
                m.Z.canManageUser(S.Plq.BAN_MEMBERS, e, b)
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "ban",
                        label: h.Z.Messages.BAN_USER.format({
                          user: e.username,
                        }),
                        color: "danger",
                        action: () =>
                          (0, r.openModalLazy)(async () => {
                            let { default: a } = await n
                              .e("43350")
                              .then(n.bind(n, 98746));
                            return (n) =>
                              (0, t.jsx)(a, {
                                ...n,
                                location: A,
                                guildId: l,
                                user: e,
                              });
                          }),
                      },
                      "ban",
                    )
                  : null,
              ]),
        ];
      }
    },
    813872: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return g;
        },
      });
      var t = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(40851),
        u = n(189432),
        d = n(189357),
        o = n(944486),
        c = n(626135),
        E = n(981631),
        M = n(176505),
        Z = n(50493),
        I = n(689938);
      function g(e) {
        let {
            userId: l,
            guildId: n,
            channelId: g,
            location: m,
            onAction: _,
          } = e,
          C = a.useContext(c.AnalyticsContext),
          R = (0, s.Aq)(),
          v = (0, i.e7)(
            [o.Z],
            () => (null != g ? g : o.Z.getChannelId(n, !0)),
            [g, n],
          ),
          f = (0, d.ms)(n, !0);
        return null != n && f
          ? (0, t.jsx)(r.MenuItem, {
              id: "mod-view",
              label: I.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
              action: () => {
                null == _ || _(),
                  (0, u.r)(n, l, null != v ? v : M.oC.MEMBER_SAFETY, {
                    modViewPanel: Z.k.INFO,
                    sourceLocation: null != m ? m : C.location,
                  }),
                  R.dispatch(E.CkL.POPOUT_CLOSE);
              },
            })
          : null;
      }
    },
    88966: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return c;
        },
      });
      var t = n(735250);
      n(470079);
      var a = n(442837),
        i = n(481060),
        r = n(493683),
        s = n(40851),
        u = n(314897),
        d = n(981631),
        o = n(689938);
      function c(e, l) {
        let n = (0, s.Aq)();
        return (0, a.e7)([u.default], () => u.default.getId() === e) ||
          l === d.IlC.POPOUT
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "message-user",
              label: o.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                r.Z.openPrivateChannel(e),
                  n.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, i.closeAllModals)();
              },
            });
      }
    },
    712301: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return f;
        },
      });
      var t = n(735250);
      n(470079);
      var a = n(442837),
        i = n(481060),
        r = n(749210),
        s = n(287734),
        u = n(933557),
        d = n(314897),
        o = n(592125),
        c = n(984933),
        E = n(271383),
        M = n(430824),
        Z = n(496675),
        I = n(699516),
        g = n(594174),
        m = n(979651),
        _ = n(934415),
        C = n(700785),
        R = n(981631),
        v = n(689938);
      function f(e, l) {
        let n = (0, a.e7)([c.ZP], () => c.ZP.getChannels(l)[c.Zb], [l]),
          f = (0, a.e7)(
            [m.Z, o.Z],
            () => {
              let n = m.Z.getUserVoiceChannelId(l, e.id);
              return o.Z.getChannel(n);
            },
            [l, e.id],
          );
        if (
          (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(l, e.id), [l, e.id]) ||
          null == f
        )
          return null;
        let S = e.id === d.default.getId();
        if (!S && !Z.Z.can(R.Plq.MOVE_MEMBERS, f)) return null;
        let O = n.filter((l) => {
          let { channel: n } = l;
          return (
            n.id !== f.id &&
            (S
              ? Z.Z.can(R.Plq.CONNECT, n) && !(0, _.rY)(n, m.Z, M.Z)
              : Z.Z.can(R.Plq.MOVE_MEMBERS, n) &&
                (Z.Z.can(R.Plq.CONNECT, n) ||
                  C.BT({ permission: R.Plq.CONNECT, user: e, context: n })) &&
                !(0, _.rY)(n, m.Z, M.Z))
          );
        });
        return 0 === O.length
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "voice-move",
              label: v.Z.Messages.MOVE_TO,
              children: O.map((n) => {
                let { channel: a } = n;
                return (0, t.jsx)(
                  i.MenuItem,
                  {
                    id: a.id,
                    action: () => {
                      var n;
                      return (
                        (n = a),
                        void (e.id === d.default.getId()
                          ? s.default.selectVoiceChannel(n.id)
                          : r.Z.setChannel(l, e.id, n.id))
                      );
                    },
                    label: (0, u.F6)(a, g.default, I.Z),
                  },
                  a.id,
                );
              }),
            });
      }
    },
    931617: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return C;
        },
      });
      var t = n(735250);
      n(470079);
      var a = n(866442),
        i = n(442837),
        r = n(481060),
        s = n(607070),
        u = n(605436),
        d = n(910693),
        o = n(434404),
        c = n(271383),
        E = n(430824),
        M = n(496675),
        Z = n(823379),
        I = n(981631),
        g = n(689938),
        m = n(587525);
      function _(e, l) {
        var n, i;
        return (0, t.jsxs)("div", {
          className: m.roleRow,
          children: [
            "dot" === l
              ? (0, t.jsx)(r.RoleDot, {
                  className: m.roleDot,
                  color:
                    null !== (n = e.colorString) && void 0 !== n
                      ? n
                      : (0, a.Rf)(I.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, t.jsx)(r.RoleCircle, {
                  className: m.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, a.Rf)(I.p6O),
                }),
            (0, t.jsx)("div", { children: e.name }),
          ],
        });
      }
      function C(e, l) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          m = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          C = (0, i.e7)([E.Z], () => E.Z.getGuild(l)),
          R = (0, i.e7)([E.Z], () => E.Z.getRoles(l)),
          v = (0, i.e7)([s.Z], () => s.Z.roleStyle),
          f = (0, d.sE)(l, { location: a, targetUserId: e }),
          {
            userRoles: S,
            isGuildMember: O,
            canManageRoles: P,
          } = (0, i.cj)(
            [c.ZP, M.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != C && M.Z.can(I.Plq.MANAGE_ROLES, C),
              };
            },
            [e, l, C],
          );
        if (__OVERLAY__ || null == S || null == C || !O) return null;
        let h = M.Z.getHighestRole(C),
          N = Object.values(R).filter((e) => !(0, u.pM)(C.id, e.id)),
          A =
            P && !m
              ? N.map((n) => {
                  let a = n.managed || !M.Z.isRoleHigher(C, h, n),
                    i = -1 !== S.indexOf(n.id);
                  return a && !i
                    ? null
                    : (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: n.id,
                          label: () => _(n, v),
                          disabled: a,
                          action: () => {
                            var t;
                            return (
                              (t = n),
                              void (S.includes(t.id)
                                ? (o.Z.updateMemberRoles(
                                    l,
                                    e,
                                    S.filter((e) => e !== t.id),
                                    [],
                                    [t.id],
                                  ),
                                  f(d.jQ.REMOVE_ROLE))
                                : (o.Z.updateMemberRoles(
                                    l,
                                    e,
                                    S.concat([t.id]),
                                    [t.id],
                                    [],
                                  ),
                                  f(d.jQ.ADD_ROLE)))
                            );
                          },
                          checked: i,
                        },
                        n.id,
                      );
                })
              : N.filter((e) => -1 !== S.indexOf(e.id)).map((e) =>
                  (0, u.pM)(C.id, e.id)
                    ? null
                    : (0, t.jsx)(
                        r.MenuItem,
                        { id: e.id, label: () => _(e, v) },
                        e.id,
                      ),
                );
        return 0 === A.filter(Z.lm).length
          ? null
          : n
            ? A
            : (0, t.jsx)(r.MenuItem, {
                id: "roles",
                label: g.Z.Messages.ROLES_LIST.format({ numRoles: A.length }),
                children: A,
              });
      }
    },
  },
]);
//# sourceMappingURL=58b5307a02b362dadb8c.js.map
