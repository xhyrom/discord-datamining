"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33820"],
  {
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
            o = c(r),
            h = o[0],
            u = o[1],
            i = new a(((h + u) * 3) / 4 - u),
            d = 0,
            f = u > 0 ? h - 4 : h;
          for (e = 0; e < f; e += 4)
            (t =
              (n[r.charCodeAt(e)] << 18) |
              (n[r.charCodeAt(e + 1)] << 12) |
              (n[r.charCodeAt(e + 2)] << 6) |
              n[r.charCodeAt(e + 3)]),
              (i[d++] = (t >> 16) & 255),
              (i[d++] = (t >> 8) & 255),
              (i[d++] = 255 & t);
          return (
            2 === u &&
              ((t = (n[r.charCodeAt(e)] << 2) | (n[r.charCodeAt(e + 1)] >> 4)),
              (i[d++] = 255 & t)),
            1 === u &&
              ((t =
                (n[r.charCodeAt(e)] << 10) |
                (n[r.charCodeAt(e + 1)] << 4) |
                (n[r.charCodeAt(e + 2)] >> 2)),
              (i[d++] = (t >> 8) & 255),
              (i[d++] = 255 & t)),
            i
          );
        }),
        (t.fromByteArray = function (r) {
          for (
            var t, n = r.length, a = n % 3, o = [], h = 0, u = n - a;
            h < u;
            h += 16383
          )
            o.push(
              (function (r, t, n) {
                for (var a, o = [], h = t; h < n; h += 3)
                  (a =
                    ((r[h] << 16) & 0xff0000) +
                    ((r[h + 1] << 8) & 65280) +
                    (255 & r[h + 2])),
                    o.push(
                      e[(a >> 18) & 63] +
                        e[(a >> 12) & 63] +
                        e[(a >> 6) & 63] +
                        e[63 & a],
                    );
                return o.join("");
              })(r, h, h + 16383 > u ? u : h + 16383),
            );
          return (
            1 === a
              ? o.push(e[(t = r[n - 1]) >> 2] + e[(t << 4) & 63] + "==")
              : 2 === a &&
                o.push(
                  e[(t = (r[n - 2] << 8) + r[n - 1]) >> 10] +
                    e[(t >> 4) & 63] +
                    e[(t << 2) & 63] +
                    "=",
                ),
            o.join("")
          );
        });
      for (
        var e = [],
          n = [],
          a = "u" > typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          h = 0,
          u = o.length;
        h < u;
        ++h
      )
        (e[h] = o[h]), (n[o.charCodeAt(h)] = h);
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
//# sourceMappingURL=33820.21262a4233c10942.js.map
