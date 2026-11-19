(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [527029],
  {
    653922(e, t, r) {
      "use strict";
      var n = r(998280),
        i = r(531651),
        s = r(618027);
      r.d(
        t,
        {},
        {
          A: function (e, t) {
            (0, s.A)(2, arguments);
            var r = (0, n.A)(t);
            return (0, i.A)(e, 1e3 * r);
          },
        },
      );
    },
    416248(e, t, r) {
      var n = r(689582),
        i = r(723891);
      e.exports = function (e) {
        return i(n(e));
      };
    },
    963100(e, t, r) {
      var n = r(20624),
        i = r(232520),
        s = r(186320),
        o = r(24011),
        a = r(26352),
        u = r(9556);
      e.exports = function (e, t, r, c) {
        var l = -1,
          f = i,
          d = !0,
          h = e.length,
          p = [],
          m = t.length;
        if (!h) return p;
        r && (t = o(t, a(r))),
          c
            ? ((f = s), (d = !1))
            : t.length >= 200 && ((f = u), (d = !1), (t = new n(t)));
        e: for (; ++l < h; ) {
          var g = e[l],
            v = null == r ? g : r(g);
          if (((g = c || 0 !== g ? g : 0), d && v == v)) {
            for (var y = m; y--; ) if (t[y] === v) continue e;
            p.push(g);
          } else f(t, v, c) || p.push(g);
        }
        return p;
      };
    },
    58902(e, t, r) {
      var n = r(723891),
        i = r(731221);
      e.exports = function (e) {
        return n(i(e));
      };
    },
    10837(e, t, r) {
      var n = r(24011);
      e.exports = function (e, t) {
        return n(t, function (t) {
          return e[t];
        });
      };
    },
    723891(e, t, r) {
      var n = r(515304);
      e.exports = function (e, t) {
        var r = -1,
          i = e.length,
          s = i - 1;
        for (t = void 0 === t ? i : t; ++r < t; ) {
          var o = n(r, s),
            a = e[o];
          (e[o] = e[r]), (e[r] = a);
        }
        return (e.length = t), e;
      };
    },
    649852(e, t, r) {
      var n = r(980320),
        i = r(403819),
        s = r(867167),
        o = Math.max,
        a = Math.min;
      e.exports = function (e, t, r) {
        var u,
          c,
          l,
          f,
          d,
          h,
          p = 0,
          m = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function y(t) {
          var r = u,
            n = c;
          return (u = c = void 0), (p = t), (f = e.apply(n, r));
        }
        function w(e) {
          var r = e - h,
            n = e - p;
          return void 0 === h || r >= t || r < 0 || (g && n >= l);
        }
        function _() {
          var e,
            r,
            n,
            s = i();
          if (w(s)) return b(s);
          d = setTimeout(
            _,
            ((e = s - h), (r = s - p), (n = t - e), g ? a(n, l - r) : n),
          );
        }
        function b(e) {
          return ((d = void 0), v && u) ? y(e) : ((u = c = void 0), f);
        }
        function z() {
          var e,
            r = i(),
            n = w(r);
          if (((u = arguments), (c = this), (h = r), n)) {
            if (void 0 === d)
              return (p = e = h), (d = setTimeout(_, t)), m ? y(e) : f;
            if (g) return clearTimeout(d), (d = setTimeout(_, t)), y(h);
          }
          return void 0 === d && (d = setTimeout(_, t)), f;
        }
        return (
          (t = s(t) || 0),
          n(r) &&
            ((m = !!r.leading),
            (l = (g = "maxWait" in r) ? o(s(r.maxWait) || 0, t) : l),
            (v = "trailing" in r ? !!r.trailing : v)),
          (z.cancel = function () {
            void 0 !== d && clearTimeout(d), (p = 0), (u = h = c = d = void 0);
          }),
          (z.flush = function () {
            return void 0 === d ? f : b(i());
          }),
          z
        );
      };
    },
    466204(e, t, r) {
      var n = r(963100),
        i = r(374421),
        s = r(440909),
        o = r(797674);
      e.exports = s(function (e, t) {
        return o(e) ? n(e, i(t, 1, o, !0)) : [];
      });
    },
    797674(e, t, r) {
      var n = r(667349),
        i = r(326487);
      e.exports = function (e) {
        return i(e) && n(e);
      };
    },
    199510(e, t, r) {
      var n = r(416248),
        i = r(58902),
        s = r(377482);
      e.exports = function (e) {
        return (s(e) ? n : i)(e);
      };
    },
    64015(e, t, r) {
      var n = r(649852),
        i = r(980320);
      e.exports = function (e, t, r) {
        var s = !0,
          o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          i(r) &&
            ((s = "leading" in r ? !!r.leading : s),
            (o = "trailing" in r ? !!r.trailing : o)),
          n(e, t, { leading: s, maxWait: t, trailing: o })
        );
      };
    },
    731221(e, t, r) {
      var n = r(10837),
        i = r(473951);
      e.exports = function (e) {
        return null == e ? [] : n(e, i(e));
      };
    },
    41575(e, t, r) {
      "use strict";
      var n = r(257943),
        i = r(4940),
        s = r(231977);
      e.exports = function (e, t, r) {
        n ? i.f(e, t, s(0, r)) : (e[t] = r);
      };
    },
    150088(e, t, r) {
      "use strict";
      var n,
        i,
        s,
        o,
        a = r(860511),
        u = r(53132),
        c = r(772805),
        l = a.structuredClone,
        f = a.ArrayBuffer,
        d = a.MessageChannel,
        h = !1;
      if (c)
        h = function (e) {
          l(e, { transfer: [e] });
        };
      else if (f)
        try {
          !d && (n = u("worker_threads")) && (d = n.MessageChannel),
            d &&
              ((i = new d()),
              (s = new f(2)),
              (o = function (e) {
                i.port1.postMessage(null, [e]);
              }),
              2 === s.byteLength && (o(s), 0 === s.byteLength && (h = o)));
        } catch (e) {}
      e.exports = h;
    },
    604400(e, t, r) {
      "use strict";
      var n = r(503628),
        i = r(231977);
      e.exports = !n(function () {
        var e = Error("a");
        return (
          !("stack" in e) ||
          (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
        );
      });
    },
    53132(e, t, r) {
      "use strict";
      var n = r(860511),
        i = r(13570);
      e.exports = function (e) {
        if (i) {
          try {
            return n.process.getBuiltinModule(e);
          } catch (e) {}
          try {
            return Function('return require("' + e + '")')();
          } catch (e) {}
        }
      };
    },
    331336(e, t, r) {
      "use strict";
      var n = r(324988),
        i = r(95959),
        s = r(652320),
        o = r(70670),
        a = r(380744)("iterator");
      e.exports = function (e) {
        if (!s(e)) return i(e, a) || i(e, "@@iterator") || o[n(e)];
      };
    },
    327036(e, t, r) {
      "use strict";
      var n = r(446474),
        i = r(514575),
        s = r(101968),
        o = r(406208),
        a = r(331336),
        u = TypeError;
      e.exports = function (e, t) {
        var r = arguments.length < 2 ? a(e) : t;
        if (i(r)) return s(n(r, e));
        throw new u(o(e) + " is not iterable");
      };
    },
    151860(e, t, r) {
      "use strict";
      var n = r(380744),
        i = r(70670),
        s = n("iterator"),
        o = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (i.Array === e || o[s] === e);
      };
    },
    43452(e, t, r) {
      "use strict";
      var n = r(410323),
        i = r(503628),
        s = r(339626),
        o = r(324988),
        a = r(230606),
        u = r(997159),
        c = function () {},
        l = a("Reflect", "construct"),
        f = /^\s*(?:class|function)\b/,
        d = n(f.exec),
        h = !f.test(c),
        p = function (e) {
          if (!s(e)) return !1;
          try {
            return l(c, [], e), !0;
          } catch (e) {
            return !1;
          }
        },
        m = function (e) {
          if (!s(e)) return !1;
          switch (o(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return h || !!d(f, u(e));
          } catch (e) {
            return !0;
          }
        };
      (m.sham = !0),
        (e.exports =
          !l ||
          i(function () {
            var e;
            return (
              p(p.call) ||
              !p(Object) ||
              !p(function () {
                e = !0;
              }) ||
              e
            );
          })
            ? m
            : p);
    },
    639438(e, t, r) {
      "use strict";
      var n = r(446474);
      e.exports = function (e, t, r) {
        for (
          var i, s, o = r ? e : e.iterator, a = e.next;
          !(i = n(a, o)).done;

        )
          if (void 0 !== (s = t(i.value))) return s;
      };
    },
    2871(e, t, r) {
      "use strict";
      var n = r(221015),
        i = r(446474),
        s = r(101968),
        o = r(406208),
        a = r(151860),
        u = r(503199),
        c = r(524152),
        l = r(327036),
        f = r(331336),
        d = r(350714),
        h = TypeError,
        p = function (e, t) {
          (this.stopped = e), (this.result = t);
        },
        m = p.prototype;
      e.exports = function (e, t, r) {
        var g,
          v,
          y,
          w,
          _,
          b,
          z,
          k = r && r.that,
          O = !!(r && r.AS_ENTRIES),
          x = !!(r && r.IS_RECORD),
          $ = !!(r && r.IS_ITERATOR),
          E = !!(r && r.INTERRUPTED),
          S = n(t, k),
          A = function (e) {
            return g && d(g, "normal", e), new p(!0, e);
          },
          P = function (e) {
            return O
              ? (s(e), E ? S(e[0], e[1], A) : S(e[0], e[1]))
              : E
                ? S(e, A)
                : S(e);
          };
        if (x) g = e.iterator;
        else if ($) g = e;
        else {
          if (!(v = f(e))) throw new h(o(e) + " is not iterable");
          if (a(v)) {
            for (y = 0, w = u(e); w > y; y++)
              if ((_ = P(e[y])) && c(m, _)) return _;
            return new p(!1);
          }
          g = l(e, v);
        }
        for (b = x ? e.next : g.next; !(z = i(b, g)).done; ) {
          try {
            _ = P(z.value);
          } catch (e) {
            d(g, "throw", e);
          }
          if ("object" == typeof _ && _ && c(m, _)) return _;
        }
        return new p(!1);
      };
    },
    350714(e, t, r) {
      "use strict";
      var n = r(446474),
        i = r(101968),
        s = r(95959);
      e.exports = function (e, t, r) {
        var o, a;
        i(e);
        try {
          if (!(o = s(e, "return"))) {
            if ("throw" === t) throw r;
            return r;
          }
          o = n(o, e);
        } catch (e) {
          (a = !0), (o = e);
        }
        if ("throw" === t) throw r;
        if (a) throw o;
        return i(o), r;
      };
    },
    70670(e) {
      "use strict";
      e.exports = {};
    },
    19319(e, t, r) {
      "use strict";
      var n = r(410323),
        i = Map.prototype;
      e.exports = {
        Map: Map,
        set: n(i.set),
        get: n(i.get),
        has: n(i.has),
        remove: n(i.delete),
        proto: i,
      };
    },
    565079(e, t, r) {
      "use strict";
      var n = r(446474),
        i = r(210140),
        s = r(524152),
        o = r(693510),
        a = RegExp.prototype;
      e.exports = function (e) {
        var t = e.flags;
        return !(void 0 === t && !("flags" in a) && !i(e, "flags") && s(a, e))
          ? t
          : n(o, e);
      };
    },
    139257(e, t, r) {
      "use strict";
      var n = r(410323),
        i = Set.prototype;
      e.exports = {
        Set: Set,
        add: n(i.add),
        has: n(i.has),
        remove: n(i.delete),
        proto: i,
      };
    },
    373458(e, t, r) {
      "use strict";
      var n = r(410323),
        i = r(639438),
        s = r(139257),
        o = s.Set,
        a = s.proto,
        u = n(a.forEach),
        c = n(a.keys),
        l = c(new o()).next;
      e.exports = function (e, t, r) {
        return r ? i({ iterator: c(e), next: l }, t) : u(e, t);
      };
    },
    772805(e, t, r) {
      "use strict";
      var n = r(860511),
        i = r(503628),
        s = r(123166),
        o = r(676528),
        a = n.structuredClone;
      e.exports =
        !!a &&
        !i(function () {
          if (
            ("DENO" === o && s > 92) ||
            ("NODE" === o && s > 94) ||
            ("BROWSER" === o && s > 97)
          )
            return !1;
          var e = new ArrayBuffer(8),
            t = a(e, { transfer: [e] });
          return 0 !== e.byteLength || 8 !== t.byteLength;
        });
    },
    775859(e, t, r) {
      "use strict";
      var n = r(105712),
        i = r(557939),
        s = r(860511),
        o = r(230606),
        a = r(410323),
        u = r(503628),
        c = r(753891),
        l = r(339626),
        f = r(43452),
        d = r(652320),
        h = r(598349),
        p = r(837082),
        m = r(2871),
        g = r(101968),
        v = r(324988),
        y = r(210140),
        w = r(41575),
        _ = r(706938),
        b = r(503199),
        z = r(627),
        k = r(565079),
        O = r(19319),
        x = r(139257),
        $ = r(373458),
        E = r(150088),
        S = r(604400),
        A = r(772805),
        P = s.Object,
        T = s.Array,
        j = s.Date,
        Z = s.Error,
        I = s.TypeError,
        N = s.PerformanceMark,
        D = o("DOMException"),
        R = O.Map,
        M = O.has,
        F = O.get,
        C = O.set,
        U = x.Set,
        J = x.add,
        L = x.has,
        B = o("Object", "keys"),
        q = a([].push),
        W = a((!0).valueOf),
        V = a((1).valueOf),
        K = a("".valueOf),
        H = a(j.prototype.getTime),
        G = c("structuredClone"),
        X = "DataCloneError",
        Q = "Transferring",
        Y = function (e) {
          return (
            !u(function () {
              var t = new s.Set([7]),
                r = e(t),
                n = e(P(7));
              return r === t || !r.has(7) || !h(n) || 7 != +n;
            }) && e
          );
        },
        ee = function (e, t) {
          return !u(function () {
            var r = new t(),
              n = e({ a: r, b: r });
            return !(
              n &&
              n.a === n.b &&
              n.a instanceof t &&
              n.a.stack === r.stack
            );
          });
        },
        et = s.structuredClone,
        er =
          n ||
          !ee(et, Z) ||
          !ee(et, D) ||
          !!u(function () {
            var e = et(new s.AggregateError([1], G, { cause: 3 }));
            return (
              "AggregateError" !== e.name ||
              1 !== e.errors[0] ||
              e.message !== G ||
              3 !== e.cause
            );
          }),
        en =
          !et &&
          Y(function (e) {
            return new N(G, { detail: e }).detail;
          }),
        ei = Y(et) || en,
        es = function (e) {
          throw new D("Uncloneable type: " + e, X);
        },
        eo = function (e, t) {
          throw new D(
            (t || "Cloning") +
              " of " +
              e +
              " cannot be properly polyfilled in this engine",
            X,
          );
        },
        ea = function (e, t) {
          return ei || eo(t), ei(e);
        },
        eu = function () {
          var e;
          try {
            e = new s.DataTransfer();
          } catch (t) {
            try {
              e = new s.ClipboardEvent("").clipboardData;
            } catch (e) {}
          }
          return e && e.items && e.files ? e : null;
        },
        ec = function (e, t, r) {
          if (M(t, e)) return F(t, e);
          if ("SharedArrayBuffer" === (r || v(e))) n = ei ? ei(e) : e;
          else {
            var n,
              i,
              o,
              a,
              u,
              c,
              f = s.DataView;
            f || l(e.slice) || eo("ArrayBuffer");
            try {
              if (l(e.slice) && !e.resizable) n = e.slice(0);
              else
                for (
                  i = e.byteLength,
                    o =
                      ("maxByteLength" in e)
                        ? { maxByteLength: e.maxByteLength }
                        : void 0,
                    n = new ArrayBuffer(i, o),
                    a = new f(e),
                    u = new f(n),
                    c = 0;
                  c < i;
                  c++
                )
                  u.setUint8(c, a.getUint8(c));
            } catch (e) {
              throw new D("ArrayBuffer is detached", X);
            }
          }
          return C(t, e, n), n;
        },
        el = function (e, t, r, n, i) {
          var o = s[t];
          return h(o) || eo(t), new o(ec(e.buffer, i), r, n);
        },
        ef = function (e, t) {
          if ((p(e) && es("Symbol"), !h(e))) return e;
          if (t) {
            if (M(t, e)) return F(t, e);
          } else t = new R();
          var r,
            n,
            i,
            a,
            u,
            c,
            f,
            d,
            m = v(e);
          switch (m) {
            case "Array":
              i = T(b(e));
              break;
            case "Object":
              i = {};
              break;
            case "Map":
              i = new R();
              break;
            case "Set":
              i = new U();
              break;
            case "RegExp":
              i = new RegExp(e.source, k(e));
              break;
            case "Error":
              switch ((n = e.name)) {
                case "AggregateError":
                  i = new (o(n))([]);
                  break;
                case "EvalError":
                case "RangeError":
                case "ReferenceError":
                case "SuppressedError":
                case "SyntaxError":
                case "TypeError":
                case "URIError":
                  i = new (o(n))();
                  break;
                case "CompileError":
                case "LinkError":
                case "RuntimeError":
                  i = new (o("WebAssembly", n))();
                  break;
                default:
                  i = new Z();
              }
              break;
            case "DOMException":
              i = new D(e.message, e.name);
              break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
              i = ec(e, t, m);
              break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
              (c = "DataView" === m ? e.byteLength : e.length),
                (i = el(e, m, e.byteOffset, c, t));
              break;
            case "DOMQuad":
              try {
                i = new DOMQuad(
                  ef(e.p1, t),
                  ef(e.p2, t),
                  ef(e.p3, t),
                  ef(e.p4, t),
                );
              } catch (t) {
                i = ea(e, m);
              }
              break;
            case "File":
              if (ei)
                try {
                  (i = ei(e)), v(i) !== m && (i = void 0);
                } catch (e) {}
              if (!i)
                try {
                  i = new File([e], e.name, e);
                } catch (e) {}
              i || eo(m);
              break;
            case "FileList":
              if ((a = eu())) {
                for (u = 0, c = b(e); u < c; u++) a.items.add(ef(e[u], t));
                i = a.files;
              } else i = ea(e, m);
              break;
            case "ImageData":
              try {
                i = new ImageData(ef(e.data, t), e.width, e.height, {
                  colorSpace: e.colorSpace,
                });
              } catch (t) {
                i = ea(e, m);
              }
              break;
            default:
              if (ei) i = ei(e);
              else
                switch (m) {
                  case "BigInt":
                    i = P(e.valueOf());
                    break;
                  case "Boolean":
                    i = P(W(e));
                    break;
                  case "Number":
                    i = P(V(e));
                    break;
                  case "String":
                    i = P(K(e));
                    break;
                  case "Date":
                    i = new j(H(e));
                    break;
                  case "Blob":
                    try {
                      i = e.slice(0, e.size, e.type);
                    } catch (e) {
                      eo(m);
                    }
                    break;
                  case "DOMPoint":
                  case "DOMPointReadOnly":
                    r = s[m];
                    try {
                      i = r.fromPoint
                        ? r.fromPoint(e)
                        : new r(e.x, e.y, e.z, e.w);
                    } catch (e) {
                      eo(m);
                    }
                    break;
                  case "DOMRect":
                  case "DOMRectReadOnly":
                    r = s[m];
                    try {
                      i = r.fromRect
                        ? r.fromRect(e)
                        : new r(e.x, e.y, e.width, e.height);
                    } catch (e) {
                      eo(m);
                    }
                    break;
                  case "DOMMatrix":
                  case "DOMMatrixReadOnly":
                    r = s[m];
                    try {
                      i = r.fromMatrix ? r.fromMatrix(e) : new r(e);
                    } catch (e) {
                      eo(m);
                    }
                    break;
                  case "AudioData":
                  case "VideoFrame":
                    l(e.clone) || eo(m);
                    try {
                      i = e.clone();
                    } catch (e) {
                      es(m);
                    }
                    break;
                  case "CropTarget":
                  case "CryptoKey":
                  case "FileSystemDirectoryHandle":
                  case "FileSystemFileHandle":
                  case "FileSystemHandle":
                  case "GPUCompilationInfo":
                  case "GPUCompilationMessage":
                  case "ImageBitmap":
                  case "RTCCertificate":
                  case "WebAssembly.Module":
                    eo(m);
                  default:
                    es(m);
                }
          }
          switch ((C(t, e, i), m)) {
            case "Array":
            case "Object":
              for (u = 0, c = b((f = B(e))); u < c; u++)
                (d = f[u]), w(i, d, ef(e[d], t));
              break;
            case "Map":
              e.forEach(function (e, r) {
                C(i, ef(r, t), ef(e, t));
              });
              break;
            case "Set":
              e.forEach(function (e) {
                J(i, ef(e, t));
              });
              break;
            case "Error":
              _(i, "message", ef(e.message, t)),
                y(e, "cause") && _(i, "cause", ef(e.cause, t)),
                "AggregateError" === n
                  ? (i.errors = ef(e.errors, t))
                  : "SuppressedError" === n &&
                    ((i.error = ef(e.error, t)),
                    (i.suppressed = ef(e.suppressed, t)));
            case "DOMException":
              S && _(i, "stack", ef(e.stack, t));
          }
          return i;
        },
        ed = function (e, t) {
          if (!h(e))
            throw new I("Transfer option cannot be converted to a sequence");
          var r,
            n,
            i,
            o,
            a,
            u = [];
          m(e, function (e) {
            q(u, g(e));
          });
          for (var c = 0, d = b(u), p = new U(); c < d; ) {
            if ("ArrayBuffer" === (n = v((r = u[c++]))) ? L(p, r) : M(t, r))
              throw new D("Duplicate transferable", X);
            if ("ArrayBuffer" === n) {
              J(p, r);
              continue;
            }
            if (A) o = et(r, { transfer: [r] });
            else
              switch (n) {
                case "ImageBitmap":
                  f((i = s.OffscreenCanvas)) || eo(n, Q);
                  try {
                    (a = new i(r.width, r.height))
                      .getContext("bitmaprenderer")
                      .transferFromImageBitmap(r),
                      (o = a.transferToImageBitmap());
                  } catch (e) {}
                  break;
                case "AudioData":
                case "VideoFrame":
                  (l(r.clone) && l(r.close)) || eo(n, Q);
                  try {
                    (o = r.clone()), r.close();
                  } catch (e) {}
                  break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "MIDIAccess":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "RTCDataChannel":
                case "TransformStream":
                case "WebTransportReceiveStream":
                case "WebTransportSendStream":
                case "WritableStream":
                  eo(n, Q);
              }
            if (void 0 === o)
              throw new D("This object cannot be transferred: " + n, X);
            C(t, r, o);
          }
          return p;
        },
        eh = function (e) {
          $(e, function (e) {
            A
              ? ei(e, { transfer: [e] })
              : l(e.transfer)
                ? e.transfer()
                : E
                  ? E(e)
                  : eo("ArrayBuffer", Q);
          });
        };
      i(
        { global: !0, enumerable: !0, sham: !A, forced: er },
        {
          structuredClone: function (e) {
            var t,
              r,
              n =
                z(arguments.length, 1) > 1 && !d(arguments[1])
                  ? g(arguments[1])
                  : void 0,
              i = n ? n.transfer : void 0;
            void 0 !== i && (r = ed(i, (t = new R())));
            var s = ef(e, t);
            return r && eh(r), s;
          },
        },
      );
    },
    162929(e, t, r) {
      "use strict";
      var n,
        i,
        s = "0123456789abcdef",
        o =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        a =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        u = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        c = !0,
        l = "[DecimalError] ",
        f = l + "Invalid argument: ",
        d = l + "Precision limit exceeded",
        h = l + "crypto unavailable",
        p = "[object Decimal]",
        m = Math.floor,
        g = Math.pow,
        v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        y = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        w = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        _ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        b = o.length - 1,
        z = a.length - 1,
        k = { toStringTag: p };
      function O(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          s = "",
          o = e[0];
        if (i > 0) {
          for (s += o, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + "").length) && (s += N(r)), (s += n);
          (r = 7 - (n = (o = e[t]) + "").length) && (s += N(r));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return s + o;
      }
      function x(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(f + e);
      }
      function $(e, t, r, n) {
        var i, s, o, a;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = g(10, 7 - t)),
          (a = e[i] % s | 0),
          null == n
            ? t < 3
              ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                (o =
                  (r < 4 && 99999 == a) ||
                  (r > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (o =
                  (((r < 4 && a + 1 == s) || (r > 3 && a + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == g(10, t - 2) - 1) ||
                  ((a == s / 2 || 0 == a) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (a = (a / 1e3) | 0)
                  : 1 == t
                    ? (a = (a / 100) | 0)
                    : 2 == t && (a = (a / 10) | 0),
                (o = ((n || r < 4) && 9999 == a) || (!n && r > 3 && 4999 == a)))
              : (o =
                  (((n || r < 4) && a + 1 == s) ||
                    (!n && r > 3 && a + 1 == s / 2)) &&
                  ((e[i + 1] / s / 1e3) | 0) == g(10, t - 3) - 1),
          o
        );
      }
      function E(e, t, r) {
        for (var n, i, o = [0], a = 0, u = e.length; a < u; ) {
          for (i = o.length; i--; ) o[i] *= t;
          for (o[0] += s.indexOf(e.charAt(a++)), n = 0; n < o.length; n++)
            o[n] > r - 1 &&
              (void 0 === o[n + 1] && (o[n + 1] = 0),
              (o[n + 1] += (o[n] / r) | 0),
              (o[n] %= r));
        }
        return o.reverse();
      }
      (k.absoluteValue = k.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), A(e);
        }),
        (k.ceil = function () {
          return A(new this.constructor(this), this.e + 1, 2);
        }),
        (k.clampedTo = k.clamp =
          function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s))
              return new r(0 / 0);
            if (e.gt(t)) throw Error(f + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
          }),
        (k.comparedTo = k.cmp =
          function (e) {
            var t,
              r,
              n,
              i,
              s = this.d,
              o = (e = new this.constructor(e)).d,
              a = this.s,
              u = e.s;
            if (!s || !o)
              return a && u
                ? a !== u
                  ? a
                  : s === o
                    ? 0
                    : !s ^ (a < 0)
                      ? 1
                      : -1
                : 0 / 0;
            if (!s[0] || !o[0]) return s[0] ? a : o[0] ? -u : 0;
            if (a !== u) return a;
            if (this.e !== e.e) return (this.e > e.e) ^ (a < 0) ? 1 : -1;
            for (
              n = s.length, t = 0, r = n < (i = o.length) ? n : i;
              t < r;
              ++t
            )
              if (s[t] !== o[t]) return (s[t] > o[t]) ^ (a < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (a < 0) ? 1 : -1;
          }),
        (k.cosine = k.cos =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.d
              ? r.d[0]
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r, n, i;
                    if (t.isZero()) return t;
                    (n = t.d.length) < 32
                      ? (i = (1 / B(4, (r = Math.ceil(n / 3)))).toString())
                      : ((r = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += r),
                      (t = L(e, 1, t.times(i), new e(1)));
                    for (var s = r; s--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= r), t;
                  })(n, q(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  A(2 == i || 3 == i ? r.neg() : r, e, t, !0))
                : new n(1)
              : new n(0 / 0);
          }),
        (k.cubeRoot = k.cbrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              o,
              a,
              u,
              l,
              f = this.constructor;
            if (!this.isFinite() || this.isZero()) return new f(this);
            for (
              c = !1,
                (s = this.s * g(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(s)
                  ? (n = new f(s.toString()))
                  : ((r = O(this.d)),
                    (s = ((e = this.e) - r.length + 1) % 3) &&
                      (r += 1 == s || -2 == s ? "0" : "00"),
                    (s = g(r, 1 / 3)),
                    (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((n = new f(
                      (r =
                        1 / 0 == s
                          ? "5e" + e
                          : (r = s.toExponential()).slice(
                              0,
                              r.indexOf("e") + 1,
                            ) + e),
                    )).s = this.s)),
                o = (e = f.precision) + 3;
              ;

            )
              if (
                ((n = S(
                  (l = (u = (a = n).times(a).times(a)).plus(this))
                    .plus(this)
                    .times(a),
                  l.plus(u),
                  o + 2,
                  1,
                )),
                O(a.d).slice(0, o) === (r = O(n.d)).slice(0, o))
              ) {
                if (
                  "9999" != (r = r.slice(o - 3, o + 1)) &&
                  (i || "4999" != r)
                ) {
                  (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                    (A(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
                  break;
                }
                if (!i && (A(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                  n = a;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (c = !0), A(n, e, f.rounding, t);
          }),
        (k.decimalPlaces = k.dp =
          function () {
            var e,
              t = this.d,
              r = 0 / 0;
            if (t) {
              if (((r = ((e = t.length - 1) - m(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) r--;
              r < 0 && (r = 0);
            }
            return r;
          }),
        (k.dividedBy = k.div =
          function (e) {
            return S(this, new this.constructor(e));
          }),
        (k.dividedToIntegerBy = k.divToInt =
          function (e) {
            var t = this.constructor;
            return A(S(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (k.equals = k.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (k.floor = function () {
          return A(new this.constructor(this), this.e + 1, 3);
        }),
        (k.greaterThan = k.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (k.greaterThanOrEqualTo = k.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (k.hyperbolicCosine = k.cosh =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s = this,
              o = s.constructor,
              a = new o(1);
            if (!s.isFinite()) return new o(s.s ? 1 / 0 : 0 / 0);
            if (s.isZero()) return a;
            (r = o.precision),
              (n = o.rounding),
              (o.precision = r + Math.max(s.e, s.sd()) + 4),
              (o.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / B(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (s = L(o, 1, s.times(t), new o(1), !0));
            for (var u, c = e, l = new o(8); c--; )
              (u = s.times(s)), (s = a.minus(u.times(l.minus(u.times(l)))));
            return A(s, (o.precision = r), (o.rounding = n), !0);
          }),
        (k.hyperbolicSine = k.sinh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (r = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (n = i.d.length) < 3)
            )
              i = L(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
                (i = L(s, 2, (i = i.times(1 / B(5, e))), i, !0));
              for (var o, a = new s(5), u = new s(16), c = new s(20); e--; )
                (o = i.times(i)),
                  (i = i.times(a.plus(o.times(u.times(o).plus(c)))));
            }
            return (s.precision = t), (s.rounding = r), A(i, t, r, !0);
          }),
        (k.hyperbolicTangent = k.tanh =
          function () {
            var e,
              t,
              r = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new r(this)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 7),
                  (r.rounding = 1),
                  S(
                    this.sinh(),
                    this.cosh(),
                    (r.precision = e),
                    (r.rounding = t),
                  ))
              : new r(this.s);
          }),
        (k.inverseCosine = k.acos =
          function () {
            var e = this,
              t = e.constructor,
              r = e.abs().cmp(1),
              n = t.precision,
              i = t.rounding;
            return -1 !== r
              ? 0 === r
                ? e.isNeg()
                  ? Z(t, n, i)
                  : new t(0)
                : new t(0 / 0)
              : e.isZero()
                ? Z(t, n + 4, i).times(0.5)
                : ((t.precision = n + 6),
                  (t.rounding = 1),
                  (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                  (t.precision = n),
                  (t.rounding = i),
                  e.times(2));
          }),
        (k.inverseHyperbolicCosine = k.acosh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.lte(1)
              ? new n(r.eq(1) ? 0 : 0 / 0)
              : r.isFinite()
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                  (n.rounding = 1),
                  (c = !1),
                  (r = r.times(r).minus(1).sqrt().plus(r)),
                  (c = !0),
                  (n.precision = e),
                  (n.rounding = t),
                  r.ln())
                : new n(r);
          }),
        (k.inverseHyperbolicSine = k.asinh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return !r.isFinite() || r.isZero()
              ? new n(r)
              : ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                (n.rounding = 1),
                (c = !1),
                (r = r.times(r).plus(1).sqrt().plus(r)),
                (c = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln());
          }),
        (k.inverseHyperbolicTangent = k.atanh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : 0 / 0)
                : ((e = s.precision),
                    (t = s.rounding),
                    Math.max((n = i.sd()), e) < -(2 * i.e) - 1)
                  ? A(new s(i), e, t, !0)
                  : ((s.precision = r = n - i.e),
                    (i = S(i.plus(1), new s(1).minus(i), r + e, 1)),
                    (s.precision = e + 4),
                    (s.rounding = 1),
                    (i = i.ln()),
                    (s.precision = e),
                    (s.rounding = t),
                    i.times(0.5))
              : new s(0 / 0);
          }),
        (k.inverseSine = k.asin =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                  (r = s.precision),
                  (n = s.rounding),
                  -1 !== t)
                ? 0 === t
                  ? (((e = Z(s, r + 4, n).times(0.5)).s = i.s), e)
                  : new s(0 / 0)
                : ((s.precision = r + 6),
                  (s.rounding = 1),
                  (i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                  (s.precision = r),
                  (s.rounding = n),
                  i.times(2));
          }),
        (k.inverseTangent = k.atan =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              o,
              a,
              u,
              l = this,
              f = l.constructor,
              d = f.precision,
              h = f.rounding;
            if (l.isFinite()) {
              if (l.isZero()) return new f(l);
              else if (l.abs().eq(1) && d + 4 <= z)
                return ((o = Z(f, d + 4, h).times(0.25)).s = l.s), o;
            } else {
              if (!l.s) return new f(0 / 0);
              if (d + 4 <= z)
                return ((o = Z(f, d + 4, h).times(0.5)).s = l.s), o;
            }
            for (
              f.precision = a = d + 10,
                f.rounding = 1,
                e = r = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (
              c = !1,
                t = Math.ceil(a / 7),
                n = 1,
                u = l.times(l),
                o = new f(l),
                i = l;
              -1 !== e;

            )
              if (
                ((i = i.times(u)),
                (s = o.minus(i.div((n += 2)))),
                (i = i.times(u)),
                void 0 !== (o = s.plus(i.div((n += 2)))).d[t])
              )
                for (e = t; o.d[e] === s.d[e] && e--; );
            return (
              r && (o = o.times(2 << (r - 1))),
              (c = !0),
              A(o, (f.precision = d), (f.rounding = h), !0)
            );
          }),
        (k.isFinite = function () {
          return !!this.d;
        }),
        (k.isInteger = k.isInt =
          function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
          }),
        (k.isNaN = function () {
          return !this.s;
        }),
        (k.isNegative = k.isNeg =
          function () {
            return this.s < 0;
          }),
        (k.isPositive = k.isPos =
          function () {
            return this.s > 0;
          }),
        (k.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (k.lessThan = k.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (k.lessThanOrEqualTo = k.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (k.logarithm = k.log =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              u = this.constructor,
              l = u.precision,
              f = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
              if (((r = (e = new u(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new u(0 / 0);
              t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
              return new u(
                r && !r[0] ? -1 / 0 : 1 != this.s ? 0 / 0 : r ? 0 : 1 / 0,
              );
            if (t)
              if (r.length > 1) i = !0;
              else {
                for (n = r[0]; n % 10 == 0; ) n /= 10;
                i = 1 !== n;
              }
            if (
              ((c = !1),
              $(
                (a = S(
                  (s = C(this, (o = l + 5))),
                  t ? j(u, o + 10) : C(e, o),
                  o,
                  1,
                )).d,
                (n = l),
                f,
              ))
            )
              do
                if (
                  ((o += 10),
                  (a = S((s = C(this, o)), t ? j(u, o + 10) : C(e, o), o, 1)),
                  !i)
                ) {
                  +O(a.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                    (a = A(a, l + 1, 0));
                  break;
                }
              while ($(a.d, (n += 10), f));
            return (c = !0), A(a, l, f);
          }),
        (k.minus = k.sub =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              u,
              l,
              f,
              d,
              h,
              p = this.constructor;
            if (((e = new p(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new p(e.d || this.s !== e.s ? this : 0 / 0))
                  : (e = new p(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((l = this.d),
              (h = e.d),
              (a = p.precision),
              (u = p.rounding),
              !l[0] || !h[0])
            ) {
              if (h[0]) e.s = -e.s;
              else {
                if (!l[0]) return new p(3 === u ? -0 : 0);
                e = new p(this);
              }
              return c ? A(e, a, u) : e;
            }
            if (
              ((r = m(e.e / 7)),
              (f = m(this.e / 7)),
              (l = l.slice()),
              (s = f - r))
            ) {
              for (
                (d = s < 0)
                  ? ((t = l), (s = -s), (o = h.length))
                  : ((t = h), (r = f), (o = l.length)),
                  s > (n = Math.max(Math.ceil(a / 7), o) + 2) &&
                    ((s = n), (t.length = 1)),
                  t.reverse(),
                  n = s;
                n--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (d = (n = l.length) < (o = h.length)) && (o = n), n = 0;
                n < o;
                n++
              )
                if (l[n] != h[n]) {
                  d = l[n] < h[n];
                  break;
                }
              s = 0;
            }
            for (
              d && ((t = l), (l = h), (h = t), (e.s = -e.s)),
                o = l.length,
                n = h.length - o;
              n > 0;
              --n
            )
              l[o++] = 0;
            for (n = h.length; n > s; ) {
              if (l[--n] < h[n]) {
                for (i = n; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
                --l[i], (l[n] += 1e7);
              }
              l[n] -= h[n];
            }
            for (; 0 === l[--o]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --r;
            return l[0]
              ? ((e.d = l), (e.e = T(l, r)), c ? A(e, a, u) : e)
              : new p(3 === u ? -0 : 0);
          }),
        (k.modulo = k.mod =
          function (e) {
            var t,
              r = this.constructor;
            return ((e = new r(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((c = !1),
                  9 == r.modulo
                    ? ((t = S(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = S(this, e, 0, r.modulo, 1)),
                  (t = t.times(e)),
                  (c = !0),
                  this.minus(t))
                : A(new r(this), r.precision, r.rounding)
              : new r(0 / 0);
          }),
        (k.naturalExponential = k.exp =
          function () {
            return F(this);
          }),
        (k.naturalLogarithm = k.ln =
          function () {
            return C(this);
          }),
        (k.negated = k.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), A(e);
          }),
        (k.plus = k.add =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              u,
              l,
              f,
              d = this.constructor;
            if (((e = new d(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new d(e.d || this.s === e.s ? this : 0 / 0))
                  : (e = new d(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((l = this.d),
              (f = e.d),
              (a = d.precision),
              (u = d.rounding),
              !l[0] || !f[0])
            )
              return f[0] || (e = new d(this)), c ? A(e, a, u) : e;
            if (
              ((s = m(this.e / 7)),
              (n = m(e.e / 7)),
              (l = l.slice()),
              (i = s - n))
            ) {
              for (
                i < 0
                  ? ((r = l), (i = -i), (o = f.length))
                  : ((r = f), (n = s), (o = l.length)),
                  i > (o = (s = Math.ceil(a / 7)) > o ? s + 1 : o + 1) &&
                    ((i = o), (r.length = 1)),
                  r.reverse();
                i--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              (o = l.length) - (i = f.length) < 0 &&
                ((i = o), (r = f), (f = l), (l = r)),
                t = 0;
              i;

            )
              (t = ((l[--i] = l[i] + f[i] + t) / 1e7) | 0), (l[i] %= 1e7);
            for (t && (l.unshift(t), ++n), o = l.length; 0 == l[--o]; ) l.pop();
            return (e.d = l), (e.e = T(l, n)), c ? A(e, a, u) : e;
          }),
        (k.precision = k.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(f + e);
            return (
              this.d
                ? ((t = I(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = 0 / 0),
              t
            );
          }),
        (k.round = function () {
          var e = this.constructor;
          return A(new e(this), this.e + 1, e.rounding);
        }),
        (k.sine = k.sin =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r,
                      n = t.d.length;
                    if (n < 3) return t.isZero() ? t : L(e, 2, t, t);
                    (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                      (t = L(e, 2, (t = t.times(1 / B(5, r))), t));
                    for (
                      var i, s = new e(5), o = new e(16), a = new e(20);
                      r--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(o.times(i).minus(a)))));
                    return t;
                  })(n, q(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  A(i > 2 ? r.neg() : r, e, t, !0))
              : new n(0 / 0);
          }),
        (k.squareRoot = k.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              s,
              o = this.d,
              a = this.e,
              u = this.s,
              l = this.constructor;
            if (1 !== u || !o || !o[0])
              return new l(
                !u || (u < 0 && (!o || o[0])) ? 0 / 0 : o ? this : 1 / 0,
              );
            for (
              c = !1,
                0 == (u = Math.sqrt(+this)) || 1 / 0 == u
                  ? (((t = O(o)).length + a) % 2 == 0 && (t += "0"),
                    (u = Math.sqrt(t)),
                    (a = m((a + 1) / 2) - (a < 0 || a % 2)),
                    (n = new l(
                      (t =
                        1 / 0 == u
                          ? "5e" + a
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + a),
                    )))
                  : (n = new l(u.toString())),
                r = (a = l.precision) + 3;
              ;

            )
              if (
                ((n = (s = n).plus(S(this, s, r + 2, 1)).times(0.5)),
                O(s.d).slice(0, r) === (t = O(n.d)).slice(0, r))
              ) {
                if (
                  "9999" != (t = t.slice(r - 3, r + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (A(n, a + 1, 1), (e = !n.times(n).eq(this)));
                  break;
                }
                if (!i && (A(s, a + 1, 0), s.times(s).eq(this))) {
                  n = s;
                  break;
                }
                (r += 4), (i = 1);
              }
            return (c = !0), A(n, a, l.rounding, e);
          }),
        (k.tangent = k.tan =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 10),
                  (n.rounding = 1),
                  ((r = r.sin()).s = 1),
                  (r = S(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                  (n.precision = e),
                  (n.rounding = t),
                  A(2 == i || 4 == i ? r.neg() : r, e, t, !0))
              : new n(0 / 0);
          }),
        (k.times = k.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a,
              u,
              l,
              f = this.constructor,
              d = this.d,
              h = (e = new f(e)).d;
            if (((e.s *= this.s), !d || !d[0] || !h || !h[0]))
              return new f(
                !e.s || (d && !d[0] && !h) || (h && !h[0] && !d)
                  ? 0 / 0
                  : !d || !h
                    ? e.s / 0
                    : 0 * e.s,
              );
            for (
              r = m(this.e / 7) + m(e.e / 7),
                (u = d.length) < (l = h.length) &&
                  ((s = d), (d = h), (h = s), (o = u), (u = l), (l = o)),
                s = [],
                n = o = u + l;
              n--;

            )
              s.push(0);
            for (n = l; --n >= 0; ) {
              for (t = 0, i = u + n; i > n; )
                (a = s[i] + h[n] * d[i - n - 1] + t),
                  (s[i--] = a % 1e7 | 0),
                  (t = (a / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--o]; ) s.pop();
            return (
              t ? ++r : s.shift(),
              (e.d = s),
              (e.e = T(s, r)),
              c ? A(e, f.precision, f.rounding) : e
            );
          }),
        (k.toBinary = function (e, t) {
          return W(this, 2, e, t);
        }),
        (k.toDecimalPlaces = k.toDP =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === e)
              ? r
              : (x(e, 0, 1e9),
                void 0 === t ? (t = n.rounding) : x(t, 0, 8),
                A(r, e + r.e + 1, t));
          }),
        (k.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = P(n, !0))
              : (x(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : x(t, 0, 8),
                (r = P((n = A(new i(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (k.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return (
            void 0 === e
              ? (r = P(this))
              : (x(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : x(t, 0, 8),
                (r = P(
                  (n = A(new i(this), e + this.e + 1, t)),
                  !1,
                  e + n.e + 1,
                ))),
            this.isNeg() && !this.isZero() ? "-" + r : r
          );
        }),
        (k.toFraction = function (e) {
          var t,
            r,
            n,
            i,
            s,
            o,
            a,
            u,
            l,
            d,
            h,
            p,
            m = this.d,
            v = this.constructor;
          if (!m) return new v(this);
          if (
            ((l = r = new v(1)),
            (n = u = new v(0)),
            (o = (s = (t = new v(n)).e = I(m) - this.e - 1) % 7),
            (t.d[0] = g(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = s > 0 ? t : l;
          else {
            if (!(a = new v(e)).isInt() || a.lt(l)) throw Error(f + a);
            e = a.gt(t) ? (s > 0 ? t : l) : a;
          }
          for (
            c = !1,
              a = new v(O(m)),
              d = v.precision,
              v.precision = s = 7 * m.length * 2;
            (h = S(a, t, 0, 1, 1)), 1 != (i = r.plus(h.times(n))).cmp(e);

          )
            (r = n),
              (n = i),
              (i = l),
              (l = u.plus(h.times(i))),
              (u = i),
              (i = t),
              (t = a.minus(h.times(i))),
              (a = i);
          return (
            (i = S(e.minus(r), n, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (r = r.plus(i.times(n))),
            (u.s = l.s = this.s),
            (p =
              1 >
              S(l, n, s, 1)
                .minus(this)
                .abs()
                .cmp(S(u, r, s, 1).minus(this).abs())
                ? [l, n]
                : [u, r]),
            (v.precision = d),
            (c = !0),
            p
          );
        }),
        (k.toHexadecimal = k.toHex =
          function (e, t) {
            return W(this, 16, e, t);
          }),
        (k.toNearest = function (e, t) {
          var r = this,
            n = r.constructor;
          if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
          } else {
            if (
              ((e = new n(e)),
              void 0 === t ? (t = n.rounding) : x(t, 0, 8),
              !r.d)
            )
              return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
          }
          return (
            e.d[0]
              ? ((c = !1), (r = S(r, e, 0, t, 1).times(e)), (c = !0), A(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (k.toNumber = function () {
          return +this;
        }),
        (k.toOctal = function (e, t) {
          return W(this, 8, e, t);
        }),
        (k.toPower = k.pow =
          function (e) {
            var t,
              r,
              n,
              i,
              s,
              o,
              a = this,
              u = a.constructor,
              l = +(e = new u(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(g(+a, l));
            if ((a = new u(a)).eq(1)) return a;
            if (((n = u.precision), (s = u.rounding), e.eq(1)))
              return A(a, n, s);
            if (
              (t = m(e.e / 7)) >= e.d.length - 1 &&
              (r = l < 0 ? -l : l) <= 0x1fffffffffffff
            )
              return (
                (i = D(u, a, r, n)), e.s < 0 ? new u(1).div(i) : A(i, n, s)
              );
            if ((o = a.s) < 0) {
              if (t < e.d.length - 1) return new u(0 / 0);
              if (
                ((1 & e.d[t]) == 0 && (o = 1),
                0 == a.e && 1 == a.d[0] && 1 == a.d.length)
              )
                return (a.s = o), a;
            }
            return (t =
              0 != (r = g(+a, l)) && isFinite(r)
                ? new u(r + "").e
                : m(l * (Math.log("0." + O(a.d)) / Math.LN10 + a.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? o / 0 : 0)
              : ((c = !1),
                (u.rounding = a.s = 1),
                (r = Math.min(12, (t + "").length)),
                (i = F(e.times(C(a, n + r)), n)).d &&
                  $((i = A(i, n + 5, 1)).d, n, s) &&
                  ((t = n + 10),
                  +O((i = A(F(e.times(C(a, t + r)), t), t + 5, 1)).d).slice(
                    n + 1,
                    n + 15,
                  ) +
                    1 ==
                    1e14 && (i = A(i, n + 1, 0))),
                (i.s = o),
                (c = !0),
                (u.rounding = s),
                A(i, n, s));
          }),
        (k.toPrecision = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = P(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (x(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : x(t, 0, 8),
                (r = P(
                  (n = A(new i(n), e, t)),
                  e <= n.e || n.e <= i.toExpNeg,
                  e,
                ))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (k.toSignificantDigits = k.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (x(e, 1, 1e9), void 0 === t ? (t = r.rounding) : x(t, 0, 8)),
              A(new r(this), e, t)
            );
          }),
        (k.toString = function () {
          var e = this.constructor,
            t = P(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (k.truncated = k.trunc =
          function () {
            return A(new this.constructor(this), this.e + 1, 1);
          }),
        (k.valueOf = k.toJSON =
          function () {
            var e = this.constructor,
              t = P(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var S = (function () {
        function e(e, t, r) {
          var n,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (n = e[s] * t + i), (e[s] = n % r | 0), (i = (n / r) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, r, n) {
          var i, s;
          if (r != n) s = r > n ? 1 : -1;
          else
            for (i = s = 0; i < r; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function r(e, t, r, n) {
          for (var i = 0; r--; )
            (e[r] -= i), (i = +(e[r] < t[r])), (e[r] = i * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, s, o, a, u, c) {
          var l,
            f,
            d,
            h,
            p,
            g,
            v,
            y,
            w,
            _,
            b,
            z,
            k,
            O,
            x,
            $,
            E,
            S,
            P,
            T,
            j = i.constructor,
            Z = i.s == s.s ? 1 : -1,
            I = i.d,
            N = s.d;
          if (!I || !I[0] || !N || !N[0])
            return new j(
              !i.s || !s.s || (I ? N && I[0] == N[0] : !N)
                ? 0 / 0
                : (I && 0 == I[0]) || !N
                  ? 0 * Z
                  : Z / 0,
            );
          for (
            c
              ? ((p = 1), (f = i.e - s.e))
              : ((c = 1e7), (p = 7), (f = m(i.e / p) - m(s.e / p))),
              P = N.length,
              E = I.length,
              _ = (w = new j(Z)).d = [],
              d = 0;
            N[d] == (I[d] || 0);
            d++
          );
          if (
            (N[d] > (I[d] || 0) && f--,
            null == o
              ? ((O = o = j.precision), (a = j.rounding))
              : (O = u ? o + (i.e - s.e) + 1 : o),
            O < 0)
          )
            _.push(1), (g = !0);
          else {
            if (((O = (O / p + 2) | 0), (d = 0), 1 == P)) {
              for (h = 0, N = N[0], O++; (d < E || h) && O--; d++)
                (x = h * c + (I[d] || 0)),
                  (_[d] = (x / N) | 0),
                  (h = x % N | 0);
              g = h || d < E;
            } else {
              for (
                (h = (c / (N[0] + 1)) | 0) > 1 &&
                  ((N = e(N, h, c)),
                  (I = e(I, h, c)),
                  (P = N.length),
                  (E = I.length)),
                  $ = P,
                  z = (b = I.slice(0, P)).length;
                z < P;

              )
                b[z++] = 0;
              (T = N.slice()).unshift(0), (S = N[0]), N[1] >= c / 2 && ++S;
              do
                (h = 0),
                  (l = t(N, b, P, z)) < 0
                    ? ((k = b[0]),
                      P != z && (k = k * c + (b[1] || 0)),
                      (h = (k / S) | 0) > 1
                        ? (h >= c && (h = c - 1),
                          (y = (v = e(N, h, c)).length),
                          (z = b.length),
                          1 == (l = t(v, b, y, z)) &&
                            (h--, r(v, P < y ? T : N, y, c)))
                        : (0 == h && (l = h = 1), (v = N.slice())),
                      (y = v.length) < z && v.unshift(0),
                      r(b, v, z, c),
                      -1 == l &&
                        ((z = b.length),
                        (l = t(N, b, P, z)) < 1 &&
                          (h++, r(b, P < z ? T : N, z, c))),
                      (z = b.length))
                    : 0 === l && (h++, (b = [0])),
                  (_[d++] = h),
                  l && b[0] ? (b[z++] = I[$] || 0) : ((b = [I[$]]), (z = 1));
              while (($++ < E || void 0 !== b[0]) && O--);
              g = void 0 !== b[0];
            }
            _[0] || _.shift();
          }
          if (1 == p) (w.e = f), (n = g);
          else {
            for (d = 1, h = _[0]; h >= 10; h /= 10) d++;
            (w.e = d + f * p - 1), A(w, u ? o + w.e + 1 : o, a, g);
          }
          return w;
        };
      })();
      function A(e, t, r, n) {
        var i,
          s,
          o,
          a,
          u,
          l,
          f,
          d,
          h,
          p = e.constructor;
        t: if (null != t) {
          if (!(d = e.d)) return e;
          for (i = 1, a = d[0]; a >= 10; a /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (o = t),
              (u = ((f = d[(h = 0)]) / g(10, i - o - 1)) % 10 | 0);
          else if ((h = Math.ceil((s + 1) / 7)) >= (a = d.length))
            if (n) {
              for (; a++ <= h; ) d.push(0);
              (f = u = 0), (i = 1), (s %= 7), (o = s - 7 + 1);
            } else break t;
          else {
            for (f = a = d[h], i = 1; a >= 10; a /= 10) i++;
            (s %= 7),
              (u = (o = s - 7 + i) < 0 ? 0 : (f / g(10, i - o - 1)) % 10 | 0);
          }
          if (
            ((n =
              n ||
              t < 0 ||
              void 0 !== d[h + 1] ||
              (o < 0 ? f : f % g(10, i - o - 1))),
            (l =
              r < 4
                ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (s > 0 ? (o > 0 ? f / g(10, i - o) : 0) : d[h - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !d[0])
          )
            return (
              (d.length = 0),
              l
                ? ((t -= e.e + 1),
                  (d[0] = g(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (d[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((d.length = h), (a = 1), h--)
              : ((d.length = h + 1),
                (a = g(10, 7 - s)),
                (d[h] = o > 0 ? ((f / g(10, i - o)) % g(10, o) | 0) * a : 0)),
            l)
          )
            for (;;)
              if (0 == h) {
                for (s = 1, o = d[0]; o >= 10; o /= 10) s++;
                for (o = d[0] += a, a = 1; o >= 10; o /= 10) a++;
                s != a && (e.e++, 1e7 == d[0] && (d[0] = 1));
                break;
              } else {
                if (((d[h] += a), 1e7 != d[h])) break;
                (d[h--] = 0), (a = 1);
              }
          for (s = d.length; 0 === d[--s]; ) d.pop();
        }
        return (
          c &&
            (e.e > p.maxE
              ? ((e.d = null), (e.e = 0 / 0))
              : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function P(e, t, r) {
        if (!e.isFinite()) return U(e);
        var n,
          i = e.e,
          s = O(e.d),
          o = s.length;
        return (
          t
            ? (r && (n = r - o) > 0
                ? (s = s.charAt(0) + "." + s.slice(1) + N(n))
                : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((s = "0." + N(-i - 1) + s),
                r && (n = r - o) > 0 && (s += N(n)))
              : i >= o
                ? ((s += N(i + 1 - o)),
                  r && (n = r - i - 1) > 0 && (s = s + "." + N(n)))
                : ((n = i + 1) < o && (s = s.slice(0, n) + "." + s.slice(n)),
                  r &&
                    (n = r - o) > 0 &&
                    (i + 1 === o && (s += "."), (s += N(n)))),
          s
        );
      }
      function T(e, t) {
        var r = e[0];
        for (t *= 7; r >= 10; r /= 10) t++;
        return t;
      }
      function j(e, t, r) {
        if (t > b) throw ((c = !0), r && (e.precision = r), Error(d));
        return A(new e(o), t, 1, !0);
      }
      function Z(e, t, r) {
        if (t > z) throw Error(d);
        return A(new e(a), t, r, !0);
      }
      function I(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) r--;
          for (t = e[0]; t >= 10; t /= 10) r++;
        }
        return r;
      }
      function N(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function D(e, t, r, n) {
        var i,
          s = new e(1),
          o = Math.ceil(n / 7 + 4);
        for (c = !1; ; ) {
          if (
            (r % 2 && V((s = s.times(t)).d, o) && (i = !0),
            0 === (r = m(r / 2)))
          ) {
            (r = s.d.length - 1), i && 0 === s.d[r] && ++s.d[r];
            break;
          }
          V((t = t.times(t)).d, o);
        }
        return (c = !0), s;
      }
      function R(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function M(e, t, r) {
        for (var n, i, s = new e(t[0]), o = 0; ++o < t.length; ) {
          if (!(i = new e(t[o])).s) {
            s = i;
            break;
          }
          ((n = s.cmp(i)) === r || (0 === n && s.s === r)) && (s = i);
        }
        return s;
      }
      function F(e, t) {
        var r,
          n,
          i,
          s,
          o,
          a,
          u,
          l = 0,
          f = 0,
          d = 0,
          h = e.constructor,
          p = h.rounding,
          m = h.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new h(
            e.d
              ? !e.d[0]
                ? 1
                : e.s < 0
                  ? 0
                  : 1 / 0
              : e.s
                ? e.s < 0
                  ? 0
                  : e
                : 0 / 0,
          );
        for (
          null == t ? ((c = !1), (u = m)) : (u = t), a = new h(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (d += 5);
        for (
          u += n = ((Math.log(g(2, d)) / Math.LN10) * 2 + 5) | 0,
            r = s = o = new h(1),
            h.precision = u;
          ;

        ) {
          if (
            ((s = A(s.times(e), u, 1)),
            (r = r.times(++f)),
            O((a = o.plus(S(s, r, u, 1))).d).slice(0, u) === O(o.d).slice(0, u))
          ) {
            for (i = d; i--; ) o = A(o.times(o), u, 1);
            if (null != t) return (h.precision = m), o;
            if (!(l < 3 && $(o.d, u - n, p, l)))
              return A(o, (h.precision = m), p, (c = !0));
            (h.precision = u += 10), (r = s = a = new h(1)), (f = 0), l++;
          }
          o = a;
        }
      }
      function C(e, t) {
        var r,
          n,
          i,
          s,
          o,
          a,
          u,
          l,
          f,
          d,
          h,
          p = 1,
          m = e,
          g = m.d,
          v = m.constructor,
          y = v.rounding,
          w = v.precision;
        if (m.s < 0 || !g || !g[0] || (!m.e && 1 == g[0] && 1 == g.length))
          return new v(g && !g[0] ? -1 / 0 : 1 != m.s ? 0 / 0 : g ? 0 : m);
        if (
          (null == t ? ((c = !1), (f = w)) : (f = t),
          (v.precision = f += 10),
          (n = (r = O(g)).charAt(0)),
          !(15e14 > Math.abs((s = m.e))))
        )
          return (
            (l = j(v, f + 2, w).times(s + "")),
            (m = C(new v(n + "." + r.slice(1)), f - 10).plus(l)),
            (v.precision = w),
            null == t ? A(m, w, y, (c = !0)) : m
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = O((m = m.times(e)).d)).charAt(0)), p++;
        for (
          s = m.e,
            n > 1
              ? ((m = new v("0." + r)), s++)
              : (m = new v(n + "." + r.slice(1))),
            d = m,
            u = o = m = S(m.minus(1), m.plus(1), f, 1),
            h = A(m.times(m), f, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = A(o.times(h), f, 1)),
            O((l = u.plus(S(o, new v(i), f, 1))).d).slice(0, f) ===
              O(u.d).slice(0, f))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(j(v, f + 2, w).times(s + ""))),
              (u = S(u, new v(p), f, 1)),
              null != t)
            )
              return (v.precision = w), u;
            if (!$(u.d, f - 10, y, a))
              return A(u, (v.precision = w), y, (c = !0));
            (v.precision = f += 10),
              (l = o = m = S(d.minus(1), d.plus(1), f, 1)),
              (h = A(m.times(m), f, 1)),
              (i = a = 1);
          }
          (u = l), (i += 2);
        }
      }
      function U(e) {
        return String((e.s * e.s) / 0);
      }
      function J(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
          n++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          e.d.push(+t),
            c &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = 0 / 0))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function L(e, t, r, n, i) {
        var s,
          o,
          a,
          u,
          l = e.precision,
          f = Math.ceil(l / 7);
        for (c = !1, u = r.times(r), a = new e(n); ; ) {
          if (
            ((o = S(a.times(u), new e(t++ * t++), l, 1)),
            (a = i ? n.plus(o) : n.minus(o)),
            (n = S(o.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (o = a.plus(n)).d[f])
          ) {
            for (s = f; o.d[s] === a.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = a), (a = n), (n = o), (o = s);
        }
        return (c = !0), (o.d.length = f + 1), o;
      }
      function B(e, t) {
        for (var r = e; --t; ) r *= e;
        return r;
      }
      function q(e, t) {
        var r,
          n = t.s < 0,
          s = Z(e, e.precision, 1),
          o = s.times(0.5);
        if ((t = t.abs()).lte(o)) return (i = n ? 4 : 1), t;
        if ((r = t.divToInt(s)).isZero()) i = n ? 3 : 2;
        else {
          if ((t = t.minus(r.times(s))).lte(o))
            return (i = R(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
          i = R(r) ? (n ? 1 : 4) : n ? 3 : 2;
        }
        return t.minus(s).abs();
      }
      function W(e, t, r, i) {
        var o,
          a,
          u,
          c,
          l,
          f,
          d,
          h,
          p,
          m = e.constructor,
          g = void 0 !== r;
        if (
          (g
            ? (x(r, 1, 1e9), void 0 === i ? (i = m.rounding) : x(i, 0, 8))
            : ((r = m.precision), (i = m.rounding)),
          e.isFinite())
        ) {
          for (
            u = (d = P(e)).indexOf("."),
              g
                ? ((o = 2),
                  16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2))
                : (o = t),
              u >= 0 &&
                ((d = d.replace(".", "")),
                ((p = new m(1)).e = d.length - u),
                (p.d = E(P(p), 10, o)),
                (p.e = p.d.length)),
              a = l = (h = E(d, 10, o)).length;
            0 == h[--l];

          )
            h.pop();
          if (h[0]) {
            if (
              (u < 0
                ? a--
                : (((e = new m(e)).d = h),
                  (e.e = a),
                  (h = (e = S(e, p, r, i, 0, o)).d),
                  (a = e.e),
                  (f = n)),
              (u = h[r]),
              (c = o / 2),
              (f = f || void 0 !== h[r + 1]),
              (f =
                i < 4
                  ? (void 0 !== u || f) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : u > c ||
                    (u === c &&
                      (4 === i ||
                        f ||
                        (6 === i && 1 & h[r - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (h.length = r),
              f)
            )
              for (; ++h[--r] > o - 1; ) (h[r] = 0), r || (++a, h.unshift(1));
            for (l = h.length; !h[l - 1]; --l);
            for (u = 0, d = ""; u < l; u++) d += s.charAt(h[u]);
            if (g) {
              if (l > 1)
                if (16 == t || 8 == t) {
                  for (u = 16 == t ? 4 : 3, --l; l % u; l++) d += "0";
                  for (l = (h = E(d, o, t)).length; !h[l - 1]; --l);
                  for (u = 1, d = "1."; u < l; u++) d += s.charAt(h[u]);
                } else d = d.charAt(0) + "." + d.slice(1);
              d = d + (a < 0 ? "p" : "p+") + a;
            } else if (a < 0) {
              for (; ++a; ) d = "0" + d;
              d = "0." + d;
            } else if (++a > l) for (a -= l; a--; ) d += "0";
            else a < l && (d = d.slice(0, a) + "." + d.slice(a));
          } else d = g ? "0p+0" : "0";
          d = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + d;
        } else d = U(e);
        return e.s < 0 ? "-" + d : d;
      }
      function V(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function K(e) {
        return new this(e).abs();
      }
      function H(e) {
        return new this(e).acos();
      }
      function G(e) {
        return new this(e).acosh();
      }
      function X(e, t) {
        return new this(e).plus(t);
      }
      function Q(e) {
        return new this(e).asin();
      }
      function Y(e) {
        return new this(e).asinh();
      }
      function ee(e) {
        return new this(e).atan();
      }
      function et(e) {
        return new this(e).atanh();
      }
      function er(e, t) {
        (e = new this(e)), (t = new this(t));
        var r,
          n = this.precision,
          i = this.rounding,
          s = n + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((r = t.s < 0 ? Z(this, n, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((r = Z(this, s, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = s),
                      (this.rounding = 1),
                      (r = this.atan(S(e, t, s, 1))),
                      (t = Z(this, s, 1)),
                      (this.precision = n),
                      (this.rounding = i),
                      (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                    : (r = this.atan(S(e, t, s, 1)))
              : ((r = Z(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(0 / 0)),
          r
        );
      }
      function en(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return A((e = new this(e)), e.e + 1, 2);
      }
      function es(e, t, r) {
        return new this(e).clamp(t, r);
      }
      function eo(e) {
        if (!e || "object" != typeof e) throw Error(l + "Object expected");
        var t,
          r,
          n,
          i = !0 === e.defaults,
          s = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < s.length; t += 3)
          if (((r = s[t]), i && (this[r] = u[r]), void 0 !== (n = e[r])))
            if (m(n) === n && n >= s[t + 1] && n <= s[t + 2]) this[r] = n;
            else throw Error(f + r + ": " + n);
        if (((r = "crypto"), i && (this[r] = u[r]), void 0 !== (n = e[r])))
          if (!0 === n || !1 === n || 0 === n || 1 === n)
            if (n)
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[r] = !0;
              else throw Error(h);
            else this[r] = !1;
          else throw Error(f + r + ": " + n);
        return this;
      }
      function ea(e) {
        return new this(e).cos();
      }
      function eu(e) {
        return new this(e).cosh();
      }
      function ec(e, t) {
        return new this(e).div(t);
      }
      function el(e) {
        return new this(e).exp();
      }
      function ef(e) {
        return A((e = new this(e)), e.e + 1, 3);
      }
      function ed() {
        var e,
          t,
          r = new this(0);
        for (e = 0, c = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return (c = !0), new this(1 / 0);
            r = t;
          }
        return (c = !0), r.sqrt();
      }
      function eh(e) {
        return e instanceof eI || (e && e.toStringTag === p) || !1;
      }
      function ep(e) {
        return new this(e).ln();
      }
      function em(e, t) {
        return new this(e).log(t);
      }
      function eg(e) {
        return new this(e).log(2);
      }
      function ev(e) {
        return new this(e).log(10);
      }
      function ey() {
        return M(this, arguments, -1);
      }
      function ew() {
        return M(this, arguments, 1);
      }
      function e_(e, t) {
        return new this(e).mod(t);
      }
      function eb(e, t) {
        return new this(e).mul(t);
      }
      function ez(e, t) {
        return new this(e).pow(t);
      }
      function ek(e) {
        var t,
          r,
          n,
          i,
          s = 0,
          o = new this(1),
          a = [];
        if (
          (void 0 === e ? (e = this.precision) : x(e, 1, 1e9),
          (n = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); s < n; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (a[s++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((n *= 4)); s < n; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (a.push(i % 1e7), (s += 4));
            s = n / 4;
          } else throw Error(h);
        else for (; s < n; ) a[s++] = (1e7 * Math.random()) | 0;
        for (
          n = a[--s],
            e %= 7,
            n && e && ((i = g(10, 7 - e)), (a[s] = ((n / i) | 0) * i));
          0 === a[s];
          s--
        )
          a.pop();
        if (s < 0) (r = 0), (a = [0]);
        else {
          for (r = -1; 0 === a[0]; r -= 7) a.shift();
          for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
          n < 7 && (r -= 7 - n);
        }
        return (o.e = r), (o.d = a), o;
      }
      function eO(e) {
        return A((e = new this(e)), e.e + 1, this.rounding);
      }
      function ex(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || 0 / 0;
      }
      function e$(e) {
        return new this(e).sin();
      }
      function eE(e) {
        return new this(e).sinh();
      }
      function eS(e) {
        return new this(e).sqrt();
      }
      function eA(e, t) {
        return new this(e).sub(t);
      }
      function eP() {
        var e = 0,
          t = arguments,
          r = new this(t[0]);
        for (c = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
        return (c = !0), A(r, this.precision, this.rounding);
      }
      function eT(e) {
        return new this(e).tan();
      }
      function ej(e) {
        return new this(e).tanh();
      }
      function eZ(e) {
        return A((e = new this(e)), e.e + 1, 1);
      }
      (k[Symbol.for("nodejs.util.inspect.custom")] = k.toString),
        (k[Symbol.toStringTag] = "Decimal");
      var eI = (k.constructor = (function e(t) {
        var r, n, i;
        function s(e) {
          var t, r, n;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), eh(e))) {
            (this.s = e.s),
              c
                ? !e.d || e.e > s.maxE
                  ? ((this.e = 0 / 0), (this.d = null))
                  : e.e < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (n = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, r = e; r >= 10; r /= 10) t++;
              c
                ? t > s.maxE
                  ? ((this.e = 0 / 0), (this.d = null))
                  : t < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = 0 / 0), (this.e = 0 / 0), (this.d = null);
              return;
            }
            return J(this, e.toString());
          }
          if ("string" === n)
            return (
              45 === (r = e.charCodeAt(0))
                ? ((e = e.slice(1)), (this.s = -1))
                : (43 === r && (e = e.slice(1)), (this.s = 1)),
              _.test(e)
                ? J(this, e)
                : (function (e, t) {
                    var r, n, i, s, o, a, u, l, d;
                    if (t.indexOf("_") > -1) {
                      if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), _.test(t)))
                        return J(e, t);
                    } else if ("Infinity" === t || "NaN" === t)
                      return (
                        +t || (e.s = 0 / 0), (e.e = 0 / 0), (e.d = null), e
                      );
                    if (y.test(t)) (r = 16), (t = t.toLowerCase());
                    else if (v.test(t)) r = 2;
                    else if (w.test(t)) r = 8;
                    else throw Error(f + t);
                    for (
                      (s = t.search(/p/i)) > 0
                        ? ((u = +t.slice(s + 1)), (t = t.substring(2, s)))
                        : (t = t.slice(2)),
                        o = (s = t.indexOf(".")) >= 0,
                        n = e.constructor,
                        o &&
                          ((s = (a = (t = t.replace(".", "")).length) - s),
                          (i = D(n, new n(r), s, 2 * s))),
                        s = d = (l = E(t, r, 1e7)).length - 1;
                      0 === l[s];
                      --s
                    )
                      l.pop();
                    return s < 0
                      ? new n(0 * e.s)
                      : ((e.e = T(l, d)),
                        (e.d = l),
                        (c = !1),
                        o && (e = S(e, i, 4 * a)),
                        u &&
                          (e = e.times(
                            54 > Math.abs(u) ? g(2, u) : eI.pow(2, u),
                          )),
                        (c = !0),
                        e);
                  })(this, e)
            );
          if ("bigint" === n)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              J(this, e.toString())
            );
          throw Error(f + e);
        }
        if (
          ((s.prototype = k),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = eo),
          (s.clone = e),
          (s.isDecimal = eh),
          (s.abs = K),
          (s.acos = H),
          (s.acosh = G),
          (s.add = X),
          (s.asin = Q),
          (s.asinh = Y),
          (s.atan = ee),
          (s.atanh = et),
          (s.atan2 = er),
          (s.cbrt = en),
          (s.ceil = ei),
          (s.clamp = es),
          (s.cos = ea),
          (s.cosh = eu),
          (s.div = ec),
          (s.exp = el),
          (s.floor = ef),
          (s.hypot = ed),
          (s.ln = ep),
          (s.log = em),
          (s.log10 = ev),
          (s.log2 = eg),
          (s.max = ey),
          (s.min = ew),
          (s.mod = e_),
          (s.mul = eb),
          (s.pow = ez),
          (s.random = ek),
          (s.round = eO),
          (s.sign = ex),
          (s.sin = e$),
          (s.sinh = eE),
          (s.sqrt = eS),
          (s.sub = eA),
          (s.sum = eP),
          (s.tan = eT),
          (s.tanh = ej),
          (s.trunc = eZ),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            r = 0,
              i = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ];
            r < i.length;

          )
            t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
        return s.config(t), s;
      })(u));
      (o = new eI(o)), (a = new eI(a)), r.d(t, {}, { W: eI });
    },
    166295(e, t, r) {
      "use strict";
      var n, i;
      let s, o, a, u, c, l, f, d, h, p;
      function m(e) {
        let t = Object.values(e).filter((e) => "number" == typeof e);
        return Object.entries(e)
          .filter(([e, r]) => -1 === t.indexOf(+e))
          .map(([e, t]) => t);
      }
      function g(e, t = "|") {
        return e.map((e) => D(e)).join(t);
      }
      function v(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
      }
      r.d(t, { k5n: () => nC, Ikc: () => nI, jgl: () => nM, YjP: () => ni });
      class y {
        constructor(e) {
          (this._getter = e), (this._value = void 0);
        }
        get value() {
          let e = this._getter;
          return (
            void 0 !== e && ((this._value = e()), (this._getter = void 0)),
            this._value
          );
        }
      }
      function w(e) {
        let t = +!!e.startsWith("^"),
          r = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, r);
      }
      function _(e, t, r) {
        Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function b(e) {
        let t = Object.getOwnPropertyDescriptor(e, "shape");
        return t?.get ? t.get.raw : t?.value;
      }
      function z(e) {
        return b(e._zod.def) ?? e._zod.def.shape;
      }
      function k(e, t, r) {
        Object.defineProperty(e, t, {
          get() {
            let e = r();
            return _(this, t, e), e;
          },
          enumerable: !0,
          configurable: !0,
        });
      }
      function O(e, t, r) {
        t in e ? _(e, t, r) : (e[t] = r);
      }
      function x(e, t, r, n) {
        let i = z(t);
        for (let s of r) {
          let r = Object.getOwnPropertyDescriptor(i, s);
          r.enumerable &&
            (r.get
              ? k(e, s, () => {
                  let e = t._zod.def.shape[s];
                  return n ? n(e, s) : e;
                })
              : O(e, s, n ? n(r.value, s) : r.value));
        }
      }
      function $(...e) {
        let t = {};
        for (let r of e) Object.assign(t, Object.getOwnPropertyDescriptors(r));
        return Object.defineProperties({}, t);
      }
      let E =
        "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
      function S(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      let A = new y(() => {
        if (
          ea.jitless ||
          ("u" > typeof navigator &&
            navigator?.userAgent?.includes("Cloudflare"))
        )
          return !1;
        try {
          return Function(""), !0;
        } catch (e) {
          return !1;
        }
      });
      function P(e) {
        if (!1 === S(e)) return !1;
        let t = e.constructor;
        if (void 0 === t || "function" != typeof t) return !0;
        let r = t.prototype;
        return (
          !1 !== S(r) &&
          !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf")
        );
      }
      function T(e) {
        return P(e)
          ? { ...e }
          : Array.isArray(e)
            ? [...e]
            : e instanceof Map
              ? new Map(e)
              : e instanceof Set
                ? new Set(e)
                : e;
      }
      let j = new Set(["string", "number", "symbol"]);
      function Z(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function I(e, t, r) {
        let n = new e._zod.constr(t ?? e._zod.def);
        return (!t || r?.parent) && (n._zod.parent = e), n;
      }
      function N(e) {
        if (!e) return {};
        if ("string" == typeof e) return { error: () => e };
        if (e?.message !== void 0) {
          if (e?.error !== void 0)
            throw Error("Cannot specify both `message` and `error` params");
          e.error = e.message;
        }
        return (delete e.message, "string" == typeof e.error)
          ? { ...e, error: () => e.error }
          : e;
      }
      function D(e) {
        return "bigint" == typeof e
          ? e.toString() + "n"
          : "string" == typeof e
            ? `"${e}"`
            : `${e}`;
      }
      let R = {
          safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
          int32: [-0x80000000, 0x7fffffff],
          uint32: [0, 0xffffffff],
          float32: [-34028234663852886e22, 34028234663852886e22],
          float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
        },
        M = {
          int64: [
            BigInt("-9223372036854775808"),
            BigInt("9223372036854775807"),
          ],
          uint64: [BigInt(0), BigInt("18446744073709551615")],
        };
      function F(e, t) {
        let r = z(e),
          n = [];
        for (let e of Reflect.ownKeys(t)) {
          if (!Object.getOwnPropertyDescriptor(r, e)?.enumerable)
            throw Error(`Unrecognized key: "${String(e)}"`);
          t[e] && n.push(e);
        }
        return n;
      }
      function C(e, t) {
        let r = {};
        x(r, e, Reflect.ownKeys(z(e)));
        for (let e of Reflect.ownKeys(t)) {
          let n = Object.getOwnPropertyDescriptor(t, e);
          n.enumerable && (n.get ? k(r, e, () => t[e]) : O(r, e, n.value));
        }
        return r;
      }
      function U(e, t, r, n = "partial") {
        let i = t._zod.def.checks;
        if (i && i.length > 0)
          throw Error(
            `.${n}() cannot be used on object schemas containing refinements`,
          );
        let s = r ? new Set(F(t, r)) : void 0,
          o = {};
        return (
          x(
            o,
            t,
            Reflect.ownKeys(z(t)),
            e &&
              ((t, r) =>
                s && !s.has(r) ? t : new e({ type: "optional", innerType: t })),
          ),
          I(t, $(t._zod.def, { shape: o, checks: [] }))
        );
      }
      function J(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let r = t; r < e.issues.length; r++)
          if (e.issues[r]?.continue !== !0) return !0;
        return !1;
      }
      function L(e, t) {
        return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
      }
      function B(e) {
        return "string" == typeof e ? e : e?.message;
      }
      function q(e) {
        let t = [];
        for (let r of e ?? []) {
          let e = r._zod.def;
          if (!/_(length|size)$|_equals$/.test(e.check)) break;
          let n = e.maximum ?? e.length ?? e.size;
          n >= 0 && t.push([n, r]);
        }
        return t;
      }
      function W(e, t, r) {
        var n;
        for (let i = t; i < e.length; i++) (n = e[i]).schema ?? (n.schema = r);
      }
      function V(e, t, r) {
        let n = e.inst?._zod?.traits;
        n?.has("$ZodType") &&
          (n.has("$ZodCheck")
            ? (e.schema ?? (e.schema = e.inst))
            : (e.schema = e.inst));
        let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
          s = e.message
            ? e.message
            : (B(e.inst?._zod.def?.error?.(e)) ??
              B(i?.(e)) ??
              B(t?.error?.(e)) ??
              B(r.customError?.(e)) ??
              B(r.localeError?.(e)) ??
              "Invalid input"),
          o = {};
        for (let t of Object.keys(e))
          "inst" !== t &&
            "schema" !== t &&
            "continue" !== t &&
            "input" !== t &&
            "__proto__" !== t &&
            (o[t] = e[t]);
        return (
          o.path ?? (o.path = []),
          (o.message = s),
          t?.reportInput && (o.input = e.input),
          o
        );
      }
      let K = /[\uD800-\uDBFF]/;
      function H(e) {
        let t = e.length;
        if (!K.test(e)) return t;
        let r = t;
        for (let n = 0; n < t - 1; n++)
          (64512 & e.charCodeAt(n)) == 55296 &&
            (64512 & e.charCodeAt(n + 1)) == 56320 &&
            (r--, n++);
        return r;
      }
      function G(e) {
        return Array.isArray(e)
          ? "array"
          : "string" == typeof e
            ? "string"
            : "unknown";
      }
      function X(...e) {
        let [t, r, n] = e;
        return "string" == typeof t
          ? { message: t, code: "custom", input: r, inst: n }
          : { ...t };
      }
      function Q(e, t, r, n = !0) {
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            writable: !0,
            enumerable: n,
            value: r,
          }),
          r
        );
      }
      let Y = !1,
        ee = {
          configurable: !0,
          get() {
            Y = !0;
          },
        };
      function et(e, t, r) {
        let n = Object.getPrototypeOf(e._zod);
        if (t in n && s !== e._zod) {
          s = void 0;
          return;
        }
        (s = e._zod),
          Object.defineProperty(n, t, {
            configurable: !0,
            get() {
              Object.defineProperty(this, t, ee);
              let e = Y;
              Y = !1;
              try {
                let n = r(this);
                return (
                  Y
                    ? delete this[t]
                    : Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: n,
                      }),
                  (Y = Y || e),
                  n
                );
              } catch (r) {
                throw (delete this[t], (Y = Y || e), r);
              }
            },
            set(e) {
              Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
      }
      let er = { value: void 0, enumerable: !1 },
        en = "captureStackTrace" in Error ? Error : null;
      function ei(e, t, r, n) {
        function i(e) {
          (this.def = e), (this.constr = c), (this.traits = new Set());
        }
        i.prototype = {};
        let s = r && new WeakSet();
        function o(n, o) {
          if (n._zod) {
            if (n._zod.traits.has(e)) return;
          } else {
            er.value = new i(o);
            try {
              Object.defineProperty(n, "_zod", er);
            } finally {
              er.value = void 0;
            }
          }
          if ((n._zod.traits.add(e), t(n, o), s)) {
            let e = Object.getPrototypeOf(n),
              t = n._zod.constr.prototype,
              i = e;
            for (; i && i !== t; ) i = Object.getPrototypeOf(i);
            let o = i ?? e;
            if (!s.has(o)) {
              s.add(o);
              for (let e in r) {
                let t = Object.getOwnPropertyDescriptor(r, e);
                t.get
                  ? Object.defineProperty(o, e, { ...t, enumerable: !1 })
                  : (function (e, t, r) {
                      Object.defineProperty(e, t, {
                        configurable: !0,
                        get() {
                          return this == null ? r : Q(this, t, r.bind(this));
                        },
                        set(e) {
                          Q(this, t, e);
                        },
                      });
                    })(o, e, t.value);
              }
            }
          }
          let a = c.prototype;
          for (let e in a)
            Object.prototype.hasOwnProperty.call(a, e) &&
              (e in n || (n[e] = a[e].bind(n)));
        }
        let a = n?.Parent ?? Object;
        class u extends a {}
        function c(e) {
          let t = n?.Parent
            ? (function (e) {
                let t = en;
                if (t) {
                  let r = t.stackTraceLimit;
                  if ("number" == typeof r) {
                    try {
                      t.stackTraceLimit = 0;
                    } catch {
                      return (en = null), new e();
                    }
                    try {
                      return new e();
                    } finally {
                      t.stackTraceLimit = r;
                    }
                  }
                }
                return new e();
              })(u)
            : this;
          o(t, e);
          let r = t._zod.deferred;
          if (r) {
            for (let e of r) e();
            t._zod.deferred = void 0;
          }
          let i = globalThis.__zod_globalConfig?.postProcessor;
          return i && i(t), t;
        }
        return (
          Object.defineProperty(u, "name", { value: e }),
          Object.defineProperty(c, "init", { value: o }),
          Object.defineProperty(c, Symbol.hasInstance, {
            value: (t) =>
              (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
          }),
          Object.defineProperty(c, "name", { value: e }),
          c
        );
      }
      class es extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class eo extends Error {
        constructor(e) {
          super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = "ZodEncodeError");
        }
      }
      (n = globalThis).__zod_globalConfig ?? (n.__zod_globalConfig = {});
      let ea = globalThis.__zod_globalConfig;
      function eu(e) {
        return e && Object.assign(ea, e), ea;
      }
      class ec extends Error {
        constructor() {
          super(
            "Cannot parse a reference cycle that closes through a transform",
          ),
            (this.name = "ZodCyclicError");
        }
      }
      let el = "~memo",
        ef = [];
      function ed(e) {
        return null !== e && "object" == typeof e;
      }
      function eh(e) {
        return e.map((e) =>
          e.path ? { ...e, path: e.path.slice() } : { ...e },
        );
      }
      let ep = new WeakMap(),
        em = [],
        eg = {
          alloc(e, t, r) {
            let n = o;
            if (!n) return r;
            o = void 0;
            let i = { value: r, issues: null };
            return n.set(t.value, i), em.push(i), r;
          },
          guard(e) {
            var t;
            (t = e._zod).deferred ?? (t.deferred = []),
              e._zod.deferred.push(() => {
                let t = e._zod.parse,
                  r = (e, r) => {
                    var n, i;
                    let s;
                    if (
                      "backward" !== r.direction &&
                      ((n = r),
                      (i = e.value),
                      void 0 !== (s = n[el]?.backEdges) && ed(i) && s.has(i))
                    )
                      throw new ec();
                    return t(e, r);
                  };
                (e._zod.parse = r), e._zod.run === t && (e._zod.run = r);
              });
          },
          attach(e) {
            var t;
            let r,
              n,
              i,
              s = !1;
            (t = e._zod).deferred ?? (t.deferred = []),
              e._zod.deferred.push(() => {
                let t = e._zod.parse,
                  a = (u, c) => {
                    let l;
                    if (void 0 === r) {
                      let n = (function e(t, r, n) {
                        var i, s;
                        let o = ep.get(t);
                        if (void 0 !== o) return 2 * !!o;
                        if (r.has(t)) return 2;
                        r.add(t);
                        let a = 0,
                          u = (t) => {
                            if (2 !== a && t?._zod) {
                              let i = e(t, r, n);
                              i > a && (a = i);
                            }
                          },
                          c = (e) => {
                            e > a && (a = e);
                          },
                          l = t._zod.def;
                        switch (l.type) {
                          case "object": {
                            let t = b(l);
                            c(
                              t
                                ? ((t, i) => {
                                    let s = 0;
                                    for (let o of Reflect.ownKeys(t)) {
                                      let a = Object.getOwnPropertyDescriptor(
                                        t,
                                        o,
                                      );
                                      if (i && !a.enumerable) continue;
                                      let u = a.get
                                        ? 1
                                        : a.value?._zod
                                          ? e(a.value, r, n)
                                          : 0;
                                      u > s && (s = u);
                                    }
                                    return s;
                                  })(t, !0)
                                : 1,
                            ),
                              u(l.catchall);
                            break;
                          }
                          case "array":
                            u(l.element);
                            break;
                          case "tuple":
                            for (let e of l.items) u(e);
                            u(l.rest);
                            break;
                          case "record":
                          case "map":
                            u(l.keyType), u(l.valueType);
                            break;
                          case "set":
                            u(l.valueType);
                            break;
                          case "union":
                            for (let e of l.options) u(e);
                            break;
                          case "intersection":
                            u(l.left), u(l.right);
                            break;
                          case "optional":
                          case "nullable":
                          case "default":
                          case "prefault":
                          case "catch":
                          case "readonly":
                          case "nonoptional":
                          case "promise":
                          case "success":
                            u(l.innerType);
                            break;
                          case "pipe":
                            u(l.in), u(l.out);
                            break;
                          case "function":
                            u(l.input), u(l.output);
                            break;
                          case "lazy": {
                            let i =
                              l._cachedInner ?? (n ? t._zod.innerType : void 0);
                            c(i ? e(i, r, !1) : 1);
                            break;
                          }
                          case "template_literal":
                          case "string":
                          case "number":
                          case "int":
                          case "boolean":
                          case "bigint":
                          case "symbol":
                          case "undefined":
                          case "null":
                          case "void":
                          case "never":
                          case "any":
                          case "unknown":
                          case "date":
                          case "nan":
                          case "enum":
                          case "literal":
                          case "file":
                          case "transform":
                          case "custom":
                            break;
                          default:
                            for (let e in l) {
                              let t = Object.getOwnPropertyDescriptor(l, e);
                              if (!t || t.get) continue;
                              let r = t.value;
                              if (r && "object" == typeof r) {
                                if (r._zod) u(r);
                                else if (Array.isArray(r))
                                  for (let e of r) u(e);
                              }
                            }
                        }
                        return (
                          r.delete(t),
                          (i = t),
                          1 !== (s = a) && ep.set(i, 2 === s),
                          s
                        );
                      })(e, new Set(), !1);
                      if (0 === n)
                        return (
                          (e._zod.parse = t),
                          e._zod.run === a && (e._zod.run = t),
                          t(u, c)
                        );
                      2 === n || s ? (r = !0) : (s = !0);
                    }
                    let f = u.value;
                    if (!ed(f)) return t(u, c);
                    let d = c[el];
                    if (
                      (d ||
                        ((d = { buckets: new WeakMap(), backEdges: void 0 }),
                        (c[el] = d)),
                      n === c)
                    )
                      l = i;
                    else {
                      var h;
                      let t;
                      (t = (h = d).buckets.get(e)) ||
                        ((t = new WeakMap()), h.buckets.set(e, t)),
                        (l = t),
                        (n = c),
                        (i = l);
                    }
                    let p = l.get(f);
                    if (p)
                      return (
                        (u.value = p.value),
                        p.issues
                          ? p.issues.length && u.issues.push(...eh(p.issues))
                          : ((u.memo = !0),
                            d.backEdges ?? (d.backEdges = new WeakSet()),
                            d.backEdges.add(p.value)),
                        u
                      );
                    o = l;
                    let m = em.length,
                      g = t(u, c);
                    o = void 0;
                    let v = em.length > m ? em.pop() : void 0;
                    return g instanceof Promise
                      ? g.then(
                          (e) => (
                            v &&
                              (v.issues = e.issues.length ? eh(e.issues) : ef),
                            e
                          ),
                        )
                      : (v && (v.issues = g.issues.length ? eh(g.issues) : ef),
                        g);
                  };
                (e._zod.parse = a), e._zod.run === t && (e._zod.run = a);
              });
          },
        },
        ev = /^[cC][0-9a-z]{6,}$/,
        ey = /^[0-9a-z]+$/,
        ew = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
        e_ = /^[0-9a-vA-V]{20}$/,
        eb = /^[A-Za-z0-9]{27}$/,
        ez = /^[a-zA-Z0-9_-]{21}$/,
        ek =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        eO =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        ex = (e) =>
          e
            ? RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        e$ =
          /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        eE =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        eS =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        eA =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        eP =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        eT = /^https?$/,
        ej = /^\+[1-9]\d{6,14}$/,
        eZ =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        eI = RegExp(`^${eZ}$`);
      function eN(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision
          ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
          : e.seconds
            ? `${t}:[0-5]\\d(?:\\.\\d+)?`
            : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      let eD = /^[\s\S]{0,}$/,
        eR = /^-?\d+$/,
        eM = /^-?\d+(?:\.\d+)?$/,
        eF = /^[^A-Z]*$/,
        eC = /^[^a-z]*$/,
        eU = ei("$ZodCheck", (e, t) => {
          var r;
          e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (r = e._zod).onattach ?? (r.onattach = []);
        }),
        eJ = (e) => {
          let t = e.value;
          return null != t && void 0 !== t.length;
        },
        eL = ei("$ZodCheckMaxLength", (e, t) => {
          var r;
          eU.init(e, t),
            (r = e._zod.def).when ?? (r.when = eJ),
            (e._zod.check = (r) => {
              let n = r.value,
                i = n.length;
              if (
                ("string" == typeof n && i > t.maximum ? H(n) : i) <= t.maximum
              )
                return;
              let s = G(n);
              r.issues.push({
                origin: s,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eB = ei("$ZodCheckMinLength", (e, t) => {
          var r;
          eU.init(e, t),
            (r = e._zod.def).when ?? (r.when = eJ),
            (e._zod.check = (r) => {
              let n = r.value,
                i = n.length;
              if (
                ("string" == typeof n && i >= t.minimum && i < 2 * t.minimum
                  ? H(n)
                  : i) >= t.minimum
              )
                return;
              let s = G(n);
              r.issues.push({
                origin: s,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eq = ei("$ZodCheckLengthEquals", (e, t) => {
          var r;
          eU.init(e, t),
            (r = e._zod.def).when ?? (r.when = eJ),
            (e._zod.check = (r) => {
              let n = r.value,
                i = n.length,
                s =
                  "string" == typeof n && i >= t.length && i <= 2 * t.length
                    ? H(n)
                    : i;
              if (s === t.length) return;
              let o = G(n),
                a = s > t.length;
              r.issues.push({
                origin: o,
                ...(a
                  ? { code: "too_big", maximum: t.length }
                  : { code: "too_small", minimum: t.length }),
                inclusive: !0,
                exact: !0,
                input: r.value,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eW = ei("$ZodCheckStringFormat", (e, t) => {
          var r, n;
          eU.init(e, t),
            t.pattern
              ? ((r = e._zod).check ??
                (r.check = (r) => {
                  (t.pattern.lastIndex = 0),
                    t.pattern.test(r.value) ||
                      r.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: t.format,
                        input: r.value,
                        ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                        inst: e,
                        continue: !t.abort,
                      });
                }))
              : ((n = e._zod).check ?? (n.check = () => {}));
        }),
        eV = ei("$ZodCheckRegex", (e, t) => {
          eW.init(e, t),
            (e._zod.check = (r) => {
              (t.pattern.lastIndex = 0),
                t.pattern.test(r.value) ||
                  r.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: r.value,
                    pattern: t.pattern.toString(),
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        eK = ei("$ZodCheckLowerCase", (e, t) => {
          t.pattern ?? (t.pattern = eF), eW.init(e, t);
        }),
        eH = ei("$ZodCheckUpperCase", (e, t) => {
          t.pattern ?? (t.pattern = eC), eW.init(e, t);
        }),
        eG = ei("$ZodCheckIncludes", (e, t) => {
          eU.init(e, t);
          let r = Z(t.includes),
            n = new RegExp(
              "number" == typeof t.position ? `^.{${t.position},}${r}` : r,
            );
          (t.pattern = n),
            (e._zod.check = (r) => {
              r.value.includes(t.includes, t.position) ||
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "includes",
                  includes: t.includes,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eX = ei("$ZodCheckStartsWith", (e, t) => {
          eU.init(e, t);
          let r = RegExp(`^${Z(t.prefix)}.*`);
          t.pattern ?? (t.pattern = r),
            (e._zod.check = (r) => {
              r.value.startsWith(t.prefix) ||
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "starts_with",
                  prefix: t.prefix,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eQ = ei("$ZodCheckEndsWith", (e, t) => {
          eU.init(e, t);
          let r = RegExp(`.*${Z(t.suffix)}$`);
          t.pattern ?? (t.pattern = r),
            (e._zod.check = (r) => {
              r.value.endsWith(t.suffix) ||
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "ends_with",
                  suffix: t.suffix,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eY = ei("$ZodCheckOverwrite", (e, t) => {
          eU.init(e, t),
            (e._zod.check = (e) => {
              e.value = t.tx(e.value);
            });
        });
      class e0 {
        constructor(e = [], t = {}) {
          (this.content = []),
            (this.indent = 0),
            (this.args = e),
            (this.closed = t);
        }
        indented(e) {
          this.indent += 1;
          try {
            e(this);
          } finally {
            this.indent -= 1;
          }
        }
        write(e) {
          if ("function" == typeof e) {
            e(this, { execution: "sync" }), e(this, { execution: "async" });
            return;
          }
          let t = e.split("\n").filter((e) => e),
            r = Math.min(...t.map((e) => e.length - e.trimStart().length));
          for (let e of t
            .map((e) => e.slice(r))
            .map((e) => " ".repeat(2 * this.indent) + e))
            this.content.push(e);
        }
        compile() {
          let e = Function,
            t = this?.content ?? [""];
          return new e(
            ...Object.keys(this.closed),
            `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`,
          )(...Object.values(this.closed));
        }
      }
      let e1 = { major: 4, minor: 6, patch: 7 },
        e2 = ei(
          "$ZodType",
          (e, t) => {
            var r;
            e ?? (e = {}),
              (e._zod.def = t),
              (e._zod.bag = e._zod.bag || {}),
              (e._zod.version = e1);
            let n = e._zod.def.checks,
              i = e._zod.traits.has("$ZodCheck")
                ? [e, ...(n ?? [])]
                : n?.length
                  ? [...n]
                  : [];
            for (let t of i) for (let r of t._zod.onattach) r(e);
            if (0 === i.length)
              (r = e._zod).deferred ?? (r.deferred = []),
                e._zod.deferred?.push(() => {
                  e._zod.run = e._zod.parse;
                });
            else {
              let t = (t, r, n) => {
                  let i;
                  if (t.memo) return t;
                  let s = J(t);
                  for (let o of r) {
                    if (o._zod.def.when) {
                      if (
                        (function (e, t = 0) {
                          if (!0 === e.aborted) return !0;
                          for (let r = t; r < e.issues.length; r++)
                            if (e.issues[r]?.continue === !1) return !0;
                          return !1;
                        })(t) ||
                        !o._zod.def.when(t)
                      )
                        continue;
                    } else if (s) continue;
                    let r = t.issues.length,
                      a = o._zod.check(t);
                    if (a instanceof Promise && n?.async === !1) throw new es();
                    if (i || a instanceof Promise)
                      i = (i ?? Promise.resolve()).then(async () => {
                        await a,
                          t.issues.length !== r &&
                            (W(t.issues, r, e), s || (s = J(t, r)));
                      });
                    else {
                      if (t.issues.length === r) continue;
                      W(t.issues, r, e), s || (s = J(t, r));
                    }
                  }
                  return i ? i.then(() => t) : t;
                },
                r = (r, n, s) => {
                  if (J(r)) return (r.aborted = !0), r;
                  let o = t(n, i, s);
                  if (o instanceof Promise) {
                    if (!1 === s.async) throw new es();
                    return o.then((t) => e._zod.parse(t, s));
                  }
                  return e._zod.parse(o, s);
                };
              e._zod.run = (n, s) => {
                if (s.skipChecks) return e._zod.parse(n, s);
                if ("backward" === s.direction) {
                  let t = e._zod.parse(
                    { value: n.value, issues: [] },
                    { ...s, skipChecks: !0 },
                  );
                  return t instanceof Promise
                    ? t.then((e) => r(e, n, s))
                    : r(t, n, s);
                }
                let o = e._zod.parse(n, s);
                if (o instanceof Promise) {
                  if (!1 === s.async) throw new es();
                  return o.then((e) => t(e, i, s));
                }
                return t(o, i, s);
              };
            }
          },
          {
            get "~standard"() {
              return Q(this, "~standard", e9(this), !1);
            },
            set "~standard"(e) {
              Q(this, "~standard", e);
            },
          },
        ),
        e4 = (e, t) =>
          e.issues.length
            ? { issues: e.issues.map((e) => V(e, t, eu())) }
            : { value: e.value };
      function e9(e) {
        return {
          validate: (t) => {
            let r = { async: !1 };
            try {
              let n = e._zod.run({ value: t, issues: [] }, r);
              if (!(n instanceof Promise)) return e4(n, r);
            } catch (e) {}
            return (async function (e, t) {
              let r = { async: !0 };
              return e4(await e._zod.run({ value: t, issues: [] }, r), r);
            })(e, t);
          },
          vendor: "zod",
          version: 1,
        };
      }
      let e7 = ei("$ZodString", (e, t) => {
          e2.init(e, t),
            (e._zod.pattern = t.pattern ?? eD),
            (e._zod.parse = (r, n) => {
              if (t.coerce)
                try {
                  r.value = String(r.value);
                } catch (e) {}
              return (
                "string" == typeof r.value ||
                  r.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: r.value,
                    inst: e,
                  }),
                r
              );
            });
        }),
        e3 = ei("$ZodStringFormat", (e, t) => {
          eW.init(e, t), e7.init(e, t);
        }),
        e6 = ei("$ZodGUID", (e, t) => {
          t.pattern ?? (t.pattern = eO), e3.init(e, t);
        }),
        e5 = ei("$ZodUUID", (e, t) => {
          if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
              t.version
            ];
            if (void 0 === e)
              throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = ex(e));
          } else t.pattern ?? (t.pattern = ex());
          e3.init(e, t);
        }),
        e8 = ei("$ZodEmail", (e, t) => {
          t.pattern ?? (t.pattern = e$), e3.init(e, t);
        });
      function te(e) {
        try {
          if ("u" > typeof URL && "function" == typeof URL.canParse)
            return URL.canParse(e);
          return new URL(e), !0;
        } catch {
          return !1;
        }
      }
      let tt = /[\t\n\r]/g;
      function tr(e) {
        return e.replace(tt, "");
      }
      let tn = ei("$ZodURL", (e, t) => {
          e3.init(e, t),
            (e._zod.check = (r) => {
              try {
                var n, i;
                let s = r.value.trim(),
                  o =
                    "normalize" in t || "hostname" in t || "protocol" in t
                      ? (function (e, t) {
                          if (
                            !t.normalize &&
                            t.protocol?.source === eT.source &&
                            !/^https?:\/\//i.test(e)
                          )
                            return 1;
                          try {
                            if ("u" > typeof URL) {
                              let t = URL;
                              if ("function" == typeof t.parse)
                                return t.parse(e) ?? 2;
                            }
                            return new URL(e);
                          } catch {
                            return 2;
                          }
                        })(s, t)
                      : te(s) || 2;
                if (1 === o)
                  return void r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  });
                if (2 === o)
                  return void r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  });
                if (!0 === o) {
                  r.value = tr(s);
                  return;
                }
                t.hostname &&
                  (((n = t.hostname).lastIndex = 0), !n.test(o.hostname)) &&
                  r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: t.hostname.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  }),
                  t.protocol &&
                    (((i = t.protocol).lastIndex = 0),
                    !i.test(
                      o.protocol.endsWith(":")
                        ? o.protocol.slice(0, -1)
                        : o.protocol,
                    )) &&
                    r.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid protocol",
                      pattern: t.protocol.source,
                      input: r.value,
                      inst: e,
                      continue: !t.abort,
                    }),
                  (r.value = t.normalize ? o.href : tr(s));
                return;
              } catch (n) {
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        ti = ei("$ZodEmoji", (e, t) => {
          t.pattern ??
            (t.pattern = RegExp(
              "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
              "u",
            )),
            e3.init(e, t);
        }),
        ts = ei("$ZodNanoID", (e, t) => {
          var r;
          if (
            void 0 !== t.length &&
            (!Number.isInteger(t.length) || t.length < 1)
          )
            throw Error(`Invalid nanoid length: ${t.length}`);
          t.pattern ??
            (t.pattern =
              void 0 === t.length
                ? ez
                : ((r = t.length), RegExp(`^[a-zA-Z0-9_-]{${r}}$`))),
            e3.init(e, t);
        }),
        to = ei("$ZodCUID", (e, t) => {
          t.pattern ?? (t.pattern = ev), e3.init(e, t);
        }),
        ta = ei("$ZodCUID2", (e, t) => {
          t.pattern ?? (t.pattern = ey), e3.init(e, t);
        }),
        tu = ei("$ZodULID", (e, t) => {
          t.pattern ?? (t.pattern = ew), e3.init(e, t);
        }),
        tc = ei("$ZodXID", (e, t) => {
          t.pattern ?? (t.pattern = e_), e3.init(e, t);
        }),
        tl = ei("$ZodKSUID", (e, t) => {
          t.pattern ?? (t.pattern = eb), e3.init(e, t);
        }),
        tf = ei("$ZodISODateTime", (e, t) => {
          let r, n, i;
          t.pattern ??
            ((r = ["Z"]),
            t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
            (n = `${eN({ precision: t.precision, seconds: !0 })}(?:${r.join("|")})`),
            (i = t.local ? `${n}|${eN({ precision: t.precision })}` : n),
            (t.pattern = RegExp(`^${eZ}T(?:${i})$`))),
            e3.init(e, t);
        }),
        td = ei("$ZodISODate", (e, t) => {
          t.pattern ?? (t.pattern = eI), e3.init(e, t);
        }),
        th = ei("$ZodISOTime", (e, t) => {
          t.pattern ?? (t.pattern = RegExp(`^${eN(t)}$`)), e3.init(e, t);
        }),
        tp = ei("$ZodISODuration", (e, t) => {
          t.pattern ?? (t.pattern = ek), e3.init(e, t);
        }),
        tm = ei("$ZodIPv4", (e, t) => {
          t.pattern ?? (t.pattern = eE), e3.init(e, t);
        }),
        tg = /^[0-9a-fA-F:.]+$/;
      function tv(e) {
        return !!tg.test(e) && te(`http://[${e}]`);
      }
      let ty = ei("$ZodIPv6", (e, t) => {
          t.pattern ?? (t.pattern = eS),
            e3.init(e, t),
            (e._zod.check = (r) => {
              tv(r.value) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tw = ei("$ZodCIDRv4", (e, t) => {
          t.pattern ?? (t.pattern = eA), e3.init(e, t);
        }),
        t_ = ei("$ZodCIDRv6", (e, t) => {
          t.pattern ?? (t.pattern = eP),
            e3.init(e, t),
            (e._zod.check = (r) => {
              !(function (e) {
                let t = e.split("/");
                if (2 !== t.length) return !1;
                let [r, n] = t;
                if (!n) return !1;
                let i = Number(n);
                return `${i}` === n && !(i < 0) && !(i > 128) && tv(r);
              })(r.value) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        });
      function tb(e) {
        if ("" === e) return !0;
        if (/\s/.test(e) || e.length % 4 != 0) return !1;
        try {
          return atob(e), !0;
        } catch {
          return !1;
        }
      }
      let tz = /^[0-9a-zA-Z+/]*={0,2}$/,
        tk = ei("$ZodBase64", (e, t) => {
          t.pattern ?? (t.pattern = tz),
            e3.init(e, t),
            (e._zod.check = (r) => {
              tb(r.value) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tO = /^[A-Za-z0-9_-]*$/,
        tx = ei("$ZodBase64URL", (e, t) => {
          t.pattern ?? (t.pattern = tO),
            e3.init(e, t),
            (e._zod.check = (r) => {
              !(function (e) {
                if (!tO.test(e)) return !1;
                let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                return tb(t.padEnd(4 * Math.ceil(t.length / 4), "="));
              })(r.value) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "base64url",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        t$ = ei("$ZodE164", (e, t) => {
          t.pattern ?? (t.pattern = ej), e3.init(e, t);
        }),
        tE = ei("$ZodJWT", (e, t) => {
          e3.init(e, t),
            (e._zod.check = (r) => {
              !(function (e, t = null) {
                try {
                  let r = e.split(".");
                  if (3 !== r.length) return !1;
                  let [n] = r;
                  if (!n) return !1;
                  let i = JSON.parse(atob(n));
                  if (
                    ("typ" in i && i?.typ !== "JWT") ||
                    !i.alg ||
                    (t && (!("alg" in i) || i.alg !== t))
                  )
                    return !1;
                  return !0;
                } catch {
                  return !1;
                }
              })(r.value, t.alg) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "jwt",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tS = ei("$ZodUnknown", (e, t) => {
          e2.init(e, t), (e._zod.parse = (e) => e);
        }),
        tA = ei("$ZodNever", (e, t) => {
          e2.init(e, t),
            (e._zod.parse = (t, r) => (
              t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e,
              }),
              t
            ));
        }),
        tP = (e) => (Array.isArray(e) ? e.length : -1);
      function tT(e, t, r) {
        e.issues.length && t.issues.push(...L(r, e.issues)),
          (t.value[r] = e.value);
      }
      let tj = ei("$ZodArray", (e, t) => {
        e2.init(e, t);
        let r = ea.memoizer;
        r?.attach(e),
          (e._zod.parse = (n, i) => {
            let s = n.value;
            if (!Array.isArray(s))
              return (
                n.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: s,
                  inst: e,
                }),
                n
              );
            n.value = r ? r.alloc(e, n, Array(s.length), i) : Array(s.length);
            let o = [],
              a = i?.abortEarly;
            for (let e = 0; e < s.length; e++) {
              let r = s[e],
                u = t.element._zod.run({ value: r, issues: [] }, i);
              if (u instanceof Promise) o.push(u.then((t) => tT(t, n, e)));
              else if ((tT(u, n, e), a && 0 !== u.issues.length && J(u))) break;
            }
            return o.length ? Promise.all(o).then(() => n) : n;
          }),
          (function (e, t) {
            let r = q(e._zod.def.checks);
            if (!r.length) return;
            let n = Math.min(...r.map((e) => e[0])),
              i = e._zod.parse;
            e._zod.parse = (r, s) => {
              let o = t(r.value);
              if (o > n && !s?.skipChecks && s?.direction !== "backward") {
                for (let [t, n] of q(e._zod.def.checks))
                  if (o > t && n._zod.def.when(r)) {
                    let t = r.issues.length;
                    return (
                      n._zod.check(r),
                      (r.issues[t].continue = !1),
                      W(r.issues, t, e),
                      r
                    );
                  }
              }
              return i(r, s);
            };
          })(e, tP);
      });
      function tZ(e, t, r, n, i, s) {
        let o = r in n,
          a = "optional" === s;
        if (o || !a || "optional" !== i) {
          if (e.issues.length) {
            if (void 0 !== i && a && !o) return;
            t.issues.push(...L(r, e.issues));
          }
          if (!o && void 0 === i) {
            e.issues.length ||
              t.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [r],
              });
            return;
          }
          void 0 === e.value
            ? (o || ("defaulted" === i && !a)) && (t.value[r] = void 0)
            : (t.value[r] = e.value);
        }
      }
      let tI = [];
      function tN(e) {
        var t;
        let r = Object.keys(e.shape),
          n = Object.getOwnPropertySymbols(e.shape),
          i = n.length ? n : tI,
          s = i.length ? [...r, ...i] : r;
        for (let t of s)
          if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(
              `Invalid element at key "${String(t)}": expected a Zod schema`,
            );
        let o = Object.keys((t = e.shape)).filter(
          (e) => void 0 !== t[e]._zod.optin && "optional" === t[e]._zod.optout,
        );
        return {
          ...e,
          allKeys: s,
          symbolKeys: i,
          keySet: new Set(r),
          numKeys: r.length,
          optionalKeys: new Set(o),
        };
      }
      function tD(e, t, r, n, i, s, o) {
        let a = [],
          u = i.keySet,
          c = i.catchall._zod,
          l = c.def.type,
          f = c.optin,
          d = c.optout,
          h = 0;
        for (let i in t) {
          if (o && r.issues.length !== h) {
            if (J(r, h)) break;
            h = r.issues.length;
          }
          if (u.has(i)) continue;
          if ("__proto__" === i) {
            "never" === l && a.push(i);
            continue;
          }
          if ("never" === l) {
            a.push(i);
            continue;
          }
          let s = c.run({ value: t[i], issues: [] }, n);
          s instanceof Promise
            ? e.push(s.then((e) => tZ(e, r, i, t, f, d)))
            : tZ(s, r, i, t, f, d);
        }
        return (a.length &&
          r.issues.push({
            code: "unrecognized_keys",
            keys: a,
            input: t,
            inst: s,
            continue: !0,
          }),
        e.length)
          ? Promise.all(e).then(() => r)
          : r;
      }
      let tR = ei("$ZodObject", (e, t) => {
          let r;
          e2.init(e, t);
          let n = Object.getOwnPropertyDescriptor(t, "shape"),
            i = n?.get ? n.get.raw : (t.shape ?? {});
          if (i) {
            let e = () => {
              let r = { ...i };
              return (
                Object.defineProperty(t, "shape", { value: r }), (e.raw = r), r
              );
            };
            (e.raw = i), Object.defineProperty(t, "shape", { get: e });
          }
          let s = new y(() => tN(t));
          et(e, "propValues", (e) => {
            let t = e.def.shape,
              r = {};
            for (let e in t) {
              let n = t[e]._zod;
              if (n.values) {
                for (let t of (Object.prototype.hasOwnProperty.call(r, e) ||
                  _(r, e, new Set()),
                n.values))
                  r[e].add(t);
                void 0 !== n.optin && r[e].add(void 0);
              }
            }
            return r;
          });
          let o = t.catchall,
            a = ea.memoizer;
          a?.attach(e),
            (e._zod.parse = (t, n) => {
              r ?? (r = s.value);
              let i = t.value;
              if (!S(i))
                return (
                  t.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                  t
                );
              t.value = a ? a.alloc(e, t, {}, n) : {};
              let u = [],
                c = r.shape,
                l = n?.abortEarly,
                f = t.issues.length;
              for (let e of r.allKeys) {
                if (l && t.issues.length !== f) {
                  if (J(t, f)) break;
                  f = t.issues.length;
                }
                if ("__proto__" === e) continue;
                let r = c[e],
                  s = r._zod.optin,
                  o = r._zod.optout,
                  a = r._zod.run({ value: i[e], issues: [] }, n);
                a instanceof Promise
                  ? u.push(a.then((r) => tZ(r, t, e, i, s, o)))
                  : tZ(a, t, e, i, s, o);
              }
              return o
                ? tD(u, i, t, n, s.value, e, !0 === l)
                : u.length
                  ? Promise.all(u).then(() => t)
                  : t;
            });
        }),
        tM = ei("$ZodObjectJIT", (e, t) => {
          let r, n;
          tR.init(e, t);
          let i = e._zod.parse,
            s = new y(() => tN(t)),
            o = ea.memoizer,
            a = !ea.jitless,
            u = a && A.value,
            c = t.catchall;
          e._zod.parse = (l, f) => {
            n ?? (n = s.value);
            let d = l.value;
            return S(d)
              ? a && u && f?.async === !1 && !0 !== f.jitless
                ? (r ||
                    (r = ((t) => {
                      let r = s.value,
                        n = r.symbolKeys,
                        i = new e0(["payload", "ctx"], {
                          shape: t,
                          inst: e,
                          memo: o,
                          syms: n,
                        }),
                        a = (e) =>
                          `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                        u = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
                      i.write("const input = payload.value;");
                      let c = Object.create(null),
                        l = 0;
                      for (let e of r.allKeys) c[e] = `key_${l++}`;
                      for (let e of (i.write(
                        o
                          ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
                          : "const newResult = {};",
                      ),
                      r.allKeys)) {
                        if ("__proto__" === e) continue;
                        let r = c[e],
                          s =
                            "symbol" == typeof e
                              ? `syms[${n.indexOf(e)}]`
                              : JSON.stringify(e),
                          o = `${s} in input`,
                          l = t[e],
                          f = l?._zod?.optin,
                          d = void 0 !== f,
                          h = l?._zod?.optout === "optional";
                        if ((i.write(`const ${r} = ${a(s)};`), d && h)) {
                          let e =
                            "optional" === f
                              ? `${r}_present`
                              : `${r}.value !== undefined || ${r}_present`;
                          i.write(`
        const ${r}_present = ${o};
        if (!${r}.issues.length || ${r}_present) {
          if (${r}.issues.length) {${u(r, s)}
          }

          if (${e}) {
            newResult[${s}] = ${r}.value;
          }
        }

      `);
                        } else
                          d
                            ? (i.write(`
        if (${r}.issues.length) {${u(r, s)}
        }
      `),
                              "defaulted" === f
                                ? i.write(`newResult[${s}] = ${r}.value;`)
                                : i.write(`
        if (${r}.value !== undefined || ${o}) {
          newResult[${s}] = ${r}.value;
        }
      `))
                            : i.write(`
        const ${r}_present = ${o};
        if (${r}.issues.length) {${u(r, s)}
        }
        if (!${r}_present && !${r}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${s}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${r}_present) {
          newResult[${s}] = ${r}.value;
        }

      `);
                      }
                      return (
                        i.write("payload.value = newResult;"),
                        i.write("return payload;"),
                        i.compile()
                      );
                    })(t.shape)),
                  (l = r(l, f)),
                  c)
                  ? tD([], d, l, f, n, e, f?.abortEarly === !0)
                  : l
                : i(l, f)
              : (l.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: d,
                  inst: e,
                }),
                l);
          };
        });
      function tF(e, t, r, n) {
        for (let r of e)
          if (0 === r.issues.length) return (t.value = r.value), t;
        let i = e.filter((e) => !J(e));
        return 1 === i.length
          ? ((t.value = i[0].value), i[0])
          : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: r,
              errors: e.map((e) => e.issues.map((e) => V(e, n, eu()))),
            }),
            t);
      }
      let tC = ei("$ZodUnion", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              e.def.options.some((e) => "defaulted" === e._zod.optin)
                ? "defaulted"
                : e.def.options.some((e) => void 0 !== e._zod.optin)
                  ? "optional"
                  : void 0,
            ),
            et(e, "optout", (e) =>
              e.def.options.some((e) => "optional" === e._zod.optout)
                ? "optional"
                : void 0,
            ),
            et(e, "values", (e) => {
              if (e.def.options.every((e) => e._zod.values))
                return new Set(
                  e.def.options.flatMap((e) => Array.from(e._zod.values)),
                );
            }),
            et(e, "pattern", (e) => {
              if (e.def.options.every((e) => e._zod.pattern)) {
                let t = e.def.options.map((e) => e._zod.pattern);
                return RegExp(`^(${t.map((e) => w(e.source)).join("|")})$`);
              }
            });
          let r = 1 === t.options.length ? t.options[0]._zod.run : null;
          e._zod.parse = (n, i) => {
            if (r) return r(n, i);
            let s = !1,
              o = [];
            for (let e of t.options) {
              let t = e._zod.run({ value: n.value, issues: [] }, i);
              if (t instanceof Promise) o.push(t), (s = !0);
              else {
                if (0 === t.issues.length) return t;
                o.push(t);
              }
            }
            return s
              ? Promise.all(o).then((t) => tF(t, n, e, i))
              : tF(o, n, e, i);
          };
        }),
        tU = ei("$ZodIntersection", (e, t) => {
          e2.init(e, t),
            (e._zod.parse = (e, r) => {
              let n = e.value,
                i = t.left._zod.run({ value: n, issues: [] }, r),
                s = t.right._zod.run({ value: n, issues: [] }, r);
              return i instanceof Promise || s instanceof Promise
                ? Promise.all([i, s]).then(([t, r]) => tJ(e, t, r))
                : tJ(e, i, s);
            });
        });
      function tJ(e, t, r) {
        let n,
          i = new Map(),
          s = new Map(),
          o = (e, t) => {
            let r;
            if ("unrecognized_keys" !== e.code || e.path?.length)
              if (
                "invalid_key" !== e.code ||
                "record" !== e.origin ||
                e.path?.length !== 1
              )
                return !1;
              else {
                let t = String(e.path[0]);
                s.has(t) || s.set(t, e), (r = [t]);
              }
            else n ?? (n = e), (r = e.keys);
            for (let e of r) i.has(e) || i.set(e, {}), (i.get(e)[t] = !0);
            return !0;
          };
        for (let r of t.issues) o(r, "l") || e.issues.push(r);
        for (let t of r.issues) o(t, "r") || e.issues.push(t);
        let a = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
        if (a.length) {
          let t = n ? a.filter((e) => n.keys.includes(e)) : [];
          for (let r of (t.length && e.issues.push({ ...n, keys: t }), a))
            !t.includes(r) && s.has(r) && e.issues.push(s.get(r));
        }
        let u = (function e(t, r) {
          if (t === r || (t instanceof Date && r instanceof Date && +t == +r))
            return { valid: !0, data: t };
          if (P(t) && P(r)) {
            let n = Object.keys(r),
              i = Object.keys(t).filter((e) => -1 !== n.indexOf(e)),
              s = { ...t, ...r };
            for (let n of (Object.prototype.hasOwnProperty.call(
              s,
              "__proto__",
            ) && delete s.__proto__,
            i)) {
              if ("__proto__" === n) continue;
              let i = e(t[n], r[n]);
              if (!i.valid)
                return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] };
              s[n] = i.data;
            }
            return { valid: !0, data: s };
          }
          if (Array.isArray(t) && Array.isArray(r)) {
            if (t.length !== r.length) return { valid: !1, mergeErrorPath: [] };
            let n = [];
            for (let i = 0; i < t.length; i++) {
              let s = e(t[i], r[i]);
              if (!s.valid)
                return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] };
              n.push(s.data);
            }
            return { valid: !0, data: n };
          }
          return { valid: !1, mergeErrorPath: [] };
        })(t.value, r.value);
        if (!u.valid) {
          if (J(e)) return e;
          throw Error(
            `Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`,
          );
        }
        return (e.value = u.data), e;
      }
      let tL = ei("$ZodRecord", (e, t) => {
          e2.init(e, t);
          let r = ea.memoizer;
          r?.attach(e),
            (e._zod.parse = (n, i) => {
              let s = n.value;
              if (!P(s))
                return (
                  n.issues.push({
                    expected: "record",
                    code: "invalid_type",
                    input: s,
                    inst: e,
                  }),
                  n
                );
              let o = [],
                a = t.keyType._zod.values;
              if (a && !t.partial) {
                let u;
                n.value = r ? r.alloc(e, n, {}, i) : {};
                let c = new Set();
                for (let r of a)
                  if (
                    "string" == typeof r ||
                    "number" == typeof r ||
                    "symbol" == typeof r
                  ) {
                    if (
                      (c.add("number" == typeof r ? r.toString() : r),
                      "__proto__" === r)
                    )
                      continue;
                    let a = t.keyType._zod.run({ value: r, issues: [] }, i);
                    if (a instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    if (a.issues.length) {
                      n.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: a.issues.map((e) => V(e, i, eu())),
                        input: r,
                        path: [r],
                        inst: e,
                      });
                      continue;
                    }
                    let u = a.value;
                    if ("__proto__" === u) continue;
                    let l = t.valueType._zod.run(
                      { value: s[r], issues: [] },
                      i,
                    );
                    l instanceof Promise
                      ? o.push(
                          l.then((e) => {
                            e.issues.length && n.issues.push(...L(r, e.issues)),
                              (n.value[u] = e.value);
                          }),
                        )
                      : (l.issues.length && n.issues.push(...L(r, l.issues)),
                        (n.value[u] = l.value));
                  }
                for (let e in s)
                  if (!c.has(e))
                    if ("loose" === t.mode) {
                      if ("__proto__" === e) continue;
                      n.value[e] = s[e];
                    } else (u = u ?? []).push(e);
                u &&
                  u.length > 0 &&
                  n.issues.push({
                    code: "unrecognized_keys",
                    input: s,
                    inst: e,
                    keys: u,
                    continue: !0,
                  });
              } else {
                let u;
                for (let c of ((n.value = r ? r.alloc(e, n, {}, i) : {}),
                Reflect.ownKeys(s))) {
                  if (
                    "__proto__" === c ||
                    !Object.prototype.propertyIsEnumerable.call(s, c)
                  )
                    continue;
                  let r = t.keyType._zod.run({ value: c, issues: [] }, i);
                  if (r instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently",
                    );
                  if ("string" == typeof c && eM.test(c) && r.issues.length) {
                    let e = t.keyType._zod.run(
                      { value: Number(c), issues: [] },
                      i,
                    );
                    if (e instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    0 === e.issues.length && (r = e);
                  }
                  if (r.issues.length) {
                    "loose" === t.mode
                      ? (n.value[c] = s[c])
                      : a
                        ? (u = u ?? []).push(c)
                        : n.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: r.issues.map((e) => V(e, i, eu())),
                            input: c,
                            path: [c],
                            inst: e,
                          });
                    continue;
                  }
                  let l = r.value;
                  if ("__proto__" === l) continue;
                  let f = t.valueType._zod.run({ value: s[c], issues: [] }, i);
                  f instanceof Promise
                    ? o.push(
                        f.then((e) => {
                          e.issues.length && n.issues.push(...L(c, e.issues)),
                            (n.value[l] = e.value);
                        }),
                      )
                    : (f.issues.length && n.issues.push(...L(c, f.issues)),
                      (n.value[l] = f.value));
                }
                u &&
                  u.length > 0 &&
                  n.issues.push({
                    code: "unrecognized_keys",
                    input: s,
                    inst: e,
                    keys: u,
                    continue: !0,
                  });
              }
              return o.length ? Promise.all(o).then(() => n) : n;
            });
        }),
        tB = ei("$ZodEnum", (e, t) => {
          e2.init(e, t);
          let r = m(t.entries),
            n = new Set(r);
          (e._zod.values = n),
            et(e, "pattern", (e) => {
              let t = m(e.def.entries).filter((e) => j.has(typeof e));
              return new RegExp(
                t.length
                  ? `^(${t.map((e) => Z(e.toString())).join("|")})$`
                  : "^[^\\s\\S]$",
              );
            }),
            (e._zod.parse = (t, i) => {
              let s = t.value;
              return (
                n.has(s) ||
                  t.issues.push({
                    code: "invalid_value",
                    values: r,
                    input: s,
                    inst: e,
                  }),
                t
              );
            });
        }),
        tq = ei("$ZodTransform", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "optional"),
            ea.memoizer?.guard(e),
            (e._zod.parse = (r, n) => {
              if ("backward" === n.direction) throw new eo(e.constructor.name);
              let i = t.transform(r.value, r);
              if (n.async)
                return (i instanceof Promise ? i : Promise.resolve(i)).then(
                  (e) => ((r.value = e), r),
                );
              if (i instanceof Promise) throw new es();
              return (r.value = i), r;
            });
        });
      function tW(e, t) {
        return (e.value = t.issues.length ? void 0 : t.value), e;
      }
      let tV = ei("$ZodOptional", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              "defaulted" === e.def.innerType._zod.optin
                ? "defaulted"
                : "optional",
            ),
            (e._zod.optout = "optional"),
            et(e, "values", (e) => {
              let t = e.def.innerType._zod.values;
              return t ? new Set([...t, void 0]) : void 0;
            }),
            et(e, "pattern", (e) => {
              let t = e.def.innerType._zod.pattern;
              return t ? RegExp(`^(${w(t.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, r) => {
              if (void 0 === e.value) {
                if ("defaulted" !== t.innerType._zod.optin) return e;
                let n = t.innerType._zod.run({ value: e.value, issues: [] }, r);
                return n instanceof Promise
                  ? n.then((t) => tW(e, t))
                  : tW(e, n);
              }
              return t.innerType._zod.run(e, r);
            });
        }),
        tK = ei("$ZodExactOptional", (e, t) => {
          tV.init(e, t),
            et(e, "values", (e) => e.def.innerType._zod.values),
            et(e, "pattern", (e) => e.def.innerType._zod.pattern),
            (e._zod.parse = (e, r) => t.innerType._zod.run(e, r));
        }),
        tH = ei("$ZodNullable", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) => e.def.innerType._zod.optin),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "pattern", (e) => {
              let t = e.def.innerType._zod.pattern;
              return t ? RegExp(`^(${w(t.source)}|null)$`) : void 0;
            }),
            et(e, "values", (e) =>
              e.def.innerType._zod.values
                ? new Set([...e.def.innerType._zod.values, null])
                : void 0,
            ),
            (e._zod.parse = (e, r) =>
              null === e.value ? e : t.innerType._zod.run(e, r));
        }),
        tG = ei("$ZodDefault", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, r) => {
              if ("backward" === r.direction) return t.innerType._zod.run(e, r);
              if (void 0 === e.value) return (e.value = t.defaultValue), e;
              let n = t.innerType._zod.run(e, r);
              return n instanceof Promise ? n.then((e) => tX(e, t)) : tX(n, t);
            });
        });
      function tX(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
      }
      let tQ = ei("$ZodPrefault", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, r) => (
              "backward" === r.direction ||
                (void 0 === e.value && (e.value = t.defaultValue)),
              t.innerType._zod.run(e, r)
            ));
        }),
        tY = ei("$ZodNonOptional", (e, t) => {
          e2.init(e, t),
            et(e, "values", (e) => {
              let t = e.def.innerType._zod.values;
              return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (r, n) => {
              let i = t.innerType._zod.run(r, n);
              return i instanceof Promise ? i.then((t) => t0(t, e)) : t0(i, e);
            });
        });
      function t0(e, t) {
        return (
          e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: e.value,
              inst: t,
            }),
          e
        );
      }
      function t1(e, t, r, n) {
        return (
          t.issues.length
            ? (e.value = r.catchValue({
                ...t,
                value: e.value,
                error: { issues: t.issues.map((e) => V(e, n, eu())) },
                input: e.value,
              }))
            : ((e.value = t.value), t.memo && (e.memo = !0)),
          e
        );
      }
      let t2 = ei("$ZodCatch", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              "defaulted" === e.def.innerType._zod.optin
                ? "defaulted"
                : "optional",
            ),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, r) => {
              if ("backward" === r.direction) return t.innerType._zod.run(e, r);
              let n = t.innerType._zod.run({ value: e.value, issues: [] }, r);
              return n instanceof Promise
                ? n.then((n) => t1(e, n, t, r))
                : t1(e, n, t, r);
            });
        }),
        t4 = ei("$ZodPipe", (e, t) => {
          e2.init(e, t),
            et(e, "values", (e) => e.def.in._zod.values),
            et(e, "optin", (e) => e.def.in._zod.optin),
            et(e, "optout", (e) => e.def.out._zod.optout),
            et(e, "propValues", (e) => e.def.in._zod.propValues),
            (e._zod.parse = (e, r) => {
              if ("backward" === r.direction) {
                let n = t.out._zod.run(e, r);
                return n instanceof Promise
                  ? n.then((e) => t9(e, t.in, r))
                  : t9(n, t.in, r);
              }
              let n = t.in._zod.run(e, r);
              return n instanceof Promise
                ? n.then((e) => t9(e, t.out, r))
                : t9(n, t.out, r);
            });
        });
      function t9(e, t, r) {
        return e.issues.some((e) => "unrecognized_keys" !== e.code)
          ? ((e.aborted = !0), e)
          : t._zod.run({ value: e.value, issues: e.issues }, r);
      }
      let t7 = ei("$ZodReadonly", (e, t) => {
        e2.init(e, t),
          et(e, "propValues", (e) => e.def.innerType._zod.propValues),
          et(e, "values", (e) => e.def.innerType._zod.values),
          et(e, "optin", (e) => e.def.innerType?._zod?.optin),
          et(e, "optout", (e) => e.def.innerType?._zod?.optout),
          (e._zod.parse = (e, r) => {
            if ("backward" === r.direction) return t.innerType._zod.run(e, r);
            let n = t.innerType._zod.run(e, r);
            return n instanceof Promise ? n.then(t3) : t3(n);
          });
      });
      function t3(e) {
        return e.memo || (e.value = Object.freeze(e.value)), e;
      }
      let t6 = ei("$ZodCustom", (e, t) => {
        eU.init(e, t),
          e2.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (r) => {
            let n = r.value,
              i = t.fn(n);
            if (i instanceof Promise) return i.then((t) => t5(t, r, n, e));
            t5(i, r, n, e);
          });
      });
      function t5(e, t, r, n) {
        if (!e) {
          let e = {
            code: "custom",
            input: r,
            inst: n,
            path: [...(n._zod.def.path ?? [])],
            continue: !n._zod.def.abort,
          };
          n._zod.def.params && (e.params = n._zod.def.params),
            t.issues.push(X(e));
        }
      }
      (i = globalThis).__zod_globalRegistry ??
        (i.__zod_globalRegistry = new (class e {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(e, ...t) {
            let r = t[0];
            return (
              this._map.set(e, r),
              r &&
                "object" == typeof r &&
                "id" in r &&
                this._idmap.set(r.id, e),
              this
            );
          }
          clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
          }
          remove(e) {
            let t = this._map.get(e);
            return (
              t &&
                "object" == typeof t &&
                "id" in t &&
                this._idmap.delete(t.id),
              this._map.delete(e),
              this
            );
          }
          get(e) {
            let t = e._zod.parent;
            if (t) {
              let r = { ...(this.get(t) ?? {}) };
              delete r.id;
              let n = { ...r, ...this._map.get(e) };
              return Object.keys(n).length ? n : void 0;
            }
            return this._map.get(e);
          }
          has(e) {
            return this._map.has(e);
          }
        })());
      let t8 = globalThis.__zod_globalRegistry;
      function re(e, t) {
        return new eL({ check: "max_length", ...N(t), maximum: e });
      }
      function rt(e, t) {
        return new eB({ check: "min_length", ...N(t), minimum: e });
      }
      function rr(e, t) {
        return new eq({ check: "length_equals", ...N(t), length: e });
      }
      function rn(e) {
        return new eY({ check: "overwrite", tx: e });
      }
      function ri(e, ...t) {
        for (let r of t)
          for (let t of Reflect.ownKeys(r))
            Object.prototype.propertyIsEnumerable.call(r, t) && _(e, t, r[t]);
        return e;
      }
      function rs(e) {
        let t = e?.target ?? "draft-2020-12";
        return (
          "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? t8,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            sharedDefsExtractedFor: void 0,
            sharedEmitDoneFor: void 0,
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            intersections: [],
            deferred: [],
            external: e?.external ?? void 0,
          }
        );
      }
      function ro(e, t, r, n, i) {
        let s =
          "function" == typeof t.unrepresentable
            ? t.unrepresentable({ zodSchema: e, path: n.path, message: i })
            : t.unrepresentable;
        if ("any" === s) return !1;
        if (void 0 === s || "throw" === s) throw Error(i);
        return Object.assign(r, s), !0;
      }
      function ra(e, t, r = { path: [], schemaPath: [] }) {
        var n;
        let i = e._zod.def,
          s = t.seen.get(e);
        if (s)
          return (
            s.count++, r.schemaPath.includes(e) && (s.cycle = r.path), s.schema
          );
        let o = { schema: {}, count: 1, cycle: void 0, path: r.path };
        t.seen.set(e, o),
          (t.sharedDefsExtractedFor = void 0),
          (t.sharedEmitDoneFor = void 0);
        let a = e._zod.toJSONSchema?.();
        if (a) o.schema = a;
        else {
          let n = { ...r, schemaPath: [...r.schemaPath, e], path: r.path };
          if (e._zod.processJSONSchema)
            e._zod.processJSONSchema(t, o.schema, n);
          else {
            let r = o.schema,
              s = t.processors[i.type];
            if (!s)
              throw Error(
                `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
              );
            s(e, t, r, n);
          }
          let s = e._zod.parent;
          s &&
            (o.ref || (o.ref = s), ra(s, t, n), (t.seen.get(s).isParent = !0));
        }
        let u = t.metadataRegistry.get(e);
        return (
          u && ri(o.schema, u),
          "input" === t.io &&
            (function e(t, r) {
              let n = r ?? { seen: new Set() };
              if (n.seen.has(t)) return !1;
              n.seen.add(t);
              let i = t._zod.def;
              if ("transform" === i.type) return !0;
              if ("array" === i.type) return e(i.element, n);
              if ("set" === i.type) return e(i.valueType, n);
              if ("lazy" === i.type) return e(i.getter(), n);
              if (
                "promise" === i.type ||
                "optional" === i.type ||
                "nonoptional" === i.type ||
                "nullable" === i.type ||
                "readonly" === i.type ||
                "default" === i.type ||
                "prefault" === i.type ||
                "catch" === i.type
              )
                return e(i.innerType, n);
              if ("intersection" === i.type)
                return e(i.left, n) || e(i.right, n);
              if ("record" === i.type || "map" === i.type)
                return e(i.keyType, n) || e(i.valueType, n);
              if ("pipe" === i.type)
                return (
                  !!t._zod.traits.has("$ZodCodec") || e(i.in, n) || e(i.out, n)
                );
              if ("object" === i.type) {
                for (let t in i.shape) if (e(i.shape[t], n)) return !0;
                return !1;
              }
              if ("union" === i.type) {
                for (let t of i.options) if (e(t, n)) return !0;
                return !1;
              }
              if ("tuple" === i.type) {
                for (let t of i.items) if (e(t, n)) return !0;
                if (i.rest && e(i.rest, n)) return !0;
              }
              return !1;
            })(e) &&
            (delete o.schema.examples, delete o.schema.default),
          "input" === t.io &&
            "_prefault" in o.schema &&
            ((n = o.schema).default ?? (n.default = o.schema._prefault)),
          delete o.schema._prefault,
          t.seen.get(e).schema
        );
      }
      function ru(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function rc(e, t) {
        let r = e.seen.get(t);
        if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
        if (e.external && e.sharedDefsExtractedFor === e.external) return;
        let n = new Map();
        for (let t of e.seen.entries()) {
          let r = e.metadataRegistry.get(t[0])?.id;
          if (r) {
            let e = n.get(r);
            if (e && e !== t[0])
              throw Error(
                `Duplicate schema id "${r}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
              );
            n.set(r, t[0]);
          }
        }
        let i = (t) => {
          if (t[1].schema.$ref) return;
          let n = t[1],
            { ref: i, defId: s } = ((t) => {
              let n = "draft-2020-12" === e.target ? "$defs" : "definitions";
              if (e.external) {
                let r = e.external.registry.get(t[0])?.id,
                  i = e.external.uri ?? ((e) => e);
                if (r) return { ref: i(r) };
                let s = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                return (
                  (t[1].defId = s),
                  { defId: s, ref: `${i("__shared")}#/${n}/${ru(s)}` }
                );
              }
              let i = `#/${n}/`;
              if (t[1] === r && !t[1].schema.id) return { ref: "#" };
              let s = t[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: s, ref: i + ru(s) };
            })(t);
          (n.def = { ...n.schema }), s && (n.defId = s);
          let o = n.schema;
          for (let e in o) delete o[e];
          o.$ref = i;
        };
        if ("throw" === e.cycles)
          for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
              throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let r of e.seen.entries()) {
          let n = r[1];
          if (t === r[0]) {
            i(r);
            continue;
          }
          if (e.external) {
            let n = e.external.registry.get(r[0])?.id;
            if (t !== r[0] && n) {
              i(r);
              continue;
            }
          }
          if (e.metadataRegistry.get(r[0])?.id || n.cycle) {
            i(r);
            continue;
          }
          n.count > 1 && "ref" === e.reused && i(r);
        }
        e.external && (e.sharedDefsExtractedFor = e.external);
      }
      let rl = new Set([
          "type",
          "properties",
          "required",
          "additionalProperties",
        ]),
        rf = ["oneOf", "anyOf"];
      function rd(e) {
        let t = e.additionalProperties;
        return void 0 === t || !1 === t || "object" != typeof t || null === t
          ? null
          : Object.keys(t).length
            ? t
            : null;
      }
      function rh(e) {
        let t = [];
        for (let r of e) {
          if ("object" != typeof r || "object" !== r.type) return null;
          for (let e in r) if (!rl.has(e)) return null;
          t.push(r);
        }
        let r = {},
          n = new Set();
        for (let e of t) {
          for (let n in e.properties) {
            if (Object.prototype.hasOwnProperty.call(r, n)) continue;
            let e = [];
            for (let r of t) {
              let t = r.properties?.[n] ?? rd(r);
              null != t &&
                (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) ||
                  e.push(t));
            }
            _(r, n, 1 === e.length ? e[0] : (rh(e) ?? { allOf: e }));
          }
          for (let t of e.required ?? []) n.add(t);
        }
        let i = { type: "object", properties: r };
        if (
          (n.size && (i.required = [...n]),
          t.every((e) => !1 === e.additionalProperties))
        )
          i.additionalProperties = !1;
        else {
          let e = [];
          for (let r of t) {
            let t = rd(r);
            t &&
              !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) &&
              e.push(t);
          }
          1 === e.length
            ? (i.additionalProperties = e[0])
            : e.length > 1 && (i.additionalProperties = { allOf: e });
        }
        return i;
      }
      function rp(e, t) {
        let r = e.seen.get(t);
        if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
        let n = (t) => {
          let r = e.seen.get(t);
          if (null === r.ref) return;
          let i = r.def ?? r.schema,
            s = { ...i },
            o = r.ref;
          if (((r.ref = null), o)) {
            n(o);
            let r = e.seen.get(o),
              a = r.schema;
            if (
              (a.$ref &&
              ("draft-07" === e.target ||
                "draft-04" === e.target ||
                "openapi-3.0" === e.target)
                ? ((i.allOf = i.allOf ?? []), i.allOf.push(a))
                : ri(i, a),
              ri(i, s),
              t._zod.parent === o)
            )
              for (let e in i)
                "$ref" !== e && "allOf" !== e && (e in s || delete i[e]);
            if (a.$ref && r.def)
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in r.def &&
                  JSON.stringify(i[e]) === JSON.stringify(r.def[e]) &&
                  delete i[e];
          }
          let a = t._zod.parent;
          if (a && a !== o) {
            n(a);
            let t = e.seen.get(a);
            if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in t.def &&
                  JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                  delete i[e];
          }
          e.override({ zodSchema: t, jsonSchema: i, path: r.path ?? [] });
        };
        if (!e.external || e.sharedEmitDoneFor !== e.external) {
          for (let t of [...e.seen.entries()].reverse()) n(t[0]);
          if ("openapi-3.0" !== e.target)
            for (let t of e.seen.entries())
              !(function e(t) {
                let r = t.anyOf;
                if (!Array.isArray(r) || 0 === r.length || void 0 !== t.type)
                  return;
                let n = [];
                for (let t of r) {
                  if (!t || "object" != typeof t) return;
                  e(t);
                  let r = Object.keys(t);
                  if (1 !== r.length || "type" !== r[0]) return;
                  let i = t.type;
                  for (let e of Array.isArray(i) ? i : [i]) {
                    if ("string" != typeof e) return;
                    n.includes(e) || n.push(e);
                  }
                }
                delete t.anyOf, (t.type = 1 === n.length ? n[0] : n);
              })(t[1].def ?? t[1].schema);
          for (let t of e.deferred) t();
          if (e.intersections.length) {
            let t = new Map();
            for (let r of e.seen.values())
              for (let e of [r.schema, r.def]) {
                let r = e?.allOf;
                if (!Array.isArray(r)) continue;
                let n = t.get(r);
                n ? n.push(e) : t.set(r, [e]);
              }
            for (let r of e.intersections)
              for (let e of t.get(r) ?? [])
                !(function (e) {
                  let t = e.allOf;
                  if (!Array.isArray(t) || t.length < 2) return;
                  for (let t of rl) if (t in e) return;
                  let r = t.filter((e) => rf.some((t) => Array.isArray(e[t]))),
                    n = null;
                  if (r.length) {
                    let e = r[0],
                      i = rf.find((t) => Array.isArray(e[t]));
                    if (1 !== Object.keys(e).length) return;
                    let s = t.filter((t) => t !== e),
                      o = e[i].map((e) => rh([...s, e]));
                    if (o.some((e) => !e)) return;
                    n = { [i]: o };
                  } else n = rh(t);
                  n && (delete e.allOf, ri(e, n));
                })(e);
          }
        }
        let i = {};
        if (
          ("draft-2020-12" === e.target
            ? (i.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (i.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (i.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
          e.external?.uri)
        ) {
          let r = e.external.registry.get(t)?.id;
          if (!r) throw Error("Schema is missing an `id` property");
          i.$id = e.external.uri(r);
        }
        ri(i, r.defId ? r.schema : (r.def ?? r.schema));
        let s = e.metadataRegistry.get(t)?.id;
        void 0 !== s && i.id === s && delete i.id;
        let o = e.external?.defs ?? {};
        if (!e.external || e.sharedEmitDoneFor !== e.external)
          for (let t of e.seen.entries()) {
            let e = t[1];
            e.def &&
              e.defId &&
              (e.def.id === e.defId && delete e.def.id, _(o, e.defId, e.def));
          }
        e.external && (e.sharedEmitDoneFor = e.external),
          e.external ||
            (Object.keys(o).length > 0 &&
              ("draft-2020-12" === e.target
                ? (i.$defs = o)
                : (i.definitions = o)));
        try {
          let r = JSON.parse(JSON.stringify(i));
          return (
            Object.defineProperty(r, "~standard", {
              value: {
                ...t["~standard"],
                jsonSchema: {
                  input: rm(t, "input", e.processors),
                  output: rm(t, "output", e.processors),
                },
              },
              enumerable: !1,
              writable: !1,
            }),
            r
          );
        } catch (e) {
          throw Error("Error converting schema to JSON.");
        }
      }
      let rm =
          (e, t, r = {}) =>
          (n) => {
            let { libraryOptions: i, target: s } = n ?? {},
              o = rs({ ...(i ?? {}), target: s, io: t, processors: r });
            return ra(e, o), rc(o, e), rp(o, e);
          },
        rg = (e, t, r) => {
          (void 0 === e[t] || r > e[t]) && (e[t] = r);
        },
        rv = (e, t, r) => {
          (void 0 === e[t] || r < e[t]) && (e[t] = r);
        },
        ry = (e, t) => {
          rg(e, "minimum", t), rv(e, "maximum", t);
        },
        rw = (e, t) => {
          e.multipleOf ?? (e.multipleOf = []),
            e.multipleOf.includes(t) || e.multipleOf.push(t);
        },
        r_ = (e, t) => {
          e.patterns ?? (e.patterns = new Set()), e.patterns.add(t);
        },
        rb = (e, t) => {
          e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
        },
        rz = (e, t) => {
          (e.format = t), t.includes("int") && (e.isInt = !0);
        },
        rk = (e, t) => rg(e, "minimum", t.minimum),
        rO = (e, t) => rv(e, "maximum", t.maximum),
        rx = (e) => (t, r) => {
          rz(t, r.format);
          let [n, i] = e[r.format];
          rg(t, "minimum", n), rv(t, "maximum", i);
        },
        r$ = {
          greater_than: (e, t) =>
            rg(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
          less_than: (e, t) =>
            rv(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
          multiple_of: (e, t) => rw(e, t.value),
          number_format: rx(R),
          bigint_format: rx(M),
          min_length: rk,
          max_length: rO,
          length_equals: (e, t) => ry(e, t.length),
          min_size: rk,
          max_size: rO,
          size_equals: (e, t) => ry(e, t.size),
          string_format: (e, t) => {
            rz(e, t.format),
              t.pattern && r_(e, t.pattern),
              ("base64" === t.format || "base64url" === t.format) &&
                (e.contentEncoding = t.format),
              (t.local || -1 === t.precision) && (e.laxFormat = !0);
          },
          mime_type: (e, t) => rb(e, t.mime),
        };
      function rE(e) {
        let t = {},
          r = e._zod.def;
        for (let n of e._zod.traits.has("$ZodCheck")
          ? [e, ...(r.checks ?? [])]
          : (r.checks ?? []))
          r$[n._zod.def.check]?.(t, n._zod.def);
        let n = e._zod.bag;
        for (let e of (void 0 !== n.minimum && rg(t, "minimum", n.minimum),
        void 0 !== n.exclusiveMinimum &&
          rg(t, "exclusiveMinimum", n.exclusiveMinimum),
        void 0 !== n.maximum && rv(t, "maximum", n.maximum),
        void 0 !== n.exclusiveMaximum &&
          rv(t, "exclusiveMaximum", n.exclusiveMaximum),
        void 0 !== n.multipleOf && rw(t, n.multipleOf),
        void 0 !== n.format &&
          (t.format ?? (t.format = n.format),
          n.format.includes("int") && (t.isInt = !0)),
        n.mime && rb(t, n.mime),
        n.patterns ?? []))
          r_(t, e);
        return t;
      }
      let rS = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        rA = new Map([
          [
            tz,
            /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
          ],
          [tO, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/],
        ]),
        rP = (e) => rA.get(e) ?? e;
      function rT(e) {
        let t = e._zod.def;
        return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform")
          ? rT(t.out)
          : "catch" === t.type
            ? rT(t.innerType)
            : e._zod.optin;
      }
      let rj = new WeakMap(),
        rZ = Symbol();
      function rI(e, t, r, n, i) {
        let s = !1,
          o = JSON.stringify(e, (e, t) =>
            "bigint" != typeof t ? t : ((s = !0), null),
          );
        return s
          ? (ro(
              t,
              r,
              n,
              i,
              "BigInt defaults cannot be represented in JSON Schema",
            ),
            rZ)
          : JSON.parse(o);
      }
      let rN = (e, t, r, n) => {
          let i = e._zod.def;
          ra(i.innerType, t, n), (t.seen.get(e).ref = i.innerType);
        },
        rD = {
          get: function () {
            let e = this._zod;
            return (
              e.message ?? (e.message = JSON.stringify(e.def, v, 2)), e.message
            );
          },
          set: function (e) {
            this._zod.message = e;
          },
          enumerable: !0,
          configurable: !0,
        },
        rR = { value: void 0, enumerable: !1 },
        rM = new WeakSet([Object.prototype, Error.prototype]),
        rF = (e, t) => {
          (e.name = "$ZodError"),
            (rR.value = t),
            Object.defineProperty(e, "issues", rR),
            (rR.value = void 0),
            Object.defineProperty(e, "message", rD);
          let r = Object.getPrototypeOf(e);
          rM.has(r) ||
            (rM.add(r),
            Object.defineProperty(r, "toString", {
              configurable: !0,
              enumerable: !1,
              get() {
                let e = () => this.message;
                return (
                  Object.defineProperty(this, "toString", {
                    value: e,
                    configurable: !0,
                    writable: !0,
                  }),
                  e
                );
              },
              set(e) {
                Object.defineProperty(this, "toString", {
                  value: e,
                  configurable: !0,
                  writable: !0,
                });
              },
            }));
        },
        rC = ei("$ZodError", rF);
      function rU(e, t) {
        return { callee: t?.callee ?? e, Err: t?.Err };
      }
      ei("$ZodError", rF, void 0, { Parent: Error });
      let rJ = (e) => {
          let t = (r, n, i, s) => {
            let o = i ? { ...i, async: !1 } : { async: !1 },
              a = r._zod.run({ value: n, issues: [] }, o);
            if (a instanceof Promise) throw new es();
            if (a.issues.length) {
              let r = new (s?.Err ?? e)(a.issues.map((e) => V(e, o, eu())));
              throw (E(r, s?.callee ?? t), r);
            }
            return a.value;
          };
          return t;
        },
        rL = (e) => {
          let t = async (r, n, i, s) => {
            let o = i ? { ...i, async: !0 } : { async: !0 },
              a = r._zod.run({ value: n, issues: [] }, o);
            if ((a instanceof Promise && (a = await a), a.issues.length)) {
              let r = new (s?.Err ?? e)(a.issues.map((e) => V(e, o, eu())));
              throw (E(r, s?.callee ?? t), r);
            }
            return a.value;
          };
          return t;
        },
        rB = (e) => (t, r, n) => {
          let i = n ? { ...n, async: !1 } : { async: !1 },
            s = t._zod.run({ value: r, issues: [] }, i);
          if (s instanceof Promise) throw new es();
          return s.issues.length
            ? rq(e, s.issues, i)
            : { success: !0, data: s.value };
        };
      function rq(e, t, r) {
        let n;
        return {
          success: !1,
          get error() {
            return (
              n ||
                ((n = new e(t.map((e) => V(e, r, eu())))),
                (t = void 0),
                (r = void 0)),
              n
            );
          },
          set error(e) {
            (n = e), (t = void 0), (r = void 0);
          },
        };
      }
      let rW = (e) => async (t, r, n) => {
          let i = n ? { ...n, async: !0 } : { async: !0 },
            s = t._zod.run({ value: r, issues: [] }, i);
          return (
            s instanceof Promise && (s = await s),
            s.issues.length
              ? rq(e, s.issues, i)
              : { success: !0, data: s.value }
          );
        },
        rV = Symbol.for("zod.compile.invalid"),
        rK = Symbol.for("zod.compile.fallback"),
        rH = new WeakSet([Object.prototype, Error.prototype]);
      function rG(e, t, r) {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          get() {
            let e = r(this);
            return (
              Object.defineProperty(this, t, {
                value: e,
                configurable: !0,
                writable: !0,
              }),
              e
            );
          },
          set(e) {
            Object.defineProperty(this, t, {
              value: e,
              configurable: !0,
              writable: !0,
            });
          },
        });
      }
      let rX = ei(
          "ZodError",
          (e, t) => {
            rC.init(e, t), (e.name = "ZodError");
            let r = Object.getPrototypeOf(e);
            rH.has(r) ||
              (rH.add(r),
              rG(
                r,
                "format",
                (e) => (t) =>
                  (function (e, t = (e) => e.message) {
                    let r = { _errors: [] },
                      n = (e, i = []) => {
                        for (let s of e.issues)
                          if ("invalid_union" === s.code && s.errors.length)
                            s.errors.map((e) =>
                              n({ issues: e }, [...i, ...s.path]),
                            );
                          else if ("invalid_key" === s.code)
                            n({ issues: s.issues }, [...i, ...s.path]);
                          else if ("invalid_element" === s.code)
                            n({ issues: s.issues }, [...i, ...s.path]);
                          else {
                            let e = [...i, ...s.path];
                            if (0 === e.length) r._errors.push(t(s));
                            else {
                              let n = r,
                                i = 0;
                              for (; i < e.length; ) {
                                let r = e[i],
                                  o = i === e.length - 1;
                                if ("_errors" === r) {
                                  o && n._errors.push(t(s)), i++;
                                  continue;
                                }
                                Object.prototype.hasOwnProperty.call(n, r) ||
                                  Object.defineProperty(n, r, {
                                    value: { _errors: [] },
                                    enumerable: !0,
                                    writable: !0,
                                    configurable: !0,
                                  });
                                let a = n[r];
                                o && a._errors.push(t(s)), (n = a), i++;
                              }
                            }
                          }
                      };
                    return n(e), r;
                  })(e, t),
              ),
              rG(
                r,
                "flatten",
                (e) => (t) =>
                  (function (e, t = (e) => e.message) {
                    let r = {},
                      n = [];
                    for (let o of e.issues)
                      if (o.path.length > 0) {
                        var i, s;
                        ((i = o.path[0]),
                        (s = () => []),
                        !Object.prototype.hasOwnProperty.call(r, i) &&
                          ("__proto__" === i
                            ? Object.defineProperty(r, i, {
                                value: s(),
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                              })
                            : (r[i] = s())),
                        r[i]).push(t(o));
                      } else n.push(t(o));
                    return { formErrors: n, fieldErrors: r };
                  })(e, t),
              ),
              rG(r, "addIssue", (e) => (t) => {
                e.issues.push(t), (e.message = JSON.stringify(e.issues, v, 2));
              }),
              rG(r, "addIssues", (e) => (t) => {
                e.issues.push(...t),
                  (e.message = JSON.stringify(e.issues, v, 2));
              }),
              Object.defineProperty(r, "isEmpty", {
                configurable: !0,
                enumerable: !1,
                get() {
                  return 0 === this.issues.length;
                },
              }));
          },
          void 0,
          { Parent: Error },
        ),
        rQ = rJ(rX),
        rY = rL(rX),
        r0 = rB(rX),
        r1 = rW(rX),
        r2 =
          ((a = rJ(rX)),
          (u = (e, t, r, n) =>
            a(
              e,
              t,
              r ? { ...r, direction: "backward" } : { direction: "backward" },
              rU(u, n),
            ))),
        r4 = ((c = rJ(rX)), (l = (e, t, r, n) => c(e, t, r, rU(l, n)))),
        r9 =
          ((f = rL(rX)),
          (d = async (e, t, r, n) => {
            let i = r
              ? { ...r, direction: "backward" }
              : { direction: "backward" };
            return await f(e, t, i, rU(d, n));
          })),
        r7 =
          ((h = rL(rX)),
          (p = async (e, t, r, n) => await h(e, t, r, rU(p, n)))),
        r3 = (e, t, r) => {
          let n = r
            ? { ...r, direction: "backward" }
            : { direction: "backward" };
          return rB(rX)(e, t, n);
        },
        r6 = (e, t, r) => rB(rX)(e, t, r),
        r5 = async (e, t, r) => {
          let n = r
            ? { ...r, direction: "backward" }
            : { direction: "backward" };
          return rW(rX)(e, t, n);
        },
        r8 = async (e, t, r) => rW(rX)(e, t, r);
      function ne() {
        ea.memoizer || eu({ memoizer: eg });
      }
      let nt = ei(
          "ZodType",
          (e, t) => (
            ea.localeError ||
              eu({
                localeError: (() => {
                  let e = {
                      string: { unit: "characters", verb: "to have" },
                      file: { unit: "bytes", verb: "to have" },
                      array: { unit: "items", verb: "to have" },
                      set: { unit: "items", verb: "to have" },
                      map: { unit: "entries", verb: "to have" },
                    },
                    t = {
                      regex: "input",
                      email: "email address",
                      url: "URL",
                      emoji: "emoji",
                      uuid: "UUID",
                      uuidv4: "UUIDv4",
                      uuidv6: "UUIDv6",
                      nanoid: "nanoid",
                      guid: "GUID",
                      cuid: "cuid",
                      cuid2: "cuid2",
                      ulid: "ULID",
                      xid: "XID",
                      ksuid: "KSUID",
                      datetime: "ISO datetime",
                      date: "ISO date",
                      time: "ISO time",
                      duration: "ISO duration",
                      ipv4: "IPv4 address",
                      ipv6: "IPv6 address",
                      mac: "MAC address",
                      cidrv4: "IPv4 range",
                      cidrv6: "IPv6 range",
                      base64: "base64-encoded string",
                      base64url: "base64url-encoded string",
                      json_string: "JSON string",
                      e164: "E.164 number",
                      currency_code: "currency code",
                      credit_card: "credit card number",
                      iban: "IBAN",
                      jwt: "JWT",
                      template_literal: "input",
                    },
                    r = { nan: "NaN" };
                  function n(e, t) {
                    return "number" !== e ||
                      "number" != typeof t ||
                      Number.isFinite(t)
                      ? (r[e] ?? e)
                      : String(t);
                  }
                  return (r) => {
                    switch (r.code) {
                      case "invalid_type": {
                        let e = n(r.expected),
                          t = n(
                            (function (e) {
                              let t = typeof e;
                              switch (t) {
                                case "number":
                                  return Number.isNaN(e) ? "nan" : "number";
                                case "object":
                                  if (null === e) return "null";
                                  if (Array.isArray(e)) return "array";
                                  if (
                                    e &&
                                    Object.getPrototypeOf(e) !==
                                      Object.prototype &&
                                    "constructor" in e &&
                                    e.constructor
                                  )
                                    return e.constructor.name;
                              }
                              return t;
                            })(r.input),
                            r.input,
                          );
                        return `Invalid input: expected ${e}, received ${t}`;
                      }
                      case "invalid_value":
                        if (1 === r.values.length)
                          return `Invalid input: expected ${D(r.values[0])}`;
                        return `Invalid option: expected one of ${g(r.values, "|")}`;
                      case "too_big": {
                        let t = r.exact ? "exactly " : r.inclusive ? "<=" : "<",
                          n = e[r.origin] ?? null;
                        if (n)
                          return `Too big: expected ${r.origin ?? "value"} to have ${t}${r.maximum.toString()} ${n.unit ?? "elements"}`;
                        return `Too big: expected ${r.origin ?? "value"} to be ${t}${r.maximum.toString()}`;
                      }
                      case "too_small": {
                        let t = r.exact ? "exactly " : r.inclusive ? ">=" : ">",
                          n = e[r.origin] ?? null;
                        if (n)
                          return `Too small: expected ${r.origin} to have ${t}${r.minimum.toString()} ${n.unit}`;
                        return `Too small: expected ${r.origin} to be ${t}${r.minimum.toString()}`;
                      }
                      case "invalid_format":
                        if ("starts_with" === r.format)
                          return `Invalid string: must start with "${r.prefix}"`;
                        if ("ends_with" === r.format)
                          return `Invalid string: must end with "${r.suffix}"`;
                        if ("includes" === r.format)
                          return `Invalid string: must include "${r.includes}"`;
                        if ("regex" === r.format)
                          return `Invalid string: must match pattern ${r.pattern}`;
                        return `Invalid ${t[r.format] ?? r.format}`;
                      case "not_multiple_of":
                        return `Invalid number: must be a multiple of ${r.divisor}`;
                      case "unrecognized_keys":
                        return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${g(r.keys, ", ")}`;
                      case "invalid_key":
                        return `Invalid key in ${r.origin}`;
                      case "invalid_union":
                        if (
                          r.options &&
                          Array.isArray(r.options) &&
                          r.options.length > 0
                        ) {
                          let e = r.options.map((e) => `'${e}'`).join(" | ");
                          return `Invalid discriminator value. Expected ${e}`;
                        }
                        if (!1 === r.inclusive)
                          return "Invalid input: more than one option matched";
                        return "Invalid input";
                      case "invalid_element":
                        return `Invalid value in ${r.origin}`;
                      default:
                        return "Invalid input";
                    }
                  };
                })(),
              }),
            e2.init(e, t),
            (e.def = t),
            (e.type = t.type),
            e
          ),
          {
            check(...e) {
              let t = this.def;
              return this.clone(
                $(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...e.map((e) =>
                      "function" == typeof e
                        ? {
                            _zod: {
                              check: e,
                              def: { check: "custom" },
                              onattach: [],
                            },
                          }
                        : e,
                    ),
                  ],
                }),
                { parent: !0 },
              );
            },
            with(...e) {
              return this.check(...e);
            },
            clone(e, t) {
              return I(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return e.add(this, t), this;
            },
            refine(e, t) {
              return this.check(
                (function (e, t = {}) {
                  return new n0({
                    type: "custom",
                    check: "custom",
                    fn: e,
                    ...N(t),
                  });
                })(e, t),
              );
            },
            superRefine(e, t) {
              return this.check(
                (function (e, t) {
                  var r;
                  let n, i;
                  return (
                    (r = (t) => (
                      (t.addIssue = (e) => {
                        "string" == typeof e
                          ? t.issues.push(X(e, t.value, n._zod.def))
                          : (e.fatal && (e.continue = !1),
                            e.code ?? (e.code = "custom"),
                            "input" in e || (e.input = t.value),
                            e.inst ?? (e.inst = n),
                            e.continue ?? (e.continue = !n._zod.def.abort),
                            t.issues.push(X(e)));
                      }),
                      e(t.value, t)
                    )),
                    ((i = new eU({ check: "custom", ...N(t) }))._zod.check = r),
                    (n = i)
                  );
                })(e, t),
              );
            },
            overwrite(e) {
              return this.check(rn(e));
            },
            optional() {
              return nL(this);
            },
            exactOptional() {
              var e;
              return (e = this), new nB({ type: "optional", innerType: e });
            },
            nullable() {
              return nW(this);
            },
            nullish() {
              return nL(nW(this));
            },
            nonoptional(e) {
              var t;
              return (
                (t = this),
                new nH({ type: "nonoptional", innerType: t, ...N(e) })
              );
            },
            array() {
              return (function (e) {
                return new nj({ type: "array", element: e, ...N(void 0) });
              })(this);
            },
            or(e) {
              return new nN({
                type: "union",
                options: [this, e],
                ...N(void 0),
              });
            },
            and(e) {
              var t;
              return (
                (t = this), new nD({ type: "intersection", left: t, right: e })
              );
            },
            transform(e) {
              return nQ(this, new nU({ type: "transform", transform: e }));
            },
            default(e) {
              var t, r;
              return (
                (t = this),
                (r = e),
                new nV({
                  type: "default",
                  innerType: t,
                  get defaultValue() {
                    return "function" == typeof r ? r() : T(r);
                  },
                })
              );
            },
            prefault(e) {
              var t, r;
              return (
                (t = this),
                (r = e),
                new nK({
                  type: "prefault",
                  innerType: t,
                  get defaultValue() {
                    return "function" == typeof r ? r() : T(r);
                  },
                })
              );
            },
            catch(e) {
              return (function (e, t) {
                let r;
                return new nG({
                  type: "catch",
                  innerType: e,
                  catchValue:
                    "function" == typeof t
                      ? t
                      : (((r = () => t)["~constantCatch"] = !0), r),
                });
              })(this, e);
            },
            pipe(e) {
              return nQ(this, e);
            },
            readonly() {
              var e;
              return (e = this), new nY({ type: "readonly", innerType: e });
            },
            describe(e) {
              let t = this.clone();
              return t8.add(t, { description: e }), t;
            },
            meta(...e) {
              if (0 === e.length) return t8.get(this);
              let t = this.clone();
              return t8.add(t, e[0]), t;
            },
            isOptional() {
              return this.safeParse(void 0).success;
            },
            isNullable() {
              return this.safeParse(null).success;
            },
            apply(e, ...t) {
              return 0 === t.length ? e(this) : e(this, ...t);
            },
            get "~standard"() {
              return Q(
                this,
                "~standard",
                {
                  ...e9(this),
                  jsonSchema: {
                    input: rm(this, "input"),
                    output: rm(this, "output"),
                  },
                },
                !1,
              );
            },
            set "~standard"(e) {
              Q(this, "~standard", e);
            },
            parse: function e(t, r) {
              return rQ(this, t, r, { callee: e });
            },
            parseAsync: async function e(t, r) {
              return await rY(this, t, r, { callee: e });
            },
            safeParse(e, t) {
              return r0(this, e, t);
            },
            async safeParseAsync(e, t) {
              return r1(this, e, t);
            },
            get spa() {
              return this?.safeParseAsync;
            },
            set spa(e) {
              Q(this, "spa", e);
            },
            validate(e, t) {
              let r = this._zod.bag.validator;
              if (void 0 !== r) {
                if (r(e) !== rV) return !0;
                if (!0 === r.definite && void 0 === t) return !1;
              }
              return (function (e, t, r) {
                let n,
                  i = r
                    ? { ...r, async: !1, abortEarly: !0 }
                    : { async: !1, abortEarly: !0 },
                  s = e._zod.bag.fallbackRun;
                if (
                  (s
                    ? ((i[rK] = !0), (n = s({ value: t, issues: [] }, i)))
                    : (n = e._zod.run({ value: t, issues: [] }, i)),
                  n instanceof Promise)
                )
                  throw new es();
                return 0 === n.issues.length;
              })(this, e, t);
            },
            validateAsync(e, t) {
              return (async (e, t, r) => {
                let n = r
                    ? { ...r, async: !0, abortEarly: !0 }
                    : { async: !0, abortEarly: !0 },
                  i = e._zod.run({ value: t, issues: [] }, n);
                return (
                  i instanceof Promise && (i = await i), 0 === i.issues.length
                );
              })(this, e, t);
            },
            encode: function e(t, r) {
              return r2(this, t, r, { callee: e });
            },
            decode: function e(t, r) {
              return r4(this, t, r, { callee: e });
            },
            encodeAsync: async function e(t, r) {
              return await r9(this, t, r, { callee: e });
            },
            decodeAsync: async function e(t, r) {
              return await r7(this, t, r, { callee: e });
            },
            safeEncode(e, t) {
              return r3(this, e, t);
            },
            safeDecode(e, t) {
              return r6(this, e, t);
            },
            async safeEncodeAsync(e, t) {
              return r5(this, e, t);
            },
            async safeDecodeAsync(e, t) {
              return r8(this, e, t);
            },
            toJSONSchema(e) {
              return (
                (e, t = {}) =>
                (r) => {
                  let n = rs({ ...r, processors: t });
                  return ra(e, n), rc(n, e), rp(n, e);
                }
              )(
                this,
                {},
              )(e);
            },
            get description() {
              return t8.get(this)?.description;
            },
            get _def() {
              return this._zod.def;
            },
          },
        ),
        nr = ei(
          "_ZodString",
          (e, t) => {
            e7.init(e, t),
              nt.init(e, t),
              (e._zod.processJSONSchema = (t, r, n) =>
                ((e, t, r) => {
                  r.type = "string";
                  let {
                    minimum: n,
                    maximum: i,
                    format: s,
                    patterns: o,
                    contentEncoding: a,
                    laxFormat: u,
                  } = rE(e);
                  if (
                    ("number" == typeof n && (r.minLength = n),
                    "number" == typeof i && (r.maxLength = i),
                    s &&
                      ((r.format = rS[s] ?? s),
                      "" === r.format && delete r.format,
                      ("time" === s || u) && delete r.format),
                    a && (r.contentEncoding = a),
                    o && o.size > 0)
                  ) {
                    let e = [...o].map(rP);
                    1 === e.length
                      ? (r.pattern = e[0].source)
                      : e.length > 1 &&
                        (r.allOf = [
                          ...e.map((e) => ({
                            ...("draft-07" === t.target ||
                            "draft-04" === t.target ||
                            "openapi-3.0" === t.target
                              ? { type: "string" }
                              : {}),
                            pattern: e.source,
                          })),
                        ]);
                  }
                })(e, t, r));
          },
          (function (e, t) {
            for (let r in e) {
              let n = e[r];
              Object.defineProperty(t, r, {
                configurable: !0,
                enumerable: !0,
                get() {
                  return Q(this, r, n(this));
                },
                set(e) {
                  Q(this, r, e);
                },
              });
            }
            return t;
          })(
            {
              format: (e) => rE(e).format ?? null,
              minLength: (e) => rE(e).minimum ?? null,
              maxLength: (e) => rE(e).maximum ?? null,
            },
            {
              regex(...e) {
                return this.check(
                  (function (e, t) {
                    return new eV({
                      check: "string_format",
                      format: "regex",
                      ...N(t),
                      pattern: e,
                    });
                  })(...e),
                );
              },
              includes(...e) {
                return this.check(
                  (function (e, t) {
                    return new eG({
                      check: "string_format",
                      format: "includes",
                      ...N(t),
                      includes: e,
                    });
                  })(...e),
                );
              },
              startsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new eX({
                      check: "string_format",
                      format: "starts_with",
                      ...N(t),
                      prefix: e,
                    });
                  })(...e),
                );
              },
              endsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new eQ({
                      check: "string_format",
                      format: "ends_with",
                      ...N(t),
                      suffix: e,
                    });
                  })(...e),
                );
              },
              min(...e) {
                return this.check(rt(...e));
              },
              max(...e) {
                return this.check(re(...e));
              },
              length(...e) {
                return this.check(rr(...e));
              },
              nonempty(...e) {
                return this.check(rt(1, ...e));
              },
              lowercase(e) {
                return this.check(
                  new eK({
                    check: "string_format",
                    format: "lowercase",
                    ...N(e),
                  }),
                );
              },
              uppercase(e) {
                return this.check(
                  new eH({
                    check: "string_format",
                    format: "uppercase",
                    ...N(e),
                  }),
                );
              },
              trim() {
                return this.check(rn((e) => e.trim()));
              },
              normalize(...e) {
                return this.check(
                  (function (e) {
                    return rn((t) => t.normalize(e));
                  })(...e),
                );
              },
              toLowerCase() {
                return this.check(rn((e) => e.toLowerCase()));
              },
              toUpperCase() {
                return this.check(rn((e) => e.toUpperCase()));
              },
              slugify() {
                return this.check(
                  rn((e) =>
                    e
                      .toLowerCase()
                      .trim()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/[\s_-]+/g, "-")
                      .replace(/^-+|-+$/g, ""),
                  ),
                );
              },
            },
          ),
        ),
        nn = ei(
          "ZodString",
          (e, t) => {
            e7.init(e, t), nr.init(e, t);
          },
          {
            email(e) {
              return this.check(
                new nl({
                  type: "string",
                  format: "email",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            url(e) {
              return this.check(
                new nh({
                  type: "string",
                  format: "url",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            jwt(e) {
              return this.check(
                new nS({
                  type: "string",
                  format: "jwt",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            emoji(e) {
              return this.check(
                new np({
                  type: "string",
                  format: "emoji",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            guid(e) {
              return this.check(
                new nf({
                  type: "string",
                  format: "guid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            uuid(e) {
              return this.check(
                new nd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            uuidv4(e) {
              return this.check(
                new nd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v4",
                  ...N(e),
                }),
              );
            },
            uuidv6(e) {
              return this.check(
                new nd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v6",
                  ...N(e),
                }),
              );
            },
            uuidv7(e) {
              return this.check(
                new nd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v7",
                  ...N(e),
                }),
              );
            },
            nanoid(e) {
              return this.check(
                new nm({
                  type: "string",
                  format: "nanoid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cuid(e) {
              return this.check(
                new ng({
                  type: "string",
                  format: "cuid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cuid2(e) {
              return this.check(
                new nv({
                  type: "string",
                  format: "cuid2",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ulid(e) {
              return this.check(
                new ny({
                  type: "string",
                  format: "ulid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            base64(e) {
              return this.check(
                new nx({
                  type: "string",
                  format: "base64",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            base64url(e) {
              return this.check(
                new n$({
                  type: "string",
                  format: "base64url",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            xid(e) {
              return this.check(
                new nw({
                  type: "string",
                  format: "xid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ksuid(e) {
              return this.check(
                new n_({
                  type: "string",
                  format: "ksuid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ipv4(e) {
              return this.check(
                new nb({
                  type: "string",
                  format: "ipv4",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ipv6(e) {
              return this.check(
                new nz({
                  type: "string",
                  format: "ipv6",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cidrv4(e) {
              return this.check(
                new nk({
                  type: "string",
                  format: "cidrv4",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cidrv6(e) {
              return this.check(
                new nO({
                  type: "string",
                  format: "cidrv6",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            e164(e) {
              return this.check(
                new nE({
                  type: "string",
                  format: "e164",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            datetime(e) {
              return this.check(
                new no({
                  type: "string",
                  format: "datetime",
                  check: "string_format",
                  offset: !1,
                  local: !1,
                  precision: null,
                  ...N(e),
                }),
              );
            },
            date(e) {
              return this.check(
                new na({
                  type: "string",
                  format: "date",
                  check: "string_format",
                  ...N(e),
                }),
              );
            },
            time(e) {
              return this.check(
                new nu({
                  type: "string",
                  format: "time",
                  check: "string_format",
                  precision: null,
                  ...N(e),
                }),
              );
            },
            duration(e) {
              return this.check(
                new nc({
                  type: "string",
                  format: "duration",
                  check: "string_format",
                  ...N(e),
                }),
              );
            },
          },
        );
      function ni(e) {
        var t;
        return new nn(
          ((t = { type: "string", ...N(e) }).checks &&
            (t.checks = [...t.checks]),
          t),
        );
      }
      let ns = ei("ZodStringFormat", (e, t) => {
          e3.init(e, t), nr.init(e, t);
        }),
        no = ei("ZodISODateTime", (e, t) => {
          tf.init(e, t), ns.init(e, t);
        }),
        na = ei("ZodISODate", (e, t) => {
          td.init(e, t), ns.init(e, t);
        }),
        nu = ei("ZodISOTime", (e, t) => {
          th.init(e, t), ns.init(e, t);
        }),
        nc = ei("ZodISODuration", (e, t) => {
          tp.init(e, t), ns.init(e, t);
        }),
        nl = ei("ZodEmail", (e, t) => {
          e8.init(e, t), ns.init(e, t);
        }),
        nf = ei("ZodGUID", (e, t) => {
          e6.init(e, t), ns.init(e, t);
        }),
        nd = ei("ZodUUID", (e, t) => {
          e5.init(e, t), ns.init(e, t);
        }),
        nh = ei("ZodURL", (e, t) => {
          tn.init(e, t), ns.init(e, t);
        }),
        np = ei("ZodEmoji", (e, t) => {
          ti.init(e, t), ns.init(e, t);
        }),
        nm = ei("ZodNanoID", (e, t) => {
          ts.init(e, t), ns.init(e, t);
        }),
        ng = ei("ZodCUID", (e, t) => {
          to.init(e, t), ns.init(e, t);
        }),
        nv = ei("ZodCUID2", (e, t) => {
          ta.init(e, t), ns.init(e, t);
        }),
        ny = ei("ZodULID", (e, t) => {
          tu.init(e, t), ns.init(e, t);
        }),
        nw = ei("ZodXID", (e, t) => {
          tc.init(e, t), ns.init(e, t);
        }),
        n_ = ei("ZodKSUID", (e, t) => {
          tl.init(e, t), ns.init(e, t);
        }),
        nb = ei("ZodIPv4", (e, t) => {
          tm.init(e, t), ns.init(e, t);
        }),
        nz = ei("ZodIPv6", (e, t) => {
          ty.init(e, t), ns.init(e, t);
        }),
        nk = ei("ZodCIDRv4", (e, t) => {
          tw.init(e, t), ns.init(e, t);
        }),
        nO = ei("ZodCIDRv6", (e, t) => {
          t_.init(e, t), ns.init(e, t);
        }),
        nx = ei("ZodBase64", (e, t) => {
          tk.init(e, t), ns.init(e, t);
        }),
        n$ = ei("ZodBase64URL", (e, t) => {
          tx.init(e, t), ns.init(e, t);
        }),
        nE = ei("ZodE164", (e, t) => {
          t$.init(e, t), ns.init(e, t);
        }),
        nS = ei("ZodJWT", (e, t) => {
          tE.init(e, t), ns.init(e, t);
        }),
        nA = ei("ZodUnknown", (e, t) => {
          tS.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (e, t, r) => void 0);
        });
      function nP() {
        return new nA({ type: "unknown" });
      }
      let nT = ei("ZodNever", (e, t) => {
          tA.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (e, t, r) => {
              t.not = {};
            });
        }),
        nj = ei(
          "ZodArray",
          (e, t) => {
            ne(),
              tj.init(e, t),
              nt.init(e, t),
              (e._zod.processJSONSchema = (t, r, n) =>
                ((e, t, r, n) => {
                  let i = e._zod.def,
                    { minimum: s, maximum: o } = rE(e);
                  "number" == typeof s && (r.minItems = s),
                    "number" == typeof o && (r.maxItems = o),
                    (r.type = "array"),
                    (r.items = ra(i.element, t, {
                      ...n,
                      path: [...n.path, "items"],
                    }));
                })(e, t, r, n)),
              (e.element = t.element);
          },
          {
            min(e, t) {
              return this.check(rt(e, t));
            },
            nonempty(e) {
              return this.check(rt(1, e));
            },
            max(e, t) {
              return this.check(re(e, t));
            },
            length(e, t) {
              return this.check(rr(e, t));
            },
            unwrap() {
              return this.element;
            },
          },
        ),
        nZ = ei(
          "ZodObject",
          (e, t) => {
            var r;
            let n, i;
            ne(),
              tM.init(e, t),
              nt.init(e, t),
              (e._zod.processJSONSchema = (t, r, n) =>
                ((e, t, r, n) => {
                  let i = e._zod.def,
                    s = i.shape;
                  if (
                    Object.getOwnPropertySymbols(s).length &&
                    ro(
                      e,
                      t,
                      r,
                      n,
                      "Symbol keys cannot be represented in JSON Schema",
                    )
                  )
                    return;
                  for (let e in ((r.type = "object"), (r.properties = {}), s))
                    _(
                      r.properties,
                      e,
                      ra(s[e], t, { ...n, path: [...n.path, "properties", e] }),
                    );
                  let o = [];
                  for (let e of Object.keys(s)) {
                    let r = i.shape[e];
                    ("input" === t.io
                      ? void 0 === rT(r)
                      : void 0 === r._zod.optout) && o.push(e);
                  }
                  o.length > 0 && (r.required = o),
                    i.catchall?._zod.def.type === "never"
                      ? (r.additionalProperties = !1)
                      : i.catchall
                        ? i.catchall &&
                          (r.additionalProperties = ra(i.catchall, t, {
                            ...n,
                            path: [...n.path, "additionalProperties"],
                          }))
                        : "output" === t.io && (r.additionalProperties = !1);
                })(e, t, r, n)),
              (r = "shape"),
              (i = r in (n = Object.getPrototypeOf(e)) ? void 0 : n) &&
                Object.defineProperty(i, r, {
                  configurable: !0,
                  get() {
                    let e = {
                      configurable: !0,
                      writable: !0,
                      enumerable: !1,
                      value: void 0,
                    };
                    return (
                      Object.defineProperty(this, r, e),
                      (e.value = ((e) => e._zod.def.shape)(this)),
                      Object.defineProperty(this, r, e),
                      e.value
                    );
                  },
                  set(e) {
                    Object.defineProperty(this, r, {
                      configurable: !0,
                      writable: !0,
                      enumerable: !1,
                      value: e,
                    });
                  },
                });
          },
          {
            keyof() {
              return nC(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone($(this._zod.def, { catchall: e }));
            },
            passthrough() {
              return this.clone($(this._zod.def, { catchall: nP() }));
            },
            loose() {
              return this.clone($(this._zod.def, { catchall: nP() }));
            },
            strict() {
              return this.clone(
                $(this._zod.def, {
                  catchall: new nT({ type: "never", ...N(void 0) }),
                }),
              );
            },
            strip() {
              return this.clone($(this._zod.def, { catchall: void 0 }));
            },
            extend(e) {
              if (!P(e))
                throw Error("Invalid input to extend: expected a plain object");
              let t = this._zod.def.checks;
              if (t && t.length > 0) {
                let t = z(this);
                for (let r of Reflect.ownKeys(e))
                  if (void 0 !== Object.getOwnPropertyDescriptor(t, r))
                    throw Error(
                      "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                    );
              }
              return I(this, $(this._zod.def, { shape: C(this, e) }));
            },
            safeExtend(e) {
              if (!P(e))
                throw Error(
                  "Invalid input to safeExtend: expected a plain object",
                );
              return I(this, $(this._zod.def, { shape: C(this, e) }));
            },
            merge(e) {
              if (!e?._zod?.def)
                throw Error(
                  "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
                );
              if (this._zod.def.checks?.length)
                throw Error(
                  ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
                );
              let t = {};
              return (
                x(t, this, Reflect.ownKeys(z(this))),
                x(t, e, Reflect.ownKeys(z(e))),
                I(
                  this,
                  $(this._zod.def, {
                    shape: t,
                    get catchall() {
                      return e._zod.def.catchall;
                    },
                    checks: e._zod.def.checks ?? [],
                  }),
                )
              );
            },
            pick(e) {
              return (function (e, t) {
                let r = e._zod.def,
                  n = r.checks;
                if (n && n.length > 0)
                  throw Error(
                    ".pick() cannot be used on object schemas containing refinements",
                  );
                let i = {};
                return x(i, e, F(e, t)), I(e, $(r, { shape: i, checks: [] }));
              })(this, e);
            },
            omit(e) {
              return (function (e, t) {
                let r = e._zod.def,
                  n = r.checks;
                if (n && n.length > 0)
                  throw Error(
                    ".omit() cannot be used on object schemas containing refinements",
                  );
                let i = new Set(F(e, t)),
                  s = {};
                return (
                  x(
                    s,
                    e,
                    Reflect.ownKeys(z(e)).filter((e) => !i.has(e)),
                  ),
                  I(e, $(r, { shape: s, checks: [] }))
                );
              })(this, e);
            },
            partial(...e) {
              return U(nJ, this, e[0]);
            },
            exactPartial(...e) {
              return U(nB, this, e[0], "exactPartial");
            },
            required(...e) {
              var t;
              let r, n;
              return (
                (r = (t = e[0]) ? new Set(F(this, t)) : void 0),
                x((n = {}), this, Reflect.ownKeys(z(this)), (e, t) =>
                  r && !r.has(t)
                    ? e
                    : new nH({ type: "nonoptional", innerType: e }),
                ),
                I(this, $(this._zod.def, { shape: n }))
              );
            },
          },
        );
      function nI(e, t) {
        return new nZ({ type: "object", shape: e ?? {}, ...N(t) });
      }
      let nN = ei("ZodUnion", (e, t) => {
          tC.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, s, o;
              return (
                (s = !1 === (i = e._zod.def).inclusive),
                (o = i.options.map((e, r) =>
                  ra(e, t, {
                    ...n,
                    path: [...n.path, s ? "oneOf" : "anyOf", r],
                  }),
                )),
                void (s ? (r.oneOf = o) : (r.anyOf = o))
              );
            }),
            (e.options = t.options);
        }),
        nD = ei("ZodIntersection", (e, t) => {
          tU.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, s, o, a, u;
              return (
                (s = ra((i = e._zod.def).left, t, {
                  ...n,
                  path: [...n.path, "allOf", 0],
                })),
                (o = ra(i.right, t, { ...n, path: [...n.path, "allOf", 1] })),
                void ((r.allOf = u =
                  [
                    ...((a = (e) =>
                      "allOf" in e && 1 === Object.keys(e).length)(s)
                      ? s.allOf
                      : [s]),
                    ...(a(o) ? o.allOf : [o]),
                  ]),
                t.intersections.push(u))
              );
            });
        }),
        nR = ei("ZodRecord", (e, t) => {
          ne(),
            tL.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) =>
              ((e, t, r, n) => {
                let i = e._zod.def;
                r.type = "object";
                let s = i.keyType,
                  o = rE(s).patterns;
                if ("loose" === i.mode && o && o.size > 0) {
                  let e = ra(i.valueType, t, {
                    ...n,
                    path: [...n.path, "patternProperties", "*"],
                  });
                  for (let t of ((r.patternProperties = {}), o))
                    _(r.patternProperties, rP(t).source, e);
                } else {
                  if ("draft-07" === t.target || "draft-2020-12" === t.target) {
                    r.propertyNames = ra(i.keyType, t, {
                      ...n,
                      path: [...n.path, "propertyNames"],
                    });
                    let s = rj.get(t);
                    s ||
                      ((s = []),
                      rj.set(t, s),
                      t.deferred.push(() =>
                        (function (e) {
                          let t = new Map();
                          for (let r of e.seen.values())
                            r.def && !t.has(r.schema) && t.set(r.schema, r);
                          let r = new Map();
                          for (let n of rj.get(e) ?? []) {
                            let i = e.seen.get(n),
                              s = (i?.def ?? i?.schema)?.propertyNames;
                            if (!s || !0 === s || r.has(s)) continue;
                            let o = (function e(t, r, n) {
                              if (r.$ref) {
                                if (n.has(r)) return r;
                                n.add(r);
                                let i = t.get(r)?.def;
                                if (!i) return r;
                                let s = e(t, i, n);
                                return s === i ? r : s;
                              }
                              for (let i of ["anyOf", "oneOf"]) {
                                let s = r[i];
                                if (!Array.isArray(s)) continue;
                                let o = s.map((r) => e(t, r, n));
                                o.some((e, t) => e !== s[t]) &&
                                  (r = { ...r, [i]: o });
                              }
                              let i = Array.isArray(r.type) ? r.type : [r.type],
                                s =
                                  !i.includes("string") &&
                                  i.some(
                                    (e) => "number" === e || "integer" === e,
                                  ),
                                o =
                                  r.enum ??
                                  (void 0 !== r.const ? [r.const] : void 0);
                              if (!s && !o?.some((e) => "number" == typeof e))
                                return r;
                              let {
                                minimum: a,
                                maximum: u,
                                exclusiveMinimum: c,
                                exclusiveMaximum: l,
                                multipleOf: f,
                                format: d,
                                id: h,
                                ...p
                              } = r;
                              return (
                                p.enum
                                  ? (p.enum = p.enum.map((e) =>
                                      "number" == typeof e ? String(e) : e,
                                    ))
                                  : "number" == typeof p.const &&
                                    (p.const = String(p.const)),
                                s &&
                                  ((p.type = "string"),
                                  o ||
                                    (p.pattern = (
                                      i.includes("number") ? eM : eR
                                    ).source)),
                                p
                              );
                            })(t, s, new Set());
                            o !== s && r.set(s, o);
                          }
                          if (r.size)
                            for (let t of e.seen.values())
                              for (let e of [t.schema, t.def]) {
                                let t = e && r.get(e.propertyNames);
                                t && (e.propertyNames = t);
                              }
                        })(t),
                      )),
                      s.push(e);
                  }
                  r.additionalProperties = ra(i.valueType, t, {
                    ...n,
                    path: [...n.path, "additionalProperties"],
                  });
                }
                let a = s._zod.values,
                  u = "input" === t.io && void 0 !== rT(i.valueType);
                if (a && !i.partial && !u) {
                  let e = [...a].filter(
                    (e) => "string" == typeof e || "number" == typeof e,
                  );
                  e.length > 0 && (r.required = e.map(String));
                }
              })(e, t, r, n)),
            (e.keyType = t.keyType),
            (e.valueType = t.valueType);
        });
      function nM(e, t, r) {
        return new nR({
          type: "record",
          keyType: e,
          valueType: t,
          ...N(r),
          partial: !0,
        });
      }
      let nF = ei("ZodEnum", (e, t) => {
        tB.init(e, t),
          nt.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t) => {
              let r = m(e._zod.def.entries);
              if (0 === r.length) {
                t.not = {};
                return;
              }
              r.every((e) => "number" == typeof e) && (t.type = "number"),
                r.every((e) => "string" == typeof e) && (t.type = "string"),
                (t.enum = r);
            })(e, r)),
          (e.enum = t.entries),
          (e.options = [...e._zod.values]);
        let r = new Set(Object.keys(t.entries));
        (e.extract = (e, n) => {
          let i = {};
          for (let n of e)
            if (r.has(n)) i[n] = t.entries[n];
            else throw Error(`Key ${n} not found in enum`);
          return new nF({ ...t, checks: [], ...N(n), entries: i });
        }),
          (e.exclude = (e, n) => {
            let i = { ...t.entries };
            for (let t of e)
              if (r.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new nF({ ...t, checks: [], ...N(n), entries: i });
          });
      });
      function nC(e, t) {
        return new nF({
          type: "enum",
          entries: Array.isArray(e)
            ? Object.fromEntries(e.map((e) => [e, e]))
            : e,
          ...N(t),
        });
      }
      let nU = ei("ZodTransform", (e, t) => {
          ne(),
            tq.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              ro(e, t, r, n, "Transforms cannot be represented in JSON Schema");
            }),
            (e._zod.parse = (r, n) => {
              if ("backward" === n.direction) throw new eo(e.constructor.name);
              r.addIssue = (n) => {
                "string" == typeof n
                  ? r.issues.push(X(n, r.value, t))
                  : (n.fatal && (n.continue = !1),
                    n.code ?? (n.code = "custom"),
                    "input" in n || (n.input = r.value),
                    n.inst ?? (n.inst = e),
                    r.issues.push(X(n)));
              };
              let i = t.transform(r.value, r);
              return i instanceof Promise
                ? i.then((e) => ((r.value = e), r))
                : ((r.value = i), r);
            });
        }),
        nJ = ei("ZodOptional", (e, t) => {
          tV.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => rN(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function nL(e) {
        return new nJ({ type: "optional", innerType: e });
      }
      let nB = ei("ZodExactOptional", (e, t) => {
          tK.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => rN(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nq = ei("ZodNullable", (e, t) => {
          tH.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, s, o;
              return (
                (s = ra((i = e._zod.def).innerType, t, n)),
                (o = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                  ? ((o.ref = i.innerType), (r.nullable = !0))
                  : (r.anyOf = [s, { type: "null" }]))
              );
            }),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function nW(e) {
        return new nq({ type: "nullable", innerType: e });
      }
      let nV = ei("ZodDefault", (e, t) => {
          tG.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, s;
              return (
                ra((i = e._zod.def).innerType, t, n),
                (t.seen.get(e).ref = i.innerType),
                void (
                  (s = rI(i.defaultValue, e, t, r, n)) !== rZ && (r.default = s)
                )
              );
            }),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap);
        }),
        nK = ei("ZodPrefault", (e, t) => {
          tQ.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) =>
              ((e, t, r, n) => {
                let i = e._zod.def;
                if (
                  (ra(i.innerType, t, n),
                  (t.seen.get(e).ref = i.innerType),
                  "input" !== t.io)
                )
                  return;
                let s = rI(i.defaultValue, e, t, r, n);
                s !== rZ && (r._prefault = s);
              })(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nH = ei("ZodNonOptional", (e, t) => {
          tY.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i;
              ra((i = e._zod.def).innerType, t, n),
                (t.seen.get(e).ref = i.innerType);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nG = ei("ZodCatch", (e, t) => {
          t2.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) =>
              ((e, t, r, n) => {
                let i,
                  s = e._zod.def;
                ra(s.innerType, t, n), (t.seen.get(e).ref = s.innerType);
                try {
                  i = s.catchValue(void 0);
                } catch {
                  ro(
                    e,
                    t,
                    r,
                    n,
                    "Dynamic catch values are not supported in JSON Schema",
                  );
                  return;
                }
                r.default = i;
              })(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap);
        }),
        nX = ei("ZodPipe", (e, t) => {
          t4.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, s, o;
              return (
                (s = (i = e._zod.def).in._zod.traits.has("$ZodTransform")),
                void (ra(
                  (o = "input" === t.io ? (s ? i.out : i.in) : i.out),
                  t,
                  n,
                ),
                (t.seen.get(e).ref = o))
              );
            }),
            (e.in = t.in),
            (e.out = t.out);
        });
      function nQ(e, t) {
        return new nX({ type: "pipe", in: e, out: t });
      }
      let nY = ei("ZodReadonly", (e, t) => {
          t7.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i;
              ra((i = e._zod.def).innerType, t, n),
                (t.seen.get(e).ref = i.innerType),
                (r.readOnly = !0);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        n0 = ei("ZodCustom", (e, t) => {
          t6.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              ro(
                e,
                t,
                r,
                n,
                "Custom types cannot be represented in JSON Schema",
              );
            });
        });
    },
  },
]);
//# sourceMappingURL=527029.ca7dcba2cd153b4d.js.map
