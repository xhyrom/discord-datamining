"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70675"],
  {
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        u = t(616780),
        o = t(40851),
        d = t(300284),
        s = t(484459),
        c = t(314897),
        Z = t(271383),
        f = t(430824),
        g = t(496675),
        m = t(594174),
        M = t(981631),
        v = t(388032),
        x = t(497523);
      function h(e) {
        let {
            guildId: n,
            userId: h,
            analyticsLocation: p,
            analyticsLocations: P,
            context: C,
            icon: I,
          } = e,
          b = f.Z.getGuild(n),
          E = c.default.getId(),
          j = (0, r.e7)([m.default], () => m.default.getUser(h)),
          T = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, h), [n, h]);
        (0, r.e7)([g.Z], () => g.Z.getGuildVersion(n), [n]);
        let O = i.useMemo(() => ({ [n]: [h] }), [n, h]);
        (0, u.$)(O);
        let N = C === M.IlC.POPOUT,
          A = (0, d.Z)({ guild: b, analyticsLocation: p }),
          U = (0, o.Aq)();
        if (null == b || N) return null;
        let _ =
            E === h &&
            (g.Z.can(M.Plq.CHANGE_NICKNAME, b) ||
              g.Z.can(M.Plq.MANAGE_NICKNAMES, b)),
          R = E === h,
          S = g.Z.canManageUser(M.Plq.MANAGE_NICKNAMES, h, b);
        if (!(_ || S || R) || null == j || T) return null;
        let L = b.hasFeature(M.oNc.HUB)
            ? v.intl.string(v.t["+MWrWl"])
            : v.intl.string(v.t["PKQB/P"]),
          k = R ? L : v.intl.string(v.t.dilOFx);
        return (0, l.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, l.jsx)("div", {
            className: x.labelWrapper,
            children: (0, l.jsx)("span", { className: x.label, children: k }),
          }),
          icon: I,
          action: () => {
            R
              ? ((0, s.Z)(j.id, j.getAvatarURL(n, 80), { guildId: n }),
                A(),
                U.dispatch(M.CkL.POPOUT_CLOSE),
                (0, a.closeAllModals)())
              : (0, a.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, l.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: j,
                      analyticsSource: p,
                      analyticsLocations: P,
                    });
                });
          },
        });
      }
    },
    267980: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(442837),
        i = t(314897),
        r = t(944486),
        a = t(590415);
      function u() {
        let e = (0, l.e7)([r.Z], () => r.Z.getVoiceChannelId()),
          n = (0, l.e7)([i.default], () => i.default.getId());
        return (
          (0, a.ZP)(n, e) === a.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        );
      }
    },
    819403: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(430824),
        u = t(594174),
        o = t(979651),
        d = t(471253),
        s = t(200498),
        c = t(88751),
        Z = t(267980),
        f = t(623633),
        g = t(388032);
      function m(e) {
        var n;
        let t = (0, f.Z)(),
          m = null == t ? void 0 : t.id,
          M = null == t ? void 0 : t.guild_id,
          v = (0, i.e7)([a.Z], () => a.Z.getGuild(M), [M]),
          x = (0, i.e7)(
            [o.Z],
            () => (null != m ? o.Z.getVoiceStateForChannel(m, e.id) : null),
            [m, e.id],
          ),
          h =
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          p = (0, Z.Z)(),
          P = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [
            m,
            e.id,
          ]),
          C = (0, s.B)(m);
        if (null == t || null == v || null == x || P.speaker) return null;
        let I = () => {
          h ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
        };
        return C
          ? (0, l.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: h
                ? g.intl.string(g.t["W6c/VV"])
                : g.intl.string(g.t.VUCWcH),
              action: I,
            })
          : p && h
            ? (0, l.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: g.intl.string(g.t["W6c/VV"]),
                action: I,
              })
            : null;
      }
    },
    654663: function (e, n, t) {
      t.r(n);
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(239091),
        a = t(883385),
        u = t(108843),
        o = t(911969),
        d = t(947440),
        s = t(100527),
        c = t(299206),
        Z = t(976192),
        f = t(819403),
        g = t(777658),
        m = t(858488),
        M = t(185457),
        v = t(570870),
        x = t(389052),
        h = t(24311),
        p = t(158508),
        P = t(710631),
        C = t(297047),
        I = t(88966),
        b = t(712301),
        E = t(520063),
        j = t(37258),
        T = t(931617),
        O = t(332031),
        N = t(981631),
        A = t(388032);
      n.default = (0, u.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channel: a,
                context: u,
                onSelect: s,
                onHeightUpdate: U,
              } = e,
              _ = a.id,
              R = (0, j.Z)({ userId: n.id, guildId: t, channelId: _ }),
              S = (0, C.Z)(n, t, u),
              L = (0, I.Z)(n.id, u),
              k = (0, O.Z)(n.id),
              y = (0, h.Z)({ user: n, context: u }),
              G = (0, M.Z)({ user: n, guildId: t, channelId: _, context: u }),
              q = (0, m.Z)({ user: n }),
              w = (0, Z.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: {
                  page: N.ZY5.GUILD_CHANNEL,
                  section: N.jXE.CHAT_USERNAME,
                  object: N.qAy.CONTEXT_MENU_ITEM,
                },
                context: u,
              }),
              V = (0, P.Z)({ user: n, guildId: t }),
              D = (0, d.Z)(null, n),
              F = (0, g.Z)(n),
              W = (0, x.Z)({
                user: n,
                guildId: t,
                channelId: _,
                location: "ThreadUserContextMenu",
              }),
              B = (0, p.Z)({
                user: n,
                guildId: t,
                channelId: _,
                location: "ThreadUserContextMenu",
              }),
              H = (0, E.Z)(n, t, _),
              K = (0, T.Z)(n.id, t),
              z = (0, b.Z)(n, t),
              X = (0, c.Z)({ id: n.id, label: A.intl.string(A.t["/AXYnJ"]) }),
              Y = (0, f.Z)(n),
              J = (0, v.Z)({
                commandType: o.yU.USER,
                commandTargetId: n.id,
                channel: a,
                guildId: t,
                onHeightUpdate: U,
              }),
              Q = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": A.intl.string(A.t.liqwPD),
              onSelect: s,
              children: [
                !Q &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(i.MenuGroup, { children: Y }),
                      (0, l.jsxs)(i.MenuGroup, {
                        children: [R, S, L, y, G, q, k],
                      }),
                      (0, l.jsx)(i.MenuGroup, { children: D }),
                      (0, l.jsxs)(i.MenuGroup, {
                        children: [w, J, V, F, B, W],
                      }),
                      (0, l.jsx)(i.MenuGroup, { children: H }),
                      (0, l.jsxs)(i.MenuGroup, { children: [K, z] }),
                    ],
                  }),
                (0, l.jsx)(i.MenuGroup, { children: X }),
              ],
            });
          },
          { object: N.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.THREAD_USER_MENU],
      );
    },
    777658: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        u = t(194359),
        o = t(699516),
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
          [g, m] = (0, r.Wu)([o.Z], () => [o.Z.isFriend(t), o.Z.isBlocked(t)], [
            t,
          ]),
          [M, v] = i.useState(!1);
        return Z || f
          ? null
          : g
            ? (0, l.jsx)(a.MenuItem, {
                id: "remove-friend",
                label: s.intl.string(s.t.cvSt1N),
                action: function () {
                  (0, a.openModal)((e) =>
                    (0, l.jsx)(a.ConfirmModal, {
                      header: s.intl.formatToPlainString(s.t.fPLvZW, {
                        name: c,
                      }),
                      confirmText: s.intl.string(s.t.cvSt1N),
                      cancelText: s.intl.string(s.t["ETE/oK"]),
                      onConfirm: () => {
                        u.Z.removeFriend(t, { location: n }), v(!1);
                      },
                      ...e,
                      children: (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: s.intl.format(s.t.l5FFq6, { name: c }),
                      }),
                    }),
                  );
                },
              })
            : (0, l.jsx)(a.MenuItem, {
                id: "add-friend",
                label: M
                  ? s.intl.string(s.t.xMH6vL)
                  : s.intl.string(s.t.w5uwoK),
                action: () => {
                  !M &&
                    (u.Z.addRelationship({
                      userId: t,
                      context: { location: n },
                    }),
                    v(!0));
                },
                disabled: m || (M && !g),
              });
      }
    },
    858488: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(699516),
        u = t(388032);
      function o(e) {
        let { user: n, onAction: o } = e,
          d = n.id,
          [s, c] = (0, i.Wu)(
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
        if (!s) return null;
        let Z =
          null == c ? u.intl.string(u.t.BGYkaG) : u.intl.string(u.t["8pOYUF"]);
        return (0, l.jsx)(r.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == o || o(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await t.e("25070").then(t.bind(t, 670794));
                return (t) => (0, l.jsx)(e, { user: n, nickname: c, ...t });
              });
          },
        });
      }
    },
    185457: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(906732),
        u = t(531301),
        o = t(171368),
        d = t(314897),
        s = t(246946),
        c = t(626135),
        Z = t(981631),
        f = t(228168),
        g = t(388032);
      function m(e) {
        let { user: n, guildId: t, channelId: m, context: M } = e,
          { id: v } = n,
          { loading: x, note: h } = (0, u.Z)(v),
          p = !x && null != h && h.length > 0,
          P = M === Z.IlC.POPOUT,
          C = i.useContext(c.AnalyticsContext),
          { analyticsLocations: I } = (0, a.ZP)();
        return v === d.default.getId() || s.Z.hidePersonalInformation || P
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "note",
              label: x
                ? g.intl.string(g.t["WLKx//"])
                : p
                  ? g.intl.string(g.t.sHHsOD)
                  : g.intl.string(g.t.Dglxra),
              action: () => {
                (0, o.openUserProfileModal)({
                  userId: n.id,
                  section: f.oh.USER_INFO,
                  subsection: f.Tb.NOTE,
                  guildId: t,
                  channelId: m,
                  sourceAnalyticsLocations: I,
                  analyticsLocation: C.location,
                });
              },
            });
      }
    },
    24311: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(493683),
        u = t(40851),
        o = t(740492),
        d = t(314897),
        s = t(592125),
        c = t(699516),
        Z = t(944486),
        f = t(981631),
        g = t(388032);
      function m(e) {
        let {
            user: n,
            context: m,
            label: M,
            joinCallVideo: v,
            id: x,
            onCall: h,
          } = e,
          p = (0, u.Aq)(),
          P = (0, i.e7)([d.default], () => d.default.getId() === n.id),
          C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          I = (0, i.e7)(
            [Z.Z, s.Z],
            () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (P || m === f.IlC.POPOUT || I || n.bot || n.isProvisional)
          return null;
        let b = () => {
            null == h || h(),
              a.Z.openPrivateChannel(n.id, !0, v),
              p.dispatch(f.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          E = !o.ZP.disableCallUserConfirmationPrompt;
        return (0, l.jsx)(r.MenuItem, {
          id: null != x ? x : "call",
          label: null != M ? M : g.intl.string(g.t.JJogjo),
          action: E
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, l.jsx)(e, { onSubmit: b, ...n });
                });
              }
            : b,
          disabled: C,
        });
      }
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(493683),
        u = t(40851),
        o = t(314897),
        d = t(981631),
        s = t(388032);
      function c(e, n) {
        let t = (0, u.Aq)();
        return (0, i.e7)([o.default], () => o.default.getId() === e) ||
          n === d.IlC.POPOUT
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                a.Z.openPrivateChannel(e),
                  t.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, r.closeAllModals)();
              },
            });
      }
    },
    712301: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(749210),
        u = t(287734),
        o = t(933557),
        d = t(314897),
        s = t(592125),
        c = t(984933),
        Z = t(271383),
        f = t(430824),
        g = t(496675),
        m = t(699516),
        M = t(594174),
        v = t(979651),
        x = t(934415),
        h = t(700785),
        p = t(981631),
        P = t(388032);
      function C(e, n) {
        let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
          C = (0, i.e7)(
            [v.Z, s.Z],
            () => {
              let t = v.Z.getUserVoiceChannelId(n, e.id);
              return s.Z.getChannel(t);
            },
            [n, e.id],
          );
        if (
          (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) ||
          null == C
        )
          return null;
        let I = e.id === d.default.getId();
        if (!I && !g.Z.can(p.Plq.MOVE_MEMBERS, C)) return null;
        let b = t.filter((n) => {
          let { channel: t } = n;
          return (
            t.id !== C.id &&
            (I
              ? g.Z.can(p.Plq.CONNECT, t) && !(0, x.rY)(t, v.Z, f.Z)
              : g.Z.can(p.Plq.MOVE_MEMBERS, t) &&
                (g.Z.can(p.Plq.CONNECT, t) ||
                  h.BT({ permission: p.Plq.CONNECT, user: e, context: t })) &&
                !(0, x.rY)(t, v.Z, f.Z))
          );
        });
        return 0 === b.length
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "voice-move",
              label: P.intl.string(P.t.FAplmp),
              children: b.map((t) => {
                let { channel: i } = t;
                return (0, l.jsx)(
                  r.MenuItem,
                  {
                    id: i.id,
                    action: () => {
                      var t;
                      return (
                        (t = i),
                        void (e.id === d.default.getId()
                          ? u.default.selectVoiceChannel(t.id)
                          : a.Z.setChannel(n, e.id, t.id))
                      );
                    },
                    label: (0, o.F6)(i, M.default, m.Z),
                  },
                  i.id,
                );
              }),
            });
      }
    },
    520063: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        u = t(616780),
        o = t(438536),
        d = t(946273),
        s = t(346479),
        c = t(665906),
        Z = t(592125),
        f = t(430824),
        g = t(496675),
        m = t(594174),
        M = t(981631),
        v = t(388032);
      function x(e, n, x) {
        let h = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
        (0, u.$)(h), (0, r.e7)([g.Z], () => g.Z.getGuildVersion(n), [n]);
        let p = (0, r.e7)([Z.Z], () => Z.Z.getChannel(x)),
          P = (0, r.e7)([f.Z], () => f.Z.getGuild(n), [n]),
          C = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
          I = (0, o.Z)(p, "Context Menu"),
          b = (0, c.Xb)(p);
        if ((null == C ? void 0 : C.id) === e.id) return [I];
        if (null == P || null == p || null == C) return [];
        let E = b || (p.ownerId === C.id && p.type === M.d4z.PRIVATE_THREAD);
        return [
          E
            ? (0, l.jsx)(a.MenuItem, {
                id: "remove",
                label: p.isForumPost()
                  ? v.intl.formatToPlainString(v.t.v2KNNz, { user: e.username })
                  : v.intl.formatToPlainString(v.t["27xWaW"], {
                      user: e.username,
                    }),
                color: "danger",
                action: () => s.Z.removeMember(p, e.id, "Context Menu"),
              })
            : null,
          (0, d.BK)(e, P)
            ? (0, l.jsx)(a.MenuItem, {
                id: "kick",
                label: E
                  ? v.intl.formatToPlainString(v.t["1Ie87u"], {
                      user: e.username,
                    })
                  : v.intl.formatToPlainString(v.t["9l/iTU"], {
                      user: e.username,
                    }),
                color: "danger",
                action: () =>
                  (0, a.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("5454")
                      .then(t.bind(t, 854360));
                    return (t) =>
                      (0, l.jsx)(n, { ...t, guildId: P.id, user: e });
                  }),
              })
            : null,
          (0, d.mm)(e, P)
            ? (0, l.jsx)(a.MenuItem, {
                id: "ban",
                label: E
                  ? v.intl.formatToPlainString(v.t.i62APT, { user: e.username })
                  : v.intl.formatToPlainString(v.t.WnpUBg, {
                      user: e.username,
                    }),
                color: "danger",
                action: () =>
                  (0, a.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("43350")
                      .then(t.bind(t, 98746));
                    return (t) =>
                      (0, l.jsx)(n, { ...t, guildId: P.id, user: e });
                  }),
              })
            : null,
        ];
      }
    },
    931617: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(866442),
        r = t(442837),
        a = t(481060),
        u = t(607070),
        o = t(605436),
        d = t(910693),
        s = t(434404),
        c = t(271383),
        Z = t(430824),
        f = t(496675),
        g = t(823379),
        m = t(981631),
        M = t(388032),
        v = t(849324);
      function x(e, n) {
        var t, r;
        return (0, l.jsxs)("div", {
          className: v.roleRow,
          children: [
            "dot" === n
              ? (0, l.jsx)(a.RoleDot, {
                  className: v.roleDot,
                  color:
                    null !== (t = e.colorString) && void 0 !== t
                      ? t
                      : (0, i.Rf)(m.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, l.jsx)(a.RoleCircle, {
                  className: v.roleDot,
                  color:
                    null !== (r = e.colorString) && void 0 !== r
                      ? r
                      : (0, i.Rf)(m.p6O),
                }),
            (0, l.jsx)("div", { children: e.name }),
          ],
        });
      }
      function h(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          v = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          h = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
          p = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
          P = (0, r.e7)([u.Z], () => u.Z.roleStyle),
          C = (0, d.sE)(n, { location: i, targetUserId: e }),
          {
            userRoles: I,
            isGuildMember: b,
            canManageRoles: E,
          } = (0, r.cj)(
            [c.ZP, f.Z],
            () => {
              let t = c.ZP.getMember(n, e);
              return {
                userRoles: null != t ? t.roles : [],
                isGuildMember: null != t,
                canManageRoles: null != h && f.Z.can(m.Plq.MANAGE_ROLES, h),
              };
            },
            [e, n, h],
          );
        if (__OVERLAY__ || null == I || null == h || !b) return null;
        let j = f.Z.getHighestRole(h),
          T = Object.values(p).filter((e) => !(0, o.pM)(h.id, e.id)),
          O =
            E && !v
              ? T.map((t) => {
                  let i = t.managed || !f.Z.isRoleHigher(h, j, t),
                    r = -1 !== I.indexOf(t.id);
                  return i && !r
                    ? null
                    : (0, l.jsx)(
                        a.MenuCheckboxItem,
                        {
                          id: t.id,
                          label: () => x(t, P),
                          disabled: i,
                          action: () => {
                            var l;
                            return (
                              (l = t),
                              void (I.includes(l.id)
                                ? (s.Z.updateMemberRoles(
                                    n,
                                    e,
                                    I.filter((e) => e !== l.id),
                                    [],
                                    [l.id],
                                  ),
                                  C(d.jQ.REMOVE_ROLE))
                                : (s.Z.updateMemberRoles(
                                    n,
                                    e,
                                    I.concat([l.id]),
                                    [l.id],
                                    [],
                                  ),
                                  C(d.jQ.ADD_ROLE)))
                            );
                          },
                          checked: r,
                        },
                        t.id,
                      );
                })
              : T.filter((e) => -1 !== I.indexOf(e.id)).map((e) =>
                  (0, o.pM)(h.id, e.id)
                    ? null
                    : (0, l.jsx)(
                        a.MenuItem,
                        { id: e.id, label: () => x(e, P) },
                        e.id,
                      ),
                );
        return 0 === O.filter(g.lm).length
          ? null
          : t
            ? O
            : (0, l.jsx)(a.MenuItem, {
                id: "roles",
                label: M.intl.formatToPlainString(M.t.PCs0oq, {
                  numRoles: O.length,
                }),
                children: O,
              });
      }
    },
    332031: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(655922),
        u = t(158776),
        o = t(981631),
        d = t(388032);
      function s(e) {
        let n = (0, i.e7)(
          [u.Z],
          () =>
            (0, a.Z)(u.Z.findActivity(e, (e) => e.type === o.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "watch-stream",
              label: d.intl.string(d.t["7Xq/nZ"]),
              action: () => window.open(n, "_blank"),
            });
      }
    },
    497523: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    849324: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=d7f45fc6f031d24e9bd3.js.map
