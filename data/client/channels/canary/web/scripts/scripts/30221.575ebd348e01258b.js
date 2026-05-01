"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30221"],
  {
    500060(a, s, e) {
      e.d(s, { o: () => c });
      var l = e(627968);
      e(64700);
      var h = e(661531),
        t = e(996682),
        i = e(27989);
      let c = (a) => {
        let {
            size: s = "md",
            width: e,
            height: c,
            color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...o
          } = a,
          r = (0, i.J)(s),
          v = r?.width ?? e,
          n = r?.height ?? c;
        return (0, l.jsxs)("svg", {
          ...(0, t.A)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: v,
          height: n,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              fillRule: "evenodd",
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm5 2c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v.36c0-.21.14-.4.34-.47l2-.67a.5.5 0 0 1 .66.47v4.62a.5.5 0 0 1-.66.47l-2-.67a.5.5 0 0 1-.34-.47V11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z",
              clipRule: "evenodd",
              className: p,
            }),
            (0, l.jsx)("path", {
              fill: "string" == typeof d ? d : d.css,
              d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
              className: p,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=30221.575ebd348e01258b.js.map
