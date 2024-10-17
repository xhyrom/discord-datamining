(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23217"],
  {
    639576: function (r, e, t) {
      "use strict";
      var n = t(147018),
        a = t(345374),
        i = t(886960),
        f = t(49693),
        o = t(980855),
        l = t(299623),
        s = t(959318),
        u = Array,
        c = Math.max,
        v = Math.min;
      n(
        { target: "Array", proto: !0 },
        {
          toSpliced: function (r, e) {
            var t,
              n,
              a,
              h,
              d = l(this),
              g = f(d),
              p = o(r, g),
              w = arguments.length,
              b = 0;
            for (
              0 === w
                ? (t = n = 0)
                : 1 === w
                  ? ((t = 0), (n = g - p))
                  : ((t = w - 2), (n = v(c(s(e), 0), g - p))),
                h = u((a = i(g + t - n)));
              b < p;
              b++
            )
              h[b] = d[b];
            for (; b < p + t; b++) h[b] = arguments[b - p + 2];
            for (; b < a; b++) h[b] = d[b + n - t];
            return h;
          },
        },
      ),
        a("toSpliced");
    },
    817080: function (r) {
      var e =
        e ||
        (function (r) {
          "use strict";
          if (
            !(
              "undefined" != typeof navigator &&
              /MSIE [1-9]\./.test(navigator.userAgent)
            )
          ) {
            var e = r.document,
              t = function () {
                return r.URL || r.webkitURL || r;
              },
              n = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              a = "download" in n,
              i = function (r) {
                var e = new MouseEvent("click");
                r.dispatchEvent(e);
              },
              f = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
              o = r.webkitRequestFileSystem,
              l = r.requestFileSystem || o || r.mozRequestFileSystem,
              s = function (e) {
                (r.setImmediate || r.setTimeout)(function () {
                  throw e;
                }, 0);
              },
              u = "application/octet-stream",
              c = 0,
              v = function (r) {
                setTimeout(function () {
                  "string" == typeof r ? t().revokeObjectURL(r) : r.remove();
                }, 4e4);
              },
              h = function (r, e, t) {
                for (var n = (e = [].concat(e)).length; n--; ) {
                  var a = r["on" + e[n]];
                  if ("function" == typeof a)
                    try {
                      a.call(r, t || r);
                    } catch (r) {
                      s(r);
                    }
                }
              },
              d = function (r) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                  r.type,
                )
                  ? new Blob(["\xef\xbb\xbf", r], { type: r.type })
                  : r;
              },
              g = function (e, s, g) {
                !g && (e = d(e));
                var p,
                  w,
                  b = this,
                  y = e.type,
                  m = !1,
                  A = function () {
                    h(b, "writestart progress write writeend".split(" "));
                  },
                  U = function () {
                    if (w && f && "undefined" != typeof FileReader) {
                      var n = new FileReader();
                      (n.onloadend = function () {
                        var r = n.result;
                        (w.location.href =
                          "data:attachment/file" + r.slice(r.search(/[,;]/))),
                          (b.readyState = b.DONE),
                          A();
                      }),
                        n.readAsDataURL(e),
                        (b.readyState = b.INIT);
                      return;
                    }
                    (m || !p) && (p = t().createObjectURL(e)),
                      w
                        ? (w.location.href = p)
                        : void 0 === r.open(p, "_blank") &&
                          f &&
                          (r.location.href = p),
                      (b.readyState = b.DONE),
                      A(),
                      v(p);
                  },
                  I = function (r) {
                    return function () {
                      if (b.readyState !== b.DONE)
                        return r.apply(this, arguments);
                    };
                  },
                  x = { create: !0, exclusive: !1 };
                if (((b.readyState = b.INIT), !s && (s = "download"), a)) {
                  (p = t().createObjectURL(e)),
                    setTimeout(function () {
                      (n.href = p),
                        (n.download = s),
                        i(n),
                        A(),
                        v(p),
                        (b.readyState = b.DONE);
                    });
                  return;
                }
                if (
                  (r.chrome &&
                    y &&
                    y !== u &&
                    ((e = (e.slice || e.webkitSlice).call(e, 0, e.size, u)),
                    (m = !0)),
                  o && "download" !== s && (s += ".download"),
                  (y === u || o) && (w = r),
                  !l)
                ) {
                  U();
                  return;
                }
                (c += e.size),
                  l(
                    r.TEMPORARY,
                    c,
                    I(function (r) {
                      r.root.getDirectory(
                        "saved",
                        x,
                        I(function (r) {
                          var t = function () {
                            r.getFile(
                              s,
                              x,
                              I(function (r) {
                                r.createWriter(
                                  I(function (t) {
                                    (t.onwriteend = function (e) {
                                      (w.location.href = r.toURL()),
                                        (b.readyState = b.DONE),
                                        h(b, "writeend", e),
                                        v(r);
                                    }),
                                      (t.onerror = function () {
                                        var r = t.error;
                                        r.code !== r.ABORT_ERR && U();
                                      }),
                                      "writestart progress write abort"
                                        .split(" ")
                                        .forEach(function (r) {
                                          t["on" + r] = b["on" + r];
                                        }),
                                      t.write(e),
                                      (b.abort = function () {
                                        t.abort(), (b.readyState = b.DONE);
                                      }),
                                      (b.readyState = b.WRITING);
                                  }),
                                  U,
                                );
                              }),
                              U,
                            );
                          };
                          r.getFile(
                            s,
                            { create: !1 },
                            I(function (r) {
                              r.remove(), t();
                            }),
                            I(function (r) {
                              r.code === r.NOT_FOUND_ERR ? t() : U();
                            }),
                          );
                        }),
                        U,
                      );
                    }),
                    U,
                  );
              },
              p = g.prototype;
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob
              ? function (r, e, t) {
                  return (
                    !t && (r = d(r)),
                    navigator.msSaveOrOpenBlob(r, e || "download")
                  );
                }
              : ((p.abort = function () {
                  (this.readyState = this.DONE), h(this, "abort");
                }),
                (p.readyState = p.INIT = 0),
                (p.WRITING = 1),
                (p.DONE = 2),
                (p.error =
                  p.onwritestart =
                  p.onprogress =
                  p.onwrite =
                  p.onabort =
                  p.onerror =
                  p.onwriteend =
                    null),
                function (r, e, t) {
                  return new g(r, e, t);
                });
          }
        })(
          ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window) ||
            this.content,
        );
      r.exports
        ? (r.exports.saveAs = e)
        : "undefined" != typeof define &&
          null !== define &&
          null !== define.amd &&
          define([], function () {
            return e;
          });
    },
    785902: function (r) {
      r.exports = function (r, e, t, n) {
        for (var a = -1, i = null == r ? 0 : r.length; ++a < i; ) {
          var f = r[a];
          e(n, f, t(f), r);
        }
        return n;
      };
    },
    800128: function (r, e, t) {
      var n = t(543744);
      r.exports = function (r, e, t, a) {
        return (
          n(r, function (r, n, i) {
            e(a, r, t(r), i);
          }),
          a
        );
      };
    },
    757009: function (r, e, t) {
      var n = t(785902),
        a = t(800128),
        i = t(256098),
        f = t(290677);
      r.exports = function (r, e) {
        return function (t, o) {
          var l = f(t) ? n : a,
            s = e ? e() : {};
          return l(t, r, i(o, 2), s);
        };
      };
    },
    979079: function (r, e, t) {
      var n = t(685347),
        a = t(757009)(function (r, e, t) {
          n(r, t, e);
        });
      r.exports = a;
    },
    943418: function (r, e, t) {
      var n = t(383083);
      (e.encode = n.encode), (e.decode = n.decode);
    },
    383083: function (r, e, t) {
      var n = t(413135).Buffer,
        a = [
          255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0,
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 255, 255, 255, 255, 255,
        ];
      (e.encode = function (r) {
        !n.isBuffer(r) && (r = new n(r));
        var e,
          t,
          a = 0,
          i = 0,
          f = 0,
          o = 0;
        for (
          var l = new n(
            8 *
              ((t = Math.floor((e = r).length / 5)),
              e.length % 5 == 0 ? t : t + 1),
          );
          a < r.length;

        ) {
          var s = r[a];
          f > 3
            ? ((o =
                ((o = s & (255 >> f)) << (f = (f + 5) % 8)) |
                ((a + 1 < r.length ? r[a + 1] : 0) >> (8 - f))),
              a++)
            : ((o = (s >> (8 - (f + 5))) & 31), 0 == (f = (f + 5) % 8) && a++),
            (l[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(o)),
            i++;
        }
        for (a = i; a < l.length; a++) l[a] = 61;
        return l;
      }),
        (e.decode = function (r) {
          var e,
            t = 0,
            i = 0,
            f = 0;
          !n.isBuffer(r) && (r = new n(r));
          for (
            var o = new n(Math.ceil((5 * r.length) / 8)), l = 0;
            l < r.length && 61 != r[l];
            l++
          ) {
            var s = r[l] - 48;
            if (s < a.length)
              (i = a[s]),
                t <= 3
                  ? 0 == (t = (t + 5) % 8)
                    ? ((e |= i), (o[f] = e), f++, (e = 0))
                    : (e |= 255 & (i << (8 - t)))
                  : ((e |= 255 & (i >>> (t = (t + 5) % 8))),
                    (o[f] = e),
                    f++,
                    (e = 255 & (i << (8 - t))));
            else throw Error("Invalid input - it is not base32 encoded string");
          }
          return o.slice(0, f);
        });
    },
    605387: function (r) {
      var e = (function () {
        var r = {
          nextZero: function (r, e) {
            for (; 0 != r[e]; ) e++;
            return e;
          },
          readUshort: function (r, e) {
            return (r[e] << 8) | r[e + 1];
          },
          writeUshort: function (r, e, t) {
            (r[e] = (t >> 8) & 255), (r[e + 1] = 255 & t);
          },
          readUint: function (r, e) {
            return (
              16777216 * r[e] + ((r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3])
            );
          },
          writeUint: function (r, e, t) {
            (r[e] = (t >> 24) & 255),
              (r[e + 1] = (t >> 16) & 255),
              (r[e + 2] = (t >> 8) & 255),
              (r[e + 3] = 255 & t);
          },
          readASCII: function (r, e, t) {
            for (var n = "", a = 0; a < t; a++)
              n += String.fromCharCode(r[e + a]);
            return n;
          },
          writeASCII: function (r, e, t) {
            for (var n = 0; n < t.length; n++) r[e + n] = t.charCodeAt(n);
          },
          readBytes: function (r, e, t) {
            for (var n = [], a = 0; a < t; a++) n.push(r[e + a]);
            return n;
          },
          pad: function (r) {
            return r.length < 2 ? "0" + r : r;
          },
          readUTF8: function (e, t, n) {
            for (var a, i = "", f = 0; f < n; f++)
              i += "%" + r.pad(e[t + f].toString(16));
            try {
              a = decodeURIComponent(i);
            } catch (a) {
              return r.readASCII(e, t, n);
            }
            return a;
          },
        };
        function e(e, t, n, a) {
          var f = t * n,
            o = Math.ceil((t * i(a)) / 8),
            l = new Uint8Array(4 * f),
            s = new Uint32Array(l.buffer),
            u = a.ctype,
            c = a.depth,
            v = r.readUshort;
          if ((Date.now(), 6 == u)) {
            var h = f << 2;
            if (8 == c)
              for (var d = 0; d < h; d += 4)
                (l[d] = e[d]),
                  (l[d + 1] = e[d + 1]),
                  (l[d + 2] = e[d + 2]),
                  (l[d + 3] = e[d + 3]);
            if (16 == c) for (var d = 0; d < h; d++) l[d] = e[d << 1];
          } else if (2 == u) {
            var g = a.tabs.tRNS;
            if (null == g) {
              if (8 == c)
                for (var d = 0; d < f; d++) {
                  var p = 3 * d;
                  s[d] = -16777216 | (e[p + 2] << 16) | (e[p + 1] << 8) | e[p];
                }
              if (16 == c)
                for (var d = 0; d < f; d++) {
                  var p = 6 * d;
                  s[d] = -16777216 | (e[p + 4] << 16) | (e[p + 2] << 8) | e[p];
                }
            } else {
              var w = g[0],
                b = g[1],
                y = g[2];
              if (8 == c)
                for (var d = 0; d < f; d++) {
                  var m = d << 2,
                    p = 3 * d;
                  (s[d] =
                    -16777216 | (e[p + 2] << 16) | (e[p + 1] << 8) | e[p]),
                    e[p] == w &&
                      e[p + 1] == b &&
                      e[p + 2] == y &&
                      (l[m + 3] = 0);
                }
              if (16 == c)
                for (var d = 0; d < f; d++) {
                  var m = d << 2,
                    p = 6 * d;
                  (s[d] =
                    -16777216 | (e[p + 4] << 16) | (e[p + 2] << 8) | e[p]),
                    v(e, p) == w &&
                      v(e, p + 2) == b &&
                      v(e, p + 4) == y &&
                      (l[m + 3] = 0);
                }
            }
          } else if (3 == u) {
            var A = a.tabs.PLTE,
              U = a.tabs.tRNS,
              I = U ? U.length : 0;
            if (1 == c)
              for (var x = 0; x < n; x++) {
                for (var S = x * o, M = x * t, d = 0; d < t; d++) {
                  var m = (M + d) << 2,
                    R = (e[S + (d >> 3)] >> (7 - ((7 & d) << 0))) & 1,
                    C = 3 * R;
                  (l[m] = A[C]),
                    (l[m + 1] = A[C + 1]),
                    (l[m + 2] = A[C + 2]),
                    (l[m + 3] = R < I ? U[R] : 255);
                }
              }
            if (2 == c)
              for (var x = 0; x < n; x++) {
                for (var S = x * o, M = x * t, d = 0; d < t; d++) {
                  var m = (M + d) << 2,
                    R = (e[S + (d >> 2)] >> (6 - ((3 & d) << 1))) & 3,
                    C = 3 * R;
                  (l[m] = A[C]),
                    (l[m + 1] = A[C + 1]),
                    (l[m + 2] = A[C + 2]),
                    (l[m + 3] = R < I ? U[R] : 255);
                }
              }
            if (4 == c)
              for (var x = 0; x < n; x++) {
                for (var S = x * o, M = x * t, d = 0; d < t; d++) {
                  var m = (M + d) << 2,
                    R = (e[S + (d >> 1)] >> (4 - ((1 & d) << 2))) & 15,
                    C = 3 * R;
                  (l[m] = A[C]),
                    (l[m + 1] = A[C + 1]),
                    (l[m + 2] = A[C + 2]),
                    (l[m + 3] = R < I ? U[R] : 255);
                }
              }
            if (8 == c)
              for (var d = 0; d < f; d++) {
                var m = d << 2,
                  R = e[d],
                  C = 3 * R;
                (l[m] = A[C]),
                  (l[m + 1] = A[C + 1]),
                  (l[m + 2] = A[C + 2]),
                  (l[m + 3] = R < I ? U[R] : 255);
              }
          } else if (4 == u) {
            if (8 == c)
              for (var d = 0; d < f; d++) {
                var m = d << 2,
                  N = d << 1,
                  T = e[N];
                (l[m] = T),
                  (l[m + 1] = T),
                  (l[m + 2] = T),
                  (l[m + 3] = e[N + 1]);
              }
            if (16 == c)
              for (var d = 0; d < f; d++) {
                var m = d << 2,
                  N = d << 2,
                  T = e[N];
                (l[m] = T),
                  (l[m + 1] = T),
                  (l[m + 2] = T),
                  (l[m + 3] = e[N + 2]);
              }
          } else if (0 == u) {
            for (var w = a.tabs.tRNS ? a.tabs.tRNS : -1, x = 0; x < n; x++) {
              var E = x * o,
                D = x * t;
              if (1 == c)
                for (var O = 0; O < t; O++) {
                  var T = 255 * ((e[E + (O >>> 3)] >>> (7 - (7 & O))) & 1),
                    L = T == 255 * w ? 0 : 255;
                  s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                }
              else if (2 == c)
                for (var O = 0; O < t; O++) {
                  var T =
                      85 * ((e[E + (O >>> 2)] >>> (6 - ((3 & O) << 1))) & 3),
                    L = T == 85 * w ? 0 : 255;
                  s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                }
              else if (4 == c)
                for (var O = 0; O < t; O++) {
                  var T =
                      17 * ((e[E + (O >>> 1)] >>> (4 - ((1 & O) << 2))) & 15),
                    L = T == 17 * w ? 0 : 255;
                  s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                }
              else if (8 == c)
                for (var O = 0; O < t; O++) {
                  var T = e[E + O],
                    L = T == w ? 0 : 255;
                  s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                }
              else if (16 == c)
                for (var O = 0; O < t; O++) {
                  var T = e[E + (O << 1)],
                    L = v(e, E + (O << 1)) == w ? 0 : 255;
                  s[D + O] = (L << 24) | (T << 16) | (T << 8) | T;
                }
            }
          }
          return l;
        }
        function t(r, e, t, o) {
          Date.now();
          var l = new Uint8Array(
            (Math.ceil((t * i(r)) / 8) + 1 + r.interlace) * o,
          );
          return (
            (e = r.tabs.CgBI ? a(e, l) : n(e, l)),
            Date.now(),
            0 == r.interlace
              ? (e = f(e, r, 0, t, o))
              : 1 == r.interlace &&
                (e = (function (r, e) {
                  for (
                    var t = e.width,
                      n = e.height,
                      a = i(e),
                      o = a >> 3,
                      l = Math.ceil((t * a) / 8),
                      s = new Uint8Array(n * l),
                      u = 0,
                      c = [0, 0, 4, 0, 2, 0, 1],
                      v = [0, 4, 0, 2, 0, 1, 0],
                      h = [8, 8, 8, 4, 4, 2, 2],
                      d = [8, 8, 4, 4, 2, 2, 1],
                      g = 0;
                    g < 7;

                  ) {
                    for (
                      var p = h[g], w = d[g], b = 0, y = 0, m = c[g];
                      m < n;

                    )
                      (m += p), y++;
                    for (var A = v[g]; A < t; ) (A += w), b++;
                    var U = Math.ceil((b * a) / 8);
                    f(r, e, u, b, y);
                    for (var I = 0, x = c[g]; x < n; ) {
                      for (var S = v[g], M = (u + I * U) << 3; S < t; ) {
                        if (1 == a) {
                          var R = r[M >> 3];
                          (R = (R >> (7 - (7 & M))) & 1),
                            (s[x * l + (S >> 3)] |= R << (7 - ((7 & S) << 0)));
                        }
                        if (2 == a) {
                          var R = r[M >> 3];
                          (R = (R >> (6 - (7 & M))) & 3),
                            (s[x * l + (S >> 2)] |= R << (6 - ((3 & S) << 1)));
                        }
                        if (4 == a) {
                          var R = r[M >> 3];
                          (R = (R >> (4 - (7 & M))) & 15),
                            (s[x * l + (S >> 1)] |= R << (4 - ((1 & S) << 2)));
                        }
                        if (a >= 8) {
                          for (var C = x * l + S * o, N = 0; N < o; N++)
                            s[C + N] = r[(M >> 3) + N];
                        }
                        (M += a), (S += w);
                      }
                      I++, (x += p);
                    }
                    b * y != 0 && (u += y * (1 + U)), (g += 1);
                  }
                  return s;
                })(e, r)),
            e
          );
        }
        function n(r, e) {
          return a(new Uint8Array(r.buffer, 2, r.length - 6), e);
        }
        var a = (function () {
          var r,
            e,
            t =
              ((r = Uint16Array),
              (e = Uint32Array),
              {
                m: new r(16),
                v: new r(16),
                d: [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                o: [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999,
                  999, 999,
                ],
                z: [
                  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                  4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
                ],
                B: new r(32),
                p: [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577, 65535, 65535,
                ],
                w: [
                  0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                  9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
                ],
                h: new e(32),
                g: new r(512),
                s: [],
                A: new r(32),
                t: [],
                k: new r(32768),
                c: [],
                a: [],
                n: new r(32768),
                e: [],
                C: new r(512),
                b: [],
                i: new r(32768),
                r: new e(286),
                f: new e(30),
                l: new e(19),
                u: new e(15e3),
                q: new r(65536),
                j: new r(32768),
              });
          function n(r, e) {
            for (var n, a, i, f, o, l = r.length, s = t.v, f = 0; f <= e; f++)
              s[f] = 0;
            for (f = 1; f < l; f += 2) s[r[f]]++;
            var u = t.m;
            for (a = 1, n = 0, s[0] = 0; a <= e; a++)
              (n = (n + s[a - 1]) << 1), (u[a] = n);
            for (i = 0; i < l; i += 2)
              0 != (o = r[i + 1]) && ((r[i] = u[o]), u[o]++);
          }
          function a(r, e, n) {
            for (var a = r.length, i = t.i, f = 0; f < a; f += 2)
              if (0 != r[f + 1]) {
                for (
                  var o = f >> 1,
                    l = r[f + 1],
                    s = (o << 4) | l,
                    u = e - l,
                    c = r[f] << u,
                    v = c + (1 << u);
                  c != v;

                )
                  (n[i[c] >>> (15 - e)] = s), c++;
              }
          }
          function i(r, e) {
            for (var n = t.i, a = 15 - e, i = 0; i < r.length; i += 2) {
              var f = r[i] << (e - r[i + 1]);
              r[i] = n[f] >>> a;
            }
          }
          function f(r, e, t) {
            return (
              ((r[e >>> 3] | (r[(e >>> 3) + 1] << 8)) >>> (7 & e)) &
              ((1 << t) - 1)
            );
          }
          function o(r, e, t) {
            return (
              ((r[e >>> 3] |
                (r[(e >>> 3) + 1] << 8) |
                (r[(e >>> 3) + 2] << 16)) >>>
                (7 & e)) &
              ((1 << t) - 1)
            );
          }
          function l(r, e) {
            return (
              (r[e >>> 3] |
                (r[(e >>> 3) + 1] << 8) |
                (r[(e >>> 3) + 2] << 16)) >>>
              (7 & e)
            );
          }
          !(function () {
            for (var r = 0; r < 32768; r++) {
              var e = r;
              (e =
                ((4278255360 &
                  (e =
                    ((4042322160 &
                      (e =
                        ((3435973836 &
                          (e =
                            ((2863311530 & e) >>> 1) |
                            ((1431655765 & e) << 1))) >>>
                          2) |
                        ((858993459 & e) << 2))) >>>
                      4) |
                    ((252645135 & e) << 4))) >>>
                  8) |
                ((16711935 & e) << 8)),
                (t.i[r] = ((e >>> 16) | (e << 16)) >>> 17);
            }
            function f(r, e, t) {
              for (; 0 != e--; ) r.push(0, t);
            }
            for (var r = 0; r < 32; r++)
              (t.B[r] = (t.o[r] << 3) | t.z[r]),
                (t.h[r] = (t.p[r] << 4) | t.w[r]);
            f(t.s, 144, 8),
              f(t.s, 112, 9),
              f(t.s, 24, 7),
              f(t.s, 8, 8),
              n(t.s, 9),
              a(t.s, 9, t.g),
              i(t.s, 9),
              f(t.t, 32, 5),
              n(t.t, 5),
              a(t.t, 5, t.A),
              i(t.t, 5),
              f(t.b, 19, 0),
              f(t.c, 286, 0),
              f(t.e, 30, 0),
              f(t.a, 320, 0);
          })();
          function s(r, e) {
            var t = r.length;
            if (e <= t) return r;
            var n = new Uint8Array(Math.max(t << 1, e));
            return n.set(r, 0), n;
          }
          function u(r, e, t, n) {
            for (var a = 0, i = 0, f = n.length >>> 1; i < t; ) {
              var o = r[i + e];
              (n[i << 1] = 0), (n[(i << 1) + 1] = o), o > a && (a = o), i++;
            }
            for (; i < f; ) (n[i << 1] = 0), (n[(i << 1) + 1] = 0), i++;
            return a;
          }
          return function (r, e) {
            var i,
              c,
              v = Uint8Array,
              h = 0,
              d = 0,
              g = 0,
              p = 0,
              w = 0,
              b = 0,
              y = 0,
              m = 0,
              A = 0;
            if (3 == r[0] && 0 == r[1]) return e || new v(0);
            var U = null == e;
            for (U && (e = new v((r.length >>> 2) << 3)); 0 == h; ) {
              if (((h = o(r, A, 1)), (d = o(r, A + 1, 2)), (A += 3), 0 == d)) {
                (7 & A) != 0 && (A += 8 - (7 & A));
                var I = (A >>> 3) + 4,
                  x = r[I - 4] | (r[I - 3] << 8);
                U && (e = s(e, m + x)),
                  e.set(new v(r.buffer, r.byteOffset + I, x), m),
                  (A = (I + x) << 3),
                  (m += x);
                continue;
              }
              if (
                (U && (e = s(e, m + 131072)),
                1 == d && ((i = t.g), (c = t.A), (b = 511), (y = 31)),
                2 == d)
              ) {
                (g = f(r, A, 5) + 257),
                  (p = f(r, A + 5, 5) + 1),
                  (w = f(r, A + 10, 4) + 4),
                  (A += 14);
                for (var S = 1, M = 0; M < 38; M += 2)
                  (t.b[M] = 0), (t.b[M + 1] = 0);
                for (var M = 0; M < w; M++) {
                  var R = f(r, A + 3 * M, 3);
                  (t.b[(t.d[M] << 1) + 1] = R), R > S && (S = R);
                }
                (A += 3 * w),
                  n(t.b, S),
                  a(t.b, S, t.C),
                  (i = t.k),
                  (c = t.n),
                  (A = (function (r, e, t, n, a, i) {
                    for (var o = 0; o < t; ) {
                      var s = r[l(n, a) & e];
                      a += 15 & s;
                      var u = s >>> 4;
                      if (u <= 15) (i[o] = u), o++;
                      else {
                        var c = 0,
                          v = 0;
                        16 == u
                          ? ((v = 3 + f(n, a, 2)), (a += 2), (c = i[o - 1]))
                          : 17 == u
                            ? ((v = 3 + f(n, a, 3)), (a += 3))
                            : 18 == u && ((v = 11 + f(n, a, 7)), (a += 7));
                        for (var h = o + v; o < h; ) (i[o] = c), o++;
                      }
                    }
                    return a;
                  })(t.C, (1 << S) - 1, g + p, r, A, t.a));
                var C = u(t.a, 0, g, t.c);
                b = (1 << C) - 1;
                var N = u(t.a, g, p, t.e);
                (y = (1 << N) - 1),
                  n(t.c, C),
                  a(t.c, C, i),
                  n(t.e, N),
                  a(t.e, N, c);
              }
              for (;;) {
                var T = i[l(r, A) & b];
                A += 15 & T;
                var E = T >>> 4;
                if (E >>> 8 == 0) e[m++] = E;
                else if (256 == E) break;
                else {
                  var D = m + E - 254;
                  if (E > 264) {
                    var O = t.B[E - 257];
                    (D = m + (O >>> 3) + f(r, A, 7 & O)), (A += 7 & O);
                  }
                  var L = c[l(r, A) & y];
                  A += 15 & L;
                  var B = L >>> 4,
                    k = t.h[B],
                    q = (k >>> 4) + o(r, A, 15 & k);
                  for (A += 15 & k, U && (e = s(e, m + 131072)); m < D; )
                    (e[m] = e[m++ - q]),
                      (e[m] = e[m++ - q]),
                      (e[m] = e[m++ - q]),
                      (e[m] = e[m++ - q]);
                  m = D;
                }
              }
            }
            return e.length == m ? e : e.slice(0, m);
          };
        })();
        function i(r) {
          return [1, null, 3, 1, 2, null, 4][r.ctype] * r.depth;
        }
        function f(r, e, t, n, a) {
          var f = i(e),
            l = Math.ceil((n * f) / 8);
          f = Math.ceil(f / 8);
          var s,
            u,
            c = r[t],
            v = 0;
          if ((c > 1 && (r[t] = [0, 0, 1][c - 2]), 3 == c))
            for (v = f; v < l; v++)
              r[v + 1] = (r[v + 1] + (r[v + 1 - f] >>> 1)) & 255;
          for (var h = 0; h < a; h++)
            if (((c = r[(u = (s = t + h * l) + h + 1) - 1]), (v = 0), 0 == c))
              for (; v < l; v++) r[s + v] = r[u + v];
            else if (1 == c) {
              for (; v < f; v++) r[s + v] = r[u + v];
              for (; v < l; v++) r[s + v] = r[u + v] + r[s + v - f];
            } else if (2 == c)
              for (; v < l; v++) r[s + v] = r[u + v] + r[s + v - l];
            else if (3 == c) {
              for (; v < f; v++) r[s + v] = r[u + v] + (r[s + v - l] >>> 1);
              for (; v < l; v++)
                r[s + v] = r[u + v] + ((r[s + v - l] + r[s + v - f]) >>> 1);
            } else {
              for (; v < f; v++) r[s + v] = r[u + v] + o(0, r[s + v - l], 0);
              for (; v < l; v++)
                r[s + v] =
                  r[u + v] + o(r[s + v - f], r[s + v - l], r[s + v - f - l]);
            }
          return r;
        }
        function o(r, e, t) {
          var n = r + e - t,
            a = n - r,
            i = n - e,
            f = n - t;
          return a * a <= i * i && a * a <= f * f ? r : i * i <= f * f ? e : t;
        }
        function l(r, e, t, n, a, i, f, o, l) {
          for (
            var s = Math.min(e, a), u = Math.min(t, i), c = 0, v = 0, h = 0;
            h < u;
            h++
          )
            for (var d = 0; d < s; d++)
              if (
                (f >= 0 && o >= 0
                  ? ((c = (h * e + d) << 2), (v = ((o + h) * a + f + d) << 2))
                  : ((c = ((-o + h) * e - f + d) << 2), (v = (h * a + d) << 2)),
                0 == l)
              )
                (n[v] = r[c]),
                  (n[v + 1] = r[c + 1]),
                  (n[v + 2] = r[c + 2]),
                  (n[v + 3] = r[c + 3]);
              else if (1 == l) {
                var g = r[c + 3] * (1 / 255),
                  p = r[c] * g,
                  w = r[c + 1] * g,
                  b = r[c + 2] * g,
                  y = n[v + 3] * (1 / 255),
                  m = n[v] * y,
                  A = n[v + 1] * y,
                  U = n[v + 2] * y,
                  I = 1 - g,
                  x = g + y * I,
                  S = 0 == x ? 0 : 1 / x;
                (n[v + 3] = 255 * x),
                  (n[v + 0] = (p + m * I) * S),
                  (n[v + 1] = (w + A * I) * S),
                  (n[v + 2] = (b + U * I) * S);
              } else if (2 == l) {
                var g = r[c + 3],
                  p = r[c],
                  w = r[c + 1],
                  b = r[c + 2],
                  y = n[v + 3],
                  m = n[v],
                  A = n[v + 1],
                  U = n[v + 2];
                g == y && p == m && w == A && b == U
                  ? ((n[v] = 0), (n[v + 1] = 0), (n[v + 2] = 0), (n[v + 3] = 0))
                  : ((n[v] = p),
                    (n[v + 1] = w),
                    (n[v + 2] = b),
                    (n[v + 3] = g));
              } else if (3 == l) {
                var g = r[c + 3],
                  p = r[c],
                  w = r[c + 1],
                  b = r[c + 2],
                  y = n[v + 3],
                  m = n[v],
                  A = n[v + 1],
                  U = n[v + 2];
                if (g == y && p == m && w == A && b == U) continue;
                if (g < 220 && y > 20) return !1;
              }
          return !0;
        }
        return {
          decode: function (e) {
            for (
              var i = new Uint8Array(e),
                f = 8,
                o = r.readUshort,
                l = r.readUint,
                s = { tabs: {}, frames: [] },
                u = new Uint8Array(i.length),
                c = 0,
                v,
                h = 0,
                d = [137, 80, 78, 71, 13, 10, 26, 10],
                g = 0;
              g < 8;
              g++
            )
              if (i[g] != d[g]) throw "The input is not a PNG file!";
            for (; f < i.length; ) {
              var p = r.readUint(i, f);
              f += 4;
              var w = r.readASCII(i, f, 4);
              if (((f += 4), "IHDR" == w))
                (function (e, t, n) {
                  (n.width = r.readUint(e, t)),
                    (t += 4),
                    (n.height = r.readUint(e, t)),
                    (t += 4),
                    (n.depth = e[t]),
                    t++,
                    (n.ctype = e[t]),
                    t++,
                    (n.compress = e[t]),
                    t++,
                    (n.filter = e[t]),
                    t++,
                    (n.interlace = e[t]),
                    t++;
                })(i, f, s);
              else if ("iCCP" == w) {
                for (var b = f; 0 != i[b]; ) b++;
                r.readASCII(i, f, b - f), i[b + 1];
                var y = i.slice(b + 2, f + p),
                  m = null;
                try {
                  m = n(y);
                } catch (r) {
                  m = a(y);
                }
                s.tabs[w] = m;
              } else if ("CgBI" == w) s.tabs[w] = i.slice(f, f + 4);
              else if ("IDAT" == w) {
                for (var g = 0; g < p; g++) u[c + g] = i[f + g];
                c += p;
              } else if ("acTL" == w)
                (s.tabs[w] = { num_frames: l(i, f), num_plays: l(i, f + 4) }),
                  (v = new Uint8Array(i.length));
              else if ("fcTL" == w) {
                if (0 != h) {
                  var A = s.frames[s.frames.length - 1];
                  (A.data = t(s, v.slice(0, h), A.rect.width, A.rect.height)),
                    (h = 0);
                }
                var U = {
                    x: l(i, f + 12),
                    y: l(i, f + 16),
                    width: l(i, f + 4),
                    height: l(i, f + 8),
                  },
                  I = o(i, f + 22),
                  x = {
                    rect: U,
                    delay: 1e3 * (I = o(i, f + 20) / (0 == I ? 100 : I)),
                    dispose: i[f + 24],
                    blend: i[f + 25],
                  };
                s.frames.push(x);
              } else if ("fdAT" == w) {
                for (var g = 0; g < p - 4; g++) v[h + g] = i[f + g + 4];
                h += p - 4;
              } else if ("pHYs" == w)
                s.tabs[w] = [r.readUint(i, f), r.readUint(i, f + 4), i[f + 8]];
              else if ("cHRM" == w) {
                s.tabs[w] = [];
                for (var g = 0; g < 8; g++)
                  s.tabs[w].push(r.readUint(i, f + 4 * g));
              } else if ("tEXt" == w || "zTXt" == w) {
                null == s.tabs[w] && (s.tabs[w] = {});
                var S,
                  M = r.nextZero(i, f),
                  R = r.readASCII(i, f, M - f),
                  C = f + p - M - 1;
                if ("tEXt" == w) S = r.readASCII(i, M + 1, C);
                else {
                  var N = n(i.slice(M + 2, M + 2 + C));
                  S = r.readUTF8(N, 0, N.length);
                }
                s.tabs[w][R] = S;
              } else if ("iTXt" == w) {
                null == s.tabs[w] && (s.tabs[w] = {});
                var M = 0,
                  b = f;
                M = r.nextZero(i, b);
                var R = r.readASCII(i, b, M - b),
                  T = i[(b = M + 1)];
                i[b + 1],
                  (b += 2),
                  (M = r.nextZero(i, b)),
                  r.readASCII(i, b, M - b),
                  (b = M + 1),
                  (M = r.nextZero(i, b)),
                  r.readUTF8(i, b, M - b);
                var S,
                  C = p - ((b = M + 1) - f);
                if (0 == T) S = r.readUTF8(i, b, C);
                else {
                  var N = n(i.slice(b, b + C));
                  S = r.readUTF8(N, 0, N.length);
                }
                s.tabs[w][R] = S;
              } else if ("PLTE" == w) s.tabs[w] = r.readBytes(i, f, p);
              else if ("hIST" == w) {
                var E = s.tabs.PLTE.length / 3;
                s.tabs[w] = [];
                for (var g = 0; g < E; g++) s.tabs[w].push(o(i, f + 2 * g));
              } else if ("tRNS" == w)
                3 == s.ctype
                  ? (s.tabs[w] = r.readBytes(i, f, p))
                  : 0 == s.ctype
                    ? (s.tabs[w] = o(i, f))
                    : 2 == s.ctype &&
                      (s.tabs[w] = [o(i, f), o(i, f + 2), o(i, f + 4)]);
              else if ("gAMA" == w) s.tabs[w] = r.readUint(i, f) / 1e5;
              else if ("sRGB" == w) s.tabs[w] = i[f];
              else if ("bKGD" == w)
                0 == s.ctype || 4 == s.ctype
                  ? (s.tabs[w] = [o(i, f)])
                  : 2 == s.ctype || 6 == s.ctype
                    ? (s.tabs[w] = [o(i, f), o(i, f + 2), o(i, f + 4)])
                    : 3 == s.ctype && (s.tabs[w] = i[f]);
              else if ("IEND" == w) break;
              (f += p), r.readUint(i, f), (f += 4);
            }
            if (0 != h) {
              var A = s.frames[s.frames.length - 1];
              A.data = t(s, v.slice(0, h), A.rect.width, A.rect.height);
            }
            return (
              (s.data = t(s, u, s.width, s.height)),
              delete s.compress,
              delete s.interlace,
              delete s.filter,
              s
            );
          },
          toRGBA8: function (r) {
            var t = r.width,
              n = r.height;
            if (null == r.tabs.acTL) return [e(r.data, t, n, r).buffer];
            var a = [];
            null == r.frames[0].data && (r.frames[0].data = r.data);
            for (
              var i = t * n * 4,
                f = new Uint8Array(i),
                o = new Uint8Array(i),
                s = new Uint8Array(i),
                u = 0;
              u < r.frames.length;
              u++
            ) {
              var c = r.frames[u],
                v = c.rect.x,
                h = c.rect.y,
                d = c.rect.width,
                g = c.rect.height,
                p = e(c.data, d, g, r);
              if (0 != u) for (var w = 0; w < i; w++) s[w] = f[w];
              if (
                (0 == c.blend
                  ? l(p, d, g, f, t, n, v, h, 0)
                  : 1 == c.blend && l(p, d, g, f, t, n, v, h, 1),
                a.push(f.buffer.slice(0)),
                0 == c.dispose)
              );
              else if (1 == c.dispose) l(o, d, g, f, t, n, v, h, 0);
              else if (2 == c.dispose) for (var w = 0; w < i; w++) f[w] = s[w];
            }
            return a;
          },
          _paeth: o,
          _copyTile: l,
          _bin: r,
        };
      })();
      !(function () {
        var r = e._copyTile,
          t = e._bin,
          n = e._paeth,
          a = {
            table: (function () {
              for (var r = new Uint32Array(256), e = 0; e < 256; e++) {
                for (var t = e, n = 0; n < 8; n++)
                  1 & t ? (t = 3988292384 ^ (t >>> 1)) : (t >>>= 1);
                r[e] = t;
              }
              return r;
            })(),
            update: function (r, e, t, n) {
              for (var i = 0; i < n; i++)
                r = a.table[(r ^ e[t + i]) & 255] ^ (r >>> 8);
              return r;
            },
            crc: function (r, e, t) {
              return 4294967295 ^ a.update(4294967295, r, e, t);
            },
          };
        function i(r, e, t, n) {
          (e[t] += (r[0] * n) >> 4),
            (e[t + 1] += (r[1] * n) >> 4),
            (e[t + 2] += (r[2] * n) >> 4),
            (e[t + 3] += (r[3] * n) >> 4);
        }
        function f(r) {
          return Math.max(0, Math.min(255, r));
        }
        function o(r, e) {
          var t = r[0] - e[0],
            n = r[1] - e[1],
            a = r[2] - e[2],
            i = r[3] - e[3];
          return t * t + n * n + a * a + i * i;
        }
        function l(r, e, t, n, a, l, s) {
          null == s && (s = 1);
          for (var u = n.length, c = [], v = [], h = 0; h < u; h++) {
            var d = n[h];
            c.push([
              (d >>> 0) & 255,
              (d >>> 8) & 255,
              (d >>> 16) & 255,
              (d >>> 24) & 255,
            ]);
          }
          for (var h = 0; h < u; h++) {
            for (var g = 4294967295, p = 0, w = 0; w < u; w++) {
              var b = o(c[h], c[w]);
              w != h && b < g && ((g = b), (p = w));
            }
            var y = Math.sqrt(g) / 2;
            v[h] = ~~(y * y);
          }
          for (
            var m = new Uint32Array(a.buffer),
              A = new Int16Array(e * t * 4),
              U = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5],
              h = 0;
            h < U.length;
            h++
          )
            U[h] = 255 * (-0.5 + (U[h] + 0.5) / 16);
          for (var I = 0; I < t; I++)
            for (var x = 0; x < e; x++) {
              var S,
                h = (I * e + x) * 4;
              if (2 != s)
                S = [
                  f(r[h] + A[h]),
                  f(r[h + 1] + A[h + 1]),
                  f(r[h + 2] + A[h + 2]),
                  f(r[h + 3] + A[h + 3]),
                ];
              else {
                var b = U[(3 & I) * 4 + (3 & x)];
                S = [
                  f(r[h] + b),
                  f(r[h + 1] + b),
                  f(r[h + 2] + b),
                  f(r[h + 3] + b),
                ];
              }
              for (var p = 0, M = 16777215, w = 0; w < u; w++) {
                var R = o(S, c[w]);
                R < M && ((M = R), (p = w));
              }
              var C = c[p],
                N = [S[0] - C[0], S[1] - C[1], S[2] - C[2], S[3] - C[3]];
              1 == s &&
                (x != e - 1 && i(N, A, h + 4, 7),
                I != t - 1 &&
                  (0 != x && i(N, A, h + 4 * e - 4, 3),
                  i(N, A, h + 4 * e, 5),
                  x != e - 1 && i(N, A, h + 4 * e + 4, 1))),
                (l[h >> 2] = p),
                (m[h >> 2] = n[p]);
            }
        }
        function s(r, e, n, i, f) {
          null == f && (f = {});
          var o,
            l = a.crc,
            s = t.writeUint,
            u = t.writeUshort,
            c = t.writeASCII,
            v = 8,
            h = r.frames.length > 1,
            d = !1,
            g = 33 + (h ? 20 : 0);
          if (
            (null != f.sRGB && (g += 13),
            null != f.pHYs && (g += 21),
            null != f.iCCP && (g += 21 + (o = pako.deflate(f.iCCP)).length + 4),
            3 == r.ctype)
          ) {
            for (var p = r.plte.length, w = 0; w < p; w++)
              r.plte[w] >>> 24 != 255 && (d = !0);
            g += 8 + 3 * p + 4 + (d ? 8 + 1 * p + 4 : 0);
          }
          for (var b = 0; b < r.frames.length; b++) {
            var y = r.frames[b];
            h && (g += 38), (g += y.cimg.length + 12), 0 != b && (g += 4);
          }
          for (
            var m = new Uint8Array((g += 12)),
              A = [137, 80, 78, 71, 13, 10, 26, 10],
              w = 0;
            w < 8;
            w++
          )
            m[w] = A[w];
          if (
            (s(m, v, 13),
            c(m, (v += 4), "IHDR"),
            s(m, (v += 4), e),
            s(m, (v += 4), n),
            (m[(v += 4)] = r.depth),
            (m[++v] = r.ctype),
            (m[++v] = 0),
            (m[++v] = 0),
            (m[++v] = 0),
            s(m, ++v, l(m, v - 17, 17)),
            (v += 4),
            null != f.sRGB &&
              (s(m, v, 1),
              c(m, (v += 4), "sRGB"),
              (m[(v += 4)] = f.sRGB),
              s(m, ++v, l(m, v - 5, 5)),
              (v += 4)),
            null != f.iCCP)
          ) {
            var U = 13 + o.length;
            s(m, v, U),
              c(m, (v += 4), "iCCP"),
              c(m, (v += 4), "ICC profile"),
              (v += 13),
              m.set(o, v),
              s(m, (v += o.length), l(m, v - (U + 4), U + 4)),
              (v += 4);
          }
          if (
            (null != f.pHYs &&
              (s(m, v, 9),
              c(m, (v += 4), "pHYs"),
              s(m, (v += 4), f.pHYs[0]),
              s(m, (v += 4), f.pHYs[1]),
              (m[(v += 4)] = f.pHYs[2]),
              s(m, ++v, l(m, v - 13, 13)),
              (v += 4)),
            h &&
              (s(m, v, 8),
              c(m, (v += 4), "acTL"),
              s(m, (v += 4), r.frames.length),
              s(m, (v += 4), null != f.loop ? f.loop : 0),
              s(m, (v += 4), l(m, v - 12, 12)),
              (v += 4)),
            3 == r.ctype)
          ) {
            var p = r.plte.length;
            s(m, v, 3 * p), c(m, (v += 4), "PLTE"), (v += 4);
            for (var w = 0; w < p; w++) {
              var I = 3 * w,
                x = r.plte[w],
                S = 255 & x,
                M = (x >>> 8) & 255,
                R = (x >>> 16) & 255;
              (m[v + I + 0] = S), (m[v + I + 1] = M), (m[v + I + 2] = R);
            }
            if (
              (s(m, (v += 3 * p), l(m, v - 3 * p - 4, 3 * p + 4)), (v += 4), d)
            ) {
              s(m, v, p), c(m, (v += 4), "tRNS"), (v += 4);
              for (var w = 0; w < p; w++) m[v + w] = (r.plte[w] >>> 24) & 255;
              s(m, (v += p), l(m, v - p - 4, p + 4)), (v += 4);
            }
          }
          for (var C = 0, b = 0; b < r.frames.length; b++) {
            var y = r.frames[b];
            h &&
              (s(m, v, 26),
              c(m, (v += 4), "fcTL"),
              s(m, (v += 4), C++),
              s(m, (v += 4), y.rect.width),
              s(m, (v += 4), y.rect.height),
              s(m, (v += 4), y.rect.x),
              s(m, (v += 4), y.rect.y),
              u(m, (v += 4), i[b]),
              u(m, (v += 2), 1e3),
              (m[(v += 2)] = y.dispose),
              (m[++v] = y.blend),
              s(m, ++v, l(m, v - 30, 30)),
              (v += 4));
            var N = y.cimg,
              p = N.length;
            s(m, v, p + (0 == b ? 0 : 4));
            var T = (v += 4);
            c(m, v, 0 == b ? "IDAT" : "fdAT"),
              (v += 4),
              0 != b && (s(m, v, C++), (v += 4)),
              m.set(N, v),
              s(m, (v += p), l(m, T, v - T)),
              (v += 4);
          }
          return (
            s(m, v, 0),
            c(m, (v += 4), "IEND"),
            s(m, (v += 4), l(m, v - 4, 4)),
            (v += 4),
            m.buffer
          );
        }
        function u(r, e, t) {
          for (var a = 0; a < r.frames.length; a++) {
            var i = r.frames[a],
              f = (i.rect.width, i.rect.height),
              o = new Uint8Array(f * i.bpl + f);
            i.cimg = (function (r, e, t, a, i, f, o) {
              var l = [],
                s = [0, 1, 2, 3, 4];
              -1 != f ? (s = [f]) : (e * a > 5e5 || 1 == t) && (s = [0]),
                o && (h = { level: 0 });
              var u =
                i.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
              Date.now();
              for (var c = 0; c < s.length; c++) {
                for (var v = 0; v < e; v++)
                  (function (r, e, t, a, i, f) {
                    var o = t * a,
                      l = o + t;
                    if (((r[l] = f), l++, 0 == f)) {
                      if (a < 500)
                        for (var s = 0; s < a; s++) r[l + s] = e[o + s];
                      else r.set(new Uint8Array(e.buffer, o, a), l);
                    } else if (1 == f) {
                      for (var s = 0; s < i; s++) r[l + s] = e[o + s];
                      for (var s = i; s < a; s++)
                        r[l + s] = (e[o + s] - e[o + s - i] + 256) & 255;
                    } else if (0 == t) {
                      for (var s = 0; s < i; s++) r[l + s] = e[o + s];
                      if (2 == f)
                        for (var s = i; s < a; s++) r[l + s] = e[o + s];
                      if (3 == f)
                        for (var s = i; s < a; s++)
                          r[l + s] =
                            (e[o + s] - (e[o + s - i] >> 1) + 256) & 255;
                      if (4 == f)
                        for (var s = i; s < a; s++)
                          r[l + s] =
                            (e[o + s] - n(e[o + s - i], 0, 0) + 256) & 255;
                    } else {
                      if (2 == f)
                        for (var s = 0; s < a; s++)
                          r[l + s] = (e[o + s] + 256 - e[o + s - a]) & 255;
                      if (3 == f) {
                        for (var s = 0; s < i; s++)
                          r[l + s] =
                            (e[o + s] + 256 - (e[o + s - a] >> 1)) & 255;
                        for (var s = i; s < a; s++)
                          r[l + s] =
                            (e[o + s] +
                              256 -
                              ((e[o + s - a] + e[o + s - i]) >> 1)) &
                            255;
                      }
                      if (4 == f) {
                        for (var s = 0; s < i; s++)
                          r[l + s] =
                            (e[o + s] + 256 - n(0, e[o + s - a], 0)) & 255;
                        for (var s = i; s < a; s++)
                          r[l + s] =
                            (e[o + s] +
                              256 -
                              n(e[o + s - i], e[o + s - a], e[o + s - i - a])) &
                            255;
                      }
                    }
                  })(i, r, v, a, t, s[c]);
                l.push(u.deflate(i, h));
              }
              for (var h, d, g = 1e9, c = 0; c < l.length; c++)
                l[c].length < g && ((d = c), (g = l[c].length));
              return l[d];
            })(i.img, f, i.bpp, i.bpl, o, e, t);
          }
        }
        function c(e, t, n, a, i) {
          for (
            var f = i[0],
              o = i[1],
              s = i[2],
              u = i[3],
              c = i[4],
              g = i[5],
              p = 6,
              w = 8,
              b = 255,
              y = 0;
            y < e.length;
            y++
          ) {
            for (
              var m = new Uint8Array(e[y]), A = m.length, U = 0;
              U < A;
              U += 4
            )
              b &= m[U + 3];
          }
          var I = 255 != b,
            x = (function (e, t, n, a, i, f) {
              for (var o = [], l = 0; l < e.length; l++) {
                var s,
                  u = new Uint8Array(e[l]),
                  c = new Uint32Array(u.buffer),
                  d = 0,
                  g = 0,
                  p = t,
                  w = n,
                  b = a ? 1 : 0;
                if (0 != l) {
                  for (
                    var y = f || a || 1 == l || 0 != o[l - 2].dispose ? 1 : 2,
                      m = 0,
                      A = 1e9,
                      U = 0;
                    U < y;
                    U++
                  ) {
                    for (
                      var I = new Uint8Array(e[l - 1 - U]),
                        x = new Uint32Array(e[l - 1 - U]),
                        S = t,
                        M = n,
                        R = -1,
                        C = -1,
                        N = 0;
                      N < n;
                      N++
                    )
                      for (var T = 0; T < t; T++) {
                        var E = N * t + T;
                        c[E] != x[E] &&
                          (T < S && (S = T),
                          T > R && (R = T),
                          N < M && (M = N),
                          N > C && (C = N));
                      }
                    -1 == R && (S = M = R = C = 0),
                      i && ((1 & S) == 1 && S--, (1 & M) == 1 && M--);
                    var D = (R - S + 1) * (C - M + 1);
                    D < A &&
                      ((A = D),
                      (m = U),
                      (d = S),
                      (g = M),
                      (p = R - S + 1),
                      (w = C - M + 1));
                  }
                  var I = new Uint8Array(e[l - 1 - m]);
                  1 == m && (o[l - 1].dispose = 2),
                    r(
                      I,
                      t,
                      n,
                      (s = new Uint8Array(p * w * 4)),
                      p,
                      w,
                      -d,
                      -g,
                      0,
                    ),
                    1 == (b = r(u, t, n, s, p, w, -d, -g, 3) ? 1 : 0)
                      ? h(u, t, n, s, { x: d, y: g, width: p, height: w })
                      : r(u, t, n, s, p, w, -d, -g, 0);
                } else s = u.slice(0);
                o.push({
                  rect: { x: d, y: g, width: p, height: w },
                  img: s,
                  blend: b,
                  dispose: 0,
                });
              }
              if (a)
                for (var l = 0; l < o.length; l++) {
                  var O = o[l];
                  if (1 != O.blend) {
                    var L = O.rect,
                      B = o[l - 1].rect,
                      k = Math.min(L.x, B.x),
                      q = Math.min(L.y, B.y),
                      P = {
                        x: k,
                        y: q,
                        width: Math.max(L.x + L.width, B.x + B.width) - k,
                        height: Math.max(L.y + L.height, B.y + B.height) - q,
                      };
                    (o[l - 1].dispose = 1),
                      l - 1 != 0 && v(e, t, n, o, l - 1, P, i),
                      v(e, t, n, o, l, P, i);
                  }
                }
              var _ = 0;
              if (1 != e.length)
                for (var E = 0; E < o.length; E++) {
                  var O = o[E];
                  O.rect.width, O.rect.height;
                }
              return o;
            })(e, t, n, f, o, s),
            S = {},
            M = [],
            R = [];
          if (0 != a) {
            for (var C = [], U = 0; U < x.length; U++) C.push(x[U].img.buffer);
            for (
              var N = d(
                  (function (r) {
                    for (var e = 0, t = 0; t < r.length; t++)
                      e += r[t].byteLength;
                    for (
                      var n = new Uint8Array(e), a = 0, t = 0;
                      t < r.length;
                      t++
                    ) {
                      for (
                        var i = new Uint8Array(r[t]), f = i.length, o = 0;
                        o < f;
                        o += 4
                      ) {
                        var l = i[o],
                          s = i[o + 1],
                          u = i[o + 2],
                          c = i[o + 3];
                        0 == c && (l = s = u = 0),
                          (n[a + o] = l),
                          (n[a + o + 1] = s),
                          (n[a + o + 2] = u),
                          (n[a + o + 3] = c);
                      }
                      a += f;
                    }
                    return n.buffer;
                  })(C),
                  a,
                ),
                U = 0;
              U < N.plte.length;
              U++
            )
              M.push(N.plte[U].est.rgba);
            for (var T = 0, U = 0; U < x.length; U++) {
              var E = x[U],
                D = E.img.length,
                O = new Uint8Array(N.inds.buffer, T >> 2, D >> 2);
              R.push(O);
              var L = new Uint8Array(N.abuf, T, D);
              g && l(E.img, E.rect.width, E.rect.height, M, L, O),
                E.img.set(L),
                (T += D);
            }
          } else
            for (var y = 0; y < x.length; y++) {
              var E = x[y],
                B = new Uint32Array(E.img.buffer),
                k = E.rect.width,
                A = B.length,
                O = new Uint8Array(A);
              R.push(O);
              for (var U = 0; U < A; U++) {
                var q = B[U];
                if (0 != U && q == B[U - 1]) O[U] = O[U - 1];
                else if (U > k && q == B[U - k]) O[U] = O[U - k];
                else {
                  var P = S[q];
                  if (
                    null == P &&
                    ((S[q] = P = M.length), M.push(q), M.length >= 300)
                  )
                    break;
                  O[U] = P;
                }
              }
            }
          var _ = M.length;
          _ <= 256 &&
            !1 == c &&
            (w = Math.max((w = _ <= 2 ? 1 : _ <= 4 ? 2 : _ <= 16 ? 4 : 8), u));
          for (var y = 0; y < x.length; y++) {
            var E = x[y],
              k = (E.rect.x, E.rect.y, E.rect.width),
              F = E.rect.height,
              H = E.img;
            new Uint32Array(H.buffer);
            var G = 4 * k,
              z = 4;
            if (_ <= 256 && !1 == c) {
              for (
                var Y = new Uint8Array((G = Math.ceil((w * k) / 8)) * F),
                  Z = R[y],
                  j = 0;
                j < F;
                j++
              ) {
                var U = j * G,
                  K = j * k;
                if (8 == w) for (var V = 0; V < k; V++) Y[U + V] = Z[K + V];
                else if (4 == w)
                  for (var V = 0; V < k; V++)
                    Y[U + (V >> 1)] |= Z[K + V] << (4 - (1 & V) * 4);
                else if (2 == w)
                  for (var V = 0; V < k; V++)
                    Y[U + (V >> 2)] |= Z[K + V] << (6 - (3 & V) * 2);
                else if (1 == w)
                  for (var V = 0; V < k; V++)
                    Y[U + (V >> 3)] |= Z[K + V] << (7 - (7 & V) * 1);
              }
              (H = Y), (p = 3), (z = 1);
            } else if (!1 == I && 1 == x.length) {
              for (
                var Y = new Uint8Array(k * F * 3), X = k * F, U = 0;
                U < X;
                U++
              ) {
                var W = 3 * U,
                  J = 4 * U;
                (Y[W] = H[J]), (Y[W + 1] = H[J + 1]), (Y[W + 2] = H[J + 2]);
              }
              (H = Y), (p = 2), (z = 3), (G = 3 * k);
            }
            (E.img = H), (E.bpl = G), (E.bpp = z);
          }
          return { ctype: p, depth: w, plte: M, frames: x };
        }
        function v(e, t, n, a, i, f, o) {
          for (
            var l = Uint8Array,
              s = Uint32Array,
              u = new l(e[i - 1]),
              c = new s(e[i - 1]),
              v = i + 1 < e.length ? new l(e[i + 1]) : null,
              d = new l(e[i]),
              g = new s(d.buffer),
              p = t,
              w = n,
              b = -1,
              y = -1,
              m = 0;
            m < f.height;
            m++
          )
            for (var A = 0; A < f.width; A++) {
              var U = f.x + A,
                I = f.y + m,
                x = I * t + U,
                S = g[x];
              0 == S ||
                (0 == a[i - 1].dispose &&
                  c[x] == S &&
                  (null == v || 0 != v[4 * x + 3])) ||
                (U < p && (p = U),
                U > b && (b = U),
                I < w && (w = I),
                I > y && (y = I));
            }
          -1 == b && (p = w = b = y = 0),
            o && ((1 & p) == 1 && p--, (1 & w) == 1 && w--),
            (f = { x: p, y: w, width: b - p + 1, height: y - w + 1 });
          var M = a[i];
          (M.rect = f),
            (M.blend = 1),
            (M.img = new Uint8Array(f.width * f.height * 4)),
            0 == a[i - 1].dispose
              ? (r(u, t, n, M.img, f.width, f.height, -f.x, -f.y, 0),
                h(d, t, n, M.img, f))
              : r(d, t, n, M.img, f.width, f.height, -f.x, -f.y, 0);
        }
        function h(e, t, n, a, i) {
          r(e, t, n, a, i.width, i.height, -i.x, -i.y, 2);
        }
        function d(r, e, t) {
          Date.now();
          for (
            var n = new Uint8Array(r),
              a = n.slice(0),
              i = new Uint32Array(a.buffer),
              f = w(a, e),
              o = f[0],
              l = f[1],
              s = l.length,
              u = new Uint32Array(s),
              c = new Uint8Array(u.buffer),
              v = 0;
            v < s;
            v++
          )
            u[v] = l[v].est.rgba;
          var h = n.length,
            d,
            m = new Uint8Array(h >> 2);
          if (s <= 60) p(n, m, c), g(m, i, u);
          else if (n.length < 32e6)
            for (var v = 0; v < h; v += 4) {
              var A = n[v] * (1 / 255),
                U = n[v + 1] * (1 / 255),
                I = n[v + 2] * (1 / 255),
                x = n[v + 3] * (1 / 255);
              (d = b(o, A, U, I, x)),
                (m[v >> 2] = d.ind),
                (i[v >> 2] = d.est.rgba);
            }
          else
            for (var v = 0; v < h; v += 4) {
              var A = n[v] * (1 / 255),
                U = n[v + 1] * (1 / 255),
                I = n[v + 2] * (1 / 255),
                x = n[v + 3] * (1 / 255);
              for (d = o; d.left; )
                d = 0 >= y(d.est, A, U, I, x) ? d.left : d.right;
              (m[v >> 2] = d.ind), (i[v >> 2] = d.est.rgba);
            }
          if (t || n.length * s < 10 * 4e6) {
            for (var S = 1e9, v = 0; v < 10; v++) {
              var M = (function (r, e, t) {
                return (
                  (function (r, e, t) {
                    for (
                      var n = t.length >>> 2,
                        a = new Uint32Array(4 * n),
                        i = new Uint32Array(n),
                        f = 0;
                      f < r.length;
                      f += 4
                    ) {
                      var o = e[f >>> 2],
                        l = 4 * o;
                      i[o]++,
                        (a[l] += r[f]),
                        (a[l + 1] += r[f + 1]),
                        (a[l + 2] += r[f + 2]),
                        (a[l + 3] += r[f + 3]);
                    }
                    for (var f = 0; f < t.length; f++)
                      t[f] = Math.round(a[f] / i[f >>> 2]);
                  })(r, e, t),
                  p(r, e, t)
                );
              })(n, m, c);
              if (M / S > 0.997) break;
              S = M;
            }
            for (var v = 0; v < s; v++) l[v].est.rgba = u[v];
            g(m, i, u);
          }
          return { abuf: a.buffer, inds: m, plte: l };
        }
        function g(r, e, t) {
          for (var n = 0; n < r.length; n++) e[n] = t[r[n]];
        }
        function p(r, e, t) {
          for (var n = 0, a = t.length >>> 2, i = [], f = 0; f < a; f++) {
            for (
              var o = 4 * f,
                l = t[o],
                s = t[o + 1],
                u = t[o + 2],
                c = t[o + 3],
                v = 0,
                h = 1e9,
                d = 0;
              d < a;
              d++
            )
              if (f != d) {
                var g = 4 * d,
                  p = l - t[g],
                  w = s - t[g + 1],
                  b = u - t[g + 2],
                  y = c - t[g + 3],
                  m = p * p + w * w + b * b + y * y;
                m < h && ((h = m), (v = d));
              }
            (i[f] = 0.5 * Math.sqrt(h)), (i[f] = i[f] * i[f]);
          }
          for (var f = 0; f < r.length; f += 4) {
            var l = r[f],
              s = r[f + 1],
              u = r[f + 2],
              c = r[f + 3],
              v = e[f >>> 2],
              o = 4 * v,
              p = l - t[o],
              w = s - t[o + 1],
              b = u - t[o + 2],
              y = c - t[o + 3],
              h = p * p + w * w + b * b + y * y;
            if (h > i[v])
              for (var d = 0; d < a; d++) {
                (p = l - t[(o = 4 * d)]),
                  (w = s - t[o + 1]),
                  (b = u - t[o + 2]);
                var m = p * p + w * w + b * b + (y = c - t[o + 3]) * y;
                if (m < h && ((h = m), (v = d), h < i[d])) break;
              }
            (e[f >>> 2] = v), (n += h);
          }
          return n / (r.length >>> 2);
        }
        function w(r, e, t) {
          null == t && (t = 1e-4);
          var n = new Uint32Array(r.buffer),
            a = {
              i0: 0,
              i1: r.length,
              bst: null,
              est: null,
              tdst: 0,
              left: null,
              right: null,
            };
          (a.bst = A(r, a.i0, a.i1)), (a.est = U(a.bst));
          for (var i = [a]; i.length < e; ) {
            for (var f = 0, o = 0, l = 0; l < i.length; l++)
              i[l].est.L > f && ((f = i[l].est.L), (o = l));
            if (f < t) break;
            var s = i[o],
              u = (function (r, e, t, n, a, i) {
                for (n -= 4; t < n; ) {
                  for (; m(r, t, a) <= i; ) t += 4;
                  for (; m(r, n, a) > i; ) n -= 4;
                  if (t >= n) break;
                  var f = e[t >> 2];
                  (e[t >> 2] = e[n >> 2]), (e[n >> 2] = f), (t += 4), (n -= 4);
                }
                for (; m(r, t, a) > i; ) t -= 4;
                return t + 4;
              })(r, n, s.i0, s.i1, s.est.e, s.est.eMq255);
            if (s.i0 >= u || s.i1 <= u) {
              s.est.L = 0;
              continue;
            }
            var c = {
              i0: s.i0,
              i1: u,
              bst: null,
              est: null,
              tdst: 0,
              left: null,
              right: null,
            };
            (c.bst = A(r, c.i0, c.i1)), (c.est = U(c.bst));
            var v = {
              i0: u,
              i1: s.i1,
              bst: null,
              est: null,
              tdst: 0,
              left: null,
              right: null,
            };
            v.bst = { R: [], m: [], N: s.bst.N - c.bst.N };
            for (var l = 0; l < 16; l++) v.bst.R[l] = s.bst.R[l] - c.bst.R[l];
            for (var l = 0; l < 4; l++) v.bst.m[l] = s.bst.m[l] - c.bst.m[l];
            (v.est = U(v.bst)),
              (s.left = c),
              (s.right = v),
              (i[o] = c),
              i.push(v);
          }
          i.sort(function (r, e) {
            return e.bst.N - r.bst.N;
          });
          for (var l = 0; l < i.length; l++) i[l].ind = l;
          return [a, i];
        }
        function b(r, e, t, n, a) {
          if (null == r.left)
            return (
              (r.tdst = (function (r, e, t, n, a) {
                var i = e - r[0],
                  f = t - r[1],
                  o = n - r[2],
                  l = a - r[3];
                return i * i + f * f + o * o + l * l;
              })(r.est.q, e, t, n, a)),
              r
            );
          var i = y(r.est, e, t, n, a),
            f = r.left,
            o = r.right;
          i > 0 && ((f = r.right), (o = r.left));
          var l = b(f, e, t, n, a);
          if (l.tdst <= i * i) return l;
          var s = b(o, e, t, n, a);
          return s.tdst < l.tdst ? s : l;
        }
        function y(r, e, t, n, a) {
          var i = r.e;
          return i[0] * e + i[1] * t + i[2] * n + i[3] * a - r.eMq;
        }
        function m(r, e, t) {
          return (
            r[e] * t[0] + r[e + 1] * t[1] + r[e + 2] * t[2] + r[e + 3] * t[3]
          );
        }
        function A(r, e, t) {
          for (
            var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              a = [0, 0, 0, 0],
              i = e;
            i < t;
            i += 4
          ) {
            var f = r[i] * (1 / 255),
              o = r[i + 1] * (1 / 255),
              l = r[i + 2] * (1 / 255),
              s = r[i + 3] * (1 / 255);
            (a[0] += f),
              (a[1] += o),
              (a[2] += l),
              (a[3] += s),
              (n[0] += f * f),
              (n[1] += f * o),
              (n[2] += f * l),
              (n[3] += f * s),
              (n[5] += o * o),
              (n[6] += o * l),
              (n[7] += o * s),
              (n[10] += l * l),
              (n[11] += l * s),
              (n[15] += s * s);
          }
          return (
            (n[4] = n[1]),
            (n[8] = n[2]),
            (n[9] = n[6]),
            (n[12] = n[3]),
            (n[13] = n[7]),
            (n[14] = n[11]),
            { R: n, m: a, N: (t - e) >> 2 }
          );
        }
        function U(r) {
          var e = r.R,
            t = r.m,
            n = r.N,
            a = t[0],
            i = t[1],
            f = t[2],
            o = t[3],
            l = 0 == n ? 0 : 1 / n,
            s = [
              e[0] - a * a * l,
              e[1] - a * i * l,
              e[2] - a * f * l,
              e[3] - a * o * l,
              e[4] - i * a * l,
              e[5] - i * i * l,
              e[6] - i * f * l,
              e[7] - i * o * l,
              e[8] - f * a * l,
              e[9] - f * i * l,
              e[10] - f * f * l,
              e[11] - f * o * l,
              e[12] - o * a * l,
              e[13] - o * i * l,
              e[14] - o * f * l,
              e[15] - o * o * l,
            ],
            u = [Math.random(), Math.random(), Math.random(), Math.random()],
            c = 0,
            v = 0;
          if (0 != n)
            for (
              var h = 0;
              h < 16 &&
              ((u = I.multVec(s, u)),
              (v = Math.sqrt(I.dot(u, u))),
              (u = I.sml(1 / v, u)),
              !(0 != h && 1e-9 > Math.abs(v - c)));
              h++
            ) {
              c = v;
            }
          var d = [a * l, i * l, f * l, o * l],
            g = I.dot(I.sml(255, d), u);
          return {
            Cov: s,
            q: d,
            e: u,
            L: c,
            eMq255: g,
            eMq: I.dot(u, d),
            rgba:
              ((Math.round(255 * d[3]) << 24) |
                (Math.round(255 * d[2]) << 16) |
                (Math.round(255 * d[1]) << 8) |
                (Math.round(255 * d[0]) << 0)) >>>
              0,
          };
        }
        var I = {
          multVec: function (r, e) {
            return [
              r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3],
              r[4] * e[0] + r[5] * e[1] + r[6] * e[2] + r[7] * e[3],
              r[8] * e[0] + r[9] * e[1] + r[10] * e[2] + r[11] * e[3],
              r[12] * e[0] + r[13] * e[1] + r[14] * e[2] + r[15] * e[3],
            ];
          },
          dot: function (r, e) {
            return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3];
          },
          sml: function (r, e) {
            return [r * e[0], r * e[1], r * e[2], r * e[3]];
          },
        };
        (e.encode = function (r, e, t, n, a, i, f) {
          null == n && (n = 0), null == f && (f = !1);
          var o = c(r, e, t, n, [!1, !1, !1, 0, f, !1]);
          return u(o, -1), s(o, e, t, a, i);
        }),
          (e.encodeLL = function (r, e, t, n, a, i, f, o) {
            var l = {
              ctype: 0 + (1 == n ? 0 : 2) + (0 == a ? 0 : 4),
              depth: i,
              frames: [],
            };
            Date.now();
            for (var c = (n + a) * i, v = c * e, h = 0; h < r.length; h++)
              l.frames.push({
                rect: { x: 0, y: 0, width: e, height: t },
                img: new Uint8Array(r[h]),
                blend: 0,
                dispose: 1,
                bpp: Math.ceil(c / 8),
                bpl: Math.ceil(v / 8),
              });
            return u(l, 0, !0), s(l, e, t, f, o);
          }),
          (e.encode.compress = c),
          (e.encode.dither = l),
          (e.quantize = d),
          (e.quantize.findNearest = p),
          (e.quantize.getKDtree = w),
          (e.quantize.getNearest = b);
      })(),
        (r.exports = e);
    },
    849055: function (r, e, t) {
      "use strict";
      function n(r) {
        let e = "==".slice(0, (4 - (r.length % 4)) % 4),
          t = atob(r.replace(/-/g, "+").replace(/_/g, "/") + e),
          n = new ArrayBuffer(t.length),
          a = new Uint8Array(n);
        for (let r = 0; r < t.length; r++) a[r] = t.charCodeAt(r);
        return n;
      }
      function a(r) {
        let e = new Uint8Array(r),
          t = "";
        for (let r of e) t += String.fromCharCode(r);
        return btoa(t)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      t.d(e, {
        U2: function () {
          return y;
        },
        Ue: function () {
          return b;
        },
      });
      var i = "copy",
        f = "convert";
      function o(r, e, t) {
        if (e === i) return t;
        if (e === f) return r(t);
        if (e instanceof Array) return t.map((t) => o(r, e[0], t));
        if (e instanceof Object) {
          let n = {};
          for (let [a, i] of Object.entries(e)) {
            if (i.derive) {
              let r = i.derive(t);
              void 0 !== r && (t[a] = r);
            }
            if (!(a in t)) {
              if (i.required) throw Error(`Missing key: ${a}`);
              continue;
            }
            if (null == t[a]) {
              n[a] = null;
              continue;
            }
            n[a] = o(r, i.schema, t[a]);
          }
          return n;
        }
      }
      function l(r, e) {
        return { required: !0, schema: r, derive: e };
      }
      function s(r) {
        return { required: !0, schema: r };
      }
      function u(r) {
        return { required: !1, schema: r };
      }
      var c = { type: s(i), id: s(f), transports: u(i) },
        v = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        h = { appid: u(i), appidExclude: u(i), credProps: u(i) },
        d = {
          publicKey: s({
            rp: s(i),
            user: s({ id: s(f), name: s(i), displayName: s(i) }),
            challenge: s(f),
            pubKeyCredParams: s(i),
            timeout: u(i),
            excludeCredentials: u([c]),
            authenticatorSelection: u(i),
            attestation: u(i),
            extensions: u(v),
          }),
          signal: u(i),
        },
        g = {
          type: s(i),
          id: s(i),
          rawId: s(f),
          authenticatorAttachment: u(i),
          response: s({
            clientDataJSON: s(f),
            attestationObject: s(f),
            transports: l(i, (r) => {
              var e;
              return (null == (e = r.getTransports) ? void 0 : e.call(r)) || [];
            }),
          }),
          clientExtensionResults: l(h, (r) => r.getClientExtensionResults()),
        },
        p = {
          mediation: u(i),
          publicKey: s({
            challenge: s(f),
            timeout: u(i),
            rpId: u(i),
            allowCredentials: u([c]),
            userVerification: u(i),
            extensions: u(v),
          }),
          signal: u(i),
        },
        w = {
          type: s(i),
          id: s(i),
          rawId: s(f),
          authenticatorAttachment: u(i),
          response: s({
            clientDataJSON: s(f),
            authenticatorData: s(f),
            signature: s(f),
            userHandle: s(f),
          }),
          clientExtensionResults: l(h, (r) => r.getClientExtensionResults()),
        };
      async function b(r) {
        let e = await navigator.credentials.create(o(n, d, r));
        return o(a, g, e);
      }
      async function y(r) {
        let e = await navigator.credentials.get(o(n, p, r));
        return o(a, w, e);
      }
    },
  },
]);
//# sourceMappingURL=f9649ae6f6a68c738cf5.js.map
