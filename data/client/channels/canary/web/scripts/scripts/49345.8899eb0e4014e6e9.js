"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49345"],
  {
    87e3(r, e, s) {
      s.d(e, { A: () => f });
      var t = s(627968);
      s(64700);
      var o = s(503698),
        a = s.n(o),
        n = s(317097),
        i = s(17928),
        l = s(661531),
        u = s(602853),
        h = s(173936),
        c = s(775602),
        d = s(394549);
      let p = l.A.unsafe_rawColors.PRIMARY_300,
        g = l.A.unsafe_rawColors.WHITE,
        A = l.A.unsafe_rawColors.PRIMARY_630;
      function f(r) {
        let {
            color: e,
            size: s,
            forcedIconColor: o,
            className: l,
            iconClassName: f,
          } = r,
          [w, b] = (0, i.yK)([c.A], () => [
            c.A.desaturateUserColors,
            c.A.saturation,
          ]),
          k = (0, u.r)(p).hex(),
          C = e ?? k,
          _ = (0, n.$k)((0, n.LX)(C), !1, w ? b : null),
          x = (0, u.r)(g).hex(),
          y = (0, u.r)(A).hex(),
          R =
            null != o
              ? o
              : (function (r) {
                  let { backgroundColor: e, colors: s } = r,
                    [t, o] = s,
                    a = "string" == typeof e ? (0, n.LX)(e) : e,
                    i = "string" == typeof t ? (0, n.LX)(t) : t,
                    l = "string" == typeof o ? (0, n.LX)(o) : o;
                  return (0, n.bJ)(a, i) > (0, n.bJ)(a, l) ? t : o;
                })({ backgroundColor: C, colors: [x, y] }),
          m = s / 8;
        return (0, t.jsx)("div", {
          style: {
            background: _,
            width: s,
            height: s,
            borderRadius: s,
            lineHeight: `${s}px`,
          },
          className: l,
          children: (0, t.jsx)(h.q, {
            size: "custom",
            color: R,
            className: a()(d.w, f),
            width: s - 2 * m,
            height: s - 2 * m,
            style: { margin: m },
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=49345.8899eb0e4014e6e9.js.map
