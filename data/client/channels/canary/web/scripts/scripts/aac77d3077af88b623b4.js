"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57961"],
  {
    8048: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return o;
          },
        }),
        i(312677);
      var n = i(512722),
        r = i.n(n),
        a = i(839766);
      function s(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      let h =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope;
      class o {
        setState(t, e) {
          null != e &&
            (!t && e !== this.currentFrame && this.draw(e),
            (this.currentFrame = e)),
            t && !this.animate && this.resumeAnimation(),
            (this.animate = t),
            this.scheduleOrCancelTick();
        }
        setVisibility(t) {
          let e = this.visible;
          (this.visible = t),
            this.visible && !e && this.resumeAnimation(),
            this.scheduleOrCancelTick();
        }
        resumeAnimation() {
          this.currentFrameTime = performance.now();
        }
        clear() {
          this.canvasContext.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height,
          );
        }
        draw(t) {
          return (
            null != this.animation &&
            (this.clear(),
            this.animation.drawInto(
              this.canvasContext,
              t,
              this.canvas.width,
              this.canvas.height,
            ),
            !0)
          );
        }
        drop() {
          (this.animate = !1),
            this.scheduleOrCancelTick(),
            a.Z.drop(this.key),
            (this.animation = null),
            (this.dropped = !0);
        }
        scheduleOrCancelTick() {
          !this.dropped &&
            (this.hasInitialFrame
              ? this.requestAnimationFrame(
                  this.animate && this.visible ? this.onAnimationTick : null,
                )
              : this.requestAnimationFrame(this.onInitialAnimationTick));
        }
        requestAnimationFrame(t) {
          null != t &&
            null == this.requestAnimationFrameId &&
            (this.requestAnimationFrameId = requestAnimationFrame(t)),
            null != t &&
              null != this.requestAnimationFrameId &&
              (cancelAnimationFrame(this.requestAnimationFrameId),
              (this.requestAnimationFrameId = requestAnimationFrame(t))),
            null == t &&
              null != this.requestAnimationFrameId &&
              (cancelAnimationFrame(this.requestAnimationFrameId),
              (this.requestAnimationFrameId = null));
        }
        constructor({
          canvas: t,
          id: e,
          assetUrl: i,
          assetData: n,
          isVisible: o,
          shouldAnimate: l,
          onInitialDraw: c,
          onError: u,
        }) {
          s(this, "canvas", void 0),
            s(this, "canvasContext", void 0),
            s(this, "animation", null),
            s(this, "dropped", void 0),
            s(this, "currentFrame", void 0),
            s(this, "currentFrameTime", void 0),
            s(this, "frameDuration", void 0),
            s(this, "key", void 0),
            s(this, "animate", void 0),
            s(this, "visible", void 0),
            s(this, "requestAnimationFrameId", void 0),
            s(this, "hasInitialFrame", void 0),
            s(this, "onInitialDraw", void 0),
            s(this, "onError", void 0),
            s(this, "onInitialAnimationTick", (t) => {
              this.requestAnimationFrameId = null;
              let e = performance.now();
              if ((e - t < 30 || h) && this.draw(0)) {
                var i;
                this.resumeAnimation(),
                  null === (i = this.onInitialDraw) ||
                    void 0 === i ||
                    i.call(this),
                  (this.hasInitialFrame = !0);
              }
              this.scheduleOrCancelTick();
            }),
            s(this, "onAnimationTick", (t) => {
              this.requestAnimationFrameId = null;
              let e = performance.now(),
                i = Math.floor(
                  ((h ? e : t) - this.currentFrameTime) / this.frameDuration,
                );
              i > 0 &&
                ((e - t < 12 || h) &&
                  (this.draw(this.currentFrame), (this.currentFrame += i)),
                (this.currentFrameTime += i * this.frameDuration)),
                this.scheduleOrCancelTick();
            });
          let m = t.getContext("2d");
          r()(null != m, "couldn't get canvas 2d context."),
            (this.canvas = t),
            (this.canvasContext = m),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1e3),
            (this.animate = l),
            (this.visible = o),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = c),
            (this.onError = u),
            (this.key = ""
              .concat(e, ":")
              .concat(t.width, ":")
              .concat(t.height)),
            a.Z.create(this.key, t.width, t.height, i, n)
              .then((t) => {
                null != t &&
                  (this.dropped
                    ? a.Z.drop(this.key)
                    : ((this.animation = t),
                      (this.frameDuration = 1e3 / t.frameRate),
                      this.scheduleOrCancelTick()));
              })
              .catch((t) => {
                null == u || u();
              });
        }
      }
    },
    250906: function (t, e, i) {
      function n(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      i.d(e, {
        Z: function () {
          return r;
        },
      }),
        i(47120),
        i(411104);
      class r {
        drawInto(t, e, i, n) {
          (e %= this.frameCount), this.requireFrame(e);
          let [r, s, h, o] = a(
            e,
            this.frameWidth,
            this.frameHeight,
            this.cells,
          );
          t.drawImage(this.canvas, r, s, h, o, 0, 0, i, n);
        }
        drop() {
          var t;
          null === (t = this.native) || void 0 === t || t.drop(),
            (this.native = null);
        }
        requireFrame(t) {
          if (null != this.native)
            !this.renderedFrames.has(t) &&
              (this.paint(t), this.renderedFrames.add(t)),
              this.renderedFrames.size === this.frameCount && this.drop();
        }
        paint(t) {
          if (null != this.native) {
            var e;
            let i = new ImageData(
                this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                this.frameWidth,
                this.frameHeight,
              ),
              [n, r, s, h] = a(
                t,
                this.frameWidth,
                this.frameHeight,
                this.cells,
              );
            null === (e = this.context) ||
              void 0 === e ||
              e.putImageData(i, n, r, 0, 0, s, h);
          }
        }
        constructor(t, e, i, r) {
          n(this, "key", void 0),
            n(this, "canvas", void 0),
            n(this, "context", void 0),
            n(this, "cells", void 0),
            n(this, "native", void 0),
            n(this, "renderedFrames", void 0),
            n(this, "frameWidth", void 0),
            n(this, "frameHeight", void 0),
            n(this, "frameRate", void 0),
            n(this, "frameCount", void 0);
          let [a, s, h] = (function (t, e, i) {
            let n = Math.ceil(Math.sqrt(i));
            return [n, n * t, n * e];
          })(i, r, t.frames);
          if (
            ((this.key = e),
            (this.canvas = (function (t, e) {
              if ("function" == typeof OffscreenCanvas)
                return new OffscreenCanvas(t, e);
              let i = document.createElement("canvas");
              return (i.width = t), (i.height = e), i;
            })(s, h)),
            (this.context = this.canvas.getContext("2d")),
            (this.cells = a),
            (this.native = t),
            (this.renderedFrames = new Set()),
            (this.frameWidth = i),
            (this.frameHeight = r),
            (this.frameRate = t.fps),
            (this.frameCount = t.frames),
            null == this.context)
          )
            throw Error("couldn't create 2d canvas context.");
        }
      }
      function a(t, e, i, n) {
        let r = Math.floor(t / n) * e;
        return [r, (t % n) * i, e, i];
      }
    },
    839766: function (t, e, i) {
      i(47120), i(653041), i(411104);
      var n = i(250906),
        r = i(86104);
      function a(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      async function s(t, e, i, a, s) {
        let h = s;
        if (null == h) {
          let t = await fetch(a);
          if (!t.ok) throw Error("Error fetching sticker at ".concat(a));
          h = await t.text();
        }
        if (null == h) return null;
        await (0, r.j)();
        let o = new r.Z(h);
        return new n.Z(o, t, e, i);
      }
      e.Z = new (class t {
        create(t, e, i, n, r) {
          let a =
            !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
          return this.getCached(t).then((h) => {
            var o;
            if (
              (this.referenceCounts.set(
                t,
                (null !== (o = this.referenceCounts.get(t)) && void 0 !== o
                  ? o
                  : 0) + 1,
              ),
              h)
            )
              return h;
            let l = { key: t, promise: s(t, e, i, n, r) };
            return (
              a &&
                (this.entries.push(l),
                l.promise
                  .then((e) => (null == e && this.removeEntry(t), e))
                  .catch((e) => this.removeEntry(t)),
                this.entries.length > 50 && this.removeEntryAt(0)),
              l.promise
            );
          });
        }
        drop(t) {
          this.removeEntry(t);
        }
        getCached(t) {
          let e = this.entries.findIndex((e) => e.key === t);
          if (e >= 0) {
            let t = this.entries[e];
            return (
              this.entries.splice(e, 1),
              this.entries.push(t),
              t.promise.then((t) => (null == t && this.removeEntryAt(e), t))
            );
          }
          return Promise.resolve(null);
        }
        removeEntry(t) {
          let e = this.entries.findIndex((e) => e.key === t);
          if (!(e >= 0)) return null;
          this.removeEntryAt(e);
        }
        removeEntryAt(t) {
          let e = this.entries[t],
            i = this.referenceCounts.get(e.key);
          return null != i && i > 1
            ? (this.referenceCounts.set(e.key, i - 1), null)
            : (this.entries.splice(t, 1),
              this.referenceCounts.delete(e.key),
              e.promise.then((t) => (null == t ? void 0 : t.drop())),
              e);
        }
        constructor() {
          a(this, "entries", void 0),
            a(this, "referenceCounts", void 0),
            (this.entries = []),
            (this.referenceCounts = new Map());
        }
      })();
    },
    86104: function (t, e, i) {
      let n, r, a, s, h, o, l, c, u;
      i.d(e, {
        Z: function () {
          return g;
        },
        j: function () {
          return p;
        },
      }),
        i(66153),
        i(970173),
        i(520712),
        i(268111),
        i(941497),
        i(32026),
        i(480839),
        i(744285),
        i(492257),
        i(873817),
        i(411104);
      var m = i(512722),
        d = i.n(m),
        f = i(170830);
      let v = 409600,
        p = (0, f.G)(async () => {
          let t = await Promise.all([i.e("91789"), i.e("43903")]).then(
              i.bind(i, 241441),
            ),
            e = await t.default();
          (a = e.cwrap("lottie_create", "number", ["string"])),
            (s = e._lottie_destroy),
            (h = e._lottie_draw_into_bgra),
            (o = e._lottie_draw_into_rgba),
            (l = e._lottie_frame_count),
            (c = e._lottie_frame_rate),
            (u = e._memory_create),
            (n = e),
            (r = u(v));
        });
      function w(t, e) {
        return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
      }
      class g {
        get fps() {
          return c(this.native);
        }
        get frames() {
          return l(this.native);
        }
        get_bgra(t, e, i) {
          return (
            d()(e <= 320, "width exceeds static allocation."),
            d()(i <= 320, "height exceeds static allocation."),
            h(this.native, r, t, e, i),
            w(e, i)
          );
        }
        get_rgba(t, e, i) {
          return (
            d()(e <= 320, "width exceeds static allocation."),
            d()(i <= 320, "height exceeds static allocation."),
            o(this.native, r, t, e, i),
            w(e, i)
          );
        }
        drop() {
          s(this.native);
        }
        constructor(t) {
          var e, i, n;
          if (
            ((e = this),
            (n = void 0),
            (i = "native") in e
              ? Object.defineProperty(e, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[i] = n),
            (this.native = a(t)),
            0 === this.native)
          )
            throw Error("couldn't create wasm lottie. potentially bad json.");
        }
      }
    },
  },
]);
//# sourceMappingURL=aac77d3077af88b623b4.js.map
