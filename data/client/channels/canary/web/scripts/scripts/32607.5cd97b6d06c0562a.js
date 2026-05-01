"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32607"],
  {
    328162(e, s, a) {
      a.d(s, { w: () => d });
      var h = a(627968);
      a(64700);
      var i = a(661531),
        t = a(996682),
        l = a(27989);
      let d = (e) => {
        let {
            size: s = "md",
            width: a,
            height: d,
            color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...v
          } = e,
          c = (0, l.J)(s),
          n = c?.width ?? a,
          o = c?.height ?? d;
        return (0, h.jsx)("svg", {
          ...(0, t.A)(v),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, h.jsx)("path", {
            fill: "string" == typeof p ? p : p.css,
            fillRule: "evenodd",
            d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=32607.5cd97b6d06c0562a.js.map
