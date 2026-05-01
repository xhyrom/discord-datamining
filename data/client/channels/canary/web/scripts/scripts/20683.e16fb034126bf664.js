"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20683"],
  {
    428678(e, s, i) {
      i.d(s, { K: () => a });
      var t = i(627968);
      i(64700);
      var l = i(661531),
        d = i(996682),
        h = i(27989);
      let a = (e) => {
        let {
            size: s = "md",
            width: i,
            height: a,
            color: p = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
          } = e,
          n = (0, h.J)(s),
          o = n?.width ?? i,
          w = n?.height ?? a;
        return (0, t.jsx)("svg", {
          ...(0, d.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof p ? p : p.css,
            fillRule: "evenodd",
            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=20683.e16fb034126bf664.js.map
