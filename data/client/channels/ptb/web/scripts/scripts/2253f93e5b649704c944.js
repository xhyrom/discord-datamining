"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    597846: function (e, t, n) {
      n.d(t, {
        z: function () {
          return s;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(658312),
        u = n(503082);
      let s = (e) => {
        let { drawCallback: t, size: n, fps: s = 60, useOffscreen: c = !0 } = e,
          l = i.useRef(null),
          o = i.useRef();
        return (
          i.useEffect(() => {
            null != o.current && o.current.setSize(n);
          }, [n]),
          i.useEffect(() => {
            null != o.current && o.current.setSize(n);
          }, [n]),
          i.useEffect(() => {
            if (null != l.current) {
              let e = new u.Z(l.current);
              (o.current = e), c && e.setupOffscreenCanvas();
            }
          }, [l, c, n]),
          (0, a.Z)((e) => {
            if (null != o.current) {
              let { width: n, height: r } = o.current.canvas;
              o.current.clearRect({ x: 0, y: 0, w: n, h: r }),
                t(o.current, e / 1e3);
            }
          }, 1e3 / s),
          (0, r.jsx)("div", { children: (0, r.jsx)("canvas", { ref: l }) })
        );
      };
    },
    258340: function (e, t, n) {
      n(653041);
      var r = n(192379),
        i = n(392711),
        a = n(633302),
        u = n(960048);
      let s = (e) => Math.round(4 * e) / 4,
        c = (e) => {
          let t = { y: 0.9 * e.h, x: 0.3 * e.w };
          return {
            SPEED: t,
            GRAVITY: 1100,
            DRAG: 0.92,
            Y_POS: 110,
            MAX_PARTICLES: 600,
          };
        };
      t.Z = (e) => {
        let {
            SPEED: t,
            GRAVITY: n,
            DRAG: l,
            Y_POS: o,
            MAX_PARTICLES: d,
          } = c(e),
          f = r.useRef([]);
        return {
          update: (t) => {
            let r = [];
            if (
              (f.current.forEach((i, a) => {
                (i.position.x -= i.velocity.x * t),
                  (i.position.y -= i.velocity.y * t),
                  (i.velocity.x *= l ** t),
                  (i.velocity.y *= l ** t),
                  (i.velocity.y -= n * t),
                  i.position.y > e.h && r.push(a);
              }),
              r.length > 0)
            ) {
              let e = f.current.filter((e, t) => !r.includes(t));
              f.current = e;
            }
          },
          draw: (t) => {
            t.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              f.current.forEach((e) => {
                var n;
                let { x: r, y: i } = e.position;
                e.scale > 1 && t.setFilter({ blur: s((e.scale - 1) * 3) }),
                  (
                    null === (n = t.assetMap) || void 0 === n
                      ? void 0
                      : n.has(e.key)
                  )
                    ? t.drawImage(
                        e.key,
                        { x: r, y: i },
                        { w: 32 * e.scale, h: 32 * e.scale },
                      )
                    : null != a.ZP.contentHasUnicodeOrEmoji(e.key)
                      ? (t.setFont({ size: 24 * e.scale }),
                        t.drawText(e.key, { x: r, y: i }))
                      : (t.setFont({ size: 24 * e.scale }),
                        t.drawText("\uD83C\uDF89", { x: r, y: i }),
                        u.Z.captureMessage(
                          "Simple Confetti couldn't trigger explosion for ".concat(
                            e.key,
                            ".  It doesn't have an image and seemingly isn't a valid unicode emoji.",
                          ),
                        )),
                  t.setFilter({ blur: 0 });
              });
          },
          emit: (n, r) => {
            if (f.current.length >= d) return;
            let a = { min: e.h / 8, max: e.h / 3 };
            for (let u = 0; u < r; u++)
              f.current.push({
                position: { x: e.w / 2 + (0, i.random)(-50, 50), y: e.h - o },
                velocity: {
                  x: (0, i.random)(-t.x, t.x, !0),
                  y: t.y + (0, i.random)(-a.min, a.max, !0),
                },
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
        a = n(597846),
        u = n(885006),
        s = n(111810),
        c = n(516604),
        l = n(936003);
      let o = () => {
        let e = (0, u.Z)(),
          t = i.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          n = (0, c.Z)(t, 60);
        return (0, r.jsx)("div", {
          className: l.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, r.jsx)(a.z, {
            size: t,
            drawCallback: (e, t) => {
              n.update(t), n.draw(e);
            },
          }),
        });
      };
      t.default = () =>
        (0, s.kf)("ConfettiCanvasComponent") ? (0, r.jsx)(o, {}) : null;
    },
    516604: function (e, t, n) {
      var r = n(192379),
        i = n(570140),
        a = n(4646),
        u = n(258340),
        s = n(768581),
        c = n(176354);
      t.Z = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          { update: n, draw: l, emit: o } = (0, u.Z)(e),
          d = r.useMemo(() => new a.ZP(), []),
          f = r.useCallback(
            (e) => {
              (e.assetMap = d), l(e);
            },
            [d, l],
          );
        return (
          r.useEffect(() => {
            async function e(e) {
              var n;
              let { emoji: r } = e,
                i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                a =
                  null == r.id
                    ? c.ZP.getURL(r.name)
                    : s.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 64,
                        forcePNG: !0,
                      });
              await d.loadRemoteImage(i, a), o(i, t);
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
//# sourceMappingURL=2253f93e5b649704c944.js.map
