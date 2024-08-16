(() => {
  "use strict";
  var r = {
      610148: function (r, t, e) {
        var n = e(325008),
          o = e(498576),
          i = TypeError,
          a = Object.getOwnPropertyDescriptor,
          u =
            n &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], "length", { writable: !1 }).length =
                  1;
              } catch (r) {
                return r instanceof TypeError;
              }
            })();
        r.exports = u
          ? function (r, t) {
              if (o(r) && !a(r, "length").writable)
                throw i("Cannot set read only .length");
              return (r.length = t);
            }
          : function (r, t) {
              return (r.length = t);
            };
      },
      886960: function (r) {
        var t = TypeError;
        r.exports = function (r) {
          if (r > 9007199254740991) throw t("Maximum allowed index exceeded");
          return r;
        };
      },
      498576: function (r, t, e) {
        var n = e(332916);
        r.exports =
          Array.isArray ||
          function (r) {
            return "Array" === n(r);
          };
      },
      653041: function (r, t, e) {
        var n = e(147018),
          o = e(339718),
          i = e(49693),
          a = e(610148),
          u = e(886960),
          f = e(936940)(function () {
            return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
          });
        n(
          {
            target: "Array",
            proto: !0,
            arity: 1,
            forced:
              f ||
              !(function () {
                try {
                  Object.defineProperty([], "length", { writable: !1 }).push();
                } catch (r) {
                  return r instanceof TypeError;
                }
              })(),
          },
          {
            push: function (r) {
              var t = o(this),
                e = i(t),
                n = arguments.length;
              u(e + n);
              for (var f = 0; f < n; f++) (t[e] = arguments[f]), e++;
              return a(t, e), e;
            },
          },
        );
      },
      61841: function (r, t, e) {
        e(653041), e(47120), e(312677);
        let n = (r, t, e, n) => {
          var o;
          let i;
          let { fineTuning: a, fineTuningResolution: u, duration: f } = e,
            l = Math.floor(t / n.waveformBlockWidth);
          if (a >= 0) {
            let t = Math.floor((r.length * (a - (u * a) / f)) / f),
              e = Math.floor((r.length * (a + (u * (f - a)) / f)) / f);
            i = r.slice(t, e);
          } else i = r;
          let c = Math.floor(i.length / l),
            s = [];
          for (let r = 0; r < l; r++) {
            let t = c * r,
              e = 0;
            for (let r = 0; r < c; r++) e += Math.abs(i[t + r]);
            s.push(e / c);
          }
          let h = Math.pow(Math.max(...s), -1),
            p = s.map((r) => r * h),
            d = [...s].sort()[Math.floor(0.95 * s.length)];
          return {
            normalizedData: p,
            normalizedVolumeMultipler: Math.min(
              (null !== (o = n.loudnessThreshold) && void 0 !== o ? o : d) / d,
              1,
            ),
          };
        };
        self.addEventListener("message", (r) => {
          let {
              data: {
                rawBufferData: t,
                width: e,
                options: o,
                config: i,
                id: a,
              },
            } = r,
            { normalizedData: u, normalizedVolumeMultipler: f } = n(t, e, o, i);
          self.postMessage({
            waveform: u,
            id: a,
            normalizedVolumeMultipler: f,
          });
        });
      },
    },
    t = {};
  function e(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return r[n].call(i.exports, i, i.exports, e), i.exports;
  }
  (e.m = r),
    (e.x = function () {
      var r = e.O(void 0, ["78187", "62734"], function () {
        return e("61841");
      });
      return (r = e.O(r));
    }),
    (e.n = function (r) {
      var t =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return e.d(t, { a: t }), t;
    }),
    (e.d = function (r, t) {
      for (var n in t)
        e.o(t, n) &&
          !e.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: t[n] });
    }),
    (e.f = {}),
    (e.e = function (r) {
      return Promise.all(
        Object.keys(e.f).reduce(function (t, n) {
          return e.f[n](r, t), t;
        }, []),
      );
    }),
    (e.u = function (r) {
      return (
        "" +
        { 62734: "b1e56339cf536f64605f", 78187: "5067a2ec1b24a6de868c" }[r] +
        ".js"
      );
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = function (r, t) {
      return Object.prototype.hasOwnProperty.call(r, t);
    }),
    (() => {
      var r = [];
      e.O = function (t, n, o, i) {
        if (n) {
          i = i || 0;
          for (var a = r.length; a > 0 && r[a - 1][2] > i; a--) r[a] = r[a - 1];
          r[a] = [n, o, i];
          return;
        }
        for (var u = 1 / 0, a = 0; a < r.length; a++) {
          for (
            var n = r[a][0], o = r[a][1], i = r[a][2], f = !0, l = 0;
            l < n.length;
            l++
          )
            (!1 & i || u >= i) &&
            Object.keys(e.O).every(function (r) {
              return e.O[r](n[l]);
            })
              ? n.splice(l--, 1)
              : ((f = !1), i < u && (u = i));
          if (f) {
            r.splice(a--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      };
    })(),
    (e.p = "/assets/"),
    (() => {
      var r = e.x;
      e.x = function () {
        return Promise.all([e.e("78187"), e.e("62734")]).then(r);
      };
    })(),
    (() => {
      var r = { 14315: 1 };
      e.f.i = function (t, n) {
        !r[t] && importScripts(e.p + e.u(t));
      };
      var t = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        n = t.push.bind(t);
      t.push = function (t) {
        var o = t[0],
          i = t[1],
          a = t[2];
        for (var u in i) e.o(i, u) && (e.m[u] = i[u]);
        for (a && a(e); o.length; ) r[o.pop()] = 1;
        n(t);
      };
    })(),
    e.x();
})();
//# sourceMappingURL=93115c7d0be7b869d911.js.map
