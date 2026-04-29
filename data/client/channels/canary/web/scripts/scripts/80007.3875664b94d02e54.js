"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80007"],
  {
    81466(s, a, e) {
      e.d(a, { C: () => c });
      var h = e(627968);
      e(64700);
      var t = e(661531),
        i = e(996682),
        l = e(27989);
      let c = (s) => {
        let {
            size: a = "md",
            width: e,
            height: c,
            color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...v
          } = s,
          r = (0, l.J)(a),
          n = r?.width ?? e,
          o = r?.height ?? c;
        return (0, h.jsxs)("svg", {
          ...(0, i.A)(v),
          xmlns: "http://www.w3.org/2000/svg",
          width: n,
          height: o,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, h.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
              className: p,
            }),
            (0, h.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              fillRule: "evenodd",
              d: "M2 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9Zm3.5 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
              clipRule: "evenodd",
              className: p,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=80007.3875664b94d02e54.js.map
