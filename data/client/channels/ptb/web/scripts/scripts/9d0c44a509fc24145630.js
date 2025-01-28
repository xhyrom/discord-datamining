"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    565568: function (e, t, r) {
      r(250668)("Uint16", function (e) {
        return function (t, r, n) {
          return e(this, t, r, n);
        };
      });
    },
    597846: function (e, t, r) {
      r.d(t, {
        z: function () {
          return u;
        },
      });
      var n = r(200651),
        a = r(192379),
        i = r(658312),
        l = r(503082);
      let c = { minInterval: 1e3 / 60 },
        u = (e) => {
          let {
              drawCallback: t,
              size: r,
              fps: u = 60,
              useOffscreen: s = !0,
              playing: o = !0,
              useClockOptions: d = {},
            } = e,
            f = a.useMemo(
              () => Object.assign({ minInterval: 1e3 / u }, c, d),
              [u, d],
            ),
            m = a.useRef(null),
            h = a.useRef();
          a.useEffect(() => {
            null != h.current && h.current.setSize(r);
          }, [r]),
            a.useEffect(() => {
              if (null != m.current) {
                let e = new l.Z(m.current);
                (h.current = e), s && e.setupOffscreenCanvas();
              }
            }, [m, s, r]);
          let {
            ticking: p,
            stop: y,
            reset: w,
          } = (0, i.Z)((e) => {
            if (null != h.current) {
              let { width: r, height: n } = h.current.canvas;
              h.current.clearRect({ x: 0, y: 0, w: r, h: n }),
                t(h.current, e / 1e3);
            }
          }, f);
          return (
            a.useEffect(() => {
              o && !p.current && w(), !o && y();
            }, [o, w, y, p]),
            (0, n.jsx)("div", { children: (0, n.jsx)("canvas", { ref: m }) })
          );
        };
    },
    258340: function (e, t, r) {
      r(47120),
        r(518263),
        r(970173),
        r(520712),
        r(268111),
        r(941497),
        r(32026),
        r(480839),
        r(744285),
        r(492257),
        r(873817),
        r(565568);
      var n,
        a,
        i = r(192379),
        l = r(392711),
        c = r(633302),
        u = r(960048),
        s = r(709054),
        o = r(693824);
      ((a = n || (n = {}))[(a.FREE = 0)] = "FREE"),
        (a[(a.ACTIVE = 1)] = "ACTIVE");
      let d = (e) => Math.round(4 * e) / 4,
        f = (e) => {
          let [t, r] = i.useState({ y: 0.9 * e.h, x: 0.3 * e.w }),
            [n, a] = i.useState(1400),
            [l, c] = i.useState(0.94),
            [u, s] = i.useState(110),
            [o, d] = i.useState(30),
            [f, m] = i.useState(900),
            [h, p] = i.useState(60);
          i.useEffect(() => {
            r({ y: 0.9 * e.h, x: 0.3 * e.w });
          }, [e.h, e.w]);
          let y = i.useCallback(() => {
            let e;
            return 60 === h
              ? (p(() => 45), !0)
              : (d((t) => (e = Math.max(3, Math.floor(0.75 * t)))),
                m((e) => Math.max(6, Math.floor(0.8 * e))),
                (null != e ? e : 30) < 16.875 && p(() => 28),
                !0);
          }, [h, 30]);
          return {
            SPEED: t,
            GRAVITY: n,
            DRAG: l,
            Y_POS: u,
            PARTICLES_PER_EMISSION: o,
            MAX_PARTICLES: f,
            tickRate: 1e3 / h,
            improvePerformance: y,
          };
        },
        m = (e) => {
          let t = e.particles.current,
            r = e.particleStates.current;
          e.sortedParticles.current.sort((e, n) => {
            let a = r[e],
              i = r[n];
            return a !== i ? a - i : 1 === a ? t[e].scale - t[n].scale : 0;
          });
        };
      t.Z = (e) => {
        let {
            SPEED: t,
            GRAVITY: r,
            DRAG: n,
            Y_POS: a,
            PARTICLES_PER_EMISSION: h,
            MAX_PARTICLES: p,
            tickRate: y,
            improvePerformance: w,
          } = f(e),
          v = {
            particles: i.useRef(Array(p)),
            particleStates: i.useRef(new Uint8Array(p)),
            sortedParticles: i.useRef(
              new Uint16Array(Array.from({ length: p }, (e, t) => t)),
            ),
            freeParticles: i.useRef(p),
            activeParticles: i.useRef(0),
          },
          x = i.useRef(!1);
        return {
          update: (t) => {
            if (0 === v.activeParticles.current) return;
            let a = v.particleStates.current,
              i = v.particles.current;
            for (let l = 0; l < p; l++) {
              if (0 === a[l]) continue;
              let c = i[l];
              (c.position.x -= c.velocity.x * t),
                (c.position.y -= c.velocity.y * t),
                (c.velocity.x *= n ** t),
                (c.velocity.y *= n ** t),
                (c.rotation += c.angularVelocity * t),
                (c.velocity.y -= r * t),
                c.position.y > e.h &&
                  ((v.particleStates.current[l] = 0),
                  (v.activeParticles.current -= 1),
                  (v.freeParticles.current += 1));
            }
            0 === v.activeParticles.current && (x.current = !1);
          },
          draw: (t) => {
            t.clearRect({ x: 0, y: 0, w: e.w, h: e.h });
            let r = v.particleStates.current,
              n = v.particles.current,
              a = v.sortedParticles.current;
            for (let e = 0; e < p; e++) {
              var i;
              let l = a[e];
              if (0 === r[l]) continue;
              let s = n[l],
                { x: f, y: m } = s.position;
              if (
                (s.scale > 1 && t.setFilter({ blur: d((s.scale - 1) * 1.5) }),
                null === (i = t.assetMap) || void 0 === i
                  ? void 0
                  : i.has(s.key))
              ) {
                let e = { w: 32 * s.scale, h: 32 * s.scale },
                  r = { x: f + e.w / 2, y: m + e.h / 2 };
                t.rotateAroundOriginAndDraw(r, s.rotation, () =>
                  t.drawImage(s.key, { x: 0, y: 0 }, e, {
                    fillMode: o.JU.Contain,
                  }),
                );
              } else {
                let e = c.ZP.contentHasUnicodeOrEmoji(s.key),
                  r = 24 * s.scale,
                  n = { x: f + r / 2, y: m + r / 2 };
                null != e
                  ? (t.setFont({ size: r }),
                    t.rotateAroundOriginAndDraw(n, s.rotation, () =>
                      t.drawText(s.key, { x: 0, y: 0 }),
                    ))
                  : (t.setFont({ size: r }),
                    t.rotateAroundOriginAndDraw(n, s.rotation, () =>
                      t.drawText("\uD83C\uDF89", { x: 0, y: 0 }),
                    ),
                    u.Z.captureMessage(
                      "Simple Confetti couldn't trigger explosion for ".concat(
                        s.key,
                        ".  It doesn't have an image and seemingly isn't a valid unicode emoji.",
                      ),
                    ));
              }
              t.setFilter({ blur: 0 });
            }
          },
          emit: (r, n) => {
            s.default.isProbablyAValidSnowflake(r);
            if (v.freeParticles.current < h / 2) return;
            let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
              c = { min: e.h / 8, max: e.h / 3 },
              u = n.y < 0.66 * e.h ? Math.max(0.2, n.y / (0.66 * e.h)) : 1,
              o = 1 + (1 - u);
            for (let s = 0; s < h; s++) {
              let s, d;
              s = i
                ? {
                    x: (0, l.random)(-t.x, t.x, !0),
                    y: t.y + (0, l.random)(-c.min, c.max, !0),
                  }
                : {
                    x: (0, l.random)(-t.x * o, t.x * o, !0),
                    y: t.y * u + (0, l.random)(-c.min, c.max, !0),
                  };
              let f = (0, l.random)(0, 30),
                h =
                  Math.atan2(
                    -t.y - (0, l.random)(-c.min, c.max, !0),
                    (0, l.random)(-t.x, t.x, !0),
                  ) * (0, l.random)(-50, 50);
              if (i)
                d = {
                  x: e.w / 2 + (0, l.random)(-50, 50),
                  y: e.h - a + (0, l.random)(-50, 50),
                };
              else {
                let e = n.h / 4,
                  t = n.h / 4;
                d = {
                  x: n.x + n.w / 2 + (0, l.random)(-t, t),
                  y: n.y + n.h / 2 + (0, l.random)(-e, e),
                };
              }
              for (let e = 0; e < p; e += 1)
                if (0 === v.particleStates.current[e]) {
                  (v.particles.current[e] = {
                    key: r,
                    position: d,
                    velocity: s,
                    scale: (0, l.random)(0.8, 2),
                    rotation: f,
                    angularVelocity: h,
                  }),
                    (v.particleStates.current[e] = 1),
                    (v.freeParticles.current -= 1),
                    (v.activeParticles.current += 1);
                  break;
                }
              m(v);
            }
            x.current = !0;
          },
          tickRate: y,
          improvePerformance: w,
          shouldTick: x,
        };
      };
    },
    420541: function (e, t, r) {
      r.r(t);
      var n = r(200651),
        a = r(192379),
        i = r(597846),
        l = r(885006),
        c = r(111810),
        u = r(516604),
        s = r(936003);
      let o = () => {
        let e = (0, l.Z)(),
          t = a.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          r = (0, u.Z)(t);
        return (0, n.jsx)("div", {
          className: s.canvasWrapper,
          id: "simple-confetti-canvas",
          children: (0, n.jsx)(i.z, {
            playing: r.playing,
            size: t,
            useClockOptions: {
              minInterval: r.tickRate,
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
        (0, c.kf)("ConfettiCanvasComponent") ? (0, n.jsx)(o, {}) : null;
    },
    516604: function (e, t, r) {
      r(47120);
      var n = r(192379),
        a = r(570140),
        i = r(4646),
        l = r(258340),
        c = r(768581),
        u = r(176354),
        s = r(823961);
      t.Z = (e) => {
        let {
            update: t,
            draw: r,
            emit: o,
            tickRate: d,
            improvePerformance: f,
            shouldTick: m,
          } = (0, l.Z)(e),
          h = n.useMemo(() => new i.ZP(), []),
          p = n.useCallback(
            (e) => {
              (e.assetMap = h), r(e);
            },
            [h, r],
          ),
          [y, w] = n.useState(!1),
          v = n.useRef(),
          x = n.useRef();
        return (
          n.useEffect(() => {
            async function e(e) {
              var t;
              let { emoji: r, boundingRect: n } = e,
                i = null !== (t = r.id) && void 0 !== t ? t : r.name,
                l =
                  null == r.id
                    ? u.ZP.getURL(r.name)
                    : c.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 64,
                        forcePNG: !0,
                      });
              await h.loadRemoteImage(i, l),
                o(i, n),
                w(!0),
                null != x.current && clearTimeout(x.current),
                (x.current = setTimeout(() => {
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
          }, [h, o]),
          n.useEffect(
            () => () => {
              null != x.current && clearTimeout(x.current);
            },
            [],
          ),
          n.useEffect(() => {
            let e = () => {
              m.current
                ? (v.current = setTimeout(e, 1e3))
                : (w(!1), (v.current = null));
            };
            return (
              (v.current = setTimeout(e, 1e3)),
              () => {
                null != v.current && clearTimeout(v.current);
              }
            );
          }, [y, m]),
          { update: t, draw: p, tickRate: d, improvePerformance: f, playing: y }
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
//# sourceMappingURL=9d0c44a509fc24145630.js.map
