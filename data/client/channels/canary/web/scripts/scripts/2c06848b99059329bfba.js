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
          return j;
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
        m = n(71619),
        Z = n(946273),
        g = n(910693),
        M = n(592125),
        E = n(271383),
        v = n(430824),
        f = n(496675),
        I = n(594174),
        h = n(979651),
        C = n(630388),
        P = n(5192),
        S = n(813872),
        b = n(981631),
        O = n(590433),
        R = n(372897),
        x = n(388032);
      function j(e, l, j, p) {
        let T = i.useMemo(() => ({ [l]: [e.id] }), [l, e.id]),
          A = null != p ? [p] : [];
        (0, d.$)(T), (0, a.e7)([f.Z], () => f.Z.getGuildVersion(l), [l]);
        let _ = (0, a.e7)([v.Z], () => v.Z.getGuild(l), [l]),
          N = (0, a.e7)(
            [I.default],
            () => {
              var l;
              return (
                (null === (l = I.default.getCurrentUser()) || void 0 === l
                  ? void 0
                  : l.id) === e.id
              );
            },
            [e.id],
          ),
          U = (0, a.e7)([E.ZP], () => E.ZP.isGuestOrLurker(l, e.id), [l, e.id]),
          y = (0, a.e7)([M.Z], () => M.Z.getChannel(j), [j]),
          [, q] = (0, m.ZP)(e.id, l),
          k = null == y ? void 0 : y.isGuildStageVoice(),
          {
            muted: B,
            deafened: L,
            suppressed: D,
            voiceChannelId: V,
          } = (0, a.cj)([h.Z], () => {
            var n, t, i;
            let a = h.Z.getVoiceState(l, e.id);
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
          G = (0, a.e7)([E.ZP], () => E.ZP.getMember(l, e.id)),
          F = (0, S.Z)({ userId: e.id, guildId: l, channelId: j, location: p }),
          w = (0, g.sE)(l, { location: p, targetUserId: e.id }),
          K = (0, c.Z)(l, e.id),
          Y =
            null != V &&
            null != j &&
            f.Z.canWithPartialContext(b.Plq.VIEW_CHANNEL, { channelId: V }) &&
            !U
              ? [
                  (!k || (k && !D)) &&
                  f.Z.canWithPartialContext(b.Plq.MUTE_MEMBERS, {
                    channelId: j,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-mute",
                          label: x.intl.string(x.t.e9e9UV),
                          checked: B,
                          color: "danger",
                          action: () => {
                            !1 === B && w(g.jQ.MUTE),
                              o.Z.setServerMute(l, e.id, !B);
                          },
                        },
                        "voice-mute",
                      )
                    : null,
                  (!k || (k && !D)) &&
                  f.Z.canWithPartialContext(b.Plq.DEAFEN_MEMBERS, {
                    channelId: j,
                  })
                    ? (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: "voice-deafen",
                          label: x.intl.string(x.t.hMA2GB),
                          checked: L,
                          color: "danger",
                          action: () => o.Z.setServerDeaf(l, e.id, !L),
                        },
                        "voice-deafen",
                      )
                    : null,
                  !N &&
                  null != _ &&
                  f.Z.canWithPartialContext(b.Plq.MOVE_MEMBERS, {
                    channelId: j,
                  })
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "voice-disconnect",
                          label: N
                            ? x.intl.string(x.t["6vrfgo"])
                            : x.intl.string(x.t["/jERiI"]),
                          color: "danger",
                          action: () => o.Z.setChannel(l, e.id, null),
                        },
                        "voice-disconnect",
                      )
                    : null,
                ]
              : [],
          Q = async (l, n, t) => {
            if (l.ctrlKey || l.metaKey)
              try {
                var i;
                await u.Z.setCommunicationDisabledDuration(
                  n,
                  t,
                  O.UK.DURATION_60_SEC,
                  null,
                  p,
                ),
                  w(g.jQ.TIMEOUT),
                  (0, r.showToast)(
                    (0, r.createToast)(
                      x.intl.formatToPlainString(x.t.O9C3Nj, {
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
                    x.intl.string(x.t.epyCur),
                    r.ToastType.FAILURE,
                  ),
                );
              }
          },
          W = null,
          z =
            null != _ &&
            f.Z.canManageUser(b.Plq.MODERATE_MEMBERS, e, _) &&
            f.Z.canManageUser(b.Plq.KICK_MEMBERS, e, _) &&
            f.Z.canManageUser(b.Plq.BAN_MEMBERS, e, _),
          H =
            null != _ &&
            (f.Z.canManageUser(b.Plq.MANAGE_GUILD, e, _) ||
              f.Z.canManageUser(b.Plq.MANAGE_ROLES, e, _));
        if (
          !N &&
          null != _ &&
          null != G &&
          null != G.joinedAt &&
          (z || H) &&
          _.hasFeature(b.oNc.GUILD_ONBOARDING_EVER_ENABLED)
        ) {
          var J;
          W = (0, C.yE)(
            null !== (J = G.flags) && void 0 !== J ? J : 0,
            R.q.BYPASSES_VERIFICATION,
          )
            ? (0, t.jsx)(
                r.MenuItem,
                {
                  id: "verify",
                  label: x.intl.string(x.t.NbhSIy),
                  action: () => {
                    var l;
                    return o.Z.setMemberFlags(
                      _.id,
                      e.id,
                      (0, C.mB)(
                        null !== (l = G.flags) && void 0 !== l ? l : 0,
                        R.q.BYPASSES_VERIFICATION,
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
                  label: x.intl.string(x.t["6QlTeH"]),
                  action: () => {
                    var l;
                    return o.Z.setMemberFlags(
                      _.id,
                      e.id,
                      (0, C.mB)(
                        null !== (l = G.flags) && void 0 !== l ? l : 0,
                        R.q.BYPASSES_VERIFICATION,
                        !0,
                      ),
                    );
                  },
                },
                "verify",
              );
        }
        return [
          ...Y,
          ...(N || null == _
            ? []
            : [
                F,
                W,
                K && !U
                  ? q
                    ? (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "removetimeout",
                          label: x.intl.formatToPlainString(x.t.csKetb, {
                            user: e.username,
                          }),
                          color: "danger",
                          action: () => {
                            (0, s.q)({
                              guildId: l,
                              userId: e.id,
                              anaylticsLocations: A,
                            });
                          },
                        },
                        "removetimeout",
                      )
                    : (0, t.jsx)(
                        r.MenuItem,
                        {
                          id: "timeout",
                          label: x.intl.formatToPlainString(x.t.OhsOy8, {
                            user: e.username,
                          }),
                          color: "danger",
                          action: (n) => {
                            if (n.ctrlKey || n.metaKey) return Q(n, l, e.id);
                            (0, s.z)({
                              guildId: l,
                              userId: e.id,
                              anaylticsLocations: A,
                            });
                          },
                        },
                        "timeout",
                      )
                  : null,
                (0, Z.BK)(e, _)
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "kick",
                        label: x.intl.formatToPlainString(x.t["9l/iTU"], {
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
                                location: p,
                                guildId: l,
                                user: e,
                              });
                          }),
                      },
                      "kick",
                    )
                  : null,
                (0, Z.mm)(e, _)
                  ? (0, t.jsx)(
                      r.MenuItem,
                      {
                        id: "ban",
                        label: x.intl.formatToPlainString(x.t.WnpUBg, {
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
                                location: p,
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
        m = n(981631),
        Z = n(176505),
        g = n(50493),
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
          h = (0, u.Aq)(),
          C = (0, a.e7)(
            [s.Z],
            () => (null != E ? E : s.Z.getChannelId(n, !0)),
            [E, n],
          ),
          P = (0, d.ms)(n, !0);
        return null != n && P
          ? (0, t.jsx)(r.MenuItem, {
              id: "mod-view",
              label: M.intl.string(M.t.kj3tz8),
              action: () => {
                null == f || f(),
                  (0, o.r)(n, l, null != C ? C : Z.oC.MEMBER_SAFETY, {
                    modViewPanel: g.k.INFO,
                    sourceLocation: null != v ? v : I.location,
                  }),
                  h.dispatch(m.CkL.POPOUT_CLOSE);
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
          return P;
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
        m = n(271383),
        Z = n(430824),
        g = n(496675),
        M = n(699516),
        E = n(594174),
        v = n(979651),
        f = n(934415),
        I = n(700785),
        h = n(981631),
        C = n(388032);
      function P(e, l) {
        let n = (0, i.e7)([c.ZP], () => c.ZP.getChannels(l)[c.Zb], [l]),
          P = (0, i.e7)(
            [v.Z, s.Z],
            () => {
              let n = v.Z.getUserVoiceChannelId(l, e.id);
              return s.Z.getChannel(n);
            },
            [l, e.id],
          );
        if (
          (0, i.e7)([m.ZP], () => m.ZP.isGuestOrLurker(l, e.id), [l, e.id]) ||
          null == P
        )
          return null;
        let S = e.id === d.default.getId();
        if (!S && !g.Z.can(h.Plq.MOVE_MEMBERS, P)) return null;
        let b = n.filter((l) => {
          let { channel: n } = l;
          return (
            n.id !== P.id &&
            (S
              ? g.Z.can(h.Plq.CONNECT, n) && !(0, f.rY)(n, v.Z, Z.Z)
              : g.Z.can(h.Plq.MOVE_MEMBERS, n) &&
                (g.Z.can(h.Plq.CONNECT, n) ||
                  I.BT({ permission: h.Plq.CONNECT, user: e, context: n })) &&
                !(0, f.rY)(n, v.Z, Z.Z))
          );
        });
        return 0 === b.length
          ? null
          : (0, t.jsx)(a.MenuItem, {
              id: "voice-move",
              label: C.intl.string(C.t.FAplmp),
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
        m = n(430824),
        Z = n(496675),
        g = n(823379),
        M = n(981631),
        E = n(388032),
        v = n(5118);
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
          I = (0, a.e7)([m.Z], () => m.Z.getGuild(l)),
          h = (0, a.e7)([m.Z], () => m.Z.getRoles(l)),
          C = (0, a.e7)([u.Z], () => u.Z.roleStyle),
          P = (0, d.sE)(l, { location: i, targetUserId: e }),
          {
            userRoles: S,
            isGuildMember: b,
            canManageRoles: O,
          } = (0, a.cj)(
            [c.ZP, Z.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != I && Z.Z.can(M.Plq.MANAGE_ROLES, I),
              };
            },
            [e, l, I],
          );
        if (__OVERLAY__ || null == S || null == I || !b) return null;
        let R = Z.Z.getHighestRole(I),
          x = Object.values(h).filter((e) => !(0, o.pM)(I.id, e.id)),
          j =
            O && !v
              ? x.map((n) => {
                  let i = n.managed || !Z.Z.isRoleHigher(I, R, n),
                    a = -1 !== S.indexOf(n.id);
                  return i && !a
                    ? null
                    : (0, t.jsx)(
                        r.MenuCheckboxItem,
                        {
                          id: n.id,
                          label: () => f(n, C),
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
                                  P(d.jQ.REMOVE_ROLE))
                                : (s.Z.updateMemberRoles(
                                    l,
                                    e,
                                    S.concat([t.id]),
                                    [t.id],
                                    [],
                                  ),
                                  P(d.jQ.ADD_ROLE)))
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
                          { id: e.id, label: () => f(e, C) },
                          e.id,
                        ),
                  );
        return 0 === j.filter(g.lm).length
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
//# sourceMappingURL=2c06848b99059329bfba.js.map
