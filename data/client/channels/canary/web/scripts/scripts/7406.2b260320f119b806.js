"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7406"],
  {
    831453(a, s, h) {
      h.d(s, { H: () => r });
      var t = h(627968);
      h(64700);
      var i = h(661531),
        l = h(996682),
        e = h(27989);
      let r = (a) => {
        let {
            size: s = "md",
            width: h,
            height: r,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...p
          } = a,
          w = (0, e.J)(s),
          n = w?.width ?? h,
          o = w?.height ?? r;
        return (0, t.jsx)("svg", {
          ...(0, l.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M8.3 1.3a1 1 0 0 0 0 1.4l.29.3H6a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0V7c0-1.1.9-2 2-2h2.59l-.3.3a1 1 0 0 0 1.42 1.4l2-2a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.42 0ZM22 11a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=7406.2b260320f119b806.js.map
