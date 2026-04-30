"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34691"],
  {
    554830(s, t, h) {
      h.d(t, { K: () => r });
      var i = h(627968);
      h(64700);
      var l = h(661531),
        a = h(996682),
        e = h(27989);
      let r = (s) => {
        let {
            size: t = "md",
            width: h,
            height: r,
            color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, e.J)(t),
          n = w?.width ?? h,
          o = w?.height ?? r;
        return (0, i.jsx)("svg", {
          ...(0, a.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M20.7 12.7a1 1 0 0 0 0-1.4l-8-8a1 1 0 1 0-1.4 1.4l6.29 6.3H4a1 1 0 1 0 0 2h13.59l-6.3 6.3a1 1 0 0 0 1.42 1.4l8-8Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=34691.93a843017744f594.js.map
