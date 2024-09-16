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
      var t = n(735250);
      n(470079);
      var r = n(906732);
      function i(e, l) {
        return function (n) {
          let { analyticsLocations: i } = (0, r.ZP)(l);
          return (0, t.jsx)(r.Gt, {
            value: i,
            children: (0, t.jsx)(e, { ...n }),
          });
        };
      }
    },
    595011: function (e, l, n) {
      n.r(l);
      var t = n(735250);
      n(470079);
      var r = n(481060),
        i = n(239091),
        o = n(410575),
        s = n(108843),
        u = n(100527),
        d = n(299206),
        a = n(88966),
        c = n(725119),
        Z = n(931617),
        f = n(981631),
        M = n(689938);
      l.default = (0, s.Z)(
        function (e) {
          let { user: l, guildId: n, analyticsContext: s, onSelect: u } = e,
            h = (0, c.Z)({ userId: l.id, guildId: n }),
            R = (0, Z.Z)(l.id, n),
            _ = (0, d.Z)({ id: l.id, label: M.Z.Messages.COPY_ID_USER }),
            g = (0, a.Z)(l.id),
            E = l.isNonUserBot();
          return (0, t.jsx)(o.Z, {
            context: s,
            object: f.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: i.Zy,
              "aria-label": M.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: u,
              children: [
                (0, t.jsxs)(r.MenuGroup, { children: [!E && h, !E && g] }),
                (0, t.jsx)(r.MenuGroup, { children: !E && R }),
                (0, t.jsx)(r.MenuGroup, { children: _ }),
              ],
            }),
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.AUDIT_LOG_USER_MENU],
      );
    },
    88966: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return c;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(442837),
        i = n(481060),
        o = n(493683),
        s = n(40851),
        u = n(314897),
        d = n(981631),
        a = n(689938);
      function c(e, l) {
        let n = (0, s.Aq)();
        return (0, r.e7)([u.default], () => u.default.getId() === e) ||
          l === d.IlC.POPOUT
          ? null
          : (0, t.jsx)(i.MenuItem, {
              id: "message-user",
              label: a.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                o.Z.openPrivateChannel(e),
                  n.dispatch(d.CkL.POPOUT_CLOSE),
                  (0, i.closeAllModals)();
              },
            });
      }
    },
    931617: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return E;
        },
      });
      var t = n(735250);
      n(470079);
      var r = n(866442),
        i = n(442837),
        o = n(481060),
        s = n(607070),
        u = n(605436),
        d = n(910693),
        a = n(434404),
        c = n(271383),
        Z = n(430824),
        f = n(496675),
        M = n(823379),
        h = n(981631),
        R = n(689938),
        _ = n(587525);
      function g(e, l) {
        var n, i;
        return (0, t.jsxs)("div", {
          className: _.roleRow,
          children: [
            "dot" === l
              ? (0, t.jsx)(o.RoleDot, {
                  className: _.roleDot,
                  color:
                    null !== (n = e.colorString) && void 0 !== n
                      ? n
                      : (0, r.Rf)(h.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, t.jsx)(o.RoleCircle, {
                  className: _.roleDot,
                  color:
                    null !== (i = e.colorString) && void 0 !== i
                      ? i
                      : (0, r.Rf)(h.p6O),
                }),
            (0, t.jsx)("div", { children: e.name }),
          ],
        });
      }
      function E(e, l) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          _ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          E = (0, i.e7)([Z.Z], () => Z.Z.getGuild(l)),
          O = (0, i.e7)([Z.Z], () => Z.Z.getRoles(l)),
          p = (0, i.e7)([s.Z], () => s.Z.roleStyle),
          v = (0, d.sE)(l, { location: r, targetUserId: e }),
          {
            userRoles: x,
            isGuildMember: j,
            canManageRoles: b,
          } = (0, i.cj)(
            [c.ZP, f.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != E && f.Z.can(h.Plq.MANAGE_ROLES, E),
              };
            },
            [e, l, E],
          );
        if (__OVERLAY__ || null == x || null == E || !j) return null;
        let m = f.Z.getHighestRole(E),
          S = Object.values(O).filter((e) => !(0, u.pM)(E.id, e.id)),
          U =
            b && !_
              ? S.map((n) => {
                  let r = n.managed || !f.Z.isRoleHigher(E, m, n),
                    i = -1 !== x.indexOf(n.id);
                  return r && !i
                    ? null
                    : (0, t.jsx)(
                        o.MenuCheckboxItem,
                        {
                          id: n.id,
                          label: () => g(n, p),
                          disabled: r,
                          action: () => {
                            var t;
                            return (
                              (t = n),
                              void (x.includes(t.id)
                                ? (a.Z.updateMemberRoles(
                                    l,
                                    e,
                                    x.filter((e) => e !== t.id),
                                    [],
                                    [t.id],
                                  ),
                                  v(d.jQ.REMOVE_ROLE))
                                : (a.Z.updateMemberRoles(
                                    l,
                                    e,
                                    x.concat([t.id]),
                                    [t.id],
                                    [],
                                  ),
                                  v(d.jQ.ADD_ROLE)))
                            );
                          },
                          checked: i,
                        },
                        n.id,
                      );
                })
              : S.filter((e) => -1 !== x.indexOf(e.id)).map((e) =>
                  (0, u.pM)(E.id, e.id)
                    ? null
                    : (0, t.jsx)(
                        o.MenuItem,
                        { id: e.id, label: () => g(e, p) },
                        e.id,
                      ),
                );
        return 0 === U.filter(M.lm).length
          ? null
          : n
            ? U
            : (0, t.jsx)(o.MenuItem, {
                id: "roles",
                label: R.Z.Messages.ROLES_LIST.format({ numRoles: U.length }),
                children: U,
              });
      }
    },
    587525: function (e, l, n) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=c559f50609ccd6d904b8.js.map
