(() => {
  "use strict";
  var r = {
      154154: function (r, t, n) {
        var e = n(251069),
          o = n(905145),
          i = n(187684),
          u = Error.captureStackTrace;
        r.exports = function (r, t, n, c) {
          i && (u ? u(r, t) : e(r, "stack", o(n, c)));
        };
      },
      187684: function (r, t, n) {
        var e = n(936940),
          o = n(879);
        r.exports = !e(function () {
          var r = Error("a");
          return (
            !("stack" in r) ||
            (Object.defineProperty(r, "stack", o(1, 7)), 7 !== r.stack)
          );
        });
      },
      197187: function (r, t, n) {
        var e = n(962557),
          o = Function.prototype,
          i = o.apply,
          u = o.call;
        r.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (e
            ? u.bind(i)
            : function () {
                return u.apply(i, arguments);
              });
      },
      668788: function (r, t, n) {
        var e = n(622281),
          o = n(251069);
        r.exports = function (r, t) {
          e(t) && "cause" in t && o(r, "cause", t.cause);
        };
      },
      504559: function (r, t, n) {
        var e = n(97131).f;
        r.exports = function (r, t, n) {
          n in r ||
            e(r, n, {
              configurable: !0,
              get: function () {
                return t[n];
              },
              set: function (r) {
                t[n] = r;
              },
            });
        };
      },
      261987: function (r, t, n) {
        var e = n(545576),
          o = n(740362),
          i = n(251069),
          u = n(838957),
          c = n(276321),
          a = n(381740),
          f = n(504559),
          s = n(95948),
          l = n(892725),
          p = n(668788),
          d = n(154154),
          v = n(325008),
          I = n(992051);
        r.exports = function (r, t, n, h) {
          var E = "stackTraceLimit",
            b = h ? 2 : 1,
            y = r.split("."),
            g = y[y.length - 1],
            T = e.apply(null, y);
          if (T) {
            var R = T.prototype;
            if ((!I && o(R, "cause") && delete R.cause, !n)) return T;
            var m = e("Error"),
              A = t(function (r, t) {
                var n = l(h ? t : r, void 0),
                  e = h ? new T(r) : new T();
                return (
                  void 0 !== n && i(e, "message", n),
                  d(e, A, e.stack, 2),
                  this && u(R, this) && s(e, this, A),
                  arguments.length > b && p(e, arguments[b]),
                  e
                );
              });
            if (
              ((A.prototype = R),
              "Error" !== g
                ? c
                  ? c(A, m)
                  : a(A, m, { name: !0 })
                : v && E in T && (f(A, T, E), f(A, T, "prepareStackTrace")),
              a(A, T),
              !I)
            )
              try {
                R.name !== g && i(R, "name", g), (R.constructor = A);
              } catch (r) {}
            return A;
          }
        };
      },
      411104: function (r, t, n) {
        var e = n(147018),
          o = n(161581),
          i = n(197187),
          u = n(261987),
          c = "WebAssembly",
          a = o[c],
          f = 7 !== Error("e", { cause: 7 }).cause,
          s = function (r, t) {
            var n = {};
            (n[r] = u(r, t, f)),
              e({ global: !0, constructor: !0, arity: 1, forced: f }, n);
          },
          l = function (r, t) {
            if (a && a[r]) {
              var n = {};
              (n[r] = u(c + "." + r, t, f)),
                e(
                  { target: c, stat: !0, constructor: !0, arity: 1, forced: f },
                  n,
                );
            }
          };
        s("Error", function (r) {
          return function (t) {
            return i(r, this, arguments);
          };
        }),
          s("EvalError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          s("RangeError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          s("ReferenceError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          s("SyntaxError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          s("TypeError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          s("URIError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          l("CompileError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          l("LinkError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          }),
          l("RuntimeError", function (r) {
            return function (t) {
              return i(r, this, arguments);
            };
          });
      },
      66153: function (r, t, n) {
        n(250668)(
          "Uint8",
          function (r) {
            return function (t, n, e) {
              return r(this, t, n, e);
            };
          },
          !0,
        );
      },
      512722: function (r) {
        r.exports = function (r, t, n, e, o, i, u, c) {
          if (!r) {
            var a;
            if (void 0 === t)
              a = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
              );
            else {
              var f = [n, e, o, i, u, c],
                s = 0;
              (a = Error(
                t.replace(/%s/g, function () {
                  return f[s++];
                }),
              )).name = "Invariant Violation";
            }
            throw ((a.framesToPop = 1), a);
          }
        };
      },
      231408: function (r, t, n) {
        n(47120), n(312677);
        var e = n(8048),
          o = n(647425);
        let i = new Map(),
          u = (r) => {
            let {
                canvas: t,
                canvasId: n,
                animationId: u,
                assetUrl: c,
                assetData: a,
                isVisible: f,
                shouldAnimate: s,
              } = r,
              l = new e.default({
                canvas: t,
                id: u,
                assetUrl: c,
                assetData: a,
                isVisible: f,
                shouldAnimate: s,
                onInitialDraw: () => {
                  self.postMessage({ type: o.u.FIRST_DRAW, canvasId: n });
                },
                onError: () => {
                  self.postMessage({ type: o.u.ERROR, canvasId: n });
                },
              });
            i.set(n, l);
          },
          c = (r) => {
            var t;
            let { canvasId: n } = r;
            null === (t = i.get(n)) || void 0 === t || t.drop(), i.delete(n);
          },
          a = (r) => {
            var t;
            let { canvasId: n, isVisible: e } = r;
            null === (t = i.get(n)) || void 0 === t || t.setVisibility(e);
          },
          f = (r) => {
            var t;
            let { canvasId: n, shouldAnimate: e, nextFrame: o } = r;
            null === (t = i.get(n)) || void 0 === t || t.setState(e, o);
          };
        self.addEventListener("message", (r) => {
          let { data: t } = r;
          switch (t.type) {
            case o.u.INITIALIZE:
              u(t);
              break;
            case o.u.DROP:
              c(t);
              break;
            case o.u.VISIBILITY_CHANGE:
              a(t);
              break;
            case o.u.STATE_CHANGE:
              f(t);
          }
        });
      },
      647425: function (r, t, n) {
        var e, o;
        n.d(t, {
          u: function () {
            return e;
          },
        }),
          ((o = e || (e = {}))[(o.DROP = 0)] = "DROP"),
          (o[(o.INITIALIZE = 1)] = "INITIALIZE"),
          (o[(o.VISIBILITY_CHANGE = 2)] = "VISIBILITY_CHANGE"),
          (o[(o.STATE_CHANGE = 3)] = "STATE_CHANGE"),
          (o[(o.FIRST_DRAW = 4)] = "FIRST_DRAW"),
          (o[(o.ERROR = 5)] = "ERROR");
      },
      170830: function (r, t, n) {
        var e, o;
        function i(r) {
          let t = 0,
            n = [];
          return async function () {
            if (2 !== t) {
              if (1 === t)
                return new Promise((r) => {
                  n.push(r);
                });
              for (t = 1, await r(), t = 2; n.length > 0; ) {
                var e;
                null === (e = n.shift()) || void 0 === e || e();
              }
            }
          };
        }
        n.d(t, {
          G: function () {
            return i;
          },
        }),
          n(653041),
          ((o = e || (e = {}))[(o.UNINITIALIZED = 0)] = "UNINITIALIZED"),
          (o[(o.INITIALIZING = 1)] = "INITIALIZING"),
          (o[(o.READY = 2)] = "READY");
      },
    },
    t = {};
  function n(e) {
    var o = t[e];
    if (void 0 !== o) return o.exports;
    var i = (t[e] = { exports: {} });
    return r[e].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = r),
    (n.x = function () {
      var r = n.O(void 0, ["78187", "62734", "71984", "57961"], function () {
        return n("231408");
      });
      return (r = n.O(r));
    }),
    (n.n = function (r) {
      var t =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (r, t) {
      for (var e in t)
        n.o(t, e) &&
          !n.o(r, e) &&
          Object.defineProperty(r, e, { enumerable: !0, get: t[e] });
    }),
    (n.f = {}),
    (n.e = function (r) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, e) {
          return n.f[e](r, t), t;
        }, []),
      );
    }),
    (n.u = function (r) {
      return (
        "" +
        {
          43903: "af928c3cadff5e7b3f4c",
          57961: "aac77d3077af88b623b4",
          62734: "b1e56339cf536f64605f",
          71984: "a6f6204cd40c3c5f5c14",
          78187: "5067a2ec1b24a6de868c",
          91789: "630725082ebfe6a238e3",
        }[r] +
        ".js"
      );
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (r, t) {
      return Object.prototype.hasOwnProperty.call(r, t);
    }),
    (n.r = function (r) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(r, "__esModule", { value: !0 });
    }),
    (() => {
      var r = [];
      n.O = function (t, e, o, i) {
        if (e) {
          i = i || 0;
          for (var u = r.length; u > 0 && r[u - 1][2] > i; u--) r[u] = r[u - 1];
          r[u] = [e, o, i];
          return;
        }
        for (var c = 1 / 0, u = 0; u < r.length; u++) {
          for (
            var e = r[u][0], o = r[u][1], i = r[u][2], a = !0, f = 0;
            f < e.length;
            f++
          )
            (!1 & i || c >= i) &&
            Object.keys(n.O).every(function (r) {
              return n.O[r](e[f]);
            })
              ? e.splice(f--, 1)
              : ((a = !1), i < c && (c = i));
          if (a) {
            r.splice(u--, 1);
            var s = o();
            void 0 !== s && (t = s);
          }
        }
        return t;
      };
    })(),
    (n.p = "/assets/"),
    (() => {
      var r = n.x;
      n.x = function () {
        return Promise.all(
          ["78187", "62734", "71984", "57961"].map(n.e, n),
        ).then(r);
      };
    })(),
    (() => {
      var r = { 36412: 1 };
      n.f.i = function (t, e) {
        !r[t] && importScripts(n.p + n.u(t));
      };
      var t = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        e = t.push.bind(t);
      t.push = function (t) {
        var o = t[0],
          i = t[1],
          u = t[2];
        for (var c in i) n.o(i, c) && (n.m[c] = i[c]);
        for (u && u(n); o.length; ) r[o.pop()] = 1;
        e(t);
      };
    })(),
    n.x();
})();
//# sourceMappingURL=c4453e6d2af6b719dab0.js.map
