"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98793"],
  {
    32880(s, a, t) {
      t.d(a, { s: () => r });
      var h = t(627968);
      t(64700);
      var i = t(661531),
        l = t(996682),
        e = t(27989);
      let r = (s) => {
        let {
            size: a = "md",
            width: t,
            height: r,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = s,
          w = (0, e.J)(a),
          n = w?.width ?? t,
          o = w?.height ?? r;
        return (0, h.jsx)("svg", {
          ...(0, l.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, h.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=98793.0e733dac50143621.js.map
