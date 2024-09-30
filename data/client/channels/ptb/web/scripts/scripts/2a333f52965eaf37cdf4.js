(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81039"],
  {
    639576: function (e, r, t) {
      "use strict";
      var n = t(147018),
        a = t(345374),
        i = t(886960),
        o = t(49693),
        f = t(980855),
        s = t(299623),
        l = t(959318),
        c = Array,
        u = Math.max,
        d = Math.min;
      n(
        { target: "Array", proto: !0 },
        {
          toSpliced: function (e, r) {
            var t,
              n,
              a,
              v,
              h = s(this),
              p = o(h),
              g = f(e, p),
              b = arguments.length,
              y = 0;
            for (
              0 === b
                ? (t = n = 0)
                : 1 === b
                  ? ((t = 0), (n = p - g))
                  : ((t = b - 2), (n = d(u(l(r), 0), p - g))),
                v = c((a = i(p + t - n)));
              y < g;
              y++
            )
              v[y] = h[y];
            for (; y < g + t; y++) v[y] = arguments[y - g + 2];
            for (; y < a; y++) v[y] = h[y + n - t];
            return v;
          },
        },
      ),
        a("toSpliced");
    },
    817080: function (e) {
      var r =
        r ||
        (function (e) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var r = e.document,
              t = function () {
                return e.URL || e.webkitURL || e;
              },
              n = r.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              a = "download" in n,
              i = function (e) {
                var r = new MouseEvent("click");
                e.dispatchEvent(r);
              },
              o = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              f = e.webkitRequestFileSystem,
              s = e.requestFileSystem || f || e.mozRequestFileSystem,
              l = function (r) {
                (e.setImmediate || e.setTimeout)(function () {
                  throw r;
                }, 0);
              },
              c = "application/octet-stream",
              u = 0,
              d = function (e) {
                setTimeout(function () {
                  "string" == typeof e ? t().revokeObjectURL(e) : e.remove();
                }, 4e4);
              },
              v = function (e, r, t) {
                for (var n = (r = [].concat(r)).length; n--; ) {
                  var a = e["on" + r[n]];
                  if ("function" == typeof a)
                    try {
                      a.call(e, t || e);
                    } catch (e) {
                      l(e);
                    }
                }
              },
              h = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  e.type,
                )
                  ? new Blob(["\xef\xbb\xbf", e], { type: e.type })
                  : e;
              },
              p = function (r, l, p) {
                !p && (r = h(r));
                var g,
                  b,
                  y = this,
                  w = r.type,
                  m = !1,
                  A = function () {
                    v(y, "writestart progress write writeend".split(" "));
                  },
                  U = function () {
                    if (b && o && "undefined" != typeof FileReader) {
                      var n = new FileReader();
                      (n.onloadend = function () {
                        var e = n.result;
                        (b.location.href =
                          "data:attachment/file" + e.slice(e.search(/[,;]/))),
                          (y.readyState = y.DONE),
                          A();
                      }),
                        n.readAsDataURL(r),
                        (y.readyState = y.INIT);
                      return;
                    }
                    (m || !g) && (g = t().createObjectURL(r)),
                      b
                        ? (b.location.href = g)
                        : void 0 === e.open(g, "_blank") &&
                          o &&
                          (e.location.href = g),
                      (y.readyState = y.DONE),
                      A(),
                      d(g);
                  },
                  I = function (e) {
                    return function () {
                      if (y.readyState !== y.DONE)
                        return e.apply(this, arguments);
                    };
                  },
                  R = { create: !0, exclusive: !1 };
                if (((y.readyState = y.INIT), !l && (l = "download"), a)) {
                  (g = t().createObjectURL(r)),
                    setTimeout(function () {
                      (n.href = g),
                        (n.download = l),
                        i(n),
                        A(),
                        d(g),
                        (y.readyState = y.DONE);
                    });
                  return;
                }
                if (
                  (e.chrome &&
                    w &&
                    w !== c &&
                    ((r = (r.slice || r.webkitSlice).call(r, 0, r.size, c)),
                    (m = !0)),
                  f && "download" !== l && (l += ".download"),
                  (w === c || f) && (b = e),
                  !s)
                ) {
                  U();
                  return;
                }
                (u += r.size),
                  s(
                    e.TEMPORARY,
                    u,
                    I(function (e) {
                      e.root.getDirectory(
                        "saved",
                        R,
                        I(function (e) {
                          var t = function () {
                            e.getFile(
                              l,
                              R,
                              I(function (e) {
                                e.createWriter(
                                  I(function (t) {
                                    (t.onwriteend = function (r) {
                                      (b.location.href = e.toURL()),
                                        (y.readyState = y.DONE),
                                        v(y, "writeend", r),
                                        d(e);
                                    }),
                                      (t.onerror = function () {
                                        var e = t.error;
                                        e.code !== e.ABORT_ERR && U();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (e) {
                                          t["on" + e] = y["on" + e];
                                        }),
                                      t.write(r),
                                      (y.abort = function () {
                                        t.abort(), (y.readyState = y.DONE);
                                      }),
                                      (y.readyState = y.WRITING);
                                  }),
                                  U,
                                );
                              }),
                              U,
                            );
                          };
                          e.getFile(
                            l,
                            { create: !1 },
                            I(function (e) {
                              e.remove(), t();
                            }),
                            I(function (e) {
                              e.code === e.NOT_FOUND_ERR ? t() : U();
                            }),
                          );
                        }),
                        U,
                      );
                    }),
                    U,
                  );
              },
              g = p.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (e, r, t) {
                  return (
                    !t && (e = h(e)),
                    navigator.msSaveOrOpenBlob(e, r || "download")
                  );
                }
              : ((g.abort = function () {
                  (this.readyState = this.DONE), v(this, "abort");
                }),
                (g.readyState = g.INIT = 0),
                (g.WRITING = 1),
                (g.DONE = 2),
                (g.error =
                  g.onwritestart =
                  g.onprogress =
                  g.onwrite =
                  g.onabort =
                  g.onerror =
                  g.onwriteend =
                    null),
                function (e, r, t) {
                  return new p(e, r, t);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content,
        );
      e.exports
        ? (e.exports.saveAs = r)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return r;
          });
    },
    785902: function (e) {
      e.exports = function (e, r, t, n) {
        for (var a = -1, i = null == e ? 0 : e.length; ++a < i; ) {
          var o = e[a];
          r(n, o, t(o), e);
        }
        return n;
      };
    },
    800128: function (e, r, t) {
      var n = t(543744);
      e.exports = function (e, r, t, a) {
        return (
          n(e, function (e, n, i) {
            r(a, e, t(e), i);
          }),
          a
        );
      };
    },
    757009: function (e, r, t) {
      var n = t(785902),
        a = t(800128),
        i = t(256098),
        o = t(290677);
      e.exports = function (e, r) {
        return function (t, f) {
          var s = o(t) ? n : a,
            l = r ? r() : {};
          return s(t, e, i(f, 2), l);
        };
      };
    },
    979079: function (e, r, t) {
      var n = t(685347),
        a = t(757009)(function (e, r, t) {
          n(e, t, r);
        });
      e.exports = a;
    },
    943418: function (e, r, t) {
      var n = t(383083);
      (r.encode = n.encode), (r.decode = n.decode);
    },
    383083: function (e, r, t) {
      var n = t(413135).Buffer,
        a = [
          255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
        ];
      (r.encode = function (e) {
        !n.isBuffer(e) && (e = new n(e));
        var r,
          t,
          a = 0,
          i = 0,
          o = 0,
          f = 0;
        for (
          var s = new n(
            8 *
              ((t = Math.floor((r = e).length / 5)),
              r.length % 5 == 0 ? t : t + 1),
          );
          a < e.length;

        ) {
          var l = e[a];
          o > 3
            ? ((f =
                ((f = l & (255 >> o)) << (o = (o + 5) % 8)) |
                ((a + 1 < e.length ? e[a + 1] : 0) >> (8 - o))),
              a++)
            : ((f = (l >> (8 - (o + 5))) & 31), 0 == (o = (o + 5) % 8) && a++),
            (s[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(f)),
            i++;
        }
        for (a = i; a < s.length; a++) s[a] = 61;
        return s;
      }),
        (r.decode = function (e) {
          var r,
            t = 0,
            i = 0,
            o = 0;
          !n.isBuffer(e) && (e = new n(e));
          for (
            var f = new n(Math.ceil((5 * e.length) / 8)), s = 0;
            s < e.length && 61 != e[s];
            s++
          ) {
            var l = e[s] - 48;
            if (l < a.length)
              (i = a[l]),
                t <= 3
                  ? 0 == (t = (t + 5) % 8)
                    ? ((r |= i), (f[o] = r), o++, (r = 0))
                    : (r |= 255 & (i << (8 - t)))
                  : ((r |= 255 & (i >>> (t = (t + 5) % 8))),
                    (f[o] = r),
                    o++,
                    (r = 255 & (i << (8 - t))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return f.slice(0, o);
        });
    },
    423891: function (e, r, t) {
      var n, a, i, o;
      t(444675),
        (a = {}),
        (e.exports = a),
        (n = t(457854)),
        (i = a),
        (o = n),
        (i.toRGBA8 = function (e) {
          var r = e.width,
            t = e.height;
          if (null == e.tabs.acTL)
            return [i.toRGBA8.decodeImage(e.data, r, t, e).buffer];
          var n = [];
          null == e.frames[0].data && (e.frames[0].data = e.data);
          for (
            var a, o = new Uint8Array(r * t * 4), f = 0;
            f < e.frames.length;
            f++
          ) {
            var s = e.frames[f],
              l = s.rect.x,
              c = s.rect.y,
              u = s.rect.width,
              d = s.rect.height,
              v = i.toRGBA8.decodeImage(s.data, u, d, e);
            if (
              (0 == f
                ? (a = v)
                : 0 == s.blend
                  ? i._copyTile(v, u, d, a, r, t, l, c, 0)
                  : 1 == s.blend && i._copyTile(v, u, d, a, r, t, l, c, 1),
              n.push(a.buffer),
              (a = a.slice(0)),
              0 == s.dispose)
            );
            else if (1 == s.dispose) i._copyTile(o, u, d, a, r, t, l, c, 0);
            else if (2 == s.dispose) {
              for (var h = f - 1; 2 == e.frames[h].dispose; ) h--;
              a = new Uint8Array(n[h]).slice(0);
            }
          }
          return n;
        }),
        (i.toRGBA8.decodeImage = function (e, r, t, n) {
          var a = r * t,
            o = Math.ceil((r * i.decode._getBPP(n)) / 8),
            f = new Uint8Array(4 * a),
            s = new Uint32Array(f.buffer),
            l = n.ctype,
            c = n.depth,
            u = i._bin.readUshort;
          if (6 == l) {
            var d = a << 2;
            if (8 == c) for (var v = 0; v < d; v++) f[v] = e[v];
            if (16 == c) for (var v = 0; v < d; v++) f[v] = e[v << 1];
          } else if (2 == l) {
            var h = n.tabs.tRNS,
              p = -1,
              g = -1,
              b = -1;
            if ((h && ((p = h[0]), (g = h[1]), (b = h[2])), 8 == c))
              for (var v = 0; v < a; v++) {
                var y = v << 2,
                  w = 3 * v;
                (f[y] = e[w]),
                  (f[y + 1] = e[w + 1]),
                  (f[y + 2] = e[w + 2]),
                  (f[y + 3] = 255),
                  -1 != p &&
                    e[w] == p &&
                    e[w + 1] == g &&
                    e[w + 2] == b &&
                    (f[y + 3] = 0);
              }
            if (16 == c)
              for (var v = 0; v < a; v++) {
                var y = v << 2,
                  w = 6 * v;
                (f[y] = e[w]),
                  (f[y + 1] = e[w + 2]),
                  (f[y + 2] = e[w + 4]),
                  (f[y + 3] = 255),
                  -1 != p &&
                    u(e, w) == p &&
                    u(e, w + 2) == g &&
                    u(e, w + 4) == b &&
                    (f[y + 3] = 0);
              }
          } else if (3 == l) {
            var m = n.tabs.PLTE,
              A = n.tabs.tRNS,
              U = A ? A.length : 0;
            if (1 == c)
              for (var I = 0; I < t; I++) {
                for (var R = I * o, _ = I * r, v = 0; v < r; v++) {
                  var y = (_ + v) << 2,
                    S = (e[R + (v >> 3)] >> (7 - ((7 & v) << 0))) & 1,
                    N = 3 * S;
                  (f[y] = m[N]),
                    (f[y + 1] = m[N + 1]),
                    (f[y + 2] = m[N + 2]),
                    (f[y + 3] = S < U ? A[S] : 255);
                }
              }
            if (2 == c)
              for (var I = 0; I < t; I++) {
                for (var R = I * o, _ = I * r, v = 0; v < r; v++) {
                  var y = (_ + v) << 2,
                    S = (e[R + (v >> 2)] >> (6 - ((3 & v) << 1))) & 3,
                    N = 3 * S;
                  (f[y] = m[N]),
                    (f[y + 1] = m[N + 1]),
                    (f[y + 2] = m[N + 2]),
                    (f[y + 3] = S < U ? A[S] : 255);
                }
              }
            if (4 == c)
              for (var I = 0; I < t; I++) {
                for (var R = I * o, _ = I * r, v = 0; v < r; v++) {
                  var y = (_ + v) << 2,
                    S = (e[R + (v >> 1)] >> (4 - ((1 & v) << 2))) & 15,
                    N = 3 * S;
                  (f[y] = m[N]),
                    (f[y + 1] = m[N + 1]),
                    (f[y + 2] = m[N + 2]),
                    (f[y + 3] = S < U ? A[S] : 255);
                }
              }
            if (8 == c)
              for (var v = 0; v < a; v++) {
                var y = v << 2,
                  S = e[v],
                  N = 3 * S;
                (f[y] = m[N]),
                  (f[y + 1] = m[N + 1]),
                  (f[y + 2] = m[N + 2]),
                  (f[y + 3] = S < U ? A[S] : 255);
              }
          } else if (4 == l) {
            if (8 == c)
              for (var v = 0; v < a; v++) {
                var y = v << 2,
                  T = v << 1,
                  M = e[T];
                (f[y] = M),
                  (f[y + 1] = M),
                  (f[y + 2] = M),
                  (f[y + 3] = e[T + 1]);
              }
            if (16 == c)
              for (var v = 0; v < a; v++) {
                var y = v << 2,
                  T = v << 2,
                  M = e[T];
                (f[y] = M),
                  (f[y + 1] = M),
                  (f[y + 2] = M),
                  (f[y + 3] = e[T + 2]);
              }
          } else if (0 == l) {
            var p = n.tabs.tRNS ? n.tabs.tRNS : -1;
            if (1 == c)
              for (var v = 0; v < a; v++) {
                var M = 255 * ((e[v >> 3] >> (7 - (7 & v))) & 1),
                  q = M == 255 * p ? 0 : 255;
                s[v] = (q << 24) | (M << 16) | (M << 8) | M;
              }
            if (2 == c)
              for (var v = 0; v < a; v++) {
                var M = 85 * ((e[v >> 2] >> (6 - ((3 & v) << 1))) & 3),
                  q = M == 85 * p ? 0 : 255;
                s[v] = (q << 24) | (M << 16) | (M << 8) | M;
              }
            if (4 == c)
              for (var v = 0; v < a; v++) {
                var M = 17 * ((e[v >> 1] >> (4 - ((1 & v) << 2))) & 15),
                  q = M == 17 * p ? 0 : 255;
                s[v] = (q << 24) | (M << 16) | (M << 8) | M;
              }
            if (8 == c)
              for (var v = 0; v < a; v++) {
                var M = e[v],
                  q = M == p ? 0 : 255;
                s[v] = (q << 24) | (M << 16) | (M << 8) | M;
              }
            if (16 == c)
              for (var v = 0; v < a; v++) {
                var M = e[v << 1],
                  q = u(e, v << 1) == p ? 0 : 255;
                s[v] = (q << 24) | (M << 16) | (M << 8) | M;
              }
          }
          return f;
        }),
        (i.decode = function (e) {
          for (
            var r = new Uint8Array(e),
              t = 8,
              n = i._bin,
              a = n.readUshort,
              o = n.readUint,
              f = { tabs: {}, frames: [] },
              s = new Uint8Array(r.length),
              l = 0,
              c,
              u = 0,
              d = [137, 80, 78, 71, 13, 10, 26, 10],
              v = 0;
            v < 8;
            v++
          )
            if (r[v] != d[v]) throw "The input is not a PNG file!";
          for (; t < r.length; ) {
            var h = n.readUint(r, t);
            t += 4;
            var p = n.readASCII(r, t, 4);
            if (((t += 4), "IHDR" == p)) i.decode._IHDR(r, t, f);
            else if ("IDAT" == p) {
              for (var v = 0; v < h; v++) s[l + v] = r[t + v];
              l += h;
            } else if ("acTL" == p)
              (f.tabs[p] = { num_frames: o(r, t), num_plays: o(r, t + 4) }),
                (c = new Uint8Array(r.length));
            else if ("fcTL" == p) {
              if (0 != u) {
                var g = f.frames[f.frames.length - 1];
                (g.data = i.decode._decompress(
                  f,
                  c.slice(0, u),
                  g.rect.width,
                  g.rect.height,
                )),
                  (u = 0);
              }
              var b = {
                  x: o(r, t + 12),
                  y: o(r, t + 16),
                  width: o(r, t + 4),
                  height: o(r, t + 8),
                },
                y = a(r, t + 22),
                w = {
                  rect: b,
                  delay: Math.round(
                    1e3 * (y = a(r, t + 20) / (0 == y ? 100 : y)),
                  ),
                  dispose: r[t + 24],
                  blend: r[t + 25],
                };
              f.frames.push(w);
            } else if ("fdAT" == p) {
              for (var v = 0; v < h - 4; v++) c[u + v] = r[t + v + 4];
              u += h - 4;
            } else if ("pHYs" == p)
              f.tabs[p] = [n.readUint(r, t), n.readUint(r, t + 4), r[t + 8]];
            else if ("cHRM" == p) {
              f.tabs[p] = [];
              for (var v = 0; v < 8; v++)
                f.tabs[p].push(n.readUint(r, t + 4 * v));
            } else if ("tEXt" == p) {
              null == f.tabs[p] && (f.tabs[p] = {});
              var m = n.nextZero(r, t),
                A = n.readASCII(r, t, m - t),
                U = n.readASCII(r, m + 1, t + h - m - 1);
              f.tabs[p][A] = U;
            } else if ("iTXt" == p) {
              null == f.tabs[p] && (f.tabs[p] = {});
              var m = 0,
                I = t;
              m = n.nextZero(r, I);
              var A = n.readASCII(r, I, m - I);
              r[(I = m + 1)],
                r[I + 1],
                (I += 2),
                (m = n.nextZero(r, I)),
                n.readASCII(r, I, m - I),
                (I = m + 1),
                (m = n.nextZero(r, I)),
                n.readUTF8(r, I, m - I),
                (I = m + 1);
              var U = n.readUTF8(r, I, h - (I - t));
              f.tabs[p][A] = U;
            } else if ("PLTE" == p) f.tabs[p] = n.readBytes(r, t, h);
            else if ("hIST" == p) {
              var R = f.tabs.PLTE.length / 3;
              f.tabs[p] = [];
              for (var v = 0; v < R; v++) f.tabs[p].push(a(r, t + 2 * v));
            } else if ("tRNS" == p)
              3 == f.ctype
                ? (f.tabs[p] = n.readBytes(r, t, h))
                : 0 == f.ctype
                  ? (f.tabs[p] = a(r, t))
                  : 2 == f.ctype &&
                    (f.tabs[p] = [a(r, t), a(r, t + 2), a(r, t + 4)]);
            else if ("gAMA" == p) f.tabs[p] = n.readUint(r, t) / 1e5;
            else if ("sRGB" == p) f.tabs[p] = r[t];
            else if ("bKGD" == p)
              0 == f.ctype || 4 == f.ctype
                ? (f.tabs[p] = [a(r, t)])
                : 2 == f.ctype || 6 == f.ctype
                  ? (f.tabs[p] = [a(r, t), a(r, t + 2), a(r, t + 4)])
                  : 3 == f.ctype && (f.tabs[p] = r[t]);
            else if ("IEND" == p) {
              if (0 != u) {
                var g = f.frames[f.frames.length - 1];
                (g.data = i.decode._decompress(
                  f,
                  c.slice(0, u),
                  g.rect.width,
                  g.rect.height,
                )),
                  (u = 0);
              }
              f.data = i.decode._decompress(f, s, f.width, f.height);
              break;
            }
            (t += h), n.readUint(r, t), (t += 4);
          }
          return delete f.compress, delete f.interlace, delete f.filter, f;
        }),
        (i.decode._decompress = function (e, r, t, n) {
          return (
            0 == e.compress && (r = i.decode._inflate(r)),
            0 == e.interlace
              ? (r = i.decode._filterZero(r, e, 0, t, n))
              : 1 == e.interlace && (r = i.decode._readInterlace(r, e)),
            r
          );
        }),
        (i.decode._inflate = function (e) {
          return o.inflate(e);
        }),
        (i.decode._readInterlace = function (e, r) {
          for (
            var t = r.width,
              n = r.height,
              a = i.decode._getBPP(r),
              o = a >> 3,
              f = Math.ceil((t * a) / 8),
              s = new Uint8Array(n * f),
              l = 0,
              c = [0, 0, 4, 0, 2, 0, 1],
              u = [0, 4, 0, 2, 0, 1, 0],
              d = [8, 8, 8, 4, 4, 2, 2],
              v = [8, 8, 4, 4, 2, 2, 1],
              h = 0;
            h < 7;

          ) {
            for (var p = d[h], g = v[h], b = 0, y = 0, w = c[h]; w < n; )
              (w += p), y++;
            for (var m = u[h]; m < t; ) (m += g), b++;
            var A = Math.ceil((b * a) / 8);
            i.decode._filterZero(e, r, l, b, y);
            for (var U = 0, I = c[h]; I < n; ) {
              for (var R = u[h], _ = (l + U * A) << 3; R < t; ) {
                if (1 == a) {
                  var S = e[_ >> 3];
                  (S = (S >> (7 - (7 & _))) & 1),
                    (s[I * f + (R >> 3)] |= S << (7 - ((3 & R) << 0)));
                }
                if (2 == a) {
                  var S = e[_ >> 3];
                  (S = (S >> (6 - (7 & _))) & 3),
                    (s[I * f + (R >> 2)] |= S << (6 - ((3 & R) << 1)));
                }
                if (4 == a) {
                  var S = e[_ >> 3];
                  (S = (S >> (4 - (7 & _))) & 15),
                    (s[I * f + (R >> 1)] |= S << (4 - ((1 & R) << 2)));
                }
                if (a >= 8) {
                  for (var N = I * f + R * o, T = 0; T < o; T++)
                    s[N + T] = e[(_ >> 3) + T];
                }
                (_ += a), (R += g);
              }
              U++, (I += p);
            }
            b * y != 0 && (l += y * (1 + A)), (h += 1);
          }
          return s;
        }),
        (i.decode._getBPP = function (e) {
          return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth;
        }),
        (i.decode._filterZero = function (e, r, t, n, a) {
          var o = i.decode._getBPP(r),
            f = Math.ceil((n * o) / 8),
            s = i.decode._paeth;
          o = Math.ceil(o / 8);
          for (var l = 0; l < a; l++) {
            var c = t + l * f,
              u = c + l + 1,
              d = e[u - 1];
            if (0 == d) for (var v = 0; v < f; v++) e[c + v] = e[u + v];
            else if (1 == d) {
              for (var v = 0; v < o; v++) e[c + v] = e[u + v];
              for (var v = o; v < f; v++)
                e[c + v] = (e[u + v] + e[c + v - o]) & 255;
            } else if (0 == l) {
              for (var v = 0; v < o; v++) e[c + v] = e[u + v];
              if (2 == d) for (var v = o; v < f; v++) e[c + v] = 255 & e[u + v];
              if (3 == d)
                for (var v = o; v < f; v++)
                  e[c + v] = (e[u + v] + (e[c + v - o] >> 1)) & 255;
              if (4 == d)
                for (var v = o; v < f; v++)
                  e[c + v] = (e[u + v] + s(e[c + v - o], 0, 0)) & 255;
            } else {
              if (2 == d)
                for (var v = 0; v < f; v++)
                  e[c + v] = (e[u + v] + e[c + v - f]) & 255;
              if (3 == d) {
                for (var v = 0; v < o; v++)
                  e[c + v] = (e[u + v] + (e[c + v - f] >> 1)) & 255;
                for (var v = o; v < f; v++)
                  e[c + v] =
                    (e[u + v] + ((e[c + v - f] + e[c + v - o]) >> 1)) & 255;
              }
              if (4 == d) {
                for (var v = 0; v < o; v++)
                  e[c + v] = (e[u + v] + s(0, e[c + v - f], 0)) & 255;
                for (var v = o; v < f; v++)
                  e[c + v] =
                    (e[u + v] +
                      s(e[c + v - o], e[c + v - f], e[c + v - o - f])) &
                    255;
              }
            }
          }
          return e;
        }),
        (i.decode._paeth = function (e, r, t) {
          var n = e + r - t,
            a = Math.abs(n - e),
            i = Math.abs(n - r),
            o = Math.abs(n - t);
          return a <= i && a <= o ? e : i <= o ? r : t;
        }),
        (i.decode._IHDR = function (e, r, t) {
          var n = i._bin;
          (t.width = n.readUint(e, r)),
            (r += 4),
            (t.height = n.readUint(e, r)),
            (r += 4),
            (t.depth = e[r]),
            r++,
            (t.ctype = e[r]),
            r++,
            (t.compress = e[r]),
            r++,
            (t.filter = e[r]),
            r++,
            (t.interlace = e[r]),
            r++;
        }),
        (i._bin = {
          nextZero: function (e, r) {
            for (; 0 != e[r]; ) r++;
            return r;
          },
          readUshort: function (e, r) {
            return (e[r] << 8) | e[r + 1];
          },
          writeUshort: function (e, r, t) {
            (e[r] = (t >> 8) & 255), (e[r + 1] = 255 & t);
          },
          readUint: function (e, r) {
            return (
              16777216 * e[r] + ((e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3])
            );
          },
          writeUint: function (e, r, t) {
            (e[r] = (t >> 24) & 255),
              (e[r + 1] = (t >> 16) & 255),
              (e[r + 2] = (t >> 8) & 255),
              (e[r + 3] = 255 & t);
          },
          readASCII: function (e, r, t) {
            for (var n = "", a = 0; a < t; a++)
              n += String.fromCharCode(e[r + a]);
            return n;
          },
          writeASCII: function (e, r, t) {
            for (var n = 0; n < t.length; n++) e[r + n] = t.charCodeAt(n);
          },
          readBytes: function (e, r, t) {
            for (var n = [], a = 0; a < t; a++) n.push(e[r + a]);
            return n;
          },
          pad: function (e) {
            return e.length < 2 ? "0" + e : e;
          },
          readUTF8: function (e, r, t) {
            for (var n, a = "", o = 0; o < t; o++)
              a += "%" + i._bin.pad(e[r + o].toString(16));
            try {
              n = decodeURIComponent(a);
            } catch (n) {
              return i._bin.readASCII(e, r, t);
            }
            return n;
          },
        }),
        (i._copyTile = function (e, r, t, n, a, i, o, f, s) {
          for (
            var l = Math.min(r, a), c = Math.min(t, i), u = 0, d = 0, v = 0;
            v < c;
            v++
          )
            for (var h = 0; h < l; h++)
              if (
                (o >= 0 && f >= 0
                  ? ((u = (v * r + h) << 2), (d = ((f + v) * a + o + h) << 2))
                  : ((u = ((-f + v) * r - o + h) << 2), (d = (v * a + h) << 2)),
                0 == s)
              )
                (n[d] = e[u]),
                  (n[d + 1] = e[u + 1]),
                  (n[d + 2] = e[u + 2]),
                  (n[d + 3] = e[u + 3]);
              else if (1 == s) {
                var p = e[u + 3] * (1 / 255),
                  g = e[u] * p,
                  b = e[u + 1] * p,
                  y = e[u + 2] * p,
                  w = n[d + 3] * (1 / 255),
                  m = n[d] * w,
                  A = n[d + 1] * w,
                  U = n[d + 2] * w,
                  I = 1 - p,
                  R = p + w * I,
                  _ = 0 == R ? 0 : 1 / R;
                (n[d + 3] = 255 * R),
                  (n[d + 0] = (g + m * I) * _),
                  (n[d + 1] = (b + A * I) * _),
                  (n[d + 2] = (y + U * I) * _);
              } else if (2 == s) {
                var p = e[u + 3],
                  g = e[u],
                  b = e[u + 1],
                  y = e[u + 2],
                  w = n[d + 3],
                  m = n[d],
                  A = n[d + 1],
                  U = n[d + 2];
                p == w && g == m && b == A && y == U
                  ? ((n[d] = 0), (n[d + 1] = 0), (n[d + 2] = 0), (n[d + 3] = 0))
                  : ((n[d] = g),
                    (n[d + 1] = b),
                    (n[d + 2] = y),
                    (n[d + 3] = p));
              } else if (3 == s) {
                var p = e[u + 3],
                  g = e[u],
                  b = e[u + 1],
                  y = e[u + 2],
                  w = n[d + 3],
                  m = n[d],
                  A = n[d + 1],
                  U = n[d + 2];
                if (p == w && g == m && b == A && y == U) continue;
                if (p < 220 && w > 20) return !1;
              }
          return !0;
        }),
        (i.encode = function (e, r, t, n, a, o) {
          null == n && (n = 0), null == o && (o = !1);
          for (
            var f = new Uint8Array(e[0].byteLength * e.length + 100),
              s = [137, 80, 78, 71, 13, 10, 26, 10],
              l = 0;
            l < 8;
            l++
          )
            f[l] = s[l];
          var c = 8,
            u = i._bin,
            d = i.crc.crc,
            v = u.writeUint,
            h = u.writeUshort,
            p = u.writeASCII,
            g = i.encode.compressPNG(e, r, t, n, o);
          v(f, c, 13),
            p(f, (c += 4), "IHDR"),
            v(f, (c += 4), r),
            v(f, (c += 4), t),
            (f[(c += 4)] = g.depth),
            (f[++c] = g.ctype),
            (f[++c] = 0),
            (f[++c] = 0),
            (f[++c] = 0),
            v(f, ++c, d(f, c - 17, 17)),
            v(f, (c += 4), 1),
            p(f, (c += 4), "sRGB"),
            (f[(c += 4)] = 1),
            v(f, ++c, d(f, c - 5, 5)),
            (c += 4);
          var b = e.length > 1;
          if (
            (b &&
              (v(f, c, 8),
              p(f, (c += 4), "acTL"),
              v(f, (c += 4), e.length),
              v(f, (c += 4), 0),
              v(f, (c += 4), d(f, c - 12, 12)),
              (c += 4)),
            3 == g.ctype)
          ) {
            var y = g.plte.length;
            v(f, c, 3 * y), p(f, (c += 4), "PLTE"), (c += 4);
            for (var l = 0; l < y; l++) {
              var w = 3 * l,
                m = g.plte[l],
                A = 255 & m,
                U = (m >> 8) & 255,
                I = (m >> 16) & 255;
              (f[c + w + 0] = A), (f[c + w + 1] = U), (f[c + w + 2] = I);
            }
            if (
              (v(f, (c += 3 * y), d(f, c - 3 * y - 4, 3 * y + 4)),
              (c += 4),
              g.gotAlpha)
            ) {
              v(f, c, y), p(f, (c += 4), "tRNS"), (c += 4);
              for (var l = 0; l < y; l++) f[c + l] = (g.plte[l] >> 24) & 255;
              v(f, (c += y), d(f, c - y - 4, y + 4)), (c += 4);
            }
          }
          for (var R = 0, _ = 0; _ < g.frames.length; _++) {
            var S = g.frames[_];
            b &&
              (v(f, c, 26),
              p(f, (c += 4), "fcTL"),
              v(f, (c += 4), R++),
              v(f, (c += 4), S.rect.width),
              v(f, (c += 4), S.rect.height),
              v(f, (c += 4), S.rect.x),
              v(f, (c += 4), S.rect.y),
              h(f, (c += 4), a[_]),
              h(f, (c += 2), 1e3),
              (f[(c += 2)] = S.dispose),
              (f[++c] = S.blend),
              v(f, ++c, d(f, c - 30, 30)),
              (c += 4));
            var N = S.cimg,
              y = N.length;
            v(f, c, y + (0 == _ ? 0 : 4));
            var T = (c += 4);
            p(f, c, 0 == _ ? "IDAT" : "fdAT"),
              (c += 4),
              0 != _ && (v(f, c, R++), (c += 4));
            for (var l = 0; l < y; l++) f[c + l] = N[l];
            v(f, (c += y), d(f, T, c - T)), (c += 4);
          }
          return (
            v(f, c, 0),
            p(f, (c += 4), "IEND"),
            v(f, (c += 4), d(f, c - 4, 4)),
            (c += 4),
            f.buffer.slice(0, c)
          );
        }),
        (i.encode.compressPNG = function (e, r, t, n, a) {
          for (
            var o = i.encode.compress(e, r, t, n, !1, a), f = 0;
            f < e.length;
            f++
          ) {
            var s = o.frames[f],
              l = (s.rect.width, s.rect.height),
              c = s.bpl,
              u = s.bpp,
              d = new Uint8Array(l * c + l);
            s.cimg = i.encode._filterZero(s.img, l, u, c, d);
          }
          return o;
        }),
        (i.encode.compress = function (e, r, t, n, a, o) {
          null == o && (o = !1);
          for (var f = 6, s = 8, l = 4, c = 255, u = 0; u < e.length; u++) {
            for (
              var d = new Uint8Array(e[u]), v = d.length, h = 0;
              h < v;
              h += 4
            )
              c &= d[h + 3];
          }
          var p = 255 != c,
            g = {},
            b = [];
          if (
            (0 != e.length && ((g[0] = 0), b.push(0), 0 != n && n--), 0 != n)
          ) {
            var y = i.quantize(e, n, a);
            e = y.bufs;
            for (var h = 0; h < y.plte.length; h++) {
              var w = y.plte[h].est.rgba;
              null == g[w] && ((g[w] = b.length), b.push(w));
            }
          } else
            for (var u = 0; u < e.length; u++) {
              for (
                var m = new Uint32Array(e[u]), v = m.length, h = 0;
                h < v;
                h++
              ) {
                var w = m[h];
                if (
                  (h < r || (w != m[h - 1] && w != m[h - r])) &&
                  null == g[w] &&
                  ((g[w] = b.length), b.push(w), b.length >= 300)
                )
                  break;
              }
            }
          var A = !!p && a,
            U = b.length;
          U <= 256 &&
            !1 == o &&
            ((s = U <= 2 ? 1 : U <= 4 ? 2 : U <= 16 ? 4 : 8),
            a && (s = 8),
            (p = !0));
          for (var I = [], u = 0; u < e.length; u++) {
            var R = new Uint8Array(e[u]),
              _ = new Uint32Array(R.buffer),
              S = 0,
              N = 0,
              T = r,
              M = t,
              q = 0;
            if (0 != u && !A) {
              for (
                var x = a || 1 == u || 2 == I[I.length - 2].dispose ? 1 : 2,
                  E = 0,
                  D = 1e9,
                  C = 0;
                C < x;
                C++
              ) {
                for (
                  var O = new Uint8Array(e[u - 1 - C]),
                    z = new Uint32Array(e[u - 1 - C]),
                    L = r,
                    B = t,
                    P = -1,
                    k = -1,
                    G = 0;
                  G < t;
                  G++
                )
                  for (var F = 0; F < r; F++) {
                    var h = G * r + F;
                    _[h] != z[h] &&
                      (F < L && (L = F),
                      F > P && (P = F),
                      G < B && (B = G),
                      G > k && (k = G));
                  }
                var Z = -1 == P ? 1 : (P - L + 1) * (k - B + 1);
                Z < D &&
                  ((D = Z),
                  (E = C),
                  -1 == P
                    ? ((S = N = 0), (T = M = 1))
                    : ((S = L), (N = B), (T = P - L + 1), (M = k - B + 1)));
              }
              var O = new Uint8Array(e[u - 1 - E]);
              1 == E && (I[I.length - 1].dispose = 2);
              var H = new Uint8Array(T * M * 4);
              new Uint32Array(H.buffer),
                i._copyTile(O, r, t, H, T, M, -S, -N, 0),
                i._copyTile(R, r, t, H, T, M, -S, -N, 3)
                  ? (i._copyTile(R, r, t, H, T, M, -S, -N, 2), (q = 1))
                  : (i._copyTile(R, r, t, H, T, M, -S, -N, 0), (q = 0)),
                (_ = new Uint32Array((R = H).buffer));
            }
            var j = 4 * T;
            if (U <= 256 && !1 == o) {
              for (
                var H = new Uint8Array((j = Math.ceil((s * T) / 8)) * M), G = 0;
                G < M;
                G++
              ) {
                var h = G * j,
                  K = G * T;
                if (8 == s) for (var F = 0; F < T; F++) H[h + F] = g[_[K + F]];
                else if (4 == s)
                  for (var F = 0; F < T; F++)
                    H[h + (F >> 1)] |= g[_[K + F]] << (4 - (1 & F) * 4);
                else if (2 == s)
                  for (var F = 0; F < T; F++)
                    H[h + (F >> 2)] |= g[_[K + F]] << (6 - (3 & F) * 2);
                else if (1 == s)
                  for (var F = 0; F < T; F++)
                    H[h + (F >> 3)] |= g[_[K + F]] << (7 - (7 & F) * 1);
              }
              (R = H), (f = 3), (l = 1);
            } else if (!1 == p && 1 == e.length) {
              for (
                var H = new Uint8Array(T * M * 3), V = T * M, h = 0;
                h < V;
                h++
              ) {
                var W = 3 * h,
                  J = 4 * h;
                (H[W] = R[J]), (H[W + 1] = R[J + 1]), (H[W + 2] = R[J + 2]);
              }
              (R = H), (f = 2), (l = 3), (j = 3 * T);
            }
            I.push({
              rect: { x: S, y: N, width: T, height: M },
              img: R,
              bpl: j,
              bpp: l,
              blend: q,
              dispose: A ? 1 : 0,
            });
          }
          return { ctype: f, depth: s, plte: b, gotAlpha: p, frames: I };
        }),
        (i.encode._filterZero = function (e, r, t, n, a) {
          for (var f = [], s = 0; s < 5; s++)
            if (!(r * n > 5e5) || (2 != s && 3 != s && 4 != s)) {
              for (var l = 0; l < r; l++)
                i.encode._filterLine(a, e, l, n, t, s);
              if ((f.push(o.deflate(a)), 1 == t)) break;
            }
          for (var c, u = 1e9, d = 0; d < f.length; d++)
            f[d].length < u && ((c = d), (u = f[d].length));
          return f[c];
        }),
        (i.encode._filterLine = function (e, r, t, n, a, o) {
          var f = t * n,
            s = f + t,
            l = i.decode._paeth;
          if (((e[s] = o), s++, 0 == o))
            for (var c = 0; c < n; c++) e[s + c] = r[f + c];
          else if (1 == o) {
            for (var c = 0; c < a; c++) e[s + c] = r[f + c];
            for (var c = a; c < n; c++)
              e[s + c] = (r[f + c] - r[f + c - a] + 256) & 255;
          } else if (0 == t) {
            for (var c = 0; c < a; c++) e[s + c] = r[f + c];
            if (2 == o) for (var c = a; c < n; c++) e[s + c] = r[f + c];
            if (3 == o)
              for (var c = a; c < n; c++)
                e[s + c] = (r[f + c] - (r[f + c - a] >> 1) + 256) & 255;
            if (4 == o)
              for (var c = a; c < n; c++)
                e[s + c] = (r[f + c] - l(r[f + c - a], 0, 0) + 256) & 255;
          } else {
            if (2 == o)
              for (var c = 0; c < n; c++)
                e[s + c] = (r[f + c] + 256 - r[f + c - n]) & 255;
            if (3 == o) {
              for (var c = 0; c < a; c++)
                e[s + c] = (r[f + c] + 256 - (r[f + c - n] >> 1)) & 255;
              for (var c = a; c < n; c++)
                e[s + c] =
                  (r[f + c] + 256 - ((r[f + c - n] + r[f + c - a]) >> 1)) & 255;
            }
            if (4 == o) {
              for (var c = 0; c < a; c++)
                e[s + c] = (r[f + c] + 256 - l(0, r[f + c - n], 0)) & 255;
              for (var c = a; c < n; c++)
                e[s + c] =
                  (r[f + c] +
                    256 -
                    l(r[f + c - a], r[f + c - n], r[f + c - a - n])) &
                  255;
            }
          }
        }),
        (i.crc = {
          table: (function () {
            for (var e = new Uint32Array(256), r = 0; r < 256; r++) {
              for (var t = r, n = 0; n < 8; n++)
                1 & t ? (t = 3988292384 ^ (t >>> 1)) : (t >>>= 1);
              e[r] = t;
            }
            return e;
          })(),
          update: function (e, r, t, n) {
            for (var a = 0; a < n; a++)
              e = i.crc.table[(e ^ r[t + a]) & 255] ^ (e >>> 8);
            return e;
          },
          crc: function (e, r, t) {
            return 4294967295 ^ i.crc.update(4294967295, e, r, t);
          },
        }),
        (i.quantize = function (e, r, t) {
          for (var n = [], a = 0, o = 0; o < e.length; o++)
            n.push(i.encode.alphaMul(new Uint8Array(e[o]), t)),
              (a += e[o].byteLength);
          for (
            var f = new Uint8Array(a),
              s = new Uint32Array(f.buffer),
              l = 0,
              o = 0;
            o < n.length;
            o++
          ) {
            for (var c = n[o], u = c.length, d = 0; d < u; d++) f[l + d] = c[d];
            l += u;
          }
          var v = {
            i0: 0,
            i1: f.length,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null,
          };
          (v.bst = i.quantize.stats(f, v.i0, v.i1)),
            (v.est = i.quantize.estats(v.bst));
          for (var h = [v]; h.length < r; ) {
            for (var p = 0, g = 0, o = 0; o < h.length; o++)
              h[o].est.L > p && ((p = h[o].est.L), (g = o));
            if (p < 0.001) break;
            var b = h[g],
              y = i.quantize.splitPixels(
                f,
                s,
                b.i0,
                b.i1,
                b.est.e,
                b.est.eMq255,
              ),
              w = {
                i0: b.i0,
                i1: y,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null,
              };
            (w.bst = i.quantize.stats(f, w.i0, w.i1)),
              (w.est = i.quantize.estats(w.bst));
            var m = {
              i0: y,
              i1: b.i1,
              bst: null,
              est: null,
              tdst: 0,
              left: null,
              right: null,
            };
            m.bst = { R: [], m: [], N: b.bst.N - w.bst.N };
            for (var o = 0; o < 16; o++) m.bst.R[o] = b.bst.R[o] - w.bst.R[o];
            for (var o = 0; o < 4; o++) m.bst.m[o] = b.bst.m[o] - w.bst.m[o];
            (m.est = i.quantize.estats(m.bst)),
              (b.left = w),
              (b.right = m),
              (h[g] = w),
              h.push(m);
          }
          h.sort(function (e, r) {
            return r.bst.N - e.bst.N;
          });
          for (var A = 0; A < n.length; A++) {
            for (
              var U = i.quantize.planeDst,
                I = new Uint8Array(n[A].buffer),
                R = new Uint32Array(n[A].buffer),
                _ = I.length,
                o = 0;
              o < _;
              o += 4
            ) {
              for (
                var S = I[o] * (1 / 255),
                  N = I[o + 1] * (1 / 255),
                  T = I[o + 2] * (1 / 255),
                  M = I[o + 3] * (1 / 255),
                  q = v;
                q.left;

              )
                q = 0 >= U(q.est, S, N, T, M) ? q.left : q.right;
              R[o >> 2] = q.est.rgba;
            }
            n[A] = R.buffer;
          }
          return { bufs: n, plte: h };
        }),
        (i.quantize.getNearest = function (e, r, t, n, a) {
          if (null == e.left)
            return (e.tdst = i.quantize.dist(e.est.q, r, t, n, a)), e;
          var o = i.quantize.planeDst(e.est, r, t, n, a),
            f = e.left,
            s = e.right;
          o > 0 && ((f = e.right), (s = e.left));
          var l = i.quantize.getNearest(f, r, t, n, a);
          if (l.tdst <= o * o) return l;
          var c = i.quantize.getNearest(s, r, t, n, a);
          return c.tdst < l.tdst ? c : l;
        }),
        (i.quantize.planeDst = function (e, r, t, n, a) {
          var i = e.e;
          return i[0] * r + i[1] * t + i[2] * n + i[3] * a - e.eMq;
        }),
        (i.quantize.dist = function (e, r, t, n, a) {
          var i = r - e[0],
            o = t - e[1],
            f = n - e[2],
            s = a - e[3];
          return i * i + o * o + f * f + s * s;
        }),
        (i.quantize.splitPixels = function (e, r, t, n, a, o) {
          var f = i.quantize.vecDot;
          for (n -= 4; t < n; ) {
            for (; f(e, t, a) <= o; ) t += 4;
            for (; f(e, n, a) > o; ) n -= 4;
            if (t >= n) break;
            var s = r[t >> 2];
            (r[t >> 2] = r[n >> 2]), (r[n >> 2] = s), (t += 4), (n -= 4);
          }
          for (; f(e, t, a) > o; ) t -= 4;
          return t + 4;
        }),
        (i.quantize.vecDot = function (e, r, t) {
          return (
            e[r] * t[0] + e[r + 1] * t[1] + e[r + 2] * t[2] + e[r + 3] * t[3]
          );
        }),
        (i.quantize.stats = function (e, r, t) {
          for (
            var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              a = [0, 0, 0, 0],
              i = r;
            i < t;
            i += 4
          ) {
            var o = e[i] * (1 / 255),
              f = e[i + 1] * (1 / 255),
              s = e[i + 2] * (1 / 255),
              l = e[i + 3] * (1 / 255);
            (a[0] += o),
              (a[1] += f),
              (a[2] += s),
              (a[3] += l),
              (n[0] += o * o),
              (n[1] += o * f),
              (n[2] += o * s),
              (n[3] += o * l),
              (n[5] += f * f),
              (n[6] += f * s),
              (n[7] += f * l),
              (n[10] += s * s),
              (n[11] += s * l),
              (n[15] += l * l);
          }
          return (
            (n[4] = n[1]),
            (n[8] = n[2]),
            (n[12] = n[3]),
            (n[9] = n[6]),
            (n[13] = n[7]),
            (n[14] = n[11]),
            { R: n, m: a, N: (t - r) >> 2 }
          );
        }),
        (i.quantize.estats = function (e) {
          var r = e.R,
            t = e.m,
            n = e.N,
            a = t[0],
            o = t[1],
            f = t[2],
            s = t[3],
            l = 0 == n ? 0 : 1 / n,
            c = [
              r[0] - a * a * l,
              r[1] - a * o * l,
              r[2] - a * f * l,
              r[3] - a * s * l,
              r[4] - o * a * l,
              r[5] - o * o * l,
              r[6] - o * f * l,
              r[7] - o * s * l,
              r[8] - f * a * l,
              r[9] - f * o * l,
              r[10] - f * f * l,
              r[11] - f * s * l,
              r[12] - s * a * l,
              r[13] - s * o * l,
              r[14] - s * f * l,
              r[15] - s * s * l,
            ],
            u = i.M4,
            d = [0.5, 0.5, 0.5, 0.5],
            v = 0,
            h = 0;
          if (0 != n)
            for (
              var p = 0;
              p < 10 &&
              ((d = u.multVec(c, d)),
              (h = Math.sqrt(u.dot(d, d))),
              (d = u.sml(1 / h, d)),
              !(1e-9 > Math.abs(h - v)));
              p++
            ) {
              v = h;
            }
          var g = [a * l, o * l, f * l, s * l],
            b = u.dot(u.sml(255, g), d),
            y = g[3] < 0.001 ? 0 : 1 / g[3];
          return {
            Cov: c,
            q: g,
            e: d,
            L: v,
            eMq255: b,
            eMq: u.dot(d, g),
            rgba:
              ((Math.round(255 * g[3]) << 24) |
                (Math.round(255 * g[2] * y) << 16) |
                (Math.round(255 * g[1] * y) << 8) |
                (Math.round(255 * g[0] * y) << 0)) >>>
              0,
          };
        }),
        (i.M4 = {
          multVec: function (e, r) {
            return [
              e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3],
              e[4] * r[0] + e[5] * r[1] + e[6] * r[2] + e[7] * r[3],
              e[8] * r[0] + e[9] * r[1] + e[10] * r[2] + e[11] * r[3],
              e[12] * r[0] + e[13] * r[1] + e[14] * r[2] + e[15] * r[3],
            ];
          },
          dot: function (e, r) {
            return e[0] * r[0] + e[1] * r[1] + e[2] * r[2] + e[3] * r[3];
          },
          sml: function (e, r) {
            return [e * r[0], e * r[1], e * r[2], e * r[3]];
          },
        }),
        (i.encode.alphaMul = function (e, r) {
          for (
            var t = new Uint8Array(e.length), n = e.length >> 2, a = 0;
            a < n;
            a++
          ) {
            var i = a << 2,
              o = e[i + 3];
            r && (o = o < 128 ? 0 : 255);
            var f = (1 / 255) * o;
            (t[i + 0] = e[i + 0] * f),
              (t[i + 1] = e[i + 1] * f),
              (t[i + 2] = e[i + 2] * f),
              (t[i + 3] = o);
          }
          return t;
        });
    },
    849055: function (e, r, t) {
      "use strict";
      function n(e) {
        let r = "==".slice(0, (4 - (e.length % 4)) % 4),
          t = atob(e.replace(/-/g, "+").replace(/_/g, "/") + r),
          n = new ArrayBuffer(t.length),
          a = new Uint8Array(n);
        for (let e = 0; e < t.length; e++) a[e] = t.charCodeAt(e);
        return n;
      }
      function a(e) {
        let r = new Uint8Array(e),
          t = "";
        for (let e of r) t += String.fromCharCode(e);
        return btoa(t)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      t.d(r, {
        U2: function () {
          return w;
        },
        Ue: function () {
          return y;
        },
      });
      var i = "copy",
        o = "convert";
      function f(e, r, t) {
        if (r === i) return t;
        if (r === o) return e(t);
        if (r instanceof Array) return t.map((t) => f(e, r[0], t));
        if (r instanceof Object) {
          let n = {};
          for (let [a, i] of Object.entries(r)) {
            if (i.derive) {
              let e = i.derive(t);
              void 0 !== e && (t[a] = e);
            }
            if (!(a in t)) {
              if (i.required) throw Error(`Missing key: ${a}`);
              continue;
            }
            if (null == t[a]) {
              n[a] = null;
              continue;
            }
            n[a] = f(e, i.schema, t[a]);
          }
          return n;
        }
      }
      function s(e, r) {
        return { required: !0, schema: e, derive: r };
      }
      function l(e) {
        return { required: !0, schema: e };
      }
      function c(e) {
        return { required: !1, schema: e };
      }
      var u = { type: l(i), id: l(o), transports: c(i) },
        d = { appid: c(i), appidExclude: c(i), credProps: c(i) },
        v = { appid: c(i), appidExclude: c(i), credProps: c(i) },
        h = {
          publicKey: l({
            rp: l(i),
            user: l({ id: l(o), name: l(i), displayName: l(i) }),
            challenge: l(o),
            pubKeyCredParams: l(i),
            timeout: c(i),
            excludeCredentials: c([u]),
            authenticatorSelection: c(i),
            attestation: c(i),
            extensions: c(d),
          }),
          signal: c(i),
        },
        p = {
          type: l(i),
          id: l(i),
          rawId: l(o),
          authenticatorAttachment: c(i),
          response: l({
            clientDataJSON: l(o),
            attestationObject: l(o),
            transports: s(i, (e) => {
              var r;
              return (null == (r = e.getTransports) ? void 0 : r.call(e)) || [];
            }),
          }),
          clientExtensionResults: s(v, (e) => e.getClientExtensionResults()),
        },
        g = {
          mediation: c(i),
          publicKey: l({
            challenge: l(o),
            timeout: c(i),
            rpId: c(i),
            allowCredentials: c([u]),
            userVerification: c(i),
            extensions: c(d),
          }),
          signal: c(i),
        },
        b = {
          type: l(i),
          id: l(i),
          rawId: l(o),
          authenticatorAttachment: c(i),
          response: l({
            clientDataJSON: l(o),
            authenticatorData: l(o),
            signature: l(o),
            userHandle: l(o),
          }),
          clientExtensionResults: s(v, (e) => e.getClientExtensionResults()),
        };
      async function y(e) {
        let r = await navigator.credentials.create(f(n, h, e));
        return f(a, p, r);
      }
      async function w(e) {
        let r = await navigator.credentials.get(f(n, g, e));
        return f(a, b, r);
      }
    },
  },
]);
//# sourceMappingURL=2a333f52965eaf37cdf4.js.map
