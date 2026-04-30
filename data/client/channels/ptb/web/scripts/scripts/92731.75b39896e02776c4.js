"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92731"],
  {
    113494(s, a, h) {
      h.d(a, { E: () => d });
      var t = h(627968);
      h(64700);
      var i = h(661531),
        e = h(996682),
        r = h(27989);
      let d = (s) => {
        let {
            size: a = "md",
            width: h,
            height: d,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, r.J)(a),
          n = w?.width ?? h,
          o = w?.height ?? d;
        return (0, t.jsx)("svg", {
          ...(0, e.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=92731.75b39896e02776c4.js.map
