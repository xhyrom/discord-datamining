"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81465"],
  {
    597846: function (e, t, n) {
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(200651),
        i = n(192379),
        a = n(658312),
        u = n(503082);
      let l = (e) => {
        let {
            drawCallback: t,
            size: n,
            fps: l = 60,
            useOffscreen: c = !0,
            playing: o = !0,
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
          reset: m,
        } = (0, a.Z)((e) => {
          if (null != d.current) {
            let { width: n, height: r } = d.current.canvas;
            d.current.clearRect({ x: 0, y: 0, w: n, h: r }),
              t(d.current, e / 1e3);
          }
        }, 1e3 / l);
        return (
          i.useEffect(() => {
            o && !f.current && m(), !o && h();
          }, [o, m, h, f]),
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
      let l = (e) => Math.round(4 * e) / 4,
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
            DRAG: o,
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
                  (i.velocity.x *= o ** t),
                  (i.velocity.y *= o ** t),
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
                  (e.scale > 1 && t.setFilter({ blur: l((e.scale - 1) * 2) }),
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
                    l = 24 * e.scale,
                    c = { x: r + l / 2, y: i + l / 2 };
                  null != n
                    ? (t.setFont({ size: l }),
                      t.rotateAroundOriginAndDraw(c, e.rotation, () =>
                        t.drawText(e.key, { x: 0, y: 0 }),
                      ))
                    : (t.setFont({ size: l }),
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
          emit: (n, r, a) => {
            if (f.current.length >= d) return;
            let u = 0 === a.x && 0 === a.y && 0 === a.w && 0 === a.h,
              l = { min: e.h / 8, max: e.h / 3 };
            for (let c = 0; c < r; c++) {
              let r;
              let c = {
                  x: (0, i.random)(-t.x, t.x, !0),
                  y: t.y + (0, i.random)(-l.min, l.max, !0),
                },
                o = (0, i.random)(0, 30),
                d =
                  Math.atan2(
                    -t.y - (0, i.random)(-l.min, l.max, !0),
                    (0, i.random)(-t.x, t.x, !0),
                  ) * (0, i.random)(-50, 50);
              if (u)
                r = {
                  x: e.w / 2 + (0, i.random)(-50, 50),
                  y: e.h - s + (0, i.random)(-50, 50),
                };
              else {
                let e = a.h / 4,
                  t = a.h / 4;
                r = {
                  x: a.x + a.w / 2 + (0, i.random)(-t, t),
                  y: a.y + a.h / 2 + (0, i.random)(-e, e),
                };
              }
              f.current.push({
                key: n,
                position: r,
                velocity: c,
                scale: (0, i.random)(0.8, 2),
                rotation: o,
                angularVelocity: d,
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
        l = n(111810),
        c = n(516604),
        o = n(730123);
      let s = () => {
        let e = (0, u.Z)(),
          t = i.useMemo(() => ({ w: e.width, h: e.height }), [e]),
          n = (0, c.Z)(t, 60);
        return (0, r.jsx)("div", {
          className: o.canvasWrapper,
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
        (0, l.kf)("ConfettiCanvasComponent") ? (0, r.jsx)(s, {}) : null;
    },
    516604: function (e, t, n) {
      n(47120);
      var r = n(192379),
        i = n(570140),
        a = n(4646),
        u = n(258340),
        l = n(768581),
        c = n(176354),
        o = n(823961);
      t.Z = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          { update: n, draw: s, emit: d, shouldTick: f } = (0, u.Z)(e),
          h = r.useMemo(() => new a.ZP(), []),
          m = r.useCallback(
            (e) => {
              (e.assetMap = h), s(e);
            },
            [h, s],
          ),
          [w, y] = r.useState(!1),
          p = r.useRef(),
          v = r.useRef();
        return (
          r.useEffect(() => {
            async function e(e) {
              var n;
              let { emoji: r, boundingRect: a } = e,
                u = null !== (n = r.id) && void 0 !== n ? n : r.name,
                s =
                  null == r.id
                    ? c.ZP.getURL(r.name)
                    : l.ZP.getEmojiURL({
                        id: r.id,
                        animated: !1,
                        size: 64,
                        forcePNG: !0,
                      });
              await h.loadRemoteImage(u, s),
                d(u, t, a),
                y(!0),
                null != v.current && clearTimeout(v.current),
                (v.current = setTimeout(() => {
                  let e = o.Z.lastConfettiTrigger;
                  (null == e || Date.now() - e > 5e3) &&
                    i.Z.dispatch({
                      type: "POTIONS_SET_CONFETTI_MODE",
                      enabled: !1,
                    });
                }, 5e3));
            }
            return (
              i.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e),
              () => i.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
            );
          }, [h, d, t]),
          r.useEffect(
            () => () => {
              null != v.current && clearTimeout(v.current);
            },
            [],
          ),
          r.useEffect(() => {
            let e = () => {
              f.current
                ? (p.current = setTimeout(e, 1e3))
                : (y(!1), (p.current = null));
            };
            return (
              (p.current = setTimeout(e, 1e3)),
              () => {
                null != p.current && clearTimeout(p.current);
              }
            );
          }, [w, f]),
          { update: n, draw: m, playing: w }
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
    730123: function (e, t, n) {
      e.exports = { canvasWrapper: "canvasWrapper_f2053b" };
    },
  },
]);
//# sourceMappingURL=f1134704e2e10f548748.js.map
