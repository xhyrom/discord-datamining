"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37622"],
  {
    966697(e, t, s) {
      s.d(t, { y: () => m });
      var a = s(627968),
        n = s(64700),
        r = s(503698),
        l = s.n(r),
        i = s(289873);
      s(323874), s(14289), s(35956);
      var d = s(132500);
      let u = new Worker(new URL("/assets/" + s.u("14250"), s.b));
      var c = s(652215),
        o = s(503117);
      function m(e) {
        let {
            readyState: t,
            aspectRatio: s,
            placeholder: r,
            placeholderVersion: m,
            placeholderStyle: v,
            children: h,
            disableSpinner: p = !1,
          } = e,
          w = t === c.Rv1.LOADING,
          [N] = n.useState(w),
          [f, k] = n.useState(!1),
          [E] = n.useState(() => Date.now()),
          L = (function (e, t, s) {
            let a = s && 1 === t && null != e,
              [r, l] = n.useState(void 0);
            return (
              n.useEffect(() => {
                let t = !1;
                return (
                  a &&
                    new Promise((t) => {
                      let s = (0, d.A)(),
                        a = (e) => {
                          let {
                            data: { id: n, png: r },
                          } = e;
                          s === n &&
                            (t(r), u.removeEventListener("message", a));
                        };
                      u.addEventListener("message", a),
                        u.postMessage({ id: s, placeholderData: e });
                    }).then((e) => {
                      t || l(e);
                    }),
                  () => {
                    t = !0;
                  }
                );
              }, [e, a]),
              r
            );
          })(r, m, N),
          R = t === c.Rv1.READY && Date.now() - E < 200;
        return (
          n.useEffect(() => {
            if (p) return;
            let e = setTimeout(() => {
              k(!0);
            }, 2e3);
            return () => {
              clearTimeout(e);
            };
          }, [p, N]),
          (0, a.jsxs)("div", {
            className: o.bX,
            style: { aspectRatio: s },
            children: [
              h,
              null != L &&
                (0, a.jsx)("img", {
                  style: v,
                  className: l()(o.bc, { [o.t5]: w, [o.Jh]: !w, [o.zg]: R }),
                  src: L,
                  alt: "",
                }),
              p
                ? null
                : (0, a.jsx)("div", {
                    "aria-hidden": !(w && f),
                    className: l()(o.oM, { [o.__]: w && f }),
                    children: (0, a.jsx)(i.y, {
                      type: i.t.SPINNING_CIRCLE_SIMPLE,
                      animated: w && f,
                      className: o.Xd,
                    }),
                  }),
            ],
          })
        );
      }
    },
    838541(e, t, s) {
      s.d(t, {
        Rk: () => l,
        dG: () => a.d,
        eJ: () => d,
        ie: () => i,
        k6: () => n,
        ww: () => r,
      });
      var a = s(663675);
      let n = 550,
        r = 600,
        l = 350,
        i = 40,
        d = 20;
    },
  },
]);
//# sourceMappingURL=37622.458e9a21d2d9d068.js.map
