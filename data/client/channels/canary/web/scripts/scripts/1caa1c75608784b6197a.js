"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33685"],
  {
    883385: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(735250);
      t(470079);
      var u = t(410575);
      function a(e, n) {
        return function (t) {
          return (0, l.jsx)(u.Z, {
            page: n.page,
            section: n.section,
            object: n.object,
            objectType: n.objectType,
            children: (0, l.jsx)(e, { ...t }),
          });
        };
      }
    },
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(735250);
      t(470079);
      var u = t(906732);
      function a(e, n) {
        return function (t) {
          let { analyticsLocations: a } = (0, u.ZP)(n);
          return (0, l.jsx)(u.Gt, {
            value: a,
            children: (0, l.jsx)(e, { ...t }),
          });
        };
      }
    },
    976192: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var l = t(735250),
        u = t(470079),
        a = t(442837),
        r = t(481060),
        i = t(58540),
        o = t(40851),
        c = t(300284),
        s = t(484459),
        d = t(314897),
        _ = t(271383),
        E = t(430824),
        M = t(496675),
        f = t(594174),
        Z = t(981631),
        A = t(689938),
        T = t(745974);
      function I(e) {
        let {
            guildId: n,
            userId: I,
            analyticsLocation: N,
            analyticsLocations: C,
            context: O,
            icon: g,
          } = e,
          L = E.Z.getGuild(n),
          U = d.default.getId(),
          p = (0, a.e7)([f.default], () => f.default.getUser(I)),
          S = (0, a.e7)([_.ZP], () => _.ZP.isGuestOrLurker(n, I), [n, I]);
        (0, a.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
        let D = u.useMemo(() => ({ [n]: [I] }), [n, I]);
        (0, i.$)(D);
        let h = O === Z.IlC.POPOUT,
          b = (0, c.Z)({ guild: L, analyticsLocation: N }),
          v = (0, o.Aq)();
        if (null == L || h) return null;
        let x =
            U === I &&
            (M.Z.can(Z.Plq.CHANGE_NICKNAME, L) ||
              M.Z.can(Z.Plq.MANAGE_NICKNAMES, L)),
          P = U === I,
          j = M.Z.canManageUser(Z.Plq.MANAGE_NICKNAMES, I, L);
        if (!(x || j || P) || null == p || S) return null;
        let R = L.hasFeature(Z.oNc.HUB)
            ? A.Z.Messages.HUB_EDIT_PROFILE
            : A.Z.Messages.CHANGE_IDENTITY,
          m = P ? R : A.Z.Messages.CHANGE_NICKNAME;
        return (0, l.jsx)(r.MenuItem, {
          id: "change-nickname",
          label: (0, l.jsx)("div", {
            className: T.labelWrapper,
            children: (0, l.jsx)("span", { className: T.label, children: m }),
          }),
          icon: g,
          action: () => {
            P
              ? ((0, s.Z)(p.id, p.getAvatarURL(n, 80), { guildId: n }),
                b(),
                v.dispatch(Z.CkL.POPOUT_CLOSE),
                (0, r.closeAllModals)())
              : (0, r.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("17712")
                    .then(t.bind(t, 620021));
                  return (t) =>
                    (0, l.jsx)(e, {
                      ...t,
                      guildId: n,
                      user: p,
                      analyticsSource: N,
                      analyticsLocations: C,
                    });
                });
          },
        });
      }
    },
    251794: function (e, n, t) {
      t.d(n, {
        q: function () {
          return r;
        },
        z: function () {
          return a;
        },
      });
      var l = t(735250);
      t(470079);
      var u = t(481060);
      function a(e, n, a) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await t.e("72920").then(t.bind(t, 109730));
          return (t) =>
            (0, l.jsx)(u, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...t,
            });
        });
      }
      function r(e, n, a) {
        (0, u.openModalLazy)(async () => {
          let { default: u } = await t.e("76233").then(t.bind(t, 171494));
          return (t) =>
            (0, l.jsx)(u, {
              guildId: e,
              userId: n,
              anaylticsLocations: a,
              ...t,
            });
        });
      }
    },
    910693: function (e, n, t) {
      t.d(n, {
        BG: function () {
          return f;
        },
        aY: function () {
          return a;
        },
        dW: function () {
          return Z;
        },
        gm: function () {
          return M;
        },
        h1: function () {
          return T;
        },
        jQ: function () {
          return r;
        },
        sE: function () {
          return A;
        },
      });
      var l,
        u,
        a,
        r,
        i = t(470079),
        o = t(100527),
        c = t(367907),
        s = t(314897),
        d = t(626135),
        _ = t(981631);
      function E(e, n, t) {
        var l;
        let u = {
          ...n,
          ...(0, c.hH)(null !== (l = n.guild_id) && void 0 !== l ? l : t),
        };
        d.default.track(e, u);
      }
      function M(e) {
        return i.useCallback(
          (n) => {
            !(function (e) {
              let n = { guild_id: e, location: o.Z.MEMBER_SAFETY_PAGE };
              E(_.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
          },
          [e],
        );
      }
      function f(e) {
        return i.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                selected_role_count: n.size,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
          },
          [e],
        );
      }
      ((l = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (l.COMMUNICATION_DISABLED = "communication_disabled"),
        (l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (l.USERNAME_QUARANTINED = "username_quarantined");
      function Z(e) {
        return i.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                flag_type: n,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE,
              };
              E(_.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
          },
          [e],
        );
      }
      function A(e, n) {
        let { location: t, targetUserId: l, targets: u, locations: a } = n;
        return i.useCallback(
          (n) => {
            let r = {
              action_type: n,
              mod_user_id: s.default.getId(),
              guild_id: e,
              location: t,
              locations: a,
              target_user_id: null != l ? l : void 0,
              targets: null != u ? u : void 0,
            };
            E(_.rMx.MODERATION_ACTION, r);
          },
          [e, t, l, u, a],
        );
      }
      function T(e, n) {
        E(_.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: n });
      }
      ((u = r || (r = {})).BAN = "ban"),
        (u.KICK = "kick"),
        (u.MUTE = "mute"),
        (u.TIMEOUT = "timeout"),
        (u.ADD_ROLE = "add_role"),
        (u.REMOVE_ROLE = "remove_role"),
        (u.COPY_ID = "copy_id"),
        (u.CHANGE_NICKNAME = "change_nickname");
    },
    833737: function (e, n, t) {
      t.r(n);
      var l = t(735250),
        u = t(470079),
        a = t(442837),
        r = t(481060),
        i = t(239091),
        o = t(883385),
        c = t(108843),
        s = t(2052),
        d = t(100527),
        _ = t(906732),
        E = t(299206),
        M = t(976192),
        f = t(910693),
        Z = t(271383),
        A = t(979651),
        T = t(933409),
        I = t(389052),
        N = t(88966),
        C = t(712301),
        O = t(567711),
        g = t(358386),
        L = t(725119),
        U = t(931617),
        p = t(981631),
        S = t(689938);
      n.default = (0, c.Z)(
        (0, o.Z)(
          function (e) {
            var n;
            let {
                user: t,
                guildId: o,
                channelId: c,
                context: p,
                onSelect: D,
                moderationAlertId: h,
                analyticsLocation: b,
                analyticsLocations: v,
                onCloseContextMenu: x,
                showTransferOwnershipItem: P,
              } = e,
              { analyticsLocations: j } = (0, _.ZP)(d.Z.CONTEXT_MENU),
              R = (0, s.O)(),
              m =
                null !== (n = null == v ? void 0 : v[0]) && void 0 !== n
                  ? n
                  : j[0],
              G = (0, f.sE)(o, { location: m, targetUserId: t.id }),
              y = (0, a.e7)(
                [A.Z],
                () => {
                  var e;
                  return null !== (e = A.Z.getUserVoiceChannelId(o, t.id)) &&
                    void 0 !== e
                    ? e
                    : void 0;
                },
                [o, t.id],
              ),
              k = u.useCallback(() => {
                G(f.jQ.COPY_ID);
              }, [G]),
              B = (0, a.e7)([Z.ZP], () => Z.ZP.isMember(o, t.id), [o, t.id]),
              H = (0, L.Z)({
                userId: t.id,
                guildId: o,
                sourceAnalyticsLocations: v,
              }),
              w = (0, N.Z)(t.id, p),
              F = (0, M.Z)({
                guildId: o,
                userId: t.id,
                analyticsLocation: null != b ? b : R.location,
                analyticsLocations: [m],
                context: p,
              }),
              Y = (0, I.Z)({ user: t, location: m }),
              q = (0, T.Z)(t, o, null != c ? c : y, m),
              K = (0, O.Z)(c, h),
              W = (0, g.Z)(t, o),
              z = (0, U.Z)(t.id, o, !1, m),
              V = (0, E.Z)({
                id: t.id,
                label: S.Z.Messages.COPY_ID_USER,
                onSuccess: k,
              }),
              X = (0, C.Z)(t, o),
              Q = !!(null == t ? void 0 : t.isNonUserBot());
            return (0, l.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: () => {
                (0, i.Zy)(), null == x || x();
              },
              "aria-label": S.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: D,
              children: [
                !Q &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)(r.MenuGroup, { children: [H, w] }),
                      (0, l.jsxs)(r.MenuGroup, { children: [F, Y] }),
                      B &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(r.MenuGroup, { children: q }),
                            (0, l.jsxs)(r.MenuGroup, { children: [z, X] }),
                          ],
                        }),
                      null != h ? K : null,
                      P && null != W
                        ? (0, l.jsx)(r.MenuGroup, { children: W })
                        : null,
                    ],
                  }),
                (0, l.jsx)(r.MenuGroup, { children: V }),
              ],
            });
          },
          { object: p.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU],
      );
    },
    567711: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var l = t(735250);
      t(470079);
      var u = t(442837),
        a = t(481060),
        r = t(313889),
        i = t(825829),
        o = t(36459),
        c = t(592125),
        s = t(375954),
        d = t(496675),
        _ = t(981631),
        E = t(689938);
      function M(e, n) {
        let t = (0, u.e7)(
            [d.Z],
            () =>
              null != e &&
              d.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, {
                channelId: e,
              }),
            [e],
          ),
          M = (0, u.e7)([c.Z], () => c.Z.getChannel(e), [e]),
          f = (0, u.e7)([s.Z], () =>
            null != e && null != n ? s.Z.getMessage(e, n) : null,
          ),
          Z = (0, i.NK)(null != f ? f : null);
        if (null == M || null == f) return null;
        let A =
            null != Z && Z.actions.hasOwnProperty(r.d.SET_COMPLETED)
              ? r.d.UNSET_COMPLETED
              : r.d.SET_COMPLETED,
          T =
            A === r.d.SET_COMPLETED
              ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED
              : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
        return t && null != n
          ? (0, l.jsx)(
              a.MenuItem,
              {
                id: "mark-automod-alert-completed",
                label: T,
                action: () => {
                  (0, o.Xx)(n, M, A);
                },
              },
              "mark-automod-alert-completed",
            )
          : null;
      }
    },
    358386: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(735250);
      t(470079);
      var u = t(442837),
        a = t(481060),
        r = t(430824),
        i = t(594174),
        o = t(689938);
      function c(e, n) {
        let c = (0, u.e7)([i.default], () => i.default.getCurrentUser()),
          s = (0, u.e7)([r.Z], () => r.Z.getGuild(n));
        return null == s ||
          null == c ||
          e.id === s.ownerId ||
          e.bot ||
          !s.isOwnerWithRequiredMfaLevel(c)
          ? null
          : (0, l.jsx)(a.MenuItem, {
              id: "transfer-ownership",
              color: "danger",
              label: o.Z.Messages.TRANSFER_OWNERSHIP,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("8653")
                    .then(t.bind(t, 928090));
                  return (t) =>
                    (0, l.jsx)(n, { ...t, guild: s, fromUser: c, toUser: e });
                }),
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
//# sourceMappingURL=1caa1c75608784b6197a.js.map
