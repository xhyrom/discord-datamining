"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["29177"],
  {
    303136(a, e, s) {
      s.d(e, { A: () => c });
      var l = s(627968);
      s(64700);
      var r = s(17928),
        d = s(775602),
        t = s(607470);
      let c = (a) => {
        let {
            src: e,
            children: s,
            fallbackImage: c,
            className: i,
            preload: u,
            forceReducedMotion: p,
          } = a,
          n = (0, r.bG)([d.A], () => d.A.useReducedMotion) || p;
        return n && null != c
          ? (0, l.jsx)("img", { src: c, alt: "", className: i })
          : (0, l.jsx)(t.A, {
              muted: !0,
              autoPlay: !n,
              loop: !n,
              playsInline: !0,
              "aria-hidden": "true",
              src: e,
              className: i,
              preload: u,
              children: s,
            });
      };
    },
  },
]);
//# sourceMappingURL=29177.65f2d83d4201e18f.js.map
