"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25376"],
  {
    106778(e, t, n) {
      n.d(t, { Fk: () => _, K_: () => V, OH: () => l, f9: () => O });
      var i = n(64700),
        r = n(132500);
      function o(e, t) {
        var n = e.x,
          i = e.y;
        return n > t.x && n < t.x + t.width && i > t.y && i < t.y + t.height;
      }
      function a(e, t, n, i) {
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
                  a(
                    this.dragCoefficient.x,
                    this.velocity.x,
                    this.airResistanceArea.x,
                    e.density,
                  ),
                y:
                  i +
                  a(
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
                o = i.y;
              this.velocity.update(n),
                (this.velocity.x += r),
                (this.velocity.y += o),
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
                o = r.x,
                a = r.y;
              (i.x += o), (i.y += a);
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
        u = {
          velocity: { type: "static", value: 0 },
          rotation: { type: "static", value: 0 },
          dragCoefficient: { type: "static", value: 1.66 },
          airResistanceArea: { type: "static", value: 0.001 },
          opacity: { type: "static", value: 1 },
        },
        l = function (e) {
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
      function f(e, t) {
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
      var d = function () {
          return (d =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        p = function (e) {
          this.value = e;
        },
        h = (function () {
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
        y = (function (e) {
          function t(t, n, i, r) {
            var o = e.call(this, t, n, r) || this;
            return (o._z = r ? t : i), o;
          }
          return (
            f(t, e),
            (t.prototype.update = function (t) {
              e.prototype.update.call(this, t), this._z.update(t);
            }),
            (t.prototype.previewUpdate = function (t) {
              var n = e.prototype.previewUpdate.call(this, t);
              return d(d({}, n), { z: this._z.previewUpdate(t) });
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
        })(h),
        v = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            f(t, e),
            (t.prototype.update = function () {}),
            (t.prototype.previewUpdate = function () {
              return this.value;
            }),
            t
          );
        })(p),
        m = (function (e) {
          function t(t, n) {
            var i = e.call(this, t) || this;
            return (i.addValue = n), i;
          }
          return (
            f(t, e),
            (t.prototype.update = function (e) {
              this.value = this.previewUpdate(e);
            }),
            (t.prototype.previewUpdate = function (e) {
              return this.value + this.addValue * e;
            }),
            t
          );
        })(p),
        g = (function (e) {
          function t(t, n, i, r, o, a) {
            var s = e.call(this, t) || this;
            (s.min = n), (s.max = i), (s.duration = r);
            var u = (s.value / (s.max - s.min)) * s.duration,
              l = isNaN(u) ? 0 : u;
            return (
              (s.timePassed = l < 0 ? s.duration - l : l),
              (s.directionMultiplier = o),
              (s.easingFunction = a),
              s
            );
          }
          return (
            f(t, e),
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
                o = this.easingFunction(i, this.min, t, this.duration);
              return [isNaN(o) ? 0 : o, i, r];
            }),
            t
          );
        })(p);
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
      function C(e) {
        return "number" == typeof e ? { x: e, y: e } : e;
      }
      function R(e) {
        return "number" == typeof e ? { x: e, y: e, z: e } : e;
      }
      function L(e) {
        return (function (e) {
          switch (e.type) {
            case "static":
              var t = C(e.value);
              return new h(new v(t.x), new v(t.y), e.uniformVectorValues);
            case "static-random":
              var n = C(e.minValue),
                i = C(e.maxValue);
              return new h(
                new v(w(n.x, i.x)),
                new v(w(n.y, i.y)),
                e.uniformVectorValues,
              );
            case "linear":
              t = C(e.value);
              var r = C(e.addValue);
              return new h(
                new m(t.x, r.x),
                new m(t.y, r.y),
                e.uniformVectorValues,
              );
            case "linear-random":
              (n = C(e.minValue)), (i = C(e.maxValue));
              var o = C(e.minAddValue),
                a = C(e.maxAddValue);
              return new h(
                new m(w(n.x, i.x), w(o.x, a.x)),
                new m(w(n.y, i.y), w(o.x, a.x)),
                e.uniformVectorValues,
              );
            case "oscillating":
              t = C(e.value);
              var s = C(e.start),
                u = C(e.final),
                l = C(e.duration),
                c = C(e.direction);
              return new h(
                new g(t.x, s.x, u.x, l.x, c.x, e.easingFunction),
                new g(t.y, s.y, u.y, l.x, c.y, e.easingFunction),
                e.uniformVectorValues,
              );
            case "oscillating-random":
              (n = C(e.minValue)), (i = C(e.maxValue));
              var f = C(e.minStart),
                d = C(e.maxStart),
                p = C(e.minFinal),
                y = C(e.maxFinal),
                R = C(e.minDuration),
                L = C(e.maxDuration),
                D = C(e.minDirection),
                _ = C(e.maxDirection);
              return new h(
                new g(
                  w(n.x, i.x),
                  w(f.x, d.x),
                  w(p.x, y.x),
                  w(R.x, L.x),
                  b(D.x, _.x),
                  x(e.easingFunctions)[0],
                ),
                new g(
                  w(n.y, i.y),
                  w(f.y, d.y),
                  w(p.y, y.y),
                  w(R.y, L.y),
                  b(D.y, _.y),
                  x(e.easingFunctions)[0],
                ),
                e.uniformVectorValues,
              );
          }
        })(d(d({}, e), { valueType: "Vector2" }));
      }
      function D() {
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
      var _ = i.forwardRef(function (e, t) {
          var a = e.className,
            l = e.environment,
            c = e.onClick,
            f = e.onMouseDown,
            p = e.onMouseMove,
            h = e.onMouseUp,
            C = e.onBeforeRender,
            _ = e.onAfterRender,
            z = e.requestAnimationFrame,
            V = void 0 === z ? window.requestAnimationFrame : z,
            O = e.cancelAnimationFrame,
            E = void 0 === O ? window.cancelAnimationFrame : O,
            k = (function (e, t) {
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
            F = i.useRef(null),
            S = D(),
            P = S.isReady,
            M = S.addReadyListener,
            A = S.removeReadyListener,
            j = S.setIsReady,
            N = i.useRef(new Map()),
            U = i.useRef(null),
            H = i.useRef(0),
            I = i.useRef(0),
            T = i.useCallback(
              function () {
                var e = F.current;
                if (null != e) {
                  var t = e.getContext("2d");
                  if (null != t) {
                    t.clearRect(0, 0, e.width, e.height),
                      null == C || C(t),
                      N.current.forEach(function (n, i) {
                        var r = n.confetti,
                          o = n.spriteCanvas;
                        r.update(l),
                          r.draw(o, t),
                          r.shouldDestroy(e, l) && N.current.delete(i);
                      }),
                      null == _ || _(t),
                      N.current.size > 0
                        ? (U.current = V(T))
                        : (t.clearRect(0, 0, e.width, e.height),
                          (U.current = null));
                    var n = Date.now();
                    0 !== H.current && (I.current = 1e3 / (n - H.current)),
                      (H.current = n);
                  }
                }
              },
              [l, _, C, V],
            );
          i.useEffect(
            function () {
              null != U.current && (E(U.current), (U.current = V(T)));
            },
            [E, T, V],
          );
          var W = i.useCallback(
              function (e, t) {
                N.current.set(e.id, { confetti: e, spriteCanvas: t }),
                  null == U.current && T();
              },
              [T],
            ),
            Y = i.useCallback(
              function (e, t, n, i, o) {
                var a,
                  l,
                  c,
                  f,
                  p,
                  h,
                  C,
                  D,
                  _ =
                    ((a = null != (D = e.id) ? D : (0, r.A)()),
                    (l = d(d({ id: a }, u), e)),
                    (f = (c = (function (e, t) {
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
                    (p = c[1]),
                    (h = (function (e, t, n) {
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
                    })(null != i ? i : f, o, n)),
                    new s({
                      id: a,
                      position: L(l.position),
                      velocity: L(l.velocity),
                      rotation:
                        ((C = l.rotation),
                        (function (e) {
                          switch (e.type) {
                            case "static":
                              var t = R(e.value);
                              return new y(
                                new v(t.x),
                                new v(t.y),
                                new v(t.z),
                                e.uniformVectorValues,
                              );
                            case "static-random":
                              var n = R(e.minValue),
                                i = R(e.maxValue);
                              return new y(
                                new v(w(n.x, i.x)),
                                new v(w(n.y, i.y)),
                                new v(w(n.z, i.z)),
                                e.uniformVectorValues,
                              );
                            case "linear":
                              t = R(e.value);
                              var r = R(e.addValue);
                              return new y(
                                new m(t.x, r.x),
                                new m(t.y, r.y),
                                new m(t.z, r.z),
                                e.uniformVectorValues,
                              );
                            case "linear-random":
                              (n = R(e.minValue)), (i = R(e.maxValue));
                              var o = R(e.minAddValue),
                                a = R(e.maxAddValue);
                              return new y(
                                new m(w(n.x, i.x), w(o.x, a.x)),
                                new m(w(n.y, i.y), w(o.y, a.y)),
                                new m(w(n.z, i.z), w(o.z, a.z)),
                                e.uniformVectorValues,
                              );
                            case "oscillating":
                              t = R(e.value);
                              var s = R(e.start),
                                u = R(e.final),
                                l = R(e.duration),
                                c = R(e.direction);
                              return new y(
                                new g(
                                  t.x,
                                  s.x,
                                  u.x,
                                  l.x,
                                  c.x,
                                  e.easingFunction,
                                ),
                                new g(
                                  t.y,
                                  s.y,
                                  u.y,
                                  l.z,
                                  c.y,
                                  e.easingFunction,
                                ),
                                new g(
                                  t.z,
                                  s.z,
                                  u.z,
                                  l.z,
                                  c.z,
                                  e.easingFunction,
                                ),
                                e.uniformVectorValues,
                              );
                            case "oscillating-random":
                              (n = R(e.minValue)), (i = R(e.maxValue));
                              var f = R(e.minStart),
                                d = R(e.maxStart),
                                p = R(e.minFinal),
                                h = R(e.maxFinal),
                                C = R(e.minDuration),
                                L = R(e.maxDuration),
                                D = R(e.minDirection),
                                _ = R(e.maxDirection);
                              return new y(
                                new g(
                                  w(n.x, i.x),
                                  w(f.x, d.x),
                                  w(p.x, h.x),
                                  w(C.x, L.x),
                                  b(D.x, _.x),
                                  x(e.easingFunctions)[0],
                                ),
                                new g(
                                  w(n.y, i.y),
                                  w(f.y, d.y),
                                  w(p.y, h.y),
                                  w(C.y, L.y),
                                  b(D.y, _.y),
                                  x(e.easingFunctions)[0],
                                ),
                                new g(
                                  w(n.z, i.z),
                                  w(f.z, d.z),
                                  w(p.z, h.z),
                                  w(C.z, L.z),
                                  b(D.z, _.z),
                                  x(e.easingFunctions)[0],
                                ),
                                e.uniformVectorValues,
                              );
                          }
                        })(d(d({}, C), { valueType: "Vector3" }))),
                      dragCoefficient: L(l.dragCoefficient),
                      size: L(l.size),
                      opacity: (function (e) {
                        var t = d(d({}, e), { valueType: "number" });
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
                      })(l.opacity),
                      airResistanceArea: L(l.airResistanceArea),
                      spriteX: h * n.spriteWidth + 2 * h,
                      spriteY: p * n.spriteHeight + 2 * p,
                      spriteWidth: n.spriteWidth,
                      spriteHeight: n.spriteHeight,
                    }));
                return W(_, t), _;
              },
              [W],
            ),
            B = i.useCallback(function (e) {
              N.current.delete(e);
            }, []),
            X = i.useCallback(function () {
              return N.current.clear();
            }, []),
            q = i.useCallback(function () {
              return F.current;
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
                addReadyListener: M,
                removeReadyListener: A,
                isReady: P,
              };
            },
            [Y, W, B, X, q, M, A, P],
          );
          var K = i.useCallback(
              function (e, t) {
                var n,
                  i,
                  r = t.clickHandler,
                  a = t.mouseHandler;
                if (null != r || null != a) {
                  var s =
                    null == (n = F.current)
                      ? void 0
                      : n.getBoundingClientRect();
                  if (null != s) {
                    var u = (function (e, t) {
                      if (null == t) throw Error("element should not be null");
                      var n = t.getBoundingClientRect();
                      return { x: e.clientX - n.left, y: e.clientY - n.top };
                    })(e, F.current);
                    if (
                      o(u, {
                        x: s.left,
                        y: s.top,
                        width: s.width,
                        height: s.height,
                      })
                    ) {
                      if (null != a) return a(e);
                      if (null != r) {
                        var c = (-1e3 / I.current) * 2,
                          f = (function (e, t) {
                            for (
                              var n = 0, i = Array.from(e.values());
                              n < i.length;
                              n++
                            ) {
                              var r = i[n];
                              if (null != r && t(r)) return r;
                            }
                            return null;
                          })(N.current, function (e) {
                            var t = e.confetti,
                              n = t.previewPositionUpdate(l, c);
                            return o(u, {
                              x: n.x - t.width / 2,
                              y: n.y - t.height / 2,
                              width: t.width,
                              height: t.height,
                            });
                          });
                        r(
                          e,
                          null != (i = null == f ? void 0 : f.confetti)
                            ? i
                            : null,
                        );
                      }
                    }
                  }
                }
              },
              [l],
            ),
            $ = i.useCallback(
              function (e) {
                return K(e, { clickHandler: c });
              },
              [K, c],
            ),
            G = i.useCallback(
              function (e) {
                return K(e, { clickHandler: f });
              },
              [K, f],
            ),
            J = i.useCallback(
              function (e) {
                return K(e, { mouseHandler: p });
              },
              [K, p],
            ),
            Q = i.useCallback(
              function (e) {
                return K(e, { mouseHandler: h });
              },
              [K, h],
            );
          return (
            i.useEffect(
              function () {
                var e = function (e, t, n) {
                  null != n && window.addEventListener(e, t);
                };
                return (
                  e("click", $, c),
                  e("mousedown", G, f),
                  e("mousemove", J, p),
                  e("mouseup", Q, h),
                  function () {
                    window.removeEventListener("click", $),
                      window.removeEventListener("mousedown", G),
                      window.removeEventListener("mousemove", J),
                      window.removeEventListener("mouseup", J);
                  }
                );
              },
              [$, G, J, Q, c, f, p, h],
            ),
            i.useEffect(
              function () {
                var e = F.current,
                  t = new ResizeObserver(function () {
                    !(function (e) {
                      if (null != e) {
                        var t = e.getBoundingClientRect(),
                          i = t.width,
                          r = t.height;
                        (e.width = i * n.g.devicePixelRatio),
                          (e.height = r * n.g.devicePixelRatio);
                      }
                    })(F.current),
                      j(!0);
                  });
                return (
                  null != e && t.observe(e),
                  function () {
                    null != e && t.unobserve(e);
                  }
                );
              },
              [j],
            ),
            i.createElement("canvas", d({}, k, { className: a, ref: F }))
          );
        }),
        z = {
          display: "none",
          position: "absolute",
          width: 0,
          height: 0,
          left: "-100%",
        },
        V = i.forwardRef(function (e, t) {
          var n = e.className,
            r = e.visible,
            o = e.sprites,
            a = e.colors,
            s = e.spriteWidth,
            u = e.spriteHeight,
            l = i.useRef(null),
            c = i.useRef([]),
            f = D(),
            d = f.isReady,
            p = f.addReadyListener,
            h = f.removeReadyListener,
            y = f.setIsReady;
          i.useImperativeHandle(
            t,
            function () {
              return {
                getCanvas: function () {
                  return l.current;
                },
                getCreateData: function () {
                  return {
                    sprites: c.current,
                    colors: a,
                    spriteWidth: s,
                    spriteHeight: u,
                  };
                },
                addReadyListener: p,
                removeReadyListener: h,
                isReady: d,
              };
            },
            [p, a, d, h, u, s],
          );
          var v = i.useCallback(
              function () {
                var e = l.current,
                  t =
                    null == e
                      ? void 0
                      : e.getContext("2d", { willReadFrequently: !0 });
                null != t &&
                  null != e &&
                  (t.clearRect(0, 0, e.width, e.height),
                  c.current.forEach(function (e, n) {
                    var i = function (i, r) {
                      var o = s * r + 2 * r,
                        a = u * n + 2 * n;
                      if ((t.drawImage(e.image, o, a, s, u), null != i)) {
                        for (
                          var l,
                            c,
                            f = t.getImageData(o, a, s, u),
                            d =
                              ("#" === (l = i)[0] && (l = l.slice(1)),
                              {
                                r: ((c = parseInt(l, 16)) >> 16) & 255,
                                g: (c >> 8) & 255,
                                b: 255 & c,
                              }),
                            p = 0;
                          p < f.data.length;
                          p += 4
                        )
                          (f.data[p] = d.r),
                            (f.data[p + 1] = d.g),
                            (f.data[p + 2] = d.b);
                        t.putImageData(f, o, a);
                      }
                    };
                    e.colorize
                      ? a.forEach(function (e, t) {
                          return i(e, t);
                        })
                      : i(null, 0);
                  }));
              },
              [a, u, s],
            ),
            m = i.useCallback(
              function () {
                var e = o.map(function (e) {
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
              [o],
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
                        o,
                        a = {
                          label: 0,
                          sent: function () {
                            if (1 & r[0]) throw r[1];
                            return r[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (o = { next: s(0), throw: s(1), return: s(2) }),
                        "function" == typeof Symbol &&
                          (o[Symbol.iterator] = function () {
                            return this;
                          }),
                        o
                      );
                      function s(s) {
                        return function (u) {
                          var l = [s, u];
                          if (n)
                            throw TypeError("Generator is already executing.");
                          for (; o && ((o = 0), l[0] && (a = 0)), a; )
                            try {
                              if (
                                ((n = 1),
                                i &&
                                  (r =
                                    2 & l[0]
                                      ? i.return
                                      : l[0]
                                        ? i.throw ||
                                          ((r = i.return) && r.call(i), 0)
                                        : i.next) &&
                                  !(r = r.call(i, l[1])).done)
                              )
                                return r;
                              switch (
                                ((i = 0), r && (l = [2 & l[0], r.value]), l[0])
                              ) {
                                case 0:
                                case 1:
                                  r = l;
                                  break;
                                case 4:
                                  return a.label++, { value: l[1], done: !1 };
                                case 5:
                                  a.label++, (i = l[1]), (l = [0]);
                                  continue;
                                case 7:
                                  (l = a.ops.pop()), a.trys.pop();
                                  continue;
                                default:
                                  if (
                                    !(r =
                                      (r = a.trys).length > 0 &&
                                      r[r.length - 1]) &&
                                    (6 === l[0] || 2 === l[0])
                                  ) {
                                    a = 0;
                                    continue;
                                  }
                                  if (
                                    3 === l[0] &&
                                    (!r || (l[1] > r[0] && l[1] < r[3]))
                                  ) {
                                    a.label = l[1];
                                    break;
                                  }
                                  if (6 === l[0] && a.label < r[1]) {
                                    (a.label = r[1]), (r = l);
                                    break;
                                  }
                                  if (r && a.label < r[2]) {
                                    (a.label = r[2]), a.ops.push(l);
                                    break;
                                  }
                                  r[2] && a.ops.pop(), a.trys.pop();
                                  continue;
                              }
                              l = t.call(e, a);
                            } catch (e) {
                              (l = [6, e]), (i = 0);
                            } finally {
                              n = r = 0;
                            }
                          if (5 & l[0]) throw l[1];
                          return { value: l[0] ? l[1] : void 0, done: !0 };
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, m()];
                        case 1:
                          return e.sent(), v(), y(!0), [2];
                      }
                    });
                  }),
                  new (n || (n = Promise))(function (r, o) {
                    function a(e) {
                      try {
                        u(i.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function s(e) {
                      try {
                        u(i.throw(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function u(e) {
                      var t;
                      e.done
                        ? r(e.value)
                        : ((t = e.value) instanceof n
                            ? t
                            : new n(function (e) {
                                e(t);
                              })
                          ).then(a, s);
                    }
                    u((i = i.apply(e, t || [])).next());
                  })
                );
              },
              [m, v, y],
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
                null != l.current &&
                  ((l.current.width = (s + 2) * Math.max(a.length, 1)),
                  (l.current.height = (u + 2) * o.length));
              },
              [a.length, u, s, o.length],
            ),
            i.createElement("canvas", {
              ref: l,
              className: n,
              style: void 0 !== r && r ? void 0 : z,
            })
          );
        });
      function O(e, t) {
        var n,
          r,
          o = i.useState(null != (n = null == t ? void 0 : t.isReady) && n),
          a = o[0],
          s = o[1],
          u = i.useState(null != (r = null == e ? void 0 : e.isReady) && r),
          l = u[0],
          c = u[1];
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
        var f = i.useCallback(
            function (n, i) {
              var r = void 0 === i ? {} : i,
                o = r.sprite,
                a = r.color,
                s = null == t ? void 0 : t.getCreateData(),
                u = null == t ? void 0 : t.getCanvas();
              if (null != u && null != s && 0 !== s.sprites.length)
                return null == e ? void 0 : e.createConfetti(n, u, s, o, a);
            },
            [e, t],
          ),
          d = i.useCallback(
            function (e, t, n) {
              for (var i = [], r = 0; r < t; r++) {
                var o = f(e, n);
                o && i.push(o);
              }
              return i;
            },
            [f],
          ),
          p = i.useCallback(
            function (n) {
              var i = null == t ? void 0 : t.getCanvas();
              null != i && (null == e || e.addConfetti(n, i));
            },
            [e, t],
          ),
          h = i.useCallback(
            function (t) {
              null == e || e.deleteConfetti(t);
            },
            [e],
          ),
          y = i.useCallback(
            function () {
              return null == e ? void 0 : e.clearConfetti();
            },
            [e],
          );
        return i.useMemo(
          function () {
            return {
              createConfetti: f,
              createMultipleConfetti: d,
              addConfetti: p,
              clearConfetti: y,
              deleteConfetti: h,
              isReady: null != t && null != e && l && a,
            };
          },
          [p, y, e, f, d, h, l, a, t],
        );
      }
    },
    143236(e) {
      var t,
        n = "object" == typeof Reflect ? Reflect : null,
        i =
          n && "function" == typeof n.apply
            ? n.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      t =
        n && "function" == typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
      var r =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (n, i) {
            var r, o, a;
            function s(n) {
              e.removeListener(t, u), i(n);
            }
            function u() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", s),
                n([].slice.call(arguments));
            }
            y(e, t, u, { once: !0 }),
              "error" !== t &&
                ((r = e),
                (o = s),
                (a = { once: !0 }),
                "function" == typeof r.on && y(r, "error", o, a));
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var a = 10;
      function s(e) {
        if ("function" != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e,
          );
      }
      function u(e) {
        return void 0 === e._maxListeners
          ? o.defaultMaxListeners
          : e._maxListeners;
      }
      function l(e, t, n, i) {
        if (
          (s(n),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (o = e._events)),
              (a = o[t])),
          void 0 === a)
        )
          (a = o[t] = n), ++e._eventsCount;
        else if (
          ("function" == typeof a
            ? (a = o[t] = i ? [n, a] : [a, n])
            : i
              ? a.unshift(n)
              : a.push(n),
          (r = u(e)) > 0 && a.length > r && !a.warned)
        ) {
          a.warned = !0;
          var r,
            o,
            a,
            l = Error(
              "Possible EventEmitter memory leak detected. " +
                a.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit",
            );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = a.length),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function c() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function f(e, t, n) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          r = c.bind(i);
        return (r.listener = n), (i.wrapFn = r), r;
      }
      function d(e, t, n) {
        var i = e._events;
        if (void 0 === i) return [];
        var r = i[t];
        return void 0 === r
          ? []
          : "function" == typeof r
            ? n
              ? [r.listener || r]
              : [r]
            : n
              ? (function (e) {
                  for (var t = Array(e.length), n = 0; n < t.length; ++n)
                    t[n] = e[n].listener || e[n];
                  return t;
                })(r)
              : h(r, r.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" == typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function h(e, t) {
        for (var n = Array(t), i = 0; i < t; ++i) n[i] = e[i];
        return n;
      }
      function y(e, t, n, i) {
        if ("function" == typeof e.on) i.once ? e.once(t, n) : e.on(t, n);
        else if ("function" == typeof e.addEventListener)
          e.addEventListener(t, function r(o) {
            i.once && e.removeEventListener(t, r), n(o);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e,
          );
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || r(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          a = e;
        },
      }),
        (o.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || r(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var r = "error" === e,
            o = this._events;
          if (void 0 !== o) r = r && void 0 === o.error;
          else if (!r) return !1;
          if (r) {
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var a,
              s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw ((s.context = a), s);
          }
          var u = o[e];
          if (void 0 === u) return !1;
          if ("function" == typeof u) i(u, this, t);
          else
            for (var l = u.length, c = h(u, l), n = 0; n < l; ++n)
              i(c[n], this, t);
          return !0;
        }),
        (o.prototype.addListener = function (e, t) {
          return l(this, e, t, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return l(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return s(t), this.on(e, f(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return s(t), this.prependListener(e, f(this, e, t)), this;
        }),
        (o.prototype.removeListener = function (e, t) {
          var n, i, r, o, a;
          if ((s(t), void 0 === (i = this._events) || void 0 === (n = i[e])))
            return this;
          if (n === t || n.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" != typeof n) {
            for (r = -1, o = n.length - 1; o >= 0; o--)
              if (n[o] === t || n[o].listener === t) {
                (a = n[o].listener), (r = o);
                break;
              }
            if (r < 0) return this;
            0 === r
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, r),
              1 === n.length && (i[e] = n[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, a || t);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, n, i;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 == arguments.length) {
            var r,
              o = Object.keys(n);
            for (i = 0; i < o.length; ++i)
              "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (o.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (o.prototype.listenerCount = p),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    430111(e, t, n) {
      n.d(t, { Y: () => i.Y });
      var i = n(411211);
    },
    411211(e, t, n) {
      n.d(t, { Y: () => g });
      var i = n(842830),
        r = n(120330),
        o = n(518375),
        a = n(97626),
        s = n(243399),
        u = n(29685),
        l = n(641277),
        c = n(439489),
        f = n(369364),
        d = n(727504),
        p = n(501974),
        h = n(225441),
        y = n(762437);
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
            u = void 0 === t ? Object.create(null) : (0, r.BT)(t),
            f = (0, o.W)(
              u,
              "localeMatcher",
              "string",
              ["best fit", "lookup"],
              "best fit",
            ),
            d = (0, o.W)(u, "numberingSystem", "string", void 0, void 0);
          if (void 0 !== d && 0 > h.P.indexOf(d))
            throw RangeError(`Invalid numberingSystems: ${d}`);
          (s.nu = d), (s.localeMatcher = f);
          const { localeData: y, availableLocales: v } = g,
            w = (0, l.B)(v, n, s, ["nu"], y, g.getDefaultLocale),
            x = w.locale,
            b = (0, p.n)(this);
          (b.initializedDurationFormat = !0),
            (b.locale = x),
            (b.numberingSystem = w.nu);
          const C = (0, o.W)(
            u,
            "style",
            "string",
            ["long", "short", "narrow", "digital"],
            "short",
          );
          (b.style = C), (b.dataLocale = w.dataLocale);
          let R = "";
          m.forEach((e) => {
            let {
                styleSlot: t,
                displaySlot: n,
                unit: i,
                values: r,
                digitalDefault: o,
              } = e,
              a = (0, c.$)(i, u, C, r, o, R);
            (b[t] = a.style),
              (b[n] = a.display),
              ("hours" === i ||
                "minutes" === i ||
                "seconds" === i ||
                "milliseconds" === i ||
                "microseconds" === i) &&
                (R = a.style);
          }),
            (b.fractionalDigits = (0, a.z)(
              u,
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
          let e = (0, p.n)(this),
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
          if (void 0 === (0, p.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let t = (0, d.H)(e),
            n = (0, f.m)(this, t),
            i = [];
          for (let { type: e, unit: t, value: r } of n) {
            let n = { type: e, value: r };
            t && (n.unit = t), i.push(n);
          }
          return i;
        }
        format(e) {
          if (void 0 === (0, p.n)(this).initializedDurationFormat)
            throw TypeError("Error uninitialized locale");
          let t = (0, d.H)(e),
            n = (0, f.m)(this, t),
            i = "";
          for (let { value: e } of n) i += e;
          return i;
        }
        static supportedLocalesOf(e, t) {
          return (0, u.U)(g.availableLocales, (0, i.N)(e), t);
        }
        static __defaultLocale = "en";
        static availableLocales = new Set();
        static localeData = Object.keys(y.N.localeData).reduce((e, t) => {
          g.availableLocales.add(t);
          let n = y.N.localeData[t].nu;
          return (
            (e[t] = {
              nu: n,
              digitalFormat:
                y.N.localeData[t].separator ||
                n.reduce((e, t) => ((e[t] = y.N.default), e), {}),
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
//# sourceMappingURL=25376.98a3160695735556.js.map
