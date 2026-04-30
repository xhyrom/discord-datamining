"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97116"],
  {
    974103(n, c, t) {
      t.d(c, { ic: () => a, nc: () => l, w: () => d });
      var u = t(17928);
      t(318729);
      var i = t(576705),
        e = t(903093),
        A = t(610136),
        r = t(652215);
      function l(n) {
        let c =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
        return (
          c.can(r.xBc.BAN_MEMBERS, n) ||
          c.can(r.xBc.KICK_MEMBERS, n) ||
          c.can(r.xBc.MODERATE_MEMBERS, n) ||
          c.can(r.xBc.MANAGE_GUILD, n)
        );
      }
      function a(n) {
        let c = (0, u.bG)([i.A], () => l(n, i.A), [n]),
          t = (0, u.bG)(
            [A.A],
            () => (null != n ? A.A.getGuildIncident(n.id) : null),
            [n],
          );
        return !(null != t && (0, e.k$)(t)) && c;
      }
      function d(n) {
        return (0, u.bG)(
          [i.A],
          () =>
            (function (n) {
              let c =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.A;
              return c.can(r.xBc.MANAGE_GUILD, n);
            })(n, i.A),
          [n],
        );
      }
    },
  },
]);
//# sourceMappingURL=97116.1590ddb66835e71a.js.map
