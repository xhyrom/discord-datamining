"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63197"],
  {
    762503(r, t, e) {
      var n = e(406208),
        o = TypeError;
      r.exports = function (r, t) {
        if (!delete r[t])
          throw new o("Cannot delete property " + n(t) + " of " + n(r));
      };
    },
    667532(r, t, e) {
      var n = e(557939),
        o = e(250594),
        i = e(503199),
        a = e(496538),
        f = e(762503),
        p = e(732376);
      n(
        {
          target: "Array",
          proto: !0,
          arity: 1,
          forced:
            1 !== [].unshift(0) ||
            !(function () {
              try {
                Object.defineProperty([], "length", { writable: !1 }).unshift();
              } catch (r) {
                return r instanceof TypeError;
              }
            })(),
        },
        {
          unshift: function (r) {
            var t = o(this),
              e = i(t),
              n = arguments.length;
            if (n) {
              p(e + n);
              for (var c = e; c--; ) {
                var h = c + n;
                c in t ? (t[h] = t[c]) : f(t, h);
              }
              for (var s = 0; s < n; s++) t[s] = arguments[s];
            }
            return a(t, e + n);
          },
        },
      );
    },
  },
]);
//# sourceMappingURL=63197.019698857682c5db.js.map
