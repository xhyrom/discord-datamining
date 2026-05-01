"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65006"],
  {
    830845(n, t, e) {
      e.d(t, {
        AO: () => h,
        Fu: () => l,
        TM: () => T,
        sC: () => E,
        yJ: () => d,
        zR: () => O,
      });
      var o = e(1139),
        i = e(861193),
        r = e(987701),
        a = e(258635);
      function c(n) {
        return "/" === n.charAt(0) ? n : "/" + n;
      }
      function u(n) {
        return "/" === n.charAt(0) ? n.substr(1) : n;
      }
      function s(n, t) {
        return 0 === n.toLowerCase().indexOf(t.toLowerCase()) &&
          -1 !== "/?#".indexOf(n.charAt(t.length))
          ? n.substr(t.length)
          : n;
      }
      function f(n) {
        return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n;
      }
      function h(n) {
        var t = n.pathname,
          e = n.search,
          o = n.hash,
          i = t || "/";
        return (
          e && "?" !== e && (i += "?" === e.charAt(0) ? e : "?" + e),
          o && "#" !== o && (i += "#" === o.charAt(0) ? o : "#" + o),
          i
        );
      }
      function d(n, t, e, r) {
        var a, c, u, s, f, h;
        "string" == typeof n
          ? ((u = ""),
            (s = ""),
            -1 !== (f = (c = n || "/").indexOf("#")) &&
              ((s = c.substr(f)), (c = c.substr(0, f))),
            -1 !== (h = c.indexOf("?")) &&
              ((u = c.substr(h)), (c = c.substr(0, h))),
            ((a = {
              pathname: c,
              search: "?" === u ? "" : u,
              hash: "#" === s ? "" : s,
            }).state = t))
          : (void 0 === (a = (0, o.A)({}, n)).pathname && (a.pathname = ""),
            a.search
              ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search)
              : (a.search = ""),
            a.hash
              ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash)
              : (a.hash = ""),
            void 0 !== t && void 0 === a.state && (a.state = t));
        try {
          a.pathname = decodeURI(a.pathname);
        } catch (n) {
          if (n instanceof URIError)
            throw URIError(
              'Pathname "' +
                a.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.',
            );
          throw n;
        }
        return (
          e && (a.key = e),
          r
            ? a.pathname
              ? "/" !== a.pathname.charAt(0) &&
                (a.pathname = (0, i.A)(a.pathname, r.pathname))
              : (a.pathname = r.pathname)
            : a.pathname || (a.pathname = "/"),
          a
        );
      }
      function l(n, t) {
        return (
          n.pathname === t.pathname &&
          n.search === t.search &&
          n.hash === t.hash &&
          n.key === t.key &&
          (0, r.A)(n.state, t.state)
        );
      }
      function v() {
        var n = null,
          t = [];
        return {
          setPrompt: function (t) {
            return (
              (n = t),
              function () {
                n === t && (n = null);
              }
            );
          },
          confirmTransitionTo: function (t, e, o, i) {
            if (null != n) {
              var r = "function" == typeof n ? n(t, e) : n;
              "string" == typeof r
                ? "function" == typeof o
                  ? o(r, i)
                  : i(!0)
                : i(!1 !== r);
            } else i(!0);
          },
          appendListener: function (n) {
            var e = !0;
            function o() {
              e && n.apply(void 0, arguments);
            }
            return (
              t.push(o),
              function () {
                (e = !1),
                  (t = t.filter(function (n) {
                    return n !== o;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var n = arguments.length, e = Array(n), o = 0; o < n; o++)
              e[o] = arguments[o];
            t.forEach(function (n) {
              return n.apply(void 0, e);
            });
          },
        };
      }
      var p = !!(
        "u" > typeof window &&
        window.document &&
        window.document.createElement
      );
      function w(n, t) {
        t(window.confirm(n));
      }
      var g = "popstate",
        m = "hashchange";
      function y() {
        try {
          return window.history.state || {};
        } catch (n) {
          return {};
        }
      }
      function O(n) {
        void 0 === n && (n = {}), p || (0, a.A)(!1);
        var t,
          e = window.history,
          i =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          r = -1 !== window.navigator.userAgent.indexOf("Trident"),
          u = n,
          l = u.forceRefresh,
          O = void 0 !== l && l,
          P = u.getUserConfirmation,
          A = void 0 === P ? w : P,
          x = u.keyLength,
          b = void 0 === x ? 6 : x,
          k = n.basename ? f(c(n.basename)) : "";
        function T(n) {
          var t = n || {},
            e = t.key,
            o = t.state,
            i = window.location,
            r = i.pathname + i.search + i.hash;
          return k && (r = s(r, k)), d(r, o, e);
        }
        function L() {
          return Math.random().toString(36).substr(2, b);
        }
        var E = v();
        function C(n) {
          (0, o.A)(z, n),
            (z.length = e.length),
            E.notifyListeners(z.location, z.action);
        }
        function S(n) {
          (void 0 !== n.state || -1 !== navigator.userAgent.indexOf("CriOS")) &&
            I(T(n.state));
        }
        function U() {
          I(T(y()));
        }
        var R = !1;
        function I(n) {
          R
            ? ((R = !1), C())
            : E.confirmTransitionTo(n, "POP", A, function (t) {
                var e, o, i, r, a;
                t
                  ? C({ action: "POP", location: n })
                  : ((e = n),
                    (o = z.location),
                    -1 === (i = M.indexOf(o.key)) && (i = 0),
                    -1 === (r = M.indexOf(e.key)) && (r = 0),
                    (a = i - r) && ((R = !0), F(a)));
              });
        }
        var H = T(y()),
          M = [H.key];
        function j(n) {
          return k + h(n);
        }
        function F(n) {
          e.go(n);
        }
        var B = 0;
        function _(n) {
          1 === (B += n) && 1 === n
            ? (window.addEventListener(g, S),
              r && window.addEventListener(m, U))
            : 0 === B &&
              (window.removeEventListener(g, S),
              r && window.removeEventListener(m, U));
        }
        var q = !1,
          z = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: j,
            push: function (n, t) {
              var o = "PUSH",
                r = d(n, t, L(), z.location);
              E.confirmTransitionTo(r, o, A, function (n) {
                if (n) {
                  var t = j(r),
                    a = r.key,
                    c = r.state;
                  if (i)
                    if ((e.pushState({ key: a, state: c }, null, t), O))
                      window.location.href = t;
                    else {
                      var u = M.indexOf(z.location.key),
                        s = M.slice(0, u + 1);
                      s.push(r.key), (M = s), C({ action: o, location: r });
                    }
                  else window.location.href = t;
                }
              });
            },
            replace: function (n, t) {
              var o = "REPLACE",
                r = d(n, t, L(), z.location);
              E.confirmTransitionTo(r, o, A, function (n) {
                if (n) {
                  var t = j(r),
                    a = r.key,
                    c = r.state;
                  if (i)
                    if ((e.replaceState({ key: a, state: c }, null, t), O))
                      window.location.replace(t);
                    else {
                      var u = M.indexOf(z.location.key);
                      -1 !== u && (M[u] = r.key), C({ action: o, location: r });
                    }
                  else window.location.replace(t);
                }
              });
            },
            go: F,
            goBack: function () {
              F(-1);
            },
            goForward: function () {
              F(1);
            },
            block: function (n) {
              void 0 === n && (n = !1);
              var t = E.setPrompt(n);
              return (
                q || (_(1), (q = !0)),
                function () {
                  return q && ((q = !1), _(-1)), t();
                }
              );
            },
            listen: function (n) {
              var t = E.appendListener(n);
              return (
                _(1),
                function () {
                  _(-1), t();
                }
              );
            },
          };
        return z;
      }
      var P = "hashchange",
        A = {
          hashbang: {
            encodePath: function (n) {
              return "!" === n.charAt(0) ? n : "!/" + u(n);
            },
            decodePath: function (n) {
              return "!" === n.charAt(0) ? n.substr(1) : n;
            },
          },
          noslash: { encodePath: u, decodePath: c },
          slash: { encodePath: c, decodePath: c },
        };
      function x(n) {
        var t = n.indexOf("#");
        return -1 === t ? n : n.slice(0, t);
      }
      function b() {
        var n = window.location.href,
          t = n.indexOf("#");
        return -1 === t ? "" : n.substring(t + 1);
      }
      function k(n) {
        window.location.replace(x(window.location.href) + "#" + n);
      }
      function T(n) {
        void 0 === n && (n = {}), p || (0, a.A)(!1);
        var t = window.history;
        window.navigator.userAgent.indexOf("Firefox");
        var e = n,
          i = e.getUserConfirmation,
          r = void 0 === i ? w : i,
          u = e.hashType,
          l = n.basename ? f(c(n.basename)) : "",
          g = A[void 0 === u ? "slash" : u],
          m = g.encodePath,
          y = g.decodePath;
        function O() {
          var n = y(b());
          return l && (n = s(n, l)), d(n);
        }
        var T = v();
        function L(n) {
          (0, o.A)(_, n),
            (_.length = t.length),
            T.notifyListeners(_.location, _.action);
        }
        var E = !1,
          C = null;
        function S() {
          var n = b(),
            t = m(n);
          if (n !== t) k(t);
          else {
            var e,
              o = O(),
              i = _.location;
            if (
              (!E &&
                i.pathname === o.pathname &&
                i.search === o.search &&
                i.hash === o.hash) ||
              C === h(o)
            )
              return;
            (C = null),
              (e = o),
              E
                ? ((E = !1), L())
                : T.confirmTransitionTo(e, "POP", r, function (n) {
                    var t, o, i, r, a;
                    n
                      ? L({ action: "POP", location: e })
                      : ((t = e),
                        (o = _.location),
                        -1 === (i = H.lastIndexOf(h(o))) && (i = 0),
                        -1 === (r = H.lastIndexOf(h(t))) && (r = 0),
                        (a = i - r) && ((E = !0), M(a)));
                  });
          }
        }
        var U = b(),
          R = m(U);
        U !== R && k(R);
        var I = O(),
          H = [h(I)];
        function M(n) {
          t.go(n);
        }
        var j = 0;
        function F(n) {
          1 === (j += n) && 1 === n
            ? window.addEventListener(P, S)
            : 0 === j && window.removeEventListener(P, S);
        }
        var B = !1,
          _ = {
            length: t.length,
            action: "POP",
            location: I,
            createHref: function (n) {
              var t = document.querySelector("base"),
                e = "";
              return (
                t && t.getAttribute("href") && (e = x(window.location.href)),
                e + "#" + m(l + h(n))
              );
            },
            push: function (n, t) {
              var e = "PUSH",
                o = d(n, void 0, void 0, _.location);
              T.confirmTransitionTo(o, e, r, function (n) {
                if (n) {
                  var t = h(o),
                    i = m(l + t);
                  if (b() !== i) {
                    (C = t), (window.location.hash = i);
                    var r = H.lastIndexOf(h(_.location)),
                      a = H.slice(0, r + 1);
                    a.push(t), (H = a), L({ action: e, location: o });
                  } else L();
                }
              });
            },
            replace: function (n, t) {
              var e = "REPLACE",
                o = d(n, void 0, void 0, _.location);
              T.confirmTransitionTo(o, e, r, function (n) {
                if (n) {
                  var t = h(o),
                    i = m(l + t);
                  b() !== i && ((C = t), k(i));
                  var r = H.indexOf(h(_.location));
                  -1 !== r && (H[r] = t), L({ action: e, location: o });
                }
              });
            },
            go: M,
            goBack: function () {
              M(-1);
            },
            goForward: function () {
              M(1);
            },
            block: function (n) {
              void 0 === n && (n = !1);
              var t = T.setPrompt(n);
              return (
                B || (F(1), (B = !0)),
                function () {
                  return B && ((B = !1), F(-1)), t();
                }
              );
            },
            listen: function (n) {
              var t = T.appendListener(n);
              return (
                F(1),
                function () {
                  F(-1), t();
                }
              );
            },
          };
        return _;
      }
      function L(n, t, e) {
        return Math.min(Math.max(n, t), e);
      }
      function E(n) {
        void 0 === n && (n = {});
        var t = n,
          e = t.getUserConfirmation,
          i = t.initialEntries,
          r = void 0 === i ? ["/"] : i,
          a = t.initialIndex,
          c = t.keyLength,
          u = void 0 === c ? 6 : c,
          s = v();
        function f(n) {
          (0, o.A)(m, n),
            (m.length = m.entries.length),
            s.notifyListeners(m.location, m.action);
        }
        function l() {
          return Math.random().toString(36).substr(2, u);
        }
        var p = L(void 0 === a ? 0 : a, 0, r.length - 1),
          w = r.map(function (n) {
            return "string" == typeof n
              ? d(n, void 0, l())
              : d(n, void 0, n.key || l());
          });
        function g(n) {
          var t = L(m.index + n, 0, m.entries.length - 1),
            o = m.entries[t];
          s.confirmTransitionTo(o, "POP", e, function (n) {
            n ? f({ action: "POP", location: o, index: t }) : f();
          });
        }
        var m = {
          length: w.length,
          action: "POP",
          location: w[p],
          index: p,
          entries: w,
          createHref: h,
          push: function (n, t) {
            var o = "PUSH",
              i = d(n, t, l(), m.location);
            s.confirmTransitionTo(i, o, e, function (n) {
              if (n) {
                var t = m.index + 1,
                  e = m.entries.slice(0);
                e.length > t ? e.splice(t, e.length - t, i) : e.push(i),
                  f({ action: o, location: i, index: t, entries: e });
              }
            });
          },
          replace: function (n, t) {
            var o = "REPLACE",
              i = d(n, t, l(), m.location);
            s.confirmTransitionTo(i, o, e, function (n) {
              n && ((m.entries[m.index] = i), f({ action: o, location: i }));
            });
          },
          go: g,
          goBack: function () {
            g(-1);
          },
          goForward: function () {
            g(1);
          },
          canGo: function (n) {
            var t = m.index + n;
            return t >= 0 && t < m.entries.length;
          },
          block: function (n) {
            return void 0 === n && (n = !1), s.setPrompt(n);
          },
          listen: function (n) {
            return s.appendListener(n);
          },
        };
        return m;
      }
    },
    987701(n, t, e) {
      function o(n) {
        return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n);
      }
      e.d(t, { A: () => i });
      let i = function n(t, e) {
        if (t === e) return !0;
        if (null == t || null == e) return !1;
        if (Array.isArray(t))
          return (
            Array.isArray(e) &&
            t.length === e.length &&
            t.every(function (t, o) {
              return n(t, e[o]);
            })
          );
        if ("object" == typeof t || "object" == typeof e) {
          var i = o(t),
            r = o(e);
          return i !== t || r !== e
            ? n(i, r)
            : Object.keys(Object.assign({}, t, e)).every(function (o) {
                return n(t[o], e[o]);
              });
        }
        return !1;
      };
    },
  },
]);
//# sourceMappingURL=65006.b21585fc1e8db10d.js.map
