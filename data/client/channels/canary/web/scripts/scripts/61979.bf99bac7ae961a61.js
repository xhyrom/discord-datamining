(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [61979],
  {
    653922(e, r, t) {
      "use strict";
      var a = t(998280),
        n = t(531651),
        o = t(618027);
      t.d(
        r,
        {},
        {
          A: function (e, r) {
            (0, o.A)(2, arguments);
            var t = (0, a.A)(r);
            return (0, n.A)(e, 1e3 * t);
          },
        },
      );
    },
    416248(e, r, t) {
      var a = t(689582),
        n = t(723891);
      e.exports = function (e) {
        return n(a(e));
      };
    },
    963100(e, r, t) {
      var a = t(20624),
        n = t(232520),
        o = t(186320),
        c = t(24011),
        s = t(26352),
        i = t(9556);
      e.exports = function (e, r, t, u) {
        var f = -1,
          l = n,
          p = !0,
          h = e.length,
          y = [],
          d = r.length;
        if (!h) return y;
        t && (r = c(r, s(t))),
          u
            ? ((l = o), (p = !1))
            : r.length >= 200 && ((l = i), (p = !1), (r = new a(r)));
        e: for (; ++f < h; ) {
          var v = e[f],
            g = null == t ? v : t(v);
          if (((v = u || 0 !== v ? v : 0), p && g == g)) {
            for (var w = d; w--; ) if (r[w] === g) continue e;
            y.push(v);
          } else l(r, g, u) || y.push(v);
        }
        return y;
      };
    },
    58902(e, r, t) {
      var a = t(723891),
        n = t(731221);
      e.exports = function (e) {
        return a(n(e));
      };
    },
    10837(e, r, t) {
      var a = t(24011);
      e.exports = function (e, r) {
        return a(r, function (r) {
          return e[r];
        });
      };
    },
    723891(e, r, t) {
      var a = t(515304);
      e.exports = function (e, r) {
        var t = -1,
          n = e.length,
          o = n - 1;
        for (r = void 0 === r ? n : r; ++t < r; ) {
          var c = a(t, o),
            s = e[c];
          (e[c] = e[t]), (e[t] = s);
        }
        return (e.length = r), e;
      };
    },
    649852(e, r, t) {
      var a = t(980320),
        n = t(403819),
        o = t(867167),
        c = Math.max,
        s = Math.min;
      e.exports = function (e, r, t) {
        var i,
          u,
          f,
          l,
          p,
          h,
          y = 0,
          d = !1,
          v = !1,
          g = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function w(r) {
          var t = i,
            a = u;
          return (i = u = void 0), (y = r), (l = e.apply(a, t));
        }
        function b(e) {
          var t = e - h,
            a = e - y;
          return void 0 === h || t >= r || t < 0 || (v && a >= f);
        }
        function m() {
          var e,
            t,
            a,
            o = n();
          if (b(o)) return x(o);
          p = setTimeout(
            m,
            ((e = o - h), (t = o - y), (a = r - e), v ? s(a, f - t) : a),
          );
        }
        function x(e) {
          return ((p = void 0), g && i) ? w(e) : ((i = u = void 0), l);
        }
        function k() {
          var e,
            t = n(),
            a = b(t);
          if (((i = arguments), (u = this), (h = t), a)) {
            if (void 0 === p)
              return (y = e = h), (p = setTimeout(m, r)), d ? w(e) : l;
            if (v) return clearTimeout(p), (p = setTimeout(m, r)), w(h);
          }
          return void 0 === p && (p = setTimeout(m, r)), l;
        }
        return (
          (r = o(r) || 0),
          a(t) &&
            ((d = !!t.leading),
            (f = (v = "maxWait" in t) ? c(o(t.maxWait) || 0, r) : f),
            (g = "trailing" in t ? !!t.trailing : g)),
          (k.cancel = function () {
            void 0 !== p && clearTimeout(p), (y = 0), (i = h = u = p = void 0);
          }),
          (k.flush = function () {
            return void 0 === p ? l : x(n());
          }),
          k
        );
      };
    },
    466204(e, r, t) {
      var a = t(963100),
        n = t(374421),
        o = t(440909),
        c = t(797674);
      e.exports = o(function (e, r) {
        return c(e) ? a(e, n(r, 1, c, !0)) : [];
      });
    },
    797674(e, r, t) {
      var a = t(667349),
        n = t(326487);
      e.exports = function (e) {
        return n(e) && a(e);
      };
    },
    199510(e, r, t) {
      var a = t(416248),
        n = t(58902),
        o = t(377482);
      e.exports = function (e) {
        return (o(e) ? a : n)(e);
      };
    },
    64015(e, r, t) {
      var a = t(649852),
        n = t(980320);
      e.exports = function (e, r, t) {
        var o = !0,
          c = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          n(t) &&
            ((o = "leading" in t ? !!t.leading : o),
            (c = "trailing" in t ? !!t.trailing : c)),
          a(e, r, { leading: o, maxWait: r, trailing: c })
        );
      };
    },
    731221(e, r, t) {
      var a = t(10837),
        n = t(473951);
      e.exports = function (e) {
        return null == e ? [] : a(e, n(e));
      };
    },
    41575(e, r, t) {
      "use strict";
      var a = t(257943),
        n = t(4940),
        o = t(231977);
      e.exports = function (e, r, t) {
        a ? n.f(e, r, o(0, t)) : (e[r] = t);
      };
    },
    150088(e, r, t) {
      "use strict";
      var a,
        n,
        o,
        c,
        s = t(860511),
        i = t(53132),
        u = t(772805),
        f = s.structuredClone,
        l = s.ArrayBuffer,
        p = s.MessageChannel,
        h = !1;
      if (u)
        h = function (e) {
          f(e, { transfer: [e] });
        };
      else if (l)
        try {
          !p && (a = i("worker_threads")) && (p = a.MessageChannel),
            p &&
              ((n = new p()),
              (o = new l(2)),
              (c = function (e) {
                n.port1.postMessage(null, [e]);
              }),
              2 === o.byteLength && (c(o), 0 === o.byteLength && (h = c)));
        } catch (e) {}
      e.exports = h;
    },
    604400(e, r, t) {
      "use strict";
      var a = t(503628),
        n = t(231977);
      e.exports = !a(function () {
        var e = Error("a");
        return (
          !("stack" in e) ||
          (Object.defineProperty(e, "stack", n(1, 7)), 7 !== e.stack)
        );
      });
    },
    53132(e, r, t) {
      "use strict";
      var a = t(860511),
        n = t(13570);
      e.exports = function (e) {
        if (n) {
          try {
            return a.process.getBuiltinModule(e);
          } catch (e) {}
          try {
            return Function('return require("' + e + '")')();
          } catch (e) {}
        }
      };
    },
    331336(e, r, t) {
      "use strict";
      var a = t(324988),
        n = t(95959),
        o = t(652320),
        c = t(70670),
        s = t(380744)("iterator");
      e.exports = function (e) {
        if (!o(e)) return n(e, s) || n(e, "@@iterator") || c[a(e)];
      };
    },
    327036(e, r, t) {
      "use strict";
      var a = t(446474),
        n = t(514575),
        o = t(101968),
        c = t(406208),
        s = t(331336),
        i = TypeError;
      e.exports = function (e, r) {
        var t = arguments.length < 2 ? s(e) : r;
        if (n(t)) return o(a(t, e));
        throw new i(c(e) + " is not iterable");
      };
    },
    151860(e, r, t) {
      "use strict";
      var a = t(380744),
        n = t(70670),
        o = a("iterator"),
        c = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (n.Array === e || c[o] === e);
      };
    },
    43452(e, r, t) {
      "use strict";
      var a = t(410323),
        n = t(503628),
        o = t(339626),
        c = t(324988),
        s = t(230606),
        i = t(997159),
        u = function () {},
        f = s("Reflect", "construct"),
        l = /^\s*(?:class|function)\b/,
        p = a(l.exec),
        h = !l.test(u),
        y = function (e) {
          if (!o(e)) return !1;
          try {
            return f(u, [], e), !0;
          } catch (e) {
            return !1;
          }
        },
        d = function (e) {
          if (!o(e)) return !1;
          switch (c(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return h || !!p(l, i(e));
          } catch (e) {
            return !0;
          }
        };
      (d.sham = !0),
        (e.exports =
          !f ||
          n(function () {
            var e;
            return (
              y(y.call) ||
              !y(Object) ||
              !y(function () {
                e = !0;
              }) ||
              e
            );
          })
            ? d
            : y);
    },
    639438(e, r, t) {
      "use strict";
      var a = t(446474);
      e.exports = function (e, r, t) {
        for (
          var n, o, c = t ? e : e.iterator, s = e.next;
          !(n = a(s, c)).done;

        )
          if (void 0 !== (o = r(n.value))) return o;
      };
    },
    2871(e, r, t) {
      "use strict";
      var a = t(221015),
        n = t(446474),
        o = t(101968),
        c = t(406208),
        s = t(151860),
        i = t(503199),
        u = t(524152),
        f = t(327036),
        l = t(331336),
        p = t(350714),
        h = TypeError,
        y = function (e, r) {
          (this.stopped = e), (this.result = r);
        },
        d = y.prototype;
      e.exports = function (e, r, t) {
        var v,
          g,
          w,
          b,
          m,
          x,
          k,
          E = t && t.that,
          A = !!(t && t.AS_ENTRIES),
          M = !!(t && t.IS_RECORD),
          O = !!(t && t.IS_ITERATOR),
          S = !!(t && t.INTERRUPTED),
          D = a(r, E),
          T = function (e) {
            return v && p(v, "normal", e), new y(!0, e);
          },
          R = function (e) {
            return A
              ? (o(e), S ? D(e[0], e[1], T) : D(e[0], e[1]))
              : S
                ? D(e, T)
                : D(e);
          };
        if (M) v = e.iterator;
        else if (O) v = e;
        else {
          if (!(g = l(e))) throw new h(c(e) + " is not iterable");
          if (s(g)) {
            for (w = 0, b = i(e); b > w; w++)
              if ((m = R(e[w])) && u(d, m)) return m;
            return new y(!1);
          }
          v = f(e, g);
        }
        for (x = M ? e.next : v.next; !(k = n(x, v)).done; ) {
          try {
            m = R(k.value);
          } catch (e) {
            p(v, "throw", e);
          }
          if ("object" == typeof m && m && u(d, m)) return m;
        }
        return new y(!1);
      };
    },
    350714(e, r, t) {
      "use strict";
      var a = t(446474),
        n = t(101968),
        o = t(95959);
      e.exports = function (e, r, t) {
        var c, s;
        n(e);
        try {
          if (!(c = o(e, "return"))) {
            if ("throw" === r) throw t;
            return t;
          }
          c = a(c, e);
        } catch (e) {
          (s = !0), (c = e);
        }
        if ("throw" === r) throw t;
        if (s) throw c;
        return n(c), t;
      };
    },
    70670(e) {
      "use strict";
      e.exports = {};
    },
    19319(e, r, t) {
      "use strict";
      var a = t(410323),
        n = Map.prototype;
      e.exports = {
        Map: Map,
        set: a(n.set),
        get: a(n.get),
        has: a(n.has),
        remove: a(n.delete),
        proto: n,
      };
    },
    565079(e, r, t) {
      "use strict";
      var a = t(446474),
        n = t(210140),
        o = t(524152),
        c = t(693510),
        s = RegExp.prototype;
      e.exports = function (e) {
        var r = e.flags;
        return !(void 0 === r && !("flags" in s) && !n(e, "flags") && o(s, e))
          ? r
          : a(c, e);
      };
    },
    139257(e, r, t) {
      "use strict";
      var a = t(410323),
        n = Set.prototype;
      e.exports = {
        Set: Set,
        add: a(n.add),
        has: a(n.has),
        remove: a(n.delete),
        proto: n,
      };
    },
    373458(e, r, t) {
      "use strict";
      var a = t(410323),
        n = t(639438),
        o = t(139257),
        c = o.Set,
        s = o.proto,
        i = a(s.forEach),
        u = a(s.keys),
        f = u(new c()).next;
      e.exports = function (e, r, t) {
        return t ? n({ iterator: u(e), next: f }, r) : i(e, r);
      };
    },
    772805(e, r, t) {
      "use strict";
      var a = t(860511),
        n = t(503628),
        o = t(123166),
        c = t(676528),
        s = a.structuredClone;
      e.exports =
        !!s &&
        !n(function () {
          if (
            ("DENO" === c && o > 92) ||
            ("NODE" === c && o > 94) ||
            ("BROWSER" === c && o > 97)
          )
            return !1;
          var e = new ArrayBuffer(8),
            r = s(e, { transfer: [e] });
          return 0 !== e.byteLength || 8 !== r.byteLength;
        });
    },
    775859(e, r, t) {
      "use strict";
      var a = t(105712),
        n = t(557939),
        o = t(860511),
        c = t(230606),
        s = t(410323),
        i = t(503628),
        u = t(753891),
        f = t(339626),
        l = t(43452),
        p = t(652320),
        h = t(598349),
        y = t(837082),
        d = t(2871),
        v = t(101968),
        g = t(324988),
        w = t(210140),
        b = t(41575),
        m = t(706938),
        x = t(503199),
        k = t(627),
        E = t(565079),
        A = t(19319),
        M = t(139257),
        O = t(373458),
        S = t(150088),
        D = t(604400),
        T = t(772805),
        R = o.Object,
        C = o.Array,
        B = o.Date,
        I = o.Error,
        F = o.TypeError,
        U = o.PerformanceMark,
        L = c("DOMException"),
        P = A.Map,
        W = A.has,
        j = A.get,
        _ = A.set,
        N = M.Set,
        V = M.add,
        G = M.has,
        H = c("Object", "keys"),
        z = s([].push),
        q = s((!0).valueOf),
        Q = s((1).valueOf),
        K = s("".valueOf),
        J = s(B.prototype.getTime),
        X = u("structuredClone"),
        Y = "DataCloneError",
        Z = "Transferring",
        $ = function (e) {
          return (
            !i(function () {
              var r = new o.Set([7]),
                t = e(r),
                a = e(R(7));
              return t === r || !t.has(7) || !h(a) || 7 != +a;
            }) && e
          );
        },
        ee = function (e, r) {
          return !i(function () {
            var t = new r(),
              a = e({ a: t, b: t });
            return !(
              a &&
              a.a === a.b &&
              a.a instanceof r &&
              a.a.stack === t.stack
            );
          });
        },
        er = o.structuredClone,
        et =
          a ||
          !ee(er, I) ||
          !ee(er, L) ||
          !!i(function () {
            var e = er(new o.AggregateError([1], X, { cause: 3 }));
            return (
              "AggregateError" !== e.name ||
              1 !== e.errors[0] ||
              e.message !== X ||
              3 !== e.cause
            );
          }),
        ea =
          !er &&
          $(function (e) {
            return new U(X, { detail: e }).detail;
          }),
        en = $(er) || ea,
        eo = function (e) {
          throw new L("Uncloneable type: " + e, Y);
        },
        ec = function (e, r) {
          throw new L(
            (r || "Cloning") +
              " of " +
              e +
              " cannot be properly polyfilled in this engine",
            Y,
          );
        },
        es = function (e, r) {
          return en || ec(r), en(e);
        },
        ei = function () {
          var e;
          try {
            e = new o.DataTransfer();
          } catch (r) {
            try {
              e = new o.ClipboardEvent("").clipboardData;
            } catch (e) {}
          }
          return e && e.items && e.files ? e : null;
        },
        eu = function (e, r, t) {
          if (W(r, e)) return j(r, e);
          if ("SharedArrayBuffer" === (t || g(e))) a = en ? en(e) : e;
          else {
            var a,
              n,
              c,
              s,
              i,
              u,
              l = o.DataView;
            l || f(e.slice) || ec("ArrayBuffer");
            try {
              if (f(e.slice) && !e.resizable) a = e.slice(0);
              else
                for (
                  n = e.byteLength,
                    c =
                      ("maxByteLength" in e)
                        ? { maxByteLength: e.maxByteLength }
                        : void 0,
                    a = new ArrayBuffer(n, c),
                    s = new l(e),
                    i = new l(a),
                    u = 0;
                  u < n;
                  u++
                )
                  i.setUint8(u, s.getUint8(u));
            } catch (e) {
              throw new L("ArrayBuffer is detached", Y);
            }
          }
          return _(r, e, a), a;
        },
        ef = function (e, r, t, a, n) {
          var c = o[r];
          return h(c) || ec(r), new c(eu(e.buffer, n), t, a);
        },
        el = function (e, r) {
          if ((y(e) && eo("Symbol"), !h(e))) return e;
          if (r) {
            if (W(r, e)) return j(r, e);
          } else r = new P();
          var t,
            a,
            n,
            s,
            i,
            u,
            l,
            p,
            d = g(e);
          switch (d) {
            case "Array":
              n = C(x(e));
              break;
            case "Object":
              n = {};
              break;
            case "Map":
              n = new P();
              break;
            case "Set":
              n = new N();
              break;
            case "RegExp":
              n = new RegExp(e.source, E(e));
              break;
            case "Error":
              switch ((a = e.name)) {
                case "AggregateError":
                  n = new (c(a))([]);
                  break;
                case "EvalError":
                case "RangeError":
                case "ReferenceError":
                case "SuppressedError":
                case "SyntaxError":
                case "TypeError":
                case "URIError":
                  n = new (c(a))();
                  break;
                case "CompileError":
                case "LinkError":
                case "RuntimeError":
                  n = new (c("WebAssembly", a))();
                  break;
                default:
                  n = new I();
              }
              break;
            case "DOMException":
              n = new L(e.message, e.name);
              break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
              n = eu(e, r, d);
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
              (u = "DataView" === d ? e.byteLength : e.length),
                (n = ef(e, d, e.byteOffset, u, r));
              break;
            case "DOMQuad":
              try {
                n = new DOMQuad(
                  el(e.p1, r),
                  el(e.p2, r),
                  el(e.p3, r),
                  el(e.p4, r),
                );
              } catch (r) {
                n = es(e, d);
              }
              break;
            case "File":
              if (en)
                try {
                  (n = en(e)), g(n) !== d && (n = void 0);
                } catch (e) {}
              if (!n)
                try {
                  n = new File([e], e.name, e);
                } catch (e) {}
              n || ec(d);
              break;
            case "FileList":
              if ((s = ei())) {
                for (i = 0, u = x(e); i < u; i++) s.items.add(el(e[i], r));
                n = s.files;
              } else n = es(e, d);
              break;
            case "ImageData":
              try {
                n = new ImageData(el(e.data, r), e.width, e.height, {
                  colorSpace: e.colorSpace,
                });
              } catch (r) {
                n = es(e, d);
              }
              break;
            default:
              if (en) n = en(e);
              else
                switch (d) {
                  case "BigInt":
                    n = R(e.valueOf());
                    break;
                  case "Boolean":
                    n = R(q(e));
                    break;
                  case "Number":
                    n = R(Q(e));
                    break;
                  case "String":
                    n = R(K(e));
                    break;
                  case "Date":
                    n = new B(J(e));
                    break;
                  case "Blob":
                    try {
                      n = e.slice(0, e.size, e.type);
                    } catch (e) {
                      ec(d);
                    }
                    break;
                  case "DOMPoint":
                  case "DOMPointReadOnly":
                    t = o[d];
                    try {
                      n = t.fromPoint
                        ? t.fromPoint(e)
                        : new t(e.x, e.y, e.z, e.w);
                    } catch (e) {
                      ec(d);
                    }
                    break;
                  case "DOMRect":
                  case "DOMRectReadOnly":
                    t = o[d];
                    try {
                      n = t.fromRect
                        ? t.fromRect(e)
                        : new t(e.x, e.y, e.width, e.height);
                    } catch (e) {
                      ec(d);
                    }
                    break;
                  case "DOMMatrix":
                  case "DOMMatrixReadOnly":
                    t = o[d];
                    try {
                      n = t.fromMatrix ? t.fromMatrix(e) : new t(e);
                    } catch (e) {
                      ec(d);
                    }
                    break;
                  case "AudioData":
                  case "VideoFrame":
                    f(e.clone) || ec(d);
                    try {
                      n = e.clone();
                    } catch (e) {
                      eo(d);
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
                    ec(d);
                  default:
                    eo(d);
                }
          }
          switch ((_(r, e, n), d)) {
            case "Array":
            case "Object":
              for (i = 0, u = x((l = H(e))); i < u; i++)
                (p = l[i]), b(n, p, el(e[p], r));
              break;
            case "Map":
              e.forEach(function (e, t) {
                _(n, el(t, r), el(e, r));
              });
              break;
            case "Set":
              e.forEach(function (e) {
                V(n, el(e, r));
              });
              break;
            case "Error":
              m(n, "message", el(e.message, r)),
                w(e, "cause") && m(n, "cause", el(e.cause, r)),
                "AggregateError" === a
                  ? (n.errors = el(e.errors, r))
                  : "SuppressedError" === a &&
                    ((n.error = el(e.error, r)),
                    (n.suppressed = el(e.suppressed, r)));
            case "DOMException":
              D && m(n, "stack", el(e.stack, r));
          }
          return n;
        },
        ep = function (e, r) {
          if (!h(e))
            throw new F("Transfer option cannot be converted to a sequence");
          var t,
            a,
            n,
            c,
            s,
            i = [];
          d(e, function (e) {
            z(i, v(e));
          });
          for (var u = 0, p = x(i), y = new N(); u < p; ) {
            if ("ArrayBuffer" === (a = g((t = i[u++]))) ? G(y, t) : W(r, t))
              throw new L("Duplicate transferable", Y);
            if ("ArrayBuffer" === a) {
              V(y, t);
              continue;
            }
            if (T) c = er(t, { transfer: [t] });
            else
              switch (a) {
                case "ImageBitmap":
                  l((n = o.OffscreenCanvas)) || ec(a, Z);
                  try {
                    (s = new n(t.width, t.height))
                      .getContext("bitmaprenderer")
                      .transferFromImageBitmap(t),
                      (c = s.transferToImageBitmap());
                  } catch (e) {}
                  break;
                case "AudioData":
                case "VideoFrame":
                  (f(t.clone) && f(t.close)) || ec(a, Z);
                  try {
                    (c = t.clone()), t.close();
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
                  ec(a, Z);
              }
            if (void 0 === c)
              throw new L("This object cannot be transferred: " + a, Y);
            _(r, t, c);
          }
          return y;
        },
        eh = function (e) {
          O(e, function (e) {
            T
              ? en(e, { transfer: [e] })
              : f(e.transfer)
                ? e.transfer()
                : S
                  ? S(e)
                  : ec("ArrayBuffer", Z);
          });
        };
      n(
        { global: !0, enumerable: !0, sham: !T, forced: et },
        {
          structuredClone: function (e) {
            var r,
              t,
              a =
                k(arguments.length, 1) > 1 && !p(arguments[1])
                  ? v(arguments[1])
                  : void 0,
              n = a ? a.transfer : void 0;
            void 0 !== n && (t = ep(n, (r = new P())));
            var o = el(e, r);
            return t && eh(t), o;
          },
        },
      );
    },
  },
]);
//# sourceMappingURL=61979.bf99bac7ae961a61.js.map
