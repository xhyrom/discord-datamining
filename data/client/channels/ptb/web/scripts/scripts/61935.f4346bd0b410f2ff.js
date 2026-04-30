"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61935"],
  {
    526181(s, h, t) {
      t.d(h, { U: () => d });
      var a = t(627968);
      t(64700);
      var i = t(661531),
        e = t(996682),
        r = t(27989);
      let d = (s) => {
        let {
            size: h = "md",
            width: t,
            height: d,
            color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, r.J)(h),
          n = w?.width ?? t,
          o = w?.height ?? d;
        return (0, a.jsx)("svg", {
          ...(0, e.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            d: "M4 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4ZM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=61935.f4346bd0b410f2ff.js.map
