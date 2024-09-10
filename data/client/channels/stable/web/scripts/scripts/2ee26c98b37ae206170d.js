"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12435"],
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
    976192: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return C;
        },
      });
      var t = n(735250),
        a = n(470079),
        i = n(442837),
        r = n(481060),
        s = n(58540),
        u = n(40851),
        d = n(300284),
        o = n(484459),
        c = n(314897),
        E = n(271383),
        M = n(430824),
        Z = n(496675),
        I = n(594174),
        g = n(981631),
        m = n(689938),
        _ = n(745974);
      function C(e) {
        let {
            guildId: l,
            userId: C,
            analyticsLocation: f,
            analyticsLocations: O,
            context: R,
            icon: v,
          } = e,
          N = M.Z.getGuild(l),
          S = c.default.getId(),
          A = (0, i.e7)([I.default], () => I.default.getUser(C)),
          P = (0, i.e7)([E.ZP], () => E.ZP.isGuestOrLurker(l, C), [l, C]);
        (0, i.e7)([Z.Z], () => Z.Z.getGuildVersion(l), [l]);
        let h = a.useMemo(() => ({ [l]: [C] }), [l, C]);
        (0, s.$)(h);
        let U = R === g.IlC.POPOUT,
          T = (0, d.Z)({ guild: N, analyticsLocation: f }),
          b = (0, u.Aq)();
        if (null == N || U) return null;
        let L =
            S === C &&
            (Z.Z.can(g.Plq.CHANGE_NICKNAME, N) ||
              Z.Z.can(g.Plq.MANAGE_NICKNAMES, N)),
          x = S === C,
          j = Z.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, C, N);
        if (!(L || j || x) || null == A || P) return null;
        let p = N.hasFeature(g.oNc.HUB)
            ? m.Z.Messages.HUB_EDIT_PROFILE
            : m.Z.Messages.CHANGE_IDENTITY,
          D = x ? p : m.Z.Messages.CHANGE_NICKNAME;
        return (0, t.jsx)(r.MenuItem, {
          id: "change-nickname",
          label: (0, t.jsx)("div", {
            className: _.labelWrapper,
            children: (0, t.jsx)("span", { className: _.label, children: D }),
          }),
          icon: v,
          action: () => {
            x
              ? ((0, o.Z)(A.id, A.getAvatarURL(l, 80), { guildId: l }),
                T(),
                b.dispatch(g.CkL.POPOUT_CLOSE),
                (0, r.closeAllModals)())
              : (0, r.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("17712")
                    .then(n.bind(n, 620021));
                  return (n) =>
                    (0, t.jsx)(e, {
                      ...n,
                      guildId: l,
                      user: A,
                      analyticsSource: f,
                      analyticsLocations: O,
                    });
                });
          },
        });
      }
    },
    933409: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return P;
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
        f = n(630388),
        O = n(5192),
        R = n(813872),
        v = n(981631),
        N = n(590433),
        S = n(372897),
        A = n(689938);
      function P(e, l, P, h) {
        let U = a.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
          T = null != h ? [h] : [];
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
          j = (0, i.e7)([Z.Z], () => Z.Z.getChannel(P), [P]),
          [, p] = (0, E.ZP)(e.id, l),
          D = null == j ? void 0 : j.isGuildStageVoice(),
          {
            muted: B,
            deafened: G,
            suppressed: q,
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
          V = (0, i.e7)([I.ZP], () => I.ZP.getMember(l, e.id)),
          k = (0, R.Z)({ userId: e.id, guildId: l, channelId: P, location: h }),
          F = (0, M.sE)(l, { location: h, targetUserId: e.id }),
          K = (0, c.Z)(l, e.id),
          w =
            null != y &&
            null != P &&
            m.Z.canWithPartialContext(v.Plq.VIEW_CHANNEL, { channelId: y }) &&
            !x
              ? [
                  (!D || (D && !q)) &&
                  m.Z.canWithPartialContext(v.Plq.MUTE_MEMBERS, {
                    channelId: P,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-mute",
                          label: A.Z.Messages.SERVER_VOICE_MUTE,
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
                  (!D || (D && !q)) &&
                  m.Z.canWithPartialContext(v.Plq.DEAFEN_MEMBERS, {
                    channelId: P,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-deafen",
                          label: A.Z.Messages.SERVER_DEAFEN,
                          checked: G,
                          color: "danger",
                          action: () => u.Z.setServerDeaf(l, e.id, !G),
                        },
                        "voice-deafen",
                      )
                    : null,
                  !L &&
                  null != b &&
                  m.Z.canWithPartialContext(v.Plq.MOVE_MEMBERS, {
                    channelId: P,
                  })
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "voice-disconnect",
                          label: L
                            ? A.Z.Messages.DISCONNECT_SELF
                            : A.Z.Messages.DISCONNECT_OTHER,
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
                  N.UK.DURATION_60_SEC,
                  null,
                  h,
                ),
                  F(M.jQ.TIMEOUT),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      A.Z.Messages.GUILD_COMMUNICATION_DISABLED_SUCCESS.format({
                        user:
                          null !== (a = O.ZP.getName(n, null, e)) &&
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
                    A.Z.Messages
                      .APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR,
                    r.ToastType.FAILURE,
                  ),
                );
              }
          },
          H = null,
          W =
            null != b &&
            m.Z.canManageUser(v.Plq.MODERATE_MEMBERS, e, b) &&
            m.Z.canManageUser(v.Plq.KICK_MEMBERS, e, b) &&
            m.Z.canManageUser(v.Plq.BAN_MEMBERS, e, b),
          z =
            null != b &&
            (m.Z.canManageUser(v.Plq.MANAGE_GUILD, e, b) ||
              m.Z.canManageUser(v.Plq.MANAGE_ROLES, e, b));
        if (
          !L &&
          null != b &&
          null != V &&
          null != V.joinedAt &&
          (W || z) &&
          b.hasFeature(v.oNc.GUILD_ONBOARDING_EVER_ENABLED)
        ) {
          var Q;
          H = (0, f.yE)(
            null !== (Q = V.flags) && void 0 !== Q ? Q : 0,
            S.q.BYPASSES_VERIFICATION,
          )
            ? (0, t.jsx)(
                r.MenuItem,
                {
                  id: "verify",
                  label: A.Z.Messages.MANUALLY_UNVERIFY_MEMBER,
                  action: () => {
                    var l;
                    return u.Z.setMemberFlags(
                      b.id,
                      e.id,
                      (0, f.mB)(
                        null !== (l = V.flags) && void 0 !== l ? l : 0,
                        S.q.BYPASSES_VERIFICATION,
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
                  label: A.Z.Messages.MANUALLY_VERIFY_MEMBER,
                  action: () => {
                    var l;
                    return u.Z.setMemberFlags(
                      b.id,
                      e.id,
                      (0, f.mB)(
                        null !== (l = V.flags) && void 0 !== l ? l : 0,
                        S.q.BYPASSES_VERIFICATION,
                        !0,
                      ),
                    );
                  },
                },
                "verify",
              );
        }
        return [
          ...w,
          ...(L || null == b
            ? []
            : [
                k,
                H,
                K && !x
                  ? p
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "removetimeout",
                          label:
                            A.Z.Messages.ENABLE_GUILD_COMMUNICATION_FOR_USER.format(
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
                            A.Z.Messages.DISABLE_GUILD_COMMUNICATION_FOR_USER.format(
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
                m.Z.canManageUser(v.Plq.KICK_MEMBERS, e, b) && !e.isClyde()
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "kick",
                        label: A.Z.Messages.KICK_USER.format({
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
                                location: h,
                                guildId: l,
                                user: e,
                              });
                          }),
                      },
                      "kick",
                    )
                  : null,
                m.Z.canManageUser(v.Plq.BAN_MEMBERS, e, b)
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "ban",
                        label: A.Z.Messages.BAN_USER.format({
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
                                location: h,
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
          f = (0, s.Aq)(),
          O = (0, i.e7)(
            [o.Z],
            () => (null != g ? g : o.Z.getChannelId(n, !0)),
            [g, n],
          ),
          R = (0, d.ms)(n, !0);
        return null != n && R
          ? (0, t.jsx)(r.MenuItem, {
              id: "mod-view",
              label: I.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
              action: () => {
                null == _ || _(),
                  (0, u.r)(n, l, null != O ? O : M.oC.MEMBER_SAFETY, {
                    modViewPanel: Z.k.INFO,
                    sourceLocation: null != m ? m : C.location,
                  }),
                  f.dispatch(E.CkL.POPOUT_CLOSE);
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
          return R;
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
        f = n(981631),
        O = n(689938);
      function R(e, l) {
        let n = (0, a.e7)([c.ZP], () => c.ZP.getChannels(l)[c.Zb], [l]),
          R = (0, a.e7)(
            [m.Z, o.Z],
            () => {
              let n = m.Z.getUserVoiceChannelId(l, e.id);
              return o.Z.getChannel(n);
            },
            [l, e.id],
          );
        if (
          (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(l, e.id), [l, e.id]) ||
          null == R
        )
          return null;
        let v = e.id === d.default.getId();
        if (!v && !Z.Z.can(f.Plq.MOVE_MEMBERS, R)) return null;
        let N = n.filter((l) => {
          let { channel: n } = l;
          return (
            n.id !== R.id &&
            (v
              ? Z.Z.can(f.Plq.CONNECT, n) && !(0, _.rY)(n, m.Z, M.Z)
              : Z.Z.can(f.Plq.MOVE_MEMBERS, n) &&
                (Z.Z.can(f.Plq.CONNECT, n) ||
                  C.BT({ permission: f.Plq.CONNECT, user: e, context: n })) &&
                !(0, _.rY)(n, m.Z, M.Z))
          );
        });
        return 0 === N.length
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "voice-move",
              label: O.Z.Messages.MOVE_TO,
              children: N.map((n) => {
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
          m = (0, i.e7)([E.Z], () => E.Z.getGuild(l)),
          C = (0, i.e7)([E.Z], () => E.Z.getRoles(l)),
          f = (0, i.e7)([s.Z], () => s.Z.roleStyle),
          O = (0, d.sE)(l, { location: a, targetUserId: e }),
          {
            userRoles: R,
            isGuildMember: v,
            canManageRoles: N,
          } = (0, i.cj)(
            [c.ZP, M.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != m && M.Z.can(I.Plq.MANAGE_ROLES, m),
              };
            },
            [e, l, m],
          );
        if (__OVERLAY__ || null == R || null == m || !v) return null;
        let S = M.Z.getHighestRole(m),
          A = Object.values(C).filter((e) => !(0, u.pM)(m.id, e.id)),
          P = N
            ? A.map((n) => {
                let a = n.managed || !M.Z.isRoleHigher(m, S, n),
                  i = -1 !== R.indexOf(n.id);
                return a && !i
                  ? null
                  : (0, t.jsx)(
                      r.MenuCheckboxItem,
                      {
                        id: n.id,
                        label: () => _(n, f),
                        disabled: a,
                        action: () => {
                          var t;
                          return (
                            (t = n),
                            void (R.includes(t.id)
                              ? (o.Z.updateMemberRoles(
                                  l,
                                  e,
                                  R.filter((e) => e !== t.id),
                                  [],
                                  [t.id],
                                ),
                                O(d.jQ.REMOVE_ROLE))
                              : (o.Z.updateMemberRoles(
                                  l,
                                  e,
                                  R.concat([t.id]),
                                  [t.id],
                                  [],
                                ),
                                O(d.jQ.ADD_ROLE)))
                          );
                        },
                        checked: i,
                      },
                      n.id,
                    );
              })
            : A.filter((e) => -1 !== R.indexOf(e.id)).map((e) =>
                (0, u.pM)(m.id, e.id)
                  ? null
                  : (0, t.jsx)(
                      r.MenuItem,
                      { id: e.id, label: () => _(e, f) },
                      e.id,
                    ),
              );
        return 0 === P.filter(Z.lm).length
          ? null
          : n
            ? P
            : (0, t.jsx)(r.MenuItem, {
                id: "roles",
                label: g.Z.Messages.ROLES_LIST.format({ numRoles: P.length }),
                children: P,
              });
      }
    },
  },
]);
//# sourceMappingURL=2ee26c98b37ae206170d.js.map
