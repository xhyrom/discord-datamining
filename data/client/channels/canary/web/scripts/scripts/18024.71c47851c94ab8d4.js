"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18024"],
  {
    548411(s, t, h) {
      h.d(t, { Z: () => r });
      var i = h(627968);
      h(64700);
      var a = h(661531),
        e = h(996682),
        l = h(27989);
      let r = (s) => {
        let {
            size: t = "md",
            width: h,
            height: r,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, l.J)(t),
          n = w?.width ?? h,
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
            d: "M3.3 11.3a1 1 0 0 0 0 1.4l8 8a1 1 0 1 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l6.3-6.3a1 1 0 0 0-1.42-1.4l-8 8Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=18024.71c47851c94ab8d4.js.map
