"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36926"],
  {
    663341(s, h, t) {
      t.d(h, { p: () => r });
      var i = t(627968);
      t(64700);
      var a = t(661531),
        e = t(996682),
        p = t(27989);
      let r = (s) => {
        let {
            size: h = "md",
            width: t,
            height: r,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...c
          } = s,
          w = (0, p.J)(h),
          n = w?.width ?? t,
          o = w?.height ?? r;
        return (0, i.jsx)("svg", {
          ...(0, e.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M13 3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2h-8V3Z",
            className: l,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=36926.ac6d56b1e08d43f8.js.map
