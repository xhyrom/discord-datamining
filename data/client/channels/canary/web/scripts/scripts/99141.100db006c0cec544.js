"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99141"],
  {
    825860(e, l, s) {
      s.d(l, { Y: () => h });
      var i = s(627968);
      s(64700);
      var t = s(661531),
        a = s(996682),
        d = s(27989);
      let h = (e) => {
        let {
            size: l = "md",
            width: s,
            height: h,
            color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
          } = e,
          n = (0, d.J)(l),
          o = n?.width ?? s,
          w = n?.height ?? h;
        return (0, i.jsx)("svg", {
          ...(0, a.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: w,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof c ? c : c.css,
            fillRule: "evenodd",
            d: "M3 14a9 9 0 1 0 18 0c0-2.63-.61-5.22-1.79-7.58L18.2 4.38a.7.7 0 0 0-1.3.18l-.78 3.9a.66.66 0 0 1-1.27.11L12.22 1.6a.9.9 0 0 0-1.48-.33l-4.2 4.2A12.07 12.07 0 0 0 3 14Zm9.26-.84a.57.57 0 0 0-1-.23L9.6 15a3.08 3.08 0 1 0 5.12.48c-.14-.26-.5-.28-.71-.06L13 16.5l-.74-3.34Z",
            clipRule: "evenodd",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=99141.100db006c0cec544.js.map
