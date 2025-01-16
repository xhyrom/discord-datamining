"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    597846: function (e, t, r) {
      r.d(t, {
        z: function () {
          return o;
        },
      });
      var n = r(200651),
        a = r(192379),
        i = r(658312),
        u = r(503082);
      let l = { minInterval: 1e3 / 60 },
        o = (e) => {
          let {
              drawCallback: t,
              size: r,
              fps: o = 60,
              useOffscreen: s = !0,
              playing: c = !0,
              useClockOptions: d = {},
            } = e,
            f = a.useMemo(
              () => Object.assign({ minInterval: 1e3 / o }, l, d),
              [o, d],
            ),
            m = a.useRef(null),
            h = a.useRef();
          a.useEffect(() => {
            null != h.current && h.current.setSize(r);
          }, [r]),
            a.useEffect(() => {
              null != h.current && h.current.setSize(r);
            }, [r]),
            a.useEffect(() => {
              if (null != m.current) {
                let e = new u.Z(m.current);
                (h.current = e), s && e.setupOffscreenCanvas();
              }
            }, [m, s, r]);
          let {
            ticking: w,
            stop: p,
            reset: y,
          } = (0, i.Z)((e) => {
            if (null != h.current) {
              let { width: r, height: n } = h.current.canvas;
              h.current.clearRect({ x: 0, y: 0, w: r, h: n }),
                t(h.current, e / 1e3);
            }
          }, f);
          return (
            a.useEffect(() => {
              c && !w.current && y(), !c && p();
            }, [c, y, p, w]),
            (0, n.jsx)("div", { children: (0, n.jsx)("canvas", { ref: m }) })
          );
        };
    },
    258340: function (e, t, r) {
      r(47120), r(653041);
      var n = r(192379),
        a = r(392711),
        i = r(633302),
        u = r(960048),
        l = r(709054);
      let o = (e) => Math.round(4 * e) / 4,
        s = (e) => {
          let [t, r] = n.useState({ y: 0.9 * e.h, x: 0.3 * e.w }),
            [a, i] = n.useState(1100),
            [u, l] = n.useState(0.94),
            [o, s] = n.useState(110),
            [c, d] = n.useState(60),
            [f, m] = n.useState(600);
          return (
            n.useEffect(() => {
              r({ y: 0.9 * e.h, x: 0.3 * e.w });
            }, [e.h, e.w]),
            {
              SPEED: t,
              GRAVITY: a,
              DRAG: u,
              Y_POS: o,
              PARTICLES_PER_EMISSION: c,
              MAX_PARTICLES: f,
              improvePerformance: n.useCallback(
                () => (
                  d((e) => Math.max(3, Math.floor(0.75 * e))),
                  m((e) => Math.max(6, Math.floor(0.8 * e))),
                  !0
                ),
                [],
              ),
            }
          );
        };
      t.Z = (e) => {
        let {
            SPEED: t,
            GRAVITY: r,
            DRAG: c,
            Y_POS: d,
            PARTICLES_PER_EMISSION: f,
            MAX_PARTICLES: m,
            improvePerformance: h,
          } = s(e),
          w = n.useRef([]),
          p = n.useRef(!1);
        return {
          update: (t) => {
            let n = [];
            if (
              (w.current.forEach((a, i) => {
                (a.position.x -= a.velocity.x * t),
                  (a.position.y -= a.velocity.y * t),
                  (a.velocity.x *= c ** t),
                  (a.velocity.y *= c ** t),
                  (a.rotation += a.angularVelocity * t),
                  (a.velocity.y -= r * t),
                  a.position.y > e.h && n.push(i);
              }),
              n.length > 0)
            ) {
              let e = w.current.filter((e, t) => !n.includes(t));
              (w.current = e), 0 === w.current.length && (p.current = !1);
            }
          },
          draw: (t) => {
            t.clearRect({ x: 0, y: 0, w: e.w, h: e.h }),
              w.current.forEach((e) => {
                var r;
                let { x: n, y: a } = e.position;
                if (
                  (e.scale > 1 && t.setFilter({ blur: o((e.scale - 1) * 2) }),
                  null === (r = t.assetMap) || void 0 === r
                    ? void 0
                    : r.has(e.key))
                ) {
                  let r = { w: 32 * e.scale, h: 32 * e.scale },
                    i = { x: n + r.w / 2, y: a + r.h / 2 };
                  t.rotateAroundOriginAndDraw(i, e.rotation, () =>
                    t.drawImage(e.key, { x: 0, y: 0 }, r),
                  );
                } else {
                  let r = i.ZP.contentHasUnicodeOrEmoji(e.key),
                    l = 24 * e.scale,
                    o = { x: n + l / 2, y: a + l / 2 };
                  null != r
                    ? (t.setFont({ size: l }),
                      t.rotateAroundOriginAndDraw(o, e.rotation, () =>
                        t.drawText(e.key, { x: 0, y: 0 }),
                      ))
                    : (t.setFont({ size: l }),
                      t.rotateAroundOriginAndDraw(o, e.rotation, () =>
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
          emit: (r, n) => {
            l.default.isProbablyAValidSnowflake(r);
            if (w.current.length >= m) return;
            let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
              u = { min: e.h / 8, max: e.h / 3 };
            for (let l = 0; l < f; l++) {
              let l;
              let o = {
                  x: (0, a.random)(-t.x, t.x, !0),
                  y: t.y + (0, a.random)(-u.min, u.max, !0),
                },
                s = (0, a.random)(0, 30),
                c =
                  Math.atan2(
                    -t.y - (0, a.random)(-u.min, u.max, !0),
                    (0, a.random)(-t.x, t.x, !0),
                  ) * (0, a.random)(-50, 50);
              if (i)
                l = {
                  x: e.w / 2 + (0, a.random)(-50, 50),
                  y: e.h - d + (0, a.random)(-50, 50),
                };
              else {
                let e = n.h / 4,
                  t = n.h / 4;
                l = {
                  x: n.x + n.w / 2 + (0, a.random)(-t, t),
                  y: n.y + n.h / 2 + (0, a.random)(-e, e),
                };
              }
              w.current.push({
                key: r,
                position: l,
                velocity: o,
                scale: (0, a.random)(0.8, 2),
                rotation: s,
                angularVelocity: c,
              }),
                w.current.sort((e, t) => e.scale - t.scale);
            }
            p.current = !0;
          },
          improvePerformance: h,
          shouldTick: p,
        };
      };
    },
    420541: function (e, t, r) {
      r.r(t);
      var n = r(200651),
        a = r(192379),
        i = r(597846),
        u = r(885006),
        l = r(111810),
        o = r(516604),
        s = r(936003);
      let c = () => {
        let e = (0, u.Z)(),
          t = a.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          r = (0, o.Z)(t);
        return (0, n.jsx)("div", {
          className: s.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, n.jsx)(i.z, {
            playing: r.playing,
            size: t,
            useClockOptions: {
              minInterval: 1e3 / 60,
              droppedFramesCallbackThreshold: 10,
              droppedFramesResetTime: 2e3,
              droppedFramesCallback: r.improvePerformance,
            },
            drawCallback: (e, t) => {
              r.update(t), r.draw(e);
            },
          }),
        });
      };
      t.default = () =>
        (0, l.kf)("ConfettiCanvasComponent") ? (0, n.jsx)(c, {}) : null;
    },
    516604: function (e, t, r) {
      r(47120);
      var n = r(192379),
        a = r(570140),
        i = r(4646),
        u = r(258340),
        l = r(768581),
        o = r(176354),
        s = r(823961);
      t.Z = (e) => {
        let {
            update: t,
            draw: r,
            emit: c,
            improvePerformance: d,
            shouldTick: f,
          } = (0, u.Z)(e),
          m = n.useMemo(() => new i.ZP(), []),
          h = n.useCallback(
            (e) => {
              (e.assetMap = m), r(e);
            },
            [m, r],
          ),
          [w, p] = n.useState(!1),
          y = n.useRef(),
          v = n.useRef();
        return (
          n.useEffect(() => {
            async function e(e) {
              var t;
              let { emoji: r, boundingRect: n } = e,
                i = null !== (t = r.id) && void 0 !== t ? t : r.name,
                u =
                  null == r.id
                    ? o.ZP.getURL(r.name)
                    : l.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 64,
                        forcePNG: !0,
                      });
              await m.loadRemoteImage(i, u),
                c(i, n),
                p(!0),
                null != v.current && clearTimeout(v.current),
                (v.current = setTimeout(() => {
                  let e = s.Z.lastConfettiTrigger;
                  (null == e || Date.now() - e > 5e3) &&
                    a.Z.dispatch({
                      type: "POTIONS_SET_CONFETTI_MODE",
                      enabled: !1,
                    });
                }, 5e3));
            }
            return (
              a.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e),
              () => a.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
            );
          }, [m, c]),
          n.useEffect(
            () => () => {
              null != v.current && clearTimeout(v.current);
            },
            [],
          ),
          n.useEffect(() => {
            let e = () => {
              f.current
                ? (y.current = setTimeout(e, 1e3))
                : (p(!1), (y.current = null));
            };
            return (
              (y.current = setTimeout(e, 1e3)),
              () => {
                null != y.current && clearTimeout(y.current);
              }
            );
          }, [w, f]),
          { update: t, draw: h, improvePerformance: d, playing: w }
        );
      };
    },
    885006: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return a;
        },
      }),
        r(47120);
      var n = r(192379);
      function a() {
        var e, t;
        let [r, a] = n.useState({
          width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
          height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080,
        });
        return (
          n.useLayoutEffect(() => {
            function e() {
              let e = window.innerWidth;
              a({ width: e, height: window.innerHeight });
            }
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          r
        );
      }
    },
    936003: function (e, t, r) {
      e.exports = { canvasWrapper: "canvasWrapper_f2053b" };
    },
  },
]);
//# sourceMappingURL=f472b74679ee31d847b2.js.map
