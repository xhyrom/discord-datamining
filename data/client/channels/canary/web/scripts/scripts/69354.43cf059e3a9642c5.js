"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69354"],
  {
    415441(l, e, s) {
      s.d(e, { N: () => c });
      var t = s(627968),
        a = s(64700),
        n = s(17928),
        u = s(775602),
        i = s(607470),
        r = s(859387),
        o = s(985018),
        d = s(840790);
      function c(l) {
        let {
            showVideo: e,
            showImage: s = !0,
            imageAsset: c,
            videoAsset: h,
            imageSize: p,
            onLoadComplete: m,
            assetRef: g,
          } = l,
          b = (0, n.bG)([u.A], () => u.A.useReducedMotion),
          w = null == c || c.asset.isAnimated ? null : c.asset.url,
          A = null != h && h.asset.isAnimated ? h.asset.url : null,
          f = p?.width,
          N = p?.height,
          j = a.useMemo(() => {
            let l = null != f && null != N ? (0, r.Yt)(f, N) : null;
            return null != w
              ? (0, r.UX)(w, {
                  format: "webp",
                  width: l?.width,
                  height: l?.height,
                })
              : null != A
                ? (0, r.WV)(A, l ?? void 0)
                : null;
          }, [w, A, f, N]);
        if (null == j) return null;
        let k = !b && null != h && null != A && e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (s || !k) &&
              (0, t.jsx)("img", {
                alt: c?.alt ?? o.intl.string(o.t.P84bAD),
                className: c?.className ?? d.S,
                src: j,
                onLoad: m,
                ref: k ? void 0 : g,
              }),
            k &&
              (0, t.jsx)(i.A, {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                preload: "auto",
                poster: j,
                playsInline: !0,
                className: h.className,
                controls: !1,
                onProgress: m,
                ref: g,
                "aria-label": h.alt,
                children: (0, t.jsx)("source", {
                  src: h.asset.url,
                  type: h.asset.mimetype ?? void 0,
                }),
              }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=69354.43cf059e3a9642c5.js.map
