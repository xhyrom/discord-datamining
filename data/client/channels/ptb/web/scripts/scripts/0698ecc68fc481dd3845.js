"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89792"],
  {
    711635: function (e, t, r) {
      r.r(t), r(47120);
      var n = r(735250),
        u = r(470079),
        s = r(855095);
      let d = window.GLOBAL_ENV.PUBLIC_PATH;
      d.endsWith("/") && (d = d.substring(0, d.length - 1)),
        (s.OGVLoader.base = d),
        (t.default = u.forwardRef(function (e, t) {
          let {
              className: r,
              src: d,
              playing: a,
              preload: l = "",
              onEnded: f,
              onLoadedMetadata: i,
              onError: o,
              muted: c,
              volume: v,
            } = e,
            E = u.useRef(null),
            [p] = u.useState(() => {
              let e = new s.OGVPlayer();
              return (e.preload = l), (e.controls = !1), e;
            });
          return (
            u.useImperativeHandle(t, () => p, [p]),
            u.useEffect(() => {
              let e = E.current;
              if (null != p && null != e)
                return (
                  e.appendChild(p),
                  () => {
                    e.removeChild(p);
                  }
                );
            }, [p]),
            u.useEffect(() => {
              p.src = d;
            }, [p, d]),
            u.useEffect(() => {
              p.preload = l;
            }, [p, l]),
            u.useEffect(() => {
              void 0 !== a &&
                (a
                  ? setTimeout(() => {
                      p.play();
                    }, 0)
                  : setTimeout(() => {
                      p.pause();
                    }, 0));
            }, [d, p, a]),
            u.useEffect(() => {
              void 0 !== c && (p.muted = c);
            }, [p, c]),
            u.useEffect(() => {
              void 0 !== v && (p.volume = v);
            }, [p, v]),
            u.useEffect(() => {
              if (null != f)
                return (
                  p.addEventListener("ended", f),
                  () => {
                    p.removeEventListener("ended", f);
                  }
                );
            }, [p, f]),
            u.useEffect(() => {
              if (null != i)
                return (
                  p.addEventListener("loadedmetadata", i),
                  () => {
                    p.removeEventListener("loadedmetadata", i);
                  }
                );
            }, [p, i]),
            u.useEffect(() => {
              if (null != o)
                return (
                  p.addEventListener("error", o),
                  () => {
                    p.removeEventListener("error", o);
                  }
                );
            }, [p, o]),
            (0, n.jsx)("div", { ref: E, className: r })
          );
        }));
    },
  },
]);
//# sourceMappingURL=0698ecc68fc481dd3845.js.map
