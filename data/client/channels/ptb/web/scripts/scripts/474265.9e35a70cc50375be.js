(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [474265],
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
      e.exports = function (e, t, n, c) {
        var l = -1,
          d = i,
          f = !0,
          p = e.length,
          h = [],
          m = t.length;
        if (!p) return h;
        n && (t = o(t, a(n))),
          c
            ? ((d = s), (f = !1))
            : t.length >= 200 && ((d = u), (f = !1), (t = new r(t)));
        e: for (; ++l < p; ) {
          var g = e[l],
            v = null == n ? g : n(g);
          if (((g = c || 0 !== g ? g : 0), f && v == v)) {
            for (var y = m; y--; ) if (t[y] === v) continue e;
            h.push(g);
          } else d(t, v, c) || h.push(g);
        }
        return h;
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
          c,
          l,
          d,
          f,
          p,
          h = 0,
          m = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function y(t) {
          var n = u,
            r = c;
          return (u = c = void 0), (h = t), (d = e.apply(r, n));
        }
        function _(e) {
          var n = e - p,
            r = e - h;
          return void 0 === p || n >= t || n < 0 || (g && r >= l);
        }
        function w() {
          var e,
            n,
            r,
            s = i();
          if (_(s)) return z(s);
          f = setTimeout(
            w,
            ((e = s - p), (n = s - h), (r = t - e), g ? a(r, l - n) : r),
          );
        }
        function z(e) {
          return ((f = void 0), v && u) ? y(e) : ((u = c = void 0), d);
        }
        function b() {
          var e,
            n = i(),
            r = _(n);
          if (((u = arguments), (c = this), (p = n), r)) {
            if (void 0 === f)
              return (h = e = p), (f = setTimeout(w, t)), m ? y(e) : d;
            if (g) return clearTimeout(f), (f = setTimeout(w, t)), y(p);
          }
          return void 0 === f && (f = setTimeout(w, t)), d;
        }
        return (
          (t = s(t) || 0),
          r(n) &&
            ((m = !!n.leading),
            (l = (g = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : l),
            (v = "trailing" in n ? !!n.trailing : v)),
          (b.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (u = p = c = f = void 0);
          }),
          (b.flush = function () {
            return void 0 === f ? d : z(i());
          }),
          b
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
        c = !0,
        l = "[DecimalError] ",
        d = l + "Invalid argument: ",
        f = l + "Precision limit exceeded",
        p = l + "crypto unavailable",
        h = "[object Decimal]",
        m = Math.floor,
        g = Math.pow,
        v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        y = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        _ = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        w = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        z = o.length - 1,
        b = a.length - 1,
        k = { toStringTag: h };
      function $(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          s = "",
          o = e[0];
        if (i > 0) {
          for (s += o, t = 1; t < i; t++)
            (n = 7 - (r = e[t] + "").length) && (s += I(n)), (s += r);
          (n = 7 - (r = (o = e[t]) + "").length) && (s += I(n));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return s + o;
      }
      function O(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(d + e);
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
          return e.s < 0 && (e.s = 1), Z(e);
        }),
        (k.ceil = function () {
          return Z(new this.constructor(this), this.e + 1, 2);
        }),
        (k.clampedTo = k.clamp =
          function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(0 / 0);
            if (e.gt(t)) throw Error(d + t);
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
                      ? (i = (1 / L(4, (n = Math.ceil(r / 3)))).toString())
                      : ((n = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += n),
                      (t = q(e, 1, t.times(i), new e(1)));
                    for (var s = n; s--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= n), t;
                  })(r, V(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  Z(2 == i || 3 == i ? n.neg() : n, e, t, !0))
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
              l,
              d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
              c = !1,
                (s = this.s * g(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(s)
                  ? (r = new d(s.toString()))
                  : ((n = $(this.d)),
                    (s = ((e = this.e) - n.length + 1) % 3) &&
                      (n += 1 == s || -2 == s ? "0" : "00"),
                    (s = g(n, 1 / 3)),
                    (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((r = new d(
                      (n =
                        1 / 0 == s
                          ? "5e" + e
                          : (n = s.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1,
                            ) + e),
                    )).s = this.s)),
                o = (e = d.precision) + 3;
              ;

            )
              if (
                ((r = S(
                  (l = (u = (a = r).times(a).times(a)).plus(this))
                    .plus(this)
                    .times(a),
                  l.plus(u),
                  o + 2,
                  1,
                )),
                $(a.d).slice(0, o) === (n = $(r.d)).slice(0, o))
              ) {
                if (
                  "9999" != (n = n.slice(o - 3, o + 1)) &&
                  (i || "4999" != n)
                ) {
                  (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                    (Z(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                  break;
                }
                if (!i && (Z(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                  r = a;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (c = !0), Z(r, e, d.rounding, t);
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
            return Z(S(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (k.equals = k.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (k.floor = function () {
          return Z(new this.constructor(this), this.e + 1, 3);
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
                ? (t = (1 / L(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (s = q(o, 1, s.times(t), new o(1), !0));
            for (var u, c = e, l = new o(8); c--; )
              (u = s.times(s)), (s = a.minus(u.times(l.minus(u.times(l)))));
            return Z(s, (o.precision = n), (o.rounding = r), !0);
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
              i = q(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                (i = q(s, 2, (i = i.times(1 / L(5, e))), i, !0));
              for (var o, a = new s(5), u = new s(16), c = new s(20); e--; )
                (o = i.times(i)),
                  (i = i.times(a.plus(o.times(u.times(o).plus(c)))));
            }
            return (s.precision = t), (s.rounding = n), Z(i, t, n, !0);
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
                  ? A(t, r, i)
                  : new t(0)
                : new t(0 / 0)
              : e.isZero()
                ? A(t, r + 4, i).times(0.5)
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
                  (c = !1),
                  (n = n.times(n).minus(1).sqrt().plus(n)),
                  (c = !0),
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
                (c = !1),
                (n = n.times(n).plus(1).sqrt().plus(n)),
                (c = !0),
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
                  ? Z(new s(i), e, t, !0)
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
                  ? (((e = A(s, n + 4, r).times(0.5)).s = i.s), e)
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
              l = this,
              d = l.constructor,
              f = d.precision,
              p = d.rounding;
            if (l.isFinite()) {
              if (l.isZero()) return new d(l);
              else if (l.abs().eq(1) && f + 4 <= b)
                return ((o = A(d, f + 4, p).times(0.25)).s = l.s), o;
            } else {
              if (!l.s) return new d(0 / 0);
              if (f + 4 <= b)
                return ((o = A(d, f + 4, p).times(0.5)).s = l.s), o;
            }
            for (
              d.precision = a = f + 10,
                d.rounding = 1,
                e = n = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (
              c = !1,
                t = Math.ceil(a / 7),
                r = 1,
                u = l.times(l),
                o = new d(l),
                i = l;
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
              (c = !0),
              Z(o, (d.precision = f), (d.rounding = p), !0)
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
              l = u.precision,
              d = u.rounding;
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
              ((c = !1),
              x(
                (a = S(
                  (s = M(this, (o = l + 5))),
                  t ? j(u, o + 10) : M(e, o),
                  o,
                  1,
                )).d,
                (r = l),
                d,
              ))
            )
              do
                if (
                  ((o += 10),
                  (a = S((s = M(this, o)), t ? j(u, o + 10) : M(e, o), o, 1)),
                  !i)
                ) {
                  +$(a.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                    (a = Z(a, l + 1, 0));
                  break;
                }
              while (x(a.d, (r += 10), d));
            return (c = !0), Z(a, l, d);
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
              l,
              d,
              f,
              p,
              h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new h(e.d || this.s !== e.s ? this : 0 / 0))
                  : (e = new h(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((l = this.d),
              (p = e.d),
              (a = h.precision),
              (u = h.rounding),
              !l[0] || !p[0])
            ) {
              if (p[0]) e.s = -e.s;
              else {
                if (!l[0]) return new h(3 === u ? -0 : 0);
                e = new h(this);
              }
              return c ? Z(e, a, u) : e;
            }
            if (
              ((n = m(e.e / 7)),
              (d = m(this.e / 7)),
              (l = l.slice()),
              (s = d - n))
            ) {
              for (
                (f = s < 0)
                  ? ((t = l), (s = -s), (o = p.length))
                  : ((t = p), (n = d), (o = l.length)),
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
                (f = (r = l.length) < (o = p.length)) && (o = r), r = 0;
                r < o;
                r++
              )
                if (l[r] != p[r]) {
                  f = l[r] < p[r];
                  break;
                }
              s = 0;
            }
            for (
              f && ((t = l), (l = p), (p = t), (e.s = -e.s)),
                o = l.length,
                r = p.length - o;
              r > 0;
              --r
            )
              l[o++] = 0;
            for (r = p.length; r > s; ) {
              if (l[--r] < p[r]) {
                for (i = r; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
                --l[i], (l[r] += 1e7);
              }
              l[r] -= p[r];
            }
            for (; 0 === l[--o]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --n;
            return l[0]
              ? ((e.d = l), (e.e = P(l, n)), c ? Z(e, a, u) : e)
              : new h(3 === u ? -0 : 0);
          }),
        (k.modulo = k.mod =
          function (e) {
            var t,
              n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((c = !1),
                  9 == n.modulo
                    ? ((t = S(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = S(this, e, 0, n.modulo, 1)),
                  (t = t.times(e)),
                  (c = !0),
                  this.minus(t))
                : Z(new n(this), n.precision, n.rounding)
              : new n(0 / 0);
          }),
        (k.naturalExponential = k.exp =
          function () {
            return C(this);
          }),
        (k.naturalLogarithm = k.ln =
          function () {
            return M(this);
          }),
        (k.negated = k.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), Z(e);
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
              l,
              d,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new f(e.d || this.s === e.s ? this : 0 / 0))
                  : (e = new f(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((l = this.d),
              (d = e.d),
              (a = f.precision),
              (u = f.rounding),
              !l[0] || !d[0])
            )
              return d[0] || (e = new f(this)), c ? Z(e, a, u) : e;
            if (
              ((s = m(this.e / 7)),
              (r = m(e.e / 7)),
              (l = l.slice()),
              (i = s - r))
            ) {
              for (
                i < 0
                  ? ((n = l), (i = -i), (o = d.length))
                  : ((n = d), (r = s), (o = l.length)),
                  i > (o = (s = Math.ceil(a / 7)) > o ? s + 1 : o + 1) &&
                    ((i = o), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (o = l.length) - (i = d.length) < 0 &&
                ((i = o), (n = d), (d = l), (l = n)),
                t = 0;
              i;

            )
              (t = ((l[--i] = l[i] + d[i] + t) / 1e7) | 0), (l[i] %= 1e7);
            for (t && (l.unshift(t), ++r), o = l.length; 0 == l[--o]; ) l.pop();
            return (e.d = l), (e.e = P(l, r)), c ? Z(e, a, u) : e;
          }),
        (k.precision = k.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(d + e);
            return (
              this.d
                ? ((t = N(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = 0 / 0),
              t
            );
          }),
        (k.round = function () {
          var e = this.constructor;
          return Z(new e(this), this.e + 1, e.rounding);
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
                    if (r < 3) return t.isZero() ? t : q(e, 2, t, t);
                    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                      (t = q(e, 2, (t = t.times(1 / L(5, n))), t));
                    for (
                      var i, s = new e(5), o = new e(16), a = new e(20);
                      n--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(o.times(i).minus(a)))));
                    return t;
                  })(r, V(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  Z(i > 2 ? n.neg() : n, e, t, !0))
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
              l = this.constructor;
            if (1 !== u || !o || !o[0])
              return new l(
                !u || (u < 0 && (!o || o[0])) ? 0 / 0 : o ? this : 1 / 0,
              );
            for (
              c = !1,
                0 == (u = Math.sqrt(+this)) || 1 / 0 == u
                  ? (((t = $(o)).length + a) % 2 == 0 && (t += "0"),
                    (u = Math.sqrt(t)),
                    (a = m((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new l(
                      (t =
                        1 / 0 == u
                          ? "5e" + a
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + a),
                    )))
                  : (r = new l(u.toString())),
                n = (a = l.precision) + 3;
              ;

            )
              if (
                ((r = (s = r).plus(S(this, s, n + 2, 1)).times(0.5)),
                $(s.d).slice(0, n) === (t = $(r.d)).slice(0, n))
              ) {
                if (
                  "9999" != (t = t.slice(n - 3, n + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (Z(r, a + 1, 1), (e = !r.times(r).eq(this)));
                  break;
                }
                if (!i && (Z(s, a + 1, 0), s.times(s).eq(this))) {
                  r = s;
                  break;
                }
                (n += 4), (i = 1);
              }
            return (c = !0), Z(r, a, l.rounding, e);
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
                  Z(2 == i || 4 == i ? n.neg() : n, e, t, !0))
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
              l,
              d = this.constructor,
              f = this.d,
              p = (e = new d(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !p || !p[0]))
              return new d(
                !e.s || (f && !f[0] && !p) || (p && !p[0] && !f)
                  ? 0 / 0
                  : !f || !p
                    ? e.s / 0
                    : 0 * e.s,
              );
            for (
              n = m(this.e / 7) + m(e.e / 7),
                (u = f.length) < (l = p.length) &&
                  ((s = f), (f = p), (p = s), (o = u), (u = l), (l = o)),
                s = [],
                r = o = u + l;
              r--;

            )
              s.push(0);
            for (r = l; --r >= 0; ) {
              for (t = 0, i = u + r; i > r; )
                (a = s[i] + p[r] * f[i - r - 1] + t),
                  (s[i--] = a % 1e7 | 0),
                  (t = (a / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--o]; ) s.pop();
            return (
              t ? ++n : s.shift(),
              (e.d = s),
              (e.e = P(s, n)),
              c ? Z(e, d.precision, d.rounding) : e
            );
          }),
        (k.toBinary = function (e, t) {
          return W(this, 2, e, t);
        }),
        (k.toDecimalPlaces = k.toDP =
          function (e, t) {
            var n = this,
              r = n.constructor;
            return ((n = new r(n)), void 0 === e)
              ? n
              : (O(e, 0, 1e9),
                void 0 === t ? (t = r.rounding) : O(t, 0, 8),
                Z(n, e + n.e + 1, t));
          }),
        (k.toExponential = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = T(r, !0))
              : (O(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : O(t, 0, 8),
                (n = T((r = Z(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (k.toFixed = function (e, t) {
          var n,
            r,
            i = this.constructor;
          return (
            void 0 === e
              ? (n = T(this))
              : (O(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : O(t, 0, 8),
                (n = T(
                  (r = Z(new i(this), e + this.e + 1, t)),
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
            l,
            f,
            p,
            h,
            m = this.d,
            v = this.constructor;
          if (!m) return new v(this);
          if (
            ((l = n = new v(1)),
            (r = u = new v(0)),
            (o = (s = (t = new v(r)).e = N(m) - this.e - 1) % 7),
            (t.d[0] = g(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = s > 0 ? t : l;
          else {
            if (!(a = new v(e)).isInt() || a.lt(l)) throw Error(d + a);
            e = a.gt(t) ? (s > 0 ? t : l) : a;
          }
          for (
            c = !1,
              a = new v($(m)),
              f = v.precision,
              v.precision = s = 7 * m.length * 2;
            (p = S(a, t, 0, 1, 1)), 1 != (i = n.plus(p.times(r))).cmp(e);

          )
            (n = r),
              (r = i),
              (i = l),
              (l = u.plus(p.times(i))),
              (u = i),
              (i = t),
              (t = a.minus(p.times(i))),
              (a = i);
          return (
            (i = S(e.minus(n), r, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (n = n.plus(i.times(r))),
            (u.s = l.s = this.s),
            (h =
              1 >
              S(l, r, s, 1)
                .minus(this)
                .abs()
                .cmp(S(u, n, s, 1).minus(this).abs())
                ? [l, r]
                : [u, n]),
            (v.precision = f),
            (c = !0),
            h
          );
        }),
        (k.toHexadecimal = k.toHex =
          function (e, t) {
            return W(this, 16, e, t);
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
              void 0 === t ? (t = r.rounding) : O(t, 0, 8),
              !n.d)
            )
              return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
          }
          return (
            e.d[0]
              ? ((c = !1), (n = S(n, e, 0, t, 1).times(e)), (c = !0), Z(n))
              : ((e.s = n.s), (n = e)),
            n
          );
        }),
        (k.toNumber = function () {
          return +this;
        }),
        (k.toOctal = function (e, t) {
          return W(this, 8, e, t);
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
              l = +(e = new u(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(g(+a, l));
            if ((a = new u(a)).eq(1)) return a;
            if (((r = u.precision), (s = u.rounding), e.eq(1)))
              return Z(a, r, s);
            if (
              (t = m(e.e / 7)) >= e.d.length - 1 &&
              (n = l < 0 ? -l : l) <= 0x1fffffffffffff
            )
              return (
                (i = F(u, a, n, r)), e.s < 0 ? new u(1).div(i) : Z(i, r, s)
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
              0 != (n = g(+a, l)) && isFinite(n)
                ? new u(n + "").e
                : m(l * (Math.log("0." + $(a.d)) / Math.LN10 + a.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? o / 0 : 0)
              : ((c = !1),
                (u.rounding = a.s = 1),
                (n = Math.min(12, (t + "").length)),
                (i = C(e.times(M(a, r + n)), r)).d &&
                  x((i = Z(i, r + 5, 1)).d, r, s) &&
                  ((t = r + 10),
                  +$((i = Z(C(e.times(M(a, t + n)), t), t + 5, 1)).d).slice(
                    r + 1,
                    r + 15,
                  ) +
                    1 ==
                    1e14 && (i = Z(i, r + 1, 0))),
                (i.s = o),
                (c = !0),
                (u.rounding = s),
                Z(i, r, s));
          }),
        (k.toPrecision = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = T(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
              : (O(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : O(t, 0, 8),
                (n = T(
                  (r = Z(new i(r), e, t)),
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
                : (O(e, 1, 1e9), void 0 === t ? (t = n.rounding) : O(t, 0, 8)),
              Z(new n(this), e, t)
            );
          }),
        (k.toString = function () {
          var e = this.constructor,
            t = T(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (k.truncated = k.trunc =
          function () {
            return Z(new this.constructor(this), this.e + 1, 1);
          }),
        (k.valueOf = k.toJSON =
          function () {
            var e = this.constructor,
              t = T(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
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
        return function (i, s, o, a, u, c) {
          var l,
            d,
            f,
            p,
            h,
            g,
            v,
            y,
            _,
            w,
            z,
            b,
            k,
            $,
            O,
            x,
            E,
            S,
            T,
            P,
            j = i.constructor,
            A = i.s == s.s ? 1 : -1,
            N = i.d,
            I = s.d;
          if (!N || !N[0] || !I || !I[0])
            return new j(
              !i.s || !s.s || (N ? I && N[0] == I[0] : !I)
                ? 0 / 0
                : (N && 0 == N[0]) || !I
                  ? 0 * A
                  : A / 0,
            );
          for (
            c
              ? ((h = 1), (d = i.e - s.e))
              : ((c = 1e7), (h = 7), (d = m(i.e / h) - m(s.e / h))),
              T = I.length,
              E = N.length,
              w = (_ = new j(A)).d = [],
              f = 0;
            I[f] == (N[f] || 0);
            f++
          );
          if (
            (I[f] > (N[f] || 0) && d--,
            null == o
              ? (($ = o = j.precision), (a = j.rounding))
              : ($ = u ? o + (i.e - s.e) + 1 : o),
            $ < 0)
          )
            w.push(1), (g = !0);
          else {
            if ((($ = ($ / h + 2) | 0), (f = 0), 1 == T)) {
              for (p = 0, I = I[0], $++; (f < E || p) && $--; f++)
                (O = p * c + (N[f] || 0)),
                  (w[f] = (O / I) | 0),
                  (p = O % I | 0);
              g = p || f < E;
            } else {
              for (
                (p = (c / (I[0] + 1)) | 0) > 1 &&
                  ((I = e(I, p, c)),
                  (N = e(N, p, c)),
                  (T = I.length),
                  (E = N.length)),
                  x = T,
                  b = (z = N.slice(0, T)).length;
                b < T;

              )
                z[b++] = 0;
              (P = I.slice()).unshift(0), (S = I[0]), I[1] >= c / 2 && ++S;
              do
                (p = 0),
                  (l = t(I, z, T, b)) < 0
                    ? ((k = z[0]),
                      T != b && (k = k * c + (z[1] || 0)),
                      (p = (k / S) | 0) > 1
                        ? (p >= c && (p = c - 1),
                          (y = (v = e(I, p, c)).length),
                          (b = z.length),
                          1 == (l = t(v, z, y, b)) &&
                            (p--, n(v, T < y ? P : I, y, c)))
                        : (0 == p && (l = p = 1), (v = I.slice())),
                      (y = v.length) < b && v.unshift(0),
                      n(z, v, b, c),
                      -1 == l &&
                        ((b = z.length),
                        (l = t(I, z, T, b)) < 1 &&
                          (p++, n(z, T < b ? P : I, b, c))),
                      (b = z.length))
                    : 0 === l && (p++, (z = [0])),
                  (w[f++] = p),
                  l && z[0] ? (z[b++] = N[x] || 0) : ((z = [N[x]]), (b = 1));
              while ((x++ < E || void 0 !== z[0]) && $--);
              g = void 0 !== z[0];
            }
            w[0] || w.shift();
          }
          if (1 == h) (_.e = d), (r = g);
          else {
            for (f = 1, p = w[0]; p >= 10; p /= 10) f++;
            (_.e = f + d * h - 1), Z(_, u ? o + _.e + 1 : o, a, g);
          }
          return _;
        };
      })();
      function Z(e, t, n, r) {
        var i,
          s,
          o,
          a,
          u,
          l,
          d,
          f,
          p,
          h = e.constructor;
        t: if (null != t) {
          if (!(f = e.d)) return e;
          for (i = 1, a = f[0]; a >= 10; a /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (o = t),
              (u = ((d = f[(p = 0)]) / g(10, i - o - 1)) % 10 | 0);
          else if ((p = Math.ceil((s + 1) / 7)) >= (a = f.length))
            if (r) {
              for (; a++ <= p; ) f.push(0);
              (d = u = 0), (i = 1), (s %= 7), (o = s - 7 + 1);
            } else break t;
          else {
            for (d = a = f[p], i = 1; a >= 10; a /= 10) i++;
            (s %= 7),
              (u = (o = s - 7 + i) < 0 ? 0 : (d / g(10, i - o - 1)) % 10 | 0);
          }
          if (
            ((r =
              r ||
              t < 0 ||
              void 0 !== f[p + 1] ||
              (o < 0 ? d : d % g(10, i - o - 1))),
            (l =
              n < 4
                ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == n ||
                      r ||
                      (6 == n &&
                        (s > 0 ? (o > 0 ? d / g(10, i - o) : 0) : f[p - 1]) %
                          10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
          )
            return (
              (f.length = 0),
              l
                ? ((t -= e.e + 1),
                  (f[0] = g(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (f[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((f.length = p), (a = 1), p--)
              : ((f.length = p + 1),
                (a = g(10, 7 - s)),
                (f[p] = o > 0 ? ((d / g(10, i - o)) % g(10, o) | 0) * a : 0)),
            l)
          )
            for (;;)
              if (0 == p) {
                for (s = 1, o = f[0]; o >= 10; o /= 10) s++;
                for (o = f[0] += a, a = 1; o >= 10; o /= 10) a++;
                s != a && (e.e++, 1e7 == f[0] && (f[0] = 1));
                break;
              } else {
                if (((f[p] += a), 1e7 != f[p])) break;
                (f[p--] = 0), (a = 1);
              }
          for (s = f.length; 0 === f[--s]; ) f.pop();
        }
        return (
          c &&
            (e.e > h.maxE
              ? ((e.d = null), (e.e = 0 / 0))
              : e.e < h.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function T(e, t, n) {
        if (!e.isFinite()) return U(e);
        var r,
          i = e.e,
          s = $(e.d),
          o = s.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (s = s.charAt(0) + "." + s.slice(1) + I(r))
                : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((s = "0." + I(-i - 1) + s),
                n && (r = n - o) > 0 && (s += I(r)))
              : i >= o
                ? ((s += I(i + 1 - o)),
                  n && (r = n - i - 1) > 0 && (s = s + "." + I(r)))
                : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
                  n &&
                    (r = n - o) > 0 &&
                    (i + 1 === o && (s += "."), (s += I(r)))),
          s
        );
      }
      function P(e, t) {
        var n = e[0];
        for (t *= 7; n >= 10; n /= 10) t++;
        return t;
      }
      function j(e, t, n) {
        if (t > z) throw ((c = !0), n && (e.precision = n), Error(f));
        return Z(new e(o), t, 1, !0);
      }
      function A(e, t, n) {
        if (t > b) throw Error(f);
        return Z(new e(a), t, n, !0);
      }
      function N(e) {
        var t = e.length - 1,
          n = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) n--;
          for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
      }
      function I(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function F(e, t, n, r) {
        var i,
          s = new e(1),
          o = Math.ceil(r / 7 + 4);
        for (c = !1; ; ) {
          if (
            (n % 2 && B((s = s.times(t)).d, o) && (i = !0),
            0 === (n = m(n / 2)))
          ) {
            (n = s.d.length - 1), i && 0 === s.d[n] && ++s.d[n];
            break;
          }
          B((t = t.times(t)).d, o);
        }
        return (c = !0), s;
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
      function C(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          u,
          l = 0,
          d = 0,
          f = 0,
          p = e.constructor,
          h = p.rounding,
          m = p.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new p(
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
          null == t ? ((c = !1), (u = m)) : (u = t), a = new p(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (f += 5);
        for (
          u += r = ((Math.log(g(2, f)) / Math.LN10) * 2 + 5) | 0,
            n = s = o = new p(1),
            p.precision = u;
          ;

        ) {
          if (
            ((s = Z(s.times(e), u, 1)),
            (n = n.times(++d)),
            $((a = o.plus(S(s, n, u, 1))).d).slice(0, u) === $(o.d).slice(0, u))
          ) {
            for (i = f; i--; ) o = Z(o.times(o), u, 1);
            if (null != t) return (p.precision = m), o;
            if (!(l < 3 && x(o.d, u - r, h, l)))
              return Z(o, (p.precision = m), h, (c = !0));
            (p.precision = u += 10), (n = s = a = new p(1)), (d = 0), l++;
          }
          o = a;
        }
      }
      function M(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          u,
          l,
          d,
          f,
          p,
          h = 1,
          m = e,
          g = m.d,
          v = m.constructor,
          y = v.rounding,
          _ = v.precision;
        if (m.s < 0 || !g || !g[0] || (!m.e && 1 == g[0] && 1 == g.length))
          return new v(g && !g[0] ? -1 / 0 : 1 != m.s ? 0 / 0 : g ? 0 : m);
        if (
          (null == t ? ((c = !1), (d = _)) : (d = t),
          (v.precision = d += 10),
          (r = (n = $(g)).charAt(0)),
          !(15e14 > Math.abs((s = m.e))))
        )
          return (
            (l = j(v, d + 2, _).times(s + "")),
            (m = M(new v(r + "." + n.slice(1)), d - 10).plus(l)),
            (v.precision = _),
            null == t ? Z(m, _, y, (c = !0)) : m
          );
        for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
          (r = (n = $((m = m.times(e)).d)).charAt(0)), h++;
        for (
          s = m.e,
            r > 1
              ? ((m = new v("0." + n)), s++)
              : (m = new v(r + "." + n.slice(1))),
            f = m,
            u = o = m = S(m.minus(1), m.plus(1), d, 1),
            p = Z(m.times(m), d, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = Z(o.times(p), d, 1)),
            $((l = u.plus(S(o, new v(i), d, 1))).d).slice(0, d) ===
              $(u.d).slice(0, d))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(j(v, d + 2, _).times(s + ""))),
              (u = S(u, new v(h), d, 1)),
              null != t)
            )
              return (v.precision = _), u;
            if (!x(u.d, d - 10, y, a))
              return Z(u, (v.precision = _), y, (c = !0));
            (v.precision = d += 10),
              (l = o = m = S(f.minus(1), f.plus(1), d, 1)),
              (p = Z(m.times(m), d, 1)),
              (i = a = 1);
          }
          (u = l), (i += 2);
        }
      }
      function U(e) {
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
            c &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = 0 / 0))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function q(e, t, n, r, i) {
        var s,
          o,
          a,
          u,
          l = e.precision,
          d = Math.ceil(l / 7);
        for (c = !1, u = n.times(n), a = new e(r); ; ) {
          if (
            ((o = S(a.times(u), new e(t++ * t++), l, 1)),
            (a = i ? r.plus(o) : r.minus(o)),
            (r = S(o.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (o = a.plus(r)).d[d])
          ) {
            for (s = d; o.d[s] === a.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = a), (a = r), (r = o), (o = s);
        }
        return (c = !0), (o.d.length = d + 1), o;
      }
      function L(e, t) {
        for (var n = e; --t; ) n *= e;
        return n;
      }
      function V(e, t) {
        var n,
          r = t.s < 0,
          s = A(e, e.precision, 1),
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
      function W(e, t, n, i) {
        var o,
          a,
          u,
          c,
          l,
          d,
          f,
          p,
          h,
          m = e.constructor,
          g = void 0 !== n;
        if (
          (g
            ? (O(n, 1, 1e9), void 0 === i ? (i = m.rounding) : O(i, 0, 8))
            : ((n = m.precision), (i = m.rounding)),
          e.isFinite())
        ) {
          for (
            u = (f = T(e)).indexOf("."),
              g
                ? ((o = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (o = t),
              u >= 0 &&
                ((f = f.replace(".", "")),
                ((h = new m(1)).e = f.length - u),
                (h.d = E(T(h), 10, o)),
                (h.e = h.d.length)),
              a = l = (p = E(f, 10, o)).length;
            0 == p[--l];

          )
            p.pop();
          if (p[0]) {
            if (
              (u < 0
                ? a--
                : (((e = new m(e)).d = p),
                  (e.e = a),
                  (p = (e = S(e, h, n, i, 0, o)).d),
                  (a = e.e),
                  (d = r)),
              (u = p[n]),
              (c = o / 2),
              (d = d || void 0 !== p[n + 1]),
              (d =
                i < 4
                  ? (void 0 !== u || d) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : u > c ||
                    (u === c &&
                      (4 === i ||
                        d ||
                        (6 === i && 1 & p[n - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (p.length = n),
              d)
            )
              for (; ++p[--n] > o - 1; ) (p[n] = 0), n || (++a, p.unshift(1));
            for (l = p.length; !p[l - 1]; --l);
            for (u = 0, f = ""; u < l; u++) f += s.charAt(p[u]);
            if (g) {
              if (l > 1)
                if (16 == t || 8 == t) {
                  for (u = 16 == t ? 4 : 3, --l; l % u; l++) f += "0";
                  for (l = (p = E(f, o, t)).length; !p[l - 1]; --l);
                  for (u = 1, f = "1."; u < l; u++) f += s.charAt(p[u]);
                } else f = f.charAt(0) + "." + f.slice(1);
              f = f + (a < 0 ? "p" : "p+") + a;
            } else if (a < 0) {
              for (; ++a; ) f = "0" + f;
              f = "0." + f;
            } else if (++a > l) for (a -= l; a--; ) f += "0";
            else a < l && (f = f.slice(0, a) + "." + f.slice(a));
          } else f = g ? "0p+0" : "0";
          f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
        } else f = U(e);
        return e.s < 0 ? "-" + f : f;
      }
      function B(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function H(e) {
        return new this(e).abs();
      }
      function K(e) {
        return new this(e).acos();
      }
      function G(e) {
        return new this(e).acosh();
      }
      function X(e, t) {
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
                ? ((n = t.s < 0 ? A(this, r, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((n = A(this, s, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = s),
                      (this.rounding = 1),
                      (n = this.atan(S(e, t, s, 1))),
                      (t = A(this, s, 1)),
                      (this.precision = r),
                      (this.rounding = i),
                      (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                    : (n = this.atan(S(e, t, s, 1)))
              : ((n = A(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(0 / 0)),
          n
        );
      }
      function er(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return Z((e = new this(e)), e.e + 1, 2);
      }
      function es(e, t, n) {
        return new this(e).clamp(t, n);
      }
      function eo(e) {
        if (!e || "object" != typeof e) throw Error(l + "Object expected");
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
            else throw Error(d + n + ": " + r);
        if (((n = "crypto"), i && (this[n] = u[n]), void 0 !== (r = e[n])))
          if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[n] = !0;
              else throw Error(p);
            else this[n] = !1;
          else throw Error(d + n + ": " + r);
        return this;
      }
      function ea(e) {
        return new this(e).cos();
      }
      function eu(e) {
        return new this(e).cosh();
      }
      function ec(e, t) {
        return new this(e).div(t);
      }
      function el(e) {
        return new this(e).exp();
      }
      function ed(e) {
        return Z((e = new this(e)), e.e + 1, 3);
      }
      function ef() {
        var e,
          t,
          n = new this(0);
        for (e = 0, c = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            n.d && (n = n.plus(t.times(t)));
          else {
            if (t.s) return (c = !0), new this(1 / 0);
            n = t;
          }
        return (c = !0), n.sqrt();
      }
      function ep(e) {
        return e instanceof eN || (e && e.toStringTag === h) || !1;
      }
      function eh(e) {
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
      function ez(e, t) {
        return new this(e).mul(t);
      }
      function eb(e, t) {
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
          (void 0 === e ? (e = this.precision) : O(e, 1, 1e9),
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
          } else throw Error(p);
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
      function e$(e) {
        return Z((e = new this(e)), e.e + 1, this.rounding);
      }
      function eO(e) {
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
      function eZ(e, t) {
        return new this(e).sub(t);
      }
      function eT() {
        var e = 0,
          t = arguments,
          n = new this(t[0]);
        for (c = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
        return (c = !0), Z(n, this.precision, this.rounding);
      }
      function eP(e) {
        return new this(e).tan();
      }
      function ej(e) {
        return new this(e).tanh();
      }
      function eA(e) {
        return Z((e = new this(e)), e.e + 1, 1);
      }
      (k[Symbol.for("nodejs.util.inspect.custom")] = k.toString),
        (k[Symbol.toStringTag] = "Decimal");
      var eN = (k.constructor = (function e(t) {
        var n, r, i;
        function s(e) {
          var t, n, r;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), ep(e))) {
            (this.s = e.s),
              c
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
              c
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
                    var n, r, i, s, o, a, u, l, f;
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
                    else throw Error(d + t);
                    for (
                      (s = t.search(/p/i)) > 0
                        ? ((u = +t.slice(s + 1)), (t = t.substring(2, s)))
                        : (t = t.slice(2)),
                        o = (s = t.indexOf(".")) >= 0,
                        r = e.constructor,
                        o &&
                          ((s = (a = (t = t.replace(".", "")).length) - s),
                          (i = F(r, new r(n), s, 2 * s))),
                        s = f = (l = E(t, n, 1e7)).length - 1;
                      0 === l[s];
                      --s
                    )
                      l.pop();
                    return s < 0
                      ? new r(0 * e.s)
                      : ((e.e = P(l, f)),
                        (e.d = l),
                        (c = !1),
                        o && (e = S(e, i, 4 * a)),
                        u &&
                          (e = e.times(
                            54 > Math.abs(u) ? g(2, u) : eN.pow(2, u),
                          )),
                        (c = !0),
                        e);
                  })(this, e)
            );
          if ("bigint" === r)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              J(this, e.toString())
            );
          throw Error(d + e);
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
          (s.isDecimal = ep),
          (s.abs = H),
          (s.acos = K),
          (s.acosh = G),
          (s.add = X),
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
          (s.div = ec),
          (s.exp = el),
          (s.floor = ed),
          (s.hypot = ef),
          (s.ln = eh),
          (s.log = em),
          (s.log10 = ev),
          (s.log2 = eg),
          (s.max = ey),
          (s.min = e_),
          (s.mod = ew),
          (s.mul = ez),
          (s.pow = eb),
          (s.random = ek),
          (s.round = e$),
          (s.sign = eO),
          (s.sin = ex),
          (s.sinh = eE),
          (s.sqrt = eS),
          (s.sub = eZ),
          (s.sum = eT),
          (s.tan = eP),
          (s.tanh = ej),
          (s.trunc = eA),
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
      (o = new eN(o)), (a = new eN(a)), n.d(t, {}, { W: eN });
    },
    449019(e, t, n) {
      "use strict";
      var r;
      function i(e, t, n) {
        function r(n, r) {
          if (
            (n._zod ||
              Object.defineProperty(n, "_zod", {
                value: { def: r, constr: o, traits: new Set() },
                enumerable: !1,
              }),
            n._zod.traits.has(e))
          )
            return;
          n._zod.traits.add(e), t(n, r);
          let i = o.prototype,
            s = Object.keys(i);
          for (let e = 0; e < s.length; e++) {
            let t = s[e];
            t in n || (n[t] = i[t].bind(n));
          }
        }
        let i = n?.Parent ?? Object;
        class s extends i {}
        function o(e) {
          var t;
          let i = n?.Parent ? new s() : this;
          for (let n of (r(i, e),
          (t = i._zod).deferred ?? (t.deferred = []),
          i._zod.deferred))
            n();
          return i;
        }
        return (
          Object.defineProperty(s, "name", { value: e }),
          Object.defineProperty(o, "init", { value: r }),
          Object.defineProperty(o, Symbol.hasInstance, {
            value: (t) =>
              (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
          }),
          Object.defineProperty(o, "name", { value: e }),
          o
        );
      }
      n.d(t, {
        EB: () => t1,
        k5: () => nb,
        Ik: () => ng,
        jg: () => nw,
        Yj: () => t0,
      }),
        Object.freeze({ status: "aborted" }),
        Symbol("zod_brand");
      class s extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class o extends Error {
        constructor(e) {
          super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = "ZodEncodeError");
        }
      }
      let a = {};
      function u(e) {
        return e && Object.assign(a, e), a;
      }
      let c = /^[cC][^\s-]{8,}$/,
        l = /^[0-9a-z]+$/,
        d = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
        f = /^[0-9a-vA-V]{20}$/,
        p = /^[A-Za-z0-9]{27}$/,
        h = /^[a-zA-Z0-9_-]{21}$/,
        m =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        g =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        v = (e) =>
          e
            ? RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        y =
          /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        _ =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        w =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        z =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        b =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        k =
          /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
        $ = /^[A-Za-z0-9_-]*$/,
        O = /^\+[1-9]\d{6,14}$/,
        x =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        E = RegExp(`^${x}$`);
      function S(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision
          ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
          : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      let Z = /^-?\d+(?:\.\d+)?$/,
        T = /^[^A-Z]*$/,
        P = /^[^a-z]*$/;
      function j(e) {
        let t = Object.values(e).filter((e) => "number" == typeof e);
        return Object.entries(e)
          .filter(([e, n]) => -1 === t.indexOf(+e))
          .map(([e, t]) => t);
      }
      function A(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
      }
      function N(e) {
        return {
          get value() {
            {
              let t = e();
              return Object.defineProperty(this, "value", { value: t }), t;
            }
          },
        };
      }
      function I(e) {
        let t = +!!e.startsWith("^"),
          n = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, n);
      }
      let F = Symbol("evaluating");
      function R(e, t, n) {
        let r;
        Object.defineProperty(e, t, {
          get() {
            if (r !== F) return void 0 === r && ((r = F), (r = n())), r;
          },
          set(n) {
            Object.defineProperty(e, t, { value: n });
          },
          configurable: !0,
        });
      }
      function D(e, t, n) {
        Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function C(...e) {
        let t = {};
        for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
        return Object.defineProperties({}, t);
      }
      function M(e) {
        return JSON.stringify(e);
      }
      let U =
        "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
      function J(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      let q = N(() => {
        if (
          "u" > typeof navigator &&
          navigator?.userAgent?.includes("Cloudflare")
        )
          return !1;
        try {
          return Function(""), !0;
        } catch (e) {
          return !1;
        }
      });
      function L(e) {
        if (!1 === J(e)) return !1;
        let t = e.constructor;
        if (void 0 === t || "function" != typeof t) return !0;
        let n = t.prototype;
        return (
          !1 !== J(n) &&
          !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        );
      }
      function V(e) {
        return L(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
      }
      let W = new Set(["string", "number", "symbol"]);
      function B(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function H(e, t, n) {
        let r = new e._zod.constr(t ?? e._zod.def);
        return (!t || n?.parent) && (r._zod.parent = e), r;
      }
      function K(e) {
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
      function G(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let n = t; n < e.issues.length; n++)
          if (e.issues[n]?.continue !== !0) return !0;
        return !1;
      }
      function X(e, t) {
        return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
      }
      function Y(e) {
        return "string" == typeof e ? e : e?.message;
      }
      function Q(e, t, n) {
        let r = { ...e, path: e.path ?? [] };
        return (
          e.message ||
            (r.message =
              Y(e.inst?._zod.def?.error?.(e)) ??
              Y(t?.error?.(e)) ??
              Y(n.customError?.(e)) ??
              Y(n.localeError?.(e)) ??
              "Invalid input"),
          delete r.inst,
          delete r.continue,
          t?.reportInput || delete r.input,
          r
        );
      }
      function ee(e) {
        return Array.isArray(e)
          ? "array"
          : "string" == typeof e
            ? "string"
            : "unknown";
      }
      function et(...e) {
        let [t, n, r] = e;
        return "string" == typeof t
          ? { message: t, code: "custom", input: n, inst: r }
          : { ...t };
      }
      let en = i("$ZodCheck", (e, t) => {
          var n;
          e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (n = e._zod).onattach ?? (n.onattach = []);
        }),
        er = i("$ZodCheckMaxLength", (e, t) => {
          var n;
          en.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return null != t && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag.maximum ?? 1 / 0;
              t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
              let r = n.value;
              if (r.length <= t.maximum) return;
              let i = ee(r);
              n.issues.push({
                origin: i,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        ei = i("$ZodCheckMinLength", (e, t) => {
          var n;
          en.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return null != t && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag.minimum ?? -1 / 0;
              t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
              let r = n.value;
              if (r.length >= t.minimum) return;
              let i = ee(r);
              n.issues.push({
                origin: i,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        es = i("$ZodCheckLengthEquals", (e, t) => {
          var n;
          en.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return null != t && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag;
              (n.minimum = t.length),
                (n.maximum = t.length),
                (n.length = t.length);
            }),
            (e._zod.check = (n) => {
              let r = n.value,
                i = r.length;
              if (i === t.length) return;
              let s = ee(r),
                o = i > t.length;
              n.issues.push({
                origin: s,
                ...(o
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
        eo = i("$ZodCheckStringFormat", (e, t) => {
          var n, r;
          en.init(e, t),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag;
              (n.format = t.format),
                t.pattern &&
                  (n.patterns ?? (n.patterns = new Set()),
                  n.patterns.add(t.pattern));
            }),
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
        ea = i("$ZodCheckRegex", (e, t) => {
          eo.init(e, t),
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
        eu = i("$ZodCheckLowerCase", (e, t) => {
          t.pattern ?? (t.pattern = T), eo.init(e, t);
        }),
        ec = i("$ZodCheckUpperCase", (e, t) => {
          t.pattern ?? (t.pattern = P), eo.init(e, t);
        }),
        el = i("$ZodCheckIncludes", (e, t) => {
          en.init(e, t);
          let n = B(t.includes),
            r = new RegExp(
              "number" == typeof t.position ? `^.{${t.position}}${n}` : n,
            );
          (t.pattern = r),
            e._zod.onattach.push((e) => {
              let t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(r);
            }),
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
        ed = i("$ZodCheckStartsWith", (e, t) => {
          en.init(e, t);
          let n = RegExp(`^${B(t.prefix)}.*`);
          t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
              let t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
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
        ef = i("$ZodCheckEndsWith", (e, t) => {
          en.init(e, t);
          let n = RegExp(`.*${B(t.suffix)}$`);
          t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
              let t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
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
        ep = i("$ZodCheckOverwrite", (e, t) => {
          en.init(e, t),
            (e._zod.check = (e) => {
              e.value = t.tx(e.value);
            });
        });
      class eh {
        constructor(e = []) {
          (this.content = []), (this.indent = 0), this && (this.args = e);
        }
        indented(e) {
          (this.indent += 1), e(this), (this.indent -= 1);
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
            t = this?.args,
            n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
          return new e(...t, n.join("\n"));
        }
      }
      let em = (e, t) => {
          (e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, A, 2)),
            Object.defineProperty(e, "toString", {
              value: () => e.message,
              enumerable: !1,
            });
        },
        eg = i("$ZodError", em),
        ev = i("$ZodError", em, { Parent: Error }),
        ey = (e) => (t, n, r, i) => {
          let o = r ? Object.assign(r, { async: !1 }) : { async: !1 },
            a = t._zod.run({ value: n, issues: [] }, o);
          if (a instanceof Promise) throw new s();
          if (a.issues.length) {
            let t = new (i?.Err ?? e)(a.issues.map((e) => Q(e, o, u())));
            throw (U(t, i?.callee), t);
          }
          return a.value;
        },
        e_ = (e) => async (t, n, r, i) => {
          let s = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            o = t._zod.run({ value: n, issues: [] }, s);
          if ((o instanceof Promise && (o = await o), o.issues.length)) {
            let t = new (i?.Err ?? e)(o.issues.map((e) => Q(e, s, u())));
            throw (U(t, i?.callee), t);
          }
          return o.value;
        },
        ew = (e) => (t, n, r) => {
          let i = r ? { ...r, async: !1 } : { async: !1 },
            o = t._zod.run({ value: n, issues: [] }, i);
          if (o instanceof Promise) throw new s();
          return o.issues.length
            ? {
                success: !1,
                error: new (e ?? eg)(o.issues.map((e) => Q(e, i, u()))),
              }
            : { success: !0, data: o.value };
        },
        ez = ew(ev),
        eb = (e) => async (t, n, r) => {
          let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            s = t._zod.run({ value: n, issues: [] }, i);
          return (
            s instanceof Promise && (s = await s),
            s.issues.length
              ? { success: !1, error: new e(s.issues.map((e) => Q(e, i, u()))) }
              : { success: !0, data: s.value }
          );
        },
        ek = eb(ev),
        e$ = { major: 4, minor: 3, patch: 6 },
        eO = i("$ZodType", (e, t) => {
          var n;
          e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = e$);
          let r = [...(e._zod.def.checks ?? [])];
          for (let t of (e._zod.traits.has("$ZodCheck") && r.unshift(e), r))
            for (let n of t._zod.onattach) n(e);
          if (0 === r.length)
            (n = e._zod).deferred ?? (n.deferred = []),
              e._zod.deferred?.push(() => {
                e._zod.run = e._zod.parse;
              });
          else {
            let t = (e, t, n) => {
                let r,
                  i = G(e);
                for (let o of t) {
                  if (o._zod.def.when) {
                    if (!o._zod.def.when(e)) continue;
                  } else if (i) continue;
                  let t = e.issues.length,
                    a = o._zod.check(e);
                  if (a instanceof Promise && n?.async === !1) throw new s();
                  if (r || a instanceof Promise)
                    r = (r ?? Promise.resolve()).then(async () => {
                      await a, e.issues.length !== t && (i || (i = G(e, t)));
                    });
                  else {
                    if (e.issues.length === t) continue;
                    i || (i = G(e, t));
                  }
                }
                return r ? r.then(() => e) : e;
              },
              n = (n, i, o) => {
                if (G(n)) return (n.aborted = !0), n;
                let a = t(i, r, o);
                if (a instanceof Promise) {
                  if (!1 === o.async) throw new s();
                  return a.then((t) => e._zod.parse(t, o));
                }
                return e._zod.parse(a, o);
              };
            e._zod.run = (i, o) => {
              if (o.skipChecks) return e._zod.parse(i, o);
              if ("backward" === o.direction) {
                let t = e._zod.parse(
                  { value: i.value, issues: [] },
                  { ...o, skipChecks: !0 },
                );
                return t instanceof Promise
                  ? t.then((e) => n(e, i, o))
                  : n(t, i, o);
              }
              let a = e._zod.parse(i, o);
              if (a instanceof Promise) {
                if (!1 === o.async) throw new s();
                return a.then((e) => t(e, r, o));
              }
              return t(a, r, o);
            };
          }
          R(e, "~standard", () => ({
            validate: (t) => {
              try {
                let n = ez(e, t);
                return n.success
                  ? { value: n.data }
                  : { issues: n.error?.issues };
              } catch (n) {
                return ek(e, t).then((e) =>
                  e.success ? { value: e.data } : { issues: e.error?.issues },
                );
              }
            },
            vendor: "zod",
            version: 1,
          }));
        }),
        ex = i("$ZodString", (e, t) => {
          var n;
          let r;
          eO.init(e, t),
            (e._zod.pattern =
              [...(e?._zod.bag?.patterns ?? [])].pop() ??
              ((r = (n = e._zod.bag)
                ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}`
                : "[\\s\\S]*"),
              RegExp(`^${r}$`))),
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
        eE = i("$ZodStringFormat", (e, t) => {
          eo.init(e, t), ex.init(e, t);
        }),
        eS = i("$ZodGUID", (e, t) => {
          t.pattern ?? (t.pattern = g), eE.init(e, t);
        }),
        eZ = i("$ZodUUID", (e, t) => {
          if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
              t.version
            ];
            if (void 0 === e)
              throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = v(e));
          } else t.pattern ?? (t.pattern = v());
          eE.init(e, t);
        }),
        eT = i("$ZodEmail", (e, t) => {
          t.pattern ?? (t.pattern = y), eE.init(e, t);
        }),
        eP = i("$ZodURL", (e, t) => {
          eE.init(e, t),
            (e._zod.check = (n) => {
              try {
                let r = n.value.trim(),
                  i = new URL(r);
                t.hostname &&
                  ((t.hostname.lastIndex = 0),
                  t.hostname.test(i.hostname) ||
                    n.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid hostname",
                      pattern: t.hostname.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                  t.protocol &&
                    ((t.protocol.lastIndex = 0),
                    t.protocol.test(
                      i.protocol.endsWith(":")
                        ? i.protocol.slice(0, -1)
                        : i.protocol,
                    ) ||
                      n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: t.protocol.source,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                      })),
                  t.normalize ? (n.value = i.href) : (n.value = r);
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
        ej = i("$ZodEmoji", (e, t) => {
          t.pattern ??
            (t.pattern = RegExp(
              "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
              "u",
            )),
            eE.init(e, t);
        }),
        eA = i("$ZodNanoID", (e, t) => {
          t.pattern ?? (t.pattern = h), eE.init(e, t);
        }),
        eN = i("$ZodCUID", (e, t) => {
          t.pattern ?? (t.pattern = c), eE.init(e, t);
        }),
        eI = i("$ZodCUID2", (e, t) => {
          t.pattern ?? (t.pattern = l), eE.init(e, t);
        }),
        eF = i("$ZodULID", (e, t) => {
          t.pattern ?? (t.pattern = d), eE.init(e, t);
        }),
        eR = i("$ZodXID", (e, t) => {
          t.pattern ?? (t.pattern = f), eE.init(e, t);
        }),
        eD = i("$ZodKSUID", (e, t) => {
          t.pattern ?? (t.pattern = p), eE.init(e, t);
        }),
        eC = i("$ZodISODateTime", (e, t) => {
          let n, r, i;
          t.pattern ??
            ((n = S({ precision: t.precision })),
            (r = ["Z"]),
            t.local && r.push(""),
            t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
            (i = `${n}(?:${r.join("|")})`),
            (t.pattern = RegExp(`^${x}T(?:${i})$`))),
            eE.init(e, t);
        }),
        eM = i("$ZodISODate", (e, t) => {
          t.pattern ?? (t.pattern = E), eE.init(e, t);
        }),
        eU = i("$ZodISOTime", (e, t) => {
          t.pattern ?? (t.pattern = RegExp(`^${S(t)}$`)), eE.init(e, t);
        }),
        eJ = i("$ZodISODuration", (e, t) => {
          t.pattern ?? (t.pattern = m), eE.init(e, t);
        }),
        eq = i("$ZodIPv4", (e, t) => {
          t.pattern ?? (t.pattern = _),
            eE.init(e, t),
            (e._zod.bag.format = "ipv4");
        }),
        eL = i("$ZodIPv6", (e, t) => {
          t.pattern ?? (t.pattern = w),
            eE.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (n) => {
              try {
                new URL(`http://[${n.value}]`);
              } catch {
                n.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        eV = i("$ZodCIDRv4", (e, t) => {
          t.pattern ?? (t.pattern = z), eE.init(e, t);
        }),
        eW = i("$ZodCIDRv6", (e, t) => {
          t.pattern ?? (t.pattern = b),
            eE.init(e, t),
            (e._zod.check = (n) => {
              let r = n.value.split("/");
              try {
                if (2 !== r.length) throw Error();
                let [e, t] = r;
                if (!t) throw Error();
                let n = Number(t);
                if (`${n}` !== t || n < 0 || n > 128) throw Error();
                new URL(`http://[${e}]`);
              } catch {
                n.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        });
      function eB(e) {
        if ("" === e) return !0;
        if (e.length % 4 != 0) return !1;
        try {
          return atob(e), !0;
        } catch {
          return !1;
        }
      }
      let eH = i("$ZodBase64", (e, t) => {
          t.pattern ?? (t.pattern = k),
            eE.init(e, t),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (n) => {
              eB(n.value) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eK = i("$ZodBase64URL", (e, t) => {
          t.pattern ?? (t.pattern = $),
            eE.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
              !(function (e) {
                if (!$.test(e)) return !1;
                let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                return eB(t.padEnd(4 * Math.ceil(t.length / 4), "="));
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
        eG = i("$ZodE164", (e, t) => {
          t.pattern ?? (t.pattern = O), eE.init(e, t);
        }),
        eX = i("$ZodJWT", (e, t) => {
          eE.init(e, t),
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
        eY = i("$ZodUnknown", (e, t) => {
          eO.init(e, t), (e._zod.parse = (e) => e);
        }),
        eQ = i("$ZodNever", (e, t) => {
          eO.init(e, t),
            (e._zod.parse = (t, n) => (
              t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e,
              }),
              t
            ));
        });
      function e0(e, t, n) {
        e.issues.length && t.issues.push(...X(n, e.issues)),
          (t.value[n] = e.value);
      }
      let e1 = i("$ZodArray", (e, t) => {
        eO.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
              return (
                n.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
                n
              );
            n.value = Array(i.length);
            let s = [];
            for (let e = 0; e < i.length; e++) {
              let o = i[e],
                a = t.element._zod.run({ value: o, issues: [] }, r);
              a instanceof Promise
                ? s.push(a.then((t) => e0(t, n, e)))
                : e0(a, n, e);
            }
            return s.length ? Promise.all(s).then(() => n) : n;
          });
      });
      function e2(e, t, n, r, i) {
        if (e.issues.length) {
          if (i && !(n in r)) return;
          t.issues.push(...X(n, e.issues));
        }
        void 0 === e.value
          ? n in r && (t.value[n] = void 0)
          : (t.value[n] = e.value);
      }
      function e9(e) {
        var t;
        let n = Object.keys(e.shape);
        for (let t of n)
          if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${t}": expected a Zod schema`);
        let r = Object.keys((t = e.shape)).filter(
          (e) =>
            "optional" === t[e]._zod.optin && "optional" === t[e]._zod.optout,
        );
        return {
          ...e,
          keys: n,
          keySet: new Set(n),
          numKeys: n.length,
          optionalKeys: new Set(r),
        };
      }
      function e4(e, t, n, r, i, s) {
        let o = [],
          a = i.keySet,
          u = i.catchall._zod,
          c = u.def.type,
          l = "optional" === u.optout;
        for (let i in t) {
          if (a.has(i)) continue;
          if ("never" === c) {
            o.push(i);
            continue;
          }
          let s = u.run({ value: t[i], issues: [] }, r);
          s instanceof Promise
            ? e.push(s.then((e) => e2(e, n, i, t, l)))
            : e2(s, n, i, t, l);
        }
        return (o.length &&
          n.issues.push({
            code: "unrecognized_keys",
            keys: o,
            input: t,
            inst: s,
          }),
        e.length)
          ? Promise.all(e).then(() => n)
          : n;
      }
      let e7 = i("$ZodObject", (e, t) => {
          let n;
          eO.init(e, t);
          let r = Object.getOwnPropertyDescriptor(t, "shape");
          if (!r?.get) {
            let e = t.shape;
            Object.defineProperty(t, "shape", {
              get: () => {
                let n = { ...e };
                return Object.defineProperty(t, "shape", { value: n }), n;
              },
            });
          }
          let i = N(() => e9(t));
          R(e._zod, "propValues", () => {
            let e = t.shape,
              n = {};
            for (let t in e) {
              let r = e[t]._zod;
              if (r.values)
                for (let e of (n[t] ?? (n[t] = new Set()), r.values))
                  n[t].add(e);
            }
            return n;
          });
          let s = t.catchall;
          e._zod.parse = (t, r) => {
            n ?? (n = i.value);
            let o = t.value;
            if (!J(o))
              return (
                t.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: o,
                  inst: e,
                }),
                t
              );
            t.value = {};
            let a = [],
              u = n.shape;
            for (let e of n.keys) {
              let n = u[e],
                i = "optional" === n._zod.optout,
                s = n._zod.run({ value: o[e], issues: [] }, r);
              s instanceof Promise
                ? a.push(s.then((n) => e2(n, t, e, o, i)))
                : e2(s, t, e, o, i);
            }
            return s
              ? e4(a, o, t, r, i.value, e)
              : a.length
                ? Promise.all(a).then(() => t)
                : t;
          };
        }),
        e6 = i("$ZodObjectJIT", (e, t) => {
          let n, r;
          e7.init(e, t);
          let i = e._zod.parse,
            s = N(() => e9(t)),
            o = !a.jitless,
            u = o && q.value,
            c = t.catchall;
          e._zod.parse = (a, l) => {
            r ?? (r = s.value);
            let d = a.value;
            return J(d)
              ? o && u && l?.async === !1 && !0 !== l.jitless
                ? (n ||
                    (n = ((e) => {
                      let t = new eh(["shape", "payload", "ctx"]),
                        n = s.value,
                        r = (e) => {
                          let t = M(e);
                          return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                        };
                      t.write("const input = payload.value;");
                      let i = Object.create(null),
                        o = 0;
                      for (let e of n.keys) i[e] = `key_${o++}`;
                      for (let s of (t.write("const newResult = {};"),
                      n.keys)) {
                        let n = i[s],
                          o = M(s),
                          a = e[s],
                          u = a?._zod?.optout === "optional";
                        t.write(`const ${n} = ${r(s)};`),
                          u
                            ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                            : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `);
                      }
                      t.write("payload.value = newResult;"),
                        t.write("return payload;");
                      let a = t.compile();
                      return (t, n) => a(e, t, n);
                    })(t.shape)),
                  (a = n(a, l)),
                  c)
                  ? e4([], d, a, l, r, e)
                  : a
                : i(a, l)
              : (a.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: d,
                  inst: e,
                }),
                a);
          };
        });
      function e3(e, t, n, r) {
        for (let n of e)
          if (0 === n.issues.length) return (t.value = n.value), t;
        let i = e.filter((e) => !G(e));
        return 1 === i.length
          ? ((t.value = i[0].value), i[0])
          : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => Q(e, r, u()))),
            }),
            t);
      }
      let e5 = i("$ZodUnion", (e, t) => {
          eO.init(e, t),
            R(e._zod, "optin", () =>
              t.options.some((e) => "optional" === e._zod.optin)
                ? "optional"
                : void 0,
            ),
            R(e._zod, "optout", () =>
              t.options.some((e) => "optional" === e._zod.optout)
                ? "optional"
                : void 0,
            ),
            R(e._zod, "values", () => {
              if (t.options.every((e) => e._zod.values))
                return new Set(
                  t.options.flatMap((e) => Array.from(e._zod.values)),
                );
            }),
            R(e._zod, "pattern", () => {
              if (t.options.every((e) => e._zod.pattern)) {
                let e = t.options.map((e) => e._zod.pattern);
                return RegExp(`^(${e.map((e) => I(e.source)).join("|")})$`);
              }
            });
          let n = 1 === t.options.length,
            r = t.options[0]._zod.run;
          e._zod.parse = (i, s) => {
            if (n) return r(i, s);
            let o = !1,
              a = [];
            for (let e of t.options) {
              let t = e._zod.run({ value: i.value, issues: [] }, s);
              if (t instanceof Promise) a.push(t), (o = !0);
              else {
                if (0 === t.issues.length) return t;
                a.push(t);
              }
            }
            return o
              ? Promise.all(a).then((t) => e3(t, i, e, s))
              : e3(a, i, e, s);
          };
        }),
        e8 = i("$ZodIntersection", (e, t) => {
          eO.init(e, t),
            (e._zod.parse = (e, n) => {
              let r = e.value,
                i = t.left._zod.run({ value: r, issues: [] }, n),
                s = t.right._zod.run({ value: r, issues: [] }, n);
              return i instanceof Promise || s instanceof Promise
                ? Promise.all([i, s]).then(([t, n]) => te(e, t, n))
                : te(e, i, s);
            });
        });
      function te(e, t, n) {
        let r,
          i = new Map();
        for (let n of t.issues)
          if ("unrecognized_keys" === n.code)
            for (let e of (r ?? (r = n), n.keys))
              i.has(e) || i.set(e, {}), (i.get(e).l = !0);
          else e.issues.push(n);
        for (let t of n.issues)
          if ("unrecognized_keys" === t.code)
            for (let e of t.keys) i.has(e) || i.set(e, {}), (i.get(e).r = !0);
          else e.issues.push(t);
        let s = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
        if ((s.length && r && e.issues.push({ ...r, keys: s }), G(e))) return e;
        let o = (function e(t, n) {
          if (t === n || (t instanceof Date && n instanceof Date && +t == +n))
            return { valid: !0, data: t };
          if (L(t) && L(n)) {
            let r = Object.keys(n),
              i = Object.keys(t).filter((e) => -1 !== r.indexOf(e)),
              s = { ...t, ...n };
            for (let r of i) {
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
        if (!o.valid)
          throw Error(
            `Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`,
          );
        return (e.value = o.data), e;
      }
      let tt = i("$ZodRecord", (e, t) => {
          eO.init(e, t),
            (e._zod.parse = (n, r) => {
              let i = n.value;
              if (!L(i))
                return (
                  n.issues.push({
                    expected: "record",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                  n
                );
              let s = [],
                o = t.keyType._zod.values;
              if (o) {
                let a;
                n.value = {};
                let u = new Set();
                for (let e of o)
                  if (
                    "string" == typeof e ||
                    "number" == typeof e ||
                    "symbol" == typeof e
                  ) {
                    u.add("number" == typeof e ? e.toString() : e);
                    let o = t.valueType._zod.run(
                      { value: i[e], issues: [] },
                      r,
                    );
                    o instanceof Promise
                      ? s.push(
                          o.then((t) => {
                            t.issues.length && n.issues.push(...X(e, t.issues)),
                              (n.value[e] = t.value);
                          }),
                        )
                      : (o.issues.length && n.issues.push(...X(e, o.issues)),
                        (n.value[e] = o.value));
                  }
                for (let e in i) u.has(e) || (a = a ?? []).push(e);
                a &&
                  a.length > 0 &&
                  n.issues.push({
                    code: "unrecognized_keys",
                    input: i,
                    inst: e,
                    keys: a,
                  });
              } else
                for (let o of ((n.value = {}), Reflect.ownKeys(i))) {
                  if ("__proto__" === o) continue;
                  let a = t.keyType._zod.run({ value: o, issues: [] }, r);
                  if (a instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently",
                    );
                  if ("string" == typeof o && Z.test(o) && a.issues.length) {
                    let e = t.keyType._zod.run(
                      { value: Number(o), issues: [] },
                      r,
                    );
                    if (e instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    0 === e.issues.length && (a = e);
                  }
                  if (a.issues.length) {
                    "loose" === t.mode
                      ? (n.value[o] = i[o])
                      : n.issues.push({
                          code: "invalid_key",
                          origin: "record",
                          issues: a.issues.map((e) => Q(e, r, u())),
                          input: o,
                          path: [o],
                          inst: e,
                        });
                    continue;
                  }
                  let c = t.valueType._zod.run({ value: i[o], issues: [] }, r);
                  c instanceof Promise
                    ? s.push(
                        c.then((e) => {
                          e.issues.length && n.issues.push(...X(o, e.issues)),
                            (n.value[a.value] = e.value);
                        }),
                      )
                    : (c.issues.length && n.issues.push(...X(o, c.issues)),
                      (n.value[a.value] = c.value));
                }
              return s.length ? Promise.all(s).then(() => n) : n;
            });
        }),
        tn = i("$ZodEnum", (e, t) => {
          eO.init(e, t);
          let n = j(t.entries),
            r = new Set(n);
          (e._zod.values = r),
            (e._zod.pattern = RegExp(
              `^(${n
                .filter((e) => W.has(typeof e))
                .map((e) => ("string" == typeof e ? B(e) : e.toString()))
                .join("|")})$`,
            )),
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
        tr = i("$ZodTransform", (e, t) => {
          eO.init(e, t),
            (e._zod.parse = (n, r) => {
              if ("backward" === r.direction) throw new o(e.constructor.name);
              let i = t.transform(n.value, n);
              if (r.async)
                return (i instanceof Promise ? i : Promise.resolve(i)).then(
                  (e) => ((n.value = e), n),
                );
              if (i instanceof Promise) throw new s();
              return (n.value = i), n;
            });
        });
      function ti(e, t) {
        return e.issues.length && void 0 === t
          ? { issues: [], value: void 0 }
          : e;
      }
      let ts = i("$ZodOptional", (e, t) => {
          eO.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            R(e._zod, "values", () =>
              t.innerType._zod.values
                ? new Set([...t.innerType._zod.values, void 0])
                : void 0,
            ),
            R(e._zod, "pattern", () => {
              let e = t.innerType._zod.pattern;
              return e ? RegExp(`^(${I(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
              if ("optional" === t.innerType._zod.optin) {
                let r = t.innerType._zod.run(e, n);
                return r instanceof Promise
                  ? r.then((t) => ti(t, e.value))
                  : ti(r, e.value);
              }
              return void 0 === e.value ? e : t.innerType._zod.run(e, n);
            });
        }),
        to = i("$ZodExactOptional", (e, t) => {
          ts.init(e, t),
            R(e._zod, "values", () => t.innerType._zod.values),
            R(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
        }),
        ta = i("$ZodNullable", (e, t) => {
          eO.init(e, t),
            R(e._zod, "optin", () => t.innerType._zod.optin),
            R(e._zod, "optout", () => t.innerType._zod.optout),
            R(e._zod, "pattern", () => {
              let e = t.innerType._zod.pattern;
              return e ? RegExp(`^(${I(e.source)}|null)$`) : void 0;
            }),
            R(e._zod, "values", () =>
              t.innerType._zod.values
                ? new Set([...t.innerType._zod.values, null])
                : void 0,
            ),
            (e._zod.parse = (e, n) =>
              null === e.value ? e : t.innerType._zod.run(e, n));
        }),
        tu = i("$ZodDefault", (e, t) => {
          eO.init(e, t),
            (e._zod.optin = "optional"),
            R(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              if (void 0 === e.value) return (e.value = t.defaultValue), e;
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => tc(e, t)) : tc(r, t);
            });
        });
      function tc(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
      }
      let tl = i("$ZodPrefault", (e, t) => {
          eO.init(e, t),
            (e._zod.optin = "optional"),
            R(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => (
              "backward" === n.direction ||
                (void 0 === e.value && (e.value = t.defaultValue)),
              t.innerType._zod.run(e, n)
            ));
        }),
        td = i("$ZodNonOptional", (e, t) => {
          eO.init(e, t),
            R(e._zod, "values", () => {
              let e = t.innerType._zod.values;
              return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, r) => {
              let i = t.innerType._zod.run(n, r);
              return i instanceof Promise ? i.then((t) => tf(t, e)) : tf(i, e);
            });
        });
      function tf(e, t) {
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
      let tp = i("$ZodCatch", (e, t) => {
          eO.init(e, t),
            R(e._zod, "optin", () => t.innerType._zod.optin),
            R(e._zod, "optout", () => t.innerType._zod.optout),
            R(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise
                ? r.then(
                    (r) => (
                      (e.value = r.value),
                      r.issues.length &&
                        ((e.value = t.catchValue({
                          ...e,
                          error: { issues: r.issues.map((e) => Q(e, n, u())) },
                          input: e.value,
                        })),
                        (e.issues = [])),
                      e
                    ),
                  )
                : ((e.value = r.value),
                  r.issues.length &&
                    ((e.value = t.catchValue({
                      ...e,
                      error: { issues: r.issues.map((e) => Q(e, n, u())) },
                      input: e.value,
                    })),
                    (e.issues = [])),
                  e);
            });
        }),
        th = i("$ZodPipe", (e, t) => {
          eO.init(e, t),
            R(e._zod, "values", () => t.in._zod.values),
            R(e._zod, "optin", () => t.in._zod.optin),
            R(e._zod, "optout", () => t.out._zod.optout),
            R(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) {
                let r = t.out._zod.run(e, n);
                return r instanceof Promise
                  ? r.then((e) => tm(e, t.in, n))
                  : tm(r, t.in, n);
              }
              let r = t.in._zod.run(e, n);
              return r instanceof Promise
                ? r.then((e) => tm(e, t.out, n))
                : tm(r, t.out, n);
            });
        });
      function tm(e, t, n) {
        return e.issues.length
          ? ((e.aborted = !0), e)
          : t._zod.run({ value: e.value, issues: e.issues }, n);
      }
      let tg = i("$ZodReadonly", (e, t) => {
        eO.init(e, t),
          R(e._zod, "propValues", () => t.innerType._zod.propValues),
          R(e._zod, "values", () => t.innerType._zod.values),
          R(e._zod, "optin", () => t.innerType?._zod?.optin),
          R(e._zod, "optout", () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(tv) : tv(r);
          });
      });
      function tv(e) {
        return (e.value = Object.freeze(e.value)), e;
      }
      let ty = i("$ZodCustom", (e, t) => {
        en.init(e, t),
          eO.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => t_(t, n, r, e));
            t_(i, n, r, e);
          });
      });
      function t_(e, t, n, r) {
        if (!e) {
          let e = {
            code: "custom",
            input: n,
            inst: r,
            path: [...(r._zod.def.path ?? [])],
            continue: !r._zod.def.abort,
          };
          r._zod.def.params && (e.params = r._zod.def.params),
            t.issues.push(et(e));
        }
      }
      Symbol("ZodOutput"), Symbol("ZodInput");
      (r = globalThis).__zod_globalRegistry ??
        (r.__zod_globalRegistry = new (class e {
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
      let tw = globalThis.__zod_globalRegistry;
      function tz(e, t) {
        return new e({
          type: "string",
          format: "guid",
          check: "string_format",
          abort: !1,
          ...K(t),
        });
      }
      function tb(e, t) {
        return new er({ check: "max_length", ...K(t), maximum: e });
      }
      function tk(e, t) {
        return new ei({ check: "min_length", ...K(t), minimum: e });
      }
      function t$(e, t) {
        return new es({ check: "length_equals", ...K(t), length: e });
      }
      function tO(e) {
        return new ep({ check: "overwrite", tx: e });
      }
      function tx(e) {
        let t = e?.target ?? "draft-2020-12";
        return (
          "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? tw,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0,
          }
        );
      }
      function tE(e, t, n = { path: [], schemaPath: [] }) {
        var r;
        let i = e._zod.def,
          s = t.seen.get(e);
        if (s)
          return (
            s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema
          );
        let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
        t.seen.set(e, o);
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
            (o.ref || (o.ref = s), tE(s, t, r), (t.seen.get(s).isParent = !0));
        }
        let u = t.metadataRegistry.get(e);
        return (
          u && Object.assign(o.schema, u),
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
                "prefault" === i.type
              )
                return e(i.innerType, r);
              if ("intersection" === i.type)
                return e(i.left, r) || e(i.right, r);
              if ("record" === i.type || "map" === i.type)
                return e(i.keyType, r) || e(i.valueType, r);
              if ("pipe" === i.type) return e(i.in, r) || e(i.out, r);
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
            o.schema._prefault &&
            ((r = o.schema).default ?? (r.default = o.schema._prefault)),
          delete o.schema._prefault,
          t.seen.get(e).schema
        );
      }
      function tS(e, t) {
        let n = e.seen.get(t);
        if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
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
                  { defId: s, ref: `${i("__shared")}#/${r}/${s}` }
                );
              }
              if (t[1] === n) return { ref: "#" };
              let i = `#/${r}/`,
                s = t[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: s, ref: i + s };
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
          if (
            e.metadataRegistry.get(n[0])?.id ||
            r.cycle ||
            (r.count > 1 && "ref" === e.reused)
          ) {
            i(n);
            continue;
          }
        }
      }
      function tZ(e, t) {
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
                : Object.assign(i, a),
              Object.assign(i, s),
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
        for (let t of [...e.seen.entries()].reverse()) r(t[0]);
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
        Object.assign(i, n.def ?? n.schema);
        let s = e.external?.defs ?? {};
        for (let t of e.seen.entries()) {
          let e = t[1];
          e.def && e.defId && (s[e.defId] = e.def);
        }
        e.external ||
          (Object.keys(s).length > 0 &&
            ("draft-2020-12" === e.target
              ? (i.$defs = s)
              : (i.definitions = s)));
        try {
          let n = JSON.parse(JSON.stringify(i));
          return (
            Object.defineProperty(n, "~standard", {
              value: {
                ...t["~standard"],
                jsonSchema: {
                  input: tT(t, "input", e.processors),
                  output: tT(t, "output", e.processors),
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
      let tT =
          (e, t, n = {}) =>
          (r) => {
            let { libraryOptions: i, target: s } = r ?? {},
              o = tx({ ...(i ?? {}), target: s, io: t, processors: n });
            return tE(e, o), tS(o, e), tZ(o, e);
          },
        tP = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        tj = (e, t, n, r) => {
          let i = e._zod.def;
          tE(i.innerType, t, r), (t.seen.get(e).ref = i.innerType);
        },
        tA = i("ZodISODateTime", (e, t) => {
          eC.init(e, t), t1.init(e, t);
        }),
        tN = i("ZodISODate", (e, t) => {
          eM.init(e, t), t1.init(e, t);
        }),
        tI = i("ZodISOTime", (e, t) => {
          eU.init(e, t), t1.init(e, t);
        }),
        tF = i("ZodISODuration", (e, t) => {
          eJ.init(e, t), t1.init(e, t);
        }),
        tR = (e, t) => {
          eg.init(e, t),
            (e.name = "ZodError"),
            Object.defineProperties(e, {
              format: {
                value: (t) =>
                  (function (e, t = (e) => e.message) {
                    let n = { _errors: [] },
                      r = (e) => {
                        for (let i of e.issues)
                          if ("invalid_union" === i.code && i.errors.length)
                            i.errors.map((e) => r({ issues: e }));
                          else if ("invalid_key" === i.code)
                            r({ issues: i.issues });
                          else if ("invalid_element" === i.code)
                            r({ issues: i.issues });
                          else if (0 === i.path.length) n._errors.push(t(i));
                          else {
                            let e = n,
                              r = 0;
                            for (; r < i.path.length; ) {
                              let n = i.path[r];
                              r === i.path.length - 1
                                ? ((e[n] = e[n] || { _errors: [] }),
                                  e[n]._errors.push(t(i)))
                                : (e[n] = e[n] || { _errors: [] }),
                                (e = e[n]),
                                r++;
                            }
                          }
                      };
                    return r(e), n;
                  })(e, t),
              },
              flatten: {
                value: (t) =>
                  (function (e, t = (e) => e.message) {
                    let n = {},
                      r = [];
                    for (let i of e.issues)
                      i.path.length > 0
                        ? ((n[i.path[0]] = n[i.path[0]] || []),
                          n[i.path[0]].push(t(i)))
                        : r.push(t(i));
                    return { formErrors: r, fieldErrors: n };
                  })(e, t),
              },
              addIssue: {
                value: (t) => {
                  e.issues.push(t),
                    (e.message = JSON.stringify(e.issues, A, 2));
                },
              },
              addIssues: {
                value: (t) => {
                  e.issues.push(...t),
                    (e.message = JSON.stringify(e.issues, A, 2));
                },
              },
              isEmpty: { get: () => 0 === e.issues.length },
            });
        };
      i("ZodError", tR);
      let tD = i("ZodError", tR, { Parent: Error }),
        tC = ey(tD),
        tM = e_(tD),
        tU = ew(tD),
        tJ = eb(tD),
        tq = (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return ey(tD)(e, t, r);
        },
        tL = (e, t, n) => ey(tD)(e, t, n),
        tV = async (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return e_(tD)(e, t, r);
        },
        tW = async (e, t, n) => e_(tD)(e, t, n),
        tB = (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return ew(tD)(e, t, r);
        },
        tH = (e, t, n) => ew(tD)(e, t, n),
        tK = async (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return eb(tD)(e, t, r);
        },
        tG = async (e, t, n) => eb(tD)(e, t, n),
        tX = i(
          "ZodType",
          (e, t) => (
            eO.init(e, t),
            Object.assign(e["~standard"], {
              jsonSchema: { input: tT(e, "input"), output: tT(e, "output") },
            }),
            (e.toJSONSchema = (
              (e, t = {}) =>
              (n) => {
                let r = tx({ ...n, processors: t });
                return tE(e, r), tS(r, e), tZ(r, e);
              }
            )(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.check = (...n) =>
              e.clone(
                C(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...n.map((e) =>
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
              )),
            (e.with = e.check),
            (e.clone = (t, n) => H(e, t, n)),
            (e.brand = () => e),
            (e.register = (t, n) => (t.add(e, n), e)),
            (e.parse = (t, n) => tC(e, t, n, { callee: e.parse })),
            (e.safeParse = (t, n) => tU(e, t, n)),
            (e.parseAsync = async (t, n) =>
              tM(e, t, n, { callee: e.parseAsync })),
            (e.safeParseAsync = async (t, n) => tJ(e, t, n)),
            (e.spa = e.safeParseAsync),
            (e.encode = (t, n) => tq(e, t, n)),
            (e.decode = (t, n) => tL(e, t, n)),
            (e.encodeAsync = async (t, n) => tV(e, t, n)),
            (e.decodeAsync = async (t, n) => tW(e, t, n)),
            (e.safeEncode = (t, n) => tB(e, t, n)),
            (e.safeDecode = (t, n) => tH(e, t, n)),
            (e.safeEncodeAsync = async (t, n) => tK(e, t, n)),
            (e.safeDecodeAsync = async (t, n) => tG(e, t, n)),
            (e.refine = (t, n) =>
              e.check(
                (function (e, t = {}) {
                  return new nF({
                    type: "custom",
                    check: "custom",
                    fn: e,
                    ...K(t),
                  });
                })(t, n),
              )),
            (e.superRefine = (t) =>
              e.check(
                (function (e) {
                  var t;
                  let n, r;
                  return (
                    (t = (t) => (
                      (t.addIssue = (e) => {
                        "string" == typeof e
                          ? t.issues.push(et(e, t.value, n._zod.def))
                          : (e.fatal && (e.continue = !1),
                            e.code ?? (e.code = "custom"),
                            e.input ?? (e.input = t.value),
                            e.inst ?? (e.inst = n),
                            e.continue ?? (e.continue = !n._zod.def.abort),
                            t.issues.push(et(e)));
                      }),
                      e(t.value, t)
                    )),
                    ((r = new en({
                      check: "custom",
                      ...K(void 0),
                    }))._zod.check = t),
                    (n = r)
                  );
                })(t),
              )),
            (e.overwrite = (t) => e.check(tO(t))),
            (e.optional = () => nO(e)),
            (e.exactOptional = () =>
              new nx({ type: "optional", innerType: e })),
            (e.nullable = () => nS(e)),
            (e.nullish = () => nO(nS(e))),
            (e.nonoptional = (t) =>
              new nP({ type: "nonoptional", innerType: e, ...K(t) })),
            (e.array = () =>
              (function (e) {
                return new nh({ type: "array", element: e, ...K(void 0) });
              })(e)),
            (e.or = (t) =>
              new nv({ type: "union", options: [e, t], ...K(void 0) })),
            (e.and = (t) =>
              new ny({ type: "intersection", left: e, right: t })),
            (e.transform = (t) =>
              nN(e, new nk({ type: "transform", transform: t }))),
            (e.default = (t) => {
              var n, r;
              return (
                (n = e),
                (r = t),
                new nZ({
                  type: "default",
                  innerType: n,
                  get defaultValue() {
                    return "function" == typeof r ? r() : V(r);
                  },
                })
              );
            }),
            (e.prefault = (t) => {
              var n, r;
              return (
                (n = e),
                (r = t),
                new nT({
                  type: "prefault",
                  innerType: n,
                  get defaultValue() {
                    return "function" == typeof r ? r() : V(r);
                  },
                })
              );
            }),
            (e.catch = (t) => {
              var n;
              return new nj({
                type: "catch",
                innerType: e,
                catchValue: "function" == typeof (n = t) ? n : () => n,
              });
            }),
            (e.pipe = (t) => nN(e, t)),
            (e.readonly = () => new nI({ type: "readonly", innerType: e })),
            (e.describe = (t) => {
              let n = e.clone();
              return tw.add(n, { description: t }), n;
            }),
            Object.defineProperty(e, "description", {
              get: () => tw.get(e)?.description,
              configurable: !0,
            }),
            (e.meta = (...t) => {
              if (0 === t.length) return tw.get(e);
              let n = e.clone();
              return tw.add(n, t[0]), n;
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (t) => t(e)),
            e
          ),
        ),
        tY = i("_ZodString", (e, t) => {
          ex.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n) => {
                n.type = "string";
                let {
                  minimum: r,
                  maximum: i,
                  format: s,
                  patterns: o,
                  contentEncoding: a,
                } = e._zod.bag;
                if (
                  ("number" == typeof r && (n.minLength = r),
                  "number" == typeof i && (n.maxLength = i),
                  s &&
                    ((n.format = tP[s] ?? s),
                    "" === n.format && delete n.format,
                    "time" === s && delete n.format),
                  a && (n.contentEncoding = a),
                  o && o.size > 0)
                ) {
                  let e = [...o];
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
          let n = e._zod.bag;
          (e.format = n.format ?? null),
            (e.minLength = n.minimum ?? null),
            (e.maxLength = n.maximum ?? null),
            (e.regex = (...t) =>
              e.check(
                (function (e, t) {
                  return new ea({
                    check: "string_format",
                    format: "regex",
                    ...K(t),
                    pattern: e,
                  });
                })(...t),
              )),
            (e.includes = (...t) =>
              e.check(
                (function (e, t) {
                  return new el({
                    check: "string_format",
                    format: "includes",
                    ...K(t),
                    includes: e,
                  });
                })(...t),
              )),
            (e.startsWith = (...t) =>
              e.check(
                (function (e, t) {
                  return new ed({
                    check: "string_format",
                    format: "starts_with",
                    ...K(t),
                    prefix: e,
                  });
                })(...t),
              )),
            (e.endsWith = (...t) =>
              e.check(
                (function (e, t) {
                  return new ef({
                    check: "string_format",
                    format: "ends_with",
                    ...K(t),
                    suffix: e,
                  });
                })(...t),
              )),
            (e.min = (...t) => e.check(tk(...t))),
            (e.max = (...t) => e.check(tb(...t))),
            (e.length = (...t) => e.check(t$(...t))),
            (e.nonempty = (...t) => e.check(tk(1, ...t))),
            (e.lowercase = (t) =>
              e.check(
                new eu({
                  check: "string_format",
                  format: "lowercase",
                  ...K(t),
                }),
              )),
            (e.uppercase = (t) =>
              e.check(
                new ec({
                  check: "string_format",
                  format: "uppercase",
                  ...K(t),
                }),
              )),
            (e.trim = () => e.check(tO((e) => e.trim()))),
            (e.normalize = (...t) =>
              e.check(
                (function (e) {
                  return tO((t) => t.normalize(e));
                })(...t),
              )),
            (e.toLowerCase = () => e.check(tO((e) => e.toLowerCase()))),
            (e.toUpperCase = () => e.check(tO((e) => e.toUpperCase()))),
            (e.slugify = () =>
              e.check(
                tO((e) =>
                  e
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/[\s_-]+/g, "-")
                    .replace(/^-+|-+$/g, ""),
                ),
              ));
        }),
        tQ = i("ZodString", (e, t) => {
          ex.init(e, t),
            tY.init(e, t),
            (e.email = (t) =>
              e.check(
                new t2({
                  type: "string",
                  format: "email",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.url = (t) =>
              e.check(
                new t7({
                  type: "string",
                  format: "url",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.jwt = (t) =>
              e.check(
                new nl({
                  type: "string",
                  format: "jwt",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.emoji = (t) =>
              e.check(
                new t6({
                  type: "string",
                  format: "emoji",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.guid = (t) => e.check(tz(t9, t))),
            (e.uuid = (t) =>
              e.check(
                new t4({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.uuidv4 = (t) =>
              e.check(
                new t4({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v4",
                  ...K(t),
                }),
              )),
            (e.uuidv6 = (t) =>
              e.check(
                new t4({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v6",
                  ...K(t),
                }),
              )),
            (e.uuidv7 = (t) =>
              e.check(
                new t4({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v7",
                  ...K(t),
                }),
              )),
            (e.nanoid = (t) =>
              e.check(
                new t3({
                  type: "string",
                  format: "nanoid",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.guid = (t) => e.check(tz(t9, t))),
            (e.cuid = (t) =>
              e.check(
                new t5({
                  type: "string",
                  format: "cuid",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.cuid2 = (t) =>
              e.check(
                new t8({
                  type: "string",
                  format: "cuid2",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.ulid = (t) =>
              e.check(
                new ne({
                  type: "string",
                  format: "ulid",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.base64 = (t) =>
              e.check(
                new na({
                  type: "string",
                  format: "base64",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.base64url = (t) =>
              e.check(
                new nu({
                  type: "string",
                  format: "base64url",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.xid = (t) =>
              e.check(
                new nt({
                  type: "string",
                  format: "xid",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.ksuid = (t) =>
              e.check(
                new nn({
                  type: "string",
                  format: "ksuid",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.ipv4 = (t) =>
              e.check(
                new nr({
                  type: "string",
                  format: "ipv4",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.ipv6 = (t) =>
              e.check(
                new ni({
                  type: "string",
                  format: "ipv6",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.cidrv4 = (t) =>
              e.check(
                new ns({
                  type: "string",
                  format: "cidrv4",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.cidrv6 = (t) =>
              e.check(
                new no({
                  type: "string",
                  format: "cidrv6",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.e164 = (t) =>
              e.check(
                new nc({
                  type: "string",
                  format: "e164",
                  check: "string_format",
                  abort: !1,
                  ...K(t),
                }),
              )),
            (e.datetime = (t) =>
              e.check(
                new tA({
                  type: "string",
                  format: "datetime",
                  check: "string_format",
                  offset: !1,
                  local: !1,
                  precision: null,
                  ...K(t),
                }),
              )),
            (e.date = (t) =>
              e.check(
                new tN({
                  type: "string",
                  format: "date",
                  check: "string_format",
                  ...K(t),
                }),
              )),
            (e.time = (t) =>
              e.check(
                new tI({
                  type: "string",
                  format: "time",
                  check: "string_format",
                  precision: null,
                  ...K(t),
                }),
              )),
            (e.duration = (t) =>
              e.check(
                new tF({
                  type: "string",
                  format: "duration",
                  check: "string_format",
                  ...K(t),
                }),
              ));
        });
      function t0(e) {
        return new tQ({ type: "string", ...K(e) });
      }
      let t1 = i("ZodStringFormat", (e, t) => {
          eE.init(e, t), tY.init(e, t);
        }),
        t2 = i("ZodEmail", (e, t) => {
          eT.init(e, t), t1.init(e, t);
        }),
        t9 = i("ZodGUID", (e, t) => {
          eS.init(e, t), t1.init(e, t);
        }),
        t4 = i("ZodUUID", (e, t) => {
          eZ.init(e, t), t1.init(e, t);
        }),
        t7 = i("ZodURL", (e, t) => {
          eP.init(e, t), t1.init(e, t);
        }),
        t6 = i("ZodEmoji", (e, t) => {
          ej.init(e, t), t1.init(e, t);
        }),
        t3 = i("ZodNanoID", (e, t) => {
          eA.init(e, t), t1.init(e, t);
        }),
        t5 = i("ZodCUID", (e, t) => {
          eN.init(e, t), t1.init(e, t);
        }),
        t8 = i("ZodCUID2", (e, t) => {
          eI.init(e, t), t1.init(e, t);
        }),
        ne = i("ZodULID", (e, t) => {
          eF.init(e, t), t1.init(e, t);
        }),
        nt = i("ZodXID", (e, t) => {
          eR.init(e, t), t1.init(e, t);
        }),
        nn = i("ZodKSUID", (e, t) => {
          eD.init(e, t), t1.init(e, t);
        }),
        nr = i("ZodIPv4", (e, t) => {
          eq.init(e, t), t1.init(e, t);
        }),
        ni = i("ZodIPv6", (e, t) => {
          eL.init(e, t), t1.init(e, t);
        }),
        ns = i("ZodCIDRv4", (e, t) => {
          eV.init(e, t), t1.init(e, t);
        }),
        no = i("ZodCIDRv6", (e, t) => {
          eW.init(e, t), t1.init(e, t);
        }),
        na = i("ZodBase64", (e, t) => {
          eH.init(e, t), t1.init(e, t);
        }),
        nu = i("ZodBase64URL", (e, t) => {
          eK.init(e, t), t1.init(e, t);
        }),
        nc = i("ZodE164", (e, t) => {
          eG.init(e, t), t1.init(e, t);
        }),
        nl = i("ZodJWT", (e, t) => {
          eX.init(e, t), t1.init(e, t);
        }),
        nd = i("ZodUnknown", (e, t) => {
          eY.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) => void 0);
        });
      function nf() {
        return new nd({ type: "unknown" });
      }
      let np = i("ZodNever", (e, t) => {
          eQ.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) => {
              t.not = {};
            });
        }),
        nh = i("ZodArray", (e, t) => {
          e1.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i = e._zod.def,
                  { minimum: s, maximum: o } = e._zod.bag;
                "number" == typeof s && (n.minItems = s),
                  "number" == typeof o && (n.maxItems = o),
                  (n.type = "array"),
                  (n.items = tE(i.element, t, {
                    ...r,
                    path: [...r.path, "items"],
                  }));
              })(e, t, n, r)),
            (e.element = t.element),
            (e.min = (t, n) => e.check(tk(t, n))),
            (e.nonempty = (t) => e.check(tk(1, t))),
            (e.max = (t, n) => e.check(tb(t, n))),
            (e.length = (t, n) => e.check(t$(t, n))),
            (e.unwrap = () => e.element);
        }),
        nm = i("ZodObject", (e, t) => {
          e6.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i = e._zod.def;
                (n.type = "object"), (n.properties = {});
                let s = i.shape;
                for (let e in s)
                  n.properties[e] = tE(s[e], t, {
                    ...r,
                    path: [...r.path, "properties", e],
                  });
                let o = new Set(
                  [...new Set(Object.keys(s))].filter((e) => {
                    let n = i.shape[e]._zod;
                    return "input" === t.io
                      ? void 0 === n.optin
                      : void 0 === n.optout;
                  }),
                );
                o.size > 0 && (n.required = Array.from(o)),
                  i.catchall?._zod.def.type === "never"
                    ? (n.additionalProperties = !1)
                    : i.catchall
                      ? i.catchall &&
                        (n.additionalProperties = tE(i.catchall, t, {
                          ...r,
                          path: [...r.path, "additionalProperties"],
                        }))
                      : "output" === t.io && (n.additionalProperties = !1);
              })(e, t, n, r)),
            R(e, "shape", () => t.shape),
            (e.keyof = () => nb(Object.keys(e._zod.def.shape))),
            (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
            (e.passthrough = () => e.clone({ ...e._zod.def, catchall: nf() })),
            (e.loose = () => e.clone({ ...e._zod.def, catchall: nf() })),
            (e.strict = () =>
              e.clone({
                ...e._zod.def,
                catchall: new np({ type: "never", ...K(void 0) }),
              })),
            (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
            (e.extend = (t) =>
              (function (e, t) {
                if (!L(t))
                  throw Error(
                    "Invalid input to extend: expected a plain object",
                  );
                let n = e._zod.def.checks;
                if (n && n.length > 0) {
                  let n = e._zod.def.shape;
                  for (let e in t)
                    if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
                      throw Error(
                        "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                      );
                }
                let r = C(e._zod.def, {
                  get shape() {
                    let n = { ...e._zod.def.shape, ...t };
                    return D(this, "shape", n), n;
                  },
                });
                return H(e, r);
              })(e, t)),
            (e.safeExtend = (t) =>
              (function (e, t) {
                if (!L(t))
                  throw Error(
                    "Invalid input to safeExtend: expected a plain object",
                  );
                let n = C(e._zod.def, {
                  get shape() {
                    let n = { ...e._zod.def.shape, ...t };
                    return D(this, "shape", n), n;
                  },
                });
                return H(e, n);
              })(e, t)),
            (e.merge = (t) => {
              let n;
              return (
                (n = C(e._zod.def, {
                  get shape() {
                    let n = { ...e._zod.def.shape, ...t._zod.def.shape };
                    return D(this, "shape", n), n;
                  },
                  get catchall() {
                    return t._zod.def.catchall;
                  },
                  checks: [],
                })),
                H(e, n)
              );
            }),
            (e.pick = (t) =>
              (function (e, t) {
                let n = e._zod.def,
                  r = n.checks;
                if (r && r.length > 0)
                  throw Error(
                    ".pick() cannot be used on object schemas containing refinements",
                  );
                let i = C(e._zod.def, {
                  get shape() {
                    let e = {};
                    for (let r in t) {
                      if (!(r in n.shape))
                        throw Error(`Unrecognized key: "${r}"`);
                      t[r] && (e[r] = n.shape[r]);
                    }
                    return D(this, "shape", e), e;
                  },
                  checks: [],
                });
                return H(e, i);
              })(e, t)),
            (e.omit = (t) =>
              (function (e, t) {
                let n = e._zod.def,
                  r = n.checks;
                if (r && r.length > 0)
                  throw Error(
                    ".omit() cannot be used on object schemas containing refinements",
                  );
                let i = C(e._zod.def, {
                  get shape() {
                    let r = { ...e._zod.def.shape };
                    for (let e in t) {
                      if (!(e in n.shape))
                        throw Error(`Unrecognized key: "${e}"`);
                      t[e] && delete r[e];
                    }
                    return D(this, "shape", r), r;
                  },
                  checks: [],
                });
                return H(e, i);
              })(e, t)),
            (e.partial = (...t) =>
              (function (e, t, n) {
                let r = t._zod.def.checks;
                if (r && r.length > 0)
                  throw Error(
                    ".partial() cannot be used on object schemas containing refinements",
                  );
                let i = C(t._zod.def, {
                  get shape() {
                    let r = t._zod.def.shape,
                      i = { ...r };
                    if (n)
                      for (let t in n) {
                        if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
                        n[t] &&
                          (i[t] = e
                            ? new e({ type: "optional", innerType: r[t] })
                            : r[t]);
                      }
                    else
                      for (let t in r)
                        i[t] = e
                          ? new e({ type: "optional", innerType: r[t] })
                          : r[t];
                    return D(this, "shape", i), i;
                  },
                  checks: [],
                });
                return H(t, i);
              })(n$, e, t[0])),
            (e.required = (...t) => {
              var n;
              let r;
              return (
                (n = t[0]),
                (r = C(e._zod.def, {
                  get shape() {
                    let t = e._zod.def.shape,
                      r = { ...t };
                    if (n)
                      for (let e in n) {
                        if (!(e in r)) throw Error(`Unrecognized key: "${e}"`);
                        n[e] &&
                          (r[e] = new nP({
                            type: "nonoptional",
                            innerType: t[e],
                          }));
                      }
                    else
                      for (let e in t)
                        r[e] = new nP({ type: "nonoptional", innerType: t[e] });
                    return D(this, "shape", r), r;
                  },
                })),
                H(e, r)
              );
            });
        });
      function ng(e, t) {
        return new nm({ type: "object", shape: e ?? {}, ...K(t) });
      }
      let nv = i("ZodUnion", (e, t) => {
          e5.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o;
              return (
                (s = !1 === (i = e._zod.def).inclusive),
                (o = i.options.map((e, n) =>
                  tE(e, t, {
                    ...r,
                    path: [...r.path, s ? "oneOf" : "anyOf", n],
                  }),
                )),
                void (s ? (n.oneOf = o) : (n.anyOf = o))
              );
            }),
            (e.options = t.options);
        }),
        ny = i("ZodIntersection", (e, t) => {
          e8.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o, a;
              return (
                (s = tE((i = e._zod.def).left, t, {
                  ...r,
                  path: [...r.path, "allOf", 0],
                })),
                (o = tE(i.right, t, { ...r, path: [...r.path, "allOf", 1] })),
                void (n.allOf = [
                  ...((a = (e) => "allOf" in e && 1 === Object.keys(e).length)(
                    s,
                  )
                    ? s.allOf
                    : [s]),
                  ...(a(o) ? o.allOf : [o]),
                ])
              );
            });
        }),
        n_ = i("ZodRecord", (e, t) => {
          tt.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i = e._zod.def;
                n.type = "object";
                let s = i.keyType,
                  o = s._zod.bag,
                  a = o?.patterns;
                if ("loose" === i.mode && a && a.size > 0) {
                  let e = tE(i.valueType, t, {
                    ...r,
                    path: [...r.path, "patternProperties", "*"],
                  });
                  for (let t of ((n.patternProperties = {}), a))
                    n.patternProperties[t.source] = e;
                } else
                  ("draft-07" === t.target || "draft-2020-12" === t.target) &&
                    (n.propertyNames = tE(i.keyType, t, {
                      ...r,
                      path: [...r.path, "propertyNames"],
                    })),
                    (n.additionalProperties = tE(i.valueType, t, {
                      ...r,
                      path: [...r.path, "additionalProperties"],
                    }));
                let u = s._zod.values;
                if (u) {
                  let e = [...u].filter(
                    (e) => "string" == typeof e || "number" == typeof e,
                  );
                  e.length > 0 && (n.required = e);
                }
              })(e, t, n, r)),
            (e.keyType = t.keyType),
            (e.valueType = t.valueType);
        });
      function nw(e, t, n) {
        let r = H(e);
        return (
          (r._zod.values = void 0),
          new n_({ type: "record", keyType: r, valueType: t, ...K(n) })
        );
      }
      let nz = i("ZodEnum", (e, t) => {
        tn.init(e, t),
          tX.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (i = j(e._zod.def.entries)).every((e) => "number" == typeof e) &&
              (n.type = "number"),
              i.every((e) => "string" == typeof e) && (n.type = "string"),
              (n.enum = i);
          }),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries));
        let n = new Set(Object.keys(t.entries));
        (e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new nz({ ...t, checks: [], ...K(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new nz({ ...t, checks: [], ...K(r), entries: i });
          });
      });
      function nb(e, t) {
        return new nz({
          type: "enum",
          entries: Array.isArray(e)
            ? Object.fromEntries(e.map((e) => [e, e]))
            : e,
          ...K(t),
        });
      }
      let nk = i("ZodTransform", (e, t) => {
          tr.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) =>
              ((e) => {
                if ("throw" === e.unrepresentable)
                  throw Error(
                    "Transforms cannot be represented in JSON Schema",
                  );
              })(e)),
            (e._zod.parse = (n, r) => {
              if ("backward" === r.direction) throw new o(e.constructor.name);
              n.addIssue = (r) => {
                "string" == typeof r
                  ? n.issues.push(et(r, n.value, t))
                  : (r.fatal && (r.continue = !1),
                    r.code ?? (r.code = "custom"),
                    r.input ?? (r.input = n.value),
                    r.inst ?? (r.inst = e),
                    n.issues.push(et(r)));
              };
              let i = t.transform(n.value, n);
              return i instanceof Promise
                ? i.then((e) => ((n.value = e), n))
                : ((n.value = i), n);
            });
        }),
        n$ = i("ZodOptional", (e, t) => {
          ts.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => tj(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function nO(e) {
        return new n$({ type: "optional", innerType: e });
      }
      let nx = i("ZodExactOptional", (e, t) => {
          to.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => tj(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nE = i("ZodNullable", (e, t) => {
          ta.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s, o;
              return (
                (s = tE((i = e._zod.def).innerType, t, r)),
                (o = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                  ? ((o.ref = i.innerType), (n.nullable = !0))
                  : (n.anyOf = [s, { type: "null" }]))
              );
            }),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function nS(e) {
        return new nE({ type: "nullable", innerType: e });
      }
      let nZ = i("ZodDefault", (e, t) => {
          tu.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i;
              tE((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                (n.default = JSON.parse(JSON.stringify(i.defaultValue)));
            }),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap);
        }),
        nT = i("ZodPrefault", (e, t) => {
          tl.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i;
              tE((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                "input" === t.io &&
                  (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nP = i("ZodNonOptional", (e, t) => {
          td.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i;
              tE((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nj = i("ZodCatch", (e, t) => {
          tp.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                let i,
                  s = e._zod.def;
                tE(s.innerType, t, r), (t.seen.get(e).ref = s.innerType);
                try {
                  i = s.catchValue(void 0);
                } catch {
                  throw Error(
                    "Dynamic catch values are not supported in JSON Schema",
                  );
                }
                n.default = i;
              })(e, t, n, r)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap);
        }),
        nA = i("ZodPipe", (e, t) => {
          th.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i, s;
              return (
                (i = e._zod.def),
                void (tE(
                  (s =
                    "input" === t.io
                      ? "transform" === i.in._zod.def.type
                        ? i.out
                        : i.in
                      : i.out),
                  t,
                  r,
                ),
                (t.seen.get(e).ref = s))
              );
            }),
            (e.in = t.in),
            (e.out = t.out);
        });
      function nN(e, t) {
        return new nA({ type: "pipe", in: e, out: t });
      }
      let nI = i("ZodReadonly", (e, t) => {
          tg.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) => {
              let i;
              tE((i = e._zod.def).innerType, t, r),
                (t.seen.get(e).ref = i.innerType),
                (n.readOnly = !0);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nF = i("ZodCustom", (e, t) => {
          ty.init(e, t),
            tX.init(e, t),
            (e._zod.processJSONSchema = (e, t, n) =>
              ((e) => {
                if ("throw" === e.unrepresentable)
                  throw Error(
                    "Custom types cannot be represented in JSON Schema",
                  );
              })(e));
        });
    },
  },
]);
//# sourceMappingURL=474265.9e35a70cc50375be.js.map
