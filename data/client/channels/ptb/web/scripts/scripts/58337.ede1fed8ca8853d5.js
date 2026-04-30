"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58337"],
  {
    831544(s, a, t) {
      t.d(a, { c: () => c });
      var h = t(627968);
      t(64700);
      var i = t(661531),
        e = t(996682),
        l = t(27989);
      let c = (s) => {
        let {
            size: a = "md",
            width: t,
            height: c,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...d
          } = s,
          n = (0, l.J)(a),
          o = n?.width ?? t,
          w = n?.height ?? c;
        return (0, h.jsxs)("svg", {
          ...(0, e.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, h.jsx)("path", {
              fill: "string" == typeof p ? p : p.css,
              d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
              className: r,
            }),
            (0, h.jsx)("path", {
              fill: "string" == typeof p ? p : p.css,
              d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
              className: r,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=58337.ede1fed8ca8853d5.js.map
