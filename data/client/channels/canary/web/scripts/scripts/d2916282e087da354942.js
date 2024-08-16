"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50929"],
  {
    108843: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return i;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(906732);
      function i(e, l) {
        return function (n) {
          let { analyticsLocations: i } = (0, t.ZP)(l);
          return (0, r.jsx)(t.Gt, {
            value: i,
            children: (0, r.jsx)(e, { ...n }),
          });
        };
      }
    },
    595011: function (e, l, n) {
      n.r(l);
      var r = n(735250);
      n(470079);
      var t = n(481060),
        i = n(239091),
        o = n(410575),
        u = n(108843),
        s = n(100527),
        d = n(299206),
        a = n(88966),
        c = n(725119),
        Z = n(931617),
        f = n(981631),
        M = n(689938);
      l.default = (0, u.Z)(
        function (e) {
          let { user: l, guildId: n, analyticsContext: u, onSelect: s } = e,
            R = (0, c.Z)({ userId: l.id, guildId: n }),
            _ = (0, Z.Z)(l.id, n),
            h = (0, d.Z)({ id: l.id, label: M.Z.Messages.COPY_ID_USER }),
            g = (0, a.Z)(l.id),
            x = l.isNonUserBot();
          return (0, r.jsx)(o.Z, {
            context: u,
            object: f.qAy.CONTEXT_MENU,
            children: (0, r.jsxs)(t.Menu, {
              navId: "user-context",
              onClose: i.Zy,
              "aria-label": M.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: s,
              children: [
                (0, r.jsxs)(t.MenuGroup, { children: [!x && R, !x && g] }),
                (0, r.jsx)(t.MenuGroup, { children: !x && _ }),
                (0, r.jsx)(t.MenuGroup, { children: h }),
              ],
            }),
          });
        },
        [s.Z.CONTEXT_MENU, s.Z.AUDIT_LOG_USER_MENU],
      );
    },
    88966: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return a;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(481060),
        i = n(493683),
        o = n(37234),
        u = n(314897),
        s = n(981631),
        d = n(689938);
      function a(e, l) {
        let n = u.default.getId(),
          a = l === s.IlC.POPOUT;
        return n === e || a
          ? null
          : (0, r.jsx)(t.MenuItem, {
              id: "message-user",
              label: d.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                i.Z.openPrivateChannel(e), (0, o.xf)();
              },
            });
      }
    },
    931617: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return x;
        },
      });
      var r = n(735250);
      n(470079);
      var t = n(866442),
        i = n(442837),
        o = n(481060),
        u = n(607070),
        s = n(605436),
        d = n(910693),
        a = n(434404),
        c = n(271383),
        Z = n(430824),
        f = n(496675),
        M = n(823379),
        R = n(981631),
        _ = n(689938),
        h = n(522425);
      function g(e, l) {
        var n, i;
        return (0, r.jsxs)("div", {
          className: h.roleRow,
          children: [
            "dot" === l
              ? (0, r.jsx)(o.RoleDot, {
                  className: h.roleDot,
                  color:
                    null !== (n = e.colorString) && void 0 !== n
                      ? n
                      : (0, t.Rf)(R.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, r.jsx)(o.RoleCircle, {
                  className: h.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, t.Rf)(R.p6O),
                }),
            (0, r.jsx)("div", { children: e.name }),
          ],
        });
      }
      function x(e, l) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          t =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          h = (0, i.e7)([Z.Z], () => Z.Z.getGuild(l)),
          x = (0, i.e7)([Z.Z], () => Z.Z.getRoles(l)),
          E = (0, i.e7)([u.Z], () => u.Z.roleStyle),
          p = (0, d.sE)(l, { location: t, targetUserId: e }),
          {
            userRoles: v,
            isGuildMember: j,
            canManageRoles: O,
          } = (0, i.cj)(
            [c.ZP, f.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != h && f.Z.can(R.Plq.MANAGE_ROLES, h),
              };
            },
            [e, l, h],
          );
        if (__OVERLAY__ || null == v || null == h || !j) return null;
        let b = f.Z.getHighestRole(h),
          m = Object.values(x).filter((e) => !(0, s.pM)(h.id, e.id)),
          S = O
            ? m.map((n) => {
                let t = n.managed || !f.Z.isRoleHigher(h, b, n),
                  i = -1 !== v.indexOf(n.id);
                return t && !i
                  ? null
                  : (0, r.jsx)(
                      o.MenuCheckboxItem,
                      {
                        id: n.id,
                        label: () => g(n, E),
                        disabled: t,
                        action: () => {
                          var r;
                          return (
                            (r = n),
                            void (v.includes(r.id)
                              ? (a.Z.updateMemberRoles(
                                  l,
                                  e,
                                  v.filter((e) => e !== r.id),
                                  [],
                                  [r.id],
                                ),
                                p(d.jQ.REMOVE_ROLE))
                              : (a.Z.updateMemberRoles(
                                  l,
                                  e,
                                  v.concat([r.id]),
                                  [r.id],
                                  [],
                                ),
                                p(d.jQ.ADD_ROLE)))
                          );
                        },
                        checked: i,
                      },
                      n.id,
                    );
              })
            : m
                .filter((e) => -1 !== v.indexOf(e.id))
                .map((e) =>
                  (0, s.pM)(h.id, e.id)
                    ? null
                    : (0, r.jsx)(
                        o.MenuItem,
                        { id: e.id, label: () => g(e, E) },
                        e.id,
                      ),
                );
        return 0 === S.filter(M.lm).length
          ? null
          : n
            ? S
            : (0, r.jsx)(o.MenuItem, {
                id: "roles",
                label: _.Z.Messages.ROLES_LIST.format({ numRoles: S.length }),
                children: S,
              });
      }
    },
    522425: function (e, l, n) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=d2916282e087da354942.js.map
