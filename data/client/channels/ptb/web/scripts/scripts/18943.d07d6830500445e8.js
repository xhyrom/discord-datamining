"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18943"],
  {
    749314(s, e, n) {
      n.d(e, { A: () => h });
      var r = n(627968),
        l = n(64700),
        a = n(503698),
        t = n.n(a),
        i = n(953727);
      function c(s) {
        let {
          width: e = 8,
          height: n = 13,
          color: l = "currentColor",
          foreground: a,
          ...t
        } = s;
        return (0, r.jsx)("svg", {
          ...(0, i.A)(t),
          width: e,
          height: n,
          viewBox: "0 0 8 13",
          children: (0, r.jsx)("path", {
            className: a ?? void 0,
            stroke: l,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
          }),
        });
      }
      var d = n(985018),
        u = n(356929);
      let h = l.forwardRef(function (s, e) {
        let {
          className: n,
          contentClassName: l,
          isUnread: a,
          children: i,
          ...h
        } = s;
        return (0, r.jsxs)("div", {
          ...h,
          className: t()(n, { [u.yF]: !0, [u.KJ]: a, [u.ov]: null != i }),
          ref: e,
          children: [
            null != i
              ? (0, r.jsx)("span", { className: t()(u.Qs, l), children: i })
              : null,
            a
              ? (0, r.jsxs)("span", {
                  className: u.dM,
                  children: [
                    (0, r.jsx)(c, { foreground: u.BH, className: u.fE }),
                    d.intl.string(d.t.y2b7CA),
                  ],
                })
              : null,
          ],
        });
      });
    },
  },
]);
//# sourceMappingURL=18943.d07d6830500445e8.js.map
