(() => {
  "use strict";
  var n = {
      511004: function (n, t, e) {
        function r() {
          return e.e("47674").then(e.bind(e, 305522));
        }
        async function u(n, t, e, u, o) {
          return (await r()).crop_gif(n, t, e, u, o);
        }
        e.d(t, {
          Z: function () {
            return r;
          },
          t: function () {
            return u;
          },
        });
      },
      486324: function (n, t, e) {
        e.d(t, {
          C5: function () {
            return m;
          },
          Ff: function () {
            return g;
          },
          Ij: function () {
            return y;
          },
          L0: function () {
            return s;
          },
          MY: function () {
            return E;
          },
          N8: function () {
            return b;
          },
          PB: function () {
            return S;
          },
          SP: function () {
            return A;
          },
          SW: function () {
            return I;
          },
          US: function () {
            return a;
          },
          Uo: function () {
            return h;
          },
          WV: function () {
            return R;
          },
          X_: function () {
            return p;
          },
          _T: function () {
            return _;
          },
          d6: function () {
            return l;
          },
          f: function () {
            return O;
          },
          kP: function () {
            return C;
          },
          pC: function () {
            return o;
          },
          qj: function () {
            return T;
          },
          sX: function () {
            return P;
          },
          t2: function () {
            return N;
          },
          tv: function () {
            return w;
          },
          u: function () {
            return i;
          },
          ut: function () {
            return v;
          },
          vJ: function () {
            return f;
          },
          xT: function () {
            return d;
          },
        });
        var r,
          u,
          o,
          i,
          c = e(678916);
        ((r = o || (o = {}))[(r.AVATAR = 0)] = "AVATAR"),
          (r[(r.BANNER = 1)] = "BANNER"),
          (r[(r.GUILD_BANNER = 2)] = "GUILD_BANNER"),
          (r[(r.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
          (r[(r.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
          (r[(r.HOME_HEADER = 5)] = "HOME_HEADER"),
          (r[(r.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
        let f = 568,
          a = 552,
          s = 2400,
          O = 848,
          p = 2400,
          _ = 1350,
          l = 2400,
          d = 960,
          b = 2400,
          h = 600,
          E = 17 / 6,
          y = 16 / 9,
          v = 2.5,
          P = 4,
          T = 568 / (17 / 6),
          m = 568 / (16 / 9),
          R = 227.2,
          I = 142,
          A = 552 / (17 / 6),
          N = 552 / (16 / 9),
          w = 220.8,
          g = c.HE.width / c.HE.height,
          S = f / g,
          C = a / g;
        ((u = i || (i = {}))[(u.CROP_GIF_START = 0)] = "CROP_GIF_START"),
          (u[(u.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
          (u[(u.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
      },
      680415: function (n, t, e) {
        e(312677);
        var r = e(511004);
        e(149182);
        var u = e(486324);
        async function o(n, t, e, o, i) {
          try {
            let c = await (0, r.t)(n, t, e, o, i);
            self.postMessage({ type: u.u.CROP_GIF_COMPLETE, result: c });
          } catch (n) {
            self.postMessage({ type: u.u.CROP_GIF_ERROR });
          }
        }
        self.addEventListener("message", (n) => {
          let { data: t } = n;
          if (t.type === u.u.CROP_GIF_START) {
            let { gif: n, x: e, y: r, width: u, height: i } = t;
            o(n, e, r, u, i);
          }
        });
      },
      678916: function (n, t, e) {
        var r, u, o, i;
        e.d(t, {
          E1: function () {
            return f;
          },
          HE: function () {
            return s;
          },
          SJ: function () {
            return O;
          },
          X7: function () {
            return c;
          },
          dp: function () {
            return u;
          },
          f7: function () {
            return a;
          },
          xV: function () {
            return r;
          },
        }),
          e(724458),
          ((o = r || (r = {}))[(o.BACKGROUND = 0)] = "BACKGROUND"),
          ((i = u || (u = {}))[(i.OPTION_1 = 0)] = "OPTION_1"),
          (i[(i.OPTION_2 = 1)] = "OPTION_2"),
          (i[(i.OPTION_3 = 2)] = "OPTION_3"),
          (i[(i.OPTION_4 = 3)] = "OPTION_4"),
          (i[(i.OPTION_7 = 7)] = "OPTION_7"),
          (i[(i.OPTION_8 = 8)] = "OPTION_8"),
          (i[(i.OPTION_9 = 9)] = "OPTION_9"),
          (i[(i.OPTION_10 = 10)] = "OPTION_10");
        let c = [7, 8, 9, 10],
          f = [7, 8, 9, 10, 0, 1, 2, 3].reduce(
            (n, t, e) => ({ ...n, [t]: e }),
            {},
          ),
          a = "blur",
          s = { width: 1280, height: 720 },
          O = 10485760;
      },
    },
    t = {};
  function e(r) {
    var u = t[r];
    if (void 0 !== u) return u.exports;
    var o = (t[r] = { id: r, loaded: !1, exports: {} });
    return n[r].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
  }
  (e.m = n),
    (e.x = function () {
      var n = e.O(void 0, ["78187", "2797"], function () {
        return e("680415");
      });
      return (n = e.O(n));
    }),
    (() => {
      var n =
          "function" == typeof Symbol
            ? Symbol("webpack queues")
            : "__webpack_queues__",
        t =
          "function" == typeof Symbol
            ? Symbol("webpack exports")
            : "__webpack_exports__",
        r =
          "function" == typeof Symbol
            ? Symbol("webpack error")
            : "__webpack_error__",
        u = function (n) {
          n &&
            n.d < 1 &&
            ((n.d = 1),
            n.forEach(function (n) {
              n.r--;
            }),
            n.forEach(function (n) {
              n.r-- ? n.r++ : n();
            }));
        };
      e.a = function (e, o, i) {
        i && ((c = []).d = -1);
        var c,
          f,
          a,
          s,
          O = new Set(),
          p = e.exports,
          _ = new Promise(function (n, t) {
            (s = t), (a = n);
          });
        (_[t] = p),
          (_[n] = function (n) {
            c && n(c), O.forEach(n), _.catch(function () {});
          }),
          (e.exports = _),
          o(
            function (e) {
              f = e.map(function (e) {
                if (null !== e && "object" == typeof e) {
                  if (e[n]) return e;
                  if (e.then) {
                    var o = [];
                    (o.d = 0),
                      e.then(
                        function (n) {
                          (i[t] = n), u(o);
                        },
                        function (n) {
                          (i[r] = n), u(o);
                        },
                      );
                    var i = {};
                    return (
                      (i[n] = function (n) {
                        n(o);
                      }),
                      i
                    );
                  }
                }
                var c = {};
                return (c[n] = function () {}), (c[t] = e), c;
              });
              var o,
                i = function () {
                  return f.map(function (n) {
                    if (n[r]) throw n[r];
                    return n[t];
                  });
                },
                a = new Promise(function (t) {
                  (o = function () {
                    t(i);
                  }).r = 0;
                  var e = function (n) {
                    n === c ||
                      O.has(n) ||
                      (O.add(n), n && !n.d && (o.r++, n.push(o)));
                  };
                  f.map(function (t) {
                    t[n](e);
                  });
                });
              return o.r ? a : i();
            },
            function (n) {
              n ? s((_[r] = n)) : a(p), u(c);
            },
          ),
          c && c.d < 0 && (c.d = 0);
      };
    })(),
    (e.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return e.d(t, { a: t }), t;
    }),
    (e.d = function (n, t) {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.f = {}),
    (e.e = function (n) {
      return Promise.all(
        Object.keys(e.f).reduce(function (t, r) {
          return e.f[r](n, t), t;
        }, []),
      );
    }),
    (e.u = function (n) {
      return (
        "" +
        {
          2797: "28becefbd453396ac564",
          47674: "6e8c124ef0487e50b674",
          78187: "5067a2ec1b24a6de868c",
        }[n] +
        ".js"
      );
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.hmd = function (n) {
      return (
        !(n = Object.create(n)).children && (n.children = []),
        Object.defineProperty(n, "exports", {
          enumerable: !0,
          set: function () {
            throw Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                n.id,
            );
          },
        }),
        n
      );
    }),
    (e.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (e.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (() => {
      var n = [];
      e.O = function (t, r, u, o) {
        if (r) {
          o = o || 0;
          for (var i = n.length; i > 0 && n[i - 1][2] > o; i--) n[i] = n[i - 1];
          n[i] = [r, u, o];
          return;
        }
        for (var c = 1 / 0, i = 0; i < n.length; i++) {
          for (
            var r = n[i][0], u = n[i][1], o = n[i][2], f = !0, a = 0;
            a < r.length;
            a++
          )
            (!1 & o || c >= o) &&
            Object.keys(e.O).every(function (n) {
              return e.O[n](r[a]);
            })
              ? r.splice(a--, 1)
              : ((f = !1), o < c && (c = o));
          if (f) {
            n.splice(i--, 1);
            var s = u();
            void 0 !== s && (t = s);
          }
        }
        return t;
      };
    })(),
    (e.p = "/assets/"),
    (() => {
      var n = e.x;
      e.x = function () {
        return Promise.all([e.e("78187"), e.e("2797")]).then(n);
      };
    })(),
    (e.v = function (n, t, r, u) {
      var o = fetch(e.p + "" + r + ".module.wasm"),
        i = function () {
          return o
            .then(function (n) {
              return n.arrayBuffer();
            })
            .then(function (n) {
              return WebAssembly.instantiate(n, u);
            })
            .then(function (t) {
              return Object.assign(n, t.instance.exports);
            });
        };
      return o.then(function (t) {
        return "function" == typeof WebAssembly.instantiateStreaming
          ? WebAssembly.instantiateStreaming(t, u).then(
              function (t) {
                return Object.assign(n, t.instance.exports);
              },
              function (n) {
                if ("application/wasm" !== t.headers.get("Content-Type"))
                  return (
                    console.warn(
                      "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                      n,
                    ),
                    i()
                  );
                throw n;
              },
            )
          : i();
      });
    }),
    (() => {
      var n = { 86047: 1 };
      e.f.i = function (t, r) {
        !n[t] && importScripts(e.p + e.u(t));
      };
      var t = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        r = t.push.bind(t);
      t.push = function (t) {
        var u = t[0],
          o = t[1],
          i = t[2];
        for (var c in o) e.o(o, c) && (e.m[c] = o[c]);
        for (i && i(e); u.length; ) n[u.pop()] = 1;
        r(t);
      };
    })(),
    e.x();
})();
//# sourceMappingURL=84d1daa933ebb08731ec.js.map
