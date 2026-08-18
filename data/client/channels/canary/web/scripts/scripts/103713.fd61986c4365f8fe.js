"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["103713"],
  {
    776310(e, t, n) {
      n.d(t, { Fk: () => V, K_: () => S, OH: () => u, f9: () => F });
      var i = n(582128),
        r = n(132500);
      function a(e, t) {
        var n = e.x,
          i = e.y;
        return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height;
      }
      function o(e, t, n, i) {
        var r = Math.abs(t);
        return 0.5 * e * i * n * r * r * (t > 0 ? -1 : 1);
      }
      var s = (function () {
          function e(e) {
            (this.id = e.id),
              (this.position = e.position),
              (this.velocity = e.velocity),
              (this.rotation = e.rotation),
              (this.dragCoefficient = e.dragCoefficient),
              (this.airResistanceArea = e.airResistanceArea),
              (this.size = e.size),
              (this.opacity = e.opacity),
              (this.spriteX = e.spriteX),
              (this.spriteY = e.spriteY),
              (this.spriteWidth = e.spriteWidth),
              (this.spriteHeight = e.spriteHeight),
              (this._lastUpdatedAt = Date.now());
          }
          return (
            (e.prototype.getNewForces = function (e, t) {
              var n = e.wind * t,
                i = -e.gravity * t;
              return {
                x:
                  n +
                  o(
                    this.dragCoefficient.x,
                    this.velocity.x,
                    this.airResistanceArea.x,
                    e.density,
                  ),
                y:
                  i +
                  o(
                    this.dragCoefficient.y,
                    this.velocity.y,
                    this.airResistanceArea.y,
                    e.density,
                  ),
              };
            }),
            (e.prototype.update = function (e) {
              var t = Date.now(),
                n = (t - this._lastUpdatedAt) / 100;
              this.rotation.update(n), this.dragCoefficient.update(n);
              var i = this.getNewForces(e, n),
                r = i.x,
                a = i.y;
              this.velocity.update(n),
                (this.velocity.x += r),
                (this.velocity.y += a),
                this.position.update(n),
                (this.position.x += this.velocity.x * n),
                (this.position.y += this.velocity.y * n),
                this.size.update(n),
                this.opacity.update(n),
                (this.opacity.value = Math.max(this.opacity.value, 0)),
                (this._lastUpdatedAt = t);
            }),
            (e.prototype.previewPositionUpdate = function (e, t) {
              var n = t / 100,
                i = this.velocity.previewUpdate(n),
                r = this.getNewForces(e, n),
                a = r.x,
                o = r.y;
              (i.x += a), (i.y += o);
              var s = this.position.previewUpdate(n);
              return (s.x += i.x * n), (s.y += i.y * n), s;
            }),
            (e.prototype.draw = function (e, t) {
              t.save(),
                (t.globalAlpha = this.opacity.value),
                t.setTransform(
                  new DOMMatrix()
                    .translateSelf(
                      this.position.x * n.g.devicePixelRatio,
                      this.position.y * n.g.devicePixelRatio,
                    )
                    .rotateSelf(
                      this.rotation.x,
                      this.rotation.y,
                      this.rotation.z,
                    ),
                ),
                t.drawImage(
                  e,
                  this.spriteX,
                  this.spriteY,
                  this.spriteWidth,
                  this.spriteHeight,
                  (-this.width / 2) * n.g.devicePixelRatio,
                  (-this.height / 2) * n.g.devicePixelRatio,
                  this.width * n.g.devicePixelRatio,
                  this.height * n.g.devicePixelRatio,
                ),
                t.restore();
            }),
            (e.prototype.shouldDestroy = function (e, t) {
              return (
                this.opacity.value < 0 ||
                (t.gravity >= 0 &&
                  this.velocity.y < 0 &&
                  this.position.y + this.height < 0) ||
                (t.gravity <= 0 &&
                  this.velocity.y > 0 &&
                  this.position.y - this.height > e.height) ||
                (t.wind >= 0 &&
                  this.velocity.x > 0 &&
                  this.position.x - this.width > e.width) ||
                (t.wind <= 0 &&
                  this.velocity.x < 0 &&
                  this.position.x + this.width < 0)
              );
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this.size.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return this.size.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.addForce = function (e) {
              (this.velocity.x += e.x), (this.velocity.y += e.y);
            }),
            e
          );
        })(),
        l = {
          velocity: { type: "static", value: 0 },
          rotation: { type: "static", value: 0 },
          dragCoefficient: { type: "static", value: 1.66 },
          airResistanceArea: { type: "static", value: 0.001 },
          opacity: { type: "static", value: 1 },
        },
        u = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.gravity,
            i = t.wind,
            r = t.density;
          (this.gravity = -9.8),
            (this.wind = 0),
            (this.density = 1.2041),
            (this.gravity = null != n ? n : this.gravity),
            (this.wind = null != i ? i : this.wind),
            (this.density = null != r ? r : this.density);
        },
        c = function (e, t) {
          return (c =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function d(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        function n() {
          this.constructor = e;
        }
        c(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var f = function () {
          return (f =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        h = function (e) {
          this.value = e;
        },
        y = (function () {
          function e(e, t, n) {
            (this._x = e), (this._y = n ? e : t);
          }
          return (
            (e.prototype.update = function (e) {
              this._x.update(e), this._y.update(e);
            }),
            (e.prototype.previewUpdate = function (e) {
              return {
                x: this._x.previewUpdate(e),
                y: this._y.previewUpdate(e),
              };
            }),
            Object.defineProperty(e.prototype, "x", {
              get: function () {
                return this._x.value;
              },
              set: function (e) {
                this._x.value = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "y", {
              get: function () {
                return this._y.value;
              },
              set: function (e) {
                this._y.value = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        p = (function (e) {
          function t(t, n, i, r) {
            var a = e.call(this, t, n, r) || this;
            return (a._z = r ? t : i), a;
          }
          return (
            d(t, e),
            (t.prototype.update = function (t) {
              e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
              var n = e.prototype.previewUpdate.call(this, t);
              return f(f({}, n), { z: this._z.previewUpdate(t) });
            }),
            Object.defineProperty(t.prototype, "z", {
              get: function () {
                return this._z.value;
              },
              set: function (e) {
                this._z.value = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(y),
        v = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            d(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
              return this.value;
            }),
            t
          );
        })(h),
        m = (function (e) {
          function t(t, n) {
            var i = e.call(this, t) || this;
            return (i.addValue = n), i;
          }
          return (
            d(t, e),
            (t.prototype.update = function (e) {
              this.value = this.previewUpdate(e);
            }),
            (t.prototype.previewUpdate = function (e) {
              return this.value + this.addValue * e;
            }),
            t
          );
        })(h),
        g = (function (e) {
          function t(t, n, i, r, a, o) {
            var s = e.call(this, t) || this;
            (s.min = n), (s.max = i), (s.duration = r);
            var l = (s.value / (s.max - s.min)) * s.duration,
              u = isNaN(l) ? 0 : l;
            return (
              (s.timePassed = u < 0 ? s.duration - u : u),
              (s.directionMultiplier = a),
              (s.easingFunction = o),
              s
            );
          }
          return (
            d(t, e),
            (t.prototype.update = function (e) {
              var t = this.doUpdate(e),
                n = t[0],
                i = t[1],
                r = t[2];
              (this.value = n),
                (this.directionMultiplier = r),
                (this.timePassed = i);
            }),
            (t.prototype.previewUpdate = function (e) {
              return this.doUpdate(e)[0];
            }),
            (t.prototype.doUpdate = function (e) {
              var t = this.max - this.min,
                n = this.timePassed + e * this.directionMultiplier,
                i = Math.min(Math.max(n, 0), this.duration),
                r =
                  n < 0 || n > this.duration
                    ? -1 * this.directionMultiplier
                    : this.directionMultiplier,
                a = this.easingFunction(i, this.min, t, this.duration);
              return [isNaN(a) ? 0 : a, i, r];
            }),
            t
          );
        })(h);
      function w(e, t) {
        return e === t ? e : Math.random() * (t - e + 1) + e;
      }
      function x(e) {
        var t = Math.floor(w(0, e.length - 1));
        return [e[t], t];
      }
      function b(e, t) {
        return x([e, t])[0];
      }
      function D(e) {
        return "number" == typeof e ? { x: e, y: e } : e;
      }
      function R(e) {
        return "number" == typeof e ? { x: e, y: e, z: e } : e;
      }
      function C(e) {
        return (function (e) {
          switch (e.type) {
            case "static":
              var t = D(e.value);
              return new y(new v(t.x), new v(t.y), e.uniformVectorValues);
            case "static-random":
              var n = D(e.minValue),
                i = D(e.maxValue);
              return new y(
                new v(w(n.x, i.x)),
                new v(w(n.y, i.y)),
                e.uniformVectorValues,
              );
            case "linear":
              t = D(e.value);
              var r = D(e.addValue);
              return new y(
                new m(t.x, r.x),
                new m(t.y, r.y),
                e.uniformVectorValues,
              );
            case "linear-random":
              (n = D(e.minValue)), (i = D(e.maxValue));
              var a = D(e.minAddValue),
                o = D(e.maxAddValue);
              return new y(
                new m(w(n.x, i.x), w(a.x, o.x)),
                new m(w(n.y, i.y), w(a.x, o.x)),
                e.uniformVectorValues,
              );
            case "oscillating":
              t = D(e.value);
              var s = D(e.start),
                l = D(e.final),
                u = D(e.duration),
                c = D(e.direction);
              return new y(
                new g(t.x, s.x, l.x, u.x, c.x, e.easingFunction),
                new g(t.y, s.y, l.y, u.x, c.y, e.easingFunction),
                e.uniformVectorValues,
              );
            case "oscillating-random":
              (n = D(e.minValue)), (i = D(e.maxValue));
              var d = D(e.minStart),
                f = D(e.maxStart),
                h = D(e.minFinal),
                p = D(e.maxFinal),
                R = D(e.minDuration),
                C = D(e.maxDuration),
                z = D(e.minDirection),
                V = D(e.maxDirection);
              return new y(
                new g(
                  w(n.x, i.x),
                  w(d.x, f.x),
                  w(h.x, p.x),
                  w(R.x, C.x),
                  b(z.x, V.x),
                  x(e.easingFunctions)[0],
                ),
                new g(
                  w(n.y, i.y),
                  w(d.y, f.y),
                  w(h.y, p.y),
                  w(R.y, C.y),
                  b(z.y, V.y),
                  x(e.easingFunctions)[0],
                ),
                e.uniformVectorValues,
              );
          }
        })(f(f({}, e), { valueType: "Vector2" }));
      }
      function z() {
        var e = i.useRef(!1),
          t = i.useRef({}),
          n = i.useCallback(function (e) {
            for (var n in t.current) t.current[n](e);
          }, []);
        return (
          i.useEffect(
            function () {
              return function () {
                return n(!1);
              };
            },
            [n],
          ),
          i.useMemo(
            function () {
              return {
                isReady: e.current,
                addReadyListener: function (n) {
                  var i = (0, r.A)();
                  return (t.current[i] = n), e.current && n(e.current), i;
                },
                removeReadyListener: function (e) {
                  delete t.current[e];
                },
                setIsReady: function (t) {
                  (e.current = t), n(t);
                },
              };
            },
            [n],
          )
        );
      }
      var V = i.forwardRef(function (e, t) {
          var o = e.className,
            u = e.environment,
            c = e.onClick,
            d = e.onMouseDown,
            h = e.onMouseMove,
            y = e.onMouseUp,
            D = e.onBeforeRender,
            V = e.onAfterRender,
            k = e.requestAnimationFrame,
            S = void 0 === k ? window.requestAnimationFrame : k,
            F = e.cancelAnimationFrame,
            _ = void 0 === F ? window.cancelAnimationFrame : F,
            O = (function (e, t) {
              var n = {};
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) &&
                  0 > t.indexOf(i) &&
                  (n[i] = e[i]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                  0 > t.indexOf(i[r]) &&
                    Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                    (n[i[r]] = e[i[r]]);
              }
              return n;
            })(e, [
              "className",
              "environment",
              "onClick",
              "onMouseDown",
              "onMouseMove",
              "onMouseUp",
              "onBeforeRender",
              "onAfterRender",
              "requestAnimationFrame",
              "cancelAnimationFrame",
            ]),
            M = i.useRef(null),
            P = z(),
            E = P.isReady,
            A = P.addReadyListener,
            L = P.removeReadyListener,
            U = P.setIsReady,
            H = i.useRef(new Map()),
            N = i.useRef(null),
            j = i.useRef(0),
            I = i.useRef(0),
            T = i.useCallback(
              function () {
                var e = M.current;
                if (null != e) {
                  var t = e.getContext("2d");
                  if (null != t) {
                    t.clearRect(0, 0, e.width, e.height),
                      null == D || D(t),
                      H.current.forEach(function (n, i) {
                        var r = n.confetti,
                          a = n.spriteCanvas;
                        r.update(u),
                          r.draw(a, t),
                          r.shouldDestroy(e, u) && H.current.delete(i);
                      }),
                      null == V || V(t),
                      H.current.size > 0
                        ? (N.current = S(T))
                        : (t.clearRect(0, 0, e.width, e.height),
                          (N.current = null));
                    var n = Date.now();
                    0 !== j.current && (I.current = 1e3 / (n - j.current)),
                      (j.current = n);
                  }
                }
              },
              [u, V, D, S],
            );
          i.useEffect(
            function () {
              null != N.current && (_(N.current), (N.current = S(T)));
            },
            [_, T, S],
          );
          var W = i.useCallback(
              function (e, t) {
                H.current.set(e.id, { confetti: e, spriteCanvas: t }),
                  null == N.current && T();
              },
              [T],
            ),
            Y = i.useCallback(
              function (e, t, n, i, a) {
                var o,
                  u,
                  c,
                  d,
                  h,
                  y,
                  D,
                  z,
                  V =
                    ((o = null != (z = e.id) ? z : (0, r.A)()),
                    (u = f(f({ id: o }, l), e)),
                    (d = (c = (function (e, t) {
                      if (null != e) {
                        var n = t.sprites.findIndex(function (t) {
                          return "string" == typeof e
                            ? t.src === e && t.colorize
                            : t.src === e.src && t.colorize === e.colorize;
                        });
                        if (-1 !== n) return [e, n];
                      }
                      return x(t.sprites);
                    })(i, n))[0]),
                    (h = c[1]),
                    (y = (function (e, t, n) {
                      if (!("string" == typeof e || e.colorize)) return 0;
                      var i =
                        null != t
                          ? n.colors.findIndex(function (e) {
                              return e === t;
                            })
                          : -1;
                      return -1 !== i
                        ? i
                        : Math.floor(w(0, n.colors.length - 1));
                    })(null != i ? i : d, a, n)),
                    new s({
                      id: o,
                      position: C(u.position),
                      velocity: C(u.velocity),
                      rotation:
                        ((D = u.rotation),
                        (function (e) {
                          switch (e.type) {
                            case "static":
                              var t = R(e.value);
                              return new p(
                                new v(t.x),
                                new v(t.y),
                                new v(t.z),
                                e.uniformVectorValues,
                              );
                            case "static-random":
                              var n = R(e.minValue),
                                i = R(e.maxValue);
                              return new p(
                                new v(w(n.x, i.x)),
                                new v(w(n.y, i.y)),
                                new v(w(n.z, i.z)),
                                e.uniformVectorValues,
                              );
                            case "linear":
                              t = R(e.value);
                              var r = R(e.addValue);
                              return new p(
                                new m(t.x, r.x),
                                new m(t.y, r.y),
                                new m(t.z, r.z),
                                e.uniformVectorValues,
                              );
                            case "linear-random":
                              (n = R(e.minValue)), (i = R(e.maxValue));
                              var a = R(e.minAddValue),
                                o = R(e.maxAddValue);
                              return new p(
                                new m(w(n.x, i.x), w(a.x, o.x)),
                                new m(w(n.y, i.y), w(a.y, o.y)),
                                new m(w(n.z, i.z), w(a.z, o.z)),
                                e.uniformVectorValues,
                              );
                            case "oscillating":
                              t = R(e.value);
                              var s = R(e.start),
                                l = R(e.final),
                                u = R(e.duration),
                                c = R(e.direction);
                              return new p(
                                new g(
                                  t.x,
                                  s.x,
                                  l.x,
                                  u.x,
                                  c.x,
                                  e.easingFunction,
                                ),
                                new g(
                                  t.y,
                                  s.y,
                                  l.y,
                                  u.z,
                                  c.y,
                                  e.easingFunction,
                                ),
                                new g(
                                  t.z,
                                  s.z,
                                  l.z,
                                  u.z,
                                  c.z,
                                  e.easingFunction,
                                ),
                                e.uniformVectorValues,
                              );
                            case "oscillating-random":
                              (n = R(e.minValue)), (i = R(e.maxValue));
                              var d = R(e.minStart),
                                f = R(e.maxStart),
                                h = R(e.minFinal),
                                y = R(e.maxFinal),
                                D = R(e.minDuration),
                                C = R(e.maxDuration),
                                z = R(e.minDirection),
                                V = R(e.maxDirection);
                              return new p(
                                new g(
                                  w(n.x, i.x),
                                  w(d.x, f.x),
                                  w(h.x, y.x),
                                  w(D.x, C.x),
                                  b(z.x, V.x),
                                  x(e.easingFunctions)[0],
                                ),
                                new g(
                                  w(n.y, i.y),
                                  w(d.y, f.y),
                                  w(h.y, y.y),
                                  w(D.y, C.y),
                                  b(z.y, V.y),
                                  x(e.easingFunctions)[0],
                                ),
                                new g(
                                  w(n.z, i.z),
                                  w(d.z, f.z),
                                  w(h.z, y.z),
                                  w(D.z, C.z),
                                  b(z.z, V.z),
                                  x(e.easingFunctions)[0],
                                ),
                                e.uniformVectorValues,
                              );
                          }
                        })(f(f({}, D), { valueType: "Vector3" }))),
                      dragCoefficient: C(u.dragCoefficient),
                      size: C(u.size),
                      opacity: (function (e) {
                        var t = f(f({}, e), { valueType: "number" });
                        switch (t.type) {
                          case "static":
                            return new v(t.value);
                          case "static-random":
                            return new v(w(t.minValue, t.maxValue));
                          case "linear":
                            return new m(t.value, t.addValue);
                          case "linear-random":
                            return new m(
                              w(t.minValue, t.maxValue),
                              w(t.minAddValue, t.maxAddValue),
                            );
                          case "oscillating":
                            return new g(
                              t.value,
                              t.start,
                              t.final,
                              t.duration,
                              t.direction,
                              t.easingFunction,
                            );
                          case "oscillating-random":
                            return new g(
                              w(t.minValue, t.maxValue),
                              w(t.minStart, t.maxStart),
                              w(t.minFinal, t.maxFinal),
                              w(t.minDuration, t.maxDuration),
                              b(t.minDirection, t.maxDirection),
                              x(t.easingFunctions)[0],
                            );
                        }
                      })(u.opacity),
                      airResistanceArea: C(u.airResistanceArea),
                      spriteX: y * n.spriteWidth + 2 * y,
                      spriteY: h * n.spriteHeight + 2 * h,
                      spriteWidth: n.spriteWidth,
                      spriteHeight: n.spriteHeight,
                    }));
                return W(V, t), V;
              },
              [W],
            ),
            B = i.useCallback(function (e) {
              H.current.delete(e);
            }, []),
            X = i.useCallback(function () {
              return H.current.clear();
            }, []),
            q = i.useCallback(function () {
              return M.current;
            }, []);
          i.useImperativeHandle(
            t,
            function () {
              return {
                createConfetti: Y,
                addConfetti: W,
                deleteConfetti: B,
                clearConfetti: X,
                getCanvas: q,
                addReadyListener: A,
                removeReadyListener: L,
                isReady: E,
              };
            },
            [Y, W, B, X, q, A, L, E],
          );
          var $ = i.useCallback(
              function (e, t) {
                var n,
                  i,
                  r = t.clickHandler,
                  o = t.mouseHandler;
                if (null != r || null != o) {
                  var s =
                    null == (n = M.current)
                      ? void 0
                      : n.getBoundingClientRect();
                  if (null != s) {
                    var l = (function (e, t) {
                      if (null == t) throw Error("element should not be null");
                      var n = t.getBoundingClientRect();
                      return { x: e.clientX - n.left, y: e.clientY - n.top };
                    })(e, M.current);
                    if (
                      a(l, {
                        x: s.left,
                        y: s.top,
                        width: s.width,
                        height: s.height,
                      })
                    ) {
                      if (null != o) return o(e);
                      if (null != r) {
                        var c = (-1e3 / I.current) * 2,
                          d = (function (e, t) {
                            for (
                              var n = 0, i = Array.from(e.values());
                              n < i.length;
                              n++
                            ) {
                              var r = i[n];
                              if (null != r && t(r)) return r;
                            }
                            return null;
                          })(H.current, function (e) {
                            var t = e.confetti,
                              n = t.previewPositionUpdate(u, c);
                            return a(l, {
                              x: n.x - t.width / 2,
                              y: n.y - t.height / 2,
                              width: t.width,
                              height: t.height,
                            });
                          });
                        r(
                          e,
                          null != (i = null == d ? void 0 : d.confetti)
                            ? i
                            : null,
                        );
                      }
                    }
                  }
                }
              },
              [u],
            ),
            G = i.useCallback(
              function (e) {
                return $(e, { clickHandler: c });
              },
              [$, c],
            ),
            K = i.useCallback(
              function (e) {
                return $(e, { clickHandler: d });
              },
              [$, d],
            ),
            J = i.useCallback(
              function (e) {
                return $(e, { mouseHandler: h });
              },
              [$, h],
            ),
            Q = i.useCallback(
              function (e) {
                return $(e, { mouseHandler: y });
              },
              [$, y],
            );
          return (
            i.useEffect(
              function () {
                var e = function (e, t, n) {
                  null != n && window.addEventListener(e, t);
                };
                return (
                  e("click", G, c),
                  e("mousedown", K, d),
                  e("mousemove", J, h),
                  e("mouseup", Q, y),
                  function () {
                    window.removeEventListener("click", G),
                      window.removeEventListener("mousedown", K),
                      window.removeEventListener("mousemove", J),
                      window.removeEventListener("mouseup", J);
                  }
                );
              },
              [G, K, J, Q, c, d, h, y],
            ),
            i.useEffect(
              function () {
                var e = M.current,
                  t = new ResizeObserver(function () {
                    !(function (e) {
                      if (null != e) {
                        var t = e.getBoundingClientRect(),
                          i = t.width,
                          r = t.height;
                        (e.width = i * n.g.devicePixelRatio),
                          (e.height = r * n.g.devicePixelRatio);
                      }
                    })(M.current),
                      U(!0);
                  });
                return (
                  null != e && t.observe(e),
                  function () {
                    null != e && t.unobserve(e);
                  }
                );
              },
              [U],
            ),
            i.createElement("canvas", f({}, O, { className: o, ref: M }))
          );
        }),
        k = {
          display: "none",
          position: "absolute",
          width: 0,
          height: 0,
          left: "-100%",
        },
        S = i.forwardRef(function (e, t) {
          var n = e.className,
            r = e.visible,
            a = e.sprites,
            o = e.colors,
            s = e.spriteWidth,
            l = e.spriteHeight,
            u = i.useRef(null),
            c = i.useRef([]),
            d = z(),
            f = d.isReady,
            h = d.addReadyListener,
            y = d.removeReadyListener,
            p = d.setIsReady;
          i.useImperativeHandle(
            t,
            function () {
              return {
                getCanvas: function () {
                  return u.current;
                },
                getCreateData: function () {
                  return {
                    sprites: c.current,
                    colors: o,
                    spriteWidth: s,
                    spriteHeight: l,
                  };
                },
                addReadyListener: h,
                removeReadyListener: y,
                isReady: f,
              };
            },
            [h, o, f, y, l, s],
          );
          var v = i.useCallback(
              function () {
                var e = u.current,
                  t =
                    null == e
                      ? void 0
                      : e.getContext("2d", { willReadFrequently: !0 });
                null != t &&
                  null != e &&
                  (t.clearRect(0, 0, e.width, e.height),
                  c.current.forEach(function (e, n) {
                    var i = function (i, r) {
                      var a = s * r + 2 * r,
                        o = l * n + 2 * n;
                      if ((t.drawImage(e.image, a, o, s, l), null != i)) {
                        for (
                          var u,
                            c,
                            d = t.getImageData(a, o, s, l),
                            f =
                              ("#" === (u = i)[0] && (u = u.slice(1)),
                              {
                                r: ((c = parseInt(u, 16)) >> 16) & 255,
                                g: (c >> 8) & 255,
                                b: 255 & c,
                              }),
                            h = 0;
                          h < d.data.length;
                          h += 4
                        )
                          (d.data[h] = f.r),
                            (d.data[h + 1] = f.g),
                            (d.data[h + 2] = f.b);
                        t.putImageData(d, a, o);
                      }
                    };
                    e.colorize
                      ? o.forEach(function (e, t) {
                          return i(e, t);
                        })
                      : i(null, 0);
                  }));
              },
              [o, l, s],
            ),
            m = i.useCallback(
              function () {
                var e = a.map(function (e) {
                  var t = new Image(),
                    n = "string" == typeof e ? e : e.src,
                    i = "string" == typeof e || e.colorize;
                  t.src = n;
                  var r = new Promise(function (e) {
                    t.onload = e;
                  });
                  return { colorize: i, image: t, src: n, loadPromise: r };
                });
                return Promise.all(
                  e.map(function (e) {
                    return e.loadPromise;
                  }),
                ).then(function () {
                  c.current = e.map(function (e) {
                    return { colorize: e.colorize, image: e.image, src: e.src };
                  });
                });
              },
              [a],
            ),
            g = i.useCallback(
              function () {
                var e, t, n, i;
                return (
                  (e = void 0),
                  (t = void 0),
                  (n = void 0),
                  (i = function () {
                    return (function (e, t) {
                      var n,
                        i,
                        r,
                        a,
                        o = {
                          label: 0,
                          sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (a = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                          (a[Symbol.iterator] = function () {
                            return this;
                          }),
                        a
                      );
                      function s(s) {
                        return function (l) {
                          var u = [s, l];
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; a && ((a = 0), u[0] && (o = 0)), o; )
                            try {
                              if (
                                ((n = 1),
                                i &&
                                  (r =
                                    2 & u[0]
                                      ? i.return
                                      : u[0]
                                        ? i.throw ||
                                          ((r = i.return) && r.call(i), 0)
                                        : i.next) &&
                                  !(r = r.call(i, u[1])).done)
                              )
                                return r;
                              switch (
                                ((i = 0), r && (u = [2 & u[0], r.value]), u[0])
                              ) {
                                case 0:
                                case 1:
                                  r = u;
                                  break;
                                case 4:
                                  return o.label++, { value: u[1], done: !1 };
                                case 5:
                                  o.label++, (i = u[1]), (u = [0]);
                                  continue;
                                case 7:
                                  (u = o.ops.pop()), o.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(r =
                                      (r = o.trys).length > 0 &&
                                      r[r.length - 1]) &&
                                    (6 === u[0] || 2 === u[0])
                                  ) {
                                    o = 0;
                                    continue;
                                  }
                                  if (
                                    3 === u[0] &&
                                    (!r || (u[1] > r[0] && u[1] < r[3]))
                                  ) {
                                    o.label = u[1];
                                    break;
                                  }
                                  if (6 === u[0] && o.label < r[1]) {
                                    (o.label = r[1]), (r = u);
                                    break;
                                  }
                                  if (r && o.label < r[2]) {
                                    (o.label = r[2]), o.ops.push(u);
                                    break;
                                  }
                                  r[2] && o.ops.pop(), o.trys.pop();
                                  continue;
                              }
                              u = t.call(e, o);
                            } catch (e) {
                              (u = [6, e]), (i = 0);
                            } finally {
                              n = r = 0;
                            }
                          if (5 & u[0]) throw u[1];
                          return { value: u[0] ? u[1] : void 0, done: !0 };
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, m()];
                        case 1:
                          return e.sent(), v(), p(!0), [2];
                      }
                    });
                  }),
                  new (n || (n = Promise))(function (r, a) {
                    function o(e) {
                      try {
                        l(i.next(e));
                      } catch (e) {
                        a(e);
                      }
                    }
                    function s(e) {
                      try {
                        l(i.throw(e));
                      } catch (e) {
                        a(e);
                      }
                    }
                    function l(e) {
                      var t;
                      e.done
                        ? r(e.value)
                        : ((t = e.value) instanceof n
                            ? t
                            : new n(function (e) {
                                e(t);
                              })
                          ).then(o, s);
                    }
                    l((i = i.apply(e, t || [])).next());
                  })
                );
              },
              [m, v, p],
            );
          return (
            i.useEffect(
              function () {
                g();
              },
              [g],
            ),
            i.useEffect(
              function () {
                null != u.current &&
                  ((u.current.width = (s + 2) * Math.max(o.length, 1)),
                  (u.current.height = (l + 2) * a.length));
              },
              [o.length, l, s, a.length],
            ),
            i.createElement("canvas", {
              ref: u,
              className: n,
              style: void 0 !== r && r ? void 0 : k,
            })
          );
        });
      function F(e, t) {
        var n,
          r,
          a = i.useState(null != (n = null == t ? void 0 : t.isReady) && n),
          o = a[0],
          s = a[1],
          l = i.useState(null != (r = null == e ? void 0 : e.isReady) && r),
          u = l[0],
          c = l[1];
        i.useEffect(
          function () {
            var e = null == t ? void 0 : t.addReadyListener(s);
            return function () {
              null != e && (null == t || t.removeReadyListener(e));
            };
          },
          [t],
        ),
          i.useEffect(
            function () {
              var t = null == e ? void 0 : e.addReadyListener(c);
              return function () {
                null != t && (null == e || e.removeReadyListener(t));
              };
            },
            [e],
          );
        var d = i.useCallback(
            function (n, i) {
              var r = void 0 === i ? {} : i,
                a = r.sprite,
                o = r.color,
                s = null == t ? void 0 : t.getCreateData(),
                l = null == t ? void 0 : t.getCanvas();
              if (null != l && null != s && 0 !== s.sprites.length)
                return null == e ? void 0 : e.createConfetti(n, l, s, a, o);
            },
            [e, t],
          ),
          f = i.useCallback(
            function (e, t, n) {
              for (var i = [], r = 0; r < t; r++) {
                var a = d(e, n);
                a && i.push(a);
              }
              return i;
            },
            [d],
          ),
          h = i.useCallback(
            function (n) {
              var i = null == t ? void 0 : t.getCanvas();
              null != i && (null == e || e.addConfetti(n, i));
            },
            [e, t],
          ),
          y = i.useCallback(
            function (t) {
              null == e || e.deleteConfetti(t);
            },
            [e],
          ),
          p = i.useCallback(
            function () {
              return null == e ? void 0 : e.clearConfetti();
            },
            [e],
          );
        return i.useMemo(
          function () {
            return {
              createConfetti: d,
              createMultipleConfetti: f,
              addConfetti: h,
              clearConfetti: p,
              deleteConfetti: y,
              isReady: null != t && null != e && u && o,
            };
          },
          [h, p, e, d, f, y, u, o, t],
        );
      }
    },
    430111(e, t, n) {
      n.d(t, { Y: () => i.Y });
      var i = n(411211);
    },
    411211(e, t, n) {
      n.d(t, { Y: () => g });
      var i = n(842830),
        r = n(120330),
        a = n(518375),
        o = n(97626),
        s = n(243399),
        l = n(29685),
        u = n(641277),
        c = n(439489),
        d = n(369364),
        f = n(727504),
        h = n(501974),
        y = n(225441),
        p = n(762437);
      n(632459);
      let v = [
          "locale",
          "style",
          "years",
          "yearsDisplay",
          "months",
          "monthsDisplay",
          "weeks",
          "weeksDisplay",
          "days",
          "daysDisplay",
          "hours",
          "hoursDisplay",
          "minutes",
          "minutesDisplay",
          "seconds",
          "secondsDisplay",
          "milliseconds",
          "millisecondsDisplay",
          "microseconds",
          "microsecondsDisplay",
          "nanoseconds",
          "nanosecondsDisplay",
          "numberingSystem",
          "fractionalDigits",
        ],
        m = [
          {
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            values: ["long", "short", "narrow"],
            digitalDefault: "short",
          },
          {
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            values: ["long", "short", "narrow", "numeric", "2-digit"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
          {
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            values: ["long", "short", "narrow", "numeric"],
            digitalDefault: "numeric",
          },
        ];
      class g {
        constructor(e, t) {
          if (!(this && this instanceof g ? this.constructor : void 0))
            throw TypeError("Intl.DurationFormat must be called with 'new'");
          const n = (0, i.N)(e),
            s = Object.create(null),
            l = void 0 === t ? Object.create(null) : (0, r.BT)(t),
            d = (0, a.W)(
              l,
              "localeMatcher",
              "string",
              ["best fit", "lookup"],
              "best fit",
            ),
            f = (0, a.W)(l, "numberingSystem", "string", void 0, void 0);
          if (void 0 !== f && 0 > y.P.indexOf(f))
            throw RangeError(`Invalid numberingSystems: ${f}`);
          (s.nu = f), (s.localeMatcher = d);
          const { localeData: p, availableLocales: v } = g,
            w = (0, u.B)(v, n, s, ["nu"], p, g.getDefaultLocale),
            x = w.locale,
            b = (0, h.n)(this);
          (b.initializedDurationFormat = !0),
            (b.locale = x),
            (b.numberingSystem = w.nu);
          const D = (0, a.W)(
            l,
            "style",
            "string",
            ["long", "short", "narrow", "digital"],
            "short",
          );
          (b.style = D), (b.dataLocale = w.dataLocale);
          let R = "";
          m.forEach((e) => {
            let {
                styleSlot: t,
                displaySlot: n,
                unit: i,
                values: r,
                digitalDefault: a,
              } = e,
              o = (0, c.$)(i, l, D, r, a, R);
            (b[t] = o.style),
              (b[n] = o.display),
              ("hours" === i ||
                "minutes" === i ||
                "seconds" === i ||
                "milliseconds" === i ||
                "microseconds" === i) &&
                (R = o.style);
          }),
            (b.fractionalDigits = (0, o.z)(
              l,
              "fractionalDigits",
              0,
              9,
              void 0,
            ));
        }
        resolvedOptions() {
          if ("object" != typeof this || !(0, r.Wt)(g, this))
            throw TypeError(
              "Method Intl.DurationFormat.prototype.resolvedOptions called on incompatible receiver",
            );
          let e = (0, h.n)(this),
            t = {};
          for (let n of v) {
            let i = e[n];
            "fractionalDigits" === n
              ? void 0 !== i && (i = Number(i))
              : (0, s.V1)(void 0 !== i, `Missing internal slot ${n}`),
              (t[n] = i);
          }
          return t;
        }
        formatToParts(e) {
          if (void 0 === (0, h.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let t = (0, f.H)(e),
            n = (0, d.m)(this, t),
            i = [];
          for (let { type: e, unit: t, value: r } of n) {
            let n = { type: e, value: r };
            t && (n.unit = t), i.push(n);
          }
          return i;
        }
        format(e) {
          if (void 0 === (0, h.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let t = (0, f.H)(e),
            n = (0, d.m)(this, t),
            i = "";
          for (let { value: e } of n) i += e;
          return i;
        }
        static supportedLocalesOf(e, t) {
          return (0, l.U)(g.availableLocales, (0, i.N)(e), t);
        }
        static __defaultLocale = "en";
        static availableLocales = new Set();
        static localeData = Object.keys(p.N.localeData).reduce((e, t) => {
          g.availableLocales.add(t);
          let n = p.N.localeData[t].nu;
          return (
            (e[t] = {
              nu: n,
              digitalFormat:
                p.N.localeData[t].separator ||
                n.reduce((e, t) => ((e[t] = p.N.default), e), {}),
            }),
            e
          );
        }, {});
        static getDefaultLocale = () => g.__defaultLocale;
        static polyfilled = !0;
      }
    },
  },
]);
//# sourceMappingURL=103713.fd61986c4365f8fe.js.map
