(() => {
  "use strict";
  var r = {
      191506: function (r, e, t) {
        var n = t(936940);
        r.exports = function (r, e) {
          var t = [][r];
          return (
            !!t &&
            n(function () {
              t.call(
                null,
                e ||
                  function () {
                    return 1;
                  },
                1,
              );
            })
          );
        };
      },
      510030: function (r, e, t) {
        var n = t(526988),
          o = t(339718),
          i = t(470592),
          u = t(49693),
          f = TypeError,
          c = function (r) {
            return function (e, t, c, a) {
              n(t);
              var s = o(e),
                l = i(s),
                p = u(s),
                v = r ? p - 1 : 0,
                d = r ? -1 : 1;
              if (c < 2)
                for (;;) {
                  if (v in l) {
                    (a = l[v]), (v += d);
                    break;
                  }
                  if (((v += d), r ? v < 0 : p <= v))
                    throw f("Reduce of empty array with no initial value");
                }
              for (; r ? v >= 0 : p > v; v += d)
                v in l && (a = t(a, l[v], v, s));
              return a;
            };
          };
        r.exports = { left: c(!1), right: c(!0) };
      },
      391673: function (r, e, t) {
        var n = t(161581),
          o = t(332916);
        r.exports = "process" === o(n.process);
      },
      724458: function (r, e, t) {
        var n = t(147018),
          o = t(510030).left,
          i = t(191506),
          u = t(106295),
          f = t(391673);
        n(
          {
            target: "Array",
            proto: !0,
            forced: (!f && u > 79 && u < 83) || !i("reduce"),
          },
          {
            reduce: function (r) {
              var e = arguments.length;
              return o(this, r, e, e > 1 ? arguments[1] : void 0);
            },
          },
        );
      },
      158633: function (r, e, t) {
        t(724458), t(47120), t(312677);
        var n = t(658722),
          o = t.n(n),
          i = t(624138);
        self.addEventListener("message", (r) => {
          let {
            data: { id: e, searchTerm: t, searchStrings: n, useRegex: u },
          } = r;
          if (u) {
            let r = (function (r, e) {
              let t = RegExp(r, "i");
              return e.reduce((r, e, n) => {
                if ("" === e.trim()) return r;
                if (t.test(e)) return [...r, n];
                let o = (0, i.Fv)(e);
                return t.test(o) ? [...r, n] : r;
              }, []);
            })(t, n);
            self.postMessage({ foundItemIndexes: r, id: e });
            return;
          }
          {
            let r = (function (r, e) {
              let t = r.toLocaleLowerCase(),
                n = (0, i.Fv)(t);
              return e.reduce((r, e, u) => {
                if ("" === e.trim()) return r;
                let f = e.toLocaleLowerCase(),
                  c = (0, i.Fv)(f);
                return o()(t, f) || o()(n, f) || o()(n, c) ? [...r, u] : r;
              }, []);
            })(t, n);
            self.postMessage({ foundItemIndexes: r, id: e });
          }
        });
      },
    },
    e = {};
  function t(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return r[n].call(i.exports, i, i.exports, t), i.exports;
  }
  (t.m = r),
    (t.x = function () {
      var r = t.O(void 0, ["78187", "62734", "61923", "78603"], function () {
        return t("158633");
      });
      return (r = t.O(r));
    }),
    (t.n = function (r) {
      var e =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return t.d(e, { a: e }), e;
    }),
    (t.d = function (r, e) {
      for (var n in e)
        t.o(e, n) &&
          !t.o(r, n) &&
          Object.defineProperty(r, n, { enumerable: !0, get: e[n] });
    }),
    (t.f = {}),
    (t.e = function (r) {
      return Promise.all(
        Object.keys(t.f).reduce(function (e, n) {
          return t.f[n](r, e), e;
        }, []),
      );
    }),
    (t.u = function (r) {
      return (
        "" +
        {
          61923: "ad63549c9c8e26399408",
          62734: "b1e56339cf536f64605f",
          78187: "5067a2ec1b24a6de868c",
          78603: "1d78858ea0c0e5d10112",
        }[r] +
        ".js"
      );
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = function (r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }),
    (() => {
      var r = [];
      t.O = function (e, n, o, i) {
        if (n) {
          i = i || 0;
          for (var u = r.length; u > 0 && r[u - 1][2] > i; u--) r[u] = r[u - 1];
          r[u] = [n, o, i];
          return;
        }
        for (var f = 1 / 0, u = 0; u < r.length; u++) {
          for (
            var n = r[u][0], o = r[u][1], i = r[u][2], c = !0, a = 0;
            a < n.length;
            a++
          )
            (!1 & i || f >= i) &&
            Object.keys(t.O).every(function (r) {
              return t.O[r](n[a]);
            })
              ? n.splice(a--, 1)
              : ((c = !1), i < f && (f = i));
          if (c) {
            r.splice(u--, 1);
            var s = o();
            void 0 !== s && (e = s);
          }
        }
        return e;
      };
    })(),
    (t.p = "/assets/"),
    (() => {
      var r = t.x;
      t.x = function () {
        return Promise.all(
          ["78187", "62734", "61923", "78603"].map(t.e, t),
        ).then(r);
      };
    })(),
    (() => {
      var r = { 56558: 1 };
      t.f.i = function (e, n) {
        !r[e] && importScripts(t.p + t.u(e));
      };
      var e = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        n = e.push.bind(e);
      e.push = function (e) {
        var o = e[0],
          i = e[1],
          u = e[2];
        for (var f in i) t.o(i, f) && (t.m[f] = i[f]);
        for (u && u(t); o.length; ) r[o.pop()] = 1;
        n(e);
      };
    })(),
    t.x();
})();
//# sourceMappingURL=576025f36d17ce389eb9.js.map
