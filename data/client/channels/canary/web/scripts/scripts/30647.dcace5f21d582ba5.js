"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30647"],
  {
    857253(t, e, a) {
      a.d(e, { A: () => d });
      var s = a(17928),
        l = a(495544),
        i = a(977997),
        h = a(643501);
      function d() {
        return (0, s.bG)(
          [l.default, i.A, h.default],
          () => {
            let t = l.default.getId(),
              e = h.default.getRemoteSessionId();
            return i.A.getVoiceStateForSession(t, e) ?? void 0;
          },
          [],
        );
      }
    },
    481606(t, e, a) {
      a.d(e, { q: () => d });
      var s = a(627968);
      a(64700);
      var l = a(661531),
        i = a(996682),
        h = a(27989);
      let d = (t) => {
        let {
            size: e = "md",
            width: a,
            height: d,
            color: r = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: c = "",
            ...o
          } = t,
          n = (0, h.J)(e),
          p = n?.width ?? a,
          u = n?.height ?? d;
        return (0, s.jsxs)("svg", {
          ...(0, i.A)(o),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: u,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.18c.3 0 .54.26.5.56l-.37 2.94c-.07.6-.01 1.18.16 1.7.11.38-.14.8-.52.8H8a3 3 0 0 1-3-3V4Z",
              className: c,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M14.02 15c-1.15 0-2.13.86-2.27 2l-.46 3.7a2.05 2.05 0 0 0 4.04.65l.17-.85h3l.17.85a2.05 2.05 0 0 0 4.04-.65l-.46-3.7a2.29 2.29 0 0 0-2.27-2h-5.96Z",
              className: c,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=30647.dcace5f21d582ba5.js.map
