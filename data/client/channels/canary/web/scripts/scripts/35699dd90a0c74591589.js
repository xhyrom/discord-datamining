(() => {
  "use strict";
  var r = {
      789458: function (r, t, e) {
        e(312677),
          self.addEventListener("message", async (r) => {
            let {
                data: { url: t },
              } = r,
              e = !1;
            try {
              await fetch(t);
            } catch (r) {
              e = !0;
            }
            self.postMessage({ url: t, error: e });
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
      var r = e.O(void 0, ["78187"], function () {
        return e("789458");
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
      return "5067a2ec1b24a6de868c.js";
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
          for (var u = r.length; u > 0 && r[u - 1][2] > i; u--) r[u] = r[u - 1];
          r[u] = [n, o, i];
          return;
        }
        for (var c = 1 / 0, u = 0; u < r.length; u++) {
          for (
            var n = r[u][0], o = r[u][1], i = r[u][2], a = !0, f = 0;
            f < n.length;
            f++
          )
            (!1 & i || c >= i) &&
            Object.keys(e.O).every(function (r) {
              return e.O[r](n[f]);
            })
              ? n.splice(f--, 1)
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
    (e.p = "/assets/"),
    (() => {
      var r = e.x;
      e.x = function () {
        return e.e("78187").then(r);
      };
    })(),
    (() => {
      var r = { 80493: 1 };
      e.f.i = function (t, n) {
        !r[t] && importScripts(e.p + e.u(t));
      };
      var t = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        n = t.push.bind(t);
      t.push = function (t) {
        var o = t[0],
          i = t[1],
          u = t[2];
        for (var c in i) e.o(i, c) && (e.m[c] = i[c]);
        for (u && u(e); o.length; ) r[o.pop()] = 1;
        n(t);
      };
    })(),
    e.x();
})();
//# sourceMappingURL=35699dd90a0c74591589.js.map
