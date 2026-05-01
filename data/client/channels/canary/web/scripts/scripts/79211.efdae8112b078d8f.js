"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79211"],
  {
    772838(e, s, i) {
      i.d(s, { W: () => h });
      var t = i(627968);
      i(64700);
      var a = i(661531),
        l = i(996682),
        d = i(27989);
      let h = (e) => {
        let {
            size: s = "md",
            width: i,
            height: h,
            color: p = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...c
          } = e,
          n = (0, d.J)(s),
          o = n?.width ?? i,
          w = n?.height ?? h;
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
            d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=79211.efdae8112b078d8f.js.map
