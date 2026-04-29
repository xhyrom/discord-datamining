"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74086"],
  {
    627(e) {
      var r = TypeError;
      e.exports = function (e, a) {
        if (e < a) throw new r("Not enough arguments");
        return e;
      };
    },
    323874(e, r, a) {
      var t = a(693655),
        n = a(410323),
        i = a(304880),
        o = a(627),
        h = URLSearchParams,
        s = h.prototype,
        u = n(s.append),
        v = n(s.delete),
        f = n(s.forEach),
        p = n([].push),
        c = new h("a=1&a=2&b=3");
      c.delete("a", 1),
        c.delete("b", void 0),
        c + "" != "a=2" &&
          t(
            s,
            "delete",
            function (e) {
              var r,
                a = arguments.length,
                t = a < 2 ? void 0 : arguments[1];
              if (a && void 0 === t) return v(this, e);
              var n = [];
              f(this, function (e, r) {
                p(n, { key: r, value: e });
              }),
                o(a, 1);
              for (
                var h = i(e), s = i(t), c = 0, l = 0, d = !1, g = n.length;
                c < g;

              )
                (r = n[c++]),
                  d || r.key === h ? ((d = !0), v(this, r.key)) : l++;
              for (; l < g; )
                ((r = n[l++]).key !== h || r.value !== s) &&
                  u(this, r.key, r.value);
            },
            { enumerable: !0, unsafe: !0 },
          );
    },
    14289(e, r, a) {
      var t = a(693655),
        n = a(410323),
        i = a(304880),
        o = a(627),
        h = URLSearchParams,
        s = h.prototype,
        u = n(s.getAll),
        v = n(s.has),
        f = new h("a=1");
      (f.has("a", 2) || !f.has("a", void 0)) &&
        t(
          s,
          "has",
          function (e) {
            var r = arguments.length,
              a = r < 2 ? void 0 : arguments[1];
            if (r && void 0 === a) return v(this, e);
            var t = u(this, e);
            o(r, 1);
            for (var n = i(a), h = 0; h < t.length; )
              if (t[h++] === n) return !0;
            return !1;
          },
          { enumerable: !0, unsafe: !0 },
        );
    },
    35956(e, r, a) {
      var t = a(257943),
        n = a(410323),
        i = a(485155),
        o = URLSearchParams.prototype,
        h = n(o.forEach);
      !t ||
        "size" in o ||
        i(o, "size", {
          get: function () {
            var e = 0;
            return (
              h(this, function () {
                e++;
              }),
              e
            );
          },
          configurable: !0,
          enumerable: !0,
        });
    },
  },
]);
//# sourceMappingURL=74086.879087d19936aab9.js.map
