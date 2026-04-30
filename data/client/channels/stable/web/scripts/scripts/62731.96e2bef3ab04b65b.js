"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62731"],
  {
    495142(t, e, s) {
      var i;
      let r, n;
      function o(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      function h(t, ...e) {
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
      function a(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        o(t.outputLen), o(t.blockLen);
      }
      function f(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      s.d(e, { Q: () => S });
      let c = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        l = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        u = (t, e) => (t << (32 - e)) | (t >>> e),
        d = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
        x = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        b = (t) =>
          ((t << 24) & 0xff000000) |
          ((t << 8) & 0xff0000) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function p(t) {
        for (let e = 0; e < t.length; e++) t[e] = b(t[e]);
      }
      let y = async () => {};
      async function g(t, e, s) {
        let i = Date.now();
        for (let r = 0; r < t; r++) {
          s(r);
          let t = Date.now() - i;
          (t >= 0 && t < e) || (await y(), (i += t));
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
          h(t),
          t
        );
      }
      class L {
        clone() {
          return this._cloneInto();
        }
      }
      let H = {}.toString;
      function U(t, e) {
        if (void 0 !== e && "[object Object]" !== H.call(e))
          throw Error("Options should be object or undefined");
        return Object.assign(t, e);
      }
      let E = (t, e, s) => (t & e) ^ (~t & s),
        A = (t, e, s) => (t & e) ^ (t & s) ^ (e & s);
      class I extends L {
        constructor(t, e, s, i) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = s),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = l(this.buffer));
        }
        update(t) {
          f(this);
          let { view: e, buffer: s, blockLen: i } = this,
            r = (t = w(t)).length;
          for (let n = 0; n < r; ) {
            let o = Math.min(i - this.pos, r - n);
            if (o === i) {
              let e = l(t);
              for (; i <= r - n; n += i) this.process(e, n);
              continue;
            }
            s.set(t.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          f(this);
          h(t);
          let e = this.outputLen;
          if (t.length < e)
            throw Error(
              `digestInto() expects output buffer of length at least ${e}`,
            );
          this.finished = !0;
          let { buffer: s, view: i, blockLen: r, isLE: n } = this,
            { pos: o } = this;
          (s[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > r - o && (this.process(i, 0), (o = 0));
          for (let t = o; t < r; t++) s[t] = 0;
          !(function (t, e, s, i) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, s, i);
            let r = BigInt(32),
              n = BigInt(0xffffffff),
              o = Number((s >> r) & n),
              h = Number(s & n),
              a = 4 * !!i,
              f = 4 * !i;
            t.setUint32(e + a, o, i), t.setUint32(e + f, h, i);
          })(i, r - 8, BigInt(8 * this.length), n),
            this.process(i, 0);
          let a = l(t),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            d = this.get();
          if (u > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < u; t++) a.setUint32(4 * t, d[t], n);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let s = t.slice(0, e);
          return this.destroy(), s;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: s,
            length: i,
            finished: r,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (t.length = i),
            (t.pos = o),
            (t.finished = r),
            (t.destroyed = n),
            i % e && t.buffer.set(s),
            t
          );
        }
      }
      let k = new Uint32Array([
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
        m = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        _ = new Uint32Array(64);
      class B extends I {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | m[0]),
            (this.B = 0 | m[1]),
            (this.C = 0 | m[2]),
            (this.D = 0 | m[3]),
            (this.E = 0 | m[4]),
            (this.F = 0 | m[5]),
            (this.G = 0 | m[6]),
            (this.H = 0 | m[7]);
        }
        get() {
          let { A: t, B: e, C: s, D: i, E: r, F: n, G: o, H: h } = this;
          return [t, e, s, i, r, n, o, h];
        }
        set(t, e, s, i, r, n, o, h) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | s),
            (this.D = 0 | i),
            (this.E = 0 | r),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | h);
        }
        process(t, e) {
          for (let s = 0; s < 16; s++, e += 4) _[s] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = _[t - 15],
              s = _[t - 2],
              i = u(e, 7) ^ u(e, 18) ^ (e >>> 3),
              r = u(s, 17) ^ u(s, 19) ^ (s >>> 10);
            _[t] = (r + _[t - 7] + i + _[t - 16]) | 0;
          }
          let { A: s, B: i, C: r, D: n, E: o, F: h, G: a, H: f } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (f +
                  (u(o, 6) ^ u(o, 11) ^ u(o, 25)) +
                  E(o, h, a) +
                  k[t] +
                  _[t]) |
                0,
              c = ((u(s, 2) ^ u(s, 13) ^ u(s, 22)) + A(s, i, r)) | 0;
            (f = a),
              (a = h),
              (h = o),
              (o = (n + e) | 0),
              (n = r),
              (r = i),
              (i = s),
              (s = (e + c) | 0);
          }
          (s = (s + this.A) | 0),
            (i = (i + this.B) | 0),
            (r = (r + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (h = (h + this.F) | 0),
            (a = (a + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(s, i, r, n, o, h, a, f);
        }
        roundClean() {
          _.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let O =
        ((i = () => new B()),
        ((r = (t) => i().update(w(t)).digest()).outputLen = (n =
          i()).outputLen),
        (r.blockLen = n.blockLen),
        (r.create = () => i()),
        r);
      class C extends L {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), a(t);
          const s = w(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          const i = this.blockLen,
            r = new Uint8Array(i);
          r.set(s.length > i ? t.create().update(s).digest() : s);
          for (let t = 0; t < r.length; t++) r[t] ^= 54;
          this.iHash.update(r), (this.oHash = t.create());
          for (let t = 0; t < r.length; t++) r[t] ^= 106;
          this.oHash.update(r), r.fill(0);
        }
        update(t) {
          return f(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          f(this),
            h(t, this.outputLen),
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
            iHash: s,
            finished: i,
            destroyed: r,
            blockLen: n,
            outputLen: o,
          } = this;
          return (
            (t.finished = i),
            (t.destroyed = r),
            (t.blockLen = n),
            (t.outputLen = o),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = s._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let v = (t, e, s) => new C(t, e).update(s).digest();
      function j(t, e, s, i) {
        var r;
        let n,
          {
            c: h,
            dkLen: f,
            DK: c,
            PRF: u,
            PRFSalt: d,
          } = (function (t, e, s, i) {
            a(t);
            let {
              c: r,
              dkLen: n,
              asyncTick: h,
            } = U({ dkLen: 32, asyncTick: 10 }, i);
            if ((o(r), o(n), o(h), r < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let f = w(e),
              c = w(s),
              l = new Uint8Array(n),
              u = v.create(t, f),
              d = u._cloneInto().update(c);
            return { c: r, dkLen: n, asyncTick: h, DK: l, PRF: u, PRFSalt: d };
          })(t, e, s, i),
          x = new Uint8Array(4),
          b = l(x),
          p = new Uint8Array(u.outputLen);
        for (let t = 1, e = 0; e < f; t++, e += u.outputLen) {
          let s = c.subarray(e, e + u.outputLen);
          b.setInt32(0, t, !1),
            (n = d._cloneInto(n)).update(x).digestInto(p),
            s.set(p.subarray(0, s.length));
          for (let t = 1; t < h; t++) {
            u._cloneInto(n).update(p).digestInto(p);
            for (let t = 0; t < s.length; t++) s[t] ^= p[t];
          }
        }
        return (
          (r = n), u.destroy(), d.destroy(), r && r.destroy(), p.fill(0), c
        );
      }
      function D(t, e, s, i, r, n) {
        let o = t[e++] ^ s[i++],
          h = t[e++] ^ s[i++],
          a = t[e++] ^ s[i++],
          f = t[e++] ^ s[i++],
          c = t[e++] ^ s[i++],
          l = t[e++] ^ s[i++],
          u = t[e++] ^ s[i++],
          x = t[e++] ^ s[i++],
          b = t[e++] ^ s[i++],
          p = t[e++] ^ s[i++],
          y = t[e++] ^ s[i++],
          g = t[e++] ^ s[i++],
          w = t[e++] ^ s[i++],
          L = t[e++] ^ s[i++],
          H = t[e++] ^ s[i++],
          U = t[e++] ^ s[i++],
          E = o,
          A = h,
          I = a,
          k = f,
          m = c,
          _ = l,
          B = u,
          O = x,
          C = b,
          v = p,
          j = y,
          D = g,
          $ = w,
          S = L,
          N = H,
          F = U;
        for (let t = 0; t < 8; t += 2)
          (m ^= d((E + $) | 0, 7)),
            (C ^= d((m + E) | 0, 9)),
            ($ ^= d((C + m) | 0, 13)),
            (E ^= d(($ + C) | 0, 18)),
            (v ^= d((_ + A) | 0, 7)),
            (S ^= d((v + _) | 0, 9)),
            (A ^= d((S + v) | 0, 13)),
            (_ ^= d((A + S) | 0, 18)),
            (N ^= d((j + B) | 0, 7)),
            (I ^= d((N + j) | 0, 9)),
            (B ^= d((I + N) | 0, 13)),
            (j ^= d((B + I) | 0, 18)),
            (k ^= d((F + D) | 0, 7)),
            (O ^= d((k + F) | 0, 9)),
            (D ^= d((O + k) | 0, 13)),
            (F ^= d((D + O) | 0, 18)),
            (A ^= d((E + k) | 0, 7)),
            (I ^= d((A + E) | 0, 9)),
            (k ^= d((I + A) | 0, 13)),
            (E ^= d((k + I) | 0, 18)),
            (B ^= d((_ + m) | 0, 7)),
            (O ^= d((B + _) | 0, 9)),
            (m ^= d((O + B) | 0, 13)),
            (_ ^= d((m + O) | 0, 18)),
            (D ^= d((j + v) | 0, 7)),
            (C ^= d((D + j) | 0, 9)),
            (v ^= d((C + D) | 0, 13)),
            (j ^= d((v + C) | 0, 18)),
            ($ ^= d((F + N) | 0, 7)),
            (S ^= d(($ + F) | 0, 9)),
            (N ^= d((S + $) | 0, 13)),
            (F ^= d((N + S) | 0, 18));
        (r[n++] = (o + E) | 0),
          (r[n++] = (h + A) | 0),
          (r[n++] = (a + I) | 0),
          (r[n++] = (f + k) | 0),
          (r[n++] = (c + m) | 0),
          (r[n++] = (l + _) | 0),
          (r[n++] = (u + B) | 0),
          (r[n++] = (x + O) | 0),
          (r[n++] = (b + C) | 0),
          (r[n++] = (p + v) | 0),
          (r[n++] = (y + j) | 0),
          (r[n++] = (g + D) | 0),
          (r[n++] = (w + $) | 0),
          (r[n++] = (L + S) | 0),
          (r[n++] = (H + N) | 0),
          (r[n++] = (U + F) | 0);
      }
      function $(t, e, s, i, r) {
        let n = i + 0,
          o = i + 16 * r;
        for (let i = 0; i < 16; i++) s[o + i] = t[e + (2 * r - 1) * 16 + i];
        for (let i = 0; i < r; i++, n += 16, e += 16)
          D(s, o, t, e, s, n), i > 0 && (o += 16), D(s, n, t, (e += 16), s, o);
      }
      async function S(t, e, s) {
        let i,
          {
            N: r,
            r: n,
            p: h,
            dkLen: a,
            blockSize32: f,
            V: l,
            B32: u,
            B: d,
            tmp: b,
            blockMixCb: y,
            asyncTick: w,
          } = (function (t, e, s) {
            let {
              N: i,
              r,
              p: n,
              dkLen: h,
              asyncTick: a,
              maxmem: f,
              onProgress: l,
            } = U({ dkLen: 32, asyncTick: 10, maxmem: 0x40000400 }, s);
            if (
              (o(i),
              o(r),
              o(n),
              o(h),
              o(a),
              o(f),
              void 0 !== l && "function" != typeof l)
            )
              throw Error("progressCb should be function");
            let u = 128 * r,
              d = u / 4;
            if (i <= 1 || (i & (i - 1)) != 0 || i > 0x100000000)
              throw Error(
                "Scrypt: N must be larger than 1, a power of 2, and less than 2^32",
              );
            if (n < 0 || n > ((0x100000000 - 1) * 32) / u)
              throw Error(
                "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
              );
            if (h < 0 || h > (0x100000000 - 1) * 32)
              throw Error(
                "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
              );
            let x = u * (i + n);
            if (x > f)
              throw Error(
                `Scrypt: parameters too large, ${x} (128 * r * (N + p)) > ${f} (maxmem)`,
              );
            let b = j(O, t, e, { c: 1, dkLen: u * n }),
              p = c(b),
              y = c(new Uint8Array(u * i)),
              g = c(new Uint8Array(u)),
              w = () => {};
            if (l) {
              let t = 2 * i * n,
                e = Math.max(Math.floor(t / 1e4), 1),
                s = 0;
              w = () => {
                s++, l && (!(s % e) || s === t) && l(s / t);
              };
            }
            return {
              N: i,
              r,
              p: n,
              dkLen: h,
              blockSize32: d,
              V: y,
              B32: p,
              B: b,
              tmp: g,
              blockMixCb: w,
              asyncTick: a,
            };
          })(t, e, s);
        x || p(u);
        for (let t = 0; t < h; t++) {
          let e = f * t;
          for (let t = 0; t < f; t++) l[t] = u[e + t];
          let s = 0;
          await g(r - 1, w, () => {
            $(l, s, l, (s += f), n), y();
          }),
            $(l, (r - 1) * f, u, e, n),
            y(),
            await g(r, w, () => {
              let t = u[e + f - 16] % r;
              for (let s = 0; s < f; s++) b[s] = u[e + s] ^ l[t * f + s];
              $(b, 0, u, e, n), y();
            });
        }
        return (
          x || p(u),
          (i = j(O, t, d, { c: 1, dkLen: a })),
          d.fill(0),
          l.fill(0),
          b.fill(0),
          i
        );
      }
      v.create = (t, e) => new C(t, e);
    },
  },
]);
//# sourceMappingURL=62731.96e2bef3ab04b65b.js.map
