(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70644"],
  {
    264572(t, r, e) {
      "use strict";
      var n = e(827762),
        i = e(936287),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function f(t) {
        if (t > 0x7fffffff)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"',
          );
        var r = new Uint8Array(t);
        return Object.setPrototypeOf(r, u.prototype), r;
      }
      function u(t, r, e) {
        if ("number" == typeof t) {
          if ("string" == typeof r)
            throw TypeError(
              'The "string" argument must be of type string. Received type number',
            );
          return a(t);
        }
        return s(t, r, e);
      }
      function s(t, r, e) {
        if ("string" == typeof t) {
          var n = t,
            i = r;
          if (
            (("string" != typeof i || "" === i) && (i = "utf8"),
            !u.isEncoding(i))
          )
            throw TypeError("Unknown encoding: " + i);
          var o = 0 | l(n, i),
            s = f(o),
            h = s.write(n, i);
          return h !== o && (s = s.slice(0, h)), s;
        }
        if (ArrayBuffer.isView(t)) return c(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t,
          );
        if (
          S(t, ArrayBuffer) ||
          (t && S(t.buffer, ArrayBuffer)) ||
          ("u" > typeof SharedArrayBuffer &&
            (S(t, SharedArrayBuffer) || (t && S(t.buffer, SharedArrayBuffer))))
        )
          return (function (t, r, e) {
            var n;
            if (r < 0 || t.byteLength < r)
              throw RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < r + (e || 0))
              throw RangeError('"length" is outside of buffer bounds');
            return (
              Object.setPrototypeOf(
                (n =
                  void 0 === r && void 0 === e
                    ? new Uint8Array(t)
                    : void 0 === e
                      ? new Uint8Array(t, r)
                      : new Uint8Array(t, r, e)),
                u.prototype,
              ),
              n
            );
          })(t, r, e);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number',
          );
        var a = t.valueOf && t.valueOf();
        if (null != a && a !== t) return u.from(a, r, e);
        var y = (function (t) {
          if (u.isBuffer(t)) {
            var r = 0 | p(t.length),
              e = f(r);
            return 0 === e.length || t.copy(e, 0, 0, r), e;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length ||
              (function (t) {
                return t != t;
              })(t.length)
              ? f(0)
              : c(t)
            : "Buffer" === t.type && Array.isArray(t.data)
              ? c(t.data)
              : void 0;
        })(t);
        if (y) return y;
        if (
          "u" > typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return u.from(t[Symbol.toPrimitive]("string"), r, e);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t,
        );
      }
      function h(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"',
          );
      }
      function a(t) {
        return h(t), f(t < 0 ? 0 : 0 | p(t));
      }
      function c(t) {
        for (
          var r = t.length < 0 ? 0 : 0 | p(t.length), e = f(r), n = 0;
          n < r;
          n += 1
        )
          e[n] = 255 & t[n];
        return e;
      }
      (r.Buffer = u),
        (r.SlowBuffer = function (t) {
          return +t != t && (t = 0), u.alloc(+t);
        }),
        (r.INSPECT_MAX_BYTES = 50),
        (r.kMaxLength = 0x7fffffff),
        (u.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              r = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(r, Uint8Array.prototype),
              Object.setPrototypeOf(t, r),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        !u.TYPED_ARRAY_SUPPORT &&
          "u" > typeof console &&
          "function" == typeof console.error &&
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
          ),
        Object.defineProperty(u.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(u.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset;
          },
        }),
        (u.poolSize = 8192),
        (u.from = function (t, r, e) {
          return s(t, r, e);
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function (t, r, e) {
          return (h(t), t <= 0)
            ? f(t)
            : void 0 !== r
              ? "string" == typeof e
                ? f(t).fill(r, e)
                : f(t).fill(r)
              : f(t);
        }),
        (u.allocUnsafe = function (t) {
          return a(t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return a(t);
        });
      function p(t) {
        if (t >= 0x7fffffff)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes",
          );
        return 0 | t;
      }
      function l(t, r) {
        if (u.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || S(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t,
          );
        var e = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === e) return 0;
        for (var i = !1; ; )
          switch (r) {
            case "ascii":
            case "latin1":
            case "binary":
              return e;
            case "utf8":
            case "utf-8":
              return U(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * e;
            case "hex":
              return e >>> 1;
            case "base64":
              return I(t).length;
            default:
              if (i) return n ? -1 : U(t).length;
              (r = ("" + r).toLowerCase()), (i = !0);
          }
      }
      function y(t, r, e) {
        var i,
          o,
          f,
          u = !1;
        if (
          ((void 0 === r || r < 0) && (r = 0),
          r > this.length ||
            ((void 0 === e || e > this.length) && (e = this.length),
            e <= 0 || (e >>>= 0) <= (r >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, r, e) {
                var n = t.length;
                (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
                for (var i = "", o = r; o < e; ++o) i += O[t[o]];
                return i;
              })(this, r, e);
            case "utf8":
            case "utf-8":
              return b(this, r, e);
            case "ascii":
              return (function (t, r, e) {
                var n = "";
                e = Math.min(t.length, e);
                for (var i = r; i < e; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, r, e);
            case "latin1":
            case "binary":
              return (function (t, r, e) {
                var n = "";
                e = Math.min(t.length, e);
                for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, r, e);
            case "base64":
              return (
                (i = this),
                (o = r),
                (f = e),
                0 === o && f === i.length
                  ? n.fromByteArray(i)
                  : n.fromByteArray(i.slice(o, f))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, r, e) {
                for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2)
                  i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i;
              })(this, r, e);
            default:
              if (u) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (u = !0);
          }
      }
      function g(t, r, e) {
        var n = t[r];
        (t[r] = t[e]), (t[e] = n);
      }
      function d(t, r, e, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof e
            ? ((n = e), (e = 0))
            : e > 0x7fffffff
              ? (e = 0x7fffffff)
              : e < -0x80000000 && (e = -0x80000000),
          (o = e *= 1) != o && (e = i ? 0 : t.length - 1),
          e < 0 && (e = t.length + e),
          e >= t.length)
        )
          if (i) return -1;
          else e = t.length - 1;
        else if (e < 0)
          if (!i) return -1;
          else e = 0;
        if (("string" == typeof r && (r = u.from(r, n)), u.isBuffer(r)))
          return 0 === r.length ? -1 : v(t, r, e, n, i);
        if ("number" == typeof r) {
          if (((r &= 255), "function" == typeof Uint8Array.prototype.indexOf))
            if (i) return Uint8Array.prototype.indexOf.call(t, r, e);
            else return Uint8Array.prototype.lastIndexOf.call(t, r, e);
          return v(t, [r], e, n, i);
        }
        throw TypeError("val must be string, number or Buffer");
      }
      function v(t, r, e, n, i) {
        var o,
          f = 1,
          u = t.length,
          s = r.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || r.length < 2) return -1;
          (f = 2), (u /= 2), (s /= 2), (e /= 2);
        }
        function h(t, r) {
          return 1 === f ? t[r] : t.readUInt16BE(r * f);
        }
        if (i) {
          var a = -1;
          for (o = e; o < u; o++)
            if (h(t, o) === h(r, -1 === a ? 0 : o - a)) {
              if ((-1 === a && (a = o), o - a + 1 === s)) return a * f;
            } else -1 !== a && (o -= o - a), (a = -1);
        } else
          for (e + s > u && (e = u - s), o = e; o >= 0; o--) {
            for (var c = !0, p = 0; p < s; p++)
              if (h(t, o + p) !== h(r, p)) {
                c = !1;
                break;
              }
            if (c) return o;
          }
        return -1;
      }
      (u.isBuffer = function (t) {
        return null != t && !0 === t._isBuffer && t !== u.prototype;
      }),
        (u.compare = function (t, r) {
          if (
            (S(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            S(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)),
            !u.isBuffer(t) || !u.isBuffer(r))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            );
          if (t === r) return 0;
          for (
            var e = t.length, n = r.length, i = 0, o = Math.min(e, n);
            i < o;
            ++i
          )
            if (t[i] !== r[i]) {
              (e = t[i]), (n = r[i]);
              break;
            }
          return e < n ? -1 : +(n < e);
        }),
        (u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (t, r) {
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          if (void 0 === r)
            for (e = 0, r = 0; e < t.length; ++e) r += t[e].length;
          var e,
            n = u.allocUnsafe(r),
            i = 0;
          for (e = 0; e < t.length; ++e) {
            var o = t[e];
            if ((S(o, Uint8Array) && (o = u.from(o)), !u.isBuffer(o)))
              throw TypeError('"list" argument must be an Array of Buffers');
            o.copy(n, i), (i += o.length);
          }
          return n;
        }),
        (u.byteLength = l),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (var r = 0; r < t; r += 2) g(this, r, r + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (var r = 0; r < t; r += 4)
            g(this, r, r + 3), g(this, r + 1, r + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (var r = 0; r < t; r += 8)
            g(this, r, r + 7),
              g(this, r + 1, r + 6),
              g(this, r + 2, r + 5),
              g(this, r + 3, r + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
              ? b(this, 0, t)
              : y.apply(this, arguments);
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          var t = "",
            e = r.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, e)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > e && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function (t, r, e, n, i) {
          if (
            (S(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t,
            );
          if (
            (void 0 === r && (r = 0),
            void 0 === e && (e = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            r < 0 || e > t.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && r >= e) return 0;
          if (n >= i) return -1;
          if (r >= e) return 1;
          if (((r >>>= 0), (e >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          for (
            var o = i - n,
              f = e - r,
              s = Math.min(o, f),
              h = this.slice(n, i),
              a = t.slice(r, e),
              c = 0;
            c < s;
            ++c
          )
            if (h[c] !== a[c]) {
              (o = h[c]), (f = a[c]);
              break;
            }
          return o < f ? -1 : +(f < o);
        }),
        (u.prototype.includes = function (t, r, e) {
          return -1 !== this.indexOf(t, r, e);
        }),
        (u.prototype.indexOf = function (t, r, e) {
          return d(this, t, r, e, !0);
        }),
        (u.prototype.lastIndexOf = function (t, r, e) {
          return d(this, t, r, e, !1);
        });
      function b(t, r, e) {
        e = Math.min(t.length, e);
        for (var n = [], i = r; i < e; ) {
          var o,
            f,
            u,
            s,
            h = t[i],
            a = null,
            c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
          if (i + c <= e)
            switch (c) {
              case 1:
                h < 128 && (a = h);
                break;
              case 2:
                (192 & (o = t[i + 1])) == 128 &&
                  (s = ((31 & h) << 6) | (63 & o)) > 127 &&
                  (a = s);
                break;
              case 3:
                (o = t[i + 1]),
                  (f = t[i + 2]),
                  (192 & o) == 128 &&
                    (192 & f) == 128 &&
                    (s = ((15 & h) << 12) | ((63 & o) << 6) | (63 & f)) >
                      2047 &&
                    (s < 55296 || s > 57343) &&
                    (a = s);
                break;
              case 4:
                (o = t[i + 1]),
                  (f = t[i + 2]),
                  (u = t[i + 3]),
                  (192 & o) == 128 &&
                    (192 & f) == 128 &&
                    (192 & u) == 128 &&
                    (s =
                      ((15 & h) << 18) |
                      ((63 & o) << 12) |
                      ((63 & f) << 6) |
                      (63 & u)) > 65535 &&
                    s < 1114112 &&
                    (a = s);
            }
          null === a
            ? ((a = 65533), (c = 1))
            : a > 65535 &&
              ((a -= 65536),
              n.push(((a >>> 10) & 1023) | 55296),
              (a = 56320 | (1023 & a))),
            n.push(a),
            (i += c);
        }
        var p = n,
          l = p.length;
        if (l <= 4096) return String.fromCharCode.apply(String, p);
        for (var y = "", g = 0; g < l; )
          y += String.fromCharCode.apply(String, p.slice(g, (g += 4096)));
        return y;
      }
      function w(t, r, e) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + r > e)
          throw RangeError("Trying to access beyond buffer length");
      }
      function m(t, r, e, n, i, o) {
        if (!u.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (r > i || r < o)
          throw RangeError('"value" argument is out of bounds');
        if (e + n > t.length) throw RangeError("Index out of range");
      }
      function E(t, r, e, n, i, o) {
        if (e + n > t.length || e < 0) throw RangeError("Index out of range");
      }
      function B(t, r, e, n, o) {
        return (
          (r *= 1),
          (e >>>= 0),
          o || E(t, r, e, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, r, e, n, 23, 4),
          e + 4
        );
      }
      function A(t, r, e, n, o) {
        return (
          (r *= 1),
          (e >>>= 0),
          o || E(t, r, e, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, r, e, n, 52, 8),
          e + 8
        );
      }
      (u.prototype.write = function (t, r, e, n) {
        if (void 0 === r) (n = "utf8"), (e = this.length), (r = 0);
        else if (void 0 === e && "string" == typeof r)
          (n = r), (e = this.length), (r = 0);
        else if (isFinite(r))
          (r >>>= 0),
            isFinite(e)
              ? ((e >>>= 0), void 0 === n && (n = "utf8"))
              : ((n = e), (e = void 0));
        else
          throw Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        var i,
          o,
          f,
          u,
          s,
          h,
          a,
          c,
          p = this.length - r;
        if (
          ((void 0 === e || e > p) && (e = p),
          (t.length > 0 && (e < 0 || r < 0)) || r > this.length)
        )
          throw RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for (var l = !1; ; )
          switch (n) {
            case "hex":
              return (function (t, r, e, n) {
                e = Number(e) || 0;
                var i = t.length - e;
                n ? (n = Number(n)) > i && (n = i) : (n = i);
                var o = r.length;
                n > o / 2 && (n = o / 2);
                for (var f = 0; f < n; ++f) {
                  var u,
                    s = parseInt(r.substr(2 * f, 2), 16);
                  if ((u = s) != u) break;
                  t[e + f] = s;
                }
                return f;
              })(this, t, r, e);
            case "utf8":
            case "utf-8":
              return (i = r), (o = e), L(U(t, this.length - i), this, i, o);
            case "ascii":
              return (f = r), (u = e), L(x(t), this, f, u);
            case "latin1":
            case "binary":
              return (function (t, r, e, n) {
                return L(x(r), t, e, n);
              })(this, t, r, e);
            case "base64":
              return (s = r), (h = e), L(I(t), this, s, h);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (
                (a = r),
                (c = e),
                L(
                  (function (t, r) {
                    for (
                      var e, n, i = [], o = 0;
                      o < t.length && !((r -= 2) < 0);
                      ++o
                    )
                      (n = (e = t.charCodeAt(o)) >> 8),
                        i.push(e % 256),
                        i.push(n);
                    return i;
                  })(t, this.length - a),
                  this,
                  a,
                  c,
                )
              );
            default:
              if (l) throw TypeError("Unknown encoding: " + n);
              (n = ("" + n).toLowerCase()), (l = !0);
          }
      }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (u.prototype.slice = function (t, r) {
          var e = this.length;
          (t = ~~t),
            (r = void 0 === r ? e : ~~r),
            t < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e),
            r < 0 ? (r += e) < 0 && (r = 0) : r > e && (r = e),
            r < t && (r = t);
          var n = this.subarray(t, r);
          return Object.setPrototypeOf(n, u.prototype), n;
        }),
        (u.prototype.readUIntLE = function (t, r, e) {
          (t >>>= 0), (r >>>= 0), e || w(t, r, this.length);
          for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); )
            n += this[t + o] * i;
          return n;
        }),
        (u.prototype.readUIntBE = function (t, r, e) {
          (t >>>= 0), (r >>>= 0), e || w(t, r, this.length);
          for (var n = this[t + --r], i = 1; r > 0 && (i *= 256); )
            n += this[t + --r] * i;
          return n;
        }),
        (u.prototype.readUInt8 = function (t, r) {
          return (t >>>= 0), r || w(t, 1, this.length), this[t];
        }),
        (u.prototype.readUInt16LE = function (t, r) {
          return (
            (t >>>= 0), r || w(t, 2, this.length), this[t] | (this[t + 1] << 8)
          );
        }),
        (u.prototype.readUInt16BE = function (t, r) {
          return (
            (t >>>= 0), r || w(t, 2, this.length), (this[t] << 8) | this[t + 1]
          );
        }),
        (u.prototype.readUInt32LE = function (t, r) {
          return (
            (t >>>= 0),
            r || w(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              0x1000000 * this[t + 3]
          );
        }),
        (u.prototype.readUInt32BE = function (t, r) {
          return (
            (t >>>= 0),
            r || w(t, 4, this.length),
            0x1000000 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (u.prototype.readIntLE = function (t, r, e) {
          (t >>>= 0), (r >>>= 0), e || w(t, r, this.length);
          for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); )
            n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
        }),
        (u.prototype.readIntBE = function (t, r, e) {
          (t >>>= 0), (r >>>= 0), e || w(t, r, this.length);
          for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
        }),
        (u.prototype.readInt8 = function (t, r) {
          return ((t >>>= 0), r || w(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (u.prototype.readInt16LE = function (t, r) {
          (t >>>= 0), r || w(t, 2, this.length);
          var e = this[t] | (this[t + 1] << 8);
          return 32768 & e ? 0xffff0000 | e : e;
        }),
        (u.prototype.readInt16BE = function (t, r) {
          (t >>>= 0), r || w(t, 2, this.length);
          var e = this[t + 1] | (this[t] << 8);
          return 32768 & e ? 0xffff0000 | e : e;
        }),
        (u.prototype.readInt32LE = function (t, r) {
          return (
            (t >>>= 0),
            r || w(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, r) {
          return (
            (t >>>= 0),
            r || w(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (u.prototype.readFloatLE = function (t, r) {
          return (
            (t >>>= 0), r || w(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (u.prototype.readFloatBE = function (t, r) {
          return (
            (t >>>= 0), r || w(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (u.prototype.readDoubleLE = function (t, r) {
          return (
            (t >>>= 0), r || w(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (u.prototype.readDoubleBE = function (t, r) {
          return (
            (t >>>= 0), r || w(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (u.prototype.writeUIntLE = function (t, r, e, n) {
          if (((t *= 1), (r >>>= 0), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * e) - 1;
            m(this, t, r, e, i, 0);
          }
          var o = 1,
            f = 0;
          for (this[r] = 255 & t; ++f < e && (o *= 256); )
            this[r + f] = (t / o) & 255;
          return r + e;
        }),
        (u.prototype.writeUIntBE = function (t, r, e, n) {
          if (((t *= 1), (r >>>= 0), (e >>>= 0), !n)) {
            var i = Math.pow(2, 8 * e) - 1;
            m(this, t, r, e, i, 0);
          }
          var o = e - 1,
            f = 1;
          for (this[r + o] = 255 & t; --o >= 0 && (f *= 256); )
            this[r + o] = (t / f) & 255;
          return r + e;
        }),
        (u.prototype.writeUInt8 = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 1, 255, 0),
            (this[r] = 255 & t),
            r + 1
          );
        }),
        (u.prototype.writeUInt16LE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 2, 65535, 0),
            (this[r] = 255 & t),
            (this[r + 1] = t >>> 8),
            r + 2
          );
        }),
        (u.prototype.writeUInt16BE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 2, 65535, 0),
            (this[r] = t >>> 8),
            (this[r + 1] = 255 & t),
            r + 2
          );
        }),
        (u.prototype.writeUInt32LE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 4, 0xffffffff, 0),
            (this[r + 3] = t >>> 24),
            (this[r + 2] = t >>> 16),
            (this[r + 1] = t >>> 8),
            (this[r] = 255 & t),
            r + 4
          );
        }),
        (u.prototype.writeUInt32BE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 4, 0xffffffff, 0),
            (this[r] = t >>> 24),
            (this[r + 1] = t >>> 16),
            (this[r + 2] = t >>> 8),
            (this[r + 3] = 255 & t),
            r + 4
          );
        }),
        (u.prototype.writeIntLE = function (t, r, e, n) {
          if (((t *= 1), (r >>>= 0), !n)) {
            var i = Math.pow(2, 8 * e - 1);
            m(this, t, r, e, i - 1, -i);
          }
          var o = 0,
            f = 1,
            u = 0;
          for (this[r] = 255 & t; ++o < e && (f *= 256); )
            t < 0 && 0 === u && 0 !== this[r + o - 1] && (u = 1),
              (this[r + o] = (((t / f) | 0) - u) & 255);
          return r + e;
        }),
        (u.prototype.writeIntBE = function (t, r, e, n) {
          if (((t *= 1), (r >>>= 0), !n)) {
            var i = Math.pow(2, 8 * e - 1);
            m(this, t, r, e, i - 1, -i);
          }
          var o = e - 1,
            f = 1,
            u = 0;
          for (this[r + o] = 255 & t; --o >= 0 && (f *= 256); )
            t < 0 && 0 === u && 0 !== this[r + o + 1] && (u = 1),
              (this[r + o] = (((t / f) | 0) - u) & 255);
          return r + e;
        }),
        (u.prototype.writeInt8 = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[r] = 255 & t),
            r + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 2, 32767, -32768),
            (this[r] = 255 & t),
            (this[r + 1] = t >>> 8),
            r + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 2, 32767, -32768),
            (this[r] = t >>> 8),
            (this[r + 1] = 255 & t),
            r + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 4, 0x7fffffff, -0x80000000),
            (this[r] = 255 & t),
            (this[r + 1] = t >>> 8),
            (this[r + 2] = t >>> 16),
            (this[r + 3] = t >>> 24),
            r + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, r, e) {
          return (
            (t *= 1),
            (r >>>= 0),
            e || m(this, t, r, 4, 0x7fffffff, -0x80000000),
            t < 0 && (t = 0xffffffff + t + 1),
            (this[r] = t >>> 24),
            (this[r + 1] = t >>> 16),
            (this[r + 2] = t >>> 8),
            (this[r + 3] = 255 & t),
            r + 4
          );
        }),
        (u.prototype.writeFloatLE = function (t, r, e) {
          return B(this, t, r, !0, e);
        }),
        (u.prototype.writeFloatBE = function (t, r, e) {
          return B(this, t, r, !1, e);
        }),
        (u.prototype.writeDoubleLE = function (t, r, e) {
          return A(this, t, r, !0, e);
        }),
        (u.prototype.writeDoubleBE = function (t, r, e) {
          return A(this, t, r, !1, e);
        }),
        (u.prototype.copy = function (t, r, e, n) {
          if (!u.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (e || (e = 0),
            n || 0 === n || (n = this.length),
            r >= t.length && (r = t.length),
            r || (r = 0),
            n > 0 && n < e && (n = e),
            n === e || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (r < 0) throw RangeError("targetStart out of bounds");
          if (e < 0 || e >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - r < n - e && (n = t.length - r + e);
          var i = n - e;
          if (
            this === t &&
            "function" == typeof Uint8Array.prototype.copyWithin
          )
            this.copyWithin(r, e, n);
          else if (this === t && e < r && r < n)
            for (var o = i - 1; o >= 0; --o) t[o + r] = this[o + e];
          else Uint8Array.prototype.set.call(t, this.subarray(e, n), r);
          return i;
        }),
        (u.prototype.fill = function (t, r, e, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0), (e = this.length))
                : "string" == typeof e && ((n = e), (e = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !u.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              var i,
                o = t.charCodeAt(0);
              (("utf8" === n && o < 128) || "latin1" === n) && (t = o);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (r < 0 || this.length < r || this.length < e)
            throw RangeError("Out of range index");
          if (e <= r) return this;
          if (
            ((r >>>= 0),
            (e = void 0 === e ? this.length : e >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = r; i < e; ++i) this[i] = t;
          else {
            var f = u.isBuffer(t) ? t : u.from(t, n),
              s = f.length;
            if (0 === s)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"',
              );
            for (i = 0; i < e - r; ++i) this[i + r] = f[i % s];
          }
          return this;
        });
      var T = /[^+/0-9A-Za-z-_]/g;
      function U(t, r) {
        r = r || 1 / 0;
        for (var e, n = t.length, i = null, o = [], f = 0; f < n; ++f) {
          if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
            if (!i) {
              if (e > 56319 || f + 1 === n) {
                (r -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = e;
              continue;
            }
            if (e < 56320) {
              (r -= 3) > -1 && o.push(239, 191, 189), (i = e);
              continue;
            }
            e = (((i - 55296) << 10) | (e - 56320)) + 65536;
          } else i && (r -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), e < 128)) {
            if ((r -= 1) < 0) break;
            o.push(e);
          } else if (e < 2048) {
            if ((r -= 2) < 0) break;
            o.push((e >> 6) | 192, (63 & e) | 128);
          } else if (e < 65536) {
            if ((r -= 3) < 0) break;
            o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
          } else if (e < 1114112) {
            if ((r -= 4) < 0) break;
            o.push(
              (e >> 18) | 240,
              ((e >> 12) & 63) | 128,
              ((e >> 6) & 63) | 128,
              (63 & e) | 128,
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function x(t) {
        for (var r = [], e = 0; e < t.length; ++e)
          r.push(255 & t.charCodeAt(e));
        return r;
      }
      function I(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(T, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t),
        );
      }
      function L(t, r, e, n) {
        for (var i = 0; i < n && !(i + e >= r.length) && !(i >= t.length); ++i)
          r[i + e] = t[i];
        return i;
      }
      function S(t, r) {
        return (
          t instanceof r ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === r.name)
        );
      }
      var O = (function () {
        for (var t = "0123456789abcdef", r = Array(256), e = 0; e < 16; ++e)
          for (var n = 16 * e, i = 0; i < 16; ++i) r[n + i] = t[e] + t[i];
        return r;
      })();
    },
    936287(t, r) {
      (r.read = function (t, r, e, n, i) {
        var o,
          f,
          u = 8 * i - n - 1,
          s = (1 << u) - 1,
          h = s >> 1,
          a = -7,
          c = e ? i - 1 : 0,
          p = e ? -1 : 1,
          l = t[r + c];
        for (
          c += p, o = l & ((1 << -a) - 1), l >>= -a, a += u;
          a > 0;
          o = 256 * o + t[r + c], c += p, a -= 8
        );
        for (
          f = o & ((1 << -a) - 1), o >>= -a, a += n;
          a > 0;
          f = 256 * f + t[r + c], c += p, a -= 8
        );
        if (0 === o) o = 1 - h;
        else {
          if (o === s) return f ? NaN : (1 / 0) * (l ? -1 : 1);
          (f += Math.pow(2, n)), (o -= h);
        }
        return (l ? -1 : 1) * f * Math.pow(2, o - n);
      }),
        (r.write = function (t, r, e, n, i, o) {
          var f,
            u,
            s,
            h = 8 * o - i - 1,
            a = (1 << h) - 1,
            c = a >> 1,
            p = 5960464477539062e-23 * (23 === i),
            l = n ? 0 : o - 1,
            y = n ? 1 : -1,
            g = +(r < 0 || (0 === r && 1 / r < 0));
          for (
            isNaN((r = Math.abs(r))) || r === 1 / 0
              ? ((u = +!!isNaN(r)), (f = a))
              : ((f = Math.floor(Math.log(r) / Math.LN2)),
                r * (s = Math.pow(2, -f)) < 1 && (f--, (s *= 2)),
                f + c >= 1 ? (r += p / s) : (r += p * Math.pow(2, 1 - c)),
                r * s >= 2 && (f++, (s /= 2)),
                f + c >= a
                  ? ((u = 0), (f = a))
                  : f + c >= 1
                    ? ((u = (r * s - 1) * Math.pow(2, i)), (f += c))
                    : ((u = r * Math.pow(2, c - 1) * Math.pow(2, i)), (f = 0)));
            i >= 8;
            t[e + l] = 255 & u, l += y, u /= 256, i -= 8
          );
          for (
            f = (f << i) | u, h += i;
            h > 0;
            t[e + l] = 255 & f, l += y, f /= 256, h -= 8
          );
          t[e + l - y] |= 128 * g;
        });
    },
    72290(t) {
      var r,
        e,
        n,
        i = (t.exports = {});
      function o() {
        throw Error("setTimeout has not been defined");
      }
      function f() {
        throw Error("clearTimeout has not been defined");
      }
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        r = o;
      }
      try {
        e = "function" == typeof clearTimeout ? clearTimeout : f;
      } catch (t) {
        e = f;
      }
      function u(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      var s = [],
        h = !1,
        a = -1;
      function c() {
        h &&
          n &&
          ((h = !1), n.length ? (s = n.concat(s)) : (a = -1), s.length && p());
      }
      function p() {
        if (!h) {
          var t = u(c);
          h = !0;
          for (var r = s.length; r; ) {
            for (n = s, s = []; ++a < r; ) n && n[a].run();
            (a = -1), (r = s.length);
          }
          (n = null),
            (h = !1),
            (function (t) {
              if (e === clearTimeout) return clearTimeout(t);
              if ((e === f || !e) && clearTimeout)
                return (e = clearTimeout), clearTimeout(t);
              try {
                e(t);
              } catch (r) {
                try {
                  return e.call(null, t);
                } catch (r) {
                  return e.call(this, t);
                }
              }
            })(t);
        }
      }
      function l(t, r) {
        (this.fun = t), (this.array = r);
      }
      function y() {}
      (i.nextTick = function (t) {
        var r = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
        s.push(new l(t, r)), 1 !== s.length || h || u(p);
      }),
        (l.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = y),
        (i.addListener = y),
        (i.once = y),
        (i.off = y),
        (i.removeListener = y),
        (i.removeAllListeners = y),
        (i.emit = y),
        (i.prependListener = y),
        (i.prependOnceListener = y),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
  },
]);
//# sourceMappingURL=70644.e9683c268faed3b4.js.map
