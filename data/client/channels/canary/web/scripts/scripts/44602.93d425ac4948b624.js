"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44602"],
  {
    138017(s, t, h) {
      h.d(t, { j: () => r });
      var i = h(627968);
      h(64700);
      var a = h(661531),
        e = h(996682),
        l = h(27989);
      let r = (s) => {
        let {
            size: t = "md",
            width: h,
            height: r,
            color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, l.J)(t),
          n = w?.width ?? h,
          o = w?.height ?? r;
        return (0, i.jsx)("svg", {
          ...(0, e.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M3.3 15.7a1 1 0 0 0 1.4 0L12 8.42l7.3 7.3a1 1 0 0 0 1.4-1.42l-8-8a1 1 0 0 0-1.4 0l-8 8a1 1 0 0 0 0 1.42Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=44602.93d425ac4948b624.js.map
