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
        let { drawCallback: t, size: n, fps: c = 60, useOffscreen: l = !0 } = e,
          s = i.useRef(null),
          o = i.useRef();
        return (
          i.useEffect(() => {
            null != o.current && o.current.setSize(n);
          }, [n]),
          i.useEffect(() => {
            null != o.current && o.current.setSize(n);
          }, [n]),
          i.useEffect(() => {
            if (null != s.current) {
              let e = new a.Z(s.current);
              (o.current = e), l && e.setupOffscreenCanvas();
            }
          }, [s, l, n]),
          (0, u.Z)((e) => {
            if (null != o.current) {
              let { width: n, height: r } = o.current.canvas;
              o.current.clearRect({ x: 0, y: 0, w: n, h: r }),
                t(o.current, e / 1e3);
            }
          }, 1e3 / c),
          (0, r.jsx)("div", { children: (0, r.jsx)("canvas", { ref: s }) })
        );
      };
    },
    258340: function (e, t, n) {
      n(653041);
      var r = n(192379),
        i = n(392711);
      let u = (e) => Math.round(4 * e) / 4,
        a = (e) => {
          let t = { y: 0.9 * e.h, x: 0.3 * e.w };
          return { SPEED: t, GRAVITY: 1100, DRAG: 0.92, Y_POS: 110 };
        };
      t.Z = (e) => {
        let { SPEED: t, GRAVITY: n, DRAG: c, Y_POS: l } = a(e),
          s = r.useRef([]);
        return {
          update: (t) => {
            let r = [];
            if (
              (s.current.forEach((i, u) => {
                (i.position.x -= i.velocity.x * t),
                  (i.position.y -= i.velocity.y * t),
                  (i.velocity.x *= c ** t),
                  (i.velocity.y *= c ** t),
                  (i.velocity.y -= n * t),
                  i.position.y > e.h && r.push(u);
              }),
              r.length > 0)
            ) {
              let e = s.current.filter((e, t) => !r.includes(t));
              s.current = e;
            }
          },
          draw: (t) => {
            t.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              s.current.forEach((e) => {
                let { x: n, y: r } = e.position;
                e.scale > 1 && t.setFilter({ blur: u((e.scale - 1) * 3) }),
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
              s.current.push({
                position: { x: e.w / 2 + (0, i.random)(-50, 50), y: e.h - l },
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
        s = n(936003);
      let o = () => {
        let e = (0, a.Z)(),
          t = i.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          n = (0, l.Z)(t, 60);
        return (0, r.jsx)("div", {
          className: s.canvasWrapper,
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
        (0, c.kf)("ConfettiCanvasComponent") ? (0, r.jsx)(o, {}) : null;
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
          { update: n, draw: s, emit: o } = (0, a.Z)(e),
          d = r.useMemo(() => new u.ZP(), []),
          f = r.useCallback(
            (e) => {
              (e.assetMap = d), s(e);
            },
            [d, s],
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
              await d.loadRemoteImage(i, u), o(i, t);
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
//# sourceMappingURL=1589484e6eb842a75462.js.map
