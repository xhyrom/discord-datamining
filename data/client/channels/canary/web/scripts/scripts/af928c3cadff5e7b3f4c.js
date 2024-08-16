"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43903"],
  {
    872184: function (t, n, r) {
      t.exports = r.p + "a033391cd91175e41be9.wasm";
    },
    241441: function (t, n, r) {
      r.r(n),
        r(312677),
        r(518263),
        r(970173),
        r(520712),
        r(268111),
        r(941497),
        r(32026),
        r(480839),
        r(744285),
        r(492257),
        r(873817),
        r(419526),
        r(62338),
        r(747282),
        r(565568),
        r(242167),
        r(951953),
        r(57638),
        r(653041),
        r(733860),
        r(411104),
        r(757143);
      var e,
        a =
          ((e =
            "undefined" != typeof document && document.currentScript
              ? document.currentScript.src
              : void 0),
          function (t) {
            var n,
              a,
              u,
              i,
              o,
              f,
              c,
              s,
              l,
              m,
              h,
              g,
              y,
              p,
              _,
              d,
              v,
              w,
              b,
              A = void 0 !== (t = t || {}) ? t : {};
            (A.ready = new Promise(function (t, n) {
              (a = t), (u = n);
            })),
              (A.locateFile = function () {
                return r(872184);
              });
            var D = {};
            for (i in A) A.hasOwnProperty(i) && (D[i] = A[i]);
            var M = [],
              S = "./this.program",
              F = function (t, n) {
                throw n;
              },
              R = "";
            (R = self.location.href),
              e && (R = e),
              (R =
                0 !== R.indexOf("blob:")
                  ? R.substr(0, R.lastIndexOf("/") + 1)
                  : "");
            o = function (t) {
              var n = new XMLHttpRequest();
              return (
                n.open("GET", t, !1),
                (n.responseType = "arraybuffer"),
                n.send(null),
                new Uint8Array(n.response)
              );
            };
            var E = A.print || console.log.bind(console),
              Y = A.printErr || console.warn.bind(console);
            for (i in D) D.hasOwnProperty(i) && (A[i] = D[i]);
            (D = null),
              A.arguments && (M = A.arguments),
              A.thisProgram && (S = A.thisProgram),
              A.quit && A.quit;
            var O = 0,
              k = function (t) {
                O = t;
              };
            A.wasmBinary && (f = A.wasmBinary),
              A.noExitRuntime && A.noExitRuntime,
              "object" != typeof WebAssembly &&
                J("no native wasm support detected");
            var C = !1;
            function I(t) {
              var n,
                r,
                e = A["_" + t];
              return (
                (n = e),
                (r =
                  "Cannot call unknown function " +
                  t +
                  ", make sure it is exported"),
                n || J("Assertion failed: " + r),
                e
              );
            }
            var H =
              "undefined" != typeof TextDecoder
                ? new TextDecoder("utf8")
                : void 0;
            function x(t, n, r) {
              for (var e = n + r, a = n; t[a] && !(a >= e); ) ++a;
              if (a - n > 16 && t.subarray && H)
                return H.decode(t.subarray(n, a));
              for (var u = ""; n < a; ) {
                var i = t[n++];
                if (!(128 & i)) {
                  u += String.fromCharCode(i);
                  continue;
                }
                var o = 63 & t[n++];
                if ((224 & i) == 192) {
                  u += String.fromCharCode(((31 & i) << 6) | o);
                  continue;
                }
                var f = 63 & t[n++];
                if (
                  (i =
                    (240 & i) == 224
                      ? ((15 & i) << 12) | (o << 6) | f
                      : ((7 & i) << 18) |
                        (o << 12) |
                        (f << 6) |
                        (63 & t[n++])) < 65536
                )
                  u += String.fromCharCode(i);
                else {
                  var c = i - 65536;
                  u += String.fromCharCode(
                    55296 | (c >> 10),
                    56320 | (1023 & c),
                  );
                }
              }
              return u;
            }
            function P(t, n) {
              return t ? x(h, t, n) : "";
            }
            function T(t, n, r, e) {
              if (!(e > 0)) return 0;
              for (var a = r, u = r + e - 1, i = 0; i < t.length; ++i) {
                var o = t.charCodeAt(i);
                if (
                  (o >= 55296 &&
                    o <= 57343 &&
                    (o =
                      (65536 + ((1023 & o) << 10)) |
                      (1023 & t.charCodeAt(++i))),
                  o <= 127)
                ) {
                  if (r >= u) break;
                  n[r++] = o;
                } else if (o <= 2047) {
                  if (r + 1 >= u) break;
                  (n[r++] = 192 | (o >> 6)), (n[r++] = 128 | (63 & o));
                } else if (o <= 65535) {
                  if (r + 2 >= u) break;
                  (n[r++] = 224 | (o >> 12)),
                    (n[r++] = 128 | ((o >> 6) & 63)),
                    (n[r++] = 128 | (63 & o));
                } else {
                  if (r + 3 >= u) break;
                  (n[r++] = 240 | (o >> 18)),
                    (n[r++] = 128 | ((o >> 12) & 63)),
                    (n[r++] = 128 | ((o >> 6) & 63)),
                    (n[r++] = 128 | (63 & o));
                }
              }
              return (n[r] = 0), r - a;
            }
            function W(t, n) {
              m.set(t, n);
            }
            function U(t) {
              (l = t),
                (A.HEAP8 = m = new Int8Array(t)),
                (A.HEAP16 = new Int16Array(t)),
                (A.HEAP32 = p = new Int32Array(t)),
                (A.HEAPU8 = h = new Uint8Array(t)),
                (A.HEAPU16 = new Uint16Array(t)),
                (A.HEAPU32 = new Uint32Array(t)),
                (A.HEAPF32 = new Float32Array(t)),
                (A.HEAPF64 = new Float64Array(t));
            }
            A.INITIAL_MEMORY;
            var j = [],
              B = [],
              z = [],
              L = [];
            B.push({
              func: function () {
                ty();
              },
            });
            var G = 0,
              N = null,
              q = null;
            function J(t) {
              A.onAbort && A.onAbort(t),
                Y((t += "")),
                (C = !0),
                (t =
                  "abort(" +
                  t +
                  "). Build with -s ASSERTIONS=1 for more info.");
              var n = new WebAssembly.RuntimeError(t);
              throw (u(n), n);
            }
            (A.preloadedImages = {}), (A.preloadedAudios = {});
            function V(t) {
              var n, r;
              return (
                (n = t),
                (r = "data:application/octet-stream;base64,"),
                String.prototype.startsWith
                  ? n.startsWith(r)
                  : 0 === n.indexOf(r)
              );
            }
            var X = "index.wasm";
            if (!V(X)) {
              (n = X), (X = A.locateFile ? A.locateFile(n, R) : R + n);
            }
            function K(t) {
              try {
                if (t == X && f) return new Uint8Array(f);
                if (o) return o(t);
                throw "both async and sync fetching of the wasm failed";
              } catch (t) {
                J(t);
              }
            }
            function Z(t) {
              for (; t.length > 0; ) {
                var n = t.shift();
                if ("function" == typeof n) {
                  n(A);
                  continue;
                }
                var r = n.func;
                "number" == typeof r
                  ? void 0 === n.arg
                    ? w.get(r)()
                    : w.get(r)(n.arg)
                  : r(void 0 === n.arg ? null : n.arg);
              }
            }
            var Q = 0,
              $ = 4,
              tt = 8,
              tn = 12,
              tr = 13,
              te = 16;
            function ta(t) {
              (this.excPtr = t),
                (this.ptr = t - te),
                (this.set_type = function (t) {
                  p[(this.ptr + tt) >> 2] = t;
                }),
                (this.get_type = function () {
                  return p[(this.ptr + tt) >> 2];
                }),
                (this.set_destructor = function (t) {
                  p[(this.ptr + Q) >> 2] = t;
                }),
                (this.get_destructor = function () {
                  return p[(this.ptr + Q) >> 2];
                }),
                (this.set_refcount = function (t) {
                  p[(this.ptr + $) >> 2] = t;
                }),
                (this.set_caught = function (t) {
                  (t = t ? 1 : 0), (m[(this.ptr + tn) >> 0] = t);
                }),
                (this.get_caught = function () {
                  return 0 != m[(this.ptr + tn) >> 0];
                }),
                (this.set_rethrown = function (t) {
                  (t = t ? 1 : 0), (m[(this.ptr + tr) >> 0] = t);
                }),
                (this.get_rethrown = function () {
                  return 0 != m[(this.ptr + tr) >> 0];
                }),
                (this.init = function (t, n) {
                  this.set_type(t),
                    this.set_destructor(n),
                    this.set_refcount(0),
                    this.set_caught(!1),
                    this.set_rethrown(!1);
                }),
                (this.add_ref = function () {
                  var t = p[(this.ptr + $) >> 2];
                  p[(this.ptr + $) >> 2] = t + 1;
                }),
                (this.release_ref = function () {
                  var t = p[(this.ptr + $) >> 2];
                  return (p[(this.ptr + $) >> 2] = t - 1), 1 === t;
                });
            }
            var tu = 0,
              ti = {
                mappings: {},
                buffers: [null, [], []],
                printChar: function (t, n) {
                  var r = ti.buffers[t];
                  0 === n || 10 === n
                    ? ((1 === t ? E : Y)(x(r, 0)), (r.length = 0))
                    : r.push(n);
                },
                varargs: void 0,
                get: function () {
                  return (ti.varargs += 4), p[(ti.varargs - 4) >> 2];
                },
                getStr: function (t) {
                  return P(t);
                },
                get64: function (t, n) {
                  return t;
                },
              },
              to = {};
            function tf() {
              if (!tf.strings) {
                var t = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      ("object" == typeof navigator &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: S || "./this.program",
                };
                for (var n in to) t[n] = to[n];
                var r = [];
                for (var n in t) r.push(n + "=" + t[n]);
                tf.strings = r;
              }
              return tf.strings;
            }
            function tc(t) {
              return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
            }
            function ts(t, n) {
              for (var r = 0, e = 0; e <= n; r += t[e++]);
              return r;
            }
            var tl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
              tm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function th(t, n) {
              for (var r = new Date(t.getTime()); n > 0; ) {
                var e = tc(r.getFullYear()),
                  a = r.getMonth(),
                  u = (e ? tl : tm)[a];
                if (n > u - r.getDate())
                  (n -= u - r.getDate() + 1),
                    r.setDate(1),
                    a < 11
                      ? r.setMonth(a + 1)
                      : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
                else {
                  r.setDate(r.getDate() + n);
                  break;
                }
              }
              return r;
            }
            var tg = {
              a: function (t, n, r, e) {
                J(
                  "Assertion failed: " +
                    P(t) +
                    ", at: " +
                    [
                      n ? P(n) : "unknown filename",
                      r,
                      e ? P(e) : "unknown function",
                    ],
                );
              },
              g: function (t) {
                return tp(t + te) + te;
              },
              f: function (t, n, r) {
                throw (new ta(t).init(n, r), tu++, t);
              },
              m: function (t, n, r) {
                return (ti.varargs = r), 0;
              },
              v: function (t, n, r) {
                return (ti.varargs = r), 0;
              },
              w: function (t, n, r) {
                ti.varargs = r;
              },
              e: function () {
                J();
              },
              d: function (t, n) {
                return (function (t, n) {
                  throw (tE(t, n || 1), "longjmp");
                })(t, n);
              },
              p: function (t, n, r) {
                h.copyWithin(t, n, n + r);
              },
              q: function (t) {
                t >>>= 0;
                var n = h.length;
                if (t > 67108864) return !1;
                for (var r = 1; r <= 4; r *= 2) {
                  var e,
                    a,
                    u = n * (1 + 0.2 / r);
                  if (
                    ((u = Math.min(u, t + 100663296)),
                    (function (t) {
                      try {
                        return (
                          s.grow((t - l.byteLength + 65535) >>> 16),
                          U(s.buffer),
                          1
                        );
                      } catch (t) {}
                    })(
                      Math.min(
                        67108864,
                        ((a = 65536),
                        (e = Math.max(16777216, t, u)) % 65536 > 0 &&
                          (e += a - (e % a)),
                        e),
                      ),
                    ))
                  )
                    return !0;
                }
                return !1;
              },
              s: function (t, n) {
                var r = 0;
                return (
                  tf().forEach(function (e, a) {
                    var u = n + r;
                    (p[(t + 4 * a) >> 2] = u),
                      !(function (t, n, r) {
                        for (var e = 0; e < t.length; ++e)
                          m[n++ >> 0] = t.charCodeAt(e);
                        m[n >> 0] = 0;
                      })(e, u),
                      (r += e.length + 1);
                  }),
                  0
                );
              },
              t: function (t, n) {
                var r = tf();
                p[t >> 2] = r.length;
                var e = 0;
                return (
                  r.forEach(function (t) {
                    e += t.length + 1;
                  }),
                  (p[n >> 2] = e),
                  0
                );
              },
              n: function (t) {
                return 0;
              },
              u: function (t, n, r, e) {
                var a = ti.getStreamFromFD(t),
                  u = ti.doReadv(a, n, r);
                return (p[e >> 2] = u), 0;
              },
              o: function (t, n, r, e, a) {},
              l: function (t, n, r, e) {
                for (var a = 0, u = 0; u < r; u++) {
                  for (
                    var i = p[(n + 8 * u) >> 2],
                      o = p[(n + (8 * u + 4)) >> 2],
                      f = 0;
                    f < o;
                    f++
                  )
                    ti.printChar(t, h[i + f]);
                  a += o;
                }
                return (p[e >> 2] = a), 0;
              },
              c: function () {
                return 0 | O;
              },
              h: function (t, n, r, e) {
                var a = tS();
                try {
                  return w.get(t)(n, r, e);
                } catch (t) {
                  if ((tF(a), t !== t + 0 && "longjmp" !== t)) throw t;
                  tE(1, 0);
                }
              },
              i: function (t, n, r, e, a) {
                var u = tS();
                try {
                  return w.get(t)(n, r, e, a);
                } catch (t) {
                  if ((tF(u), t !== t + 0 && "longjmp" !== t)) throw t;
                  tE(1, 0);
                }
              },
              k: function (t, n, r) {
                var e = tS();
                try {
                  w.get(t)(n, r);
                } catch (t) {
                  if ((tF(e), t !== t + 0 && "longjmp" !== t)) throw t;
                  tE(1, 0);
                }
              },
              j: function (t, n, r, e) {
                var a = tS();
                try {
                  w.get(t)(n, r, e);
                } catch (t) {
                  if ((tF(a), t !== t + 0 && "longjmp" !== t)) throw t;
                  tE(1, 0);
                }
              },
              b: function (t) {
                k(0 | t);
              },
              r: function (t, n, r, e) {
                return (function (t, n, r, e) {
                  var a,
                    u,
                    i = p[(e + 40) >> 2],
                    o = {
                      tm_sec: p[e >> 2],
                      tm_min: p[(e + 4) >> 2],
                      tm_hour: p[(e + 8) >> 2],
                      tm_mday: p[(e + 12) >> 2],
                      tm_mon: p[(e + 16) >> 2],
                      tm_year: p[(e + 20) >> 2],
                      tm_wday: p[(e + 24) >> 2],
                      tm_yday: p[(e + 28) >> 2],
                      tm_isdst: p[(e + 32) >> 2],
                      tm_gmtoff: p[(e + 36) >> 2],
                      tm_zone: i ? P(i) : "",
                    },
                    f = P(r),
                    c = {
                      "%c": "%a %b %d %H:%M:%S %Y",
                      "%D": "%m/%d/%y",
                      "%F": "%Y-%m-%d",
                      "%h": "%b",
                      "%r": "%I:%M:%S %p",
                      "%R": "%H:%M",
                      "%T": "%H:%M:%S",
                      "%x": "%m/%d/%y",
                      "%X": "%H:%M:%S",
                      "%Ec": "%c",
                      "%EC": "%C",
                      "%Ex": "%m/%d/%y",
                      "%EX": "%H:%M:%S",
                      "%Ey": "%y",
                      "%EY": "%Y",
                      "%Od": "%d",
                      "%Oe": "%e",
                      "%OH": "%H",
                      "%OI": "%I",
                      "%Om": "%m",
                      "%OM": "%M",
                      "%OS": "%S",
                      "%Ou": "%u",
                      "%OU": "%U",
                      "%OV": "%V",
                      "%Ow": "%w",
                      "%OW": "%W",
                      "%Oy": "%y",
                    };
                  for (var s in c) f = f.replace(RegExp(s, "g"), c[s]);
                  var l = [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    h = [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ];
                  function g(t, n, r) {
                    for (
                      var e = "number" == typeof t ? t.toString() : t || "";
                      e.length < n;

                    )
                      e = r[0] + e;
                    return e;
                  }
                  function y(t, n) {
                    return g(t, n, "0");
                  }
                  function _(t, n) {
                    var r;
                    function e(t) {
                      return t < 0 ? -1 : t > 0 ? 1 : 0;
                    }
                    return (
                      0 === (r = e(t.getFullYear() - n.getFullYear())) &&
                        0 === (r = e(t.getMonth() - n.getMonth())) &&
                        (r = e(t.getDate() - n.getDate())),
                      r
                    );
                  }
                  function d(t) {
                    switch (t.getDay()) {
                      case 0:
                        return new Date(t.getFullYear() - 1, 11, 29);
                      case 1:
                        return t;
                      case 2:
                        return new Date(t.getFullYear(), 0, 3);
                      case 3:
                        return new Date(t.getFullYear(), 0, 2);
                      case 4:
                        return new Date(t.getFullYear(), 0, 1);
                      case 5:
                        return new Date(t.getFullYear() - 1, 11, 31);
                      case 6:
                        return new Date(t.getFullYear() - 1, 11, 30);
                    }
                  }
                  function v(t) {
                    var n = th(new Date(t.tm_year + 1900, 0, 1), t.tm_yday),
                      r = new Date(n.getFullYear(), 0, 4),
                      e = new Date(n.getFullYear() + 1, 0, 4),
                      a = d(r),
                      u = d(e);
                    return 0 >= _(a, n)
                      ? 0 >= _(u, n)
                        ? n.getFullYear() + 1
                        : n.getFullYear()
                      : n.getFullYear() - 1;
                  }
                  var w = {
                    "%a": function (t) {
                      return l[t.tm_wday].substring(0, 3);
                    },
                    "%A": function (t) {
                      return l[t.tm_wday];
                    },
                    "%b": function (t) {
                      return h[t.tm_mon].substring(0, 3);
                    },
                    "%B": function (t) {
                      return h[t.tm_mon];
                    },
                    "%C": function (t) {
                      return y(((t.tm_year + 1900) / 100) | 0, 2);
                    },
                    "%d": function (t) {
                      return y(t.tm_mday, 2);
                    },
                    "%e": function (t) {
                      return g(t.tm_mday, 2, " ");
                    },
                    "%g": function (t) {
                      return v(t).toString().substring(2);
                    },
                    "%G": function (t) {
                      return v(t);
                    },
                    "%H": function (t) {
                      return y(t.tm_hour, 2);
                    },
                    "%I": function (t) {
                      var n = t.tm_hour;
                      return 0 == n ? (n = 12) : n > 12 && (n -= 12), y(n, 2);
                    },
                    "%j": function (t) {
                      return y(
                        t.tm_mday +
                          ts(tc(t.tm_year + 1900) ? tl : tm, t.tm_mon - 1),
                        3,
                      );
                    },
                    "%m": function (t) {
                      return y(t.tm_mon + 1, 2);
                    },
                    "%M": function (t) {
                      return y(t.tm_min, 2);
                    },
                    "%n": function () {
                      return "\n";
                    },
                    "%p": function (t) {
                      return t.tm_hour >= 0 && t.tm_hour < 12 ? "AM" : "PM";
                    },
                    "%S": function (t) {
                      return y(t.tm_sec, 2);
                    },
                    "%t": function () {
                      return "	";
                    },
                    "%u": function (t) {
                      return t.tm_wday || 7;
                    },
                    "%U": function (t) {
                      var n = new Date(t.tm_year + 1900, 0, 1),
                        r = 0 === n.getDay() ? n : th(n, 7 - n.getDay()),
                        e = new Date(t.tm_year + 1900, t.tm_mon, t.tm_mday);
                      if (0 > _(r, e)) {
                        var a =
                          ts(tc(e.getFullYear()) ? tl : tm, e.getMonth() - 1) -
                          31;
                        return y(
                          Math.ceil((31 - r.getDate() + a + e.getDate()) / 7),
                          2,
                        );
                      }
                      return 0 === _(r, n) ? "01" : "00";
                    },
                    "%V": function (t) {
                      var n,
                        r = new Date(t.tm_year + 1900, 0, 4),
                        e = new Date(t.tm_year + 1901, 0, 4),
                        a = d(r),
                        u = d(e),
                        i = th(new Date(t.tm_year + 1900, 0, 1), t.tm_yday);
                      return 0 > _(i, a)
                        ? "53"
                        : 0 >= _(u, i)
                          ? "01"
                          : y(
                              Math.ceil(
                                (n =
                                  a.getFullYear() < t.tm_year + 1900
                                    ? t.tm_yday + 32 - a.getDate()
                                    : t.tm_yday + 1 - a.getDate()) / 7,
                              ),
                              2,
                            );
                    },
                    "%w": function (t) {
                      return t.tm_wday;
                    },
                    "%W": function (t) {
                      var n = new Date(t.tm_year, 0, 1),
                        r =
                          1 === n.getDay()
                            ? n
                            : th(n, 0 === n.getDay() ? 1 : 7 - n.getDay() + 1),
                        e = new Date(t.tm_year + 1900, t.tm_mon, t.tm_mday);
                      if (0 > _(r, e)) {
                        var a =
                          ts(tc(e.getFullYear()) ? tl : tm, e.getMonth() - 1) -
                          31;
                        return y(
                          Math.ceil((31 - r.getDate() + a + e.getDate()) / 7),
                          2,
                        );
                      }
                      return 0 === _(r, n) ? "01" : "00";
                    },
                    "%y": function (t) {
                      return (t.tm_year + 1900).toString().substring(2);
                    },
                    "%Y": function (t) {
                      return t.tm_year + 1900;
                    },
                    "%z": function (t) {
                      var n = t.tm_gmtoff;
                      return (
                        (n >= 0 ? "+" : "-") +
                        String(
                          "0000" +
                            (n =
                              ((n = Math.abs(n) / 60) / 60) * 100 + (n % 60)),
                        ).slice(-4)
                      );
                    },
                    "%Z": function (t) {
                      return t.tm_zone;
                    },
                    "%%": function () {
                      return "%";
                    },
                  };
                  for (var s in w)
                    f.indexOf(s) >= 0 &&
                      (f = f.replace(RegExp(s, "g"), w[s](o)));
                  var b = (function (t, n, r) {
                    var e = Array(
                        r > 0
                          ? r
                          : (function (t) {
                              for (var n = 0, r = 0; r < t.length; ++r) {
                                var e = t.charCodeAt(r);
                                e >= 55296 &&
                                  e <= 57343 &&
                                  (e =
                                    (65536 + ((1023 & e) << 10)) |
                                    (1023 & t.charCodeAt(++r))),
                                  e <= 127
                                    ? ++n
                                    : e <= 2047
                                      ? (n += 2)
                                      : e <= 65535
                                        ? (n += 3)
                                        : (n += 4);
                              }
                              return n;
                            })(t) + 1,
                      ),
                      a = T(t, e, 0, e.length);
                    return n && (e.length = a), e;
                  })(f, !1);
                  if (b.length > n) return 0;
                  return (a = b), (u = t), m.set(a, u), b.length - 1;
                })(t, n, r, e);
              },
            };
            !(function () {
              var t,
                n = { a: tg };
              function r(t, n) {
                var r = t.exports;
                (A.asm = r),
                  U((s = A.asm.x).buffer),
                  (w = A.asm.z),
                  !(function (t) {
                    if (
                      (G--,
                      A.monitorRunDependencies && A.monitorRunDependencies(G),
                      0 == G &&
                        (null !== N && (clearInterval(N), (N = null)), q))
                    ) {
                      var n = q;
                      (q = null), n();
                    }
                  })(0);
              }
              function e(t) {
                r(t.instance);
              }
              function a(t) {
                return (
                  f || "function" != typeof fetch
                    ? Promise.resolve().then(function () {
                        return K(X);
                      })
                    : fetch(X, { credentials: "same-origin" })
                        .then(function (t) {
                          if (!t.ok)
                            throw (
                              "failed to load wasm binary file at '" + X + "'"
                            );
                          return t.arrayBuffer();
                        })
                        .catch(function () {
                          return K(X);
                        })
                )
                  .then(function (t) {
                    return WebAssembly.instantiate(t, n);
                  })
                  .then(t, function (t) {
                    Y("failed to asynchronously prepare wasm: " + t), J(t);
                  });
              }
              (t = 0),
                G++,
                A.monitorRunDependencies && A.monitorRunDependencies(G);
              if (A.instantiateWasm)
                try {
                  return A.instantiateWasm(n, r);
                } catch (t) {
                  return (
                    Y(
                      "Module.instantiateWasm callback failed with error: " + t,
                    ),
                    !1
                  );
                }
              (f ||
              "function" != typeof WebAssembly.instantiateStreaming ||
              V(X) ||
              "function" != typeof fetch
                ? a(e)
                : fetch(X, { credentials: "same-origin" }).then(function (t) {
                    return WebAssembly.instantiateStreaming(t, n).then(
                      e,
                      function (t) {
                        return (
                          Y("wasm streaming compile failed: " + t),
                          Y("falling back to ArrayBuffer instantiation"),
                          a(e)
                        );
                      },
                    );
                  })
              ).catch(u);
            })();
            var ty = (A.___wasm_call_ctors = function () {
                return (ty = A.___wasm_call_ctors = A.asm.y).apply(
                  null,
                  arguments,
                );
              }),
              tp = (A._malloc = function () {
                return (tp = A._malloc = A.asm.A).apply(null, arguments);
              }),
              t_ = (A._lottie_create = function () {
                return (A._lottie_create = A.asm.B).apply(null, arguments);
              }),
              td = (A._lottie_destroy = function () {
                return (A._lottie_destroy = A.asm.C).apply(null, arguments);
              }),
              tv = (A._lottie_draw_into_rgba = function () {
                return (A._lottie_draw_into_rgba = A.asm.D).apply(
                  null,
                  arguments,
                );
              }),
              tw = (A._lottie_draw_into_bgra = function () {
                return (A._lottie_draw_into_bgra = A.asm.E).apply(
                  null,
                  arguments,
                );
              }),
              tb = (A._lottie_frame_rate = function () {
                return (A._lottie_frame_rate = A.asm.F).apply(null, arguments);
              }),
              tA = (A._lottie_frame_count = function () {
                return (A._lottie_frame_count = A.asm.G).apply(null, arguments);
              }),
              tD = (A._memory_create = function () {
                return (A._memory_create = A.asm.H).apply(null, arguments);
              }),
              tM = (A._memory_destroy = function () {
                return (A._memory_destroy = A.asm.I).apply(null, arguments);
              }),
              tS = (A.stackSave = function () {
                return (tS = A.stackSave = A.asm.J).apply(null, arguments);
              }),
              tF = (A.stackRestore = function () {
                return (tF = A.stackRestore = A.asm.K).apply(null, arguments);
              }),
              tR = (A.stackAlloc = function () {
                return (tR = A.stackAlloc = A.asm.L).apply(null, arguments);
              }),
              tE = (A._setThrew = function () {
                return (tE = A._setThrew = A.asm.M).apply(null, arguments);
              });
            function tY(t) {
              if (((t = t || M), !(G > 0)))
                !(function () {
                  if (A.preRun)
                    for (
                      "function" == typeof A.preRun && (A.preRun = [A.preRun]);
                      A.preRun.length;

                    )
                      (function (t) {
                        j.unshift(t);
                      })(A.preRun.shift());
                  Z(j);
                })(),
                  !(G > 0) &&
                    (A.setStatus
                      ? (A.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            A.setStatus("");
                          }, 1),
                            n();
                        }, 1))
                      : n());
              function n() {
                if (!b)
                  (b = !0),
                    (A.calledRun = !0),
                    !C &&
                      (Z(B),
                      Z(z),
                      a(A),
                      A.onRuntimeInitialized && A.onRuntimeInitialized(),
                      !(function () {
                        if (A.postRun)
                          for (
                            "function" == typeof A.postRun &&
                            (A.postRun = [A.postRun]);
                            A.postRun.length;

                          )
                            (function (t) {
                              L.unshift(t);
                            })(A.postRun.shift());
                        Z(L);
                      })());
              }
            }
            if (
              ((A.cwrap = function (t, n, r, e) {
                var a = (r = r || []).every(function (t) {
                  return "number" === t;
                });
                return "string" !== n && a && !e
                  ? I(t)
                  : function () {
                      return (function (t, n, r, e, a) {
                        var u,
                          i = {
                            string: function (t) {
                              var n = 0;
                              if (null != t && 0 !== t) {
                                var r = (t.length << 2) + 1;
                                (function (t, n, r) {
                                  T(t, h, n, r);
                                })(t, (n = tR(r)), r);
                              }
                              return n;
                            },
                            array: function (t) {
                              var n = tR(t.length);
                              return (
                                (function (t, n) {
                                  m.set(t, n);
                                })(t, n),
                                n
                              );
                            },
                          },
                          o = I(t),
                          f = [],
                          c = 0;
                        if (e)
                          for (var s = 0; s < e.length; s++) {
                            var l = i[r[s]];
                            l
                              ? (0 === c && (c = tS()), (f[s] = l(e[s])))
                              : (f[s] = e[s]);
                          }
                        var g = o.apply(null, f);
                        return (
                          (u = g),
                          (g =
                            "string" === n ? P(u) : "boolean" === n ? !!u : u),
                          0 !== c && tF(c),
                          g
                        );
                      })(t, n, r, arguments, 0);
                    };
              }),
              (q = function t() {
                !b && tY(), !b && (q = t);
              }),
              (A.run = tY),
              A.preInit)
            )
              for (
                "function" == typeof A.preInit && (A.preInit = [A.preInit]);
                A.preInit.length > 0;

              )
                A.preInit.pop()();
            return tY(), t.ready;
          });
      n.default = a;
    },
  },
]);
//# sourceMappingURL=af928c3cadff5e7b3f4c.js.map
