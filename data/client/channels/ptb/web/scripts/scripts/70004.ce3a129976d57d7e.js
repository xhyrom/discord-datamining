"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70004"],
  {
    828027(r, t, e) {
      var n = e(667906),
        o = String,
        a = TypeError;
      r.exports = function (r) {
        if (n(r)) return r;
        throw new a("Can't set " + o(r) + " as a prototype");
      };
    },
    593858(r) {
      r.exports = "u" > typeof ArrayBuffer && "u" > typeof DataView;
    },
    739305(r, t, e) {
      var n,
        o,
        a,
        i = e(593858),
        p = e(257943),
        u = e(860511),
        y = e(339626),
        f = e(598349),
        c = e(210140),
        s = e(324988),
        d = e(406208),
        v = e(706938),
        A = e(693655),
        h = e(485155),
        g = e(524152),
        T = e(42756),
        w = e(458680),
        x = e(380744),
        l = e(753891),
        _ = e(883972),
        I = _.enforce,
        b = _.get,
        E = u.Int8Array,
        O = E && E.prototype,
        R = u.Uint8ClampedArray,
        C = R && R.prototype,
        U = E && T(E),
        j = O && T(O),
        m = Object.prototype,
        M = u.TypeError,
        P = x("toStringTag"),
        S = l("TYPED_ARRAY_TAG"),
        B = "TypedArrayConstructor",
        F = i && !!w && "Opera" !== s(u.opera),
        V = !1,
        L = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8,
        },
        Y = { BigInt64Array: 8, BigUint64Array: 8 },
        D = function (r) {
          var t = T(r);
          if (f(t)) {
            var e = b(t);
            return e && c(e, B) ? e[B] : D(t);
          }
        },
        k = function (r) {
          if (!f(r)) return !1;
          var t = s(r);
          return c(L, t) || c(Y, t);
        };
      for (n in L) (a = (o = u[n]) && o.prototype) ? (I(a)[B] = o) : (F = !1);
      for (n in Y) (a = (o = u[n]) && o.prototype) && (I(a)[B] = o);
      if (
        (!F || !y(U) || U === Function.prototype) &&
        ((U = function () {
          throw new M("Incorrect invocation");
        }),
        F)
      )
        for (n in L) u[n] && w(u[n], U);
      if ((!F || !j || j === m) && ((j = U.prototype), F))
        for (n in L) u[n] && w(u[n].prototype, j);
      if ((F && T(C) !== j && w(C, j), p && !c(j, P)))
        for (n in ((V = !0),
        h(j, P, {
          configurable: !0,
          get: function () {
            return f(this) ? this[S] : void 0;
          },
        }),
        L))
          u[n] && v(u[n], S, n);
      r.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: F,
        TYPED_ARRAY_TAG: V && S,
        aTypedArray: function (r) {
          if (k(r)) return r;
          throw new M("Target is not a typed array");
        },
        aTypedArrayConstructor: function (r) {
          if (y(r) && (!w || g(U, r))) return r;
          throw new M(d(r) + " is not a typed array constructor");
        },
        exportTypedArrayMethod: function (r, t, e, n) {
          if (p) {
            if (e)
              for (var o in L) {
                var a = u[o];
                if (a && c(a.prototype, r))
                  try {
                    delete a.prototype[r];
                  } catch (e) {
                    try {
                      a.prototype[r] = t;
                    } catch (r) {}
                  }
              }
            (!j[r] || e) && A(j, r, e ? t : (F && O[r]) || t, n);
          }
        },
        exportTypedArrayStaticMethod: function (r, t, e) {
          var n, o;
          if (p) {
            if (w) {
              if (e) {
                for (n in L)
                  if ((o = u[n]) && c(o, r))
                    try {
                      delete o[r];
                    } catch (r) {}
              }
              if (U[r] && !e) return;
              try {
                return A(U, r, e ? t : (F && U[r]) || t);
              } catch (r) {}
            }
            for (n in L) (o = u[n]) && (!o[r] || e) && A(o, r, t);
          }
        },
        getTypedArrayConstructor: D,
        isView: function (r) {
          if (!f(r)) return !1;
          var t = s(r);
          return "DataView" === t || c(L, t) || c(Y, t);
        },
        isTypedArray: k,
        TypedArray: U,
        TypedArrayPrototype: j,
      };
    },
    412405(r, t, e) {
      var n = e(503199);
      r.exports = function (r, t, e) {
        for (
          var o = 0, a = arguments.length > 2 ? e : n(t), i = new r(a);
          a > o;

        )
          i[o] = t[o++];
        return i;
      };
    },
    304052(r, t, e) {
      var n = e(221015),
        o = e(93714),
        a = e(250594),
        i = e(503199),
        p = function (r) {
          var t = 1 === r;
          return function (e, p, u) {
            for (var y, f = a(e), c = o(f), s = i(c), d = n(p, u); s-- > 0; )
              if (d((y = c[s]), s, f))
                switch (r) {
                  case 0:
                    return y;
                  case 1:
                    return s;
                }
            return t ? -1 : void 0;
          };
        };
      r.exports = { findLast: p(0), findLastIndex: p(1) };
    },
    108591(r, t, e) {
      var n = e(503199);
      r.exports = function (r, t) {
        for (var e = n(r), o = new t(e), a = 0; a < e; a++) o[a] = r[e - a - 1];
        return o;
      };
    },
    710821(r, t, e) {
      var n = e(503199),
        o = e(120394),
        a = RangeError;
      r.exports = function (r, t, e, i) {
        var p = n(r),
          u = o(e),
          y = u < 0 ? p + u : u;
        if (y >= p || y < 0) throw new a("Incorrect index");
        for (var f = new t(p), c = 0; c < p; c++) f[c] = c === y ? i : r[c];
        return f;
      };
    },
    324988(r, t, e) {
      var n = e(344815),
        o = e(339626),
        a = e(647055),
        i = e(380744)("toStringTag"),
        p = Object,
        u =
          "Arguments" ===
          a(
            (function () {
              return arguments;
            })(),
          ),
        y = function (r, t) {
          try {
            return r[t];
          } catch (r) {}
        };
      r.exports = n
        ? a
        : function (r) {
            var t, e, n;
            return void 0 === r
              ? "Undefined"
              : null === r
                ? "Null"
                : "string" == typeof (e = y((t = p(r)), i))
                  ? e
                  : u
                    ? a(t)
                    : "Object" === (n = a(t)) && o(t.callee)
                      ? "Arguments"
                      : n;
          };
    },
    77958(r, t, e) {
      r.exports = !e(503628)(function () {
        function r() {}
        return (
          (r.prototype.constructor = null),
          Object.getPrototypeOf(new r()) !== r.prototype
        );
      });
    },
    485155(r, t, e) {
      var n = e(313400),
        o = e(4940);
      r.exports = function (r, t, e) {
        return (
          e.get && n(e.get, t, { getter: !0 }),
          e.set && n(e.set, t, { setter: !0 }),
          o.f(r, t, e)
        );
      };
    },
    221015(r, t, e) {
      var n = e(517737),
        o = e(514575),
        a = e(630017),
        i = n(n.bind);
      r.exports = function (r, t) {
        return (
          o(r),
          void 0 === t
            ? r
            : a
              ? i(r, t)
              : function () {
                  return r.apply(t, arguments);
                }
        );
      };
    },
    19167(r, t, e) {
      var n = e(410323),
        o = e(514575);
      r.exports = function (r, t, e) {
        try {
          return n(o(Object.getOwnPropertyDescriptor(r, t)[e]));
        } catch (r) {}
      };
    },
    517737(r, t, e) {
      var n = e(647055),
        o = e(410323);
      r.exports = function (r) {
        if ("Function" === n(r)) return o(r);
      };
    },
    464046(r, t, e) {
      var n = e(324988);
      r.exports = function (r) {
        var t = n(r);
        return "BigInt64Array" === t || "BigUint64Array" === t;
      };
    },
    667906(r, t, e) {
      var n = e(598349);
      r.exports = function (r) {
        return n(r) || null === r;
      };
    },
    42756(r, t, e) {
      var n = e(210140),
        o = e(339626),
        a = e(250594),
        i = e(583178),
        p = e(77958),
        u = i("IE_PROTO"),
        y = Object,
        f = y.prototype;
      r.exports = p
        ? y.getPrototypeOf
        : function (r) {
            var t = a(r);
            if (n(t, u)) return t[u];
            var e = t.constructor;
            return o(e) && t instanceof e
              ? e.prototype
              : t instanceof y
                ? f
                : null;
          };
    },
    458680(r, t, e) {
      var n = e(19167),
        o = e(598349),
        a = e(321727),
        i = e(828027);
      r.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var r,
                t = !1,
                e = {};
              try {
                (r = n(Object.prototype, "__proto__", "set"))(e, []),
                  (t = e instanceof Array);
              } catch (r) {}
              return function (e, n) {
                return a(e), i(n), o(e) && (t ? r(e, n) : (e.__proto__ = n)), e;
              };
            })()
          : void 0);
    },
    900923(r, t, e) {
      var n = e(374316),
        o = TypeError;
      r.exports = function (r) {
        var t = n(r, "number");
        if ("number" == typeof t) throw new o("Can't convert number to bigint");
        return BigInt(t);
      };
    },
    777718(r, t, e) {
      var n = e(771161),
        o = RangeError;
      r.exports = function (r, t) {
        var e = n(r);
        if (e % t) throw new o("Wrong offset");
        return e;
      };
    },
    771161(r, t, e) {
      var n = e(120394),
        o = RangeError;
      r.exports = function (r) {
        var t = n(r);
        if (t < 0) throw new o("The argument can't be less than 0");
        return t;
      };
    },
    344815(r, t, e) {
      var n = e(380744)("toStringTag"),
        o = {};
      (o[n] = "z"), (r.exports = "[object z]" === String(o));
    },
    393431(r, t, e) {
      var n = e(739305),
        o = e(503199),
        a = e(120394),
        i = n.aTypedArray;
      (0, n.exportTypedArrayMethod)("at", function (r) {
        var t = i(this),
          e = o(t),
          n = a(r),
          p = n >= 0 ? n : e + n;
        return p < 0 || p >= e ? void 0 : t[p];
      });
    },
    42231(r, t, e) {
      var n = e(739305),
        o = e(304052).findLastIndex,
        a = n.aTypedArray;
      (0, n.exportTypedArrayMethod)("findLastIndex", function (r) {
        return o(a(this), r, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    532706(r, t, e) {
      var n = e(739305),
        o = e(304052).findLast,
        a = n.aTypedArray;
      (0, n.exportTypedArrayMethod)("findLast", function (r) {
        return o(a(this), r, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    232424(r, t, e) {
      var n = e(860511),
        o = e(446474),
        a = e(739305),
        i = e(503199),
        p = e(777718),
        u = e(250594),
        y = e(503628),
        f = n.RangeError,
        c = n.Int8Array,
        s = c && c.prototype,
        d = s && s.set,
        v = a.aTypedArray,
        A = a.exportTypedArrayMethod,
        h = !y(function () {
          var r = new Uint8ClampedArray(2);
          return o(d, r, { length: 1, 0: 3 }, 1), 3 !== r[1];
        }),
        g =
          h &&
          a.NATIVE_ARRAY_BUFFER_VIEWS &&
          y(function () {
            var r = new c(2);
            return r.set(1), r.set("2", 1), 0 !== r[0] || 2 !== r[1];
          });
      A(
        "set",
        function (r) {
          v(this);
          var t = p(arguments.length > 1 ? arguments[1] : void 0, 1),
            e = u(r);
          if (h) return o(d, this, e, t);
          var n = this.length,
            a = i(e),
            y = 0;
          if (a + t > n) throw new f("Wrong length");
          for (; y < a; ) this[t + y] = e[y++];
        },
        !h || g,
      );
    },
    949626(r, t, e) {
      var n = e(108591),
        o = e(739305),
        a = o.aTypedArray,
        i = o.exportTypedArrayMethod,
        p = o.getTypedArrayConstructor;
      i("toReversed", function () {
        return n(a(this), p(this));
      });
    },
    767709(r, t, e) {
      var n = e(739305),
        o = e(410323),
        a = e(514575),
        i = e(412405),
        p = n.aTypedArray,
        u = n.getTypedArrayConstructor,
        y = n.exportTypedArrayMethod,
        f = o(n.TypedArrayPrototype.sort);
      y("toSorted", function (r) {
        void 0 !== r && a(r);
        var t = p(this);
        return f(i(u(t), t), r);
      });
    },
    65162(r, t, e) {
      var n = e(710821),
        o = e(739305),
        a = e(464046),
        i = e(120394),
        p = e(900923),
        u = o.aTypedArray,
        y = o.getTypedArrayConstructor;
      (0, o.exportTypedArrayMethod)(
        "with",
        {
          with: function (r, t) {
            var e = u(this),
              o = i(r),
              f = a(e) ? p(t) : +t;
            return n(e, y(e), o, f);
          },
        }.with,
        !(function () {
          try {
            new Int8Array(1).with(2, {
              valueOf: function () {
                throw 8;
              },
            });
          } catch (r) {
            return 8 === r;
          }
        })(),
      );
    },
  },
]);
//# sourceMappingURL=70004.ce3a129976d57d7e.js.map
