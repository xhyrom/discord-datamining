(() => {
  "use strict";
  var n = {
      511004: function (n, t, e) {
        function r() {
          return e.e("47674").then(e.bind(e, 305522));
        }
        async function o(n, t, e, o, u) {
          return (await r()).crop_gif(n, t, e, o, u);
        }
        e.d(t, {
          Z: function () {
            return r;
          },
          t: function () {
            return o;
          },
        });
      },
      486324: function (n, t, e) {
        e.d(t, {
          C5: function () {
            return m;
          },
          Ff: function () {
            return I;
          },
          Ij: function () {
            return E;
          },
          L0: function () {
            return a;
          },
          MY: function () {
            return h;
          },
          N8: function () {
            return d;
          },
          PB: function () {
            return A;
          },
          SW: function () {
            return R;
          },
          Uo: function () {
            return b;
          },
          WV: function () {
            return P;
          },
          X_: function () {
            return O;
          },
          _T: function () {
            return p;
          },
          d6: function () {
            return _;
          },
          f: function () {
            return s;
          },
          pC: function () {
            return u;
          },
          qj: function () {
            return v;
          },
          sX: function () {
            return T;
          },
          u: function () {
            return i;
          },
          ut: function () {
            return y;
          },
          vJ: function () {
            return f;
          },
          xT: function () {
            return l;
          },
        });
        var r,
          o,
          u,
          i,
          c = e(678916);
        ((r = u || (u = {}))[(r.AVATAR = 0)] = "AVATAR"),
          (r[(r.BANNER = 1)] = "BANNER"),
          (r[(r.GUILD_BANNER = 2)] = "GUILD_BANNER"),
          (r[(r.VIDEO_BACKGROUND = 3)] = "VIDEO_BACKGROUND"),
          (r[(r.SCHEDULED_EVENT_IMAGE = 4)] = "SCHEDULED_EVENT_IMAGE"),
          (r[(r.HOME_HEADER = 5)] = "HOME_HEADER"),
          (r[(r.AVATAR_DECORATION = 6)] = "AVATAR_DECORATION");
        let f = 568,
          a = 2400,
          s = 848,
          O = 2400,
          p = 1350,
          _ = 2400,
          l = 960,
          d = 2400,
          b = 600,
          h = 17 / 6,
          E = 16 / 9,
          y = 2.5,
          T = 4,
          v = 568 / (17 / 6),
          m = 568 / (16 / 9),
          P = 227.2,
          R = 142,
          I = c.HE.width / c.HE.height,
          A = f / I;
        ((o = i || (i = {}))[(o.CROP_GIF_START = 0)] = "CROP_GIF_START"),
          (o[(o.CROP_GIF_COMPLETE = 1)] = "CROP_GIF_COMPLETE"),
          (o[(o.CROP_GIF_ERROR = 2)] = "CROP_GIF_ERROR");
      },
      680415: function (n, t, e) {
        e(312677);
        var r = e(511004);
        e(368387);
        var o = e(486324);
        async function u(n, t, e, u, i) {
          try {
            let c = await (0, r.t)(n, t, e, u, i);
            self.postMessage({ type: o.u.CROP_GIF_COMPLETE, result: c });
          } catch (n) {
            self.postMessage({ type: o.u.CROP_GIF_ERROR });
          }
        }
        self.addEventListener("message", (n) => {
          let { data: t } = n;
          if (t.type === o.u.CROP_GIF_START) {
            let { gif: n, x: e, y: r, width: o, height: i } = t;
            u(n, e, r, o, i);
          }
        });
      },
      678916: function (n, t, e) {
        var r, o, u, i;
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
            return o;
          },
          f7: function () {
            return a;
          },
          xV: function () {
            return r;
          },
        }),
          e(724458),
          ((u = r || (r = {}))[(u.BACKGROUND = 0)] = "BACKGROUND"),
          ((i = o || (o = {}))[(i.OPTION_1 = 0)] = "OPTION_1"),
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
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var u = (t[r] = { id: r, loaded: !1, exports: {} });
    return n[r].call(u.exports, u, u.exports, e), (u.loaded = !0), u.exports;
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
        o = function (n) {
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
      e.a = function (e, u, i) {
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
          u(
            function (e) {
              f = e.map(function (e) {
                if (null !== e && "object" == typeof e) {
                  if (e[n]) return e;
                  if (e.then) {
                    var u = [];
                    (u.d = 0),
                      e.then(
                        function (n) {
                          (i[t] = n), o(u);
                        },
                        function (n) {
                          (i[r] = n), o(u);
                        },
                      );
                    var i = {};
                    return (
                      (i[n] = function (n) {
                        n(u);
                      }),
                      i
                    );
                  }
                }
                var c = {};
                return (c[n] = function () {}), (c[t] = e), c;
              });
              var u,
                i = function () {
                  return f.map(function (n) {
                    if (n[r]) throw n[r];
                    return n[t];
                  });
                },
                a = new Promise(function (t) {
                  (u = function () {
                    t(i);
                  }).r = 0;
                  var e = function (n) {
                    n === c ||
                      O.has(n) ||
                      (O.add(n), n && !n.d && (u.r++, n.push(u)));
                  };
                  f.map(function (t) {
                    t[n](e);
                  });
                });
              return u.r ? a : i();
            },
            function (n) {
              n ? s((_[r] = n)) : a(p), o(c);
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
          2797: "a91a2268773812e0a007",
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
      e.O = function (t, r, o, u) {
        if (r) {
          u = u || 0;
          for (var i = n.length; i > 0 && n[i - 1][2] > u; i--) n[i] = n[i - 1];
          n[i] = [r, o, u];
          return;
        }
        for (var c = 1 / 0, i = 0; i < n.length; i++) {
          for (
            var r = n[i][0], o = n[i][1], u = n[i][2], f = !0, a = 0;
            a < r.length;
            a++
          )
            (!1 & u || c >= u) &&
            Object.keys(e.O).every(function (n) {
              return e.O[n](r[a]);
            })
              ? r.splice(a--, 1)
              : ((f = !1), u < c && (c = u));
          if (f) {
            n.splice(i--, 1);
            var s = o();
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
    (e.v = function (n, t, r, o) {
      var u = fetch(e.p + "" + r + ".module.wasm"),
        i = function () {
          return u
            .then(function (n) {
              return n.arrayBuffer();
            })
            .then(function (n) {
              return WebAssembly.instantiate(n, o);
            })
            .then(function (t) {
              return Object.assign(n, t.instance.exports);
            });
        };
      return u.then(function (t) {
        return "function" == typeof WebAssembly.instantiateStreaming
          ? WebAssembly.instantiateStreaming(t, o).then(
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
        var o = t[0],
          u = t[1],
          i = t[2];
        for (var c in u) e.o(u, c) && (e.m[c] = u[c]);
        for (i && i(e); o.length; ) n[o.pop()] = 1;
        r(t);
      };
    })(),
    e.x();
})();
//# sourceMappingURL=9fdfe2ca9090245f5074.js.map
