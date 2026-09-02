"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["643697"],
  {
    85526(t, e) {
      (e.byteLength = function (t) {
        var e = h(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            i = h(t),
            s = i[0],
            a = i[1],
            f = new o(((s + a) * 3) / 4 - a),
            c = 0,
            u = a > 0 ? s - 4 : s;
          for (r = 0; r < u; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (f[c++] = (e >> 16) & 255),
              (f[c++] = (e >> 8) & 255),
              (f[c++] = 255 & e);
          return (
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (f[c++] = 255 & e)),
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (f[c++] = (e >> 8) & 255),
              (f[c++] = 255 & e)),
            f
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o;
            s < a;
            s += 16383
          )
            i.push(
              (function (t, e, n) {
                for (var o, i = [], s = e; s < n; s += 3)
                  (o =
                    ((t[s] << 16) & 0xff0000) +
                    ((t[s + 1] << 8) & 65280) +
                    (255 & t[s + 2])),
                    i.push(
                      r[(o >> 18) & 63] +
                        r[(o >> 12) & 63] +
                        r[(o >> 6) & 63] +
                        r[63 & o],
                    );
                return i.join("");
              })(t, s, s + 16383 > a ? a : s + 16383),
            );
          return (
            1 === o
              ? i.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === o &&
                i.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "=",
                ),
            i.join("")
          );
        });
      for (
        var r = [],
          n = [],
          o = "u" > typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = i.length;
        s < a;
        ++s
      )
        (r[s] = i[s]), (n[i.charCodeAt(s)] = s);
      function h(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n[45] = 62), (n[95] = 63);
    },
    415171(t, e, r) {
      r.d(e, { tb: () => i });
      var n = r(234097),
        o = r(916784),
        i = (function () {
          function t(t) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if ("function" != typeof t)
              throw TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
              );
            n.J.connect(this, t);
          }
          return (
            (t.prototype.observe = function (t, e) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!(0, o.vq)(t))
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              n.J.observe(this, t, e);
            }),
            (t.prototype.unobserve = function (t) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!(0, o.vq)(t))
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              n.J.unobserve(this, t);
            }),
            (t.prototype.disconnect = function () {
              n.J.disconnect(this);
            }),
            (t.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            t
          );
        })();
      r(522816), r(162563);
    },
    877413(t) {
      t.exports = function (t) {
        return ((t = String(t || "")), n.test(t))
          ? "rtl"
          : o.test(t)
            ? "ltr"
            : "neutral";
      };
      var e = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
        r =
          "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF",
        n = RegExp("^[^" + r + "]*[" + e + "]"),
        o = RegExp("^[^" + e + "]*[" + r + "]");
    },
    495142(t, e, r) {
      var n;
      let o, i;
      function s(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      function a(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (null != t &&
              "object" == typeof t &&
              "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Uint8Array expected of length ${e}, not of length=${t.length}`,
          );
      }
      function h(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        s(t.outputLen), s(t.blockLen);
      }
      function f(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      r.d(e, { Q: () => R });
      let c = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        u = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        l = (t, e) => (t << (32 - e)) | (t >>> e),
        d = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
        p = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        b = (t) =>
          ((t << 24) & 0xff000000) |
          ((t << 8) & 0xff0000) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function x(t) {
        for (let e = 0; e < t.length; e++) t[e] = b(t[e]);
      }
      let y = async () => {};
      async function g(t, e, r) {
        let n = Date.now();
        for (let o = 0; o < t; o++) {
          r(o);
          let t = Date.now() - n;
          (t >= 0 && t < e) || (await y(), (n += t));
        }
      }
      function w(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(`utf8ToBytes expected string, got ${typeof t}`);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          a(t),
          t
        );
      }
      class A {
        clone() {
          return this._cloneInto();
        }
      }
      let v = {}.toString;
      function E(t, e) {
        if (void 0 !== e && "[object Object]" !== v.call(e))
          throw Error("Options should be object or undefined");
        return Object.assign(t, e);
      }
      let L = (t, e, r) => (t & e) ^ (~t & r),
        U = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class m extends A {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = u(this.buffer));
        }
        update(t) {
          f(this);
          let { view: e, buffer: r, blockLen: n } = this,
            o = (t = w(t)).length;
          for (let i = 0; i < o; ) {
            let s = Math.min(n - this.pos, o - i);
            if (s === n) {
              let e = u(t);
              for (; n <= o - i; i += n) this.process(e, i);
              continue;
            }
            r.set(t.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === n && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          f(this);
          a(t);
          let e = this.outputLen;
          if (t.length < e)
            throw Error(
              `digestInto() expects output buffer of length at least ${e}`,
            );
          this.finished = !0;
          let { buffer: r, view: n, blockLen: o, isLE: i } = this,
            { pos: s } = this;
          (r[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > o - s && (this.process(n, 0), (s = 0));
          for (let t = s; t < o; t++) r[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let o = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((r >> o) & i),
              a = Number(r & i),
              h = 4 * !!n,
              f = 4 * !n;
            t.setUint32(e + h, s, n), t.setUint32(e + f, a, n);
          })(n, o - 8, BigInt(8 * this.length), i),
            this.process(n, 0);
          let h = u(t),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = c / 4,
            d = this.get();
          if (l > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < l; t++) h.setUint32(4 * t, d[t], i);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: o,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = o),
            (t.destroyed = i),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
      let H = new Uint32Array([
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
        I = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        k = new Uint32Array(64);
      class C extends m {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | I[0]),
            (this.B = 0 | I[1]),
            (this.C = 0 | I[2]),
            (this.D = 0 | I[3]),
            (this.E = 0 | I[4]),
            (this.F = 0 | I[5]),
            (this.G = 0 | I[6]),
            (this.H = 0 | I[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: o, F: i, G: s, H: a } = this;
          return [t, e, r, n, o, i, s, a];
        }
        set(t, e, r, n, o, i, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | o),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) k[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = k[t - 15],
              r = k[t - 2],
              n = l(e, 7) ^ l(e, 18) ^ (e >>> 3),
              o = l(r, 17) ^ l(r, 19) ^ (r >>> 10);
            k[t] = (o + k[t - 7] + n + k[t - 16]) | 0;
          }
          let { A: r, B: n, C: o, D: i, E: s, F: a, G: h, H: f } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (f +
                  (l(s, 6) ^ l(s, 11) ^ l(s, 25)) +
                  L(s, a, h) +
                  H[t] +
                  k[t]) |
                0,
              c = ((l(r, 2) ^ l(r, 13) ^ l(r, 22)) + U(r, n, o)) | 0;
            (f = h),
              (h = a),
              (a = s),
              (s = (i + e) | 0),
              (i = o),
              (o = n),
              (n = r),
              (r = (e + c) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (o = (o + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (a = (a + this.F) | 0),
            (h = (h + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(r, n, o, i, s, a, h, f);
        }
        roundClean() {
          k.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let O =
        ((n = () => new C()),
        ((o = (t) => n().update(w(t)).digest()).outputLen = (i =
          n()).outputLen),
        (o.blockLen = i.blockLen),
        (o.create = () => n()),
        o);
      class B extends A {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), h(t);
          const r = w(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const n = this.blockLen,
            o = new Uint8Array(n);
          o.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < o.length; t++) o[t] ^= 54;
          this.iHash.update(o), (this.oHash = t.create());
          for (let t = 0; t < o.length; t++) o[t] ^= 106;
          this.oHash.update(o), o.fill(0);
        }
        update(t) {
          return f(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          f(this),
            a(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: o,
            blockLen: i,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = o),
            (t.blockLen = i),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let T = (t, e, r) => new B(t, e).update(r).digest();
      function _(t, e, r, n) {
        var o;
        let i,
          {
            c: a,
            dkLen: f,
            DK: c,
            PRF: l,
            PRFSalt: d,
          } = (function (t, e, r, n) {
            h(t);
            let {
              c: o,
              dkLen: i,
              asyncTick: a,
            } = E({ dkLen: 32, asyncTick: 10 }, n);
            if ((s(o), s(i), s(a), o < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let f = w(e),
              c = w(r),
              u = new Uint8Array(i),
              l = T.create(t, f),
              d = l._cloneInto().update(c);
            return { c: o, dkLen: i, asyncTick: a, DK: u, PRF: l, PRFSalt: d };
          })(t, e, r, n),
          p = new Uint8Array(4),
          b = u(p),
          x = new Uint8Array(l.outputLen);
        for (let t = 1, e = 0; e < f; t++, e += l.outputLen) {
          let r = c.subarray(e, e + l.outputLen);
          b.setInt32(0, t, !1),
            (i = d._cloneInto(i)).update(p).digestInto(x),
            r.set(x.subarray(0, r.length));
          for (let t = 1; t < a; t++) {
            l._cloneInto(i).update(x).digestInto(x);
            for (let t = 0; t < r.length; t++) r[t] ^= x[t];
          }
        }
        return (
          (o = i), l.destroy(), d.destroy(), o && o.destroy(), x.fill(0), c
        );
      }
      function F(t, e, r, n, o, i) {
        let s = t[e++] ^ r[n++],
          a = t[e++] ^ r[n++],
          h = t[e++] ^ r[n++],
          f = t[e++] ^ r[n++],
          c = t[e++] ^ r[n++],
          u = t[e++] ^ r[n++],
          l = t[e++] ^ r[n++],
          p = t[e++] ^ r[n++],
          b = t[e++] ^ r[n++],
          x = t[e++] ^ r[n++],
          y = t[e++] ^ r[n++],
          g = t[e++] ^ r[n++],
          w = t[e++] ^ r[n++],
          A = t[e++] ^ r[n++],
          v = t[e++] ^ r[n++],
          E = t[e++] ^ r[n++],
          L = s,
          U = a,
          m = h,
          H = f,
          I = c,
          k = u,
          C = l,
          O = p,
          B = b,
          T = x,
          _ = y,
          F = g,
          j = w,
          R = A,
          z = v,
          S = E;
        for (let t = 0; t < 8; t += 2)
          (I ^= d((L + j) | 0, 7)),
            (B ^= d((I + L) | 0, 9)),
            (j ^= d((B + I) | 0, 13)),
            (L ^= d((j + B) | 0, 18)),
            (T ^= d((k + U) | 0, 7)),
            (R ^= d((T + k) | 0, 9)),
            (U ^= d((R + T) | 0, 13)),
            (k ^= d((U + R) | 0, 18)),
            (z ^= d((_ + C) | 0, 7)),
            (m ^= d((z + _) | 0, 9)),
            (C ^= d((m + z) | 0, 13)),
            (_ ^= d((C + m) | 0, 18)),
            (H ^= d((S + F) | 0, 7)),
            (O ^= d((H + S) | 0, 9)),
            (F ^= d((O + H) | 0, 13)),
            (S ^= d((F + O) | 0, 18)),
            (U ^= d((L + H) | 0, 7)),
            (m ^= d((U + L) | 0, 9)),
            (H ^= d((m + U) | 0, 13)),
            (L ^= d((H + m) | 0, 18)),
            (C ^= d((k + I) | 0, 7)),
            (O ^= d((C + k) | 0, 9)),
            (I ^= d((O + C) | 0, 13)),
            (k ^= d((I + O) | 0, 18)),
            (F ^= d((_ + T) | 0, 7)),
            (B ^= d((F + _) | 0, 9)),
            (T ^= d((B + F) | 0, 13)),
            (_ ^= d((T + B) | 0, 18)),
            (j ^= d((S + z) | 0, 7)),
            (R ^= d((j + S) | 0, 9)),
            (z ^= d((R + j) | 0, 13)),
            (S ^= d((z + R) | 0, 18));
        (o[i++] = (s + L) | 0),
          (o[i++] = (a + U) | 0),
          (o[i++] = (h + m) | 0),
          (o[i++] = (f + H) | 0),
          (o[i++] = (c + I) | 0),
          (o[i++] = (u + k) | 0),
          (o[i++] = (l + C) | 0),
          (o[i++] = (p + O) | 0),
          (o[i++] = (b + B) | 0),
          (o[i++] = (x + T) | 0),
          (o[i++] = (y + _) | 0),
          (o[i++] = (g + F) | 0),
          (o[i++] = (w + j) | 0),
          (o[i++] = (A + R) | 0),
          (o[i++] = (v + z) | 0),
          (o[i++] = (E + S) | 0);
      }
      function j(t, e, r, n, o) {
        let i = n + 0,
          s = n + 16 * o;
        for (let n = 0; n < 16; n++) r[s + n] = t[e + (2 * o - 1) * 16 + n];
        for (let n = 0; n < o; n++, i += 16, e += 16)
          F(r, s, t, e, r, i), n > 0 && (s += 16), F(r, i, t, (e += 16), r, s);
      }
      async function R(t, e, r) {
        let n,
          {
            N: o,
            r: i,
            p: a,
            dkLen: h,
            blockSize32: f,
            V: u,
            B32: l,
            B: d,
            tmp: b,
            blockMixCb: y,
            asyncTick: w,
          } = (function (t, e, r) {
            let {
              N: n,
              r: o,
              p: i,
              dkLen: a,
              asyncTick: h,
              maxmem: f,
              onProgress: u,
            } = E({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, r);
            if (
              (s(n),
              s(o),
              s(i),
              s(a),
              s(h),
              s(f),
              void 0 !== u && "function" != typeof u)
            )
              throw Error("progressCb should be function");
            let l = 128 * o,
              d = l / 4;
            if (n <= 1 || (n & (n - 1)) != 0 || n > 0x100000000)
              throw Error(
                "Scrypt: N must be larger than 1, a power of 2, and less than 2^32",
              );
            if (i < 0 || i > ((0x100000000 - 1) * 32) / l)
              throw Error(
                "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
              );
            if (a < 0 || a > (0x100000000 - 1) * 32)
              throw Error(
                "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
              );
            let p = l * (n + i);
            if (p > f)
              throw Error(
                `Scrypt: parameters too large, ${p} (128 * r * (N + p)) > ${f} (maxmem)`,
              );
            let b = _(O, t, e, { c: 1, dkLen: l * i }),
              x = c(b),
              y = c(new Uint8Array(l * n)),
              g = c(new Uint8Array(l)),
              w = () => {};
            if (u) {
              let t = 2 * n * i,
                e = Math.max(Math.floor(t / 1e4), 1),
                r = 0;
              w = () => {
                r++, u && (!(r % e) || r === t) && u(r / t);
              };
            }
            return {
              N: n,
              r: o,
              p: i,
              dkLen: a,
              blockSize32: d,
              V: y,
              B32: x,
              B: b,
              tmp: g,
              blockMixCb: w,
              asyncTick: h,
            };
          })(t, e, r);
        p || x(l);
        for (let t = 0; t < a; t++) {
          let e = f * t;
          for (let t = 0; t < f; t++) u[t] = l[e + t];
          let r = 0;
          await g(o - 1, w, () => {
            j(u, r, u, (r += f), i), y();
          }),
            j(u, (o - 1) * f, l, e, i),
            y(),
            await g(o, w, () => {
              let t = l[e + f - 16] % o;
              for (let r = 0; r < f; r++) b[r] = l[e + r] ^ u[t * f + r];
              j(b, 0, l, e, i), y();
            });
        }
        return (
          p || x(l),
          (n = _(O, t, d, { c: 1, dkLen: h })),
          d.fill(0),
          u.fill(0),
          b.fill(0),
          n
        );
      }
      T.create = (t, e) => new B(t, e);
    },
    926890(t, e, r) {
      r.d(e, { A: () => o.A, pb: () => n.p }), r(807853);
      var n = r(728806),
        o = r(353134);
    },
  },
]);
//# sourceMappingURL=643697.d10034c1460f618c.js.map
