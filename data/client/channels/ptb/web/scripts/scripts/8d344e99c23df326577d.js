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
        u = t(58540),
        d = t(40851),
        o = t(300284),
        s = t(484459),
        c = t(314897),
        Z = t(271383),
        f = t(430824),
        g = t(496675),
        m = t(594174),
        M = t(981631),
        v = t(388032),
        x = t(745974);
      function h(e) {
        let {
            guildId: n,
            userId: h,
            analyticsLocation: P,
            analyticsLocations: I,
            context: p,
            icon: b,
          } = e,
          C = f.Z.getGuild(n),
          E = c.default.getId(),
          j = (0, r.e7)([m.default], () => m.default.getUser(h)),
          O = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, h), [n, h]);
        (0, r.e7)([g.Z], () => g.Z.getGuildVersion(n), [n]);
        let N = i.useMemo(() => ({ [n]: [h] }), [n, h]);
        (0, u.$)(N);
        let T = p === M.IlC.POPOUT,
          _ = (0, o.Z)({ guild: C, analyticsLocation: P }),
          A = (0, d.Aq)();
        if (null == C || T) return null;
        let U =
            E === h &&
            (g.Z.can(M.Plq.CHANGE_NICKNAME, C) ||
              g.Z.can(M.Plq.MANAGE_NICKNAMES, C)),
          R = E === h,
          S = g.Z.canManageUser(M.Plq.MANAGE_NICKNAMES, h, C);
        if (!(U || S || R) || null == j || O) return null;
        let L = C.hasFeature(M.oNc.HUB)
            ? v.intl.string(v.t["+MWrWl"])
            : v.intl.string(v.t["PKQB/P"]),
          k = R ? L : v.intl.string(v.t.dilOFx);
        return (0, l.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, l.jsx)("div", {
            className: x.labelWrapper,
            children: (0, l.jsx)("span", { className: x.label, children: k }),
          }),
          icon: b,
          action: () => {
            R
              ? ((0, s.Z)(j.id, j.getAvatarURL(n, 80), { guildId: n }),
                _(),
                A.dispatch(M.CkL.POPOUT_CLOSE),
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
                      analyticsSource: P,
                      analyticsLocations: I,
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
        d = t(979651),
        o = t(471253),
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
            [d.Z],
            () => (null != m ? d.Z.getVoiceStateForChannel(m, e.id) : null),
            [m, e.id],
          ),
          h =
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          P = (0, Z.Z)(),
          I = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [
            m,
            e.id,
          ]),
          p = (0, s.B)(m);
        if (null == t || null == v || null == x || I.speaker) return null;
        let b = () => {
          h ? (0, o.RK)(t, !1) : (0, o._0)(t, e.id);
        };
        return p
          ? (0, l.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: h
                ? g.intl.string(g.t["W6c/VV"])
                : g.intl.string(g.t.VUCWcH),
              action: b,
            })
          : P && h
            ? (0, l.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: g.intl.string(g.t["W6c/VV"]),
                action: b,
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
        d = t(911969),
        o = t(947440),
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
        P = t(710631),
        I = t(297047),
        p = t(88966),
        b = t(712301),
        C = t(520063),
        E = t(725119),
        j = t(931617),
        O = t(332031),
        N = t(981631),
        T = t(388032);
      n.default = (0, u.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channel: a,
                context: u,
                onSelect: s,
                onHeightUpdate: _,
              } = e,
              A = (0, E.Z)({ userId: n.id, guildId: t, channelId: a.id }),
              U = (0, I.Z)(n, t, u),
              R = (0, p.Z)(n.id, u),
              S = (0, O.Z)(n.id),
              L = (0, h.Z)({ user: n, context: u }),
              k = (0, M.Z)({
                user: n,
                guildId: t,
                channelId: a.id,
                context: u,
              }),
              y = (0, m.Z)({ user: n }),
              G = (0, Z.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: {
                  page: N.ZY5.GUILD_CHANNEL,
                  section: N.jXE.CHAT_USERNAME,
                  object: N.qAy.CONTEXT_MENU_ITEM,
                },
                context: u,
              }),
              q = (0, P.Z)({ user: n, guildId: t }),
              w = (0, o.Z)(null, n),
              V = (0, g.Z)(n),
              D = (0, x.Z)({ user: n }),
              F = (0, C.Z)(n, t, a.id),
              W = (0, j.Z)(n.id, t),
              B = (0, b.Z)(n, t),
              K = (0, c.Z)({ id: n.id, label: T.intl.string(T.t["/AXYnJ"]) }),
              H = (0, f.Z)(n),
              z = (0, v.Z)({
                commandType: d.yU.USER,
                commandTargetId: n.id,
                channel: a,
                guildId: t,
                onHeightUpdate: _,
              }),
              X = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": T.intl.string(T.t.liqwPD),
              onSelect: s,
              children: [
                !X &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(i.MenuGroup, { children: H }),
                      (0, l.jsxs)(i.MenuGroup, {
                        children: [A, U, R, L, k, y, S],
                      }),
                      (0, l.jsx)(i.MenuGroup, { children: w }),
                      (0, l.jsxs)(i.MenuGroup, { children: [G, z, q, V, D] }),
                      (0, l.jsx)(i.MenuGroup, { children: F }),
                      (0, l.jsxs)(i.MenuGroup, { children: [W, B] }),
                    ],
                  }),
                (0, l.jsx)(i.MenuGroup, { children: K }),
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
        d = t(699516),
        o = t(594174),
        s = t(388032);
      function c(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ContextMenu",
          { id: t, username: c, bot: Z } = e,
          f = (0, r.e7)(
            [o.default],
            () => {
              var e;
              return (
                (null === (e = o.default.getCurrentUser()) || void 0 === e
                  ? void 0
                  : e.id) === t
              );
            },
            [t],
          ),
          [g, m] = (0, r.Wu)([d.Z], () => [d.Z.isFriend(t), d.Z.isBlocked(t)], [
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
          return d;
        },
      }),
        t(47120);
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(699516),
        u = t(388032);
      function d(e) {
        let { user: n, onAction: d } = e,
          o = n.id,
          [s, c] = (0, i.Wu)(
            [a.Z],
            () => {
              var e;
              return [
                a.Z.isFriend(o),
                null !== (e = a.Z.getNickname(o)) && void 0 !== e ? e : null,
              ];
            },
            [o],
          );
        if (!s) return null;
        let Z =
          null == c ? u.intl.string(u.t.BGYkaG) : u.intl.string(u.t["8pOYUF"]);
        return (0, l.jsx)(r.MenuItem, {
          id: null == c ? "add-friend-nickname" : "edit-friend-nickname",
          label: Z,
          action: () => {
            null == d || d(),
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
        d = t(171368),
        o = t(314897),
        s = t(246946),
        c = t(626135),
        Z = t(981631),
        f = t(228168),
        g = t(388032);
      function m(e) {
        let { user: n, guildId: t, channelId: m, context: M } = e,
          { id: v } = n,
          { loading: x, note: h } = (0, u.Z)(v),
          P = !x && null != h && h.length > 0,
          I = M === Z.IlC.POPOUT,
          p = i.useContext(c.AnalyticsContext),
          { analyticsLocations: b } = (0, a.ZP)();
        return v === o.default.getId() || s.Z.hidePersonalInformation || I
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "note",
              label: x
                ? g.intl.string(g.t["WLKx//"])
                : P
                  ? g.intl.string(g.t.sHHsOD)
                  : g.intl.string(g.t.Dglxra),
              action: () => {
                (0, d.openUserProfileModal)({
                  userId: n.id,
                  section: f.oh.USER_INFO,
                  subsection: f.Tb.NOTE,
                  guildId: t,
                  channelId: m,
                  sourceAnalyticsLocations: b,
                  analyticsLocation: p.location,
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
        d = t(740492),
        o = t(314897),
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
          P = (0, u.Aq)(),
          I = (0, i.e7)([o.default], () => o.default.getId() === n.id),
          p = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          b = (0, i.e7)(
            [Z.Z, s.Z],
            () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (I || m === f.IlC.POPOUT || b || n.bot || n.isProvisional)
          return null;
        let C = () => {
            null == h || h(),
              a.Z.openPrivateChannel(n.id, !0, v),
              P.dispatch(f.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          E = !d.ZP.disableCallUserConfirmationPrompt;
        return (0, l.jsx)(r.MenuItem, {
          id: null != x ? x : "call",
          label: null != M ? M : g.intl.string(g.t.JJogjo),
          action: E
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, l.jsx)(e, { onSubmit: C, ...n });
                });
              }
            : C,
          disabled: p,
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
        d = t(314897),
        o = t(981631),
        s = t(388032);
      function c(e, n) {
        let t = (0, u.Aq)();
        return (0, i.e7)([d.default], () => d.default.getId() === e) ||
          n === o.IlC.POPOUT
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "message-user",
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                a.Z.openPrivateChannel(e),
                  t.dispatch(o.CkL.POPOUT_CLOSE),
                  (0, r.closeAllModals)();
              },
            });
      }
    },
    712301: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        r = t(481060),
        a = t(749210),
        u = t(287734),
        d = t(933557),
        o = t(314897),
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
        P = t(981631),
        I = t(388032);
      function p(e, n) {
        let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
          p = (0, i.e7)(
            [v.Z, s.Z],
            () => {
              let t = v.Z.getUserVoiceChannelId(n, e.id);
              return s.Z.getChannel(t);
            },
            [n, e.id],
          );
        if (
          (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) ||
          null == p
        )
          return null;
        let b = e.id === o.default.getId();
        if (!b && !g.Z.can(P.Plq.MOVE_MEMBERS, p)) return null;
        let C = t.filter((n) => {
          let { channel: t } = n;
          return (
            t.id !== p.id &&
            (b
              ? g.Z.can(P.Plq.CONNECT, t) && !(0, x.rY)(t, v.Z, f.Z)
              : g.Z.can(P.Plq.MOVE_MEMBERS, t) &&
                (g.Z.can(P.Plq.CONNECT, t) ||
                  h.BT({ permission: P.Plq.CONNECT, user: e, context: t })) &&
                !(0, x.rY)(t, v.Z, f.Z))
          );
        });
        return 0 === C.length
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "voice-move",
              label: I.intl.string(I.t.FAplmp),
              children: C.map((t) => {
                let { channel: i } = t;
                return (0, l.jsx)(
                  r.MenuItem,
                  {
                    id: i.id,
                    action: () => {
                      var t;
                      return (
                        (t = i),
                        void (e.id === o.default.getId()
                          ? u.default.selectVoiceChannel(t.id)
                          : a.Z.setChannel(n, e.id, t.id))
                      );
                    },
                    label: (0, d.F6)(i, M.default, m.Z),
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
          return v;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        u = t(58540),
        d = t(438536),
        o = t(346479),
        s = t(665906),
        c = t(592125),
        Z = t(430824),
        f = t(496675),
        g = t(594174),
        m = t(981631),
        M = t(388032);
      function v(e, n, v) {
        let x = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
        (0, u.$)(x), (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
        let h = (0, r.e7)([c.Z], () => c.Z.getChannel(v)),
          P = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
          I = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          p = (0, d.Z)(h, "Context Menu"),
          b = (0, s.Xb)(h);
        if ((null == I ? void 0 : I.id) === e.id) return [p];
        if (null == P || null == h || null == I) return [];
        let C = b || (h.ownerId === I.id && h.type === m.d4z.PRIVATE_THREAD);
        return [
          C
            ? (0, l.jsx)(a.MenuItem, {
                id: "remove",
                label: h.isForumPost()
                  ? M.intl.formatToPlainString(M.t.v2KNNz, { user: e.username })
                  : M.intl.formatToPlainString(M.t["27xWaW"], {
                      user: e.username,
                    }),
                color: "danger",
                action: () => o.Z.removeMember(h, e.id, "Context Menu"),
              })
            : null,
          f.Z.canManageUser(m.Plq.KICK_MEMBERS, e, P)
            ? (0, l.jsx)(a.MenuItem, {
                id: "kick",
                label: C
                  ? M.intl.formatToPlainString(M.t["1Ie87u"], {
                      user: e.username,
                    })
                  : M.intl.formatToPlainString(M.t["9l/iTU"], {
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
          f.Z.canManageUser(m.Plq.BAN_MEMBERS, e, P)
            ? (0, l.jsx)(a.MenuItem, {
                id: "ban",
                label: C
                  ? M.intl.formatToPlainString(M.t.i62APT, { user: e.username })
                  : M.intl.formatToPlainString(M.t.WnpUBg, {
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
        d = t(605436),
        o = t(910693),
        s = t(434404),
        c = t(271383),
        Z = t(430824),
        f = t(496675),
        g = t(823379),
        m = t(981631),
        M = t(388032),
        v = t(587525);
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
          P = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
          I = (0, r.e7)([u.Z], () => u.Z.roleStyle),
          p = (0, o.sE)(n, { location: i, targetUserId: e }),
          {
            userRoles: b,
            isGuildMember: C,
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
        if (__OVERLAY__ || null == b || null == h || !C) return null;
        let j = f.Z.getHighestRole(h),
          O = Object.values(P).filter((e) => !(0, d.pM)(h.id, e.id)),
          N =
            E && !v
              ? O.map((t) => {
                  let i = t.managed || !f.Z.isRoleHigher(h, j, t),
                    r = -1 !== b.indexOf(t.id);
                  return i && !r
                    ? null
                    : (0, l.jsx)(
                        a.MenuCheckboxItem,
                        {
                          id: t.id,
                          label: () => x(t, I),
                          disabled: i,
                          action: () => {
                            var l;
                            return (
                              (l = t),
                              void (b.includes(l.id)
                                ? (s.Z.updateMemberRoles(
                                    n,
                                    e,
                                    b.filter((e) => e !== l.id),
                                    [],
                                    [l.id],
                                  ),
                                  p(o.jQ.REMOVE_ROLE))
                                : (s.Z.updateMemberRoles(
                                    n,
                                    e,
                                    b.concat([l.id]),
                                    [l.id],
                                    [],
                                  ),
                                  p(o.jQ.ADD_ROLE)))
                            );
                          },
                          checked: r,
                        },
                        t.id,
                      );
                })
              : O.filter((e) => -1 !== b.indexOf(e.id)).map((e) =>
                  (0, d.pM)(h.id, e.id)
                    ? null
                    : (0, l.jsx)(
                        a.MenuItem,
                        { id: e.id, label: () => x(e, I) },
                        e.id,
                      ),
                );
        return 0 === N.filter(g.lm).length
          ? null
          : t
            ? N
            : (0, l.jsx)(a.MenuItem, {
                id: "roles",
                label: M.intl.formatToPlainString(M.t.PCs0oq, {
                  numRoles: N.length,
                }),
                children: N,
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
        d = t(981631),
        o = t(388032);
      function s(e) {
        let n = (0, i.e7)(
          [u.Z],
          () =>
            (0, a.Z)(u.Z.findActivity(e, (e) => e.type === d.IIU.STREAMING)),
          [e],
        );
        return null == n
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "watch-stream",
              label: o.intl.string(o.t["7Xq/nZ"]),
              action: () => window.open(n, "_blank"),
            });
      }
    },
    745974: function (e, n, t) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    587525: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=8d344e99c23df326577d.js.map
