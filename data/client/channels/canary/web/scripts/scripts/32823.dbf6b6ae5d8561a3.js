"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32823"],
  {
    534890(s, t, h) {
      h.d(t, { o: () => a });
      var i = h(627968);
      h(64700);
      var e = h(661531),
        l = h(996682),
        r = h(27989);
      let a = (s) => {
        let {
            size: t = "md",
            width: h,
            height: a,
            color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...p
          } = s,
          o = (0, r.J)(t),
          w = o?.width ?? h,
          n = o?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, l.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: w,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=32823.dbf6b6ae5d8561a3.js.map
