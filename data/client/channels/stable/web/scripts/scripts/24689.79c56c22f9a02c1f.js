"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24689"],
  {
    453384(s, e, r) {
      r.d(e, { A: () => x });
      var t = r(627968),
        a = r(64700),
        i = r(503698),
        l = r.n(i),
        c = r(925747),
        d = r(717421),
        n = r(834730),
        h = r(398025),
        o = r(419367),
        k = r(337689);
      let m = "var(--background-mod-strong)",
        x = a.forwardRef((s, e) => {
          let {
              percentComplete: r,
              size: i = 42,
              style: x = "default",
              overlayText: p,
              overlayTextVariant: g = "text-lg/medium",
              children: f,
            } = s,
            { strokeWidth: u } =
              "small" === x ? { strokeWidth: 3 } : { strokeWidth: 4 },
            N = i / 2,
            j = i / 2 - u / 2,
            v = 2 * Math.PI * j,
            y = v - r * v,
            W = a.useMemo(
              () => ({ strokeDasharray: `${v} ${v}`, strokeDashoffset: y }),
              [v, y],
            ),
            { progressTextAnimation: w } = (0, d.z)({
              progressTextAnimation: +(null != p && 1 !== r),
              config: o.N,
            });
          return (0, t.jsxs)("div", {
            className: k.A7,
            ref: e,
            style: { width: i, height: i, padding: u + 2 },
            children: [
              (0, t.jsxs)("div", {
                className: k.vW,
                children: [
                  f,
                  (0, t.jsxs)(c.animated.div, {
                    style: { opacity: (0, h.a)(w), inset: u },
                    className: l()(k.rD, k.qk),
                    children: [
                      (0, t.jsx)("div", { className: l()(k.rD, k.LU) }),
                      (0, t.jsx)(n.E, {
                        variant: g,
                        color: "text-strong",
                        className: k.l_,
                        children: p,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("svg", {
                className: k.hr,
                height: i,
                width: i,
                children: [
                  (0, t.jsx)("circle", {
                    className: k.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: j,
                    cx: N,
                    cy: N,
                    stroke: m,
                  }),
                  (0, t.jsx)("circle", {
                    className: k.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: j,
                    cx: N,
                    cy: N,
                    stroke: m,
                  }),
                  (0, t.jsx)("circle", {
                    className: k.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: j,
                    cx: N,
                    cy: N,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: W,
                  }),
                ],
              }),
            ],
          });
        });
    },
  },
]);
//# sourceMappingURL=24689.79c56c22f9a02c1f.js.map
