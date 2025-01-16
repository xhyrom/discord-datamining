"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45130"],
  {
    883385: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(410575);
      function r(e, n) {
        return function (t) {
          return (0, l.jsx)(i.Z, {
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
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(906732);
      function r(e, n) {
        return function (t) {
          let { analyticsLocations: r } = (0, i.ZP)(n);
          return (0, l.jsx)(i.Gt, {
            value: r,
            children: (0, l.jsx)(e, { ...t }),
          });
        };
      }
    },
    910693: function (e, n, t) {
      t.d(n, {
        BG: function () {
          return f;
        },
        aY: function () {
          return r;
        },
        dW: function () {
          return R;
        },
        gm: function () {
          return M;
        },
        h1: function () {
          return g;
        },
        jQ: function () {
          return o;
        },
        sE: function () {
          return A;
        },
      });
      var l,
        i,
        r,
        o,
        u = t(192379),
        c = t(100527),
        a = t(367907),
        d = t(314897),
        _ = t(626135),
        s = t(981631);
      function E(e, n, t) {
        var l;
        let i = {
          ...n,
          ...(0, a.hH)(null !== (l = n.guild_id) && void 0 !== l ? l : t),
        };
        _.default.track(e, i);
      }
      function M(e) {
        return u.useCallback(
          (n) => {
            !(function (e) {
              let n = { guild_id: e, location: c.Z.MEMBER_SAFETY_PAGE };
              E(s.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
          },
          [e],
        );
      }
      function f(e) {
        return u.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                selected_role_count: n.size,
                guild_id: e,
                location: c.Z.MEMBER_SAFETY_PAGE,
              };
              E(s.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
          },
          [e],
        );
      }
      ((l = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (l.COMMUNICATION_DISABLED = "communication_disabled"),
        (l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (l.USERNAME_QUARANTINED = "username_quarantined");
      function R(e) {
        return u.useCallback(
          (n) => {
            !(function (e, n) {
              let t = {
                flag_type: n,
                guild_id: e,
                location: c.Z.MEMBER_SAFETY_PAGE,
              };
              E(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
          },
          [e],
        );
      }
      function A(e, n) {
        let { location: t, targetUserId: l, targets: i, locations: r } = n;
        return u.useCallback(
          (n) => {
            let o = {
              action_type: n,
              mod_user_id: d.default.getId(),
              guild_id: e,
              location: t,
              locations: r,
              target_user_id: null != l ? l : void 0,
              targets: null != i ? i : void 0,
            };
            E(s.rMx.MODERATION_ACTION, o);
          },
          [e, t, l, i, r],
        );
      }
      function g(e, n) {
        E(s.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: n });
      }
      ((i = o || (o = {})).BAN = "ban"),
        (i.KICK = "kick"),
        (i.MUTE = "mute"),
        (i.TIMEOUT = "timeout"),
        (i.ADD_ROLE = "add_role"),
        (i.REMOVE_ROLE = "remove_role"),
        (i.COPY_ID = "copy_id"),
        (i.CHANGE_NICKNAME = "change_nickname");
    },
    246389: function (e, n, t) {
      t.r(n);
      var l = t(200651);
      t(192379);
      var i = t(481060),
        r = t(239091),
        o = t(883385),
        u = t(108843),
        c = t(100527),
        a = t(906732),
        d = t(931617),
        _ = t(981631),
        s = t(388032);
      n.default = (0, u.Z)(
        (0, o.Z)(
          function (e) {
            var n;
            let {
                user: t,
                guildId: o,
                onSelect: u,
                analyticsLocations: _,
                onCloseContextMenu: E,
                isViewOnly: M,
              } = e,
              { analyticsLocations: f } = (0, a.ZP)(c.Z.CONTEXT_MENU),
              R =
                null !== (n = null == _ ? void 0 : _[0]) && void 0 !== n
                  ? n
                  : f[0],
              A = (0, d.Z)(t.id, o, !0, R, M);
            return (0, l.jsx)(i.Menu, {
              navId: "guild-moderation-roles",
              onClose: () => {
                (0, r.Zy)(), null == E || E();
              },
              "aria-label": s.intl.string(s.t.liqwPD),
              onSelect: u,
              children: (0, l.jsx)(i.MenuGroup, { children: A }),
            });
          },
          { object: _.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU],
      );
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
        o = t(481060),
        u = t(607070),
        c = t(605436),
        a = t(910693),
        d = t(434404),
        _ = t(271383),
        s = t(430824),
        E = t(496675),
        M = t(823379),
        f = t(981631),
        R = t(388032),
        A = t(849324);
      function g(e, n) {
        var t, r;
        return (0, l.jsxs)("div", {
          className: A.roleRow,
          children: [
            "dot" === n
              ? (0, l.jsx)(o.RoleDot, {
                  className: A.roleDot,
                  color:
                    null !== (t = e.colorString) && void 0 !== t
                      ? t
                      : (0, i.Rf)(f.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, l.jsx)(o.RoleCircle, {
                  className: A.roleDot,
                  color:
                    null !== (r = e.colorString) && void 0 !== r
                      ? r
                      : (0, i.Rf)(f.p6O),
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
          A = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          v = (0, r.e7)([s.Z], () => s.Z.getGuild(n)),
          O = (0, r.e7)([s.Z], () => s.Z.getRoles(n)),
          Z = (0, r.e7)([u.Z], () => u.Z.roleStyle),
          T = (0, a.sE)(n, { location: i, targetUserId: e }),
          {
            userRoles: m,
            isGuildMember: b,
            canManageRoles: D,
          } = (0, r.cj)(
            [_.ZP, E.Z],
            () => {
              let t = _.ZP.getMember(n, e);
              return {
                userRoles: null != t ? t.roles : [],
                isGuildMember: null != t,
                canManageRoles: null != v && E.Z.can(f.Plq.MANAGE_ROLES, v),
              };
            },
            [e, n, v],
          );
        if (__OVERLAY__ || null == m || null == v || !b) return null;
        let N = E.Z.getHighestRole(v),
          p = Object.values(O).filter((e) => !(0, c.pM)(v.id, e.id)),
          C =
            D && !A
              ? p.map((t) => {
                  let i = t.managed || !E.Z.isRoleHigher(v, N, t),
                    r = -1 !== m.indexOf(t.id);
                  return i && !r
                    ? null
                    : (0, l.jsx)(
                        o.MenuCheckboxItem,
                        {
                          id: t.id,
                          label: () => g(t, Z),
                          disabled: i,
                          action: () => {
                            var l;
                            return (
                              (l = t),
                              void (m.includes(l.id)
                                ? (d.Z.updateMemberRoles(
                                    n,
                                    e,
                                    m.filter((e) => e !== l.id),
                                    [],
                                    [l.id],
                                  ),
                                  T(a.jQ.REMOVE_ROLE))
                                : (d.Z.updateMemberRoles(
                                    n,
                                    e,
                                    m.concat([l.id]),
                                    [l.id],
                                    [],
                                  ),
                                  T(a.jQ.ADD_ROLE)))
                            );
                          },
                          checked: r,
                        },
                        t.id,
                      );
                })
              : p
                  .filter((e) => -1 !== m.indexOf(e.id))
                  .map((e) =>
                    (0, c.pM)(v.id, e.id)
                      ? null
                      : (0, l.jsx)(
                          o.MenuItem,
                          { id: e.id, label: () => g(e, Z) },
                          e.id,
                        ),
                  );
        return 0 === C.filter(M.lm).length
          ? null
          : t
            ? C
            : (0, l.jsx)(o.MenuItem, {
                id: "roles",
                label: R.intl.formatToPlainString(R.t.PCs0oq, {
                  numRoles: C.length,
                }),
                children: C,
              });
      }
    },
    849324: function (e, n, t) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=a0a12f21754b4053f21b.js.map
