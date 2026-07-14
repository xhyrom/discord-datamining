(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97752"],
  {
    737291(t) {
      !(function (e) {
        "use strict";
        var r,
          i = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          n = !0,
          s = "[DecimalError] ",
          o = s + "Invalid argument: ",
          h = s + "Exponent out of range: ",
          f = Math.floor,
          u = Math.pow,
          c = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          l = f(1286742750677284.5),
          a = {};
        function d(t, e) {
          var r,
            i,
            s,
            o,
            h,
            f,
            u,
            c,
            l = t.constructor,
            a = l.precision;
          if (!t.s || !e.s) return e.s || (e = new l(t)), n ? b(e, a) : e;
          if (
            ((u = t.d),
            (c = e.d),
            (h = t.e),
            (s = e.e),
            (u = u.slice()),
            (o = h - s))
          ) {
            for (
              o < 0
                ? ((i = u), (o = -o), (f = c.length))
                : ((i = c), (s = h), (f = u.length)),
                o > (f = (h = Math.ceil(a / 7)) > f ? h + 1 : f + 1) &&
                  ((o = f), (i.length = 1)),
                i.reverse();
              o--;

            )
              i.push(0);
            i.reverse();
          }
          for (
            (f = u.length) - (o = c.length) < 0 &&
              ((o = f), (i = c), (c = u), (u = i)),
              r = 0;
            o;

          )
            (r = ((u[--o] = u[o] + c[o] + r) / 1e7) | 0), (u[o] %= 1e7);
          for (r && (u.unshift(r), ++s), f = u.length; 0 == u[--f]; ) u.pop();
          return (e.d = u), (e.e = s), n ? b(e, a) : e;
        }
        function g(t, e, r) {
          if (t !== ~~t || t < e || t > r) throw Error(o + t);
        }
        function p(t) {
          var e,
            r,
            i,
            n = t.length - 1,
            s = "",
            o = t[0];
          if (n > 0) {
            for (s += o, e = 1; e < n; e++)
              (r = 7 - (i = t[e] + "").length) && (s += N(r)), (s += i);
            (r = 7 - (i = (o = t[e]) + "").length) && (s += N(r));
          } else if (0 === o) return "0";
          for (; o % 10 == 0; ) o /= 10;
          return s + o;
        }
        (a.absoluteValue = a.abs =
          function () {
            var t = new this.constructor(this);
            return t.s && (t.s = 1), t;
          }),
          (a.comparedTo = a.cmp =
            function (t) {
              var e, r, i, n;
              if (((t = new this.constructor(t)), this.s !== t.s))
                return this.s || -t.s;
              if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
              for (
                e = 0, r = (i = this.d.length) < (n = t.d.length) ? i : n;
                e < r;
                ++e
              )
                if (this.d[e] !== t.d[e])
                  return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
              return i === n ? 0 : (i > n) ^ (this.s < 0) ? 1 : -1;
            }),
          (a.decimalPlaces = a.dp =
            function () {
              var t = this.d.length - 1,
                e = (t - this.e) * 7;
              if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
              return e < 0 ? 0 : e;
            }),
          (a.dividedBy = a.div =
            function (t) {
              return w(this, new this.constructor(t));
            }),
          (a.dividedToIntegerBy = a.idiv =
            function (t) {
              var e = this.constructor;
              return b(w(this, new e(t), 0, 1), e.precision);
            }),
          (a.equals = a.eq =
            function (t) {
              return !this.cmp(t);
            }),
          (a.exponent = function () {
            return m(this);
          }),
          (a.greaterThan = a.gt =
            function (t) {
              return this.cmp(t) > 0;
            }),
          (a.greaterThanOrEqualTo = a.gte =
            function (t) {
              return this.cmp(t) >= 0;
            }),
          (a.isInteger = a.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (a.isNegative = a.isneg =
            function () {
              return this.s < 0;
            }),
          (a.isPositive = a.ispos =
            function () {
              return this.s > 0;
            }),
          (a.isZero = function () {
            return 0 === this.s;
          }),
          (a.lessThan = a.lt =
            function (t) {
              return 0 > this.cmp(t);
            }),
          (a.lessThanOrEqualTo = a.lte =
            function (t) {
              return 1 > this.cmp(t);
            }),
          (a.logarithm = a.log =
            function (t) {
              var e,
                i = this.constructor,
                o = i.precision,
                h = o + 5;
              if (void 0 === t) t = new i(10);
              else if ((t = new i(t)).s < 1 || t.eq(r)) throw Error(s + "NaN");
              if (this.s < 1) throw Error(s + (this.s ? "NaN" : "-Infinity"));
              return this.eq(r)
                ? new i(0)
                : ((n = !1),
                  (e = w(x(this, h), x(t, h), h)),
                  (n = !0),
                  b(e, o));
            }),
          (a.minus = a.sub =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? L(this, t) : d(this, ((t.s = -t.s), t))
              );
            }),
          (a.modulo = a.mod =
            function (t) {
              var e,
                r = this.constructor,
                i = r.precision;
              if (!(t = new r(t)).s) throw Error(s + "NaN");
              return this.s
                ? ((n = !1),
                  (e = w(this, t, 0, 1).times(t)),
                  (n = !0),
                  this.minus(e))
                : b(new r(this), i);
            }),
          (a.naturalExponential = a.exp =
            function () {
              return v(this);
            }),
          (a.naturalLogarithm = a.ln =
            function () {
              return x(this);
            }),
          (a.negated = a.neg =
            function () {
              var t = new this.constructor(this);
              return (t.s = -t.s || 0), t;
            }),
          (a.plus = a.add =
            function (t) {
              return (
                (t = new this.constructor(t)),
                this.s == t.s ? d(this, t) : L(this, ((t.s = -t.s), t))
              );
            }),
          (a.precision = a.sd =
            function (t) {
              var e, r, i;
              if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
                throw Error(o + t);
              if (
                ((e = m(this) + 1),
                (r = 7 * (i = this.d.length - 1) + 1),
                (i = this.d[i]))
              ) {
                for (; i % 10 == 0; i /= 10) r--;
                for (i = this.d[0]; i >= 10; i /= 10) r++;
              }
              return t && e > r ? e : r;
            }),
          (a.squareRoot = a.sqrt =
            function () {
              var t,
                e,
                r,
                i,
                o,
                h,
                u,
                c = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new c(0);
                throw Error(s + "NaN");
              }
              for (
                t = m(this),
                  n = !1,
                  0 == (o = Math.sqrt(+this)) || o == 1 / 0
                    ? (((e = p(this.d)).length + t) % 2 == 0 && (e += "0"),
                      (o = Math.sqrt(e)),
                      (t = f((t + 1) / 2) - (t < 0 || t % 2)),
                      (i = new c(
                        (e =
                          o == 1 / 0
                            ? "1e" + t
                            : (e = o.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1,
                              ) + t),
                      )))
                    : (i = new c(o.toString())),
                  o = u = (r = c.precision) + 3;
                ;

              )
                if (
                  ((i = (h = i).plus(w(this, h, u + 2)).times(0.5)),
                  p(h.d).slice(0, u) === (e = p(i.d)).slice(0, u))
                ) {
                  if (((e = e.slice(u - 3, u + 1)), o == u && "4999" == e)) {
                    if ((b(h, r + 1, 0), h.times(h).eq(this))) {
                      i = h;
                      break;
                    }
                  } else if ("9999" != e) break;
                  u += 4;
                }
              return (n = !0), b(i, r);
            }),
          (a.times = a.mul =
            function (t) {
              var e,
                r,
                i,
                s,
                o,
                h,
                f,
                u,
                c,
                l = this.constructor,
                a = this.d,
                d = (t = new l(t)).d;
              if (!this.s || !t.s) return new l(0);
              for (
                t.s *= this.s,
                  r = this.e + t.e,
                  (u = a.length) < (c = d.length) &&
                    ((o = a), (a = d), (d = o), (h = u), (u = c), (c = h)),
                  o = [],
                  i = h = u + c;
                i--;

              )
                o.push(0);
              for (i = c; --i >= 0; ) {
                for (e = 0, s = u + i; s > i; )
                  (f = o[s] + d[i] * a[s - i - 1] + e),
                    (o[s--] = f % 1e7 | 0),
                    (e = (f / 1e7) | 0);
                o[s] = (o[s] + e) % 1e7 | 0;
              }
              for (; !o[--h]; ) o.pop();
              return (
                e ? ++r : o.shift(),
                (t.d = o),
                (t.e = r),
                n ? b(t, l.precision) : t
              );
            }),
          (a.toDecimalPlaces = a.todp =
            function (t, e) {
              var r = this,
                i = r.constructor;
              return ((r = new i(r)), void 0 === t)
                ? r
                : (g(t, 0, 1e9),
                  void 0 === e ? (e = i.rounding) : g(e, 0, 8),
                  b(r, t + m(r) + 1, e));
            }),
          (a.toExponential = function (t, e) {
            var r,
              i = this,
              n = i.constructor;
            return (
              void 0 === t
                ? (r = D(i, !0))
                : (g(t, 0, 1e9),
                  void 0 === e ? (e = n.rounding) : g(e, 0, 8),
                  (r = D((i = b(new n(i), t + 1, e)), !0, t + 1))),
              r
            );
          }),
          (a.toFixed = function (t, e) {
            var r,
              i,
              n = this.constructor;
            return void 0 === t
              ? D(this)
              : (g(t, 0, 1e9),
                void 0 === e ? (e = n.rounding) : g(e, 0, 8),
                (r = D(
                  (i = b(new n(this), t + m(this) + 1, e)).abs(),
                  !1,
                  t + m(i) + 1,
                )),
                this.isneg() && !this.isZero() ? "-" + r : r);
          }),
          (a.toInteger = a.toint =
            function () {
              var t = this.constructor;
              return b(new t(this), m(this) + 1, t.rounding);
            }),
          (a.toNumber = function () {
            return +this;
          }),
          (a.toPower = a.pow =
            function (t) {
              var e,
                i,
                o,
                h,
                u,
                c,
                l = this,
                a = l.constructor,
                d = +(t = new a(t));
              if (!t.s) return new a(r);
              if (!(l = new a(l)).s) {
                if (t.s < 1) throw Error(s + "Infinity");
                return l;
              }
              if (l.eq(r)) return l;
              if (((o = a.precision), t.eq(r))) return b(l, o);
              if (((c = (e = t.e) >= (i = t.d.length - 1)), (u = l.s), c)) {
                if ((i = d < 0 ? -d : d) <= 0x1fffffffffffff) {
                  for (
                    h = new a(r), e = Math.ceil(o / 7 + 4), n = !1;
                    i % 2 && _((h = h.times(l)).d, e), 0 !== (i = f(i / 2));

                  )
                    _((l = l.times(l)).d, e);
                  return (n = !0), t.s < 0 ? new a(r).div(h) : b(h, o);
                }
              } else if (u < 0) throw Error(s + "NaN");
              return (
                (u = u < 0 && 1 & t.d[Math.max(e, i)] ? -1 : 1),
                (l.s = 1),
                (n = !1),
                (h = t.times(x(l, o + 12))),
                (n = !0),
                ((h = v(h)).s = u),
                h
              );
            }),
          (a.toPrecision = function (t, e) {
            var r,
              i,
              n = this,
              s = n.constructor;
            return (
              void 0 === t
                ? ((r = m(n)), (i = D(n, r <= s.toExpNeg || r >= s.toExpPos)))
                : (g(t, 1, 1e9),
                  void 0 === e ? (e = s.rounding) : g(e, 0, 8),
                  (r = m((n = b(new s(n), t, e)))),
                  (i = D(n, t <= r || r <= s.toExpNeg, t))),
              i
            );
          }),
          (a.toSignificantDigits = a.tosd =
            function (t, e) {
              var r = this.constructor;
              return (
                void 0 === t
                  ? ((t = r.precision), (e = r.rounding))
                  : (g(t, 1, 1e9),
                    void 0 === e ? (e = r.rounding) : g(e, 0, 8)),
                b(new r(this), t, e)
              );
            }),
          (a.toString =
            a.valueOf =
            a.val =
            a.toJSON =
              function () {
                var t = m(this),
                  e = this.constructor;
                return D(this, t <= e.toExpNeg || t >= e.toExpPos);
              });
        var w = (function () {
          function t(t, e) {
            var r,
              i = 0,
              n = t.length;
            for (t = t.slice(); n--; )
              (r = t[n] * e + i), (t[n] = r % 1e7 | 0), (i = (r / 1e7) | 0);
            return i && t.unshift(i), t;
          }
          function e(t, e, r, i) {
            var n, s;
            if (r != i) s = r > i ? 1 : -1;
            else
              for (n = s = 0; n < r; n++)
                if (t[n] != e[n]) {
                  s = t[n] > e[n] ? 1 : -1;
                  break;
                }
            return s;
          }
          function r(t, e, r) {
            for (var i = 0; r--; )
              (t[r] -= i), (i = +(t[r] < e[r])), (t[r] = 1e7 * i + t[r] - e[r]);
            for (; !t[0] && t.length > 1; ) t.shift();
          }
          return function (i, n, o, h) {
            var f,
              u,
              c,
              l,
              a,
              d,
              g,
              p,
              w,
              v,
              E,
              N,
              x,
              O,
              L,
              D,
              _,
              q,
              M = i.constructor,
              y = i.s == n.s ? 1 : -1,
              A = i.d,
              P = n.d;
            if (!i.s) return new M(i);
            if (!n.s) throw Error(s + "Division by zero");
            for (
              c = 0,
                u = i.e - n.e,
                _ = P.length,
                L = A.length,
                p = (g = new M(y)).d = [];
              P[c] == (A[c] || 0);

            )
              ++c;
            if (
              (P[c] > (A[c] || 0) && --u,
              (N =
                null == o ? (o = M.precision) : h ? o + (m(i) - m(n)) + 1 : o) <
                0)
            )
              return new M(0);
            if (((N = (N / 7 + 2) | 0), (c = 0), 1 == _))
              for (l = 0, P = P[0], N++; (c < L || l) && N--; c++)
                (x = 1e7 * l + (A[c] || 0)),
                  (p[c] = (x / P) | 0),
                  (l = x % P | 0);
            else {
              for (
                (l = (1e7 / (P[0] + 1)) | 0) > 1 &&
                  ((P = t(P, l)),
                  (A = t(A, l)),
                  (_ = P.length),
                  (L = A.length)),
                  O = _,
                  v = (w = A.slice(0, _)).length;
                v < _;

              )
                w[v++] = 0;
              (q = P.slice()).unshift(0), (D = P[0]), P[1] >= 1e7 / 2 && ++D;
              do
                (l = 0),
                  (f = e(P, w, _, v)) < 0
                    ? ((E = w[0]),
                      _ != v && (E = 1e7 * E + (w[1] || 0)),
                      (l = (E / D) | 0) > 1
                        ? (l >= 1e7 && (l = 1e7 - 1),
                          (d = (a = t(P, l)).length),
                          (v = w.length),
                          1 == (f = e(a, w, d, v)) &&
                            (l--, r(a, _ < d ? q : P, d)))
                        : (0 == l && (f = l = 1), (a = P.slice())),
                      (d = a.length) < v && a.unshift(0),
                      r(w, a, v),
                      -1 == f &&
                        ((v = w.length),
                        (f = e(P, w, _, v)) < 1 &&
                          (l++, r(w, _ < v ? q : P, v))),
                      (v = w.length))
                    : 0 === f && (l++, (w = [0])),
                  (p[c++] = l),
                  f && w[0] ? (w[v++] = A[O] || 0) : ((w = [A[O]]), (v = 1));
              while ((O++ < L || void 0 !== w[0]) && N--);
            }
            return p[0] || p.shift(), (g.e = u), b(g, h ? o + m(g) + 1 : o);
          };
        })();
        function v(t, e) {
          var i,
            s,
            o,
            f,
            c,
            l = 0,
            a = 0,
            d = t.constructor,
            g = d.precision;
          if (m(t) > 16) throw Error(h + m(t));
          if (!t.s) return new d(r);
          for (
            null == e ? ((n = !1), (c = g)) : (c = e), f = new d(0.03125);
            t.abs().gte(0.1);

          )
            (t = t.times(f)), (a += 5);
          for (
            c += ((Math.log(u(2, a)) / Math.LN10) * 2 + 5) | 0,
              i = s = o = new d(r),
              d.precision = c;
            ;

          ) {
            if (
              ((s = b(s.times(t), c)),
              (i = i.times(++l)),
              p((f = o.plus(w(s, i, c))).d).slice(0, c) === p(o.d).slice(0, c))
            ) {
              for (; a--; ) o = b(o.times(o), c);
              return (d.precision = g), null == e ? ((n = !0), b(o, g)) : o;
            }
            o = f;
          }
        }
        function m(t) {
          for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
          return e;
        }
        function E(t, e, r) {
          if (e > t.LN10.sd())
            throw (
              ((n = !0),
              r && (t.precision = r),
              Error(s + "LN10 precision limit exceeded"))
            );
          return b(new t(t.LN10), e);
        }
        function N(t) {
          for (var e = ""; t--; ) e += "0";
          return e;
        }
        function x(t, e) {
          var i,
            o,
            h,
            f,
            u,
            c,
            l,
            a,
            d,
            g = 1,
            v = t,
            N = v.d,
            O = v.constructor,
            L = O.precision;
          if (v.s < 1) throw Error(s + (v.s ? "NaN" : "-Infinity"));
          if (v.eq(r)) return new O(0);
          if ((null == e ? ((n = !1), (a = L)) : (a = e), v.eq(10)))
            return null == e && (n = !0), E(O, a);
          if (
            ((O.precision = a += 10),
            (o = (i = p(N)).charAt(0)),
            !(15e14 > Math.abs((f = m(v)))))
          )
            return (
              (l = E(O, a + 2, L).times(f + "")),
              (v = x(new O(o + "." + i.slice(1)), a - 10).plus(l)),
              (O.precision = L),
              null == e ? ((n = !0), b(v, L)) : v
            );
          for (; (o < 7 && 1 != o) || (1 == o && i.charAt(1) > 3); )
            (o = (i = p((v = v.times(t)).d)).charAt(0)), g++;
          for (
            f = m(v),
              o > 1
                ? ((v = new O("0." + i)), f++)
                : (v = new O(o + "." + i.slice(1))),
              c = u = v = w(v.minus(r), v.plus(r), a),
              d = b(v.times(v), a),
              h = 3;
            ;

          ) {
            if (
              ((u = b(u.times(d), a)),
              p((l = c.plus(w(u, new O(h), a))).d).slice(0, a) ===
                p(c.d).slice(0, a))
            )
              return (
                (c = c.times(2)),
                0 !== f && (c = c.plus(E(O, a + 2, L).times(f + ""))),
                (c = w(c, new O(g), a)),
                (O.precision = L),
                null == e ? ((n = !0), b(c, L)) : c
              );
            (c = l), (h += 2);
          }
        }
        function O(t, e) {
          var r, i, s;
          for (
            (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (i = e.search(/e/i)) > 0
                ? (r < 0 && (r = i),
                  (r += +e.slice(i + 1)),
                  (e = e.substring(0, i)))
                : r < 0 && (r = e.length),
              i = 0;
            48 === e.charCodeAt(i);

          )
            ++i;
          for (s = e.length; 48 === e.charCodeAt(s - 1); ) --s;
          if ((e = e.slice(i, s))) {
            if (
              ((s -= i),
              (t.e = f((r = r - i - 1) / 7)),
              (t.d = []),
              (i = (r + 1) % 7),
              r < 0 && (i += 7),
              i < s)
            ) {
              for (i && t.d.push(+e.slice(0, i)), s -= 7; i < s; )
                t.d.push(+e.slice(i, (i += 7)));
              i = 7 - (e = e.slice(i)).length;
            } else i -= s;
            for (; i--; ) e += "0";
            if ((t.d.push(+e), n && (t.e > l || t.e < -l))) throw Error(h + r);
          } else (t.s = 0), (t.e = 0), (t.d = [0]);
          return t;
        }
        function b(t, e, r) {
          var i,
            s,
            o,
            c,
            a,
            d,
            g,
            p,
            w = t.d;
          for (c = 1, o = w[0]; o >= 10; o /= 10) c++;
          if ((i = e - c) < 0) (i += 7), (s = e), (g = w[(p = 0)]);
          else {
            if ((p = Math.ceil((i + 1) / 7)) >= (o = w.length)) return t;
            for (c = 1, g = o = w[p]; o >= 10; o /= 10) c++;
            (i %= 7), (s = i - 7 + c);
          }
          if (
            (void 0 !== r &&
              ((a = (g / (o = u(10, c - s - 1))) % 10 | 0),
              (d = e < 0 || void 0 !== w[p + 1] || g % o),
              (d =
                r < 4
                  ? (a || d) && (0 == r || r == (t.s < 0 ? 3 : 2))
                  : a > 5 ||
                    (5 == a &&
                      (4 == r ||
                        d ||
                        (6 == r &&
                          (i > 0 ? (s > 0 ? g / u(10, c - s) : 0) : w[p - 1]) %
                            10 &
                            1) ||
                        r == (t.s < 0 ? 8 : 7))))),
            e < 1 || !w[0])
          )
            return (
              d
                ? ((o = m(t)),
                  (w.length = 1),
                  (e = e - o - 1),
                  (w[0] = u(10, (7 - (e % 7)) % 7)),
                  (t.e = f(-e / 7) || 0))
                : ((w.length = 1), (w[0] = t.e = t.s = 0)),
              t
            );
          if (
            (0 == i
              ? ((w.length = p), (o = 1), p--)
              : ((w.length = p + 1),
                (o = u(10, 7 - i)),
                (w[p] = s > 0 ? ((g / u(10, c - s)) % u(10, s) | 0) * o : 0)),
            d)
          )
            for (;;)
              if (0 == p) {
                1e7 == (w[0] += o) && ((w[0] = 1), ++t.e);
                break;
              } else {
                if (((w[p] += o), 1e7 != w[p])) break;
                (w[p--] = 0), (o = 1);
              }
          for (i = w.length; 0 === w[--i]; ) w.pop();
          if (n && (t.e > l || t.e < -l)) throw Error(h + m(t));
          return t;
        }
        function L(t, e) {
          var r,
            i,
            s,
            o,
            h,
            f,
            u,
            c,
            l,
            a,
            d = t.constructor,
            g = d.precision;
          if (!t.s || !e.s)
            return e.s ? (e.s = -e.s) : (e = new d(t)), n ? b(e, g) : e;
          if (
            ((u = t.d),
            (a = e.d),
            (i = e.e),
            (c = t.e),
            (u = u.slice()),
            (h = c - i))
          ) {
            for (
              (l = h < 0)
                ? ((r = u), (h = -h), (f = a.length))
                : ((r = a), (i = c), (f = u.length)),
                h > (s = Math.max(Math.ceil(g / 7), f) + 2) &&
                  ((h = s), (r.length = 1)),
                r.reverse(),
                s = h;
              s--;

            )
              r.push(0);
            r.reverse();
          } else {
            for (
              (l = (s = u.length) < (f = a.length)) && (f = s), s = 0;
              s < f;
              s++
            )
              if (u[s] != a[s]) {
                l = u[s] < a[s];
                break;
              }
            h = 0;
          }
          for (
            l && ((r = u), (u = a), (a = r), (e.s = -e.s)),
              f = u.length,
              s = a.length - f;
            s > 0;
            --s
          )
            u[f++] = 0;
          for (s = a.length; s > h; ) {
            if (u[--s] < a[s]) {
              for (o = s; o && 0 === u[--o]; ) u[o] = 1e7 - 1;
              --u[o], (u[s] += 1e7);
            }
            u[s] -= a[s];
          }
          for (; 0 === u[--f]; ) u.pop();
          for (; 0 === u[0]; u.shift()) --i;
          return u[0] ? ((e.d = u), (e.e = i), n ? b(e, g) : e) : new d(0);
        }
        function D(t, e, r) {
          var i,
            n = m(t),
            s = p(t.d),
            o = s.length;
          return (
            e
              ? (r && (i = r - o) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + N(i))
                  : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
                (s = s + (n < 0 ? "e" : "e+") + n))
              : n < 0
                ? ((s = "0." + N(-n - 1) + s),
                  r && (i = r - o) > 0 && (s += N(i)))
                : n >= o
                  ? ((s += N(n + 1 - o)),
                    r && (i = r - n - 1) > 0 && (s = s + "." + N(i)))
                  : ((i = n + 1) < o && (s = s.slice(0, i) + "." + s.slice(i)),
                    r &&
                      (i = r - o) > 0 &&
                      (n + 1 === o && (s += "."), (s += N(i)))),
            t.s < 0 ? "-" + s : s
          );
        }
        function _(t, e) {
          if (t.length > e) return (t.length = e), !0;
        }
        function q(t) {
          if (!t || "object" != typeof t) throw Error(s + "Object expected");
          var e,
            r,
            i,
            n = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (e = 0; e < n.length; e += 3)
            if (void 0 !== (i = t[(r = n[e])]))
              if (f(i) === i && i >= n[e + 1] && i <= n[e + 2]) this[r] = i;
              else throw Error(o + r + ": " + i);
          if (void 0 !== (i = t[(r = "LN10")]))
            if (i == Math.LN10) this[r] = new this(i);
            else throw Error(o + r + ": " + i);
          return this;
        }
        ((i = (function t(e) {
          var r, i, n;
          function s(t) {
            if (!(this instanceof s)) return new s(t);
            if (((this.constructor = s), t instanceof s)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(o + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return O(this, t.toString());
            }
            if ("string" != typeof t) throw Error(o + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              c.test(t))
            )
              O(this, t);
            else throw Error(o + t);
          }
          if (
            ((s.prototype = a),
            (s.ROUND_UP = 0),
            (s.ROUND_DOWN = 1),
            (s.ROUND_CEIL = 2),
            (s.ROUND_FLOOR = 3),
            (s.ROUND_HALF_UP = 4),
            (s.ROUND_HALF_DOWN = 5),
            (s.ROUND_HALF_EVEN = 6),
            (s.ROUND_HALF_CEIL = 7),
            (s.ROUND_HALF_FLOOR = 8),
            (s.clone = t),
            (s.config = s.set = q),
            void 0 === e && (e = {}),
            e)
          )
            for (
              r = 0,
                n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < n.length;

            )
              e.hasOwnProperty((i = n[r++])) || (e[i] = this[i]);
          return s.config(e), s;
        })(i)).default = i.Decimal =
          i),
          (r = new i(1)),
          "function" == typeof define && define.amd
            ? define(function () {
                return i;
              })
            : t.exports
              ? (t.exports = i)
              : (e ||
                  (e =
                    "u" > typeof self && self && self.self == self
                      ? self
                      : Function("return this")()),
                (e.Decimal = i));
      })(this);
    },
  },
]);
//# sourceMappingURL=97752.0d8feb66d0d9166b.js.map
