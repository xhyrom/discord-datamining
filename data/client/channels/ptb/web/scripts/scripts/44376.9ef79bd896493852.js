"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44376"],
  {
    369163(s, t, h) {
      h.d(t, { v: () => r });
      var i = h(627968);
      h(64700);
      var l = h(661531),
        e = h(996682),
        c = h(27989);
      let r = (s) => {
        let {
            size: t = "md",
            width: h,
            height: r,
            color: a = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...p
          } = s,
          w = (0, c.J)(t),
          n = w?.width ?? h,
          o = w?.height ?? r;
        return (0, i.jsx)("svg", {
          ...(0, e.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof a ? a : a.css,
            d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=44376.9ef79bd896493852.js.map
