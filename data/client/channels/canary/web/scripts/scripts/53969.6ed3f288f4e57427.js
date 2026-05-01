"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53969"],
  {
    212168(e, r, i) {
      i.d(r, { A: () => u, i: () => l });
      var d,
        s = i(627968),
        n = i(64700),
        p = i(503698),
        a = i.n(p),
        c = i(636113),
        l =
          (((d = {}).PREMIUM = "premium"),
          (d.LIMITED = "limited"),
          (d.NEW_UPSELL = "newUpsell"),
          d);
      let t = {
          premium: { border: c.wU, background: c.gI },
          limited: { border: c.rY, background: c.pm },
          newUpsell: { border: c.Ef, background: c.st },
        },
        u = n.forwardRef(function (e, r) {
          let {
            children: i,
            type: d = "premium",
            isShown: n,
            hasBackground: p = !1,
            className: l,
            backgroundClassName: u,
          } = e;
          if (!n) return i;
          let { border: m, background: o } = t[d];
          return (0, s.jsx)("div", {
            ref: r,
            className: a()(m, l),
            children: (0, s.jsx)("div", {
              className: a()(p ? o : c.Tp, u),
              children: i,
            }),
          });
        });
    },
  },
]);
//# sourceMappingURL=53969.6ed3f288f4e57427.js.map
