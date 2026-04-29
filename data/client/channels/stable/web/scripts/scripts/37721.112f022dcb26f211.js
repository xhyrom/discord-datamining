"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37721"],
  {
    836480(s, e, l) {
      l.d(e, { Q: () => h });
      var t = l(627968);
      l(64700);
      var i = l(661531),
        a = l(996682),
        d = l(27989);
      let h = (s) => {
        let {
            size: e = "md",
            width: l,
            height: h,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...r
          } = s,
          n = (0, d.J)(e),
          o = n?.width ?? l,
          w = n?.height ?? h;
        return (0, t.jsxs)("svg", {
          ...(0, a.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, t.jsx)("path", {
              fill: "string" == typeof p ? p : p.css,
              d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
              className: c,
            }),
            (0, t.jsx)("path", {
              fill: "string" == typeof p ? p : p.css,
              fillRule: "evenodd",
              d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z",
              clipRule: "evenodd",
              className: c,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=37721.112f022dcb26f211.js.map
