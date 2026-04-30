"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96565"],
  {
    219220(e, r, t) {
      t.d(r, { A: () => i }), t(323874), t(14289), t(35956), t(508300);
      var n = t(64700),
        u = t(636537),
        c = t(746002);
      async function s(e, r) {
        let t = await u.Bo.get({
          url: e,
          signal: r,
          binary: !0,
          rejectWithError: !0,
        });
        r?.throwIfAborted();
        let n = URL.createObjectURL(t.body);
        try {
          let e = new Image();
          return (
            (e.src = n),
            await Promise.race([
              e.decode(),
              new Promise((e, t) => {
                null != r &&
                  r.addEventListener(
                    "abort",
                    () => {
                      t(new DOMException("Aborted", "AbortError"));
                    },
                    { once: !0 },
                  );
              }),
            ]),
            e
          );
        } catch (e) {
          throw (URL.revokeObjectURL(n), e);
        }
      }
      function a(e) {
        URL.revokeObjectURL(e);
      }
      function o(e) {
        for (let r of e.values()) if (2 !== r) return !1;
        return !0;
      }
      function l(e) {
        return "id" in e ? e.id : e.src;
      }
      function i(e) {
        let { skuId: r, layers: t, playing: u = !0 } = e,
          i = n.useRef(0),
          [f, d] = n.useState(!1),
          [h, b] = n.useState({}),
          w = n.useRef(new AbortController()),
          [R, p] = n.useState(u),
          E = n.useRef(new Map()),
          g = n.useRef(new Map()),
          k = n.useRef(r);
        return (
          n.useEffect(() => {
            u && !R && p(!0);
          }, [u, R]),
          n.useEffect(() => {
            if (r !== k.current) {
              (k.current = r), p(u);
              let e = null != t && t.length > 0;
              for (let r of t ?? []) {
                let t = l(r);
                !g.current.has(t) &&
                  ((e = !1), E.current.has(t) || E.current.set(t, 0));
              }
              d(e), (i.current = 0);
            }
          }, [r, t, u]),
          n.useEffect(() => {
            if (
              null == r ||
              null == t ||
              0 === t.length ||
              !1 === R ||
              0 !== i.current
            )
              return;
            i.current = 1;
            let e = w.current;
            t.forEach(async (t) => {
              let n = l(t);
              if (g.current.has(n))
                E.current.set(n, 2), o(E.current) && (d(!0), (i.current = 2));
              else
                try {
                  let u =
                    "id" in t
                      ? (0, c.getCollectiblesItemAssetUrl)({
                          skuId: r,
                          assetFormat: "static",
                          assetId: t.id,
                        })
                      : t.src;
                  if (null == u) return;
                  let a = await s(u, e.signal);
                  if (e.signal.aborted) return;
                  E.current.set(n, 2),
                    g.current.set(n, a.src),
                    b((e) => ({ ...e, [n]: a })),
                    o(E.current) && (d(!0), (i.current = 2));
                } catch (e) {}
            });
          }, [r, t, R]),
          n.useEffect(() => {
            let e = g.current,
              r = w.current;
            return () => {
              Array.from(e.values()).forEach(a), r.abort();
            };
          }, []),
          { loaded: f, layerData: h }
        );
      }
    },
  },
]);
//# sourceMappingURL=96565.5cbce35a98599d6c.js.map
