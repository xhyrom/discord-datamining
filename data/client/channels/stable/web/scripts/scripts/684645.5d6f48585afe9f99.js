(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [684645],
  {
    653922(e, t, n) {
      "use strict";
      var r = n(998280),
        i = n(531651),
        s = n(618027);
      n.d(
        t,
        {},
        {
          A: function (e, t) {
            (0, s.A)(2, arguments);
            var n = (0, r.A)(t);
            return (0, i.A)(e, 1e3 * n);
          },
        },
      );
    },
    416248(e, t, n) {
      var r = n(689582),
        i = n(723891);
      e.exports = function (e) {
        return i(r(e));
      };
    },
    963100(e, t, n) {
      var r = n(20624),
        i = n(232520),
        s = n(186320),
        o = n(24011),
        a = n(26352),
        u = n(9556);
      e.exports = function (e, t, n, l) {
        var c = -1,
          f = i,
          d = !0,
          h = e.length,
          p = [],
          m = t.length;
        if (!h) return p;
        n && (t = o(t, a(n))),
          l
            ? ((f = s), (d = !1))
            : t.length >= 200 && ((f = u), (d = !1), (t = new r(t)));
        e: for (; ++c < h; ) {
          var g = e[c],
            v = null == n ? g : n(g);
          if (((g = l || 0 !== g ? g : 0), d && v == v)) {
            for (var y = m; y--; ) if (t[y] === v) continue e;
            p.push(g);
          } else f(t, v, l) || p.push(g);
        }
        return p;
      };
    },
    58902(e, t, n) {
      var r = n(723891),
        i = n(731221);
      e.exports = function (e) {
        return r(i(e));
      };
    },
    10837(e, t, n) {
      var r = n(24011);
      e.exports = function (e, t) {
        return r(t, function (t) {
          return e[t];
        });
      };
    },
    723891(e, t, n) {
      var r = n(515304);
      e.exports = function (e, t) {
        var n = -1,
          i = e.length,
          s = i - 1;
        for (t = void 0 === t ? i : t; ++n < t; ) {
          var o = r(n, s),
            a = e[o];
          (e[o] = e[n]), (e[n] = a);
        }
        return (e.length = t), e;
      };
    },
    649852(e, t, n) {
      var r = n(980320),
        i = n(403819),
        s = n(867167),
        o = Math.max,
        a = Math.min;
      e.exports = function (e, t, n) {
        var u,
          l,
          c,
          f,
          d,
          h,
          p = 0,
          m = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function y(t) {
          var n = u,
            r = l;
          return (u = l = void 0), (p = t), (f = e.apply(r, n));
        }
        function _(e) {
          var n = e - h,
            r = e - p;
          return void 0 === h || n >= t || n < 0 || (g && r >= c);
        }
        function w() {
          var e,
            n,
            r,
            s = i();
          if (_(s)) return b(s);
          d = setTimeout(
            w,
            ((e = s - h), (n = s - p), (r = t - e), g ? a(r, c - n) : r),
          );
        }
        function b(e) {
          return ((d = void 0), v && u) ? y(e) : ((u = l = void 0), f);
        }
        function z() {
          var e,
            n = i(),
            r = _(n);
          if (((u = arguments), (l = this), (h = n), r)) {
            if (void 0 === d)
              return (p = e = h), (d = setTimeout(w, t)), m ? y(e) : f;
            if (g) return clearTimeout(d), (d = setTimeout(w, t)), y(h);
          }
          return void 0 === d && (d = setTimeout(w, t)), f;
        }
        return (
          (t = s(t) || 0),
          r(n) &&
            ((m = !!n.leading),
            (c = (g = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : c),
            (v = "trailing" in n ? !!n.trailing : v)),
          (z.cancel = function () {
            void 0 !== d && clearTimeout(d), (p = 0), (u = h = l = d = void 0);
          }),
          (z.flush = function () {
            return void 0 === d ? f : b(i());
          }),
          z
        );
      };
    },
    466204(e, t, n) {
      var r = n(963100),
        i = n(374421),
        s = n(440909),
        o = n(797674);
      e.exports = s(function (e, t) {
        return o(e) ? r(e, i(t, 1, o, !0)) : [];
      });
    },
    797674(e, t, n) {
      var r = n(667349),
        i = n(326487);
      e.exports = function (e) {
        return i(e) && r(e);
      };
    },
    199510(e, t, n) {
      var r = n(416248),
        i = n(58902),
        s = n(377482);
      e.exports = function (e) {
        return (s(e) ? r : i)(e);
      };
    },
    64015(e, t, n) {
      var r = n(649852),
        i = n(980320);
      e.exports = function (e, t, n) {
        var s = !0,
          o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          i(n) &&
            ((s = "leading" in n ? !!n.leading : s),
            (o = "trailing" in n ? !!n.trailing : o)),
          r(e, t, { leading: s, maxWait: t, trailing: o })
        );
      };
    },
    731221(e, t, n) {
      var r = n(10837),
        i = n(473951);
      e.exports = function (e) {
        return null == e ? [] : r(e, i(e));
      };
    },
    162929(e, t, n) {
      "use strict";
      var r,
        i,
        s = "0123456789abcdef",
        o =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        a =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        u = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        l = !0,
        c = "[DecimalError] ",
        f = c + "Invalid argument: ",
        d = c + "Precision limit exceeded",
        h = c + "crypto unavailable",
        p = "[object Decimal]",
        m = Math.floor,
        g = Math.pow,
        v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        y = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        _ = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        w = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        b = o.length - 1,
        z = a.length - 1,
        k = { toStringTag: p };
      function O(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          s = "",
          o = e[0];
        if (i > 0) {
          for (s += o, t = 1; t < i; t++)
            (n = 7 - (r = e[t] + "").length) && (s += N(n)), (s += r);
          (n = 7 - (r = (o = e[t]) + "").length) && (s += N(n));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return s + o;
      }
      function $(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(f + e);
      }
      function x(e, t, n, r) {
        var i, s, o, a;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = g(10, 7 - t)),
          (a = e[i] % s | 0),
          null == r
            ? t < 3
              ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                (o =
                  (n < 4 && 99999 == a) ||
                  (n > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (o =
                  (((n < 4 && a + 1 == s) || (n > 3 && a + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == g(10, t - 2) - 1) ||
                  ((a == s / 2 || 0 == a) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (a = (a / 1e3) | 0)
                  : 1 == t
                    ? (a = (a / 100) | 0)
                    : 2 == t && (a = (a / 10) | 0),
                (o = ((r || n < 4) && 9999 == a) || (!r && n > 3 && 4999 == a)))
              : (o =
                  (((r || n < 4) && a + 1 == s) ||
                    (!r && n > 3 && a + 1 == s / 2)) &&
                  ((e[i + 1] / s / 1e3) | 0) == g(10, t - 3) - 1),
          o
        );
      }
      function E(e, t, n) {
        for (var r, i, o = [0], a = 0, u = e.length; a < u; ) {
          for (i = o.length; i--; ) o[i] *= t;
          for (o[0] += s.indexOf(e.charAt(a++)), r = 0; r < o.length; r++)
            o[r] > n - 1 &&
              (void 0 === o[r + 1] && (o[r + 1] = 0),
              (o[r + 1] += (o[r] / n) | 0),
              (o[r] %= n));
        }
        return o.reverse();
      }
      (k.absoluteValue = k.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), P(e);
        }),
        (k.ceil = function () {
          return P(new this.constructor(this), this.e + 1, 2);
        }),
        (k.clampedTo = k.clamp =
          function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(0 / 0);
            if (e.gt(t)) throw Error(f + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
          }),
        (k.comparedTo = k.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              s = this.d,
              o = (e = new this.constructor(e)).d,
              a = this.s,
              u = e.s;
            if (!s || !o)
              return a && u
                ? a !== u
                  ? a
                  : s === o
                    ? 0
                    : !s ^ (a < 0)
                      ? 1
                      : -1
                : 0 / 0;
            if (!s[0] || !o[0]) return s[0] ? a : o[0] ? -u : 0;
            if (a !== u) return a;
            if (this.e !== e.e) return (this.e > e.e) ^ (a < 0) ? 1 : -1;
            for (
              r = s.length, t = 0, n = r < (i = o.length) ? r : i;
              t < n;
              ++t
            )
              if (s[t] !== o[t]) return (s[t] > o[t]) ^ (a < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (a < 0) ? 1 : -1;
          }),
        (k.cosine = k.cos =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.d
              ? n.d[0]
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n, r, i;
                    if (t.isZero()) return t;
                    (r = t.d.length) < 32
                      ? (i = (1 / q(4, (n = Math.ceil(r / 3)))).toString())
                      : ((n = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += n),
                      (t = L(e, 1, t.times(i), new e(1)));
                    for (var s = n; s--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= n), t;
                  })(r, W(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  P(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                : new r(1)
              : new r(0 / 0);
          }),
        (k.cubeRoot = k.cbrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              c,
              f = this.constructor;
            if (!this.isFinite() || this.isZero()) return new f(this);
            for (
              l = !1,
                (s = this.s * g(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(s)
                  ? (r = new f(s.toString()))
                  : ((n = O(this.d)),
                    (s = ((e = this.e) - n.length + 1) % 3) &&
                      (n += 1 == s || -2 == s ? "0" : "00"),
                    (s = g(n, 1 / 3)),
                    (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((r = new f(
                      (n =
                        1 / 0 == s
                          ? "5e" + e
                          : (n = s.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1,
                            ) + e),
                    )).s = this.s)),
                o = (e = f.precision) + 3;
              ;

            )
              if (
                ((r = S(
                  (c = (u = (a = r).times(a).times(a)).plus(this))
                    .plus(this)
                    .times(a),
                  c.plus(u),
                  o + 2,
                  1,
                )),
                O(a.d).slice(0, o) === (n = O(r.d)).slice(0, o))
              ) {
                if (
                  "9999" != (n = n.slice(o - 3, o + 1)) &&
                  (i || "4999" != n)
                ) {
                  (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                    (P(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                  break;
                }
                if (!i && (P(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                  r = a;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (l = !0), P(r, e, f.rounding, t);
          }),
        (k.decimalPlaces = k.dp =
          function () {
            var e,
              t = this.d,
              n = 0 / 0;
            if (t) {
              if (((n = ((e = t.length - 1) - m(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) n--;
              n < 0 && (n = 0);
            }
            return n;
          }),
        (k.dividedBy = k.div =
          function (e) {
            return S(this, new this.constructor(e));
          }),
        (k.dividedToIntegerBy = k.divToInt =
          function (e) {
            var t = this.constructor;
            return P(S(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (k.equals = k.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (k.floor = function () {
          return P(new this.constructor(this), this.e + 1, 3);
        }),
        (k.greaterThan = k.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (k.greaterThanOrEqualTo = k.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (k.hyperbolicCosine = k.cosh =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s = this,
              o = s.constructor,
              a = new o(1);
            if (!s.isFinite()) return new o(s.s ? 1 / 0 : 0 / 0);
            if (s.isZero()) return a;
            (n = o.precision),
              (r = o.rounding),
              (o.precision = n + Math.max(s.e, s.sd()) + 4),
              (o.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / q(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (s = L(o, 1, s.times(t), new o(1), !0));
            for (var u, l = e, c = new o(8); l--; )
              (u = s.times(s)), (s = a.minus(u.times(c.minus(u.times(c)))));
            return P(s, (o.precision = n), (o.rounding = r), !0);
          }),
        (k.hyperbolicSine = k.sinh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (n = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (r = i.d.length) < 3)
            )
              i = L(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                (i = L(s, 2, (i = i.times(1 / q(5, e))), i, !0));
              for (var o, a = new s(5), u = new s(16), l = new s(20); e--; )
                (o = i.times(i)),
                  (i = i.times(a.plus(o.times(u.times(o).plus(l)))));
            }
            return (s.precision = t), (s.rounding = n), P(i, t, n, !0);
          }),
        (k.hyperbolicTangent = k.tanh =
          function () {
            var e,
              t,
              n = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new n(this)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 7),
                  (n.rounding = 1),
                  S(
                    this.sinh(),
                    this.cosh(),
                    (n.precision = e),
                    (n.rounding = t),
                  ))
              : new n(this.s);
          }),
        (k.inverseCosine = k.acos =
          function () {
            var e = this,
              t = e.constructor,
              n = e.abs().cmp(1),
              r = t.precision,
              i = t.rounding;
            return -1 !== n
              ? 0 === n
                ? e.isNeg()
                  ? T(t, r, i)
                  : new t(0)
                : new t(0 / 0)
              : e.isZero()
                ? T(t, r + 4, i).times(0.5)
                : ((t.precision = r + 6),
                  (t.rounding = 1),
                  (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                  (t.precision = r),
                  (t.rounding = i),
                  e.times(2));
          }),
        (k.inverseHyperbolicCosine = k.acosh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.lte(1)
              ? new r(n.eq(1) ? 0 : 0 / 0)
              : n.isFinite()
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                  (r.rounding = 1),
                  (l = !1),
                  (n = n.times(n).minus(1).sqrt().plus(n)),
                  (l = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln())
                : new r(n);
          }),
        (k.inverseHyperbolicSine = k.asinh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return !n.isFinite() || n.isZero()
              ? new r(n)
              : ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                (r.rounding = 1),
                (l = !1),
                (n = n.times(n).plus(1).sqrt().plus(n)),
                (l = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln());
          }),
        (k.inverseHyperbolicTangent = k.atanh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : 0 / 0)
                : ((e = s.precision),
                    (t = s.rounding),
                    Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                  ? P(new s(i), e, t, !0)
                  : ((s.precision = n = r - i.e),
                    (i = S(i.plus(1), new s(1).minus(i), n + e, 1)),
                    (s.precision = e + 4),
                    (s.rounding = 1),
                    (i = i.ln()),
                    (s.precision = e),
                    (s.rounding = t),
                    i.times(0.5))
              : new s(0 / 0);
          }),
        (k.inverseSine = k.asin =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                  (n = s.precision),
                  (r = s.rounding),
                  -1 !== t)
                ? 0 === t
                  ? (((e = T(s, n + 4, r).times(0.5)).s = i.s), e)
                  : new s(0 / 0)
                : ((s.precision = n + 6),
                  (s.rounding = 1),
                  (i = i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                  (s.precision = n),
                  (s.rounding = r),
                  i.times(2));
          }),
        (k.inverseTangent = k.atan =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              c = this,
              f = c.constructor,
              d = f.precision,
              h = f.rounding;
            if (c.isFinite()) {
              if (c.isZero()) return new f(c);
              else if (c.abs().eq(1) && d + 4 <= z)
                return ((o = T(f, d + 4, h).times(0.25)).s = c.s), o;
            } else {
              if (!c.s) return new f(0 / 0);
              if (d + 4 <= z)
                return ((o = T(f, d + 4, h).times(0.5)).s = c.s), o;
            }
            for (
              f.precision = a = d + 10,
                f.rounding = 1,
                e = n = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (
              l = !1,
                t = Math.ceil(a / 7),
                r = 1,
                u = c.times(c),
                o = new f(c),
                i = c;
              -1 !== e;

            )
              if (
                ((i = i.times(u)),
                (s = o.minus(i.div((r += 2)))),
                (i = i.times(u)),
                void 0 !== (o = s.plus(i.div((r += 2)))).d[t])
              )
                for (e = t; o.d[e] === s.d[e] && e--; );
            return (
              n && (o = o.times(2 << (n - 1))),
              (l = !0),
              P(o, (f.precision = d), (f.rounding = h), !0)
            );
          }),
        (k.isFinite = function () {
          return !!this.d;
        }),
        (k.isInteger = k.isInt =
          function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
          }),
        (k.isNaN = function () {
          return !this.s;
        }),
        (k.isNegative = k.isNeg =
          function () {
            return this.s < 0;
          }),
        (k.isPositive = k.isPos =
          function () {
            return this.s > 0;
          }),
        (k.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (k.lessThan = k.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (k.lessThanOrEqualTo = k.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (k.logarithm = k.log =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u = this.constructor,
              c = u.precision,
              f = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
              if (((n = (e = new u(e)).d), e.s < 0 || !n || !n[0] || e.eq(1)))
                return new u(0 / 0);
              t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
              return new u(
                n && !n[0] ? -1 / 0 : 1 != this.s ? 0 / 0 : n ? 0 : 1 / 0,
              );
            if (t)
              if (n.length > 1) i = !0;
              else {
                for (r = n[0]; r % 10 == 0; ) r /= 10;
                i = 1 !== r;
              }
            if (
              ((l = !1),
              x(
                (a = S(
                  (s = U(this, (o = c + 5))),
                  t ? A(u, o + 10) : U(e, o),
                  o,
                  1,
                )).d,
                (r = c),
                f,
              ))
            )
              do
                if (
                  ((o += 10),
                  (a = S((s = U(this, o)), t ? A(u, o + 10) : U(e, o), o, 1)),
                  !i)
                ) {
                  +O(a.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                    (a = P(a, c + 1, 0));
                  break;
                }
              while (x(a.d, (r += 10), f));
            return (l = !0), P(a, c, f);
          }),
        (k.minus = k.sub =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              c,
              f,
              d,
              h,
              p = this.constructor;
            if (((e = new p(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new p(e.d || this.s !== e.s ? this : 0 / 0))
                  : (e = new p(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((c = this.d),
              (h = e.d),
              (a = p.precision),
              (u = p.rounding),
              !c[0] || !h[0])
            ) {
              if (h[0]) e.s = -e.s;
              else {
                if (!c[0]) return new p(3 === u ? -0 : 0);
                e = new p(this);
              }
              return l ? P(e, a, u) : e;
            }
            if (
              ((n = m(e.e / 7)),
              (f = m(this.e / 7)),
              (c = c.slice()),
              (s = f - n))
            ) {
              for (
                (d = s < 0)
                  ? ((t = c), (s = -s), (o = h.length))
                  : ((t = h), (n = f), (o = c.length)),
                  s > (r = Math.max(Math.ceil(a / 7), o) + 2) &&
                    ((s = r), (t.length = 1)),
                  t.reverse(),
                  r = s;
                r--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (d = (r = c.length) < (o = h.length)) && (o = r), r = 0;
                r < o;
                r++
              )
                if (c[r] != h[r]) {
                  d = c[r] < h[r];
                  break;
                }
              s = 0;
            }
            for (
              d && ((t = c), (c = h), (h = t), (e.s = -e.s)),
                o = c.length,
                r = h.length - o;
              r > 0;
              --r
            )
              c[o++] = 0;
            for (r = h.length; r > s; ) {
              if (c[--r] < h[r]) {
                for (i = r; i && 0 === c[--i]; ) c[i] = 1e7 - 1;
                --c[i], (c[r] += 1e7);
              }
              c[r] -= h[r];
            }
            for (; 0 === c[--o]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --n;
            return c[0]
              ? ((e.d = c), (e.e = j(c, n)), l ? P(e, a, u) : e)
              : new p(3 === u ? -0 : 0);
          }),
        (k.modulo = k.mod =
          function (e) {
            var t,
              n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((l = !1),
                  9 == n.modulo
                    ? ((t = S(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = S(this, e, 0, n.modulo, 1)),
                  (t = t.times(e)),
                  (l = !0),
                  this.minus(t))
                : P(new n(this), n.precision, n.rounding)
              : new n(0 / 0);
          }),
        (k.naturalExponential = k.exp =
          function () {
            return M(this);
          }),
        (k.naturalLogarithm = k.ln =
          function () {
            return U(this);
          }),
        (k.negated = k.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), P(e);
          }),
        (k.plus = k.add =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              c,
              f,
              d = this.constructor;
            if (((e = new d(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new d(e.d || this.s === e.s ? this : 0 / 0))
                  : (e = new d(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((c = this.d),
              (f = e.d),
              (a = d.precision),
              (u = d.rounding),
              !c[0] || !f[0])
            )
              return f[0] || (e = new d(this)), l ? P(e, a, u) : e;
            if (
              ((s = m(this.e / 7)),
              (r = m(e.e / 7)),
              (c = c.slice()),
              (i = s - r))
            ) {
              for (
                i < 0
                  ? ((n = c), (i = -i), (o = f.length))
                  : ((n = f), (r = s), (o = c.length)),
                  i > (o = (s = Math.ceil(a / 7)) > o ? s + 1 : o + 1) &&
                    ((i = o), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (o = c.length) - (i = f.length) < 0 &&
                ((i = o), (n = f), (f = c), (c = n)),
                t = 0;
              i;

            )
              (t = ((c[--i] = c[i] + f[i] + t) / 1e7) | 0), (c[i] %= 1e7);
            for (t && (c.unshift(t), ++r), o = c.length; 0 == c[--o]; ) c.pop();
            return (e.d = c), (e.e = j(c, r)), l ? P(e, a, u) : e;
          }),
        (k.precision = k.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(f + e);
            return (
              this.d
                ? ((t = I(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = 0 / 0),
              t
            );
          }),
        (k.round = function () {
          var e = this.constructor;
          return P(new e(this), this.e + 1, e.rounding);
        }),
        (k.sine = k.sin =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n,
                      r = t.d.length;
                    if (r < 3) return t.isZero() ? t : L(e, 2, t, t);
                    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                      (t = L(e, 2, (t = t.times(1 / q(5, n))), t));
                    for (
                      var i, s = new e(5), o = new e(16), a = new e(20);
                      n--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(o.times(i).minus(a)))));
                    return t;
                  })(r, W(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  P(i > 2 ? n.neg() : n, e, t, !0))
              : new r(0 / 0);
          }),
        (k.squareRoot = k.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o = this.d,
              a = this.e,
              u = this.s,
              c = this.constructor;
            if (1 !== u || !o || !o[0])
              return new c(
                !u || (u < 0 && (!o || o[0])) ? 0 / 0 : o ? this : 1 / 0,
              );
            for (
              l = !1,
                0 == (u = Math.sqrt(+this)) || 1 / 0 == u
                  ? (((t = O(o)).length + a) % 2 == 0 && (t += "0"),
                    (u = Math.sqrt(t)),
                    (a = m((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new c(
                      (t =
                        1 / 0 == u
                          ? "5e" + a
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + a),
                    )))
                  : (r = new c(u.toString())),
                n = (a = c.precision) + 3;
              ;

            )
              if (
                ((r = (s = r).plus(S(this, s, n + 2, 1)).times(0.5)),
                O(s.d).slice(0, n) === (t = O(r.d)).slice(0, n))
              ) {
                if (
                  "9999" != (t = t.slice(n - 3, n + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (P(r, a + 1, 1), (e = !r.times(r).eq(this)));
                  break;
                }
                if (!i && (P(s, a + 1, 0), s.times(s).eq(this))) {
                  r = s;
                  break;
                }
                (n += 4), (i = 1);
              }
            return (l = !0), P(r, a, c.rounding, e);
          }),
        (k.tangent = k.tan =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 10),
                  (r.rounding = 1),
                  ((n = n.sin()).s = 1),
                  (n = S(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                  (r.precision = e),
                  (r.rounding = t),
                  P(2 == i || 4 == i ? n.neg() : n, e, t, !0))
              : new r(0 / 0);
          }),
        (k.times = k.mul =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              c,
              f = this.constructor,
              d = this.d,
              h = (e = new f(e)).d;
            if (((e.s *= this.s), !d || !d[0] || !h || !h[0]))
              return new f(
                !e.s || (d && !d[0] && !h) || (h && !h[0] && !d)
                  ? 0 / 0
                  : !d || !h
                    ? e.s / 0
                    : 0 * e.s,
              );
            for (
              n = m(this.e / 7) + m(e.e / 7),
                (u = d.length) < (c = h.length) &&
                  ((s = d), (d = h), (h = s), (o = u), (u = c), (c = o)),
                s = [],
                r = o = u + c;
              r--;

            )
              s.push(0);
            for (r = c; --r >= 0; ) {
              for (t = 0, i = u + r; i > r; )
                (a = s[i] + h[r] * d[i - r - 1] + t),
                  (s[i--] = a % 1e7 | 0),
                  (t = (a / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--o]; ) s.pop();
            return (
              t ? ++n : s.shift(),
              (e.d = s),
              (e.e = j(s, n)),
              l ? P(e, f.precision, f.rounding) : e
            );
          }),
        (k.toBinary = function (e, t) {
          return V(this, 2, e, t);
        }),
        (k.toDecimalPlaces = k.toDP =
          function (e, t) {
            var n = this,
              r = n.constructor;
            return ((n = new r(n)), void 0 === e)
              ? n
              : ($(e, 0, 1e9),
                void 0 === t ? (t = r.rounding) : $(t, 0, 8),
                P(n, e + n.e + 1, t));
          }),
        (k.toExponential = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = Z(r, !0))
              : ($(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : $(t, 0, 8),
                (n = Z((r = P(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (k.toFixed = function (e, t) {
          var n,
            r,
            i = this.constructor;
          return (
            void 0 === e
              ? (n = Z(this))
              : ($(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : $(t, 0, 8),
                (n = Z(
                  (r = P(new i(this), e + this.e + 1, t)),
                  !1,
                  e + r.e + 1,
                ))),
            this.isNeg() && !this.isZero() ? "-" + n : n
          );
        }),
        (k.toFraction = function (e) {
          var t,
            n,
            r,
            i,
            s,
            o,
            a,
            u,
            c,
            d,
            h,
            p,
            m = this.d,
            v = this.constructor;
          if (!m) return new v(this);
          if (
            ((c = n = new v(1)),
            (r = u = new v(0)),
            (o = (s = (t = new v(r)).e = I(m) - this.e - 1) % 7),
            (t.d[0] = g(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = s > 0 ? t : c;
          else {
            if (!(a = new v(e)).isInt() || a.lt(c)) throw Error(f + a);
            e = a.gt(t) ? (s > 0 ? t : c) : a;
          }
          for (
            l = !1,
              a = new v(O(m)),
              d = v.precision,
              v.precision = s = 7 * m.length * 2;
            (h = S(a, t, 0, 1, 1)), 1 != (i = n.plus(h.times(r))).cmp(e);

          )
            (n = r),
              (r = i),
              (i = c),
              (c = u.plus(h.times(i))),
              (u = i),
              (i = t),
              (t = a.minus(h.times(i))),
              (a = i);
          return (
            (i = S(e.minus(n), r, 0, 1, 1)),
            (u = u.plus(i.times(c))),
            (n = n.plus(i.times(r))),
            (u.s = c.s = this.s),
            (p =
              1 >
              S(c, r, s, 1)
                .minus(this)
                .abs()
                .cmp(S(u, n, s, 1).minus(this).abs())
                ? [c, r]
                : [u, n]),
            (v.precision = d),
            (l = !0),
            p
          );
        }),
        (k.toHexadecimal = k.toHex =
          function (e, t) {
            return V(this, 16, e, t);
          }),
        (k.toNearest = function (e, t) {
          var n = this,
            r = n.constructor;
          if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
          } else {
            if (
              ((e = new r(e)),
              void 0 === t ? (t = r.rounding) : $(t, 0, 8),
              !n.d)
            )
              return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
          }
          return (
            e.d[0]
              ? ((l = !1), (n = S(n, e, 0, t, 1).times(e)), (l = !0), P(n))
              : ((e.s = n.s), (n = e)),
            n
          );
        }),
        (k.toNumber = function () {
          return +this;
        }),
        (k.toOctal = function (e, t) {
          return V(this, 8, e, t);
        }),
        (k.toPower = k.pow =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a = this,
              u = a.constructor,
              c = +(e = new u(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(g(+a, c));
            if ((a = new u(a)).eq(1)) return a;
            if (((r = u.precision), (s = u.rounding), e.eq(1)))
              return P(a, r, s);
            if (
              (t = m(e.e / 7)) >= e.d.length - 1 &&
              (n = c < 0 ? -c : c) <= 0x1fffffffffffff
            )
              return (
                (i = F(u, a, n, r)), e.s < 0 ? new u(1).div(i) : P(i, r, s)
              );
            if ((o = a.s) < 0) {
              if (t < e.d.length - 1) return new u(0 / 0);
              if (
                ((1 & e.d[t]) == 0 && (o = 1),
                0 == a.e && 1 == a.d[0] && 1 == a.d.length)
              )
                return (a.s = o), a;
            }
            return (t =
              0 != (n = g(+a, c)) && isFinite(n)
                ? new u(n + "").e
                : m(c * (Math.log("0." + O(a.d)) / Math.LN10 + a.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? o / 0 : 0)
              : ((l = !1),
                (u.rounding = a.s = 1),
                (n = Math.min(12, (t + "").length)),
                (i = M(e.times(U(a, r + n)), r)).d &&
                  x((i = P(i, r + 5, 1)).d, r, s) &&
                  ((t = r + 10),
                  +O((i = P(M(e.times(U(a, t + n)), t), t + 5, 1)).d).slice(
                    r + 1,
                    r + 15,
                  ) +
                    1 ==
                    1e14 && (i = P(i, r + 1, 0))),
                (i.s = o),
                (l = !0),
                (u.rounding = s),
                P(i, r, s));
          }),
        (k.toPrecision = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = Z(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
              : ($(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : $(t, 0, 8),
                (n = Z(
                  (r = P(new i(r), e, t)),
                  e <= r.e || r.e <= i.toExpNeg,
                  e,
                ))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (k.toSignificantDigits = k.toSD =
          function (e, t) {
            var n = this.constructor;
            return (
              void 0 === e
                ? ((e = n.precision), (t = n.rounding))
                : ($(e, 1, 1e9), void 0 === t ? (t = n.rounding) : $(t, 0, 8)),
              P(new n(this), e, t)
            );
          }),
        (k.toString = function () {
          var e = this.constructor,
            t = Z(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (k.truncated = k.trunc =
          function () {
            return P(new this.constructor(this), this.e + 1, 1);
          }),
        (k.valueOf = k.toJSON =
          function () {
            var e = this.constructor,
              t = Z(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var S = (function () {
        function e(e, t, n) {
          var r,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (r = e[s] * t + i), (e[s] = r % n | 0), (i = (r / n) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, n, r) {
          var i, s;
          if (n != r) s = n > r ? 1 : -1;
          else
            for (i = s = 0; i < n; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function n(e, t, n, r) {
          for (var i = 0; n--; )
            (e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, s, o, a, u, l) {
          var c,
            f,
            d,
            h,
            p,
            g,
            v,
            y,
            _,
            w,
            b,
            z,
            k,
            O,
            $,
            x,
            E,
            S,
            Z,
            j,
            A = i.constructor,
            T = i.s == s.s ? 1 : -1,
            I = i.d,
            N = s.d;
          if (!I || !I[0] || !N || !N[0])
            return new A(
              !i.s || !s.s || (I ? N && I[0] == N[0] : !N)
                ? 0 / 0
                : (I && 0 == I[0]) || !N
                  ? 0 * T
                  : T / 0,
            );
          for (
            l
              ? ((p = 1), (f = i.e - s.e))
              : ((l = 1e7), (p = 7), (f = m(i.e / p) - m(s.e / p))),
              Z = N.length,
              E = I.length,
              w = (_ = new A(T)).d = [],
              d = 0;
            N[d] == (I[d] || 0);
            d++
          );
          if (
            (N[d] > (I[d] || 0) && f--,
            null == o
              ? ((O = o = A.precision), (a = A.rounding))
              : (O = u ? o + (i.e - s.e) + 1 : o),
            O < 0)
          )
            w.push(1), (g = !0);
          else {
            if (((O = (O / p + 2) | 0), (d = 0), 1 == Z)) {
              for (h = 0, N = N[0], O++; (d < E || h) && O--; d++)
                ($ = h * l + (I[d] || 0)),
                  (w[d] = ($ / N) | 0),
                  (h = $ % N | 0);
              g = h || d < E;
            } else {
              for (
                (h = (l / (N[0] + 1)) | 0) > 1 &&
                  ((N = e(N, h, l)),
                  (I = e(I, h, l)),
                  (Z = N.length),
                  (E = I.length)),
                  x = Z,
                  z = (b = I.slice(0, Z)).length;
                z < Z;

              )
                b[z++] = 0;
              (j = N.slice()).unshift(0), (S = N[0]), N[1] >= l / 2 && ++S;
              do
                (h = 0),
                  (c = t(N, b, Z, z)) < 0
                    ? ((k = b[0]),
                      Z != z && (k = k * l + (b[1] || 0)),
                      (h = (k / S) | 0) > 1
                        ? (h >= l && (h = l - 1),
                          (y = (v = e(N, h, l)).length),
                          (z = b.length),
                          1 == (c = t(v, b, y, z)) &&
                            (h--, n(v, Z < y ? j : N, y, l)))
                        : (0 == h && (c = h = 1), (v = N.slice())),
                      (y = v.length) < z && v.unshift(0),
                      n(b, v, z, l),
                      -1 == c &&
                        ((z = b.length),
                        (c = t(N, b, Z, z)) < 1 &&
                          (h++, n(b, Z < z ? j : N, z, l))),
                      (z = b.length))
                    : 0 === c && (h++, (b = [0])),
                  (w[d++] = h),
                  c && b[0] ? (b[z++] = I[x] || 0) : ((b = [I[x]]), (z = 1));
              while ((x++ < E || void 0 !== b[0]) && O--);
              g = void 0 !== b[0];
            }
            w[0] || w.shift();
          }
          if (1 == p) (_.e = f), (r = g);
          else {
            for (d = 1, h = w[0]; h >= 10; h /= 10) d++;
            (_.e = d + f * p - 1), P(_, u ? o + _.e + 1 : o, a, g);
          }
          return _;
        };
      })();
      function P(e, t, n, r) {
        var i,
          s,
          o,
          a,
          u,
          c,
          f,
          d,
          h,
          p = e.constructor;
        t: if (null != t) {
          if (!(d = e.d)) return e;
          for (i = 1, a = d[0]; a >= 10; a /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (o = t),
              (u = ((f = d[(h = 0)]) / g(10, i - o - 1)) % 10 | 0);
          else if ((h = Math.ceil((s + 1) / 7)) >= (a = d.length))
            if (r) {
              for (; a++ <= h; ) d.push(0);
              (f = u = 0), (i = 1), (s %= 7), (o = s - 7 + 1);
            } else break t;
          else {
            for (f = a = d[h], i = 1; a >= 10; a /= 10) i++;
            (s %= 7),
              (u = (o = s - 7 + i) < 0 ? 0 : (f / g(10, i - o - 1)) % 10 | 0);
          }
          if (
            ((r =
              r ||
              t < 0 ||
              void 0 !== d[h + 1] ||
              (o < 0 ? f : f % g(10, i - o - 1))),
            (c =
              n < 4
                ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == n ||
                      r ||
                      (6 == n &&
                        (s > 0 ? (o > 0 ? f / g(10, i - o) : 0) : d[h - 1]) %
                          10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !d[0])
          )
            return (
              (d.length = 0),
              c
                ? ((t -= e.e + 1),
                  (d[0] = g(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (d[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((d.length = h), (a = 1), h--)
              : ((d.length = h + 1),
                (a = g(10, 7 - s)),
                (d[h] = o > 0 ? ((f / g(10, i - o)) % g(10, o) | 0) * a : 0)),
            c)
          )
            for (;;)
              if (0 == h) {
                for (s = 1, o = d[0]; o >= 10; o /= 10) s++;
                for (o = d[0] += a, a = 1; o >= 10; o /= 10) a++;
                s != a && (e.e++, 1e7 == d[0] && (d[0] = 1));
                break;
              } else {
                if (((d[h] += a), 1e7 != d[h])) break;
                (d[h--] = 0), (a = 1);
              }
          for (s = d.length; 0 === d[--s]; ) d.pop();
        }
        return (
          l &&
            (e.e > p.maxE
              ? ((e.d = null), (e.e = 0 / 0))
              : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function Z(e, t, n) {
        if (!e.isFinite()) return C(e);
        var r,
          i = e.e,
          s = O(e.d),
          o = s.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (s = s.charAt(0) + "." + s.slice(1) + N(r))
                : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((s = "0." + N(-i - 1) + s),
                n && (r = n - o) > 0 && (s += N(r)))
              : i >= o
                ? ((s += N(i + 1 - o)),
                  n && (r = n - i - 1) > 0 && (s = s + "." + N(r)))
                : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
                  n &&
                    (r = n - o) > 0 &&
                    (i + 1 === o && (s += "."), (s += N(r)))),
          s
        );
      }
      function j(e, t) {
        var n = e[0];
        for (t *= 7; n >= 10; n /= 10) t++;
        return t;
      }
      function A(e, t, n) {
        if (t > b) throw ((l = !0), n && (e.precision = n), Error(d));
        return P(new e(o), t, 1, !0);
      }
      function T(e, t, n) {
        if (t > z) throw Error(d);
        return P(new e(a), t, n, !0);
      }
      function I(e) {
        var t = e.length - 1,
          n = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) n--;
          for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
      }
      function N(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function F(e, t, n, r) {
        var i,
          s = new e(1),
          o = Math.ceil(r / 7 + 4);
        for (l = !1; ; ) {
          if (
            (n % 2 && K((s = s.times(t)).d, o) && (i = !0),
            0 === (n = m(n / 2)))
          ) {
            (n = s.d.length - 1), i && 0 === s.d[n] && ++s.d[n];
            break;
          }
          K((t = t.times(t)).d, o);
        }
        return (l = !0), s;
      }
      function R(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function D(e, t, n) {
        for (var r, i, s = new e(t[0]), o = 0; ++o < t.length; ) {
          if (!(i = new e(t[o])).s) {
            s = i;
            break;
          }
          ((r = s.cmp(i)) === n || (0 === r && s.s === n)) && (s = i);
        }
        return s;
      }
      function M(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          u,
          c = 0,
          f = 0,
          d = 0,
          h = e.constructor,
          p = h.rounding,
          m = h.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new h(
            e.d
              ? !e.d[0]
                ? 1
                : e.s < 0
                  ? 0
                  : 1 / 0
              : e.s
                ? e.s < 0
                  ? 0
                  : e
                : 0 / 0,
          );
        for (
          null == t ? ((l = !1), (u = m)) : (u = t), a = new h(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (d += 5);
        for (
          u += r = ((Math.log(g(2, d)) / Math.LN10) * 2 + 5) | 0,
            n = s = o = new h(1),
            h.precision = u;
          ;

        ) {
          if (
            ((s = P(s.times(e), u, 1)),
            (n = n.times(++f)),
            O((a = o.plus(S(s, n, u, 1))).d).slice(0, u) === O(o.d).slice(0, u))
          ) {
            for (i = d; i--; ) o = P(o.times(o), u, 1);
            if (null != t) return (h.precision = m), o;
            if (!(c < 3 && x(o.d, u - r, p, c)))
              return P(o, (h.precision = m), p, (l = !0));
            (h.precision = u += 10), (n = s = a = new h(1)), (f = 0), c++;
          }
          o = a;
        }
      }
      function U(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          u,
          c,
          f,
          d,
          h,
          p = 1,
          m = e,
          g = m.d,
          v = m.constructor,
          y = v.rounding,
          _ = v.precision;
        if (m.s < 0 || !g || !g[0] || (!m.e && 1 == g[0] && 1 == g.length))
          return new v(g && !g[0] ? -1 / 0 : 1 != m.s ? 0 / 0 : g ? 0 : m);
        if (
          (null == t ? ((l = !1), (f = _)) : (f = t),
          (v.precision = f += 10),
          (r = (n = O(g)).charAt(0)),
          !(15e14 > Math.abs((s = m.e))))
        )
          return (
            (c = A(v, f + 2, _).times(s + "")),
            (m = U(new v(r + "." + n.slice(1)), f - 10).plus(c)),
            (v.precision = _),
            null == t ? P(m, _, y, (l = !0)) : m
          );
        for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
          (r = (n = O((m = m.times(e)).d)).charAt(0)), p++;
        for (
          s = m.e,
            r > 1
              ? ((m = new v("0." + n)), s++)
              : (m = new v(r + "." + n.slice(1))),
            d = m,
            u = o = m = S(m.minus(1), m.plus(1), f, 1),
            h = P(m.times(m), f, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = P(o.times(h), f, 1)),
            O((c = u.plus(S(o, new v(i), f, 1))).d).slice(0, f) ===
              O(u.d).slice(0, f))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(A(v, f + 2, _).times(s + ""))),
              (u = S(u, new v(p), f, 1)),
              null != t)
            )
              return (v.precision = _), u;
            if (!x(u.d, f - 10, y, a))
              return P(u, (v.precision = _), y, (l = !0));
            (v.precision = f += 10),
              (c = o = m = S(d.minus(1), d.plus(1), f, 1)),
              (h = P(m.times(m), f, 1)),
              (i = a = 1);
          }
          (u = c), (i += 2);
        }
      }
      function C(e) {
        return String((e.s * e.s) / 0);
      }
      function J(e, t) {
        var n, r, i;
        for (
          (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          48 === t.charCodeAt(r);
          r++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(r, i))) {
          if (
            ((i -= r),
            (e.e = n = n - r - 1),
            (e.d = []),
            (r = (n + 1) % 7),
            n < 0 && (r += 7),
            r < i)
          ) {
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; )
              e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
          } else r -= i;
          for (; r--; ) t += "0";
          e.d.push(+t),
            l &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = 0 / 0))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function L(e, t, n, r, i) {
        var s,
          o,
          a,
          u,
          c = e.precision,
          f = Math.ceil(c / 7);
        for (l = !1, u = n.times(n), a = new e(r); ; ) {
          if (
            ((o = S(a.times(u), new e(t++ * t++), c, 1)),
            (a = i ? r.plus(o) : r.minus(o)),
            (r = S(o.times(u), new e(t++ * t++), c, 1)),
            void 0 !== (o = a.plus(r)).d[f])
          ) {
            for (s = f; o.d[s] === a.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = a), (a = r), (r = o), (o = s);
        }
        return (l = !0), (o.d.length = f + 1), o;
      }
      function q(e, t) {
        for (var n = e; --t; ) n *= e;
        return n;
      }
      function W(e, t) {
        var n,
          r = t.s < 0,
          s = T(e, e.precision, 1),
          o = s.times(0.5);
        if ((t = t.abs()).lte(o)) return (i = r ? 4 : 1), t;
        if ((n = t.divToInt(s)).isZero()) i = r ? 3 : 2;
        else {
          if ((t = t.minus(n.times(s))).lte(o))
            return (i = R(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
          i = R(n) ? (r ? 1 : 4) : r ? 3 : 2;
        }
        return t.minus(s).abs();
      }
      function V(e, t, n, i) {
        var o,
          a,
          u,
          l,
          c,
          f,
          d,
          h,
          p,
          m = e.constructor,
          g = void 0 !== n;
        if (
          (g
            ? ($(n, 1, 1e9), void 0 === i ? (i = m.rounding) : $(i, 0, 8))
            : ((n = m.precision), (i = m.rounding)),
          e.isFinite())
        ) {
          for (
            u = (d = Z(e)).indexOf("."),
              g
                ? ((o = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (o = t),
              u >= 0 &&
                ((d = d.replace(".", "")),
                ((p = new m(1)).e = d.length - u),
                (p.d = E(Z(p), 10, o)),
                (p.e = p.d.length)),
              a = c = (h = E(d, 10, o)).length;
            0 == h[--c];

          )
            h.pop();
          if (h[0]) {
            if (
              (u < 0
                ? a--
                : (((e = new m(e)).d = h),
                  (e.e = a),
                  (h = (e = S(e, p, n, i, 0, o)).d),
                  (a = e.e),
                  (f = r)),
              (u = h[n]),
              (l = o / 2),
              (f = f || void 0 !== h[n + 1]),
              (f =
                i < 4
                  ? (void 0 !== u || f) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : u > l ||
                    (u === l &&
                      (4 === i ||
                        f ||
                        (6 === i && 1 & h[n - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (h.length = n),
              f)
            )
              for (; ++h[--n] > o - 1; ) (h[n] = 0), n || (++a, h.unshift(1));
            for (c = h.length; !h[c - 1]; --c);
            for (u = 0, d = ""; u < c; u++) d += s.charAt(h[u]);
            if (g) {
              if (c > 1)
                if (16 == t || 8 == t) {
                  for (u = 16 == t ? 4 : 3, --c; c % u; c++) d += "0";
                  for (c = (h = E(d, o, t)).length; !h[c - 1]; --c);
                  for (u = 1, d = "1."; u < c; u++) d += s.charAt(h[u]);
                } else d = d.charAt(0) + "." + d.slice(1);
              d = d + (a < 0 ? "p" : "p+") + a;
            } else if (a < 0) {
              for (; ++a; ) d = "0" + d;
              d = "0." + d;
            } else if (++a > c) for (a -= c; a--; ) d += "0";
            else a < c && (d = d.slice(0, a) + "." + d.slice(a));
          } else d = g ? "0p+0" : "0";
          d = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + d;
        } else d = C(e);
        return e.s < 0 ? "-" + d : d;
      }
      function K(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function B(e) {
        return new this(e).abs();
      }
      function H(e) {
        return new this(e).acos();
      }
      function X(e) {
        return new this(e).acosh();
      }
      function G(e, t) {
        return new this(e).plus(t);
      }
      function Y(e) {
        return new this(e).asin();
      }
      function Q(e) {
        return new this(e).asinh();
      }
      function ee(e) {
        return new this(e).atan();
      }
      function et(e) {
        return new this(e).atanh();
      }
      function en(e, t) {
        (e = new this(e)), (t = new this(t));
        var n,
          r = this.precision,
          i = this.rounding,
          s = r + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((n = t.s < 0 ? T(this, r, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((n = T(this, s, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = s),
                      (this.rounding = 1),
                      (n = this.atan(S(e, t, s, 1))),
                      (t = T(this, s, 1)),
                      (this.precision = r),
                      (this.rounding = i),
                      (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                    : (n = this.atan(S(e, t, s, 1)))
              : ((n = T(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(0 / 0)),
          n
        );
      }
      function er(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return P((e = new this(e)), e.e + 1, 2);
      }
      function es(e, t, n) {
        return new this(e).clamp(t, n);
      }
      function eo(e) {
        if (!e || "object" != typeof e) throw Error(c + "Object expected");
        var t,
          n,
          r,
          i = !0 === e.defaults,
          s = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < s.length; t += 3)
          if (((n = s[t]), i && (this[n] = u[n]), void 0 !== (r = e[n])))
            if (m(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
            else throw Error(f + n + ": " + r);
        if (((n = "crypto"), i && (this[n] = u[n]), void 0 !== (r = e[n])))
          if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[n] = !0;
              else throw Error(h);
            else this[n] = !1;
          else throw Error(f + n + ": " + r);
        return this;
      }
      function ea(e) {
        return new this(e).cos();
      }
      function eu(e) {
        return new this(e).cosh();
      }
      function el(e, t) {
        return new this(e).div(t);
      }
      function ec(e) {
        return new this(e).exp();
      }
      function ef(e) {
        return P((e = new this(e)), e.e + 1, 3);
      }
      function ed() {
        var e,
          t,
          n = new this(0);
        for (e = 0, l = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            n.d && (n = n.plus(t.times(t)));
          else {
            if (t.s) return (l = !0), new this(1 / 0);
            n = t;
          }
        return (l = !0), n.sqrt();
      }
      function eh(e) {
        return e instanceof eI || (e && e.toStringTag === p) || !1;
      }
      function ep(e) {
        return new this(e).ln();
      }
      function em(e, t) {
        return new this(e).log(t);
      }
      function eg(e) {
        return new this(e).log(2);
      }
      function ev(e) {
        return new this(e).log(10);
      }
      function ey() {
        return D(this, arguments, -1);
      }
      function e_() {
        return D(this, arguments, 1);
      }
      function ew(e, t) {
        return new this(e).mod(t);
      }
      function eb(e, t) {
        return new this(e).mul(t);
      }
      function ez(e, t) {
        return new this(e).pow(t);
      }
      function ek(e) {
        var t,
          n,
          r,
          i,
          s = 0,
          o = new this(1),
          a = [];
        if (
          (void 0 === e ? (e = this.precision) : $(e, 1, 1e9),
          (r = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (a[s++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); s < r; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (a.push(i % 1e7), (s += 4));
            s = r / 4;
          } else throw Error(h);
        else for (; s < r; ) a[s++] = (1e7 * Math.random()) | 0;
        for (
          r = a[--s],
            e %= 7,
            r && e && ((i = g(10, 7 - e)), (a[s] = ((r / i) | 0) * i));
          0 === a[s];
          s--
        )
          a.pop();
        if (s < 0) (n = 0), (a = [0]);
        else {
          for (n = -1; 0 === a[0]; n -= 7) a.shift();
          for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
          r < 7 && (n -= 7 - r);
        }
        return (o.e = n), (o.d = a), o;
      }
      function eO(e) {
        return P((e = new this(e)), e.e + 1, this.rounding);
      }
      function e$(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || 0 / 0;
      }
      function ex(e) {
        return new this(e).sin();
      }
      function eE(e) {
        return new this(e).sinh();
      }
      function eS(e) {
        return new this(e).sqrt();
      }
      function eP(e, t) {
        return new this(e).sub(t);
      }
      function eZ() {
        var e = 0,
          t = arguments,
          n = new this(t[0]);
        for (l = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
        return (l = !0), P(n, this.precision, this.rounding);
      }
      function ej(e) {
        return new this(e).tan();
      }
      function eA(e) {
        return new this(e).tanh();
      }
      function eT(e) {
        return P((e = new this(e)), e.e + 1, 1);
      }
      (k[Symbol.for("nodejs.util.inspect.custom")] = k.toString),
        (k[Symbol.toStringTag] = "Decimal");
      var eI = (k.constructor = (function e(t) {
        var n, r, i;
        function s(e) {
          var t, n, r;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), eh(e))) {
            (this.s = e.s),
              l
                ? !e.d || e.e > s.maxE
                  ? ((this.e = 0 / 0), (this.d = null))
                  : e.e < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (r = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, n = e; n >= 10; n /= 10) t++;
              l
                ? t > s.maxE
                  ? ((this.e = 0 / 0), (this.d = null))
                  : t < s.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = 0 / 0), (this.e = 0 / 0), (this.d = null);
              return;
            }
            return J(this, e.toString());
          }
          if ("string" === r)
            return (
              45 === (n = e.charCodeAt(0))
                ? ((e = e.slice(1)), (this.s = -1))
                : (43 === n && (e = e.slice(1)), (this.s = 1)),
              w.test(e)
                ? J(this, e)
                : (function (e, t) {
                    var n, r, i, s, o, a, u, c, d;
                    if (t.indexOf("_") > -1) {
                      if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), w.test(t)))
                        return J(e, t);
                    } else if ("Infinity" === t || "NaN" === t)
                      return (
                        +t || (e.s = 0 / 0), (e.e = 0 / 0), (e.d = null), e
                      );
                    if (y.test(t)) (n = 16), (t = t.toLowerCase());
                    else if (v.test(t)) n = 2;
                    else if (_.test(t)) n = 8;
                    else throw Error(f + t);
                    for (
                      (s = t.search(/p/i)) > 0
                        ? ((u = +t.slice(s + 1)), (t = t.substring(2, s)))
                        : (t = t.slice(2)),
                        o = (s = t.indexOf(".")) >= 0,
                        r = e.constructor,
                        o &&
                          ((s = (a = (t = t.replace(".", "")).length) - s),
                          (i = F(r, new r(n), s, 2 * s))),
                        s = d = (c = E(t, n, 1e7)).length - 1;
                      0 === c[s];
                      --s
                    )
                      c.pop();
                    return s < 0
                      ? new r(0 * e.s)
                      : ((e.e = j(c, d)),
                        (e.d = c),
                        (l = !1),
                        o && (e = S(e, i, 4 * a)),
                        u &&
                          (e = e.times(
                            54 > Math.abs(u) ? g(2, u) : eI.pow(2, u),
                          )),
                        (l = !0),
                        e);
                  })(this, e)
            );
          if ("bigint" === r)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              J(this, e.toString())
            );
          throw Error(f + e);
        }
        if (
          ((s.prototype = k),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = eo),
          (s.clone = e),
          (s.isDecimal = eh),
          (s.abs = B),
          (s.acos = H),
          (s.acosh = X),
          (s.add = G),
          (s.asin = Y),
          (s.asinh = Q),
          (s.atan = ee),
          (s.atanh = et),
          (s.atan2 = en),
          (s.cbrt = er),
          (s.ceil = ei),
          (s.clamp = es),
          (s.cos = ea),
          (s.cosh = eu),
          (s.div = el),
          (s.exp = ec),
          (s.floor = ef),
          (s.hypot = ed),
          (s.ln = ep),
          (s.log = em),
          (s.log10 = ev),
          (s.log2 = eg),
          (s.max = ey),
          (s.min = e_),
          (s.mod = ew),
          (s.mul = eb),
          (s.pow = ez),
          (s.random = ek),
          (s.round = eO),
          (s.sign = e$),
          (s.sin = ex),
          (s.sinh = eE),
          (s.sqrt = eS),
          (s.sub = eP),
          (s.sum = eZ),
          (s.tan = ej),
          (s.tanh = eA),
          (s.trunc = eT),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            n = 0,
              i = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ];
            n < i.length;

          )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
        return s.config(t), s;
      })(u));
      (o = new eI(o)), (a = new eI(a)), n.d(t, {}, { W: eI });
    },
    166295(e, t, n) {
      "use strict";
      var r, i;
      let s, o, a, u, l, c, f, d, h, p;
      function m(e) {
        let t = Object.values(e).filter((e) => "number" == typeof e);
        return Object.entries(e)
          .filter(([e, n]) => -1 === t.indexOf(+e))
          .map(([e, t]) => t);
      }
      function g(e, t = "|") {
        return e.map((e) => F(e)).join(t);
      }
      function v(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
      }
      n.d(t, { k5n: () => rU, Ikc: () => rI, jgl: () => rD, YjP: () => ri });
      class y {
        constructor(e) {
          (this._getter = e), (this._value = void 0);
        }
        get value() {
          let e = this._getter;
          return (
            void 0 !== e && ((this._value = e()), (this._getter = void 0)),
            this._value
          );
        }
      }
      function _(e) {
        let t = +!!e.startsWith("^"),
          n = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, n);
      }
      function w(e, t, n) {
        Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function b(e) {
        let t = Object.getOwnPropertyDescriptor(e, "shape");
        return t?.get ? t.get.raw : t?.value;
      }
      function z(e) {
        return b(e._zod.def) ?? e._zod.def.shape;
      }
      function k(e, t, n) {
        Object.defineProperty(e, t, {
          get() {
            let e = n();
            return w(this, t, e), e;
          },
          enumerable: !0,
          configurable: !0,
        });
      }
      function O(e, t, n) {
        t in e ? w(e, t, n) : (e[t] = n);
      }
      function $(e, t, n, r) {
        let i = z(t);
        for (let s of n) {
          let n = Object.getOwnPropertyDescriptor(i, s);
          n.enumerable &&
            (n.get
              ? k(e, s, () => {
                  let e = t._zod.def.shape[s];
                  return r ? r(e, s) : e;
                })
              : O(e, s, r ? r(n.value, s) : n.value));
        }
      }
      function x(...e) {
        let t = {};
        for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
        return Object.defineProperties({}, t);
      }
      let E =
        "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
      function S(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      let P = new y(() => {
        if (
          ea.jitless ||
          ("u" > typeof navigator &&
            navigator?.userAgent?.includes("Cloudflare"))
        )
          return !1;
        try {
          return Function(""), !0;
        } catch (e) {
          return !1;
        }
      });
      function Z(e) {
        if (!1 === S(e)) return !1;
        let t = e.constructor;
        if (void 0 === t || "function" != typeof t) return !0;
        let n = t.prototype;
        return (
          !1 !== S(n) &&
          !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        );
      }
      function j(e) {
        return Z(e)
          ? { ...e }
          : Array.isArray(e)
            ? [...e]
            : e instanceof Map
              ? new Map(e)
              : e instanceof Set
                ? new Set(e)
                : e;
      }
      let A = new Set(["string", "number", "symbol"]);
      function T(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function I(e, t, n) {
        let r = new e._zod.constr(t ?? e._zod.def);
        return (!t || n?.parent) && (r._zod.parent = e), r;
      }
      function N(e) {
        if (!e) return {};
        if ("string" == typeof e) return { error: () => e };
        if (e?.message !== void 0) {
          if (e?.error !== void 0)
            throw Error("Cannot specify both `message` and `error` params");
          e.error = e.message;
        }
        return (delete e.message, "string" == typeof e.error)
          ? { ...e, error: () => e.error }
          : e;
      }
      function F(e) {
        return "bigint" == typeof e
          ? e.toString() + "n"
          : "string" == typeof e
            ? `"${e}"`
            : `${e}`;
      }
      let R = {
          safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
          int32: [-0x80000000, 0x7fffffff],
          uint32: [0, 0xffffffff],
          float32: [-34028234663852886e22, 34028234663852886e22],
          float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
        },
        D = {
          int64: [
            BigInt("-9223372036854775808"),
            BigInt("9223372036854775807"),
          ],
          uint64: [BigInt(0), BigInt("18446744073709551615")],
        };
      function M(e, t) {
        let n = z(e),
          r = [];
        for (let e of Reflect.ownKeys(t)) {
          if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable)
            throw Error(`Unrecognized key: "${String(e)}"`);
          t[e] && r.push(e);
        }
        return r;
      }
      function U(e, t) {
        let n = {};
        $(n, e, Reflect.ownKeys(z(e)));
        for (let e of Reflect.ownKeys(t)) {
          let r = Object.getOwnPropertyDescriptor(t, e);
          r.enumerable && (r.get ? k(n, e, () => t[e]) : O(n, e, r.value));
        }
        return n;
      }
      function C(e, t, n, r = "partial") {
        let i = t._zod.def.checks;
        if (i && i.length > 0)
          throw Error(
            `.${r}() cannot be used on object schemas containing refinements`,
          );
        let s = n ? new Set(M(t, n)) : void 0,
          o = {};
        return (
          $(
            o,
            t,
            Reflect.ownKeys(z(t)),
            e &&
              ((t, n) =>
                s && !s.has(n) ? t : new e({ type: "optional", innerType: t })),
          ),
          I(t, x(t._zod.def, { shape: o, checks: [] }))
        );
      }
      function J(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let n = t; n < e.issues.length; n++)
          if (e.issues[n]?.continue !== !0) return !0;
        return !1;
      }
      function L(e, t) {
        return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
      }
      function q(e) {
        return "string" == typeof e ? e : e?.message;
      }
      function W(e) {
        let t = [];
        for (let n of e ?? []) {
          let e = n._zod.def;
          if (!/_(length|size)$|_equals$/.test(e.check)) break;
          let r = e.maximum ?? e.length ?? e.size;
          r >= 0 && t.push([r, n]);
        }
        return t;
      }
      function V(e, t, n) {
        var r;
        for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
      }
      function K(e, t, n) {
        let r = e.inst?._zod?.traits;
        r?.has("$ZodType") &&
          (r.has("$ZodCheck")
            ? (e.schema ?? (e.schema = e.inst))
            : (e.schema = e.inst));
        let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
          s = e.message
            ? e.message
            : (q(e.inst?._zod.def?.error?.(e)) ??
              q(i?.(e)) ??
              q(t?.error?.(e)) ??
              q(n.customError?.(e)) ??
              q(n.localeError?.(e)) ??
              "Invalid input"),
          o = {};
        for (let t of Object.keys(e))
          "inst" !== t &&
            "schema" !== t &&
            "continue" !== t &&
            "input" !== t &&
            "__proto__" !== t &&
            (o[t] = e[t]);
        return (
          o.path ?? (o.path = []),
          (o.message = s),
          t?.reportInput && (o.input = e.input),
          o
        );
      }
      let B = /[\uD800-\uDBFF]/;
      function H(e) {
        let t = e.length;
        if (!B.test(e)) return t;
        let n = t;
        for (let r = 0; r < t - 1; r++)
          (64512 & e.charCodeAt(r)) == 55296 &&
            (64512 & e.charCodeAt(r + 1)) == 56320 &&
            (n--, r++);
        return n;
      }
      function X(e) {
        return Array.isArray(e)
          ? "array"
          : "string" == typeof e
            ? "string"
            : "unknown";
      }
      function G(...e) {
        let [t, n, r] = e;
        return "string" == typeof t
          ? { message: t, code: "custom", input: n, inst: r }
          : { ...t };
      }
      function Y(e, t, n, r = !0) {
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            writable: !0,
            enumerable: r,
            value: n,
          }),
          n
        );
      }
      let Q = !1,
        ee = {
          configurable: !0,
          get() {
            Q = !0;
          },
        };
      function et(e, t, n) {
        let r = Object.getPrototypeOf(e._zod);
        if (t in r && s !== e._zod) {
          s = void 0;
          return;
        }
        (s = e._zod),
          Object.defineProperty(r, t, {
            configurable: !0,
            get() {
              Object.defineProperty(this, t, ee);
              let e = Q;
              Q = !1;
              try {
                let r = n(this);
                return (
                  Q
                    ? delete this[t]
                    : Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: r,
                      }),
                  (Q = Q || e),
                  r
                );
              } catch (n) {
                throw (delete this[t], (Q = Q || e), n);
              }
            },
            set(e) {
              Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
      }
      let en = { value: void 0, enumerable: !1 },
        er = "captureStackTrace" in Error ? Error : null;
      function ei(e, t, n, r) {
        function i(e) {
          (this.def = e), (this.constr = l), (this.traits = new Set());
        }
        i.prototype = {};
        let s = n && new WeakSet();
        function o(r, o) {
          if (r._zod) {
            if (r._zod.traits.has(e)) return;
          } else {
            en.value = new i(o);
            try {
              Object.defineProperty(r, "_zod", en);
            } finally {
              en.value = void 0;
            }
          }
          if ((r._zod.traits.add(e), t(r, o), s)) {
            let e = Object.getPrototypeOf(r),
              t = r._zod.constr.prototype,
              i = e;
            for (; i && i !== t; ) i = Object.getPrototypeOf(i);
            let o = i ?? e;
            if (!s.has(o)) {
              s.add(o);
              for (let e in n) {
                let t = Object.getOwnPropertyDescriptor(n, e);
                t.get
                  ? Object.defineProperty(o, e, { ...t, enumerable: !1 })
                  : (function (e, t, n) {
                      Object.defineProperty(e, t, {
                        configurable: !0,
                        get() {
                          return this == null ? n : Y(this, t, n.bind(this));
                        },
                        set(e) {
                          Y(this, t, e);
                        },
                      });
                    })(o, e, t.value);
              }
            }
          }
          let a = l.prototype;
          for (let e in a)
            Object.prototype.hasOwnProperty.call(a, e) &&
              (e in r || (r[e] = a[e].bind(r)));
        }
        let a = r?.Parent ?? Object;
        class u extends a {}
        function l(e) {
          let t = r?.Parent
            ? (function (e) {
                let t = er;
                if (t) {
                  let n = t.stackTraceLimit;
                  if ("number" == typeof n) {
                    try {
                      t.stackTraceLimit = 0;
                    } catch {
                      return (er = null), new e();
                    }
                    try {
                      return new e();
                    } finally {
                      t.stackTraceLimit = n;
                    }
                  }
                }
                return new e();
              })(u)
            : this;
          o(t, e);
          let n = t._zod.deferred;
          if (n) {
            for (let e of n) e();
            t._zod.deferred = void 0;
          }
          let i = globalThis.__zod_globalConfig?.postProcessor;
          return i && i(t), t;
        }
        return (
          Object.defineProperty(u, "name", { value: e }),
          Object.defineProperty(l, "init", { value: o }),
          Object.defineProperty(l, Symbol.hasInstance, {
            value: (t) =>
              (!!r?.Parent && t instanceof r.Parent) || t?._zod?.traits?.has(e),
          }),
          Object.defineProperty(l, "name", { value: e }),
          l
        );
      }
      class es extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class eo extends Error {
        constructor(e) {
          super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = "ZodEncodeError");
        }
      }
      (r = globalThis).__zod_globalConfig ?? (r.__zod_globalConfig = {});
      let ea = globalThis.__zod_globalConfig;
      function eu(e) {
        return e && Object.assign(ea, e), ea;
      }
      class el extends Error {
        constructor() {
          super(
            "Cannot parse a reference cycle that closes through a transform",
          ),
            (this.name = "ZodCyclicError");
        }
      }
      let ec = "~memo",
        ef = [];
      function ed(e) {
        return null !== e && "object" == typeof e;
      }
      function eh(e) {
        return e.map((e) =>
          e.path ? { ...e, path: e.path.slice() } : { ...e },
        );
      }
      let ep = new WeakMap(),
        em = [],
        eg = {
          alloc(e, t, n) {
            let r = o;
            if (!r) return n;
            o = void 0;
            let i = { value: n, issues: null };
            return r.set(t.value, i), em.push(i), n;
          },
          guard(e) {
            var t;
            (t = e._zod).deferred ?? (t.deferred = []),
              e._zod.deferred.push(() => {
                let t = e._zod.parse,
                  n = (e, n) => {
                    var r, i;
                    let s;
                    if (
                      "backward" !== n.direction &&
                      ((r = n),
                      (i = e.value),
                      void 0 !== (s = r[ec]?.backEdges) && ed(i) && s.has(i))
                    )
                      throw new el();
                    return t(e, n);
                  };
                (e._zod.parse = n), e._zod.run === t && (e._zod.run = n);
              });
          },
          attach(e) {
            var t;
            let n,
              r,
              i,
              s = !1;
            (t = e._zod).deferred ?? (t.deferred = []),
              e._zod.deferred.push(() => {
                let t = e._zod.parse,
                  a = (u, l) => {
                    let c;
                    if (void 0 === n) {
                      let r = (function e(t, n, r) {
                        var i, s;
                        let o = ep.get(t);
                        if (void 0 !== o) return 2 * !!o;
                        if (n.has(t)) return 2;
                        n.add(t);
                        let a = 0,
                          u = (t) => {
                            if (2 !== a && t?._zod) {
                              let i = e(t, n, r);
                              i > a && (a = i);
                            }
                          },
                          l = (e) => {
                            e > a && (a = e);
                          },
                          c = t._zod.def;
                        switch (c.type) {
                          case "object": {
                            let t = b(c);
                            l(
                              t
                                ? ((t, i) => {
                                    let s = 0;
                                    for (let o of Reflect.ownKeys(t)) {
                                      let a = Object.getOwnPropertyDescriptor(
                                        t,
                                        o,
                                      );
                                      if (i && !a.enumerable) continue;
                                      let u = a.get
                                        ? 1
                                        : a.value?._zod
                                          ? e(a.value, n, r)
                                          : 0;
                                      u > s && (s = u);
                                    }
                                    return s;
                                  })(t, !0)
                                : 1,
                            ),
                              u(c.catchall);
                            break;
                          }
                          case "array":
                            u(c.element);
                            break;
                          case "tuple":
                            for (let e of c.items) u(e);
                            u(c.rest);
                            break;
                          case "record":
                          case "map":
                            u(c.keyType), u(c.valueType);
                            break;
                          case "set":
                            u(c.valueType);
                            break;
                          case "union":
                            for (let e of c.options) u(e);
                            break;
                          case "intersection":
                            u(c.left), u(c.right);
                            break;
                          case "optional":
                          case "nullable":
                          case "default":
                          case "prefault":
                          case "catch":
                          case "readonly":
                          case "nonoptional":
                          case "promise":
                          case "success":
                            u(c.innerType);
                            break;
                          case "pipe":
                            u(c.in), u(c.out);
                            break;
                          case "function":
                            u(c.input), u(c.output);
                            break;
                          case "lazy": {
                            let i =
                              c._cachedInner ?? (r ? t._zod.innerType : void 0);
                            l(i ? e(i, n, !1) : 1);
                            break;
                          }
                          case "template_literal":
                          case "string":
                          case "number":
                          case "int":
                          case "boolean":
                          case "bigint":
                          case "symbol":
                          case "undefined":
                          case "null":
                          case "void":
                          case "never":
                          case "any":
                          case "unknown":
                          case "date":
                          case "nan":
                          case "enum":
                          case "literal":
                          case "file":
                          case "transform":
                          case "custom":
                            break;
                          default:
                            for (let e in c) {
                              let t = Object.getOwnPropertyDescriptor(c, e);
                              if (!t || t.get) continue;
                              let n = t.value;
                              if (n && "object" == typeof n) {
                                if (n._zod) u(n);
                                else if (Array.isArray(n))
                                  for (let e of n) u(e);
                              }
                            }
                        }
                        return (
                          n.delete(t),
                          (i = t),
                          1 !== (s = a) && ep.set(i, 2 === s),
                          s
                        );
                      })(e, new Set(), !1);
                      if (0 === r)
                        return (
                          (e._zod.parse = t),
                          e._zod.run === a && (e._zod.run = t),
                          t(u, l)
                        );
                      2 === r || s ? (n = !0) : (s = !0);
                    }
                    let f = u.value;
                    if (!ed(f)) return t(u, l);
                    let d = l[ec];
                    if (
                      (d ||
                        ((d = { buckets: new WeakMap(), backEdges: void 0 }),
                        (l[ec] = d)),
                      r === l)
                    )
                      c = i;
                    else {
                      var h;
                      let t;
                      (t = (h = d).buckets.get(e)) ||
                        ((t = new WeakMap()), h.buckets.set(e, t)),
                        (c = t),
                        (r = l),
                        (i = c);
                    }
                    let p = c.get(f);
                    if (p)
                      return (
                        (u.value = p.value),
                        p.issues
                          ? p.issues.length && u.issues.push(...eh(p.issues))
                          : ((u.memo = !0),
                            d.backEdges ?? (d.backEdges = new WeakSet()),
                            d.backEdges.add(p.value)),
                        u
                      );
                    o = c;
                    let m = em.length,
                      g = t(u, l);
                    o = void 0;
                    let v = em.length > m ? em.pop() : void 0;
                    return g instanceof Promise
                      ? g.then(
                          (e) => (
                            v &&
                              (v.issues = e.issues.length ? eh(e.issues) : ef),
                            e
                          ),
                        )
                      : (v && (v.issues = g.issues.length ? eh(g.issues) : ef),
                        g);
                  };
                (e._zod.parse = a), e._zod.run === t && (e._zod.run = a);
              });
          },
        },
        ev = /^[cC][0-9a-z]{6,}$/,
        ey = /^[0-9a-z]+$/,
        e_ = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
        ew = /^[0-9a-vA-V]{20}$/,
        eb = /^[A-Za-z0-9]{27}$/,
        ez = /^[a-zA-Z0-9_-]{21}$/,
        ek =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        eO =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        e$ = (e) =>
          e
            ? RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        ex =
          /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        eE =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        eS =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        eP =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        eZ =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        ej = /^https?$/,
        eA = /^\+[1-9]\d{6,14}$/,
        eT =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        eI = RegExp(`^${eT}$`);
      function eN(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision
          ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
          : e.seconds
            ? `${t}:[0-5]\\d(?:\\.\\d+)?`
            : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      let eF = /^[\s\S]{0,}$/,
        eR = /^-?\d+$/,
        eD = /^-?\d+(?:\.\d+)?$/,
        eM = /^[^A-Z]*$/,
        eU = /^[^a-z]*$/,
        eC = ei("$ZodCheck", (e, t) => {
          var n;
          e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (n = e._zod).onattach ?? (n.onattach = []);
        }),
        eJ = (e) => {
          let t = e.value;
          return null != t && void 0 !== t.length;
        },
        eL = ei("$ZodCheckMaxLength", (e, t) => {
          var n;
          eC.init(e, t),
            (n = e._zod.def).when ?? (n.when = eJ),
            (e._zod.check = (n) => {
              let r = n.value,
                i = r.length;
              if (
                ("string" == typeof r && i > t.maximum ? H(r) : i) <= t.maximum
              )
                return;
              let s = X(r);
              n.issues.push({
                origin: s,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eq = ei("$ZodCheckMinLength", (e, t) => {
          var n;
          eC.init(e, t),
            (n = e._zod.def).when ?? (n.when = eJ),
            (e._zod.check = (n) => {
              let r = n.value,
                i = r.length;
              if (
                ("string" == typeof r && i >= t.minimum && i < 2 * t.minimum
                  ? H(r)
                  : i) >= t.minimum
              )
                return;
              let s = X(r);
              n.issues.push({
                origin: s,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eW = ei("$ZodCheckLengthEquals", (e, t) => {
          var n;
          eC.init(e, t),
            (n = e._zod.def).when ?? (n.when = eJ),
            (e._zod.check = (n) => {
              let r = n.value,
                i = r.length,
                s =
                  "string" == typeof r && i >= t.length && i <= 2 * t.length
                    ? H(r)
                    : i;
              if (s === t.length) return;
              let o = X(r),
                a = s > t.length;
              n.issues.push({
                origin: o,
                ...(a
                  ? { code: "too_big", maximum: t.length }
                  : { code: "too_small", minimum: t.length }),
                inclusive: !0,
                exact: !0,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eV = ei("$ZodCheckStringFormat", (e, t) => {
          var n, r;
          eC.init(e, t),
            t.pattern
              ? ((n = e._zod).check ??
                (n.check = (n) => {
                  (t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                      n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: t.format,
                        input: n.value,
                        ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                        inst: e,
                        continue: !t.abort,
                      });
                }))
              : ((r = e._zod).check ?? (r.check = () => {}));
        }),
        eK = ei("$ZodCheckRegex", (e, t) => {
          eV.init(e, t),
            (e._zod.check = (n) => {
              (t.pattern.lastIndex = 0),
                t.pattern.test(n.value) ||
                  n.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: n.value,
                    pattern: t.pattern.toString(),
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        eB = ei("$ZodCheckLowerCase", (e, t) => {
          t.pattern ?? (t.pattern = eM), eV.init(e, t);
        }),
        eH = ei("$ZodCheckUpperCase", (e, t) => {
          t.pattern ?? (t.pattern = eU), eV.init(e, t);
        }),
        eX = ei("$ZodCheckIncludes", (e, t) => {
          eC.init(e, t);
          let n = T(t.includes),
            r = new RegExp(
              "number" == typeof t.position ? `^.{${t.position},}${n}` : n,
            );
          (t.pattern = r),
            (e._zod.check = (n) => {
              n.value.includes(t.includes, t.position) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "includes",
                  includes: t.includes,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eG = ei("$ZodCheckStartsWith", (e, t) => {
          eC.init(e, t);
          let n = RegExp(`^${T(t.prefix)}.*`);
          t.pattern ?? (t.pattern = n),
            (e._zod.check = (n) => {
              n.value.startsWith(t.prefix) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "starts_with",
                  prefix: t.prefix,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eY = ei("$ZodCheckEndsWith", (e, t) => {
          eC.init(e, t);
          let n = RegExp(`.*${T(t.suffix)}$`);
          t.pattern ?? (t.pattern = n),
            (e._zod.check = (n) => {
              n.value.endsWith(t.suffix) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "ends_with",
                  suffix: t.suffix,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eQ = ei("$ZodCheckOverwrite", (e, t) => {
          eC.init(e, t),
            (e._zod.check = (e) => {
              e.value = t.tx(e.value);
            });
        });
      class e0 {
        constructor(e = [], t = {}) {
          (this.content = []),
            (this.indent = 0),
            (this.args = e),
            (this.closed = t);
        }
        indented(e) {
          this.indent += 1;
          try {
            e(this);
          } finally {
            this.indent -= 1;
          }
        }
        write(e) {
          if ("function" == typeof e) {
            e(this, { execution: "sync" }), e(this, { execution: "async" });
            return;
          }
          let t = e.split("\n").filter((e) => e),
            n = Math.min(...t.map((e) => e.length - e.trimStart().length));
          for (let e of t
            .map((e) => e.slice(n))
            .map((e) => " ".repeat(2 * this.indent) + e))
            this.content.push(e);
        }
        compile() {
          let e = Function,
            t = this?.content ?? [""];
          return new e(
            ...Object.keys(this.closed),
            `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`,
          )(...Object.values(this.closed));
        }
      }
      let e1 = { major: 4, minor: 6, patch: 7 },
        e2 = ei(
          "$ZodType",
          (e, t) => {
            var n;
            e ?? (e = {}),
              (e._zod.def = t),
              (e._zod.bag = e._zod.bag || {}),
              (e._zod.version = e1);
            let r = e._zod.def.checks,
              i = e._zod.traits.has("$ZodCheck")
                ? [e, ...(r ?? [])]
                : r?.length
                  ? [...r]
                  : [];
            for (let t of i) for (let n of t._zod.onattach) n(e);
            if (0 === i.length)
              (n = e._zod).deferred ?? (n.deferred = []),
                e._zod.deferred?.push(() => {
                  e._zod.run = e._zod.parse;
                });
            else {
              let t = (t, n, r) => {
                  let i;
                  if (t.memo) return t;
                  let s = J(t);
                  for (let o of n) {
                    if (o._zod.def.when) {
                      if (
                        (function (e, t = 0) {
                          if (!0 === e.aborted) return !0;
                          for (let n = t; n < e.issues.length; n++)
                            if (e.issues[n]?.continue === !1) return !0;
                          return !1;
                        })(t) ||
                        !o._zod.def.when(t)
                      )
                        continue;
                    } else if (s) continue;
                    let n = t.issues.length,
                      a = o._zod.check(t);
                    if (a instanceof Promise && r?.async === !1) throw new es();
                    if (i || a instanceof Promise)
                      i = (i ?? Promise.resolve()).then(async () => {
                        await a,
                          t.issues.length !== n &&
                            (V(t.issues, n, e), s || (s = J(t, n)));
                      });
                    else {
                      if (t.issues.length === n) continue;
                      V(t.issues, n, e), s || (s = J(t, n));
                    }
                  }
                  return i ? i.then(() => t) : t;
                },
                n = (n, r, s) => {
                  if (J(n)) return (n.aborted = !0), n;
                  let o = t(r, i, s);
                  if (o instanceof Promise) {
                    if (!1 === s.async) throw new es();
                    return o.then((t) => e._zod.parse(t, s));
                  }
                  return e._zod.parse(o, s);
                };
              e._zod.run = (r, s) => {
                if (s.skipChecks) return e._zod.parse(r, s);
                if ("backward" === s.direction) {
                  let t = e._zod.parse(
                    { value: r.value, issues: [] },
                    { ...s, skipChecks: !0 },
                  );
                  return t instanceof Promise
                    ? t.then((e) => n(e, r, s))
                    : n(t, r, s);
                }
                let o = e._zod.parse(r, s);
                if (o instanceof Promise) {
                  if (!1 === s.async) throw new es();
                  return o.then((e) => t(e, i, s));
                }
                return t(o, i, s);
              };
            }
          },
          {
            get "~standard"() {
              return Y(this, "~standard", e9(this), !1);
            },
            set "~standard"(e) {
              Y(this, "~standard", e);
            },
          },
        ),
        e4 = (e, t) =>
          e.issues.length
            ? { issues: e.issues.map((e) => K(e, t, eu())) }
            : { value: e.value };
      function e9(e) {
        return {
          validate: (t) => {
            let n = { async: !1 };
            try {
              let r = e._zod.run({ value: t, issues: [] }, n);
              if (!(r instanceof Promise)) return e4(r, n);
            } catch (e) {}
            return (async function (e, t) {
              let n = { async: !0 };
              return e4(await e._zod.run({ value: t, issues: [] }, n), n);
            })(e, t);
          },
          vendor: "zod",
          version: 1,
        };
      }
      let e7 = ei("$ZodString", (e, t) => {
          e2.init(e, t),
            (e._zod.pattern = t.pattern ?? eF),
            (e._zod.parse = (n, r) => {
              if (t.coerce)
                try {
                  n.value = String(n.value);
                } catch (e) {}
              return (
                "string" == typeof n.value ||
                  n.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: n.value,
                    inst: e,
                  }),
                n
              );
            });
        }),
        e6 = ei("$ZodStringFormat", (e, t) => {
          eV.init(e, t), e7.init(e, t);
        }),
        e3 = ei("$ZodGUID", (e, t) => {
          t.pattern ?? (t.pattern = eO), e6.init(e, t);
        }),
        e5 = ei("$ZodUUID", (e, t) => {
          if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
              t.version
            ];
            if (void 0 === e)
              throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = e$(e));
          } else t.pattern ?? (t.pattern = e$());
          e6.init(e, t);
        }),
        e8 = ei("$ZodEmail", (e, t) => {
          t.pattern ?? (t.pattern = ex), e6.init(e, t);
        });
      function te(e) {
        try {
          if ("u" > typeof URL && "function" == typeof URL.canParse)
            return URL.canParse(e);
          return new URL(e), !0;
        } catch {
          return !1;
        }
      }
      let tt = /[\t\n\r]/g;
      function tn(e) {
        return e.replace(tt, "");
      }
      let tr = ei("$ZodURL", (e, t) => {
          e6.init(e, t),
            (e._zod.check = (n) => {
              try {
                var r, i;
                let s = n.value.trim(),
                  o =
                    "normalize" in t || "hostname" in t || "protocol" in t
                      ? (function (e, t) {
                          if (
                            !t.normalize &&
                            t.protocol?.source === ej.source &&
                            !/^https?:\/\//i.test(e)
                          )
                            return 1;
                          try {
                            if ("u" > typeof URL) {
                              let t = URL;
                              if ("function" == typeof t.parse)
                                return t.parse(e) ?? 2;
                            }
                            return new URL(e);
                          } catch {
                            return 2;
                          }
                        })(s, t)
                      : te(s) || 2;
                if (1 === o)
                  return void n.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  });
                if (2 === o)
                  return void n.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  });
                if (!0 === o) {
                  n.value = tn(s);
                  return;
                }
                t.hostname &&
                  (((r = t.hostname).lastIndex = 0), !r.test(o.hostname)) &&
                  n.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: t.hostname.source,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  }),
                  t.protocol &&
                    (((i = t.protocol).lastIndex = 0),
                    !i.test(
                      o.protocol.endsWith(":")
                        ? o.protocol.slice(0, -1)
                        : o.protocol,
                    )) &&
                    n.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid protocol",
                      pattern: t.protocol.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    }),
                  (n.value = t.normalize ? o.href : tn(s));
                return;
              } catch (r) {
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        ti = ei("$ZodEmoji", (e, t) => {
          t.pattern ??
            (t.pattern = RegExp(
              "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
              "u",
            )),
            e6.init(e, t);
        }),
        ts = ei("$ZodNanoID", (e, t) => {
          var n;
          if (
            void 0 !== t.length &&
            (!Number.isInteger(t.length) || t.length < 1)
          )
            throw Error(`Invalid nanoid length: ${t.length}`);
          t.pattern ??
            (t.pattern =
              void 0 === t.length
                ? ez
                : ((n = t.length), RegExp(`^[a-zA-Z0-9_-]{${n}}$`))),
            e6.init(e, t);
        }),
        to = ei("$ZodCUID", (e, t) => {
          t.pattern ?? (t.pattern = ev), e6.init(e, t);
        }),
        ta = ei("$ZodCUID2", (e, t) => {
          t.pattern ?? (t.pattern = ey), e6.init(e, t);
        }),
        tu = ei("$ZodULID", (e, t) => {
          t.pattern ?? (t.pattern = e_), e6.init(e, t);
        }),
        tl = ei("$ZodXID", (e, t) => {
          t.pattern ?? (t.pattern = ew), e6.init(e, t);
        }),
        tc = ei("$ZodKSUID", (e, t) => {
          t.pattern ?? (t.pattern = eb), e6.init(e, t);
        }),
        tf = ei("$ZodISODateTime", (e, t) => {
          let n, r, i;
          t.pattern ??
            ((n = ["Z"]),
            t.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
            (r = `${eN({ precision: t.precision, seconds: !0 })}(?:${n.join("|")})`),
            (i = t.local ? `${r}|${eN({ precision: t.precision })}` : r),
            (t.pattern = RegExp(`^${eT}T(?:${i})$`))),
            e6.init(e, t);
        }),
        td = ei("$ZodISODate", (e, t) => {
          t.pattern ?? (t.pattern = eI), e6.init(e, t);
        }),
        th = ei("$ZodISOTime", (e, t) => {
          t.pattern ?? (t.pattern = RegExp(`^${eN(t)}$`)), e6.init(e, t);
        }),
        tp = ei("$ZodISODuration", (e, t) => {
          t.pattern ?? (t.pattern = ek), e6.init(e, t);
        }),
        tm = ei("$ZodIPv4", (e, t) => {
          t.pattern ?? (t.pattern = eE), e6.init(e, t);
        }),
        tg = /^[0-9a-fA-F:.]+$/;
      function tv(e) {
        return !!tg.test(e) && te(`http://[${e}]`);
      }
      let ty = ei("$ZodIPv6", (e, t) => {
          t.pattern ?? (t.pattern = eS),
            e6.init(e, t),
            (e._zod.check = (n) => {
              tv(n.value) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        t_ = ei("$ZodCIDRv4", (e, t) => {
          t.pattern ?? (t.pattern = eP), e6.init(e, t);
        }),
        tw = ei("$ZodCIDRv6", (e, t) => {
          t.pattern ?? (t.pattern = eZ),
            e6.init(e, t),
            (e._zod.check = (n) => {
              !(function (e) {
                let t = e.split("/");
                if (2 !== t.length) return !1;
                let [n, r] = t;
                if (!r) return !1;
                let i = Number(r);
                return `${i}` === r && !(i < 0) && !(i > 128) && tv(n);
              })(n.value) &&
                n.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        });
      function tb(e) {
        if ("" === e) return !0;
        if (/\s/.test(e) || e.length % 4 != 0) return !1;
        try {
          return atob(e), !0;
        } catch {
          return !1;
        }
      }
      let tz = /^[0-9a-zA-Z+/]*={0,2}$/,
        tk = ei("$ZodBase64", (e, t) => {
          t.pattern ?? (t.pattern = tz),
            e6.init(e, t),
            (e._zod.check = (n) => {
              tb(n.value) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tO = /^[A-Za-z0-9_-]*$/,
        t$ = ei("$ZodBase64URL", (e, t) => {
          t.pattern ?? (t.pattern = tO),
            e6.init(e, t),
            (e._zod.check = (n) => {
              !(function (e) {
                if (!tO.test(e)) return !1;
                let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                return tb(t.padEnd(4 * Math.ceil(t.length / 4), "="));
              })(n.value) &&
                n.issues.push({
                  code: "invalid_format",
                  format: "base64url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tx = ei("$ZodE164", (e, t) => {
          t.pattern ?? (t.pattern = eA), e6.init(e, t);
        }),
        tE = ei("$ZodJWT", (e, t) => {
          e6.init(e, t),
            (e._zod.check = (n) => {
              !(function (e, t = null) {
                try {
                  let n = e.split(".");
                  if (3 !== n.length) return !1;
                  let [r] = n;
                  if (!r) return !1;
                  let i = JSON.parse(atob(r));
                  if (
                    ("typ" in i && i?.typ !== "JWT") ||
                    !i.alg ||
                    (t && (!("alg" in i) || i.alg !== t))
                  )
                    return !1;
                  return !0;
                } catch {
                  return !1;
                }
              })(n.value, t.alg) &&
                n.issues.push({
                  code: "invalid_format",
                  format: "jwt",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tS = ei("$ZodUnknown", (e, t) => {
          e2.init(e, t), (e._zod.parse = (e) => e);
        }),
        tP = ei("$ZodNever", (e, t) => {
          e2.init(e, t),
            (e._zod.parse = (t, n) => (
              t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e,
              }),
              t
            ));
        }),
        tZ = (e) => (Array.isArray(e) ? e.length : -1);
      function tj(e, t, n) {
        e.issues.length && t.issues.push(...L(n, e.issues)),
          (t.value[n] = e.value);
      }
      let tA = ei("$ZodArray", (e, t) => {
        e2.init(e, t);
        let n = ea.memoizer;
        n?.attach(e),
          (e._zod.parse = (r, i) => {
            let s = r.value;
            if (!Array.isArray(s))
              return (
                r.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: s,
                  inst: e,
                }),
                r
              );
            r.value = n ? n.alloc(e, r, Array(s.length), i) : Array(s.length);
            let o = [],
              a = i?.abortEarly;
            for (let e = 0; e < s.length; e++) {
              let n = s[e],
                u = t.element._zod.run({ value: n, issues: [] }, i);
              if (u instanceof Promise) o.push(u.then((t) => tj(t, r, e)));
              else if ((tj(u, r, e), a && 0 !== u.issues.length && J(u))) break;
            }
            return o.length ? Promise.all(o).then(() => r) : r;
          }),
          (function (e, t) {
            let n = W(e._zod.def.checks);
            if (!n.length) return;
            let r = Math.min(...n.map((e) => e[0])),
              i = e._zod.parse;
            e._zod.parse = (n, s) => {
              let o = t(n.value);
              if (o > r && !s?.skipChecks && s?.direction !== "backward") {
                for (let [t, r] of W(e._zod.def.checks))
                  if (o > t && r._zod.def.when(n)) {
                    let t = n.issues.length;
                    return (
                      r._zod.check(n),
                      (n.issues[t].continue = !1),
                      V(n.issues, t, e),
                      n
                    );
                  }
              }
              return i(n, s);
            };
          })(e, tZ);
      });
      function tT(e, t, n, r, i, s) {
        let o = n in r,
          a = "optional" === s;
        if (o || !a || "optional" !== i) {
          if (e.issues.length) {
            if (void 0 !== i && a && !o) return;
            t.issues.push(...L(n, e.issues));
          }
          if (!o && void 0 === i) {
            e.issues.length ||
              t.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [n],
              });
            return;
          }
          void 0 === e.value
            ? (o || ("defaulted" === i && !a)) && (t.value[n] = void 0)
            : (t.value[n] = e.value);
        }
      }
      let tI = [];
      function tN(e) {
        var t;
        let n = Object.keys(e.shape),
          r = Object.getOwnPropertySymbols(e.shape),
          i = r.length ? r : tI,
          s = i.length ? [...n, ...i] : n;
        for (let t of s)
          if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(
              `Invalid element at key "${String(t)}": expected a Zod schema`,
            );
        let o = Object.keys((t = e.shape)).filter(
          (e) => void 0 !== t[e]._zod.optin && "optional" === t[e]._zod.optout,
        );
        return {
          ...e,
          allKeys: s,
          symbolKeys: i,
          keySet: new Set(n),
          numKeys: n.length,
          optionalKeys: new Set(o),
        };
      }
      function tF(e, t, n, r, i, s, o) {
        let a = [],
          u = i.keySet,
          l = i.catchall._zod,
          c = l.def.type,
          f = l.optin,
          d = l.optout,
          h = 0;
        for (let i in t) {
          if (o && n.issues.length !== h) {
            if (J(n, h)) break;
            h = n.issues.length;
          }
          if (u.has(i)) continue;
          if ("__proto__" === i) {
            "never" === c && a.push(i);
            continue;
          }
          if ("never" === c) {
            a.push(i);
            continue;
          }
          let s = l.run({ value: t[i], issues: [] }, r);
          s instanceof Promise
            ? e.push(s.then((e) => tT(e, n, i, t, f, d)))
            : tT(s, n, i, t, f, d);
        }
        return (a.length &&
          n.issues.push({
            code: "unrecognized_keys",
            keys: a,
            input: t,
            inst: s,
            continue: !0,
          }),
        e.length)
          ? Promise.all(e).then(() => n)
          : n;
      }
      let tR = ei("$ZodObject", (e, t) => {
          let n;
          e2.init(e, t);
          let r = Object.getOwnPropertyDescriptor(t, "shape"),
            i = r?.get ? r.get.raw : (t.shape ?? {});
          if (i) {
            let e = () => {
              let n = { ...i };
              return (
                Object.defineProperty(t, "shape", { value: n }), (e.raw = n), n
              );
            };
            (e.raw = i), Object.defineProperty(t, "shape", { get: e });
          }
          let s = new y(() => tN(t));
          et(e, "propValues", (e) => {
            let t = e.def.shape,
              n = {};
            for (let e in t) {
              let r = t[e]._zod;
              if (r.values) {
                for (let t of (Object.prototype.hasOwnProperty.call(n, e) ||
                  w(n, e, new Set()),
                r.values))
                  n[e].add(t);
                void 0 !== r.optin && n[e].add(void 0);
              }
            }
            return n;
          });
          let o = t.catchall,
            a = ea.memoizer;
          a?.attach(e),
            (e._zod.parse = (t, r) => {
              n ?? (n = s.value);
              let i = t.value;
              if (!S(i))
                return (
                  t.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                  t
                );
              t.value = a ? a.alloc(e, t, {}, r) : {};
              let u = [],
                l = n.shape,
                c = r?.abortEarly,
                f = t.issues.length;
              for (let e of n.allKeys) {
                if (c && t.issues.length !== f) {
                  if (J(t, f)) break;
                  f = t.issues.length;
                }
                if ("__proto__" === e) continue;
                let n = l[e],
                  s = n._zod.optin,
                  o = n._zod.optout,
                  a = n._zod.run({ value: i[e], issues: [] }, r);
                a instanceof Promise
                  ? u.push(a.then((n) => tT(n, t, e, i, s, o)))
                  : tT(a, t, e, i, s, o);
              }
              return o
                ? tF(u, i, t, r, s.value, e, !0 === c)
                : u.length
                  ? Promise.all(u).then(() => t)
                  : t;
            });
        }),
        tD = ei("$ZodObjectJIT", (e, t) => {
          let n, r;
          tR.init(e, t);
          let i = e._zod.parse,
            s = new y(() => tN(t)),
            o = ea.memoizer,
            a = !ea.jitless,
            u = a && P.value,
            l = t.catchall;
          e._zod.parse = (c, f) => {
            r ?? (r = s.value);
            let d = c.value;
            return S(d)
              ? a && u && f?.async === !1 && !0 !== f.jitless
                ? (n ||
                    (n = ((t) => {
                      let n = s.value,
                        r = n.symbolKeys,
                        i = new e0(["payload", "ctx"], {
                          shape: t,
                          inst: e,
                          memo: o,
                          syms: r,
                        }),
                        a = (e) =>
                          `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                        u = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
                      i.write("const input = payload.value;");
                      let l = Object.create(null),
                        c = 0;
                      for (let e of n.allKeys) l[e] = `key_${c++}`;
                      for (let e of (i.write(
                        o
                          ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
                          : "const newResult = {};",
                      ),
                      n.allKeys)) {
                        if ("__proto__" === e) continue;
                        let n = l[e],
                          s =
                            "symbol" == typeof e
                              ? `syms[${r.indexOf(e)}]`
                              : JSON.stringify(e),
                          o = `${s} in input`,
                          c = t[e],
                          f = c?._zod?.optin,
                          d = void 0 !== f,
                          h = c?._zod?.optout === "optional";
                        if ((i.write(`const ${n} = ${a(s)};`), d && h)) {
                          let e =
                            "optional" === f
                              ? `${n}_present`
                              : `${n}.value !== undefined || ${n}_present`;
                          i.write(`
        const ${n}_present = ${o};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${u(n, s)}
          }

          if (${e}) {
            newResult[${s}] = ${n}.value;
          }
        }

      `);
                        } else
                          d
                            ? (i.write(`
        if (${n}.issues.length) {${u(n, s)}
        }
      `),
                              "defaulted" === f
                                ? i.write(`newResult[${s}] = ${n}.value;`)
                                : i.write(`
        if (${n}.value !== undefined || ${o}) {
          newResult[${s}] = ${n}.value;
        }
      `))
                            : i.write(`
        const ${n}_present = ${o};
        if (${n}.issues.length) {${u(n, s)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${s}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${s}] = ${n}.value;
        }

      `);
                      }
                      return (
                        i.write("payload.value = newResult;"),
                        i.write("return payload;"),
                        i.compile()
                      );
                    })(t.shape)),
                  (c = n(c, f)),
                  l)
                  ? tF([], d, c, f, r, e, f?.abortEarly === !0)
                  : c
                : i(c, f)
              : (c.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: d,
                  inst: e,
                }),
                c);
          };
        });
      function tM(e, t, n, r) {
        for (let n of e)
          if (0 === n.issues.length) return (t.value = n.value), t;
        let i = e.filter((e) => !J(e));
        return 1 === i.length
          ? ((t.value = i[0].value), i[0])
          : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => K(e, r, eu()))),
            }),
            t);
      }
      let tU = ei("$ZodUnion", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              e.def.options.some((e) => "defaulted" === e._zod.optin)
                ? "defaulted"
                : e.def.options.some((e) => void 0 !== e._zod.optin)
                  ? "optional"
                  : void 0,
            ),
            et(e, "optout", (e) =>
              e.def.options.some((e) => "optional" === e._zod.optout)
                ? "optional"
                : void 0,
            ),
            et(e, "values", (e) => {
              if (e.def.options.every((e) => e._zod.values))
                return new Set(
                  e.def.options.flatMap((e) => Array.from(e._zod.values)),
                );
            }),
            et(e, "pattern", (e) => {
              if (e.def.options.every((e) => e._zod.pattern)) {
                let t = e.def.options.map((e) => e._zod.pattern);
                return RegExp(`^(${t.map((e) => _(e.source)).join("|")})$`);
              }
            });
          let n = 1 === t.options.length ? t.options[0]._zod.run : null;
          e._zod.parse = (r, i) => {
            if (n) return n(r, i);
            let s = !1,
              o = [];
            for (let e of t.options) {
              let t = e._zod.run({ value: r.value, issues: [] }, i);
              if (t instanceof Promise) o.push(t), (s = !0);
              else {
                if (0 === t.issues.length) return t;
                o.push(t);
              }
            }
            return s
              ? Promise.all(o).then((t) => tM(t, r, e, i))
              : tM(o, r, e, i);
          };
        }),
        tC = ei("$ZodIntersection", (e, t) => {
          e2.init(e, t),
            (e._zod.parse = (e, n) => {
              let r = e.value,
                i = t.left._zod.run({ value: r, issues: [] }, n),
                s = t.right._zod.run({ value: r, issues: [] }, n);
              return i instanceof Promise || s instanceof Promise
                ? Promise.all([i, s]).then(([t, n]) => tJ(e, t, n))
                : tJ(e, i, s);
            });
        });
      function tJ(e, t, n) {
        let r,
          i = new Map(),
          s = new Map(),
          o = (e, t) => {
            let n;
            if ("unrecognized_keys" !== e.code || e.path?.length)
              if (
                "invalid_key" !== e.code ||
                "record" !== e.origin ||
                e.path?.length !== 1
              )
                return !1;
              else {
                let t = String(e.path[0]);
                s.has(t) || s.set(t, e), (n = [t]);
              }
            else r ?? (r = e), (n = e.keys);
            for (let e of n) i.has(e) || i.set(e, {}), (i.get(e)[t] = !0);
            return !0;
          };
        for (let n of t.issues) o(n, "l") || e.issues.push(n);
        for (let t of n.issues) o(t, "r") || e.issues.push(t);
        let a = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
        if (a.length) {
          let t = r ? a.filter((e) => r.keys.includes(e)) : [];
          for (let n of (t.length && e.issues.push({ ...r, keys: t }), a))
            !t.includes(n) && s.has(n) && e.issues.push(s.get(n));
        }
        let u = (function e(t, n) {
          if (t === n || (t instanceof Date && n instanceof Date && +t == +n))
            return { valid: !0, data: t };
          if (Z(t) && Z(n)) {
            let r = Object.keys(n),
              i = Object.keys(t).filter((e) => -1 !== r.indexOf(e)),
              s = { ...t, ...n };
            for (let r of (Object.prototype.hasOwnProperty.call(
              s,
              "__proto__",
            ) && delete s.__proto__,
            i)) {
              if ("__proto__" === r) continue;
              let i = e(t[r], n[r]);
              if (!i.valid)
                return { valid: !1, mergeErrorPath: [r, ...i.mergeErrorPath] };
              s[r] = i.data;
            }
            return { valid: !0, data: s };
          }
          if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
            let r = [];
            for (let i = 0; i < t.length; i++) {
              let s = e(t[i], n[i]);
              if (!s.valid)
                return { valid: !1, mergeErrorPath: [i, ...s.mergeErrorPath] };
              r.push(s.data);
            }
            return { valid: !0, data: r };
          }
          return { valid: !1, mergeErrorPath: [] };
        })(t.value, n.value);
        if (!u.valid) {
          if (J(e)) return e;
          throw Error(
            `Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`,
          );
        }
        return (e.value = u.data), e;
      }
      let tL = ei("$ZodRecord", (e, t) => {
          e2.init(e, t);
          let n = ea.memoizer;
          n?.attach(e),
            (e._zod.parse = (r, i) => {
              let s = r.value;
              if (!Z(s))
                return (
                  r.issues.push({
                    expected: "record",
                    code: "invalid_type",
                    input: s,
                    inst: e,
                  }),
                  r
                );
              let o = [],
                a = t.keyType._zod.values;
              if (a && !t.partial) {
                let u;
                r.value = n ? n.alloc(e, r, {}, i) : {};
                let l = new Set();
                for (let n of a)
                  if (
                    "string" == typeof n ||
                    "number" == typeof n ||
                    "symbol" == typeof n
                  ) {
                    if (
                      (l.add("number" == typeof n ? n.toString() : n),
                      "__proto__" === n)
                    )
                      continue;
                    let a = t.keyType._zod.run({ value: n, issues: [] }, i);
                    if (a instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    if (a.issues.length) {
                      r.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: a.issues.map((e) => K(e, i, eu())),
                        input: n,
                        path: [n],
                        inst: e,
                      });
                      continue;
                    }
                    let u = a.value;
                    if ("__proto__" === u) continue;
                    let c = t.valueType._zod.run(
                      { value: s[n], issues: [] },
                      i,
                    );
                    c instanceof Promise
                      ? o.push(
                          c.then((e) => {
                            e.issues.length && r.issues.push(...L(n, e.issues)),
                              (r.value[u] = e.value);
                          }),
                        )
                      : (c.issues.length && r.issues.push(...L(n, c.issues)),
                        (r.value[u] = c.value));
                  }
                for (let e in s)
                  if (!l.has(e))
                    if ("loose" === t.mode) {
                      if ("__proto__" === e) continue;
                      r.value[e] = s[e];
                    } else (u = u ?? []).push(e);
                u &&
                  u.length > 0 &&
                  r.issues.push({
                    code: "unrecognized_keys",
                    input: s,
                    inst: e,
                    keys: u,
                    continue: !0,
                  });
              } else {
                let u;
                for (let l of ((r.value = n ? n.alloc(e, r, {}, i) : {}),
                Reflect.ownKeys(s))) {
                  if (
                    "__proto__" === l ||
                    !Object.prototype.propertyIsEnumerable.call(s, l)
                  )
                    continue;
                  let n = t.keyType._zod.run({ value: l, issues: [] }, i);
                  if (n instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently",
                    );
                  if ("string" == typeof l && eD.test(l) && n.issues.length) {
                    let e = t.keyType._zod.run(
                      { value: Number(l), issues: [] },
                      i,
                    );
                    if (e instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    0 === e.issues.length && (n = e);
                  }
                  if (n.issues.length) {
                    "loose" === t.mode
                      ? (r.value[l] = s[l])
                      : a
                        ? (u = u ?? []).push(l)
                        : r.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: n.issues.map((e) => K(e, i, eu())),
                            input: l,
                            path: [l],
                            inst: e,
                          });
                    continue;
                  }
                  let c = n.value;
                  if ("__proto__" === c) continue;
                  let f = t.valueType._zod.run({ value: s[l], issues: [] }, i);
                  f instanceof Promise
                    ? o.push(
                        f.then((e) => {
                          e.issues.length && r.issues.push(...L(l, e.issues)),
                            (r.value[c] = e.value);
                        }),
                      )
                    : (f.issues.length && r.issues.push(...L(l, f.issues)),
                      (r.value[c] = f.value));
                }
                u &&
                  u.length > 0 &&
                  r.issues.push({
                    code: "unrecognized_keys",
                    input: s,
                    inst: e,
                    keys: u,
                    continue: !0,
                  });
              }
              return o.length ? Promise.all(o).then(() => r) : r;
            });
        }),
        tq = ei("$ZodEnum", (e, t) => {
          e2.init(e, t);
          let n = m(t.entries),
            r = new Set(n);
          (e._zod.values = r),
            et(e, "pattern", (e) => {
              let t = m(e.def.entries).filter((e) => A.has(typeof e));
              return new RegExp(
                t.length
                  ? `^(${t.map((e) => T(e.toString())).join("|")})$`
                  : "^[^\\s\\S]$",
              );
            }),
            (e._zod.parse = (t, i) => {
              let s = t.value;
              return (
                r.has(s) ||
                  t.issues.push({
                    code: "invalid_value",
                    values: n,
                    input: s,
                    inst: e,
                  }),
                t
              );
            });
        }),
        tW = ei("$ZodTransform", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "optional"),
            ea.memoizer?.guard(e),
            (e._zod.parse = (n, r) => {
              if ("backward" === r.direction) throw new eo(e.constructor.name);
              let i = t.transform(n.value, n);
              if (r.async)
                return (i instanceof Promise ? i : Promise.resolve(i)).then(
                  (e) => ((n.value = e), n),
                );
              if (i instanceof Promise) throw new es();
              return (n.value = i), n;
            });
        });
      function tV(e, t) {
        return (e.value = t.issues.length ? void 0 : t.value), e;
      }
      let tK = ei("$ZodOptional", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              "defaulted" === e.def.innerType._zod.optin
                ? "defaulted"
                : "optional",
            ),
            (e._zod.optout = "optional"),
            et(e, "values", (e) => {
              let t = e.def.innerType._zod.values;
              return t ? new Set([...t, void 0]) : void 0;
            }),
            et(e, "pattern", (e) => {
              let t = e.def.innerType._zod.pattern;
              return t ? RegExp(`^(${_(t.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
              if (void 0 === e.value) {
                if ("defaulted" !== t.innerType._zod.optin) return e;
                let r = t.innerType._zod.run({ value: e.value, issues: [] }, n);
                return r instanceof Promise
                  ? r.then((t) => tV(e, t))
                  : tV(e, r);
              }
              return t.innerType._zod.run(e, n);
            });
        }),
        tB = ei("$ZodExactOptional", (e, t) => {
          tK.init(e, t),
            et(e, "values", (e) => e.def.innerType._zod.values),
            et(e, "pattern", (e) => e.def.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
        }),
        tH = ei("$ZodNullable", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) => e.def.innerType._zod.optin),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "pattern", (e) => {
              let t = e.def.innerType._zod.pattern;
              return t ? RegExp(`^(${_(t.source)}|null)$`) : void 0;
            }),
            et(e, "values", (e) =>
              e.def.innerType._zod.values
                ? new Set([...e.def.innerType._zod.values, null])
                : void 0,
            ),
            (e._zod.parse = (e, n) =>
              null === e.value ? e : t.innerType._zod.run(e, n));
        }),
        tX = ei("$ZodDefault", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              if (void 0 === e.value) return (e.value = t.defaultValue), e;
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => tG(e, t)) : tG(r, t);
            });
        });
      function tG(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
      }
      let tY = ei("$ZodPrefault", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, n) => (
              "backward" === n.direction ||
                (void 0 === e.value && (e.value = t.defaultValue)),
              t.innerType._zod.run(e, n)
            ));
        }),
        tQ = ei("$ZodNonOptional", (e, t) => {
          e2.init(e, t),
            et(e, "values", (e) => {
              let t = e.def.innerType._zod.values;
              return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, r) => {
              let i = t.innerType._zod.run(n, r);
              return i instanceof Promise ? i.then((t) => t0(t, e)) : t0(i, e);
            });
        });
      function t0(e, t) {
        return (
          e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: e.value,
              inst: t,
            }),
          e
        );
      }
      function t1(e, t, n, r) {
        return (
          t.issues.length
            ? (e.value = n.catchValue({
                ...t,
                value: e.value,
                error: { issues: t.issues.map((e) => K(e, r, eu())) },
                input: e.value,
              }))
            : ((e.value = t.value), t.memo && (e.memo = !0)),
          e
        );
      }
      let t2 = ei("$ZodCatch", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              "defaulted" === e.def.innerType._zod.optin
                ? "defaulted"
                : "optional",
            ),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              let r = t.innerType._zod.run({ value: e.value, issues: [] }, n);
              return r instanceof Promise
                ? r.then((r) => t1(e, r, t, n))
                : t1(e, r, t, n);
            });
        }),
        t4 = ei("$ZodPipe", (e, t) => {
          e2.init(e, t),
            et(e, "values", (e) => e.def.in._zod.values),
            et(e, "optin", (e) => e.def.in._zod.optin),
            et(e, "optout", (e) => e.def.out._zod.optout),
            et(e, "propValues", (e) => e.def.in._zod.propValues),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) {
                let r = t.out._zod.run(e, n);
                return r instanceof Promise
                  ? r.then((e) => t9(e, t.in, n))
                  : t9(r, t.in, n);
              }
              let r = t.in._zod.run(e, n);
              return r instanceof Promise
                ? r.then((e) => t9(e, t.out, n))
                : t9(r, t.out, n);
            });
        });
      function t9(e, t, n) {
        return e.issues.some((e) => "unrecognized_keys" !== e.code)
          ? ((e.aborted = !0), e)
          : t._zod.run({ value: e.value, issues: e.issues }, n);
      }
      let t7 = ei("$ZodReadonly", (e, t) => {
        e2.init(e, t),
          et(e, "propValues", (e) => e.def.innerType._zod.propValues),
          et(e, "values", (e) => e.def.innerType._zod.values),
          et(e, "optin", (e) => e.def.innerType?._zod?.optin),
          et(e, "optout", (e) => e.def.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(t6) : t6(r);
          });
      });
      function t6(e) {
        return e.memo || (e.value = Object.freeze(e.value)), e;
      }
      let t3 = ei("$ZodCustom", (e, t) => {
        eC.init(e, t),
          e2.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => t5(t, n, r, e));
            t5(i, n, r, e);
          });
      });
      function t5(e, t, n, r) {
        if (!e) {
          let e = {
            code: "custom",
            input: n,
            inst: r,
            path: [...(r._zod.def.path ?? [])],
            continue: !r._zod.def.abort,
          };
          r._zod.def.params && (e.params = r._zod.def.params),
            t.issues.push(G(e));
        }
      }
      (i = globalThis).__zod_globalRegistry ??
        (i.__zod_globalRegistry = new (class e {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(e, ...t) {
            let n = t[0];
            return (
              this._map.set(e, n),
              n &&
                "object" == typeof n &&
                "id" in n &&
                this._idmap.set(n.id, e),
              this
            );
          }
          clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
          }
          remove(e) {
            let t = this._map.get(e);
            return (
              t &&
                "object" == typeof t &&
                "id" in t &&
                this._idmap.delete(t.id),
              this._map.delete(e),
              this
            );
          }
          get(e) {
            let t = e._zod.parent;
            if (t) {
              let n = { ...(this.get(t) ?? {}) };
              delete n.id;
              let r = { ...n, ...this._map.get(e) };
              return Object.keys(r).length ? r : void 0;
            }
            return this._map.get(e);
          }
          has(e) {
            return this._map.has(e);
          }
        })());
      let t8 = globalThis.__zod_globalRegistry;
      function ne(e, t) {
        return new eL({ check: "max_length", ...N(t), maximum: e });
      }
      function nt(e, t) {
        return new eq({ check: "min_length", ...N(t), minimum: e });
      }
      function nn(e, t) {
        return new eW({ check: "length_equals", ...N(t), length: e });
      }
      function nr(e) {
        return new eQ({ check: "overwrite", tx: e });
      }
      function ni(e, ...t) {
        for (let n of t)
          for (let t of Reflect.ownKeys(n))
            Object.prototype.propertyIsEnumerable.call(n, t) && w(e, t, n[t]);
        return e;
      }
      function ns(e) {
        let t = e?.target ?? "draft-2020-12";
        return (
          "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? t8,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            sharedDefsExtractedFor: void 0,
            sharedEmitDoneFor: void 0,
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            intersections: [],
            deferred: [],
            external: e?.external ?? void 0,
          }
        );
      }
      function no(e, t, n, r, i) {
        let s =
          "function" == typeof t.unrepresentable
            ? t.unrepresentable({ zodSchema: e, path: r.path, message: i })
            : t.unrepresentable;
        if ("any" === s) return !1;
        if (void 0 === s || "throw" === s) throw Error(i);
        return Object.assign(n, s), !0;
      }
      function na(e, t, n = { path: [], schemaPath: [] }) {
        var r;
        let i = e._zod.def,
          s = t.seen.get(e);
        if (s)
          return (
            s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema
          );
        let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
        t.seen.set(e, o),
          (t.sharedDefsExtractedFor = void 0),
          (t.sharedEmitDoneFor = void 0);
        let a = e._zod.toJSONSchema?.();
        if (a) o.schema = a;
        else {
          let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
          if (e._zod.processJSONSchema)
            e._zod.processJSONSchema(t, o.schema, r);
          else {
            let n = o.schema,
              s = t.processors[i.type];
            if (!s)
              throw Error(
                `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
              );
            s(e, t, n, r);
          }
          let s = e._zod.parent;
          s &&
            (o.ref || (o.ref = s), na(s, t, r), (t.seen.get(s).isParent = !0));
        }
        let u = t.metadataRegistry.get(e);
        return (
          u && ni(o.schema, u),
          "input" === t.io &&
            (function e(t, n) {
              let r = n ?? { seen: new Set() };
              if (r.seen.has(t)) return !1;
              r.seen.add(t);
              let i = t._zod.def;
              if ("transform" === i.type) return !0;
              if ("array" === i.type) return e(i.element, r);
              if ("set" === i.type) return e(i.valueType, r);
              if ("lazy" === i.type) return e(i.getter(), r);
              if (
                "promise" === i.type ||
                "optional" === i.type ||
                "nonoptional" === i.type ||
                "nullable" === i.type ||
                "readonly" === i.type ||
                "default" === i.type ||
                "prefault" === i.type ||
                "catch" === i.type
              )
                return e(i.innerType, r);
              if ("intersection" === i.type)
                return e(i.left, r) || e(i.right, r);
              if ("record" === i.type || "map" === i.type)
                return e(i.keyType, r) || e(i.valueType, r);
              if ("pipe" === i.type)
                return (
                  !!t._zod.traits.has("$ZodCodec") || e(i.in, r) || e(i.out, r)
                );
              if ("object" === i.type) {
                for (let t in i.shape) if (e(i.shape[t], r)) return !0;
                return !1;
              }
              if ("union" === i.type) {
                for (let t of i.options) if (e(t, r)) return !0;
                return !1;
              }
              if ("tuple" === i.type) {
                for (let t of i.items) if (e(t, r)) return !0;
                if (i.rest && e(i.rest, r)) return !0;
              }
              return !1;
            })(e) &&
            (delete o.schema.examples, delete o.schema.default),
          "input" === t.io &&
            "_prefault" in o.schema &&
            ((r = o.schema).default ?? (r.default = o.schema._prefault)),
          delete o.schema._prefault,
          t.seen.get(e).schema
        );
      }
      function nu(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function nl(e, t) {
        let n = e.seen.get(t);
        if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
        if (e.external && e.sharedDefsExtractedFor === e.external) return;
        let r = new Map();
        for (let t of e.seen.entries()) {
          let n = e.metadataRegistry.get(t[0])?.id;
          if (n) {
            let e = r.get(n);
            if (e && e !== t[0])
              throw Error(
                `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
              );
            r.set(n, t[0]);
          }
        }
        let i = (t) => {
          if (t[1].schema.$ref) return;
          let r = t[1],
            { ref: i, defId: s } = ((t) => {
              let r = "draft-2020-12" === e.target ? "$defs" : "definitions";
              if (e.external) {
                let n = e.external.registry.get(t[0])?.id,
                  i = e.external.uri ?? ((e) => e);
                if (n) return { ref: i(n) };
                let s = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                return (
                  (t[1].defId = s),
                  { defId: s, ref: `${i("__shared")}#/${r}/${nu(s)}` }
                );
              }
              let i = `#/${r}/`;
              if (t[1] === n && !t[1].schema.id) return { ref: "#" };
              let s = t[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: s, ref: i + nu(s) };
            })(t);
          (r.def = { ...r.schema }), s && (r.defId = s);
          let o = r.schema;
          for (let e in o) delete o[e];
          o.$ref = i;
        };
        if ("throw" === e.cycles)
          for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
              throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let n of e.seen.entries()) {
          let r = n[1];
          if (t === n[0]) {
            i(n);
            continue;
          }
          if (e.external) {
            let r = e.external.registry.get(n[0])?.id;
            if (t !== n[0] && r) {
              i(n);
              continue;
            }
          }
          if (e.metadataRegistry.get(n[0])?.id || r.cycle) {
            i(n);
            continue;
          }
          r.count > 1 && "ref" === e.reused && i(n);
        }
        e.external && (e.sharedDefsExtractedFor = e.external);
      }
      let nc = new Set([
          "type",
          "properties",
          "required",
          "additionalProperties",
        ]),
        nf = ["oneOf", "anyOf"];
      function nd(e) {
        let t = e.additionalProperties;
        return void 0 === t || !1 === t || "object" != typeof t || null === t
          ? null
          : Object.keys(t).length
            ? t
            : null;
      }
      function nh(e) {
        let t = [];
        for (let n of e) {
          if ("object" != typeof n || "object" !== n.type) return null;
          for (let e in n) if (!nc.has(e)) return null;
          t.push(n);
        }
        let n = {},
          r = new Set();
        for (let e of t) {
          for (let r in e.properties) {
            if (Object.prototype.hasOwnProperty.call(n, r)) continue;
            let e = [];
            for (let n of t) {
              let t = n.properties?.[r] ?? nd(n);
              null != t &&
                (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) ||
                  e.push(t));
            }
            w(n, r, 1 === e.length ? e[0] : (nh(e) ?? { allOf: e }));
          }
          for (let t of e.required ?? []) r.add(t);
        }
        let i = { type: "object", properties: n };
        if (
          (r.size && (i.required = [...r]),
          t.every((e) => !1 === e.additionalProperties))
        )
          i.additionalProperties = !1;
        else {
          let e = [];
          for (let n of t) {
            let t = nd(n);
            t &&
              !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) &&
              e.push(t);
          }
          1 === e.length
            ? (i.additionalProperties = e[0])
            : e.length > 1 && (i.additionalProperties = { allOf: e });
        }
        return i;
      }
      function np(e, t) {
        let n = e.seen.get(t);
        if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
        let r = (t) => {
          let n = e.seen.get(t);
          if (null === n.ref) return;
          let i = n.def ?? n.schema,
            s = { ...i },
            o = n.ref;
          if (((n.ref = null), o)) {
            r(o);
            let n = e.seen.get(o),
              a = n.schema;
            if (
              (a.$ref &&
              ("draft-07" === e.target ||
                "draft-04" === e.target ||
                "openapi-3.0" === e.target)
                ? ((i.allOf = i.allOf ?? []), i.allOf.push(a))
                : ni(i, a),
              ni(i, s),
              t._zod.parent === o)
            )
              for (let e in i)
                "$ref" !== e && "allOf" !== e && (e in s || delete i[e]);
            if (a.$ref && n.def)
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in n.def &&
                  JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
                  delete i[e];
          }
          let a = t._zod.parent;
          if (a && a !== o) {
            r(a);
            let t = e.seen.get(a);
            if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in t.def &&
                  JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                  delete i[e];
          }
          e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
        };
        if (!e.external || e.sharedEmitDoneFor !== e.external) {
          for (let t of [...e.seen.entries()].reverse()) r(t[0]);
          if ("openapi-3.0" !== e.target)
            for (let t of e.seen.entries())
              !(function e(t) {
                let n = t.anyOf;
                if (!Array.isArray(n) || 0 === n.length || void 0 !== t.type)
                  return;
                let r = [];
                for (let t of n) {
                  if (!t || "object" != typeof t) return;
                  e(t);
                  let n = Object.keys(t);
                  if (1 !== n.length || "type" !== n[0]) return;
                  let i = t.type;
                  for (let e of Array.isArray(i) ? i : [i]) {
                    if ("string" != typeof e) return;
                    r.includes(e) || r.push(e);
                  }
                }
                delete t.anyOf, (t.type = 1 === r.length ? r[0] : r);
              })(t[1].def ?? t[1].schema);
          for (let t of e.deferred) t();
          if (e.intersections.length) {
            let t = new Map();
            for (let n of e.seen.values())
              for (let e of [n.schema, n.def]) {
                let n = e?.allOf;
                if (!Array.isArray(n)) continue;
                let r = t.get(n);
                r ? r.push(e) : t.set(n, [e]);
              }
            for (let n of e.intersections)
              for (let e of t.get(n) ?? [])
                !(function (e) {
                  let t = e.allOf;
                  if (!Array.isArray(t) || t.length < 2) return;
                  for (let t of nc) if (t in e) return;
                  let n = t.filter((e) => nf.some((t) => Array.isArray(e[t]))),
                    r = null;
                  if (n.length) {
                    let e = n[0],
                      i = nf.find((t) => Array.isArray(e[t]));
                    if (1 !== Object.keys(e).length) return;
                    let s = t.filter((t) => t !== e),
                      o = e[i].map((e) => nh([...s, e]));
                    if (o.some((e) => !e)) return;
                    r = { [i]: o };
                  } else r = nh(t);
                  r && (delete e.allOf, ni(e, r));
                })(e);
          }
        }
        let i = {};
        if (
          ("draft-2020-12" === e.target
            ? (i.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (i.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (i.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
          e.external?.uri)
        ) {
          let n = e.external.registry.get(t)?.id;
          if (!n) throw Error("Schema is missing an `id` property");
          i.$id = e.external.uri(n);
        }
        ni(i, n.defId ? n.schema : (n.def ?? n.schema));
        let s = e.metadataRegistry.get(t)?.id;
        void 0 !== s && i.id === s && delete i.id;
        let o = e.external?.defs ?? {};
        if (!e.external || e.sharedEmitDoneFor !== e.external)
          for (let t of e.seen.entries()) {
            let e = t[1];
            e.def &&
              e.defId &&
              (e.def.id === e.defId && delete e.def.id, w(o, e.defId, e.def));
          }
        e.external && (e.sharedEmitDoneFor = e.external),
          e.external ||
            (Object.keys(o).length > 0 &&
              ("draft-2020-12" === e.target
                ? (i.$defs = o)
                : (i.definitions = o)));
        try {
          let n = JSON.parse(JSON.stringify(i));
          return (
            Object.defineProperty(n, "~standard", {
              value: {
                ...t["~standard"],
                jsonSchema: {
                  input: nm(t, "input", e.processors),
                  output: nm(t, "output", e.processors),
                },
              },
              enumerable: !1,
              writable: !1,
            }),
            n
          );
        } catch (e) {
          throw Error("Error converting schema to JSON.");
        }
      }
      let nm =
          (e, t, n = {}) =>
          (r) => {
            let { libraryOptions: i, target: s } = r ?? {},
              o = ns({ ...(i ?? {}), target: s, io: t, processors: n });
            return na(e, o), nl(o, e), np(o, e);
          },
        ng = (e, t, n) => {
          (void 0 === e[t] || n > e[t]) && (e[t] = n);
        },
        nv = (e, t, n) => {
          (void 0 === e[t] || n < e[t]) && (e[t] = n);
        },
        ny = (e, t) => {
          ng(e, "minimum", t), nv(e, "maximum", t);
        },
        n_ = (e, t) => {
          e.multipleOf ?? (e.multipleOf = []),
            e.multipleOf.includes(t) || e.multipleOf.push(t);
        },
        nw = (e, t) => {
          e.patterns ?? (e.patterns = new Set()), e.patterns.add(t);
        },
        nb = (e, t) => {
          e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
        },
        nz = (e, t) => {
          (e.format = t), t.includes("int") && (e.isInt = !0);
        },
        nk = (e, t) => ng(e, "minimum", t.minimum),
        nO = (e, t) => nv(e, "maximum", t.maximum),
        n$ = (e) => (t, n) => {
          nz(t, n.format);
          let [r, i] = e[n.format];
          ng(t, "minimum", r), nv(t, "maximum", i);
        },
        nx = {
          greater_than: (e, t) =>
            ng(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
          less_than: (e, t) =>
            nv(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
          multiple_of: (e, t) => n_(e, t.value),
          number_format: n$(R),
          bigint_format: n$(D),
          min_length: nk,
          max_length: nO,
          length_equals: (e, t) => ny(e, t.length),
          min_size: nk,
          max_size: nO,
          size_equals: (e, t) => ny(e, t.size),
          string_format: (e, t) => {
            nz(e, t.format),
              t.pattern && nw(e, t.pattern),
              ("base64" === t.format || "base64url" === t.format) &&
                (e.contentEncoding = t.format),
              (t.local || -1 === t.precision) && (e.laxFormat = !0);
          },
          mime_type: (e, t) => nb(e, t.mime),
        };
      function nE(e) {
        let t = {},
          n = e._zod.def;
        for (let r of e._zod.traits.has("$ZodCheck")
          ? [e, ...(n.checks ?? [])]
          : (n.checks ?? []))
          nx[r._zod.def.check]?.(t, r._zod.def);
        let r = e._zod.bag;
        for (let e of (void 0 !== r.minimum && ng(t, "minimum", r.minimum),
        void 0 !== r.exclusiveMinimum &&
          ng(t, "exclusiveMinimum", r.exclusiveMinimum),
        void 0 !== r.maximum && nv(t, "maximum", r.maximum),
        void 0 !== r.exclusiveMaximum &&
          nv(t, "exclusiveMaximum", r.exclusiveMaximum),
        void 0 !== r.multipleOf && n_(t, r.multipleOf),
        void 0 !== r.format &&
          (t.format ?? (t.format = r.format),
          r.format.includes("int") && (t.isInt = !0)),
        r.mime && nb(t, r.mime),
        r.patterns ?? []))
          nw(t, e);
        return t;
      }
      let nS = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        nP = new Map([
          [
            tz,
            /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
          ],
          [tO, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/],
        ]),
        nZ = (e) => nP.get(e) ?? e;
      function nj(e) {
        let t = e._zod.def;
        return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform")
          ? nj(t.out)
          : "catch" === t.type
            ? nj(t.innerType)
            : e._zod.optin;
      }
      let nA = new WeakMap(),
        nT = Symbol();
      function nI(e, t, n, r, i) {
        let s = !1,
          o = JSON.stringify(e, (e, t) =>
            "bigint" != typeof t ? t : ((s = !0), null),
          );
        return s
          ? (no(
              t,
              n,
              r,
              i,
              "BigInt defaults cannot be represented in JSON Schema",
            ),
            nT)
          : JSON.parse(o);
      }
      let nN = (e, t, n, r) => {
          let i = e._zod.def;
          na(i.innerType, t, r), (t.seen.get(e).ref = i.innerType);
        },
        nF = {
          get: function () {
            let e = this._zod;
            return (
              e.message ?? (e.message = JSON.stringify(e.def, v, 2)), e.message
            );
          },
          set: function (e) {
            this._zod.message = e;
          },
          enumerable: !0,
          configurable: !0,
        },
        nR = { value: void 0, enumerable: !1 },
        nD = new WeakSet([Object.prototype, Error.prototype]),
        nM = (e, t) => {
          (e.name = "$ZodError"),
            (nR.value = t),
            Object.defineProperty(e, "issues", nR),
            (nR.value = void 0),
            Object.defineProperty(e, "message", nF);
          let n = Object.getPrototypeOf(e);
          nD.has(n) ||
            (nD.add(n),
            Object.defineProperty(n, "toString", {
              configurable: !0,
              enumerable: !1,
              get() {
                let e = () => this.message;
                return (
                  Object.defineProperty(this, "toString", {
                    value: e,
                    configurable: !0,
                    writable: !0,
                  }),
                  e
                );
              },
              set(e) {
                Object.defineProperty(this, "toString", {
                  value: e,
                  configurable: !0,
                  writable: !0,
                });
              },
            }));
        },
        nU = ei("$ZodError", nM);
      function nC(e, t) {
        return { callee: t?.callee ?? e, Err: t?.Err };
      }
      ei("$ZodError", nM, void 0, { Parent: Error });
      let nJ = (e) => {
          let t = (n, r, i, s) => {
            let o = i ? { ...i, async: !1 } : { async: !1 },
              a = n._zod.run({ value: r, issues: [] }, o);
            if (a instanceof Promise) throw new es();
            if (a.issues.length) {
              let n = new (s?.Err ?? e)(a.issues.map((e) => K(e, o, eu())));
              throw (E(n, s?.callee ?? t), n);
            }
            return a.value;
          };
          return t;
        },
        nL = (e) => {
          let t = async (n, r, i, s) => {
            let o = i ? { ...i, async: !0 } : { async: !0 },
              a = n._zod.run({ value: r, issues: [] }, o);
            if ((a instanceof Promise && (a = await a), a.issues.length)) {
              let n = new (s?.Err ?? e)(a.issues.map((e) => K(e, o, eu())));
              throw (E(n, s?.callee ?? t), n);
            }
            return a.value;
          };
          return t;
        },
        nq = (e) => (t, n, r) => {
          let i = r ? { ...r, async: !1 } : { async: !1 },
            s = t._zod.run({ value: n, issues: [] }, i);
          if (s instanceof Promise) throw new es();
          return s.issues.length
            ? nW(e, s.issues, i)
            : { success: !0, data: s.value };
        };
      function nW(e, t, n) {
        let r;
        return {
          success: !1,
          get error() {
            return (
              r ||
                ((r = new e(t.map((e) => K(e, n, eu())))),
                (t = void 0),
                (n = void 0)),
              r
            );
          },
          set error(e) {
            (r = e), (t = void 0), (n = void 0);
          },
        };
      }
      let nV = (e) => async (t, n, r) => {
          let i = r ? { ...r, async: !0 } : { async: !0 },
            s = t._zod.run({ value: n, issues: [] }, i);
          return (
            s instanceof Promise && (s = await s),
            s.issues.length
              ? nW(e, s.issues, i)
              : { success: !0, data: s.value }
          );
        },
        nK = Symbol.for("zod.compile.invalid"),
        nB = Symbol.for("zod.compile.fallback"),
        nH = new WeakSet([Object.prototype, Error.prototype]);
      function nX(e, t, n) {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          get() {
            let e = n(this);
            return (
              Object.defineProperty(this, t, {
                value: e,
                configurable: !0,
                writable: !0,
              }),
              e
            );
          },
          set(e) {
            Object.defineProperty(this, t, {
              value: e,
              configurable: !0,
              writable: !0,
            });
          },
        });
      }
      let nG = ei(
          "ZodError",
          (e, t) => {
            nU.init(e, t), (e.name = "ZodError");
            let n = Object.getPrototypeOf(e);
            nH.has(n) ||
              (nH.add(n),
              nX(
                n,
                "format",
                (e) => (t) =>
                  (function (e, t = (e) => e.message) {
                    let n = { _errors: [] },
                      r = (e, i = []) => {
                        for (let s of e.issues)
                          if ("invalid_union" === s.code && s.errors.length)
                            s.errors.map((e) =>
                              r({ issues: e }, [...i, ...s.path]),
                            );
                          else if ("invalid_key" === s.code)
                            r({ issues: s.issues }, [...i, ...s.path]);
                          else if ("invalid_element" === s.code)
                            r({ issues: s.issues }, [...i, ...s.path]);
                          else {
                            let e = [...i, ...s.path];
                            if (0 === e.length) n._errors.push(t(s));
                            else {
                              let r = n,
                                i = 0;
                              for (; i < e.length; ) {
                                let n = e[i],
                                  o = i === e.length - 1;
                                if ("_errors" === n) {
                                  o && r._errors.push(t(s)), i++;
                                  continue;
                                }
                                Object.prototype.hasOwnProperty.call(r, n) ||
                                  Object.defineProperty(r, n, {
                                    value: { _errors: [] },
                                    enumerable: !0,
                                    writable: !0,
                                    configurable: !0,
                                  });
                                let a = r[n];
                                o && a._errors.push(t(s)), (r = a), i++;
                              }
                            }
                          }
                      };
                    return r(e), n;
                  })(e, t),
              ),
              nX(
                n,
                "flatten",
                (e) => (t) =>
                  (function (e, t = (e) => e.message) {
                    let n = {},
                      r = [];
                    for (let o of e.issues)
                      if (o.path.length > 0) {
                        var i, s;
                        ((i = o.path[0]),
                        (s = () => []),
                        !Object.prototype.hasOwnProperty.call(n, i) &&
                          ("__proto__" === i
                            ? Object.defineProperty(n, i, {
                                value: s(),
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                              })
                            : (n[i] = s())),
                        n[i]).push(t(o));
                      } else r.push(t(o));
                    return { formErrors: r, fieldErrors: n };
                  })(e, t),
              ),
              nX(n, "addIssue", (e) => (t) => {
                e.issues.push(t), (e.message = JSON.stringify(e.issues, v, 2));
              }),
              nX(n, "addIssues", (e) => (t) => {
                e.issues.push(...t),
                  (e.message = JSON.stringify(e.issues, v, 2));
              }),
              Object.defineProperty(n, "isEmpty", {
                configurable: !0,
                enumerable: !1,
                get() {
                  return 0 === this.issues.length;
                },
              }));
          },
          void 0,
          { Parent: Error },
        ),
        nY = nJ(nG),
        nQ = nL(nG),
        n0 = nq(nG),
        n1 = nV(nG),
        n2 =
          ((a = nJ(nG)),
          (u = (e, t, n, r) =>
            a(
              e,
              t,
              n ? { ...n, direction: "backward" } : { direction: "backward" },
              nC(u, r),
            ))),
        n4 = ((l = nJ(nG)), (c = (e, t, n, r) => l(e, t, n, nC(c, r)))),
        n9 =
          ((f = nL(nG)),
          (d = async (e, t, n, r) => {
            let i = n
              ? { ...n, direction: "backward" }
              : { direction: "backward" };
            return await f(e, t, i, nC(d, r));
          })),
        n7 =
          ((h = nL(nG)),
          (p = async (e, t, n, r) => await h(e, t, n, nC(p, r)))),
        n6 = (e, t, n) => {
          let r = n
            ? { ...n, direction: "backward" }
            : { direction: "backward" };
          return nq(nG)(e, t, r);
        },
        n3 = (e, t, n) => nq(nG)(e, t, n),
        n5 = async (e, t, n) => {
          let r = n
            ? { ...n, direction: "backward" }
            : { direction: "backward" };
          return nV(nG)(e, t, r);
        },
        n8 = async (e, t, n) => nV(nG)(e, t, n);
      function re() {
        ea.memoizer || eu({ memoizer: eg });
      }
      let rt = ei(
          "ZodType",
          (e, t) => (
            ea.localeError ||
              eu({
                localeError: (() => {
                  let e = {
                      string: { unit: "characters", verb: "to have" },
                      file: { unit: "bytes", verb: "to have" },
                      array: { unit: "items", verb: "to have" },
                      set: { unit: "items", verb: "to have" },
                      map: { unit: "entries", verb: "to have" },
                    },
                    t = {
                      regex: "input",
                      email: "email address",
                      url: "URL",
                      emoji: "emoji",
                      uuid: "UUID",
                      uuidv4: "UUIDv4",
                      uuidv6: "UUIDv6",
                      nanoid: "nanoid",
                      guid: "GUID",
                      cuid: "cuid",
                      cuid2: "cuid2",
                      ulid: "ULID",
                      xid: "XID",
                      ksuid: "KSUID",
                      datetime: "ISO datetime",
                      date: "ISO date",
                      time: "ISO time",
                      duration: "ISO duration",
                      ipv4: "IPv4 address",
                      ipv6: "IPv6 address",
                      mac: "MAC address",
                      cidrv4: "IPv4 range",
                      cidrv6: "IPv6 range",
                      base64: "base64-encoded string",
                      base64url: "base64url-encoded string",
                      json_string: "JSON string",
                      e164: "E.164 number",
                      currency_code: "currency code",
                      credit_card: "credit card number",
                      iban: "IBAN",
                      jwt: "JWT",
                      template_literal: "input",
                    },
                    n = { nan: "NaN" };
                  function r(e, t) {
                    return "number" !== e ||
                      "number" != typeof t ||
                      Number.isFinite(t)
                      ? (n[e] ?? e)
                      : String(t);
                  }
                  return (n) => {
                    switch (n.code) {
                      case "invalid_type": {
                        let e = r(n.expected),
                          t = r(
                            (function (e) {
                              let t = typeof e;
                              switch (t) {
                                case "number":
                                  return Number.isNaN(e) ? "nan" : "number";
                                case "object":
                                  if (null === e) return "null";
                                  if (Array.isArray(e)) return "array";
                                  if (
                                    e &&
                                    Object.getPrototypeOf(e) !==
                                      Object.prototype &&
                                    "constructor" in e &&
                                    e.constructor
                                  )
                                    return e.constructor.name;
                              }
                              return t;
                            })(n.input),
                            n.input,
                          );
                        return `Invalid input: expected ${e}, received ${t}`;
                      }
                      case "invalid_value":
                        if (1 === n.values.length)
                          return `Invalid input: expected ${F(n.values[0])}`;
                        return `Invalid option: expected one of ${g(n.values, "|")}`;
                      case "too_big": {
                        let t = n.exact ? "exactly " : n.inclusive ? "<=" : "<",
                          r = e[n.origin] ?? null;
                        if (r)
                          return `Too big: expected ${n.origin ?? "value"} to have ${t}${n.maximum.toString()} ${r.unit ?? "elements"}`;
                        return `Too big: expected ${n.origin ?? "value"} to be ${t}${n.maximum.toString()}`;
                      }
                      case "too_small": {
                        let t = n.exact ? "exactly " : n.inclusive ? ">=" : ">",
                          r = e[n.origin] ?? null;
                        if (r)
                          return `Too small: expected ${n.origin} to have ${t}${n.minimum.toString()} ${r.unit}`;
                        return `Too small: expected ${n.origin} to be ${t}${n.minimum.toString()}`;
                      }
                      case "invalid_format":
                        if ("starts_with" === n.format)
                          return `Invalid string: must start with "${n.prefix}"`;
                        if ("ends_with" === n.format)
                          return `Invalid string: must end with "${n.suffix}"`;
                        if ("includes" === n.format)
                          return `Invalid string: must include "${n.includes}"`;
                        if ("regex" === n.format)
                          return `Invalid string: must match pattern ${n.pattern}`;
                        return `Invalid ${t[n.format] ?? n.format}`;
                      case "not_multiple_of":
                        return `Invalid number: must be a multiple of ${n.divisor}`;
                      case "unrecognized_keys":
                        return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${g(n.keys, ", ")}`;
                      case "invalid_key":
                        return `Invalid key in ${n.origin}`;
                      case "invalid_union":
                        if (
                          n.options &&
                          Array.isArray(n.options) &&
                          n.options.length > 0
                        ) {
                          let e = n.options.map((e) => `'${e}'`).join(" | ");
                          return `Invalid discriminator value. Expected ${e}`;
                        }
                        if (!1 === n.inclusive)
                          return "Invalid input: more than one option matched";
                        return "Invalid input";
                      case "invalid_element":
                        return `Invalid value in ${n.origin}`;
                      default:
                        return "Invalid input";
                    }
                  };
                })(),
              }),
            e2.init(e, t),
            (e.def = t),
            (e.type = t.type),
            e
          ),
          {
            check(...e) {
              let t = this.def;
              return this.clone(
                x(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...e.map((e) =>
                      "function" == typeof e
                        ? {
                            _zod: {
                              check: e,
                              def: { check: "custom" },
                              onattach: [],
                            },
                          }
                        : e,
                    ),
                  ],
                }),
                { parent: !0 },
              );
            },
            with(...e) {
              return this.check(...e);
            },
            clone(e, t) {
              return I(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return e.add(this, t), this;
            },
            refine(e, t) {
              return this.check(
                (function (e, t = {}) {
                  return new r0({
                    type: "custom",
                    check: "custom",
                    fn: e,
                    ...N(t),
                  });
                })(e, t),
              );
            },
            superRefine(e, t) {
              return this.check(
                (function (e, t) {
                  var n;
                  let r, i;
                  return (
                    (n = (t) => (
                      (t.addIssue = (e) => {
                        "string" == typeof e
                          ? t.issues.push(G(e, t.value, r._zod.def))
                          : (e.fatal && (e.continue = !1),
                            e.code ?? (e.code = "custom"),
                            "input" in e || (e.input = t.value),
                            e.inst ?? (e.inst = r),
                            e.continue ?? (e.continue = !r._zod.def.abort),
                            t.issues.push(G(e)));
                      }),
                      e(t.value, t)
                    )),
                    ((i = new eC({ check: "custom", ...N(t) }))._zod.check = n),
                    (r = i)
                  );
                })(e, t),
              );
            },
            overwrite(e) {
              return this.check(nr(e));
            },
            optional() {
              return rL(this);
            },
            exactOptional() {
              var e;
              return (e = this), new rq({ type: "optional", innerType: e });
            },
            nullable() {
              return rV(this);
            },
            nullish() {
              return rL(rV(this));
            },
            nonoptional(e) {
              var t;
              return (
                (t = this),
                new rH({ type: "nonoptional", innerType: t, ...N(e) })
              );
            },
            array() {
              return (function (e) {
                return new rA({ type: "array", element: e, ...N(void 0) });
              })(this);
            },
            or(e) {
              return new rN({
                type: "union",
                options: [this, e],
                ...N(void 0),
              });
            },
            and(e) {
              var t;
              return (
                (t = this), new rF({ type: "intersection", left: t, right: e })
              );
            },
            transform(e) {
              return rY(this, new rC({ type: "transform", transform: e }));
            },
            default(e) {
              var t, n;
              return (
                (t = this),
                (n = e),
                new rK({
                  type: "default",
                  innerType: t,
                  get defaultValue() {
                    return "function" == typeof n ? n() : j(n);
                  },
                })
              );
            },
            prefault(e) {
              var t, n;
              return (
                (t = this),
                (n = e),
                new rB({
                  type: "prefault",
                  innerType: t,
                  get defaultValue() {
                    return "function" == typeof n ? n() : j(n);
                  },
                })
              );
            },
            catch(e) {
              return (function (e, t) {
                let n;
                return new rX({
                  type: "catch",
                  innerType: e,
                  catchValue:
                    "function" == typeof t
                      ? t
                      : (((n = () => t)["~constantCatch"] = !0), n),
                });
              })(this, e);
            },
            pipe(e) {
              return rY(this, e);
            },
            readonly() {
              var e;
              return (e = this), new rQ({ type: "readonly", innerType: e });
            },
            describe(e) {
              let t = this.clone();
              return t8.add(t, { description: e }), t;
            },
            meta(...e) {
              if (0 === e.length) return t8.get(this);
              let t = this.clone();
              return t8.add(t, e[0]), t;
            },
            isOptional() {
              return this.safeParse(void 0).success;
            },
            isNullable() {
              return this.safeParse(null).success;
            },
            apply(e, ...t) {
              return 0 === t.length ? e(this) : e(this, ...t);
            },
            get "~standard"() {
              return Y(
                this,
                "~standard",
                {
                  ...e9(this),
                  jsonSchema: {
                    input: nm(this, "input"),
                    output: nm(this, "output"),
                  },
                },
                !1,
              );
            },
            set "~standard"(e) {
              Y(this, "~standard", e);
            },
            parse: function e(t, n) {
              return nY(this, t, n, { callee: e });
            },
            parseAsync: async function e(t, n) {
              return await nQ(this, t, n, { callee: e });
            },
            safeParse(e, t) {
              return n0(this, e, t);
            },
            async safeParseAsync(e, t) {
              return n1(this, e, t);
            },
            get spa() {
              return this?.safeParseAsync;
            },
            set spa(e) {
              Y(this, "spa", e);
            },
            validate(e, t) {
              let n = this._zod.bag.validator;
              if (void 0 !== n) {
                if (n(e) !== nK) return !0;
                if (!0 === n.definite && void 0 === t) return !1;
              }
              return (function (e, t, n) {
                let r,
                  i = n
                    ? { ...n, async: !1, abortEarly: !0 }
                    : { async: !1, abortEarly: !0 },
                  s = e._zod.bag.fallbackRun;
                if (
                  (s
                    ? ((i[nB] = !0), (r = s({ value: t, issues: [] }, i)))
                    : (r = e._zod.run({ value: t, issues: [] }, i)),
                  r instanceof Promise)
                )
                  throw new es();
                return 0 === r.issues.length;
              })(this, e, t);
            },
            validateAsync(e, t) {
              return (async (e, t, n) => {
                let r = n
                    ? { ...n, async: !0, abortEarly: !0 }
                    : { async: !0, abortEarly: !0 },
                  i = e._zod.run({ value: t, issues: [] }, r);
                return (
                  i instanceof Promise && (i = await i), 0 === i.issues.length
                );
              })(this, e, t);
            },
            encode: function e(t, n) {
              return n2(this, t, n, { callee: e });
            },
            decode: function e(t, n) {
              return n4(this, t, n, { callee: e });
            },
            encodeAsync: async function e(t, n) {
              return await n9(this, t, n, { callee: e });
            },
            decodeAsync: async function e(t, n) {
              return await n7(this, t, n, { callee: e });
            },
            safeEncode(e, t) {
              return n6(this, e, t);
            },
            safeDecode(e, t) {
              return n3(this, e, t);
            },
            async safeEncodeAsync(e, t) {
              return n5(this, e, t);
            },
            async safeDecodeAsync(e, t) {
              return n8(this, e, t);
            },
            toJSONSchema(e) {
              return (
                (e, t = {}) =>
                (n) => {
                  let r = ns({ ...n, processors: t });
                  return na(e, r), nl(r, e), np(r, e);
                }
              )(
                this,
                {},
              )(e);
            },
            get description() {
              return t8.get(this)?.description;
            },
            get _def() {
              return this._zod.def;
            },
          },
        ),
        rn = ei(
          "_ZodString",
          (e, t) => {
            e7.init(e, t),
              rt.init(e, t),
              (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n) => {
                  n.type = "string";
                  let {
                    minimum: r,
                    maximum: i,
                    format: s,
                    patterns: o,
                    contentEncoding: a,
                    laxFormat: u,
                  } = nE(e);
                  if (
                    ("number" == typeof r && (n.minLength = r),
                    "number" == typeof i && (n.maxLength = i),
                    s &&
                      ((n.format = nS[s] ?? s),
                      "" === n.format && delete n.format,
                      ("time" === s || u) && delete n.format),
                    a && (n.contentEncoding = a),
                    o && o.size > 0)
                  ) {
                    let e = [...o].map(nZ);
                    1 === e.length
                      ? (n.pattern = e[0].source)
                      : e.length > 1 &&
                        (n.allOf = [
                          ...e.map((e) => ({
                            ...("draft-07" === t.target ||
                            "draft-04" === t.target ||
                            "openapi-3.0" === t.target
                              ? { type: "string" }
                              : {}),
                            pattern: e.source,
                          })),
                        ]);
                  }
                })(e, t, n));
          },
          (function (e, t) {
            for (let n in e) {
              let r = e[n];
              Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !0,
                get() {
                  return Y(this, n, r(this));
                },
                set(e) {
                  Y(this, n, e);
                },
              });
            }
            return t;
          })(
            {
              format: (e) => nE(e).format ?? null,
              minLength: (e) => nE(e).minimum ?? null,
              maxLength: (e) => nE(e).maximum ?? null,
            },
            {
              regex(...e) {
                return this.check(
                  (function (e, t) {
                    return new eK({
                      check: "string_format",
                      format: "regex",
                      ...N(t),
                      pattern: e,
                    });
                  })(...e),
                );
              },
              includes(...e) {
                return this.check(
                  (function (e, t) {
                    return new eX({
                      check: "string_format",
                      format: "includes",
                      ...N(t),
                      includes: e,
                    });
                  })(...e),
                );
              },
              startsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new eG({
                      check: "string_format",
                      format: "starts_with",
                      ...N(t),
                      prefix: e,
                    });
                  })(...e),
                );
              },
              endsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new eY({
                      check: "string_format",
                      format: "ends_with",
                      ...N(t),
                      suffix: e,
                    });
                  })(...e),
                );
              },
              min(...e) {
                return this.check(nt(...e));
              },
              max(...e) {
                return this.check(ne(...e));
              },
              length(...e) {
                return this.check(nn(...e));
              },
              nonempty(...e) {
                return this.check(nt(1, ...e));
              },
              lowercase(e) {
                return this.check(
                  new eB({
                    check: "string_format",
                    format: "lowercase",
                    ...N(e),
                  }),
                );
              },
              uppercase(e) {
                return this.check(
                  new eH({
                    check: "string_format",
                    format: "uppercase",
                    ...N(e),
                  }),
                );
              },
              trim() {
                return this.check(nr((e) => e.trim()));
              },
              normalize(...e) {
                return this.check(
                  (function (e) {
                    return nr((t) => t.normalize(e));
                  })(...e),
                );
              },
              toLowerCase() {
                return this.check(nr((e) => e.toLowerCase()));
              },
              toUpperCase() {
                return this.check(nr((e) => e.toUpperCase()));
              },
              slugify() {
                return this.check(
                  nr((e) =>
                    e
                      .toLowerCase()
                      .trim()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/[\s_-]+/g, "-")
                      .replace(/^-+|-+$/g, ""),
                  ),
                );
              },
            },
          ),
        ),
        rr = ei(
          "ZodString",
          (e, t) => {
            e7.init(e, t), rn.init(e, t);
          },
          {
            email(e) {
              return this.check(
                new rc({
                  type: "string",
                  format: "email",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            url(e) {
              return this.check(
                new rh({
                  type: "string",
                  format: "url",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            jwt(e) {
              return this.check(
                new rS({
                  type: "string",
                  format: "jwt",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            emoji(e) {
              return this.check(
                new rp({
                  type: "string",
                  format: "emoji",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            guid(e) {
              return this.check(
                new rf({
                  type: "string",
                  format: "guid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            uuid(e) {
              return this.check(
                new rd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            uuidv4(e) {
              return this.check(
                new rd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v4",
                  ...N(e),
                }),
              );
            },
            uuidv6(e) {
              return this.check(
                new rd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v6",
                  ...N(e),
                }),
              );
            },
            uuidv7(e) {
              return this.check(
                new rd({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v7",
                  ...N(e),
                }),
              );
            },
            nanoid(e) {
              return this.check(
                new rm({
                  type: "string",
                  format: "nanoid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cuid(e) {
              return this.check(
                new rg({
                  type: "string",
                  format: "cuid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cuid2(e) {
              return this.check(
                new rv({
                  type: "string",
                  format: "cuid2",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ulid(e) {
              return this.check(
                new ry({
                  type: "string",
                  format: "ulid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            base64(e) {
              return this.check(
                new r$({
                  type: "string",
                  format: "base64",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            base64url(e) {
              return this.check(
                new rx({
                  type: "string",
                  format: "base64url",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            xid(e) {
              return this.check(
                new r_({
                  type: "string",
                  format: "xid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ksuid(e) {
              return this.check(
                new rw({
                  type: "string",
                  format: "ksuid",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ipv4(e) {
              return this.check(
                new rb({
                  type: "string",
                  format: "ipv4",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            ipv6(e) {
              return this.check(
                new rz({
                  type: "string",
                  format: "ipv6",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cidrv4(e) {
              return this.check(
                new rk({
                  type: "string",
                  format: "cidrv4",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            cidrv6(e) {
              return this.check(
                new rO({
                  type: "string",
                  format: "cidrv6",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            e164(e) {
              return this.check(
                new rE({
                  type: "string",
                  format: "e164",
                  check: "string_format",
                  abort: !1,
                  ...N(e),
                }),
              );
            },
            datetime(e) {
              return this.check(
                new ro({
                  type: "string",
                  format: "datetime",
                  check: "string_format",
                  offset: !1,
                  local: !1,
                  precision: null,
                  ...N(e),
                }),
              );
            },
            date(e) {
              return this.check(
                new ra({
                  type: "string",
                  format: "date",
                  check: "string_format",
                  ...N(e),
                }),
              );
            },
            time(e) {
              return this.check(
                new ru({
                  type: "string",
                  format: "time",
                  check: "string_format",
                  precision: null,
                  ...N(e),
                }),
              );
            },
            duration(e) {
              return this.check(
                new rl({
                  type: "string",
                  format: "duration",
                  check: "string_format",
                  ...N(e),
                }),
              );
            },
          },
        );
      function ri(e) {
        var t;
        return new rr(
          ((t = { type: "string", ...N(e) }).checks &&
            (t.checks = [...t.checks]),
          t),
        );
      }
      let rs = ei("ZodStringFormat", (e, t) => {
          e6.init(e, t), rn.init(e, t);
        }),
        ro = ei("ZodISODateTime", (e, t) => {
          tf.init(e, t), rs.init(e, t);
        }),
        ra = ei("ZodISODate", (e, t) => {
          td.init(e, t), rs.init(e, t);
        }),
        ru = ei("ZodISOTime", (e, t) => {
          th.init(e, t), rs.init(e, t);
        }),
        rl = ei("ZodISODuration", (e, t) => {
          tp.init(e, t), rs.init(e, t);
        }),
        rc = ei("ZodEmail", (e, t) => {
          e8.init(e, t), rs.init(e, t);
        }),
        rf = ei("ZodGUID", (e, t) => {
          e3.init(e, t), rs.init(e, t);
        }),
        rd = ei("ZodUUID", (e, t) => {
          e5.init(e, t), rs.init(e, t);
        }),
        rh = ei("ZodURL", (e, t) => {
          tr.init(e, t), rs.init(e, t);
        }),
        rp = ei("ZodEmoji", (e, t) => {
          ti.init(e, t), rs.init(e, t);
        }),
        rm = ei("ZodNanoID", (e, t) => {
          ts.init(e, t), rs.init(e, t);
        }),
        rg = ei("ZodCUID", (e, t) => {
          to.init(e, t), rs.init(e, t);
        }),
        rv = ei("ZodCUID2", (e, t) => {
          ta.init(e, t), rs.init(e, t);
        }),
        ry = ei("ZodULID", (e, t) => {
          tu.init(e, t), rs.init(e, t);
        }),
        r_ = ei("ZodXID", (e, t) => {
          tl.init(e, t), rs.init(e, t);
        }),
        rw = ei("ZodKSUID", (e, t) => {
          tc.init(e, t), rs.init(e, t);
        }),
        rb = ei("ZodIPv4", (e, t) => {
          tm.init(e, t), rs.init(e, t);
        }),
        rz = ei("ZodIPv6", (e, t) => {
          ty.init(e, t), rs.init(e, t);
        }),
        rk = ei("ZodCIDRv4", (e, t) => {
          t_.init(e, t), rs.init(e, t);
        }),
        rO = ei("ZodCIDRv6", (e, t) => {
          tw.init(e, t), rs.init(e, t);
        }),
        r$ = ei("ZodBase64", (e, t) => {
          tk.init(e, t), rs.init(e, t);
        }),
        rx = ei("ZodBase64URL", (e, t) => {
          t$.init(e, t), rs.init(e, t);
        }),
        rE = ei("ZodE164", (e, t) => {
          tx.init(e, t), rs.init(e, t);
        }),
        rS = ei("ZodJWT", (e, t) => {
          tE.init(e, t), rs.init(e, t);
        }),
        rP = ei("ZodUnknown", (e, t) => {
          tS.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) => void 0);
        });
      function rZ() {
        return new rP({ type: "unknown" });
      }
      let rj = ei("ZodNever", (e, t) => {
          tP.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) => {
              t.not = {};
            });
        }),
        rA = ei(
          "ZodArray",
          (e, t) => {
            re(),
              tA.init(e, t),
              rt.init(e, t),
              (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n, r) => {
                  let i = e._zod.def,
                    { minimum: s, maximum: o } = nE(e);
                  "number" == typeof s && (n.minItems = s),
                    "number" == typeof o && (n.maxItems = o),
                    (n.type = "array"),
                    (n.items = na(i.element, t, {
                      ...r,
                      path: [...r.path, "items"],
                    }));
                })(e, t, n, r)),
              (e.element = t.element);
          },
          {
            min(e, t) {
              return this.check(nt(e, t));
            },
            nonempty(e) {
              return this.check(nt(1, e));
            },
            max(e, t) {
              return this.check(ne(e, t));
            },
            length(e, t) {
              return this.check(nn(e, t));
            },
            unwrap() {
              return this.element;
            },
          },
        ),
        rT = ei(
          "ZodObject",
          (e, t) => {
            var n;
            let r, i;
            re(),
              tD.init(e, t),
              rt.init(e, t),
              (e._zod.processJSONSchema = (t, n, r) =>
                ((e, t, n, r) => {
                  let i = e._zod.def,
                    s = i.shape;
                  if (
                    Object.getOwnPropertySymbols(s).length &&
                    no(
                      e,
                      t,
                      n,
                      r,
                      "Symbol keys cannot be represented in JSON Schema",
                    )
                  )
                    return;
                  for (let e in ((n.type = "object"), (n.properties = {}), s))
                    w(
                      n.properties,
                      e,
                      na(s[e], t, { ...r, path: [...r.path, "properties", e] }),
                    );
                  let o = [];
                  for (let e of Object.keys(s)) {
                    let n = i.shape[e];
                    ("input" === t.io
                      ? void 0 === nj(n)
                      : void 0 === n._zod.optout) && o.push(e);
                  }
                  o.length > 0 && (n.required = o),
                    i.catchall?._zod.def.type === "never"
                      ? (n.additionalProperties = !1)
                      : i.catchall
                        ? i.catchall &&
                          (n.additionalProperties = na(i.catchall, t, {
                            ...r,
                            path: [...r.path, "additionalProperties"],
                          }))
                        : "output" === t.io && (n.additionalProperties = !1);
                })(e, t, n, r)),
              (n = "shape"),
              (i = n in (r = Object.getPrototypeOf(e)) ? void 0 : r) &&
                Object.defineProperty(i, n, {
                  configurable: !0,
                  get() {
                    let e = {
                      configurable: !0,
                      writable: !0,
                      enumerable: !1,
                      value: void 0,
                    };
                    return (
                      Object.defineProperty(this, n, e),
                      (e.value = ((e) => e._zod.def.shape)(this)),
                      Object.defineProperty(this, n, e),
                      e.value
                    );
                  },
                  set(e) {
                    Object.defineProperty(this, n, {
                      configurable: !0,
                      writable: !0,
                      enumerable: !1,
                      value: e,
                    });
                  },
                });
          },
          {
            keyof() {
              return rU(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone(x(this._zod.def, { catchall: e }));
            },
            passthrough() {
              return this.clone(x(this._zod.def, { catchall: rZ() }));
            },
            loose() {
              return this.clone(x(this._zod.def, { catchall: rZ() }));
            },
            strict() {
              return this.clone(
                x(this._zod.def, {
                  catchall: new rj({ type: "never", ...N(void 0) }),
                }),
              );
            },
            strip() {
              return this.clone(x(this._zod.def, { catchall: void 0 }));
            },
            extend(e) {
              if (!Z(e))
                throw Error("Invalid input to extend: expected a plain object");
              let t = this._zod.def.checks;
              if (t && t.length > 0) {
                let t = z(this);
                for (let n of Reflect.ownKeys(e))
                  if (void 0 !== Object.getOwnPropertyDescriptor(t, n))
                    throw Error(
                      "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                    );
              }
              return I(this, x(this._zod.def, { shape: U(this, e) }));
            },
            safeExtend(e) {
              if (!Z(e))
                throw Error(
                  "Invalid input to safeExtend: expected a plain object",
                );
              return I(this, x(this._zod.def, { shape: U(this, e) }));
            },
            merge(e) {
              if (!e?._zod?.def)
                throw Error(
                  "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
                );
              if (this._zod.def.checks?.length)
                throw Error(
                  ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
                );
              let t = {};
              return (
                $(t, this, Reflect.ownKeys(z(this))),
                $(t, e, Reflect.ownKeys(z(e))),
                I(
                  this,
                  x(this._zod.def, {
                    shape: t,
                    get catchall() {
                      return e._zod.def.catchall;
                    },
                    checks: e._zod.def.checks ?? [],
                  }),
                )
              );
            },
            pick(e) {
              return (function (e, t) {
                let n = e._zod.def,
                  r = n.checks;
                if (r && r.length > 0)
                  throw Error(
                    ".pick() cannot be used on object schemas containing refinements",
                  );
                let i = {};
                return $(i, e, M(e, t)), I(e, x(n, { shape: i, checks: [] }));
              })(this, e);
            },
            omit(e) {
              return (function (e, t) {
                let n = e._zod.def,
                  r = n.checks;
                if (r && r.length > 0)
                  throw Error(
                    ".omit() cannot be used on object schemas containing refinements",
                  );
                let i = new Set(M(e, t)),
                  s = {};
                return (
                  $(
                    s,
                    e,
                    Reflect.ownKeys(z(e)).filter((e) => !i.has(e)),
                  ),
                  I(e, x(n, { shape: s, checks: [] }))
                );
              })(this, e);
            },
            partial(...e) {
              return C(rJ, this, e[0]);
            },
            exactPartial(...e) {
              return C(rq, this, e[0], "exactPartial");
            },
            required(...e) {
              var t;
              let n, r;
              return (
                (n = (t = e[0]) ? new Set(M(this, t)) : void 0),
                $((r = {}), this, Reflect.ownKeys(z(this)), (e, t) =>
                  n && !n.has(t)
                    ? e
                    : new rH({ type: "nonoptional", innerType: e }),
                ),
                I(this, x(this._zod.def, { shape: r }))
              );
            },
          },
        );
      function rI(e, t) {
        return new rT({ type: "object", shape: e ?? {}, ...N(t) });
      }
      let rN = ei("ZodUnion", (e, t) => {
          tU.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o;
              return (
                (s = !1 === (i = e._zod.def).inclusive),
                (o = i.options.map((e, n) =>
                  na(e, t, {
                    ...r,
                    path: [...r.path, s ? "oneOf" : "anyOf", n],
                  }),
                )),
                void (s ? (n.oneOf = o) : (n.anyOf = o))
              );
            }),
            (e.options = t.options);
        }),
        rF = ei("ZodIntersection", (e, t) => {
          tC.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o, a, u;
              return (
                (s = na((i = e._zod.def).left, t, {
                  ...r,
                  path: [...r.path, "allOf", 0],
                })),
                (o = na(i.right, t, { ...r, path: [...r.path, "allOf", 1] })),
                void ((n.allOf = u =
                  [
                    ...((a = (e) =>
                      "allOf" in e && 1 === Object.keys(e).length)(s)
                      ? s.allOf
                      : [s]),
                    ...(a(o) ? o.allOf : [o]),
                  ]),
                t.intersections.push(u))
              );
            });
        }),
        rR = ei("ZodRecord", (e, t) => {
          re(),
            tL.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i = e._zod.def;
                n.type = "object";
                let s = i.keyType,
                  o = nE(s).patterns;
                if ("loose" === i.mode && o && o.size > 0) {
                  let e = na(i.valueType, t, {
                    ...r,
                    path: [...r.path, "patternProperties", "*"],
                  });
                  for (let t of ((n.patternProperties = {}), o))
                    w(n.patternProperties, nZ(t).source, e);
                } else {
                  if ("draft-07" === t.target || "draft-2020-12" === t.target) {
                    n.propertyNames = na(i.keyType, t, {
                      ...r,
                      path: [...r.path, "propertyNames"],
                    });
                    let s = nA.get(t);
                    s ||
                      ((s = []),
                      nA.set(t, s),
                      t.deferred.push(() =>
                        (function (e) {
                          let t = new Map();
                          for (let n of e.seen.values())
                            n.def && !t.has(n.schema) && t.set(n.schema, n);
                          let n = new Map();
                          for (let r of nA.get(e) ?? []) {
                            let i = e.seen.get(r),
                              s = (i?.def ?? i?.schema)?.propertyNames;
                            if (!s || !0 === s || n.has(s)) continue;
                            let o = (function e(t, n, r) {
                              if (n.$ref) {
                                if (r.has(n)) return n;
                                r.add(n);
                                let i = t.get(n)?.def;
                                if (!i) return n;
                                let s = e(t, i, r);
                                return s === i ? n : s;
                              }
                              for (let i of ["anyOf", "oneOf"]) {
                                let s = n[i];
                                if (!Array.isArray(s)) continue;
                                let o = s.map((n) => e(t, n, r));
                                o.some((e, t) => e !== s[t]) &&
                                  (n = { ...n, [i]: o });
                              }
                              let i = Array.isArray(n.type) ? n.type : [n.type],
                                s =
                                  !i.includes("string") &&
                                  i.some(
                                    (e) => "number" === e || "integer" === e,
                                  ),
                                o =
                                  n.enum ??
                                  (void 0 !== n.const ? [n.const] : void 0);
                              if (!s && !o?.some((e) => "number" == typeof e))
                                return n;
                              let {
                                minimum: a,
                                maximum: u,
                                exclusiveMinimum: l,
                                exclusiveMaximum: c,
                                multipleOf: f,
                                format: d,
                                id: h,
                                ...p
                              } = n;
                              return (
                                p.enum
                                  ? (p.enum = p.enum.map((e) =>
                                      "number" == typeof e ? String(e) : e,
                                    ))
                                  : "number" == typeof p.const &&
                                    (p.const = String(p.const)),
                                s &&
                                  ((p.type = "string"),
                                  o ||
                                    (p.pattern = (
                                      i.includes("number") ? eD : eR
                                    ).source)),
                                p
                              );
                            })(t, s, new Set());
                            o !== s && n.set(s, o);
                          }
                          if (n.size)
                            for (let t of e.seen.values())
                              for (let e of [t.schema, t.def]) {
                                let t = e && n.get(e.propertyNames);
                                t && (e.propertyNames = t);
                              }
                        })(t),
                      )),
                      s.push(e);
                  }
                  n.additionalProperties = na(i.valueType, t, {
                    ...r,
                    path: [...r.path, "additionalProperties"],
                  });
                }
                let a = s._zod.values,
                  u = "input" === t.io && void 0 !== nj(i.valueType);
                if (a && !i.partial && !u) {
                  let e = [...a].filter(
                    (e) => "string" == typeof e || "number" == typeof e,
                  );
                  e.length > 0 && (n.required = e.map(String));
                }
              })(e, t, n, r)),
            (e.keyType = t.keyType),
            (e.valueType = t.valueType);
        });
      function rD(e, t, n) {
        return new rR({
          type: "record",
          keyType: e,
          valueType: t,
          ...N(n),
          partial: !0,
        });
      }
      let rM = ei("ZodEnum", (e, t) => {
        tq.init(e, t),
          rt.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t) => {
              let n = m(e._zod.def.entries);
              if (0 === n.length) {
                t.not = {};
                return;
              }
              n.every((e) => "number" == typeof e) && (t.type = "number"),
                n.every((e) => "string" == typeof e) && (t.type = "string"),
                (t.enum = n);
            })(e, n)),
          (e.enum = t.entries),
          (e.options = [...e._zod.values]);
        let n = new Set(Object.keys(t.entries));
        (e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new rM({ ...t, checks: [], ...N(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new rM({ ...t, checks: [], ...N(r), entries: i });
          });
      });
      function rU(e, t) {
        return new rM({
          type: "enum",
          entries: Array.isArray(e)
            ? Object.fromEntries(e.map((e) => [e, e]))
            : e,
          ...N(t),
        });
      }
      let rC = ei("ZodTransform", (e, t) => {
          re(),
            tW.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              no(e, t, n, r, "Transforms cannot be represented in JSON Schema");
            }),
            (e._zod.parse = (n, r) => {
              if ("backward" === r.direction) throw new eo(e.constructor.name);
              n.addIssue = (r) => {
                "string" == typeof r
                  ? n.issues.push(G(r, n.value, t))
                  : (r.fatal && (r.continue = !1),
                    r.code ?? (r.code = "custom"),
                    "input" in r || (r.input = n.value),
                    r.inst ?? (r.inst = e),
                    n.issues.push(G(r)));
              };
              let i = t.transform(n.value, n);
              return i instanceof Promise
                ? i.then((e) => ((n.value = e), n))
                : ((n.value = i), n);
            });
        }),
        rJ = ei("ZodOptional", (e, t) => {
          tK.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => nN(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function rL(e) {
        return new rJ({ type: "optional", innerType: e });
      }
      let rq = ei("ZodExactOptional", (e, t) => {
          tB.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => nN(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        rW = ei("ZodNullable", (e, t) => {
          tH.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o;
              return (
                (s = na((i = e._zod.def).innerType, t, r)),
                (o = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                  ? ((o.ref = i.innerType), (n.nullable = !0))
                  : (n.anyOf = [s, { type: "null" }]))
              );
            }),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function rV(e) {
        return new rW({ type: "nullable", innerType: e });
      }
      let rK = ei("ZodDefault", (e, t) => {
          tX.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s;
              return (
                na((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                void (
                  (s = nI(i.defaultValue, e, t, n, r)) !== nT && (n.default = s)
                )
              );
            }),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap);
        }),
        rB = ei("ZodPrefault", (e, t) => {
          tY.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i = e._zod.def;
                if (
                  (na(i.innerType, t, r),
                  (t.seen.get(e).ref = i.innerType),
                  "input" !== t.io)
                )
                  return;
                let s = nI(i.defaultValue, e, t, n, r);
                s !== nT && (n._prefault = s);
              })(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        rH = ei("ZodNonOptional", (e, t) => {
          tQ.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i;
              na((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        rX = ei("ZodCatch", (e, t) => {
          t2.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i,
                  s = e._zod.def;
                na(s.innerType, t, r), (t.seen.get(e).ref = s.innerType);
                try {
                  i = s.catchValue(void 0);
                } catch {
                  no(
                    e,
                    t,
                    n,
                    r,
                    "Dynamic catch values are not supported in JSON Schema",
                  );
                  return;
                }
                n.default = i;
              })(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap);
        }),
        rG = ei("ZodPipe", (e, t) => {
          t4.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o;
              return (
                (s = (i = e._zod.def).in._zod.traits.has("$ZodTransform")),
                void (na(
                  (o = "input" === t.io ? (s ? i.out : i.in) : i.out),
                  t,
                  r,
                ),
                (t.seen.get(e).ref = o))
              );
            }),
            (e.in = t.in),
            (e.out = t.out);
        });
      function rY(e, t) {
        return new rG({ type: "pipe", in: e, out: t });
      }
      let rQ = ei("ZodReadonly", (e, t) => {
          t7.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i;
              na((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                (n.readOnly = !0);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        r0 = ei("ZodCustom", (e, t) => {
          t3.init(e, t),
            rt.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              no(
                e,
                t,
                n,
                r,
                "Custom types cannot be represented in JSON Schema",
              );
            });
        });
    },
  },
]);
//# sourceMappingURL=684645.5d6f48585afe9f99.js.map
