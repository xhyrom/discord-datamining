"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50929"],
  {
    108843: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return r;
        },
      });
      var t = n(200651);
      n(192379);
      var i = n(906732);
      function r(e, l) {
        return function (n) {
          let { analyticsLocations: r } = (0, i.ZP)(l);
          return (0, t.jsx)(i.Gt, {
            value: r,
            children: (0, t.jsx)(e, { ...n }),
          });
        };
      }
    },
    595011: function (e, l, n) {
      n.r(l);
      var t = n(200651);
      n(192379);
      var i = n(481060),
        r = n(239091),
        o = n(410575),
        u = n(108843),
        d = n(100527),
        s = n(299206),
        a = n(88966),
        c = n(37258),
        Z = n(931617),
        f = n(981631),
        h = n(388032);
      l.default = (0, u.Z)(
        function (e) {
          let { user: l, guildId: n, analyticsContext: u, onSelect: d } = e,
            g = (0, c.Z)({ userId: l.id, guildId: n }),
            p = (0, Z.Z)(l.id, n),
            v = (0, s.Z)({ id: l.id, label: h.intl.string(h.t["/AXYnJ"]) }),
            x = (0, a.Z)(l.id),
            M = l.isNonUserBot();
          return (0, t.jsx)(o.Z, {
            context: u,
            object: f.qAy.CONTEXT_MENU,
            children: (0, t.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: r.Zy,
              "aria-label": h.intl.string(h.t.liqwPD),
              onSelect: d,
              children: [
                (0, t.jsxs)(i.MenuGroup, { children: [!M && g, !M && x] }),
                (0, t.jsx)(i.MenuGroup, { children: !M && p }),
                (0, t.jsx)(i.MenuGroup, { children: v }),
              ],
            }),
          });
        },
        [d.Z.CONTEXT_MENU, d.Z.AUDIT_LOG_USER_MENU],
      );
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
        r = n(481060),
        o = n(493683),
        u = n(40851),
        d = n(314897),
        s = n(981631),
        a = n(388032);
      function c(e, l) {
        let n = (0, u.Aq)();
        return (0, i.e7)([d.default], () => d.default.getId() === e) ||
          l === s.IlC.POPOUT
          ? null
          : (0, t.jsx)(r.MenuItem, {
              id: "message-user",
              label: a.intl.string(a.t.OAJQlJ),
              action: () => {
                o.Z.openPrivateChannel(e),
                  n.dispatch(s.CkL.POPOUT_CLOSE),
                  (0, r.closeAllModals)();
              },
            });
      }
    },
    931617: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return M;
        },
      });
      var t = n(200651);
      n(192379);
      var i = n(866442),
        r = n(442837),
        o = n(481060),
        u = n(607070),
        d = n(605436),
        s = n(910693),
        a = n(434404),
        c = n(271383),
        Z = n(430824),
        f = n(496675),
        h = n(823379),
        g = n(981631),
        p = n(388032),
        v = n(5118);
      function x(e, l) {
        var n, r;
        return (0, t.jsxs)("div", {
          className: v.roleRow,
          children: [
            "dot" === l
              ? (0, t.jsx)(o.RoleDot, {
                  className: v.roleDot,
                  color:
                    null !== (n = e.colorString) && void 0 !== n
                      ? n
                      : (0, i.Rf)(g.p6O),
                  background: !1,
                  tooltip: !1,
                })
              : (0, t.jsx)(o.RoleCircle, {
                  className: v.roleDot,
                  color:
                    null !== (r = e.colorString) && void 0 !== r
                      ? r
                      : (0, i.Rf)(g.p6O),
                }),
            (0, t.jsx)("div", { children: e.name }),
          ],
        });
      }
      function M(e, l) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          v = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          M = (0, r.e7)([Z.Z], () => Z.Z.getGuild(l)),
          R = (0, r.e7)([Z.Z], () => Z.Z.getRoles(l)),
          j = (0, r.e7)([u.Z], () => u.Z.roleStyle),
          b = (0, s.sE)(l, { location: i, targetUserId: e }),
          {
            userRoles: m,
            isGuildMember: O,
            canManageRoles: _,
          } = (0, r.cj)(
            [c.ZP, f.Z],
            () => {
              let n = c.ZP.getMember(l, e);
              return {
                userRoles: null != n ? n.roles : [],
                isGuildMember: null != n,
                canManageRoles: null != M && f.Z.can(g.Plq.MANAGE_ROLES, M),
              };
            },
            [e, l, M],
          );
        if (__OVERLAY__ || null == m || null == M || !O) return null;
        let E = f.Z.getHighestRole(M),
          C = Object.values(R).filter((e) => !(0, d.pM)(M.id, e.id)),
          P =
            _ && !v
              ? C.map((n) => {
                  let i = n.managed || !f.Z.isRoleHigher(M, E, n),
                    r = -1 !== m.indexOf(n.id);
                  return i && !r
                    ? null
                    : (0, t.jsx)(
                        o.MenuCheckboxItem,
                        {
                          id: n.id,
                          label: () => x(n, j),
                          disabled: i,
                          action: () => {
                            var t;
                            return (
                              (t = n),
                              void (m.includes(t.id)
                                ? (a.Z.updateMemberRoles(
                                    l,
                                    e,
                                    m.filter((e) => e !== t.id),
                                    [],
                                    [t.id],
                                  ),
                                  b(s.jQ.REMOVE_ROLE))
                                : (a.Z.updateMemberRoles(
                                    l,
                                    e,
                                    m.concat([t.id]),
                                    [t.id],
                                    [],
                                  ),
                                  b(s.jQ.ADD_ROLE)))
                            );
                          },
                          checked: r,
                        },
                        n.id,
                      );
                })
              : C.filter((e) => -1 !== m.indexOf(e.id)).map((e) =>
                  (0, d.pM)(M.id, e.id)
                    ? null
                    : (0, t.jsx)(
                        o.MenuItem,
                        { id: e.id, label: () => x(e, j) },
                        e.id,
                      ),
                );
        return 0 === P.filter(h.lm).length
          ? null
          : n
            ? P
            : (0, t.jsx)(o.MenuItem, {
                id: "roles",
                label: p.intl.formatToPlainString(p.t.PCs0oq, {
                  numRoles: P.length,
                }),
                children: P,
              });
      }
    },
    5118: function (e, l, n) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=b8f0f677ace0a3934d8d.js.map
