"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84971"],
  {
    261958(a, e, h) {
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
          w = n?.height ?? d;
        return (0, s.jsx)("svg", {
          ...(0, t.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof p ? p : p.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=84971.183d07534b0cf653.js.map
