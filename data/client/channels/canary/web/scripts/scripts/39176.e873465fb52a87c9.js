"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39176"],
  {
    738011(e, s, t) {
      function a(e) {
        return e instanceof DOMException && "NotAllowedError" === e.name;
      }
      t.d(s, { u: () => a }), t(508300);
    },
    332461(e, s, t) {
      t.d(s, { x: () => c });
      var a = t(627968);
      t(64700);
      var i = t(661531),
        l = t(996682),
        n = t(27989);
      let c = (e) => {
        let {
            size: s = "md",
            width: t,
            height: c,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: h = "",
            ...o
          } = e,
          r = (0, n.J)(s),
          p = r?.width ?? t,
          u = r?.height ?? c;
        return (0, a.jsxs)("svg", {
          ...(0, l.A)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: u,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              d: "M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
              className: h,
            }),
            (0, a.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              fillRule: "evenodd",
              d: "M7.17 4.66A3 3 0 0 1 9.85 3h4.3a3 3 0 0 1 2.68 1.66c.34.69.94 1.34 1.71 1.34H20a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.46c.77 0 1.37-.65 1.71-1.34ZM17 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
              clipRule: "evenodd",
              className: h,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=39176.e873465fb52a87c9.js.map
