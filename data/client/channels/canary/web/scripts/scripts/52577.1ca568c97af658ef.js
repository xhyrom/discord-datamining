"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52577"],
  {
    29080(s, t, h) {
      h.d(t, { w: () => c });
      var i = h(627968);
      h(64700);
      var e = h(661531),
        r = h(996682),
        w = h(27989);
      let c = (s) => {
        let {
            size: t = "md",
            width: h,
            height: c,
            color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...p
          } = s,
          a = (0, w.J)(t),
          n = a?.width ?? h,
          o = a?.height ?? c;
        return (0, i.jsx)("svg", {
          ...(0, r.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            fill: "string" == typeof d ? d : d.css,
            rx: "3",
            className: l,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=52577.1ca568c97af658ef.js.map
