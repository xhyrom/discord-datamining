"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51778"],
  {
    26137(e, s, l) {
      l.d(s, { r: () => a });
      var i = l(627968);
      l(64700);
      var t = l(661531),
        d = l(996682),
        h = l(27989);
      let a = (e) => {
        let {
            size: s = "md",
            width: l,
            height: a,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...p
          } = e,
          n = (0, h.J)(s),
          o = n?.width ?? l,
          w = n?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, d.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M18.46 20.9a12.65 12.65 0 0 1-1.46.9 10.95 10.95 0 0 1-10 0 11 11 0 1 1 11.46-.9Zm-1.65-1.3a8.96 8.96 0 0 1-9.62 0l.23-2.26c.02-.25-.27-.36-.41-.15-.29.45-.6 1.01-.88 1.63A9.04 9.04 0 0 1 4.2 16.5a9 9 0 0 1 15.6 0 9.04 9.04 0 0 1-1.93 2.32c-.27-.62-.59-1.18-.88-1.63-.14-.21-.43-.1-.4.15l.22 2.27ZM12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
            clipRule: "evenodd",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=51778.5146f067cb4cd152.js.map
