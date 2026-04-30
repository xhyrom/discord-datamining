"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88990"],
  {
    499373(s, h, t) {
      t.d(h, { T: () => d });
      var i = t(627968);
      t(64700);
      var a = t(661531),
        e = t(996682),
        r = t(27989);
      let d = (s) => {
        let {
            size: h = "md",
            width: t,
            height: d,
            color: l = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, r.J)(h),
          n = w?.width ?? t,
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
            d: "M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=88990.a609e570198d5b97.js.map
