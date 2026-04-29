(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51253"],
  {
    111956(t, i, n) {
      var r = n(646344),
        e = n(714163),
        o = n(681447),
        u = Math.max,
        a = Math.min;
      t.exports = function (t, i, n) {
        var f,
          c,
          s,
          p,
          v,
          d,
          l = 0,
          m = !1,
          h = !1,
          x = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");
        function y(i) {
          var n = f,
            r = c;
          return (f = c = void 0), (l = i), (p = t.apply(r, n));
        }
        function T(t) {
          var n = t - d,
            r = t - l;
          return void 0 === d || n >= i || n < 0 || (h && r >= s);
        }
        function b() {
          var t,
            n,
            r,
            o = e();
          if (T(o)) return g(o);
          v = setTimeout(
            b,
            ((t = o - d), (n = o - l), (r = i - t), h ? a(r, s - n) : r),
          );
        }
        function g(t) {
          return ((v = void 0), x && f) ? y(t) : ((f = c = void 0), p);
        }
        function k() {
          var t,
            n = e(),
            r = T(n);
          if (((f = arguments), (c = this), (d = n), r)) {
            if (void 0 === v)
              return (l = t = d), (v = setTimeout(b, i)), m ? y(t) : p;
            if (h) return clearTimeout(v), (v = setTimeout(b, i)), y(d);
          }
          return void 0 === v && (v = setTimeout(b, i)), p;
        }
        return (
          (i = o(i) || 0),
          r(n) &&
            ((m = !!n.leading),
            (s = (h = "maxWait" in n) ? u(o(n.maxWait) || 0, i) : s),
            (x = "trailing" in n ? !!n.trailing : x)),
          (k.cancel = function () {
            void 0 !== v && clearTimeout(v), (l = 0), (f = d = c = v = void 0);
          }),
          (k.flush = function () {
            return void 0 === v ? p : g(e());
          }),
          k
        );
      };
    },
    646344(t) {
      t.exports = function (t) {
        var i = typeof t;
        return null != t && ("object" == i || "function" == i);
      };
    },
    714163(t, i, n) {
      var r = n(237050);
      t.exports = function () {
        return r.Date.now();
      };
    },
    681447(t, i, n) {
      var r = n(646344),
        e = n(305327),
        o = 0 / 0,
        u = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (e(t)) return o;
        if (r(t)) {
          var i = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = r(i) ? i + "" : i;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(u, "");
        var n = f.test(t);
        return n || c.test(t) ? s(t.slice(2), n ? 2 : 8) : a.test(t) ? o : +t;
      };
    },
  },
]);
//# sourceMappingURL=51253.de0f06e9ef4d1827.js.map
