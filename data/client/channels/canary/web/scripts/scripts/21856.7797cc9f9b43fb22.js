"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21856"],
  {
    130147(s, a, l) {
      l.d(a, { _: () => h });
      var e = l(627968),
        t = l(503698),
        i = l.n(t),
        d = l(778712),
        r = l(97808),
        u = l(652215),
        c = l(124882);
      let h = (s) => {
        let { showStatus: a, width: l, opacity: t, size: h = "default" } = s,
          m = "small" === h ? d._3.SIZE_24 : d._3.SIZE_32;
        return (0, e.jsxs)("div", {
          className: i()(c.Os, { [c.i]: "small" === h }),
          style: { opacity: t },
          children: [
            (0, e.jsx)(r.eu, {
              src: null,
              size: m,
              status: a ? u.clD.ONLINE : void 0,
              statusColor: "var(--border-subtle)",
              "aria-hidden": !0,
              imageClassName: c.yf,
            }),
            (0, e.jsx)("div", {
              className: i()(c.aA, { [c.vX]: "small" === h }),
              style: { maxWidth: null != l ? l : "100px" },
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=21856.7797cc9f9b43fb22.js.map
