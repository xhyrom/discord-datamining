"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61597"],
  {
    861004(e, h, a) {
      a.d(h, { c: () => c });
      var s = a(627968);
      a(64700);
      var i = a(661531),
        t = a(996682),
        l = a(27989);
      let c = (e) => {
        let {
            size: h = "md",
            width: a,
            height: c,
            color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: p = "",
            ...r
          } = e,
          n = (0, l.J)(h),
          o = n?.width ?? a,
          v = n?.height ?? c;
        return (0, s.jsx)("svg", {
          ...(0, t.A)(r),
          xmlns: "http://www.w3.org/2000/svg",
          width: o,
          height: v,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "string" == typeof d ? d : d.css,
            fillRule: "evenodd",
            d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 9.83A5.83 5.83 0 0 1 11.83 12h.34A5.83 5.83 0 0 1 18 17.83c0 .65-.52 1.17-1.17 1.17h-.08a.52.52 0 0 1-.5-.4c-.22-.87-.54-1.69-.83-2.3-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.3.61-.61 1.43-.83 2.3a.52.52 0 0 1-.5.4h-.08C6.52 19 6 18.48 6 17.83Z",
            clipRule: "evenodd",
            className: p,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=61597.f562558c500222a6.js.map
