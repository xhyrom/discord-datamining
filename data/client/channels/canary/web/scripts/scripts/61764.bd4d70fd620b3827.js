"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61764"],
  {
    700623(a, e, s) {
      s.d(e, { d: () => d });
      var h = s(627968);
      s(64700);
      var c = s(661531),
        i = s(996682),
        t = s(27989);
      let d = (a) => {
        let {
            size: e = "md",
            width: s,
            height: d,
            color: l = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
          } = a,
          n = (0, t.J)(e),
          o = n?.width ?? s,
          v = n?.height ?? d;
        return (0, h.jsx)("svg", {
          ...(0, i.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: v,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, h.jsx)("path", {
            fill: "string" == typeof l ? l : l.css,
            fillRule: "evenodd",
            d: "M3 4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 7a1 1 0 0 1 1-1h1.25c.41 0 .75.34.75.75C6 7.99 5 9 3.75 9A.75.75 0 0 1 3 8.25V7Zm1 11a1 1 0 0 1-1-1v-1.25c0-.41.34-.75.75-.75C4.99 15 6 16 6 17.25c0 .41-.34.75-.75.75H4ZM21 7a1 1 0 0 0-1-1h-1.25a.75.75 0 0 0-.75.75C18 7.99 19 9 20.25 9c.41 0 .75-.34.75-.75V7Zm-1 11a1 1 0 0 0 1-1v-1.25a.75.75 0 0 0-.75-.75C19.01 15 18 16 18 17.25c0 .41.34.75.75.75H20Z",
            clipRule: "evenodd",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=61764.bd4d70fd620b3827.js.map
