"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91782"],
  {
    505312(e, l, r) {
      r.d(l, { w: () => s });
      var n = r(627968),
        a = r(64700),
        t = r(744682);
      let u = { all: { name: "all", start: 0, duration: 66 } },
        s = () => {
          let e = a.useRef(null),
            l = a.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            s = a.useCallback(() => {
              null != e.current && e.current.play("all");
            }, []),
            c = a.useCallback(() => {
              null != e.current && e.current.stopIfPlaying("all");
            }, []),
            i = a.useCallback(
              (l) =>
                (0, n.jsx)(t.P, {
                  ...l,
                  src: () => r.e("71694").then(r.t.bind(r, 29597, 19)),
                  ref: e,
                  markers: u,
                }),
              [],
            );
          return {
            events: { onMouseEnter: s, onMouseLeave: c },
            play: l,
            getDuration: a.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(
              () => e.current?.getCurrentFrame() ?? null,
              [],
            ),
            Component: i,
          };
        };
    },
    905552(e, l, r) {
      let n;
      r.d(l, { A: () => t });
      var a = r(9302);
      function t(e, l) {
        if (__OVERLAY__) {
          let e = l.getGame(),
            r = (0, a.getPID)();
          return null == e || null == r
            ? null
            : n?.id === e.id && n?.pid === r
              ? n
              : (n = {
                  id: e.id,
                  pid: r,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
      }
    },
  },
]);
//# sourceMappingURL=91782.9467b8e3814caa65.js.map
