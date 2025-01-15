"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    597846: function (e, t, n) {
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(658312),
        u = n(503082);
      let o = (e) => {
        let {
            drawCallback: t,
            size: n,
            fps: o = 60,
            useOffscreen: c = !0,
            playing: l = !0,
          } = e,
          s = i.useRef(null),
          d = i.useRef();
        i.useEffect(() => {
          null != d.current && d.current.setSize(n);
        }, [n]),
          i.useEffect(() => {
            null != d.current && d.current.setSize(n);
          }, [n]),
          i.useEffect(() => {
            if (null != s.current) {
              let e = new u.Z(s.current);
              (d.current = e), c && e.setupOffscreenCanvas();
            }
          }, [s, c, n]);
        let {
          ticking: f,
          stop: h,
          reset: w,
        } = (0, a.Z)((e) => {
          if (null != d.current) {
            let { width: n, height: r } = d.current.canvas;
            d.current.clearRect({ x: 0, y: 0, w: n, h: r }),
              t(d.current, e / 1e3);
          }
        }, 1e3 / o);
        return (
          i.useEffect(() => {
            l && !f.current && w(), !l && h();
          }, [l, w, h, f]),
          (0, r.jsx)("div", { children: (0, r.jsx)("canvas", { ref: s }) })
        );
      };
    },
    258340: function (e, t, n) {
      n(653041);
      var r = n(192379),
        i = n(392711),
        a = n(633302),
        u = n(960048);
      let o = (e) => Math.round(4 * e) / 4,
        c = (e) => {
          let t = { y: 0.9 * e.h, x: 0.3 * e.w };
          return {
            SPEED: t,
            GRAVITY: 1100,
            DRAG: 0.94,
            Y_POS: 110,
            MAX_PARTICLES: 600,
          };
        };
      t.Z = (e) => {
        let {
            SPEED: t,
            GRAVITY: n,
            DRAG: l,
            Y_POS: s,
            MAX_PARTICLES: d,
          } = c(e),
          f = r.useRef([]),
          h = r.useRef(!1);
        return {
          update: (t) => {
            let r = [];
            if (
              (f.current.forEach((i, a) => {
                (i.position.x -= i.velocity.x * t),
                  (i.position.y -= i.velocity.y * t),
                  (i.velocity.x *= l ** t),
                  (i.velocity.y *= l ** t),
                  (i.rotation += i.angularVelocity * t),
                  (i.velocity.y -= n * t),
                  i.position.y > e.h && r.push(a);
              }),
              r.length > 0)
            ) {
              let e = f.current.filter((e, t) => !r.includes(t));
              (f.current = e), 0 === f.current.length && (h.current = !1);
            }
          },
          draw: (t) => {
            t.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              f.current.forEach((e) => {
                var n;
                let { x: r, y: i } = e.position;
                if (
                  (e.scale > 1 && t.setFilter({ blur: o((e.scale - 1) * 2) }),
                  null === (n = t.assetMap) || void 0 === n
                    ? void 0
                    : n.has(e.key))
                ) {
                  let n = { w: 32 * e.scale, h: 32 * e.scale },
                    a = { x: r + n.w / 2, y: i + n.h / 2 };
                  t.rotateAroundOriginAndDraw(a, e.rotation, () =>
                    t.drawImage(e.key, { x: 0, y: 0 }, n),
                  );
                } else {
                  let n = a.ZP.contentHasUnicodeOrEmoji(e.key),
                    o = 24 * e.scale,
                    c = { x: r + o / 2, y: i + o / 2 };
                  null != n
                    ? (t.setFont({ size: o }),
                      t.rotateAroundOriginAndDraw(c, e.rotation, () =>
                        t.drawText(e.key, { x: 0, y: 0 }),
                      ))
                    : (t.setFont({ size: o }),
                      t.rotateAroundOriginAndDraw(c, e.rotation, () =>
                        t.drawText("\uD83C\uDF89", { x: 0, y: 0 }),
                      ),
                      u.Z.captureMessage(
                        "Simple Confetti couldn't trigger explosion for ".concat(
                          e.key,
                          ".  It doesn't have an image and seemingly isn't a valid unicode emoji.",
                        ),
                      ));
                }
                t.setFilter({ blur: 0 });
              });
          },
          emit: (n, r) => {
            if (f.current.length >= d) return;
            let a = { min: e.h / 8, max: e.h / 3 };
            for (let u = 0; u < r; u++) {
              let r = {
                  x: (0, i.random)(-t.x, t.x, !0),
                  y: t.y + (0, i.random)(-a.min, a.max, !0),
                },
                u = (0, i.random)(0, 30),
                o =
                  Math.atan2(
                    -t.y - (0, i.random)(-a.min, a.max, !0),
                    (0, i.random)(-t.x, t.x, !0),
                  ) * (0, i.random)(-50, 50);
              f.current.push({
                key: n,
                position: { x: e.w / 2 + (0, i.random)(-50, 50), y: e.h - s },
                velocity: r,
                scale: (0, i.random)(0.8, 2),
                rotation: u,
                angularVelocity: o,
              }),
                f.current.sort((e, t) => e.scale - t.scale);
            }
            h.current = !0;
          },
          shouldTick: h,
        };
      };
    },
    420541: function (e, t, n) {
      n.r(t);
      var r = n(200651),
        i = n(192379),
        a = n(597846),
        u = n(885006),
        o = n(111810),
        c = n(516604),
        l = n(936003);
      let s = () => {
        let e = (0, u.Z)(),
          t = i.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          n = (0, c.Z)(t, 60);
        return (0, r.jsx)("div", {
          className: l.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, r.jsx)(a.z, {
            playing: n.playing,
            size: t,
            drawCallback: (e, t) => {
              n.update(t), n.draw(e);
            },
          }),
        });
      };
      t.default = () =>
        (0, o.kf)("ConfettiCanvasComponent") ? (0, r.jsx)(s, {}) : null;
    },
    516604: function (e, t, n) {
      n(47120);
      var r = n(192379),
        i = n(570140),
        a = n(4646),
        u = n(258340),
        o = n(768581),
        c = n(176354);
      t.Z = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          { update: n, draw: l, emit: s, shouldTick: d } = (0, u.Z)(e),
          f = r.useMemo(() => new a.ZP(), []),
          h = r.useCallback(
            (e) => {
              (e.assetMap = f), l(e);
            },
            [f, l],
          ),
          [w, m] = r.useState(!1),
          v = r.useRef();
        return (
          r.useEffect(() => {
            async function e(e) {
              var n;
              let { emoji: r } = e,
                i = null !== (n = r.id) && void 0 !== n ? n : r.name,
                a =
                  null == r.id
                    ? c.ZP.getURL(r.name)
                    : o.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 64,
                        forcePNG: !0,
                      });
              await f.loadRemoteImage(i, a), s(i, t), m(!0);
            }
            return (
              i.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e),
              () => i.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
            );
          }),
          r.useEffect(() => {
            let e = () => {
              d.current
                ? (v.current = setTimeout(e, 1e3))
                : (m(!1), (v.current = null));
            };
            return (
              (v.current = setTimeout(e, 1e3)),
              () => {
                null != v.current && clearTimeout(v.current);
              }
            );
          }, [w, d]),
          { update: n, draw: h, playing: w }
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
//# sourceMappingURL=2d547d0ed74098b2e8a4.js.map
