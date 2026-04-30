"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["569"],
  {
    21973(e, a, l) {
      l.d(a, { lX: () => t, W1: () => d });
      var n = l(945810);
      let i = (0, n.mj)({
          name: "2026-03-private-profiles-strict",
          kind: "user",
          defaultConfig: { enabled: !1 },
          variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
            2: { enabled: !0 },
            3: { enabled: !0 },
          },
        }),
        s = (0, n.mj)({
          name: "2026-02-private-profiles",
          kind: "user",
          defaultConfig: { enabled: !1 },
          variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        }),
        t = (e) => {
          let a = s.useConfig({ location: e }).enabled,
            l = i.useConfig({ location: e }).enabled;
          return a || l;
        },
        d = (e) =>
          s.getConfig({ location: e }).enabled ||
          i.getConfig({ location: e }).enabled;
    },
    682348(e, a, l) {
      l.d(a, { _: () => d });
      var n = l(627968);
      l(64700);
      var i = l(661531),
        s = l(996682),
        t = l(27989);
      let d = (e) => {
        let {
            size: a = "md",
            width: l,
            height: d,
            color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          h = (0, t.J)(a),
          p = h?.width ?? l,
          f = h?.height ?? d;
        return (0, n.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: f,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M17.78 13.1a6.02 6.02 0 0 0-3.51.68 3.92 3.92 0 0 0-1.87 2.56c-.17.7-.4 1.97-.4 3.69V21a1 1 0 0 1-1 1H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16a10.3 10.3 0 0 0-1.32 2.9.53.53 0 0 1-.5.41h-.22C2.67 22 2 21.38 2 20.59A9.53 9.53 0 0 1 11.53 11h.94c2.03 0 3.92.64 5.47 1.73.18.12.06.4-.16.38ZM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
              className: o,
            }),
            (0, n.jsx)("path", {
              fill: "string" == typeof r ? r : r.css,
              d: "M23.66 16.47c.13.57.34 1.69.34 3.23v2.23a1.4 1.4 0 0 1-2.66.63l-.8-1.6a.5.5 0 0 0-.56-.25c-.26.06-.62.12-.98.12s-.72-.06-.98-.12a.5.5 0 0 0-.56.25l-.8 1.6a1.4 1.4 0 0 1-2.66-.63V19.7c0-1.54.2-2.66.34-3.23.31-1.3 1.36-1.55 2.46-1.79.23-.05.46.03.61.18.17.16.36.33.59.32a19.34 19.34 0 0 1 2 0c.23 0 .42-.16.58-.32a.68.68 0 0 1 .62-.18c1.1.24 2.15.5 2.46 1.8Z",
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=569.bf57867cefce15fa.js.map
