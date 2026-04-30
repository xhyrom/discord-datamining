"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8563"],
  {
    646270(a, e, h) {
      h.d(e, { u: () => d });
      var s = h(627968);
      h(64700);
      var i = h(661531),
        t = h(996682),
        l = h(27989);
      let d = (a) => {
        let {
            size: e = "md",
            width: h,
            height: d,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
          } = a,
          n = (0, l.J)(e),
          o = n?.width ?? h,
          v = n?.height ?? d;
        return (0, s.jsx)("svg", {
          ...(0, t.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: v,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof p ? p : p.css,
            fillRule: "evenodd",
            d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=8563.72388d68e35c69d7.js.map
