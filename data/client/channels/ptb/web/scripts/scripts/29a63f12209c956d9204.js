(() => {
  "use strict";
  var t = {
      137920: function (t, r, n) {
        var e, i;
        n.d(r, {
          J: function () {
            return u;
          },
          z: function () {
            return e;
          },
        }),
          ((i = e || (e = {}))[(i.NONE = 0)] = "NONE"),
          (i[(i.SOCIAL = 1)] = "SOCIAL"),
          (i[(i.CASUAL = 2)] = "CASUAL"),
          (i[(i.COMPETITIVE = 3)] = "COMPETITIVE"),
          (i[(i.CREATIVE = 4)] = "CREATIVE"),
          (i[(i.VERY_HARDCORE = 5)] = "VERY_HARDCORE");
        let u = {
          0: "NONE",
          4: "NONE",
          1: "CASUAL",
          2: "CASUAL",
          3: "COMPETITIVE",
          5: "COMPETITIVE",
        };
      },
      945124: function (t, r, n) {
        n.d(r, {
          y: function () {
            return i;
          },
        });
        var e = n(137920);
        function i(t, r) {
          let n = 0;
          return (
            null != r.games &&
              (n += 2 * r.games.filter((r) => t.games.includes(r)).length),
            null != r.playstyle &&
              (r.playstyle === t.playstyle
                ? (n += 2)
                : e.J[t.playstyle] === e.J[r.playstyle] && (n += 1)),
            null != r.traits &&
              (n +=
                2 *
                Array.from(r.traits).filter((r) => t.traits.includes(r))
                  .length),
            n
          );
        }
      },
      866762: function (t, r, n) {
        n(312677);
        var e = n(945124);
        self.addEventListener("message", (t) => {
          var r, n;
          let {
            data: { unsortedClans: i, id: u, criteria: o },
          } = t;
          let a =
            ((r = i),
            (n = o),
            r
              .map((t) => ({ ...t, affinity: (0, e.y)(t, n) }))
              .sort((t, r) => {
                var i, u;
                let o =
                  null !== (i = r.affinity) && void 0 !== i
                    ? i
                    : (0, e.y)(r, n);
                return (
                  o -
                  (null !== (u = t.affinity) && void 0 !== u
                    ? u
                    : (0, e.y)(t, n))
                );
              }));
          self.postMessage({ sortedClans: a, id: u });
        });
      },
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var u = (r[e] = { exports: {} });
    return t[e].call(u.exports, u, u.exports, n), u.exports;
  }
  (n.m = t),
    (n.x = function () {
      var t = n.O(void 0, ["78187"], function () {
        return n("866762");
      });
      return (t = n.O(t));
    }),
    (n.n = function (t) {
      var r =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(r, { a: r }), r;
    }),
    (n.d = function (t, r) {
      for (var e in r)
        n.o(r, e) &&
          !n.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
    }),
    (n.f = {}),
    (n.e = function (t) {
      return Promise.all(
        Object.keys(n.f).reduce(function (r, e) {
          return n.f[e](t, r), r;
        }, []),
      );
    }),
    (n.u = function (t) {
      return "5067a2ec1b24a6de868c.js";
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (() => {
      var t = [];
      n.O = function (r, e, i, u) {
        if (e) {
          u = u || 0;
          for (var o = t.length; o > 0 && t[o - 1][2] > u; o--) t[o] = t[o - 1];
          t[o] = [e, i, u];
          return;
        }
        for (var a = 1 / 0, o = 0; o < t.length; o++) {
          for (
            var e = t[o][0], i = t[o][1], u = t[o][2], f = !0, l = 0;
            l < e.length;
            l++
          )
            (!1 & u || a >= u) &&
            Object.keys(n.O).every(function (t) {
              return n.O[t](e[l]);
            })
              ? e.splice(l--, 1)
              : ((f = !1), u < a && (a = u));
          if (f) {
            t.splice(o--, 1);
            var s = i();
            void 0 !== s && (r = s);
          }
        }
        return r;
      };
    })(),
    (n.p = "/assets/"),
    (() => {
      var t = n.x;
      n.x = function () {
        return n.e("78187").then(t);
      };
    })(),
    (() => {
      var t = { 59546: 1 };
      n.f.i = function (r, e) {
        !t[r] && importScripts(n.p + n.u(r));
      };
      var r = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        e = r.push.bind(r);
      r.push = function (r) {
        var i = r[0],
          u = r[1],
          o = r[2];
        for (var a in u) n.o(u, a) && (n.m[a] = u[a]);
        for (o && o(n); i.length; ) t[i.pop()] = 1;
        e(r);
      };
    })(),
    n.x();
})();
//# sourceMappingURL=29a63f12209c956d9204.js.map
