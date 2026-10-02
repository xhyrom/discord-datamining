"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["827385"],
  {
    85526(e, n) {
      (n.byteLength = function (e) {
        var n = d(e),
          t = n[0],
          a = n[1];
        return ((t + a) * 3) / 4 - a;
      }),
        (n.toByteArray = function (e) {
          var n,
            t,
            u = d(e),
            s = u[0],
            i = u[1],
            l = new r(((s + i) * 3) / 4 - i),
            o = 0,
            _ = i > 0 ? s - 4 : s;
          for (t = 0; t < _; t += 4)
            (n =
              (a[e.charCodeAt(t)] << 18) |
              (a[e.charCodeAt(t + 1)] << 12) |
              (a[e.charCodeAt(t + 2)] << 6) |
              a[e.charCodeAt(t + 3)]),
              (l[o++] = (n >> 16) & 255),
              (l[o++] = (n >> 8) & 255),
              (l[o++] = 255 & n);
          return (
            2 === i &&
              ((n = (a[e.charCodeAt(t)] << 2) | (a[e.charCodeAt(t + 1)] >> 4)),
              (l[o++] = 255 & n)),
            1 === i &&
              ((n =
                (a[e.charCodeAt(t)] << 10) |
                (a[e.charCodeAt(t + 1)] << 4) |
                (a[e.charCodeAt(t + 2)] >> 2)),
              (l[o++] = (n >> 8) & 255),
              (l[o++] = 255 & n)),
            l
          );
        }),
        (n.fromByteArray = function (e) {
          for (
            var n, a = e.length, r = a % 3, u = [], s = 0, i = a - r;
            s < i;
            s += 16383
          )
            u.push(
              (function (e, n, a) {
                for (var r, u = [], s = n; s < a; s += 3)
                  (r =
                    ((e[s] << 16) & 0xff0000) +
                    ((e[s + 1] << 8) & 65280) +
                    (255 & e[s + 2])),
                    u.push(
                      t[(r >> 18) & 63] +
                        t[(r >> 12) & 63] +
                        t[(r >> 6) & 63] +
                        t[63 & r],
                    );
                return u.join("");
              })(e, s, s + 16383 > i ? i : s + 16383),
            );
          return (
            1 === r
              ? u.push(t[(n = e[a - 1]) >> 2] + t[(n << 4) & 63] + "==")
              : 2 === r &&
                u.push(
                  t[(n = (e[a - 2] << 8) + e[a - 1]) >> 10] +
                    t[(n >> 4) & 63] +
                    t[(n << 2) & 63] +
                    "=",
                ),
            u.join("")
          );
        });
      for (
        var t = [],
          a = [],
          r = "u" > typeof Uint8Array ? Uint8Array : Array,
          u =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          i = u.length;
        s < i;
        ++s
      )
        (t[s] = u[s]), (a[u.charCodeAt(s)] = s);
      function d(e) {
        var n = e.length;
        if (n % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var t = e.indexOf("=");
        -1 === t && (t = n);
        var a = t === n ? 0 : 4 - (t % 4);
        return [t, a];
      }
      (a[45] = 62), (a[95] = 63);
    },
    415171(e, n, t) {
      t.d(n, { tb: () => u });
      var a = t(234097),
        r = t(916784),
        u = (function () {
          function e(e) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if ("function" != typeof e)
              throw TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
              );
            a.J.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, n) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!(0, r.vq)(e))
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              a.J.observe(this, e, n);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!(0, r.vq)(e))
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              a.J.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              a.J.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })();
      t(522816), t(162563);
    },
    877413(e) {
      e.exports = function (e) {
        return ((e = String(e || "")), a.test(e))
          ? "rtl"
          : r.test(e)
            ? "ltr"
            : "neutral";
      };
      var n = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
        t =
          "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF",
        a = RegExp("^[^" + t + "]*[" + n + "]"),
        r = RegExp("^[^" + n + "]*[" + t + "]");
    },
    722872(e) {
      var n = {
        linear: function (e, n, t, a) {
          return ((t - n) * e) / a + n;
        },
        easeInQuad: function (e, n, t, a) {
          return (t - n) * (e /= a) * e + n;
        },
        easeOutQuad: function (e, n, t, a) {
          return -(t - n) * (e /= a) * (e - 2) + n;
        },
        easeInOutQuad: function (e, n, t, a) {
          var r = t - n;
          return (e /= a / 2) < 1
            ? (r / 2) * e * e + n
            : (-r / 2) * (--e * (e - 2) - 1) + n;
        },
        easeInCubic: function (e, n, t, a) {
          return (t - n) * (e /= a) * e * e + n;
        },
        easeOutCubic: function (e, n, t, a) {
          return (t - n) * ((e = e / a - 1) * e * e + 1) + n;
        },
        easeInOutCubic: function (e, n, t, a) {
          var r = t - n;
          return (e /= a / 2) < 1
            ? (r / 2) * e * e * e + n
            : (r / 2) * ((e -= 2) * e * e + 2) + n;
        },
        easeInQuart: function (e, n, t, a) {
          return (t - n) * (e /= a) * e * e * e + n;
        },
        easeOutQuart: function (e, n, t, a) {
          return -(t - n) * ((e = e / a - 1) * e * e * e - 1) + n;
        },
        easeInOutQuart: function (e, n, t, a) {
          var r = t - n;
          return (e /= a / 2) < 1
            ? (r / 2) * e * e * e * e + n
            : (-r / 2) * ((e -= 2) * e * e * e - 2) + n;
        },
        easeInQuint: function (e, n, t, a) {
          return (t - n) * (e /= a) * e * e * e * e + n;
        },
        easeOutQuint: function (e, n, t, a) {
          return (t - n) * ((e = e / a - 1) * e * e * e * e + 1) + n;
        },
        easeInOutQuint: function (e, n, t, a) {
          var r = t - n;
          return (e /= a / 2) < 1
            ? (r / 2) * e * e * e * e * e + n
            : (r / 2) * ((e -= 2) * e * e * e * e + 2) + n;
        },
        easeInSine: function (e, n, t, a) {
          var r = t - n;
          return -r * Math.cos((e / a) * (Math.PI / 2)) + r + n;
        },
        easeOutSine: function (e, n, t, a) {
          return (t - n) * Math.sin((e / a) * (Math.PI / 2)) + n;
        },
        easeInOutSine: function (e, n, t, a) {
          return (-(t - n) / 2) * (Math.cos((Math.PI * e) / a) - 1) + n;
        },
        easeInExpo: function (e, n, t, a) {
          return 0 == e ? n : (t - n) * Math.pow(2, 10 * (e / a - 1)) + n;
        },
        easeOutExpo: function (e, n, t, a) {
          var r = t - n;
          return e == a ? n + r : r * (-Math.pow(2, (-10 * e) / a) + 1) + n;
        },
        easeInOutExpo: function (e, n, t, a) {
          var r = t - n;
          return 0 === e
            ? n
            : e === a
              ? n + r
              : (e /= a / 2) < 1
                ? (r / 2) * Math.pow(2, 10 * (e - 1)) + n
                : (r / 2) * (-Math.pow(2, -10 * --e) + 2) + n;
        },
        easeInCirc: function (e, n, t, a) {
          return -(t - n) * (Math.sqrt(1 - (e /= a) * e) - 1) + n;
        },
        easeOutCirc: function (e, n, t, a) {
          return (t - n) * Math.sqrt(1 - (e = e / a - 1) * e) + n;
        },
        easeInOutCirc: function (e, n, t, a) {
          var r = t - n;
          return (e /= a / 2) < 1
            ? (-r / 2) * (Math.sqrt(1 - e * e) - 1) + n
            : (r / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
        },
        easeInElastic: function (e, n, t, a) {
          var r,
            u,
            s,
            i = t - n;
          return ((s = 1.70158), (u = 0), (r = i), 0 === e)
            ? n
            : 1 == (e /= a)
              ? n + i
              : (u || (u = 0.3 * a),
                r < Math.abs(i)
                  ? ((r = i), (s = u / 4))
                  : (s = (u / (2 * Math.PI)) * Math.asin(i / r)),
                -(
                  r *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e * a - s)) / u)
                ) + n);
        },
        easeOutElastic: function (e, n, t, a) {
          var r,
            u,
            s,
            i = t - n;
          return ((s = 1.70158), (u = 0), (r = i), 0 === e)
            ? n
            : 1 == (e /= a)
              ? n + i
              : (u || (u = 0.3 * a),
                r < Math.abs(i)
                  ? ((r = i), (s = u / 4))
                  : (s = (u / (2 * Math.PI)) * Math.asin(i / r)),
                r *
                  Math.pow(2, -10 * e) *
                  Math.sin((2 * Math.PI * (e * a - s)) / u) +
                  i +
                  n);
        },
        easeInOutElastic: function (e, n, t, a) {
          var r,
            u,
            s,
            i = t - n;
          return ((s = 1.70158), (u = 0), (r = i), 0 === e)
            ? n
            : 2 == (e /= a / 2)
              ? n + i
              : (u || (u = 0.3 * 1.5 * a),
                  r < Math.abs(i)
                    ? ((r = i), (s = u / 4))
                    : (s = (u / (2 * Math.PI)) * Math.asin(i / r)),
                  e < 1)
                ? -0.5 *
                    (r *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin((2 * Math.PI * (e * a - s)) / u)) +
                  n
                : r *
                    Math.pow(2, -10 * (e -= 1)) *
                    Math.sin((2 * Math.PI * (e * a - s)) / u) *
                    0.5 +
                  i +
                  n;
        },
        easeInBack: function (e, n, t, a, r) {
          return (
            void 0 === r && (r = 1.70158),
            (t - n) * (e /= a) * e * ((r + 1) * e - r) + n
          );
        },
        easeOutBack: function (e, n, t, a, r) {
          return (
            void 0 === r && (r = 1.70158),
            (t - n) * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + n
          );
        },
        easeInOutBack: function (e, n, t, a, r) {
          var u = t - n;
          return (void 0 === r && (r = 1.70158), (e /= a / 2) < 1)
            ? (u / 2) * (e * e * (((r *= 1.525) + 1) * e - r)) + n
            : (u / 2) * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n;
        },
        easeInBounce: function (e, t, a, r) {
          var u,
            s = a - t;
          return (u = n.easeOutBounce(r - e, 0, s, r)), s - u + t;
        },
        easeOutBounce: function (e, n, t, a) {
          var r = t - n;
          return (e /= a) < 1 / 2.75
            ? 7.5625 * e * e * r + n
            : e < 2 / 2.75
              ? r * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n
              : e < 2.5 / 2.75
                ? r * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n
                : r * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
        },
        easeInOutBounce: function (e, t, a, r) {
          var u = a - t;
          return e < r / 2
            ? 0.5 * n.easeInBounce(2 * e, 0, u, r) + t
            : 0.5 * n.easeOutBounce(2 * e - r, 0, u, r) + 0.5 * u + t;
        },
      };
      e.exports = n;
    },
    495142(e, n, t) {
      var a;
      let r, u;
      function s(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function i(e, ...n) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (n.length > 0 && !n.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${n}, not of length=${e.length}`,
          );
      }
      function d(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        s(e.outputLen), s(e.blockLen);
      }
      function l(e, n = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (n && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      t.d(n, { Q: () => O });
      let o = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        _ = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        c = (e, n) => (e << (32 - n)) | (e >>> n),
        y = (e, n) => (e << n) | ((e >>> (32 - n)) >>> 0),
        f = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        h = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255);
      function w(e) {
        for (let n = 0; n < e.length; n++) e[n] = h(e[n]);
      }
      let m = async () => {};
      async function p(e, n, t) {
        let a = Date.now();
        for (let r = 0; r < e; r++) {
          t(r);
          let e = Date.now() - a;
          (e >= 0 && e < n) || (await m(), (a += e));
        }
      }
      function b(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          i(e),
          e
        );
      }
      class g {
        clone() {
          return this._cloneInto();
        }
      }
      let M = {}.toString;
      function S(e, n) {
        if (void 0 !== n && "[object Object]" !== M.call(n))
          throw Error("Options should be object or undefined");
        return Object.assign(e, n);
      }
      let L = (e, n, t) => (e & n) ^ (~e & t),
        A = (e, n, t) => (e & n) ^ (e & t) ^ (n & t);
      class v extends g {
        constructor(e, n, t, a) {
          super(),
            (this.blockLen = e),
            (this.outputLen = n),
            (this.padOffset = t),
            (this.isLE = a),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = _(this.buffer));
        }
        update(e) {
          l(this);
          let { view: n, buffer: t, blockLen: a } = this,
            r = (e = b(e)).length;
          for (let u = 0; u < r; ) {
            let s = Math.min(a - this.pos, r - u);
            if (s === a) {
              let n = _(e);
              for (; a <= r - u; u += a) this.process(n, u);
              continue;
            }
            t.set(e.subarray(u, u + s), this.pos),
              (this.pos += s),
              (u += s),
              this.pos === a && (this.process(n, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          l(this);
          i(e);
          let n = this.outputLen;
          if (e.length < n)
            throw Error(
              `digestInto() expects output buffer of length at least ${n}`,
            );
          this.finished = !0;
          let { buffer: t, view: a, blockLen: r, isLE: u } = this,
            { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > r - s && (this.process(a, 0), (s = 0));
          for (let e = s; e < r; e++) t[e] = 0;
          !(function (e, n, t, a) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(n, t, a);
            let r = BigInt(32),
              u = BigInt(0xffffffff),
              s = Number((t >> r) & u),
              i = Number(t & u),
              d = 4 * !!a,
              l = 4 * !a;
            e.setUint32(n + d, s, a), e.setUint32(n + l, i, a);
          })(a, r - 8, BigInt(8 * this.length), u),
            this.process(a, 0);
          let d = _(e),
            o = this.outputLen;
          if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = o / 4,
            y = this.get();
          if (c > y.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) d.setUint32(4 * e, y[e], u);
        }
        digest() {
          let { buffer: e, outputLen: n } = this;
          this.digestInto(e);
          let t = e.slice(0, n);
          return this.destroy(), t;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: n,
            buffer: t,
            length: a,
            finished: r,
            destroyed: u,
            pos: s,
          } = this;
          return (
            (e.length = a),
            (e.pos = s),
            (e.finished = r),
            (e.destroyed = u),
            a % n && e.buffer.set(t),
            e
          );
        }
      }
      let C = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        E = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        G = new Uint32Array(64);
      class I extends v {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | E[0]),
            (this.B = 0 | E[1]),
            (this.C = 0 | E[2]),
            (this.D = 0 | E[3]),
            (this.E = 0 | E[4]),
            (this.F = 0 | E[5]),
            (this.G = 0 | E[6]),
            (this.H = 0 | E[7]);
        }
        get() {
          let { A: e, B: n, C: t, D: a, E: r, F: u, G: s, H: i } = this;
          return [e, n, t, a, r, u, s, i];
        }
        set(e, n, t, a, r, u, s, i) {
          (this.A = 0 | e),
            (this.B = 0 | n),
            (this.C = 0 | t),
            (this.D = 0 | a),
            (this.E = 0 | r),
            (this.F = 0 | u),
            (this.G = 0 | s),
            (this.H = 0 | i);
        }
        process(e, n) {
          for (let t = 0; t < 16; t++, n += 4) G[t] = e.getUint32(n, !1);
          for (let e = 16; e < 64; e++) {
            let n = G[e - 15],
              t = G[e - 2],
              a = c(n, 7) ^ c(n, 18) ^ (n >>> 3),
              r = c(t, 17) ^ c(t, 19) ^ (t >>> 10);
            G[e] = (r + G[e - 7] + a + G[e - 16]) | 0;
          }
          let { A: t, B: a, C: r, D: u, E: s, F: i, G: d, H: l } = this;
          for (let e = 0; e < 64; e++) {
            let n =
                (l +
                  (c(s, 6) ^ c(s, 11) ^ c(s, 25)) +
                  L(s, i, d) +
                  C[e] +
                  G[e]) |
                0,
              o = ((c(t, 2) ^ c(t, 13) ^ c(t, 22)) + A(t, a, r)) | 0;
            (l = d),
              (d = i),
              (i = s),
              (s = (u + n) | 0),
              (u = r),
              (r = a),
              (a = t),
              (t = (n + o) | 0);
          }
          (t = (t + this.A) | 0),
            (a = (a + this.B) | 0),
            (r = (r + this.C) | 0),
            (u = (u + this.D) | 0),
            (s = (s + this.E) | 0),
            (i = (i + this.F) | 0),
            (d = (d + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(t, a, r, u, s, i, d, l);
        }
        roundClean() {
          G.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let T =
        ((a = () => new I()),
        ((r = (e) => a().update(b(e)).digest()).outputLen = (u =
          a()).outputLen),
        (r.blockLen = u.blockLen),
        (r.create = () => a()),
        r);
      class k extends g {
        constructor(e, n) {
          super(), (this.finished = !1), (this.destroyed = !1), d(e);
          const t = b(n);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const a = this.blockLen,
            r = new Uint8Array(a);
          r.set(t.length > a ? e.create().update(t).digest() : t);
          for (let e = 0; e < r.length; e++) r[e] ^= 54;
          this.iHash.update(r), (this.oHash = e.create());
          for (let e = 0; e < r.length; e++) r[e] ^= 106;
          this.oHash.update(r), r.fill(0);
        }
        update(e) {
          return l(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          l(this),
            i(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: n,
            iHash: t,
            finished: a,
            destroyed: r,
            blockLen: u,
            outputLen: s,
          } = this;
          return (
            (e.finished = a),
            (e.destroyed = r),
            (e.blockLen = u),
            (e.outputLen = s),
            (e.oHash = n._cloneInto(e.oHash)),
            (e.iHash = t._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let x = (e, n, t) => new k(e, n).update(t).digest();
      function B(e, n, t, a) {
        var r;
        let u,
          {
            c: i,
            dkLen: l,
            DK: o,
            PRF: c,
            PRFSalt: y,
          } = (function (e, n, t, a) {
            d(e);
            let {
              c: r,
              dkLen: u,
              asyncTick: i,
            } = S({ dkLen: 32, asyncTick: 10 }, a);
            if ((s(r), s(u), s(i), r < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let l = b(n),
              o = b(t),
              _ = new Uint8Array(u),
              c = x.create(e, l),
              y = c._cloneInto().update(o);
            return { c: r, dkLen: u, asyncTick: i, DK: _, PRF: c, PRFSalt: y };
          })(e, n, t, a),
          f = new Uint8Array(4),
          h = _(f),
          w = new Uint8Array(c.outputLen);
        for (let e = 1, n = 0; n < l; e++, n += c.outputLen) {
          let t = o.subarray(n, n + c.outputLen);
          h.setInt32(0, e, !1),
            (u = y._cloneInto(u)).update(f).digestInto(w),
            t.set(w.subarray(0, t.length));
          for (let e = 1; e < i; e++) {
            c._cloneInto(u).update(w).digestInto(w);
            for (let e = 0; e < t.length; e++) t[e] ^= w[e];
          }
        }
        return (
          (r = u), c.destroy(), y.destroy(), r && r.destroy(), w.fill(0), o
        );
      }
      function N(e, n, t, a, r, u) {
        let s = e[n++] ^ t[a++],
          i = e[n++] ^ t[a++],
          d = e[n++] ^ t[a++],
          l = e[n++] ^ t[a++],
          o = e[n++] ^ t[a++],
          _ = e[n++] ^ t[a++],
          c = e[n++] ^ t[a++],
          f = e[n++] ^ t[a++],
          h = e[n++] ^ t[a++],
          w = e[n++] ^ t[a++],
          m = e[n++] ^ t[a++],
          p = e[n++] ^ t[a++],
          b = e[n++] ^ t[a++],
          g = e[n++] ^ t[a++],
          M = e[n++] ^ t[a++],
          S = e[n++] ^ t[a++],
          L = s,
          A = i,
          v = d,
          C = l,
          E = o,
          G = _,
          I = c,
          T = f,
          k = h,
          x = w,
          B = m,
          N = p,
          H = b,
          O = g,
          R = M,
          D = S;
        for (let e = 0; e < 8; e += 2)
          (E ^= y((L + H) | 0, 7)),
            (k ^= y((E + L) | 0, 9)),
            (H ^= y((k + E) | 0, 13)),
            (L ^= y((H + k) | 0, 18)),
            (x ^= y((G + A) | 0, 7)),
            (O ^= y((x + G) | 0, 9)),
            (A ^= y((O + x) | 0, 13)),
            (G ^= y((A + O) | 0, 18)),
            (R ^= y((B + I) | 0, 7)),
            (v ^= y((R + B) | 0, 9)),
            (I ^= y((v + R) | 0, 13)),
            (B ^= y((I + v) | 0, 18)),
            (C ^= y((D + N) | 0, 7)),
            (T ^= y((C + D) | 0, 9)),
            (N ^= y((T + C) | 0, 13)),
            (D ^= y((N + T) | 0, 18)),
            (A ^= y((L + C) | 0, 7)),
            (v ^= y((A + L) | 0, 9)),
            (C ^= y((v + A) | 0, 13)),
            (L ^= y((C + v) | 0, 18)),
            (I ^= y((G + E) | 0, 7)),
            (T ^= y((I + G) | 0, 9)),
            (E ^= y((T + I) | 0, 13)),
            (G ^= y((E + T) | 0, 18)),
            (N ^= y((B + x) | 0, 7)),
            (k ^= y((N + B) | 0, 9)),
            (x ^= y((k + N) | 0, 13)),
            (B ^= y((x + k) | 0, 18)),
            (H ^= y((D + R) | 0, 7)),
            (O ^= y((H + D) | 0, 9)),
            (R ^= y((O + H) | 0, 13)),
            (D ^= y((R + O) | 0, 18));
        (r[u++] = (s + L) | 0),
          (r[u++] = (i + A) | 0),
          (r[u++] = (d + v) | 0),
          (r[u++] = (l + C) | 0),
          (r[u++] = (o + E) | 0),
          (r[u++] = (_ + G) | 0),
          (r[u++] = (c + I) | 0),
          (r[u++] = (f + T) | 0),
          (r[u++] = (h + k) | 0),
          (r[u++] = (w + x) | 0),
          (r[u++] = (m + B) | 0),
          (r[u++] = (p + N) | 0),
          (r[u++] = (b + H) | 0),
          (r[u++] = (g + O) | 0),
          (r[u++] = (M + R) | 0),
          (r[u++] = (S + D) | 0);
      }
      function H(e, n, t, a, r) {
        let u = a + 0,
          s = a + 16 * r;
        for (let a = 0; a < 16; a++) t[s + a] = e[n + (2 * r - 1) * 16 + a];
        for (let a = 0; a < r; a++, u += 16, n += 16)
          N(t, s, e, n, t, u), a > 0 && (s += 16), N(t, u, e, (n += 16), t, s);
      }
      async function O(e, n, t) {
        let a,
          {
            N: r,
            r: u,
            p: i,
            dkLen: d,
            blockSize32: l,
            V: _,
            B32: c,
            B: y,
            tmp: h,
            blockMixCb: m,
            asyncTick: b,
          } = (function (e, n, t) {
            let {
              N: a,
              r,
              p: u,
              dkLen: i,
              asyncTick: d,
              maxmem: l,
              onProgress: _,
            } = S({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, t);
            if (
              (s(a),
              s(r),
              s(u),
              s(i),
              s(d),
              s(l),
              void 0 !== _ && "function" != typeof _)
            )
              throw Error("progressCb should be function");
            let c = 128 * r,
              y = c / 4;
            if (a <= 1 || (a & (a - 1)) != 0 || a > 0x100000000)
              throw Error(
                "Scrypt: N must be larger than 1, a power of 2, and less than 2^32",
              );
            if (u < 0 || u > ((0x100000000 - 1) * 32) / c)
              throw Error(
                "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
              );
            if (i < 0 || i > (0x100000000 - 1) * 32)
              throw Error(
                "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
              );
            let f = c * (a + u);
            if (f > l)
              throw Error(
                `Scrypt: parameters too large, ${f} (128 * r * (N + p)) > ${l} (maxmem)`,
              );
            let h = B(T, e, n, { c: 1, dkLen: c * u }),
              w = o(h),
              m = o(new Uint8Array(c * a)),
              p = o(new Uint8Array(c)),
              b = () => {};
            if (_) {
              let e = 2 * a * u,
                n = Math.max(Math.floor(e / 1e4), 1),
                t = 0;
              b = () => {
                t++, _ && (!(t % n) || t === e) && _(t / e);
              };
            }
            return {
              N: a,
              r,
              p: u,
              dkLen: i,
              blockSize32: y,
              V: m,
              B32: w,
              B: h,
              tmp: p,
              blockMixCb: b,
              asyncTick: d,
            };
          })(e, n, t);
        f || w(c);
        for (let e = 0; e < i; e++) {
          let n = l * e;
          for (let e = 0; e < l; e++) _[e] = c[n + e];
          let t = 0;
          await p(r - 1, b, () => {
            H(_, t, _, (t += l), u), m();
          }),
            H(_, (r - 1) * l, c, n, u),
            m(),
            await p(r, b, () => {
              let e = c[n + l - 16] % r;
              for (let t = 0; t < l; t++) h[t] = c[n + t] ^ _[e * l + t];
              H(h, 0, c, n, u), m();
            });
        }
        return (
          f || w(c),
          (a = B(T, e, y, { c: 1, dkLen: d })),
          y.fill(0),
          _.fill(0),
          h.fill(0),
          a
        );
      }
      x.create = (e, n) => new k(e, n);
    },
    120330(e, n, t) {
      t.d(n, {
        BT: () => i,
        Wt: () => l,
        bf: () => s,
        xC: () =>
          function e(n) {
            if ("number" == typeof n) return new a.W(n);
            if ("bigint" == typeof n) return new a.W(n.toString());
            if (
              ((0, u.V1)(
                "symbol" != typeof n,
                "Symbol is not supported",
                TypeError,
              ),
              void 0 === n)
            )
              return new a.W(NaN);
            if (null === n || 0 === n) return r;
            if (!0 === n) return new a.W(1);
            if ("string" == typeof n)
              try {
                return new a.W(n);
              } catch {
                return new a.W(NaN);
              }
            (0, u.V1)("object" == typeof n, "object expected", TypeError);
            let t = (function (e, n) {
              if ("object" == typeof e && null != e) {
                let t,
                  a = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                if (void 0 !== a) {
                  void 0 === n
                    ? (t = "default")
                    : "string" === n
                      ? (t = "string")
                      : ((0, u.V1)(
                          "number" === n,
                          'preferredType must be "string" or "number"',
                        ),
                        (t = "number"));
                  let r = a.call(e, t);
                  if ("object" != typeof r) return r;
                  throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let t of (void 0 === n && (n = "number"),
                "string" === n
                  ? ["toString", "valueOf"]
                  : ["valueOf", "toString"])) {
                  let n = e[t];
                  if (d(n)) {
                    let t = n.call(e);
                    if ("object" != typeof t) return t;
                  }
                }
                throw TypeError("Cannot convert object to primitive value");
              }
              return e;
            })(n, "number");
            return (
              (0, u.V1)("object" != typeof t, "object expected", TypeError),
              e(t)
            );
          },
      });
      var a = t(162929);
      new a.W(10);
      let r = new a.W(0);
      new a.W(-0);
      var u = t(243399);
      function s(e) {
        if ("symbol" == typeof e)
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(e);
      }
      function i(e) {
        if (null == e)
          throw TypeError("undefined/null cannot be converted to object");
        return Object(e);
      }
      function d(e) {
        return "function" == typeof e;
      }
      function l(e, n, t) {
        if (!d(e)) return !1;
        if (t?.boundTargetFunction) return n instanceof t?.boundTargetFunction;
        if ("object" != typeof n) return !1;
        let a = e.prototype;
        if ("object" != typeof a)
          throw TypeError(
            "OrdinaryHasInstance called on an object with an invalid prototype property.",
          );
        return Object.prototype.isPrototypeOf.call(a, n);
      }
    },
    842830(e, n, t) {
      t.d(n, { N: () => a });
      function a(e) {
        return Intl.getCanonicalLocales(e);
      }
    },
    97626(e, n, t) {
      t.d(n, { z: () => a });
      function a(e, n, t, a, r) {
        var u = e[n];
        if (void 0 === u) return r;
        let s = Number(u);
        if (isNaN(s) || s < t || s > a)
          throw RangeError(`${s} is outside of range [${t}, ${a}]`);
        return Math.floor(s);
      }
    },
    518375(e, n, t) {
      t.d(n, { W: () => r });
      var a = t(120330);
      function r(e, n, t, r, u) {
        if ("object" != typeof e) throw TypeError("Options must be an object");
        let s = e[n];
        if (void 0 !== s) {
          if ("boolean" !== t && "string" !== t)
            throw TypeError("invalid type");
          if (
            ("boolean" === t && (s = !!s),
            "string" === t && (s = (0, a.bf)(s)),
            void 0 !== r && !r.filter((e) => e == s).length)
          )
            throw RangeError(`${s} is not within ${r.join(", ")}`);
          return s;
        }
        return u;
      }
    },
    29685(e, n, t) {
      t.d(n, { U: () => i });
      var a = t(183580),
        r = t(26232),
        u = t(120330),
        s = t(518375);
      function i(e, n, t) {
        return (
          void 0 !== t &&
            ((t = (0, u.BT)(t)),
            (0, s.W)(
              t,
              "localeMatcher",
              "string",
              ["lookup", "best fit"],
              "best fit",
            )),
          (function (e, n) {
            let t = [];
            for (let u of n) {
              let n = u.replace(r.KB, ""),
                s = (0, a.q)(e, n);
              s && t.push(s);
            }
            return t;
          })(Array.from(e), n)
        );
      }
    },
    243399(e, n, t) {
      t.d(n, { A4: () => s, Nt: () => u, V1: () => r });
      var a = t(315847);
      function r(e, n, t = Error) {
        if (!e) throw new t(n);
      }
      let u = (0, a.B)((...e) => new Intl.NumberFormat(...e), {
        strategy: a.W.variadic,
      });
      (0, a.B)((...e) => new Intl.PluralRules(...e), {
        strategy: a.W.variadic,
      }),
        (0, a.B)((...e) => new Intl.Locale(...e), { strategy: a.W.variadic });
      let s = (0, a.B)((...e) => new Intl.ListFormat(...e), {
        strategy: a.W.variadic,
      });
    },
    315847(e, n, t) {
      function a(e, n) {
        let t = n && n.cache ? n.cache : d,
          a = n && n.serializer ? n.serializer : s;
        return (
          n && n.strategy
            ? n.strategy
            : function (e, n) {
                var t, a;
                let s = 1 === e.length ? r : u;
                return (
                  (t = n.cache.create()),
                  (a = n.serializer),
                  s.bind(this, e, t, a)
                );
              }
        )(e, { cache: t, serializer: a });
      }
      function r(e, n, t, a) {
        let r =
            null == a || "number" == typeof a || "boolean" == typeof a
              ? a
              : t(a),
          u = n.get(r);
        return void 0 === u && ((u = e.call(this, a)), n.set(r, u)), u;
      }
      function u(e, n, t) {
        let a = Array.prototype.slice.call(arguments, 3),
          r = t(a),
          u = n.get(r);
        return void 0 === u && ((u = e.apply(this, a)), n.set(r, u)), u;
      }
      t.d(n, { B: () => a, W: () => l });
      let s = function () {
        return JSON.stringify(arguments);
      };
      class i {
        cache;
        constructor() {
          this.cache = Object.create(null);
        }
        get(e) {
          return this.cache[e];
        }
        set(e, n) {
          this.cache[e] = n;
        }
      }
      let d = {
          create: function () {
            return new i();
          },
        },
        l = {
          variadic: function (e, n) {
            var t, a;
            return (
              (t = n.cache.create()), (a = n.serializer), u.bind(this, e, t, a)
            );
          },
          monadic: function (e, n) {
            var t, a;
            return (
              (t = n.cache.create()), (a = n.serializer), r.bind(this, e, t, a)
            );
          },
        };
    },
    439489(e, n, t) {
      t.d(n, { $: () => r });
      var a = t(518375);
      function r(e, n, t, r, u, s) {
        let i = (0, a.W)(n, e, "string", r, void 0),
          d = "always";
        void 0 === i &&
          ("digital" === t
            ? ("hours" !== e &&
                "minutes" !== e &&
                "seconds" !== e &&
                (d = "auto"),
              (i = u))
            : ((d = "auto"),
              (i = "numeric" === s || "2-digit" === s ? "numeric" : t)));
        let l = `${e}Display`,
          o = (0, a.W)(n, l, "string", ["always", "auto"], d);
        if ("numeric" === s || "2-digit" === s) {
          if ("numeric" !== i && "2-digit" !== i)
            throw RangeError("Can't mix numeric and non-numeric styles");
          if (
            (("minutes" === e || "seconds" === e) && (i = "2-digit"),
            "numeric" === i &&
              "always" === o &&
              ("milliseconds" === e ||
                "microseconds" === e ||
                "nanoseconds" === e))
          )
            throw RangeError(
              "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
            );
        }
        return { style: i, display: o };
      }
    },
    369364(e, n, t) {
      t.d(n, { m: () => i });
      var a = t(243399),
        r = t(206311),
        u = t(411211),
        s = t(501974);
      function i(e, n) {
        let t = [],
          i = !1,
          d = !1,
          l = (0, s.n)(e),
          o = l.dataLocale,
          _ = u.Y.localeData[o];
        if (!_) throw TypeError("Invalid locale");
        let c = l.numberingSystem,
          y = _.digitalFormat[c];
        for (let e = 0; e < r.u.length && !i; e++) {
          let u = r.u[e],
            s = n[u.valueField],
            o = l[u.styleSlot],
            _ = l[u.displaySlot],
            { unit: c, numberFormatUnit: f } = u,
            h = Object.create(null);
          ("seconds" === c || "milliseconds" === c || "microseconds" === c) &&
            "numeric" ===
              ("seconds" === c
                ? l.milliseconds
                : "milliseconds" === c
                  ? l.microseconds
                  : l.nanoseconds) &&
            ("seconds" === c
              ? (s +=
                  n.milliseconds / 1e3 +
                  n.microseconds / 1e6 +
                  n.nanoseconds / 1e9)
              : "milliseconds" === c
                ? (s += n.microseconds / 1e3 + n.nanoseconds / 1e6)
                : (s += n.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
              ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
              : ((h.maximumFractionDigits = l.fractionalDigits),
                (h.minimumFractionDigits = l.fractionalDigits)),
            (h.roundingMode = "trunc"),
            (i = !0));
          if (0 !== s || "auto" !== _) {
            let e;
            (h.numberingSystem = l.numberingSystem),
              "2-digit" === o && (h.minimumIntegerDigits = 2),
              "2-digit" !== o &&
                "numeric" !== o &&
                ((h.style = "unit"), (h.unit = f), (h.unitDisplay = o));
            let n = (0, a.Nt)(l.locale, h);
            d
              ? (e = t[t.length - 1]).push({ type: "literal", value: y })
              : (e = []),
              n.formatToParts(s).forEach(({ type: n, value: t }) => {
                e.push({ type: n, value: t, unit: f });
              }),
              d ||
                (("2-digit" === o || "numeric" === o) && (d = !0), t.push(e));
          } else d = !1;
        }
        let f = Object.create(null);
        f.type = "unit";
        let h = l.style;
        "digital" === h && (h = "short"), (f.style = h);
        let w = (0, a.A4)(l.locale, f),
          m = [];
        for (let e of t) {
          let n = "";
          for (let { value: t } of e) n += t;
          m.push(n);
        }
        let p = w.formatToParts(m),
          b = 0,
          g = t.length,
          M = [];
        for (let { type: e, value: n } of p)
          if ("element" === e) {
            for (let e of ((0, a.V1)(b < g, "Index out of bounds"), t[b]))
              M.push(e);
            b++;
          } else
            (0, a.V1)("literal" === e, "Type must be literal"),
              M.push({ type: "literal", value: n });
        return M;
      }
      t(632459);
    },
    727504(e, n, t) {
      t.d(n, { H: () => i }), t(632459);
      var a = t(243399),
        r = t(206311),
        u = t(120330);
      function s(e) {
        let n = (0, u.xC)(e);
        return (0, a.V1)(n.isInteger(), `${e} is not an integer`), n.toNumber();
      }
      function i(e) {
        if ("object" != typeof e) {
          if ("string" == typeof e) throw RangeError("Invalid duration format");
          throw TypeError("Invalid duration");
        }
        let n = {
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          microseconds: 0,
          nanoseconds: 0,
        };
        if (
          (void 0 !== e.days && (n.days = s(e.days)),
          void 0 !== e.hours && (n.hours = s(e.hours)),
          void 0 !== e.microseconds && (n.microseconds = s(e.microseconds)),
          void 0 !== e.milliseconds && (n.milliseconds = s(e.milliseconds)),
          void 0 !== e.minutes && (n.minutes = s(e.minutes)),
          void 0 !== e.months && (n.months = s(e.months)),
          void 0 !== e.nanoseconds && (n.nanoseconds = s(e.nanoseconds)),
          void 0 !== e.seconds && (n.seconds = s(e.seconds)),
          void 0 !== e.weeks && (n.weeks = s(e.weeks)),
          void 0 !== e.years && (n.years = s(e.years)),
          void 0 === e.years &&
            void 0 === e.months &&
            void 0 === e.weeks &&
            void 0 === e.days &&
            void 0 === e.hours &&
            void 0 === e.minutes &&
            void 0 === e.seconds &&
            void 0 === e.milliseconds &&
            void 0 === e.microseconds &&
            void 0 === e.nanoseconds)
        )
          throw TypeError("Invalid duration format");
        if (
          !(function (e) {
            let n = (function (e) {
              for (let n of r.B) {
                if (e[n] < 0) return -1;
                if (e[n] > 0) return 1;
              }
              return 0;
            })(e);
            for (let t of r.B) {
              let r = e[t];
              if (
                ((0, a.V1)(isFinite(Number(r)), `${t} is not finite`),
                (r < 0 && n > 0) || (r > 0 && n < 0))
              )
                return !1;
            }
            return !0;
          })(n)
        )
          throw RangeError("Invalid duration format");
        return n;
      }
    },
    206311(e, n, t) {
      t.d(n, { B: () => a, u: () => r }), t(632459);
      let a = [
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
          "microseconds",
          "nanoseconds",
        ],
        r = [
          {
            valueField: "years",
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            numberFormatUnit: "year",
          },
          {
            valueField: "months",
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            numberFormatUnit: "month",
          },
          {
            valueField: "weeks",
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            numberFormatUnit: "week",
          },
          {
            valueField: "days",
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            numberFormatUnit: "day",
          },
          {
            valueField: "hours",
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            numberFormatUnit: "hour",
          },
          {
            valueField: "minutes",
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            numberFormatUnit: "minute",
          },
          {
            valueField: "seconds",
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            numberFormatUnit: "second",
          },
          {
            valueField: "milliseconds",
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            numberFormatUnit: "millisecond",
          },
          {
            valueField: "microseconds",
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            numberFormatUnit: "microsecond",
          },
          {
            valueField: "nanoseconds",
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            numberFormatUnit: "nanosecond",
          },
        ];
    },
    501974(e, n, t) {
      t.d(n, { n: () => r });
      let a = new WeakMap();
      function r(e) {
        let n = a.get(e);
        return n || ((n = Object.create(null)), a.set(e, n)), n;
      }
    },
    225441(e, n, t) {
      t.d(n, { P: () => a });
      let a = [
        "adlm",
        "ahom",
        "arab",
        "arabext",
        "armn",
        "armnlow",
        "bali",
        "beng",
        "bhks",
        "brah",
        "cakm",
        "cham",
        "cyrl",
        "deva",
        "diak",
        "ethi",
        "fullwide",
        "gara",
        "geor",
        "gong",
        "gonm",
        "grek",
        "greklow",
        "gujr",
        "gukh",
        "guru",
        "hanidays",
        "hanidec",
        "hans",
        "hansfin",
        "hant",
        "hantfin",
        "hebr",
        "hmng",
        "hmnp",
        "java",
        "jpan",
        "jpanfin",
        "jpanyear",
        "kali",
        "kawi",
        "khmr",
        "knda",
        "krai",
        "lana",
        "lanatham",
        "laoo",
        "latn",
        "lepc",
        "limb",
        "mathbold",
        "mathdbl",
        "mathmono",
        "mathsanb",
        "mathsans",
        "mlym",
        "modi",
        "mong",
        "mroo",
        "mtei",
        "mymr",
        "mymrepka",
        "mymrpao",
        "mymrshan",
        "mymrtlng",
        "nagm",
        "newa",
        "nkoo",
        "olck",
        "onao",
        "orya",
        "osma",
        "outlined",
        "rohg",
        "roman",
        "romanlow",
        "saur",
        "segment",
        "shrd",
        "sind",
        "sinh",
        "sora",
        "sund",
        "sunu",
        "takr",
        "talu",
        "taml",
        "tamldec",
        "telu",
        "thai",
        "tibt",
        "tirh",
        "tnsa",
        "tols",
        "vaii",
        "wara",
        "wcho",
      ];
    },
    762437(e, n, t) {
      t.d(n, { N: () => a });
      let a = {
        default: ":",
        localeData: {
          aa: { nu: ["latn"] },
          "aa-DJ": { nu: ["latn"] },
          "aa-ER": { nu: ["latn"] },
          ab: { nu: ["latn"] },
          af: { nu: ["latn"] },
          "af-NA": { nu: ["latn"] },
          agq: { nu: ["latn"] },
          ak: { nu: ["latn"] },
          am: { nu: ["latn"] },
          an: { nu: ["latn"] },
          ann: { nu: ["latn"] },
          apc: { nu: ["latn"] },
          ar: { nu: ["latn", "latn"] },
          "ar-AE": { nu: ["latn", "latn"] },
          "ar-BH": { nu: ["arab", "latn"] },
          "ar-DJ": { nu: ["arab", "latn"] },
          "ar-DZ": { nu: ["latn", "latn"] },
          "ar-EG": { nu: ["arab", "latn"] },
          "ar-EH": { nu: ["latn", "latn"] },
          "ar-ER": { nu: ["arab", "latn"] },
          "ar-IL": { nu: ["arab", "latn"] },
          "ar-IQ": { nu: ["arab", "latn"] },
          "ar-JO": { nu: ["arab", "latn"] },
          "ar-KM": { nu: ["arab", "latn"] },
          "ar-KW": { nu: ["arab", "latn"] },
          "ar-LB": { nu: ["arab", "latn"] },
          "ar-LY": { nu: ["latn", "latn"] },
          "ar-MA": { nu: ["latn", "latn"] },
          "ar-MR": { nu: ["arab", "latn"] },
          "ar-OM": { nu: ["arab", "latn"] },
          "ar-PS": { nu: ["arab", "latn"] },
          "ar-QA": { nu: ["arab", "latn"] },
          "ar-SA": { nu: ["arab", "latn"] },
          "ar-SD": { nu: ["arab", "latn"] },
          "ar-SO": { nu: ["arab", "latn"] },
          "ar-SS": { nu: ["arab", "latn"] },
          "ar-SY": { nu: ["arab", "latn"] },
          "ar-TD": { nu: ["arab", "latn"] },
          "ar-TN": { nu: ["latn", "latn"] },
          "ar-YE": { nu: ["arab", "latn"] },
          arn: { nu: ["latn"] },
          as: { nu: ["beng"] },
          asa: { nu: ["latn"] },
          ast: { nu: ["latn"] },
          az: { nu: ["latn"] },
          "az-Arab": { nu: ["arabext"] },
          "az-Arab-IQ": { nu: ["arabext"] },
          "az-Arab-TR": { nu: ["arabext"] },
          "az-Cyrl": { nu: ["latn"] },
          "az-Latn": { nu: ["latn"] },
          ba: { nu: ["latn"] },
          bal: { nu: ["latn"] },
          "bal-Arab": { nu: ["latn"] },
          "bal-Latn": { nu: ["latn"] },
          bas: { nu: ["latn"] },
          be: { nu: ["latn"] },
          "be-tarask": { nu: ["latn"] },
          bem: { nu: ["latn"] },
          bew: { nu: ["latn"] },
          bez: { nu: ["latn"] },
          bg: { nu: ["latn"] },
          bgc: { nu: ["deva"] },
          bgn: { nu: ["arabext"] },
          "bgn-AE": { nu: ["arabext"] },
          "bgn-AF": { nu: ["arabext"] },
          "bgn-IR": { nu: ["arabext"] },
          "bgn-OM": { nu: ["arabext"] },
          bho: { nu: ["deva"] },
          blo: { nu: ["latn"] },
          blt: { nu: ["latn"] },
          bm: { nu: ["latn"] },
          "bm-Nkoo": { nu: ["latn"] },
          bn: { nu: ["beng"] },
          "bn-IN": { nu: ["beng"] },
          bo: { nu: ["latn"] },
          "bo-IN": { nu: ["latn"] },
          bqi: { nu: ["latn"] },
          br: { nu: ["latn"] },
          brx: { nu: ["latn"] },
          bs: { nu: ["latn"] },
          "bs-Cyrl": { nu: ["latn"] },
          "bs-Latn": { nu: ["latn"] },
          bss: { nu: ["latn"] },
          bua: { nu: ["latn"] },
          byn: { nu: ["latn"] },
          ca: { nu: ["latn"] },
          "ca-AD": { nu: ["latn"] },
          "ca-ES-valencia": { nu: ["latn"] },
          "ca-FR": { nu: ["latn"] },
          "ca-IT": { nu: ["latn"] },
          cad: { nu: ["latn"] },
          cch: { nu: ["latn"] },
          ccp: { nu: ["cakm"] },
          "ccp-IN": { nu: ["cakm"] },
          ce: { nu: ["latn"] },
          ceb: { nu: ["latn"] },
          cgg: { nu: ["latn"] },
          cho: { nu: ["latn"] },
          chr: { nu: ["latn"] },
          cic: { nu: ["latn"] },
          ckb: { nu: ["arab"] },
          "ckb-IR": { nu: ["arab"] },
          co: { nu: ["latn"] },
          cop: { nu: ["latn"] },
          cs: { nu: ["latn"] },
          csw: { nu: ["latn"] },
          cu: { nu: ["latn"] },
          cv: { nu: ["latn"] },
          cy: { nu: ["latn"] },
          da: { nu: ["latn"], separator: { latn: "." } },
          "da-GL": { nu: ["latn"], separator: { latn: "." } },
          dav: { nu: ["latn"] },
          de: { nu: ["latn"] },
          "de-AT": { nu: ["latn"] },
          "de-BE": { nu: ["latn"] },
          "de-CH": { nu: ["latn"] },
          "de-IT": { nu: ["latn"] },
          "de-LI": { nu: ["latn"] },
          "de-LU": { nu: ["latn"] },
          dje: { nu: ["latn"] },
          doi: { nu: ["latn"] },
          dsb: { nu: ["latn"] },
          dua: { nu: ["latn"] },
          dv: { nu: ["latn"] },
          dyo: { nu: ["latn"] },
          dz: { nu: ["tibt"] },
          ebu: { nu: ["latn"] },
          ee: { nu: ["latn"] },
          "ee-TG": { nu: ["latn"] },
          el: { nu: ["latn"] },
          "el-CY": { nu: ["latn"] },
          "el-polyton": { nu: ["latn"] },
          en: { nu: ["latn"] },
          "en-001": { nu: ["latn"] },
          "en-150": { nu: ["latn"] },
          "en-AE": { nu: ["latn"] },
          "en-AG": { nu: ["latn"] },
          "en-AI": { nu: ["latn"] },
          "en-AS": { nu: ["latn"] },
          "en-AT": { nu: ["latn"] },
          "en-AU": { nu: ["latn"] },
          "en-BB": { nu: ["latn"] },
          "en-BE": { nu: ["latn"] },
          "en-BI": { nu: ["latn"] },
          "en-BM": { nu: ["latn"] },
          "en-BS": { nu: ["latn"] },
          "en-BW": { nu: ["latn"] },
          "en-BZ": { nu: ["latn"] },
          "en-CA": { nu: ["latn"] },
          "en-CC": { nu: ["latn"] },
          "en-CH": { nu: ["latn"] },
          "en-CK": { nu: ["latn"] },
          "en-CM": { nu: ["latn"] },
          "en-CX": { nu: ["latn"] },
          "en-CY": { nu: ["latn"] },
          "en-CZ": { nu: ["latn"] },
          "en-DE": { nu: ["latn"] },
          "en-DG": { nu: ["latn"] },
          "en-DK": { nu: ["latn"], separator: { latn: "." } },
          "en-DM": { nu: ["latn"] },
          "en-Dsrt": { nu: ["latn"] },
          "en-EE": { nu: ["latn"] },
          "en-ER": { nu: ["latn"] },
          "en-ES": { nu: ["latn"] },
          "en-FI": { nu: ["latn"], separator: { latn: "." } },
          "en-FJ": { nu: ["latn"] },
          "en-FK": { nu: ["latn"] },
          "en-FM": { nu: ["latn"] },
          "en-FR": { nu: ["latn"] },
          "en-GB": { nu: ["latn"] },
          "en-GD": { nu: ["latn"] },
          "en-GE": { nu: ["latn"] },
          "en-GG": { nu: ["latn"] },
          "en-GH": { nu: ["latn"] },
          "en-GI": { nu: ["latn"] },
          "en-GM": { nu: ["latn"] },
          "en-GS": { nu: ["latn"] },
          "en-GU": { nu: ["latn"] },
          "en-GY": { nu: ["latn"] },
          "en-HK": { nu: ["latn"] },
          "en-HU": { nu: ["latn"] },
          "en-ID": { nu: ["latn"] },
          "en-IE": { nu: ["latn"] },
          "en-IL": { nu: ["latn"] },
          "en-IM": { nu: ["latn"] },
          "en-IN": { nu: ["latn"] },
          "en-IO": { nu: ["latn"] },
          "en-IT": { nu: ["latn"] },
          "en-JE": { nu: ["latn"] },
          "en-JM": { nu: ["latn"] },
          "en-JP": { nu: ["latn"] },
          "en-KE": { nu: ["latn"] },
          "en-KI": { nu: ["latn"] },
          "en-KN": { nu: ["latn"] },
          "en-KY": { nu: ["latn"] },
          "en-LC": { nu: ["latn"] },
          "en-LR": { nu: ["latn"] },
          "en-LS": { nu: ["latn"] },
          "en-LT": { nu: ["latn"] },
          "en-LV": { nu: ["latn"] },
          "en-MG": { nu: ["latn"] },
          "en-MH": { nu: ["latn"] },
          "en-MO": { nu: ["latn"] },
          "en-MP": { nu: ["latn"] },
          "en-MS": { nu: ["latn"] },
          "en-MT": { nu: ["latn"] },
          "en-MU": { nu: ["latn"] },
          "en-MV": { nu: ["latn"] },
          "en-MW": { nu: ["latn"] },
          "en-MY": { nu: ["latn"] },
          "en-NA": { nu: ["latn"] },
          "en-NF": { nu: ["latn"] },
          "en-NG": { nu: ["latn"] },
          "en-NL": { nu: ["latn"] },
          "en-NO": { nu: ["latn"] },
          "en-NR": { nu: ["latn"] },
          "en-NU": { nu: ["latn"] },
          "en-NZ": { nu: ["latn"] },
          "en-PG": { nu: ["latn"] },
          "en-PH": { nu: ["latn"] },
          "en-PK": { nu: ["latn"] },
          "en-PL": { nu: ["latn"] },
          "en-PN": { nu: ["latn"] },
          "en-PR": { nu: ["latn"] },
          "en-PT": { nu: ["latn"] },
          "en-PW": { nu: ["latn"] },
          "en-RO": { nu: ["latn"] },
          "en-RW": { nu: ["latn"] },
          "en-SB": { nu: ["latn"] },
          "en-SC": { nu: ["latn"] },
          "en-SD": { nu: ["latn"] },
          "en-SE": { nu: ["latn"] },
          "en-SG": { nu: ["latn"] },
          "en-SH": { nu: ["latn"] },
          "en-SI": { nu: ["latn"] },
          "en-SK": { nu: ["latn"] },
          "en-SL": { nu: ["latn"] },
          "en-SS": { nu: ["latn"] },
          "en-SX": { nu: ["latn"] },
          "en-SZ": { nu: ["latn"] },
          "en-Shaw": { nu: ["latn"] },
          "en-TC": { nu: ["latn"] },
          "en-TK": { nu: ["latn"] },
          "en-TO": { nu: ["latn"] },
          "en-TT": { nu: ["latn"] },
          "en-TV": { nu: ["latn"] },
          "en-TZ": { nu: ["latn"] },
          "en-UA": { nu: ["latn"] },
          "en-UG": { nu: ["latn"] },
          "en-UM": { nu: ["latn"] },
          "en-VC": { nu: ["latn"] },
          "en-VG": { nu: ["latn"] },
          "en-VI": { nu: ["latn"] },
          "en-VU": { nu: ["latn"] },
          "en-WS": { nu: ["latn"] },
          "en-ZA": { nu: ["latn"] },
          "en-ZM": { nu: ["latn"] },
          "en-ZW": { nu: ["latn"] },
          eo: { nu: ["latn"] },
          es: { nu: ["latn"] },
          "es-419": { nu: ["latn"] },
          "es-AR": { nu: ["latn"] },
          "es-BO": { nu: ["latn"] },
          "es-BR": { nu: ["latn"] },
          "es-BZ": { nu: ["latn"] },
          "es-CL": { nu: ["latn"] },
          "es-CO": { nu: ["latn"] },
          "es-CR": { nu: ["latn"] },
          "es-CU": { nu: ["latn"] },
          "es-DO": { nu: ["latn"] },
          "es-EA": { nu: ["latn"] },
          "es-EC": { nu: ["latn"] },
          "es-GQ": { nu: ["latn"] },
          "es-GT": { nu: ["latn"] },
          "es-HN": { nu: ["latn"] },
          "es-IC": { nu: ["latn"] },
          "es-MX": { nu: ["latn"] },
          "es-NI": { nu: ["latn"] },
          "es-PA": { nu: ["latn"] },
          "es-PE": { nu: ["latn"] },
          "es-PH": { nu: ["latn"] },
          "es-PR": { nu: ["latn"] },
          "es-PY": { nu: ["latn"] },
          "es-SV": { nu: ["latn"] },
          "es-US": { nu: ["latn"] },
          "es-UY": { nu: ["latn"] },
          "es-VE": { nu: ["latn"] },
          et: { nu: ["latn"] },
          eu: { nu: ["latn"] },
          ewo: { nu: ["latn"] },
          fa: { nu: ["arabext"] },
          "fa-AF": { nu: ["arabext"] },
          ff: { nu: ["latn"] },
          "ff-Adlm": { nu: ["adlm"] },
          "ff-Adlm-BF": { nu: ["adlm"] },
          "ff-Adlm-CM": { nu: ["adlm"] },
          "ff-Adlm-GH": { nu: ["adlm"] },
          "ff-Adlm-GM": { nu: ["adlm"] },
          "ff-Adlm-GW": { nu: ["adlm"] },
          "ff-Adlm-LR": { nu: ["adlm"] },
          "ff-Adlm-MR": { nu: ["adlm"] },
          "ff-Adlm-NE": { nu: ["adlm"] },
          "ff-Adlm-NG": { nu: ["adlm"] },
          "ff-Adlm-SL": { nu: ["adlm"] },
          "ff-Adlm-SN": { nu: ["adlm"] },
          "ff-Latn": { nu: ["latn"] },
          "ff-Latn-BF": { nu: ["latn"] },
          "ff-Latn-CM": { nu: ["latn"] },
          "ff-Latn-GH": { nu: ["latn"] },
          "ff-Latn-GM": { nu: ["latn"] },
          "ff-Latn-GN": { nu: ["latn"] },
          "ff-Latn-GW": { nu: ["latn"] },
          "ff-Latn-LR": { nu: ["latn"] },
          "ff-Latn-MR": { nu: ["latn"] },
          "ff-Latn-NE": { nu: ["latn"] },
          "ff-Latn-NG": { nu: ["latn"] },
          "ff-Latn-SL": { nu: ["latn"] },
          fi: { nu: ["latn"], separator: { latn: "." } },
          fil: { nu: ["latn"] },
          fo: { nu: ["latn"] },
          "fo-DK": { nu: ["latn"] },
          fr: { nu: ["latn"] },
          "fr-BE": { nu: ["latn"] },
          "fr-BF": { nu: ["latn"] },
          "fr-BI": { nu: ["latn"] },
          "fr-BJ": { nu: ["latn"] },
          "fr-BL": { nu: ["latn"] },
          "fr-CA": { nu: ["latn"] },
          "fr-CD": { nu: ["latn"] },
          "fr-CF": { nu: ["latn"] },
          "fr-CG": { nu: ["latn"] },
          "fr-CH": { nu: ["latn"] },
          "fr-CI": { nu: ["latn"] },
          "fr-CM": { nu: ["latn"] },
          "fr-DJ": { nu: ["latn"] },
          "fr-DZ": { nu: ["latn"] },
          "fr-GA": { nu: ["latn"] },
          "fr-GF": { nu: ["latn"] },
          "fr-GN": { nu: ["latn"] },
          "fr-GP": { nu: ["latn"] },
          "fr-GQ": { nu: ["latn"] },
          "fr-HT": { nu: ["latn"] },
          "fr-KM": { nu: ["latn"] },
          "fr-LU": { nu: ["latn"] },
          "fr-MA": { nu: ["latn"] },
          "fr-MC": { nu: ["latn"] },
          "fr-MF": { nu: ["latn"] },
          "fr-MG": { nu: ["latn"] },
          "fr-ML": { nu: ["latn"] },
          "fr-MQ": { nu: ["latn"] },
          "fr-MR": { nu: ["latn"] },
          "fr-MU": { nu: ["latn"] },
          "fr-NC": { nu: ["latn"] },
          "fr-NE": { nu: ["latn"] },
          "fr-PF": { nu: ["latn"] },
          "fr-PM": { nu: ["latn"] },
          "fr-RE": { nu: ["latn"] },
          "fr-RW": { nu: ["latn"] },
          "fr-SC": { nu: ["latn"] },
          "fr-SN": { nu: ["latn"] },
          "fr-SY": { nu: ["latn"] },
          "fr-TD": { nu: ["latn"] },
          "fr-TG": { nu: ["latn"] },
          "fr-TN": { nu: ["latn"] },
          "fr-VU": { nu: ["latn"] },
          "fr-WF": { nu: ["latn"] },
          "fr-YT": { nu: ["latn"] },
          frr: { nu: ["latn"] },
          fur: { nu: ["latn"] },
          fy: { nu: ["latn"] },
          ga: { nu: ["latn"] },
          "ga-GB": { nu: ["latn"] },
          gaa: { nu: ["latn"] },
          gd: { nu: ["latn"] },
          gez: { nu: ["latn"] },
          "gez-ER": { nu: ["latn"] },
          gl: { nu: ["latn"] },
          gn: { nu: ["latn"] },
          gsw: { nu: ["latn"] },
          "gsw-FR": { nu: ["latn"] },
          "gsw-LI": { nu: ["latn"] },
          gu: { nu: ["latn"] },
          guz: { nu: ["latn"] },
          gv: { nu: ["latn"] },
          ha: { nu: ["latn"] },
          "ha-Arab": { nu: ["latn"] },
          "ha-Arab-SD": { nu: ["latn"] },
          "ha-GH": { nu: ["latn"] },
          "ha-NE": { nu: ["latn"] },
          haw: { nu: ["latn"] },
          he: { nu: ["latn"] },
          hi: { nu: ["latn"] },
          "hi-Latn": { nu: ["latn"] },
          hnj: { nu: ["hmnp", "latn"] },
          "hnj-Hmnp": { nu: ["hmnp", "latn"] },
          hr: { nu: ["latn"] },
          "hr-BA": { nu: ["latn"] },
          hsb: { nu: ["latn"] },
          ht: { nu: ["latn"] },
          hu: { nu: ["latn"] },
          hy: { nu: ["latn"] },
          ia: { nu: ["latn"] },
          id: { nu: ["latn"], separator: { latn: "." } },
          ie: { nu: ["latn"] },
          ig: { nu: ["latn"] },
          ii: { nu: ["latn"] },
          io: { nu: ["latn"] },
          is: { nu: ["latn"] },
          it: { nu: ["latn"] },
          "it-CH": { nu: ["latn"] },
          "it-SM": { nu: ["latn"] },
          "it-VA": { nu: ["latn"] },
          iu: { nu: ["latn"] },
          "iu-Latn": { nu: ["latn"] },
          ja: { nu: ["latn"] },
          jbo: { nu: ["latn"] },
          jgo: { nu: ["latn"] },
          jmc: { nu: ["latn"] },
          jv: { nu: ["latn"] },
          ka: { nu: ["latn"] },
          kaa: { nu: ["latn"] },
          "kaa-Cyrl": { nu: ["latn"] },
          "kaa-Latn": { nu: ["latn"] },
          kab: { nu: ["latn"] },
          kaj: { nu: ["latn"] },
          kam: { nu: ["latn"] },
          kcg: { nu: ["latn"] },
          kde: { nu: ["latn"] },
          kea: { nu: ["latn"] },
          kek: { nu: ["latn"] },
          ken: { nu: ["latn"] },
          kgp: { nu: ["latn"] },
          khq: { nu: ["latn"] },
          ki: { nu: ["latn"] },
          kk: { nu: ["latn"] },
          "kk-Arab": { nu: ["latn"] },
          "kk-Cyrl": { nu: ["latn"] },
          "kk-KZ": { nu: ["latn"] },
          kkj: { nu: ["latn"] },
          kl: { nu: ["latn"] },
          kln: { nu: ["latn"] },
          km: { nu: ["latn"] },
          kn: { nu: ["latn"] },
          ko: { nu: ["latn"] },
          "ko-CN": { nu: ["latn"] },
          "ko-KP": { nu: ["latn"] },
          kok: { nu: ["latn"] },
          "kok-Deva": { nu: ["latn"] },
          "kok-Latn": { nu: ["latn"] },
          kpe: { nu: ["latn"] },
          "kpe-GN": { nu: ["latn"] },
          ks: { nu: ["arabext"] },
          "ks-Arab": { nu: ["arabext"] },
          "ks-Deva": { nu: ["latn"] },
          ksb: { nu: ["latn"] },
          ksf: { nu: ["latn"] },
          ksh: { nu: ["latn"] },
          ku: { nu: ["latn"] },
          "ku-Arab": { nu: ["latn"] },
          "ku-Arab-IR": { nu: ["latn"] },
          "ku-Latn": { nu: ["latn"] },
          "ku-Latn-IQ": { nu: ["latn"] },
          "ku-Latn-SY": { nu: ["latn"] },
          "ku-TR": { nu: ["latn"] },
          kw: { nu: ["latn"] },
          kxv: { nu: ["latn"] },
          "kxv-Deva": { nu: ["latn"] },
          "kxv-Latn": { nu: ["latn"] },
          "kxv-Orya": { nu: ["latn"] },
          "kxv-Telu": { nu: ["latn"] },
          ky: { nu: ["latn"] },
          la: { nu: ["latn"] },
          lag: { nu: ["latn"] },
          lb: { nu: ["latn"] },
          lg: { nu: ["latn"] },
          lij: { nu: ["latn"] },
          lkt: { nu: ["latn"] },
          lld: { nu: ["latn"] },
          lmo: { nu: ["latn"] },
          ln: { nu: ["latn"] },
          "ln-AO": { nu: ["latn"] },
          "ln-CF": { nu: ["latn"] },
          "ln-CG": { nu: ["latn"] },
          lo: { nu: ["latn"] },
          lrc: { nu: ["arabext"] },
          "lrc-IQ": { nu: ["arabext"] },
          lt: { nu: ["latn"] },
          ltg: { nu: ["latn"] },
          lu: { nu: ["latn"] },
          luo: { nu: ["latn"] },
          luy: { nu: ["latn"] },
          lv: { nu: ["latn"] },
          lzz: { nu: ["latn"] },
          mai: { nu: ["latn"] },
          mas: { nu: ["latn"] },
          "mas-TZ": { nu: ["latn"] },
          mdf: { nu: ["latn"] },
          mer: { nu: ["latn"] },
          mfe: { nu: ["latn"] },
          mg: { nu: ["latn"] },
          mgh: { nu: ["latn"] },
          mgo: { nu: ["latn"] },
          mhn: { nu: ["latn"] },
          mi: { nu: ["latn"] },
          mic: { nu: ["latn"] },
          mk: { nu: ["latn"] },
          ml: { nu: ["latn"] },
          mn: { nu: ["latn"] },
          "mn-Mong": { nu: ["latn"] },
          "mn-Mong-MN": { nu: ["latn"] },
          mni: { nu: ["beng"] },
          "mni-Beng": { nu: ["beng"] },
          "mni-Mtei": { nu: ["mtei"] },
          moh: { nu: ["latn"] },
          mr: { nu: ["deva"] },
          ms: { nu: ["latn"] },
          "ms-Arab": { nu: ["latn"] },
          "ms-Arab-BN": { nu: ["latn"] },
          "ms-BN": { nu: ["latn"] },
          "ms-ID": { nu: ["latn"], separator: { latn: "." } },
          "ms-SG": { nu: ["latn"] },
          mt: { nu: ["latn"] },
          mua: { nu: ["latn"] },
          mus: { nu: ["latn"] },
          mww: { nu: ["hmnp", "latn"] },
          "mww-Hmnp": { nu: ["hmnp", "latn"] },
          my: { nu: ["mymr"] },
          myv: { nu: ["latn"] },
          mzn: { nu: ["arabext"] },
          naq: { nu: ["latn"] },
          nb: { nu: ["latn"] },
          "nb-SJ": { nu: ["latn"] },
          nd: { nu: ["latn"] },
          nds: { nu: ["latn"] },
          "nds-NL": { nu: ["latn"] },
          ne: { nu: ["deva"] },
          "ne-IN": { nu: ["deva"] },
          nl: { nu: ["latn"] },
          "nl-AW": { nu: ["latn"] },
          "nl-BE": { nu: ["latn"] },
          "nl-BQ": { nu: ["latn"] },
          "nl-CW": { nu: ["latn"] },
          "nl-SR": { nu: ["latn"] },
          "nl-SX": { nu: ["latn"] },
          nmg: { nu: ["latn"] },
          nn: { nu: ["latn"] },
          nnh: { nu: ["latn"] },
          no: { nu: ["latn"] },
          nqo: { nu: ["nkoo"] },
          nr: { nu: ["latn"] },
          nso: { nu: ["latn"] },
          nus: { nu: ["latn"] },
          nv: { nu: ["latn"] },
          ny: { nu: ["latn"] },
          nyn: { nu: ["latn"] },
          oc: { nu: ["latn"] },
          "oc-ES": { nu: ["latn"] },
          oka: { nu: ["latn"] },
          "oka-US": { nu: ["latn"] },
          om: { nu: ["latn"] },
          "om-KE": { nu: ["latn"] },
          or: { nu: ["latn"] },
          os: { nu: ["latn"] },
          "os-RU": { nu: ["latn"] },
          osa: { nu: ["latn"] },
          pa: { nu: ["latn"] },
          "pa-Arab": { nu: ["arabext"] },
          "pa-Guru": { nu: ["latn"] },
          pap: { nu: ["latn"] },
          "pap-AW": { nu: ["latn"] },
          pcm: { nu: ["latn"] },
          pi: { nu: ["latn"] },
          "pi-Latn": { nu: ["latn"] },
          pis: { nu: ["latn"] },
          pl: { nu: ["latn"] },
          pms: { nu: ["latn"] },
          prg: { nu: ["latn"] },
          ps: { nu: ["arabext"] },
          "ps-PK": { nu: ["arabext"] },
          pt: { nu: ["latn"] },
          "pt-AO": { nu: ["latn"] },
          "pt-CH": { nu: ["latn"] },
          "pt-CV": { nu: ["latn"] },
          "pt-GQ": { nu: ["latn"] },
          "pt-GW": { nu: ["latn"] },
          "pt-LU": { nu: ["latn"] },
          "pt-MO": { nu: ["latn"] },
          "pt-MZ": { nu: ["latn"] },
          "pt-PT": { nu: ["latn"] },
          "pt-ST": { nu: ["latn"] },
          "pt-TL": { nu: ["latn"] },
          qu: { nu: ["latn"] },
          "qu-BO": { nu: ["latn"] },
          "qu-EC": { nu: ["latn"] },
          quc: { nu: ["latn"] },
          raj: { nu: ["deva"] },
          rhg: { nu: ["latn"] },
          "rhg-Rohg": { nu: ["latn"] },
          "rhg-Rohg-BD": { nu: ["latn"] },
          rif: { nu: ["latn"] },
          rm: { nu: ["latn"] },
          rn: { nu: ["latn"] },
          ro: { nu: ["latn"] },
          "ro-MD": { nu: ["latn"] },
          rof: { nu: ["latn"] },
          ru: { nu: ["latn"] },
          "ru-BY": { nu: ["latn"] },
          "ru-KG": { nu: ["latn"] },
          "ru-KZ": { nu: ["latn"] },
          "ru-MD": { nu: ["latn"] },
          "ru-UA": { nu: ["latn"] },
          rw: { nu: ["latn"] },
          rwk: { nu: ["latn"] },
          sa: { nu: ["deva"] },
          sah: { nu: ["latn"] },
          saq: { nu: ["latn"] },
          sat: { nu: ["olck"] },
          "sat-Deva": { nu: ["deva"] },
          "sat-Olck": { nu: ["olck"] },
          sbp: { nu: ["latn"] },
          sc: { nu: ["latn"] },
          scn: { nu: ["latn"] },
          sd: { nu: ["arab"] },
          "sd-Arab": { nu: ["arab"] },
          "sd-Deva": { nu: ["latn"] },
          sdh: { nu: ["arab"] },
          "sdh-IQ": { nu: ["arab"] },
          se: { nu: ["latn"] },
          "se-FI": { nu: ["latn"] },
          "se-SE": { nu: ["latn"] },
          seh: { nu: ["latn"] },
          ses: { nu: ["latn"] },
          sg: { nu: ["latn"] },
          sgs: { nu: ["latn"] },
          shi: { nu: ["latn"] },
          "shi-Latn": { nu: ["latn"] },
          "shi-Tfng": { nu: ["latn"] },
          shn: { nu: ["latn"] },
          "shn-TH": { nu: ["latn"] },
          si: { nu: ["latn"], separator: { latn: "." } },
          sid: { nu: ["latn"] },
          sk: { nu: ["latn"] },
          skr: { nu: ["latn"] },
          sl: { nu: ["latn"] },
          sma: { nu: ["latn"] },
          "sma-NO": { nu: ["latn"] },
          smj: { nu: ["latn"] },
          "smj-NO": { nu: ["latn"] },
          smn: { nu: ["latn"], separator: { latn: "." } },
          sms: { nu: ["latn"] },
          sn: { nu: ["latn"] },
          so: { nu: ["latn"] },
          "so-DJ": { nu: ["latn"] },
          "so-ET": { nu: ["latn"] },
          "so-KE": { nu: ["latn"] },
          sq: { nu: ["latn"] },
          "sq-MK": { nu: ["latn"] },
          "sq-XK": { nu: ["latn"] },
          sr: { nu: ["latn"] },
          "sr-Cyrl": { nu: ["latn"] },
          "sr-Cyrl-BA": { nu: ["latn"] },
          "sr-Cyrl-ME": { nu: ["latn"] },
          "sr-Cyrl-XK": { nu: ["latn"] },
          "sr-Latn": { nu: ["latn"] },
          "sr-Latn-BA": { nu: ["latn"] },
          "sr-Latn-ME": { nu: ["latn"] },
          "sr-Latn-XK": { nu: ["latn"] },
          ss: { nu: ["latn"] },
          "ss-SZ": { nu: ["latn"] },
          ssy: { nu: ["latn"] },
          st: { nu: ["latn"] },
          "st-LS": { nu: ["latn"] },
          su: { nu: ["latn"], separator: { latn: "." } },
          "su-Latn": { nu: ["latn"], separator: { latn: "." } },
          suz: { nu: ["latn"] },
          "suz-Deva": { nu: ["latn"] },
          "suz-Sunu": { nu: ["latn"] },
          sv: { nu: ["latn"] },
          "sv-AX": { nu: ["latn"] },
          "sv-FI": { nu: ["latn"], separator: { latn: "." } },
          sw: { nu: ["latn"] },
          "sw-CD": { nu: ["latn"] },
          "sw-KE": { nu: ["latn"] },
          "sw-UG": { nu: ["latn"] },
          syr: { nu: ["latn"] },
          "syr-SY": { nu: ["latn"] },
          szl: { nu: ["latn"] },
          ta: { nu: ["latn"] },
          "ta-LK": { nu: ["latn"] },
          "ta-MY": { nu: ["latn"] },
          "ta-SG": { nu: ["latn"] },
          te: { nu: ["latn"] },
          teo: { nu: ["latn"] },
          "teo-KE": { nu: ["latn"] },
          tg: { nu: ["latn"] },
          th: { nu: ["latn"] },
          ti: { nu: ["latn"] },
          "ti-ER": { nu: ["latn"] },
          tig: { nu: ["latn"] },
          tk: { nu: ["latn"] },
          tn: { nu: ["latn"] },
          "tn-BW": { nu: ["latn"] },
          to: { nu: ["latn"] },
          tok: { nu: ["latn"] },
          tpi: { nu: ["latn"] },
          tr: { nu: ["latn"] },
          "tr-CY": { nu: ["latn"] },
          trv: { nu: ["latn"] },
          trw: { nu: ["latn"] },
          ts: { nu: ["latn"] },
          tt: { nu: ["latn"] },
          twq: { nu: ["latn"] },
          tyv: { nu: ["latn"] },
          tzm: { nu: ["latn"] },
          ug: { nu: ["latn"] },
          uk: { nu: ["latn"] },
          und: { nu: ["latn"] },
          ur: { nu: ["latn"] },
          "ur-IN": { nu: ["arabext"], separator: { arabext: "\u066B" } },
          uz: { nu: ["latn"] },
          "uz-Arab": { nu: ["arabext"] },
          "uz-Cyrl": { nu: ["latn"] },
          "uz-Latn": { nu: ["latn"] },
          vai: { nu: ["latn"] },
          "vai-Latn": { nu: ["latn"] },
          "vai-Vaii": { nu: ["latn"] },
          ve: { nu: ["latn"] },
          vec: { nu: ["latn"] },
          vi: { nu: ["latn"] },
          vmw: { nu: ["latn"] },
          vo: { nu: ["latn"] },
          vun: { nu: ["latn"] },
          wa: { nu: ["latn"] },
          wae: { nu: ["latn"] },
          wal: { nu: ["latn"] },
          wbp: { nu: ["latn"] },
          wo: { nu: ["latn"] },
          xh: { nu: ["latn"] },
          xnr: { nu: ["latn"] },
          xog: { nu: ["latn"] },
          yav: { nu: ["latn"] },
          yi: { nu: ["latn"] },
          yo: { nu: ["latn"] },
          "yo-BJ": { nu: ["latn"] },
          yrl: { nu: ["latn"] },
          "yrl-CO": { nu: ["latn"] },
          "yrl-VE": { nu: ["latn"] },
          yue: { nu: ["latn"] },
          "yue-Hans": { nu: ["latn"] },
          "yue-Hant": { nu: ["latn"] },
          "yue-Hant-CN": { nu: ["latn"] },
          "yue-Hant-MO": { nu: ["latn"] },
          za: { nu: ["latn"] },
          zgh: { nu: ["latn"] },
          zh: { nu: ["latn"] },
          "zh-Hans": { nu: ["latn"] },
          "zh-Hans-HK": { nu: ["latn"] },
          "zh-Hans-MO": { nu: ["latn"] },
          "zh-Hans-MY": { nu: ["latn"] },
          "zh-Hans-SG": { nu: ["latn"] },
          "zh-Hant": { nu: ["latn"] },
          "zh-Hant-HK": { nu: ["latn"] },
          "zh-Hant-MO": { nu: ["latn"] },
          "zh-Hant-MY": { nu: ["latn"] },
          "zh-Latn": { nu: ["latn"] },
          zu: { nu: ["latn"] },
        },
      };
    },
    632459() {},
    183580(e, n, t) {
      t.d(n, { q: () => r });
      let a = new WeakMap();
      function r(e, n) {
        let t = a.get(e);
        t || ((t = new Set(e)), a.set(e, t));
        let r = n;
        for (;;) {
          if (t.has(r)) return r;
          let e = r.lastIndexOf("-");
          if (!~e) return;
          e >= 2 && "-" === r[e - 2] && (e -= 2), (r = r.slice(0, e));
        }
      }
    },
    641277(e, n, t) {
      t.d(n, { B: () => s });
      var a = t(26232);
      function r(e) {
        return Intl.getCanonicalLocales(e)[0];
      }
      var u = t(183580);
      function s(e, n, t, s, i, d) {
        let l, o;
        if ("lookup" === t.localeMatcher)
          l = (function (e, n, t) {
            let r = { locale: "" };
            for (let t of n) {
              let n = t.replace(a.KB, ""),
                s = (0, u.q)(e, n);
              if (s)
                return (
                  (r.locale = s),
                  t !== n && (r.extension = t.slice(n.length, t.length)),
                  r
                );
            }
            return (r.locale = t()), r;
          })(Array.from(e), n, d);
        else {
          var _;
          let t, r, u, s, i;
          (_ = Array.from(e)),
            (u = []),
            (s = n.reduce((e, n) => {
              let t = n.replace(a.KB, "");
              return u.push(t), (e[t] = n), e;
            }, {})),
            (i = (0, a.B4)(u, _)).matchedSupportedLocale &&
              i.matchedDesiredLocale &&
              ((t = i.matchedSupportedLocale),
              (r =
                s[i.matchedDesiredLocale].slice(
                  i.matchedDesiredLocale.length,
                ) || void 0)),
            (l = t ? { locale: t, extension: r } : { locale: d() });
        }
        null == l && (l = { locale: d(), extension: "" });
        let c = l.locale,
          y = i[c],
          f = { locale: "en", dataLocale: c };
        o = l.extension
          ? (function (e) {
              let n;
              (0, a.V1)(
                e === e.toLowerCase(),
                "Expected extension to be lowercase",
              ),
                (0, a.V1)(
                  "-u-" === e.slice(0, 3),
                  "Expected extension to be a Unicode locale extension",
                );
              let t = [],
                r = [],
                u = e.length,
                s = 3;
              for (; s < u; ) {
                let i,
                  d = e.indexOf("-", s);
                i = -1 === d ? u - s : d - s;
                let l = e.slice(s, s + i);
                (0, a.V1)(
                  i >= 2,
                  "Expected a subtag to have at least 2 characters",
                ),
                  void 0 === n && 2 != i
                    ? -1 === t.indexOf(l) && t.push(l)
                    : 2 === i
                      ? ((n = { key: l, value: "" }),
                        void 0 === r.find((e) => e.key === n?.key) && r.push(n))
                      : n?.value === ""
                        ? (n.value = l)
                        : ((0, a.V1)(
                            void 0 !== n,
                            "Expected keyword to be defined",
                          ),
                          (n.value += "-" + l)),
                  (s += i + 1);
              }
              return { attributes: t, keywords: r };
            })(l.extension).keywords
          : [];
        let h = [];
        for (let e of s) {
          let n,
            r = y?.[e] ?? [];
          (0, a.V1)(
            Array.isArray(r),
            `keyLocaleData for ${e} must be an array`,
          );
          let u = r[0];
          (0, a.V1)(
            void 0 === u || "string" == typeof u,
            "value must be a string or undefined",
          );
          let s = o.find((n) => n.key === e);
          if (s) {
            let t = s.value;
            "" !== t
              ? r.indexOf(t) > -1 && (n = { key: e, value: (u = t) })
              : r.indexOf("true") > -1 && (n = { key: e, value: (u = "true") });
          }
          let i = t[e];
          (0, a.V1)(
            null == i || "string" == typeof i,
            "optionsValue must be a string or undefined",
          ),
            "string" == typeof i &&
              "" ===
                (i = (function (e, n) {
                  let t = n.toLowerCase();
                  return (0, a.V1)(void 0 !== e, "ukey must be defined"), t;
                })(e.toLowerCase(), i)) &&
              (i = "true"),
            i !== u && r.indexOf(i) > -1 && ((u = i), (n = void 0)),
            n && h.push(n),
            (f[e] = u);
        }
        return (
          h.length > 0 &&
            (c = (function (e, n, t) {
              (0, a.V1)(
                -1 === e.indexOf("-u-"),
                "Expected locale to not have a Unicode locale extension",
              );
              let u = "-u";
              for (let e of n) u += `-${e}`;
              for (let e of t) {
                let { key: n, value: t } = e;
                (u += `-${n}`), "" !== t && (u += `-${t}`);
              }
              if ("-u" === u) return r(e);
              let s = e.indexOf("-x-");
              return r(-1 === s ? e + u : e.slice(0, s) + u + e.slice(s));
            })(c, [], h)),
          (f.locale = c),
          f
        );
      }
    },
    26232(e, n, t) {
      let a;
      t.d(n, { KB: () => i, B4: () => f, V1: () => d });
      var r = t(315847);
      let u = {
          "written-new": [
            { paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } },
            { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
            { $cnsar: { _value: "HK+MO" } },
            { $americas: { _value: "019" } },
            { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
            { no: { _desired: "nb", _distance: "1" } },
            { bs: { _desired: "hr", _distance: "4" } },
            { bs: { _desired: "sh", _distance: "4" } },
            { hr: { _desired: "sh", _distance: "4" } },
            { sr: { _desired: "sh", _distance: "4" } },
            { aa: { _desired: "ssy", _distance: "4" } },
            { de: { _desired: "gsw", _distance: "4", _oneway: "true" } },
            { de: { _desired: "lb", _distance: "4", _oneway: "true" } },
            { no: { _desired: "da", _distance: "8" } },
            { nb: { _desired: "da", _distance: "8" } },
            { ru: { _desired: "ab", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ach", _distance: "30", _oneway: "true" } },
            { nl: { _desired: "af", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ak", _distance: "30", _oneway: "true" } },
            { en: { _desired: "am", _distance: "30", _oneway: "true" } },
            { es: { _desired: "ay", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "az", _distance: "30", _oneway: "true" } },
            { ur: { _desired: "bal", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "be", _distance: "20", _oneway: "true" } },
            { en: { _desired: "bem", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "bh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "bn", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "bo", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "br", _distance: "20", _oneway: "true" } },
            { es: { _desired: "ca", _distance: "20", _oneway: "true" } },
            { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } },
            { en: { _desired: "chr", _distance: "20", _oneway: "true" } },
            { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "co", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "crs", _distance: "20", _oneway: "true" } },
            { sk: { _desired: "cs", _distance: "20" } },
            { en: { _desired: "cy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ee", _distance: "30", _oneway: "true" } },
            { en: { _desired: "eo", _distance: "30", _oneway: "true" } },
            { es: { _desired: "eu", _distance: "20", _oneway: "true" } },
            { da: { _desired: "fo", _distance: "20", _oneway: "true" } },
            { nl: { _desired: "fy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ga", _distance: "20", _oneway: "true" } },
            { en: { _desired: "gaa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "gd", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gl", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gn", _distance: "20", _oneway: "true" } },
            { hi: { _desired: "gu", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ha", _distance: "30", _oneway: "true" } },
            { en: { _desired: "haw", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "ht", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "hy", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ia", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ig", _distance: "30", _oneway: "true" } },
            { en: { _desired: "is", _distance: "20", _oneway: "true" } },
            { id: { _desired: "jv", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ka", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "kg", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "kk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "km", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kri", _distance: "30", _oneway: "true" } },
            { tr: { _desired: "ku", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "ky", _distance: "30", _oneway: "true" } },
            { it: { _desired: "la", _distance: "20", _oneway: "true" } },
            { en: { _desired: "lg", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "ln", _distance: "30", _oneway: "true" } },
            { en: { _desired: "lo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "loz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "lua", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mai", _distance: "20", _oneway: "true" } },
            { en: { _desired: "mfe", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "mg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mi", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ml", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "mn", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mr", _distance: "30", _oneway: "true" } },
            { id: { _desired: "ms", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "my", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ne", _distance: "30", _oneway: "true" } },
            { nb: { _desired: "nn", _distance: "20" } },
            { no: { _desired: "nn", _distance: "20" } },
            { en: { _desired: "nso", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ny", _distance: "30", _oneway: "true" } },
            { en: { _desired: "nyn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "oc", _distance: "20", _oneway: "true" } },
            { en: { _desired: "om", _distance: "30", _oneway: "true" } },
            { en: { _desired: "or", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pcm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ps", _distance: "30", _oneway: "true" } },
            { es: { _desired: "qu", _distance: "30", _oneway: "true" } },
            { de: { _desired: "rm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "rn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "rw", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "sa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sd", _distance: "30", _oneway: "true" } },
            { en: { _desired: "si", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "so", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sq", _distance: "30", _oneway: "true" } },
            { en: { _desired: "st", _distance: "30", _oneway: "true" } },
            { id: { _desired: "su", _distance: "20", _oneway: "true" } },
            { en: { _desired: "sw", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ta", _distance: "30", _oneway: "true" } },
            { en: { _desired: "te", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ti", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tlh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "to", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tum", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "ug", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "uk", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ur", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "uz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "wo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "xh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yi", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yo", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "za", _distance: "20", _oneway: "true" } },
            { en: { _desired: "zu", _distance: "30", _oneway: "true" } },
            { ar: { _desired: "aao", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abv", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acm", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acw", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acx", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acy", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "adf", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aec", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "afb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apc", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apd", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ars", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ary", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "auz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "avl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "pga", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "shu", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } },
            { az: { _desired: "azb", _distance: "10", _oneway: "true" } },
            { et: { _desired: "vro", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fub", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fue", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fui", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gui", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gun", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } },
            { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "enb", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "niq", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "oki", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "pko", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tec", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } },
            { kok: { _desired: "gom", _distance: "10", _oneway: "true" } },
            { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "ida", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lko", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lks", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lri", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lto", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lts", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nle", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "rag", _distance: "10", _oneway: "true" } },
            { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "msh", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "skg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "txy", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } },
            { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "btj", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bve", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "coa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "dup", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "hji", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "id", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jak", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jax", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lce", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "liw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "max", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "meo", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "min", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "msi", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mui", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "orn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "ors", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pel", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pse", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "urk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } },
            { ne: { _desired: "dty", _distance: "10", _oneway: "true" } },
            { om: { _desired: "gax", _distance: "10", _oneway: "true" } },
            { om: { _desired: "hae", _distance: "10", _oneway: "true" } },
            { om: { _desired: "orc", _distance: "10", _oneway: "true" } },
            { or: { _desired: "spv", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pst", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qub", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qud", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quf", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qug", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quk", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qul", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qup", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qur", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qus", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qux", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quy", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qva", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qve", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qws", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sro", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aae", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aat", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aln", _distance: "10", _oneway: "true" } },
            { syr: { _desired: "aii", _distance: "10", _oneway: "true" } },
            { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } },
            { yi: { _desired: "yih", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "gan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hak", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "nan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "yue", _distance: "10", _oneway: "true" } },
            { "*": { _desired: "*", _distance: "80" } },
            {
              "en-Latn": {
                _desired: "am-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "az-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "bn-Beng",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "bo-Tibt",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "hy-Armn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ka-Geor",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "km-Khmr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "kn-Knda",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "lo-Laoo",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ml-Mlym",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "my-Mymr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ne-Deva",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "or-Orya",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "pa-Guru",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ps-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "sd-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "si-Sinh",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ta-Taml",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "te-Telu",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ti-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "tk-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ur-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "uz-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "yi-Hebr",
                _distance: "10",
                _oneway: "true",
              },
            },
            { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
            {
              "zh-Hans": {
                _desired: "za-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hant": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ar-Arab": {
                _desired: "ar-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "bn-Beng": {
                _desired: "bn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "gu-Gujr": {
                _desired: "gu-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "hi-Deva": {
                _desired: "hi-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "kn-Knda": {
                _desired: "kn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ml-Mlym": {
                _desired: "ml-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "mr-Deva": {
                _desired: "mr-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ta-Taml": {
                _desired: "ta-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "te-Telu": {
                _desired: "te-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Latn",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hrkt",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hang",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Hang": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            { "*-*": { _desired: "*-*", _distance: "50" } },
            { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } },
            {
              "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" },
            },
            { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
            { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } },
            { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } },
            { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } },
            { "en-*-*": { _desired: "en-*-*", _distance: "5" } },
            {
              "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" },
            },
            {
              "es-*-$!americas": {
                _desired: "es-*-$!americas",
                _distance: "4",
              },
            },
            { "es-*-*": { _desired: "es-*-*", _distance: "5" } },
            {
              "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" },
            },
            {
              "pt-*-$!americas": {
                _desired: "pt-*-$!americas",
                _distance: "4",
              },
            },
            { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
            {
              "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" },
            },
            {
              "zh-Hant-$!cnsar": {
                _desired: "zh-Hant-$!cnsar",
                _distance: "4",
              },
            },
            { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } },
            { "*-*-*": { _desired: "*-*-*", _distance: "4" } },
          ],
        },
        s = {
          "001": [
            "001",
            "001-status-grouping",
            "002",
            "005",
            "009",
            "011",
            "013",
            "014",
            "015",
            "017",
            "018",
            "019",
            "021",
            "029",
            "030",
            "034",
            "035",
            "039",
            "053",
            "054",
            "057",
            "061",
            "142",
            "143",
            "145",
            "150",
            "151",
            "154",
            "155",
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CP",
            "CQ",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DG",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EA",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "EU",
            "EZ",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HM",
            "HN",
            "HR",
            "HT",
            "HU",
            "IC",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "QO",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "UN",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "002": [
            "002",
            "002-status-grouping",
            "011",
            "014",
            "015",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "DZ",
            "EA",
            "EG",
            "EH",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IC",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "LY",
            "MA",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SD",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TN",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "003": [
            "003",
            "013",
            "021",
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BM",
            "BQ",
            "BS",
            "BZ",
            "CA",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GL",
            "GP",
            "GT",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PM",
            "PR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "VC",
            "VG",
            "VI",
          ],
          "005": [
            "005",
            "AR",
            "BO",
            "BR",
            "BV",
            "CL",
            "CO",
            "EC",
            "FK",
            "GF",
            "GS",
            "GY",
            "PE",
            "PY",
            "SR",
            "UY",
            "VE",
          ],
          "009": [
            "009",
            "053",
            "054",
            "057",
            "061",
            "AC",
            "AQ",
            "AS",
            "AU",
            "CC",
            "CK",
            "CP",
            "CX",
            "DG",
            "FJ",
            "FM",
            "GU",
            "HM",
            "KI",
            "MH",
            "MP",
            "NC",
            "NF",
            "NR",
            "NU",
            "NZ",
            "PF",
            "PG",
            "PN",
            "PW",
            "QO",
            "SB",
            "TA",
            "TK",
            "TO",
            "TV",
            "UM",
            "VU",
            "WF",
            "WS",
          ],
          "011": [
            "011",
            "BF",
            "BJ",
            "CI",
            "CV",
            "GH",
            "GM",
            "GN",
            "GW",
            "LR",
            "ML",
            "MR",
            "NE",
            "NG",
            "SH",
            "SL",
            "SN",
            "TG",
          ],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": [
            "014",
            "BI",
            "DJ",
            "ER",
            "ET",
            "IO",
            "KE",
            "KM",
            "MG",
            "MU",
            "MW",
            "MZ",
            "RE",
            "RW",
            "SC",
            "SO",
            "SS",
            "TF",
            "TZ",
            "UG",
            "YT",
            "ZM",
            "ZW",
          ],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": [
            "003",
            "005",
            "013",
            "019",
            "019-status-grouping",
            "021",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BM",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CA",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GL",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PM",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": [
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BQ",
            "BS",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GP",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": [
            "035",
            "BN",
            "ID",
            "KH",
            "LA",
            "MM",
            "MY",
            "PH",
            "SG",
            "TH",
            "TL",
            "VN",
          ],
          "039": [
            "039",
            "AD",
            "AL",
            "BA",
            "ES",
            "GI",
            "GR",
            "HR",
            "IT",
            "ME",
            "MK",
            "MT",
            "PT",
            "RS",
            "SI",
            "SM",
            "VA",
            "XK",
          ],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": [
            "061",
            "AS",
            "CK",
            "NU",
            "PF",
            "PN",
            "TK",
            "TO",
            "TV",
            "WF",
            "WS",
          ],
          142: [
            "030",
            "034",
            "035",
            "142",
            "143",
            "145",
            "AE",
            "AF",
            "AM",
            "AZ",
            "BD",
            "BH",
            "BN",
            "BT",
            "CN",
            "CY",
            "GE",
            "HK",
            "ID",
            "IL",
            "IN",
            "IQ",
            "IR",
            "JO",
            "JP",
            "KG",
            "KH",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LK",
            "MM",
            "MN",
            "MO",
            "MV",
            "MY",
            "NP",
            "OM",
            "PH",
            "PK",
            "PS",
            "QA",
            "SA",
            "SG",
            "SY",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TR",
            "TW",
            "UZ",
            "VN",
            "YE",
          ],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: [
            "145",
            "AE",
            "AM",
            "AZ",
            "BH",
            "CY",
            "GE",
            "IL",
            "IQ",
            "JO",
            "KW",
            "LB",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TR",
            "YE",
          ],
          150: [
            "039",
            "150",
            "151",
            "154",
            "155",
            "AD",
            "AL",
            "AT",
            "AX",
            "BA",
            "BE",
            "BG",
            "BY",
            "CH",
            "CQ",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FO",
            "FR",
            "GB",
            "GG",
            "GI",
            "GR",
            "HR",
            "HU",
            "IE",
            "IM",
            "IS",
            "IT",
            "JE",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "RS",
            "RU",
            "SE",
            "SI",
            "SJ",
            "SK",
            "SM",
            "UA",
            "VA",
            "XK",
          ],
          151: [
            "151",
            "BG",
            "BY",
            "CZ",
            "HU",
            "MD",
            "PL",
            "RO",
            "RU",
            "SK",
            "UA",
          ],
          154: [
            "154",
            "AX",
            "CQ",
            "DK",
            "EE",
            "FI",
            "FO",
            "GB",
            "GG",
            "IE",
            "IM",
            "IS",
            "JE",
            "LT",
            "LV",
            "NO",
            "SE",
            "SJ",
          ],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: [
            "011",
            "014",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          419: [
            "005",
            "013",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          EU: [
            "AT",
            "BE",
            "BG",
            "CY",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "EU",
            "FI",
            "FR",
            "GR",
            "HR",
            "HU",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SE",
            "SI",
            "SK",
          ],
          EZ: [
            "AT",
            "BE",
            "CY",
            "DE",
            "EE",
            "ES",
            "EZ",
            "FI",
            "FR",
            "GR",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PT",
            "SI",
            "SK",
          ],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: [
            "AD",
            "AE",
            "AF",
            "AG",
            "AL",
            "AM",
            "AO",
            "AR",
            "AT",
            "AU",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BN",
            "BO",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FM",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GR",
            "GT",
            "GW",
            "GY",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MR",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PG",
            "PH",
            "PK",
            "PL",
            "PT",
            "PW",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SI",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SY",
            "SZ",
            "TD",
            "TG",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TZ",
            "UA",
            "UG",
            "UN",
            "US",
            "UY",
            "UZ",
            "VC",
            "VE",
            "VN",
            "VU",
            "WS",
            "YE",
            "ZA",
            "ZM",
            "ZW",
          ],
        },
        i = /-u(?:-[0-9a-z]{2,8})+/gi;
      function d(e, n, t = Error) {
        if (!e) throw new t(n);
      }
      function l(e, n, t) {
        let [a, r, u] = n.split("-"),
          i = !0;
        if (u && "$" === u[0]) {
          let n = "!" !== u[1],
            a = (n ? t[u.slice(1)] : t[u.slice(2)])
              .map((e) => s[e] || [e])
              .reduce((e, n) => [...e, ...n], []);
          i &&= a.indexOf(e.region || "") > -1 == n;
        } else i &&= !e.region || "*" === u || u === e.region;
        return (
          (i &&= !e.script || "*" === r || r === e.script),
          (i &&= !e.language || "*" === a || a === e.language)
        );
      }
      function o(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-");
      }
      function _(e, n, t) {
        for (let a of t.matches) {
          let r =
            l(e, a.desired, t.matchVariables) &&
            l(n, a.supported, t.matchVariables);
          if (
            (a.oneway ||
              r ||
              (r =
                l(e, a.supported, t.matchVariables) &&
                l(n, a.desired, t.matchVariables)),
            r)
          ) {
            let r = 10 * a.distance;
            if (
              t.paradigmLocales.indexOf(o(e)) > -1 !=
              t.paradigmLocales.indexOf(o(n)) > -1
            )
              return r - 1;
            return r;
          }
        }
        throw Error("No matching distance found");
      }
      let c = (0, r.B)(
          function (e, n) {
            let t = new Intl.Locale(e).maximize(),
              r = new Intl.Locale(n).maximize(),
              s = {
                language: t.language,
                script: t.script || "",
                region: t.region || "",
              },
              i = {
                language: r.language,
                script: r.script || "",
                region: r.region || "",
              },
              d = 0,
              l = (function () {
                if (!a) {
                  let e =
                      u["written-new"]["0"]?.paradigmLocales?._locales.split(
                        " ",
                      ),
                    n = u["written-new"].slice(1, 5);
                  a = {
                    matches: u["written-new"].slice(5).map((e) => {
                      let n = Object.keys(e)[0],
                        t = e[n];
                      return {
                        supported: n,
                        desired: t._desired,
                        distance: +t._distance,
                        oneway: "true" === t.oneway,
                      };
                    }, {}),
                    matchVariables: n.reduce((e, n) => {
                      let t = Object.keys(n)[0],
                        a = n[t];
                      return (e[t.slice(1)] = a._value.split("+")), e;
                    }, {}),
                    paradigmLocales: [
                      ...e,
                      ...e.map((e) =>
                        new Intl.Locale(e.replace(/_/g, "-"))
                          .maximize()
                          .toString(),
                      ),
                    ],
                  };
                }
                return a;
              })();
            return (
              s.language !== i.language &&
                (d += _(
                  { language: t.language, script: "", region: "" },
                  { language: r.language, script: "", region: "" },
                  l,
                )),
              s.script !== i.script &&
                (d += _(
                  { language: t.language, script: s.script, region: "" },
                  { language: r.language, script: i.script, region: "" },
                  l,
                )),
              s.region !== i.region && (d += _(s, i, l)),
              d
            );
          },
          { serializer: (e) => `${e[0]}|${e[1]}` },
        ),
        y = new WeakMap();
      function f(e, n, t = 838) {
        let a = 1 / 0,
          r = { matchedDesiredLocale: "", distances: {} },
          u = y.get(n);
        u ||
          ((u = n.map((e) => {
            try {
              return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
              return e;
            }
          })),
          y.set(n, u));
        let s = new Set(u);
        for (let n = 0; n < e.length; n++) {
          let t = e[n];
          if (s.has(t)) {
            let e = 0 + 40 * n;
            if (
              ((r.distances[t] = { [t]: e }),
              e < a &&
                ((a = e),
                (r.matchedDesiredLocale = t),
                (r.matchedSupportedLocale = t)),
              0 === n)
            )
              return r;
          }
        }
        for (let n = 0; n < e.length; n++) {
          let t = e[n];
          try {
            let e = new Intl.Locale(t).maximize().toString();
            if (e !== t) {
              let u = (function (e) {
                let n = [],
                  t = e;
                for (; t; ) {
                  n.push(t);
                  let e = t.lastIndexOf("-");
                  if (-1 === e) break;
                  t = t.substring(0, e);
                }
                return n;
              })(e);
              for (let i = 0; i < u.length; i++) {
                let d = u[i];
                if (d !== t && s.has(d)) {
                  let u;
                  try {
                    u =
                      new Intl.Locale(d).maximize().toString() === e
                        ? 0 + 40 * n
                        : 10 * i + 40 * n;
                  } catch {
                    u = 10 * i + 40 * n;
                  }
                  r.distances[t] || (r.distances[t] = {}),
                    (r.distances[t][d] = u),
                    u < a &&
                      ((a = u),
                      (r.matchedDesiredLocale = t),
                      (r.matchedSupportedLocale = d));
                  break;
                }
              }
            }
          } catch {}
        }
        return (
          (r.matchedSupportedLocale && 0 === a) ||
            (e.forEach((e, t) => {
              r.distances[e] || (r.distances[e] = {}),
                u.forEach((u, s) => {
                  let i = n[s],
                    d = c(e, u) + 0 + 40 * t;
                  (r.distances[e][i] = d),
                    d < a &&
                      ((a = d),
                      (r.matchedDesiredLocale = e),
                      (r.matchedSupportedLocale = i));
                });
            }),
            a >= t &&
              ((r.matchedDesiredLocale = void 0),
              (r.matchedSupportedLocale = void 0))),
          r
        );
      }
    },
  },
]);
//# sourceMappingURL=827385.f252b13aac29f74a.js.map
