"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1827"],
  {
    768622(s, h, t) {
      t.d(h, { g: () => r });
      var i = t(627968);
      t(64700);
      var a = t(661531),
        e = t(996682),
        l = t(27989);
      let r = (s) => {
        let {
            size: h = "md",
            width: t,
            height: r,
            color: c = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...p
          } = s,
          w = (0, l.J)(h),
          n = w?.width ?? t,
          o = w?.height ?? r;
        return (0, i.jsx)("svg", {
          ...(0, e.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            d: "M7.65 21.75a1 1 0 0 0 1.64.96l11.24-9.96a1 1 0 0 0-.66-1.75h-4.81a.5.5 0 0 1-.5-.6l1.79-8.15a1 1 0 0 0-1.64-.96L3.47 11.25A1 1 0 0 0 4.13 13h4.81c.32 0 .56.3.5.6l-1.79 8.15Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=1827.2ca71ee299caa49e.js.map
