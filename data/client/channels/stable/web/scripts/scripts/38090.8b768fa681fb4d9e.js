"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38090"],
  {
    714385(s, l, t) {
      t.d(l, { d: () => c });
      var a = t(627968);
      t(64700);
      var h = t(661531),
        i = t(996682),
        e = t(27989);
      let c = (s) => {
        let {
            size: l = "md",
            width: t,
            height: c,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...p
          } = s,
          w = (0, e.J)(l),
          n = w?.width ?? t,
          o = w?.height ?? c;
        return (0, a.jsx)("svg", {
          ...(0, i.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "m15.93 3.04-1.82 1.83-.58-.58a2.74 2.74 0 0 0-3.87 0l-.78.78a.69.69 0 0 0 0 .97l9.08 9.08c.27.27.7.27.97 0l.78-.78a2.74 2.74 0 0 0 0-3.87l-.58-.58 1.83-1.82a3.55 3.55 0 0 0-5.03-5.03ZM9.58 9.85a.91.91 0 0 1 1.29 0l3.28 3.28c.35.36.35.94 0 1.3l-4.42 4.4a4.57 4.57 0 0 1-2.47 1.28 1.5 1.5 0 0 0-1 .75 2.28 2.28 0 1 1-3.12-3.12c.37-.22.68-.58.75-1 .16-.93.6-1.8 1.28-2.47l4.4-4.42Z",
            className: r,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=38090.8b768fa681fb4d9e.js.map
