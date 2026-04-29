"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["17286"],
  {
    332837(s, a, t) {
      t.d(a, { f: () => r });
      var h = t(627968);
      t(64700);
      var i = t(661531),
        e = t(996682),
        l = t(27989);
      let r = (s) => {
        let {
            size: a = "md",
            width: t,
            height: r,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, l.J)(a),
          n = w?.width ?? t,
          o = w?.height ?? r;
        return (0, h.jsx)("svg", {
          ...(0, e.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, h.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=17286.ca1e8934ba9c6e41.js.map
