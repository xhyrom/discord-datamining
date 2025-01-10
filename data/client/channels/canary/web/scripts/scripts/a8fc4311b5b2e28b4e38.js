"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    597846: function (e, t, n) {
      n.d(t, {
        z: function () {
          return c;
        },
      });
      var r = n(200651),
        i = n(192379),
        u = n(658312),
        a = n(503082);
      let c = (e) => {
        let { drawCallback: t, size: n, fps: c = 60, useOffscreen: l = !1 } = e,
          o = i.useRef(null),
          s = i.useRef(),
          d = i.useRef();
        return (
          i.useEffect(() => {
            null != s.current && s.current.setSize(n);
          }, [n]),
          i.useEffect(() => {
            if (null != o.current) {
              let e = new a.Z(o.current);
              if (((s.current = e), l)) {
                let e = document.createElement("canvas");
                document.appendChild(e), (d.current = e);
              }
            }
            return () => {
              null != d.current && document.removeChild(d.current);
            };
          }, [o, l]),
          (0, u.Z)((e) => {
            if (null != s.current) {
              let { width: n, height: r } = s.current.canvas;
              s.current.clearRect({ x: 0, y: 0, w: n, h: r }),
                t(s.current, e / 1e3);
            }
          }, 1e3 / c),
          (0, r.jsx)("div", { children: (0, r.jsx)("canvas", { ref: o }) })
        );
      };
    },
    258340: function (e, t, n) {
      n(653041);
      var r = n(192379),
        i = n(392711);
      let u = (e) => {
        let t = { y: 0.9 * e.h, x: 0.3 * e.w };
        return { SPEED: t, GRAVITY: 1100, DRAG: 0.92, Y_POS: 110 };
      };
      t.Z = (e) => {
        let { SPEED: t, GRAVITY: n, DRAG: a, Y_POS: c } = u(e),
          l = r.useRef([]);
        return {
          update: (t) => {
            let r = [];
            if (
              (l.current.forEach((i, u) => {
                (i.position.x -= i.velocity.x * t),
                  (i.position.y -= i.velocity.y * t),
                  (i.velocity.x *= a ** t),
                  (i.velocity.y *= a ** t),
                  (i.velocity.y -= n * t),
                  i.position.y > e.h && r.push(u);
              }),
              r.length > 0)
            ) {
              let e = l.current.filter((e, t) => !r.includes(t));
              l.current = e;
            }
          },
          draw: (t) => {
            t.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              l.current.forEach((e) => {
                let { x: n, y: r } = e.position;
                e.scale > 1 && t.setFilter({ blur: (e.scale - 1) * 3 }),
                  t.drawImage(
                    e.key,
                    { x: n, y: r },
                    { w: 32 * e.scale, h: 32 * e.scale },
                  ),
                  t.setFilter({ blur: 0 });
              });
          },
          emit: (n, r) => {
            let u = { min: e.h / 8, max: e.h / 3 };
            for (let a = 0; a < r; a++)
              l.current.push({
                position: { x: e.w / 2 + (0, i.random)(-50, 50), y: e.h - c },
                velocity: {
                  x: (0, i.random)(-t.x, t.x, !0),
                  y: t.y + (0, i.random)(-u.min, u.max, !0),
                },
                color: "red",
                scale: (0, i.random)(0.8, 2),
                rotation: (0, i.random)(-20, 20),
                key: n,
              });
          },
        };
      };
    },
    420541: function (e, t, n) {
      n.r(t);
      var r = n(200651),
        i = n(192379),
        u = n(597846),
        a = n(885006),
        c = n(111810),
        l = n(516604),
        o = n(936003);
      let s = () => {
        let e = (0, a.Z)(),
          t = i.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          n = (0, l.Z)(t, 60);
        return (0, r.jsx)("div", {
          className: o.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, r.jsx)(u.z, {
            size: t,
            drawCallback: (e, t) => {
              n.update(t), n.draw(e);
            },
          }),
        });
      };
      t.default = () =>
        (0, c.kf)("ConfettiCanvasComponent") ? (0, r.jsx)(s, {}) : null;
    },
    516604: function (e, t, n) {
      var r = n(192379),
        i = n(570140),
        u = n(4646),
        a = n(258340),
        c = n(768581),
        l = n(176354);
      t.Z = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          { update: n, draw: o, emit: s } = (0, a.Z)(e),
          d = r.useMemo(() => new u.ZP(), []),
          f = r.useCallback(
            (e) => {
              (e.assetMap = d), o(e);
            },
            [d, o],
          );
        return (
          r.useEffect(() => {
            async function e(e) {
              var n;
              let { emoji: r } = e,
                i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                u =
                  null == r.id
                    ? l.ZP.getURL(r.name)
                    : c.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 64,
                        forcePNG: !0,
                      });
              await d.loadRemoteImage(i, u), s(i, t);
            }
            return (
              i.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e),
              () => i.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
            );
          }),
          { update: n, draw: f }
        );
      };
    },
    885006: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379);
      function i() {
        var e, t;
        let [n, i] = r.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080,
        });
        return (
          r.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              i({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          n
        );
      }
    },
    936003: function (e, t, n) {
      e.exports = { canvasWrapper: "canvasWrapper_f2053b" };
    },
  },
]);
//# sourceMappingURL=a8fc4311b5b2e28b4e38.js.map
