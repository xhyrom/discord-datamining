"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9793"],
  {
    834040(e, s, i) {
      i.d(s, { Q: () => a });
      var t = i(627968);
      i(64700);
      var h = i(661531),
        l = i(996682),
        d = i(27989);
      let a = (e) => {
        let {
            size: s = "md",
            width: i,
            height: a,
            color: p = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
          } = e,
          n = (0, d.J)(s),
          o = n?.width ?? i,
          w = n?.height ?? a;
        return (0, t.jsx)("svg", {
          ...(0, l.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof p ? p : p.css,
            fillRule: "evenodd",
            d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=9793.e0723bd810d2c2e4.js.map
