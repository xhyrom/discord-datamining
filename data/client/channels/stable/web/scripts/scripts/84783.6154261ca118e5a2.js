"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84783"],
  {
    215026(l, s, a) {
      a.d(s, { w: () => c });
      var t = a(627968);
      a(64700);
      var h = a(661531),
        i = a(996682),
        e = a(27989);
      let c = (l) => {
        let {
            size: s = "md",
            width: a,
            height: c,
            color: r = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...p
          } = l,
          w = (0, e.J)(s),
          n = w?.width ?? a,
          o = w?.height ?? c;
        return (0, t.jsx)("svg", {
          ...(0, i.A)(p),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof r ? r : r.css,
            d: "M1.23 21.13a1 1 0 0 1 0-1.41l7.48-7.47c.2-.2.51-.2.7 0l2.13 2.12c.2.2.2.5 0 .7l-7.48 7.48a1 1 0 0 1-1.41 0l-1.42-1.42ZM7.76 7.76l8.48 8.49a2 2 0 0 0 2.83 0l3.54-3.54a2 2 0 0 0 0-2.83l-2.94-2.94.65-.66a1 1 0 0 0 0-1.4l-1.41-1.42a1 1 0 0 0-1.41 0l-.66.65-2.72-2.71a2 2 0 0 0-2.83 0L7.76 4.93a2 2 0 0 0 0 2.83Z",
            className: d,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=84783.6154261ca118e5a2.js.map
