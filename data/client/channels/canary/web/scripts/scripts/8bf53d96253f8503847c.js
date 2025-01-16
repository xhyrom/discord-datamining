"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["50506"],
  {
    963458: function (t, e, n) {
      var r = n(192291),
        i = n(22092),
        o = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var t = 0, e = arguments.length, n = new (o(this))(e); e > t; )
            n[t] = arguments[t++];
          return n;
        },
        i,
      );
    },
    180450: function (t, e, n) {
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      n.d(e, {
        Gg: function () {
          return s;
        },
        J8: function () {
          return h;
        },
        Rx: function () {
          return r;
        },
        aI: function () {
          return i;
        },
        vp: function () {
          return o;
        },
      });
      function i(t, ...e) {
        var n;
        if (
          !(
            (n = t) instanceof Uint8Array ||
            (null != n &&
              "object" == typeof n &&
              "Uint8Array" === n.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Uint8Array expected of length ${e}, not of length=${t.length}`,
          );
      }
      function o(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(t.outputLen), r(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function h(t, e) {
        i(t);
        let n = e.outputLen;
        if (t.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`,
          );
      }
    },
    806216: function (t, e, n) {
      n.d(e, {
        VR: function () {
          return h;
        },
        bc: function () {
          return o;
        },
        l3: function () {
          return s;
        },
      });
      var r = n(180450),
        i = n(362133);
      let o = (t, e, n) => (t & e) ^ (~t & n),
        s = (t, e, n) => (t & e) ^ (t & n) ^ (e & n);
      class h extends i.kb {
        constructor(t, e, n, r) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, r.Gg)(this);
          let { view: e, buffer: n, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let r = 0; r < s; ) {
            let h = Math.min(o - this.pos, s - r);
            if (h === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - r; r += o) this.process(e, r);
              continue;
            }
            n.set(t.subarray(r, r + h), this.pos),
              (this.pos += h),
              (r += h),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, r.Gg)(this), (0, r.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: n, blockLen: o, isLE: s } = this,
            { pos: h } = this;
          (e[h++] = 128),
            this.buffer.subarray(h).fill(0),
            this.padOffset > o - h && (this.process(n, 0), (h = 0));
          for (let t = h; t < o; t++) e[t] = 0;
          !(function (t, e, n, r) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((n >> i) & o),
              h = Number(n & o),
              u = r ? 4 : 0,
              f = r ? 0 : 4;
            t.setUint32(e + u, s, r), t.setUint32(e + f, h, r);
          })(n, o - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          let u = (0, i.GL)(t),
            f = this.outputLen;
          if (f % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = f / 4,
            a = this.get();
          if (l > a.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < l; t++) u.setUint32(4 * t, a[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = r),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            r % e && t.buffer.set(n),
            t
          );
        }
      }
    },
    942351: function (t, e, n) {
      n.d(e, {
        b: function () {
          return s;
        },
      });
      var r = n(180450),
        i = n(362133);
      class o extends i.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, r.vp)(t);
          let n = (0, i.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let o = this.blockLen,
            s = new Uint8Array(o);
          s.set(n.length > o ? t.create().update(n).digest() : n);
          for (let t = 0; t < s.length; t++) s[t] ^= 54;
          this.iHash.update(s), (this.oHash = t.create());
          for (let t = 0; t < s.length; t++) s[t] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(t) {
          return (0, r.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, r.Gg)(this),
            (0, r.aI)(t, this.outputLen),
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
            iHash: n,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = r),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = n._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let s = (t, e, n) => new o(t, e).update(n).digest();
      s.create = (t, e) => new o(t, e);
    },
    520589: function (t, e, n) {
      n.d(e, {
        n: function () {
          return s;
        },
      });
      var r = n(180450),
        i = n(942351),
        o = n(362133);
      function s(t, e, n, s) {
        var h, u, f, l, a;
        let c;
        let {
            c: d,
            dkLen: p,
            DK: g,
            PRF: y,
            PRFSalt: b,
          } = (function (t, e, n, s) {
            (0, r.vp)(t);
            let {
              c: h,
              dkLen: u,
              asyncTick: f,
            } = (0, o.U5)({ dkLen: 32, asyncTick: 10 }, s);
            if (((0, r.Rx)(h), (0, r.Rx)(u), (0, r.Rx)(f), h < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let l = (0, o.O0)(e),
              a = (0, o.O0)(n),
              c = new Uint8Array(u),
              d = i.b.create(t, l),
              p = d._cloneInto().update(a);
            return { c: h, dkLen: u, asyncTick: f, DK: c, PRF: d, PRFSalt: p };
          })(t, e, n, s),
          w = new Uint8Array(4),
          G = (0, o.GL)(w),
          L = new Uint8Array(y.outputLen);
        for (let t = 1, e = 0; e < p; t++, e += y.outputLen) {
          let n = g.subarray(e, e + y.outputLen);
          G.setInt32(0, t, !1),
            (c = b._cloneInto(c)).update(w).digestInto(L),
            n.set(L.subarray(0, n.length));
          for (let t = 1; t < d; t++) {
            y._cloneInto(c).update(L).digestInto(L);
            for (let t = 0; t < n.length; t++) n[t] ^= L[t];
          }
        }
        return (
          (h = y),
          (u = b),
          (f = g),
          (l = c),
          (a = L),
          h.destroy(),
          u.destroy(),
          l && l.destroy(),
          a.fill(0),
          f
        );
      }
    },
    802667: function (t, e, n) {
      n.d(e, {
        E: function () {
          return f;
        },
      });
      var r = n(180450),
        i = n(241303),
        o = n(520589),
        s = n(362133);
      function h(t, e, n, r, i, o) {
        let h = t[e++] ^ n[r++],
          u = t[e++] ^ n[r++],
          f = t[e++] ^ n[r++],
          l = t[e++] ^ n[r++],
          a = t[e++] ^ n[r++],
          c = t[e++] ^ n[r++],
          d = t[e++] ^ n[r++],
          p = t[e++] ^ n[r++],
          g = t[e++] ^ n[r++],
          y = t[e++] ^ n[r++],
          b = t[e++] ^ n[r++],
          w = t[e++] ^ n[r++],
          G = t[e++] ^ n[r++],
          L = t[e++] ^ n[r++],
          X = t[e++] ^ n[r++],
          U = t[e++] ^ n[r++],
          A = h,
          E = u,
          x = f,
          H = l,
          I = a,
          k = c,
          v = d,
          m = p,
          O = g,
          R = y,
          _ = b,
          B = w,
          C = G,
          J = L,
          j = X,
          D = U;
        for (let t = 0; t < 8; t += 2)
          (I ^= (0, s.XG)((A + C) | 0, 7)),
            (O ^= (0, s.XG)((I + A) | 0, 9)),
            (C ^= (0, s.XG)((O + I) | 0, 13)),
            (A ^= (0, s.XG)((C + O) | 0, 18)),
            (R ^= (0, s.XG)((k + E) | 0, 7)),
            (J ^= (0, s.XG)((R + k) | 0, 9)),
            (E ^= (0, s.XG)((J + R) | 0, 13)),
            (k ^= (0, s.XG)((E + J) | 0, 18)),
            (j ^= (0, s.XG)((_ + v) | 0, 7)),
            (x ^= (0, s.XG)((j + _) | 0, 9)),
            (v ^= (0, s.XG)((x + j) | 0, 13)),
            (_ ^= (0, s.XG)((v + x) | 0, 18)),
            (H ^= (0, s.XG)((D + B) | 0, 7)),
            (m ^= (0, s.XG)((H + D) | 0, 9)),
            (B ^= (0, s.XG)((m + H) | 0, 13)),
            (D ^= (0, s.XG)((B + m) | 0, 18)),
            (E ^= (0, s.XG)((A + H) | 0, 7)),
            (x ^= (0, s.XG)((E + A) | 0, 9)),
            (H ^= (0, s.XG)((x + E) | 0, 13)),
            (A ^= (0, s.XG)((H + x) | 0, 18)),
            (v ^= (0, s.XG)((k + I) | 0, 7)),
            (m ^= (0, s.XG)((v + k) | 0, 9)),
            (I ^= (0, s.XG)((m + v) | 0, 13)),
            (k ^= (0, s.XG)((I + m) | 0, 18)),
            (B ^= (0, s.XG)((_ + R) | 0, 7)),
            (O ^= (0, s.XG)((B + _) | 0, 9)),
            (R ^= (0, s.XG)((O + B) | 0, 13)),
            (_ ^= (0, s.XG)((R + O) | 0, 18)),
            (C ^= (0, s.XG)((D + j) | 0, 7)),
            (J ^= (0, s.XG)((C + D) | 0, 9)),
            (j ^= (0, s.XG)((J + C) | 0, 13)),
            (D ^= (0, s.XG)((j + J) | 0, 18));
        (i[o++] = (h + A) | 0),
          (i[o++] = (u + E) | 0),
          (i[o++] = (f + x) | 0),
          (i[o++] = (l + H) | 0),
          (i[o++] = (a + I) | 0),
          (i[o++] = (c + k) | 0),
          (i[o++] = (d + v) | 0),
          (i[o++] = (p + m) | 0),
          (i[o++] = (g + O) | 0),
          (i[o++] = (y + R) | 0),
          (i[o++] = (b + _) | 0),
          (i[o++] = (w + B) | 0),
          (i[o++] = (G + C) | 0),
          (i[o++] = (L + J) | 0),
          (i[o++] = (X + j) | 0),
          (i[o++] = (U + D) | 0);
      }
      function u(t, e, n, r, i) {
        let o = r + 0,
          s = r + 16 * i;
        for (let r = 0; r < 16; r++) n[s + r] = t[e + (2 * i - 1) * 16 + r];
        for (let r = 0; r < i; r++, o += 16, e += 16)
          h(n, s, t, e, n, o), r > 0 && (s += 16), h(n, o, t, (e += 16), n, s);
      }
      async function f(t, e, n) {
        let {
          N: h,
          r: f,
          p: l,
          dkLen: a,
          blockSize32: c,
          V: d,
          B32: p,
          B: g,
          tmp: y,
          blockMixCb: b,
          asyncTick: w,
        } = (function (t, e, n) {
          let {
            N: h,
            r: u,
            p: f,
            dkLen: l,
            asyncTick: a,
            maxmem: c,
            onProgress: d,
          } = (0, s.U5)({ dkLen: 32, asyncTick: 10, maxmem: 1073742848 }, n);
          if (
            ((0, r.Rx)(h),
            (0, r.Rx)(u),
            (0, r.Rx)(f),
            (0, r.Rx)(l),
            (0, r.Rx)(a),
            (0, r.Rx)(c),
            void 0 !== d && "function" != typeof d)
          )
            throw Error("progressCb should be function");
          let p = 128 * u,
            g = p / 4;
          if (h <= 1 || (h & (h - 1)) != 0 || h > 4294967296)
            throw Error(
              "Scrypt: N must be larger than 1, a power of 2, and less than 2^32",
            );
          if (f < 0 || f > ((4294967296 - 1) * 32) / p)
            throw Error(
              "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
            );
          if (l < 0 || l > (4294967296 - 1) * 32)
            throw Error(
              "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
            );
          let y = p * (h + f);
          if (y > c)
            throw Error(
              `Scrypt: parameters too large, ${y} (128 * r * (N + p)) > ${c} (maxmem)`,
            );
          let b = (0, o.n)(i.JQ, t, e, { c: 1, dkLen: p * f }),
            w = (0, s.Jq)(b),
            G = (0, s.Jq)(new Uint8Array(p * h)),
            L = (0, s.Jq)(new Uint8Array(p)),
            X = () => {};
          if (d) {
            let t = 2 * h * f,
              e = Math.max(Math.floor(t / 1e4), 1),
              n = 0;
            X = () => {
              n++, d && (!(n % e) || n === t) && d(n / t);
            };
          }
          return {
            N: h,
            r: u,
            p: f,
            dkLen: l,
            blockSize32: g,
            V: G,
            B32: w,
            B: b,
            tmp: L,
            blockMixCb: X,
            asyncTick: a,
          };
        })(t, e, n);
        !s.iA && (0, s.l1)(p);
        for (let t = 0; t < l; t++) {
          let e = c * t;
          for (let t = 0; t < c; t++) d[t] = p[e + t];
          let n = 0;
          await (0, s.oY)(h - 1, w, () => {
            u(d, n, d, (n += c), f), b();
          }),
            u(d, (h - 1) * c, p, e, f),
            b(),
            await (0, s.oY)(h, w, () => {
              let t = p[e + c - 16] % h;
              for (let n = 0; n < c; n++) y[n] = p[e + n] ^ d[t * c + n];
              u(y, 0, p, e, f), b();
            });
        }
        return (
          !s.iA && (0, s.l1)(p),
          (function (t, e, n, r, s) {
            let h = (0, o.n)(i.JQ, t, n, { c: 1, dkLen: e });
            return n.fill(0), r.fill(0), s.fill(0), h;
          })(t, a, g, d, y)
        );
      }
    },
    241303: function (t, e, n) {
      n.d(e, {
        JQ: function () {
          return f;
        },
      });
      var r = n(806216),
        i = n(362133);
      let o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        h = new Uint32Array(64);
      class u extends r.VR {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: t, B: e, C: n, D: r, E: i, F: o, G: s, H: h } = this;
          return [t, e, n, r, i, o, s, h];
        }
        set(t, e, n, r, i, o, s, h) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | h);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) h[n] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = h[t - 15],
              n = h[t - 2],
              r = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(n, 17) ^ (0, i.np)(n, 19) ^ (n >>> 10);
            h[t] = (o + h[t - 7] + r + h[t - 16]) | 0;
          }
          let { A: n, B: s, C: u, D: f, E: l, F: a, G: c, H: d } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (d +
                  ((0, i.np)(l, 6) ^ (0, i.np)(l, 11) ^ (0, i.np)(l, 25)) +
                  (0, r.bc)(l, a, c) +
                  o[t] +
                  h[t]) |
                0,
              p =
                (((0, i.np)(n, 2) ^ (0, i.np)(n, 13) ^ (0, i.np)(n, 22)) +
                  (0, r.l3)(n, s, u)) |
                0;
            (d = c),
              (c = a),
              (a = l),
              (l = (f + e) | 0),
              (f = u),
              (u = s),
              (s = n),
              (n = (e + p) | 0);
          }
          (n = (n + this.A) | 0),
            (s = (s + this.B) | 0),
            (u = (u + this.C) | 0),
            (f = (f + this.D) | 0),
            (l = (l + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(n, s, u, f, l, a, c, d);
        }
        roundClean() {
          h.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let f = (0, i.hE)(() => new u());
    },
    362133: function (t, e, n) {
      n.d(e, {
        GL: function () {
          return o;
        },
        Jq: function () {
          return i;
        },
        O0: function () {
          return d;
        },
        U5: function () {
          return y;
        },
        XG: function () {
          return h;
        },
        hE: function () {
          return b;
        },
        iA: function () {
          return u;
        },
        kb: function () {
          return p;
        },
        l1: function () {
          return l;
        },
        np: function () {
          return s;
        },
        oY: function () {
          return c;
        },
      });
      var r = n(180450);
      let i = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        o = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        s = (t, e) => (t << (32 - e)) | (t >>> e),
        h = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
        u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        f = (t) =>
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function l(t) {
        for (let e = 0; e < t.length; e++) t[e] = f(t[e]);
      }
      let a = async () => {};
      async function c(t, e, n) {
        let r = Date.now();
        for (let i = 0; i < t; i++) {
          n(i);
          let t = Date.now() - r;
          (!(t >= 0) || !(t < e)) && (await a(), (r += t));
        }
      }
      function d(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(`utf8ToBytes expected string, got ${typeof t}`);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, r.aI)(t),
          t
        );
      }
      class p {
        clone() {
          return this._cloneInto();
        }
      }
      let g = {}.toString;
      function y(t, e) {
        if (void 0 !== e && "[object Object]" !== g.call(e))
          throw Error("Options should be object or undefined");
        return Object.assign(t, e);
      }
      function b(t) {
        let e = (e) => t().update(d(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
    },
  },
]);
//# sourceMappingURL=8bf53d96253f8503847c.js.map
