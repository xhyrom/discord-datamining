"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26437"],
  {
    638916(l, a, e) {
      e.d(a, { q: () => h });
      var s = e(627968);
      e(64700);
      var i = e(661531),
        t = e(996682),
        d = e(27989);
      let h = (l) => {
        let {
            size: a = "md",
            width: e,
            height: h,
            color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
          } = l,
          n = (0, d.J)(a),
          o = n?.width ?? e,
          w = n?.height ?? h;
        return (0, s.jsx)("svg", {
          ...(0, t.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.09.64l.46.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.08-.65l-.47-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 0 0 10.7 7.1l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
            clipRule: "evenodd",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=26437.525a3f84750ba8e3.js.map
