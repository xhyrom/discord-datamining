"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77663"],
  {
    744898(s, t, a) {
      a.d(t, { e: () => r });
      var e = a(627968);
      a(64700);
      var h = a(661531),
        i = a(996682),
        c = a(27989);
      let r = (s) => {
        let {
            size: t = "md",
            width: a,
            height: r,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: l = "",
            ...p
          } = s,
          w = (0, c.J)(t),
          n = w?.width ?? a,
          o = w?.height ?? r;
        return (0, e.jsx)("svg", {
          ...(0, i.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, e.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
            className: l,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=77663.e7425b7b20b42bd8.js.map
