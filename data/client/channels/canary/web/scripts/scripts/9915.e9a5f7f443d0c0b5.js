"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9915"],
  {
    782134(s, t, h) {
      h.d(t, { u: () => a });
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
          w = (0, r.J)(t),
          n = w?.width ?? h,
          o = w?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, l.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=9915.e9a5f7f443d0c0b5.js.map
