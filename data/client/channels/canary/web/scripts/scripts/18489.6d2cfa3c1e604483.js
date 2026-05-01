"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18489"],
  {
    807072(s, t, h) {
      h.d(t, { U: () => r });
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
            d: "M18.94 21.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l6.94-6.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 5.06 2.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-6.94 6.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l6.94 6.94Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=18489.6d2cfa3c1e604483.js.map
