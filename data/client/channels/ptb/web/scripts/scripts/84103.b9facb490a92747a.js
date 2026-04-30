"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84103"],
  {
    358618(a, s, h) {
      h.d(s, { _: () => r });
      var t = h(627968);
      h(64700);
      var l = h(661531),
        i = h(996682),
        e = h(27989);
      let r = (a) => {
        let {
            size: s = "md",
            width: h,
            height: r,
            color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...c
          } = a,
          w = (0, e.J)(s),
          n = w?.width ?? h,
          o = w?.height ?? r;
        return (0, t.jsx)("svg", {
          ...(0, i.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=84103.b9facb490a92747a.js.map
