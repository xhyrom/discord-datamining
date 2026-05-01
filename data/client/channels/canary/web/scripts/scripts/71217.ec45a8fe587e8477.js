"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71217"],
  {
    743368(s, t, h) {
      h.d(t, { W: () => d });
      var i = h(627968);
      h(64700);
      var a = h(661531),
        e = h(996682),
        r = h(27989);
      let d = (s) => {
        let {
            size: t = "md",
            width: h,
            height: d,
            color: l = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, r.J)(t),
          n = w?.width ?? h,
          o = w?.height ?? d;
        return (0, i.jsx)("svg", {
          ...(0, e.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M7 4a1 1 0 0 0 0 2h9.59L4.29 18.3a1 1 0 1 0 1.42 1.4L18 7.42V17a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H7Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=71217.ec45a8fe587e8477.js.map
