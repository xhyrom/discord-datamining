"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70675"],
  {
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
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
        m = t(496675),
        g = t(594174),
        M = t(981631),
        x = t(388032),
        h = t(497523);
      function v(e) {
        let {
            guildId: n,
            userId: v,
            analyticsLocation: p,
            analyticsLocations: b,
            context: I,
            icon: C,
          } = e,
          P = f.Z.getGuild(n),
          E = c.default.getId(),
          j = (0, r.e7)([g.default], () => g.default.getUser(v)),
          T = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, v), [n, v]);
        (0, r.e7)([m.Z], () => m.Z.getGuildVersion(n), [n]);
        let N = i.useMemo(() => ({ [n]: [v] }), [n, v]);
        (0, u.$)(N);
        let O = I === M.IlC.POPOUT,
          U = (0, d.Z)({ guild: P, analyticsLocation: p }),
          A = (0, o.Aq)();
        if (null == P || O) return null;
        let _ =
            E === v &&
            (m.Z.can(M.Plq.CHANGE_NICKNAME, P) ||
              m.Z.can(M.Plq.MANAGE_NICKNAMES, P)),
          R = E === v,
          S = m.Z.canManageUser(M.Plq.MANAGE_NICKNAMES, v, P);
        if (!(_ || S || R) || null == j || T) return null;
        let L = P.hasFeature(M.oNc.HUB)
            ? x.intl.string(x.t["+MWrWl"])
            : x.intl.string(x.t["PKQB/P"]),
          k = R ? L : x.intl.string(x.t.dilOFx);
        return (0, l.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, l.jsx)("div", {
            className: h.labelWrapper,
            children: (0, l.jsx)("span", { className: h.label, children: k }),
          }),
          icon: C,
          action: () => {
            R
              ? ((0, s.Z)(j.id, j.getAvatarURL(n, 80), { guildId: n }),
                U(),
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
                      analyticsSource: p,
                      analyticsLocations: b,
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
          return g;
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
        m = t(388032);
      function g(e) {
        var n;
        let t = (0, f.Z)(),
          g = null == t ? void 0 : t.id,
          M = null == t ? void 0 : t.guild_id,
          x = (0, i.e7)([a.Z], () => a.Z.getGuild(M), [M]),
          h = (0, i.e7)(
            [o.Z],
            () => (null != g ? o.Z.getVoiceStateForChannel(g, e.id) : null),
            [g, e.id],
          ),
          v =
            (null === (n = u.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.id) === e.id,
          p = (0, Z.Z)(),
          b = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, g), [
            g,
            e.id,
          ]),
          I = (0, s.B)(g);
        if (null == t || null == x || null == h || b.speaker) return null;
        let C = () => {
          v ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id);
        };
        return I
          ? (0, l.jsx)(r.MenuItem, {
              id: "invite-speaker",
              label: v
                ? m.intl.string(m.t["W6c/VV"])
                : m.intl.string(m.t.VUCWcH),
              action: C,
            })
          : p && v
            ? (0, l.jsx)(r.MenuItem, {
                id: "invite-speaker",
                label: m.intl.string(m.t["W6c/VV"]),
                action: C,
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
        m = t(777658),
        g = t(858488),
        M = t(44652),
        x = t(185457),
        h = t(570870),
        v = t(389052),
        p = t(24311),
        b = t(158508),
        I = t(710631),
        C = t(297047),
        P = t(88966),
        E = t(712301),
        j = t(47091),
        T = t(520063),
        N = t(37258),
        O = t(931617),
        U = t(332031),
        A = t(981631),
        _ = t(388032);
      n.default = (0, u.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: t,
                channel: a,
                context: u,
                onSelect: s,
                onHeightUpdate: R,
              } = e,
              S = a.id,
              L = (0, N.Z)({ userId: n.id, guildId: t, channelId: S }),
              k = (0, C.Z)(n, t, u),
              G = (0, P.Z)(n.id, u),
              y = (0, U.Z)(n.id),
              F = (0, p.Z)({ user: n, context: u }),
              q = (0, x.Z)({ user: n, guildId: t, channelId: S, context: u }),
              w = (0, g.Z)({ user: n }),
              W = (0, Z.Z)({
                guildId: t,
                userId: n.id,
                analyticsLocation: {
                  page: A.ZY5.GUILD_CHANNEL,
                  section: A.jXE.CHAT_USERNAME,
                  object: A.qAy.CONTEXT_MENU_ITEM,
                },
                context: u,
              }),
              D = (0, I.Z)({ user: n, guildId: t }),
              V = (0, d.Z)(null, n),
              K = (0, m.Z)(n),
              z = (0, M.Z)({ user: n }),
              B = (0, j.Z)({ user: n }),
              H = (0, v.Z)({
                user: n,
                guildId: t,
                channelId: S,
                location: "ThreadUserContextMenu",
              }),
              X = (0, b.Z)({
                user: n,
                guildId: t,
                channelId: S,
                location: "ThreadUserContextMenu",
              }),
              Y = (0, T.Z)(n, t, S),
              J = (0, O.Z)(n.id, t),
              Q = (0, E.Z)(n, t),
              $ = (0, c.Z)({ id: n.id, label: _.intl.string(_.t["/AXYnJ"]) }),
              ee = (0, f.Z)(n),
              en = (0, h.Z)({
                commandType: o.yU.USER,
                commandTargetId: n.id,
                channel: a,
                guildId: t,
                onHeightUpdate: R,
              }),
              et = n.isNonUserBot();
            return (0, l.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": _.intl.string(_.t.liqwPD),
              onSelect: s,
              children: [
                !et &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(i.MenuGroup, { children: ee }),
                      (0, l.jsxs)(i.MenuGroup, {
                        children: [L, k, G, F, q, w, y],
                      }),
                      (0, l.jsx)(i.MenuGroup, { children: V }),
                      (0, l.jsxs)(i.MenuGroup, {
                        children: [W, en, D, K, z, B, X, H],
                      }),
                      (0, l.jsx)(i.MenuGroup, { children: Y }),
                      (0, l.jsxs)(i.MenuGroup, { children: [J, Q] }),
                    ],
                  }),
                (0, l.jsx)(i.MenuGroup, { children: $ }),
              ],
            });
          },
          { object: A.qAy.CONTEXT_MENU },
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
          [m, g] = (0, r.Wu)([o.Z], () => [o.Z.isFriend(t), o.Z.isBlocked(t)], [
            t,
          ]),
          [M, x] = i.useState(!1);
        return Z || f
          ? null
          : m
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
                        u.Z.removeFriend(t, { location: n }), x(!1);
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
                    x(!0));
                },
                disabled: g || (M && !m),
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
    44652: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(192379),
        i = t(442837),
        r = t(91896),
        a = t(298213),
        u = t(749302),
        o = t(981631),
        d = t(388032);
      function s(e) {
        let { user: n } = e,
          t = (0, i.Wu)([r.Z], () =>
            r.Z.getGameRelationshipsForUser(n.id, o.OGo.PENDING_INCOMING),
          ),
          s = l.useCallback(
            (e) => {
              a.Z.acceptFriendRequest({
                userId: n.id,
                applicationId: e.id,
                location: "Context Menu",
              });
            },
            [n.id],
          );
        return (0, u.Z)({
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
        m = t(388032);
      function g(e) {
        let { user: n, guildId: t, channelId: g, context: M } = e,
          { id: x } = n,
          { loading: h, note: v } = (0, u.Z)(x),
          p = !h && null != v && v.length > 0,
          b = M === Z.IlC.POPOUT,
          I = i.useContext(c.AnalyticsContext),
          { analyticsLocations: C } = (0, a.ZP)();
        return x === d.default.getId() || s.Z.hidePersonalInformation || b
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "note",
              label: h
                ? m.intl.string(m.t["WLKx//"])
                : p
                  ? m.intl.string(m.t.sHHsOD)
                  : m.intl.string(m.t.Dglxra),
              action: () => {
                (0, o.openUserProfileModal)({
                  userId: n.id,
                  section: f.oh.USER_INFO,
                  subsection: f.Tb.NOTE,
                  guildId: t,
                  channelId: g,
                  sourceAnalyticsLocations: C,
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
        m = t(388032);
      function g(e) {
        let {
            user: n,
            context: g,
            label: M,
            joinCallVideo: x,
            id: h,
            onCall: v,
          } = e,
          p = (0, u.Aq)(),
          b = (0, i.e7)([d.default], () => d.default.getId() === n.id),
          I = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
          C = (0, i.e7)(
            [Z.Z, s.Z],
            () => Z.Z.getVoiceChannelId() === s.Z.getDMFromUserId(n.id),
          );
        if (b || g === f.IlC.POPOUT || C || n.bot || n.isProvisional)
          return null;
        let P = () => {
            null == v || v(),
              a.Z.openPrivateChannel(n.id, !0, x),
              p.dispatch(f.CkL.POPOUT_CLOSE),
              (0, r.closeAllModals)();
          },
          E = !o.ZP.disableCallUserConfirmationPrompt;
        return (0, l.jsx)(r.MenuItem, {
          id: null != h ? h : "call",
          label: null != M ? M : m.intl.string(m.t.JJogjo),
          action: E
            ? () => {
                (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("27157")
                    .then(t.bind(t, 736454));
                  return (n) => (0, l.jsx)(e, { onSubmit: P, ...n });
                });
              }
            : P,
          disabled: I,
        });
      }
    },
    749302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120),
        t(653041);
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        u = t(835473),
        o = t(925329),
        d = t(372460),
        s = t(594174),
        c = t(960897);
      let Z = [];
      function f(e) {
        let { application: n } = e;
        return (0, l.jsxs)("div", {
          className: c.subtext,
          children: [
            (0, l.jsx)(o.Z, { game: n, size: o.Z.Sizes.XXSMALL }),
            (0, l.jsx)("span", { children: n.name }),
          ],
        });
      }
      function m(e) {
        let {
            menuItemId: n,
            user: t,
            label: c,
            gameRelationships: m,
            onClick: g,
          } = e,
          { id: M, bot: x } = t,
          h = (0, r.e7)([s.default], () => {
            var e;
            return (
              (null === (e = s.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id) === M
            );
          }),
          v = (0, d.wn)({ location: "useAcceptGameFriendRequest" }),
          p = h || x || !v,
          b = p ? Z : m,
          [I, C] = i.useState(!1),
          P = i.useCallback(() => C(!0), []),
          E = i.useMemo(
            () =>
              b.map((e) => {
                let { applicationId: n } = e;
                return n;
              }),
            [b],
          ),
          j = (function (e, n) {
            let t = (0, u.Z)(e, n);
            return i.useMemo(() => {
              let e = new Map();
              return (
                t.forEach((n) => {
                  null != n && e.set(n.id, n);
                }),
                e
              );
            }, [t]);
          })(E, I || 1 === b.length);
        if (p || 0 === b.length) return null;
        if (1 === b.length) {
          let { applicationId: e } = b[0],
            t = j.get(e);
          return null == t
            ? null
            : (0, l.jsx)(a.MenuItem, {
                id: n,
                label: c,
                subtext: (0, l.jsx)(f, { application: t }),
                onFocus: P,
                action: () => g(t),
              });
        }
        let T = [];
        return (b.forEach((e) => {
          let { applicationId: n } = e,
            t = j.get(n);
          null != t &&
            T.push(
              (0, l.jsx)(
                a.MenuItem,
                {
                  id: n,
                  label: t.name,
                  icon: (0, l.jsx)(o.Z, { game: t, size: o.Z.Sizes.XXSMALL }),
                  action: () => g(t),
                },
                n,
              ),
            );
        }),
        0 === T.length)
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: n,
              label: c,
              onFocus: P,
              children: T,
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
          return I;
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
        m = t(496675),
        g = t(699516),
        M = t(594174),
        x = t(979651),
        h = t(934415),
        v = t(700785),
        p = t(981631),
        b = t(388032);
      function I(e, n) {
        let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
          I = (0, i.e7)(
            [x.Z, s.Z],
            () => {
              let t = x.Z.getUserVoiceChannelId(n, e.id);
              return s.Z.getChannel(t);
            },
            [n, e.id],
          );
        if (
          (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [n, e.id]) ||
          null == I
        )
          return null;
        let C = e.id === d.default.getId();
        if (!C && !m.Z.can(p.Plq.MOVE_MEMBERS, I)) return null;
        let P = t.filter((n) => {
          let { channel: t } = n;
          return (
            t.id !== I.id &&
            (C
              ? m.Z.can(p.Plq.CONNECT, t) && !(0, h.rY)(t, x.Z, f.Z)
              : m.Z.can(p.Plq.MOVE_MEMBERS, t) &&
                (m.Z.can(p.Plq.CONNECT, t) ||
                  v.BT({ permission: p.Plq.CONNECT, user: e, context: t })) &&
                !(0, h.rY)(t, x.Z, f.Z))
          );
        });
        return 0 === P.length
          ? null
          : (0, l.jsx)(r.MenuItem, {
              id: "voice-move",
              label: b.intl.string(b.t.FAplmp),
              children: P.map((t) => {
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
                    label: (0, o.F6)(i, M.default, g.Z),
                  },
                  i.id,
                );
              }),
            });
      }
    },
    47091: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        u = t(91896),
        o = t(298213),
        d = t(51144),
        s = t(749302),
        c = t(388032);
      function Z(e) {
        let { user: n } = e,
          Z = (0, r.Wu)([u.Z], () => u.Z.getGameFriendsForUser(n.id)),
          f = d.ZP.useName(n),
          m = i.useCallback(
            (e) => {
              let { id: i, name: r } = e;
              (0, a.openModalLazy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(
                  t.bind(t, 481060),
                );
                return (t) =>
                  (0, l.jsx)(e, {
                    header: c.intl.formatToPlainString(c.t["GOFk9/"], {
                      name: f,
                    }),
                    confirmText: c.intl.string(c.t["cY+Ooa"]),
                    cancelText: c.intl.string(c.t["ETE/oK"]),
                    onConfirm: () =>
                      o.Z.removeFriend({
                        userId: n.id,
                        applicationId: i,
                        location: "Context Menu",
                      }),
                    ...t,
                    children: (0, l.jsx)(a.Text, {
                      variant: "text-md/normal",
                      children: c.intl.format(c.t.dsU5bm, {
                        name: f,
                        gameName: r,
                      }),
                    }),
                  });
              });
            },
            [f, n],
          );
        return (0, s.Z)({
          user: n,
          gameRelationships: Z,
          menuItemId: "remove-game-friend",
          label: c.intl.string(c.t["RLcE6+"]),
          onClick: m,
        });
      }
    },
    520063: function (e, n, t) {
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
        o = t(438536),
        d = t(946273),
        s = t(346479),
        c = t(665906),
        Z = t(592125),
        f = t(430824),
        m = t(496675),
        g = t(594174),
        M = t(981631),
        x = t(388032);
      function h(e, n, h) {
        let v = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
        (0, u.$)(v), (0, r.e7)([m.Z], () => m.Z.getGuildVersion(n), [n]);
        let p = (0, r.e7)([Z.Z], () => Z.Z.getChannel(h)),
          b = (0, r.e7)([f.Z], () => f.Z.getGuild(n), [n]),
          I = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
          C = (0, o.Z)(p, "Context Menu"),
          P = (0, c.Xb)(p);
        if ((null == I ? void 0 : I.id) === e.id) return [C];
        if (null == b || null == p || null == I) return [];
        let E = P || (p.ownerId === I.id && p.type === M.d4z.PRIVATE_THREAD);
        return [
          E
            ? (0, l.jsx)(a.MenuItem, {
                id: "remove",
                label: p.isForumPost()
                  ? x.intl.formatToPlainString(x.t.v2KNNz, { user: e.username })
                  : x.intl.formatToPlainString(x.t["27xWaW"], {
                      user: e.username,
                    }),
                color: "danger",
                action: () => s.Z.removeMember(p, e.id, "Context Menu"),
              })
            : null,
          (0, d.BK)(e, b)
            ? (0, l.jsx)(a.MenuItem, {
                id: "kick",
                label: E
                  ? x.intl.formatToPlainString(x.t["1Ie87u"], {
                      user: e.username,
                    })
                  : x.intl.formatToPlainString(x.t["9l/iTU"], {
                      user: e.username,
                    }),
                color: "danger",
                action: () =>
                  (0, a.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("5454")
                      .then(t.bind(t, 854360));
                    return (t) =>
                      (0, l.jsx)(n, { ...t, guildId: b.id, user: e });
                  }),
              })
            : null,
          (0, d.mm)(e, b)
            ? (0, l.jsx)(a.MenuItem, {
                id: "ban",
                label: E
                  ? x.intl.formatToPlainString(x.t.i62APT, { user: e.username })
                  : x.intl.formatToPlainString(x.t.WnpUBg, {
                      user: e.username,
                    }),
                color: "danger",
                action: () =>
                  (0, a.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("43350")
                      .then(t.bind(t, 98746));
                    return (t) =>
                      (0, l.jsx)(n, { ...t, guildId: b.id, user: e });
                  }),
              })
            : null,
        ];
      }
    },
    931617: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
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
        m = t(823379),
        g = t(981631),
        M = t(388032),
        x = t(849324);
      function h(e, n) {
        var t, r;
        return (0, l.jsxs)("div", {
          className: x.roleRow,
          children: [
            "dot" === n
              ? (0, l.jsx)(a.RoleDot, {
                  className: x.roleDot,
                  color:
                    null !== (t = e.colorString) && void 0 !== t
                      ? t
                      : (0, i.Rf)(g.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, l.jsx)(a.RoleCircle, {
                  className: x.roleDot,
                  color:
                    null !== (r = e.colorString) && void 0 !== r
                      ? r
                      : (0, i.Rf)(g.p6O),
                }),
            (0, l.jsx)("div", { children: e.name }),
          ],
        });
      }
      function v(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          x = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          v = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
          p = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
          b = (0, r.e7)([u.Z], () => u.Z.roleStyle),
          I = (0, d.sE)(n, { location: i, targetUserId: e }),
          {
            userRoles: C,
            isGuildMember: P,
            canManageRoles: E,
          } = (0, r.cj)(
            [c.ZP, f.Z],
            () => {
              let t = c.ZP.getMember(n, e);
              return {
                userRoles: null != t ? t.roles : [],
                isGuildMember: null != t,
                canManageRoles: null != v && f.Z.can(g.Plq.MANAGE_ROLES, v),
              };
            },
            [e, n, v],
          );
        if (__OVERLAY__ || null == C || null == v || !P) return null;
        let j = f.Z.getHighestRole(v),
          T = Object.values(p).filter((e) => !(0, o.pM)(v.id, e.id)),
          N =
            E && !x
              ? T.map((t) => {
                  let i = t.managed || !f.Z.isRoleHigher(v, j, t),
                    r = -1 !== C.indexOf(t.id);
                  return i && !r
                    ? null
                    : (0, l.jsx)(
                        a.MenuCheckboxItem,
                        {
                          id: t.id,
                          label: () => h(t, b),
                          disabled: i,
                          action: () => {
                            var l;
                            return (
                              (l = t),
                              void (C.includes(l.id)
                                ? (s.Z.updateMemberRoles(
                                    n,
                                    e,
                                    C.filter((e) => e !== l.id),
                                    [],
                                    [l.id],
                                  ),
                                  I(d.jQ.REMOVE_ROLE))
                                : (s.Z.updateMemberRoles(
                                    n,
                                    e,
                                    C.concat([l.id]),
                                    [l.id],
                                    [],
                                  ),
                                  I(d.jQ.ADD_ROLE)))
                            );
                          },
                          checked: r,
                        },
                        t.id,
                      );
                })
              : T.filter((e) => -1 !== C.indexOf(e.id)).map((e) =>
                  (0, o.pM)(v.id, e.id)
                    ? null
                    : (0, l.jsx)(
                        a.MenuItem,
                        { id: e.id, label: () => h(e, b) },
                        e.id,
                      ),
                );
        return 0 === N.filter(m.lm).length
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
    960897: function (e, n, t) {
      e.exports = { subtext: "subtext_ffa9b9" };
    },
    849324: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=a694bdad187957c3e3e2.js.map
