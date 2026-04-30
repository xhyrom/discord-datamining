"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["530"],
  {
    85526(r, t) {
      (t.byteLength = function (r) {
        var t = c(r),
          e = t[0],
          n = t[1];
        return ((e + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (r) {
          var t,
            e,
            a = c(r),
            h = a[0],
            u = a[1],
            i = new o(((h + u) * 3) / 4 - u),
            f = 0,
            A = u > 0 ? h - 4 : h;
          for (e = 0; e < A; e += 4)
            (t =
              (n[r.charCodeAt(e)] << 18) |
              (n[r.charCodeAt(e + 1)] << 12) |
              (n[r.charCodeAt(e + 2)] << 6) |
              n[r.charCodeAt(e + 3)]),
              (i[f++] = (t >> 16) & 255),
              (i[f++] = (t >> 8) & 255),
              (i[f++] = 255 & t);
          return (
            2 === u &&
              ((t = (n[r.charCodeAt(e)] << 2) | (n[r.charCodeAt(e + 1)] >> 4)),
              (i[f++] = 255 & t)),
            1 === u &&
              ((t =
                (n[r.charCodeAt(e)] << 10) |
                (n[r.charCodeAt(e + 1)] << 4) |
                (n[r.charCodeAt(e + 2)] >> 2)),
              (i[f++] = (t >> 8) & 255),
              (i[f++] = 255 & t)),
            i
          );
        }),
        (t.fromByteArray = function (r) {
          for (
            var t, n = r.length, o = n % 3, a = [], h = 0, u = n - o;
            h < u;
            h += 16383
          )
            a.push(
              (function (r, t, n) {
                for (var o, a = [], h = t; h < n; h += 3)
                  (o =
                    ((r[h] << 16) & 0xff0000) +
                    ((r[h + 1] << 8) & 65280) +
                    (255 & r[h + 2])),
                    a.push(
                      e[(o >> 18) & 63] +
                        e[(o >> 12) & 63] +
                        e[(o >> 6) & 63] +
                        e[63 & o],
                    );
                return a.join("");
              })(r, h, h + 16383 > u ? u : h + 16383),
            );
          return (
            1 === o
              ? a.push(e[(t = r[n - 1]) >> 2] + e[(t << 4) & 63] + "==")
              : 2 === o &&
                a.push(
                  e[(t = (r[n - 2] << 8) + r[n - 1]) >> 10] +
                    e[(t >> 4) & 63] +
                    e[(t << 2) & 63] +
                    "=",
                ),
            a.join("")
          );
        });
      for (
        var e = [],
          n = [],
          o = "u" > typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          h = 0,
          u = a.length;
        h < u;
        ++h
      )
        (e[h] = a[h]), (n[a.charCodeAt(h)] = h);
      function c(r) {
        var t = r.length;
        if (t % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var e = r.indexOf("=");
        -1 === e && (e = t);
        var n = e === t ? 0 : 4 - (e % 4);
        return [e, n];
      }
      (n[45] = 62), (n[95] = 63);
    },
    827762(r, t) {
      (t.byteLength = function (r) {
        var t = c(r),
          e = t[0],
          n = t[1];
        return ((e + n) * 3) / 4 - n;
      }),
        (t.toByteArray = function (r) {
          var t,
            e,
            a = c(r),
            h = a[0],
            u = a[1],
            i = new o(((h + u) * 3) / 4 - u),
            f = 0,
            A = u > 0 ? h - 4 : h;
          for (e = 0; e < A; e += 4)
            (t =
              (n[r.charCodeAt(e)] << 18) |
              (n[r.charCodeAt(e + 1)] << 12) |
              (n[r.charCodeAt(e + 2)] << 6) |
              n[r.charCodeAt(e + 3)]),
              (i[f++] = (t >> 16) & 255),
              (i[f++] = (t >> 8) & 255),
              (i[f++] = 255 & t);
          return (
            2 === u &&
              ((t = (n[r.charCodeAt(e)] << 2) | (n[r.charCodeAt(e + 1)] >> 4)),
              (i[f++] = 255 & t)),
            1 === u &&
              ((t =
                (n[r.charCodeAt(e)] << 10) |
                (n[r.charCodeAt(e + 1)] << 4) |
                (n[r.charCodeAt(e + 2)] >> 2)),
              (i[f++] = (t >> 8) & 255),
              (i[f++] = 255 & t)),
            i
          );
        }),
        (t.fromByteArray = function (r) {
          for (
            var t, n = r.length, o = n % 3, a = [], h = 0, u = n - o;
            h < u;
            h += 16383
          )
            a.push(
              (function (r, t, n) {
                for (var o, a = [], h = t; h < n; h += 3)
                  (o =
                    ((r[h] << 16) & 0xff0000) +
                    ((r[h + 1] << 8) & 65280) +
                    (255 & r[h + 2])),
                    a.push(
                      e[(o >> 18) & 63] +
                        e[(o >> 12) & 63] +
                        e[(o >> 6) & 63] +
                        e[63 & o],
                    );
                return a.join("");
              })(r, h, h + 16383 > u ? u : h + 16383),
            );
          return (
            1 === o
              ? a.push(e[(t = r[n - 1]) >> 2] + e[(t << 4) & 63] + "==")
              : 2 === o &&
                a.push(
                  e[(t = (r[n - 2] << 8) + r[n - 1]) >> 10] +
                    e[(t >> 4) & 63] +
                    e[(t << 2) & 63] +
                    "=",
                ),
            a.join("")
          );
        });
      for (
        var e = [],
          n = [],
          o = "u" > typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          h = 0,
          u = a.length;
        h < u;
        ++h
      )
        (e[h] = a[h]), (n[a.charCodeAt(h)] = h);
      function c(r) {
        var t = r.length;
        if (t % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var e = r.indexOf("=");
        -1 === e && (e = t);
        var n = e === t ? 0 : 4 - (e % 4);
        return [e, n];
      }
      (n[45] = 62), (n[95] = 63);
    },
  },
]);
//# sourceMappingURL=530.4637e453af29e025.js.map
