"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90554"],
  {
    313281(e, t, r) {
      r.d(t, {
        DZ: () => b,
        m_: () => F,
        CJ: () => C,
        TW: () => p,
        Af: () => h,
        e4: () => y,
        Rm: () => m,
      }),
        r(321073);
      var d = r(17928),
        i = r(873298);
      r(734057);
      var n = r(967198),
        a = r(287809),
        o = r(474090);
      r(935208);
      var u = r(181079),
        l = r(379587),
        A = r(353640),
        s = r(121894);
      let v = (0, A.v)((e) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, s.r)(() => e({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, s.r)(() => e({ favoriteAdded: !1 })),
      }));
      var c = r(5180),
        f = r(788868);
      function p(e) {
        let { enabled: t, hasHigherPrivileges: r } = (0, l.m)({ location: e }),
          i = (0, d.bG)([a.default], () => a.default.getCurrentUser()),
          n = o.Ay.isPremiumExactly(i, f.PremiumTypes.TIER_2);
        return {
          hasAccess: t && n,
          isExperimentEnabled: t,
          hasHigherPrivileges: r,
        };
      }
      function h(e) {
        return (0, d.bG)([u.A], () => u.A.getFavorite(e));
      }
      function F() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : u.A.getFavoriteChannels(),
          t = [{ id: null, name: "" }];
        for (let r in e) {
          let d = e[r];
          d.type === i.Ip.CATEGORY &&
            t.push({ id: d.id, name: d.nickname ?? "" });
        }
        return (
          t.sort((t, r) => (e[t.id]?.order ?? 0) - (e[r.id]?.order ?? 0)), t
        );
      }
      function m() {
        return (0, d.bG)([u.A], () => F(u.A.getFavoriteChannels()));
      }
      function b() {
        let e = (0, d.bG)([n.A], () => n.A.getGuildId());
        return (0, c.ai)(e);
      }
      function y(e, t) {
        let r = b(),
          { hasAccess: i } = p(t),
          n = (0, d.bG)(
            [u.A],
            () =>
              null != e &&
              (u.A.isFavorite(e.id) ||
                (e.isThread() && u.A.isFavorite(e.parent_id))),
            [e],
          );
        return r && (!i || !n || e?.isCategory()) ? null : (e ?? null);
      }
      function C() {
        let e = v((e) => e.favoriteAdded);
        return {
          favoriteAdded: e,
          notifyFavoriteAdded: v((e) => e.notifyFavoriteAdded),
          clearFavoriteAdded: v((e) => e.clearFavoriteAdded),
        };
      }
    },
  },
]);
//# sourceMappingURL=90554.d1d2fefe2c2a72c5.js.map
