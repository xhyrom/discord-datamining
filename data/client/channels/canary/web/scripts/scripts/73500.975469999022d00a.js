"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["73500"],
  {
    219935(e, n, E) {
      E.d(n, { EN: () => t, Ou: () => u, d5: () => i });
      var a = E(136722),
        l = E(233993),
        r = E(652215);
      let i = r.xBc.VIEW_CHANNEL,
        t = a.kg(i, r.xBc.CONNECT),
        u = a.kg(i, l.QY);
    },
    931991(e, n, E) {
      E.d(n, { ie: () => C, nr: () => _, p_: () => N });
      var a = E(64700),
        l = E(136722),
        r = E(17928),
        i = E(576705),
        t = E(287809),
        u = E(860689),
        c = E(219935),
        s = E(818348);
      let d = {
          canCreateExpressions: !1,
          canCreateGuildEvent: !1,
          canManageAllExpressions: !1,
          canManageAllEvents: !1,
          canManageGuildExpression: () => !1,
          canManageGuildEvent: () => !1,
        },
        A = (e, n, E, a) =>
          null != e &&
          (!!E ||
            ("creator_id" in e
              ? a && null != n && e.creator_id === n.id
              : "userId" in e
                ? a && null != n && e.userId === n.id
                : "user" in e && a && null != n && e.user?.id === n.id)),
        N = (e) => {
          if (null == e) return [s.xB.CREATE_EVENTS, s.xB.MANAGE_EVENTS];
          let n = c.d5;
          return (
            e.isGuildStageVoice() ? (n = c.Ou) : e.isGuildVoice() && (n = c.EN),
            [l.kg(n, s.xB.CREATE_EVENTS), l.kg(n, s.xB.MANAGE_EVENTS)]
          );
        },
        _ = (e) => {
          let [n, E] = (0, u.fh)(e)
              ? [s.xB.CREATE_EVENTS, s.xB.MANAGE_EVENTS]
              : N(e),
            [l, c, _, C] = (0, r.yK)([i.A], () => [
              i.A.can(s.xB.CREATE_GUILD_EXPRESSIONS, e),
              i.A.can(s.xB.MANAGE_GUILD_EXPRESSIONS, e),
              i.A.can(n, e),
              i.A.can(E, e),
            ]),
            S = (0, r.bG)([t.default], () => t.default.getCurrentUser()),
            x = a.useCallback((e) => A(e, S, c, l), [l, c, S]),
            G = a.useCallback((e) => A(e, S, C, _), [C, _, S]);
          return null == e
            ? d
            : {
                canCreateExpressions: l,
                canCreateGuildEvent: _,
                canManageAllExpressions: c,
                canManageAllEvents: C,
                canManageGuildExpression: x,
                canManageGuildEvent: G,
              };
        },
        C = function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i.A,
            E =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t.default,
            [a, l] = (0, u.fh)(e)
              ? [s.xB.CREATE_EVENTS, s.xB.MANAGE_EVENTS]
              : N(e),
            r = n.can(s.xB.CREATE_GUILD_EXPRESSIONS, e),
            c = n.can(s.xB.MANAGE_GUILD_EXPRESSIONS, e),
            _ = n.can(a, e),
            C = n.can(l, e),
            S = E.getCurrentUser();
          return null == e
            ? d
            : {
                canCreateExpressions: r,
                canCreateGuildEvent: _,
                canManageAllExpressions: c,
                canManageAllEvents: C,
                canManageGuildExpression: (e) => A(e, S, c, r),
                canManageGuildEvent: (e) => A(e, S, C, _),
              };
        };
    },
  },
]);
//# sourceMappingURL=73500.975469999022d00a.js.map
