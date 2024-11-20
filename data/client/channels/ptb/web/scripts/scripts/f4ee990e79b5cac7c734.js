"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13125"],
  {
    91176: function (e, l, n) {
      var t = n(913527),
        i = n.n(t),
        a = n(749210);
      l.Z = {
        async setCommunicationDisabledDuration(e, l, n, t, r) {
          let u = null != n ? i()().add(n, "s").toISOString() : null;
          await a.Z.setCommunicationDisabledUntil({
            guildId: e,
            userId: l,
            communicationDisabledUntilTimestamp: u,
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
          return x;
        },
      }),
        n(47120),
        n(789020);
      var t = n(200651),
        i = n(192379),
        a = n(442837),
        r = n(481060),
        u = n(91176),
        o = n(749210),
        d = n(616780),
        s = n(251794),
        c = n(386696),
        Z = n(71619),
        g = n(910693),
        m = n(592125),
        M = n(271383),
        E = n(430824),
        v = n(496675),
        f = n(594174),
        I = n(979651),
        C = n(630388),
        P = n(5192),
        h = n(813872),
        S = n(981631),
        b = n(590433),
        O = n(372897),
        R = n(388032);
      function x(e, l, x, j) {
        let p = i.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
          T = null != j ? [j] : [];
        (0, d.$)(p), (0, a.e7)([v.Z], () => v.Z.getGuildVersion(l), [l]);
        let _ = (0, a.e7)([E.Z], () => E.Z.getGuild(l), [l]),
          A = (0, a.e7)(
            [f.default],
            () => {
              var l;
              return (
                (null === (l = f.default.getCurrentUser()) || void 0 === l
                  ? void 0
                  : l.id) === e.id
              );
            },
            [e.id],
          ),
          N = (0, a.e7)([M.ZP], () => M.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
          U = (0, a.e7)([m.Z], () => m.Z.getChannel(x), [x]),
          [, q] = (0, Z.ZP)(e.id, l),
          y = null == U ? void 0 : U.isGuildStageVoice(),
          {
            muted: B,
            deafened: k,
            suppressed: L,
            voiceChannelId: D,
          } = (0, a.cj)([I.Z], () => {
            var n, t, i;
            let a = I.Z.getVoiceState(l, e.id);
            return {
              muted:
                null !== (n = null == a ? void 0 : a.mute) && void 0 !== n && n,
              deafened:
                null !== (t = null == a ? void 0 : a.deaf) && void 0 !== t && t,
              suppressed:
                null !== (i = null == a ? void 0 : a.suppress) &&
                void 0 !== i &&
                i,
              voiceChannelId: null == a ? void 0 : a.channelId,
            };
          }),
          V = (0, a.e7)([M.ZP], () => M.ZP.getMember(l, e.id)),
          G = (0, h.Z)({ userId: e.id, guildId: l, channelId: x, location: j }),
          F = (0, g.sE)(l, { location: j, targetUserId: e.id }),
          w = (0, c.Z)(l, e.id),
          K =
            null != D &&
            null != x &&
            v.Z.canWithPartialContext(S.Plq.VIEW_CHANNEL, { channelId: D }) &&
            !N
              ? [
                  (!y || (y && !L)) &&
                  v.Z.canWithPartialContext(S.Plq.MUTE_MEMBERS, {
                    channelId: x,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-mute",
                          label: R.intl.string(R.t.e9e9UV),
                          checked: B,
                          color: "danger",
                          action: () => {
                            !1 === B && F(g.jQ.MUTE),
                              o.Z.setServerMute(l, e.id, !B);
                          },
                        },
                        "voice-mute",
                      )
                    : null,
                  (!y || (y && !L)) &&
                  v.Z.canWithPartialContext(S.Plq.DEAFEN_MEMBERS, {
                    channelId: x,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-deafen",
                          label: R.intl.string(R.t.hMA2GB),
                          checked: k,
                          color: "danger",
                          action: () => o.Z.setServerDeaf(l, e.id, !k),
                        },
                        "voice-deafen",
                      )
                    : null,
                  !A &&
                  null != _ &&
                  v.Z.canWithPartialContext(S.Plq.MOVE_MEMBERS, {
                    channelId: x,
                  })
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "voice-disconnect",
                          label: A
                            ? R.intl.string(R.t["6vrfgo"])
                            : R.intl.string(R.t["/jERiI"]),
                          color: "danger",
                          action: () => o.Z.setChannel(l, e.id, null),
                        },
                        "voice-disconnect",
                      )
                    : null,
                ]
              : [],
          Y = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
              try {
                var i;
                await u.Z.setCommunicationDisabledDuration(
                  n,
                  t,
                  b.UK.DURATION_60_SEC,
                  null,
                  j,
                ),
                  F(g.jQ.TIMEOUT),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      R.intl.formatToPlainString(R.t.O9C3Nj, {
                        user:
                          null !== (i = P.ZP.getName(n, null, e)) &&
                          void 0 !== i
                            ? i
                            : "",
                      }),
                      r.ToastType.SUCCESS,
                    ),
                  );
              } catch (e) {
                (0, r.showToast)(
                  (0, r.createToast)(
                    R.intl.string(R.t.epyCur),
                    r.ToastType.FAILURE,
                  ),
                );
              }
          },
          Q = null,
          W =
            null != _ &&
            v.Z.canManageUser(S.Plq.MODERATE_MEMBERS, e, _) &&
            v.Z.canManageUser(S.Plq.KICK_MEMBERS, e, _) &&
            v.Z.canManageUser(S.Plq.BAN_MEMBERS, e, _),
          z =
            null != _ &&
            (v.Z.canManageUser(S.Plq.MANAGE_GUILD, e, _) ||
              v.Z.canManageUser(S.Plq.MANAGE_ROLES, e, _));
        if (
          !A &&
          null != _ &&
          null != V &&
          null != V.joinedAt &&
          (W || z) &&
          _.hasFeature(S.oNc.GUILD_ONBOARDING_EVER_ENABLED)
        ) {
          var H;
          Q = (0, C.yE)(
            null !== (H = V.flags) && void 0 !== H ? H : 0,
            O.q.BYPASSES_VERIFICATION,
          )
            ? (0, t.jsx)(
                r.MenuItem,
                {
                  id: "verify",
                  label: R.intl.string(R.t.NbhSIy),
                  action: () => {
                    var l;
                    return o.Z.setMemberFlags(
                      _.id,
                      e.id,
                      (0, C.mB)(
                        null !== (l = V.flags) && void 0 !== l ? l : 0,
                        O.q.BYPASSES_VERIFICATION,
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
                  label: R.intl.string(R.t["6QlTeH"]),
                  action: () => {
                    var l;
                    return o.Z.setMemberFlags(
                      _.id,
                      e.id,
                      (0, C.mB)(
                        null !== (l = V.flags) && void 0 !== l ? l : 0,
                        O.q.BYPASSES_VERIFICATION,
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
          ...(A || null == _
            ? []
            : [
                G,
                Q,
                w && !N
                  ? q
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "removetimeout",
                          label: R.intl.formatToPlainString(R.t.csKetb, {
                            user: e.username,
                          }),
                          color: "danger",
                          action: () => {
                            (0, s.q)({
                              guildId: l,
                              userId: e.id,
                              anaylticsLocations: T,
                            });
                          },
                        },
                        "removetimeout",
                      )
                    : (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "timeout",
                          label: R.intl.formatToPlainString(R.t.OhsOy8, {
                            user: e.username,
                          }),
                          color: "danger",
                          action: (n) => {
                            if (n.ctrlKey || n.metaKey) return Y(n, l, e.id);
                            (0, s.z)({
                              guildId: l,
                              userId: e.id,
                              anaylticsLocations: T,
                            });
                          },
                        },
                        "timeout",
                      )
                  : null,
                v.Z.canManageUser(S.Plq.KICK_MEMBERS, e, _) && !e.isClyde()
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "kick",
                        label: R.intl.formatToPlainString(R.t["9l/iTU"], {
                          user: e.username,
                        }),
                        color: "danger",
                        action: () =>
                          (0, r.openModalLazy)(async () => {
                            let { default: i } = await n
                              .e("5454")
                              .then(n.bind(n, 854360));
                            return (n) =>
                              (0, t.jsx)(i, {
                                ...n,
                                location: j,
                                guildId: l,
                                user: e,
                              });
                          }),
                      },
                      "kick",
                    )
                  : null,
                v.Z.canManageUser(S.Plq.BAN_MEMBERS, e, _)
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "ban",
                        label: R.intl.formatToPlainString(R.t.WnpUBg, {
                          user: e.username,
                        }),
                        color: "danger",
                        action: () =>
                          (0, r.openModalLazy)(async () => {
                            let { default: i } = await n
                              .e("43350")
                              .then(n.bind(n, 98746));
                            return (n) =>
                              (0, t.jsx)(i, {
                                ...n,
                                location: j,
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
          return E;
        },
      });
      var t = n(200651),
        i = n(192379),
        a = n(442837),
        r = n(481060),
        u = n(40851),
        o = n(189432),
        d = n(189357),
        s = n(944486),
        c = n(626135),
        Z = n(981631),
        g = n(176505),
        m = n(50493),
        M = n(388032);
      function E(e) {
        let {
            userId: l,
            guildId: n,
            channelId: E,
            location: v,
            onAction: f,
          } = e,
          I = i.useContext(c.AnalyticsContext),
          C = (0, u.Aq)(),
          P = (0, a.e7)(
            [s.Z],
            () => (null != E ? E : s.Z.getChannelId(n, !0)),
            [E, n],
          ),
          h = (0, d.ms)(n, !0);
        return null != n && h
          ? (0, t.jsx)(r.MenuItem, {
              id: "mod-view",
              label: M.intl.string(M.t.kj3tz8),
              action: () => {
                null == f || f(),
                  (0, o.r)(n, l, null != P ? P : g.oC.MEMBER_SAFETY, {
                    modViewPanel: m.k.INFO,
                    sourceLocation: null != v ? v : I.location,
                  }),
                  C.dispatch(Z.CkL.POPOUT_CLOSE);
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
      var t = n(200651);
      n(192379);
      var i = n(442837),
        a = n(481060),
        r = n(493683),
        u = n(40851),
        o = n(314897),
        d = n(981631),
        s = n(388032);
      function c(e, l) {
        let n = (0, u.Aq)();
        return (0, i.e7)([o.default], () => o.default.getId() === e) ||
          l === d.IlC.POPOUT
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                r.Z.openPrivateChannel(e),
                  n.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, a.closeAllModals)();
              },
            });
      }
    },
    712301: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return h;
        },
      });
      var t = n(200651);
      n(192379);
      var i = n(442837),
        a = n(481060),
        r = n(749210),
        u = n(287734),
        o = n(933557),
        d = n(314897),
        s = n(592125),
        c = n(984933),
        Z = n(271383),
        g = n(430824),
        m = n(496675),
        M = n(699516),
        E = n(594174),
        v = n(979651),
        f = n(934415),
        I = n(700785),
        C = n(981631),
        P = n(388032);
      function h(e, l) {
        let n = (0, i.e7)([c.ZP], () => c.ZP.getChannels(l)[c.Zb], [l]),
          h = (0, i.e7)(
            [v.Z, s.Z],
            () => {
              let n = v.Z.getUserVoiceChannelId(l, e.id);
              return s.Z.getChannel(n);
            },
            [l, e.id],
          );
        if (
          (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(l, e.id), [l, e.id]) ||
          null == h
        )
          return null;
        let S = e.id === d.default.getId();
        if (!S && !m.Z.can(C.Plq.MOVE_MEMBERS, h)) return null;
        let b = n.filter((l) => {
          let { channel: n } = l;
          return (
            n.id !== h.id &&
            (S
              ? m.Z.can(C.Plq.CONNECT, n) && !(0, f.rY)(n, v.Z, g.Z)
              : m.Z.can(C.Plq.MOVE_MEMBERS, n) &&
                (m.Z.can(C.Plq.CONNECT, n) ||
                  I.BT({ permission: C.Plq.CONNECT, user: e, context: n })) &&
                !(0, f.rY)(n, v.Z, g.Z))
          );
        });
        return 0 === b.length
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "voice-move",
              label: P.intl.string(P.t.FAplmp),
              children: b.map((n) => {
                let { channel: i } = n;
                return (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: i.id,
                    action: () => {
                      var n;
                      return (
                        (n = i),
                        void (e.id === d.default.getId()
                          ? u.default.selectVoiceChannel(n.id)
                          : r.Z.setChannel(l, e.id, n.id))
                      );
                    },
                    label: (0, o.F6)(i, E.default, M.Z),
                  },
                  i.id,
                );
              }),
            });
      }
    },
    931617: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return I;
        },
      });
      var t = n(200651);
      n(192379);
      var i = n(866442),
        a = n(442837),
        r = n(481060),
        u = n(607070),
        o = n(605436),
        d = n(910693),
        s = n(434404),
        c = n(271383),
        Z = n(430824),
        g = n(496675),
        m = n(823379),
        M = n(981631),
        E = n(388032),
        v = n(587525);
      function f(e, l) {
        var n, a;
        return (0, t.jsxs)("div", {
          className: v.roleRow,
          children: [
            "dot" === l
              ? (0, t.jsx)(r.RoleDot, {
                  className: v.roleDot,
                  color:
                    null !== (n = e.colorString) && void 0 !== n
                      ? n
                      : (0, i.Rf)(M.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, t.jsx)(r.RoleCircle, {
                  className: v.roleDot,
                  color:
                    null !== (a = e.colorString) && void 0 !== a
                      ? a
                      : (0, i.Rf)(M.p6O),
                }),
            (0, t.jsx)("div", { children: e.name }),
          ],
        });
      }
      function I(e, l) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          v = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          I = (0, a.e7)([Z.Z], () => Z.Z.getGuild(l)),
          C = (0, a.e7)([Z.Z], () => Z.Z.getRoles(l)),
          P = (0, a.e7)([u.Z], () => u.Z.roleStyle),
          h = (0, d.sE)(l, { location: i, targetUserId: e }),
          {
            userRoles: S,
            isGuildMember: b,
            canManageRoles: O,
          } = (0, a.cj)(
            [c.ZP, g.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != I && g.Z.can(M.Plq.MANAGE_ROLES, I),
              };
            },
            [e, l, I],
          );
        if (__OVERLAY__ || null == S || null == I || !b) return null;
        let R = g.Z.getHighestRole(I),
          x = Object.values(C).filter((e) => !(0, o.pM)(I.id, e.id)),
          j =
            O && !v
              ? x.map((n) => {
                  let i = n.managed || !g.Z.isRoleHigher(I, R, n),
                    a = -1 !== S.indexOf(n.id);
                  return i && !a
                    ? null
                    : (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: n.id,
                          label: () => f(n, P),
                          disabled: i,
                          action: () => {
                            var t;
                            return (
                              (t = n),
                              void (S.includes(t.id)
                                ? (s.Z.updateMemberRoles(
                                    l,
                                    e,
                                    S.filter((e) => e !== t.id),
                                    [],
                                    [t.id],
                                  ),
                                  h(d.jQ.REMOVE_ROLE))
                                : (s.Z.updateMemberRoles(
                                    l,
                                    e,
                                    S.concat([t.id]),
                                    [t.id],
                                    [],
                                  ),
                                  h(d.jQ.ADD_ROLE)))
                            );
                          },
                          checked: a,
                        },
                        n.id,
                      );
                })
              : x
                  .filter((e) => -1 !== S.indexOf(e.id))
                  .map((e) =>
                    (0, o.pM)(I.id, e.id)
                      ? null
                      : (0, t.jsx)(
                          r.MenuItem,
                          { id: e.id, label: () => f(e, P) },
                          e.id,
                        ),
                  );
        return 0 === j.filter(m.lm).length
          ? null
          : n
            ? j
            : (0, t.jsx)(r.MenuItem, {
                id: "roles",
                label: E.intl.formatToPlainString(E.t.PCs0oq, {
                  numRoles: j.length,
                }),
                children: j,
              });
      }
    },
  },
]);
//# sourceMappingURL=f4ee990e79b5cac7c734.js.map
