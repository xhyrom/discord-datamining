"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11471"],
  {
    4274(t, n, i) {
      i.d(n, { g: () => I, s: () => _ });
      var r = i(287809),
        e = i(975571),
        s = i(927578),
        l = i(652215),
        u = i(985018);
      function I(t) {
        switch (t) {
          case l.t02.TOO_MANY_USER_GUILDS:
            let n = r.default.getCurrentUser(),
              i =
                s.Ay.canUseIncreasedGuildCap(n) || n?.isStaff() ? l.cZu : l.qlD;
            return {
              title: u.intl.formatToPlainString(u.t["ttJ/hj"], { quantity: i }),
              description: u.intl.string(u.t.iLyuDO),
            };
          case l.t02.GUILD_AT_CAPACITY:
            return {
              title: u.intl.string(u.t.ZZlox4),
              description: u.intl.string(u.t.ZUEGFn),
            };
          case l.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
              title: u.intl.string(u.t.kJwpBW),
              description: u.intl.string(u.t.ZUEGFn),
            };
          case l.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return {
              title: u.intl.string(u.t["u/xsK9"]),
              description: u.intl.string(u.t.SxY4IW),
            };
          default:
            return null;
        }
      }
      function _(t) {
        switch (t) {
          case l.t02.TOO_MANY_USER_GUILDS:
            return u.intl.string(u.t.iLyuDO);
          case l.t02.GUILD_AT_CAPACITY:
            return u.intl.string(u.t.M6unNJ);
          case l.t02.INVALID_COUNTRY_CODE:
            return u.intl.string(u.t.sRJGR1);
          case l.t02.INVALID_CANNOT_FRIEND_SELF:
            return u.intl.string(u.t["mY2R+F"]);
          case l.t02.INVITES_DISABLED:
            return u.intl.format(u.t.RXSeLl, {
              articleLink: e.A.getArticleURL(l.MVz.INVITE_DISABLED),
            });
          default:
            return u.intl.string(u.t.dDZRdy);
        }
      }
    },
  },
]);
//# sourceMappingURL=11471.88f407d971f01855.js.map
